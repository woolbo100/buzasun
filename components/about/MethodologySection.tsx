'use client'

import React from 'react'
import Image from 'next/image'
import Reveal from '@/components/Reveal'
import { ChevronDown } from 'lucide-react'

const steps = [
  {
    step: 'STEP 01',
    hanja: '解讀',
    title: '해독',
    subtitle: '타고난 나를 이해하다.',
    desc: '선천코드를 통해 자신의 기질과 성향, 관계에서 나타나는 특성을 탐색합니다.'
  },
  {
    step: 'STEP 02',
    hanja: '發見',
    title: '발견',
    subtitle: '반복되는 패턴을 발견하다.',
    desc: '지금까지 반복되어 온 감정, 관계 습관과 선택의 흐름을 돌아봅니다.'
  },
  {
    step: 'STEP 03',
    hanja: '覺醒',
    title: '각성',
    subtitle: '익숙한 신념과 선택을 돌아보다.',
    desc: '자신을 제한하는 신념과 무의식적인 반응을 살피고, 자신과 관계를 바라보는 새로운 관점을 발견합니다.'
  },
  {
    step: 'STEP 04',
    hanja: '再設計',
    title: '재설계',
    subtitle: '새로운 삶의 방향을 선택하다.',
    desc: '자신에 대한 이해를 바탕으로 보다 주체적인 관계와 삶을 위한 행동을 설계합니다.'
  }
]

export default function MethodologySection() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative w-full">
      <div className="max-w-[1280px] mx-auto w-full">
        {/* 1. 영문 소제목 */}
        <Reveal delayMs={100}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-[1px] w-8 bg-[var(--accent-gold)] opacity-40" />
            <span className="text-[12pt] font-elegant font-semibold tracking-[0.25em] text-[var(--accent-gold)] uppercase opacity-90">
              THE PATH TO SELF-MASTERY
            </span>
            <span className="h-[1px] w-8 bg-[var(--accent-gold)] opacity-40" />
          </div>
        </Reveal>

        {/* 2 & 3. 메인 제목 및 설명 문구 (간격 약 32px) */}
        <Reveal delayMs={150}>
          <div className="text-center mb-8 max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-elegant font-bold text-[#F5F5F5] mb-4 leading-[1.5]">
              선천코드 해독과 운명 재설계
            </h2>
            <p className="text-[18px] leading-[1.7] text-[#EDE6DA] opacity-85 font-light break-keep">
              백도화는 자신을 이해하는 것에서 출발하여 반복되는 패턴을 돌아보고,<br className="hidden sm:inline" />{' '}
              보다 주체적인 선택을 할 수 있도록 다음의 네 가지 과정을 제안합니다.
            </p>
          </div>
        </Reveal>

        {/* 4. 신규 가로형 이미지 (1280px 기준선 정렬, 원본 3:1 와이드 가로형 비율 유지, 상하 간격 32px) */}
        <Reveal delayMs={180}>
          <div className="w-full mb-8">
            <div className="relative w-full aspect-[2172/724] rounded-2xl overflow-hidden border border-[rgba(216,191,163,0.2)] shadow-md">
              <Image
                src="/image/the-path-to-self-mastery.webp"
                alt="고요한 궁궐 회랑을 지나 스스로 빛을 향해 나아가는 여성"
                fill
                className="object-cover"
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
            </div>
          </div>
        </Reveal>

        {/* 5. 기존 4단계 카드 (PC 가로 4열, 모바일 세로형 + 화살표 연결, 1280px 기준선 정렬) */}
        <div className="relative w-full">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-stretch w-full">
            {steps.map((item, idx) => (
              <React.Fragment key={idx}>
                <Reveal delayMs={200 + idx * 100}>
                  <div className="gungjung-glass p-6 sm:p-8 rounded-2xl flex flex-col justify-between h-full border border-[rgba(216,191,163,0.2)] hover:border-[var(--accent-gold)] transition-colors duration-400 group w-full">
                    <div>
                      {/* 스텝 라벨 및 한자 */}
                      <div className="flex items-center justify-between mb-4 pb-3 border-b border-[rgba(216,191,163,0.15)]">
                        <span className="text-[12px] font-elegant font-bold tracking-widest text-[var(--accent-gold)] uppercase">
                          {item.step}
                        </span>
                        <span className="text-[12px] font-elegant text-[var(--accent-gold)] opacity-60">
                          {item.hanja}
                        </span>
                      </div>

                      {/* 단계 제목 */}
                      <div className="mb-4">
                        <h3 className="text-2xl font-elegant font-bold text-[#F5F5F5] group-hover:text-[var(--accent-gold)] transition-colors">
                          {item.title}{' '}
                          <span className="text-base font-normal text-[var(--accent-gold)] opacity-80">
                            {item.hanja}
                          </span>
                        </h3>
                        <p className="text-[18px] leading-[1.7] font-medium text-[var(--accent-gold-light)] mt-1 break-keep">
                          {item.subtitle}
                        </p>
                      </div>

                      {/* 설명 */}
                      <p className="text-[18px] text-[#EDE6DA] opacity-80 leading-[1.7] font-light break-keep">
                        {item.desc}
                      </p>
                    </div>

                    {/* 모바일용 하향 화살표 (마지막 카드 제외) */}
                    {idx < 3 && (
                      <div className="flex justify-center md:hidden pt-4 opacity-40 text-[var(--accent-gold)]">
                        <ChevronDown size={20} />
                      </div>
                    )}
                  </div>
                </Reveal>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* 6. 하단 핵심 메시지 (1280px 기준선 정렬) */}
        <Reveal delayMs={600}>
          <div className="mt-16 text-center gungjung-glass w-full p-8 border border-[rgba(216,191,163,0.2)]">
            <p className="text-lg sm:text-xl md:text-2xl font-elegant font-semibold text-[var(--accent-gold)] leading-relaxed">
              나를 읽고, 패턴을 발견하고,<br className="sm:hidden" />{' '}
              내면을 깨우며, 운명을 다시 설계하다.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
