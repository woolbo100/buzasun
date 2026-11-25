'use client'

import React from 'react'
import Reveal from '@/components/Reveal'
import BaekdohwaFlowerMark from '@/components/BaekdohwaFlowerMark'

export default function BeyondRulesSection() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative w-full">
      <div className="max-w-[1280px] mx-auto w-full">
        {/* 영문 소제목 */}
        <Reveal delayMs={100}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-[1px] w-8 bg-[var(--accent-gold)] opacity-40" />
            <span className="text-xs md:text-sm font-elegant tracking-[0.25em] text-[var(--accent-gold)] uppercase opacity-80">
              BEYOND THE RULES OF LOVE
            </span>
            <span className="h-[1px] w-8 bg-[var(--accent-gold)] opacity-40" />
          </div>
        </Reveal>

        {/* 1280px 독립적인 브랜드 차별화 메시지 카드 */}
        <Reveal delayMs={200}>
          <div className="gungjung-glass w-full p-10 sm:p-16 md:p-20 lg:p-24 text-center relative overflow-hidden rounded-3xl border border-[rgba(216,191,163,0.25)] bg-gradient-to-b from-[#180A22] via-[#12071B] to-[#0C0514] shadow-[0_20px_60px_rgba(0,0,0,0.7)]">
            {/* 추후 16:9 브랜드 이미지 오버레이 적용 슬롯 레이어 */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] flex items-center justify-center">
              <BaekdohwaFlowerMark size={480} watermark={true} />
            </div>

            {/* 메인 제목 (PC 기준 42~48px 품격 있는 명조 계열 - 핵심 차별화 메시지 유지) */}
            <h2 className="text-2xl sm:text-4xl md:text-[44px] lg:text-[48px] font-elegant font-bold leading-tight sm:leading-snug mb-8 text-[#F5F5F5]">
              모두에게 <span className="text-[var(--accent-gold)] drop-shadow-[0_0_12px_rgba(212,178,167,0.3)]">같은 연애 공식</span>이<br className="hidden sm:inline" />{' '}
              통할 수는 없습니다.
            </h2>

            {/* 얇고 은은한 골드 구분선 */}
            <div className="gold-divider max-w-xs mx-auto my-8 opacity-40" />

            {/* 백도화의 접근 방식 선언 (신규 도입부와의 중복 설명을 정돈하고 접근 방식 선언 역할로 전환) */}
            <div className="max-w-2xl mx-auto space-y-4 text-[#EDE6DA] text-base sm:text-lg md:text-xl font-light leading-relaxed opacity-85 mb-10">
              <p>
                남들의 기준이나 획일화된 조언에 나를 맞추는 것이 아니라,<br className="hidden sm:inline" />{' '}
                나의 고유한 기질을 기준으로 관계의 주체성을 회복하는 길.
              </p>
              <p className="text-sm sm:text-base text-[#A89BBF] opacity-80">
                백도화가 제안하는 사랑과 관계의 새로운 접근법입니다.
              </p>
            </div>

            {/* 백도화 선언 강조 문구 */}
            <div className="pt-2">
              <p className="text-xl sm:text-2xl md:text-[28px] font-elegant font-semibold text-[var(--accent-gold)] leading-relaxed tracking-wide">
                정해진 답을 따르는 연애에서, 나를 기준으로 선택하는 사랑으로.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
