// components/BaekdohwaFlowerMark.tsx
import React from "react";

type Props = {
  className?: string;
  /** svg size (px) */
  size?: number;
  style?: React.CSSProperties;
  /** 밝은 흰색 느낌의 그라데이션 사용 */
  bright?: boolean;
  /** 배경 워터마크용 대각선 그라데이션 (흰색→핫핑크) */
  watermark?: boolean;
  /** 외곽선 핫핑크, 안쪽 화이트, 외곽선 글로우 효과 */
  outlinePink?: boolean;
};

export default function BaekdohwaFlowerMark({ className = "", size = 44, style, bright = false, watermark = false, outlinePink = false }: Props) {
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
        {/* 핫핑크→연핑크 그라데이션 (밝은 흰색 느낌) */}
        <radialGradient id="petalGrad" cx="50%" cy="40%" r="70%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="30%" stopColor="#ffe0f0" />
          <stop offset="60%" stopColor="#ffb6d9" />
          <stop offset="85%" stopColor="#ff69b4" />
          <stop offset="100%" stopColor="#ff1493" />
        </radialGradient>
        
        {/* About 섹션용 밝은 그라데이션 */}
        <radialGradient id="petalGradBright" cx="50%" cy="40%" r="70%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="25%" stopColor="#fff5f8" />
          <stop offset="50%" stopColor="#ffe0f0" />
          <stop offset="75%" stopColor="#ffb6d9" />
          <stop offset="100%" stopColor="#ff69b4" />
        </radialGradient>
        
        {/* 배경 워터마크용 대각선 그라데이션 (왼쪽 상단→오른쪽 하단, 흰색→핫핑크) */}
        <linearGradient id="watermarkGrad" x1="0%" y1="0%" x2="100%" y2="100%" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="50%" stopColor="#ffb6d9" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
        
        {/* outlinePink용: 안쪽에서 외곽으로 핑크가 진해지는 그라데이션 */}
        <radialGradient id="pinkGradInward" cx="50%" cy="50%" r="70%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="40%" stopColor="#ffe0f0" />
          <stop offset="70%" stopColor="#ffb6d9" />
          <stop offset="90%" stopColor="#ff69b4" />
          <stop offset="100%" stopColor="#ec4899" />
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
        
        {/* 핫핑크 외곽선 글로우 효과 - 은은한 빛나는 효과 */}
        <filter id="pinkGlow" x="-200%" y="-200%" width="500%" height="500%">
          {/* 외곽 글로우 레이어 1 - 넓고 부드러운 */}
          <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
          <feColorMatrix
            in="coloredBlur"
            type="matrix"
            values="
              0 0 0 0 0.925
              0 0 0 0 0.282
              0 0 0 0 0.6
              0 0 0 0.5 0"
            result="pinkBlur"
          />
          {/* 외곽 글로우 레이어 2 - 중간 */}
          <feGaussianBlur stdDeviation="5" result="coloredBlur2"/>
          <feColorMatrix
            in="coloredBlur2"
            type="matrix"
            values="
              0 0 0 0 0.925
              0 0 0 0 0.282
              0 0 0 0 0.6
              0 0 0 0.7 0"
            result="pinkBlur2"
          />
          {/* 외곽 글로우 레이어 3 - 가까운 */}
          <feGaussianBlur stdDeviation="3" result="coloredBlur3"/>
          <feColorMatrix
            in="coloredBlur3"
            type="matrix"
            values="
              0 0 0 0 0.925
              0 0 0 0 0.282
              0 0 0 0 0.6
              0 0 0 0.85 0"
            result="pinkBlur3"
          />
          <feMerge>
            <feMergeNode in="pinkBlur"/>
            <feMergeNode in="pinkBlur2"/>
            <feMergeNode in="pinkBlur3"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {/* 꽃잎 5장: 하나의 꽃잎 모양을 회전 복제 */}
      <g transform="translate(100 100)" filter={outlinePink ? "url(#pinkGlow)" : "url(#softGlow)"}>
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
            fill={outlinePink ? "url(#pinkGradInward)" : (watermark ? "url(#watermarkGrad)" : (bright ? "url(#petalGradBright)" : "url(#petalGrad)"))}
            stroke={outlinePink ? "#ec4899" : "none"}
            strokeWidth={outlinePink ? "2.5" : "0"}
            strokeLinejoin="round"
            opacity="0.98"
          />
          {/* 자개 하이라이트 오버레이 - outlinePink일 때는 제거 */}
          {!outlinePink && (
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
          )}
        </g>

        {/* 5장 회전 */}
        <use href="#petal" transform="rotate(0)" />
        <use href="#petal" transform="rotate(72)" />
        <use href="#petal" transform="rotate(144)" />
        <use href="#petal" transform="rotate(216)" />
        <use href="#petal" transform="rotate(288)" />

        {/* 중앙 보석(자개+핑크) */}
        {outlinePink ? (
          <>
            <circle r="18" fill="url(#pinkGradInward)" opacity="0.4" stroke="#ec4899" strokeWidth="1.5" />
            <circle r="14" fill="url(#pinkGradInward)" opacity="0.6" stroke="#ec4899" strokeWidth="1.5" />
            <circle r="9" fill="url(#pinkGradInward)" opacity="0.85" stroke="#ec4899" strokeWidth="1.5" />
            <circle r="4" fill="#ffffff" opacity="1" />
          </>
        ) : (
          <>
            <circle r="18" fill={watermark ? "url(#watermarkGrad)" : "rgba(255,255,255,0.10)"} opacity={watermark ? "0.15" : "1"} />
            <circle r="14" fill={watermark ? "url(#watermarkGrad)" : "url(#najeon)"} opacity={watermark ? "0.6" : "0.8"} />
            <circle r="9" fill={watermark ? "url(#watermarkGrad)" : "#ff2aa1"} opacity={watermark ? "0.7" : "0.9"} />
            <circle r="4" fill={watermark ? "#ffffff" : "#fff"} opacity="0.9" />
          </>
        )}

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
