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
  verticalWobble: number;
  verticalWobbleSpd: number;
  alpha: number;
};

export default function PetalsCanvas({
  color = "#EDE6DA",
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
        r: rand(4, 10), // 작고 섬세한 사이즈로 복구
        rot: rand(0, Math.PI * 2),
        rotSpd: rand(-0.02, 0.02),
        spd: rand(0.4, 0.9), // 자연스럽게 하늘거리는 속도
        drift: rand(-0.2, 0.3),
        wobble: rand(0, Math.PI * 2),
        wobbleSpd: rand(0.01, 0.03),
        verticalWobble: rand(0, Math.PI * 2),
        verticalWobbleSpd: rand(0.005, 0.015),
        alpha: rand(0.3, 0.6), // 은은한 투명도
      }));
    };

    const drawPetal = (p: Petal) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);

      // 훨씬 부드러운 외곽선 효과
      ctx.shadowBlur = 10;
      ctx.shadowColor = 'rgba(255, 230, 230, 0.3)';
      
      // 꽃잎 그라데이션 (백도화 느낌의 은은한 핑크-화이트)
      const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, p.r);
      const baseAlpha = p.alpha;
      gradient.addColorStop(0, `rgba(255, 255, 255, ${baseAlpha})`); // 중심부 화이트
      gradient.addColorStop(0.5, `rgba(255, 240, 245, ${baseAlpha * 0.8})`); // 연한 핑크
      gradient.addColorStop(1, `rgba(255, 220, 230, 0)`); // 끝부분 소멸

      ctx.fillStyle = gradient;

      // 하트 모양에 가까운 자연스러운 꽃잎 형태 렌더링
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.bezierCurveTo(-p.r * 1.5, -p.r * 1.5, -p.r * 2, p.r * 0.5, 0, p.r * 1.5);
      ctx.bezierCurveTo(p.r * 2, p.r * 0.5, p.r * 1.5, -p.r * 1.5, 0, 0);
      ctx.closePath();
      ctx.fill();

      // 꽃잎의 얇은 질감을 위한 하이라이트 추가
      ctx.globalCompositeOperation = 'overlay';
      ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
      ctx.beginPath();
      ctx.ellipse(-p.r * 0.3, 0, p.r * 0.2, p.r * 0.8, 0.2, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    };

    const tick = () => {
      const parent = canvas.parentElement;
      const w = parent?.clientWidth ?? window.innerWidth;
      const h = parent?.clientHeight ?? 520;

      ctx.clearRect(0, 0, w, h);

      for (const p of petalsRef.current) {
        p.wobble += p.wobbleSpd;
        p.verticalWobble += p.verticalWobbleSpd;
        p.rot += p.rotSpd;
        
        // 바람에 날리는 듯한 불규칙한 이동
        p.x += p.drift + Math.sin(p.wobble) * 1.2;
        p.y += p.spd + Math.cos(p.verticalWobble) * 0.5;

        drawPetal(p);

        if (p.y > h + 30) {
          p.y = -30;
          p.x = rand(0, w);
        }
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
