'use client'

import React from 'react'
import { Check } from 'lucide-react'

interface RecommendedForCardsProps {
  items: string[]
  className?: string
}

/**
 * 백도화 공통 「이런 분께 추천합니다」 카드 리스트 컴포넌트
 * 
 * 디자인 시스템 (2차 미세 조정):
 * - 카드 배경: 따뜻하고 부드러운 크림 한지 베이지 (#F3ECDF)
 * - 미세 종이결: 자연스럽고 은은한 feTurbulence 미세 한지 질감 (opacity: 0.035, 과도한 노이즈/얼룩 없음)
 * - 카드 테두리: 샴페인골드 (rgba(198, 165, 105, 0.65))
 * - 카드 모서리: rounded-[18px] ~ rounded-[22px]
 * - 그림자: 자연스럽게 넓게 퍼지는 소프트 섀도우 (0 8px 24px rgba(20, 12, 25, 0.10))
 * - 텍스트: 따뜻한 브라운 차콜 (#3B312D), 15px~17px, line-height 1.65
 * - 체크 아이콘: 차분한 톤다운 버건디/로즈 (#A65F63) 원형 + 밝은 아이보리 체크
 */
export default function RecommendedForCards({ items, className = '' }: RecommendedForCardsProps) {
  if (!items || items.length === 0) return null

  // 아주 미세한 천연 한지 섬유 질감 (투명도 0.035로 멀리서는 깨끗한 베이지, 가까이서만 섬세한 결감)
  const hanjiTexture = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.035'/%3E%3C/svg%3E")`

  return (
    <div className={`space-y-3.5 md:space-y-4 ${className}`}>
      {items.map((item, idx) => (
        <div
          key={idx}
          style={{
            backgroundColor: '#F3ECDF',
            backgroundImage: hanjiTexture,
            borderColor: 'rgba(198, 165, 105, 0.65)',
            boxShadow: '0 8px 24px rgba(20, 12, 25, 0.10)',
          }}
          className="group relative p-4 md:p-[20px_26px] rounded-[18px] md:rounded-[22px] border flex items-start gap-3.5 md:gap-4 transition-all duration-300 hover:shadow-[0_10px_28px_rgba(20,12,25,0.14)] hover:border-[#C6A569]"
        >
          {/* 백도화 시그니처 톤다운 버건디 원형 체크 아이콘 */}
          <div className="shrink-0 mt-0.5">
            <div 
              style={{ backgroundColor: '#A65F63' }}
              className="w-6 h-6 md:w-6.5 md:h-6.5 rounded-full flex items-center justify-center p-1 shadow-sm border border-[rgba(198,165,105,0.5)] ring-2 ring-[#A65F63]/15"
            >
              <Check className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#FAF6EE] stroke-[2.5]" />
            </div>
          </div>

          {/* 본문 텍스트 (따뜻한 브라운 차콜 #3B312D로 가독성과 온기 유지) */}
          <p className="text-[15px] md:text-[17px] text-[#3B312D] font-medium leading-[1.65] break-keep select-text">
            {item}
          </p>
        </div>
      ))}
    </div>
  )
}
