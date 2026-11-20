'use client'

import { useState } from 'react'
import Image from 'next/image'
import Reveal from '@/components/Reveal'
import { ChevronLeft, ChevronRight } from 'lucide-react'

// ══════════════════════════════════════════════════════════════════════
// 대표 이미지 설정 (추후 정식 이미지 파일로 손쉽게 교체 가능)
// ══════════════════════════════════════════════════════════════════════
const SCENARIOS_IMAGE_CONFIG = {
  src: '/image/lovereport/the hidden love report.webp',
  alt: '백도화 선천코드 관계 활용 시나리오 대표 비주얼',
  width: 1086,
  height: 1448,
}

// ══════════════════════════════════════════════════════════════════════
// 가상 활용 시나리오 데이터 (오인 방지용 가상 사례)
// 추후 실제 고객 후기 확보 시 동일한 구조로 데이터만 교체 가능
// ══════════════════════════════════════════════════════════════════════
const SCENARIOS = [
  {
    num: '01',
    badge: '가상 사례 01 · 반복 패턴의 발견',
    tag: '#반복패턴_자각',
    main: '“상대는 달라졌는데, 왜 나의 연애는 늘 같은 방향으로 흘러갔을까요?”',
    desc: '상대의 행동만 이해하려 애쓰던 사람이 자신의 끌림과 관계 반응을 돌아보고, 반복되는 선택을 새롭게 바라보기 시작하는 이야기.',
  },
  {
    num: '02',
    badge: '가상 사례 02 · 감정의 주도권',
    tag: '#감정의_주도권',
    main: '“상대의 연락 하나에 흔들리던 마음, 이제는 나의 기준부터 살펴봅니다.”',
    desc: '불안할수록 상대의 반응을 확인하려 했던 사람이 자신의 감정을 먼저 이해하고, 관계 안에서 지킬 경계를 생각해 보는 이야기.',
  },
  {
    num: '03',
    badge: '가상 사례 03 · 나만의 선택 기준',
    tag: '#나만의_선택기준',
    main: '“사랑받는 방법보다, 내가 원하는 사랑이 무엇인지 먼저 알아야 했습니다.”',
    desc: '상대에게 맞추는 데 익숙했던 사람이 타고난 기질과 자신의 가치관을 돌아보고, 앞으로 어떤 관계를 선택할지 기준을 세우는 이야기.',
  },
]

export default function ReportTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? SCENARIOS.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % SCENARIOS.length)
  }

  const currentCard = SCENARIOS[currentIndex]
  const nextCard = SCENARIOS[(currentIndex + 1) % SCENARIOS.length]

  return (
    <section className="mb-28 md:mb-36 text-left w-full max-w-[1280px] mx-auto px-4 sm:px-6">
      <Reveal>
        {/* 1. 섹션 헤더 (타이틀 영역) */}
        <div className="text-center max-w-3xl mx-auto space-y-4 md:space-y-5 mb-12 md:mb-16">
          <span className="block font-elegant text-xs md:text-sm font-semibold tracking-[0.25em] text-[#D9A8A7] uppercase">
            RELATIONSHIP SCENARIOS
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-[36px] font-elegant font-bold text-white tracking-wide leading-[1.35] break-keep">
            선천코드를 이해하며 시작되는,<br className="sm:hidden" />{' '}
            <span className="gradient-text-love">관계의 새로운 장면</span>
          </h2>
          <p className="text-[16px] md:text-[18px] text-[#EDE6DA]/80 leading-[1.8] font-light break-keep">
            막연한 위로를 넘어, 나의 관계 패턴을 이해하기 시작할 때<br className="hidden sm:inline" />{' '}
            어떤 선택이 가능해지는지 세 가지 장면으로 살펴봅니다.
          </p>
        </div>

        {/* 2. 2열 레이아웃: 좌측 대표 이미지 1장 (42%) + 우측 사례 카드 2개 (58%) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* 좌측: 세로형 대표 이미지 슬롯 (비단·한지 궁중 비급 무드) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="group relative w-full aspect-[3/4] rounded-3xl md:rounded-[32px] overflow-hidden border border-[#D5AFAD]/30 shadow-2xl bg-[#1a0b1c] flex items-center justify-center">
              <Image
                src={SCENARIOS_IMAGE_CONFIG.src}
                alt={SCENARIOS_IMAGE_CONFIG.alt}
                width={SCENARIOS_IMAGE_CONFIG.width}
                height={SCENARIOS_IMAGE_CONFIG.height}
                className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                priority
              />
              {/* 은은한 톤다운 비네팅 오버레이 */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#130917]/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-5 right-5 text-center">
                <span className="inline-block px-3.5 py-1 rounded-full text-[11px] md:text-xs font-elegant font-medium tracking-[0.2em] bg-[#130917]/70 backdrop-blur-md border border-[#D5AFAD]/40 text-[#FAF6EE]">
                  SEONCHEON CODE SCENARIO
                </span>
              </div>
            </div>
          </div>

          {/* 우측: 사례 카드 영역 (PC 세로 2개 카드 슬라이드, 모바일 1개 카드 슬라이드 + 하단 컨트롤러) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-5 lg:space-y-6">
            
            {/* 카드 묶음 */}
            <div className="flex-1 flex flex-col gap-5 lg:gap-6 justify-between">
              
              {/* 카드 1 (모바일 & PC 공통 표시) */}
              <div
                className="flex-1 gungjung-glass p-6 sm:p-7 md:p-8 rounded-3xl border border-[#B7788D]/35 relative overflow-hidden flex flex-col justify-between space-y-4 transition-all duration-300 min-h-[180px] md:min-h-[200px]"
                style={{
                  background: 'linear-gradient(135deg, rgba(139, 38, 62, 0.22) 0%, rgba(20, 8, 18, 0.85) 100%)',
                  boxShadow: '0 8px 32px rgba(186, 141, 126, 0.12)',
                }}
              >
                {/* 상단 라벨 및 태그 */}
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex items-center justify-center py-[5px] px-[12px] rounded-[6px] text-xs font-bold text-[#FFF1E9] bg-[#87465B] border border-[#D5AFAD] whitespace-nowrap">
                    {currentCard.badge}
                  </span>
                  <span className="text-xs text-[#D4B2A7]/70 font-mono">
                    {currentCard.tag}
                  </span>
                </div>

                {/* 메인 문장 (20~22px 수준) */}
                <h3 className="text-lg sm:text-xl md:text-[21px] font-elegant font-bold text-white leading-relaxed break-keep">
                  {currentCard.main}
                </h3>

                {/* 설명 문장 (16~18px 수준) */}
                <p className="text-[15px] sm:text-[16px] md:text-[17px] text-[#EDE6DA]/85 font-light leading-[1.75] break-keep">
                  {currentCard.desc}
                </p>
              </div>

              {/* 카드 2 (PC 화면 전용 세로 2번째 카드) */}
              <div
                className="hidden lg:flex flex-1 gungjung-glass p-6 sm:p-7 md:p-8 rounded-3xl border border-[#B7788D]/35 relative overflow-hidden flex-col justify-between space-y-4 transition-all duration-300 min-h-[180px] md:min-h-[200px]"
                style={{
                  background: 'linear-gradient(135deg, rgba(139, 38, 62, 0.22) 0%, rgba(20, 8, 18, 0.85) 100%)',
                  boxShadow: '0 8px 32px rgba(186, 141, 126, 0.12)',
                }}
              >
                {/* 상단 라벨 및 태그 */}
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex items-center justify-center py-[5px] px-[12px] rounded-[6px] text-xs font-bold text-[#FFF1E9] bg-[#87465B] border border-[#D5AFAD] whitespace-nowrap">
                    {nextCard.badge}
                  </span>
                  <span className="text-xs text-[#D4B2A7]/70 font-mono">
                    {nextCard.tag}
                  </span>
                </div>

                {/* 메인 문장 (20~22px 수준) */}
                <h3 className="text-lg sm:text-xl md:text-[21px] font-elegant font-bold text-white leading-relaxed break-keep">
                  {nextCard.main}
                </h3>

                {/* 설명 문장 (16~18px 수준) */}
                <p className="text-[15px] sm:text-[16px] md:text-[17px] text-[#EDE6DA]/85 font-light leading-[1.75] break-keep">
                  {nextCard.desc}
                </p>
              </div>

            </div>

            {/* 하단 컨트롤러: 인디케이터 점 + 전환 화살표 */}
            <div className="flex items-center justify-between pt-2 px-1">
              <div className="flex items-center gap-2">
                {SCENARIOS.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentIndex === idx ? 'w-6 bg-[#D4B2A7]' : 'w-2 bg-white/20 hover:bg-white/40'
                    }`}
                    aria-label={`시나리오 ${idx + 1} 보기`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="p-2.5 rounded-full border border-white/10 hover:border-[#D4B2A7]/50 bg-white/[0.02] hover:bg-white/[0.08] text-[#EDE6DA] transition-all"
                  aria-label="이전 시나리오"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="p-2.5 rounded-full border border-white/10 hover:border-[#D4B2A7]/50 bg-white/[0.02] hover:bg-white/[0.08] text-[#EDE6DA] transition-all"
                  aria-label="다음 시나리오"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

        </div>

        {/* 3. 영역 하단: 오인 방지 가상 시나리오 안내 문구 */}
        <p className="text-xs sm:text-[13px] text-[#EDE6DA]/55 font-light text-center mt-10 md:mt-12 break-keep">
          ※ 위 내용은 관계 패턴에 대한 이해를 돕기 위한 가상 활용 시나리오이며, 실제 구매 후기나 결과 보장을 의미하지 않습니다.
        </p>
      </Reveal>
    </section>
  )
}
