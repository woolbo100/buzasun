'use client'

import Reveal from '@/components/Reveal'
import { compatibilityAdviceData } from './data'

export default function CompatibilityAdviceComparison() {
  return (
    <section className="mb-40">
      <Reveal>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="block text-[12px] font-semibold tracking-[0.2em] text-[#D8BB94] uppercase mb-4">
            BEYOND COMMON ADVICE
          </span>
          <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white mb-6 leading-[1.25] md:leading-[1.3] break-keep whitespace-pre-line">
            {compatibilityAdviceData.mainCopy}
          </h2>
          <p className="text-[16px] md:text-[18px] text-[#EDE6DA] opacity-75 font-light break-keep">
            {compatibilityAdviceData.subCopy}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {compatibilityAdviceData.cards.map((card, idx) => (
            <div
              key={idx}
              className="gungjung-glass p-8 md:p-10 rounded-[28px] border border-white/10 hover:border-[#935C6B]/50 bg-gradient-to-b from-[#2D0A1E]/20 via-transparent to-black/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(69,10,24,0.3)] flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono font-bold tracking-widest text-[#D8BB94]">
                    {card.num}
                  </span>
                  <span className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70">
                    {card.tag}
                  </span>
                </div>
                <h3 className="text-[20px] md:text-[24px] font-elegant font-bold text-white mb-4 leading-snug break-keep group-hover:text-[#C19B83] transition-colors">
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
