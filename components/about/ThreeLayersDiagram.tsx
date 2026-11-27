'use client'

import React from 'react'
import Reveal from '@/components/Reveal'

export default function ThreeLayersDiagram() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative w-full">
      <div className="max-w-[1280px] mx-auto w-full">
        {/* 영문 소제목 */}
        <Reveal delayMs={100}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-[1px] w-8 bg-[var(--accent-gold)] opacity-40" />
            <span className="text-[12pt] font-elegant font-semibold tracking-[0.25em] text-[var(--accent-gold)] uppercase opacity-90">
              THE THREE LAYERS OF SELF
            </span>
            <span className="h-[1px] w-8 bg-[var(--accent-gold)] opacity-40" />
          </div>
        </Reveal>

        {/* 헤드라인 (공통 line-height: 1.4 적용) */}
        <Reveal delayMs={150}>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="about-heading text-2xl sm:text-4xl md:text-5xl font-elegant font-bold text-[#F5F5F5] mb-4">
              인간을 바라보는 세 가지 층위
            </h2>
            <p className="text-[18px] leading-[1.7] font-elegant text-[var(--accent-gold)] font-medium leading-[1.5]">
              타고난 나를 이해하고, 형성된 나를 돌아보며, 새로운 나를 선택하다
            </p>
            <p className="text-[18px] leading-[1.7] text-[#EDE6DA] opacity-80 mt-6 font-light break-keep">
              인간은 타고난 기질만으로 설명될 수 없으며, 살아오면서 형성된 경험과 신념, 감정과 행동,<br />
              그리고 앞으로의 선택을 함께 살펴볼 필요가 있습니다.<br className="hidden md:inline" />{' '}
              백도화는 인간을 선천코드, 무의식 패턴, 후천적 선택이라는 세 가지 층위에서 바라봅니다.
            </p>
          </div>
        </Reveal>

        {/* 1. 상단 원형 다이어그램 (대형 투명 카드 유지, 불필요한 하단 여백 정리) */}
        <Reveal delayMs={200}>
          <div className="gungjung-glass w-full p-6 sm:p-10 md:p-12">
            {/* SVG 다이어그램 (중앙 정렬 유지) */}
            <div className="relative w-full max-w-xl mx-auto aspect-square flex items-center justify-center my-2 sm:my-4">
              <svg
                viewBox="0 0 600 600"
                className="w-full h-full max-h-[520px] select-none"
                aria-label="백도화의 세 가지 층위 동심원 다이어그램"
              >
                <defs>
                  {/* 텍스트 가독성 향상을 위한 미세 드롭 섀도우 */}
                  <filter id="diagramTextShadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000000" floodOpacity="0.75" />
                  </filter>

                  {/* 동심원 그라데이션 */}
                  {/* 1. 바깥 원: 앤티크 샴페인 골드 */}
                  <radialGradient id="outerGrad" cx="50%" cy="50%" r="50%">
                    <stop offset="65%" stopColor="#25162B" stopOpacity="0.85" />
                    <stop offset="95%" stopColor="#3A2434" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#4A2F3D" stopOpacity="0.95" />
                  </radialGradient>

                  {/* 2. 중간 원: 채도가 낮은 로즈핑크플럼 */}
                  <radialGradient id="midGrad" cx="50%" cy="50%" r="50%">
                    <stop offset="55%" stopColor="#3D1828" stopOpacity="0.9" />
                    <stop offset="90%" stopColor="#5E263B" stopOpacity="0.95" />
                    <stop offset="100%" stopColor="#733249" stopOpacity="1" />
                  </radialGradient>

                  {/* 3. 중심 원: 백도화의 깊은 버건디 */}
                  <radialGradient id="innerGrad" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#5E1528" stopOpacity="1" />
                    <stop offset="70%" stopColor="#4A0F1F" stopOpacity="1" />
                    <stop offset="100%" stopColor="#320813" stopOpacity="1" />
                  </radialGradient>
                </defs>

                {/* LAYER 3: 바깥 원 (후천적 선택) r = 270 */}
                <circle
                  cx="300"
                  cy="300"
                  r="270"
                  fill="url(#outerGrad)"
                  stroke="#D4B2A7"
                  strokeWidth="1.2"
                  strokeOpacity="0.35"
                  strokeDasharray="4 2"
                />
                {/* 바깥 원 텍스트 라벨 (상단 중앙 수평 정렬, 가독성 향상) */}
                <text
                  x="300"
                  y="66"
                  textAnchor="middle"
                  fill="#FFF9F2"
                  fontSize="23"
                  fontFamily="var(--font-nanum-myeongjo), serif"
                  letterSpacing="2"
                  fontWeight="700"
                  filter="url(#diagramTextShadow)"
                >
                  LAYER 03 · 후천적 선택
                </text>
                <text
                  x="300"
                  y="92"
                  textAnchor="middle"
                  fill="#EDE6DA"
                  fontSize="15"
                  fontFamily="var(--font-nanum-myeongjo), serif"
                  letterSpacing="0.5"
                  fontWeight="500"
                  opacity="0.95"
                  filter="url(#diagramTextShadow)"
                >
                  스스로 만들어 가는 나
                </text>

                {/* LAYER 2: 중간 원 (무의식 패턴) r = 185 */}
                <circle
                  cx="300"
                  cy="300"
                  r="185"
                  fill="url(#midGrad)"
                  stroke="#D4B2A7"
                  strokeWidth="1.2"
                  strokeOpacity="0.45"
                />
                {/* 중간 원 텍스트 라벨 (상단 중앙 수평 정렬, 가독성 향상) */}
                <text
                  x="300"
                  y="152"
                  textAnchor="middle"
                  fill="#FFF9F2"
                  fontSize="23"
                  fontFamily="var(--font-nanum-myeongjo), serif"
                  letterSpacing="2"
                  fontWeight="700"
                  filter="url(#diagramTextShadow)"
                >
                  LAYER 02 · 무의식 패턴
                </text>
                <text
                  x="300"
                  y="178"
                  textAnchor="middle"
                  fill="#EDE6DA"
                  fontSize="15"
                  fontFamily="var(--font-nanum-myeongjo), serif"
                  letterSpacing="0.5"
                  fontWeight="500"
                  opacity="0.95"
                  filter="url(#diagramTextShadow)"
                >
                  살아오며 형성된 나
                </text>

                {/* LAYER 1: 중심 원 (선천코드) r = 95 */}
                <circle
                  cx="300"
                  cy="300"
                  r="95"
                  fill="url(#innerGrad)"
                  stroke="#D4B2A7"
                  strokeWidth="1.5"
                  strokeOpacity="0.7"
                />
                {/* 중심 원 내부 텍스트 3줄 (장식 점 제거, 세로 밸런스 균형 정렬) */}
                <text
                  x="300"
                  y="274"
                  textAnchor="middle"
                  fill="#FFFFFF"
                  fontSize="32"
                  fontFamily="var(--font-nanum-myeongjo), serif"
                  fontWeight="700"
                  letterSpacing="1.5"
                  filter="url(#diagramTextShadow)"
                >
                  선천코드
                </text>
                <text
                  x="300"
                  y="308"
                  textAnchor="middle"
                  fill="var(--accent-gold)"
                  fontSize="19"
                  fontFamily="var(--font-nanum-myeongjo), serif"
                  fontWeight="600"
                  letterSpacing="1"
                  filter="url(#diagramTextShadow)"
                >
                  타고난 나
                </text>
                <text
                  x="300"
                  y="338"
                  textAnchor="middle"
                  fill="#EDE6DA"
                  fontSize="15"
                  fontFamily="var(--font-nanum-myeongjo), serif"
                  fontWeight="500"
                  letterSpacing="0.5"
                  opacity="0.95"
                  filter="url(#diagramTextShadow)"
                >
                  오행과 기질의 원형
                </text>
              </svg>
            </div>
          </div>
        </Reveal>

        {/* 2. 하단 3개 층위 설명 카드 분리 (동등한 위계의 3단계 구조 — 동일 배경, 동일 투명도, 동일 농도 통일) */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 w-full items-stretch">
          {/* 01. CENTER LAYER 01 — 선천코드 */}
          <Reveal delayMs={300} className="h-full">
            <div 
              className="p-6 sm:p-8 rounded-2xl border border-[rgba(212,178,167,0.3)] backdrop-blur-md shadow-[0_8px_24px_rgba(0,0,0,0.35)] h-full flex flex-col justify-between transition-all duration-300 w-full"
              style={{
                background: 'linear-gradient(135deg, rgba(72, 24, 38, 0.52) 0%, rgba(48, 16, 26, 0.46) 100%)'
              }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[12px] font-elegant font-semibold tracking-widest text-[var(--accent-gold)] uppercase">
                    CENTER LAYER 01
                  </span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent-gold)]/30 border border-[var(--accent-gold)]" />
                </div>
                <h3 className="text-xl font-elegant font-bold text-[#F5F5F5] mb-3 leading-snug">
                  01. 선천코드 — 타고난 나
                </h3>
                <p className="text-[18px] text-[#EDE6DA] opacity-85 leading-[1.7] font-light mb-6 break-keep min-h-[5.1em]">
                  명리학의 전통적 해석을 통해 자신의 기질과 성향을 탐색하고, 자신을 이해하기 위한 하나의 관점을 얻습니다.
                </p>
              </div>
              <div className="pt-5 border-t border-[rgba(216,191,163,0.2)] mt-auto">
                <ul className="text-[18px] leading-[1.7] text-[#EDE6DA] opacity-80 space-y-2.5 font-light break-keep">
                  <li><span className="text-[var(--accent-gold)] mr-1.5 font-bold">·</span>타고난 기질과 성향</li>
                  <li><span className="text-[var(--accent-gold)] mr-1.5 font-bold">·</span>오행과 명리학적 관점</li>
                  <li><span className="text-[var(--accent-gold)] mr-1.5 font-bold">·</span>관계에서 나타날 수 있는 성향과 특성</li>
                </ul>
              </div>
            </div>
          </Reveal>

          {/* 02. MIDDLE LAYER 02 — 무의식 패턴 */}
          <Reveal delayMs={400} className="h-full">
            <div 
              className="p-6 sm:p-8 rounded-2xl border border-[rgba(212,178,167,0.3)] backdrop-blur-md shadow-[0_8px_24px_rgba(0,0,0,0.35)] h-full flex flex-col justify-between transition-all duration-300 w-full"
              style={{
                background: 'linear-gradient(135deg, rgba(72, 24, 38, 0.52) 0%, rgba(48, 16, 26, 0.46) 100%)'
              }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[12px] font-elegant font-semibold tracking-widest text-[var(--accent-gold)] uppercase">
                    MIDDLE LAYER 02
                  </span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent-gold)]/30 border border-[var(--accent-gold)]" />
                </div>
                <h3 className="text-xl font-elegant font-bold text-[#F5F5F5] mb-3 leading-snug">
                  02. 무의식 패턴 — 형성된 나
                </h3>
                <p className="text-[18px] text-[#EDE6DA] opacity-85 leading-[1.7] font-light mb-6 break-keep min-h-[5.1em]">
                  살아오면서 형성된 신념과 경험, 감정 반응, 관계 습관을 돌아보며 반복되는 삶의 패턴을 이해합니다.
                </p>
              </div>
              <div className="pt-5 border-t border-[rgba(216,191,163,0.2)] mt-auto">
                <ul className="text-[18px] leading-[1.7] text-[#EDE6DA] opacity-80 space-y-2.5 font-light break-keep">
                  <li><span className="text-[var(--accent-gold)] mr-1.5 font-bold">·</span>신념과 감정 반응</li>
                  <li><span className="text-[var(--accent-gold)] mr-1.5 font-bold">·</span>애착과 관계 습관</li>
                  <li><span className="text-[var(--accent-gold)] mr-1.5 font-bold">·</span>과거의 경험과 반복되는 선택·행동</li>
                </ul>
              </div>
            </div>
          </Reveal>

          {/* 03. OUTER LAYER 03 — 후천적 선택 */}
          <Reveal delayMs={500} className="h-full">
            <div 
              className="p-6 sm:p-8 rounded-2xl border border-[rgba(212,178,167,0.3)] backdrop-blur-md shadow-[0_8px_24px_rgba(0,0,0,0.35)] h-full flex flex-col justify-between transition-all duration-300 w-full"
              style={{
                background: 'linear-gradient(135deg, rgba(72, 24, 38, 0.52) 0%, rgba(48, 16, 26, 0.46) 100%)'
              }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[12px] font-elegant font-semibold tracking-widest text-[var(--accent-gold)] uppercase">
                    OUTER LAYER 03
                  </span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent-gold)]/30 border border-[var(--accent-gold)]" />
                </div>
                <h3 className="text-xl font-elegant font-bold text-[#F5F5F5] mb-3 leading-snug">
                  03. 후천적 선택 — 만들어 가는 나
                </h3>
                <p className="text-[18px] text-[#EDE6DA] opacity-85 leading-[1.7] font-light mb-6 break-keep min-h-[5.1em]">
                  자기인식과 새로운 관점, 의식적인 선택과 행동을 통해 자신만의 가능성을 발견하고, 앞으로의 삶과 관계의 방향을 설계합니다.
                </p>
              </div>
              <div className="pt-5 border-t border-[rgba(216,191,163,0.2)] mt-auto">
                <ul className="text-[18px] leading-[1.7] text-[#EDE6DA] opacity-80 space-y-2.5 font-light break-keep">
                  <li><span className="text-[var(--accent-gold)] mr-1.5 font-bold">·</span>자기인식과 성찰, 새로운 관점</li>
                  <li><span className="text-[var(--accent-gold)] mr-1.5 font-bold">·</span>의식적인 선택과 행동</li>
                  <li><span className="text-[var(--accent-gold)] mr-1.5 font-bold">·</span>삶의 방향과 관계의 실질적 변화</li>
                </ul>
              </div>
            </div>
          </Reveal>
        </div>

        {/* 3. 하단 가로형 강조 카드 분리 (상단 3개 카드와 동일 투명도 세트 적용, 1280px 기준선 일치) */}
        <Reveal delayMs={600} className="mt-8">
          <div 
            className="text-center p-6 sm:p-8 rounded-2xl border border-[rgba(212,178,167,0.3)] backdrop-blur-md shadow-[0_8px_24px_rgba(0,0,0,0.35)] w-full"
            style={{
              background: 'linear-gradient(135deg, rgba(72, 24, 38, 0.52) 0%, rgba(48, 16, 26, 0.46) 100%)'
            }}
          >
            <p className="text-[18px] leading-[1.7] font-elegant font-medium text-[var(--accent-gold)] break-keep">
              선천적인 기질은 자기이해의 출발점이며,<br className="sm:hidden" />{' '}
              앞으로의 삶은 자신의 선택과 실천으로 만들어 가는 영역입니다.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
