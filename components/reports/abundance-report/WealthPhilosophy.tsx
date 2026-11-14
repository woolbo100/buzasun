'use client'

import Reveal from '@/components/Reveal'
import { wealthPhilosophyData } from './data'

export default function WealthPhilosophy() {
  return (
    <section className="mb-40">
      <Reveal>
        <div className="max-w-4xl mx-auto">
          {/* 서신(Letter) 형태의 고급스러운 궁중 한지/글라스 카드 */}
          <div className="gungjung-glass point-box p-10 md:p-16 rounded-[36px] border border-[#608F82]/30 bg-gradient-to-b from-[#0f241f]/35 via-[#152e27]/20 to-[#0a0514]/35 relative overflow-hidden shadow-2xl">
            {/* 배경 은은한 옥빛 인장 장식 */}
            <div className="absolute top-8 right-8 w-24 h-24 border-2 border-[#608F82]/25 rounded-2xl flex items-center justify-center rotate-6 pointer-events-none opacity-40">
              <span className="text-xs font-elegant font-bold text-[#8FB4A4] tracking-widest text-center">
                白桃花<br />豊饒
              </span>
            </div>

            <div className="text-center mb-10">
              <span className="block text-[12px] font-semibold tracking-[0.2em] text-[#8FB4A4] uppercase mb-4">
                PHILOSOPHY OF ABUNDANCE
              </span>
              <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white leading-[1.25] md:leading-[1.3] break-keep whitespace-pre-line">
                {wealthPhilosophyData.title}
              </h2>
            </div>

            <div className="max-w-2xl mx-auto space-y-6 text-center text-[#EDE6DA] text-[16px] md:text-[18px] leading-relaxed font-light break-keep whitespace-pre-line">
              {wealthPhilosophyData.letter}
            </div>

            <div className="mt-12 pt-8 border-t border-[#608F82]/25 text-center">
              <span className="text-xs tracking-[0.3em] uppercase text-[#E6BE8A]/80 font-mono">
                BAEKDOHWA ABUNDANCE INSTITUTE
              </span>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
