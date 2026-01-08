// components/BaekdohwaFlowerMark.tsx
import React from "react";

type Props = {
  className?: string;
  /** svg size (px) */
  size?: number;
  style?: React.CSSProperties;
};

export default function BaekdohwaFlowerMark({ className = "", size = 44, style }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      className={className}
      style={style}
      aria-label="백도화 꽃무늬"
      role="img"
    >
      <defs>
        {/* 핫핑크→연핑크 그라데이션 */}
        <radialGradient id="petalGrad" cx="50%" cy="40%" r="70%">
          <stop offset="0%" stopColor="#ffd1ea" />
          <stop offset="40%" stopColor="#ff64b6" />
          <stop offset="75%" stopColor="#ff1e9a" />
          <stop offset="100%" stopColor="#b8006b" />
        </radialGradient>

        {/* 자개(나전) 느낌의 은은한 무지개 하이라이트 */}
        <linearGradient id="najeon" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.65)" />
          <stop offset="25%" stopColor="rgba(255,216,250,0.45)" />
          <stop offset="55%" stopColor="rgba(193,238,255,0.32)" />
          <stop offset="80%" stopColor="rgba(255,234,196,0.30)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.55)" />
        </linearGradient>

        {/* 은은한 광택 */}
        <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feColorMatrix
            in="blur"
            type="matrix"
            values="
              1 0 0 0 0
              0 0.25 0 0 0
              0 0 0.6 0 0
              0 0 0 0.9 0"
            result="pinkBlur"
          />
          <feMerge>
            <feMergeNode in="pinkBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* 살짝 반짝이는 점(미세) */}
        <filter id="sparkle" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="0.8" />
        </filter>
      </defs>

      {/* 꽃잎 5장: 하나의 꽃잎 모양을 회전 복제 */}
      <g transform="translate(100 100)" filter="url(#softGlow)">
        {/* 꽃잎 하나 */}
        <g id="petal">
          <path
            d="
              M 0 -70
              C 20 -70, 38 -48, 34 -28
              C 30 -10, 14 8, 0 18
              C -14 8, -30 -10, -34 -28
              C -38 -48, -20 -70, 0 -70
              Z"
            fill="url(#petalGrad)"
            opacity="0.98"
          />
          {/* 자개 하이라이트 오버레이 */}
          <path
            d="
              M 0 -64
              C 16 -62, 28 -45, 25 -28
              C 22 -12, 12 2, 0 10
              C -12 2, -22 -12, -25 -28
              C -28 -45, -16 -62, 0 -64
              Z"
            fill="url(#najeon)"
            opacity="0.42"
          />
        </g>

        {/* 5장 회전 */}
        <use href="#petal" transform="rotate(0)" />
        <use href="#petal" transform="rotate(72)" />
        <use href="#petal" transform="rotate(144)" />
        <use href="#petal" transform="rotate(216)" />
        <use href="#petal" transform="rotate(288)" />

        {/* 중앙 보석(자개+핑크) */}
        <circle r="18" fill="rgba(255,255,255,0.10)" />
        <circle r="14" fill="url(#najeon)" opacity="0.8" />
        <circle r="9" fill="#ff2aa1" opacity="0.9" />
        <circle r="4" fill="#fff" opacity="0.9" />

        {/* 미세 스파클 */}
        <g opacity="0.55" filter="url(#sparkle)">
          <circle cx="-38" cy="-10" r="2" fill="rgba(255,255,255,0.9)" />
          <circle cx="42" cy="-6" r="1.8" fill="rgba(255,210,240,0.85)" />
          <circle cx="10" cy="44" r="1.6" fill="rgba(255,255,255,0.75)" />
          <circle cx="-14" cy="-48" r="1.4" fill="rgba(255,255,255,0.65)" />
        </g>
      </g>
    </svg>
  );
}
