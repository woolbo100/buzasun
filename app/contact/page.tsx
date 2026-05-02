import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import GlobalBackground from '@/components/GlobalBackground'

export const metadata = {
  title: '1:1 문의 | 백도화 매력학당',
  description: '백도화 매력학당 1:1 문의하기 페이지입니다.',
}

export default function ContactPage() {
  return (
    <main className="relative min-h-screen">
      <GlobalBackground src="/image/main.png">
        <Navigation />
        
        <div className="relative z-10 pt-44 pb-20 px-6">
          <div className="container mx-auto max-w-3xl">
            <div className="gungjung-glass p-8 md:p-16">
              <h1 className="text-3xl md:text-4xl font-elegant font-bold text-[var(--accent-gold)] mb-6 tracking-wider text-center">
                1:1 문의하기
              </h1>
              <p className="text-[#EDE6DA] opacity-70 text-center mb-12">
                궁금하신 점이나 불편한 사항이 있으시다면 언제든 문의해주세요.<br />
                최대한 빠르고 정성스럽게 답변해드리겠습니다.
              </p>

              <div className="space-y-8">
                <div className="p-8 rounded-2xl border border-[rgba(216,191,163,0.15)] bg-white/5">
                  <h2 className="text-xl font-bold text-[var(--accent-gold-light)] mb-4">가장 빠른 문의 방법</h2>
                  <p className="text-[#EDE6DA] opacity-70 mb-6 leading-relaxed">
                    카카오톡 채널을 통해 문의해주시면 영업시간 내 실시간으로 상담이 가능합니다.<br />
                    주문 관련 문의 시 <strong className="text-[var(--accent-gold)]">주문번호</strong>를 함께 말씀해주세요.
                  </p>
                  <a 
                    href="https://pf.kakao.com/_CxdfxgG" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[var(--accent-gold)] text-[#120014] hover:brightness-110 transition-all font-bold"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 3c-4.97 0-9 3.134-9 7 0 2.457 1.63 4.62 4.122 5.922l-.995 3.65c-.12.443.344.825.726.57l4.316-2.87c.277.018.558.028.841.028 4.97 0 9-3.134 9-7s-4.03-7-9-7z" />
                    </svg>
                    카카오톡으로 즉시 문의하기
                  </a>
                </div>

                <div className="p-8 rounded-2xl border border-[rgba(216,191,163,0.1)] bg-white/5">
                  <h2 className="text-xl font-bold text-[var(--accent-gold-light)] mb-4">이메일 문의</h2>
                  <p className="text-[#EDE6DA] opacity-70 mb-6 leading-relaxed">
                    실시간 상담이 어려운 경우 이메일을 남겨주세요.<br />
                    순차적으로 확인하여 24시간 이내에 답변드리겠습니다.
                  </p>
                  <div className="flex flex-col md:flex-row items-center gap-4">
                    <span className="text-[var(--accent-gold)] font-mono text-lg">buzasun@naver.com</span>
                    <a 
                      href="mailto:buzasun@naver.com" 
                      className="px-6 py-2 rounded-lg border border-[var(--accent-gold-soft)] text-[var(--accent-gold)] hover:bg-[var(--accent-gold-soft)] transition-all text-sm font-medium"
                    >
                      메일 작성하기
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-12 text-center">
                <Link href="/faq" className="text-sm text-[var(--accent-gold)] opacity-60 hover:opacity-100 underline underline-offset-4">
                  자주 묻는 질문(FAQ)에서 먼저 찾아보기
                </Link>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </GlobalBackground>
    </main>
  )
}

import Link from 'next/link'
