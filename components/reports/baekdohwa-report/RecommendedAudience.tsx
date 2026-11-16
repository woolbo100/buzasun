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
          <span className="block font-elegant text-[12pt] font-semibold tracking-[0.2em] text-[#D9A8A7] uppercase mb-4">
            TARGET AUDIENCE
          </span>
          <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white mb-6 leading-[1.25] md:leading-[1.3] break-keep">
            당신을 위한 <span className="text-[#D9A8A7]">리포트인가요?</span>
          </h2>
          <p className="text-[18px] text-[#EDE6DA] opacity-75 font-light break-keep">
            솔직하고 명확한 안내를 통해 최상의 통찰을 전해드립니다.
          </p>
        </div>

        {/* 데스크톱 기준 좌우 2단 레이아웃 (왼쪽 이미지 42% : 오른쪽 설명 58%) */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start max-w-7xl mx-auto mb-16">
          {/* 데스크톱 왼쪽 이미지 (3:4 세로형, 상단 오른쪽 첫 번째 제목과 자연스럽게 정렬) */}
          <div className="hidden lg:block lg:col-span-5 relative group">
            <div className="relative aspect-[3/4] w-full rounded-[32px] md:rounded-[40px] overflow-hidden border border-white/10 shadow-2xl bg-[#130917]">
              <Image
                src="/image/lovereport/discover%20your%20love%20code.webp"
                alt="선천코드 연애 리포트 추천 대상"
                width={1086}
                height={1448}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>
          </div>

          {/* 오른쪽: '이런 분께 추천합니다' 및 '이런 기대에는 맞지 않습니다' 영역 */}
          <div className="lg:col-span-7 space-y-6">
            {/* 추천하는 분 카드 */}
            <div className="gungjung-glass p-8 md:p-10 rounded-[32px] border border-[#B7788D]/40 bg-gradient-to-b from-[var(--accent-gold)]/10 via-purple-950/20 to-black/30">
              {/* 1. '이런 분께 추천합니다' 제목 */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-[#B7788D]/20 border border-[#B7788D] flex items-center justify-center text-[#D9A8A7]">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <h3 className="text-[20px] md:text-[24px] font-bold text-white leading-snug break-keep">
                  {targetAudienceData.recommended.title}
                </h3>
              </div>

              {/* 2. 모바일 전용 신규 이미지 (모바일 표시 순서: 1.제목 -> 2.신규 이미지 -> 3.체크리스트) */}
              <div className="lg:hidden mb-6 rounded-[24px] overflow-hidden border border-white/10 shadow-xl aspect-[3/4] w-full relative bg-[#130917]">
                <Image
                  src="/image/lovereport/discover%20your%20love%20code.webp"
                  alt="선천코드 연애 리포트 추천 대상"
                  width={1086}
                  height={1448}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* 3. 기존 추천 대상 체크리스트 */}
              <ul className="space-y-3.5">
                {targetAudienceData.recommended.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3.5 text-sm md:text-base text-[#EDE6DA]/90 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B7788D] mt-2 shrink-0"></span>
                    <span className="break-keep">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 4. '이런 기대에는 맞지 않습니다' 제목 및 설명 */}
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
