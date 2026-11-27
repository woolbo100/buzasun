'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Reveal from '@/components/Reveal'
import { Sparkles, BookOpen, Compass } from 'lucide-react'

export default function ClosingCtaSection() {
  return (
    <section className="py-16 md:py-28 px-4 sm:px-6 lg:px-8 relative w-full">
      <div className="max-w-[1280px] mx-auto w-full">
        {/* 기존 브랜드 엔딩 카피 (1280px 기준선 정렬) */}
        <Reveal delayMs={100}>
          <div className="w-full text-center mb-16">
            <div className="gungjung-glass w-full p-8 sm:p-10 border border-[rgba(216,191,163,0.18)]">
              <p className="text-[18px] leading-[1.7] text-[#EDE6DA] opacity-70 font-light break-keep">
                백도화는 당신의 선천 코드를 해석하고,<br className="hidden sm:inline" />{' '}
                관계와 삶의 구조를 설계하는 전문 시스템입니다.
              </p>
            </div>
          </div>
        </Reveal>

        {/* =========================================================================
            [신규 최종 CTA 상단 이미지] 16:9 와이드 배너 (1280px 기준선 정렬, 라운딩 16px)
            이전 영역과 64px(상단 mb-16과 연계), 하단 CTA 카드와 40px(mb-10) 여백
            ========================================================================= */}
        <div className="w-full mb-10">
          <Reveal delayMs={150}>
            <div className="relative w-full aspect-[16/9] rounded-[16px] overflow-hidden">
              <Image
                src="/image/baekdohwa-destiny-guide.webp"
                alt="백도화 데스티니 가이드"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
            </div>
          </Reveal>
        </div>

        {/* 최종 클로징 및 3대 CTA 카드 (1280px 기준선 정렬) */}
        <Reveal delayMs={200}>
          <div className="gungjung-glass w-full p-10 sm:p-16 text-center border border-[rgba(216,191,163,0.25)]">
            {/* 1. 메인 헤드카피 (36px, 앤티크 샴페인 골드, PC 2줄 구성, 여유 있는 간격) */}
            <h2 
              className="text-2xl sm:text-3xl md:text-[36px] font-elegant font-bold text-[var(--accent-gold)] mb-8 break-keep text-center"
              style={{ lineHeight: 1.8, letterSpacing: '0.04em' }}
            >
              당신은 고쳐야 할 부족한 존재가 아닙니다.<br className="hidden md:inline" />{' '}
              다만, 아직 당신만의 사용설명서를 읽지 못했을 뿐입니다.
            </h2>

            {/* 2. 서브 본문 (18px, 줄간격 1.7, 문장 간격 16px, 최대 너비 1000px, 헤드카피와의 간격 32px) */}
            <div className="space-y-4 text-[18px] text-[#EDE6DA] opacity-85 leading-[1.7] font-light max-w-[1000px] mx-auto break-keep text-center">
              <p>
                이제 타인의 시선과 정해진 운명론에서 벗어나, 가장 품격 있는 나로 정렬할 시간입니다.
              </p>
              <p>
                반복되는 사랑과 결핍의 패턴을 끊고, 당신만의 기준으로 새로운 판을 여십시오.
              </p>
            </div>

            {/* 3 & 4. 3대 CTA 버튼 (동일 너비 260px, 최소 높이 64px, 텍스트 16px nowrap, 간격 16px, 본문과의 간격 40px) */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full mt-10">
              {/* 1. 나의 선천코드 확인하기 (메인 강조형) */}
              <Link
                href="/reports/baekdohwa-report"
                className="group relative w-full md:w-[260px] min-h-[64px] inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-[16px] font-elegant font-semibold text-[#1A0F2E] bg-gradient-to-r from-[#EBD5CD] via-[#D4B2A7] to-[#BA8D7E] shadow-[0_8px_20px_rgba(212,178,167,0.25)] hover:shadow-[0_10px_28px_rgba(212,178,167,0.4)] hover:scale-[1.02] transition-all duration-300 whitespace-nowrap"
              >
                <Sparkles size={18} className="text-[#1A0F2E] shrink-0" />
                <span className="whitespace-nowrap">나의 선천코드 확인하기</span>
              </Link>

              {/* 2. 백도화 비첩 열람하기 (테두리형) */}
              <Link
                href="/reports/love-secret"
                className="group relative w-full md:w-[260px] min-h-[64px] inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-[16px] font-elegant font-medium text-[#EDE6DA] bg-[rgba(255,255,255,0.04)] border border-[rgba(216,191,163,0.3)] hover:border-[var(--accent-gold)] hover:text-[var(--accent-gold)] hover:bg-[rgba(255,255,255,0.08)] transition-all duration-300 whitespace-nowrap"
              >
                <BookOpen size={18} className="text-[var(--accent-gold)] shrink-0" />
                <span className="whitespace-nowrap">백도화 비첩 열람하기</span>
              </Link>

              {/* 3. 맞춤 리포트 신청하기 (테두리형) */}
              <Link
                href="/reports"
                className="group relative w-full md:w-[260px] min-h-[64px] inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-[16px] font-elegant font-medium text-[#EDE6DA] bg-[rgba(255,255,255,0.04)] border border-[rgba(216,191,163,0.3)] hover:border-[var(--accent-gold)] hover:text-[var(--accent-gold)] hover:bg-[rgba(255,255,255,0.08)] transition-all duration-300 whitespace-nowrap"
              >
                <Compass size={18} className="text-[var(--accent-gold)] shrink-0" />
                <span className="whitespace-nowrap">맞춤 리포트 신청하기</span>
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
