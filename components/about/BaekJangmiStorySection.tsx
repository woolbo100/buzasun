'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Reveal from '@/components/Reveal'
import BaekdohwaFlowerMark from '@/components/BaekdohwaFlowerMark'
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
        {/* 영문 소제목 */}
        <Reveal delayMs={100}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-[1px] w-8 bg-[var(--accent-gold)] opacity-40" />
            <span className="text-[12pt] font-elegant font-semibold tracking-[0.25em] text-[var(--accent-gold)] uppercase opacity-90">
              THE STORY OF BAEK JANGMI
            </span>
            <span className="h-[1px] w-8 bg-[var(--accent-gold)] opacity-40" />
          </div>
        </Reveal>

        {/* 헤드라인 (공통 line-height: 1.4 적용) */}
        <Reveal delayMs={150}>
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="about-heading text-2xl sm:text-4xl md:text-5xl font-elegant font-bold text-[#F5F5F5] mb-4">
              백도화의 철학을 만들어 가는 사람, 백장미
            </h2>
          </div>
        </Reveal>

        {/* 지침 공식 연결 문구 카드 (1280px 기준선 정렬) */}
        <Reveal delayMs={200}>
          <div className="gungjung-glass w-full p-8 sm:p-12 mb-16 text-center border border-[rgba(216,191,163,0.2)]">
            <div className="max-w-3xl mx-auto space-y-4">
              <p className="text-[18px] text-[#EDE6DA] opacity-90 leading-[1.7] font-light break-keep">
                백도화는 인간의 기질과 마음, 사랑과 관계, 삶의 가능성에 대한 오랜 관심과 탐구에서 출발합니다.
              </p>
              <p className="text-[18px] text-[#EDE6DA] opacity-90 leading-[1.7] font-light break-keep">
                동양의 지혜와 마음공부, 인간의 심리와 무의식에 대한 이해를 연결하며, 자신을 보다 깊이 이해하고 주체적인 삶을 살아가는 방법을 연구합니다.
              </p>
              <div className="gold-divider max-w-xs mx-auto my-6 opacity-30" />
              <p className="text-[18px] leading-[1.7] font-elegant font-medium text-[var(--accent-gold)] break-keep">
                백장미는 이러한 연구와 탐구를 백도화의 콘텐츠, 전자책, 리포트에 담아 전합니다.
              </p>
            </div>
          </div>
        </Reveal>

        {/* [기존 보존] 백도화 선언 타이틀 (신규 이미지 배너와 32px 간격: mb-8) */}
        <Reveal delayMs={250}>
          <div className="flex items-center justify-center gap-4 md:gap-8 mb-8">
            <div className="flex-shrink-0">
              <BaekdohwaFlowerMark size={50} outlinePink={false} />
            </div>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-elegant font-bold text-center text-[#F5F5F5]">
              백도화 선언
            </h3>
            <div className="flex-shrink-0">
              <BaekdohwaFlowerMark size={50} outlinePink={false} />
            </div>
          </div>
        </Reveal>

        {/* =========================================================================
            [신규 상단 백도화 선언 배너 이미지] 4:1 와이드 배너 (1280px 기준선 정렬, 라운딩 16px)
            '백도화 선언' 제목과 32px(mb-8), 하단 투명 선언문 카드와 40px(mb-10) 여백
            ========================================================================= */}
        <div className="w-full mb-10">
          <Reveal delayMs={280}>
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
        <Reveal delayMs={300}>
          <div className="gungjung-glass w-full p-10 sm:p-14 md:p-16 text-center mb-16 border border-[rgba(216,191,163,0.2)]">
            <div className="max-w-3xl mx-auto">
              <p className="text-xl md:text-2xl leading-loose text-[#EDE6DA] font-light italic mb-8">
                "백도화의 모든 분석과 설계는{" "}
                <br className="hidden md:block" />
                전문 자격과 실제 데이터를 기반으로 하는{" "}
                <br className="hidden md:block" />
                구조적 해석 공간입니다."
              </p>
              
              <div className="gold-divider mb-8 max-w-sm mx-auto opacity-40" />
              
              <BaekdohwaFlowerMark 
                size={72}
                className="hidden md:block mx-auto mb-8"
                outlineGold={true}
              />
              <BaekdohwaFlowerMark 
                size={52}
                className="block md:hidden mx-auto mb-8"
                outlineGold={true}
              />
              
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
              <Reveal key={idx} delayMs={400 + idx * 100}>
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
