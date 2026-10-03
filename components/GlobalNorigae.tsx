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
        {/* 마우스 호버 시 꽃잎에 피어오르는 은은한 자개 펄 블러(Blur) 발광 효과 */}
        <div 
          className="pointer-events-none absolute left-1/2 top-[36%] -translate-x-1/2 -translate-y-1/2 w-[75%] aspect-square rounded-full opacity-0 blur-2xl transition-all duration-700 ease-out group-hover:opacity-100 group-hover:scale-115"
          style={{
            background: 'radial-gradient(circle, rgba(255, 230, 240, 0.8) 0%, rgba(220, 160, 190, 0.5) 45%, rgba(212, 178, 167, 0.25) 70%, transparent 85%)',
            mixBlendMode: 'screen',
          }}
        />

        {/* 노리개 본체 이미지 */}
        <Image
          src="/image/nlg.png"
          alt="백도화 시그니처 노리개 장식"
          width={180}
          height={360}
          priority
          className="relative z-10 w-full h-auto object-contain object-top transition-all duration-500 group-hover:brightness-110 group-hover:drop-shadow-[0_0_25px_rgba(212,178,167,0.7)]"
        />
      </div>
    </div>
  )
}
