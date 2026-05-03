'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Reveal from '@/components/Reveal'
import GlobalBackground from '@/components/GlobalBackground'
import Link from 'next/link'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function AbundanceSecretPage() {
  useScrollAnimation()

  const reviews = [
    { id: 1, author: '한성진님', content: '끌어당김에 대해 막연하게만 알고 있었는데, 이 책을 통해 왜 제 상태가 중요했는지 뼈저리게 느꼈습니다.', rating: 5 },
    { id: 2, author: '김지혜님', content: '돈에 대한 불안감이 항상 있었는데, 구조적으로 이해하고 나니 마음이 훨씬 가벼워졌어요. 실천 가이드가 구체적이라 좋습니다.', rating: 5 },
    { id: 3, author: '정다은님', content: '풍요는 물질적인 것 이상이라는 걸 깨달았습니다. 사랑과 돈의 연결 고리를 설명한 부분이 가장 인상적이었어요.', rating: 5 },
  ]

  const faqs = [
    { 
      q: '자기계발서인가요?', 
      a: '단순한 동기부여가 아니라 풍요를 만드는 사고 구조와 감정 패턴을 정리한 실전 가이드(PDF)입니다.' 
    },
    { 
      q: '상담이 포함되나요?', 
      a: '상담은 포함되지 않으며 PDF 전자책 형태로 제공되는 지식 콘텐츠입니다.' 
    },
    { 
      q: '언제 받을 수 있나요?', 
      a: '결제 및 정보 확인 후 신청하신 이메일이나 카카오톡으로 전달됩니다.' 
    },
  ]

  return (
    <main className="relative min-h-screen bg-[#0a0514]">
      <GlobalBackground src="/image/love-code-bg.png">
        <Navigation />

        <div className="relative z-10 pt-56 pb-20">
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
                  BAEKDOHWA ABUNDANCE GUIDE
                </span>
                <h1 className="text-4xl md:text-6xl font-elegant font-bold mb-8 text-white">
                  풍요비책 <span style={{ color: 'var(--accent-gold)' }}>가이드</span>
                </h1>
                <p className="text-lg md:text-xl text-bd-ivory leading-relaxed mb-10 max-w-2xl mx-auto break-keep">
                  상태를 바꾸면 현실이 따라옵니다. <br/> 풍요 마인드와 에너지 흐름을 정리하는 실전 가이드
                </p>
                <Link 
                  href="/checkout?productId=abundance-secret"
                  className="btn-primary inline-block px-10 py-4 rounded-lg font-bold text-lg"
                >
                  풍요비책 받아보기
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
                        <span className="text-[var(--accent-gold)] font-bold">49,000원</span>
                      </li>
                      <li className="flex justify-between border-b border-[var(--glass-border)] pb-2">
                        <span>제공 형식</span>
                        <span>PDF 전자책</span>
                      </li>
                      <li className="flex justify-between border-b border-[var(--glass-border)] pb-2">
                        <span>분량</span>
                        <span>약 50~70p 예정</span>
                      </li>
                      <li className="flex justify-between border-b border-[var(--glass-border)] pb-2">
                        <span>제공 방식</span>
                        <span>결제 후 이메일 발송</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-[rgba(255,255,255,0.02)] p-6 rounded-xl border border-[var(--glass-border)]">
                    <h3 className="text-lg font-bold mb-4 text-[var(--accent-gold-light)]">추천 대상</h3>
                    <ul className="space-y-2 text-sm text-bd-gray">
                      {[
                        "늘 돈과 관계에서 같은 패턴이 반복되는 분",
                        "풍요를 끌어당기는 사고방식을 만들고 싶은 분",
                        "불안과 부족감에서 벗어나고 싶은 분",
                        "현실을 바꾸는 에너지 구조를 이해하고 싶은 분"
                      ].map((text, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[var(--accent-gold)]">•</span>
                          <span>{text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* 3. 전자책에 담긴 내용 */}
            <section className="mb-20">
              <Reveal>
                <h2 className="text-3xl font-elegant font-bold text-center mb-12 text-white">
                  전자책에 <span style={{ color: 'var(--accent-gold)' }}>담긴 내용</span>
                </h2>
                <div className="grid gap-6">
                  {[
                    '왜 풍요는 노력보다 상태에서 시작되는가',
                    '돈과 감정이 연결되는 방식',
                    '부족감이 반복되는 무의식 패턴',
                    '사랑과 풍요의 에너지 연결',
                    '끌어당김보다 먼저 바꿔야 하는 기준',
                    '현실을 바꾸는 질문의 방향',
                    '풍요를 유지하는 사람들의 습관',
                  ].map((title, idx) => (
                    <div key={idx} className="gungjung-glass p-6 flex items-start gap-5 group">
                      <div className="w-10 h-10 rounded-full bg-[var(--primary-burgundy)] border border-[var(--accent-gold-soft)] flex items-center justify-center text-[var(--accent-gold)] font-bold shrink-0 group-hover:scale-110 transition-transform">
                        {idx + 1}
                      </div>
                      <div className="flex items-center">
                        <h3 className="text-lg md:text-xl font-bold text-white">{title}</h3>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </section>

            {/* 4. 이런 분께 추천합니다 */}
            <section className="mb-20">
              <Reveal>
                <h2 className="text-3xl font-elegant font-bold text-center mb-12 text-white">이런 분께 추천합니다</h2>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "항상 돈 앞에서 불안해지는 분",
                    "풍요를 느끼기보다 부족함에 익숙한 분",
                    "사랑과 돈이 늘 함께 흔들리는 분",
                    "현실을 근본부터 바꾸고 싶은 분"
                  ].map((text, i) => (
                    <div key={i} className="gungjung-glass p-6 text-center flex items-center justify-center min-h-[120px] hover:border-accent-gold/40 transition-all group">
                      <p className="text-bd-ivory group-hover:text-white break-keep">{text}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </section>

            <div className="gold-divider mb-20" />

            {/* 5. 후기 섹션 */}
            <section className="mb-20">
              <Reveal>
                <h2 className="text-3xl font-elegant font-bold text-center mb-12 text-white">풍요를 만난 사람들의 후기</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {reviews.map((review) => (
                    <div key={review.id} className="gungjung-glass p-6 flex flex-col h-full">
                      <div className="flex gap-1 mb-4 text-[var(--accent-gold)]">
                        {[...Array(5)].map((_, i) => (
                          <i key={i} className="fas fa-star text-xs"></i>
                        ))}
                      </div>
                      <p className="text-bd-gray text-sm leading-relaxed mb-6 flex-grow italic">"{review.content}"</p>
                      <div className="text-right">
                        <span className="text-xs text-[var(--accent-gold-deep)] font-medium">{review.author}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </section>

            {/* 6. FAQ 섹션 */}
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

            {/* 6-1. 구매 전 확인사항 */}
            <section className="mb-20">
              <Reveal>
                <div className="gungjung-glass p-8 md:p-12 border-[rgba(212,175,55,0.2)]">
                  <h2 className="text-2xl font-elegant font-bold text-center mb-10 text-[var(--accent-gold)]">
                    구매 전 꼭 확인해주세요
                  </h2>
                  
                  <div className="space-y-10 text-sm md:text-base leading-relaxed">
                    <div className="text-center text-bd-ivory opacity-90 max-w-2xl mx-auto break-keep">
                      <p>백도화의 전자책은 디지털 다운로드 상품으로 제공됩니다.</p>
                      <p className="mt-2">결제 완료 후 즉시 또는 순차적으로 다운로드가 가능하며, 디지털 콘텐츠의 특성상 단순 변심에 의한 환불은 어렵습니다. 신중한 구매 부탁드립니다.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 pt-8 border-t border-[rgba(212,175,55,0.1)]">
                      <div>
                        <h3 className="text-lg font-bold text-[var(--accent-gold)] mb-4 flex items-center gap-2">
                          <i className="fas fa-check-circle"></i> 환불 가능 안내
                        </h3>
                        <ul className="space-y-2 text-bd-gray text-sm">
                          <li>• 중복 결제가 발생한 경우</li>
                          <li>• 시스템 오류로 인해 정상적인 결제가 이루어지지 않은 경우</li>
                          <li>• 파일 손상 또는 다운로드 불가 등 정상적인 이용이 불가능한 경우</li>
                        </ul>
                        <p className="mt-4 text-xs text-[var(--accent-gold-soft)]">확인 후 전액 환불 또는 재발송이 가능합니다.</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-[#BA8D7E] mb-4 flex items-center gap-2">
                          <i className="fas fa-times-circle"></i> 환불이 어려운 경우
                        </h3>
                        <ul className="space-y-2 text-bd-gray text-sm">
                          <li>• 다운로드가 완료된 경우</li>
                          <li>• 고객의 단순 변심</li>
                          <li>• 구매 후 개인적인 기대와 차이에 의한 경우</li>
                          <li>• 디지털 콘텐츠 특성상 이미 이용이 가능한 상태인 경우</li>
                        </ul>
                        <p className="mt-4 text-xs text-[#BA8D7E]/60">복제가 가능한 디지털 상품의 특성상 다운로드 이후 환불이 제한됩니다.</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 pt-8 border-t border-[rgba(212,175,55,0.1)]">
                      <div>
                        <h3 className="text-lg font-bold text-[var(--accent-gold-light)] mb-4 flex items-center gap-2">
                          <i className="fas fa-book-open"></i> 이용 안내
                        </h3>
                        <p className="text-bd-gray text-sm break-keep">
                          구매 후 등록된 이메일 또는 다운로드 페이지를 통해 전자책을 확인하실 수 있습니다. 수신이 확인되지 않는 경우 스팸함 또는 프로모션함도 함께 확인 부탁드립니다.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-[var(--accent-gold-light)] mb-4 flex items-center gap-2">
                          <i className="fas fa-info-circle"></i> 문의 안내
                        </h3>
                        <p className="text-bd-gray text-sm break-keep">
                          다운로드 오류 또는 이용 관련 문의는 고객센터를 통해 안내드립니다. 당신의 시작이 조금 더 가볍고 선명해질 수 있도록 정성껏 준비했습니다.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </section>

            {/* 7. 하단 CTA */}
            <section className="text-center py-20 bg-[rgba(59,15,27,0.2)] rounded-3xl border border-[var(--glass-border)]">
              <Reveal>
                <h2 className="text-2xl md:text-3xl font-elegant font-bold mb-8 text-white break-keep">
                  풍요는 기다리는 것이 아니라 만드는 것입니다
                </h2>
                <Link 
                  href="/checkout?productId=abundance-secret"
                  className="btn-primary inline-block px-12 py-5 rounded-lg font-bold text-xl shadow-[0_0_30px_rgba(212,178,167,0.2)]"
                >
                  풍요비책 받아보기
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
