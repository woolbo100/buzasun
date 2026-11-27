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
            <span className="text-[12pt] font-elegant font-semibold tracking-[0.25em] text-[var(--accent-gold)] uppercase opacity-90">
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
            <h2 className="text-2xl sm:text-4xl md:text-[44px] lg:text-[48px] font-elegant font-bold leading-[1.5] mb-8 text-[#F5F5F5] break-keep text-center">
              <span className="text-[var(--accent-gold)] drop-shadow-[0_0_12px_rgba(212,178,167,0.3)]">숙명</span>은 주어지지만,<br />
              <span className="text-[var(--accent-gold)] drop-shadow-[0_0_12px_rgba(212,178,167,0.3)]">운명</span>은 <span className="text-[var(--accent-gold)] drop-shadow-[0_0_12px_rgba(212,178,167,0.3)]">선택</span>하는 것이다.
            </h2>

            <div className="gold-divider max-w-xs mx-auto mb-10 opacity-40" />

            {/* 본문 설명 (최대 너비 900px, 18px, 줄간격 1.7, 문단 간격 28~32px, 중앙 정렬, 단어 단위 줄바꿈) */}
            <div className="max-w-[900px] mx-auto space-y-7 md:space-y-8 text-[#EDE6DA] text-[18px] font-light leading-[1.7] opacity-90 break-keep">
              <p>
                사람들은 흔히 타고난 사주와 기질을 바꿀 수 없는 숙명이라 말합니다. 하지만 태어날 때 부여받은 결이 삶의 결말까지 결정하는 것은 아닙니다.
              </p>
              <p>
                같은 유형의 사람에게 끌려 상처받고, 결정적인 순간마다 같은 자리에서 무너지는 데는 분명한 이유가 있습니다. 감정의 위로는 잠시뿐, 반복되는 무의식의 패턴을 해독하지 못하면 내일도 어제의 연장선일 뿐입니다.
              </p>
              <p>
                <strong className="font-semibold text-[var(--accent-gold)]">백도화(白桃花)는 정해진 운명을 점치는 곳이 아닙니다.</strong> 하얀 복숭아꽃이 바람에 흔들리지 않고 제 계절에 가장 고고하게 피어나듯, 당신 안에 잠든 고유한 <strong className="font-semibold text-[var(--accent-gold)]">선천코드</strong>와 <strong className="font-semibold text-[var(--accent-gold)]">무의식 패턴</strong>을 읽어내어 사랑과 결핍의 판을 스스로 통제하고 재설계하도록 돕는 &apos;각성과 주권의 공간&apos;입니다.
              </p>
            </div>
          </div>
        </Reveal>

        {/* 하단 브랜드 슬로건 (투명 카드 외부와 와이드 이미지 사이 브릿지 배치: 카드 하단 간격 48px, 이미지 상단 간격 32px) */}
        <Reveal delayMs={250} className="mt-12 text-center">
          <p className="text-xl sm:text-2xl md:text-3xl font-elegant font-semibold text-[var(--accent-gold)] tracking-wide break-keep">
            나를 읽고, 사랑과 풍요의 방향을 다시 쓰다.
          </p>
        </Reveal>

        {/* 독립된 와이드 이미지 영역 (1280px 기준선 일치, 16:9 비율, 16px 라운딩, 상단 슬로건과의 간격 32px) */}
        <Reveal delayMs={300} className="mt-8">
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
