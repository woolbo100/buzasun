'use client'

import Reveal from '@/components/Reveal'
import { compatibilityAdviceData } from './data'

export default function CompatibilityAdviceComparison() {
  return (
    <section className="mb-40">
      <Reveal>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.25em] bg-[var(--accent-gold)]/10 border border-[var(--accent-gold)]/20 text-[var(--accent-gold-light)] uppercase mb-6">
            BEYOND COMMON ADVICE
          </span>
          <h2 className="text-3xl md:text-5xl font-elegant font-bold text-white mb-6 leading-tight whitespace-pre-line">
            {compatibilityAdviceData.mainCopy}
          </h2>
          <p className="text-lg md:text-xl text-[#EDE6DA] opacity-75 font-light">
            {compatibilityAdviceData.subCopy}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {compatibilityAdviceData.cards.map((card, idx) => (
            <div
              key={idx}
              className="gungjung-glass p-8 md:p-10 rounded-[28px] border border-white/10 hover:border-[var(--accent-gold)]/40 bg-gradient-to-b from-[#2D0A1E]/20 via-transparent to-black/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(69,10,24,0.3)] flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono font-bold tracking-widest text-[var(--accent-gold)]">
                    {card.num}
                  </span>
                  <span className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70">
                    {card.tag}
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-elegant font-bold text-white mb-4 leading-snug break-keep group-hover:text-[var(--accent-gold-light)] transition-colors">
                  &ldquo;{card.content}&rdquo;
                </h3>
              </div>
              <p className="text-sm md:text-base text-[#EDE6DA]/65 leading-relaxed font-light break-keep pt-4 border-t border-white/5">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
