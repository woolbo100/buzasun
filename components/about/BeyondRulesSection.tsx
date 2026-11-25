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

            {/* 메인 제목 (PC 기준 42~48px 품격 있는 명조 계열) */}
            <h2 className="text-2xl sm:text-4xl md:text-[44px] lg:text-[48px] font-elegant font-bold leading-tight sm:leading-snug mb-8 text-[#F5F5F5]">
              모두에게 <span className="text-[var(--accent-gold)] drop-shadow-[0_0_12px_rgba(212,178,167,0.3)]">같은 연애 공식</span>이<br className="hidden sm:inline" />{' '}
              통할 수는 없습니다.
            </h2>

            {/* 얇고 은은한 골드 구분선 */}
            <div className="gold-divider max-w-xs mx-auto my-8 opacity-40" />

            {/* 설명 문구 */}
            <div className="max-w-2xl mx-auto space-y-2 text-[#EDE6DA] text-base sm:text-lg md:text-xl font-light leading-relaxed opacity-85 mb-10">
              <p>
                타고난 기질도, 매력도,<br className="sm:hidden" />{' '}
                사랑에 끌리는 이유도 다르니까요.
              </p>
            </div>

            {/* 마지막 핵심 문구 (28~32px 기준, 매트 샴페인 골드) */}
            <div className="pt-2">
              <p className="text-xl sm:text-2xl md:text-[30px] font-elegant font-bold text-[#F5F5F5] leading-relaxed tracking-wide">
                연애의 기술보다 먼저,<br className="sm:hidden" />{' '}
                <span className="text-[var(--accent-gold)] drop-shadow-[0_0_10px_rgba(212,178,167,0.25)]">당신의 선천코드</span>를 읽으십시오.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
