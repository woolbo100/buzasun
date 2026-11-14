'use client'

import { useState } from 'react'
import Reveal from '@/components/Reveal'
import { wealthFaqData } from './data'
import { ChevronDown } from 'lucide-react'

export default function WealthReportFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  return (
    <section className="mb-40" id="faq">
      <Reveal>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="block font-elegant text-[12pt] font-semibold tracking-[0.2em] text-[#8FB4A4] uppercase mb-4">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white mb-6 leading-[1.25] md:leading-[1.3] break-keep">
            {wealthFaqData.title}
          </h2>
          <p className="text-[16px] md:text-[18px] text-[#EDE6DA] opacity-75 font-light break-keep">
            {wealthFaqData.subTitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {wealthFaqData.items.map((item, idx) => {
            const isOpen = openIndex === idx
            return (
              <div
                key={idx}
                className="gungjung-glass rounded-2xl border border-white/10 overflow-hidden transition-colors hover:border-[#608F82]/30 bg-gradient-to-b from-[#0f241f]/20 via-transparent to-black/40"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base md:text-lg font-bold text-white break-keep flex items-center gap-3">
                    <span className="text-xs font-mono text-[#8FB4A4] shrink-0">
                      Q{idx + 1}.
                    </span>
                    {item.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'rotate-180 bg-[#608F82]/20 text-[#8FB4A4] border-[#608F82]/40'
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
