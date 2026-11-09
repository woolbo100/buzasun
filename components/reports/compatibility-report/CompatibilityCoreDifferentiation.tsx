'use client'

import Reveal from '@/components/Reveal'
import { MessageSquareOff, HeartCrack, RefreshCw } from 'lucide-react'

export default function CompatibilityCoreDifferentiation() {
  const painQuestions = [
    {
      icon: MessageSquareOff,
      question: "왜 나는 설명하려 할수록 상대는 더 멀어지고 입을 닫을까?",
      desc: "관계를 풀고 싶어 시작한 대화가 어느새 침묵과 회피라는 더 깊은 단절로 이어지는 좌절"
    },
    {
      icon: HeartCrack,
      question: "왜 상대에겐 아무렇지 않은 말 한마디에 나는 깊은 상처를 받을까?",
      desc: "서로 다른 감정의 민감도와 방어기제로 인해, 작은 표현 차이가 치명적인 상처가 되는 순간"
    },
    {
      icon: RefreshCw,
      question: "왜 눈물로 화해해도 결국 똑같은 문제의 제자리로 돌아올까?",
      desc: "감정적인 미안함만 나눴을 뿐, 부딪히는 구조적 원인을 해결하지 못해 반복되는 소모전"
    }
  ]

  return (
    <section className="mb-40">
      <Reveal>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-[12px] font-bold tracking-[0.25em] bg-[#663244]/20 border border-[#935C6B]/40 text-[#D8BB94] uppercase mb-6">
            CONFLICT STRUCTURE ANALYSIS
          </span>
          <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white mb-6 leading-[1.25] md:leading-[1.3] break-keep">
            &ldquo;궁합이 좋다는 말보다 중요한 것은,<br className="sm:hidden" />
            <span className="gradient-text-reunion"> 왜 우리가 부딪히는지 아는 것이다.</span>&rdquo;
          </h2>
          <p className="text-[16px] md:text-[18px] text-[#EDE6DA] opacity-80 font-light leading-relaxed max-w-2xl mx-auto break-keep">
            좋은 궁합, 나쁜 궁합이라는 단순한 이분법으로는 관계를 구할 수 없습니다.<br className="hidden sm:inline" />
            사랑이 부족해서가 아니라, <span className="text-[#D8BB94] font-medium">서로의 반응 방식이 충돌하고 있을 뿐</span>입니다.
          </p>
        </div>

        {/* 3대 날카로운 질문 카드 */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {painQuestions.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="gungjung-glass p-8 rounded-[28px] border border-[#935C6B]/30 bg-gradient-to-b from-[#3B0F1B]/30 to-[#1A0514]/60 hover:border-[#935C6B]/70 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#663244]/20 border border-[#935C6B]/40 flex items-center justify-center text-[#D8BB94] mb-6">
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

        {/* 본문 설명 및 궁합 리포트 정의 */}
        <div className="max-w-7xl mx-auto gungjung-glass p-8 md:p-12 rounded-[32px] border border-[#935C6B]/40 bg-gradient-to-r from-[#2D0A1E]/90 via-[#3B0F1B]/40 to-[#0A0514]/90 text-center relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-6">
            <p className="text-base md:text-lg text-[#EDE6DA] leading-relaxed font-light break-keep">
              &lsquo;천생연분&rsquo;이라는 점괘를 믿고 방심하거나, &lsquo;상극&rsquo;이라는 말에 미리 체념할 필요가 없습니다.
            </p>
            <p className="text-lg md:text-xl text-white font-elegant font-bold break-keep">
              &ldquo;선천코드 궁합 리포트는 두 사람의 기질 차이와<br className="hidden sm:inline" />
              관계에서 나타나는 반응 패턴을 함께 살펴봅니다.&rdquo;
            </p>
            <p className="text-sm md:text-base text-[#EDE6DA]/80 leading-relaxed font-light break-keep">
              누가 옳고 그른지를 판정하는 것이 아니라, 어디에서 충돌이 시작되고<br className="hidden sm:inline" />
              어떤 소통 방식이 서로를 다치지 않게 하는지 명확한 관계 조율 지침을 제시합니다.
            </p>

            <div className="pt-6 border-t border-[#935C6B]/30">
              <p className="text-lg md:text-2xl font-elegant font-bold text-[#D8BB94] break-keep">
                &ldquo;사랑의 크기를 확인하기 전에, 충돌의 구조부터 읽어라.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
