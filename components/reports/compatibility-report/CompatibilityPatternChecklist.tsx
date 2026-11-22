'use client'

import { useState } from 'react'
import Reveal from '@/components/Reveal'
import { compatibilityChecklistData } from './data'
import { Check } from 'lucide-react'

export default function CompatibilityPatternChecklist() {
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
          <span className="block font-elegant text-[12pt] font-semibold tracking-[0.2em] text-[#D8BB94] uppercase mb-4">
            RELATIONSHIP CHECKLIST
          </span>
          <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white mb-6 leading-[1.25] md:leading-[1.3] break-keep whitespace-pre-line">
            {compatibilityChecklistData.title}
          </h2>
          <p className="text-[18px] text-[#EDE6DA] opacity-80 whitespace-pre-line leading-relaxed font-light break-keep">
            {compatibilityChecklistData.subtitle}
          </p>
        </div>

        <div className="gungjung-glass p-8 md:p-14 rounded-[32px] max-w-7xl mx-auto border border-[#B78C86]/25 shadow-2xl relative overflow-hidden bg-gradient-to-b from-[#4A1F2D]/30 via-[#3A1623]/25 to-[#1A0A14]/35 backdrop-blur-md">
          {/* 딥 버건디 은은한 배경 광채 */}
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-[#5A2638]/25 rounded-full blur-[90px] pointer-events-none"></div>

          {/* 체크리스트 직접 체험 인터랙션 안내 문구 */}
          <div className="mb-6 pb-6 border-b border-white/10 flex items-center justify-center text-center relative z-10">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#B78C86] animate-pulse"></span>
              <p className="text-[15px] md:text-[16px] text-[#EDE6DA] font-medium break-keep">
                아래 항목 중 내 이야기처럼 느껴지는 것이 있다면 체크해보세요.
              </p>
            </div>
          </div>

          <div className="space-y-4 mb-8 relative z-10">
            {compatibilityChecklistData.items.map((item, idx) => {
              const isChecked = checkedIndices.includes(idx)
              return (
                <div
                  key={idx}
                  onClick={() => toggleCheck(idx)}
                  className={`cursor-pointer p-4 md:p-5 rounded-2xl border transition-all duration-300 flex items-center gap-4 ${
                    isChecked
                      ? 'bg-gradient-to-r from-[#5A2638]/50 to-[#4A1F2D]/40 border-[#B78C86]/60 text-white shadow-[0_0_20px_rgba(90,38,56,0.25)]'
                      : 'bg-[#3A1623]/20 border-[#B78C86]/15 text-[#EDE6DA]/75 hover:bg-[#4A1F2D]/25 hover:border-[#B78C86]/30'
                  }`}
                >
                  <div
                    className={`w-6 h-6 md:w-7 md:h-7 rounded-lg flex items-center justify-center shrink-0 border transition-all duration-300 ${
                      isChecked
                        ? 'bg-[#5A2638] border-[#B78C86] text-[#FAF7F2]'
                        : 'border-[#B78C86]/25 bg-black/30'
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
          <div className="p-6 md:p-8 rounded-2xl bg-[#3A1623]/40 border border-[#B78C86]/30 text-center relative z-10 transition-all duration-500 backdrop-blur-sm shadow-xl">
            <div className="mb-3">
              <span className="inline-block px-4 py-2 rounded-full text-[16px] font-semibold bg-white/5 text-[#C19B83] border border-white/10">
                체크한 항목 수 · {selectedCount} / {compatibilityChecklistData.items.length}
              </span>
            </div>

            {isHighPattern && (
              <p className="text-[#D8BB94] font-bold text-[20px] md:text-[22px] mb-2 break-keep">
                {compatibilityChecklistData.highlight}
              </p>
            )}

            <p className="text-[18px] text-[#EDE6DA] break-keep font-medium leading-relaxed mb-3">
              {isHighPattern
                ? compatibilityChecklistData.feedbackHigh
                : compatibilityChecklistData.feedbackLow}
            </p>

            <p className="text-[15px] md:text-[16px] text-[#EDE6DA]/75 font-light mb-2 break-keep">
              정답을 고르는 체크가 아니라, 반복되는 패턴을 살펴보기 위한 체크입니다.
            </p>

            <p className="text-[12px] sm:text-[13px] leading-[1.5] text-[#EDE6DA]/75 mt-5 break-keep">
              {compatibilityChecklistData.disclaimer}
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
