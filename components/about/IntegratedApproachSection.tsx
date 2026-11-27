'use client'

import React from 'react'
import Image from 'next/image'
import Reveal from '@/components/Reveal'

const perspectives = [
  {
    title: '명리학',
    desc: '전통적인 기질과 성향의 해석 관점'
  },
  {
    title: '타로 상징학',
    desc: '상징으로 읽어내는 무의식과 관계의 흐름'
  },
  {
    title: '심리 및 무의식 탐구',
    desc: '감정, 신념, 관계 습관에 대한 이해'
  },
  {
    title: 'NLP 및 최면 심리',
    desc: '익숙한 사고와 반응 패턴에 대한 탐구'
  },
  {
    title: '명상과 내면 관찰',
    desc: '감정에 휘둘리지 않는 관찰자 시선 확립'
  },
  {
    title: '뇌과학 기반 행동 설계',
    desc: '뇌의 반응 회로를 재설계하는 현실 실행 루틴'
  }
]

export default function IntegratedApproachSection() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative w-full">
      <div className="max-w-[1280px] mx-auto w-full">
        {/* 영문 소제목 */}
        <Reveal delayMs={100}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-[1px] w-8 bg-[var(--accent-gold)] opacity-40" />
            <span className="text-[12pt] font-elegant font-semibold tracking-[0.25em] text-[var(--accent-gold)] uppercase opacity-90">
              THE INTEGRATED APPROACH
            </span>
            <span className="h-[1px] w-8 bg-[var(--accent-gold)] opacity-40" />
          </div>
        </Reveal>

        {/* 헤드라인 및 설명 문구 */}
        <Reveal delayMs={150}>
          <div className="text-center mb-10 max-w-5xl mx-auto">
            <h2 className="about-heading text-2xl sm:text-4xl md:text-5xl font-elegant font-bold text-[#F5F5F5] mb-6 leading-[1.4] text-center">
              동양의 지혜와 현대 심리학,<br className="hidden sm:inline" />{' '}
              뇌과학을 잇는 통합적 통찰
            </h2>
            <div className="space-y-2 text-[18px] leading-[1.7] text-[#EDE6DA] opacity-85 font-light break-keep text-center max-w-[1000px] mx-auto">
              <p>
                동양의 명리학이 전하는 기질에 대한 관점과 현대 심리학, 뇌과학, 무의식 탐구를 연결합니다.
              </p>
              <p>
                타고난 나부터 살아오며 형성된 나까지, 인간을 보다 입체적으로 이해하고 삶의 방향을 설계하는 것이<br className="hidden sm:inline" />{' '}
                백도화의 통합적 접근 방식입니다.
              </p>
            </div>
          </div>
        </Reveal>

        {/* =========================================================================
            [이동된 고서와 거울 가로형 이미지] (1280px 기준선 일치, 16:9 비율, 16px 라운딩)
            제목과 40px(mb-10), 하단 6개 카드와 40px(mb-10) 간격
            ========================================================================= */}
        <div className="w-full mb-10">
          <Reveal delayMs={180}>
            <div className="relative aspect-[16/9] w-full rounded-[16px] overflow-hidden">
              <Image
                src="/image/wisdom-within.webp"
                alt="동양의 지혜와 내면의 자기성찰을 상징하는 고서와 청동 거울, 백색 도화"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
            </div>
          </Reveal>
        </div>

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
          <div className="gungjung-glass w-full p-8 sm:p-12 text-center border border-[rgba(216,191,163,0.25)]">
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
      </div>
    </section>
  )
}
