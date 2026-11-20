'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const PERSPECTIVE_KEYWORDS = [
  { id: 1, label: '선천 기질의 차이' },
  { id: 2, label: '끌림의 핵심 이유' },
  { id: 3, label: '감정 표현과 반응' },
  { id: 4, label: '갈등의 근본 원인' },
  { id: 5, label: '소통과 관계 조율' },
  { id: 6, label: '함께하는 성장 방향' },
]

export default function CompatibilitySixPerspectivesBanner() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    // 1.2초마다 다음 키워드로 순차 강조 (0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 0 무한 반복)
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % PERSPECTIVE_KEYWORDS.length)
    }, 1200)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="w-full max-w-7xl mx-auto mb-16 md:mb-20">
      {/* 영역 헤더 */}
      <div className="max-w-4xl mx-auto mb-8 text-center space-y-4">
        <span className="block font-elegant text-[12pt] font-semibold tracking-[0.2em] text-[#D8BB94] uppercase">
          SIX PERSPECTIVES
        </span>
        <h3 className="text-2xl md:text-[34px] font-elegant font-bold text-white leading-[1.3] break-keep">
          여섯 가지 시선으로 읽는 <br className="sm:hidden" />
          <span className="gradient-text-reunion">두 사람의 관계 설계도</span>
        </h3>
        <p className="text-[16px] md:text-[18px] text-[#EDE6DA] opacity-85 font-light leading-relaxed max-w-2xl mx-auto break-keep">
          서로 다른 두 사람의 선천 기질부터 끌림과 갈등, 소통과 조율의 방식까지.<br className="hidden sm:inline" />
          한 가지 기준으로는 설명할 수 없는 관계의 여러 층위를 입체적으로 살펴봅니다.
        </p>
      </div>

      {/* 1. 와이드 파노라마 비주얼 배너 */}
      <div className="relative w-full overflow-hidden rounded-2xl md:rounded-[32px] border border-[#B78C86]/35 shadow-2xl bg-[#14080E] aspect-[16/7] sm:aspect-[16/6] md:aspect-[21/7]">
        <Image
          src="/image/compatibility/p4.webp"
          alt="선천코드 프리미엄 궁합 리포트 6가지 핵심 분석 축 배너"
          fill
          className="object-cover object-center"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#14080E]/90 via-[#14080E]/40 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#5A2638]/40 via-transparent to-[#5A2638]/40 pointer-events-none" />
      </div>

      {/* 2. 6개 분석 축 키워드 리스트 */}
      <div className="mt-4 md:mt-5">
        {/* PC: 6열 가로 그리드 */}
        <div className="hidden md:grid grid-cols-6 gap-2 text-center">
          {PERSPECTIVE_KEYWORDS.map((item, idx) => {
            const isActive = activeIndex === idx
            return (
              <div 
                key={item.id} 
                className="flex flex-col items-center justify-center py-1 select-none"
              >
                {/* 인디케이터 점 */}
                <span 
                  className={`w-1.5 h-1.5 rounded-full mb-1.5 transition-all duration-500 ${
                    isActive 
                      ? 'bg-[#D8BB94] opacity-100 shadow-[0_0_8px_rgba(216,187,148,0.8)]' 
                      : 'bg-white/20 opacity-0'
                  }`}
                  aria-hidden="true"
                />
                <span
                  className={`font-elegant text-[14px] lg:text-[15px] font-medium tracking-tight transition-colors duration-500 ${
                    isActive
                      ? 'text-[#D8BB94] font-bold'
                      : 'text-[#EDE6DA]/60'
                  }`}
                >
                  {item.label}
                </span>
              </div>
            )
          })}
        </div>

        {/* 모바일: 2행 3열 그리드 */}
        <div className="grid md:hidden grid-cols-3 gap-x-2 gap-y-2 text-center px-1">
          {PERSPECTIVE_KEYWORDS.map((item, idx) => {
            const isActive = activeIndex === idx
            return (
              <div
                key={item.id}
                className={`flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg transition-all duration-500 select-none ${
                  isActive 
                    ? 'bg-[#663244]/30 border border-[#935C6B]/50' 
                    : 'bg-transparent border border-transparent'
                }`}
              >
                <span 
                  className={`w-1 h-1 rounded-full shrink-0 transition-colors duration-500 ${
                    isActive ? 'bg-[#D8BB94]' : 'bg-white/20'
                  }`}
                  aria-hidden="true"
                />
                <span
                  className={`font-elegant text-[12.5px] sm:text-[13px] font-medium tracking-tight transition-colors duration-500 whitespace-nowrap ${
                    isActive
                      ? 'text-[#D8BB94] font-bold'
                      : 'text-[#EDE6DA]/60'
                  }`}
                >
                  {item.label}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
