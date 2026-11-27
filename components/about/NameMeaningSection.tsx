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
            좌우 2열 레이아웃 (왼쪽 45% 신규 이미지, 오른쪽 55% 글상자, PC 높이 일치)
            모바일 순서: 제목 → 이미지 → 글상자
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-[45fr_55fr] gap-8 lg:gap-10 items-start lg:items-stretch w-full">
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

          {/* 2. 오른쪽 55%: 글상자 (PC 세로 높이 왼쪽 이미지와 일치, 텍스트 세로 중앙 정렬) */}
          <div className="w-full lg:h-full flex flex-col">
            <Reveal delayMs={280} className="w-full lg:h-full flex flex-col flex-1">
              <div className="gungjung-glass w-full lg:h-full flex-1 p-8 sm:p-10 md:p-12 text-[#EDE6DA] leading-[1.7] font-light break-keep flex flex-col justify-center">
                <div className="space-y-5">
                  <div className="space-y-4">
                    {/* 신규 추가: 브랜드명 탄생 의미 */}
                    <p className="text-[18px] leading-[1.7] opacity-85 break-keep">
                      <span className="whitespace-nowrap">백도화(白桃花)</span>는 순백을 상징하는 <span className="whitespace-nowrap">백(白)</span>에<br className="hidden sm:inline" />{' '}
                      매력과 인연을 상징하는 <span className="whitespace-nowrap">도화(桃花)</span>를 더한 이름입니다.
                    </p>
                    <p className="text-[18px] leading-[1.7] opacity-85 break-keep">
                      <strong className="font-semibold text-[var(--accent-gold)]">
                        청초하면서도 단단하고, 우아하면서도 고고한<br className="hidden sm:inline" />{' '}
                        하얀 복숭아꽃의 기품
                      </strong>을 담았습니다.
                    </p>

                    <div className="gold-divider opacity-25 my-4" />

                    <p className="text-[18px] leading-[1.7] font-normal text-[var(--accent-gold)] opacity-95 break-keep">
                      백도화에서 <span className="whitespace-nowrap">도화(桃花)</span>는 단순히 누군가의 마음을 얻기 위한<br className="hidden sm:inline" />{' '}
                      매력만을 의미하지 않습니다.
                    </p>
                    <p className="text-[18px] leading-[1.7] opacity-85 break-keep">
                      자신의 고유한 기질과 아름다움을 발견하고,<br className="hidden sm:inline" />{' '}
                      내면의 생명력과 존재감을 피워내는 상징입니다.
                    </p>
                    <p className="text-[18px] leading-[1.7] opacity-85 break-keep">
                      진정한 매력은 누군가에게 선택받기 위해<br className="hidden sm:inline" />{' '}
                      자신을 바꾸는 것에서 시작되지 않습니다.
                    </p>
                    <p className="text-[18px] leading-[1.7] opacity-85 break-keep">
                      자신이 어떤 사람인지 이해하고, 자신의 가치를 인정하며,<br className="hidden sm:inline" />{' '}
                      자신만의 빛으로 살아가는 데서 시작됩니다.
                    </p>
                    <p className="text-[18px] leading-[1.7] opacity-85 break-keep">
                      백도화는 사랑을 통해 자신을 잃는 것이 아니라,<br className="hidden sm:inline" />{' '}
                      사랑을 통해 자신을 더욱 깊이 발견하는 삶을 지향합니다.
                    </p>
                  </div>

                  {/* 마지막 핵심 카피 (기존 강조 효과 100% 유지) */}
                  <div className="pt-5 border-t border-[rgba(216,191,163,0.2)]">
                    <p className="text-lg sm:text-xl md:text-2xl font-elegant font-semibold text-[var(--accent-gold)] leading-relaxed">
                      누군가에게 선택받기 위한 아름다움이 아닌,<br />
                      스스로 피어나는 존재의 아름다움
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
