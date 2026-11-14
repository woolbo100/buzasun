'use client'

import Reveal from '@/components/Reveal'
import { wealthAdviceData } from './data'

export default function WealthAdviceComparison() {
  return (
    <section className="mb-40">
      <Reveal>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="block font-elegant text-[12pt] font-semibold tracking-[0.2em] text-[#8FB4A4] uppercase mb-4">
            BEYOND STANDARD FORMULAS
          </span>
          <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white mb-6 leading-[1.25] md:leading-[1.3] break-keep whitespace-pre-line">
            {wealthAdviceData.mainCopy}
          </h2>
          <p className="text-[16px] md:text-[18px] text-[#EDE6DA] opacity-75 font-light break-keep">
            {wealthAdviceData.subCopy}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {wealthAdviceData.cards.map((card, idx) => (
            <div
              key={idx}
              className="gungjung-glass p-8 md:p-10 rounded-[28px] border border-white/10 hover:border-[#608F82]/50 bg-gradient-to-b from-[#0f241f]/30 via-transparent to-black/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(96, 143, 130, 0.15)] flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono font-bold tracking-widest text-[#E6BE8A]">
                    {card.num}
                  </span>
                  <span className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70">
                    {card.tag}
                  </span>
                </div>
                <h3 className="text-[20px] md:text-[24px] font-elegant font-bold text-white mb-4 leading-snug break-keep group-hover:text-[#8FB4A4] transition-colors">
                  &ldquo;{card.content}&rdquo;
                </h3>
              </div>
              <p className="text-sm md:text-base text-[#EDE6DA]/65 leading-relaxed font-light break-keep pt-4 border-t border-white/5">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg md:text-xl font-elegant font-medium text-[#E6BE8A] tracking-wide">
            &ldquo;{wealthAdviceData.conclusion}&rdquo;
          </p>
        </div>
      </Reveal>
    </section>
  )
}
