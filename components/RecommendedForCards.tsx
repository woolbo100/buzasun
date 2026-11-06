'use client'

import React from 'react'
import { Check } from 'lucide-react'

interface RecommendedForCardsProps {
  items: string[]
  className?: string
  textClassName?: string
}

/**
 * 백도화 공통 「이런 분께 추천합니다」 정갈한 미색 한지 카드 리스트 컴포넌트
 * 
 * 디자인 시스템 가이드:
 * - 배경: 깨끗하고 부드러운 크림빛 미색 한지 (#FAF7F2)
 * - 한지 질감: 닥종이 특유의 긴 섬유결과 고운 펄프가 은은하게 흐르는 SVG 프랙탈 텍스처 (텍스트 아래 분리)
 * - 모서리: 둥근 알약형 대신 정갈한 종이 카드 형태 (12px ~ 14px)
 * - 테두리: 과한 금빛 대신 은은한 로즈베이지 얇은 선 (rgba(212, 178, 167, 0.4))
 * - 두께감: 섬세한 상단 종이 단면 하이라이트(inset 0 1px 0)와 미세 음영으로 종이의 단아한 두께감 표현
 * - 체크 아이콘: 마른장미 톤(#A65F63)을 유지하며 광택과 번쩍이는 링을 뺀 차분한 원형 아이콘
 * - 텍스트: 선명한 짙은 갈색 차콜(#3B312D)로 100% 가독성 보장
 * - 자연스러움: 카드마다 섬유결 위치(backgroundPosition)를 조금씩 오프셋하여 인위적 반복감 제거
 */
export default function RecommendedForCards({
  items,
  className = '',
  textClassName = 'text-[16px] md:text-[18px]'
}: RecommendedForCardsProps) {
  if (!items || items.length === 0) return null

  // 깨끗하고 은은한 미색 한지 섬유결 SVG (과도한 얼룩 없이 가까이서 보았을 때 고급스러운 종이결)
  const hanjiTexture = `url("data:image/svg+xml,%3Csvg%20viewBox%3D%270%200%20300%20300%27%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%3E%3Cfilter%20id%3D%27hanjiFilter%27%3E%3CfeTurbulence%20type%3D%27fractalNoise%27%20baseFrequency%3D%270.03%200.16%27%20numOctaves%3D%273%27%20stitchTiles%3D%27stitch%27%20result%3D%27fiber%27/%3E%3CfeTurbulence%20type%3D%27fractalNoise%27%20baseFrequency%3D%270.45%27%20numOctaves%3D%272%27%20stitchTiles%3D%27stitch%27%20result%3D%27pulp%27/%3E%3CfeBlend%20mode%3D%27multiply%27%20in%3D%27fiber%27%20in2%3D%27pulp%27%20result%3D%27blend%27/%3E%3CfeColorMatrix%20type%3D%27matrix%27%20values%3D%270%200%200%200%200.50%200%200%200%200%200.42%200%200%200%200%200.35%200%200%200%200.06%200%27/%3E%3C/filter%3E%3Crect%20width%3D%27100%25%27%20height%3D%27100%25%27%20filter%3D%27url%28%23hanjiFilter%29%27/%3E%3C/svg%3E")`

  return (
    <div className={`space-y-3.5 md:space-y-4 ${className}`}>
      {items.map((item, idx) => (
        <div
          key={idx}
          style={{
            backgroundColor: '#FAF7F2',
            borderColor: 'rgba(212, 178, 167, 0.4)',
            boxShadow: '0 2px 6px -1px rgba(35, 20, 30, 0.05), 0 1px 3px 0 rgba(35, 20, 30, 0.03), inset 0 1px 0 rgba(255, 255, 255, 0.9)',
          }}
          className="group relative p-4 md:p-[18px_24px] rounded-[12px] md:rounded-[14px] border flex items-start gap-3.5 md:gap-4 transition-all duration-300 hover:border-[#D4B2A7]/65 hover:shadow-[0_4px_14px_rgba(35,20,30,0.08)] overflow-hidden"
        >
          {/* 카드 내부 배경 한지 질감 레이어 (텍스트 아래에만 배치, 카드마다 위치를 오프셋하여 반복감 방지) */}
          <div
            className="absolute inset-0 pointer-events-none z-0"
            style={{
              backgroundImage: hanjiTexture,
              backgroundSize: '260px 260px',
              backgroundPosition: `${(idx * 59) % 260}px ${(idx * 83) % 260}px`,
            }}
          />

          {/* 백도화 시그니처 차분한 마른장미 원형 체크 아이콘 */}
          <div className="shrink-0 mt-0.5 relative z-10">
            <div 
              style={{ backgroundColor: '#A65F63' }}
              className="w-6 h-6 md:w-[26px] md:h-[26px] rounded-full flex items-center justify-center p-1 border border-[#E5C4BB]/40 shadow-none"
            >
              <Check className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#FAF7F2] stroke-[2.2]" />
            </div>
          </div>

          {/* 본문 텍스트 (선명한 짙은 갈색 유지, 질감과 완전 분리되어 최고 수준의 선명도 유지) */}
          <p className={`${textClassName} text-[#3B312D] font-medium leading-[1.65] break-keep select-text relative z-10`}>
            {item}
          </p>
        </div>
      ))}
    </div>
  )
}
