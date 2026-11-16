'use client'

import React from 'react'

interface BaekdohwaDividerProps {
  className?: string
}

/**
 * 백도화 연애 리포트 — 섹션 구간 표시용 시그니처 Divider
 * 가운데 선화형 도화꽃 아이콘 + 양옆으로 은은하게 페이드되는 로즈골드 라인
 */
export default function BaekdohwaDivider({
  className = '',
}: BaekdohwaDividerProps) {
  return (
    <div
      className={`flex items-center justify-center gap-3.5 sm:gap-4 w-full select-none ${className}`}
      aria-hidden="true"
    >
      {/* 좌측 라인: 바깥쪽(투명)에서 안쪽(로즈골드)으로 부드럽게 연결 */}
      <div className="h-[1px] w-16 sm:w-28 md:w-36 lg:w-44 bg-gradient-to-r from-transparent to-[#D9A8A7]/45 shrink" />

      {/* 중앙 선화형 도화꽃 아이콘 (꽃잎 내부가 비어 있는 섬세한 앤티크 샴페인 로즈골드 라인) */}
      <div className="shrink-0 flex items-center justify-center">
        <svg
          viewBox="0 0 32 32"
          fill="none"
          className="w-7 h-7 sm:w-8 sm:h-8 text-[#D9A8A7] opacity-90 drop-shadow-[0_0_8px_rgba(217,168,167,0.3)]"
          aria-hidden="true"
        >
          {/* 상단 꽃잎 */}
          <path
            d="M16 16 C13.5 11 13 6 16 4 C19 6 18.5 11 16 16 Z"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* 우상단 꽃잎 */}
          <path
            d="M16 16 C20 13 24.5 12.5 26 15.5 C25 18.8 20.5 18 16 16 Z"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* 우하단 꽃잎 */}
          <path
            d="M16 16 C19.5 19.5 21.5 24 18.5 26 C16 24.5 16.2 20 16 16 Z"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* 좌하단 꽃잎 */}
          <path
            d="M16 16 C15.8 20 16 24.5 13.5 26 C10.5 24 12.5 19.5 16 16 Z"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* 좌상단 꽃잎 */}
          <path
            d="M16 16 C11.5 18 7 18.8 6 15.5 C7.5 12.5 12 13 16 16 Z"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* 중심 꽃술 원 */}
          <circle cx="16" cy="16" r="1.6" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      {/* 우측 라인: 안쪽(로즈골드)에서 바깥쪽(투명)으로 부드럽게 페이드아웃 */}
      <div className="h-[1px] w-16 sm:w-28 md:w-36 lg:w-44 bg-gradient-to-l from-transparent to-[#D9A8A7]/45 shrink" />
    </div>
  )
}
