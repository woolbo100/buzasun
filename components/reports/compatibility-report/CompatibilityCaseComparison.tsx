'use client'

import Reveal from '@/components/Reveal'
import { compatibilityCaseData } from './data'

export default function CompatibilityCaseComparison() {
  return (
    <section className="mb-40">
      <Reveal>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="block text-[12px] font-semibold tracking-[0.2em] text-[#D8BB94] uppercase mb-4">
            DIFFERENT CHOICES, DIFFERENT BONDS
          </span>
          <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white mb-6 leading-[1.25] md:leading-[1.3] break-keep whitespace-pre-line">
            {compatibilityCaseData.mainCopy}
          </h2>
          <p className="text-[16px] md:text-[18px] text-[#EDE6DA] opacity-75 font-light break-keep">
            {compatibilityCaseData.subCopy}
          </p>
        </div>

        {/* CASE A & B 비교 카드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto mb-12">
          {compatibilityCaseData.cases.map((c, idx) => (
            <div
              key={idx}
              className="gungjung-glass p-8 md:p-10 rounded-[32px] border border-white/10 hover:border-[#935C6B]/50 bg-gradient-to-b from-[#2D0A1E]/25 via-black/30 to-black/35 transition-all duration-300 relative overflow-hidden flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider bg-[#663244] text-[#1A0514]">
                    {c.badge}
                  </span>
                  <div className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-[#C19B83]">
                    선천 관계 기질: <span className="font-semibold">{c.code}</span>
                  </div>
                </div>

                <h3 className="text-[20px] md:text-[24px] font-bold text-white mb-3 group-hover:text-[#C19B83] transition-colors leading-snug break-keep">
                  {c.typeName}
                </h3>
                <p className="text-xs text-[#EDE6DA]/60 mb-6 font-light break-keep">
                  {c.structureDesc}
                </p>

                <div className="space-y-4">
                  {/* 실제 관계 기록 */}
                  <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                    <span className="text-xs font-bold text-white/50 block mb-1">
                      {c.behaviorTitle}
                    </span>
                    <p className="text-sm md:text-base text-[#EDE6DA]/85 font-light leading-relaxed break-keep">
                      {c.behaviorDesc}
                    </p>
                  </div>

                  {/* 반복되는 갈등 */}
                  <div className="p-4 rounded-2xl bg-[#3B0F1B]/30 border border-rose-900/30">
                    <span className="text-xs font-bold text-rose-300/80 block mb-1">
                      {c.conflictTitle}
                    </span>
                    <p className="text-sm md:text-base text-rose-100/85 font-light leading-relaxed break-keep">
                      {c.conflictDesc}
                    </p>
                  </div>
                </div>
              </div>

              {/* 실천 처방 (하단 강조) */}
              <div className="mt-8 pt-6 border-t border-[#935C6B]/30 p-4 rounded-2xl bg-[#663244]/20">
                <span className="text-xs font-bold text-[#D8BB94] block mb-1">
                  ✨ {c.solutionTitle}
                </span>
                <p className="text-sm md:text-base text-white font-medium leading-relaxed break-keep">
                  {c.solutionDesc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 결론 요약 & 면책 고지 */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <p className="text-base md:text-lg text-[#C19B83] font-elegant leading-relaxed whitespace-pre-line font-medium">
            {compatibilityCaseData.conclusion}
          </p>
          <p className="text-xs text-white/40">
            {compatibilityCaseData.disclaimer}
          </p>
        </div>
      </Reveal>
    </section>
  )
}
