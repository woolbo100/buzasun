'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Reveal from '@/components/Reveal'
import GlobalBackground from '@/components/GlobalBackground'
import Link from 'next/link'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function PremiumCompatibilityReportPage() {
  useScrollAnimation()

  return (
    <main className="relative min-h-screen bg-[#0a0514]">
      <GlobalBackground src="/image/main4.png">
        <Navigation />

        <div className="relative z-10 pt-40 pb-20">
          <div className="container-premium">
            
            {/* 1. Hero Section - 와이드 레이아웃 */}
            <section className="text-center mb-32">
              <Reveal delayMs={100}>
                <div className="mb-8">
                  <span className="inline-block px-5 py-1.5 rounded-full text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase bg-[var(--accent-gold)]/10 border border-[var(--accent-gold)]/30 text-[var(--accent-gold-light)]">
                    BAEKDOHWA PREMIUM COMPATIBILITY REPORT
                  </span>
                </div>
                <h1 className="text-4xl md:text-7xl font-elegant font-bold mb-10 text-white leading-tight">
                  프리미엄 <span className="text-[var(--accent-gold)]">궁합 리포트</span>
                </h1>
                
                {/* 메인 히어로 이미지 - 상자 없이 원본 비율 유지 */}
                <div className="relative max-w-6xl mx-auto mb-16 rounded-[40px] overflow-hidden border border-white/10 shadow-2xl group">
                  <img 
                    src="/image/compatibility/p1.webp" 
                    alt="Hero"
                    className="w-full h-auto transition-transform duration-[10000ms] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0514]/40 to-transparent"></div>
                </div>

                <p className="text-xl md:text-3xl text-[#EDE6DA] opacity-90 leading-relaxed mb-12 max-w-3xl mx-auto break-keep font-elegant italic">
                  두 사람의 인연은 우연이 아니라 흐름입니다.
                </p>
                
                <Link 
                  href="/checkout?productId=compatibility-report"
                  className="btn-primary inline-flex items-center px-16 py-6 rounded-2xl font-bold text-xl hover:scale-105 transition-all duration-500 shadow-[0_0_60px_rgba(212,178,167,0.2)]"
                >
                  프리미엄 궁합 리포트 신청하기
                </Link>
              </Reveal>
            </section>

            {/* 2. Product Overview Section */}
            <section className="mb-40">
              <Reveal>
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                  <div className="relative overflow-hidden rounded-[40px] border border-white/10 shadow-2xl">
                    <img src="/image/compatibility/p2.webp" alt="Overview" className="w-full h-auto object-cover" />
                  </div>
                  <div className="space-y-10">
                    <h2 className="text-4xl md:text-5xl font-elegant font-bold text-white leading-tight">
                      사랑은 감정이지만,<br /> <span className="text-[var(--accent-gold)]">관계는 흐름입니다</span>
                    </h2>
                    <p className="text-xl text-[#EDE6DA] opacity-70 leading-relaxed break-keep font-light whitespace-pre-wrap">
                      프리미엄 궁합 리포트는 단순한 궁합 점수가 아니라,{"\n\n"}
                      두 사람이 왜 끌리는지, 왜 자꾸 부딪히는지, 어떤 방식으로 함께 성장할 수 있는지를 섬세하게 해석하는 프리미엄 관계 분석 리포트입니다.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        "두 사람의 기본 기질 분석", 
                        "감정 흐름과 관계 패턴", 
                        "서로 끌리는 이유 분석", 
                        "갈등이 반복되는 핵심 원인",
                        "오래가는 관계의 방향성",
                        "결혼/장기 관계 가능성"
                      ].map((item, idx) => (
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

            {/* 3. Recommended For Section */}
            <section className="mb-40">
              <Reveal>
                <div className="grid lg:grid-cols-2 gap-24 items-center">
                  <div className="space-y-12">
                    <h2 className="text-4xl font-elegant font-bold text-white tracking-widest">
                      이런 분께 <span className="text-[var(--accent-gold)]">추천합니다</span>
                    </h2>
                    <div className="grid grid-cols-1 gap-6">
                      {[
                        '지금 만나는 사람과 잘 맞는지 궁금한 분',
                        '썸, 연애, 재회 가능성을 알고 싶은 분',
                        '반복되는 갈등의 이유를 알고 싶은 분',
                        '결혼까지 이어질 수 있는 관계인지 궁금한 분',
                        '오래 가는 관계를 만들고 싶은 분',
                        '상대의 감정 흐름을 이해하고 싶은 분',
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
                  {/* 세로형 이미지 원본 비율 그대로 노출 */}
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-[var(--accent-gold)]/10 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <img 
                      src="/image/compatibility/p3.webp" 
                      alt="Recommended" 
                      className="relative z-10 w-full h-auto rounded-[50px] shadow-3xl border border-white/10 transition-transform duration-1000 group-hover:scale-[1.02]" 
                    />
                  </div>
                </div>
              </Reveal>
            </section>

            {/* 4. Compatibility Analysis Section */}
            <section className="mb-40 text-center">
              <Reveal>
                <h2 className="text-3xl md:text-5xl font-elegant font-bold text-white tracking-[0.2em] mb-16">
                  리포트 <span className="text-[var(--accent-gold)]">주요 분석</span> 내용
                </h2>
                <div className="max-w-7xl mx-auto mb-20">
                  <img 
                    src="/image/compatibility/p4.webp" 
                    alt="Analysis Detail" 
                    className="w-full h-auto rounded-[50px] shadow-2xl border border-white/10" 
                  />
                </div>
                <div className="gungjung-glass p-12 md:p-24 relative overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {[
                      { t: "선천적 기질 궁합", d: "두 사람의 타고난 에너지 조화 분석", i: "fa-yin-yang" },
                      { t: "핵심 끌림 이유", d: "서로에게 강력하게 끌리는 근본 원인 해독", i: "fa-magnet" },
                      { t: "갈등 근본 원인", d: "반복되는 다툼의 무의식적 배경 분석", i: "fa-triangle-exclamation" },
                      { t: "소통 및 유지 전략", d: "서로를 이해하는 방식과 관계 유지법 제안", i: "fa-comments" },
                      { t: "미래 관계 해석", d: "결혼 및 장기적 인연의 가능성 탐색", i: "fa-ring" },
                      { t: "성장 방향 제안", d: "함께 더 행복해질 수 있는 실질적 가이드", i: "fa-seedling" }
                    ].map((item, idx) => (
                      <div key={idx} className="flex flex-col items-center gap-6 p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-all group">
                        <div className="w-16 h-16 rounded-2xl bg-[#1A0514] flex items-center justify-center border border-[var(--accent-gold)]/30 text-[var(--accent-gold)] shadow-lg group-hover:scale-110 transition-transform">
                          <i className={`fas ${item.i} text-2xl`}></i>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-3">{item.t}</h3>
                          <p className="text-sm text-[#EDE6DA] opacity-50 font-light break-keep">{item.d}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-16 pt-16 border-t border-white/5 text-center">
                    <p className="text-[#EDE6DA] opacity-60 italic font-elegant text-lg break-keep">
                      "이 리포트는 단순한 궁합 점수가 아니라, 관계의 흐름을 이해하고 더 건강한 사랑을 선택하기 위한 프리미엄 자기이해 리포트입니다."
                    </p>
                  </div>
                </div>
              </Reveal>
            </section>

            {/* 5. Premium Report Section */}
            <section className="mb-40">
              <Reveal>
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                  <div className="space-y-10 order-2 lg:order-1">
                    <h2 className="text-4xl md:text-6xl font-elegant font-bold text-white leading-tight">
                      소장하고 싶은 <br /> <span className="text-[var(--accent-gold)]">프리미엄 궁합 리포트</span>
                    </h2>
                    <p className="text-xl text-[#EDE6DA] opacity-70 leading-relaxed break-keep font-light whitespace-pre-wrap">
                      프리미엄 궁합 리포트는 한 번 읽고 끝나는 결과지가 아니라, 두 사람의 관계를 다시 바라보게 만드는 개인 맞춤형 감성 리포트입니다.{"\n\n"}
                      서로의 성향, 반복되는 관계 패턴, 끌림과 거리감의 이유, 그리고 더 나은 사랑을 위한 방향성을 백도화만의 언어로 정리해드립니다.
                    </p>
                  </div>
                  <div className="order-1 lg:order-2 relative group">
                    <div className="absolute -inset-10 bg-[var(--accent-gold)]/5 blur-[120px] rounded-full"></div>
                    <img 
                      src="/image/compatibility/p5.webp" 
                      alt="Premium Design" 
                      className="relative z-10 w-full h-auto rounded-[60px] shadow-[0_0_80px_rgba(0,0,0,0.6)] border border-white/10 transition-transform duration-1000 group-hover:scale-[1.03]" 
                    />
                  </div>
                </div>
              </Reveal>
            </section>

            {/* 6. Report Notice Section */}
            <section className="mb-40">
              <Reveal>
                <div className="gungjung-glass p-12 md:p-20 border-white/5">
                  <h2 className="text-2xl font-elegant font-bold mb-12 text-white border-l-4 border-[var(--accent-gold)] pl-8">리포트 신청 전 안내</h2>
                  <div className="grid md:grid-cols-2 gap-12">
                    <ul className="space-y-6">
                      {[
                        "본 상품은 디지털 리포트 상품입니다.",
                        "입력하신 정보를 바탕으로 리포트 제작이 진행됩니다.",
                        "상대방 정보(이름, 생년월일 등)가 정확할수록 완성도가 높아집니다.",
                        "영업일 기준 2~5일 정도 제작 기간이 소요됩니다."
                      ].map((text, idx) => (
                        <li key={idx} className="flex items-start gap-4 text-[#EDE6DA] opacity-60 text-base font-light">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--accent-gold)] shrink-0"></span>
                          {text}
                        </li>
                      ))}
                    </ul>
                    <ul className="space-y-6">
                      {[
                        "리포트 제작 시작 이후에는 단순 변심 환불이 제한됩니다.",
                        "입력 정보 부정확 시 해석에 차이가 있을 수 있습니다.",
                        "의학적·법률적·투자적 판단을 대신하지 않습니다.",
                        "자기이해와 관계 성찰을 위한 참고 자료로 활용해주세요."
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

            {/* 7. Final CTA Section */}
            <section className="relative min-h-[600px] flex flex-col items-center justify-center overflow-hidden rounded-[60px] mb-20 group">
              <div className="absolute inset-0 z-0">
                <img 
                  src="/image/compatibility/p6.webp" 
                  alt="Final CTA" 
                  className="w-full h-full object-cover transition-transform duration-[15000ms] group-hover:scale-125" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0514] via-[#0a0514]/60 to-transparent"></div>
              </div>
              <div className="relative z-10 text-center px-10">
                <Reveal>
                  <h2 className="text-4xl md:text-7xl font-elegant font-bold text-white mb-12 leading-tight">
                    사랑의 방향을 <br /> <span className="text-[var(--accent-gold)]">결정하는 순간</span>
                  </h2>
                  <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-2xl mx-auto break-keep">
                    반복되는 관계에는 이유가 있습니다. 그리고 그 이유를 아는 순간, 당신의 사랑은 더 좋은 방향으로 흘러갈 수 있습니다.
                  </p>
                  <Link 
                    href="/checkout?productId=compatibility-report"
                    className="btn-primary inline-flex items-center px-20 py-8 rounded-2xl font-bold text-2xl hover:scale-105 transition-all duration-500 shadow-[0_0_80px_rgba(212,178,167,0.3)]"
                    style={{ background: 'linear-gradient(135deg, var(--accent-gold) 0%, var(--accent-gold-deep) 100%)', color: '#1A0514' }}
                  >
                    프리미엄 궁합 리포트 신청하기
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
