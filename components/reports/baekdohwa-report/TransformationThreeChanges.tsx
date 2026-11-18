'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Reveal from '@/components/Reveal'
import { Crown, Sparkles, ShieldCheck } from 'lucide-react'

// TRANSFORMATION 3단계 순차 애니메이션 타임라인 컴포넌트
function TransformationTimeline() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  // animStep: 0=초기, 1=01강조, 2=선1그리기, 3=02강조, 4=선2그리기, 5=03강조(최종고정)
  const [animStep, setAnimStep] = useState(0)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    // 사용자의 모션 감소 설정(prefers-reduced-motion) 지원
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setAnimStep(5)
      return
    }

    const timeouts: NodeJS.Timeout[] = []

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry?.isIntersecting) {
          // 화면 진입 시 한 번만 실행
          observer.disconnect()

          // 1단계: 01 페이드인 & 은은한 강조 (0.15초)
          timeouts.push(setTimeout(() => setAnimStep(1), 150))
          // 2단계: 첫 번째 연결선 드로잉 (0.8초)
          timeouts.push(setTimeout(() => setAnimStep(2), 800))
          // 3단계: 02 페이드인 & 은은한 강조 (1.55초)
          timeouts.push(setTimeout(() => setAnimStep(3), 1550))
          // 4단계: 두 번째 연결선 드로잉 (2.2초)
          timeouts.push(setTimeout(() => setAnimStep(4), 2200))
          // 5단계: 03 페이드인 & 최종 상태 고정 (2.95초)
          timeouts.push(setTimeout(() => setAnimStep(5), 2950))
        }
      },
      { threshold: 0.25, rootMargin: '0px 0px -40px 0px' }
    )

    observer.observe(el)

    return () => {
      observer.disconnect()
      timeouts.forEach(clearTimeout)
    }
  }, [])

  const steps = [
    { num: '01', text: '반복되는 패턴 장면' },
    { num: '02', text: '패턴을 알아차리는 순간' },
    { num: '03', text: '다른 선택의 시작' },
  ]

  return (
    <div ref={containerRef} className="w-full max-w-4xl mx-auto mb-10 md:mb-12 px-4">
      {/* 1. 데스크톱/태블릿 가로형 타임라인 (sm 이상) */}
      <div className="hidden sm:flex items-center justify-between">
        {/* Step 01 */}
        <div className={`flex items-center gap-2.5 shrink-0 transition-all duration-500 ${animStep >= 1 ? 'opacity-100 translate-y-0' : 'opacity-40 translate-y-1'}`}>
          <div className={`w-7 h-7 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-all duration-500 ${
            animStep >= 1 
              ? 'bg-[#2D0A1E] border border-[#B7788D] text-[#D9A8A7] shadow-[0_0_12px_rgba(217,168,167,0.35)]' 
              : 'bg-white/5 border border-white/15 text-white/40'
          }`}>
            {steps[0].num}
          </div>
          <span className={`text-[14px] md:text-[15px] transition-colors duration-500 break-keep ${
            animStep >= 1 ? 'text-white font-medium' : 'text-[#EDE6DA]/50'
          }`}>
            {steps[0].text}
          </span>
        </div>

        {/* 연결선 01 */}
        <div className="flex-1 mx-3 md:mx-5 h-[1.5px] bg-white/10 relative overflow-hidden rounded-full">
          <div 
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#D9A8A7] via-[#C48B9F] to-[#D9A8A7] transition-all duration-700 ease-out"
            style={{ width: animStep >= 2 ? '100%' : '0%' }}
          />
        </div>

        {/* Step 02 */}
        <div className={`flex items-center gap-2.5 shrink-0 transition-all duration-500 ${animStep >= 3 ? 'opacity-100 translate-y-0' : 'opacity-40 translate-y-1'}`}>
          <div className={`w-7 h-7 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-all duration-500 ${
            animStep >= 3 
              ? 'bg-[#2D0A1E] border border-[#B7788D] text-[#D9A8A7] shadow-[0_0_12px_rgba(217,168,167,0.35)]' 
              : 'bg-white/5 border border-white/15 text-white/40'
          }`}>
            {steps[1].num}
          </div>
          <span className={`text-[14px] md:text-[15px] transition-colors duration-500 break-keep ${
            animStep >= 3 ? 'text-white font-medium' : 'text-[#EDE6DA]/50'
          }`}>
            {steps[1].text}
          </span>
        </div>

        {/* 연결선 02 */}
        <div className="flex-1 mx-3 md:mx-5 h-[1.5px] bg-white/10 relative overflow-hidden rounded-full">
          <div 
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#D9A8A7] via-[#C48B9F] to-[#D9A8A7] transition-all duration-700 ease-out"
            style={{ width: animStep >= 4 ? '100%' : '0%' }}
          />
        </div>

        {/* Step 03 */}
        <div className={`flex items-center gap-2.5 shrink-0 transition-all duration-500 ${animStep >= 5 ? 'opacity-100 translate-y-0' : 'opacity-40 translate-y-1'}`}>
          <div className={`w-7 h-7 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-all duration-500 ${
            animStep >= 5 
              ? 'bg-[#2D0A1E] border border-[#B7788D] text-[#D9A8A7] shadow-[0_0_12px_rgba(217,168,167,0.35)]' 
              : 'bg-white/5 border border-white/15 text-white/40'
          }`}>
            {steps[2].num}
          </div>
          <span className={`text-[14px] md:text-[15px] transition-colors duration-500 break-keep ${
            animStep >= 5 ? 'text-white font-medium' : 'text-[#EDE6DA]/50'
          }`}>
            {steps[2].text}
          </span>
        </div>
      </div>

      {/* 2. 모바일 세로형 타임라인 (sm 미만) */}
      <div className="sm:hidden flex flex-col gap-2 max-w-[260px] mx-auto py-1">
        {/* Step 01 */}
        <div className={`flex items-center gap-3 transition-all duration-500 ${animStep >= 1 ? 'opacity-100 translate-x-0' : 'opacity-40 -translate-x-1'}`}>
          <div className={`w-7 h-7 rounded-full flex items-center justify-center font-mono text-xs font-bold shrink-0 transition-all duration-500 ${
            animStep >= 1 
              ? 'bg-[#2D0A1E] border border-[#B7788D] text-[#D9A8A7] shadow-[0_0_10px_rgba(217,168,167,0.3)]' 
              : 'bg-white/5 border border-white/15 text-white/40'
          }`}>
            {steps[0].num}
          </div>
          <span className={`text-[14px] transition-colors duration-500 ${
            animStep >= 1 ? 'text-white font-medium' : 'text-[#EDE6DA]/50'
          }`}>
            {steps[0].text}
          </span>
        </div>

        {/* 연결선 01 (세로) */}
        <div className="w-[1.5px] h-4 ml-3.5 bg-white/10 relative overflow-hidden rounded-full">
          <div 
            className="w-full bg-gradient-to-b from-[#D9A8A7] to-[#B7788D] transition-all duration-700 ease-out"
            style={{ height: animStep >= 2 ? '100%' : '0%' }}
          />
        </div>

        {/* Step 02 */}
        <div className={`flex items-center gap-3 transition-all duration-500 ${animStep >= 3 ? 'opacity-100 translate-x-0' : 'opacity-40 -translate-x-1'}`}>
          <div className={`w-7 h-7 rounded-full flex items-center justify-center font-mono text-xs font-bold shrink-0 transition-all duration-500 ${
            animStep >= 3 
              ? 'bg-[#2D0A1E] border border-[#B7788D] text-[#D9A8A7] shadow-[0_0_10px_rgba(217,168,167,0.3)]' 
              : 'bg-white/5 border border-white/15 text-white/40'
          }`}>
            {steps[1].num}
          </div>
          <span className={`text-[14px] transition-colors duration-500 ${
            animStep >= 3 ? 'text-white font-medium' : 'text-[#EDE6DA]/50'
          }`}>
            {steps[1].text}
          </span>
        </div>

        {/* 연결선 02 (세로) */}
        <div className="w-[1.5px] h-4 ml-3.5 bg-white/10 relative overflow-hidden rounded-full">
          <div 
            className="w-full bg-gradient-to-b from-[#D9A8A7] to-[#B7788D] transition-all duration-700 ease-out"
            style={{ height: animStep >= 4 ? '100%' : '0%' }}
          />
        </div>

        {/* Step 03 */}
        <div className={`flex items-center gap-3 transition-all duration-500 ${animStep >= 5 ? 'opacity-100 translate-x-0' : 'opacity-40 -translate-x-1'}`}>
          <div className={`w-7 h-7 rounded-full flex items-center justify-center font-mono text-xs font-bold shrink-0 transition-all duration-500 ${
            animStep >= 5 
              ? 'bg-[#2D0A1E] border border-[#B7788D] text-[#D9A8A7] shadow-[0_0_10px_rgba(217,168,167,0.3)]' 
              : 'bg-white/5 border border-white/15 text-white/40'
          }`}>
            {steps[2].num}
          </div>
          <span className={`text-[14px] transition-colors duration-500 ${
            animStep >= 5 ? 'text-white font-medium' : 'text-[#EDE6DA]/50'
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
      desc: '선천 기질과 무의식적 관계 패턴을 살펴보며 나의 반응을 객관적으로 이해하고 내가 늘 그런 사람에게 끌렸는지 원인을 알기에, 다음 연애부터는 함정에 빠지지 않습니다.',
      icon: <Sparkles className="w-5 h-5 text-[#D9A8A7]" />,
      tag: '패턴의 해방'
    },
    {
      num: '03',
      symbol: '③',
      title: '나만의 연애 기준(필터) 정립',
      desc: '나의 감정과 경계를 존중하며 사랑의 주도권을 되찾았기 때문에 흔들리지 않고 나를 온전히 지켜줄 진짜 인연을 알아보는 눈이 생깁니다.',
      icon: <ShieldCheck className="w-5 h-5 text-[#D9A8A7]" />,
      tag: '진짜 인연의 분별'
    }
  ]

  return (
    <section className="mb-32">
      <Reveal>
        <div className="max-w-4xl mx-auto text-center mb-10 md:mb-12">
          <span className="block font-elegant text-xs md:text-sm font-semibold tracking-[0.25em] text-[#D9A8A7] uppercase mb-4">
            TRANSFORMATION
          </span>
          <h2 className="text-2xl md:text-[34px] lg:text-[36px] font-elegant font-bold text-white mb-4 leading-[1.3] break-keep">
            리포트를 열어보는 순간,<br className="sm:hidden" />
            <span className="gradient-text-love"> 당신의 연애에 생기는 3가지 변화</span>
          </h2>
          <p className="text-sm md:text-base text-[#EDE6DA]/75 font-light leading-relaxed max-w-xl mx-auto break-keep">
            단순한 성향 분석을 넘어, 당신의 미래 연애 청사진을 명확하고 당당하게 바꿔놓습니다.
          </p>
        </div>

        {/* 3단계 순차 애니메이션 슬림 타임라인 */}
        <TransformationTimeline />

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

        {/* 3개 변화 카드 바로 아래 16:9 가로형 이미지 */}
        <div className="w-full max-w-7xl mx-auto mt-8 md:mt-10">
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
      </Reveal>
    </section>
  )
}
