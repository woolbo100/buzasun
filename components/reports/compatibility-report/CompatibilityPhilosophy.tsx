'use client'

import Reveal from '@/components/Reveal'
import { compatibilityPhilosophyData } from './data'

export default function CompatibilityPhilosophy() {
  return (
    <section className="mb-40">
      <Reveal>
        <div className="max-w-4xl mx-auto">
          {/* 서신(Letter) 형태의 고급스러운 궁중 한지/글라스 카드 */}
          <div className="gungjung-glass p-10 md:p-16 rounded-[36px] border border-[#935C6B]/40 bg-gradient-to-b from-[#2D0A1E]/80 via-[#1A0514]/90 to-[#0A0514]/95 relative overflow-hidden shadow-2xl">
            {/* 배경 은은한 청동 인장 장식 */}
            <div className="absolute top-8 right-8 w-24 h-24 border-2 border-[#935C6B]/30 rounded-2xl flex items-center justify-center rotate-6 pointer-events-none opacity-40">
              <span className="text-xs font-elegant font-bold text-[#D8BB94] tracking-widest text-center">
                白桃花<br />宮合
              </span>
            </div>

            <div className="text-center mb-10">
              <span className="inline-block px-4 py-1.5 rounded-full text-[12px] font-bold tracking-[0.25em] bg-[#663244]/20 border border-[#935C6B]/40 text-[#D8BB94] uppercase mb-6">
                PHILOSOPHY OF HARMONY
              </span>
              <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white leading-[1.25] md:leading-[1.3] break-keep whitespace-pre-line">
                {compatibilityPhilosophyData.title}
              </h2>
            </div>

            <div className="max-w-2xl mx-auto space-y-6 text-center text-[#EDE6DA] text-[16px] md:text-[18px] leading-relaxed font-light break-keep whitespace-pre-line">
              {compatibilityPhilosophyData.letter}
            </div>

            <div className="mt-12 pt-8 border-t border-[#935C6B]/30 text-center">
              <span className="text-xs tracking-[0.3em] uppercase text-[#C19B83]/70 font-mono">
                BAEKDOHWA RELATIONSHIP INSTITUTE
              </span>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
