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
        r: rand(10, 24), // 크기 대폭 확대 (기존 6~14)
        rot: rand(0, Math.PI * 2),
        rotSpd: rand(-0.015, 0.015), // 회전 속도 증가
        spd: rand(0.6, 1.8), // 낙하 속도 증가 (기존 0.05~0.2)
        drift: rand(-0.4, 0.6), // 우측으로 더 날리는 드리프트 효과
        wobble: rand(0, Math.PI * 2),
        wobbleSpd: rand(0.02, 0.05), // 좌우 흔들림 속도 증가
        verticalWobble: rand(0, Math.PI * 2),
        verticalWobbleSpd: rand(0.01, 0.025),
        alpha: rand(0.4, 0.8), // 투명도 강화 (더 선명하게)
      }));
    };

    const drawPetal = (p: Petal) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);

      // 외곽선을 부드럽게 하기 위한 shadow blur (더 강하게)
      ctx.shadowBlur = 15;
      ctx.shadowColor = color;
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;

      // 더 연한 투명도로 그라데이션 적용
      const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, p.r * 2);
      // 색상을 rgba로 변환하여 투명도 조절
      const baseAlpha = p.alpha * 0.6; // 전체적으로 더 투명하게
      gradient.addColorStop(0, `rgba(237, 230, 218, ${baseAlpha})`); // 아이보리
      gradient.addColorStop(0.3, `rgba(197, 139, 160, ${baseAlpha * 0.7})`); // 더스티 로즈
      gradient.addColorStop(0.7, `rgba(212, 178, 167, ${baseAlpha * 0.4})`); // 로즈 샴페인 골드
      gradient.addColorStop(1, 'rgba(212, 178, 167, 0)');

      ctx.globalAlpha = 1;
      ctx.fillStyle = gradient;

      // 부드러운 꽃잎 모양
      ctx.beginPath();
      ctx.moveTo(0, -p.r);
      ctx.bezierCurveTo(p.r * 0.9, -p.r * 0.3, p.r * 0.9, p.r * 0.6, 0, p.r);
      ctx.bezierCurveTo(-p.r * 0.9, p.r * 0.6, -p.r * 0.9, -p.r * 0.3, 0, -p.r);
      ctx.closePath();
      ctx.fill();

      // 추가 부드러움을 위한 오버레이 (더 자연스러운 블렌딩)
      ctx.globalCompositeOperation = 'screen';
      ctx.globalAlpha = p.alpha * 0.15;
      ctx.shadowBlur = 8;
      ctx.fillStyle = 'rgba(197, 139, 160, 0.12)';
      ctx.beginPath();
      ctx.ellipse(0, 0, p.r * 0.6, p.r * 1.0, 0, 0, Math.PI * 2);
      ctx.fill();

      ctx.globalCompositeOperation = 'source-over';
      ctx.restore();
      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;
    };

    const tick = () => {
      const parent = canvas.parentElement;
      const w = parent?.clientWidth ?? window.innerWidth;
      const h = parent?.clientHeight ?? 520;

      ctx.clearRect(0, 0, w, h);

      for (const p of petalsRef.current) {
        // 좌우 흔들림 (더 강하게)
        p.wobble += p.wobbleSpd;
        // 수직 흔들림 (부유 느낌)
        p.verticalWobble += p.verticalWobbleSpd;
        // 회전
        p.rot += p.rotSpd;
        
        // 좌우 이동: 기본 드리프트 + 사인파 흔들림 (더 큰 진폭)
        p.x += p.drift + Math.sin(p.wobble) * 1.5;
        
        // 수직 이동: 하강 속도 + 사인파 흔들림
        p.y += p.spd + Math.sin(p.verticalWobble) * 0.6;

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
