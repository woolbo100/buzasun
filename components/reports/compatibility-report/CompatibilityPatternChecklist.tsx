'use client'

import { useState } from 'react'
import Reveal from '@/components/Reveal'
import { compatibilityChecklistData } from './data'
import { Check } from 'lucide-react'

export default function CompatibilityPatternChecklist() {
  const [checkedIndices, setCheckedIndices] = useState<number[]>([])

  const toggleCheck = (idx: number) => {
    if (checkedIndices.includes(idx)) {
      setCheckedIndices(checkedIndices.filter((i) => i !== idx))
    } else {
      setCheckedIndices([...checkedIndices, idx])
    }
  }

  const selectedCount = checkedIndices.length
  const isHighPattern = selectedCount >= 3

  return (
    <section className="mb-40">
      <Reveal>
        <div className="max-w-4xl mx-auto text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full text-[12px] font-bold tracking-[0.25em] bg-[var(--accent-gold)]/10 border border-[var(--accent-gold)]/20 text-[var(--accent-gold-light)] uppercase mb-6">
            RELATIONSHIP CHECKLIST
          </span>
          <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white mb-6 leading-[1.25] md:leading-[1.3] break-keep whitespace-pre-line">
            {compatibilityChecklistData.title}
          </h2>
          <p className="text-[16px] md:text-[18px] text-[#EDE6DA] opacity-80 whitespace-pre-line leading-relaxed font-light break-keep">
            {compatibilityChecklistData.subtitle}
          </p>
        </div>

        <div className="gungjung-glass p-8 md:p-14 rounded-[32px] max-w-3xl mx-auto border border-white/10 shadow-2xl relative overflow-hidden bg-gradient-to-b from-[#2D0A1E]/30 via-black/40 to-black/60">
          {/* 딥 버건디 은은한 배경 광채 */}
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-[#450a18]/20 rounded-full blur-[90px] pointer-events-none"></div>

          <div className="space-y-4 mb-8 relative z-10">
            {compatibilityChecklistData.items.map((item, idx) => {
              const isChecked = checkedIndices.includes(idx)
              return (
                <div
                  key={idx}
                  onClick={() => toggleCheck(idx)}
                  className={`cursor-pointer p-4 md:p-5 rounded-2xl border transition-all duration-300 flex items-center gap-4 ${
                    isChecked
                      ? 'bg-gradient-to-r from-[#3B0F1B]/60 to-[#2D0A1E]/40 border-[var(--accent-gold)]/70 text-white shadow-[0_0_20px_rgba(212,178,167,0.15)]'
                      : 'bg-white/[0.02] border-white/5 text-[#EDE6DA]/75 hover:bg-white/[0.04] hover:border-white/15'
                  }`}
                >
                  <div
                    className={`w-6 h-6 md:w-7 md:h-7 rounded-lg flex items-center justify-center shrink-0 border transition-all duration-300 ${
                      isChecked
                        ? 'bg-[var(--accent-gold)] border-[var(--accent-gold)] text-[#1A0514]'
                        : 'border-white/20 bg-black/30'
                    }`}
                  >
                    {isChecked && <Check className="w-4 h-4 stroke-[3]" />}
                  </div>
                  <span className="text-base md:text-lg font-medium select-none break-keep">
                    {item}
                  </span>
                </div>
              )
            })}
          </div>

          {/* 결과 안내 카드 */}
          <div className="p-6 rounded-2xl bg-black/50 border border-white/10 text-center relative z-10 transition-all duration-500">
            <div className="mb-2">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-white/5 text-[var(--accent-gold-light)] border border-white/10">
                선택 항목: {selectedCount} / {compatibilityChecklistData.items.length}
              </span>
            </div>

            {isHighPattern && (
              <p className="text-[var(--accent-gold)] font-bold text-base md:text-lg mb-2">
                {compatibilityChecklistData.highlight}
              </p>
            )}

            <p className="text-sm md:text-base text-[#EDE6DA]/90 break-keep font-light">
              {isHighPattern
                ? compatibilityChecklistData.feedbackHigh
                : compatibilityChecklistData.feedbackLow}
            </p>

            <p className="text-[11px] text-white/35 mt-4 break-keep">
              {compatibilityChecklistData.disclaimer}
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
