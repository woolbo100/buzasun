import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import GlobalBackground from '@/components/GlobalBackground'

export const metadata = {
  title: '상담 안내 | 백도화 매력학당',
  description: '1:1 맞춤 상담을 통해 선천코드를 분석받아보세요',
}

export default function CounselingPage() {
  return (
    <main className="relative min-h-screen">
      <GlobalBackground src="/image/main3.png">
        <Navigation />
        
        <div className="pt-32 px-4 md:px-6 py-16 md:py-24">
          <div className="container mx-auto max-w-4xl relative z-10">
            {/* Rule 5: 텍스트 및 UI 레이어 보호를 위한 궁중유리 카드 */}
            <div className="gungjung-glass p-8 md:p-16">
              <h1 className="text-4xl md:text-5xl font-elegant font-bold mb-10 gradient-text">
                상담 안내
              </h1>
              
              <div className="space-y-8 mb-12">
                <p className="text-lg md:text-xl text-[#EDE6DA] leading-relaxed opacity-90">
                  1:1 맞춤 상담을 통해 당신의 선천코드를 정밀하게 분석받아보세요.<br />
                  전문 상담사가 당신의 에너지 패턴과 매력 주파수를 분석하여, 연애와 풍요에 관한 맞춤 솔루션을 제시합니다.
                </p>
                
                <div className="gold-divider opacity-30" />
                
                <p className="text-lg md:text-xl text-[#EDE6DA] leading-relaxed opacity-80">
                  상담을 통해 반복되는 연애 패턴을 이해하고, 끌어당기는 사랑의 방향을 발견하며, 더 나은 관계와 풍요로운 삶을 만들어가는 길을 함께 찾아갑니다.
                </p>
              </div>

              <a
                href="https://forms.gle/your-form-link"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center px-12 py-5 rounded-xl font-elegant font-bold text-lg transition-all"
              >
                상담 예약하기
              </a>
            </div>
          </div>
        </div>

        <Footer />
      </GlobalBackground>
    </main>
  )
}
