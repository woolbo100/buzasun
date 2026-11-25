'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Reveal from '@/components/Reveal'
import { BookOpen, Compass, FileText, ArrowRight } from 'lucide-react'

export default function KnowledgeArchiveSection() {
  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 relative">
      <div className="max-w-[1280px] mx-auto w-full">
        {/* 영문 소제목 */}
        <Reveal delayMs={100}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-[1px] w-8 bg-[var(--accent-gold)] opacity-40" />
            <span className="text-xs md:text-sm font-elegant tracking-[0.25em] text-[var(--accent-gold)] uppercase opacity-80">
              THE ARCHIVE OF WISDOM
            </span>
            <span className="h-[1px] w-8 bg-[var(--accent-gold)] opacity-40" />
          </div>
        </Reveal>

        {/* 헤드라인 */}
        <Reveal delayMs={150}>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-elegant font-bold text-[#F5F5F5] mb-4 leading-snug">
              삶을 읽는 지혜를 한 권의 책과 리포트에 담다
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-[#EDE6DA] opacity-85 leading-relaxed font-light">
              백도화의 전자책과 리포트는 단순히 운세에 대한 답을 제공하는 상품이 아닙니다.<br className="hidden sm:inline" />{' '}
              자신의 기질과 감정, 반복되는 관계의 흐름을 돌아보고, 사랑과 풍요에 대한 새로운 관점을 발견할 수 있도록 구성한 자기이해의 지식 자산입니다.
            </p>
          </div>
        </Reveal>

        {/* 3대 지식 자산 컬렉션 */}
        <div className="space-y-12">
          {/* 01. 비급 시리즈 */}
          <Reveal delayMs={200}>
            <div className="gungjung-glass p-8 sm:p-12 rounded-2xl border border-[rgba(216,191,163,0.2)]">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5 space-y-4">
                  <div className="flex items-center gap-2 text-xs font-elegant tracking-widest text-[var(--accent-gold)] uppercase">
                    <BookOpen size={16} />
                    <span>SERIES 01 · E-BOOK ARCHIVE</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-elegant font-bold text-[#F5F5F5]">
                    비급 시리즈
                  </h3>
                  <div className="flex flex-wrap gap-2 pt-1 pb-2">
                    <span className="px-2.5 py-1 rounded bg-[rgba(183,120,141,0.2)] text-[#E6BFA9] text-xs font-medium">
                      연애비급
                    </span>
                    <span className="px-2.5 py-1 rounded bg-[rgba(102,50,68,0.25)] text-[#D8BB94] text-xs font-medium">
                      재회비방
                    </span>
                    <span className="px-2.5 py-1 rounded bg-[rgba(96,143,130,0.2)] text-[#C3C9AC] text-xs font-medium">
                      풍요비책
                    </span>
                  </div>
                  <p className="text-sm text-[#EDE6DA] opacity-85 leading-relaxed font-light">
                    사랑과 관계, 풍요에 대한 통찰과 실천 방향을 스스로 탐색할 수 있도록 구성한 백도화의 전자책 시리즈입니다.
                  </p>
                  <div className="pt-2">
                    <Link
                      href="/ebooks"
                      className="inline-flex items-center gap-2 text-xs font-elegant tracking-wider uppercase text-[var(--accent-gold)] hover:text-[#F5F5F5] transition-colors"
                    >
                      <span>비급 시리즈 전체 보기</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-7 grid grid-cols-3 gap-3 sm:gap-4">
                  <Link href="/reports/love-secret" className="group block">
                    <div className="relative aspect-[3/4] rounded-xl overflow-hidden border border-[rgba(216,191,163,0.2)] bg-[#1A0F2E]">
                      <Image
                        src="/image/love-secret-book-showcase.webp"
                        alt="연애비급"
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 33vw, 200px"
                      />
                    </div>
                    <p className="text-xs text-center text-[#EDE6DA] opacity-75 mt-2 group-hover:text-[var(--accent-gold)] transition-colors">
                      연애비급
                    </p>
                  </Link>

                  <Link href="/reports/reunion-secret" className="group block">
                    <div className="relative aspect-[3/4] rounded-xl overflow-hidden border border-[rgba(216,191,163,0.2)] bg-[#1A0F2E]">
                      <Image
                        src="/image/reunion-secret-book-showcase.webp"
                        alt="재회비방"
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 33vw, 200px"
                      />
                    </div>
                    <p className="text-xs text-center text-[#EDE6DA] opacity-75 mt-2 group-hover:text-[var(--accent-gold)] transition-colors">
                      재회비방
                    </p>
                  </Link>

                  <Link href="/reports/abundance-secret" className="group block">
                    <div className="relative aspect-[3/4] rounded-xl overflow-hidden border border-[rgba(216,191,163,0.2)] bg-[#1A0F2E]">
                      <Image
                        src="/image/abundance-secret-book-showcase.webp"
                        alt="풍요비책"
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 33vw, 200px"
                      />
                    </div>
                    <p className="text-xs text-center text-[#EDE6DA] opacity-75 mt-2 group-hover:text-[var(--accent-gold)] transition-colors">
                      풍요비책
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>

          {/* 02. 선천코드 비기 */}
          <Reveal delayMs={300}>
            <div className="gungjung-glass p-8 sm:p-12 rounded-2xl border border-[rgba(216,191,163,0.2)]">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 order-2 lg:order-1 flex justify-center">
                  <Link href="/reports/seoncheon-code-bigi" className="w-full max-w-md group block">
                    <div className="relative aspect-[16/10] sm:aspect-[16/9] rounded-xl overflow-hidden border border-[rgba(216,191,163,0.25)] bg-[#1A0F2E] shadow-lg">
                      <Image
                        src="/image/seoncheon-code-secret-book.webp"
                        alt="선천코드 비기 도감"
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-90"
                        sizes="(max-width: 768px) 100vw, 500px"
                      />
                    </div>
                  </Link>
                </div>

                <div className="lg:col-span-5 order-1 lg:order-2 space-y-4">
                  <div className="flex items-center gap-2 text-xs font-elegant tracking-widest text-[var(--accent-gold)] uppercase">
                    <Compass size={16} />
                    <span>SERIES 02 · CODE ENCYCLOPEDIA</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-elegant font-bold text-[#F5F5F5]">
                    선천코드 비기
                  </h3>
                  <p className="text-sm text-[#EDE6DA] opacity-85 leading-relaxed font-light">
                    동양의 명리학적 관점을 친근한 설명과 시각적인 구성으로 풀어낸 연애·관계 중심의 선천코드 해설 도감입니다.
                  </p>
                  <p className="text-sm text-[#EDE6DA] opacity-80 leading-relaxed font-light">
                    자신과 상대의 기질을 이해하고 관계의 특성을 살펴볼 수 있도록 돕습니다.
                  </p>
                  <div className="pt-2">
                    <Link
                      href="/reports/seoncheon-code-bigi"
                      className="inline-flex items-center gap-2 text-xs font-elegant tracking-wider uppercase text-[var(--accent-gold)] hover:text-[#F5F5F5] transition-colors"
                    >
                      <span>선천코드 비기 도감 보기</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* 03. 선천코드 프리미엄 리포트 */}
          <Reveal delayMs={400}>
            <div className="gungjung-glass p-8 sm:p-12 rounded-2xl border border-[rgba(216,191,163,0.2)]">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5 space-y-4">
                  <div className="flex items-center gap-2 text-xs font-elegant tracking-widest text-[var(--accent-gold)] uppercase">
                    <FileText size={16} />
                    <span>SERIES 03 · PERSONALIZED REPORT</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-elegant font-bold text-[#F5F5F5]">
                    선천코드 프리미엄 리포트
                  </h3>
                  <div className="flex flex-wrap gap-2 pt-1 pb-2">
                    <span className="px-2.5 py-1 rounded bg-[rgba(216,191,163,0.12)] text-[var(--accent-gold-light)] text-xs font-medium">
                      연애 리포트
                    </span>
                    <span className="px-2.5 py-1 rounded bg-[rgba(216,191,163,0.12)] text-[var(--accent-gold-light)] text-xs font-medium">
                      궁합 리포트
                    </span>
                    <span className="px-2.5 py-1 rounded bg-[rgba(216,191,163,0.12)] text-[var(--accent-gold-light)] text-xs font-medium">
                      풍요 리포트
                    </span>
                    <span className="px-2.5 py-1 rounded bg-[rgba(216,191,163,0.12)] text-[var(--accent-gold-light)] text-xs font-medium">
                      통합 리포트
                    </span>
                  </div>
                  <p className="text-sm text-[#EDE6DA] opacity-85 leading-relaxed font-light">
                    개인의 입력 정보를 바탕으로 명리학적 해석과 자기성찰의 관점을 제공하는 1:1 맞춤형 리포트 컬렉션입니다.
                  </p>
                  <div className="pt-2">
                    <Link
                      href="/reports"
                      className="inline-flex items-center gap-2 text-xs font-elegant tracking-wider uppercase text-[var(--accent-gold)] hover:text-[#F5F5F5] transition-colors"
                    >
                      <span>맞춤 리포트 전체 보기</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                  <Link href="/reports/baekdohwa-report" className="group block">
                    <div className="p-5 rounded-xl border border-[rgba(216,191,163,0.18)] bg-[rgba(26,15,46,0.3)] hover:border-[var(--accent-gold)] transition-colors h-full flex flex-col justify-between">
                      <div>
                        <span className="text-[10px] text-[#E6BFA9] font-elegant tracking-wider uppercase block mb-1">
                          LOVE REPORT
                        </span>
                        <h4 className="text-base font-elegant font-bold text-[#F5F5F5] group-hover:text-[var(--accent-gold)] transition-colors mb-2">
                          연애 리포트
                        </h4>
                        <p className="text-xs text-[#EDE6DA] opacity-75 font-light">
                          나의 고유한 도화 기질과 연애 패턴 심층 분석
                        </p>
                      </div>
                      <div className="pt-4 text-xs text-[var(--accent-gold)] opacity-70 group-hover:opacity-100 flex items-center gap-1">
                        <span>분석하기</span>
                        <ArrowRight size={12} />
                      </div>
                    </div>
                  </Link>

                  <Link href="/reports/premium-compatibility-report" className="group block">
                    <div className="p-5 rounded-xl border border-[rgba(216,191,163,0.18)] bg-[rgba(26,15,46,0.3)] hover:border-[var(--accent-gold)] transition-colors h-full flex flex-col justify-between">
                      <div>
                        <span className="text-[10px] text-[#D8BB94] font-elegant tracking-wider uppercase block mb-1">
                          BOND REPORT
                        </span>
                        <h4 className="text-base font-elegant font-bold text-[#F5F5F5] group-hover:text-[var(--accent-gold)] transition-colors mb-2">
                          궁합 리포트
                        </h4>
                        <p className="text-xs text-[#EDE6DA] opacity-75 font-light">
                          두 사람의 기질 상호작용과 갈등의 구조적 해법
                        </p>
                      </div>
                      <div className="pt-4 text-xs text-[var(--accent-gold)] opacity-70 group-hover:opacity-100 flex items-center gap-1">
                        <span>분석하기</span>
                        <ArrowRight size={12} />
                      </div>
                    </div>
                  </Link>

                  <Link href="/reports/abundance-report" className="group block">
                    <div className="p-5 rounded-xl border border-[rgba(216,191,163,0.18)] bg-[rgba(26,15,46,0.3)] hover:border-[var(--accent-gold)] transition-colors h-full flex flex-col justify-between">
                      <div>
                        <span className="text-[10px] text-[#C3C9AC] font-elegant tracking-wider uppercase block mb-1">
                          WEALTH REPORT
                        </span>
                        <h4 className="text-base font-elegant font-bold text-[#F5F5F5] group-hover:text-[var(--accent-gold)] transition-colors mb-2">
                          풍요 리포트
                        </h4>
                        <p className="text-xs text-[#EDE6DA] opacity-75 font-light">
                          타고난 재능과 부의 그릇을 여는 행동 지침
                        </p>
                      </div>
                      <div className="pt-4 text-xs text-[var(--accent-gold)] opacity-70 group-hover:opacity-100 flex items-center gap-1">
                        <span>분석하기</span>
                        <ArrowRight size={12} />
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
