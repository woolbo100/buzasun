'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Reveal from '@/components/Reveal'
import { HeartHandshake, Sparkles, Users } from 'lucide-react'

// ══════════════════════════════════════════════════════════════════════
// TRANSFORMATION 3단계 순차 가로형 애니메이션 타임라인 컴포넌트
// ──────────────────────────────────────────────────────────────────────
// STEP 01 반복되는 갈등 → STEP 02 서로의 패턴 이해 → STEP 03 관계의 기준 세우기
// (풍요 리포트와 동일한 단방향 정순 애니메이션 메커니즘 + 궁합 전용 샴페인/버건디 테마)
// ══════════════════════════════════════════════════════════════════════
function CompatibilityTransformationTimeline() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  // animStep: 0=초기화, 1=01강조, 2=선1그리기, 3=02강조, 4=선2그리기, 5=03강조(완성 상태 유지)
  const [animStep, setAnimStep] = useState(1)
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(true)
  const [isVisible, setIsVisible] = useState(false)
  const isReducedMotion = useRef(false)

  // 1. 화면 노출 제어 (IntersectionObserver: 화면에 보일 때만 실행)
  useEffect(() => {
    isReducedMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (isReducedMotion.current) {
      setAnimStep(5)
      return
    }

    const el = containerRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        setIsVisible(entry?.isIntersecting ?? false)
      },
      { threshold: 0.2, rootMargin: '0px 0px -20px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  // 2. 단방향 정순 무한 반복 애니메이션 제어 (역방향 잔상 완전 차단)
  useEffect(() => {
    if (isReducedMotion.current) return
    if (!isVisible) return

    const timeouts: NodeJS.Timeout[] = []
    let isCancelled = false

    const runCycle = () => {
      if (isCancelled) return

      // 트랜지션 활성화 후 01 단계부터 정순 진행 시작
      setIsTransitionEnabled(true)
      setAnimStep(1)

      // T=400ms: 첫 번째 연결선(01 → 02) 왼쪽에서 오른쪽으로 진행
      timeouts.push(setTimeout(() => {
        if (!isCancelled) setAnimStep(2)
      }, 400))

      // T=1100ms: 02 '서로의 패턴 이해' 강조
      timeouts.push(setTimeout(() => {
        if (!isCancelled) setAnimStep(3)
      }, 1100))

      // T=1500ms: 두 번째 연결선(02 → 03) 왼쪽에서 오른쪽으로 진행
      timeouts.push(setTimeout(() => {
        if (!isCancelled) setAnimStep(4)
      }, 1500))

      // T=2200ms: 03 '관계의 기준 세우기' 강조 (01, 02, 03 모두 완성 상태)
      timeouts.push(setTimeout(() => {
        if (!isCancelled) setAnimStep(5)
      }, 2200))

      // T=3700ms: 완성 상태를 약 1.5초 유지한 뒤 즉각 초기화 (역방향 애니메이션 방지)
      timeouts.push(setTimeout(() => {
        if (isCancelled) return

        setIsTransitionEnabled(false)
        setAnimStep(0)

        // 브라우저 렌더링 프레임 확보 후 다음 주기를 01부터 깨끗하게 시작
        timeouts.push(setTimeout(() => {
          if (!isCancelled) {
            runCycle()
          }
        }, 80))
      }, 3700))
    }

    runCycle()

    return () => {
      isCancelled = true
      timeouts.forEach(clearTimeout)
    }
  }, [isVisible])

  const steps = [
    { num: '01', text: '반복되는 갈등' },
    { num: '02', text: '서로의 패턴 이해' },
    { num: '03', text: '관계의 기준 세우기' },
  ]

  // 트랜지션 활성화 여부에 따른 transition 클래스
  const nodeTransClass = isTransitionEnabled 
    ? 'transition-all duration-500 ease-out' 
    : 'transition-none'
  const lineTransClass = isTransitionEnabled 
    ? 'transition-all duration-700 ease-out' 
    : 'transition-none'

  return (
    <div ref={containerRef} className="w-full max-w-4xl mx-auto mb-10 md:mb-12 px-3 sm:px-4">
      {/* 3단계 가로형 슬림 타임라인 (모바일/PC 모두 깔끔한 가로 흐름) */}
      <div className="flex items-center justify-between">
        {/* Step 01: 반복되는 갈등 */}
        <div className={`flex items-center gap-1.5 sm:gap-2.5 shrink-0 ${nodeTransClass} ${animStep >= 1 ? 'opacity-100 translate-y-0' : 'opacity-40 translate-y-0.5'}`}>
          <div className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center font-mono text-[11px] sm:text-xs font-bold shrink-0 ${nodeTransClass} ${
            animStep >= 1 
              ? 'bg-[#351221] border border-[#D8BB94] text-[#D8BB94] shadow-[0_0_12px_rgba(216,187,148,0.35)]' 
              : 'bg-white/5 border border-white/15 text-white/40'
          }`}>
            {steps[0].num}
          </div>
          <span className={`text-[12px] sm:text-[14px] md:text-[15px] font-medium leading-tight sm:leading-normal break-keep ${nodeTransClass} ${
            animStep >= 1 ? 'text-white' : 'text-[#EDE6DA]/50'
          }`}>
            {steps[0].text}
          </span>
        </div>

        {/* 연결선 01 (01 → 02) */}
        <div className="flex-1 min-w-[12px] mx-1.5 sm:mx-3 md:mx-5 h-[1.5px] bg-white/10 relative overflow-hidden rounded-full">
          <div 
            className={`absolute inset-y-0 left-0 bg-gradient-to-r from-[#D8BB94] via-[#F0D9C5] to-[#D8BB94] ${lineTransClass}`}
            style={{ width: animStep >= 2 ? '100%' : '0%' }}
          />
        </div>

        {/* Step 02: 서로의 패턴 이해 */}
        <div className={`flex items-center gap-1.5 sm:gap-2.5 shrink-0 ${nodeTransClass} ${animStep >= 3 ? 'opacity-100 translate-y-0' : 'opacity-40 translate-y-0.5'}`}>
          <div className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center font-mono text-[11px] sm:text-xs font-bold shrink-0 ${nodeTransClass} ${
            animStep >= 3 
              ? 'bg-[#351221] border border-[#D8BB94] text-[#D8BB94] shadow-[0_0_12px_rgba(216,187,148,0.35)]' 
              : 'bg-white/5 border border-white/15 text-white/40'
          }`}>
            {steps[1].num}
          </div>
          <span className={`text-[12px] sm:text-[14px] md:text-[15px] font-medium leading-tight sm:leading-normal break-keep ${nodeTransClass} ${
            animStep >= 3 ? 'text-white' : 'text-[#EDE6DA]/50'
          }`}>
            {steps[1].text}
          </span>
        </div>

        {/* 연결선 02 (02 → 03) */}
        <div className="flex-1 min-w-[12px] mx-1.5 sm:mx-3 md:mx-5 h-[1.5px] bg-white/10 relative overflow-hidden rounded-full">
          <div 
            className={`absolute inset-y-0 left-0 bg-gradient-to-r from-[#D8BB94] via-[#F0D9C5] to-[#D8BB94] ${lineTransClass}`}
            style={{ width: animStep >= 4 ? '100%' : '0%' }}
          />
        </div>

        {/* Step 03: 관계의 기준 세우기 */}
        <div className={`flex items-center gap-1.5 sm:gap-2.5 shrink-0 ${nodeTransClass} ${animStep >= 5 ? 'opacity-100 translate-y-0' : 'opacity-40 translate-y-0.5'}`}>
          <div className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center font-mono text-[11px] sm:text-xs font-bold shrink-0 ${nodeTransClass} ${
            animStep >= 5 
              ? 'bg-[#351221] border border-[#D8BB94] text-[#D8BB94] shadow-[0_0_12px_rgba(216,187,148,0.35)]' 
              : 'bg-white/5 border border-white/15 text-white/40'
          }`}>
            {steps[2].num}
          </div>
          <span className={`text-[12px] sm:text-[14px] md:text-[15px] font-medium leading-tight sm:leading-normal break-keep ${nodeTransClass} ${
            animStep >= 5 ? 'text-white' : 'text-[#EDE6DA]/50'
          }`}>
            {steps[2].text}
          </span>
        </div>
      </div>
    </div>
  )
}

interface CompatibilityChangeScenarioProps {
  imageSrc?: string | null
}

// ══════════════════════════════════════════════════════════════════════
// TRANSFORMATION SCENARIO — 두 사람의 관계를 바꾸는 3단계 변화 섹션
// ══════════════════════════════════════════════════════════════════════
export default function CompatibilityChangeScenario({
  imageSrc = '/image/compatibility/compatibility-transformation-scenario.webp'
}: CompatibilityChangeScenarioProps) {
  const [imageError, setImageError] = useState(false)

  const changes = [
    {
      num: '01',
      tag: '이해의 회복',
      title: '서로를 탓하던 시선에서\n관계의 구조를 이해하는 시선으로',
      desc: '같은 문제로 부딪힐 때 상대의 잘못만 찾기보다 서로의 선천 기질과 감정 반응이 어떻게 맞물리는지 살펴보며 갈등을 이해하는 새로운 관점을 세웁니다.',
      icon: <HeartHandshake className="w-5 h-5 text-[#D8BB94]" />,
      footerLeft: 'CHANGE 01',
      footerRight: '선천코드 관계 이해'
    },
    {
      num: '02',
      tag: '패턴의 발견',
      title: '반복되는 오해와 갈등의\n원인을 알아차리기',
      desc: '서운함과 침묵, 방어적인 말투가 되풀이되는 순간을 돌아보고 서로의 기대와 표현 방식이 어디에서 엇갈리는지 알아차리는 기준을 마련합니다.',
      icon: <Sparkles className="w-5 h-5 text-[#D8BB94]" />,
      footerLeft: 'CHANGE 02',
      footerRight: '선천코드 관계 이해'
    },
    {
      num: '03',
      tag: '관계의 재설계',
      title: '두 사람에게 맞는 소통과\n관계 유지 방식 찾기',
      desc: '서로를 억지로 바꾸기보다 각자의 차이를 존중하며 대화법, 개인 시간의 균형, 감사 표현과 관계 약속 등 일상에서 실천할 방향을 정리합니다.',
      icon: <Users className="w-5 h-5 text-[#D8BB94]" />,
      footerLeft: 'CHANGE 03',
      footerRight: '선천코드 실천 방향'
    }
  ]

  return (
    <section id="transformation-scenario" className="mb-32 md:mb-40 w-full max-w-[1280px] mx-auto scroll-mt-28 md:scroll-mt-36">
      <Reveal className="w-full">
        {/* 상단 라벨 / 메인 2줄 제목 / 설명 문구 */}
        <div className="max-w-4xl mx-auto text-center mb-10 md:mb-12 px-4">
          <span className="block font-elegant text-[12pt] font-semibold tracking-[0.2em] text-[#D8BB94] uppercase mb-4">
            TRANSFORMATION SCENARIO
          </span>
          <h2 className="text-2xl md:text-[34px] lg:text-[36px] font-elegant font-bold text-white mb-4 leading-[1.3] break-keep">
            리포트를 펼치는 순간 시작되는,<br />
            <span className="gradient-text-reunion">두 사람의 관계를 바꾸는 3단계 변화</span>
          </h2>
          <p className="text-[17px] md:text-[18px] text-[#EDE6DA] opacity-85 font-light leading-relaxed max-w-2xl mx-auto break-keep">
            같은 갈등을 반복하지 않으려면, 먼저 서로의 반응 방식을 이해해야 합니다.<br className="hidden sm:inline" />{' '}
            두 사람의 선천 기질과 반복되는 감정 패턴을 함께 살펴보고,<br className="hidden sm:inline" />{' '}
            우리에게 맞는 소통과 관계 조율의 기준을 찾아갑니다.
          </p>
        </div>

        {/* 3단계 가로형 슬림 애니메이션 타임라인 */}
        <CompatibilityTransformationTimeline />

        {/* 16:9 가로형 대표 이미지 영역 (신규 이미지 존재 시 자동 렌더링, 미존재 시 빈 공간 없이 안전 대기) */}
        {imageSrc && !imageError && (
          <div className="w-full max-w-[1280px] mx-auto mb-10 md:mb-12">
            <div className="relative aspect-[16/9] w-full rounded-[28px] md:rounded-[36px] overflow-hidden border border-[#B78C86]/35 shadow-2xl bg-[#14080E] group">
              <Image 
                src={imageSrc} 
                alt="리포트를 펼치는 순간 시작되는, 두 사람의 관계를 바꾸는 3단계 변화 — 서로의 다름을 이해하고, 더 깊이 가까워지는 관계의 기준" 
                fill
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.01]" 
                onError={() => setImageError(true)}
              />
            </div>
          </div>
        )}

        {/* CHANGE 01~03 결과 카드 그리드 (데스크톱 3열 1280px 풀 위드) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-[1280px] mx-auto">
          {changes.map((item, idx) => (
            <div
              key={idx}
              className="gungjung-glass p-8 md:p-9 rounded-[32px] border border-[#B78C86]/30 bg-gradient-to-b from-[#4A1F2D]/45 via-[#2A0C1A]/35 to-[#14050D]/55 flex flex-col justify-between group hover:border-[#D8BB94]/50 transition-all duration-300 hover:-translate-y-1 shadow-xl relative overflow-hidden h-full"
            >
              {/* 은은한 배경 오라 */}
              <div className="absolute top-0 right-0 w-28 h-28 bg-[#B78C86]/10 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#351221] border border-[#B78C86]/40 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                    {item.icon}
                  </div>
                  <span className="text-xs font-mono font-bold tracking-widest px-3 py-1 rounded-full bg-[#5A2638]/60 border border-[#B78C86]/35 text-[#D8BB94]">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-lg md:text-xl font-bold text-white leading-snug break-keep group-hover:text-[#FAF6EE] transition-colors whitespace-pre-line mb-3">
                  {item.title}
                </h3>

                <p className="text-[15px] md:text-[15.5px] text-[#EDE6DA]/85 font-light leading-[1.68] break-keep mt-2.5">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-[#EDE6DA]/70">
                <span className="font-mono tracking-wider text-[#D8BB94] font-bold">{item.footerLeft}</span>
                <span className="font-light">{item.footerRight}</span>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
