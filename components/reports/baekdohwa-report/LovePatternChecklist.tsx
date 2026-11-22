'use client'

import { useState } from 'react'
import Reveal from '@/components/Reveal'
import { checklistData } from './data'
import { Check } from 'lucide-react'

export default function LovePatternChecklist() {
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
          <span className="block font-elegant text-[12pt] font-semibold tracking-[0.2em] text-[#D9A8A7] uppercase mb-4">
            PATTERN CHECKLIST
          </span>
          <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white mb-6 leading-[1.25] md:leading-[1.3] break-keep">
            {checklistData.title}
          </h2>
          <p className="text-[18px] text-[#EDE6DA] opacity-80 whitespace-pre-line leading-relaxed font-light break-keep">
            {checklistData.subtitle}
          </p>
        </div>

        <div 
          className="p-8 md:p-14 rounded-[32px] max-w-7xl mx-auto shadow-2xl relative overflow-hidden"
          style={{
            background: 'rgba(125, 76, 100, 0.22)',
            border: '1px solid rgba(215, 170, 185, 0.20)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
          }}
        >
          {/* 은은한 배경 광채 */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#B7788D]/10 rounded-full blur-[80px] pointer-events-none"></div>

          {/* 체크리스트 직접 체험 인터랙션 안내 문구 */}
          <div className="mb-6 pb-6 border-b border-white/10 flex items-center justify-center text-center relative z-10">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#B7788D] animate-pulse"></span>
              <p className="text-[15px] md:text-[16px] text-[#F3E5E9] font-medium break-keep">
                아래 항목 중 내 이야기처럼 느껴지는 것이 있다면 체크해보세요.
              </p>
            </div>
          </div>

          <div className="space-y-4 mb-8 relative z-10">
            {checklistData.items.map((item, idx) => {
              const isChecked = checkedIndices.includes(idx)
              return (
                <div
                  key={idx}
                  onClick={() => toggleCheck(idx)}
                  style={{
                    background: isChecked 
                      ? 'rgba(145, 80, 110, 0.78)' 
                      : 'rgba(92, 53, 78, 0.68)',
                    borderColor: isChecked 
                      ? 'rgba(245, 218, 226, 0.55)' 
                      : 'rgba(218, 174, 190, 0.16)',
                    boxShadow: isChecked 
                      ? '0 0 24px rgba(183, 120, 141, 0.25)' 
                      : 'none',
                  }}
                  className="cursor-pointer p-4 md:p-5 rounded-2xl border transition-all duration-300 flex items-center gap-4 hover:border-[rgba(245,218,226,0.35)]"
                >
                  <div
                    style={{
                      borderColor: isChecked ? '#B7788D' : 'rgba(245, 218, 226, 0.55)',
                    }}
                    className={`w-6 h-6 md:w-7 md:h-7 rounded-lg flex items-center justify-center shrink-0 border transition-all duration-300 ${
                      isChecked
                        ? 'bg-[#B7788D] text-[#1A0514]'
                        : 'bg-black/30'
                    }`}
                  >
                    {isChecked && <Check className="w-4 h-4 stroke-[3]" />}
                  </div>
                  <span 
                    style={{ color: '#F3E5E9' }}
                    className="text-base md:text-lg font-medium select-none break-keep"
                  >
                    {item}
                  </span>
                </div>
              )
            })}
          </div>

          {/* 결과 안내 카드 (가장 진한 딥플럼) */}
          <div 
            style={{
              background: 'rgba(28, 15, 24, 0.85)',
              border: '1px solid rgba(218, 174, 190, 0.22)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
            }}
            className="p-6 md:p-8 rounded-2xl text-center relative z-10 transition-all duration-500 shadow-xl"
          >
            <div className="mb-4 md:mb-5">
              <span className="inline-block px-4 py-2 rounded-full text-[16px] font-semibold bg-white/5 text-[#D9A8A7] border border-white/10">
                체크한 항목 수 · {selectedCount} / {checklistData.items.length}
              </span>
            </div>

            {/* 메인 안내 문구, 설명 문구, 주의 문구 통합 그룹 */}
            <div>
              {isHighPattern && (
                <p className="text-[#D9A8A7] font-bold text-[20px] md:text-[22px] mb-1.5 break-keep">
                  {checklistData.highlight}
                </p>
              )}

              <p className="text-[18px] text-[#EDE6DA] break-keep font-medium leading-relaxed mb-2">
                {isHighPattern ? checklistData.feedbackHigh : checklistData.feedbackLow}
              </p>

              <p className="text-[15px] md:text-[16px] text-[#EDE6DA]/75 font-light leading-relaxed break-keep">
                정답을 고르는 체크가 아니라, 반복되는 패턴을 살펴보기 위한 체크입니다.
              </p>

              <p className="text-[12px] sm:text-[13px] leading-[1.5] text-[#EDE6DA]/75 mt-2 md:mt-2.5 break-keep">
                {checklistData.disclaimer}
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
