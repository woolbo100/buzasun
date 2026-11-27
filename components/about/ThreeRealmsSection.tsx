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
    subtitle: '매혹과 사랑의 재설계',
    desc: '반복되는 감정 소모와 관계 패턴을 이해하고, 나만의 선천적 매력을 발견해 자신을 잃지 않는 주도적 사랑을 설계합니다.',
    colorName: '은은한 로즈핑크플럼',
    symbol: '도화, 복숭아꽃',
    image: '/image/baekdohwa-about-love.webp',
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
    subtitle: '인연과 관계의 재해석',
    desc: '두 사람의 선천적 기질과 관계의 상호작용을 이해하고, 서로의 다름을 존중하며 더 깊고 건강한 관계의 방향을 설계합니다.',
    colorName: '채도가 낮은 깊은 버건디',
    symbol: '모란',
    image: '/image/baekdohwa-about-relationship.webp',
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
    subtitle: '결핍에서 순환으로의 전환',
    desc: '타고난 재능과 가능성을 발견하고, 풍요를 제한하는 신념과 패턴을 이해하여 일과 재물, 자기실현의 방향을 설계합니다.',
    colorName: '옥색과 연옥색',
    symbol: '연꽃, 엽전',
    image: '/image/baekdohwa-about-abundance.webp',
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
            <span className="text-[12pt] font-elegant font-semibold tracking-[0.25em] text-[var(--accent-gold)] uppercase opacity-90">
              THE THREE REALMS OF LIFE
            </span>
            <span className="h-[1px] w-8 bg-[var(--accent-gold)] opacity-40" />
          </div>
        </Reveal>

        {/* 헤드라인 및 설명 문구 */}
        <Reveal delayMs={150}>
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="about-heading text-2xl sm:text-4xl md:text-5xl font-elegant font-bold text-[#F5F5F5] mb-4 text-center leading-[1.4]">
              백도화가 설계하는 세 가지 삶의 영역
            </h2>
            <p className="text-[18px] leading-[1.7] text-[#EDE6DA] opacity-85 font-light break-keep text-center max-w-2xl mx-auto">
              나를 이해하는 것에서 시작하여 사랑과 관계, 풍요의 방향을 다시 설계합니다.
            </p>
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
                      className="object-cover transition-transform duration-700 hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#140A1E] via-transparent to-transparent" />

                    {/* 이미지 하단 타이틀 오버레이 */}
                    <div className="absolute bottom-4 left-6 right-6">
                      <p className="text-[12px] font-elegant tracking-widest uppercase opacity-80" style={{ color: realm.tagText }}>
                        {realm.eng}
                      </p>
                      <h3 className="text-2xl font-elegant font-bold text-[#F5F5F5] mt-0.5">
                        {realm.title}
                      </h3>
                    </div>
                  </div>

                  {/* 카드 본문 설명 */}
                  <div className="p-6 sm:p-8 space-y-6">
                    {/* 신규 소제목 및 설명 문구 */}
                    <div>
                      <h4 className="text-[22px] font-elegant font-bold text-[var(--accent-gold)] mb-4 text-left leading-snug">
                        {realm.subtitle}
                      </h4>
                      <p className="text-[18px] text-[#EDE6DA] opacity-85 leading-[1.7] font-light break-keep min-h-[5.1em] text-left">
                        {realm.desc}
                      </p>
                    </div>

                    {/* 주요 주제 (16px 소제목) */}
                    <div>
                      <p className="text-[16px] font-elegant tracking-wider uppercase text-[var(--accent-gold)] mb-3 font-semibold text-left">
                        주요 주제
                      </p>
                      <ul className="text-[18px] text-[#EDE6DA] opacity-80 space-y-2 font-light leading-[1.7] break-keep text-left">
                        {realm.topics.map((topic, tIdx) => (
                          <li key={tIdx} className="flex items-center gap-2">
                            <span className="w-1 h-1 rounded-full bg-[var(--accent-gold)] opacity-70 flex-shrink-0" />
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* 관련 상품 링크 (16px 소제목) */}
                <div className="p-6 sm:p-8 pt-0 border-t border-[rgba(216,191,163,0.12)] mt-auto">
                  <p className="text-[16px] font-elegant tracking-wider uppercase text-[var(--accent-gold)] mb-3 pt-4 opacity-80 font-semibold text-left">
                    관련 상품 바로가기
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {realm.products.map((prod, pIdx) => (
                      <Link
                        key={pIdx}
                        href={prod.href}
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-[12px] text-[#EDE6DA] bg-[rgba(255,255,255,0.03)] border border-[rgba(216,191,163,0.18)] hover:border-[var(--accent-gold)] hover:text-[var(--accent-gold)] transition-colors"
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

        {/* 하단 마무리 강조 문구 (배경 위 직접 배치, 중앙 정렬, 상단 여백 48px) */}
        <Reveal delayMs={500}>
          <div className="mt-12 text-center space-y-3">
            <h3 className="text-xl sm:text-2xl md:text-[28px] font-elegant font-bold text-[var(--accent-gold)] leading-[1.4] tracking-wide break-keep">
              사랑의 주권, 관계의 지혜, 풍요의 실천
            </h3>
            <p className="text-[18px] leading-[1.7] text-[#EDE6DA] opacity-85 font-light break-keep">
              모든 변화는 나를 이해하는 것에서 시작됩니다.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
