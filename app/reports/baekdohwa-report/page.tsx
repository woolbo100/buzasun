'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Reveal from '@/components/Reveal'
import GlobalBackground from '@/components/GlobalBackground'
import Link from 'next/link'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function BaekdohwaReportPage() {
  useScrollAnimation()

  return (
    <main className="relative min-h-screen bg-[#0a0514]">
      <GlobalBackground src="/image/main4.png">
        <Navigation />

        <div className="relative z-10 pt-40 pb-20">
          <div className="container-premium">
            
            {/* 1. Hero Section - 미스 하이랜더 스타일로 확장 */}
            <section className="text-center mb-32">
              <Reveal delayMs={100}>
                <div className="mb-8">
                  <span className="inline-block px-5 py-1.5 rounded-full text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase bg-[var(--accent-gold)]/10 border border-[var(--accent-gold)]/30 text-[var(--accent-gold-light)]">
                    PREMIUM LOVE CODE REPORT
                  </span>
                </div>
                <h1 className="text-4xl md:text-7xl font-elegant font-bold mb-10 text-white leading-tight">
                  선천코드 <span className="text-[var(--accent-gold)]">연애 리포트</span>
                </h1>
                
                {/* 메인 히어로 이미지 - 상자 없이 와이드하게 배치 (원본 비율 유지) */}
                <div className="relative max-w-6xl mx-auto mb-16 rounded-[40px] overflow-hidden border border-white/10 shadow-2xl group">
                  <img 
                    src="/image/lovereport/p1.webp" 
                    alt="Hero"
                    className="w-full h-auto transition-transform duration-[10000ms] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0514]/40 to-transparent"></div>
                </div>

                <p className="text-xl md:text-3xl text-[#EDE6DA] opacity-90 leading-relaxed mb-12 max-w-3xl mx-auto break-keep font-elegant italic">
                  나를 아는 것에서부터, 당신의 진짜 연애는 시작됩니다.
                </p>
                
                <Link 
                  href="/checkout?productId=baekdohwa-report"
                  className="btn-primary inline-flex items-center px-16 py-6 rounded-2xl font-bold text-xl hover:scale-105 transition-all duration-500 shadow-[0_0_60px_rgba(212,178,167,0.2)]"
                >
                  리포트 신청하기 (49,000원)
                </Link>
              </Reveal>
            </section>

            {/* 2. Overview Section - 좌우 배치 구조 */}
            <section className="mb-40">
              <Reveal>
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                  <div className="relative overflow-hidden rounded-[40px] border border-white/10 shadow-2xl">
                    <img src="/image/lovereport/p2.webp" alt="Overview" className="w-full h-auto object-cover" />
                  </div>
                  <div className="space-y-10">
                    <h2 className="text-4xl md:text-5xl font-elegant font-bold text-white leading-tight">
                      당신의 사랑은 <br /> <span className="text-[var(--accent-gold)]">우연이 아닙니다</span>
                    </h2>
                    <p className="text-xl text-[#EDE6DA] opacity-70 leading-relaxed break-keep font-light whitespace-pre-wrap">
                      선천코드 연애 리포트는 단순한 연애운 풀이가 아니라, 당신이 어떤 사람에게 끌리고, 왜 비슷한 관계 패턴을 반복하는지, 그리고 어떤 방식으로 사랑을 회복하고 성장시킬 수 있는지를 섬세하게 해석하는 프리미엄 연애 리포트입니다.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {["타고난 연애 기질", "무의식적 끌림 패턴", "관계 유지 전략", "매력 에너지 활용법"].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/5">
                          <div className="w-2 h-2 rounded-full bg-[var(--accent-gold)] shadow-[0_0_10px_var(--accent-gold)]"></div>
                          <span className="text-white/80">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            </section>

            {/* 3. Recommended For - 세로형 이미지 본연의 비율 강조 */}
            <section className="mb-40">
              <Reveal>
                <div className="grid lg:grid-cols-2 gap-24 items-center">
                  <div className="space-y-12">
                    <h2 className="text-4xl font-elegant font-bold text-white tracking-widest">
                      이런 분께 <span className="text-[var(--accent-gold)]">추천합니다</span>
                    </h2>
                    <div className="grid grid-cols-1 gap-6">
                      {[
                        '늘 비슷한 연애 패턴을 반복하는 분',
                        '상대에게 끌리는 이유를 알고 싶은 분',
                        '내 연애의 강점과 약점을 알고 싶은 분',
                        '관계에서 자꾸 불안하거나 흔들리는 분',
                        '앞으로의 연애 전략을 세우고 싶은 분',
                      ].map((item, idx) => (
                        <div key={idx} className="gungjung-glass p-8 border-white/[0.03] flex items-center gap-6 group hover:border-[var(--accent-gold)]/30">
                          <div className="w-12 h-12 rounded-full bg-white/[0.03] flex items-center justify-center shrink-0 text-[var(--accent-gold)]">
                            <i className="fas fa-check text-sm"></i>
                          </div>
                          <p className="text-[#EDE6DA] opacity-80 text-lg font-light break-keep">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* 세로형 이미지 그대로 노출 (상자 탈출) */}
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-[var(--accent-gold)]/10 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <img 
                      src="/image/lovereport/p3.webp" 
                      alt="Recommended" 
                      className="relative z-10 w-full h-auto rounded-[50px] shadow-3xl border border-white/10 transition-transform duration-1000 group-hover:scale-[1.02]" 
                    />
                  </div>
                </div>
              </Reveal>
            </section>

            {/* 4. Analysis Content - 와이드 배치 */}
            <section className="mb-40 text-center">
              <Reveal>
                <h2 className="text-3xl md:text-5xl font-elegant font-bold text-white tracking-[0.2em] mb-16">
                  리포트 <span className="text-[var(--accent-gold)]">주요 분석</span> 내용
                </h2>
                <div className="max-w-7xl mx-auto mb-20">
                  <img 
                    src="/image/lovereport/p4.webp" 
                    alt="Analysis Detail" 
                    className="w-full h-auto rounded-[50px] shadow-2xl border border-white/10" 
                  />
                </div>
                <div className="gungjung-glass p-12 md:p-24 relative overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {[
                      { t: "선천적 연애 기질", d: "당신이 타고난 사랑의 에너지 분석", i: "fa-heart" },
                      { t: "무의식적 끌림", d: "반복적으로 끌리는 이성 유형 해독", i: "fa-bolt" },
                      { t: "관계 방어기제", d: "연애를 방해하는 무의식적 장벽 탐색", i: "fa-shield-halved" },
                      { t: "최적의 파트너", d: "에너지를 보충해줄 파트너 유형 제안", i: "fa-user-group" },
                      { t: "매력 에너지", d: "가장 나다운 모습으로 사랑받는 법", i: "fa-wand-magic-sparkles" },
                      { t: "이별 솔루션", d: "갈등의 고리를 끊어낼 실질적 변화", i: "fa-key" }
                    ].map((item, idx) => (
                      <div key={idx} className="flex flex-col items-center gap-6 p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-all group">
                        <div className="w-16 h-16 rounded-2xl bg-[#2D0A1E] flex items-center justify-center border border-[var(--accent-gold)]/30 text-[var(--accent-gold)] shadow-lg group-hover:scale-110 transition-transform">
                          <i className={`fas ${item.i} text-2xl`}></i>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-3">{item.t}</h3>
                          <p className="text-sm text-[#EDE6DA] opacity-50 font-light break-keep">{item.d}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </section>

            {/* 5. Premium Section - 미스 하이랜더의 감성 구조 */}
            <section className="mb-40">
              <Reveal>
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                  <div className="space-y-10 order-2 lg:order-1">
                    <h2 className="text-4xl md:text-6xl font-elegant font-bold text-white leading-tight">
                      소장하고 싶은 <br /> <span className="text-[var(--accent-gold)]">프리미엄 리포트</span>
                    </h2>
                    <p className="text-xl text-[#EDE6DA] opacity-70 leading-relaxed break-keep font-light whitespace-pre-wrap">
                      선천코드 연애 리포트는 한 번 읽고 끝나는 결과지가 아니라, 당신의 사랑을 다시 바라보게 하는 개인 맞춤형 감성 리포트입니다.{"\n\n"}
                      백도화만의 깊이 있는 해석과 우아한 문체로 당신의 사랑 이야기를 새롭게 정의해 드립니다.
                    </p>
                  </div>
                  <div className="order-1 lg:order-2 relative group">
                    <div className="absolute -inset-10 bg-[var(--accent-gold)]/5 blur-[120px] rounded-full"></div>
                    <img 
                      src="/image/lovereport/p5.webp" 
                      alt="Premium Design" 
                      className="relative z-10 w-full h-auto rounded-[60px] shadow-[0_0_80px_rgba(0,0,0,0.6)] border border-white/10 transition-transform duration-1000 group-hover:scale-[1.03]" 
                    />
                  </div>
                </div>
              </Reveal>
            </section>

            {/* 6. Notices */}
            <section className="mb-40">
              <Reveal>
                <div className="gungjung-glass p-12 md:p-20 border-white/5">
                  <h2 className="text-2xl font-elegant font-bold mb-12 text-white border-l-4 border-[var(--accent-gold)] pl-8">리포트 신청 전 안내</h2>
                  <div className="grid md:grid-cols-2 gap-12">
                    <ul className="space-y-6">
                      {[
                        "본 상품은 디지털 리포트(PDF) 상품입니다.",
                        "입력하신 사주 정보를 바탕으로 개인별 맞춤 제작됩니다.",
                        "제작 기간은 영업일 기준 2~5일 정도 소요됩니다.",
                        "제작 시작 이후에는 단순 변심 환불이 어렵습니다."
                      ].map((text, idx) => (
                        <li key={idx} className="flex items-start gap-4 text-[#EDE6DA] opacity-60 text-base font-light">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--accent-gold)] shrink-0"></span>
                          {text}
                        </li>
                      ))}
                    </ul>
                    <ul className="space-y-6">
                      {[
                        "정확한 생년월일시 입력이 가장 중요합니다.",
                        "의학적·법률적 조언이 아닌 자기이해를 위한 가이드입니다.",
                        "타인에게 무단 전재 및 상업적 재배포를 금지합니다.",
                        "문의사항은 고객센터 채널톡을 이용해주세요."
                      ].map((text, idx) => (
                        <li key={idx} className="flex items-start gap-4 text-[#EDE6DA] opacity-60 text-base font-light">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--accent-gold)] shrink-0"></span>
                          {text}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            </section>

            {/* 7. CTA - 웅장한 마무리 */}
            <section className="relative min-h-[600px] flex flex-col items-center justify-center overflow-hidden rounded-[60px] mb-20 group">
              <div className="absolute inset-0 z-0">
                <img 
                  src="/image/lovereport/p6.webp" 
                  alt="Final CTA" 
                  className="w-full h-full object-cover transition-transform duration-[15000ms] group-hover:scale-125" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0514] via-[#0a0514]/60 to-transparent"></div>
              </div>
              <div className="relative z-10 text-center px-10">
                <Reveal>
                  <h2 className="text-4xl md:text-7xl font-elegant font-bold text-white mb-12 leading-tight">
                    사랑의 흐름을 <br /> <span className="text-[var(--accent-gold)]">바꾸는 시작</span>
                  </h2>
                  <Link 
                    href="/checkout?productId=baekdohwa-report"
                    className="btn-primary inline-flex items-center px-20 py-8 rounded-2xl font-bold text-2xl hover:scale-105 transition-all duration-500 shadow-[0_0_80px_rgba(212,178,167,0.3)]"
                    style={{ background: 'linear-gradient(135deg, var(--accent-gold) 0%, var(--accent-gold-deep) 100%)', color: '#1A0514' }}
                  >
                    지금 리포트 신청하기
                  </Link>
                </Reveal>
              </div>
            </section>

            {/* Policy Links */}
            <section className="pb-20 text-center">
              <div className="flex justify-center gap-10 text-[10px] tracking-[0.3em] uppercase text-white/30">
                <Link href="/terms" className="hover:text-[var(--accent-gold)] transition-colors">이용약관</Link>
                <Link href="/privacy" className="hover:text-[var(--accent-gold)] transition-colors">개인정보처리방침</Link>
                <Link href="/refund" className="hover:text-[var(--accent-gold)] transition-colors">환불정책</Link>
              </div>
            </section>

          </div>
        </div>
        <Footer />
      </GlobalBackground>
    </main>
  )
}
