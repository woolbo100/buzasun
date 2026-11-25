'use client'

import React from 'react'
import Reveal from '@/components/Reveal'
import BaekdohwaFlowerMark from '@/components/BaekdohwaFlowerMark'

export default function NameMeaningSection() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative w-full">
      <div className="max-w-[1280px] mx-auto w-full">
        {/* 영문 소제목 (중앙 정렬 유지) */}
        <Reveal delayMs={100}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-[1px] w-8 bg-[var(--accent-gold)] opacity-40" />
            <span className="text-xs md:text-sm font-elegant tracking-[0.25em] text-[var(--accent-gold)] uppercase opacity-80">
              THE MEANING OF BAEKDOHWA
            </span>
            <span className="h-[1px] w-8 bg-[var(--accent-gold)] opacity-40" />
          </div>
        </Reveal>

        {/* 메인 타이틀 (중앙 정렬 유지) */}
        <Reveal delayMs={150}>
          <div className="text-center mb-16">
            <span className="text-lg sm:text-xl font-elegant tracking-widest text-[var(--accent-gold)] block mb-2 opacity-80">
              白桃花
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-elegant font-bold text-[#F5F5F5] leading-snug">
              자신만의 아름다움으로 피어나는 삶
            </h2>
          </div>
        </Reveal>

        {/* =========================================================================
            좌우 2열 에디토리얼 레이아웃 (왼쪽 45% 이미지, 오른쪽 55% 글상자, 간격 32~40px)
            모바일 순서: 제목 → 이미지 → 글상자
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-[45fr_55fr] gap-8 lg:gap-10 items-stretch w-full">
          {/* 1. 왼쪽 45%: 신규 이미지 삽입 영역 (3:4 세로형 이미지 슬롯, 글상자와 상하 기준선 일치) */}
          <div className="w-full flex justify-center">
            <Reveal delayMs={200} className="w-full h-full">
              <div className="w-full h-full min-h-[380px] sm:min-h-[460px] lg:min-h-full aspect-[3/4] lg:aspect-auto rounded-[20px] overflow-hidden border border-[rgba(216,191,163,0.22)] bg-[rgba(26,15,35,0.4)] relative flex flex-col items-center justify-center p-8 text-center shadow-[0_12px_40px_rgba(0,0,0,0.5)]">
                {/* 배경 은은한 도화 워터마크 (과도한 발광 없이 단아한 절제미 유지) */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.04] flex items-center justify-center">
                  <BaekdohwaFlowerMark size={320} watermark={true} />
                </div>

                {/* 앤티크 프레임 라인 (글상자와 조화로운 얇은 골드 내측 라인) */}
                <div className="absolute inset-4 sm:inset-5 border border-[rgba(216,191,163,0.15)] rounded-[14px] pointer-events-none flex flex-col justify-between p-6">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] sm:text-xs tracking-widest text-[var(--accent-gold)] uppercase opacity-75 font-elegant">
                      BAEKDOHWA IDENTITY
                    </span>
                    <BaekdohwaFlowerMark size={28} outlineGold={true} className="opacity-75" />
                  </div>

                  <div className="text-left">
                    <span className="text-xl sm:text-2xl font-elegant text-[#F5F5F5] block font-bold mb-1">
                      白桃花
                    </span>
                    <p className="text-xs text-[var(--accent-gold)] opacity-70 font-light">
                      고유한 빛과 기질을 피워내는 도화의 상징
                    </p>
                  </div>
                </div>

                {/* 중앙 안내 및 추후 이미지 교체 슬롯 */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[rgba(212,178,167,0.08)] border border-[rgba(212,178,167,0.2)] flex items-center justify-center mb-4">
                    <BaekdohwaFlowerMark size={36} outlineGold={true} className="opacity-80" />
                  </div>
                  <span className="text-xs sm:text-sm font-elegant tracking-[0.2em] text-[var(--accent-gold)] uppercase block mb-1 opacity-85">
                    Brand Visual Slot
                  </span>
                  <p className="text-xs text-[#EDE6DA] opacity-60 font-light">
                    3:4 세로형 백도화 브랜드 이미지 영역
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* 2. 오른쪽 55%: 기존 글상자 (기존 내용, 글자 크기, 강조, 배경 100% 보존 + keep-all 적용) */}
          <div className="w-full">
            <Reveal delayMs={280} className="w-full h-full">
              <div className="gungjung-glass w-full h-full p-8 sm:p-12 md:p-14 space-y-6 text-[#EDE6DA] leading-relaxed font-light break-keep flex flex-col justify-between">
                <div className="space-y-6">
                  <p className="text-base sm:text-lg md:text-xl font-normal text-[var(--accent-gold)] opacity-95">
                    백도화에서 도화(桃花)는 단순히 누군가의 마음을 얻기 위한 매력만을 의미하지 않습니다.
                  </p>
                  <p className="text-base sm:text-lg opacity-85">
                    자신의 고유한 기질과 아름다움을 발견하고, 내면의 생명력과 존재감을 피워내는 상징입니다.
                  </p>
                  <div className="gold-divider opacity-25 my-6" />
                  <p className="text-base sm:text-lg opacity-85">
                    진정한 매력은 누군가에게 선택받기 위해 자신을 바꾸는 것에서 시작되지 않습니다.
                  </p>
                  <p className="text-base sm:text-lg opacity-85">
                    자신이 어떤 사람인지 이해하고, 자신의 가치를 인정하며, 자신만의 빛으로 살아가는 데서 시작됩니다.
                  </p>
                  <p className="text-base sm:text-lg opacity-85">
                    백도화는 사랑을 통해 자신을 잃는 것이 아니라, 사랑을 통해 자신을 더욱 깊이 발견하는 삶을 지향합니다.
                  </p>
                </div>

                {/* 마지막 핵심 카피 (기존 강조 효과 100% 유지) */}
                <div className="pt-6 border-t border-[rgba(216,191,163,0.2)] mt-auto">
                  <p className="text-lg sm:text-xl md:text-2xl font-elegant font-semibold text-[var(--accent-gold)] leading-relaxed">
                    누군가에게 선택받기 위한 아름다움이 아닌,<br />
                    스스로 피어나는 존재의 아름다움.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
