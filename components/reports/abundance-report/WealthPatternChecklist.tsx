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
    <section className="mb-40 w-full max-w-[1280px] mx-auto">
      <Reveal className="w-full">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <span className="block font-elegant text-[12pt] font-semibold tracking-[0.2em] text-[#8FB4A4] uppercase mb-4">
            WEALTH PATTERN CHECKLIST
          </span>
          <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white mb-6 leading-[1.25] md:leading-[1.3] break-keep whitespace-pre-line">
            {wealthChecklistData.title}
          </h2>
          <p className="text-[18px] text-[#EDE6DA] opacity-80 whitespace-pre-line leading-relaxed font-light break-keep">
            {wealthChecklistData.subtitle}
          </p>
        </div>

        <div className="gungjung-glass p-8 md:p-14 rounded-[32px] w-full max-w-[1280px] mx-auto border border-[#608F82]/25 shadow-2xl relative overflow-hidden bg-gradient-to-b from-[#0f241f]/25 via-black/30 to-black/35">
          {/* 연옥빛 은은한 배경 광채 */}
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-[#608F82]/15 rounded-full blur-[90px] pointer-events-none"></div>

          {/* 체크리스트 직접 체험 인터랙션 안내 문구 */}
          <div className="mb-6 pb-6 border-b border-white/10 flex items-center justify-center text-center relative z-10">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#608F82] animate-pulse"></span>
              <p className="text-[15px] md:text-[16px] text-[#EDE6DA] font-medium break-keep">
                아래 항목 중 내 이야기처럼 느껴지는 것이 있다면 체크해보세요.
              </p>
            </div>
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
          <div className="p-6 md:p-8 rounded-2xl bg-black/50 border border-[#608F82]/30 text-center relative z-10 transition-all duration-500 backdrop-blur-sm shadow-xl">
            <div className="mb-4 md:mb-5">
              <span className="inline-block px-4 py-2 rounded-full text-[16px] font-semibold bg-white/5 text-[#8FB4A4] border border-white/10">
                체크한 항목 수 · {selectedCount} / {wealthChecklistData.items.length}
              </span>
            </div>

            {/* 메인 안내 문구, 설명 문구, 주의 문구 통합 그룹 */}
            <div>
              {isHighPattern && (
                <p className="text-[#8FB4A4] font-bold text-[20px] md:text-[22px] mb-1.5 break-keep">
                  {wealthChecklistData.highlight}
                </p>
              )}

              <p className="text-[18px] text-[#EDE6DA] break-keep font-medium leading-relaxed mb-2">
                {isHighPattern
                  ? wealthChecklistData.feedbackHigh
                  : wealthChecklistData.feedbackLow}
              </p>

              <p className="text-[15px] md:text-[16px] text-[#EDE6DA]/75 font-light leading-relaxed break-keep">
                정답을 고르는 체크가 아니라, 반복되는 패턴을 살펴보기 위한 체크입니다.
              </p>

              <p className="text-[12px] sm:text-[13px] leading-[1.5] text-[#EDE6DA]/75 mt-2 md:mt-2.5 break-keep">
                {wealthChecklistData.disclaimer}
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
