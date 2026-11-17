'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
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
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 sm:mt-12 md:mt-14 max-w-7xl mx-auto"
        >
          {/* 미세한 상시 float 부유 효과 (translateY: 0 ~ -4px, 7s 무한 반복) */}
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            className="group relative rounded-[22px] sm:rounded-[26px] md:rounded-[28px] overflow-hidden border border-white/10 hover:border-[#B7788D]/35 bg-[#170619]/60 shadow-[0_12px_40px_rgba(18,0,20,0.5)] hover:shadow-[0_18px_50px_rgba(183,120,141,0.18)] transition-all duration-500 hover:scale-[1.01]"
          >
            {/* 좌 -> 중 -> 우로 은은하게 흐르는 소프트 shimmer sweep */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
              <motion.div
                animate={{
                  x: ['-100%', '200%']
                }}
                transition={{
                  duration: 8.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  repeatDelay: 3.5
                }}
                className="w-1/2 h-full bg-gradient-to-r from-transparent via-[#FAF7F2]/[0.035] to-transparent skew-x-[-20deg]"
              />
            </div>

            {/* 원본 비율/색감 그대로 유지하는 가로형 3분할 비주얼 */}
            <Image
              src="/image/lovereport/three love prescriptions.webp"
              alt="백도화 3대 실전 관계 처방 비주얼 (소통 처방 · 행동 처방 · 오행 개운 처방)"
              width={2170}
              height={725}
              className="w-full h-auto block transform-gpu"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 92vw, 1280px"
              priority={false}
            />
          </motion.div>
        </motion.div>
      </Reveal>
    </section>
  )
}
