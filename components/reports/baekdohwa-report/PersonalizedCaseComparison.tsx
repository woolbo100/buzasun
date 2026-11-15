'use client'

import Reveal from '@/components/Reveal'
import { personalizedCaseData } from './data'

export default function PersonalizedCaseComparison() {
  return (
    <section className="mb-40">
      <Reveal>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="block font-elegant text-[12pt] font-semibold tracking-[0.2em] text-[#D9A8A7] uppercase mb-4">
            DIFFERENT CHOICES, DIFFERENT LOVE
          </span>
          <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white mb-6 leading-[1.25] md:leading-[1.3] break-keep whitespace-pre-line">
            {personalizedCaseData.mainCopy}
          </h2>
          <p className="text-[18px] text-[#EDE6DA] opacity-75 font-light break-keep">
            {personalizedCaseData.subCopy}
          </p>
        </div>

        {/* CASE A & B 비교 카드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto mb-12">
          {personalizedCaseData.cases.map((c, idx) => (
            <div
              key={idx}
              className="p-8 md:p-10 rounded-[32px] transition-all duration-300 relative overflow-hidden flex flex-col justify-between group shadow-2xl hover:border-[rgba(245,218,226,0.35)]"
              style={{
                background: 'rgba(125, 76, 100, 0.22)',
                border: '1px solid rgba(215, 170, 185, 0.20)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
              }}
            >
              {/* 은은한 배경 광채 효과 */}
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-[#B7788D]/10 rounded-full blur-[60px] pointer-events-none" />

              {/* 상단 뱃지 & 선천코드 */}
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <span className="px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider bg-[#B7788D] text-[#1A0514] shadow-sm">
                    {c.badge}
                  </span>
                  <div className="px-3 py-1 rounded-lg bg-black/25 border border-white/15 text-xs text-[#E6BFA9]">
                    선천코드: <span className="font-semibold text-white">{c.code}</span>
                  </div>
                </div>

                <h3 className="text-[20px] md:text-[24px] font-bold text-white mb-8 group-hover:text-[#F3D6DE] transition-colors leading-snug break-keep">
                  {c.typeName}
                </h3>

                <div className="space-y-5">
                  {/* 반복 행동 (중간 톤 일반 정보 카드) */}
                  <div className="p-4 md:p-5 rounded-2xl bg-black/25 border border-white/10 backdrop-blur-sm">
                    <span className="text-xs font-bold text-white/60 block mb-1.5">
                      {c.behaviorTitle}
                    </span>
                    <p className="text-sm md:text-base text-[#EDE6DA]/90 font-light leading-relaxed break-keep">
                      {c.behaviorDesc}
                    </p>
                  </div>

                  {/* 관계의 결과 (버건디/딥로즈 강조 카드) */}
                  <div className="p-4 md:p-5 rounded-2xl bg-[#5C1D2E]/40 border border-[#B7788D]/35 backdrop-blur-sm">
                    <span className="text-xs font-bold text-[#F8B4C4] block mb-1.5">
                      {c.resultTitle}
                    </span>
                    <p className="text-sm md:text-base text-[#FFF0F3]/95 font-light leading-relaxed break-keep">
                      {c.resultDesc}
                    </p>
                  </div>
                </div>
              </div>

              {/* 처방 방향 (하단 강조 박스) */}
              <div className="mt-8 pt-6 border-t border-[#B7788D]/30 p-4 md:p-5 rounded-2xl bg-[#B7788D]/15 border border-[#B7788D]/25 relative z-10 backdrop-blur-sm">
                <span className="text-xs font-bold text-[#F3C4D1] block mb-1.5">
                  ✨ {c.solutionTitle}
                </span>
                <p className="text-sm md:text-base text-white font-medium leading-relaxed break-keep">
                  {c.solutionDesc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 결론 요약 & 면책 고지 */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <p className="text-base md:text-lg text-[#E6BFA9] font-elegant leading-relaxed whitespace-pre-line font-medium">
            {personalizedCaseData.conclusion}
          </p>
          <p className="text-xs text-white/40">
            {personalizedCaseData.disclaimer}
          </p>
        </div>
      </Reveal>
    </section>
  )
}
