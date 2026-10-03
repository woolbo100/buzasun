'use client'

import React from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

/**
 * 백도화 브랜드 시그니처 전통 노리개 장식 (Global Common Component)
 * 
 * - 헤더 최상단(top-0)에 바짝 밀착되어 장바구니/로그인 아이콘 높이와 일치
 * - PC: 기존 메인페이지 원본 크기(180px) 및 위치(right-4 md:right-12) 완벽 복원
 * - 태블릿: 130px로 단아하게 연출
 * - 모바일: 85px로 정갈하게 밀착
 * - pointer-events-none으로 헤더 메뉴/아이콘 클릭에 일체 방해 없음
 */
export default function GlobalNorigae() {
  const pathname = usePathname()

  // 관리자 페이지(/admin/*)에서는 노출하지 않음
  if (pathname?.startsWith('/admin')) {
    return null
  }

  return (
    <div 
      className="fixed top-0 right-4 md:right-12 z-[60] pointer-events-none select-none"
      style={{ 
        animation: 'swingGentle 4s ease-in-out infinite',
        transformOrigin: 'top center',
        filter: 'drop-shadow(0 0 20px rgba(212, 178, 167, 0.4))'
      }}
      aria-hidden="true"
    >
      <div className="w-[85px] sm:w-[130px] md:w-[180px]">
        <Image
          src="/image/nlg.png"
          alt="백도화 시그니처 노리개 장식"
          width={180}
          height={360}
          priority
          className="w-full h-auto object-contain object-top pointer-events-none"
        />
      </div>
    </div>
  )
}
