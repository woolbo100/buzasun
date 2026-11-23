'use client'

import Image from 'next/image'
import Reveal from '@/components/Reveal'

interface CompatibilityPrescriptionSampleProps {
  imageSrc?: string
}

/**
 * ══════════════════════════════════════════════════════════════════════
 * POINT 05 · ACTIONABLE PRESCRIPTION (실전 관계 행동 처방)
 * ──────────────────────────────────────────────────────────────────────
 * [PART A] 맞춤 처방의 필요성 (문제 제기 + 3개 처방 카드: 심리 / 소통 행동 / 관계 루틴)
 * [PART B] 하단 대표 비주얼 (가로형 궁합 처방전 배너 3:1 비율)
 * ══════════════════════════════════════════════════════════════════════
 */
export default function CompatibilityPrescriptionSample({
  imageSrc = '/image/compatibility/compatibility-point05-prescription-banner.webp'
}: CompatibilityPrescriptionSampleProps) {
  const prescriptionCards = [
    {
      num: 'CARD 01',
      tag: '심리 처방',
      content: '같은 갈등이 반복될 때,\n상대의 반응 뒤에 숨은\n감정부터 읽어냅니다.',
      desc: '서로 다른 기대와 방어 반응, 반복되는 오해의 지점을 살펴보고 비난보다 이해를 선택할 수 있는 관계의 기준을 제안합니다.'
    },
    {
      num: 'CARD 02',
      tag: '소통 행동 처방',
      content: '말이 상처가 되는 순간,\n다르게 표현하고 듣는\n대화의 기준을 처방합니다.',
      desc: '침묵과 방어, 감정적 충돌을 줄이기 위해 서로의 마음을 전달하는 방식과 갈등 후 다시 연결되는 소통 행동을 안내합니다.'
    },
    {
      num: 'CARD 03',
      tag: '관계 루틴 처방',
      content: '서로의 다름을 존중하며,\n두 사람에게 맞는 일상의\n관계 습관을 설계합니다.',
      desc: '친밀함과 개인 시간의 균형, 감사 표현과 관계 약속 등 함께 지속할 수 있는 맞춤형 실천 방향을 정리합니다.'
    }
  ]

  return (
    <section id="point-05-prescription" className="mb-32 md:mb-40 scroll-mt-28 md:scroll-mt-36 w-full max-w-[1280px] mx-auto">
      <span id="point-05" className="block -mt-28 pt-28" />
      <Reveal className="w-full">
        {/* ══════════════════════════════════════════════════════════════════ */}
        {/* [PART A] 헤더 카피 + 3개 실전 처방 카드 */}
        {/* ══════════════════════════════════════════════════════════════════ */}
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-14 px-4">
          {/* 전체 POINT 05의 시작을 알리는 단일 상단 라벨 */}
          <span className="block font-elegant text-[12pt] font-semibold tracking-[0.2em] text-[#D8BB94] uppercase mb-4">
            POINT 05 · ACTIONABLE PRESCRIPTION
          </span>

          <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white mb-6 leading-[1.25] md:leading-[1.3] break-keep">
            이런 궁합 처방전은 없었습니다.<br />
            막연한 관계 조언이 아닌, <span className="gradient-text-reunion">두 사람을 위한 현실적인 행동 처방전</span>
          </h2>

          <p className="text-[17px] md:text-[18px] text-[#FAF7F2]/90 font-light break-keep max-w-3xl mx-auto leading-relaxed">
            백도화 프리미엄 궁합 리포트는 단순한 성격 차이 설명을 넘어,<br className="hidden sm:inline" />{' '}
            반복되는 갈등과 감정의 엇갈림을 줄이고, 서로를 이해하는 대화법과 일상의 실천 방향을 제안합니다.
          </p>
        </div>

        {/* 3개 처방 카드 (심리 처방 / 소통 행동 처방 / 관계 루틴 처방) (1280px 풀 위드 정렬) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full max-w-[1280px] mx-auto">
          {prescriptionCards.map((card, idx) => (
            <div
              key={idx}
              className="gungjung-glass p-8 md:p-10 rounded-[28px] border border-[#B78C86]/25 hover:border-[#D8BB94]/45 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(90,38,56,0.25)] flex flex-col justify-between group h-full bg-gradient-to-b from-[#4A1F2D]/35 via-[#2A0C1A]/25 to-[#180A14]/45"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[12.5px] sm:text-[13px] font-mono font-bold tracking-widest text-[#D8BB94]">
                    {card.num}
                  </span>
                  <span className="text-[12px] sm:text-[12.5px] px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-[#5A2638]/70 border border-[#B78C86]/40 text-[#D8BB94] font-medium tracking-tight shadow-sm">
                    {card.tag}
                  </span>
                </div>
                <h3 className="text-[19px] md:text-[21px] lg:text-[22px] font-elegant font-bold text-white mb-4 leading-snug break-keep group-hover:text-[#D8BB94] transition-colors whitespace-pre-line">
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
        {/* [PART B] 하단 대표 비주얼 (가로형 궁합 처방전 배너 1280px 풀 위드) */}
        {/* ══════════════════════════════════════════════════════════════════ */}
        <div className="mt-10 sm:mt-12 md:mt-14 w-full max-w-[1280px] mx-auto">
          <Reveal delayMs={120}>
            <div className="prescription-visual-wrapper relative rounded-[22px] sm:rounded-[26px] md:rounded-[28px] overflow-hidden border border-[#B78C86]/35 bg-[#14080E]/90 shadow-[0_12px_40px_rgba(40,15,25,0.45)]">
              {/* 소프트 쉬머(빛 흐름) 오버레이 - 은은한 실크 광택 */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden z-10" aria-hidden="true">
                <div className="prescription-shimmer" />
              </div>

              {/* 가로형 배너 이미지 (2172 x 724 원본 3:1 비율 100% 유지, 왜곡 없음) */}
              <Image
                src={imageSrc}
                alt="백도화 POINT 05 실전 관계 처방전 가로형 배너 — 포인트 5 관계 처방전"
                width={2172}
                height={724}
                className="w-full h-auto block object-contain"
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
