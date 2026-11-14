'use client'

import Reveal from '@/components/Reveal'
import { compatibilityAnalysisMethodData } from './data'
import { Disc3, MessageSquareText, Handshake } from 'lucide-react'

export default function CompatibilityAnalysisMethod() {
  const icons = [
    <Disc3 key="disc" className="w-6 h-6 text-[#D8BB94]" />,
    <MessageSquareText key="chat" className="w-6 h-6 text-[#D8BB94]" />,
    <Handshake key="shake" className="w-6 h-6 text-[#D8BB94]" />
  ]

  return (
    <section className="mb-40">
      <Reveal>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="block text-[12px] font-semibold tracking-[0.2em] text-[#D8BB94] uppercase mb-4">
            THREE-STEP ANALYSIS
          </span>
          <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white mb-6 leading-[1.25] md:leading-[1.3] break-keep whitespace-pre-line">
            {compatibilityAnalysisMethodData.title}
          </h2>
          <p className="text-[16px] md:text-[18px] text-[#EDE6DA] opacity-75 font-light break-keep">
            {compatibilityAnalysisMethodData.subTitle}
          </p>
        </div>

        {/* 3대 분석 카드 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {compatibilityAnalysisMethodData.cards.map((card, idx) => (
            <div
              key={idx}
              className="gungjung-glass p-8 md:p-10 rounded-[28px] border border-white/10 hover:border-[#935C6B]/50 bg-gradient-to-b from-[#2D0A1E]/30 via-transparent to-black/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#3B0F1B]/70 border border-[#935C6B]/40 flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform">
                  {icons[idx]}
                </div>
                <span className="text-xs font-mono font-bold tracking-widest text-[#D8BB94] mb-2 block">
                  PHASE {card.num}
                </span>
                <h3 className="text-[20px] md:text-[24px] font-bold text-white mb-2 leading-snug break-keep">{card.title}</h3>
                <span className="text-xs text-[#C19B83]/80 font-medium mb-4 block">
                  {card.subtitle}
                </span>
                <p className="text-sm md:text-base text-[#EDE6DA]/70 font-light leading-relaxed break-keep">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 강조 문구 배너 */}
        <div className="max-w-7xl mx-auto p-6 md:p-8 rounded-2xl bg-gradient-to-r from-[#2D0A1E]/30 via-white/[0.02] to-[#2D0A1E]/30 border border-white/10 text-center">
          <p className="text-base md:text-lg text-[#EDE6DA] font-light leading-relaxed break-keep">
            ✨ {compatibilityAnalysisMethodData.highlight}
          </p>
        </div>
      </Reveal>
    </section>
  )
}
