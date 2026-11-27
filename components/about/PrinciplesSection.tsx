'use client'

import React from 'react'
import Reveal from '@/components/Reveal'
import Image from 'next/image'

const principleBookmarks = [
  {
    name: '가능성',
    src: '/image/principle-01.png',
    alt: '백도화 신념 01 · POTENTIAL - 한계가 아닌 가능성을 읽습니다. 타고난 기질은 삶의 한계가 아니라, 자신만의 가능성을 발견하는 출발점입니다.',
  },
  {
    name: '주권',
    src: '/image/principle-02.png',
    alt: '백도화 신념 02 · SOVEREIGNTY - 의존이 아닌 주권을 세웁니다. 불안과 두려움을 이용하지 않으며, 스스로 판단하고 선택할 수 있는 힘을 존중합니다.',
  },
  {
    name: '존엄',
    src: '/image/principle-03.png',
    alt: '백도화 신념 03 · DIGNITY - 사랑보다 먼저, 당신의 가치를 지킵니다. 타인의 마음을 얻기 위해 자신을 잃는 사랑이 아닌, 본연의 가치를 존중하는 관계를 지향합니다.',
  },
  {
    name: '정직',
    src: '/image/principle-04.png',
    alt: '백도화 신념 04 · INTEGRITY - 허황된 약속보다 정직한 해석을 전합니다. 재회와 결혼, 재물 등 특정한 미래나 결과를 보장하지 않습니다.',
  },
  {
    name: '실천',
    src: '/image/principle-05.png',
    alt: '백도화 신념 05 · TRANSFORMATION - 해석의 끝은 삶의 실천입니다. 자기이해를 넘어 새로운 인식과 선택, 행동으로 이어지는 변화를 지향합니다.',
  },
]

export default function PrinciplesSection() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative w-full">
      <div className="max-w-[1280px] mx-auto w-full">
        {/* 영문 소제목 */}
        <Reveal delayMs={100}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-[1px] w-8 bg-[var(--accent-gold)] opacity-40" />
            <span className="text-[12pt] font-elegant font-semibold tracking-[0.25em] text-[var(--accent-gold)] uppercase opacity-90">
              OUR PRINCIPLES
            </span>
            <span className="h-[1px] w-8 bg-[var(--accent-gold)] opacity-40" />
          </div>
        </Reveal>

        {/* 헤드라인 및 설명 문구 */}
        <Reveal delayMs={150}>
          <div className="text-center mb-12 sm:mb-16 max-w-4xl mx-auto">
            <h2 className="about-heading text-2xl sm:text-4xl md:text-5xl font-elegant font-bold text-[#F5F5F5] mb-4 text-center leading-[1.4]">
              백도화가 지키는 다섯 가지 신념
            </h2>
            <p className="text-[18px] leading-[1.7] text-[#EDE6DA] opacity-85 font-light break-keep text-center max-w-2xl mx-auto">
              당신의 삶을 대신 결정하지 않기에,<br className="hidden sm:inline" />{' '}
              백도화는 해석과 설계에 있어 분명한 기준을 지킵니다.
            </p>
          </div>
        </Reveal>

        {/* 신규 책갈피 이미지 갤러리 (PC 기준 5열 1행 가로 나란히 배치, 배경 위 직접 안착) */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-5 w-full">
          {principleBookmarks.map((item, idx) => (
            <Reveal 
              key={idx} 
              delayMs={200 + idx * 80}
              className="w-[calc(50%-8px)] sm:w-[calc(33.333%-12px)] lg:w-[calc(20%-16px)] max-w-[280px] lg:max-w-none flex justify-center"
            >
              <div className="relative w-full aspect-[1/2] transition-transform duration-500 hover:-translate-y-2 cursor-pointer">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  priority={idx < 2}
                  className="object-contain"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 240px"
                />
                <span className="sr-only">{item.alt}</span>
              </div>
            </Reveal>
          ))}
        </div>

        {/* 하단 브랜드 서약 문구 (배경 위 직접 배치, 28px, 붓글씨, 피치 베이지, 중앙 정렬, 상단 간격 40px) */}
        <Reveal delayMs={650}>
          <div className="mt-12 sm:mt-16 text-center">
            <p className="text-xl sm:text-2xl md:text-[28px] font-elegant font-bold text-[var(--accent-gold)] leading-[1.4] tracking-wide break-keep">
              해석은 백도화의 몫,<br />
              선택은 언제나 당신의 몫입니다.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
