'use client'

import React from 'react'
import Reveal from '@/components/Reveal'

const comparisons = [
  {
    common: '언제 좋은 인연을 만날까?',
    baekdohwa: '나는 어떤 사랑을 반복하고 있는가?'
  },
  {
    common: '그 사람은 나를 사랑할까?',
    baekdohwa: '나는 왜 그 사람에게 끌리는가?'
  },
  {
    common: '다시 만날 수 있을까?',
    baekdohwa: '재회는 나에게 어떤 의미인가?'
  },
  {
    common: '우리는 잘 맞을까?',
    baekdohwa: '서로의 다름을 어떻게 이해할 수 있을까?'
  },
  {
    common: '언제 돈이 들어올까?',
    baekdohwa: '나의 재능과 풍요를 대하는 태도는 어떠한가?'
  },
  {
    common: '앞으로 어떤 운명이 펼쳐질까?',
    baekdohwa: '나는 어떤 운명을 만들어 가고 싶은가?'
  }
]

export default function PerspectiveComparisonSection() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative w-full">
      <div className="max-w-[1280px] mx-auto w-full">
        {/* 영문 소제목 */}
        <Reveal delayMs={100}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-[1px] w-8 bg-[var(--accent-gold)] opacity-40" />
            <span className="text-[12px] font-elegant tracking-[0.25em] text-[var(--accent-gold)] uppercase opacity-80">
              A DIFFERENT PERSPECTIVE
            </span>
            <span className="h-[1px] w-8 bg-[var(--accent-gold)] opacity-40" />
          </div>
        </Reveal>

        {/* 헤드라인 */}
        <Reveal delayMs={150}>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-elegant font-bold text-[#F5F5F5] mb-4 leading-snug">
              같은 질문도, 다른 관점에서 바라봅니다.
            </h2>
            <p className="text-[18px] leading-[1.7] text-[#EDE6DA] opacity-85 font-light break-keep">
              백도화는 사랑과 관계, 운명에 대한 질문의 답을 외부에서만 찾지 않습니다.<br className="hidden sm:inline" />{' '}
              타인의 마음과 미래에 대한 궁금증에서 출발하여 자신에 대한 이해와 주체적인 선택으로 시선을 확장합니다.
            </p>
          </div>
        </Reveal>

        {/* 2열 비교 테이블 구조 (1280px 기준선 정렬) */}
        <Reveal delayMs={200}>
          <div className="gungjung-glass w-full overflow-hidden border border-[rgba(216,191,163,0.2)]">
            {/* 테이블 헤더 */}
            <div className="grid grid-cols-1 md:grid-cols-2 border-b border-[rgba(216,191,163,0.2)] bg-[rgba(26,15,46,0.5)]">
              <div className="py-4 px-6 text-center md:text-left border-b md:border-b-0 md:border-r border-[rgba(216,191,163,0.2)]">
                <span className="text-[12px] font-elegant tracking-widest text-[#A89BBF] uppercase">
                  일반적으로 궁금해하는 질문
                </span>
              </div>
              <div className="py-4 px-6 text-center md:text-left bg-[rgba(59,15,27,0.2)]">
                <span className="text-[12px] font-elegant tracking-widest text-[var(--accent-gold)] uppercase font-semibold">
                  백도화가 함께 탐색하는 질문
                </span>
              </div>
            </div>

            {/* 비교 로우 목록 */}
            <div className="divide-y divide-[rgba(216,191,163,0.12)]">
              {comparisons.map((item, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-1 md:grid-cols-2 hover:bg-[rgba(255,255,255,0.02)] transition-colors duration-200"
                >
                  {/* 좌측: 일반 질문 (차분한 중립 컬러) */}
                  <div className="py-4 sm:py-5 px-6 flex items-center md:border-r border-[rgba(216,191,163,0.12)]">
                    <span className="text-[12px] text-[var(--accent-gold)] opacity-40 mr-3 font-mono">
                      Q{idx + 1}
                    </span>
                    <p className="text-[18px] leading-[1.7] text-[#CFC7DC] font-light break-keep">
                      {item.common}
                    </p>
                  </div>

                  {/* 우측: 백도화의 질문 (앤티크 샴페인 골드 & 아이보리 강조) */}
                  <div className="py-4 sm:py-5 px-6 flex items-center bg-[rgba(59,15,27,0.08)]">
                    <span className="text-[12px] text-[var(--accent-gold)] mr-3 font-mono font-bold">
                      A{idx + 1}
                    </span>
                    <p className="text-[18px] leading-[1.7] text-[var(--accent-gold-light)] font-medium break-keep">
                      {item.baekdohwa}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* 하단 핵심 메시지 */}
        <Reveal delayMs={400}>
          <div className="mt-14 text-center">
            <p className="text-base sm:text-lg md:text-xl font-elegant font-medium text-[var(--accent-gold)] leading-relaxed">
              미래에 대한 질문에서,<br className="sm:hidden" />{' '}
              자신에 대한 이해와 새로운 선택으로.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
