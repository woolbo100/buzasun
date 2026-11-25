'use client'

import React from 'react'
import Reveal from '@/components/Reveal'
import Projects from '@/components/Projects'

const perspectives = [
  {
    title: '명리학',
    desc: '전통적인 기질과 성향의 해석 관점'
  },
  {
    title: '타로',
    desc: '상징을 통한 자기성찰과 새로운 관점'
  },
  {
    title: '심리 및 무의식 탐구',
    desc: '감정, 신념, 관계 습관에 대한 이해'
  },
  {
    title: 'NLP 및 최면 관련 학습',
    desc: '익숙한 사고와 반응 패턴에 대한 탐구'
  },
  {
    title: '명상과 마음공부',
    desc: '자기관찰과 내면의 성찰'
  },
  {
    title: '행동과 실천',
    desc: '새로운 선택과 주체적인 삶의 설계'
  }
]

export default function IntegratedApproachSection() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 relative">
      <div className="max-w-[1280px] mx-auto w-full">
        {/* 영문 소제목 */}
        <Reveal delayMs={100}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-[1px] w-8 bg-[var(--accent-gold)] opacity-40" />
            <span className="text-xs md:text-sm font-elegant tracking-[0.25em] text-[var(--accent-gold)] uppercase opacity-80">
              THE INTEGRATED APPROACH
            </span>
            <span className="h-[1px] w-8 bg-[var(--accent-gold)] opacity-40" />
          </div>
        </Reveal>

        {/* 헤드라인 */}
        <Reveal delayMs={150}>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-elegant font-bold text-[#F5F5F5] mb-4 leading-snug">
              동양의 지혜와 인간의 마음을 함께 바라보다
            </h2>
          </div>
        </Reveal>

        {/* 6개 통합 관점 그리드 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {perspectives.map((item, idx) => (
            <Reveal key={idx} delayMs={200 + idx * 80}>
              <div className="gungjung-glass p-6 sm:p-8 rounded-xl border border-[rgba(216,191,163,0.18)] hover:border-[var(--accent-gold)] transition-colors h-full flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-[var(--accent-gold)] opacity-70 block mb-2">
                    PERSPECTIVE 0{idx + 1}
                  </span>
                  <h3 className="text-lg sm:text-xl font-elegant font-bold text-[#F5F5F5] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#EDE6DA] opacity-80 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* 핵심 메시지 상자 */}
        <Reveal delayMs={400}>
          <div className="gungjung-glass max-w-4xl mx-auto p-8 sm:p-12 mb-16 text-center border border-[rgba(216,191,163,0.25)]">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-elegant font-bold text-[var(--accent-gold)] mb-4">
              한 가지 관점만으로 인간을 단정하지 않습니다.
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-[#EDE6DA] opacity-85 leading-relaxed font-light max-w-2xl mx-auto">
              타고난 기질과 살아온 경험, 내면의 신념, 현재의 감정과 앞으로의 선택을 함께 바라보며 자신을 입체적으로 이해하는 방향을 추구합니다.
            </p>
            <p className="text-xs text-[#EDE6DA] opacity-50 mt-6 font-light">
              * 명리학과 타로는 전통적·상징적 해석 체계이며, 백도화의 콘텐츠와 리포트는 자기이해와 성찰을 위한 안내서로 제공됩니다.
            </p>
          </div>
        </Reveal>

        {/* 기존 소개 페이지의 '우리가 설계하는 영역' 프로젝트 (완전 보존) */}
        <div className="relative">
          <Projects />
        </div>
      </div>
    </section>
  )
}
