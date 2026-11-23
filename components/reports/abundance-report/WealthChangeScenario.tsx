'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Reveal from '@/components/Reveal'
import { ShieldCheck, Sparkles, Crown } from 'lucide-react'

// ══════════════════════════════════════════════════════════════════════
// TRANSFORMATION 3단계 순차 애니메이션 타임라인 컴포넌트
// ──────────────────────────────────────────────────────────────────────
// STEP 01 반복되는 돈 고민 → STEP 02 패턴을 깨닫는 순간 → STEP 03 나만의 기준 세우기
// ══════════════════════════════════════════════════════════════════════
function WealthTransformationTimeline() {
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

      // T=1100ms: 02 '패턴을 깨닫는 순간' 강조
      timeouts.push(setTimeout(() => {
        if (!isCancelled) setAnimStep(3)
      }, 1100))

      // T=1500ms: 두 번째 연결선(02 → 03) 왼쪽에서 오른쪽으로 진행
      timeouts.push(setTimeout(() => {
        if (!isCancelled) setAnimStep(4)
      }, 1500))

      // T=2200ms: 03 '나만의 기준 세우기' 강조 (01, 02, 03 모두 완성 상태)
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
    { num: '01', text: '반복되는 돈 고민' },
    { num: '02', text: '패턴을 깨닫는 순간' },
    { num: '03', text: '나만의 기준 세우기' },
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
        {/* Step 01: 반복되는 돈 고민 */}
        <div className={`flex items-center gap-1.5 sm:gap-2.5 shrink-0 ${nodeTransClass} ${animStep >= 1 ? 'opacity-100 translate-y-0' : 'opacity-40 translate-y-0.5'}`}>
          <div className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center font-mono text-[11px] sm:text-xs font-bold shrink-0 ${nodeTransClass} ${
            animStep >= 1 
              ? 'bg-[#142B24] border border-[#C2A477] text-[#C2A477] shadow-[0_0_12px_rgba(194,164,119,0.35)]' 
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
            className={`absolute inset-y-0 left-0 bg-gradient-to-r from-[#C2A477] via-[#E5C378] to-[#C2A477] ${lineTransClass}`}
            style={{ width: animStep >= 2 ? '100%' : '0%' }}
          />
        </div>

        {/* Step 02: 패턴을 깨닫는 순간 */}
        <div className={`flex items-center gap-1.5 sm:gap-2.5 shrink-0 ${nodeTransClass} ${animStep >= 3 ? 'opacity-100 translate-y-0' : 'opacity-40 translate-y-0.5'}`}>
          <div className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center font-mono text-[11px] sm:text-xs font-bold shrink-0 ${nodeTransClass} ${
            animStep >= 3 
              ? 'bg-[#142B24] border border-[#C2A477] text-[#C2A477] shadow-[0_0_12px_rgba(194,164,119,0.35)]' 
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
            className={`absolute inset-y-0 left-0 bg-gradient-to-r from-[#C2A477] via-[#E5C378] to-[#C2A477] ${lineTransClass}`}
            style={{ width: animStep >= 4 ? '100%' : '0%' }}
          />
        </div>

        {/* Step 03: 나만의 기준 세우기 */}
        <div className={`flex items-center gap-1.5 sm:gap-2.5 shrink-0 ${nodeTransClass} ${animStep >= 5 ? 'opacity-100 translate-y-0' : 'opacity-40 translate-y-0.5'}`}>
          <div className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center font-mono text-[11px] sm:text-xs font-bold shrink-0 ${nodeTransClass} ${
            animStep >= 5 
              ? 'bg-[#142B24] border border-[#C2A477] text-[#C2A477] shadow-[0_0_12px_rgba(194,164,119,0.35)]' 
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

interface WealthChangeScenarioProps {
  imageSrc?: string
}

// ══════════════════════════════════════════════════════════════════════
// TRANSFORMATION SCENARIO — 풍요를 향한 3단계 변화 섹션 (전면 개편)
// ══════════════════════════════════════════════════════════════════════
export default function WealthChangeScenario({
  imageSrc = '/image/abundance/wealth-paradigm-shift.webp'
}: WealthChangeScenarioProps) {
  const [imageError, setImageError] = useState(false)

  const changes = [
    {
      num: '01',
      symbol: '①',
      title: '돈 앞에서 흔들리던 나의 기준 회복',
      desc: '작은 소비에도 불안해하고, 다른 사람의 수익과 나를 비교하던 습관에서 벗어나 나에게 중요한 금전 기준을 다시 세웁니다.',
      icon: <ShieldCheck className="w-5 h-5 text-[#8FB4A4]" />,
      tag: '기준의 회복'
    },
    {
      num: '02',
      symbol: '②',
      title: '돈이 새는 반복 패턴의 발견',
      desc: '수입이 생겨도 불안한 이유, 가격을 정할 때 주저하는 마음, 기회를 미루는 습관까지 나의 선택이 반복되는 배경을 이해합니다.',
      icon: <Sparkles className="w-5 h-5 text-[#8FB4A4]" />,
      tag: '패턴의 발견'
    },
    {
      num: '03',
      symbol: '③',
      title: '나에게 맞는 풍요의 방식 설계',
      desc: '남의 성공 공식을 무작정 따라가기보다 나의 강점과 현실 여건에 맞는 수익 방향, 소비 기준, 실천 습관을 정리합니다.',
      icon: <Crown className="w-5 h-5 text-[#8FB4A4]" />,
      tag: '풍요의 설계'
    }
  ]

  return (
    <section id="transformation-scenario" className="mb-28 md:mb-36 w-full max-w-[1280px] mx-auto scroll-mt-28 md:scroll-mt-36">
      <Reveal className="w-full">
        {/* 상단 라벨 / 메인 제목 (36px) / 3줄 설명 문구 */}
        <div className="max-w-4xl mx-auto text-center mb-10 md:mb-12 px-4">
          <span className="block font-elegant text-[12pt] font-semibold tracking-[0.2em] text-[#8FB4A4] uppercase mb-4">
            TRANSFORMATION SCENARIO
          </span>
          <h2 className="text-2xl md:text-[34px] lg:text-[36px] font-elegant font-bold text-white mb-4 leading-[1.3] break-keep">
            리포트를 펼치는 순간 시작되는,<br />
            <span className="gradient-text-abundance">풍요를 향한 3단계 변화</span>
          </h2>
          <p className="text-[17px] md:text-[18px] text-[#EDE6DA] opacity-85 font-light leading-relaxed max-w-2xl mx-auto break-keep">
            같은 돈의 고민을 반복하지 않으려면, 먼저 나의 선택부터 이해해야 합니다.<br className="hidden sm:inline" />{' '}
            타고난 재물 기질과 현실의 돈 습관을 함께 살펴보고,<br className="hidden sm:inline" />{' '}
            나에게 맞는 풍요의 기준과 실천 방향을 구체화합니다.
          </p>
        </div>

        {/* 3단계 순차 애니메이션 슬림 타임라인 */}
        <WealthTransformationTimeline />

        {/* 16:9 가로형 이미지 영역 (추후 전용 이미지로 즉시 교체 가능한 src 구조) */}
        <div className="w-full max-w-[1280px] mx-auto mb-10 md:mb-12">
          <div className="relative aspect-[16/9] w-full rounded-[28px] md:rounded-[36px] overflow-hidden border border-[#608F82]/30 shadow-2xl bg-[#0B1514] group">
            {!imageError ? (
              <Image 
                src={imageSrc} 
                alt="리포트를 펼치는 순간 시작되는, 풍요를 향한 3단계 변화" 
                fill
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.01]" 
                onError={() => setImageError(true)}
              />
            ) : (
              /* 임시 플레이스홀더 (레이아웃 보존용) */
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-gradient-to-b from-[#142B24]/60 via-[#0B1514]/80 to-[#050D0C]/95">
                <span className="text-xs font-mono font-bold tracking-widest text-[#8FB4A4] uppercase mb-2">
                  TRANSFORMATION VISUAL
                </span>
                <p className="text-sm text-[#EDE6DA]/70 font-light">
                  풍요를 향한 3단계 변화 시각화 배너
                </p>
              </div>
            )}
          </div>
        </div>

        {/* 3가지 변화 카드 그리드 (데스크톱 3열 1280px 풀 위드) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-[1280px] mx-auto">
          {changes.map((item, idx) => (
            <div
              key={idx}
              className="gungjung-glass p-8 md:p-9 rounded-[32px] border border-[#608F82]/35 bg-gradient-to-b from-[#142B24]/50 via-[#0B1514]/40 to-[#050D0C]/60 flex flex-col justify-between group hover:border-[#608F82]/60 transition-all duration-300 hover:-translate-y-1 shadow-xl relative overflow-hidden h-full"
            >
              {/* 은은한 배경 오라 */}
              <div className="absolute top-0 right-0 w-28 h-28 bg-[#608F82]/10 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#0f241f] border border-[#608F82]/40 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                    {item.icon}
                  </div>
                  <span className="text-xs font-mono font-bold tracking-widest px-3 py-1 rounded-full bg-[#608F82]/15 border border-[#608F82]/30 text-[#8FB4A4]">
                    {item.tag}
                  </span>
                </div>

                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-sm md:text-base font-bold text-[#C2A477]">
                    {item.symbol}
                  </span>
                  <h3 className="text-lg md:text-xl font-bold text-white leading-snug break-keep group-hover:text-[#FAF6EE] transition-colors">
                    {item.title}
                  </h3>
                </div>

                <p className="text-[15.5px] md:text-[16px] text-[#EDE6DA]/85 font-light leading-[1.68] break-keep mt-2.5">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-[#8FB4A4]/70">
                <span className="font-mono tracking-wider text-[#C2A477]">CHANGE {item.num}</span>
                <span className="text-[#EDE6DA]/70 font-light">선천코드 실천 변화</span>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
