'use client'

import React from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

/**
 * 백도화 브랜드 시그니처 전통 노리개 장식 (Global Common Component)
 * 
 * - 헤더 최상단(top-0)에 바짝 밀착되어 장바구니/로그인 아이콘 높이와 일치
 * - PC: 기존 메인페이지 원본 크기(180px) 및 위치(right-4 md:right-12) 유지
 * - 마우스 호버 시 자개 꽃잎 부근에 은은하고 몽환적인 펄 블러(blur) 발광 효과 적용
 * - 부드러운 스윙 애니메이션(swingGentle) 유지
 */
export default function GlobalNorigae() {
  const pathname = usePathname()

  // 관리자 페이지(/admin/*)에서는 노출하지 않음
  if (pathname?.startsWith('/admin')) {
    return null
  }

  return (
    <div 
      className="fixed top-0 right-4 md:right-12 z-[60] select-none pointer-events-none"
      style={{ 
        animation: 'swingGentle 4s ease-in-out infinite',
        transformOrigin: 'top center',
        filter: 'drop-shadow(0 0 20px rgba(212, 178, 167, 0.4))'
      }}
      aria-hidden="true"
    >
      <div className="relative group pointer-events-auto cursor-pointer w-[85px] sm:w-[130px] md:w-[180px]">
        {/* 마우스 호버 시 꽃 주변에만 은은하게 맺히는 자연스러운 미세 발광 효과 */}
        <div 
          className="pointer-events-none absolute left-1/2 top-[35%] -translate-x-1/2 -translate-y-1/2 w-[42%] aspect-square rounded-full opacity-0 blur-md transition-opacity duration-700 ease-out group-hover:opacity-60"
          style={{
            background: 'radial-gradient(circle, rgba(255, 240, 245, 0.55) 0%, rgba(225, 185, 195, 0.25) 50%, transparent 75%)',
            mixBlendMode: 'screen',
          }}
        />

        {/* 노리개 본체 이미지 (과도한 전체 밝기 증폭 없이 본연의 고급스러움 유지) */}
        <Image
          src="/image/nlg.png"
          alt="백도화 시그니처 노리개 장식"
          width={180}
          height={360}
          priority
          className="relative z-10 w-full h-auto object-contain object-top transition-opacity duration-300"
        />
      </div>
    </div>
  )
}
