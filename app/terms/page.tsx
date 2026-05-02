'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import GlobalBackground from '@/components/GlobalBackground'

export default function TermsOfService() {
  return (
    <main className="relative min-h-screen bg-[#0a0514]">
      <GlobalBackground src="/image/main.png">
        <Navigation />
        
        <div className="relative z-10 pt-32 pb-20 px-6">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-[#1a0f2e]/60 backdrop-blur-md border border-[rgba(212,175,55,0.15)] p-8 md:p-16 rounded-2xl shadow-2xl">
              <h1 className="text-3xl md:text-4xl font-elegant font-bold text-[var(--accent-gold)] mb-12 tracking-wider text-center">
                이용약관
              </h1>
              
              <div className="space-y-10 text-[#EDE6DA] leading-relaxed opacity-90">
                <section>
                  <h2 className="text-xl font-bold text-[var(--accent-gold)] mb-4">제1조 목적</h2>
                  <p>
                    본 약관은 백도화(이하 “회사”)가 제공하는 리포트 및 관련 서비스의 이용과 관련하여 회사와 이용자 간의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-[var(--accent-gold)] mb-4">제2조 서비스 내용</h2>
                  <p className="mb-2">회사는 다음과 같은 서비스를 제공합니다.</p>
                  <ul className="list-disc list-inside pl-4 space-y-1 opacity-80">
                    <li>선천코드 연애 리포트</li>
                    <li>궁합 분석 리포트</li>
                    <li>관계 흐름 해석 서비스</li>
                    <li>프리미엄 감정 분석 서비스</li>
                    <li>기타 관련 디지털 콘텐츠 및 실물 상품 판매</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-[var(--accent-gold)] mb-4">제3조 서비스 이용</h2>
                  <p>
                    이용자는 회사가 제공하는 절차에 따라 서비스를 신청하고 결제를 완료함으로써 서비스를 이용할 수 있습니다.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-[var(--accent-gold)] mb-4">제4조 이용자의 의무</h2>
                  <p className="mb-2">이용자는 다음 행위를 해서는 안 됩니다.</p>
                  <ul className="list-disc list-inside pl-4 space-y-1 opacity-80">
                    <li>허위 정보 제공</li>
                    <li>타인의 개인정보 도용</li>
                    <li>서비스 운영 방해 행위</li>
                    <li>회사의 저작물 무단 복제 및 배포</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-[var(--accent-gold)] mb-4">제5조 저작권</h2>
                  <p>
                    회사가 제공하는 리포트 및 콘텐츠의 저작권은 회사에 있습니다.
                  </p>
                  <p className="mt-2 opacity-80">
                    이용자는 이를 무단 복제, 재판매, 배포할 수 없습니다.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-[var(--accent-gold)] mb-4">제6조 면책사항</h2>
                  <p>
                    회사가 제공하는 서비스는 개인 맞춤형 해석 및 참고 자료이며, 법적·의학적·재정적 판단의 근거로 사용될 수 없습니다.
                  </p>
                  <p className="mt-2 opacity-80">
                    회사는 이용자의 개인적 판단에 따른 결과에 대해 책임을 지지 않습니다.
                  </p>
                </section>

                <section className="pt-10 border-t border-[rgba(212,175,55,0.1)]">
                  <h2 className="text-xl font-bold text-[var(--accent-gold)] mb-4">제7조 약관 변경</h2>
                  <p>회사는 필요한 경우 약관을 변경할 수 있으며, 변경 시 홈페이지를 통해 공지합니다.</p>
                  <p className="mt-4 text-sm opacity-60">시행일 : 2026.05.02</p>
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
