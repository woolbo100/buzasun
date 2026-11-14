'use client'

import Reveal from '@/components/Reveal'
import { TrendingDown, Scale, DollarSign } from 'lucide-react'

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
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="block font-elegant text-[12pt] font-semibold tracking-[0.2em] text-[#8FB4A4] uppercase mb-4">
            WEALTH DYNAMICS ANALYSIS
          </span>
          <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white mb-6 leading-[1.25] md:leading-[1.3] break-keep">
            &ldquo;돈이 부족한 이유를,<br className="sm:hidden" />
            <span className="gradient-text-abundance"> 수입에서만 찾지 마라.</span>&rdquo;
          </h2>
          <p className="text-[16px] md:text-[18px] text-[#EDE6DA] opacity-80 font-light leading-relaxed max-w-2xl mx-auto break-keep">
            남들보다 적게 벌어서가 아닙니다.<br className="hidden sm:inline" />
            재테크 지식이 부족해서가 아니라, <span className="text-[#C6A477] font-medium">돈 앞에서 반복되는 판단·감정·관계의 습관</span> 때문입니다.
          </p>
        </div>

        {/* 3대 날카로운 질문 카드 */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
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
                  <p className="text-sm text-[#EDE6DA]/70 font-light leading-relaxed break-keep">
                    {item.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* 본문 설명 및 풍요 리포트 정의 */}
        <div className="max-w-7xl mx-auto gungjung-glass p-8 md:p-12 rounded-[32px] border border-[#608F82]/35 bg-gradient-to-r from-[#0f241f]/35 via-[#152e27]/20 to-[#0a0514]/35 text-center relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-6">
            <p className="text-base md:text-lg text-[#EDE6DA] leading-relaxed font-light break-keep">
              단순히 운세가 좋다는 말이나 뜬구름 잡는 확언은 현실의 통장을 채워주지 않습니다.
            </p>
            <p className="text-lg md:text-xl text-white font-elegant font-bold break-keep">
              &ldquo;선천코드 풍요 리포트는 당신이 돈을 벌고, 쓰고, 지키는 방식에<br className="hidden sm:inline" />
              어떤 반복 패턴이 있는지 입체적으로 탐색합니다.&rdquo;
            </p>
            <p className="text-sm md:text-base text-[#EDE6DA]/80 leading-relaxed font-light break-keep">
              자신의 선천 기질과 현실적인 조건에 맞는 수입 모델을 발견하고,<br className="hidden sm:inline" />
              돈 앞에서 흔들리지 않는 명확한 기준과 구체적인 실천 방향을 제시합니다.
            </p>

            <div className="pt-6 border-t border-[#608F82]/25">
              <p className="text-lg md:text-2xl font-elegant font-bold text-[#C6A477] break-keep">
                &ldquo;더 많이 버는 방법을 찾기 전에, 왜 남지 않는지부터 읽어라.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
