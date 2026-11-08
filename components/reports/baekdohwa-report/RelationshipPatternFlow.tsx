'use client'

import Reveal from '@/components/Reveal'
import { patternFlowData } from './data'
import { ArrowRight, ArrowDown } from 'lucide-react'

export default function RelationshipPatternFlow() {
  return (
    <section className="mb-40">
      <Reveal>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.25em] bg-[var(--accent-gold)]/10 border border-[var(--accent-gold)]/20 text-[var(--accent-gold-light)] uppercase mb-6">
            RELATIONSHIP STRUCTURE
          </span>
          <h2 className="text-3xl md:text-5xl font-elegant font-bold text-white mb-6 leading-tight whitespace-pre-line">
            {patternFlowData.mainCopy}
          </h2>
          <p className="text-lg md:text-xl text-[#EDE6DA] opacity-75 font-light">
            {patternFlowData.subCopy}
          </p>
        </div>

        {/* 3단계 도식 컨테이너 */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative items-stretch">
            {patternFlowData.steps.map((step, idx) => (
              <div key={idx} className="relative flex flex-col">
                <div className="gungjung-glass p-8 md:p-10 rounded-[28px] border border-white/10 hover:border-[var(--accent-gold)]/40 transition-all duration-300 h-full flex flex-col justify-between group">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-elegant font-bold text-[var(--accent-gold)]">
                        {step.step}
                      </span>
                      <span className="text-[11px] px-2.5 py-1 rounded-md bg-[var(--accent-gold)]/10 text-[var(--accent-gold-light)] border border-[var(--accent-gold)]/20 font-medium">
                        {step.tag}
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3 break-keep">
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
                    <div className="hidden md:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-[#1A0514] border border-[var(--accent-gold)]/40 items-center justify-center text-[var(--accent-gold)] shadow-md">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                    <div className="flex md:hidden justify-center my-2 text-[var(--accent-gold)]">
                      <ArrowDown className="w-5 h-5" />
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 핵심 인용 강조 배너 */}
        <div className="max-w-3xl mx-auto p-8 md:p-12 rounded-[28px] bg-gradient-to-r from-[var(--accent-gold)]/10 via-purple-950/20 to-[var(--accent-gold)]/10 border border-[var(--accent-gold)]/30 text-center shadow-xl">
          <p className="text-xl md:text-2xl font-elegant font-bold text-[var(--accent-gold-light)] leading-relaxed whitespace-pre-line">
            &ldquo;{patternFlowData.quote}&rdquo;
          </p>
        </div>
      </Reveal>
    </section>
  )
}
