'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Reveal from '@/components/Reveal'
import { ArrowUpRight } from 'lucide-react'

const realms = [
  {
    num: '01',
    hanja: '桃花',
    title: '사랑과 매력',
    eng: 'LOVE & ATTRACTION',
    colorName: '은은한 로즈핑크플럼',
    symbol: '도화, 복숭아꽃',
    image: '/image/baekdohwa-love-destiny.webp',
    desc: '나의 매력을 발견하고, 사랑의 반복 패턴을 이해하며, 관계 속에서 나 자신을 잃지 않는 법을 함께 탐색합니다.',
    topics: [
      '선천적 매력과 연애 성향',
      '반복되는 연애 패턴',
      '이별과 재회',
      '애착과 감정 반응',
      '자존감과 주체적인 사랑'
    ],
    products: [
      { name: '선천코드 연애 리포트', href: '/reports/baekdohwa-report' },
      { name: '연애비급', href: '/reports/love-secret' },
      { name: '재회비방', href: '/reports/reunion-secret' }
    ],
    accentBorder: 'rgba(197, 139, 160, 0.35)',
    tagBg: 'rgba(197, 139, 160, 0.15)',
    tagText: '#E6BFA9'
  },
  {
    num: '02',
    hanja: '因緣',
    title: '인연과 관계',
    eng: 'RELATIONSHIP & CONNECTION',
    colorName: '채도가 낮은 깊은 버건디',
    symbol: '모란',
    image: '/image/baekdohwa-romantic-compatibility.webp',
    desc: '서로의 기질과 차이를 이해하고, 사랑하는 사람과의 관계에서 나타나는 갈등과 상호작용을 새로운 관점에서 바라봅니다.',
    topics: [
      '두 사람의 기질과 성향',
      '관계의 상호작용',
      '애정 표현과 갈등 패턴',
      '서로의 다름에 대한 이해',
      '건강한 관계와 새로운 선택'
    ],
    products: [
      { name: '선천코드 궁합 리포트', href: '/reports/premium-compatibility-report' },
      { name: '선천코드 비기', href: '/reports/seoncheon-code-bigi' }
    ],
    accentBorder: 'rgba(147, 92, 107, 0.35)',
    tagBg: 'rgba(102, 50, 68, 0.25)',
    tagText: '#D8BB94'
  },
  {
    num: '03',
    hanja: '豊饒',
    title: '풍요와 자기실현',
    eng: 'ABUNDANCE & SELF-REALIZATION',
    colorName: '옥색과 연옥색',
    symbol: '연꽃, 엽전',
    image: '/image/baekdohwa-wealth-destiny.webp',
    desc: '자신의 가능성과 재능을 발견하고, 풍요를 대하는 신념과 태도를 돌아보며, 자신만의 삶을 설계하는 방법을 탐색합니다.',
    topics: [
      '타고난 재능과 가능성',
      '풍요를 대하는 태도와 신념',
      '자신을 제한하는 생각',
      '삶의 방향과 자기실현',
      '경제적·정서적 풍요'
    ],
    products: [
      { name: '선천코드 풍요 리포트', href: '/reports/abundance-report' },
      { name: '풍요비책', href: '/reports/abundance-secret' }
    ],
    accentBorder: 'rgba(96, 143, 130, 0.35)',
    tagBg: 'rgba(96, 143, 130, 0.15)',
    tagText: '#C3C9AC'
  }
]

export default function ThreeRealmsSection() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative w-full">
      <div className="max-w-[1280px] mx-auto w-full">
        {/* 영문 소제목 */}
        <Reveal delayMs={100}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-[1px] w-8 bg-[var(--accent-gold)] opacity-40" />
            <span className="text-xs md:text-sm font-elegant tracking-[0.25em] text-[var(--accent-gold)] uppercase opacity-80">
              THE THREE REALMS OF LIFE
            </span>
            <span className="h-[1px] w-8 bg-[var(--accent-gold)] opacity-40" />
          </div>
        </Reveal>

        {/* 헤드라인 */}
        <Reveal delayMs={150}>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-lg sm:text-xl font-elegant tracking-widest text-[var(--accent-gold)] block mb-2">
              사랑 · 인연 · 풍요
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-elegant font-bold text-[#F5F5F5] leading-snug">
              삶의 중요한 순간마다 자신을 이해하다
            </h2>
          </div>
        </Reveal>

        {/* 3개 동일 규격 세로 카드 (1280px 기준선 정렬) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 w-full">
          {realms.map((realm, idx) => (
            <Reveal key={idx} delayMs={200 + idx * 100}>
              <div
                className="gungjung-glass rounded-2xl overflow-hidden h-full flex flex-col justify-between transition-all duration-500 hover:-translate-y-1.5 w-full"
                style={{ borderColor: realm.accentBorder }}
              >
                <div>
                  {/* 상단 3:4 이미지 슬롯 */}
                  <div className="relative aspect-[3/4] w-full overflow-hidden border-b border-[rgba(216,191,163,0.15)] bg-[#1A0F2E]">
                    <Image
                      src={realm.image}
                      alt={realm.title}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105 opacity-80"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#140A1E] via-transparent to-transparent" />
                    
                    {/* 카드 헤더 뱃지 */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                      <span
                        className="px-2.5 py-1 rounded-full text-xs font-elegant font-bold"
                        style={{ backgroundColor: realm.tagBg, color: realm.tagText }}
                      >
                        {realm.num} · {realm.hanja}
                      </span>
                      <span className="text-[11px] text-[#EDE6DA] opacity-75 font-mono">
                        {realm.symbol}
                      </span>
                    </div>

                    {/* 이미지 하단 타이틀 오버레이 */}
                    <div className="absolute bottom-4 left-6 right-6">
                      <p className="text-xs font-elegant tracking-widest uppercase opacity-80" style={{ color: realm.tagText }}>
                        {realm.eng}
                      </p>
                      <h3 className="text-2xl font-elegant font-bold text-[#F5F5F5] mt-0.5">
                        {realm.title}
                      </h3>
                    </div>
                  </div>

                  {/* 카드 본문 설명 */}
                  <div className="p-6 sm:p-8 space-y-6">
                    <p className="text-xs sm:text-sm text-[#EDE6DA] opacity-85 leading-relaxed font-light">
                      {realm.desc}
                    </p>

                    {/* 주요 주제 */}
                    <div>
                      <p className="text-xs font-elegant tracking-wider uppercase text-[var(--accent-gold)] mb-3 font-semibold">
                        주요 주제
                      </p>
                      <ul className="text-xs text-[#EDE6DA] opacity-80 space-y-2 font-light">
                        {realm.topics.map((topic, tIdx) => (
                          <li key={tIdx} className="flex items-center gap-2">
                            <span className="w-1 h-1 rounded-full bg-[var(--accent-gold)] opacity-70" />
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* 관련 상품 링크 */}
                <div className="p-6 sm:p-8 pt-0 border-t border-[rgba(216,191,163,0.12)] mt-4">
                  <p className="text-[11px] font-elegant tracking-wider uppercase text-[var(--accent-gold)] mb-3 pt-4 opacity-75 font-semibold">
                    관련 상품 바로가기
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {realm.products.map((prod, pIdx) => (
                      <Link
                        key={pIdx}
                        href={prod.href}
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs text-[#EDE6DA] bg-[rgba(255,255,255,0.03)] border border-[rgba(216,191,163,0.18)] hover:border-[var(--accent-gold)] hover:text-[var(--accent-gold)] transition-colors"
                      >
                        <span>{prod.name}</span>
                        <ArrowUpRight size={12} className="opacity-70" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
