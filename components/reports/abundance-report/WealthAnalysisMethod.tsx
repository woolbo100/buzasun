'use client'

import { wealthAnalysisMethodData } from './data'
import { Gem, TrendingUp, Sprout } from 'lucide-react'

export default function WealthAnalysisMethod() {
  const icons = [
    <Gem key="gem" className="w-5 h-5 text-[#8FB4A4]" />,
    <TrendingUp key="trend" className="w-5 h-5 text-[#8FB4A4]" />,
    <Sprout key="sprout" className="w-5 h-5 text-[#8FB4A4]" />
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full max-w-[1280px] mx-auto items-stretch">
      {wealthAnalysisMethodData.cards.map((card, idx) => (
        <div
          key={idx}
          className="gungjung-glass p-7 sm:p-8 lg:p-9 rounded-[32px] border border-[#608F82]/35 bg-gradient-to-b from-[#0f241f]/50 via-[#152e27]/40 to-[#0b1514]/60 flex flex-col justify-between group hover:border-[#608F82]/60 transition-all duration-300 hover:-translate-y-1 shadow-xl relative overflow-hidden h-full"
        >
          {/* 은은한 배경 오라 */}
          <div className="absolute top-0 right-0 w-28 h-28 bg-[#608F82]/10 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform" />

          <div>
            {/* 상단: 좌측 컴팩트 아이콘 박스 + 우측 캡슐 라벨 */}
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-2xl bg-[#0f241f] border border-[#608F82]/40 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform text-[#8FB4A4]">
                {icons[idx]}
              </div>
              <span className="text-xs font-mono font-bold tracking-widest px-3 py-1 rounded-full bg-[#608F82]/15 border border-[#608F82]/30 text-[#8FB4A4]">
                {card.tag}
              </span>
            </div>

            {/* 본문 상단: 번호 기호 + 제목 */}
            <div className="flex items-baseline gap-2 mb-3">
              <span className="text-base md:text-lg font-bold text-[#8FB4A4] shrink-0">
                {card.symbol}
              </span>
              <h3 className="text-[19px] md:text-[21px] font-bold text-white leading-snug break-keep group-hover:text-[#FAF6EE] transition-colors">
                {card.title}
              </h3>
            </div>

            {/* 본문 설명 */}
            <p className="text-[16px] text-[#EDE6DA]/85 font-light leading-[1.7] break-keep mt-2.5">
              {card.desc}
            </p>
          </div>

          {/* 하단: 얇은 구분선 + 보조 텍스트 2개 */}
          <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#8FB4A4]/75">
            <span className="font-mono tracking-wider font-semibold text-[#C2A477]">
              CHANGE {card.num}
            </span>
            <span className="text-[#8FB4A4]/80 font-medium">
              선천코드 실천 변화
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}



