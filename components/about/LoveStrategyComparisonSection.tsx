'use client'

import React from 'react'
import Reveal from '@/components/Reveal'

const generalAdvice = [
  '매력적인 사람이 되는 법',
  '상대의 마음을 얻는 법',
  '좋은 인연을 만나는 법',
  '성공적인 연애를 하는 법'
]

const baekdohwaStrategy = [
  '나만의 고유한 매력',
  '나의 끌림과 사랑의 방식',
  '나에게 어울리는 인연',
  '나에게 맞는 연애 전략'
]

export default function LoveStrategyComparisonSection() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative w-full">
      <div className="max-w-[1280px] mx-auto w-full">
        {/* 영문 소제목 */}
        <Reveal delayMs={100}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-[1px] w-8 bg-[var(--accent-gold)] opacity-40" />
            <span className="text-xs md:text-sm font-elegant tracking-[0.25em] text-[var(--accent-gold)] uppercase opacity-80">
              A DIFFERENT PERSPECTIVE
            </span>
            <span className="h-[1px] w-8 bg-[var(--accent-gold)] opacity-40" />
          </div>
        </Reveal>

        {/* 헤드라인 */}
        <Reveal delayMs={150}>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-elegant font-bold text-[#F5F5F5] leading-snug">
              같은 사랑을 이야기하지만,<br className="sm:hidden" />{' '}
              접근하는 방식은 다릅니다.
            </h2>
          </div>
        </Reveal>

        {/* 좌우 2개의 대형 비교 카드 (동일한 크기 및 높이, 1280px 기준선 정렬) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full items-stretch">
          {/* 왼쪽 카드: 보편적인 연애 공식 */}
          <Reveal delayMs={200}>
            <div className="gungjung-glass p-8 sm:p-12 rounded-3xl border border-[rgba(216,191,163,0.15)] bg-[rgba(35,25,32,0.45)] h-full flex flex-col justify-between w-full">
              <div>
                <span className="text-xs font-elegant font-bold tracking-widest text-[#A89BBF] uppercase block mb-2 opacity-80">
                  GENERAL LOVE ADVICE
                </span>
                <h3 className="text-2xl sm:text-3xl font-elegant font-bold text-[#EDE6DA] mb-8 pb-4 border-b border-[rgba(216,191,163,0.15)]">
                  보편적인 연애 공식
                </h3>

                <div className="space-y-6">
                  {generalAdvice.map((item, idx) => (
                    <div key={idx} className="pb-5 border-b border-[rgba(216,191,163,0.1)] last:border-b-0">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono text-[#A89BBF] opacity-60">
                          0{idx + 1}
                        </span>
                        <p className="text-base sm:text-lg text-[#CFC7DC] font-light">
                          {item}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* 오른쪽 카드: 백도화 선언 및 선천코드 맞춤 전략 */}
          <Reveal delayMs={300}>
            <div className="gungjung-glass p-8 sm:p-12 rounded-3xl border border-[rgba(216,191,163,0.35)] bg-gradient-to-b from-[rgba(78,20,36,0.45)] via-[rgba(62,15,31,0.5)] to-[rgba(45,15,25,0.45)] h-full flex flex-col justify-between w-full shadow-[0_16px_48px_rgba(0,0,0,0.5)]">
              <div>
                <span className="text-xs font-elegant font-bold tracking-widest text-[var(--accent-gold)] uppercase block mb-2 opacity-90">
                  BAEKDOHWA
                </span>
                <h3 className="text-2xl sm:text-3xl font-elegant font-bold text-[var(--accent-gold)] mb-8 pb-4 border-b border-[rgba(216,191,163,0.3)]">
                  선천코드 맞춤 전략
                </h3>

                <div className="space-y-6">
                  {baekdohwaStrategy.map((item, idx) => (
                    <div key={idx} className="pb-5 border-b border-[rgba(216,191,163,0.2)] last:border-b-0">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono text-[var(--accent-gold)] font-bold">
                          0{idx + 1}
                        </span>
                        <p className="text-base sm:text-lg text-[var(--accent-gold-light)] font-medium">
                          {item}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* 비교 카드 하단 핵심 메시지 (36~40px 기준 명조 계열) */}
        <Reveal delayMs={450}>
          <div className="mt-20 text-center max-w-3xl mx-auto">
            <h3 className="text-2xl sm:text-3xl md:text-[38px] font-elegant font-bold text-[var(--accent-gold)] mb-4 leading-tight">
              사랑에도 나만의 방식이 있습니다.
            </h3>
            <p className="text-base sm:text-xl text-[#EDE6DA] opacity-85 font-light leading-relaxed">
              누군가의 공식을 따라가는 사랑에서<br className="sm:hidden" />{' '}
              나를 이해하고 선택하는 사랑으로.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
