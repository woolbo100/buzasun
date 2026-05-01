'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Reveal from '@/components/Reveal'
import GlobalBackground from '@/components/GlobalBackground'
import Link from 'next/link'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { supabase } from '@/lib/supabase'

export default function DynamicReportPage() {
  const params = useParams()
  const slug = params.slug as string
  const [product, setProduct] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useScrollAnimation()

  useEffect(() => {
    async function fetchProduct() {
      try {
        setLoading(true)
        const { data, error } = await supabase
          .from('products')
          .select('*')
          .eq('slug', slug)
          .eq('is_active', true)
          .single()

        if (!error && data) {
          setProduct(data)
        }
      } catch (err) {
        console.error("DynamicReportPage: Failed to fetch product", err)
      } finally {
        setLoading(false)
      }
    }
    fetchProduct()
  }, [slug])

  const reviews = [
    { id: 1, author: '민지님', content: '제가 왜 항상 비슷한 사람만 만나고 힘들어했는지 이제야 알 것 같아요. 제 연애 패턴을 객관적으로 보게 되니 마음이 한결 편안해졌습니다.', rating: 5 },
    { id: 2, author: '지훈님', content: '단순한 사주 풀이인 줄 알았는데, 심리학적인 관점에서 해석해주셔서 훨씬 이해가 잘 됐습니다. 앞으로 어떤 점을 주의해야 할지 명확해졌어요.', rating: 5 },
    { id: 3, author: '서연님', content: 'PDF로 정리되어 있어서 언제든 다시 꺼내 볼 수 있어 좋아요. 내용이 정말 알차고 고급스러운 느낌이라 선물받은 기분입니다.', rating: 5 },
  ]

  const faqs = [
    { 
      q: '사주인가요?', 
      a: '전통 명리 기반의 선천코드를 현대 심리적 언어로 해석한 리포트입니다. 단순한 운세 풀이가 아닌, 타고난 기질과 심리 구조를 분석합니다.' 
    },
    { 
      q: '상담인가요?', 
      a: '실시간 상담이 아니라 신청 시 작성해주신 정보를 바탕으로 분석하여 전달해드리는 PDF 분석 리포트입니다.' 
    },
    { 
      q: '언제 받을 수 있나요?', 
      a: '결제 및 정보 확인 후 영업일 기준 보통 2~3일 이내에 신청하신 이메일이나 카카오톡으로 전달됩니다.' 
    },
  ]

  if (loading) {
    return (
      <main className="relative min-h-screen bg-[#0a0514] flex items-center justify-center">
        <p className="text-accent-gold animate-pulse">리포트 정보를 불러오는 중...</p>
      </main>
    )
  }

  // 데이터가 없을 경우 (Fallback)
  const displayData = product || {
    name: "선천코드 리포트",
    description: "선천코드 분석을 통해 반복되는 연애 패턴, 관계 성향, 끌리는 인연의 흐름을 정리해드립니다.",
    price: 49000,
    slug: "love-code-report"
  }

  return (
    <main className="relative min-h-screen bg-[#0a0514]">
      <GlobalBackground src="/image/main.png">
        <Navigation />

        <div className="relative z-10 pt-32 pb-20">
          <div className="max-w-4xl mx-auto px-4">
            
            {/* 1. 히어로 섹션 */}
            <section className="text-center mb-20">
              <Reveal delayMs={100}>
                <span className="inline-block px-4 py-1 rounded-full text-xs font-medium mb-6"
                  style={{
                    background: 'rgba(59, 15, 27, 0.5)',
                    border: '1px solid rgba(216, 191, 163, 0.3)',
                    color: 'var(--accent-gold-light)',
                    letterSpacing: '0.1em'
                  }}>
                  BAEKDOHWA SPECIAL REPORT
                </span>
                <h1 className="text-4xl md:text-6xl font-elegant font-bold mb-8 text-white">
                  {displayData.name.split(' ')[0]} <span style={{ color: 'var(--accent-gold)' }}>{displayData.name.split(' ').slice(1).join(' ')}</span>
                </h1>
                <p className="text-lg md:text-xl text-bd-ivory leading-relaxed mb-10 max-w-2xl mx-auto break-keep">
                  {displayData.description}
                </p>
                <Link 
                  href={`/apply/${displayData.slug}`}
                  className="btn-primary inline-block px-10 py-4 rounded-lg font-bold text-lg"
                >
                  리포트 신청하기
                </Link>
              </Reveal>
            </section>

            {/* 2. 상품 요약 카드 */}
            <Reveal delayMs={300}>
              <div className="gungjung-glass p-8 md:p-12 mb-20">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h2 className="text-2xl font-bold mb-6 text-white border-l-4 border-[var(--accent-gold)] pl-4">상품 정보</h2>
                    <ul className="space-y-4 text-bd-ivory">
                      <li className="flex justify-between border-b border-[var(--glass-border)] pb-2">
                        <span>가격</span>
                        <span className="text-[var(--accent-gold)] font-bold">{displayData.price?.toLocaleString()}원</span>
                      </li>
                      <li className="flex justify-between border-b border-[var(--glass-border)] pb-2">
                        <span>제공 형식</span>
                        <span>PDF 리포트</span>
                      </li>
                      <li className="flex justify-between border-b border-[var(--glass-border)] pb-2">
                        <span>소요 기간</span>
                        <span>결제 후 2~3일 이내</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-[rgba(255,255,255,0.02)] p-6 rounded-xl border border-[var(--glass-border)]">
                    <h3 className="text-lg font-bold mb-4 text-[var(--accent-gold-light)]">추천 대상</h3>
                    <ul className="space-y-2 text-sm text-bd-gray">
                      <li className="flex items-start gap-2">
                        <span className="text-[var(--accent-gold)]">•</span>
                        <span>반복되는 연애 패턴이 궁금한 분</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[var(--accent-gold)]">•</span>
                        <span>상대와의 관계 흐름을 알고 싶은 분</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[var(--accent-gold)]">•</span>
                        <span>재회/궁합보다 먼저 나의 연애 구조를 알고 싶은 분</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* 3. 리포트에 포함되는 내용 */}
            <section className="mb-20">
              <Reveal>
                <h2 className="text-3xl font-elegant font-bold text-center mb-12 text-white">
                  리포트 <span style={{ color: 'var(--accent-gold)' }}>구성 안내</span>
                </h2>
                <div className="grid gap-6">
                  {[
                    { title: '타고난 연애 성향', desc: '내가 가진 근본적인 사랑의 에너지와 태도를 분석합니다.' },
                    { title: '반복되는 관계 패턴', desc: '왜 항상 비슷한 문제로 힘들어하는지 무의식의 흐름을 짚어냅니다.' },
                    { title: '내가 끌리는 사람의 유형', desc: '나의 결핍이나 에너지가 무의식적으로 찾는 인연의 특징을 설명합니다.' },
                    { title: '관계에서 무의식적으로 반복하는 선택', desc: '결정적인 순간에 내가 내리는 선택의 이유를 파악합니다.' },
                    { title: '더 나은 관계를 위한 조언', desc: '나의 선천코드를 긍정적으로 활용하여 행복한 연애를 하는 방법을 제안합니다.' },
                  ].map((item, idx) => (
                    <div key={idx} className="gungjung-glass p-6 flex items-start gap-5 group">
                      <div className="w-10 h-10 rounded-full bg-[var(--primary-burgundy)] border border-[var(--accent-gold-soft)] flex items-center justify-center text-[var(--accent-gold)] font-bold shrink-0 group-hover:scale-110 transition-transform">
                        {idx + 1}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                        <p className="text-bd-gray leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </section>

            <div className="gold-divider mb-20" />

            {/* 4. 후기 섹션 */}
            <section className="mb-20">
              <Reveal>
                <h2 className="text-3xl font-elegant font-bold text-center mb-12 text-white">생생한 구매 후기</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {reviews.map((review) => (
                    <div key={review.id} className="gungjung-glass p-6 flex flex-col h-full">
                      <div className="flex gap-1 mb-4 text-[var(--accent-gold)]">
                        {[...Array(5)].map((_, i) => (
                          <i key={i} className="fas fa-star text-xs"></i>
                        ))}
                      </div>
                      <p className="text-bd-gray text-sm leading-relaxed mb-6 flex-grow">"{review.content}"</p>
                      <div className="text-right">
                        <span className="text-xs text-[var(--accent-gold-deep)] font-medium">{review.author}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </section>

            {/* 5. FAQ 섹션 */}
            <section className="mb-20">
              <Reveal>
                <h2 className="text-3xl font-elegant font-bold text-center mb-12 text-white">자주 묻는 질문</h2>
                <div className="space-y-4">
                  {faqs.map((faq, idx) => (
                    <details key={idx} className="gungjung-glass group overflow-hidden">
                      <summary className="p-6 cursor-pointer list-none flex justify-between items-center text-white font-medium focus:outline-none">
                        <span>Q. {faq.q}</span>
                        <i className="fas fa-chevron-down text-xs transition-transform group-open:rotate-180"></i>
                      </summary>
                      <div className="px-6 pb-6 text-bd-gray leading-relaxed">
                        A. {faq.a}
                      </div>
                    </details>
                  ))}
                </div>
              </Reveal>
            </section>

            {/* 6. 하단 CTA */}
            <section className="text-center py-20 bg-[rgba(59,15,27,0.2)] rounded-3xl border border-[var(--glass-border)]">
              <Reveal>
                <h2 className="text-2xl md:text-3xl font-elegant font-bold mb-8 text-white">
                  {displayData.name}, 지금 확인해보세요
                </h2>
                <Link 
                  href={`/apply/${displayData.slug}`}
                  className="btn-primary inline-block px-12 py-5 rounded-lg font-bold text-xl shadow-[0_0_30px_rgba(212,178,167,0.2)]"
                >
                  리포트 신청하기
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
