'use client'

import Reveal from '@/components/Reveal'
import Image from 'next/image'
import { AlertCircle, ShieldAlert, HeartCrack, CheckCircle2 } from 'lucide-react'

export default function LoveCoreDifferentiation() {
  const painQuestions = [
    {
      icon: HeartCrack,
      question: "나는 왜 비슷한 사람한테 끌릴까?",
      desc: "상대를 바꾸면 다를 줄 알았지만, 결국 내 안의 결핍이 이끄는 똑같은 유형의 사람에게 또다시 마음을 빼앗기는 이유"
    },
    {
      icon: ShieldAlert,
      question: "사람을 바꿔도, 왜 늘 똑같은 결말의 상처만 반복될까?",
      desc: "이별의 모양결도, 아픔의 크기도 신기할 정도로 닮아 있는 이유는 내 안의 반복되는 연애 알고리즘 때문"
    },
    {
      icon: AlertCircle,
      question: "왜 내 연애는 항상 똑같은 미로 속을 맴돌다 끝날까?",
      desc: "내 설계도를 해독하지 못한 채, 매번 정해진 쳇바퀴를 돌며 지쳐가는 관계의 구조에서 벗어나지 못하는 이유"
    }
  ]

  return (
    <section className="mb-40">
      <Reveal>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="block font-elegant text-[12pt] font-semibold tracking-[0.2em] text-[#D9A8A7] uppercase mb-4">
            ROOT CAUSE ANALYSIS
          </span>
          <h2 className="font-elegant font-bold text-center mb-6 leading-[1.35] md:leading-[1.4] break-keep text-[22px] sm:text-2xl md:text-[36px]">
            <span className="text-[#FAF7F2]">
              &ldquo;사람을 바꾸는 것만으로는,
            </span>
            <br />
            <span className="gradient-text-love">
              같은 연애가 끝나지 않는다.&rdquo;
            </span>
          </h2>
          <p className="text-[18px] text-[#EDE6DA] opacity-80 font-light leading-relaxed max-w-2xl mx-auto break-keep">
            새로운 사람을 만나도 몇 달 뒤 똑같은 외로움과 불안을 겪고 있다면,<br className="hidden sm:inline" />
            이제는 바깥이 아니라 <span className="text-[#E6BFA9] font-medium">내 안의 사랑의 작동 방식</span>을 들여다봐야 합니다.
          </p>
        </div>

        {/* ROOT CAUSE 16:9 나침반 비주얼 (the compass of repetition.webp) */}
        <div className="relative w-full max-w-[1280px] mx-auto mb-16 rounded-[40px] overflow-hidden border border-white/10 shadow-2xl group aspect-[16/9] bg-[#130917]">
          <Image 
            src="/image/lovereport/the%20compass%20of%20repetition.webp" 
            alt="사랑의 반복 패턴 나침반" 
            width={1672}
            height={941}
            className="w-full h-full object-contain transition-transform duration-[10000ms] group-hover:scale-105"
            priority
          />
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
