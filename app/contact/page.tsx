'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import GlobalBackground from '@/components/GlobalBackground'
import Reveal from '@/components/Reveal'
import { Mail, MessageCircle, Clock, Truck, ShieldCheck, HelpCircle } from 'lucide-react'

export default function ContactPage() {
  return (
    <main className="relative min-h-screen bg-[#0a0514] text-white">
      <GlobalBackground src="/image/main.png">
        <Navigation />

        <div className="pt-32 pb-20 px-6">
          <div className="container mx-auto max-w-4xl">
            <Reveal delayMs={100}>
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-6xl font-elegant font-bold mb-6 text-white">문의하기</h1>
                <p className="text-lg text-[#EDE6DA] opacity-70">궁금하신 점이 있다면 언제든 편하게 문의해주세요.</p>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {/* 고객센터 안내 */}
              <Reveal delayMs={200}>
                <div className="gungjung-glass p-8 h-full border-white/5">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-accent-gold/10 flex items-center justify-center text-accent-gold">
                      <HelpCircle className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl font-elegant font-bold">고객센터 안내</h2>
                  </div>
                  <div className="space-y-4 text-[#EDE6DA] opacity-80 leading-relaxed break-keep">
                    <p>백도화 매력학당은 고객님의 소중한 목소리에 항상 귀를 기울이고 있습니다. 서비스 이용 중 불편함이나 궁금한 점이 있으시면 아래 채널로 문의 바랍니다.</p>
                  </div>
                </div>
              </Reveal>

              {/* 문의 채널 */}
              <Reveal delayMs={300}>
                <div className="gungjung-glass p-8 h-full border-white/5">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-accent-gold/10 flex items-center justify-center text-accent-gold">
                      <MessageCircle className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl font-elegant font-bold">실시간 문의</h2>
                  </div>
                  <div className="space-y-6">
                    <a 
                      href="http://pf.kakao.com/_xeexhVG" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-xl bg-[#FEE500] text-[#191919] font-bold hover:scale-[1.02] transition-all"
                    >
                      <div className="w-8 h-8 flex items-center justify-center">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M12 3c-4.97 0-9 3.185-9 7.115 0 2.558 1.712 4.8 4.37 6.042l-.845 3.125c-.102.378.121.758.488.825.105.02.21.02.315 0l3.73-2.482c.31.03.623.045.942.045 4.97 0 9-3.185 9-7.115S16.97 3 12 3z"/></svg>
                      </div>
                      카카오채널 문의하기
                    </a>
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                      <Mail className="w-6 h-6 text-accent-gold" />
                      <div>
                        <p className="text-[10px] text-white/40 uppercase tracking-widest">Email Inquiry</p>
                        <p className="text-sm font-bold">buzasun@naver.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {/* 운영시간 */}
              <Reveal delayMs={400}>
                <div className="gungjung-glass p-8 h-full border-white/5">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-accent-gold/10 flex items-center justify-center text-accent-gold">
                      <Clock className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl font-elegant font-bold">운영시간</h2>
                  </div>
                  <div className="space-y-3 text-[#EDE6DA] opacity-80 text-sm md:text-base leading-relaxed">
                    <div className="flex justify-between border-b border-white/5 pb-2">
                      <span>평일 (월-금)</span>
                      <span className="font-bold text-white">10:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-2">
                      <span>점심시간</span>
                      <span className="font-bold text-white">12:30 - 13:30</span>
                    </div>
                    <div className="flex justify-between text-white/40 pt-2">
                      <span>주말 및 공휴일</span>
                      <span>휴무 (채널 문의 가능)</span>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* 주문/배송/리포트 안내 */}
              <Reveal delayMs={500}>
                <div className="gungjung-glass p-8 h-full border-white/5">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-accent-gold/10 flex items-center justify-center text-accent-gold">
                      <Truck className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl font-elegant font-bold">배송 및 리포트 안내</h2>
                  </div>
                  <div className="space-y-4 text-[#EDE6DA] opacity-80 text-sm leading-relaxed break-keep">
                    <div>
                      <p className="font-bold text-accent-gold mb-1">[실물 상품 배송]</p>
                      <p>결제 완료 후 평일 기준 2-3일 이내에 출고됩니다. 제주 및 도서산간 지역은 추가 배송비가 발생할 수 있습니다.</p>
                    </div>
                    <div>
                      <p className="font-bold text-accent-gold mb-1">[디지털 리포트 발송]</p>
                      <p>개인 맞춤 제작 상품으로, 주문 시 입력하신 이메일로 24시간 이내(영업일 기준) 발송해 드립니다.</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* 환불 정책 요약 */}
            <Reveal delayMs={600}>
              <div className="gungjung-glass p-8 border-white/5 mb-16">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-accent-gold/10 flex items-center justify-center text-accent-gold">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-elegant font-bold">환불 정책 요약</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-8 text-[#EDE6DA] opacity-80 text-sm leading-relaxed break-keep">
                  <div className="space-y-2">
                    <p className="font-bold text-white">디지털 상품 (리포트/전자책)</p>
                    <p>콘텐츠 특성상 열람 혹은 발송 후에는 환불이 불가합니다. 단, 오기재나 파일 오류 시 즉시 재발송해 드립니다.</p>
                  </div>
                  <div className="space-y-2">
                    <p className="font-bold text-white">실물 상품</p>
                    <p>상품 수령 후 7일 이내에 반품/교환 신청이 가능합니다. 단, 상품이 훼손된 경우 환불이 제한될 수 있습니다.</p>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-white/5 text-center">
                  <p className="text-xs text-white/30">상세한 내용은 이용약관 및 환불 정책 페이지를 참고해주세요.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <Footer />
      </GlobalBackground>
    </main>
  )
}
