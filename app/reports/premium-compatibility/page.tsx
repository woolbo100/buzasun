'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Reveal from '@/components/Reveal'
import GlobalBackground from '@/components/GlobalBackground'
import Link from 'next/link'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { supabase } from '@/lib/supabase'
import { useState, useEffect } from 'react'

export default function PremiumCompatibilityPage() {
  useScrollAnimation()
  const [dbPrice, setDbPrice] = useState<number | null>(null)

  useEffect(() => {
    async function fetchPrice() {
      const { data } = await supabase
        .from('products')
        .select('price')
        .eq('slug', 'premium-compatibility')
        .single()
      if (data?.price) setDbPrice(data.price)
    }
    fetchPrice()
  }, [])

  const recommendations = [
    '상대와의 관계 흐름을 더 깊이 알고 싶은 분',
    '반복되는 갈등의 이유가 궁금한 분',
    '서로의 끌림과 거리감을 알고 싶은 분',
    '재회 전, 관계 가능성을 확인하고 싶은 분',
    '결혼/장기연애 전 궁합 흐름을 보고 싶은 분',
  ]

  const contents = [
    { title: '01 두 사람의 기본 선천코드 흐름', desc: '각자가 가진 본연의 기질이 만났을 때 형성되는 에너지의 합을 분석합니다.' },
    { title: '02 서로에게 끌리는 이유', desc: '무의식이 상대에게 반응했던 근본적인 이유와 첫 끌림의 원천을 해독합니다.' },
    { title: '03 관계에서 반복되는 갈등 패턴', desc: '두 사람 사이에서 유독 반복되는 충돌 지점과 그 이면의 코드를 짚어냅니다.' },
    { title: '04 감정 표현 방식의 차이', desc: '서로 다른 사랑의 언어와 감정을 전달하는 방식의 격차를 이해합니다.' },
    { title: '05 애정의 속도와 거리감', desc: '서로가 원하는 관계의 친밀도와 감정이 무르익는 시간차를 분석합니다.' },
    { title: '06 관계가 깊어지는 조건', desc: '단순한 열정을 넘어 신뢰와 유대감을 쌓기 위해 필요한 핵심 요소를 제안합니다.' },
    { title: '07 주의해야 할 관계의 약점', desc: '외부 상황이나 성격 차이로 인해 관계가 흔들릴 수 있는 취약점을 미리 파악합니다.' },
    { title: '08 앞으로의 관계 조언', desc: '두 사람의 흐름이 가장 아름답게 조화를 이룰 수 있는 실질적인 가이드를 제공합니다.' },
  ]

  const deliveryInfo = [
    { title: 'PDF 리포트 제공', desc: '고급스러운 디지털 문서 형태', icon: 'fa-file-pdf' },
    { title: '맞춤형 분석', desc: '두 사람의 생년월일 기반', icon: 'fa-user-friends' },
    { title: '제작 기간', desc: '영업일 기준 2~5일 소요', icon: 'fa-clock' },
    { title: '안전한 전달', desc: '이메일 또는 개별 전송', icon: 'fa-paper-plane' },
  ]

  const faqs = [
    { q: '상대방의 출생시간을 몰라도 가능한가요?', a: '가능합니다. 다만 일부 세부 해석은 제한될 수 있습니다.' },
    { q: '재회 상담처럼 활용할 수 있나요?', a: '재회 가능성을 단정하지는 않지만, 관계 흐름과 타이밍을 이해하는 데 도움을 드립니다.' },
    { q: '결과는 언제 받을 수 있나요?', a: '정보 입력 완료 후 영업일 기준 2~5일 이내 제공됩니다.' },
    { q: '두 사람 모두의 정보가 필요한가요?', a: '정확한 분석을 위해 두 사람의 생년월일 정보가 필요합니다.' },
  ]

  const productPrice = 89000

  return (
    <main className="relative min-h-screen bg-[#0a0514]">
      <GlobalBackground src="/image/love-code-bg.png">
        <Navigation />

        <div className="relative z-10 pt-44 pb-20">
          <div className="container-premium">
            
            {/* 1. Hero Section */}
            <section className="text-center mb-24">
              <Reveal delayMs={100}>
                <div className="mb-8">
                  <span className="inline-block px-5 py-1.5 rounded-full text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase"
                    style={{
                      background: 'rgba(216, 191, 163, 0.1)',
                      border: '1px solid rgba(212, 175, 55, 0.3)',
                      color: 'var(--accent-gold-light)',
                    }}>
                    PREMIUM COMPATIBILITY READING
                  </span>
                </div>
                <h1 className="text-4xl md:text-6xl font-elegant font-bold mb-8 text-white leading-tight">
                  프리미엄 <span className="text-[var(--accent-gold)]">궁합 리포트</span>
                </h1>
                <p className="text-lg md:text-xl text-[#EDE6DA] opacity-80 leading-relaxed mb-12 max-w-2xl mx-auto break-keep font-elegant">
                  서로에게 끌리는 이유, 반복해서 부딪히는 지점,<br className="hidden md:block" /> 
                  그리고 이 관계가 깊어질 수 있는 방향을<br className="hidden md:block" /> 
                  백도화식 선천코드로 읽어드립니다.
                </p>
                <Link 
                  href={`/checkout?productId=premium-compatibility-report`}
                  className="btn-primary inline-flex items-center px-12 py-5 rounded-xl font-bold text-lg shadow-[0_0_30px_rgba(212,178,167,0.2)] hover:scale-105 transition-all duration-500"
                >
                  프리미엄 궁합 리포트 신청하기
                </Link>
                <p className="mt-6 text-[var(--accent-gold)] font-bold tracking-widest text-xl font-elegant">
                  ₩{(dbPrice || 129000).toLocaleString()}
                </p>
              </Reveal>
            </section>

            {/* 2. 이런 분께 추천합니다 */}
            <section className="mb-24">
              <Reveal>
                <div className="gungjung-glass p-8 md:p-12 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent-gold)] opacity-[0.03] blur-3xl rounded-full"></div>
                  <h2 className="text-2xl font-elegant font-bold mb-10 text-white border-l-4 border-[var(--accent-gold)] pl-5">
                    이런 분께 추천합니다
                  </h2>
                  <div className="grid gap-4">
                    {recommendations.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.05] transition-all">
                        <div className="w-2 h-2 rounded-full bg-[var(--accent-gold)] opacity-60"></div>
                        <span className="text-[#EDE6DA] opacity-80 text-base md:text-lg font-light">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </section>

            {/* 3. 리포트에서 다루는 내용 */}
            <section className="mb-24">
              <Reveal>
                <h2 className="text-3xl font-elegant font-bold text-center mb-16 text-white tracking-widest">
                  리포트 <span className="text-[var(--accent-gold)]">주요 분석 항목</span>
                </h2>
                <div className="grid gap-6">
                  {contents.map((item, idx) => (
                    <div key={idx} className="gungjung-glass p-8 group hover:bg-white/[0.04] transition-all duration-500 border-white/[0.05] hover:border-[var(--accent-gold-soft)]">
                      <div className="flex flex-col md:flex-row md:items-center gap-6">
                        <div className="w-14 h-14 rounded-full bg-[var(--primary-burgundy)]/40 border border-[var(--accent-gold-soft)] flex items-center justify-center text-[var(--accent-gold)] font-elegant text-xl font-bold shrink-0 shadow-[0_0_15px_rgba(212,178,167,0.1)] group-hover:scale-110 transition-transform">
                          {idx + 1}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2 text-white group-hover:text-[var(--accent-gold-light)] transition-colors">{item.title}</h3>
                          <p className="text-[#EDE6DA] opacity-50 leading-relaxed font-light">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </section>

            {/* 4. 제공 방식 */}
            <section className="mb-24">
              <Reveal>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {deliveryInfo.map((info, idx) => (
                    <div key={idx} className="gungjung-glass p-6 text-center border-white/[0.03]">
                      <div className="w-10 h-10 mx-auto mb-4 text-[var(--accent-gold)] opacity-70">
                        <i className={`fas ${info.icon} text-2xl`}></i>
                      </div>
                      <h3 className="text-sm font-bold text-[var(--accent-gold-light)] mb-1">{info.title}</h3>
                      <p className="text-[10px] text-[#EDE6DA] opacity-40">{info.desc}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </section>

            {/* 5. 브랜드 메시지 */}
            <section className="mb-24 py-20 px-8 text-center rounded-3xl border border-[rgba(216,191,163,0.1)] relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-b from-[#1a0f2e]/40 to-transparent"></div>
               <Reveal>
                <div className="relative z-10">
                  <h2 className="text-2xl md:text-3xl font-elegant font-bold mb-10 text-white">
                    백도화식 궁합은 <span className="text-[var(--accent-gold)]">무엇이 다른가요?</span>
                  </h2>
                  <div className="space-y-6 text-[#EDE6DA] opacity-80 leading-loose max-w-2xl mx-auto break-keep text-base md:text-lg font-light">
                    <p>백도화의 궁합 리포트는 단순히<br className="md:hidden" /> “잘 맞는다 / 안 맞는다”를 말하지 않습니다.</p>
                    <p>
                      두 사람이 왜 끌렸는지, 어디에서 오해가 생기는지,<br />
                      무엇을 이해해야 관계가 오래 갈 수 있는지를<br />
                      <span className="text-[var(--accent-gold-light)] font-bold">관계의 흐름으로 읽어드립니다.</span>
                    </p>
                  </div>
                </div>
               </Reveal>
            </section>

            {/* 6. FAQ */}
            <section className="mb-24">
              <Reveal>
                <h2 className="text-3xl font-elegant font-bold text-center mb-12 text-white">자주 묻는 질문</h2>
                <div className="space-y-4">
                  {faqs.map((faq, idx) => (
                    <details key={idx} className="gungjung-glass group overflow-hidden border-white/[0.05]">
                      <summary className="p-6 cursor-pointer list-none flex justify-between items-center text-[#EDE6DA] font-medium focus:outline-none hover:bg-white/[0.02] transition-all">
                        <span className="flex items-center gap-3">
                          <span className="text-[var(--accent-gold)] font-bold">Q.</span>
                          {faq.q}
                        </span>
                        <i className="fas fa-chevron-down text-xs transition-transform group-open:rotate-180 opacity-40"></i>
                      </summary>
                      <div className="px-8 pb-6 text-[#EDE6DA] opacity-50 leading-relaxed text-sm md:text-base border-t border-white/[0.02] pt-4">
                        <span className="text-[var(--accent-gold-light)] font-bold mr-2">A.</span>
                        {faq.a}
                      </div>
                    </details>
                  ))}
                </div>
              </Reveal>
            </section>

            {/* 7. 유의사항 */}
            <section className="mb-24">
              <Reveal>
                <div className="gungjung-glass p-8 md:p-12 border-[rgba(197,139,160,0.2)] bg-[#1a0f2e]/30">
                  <h2 className="text-xl font-elegant font-bold mb-8 text-[#C58BA0] flex items-center gap-3">
                    <i className="fas fa-info-circle opacity-60"></i>
                    구매 전 확인사항
                  </h2>
                  <ul className="space-y-4 text-sm text-[#EDE6DA] opacity-60 leading-relaxed font-light">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-[#C58BA0] shrink-0"></span>
                      <span>본 리포트는 관계 이해를 돕기 위한 해석 콘텐츠이며 특정 결과를 보장하지 않습니다.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-[#C58BA0] shrink-0"></span>
                      <span>출생시간이 없을 경우 일부 세부 해석이 제한될 수 있습니다.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-[#C58BA0] shrink-0"></span>
                      <span>결제 후 정보 입력이 완료되면 즉시 제작이 시작됩니다.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-[#C58BA0] shrink-0"></span>
                      <span>제작 시작 후에는 디지털 맞춤 제작 특성상 환불이 제한될 수 있습니다.</span>
                    </li>
                  </ul>
                </div>
              </Reveal>
            </section>

            {/* 8. 하단 CTA */}
            <section className="text-center py-20 bg-gradient-to-br from-[#1a0f2e] to-[#0a0514] rounded-3xl border border-[rgba(216,191,163,0.15)] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <Reveal>
                <div className="px-6">
                  <p className="text-xl md:text-2xl font-elegant text-[#EDE6DA] mb-10 leading-relaxed break-keep opacity-90">
                    “이 관계가 우연이 아니라면,<br /> 이제 두 사람의 흐름을 조금 더 깊이 들여다볼 시간입니다.”
                  </p>
                  <Link 
                    href={`/checkout?productId=premium-compatibility-report`}
                    className="btn-primary inline-flex items-center px-12 py-5 rounded-xl font-bold text-xl shadow-[0_0_30px_rgba(212,178,167,0.3)] hover:scale-105 transition-all duration-500"
                  >
                    프리미엄 궁합 리포트 신청하기
                  </Link>
                </div>
              </Reveal>
            </section>

          </div>
        </div>

        <Footer />
      </GlobalBackground>
    </main>
  )
}
