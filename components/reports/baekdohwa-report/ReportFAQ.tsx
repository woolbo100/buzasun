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
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.25em] bg-[var(--accent-gold)]/10 border border-[var(--accent-gold)]/20 text-[var(--accent-gold-light)] uppercase mb-6">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="text-3xl md:text-5xl font-elegant font-bold text-white mb-6 leading-tight">
            {faqData.title}
          </h2>
          <p className="text-lg md:text-xl text-[#EDE6DA] opacity-75 font-light">
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
                    <span className="text-xs font-mono text-[var(--accent-gold)] shrink-0">
                      Q{idx + 1}.
                    </span>
                    {item.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'rotate-180 bg-[var(--accent-gold)]/20 text-[var(--accent-gold)] border-[var(--accent-gold)]/40'
                        : 'text-white/50 bg-white/5'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-sm md:text-base text-[#EDE6DA]/75 font-light leading-relaxed break-keep border-t border-white/5">
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
