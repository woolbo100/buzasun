'use client'

import { useState } from 'react'
import Image from 'next/image'
import Reveal from '@/components/Reveal'
import { compatibilityTableOfContentsData } from './data'
import { ChevronDown, Sparkles, MousePointerClick } from 'lucide-react'

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
    <section id="table-of-contents" className="mb-6 md:mb-7 scroll-mt-28 md:scroll-mt-36 pt-4 md:pt-8 w-full max-w-[1280px] mx-auto">
      <Reveal className="w-full">
        {/* 헤더 텍스트: 상단 영문 라벨 + 메인 제목 2줄 + 2개 단락 설명문 (앤티크 샴페인 골드 강조) */}
        <div className="max-w-4xl mx-auto text-center">
          {/* ① 영문 라벨 */}
          <span className="block font-elegant text-[12pt] font-semibold tracking-[0.2em] text-[#D8BB94] uppercase mb-4">
            DETAILED STRUCTURE
          </span>

          {/* ② 메인 제목 2줄 */}
          <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white mb-7 md:mb-8 leading-[1.28] md:leading-[1.32] break-keep">
            두 사람의 인연을 해독하는<br />
            <span className="gradient-text-reunion">정밀 분석의 모든 장</span>
          </h2>

          {/* ③ 설명 문구 2개 단락 */}
          <div className="max-w-[820px] mx-auto space-y-4 md:space-y-5 text-center">
            {/* 첫 번째 단락 */}
            <p className="text-[16.5px] md:text-[18px] text-[#EDE6DA]/85 font-light leading-[1.75] md:leading-[1.85] break-keep">
              두 사람의 사주를 따로 풀이하고 궁합 점수만 확인하는 일반적인 궁합 해석이 아닙니다.<br className="hidden md:inline" />
              오직 <strong className="text-[#D8BB94] font-semibold">두 사람이 만나 만들어 내는 관계의 구조를</strong> 깊이 들여다보는 분석입니다.
            </p>

            {/* 두 번째 단락 */}
            <p className="text-[16.5px] md:text-[18px] text-[#EDE6DA]/85 font-light leading-[1.75] md:leading-[1.85] break-keep">
              타고난 기질의 차이부터 서로를 끌어당기는 이유, 반복되는 갈등과 감정 반응,<br className="hidden md:inline" />
              소통 방식과 관계를 조율하는 실전 처방까지<br className="hidden md:inline" />
              <strong className="text-[#D8BB94] font-semibold">제1장~제7장 · 7대 핵심 분석 영역</strong>으로 구성된 전체 목차를 확인해 보세요.
            </p>
          </div>
        </div>

        {/* ④ 가로형 대표 이미지 영역 */}
        <div className="w-full max-w-[1280px] mx-auto mt-8 md:mt-10 mb-10 md:mb-14">
          <div className="relative w-full overflow-hidden rounded-2xl md:rounded-[28px] border border-[#B78C86]/35 shadow-2xl bg-[#14080E]">
            <Image
              src="/image/compatibility/compatibility-detailed-structure-book.webp"
              alt="백도화 선천코드 프리미엄 궁합 리포트 제1장~제7장 정밀 분석 비급 목차 배너"
              width={2172}
              height={724}
              className="w-full h-auto object-contain block"
              sizes="(max-width: 1280px) 100vw, 1280px"
              priority={false}
            />
          </div>
        </div>

        {/* ⑤ 세부 분석 목차 안내 패널 (풍요 리포트 규격 & 버건디 샴페인 골드 테마) */}
        <div className="w-full max-w-[1280px] mx-auto mt-7 md:mt-9 mb-5 md:mb-6">
          <div className="py-[22px] md:py-[28px] px-5 md:px-8 rounded-[18px] md:rounded-[20px] border border-[#B78C86]/30 bg-gradient-to-r from-[#4A1F2D]/40 via-[#180A14]/65 to-[#4A1F2D]/40 backdrop-blur-sm shadow-sm text-center flex flex-col items-center justify-center">
            {/* 메인 제목 (궁합비책 앤티크 샴페인 골드 강조) */}
            <h3 
              className="text-[20px] md:text-[23px] font-bold text-[#D8BB94] tracking-tight leading-snug mb-[11px] md:mb-[13px]"
              style={{ fontFamily: "'Noto Serif KR', serif" }}
            >
              세부 분석 목차
            </h3>

            {/* 보조 안내 문구 (실제 UI 표기인 CHAPTER에 맞춤) */}
            <p className="text-[14px] md:text-[15.5px] text-[#EDE6DA]/85 font-normal leading-relaxed break-keep inline-flex items-center justify-center gap-2">
              <MousePointerClick className="w-4 h-4 text-[#D8BB94] shrink-0" />
              <span>각 CHAPTER를 클릭하면 세부 분석 항목이 펼쳐집니다.</span>
            </p>
          </div>
        </div>

        {/* ⑥ 기존 7개 CHAPTER 아코디언 목록 */}
        <div className="w-full max-w-[1280px] mx-auto space-y-3 md:space-y-3.5 mb-16">
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
                    {/* 좌측 그룹: CHAPTER 배지 + (명조체 메인 제목 & 제목 아래 작은 부제) */}
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
                      <div className="flex flex-col gap-0.5 text-left">
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
                        {part.subtitle ? (
                          <span className="text-[12.5px] md:text-[13.5px] text-[#D8BB94]/90 font-light break-keep">
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
        <div className="w-full max-w-[1280px] mx-auto p-8 md:p-14 rounded-[36px] bg-gradient-to-b from-[#4A1F2D]/40 via-[#3A1623]/35 to-[#180A14]/40 border border-[#B78C86]/40 shadow-2xl relative overflow-hidden backdrop-blur-md">
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
                className="p-6 rounded-2xl bg-[#3A1623]/45 border border-[#B78C86]/30 hover:border-[#C7A97A]/50 transition-colors backdrop-blur-sm flex flex-col justify-start"
              >
                <div className="flex items-start sm:items-center gap-3 mb-3">
                  <span className="text-base font-bold font-mono text-[#D8BB94] px-2.5 py-0.5 rounded-md bg-[#5A2638]/40 border border-[#B78C86]/30 shrink-0 mt-0.5 sm:mt-0">
                    NO. {feat.num}
                  </span>
                  <h4 className="text-lg font-bold text-white break-keep leading-snug">
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
