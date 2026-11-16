'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Reveal from '@/components/Reveal'

export default function PersonalAnalysisMethod() {
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
    '선천 기질 해독',
    '무의식 패턴 분석',
    '실전 행동 설계'
  ]

  const analysisPhases = [
    {
      num: '01',
      title: '동양 명리학 — 선천 기질 해독',
      desc: '일간과 십성, 지장간과 배우자궁을 정밀 분석해 타고난 연애 성향과 끌림의 원형을 읽어냅니다.'
    },
    {
      num: '02',
      title: '심리학 · NLP · 무의식 — 반복 패턴 분석',
      desc: '기질 너머에 숨겨진 애착 유형, 방어기제, 무의식적 선택과 뇌에 각인된 감정 습관을 찾아냅니다.'
    },
    {
      num: '03',
      title: '뇌과학 · 브레인트레이닝 — 습관 회로 재설계',
      desc: '뇌에 익숙해진 무의식적 연애 습관과 감정 회로를 인지하고, 새로운 선택을 내리는 실전 행동 루틴을 제시합니다.'
    }
  ]

  return (
    <section id="point-02" className="mb-32 md:mb-40 scroll-mt-28 md:scroll-mt-36 pt-4 md:pt-8">
      <Reveal>
        {/* 1. 상단 전체 폭 헤더: 영문 라벨, 메인 제목, 도입 설명 (데스크톱/모바일 공통 최상단) */}
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16 space-y-4 md:space-y-5 px-4">
          <span className="inline-block font-elegant text-[12pt] font-semibold tracking-[0.2em] text-[#D9A8A7] uppercase">
            POINT 02 · THE CONVERGENCE
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-[36px] font-elegant font-bold text-white leading-[1.3] md:leading-[1.32] break-keep">
            &ldquo;명리로 타고난 코드를 읽고,<br className="hidden sm:inline" />
            <span className="gradient-text-love"> 심리와 뇌과학</span>으로{' '}
            <span className="gradient-text-love">사랑의 습관</span>을 바꿉니다.&rdquo;
          </h2>
          <div className="max-w-3xl mx-auto text-[17px] md:text-[18px] text-[#EDE6DA] opacity-90 leading-[1.8] break-keep font-light space-y-2 pt-1">
            <p>
              단순한 만세력 해석이나 자동 조합 운세와는 설계부터 다릅니다.
            </p>
            <p>
              동양 명리학으로 선천코드를 읽고, 심리학과 NLP·최면 상담, 뇌과학 기반의 습관 코칭까지,<br />
              마음과 행동을 다루는 핵심 영역을 하나로 통합해 당신의 연애를 입체적으로 해부합니다.
            </p>
          </div>

          {/* 상단 3단계 프로세스 엠블럼 (중앙 정렬 피치로즈 라인 뱃지 박스) */}
          <div className="pt-3 md:pt-5 flex justify-center px-2">
            <div className="px-3.5 sm:px-6 py-2 sm:py-2.5 rounded-full border border-[#D9A8A7]/40 bg-gradient-to-r from-[#2D0A1E]/60 via-[#180816]/75 to-[#2D0A1E]/60 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.25)] inline-flex items-center justify-center gap-1.5 sm:gap-3 md:gap-3.5 text-center">
              {steps.map((step, idx) => (
                <div key={idx} className="inline-flex items-center gap-1.5 sm:gap-3 md:gap-3.5">
                  <span
                    className={`text-[13px] sm:text-[14px] md:text-[16px] font-semibold tracking-wide break-keep transition-colors duration-500 ease-in-out ${
                      activeStep === idx
                        ? 'text-[#D9A8A7]'
                        : 'text-[#FAF7F2]/75'
                    }`}
                  >
                    {step}
                  </span>
                  {idx < steps.length - 1 && (
                    <span className="text-[#D9A8A7]/70 text-xs sm:text-sm font-bold select-none">
                      ➔
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 2. 본문 2단 구성: 데스크톱 [왼쪽: 설명 텍스트] | [오른쪽: 상단과 동일한 규격의 3:4 이미지] */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-20 items-center lg:items-stretch">
          
          {/* 왼쪽 텍스트 그룹 (데스크톱 7단 / 모바일 순서 2: 이미지 뒤에 표시 / 데스크톱 세로 균형 정렬) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6 lg:space-y-0 order-2 lg:order-1 h-full py-0.5">
            {/* 상단 그룹: 프로세스 소제목 + 3단계 해독 리스트 */}
            <div className="space-y-6 lg:space-y-7">
              {/* 프로세스 명조체 소제목 (목록과의 간격 8~12px 여유 확보) */}
              <h3 className="font-elegant font-bold text-[20px] sm:text-[22px] md:text-[24px] text-[#D9A8A7] leading-snug break-keep mb-2 sm:mb-2.5">
                당신의 사랑을 해부하는 3단계 입체 프로세스
              </h3>

              {/* 3단계 통합 해독 텍스트 리스트 */}
              <div className="space-y-5 md:space-y-6 py-1">
                {analysisPhases.map((phase, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex items-center gap-2 sm:gap-2.5">
                      <span className="text-[12.5px] sm:text-[13px] font-mono font-bold tracking-wider text-[#D9A8A7] shrink-0">
                        {phase.num}
                      </span>
                      <span className="text-[#D9A8A7]/70 text-xs">·</span>
                      <h3 className="text-base sm:text-[17px] md:text-[18px] font-bold text-white leading-snug break-keep">
                        {phase.title}
                      </h3>
                    </div>
                    <p className="text-[15px] sm:text-[16px] md:text-[16px] text-[#EDE6DA]/85 font-light leading-relaxed break-keep pl-7 sm:pl-7.5">
                      {phase.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 하단 강조 문구 박스 (데스크톱에서 이미지 하단과 시각적 정렬) */}
            <div className="p-5 md:p-6 rounded-2xl border border-[#B7788D]/25 bg-gradient-to-r from-[#2D0A1E]/30 to-[#140816]/40 backdrop-blur-sm space-y-2 mt-6 lg:mt-6">
              <p className="font-elegant font-medium text-[15px] md:text-[16px] text-[#FAF7F2] leading-relaxed break-keep">
                &ldquo;명리학의 해석과 심리·무의식에 대한 자기 이해, 뇌 습관 코칭의 관점을 함께 익혀온 경험을 바탕으로 설계했습니다.
              </p>
              <p className="font-elegant font-semibold text-[15px] md:text-[16px] text-[#D9A8A7] leading-relaxed break-keep">
                단편적인 운세 설명을 넘어, 당신의 연애를 여러 각도에서 이해할 수 있도록 돕는 심층 분석서입니다.&rdquo;
              </p>
            </div>
          </div>

          {/* 오른쪽 3:4 세로 이미지 (데스크톱 5단 / 모바일 순서 1: 상단 POINT 01과 동일한 크기 규격 적용) */}
          <div className="lg:col-span-5 relative group flex flex-col order-1 lg:order-2 mb-8 lg:mb-0 justify-start">
            <div className="relative aspect-[3/4] w-full max-w-sm sm:max-w-md lg:max-w-none mx-auto rounded-[28px] md:rounded-[36px] overflow-hidden border border-white/10 shadow-2xl bg-[#130917]">
              <Image 
                src="/image/lovereport/love%20code%20mind%20connection.webp" 
                alt="POINT 02 융합 분석 — 동양명리학, 심리학, 뇌과학" 
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
