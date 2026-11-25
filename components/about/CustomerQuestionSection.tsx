'use client'

import React from 'react'
import Reveal from '@/components/Reveal'
import BaekdohwaFlowerMark from '@/components/BaekdohwaFlowerMark'

export default function CustomerQuestionSection() {
  return (
    <section className="py-20 md:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 relative w-full">
      <div className="max-w-[1280px] mx-auto w-full">
        {/* 독립적인 브랜드 메시지 영역 (1280px 기준선 정렬, 품격 있는 궁중유리 프레임) */}
        <Reveal delayMs={150}>
          <div className="gungjung-glass w-full p-10 sm:p-16 md:p-20 lg:p-24 text-center relative overflow-hidden rounded-3xl border border-[rgba(216,191,163,0.22)] bg-gradient-to-b from-[#180A22] via-[#14081E] to-[#0D0515] shadow-[0_20px_60px_rgba(0,0,0,0.7)]">
            {/* 은은한 백도화 꽃 워터마크 배경 (추후 브랜드 이미지 확장 가능 레이어) */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.035] flex items-center justify-center">
              <BaekdohwaFlowerMark size={480} watermark={true} />
            </div>

            {/* 메인 헤드라인 (PC 기준 42~48px 품격 있는 명조 계열) */}
            <div className="relative z-10 max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl md:text-[44px] lg:text-[48px] font-elegant font-bold leading-tight sm:leading-snug mb-8 text-[#F5F5F5] tracking-tight">
                수많은 연애 조언을 들어도,<br />
                <span className="text-[#F5F5F5] underline decoration-[rgba(212,178,167,0.4)] decoration-1 underline-offset-8">
                  왜 나의 사랑은 달라지지 않을까요?
                </span>
              </h2>

              {/* 얇고 은은한 골드 구분선 */}
              <div className="gold-divider max-w-xs mx-auto my-8 opacity-40" />

              {/* 서브카피 (20px 전후, 가독성 높은 폰트와 넉넉한 자간) */}
              <p className="text-base sm:text-lg md:text-[20px] font-light text-[#EDE6DA] leading-relaxed opacity-90 max-w-2xl mx-auto">
                사람마다 기질도, 매력도,<br className="sm:hidden" />{' '}
                사랑에 끌리는 이유도 다르기 때문입니다.
              </p>

              {/* 하단 여백 및 얇은 장식점 */}
              <div className="my-10 flex items-center justify-center gap-2 opacity-30">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-gold)]" />
                <span className="w-8 h-[1px] bg-[var(--accent-gold)]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-gold)]" />
              </div>

              {/* 핵심 강조 메시지 (32~36px 기준, 선천코드 앤티크 샴페인 골드 강조) */}
              <div className="space-y-4">
                <p className="text-2xl sm:text-3xl md:text-[34px] font-elegant font-bold leading-relaxed text-[#F5F5F5] tracking-wide">
                  사랑의 공식을 배우기 전에,<br />
                  <span className="text-[var(--accent-gold)] drop-shadow-[0_0_12px_rgba(212,178,167,0.3)]">
                    당신의 선천코드
                  </span>
                  를 읽으십시오.
                </p>

                {/* 백도화 브랜드 한자·한글 낙관 */}
                <div className="pt-4">
                  <span className="inline-block text-xs sm:text-sm font-elegant tracking-[0.35em] text-[var(--accent-gold)] opacity-75 uppercase">
                    白桃花 · 백도화
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
