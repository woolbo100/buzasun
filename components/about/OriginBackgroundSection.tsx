'use client'

import React from 'react'
import Image from 'next/image'
import Reveal from '@/components/Reveal'
import BaekdohwaFlowerMark from '@/components/BaekdohwaFlowerMark'

export default function OriginBackgroundSection() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative w-full">
      <div className="max-w-[1280px] mx-auto w-full">
        {/* 영문 소제목 */}
        <Reveal delayMs={100}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-[1px] w-8 bg-[var(--accent-gold)] opacity-40" />
            <span className="text-xs md:text-sm font-elegant tracking-[0.25em] text-[var(--accent-gold)] uppercase opacity-80">
              WHY BAEKDOHWA EXISTS
            </span>
            <span className="h-[1px] w-8 bg-[var(--accent-gold)] opacity-40" />
          </div>
        </Reveal>

        {/* 헤드라인 */}
        <Reveal delayMs={150}>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-elegant font-bold text-center mb-16 text-[#F5F5F5] leading-snug">
            운명을 묻는 사람에게, 자신을 이해하는 법을 전하다
          </h2>
        </Reveal>

        {/* 본문 카드 (1280px 기준선 정렬) */}
        <Reveal delayMs={200}>
          <div className="gungjung-glass w-full p-8 sm:p-12 md:p-16 space-y-8 text-[#EDE6DA] leading-relaxed font-light">
            <div className="max-w-3xl mx-auto space-y-4 text-base sm:text-lg opacity-90 text-center sm:text-left">
              <p>
                사람들은 사랑이 힘들어질 때 상대의 마음을 알고 싶어 합니다.
              </p>
              <p>
                관계가 반복해서 어긋날 때는 자신의 운명을 묻고, 삶이 뜻대로 흘러가지 않을 때는 타고난 팔자를 궁금해합니다.
              </p>
            </div>

            {/* 핵심 질문 인용 상자 */}
            <div className="max-w-3xl mx-auto my-8 p-6 sm:p-8 rounded-xl bg-[rgba(59,15,27,0.25)] border-l-2 border-[var(--accent-gold)]">
              <p className="text-xs tracking-widest text-[var(--accent-gold)] uppercase mb-2 font-elegant opacity-75">
                THE ESSENTIAL QUESTION
              </p>
              <p className="text-lg sm:text-xl md:text-2xl font-elegant font-semibold text-[#F5F5F5] leading-snug">
                "나는 왜 이러한 감정을 느끼며,<br />
                왜 이러한 관계와 선택을 반복하는가?"
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-4 text-base sm:text-lg opacity-90 text-center sm:text-left">
              <p>
                명리학이 전하는 인간의 기질에 대한 관점과 마음공부, 심리, 무의식에 대한 탐구를 연결하여 자신을 보다 입체적으로 이해하는 방법을 전하고자 합니다.
              </p>
              <p>
                백도화는 미래를 단정하는 것보다 현재의 자신을 이해하고 앞으로의 선택을 주체적으로 만들어 가는 데 가치를 둡니다.
              </p>
            </div>

            {/* 가로형 16:9 이미지 슬롯 */}
            <div className="pt-8 max-w-4xl mx-auto w-full">
              <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-[rgba(216,191,163,0.2)] bg-[rgba(26,15,46,0.35)] shadow-md">
                <Image
                  src="/image/baekdohwa-palace-bg.png"
                  alt="백도화의 탄생 배경"
                  fill
                  className="object-cover opacity-40"
                  sizes="(max-width: 1024px) 100vw, 896px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#140A1E] via-[rgba(20,10,35,0.4)] to-transparent" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <BaekdohwaFlowerMark size={48} outlineGold={true} className="mb-3 opacity-80" />
                  <p className="text-sm sm:text-base font-elegant text-[var(--accent-gold)] font-medium">
                    정해진 운명의 답을 넘어, 스스로를 읽는 여정의 시작
                  </p>
                  <p className="text-xs text-[#EDE6DA] opacity-60 mt-1">
                    동양의 지혜와 무의식의 만남 (16:9 슬롯)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
