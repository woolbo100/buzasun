'use client'

import { useState } from 'react'
import Reveal from '@/components/Reveal'
import { wealthChecklistData } from './data'
import { Check } from 'lucide-react'

export default function WealthPatternChecklist() {
  const [checkedIndices, setCheckedIndices] = useState<number[]>([])

  const toggleCheck = (idx: number) => {
    if (checkedIndices.includes(idx)) {
      setCheckedIndices(checkedIndices.filter((i) => i !== idx))
    } else {
      setCheckedIndices([...checkedIndices, idx])
    }
  }

  const selectedCount = checkedIndices.length
  const isHighPattern = selectedCount >= 3

  return (
    <section className="mb-40">
      <Reveal>
        <div className="max-w-4xl mx-auto text-center mb-12">
          <span className="block font-elegant text-[12pt] font-semibold tracking-[0.2em] text-[#8FB4A4] uppercase mb-4">
            WEALTH PATTERN CHECKLIST
          </span>
          <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white mb-6 leading-[1.25] md:leading-[1.3] break-keep whitespace-pre-line">
            {wealthChecklistData.title}
          </h2>
          <p className="text-[16px] md:text-[18px] text-[#EDE6DA] opacity-80 whitespace-pre-line leading-relaxed font-light break-keep">
            {wealthChecklistData.subtitle}
          </p>
        </div>

        <div className="gungjung-glass p-8 md:p-14 rounded-[32px] max-w-7xl mx-auto border border-[#608F82]/25 shadow-2xl relative overflow-hidden bg-gradient-to-b from-[#0f241f]/25 via-black/30 to-black/35">
          {/* 연옥빛 은은한 배경 광채 */}
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-[#608F82]/15 rounded-full blur-[90px] pointer-events-none"></div>

          {/* 체크리스트 직접 체험 인터랙션 안내 문구 */}
          <div className="mb-6 pb-6 border-b border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left relative z-10">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#608F82] animate-pulse"></span>
              <p className="text-[14px] md:text-[15px] text-[#EDE6DA] font-medium break-keep">
                아래 항목 중 내 이야기처럼 느껴지는 것이 있다면 체크해보세요.
              </p>
            </div>
            <span className="text-[12px] text-[#EDE6DA]/50 font-light shrink-0">
              * 항목을 직접 탭(클릭)하여 선택할 수 있습니다
            </span>
          </div>

          <div className="space-y-4 mb-8 relative z-10">
            {wealthChecklistData.items.map((item, idx) => {
              const isChecked = checkedIndices.includes(idx)
              return (
                <div
                  key={idx}
                  onClick={() => toggleCheck(idx)}
                  className={`cursor-pointer p-4 md:p-5 rounded-2xl border transition-all duration-300 flex items-center gap-4 ${
                    isChecked
                      ? 'bg-gradient-to-r from-[#152e27]/80 to-[#0f241f]/60 border-[#608F82]/70 text-white shadow-[0_0_20px_rgba(96, 143, 130, 0.15)]'
                      : 'bg-white/[0.02] border-white/5 text-[#EDE6DA]/75 hover:bg-white/[0.04] hover:border-white/15'
                  }`}
                >
                  <div
                    className={`w-6 h-6 md:w-7 md:h-7 rounded-lg flex items-center justify-center shrink-0 border transition-all duration-300 ${
                      isChecked
                        ? 'bg-[#608F82] border-[#608F82] text-[#0f241f]'
                        : 'border-white/20 bg-black/30'
                    }`}
                  >
                    {isChecked && <Check className="w-4 h-4 stroke-[3]" />}
                  </div>
                  <span className="text-base md:text-lg font-medium select-none break-keep">
                    {item}
                  </span>
                </div>
              )
            })}
          </div>

          {/* 결과 안내 카드 */}
          <div className="p-6 rounded-2xl bg-black/50 border border-white/10 text-center relative z-10 transition-all duration-500">
            <div className="mb-2">
              <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/5 text-[#E6BE8A] border border-white/10">
                체크한 항목 수 · {selectedCount} / {wealthChecklistData.items.length}
              </span>
            </div>

            <p className="text-[12px] md:text-[13px] text-[#EDE6DA]/60 font-light mb-4 break-keep">
              정답을 고르는 체크가 아니라, 반복되는 패턴을 살펴보기 위한 체크입니다.
            </p>

            {isHighPattern && (
              <p className="text-[#8FB4A4] font-bold text-base md:text-lg mb-2">
                {wealthChecklistData.highlight}
              </p>
            )}

            <p className="text-sm md:text-base text-[#EDE6DA]/90 break-keep font-light">
              {isHighPattern
                ? wealthChecklistData.feedbackHigh
                : wealthChecklistData.feedbackLow}
            </p>

            <p className="text-[11px] text-white/35 mt-4 break-keep">
              {wealthChecklistData.disclaimer}
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
