'use client'

import React from 'react'
import Reveal from '@/components/Reveal'

const principles = [
  {
    num: '01',
    title: '타고난 기질을 삶의 한계로 단정하지 않습니다.',
    desc: '선천적 성향을 이해하는 것은 자신의 가능성을 제한하기 위해서가 아니라, 자신을 알아가는 출발점입니다.'
  },
  {
    num: '02',
    title: '불안과 두려움을 이용하여 의존을 유도하지 않습니다.',
    desc: '미래에 대한 불안보다 현재의 자신을 이해하고 주체적으로 판단하는 힘을 중요하게 생각합니다.'
  },
  {
    num: '03',
    title: '사랑과 관계에서 자신의 가치를 잃지 않도록 돕습니다.',
    desc: '누군가에게 사랑받기 위한 변화보다 자신의 감정과 가치를 존중하는 관계를 지향합니다.'
  },
  {
    num: '04',
    title: '재회, 결혼, 재물 등의 결과를 보장하지 않습니다.',
    desc: '삶에는 다양한 조건과 개인의 선택이 작용하며, 특정한 미래나 결과를 단정할 수 없습니다.'
  },
  {
    num: '05',
    title: '해석을 넘어 자신의 인식과 선택, 실천을 중요하게 생각합니다.',
    desc: '자기이해를 바탕으로 새로운 관점과 행동을 선택하는 것이 백도화가 추구하는 방향입니다.'
  }
]

export default function PrinciplesSection() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative w-full">
      <div className="max-w-[1280px] mx-auto w-full">
        {/* 영문 소제목 */}
        <Reveal delayMs={100}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-[1px] w-8 bg-[var(--accent-gold)] opacity-40" />
            <span className="text-[12pt] font-elegant font-semibold tracking-[0.25em] text-[var(--accent-gold)] uppercase opacity-90">
              OUR PRINCIPLES
            </span>
            <span className="h-[1px] w-8 bg-[var(--accent-gold)] opacity-40" />
          </div>
        </Reveal>

        {/* 헤드라인 (공통 line-height: 1.4 적용, max-w-4xl 확장으로 '주체성을 존중합니다' 단어 잘림 방지) */}
        <Reveal delayMs={150}>
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="about-heading text-2xl sm:text-4xl md:text-5xl font-elegant font-bold text-[#F5F5F5] mb-4">
              운명을 단정하지 않고, 삶의 주체성을 존중합니다.
            </h2>
          </div>
        </Reveal>

        {/* 차분한 선언문 형식의 5대 원칙 리스트 (1280px 기준선 정렬) */}
        <div className="gungjung-glass w-full p-8 sm:p-12 md:p-16 border border-[rgba(216,191,163,0.2)]">
          <div className="space-y-10 sm:space-y-12">
            {principles.map((item, idx) => (
              <Reveal key={idx} delayMs={200 + idx * 80}>
                <div className="relative group w-full">
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 mb-3">
                    <span className="text-xl sm:text-2xl font-elegant font-bold text-[var(--accent-gold)] tracking-wider">
                      {item.num}.
                    </span>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-elegant font-semibold text-[#F5F5F5] group-hover:text-[var(--accent-gold-light)] transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <div className="sm:pl-12">
                    <p className="text-[18px] leading-[1.7] text-[#EDE6DA] opacity-80 font-light break-keep">
                      {item.desc}
                    </p>
                  </div>
                  {idx < principles.length - 1 && (
                    <div className="gold-divider opacity-20 mt-8 sm:mt-10" />
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
