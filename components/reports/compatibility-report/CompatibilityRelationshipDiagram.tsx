'use client'

import Reveal from '@/components/Reveal'
import { compatibilityDiagramData } from './data'
import { ArrowRight, ArrowDown } from 'lucide-react'

export default function CompatibilityRelationshipDiagram() {
  return (
    <section className="mb-40">
      <Reveal>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-[12px] font-bold tracking-[0.25em] bg-[#663244]/20 border border-[#935C6B]/40 text-[#D8BB94] uppercase mb-6">
            INTERACTION DYNAMICS
          </span>
          <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white mb-6 leading-[1.25] md:leading-[1.3] break-keep whitespace-pre-line">
            {compatibilityDiagramData.mainCopy}
          </h2>
          <p className="text-[16px] md:text-[18px] text-[#EDE6DA] opacity-75 font-light break-keep">
            {compatibilityDiagramData.subCopy}
          </p>
        </div>

        {/* 4단계 도식 컨테이너 */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative items-stretch">
            {compatibilityDiagramData.steps.map((step, idx) => (
              <div key={idx} className="relative flex flex-col">
                <div className="gungjung-glass p-7 md:p-8 rounded-[28px] border border-white/10 hover:border-[#935C6B]/50 bg-gradient-to-b from-[#2D0A1E]/30 via-transparent to-black/40 transition-all duration-300 h-full flex flex-col justify-between group">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-elegant font-bold text-[#D8BB94]">
                        {step.step}
                      </span>
                      <span className="text-[11px] px-2.5 py-1 rounded-md bg-[#663244]/20 border border-[#935C6B]/40 text-[#D8BB94] border border-[#935C6B]/30 font-medium">
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
                {idx < compatibilityDiagramData.steps.length - 1 && (
                  <>
                    <div className="hidden lg:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-[#1A0514] border border-[#935C6B]/50 items-center justify-center text-[#D8BB94] shadow-md">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                    <div className="flex lg:hidden justify-center my-2 text-[#D8BB94]">
                      <ArrowDown className="w-5 h-5" />
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 핵심 인용 강조 배너 (버건디 & 앤티크 골드) */}
        <div className="max-w-3xl mx-auto p-8 md:p-12 rounded-[28px] bg-gradient-to-r from-[#3B0F1B]/40 via-[#2D0A1E]/60 to-[#3B0F1B]/40 border border-[#935C6B]/40 text-center shadow-xl">
          <p className="text-lg md:text-2xl font-elegant font-bold text-[#C19B83] leading-relaxed whitespace-pre-line">
            &ldquo;{compatibilityDiagramData.quote}&rdquo;
          </p>
        </div>
      </Reveal>
    </section>
  )
}
