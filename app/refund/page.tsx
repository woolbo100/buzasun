'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import GlobalBackground from '@/components/GlobalBackground'

export default function RefundPolicy() {
  return (
    <main className="relative min-h-screen bg-[#0a0514]">
      <GlobalBackground src="/image/main.png">
        <Navigation />
        
        <div className="relative z-10 pt-32 pb-20 px-6">
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
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="p-6 bg-green-900/10 border border-green-500/20 rounded-xl">
                      <h3 className="text-lg font-bold text-green-400 mb-3">환불 가능</h3>
                      <ul className="list-disc list-inside space-y-1 opacity-80 text-sm">
                        <li>결제 후 작업 시작 전</li>
                        <li>결제 오류 및 중복 결제 발생 시</li>
                      </ul>
                      <p className="mt-4 text-xs text-green-400/60">→ 전액 환불 가능합니다.</p>
                    </div>
                    
                    <div className="p-6 bg-red-900/10 border border-red-500/20 rounded-xl">
                      <h3 className="text-lg font-bold text-red-400 mb-3">환불 불가</h3>
                      <ul className="list-disc list-inside space-y-1 opacity-80 text-sm">
                        <li>리포트 제작이 시작된 경우</li>
                        <li>리포트 발송 완료 후</li>
                        <li>고객의 단순 변심</li>
                        <li>개인 맞춤형 제작이 완료된 경우</li>
                      </ul>
                      <p className="mt-4 text-xs text-red-400/60">※ 디지털 콘텐츠 특성상 발송 후 환불이 어렵습니다.</p>
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
