"use client";
import { useEffect, useRef } from "react";

const XP_COLORS = ["#5B9BD5", "#4A8F4A", "#E8941A", "#D4C020", "#9B4EC8"];

export default function VinylDisc({ size = 320 }: { size?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    canvas.style.width = `${size}px`;
    canvas.style.height = `${size}px`;
    ctx.scale(dpr, dpr);

    const cx = size / 2;
    const cy = size / 2;
    const R = size / 2 - 4;

    let angle = 0;
    let raf: number;

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, size, size);

      // Outer disc
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.fillStyle = "#111810";
      ctx.fill();

      // Grooves
      for (let r = R * 0.35; r < R * 0.97; r += 6) {
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(0,0,0,${0.3 + (r / R) * 0.2})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // XP Wheel sectors
      const slices = XP_COLORS.length;
      const sliceAngle = (Math.PI * 2) / slices;
      const wheelR = R * 0.42;
      for (let i = 0; i < slices; i++) {
        const start = angle + i * sliceAngle;
        const end = start + sliceAngle - 0.04;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.arc(cx, cy, wheelR, start, end);
        ctx.closePath();
        ctx.fillStyle = XP_COLORS[i] + "CC";
        ctx.fill();
      }

      // Center label
      const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, R * 0.28);
      grad.addColorStop(0, "#1E2D22");
      grad.addColorStop(1, "#0E1410");
      ctx.beginPath();
      ctx.arc(cx, cy, R * 0.28, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();

      // Center hole
      ctx.beginPath();
      ctx.arc(cx, cy, R * 0.04, 0, Math.PI * 2);
      ctx.fillStyle = "#0a0f0a";
      ctx.fill();

      // NFC symbol hint
      ctx.save();
      ctx.translate(cx, cy);
      ctx.strokeStyle = "rgba(212, 192, 32, 0.5)";
      ctx.lineWidth = 1.5;
      ctx.lineCap = "round";
      for (let i = 1; i <= 3; i++) {
        ctx.beginPath();
        ctx.arc(0, 0, R * 0.09 * i, -Math.PI * 0.5, Math.PI * 0.3);
        ctx.stroke();
      }
      ctx.restore();

      angle += 0.003;
      raf = requestAnimationFrame(draw);
    }

    draw();
    return () => cancelAnimationFrame(raf);
  }, [size]);

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <div
        className="absolute inset-0 rounded-full"
        style={{ boxShadow: "0 0 60px rgba(91, 155, 213, 0.08), 0 0 120px rgba(232, 148, 26, 0.06)" }}
      />
      <canvas ref={canvasRef} className="rounded-full" />
    </div>
  );
}
