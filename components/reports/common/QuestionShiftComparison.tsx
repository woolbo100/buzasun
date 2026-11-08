'use client'

import Reveal from '@/components/Reveal'
import { HelpCircle, Compass, ArrowRight } from 'lucide-react'

interface QuestionShiftComparisonProps {
  theme: 'love' | 'abundance' | 'compatibility'
}

export default function QuestionShiftComparison({ theme }: QuestionShiftComparisonProps) {
  // 테마별 컬러 및 뱃지 설정
  const themeConfig = {
    love: {
      badgeBg: 'bg-[#B7788D]/15 border-[#B7788D]/35 text-[#D9A8A7]',
      cardBorder: 'border-[#B7788D]/40',
      glowBg: 'bg-[#B7788D]/10',
      activeText: 'text-[#D9A8A7]',
      highlightText: 'text-[#E6BFA9]',
      gradientClass: 'gradient-text-love',
      shadowClass: 'shadow-[0_0_30px_rgba(183,120,141,0.15)]',
    },
    abundance: {
      badgeBg: 'bg-[#608F82]/15 border-[#608F82]/35 text-[#8FB4A4]',
      cardBorder: 'border-[#608F82]/40',
      glowBg: 'bg-[#608F82]/10',
      activeText: 'text-[#8FB4A4]',
      highlightText: 'text-[#C6A477]',
      gradientClass: 'gradient-text-abundance',
      shadowClass: 'shadow-[0_0_30px_rgba(96,143,130,0.18)]',
    },
    compatibility: {
      badgeBg: 'bg-[#663244]/20 border-[#935C6B]/40 text-[#D8BB94]',
      cardBorder: 'border-[#935C6B]/40',
      glowBg: 'bg-[#663244]/20',
      activeText: 'text-[#D8BB94]',
      highlightText: 'text-[#C19B83]',
      gradientClass: 'gradient-text-reunion',
      shadowClass: 'shadow-[0_0_30px_rgba(102,50,68,0.25)]',
    },
  }[theme]

  return (
    <section className="mb-40">
      <Reveal>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className={`inline-block px-4 py-1.5 rounded-full text-[12px] font-bold tracking-[0.25em] ${themeConfig.badgeBg} uppercase mb-6`}>
            PARADIGM SHIFT
          </span>
          <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white mb-6 leading-[1.25] md:leading-[1.3] break-keep">
            당신은 아직도 <br className="sm:hidden" />
            <span className={themeConfig.gradientClass}>미래가 어떻게 될지만</span> 묻고 있습니까?
          </h2>
          <p className="text-[16px] md:text-[18px] text-[#EDE6DA] opacity-85 font-light leading-relaxed max-w-2xl mx-auto break-keep">
            진짜 바꿔야 할 것은 정해진 운세가 아니라,<br className="hidden sm:inline" />
            <span className={`${themeConfig.highlightText} font-medium`}>같은 상황에서 반복되는 나의 선택</span>일지도 모릅니다.
          </p>
        </div>

        {/* 2단 비교 카드 (모바일 세로, 데스크톱 가로) */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mb-12">
          
          {/* CARD 01 — 기존의 운세 중심 질문 */}
          <div className="gungjung-glass p-8 md:p-10 rounded-[32px] border border-white/10 bg-white/[0.02] flex flex-col justify-between relative overflow-hidden">
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono tracking-widest text-white/40 uppercase block">CARD 01</span>
                  <h3 className="text-lg md:text-xl font-bold text-white/70">기존의 운세 중심 질문</h3>
                </div>
              </div>
              <p className="text-sm text-[#EDE6DA]/50 font-light mb-6 break-keep">
                미래를 수동적으로 묻고 결과를 기다리는 익숙한 시선
              </p>

              <div className="space-y-3.5">
                {[
                  '올해 연애운이 좋을까?',
                  '나에게 재물복이 있을까?',
                  '우리는 천생연분일까?',
                  '앞으로 좋은 일이 생길까?'
                ].map((q, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-black/30 border border-white/5 flex items-center gap-3 text-white/60">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/30 shrink-0"></span>
                    <span className="text-sm md:text-base line-through opacity-70 break-keep">{q}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/5 text-xs text-white/40 text-center font-light">
              단순한 결과 풀이는 내 행동을 바꾸지 못합니다.
            </div>
          </div>

          {/* CARD 02 — 백도화 선천코드의 질문 */}
          <div className={`gungjung-glass p-8 md:p-10 rounded-[32px] border ${themeConfig.cardBorder} ${themeConfig.shadowClass} flex flex-col justify-between relative overflow-hidden bg-gradient-to-b from-[#1A0514]/80 via-[#2D0A1E]/30 to-[#0A0514]/90`}>
            {/* 배경 은은한 광채 */}
            <div className={`absolute -top-20 -right-20 w-60 h-60 ${themeConfig.glowBg} rounded-full blur-[80px] pointer-events-none`}></div>

            <div className="mb-6 relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-xl ${themeConfig.badgeBg} flex items-center justify-center`}>
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <span className={`text-xs font-mono tracking-widest ${themeConfig.activeText} uppercase block font-bold`}>CARD 02</span>
                  <h3 className="text-lg md:text-xl font-bold text-white">백도화 선천코드의 질문</h3>
                </div>
              </div>
              <p className="text-sm text-[#EDE6DA]/85 font-light mb-6 break-keep">
                선택의 뿌리를 분석하고 행동을 바꾸는 능동적인 설계
              </p>

              <div className="space-y-3.5">
                {[
                  '나는 왜 비슷한 연애에서 상처받을까?',
                  '돈 앞에서 반복되는 나의 선택은 무엇일까?',
                  '우리는 어떤 순간에 서로를 자극할까?',
                  '앞으로 무엇을 다르게 선택할 수 있을까?'
                ].map((q, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-black/50 border border-white/10 flex items-center gap-3 text-white shadow-sm">
                    <ArrowRight className={`w-4 h-4 ${themeConfig.activeText} shrink-0`} />
                    <span className="text-sm md:text-base font-medium break-keep">{q}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 text-xs text-[#EDE6DA]/75 text-center font-light relative z-10">
              구조를 알면, 마침내 다른 선택을 시작할 수 있습니다.
            </div>
          </div>

        </div>

        {/* 하단 강조 문구 박스 */}
        <div className="max-w-3xl mx-auto text-center p-6 md:p-8 rounded-2xl gungjung-glass border border-white/10 bg-black/40">
          <p className="text-lg md:text-xl font-elegant font-bold text-white break-keep">
            &ldquo;미래를 듣고 기다릴 것인가. <span className={themeConfig.highlightText}>나를 이해하고 선택을 바꿀 것인가.</span>&rdquo;
          </p>
        </div>
      </Reveal>
    </section>
  )
}
