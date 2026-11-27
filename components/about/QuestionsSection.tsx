'use client'

import React from 'react'
import Reveal from '@/components/Reveal'

export default function QuestionsSection() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative w-full">
      <div className="max-w-[1280px] mx-auto w-full">
        {/* 영문 소제목 */}
        <Reveal delayMs={100}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-[1px] w-8 bg-[var(--accent-gold)] opacity-40" />
            <span className="text-[12px] font-elegant tracking-[0.25em] text-[var(--accent-gold)] uppercase opacity-80">
              THE QUESTIONS OF OUR LIFE
            </span>
            <span className="h-[1px] w-8 bg-[var(--accent-gold)] opacity-40" />
          </div>
        </Reveal>

        {/* 헤드라인 */}
        <Reveal delayMs={150}>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-elegant font-bold text-center mb-16 text-[#F5F5F5] leading-[1.5]">
            왜 우리는 같은 사랑을 반복할까요?
          </h2>
        </Reveal>

        {/* 질문 목록 — 타이포그래피 중심 */}
        <div className="max-w-2xl mx-auto text-center space-y-8 sm:space-y-10 my-12">
          {[
            '사람은 달라졌는데 왜 상처는 비슷할까요?',
            '사랑받고 싶으면서도 왜 사랑을 밀어낼까요?',
            '좋은 인연을 원하면서도 왜 익숙한 관계에 다시 끌릴까요?',
            '풍요를 원하면서도 왜 스스로의 가능성을 제한할까요?',
            '운명이 나를 이끄는 것일까요,\n내가 익숙한 선택을 반복하고 있는 것일까요?'
          ].map((question, idx) => (
            <Reveal key={idx} delayMs={200 + idx * 80}>
              <p className="text-[18px] leading-[1.7] text-[#EDE6DA] opacity-85 font-light whitespace-pre-line break-keep hover:text-[var(--accent-gold-light)] transition-colors duration-300">
                {question}
              </p>
              {idx < 4 && (
                <div className="w-12 h-[1px] bg-[rgba(216,191,163,0.15)] mx-auto mt-8 sm:mt-10" />
              )}
            </Reveal>
          ))}
        </div>

        {/* 하단 핵심 메시지 (1280px 기준선 정렬) */}
        <Reveal delayMs={600}>
          <div className="mt-16 w-full text-center gungjung-glass p-8 sm:p-12 border border-[rgba(216,191,163,0.2)]">
            <p className="text-lg sm:text-xl md:text-2xl font-elegant font-semibold text-[var(--accent-gold)] mb-4 leading-[1.5]">
              백도화는 그 질문의 시작을 타인이 아닌 나 자신에게서 찾습니다.
            </p>
            <p className="text-[18px] leading-[1.7] text-[#EDE6DA] opacity-80 font-light break-keep">
              사랑의 문제도, 관계의 반복도, 풍요에 대한 갈망도<br className="hidden sm:inline" />{' '}
              자신을 이해하는 과정에서 새로운 관점으로 바라볼 수 있습니다.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
