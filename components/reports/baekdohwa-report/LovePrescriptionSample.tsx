'use client'

import Reveal from '@/components/Reveal'
import { generalAdviceData } from './data'

/**
 * ══════════════════════════════════════════════════════════════════════
 * POINT 05 · ACTIONABLE PRESCRIPTION (실전 관계 처방)
 * ──────────────────────────────────────────────────────────────────────
 * [PART A] 맞춤 처방의 필요성 (문제 제기 + 3개 처방 카드: 소통 / 행동 / 오행 개운)
 * ══════════════════════════════════════════════════════════════════════
 */
export default function LovePrescriptionSample() {
  return (
    <section id="point-05-prescription" className="mb-32 md:mb-40 scroll-mt-28 md:scroll-mt-36">
      <Reveal>
        {/* ══════════════════════════════════════════════════════════════════ */}
        {/* [PART A] 일반적인 연애 조언의 한계 및 실전 처방 안내 */}
        {/* ══════════════════════════════════════════════════════════════════ */}
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-14">
          {/* 전체 POINT 05의 시작을 알리는 단일 상단 라벨 */}
          <span className="block font-elegant text-[12pt] font-semibold tracking-[0.2em] text-[#D9A8A7] uppercase mb-4">
            POINT 05 · ACTIONABLE PRESCRIPTION
          </span>

          <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white mb-6 leading-[1.25] md:leading-[1.3] break-keep">
            연애 조언은 넘쳐납니다.<br />
            <span className="gradient-text-love">당신만의 처방전은 없었습니다.</span>
          </h2>

          <p className="text-[17px] md:text-[18px] text-[#FAF7F2]/90 font-light break-keep max-w-2xl mx-auto leading-relaxed whitespace-pre-line">
            {generalAdviceData.subCopy}
          </p>
        </div>

        {/* 3개 처방 카드 (소통 처방 / 행동 처방 / 오행 개운 처방) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {generalAdviceData.cards.map((card, idx) => (
            <div
              key={idx}
              className="gungjung-glass p-8 md:p-10 rounded-[28px] border border-white/10 hover:border-[#B7788D]/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(183, 120, 141, 0.1)] flex flex-col justify-between group h-full"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[12.5px] sm:text-[13px] font-mono font-bold tracking-widest text-[#E8C5BE]">
                    {card.num}
                  </span>
                  <span className="text-[12px] sm:text-[12.5px] px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-[#2D0A1E]/80 border border-[#B7788D]/35 text-[#E5B5C1] font-medium tracking-tight shadow-sm">
                    {card.tag}
                  </span>
                </div>
                <h3 className="text-[20px] md:text-[23px] lg:text-[24px] font-elegant font-bold text-white mb-4 leading-snug break-keep group-hover:text-[#D9A8A7] transition-colors">
                  &ldquo;{card.content}&rdquo;
                </h3>
              </div>
              <p className="text-[15px] md:text-[16px] text-[#EDE6DA]/85 leading-[1.68] md:leading-[1.72] font-light break-keep pt-4 border-t border-white/5">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
