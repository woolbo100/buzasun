'use client'

import React from 'react'
import Reveal from '@/components/Reveal'

const generalAdvice = [
  '어떻게 하면 매력적인 사람이 될까?',
  '어떻게 하면 상대의 마음을 얻을까?',
  '어떻게 하면 좋은 인연을 만날까?',
  '어떻게 하면 성공적인 연애를 할 수 있을까?'
]

const baekdohwaStrategy = [
  '나만이 가진 고유한 매력은 무엇인가?',
  '나는 왜 그 사람에게 끌리는가?',
  '나에게 진정으로 어울리는 인연은 누구인가?',
  '나의 기질에 맞는 연애 전략은 무엇인가?'
]

export default function LoveStrategyComparisonSection() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative w-full">
      <div className="max-w-[1280px] mx-auto w-full">
        {/* 영문 소제목 (SHIFT OF STANDARD) */}
        <Reveal delayMs={100}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-[1px] w-8 bg-[var(--accent-gold)] opacity-40" />
            <span className="text-[12pt] font-elegant font-semibold tracking-[0.25em] text-[var(--accent-gold)] uppercase opacity-90">
              SHIFT OF STANDARD
            </span>
            <span className="h-[1px] w-8 bg-[var(--accent-gold)] opacity-40" />
          </div>
        </Reveal>

        {/* 헤드라인 (의미 단위 2줄 배치, 공통 line-height: 1.4 적용, '나를 기준' 피치 포인트 컬러 강조) */}
        <Reveal delayMs={150}>
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="about-heading text-2xl sm:text-4xl md:text-5xl font-elegant font-bold text-[#F5F5F5] text-center">
              남의 공식에 나를 맞출 것인가,<br />
              <span className="text-[var(--accent-gold)] drop-shadow-[0_0_12px_rgba(212,178,167,0.3)]">나를 기준</span>으로 판을 짤 것인가
            </h2>
          </div>
        </Reveal>

        {/* 좌우 2개의 대형 비교 카드 (동일한 크기 및 높이, 1280px 기준선 정렬) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full items-stretch">
          {/* 왼쪽 카드: 보편적인 연애 공식 */}
          <Reveal delayMs={200}>
            <div className="gungjung-glass p-8 sm:p-12 rounded-3xl border border-[rgba(216,191,163,0.15)] bg-[rgba(35,25,32,0.45)] h-full flex flex-col justify-between w-full">
              <div>
                <span className="text-[12pt] font-elegant font-semibold tracking-widest text-[#A89BBF] uppercase block mb-2 opacity-80">
                  GENERAL LOVE ADVICE
                </span>
                <h3 className="text-2xl sm:text-3xl font-elegant font-bold text-[#EDE6DA] mb-8 pb-4 border-b border-[rgba(216,191,163,0.15)]">
                  보편적인 연애 공식
                </h3>

                <div className="space-y-6">
                  {generalAdvice.map((item, idx) => (
                    <div key={idx} className="pb-5 border-b border-[rgba(216,191,163,0.1)] last:border-b-0 min-h-[58px] flex items-center">
                      <div className="flex items-center gap-3 w-full">
                        <span className="text-[12px] font-mono text-[#A89BBF] opacity-60 flex-shrink-0">
                          0{idx + 1}
                        </span>
                        <p className="text-[18px] leading-[1.7] text-[#CFC7DC] font-light break-keep">
                          {item}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* 오른쪽 카드: 백도화 선천코드 맞춤 전략 (톤다운된 딥 버건디 플럼 반투명 카드) */}
          <Reveal delayMs={300}>
            <div className="card--burgundy p-8 sm:p-12 rounded-3xl h-full flex flex-col justify-between w-full">
              <div>
                <span className="text-[12pt] font-elegant font-semibold tracking-widest text-[var(--accent-gold)] uppercase block mb-2 opacity-90">
                  BAEKDOHWA
                </span>
                <h3 className="text-2xl sm:text-3xl font-elegant font-bold text-[var(--accent-gold)] mb-8 pb-4 border-b border-[rgba(216,191,163,0.3)]">
                  선천코드 맞춤 전략
                </h3>

                <div className="space-y-6">
                  {baekdohwaStrategy.map((item, idx) => (
                    <div key={idx} className="pb-5 border-b border-[rgba(216,191,163,0.2)] last:border-b-0 min-h-[58px] flex items-center">
                      <div className="flex items-center gap-3 w-full">
                        <span className="text-[12px] font-mono text-[var(--accent-gold)] font-bold flex-shrink-0">
                          0{idx + 1}
                        </span>
                        <p className="text-[18px] leading-[1.7] text-[var(--accent-gold-light)] font-medium break-keep">
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

        {/* 비교 카드 하단 결론 문구 (신규 4자 비교 영역과의 문구 중복을 방지하고 2자 대비의 결론에 집중) */}
        <Reveal delayMs={450}>
          <div className="mt-16 text-center max-w-3xl mx-auto">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-elegant font-bold text-[var(--accent-gold)] mb-3 leading-[1.5]">
              보편적인 공식을 넘어, 나만의 맞춤 전략으로
            </h3>
            <p className="text-[18px] leading-[1.7] text-[#EDE6DA] opacity-80 font-light break-keep">
              남을 흉내 내는 공식이 아닌, 나의 선천코드에 최적화된 사랑의 솔루션을 제시합니다.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
