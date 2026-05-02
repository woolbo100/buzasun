import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import GlobalBackground from '@/components/GlobalBackground'

export const metadata = {
  title: '고객센터 | 백도화 매력학당',
  description: '백도화 매력학당의 고객지원 센터입니다.',
}

export default function SupportPage() {
  return (
    <main className="relative min-h-screen">
      <GlobalBackground src="/image/main.png">
        <Navigation />
        
        <div className="relative z-10 pt-44 pb-20 px-6">
          <div className="container mx-auto max-w-3xl">
            <div className="gungjung-glass p-8 md:p-16">
              <h1 className="text-3xl md:text-4xl font-elegant font-bold text-[var(--accent-gold)] mb-6 tracking-wider text-center">
                고객지원 센터
              </h1>
              <p className="text-[#EDE6DA] opacity-70 text-center mb-12">
                백도화 매력학당은 고객님의 소중한 목소리에 귀 기울입니다.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                {/* Kakao Support */}
                <div className="p-8 rounded-2xl border border-[rgba(216,191,163,0.15)] bg-white/5 flex flex-col items-center text-center h-full">
                  <div className="w-16 h-16 rounded-full bg-[var(--accent-gold-soft)] flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-[var(--accent-gold)]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 3c-4.97 0-9 3.134-9 7 0 2.457 1.63 4.62 4.122 5.922l-.995 3.65c-.12.443.344.825.726.57l4.316-2.87c.277.018.558.028.841.028 4.97 0 9-3.134 9-7s-4.03-7-9-7z" />
                    </svg>
                  </div>
                  <h2 className="text-xl font-bold text-[var(--accent-gold-light)] mb-3">카카오톡 채널</h2>
                  <p className="text-sm text-[#EDE6DA] opacity-60 mb-8 leading-relaxed break-keep">
                    가장 빠른 응대가 필요하시다면 카카오톡 실시간 상담을 이용해보세요.
                  </p>
                  <a 
                    href="https://pf.kakao.com/_CxdfxgG" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full py-4 rounded-xl bg-[var(--accent-gold)] text-[#120014] hover:brightness-110 transition-all font-bold mt-auto"
                  >
                    상담 시작하기
                  </a>
                </div>

                {/* Email Support */}
                <div className="p-8 rounded-2xl border border-[rgba(216,191,163,0.15)] bg-white/5 flex flex-col items-center text-center h-full">
                  <div className="w-16 h-16 rounded-full bg-[var(--accent-gold-soft)] flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-[var(--accent-gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h2 className="text-xl font-bold text-[var(--accent-gold-light)] mb-3">이메일 문의</h2>
                  <p className="text-sm text-[#EDE6DA] opacity-60 mb-8 leading-relaxed break-keep">
                    상세한 분석 요청이나 제휴 문의는 이메일로 접수해주시면 확인 후 답변드립니다.
                  </p>
                  <a 
                    href="mailto:buzasun@naver.com" 
                    className="w-full py-4 rounded-xl border border-[var(--accent-gold)] text-[var(--accent-gold)] hover:bg-[var(--accent-gold-soft)] transition-all font-bold mt-auto"
                  >
                    메일 보내기
                  </a>
                </div>
              </div>

              <div className="mt-12 p-6 rounded-xl bg-black/20 border border-white/5 text-center">
                <h3 className="text-[var(--accent-gold-light)] font-bold mb-2">운영 시간 안내</h3>
                <p className="text-sm text-[#EDE6DA] opacity-50">
                  평일 10:00 - 18:00 (점심시간 12:00 - 13:30)<br />
                  주말 및 공휴일은 휴무입니다.
                </p>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </GlobalBackground>
    </main>
  )
}
