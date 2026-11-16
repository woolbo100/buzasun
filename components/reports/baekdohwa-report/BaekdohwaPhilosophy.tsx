'use client'

import Reveal from '@/components/Reveal'
import { philosophyData } from './data'

export default function BaekdohwaPhilosophy() {
  return (
    <section className="mb-40">
      <Reveal>
        <div className="max-w-4xl mx-auto">
          {/* 서신(Letter) 형태의 고급스러운 궁중 한지/글라스 카드 */}
          <div className="gungjung-glass point-box p-10 md:p-16 rounded-[36px] border border-[#B7788D]/30 bg-gradient-to-b from-[#1A0514]/35 via-[#2D0A1E]/20 to-[#0A0514]/35 relative overflow-hidden shadow-2xl">
            {/* 배경 은은한 인장 무늬 장식 */}
            <div className="absolute top-8 right-8 w-24 h-24 border-2 border-[#B7788D]/25 rounded-2xl flex items-center justify-center rotate-6 pointer-events-none opacity-40">
              <span className="text-xs font-elegant font-bold text-[#D9A8A7] tracking-widest text-center">
                白桃花<br />秘策
              </span>
            </div>

            <div className="text-center mb-10">
              <span className="block font-elegant text-[12pt] font-semibold tracking-[0.2em] text-[#D9A8A7] uppercase mb-4">
                OUR PHILOSOPHY
              </span>
              <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white leading-[1.25] md:leading-[1.3] break-keep whitespace-pre-line">
                {philosophyData.title}
              </h2>
            </div>

            <div className="max-w-2xl mx-auto space-y-6 text-center text-[#EDE6DA] text-[18px] leading-relaxed font-light break-keep whitespace-pre-line">
              {philosophyData.letter}
            </div>

            {/* 작은 독립 영역: 분석가 소개 (ABOUT THE ANALYST) */}
            <div className="mt-14 pt-10 border-t border-[#B7788D]/25">
              <div className="max-w-2xl mx-auto p-6 md:p-8 rounded-2xl bg-[#190E1E]/60 border border-[#B7788D]/30 backdrop-blur-sm text-left">
                <span className="block font-elegant text-xs font-semibold tracking-[0.2em] text-[#D9A8A7] uppercase mb-2">
                  ABOUT THE ANALYST
                </span>
                <h3 className="text-xl md:text-2xl font-elegant font-bold text-white mb-2 leading-snug">
                  사주를 읽고, 마음의 결을 함께 살핍니다.
                </h3>
                <p className="text-xs md:text-sm text-[#D9A8A7] font-medium mb-5">
                  백도화 | 선천코드 연애 리포트 기획·분석
                </p>
                <div className="space-y-3.5 text-sm md:text-base text-[#EDE6DA]/85 font-light leading-relaxed break-keep">
                  <p>
                    명리학을 공부하며 사람마다 다른 선천적 기질을 탐구하고, NLP·최면 상담과 심리적 자기 이해의 관점을 함께 익혀왔습니다.
                  </p>
                  <p>
                    백도화는 타고난 성향만을 해석하는 데 머무르지 않고, 실제 관계에서 반복되는 감정과 선택을 함께 살펴 자신만의 사랑 기준을 찾아가는 리포트를 지향합니다.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-[#B7788D]/20 text-center">
              <span className="text-xs tracking-[0.3em] uppercase text-[#D9A8A7]/70 font-mono">
                BAEKDOHWA RELATIONSHIP INSTITUTE
              </span>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
