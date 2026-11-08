'use client'

import Reveal from '@/components/Reveal'
import Image from 'next/image'
import { compatibilityAudienceData } from './data'
import { Check, X } from 'lucide-react'

export default function CompatibilityRecommendedAudience() {
  return (
    <section className="mb-40">
      <Reveal>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.25em] bg-[var(--accent-gold)]/10 border border-[var(--accent-gold)]/20 text-[var(--accent-gold-light)] uppercase mb-6">
            TARGET COUPLES
          </span>
          <h2 className="text-3xl md:text-5xl font-elegant font-bold text-white mb-6 leading-tight">
            두 분을 위한 <span className="text-[var(--accent-gold)]">리포트인가요?</span>
          </h2>
          <p className="text-lg md:text-xl text-[#EDE6DA] opacity-75 font-light">
            진솔한 안내를 통해 두 사람의 인연에 가장 깊은 울림을 전해드립니다.
          </p>
        </div>

        {/* 상단: 기존 p3.webp 이미지와 추천/비추천 대상의 조화로운 배치 */}
        <div className="grid lg:grid-cols-12 gap-10 items-center max-w-6xl mx-auto mb-16">
          <div className="lg:col-span-5 relative group">
            <div className="absolute -inset-4 bg-[var(--accent-gold)]/10 blur-[40px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <Image
              src="/image/compatibility/p3.webp"
              alt="Recommended Couples"
              width={600}
              height={900}
              className="relative z-10 w-full h-auto rounded-[40px] shadow-2xl border border-white/10 transition-transform duration-700 group-hover:scale-[1.02]"
            />
          </div>

          <div className="lg:col-span-7 space-y-6">
            {/* 추천하는 분 카드 */}
            <div className="gungjung-glass p-8 md:p-10 rounded-[32px] border border-[var(--accent-gold)]/40 bg-gradient-to-b from-[#3B0F1B]/30 via-[#2D0A1E]/30 to-black/40">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-[var(--accent-gold)]/20 border border-[var(--accent-gold)] flex items-center justify-center text-[var(--accent-gold)]">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {compatibilityAudienceData.recommended.title}
                </h3>
              </div>
              <ul className="space-y-3.5">
                {compatibilityAudienceData.recommended.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3.5 text-sm md:text-base text-[#EDE6DA]/90 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-gold)] mt-2 shrink-0"></span>
                    <span className="break-keep">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 이런 기대에는 맞지 않습니다 카드 */}
            <div className="gungjung-glass p-8 md:p-10 rounded-[32px] border border-white/10 bg-white/[0.02]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white/60">
                  <X className="w-4 h-4 stroke-[2.5]" />
                </div>
                <h3 className="text-2xl font-bold text-white/90">
                  {compatibilityAudienceData.notRecommended.title}
                </h3>
              </div>
              <ul className="space-y-3.5">
                {compatibilityAudienceData.notRecommended.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3.5 text-sm md:text-base text-[#EDE6DA]/60 font-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/30 mt-2 shrink-0"></span>
                    <span className="break-keep">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
