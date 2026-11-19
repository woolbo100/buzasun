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
  /** 추가 클래스 */
  className?: string
}

/**
 * 백도화 선천코드 리포트 시리즈 — 브랜드 시그니처 엔딩 섹션
 * 
 * 판매 상세페이지의 최종 구매 CTA 아래, 정식 푸터 바로 위에 위치하여
 * 얇은 가로 구분선과 3줄 문구만으로 조용하고 품격 있게 마무리하는 컴포넌트입니다.
 */
export default function BrandSignatureEnding({
  theme = 'love',
  mainTitle,
  subTitle,
  className = '',
}: BrandSignatureEndingProps) {
  // 테마별 컬러 정의
  const themeConfig = {
    love: {
      subText: 'text-[#D9A8A7]/85',
      dividerLine: 'via-[#D4B2A7]/35 to-[#D4B2A7]/50',
      emblemColor: '#D4B2A7',
      defaultSub: '나를 읽고, 사랑의 방향을 다시 쓰다.',
    },
    abundance: {
      subText: 'text-[#8FB4A4]/85',
      dividerLine: 'via-[#C6A477]/35 to-[#C6A477]/50',
      emblemColor: '#C6A477',
      defaultSub: '나를 읽고, 풍요의 흐름을 다시 쓰다.',
    },
    compatibility: {
      subText: 'text-[#D8BB94]/85',
      dividerLine: 'via-[#D8BB94]/35 to-[#D8BB94]/50',
      emblemColor: '#D8BB94',
      defaultSub: '서로를 읽고, 인연의 깊이를 다시 쓰다.',
    },
  }[theme]

  return (
    <section 
      aria-label="브랜드 시그니처 엔딩"
      className={`w-full max-w-[960px] mx-auto px-4 sm:px-6 text-center select-none pb-5 md:pb-8 ${className}`}
    >
      <Reveal>
        <div className="w-full flex flex-col items-center">
          {/* 가로 구분선 + 중앙의 작은 다이아몬드(◇) 장식 1개 */}
          <div 
            className="flex items-center justify-center gap-3 w-full max-w-xl md:max-w-2xl mx-auto mb-6 md:mb-8" 
            aria-hidden="true"
          >
            <div className={`h-[1px] flex-1 bg-gradient-to-r from-transparent ${themeConfig.dividerLine}`} />
            <svg 
              viewBox="0 0 16 16" 
              fill="none" 
              className="w-2.5 h-2.5 shrink-0 opacity-70"
              aria-hidden="true"
            >
              <path 
                d="M8 2L14 8L8 14L2 8Z" 
                stroke={themeConfig.emblemColor} 
                strokeWidth="1" 
              />
            </svg>
            <div className={`h-[1px] flex-1 bg-gradient-to-l from-transparent ${themeConfig.dividerLine}`} />
          </div>

          {/* 1. 메인 문구 (첫 번째·두 번째 줄): 정갈한 2줄 구성, 고급스러운 제목 서체, 아이보리 계열 */}
          <h3 className="font-elegant text-[22px] sm:text-[24px] md:text-[28px] font-medium md:font-semibold text-[#FAF7F2] leading-[1.4] tracking-normal break-keep">
            {mainTitle ?? (
              <>
                <span>숙명은 주어지지만,</span>
                <br />
                <span>운명은 선택하는 것이다.</span>
              </>
            )}
          </h3>

          {/* 2. 서브 문구 (세 번째 줄): 메인보다 작게, 차분한 로즈베이지 계열 */}
          <p className={`text-[14.5px] sm:text-[15.5px] md:text-[17px] ${themeConfig.subText} font-light tracking-wide mt-3.5 md:mt-4 leading-relaxed break-keep`}>
            {subTitle ?? themeConfig.defaultSub}
          </p>
        </div>
      </Reveal>
    </section>
  )
}
