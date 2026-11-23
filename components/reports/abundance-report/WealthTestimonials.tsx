'use client'

import { useState } from 'react'
import Image from 'next/image'
import Reveal from '@/components/Reveal'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { wealthTestimonialConfig } from './data'

// ══════════════════════════════════════════════════════════════════════
// 대표 이미지 설정: 나의 풍요와 선택의 흐름을 읽는 비급 키 비주얼 (3:4 비율 교체 슬롯)
// ══════════════════════════════════════════════════════════════════════
const WEALTH_SCENARIOS_IMAGE_CONFIG = {
  src: '/image/abundance/baekdohwa-wealth-review-left-visual.webp',
  alt: '백도화 선천코드 풍요 리포트 후기 대표 이미지',
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
    badge: '가상 사례 01 · 돈에 대한 감정',
    tag: '#돈의감정',
    main: '“돈을 모으고 있으면서도, 왜 늘 부족하다고 느꼈을까요?”',
    desc: '자산이 조금씩 쌓여도 불안이 쉽게 사라지지 않는 사람이 있습니다. 금액뿐 아니라 돈에 대한 감정과 경험을 돌아보면서 자신의 불안 패턴을 이해하는 장면입니다.',
  },
  {
    num: '02',
    badge: '가상 사례 02 · 반복되는 선택',
    tag: '#선택패턴',
    main: '“기회를 앞에 두고, 나는 왜 늘 같은 선택을 했을까요?”',
    desc: '새로운 가능성 앞에서 익숙한 방식으로 반응하던 사람이 자신의 판단 기준을 돌아봅니다. 신중함과 두려움을 구별하고, 상황에 맞는 선택의 기준을 생각해 보는 장면입니다.',
  },
  {
    num: '03',
    badge: '가상 사례 03 · 나만의 풍요 기준',
    tag: '#풍요기준',
    main: '“남의 성공 공식을 따라가기보다, 나에게 맞는 방향을 찾습니다.”',
    desc: '누군가에게 효과적이었던 방법이 모든 사람에게 맞는 것은 아닙니다. 자신의 기질과 현실적 여건을 살펴보며 지속 가능한 자원 활용과 실천 방향을 생각해 보는 장면입니다.',
  },
]

export default function WealthTestimonials() {
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
    <section className="mt-[64px] sm:mt-[88px] lg:mt-[120px] mb-28 md:mb-36 text-left w-full max-w-[1280px] mx-auto">
      <Reveal className="w-full">
        {/* 1. 섹션 헤더 (타이틀 영역) */}
        <div className="text-center max-w-3xl mx-auto space-y-4 md:space-y-5 mb-12 md:mb-16">
          <span className="block font-elegant text-[12pt] font-semibold tracking-[0.2em] text-[#8FB4A4] uppercase mb-4">
            ABUNDANCE SCENARIOS
          </span>
          <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white mb-6 leading-[1.25] md:leading-[1.3] break-keep">
            나의 선택을 이해하며 시작되는,<br />
            <span className="gradient-text-abundance">풍요의 새로운 장면</span>
          </h2>
          <p className="text-[16px] md:text-[18px] text-[#EDE6DA]/80 leading-[1.8] font-light break-keep">
            막연한 금전운이나 수익 약속이 아니라,<br className="hidden sm:inline" />{' '}
            돈을 대하는 태도와 반복되는 선택을 이해하기 시작할 때<br className="hidden sm:inline" />{' '}
            어떤 변화의 가능성이 열리는지 세 가지 장면으로 살펴봅니다.
          </p>
        </div>

        {/* 2. 2열 레이아웃: 좌측 대표 이미지 1장 (42%) + 우측 사례 카드 2개 (58%) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* 좌측: 세로형 대표 이미지 슬롯 (비단·한지 궁중 비급 무드, 3:4 세로 비율) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="group relative w-full aspect-[3/4] rounded-3xl md:rounded-[32px] overflow-hidden border border-[#608F82]/35 shadow-2xl bg-[#0B1514] flex items-center justify-center">
              <Image
                src={WEALTH_SCENARIOS_IMAGE_CONFIG.src}
                alt={WEALTH_SCENARIOS_IMAGE_CONFIG.alt}
                width={WEALTH_SCENARIOS_IMAGE_CONFIG.width}
                height={WEALTH_SCENARIOS_IMAGE_CONFIG.height}
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
                className="flex-1 gungjung-glass p-6 sm:p-7 md:p-8 rounded-3xl border border-[#608F82]/35 relative overflow-hidden flex flex-col justify-between space-y-4 transition-all duration-300 min-h-[180px] md:min-h-[200px]"
                style={{
                  background: 'linear-gradient(135deg, rgba(37, 68, 59, 0.35) 0%, rgba(11, 21, 20, 0.90) 100%)',
                  boxShadow: '0 8px 32px rgba(37, 68, 59, 0.15)',
                }}
              >
                {/* 상단 라벨 및 태그 */}
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex items-center justify-center py-[5px] px-[12px] rounded-[6px] text-xs font-bold text-[#FAF7F2] bg-[#25443B] border border-[#8FD3B6]/60 whitespace-nowrap">
                    {currentCard.badge}
                  </span>
                  <span className="text-xs text-[#E6BE8A]/75 font-mono">
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
                className="hidden lg:flex flex-1 gungjung-glass p-6 sm:p-7 md:p-8 rounded-3xl border border-[#608F82]/35 relative overflow-hidden flex-col justify-between space-y-4 transition-all duration-300 min-h-[180px] md:min-h-[200px]"
                style={{
                  background: 'linear-gradient(135deg, rgba(37, 68, 59, 0.35) 0%, rgba(11, 21, 20, 0.90) 100%)',
                  boxShadow: '0 8px 32px rgba(37, 68, 59, 0.15)',
                }}
              >
                {/* 상단 라벨 및 태그 */}
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex items-center justify-center py-[5px] px-[12px] rounded-[6px] text-xs font-bold text-[#FAF7F2] bg-[#25443B] border border-[#8FD3B6]/60 whitespace-nowrap">
                    {nextCard.badge}
                  </span>
                  <span className="text-xs text-[#E6BE8A]/75 font-mono">
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
                      currentIndex === idx ? 'w-6 bg-[#8FB4A4]' : 'w-2 bg-white/20 hover:bg-white/40'
                    }`}
                    aria-label={`시나리오 ${idx + 1} 보기`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="p-2.5 rounded-full border border-white/10 hover:border-[#8FB4A4]/50 bg-white/[0.02] hover:bg-white/[0.08] text-[#EDE6DA] transition-all"
                  aria-label="이전 시나리오"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="p-2.5 rounded-full border border-white/10 hover:border-[#8FB4A4]/50 bg-white/[0.02] hover:bg-white/[0.08] text-[#EDE6DA] transition-all"
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
          ※ 위 내용은 재정 선택과 행동 패턴에 대한 이해를 돕기 위한 가상 활용 시나리오이며, 실제 구매 후기나 수익·재정 성과를 보장하는 내용이 아닙니다.
        </p>
      </Reveal>
    </section>
  )
}

// ══════════════════════════════════════════════════════════════════════
// [기존 후기 데이터 보존] 추후 검증된 실구매자 후기 도입 시 참조용 데이터
// ══════════════════════════════════════════════════════════════════════
export const _ARCHIVED_WEALTH_REVIEWS = wealthTestimonialConfig
