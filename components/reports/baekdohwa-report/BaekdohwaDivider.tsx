'use client'

import React from 'react'
import BaekdohwaFlowerMark from '@/components/BaekdohwaFlowerMark'

interface BaekdohwaDividerProps {
  className?: string
  iconSize?: number
}

/**
 * 백도화 연애 리포트 — 섹션 구간 표시용 시그니처 Divider
 * 가운데 백도화 꽃 아이콘 + 양옆으로 은은하게 페이드되는 로즈골드 라인
 */
export default function BaekdohwaDivider({
  className = '',
  iconSize = 22,
}: BaekdohwaDividerProps) {
  return (
    <div
      className={`flex items-center justify-center gap-3.5 sm:gap-4 w-full select-none ${className}`}
      aria-hidden="true"
    >
      {/* 좌측 라인: 바깥쪽(투명)에서 안쪽(로즈골드)으로 부드럽게 연결 */}
      <div className="h-[1px] w-16 sm:w-28 md:w-36 lg:w-44 bg-gradient-to-r from-transparent to-[#D9A8A7]/45 shrink" />

      {/* 중앙 백도화 꽃 아이콘 (단아한 샴페인 핑크 골드 포인트) */}
      <div className="shrink-0 flex items-center justify-center opacity-90">
        <BaekdohwaFlowerMark size={iconSize} outlineGold />
      </div>

      {/* 우측 라인: 안쪽(로즈골드)에서 바깥쪽(투명)으로 부드럽게 페이드아웃 */}
      <div className="h-[1px] w-16 sm:w-28 md:w-36 lg:w-44 bg-gradient-to-l from-transparent to-[#D9A8A7]/45 shrink" />
    </div>
  )
}
