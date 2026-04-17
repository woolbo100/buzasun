import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import GlobalBackground from '@/components/GlobalBackground'

export default function ShopPage() {
  return (
    <main className="relative min-h-screen">
      <GlobalBackground src="/image/main4.png" brightCenter={true}>
        <Navigation />
        
        <div className="pt-32 px-4 md:px-6 py-24 md:py-40">
          <div className="container mx-auto max-w-4xl relative z-10">
            {/* Rule 5: 모든 텍스트와 UI는 반드시 “궁중유리 카드” 위에 배치 */}
            <div className="gungjung-glass p-8 md:p-16 text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-elegant font-bold mb-12 gradient-text">
                백도화 비밀상점
              </h1>
              
              <div className="mb-16 space-y-8">
                <p className="text-xl md:text-2xl leading-relaxed text-[#EDE6DA] font-elegant">
                  상태를 바꾸는 도구가 아니라,<br />
                  당신의 주파수를 미세하게 조율하는 비밀 아이템을 만납니다.
                </p>
                <div className="gold-divider max-w-[100px] mx-auto opacity-40" />
                <p className="text-lg md:text-xl leading-relaxed text-[#EDE6DA] opacity-80">
                  선천코드 분석을 바탕으로,<br />
                  당신의 에너지 흐름에 맞는 것만 선별했습니다.
                </p>
              </div>
              
              <div className="text-center">
                <a
                  href="https://payment-link.com/shop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center justify-center px-14 py-6 rounded-xl font-elegant font-bold text-xl transition-all group/btn"
                >
                  <span className="relative z-10">비밀 아이템 확인하기</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </GlobalBackground>
    </main>
  )
}
