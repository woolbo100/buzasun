'use client'

import Reveal from '@/components/Reveal'
import Image from 'next/image'
import { wealthAudienceData } from './data'
import { Check, X } from 'lucide-react'

export default function WealthAudience() {
  return (
    <section className="mb-40">
      <Reveal>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-[12px] font-bold tracking-[0.25em] bg-[#8FD3B6]/10 border border-[#8FD3B6]/30 text-[#8FD3B6] uppercase mb-6">
            TARGET AUDIENCE
          </span>
          <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white mb-6 leading-[1.25] md:leading-[1.3] break-keep">
            당신을 위한 <span className="text-[#8FD3B6]">풍요 리포트</span>인가요?
          </h2>
          <p className="text-[16px] md:text-[18px] text-[#EDE6DA] opacity-75 font-light break-keep">
            솔직하고 명확한 안내를 통해 진정한 경제적 자기 이해를 전해드립니다.
          </p>
        </div>

        {/* 상단: 기존 a3.webp 이미지와 추천/비추천 대상의 조화로운 배치 */}
        <div className="grid lg:grid-cols-12 gap-10 items-center max-w-6xl mx-auto mb-16">
          <div className="lg:col-span-5 relative group">
            <div className="absolute -inset-4 bg-[#8FD3B6]/10 blur-[40px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <Image
              src="/image/abundance/a3.webp"
              alt="선천코드 풍요 리포트 추천 대상 이미지"
              width={600}
              height={900}
              className="relative z-10 w-full h-auto rounded-[40px] shadow-2xl border border-[#8FD3B6]/20 transition-transform duration-700 group-hover:scale-[1.02]"
            />
          </div>

          <div className="lg:col-span-7 space-y-6">
            {/* 추천하는 분 카드 */}
            <div className="gungjung-glass p-8 md:p-10 rounded-[32px] border border-[#8FD3B6]/40 bg-gradient-to-b from-[#0f241f]/50 via-[#152e27]/30 to-black/40">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-[#8FD3B6]/20 border border-[#8FD3B6] flex items-center justify-center text-[#8FD3B6]">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <h3 className="text-[20px] md:text-[24px] font-bold text-white leading-snug break-keep">
                  {wealthAudienceData.recommended.title}
                </h3>
              </div>
              <ul className="space-y-3.5">
                {wealthAudienceData.recommended.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3.5 text-sm md:text-base text-[#EDE6DA]/90 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8FD3B6] mt-2 shrink-0"></span>
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
                  {wealthAudienceData.notRecommended.title}
                </h3>
              </div>
              <ul className="space-y-3.5">
                {wealthAudienceData.notRecommended.items.map((item, idx) => (
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
