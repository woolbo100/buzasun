'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Reveal from '@/components/Reveal'
import { BookOpen, Compass, ClipboardCheck, Shuffle } from 'lucide-react'

export default function CompatibilityAnalysisMethod() {
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
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
    '선천 관계 기질 해독',
    '감정·갈등 패턴 분석',
    '실전 관계 조율 설계'
  ]

  const analysisPhases = [
    {
      num: '01',
      title: '동양 명리학 — 선천 관계 기질 해독',
      desc: '두 사람의 일간과 오행, 십성, 배우자궁 등 선천적 요소를 살펴보고 관계에서 나타나는 기질적 차이와 상호작용의 기초를 읽습니다.'
    },
    {
      num: '02',
      title: '관계심리 — 반복되는 감정·갈등 패턴 분석',
      desc: '서로 다른 애정 표현과 기대, 방어 반응, 감정적 거리감 등을 함께 살펴보며 같은 문제가 반복되는 관계의 흐름을 분석합니다.'
    },
    {
      num: '03',
      title: '실전 관계 설계 — 소통과 조율 행동 처방',
      desc: '선천 기질과 감정 반응의 차이를 실제 대화와 선택에 연결해, 두 사람이 일상에서 활용할 수 있는 소통 방식과 갈등 조율 방향을 제안합니다.'
    }
  ]

  const studies = [
    {
      num: 'STUDY 01',
      title: '선천 관계 구조 분석',
      desc: '일간·오행·십성과 배우자궁 등 두 사람의 선천 요소를 함께 살펴보고, 관계에서 나타나는 기질적 차이와 상호작용의 기준을 정리합니다.',
      icon: <BookOpen className="w-6 h-6 text-[#D8BB94]" />
    },
    {
      num: 'STUDY 02',
      title: '감정·갈등 패턴 탐구',
      desc: '서로 다른 기대와 애정 표현, 방어 반응과 반복되는 갈등의 흐름을 관계심리의 관점에서 살펴봅니다.',
      icon: <Compass className="w-6 h-6 text-[#D8BB94]" />
    },
    {
      num: 'STUDY 03',
      title: '궁합 특화 분석 기준서',
      desc: '일반적인 길흉 판단을 넘어 끌림, 충돌, 정서적 요구, 소통과 조율 등 관계에 집중한 분석 항목을 구성했습니다.',
      icon: <ClipboardCheck className="w-6 h-6 text-[#D8BB94]" />
    },
    {
      num: 'STUDY 04',
      title: '실전 관계 행동 처방',
      desc: '분석 내용을 실제 대화와 갈등 조율, 감정 표현, 관계의 선택에 연결하여 일상에서 적용할 수 있는 행동 방향을 제안합니다.',
      icon: <Shuffle className="w-6 h-6 text-[#D8BB94]" />
    }
  ]

  return (
    <section id="point-02" className="mb-32 md:mb-40 scroll-mt-28 md:scroll-mt-36 pt-4 md:pt-8 w-full max-w-[1280px] mx-auto">
      {/* ══════════════════════════════════════════════════════════════════ */}
      {/* 영역 ① THE CONVERGENCE & 영역 ② 3단계 입체 분석 프로세스 */}
      {/* ══════════════════════════════════════════════════════════════════ */}
      <Reveal className="w-full">
        {/* 1. 상단 전체 폭 헤더: 영문 라벨, 메인 제목, 도입 설명, 3단계 캡슐 애니메이션 */}
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16 space-y-4 md:space-y-5 px-4">
          <span className="inline-block font-elegant text-[12pt] font-semibold tracking-[0.2em] text-[#D8BB94] uppercase">
            POINT 02 · THE CONVERGENCE
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-[36px] font-elegant font-bold text-white leading-[1.3] md:leading-[1.32] break-keep">
            명리로 두 사람의 <span className="gradient-text-reunion">선천 기질</span>을 읽고,<br className="hidden sm:inline" />
            <span className="gradient-text-reunion">관계심리와 행동 분석</span>으로{' '}
            <span className="gradient-text-reunion">서로의 반응 패턴</span>을 살펴봅니다.
          </h2>
          <div className="max-w-3xl mx-auto text-[17px] md:text-[18px] text-[#EDE6DA] opacity-85 leading-[1.8] break-keep font-light space-y-2 pt-1">
            <p>
              단순히 궁합의 좋고 나쁨을 판단하는 방식과는 접근부터 다릅니다.
            </p>
            <p>
              두 사람의 타고난 기질과 감정 표현의 차이를 살펴보고,<br className="hidden sm:inline" />
              관계에서 반복되는 충돌과 소통 방식을 함께 분석하여<br className="hidden sm:inline" />
              서로를 이해하고 조율할 수 있는 방향을 찾아갑니다.
            </p>
          </div>

          {/* 상단 3단계 프로세스 캡슐 애니메이션 뱃지 */}
          <div className="pt-3 md:pt-5 flex justify-center px-2">
            <div className="px-3.5 sm:px-6 py-2 sm:py-2.5 rounded-full border border-[#B78C86]/40 bg-gradient-to-r from-[#4A1F2D]/70 via-[#1A0A12]/80 to-[#4A1F2D]/70 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.35)] inline-flex items-center justify-center gap-1.5 sm:gap-3 md:gap-3.5 text-center">
              {steps.map((step, idx) => (
                <div key={idx} className="inline-flex items-center gap-1.5 sm:gap-3 md:gap-3.5">
                  <span
                    className={`text-[13px] sm:text-[14px] md:text-[16px] font-semibold tracking-wide break-keep transition-colors duration-500 ease-in-out ${
                      activeStep === idx
                        ? 'text-[#D8BB94]'
                        : 'text-white/80'
                    }`}
                  >
                    {step}
                  </span>
                  {idx < steps.length - 1 && (
                    <span className="text-[#D8BB94]/70 text-xs sm:text-sm font-bold select-none">
                      ➔
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 2. 본문 2단 구성: 데스크톱 [왼쪽: 설명 텍스트 + 강조 박스] | [오른쪽: 3:4 세로 이미지] */}
        <div className="w-full max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-20 items-center lg:items-stretch mb-28 md:mb-36">
          {/* 왼쪽 텍스트 그룹 (데스크톱 7단 / 모바일 순서 1: 설명 우선 표시) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6 lg:space-y-0 order-1 lg:order-1 h-full py-0.5">
            {/* 상단 그룹: 프로세스 소제목 + 3단계 해독 리스트 */}
            <div className="space-y-6 lg:space-y-7">
              {/* 프로세스 소제목 */}
              <h3 className="font-elegant font-bold text-[20px] sm:text-[22px] md:text-[24px] text-[#D8BB94] leading-snug break-keep mb-2 sm:mb-2.5">
                두 사람의 관계를 해독하는 3단계 입체 프로세스
              </h3>

              {/* 3단계 통합 해독 텍스트 리스트 */}
              <div className="space-y-5 md:space-y-6 py-1">
                {analysisPhases.map((phase, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex items-center gap-2 sm:gap-2.5">
                      <span className="text-[12.5px] sm:text-[13px] font-mono font-bold tracking-wider text-[#D8BB94] shrink-0">
                        {phase.num}
                      </span>
                      <span className="text-[#B78C86]/70 text-xs">·</span>
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

            {/* 좌측 하단 강조 박스 */}
            <div className="p-5 md:p-6 rounded-2xl border border-[#B78C86]/30 bg-gradient-to-r from-[#4A1F2D]/40 to-[#180A14]/55 backdrop-blur-sm space-y-2 mt-7 md:mt-8 lg:mt-8">
              <p className="font-elegant font-medium text-[15px] md:text-[16px] text-[#FAF7F2] leading-relaxed break-keep">
                &ldquo;선천코드로 두 사람의 기질을 읽고,<br className="hidden md:inline" />{' '}
                관계심리의 관점으로 반복되는 감정을 살펴봅니다.
              </p>
              <p className="font-elegant font-semibold text-[15px] md:text-[16px] text-[#D8BB94] leading-relaxed break-keep">
                단순한 궁합 점수를 넘어, 서로의 다름을 이해하고<br className="hidden md:inline" />{' '}
                관계의 선택을 바꿀 수 있도록 돕는 통합 심층 분석입니다.&rdquo;
              </p>
            </div>
          </div>

          {/* 오른쪽 3:4 세로 대표 이미지 (데스크톱 5단 / 모바일 순서 2: 설명 뒤에 배치) */}
          <div className="lg:col-span-5 relative group flex flex-col order-2 lg:order-2 mt-8 lg:mt-0 justify-start">
            <div className="relative aspect-[3/4] w-full max-w-sm sm:max-w-md lg:max-w-none mx-auto rounded-[28px] md:rounded-[36px] overflow-hidden border border-[#B78C86]/30 shadow-2xl bg-[#14080E]">
              <Image 
                src="/image/compatibility/compatibility-point02-convergence.webp" 
                alt="선천코드 프리미엄 궁합 리포트 POINT 02 융합 분석 — 동양명리학 + 관계심리학 + 실전 관계 설계" 
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-contain object-top transition-transform duration-700 group-hover:scale-[1.02]" 
              />
            </div>
          </div>
        </div>
      </Reveal>

      {/* ══════════════════════════════════════════════════════════════════ */}
      {/* 영역 ③ PRECISION & RESEARCH (전문성 및 연구 기준 소개 STUDY 01~04) */}
      {/* ══════════════════════════════════════════════════════════════════ */}
      <Reveal className="w-full">
        <div className="max-w-4xl mx-auto text-center mb-14">
          <span className="block font-elegant text-[12pt] font-semibold tracking-[0.2em] text-[#D8BB94] uppercase mb-4">
            PRECISION & RESEARCH
          </span>
          <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white mb-6 leading-[1.28] md:leading-[1.32] break-keep">
            한 권의 궁합 리포트가 완성되기까지,<br />
            <span className="gradient-text-reunion">두 사람의 관계를 이해하기 위한 수많은 질문</span>을 담았습니다.
          </h2>
          <div className="max-w-3xl mx-auto text-[17px] md:text-[18px] text-[#EDE6DA] opacity-85 font-light leading-relaxed break-keep space-y-3 md:space-y-3.5">
            <p>
              백도화의 선천코드 궁합 리포트는 단순한 궁합 점수를 제시하는 결과물이 아닙니다.
            </p>
            <p>
              두 사람의 선천 기질을 살펴보고 <strong className="text-[#D8BB94] font-semibold">반복되는 감정 반응과 갈등 패턴</strong>을 연결하여,<br className="hidden sm:inline" />
              관계를 이해하기 위한 질문을 체계적으로 정리했습니다.
            </p>
            <p>
              이를 바탕으로 두 사람의 관계에 집중한 <strong className="text-[#D8BB94] font-semibold">분석 체계와 실전 행동 처방 구조</strong>를 마련했습니다.
            </p>
          </div>
        </div>

        {/* 4개 연구 및 분석 기준 그리드 (STUDY 01~04) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-[1280px] mx-auto">
          {studies.map((item, idx) => (
            <div
              key={idx}
              className="gungjung-glass p-7 sm:p-8 rounded-[28px] border border-[#B78C86]/25 hover:border-[#D8BB94]/50 bg-gradient-to-b from-[#4A1F2D]/35 via-transparent to-[#14080E]/60 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden backdrop-blur-md"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#5A2638]/20 rounded-bl-full pointer-events-none" />

              <div>
                {/* ① 상단 아이콘 */}
                <div className="w-12 h-12 rounded-2xl bg-[#5A2638]/50 border border-[#B78C86]/40 flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                {/* ② STUDY 번호 */}
                <span className="text-xs font-mono font-bold tracking-widest text-[#D8BB94] mb-2 block">
                  {item.num}
                </span>
                {/* ③ 카드 제목 */}
                <h3 className="text-[20px] sm:text-[21px] lg:text-[21px] font-bold text-white mb-3 leading-snug break-keep">
                  {item.title}
                </h3>
              </div>

              {/* ④ 구분선 및 ⑤ 설명 문구 */}
              <p className="text-[14.5px] sm:text-[15px] text-[#EDE6DA]/75 font-light leading-[1.68] md:leading-[1.72] break-keep mt-4 pt-4 border-t border-white/5">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* 하단 브랜드 선언문 */}
        <div className="mt-14 md:mt-16 text-center max-w-2xl mx-auto px-4">
          <p className="font-elegant font-medium text-[20px] md:text-[23px] text-[#FAF7F2] leading-relaxed break-keep">
            &ldquo;두 사람의 인연을 하나의 점수로 단정하지 않기 위해,<br />
            <span className="text-[#D8BB94] font-semibold">백도화는 관계를 읽는 기준부터 세웠습니다.</span>&rdquo;
          </p>
        </div>
      </Reveal>
    </section>
  )
}
