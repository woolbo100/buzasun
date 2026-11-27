'use client'

import React from 'react'
import Reveal from '@/components/Reveal'
import {
  Compass,
  Sparkles,
  Magnet,
  HeartHandshake,
  Repeat,
  Crown,
  Flame,
  ArrowDown,
  CheckCircle2
} from 'lucide-react'

const codes = [
  {
    code: 'CODE 01',
    title: '매력의 무기',
    question: '남들이 흉내 낼 수 없는 나만의 치명적 매력은 무엇인가?',
    icon: <Sparkles size={28} className="text-[var(--accent-gold)]" />
  },
  {
    code: 'CODE 02',
    title: '끌림과 이상형',
    question: '나는 어떤 기질의 사람에게 본능적으로 끌리고 흔들리는가?',
    icon: <Magnet size={28} className="text-[var(--accent-gold)]" />
  },
  {
    code: 'CODE 03',
    title: '인연과 배우자복',
    question: (
      <>
        나를 귀하게 여길 진짜 인연과 타고난<br />남자복·배우자운은?
      </>
    ),
    icon: <HeartHandshake size={28} className="text-[var(--accent-gold)]" />
  },
  {
    code: 'CODE 04',
    title: '무의식 패턴',
    question: '왜 결정적인 순간마다 같은 상처와 이별을 반복하는가?',
    icon: <Repeat size={28} className="text-[var(--accent-gold)]" />
  },
  {
    code: 'CODE 05',
    title: '관계의 주도권',
    question: '흔들리는 을의 연애를 끝내고 판을 쥐는 나만의 방식은?',
    icon: <Crown size={28} className="text-[var(--accent-gold)]" />
  },
  {
    code: 'CODE 06',
    title: '무기의 발현',
    question: '타고난 코드를 현실에서 어떻게 꺼내 써야 관계가 바뀌는가?',
    icon: <Flame size={28} className="text-[var(--accent-gold)]" />
  }
]

const strategies = [
  '독보적 매력 발현',
  '진짜 인연 선별',
  '관계 주도권 장악',
  '실전 행동 정렬'
]

export default function LoveSecretCodeSection() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative w-full">
      <div className="max-w-[1280px] mx-auto w-full">
        {/* 영문 소제목 */}
        <Reveal delayMs={100}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-[1px] w-8 bg-[var(--accent-gold)] opacity-40" />
            <span className="text-[12pt] font-elegant font-semibold tracking-[0.25em] text-[var(--accent-gold)] uppercase opacity-90">
              THE SECRET CODE OF LOVE
            </span>
            <span className="h-[1px] w-8 bg-[var(--accent-gold)] opacity-40" />
          </div>
        </Reveal>

        {/* 헤드라인 (공통 line-height: 1.4 적용) */}
        <Reveal delayMs={150}>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="about-heading text-2xl sm:text-4xl md:text-5xl font-elegant font-bold text-[#F5F5F5] mb-4">
              백도화의 선천코드 연애 설계
            </h2>
            <p className="text-xl sm:text-2xl font-elegant text-[var(--accent-gold)] font-medium tracking-wide leading-relaxed">
              사랑의 시작은 나를 읽는 것
            </p>
          </div>
        </Reveal>

        {/* =========================================================================
            인포그래픽 파이프라인 (상단 → 화살표 → 6개 코드 → 화살표 → 맞춤 전략)
            ========================================================================= */}
        <div className="flex flex-col items-center w-full">
          {/* 상단: 선천코드 해독 슬림 가로형 배너 카드 (가로 폭 880px 유지, 슬림 가로형 배너 레이아웃) */}
          <Reveal delayMs={200} className="w-full">
            <div className="card--burgundy w-full max-w-[880px] mx-auto py-5 sm:py-6 px-6 sm:px-10 rounded-2xl flex flex-row items-center justify-center gap-4 sm:gap-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[rgba(216,191,163,0.1)] border border-[rgba(216,191,163,0.25)] flex items-center justify-center flex-shrink-0">
                <Compass size={28} className="text-[var(--accent-gold)] sm:w-8 sm:h-8" />
              </div>
              <div className="text-left">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-elegant font-bold text-[var(--accent-gold)] leading-tight mb-1">
                  선천코드 해독
                </h3>
                <p className="text-[16px] sm:text-[18px] leading-[1.6] text-[#EDE6DA] opacity-85 font-light break-keep">
                  타고난 기질과 무의식의 설계도
                </p>
              </div>
            </div>
          </Reveal>

          {/* 상단 → 중간 연결 하향 화살표 */}
          <Reveal delayMs={250}>
            <div className="flex flex-col items-center my-6 sm:my-8 text-[var(--accent-gold)] opacity-70">
              <div className="w-[1px] h-6 bg-[var(--accent-gold)] opacity-40 mb-1" />
              <ArrowDown size={22} className="animate-bounce" />
            </div>
          </Reveal>

          {/* 중간: 나를 이해하는 여섯 가지 코드 (PC 3열 2행, 태블릿 2열, 모바일 1열) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
            {codes.map((item, idx) => (
              <Reveal key={idx} delayMs={300 + idx * 70} className="h-full">
                <div className="gungjung-glass p-6 sm:p-8 rounded-2xl border border-[rgba(216,191,163,0.18)] hover:border-[var(--accent-gold)] transition-all duration-400 h-full flex flex-col justify-between w-full bg-[rgba(26,15,35,0.45)] group">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-[rgba(216,191,163,0.08)] border border-[rgba(216,191,163,0.18)] flex items-center justify-center group-hover:scale-105 transition-transform">
                        {item.icon}
                      </div>
                      <span className="text-[12px] font-mono font-semibold tracking-wider text-[var(--accent-gold)] opacity-60">
                        {item.code}
                      </span>
                    </div>
                    <h4 className="text-xl sm:text-2xl font-elegant font-bold text-[var(--accent-gold)] group-hover:text-[var(--accent-gold-light)] transition-colors mb-3 leading-[1.4]">
                      {item.title}
                    </h4>
                    <p className="text-[18px] text-[#EDE6DA] opacity-90 leading-[1.7] font-light break-keep">
                      {item.question}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* 중간 → 하단 연결 하향 화살표 */}
          <Reveal delayMs={450}>
            <div className="flex flex-col items-center my-8 sm:my-10 text-[var(--accent-gold)] opacity-70">
              <div className="w-[1px] h-8 bg-[var(--accent-gold)] opacity-40 mb-1" />
              <ArrowDown size={22} className="animate-bounce" />
            </div>
          </Reveal>

          {/* 하단: 나만의 맞춤형 연애 전략 (상단 STEP 01 카드와 동일한 최대 너비 880px, 동일한 딥 버건디 스타일 적용) */}
          <Reveal delayMs={500} className="w-full">
            <div className="card--burgundy w-full max-w-[880px] mx-auto p-8 sm:p-10 md:p-12 rounded-2xl text-center">
              <span className="text-[12pt] font-elegant font-semibold tracking-[0.2em] text-[var(--accent-gold)] uppercase block mb-2 opacity-85">
                PERSONALIZED LOVE STRATEGY
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-[32px] font-elegant font-bold text-[#F5F5F5] mb-2">
                나만의 맞춤형 연애 전략
              </h3>
              <p className="text-[18px] leading-[1.7] text-[var(--accent-gold)] font-medium mb-8 break-keep">
                코드를 읽는 순간, 사랑의 판도가 바뀝니다.
              </p>

              {/* 4가지 핵심 결과 가로형 배지 (PC에서 1줄로 여유롭게 배치, 모바일 2열) */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
                {strategies.map((strat, sIdx) => (
                  <div
                    key={sIdx}
                    className="flex items-center justify-center gap-2 py-3 px-3 sm:px-4 rounded-xl bg-[rgba(255,255,255,0.05)] border border-[rgba(216,191,163,0.25)] text-[#EDE6DA] hover:border-[var(--accent-gold)] hover:text-[var(--accent-gold)] transition-colors"
                  >
                    <CheckCircle2 size={16} className="text-[var(--accent-gold)] flex-shrink-0" />
                    <span className="text-[16px] sm:text-[17px] font-medium tracking-wide whitespace-nowrap">
                      {strat}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* 인포그래픽 최종 핵심 카피 (하단 독립 강조 문구 유지) */}
          <Reveal delayMs={600}>
            <div className="mt-14 text-center">
              <p className="text-xl sm:text-2xl md:text-3xl font-elegant font-bold text-[var(--accent-gold)] leading-relaxed tracking-wide">
                정해진 연애 공식이 아닌,<br className="sm:hidden" />{' '}
                나에게 맞는 사랑의 방식
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
