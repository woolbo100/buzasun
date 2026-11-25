'use client'

import React from 'react'
import Link from 'next/link'
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
              <p className="text-base sm:text-lg md:text-xl leading-relaxed text-[#EDE6DA] opacity-70 font-light">
                백도화는 당신의 선천 코드를 해석하고,<br className="hidden sm:inline" />{' '}
                관계와 삶의 구조를 설계하는 전문 시스템입니다.
              </p>
            </div>
          </div>
        </Reveal>

        {/* 최종 클로징 및 3대 CTA 카드 (1280px 기준선 정렬) */}
        <Reveal delayMs={200}>
          <div className="gungjung-glass w-full p-10 sm:p-16 text-center border border-[rgba(216,191,163,0.25)]">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-elegant font-bold text-[var(--accent-gold)] mb-6 leading-snug">
              나를 읽고, 사랑의 방향을 다시 쓰다.
            </h2>

            <div className="space-y-3 text-base sm:text-lg text-[#EDE6DA] opacity-85 leading-relaxed font-light mb-10">
              <p>
                타고난 나를 이해하고,<br className="sm:hidden" />{' '}
                반복되는 삶의 패턴을 돌아보며,<br />
                스스로 선택하는 새로운 삶.
              </p>
              <p className="text-sm sm:text-base text-[var(--accent-gold-light)] font-normal pt-2">
                백도화와 함께 자기이해의 여정을 시작하세요.
              </p>
            </div>

            {/* 3대 CTA 버튼 (실제 존재하는 유효 경로) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
              {/* 1. 나의 선천코드 알아보기 */}
              <Link
                href="/reports/baekdohwa-report"
                className="group relative inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-elegant font-semibold text-[#1A0F2E] bg-gradient-to-r from-[#EBD5CD] via-[#D4B2A7] to-[#BA8D7E] shadow-[0_8px_20px_rgba(212,178,167,0.25)] hover:shadow-[0_10px_28px_rgba(212,178,167,0.4)] hover:scale-[1.02] transition-all duration-300"
              >
                <Sparkles size={16} className="text-[#1A0F2E]" />
                <span>나의 선천코드 알아보기</span>
              </Link>

              {/* 2. 백도화 비급 살펴보기 */}
              <Link
                href="/reports/love-secret"
                className="group relative inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-elegant font-medium text-[#EDE6DA] bg-[rgba(255,255,255,0.04)] border border-[rgba(216,191,163,0.3)] hover:border-[var(--accent-gold)] hover:text-[var(--accent-gold)] hover:bg-[rgba(255,255,255,0.08)] transition-all duration-300"
              >
                <BookOpen size={16} className="text-[var(--accent-gold)]" />
                <span>백도화 비급 살펴보기</span>
              </Link>

              {/* 3. 맞춤 리포트 살펴보기 */}
              <Link
                href="/reports"
                className="group relative inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-elegant font-medium text-[#EDE6DA] bg-[rgba(255,255,255,0.04)] border border-[rgba(216,191,163,0.3)] hover:border-[var(--accent-gold)] hover:text-[var(--accent-gold)] hover:bg-[rgba(255,255,255,0.08)] transition-all duration-300"
              >
                <Compass size={16} className="text-[var(--accent-gold)]" />
                <span>맞춤 리포트 살펴보기</span>
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
