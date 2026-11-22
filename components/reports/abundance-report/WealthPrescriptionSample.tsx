'use client'

import Image from 'next/image'
import Reveal from '@/components/Reveal'

interface WealthPrescriptionSampleProps {
  imageSrc?: string
}

/**
 * ══════════════════════════════════════════════════════════════════════
 * POINT 05 · ACTIONABLE PRESCRIPTION (실전 풍요 행동 처방)
 * ──────────────────────────────────────────────────────────────────────
 * [PART A] 맞춤 처방의 필요성 (문제 제기 + 3개 처방 카드: 심리 / 행동 / 풍요 루틴)
 * [PART B] 하단 대표 비주얼 (가로형 풍요 처방전 배너)
 * ══════════════════════════════════════════════════════════════════════
 */
export default function WealthPrescriptionSample({
  imageSrc = '/images/abundance/wealth-point05-actionable-prescription-banner.webp'
}: WealthPrescriptionSampleProps) {
  const prescriptionCards = [
    {
      num: 'CARD 01',
      tag: '심리 처방',
      content: '돈 앞에서 작아지는 순간,\n나를 다시 세우는 마음의 기준을 처방합니다.',
      desc: '가격을 말할 때 위축되거나, 지출과 선택 앞에서 죄책감이 올라오는 순간 나를 무너뜨리는 심리 패턴을 인식하고 흔들리지 않도록 붙잡아주는 내면 기준을 안내합니다.'
    },
    {
      num: 'CARD 02',
      tag: '행동 처방',
      content: '망설임과 누수가 반복될 때,\n즉시 꺼내 쓸 행동 기준을 처방합니다.',
      desc: '결정을 미루거나, 기회를 흘려보내거나, 작은 불안 때문에 반복적으로 돈이 새는 순간마다 현실에서 바로 적용할 수 있는 선택 기준과 실전 행동 원칙을 제안합니다.'
    },
    {
      num: 'CARD 03',
      tag: '풍요 루틴 처방',
      content: '타고난 기질에 맞춰,\n풍요가 쌓이는 일상 루틴을 처방합니다.',
      desc: '억지로 따라 하는 성공 습관이 아니라, 당신의 재물 기질과 생활 흐름에 맞게 매일 반복할 수 있는 풍요 루틴과 현실적인 실천 방향을 정리해드립니다.'
    }
  ]

  return (
    <section id="point-05-prescription" className="mb-32 md:mb-40 scroll-mt-28 md:scroll-mt-36">
      <Reveal>
        {/* ══════════════════════════════════════════════════════════════════ */}
        {/* [PART A] 헤더 카피 + 3개 실전 처방 카드 */}
        {/* ══════════════════════════════════════════════════════════════════ */}
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-14 px-4">
          {/* 전체 POINT 05의 시작을 알리는 단일 상단 라벨 */}
          <span className="block font-elegant text-[12pt] font-semibold tracking-[0.2em] text-[#8FB4A4] uppercase mb-4">
            POINT 05 · ACTIONABLE PRESCRIPTION
          </span>

          <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white mb-6 leading-[1.25] md:leading-[1.3] break-keep">
            이런 풍요 처방전은 없었습니다.<br />
            막연한 부자 마인드셋이 아닌,<br className="hidden sm:inline" />{' '}
            <span className="text-[#C2A477]">현실적인 행동 처방전</span>
          </h2>

          <p className="text-[17px] md:text-[18px] text-[#FAF7F2]/90 font-light break-keep max-w-2xl mx-auto leading-relaxed">
            백도화 선천코드 풍요 리포트의 핵심인 PART 07에서는<br className="hidden sm:inline" />
            비현실적인 요행이나 추상적인 부자 조언 대신,<br className="hidden sm:inline" />
            돈 앞에서의 위축과 누수, 흔들리는 선택을 바로잡을<br className="hidden sm:inline" />
            실제 행동 가이드를 처방합니다.
          </p>
        </div>

        {/* 3개 처방 카드 (심리 처방 / 행동 처방 / 풍요 루틴 처방) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto px-4 sm:px-6">
          {prescriptionCards.map((card, idx) => (
            <div
              key={idx}
              className="gungjung-glass p-8 md:p-10 rounded-[28px] border border-white/10 hover:border-[#608F82]/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(96,143,130,0.15)] flex flex-col justify-between group h-full bg-gradient-to-b from-[#0f241f]/30 via-transparent to-black/40"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[12.5px] sm:text-[13px] font-mono font-bold tracking-widest text-[#C2A477]">
                    {card.num}
                  </span>
                  <span className="text-[12px] sm:text-[12.5px] px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-[#0f241f] border border-[#608F82]/40 text-[#8FB4A4] font-medium tracking-tight shadow-sm">
                    {card.tag}
                  </span>
                </div>
                <h3 className="text-[19px] md:text-[21px] lg:text-[22px] font-elegant font-bold text-white mb-4 leading-snug break-keep group-hover:text-[#C2A477] transition-colors whitespace-pre-line">
                  &ldquo;{card.content}&rdquo;
                </h3>
              </div>
              <p className="text-[14.5px] md:text-[15.5px] text-[#EDE6DA]/85 leading-[1.68] md:leading-[1.72] font-light break-keep pt-4 border-t border-white/5">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        {/* ══════════════════════════════════════════════════════════════════ */}
        {/* [PART B] 하단 대표 비주얼 (가로형 풍요 처방전 배너) */}
        {/* ══════════════════════════════════════════════════════════════════ */}
        <div className="mt-10 sm:mt-12 md:mt-14 max-w-7xl mx-auto px-4 sm:px-6">
          <Reveal delayMs={120}>
            <div className="prescription-visual-wrapper relative rounded-[22px] sm:rounded-[26px] md:rounded-[28px] overflow-hidden border border-[#608F82]/30 bg-[#071714]/80 shadow-[0_12px_40px_rgba(5,20,16,0.5)]">
              {/* 소프트 쉬머(빛 흐름) 오버레이 - 은은한 실크 광택 */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden z-10" aria-hidden="true">
                <div className="prescription-shimmer" />
              </div>

              {/* 가로형 배너 이미지 (2172 x 724 원본 비율 100% 유지, 왜곡 없음) */}
              <Image
                src={imageSrc}
                alt="백도화 3대 실전 풍요 행동 처방 비주얼 (심리 처방 · 행동 처방 · 풍요 루틴 처방)"
                width={2172}
                height={724}
                className="w-full h-auto block"
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
