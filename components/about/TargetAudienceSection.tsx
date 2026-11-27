'use client'

import React from 'react'
import Reveal from '@/components/Reveal'
import { Heart, Search, Compass, Users, Sparkles, TrendingUp } from 'lucide-react'

const targetList = [
  {
    num: '01',
    icon: <Heart size={24} className="text-[var(--accent-gold)]" />,
    title: '사랑할 때마다 비슷한 상처를 반복하는 분',
    desc: '만나는 사람은 달라져도 관계 속에서 비슷한 감정과 어려움을 반복하는 이유를 이해하고 싶은 분'
  },
  {
    num: '02',
    icon: <Search size={24} className="text-[var(--accent-gold)]" />,
    title: '상대의 마음을 알고 싶지만 정작 자신의 마음은 놓치고 있는 분',
    desc: '사랑받기 위해 애쓰는 과정에서 자신이 원하는 사랑이 무엇인지 돌아보고 싶은 분'
  },
  {
    num: '03',
    icon: <Compass size={24} className="text-[var(--accent-gold)]" />,
    title: '이별과 재회 사이에서 방향을 찾지 못하고 있는 분',
    desc: '그 사람과 다시 만나는 것이 자신에게 어떤 의미인지, 앞으로 어떤 선택을 해야 할지 깊이 고민하고 있는 분'
  },
  {
    num: '04',
    icon: <Users size={24} className="text-[var(--accent-gold)]" />,
    title: '사랑하는 사람과의 차이를 이해하고 싶은 분',
    desc: '서로 사랑하지만 반복되는 갈등과 다른 감정 표현 방식으로 어려움을 느끼는 분'
  },
  {
    num: '05',
    icon: <Sparkles size={24} className="text-[var(--accent-gold)]" />,
    title: '나의 매력과 고유한 가치를 발견하고 싶은 분',
    desc: '타인의 평가와 선택에 의존하기보다 자신만의 아름다움과 존재감을 발견하고 싶은 분'
  },
  {
    num: '06',
    icon: <TrendingUp size={24} className="text-[var(--accent-gold)]" />,
    title: '풍요로운 삶을 원하지만 익숙한 신념과 두려움에 머무르는 분',
    desc: '자신의 재능과 가능성을 이해하고, 정서적·경제적 풍요를 향한 새로운 방향을 설계하고 싶은 분'
  }
]

export default function TargetAudienceSection() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative w-full">
      <div className="max-w-[1280px] mx-auto w-full">
        {/* 영문 소제목 */}
        <Reveal delayMs={100}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-[1px] w-8 bg-[var(--accent-gold)] opacity-40" />
            <span className="text-[12pt] font-elegant font-semibold tracking-[0.25em] text-[var(--accent-gold)] uppercase opacity-90">
              WHO BAEKDOHWA IS FOR
            </span>
            <span className="h-[1px] w-8 bg-[var(--accent-gold)] opacity-40" />
          </div>
        </Reveal>

        {/* 헤드라인 (공통 line-height: 1.4 적용) */}
        <Reveal delayMs={150}>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="about-heading text-2xl sm:text-4xl md:text-5xl font-elegant font-bold text-[#F5F5F5] mb-4">
              혹시, 당신도 이런 마음인가요?
            </h2>
          </div>
        </Reveal>

        {/* 6개 카드 그리드 (PC 3열, 태블릿 2열, 모바일 1열, 1280px 기준선 정렬) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
          {targetList.map((item, idx) => (
            <Reveal key={idx} delayMs={200 + idx * 80}>
              <div className="gungjung-glass p-8 rounded-2xl border border-[rgba(216,191,163,0.18)] hover:border-[var(--accent-gold)] transition-all duration-400 h-full flex flex-col justify-between group w-full">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-xl bg-[rgba(216,191,163,0.1)] border border-[rgba(216,191,163,0.2)] flex items-center justify-center group-hover:scale-105 transition-transform">
                      {item.icon}
                    </div>
                    <span className="text-[12px] font-mono font-bold text-[var(--accent-gold)] opacity-50">
                      {item.num}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-elegant font-bold text-[#F5F5F5] group-hover:text-[var(--accent-gold-light)] transition-colors mb-3 leading-[1.5]">
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

        {/* 하단 핵심 메시지 (1280px 기준선 정렬) */}
        <Reveal delayMs={500}>
          <div className="mt-16 text-center w-full gungjung-glass p-8 sm:p-12 border border-[rgba(216,191,163,0.25)]">
            <p className="text-lg sm:text-xl md:text-2xl font-elegant font-semibold text-[var(--accent-gold)] mb-3 leading-[1.5]">
              당신에게 필요한 것은<br className="sm:hidden" />{' '}
              더 많은 미래에 대한 답이 아니라,<br />
              자신에 대한 더 깊은 이해일지도 모릅니다.
            </p>
            <p className="text-[18px] leading-[1.7] text-[#EDE6DA] opacity-80 font-light break-keep">
              백도화는 자신을 읽고, 사랑과 삶의 방향을 다시 선택하는 여정에 함께합니다.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
