'use client'

import Reveal from '@/components/Reveal'
import { patternFlowData } from './data'
import { ArrowRight, ArrowDown } from 'lucide-react'

export default function RelationshipPatternFlow() {
  return (
    <section className="mb-40">
      <Reveal>
        <div className="max-w-4xl mx-auto text-center mb-16 space-y-6">
          <span className="block font-elegant text-[12pt] font-semibold tracking-[0.2em] text-[#D9A8A7] uppercase mb-4">
            RELATIONSHIP STRUCTURE
          </span>
          <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white mb-6 leading-[1.25] md:leading-[1.3] break-keep whitespace-pre-line">
            {patternFlowData.mainCopy}
          </h2>
          <p className="text-[17px] md:text-[18px] text-[#EDE6DA] opacity-80 font-light break-keep leading-relaxed">
            {patternFlowData.subCopy}
          </p>

          {/* 추가된 끌림과 설계도 서사 블록 */}
          <div className="pt-4 space-y-5 max-w-3xl mx-auto">
            <p className="text-sm md:text-base text-[#D9A8A7] font-medium tracking-wide">
              감정적 끌림에만 의존하던 연애가 왜 자꾸 상처로 끝났는지, 그 근본적인 원인을 짚어줍니다.
            </p>

            <div className="space-y-3 text-[16px] md:text-[17px] text-[#EDE6DA]/90 font-light leading-relaxed break-keep">
              <p>
                그동안 우리는 사랑이라는 이름 아래, 무방비로 감정적 &lsquo;끌림&rsquo;에 몸을 맡겨왔습니다.
              </p>
              <p>
                내 안의 진짜 무기가 무엇인지도 모른 채, 상대의 비위를 맞추고 관계의 을(乙)이 되기를 자처했지요.
              </p>
            </div>

            {/* 하지만 기억하십시오 & 핵심 경각심 강조 박스 */}
            <div 
              className="p-6 md:p-8 rounded-2xl border text-center space-y-3 backdrop-blur-sm"
              style={{
                background: 'rgba(125, 76, 100, 0.20)',
                borderColor: 'rgba(215, 170, 185, 0.20)',
              }}
            >
              <span className="inline-block text-xs md:text-sm font-bold tracking-widest text-[#F3C4D1] uppercase">
                하지만 기억하십시오
              </span>
              <p className="font-elegant font-medium text-[17px] md:text-[19px] text-white leading-relaxed break-keep">
                &ldquo;끌림에만 의존하는 연애는 정답 없는 미로를 맨발로 헤매는 것과 같습니다.<br className="hidden sm:inline" />
                <span className="text-[#D9A8A7] font-semibold"> 내 설계도를 모른 채 달리는 연애는, 언제나 같은 벽에 부딪히게 되어있습니다.</span>&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* 3단계 도식 컨테이너 */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative items-stretch">
            {patternFlowData.steps.map((step, idx) => (
              <div key={idx} className="relative flex flex-col">
                <div className="gungjung-glass p-8 md:p-10 rounded-[28px] border border-white/10 hover:border-[#B7788D]/40 transition-all duration-300 h-full flex flex-col justify-between group">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-elegant font-bold text-[#D9A8A7]">
                        {step.step}
                      </span>
                      <span className="text-[11px] px-2.5 py-1 rounded-md bg-[#B7788D]/15 border border-[#B7788D]/35 text-[#D9A8A7] border border-[#B7788D]/25 font-medium">
                        {step.tag}
                      </span>
                    </div>
                    <h3 className="text-[20px] md:text-[24px] font-bold text-white mb-3 leading-snug break-keep">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-sm md:text-base text-[#EDE6DA]/70 font-light leading-relaxed break-keep mt-4 pt-4 border-t border-white/5">
                    {step.desc}
                  </p>
                </div>

                {/* 연결 화살표 (데스크톱: 우측 / 모바일: 하단) */}
                {idx < patternFlowData.steps.length - 1 && (
                  <>
                    <div className="hidden md:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-[#1A0514] border border-[#B7788D]/40 items-center justify-center text-[#D9A8A7] shadow-md">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                    <div className="flex md:hidden justify-center my-2 text-[#D9A8A7]">
                      <ArrowDown className="w-5 h-5" />
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 핵심 인용 강조 배너 */}
        <div className="max-w-7xl mx-auto p-8 md:p-12 rounded-[28px] bg-gradient-to-r from-[var(--accent-gold)]/10 via-purple-950/20 to-[var(--accent-gold)]/10 border border-[#B7788D]/30 text-center shadow-xl">
          <p className="text-xl md:text-2xl font-elegant font-bold text-[#E6BFA9] leading-relaxed whitespace-pre-line">
            &ldquo;{patternFlowData.quote}&rdquo;
          </p>
        </div>
      </Reveal>
    </section>
  )
}
