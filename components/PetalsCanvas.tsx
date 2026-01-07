"use client";

import { useEffect, useRef } from "react";

type Petal = {
  x: number;
  y: number;
  r: number;
  rot: number;
  rotSpd: number;
  spd: number;
  drift: number;
  wobble: number;
  wobbleSpd: number;
  alpha: number;
};

export default function PetalsCanvas({
  color = "#fce7f3",
  density = 28,
}: {
  color?: string;
  density?: number;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const petalsRef = useRef<Petal[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const resize = () => {
      const parent = canvas.parentElement;
      const w = parent?.clientWidth ?? window.innerWidth;
      const h = parent?.clientHeight ?? 520;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const rand = (min: number, max: number) => min + Math.random() * (max - min);

    const seed = () => {
      const parent = canvas.parentElement;
      const w = parent?.clientWidth ?? window.innerWidth;
      const h = parent?.clientHeight ?? 520;

      petalsRef.current = Array.from({ length: density }, () => ({
        x: rand(0, w),
        y: rand(-h, h),
        r: rand(6, 14),
        rot: rand(0, Math.PI * 2),
        rotSpd: rand(-0.012, 0.012),
        spd: rand(0.3, 1.0),
        drift: rand(-0.25, 0.35),
        wobble: rand(0, Math.PI * 2),
        wobbleSpd: rand(0.006, 0.02),
        alpha: rand(0.35, 0.7),
      }));
    };

    const drawPetal = (p: Petal) => {
      // 간단한 꽃잎 모양(베지어)
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);

      ctx.globalAlpha = p.alpha;
      ctx.fillStyle = color;

      ctx.beginPath();
      ctx.moveTo(0, -p.r);
      ctx.bezierCurveTo(p.r * 0.9, -p.r * 0.3, p.r * 0.9, p.r * 0.6, 0, p.r);
      ctx.bezierCurveTo(-p.r * 0.9, p.r * 0.6, -p.r * 0.9, -p.r * 0.3, 0, -p.r);
      ctx.closePath();
      ctx.fill();

      // 아주 은은한 하이라이트
      ctx.globalAlpha = p.alpha * 0.25;
      ctx.fillStyle = "#ffffff";
      ctx.beginPath();
      ctx.ellipse(0, -p.r * 0.25, p.r * 0.25, p.r * 0.55, 0, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
      ctx.globalAlpha = 1;
    };

    const tick = () => {
      const parent = canvas.parentElement;
      const w = parent?.clientWidth ?? window.innerWidth;
      const h = parent?.clientHeight ?? 520;

      ctx.clearRect(0, 0, w, h);

      for (const p of petalsRef.current) {
        p.wobble += p.wobbleSpd;
        p.rot += p.rotSpd;
        p.x += p.drift + Math.sin(p.wobble) * 0.15;
        p.y += p.spd;

        drawPetal(p);

        // 아래로 넘어가면 위로 재생성
        if (p.y > h + 30) {
          p.y = -30;
          p.x = rand(0, w);
        }
        // 좌우 넘어가면 반대쪽으로
        if (p.x < -30) p.x = w + 30;
        if (p.x > w + 30) p.x = -30;
      }

      rafRef.current = window.requestAnimationFrame(tick);
    };

    const onResize = () => {
      resize();
      seed();
    };

    resize();
    seed();

    if (!prefersReduced) {
      rafRef.current = window.requestAnimationFrame(tick);
    }

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
    };
  }, [color, density]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}
