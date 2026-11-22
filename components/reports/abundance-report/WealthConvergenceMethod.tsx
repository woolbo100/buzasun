'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Reveal from '@/components/Reveal'

export default function WealthConvergenceMethod() {
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    // prefers-reduced-motion 환경에서는 애니메이션 실행하지 않고 정적 표시
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
      if (mediaQuery.matches) return
    }

    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 3)
    }, 2000)

    return () => clearInterval(timer)
  }, [])

  const steps = [
    '선천 재물 기질 해독',
    '돈의 무의식적 패턴 분석',
    '현실 실천 방향 설계'
  ]

  const analysisPhases = [
    {
      num: '01',
      title: '동양 명리학 — 선천 재물 기질 해독',
      desc: '일간과 십성, 오행으로 타고난 재물 성향과 자원을 활용하는 기질을 읽고, 나에게 맞는 수익 방식의 기초를 세웁니다.'
    },
    {
      num: '02',
      title: '심리와 무의식 — 반복 패턴 분석',
      desc: '돈 앞에서 반복되는 불안과 결핍감, 기회를 미루거나 흘려보내는 무의식적 반응의 진짜 원인을 짚어냅니다.'
    },
    {
      num: '03',
      title: '현실 행동 분석 — 풍요 습관 재설계',
      desc: '선천 기질과 심리 패턴을 현실의 수입·지출과 연결해, 일상에 바로 적용할 나만의 풍요 기준과 실천 방향을 잡습니다.'
    }
  ]

  return (
    <section id="point-02-convergence" className="mb-20 md:mb-28 scroll-mt-28 md:scroll-mt-36 pt-4 md:pt-8">
      <Reveal>
        {/* 1. 상단 전체 폭 헤더: 영문 라벨, 메인 제목, 도입 설명 (데스크톱/모바일 공통 최상단) */}
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16 space-y-4 md:space-y-5 px-4">
          <span className="inline-block font-elegant text-[12pt] font-semibold tracking-[0.2em] text-[#8FD3B6] uppercase">
            POINT 02 · THE CONVERGENCE
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-[36px] font-elegant font-bold text-white leading-[1.3] md:leading-[1.32] break-keep">
            &ldquo;명리로 타고난 <span className="gradient-text-abundance">재물 코드</span>를 읽고,<br className="hidden sm:inline" />
            <span className="gradient-text-abundance"> 심리와 행동 분석</span>으로{' '}
            <span className="gradient-text-abundance">돈의 습관</span>을 살펴봅니다.&rdquo;
          </h2>
          <div className="max-w-3xl mx-auto text-[17px] md:text-[18px] text-[#EDE6DA] opacity-85 leading-[1.8] break-keep font-light space-y-2 pt-1">
            <p>
              단순한 재물운 해석이나 일반적인 재테크 조언과는 접근 방식부터 다릅니다.
            </p>
            <p>
              동양 명리학으로 선천적인 재물 성향을 읽고,<br className="hidden sm:inline" />
              돈 앞에서 반복되는 심리적 반응과 현실의 행동 습관을 함께 살펴보며 나에게 맞는 풍요의 방향을 탐색합니다.
            </p>
          </div>

          {/* 상단 3단계 프로세스 엠블럼 (중앙 정렬 옥빛 라인 뱃지 박스) */}
          <div className="pt-3 md:pt-5 flex justify-center px-2">
            <div className="px-3.5 sm:px-6 py-2 sm:py-2.5 rounded-full border border-[#608F82]/40 bg-gradient-to-r from-[#142B24]/70 via-[#0B1514]/80 to-[#142B24]/70 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.35)] inline-flex items-center justify-center gap-1.5 sm:gap-3 md:gap-3.5 text-center">
              {steps.map((step, idx) => (
                <div key={idx} className="inline-flex items-center gap-1.5 sm:gap-3 md:gap-3.5">
                  <span
                    className={`text-[13px] sm:text-[14px] md:text-[16px] font-semibold tracking-wide break-keep transition-colors duration-500 ease-in-out ${
                      activeStep === idx
                        ? 'text-[#8FD3B6]'
                        : 'text-[#FAF7F2]/75'
                    }`}
                  >
                    {step}
                  </span>
                  {idx < steps.length - 1 && (
                    <span className="text-[#8FD3B6]/70 text-xs sm:text-sm font-bold select-none">
                      ➔
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 2. 본문 2단 구성: 데스크톱 [왼쪽: 설명 텍스트] | [오른쪽: 3:4 세로 이미지] */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-20 items-center lg:items-stretch">
          
          {/* 왼쪽 텍스트 그룹 (데스크톱 7단 / 모바일 순서 2: 이미지 뒤에 표시) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6 lg:space-y-0 order-2 lg:order-1 h-full py-0.5">
            {/* 상단 그룹: 프로세스 소제목 + 3단계 해독 리스트 */}
            <div className="space-y-6 lg:space-y-7">
              {/* 프로세스 소제목 */}
              <h3 className="font-elegant font-bold text-[20px] sm:text-[22px] md:text-[24px] text-[#E5C378] leading-snug break-keep mb-2 sm:mb-2.5">
                당신의 풍요를 해부하는 3단계 입체 프로세스
              </h3>

              {/* 3단계 통합 해독 텍스트 리스트 */}
              <div className="space-y-5 md:space-y-6 py-1">
                {analysisPhases.map((phase, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex items-center gap-2 sm:gap-2.5">
                      <span className="text-[12.5px] sm:text-[13px] font-mono font-bold tracking-wider text-[#E5C378] shrink-0">
                        {phase.num}
                      </span>
                      <span className="text-[#8FD3B6]/70 text-xs">·</span>
                      <h4 className="text-base sm:text-[17px] md:text-[18px] font-bold text-white leading-snug break-keep">
                        {phase.title}
                      </h4>
                    </div>
                    <p className="text-[16px] sm:text-[17px] md:text-[18px] text-[#EDE6DA]/85 font-light leading-relaxed break-keep pl-7 sm:pl-7.5">
                      {phase.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 하단 강조 문구 박스 */}
            <div className="p-5 md:p-6 rounded-2xl border border-[#608F82]/30 bg-gradient-to-r from-[#142B24]/40 to-[#0B1514]/55 backdrop-blur-sm space-y-2 mt-6 lg:mt-6">
              <p className="font-elegant font-medium text-[15px] md:text-[16px] text-[#FAF7F2] leading-relaxed break-keep">
                &ldquo;명리학의 선천 기질 해석과 돈 앞의 심리·행동 패턴을 함께 살펴보는 통합 분석입니다.
              </p>
              <p className="font-elegant font-semibold text-[15px] md:text-[16px] text-[#E5C378] leading-relaxed break-keep">
                단편적인 재물운 풀이를 넘어, 나의 재물 성향과 반복되는 선택을 여러 관점에서 입체적으로 이해하도록 돕습니다.&rdquo;
              </p>
              <p className="text-[12.5px] sm:text-[13px] text-[#8FB4A4]/75 font-light leading-relaxed break-keep pt-2.5 mt-2 border-t border-[#608F82]/20">
                ※ 심리·행동 분석은 고객의 실제 입력 정보와 리포트에서 제공하는 분석 범위 안에서 표현합니다. 임상적 진단이나 과학적으로 검증된 개인 심리 측정이라고 주장하지 않습니다.
              </p>
            </div>
          </div>

          {/* 오른쪽 3:4 세로 이미지 (데스크톱 5단 / 모바일 순서 1) */}
          <div className="lg:col-span-5 relative group flex flex-col order-1 lg:order-2 mb-8 lg:mb-0 justify-start">
            <div className="relative aspect-[3/4] w-full max-w-sm sm:max-w-md lg:max-w-none mx-auto rounded-[28px] md:rounded-[36px] overflow-hidden border border-[#608F82]/25 shadow-2xl bg-[#0F201B]">
              <Image 
                src="/images/abundance/wealth-point-02-integrated-analysis.webp" 
                alt="POINT 02 융합 분석 — 동양명리학 + 심리학 + 뇌과학" 
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]" 
              />
            </div>
          </div>

        </div>
      </Reveal>
    </section>
  )
}
