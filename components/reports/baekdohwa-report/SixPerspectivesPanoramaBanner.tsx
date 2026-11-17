'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const PERSPECTIVE_KEYWORDS = [
  { id: 1, label: '매력 무기' },
  { id: 2, label: '무의식 끌림' },
  { id: 3, label: '관계의 그림자' },
  { id: 4, label: '악연 경고' },
  { id: 5, label: '감정 회로' },
  { id: 6, label: '에너지 회복' },
]

export default function SixPerspectivesPanoramaBanner() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    // 1.2초마다 다음 키워드로 순차 강조 (0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 0 무한 반복)
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % PERSPECTIVE_KEYWORDS.length)
    }, 1200)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="w-full max-w-7xl mx-auto mb-10 md:mb-12">
      {/* 1. 약 4:1 가로 파노라마 배너 이미지 (원본 색상/자개 질감 보존, 별도 배경/그림자/글로우 배제) */}
      <div className="relative w-full overflow-hidden rounded-2xl md:rounded-[32px]">
        <Image
          src="/image/lovereport/six%20love%20code%20map.webp"
          alt="선천코드 연애 리포트 6가지 핵심 분석 축 자개 지도 배너"
          width={2172}
          height={724}
          className="w-full h-auto object-contain block"
          priority={false}
        />
      </div>

      {/* 2. 6개 분석 축 키워드 리스트 */}
      <div className="mt-3.5 md:mt-4">
        {/* PC: 6열 가로 그리드 (각 인장 중심과 정렬) */}
        <div className="hidden md:grid grid-cols-6 gap-2 text-center">
          {PERSPECTIVE_KEYWORDS.map((item, idx) => {
            const isActive = activeIndex === idx
            return (
              <div 
                key={item.id} 
                className="flex flex-col items-center justify-center py-1 select-none"
              >
                {/* 은은한 인장 연결 인디케이터 점 */}
                <span 
                  className={`w-1.5 h-1.5 rounded-full mb-1.5 transition-all duration-500 ${
                    isActive 
                      ? 'bg-[#D9A8A7] opacity-100 shadow-[0_0_6px_rgba(217,168,167,0.5)]' 
                      : 'bg-white/20 opacity-0'
                  }`}
                  aria-hidden="true"
                />
                <span
                  className={`font-elegant text-[14px] lg:text-[15px] font-medium tracking-tight transition-colors duration-500 ${
                    isActive
                      ? 'text-[#D9A8A7]'
                      : 'text-[#EDE6DA]/60'
                  }`}
                >
                  {item.label}
                </span>
              </div>
            )
          })}
        </div>

        {/* 모바일: 2행 3열 그리드 (가로 스크롤 방지, 12.5~13px 가독성 확보) */}
        <div className="grid md:hidden grid-cols-3 gap-x-2 gap-y-2 text-center px-1">
          {PERSPECTIVE_KEYWORDS.map((item, idx) => {
            const isActive = activeIndex === idx
            return (
              <div
                key={item.id}
                className={`flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg transition-all duration-500 select-none ${
                  isActive 
                    ? 'bg-[#B7788D]/15 border border-[#B7788D]/30' 
                    : 'bg-transparent border border-transparent'
                }`}
              >
                <span 
                  className={`w-1 h-1 rounded-full shrink-0 transition-colors duration-500 ${
                    isActive ? 'bg-[#D9A8A7]' : 'bg-white/20'
                  }`}
                  aria-hidden="true"
                />
                <span
                  className={`font-elegant text-[12.5px] sm:text-[13px] font-medium tracking-tight transition-colors duration-500 whitespace-nowrap ${
                    isActive
                      ? 'text-[#D9A8A7]'
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
