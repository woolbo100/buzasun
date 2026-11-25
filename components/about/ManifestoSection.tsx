'use client'

import React from 'react'
import Reveal from '@/components/Reveal'
import BaekdohwaFlowerMark from '@/components/BaekdohwaFlowerMark'

export default function ManifestoSection() {
  return (
    <section className="py-24 md:py-36 px-4 sm:px-6 relative">
      <div className="max-w-[1280px] mx-auto w-full">
        {/* 영문 소제목 */}
        <Reveal delayMs={100}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-[1px] w-8 bg-[var(--accent-gold)] opacity-40" />
            <span className="text-xs md:text-sm font-elegant tracking-[0.25em] text-[var(--accent-gold)] uppercase opacity-80">
              BAEKDOHWA MANIFESTO
            </span>
            <span className="h-[1px] w-8 bg-[var(--accent-gold)] opacity-40" />
          </div>
        </Reveal>

        {/* 메인 선언문 카드 (깊은 먹자색/흑자색 + 앤티크 샴페인 골드 얇은 금박 테두리) */}
        <Reveal delayMs={200}>
          <div className="relative max-w-4xl mx-auto rounded-3xl overflow-hidden border border-[rgba(216,191,163,0.3)] bg-gradient-to-b from-[#180A22] via-[#100619] to-[#0A0410] p-10 sm:p-16 md:p-24 text-center shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
            {/* 은은한 배경 문양 */}
            <div className="absolute top-10 left-10 pointer-events-none opacity-20">
              <BaekdohwaFlowerMark size={48} outlineGold={true} />
            </div>
            <div className="absolute bottom-10 right-10 pointer-events-none opacity-20">
              <BaekdohwaFlowerMark size={48} outlineGold={true} />
            </div>

            {/* 선언문 헤드라인 */}
            <div className="mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-elegant font-bold leading-tight text-[#F5F5F5]">
                <span className="text-[var(--accent-gold)]">숙명</span>은 주어지지만,<br />
                <span className="text-[var(--accent-gold)]">운명</span>은 선택하는 것이다.
              </h2>
            </div>

            <div className="w-16 h-[1px] bg-[var(--accent-gold)] opacity-40 mx-auto mb-12" />

            {/* 본문 선언문 구절들 */}
            <div className="space-y-6 sm:space-y-8 text-base sm:text-lg md:text-xl text-[#EDE6DA] leading-loose font-light opacity-90 max-w-2xl mx-auto">
              <p>우리는 타고난 기질을 삶의 한계로 바라보지 않습니다.</p>
              <p>반복되는 상처를 피할 수 없는 운명으로 단정하지 않습니다.</p>
              <p>사랑받기 위해 자신을 잃어야 한다고 말하지 않습니다.</p>
              <p>풍요가 오직 타고난 팔자에 의해 결정된다고 믿지 않습니다.</p>

              <div className="py-4">
                <div className="w-8 h-[1px] bg-[rgba(216,191,163,0.2)] mx-auto" />
              </div>

              <p className="leading-relaxed">
                자신을 깊이 이해하고,<br />
                익숙한 무의식의 패턴을 돌아보며,<br />
                새로운 선택을 하는 순간.
              </p>

              <p className="text-lg sm:text-xl text-[var(--accent-gold-light)] font-normal pt-2">
                우리는 삶의 방향을 다시 써 내려갈 수 있습니다.
              </p>
            </div>

            {/* 클라이맥스 핵심 문구 */}
            <div className="mt-16 pt-10 border-t border-[rgba(216,191,163,0.25)]">
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-elegant font-bold text-[var(--accent-gold)] leading-snug tracking-wide">
                "당신은 운명의 관찰자가 아니라,<br />
                자신의 삶을 선택하는 사람입니다."
              </p>
              <p className="text-sm sm:text-base font-elegant text-[#EDE6DA] opacity-60 tracking-[0.3em] mt-8 uppercase">
                白桃花 · 백도화
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
