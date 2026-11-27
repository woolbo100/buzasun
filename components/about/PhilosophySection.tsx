'use client'

import React from 'react'
import Image from 'next/image'
import Reveal from '@/components/Reveal'
import BaekdohwaFlowerMark from '@/components/BaekdohwaFlowerMark'

export default function PhilosophySection() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative w-full">
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

        {/* 메인 철학 카드 (1280px 기준선 정렬) */}
        <Reveal delayMs={200}>
          <div className="gungjung-glass w-full p-8 sm:p-12 md:p-16 lg:p-20 pb-12 sm:pb-14 md:pb-16 lg:pb-16 text-center relative overflow-hidden">
            {/* 배경 은은한 꽃 워터마크 */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.03]">
              <BaekdohwaFlowerMark size={400} watermark={true} />
            </div>

            {/* 메인 헤드라인 (모두에게 같은 연애 공식 영역과 크기 및 줄간격 기준 통일 + 명시적 2줄 줄바꿈 적용) */}
            <h2 className="text-2xl sm:text-4xl md:text-[44px] lg:text-[48px] font-elegant font-bold leading-tight sm:leading-snug mb-8 text-[#F5F5F5] break-keep text-center">
              <span className="text-[var(--accent-gold)] drop-shadow-[0_0_12px_rgba(212,178,167,0.3)]">숙명</span>은 주어지지만,<br />
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

            <div className="mt-10 pt-4">
              <p className="text-xl sm:text-2xl md:text-3xl font-elegant font-semibold text-[var(--accent-gold)] tracking-wide">
                나를 읽고, 사랑의 방향을 다시 쓰다.
              </p>
            </div>
          </div>
        </Reveal>

        {/* 독립된 와이드 이미지 영역 (1280px 기준선 일치, 16:9 비율, 16px 라운딩) */}
        <Reveal delayMs={250} className="mt-6 md:mt-11">
          <div className="relative aspect-[16/9] w-full rounded-[16px] overflow-hidden">
            <Image
              src="/image/author-of-your-destiny.webp"
              alt="고풍스러운 한옥 서재에서 자신의 운명을 직접 써 내려가는 여성"
              fill
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
