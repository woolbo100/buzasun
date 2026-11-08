'use client'

import Reveal from '@/components/Reveal'
import { wealthPatternFlowData } from './data'
import { ArrowRight, ArrowDown } from 'lucide-react'

export default function WealthPatternFlow() {
  return (
    <section className="mb-40">
      <Reveal>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-[12px] font-bold tracking-[0.25em] bg-[#608F82]/15 border border-[#608F82]/35 text-[#8FB4A4] uppercase mb-6">
            WEALTH DYNAMICS
          </span>
          <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white mb-6 leading-[1.25] md:leading-[1.3] break-keep whitespace-pre-line">
            {wealthPatternFlowData.mainCopy}
          </h2>
          <p className="text-[16px] md:text-[18px] text-[#EDE6DA] opacity-75 font-light break-keep">
            {wealthPatternFlowData.subCopy}
          </p>
        </div>

        {/* 4단계 도식 컨테이너 */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative items-stretch">
            {wealthPatternFlowData.steps.map((step, idx) => (
              <div key={idx} className="relative flex flex-col">
                <div className="gungjung-glass p-7 md:p-8 rounded-[28px] border border-white/10 hover:border-[#608F82]/50 bg-gradient-to-b from-[#0f241f]/40 via-transparent to-black/40 transition-all duration-300 h-full flex flex-col justify-between group">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-elegant font-bold text-[#8FB4A4]">
                        {step.step}
                      </span>
                      <span className="text-[11px] px-2.5 py-1 rounded-md bg-[#608F82]/15 text-[#8FB4A4] border border-[#608F82]/25 font-medium">
                        {step.tag}
                      </span>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-white mb-3 break-keep">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-xs md:text-sm text-[#EDE6DA]/70 font-light leading-relaxed break-keep mt-4 pt-4 border-t border-white/5">
                    {step.desc}
                  </p>
                </div>

                {/* 연결 화살표 (데스크톱: 우측 / 모바일: 하단) */}
                {idx < wealthPatternFlowData.steps.length - 1 && (
                  <>
                    <div className="hidden lg:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-[#0a0514] border border-[#608F82]/40 items-center justify-center text-[#8FB4A4] shadow-md">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                    <div className="flex lg:hidden justify-center my-2 text-[#8FB4A4]">
                      <ArrowDown className="w-5 h-5" />
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 핵심 인용 강조 배너 */}
        <div className="max-w-3xl mx-auto p-8 md:p-12 rounded-[28px] bg-gradient-to-r from-[#0f241f]/60 via-[#152e27]/80 to-[#0f241f]/60 border border-[#608F82]/35 text-center shadow-xl">
          <p className="text-lg md:text-2xl font-elegant font-bold text-[#E6BE8A] leading-relaxed whitespace-pre-line">
            &ldquo;{wealthPatternFlowData.quote}&rdquo;
          </p>
        </div>
      </Reveal>
    </section>
  )
}
