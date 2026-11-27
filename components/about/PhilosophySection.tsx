'use client'

import React from 'react'
import Image from 'next/image'
import Reveal from '@/components/Reveal'
import BaekdohwaFlowerMark from '@/components/BaekdohwaFlowerMark'

export default function PhilosophySection() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative w-full">
      <div className="max-w-[1280px] mx-auto w-full">
        {/* 섹션 상단 영문 소제목 */}
        <Reveal delayMs={100}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-[1px] w-8 bg-[var(--accent-gold)] opacity-40" />
            <span className="text-[12px] font-elegant tracking-[0.25em] text-[var(--accent-gold)] uppercase opacity-80">
              THE PHILOSOPHY OF BAEKDOHWA
            </span>
            <span className="h-[1px] w-8 bg-[var(--accent-gold)] opacity-40" />
          </div>
        </Reveal>

        {/* 3. 유지할 섹션 메인 제목 (브랜드 철학 대표 타이틀: 2줄 구성, 앤티크 샴페인 골드 강조) */}
        <Reveal delayMs={150}>
          <h2 className="text-2xl sm:text-4xl md:text-[44px] lg:text-[48px] font-elegant font-bold leading-tight sm:leading-snug mb-12 sm:mb-16 text-[#F5F5F5] break-keep text-center">
            <span className="text-[var(--accent-gold)] drop-shadow-[0_0_12px_rgba(212,178,167,0.3)]">숙명</span>은 주어지지만,<br />
            <span className="text-[var(--accent-gold)] drop-shadow-[0_0_12px_rgba(212,178,167,0.3)]">운명</span>은 <span className="text-[var(--accent-gold)] drop-shadow-[0_0_12px_rgba(212,178,167,0.3)]">선택</span>하는 것이다.
          </h2>
        </Reveal>

        {/* 4. 새로운 단일 통합 카드 (문제 제기 → 원인 설명 → 백도화의 해답) */}
        <Reveal delayMs={200}>
          <div className="gungjung-glass w-full p-8 sm:p-12 md:p-16 lg:p-20 text-center relative overflow-hidden rounded-[20px] border border-[rgba(216,191,163,0.22)]">
            {/* 은은한 배경 꽃 워터마크 */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.03]">
              <BaekdohwaFlowerMark size={420} watermark={true} />
            </div>

            {/* 4-1. 상단 라벨 (12px, 앤티크 샴페인 골드, 좌우 장식선, 중앙 정렬) */}
            <div className="flex items-center justify-center gap-3 mb-8">
              <span className="h-[1px] w-8 bg-[var(--accent-gold)] opacity-40" />
              <span className="text-[12px] font-elegant tracking-[0.25em] text-[var(--accent-gold)] uppercase opacity-85">
                BEYOND THE RULES · 선천코드의 원리
              </span>
              <span className="h-[1px] w-8 bg-[var(--accent-gold)] opacity-40" />
            </div>

            {/* 4-2. 메인 헤드카피 (42px 내외, 2줄, 줄간격 1.4, 사랑과 삶 은은한 포인트 컬러) */}
            <h3 className="text-2xl sm:text-3xl md:text-[38px] lg:text-[42px] font-elegant font-bold text-[#F5F5F5] leading-[1.4] mb-8 text-center break-keep">
              수많은 조언과 공식을 따라도,<br />
              왜 당신의 <span className="text-[var(--accent-gold)]">사랑</span>과 <span className="text-[var(--accent-gold)]">삶</span>은 달라지지 않습니까?
            </h3>

            {/* 4-3. 중간 본문 — 문제의 원인 (18px, 줄간격 1.7, 최대 너비 920px, 헤드카피와의 간격 32px) */}
            <div className="max-w-[920px] mx-auto text-[18px] leading-[1.7] text-[#EDE6DA] opacity-85 font-light text-center break-keep mb-10">
              <p>
                사람마다 타고난 기질도, 매력이 발현되는 방식도, 결핍을 채우는 구조도 전혀 다르기 때문입니다. 남들의 기준이나 획일화된 연애·성공 공식에 나를 억지로 끼워 맞출수록, 당신 고유의 힘은 흐려지고 같은 실패만 반복됩니다.
              </p>
            </div>

            {/* 얇고 은은한 황금 구분선 */}
            <div className="gold-divider max-w-xs mx-auto mb-10 opacity-30" />

            {/* 4-4. 하단 핵심 선언 — 백도화의 해답 (28~32px, 줄간격 1.5, 샴페인 골드 및 밝은 아이보리) */}
            <div className="max-w-[960px] mx-auto text-center space-y-2 sm:space-y-3 mb-8">
              <p className="text-xl sm:text-2xl md:text-[28px] lg:text-[30px] font-elegant font-bold text-[#F5F5F5] leading-[1.5] break-keep">
                타인의 공식을 배우기 전에, 당신의 <span className="text-[var(--accent-gold)]">선천코드</span>를 먼저 읽으십시오.
              </p>
              <p className="text-xl sm:text-2xl md:text-[28px] lg:text-[30px] font-elegant font-bold text-[var(--accent-gold)] leading-[1.5] break-keep">
                정해진 답을 쫓는 삶에서, 나를 기준으로 선택하는 주권자의 삶으로.
              </p>
            </div>

            {/* 4-5. 하단 낙관 (15px, 중앙 정렬, 간격 24~32px) */}
            <div className="pt-2 text-center">
              <span className="inline-block text-[15px] font-elegant tracking-[0.35em] text-[var(--accent-gold)] opacity-80 uppercase">
                白桃花 · 백도화
              </span>
            </div>
          </div>
        </Reveal>

        {/* 6. 권장안: 카드 외부의 독립된 16:9 와이드 이미지 (1280px 기준선 일치, 상단 간격 40~48px, 16px 라운딩) */}
        <Reveal delayMs={250} className="mt-10 md:mt-12">
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
