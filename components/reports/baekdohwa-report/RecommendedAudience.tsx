'use client'

import Reveal from '@/components/Reveal'
import Image from 'next/image'
import { targetAudienceData } from './data'
import { Check, X } from 'lucide-react'

export default function RecommendedAudience() {
  return (
    <section className="mb-40">
      <Reveal>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="block text-[12px] font-semibold tracking-[0.2em] text-[#D9A8A7] uppercase mb-4">
            TARGET AUDIENCE
          </span>
          <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white mb-6 leading-[1.25] md:leading-[1.3] break-keep">
            당신을 위한 <span className="text-[#D9A8A7]">리포트인가요?</span>
          </h2>
          <p className="text-[16px] md:text-[18px] text-[#EDE6DA] opacity-75 font-light break-keep">
            솔직하고 명확한 안내를 통해 최상의 통찰을 전해드립니다.
          </p>
        </div>

        {/* 상단: 기존 p3.webp 이미지와 추천 대상의 조화로운 배치 */}
        <div className="grid lg:grid-cols-12 gap-10 items-center max-w-7xl mx-auto mb-16">
          <div className="lg:col-span-5 relative group">
            <div className="absolute -inset-4 bg-[#B7788D]/15 blur-[40px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <Image
              src="/image/lovereport/p3.webp"
              alt="Recommended Audience"
              width={600}
              height={900}
              className="relative z-10 w-full h-auto rounded-[40px] shadow-2xl border border-white/10 transition-transform duration-700 group-hover:scale-[1.02]"
            />
          </div>

          <div className="lg:col-span-7 space-y-6">
            {/* 추천하는 분 카드 */}
            <div className="gungjung-glass p-8 md:p-10 rounded-[32px] border border-[#B7788D]/40 bg-gradient-to-b from-[var(--accent-gold)]/10 via-purple-950/20 to-black/30">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-[#B7788D]/20 border border-[#B7788D] flex items-center justify-center text-[#D9A8A7]">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <h3 className="text-[20px] md:text-[24px] font-bold text-white leading-snug break-keep">
                  {targetAudienceData.recommended.title}
                </h3>
              </div>
              <ul className="space-y-3.5">
                {targetAudienceData.recommended.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3.5 text-sm md:text-base text-[#EDE6DA]/90 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B7788D] mt-2 shrink-0"></span>
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
                <h3 className="text-[20px] md:text-[24px] font-bold text-white/90 leading-snug break-keep">
                  {targetAudienceData.notRecommended.title}
                </h3>
              </div>
              <ul className="space-y-3.5">
                {targetAudienceData.notRecommended.items.map((item, idx) => (
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
