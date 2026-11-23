'use client'

import Reveal from '@/components/Reveal'
import { wealthValueData } from './data'

export default function WealthValueSummary() {
  return (
    <div className="mb-28 md:mb-36 w-full max-w-[1280px] mx-auto">
      <Reveal className="w-full">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="block font-elegant text-[12pt] font-semibold tracking-[0.2em] text-[#8FB4A4] uppercase mb-4">
            LIFELONG COMPASS FOR WEALTH
          </span>
          <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white mb-6 leading-[1.25] md:leading-[1.3] break-keep whitespace-pre-line">
            {wealthValueData.mainCopy}
          </h2>
          <p className="text-[18px] text-[#EDE6DA] opacity-75 font-light break-keep">
            {wealthValueData.subCopy}
          </p>
        </div>

        {/* 6가지 핵심 가치 요소 그리드 */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 w-full max-w-[1280px] mx-auto">
          {wealthValueData.elements.map((el, idx) => (
            <div
              key={idx}
              className="gungjung-glass p-5 rounded-2xl border border-white/10 hover:border-[#608F82]/50 bg-gradient-to-b from-[#0f241f]/30 via-transparent to-black/40 text-center flex flex-col justify-center items-center transition-all duration-300 hover:-translate-y-1 group"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#608F82] mb-3 group-hover:scale-150 transition-transform"></span>
              <h4 className="text-sm md:text-base font-bold text-white mb-1.5 break-keep">
                {el.title}
              </h4>
              <p className="text-[11px] text-[#EDE6DA]/60 font-light break-keep">
                {el.desc}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  )
}
