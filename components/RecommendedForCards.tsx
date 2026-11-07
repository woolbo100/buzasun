'use client'

import React from 'react'
import { Check } from 'lucide-react'

interface RecommendedForCardsProps {
  items: string[]
  className?: string
  textClassName?: string
  cardBgColor?: string
  cardBorderColor?: string
  checkBgColor?: string
  checkBorderColor?: string
  checkIconColor?: string
  textColor?: string
}

// 화면에서 한지 종이결이 뚜렷하고 정갈하게 드러나는 닥나무 섬유결 SVG (가시성 강화)
export const hanjiFiberSvg = `url("data:image/svg+xml,%3Csvg%20viewBox%3D%270%200%20400%20400%27%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%3E%3Cfilter%20id%3D%27hanji%27%3E%20%20%3CfeTurbulence%20type%3D%27fractalNoise%27%20baseFrequency%3D%270.02%200.08%27%20numOctaves%3D%274%27%20result%3D%27fiber%27%20/%3E%20%20%3CfeTurbulence%20type%3D%27turbulence%27%20baseFrequency%3D%270.35%27%20numOctaves%3D%273%27%20result%3D%27grain%27%20/%3E%20%20%3CfeColorMatrix%20in%3D%27fiber%27%20type%3D%27matrix%27%20values%3D%27%20%20%20%200.35%200%20%20%20%200%20%20%20%200%200.62%20%20%20%20%200%20%20%20%200.30%200%20%20%20%200%200.55%20%20%20%20%200%20%20%20%200%20%20%20%200.24%200%200.46%20%20%20%20%200%20%20%20%200%20%20%20%200%20%20%20%200.55%200%27%20result%3D%27coloredFiber%27%20/%3E%20%20%3CfeColorMatrix%20in%3D%27grain%27%20type%3D%27matrix%27%20values%3D%27%20%20%20%200.30%200%20%20%20%200%20%20%20%200%200.58%20%20%20%20%200%20%20%20%200.26%200%20%20%20%200%200.50%20%20%20%20%200%20%20%20%200%20%20%20%200.20%200%200.42%20%20%20%20%200%20%20%20%200%20%20%20%200%20%20%20%200.35%200%27%20result%3D%27coloredGrain%27%20/%3E%20%20%3CfeBlend%20mode%3D%27multiply%27%20in%3D%27coloredFiber%27%20in2%3D%27coloredGrain%27%20/%3E%3C/filter%3E%3Crect%20width%3D%27100%25%27%20height%3D%27100%25%27%20filter%3D%27url%28%23hanji%29%27%20/%3E%3C/svg%3E")`

/**
 * 백도화 공통 「이런 분께 추천합니다」 프리미엄 미색 한지 카드 컴포넌트
 * 
 * 디자인 시스템 (한지 질감 강화 버전):
 * - 베이스: 전통 닥종이의 따뜻하고 정갈한 미색 크림베이지 (#F7F1E5 / #F3E9D8)
 * - 종이 농담: 수제 한지 특유의 자연스러운 펄프 농담 (방사형 미세 명암)
 * - 섬유결 텍스처: 닥나무 껍질 섬유(fiber)와 결이 화면에서 확실하고 고급스럽게 드러나는 고해상도 SVG 필터
 * - 모서리 & 테두리: 12~14px의 단정한 종이 카드 형태, 연한 로즈베이지/베이지골드 단면선
 * - 텍스트: 따뜻한 짙은 차콜 브라운 (#362822 / #352F2A, font-semibold)으로 한지 위 먹물 글씨처럼 선명하게 유지
 * - 카드별 결 분산: backgroundPosition 오프셋으로 카드마다 고유한 종이결 표현
 */
export default function RecommendedForCards({
  items,
  className = '',
  textClassName = 'text-[16px] md:text-[18px]',
  cardBgColor = '#F7F1E5',
  cardBorderColor = 'rgba(206, 175, 153, 0.55)',
  checkBgColor = '#A65F63',
  checkBorderColor = 'border-[#E5C4BB]/50',
  checkIconColor = 'text-[#FAF7F2]',
  textColor = 'text-[#362822]'
}: RecommendedForCardsProps) {
  if (!items || items.length === 0) return null

  return (
    <div className={`space-y-3.5 md:space-y-4 ${className}`}>
      {items.map((item, idx) => (
        <div
          key={idx}
          style={{
            backgroundColor: cardBgColor,
            backgroundImage: `
              radial-gradient(circle at 18% 28%, rgba(240, 230, 212, 0.7) 0%, transparent 45%),
              radial-gradient(circle at 82% 72%, rgba(235, 220, 198, 0.7) 0%, transparent 50%),
              ${hanjiFiberSvg}
            `,
            backgroundSize: '100% 100%, 100% 100%, 340px 340px',
            backgroundPosition: `0 0, 0 0, ${(idx * 79) % 340}px ${(idx * 113) % 340}px`,
            borderColor: cardBorderColor,
            boxShadow: '0 3px 10px -2px rgba(35, 20, 30, 0.08), 0 1px 3px 0 rgba(35, 20, 30, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.95)',
          }}
          className="group relative p-4 md:p-[18px_24px] rounded-[12px] md:rounded-[14px] border flex items-start gap-3.5 md:gap-4 transition-all duration-300 hover:border-[#947852] hover:shadow-[0_4px_16px_rgba(35,20,30,0.12)] overflow-hidden"
        >
          {/* 원형 체크 아이콘 */}
          <div className="shrink-0 mt-0.5 relative z-10">
            <div 
              style={{ backgroundColor: checkBgColor }}
              className={`w-6 h-6 md:w-[26px] md:h-[26px] rounded-full flex items-center justify-center p-1 border ${checkBorderColor} shadow-none`}
            >
              <Check className={`w-3.5 h-3.5 md:w-4 md:h-4 ${checkIconColor} stroke-[2.4]`} />
            </div>
          </div>

          {/* 본문 텍스트 */}
          <p className={`${textClassName} ${textColor} font-semibold leading-[1.65] break-keep select-text relative z-10`}>
            {item}
          </p>
        </div>
      ))}
    </div>
  )
}
