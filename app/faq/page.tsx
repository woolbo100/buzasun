import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import GlobalBackground from '@/components/GlobalBackground'

export const metadata = {
  title: 'FAQ | 백도화 매력학당',
  description: '백도화 매력학당 자주 묻는 질문입니다.',
}

export default function FAQPage() {
  const faqs = [
    {
      q: '리포트 제작 기간은 얼마나 걸리나요?',
      a: '결제 완료 후 영업일 기준 평균 1~3일 이내에 제작이 완료되어 이메일로 발송됩니다.'
    },
    {
      q: '리포트는 어떤 방식으로 전달되나요?',
      a: '입력하신 이메일 주소로 PDF 형식의 디지털 리포트가 발송됩니다.'
    },
    {
      q: '개인 정보는 안전하게 관리되나요?',
      a: '모든 개인 분석 데이터는 엄격한 보안 정책에 따라 관리되며, 분석 완료 후 일정 기간이 지나면 폐기됩니다.'
    },
    {
      q: '결제 후 내용을 수정하고 싶어요.',
      a: '제작이 시작되기 전에는 수정이 가능합니다. 고객센터나 카카오톡 채널을 통해 주문번호와 함께 문의해주세요.'
    }
  ]

  return (
    <main className="relative min-h-screen">
      <GlobalBackground src="/image/main.png">
        <Navigation />
        
        <div className="relative z-10 pt-44 pb-20 px-6">
          <div className="container mx-auto max-w-3xl">
            <div className="gungjung-glass p-8 md:p-16">
              <h1 className="text-3xl md:text-4xl font-elegant font-bold text-[var(--accent-gold)] mb-12 tracking-wider text-center">
                자주 묻는 질문 (FAQ)
              </h1>

              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div 
                    key={index} 
                    className="p-6 rounded-xl border border-[rgba(216,191,163,0.1)] bg-white/5 transition-all hover:bg-white/10"
                  >
                    <h3 className="text-lg font-bold text-[var(--accent-gold-light)] mb-3 flex items-start">
                      <span className="mr-3 text-[var(--accent-gold)] opacity-60">Q.</span>
                      {faq.q}
                    </h3>
                    <p className="text-[#EDE6DA] opacity-70 leading-relaxed pl-7 border-l border-[rgba(216,191,163,0.1)]">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-16 pt-8 border-t border-[rgba(216,191,163,0.1)] text-center">
                <p className="text-[#EDE6DA] opacity-60 text-sm mb-6">
                  원하시는 답변을 찾지 못하셨나요?
                </p>
                <div className="flex flex-col md:flex-row justify-center gap-4">
                  <a 
                    href="/contact" 
                    className="px-8 py-3 rounded-xl border border-[var(--accent-gold-soft)] text-[var(--accent-gold)] hover:bg-[var(--accent-gold-soft)] transition-all text-sm font-medium"
                  >
                    1:1 문의하기
                  </a>
                  <a 
                    href="https://pf.kakao.com/_CxdfxgG" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-8 py-3 rounded-xl bg-[var(--accent-gold)] text-[#120014] hover:brightness-110 transition-all text-sm font-bold"
                  >
                    카카오톡 상담
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </GlobalBackground>
    </main>
  )
}
