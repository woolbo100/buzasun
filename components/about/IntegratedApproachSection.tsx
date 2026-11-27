'use client'

import React from 'react'
import Reveal from '@/components/Reveal'
import { Heart, HeartHandshake, Sparkles } from 'lucide-react'

const perspectives = [
  {
    title: '명리학',
    desc: '전통적인 기질과 성향의 해석 관점'
  },
  {
    title: '타로',
    desc: '상징을 통한 자기성찰과 새로운 관점'
  },
  {
    title: '심리 및 무의식 탐구',
    desc: '감정, 신념, 관계 습관에 대한 이해'
  },
  {
    title: 'NLP 및 최면 관련 학습',
    desc: '익숙한 사고와 반응 패턴에 대한 탐구'
  },
  {
    title: '명상과 마음공부',
    desc: '자기관찰과 내면의 성찰'
  },
  {
    title: '행동과 실천',
    desc: '새로운 선택과 주체적인 삶의 설계'
  }
]

const domains = [
  {
    label: '01 · LOVE',
    title: '매혹과 사랑의 재설계',
    category: '연애 솔루션',
    description: '반복되는 감정 소모와 을의 연애에서 벗어나, 나의 선천적 매력과 관계 패턴을 이해하고 주도적인 사랑을 선택합니다.',
    icon: Heart,
    accentColor: '#D9A8A7', // 로즈핑크플럼
    borderColor: 'rgba(217, 168, 167, 0.3)',
    tagColor: '#E6BFA9',
  },
  {
    label: '02 · RELATIONSHIP',
    title: '인연과 관계의 재해석',
    category: '궁합 솔루션',
    description: '두 사람의 선천적 기질과 관계의 상호작용을 이해하여 서로의 다름을 존중하고, 더 깊고 건강한 관계의 방향을 설계합니다.',
    icon: HeartHandshake,
    accentColor: '#D8BB94', // 차분하고 깊은 버건디/브론즈골드
    borderColor: 'rgba(216, 187, 148, 0.3)',
    tagColor: '#F0D9C5',
  },
  {
    label: '03 · ABUNDANCE',
    title: '결핍에서 순환으로의 전환',
    category: '풍요 솔루션',
    description: '막연한 기복을 넘어 자신의 기질과 결핍의 패턴을 이해하고, 일과 재물에 대한 선택과 행동을 재설계합니다.',
    icon: Sparkles,
    accentColor: '#8FB4A4', // 은은한 옥색 에메랄드
    borderColor: 'rgba(143, 180, 164, 0.3)',
    tagColor: '#B7CDBB',
  },
]

export default function IntegratedApproachSection() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative w-full">
      <div className="max-w-[1280px] mx-auto w-full">
        {/* 영문 소제목 */}
        <Reveal delayMs={100}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-[1px] w-8 bg-[var(--accent-gold)] opacity-40" />
            <span className="text-[12px] font-elegant tracking-[0.25em] text-[var(--accent-gold)] uppercase opacity-80">
              THE INTEGRATED APPROACH
            </span>
            <span className="h-[1px] w-8 bg-[var(--accent-gold)] opacity-40" />
          </div>
        </Reveal>

        {/* 헤드라인 */}
        <Reveal delayMs={150}>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-elegant font-bold text-[#F5F5F5] mb-4 leading-[1.5]">
              동양의 지혜와 인간의 마음을 함께 바라보다
            </h2>
          </div>
        </Reveal>

        {/* 6개 통합 관점 그리드 (1280px 기준선 정렬) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 w-full">
          {perspectives.map((item, idx) => (
            <Reveal key={idx} delayMs={200 + idx * 80}>
              <div className="gungjung-glass p-6 sm:p-8 rounded-xl border border-[rgba(216,191,163,0.18)] hover:border-[var(--accent-gold)] transition-colors h-full flex flex-col justify-between w-full">
                <div>
                  <span className="text-[12px] font-mono tracking-widest text-[var(--accent-gold)] opacity-70 block mb-2">
                    PERSPECTIVE 0{idx + 1}
                  </span>
                  <h3 className="text-lg sm:text-xl font-elegant font-bold text-[#F5F5F5] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[18px] text-[#EDE6DA] opacity-80 leading-[1.7] font-light break-keep">
                    {item.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* 핵심 메시지 상자 (1280px 기준선 정렬) */}
        <Reveal delayMs={400}>
          <div className="gungjung-glass w-full p-8 sm:p-12 mb-20 text-center border border-[rgba(216,191,163,0.25)]">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-elegant font-bold text-[var(--accent-gold)] mb-4">
              한 가지 관점만으로 인간을 단정하지 않습니다.
            </h3>
            <p className="text-[18px] leading-[1.7] text-[#EDE6DA] opacity-85 font-light max-w-2xl mx-auto break-keep">
              타고난 기질과 살아온 경험, 내면의 신념, 현재의 감정과 앞으로의 선택을 함께 바라보며 자신을 입체적으로 이해하는 방향을 추구합니다.
            </p>
            <p className="text-[12px] text-[#EDE6DA] opacity-50 mt-6 font-light">
              * 명리학과 타로는 전통적·상징적 해석 체계이며, 백도화의 콘텐츠와 리포트는 자기이해와 성찰을 위한 안내서로 제공됩니다.
            </p>
          </div>
        </Reveal>

        {/* [신규 개편] 우리가 설계하는 세 가지 삶의 영역 (1280px 기준선 정렬) */}
        <div className="w-full">
          {/* 영어 라벨 (12px, 앤티크 샴페인 골드) */}
          <Reveal delayMs={100}>
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-[1px] w-8 bg-[var(--accent-gold)] opacity-40" />
              <span className="text-[12px] font-elegant tracking-[0.25em] text-[var(--accent-gold)] uppercase opacity-80">
                THREE DOMAINS OF LIFE
              </span>
              <span className="h-[1px] w-8 bg-[var(--accent-gold)] opacity-40" />
            </div>
          </Reveal>

          {/* 메인 제목 (36px, 앤티크 샴페인 골드 그라데이션) */}
          <Reveal delayMs={150}>
            <h3 className="text-2xl sm:text-3xl md:text-[36px] font-elegant font-bold text-center mb-4 gradient-text leading-[1.5]">
              우리가 설계하는 세 가지 삶의 영역
            </h3>
          </Reveal>

          {/* 서브 설명 (18px, 줄간격 1.7) */}
          <Reveal delayMs={200}>
            <p className="text-[18px] leading-[1.7] text-[#EDE6DA] opacity-85 font-light text-center max-w-2xl mx-auto mb-16 break-keep">
              나를 이해하는 것에서 시작하여 사랑과 관계, 풍요의 방향을 다시 설계합니다.
            </p>
          </Reveal>
          
          {/* 신규 카드 3종 구성 (PC 3열, 모바일 1열, 간격 24~32px, 패딩 32px) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 w-full mb-16 md:mb-20">
            {domains.map((domain, index) => {
              const Icon = domain.icon
              return (
                <Reveal key={index} delayMs={250 + index * 100}>
                  <div className="gungjung-glass p-8 rounded-2xl h-full flex flex-col justify-between transition-all duration-300 w-full border border-[rgba(216,191,163,0.18)] hover:border-[var(--accent-gold)]">
                    <div>
                      {/* 상단: 영어 라벨 & 아이콘 */}
                      <div className="flex items-center justify-between mb-6">
                        <span 
                          className="text-[12px] font-elegant tracking-[0.25em] uppercase font-semibold"
                          style={{ color: domain.accentColor }}
                        >
                          {domain.label}
                        </span>
                        <div 
                          className="w-10 h-10 rounded-full flex items-center justify-center bg-[rgba(255,255,255,0.03)] border"
                          style={{ borderColor: domain.borderColor, color: domain.accentColor }}
                        >
                          <Icon size={20} />
                        </div>
                      </div>

                      {/* 카드 제목 (24px) */}
                      <h4 className="text-[24px] font-elegant font-bold text-[#F5F5F5] mb-2 leading-[1.5] break-keep">
                        {domain.title}
                      </h4>

                      {/* 솔루션 구분 문구 (18px) */}
                      <p 
                        className="text-[18px] font-medium mb-6 font-elegant tracking-wide"
                        style={{ color: domain.tagColor }}
                      >
                        {domain.category}
                      </p>

                      {/* 본문 및 설명 문구 (18px, 줄간격 1.7) */}
                      <p className="text-[18px] leading-[1.7] text-[#EDE6DA] opacity-85 font-light break-keep">
                        {domain.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>

          {/* 4. 하단 통합 메시지 (24px 볼드 & 18px 설명, 중앙 정렬) */}
          <Reveal delayMs={400}>
            <div className="text-center space-y-3">
              <p className="text-xl sm:text-2xl md:text-[24px] font-elegant font-bold text-[var(--accent-gold)] tracking-wide break-keep">
                사랑의 주권, 관계의 지혜, 풍요의 실천.
              </p>
              <p className="text-[18px] leading-[1.7] text-[#EDE6DA] opacity-85 font-light break-keep">
                모든 변화는 나를 이해하는 것에서 시작됩니다.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
