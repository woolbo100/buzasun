'use client'

import Image from 'next/image'
import Reveal from '@/components/Reveal'
import { generalAdviceData } from './data'

/**
 * ══════════════════════════════════════════════════════════════════════
 * POINT 05 · ACTIONABLE PRESCRIPTION (실전 관계 처방)
 * ──────────────────────────────────────────────────────────────────────
 * [PART A] 맞춤 처방의 필요성 (문제 제기 + 3개 처방 카드: 소통 / 행동 / 오행 개운)
 * [PART B] 하단 대표 비주얼 (three love prescriptions - 3분할 비주얼 연결)
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
                  <span className="text-[12px] sm:text-[12.5px] px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-[#2D0A1E]/80 border border-[#E8C5BE]/40 text-[#E8C5BE] font-medium tracking-tight shadow-sm">
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

        {/* ══════════════════════════════════════════════════════════════════ */}
        {/* [PART B] 하단 대표 비주얼 (소통 / 행동 / 오행 개운 3처방 연결 이미지) */}
        {/* ══════════════════════════════════════════════════════════════════ */}
        <div className="mt-10 sm:mt-12 md:mt-14 max-w-7xl mx-auto">
          <Reveal delayMs={120}>
            <div className="prescription-visual-wrapper relative rounded-[22px] sm:rounded-[26px] md:rounded-[28px] overflow-hidden border border-white/10 bg-[#170619]/60 shadow-[0_12px_40px_rgba(18,0,20,0.5)]">
              {/* 소프트 쉬머(빛 흐름) 오버레이 - 과하지 않은 아주 은은한 실크 광택 */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden z-10" aria-hidden="true">
                <div className="prescription-shimmer" />
              </div>

              {/* 원본 비율/색감 그대로 유지하는 가로형 3분할 비주얼 */}
              <Image
                src="/image/lovereport/three love prescriptions.webp"
                alt="포인트 5 연애 처방전 배너 이미지"
                width={2170}
                height={725}
                className="w-full h-auto block object-cover object-center"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 92vw, 1280px"
                priority={false}
              />
            </div>
          </Reveal>

          {/* 상시 마이크로 애니메이션: 미세 float 부유 & 은은한 소프트 쉬머 */}
          <style jsx>{`
            .prescription-visual-wrapper {
              animation: prescriptionGentleFloat 5.5s ease-in-out infinite;
              will-change: transform;
            }

            @keyframes prescriptionGentleFloat {
              0%, 100% {
                transform: translateY(0px);
              }
              50% {
                transform: translateY(-5px);
              }
            }

            .prescription-shimmer {
              width: 50%;
              height: 100%;
              background: linear-gradient(
                90deg,
                transparent 0%,
                rgba(255, 255, 255, 0.04) 50%,
                transparent 100%
              );
              transform: skewX(-20deg);
              animation: prescriptionShimmerSweep 7s ease-in-out infinite;
              will-change: transform;
            }

            @keyframes prescriptionShimmerSweep {
              0% {
                transform: translateX(-150%) skewX(-20deg);
              }
              35%, 100% {
                transform: translateX(250%) skewX(-20deg);
              }
            }

            @media (prefers-reduced-motion: reduce) {
              .prescription-visual-wrapper,
              .prescription-shimmer {
                animation: none !important;
                transform: none !important;
              }
            }
          `}</style>
        </div>
      </Reveal>
    </section>
  )
}
