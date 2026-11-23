'use client'

import Reveal from '@/components/Reveal'
import Image from 'next/image'
import { wealthAudienceData } from './data'
import { Check, X } from 'lucide-react'

export default function WealthAudience() {
  return (
    <section className="mb-28 md:mb-36 w-full max-w-[1280px] mx-auto">
      <Reveal className="w-full">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="block font-elegant text-[12pt] font-semibold tracking-[0.2em] text-[#8FB4A4] uppercase mb-4">
            TARGET AUDIENCE
          </span>
          <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white mb-6 leading-[1.25] md:leading-[1.3] break-keep">
            당신을 위한 <span className="gradient-text-abundance">풍요 리포트</span>인가요?
          </h2>
          <p className="text-[18px] text-[#EDE6DA] opacity-80 font-light leading-relaxed max-w-3xl mx-auto break-keep">
            남들의 방식에 지치고 흔들렸지만, 여전히 나다운 풍요를 꿈꾸는 당신에게<br className="hidden sm:inline" />{' '}
            이 리포트는 나를 이해하고 돈의 기준을 새롭게 세우는 시작점이 되어줄 수 있습니다.
          </p>
        </div>

        {/* 데스크톱 기준 좌우 2단 레이아웃 (왼쪽 이미지 5열 : 오른쪽 카드 그룹 7열, 상하 높이 일치) */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-stretch w-full max-w-[1280px] mx-auto mb-16">
          {/* 세로형 대표 이미지 (PC: 왼쪽 / 모바일: 상단 - 오른쪽 카드 그룹 높이에 상하 끝선 완벽 정렬) */}
          <div className="lg:col-span-5 relative group flex flex-col h-full">
            <div className="absolute -inset-4 bg-[#608F82]/15 blur-[40px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            <div className="relative aspect-[3/4] lg:aspect-auto lg:h-full w-full rounded-[28px] md:rounded-[36px] lg:rounded-[40px] overflow-hidden border border-[#608F82]/25 shadow-2xl bg-[#0a1a15]">
              <Image
                src="/images/abundance/baekdohwa-wealth-report-for-you.webp"
                alt="선천코드 풍요 리포트 추천 대상 이미지"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-between gap-6">
            {/* 추천하는 분 카드 */}
            <div className="gungjung-glass p-8 md:p-10 rounded-[32px] border border-[#608F82]/40 bg-gradient-to-b from-[#0f241f]/35 via-[#152e27]/25 to-black/35">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-[#608F82]/20 border border-[#608F82] flex items-center justify-center text-[#8FB4A4]">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <h3 className="text-[20px] md:text-[24px] font-bold text-white leading-snug break-keep">
                  {wealthAudienceData.recommended.title}
                </h3>
              </div>
              <ul className="space-y-3.5">
                {wealthAudienceData.recommended.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3.5 text-sm md:text-base text-[#EDE6DA]/90 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#608F82] mt-2 shrink-0"></span>
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
