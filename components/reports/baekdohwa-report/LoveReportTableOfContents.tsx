'use client'

import { useState } from 'react'
import Reveal from '@/components/Reveal'
import { tableOfContentsData } from './data'
import { ChevronDown, Sparkles, MousePointerClick } from 'lucide-react'
import TableOfContentsMedia from './TableOfContentsMedia'

export default function LoveReportTableOfContents() {
  // 기본적으로 CHAPTER 01을 펼친 상태로 시작
  const [openParts, setOpenParts] = useState<string[]>(['chapter-1'])

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
        {/* 헤더 텍스트: 상단 영문 라벨 + 메인 제목(두 번째 줄 그라데이션) + 2단 설명문(부분 강조) */}
        <div className="max-w-4xl mx-auto text-center">
          <span className="block font-elegant text-[12pt] font-semibold tracking-[0.2em] text-[#D9A8A7] uppercase mb-4">
            DETAILED STRUCTURE
          </span>

          <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white mb-7 md:mb-8 leading-[1.28] md:leading-[1.32] break-keep">
            당신의 사랑을 해독하는<br />
            <span className="gradient-text-love">심층 분석의 모든 장</span>
          </h2>

          <div className="max-w-[820px] mx-auto space-y-4 md:space-y-5 text-center">
            {/* 첫 번째 문단 */}
            <p className="text-[16.5px] md:text-[18px] text-[#EDE6DA]/85 font-light leading-[1.75] md:leading-[1.85] break-keep">
              인생 총운의 일부로 연애를 두루뭉술하게 훑고 지나가는 일반 사주가 아닙니다.<br className="hidden md:inline" />
              오직 <strong className="text-[#D9A8A7] font-semibold">‘연애’라는 한 분야</strong>만을 끝까지 파고들어 <strong className="text-[#D9A8A7] font-semibold">정밀 해독</strong>한 전체 구성입니다.
            </p>

            {/* 두 번째 문단 */}
            <p className="text-[16.5px] md:text-[18px] text-[#EDE6DA]/85 font-light leading-[1.75] md:leading-[1.85] break-keep">
              타고난 매력 무기와 무의식적 끌림부터 배우자 코드, 재회, 시기 흐름, 실전 비책까지<br className="hidden md:inline" />
              <strong className="text-[#D9A8A7] font-semibold">제1장~제8장 · 30여개 심층 분석 항목</strong>으로 구성된 전체 목차를 확인해 보세요.
            </p>
          </div>
        </div>

        {/* 심층 분석 목차 파노라마 미디어 영역 (추후 책장 넘김 영상으로 교체 가능) */}
        <TableOfContentsMedia />

        {/* 세부 분석 목차 안내 패널 (간결화) */}
        <div className="max-w-7xl mx-auto mt-7 md:mt-9 mb-5 md:mb-6">
          <div className="py-4.5 md:py-5.5 px-5 md:px-8 rounded-[18px] md:rounded-[20px] border border-[#B7788D]/25 bg-gradient-to-r from-[#2D0A1E]/30 via-[#140816]/45 to-[#2D0A1E]/25 backdrop-blur-sm shadow-sm text-center flex flex-col items-center justify-center">
            {/* 메인 제목 (로즈핑크플럼 단색 강조) */}
            <h3 
              className="text-[20px] md:text-[23px] font-bold text-[#D9A8A7] tracking-tight leading-snug mb-2 md:mb-2.5"
              style={{ fontFamily: "'Noto Serif KR', serif" }}
            >
              세부 분석 목차
            </h3>

            {/* 보조 안내 문구 (확대 및 CHAPTER로 변경) */}
            <p className="text-[14px] md:text-[15.5px] text-[#EDE6DA]/85 font-normal leading-relaxed break-keep inline-flex items-center justify-center gap-2">
              <MousePointerClick className="w-4 h-4 text-[#D9A8A7] shrink-0" />
              <span>각 CHAPTER를 클릭하면 세부 분석 항목이 펼쳐집니다.</span>
            </p>
          </div>
        </div>

        {/* 8개 장 아코디언 목록 */}
        <div className="max-w-7xl mx-auto space-y-3 md:space-y-3.5 mb-16">
          {tableOfContentsData.parts.map((part) => {
            const isOpen = openParts.includes(part.id)

            return (
              <div
                key={part.id}
                className="rounded-[18px] md:rounded-[20px] border transition-all duration-300 overflow-hidden gungjung-glass border-white/10 hover:border-white/20"
              >
                {/* 아코디언 헤더 버튼 */}
                <button
                  type="button"
                  onClick={() => togglePart(part.id)}
                  className="w-full px-5 py-4 md:px-8 md:py-4.5 flex items-center justify-between text-left gap-4 focus:outline-none min-h-[76px] md:min-h-[84px]"
                  aria-expanded={isOpen}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-2.5 lg:gap-6 flex-1 min-w-0 pr-1 md:pr-3">
                    {/* 좌측 그룹: CHAPTER 배지 + (명조체 메인 제목 & 제목 아래 작은 부제) */}
                    <div className="flex items-start sm:items-center gap-3 md:gap-4 shrink-0">
                      <span className="text-xs font-mono font-bold tracking-widest px-2.5 py-0.5 md:px-3 md:py-1 rounded-md shrink-0 bg-white/10 text-[#D9A8A7] mt-0.5 sm:mt-0">
                        {part.number}
                      </span>
                      <div className="flex flex-col gap-0.5">
                        <h3 
                          className="text-[17px] md:text-[20px] font-semibold text-white break-keep tracking-tight leading-snug"
                          style={{ fontFamily: "'Noto Serif KR', serif" }}
                        >
                          {part.title}
                        </h3>
                        {part.subTitle ? (
                          <span className="text-[12.5px] md:text-[13.5px] text-[#D9A8A7]/85 font-light break-keep">
                            {part.subTitle}
                          </span>
                        ) : null}
                      </div>
                    </div>

                    {/* 우측 그룹: 각 장별 상세 설명 (PC에서는 한 줄로 여유 있게 정렬, 모바일에서는 자연스럽게 아래 정렬) */}
                    {part.description ? (
                      <p className="text-xs md:text-[13px] lg:text-[13.5px] text-[#EDE6DA]/75 font-light break-keep leading-relaxed lg:whitespace-nowrap lg:text-right lg:ml-auto shrink-0">
                        {part.description}
                      </p>
                    ) : null}
                  </div>

                  {/* 맨 우측: 펼침 화살표 아이콘 */}
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
              CHAPTER 08 · SPECIAL PRESCRIPTION
            </span>
            <h3 className="text-2xl md:text-[36px] font-elegant font-bold text-white mb-4 leading-[1.25] md:leading-[1.3] break-keep whitespace-pre-line">
              {tableOfContentsData.part7Highlight.title}
            </h3>
            <p className="text-[18px] text-[#EDE6DA]/85 max-w-2xl mx-auto font-light leading-relaxed break-keep whitespace-pre-line">
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
                  <span className="text-base font-bold font-mono text-[#D9A8A7] px-2.5 py-0.5 rounded-md bg-[#B7788D]/15 shrink-0">
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
