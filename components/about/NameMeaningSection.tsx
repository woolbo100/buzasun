'use client'

import React from 'react'
import Image from 'next/image'
import Reveal from '@/components/Reveal'
import BaekdohwaFlowerMark from '@/components/BaekdohwaFlowerMark'

export default function NameMeaningSection() {
  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 relative">
      <div className="max-w-[1280px] mx-auto w-full">
        {/* 영문 소제목 */}
        <Reveal delayMs={100}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-[1px] w-8 bg-[var(--accent-gold)] opacity-40" />
            <span className="text-xs md:text-sm font-elegant tracking-[0.25em] text-[var(--accent-gold)] uppercase opacity-80">
              THE MEANING OF BAEKDOHWA
            </span>
            <span className="h-[1px] w-8 bg-[var(--accent-gold)] opacity-40" />
          </div>
        </Reveal>

        {/* 메인 타이틀 */}
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

        {/* 에디토리얼 좌우 2열 배치 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* 좌측: 텍스트 컬럼 (7열) */}
          <div className="lg:col-span-7">
            <Reveal delayMs={200}>
              <div className="gungjung-glass p-8 sm:p-12 md:p-14 space-y-6 text-[#EDE6DA] leading-relaxed font-light">
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
                <div className="pt-4 border-t border-[rgba(216,191,163,0.2)]">
                  <p className="text-lg sm:text-xl md:text-2xl font-elegant font-semibold text-[var(--accent-gold)] leading-relaxed">
                    누군가에게 선택받기 위한 아름다움이 아닌,<br />
                    스스로 피어나는 존재의 아름다움.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* 우측: 3:4 에디토리얼 이미지 슬롯 (5열) */}
          <div className="lg:col-span-5 flex justify-center">
            <Reveal delayMs={300}>
              <div className="w-full max-w-sm sm:max-w-md aspect-[3/4] rounded-2xl overflow-hidden border border-[rgba(216,191,163,0.25)] relative group shadow-[0_12px_40px_rgba(0,0,0,0.6)]">
                {/* 배경 이미지: 백도화 시크릿 부티크 배경 */}
                <Image
                  src="/image/baekdohwa-secret-boutique-bg.webp"
                  alt="백도화의 세계관"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-55"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                
                {/* 궁중 한지 비단 오버레이 */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#140A1E] via-[rgba(26,15,46,0.5)] to-transparent" />
                
                {/* 앤티크 프레임 장식 */}
                <div className="absolute inset-4 border border-[rgba(216,191,163,0.2)] rounded-xl pointer-events-none flex flex-col justify-between p-6">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] tracking-widest text-[var(--accent-gold)] uppercase opacity-70 font-elegant">
                      BAEKDOHWA IDENTITY
                    </span>
                    <BaekdohwaFlowerMark size={32} outlineGold={true} className="opacity-80" />
                  </div>
                  
                  <div>
                    <span className="text-2xl font-elegant text-[#F5F5F5] block font-bold mb-1">
                      白桃花
                    </span>
                    <p className="text-xs text-[var(--accent-gold)] opacity-75">
                      고유한 빛과 기질을 피워내는 도화의 상징
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
