'use client'

import React from 'react'
import Reveal from '@/components/Reveal'
import { Sprout, Compass, Heart, ShieldCheck, Sunrise } from 'lucide-react'

const principles = [
  {
    num: '01',
    label: '01 · POTENTIAL',
    title: '한계가 아닌 가능성을 읽습니다.',
    desc: '타고난 기질은 삶의 한계가 아니라, 자신만의 가능성을 발견하는 출발점입니다.',
    icon: Sprout
  },
  {
    num: '02',
    label: '02 · SOVEREIGNTY',
    title: '의존이 아닌 주권을 세웁니다.',
    desc: '불안과 두려움을 이용하지 않으며, 스스로 판단하고 선택할 수 있는 힘을 존중합니다.',
    icon: Compass
  },
  {
    num: '03',
    label: '03 · DIGNITY',
    title: '사랑보다 먼저, 당신의 가치를 지킵니다.',
    desc: '타인의 마음을 얻기 위해 자신을 잃는 사랑이 아닌, 본연의 가치를 존중하는 관계를 지향합니다.',
    icon: Heart
  },
  {
    num: '04',
    label: '04 · INTEGRITY',
    title: '허황된 약속보다 정직한 해석을 전합니다.',
    desc: '재회와 결혼, 재물 등 특정한 미래나 결과를 보장하지 않습니다.',
    icon: ShieldCheck
  },
  {
    num: '05',
    label: '05 · TRANSFORMATION',
    title: '해석의 끝은 삶의 실천입니다.',
    desc: '자기이해를 넘어 새로운 인식과 선택, 행동으로 이어지는 변화를 지향합니다.',
    icon: Sunrise
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

        {/* 헤드라인 및 설명 문구 */}
        <Reveal delayMs={150}>
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="about-heading text-2xl sm:text-4xl md:text-5xl font-elegant font-bold text-[#F5F5F5] mb-4 text-center leading-[1.4]">
              백도화가 지키는 다섯 가지 신념
            </h2>
            <p className="text-[18px] leading-[1.7] text-[#EDE6DA] opacity-85 font-light break-keep text-center max-w-2xl mx-auto">
              당신의 삶을 대신 결정하지 않기에,<br className="hidden sm:inline" />{' '}
              백도화는 해석과 설계에 있어 분명한 기준을 지킵니다.
            </p>
          </div>
        </Reveal>

        {/* 5개 독립 가로형 딥 버건디 카드 목록 (1280px 기준선 정렬, 간격 16px) */}
        <div className="space-y-4 w-full">
          {principles.map((item, idx) => {
            const Icon = item.icon
            return (
              <Reveal key={idx} delayMs={200 + idx * 80}>
                <div
                  className="p-6 sm:p-8 rounded-2xl border border-[rgba(212,178,167,0.25)] backdrop-blur-md transition-all duration-300 w-full flex flex-col sm:flex-row items-start gap-5 sm:gap-6"
                  style={{
                    background: 'linear-gradient(135deg, rgba(72, 24, 38, 0.52) 0%, rgba(48, 16, 26, 0.46) 100%)'
                  }}
                >
                  {/* 좌측: 상징 아이콘 */}
                  <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center bg-[rgba(255,255,255,0.03)] border border-[rgba(216,191,163,0.25)] text-[var(--accent-gold)] mt-0.5">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>

                  {/* 우측: 번호 및 영문 라벨, 신념 제목, 설명 문구 */}
                  <div className="flex-1 space-y-1.5 text-left">
                    <span className="text-[12px] font-elegant font-semibold tracking-widest text-[var(--accent-gold)] uppercase block">
                      {item.label}
                    </span>
                    <h3 className="text-xl sm:text-2xl md:text-[26px] font-elegant font-bold text-[#F5F5F5] leading-[1.4] break-keep">
                      {item.title}
                    </h3>
                    <p className="text-[18px] leading-[1.7] text-[#EDE6DA] opacity-85 font-light break-keep pt-1">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>

        {/* 하단 브랜드 서약 문구 (배경 위 직접 배치, 28px, 붓글씨, 피치 베이지, 중앙 정렬, 상단 간격 40px) */}
        <Reveal delayMs={650}>
          <div className="mt-10 text-center">
            <p className="text-xl sm:text-2xl md:text-[28px] font-elegant font-bold text-[var(--accent-gold)] leading-[1.4] tracking-wide break-keep">
              해석은 백도화의 몫,<br />
              선택은 언제나 당신의 몫입니다.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
