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
 * 디자인 시스템:
 * - 카드 배경: 깨끗한 아이보리 한지 베이지 (#FAF6EE / #F7F1E7)
 * - 카드 테두리: 1px 샴페인골드 (#D2B77D / #C9A86A)
 * - 카드 모서리: rounded-[18px] ~ rounded-[22px]
 * - 그림자: 0 6px 18px rgba(30, 20, 25, 0.08)
 * - 텍스트: 짙은 브라운 차콜 (#352C2A), 15px~17px, line-height 1.65
 * - 체크 아이콘: 백도화 시그니처 톤다운 버건디/로즈브라운 (#A95E62) 원형 + 아이보리 체크
 */
export default function RecommendedForCards({ items, className = '' }: RecommendedForCardsProps) {
  if (!items || items.length === 0) return null

  return (
    <div className={`space-y-3.5 md:space-y-4 ${className}`}>
      {items.map((item, idx) => (
        <div
          key={idx}
          className="group relative p-4 md:p-[20px_26px] rounded-[18px] md:rounded-[22px] bg-[#FAF6EE] border border-[#D2B77D]/70 shadow-[0_6px_18px_rgba(30,20,25,0.08)] flex items-start gap-3.5 md:gap-4 transition-all duration-300 hover:shadow-[0_8px_24px_rgba(30,20,25,0.12)] hover:border-[#C9A86A]"
        >
          {/* 백도화 시그니처 버건디 원형 체크 아이콘 */}
          <div className="shrink-0 mt-0.5">
            <div className="w-6 h-6 md:w-6.5 md:h-6.5 rounded-full bg-[#A95E62] flex items-center justify-center p-1 shadow-sm border border-[#D2B77D]/60 ring-2 ring-[#A95E62]/15">
              <Check className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#FAF6EE] stroke-[2.5]" />
            </div>
          </div>

          {/* 본문 텍스트 (짙은 브라운 색상으로 가독성 극대화) */}
          <p className="text-[15px] md:text-[17px] text-[#352C2A] font-medium leading-[1.65] break-keep select-text">
            {item}
          </p>
        </div>
      ))}
    </div>
  )
}
