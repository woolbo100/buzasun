import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import GlobalBackground from '@/components/GlobalBackground'

export const metadata = {
  title: '선천코드 리포트 | 백도화 매력학당',
  description: '당신의 선천코드를 분석한 맞춤 리포트를 받아보세요',
}

export default function ReportPage() {
  return (
    <main className="relative min-h-screen">
      <GlobalBackground src="/image/main4.png">
        <Navigation />
        
        <div className="pt-32 px-4 md:px-6 py-16 md:py-24">
          <div className="container mx-auto max-w-4xl relative z-10">
            {/* Rule 5: 가독성과 고급감을 위한 궁중유리 카드 적용 */}
            <div className="gungjung-glass p-8 md:p-16">
              <h1 className="text-4xl md:text-5xl font-elegant font-bold mb-10 gradient-text">
                선천코드 리포트
              </h1>
              
              <div className="space-y-8 mb-12">
                <p className="text-lg md:text-xl text-[#EDE6DA] leading-relaxed opacity-90">
                  선천코드 분석을 통해 당신의 연애 패턴, 이성복, 재회 가능성을 정밀하게 해독합니다.<br />
                  타고난 코드부터 다른 당신만의 연애 특성을 발견하고, 더 나은 관계를 만들어가는 길을 제시합니다.
                </p>
                
                <div className="gold-divider opacity-30" />
                
                <p className="text-lg md:text-xl text-[#EDE6DA] leading-relaxed opacity-80">
                  에너지 패턴과 매력 주파수를 분석하여 당신이 반복하는 연애 패턴과 끌어당기는 사랑의 방향을 정밀하게 해독합니다.
                </p>
              </div>

              <a
                href="https://payment-link.com/report"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center px-12 py-5 rounded-xl font-elegant font-bold text-lg transition-all"
              >
                리포트 신청하기
              </a>
            </div>
          </div>
        </div>

        <Footer />
      </GlobalBackground>
    </main>
  )
}
