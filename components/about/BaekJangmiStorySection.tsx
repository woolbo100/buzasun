'use client'

import React from 'react'
import Reveal from '@/components/Reveal'
import About from '@/components/About'

export default function BaekJangmiStorySection() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 relative">
      <div className="max-w-[1280px] mx-auto w-full">
        {/* 영문 소제목 */}
        <Reveal delayMs={100}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-[1px] w-8 bg-[var(--accent-gold)] opacity-40" />
            <span className="text-xs md:text-sm font-elegant tracking-[0.25em] text-[var(--accent-gold)] uppercase opacity-80">
              THE STORY OF BAEK JANGMI
            </span>
            <span className="h-[1px] w-8 bg-[var(--accent-gold)] opacity-40" />
          </div>
        </Reveal>

        {/* 헤드라인 */}
        <Reveal delayMs={150}>
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-elegant font-bold text-[#F5F5F5] mb-4 leading-snug">
              백도화의 철학을 만들어 가는 사람, 백장미
            </h2>
          </div>
        </Reveal>

        {/* 지침 공식 연결 문구 카드 */}
        <Reveal delayMs={200}>
          <div className="gungjung-glass max-w-4xl mx-auto p-8 sm:p-12 mb-16 text-center border border-[rgba(216,191,163,0.2)]">
            <p className="text-base sm:text-lg md:text-xl text-[#EDE6DA] opacity-90 leading-relaxed font-light mb-6">
              백도화는 인간의 기질과 마음, 사랑과 관계, 삶의 가능성에 대한 오랜 관심과 탐구에서 출발합니다.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-[#EDE6DA] opacity-90 leading-relaxed font-light mb-6">
              동양의 지혜와 마음공부, 인간의 심리와 무의식에 대한 이해를 연결하며, 자신을 보다 깊이 이해하고 주체적인 삶을 살아가는 방법을 연구합니다.
            </p>
            <div className="gold-divider max-w-xs mx-auto my-6 opacity-30" />
            <p className="text-lg sm:text-xl font-elegant font-medium text-[var(--accent-gold)] leading-relaxed">
              백장미는 이러한 연구와 탐구를 백도화의 콘텐츠, 전자책, 리포트에 담아 전합니다.
            </p>
          </div>
        </Reveal>

        {/* 기존 소개 페이지의 백도화 선언 & 자격/전문분야 (완전 보존) */}
        <div className="relative">
          <About />
        </div>
      </div>
    </section>
  )
}
