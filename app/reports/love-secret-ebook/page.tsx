'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Reveal from '@/components/Reveal'
import GlobalBackground from '@/components/GlobalBackground'
import Link from 'next/link'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function LoveSecretEbookPage() {
  useScrollAnimation()

  const reviews = [
    { id: 1, author: '이지은님', content: '연애할 때마다 제가 왜 그렇게 불안했는지 이제야 이해가 가요. 심리 상담을 받는 것처럼 마음이 차분해지는 책입니다.', rating: 5 },
    { id: 2, author: '박민수님', content: '남자인 제가 봐도 공감되는 내용이 많네요. 관계의 기술보다는 본질적인 마음가짐을 배우게 되어 유익했습니다.', rating: 5 },
    { id: 3, author: '최서윤님', content: '디자인이 너무 예뻐서 소장 가치도 충분해요. 전자책이지만 한 페이지 한 페이지 아껴서 읽게 되는 내용입니다.', rating: 5 },
  ]

  const faqs = [
    { 
      q: '사주 리포트인가요?', 
      a: '사주 풀이가 아니라 연애 패턴과 관계 심리를 쉽게 정리한 전자책(PDF)입니다.' 
    },
    { 
      q: '상담이 포함되나요?', 
      a: '상담은 포함되지 않으며, PDF 전자책 형태로 제공되는 지식 콘텐츠입니다.' 
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

        <div className="relative z-10 pt-44 pb-20">
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
                  BAEKDOHWA SECRET E-BOOK
                </span>
                <h1 className="text-4xl md:text-6xl font-elegant font-bold mb-8 text-white">
                  연애비급 <span style={{ color: 'var(--accent-gold)' }}>전자책</span>
                </h1>
                <p className="text-lg md:text-xl text-bd-ivory leading-relaxed mb-10 max-w-2xl mx-auto break-keep">
                  반복되는 연애 패턴을 이해하고, 관계의 흐름을 다르게 바라보는 백도화의 연애 해석서
                </p>
                <Link 
                  href="/order/love-secret-ebook"
                  className="btn-primary inline-block px-10 py-4 rounded-lg font-bold text-lg"
                >
                  연애비급 받아보기
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
                        <span className="text-[var(--accent-gold)] font-bold">19,000원</span>
                      </li>
                      <li className="flex justify-between border-b border-[var(--glass-border)] pb-2">
                        <span>제공 형식</span>
                        <span>PDF 전자책</span>
                      </li>
                      <li className="flex justify-between border-b border-[var(--glass-border)] pb-2">
                        <span>분량</span>
                        <span>약 40~60p 예정</span>
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
                        "늘 비슷한 연애 패턴이 반복되는 분",
                        "상대의 말과 행동에 쉽게 흔들리는 분",
                        "재회보다 먼저 관계 흐름을 정리하고픈 분",
                        "연애를 감정이 아닌 구조로 보고 싶은 분"
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
                    '왜 나는 비슷한 사람에게 끌리는가',
                    '관계 초반에 놓치기 쉬운 신호',
                    '불안형 연애 패턴 이해하기',
                    '밀당보다 중요한 관계의 균형',
                    '오래 가는 관계를 만드는 말의 온도',
                    '사랑에서 나를 잃지 않는 법',
                    '반복되는 이별 패턴을 멈추는 질문들',
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

            {/* 4. 이런 분께 추천합니다 (카드 4개) */}
            <section className="mb-20">
              <Reveal>
                <h2 className="text-3xl font-elegant font-bold text-center mb-12 text-white">이런 분께 추천합니다</h2>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "상대의 마음을 몰라 불안한 분",
                    "연애가 시작되면 나를 잃는 분",
                    "재회와 미련 사이에서 흔들리는 분",
                    "사랑을 더 성숙하게 배우고 싶은 분"
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
                <h2 className="text-3xl font-elegant font-bold text-center mb-12 text-white">생생한 구매 후기</h2>
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
                        <h3 className="text-lg font-bold text-green-400/80 mb-4 flex items-center gap-2">
                          <i className="fas fa-check-circle"></i> 환불 가능 안내
                        </h3>
                        <ul className="space-y-2 text-bd-gray text-sm">
                          <li>• 중복 결제가 발생한 경우</li>
                          <li>• 시스템 오류로 인해 정상적인 결제가 이루어지지 않은 경우</li>
                          <li>• 파일 손상 또는 다운로드 불가 등 정상적인 이용이 불가능한 경우</li>
                        </ul>
                        <p className="mt-4 text-xs text-green-400/60">확인 후 전액 환불 또는 재발송이 가능합니다.</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-red-400/80 mb-4 flex items-center gap-2">
                          <i className="fas fa-times-circle"></i> 환불이 어려운 경우
                        </h3>
                        <ul className="space-y-2 text-bd-gray text-sm">
                          <li>• 다운로드가 완료된 경우</li>
                          <li>• 고객의 단순 변심</li>
                          <li>• 구매 후 개인적인 기대와 차이에 의한 경우</li>
                          <li>• 디지털 콘텐츠 특성상 이미 이용이 가능한 상태인 경우</li>
                        </ul>
                        <p className="mt-4 text-xs text-red-400/60">복제가 가능한 디지털 상품의 특성상 다운로드 이후 환불이 제한됩니다.</p>
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
                <h2 className="text-2xl md:text-3xl font-elegant font-bold mb-8 text-white">
                  내 연애 패턴을 다르게 읽어보고 싶다면
                </h2>
                <Link 
                  href="/order/love-secret-ebook"
                  className="btn-primary inline-block px-12 py-5 rounded-lg font-bold text-xl shadow-[0_0_30px_rgba(212,178,167,0.2)]"
                >
                  연애비급 받아보기
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
