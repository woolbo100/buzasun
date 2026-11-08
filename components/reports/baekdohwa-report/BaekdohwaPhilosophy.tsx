'use client'

import Reveal from '@/components/Reveal'
import { philosophyData } from './data'

export default function BaekdohwaPhilosophy() {
  return (
    <section className="mb-40">
      <Reveal>
        <div className="max-w-4xl mx-auto">
          {/* 서신(Letter) 형태의 고급스러운 궁중 한지/글라스 카드 */}
          <div className="gungjung-glass p-10 md:p-16 rounded-[36px] border border-[var(--accent-gold)]/30 bg-gradient-to-b from-[#1A0514]/90 via-[#2D0A1E]/40 to-[#0A0514]/90 relative overflow-hidden shadow-2xl">
            {/* 배경 은은한 인장 무늬 장식 */}
            <div className="absolute top-8 right-8 w-24 h-24 border-2 border-[var(--accent-gold)]/20 rounded-2xl flex items-center justify-center rotate-6 pointer-events-none opacity-40">
              <span className="text-xs font-elegant font-bold text-[var(--accent-gold)] tracking-widest text-center">
                白桃花<br />秘策
              </span>
            </div>

            <div className="text-center mb-10">
              <span className="inline-block px-4 py-1.5 rounded-full text-[12px] font-bold tracking-[0.25em] bg-[var(--accent-gold)]/10 border border-[var(--accent-gold)]/20 text-[var(--accent-gold-light)] uppercase mb-6">
                OUR PHILOSOPHY
              </span>
              <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white leading-[1.25] md:leading-[1.3] break-keep whitespace-pre-line">
                {philosophyData.title}
              </h2>
            </div>

            <div className="max-w-2xl mx-auto space-y-6 text-center text-[#EDE6DA] text-[16px] md:text-[18px] leading-relaxed font-light break-keep whitespace-pre-line">
              {philosophyData.letter}
            </div>

            <div className="mt-12 pt-8 border-t border-[var(--accent-gold)]/20 text-center">
              <span className="text-xs tracking-[0.3em] uppercase text-[var(--accent-gold-light)]/70 font-mono">
                BAEKDOHWA RELATIONSHIP INSTITUTE
              </span>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
