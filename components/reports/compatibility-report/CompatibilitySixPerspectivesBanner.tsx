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

// 6가지 분석 축 카드 데이터
const PERSPECTIVE_CARDS = [
  { t: "선천적 기질 궁합", d: "두 사람의 타고난 에너지 조화 분석", i: "fa-yin-yang" },
  { t: "핵심 끌림 이유", d: "서로에게 강력하게 끌리는 근본 원인 해독", i: "fa-magnet" },
  { t: "갈등 근본 원인", d: "반복되는 다툼의 무의식적 배경 분석", i: "fa-triangle-exclamation" },
  { t: "소통 및 유지 전략", d: "서로를 이해하는 방식과 관계 유지법 제안", i: "fa-comments" },
  { t: "미래 관계 해석", d: "결혼 및 장기적 인연의 가능성 탐색", i: "fa-ring" },
  { t: "성장 방향 제안", d: "함께 더 행복해질 수 있는 실질적 가이드", i: "fa-seedling" }
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
        <span className="block font-elegant text-[12pt] font-semibold tracking-[0.2em] text-[#D8BB94] uppercase mb-4">
          SIX PERSPECTIVES
        </span>
        {/* 두 제목 묶음 */}
        <div className="space-y-2.5 md:space-y-3 mb-6 md:mb-7">
          <h3 className="text-2xl md:text-[36px] font-elegant font-bold text-white leading-[1.25] md:leading-[1.3] break-keep">
            여섯 가지 시선으로 읽는 <br className="sm:hidden" />
            <span className="gradient-text-reunion">두 사람의 관계 설계도</span>
          </h3>
          <h4 className="text-2xl md:text-[36px] font-elegant font-bold text-white leading-[1.25] md:leading-[1.3] break-keep">
            두 사람만의 <span className="gradient-text-reunion">6가지 핵심 분석 축</span> 맞춤 궁합 해독
          </h4>
        </div>
        <p className="text-[16px] md:text-[18px] text-[#EDE6DA] opacity-85 font-light leading-relaxed max-w-2xl mx-auto break-keep">
          서로 다른 두 사람의 선천 기질부터 끌림과 갈등, 소통과 조율의 방식까지.<br className="hidden sm:inline" />
          한 가지 기준으로는 설명할 수 없는 관계의 여러 층위를 입체적으로 살펴봅니다.
        </p>
      </div>

      {/* 1. 와이드 파노라마 비주얼 배너 (3:1 가로형 배너) */}
      <div className="relative w-full overflow-hidden rounded-2xl md:rounded-[32px] border border-[#B78C86]/35 shadow-2xl">
        <Image
          src="/image/compatibility/compatibility-six-perspectives-banner.webp"
          alt="선천코드 프리미엄 궁합 리포트 6가지 핵심 분석 축 배너"
          width={2172}
          height={724}
          className="w-full h-auto object-contain block"
          priority={false}
        />
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

      {/* 3. 6개 분석 카드 (3열 × 2행) + 하단 가로 구분선 + 하단 인용 문구 */}
      <div className="mt-8 sm:mt-10 md:mt-12 gungjung-glass px-6 py-10 md:px-10 md:py-14 lg:px-14 lg:py-16 relative overflow-hidden rounded-[36px] border border-[#B78C86]/30 bg-gradient-to-b from-[#4A1F2D]/30 via-[#3A1623]/25 to-[#180A14]/35 backdrop-blur-md">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-7">
          {PERSPECTIVE_CARDS.map((item, idx) => (
            <div 
              key={idx} 
              className="detail-glass-card flex flex-col items-center text-center py-6 px-4 sm:px-5 md:px-5 rounded-[22px] md:rounded-[26px] group transition-all duration-300 border border-[#B78C86]/25 hover:border-[#D8BB94]/45 bg-gradient-to-b from-[#5A2638]/35 to-[#3A1623]/35 backdrop-blur-sm"
            >
              <div className="w-[52px] h-[52px] rounded-2xl bg-[#4A1F2D]/60 flex items-center justify-center border border-[#B78C86]/40 text-[#D8BB94] shadow-sm mb-3.5 group-hover:scale-105 group-hover:bg-[#5A2638]/60 transition-all duration-300">
                <i className={`fas ${item.i} text-lg md:text-[19px]`}></i>
              </div>
              <div className="w-full flex flex-col items-center flex-1 justify-center">
                <h4 className="text-[17px] sm:text-[18.5px] lg:text-[19.5px] font-bold text-white mb-2.5 leading-snug tracking-tight text-center break-keep">
                  {item.t}
                </h4>
                <p className="text-[14.5px] md:text-[15.5px] text-[#EDE6DA]/75 font-light leading-[1.65] break-keep text-center">
                  {item.d}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 md:pt-10 border-t border-[#B78C86]/20 text-center">
          <p className="text-[#EDE6DA] opacity-85 italic font-elegant text-[16px] md:text-[18px] leading-relaxed break-keep">
            &ldquo;이 리포트는 단순한 궁합 점수가 아니라, 관계의 흐름을 이해하고 더 건강한 사랑을 선택하기 위한 프리미엄 자기이해 리포트입니다.&rdquo;
          </p>
        </div>
      </div>
    </div>
  )
}
