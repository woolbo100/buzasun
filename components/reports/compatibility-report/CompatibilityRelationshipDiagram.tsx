'use client'

import Reveal from '@/components/Reveal'
import { compatibilityDiagramData } from './data'
import { ArrowRight, ArrowDown } from 'lucide-react'

export default function CompatibilityRelationshipDiagram() {
  return (
    <section className="mb-40">
      <Reveal>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="block font-elegant text-[12pt] font-semibold tracking-[0.2em] text-[#D8BB94] uppercase mb-4">
            INTERACTION DYNAMICS
          </span>
          <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white mb-6 leading-[1.25] md:leading-[1.3] break-keep whitespace-pre-line">
            {compatibilityDiagramData.mainCopy}
          </h2>
          <p className="text-[18px] text-[#EDE6DA] opacity-75 font-light break-keep">
            {compatibilityDiagramData.subCopy}
          </p>
        </div>

        {/* 4단계 도식 컨테이너 */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative items-stretch">
            {compatibilityDiagramData.steps.map((step, idx) => (
              <div key={idx} className="relative flex flex-col">
                <div className="gungjung-glass p-7 md:p-8 rounded-[28px] border border-[#B78C86]/25 hover:border-[#C7A97A]/50 bg-gradient-to-b from-[#4A1F2D]/35 to-[#3A1623]/35 transition-all duration-300 h-full flex flex-col justify-between group backdrop-blur-md">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-elegant font-bold text-[#D8BB94]">
                        {step.step}
                      </span>
                      <span className="text-[11px] px-2.5 py-1 rounded-md bg-[#5A2638]/40 border border-[#B78C86]/35 text-[#D8BB94] font-medium">
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
                    <div className="hidden lg:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-[#240C18] border border-[#B78C86]/40 items-center justify-center text-[#D8BB94] shadow-md">
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
        <div className="max-w-7xl mx-auto p-8 md:p-12 rounded-[28px] bg-gradient-to-r from-[#4A1F2D]/35 via-[#5A2638]/25 to-[#4A1F2D]/35 border border-[#B78C86]/35 text-center shadow-xl backdrop-blur-md">
          <p className="text-lg md:text-2xl font-elegant font-bold text-[#C19B83] leading-relaxed whitespace-pre-line">
            &ldquo;{compatibilityDiagramData.quote}&rdquo;
          </p>
        </div>
      </Reveal>
    </section>
  )
}
