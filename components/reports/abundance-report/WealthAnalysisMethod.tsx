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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full max-w-[1280px] mx-auto items-stretch">
      {wealthAnalysisMethodData.cards.map((card, idx) => (
        <div
          key={idx}
          className="gungjung-glass p-7 sm:p-8 lg:p-9 rounded-[28px] border border-white/10 hover:border-[#608F82]/50 bg-gradient-to-b from-[#0f241f]/35 via-transparent to-black/40 transition-all duration-300 flex flex-col group h-full"
        >
          <div className="w-14 h-14 rounded-2xl bg-[#0f241f] border border-[#608F82]/40 flex items-center justify-center mb-6 md:mb-7 shadow-lg group-hover:scale-110 transition-transform shrink-0">
            {icons[idx]}
          </div>
          <span className="text-xs font-mono font-bold tracking-widest text-[#C2A477] mb-3 block">
            PHASE {card.num}
          </span>
          <h3 className="text-[21px] md:text-[24px] font-bold text-white mb-2 leading-[1.35] break-keep">
            {card.title}
          </h3>
          <span className="text-[16px] text-[#8FB4A4] font-semibold leading-[1.5] mb-5 md:mb-6 block break-keep">
            {card.subtitle}
          </span>
          <p className="text-[16px] text-[#EDE6DA]/75 font-normal leading-[1.7] break-keep">
            {card.desc}
          </p>
        </div>
      ))}
    </div>
  )
}


