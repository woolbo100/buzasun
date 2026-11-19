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
 * 브랜드의 철학적 여운을 남기는 시그니처 엔딩 컴포넌트입니다.
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
      // 묵자색과 로즈핑크플럼, 앤티크 샴페인 골드 조화
      bgGradient: 'radial-gradient(ellipse at 50% 50%, rgba(28, 12, 30, 0.65) 0%, rgba(18, 8, 22, 0.4) 55%, transparent 100%)',
      subText: 'text-[#D9A8A7]/85',
      brandGold: 'text-[#D4B2A7]',
      dividerLine: 'from-transparent via-[#D4B2A7]/40 to-transparent',
      emblemColor: '#D4B2A7',
      defaultSub: '나를 읽고, 사랑의 방향을 다시 쓰다.',
    },
    abundance: {
      // 묵빛 옥색과 차분한 에메랄드 샴페인 골드
      bgGradient: 'radial-gradient(ellipse at 50% 50%, rgba(14, 28, 24, 0.65) 0%, rgba(8, 18, 16, 0.4) 55%, transparent 100%)',
      subText: 'text-[#8FB4A4]/85',
      brandGold: 'text-[#C6A477]',
      dividerLine: 'from-transparent via-[#C6A477]/40 to-transparent',
      emblemColor: '#C6A477',
      defaultSub: '나를 읽고, 풍요의 흐름을 다시 쓰다.',
    },
    compatibility: {
      // 묵자색과 딥 버건디, 브론즈 샴페인 골드
      bgGradient: 'radial-gradient(ellipse at 50% 50%, rgba(28, 10, 20, 0.65) 0%, rgba(16, 6, 14, 0.4) 55%, transparent 100%)',
      subText: 'text-[#D8BB94]/85',
      brandGold: 'text-[#D8BB94]',
      dividerLine: 'from-transparent via-[#D8BB94]/40 to-transparent',
      emblemColor: '#D8BB94',
      defaultSub: '서로를 읽고, 인연의 깊이를 다시 쓰다.',
    },
  }[theme]

  return (
    <section 
      aria-label="브랜드 철학 엔딩"
      className={`relative py-24 sm:py-32 md:py-40 px-6 text-center select-none overflow-hidden ${className}`}
      style={{
        background: themeConfig.bgGradient,
      }}
    >
      {/* 상단 및 하단 경계 부드러운 페이드 (기존 섹션 및 푸터와 이질감 없는 연결) */}
      <div 
        className="absolute inset-x-0 top-0 h-16 sm:h-20 bg-gradient-to-b from-[#0a0514] to-transparent pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute inset-x-0 bottom-0 h-16 sm:h-20 bg-gradient-to-t from-[#0a0514] to-transparent pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="relative z-10 max-w-2xl mx-auto">
        <Reveal>
          {/* 1. 메인 문구: 크고 중심을 잡는 품격 있는 타이포그래피 */}
          <h3 className="font-elegant text-[22px] sm:text-[27px] md:text-[32px] lg:text-[34px] font-bold text-[#FAF7F2] leading-[1.65] sm:leading-[1.7] md:leading-[1.75] tracking-tight break-keep">
            {mainTitle ?? (
              <>
                <span>숙명은 주어지지만,</span>
                <br />
                <span>운명은 선택하는 것이다.</span>
              </>
            )}
          </h3>

          {/* 2. 서브 문구: 메인보다 확실히 작고 은은하게 여운을 주는 문장 */}
          <p className={`text-[14px] sm:text-[15px] md:text-[16px] ${themeConfig.subText} font-light tracking-wide mt-4 sm:mt-5 md:mt-6 leading-relaxed break-keep`}>
            {subTitle ?? themeConfig.defaultSub}
          </p>

          {/* 3. 브랜드 서명 영역: 절제된 앤티크 샴페인 골드 포인트 */}
          <div className="mt-12 sm:mt-14 md:mt-16 flex flex-col items-center">
            {/* 절제된 미세 라인과 미니 샴페인 골드 엠블럼 */}
            <div className="flex items-center justify-center gap-2.5 mb-4 sm:mb-4.5 w-full max-w-[140px]" aria-hidden="true">
              <div className={`h-[1px] flex-1 bg-gradient-to-r ${themeConfig.dividerLine}`} />
              <svg 
                viewBox="0 0 16 16" 
                fill="none" 
                className="w-2.5 h-2.5 shrink-0 opacity-75"
                aria-hidden="true"
              >
                {/* 단정한 다이아몬드 형태의 선화 포인트 */}
                <path 
                  d="M8 1.5L14.5 8L8 14.5L1.5 8L8 1.5Z" 
                  stroke={themeConfig.emblemColor} 
                  strokeWidth="1" 
                />
              </svg>
              <div className={`h-[1px] flex-1 bg-gradient-to-r ${themeConfig.dividerLine}`} />
            </div>

            {/* 브랜드명 서명 */}
            <span className={`font-elegant text-[12px] sm:text-[13px] md:text-[13.5px] font-medium tracking-[0.26em] sm:tracking-[0.3em] uppercase ${themeConfig.brandGold} opacity-90 pl-[0.3em]`}>
              {brandName}
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
