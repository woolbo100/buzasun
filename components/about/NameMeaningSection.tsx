'use client'

import React from 'react'
import Image from 'next/image'
import Reveal from '@/components/Reveal'

export default function NameMeaningSection() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative w-full">
      <div className="max-w-[1280px] mx-auto w-full">
        {/* 영문 소제목 (중앙 정렬 유지) */}
        <Reveal delayMs={100}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-[1px] w-8 bg-[var(--accent-gold)] opacity-40" />
            <span className="text-[12pt] font-elegant font-semibold tracking-[0.25em] text-[var(--accent-gold)] uppercase opacity-90">
              THE MEANING OF BAEKDOHWA
            </span>
            <span className="h-[1px] w-8 bg-[var(--accent-gold)] opacity-40" />
          </div>
        </Reveal>

        {/* 메인 타이틀 (중앙 정렬 유지, 공통 line-height: 1.4 적용) */}
        <Reveal delayMs={150}>
          <div className="text-center mb-16">
            <span className="text-lg sm:text-xl font-elegant tracking-widest text-[var(--accent-gold)] block mb-2 opacity-80">
              白桃花
            </span>
            <h2 className="about-heading text-2xl sm:text-4xl md:text-5xl font-elegant font-bold text-[#F5F5F5]">
              자신만의 아름다움으로 피어나는 삶
            </h2>
          </div>
        </Reveal>

        {/* =========================================================================
            좌우 2열 레이아웃 (왼쪽 45% 신규 이미지, 오른쪽 55% 기존 글상자, 간격 32~40px)
            모바일 순서: 제목 → 이미지 → 글상자
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-[45fr_55fr] gap-8 lg:gap-10 items-center w-full">
          {/* 1. 왼쪽 45%: 신규 이미지 (3:4 비율 유지, 오버레이/텍스트 없이 원본 색감 유지) */}
          <div className="w-full flex justify-center">
            <Reveal delayMs={200} className="w-full">
              <div className="relative w-full aspect-[3/4] rounded-[20px] overflow-hidden border border-[rgba(216,191,163,0.2)] shadow-[0_8px_32px_rgba(0,0,0,0.35)]">
                <Image
                  src="/image/bloom-in-your-own-light.webp"
                  alt="백색 도화와 함께 자신만의 아름다움으로 피어나는 여성"
                  fill
                  sizes="(max-width: 1024px) 100vw, 550px"
                  className="object-cover"
                  priority
                />
              </div>
            </Reveal>
          </div>

          {/* 2. 오른쪽 55%: 기존 글상자 (기존 내용, 글자 크기, 강조, 배경 100% 보존 + keep-all 적용) */}
          <div className="w-full">
            <Reveal delayMs={280} className="w-full">
              <div className="gungjung-glass w-full p-8 sm:p-12 md:p-14 space-y-6 text-[#EDE6DA] leading-[1.7] font-light break-keep flex flex-col justify-between">
                <div className="space-y-6">
                  <p className="text-[18px] leading-[1.7] font-normal text-[var(--accent-gold)] opacity-95 break-keep">
                    백도화에서 도화(桃花)는 단순히 누군가의 마음을 얻기 위한 매력만을 의미하지 않습니다.
                  </p>
                  <p className="text-[18px] leading-[1.7] opacity-85 break-keep">
                    자신의 고유한 기질과 아름다움을 발견하고, 내면의 생명력과 존재감을 피워내는 상징입니다.
                  </p>
                  <div className="gold-divider opacity-25 my-6" />
                  <p className="text-[18px] leading-[1.7] opacity-85 break-keep">
                    진정한 매력은 누군가에게 선택받기 위해 자신을 바꾸는 것에서 시작되지 않습니다.
                  </p>
                  <p className="text-[18px] leading-[1.7] opacity-85 break-keep">
                    자신이 어떤 사람인지 이해하고, 자신의 가치를 인정하며, 자신만의 빛으로 살아가는 데서 시작됩니다.
                  </p>
                  <p className="text-[18px] leading-[1.7] opacity-85 break-keep">
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
