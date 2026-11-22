'use client'

import { useState } from 'react'
import Reveal from '@/components/Reveal'
import { wealthTableOfContentsData } from './data'
import { ChevronDown, Sparkles, MousePointerClick } from 'lucide-react'
import WealthDetailedStructureMedia from './WealthDetailedStructureMedia'

export default function WealthReportTableOfContents() {
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
    <section className="mb-40 scroll-mt-28 md:scroll-mt-36" id="point-04">
      <span id="table-of-contents" className="block -mt-28 pt-28" />
      <Reveal>
        {/* 헤더 텍스트: 상단 영문 라벨 + 메인 제목 2줄 + 2개 단락 설명문(풍요비책 앤티크 골드 부분 강조) */}
        <div className="max-w-4xl mx-auto text-center">
          {/* ① 영문 라벨 */}
          <span className="block font-elegant text-[12pt] font-semibold tracking-[0.2em] text-[#8FB4A4] uppercase mb-4">
            DETAILED STRUCTURE
          </span>

          {/* ② 메인 제목 2줄 */}
          <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white mb-7 md:mb-8 leading-[1.28] md:leading-[1.32] break-keep">
            당신의 풍요를 해독하는<br />
            <span className="text-[#C2A477]">정밀 분석의 모든 장</span>
          </h2>

          {/* ③ 설명 문구 2개 단락 */}
          <div className="max-w-[820px] mx-auto space-y-4 md:space-y-5 text-center">
            {/* 첫 번째 단락 */}
            <p className="text-[16.5px] md:text-[18px] text-[#EDE6DA]/85 font-light leading-[1.75] md:leading-[1.85] break-keep">
              인생 총운을 두루뭉술하게 훑고 지나가는 일반적인 사주 풀이가 아닙니다.<br className="hidden md:inline" />
              오직 <strong className="text-[#C2A477] font-semibold">‘풍요’라는 한 분야만을</strong> 깊이 파고들어 정밀하게 해독한 구성입니다.
            </p>

            {/* 두 번째 단락 */}
            <p className="text-[16.5px] md:text-[18px] text-[#EDE6DA]/85 font-light leading-[1.75] md:leading-[1.85] break-keep">
              타고난 재물 그릇과 무의식의 머니 블록부터 자산 전략, 재정 리스크, 재물의 흐름과 실천 처방까지<br className="hidden md:inline" />
              <strong className="text-[#C2A477] font-semibold">제1장~제7장 · 7대 핵심 분석 영역</strong>으로 구성된 전체 목차를 확인해 보세요.
            </p>
          </div>
        </div>

        {/* ④ 가로형 대표 이미지 영역 (추후 WebP 교체 가능한 슬롯) */}
        <WealthDetailedStructureMedia />

        {/* ⑤ 세부 분석 목차 안내 패널 (연애 리포트와 동일한 구조 & 풍요 전용 컬러) */}
        <div className="max-w-7xl mx-auto mt-7 md:mt-9 mb-5 md:mb-6">
          <div className="py-[22px] md:py-[28px] px-5 md:px-8 rounded-[18px] md:rounded-[20px] border border-[#608F82]/30 bg-gradient-to-r from-[#142B24]/40 via-[#0B1514]/65 to-[#142B24]/40 backdrop-blur-sm shadow-sm text-center flex flex-col items-center justify-center">
            {/* 메인 제목 (풍요비책 앤티크 샴페인 골드 강조) */}
            <h3 
              className="text-[20px] md:text-[23px] font-bold text-[#C2A477] tracking-tight leading-snug mb-[11px] md:mb-[13px]"
              style={{ fontFamily: "'Noto Serif KR', serif" }}
            >
              세부 분석 목차
            </h3>

            {/* 보조 안내 문구 (실제 UI 표기인 CHAPTER에 맞춤) */}
            <p className="text-[14px] md:text-[15.5px] text-[#EDE6DA]/85 font-normal leading-relaxed break-keep inline-flex items-center justify-center gap-2">
              <MousePointerClick className="w-4 h-4 text-[#8FB4A4] shrink-0" />
              <span>각 CHAPTER를 클릭하면 세부 분석 항목이 펼쳐집니다.</span>
            </p>
          </div>
        </div>

        {/* ⑥ 기존 7개 CHAPTER 아코디언 목록 */}
        <div className="max-w-7xl mx-auto space-y-3 md:space-y-3.5 mb-16">
          {wealthTableOfContentsData.parts.map((part) => {
            const isOpen = openParts.includes(part.id)
            const isSpecial = part.isSpecial

            return (
              <div
                key={part.id}
                className={`rounded-[18px] md:rounded-[20px] border transition-all duration-300 overflow-hidden ${
                  isSpecial
                    ? 'bg-gradient-to-r from-[#0f241f]/95 via-[#152e27]/90 to-[#0a0514]/95 border-[#608F82]/60 shadow-[0_0_30px_rgba(96, 143, 130, 0.18)]'
                    : 'gungjung-glass border-white/10 hover:border-[#608F82]/30 bg-gradient-to-b from-[#0f241f]/20 via-black/30 to-black/50'
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
                    {/* 좌측 그룹: CHAPTER 배지 + (명조체 메인 제목 & 제목 아래 작은 부제) */}
                    <div className="flex items-start sm:items-center gap-3 md:gap-4 shrink-0">
                      <span
                        className={`text-xs font-mono font-bold tracking-widest px-2.5 py-0.5 md:px-3 md:py-1 rounded-md shrink-0 mt-0.5 sm:mt-0 ${
                          isSpecial
                            ? 'bg-[#608F82] text-[#0f241f]'
                            : 'bg-white/10 text-[#C2A477]'
                        }`}
                      >
                        {part.number}
                      </span>
                      <div className="flex flex-col gap-0.5 text-left">
                        <div className="flex items-center gap-2.5">
                          <h3 
                            className="text-[17px] md:text-[20px] font-semibold text-white break-keep tracking-tight leading-snug"
                            style={{ fontFamily: "'Noto Serif KR', serif" }}
                          >
                            {part.title}
                          </h3>
                          {isSpecial && (
                            <span className="inline-flex items-center gap-1 text-[11px] text-[#8FB4A4] font-bold shrink-0">
                              <Sparkles className="w-3.5 h-3.5 text-[#E6BE8A]" />
                              핵심 실천 처방
                            </span>
                          )}
                        </div>
                        {part.subtitle ? (
                          <span className="text-[12.5px] md:text-[13.5px] text-[#8FB4A4]/90 font-light break-keep">
                            {part.subtitle}
                          </span>
                        ) : null}
                      </div>
                    </div>

                    {/* 우측 그룹: 각 장별 한 줄 요약문 */}
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
                        ? 'rotate-180 bg-[#608F82]/20 border-[#608F82]/50 text-[#8FB4A4]'
                        : 'border-white/10 bg-white/5 text-white/50'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* 세부 항목 리스트 */}
                {isOpen && (
                  <div className="px-5 pb-6 md:px-8 md:pb-7 border-t border-white/5 pt-5 bg-black/30">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                      {part.items.map((item, itemIdx) => (
                        <div
                          key={itemIdx}
                          className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#608F82]/30 transition-colors"
                        >
                          <span className="w-2 h-2 rounded-full bg-[#8FB4A4] mt-2 shrink-0"></span>
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

        {/* PART 07 별도 프리미엄 독립 강조 카드 (연옥 & 앤티크 골드) */}
        <div className="max-w-7xl mx-auto p-8 md:p-14 rounded-[36px] bg-gradient-to-b from-[#0f241f]/35 via-[#152e27]/25 to-[#0a0514]/35 border-2 border-[#608F82]/50 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#608F82]/15 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="relative z-10 text-center mb-10">
            <span className="inline-flex items-center gap-2 font-elegant text-[12pt] font-semibold tracking-[0.2em] text-[#8FB4A4] mb-4 uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#E6BE8A]" />
              PART 07 WEALTH PRESCRIPTION
            </span>
            <h3 className="text-2xl md:text-[36px] font-elegant font-bold text-white mb-4 leading-[1.25] md:leading-[1.3] break-keep whitespace-pre-line">
              {wealthTableOfContentsData.part7Highlight.title}
            </h3>
            <p className="text-[18px] text-[#EDE6DA]/85 max-w-2xl mx-auto font-light leading-relaxed break-keep">
              리포트의 결론은 단순한 미래 예측이 아닌, 내일부터 일상에서 적용할 수 있는<br className="hidden md:inline" />{' '}
              구체적인 재정 행동 처방입니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
            {wealthTableOfContentsData.part7Highlight.features.map((feat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-black/50 border border-[#608F82]/25 hover:border-[#608F82]/60 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-base font-bold font-mono text-[#E6BE8A] px-2.5 py-0.5 rounded-md bg-[#608F82]/15">
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
