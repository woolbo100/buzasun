'use client'

import React from 'react'
import Reveal from '@/components/Reveal'
import BaekdohwaFlowerMark from '@/components/BaekdohwaFlowerMark'

export default function ManifestoSection() {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 relative w-full">
      <div className="max-w-[1280px] mx-auto w-full">
        {/* 영문 소제목 */}
        <Reveal delayMs={100}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-[1px] w-8 bg-[var(--accent-gold)] opacity-40" />
            <span className="text-[12px] font-elegant tracking-[0.25em] text-[var(--accent-gold)] uppercase opacity-80">
              BAEKDOHWA MANIFESTO
            </span>
            <span className="h-[1px] w-8 bg-[var(--accent-gold)] opacity-40" />
          </div>
        </Reveal>

        {/* 메인 선언문 카드 (1280px 기준선 정렬, 짙고 절제된 자주·버건디·먹보라 계열의 한지 질감 배경) */}
        <Reveal delayMs={200}>
          <div 
            className="relative w-full rounded-[24px] sm:rounded-3xl overflow-hidden border border-[rgba(216,191,163,0.22)] p-10 sm:p-16 md:p-24 text-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.06),0_20px_50px_rgba(0,0,0,0.7)]"
            style={{
              background: 'radial-gradient(ellipse at 50% 35%, #341223 0%, #240C28 42%, #15071D 72%, #0A030F 100%)',
            }}
          >
            {/* 한지 섬유결 미세 텍스처 레이어 (매트하고 유기적인 질감) */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-[0.045] mix-blend-color-dodge"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='hanjiNoise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23hanjiNoise)'/%3E%3C/svg%3E")`,
                backgroundRepeat: 'repeat',
              }}
            />

            {/* 부드러운 안개/먹 번짐 효과 오버레이 */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-30"
              style={{
                background: 'radial-gradient(circle at 50% 45%, rgba(95, 30, 50, 0.3) 0%, transparent 60%)',
              }}
            />

            {/* 은은한 배경 백도화 낙관 문양 */}
            <div className="absolute top-8 left-8 sm:top-12 sm:left-12 pointer-events-none opacity-15">
              <BaekdohwaFlowerMark size={48} outlineGold={true} />
            </div>
            <div className="absolute bottom-8 right-8 sm:bottom-12 sm:right-12 pointer-events-none opacity-15">
              <BaekdohwaFlowerMark size={48} outlineGold={true} />
            </div>

            {/* 선언문 헤드라인 */}
            <div className="mb-12 md:mb-14 relative z-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-elegant font-bold leading-tight text-[#FDFBF7]">
                <span className="text-[var(--accent-gold)]">숙명</span>은 주어지지만,<br />
                <span className="text-[var(--accent-gold)]">운명</span>은 선택하는 것이다.
              </h2>
            </div>

            <div className="w-16 h-[1px] bg-[var(--accent-gold)] opacity-40 mx-auto mb-12 relative z-10" />

            {/* 본문 선언문 구절들 (밝은 아이보리 계열 가독성 확보, 안정적인 간격) */}
            <div className="space-y-6 sm:space-y-7 text-[18px] text-[#F4EFE6] leading-[1.7] font-light max-w-2xl mx-auto break-keep relative z-10">
              <p>우리는 타고난 기질을 삶의 한계로 바라보지 않습니다.</p>
              <p>반복되는 상처를 피할 수 없는 운명으로 단정하지 않습니다.</p>
              <p>사랑받기 위해 자신을 잃어야 한다고 말하지 않습니다.</p>
              <p>풍요가 오직 타고난 팔자에 의해 결정된다고 믿지 않습니다.</p>

              <div className="py-4">
                <div className="w-8 h-[1px] bg-[rgba(216,191,163,0.25)] mx-auto" />
              </div>

              <p className="leading-[1.7]">
                자신을 깊이 이해하고,<br />
                익숙한 무의식의 패턴을 돌아보며,<br />
                새로운 선택을 하는 순간.
              </p>

              <p className="text-[18px] leading-[1.7] text-[var(--accent-gold-light)] font-normal pt-2 break-keep">
                우리는 삶의 방향을 다시 써 내려갈 수 있습니다.
              </p>
            </div>

            {/* 클라이맥스 핵심 문구 */}
            <div className="mt-16 pt-12 border-t border-[rgba(216,191,163,0.25)] relative z-10">
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-elegant font-bold text-[var(--accent-gold)] leading-snug tracking-wide">
                "당신은 운명의 관찰자가 아니라,<br />
                자신의 삶을 선택하는 사람입니다."
              </p>
              <p className="text-[13px] font-elegant text-[#EDE6DA] opacity-65 tracking-[0.3em] mt-8 uppercase">
                白桃花 · 백도화
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
