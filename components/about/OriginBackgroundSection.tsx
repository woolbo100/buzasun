'use client'

import React from 'react'
import Image from 'next/image'
import Reveal from '@/components/Reveal'

export default function OriginBackgroundSection() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative w-full">
      <div className="max-w-[1280px] mx-auto w-full">
        {/* 영문 소제목 */}
        <Reveal delayMs={100}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-[1px] w-8 bg-[var(--accent-gold)] opacity-40" />
            <span className="text-[12px] font-elegant font-semibold tracking-[0.25em] text-[var(--accent-gold)] uppercase opacity-90">
              WHY BAEKDOHWA EXISTS
            </span>
            <span className="h-[1px] w-8 bg-[var(--accent-gold)] opacity-40" />
          </div>
        </Reveal>

        {/* 헤드라인 (공통 line-height: 1.4 적용) */}
        <Reveal delayMs={150}>
          <h2 className="about-heading text-2xl sm:text-4xl md:text-5xl font-elegant font-bold text-center mb-16 text-[#F5F5F5]">
            운명을 묻는 사람에게, 자신을 이해하는 법을 전하다
          </h2>
        </Reveal>

        {/* 본문 카드 (1280px 기준선 정렬) */}
        <Reveal delayMs={200}>
          <div className="gungjung-glass w-full p-8 sm:p-12 md:p-16 pb-12 sm:pb-14 md:pb-16 space-y-8 text-[#EDE6DA] leading-[1.7] font-light">
            <div className="max-w-3xl mx-auto space-y-4 text-[18px] leading-[1.7] opacity-90 text-center sm:text-left break-keep">
              <p>
                사람들은 사랑이 힘들어질 때 상대의 마음을 알고 싶어 합니다.
              </p>
              <p>
                관계가 반복해서 어긋날 때는 자신의 운명을 묻고, 삶이 뜻대로 흘러가지 않을 때는 타고난 팔자를 궁금해합니다.
              </p>
            </div>

            {/* 핵심 질문 인용 상자 (톤다운된 딥 버건디 플럼 반투명 박스) */}
            <div className="card--burgundy max-w-3xl mx-auto my-8 p-6 sm:p-8 rounded-xl border-l-2 !border-l-[var(--accent-gold)]">
              <p className="text-[12px] tracking-widest text-[var(--accent-gold)] uppercase mb-2 font-elegant opacity-75">
                THE ESSENTIAL QUESTION
              </p>
              <p className="about-heading text-lg sm:text-xl md:text-2xl font-elegant font-semibold text-[#F5F5F5]">
                "나는 왜 이러한 감정을 느끼며,<br />
                왜 이러한 관계와 선택을 반복하는가?"
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-4 text-[18px] leading-[1.7] opacity-90 text-center sm:text-left break-keep">
              <p>
                명리학이 전하는 인간의 기질에 대한 관점과 마음공부, 심리, 무의식에 대한 탐구를 연결하여 자신을 보다 입체적으로 이해하는 방법을 전하고자 합니다.
              </p>
              <p>
                백도화는 미래를 단정하는 것보다 현재의 자신을 이해하고 앞으로의 선택을 주체적으로 만들어 가는 데 가치를 둡니다.
              </p>
            </div>

            {/* 본문 하단 핵심 카피 */}
            <div className="text-center pt-2">
              <p className="text-xl sm:text-2xl font-elegant font-semibold text-[var(--accent-gold)] leading-relaxed tracking-wide">
                정해진 운명의 답을 넘어,<br className="sm:hidden" />{' '}
                스스로를 읽는 여정의 시작.
              </p>
            </div>
          </div>
        </Reveal>

        {/* 독립된 와이드 이미지 영역 (1280px 기준선 일치, 16:9 비율, 16px 라운딩) */}
        <Reveal delayMs={250} className="mt-6 md:mt-11">
          <div className="relative aspect-[16/9] w-full rounded-[16px] overflow-hidden">
            <Image
              src="/image/wisdom-within.webp"
              alt="동양의 지혜와 내면의 자기성찰을 상징하는 고서와 청동 거울, 백색 도화"
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
