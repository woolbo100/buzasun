'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Reveal from '@/components/Reveal'
import { Crown, Sparkles, ShieldCheck } from 'lucide-react'

// TRANSFORMATION 3단계 순차 애니메이션 타임라인 컴포넌트
function TransformationTimeline() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  // animStep: 0=초기화, 1=01강조, 2=선1그리기, 3=02강조, 4=선2그리기, 5=03강조(완성 상태 유지)
  const [animStep, setAnimStep] = useState(1)
  // isTransitionEnabled: 초기화 순간에 transition을 일시 비활성화하여 역방향 애니메이션 제거
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

      // T=1100ms: 02 '패턴을 알아차리는 순간' 강조
      timeouts.push(setTimeout(() => {
        if (!isCancelled) setAnimStep(3)
      }, 1100))

      // T=1500ms: 두 번째 연결선(02 → 03) 왼쪽에서 오른쪽으로 진행
      timeouts.push(setTimeout(() => {
        if (!isCancelled) setAnimStep(4)
      }, 1500))

      // T=2200ms: 03 '다른 선택의 시작' 강조 (01, 02, 03 모두 완성 상태)
      timeouts.push(setTimeout(() => {
        if (!isCancelled) setAnimStep(5)
      }, 2200))

      // T=3700ms: 완성 상태를 약 1.5초 유지한 뒤 즉각 초기화 (역방향 애니메이션 방지)
      timeouts.push(setTimeout(() => {
        if (isCancelled) return

        // ★ 핵심: CSS transition을 끄고 순식간에 0으로 리셋 (되감기는 잔상 100% 제거)
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
    { num: '01', text: '반복되는 패턴 장면' },
    { num: '02', text: '패턴을 알아차리는 순간' },
    { num: '03', text: '다른 선택의 시작' },
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
        {/* Step 01: 반복되는 패턴 장면 */}
        <div className={`flex items-center gap-1.5 sm:gap-2.5 shrink-0 ${nodeTransClass} ${animStep >= 1 ? 'opacity-100 translate-y-0' : 'opacity-40 translate-y-0.5'}`}>
          <div className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center font-mono text-[11px] sm:text-xs font-bold shrink-0 ${nodeTransClass} ${
            animStep >= 1 
              ? 'bg-[#2D0A1E] border border-[#B7788D] text-[#D9A8A7] shadow-[0_0_12px_rgba(217,168,167,0.35)]' 
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
            className={`absolute inset-y-0 left-0 bg-gradient-to-r from-[#D9A8A7] via-[#C48B9F] to-[#D9A8A7] ${lineTransClass}`}
            style={{ width: animStep >= 2 ? '100%' : '0%' }}
          />
        </div>

        {/* Step 02: 패턴을 알아차리는 순간 */}
        <div className={`flex items-center gap-1.5 sm:gap-2.5 shrink-0 ${nodeTransClass} ${animStep >= 3 ? 'opacity-100 translate-y-0' : 'opacity-40 translate-y-0.5'}`}>
          <div className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center font-mono text-[11px] sm:text-xs font-bold shrink-0 ${nodeTransClass} ${
            animStep >= 3 
              ? 'bg-[#2D0A1E] border border-[#B7788D] text-[#D9A8A7] shadow-[0_0_12px_rgba(217,168,167,0.35)]' 
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
            className={`absolute inset-y-0 left-0 bg-gradient-to-r from-[#D9A8A7] via-[#C48B9F] to-[#D9A8A7] ${lineTransClass}`}
            style={{ width: animStep >= 4 ? '100%' : '0%' }}
          />
        </div>

        {/* Step 03: 다른 선택의 시작 */}
        <div className={`flex items-center gap-1.5 sm:gap-2.5 shrink-0 ${nodeTransClass} ${animStep >= 5 ? 'opacity-100 translate-y-0' : 'opacity-40 translate-y-0.5'}`}>
          <div className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center font-mono text-[11px] sm:text-xs font-bold shrink-0 ${nodeTransClass} ${
            animStep >= 5 
              ? 'bg-[#2D0A1E] border border-[#B7788D] text-[#D9A8A7] shadow-[0_0_12px_rgba(217,168,167,0.35)]' 
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

export default function TransformationThreeChanges() {
  const changes = [
    {
      num: '01',
      symbol: '①',
      title: '연애의 주도권 탈환',
      desc: '상대의 눈치를 보며 내 감정을 억누르고, 결국 상처를 되풀이하던 상태를 알아차리고 남자의 비위를 맞추던 ‘을(乙)’에서 벗어나, 판을 읽고 선택하는 ‘주권자’가 됩니다.',
      icon: <Crown className="w-5 h-5 text-[#D9A8A7]" />,
      tag: '주권자의 연애'
    },
    {
      num: '02',
      symbol: '②',
      title: '소모적인 반복의 종결',
      desc: '선천 기질과 무의식적 관계 패턴을 살펴보며 나의 반응을 객관적으로 이해하고 내가 왜 늘 그런 사람에게 끌렸는지 원인을 알기에, 다음 연애부터는 함정에 빠지지 않습니다.',
      icon: <Sparkles className="w-5 h-5 text-[#D9A8A7]" />,
      tag: '패턴의 해방'
    },
    {
      num: '03',
      symbol: '③',
      title: '나만의 연애 기준(필터) 정립',
      desc: '나의 감정과 경계를 먼저 존중하며 사랑의 주도권을 되찾았기에, 타인의 기준에 휘둘리지 않고 나를 온전히 아껴줄 진짜 인연을 단번에 알아보는 단단한 눈이 생깁니다.',
      icon: <ShieldCheck className="w-5 h-5 text-[#D9A8A7]" />,
      tag: '진짜 인연의 분별'
    }
  ]

  return (
    <section className="mb-32">
      <Reveal>
        <div className="max-w-4xl mx-auto text-center mb-10 md:mb-12">
          <span className="block font-elegant text-[12pt] font-semibold tracking-[0.2em] text-[#D9A8A7] uppercase mb-4">
            TRANSFORMATION SCENARIO
          </span>
          <h2 className="text-2xl md:text-[34px] lg:text-[36px] font-elegant font-bold text-white mb-4 leading-[1.3] break-keep">
            리포트를 여는 순간 시작되는,<br />
            <span className="gradient-text-love">연애의 3단계 변화</span>
          </h2>
          <p className="text-[18px] text-[#EDE6DA] opacity-85 font-light leading-relaxed max-w-2xl mx-auto break-keep">
            같은 사랑을 반복하지 않으려면 먼저 나의 선택부터 알아야 합니다.<br />
            단순한 성향 풀이를 넘어 스스로를 깊게 이해하고,<br />
            당신의 미래 연애 청사진을 명확하고 당당하게 바꿔놓습니다.
          </p>
        </div>

        {/* 3단계 순차 애니메이션 슬림 타임라인 */}
        <TransformationTimeline />

        {/* 01 반복 → 02 자각 → 03 선택 애니메이션 바로 아래 16:9 가로형 이미지 */}
        <div className="w-full max-w-7xl mx-auto mb-10 md:mb-12">
          <div className="relative aspect-[16/9] w-full rounded-[28px] md:rounded-[36px] overflow-hidden border border-white/10 shadow-2xl bg-[#130917] group">
            <Image 
              src="/image/lovereport/love%20transformation.webp" 
              alt="리포트를 열어보는 순간 당신의 연애에 생기는 3가지 변화" 
              fill
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.01]" 
            />
          </div>
        </div>

        {/* 3가지 변화 카드 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {changes.map((item, idx) => (
            <div
              key={idx}
              className="gungjung-glass p-8 md:p-9 rounded-[32px] border border-[#B7788D]/35 bg-gradient-to-b from-[#2A0E22]/50 via-[#1C091A]/40 to-[#100612]/60 flex flex-col justify-between group hover:border-[#B7788D]/60 transition-all duration-300 hover:-translate-y-1 shadow-xl relative overflow-hidden"
            >
              {/* 은은한 배경 오라 */}
              <div className="absolute top-0 right-0 w-28 h-28 bg-[#B7788D]/10 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#2D0A1E] border border-[#B7788D]/40 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                    {item.icon}
                  </div>
                  <span className="text-xs font-mono font-bold tracking-widest px-3 py-1 rounded-full bg-[#B7788D]/15 border border-[#B7788D]/30 text-[#D9A8A7]">
                    {item.tag}
                  </span>
                </div>

                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-sm md:text-base font-bold text-[#D9A8A7]">
                    {item.symbol}
                  </span>
                  <h3 className="text-lg md:text-xl font-bold text-white leading-snug break-keep group-hover:text-[#FAF6EE] transition-colors">
                    {item.title}
                  </h3>
                </div>

                <p className="text-[16px] text-[#EDE6DA]/85 font-light leading-[1.6] break-keep mt-2.5">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-[#D9A8A7]/60">
                <span className="font-mono tracking-wider">CHANGE {item.num}</span>
                <span className="text-[#D9A8A7]/70">선천코드 실천 변화</span>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
