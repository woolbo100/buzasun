'use client'

import Reveal from '@/components/Reveal'
import Link from 'next/link'
import { wealthValueData, wealthEbookLinkData } from './data'
import { BookOpen, ArrowRight } from 'lucide-react'

export default function WealthValueSummary() {
  return (
    <div className="mb-20">
      <Reveal>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="block font-elegant text-[12pt] font-semibold tracking-[0.2em] text-[#8FB4A4] uppercase mb-4">
            LIFELONG COMPASS FOR WEALTH
          </span>
          <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white mb-6 leading-[1.25] md:leading-[1.3] break-keep whitespace-pre-line">
            {wealthValueData.mainCopy}
          </h2>
          <p className="text-[16px] md:text-[18px] text-[#EDE6DA] opacity-75 font-light break-keep">
            {wealthValueData.subCopy}
          </p>
        </div>

        {/* 6가지 핵심 가치 요소 그리드 */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-7xl mx-auto mb-14">
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

        {/* 《풍요비책》 전자책 함께 보기 소형 안내 카드 */}
        <div className="max-w-4xl mx-auto p-6 md:p-8 rounded-3xl bg-gradient-to-r from-[#0f241f]/35 via-[#152e27]/25 to-[#0f241f]/35 border border-[#608F82]/35 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-2xl bg-[#0f241f] border border-[#608F82]/40 flex items-center justify-center text-[#8FB4A4] shrink-0">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-mono font-bold tracking-widest text-[#E6BE8A] uppercase block mb-1">
                {wealthEbookLinkData.badge}
              </span>
              <h4 className="text-lg font-bold text-white mb-1">
                {wealthEbookLinkData.title}
              </h4>
              <p className="text-xs md:text-sm text-[#EDE6DA]/75 font-light leading-relaxed break-keep whitespace-pre-line">
                {wealthEbookLinkData.copy}
              </p>
            </div>
          </div>

          <Link
            href={wealthEbookLinkData.href}
            className="shrink-0 px-6 py-3.5 rounded-xl border border-[#608F82]/50 text-[#8FB4A4] hover:bg-[#608F82]/15 hover:border-[#608F82] transition-all text-sm font-semibold flex items-center gap-2 group"
          >
            <span>{wealthEbookLinkData.btnText}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </Reveal>
    </div>
  )
}
