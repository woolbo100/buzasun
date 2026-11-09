'use client'

import Reveal from '@/components/Reveal'
import { AlertCircle, ShieldAlert, HeartCrack, CheckCircle2 } from 'lucide-react'

export default function LoveCoreDifferentiation() {
  const painQuestions = [
    {
      icon: HeartCrack,
      question: "왜 나를 불안하게 만드는 사람에게 유독 끌릴까?",
      desc: "안정적인 사람 앞에서는 지루함을 느끼고, 감정을 쥐락펴락하는 사람 앞에서 심장이 뛰는 이유"
    },
    {
      icon: ShieldAlert,
      question: "왜 사랑받고 싶을수록 내 기준을 먼저 내려놓을까?",
      desc: "상대의 기분을 살피느라 내 요구를 삼키고, 결국 관계의 주도권을 통째로 넘겨주는 패턴"
    },
    {
      icon: AlertCircle,
      question: "왜 서운함을 참다가 결국 관계를 무너뜨리는 말을 쏟아낼까?",
      desc: "혼자 참아내다 감정의 한계에 부딪혀, 가장 원치 않던 방식으로 폭발하고 마는 악순환"
    }
  ]

  return (
    <section className="mb-40">
      <Reveal>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-[12px] font-bold tracking-[0.25em] bg-[#B7788D]/15 border border-[#B7788D]/35 text-[#D9A8A7] uppercase mb-6">
            ROOT CAUSE ANALYSIS
          </span>
          <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white mb-6 leading-[1.25] md:leading-[1.3] break-keep">
            &ldquo;사람을 바꾸는 것만으로는,<br className="sm:hidden" />
            <span className="gradient-text-love"> 같은 연애가 끝나지 않는다.</span>&rdquo;
          </h2>
          <p className="text-[16px] md:text-[18px] text-[#EDE6DA] opacity-80 font-light leading-relaxed max-w-2xl mx-auto break-keep">
            새로운 사람을 만나도 몇 달 뒤 똑같은 외로움과 불안을 겪고 있다면,<br className="hidden sm:inline" />
            이제는 바깥이 아니라 <span className="text-[#E6BFA9] font-medium">내 안의 사랑의 작동 방식</span>을 들여다봐야 합니다.
          </p>
        </div>

        {/* 3대 날카로운 질문 카드 */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {painQuestions.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="gungjung-glass p-8 rounded-[28px] border border-[#B7788D]/25 bg-gradient-to-b from-[#2D0A1E]/30 to-[#1A0514]/60 hover:border-[#B7788D]/60 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#B7788D]/15 border border-[#B7788D]/35 flex items-center justify-center text-[#D9A8A7] mb-6">
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

        {/* 본문 설명 및 백도화 연애 리포트 정의 */}
        <div className="max-w-7xl mx-auto gungjung-glass p-8 md:p-12 rounded-[32px] border border-[#B7788D]/35 bg-gradient-to-r from-[#1A0514]/90 via-[#2D0A1E]/40 to-[#0A0514]/90 text-center relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-6">
            <p className="text-base md:text-lg text-[#EDE6DA] leading-relaxed font-light break-keep">
              당신에게 필요한 것은 또 하나의 가벼운 연애운 풀이가 아닐 수 있습니다.
            </p>
            <p className="text-lg md:text-xl text-white font-elegant font-bold break-keep">
              &ldquo;내가 누구에게 끌리고, 어떤 순간에 무너지며,<br className="hidden sm:inline" />
              왜 같은 선택을 반복하는지 읽어내는 일.&rdquo;
            </p>
            <p className="text-sm md:text-base text-[#EDE6DA]/80 leading-relaxed font-light break-keep">
              선천코드 연애 리포트는 타고난 기질을 바탕으로 당신의 관계 반복 패턴을 정밀하게 탐색하고,<br className="hidden sm:inline" />
              스스로 지켜야 할 관계의 기준과 실천할 수 있는 행동 방향을 명확하게 제시합니다.
            </p>

            <div className="pt-6 border-t border-[#B7788D]/25">
              <p className="text-lg md:text-2xl font-elegant font-bold text-[#E6BFA9] break-keep">
                &ldquo;다음 연애까지 똑같은 상처를 반복할 필요는 없습니다.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
