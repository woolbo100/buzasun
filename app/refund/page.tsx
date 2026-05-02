'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import GlobalBackground from '@/components/GlobalBackground'

export default function RefundPolicy() {
  return (
    <main className="relative min-h-screen bg-[#0a0514]">
      <GlobalBackground src="/image/main.png">
        <Navigation />
        
        <div className="relative z-10 pt-44 pb-20 px-6">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-[#1a0f2e]/60 backdrop-blur-md border border-[rgba(212,175,55,0.15)] p-8 md:p-16 rounded-2xl shadow-2xl">
              <h1 className="text-3xl md:text-4xl font-elegant font-bold text-[var(--accent-gold)] mb-12 tracking-wider text-center">
                환불 및 교환 정책
              </h1>
              
              <div className="space-y-10 text-[#EDE6DA] leading-relaxed opacity-90">
                <section>
                  <h2 className="text-xl font-bold text-[var(--accent-gold)] mb-4">디지털 리포트 상품</h2>
                  <p className="mb-4">
                    백도화의 리포트 상품은 개인 맞춤 제작되는 디지털 콘텐츠입니다. 따라서 아래 기준에 따라 환불이 진행됩니다.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 items-stretch">
                    <div className="p-8 md:p-10 rounded-2xl flex flex-col transition-all duration-500 hover:bg-white/[0.05]"
                      style={{
                        background: 'rgba(255, 255, 255, 0.03)',
                        backdropFilter: 'blur(20px)',
                        border: '1px solid rgba(216, 191, 163, 0.2)',
                        boxShadow: '0 12px 32px rgba(0, 0, 0, 0.2)'
                      }}>
                      <h3 className="text-xl font-elegant font-bold text-[var(--accent-gold-light)] mb-6 flex items-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-gold)] mr-3 opacity-60"></span>
                        환불 가능
                      </h3>
                      <ul className="space-y-4 text-[#cfc7dc] text-sm md:text-base leading-relaxed flex-grow">
                        <li className="flex items-start">
                          <span className="mr-2 opacity-40">•</span>
                          결제 후 작업 시작 전
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 opacity-40">•</span>
                          결제 오류 및 중복 결제 발생 시
                        </li>
                      </ul>
                      <div className="mt-8 pt-6 border-t border-[rgba(216,191,163,0.1)]">
                        <p className="text-sm font-medium text-[var(--accent-gold)] opacity-80 italic">
                          → 전액 환불 가능합니다.
                        </p>
                      </div>
                    </div>
                    
                    <div className="p-8 md:p-10 rounded-2xl flex flex-col transition-all duration-500 hover:bg-white/[0.05]"
                      style={{
                        background: 'rgba(255, 255, 255, 0.03)',
                        backdropFilter: 'blur(20px)',
                        border: '1px solid rgba(197, 139, 160, 0.2)',
                        boxShadow: '0 12px 32px rgba(0, 0, 0, 0.2)'
                      }}>
                      <h3 className="text-xl font-elegant font-bold text-[#C58BA0] mb-6 flex items-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C58BA0] mr-3 opacity-60"></span>
                        환불 불가
                      </h3>
                      <ul className="space-y-4 text-[#cfc7dc] text-sm md:text-base leading-relaxed flex-grow">
                        <li className="flex items-start">
                          <span className="mr-2 opacity-40">•</span>
                          리포트 제작이 시작된 경우
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 opacity-40">•</span>
                          리포트 발송 완료 후
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 opacity-40">•</span>
                          고객의 단순 변심
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 opacity-40">•</span>
                          개인 맞춤형 제작이 완료된 경우
                        </li>
                      </ul>
                      <div className="mt-8 pt-6 border-t border-[rgba(197,139,160,0.1)]">
                        <p className="text-sm font-medium text-[#C58BA0] opacity-80 italic">
                          ※ 디지털 콘텐츠 특성상 발송 후 환불이 어렵습니다.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-[var(--accent-gold)] mb-4">실물 상품 교환 및 반품</h2>
                  <p>
                    실물 상품의 경우 상품 수령 후 7일 이내 교환 및 반품 신청이 가능합니다.
                  </p>
                  <p className="mt-4 mb-2 font-bold opacity-80 text-sm">단, 아래의 경우는 제외됩니다.</p>
                  <ul className="list-disc list-inside pl-4 space-y-1 opacity-80 text-sm">
                    <li>사용 흔적이 있는 경우</li>
                    <li>고객 부주의로 상품이 훼손된 경우</li>
                    <li>포장이 훼손되어 재판매가 어려운 경우</li>
                  </ul>
                </section>

                <section className="pt-10 border-t border-[rgba(212,175,55,0.1)]">
                  <h2 className="text-xl font-bold text-[var(--accent-gold)] mb-4">고객센터</h2>
                  <p className="mb-4">환불 및 교환 문의는 고객센터를 통해 접수해주시기 바랍니다.</p>
                  <div className="p-6 bg-[#0a0514]/40 border border-[rgba(212,175,55,0.1)] rounded-lg text-sm">
                    <p className="opacity-80">Email : buzasun@naver.com</p>
                    <p className="opacity-80">운영시간 : Mon–Fri 10:00–18:00</p>
                  </div>
                  <p className="mt-8 text-sm opacity-60">시행일 : 2026.05.02</p>
                </section>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </GlobalBackground>
    </main>
  )
}
