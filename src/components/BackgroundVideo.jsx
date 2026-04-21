import { useEffect, useRef, useState } from "react";

const VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_39FK6IjsEkKkF7he27tKyECcTHY/hf_20260421_203849_5c26dfcd-5c84-4fa0-8f01-a23c36579673.mp4";

// Higher = more frames extracted = smoother scrub, but longer load time
const EXTRACT_FPS = 24;

export default function BackgroundVideo() {
  const canvasRef = useRef(null);
  const [loadPct, setLoadPct] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    // Size canvas to screen, capped at 1920×1080 to limit GPU memory
    canvas.width = Math.min(window.innerWidth, 1920);
    canvas.height = Math.min(window.innerHeight, 1080);

    const frames = []; // Array<ImageBitmap> — pre-decoded, instant to draw
    let targetIdx = 0;
    let drawnIdx = -1;
    let rafId;
    let destroyed = false;

    // Cover-scale an ImageBitmap onto the canvas
    const drawBitmap = (bitmap) => {
      const { width: bw, height: bh } = bitmap;
      const cw = canvas.width;
      const ch = canvas.height;
      const scale = Math.max(cw / bw, ch / bh);
      const dw = bw * scale;
      const dh = bh * scale;
      ctx.drawImage(bitmap, (cw - dw) / 2, (ch - dh) / 2, dw, dh);
    };

    // Scroll → map scrollY exactly to frame index
    const onScroll = () => {
      if (!frames.length) return;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll <= 0) return;
      targetIdx = Math.min(
        Math.round((window.scrollY / maxScroll) * (frames.length - 1)),
        frames.length - 1
      );
    };

    // RAF loop: draw only when target frame changes — O(1), no seeking ever
    const tick = () => {
      if (drawnIdx !== targetIdx && frames[targetIdx]) {
        drawnIdx = targetIdx;
        drawBitmap(frames[targetIdx]);
      }
      rafId = requestAnimationFrame(tick);
    };

    const init = async () => {
      // Phase 1: download the full video as a blob so every frame is
      // locally available before we start seeking. Without this, seeks
      // into unbuffered regions fire 'seeked' at the wrong position.
      const resp = await fetch(VIDEO_URL);
      const reader = resp.body.getReader();
      const contentLength = Number(resp.headers.get("Content-Length")) || 0;
      const chunks = [];
      let received = 0;

      while (!destroyed) {
        const { done, value } = await reader.read();
        if (done) break;
        chunks.push(value);
        received += value.length;
        if (contentLength)
          setLoadPct(Math.round((received / contentLength) * 40)); // 0-40%
      }
      if (destroyed) return;

      const blobUrl = URL.createObjectURL(new Blob(chunks));

      // Phase 2: extract frames from the local blob — seeks are instant
      const video = document.createElement("video");
      video.muted = true;
      video.playsInline = true;
      video.preload = "auto";
      video.src = blobUrl;

      await new Promise((res, rej) => {
        video.addEventListener("loadedmetadata", res, { once: true });
        video.addEventListener("error", rej, { once: true });
      });

      const duration = video.duration;
      const frameInterval = 1 / EXTRACT_FPS;

      window.addEventListener("scroll", onScroll, { passive: true });
      rafId = requestAnimationFrame(tick);

      // Play the video and capture each displayed frame via rVFC.
      // More reliable than seeking — some encodings fail silently
      // on currentTime seeks past a certain point.
      await new Promise((resolve) => {
        let lastCapturedTime = -frameInterval;

        const onFrame = (_now, metadata) => {
          if (destroyed) return resolve();
          const t = metadata.mediaTime;
          if (t - lastCapturedTime >= frameInterval - 0.001) {
            lastCapturedTime = t;
            createImageBitmap(video).then((bitmap) => {
              if (destroyed) return bitmap.close?.();
              frames.push(bitmap);
              if (frames.length === 1) drawBitmap(bitmap);
            });
            setLoadPct(40 + Math.round((t / duration) * 60));
          }
          if (t < duration - 0.05) {
            video.requestVideoFrameCallback(onFrame);
          } else {
            resolve();
          }
        };

        video.playbackRate = 4;
        video.requestVideoFrameCallback(onFrame);
        video.play().catch(() => resolve());
        video.addEventListener("ended", () => resolve(), { once: true });
      });

      setLoadPct(100);
      URL.revokeObjectURL(blobUrl);
    };

    init().catch((err) => console.error("Frame extraction error:", err));

    return () => {
      destroyed = true;
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      frames.forEach((f) => f.close?.());
    };
  }, []);

  return (
    <>
      {/* All frames live in GPU memory — scroll just picks which one to draw */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none"
        style={{ zIndex: 0, width: "100%", height: "100%" }}
      />

      {/* Thin loading bar at bottom while extracting frames */}
      {loadPct < 100 && (
        <div
          className="fixed bottom-0 left-0 h-px bg-white/30 transition-all duration-100"
          style={{ zIndex: 10, width: `${loadPct}%` }}
        />
      )}

      {/* Dark overlay */}
      <div
        className="fixed inset-0 bg-black/50 pointer-events-none"
        style={{ zIndex: 1 }}
      />
    </>
  );
}
