'use client'

import { useState } from 'react'
import Reveal from '@/components/Reveal'
import { compatibilityTableOfContentsData } from './data'
import { ChevronDown, Sparkles } from 'lucide-react'

export default function CompatibilityReportTableOfContents() {
  // 기본적으로 PART 01을 펼친 상태로 시작
  const [openParts, setOpenParts] = useState<string[]>(['part-1'])

  const togglePart = (partId: string) => {
    if (openParts.includes(partId)) {
      setOpenParts(openParts.filter((id) => id !== partId))
    } else {
      setOpenParts([...openParts, partId])
    }
  }

  return (
    <section className="mb-40" id="table-of-contents">
      <Reveal>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-[12px] font-bold tracking-[0.25em] bg-[var(--accent-gold)]/10 border border-[var(--accent-gold)]/20 text-[var(--accent-gold-light)] uppercase mb-6">
            CHAPTERS & CURRICULUM
          </span>
          <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white mb-6 leading-[1.25] md:leading-[1.3] break-keep whitespace-pre-line">
            {compatibilityTableOfContentsData.title}
          </h2>
          <p className="text-[16px] md:text-[18px] text-[#EDE6DA] opacity-75 font-light break-keep">
            {compatibilityTableOfContentsData.subTitle}
          </p>
        </div>

        {/* 7개 PART 아코디언 목록 */}
        <div className="max-w-4xl mx-auto space-y-4 mb-16">
          {compatibilityTableOfContentsData.parts.map((part) => {
            const isOpen = openParts.includes(part.id)
            const isSpecial = part.isSpecial

            return (
              <div
                key={part.id}
                className={`rounded-[24px] border transition-all duration-300 overflow-hidden ${
                  isSpecial
                    ? 'bg-gradient-to-r from-[#3B0F1B]/90 via-[#2D0A1E]/80 to-[#1A0514]/90 border-[var(--accent-gold)]/50 shadow-[0_0_30px_rgba(212,178,167,0.15)]'
                    : 'gungjung-glass border-white/10 hover:border-white/20 bg-gradient-to-b from-[#2D0A1E]/20 via-black/30 to-black/50'
                }`}
              >
                {/* 아코디언 헤더 버튼 */}
                <button
                  type="button"
                  onClick={() => togglePart(part.id)}
                  className="w-full p-6 md:p-8 flex items-center justify-between text-left gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 flex-1">
                    <div className="flex items-center gap-3">
                      <span
                        className={`text-xs font-mono font-bold tracking-widest px-3 py-1 rounded-md ${
                          isSpecial
                            ? 'bg-[var(--accent-gold)] text-[#1A0514]'
                            : 'bg-white/10 text-[var(--accent-gold-light)]'
                        }`}
                      >
                        {part.number}
                      </span>
                      {isSpecial && (
                        <span className="flex items-center gap-1 text-[11px] text-[var(--accent-gold-light)] font-bold">
                          <Sparkles className="w-3.5 h-3.5 text-[var(--accent-gold)]" />
                          핵심 관계 처방
                        </span>
                      )}
                    </div>
                    <h3 className="text-[20px] md:text-[24px] font-bold text-white break-keep">
                      {part.title}
                    </h3>
                    <p className="text-xs md:text-sm text-[#EDE6DA]/60 font-light break-keep md:ml-auto">
                      {part.summary}
                    </p>
                  </div>

                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center border shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'rotate-180 bg-[var(--accent-gold)]/20 border-[var(--accent-gold)]/50 text-[var(--accent-gold)]'
                        : 'border-white/10 bg-white/5 text-white/50'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* 세부 항목 리스트 */}
                {isOpen && (
                  <div className="px-6 pb-8 md:px-8 border-t border-white/5 pt-6 bg-black/30">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                      {part.items.map((item, itemIdx) => (
                        <div
                          key={itemIdx}
                          className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[var(--accent-gold)]/30 transition-colors"
                        >
                          <span className="w-2 h-2 rounded-full bg-[var(--accent-gold)] mt-2 shrink-0"></span>
                          <span className="text-sm md:text-base text-[#EDE6DA]/90 font-medium break-keep">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* PART 07 별도 프리미엄 독립 강조 카드 (딥 버건디 & 앤티크 골드) */}
        <div className="max-w-4xl mx-auto p-8 md:p-14 rounded-[36px] bg-gradient-to-b from-[#3B0F1B] via-[#2D0A1E] to-[#120014] border-2 border-[var(--accent-gold)]/50 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[var(--accent-gold)]/10 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="relative z-10 text-center mb-10">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[12px] font-bold tracking-widest bg-[var(--accent-gold)]/20 text-[var(--accent-gold-light)] border border-[var(--accent-gold)]/40 mb-6 uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              PART 07 COMPATIBILITY PRESCRIPTION
            </span>
            <h3 className="text-2xl md:text-[36px] font-elegant font-bold text-white mb-4 leading-[1.25] md:leading-[1.3] break-keep whitespace-pre-line">
              {compatibilityTableOfContentsData.part7Highlight.title}
            </h3>
            <p className="text-[16px] md:text-[18px] text-[#EDE6DA]/85 max-w-2xl mx-auto font-light leading-relaxed break-keep">
              {compatibilityTableOfContentsData.part7Highlight.subTitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
            {compatibilityTableOfContentsData.part7Highlight.features.map((feat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-black/50 border border-[var(--accent-gold)]/20 hover:border-[var(--accent-gold)]/60 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-base font-bold font-mono text-[var(--accent-gold)] px-2.5 py-0.5 rounded-md bg-[var(--accent-gold)]/10">
                    NO. {feat.num}
                  </span>
                  <h4 className="text-lg font-bold text-white break-keep">
                    {feat.title}
                  </h4>
                </div>
                <p className="text-sm text-[#EDE6DA]/70 font-light leading-relaxed break-keep">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
