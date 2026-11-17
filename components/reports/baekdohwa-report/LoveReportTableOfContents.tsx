'use client'

import { useState } from 'react'
import Reveal from '@/components/Reveal'
import { tableOfContentsData } from './data'
import { ChevronDown, Sparkles, MousePointerClick } from 'lucide-react'

export default function LoveReportTableOfContents() {
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
    <section className="mb-40" id="table-of-contents">
      <Reveal>
        <div className="max-w-4xl mx-auto text-center mb-10 md:mb-12">
          <span className="block font-elegant text-[12pt] font-semibold tracking-[0.2em] text-[#D9A8A7] uppercase mb-4">
            DETAILED STRUCTURE
          </span>
          <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white mb-6 leading-[1.25] md:leading-[1.3] break-keep whitespace-pre-line">
            {tableOfContentsData.title}
          </h2>
          <p className="text-[18px] text-[#EDE6DA] opacity-75 font-light break-keep mb-5 md:mb-6">
            {tableOfContentsData.subTitle}
          </p>

          {/* 각 PART 클릭 안내 문구 */}
          <div className="inline-flex items-center justify-center gap-2 text-[15px] md:text-[16.5px] text-[#EDE6DA]/90 font-medium">
            <MousePointerClick className="w-4 h-4 md:w-[18px] md:h-[18px] text-[#D9A8A7] shrink-0" />
            <span>각 PART를 클릭하면 세부 분석 목차가 펼쳐집니다.</span>
          </div>
        </div>

        {/* 7개 PART 아코디언 목록 */}
        <div className="max-w-7xl mx-auto space-y-3 md:space-y-3.5 mb-16">
          {tableOfContentsData.parts.map((part) => {
            const isOpen = openParts.includes(part.id)
            const isSpecial = part.isSpecial

            return (
              <div
                key={part.id}
                className={`rounded-[18px] md:rounded-[20px] border transition-all duration-300 overflow-hidden ${
                  isSpecial
                    ? 'bg-gradient-to-r from-[var(--accent-gold)]/15 via-[#2D0A1E]/80 to-[var(--accent-gold)]/10 border-[#B7788D]/50 shadow-[0_0_30px_rgba(183, 120, 141, 0.15)]'
                    : 'gungjung-glass border-white/10 hover:border-white/20'
                }`}
              >
                {/* 아코디언 헤더 버튼 (슬림화: min-height 78~84px 및 상하 패딩 축소) */}
                <button
                  type="button"
                  onClick={() => togglePart(part.id)}
                  className="w-full px-5 py-3.5 md:px-8 md:py-4 flex items-center justify-between text-left gap-4 focus:outline-none min-h-[74px] md:min-h-[82px]"
                  aria-expanded={isOpen}
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-1.5 md:gap-5 flex-1 min-w-0">
                    {/* 좌측: PART 번호 + 핵심 실천 처방 뱃지 + 명조체 제목 */}
                    <div className="flex items-center gap-3 md:gap-4 shrink-0">
                      <span
                        className={`text-xs font-mono font-bold tracking-widest px-2.5 py-0.5 md:px-3 md:py-1 rounded-md shrink-0 ${
                          isSpecial
                            ? 'bg-[#B7788D] text-[#1A0514]'
                            : 'bg-white/10 text-[#D9A8A7]'
                        }`}
                      >
                        {part.number}
                      </span>
                      {isSpecial && (
                        <span className="inline-flex items-center gap-1 text-[11px] text-[#D9A8A7] font-bold shrink-0">
                          <Sparkles className="w-3.5 h-3.5 text-[#D9A8A7]" />
                          핵심 실천 처방
                        </span>
                      )}
                      <h3 
                        className="text-[17px] md:text-[20px] font-semibold text-white break-keep tracking-tight leading-snug"
                        style={{ fontFamily: "'Noto Serif KR', serif" }}
                      >
                        {part.title}
                      </h3>
                    </div>

                    {/* 우측: 장별 간단 설명 (기존 고딕체 유지, 수직 중앙 정렬) */}
                    <p className="text-xs md:text-[13.5px] text-[#EDE6DA]/65 font-light break-keep md:ml-auto md:text-right pr-2 leading-relaxed">
                      {part.summary}
                    </p>
                  </div>

                  {/* 펼침 화살표 아이콘 (수직 중앙 정렬) */}
                  <div
                    className={`w-8 h-8 md:w-9 md:h-9 rounded-full flex items-center justify-center border shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'rotate-180 bg-[#B7788D]/20 border-[#B7788D]/50 text-[#D9A8A7]'
                        : 'border-white/10 bg-white/5 text-white/50'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* 세부 항목 리스트 */}
                {isOpen && (
                  <div className="px-5 pb-6 md:px-8 md:pb-7 border-t border-white/5 pt-5 bg-black/20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                      {part.items.map((item, itemIdx) => (
                        <div
                          key={itemIdx}
                          className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#B7788D]/30 transition-colors"
                        >
                          <span className="w-2 h-2 rounded-full bg-[#B7788D] mt-2 shrink-0"></span>
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

        {/* PART 07 별도 프리미엄 독립 강조 카드 */}
        <div className="max-w-7xl mx-auto p-8 md:p-14 rounded-[36px] bg-gradient-to-b from-[#2D0A1E]/35 via-[#1A0514]/25 to-[#0A0514]/35 border-2 border-[#B7788D]/50 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#B7788D]/15 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="relative z-10 text-center mb-10">
            <span className="inline-flex items-center gap-2 font-elegant text-[12pt] font-semibold tracking-[0.2em] text-[#D9A8A7] mb-4 uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              PART 07 SPECIAL EMPHASIS
            </span>
            <h3 className="text-2xl md:text-[36px] font-elegant font-bold text-white mb-4 leading-[1.25] md:leading-[1.3] break-keep whitespace-pre-line">
              {tableOfContentsData.part7Highlight.title}
            </h3>
            <p className="text-[18px] text-[#EDE6DA]/85 max-w-2xl mx-auto font-light leading-relaxed break-keep">
              {tableOfContentsData.part7Highlight.subTitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
            {tableOfContentsData.part7Highlight.features.map((feat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-black/40 border border-[#B7788D]/25 hover:border-[#B7788D]/60 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-base font-bold font-mono text-[#D9A8A7] px-2.5 py-0.5 rounded-md bg-[#B7788D]/15">
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
