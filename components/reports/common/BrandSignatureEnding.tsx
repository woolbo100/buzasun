'use client'

import React from 'react'
import Reveal from '@/components/Reveal'

export interface BrandSignatureEndingProps {
  /** 테마: love(연애) | abundance(풍요) | compatibility(궁합) */
  theme?: 'love' | 'abundance' | 'compatibility'
  /** 메인 카피 (지정하지 않을 경우 테마별 기본 문구) */
  mainTitle?: React.ReactNode
  /** 서브 카피 (지정하지 않을 경우 테마별 기본 문구) */
  subTitle?: React.ReactNode
  /** 브랜드 서명 (기본값: 백도화 매력학당) */
  brandName?: string
  /** 추가 클래스 */
  className?: string
}

/**
 * 백도화 선천코드 리포트 시리즈 — 브랜드 시그니처 엔딩 섹션
 * 
 * 판매 상세페이지의 최종 구매 CTA 아래, 공통 푸터 위에 위치하여
 * 배경 상자 없이 무테 슬림형으로 브랜드의 철학적 여운을 남기는 시그니처 엔딩 컴포넌트입니다.
 */
export default function BrandSignatureEnding({
  theme = 'love',
  mainTitle,
  subTitle,
  brandName = '백도화 매력학당',
  className = '',
}: BrandSignatureEndingProps) {
  // 테마별 컬러 및 기본 카피 정의
  const themeConfig = {
    love: {
      subText: 'text-[#D9A8A7]/85',
      brandGold: 'text-[#D4B2A7]',
      dividerLine: 'from-transparent via-[#D4B2A7]/40 to-transparent',
      emblemColor: '#D4B2A7',
      defaultSub: '나를 읽고, 사랑의 방향을 다시 쓰다.',
    },
    abundance: {
      subText: 'text-[#8FB4A4]/85',
      brandGold: 'text-[#C6A477]',
      dividerLine: 'from-transparent via-[#C6A477]/40 to-transparent',
      emblemColor: '#C6A477',
      defaultSub: '나를 읽고, 풍요의 흐름을 다시 쓰다.',
    },
    compatibility: {
      subText: 'text-[#D8BB94]/85',
      brandGold: 'text-[#D8BB94]',
      dividerLine: 'from-transparent via-[#D8BB94]/40 to-transparent',
      emblemColor: '#D8BB94',
      defaultSub: '서로를 읽고, 인연의 깊이를 다시 쓰다.',
    },
  }[theme]

  return (
    <section 
      aria-label="브랜드 시그니처 엔딩"
      className={`w-full max-w-[960px] mx-auto px-4 sm:px-6 text-center select-none ${className}`}
    >
      <Reveal>
        <div className="w-full flex flex-col items-center">
          {/* 1. 메인 문구: 정갈한 2줄 구성, 고급스러운 서체와 은은한 샴페인 베이지 */}
          <h3 className="font-elegant text-[22px] sm:text-[25px] md:text-[28px] font-medium md:font-semibold text-[#FAF7F2] leading-[1.4] tracking-normal break-keep">
            {mainTitle ?? (
              <>
                <span>숙명은 주어지지만,</span>
                <br />
                <span>운명은 선택하는 것이다.</span>
              </>
            )}
          </h3>

          {/* 2. 서브 문구: 메인과 16px 간격, 차분한 로즈베이지 계열의 절제된 톤 */}
          <p className={`text-[14.5px] sm:text-[15.5px] md:text-[17px] ${themeConfig.subText} font-light tracking-wide mt-4 leading-relaxed break-keep`}>
            {subTitle ?? themeConfig.defaultSub}
          </p>

          {/* 3. 브랜드 서명 & 절제된 미니멀 장식: 서브 문구와 약 20px 간격 */}
          <div className="mt-5 flex flex-col items-center">
            {/* 은은한 샴페인 골드 미세 라인과 작은 다이아몬드 선화 포인트 */}
            <div className="flex items-center justify-center gap-2 mb-2 w-20" aria-hidden="true">
              <div className={`h-[1px] flex-1 bg-gradient-to-r ${themeConfig.dividerLine}`} />
              <svg 
                viewBox="0 0 16 16" 
                fill="none" 
                className="w-2 h-2 shrink-0 opacity-70"
                aria-hidden="true"
              >
                <path 
                  d="M8 2L14 8L8 14L2 8Z" 
                  stroke={themeConfig.emblemColor} 
                  strokeWidth="1" 
                />
              </svg>
              <div className={`h-[1px] flex-1 bg-gradient-to-r ${themeConfig.dividerLine}`} />
            </div>

            {/* 브랜드명 서명: 12~13px, 넓은 자간으로 품격 있게 표현 */}
            <span className={`font-elegant text-[12px] md:text-[13px] font-normal tracking-[0.28em] pl-[0.28em] uppercase ${themeConfig.brandGold} opacity-85`}>
              {brandName}
            </span>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
