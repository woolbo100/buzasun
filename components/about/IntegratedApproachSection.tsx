'use client'

import React from 'react'
import Reveal from '@/components/Reveal'

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

const projects = [
  {
    icon: 'fas fa-sparkles',
    title: '선천코드 분석',
    description: '개인의 고유한 선천 코드를 분석해\n관계·매력·선택의 기준을 설계합니다.',
  },
  {
    icon: 'fas fa-heart',
    title: '연애 솔루션',
    description: '반복되는 연애 패턴을\n감정이 아닌 구조로 해석하고 재설계합니다.',
  },
  {
    icon: 'fas fa-star',
    title: '풍요 솔루션',
    description: '에너지 흐름과 선택 구조를 조정해\n삶의 방향성을 바로잡습니다.',
  },
  {
    icon: 'fas fa-gem',
    title: '매력 주파수 조정',
    description: '개인의 매력 주파수를 분석해\n표현과 선택의 밀도를 높입니다.',
  },
  {
    icon: 'fas fa-moon',
    title: '에너지 패턴 워크샵',
    description: '에너지 패턴을 이해하고\n현실에서 작동하는 방식으로 재정렬합니다.',
  },
  {
    icon: 'fas fa-feather',
    title: '한국적 미학 컨설팅',
    description: '한국적 미학을 기반으로\n고유한 분위기와 인상을 설계합니다.',
  },
]

export default function IntegratedApproachSection() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative w-full">
      <div className="max-w-[1280px] mx-auto w-full">
        {/* 영문 소제목 */}
        <Reveal delayMs={100}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-[1px] w-8 bg-[var(--accent-gold)] opacity-40" />
            <span className="text-[12px] font-elegant tracking-[0.25em] text-[var(--accent-gold)] uppercase opacity-80">
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

        {/* 6개 통합 관점 그리드 (1280px 기준선 정렬) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 w-full">
          {perspectives.map((item, idx) => (
            <Reveal key={idx} delayMs={200 + idx * 80}>
              <div className="gungjung-glass p-6 sm:p-8 rounded-xl border border-[rgba(216,191,163,0.18)] hover:border-[var(--accent-gold)] transition-colors h-full flex flex-col justify-between w-full">
                <div>
                  <span className="text-[12px] font-mono tracking-widest text-[var(--accent-gold)] opacity-70 block mb-2">
                    PERSPECTIVE 0{idx + 1}
                  </span>
                  <h3 className="text-lg sm:text-xl font-elegant font-bold text-[#F5F5F5] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[18px] text-[#EDE6DA] opacity-80 leading-[1.7] font-light break-keep">
                    {item.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* 핵심 메시지 상자 (1280px 기준선 정렬) */}
        <Reveal delayMs={400}>
          <div className="gungjung-glass w-full p-8 sm:p-12 mb-20 text-center border border-[rgba(216,191,163,0.25)]">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-elegant font-bold text-[var(--accent-gold)] mb-4">
              한 가지 관점만으로 인간을 단정하지 않습니다.
            </h3>
            <p className="text-[18px] leading-[1.7] text-[#EDE6DA] opacity-85 font-light max-w-2xl mx-auto break-keep">
              타고난 기질과 살아온 경험, 내면의 신념, 현재의 감정과 앞으로의 선택을 함께 바라보며 자신을 입체적으로 이해하는 방향을 추구합니다.
            </p>
            <p className="text-[12px] text-[#EDE6DA] opacity-50 mt-6 font-light">
              * 명리학과 타로는 전통적·상징적 해석 체계이며, 백도화의 콘텐츠와 리포트는 자기이해와 성찰을 위한 안내서로 제공됩니다.
            </p>
          </div>
        </Reveal>

        {/* [기존 보존] 우리가 설계하는 영역 (1280px 기준선 정렬) */}
        <div className="w-full">
          <Reveal delayMs={100}>
            <h3 className="text-3xl md:text-5xl font-elegant font-bold text-center mb-16 gradient-text">
              우리가 설계하는 영역
            </h3>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
            {projects.map((project, index) => (
              <Reveal key={index} delayMs={200 + index * 80}>
                <div className="gungjung-glass p-8 h-full transition-all duration-500 group w-full border border-[rgba(216,191,163,0.18)] hover:border-[var(--accent-gold)]">
                  <div className="text-3xl mb-6 text-[var(--accent-gold)] opacity-80 group-hover:opacity-100 transition-opacity">
                    <i className={project.icon}></i>
                  </div>
                  <h4 className="text-xl md:text-2xl font-elegant font-bold mb-4 text-bd-ivory group-hover:text-[var(--accent-gold)] transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-[18px] leading-[1.7] text-bd-gray group-hover:text-bd-ivory transition-colors whitespace-pre-line font-light break-keep">
                    {project.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
