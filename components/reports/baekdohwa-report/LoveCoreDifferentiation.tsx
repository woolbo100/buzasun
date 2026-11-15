'use client'

import Reveal from '@/components/Reveal'
import Image from 'next/image'
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
          <span className="block font-elegant text-[12pt] font-semibold tracking-[0.2em] text-[#D9A8A7] uppercase mb-4">
            ROOT CAUSE ANALYSIS
          </span>
          <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white mb-6 leading-[1.25] md:leading-[1.3] break-keep">
            &ldquo;사람을 바꾸는 것만으로는,<br className="sm:hidden" />
            <span className="gradient-text-love"> 같은 연애가 끝나지 않는다.</span>&rdquo;
          </h2>
          <p className="text-[18px] text-[#EDE6DA] opacity-80 font-light leading-relaxed max-w-2xl mx-auto break-keep">
            새로운 사람을 만나도 몇 달 뒤 똑같은 외로움과 불안을 겪고 있다면,<br className="hidden sm:inline" />
            이제는 바깥이 아니라 <span className="text-[#E6BFA9] font-medium">내 안의 사랑의 작동 방식</span>을 들여다봐야 합니다.
          </p>
        </div>

        {/* ROOT CAUSE 16:9 미로 비주얼 */}
        <div className="relative w-full max-w-[1280px] mx-auto mb-16 rounded-[40px] overflow-hidden border border-white/10 shadow-2xl group aspect-[16/9] bg-[#130917]">
          <Image 
            src="/image/lovereport/love-pattern-maze.webp" 
            alt="사랑의 반복 패턴 미로" 
            width={1671}
            height={941}
            className="w-full h-full object-cover transition-transform duration-[10000ms] group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0514]/40 via-transparent to-transparent pointer-events-none"></div>
        </div>

        {/* 3대 날카로운 질문 카드 */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {painQuestions.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="gungjung-glass p-8 rounded-[28px] border border-[#B7788D]/25 bg-gradient-to-b from-[#2D0A1E]/20 to-[#1A0514]/35 hover:border-[#B7788D]/60 transition-all duration-300 flex flex-col justify-between"
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
      </Reveal>
    </section>
  )
}
