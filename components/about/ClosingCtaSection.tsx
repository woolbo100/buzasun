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
        {/* =========================================================================
            [신규 섹션 헤더] 라벨 · 메인 제목 · 설명 문구 (페이지 배경 위 직접 배치)
            ========================================================================= */}
        {/* 1. 라벨 */}
        <Reveal delayMs={100}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-[1px] w-8 bg-[var(--accent-gold)] opacity-40" />
            <span className="text-[12pt] font-elegant font-semibold tracking-[0.25em] text-[var(--accent-gold)] uppercase opacity-90">
              PRIVATE ARCHIVE
            </span>
            <span className="h-[1px] w-8 bg-[var(--accent-gold)] opacity-40" />
          </div>
        </Reveal>

        {/* 2 & 3. 메인 제목 및 설명 문구 (이미지와 40px 여백) */}
        <Reveal delayMs={150}>
          <div className="text-center mb-10 max-w-4xl mx-auto">
            <h2 className="about-heading text-2xl sm:text-4xl md:text-5xl font-elegant font-bold text-[#F5F5F5] mb-6 text-center leading-[1.4] break-keep">
              당신은 고쳐야 할 부족한 존재가 아닙니다.<br />
              <span className="text-[var(--accent-gold)]">
                다만, 아직 당신만의 사용설명서를 읽지 못했을 뿐입니다.
              </span>
            </h2>
            <div className="text-[18px] leading-[1.7] text-[#EDE6DA] opacity-85 font-light break-keep text-center max-w-[1000px] mx-auto">
              <p>
                타고난 기질을 이해하고, 반복되는 무의식의 패턴을 발견하는 순간,<br className="hidden md:inline" /> 비로소 타인의 기준이 아닌 자신만의 기준으로 삶을 바라볼 수 있습니다.
              </p>
            </div>
          </div>
        </Reveal>

        {/* =========================================================================
            [기존 가로형 이미지] 16:9 와이드 배너 (1280px 기준선 정렬, 라운딩 16px)
            상단 설명문과 40px(mb-10), 하단 CTA 카드와 40px(mb-10) 여백
            ========================================================================= */}
        <div className="w-full mb-10">
          <Reveal delayMs={200}>
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
        <Reveal delayMs={250}>
          <div className="gungjung-glass w-full p-10 sm:p-16 text-center border border-[rgba(216,191,163,0.25)]">
            {/* 영문 라벨 */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="h-[1px] w-8 bg-[var(--accent-gold)] opacity-40" />
              <span className="text-[12pt] font-elegant font-semibold tracking-[0.25em] text-[var(--accent-gold)] uppercase opacity-90">
                YOUR DESTINY, YOUR CHOICE
              </span>
              <span className="h-[1px] w-8 bg-[var(--accent-gold)] opacity-40" />
            </div>

            {/* 1. 메인 헤드카피 (36px, PC 2줄 구성, 공통 line-height: 1.4 적용) */}
            <h2 
              className="about-heading text-2xl sm:text-3xl md:text-[36px] font-elegant font-bold text-[#F5F5F5] mb-6 text-center leading-[1.4] break-keep"
            >
              더 이상 운명에 답을 구하지 마십시오.<br />
              <span className="text-[var(--accent-gold)]">
                이제, 당신이 운명의 답이 될 차례입니다.
              </span>
            </h2>

            {/* 2. 서브 본문 (18px, 줄간격 1.7) */}
            <div className="text-[18px] text-[#EDE6DA] opacity-85 leading-[1.7] font-light max-w-[1000px] mx-auto break-keep text-center">
              <p>
                해석은 백도화의 몫, 선택은 언제나 당신의 몫.
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
