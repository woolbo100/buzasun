'use client'

import { useState, useEffect } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Reveal from '@/components/Reveal'
import GlobalBackground from '@/components/GlobalBackground'
import Link from 'next/link'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { supabase } from '@/lib/supabase'

export default function BaekdohwaReportPage() {
  const [product, setProduct] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useScrollAnimation()

  useEffect(() => {
    async function fetchProduct() {
      try {
        const { data, error } = await supabase
          .from('products')
          .select('*')
          .eq('slug', 'baekdohwa-report')
          .single()

        if (!error && data) {
          setProduct(data)
        }
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    fetchProduct()
  }, [])

  const reviews = [
    { id: 1, author: '민지님', content: '제가 왜 항상 비슷한 사람만 만나고 힘들어했는지 이제야 알 것 같아요. 제 연애 패턴을 객관적으로 보게 되니 마음이 한결 편안해졌습니다.', rating: 5 },
    { id: 2, author: '지훈님', content: '단순한 사주 풀이인 줄 알았는데, 심리학적인 관점에서 해석해주셔서 훨씬 이해가 잘 됐습니다. 앞으로 어떤 점을 주의해야 할지 명확해졌어요.', rating: 5 },
    { id: 3, author: '서연님', content: 'PDF로 정리되어 있어서 언제든 다시 꺼내 볼 수 있어 좋아요. 내용이 정말 알차고 고급스러운 느낌이라 선물받은 기분입니다.', rating: 5 },
  ]

  return (
    <main className="relative min-h-screen bg-[#0a0514]">
      <GlobalBackground src="/image/love-code-bg.png">
        <Navigation />

        <div className="relative z-10 pt-44 pb-20">
          <div className="container-premium">
            
            {/* 히어로 섹션 */}
            <section className="text-center mb-24">
              <Reveal delayMs={100}>
                <div className="mb-8">
                  <span className="inline-block px-5 py-1.5 rounded-full text-xs font-bold tracking-[0.3em] uppercase"
                    style={{
                      background: 'rgba(216, 191, 163, 0.1)',
                      border: '1px solid rgba(212, 175, 55, 0.3)',
                      color: 'var(--accent-gold-light)',
                    }}>
                    LOVE CODE ANALYSIS
                  </span>
                </div>
                <h1 className="text-4xl md:text-6xl font-elegant font-bold mb-8 text-white leading-tight">
                  선천코드 <span className="text-[var(--accent-gold)]">연애 리포트</span>
                </h1>
                <p className="text-lg md:text-xl text-[#EDE6DA] opacity-80 leading-relaxed mb-12 max-w-2xl mx-auto break-keep font-elegant">
                  당신의 타고난 기질과 연애 무의식을 분석하여,<br /> 
                  반복되는 연애 문제의 근본적인 원인과 솔루션을 제공합니다.
                </p>
                <Link 
                  href="/checkout?productId=baekdohwa-report"
                  className="btn-primary inline-flex items-center px-12 py-5 rounded-xl font-bold text-lg shadow-[0_0_30px_rgba(212,178,167,0.2)] hover:scale-105 transition-all duration-500"
                >
                  리포트 신청 및 결제하기
                </Link>
                <p className="mt-6 text-[var(--accent-gold)] font-bold tracking-widest text-xl font-elegant">
                  ₩{(product?.price || 39000).toLocaleString()}
                </p>
              </Reveal>
            </section>

            {/* 나머지 섹션들 (심플 버전) */}
            <section className="mb-24">
              <Reveal>
                <div className="gungjung-glass p-8 md:p-12">
                  <h2 className="text-2xl font-elegant font-bold mb-10 text-white border-l-4 border-[var(--accent-gold)] pl-5">
                    리포트 주요 분석 내용
                  </h2>
                  <div className="grid md:grid-cols-2 gap-8 text-bd-ivory">
                    <ul className="space-y-4">
                      <li>• 당신의 선천적 연애 기질 분석</li>
                      <li>• 무의식적 끌림의 패턴 해독</li>
                      <li>• 관계 유지를 방해하는 핵심 방어기제</li>
                    </ul>
                    <ul className="space-y-4">
                      <li>• 당신에게 맞는 최적의 파트너 유형</li>
                      <li>• 매력을 극대화하는 선천적 에너지 활용법</li>
                      <li>• 반복되는 이별을 멈추는 솔루션</li>
                    </ul>
                  </div>
                </div>
              </Reveal>
            </section>

            <section className="mb-24 text-center py-20 bg-gradient-to-br from-[#1a0f2e] to-[#0a0514] rounded-3xl border border-[rgba(216,191,163,0.15)]">
              <Reveal>
                <p className="text-xl md:text-2xl font-elegant text-[#EDE6DA] mb-10 leading-relaxed break-keep opacity-90">
                  “나를 아는 것에서부터,<br /> 당신의 진짜 연애는 시작됩니다.”
                </p>
                <Link 
                  href="/checkout?productId=baekdohwa-report"
                  className="btn-primary inline-flex items-center px-12 py-5 rounded-xl font-bold text-xl shadow-[0_0_30px_rgba(212,178,167,0.3)]"
                >
                  리포트 신청 및 결제하기
                </Link>
              </Reveal>
            </section>

          </div>
        </div>

        <Footer />
      </GlobalBackground>
    </main>
  )
}
