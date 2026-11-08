'use client'

import { useState } from 'react'
import Reveal from '@/components/Reveal'
import { wealthChecklistData } from './data'
import { Check } from 'lucide-react'

export default function WealthPatternChecklist() {
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
          <span className="inline-block px-4 py-1.5 rounded-full text-[12px] font-bold tracking-[0.25em] bg-[#608F82]/15 border border-[#608F82]/35 text-[#8FB4A4] uppercase mb-6">
            WEALTH PATTERN CHECKLIST
          </span>
          <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white mb-6 leading-[1.25] md:leading-[1.3] break-keep whitespace-pre-line">
            {wealthChecklistData.title}
          </h2>
          <p className="text-[16px] md:text-[18px] text-[#EDE6DA] opacity-80 whitespace-pre-line leading-relaxed font-light break-keep">
            {wealthChecklistData.subtitle}
          </p>
        </div>

        <div className="gungjung-glass p-8 md:p-14 rounded-[32px] max-w-3xl mx-auto border border-[#608F82]/25 shadow-2xl relative overflow-hidden bg-gradient-to-b from-[#0f241f]/40 via-black/40 to-black/60">
          {/* 연옥빛 은은한 배경 광채 */}
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-[#608F82]/15 rounded-full blur-[90px] pointer-events-none"></div>

          <div className="space-y-4 mb-8 relative z-10">
            {wealthChecklistData.items.map((item, idx) => {
              const isChecked = checkedIndices.includes(idx)
              return (
                <div
                  key={idx}
                  onClick={() => toggleCheck(idx)}
                  className={`cursor-pointer p-4 md:p-5 rounded-2xl border transition-all duration-300 flex items-center gap-4 ${
                    isChecked
                      ? 'bg-gradient-to-r from-[#152e27]/80 to-[#0f241f]/60 border-[#608F82]/70 text-white shadow-[0_0_20px_rgba(96, 143, 130, 0.15)]'
                      : 'bg-white/[0.02] border-white/5 text-[#EDE6DA]/75 hover:bg-white/[0.04] hover:border-white/15'
                  }`}
                >
                  <div
                    className={`w-6 h-6 md:w-7 md:h-7 rounded-lg flex items-center justify-center shrink-0 border transition-all duration-300 ${
                      isChecked
                        ? 'bg-[#608F82] border-[#608F82] text-[#0f241f]'
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
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-white/5 text-[#E6BE8A] border border-white/10">
                선택 항목: {selectedCount} / {wealthChecklistData.items.length}
              </span>
            </div>

            {isHighPattern && (
              <p className="text-[#8FB4A4] font-bold text-base md:text-lg mb-2">
                {wealthChecklistData.highlight}
              </p>
            )}

            <p className="text-sm md:text-base text-[#EDE6DA]/90 break-keep font-light">
              {isHighPattern
                ? wealthChecklistData.feedbackHigh
                : wealthChecklistData.feedbackLow}
            </p>

            <p className="text-[11px] text-white/35 mt-4 break-keep">
              {wealthChecklistData.disclaimer}
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
