'use client'

import { useState } from 'react'
import Reveal from '@/components/Reveal'
import { compatibilityTableOfContentsData } from './data'
import { ChevronDown, Sparkles } from 'lucide-react'

export default function CompatibilityReportTableOfContents() {
  // 기본적으로 PART 01을 펼친 상태로 시작
  const [openParts, setOpenParts] = useState<string[]>(['part-1'])

  const togglePart = (partId: string) => {
    if (openParts.includes(partId)) {
      setOpenParts(openParts.filter((id) => id !== partId))
    } else {
      setOpenParts([...openParts, partId])
    }
  }

  return (
    <section id="point-04" className="mb-40 scroll-mt-28 md:scroll-mt-36 pt-4 md:pt-8">
      <Reveal>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="block font-elegant text-[12pt] font-semibold tracking-[0.2em] text-[#D8BB94] uppercase mb-4">
            POINT 04 · TABLE OF CONTENTS & SPECIAL GIFT
          </span>
          <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white mb-6 leading-[1.25] md:leading-[1.3] break-keep whitespace-pre-line">
            프리미엄 궁합 비급의 상세 구성
          </h2>
          <p className="text-[18px] text-[#EDE6DA] opacity-75 font-light break-keep">
            {compatibilityTableOfContentsData.subTitle}
          </p>
        </div>

        {/* 7개 PART 아코디언 목록 (연애 리포트 기준 높이/패딩 통일) */}
        <div className="max-w-7xl mx-auto space-y-3 md:space-y-3.5 mb-16">
          {compatibilityTableOfContentsData.parts.map((part) => {
            const isOpen = openParts.includes(part.id)
            const isSpecial = part.isSpecial

            return (
              <div
                key={part.id}
                className={`rounded-[18px] md:rounded-[20px] border transition-all duration-300 overflow-hidden ${
                  isSpecial
                    ? 'bg-gradient-to-r from-[#5A2638]/70 via-[#4A1F2D]/60 to-[#3A1623]/70 border-[#B78C86]/50 shadow-[0_0_30px_rgba(90,38,56,0.25)] backdrop-blur-md'
                    : 'gungjung-glass border-[#B78C86]/20 hover:border-[#B78C86]/40 bg-gradient-to-b from-[#4A1F2D]/30 to-[#3A1623]/25 backdrop-blur-md'
                }`}
              >
                {/* 아코디언 헤더 버튼 */}
                <button
                  type="button"
                  onClick={() => togglePart(part.id)}
                  className="w-full px-5 py-4 md:px-8 md:py-4.5 flex items-center justify-between text-left gap-4 focus:outline-none min-h-[76px] md:min-h-[84px]"
                  aria-expanded={isOpen}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-2.5 lg:gap-6 flex-1 min-w-0 pr-1 md:pr-3">
                    {/* 좌측 그룹: PART 배지 + 메인 제목 */}
                    <div className="flex items-start sm:items-center gap-3 md:gap-4 shrink-0">
                      <span
                        className={`text-xs font-mono font-bold tracking-widest px-2.5 py-0.5 md:px-3 md:py-1 rounded-md shrink-0 mt-0.5 sm:mt-0 ${
                          isSpecial
                            ? 'bg-[#5A2638] text-[#FAF7F2] border border-[#B78C86]/50'
                            : 'bg-[#5A2638]/40 border border-[#B78C86]/30 text-[#D8BB94]'
                        }`}
                      >
                        {part.number}
                      </span>
                      <div className="flex items-center gap-2.5">
                        <h3 
                          className="text-[17px] md:text-[20px] font-semibold text-white break-keep tracking-tight leading-snug"
                          style={{ fontFamily: "'Noto Serif KR', serif" }}
                        >
                          {part.title}
                        </h3>
                        {isSpecial && (
                          <span className="inline-flex items-center gap-1 text-[11px] text-[#D8BB94] font-bold shrink-0">
                            <Sparkles className="w-3.5 h-3.5 text-[#D8BB94]" />
                            핵심 관계 처방
                          </span>
                        )}
                      </div>
                    </div>

                    {/* 우측 그룹: 각 장별 상세 설명문 */}
                    {part.summary ? (
                      <p className="text-xs md:text-[13px] lg:text-[13.5px] text-[#EDE6DA]/75 font-light break-keep leading-relaxed lg:whitespace-nowrap lg:text-right lg:ml-auto shrink-0">
                        {part.summary}
                      </p>
                    ) : null}
                  </div>

                  {/* 맨 우측: 펼침 화살표 아이콘 */}
                  <div
                    className={`w-8 h-8 md:w-9 md:h-9 rounded-full flex items-center justify-center border shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'rotate-180 bg-[#5A2638]/50 border-[#B78C86]/50 text-[#D8BB94]'
                        : 'border-white/10 bg-white/5 text-white/50'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* 세부 항목 리스트 */}
                {isOpen && (
                  <div className="px-5 pb-6 md:px-8 md:pb-7 border-t border-white/5 pt-5 bg-[#1A0A14]/30">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                      {part.items.map((item, itemIdx) => (
                        <div
                          key={itemIdx}
                          className="flex items-start gap-3 p-3.5 rounded-xl bg-[#3A1623]/25 border border-[#B78C86]/20 hover:border-[#B78C86]/40 transition-colors"
                        >
                          <span className="w-2 h-2 rounded-full bg-[#B78C86] mt-2 shrink-0"></span>
                          <span className="text-sm md:text-base text-[#EDE6DA]/90 font-medium break-keep">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* PART 07 별도 프리미엄 독립 강조 카드 (딥 버건디 & 앤티크 골드) */}
        <div className="max-w-7xl mx-auto p-8 md:p-14 rounded-[36px] bg-gradient-to-b from-[#4A1F2D]/40 via-[#3A1623]/35 to-[#180A14]/40 border border-[#B78C86]/40 shadow-2xl relative overflow-hidden backdrop-blur-md">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#5A2638]/25 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="relative z-10 text-center mb-10">
            <span className="inline-flex items-center gap-2 font-elegant text-[12pt] font-semibold tracking-[0.2em] text-[#D8BB94] mb-4 uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              PART 07 COMPATIBILITY PRESCRIPTION
            </span>
            <h3 className="text-2xl md:text-[36px] font-elegant font-bold text-white mb-4 leading-[1.25] md:leading-[1.3] break-keep whitespace-pre-line">
              {compatibilityTableOfContentsData.part7Highlight.title}
            </h3>
            <p className="text-[18px] text-[#EDE6DA]/85 max-w-2xl mx-auto font-light leading-relaxed break-keep">
              {compatibilityTableOfContentsData.part7Highlight.subTitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
            {compatibilityTableOfContentsData.part7Highlight.features.map((feat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#3A1623]/45 border border-[#B78C86]/30 hover:border-[#C7A97A]/50 transition-colors backdrop-blur-sm"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-base font-bold font-mono text-[#D8BB94] px-2.5 py-0.5 rounded-md bg-[#5A2638]/40 border border-[#B78C86]/30">
                    NO. {feat.num}
                  </span>
                  <h4 className="text-lg font-bold text-white break-keep">
                    {feat.title}
                  </h4>
                </div>
                <p className="text-sm text-[#EDE6DA]/70 font-light leading-relaxed break-keep">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
