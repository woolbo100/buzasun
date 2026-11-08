'use client'

import Reveal from '@/components/Reveal'
import { personalizedCaseData } from './data'

export default function PersonalizedCaseComparison() {
  return (
    <section className="mb-40">
      <Reveal>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-[12px] font-bold tracking-[0.25em] bg-[var(--accent-gold)]/10 border border-[var(--accent-gold)]/20 text-[var(--accent-gold-light)] uppercase mb-6">
            DIFFERENT CHOICES, DIFFERENT LOVE
          </span>
          <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white mb-6 leading-[1.25] md:leading-[1.3] break-keep whitespace-pre-line">
            {personalizedCaseData.mainCopy}
          </h2>
          <p className="text-[16px] md:text-[18px] text-[#EDE6DA] opacity-75 font-light break-keep">
            {personalizedCaseData.subCopy}
          </p>
        </div>

        {/* CASE A & B 비교 카드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {personalizedCaseData.cases.map((c, idx) => (
            <div
              key={idx}
              className="gungjung-glass p-8 md:p-10 rounded-[32px] border border-white/10 hover:border-[var(--accent-gold)]/40 transition-all duration-300 relative overflow-hidden flex flex-col justify-between group"
            >
              {/* 상단 뱃지 & 선천코드 */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider bg-[var(--accent-gold)] text-[#1A0514]">
                    {c.badge}
                  </span>
                  <div className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-[var(--accent-gold-light)]">
                    선천코드: <span className="font-semibold">{c.code}</span>
                  </div>
                </div>

                <h3 className="text-[20px] md:text-[24px] font-bold text-white mb-8 group-hover:text-[var(--accent-gold-light)] transition-colors leading-snug break-keep">
                  {c.typeName}
                </h3>

                <div className="space-y-6">
                  {/* 반복 행동 */}
                  <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                    <span className="text-xs font-bold text-white/50 block mb-1">
                      {c.behaviorTitle}
                    </span>
                    <p className="text-sm md:text-base text-[#EDE6DA]/85 font-light leading-relaxed break-keep">
                      {c.behaviorDesc}
                    </p>
                  </div>

                  {/* 관계의 결과 */}
                  <div className="p-4 rounded-2xl bg-rose-950/20 border border-rose-900/30">
                    <span className="text-xs font-bold text-rose-300/70 block mb-1">
                      {c.resultTitle}
                    </span>
                    <p className="text-sm md:text-base text-rose-100/85 font-light leading-relaxed break-keep">
                      {c.resultDesc}
                    </p>
                  </div>
                </div>
              </div>

              {/* 처방 방향 (하단 강조) */}
              <div className="mt-8 pt-6 border-t border-[var(--accent-gold)]/20 p-4 rounded-2xl bg-[var(--accent-gold)]/5">
                <span className="text-xs font-bold text-[var(--accent-gold)] block mb-1">
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
          <p className="text-base md:text-lg text-[var(--accent-gold-light)] font-elegant leading-relaxed whitespace-pre-line font-medium">
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
