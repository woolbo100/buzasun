'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Reveal from '@/components/Reveal'
import { Brain, Compass, Target } from 'lucide-react'

const credentials = [
  {
    icon: <Compass size={40} style={{ color: 'var(--accent-gold)' }} className="mb-6" />,
    title: '선천코드 분석',
    subtitle: 'INNATE CODE',
    items: ['명리심리', '타로심리', '오행과 기질 분석', '동양철학']
  },
  {
    icon: <Brain size={40} style={{ color: 'var(--accent-gold)' }} className="mb-6" />,
    title: '내면 설계',
    subtitle: 'INNER DESIGN',
    items: ['심리상담', '연애·관계 심리', 'NLP 기법', '최면심리와 무의식 탐구']
  },
  {
    icon: <Target size={40} style={{ color: 'var(--accent-gold)' }} className="mb-6" />,
    title: '미래 설계',
    subtitle: 'FUTURE DESIGN',
    items: ['뇌과학 기반 행동·습관 설계', '자기암시와 마인드셋', '자존감과 자기주도성 확립', '현실 실행 루틴 설계']
  }
]

export default function BaekJangmiStorySection() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative w-full">
      <div className="max-w-[1280px] mx-auto w-full">
        {/* [기존 보존] 백도화 선언 타이틀 */}
        <Reveal delayMs={100}>
          <div className="flex items-center justify-center gap-4 md:gap-8 mb-8">
            <div className="flex-shrink-0 flex items-center justify-center">
              <Image
                src="/image/baekdohwa-flower-symbol.png"
                alt="백도화 상징 꽃"
                width={70}
                height={70}
                className="w-[68px] sm:w-[70px] h-[68px] sm:h-[70px] object-contain"
                priority
              />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-elegant font-bold text-center text-[#F5F5F5]">
              백도화 선언
            </h2>
            <div className="flex-shrink-0 flex items-center justify-center">
              <Image
                src="/image/baekdohwa-flower-symbol.png"
                alt="백도화 상징 꽃"
                width={70}
                height={70}
                className="w-[68px] sm:w-[70px] h-[68px] sm:h-[70px] object-contain"
                priority
              />
            </div>
          </div>
        </Reveal>

        {/* =========================================================================
            [신규 상단 백도화 선언 배너 이미지] 4:1 와이드 배너 (1280px 기준선 정렬, 라운딩 16px)
            '백도화 선언' 제목과 32px(mb-8), 하단 투명 선언문 카드와 40px(mb-10) 여백
            ========================================================================= */}
        <div className="w-full mb-10">
          <Reveal delayMs={150}>
            <div className="relative w-full aspect-[4/1] rounded-[16px] overflow-hidden">
              <Image
                src="/image/baekdohwa-declaration-top-banner.webp"
                alt="백도화 선언 배너"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
            </div>
          </Reveal>
        </div>

        {/* [기존 보존] 메인 선언문 상자 (1280px 기준선 정렬) */}
        <Reveal delayMs={200}>
          <div className="gungjung-glass w-full p-10 sm:p-14 md:p-16 text-center mb-16 border border-[rgba(216,191,163,0.2)]">
            <div className="max-w-3xl mx-auto">
              <p className="text-xl md:text-2xl leading-loose text-[#EDE6DA] font-light italic mb-8">
                "백도화의 모든 분석과 설계는{" "}
                <br className="hidden md:block" />
                전문 자격과 실제 데이터를 기반으로 하는{" "}
                <br className="hidden md:block" />
                구조적 해석 공간입니다."
              </p>
              
              <div className="gold-divider mb-6 max-w-sm mx-auto opacity-40" />
              
              <div className="flex justify-center mb-6">
                <Image
                  src="/image/baekdohwa-flower-symbol.png"
                  alt="백도화 상징 꽃"
                  width={100}
                  height={100}
                  className="w-[98px] sm:w-[100px] h-[98px] sm:h-[100px] object-contain"
                />
              </div>
              
              <p className="about-statement-heading text-2xl sm:text-3xl md:text-4xl font-elegant font-bold text-[var(--accent-gold)] tracking-wider">
                감이 아닌 이론<br />
                직관이 아닌 구조<br />
                위로가 아닌 설계
              </p>
            </div>
          </div>
        </Reveal>

        {/* [기존 보존] 3대 자격증 그룹핑 (1280px 기준선 정렬, 3열 표준 간격) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 w-full">
          {credentials.map((section, idx) => {
            const isHovered = hoveredIdx === idx
            return (
              <Reveal key={idx} delayMs={300 + idx * 100}>
                <div 
                  className="gungjung-glass p-8 sm:p-10 h-full text-center flex flex-col items-center justify-between transition-all duration-400 w-full"
                  style={{
                    border: `1px solid ${isHovered ? 'var(--accent-gold)' : 'rgba(216, 191, 163, 0.2)'}`,
                    borderRadius: '16px',
                    boxShadow: isHovered 
                      ? '0 10px 40px rgba(0, 0, 0, 0.5), 0 0 20px var(--accent-gold-soft)'
                      : 'none',
                  }}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                >
                  <div className="flex flex-col items-center w-full">
                    {section.icon}
                    <h4 className="text-[24px] font-elegant font-bold mb-2 text-[#F5F5F5]">
                      {section.title}
                    </h4>
                    <p className="text-[12pt] tracking-widest text-[var(--accent-gold)] mb-6 opacity-90 uppercase font-elegant font-semibold">
                      {section.subtitle}
                    </p>
                    <div className="space-y-2 text-[18px] leading-[1.7] text-[#EDE6DA] font-light w-full break-keep">
                      {section.items.map((item, i) => (
                        <p key={i} className="text-[#EDE6DA]">
                          {item}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
