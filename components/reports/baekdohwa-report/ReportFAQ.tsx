'use client'

import { useState } from 'react'
import Reveal from '@/components/Reveal'
import { faqData } from './data'
import { ChevronDown } from 'lucide-react'

export default function ReportFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  return (
    <section className="mb-40" id="faq">
      <Reveal>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="block font-elegant text-[12pt] font-semibold tracking-[0.2em] text-[#D9A8A7] uppercase mb-4">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white mb-6 leading-[1.25] md:leading-[1.3] break-keep">
            {faqData.title}
          </h2>
          <p className="text-[16px] md:text-[18px] text-[#EDE6DA] opacity-75 font-light break-keep">
            {faqData.subTitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqData.items.map((item, idx) => {
            const isOpen = openIndex === idx
            return (
              <div
                key={idx}
                className="gungjung-glass rounded-2xl border border-white/10 overflow-hidden transition-colors hover:border-white/20"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base md:text-lg font-bold text-white break-keep flex items-center gap-3">
                    <span className="text-xs font-mono text-[#D9A8A7] shrink-0">
                      Q{idx + 1}.
                    </span>
                    {item.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'rotate-180 bg-[#B7788D]/20 text-[#D9A8A7] border-[#B7788D]/40'
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
