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
          <div className="max-w-5xl mx-auto px-4">
            
            {/* 1. Hero Section */}
            <section className="relative overflow-hidden rounded-[40px] mb-24 min-h-[700px] flex items-center">
              <div className="absolute inset-0">
                <img 
                  src="/image/lovereport/p1.webp" 
                  alt="Hero" 
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0a0514] via-[#0a0514]/40 to-transparent"></div>
              </div>
              
              <div className="relative z-10 pl-8 md:pl-20 max-w-2xl">
                <Reveal delayMs={100}>
                  <span className="inline-block px-4 py-1 rounded-full text-[10px] font-bold mb-6 tracking-[0.2em] border border-[var(--accent-gold)]/30 text-[var(--accent-gold-light)] bg-[var(--accent-gold)]/10 uppercase">
                    BAEKDOHWA LOVE CODE REPORT
                  </span>
                  <h1 className="text-5xl md:text-7xl font-elegant font-bold mb-6 text-white leading-tight">
                    선천코드 <span className="text-[var(--accent-gold)]">연애 리포트</span>
                  </h1>
                  <p className="text-xl md:text-2xl text-white/90 font-light mb-8 leading-relaxed break-keep">
                    나를 아는 것에서부터,<br/>
                    <span className="text-[var(--accent-gold-light)] font-medium">당신의 진짜 연애는 시작됩니다.</span>
                  </p>
                  <p className="text-base md:text-lg text-white/60 mb-12 leading-relaxed max-w-lg break-keep italic">
                    당신의 타고난 기질과 연애 무의식을 분석하여,<br/>
                    반복되는 연애 문제의 근본적인 원인과 관계의 흐름을 읽어드립니다.
                  </p>
                  <Link 
                    href="/checkout?productId=baekdohwa-report"
                    className="btn-primary inline-flex items-center justify-center px-12 py-5 rounded-full font-bold text-lg shadow-[0_0_50px_rgba(212,178,167,0.3)] hover:scale-105 transition-transform"
                  >
                    리포트 신청 및 결제하기
                  </Link>
                </Reveal>
              </div>
            </section>

            {/* 2. Product Overview Section */}
            <section className="mb-32">
              <Reveal>
                <div className="gungjung-glass p-10 md:p-20 rounded-[40px] overflow-hidden relative">
                  <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="order-2 md:order-1">
                      <h2 className="text-3xl md:text-4xl font-elegant font-bold mb-8 text-white">
                        당신의 사랑은 <span className="text-[var(--accent-gold)]">우연이 아닙니다</span>
                      </h2>
                      <p className="text-lg text-white/70 leading-relaxed mb-12 break-keep">
                        선천코드 연애 리포트는 단순한 연애운 풀이가 아니라, 당신이 어떤 사람에게 끌리고, 왜 비슷한 관계 패턴을 반복하는지, 그리고 어떤 방식으로 사랑을 회복하고 성장시킬 수 있는지를 섬세하게 해석하는 <span className="text-white font-bold">프리미엄 연애 리포트</span>입니다.
                      </p>
                      
                      <div className="grid grid-cols-2 gap-4">
                        {[
                          "타고난 연애 기질 분석",
                          "반복되는 연애 패턴 해석",
                          "무의식적 끌림의 원인",
                          "관계 유지에 필요한 감정 전략",
                          "이상형과 맞는 파트너 유형",
                          "나만의 매력 무기 발견"
                        ].map((item, idx) => (
                          <div key={idx} className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/5">
                            <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent-gold)] shadow-[0_0_8px_var(--accent-gold)]"></div>
                            <span className="text-sm text-white/80">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="order-1 md:order-2">
                      <div className="relative group">
                        <div className="absolute inset-0 bg-[var(--accent-gold)]/20 blur-[100px] rounded-full group-hover:bg-[var(--accent-gold)]/30 transition-all"></div>
                        <img 
                          src="/image/lovereport/p2.webp" 
                          alt="Overview" 
                          className="relative z-10 w-full rounded-2xl shadow-2xl border border-white/10 group-hover:scale-[1.02] transition-transform duration-700"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </section>

            {/* 3. Recommended For Section */}
            <section className="mb-32">
              <Reveal>
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-5xl font-elegant font-bold text-white mb-6">이런 분께 추천합니다</h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[var(--accent-gold)] to-transparent mx-auto"></div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    "늘 비슷한 연애 패턴을 반복하는 분",
                    "상대에게 끌리는 이유를 알고 싶은 분",
                    "내 연애의 강점과 약점을 알고 싶은 분",
                    "나에게 맞는 파트너 유형이 궁금한 분",
                    "관계에서 자꾸 불안하거나 흔들리는 분",
                    "앞으로의 연애 전략을 세우고 싶은 분"
                  ].map((text, i) => (
                    <div key={i} className="gungjung-glass p-8 text-center group hover:bg-white/[0.05] transition-all border-white/5 hover:border-[var(--accent-gold)]/30">
                      <div className="w-12 h-12 rounded-full bg-[var(--accent-gold)]/10 border border-[var(--accent-gold)]/20 flex items-center justify-center mx-auto mb-6 text-[var(--accent-gold)] group-hover:scale-110 transition-transform">
                        <i className={`fas ${i % 2 === 0 ? 'fa-heart' : 'fa-star'} text-sm`}></i>
                      </div>
                      <p className="text-white/80 group-hover:text-white leading-relaxed break-keep font-medium">
                        {text}
                      </p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-12 overflow-hidden rounded-3xl h-[400px]">
                  <img src="/image/lovereport/p3.webp" alt="Recommendation Background" className="w-full h-full object-cover opacity-70" />
                </div>
              </Reveal>
            </section>

            {/* 4. Report Analysis Section */}
            <section className="mb-32">
              <Reveal>
                <div className="gungjung-glass p-10 md:p-20 rounded-[40px] border-[var(--accent-gold)]/20">
                  <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-elegant font-bold text-white mb-8">리포트 주요 분석 내용</h2>
                    <p className="text-lg text-white/60 leading-relaxed break-keep">
                      선천코드 연애 리포트는 당신의 타고난 기질, 감정의 흐름, 무의식적 관계 패턴을 바탕으로 사랑이 반복되는 이유와 앞으로의 연애 방향을 분석합니다.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                    <img src="/image/lovereport/p4.webp" alt="Analysis" className="rounded-2xl border border-white/5 shadow-2xl" />
                    <div className="space-y-6">
                      {[
                        { t: "선천적 연애 기질 분석", d: "당신이 타고난 사랑의 에너지와 소통 방식을 정의합니다." },
                        { t: "무의식적 끌림의 패턴 해독", d: "왜 특정 유형에게 반복적으로 끌리는지 그 근원을 분석합니다." },
                        { t: "관계 유지 방어기제", d: "연애를 방해하는 당신만의 무의식적 장벽을 찾아냅니다." },
                        { t: "최적의 파트너 유형", d: "당신의 결핍을 채워주고 에너지를 보충해줄 파트너를 제안합니다." },
                        { t: "매력 에너지 활용법", d: "가장 나다운 모습으로 사랑받는 매력 전략을 수립합니다." },
                        { t: "이별을 멈추는 솔루션", d: "반복되는 갈등의 고리를 끊어낼 실질적인 변화를 제안합니다." }
                      ].map((item, idx) => (
                        <div key={idx} className="flex gap-4 group">
                          <div className="w-6 h-6 rounded-full border border-[var(--accent-gold)] flex items-center justify-center text-[10px] text-[var(--accent-gold)] font-bold shrink-0 mt-1 group-hover:bg-[var(--accent-gold)] group-hover:text-black transition-colors">
                            {idx + 1}
                          </div>
                          <div>
                            <h3 className="text-white font-bold mb-1">{item.t}</h3>
                            <p className="text-sm text-white/40">{item.d}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white/5 p-8 rounded-2xl border border-white/5 text-center">
                    <p className="text-white/60 italic text-sm md:text-base break-keep">
                      "이 리포트는 단순한 운세 풀이가 아니라, 당신의 관계 흐름을 이해하고 더 건강한 사랑을 선택하기 위한 자기이해 리포트입니다."
                    </p>
                  </div>
                </div>
              </Reveal>
            </section>

            {/* 5. Premium Report Section */}
            <section className="mb-32">
              <Reveal>
                <div className="grid md:grid-cols-2 gap-16 items-center">
                  <div className="relative">
                    <img src="/image/lovereport/p5.webp" alt="Premium" className="rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)]" />
                    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[var(--accent-gold)]/10 blur-[60px] rounded-full"></div>
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-5xl font-elegant font-bold text-white mb-8 leading-tight">
                      소장하고 싶은 <br/>
                      <span className="text-[var(--accent-gold)]">프리미엄 연애 리포트</span>
                    </h2>
                    <div className="space-y-6 text-lg text-white/70 leading-relaxed break-keep">
                      <p>
                        선천코드 연애 리포트는 한 번 읽고 끝나는 결과지가 아니라, <span className="text-white">당신의 사랑을 다시 바라보게 하는 개인 맞춤형 감성 리포트</span>입니다.
                      </p>
                      <p>
                        당신의 연애 성향, 반복되는 관계 패턴, 끌림과 불안의 이유, 그리고 더 나은 사랑을 위한 방향성을 백도화만의 언어로 정성스럽게 정리해드립니다.
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </section>

            {/* 6. Report Notice Section */}
            <section className="mb-32">
              <Reveal>
                <div className="gungjung-glass p-8 md:p-12 border-white/5">
                  <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                    <i className="fas fa-info-circle text-[var(--accent-gold)]"></i>
                    리포트 신청 전 안내
                  </h2>
                  <div className="grid md:grid-cols-2 gap-10">
                    <ul className="space-y-4">
                      {[
                        "본 상품은 디지털 리포트(PDF) 상품입니다.",
                        "결제 완료 후 입력하신 사주 정보를 바탕으로 제작됩니다.",
                        "제작 기간은 영업일 기준 2~5일 정도 소요됩니다.",
                        "제작 시작 이후에는 단순 변심 환불이 제한됩니다."
                      ].map((txt, i) => (
                        <li key={i} className="flex items-start gap-3 text-white/50 text-sm md:text-base">
                          <span className="text-[var(--accent-gold)] mt-1.5">•</span>
                          <span>{txt}</span>
                        </li>
                      ))}
                    </ul>
                    <ul className="space-y-4">
                      {[
                        "입력 정보가 부정확할 경우 해석에 차이가 있을 수 있습니다.",
                        "의학적·법률적·투자적 판단을 대신하지 않습니다.",
                        "개인의 자기이해와 관계 성찰을 위해 활용해주세요.",
                        "타인에게 무단 전재 및 배포를 금합니다."
                      ].map((txt, i) => (
                        <li key={i} className="flex items-start gap-3 text-white/50 text-sm md:text-base">
                          <span className="text-[var(--accent-gold)] mt-1.5">•</span>
                          <span>{txt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            </section>

            {/* 7. Final CTA Section */}
            <section className="relative overflow-hidden rounded-[40px] py-24 text-center">
              <div className="absolute inset-0">
                <img src="/image/lovereport/p6.webp" alt="CTA BG" className="w-full h-full object-cover opacity-30" />
                <div className="absolute inset-0 bg-[#0a0514]/80"></div>
              </div>
              <Reveal>
                <div className="relative z-10 px-6">
                  <h2 className="text-4xl md:text-6xl font-elegant font-bold text-white mb-8 leading-tight">
                    사랑의 흐름을 <span className="text-[var(--accent-gold)]">바꾸는 시작</span>
                  </h2>
                  <p className="text-xl text-white/70 max-w-2xl mx-auto mb-12 leading-relaxed break-keep">
                    반복되는 사랑에는 이유가 있습니다. 그리고 그 이유를 아는 순간, 당신의 연애는 달라질 수 있습니다.<br/><br/>
                    <span className="text-white font-medium">나를 아는 것에서부터, 당신의 진짜 연애는 시작됩니다.</span>
                  </p>
                  <Link 
                    href="/checkout?productId=baekdohwa-report"
                    className="btn-primary inline-flex items-center justify-center px-16 py-6 rounded-full font-bold text-2xl shadow-[0_0_50px_rgba(212,178,167,0.4)] hover:scale-105 transition-transform"
                  >
                    선천코드 연애 리포트 신청하기
                  </Link>
                </div>
              </Reveal>
            </section>

            {/* Footer Policies */}
            <div className="mt-20 flex justify-center gap-8 text-[10px] uppercase tracking-widest text-white/20">
              <Link href="/privacy" className="hover:text-white transition-colors">개인정보처리방침</Link>
              <Link href="/terms" className="hover:text-white transition-colors">이용약관 및 환불정책</Link>
            </div>

          </div>
        </div>

        <Footer />
      </GlobalBackground>
    </main>
  )
}
