'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Reveal from '@/components/Reveal'
import { ArrowRight } from 'lucide-react'

// 컬렉션 01: 백도화 비첩 (4종)
const bicheopItems = [
  {
    name: '연애비급',
    href: '/reports/love-secret',
    image: '/image/love-secret-book-showcase.webp',
    alt: '백도화 연애비급 전자책'
  },
  {
    name: '재회비방',
    href: '/reports/reunion-secret',
    image: '/image/reunion-secret-book-showcase.webp',
    alt: '백도화 재회비방 전자책'
  },
  {
    name: '풍요비책',
    href: '/reports/abundance-secret',
    image: '/image/abundance-secret-book-showcase.webp',
    alt: '백도화 풍요비책 전자책'
  },
  {
    name: '선천코드 비기',
    href: '/reports/seoncheon-code-bigi',
    image: '/image/seoncheon-code-bigi/book-main-mockup.webp',
    alt: '선천코드 비기 해설 도감'
  }
]

// 컬렉션 02: 선천코드 프리미엄 리포트 (3종)
const reportItems = [
  {
    name: '선천코드 연애 리포트',
    href: '/reports/baekdohwa-report',
    image: '/image/baekdohwa-love-destiny.webp',
    alt: '선천코드 연애 리포트'
  },
  {
    name: '선천코드 궁합 리포트',
    href: '/reports/premium-compatibility-report',
    image: '/image/baekdohwa-romantic-compatibility.webp',
    alt: '선천코드 궁합 리포트'
  },
  {
    name: '선천코드 풍요 리포트',
    href: '/reports/abundance-report',
    image: '/image/baekdohwa-wealth-destiny.webp',
    alt: '선천코드 풍요 리포트'
  }
]

export default function KnowledgeArchiveSection() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative w-full">
      <div className="max-w-[1280px] mx-auto w-full">
        {/* =========================================================================
            전체 섹션 헤더 (공통 스타일 재사용)
            ========================================================================= */}
        <Reveal delayMs={100}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-[1px] w-8 bg-[var(--accent-gold)] opacity-40" />
            <span className="text-[12pt] font-elegant font-semibold tracking-[0.25em] text-[var(--accent-gold)] uppercase opacity-90">
              THE ARCHIVE OF WISDOM
            </span>
            <span className="h-[1px] w-8 bg-[var(--accent-gold)] opacity-40" />
          </div>
        </Reveal>

        <Reveal delayMs={150}>
          <div className="text-center mb-16 md:mb-20 max-w-4xl mx-auto">
            <h2 className="about-heading text-2xl sm:text-4xl md:text-5xl font-elegant font-bold text-[#F5F5F5] mb-4 text-center leading-[1.4]">
              나를 읽고, 삶을 설계하는 지혜
            </h2>
            <div className="space-y-1 text-[18px] leading-[1.7] text-[#EDE6DA] opacity-85 font-light break-keep text-center">
              <p>스스로를 탐구하는 비첩부터 당신만을 위한 맞춤형 리포트까지.</p>
              <p>백도화의 철학을 담은 지식 컬렉션을 만나보세요.</p>
            </div>
          </div>
        </Reveal>

        {/* =========================================================================
            컬렉션 01: 백도화 비첩 (4열 갤러리)
            ========================================================================= */}
        <div className="w-full">
          <Reveal delayMs={200}>
            <div className="text-center mb-8 sm:mb-10">
              <div
                className="inline-flex items-center justify-center py-4 px-10 rounded-[8px] border border-[rgba(216,191,163,0.35)] backdrop-blur-sm"
                style={{
                  background: 'linear-gradient(135deg, rgba(72, 24, 38, 0.65) 0%, rgba(48, 16, 26, 0.6) 100%)'
                }}
              >
                <h3 className="text-2xl sm:text-3xl font-elegant font-bold text-[var(--accent-gold)] tracking-wide">
                  백도화 비첩(秘帖)
                </h3>
              </div>
            </div>
          </Reveal>

          {/* 4열 x 1행 갤러리 (간격 24px, 3:4 세로형) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {bicheopItems.map((item, idx) => (
              <Reveal key={idx} delayMs={220 + idx * 80}>
                <Link href={item.href} className="group block w-full text-center">
                  <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden border border-[rgba(216,191,163,0.2)] bg-[#1A0F2E]/40 shadow-lg transition-all duration-500 group-hover:border-[var(--accent-gold)] group-hover:shadow-[0_12px_32px_rgba(212,178,167,0.2)] group-hover:-translate-y-1.5">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 280px"
                    />
                  </div>
                  <h4 className="text-[18px] font-elegant font-semibold text-[#EDE6DA] group-hover:text-[var(--accent-gold)] transition-colors mt-4 break-keep">
                    {item.name}
                  </h4>
                </Link>
              </Reveal>
            ))}
          </div>

          {/* 비첩 전체 보기 링크 */}
          <Reveal delayMs={450}>
            <div className="text-center mt-8">
              <Link
                href="/ebooks"
                className="inline-flex items-center gap-2 text-[18px] font-elegant font-semibold text-[var(--accent-gold)] hover:text-[#F5F5F5] transition-colors"
              >
                <span>비첩 전체 보기</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </Reveal>
        </div>

        {/* 컬렉션 간 80px 여백 */}
        <div className="h-20" />

        {/* =========================================================================
            컬렉션 02: 선천코드 프리미엄 리포트 (3열 갤러리)
            ========================================================================= */}
        <div className="w-full">
          <Reveal delayMs={500}>
            <div className="text-center mb-8 sm:mb-10">
              <div
                className="inline-flex items-center justify-center py-4 px-10 rounded-[8px] border border-[rgba(216,191,163,0.35)] backdrop-blur-sm"
                style={{
                  background: 'linear-gradient(135deg, rgba(72, 24, 38, 0.65) 0%, rgba(48, 16, 26, 0.6) 100%)'
                }}
              >
                <h3 className="text-2xl sm:text-3xl font-elegant font-bold text-[var(--accent-gold)] tracking-wide">
                  선천코드 프리미엄 리포트
                </h3>
              </div>
            </div>
          </Reveal>

          {/* 3열 x 1행 갤러리 (간격 32px, 3:4 세로형, 비첩보다 큰 사이즈) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full">
            {reportItems.map((item, idx) => (
              <Reveal key={idx} delayMs={520 + idx * 100}>
                <Link href={item.href} className="group block w-full text-center">
                  <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden border border-[rgba(216,191,163,0.2)] bg-[#1A0F2E]/40 shadow-lg transition-all duration-500 group-hover:border-[var(--accent-gold)] group-hover:shadow-[0_12px_32px_rgba(212,178,167,0.2)] group-hover:-translate-y-1.5">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 380px"
                    />
                  </div>
                  <h4 className="text-[18px] font-elegant font-semibold text-[#EDE6DA] group-hover:text-[var(--accent-gold)] transition-colors mt-4 break-keep">
                    {item.name}
                  </h4>
                </Link>
              </Reveal>
            ))}
          </div>

          {/* 프리미엄 리포트 전체 보기 링크 */}
          <Reveal delayMs={750}>
            <div className="text-center mt-8">
              <Link
                href="/reports"
                className="inline-flex items-center gap-2 text-[18px] font-elegant font-semibold text-[var(--accent-gold)] hover:text-[#F5F5F5] transition-colors"
              >
                <span>프리미엄 리포트 전체 보기</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
