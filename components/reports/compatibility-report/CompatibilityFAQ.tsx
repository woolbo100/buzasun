'use client'

import { useState } from 'react'
import Reveal from '@/components/Reveal'
import { compatibilityFaqData } from './data'
import { ChevronDown } from 'lucide-react'

export default function CompatibilityFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  return (
    <section className="mb-40" id="faq">
      <Reveal>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-[12px] font-bold tracking-[0.25em] bg-[#663244]/20 border border-[#935C6B]/40 text-[#D8BB94] uppercase mb-6">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white mb-6 leading-[1.25] md:leading-[1.3] break-keep">
            {compatibilityFaqData.title}
          </h2>
          <p className="text-[16px] md:text-[18px] text-[#EDE6DA] opacity-75 font-light break-keep">
            {compatibilityFaqData.subTitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {compatibilityFaqData.items.map((item, idx) => {
            const isOpen = openIndex === idx
            return (
              <div
                key={idx}
                className="gungjung-glass rounded-2xl border border-white/10 overflow-hidden transition-colors hover:border-white/20 bg-gradient-to-b from-[#2D0A1E]/20 via-transparent to-black/40"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base md:text-lg font-bold text-white break-keep flex items-center gap-3">
                    <span className="text-xs font-mono text-[#D8BB94] shrink-0">
                      Q{idx + 1}.
                    </span>
                    {item.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'rotate-180 bg-[#663244]/30 text-[#D8BB94] border-[#935C6B]/50'
                        : 'text-white/50 bg-white/5'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-[15px] md:text-[16px] text-[#EDE6DA]/85 font-light leading-relaxed break-keep border-t border-white/5">
                    {item.a}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </Reveal>
    </section>
  )
}
