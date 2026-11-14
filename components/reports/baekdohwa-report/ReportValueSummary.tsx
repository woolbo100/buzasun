'use client'

import Reveal from '@/components/Reveal'
import { valueSummaryData } from './data'

export default function ReportValueSummary() {
  return (
    <div className="mb-20">
      <Reveal>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="block text-[12px] font-semibold tracking-[0.2em] text-[#D9A8A7] uppercase mb-4">
            LIFELONG COMPASS
          </span>
          <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white mb-6 leading-[1.25] md:leading-[1.3] break-keep whitespace-pre-line">
            {valueSummaryData.mainCopy}
          </h2>
          <p className="text-[16px] md:text-[18px] text-[#EDE6DA] opacity-75 font-light break-keep">
            {valueSummaryData.subCopy}
          </p>
        </div>

        {/* 6가지 핵심 가치 요소 그리드 */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-7xl mx-auto">
          {valueSummaryData.elements.map((el, idx) => (
            <div
              key={idx}
              className="gungjung-glass p-5 rounded-2xl border border-white/10 hover:border-[#B7788D]/40 text-center flex flex-col justify-center items-center transition-all duration-300 hover:-translate-y-1 group"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#B7788D] mb-3 group-hover:scale-150 transition-transform"></span>
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
