'use client'

import { wealthAnalysisMethodData } from './data'
import { Gem, TrendingUp, Sprout } from 'lucide-react'

export default function WealthAnalysisMethod() {
  const icons = [
    <Gem key="gem" className="w-6 h-6 text-[#8FB4A4]" />,
    <TrendingUp key="trend" className="w-6 h-6 text-[#8FB4A4]" />,
    <Sprout key="sprout" className="w-6 h-6 text-[#8FB4A4]" />
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-[1280px] mx-auto items-stretch">
      {wealthAnalysisMethodData.cards.map((card, idx) => (
        <div
          key={idx}
          className="gungjung-glass p-8 md:p-10 rounded-[28px] border border-white/10 hover:border-[#608F82]/50 bg-gradient-to-b from-[#0f241f]/35 via-transparent to-black/40 transition-all duration-300 flex flex-col justify-between group h-full"
        >
          <div>
            <div className="w-14 h-14 rounded-2xl bg-[#0f241f] border border-[#608F82]/40 flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform">
              {icons[idx]}
            </div>
            <span className="text-xs font-mono font-bold tracking-widest text-[#C2A477] mb-2 block">
              PHASE {card.num}
            </span>
            <h3 className="text-[20px] md:text-[24px] font-bold text-white mb-2 leading-snug break-keep">{card.title}</h3>
            <span className="text-xs text-[#8FB4A4] font-medium mb-4 block">
              {card.subtitle}
            </span>
            <p className="text-sm md:text-base text-[#EDE6DA]/70 font-light leading-relaxed break-keep">
              {card.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

