'use client'

import { useState } from 'react'
import Image from 'next/image'
import Reveal from '@/components/Reveal'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { compatibilityTestimonialConfig } from './data'

// ══════════════════════════════════════════════════════════════════════
// 대표 이미지 설정: 두 사람의 기질과 인연을 읽는 궁합 비급 키 비주얼 (3:4 비율 교체 슬롯)
// ══════════════════════════════════════════════════════════════════════
const COMPATIBILITY_SCENARIOS_IMAGE_CONFIG = {
  src: '/image/compatibility/compatibility-new-relationship-chapter.webp',
  alt: '궁합 분석서와 모란 금사 장식 — 관계의 새로운 장면 대표 비주얼',
  width: 1087,
  height: 1447,
}

// ══════════════════════════════════════════════════════════════════════
// 가상 활용 시나리오 데이터 (오인 방지용 가상 사례)
// 추후 실제 고객 후기 확보 시 동일한 구조로 데이터만 교체 가능
// ══════════════════════════════════════════════════════════════════════
const SCENARIOS = [
  {
    num: '01',
    badge: '가상 사례 01 · 표현 방식의 차이',
    tag: '#표현방식',
    main: '“나는 관심이라고 생각했는데, 상대에게는 부담이었을 수도 있습니다.”',
    desc: '한 사람은 자주 연락하며 애정을 표현하고, 다른 사람은 혼자만의 시간을 필요로 합니다. 서로의 기질과 표현 방식을 이해하면서 같은 행동을 다르게 바라보는 장면입니다.',
  },
  {
    num: '02',
    badge: '가상 사례 02 · 갈등의 반복',
    tag: '#갈등패턴',
    main: '“우리는 왜 같은 문제로 계속 부딪히고 있었을까요?”',
    desc: '갈등이 생길 때 한 사람은 즉시 대화를 원하고, 다른 사람은 감정을 정리할 시간이 필요합니다. 반복되는 충돌을 누가 옳고 그른가의 문제가 아니라 서로 다른 반응 구조로 살펴보는 장면입니다.',
  },
  {
    num: '03',
    badge: '가상 사례 03 · 관계의 조율',
    tag: '#관계조율',
    main: '“서로를 바꾸려 하기보다, 다름을 이해하는 방법을 찾습니다.”',
    desc: '한쪽의 기준을 다른 사람에게 강요하는 대신, 각자의 필요와 경계를 확인하고 두 사람이 함께 지킬 수 있는 관계의 기준을 생각해 보는 장면입니다.',
  },
]

export default function CompatibilityTestimonials() {
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
          <span className="block font-elegant text-[12pt] font-semibold tracking-[0.2em] text-[#D8BB94] uppercase mb-4">
            RELATIONSHIP SCENARIOS
          </span>
          <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white mb-6 leading-[1.25] md:leading-[1.3] break-keep">
            서로의 다름을 이해하며 시작되는,<br />
            <span className="gradient-text-reunion">관계의 새로운 장면</span>
          </h2>
          <p className="text-[16px] md:text-[18px] text-[#EDE6DA]/80 leading-[1.8] font-light break-keep">
            단순히 잘 맞고 맞지 않는다는 판단을 넘어,<br className="hidden sm:inline" />{' '}
            서로의 기질과 관계의 반응을 이해할 때 어떤 선택이 가능해지는지 세 가지 장면으로 살펴봅니다.
          </p>
        </div>

        {/* 2. 2열 레이아웃: 좌측 대표 이미지 1장 (42%) + 우측 사례 카드 2개 (58%) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* 좌측: 세로형 대표 이미지 슬롯 (비단·한지 궁중 비급 무드, 3:4 세로 비율) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="group relative w-full aspect-[3/4] rounded-3xl md:rounded-[32px] overflow-hidden border border-[#B78C86]/35 shadow-2xl bg-[#14080E] flex items-center justify-center">
              <Image
                src={COMPATIBILITY_SCENARIOS_IMAGE_CONFIG.src}
                alt={COMPATIBILITY_SCENARIOS_IMAGE_CONFIG.alt}
                width={COMPATIBILITY_SCENARIOS_IMAGE_CONFIG.width}
                height={COMPATIBILITY_SCENARIOS_IMAGE_CONFIG.height}
                className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                priority
              />
            </div>
          </div>

          {/* 우측: 사례 카드 영역 (PC 세로 2개 카드 슬라이드, 모바일 1개 카드 슬라이드 + 하단 컨트롤러) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-5 lg:space-y-6">
            
            {/* 카드 묶음 */}
            <div className="flex-1 flex flex-col gap-5 lg:gap-6 justify-between">
              
              {/* 카드 1 (모바일 & PC 공통 표시) */}
              <div
                className="flex-1 gungjung-glass p-6 sm:p-7 md:p-8 rounded-3xl border border-[#B78C86]/30 relative overflow-hidden flex flex-col justify-between space-y-4 transition-all duration-300 min-h-[180px] md:min-h-[200px] backdrop-blur-md"
                style={{
                  background: 'linear-gradient(135deg, rgba(90, 38, 56, 0.40) 0%, rgba(58, 22, 35, 0.45) 100%)',
                  boxShadow: '0 8px 32px rgba(74, 31, 45, 0.20)',
                }}
              >
                {/* 상단 라벨 및 태그 */}
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex items-center justify-center py-[5px] px-[12px] rounded-[6px] text-xs font-bold text-[#FAF7F2] bg-[#5A2638] border border-[#B78C86]/60 whitespace-nowrap">
                    {currentCard.badge}
                  </span>
                  <span className="text-xs text-[#D8BB94]/75 font-mono">
                    {currentCard.tag}
                  </span>
                </div>

                {/* 메인 문장 */}
                <h3 className="text-lg sm:text-xl md:text-[21px] font-elegant font-bold text-white leading-relaxed break-keep">
                  {currentCard.main}
                </h3>

                {/* 설명 문장 */}
                <p className="text-[15px] sm:text-[16px] md:text-[17px] text-[#EDE6DA]/85 font-light leading-[1.75] break-keep">
                  {currentCard.desc}
                </p>
              </div>

              {/* 카드 2 (PC 화면 전용 세로 2번째 카드) */}
              <div
                className="hidden lg:flex flex-1 gungjung-glass p-6 sm:p-7 md:p-8 rounded-3xl border border-[#B78C86]/30 relative overflow-hidden flex-col justify-between space-y-4 transition-all duration-300 min-h-[180px] md:min-h-[200px] backdrop-blur-md"
                style={{
                  background: 'linear-gradient(135deg, rgba(90, 38, 56, 0.40) 0%, rgba(58, 22, 35, 0.45) 100%)',
                  boxShadow: '0 8px 32px rgba(74, 31, 45, 0.20)',
                }}
              >
                {/* 상단 라벨 및 태그 */}
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex items-center justify-center py-[5px] px-[12px] rounded-[6px] text-xs font-bold text-[#FAF7F2] bg-[#5A2638] border border-[#B78C86]/60 whitespace-nowrap">
                    {nextCard.badge}
                  </span>
                  <span className="text-xs text-[#D8BB94]/75 font-mono">
                    {nextCard.tag}
                  </span>
                </div>

                {/* 메인 문장 */}
                <h3 className="text-lg sm:text-xl md:text-[21px] font-elegant font-bold text-white leading-relaxed break-keep">
                  {nextCard.main}
                </h3>

                {/* 설명 문장 */}
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
                      currentIndex === idx ? 'w-6 bg-[#D8BB94]' : 'w-2 bg-white/20 hover:bg-white/40'
                    }`}
                    aria-label={`시나리오 ${idx + 1} 보기`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="p-2.5 rounded-full border border-white/10 hover:border-[#D8BB94]/50 bg-white/[0.02] hover:bg-white/[0.08] text-[#EDE6DA] transition-all"
                  aria-label="이전 시나리오"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="p-2.5 rounded-full border border-white/10 hover:border-[#D8BB94]/50 bg-white/[0.02] hover:bg-white/[0.08] text-[#EDE6DA] transition-all"
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
          ※ 위 내용은 두 사람의 관계 패턴에 대한 이해를 돕기 위한 가상 활용 시나리오이며, 실제 구매 후기나 관계 개선 결과를 보장하는 내용이 아닙니다.
        </p>
      </Reveal>
    </section>
  )
}

// ══════════════════════════════════════════════════════════════════════
// [기존 후기 데이터 보존] 추후 검증된 실구매자 후기 도입 시 참조용 데이터
// ══════════════════════════════════════════════════════════════════════
export const _ARCHIVED_COMPATIBILITY_REVIEWS = compatibilityTestimonialConfig
