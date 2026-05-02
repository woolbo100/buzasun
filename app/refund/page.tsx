'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import GlobalBackground from '@/components/GlobalBackground'
import Reveal from '@/components/Reveal'

export default function RefundPage() {
  const refundContent = [
    {
      title: '디지털 콘텐츠 (리포트/전자책)',
      content: '이끌림(이하 “회사”)이 운영하는 백도화의 리포트 상품은 개인 맞춤 제작되는 디지털 콘텐츠입니다. 따라서 아래 기준에 따라 환불이 진행됩니다.\n\n1. 환불 가능 안내\n- 결제 후 작업이 시작되기 전\n- 중복 결제가 발생한 경우\n- 시스템 오류로 인해 정상적인 결제가 이루어지지 않은 경우\n\n2. 환불 불가 안내\n- 리포트 제작이 이미 시작된 경우\n- 리포트/전자책 발송이 완료된 경우\n- 고객의 단순 변심\n- 개인 맞춤형 제작이 완료된 디지털 콘텐츠 특성상 다운로드 및 수신 이후에는 환불이 제한됩니다.'
    },
    {
      title: '실물 상품 (굿즈/오브제)',
      content: '실물 상품의 경우 관련 법령에 따라 다음과 같이 교환 및 반품이 가능합니다.\n\n1. 교환/반품 가능 기간\n- 상품 수령 후 7일 이내 신청 가능합니다.\n\n2. 교환/반품 가능 조건\n- 배송된 상품이 파손되었거나 불량인 경우\n- 주문한 상품과 다른 상품이 배송된 경우\n\n3. 교환/반품 불가 조건\n- 고객의 책임 있는 사유로 상품이 멸실 또는 훼손된 경우\n- 고객의 사용 또는 일부 소비에 의하여 상품의 가치가 현저히 감소한 경우\n- 시간의 경과에 의하여 재판매가 곤란할 정도로 상품의 가치가 감소한 경우'
    },
    {
      title: '기타 안내',
      content: '환불 및 교환 문의는 고객센터 또는 1:1 문의를 통해 접수해 주시면 확인 후 신속하게 처리해 드립니다.'
    }
  ]

  return (
    <main className="relative min-h-screen bg-[#0a0514]">
      <GlobalBackground src="/image/main4.png">
        <Navigation />
        
        <div className="container-premium py-32 md:py-44">
          <div className="max-w-3xl mx-auto">
            <Reveal>
              <h1 className="text-3xl md:text-4xl font-elegant font-bold text-white mb-4 text-center">환불 및 교환 정책</h1>
              <p className="text-[var(--accent-gold)] text-sm text-center mb-16 opacity-60 tracking-widest">시행일 : 2026.05.02</p>
            </Reveal>

            <div className="space-y-8">
              {refundContent.map((item, index) => (
                <Reveal key={index} delayMs={index * 50}>
                  <div className="gungjung-glass p-8 md:p-10 border-white/5 hover:border-[var(--accent-gold)]/20 transition-colors">
                    <h2 className="text-xl font-bold text-white mb-6 border-l-4 border-[var(--accent-gold)] pl-4">{item.title}</h2>
                    <div className="text-bd-ivory opacity-70 leading-relaxed whitespace-pre-line text-sm md:text-base font-light break-keep">
                      {item.content}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delayMs={500}>
              <div className="mt-20 text-center text-white/30 text-xs">
                <p>© 2026 Baekdohwa. All rights reserved.</p>
              </div>
            </Reveal>
          </div>
        </div>

        <Footer />
      </GlobalBackground>
    </main>
  )
}
