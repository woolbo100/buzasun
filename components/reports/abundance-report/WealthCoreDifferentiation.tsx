'use client'

import Reveal from '@/components/Reveal'
import Image from 'next/image'
import { TrendingDown, Scale, DollarSign } from 'lucide-react'

// ══════════════════════════════════════════════════════════════════════
// 재물 동역학 분석(WEALTH DYNAMICS ANALYSIS) 16:9 가로형 비주얼 설정
// ══════════════════════════════════════════════════════════════════════
const ABUNDANCE_WEALTH_DYNAMICS_VISUAL = {
  src: '/image/abundance/wealth-money-leakage-pattern.webp',
  alt: '선천코드 풍요 리포트 재물 누수와 반복 패턴 16:9',
  width: 1672,
  height: 941,
}

export default function WealthCoreDifferentiation() {
  const painQuestions = [
    {
      icon: TrendingDown,
      question: "왜 돈이 들어오면 계획하지 않은 지출이 늘어날까?",
      desc: "수입이 늘어나도 이상하게 통장 잔고는 그대로이거나, 예상치 못한 곳으로 돈이 새어나가는 반복"
    },
    {
      icon: Scale,
      question: "왜 내 서비스나 노동의 가격을 올릴 때마다 죄책감이 들까?",
      desc: "내 가치를 정당하게 요구하지 못하고, 늘 손해보는 제안을 스스로 수락해버리는 무의식적 위축"
    },
    {
      icon: DollarSign,
      question: "왜 남의 부탁에는 쉽게 돈을 쓰면서, 나를 위한 투자에는 망설일까?",
      desc: "타인의 시선이나 거절에 대한 두려움으로 관계에 돈을 쓰고, 정작 내 미래를 위한 성장은 미루는 패턴"
    }
  ]

  return (
    <section className="mb-40">
      <Reveal>
        <div className="max-w-4xl mx-auto text-center mb-10 md:mb-12">
          <span className="block font-elegant text-[12pt] font-semibold tracking-[0.2em] text-[#8FB4A4] uppercase mb-4">
            WEALTH DYNAMICS ANALYSIS
          </span>
          <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white mb-6 leading-[1.3] md:leading-[1.35] break-keep">
            <span className="block text-white">&ldquo;돈이 부족한 이유를,</span>
            <span className="gradient-text-abundance">수입에서만 찾지 마세요.&rdquo;</span>
          </h2>
          <p className="text-[18px] text-[#EDE6DA] opacity-80 font-light leading-relaxed max-w-3xl mx-auto break-keep">
            벌어도 남지 않고, 애써도 흐름이 막히는 날이 반복된다면,<br className="hidden sm:inline" />
            새로운 수익이나 기회를 만나도 금세 제자리로 돌아온다면,<br className="hidden sm:inline" />
            이제는 숫자가 아니라 <span className="text-[#C6A477] font-medium">돈 앞에서 반복되는 내 안의 작동 방식</span>을 들여다봐야 합니다.
          </p>
        </div>

        {/* 16:9 가로형 이미지 슬롯 (재물 누수와 반복 패턴) */}
        <div className="max-w-7xl mx-auto mb-10 md:mb-12">
          <div className="relative w-full aspect-[16/9] rounded-[28px] sm:rounded-[36px] md:rounded-[40px] overflow-hidden border border-[#608F82]/30 bg-[#0B1514] shadow-2xl backdrop-blur-md flex items-center justify-center">
            <Image
              src={ABUNDANCE_WEALTH_DYNAMICS_VISUAL.src}
              alt={ABUNDANCE_WEALTH_DYNAMICS_VISUAL.alt}
              fill
              className="object-contain"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
          </div>
        </div>

        {/* 3대 날카로운 질문 카드 */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {painQuestions.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="gungjung-glass p-8 rounded-[28px] border border-[#608F82]/25 bg-gradient-to-b from-[#0f241f]/20 to-[#0a0514]/35 hover:border-[#608F82]/60 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#608F82]/15 border border-[#608F82]/35 flex items-center justify-center text-[#8FB4A4] mb-6">
                    <Icon className="w-6 h-6 stroke-[1.8]" />
                  </div>
                  <h3 className="text-lg md:text-[19px] font-bold text-white mb-4 leading-snug break-keep">
                    {item.question}
                  </h3>
                  <p className="text-[16px] text-[#EDE6DA]/70 font-light leading-[1.6] break-keep">
                    {item.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </Reveal>
    </section>
  )
}
