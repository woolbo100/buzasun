'use client'

import React from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

/**
 * 백도화 브랜드 시그니처 전통 노리개 장식 (Global Common Component)
 * 
 * - 메인페이지 및 모든 주요 상세페이지 우측 상단에 고정(fixed) 노출
 * - PC: 기존 메인페이지 원본 크기(약 170~180px) 및 위치 유지
 * - 태블릿: 약 125px로 적절히 축소
 * - 모바일: 약 75px로 앙증맞게 축소되어 헤더 및 콘텐츠를 가리지 않음
 * - 클릭 방해 방지를 위해 pointer-events-none 적용
 * - z-index는 40으로 설정하여 헤더 메뉴(z-50) 및 모바일 드롭다운 아래에 자연스럽게 위치
 */
export default function GlobalNorigae() {
  const pathname = usePathname()

  // 관리자 페이지(/admin/*)에서는 노출하지 않음
  if (pathname?.startsWith('/admin')) {
    return null
  }

  return (
    <div 
      className="fixed top-0 right-2 sm:right-4 md:right-8 lg:right-12 z-40 pointer-events-none select-none"
      style={{ 
        animation: 'swingGentle 4s ease-in-out infinite',
        transformOrigin: 'top center',
        filter: 'drop-shadow(0 0 20px rgba(212, 178, 167, 0.4))'
      }}
      aria-hidden="true"
    >
      <div className="relative w-[75px] h-[150px] sm:w-[125px] sm:h-[250px] lg:w-[175px] lg:h-[350px] pointer-events-none">
        <Image
          src="/image/nlg.png"
          alt="백도화 시그니처 노리개 장식"
          fill
          priority
          sizes="(max-width: 640px) 75px, (max-width: 1024px) 125px, 175px"
          className="object-contain pointer-events-none drop-shadow-sm"
        />
      </div>
    </div>
  )
}
