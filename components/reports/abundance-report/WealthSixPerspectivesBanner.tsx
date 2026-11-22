'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const PERSPECTIVE_KEYWORDS = [
  { id: 1, label: '자원 활용 성향' },
  { id: 2, label: '돈에 대한 태도' },
  { id: 3, label: '기회를 보는 방식' },
  { id: 4, label: '재정 선택 패턴' },
  { id: 5, label: '자원 관리와 균형' },
  { id: 6, label: '풍요 실천 방향' },
]

export default function WealthSixPerspectivesBanner() {
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
      {/* 영역 헤더: 영문 라벨 + 2개 제목 묶음 + 설명 문구 */}
      <div className="max-w-4xl mx-auto mb-10 md:mb-12 text-center space-y-4">
        {/* ① 영문 라벨 (단독 표시) */}
        <span className="block font-elegant text-[12pt] font-semibold tracking-[0.2em] text-[#8FB4A4] uppercase mb-4">
          SIX PERSPECTIVES
        </span>

        {/* ② 두 제목 묶음 (데스크톱 36px, 동일 수준 그룹) */}
        <div className="space-y-2.5 md:space-y-3 mb-6 md:mb-7">
          <h3 className="text-2xl md:text-[36px] font-elegant font-bold text-white leading-[1.25] md:leading-[1.3] break-keep">
            여섯 가지 시선으로 읽는 <br className="sm:hidden" />
            <span className="gradient-text-abundance">나만의 풍요 설계도</span>
          </h3>
          <h4 className="text-2xl md:text-[36px] font-elegant font-bold text-white leading-[1.25] md:leading-[1.3] break-keep">
            돈과 선택 패턴의 개인 맞춤 해독 — <span className="text-[#C2A477]">6가지 핵심 탐구 축</span>
          </h4>
        </div>

        {/* ③ 기존 설명 문구 유지 */}
        <p className="text-[16px] md:text-[18px] text-[#EDE6DA] opacity-85 font-light leading-relaxed max-w-2xl mx-auto break-keep">
          타고난 기질과 돈을 대하는 태도, 익숙한 선택과 놓치고 있던 가능성까지.<br className="hidden sm:inline" />
          나의 재정 경험과 행동의 흐름을 여러 관점에서 입체적으로 살펴봅니다.
        </p>
      </div>

      {/* ④ 와이드 파노라마 비주얼 배너 (기존 16:9 배너) */}
      <div className="relative w-full overflow-hidden rounded-2xl md:rounded-[32px] border border-[#608F82]/35 shadow-2xl">
        <Image
          src="/images/abundance/wealth-six-perspectives-banner.webp"
          alt="선천코드 풍요 리포트 6가지 핵심 분석 축 배너"
          width={2172}
          height={724}
          className="w-full h-auto object-contain block"
          priority={false}
        />
      </div>

      {/* ⑤ 6개 분석 축 애니메이션 라벨 리스트 */}
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
                      ? 'bg-[#E6BE8A] opacity-100 shadow-[0_0_8px_rgba(230,190,138,0.8)]' 
                      : 'bg-white/20 opacity-0'
                  }`}
                  aria-hidden="true"
                />
                <span
                  className={`font-elegant text-[14px] lg:text-[15px] font-medium tracking-tight transition-colors duration-500 ${
                    isActive
                      ? 'text-[#E6BE8A] font-bold'
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
                    ? 'bg-[#3A5F53]/30 border border-[#8FD3B6]/40' 
                    : 'bg-transparent border border-transparent'
                }`}
              >
                <span 
                  className={`w-1 h-1 rounded-full shrink-0 transition-colors duration-500 ${
                    isActive ? 'bg-[#E6BE8A]' : 'bg-white/20'
                  }`}
                  aria-hidden="true"
                />
                <span
                  className={`font-elegant text-[12.5px] sm:text-[13px] font-medium tracking-tight transition-colors duration-500 whitespace-nowrap ${
                    isActive
                      ? 'text-[#E6BE8A] font-bold'
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

      {/* ⑥ 기존 6개 분석 카드 영역 (애니메이션 라벨 바로 아래 자연스러운 간격 28~40px) */}
      <div className="mt-7 md:mt-10 gungjung-glass px-6 py-10 md:px-10 md:py-14 lg:px-14 lg:py-16 relative overflow-hidden rounded-[36px] border border-[#8FD3B6]/15">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-7">
          {[
            { t: "타고난 재능과 강점", d: "내가 억지로 애쓰지 않아도 자연스럽게 발휘할 수 있는 고유한 강점과 잠재력을 읽어냅니다.", i: "fa-gem" },
            { t: "수익 활동 성향", d: "자율적 환경, 협업, 전문 분야 몰입 등 나에게 잘 맞는 일의 방식과 수익 활동 성향을 살펴봅니다.", i: "fa-compass" },
            { t: "돈을 대하는 태도", d: "재정적 선택의 순간마다 무의식적으로 작동하는 나의 가치관과 돈을 바라보는 시선을 점검합니다.", i: "fa-scale-balanced" },
            { t: "반복되는 수입 패턴", d: "일의 시작과 유지, 확장의 과정에서 나타나는 나만의 흐름과 에너지가 분산되는 지점을 짚어봅니다.", i: "fa-chart-line" },
            { t: "소비 습관과 균형", d: "감정적 지출이나 습관적 소비가 일어나는 맥락을 이해하고 나에게 만족을 주는 소비 기준을 세웁니다.", i: "fa-seedling" },
            { t: "현실 실천 방향", d: "일상에서 부담 없이 시작하고 꾸준히 이어갈 수 있는 현실적인 정돈과 실천 방향을 제안합니다.", i: "fa-route" }
          ].map((item, idx) => (
            <div 
              key={idx} 
              className="detail-glass-card flex flex-col items-center text-center py-6 px-4 sm:px-5 md:px-5 rounded-[22px] md:rounded-[26px] group transition-all duration-300 border border-[#8FD3B6]/15 hover:border-[#8FD3B6]/35"
            >
              <div className="w-[52px] h-[52px] rounded-2xl bg-[#0f241f] flex items-center justify-center border border-[#8FD3B6]/35 text-[#C2A477] shadow-sm mb-3.5 group-hover:scale-105 group-hover:bg-[#152e27] transition-all duration-300">
                <i className={`fas ${item.i} text-lg md:text-[19px] text-[#8FB4A4]`}></i>
              </div>
              <div className="w-full flex flex-col items-center flex-1 justify-center">
                <h4 className="text-[17px] sm:text-[18.5px] lg:text-[19.5px] font-bold text-white mb-2.5 group-hover:text-[#C2A477] transition-colors leading-snug tracking-tight text-center break-keep">
                  {item.t}
                </h4>
                <p className="text-[14.5px] md:text-[15.5px] text-[#EDE6DA]/75 font-light leading-[1.65] break-keep text-center">
                  {item.d}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
