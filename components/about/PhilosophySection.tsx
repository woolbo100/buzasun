'use client'

import React from 'react'
import Reveal from '@/components/Reveal'
import BaekdohwaFlowerMark from '@/components/BaekdohwaFlowerMark'

export default function PhilosophySection() {
  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 relative">
      <div className="max-w-[1280px] mx-auto w-full">
        {/* 영문 소제목 */}
        <Reveal delayMs={100}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-[1px] w-8 bg-[var(--accent-gold)] opacity-40" />
            <span className="text-xs md:text-sm font-elegant tracking-[0.25em] text-[var(--accent-gold)] uppercase opacity-80">
              THE PHILOSOPHY OF BAEKDOHWA
            </span>
            <span className="h-[1px] w-8 bg-[var(--accent-gold)] opacity-40" />
          </div>
        </Reveal>

        {/* 메인 철학 카드 */}
        <Reveal delayMs={200}>
          <div className="gungjung-glass p-8 sm:p-12 md:p-16 lg:p-20 text-center relative overflow-hidden">
            {/* 배경 은은한 꽃 워터마크 */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.03]">
              <BaekdohwaFlowerMark size={400} watermark={true} />
            </div>

            {/* 메인 헤드라인 */}
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-elegant font-bold leading-tight mb-8 text-[#F5F5F5]">
              <span className="text-[var(--accent-gold)] drop-shadow-[0_0_12px_rgba(212,178,167,0.3)]">숙명</span>은 주어지지만,<br className="sm:hidden" />{' '}
              <span className="text-[var(--accent-gold)] drop-shadow-[0_0_12px_rgba(212,178,167,0.3)]">운명</span>은 <span className="text-[var(--accent-gold)] drop-shadow-[0_0_12px_rgba(212,178,167,0.3)]">선택</span>하는 것이다.
            </h2>

            <div className="gold-divider max-w-xs mx-auto mb-10 opacity-40" />

            {/* 본문 설명 */}
            <div className="max-w-3xl mx-auto space-y-6 text-[#EDE6DA] text-base sm:text-lg md:text-xl font-light leading-relaxed opacity-90">
              <p>
                우리는 태어날 때 각기 다른 기질과 성향을 가지고 태어납니다.
              </p>
              <p>
                그러나 그것이 삶의 결말까지 결정하는 것은 아닙니다.
              </p>
              <p>
                타고난 나를 이해하고, 반복되는 무의식의 패턴을 발견하며, 새로운 선택을 하는 순간 우리는 삶의 방향을 다시 써 내려갈 수 있습니다.
              </p>
              <p className="pt-2">
                백도화는 정해진 운명을 알려주는 데 머무르지 않습니다.
              </p>
              <p>
                자신을 이해하고, 사랑과 관계 속에서 주체성을 되찾으며, 자신만의 삶을 선택할 수 있도록 돕는 자기이해의 여정을 함께합니다.
              </p>
            </div>

            <div className="mt-10 pt-6">
              <p className="text-xl sm:text-2xl md:text-3xl font-elegant font-semibold text-[var(--accent-gold)] tracking-wide">
                나를 읽고, 사랑의 방향을 다시 쓰다.
              </p>
            </div>

            {/* 가로형 16:9 브랜드 철학 이미지 슬롯 */}
            <div className="mt-14 max-w-3xl mx-auto">
              <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-[rgba(216,191,163,0.18)] bg-[rgba(26,15,46,0.35)] flex flex-col items-center justify-center p-6 text-center shadow-inner">
                <BaekdohwaFlowerMark size={56} outlineGold={true} className="mb-4 opacity-70" />
                <p className="text-xs sm:text-sm text-[var(--accent-gold)] font-elegant tracking-widest uppercase mb-1">
                  Brand Philosophy Visual Slot
                </p>
                <p className="text-xs text-[#EDE6DA] opacity-60">
                  고풍스러운 철학서의 첫 장처럼 깊이 있는 사색을 담는 비주얼 영역 (16:9)
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
