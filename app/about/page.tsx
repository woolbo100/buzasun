import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import About from '@/components/About'
import Projects from '@/components/Projects'
import GlobalBackground from '@/components/GlobalBackground'

export default function AboutPage() {
  return (
    <main className="relative min-h-screen">
      <GlobalBackground src="/image/main4.png">
        <Navigation />
        
        {/* 백도화 히어로 소개 */}
        <section className="pt-44 pb-20 px-6 relative">
          <div className="container mx-auto max-w-4xl relative z-10">
            {/* Rule 5: 텍스트 및 UI 레이어 보호를 위한 궁중유리 카드 */}
            <div className="gungjung-glass p-8 md:p-16">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-elegant font-bold mb-10 gradient-text">
                백도화 소개
              </h1>
              
              <div className="space-y-8">
                <p className="text-lg md:text-xl leading-relaxed text-[#EDE6DA] opacity-90">
                  백도화 매력학당은 선천코드 분석을 기반으로 한 연애·풍요 솔루션을 제공하는 공간입니다.<br />
                  각자의 고유한 에너지 패턴을 분석하여 매력 주파수를 발견하고, 이를 통해 진정한 관계와 풍요로운 삶을 만들어가는 여정을 함께합니다.
                </p>
                
                <div className="gold-divider opacity-30" />
                
                <p className="text-lg md:text-xl leading-relaxed text-[#EDE6DA] opacity-80">
                  청초하고 고급스러운 한국적 미학을 바탕으로, 과학적 접근과 세심한 분석을 통해 여러분의 선천코드를 해석합니다.<br />
                  이를 통해 개인의 고유한 매력을 극대화하고, 더 나은 관계와 풍요로운 삶을 실현할 수 있도록 돕는 것이 우리의 사명입니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 백도화 선언 */}
        <About />

        {/* 우리가 설계하는 영역 */}
        <Projects />

        {/* 브랜드 엔딩 카피 */}
        <section className="py-20 px-6 relative">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="gungjung-glass p-10">
              <p className="text-lg md:text-xl leading-relaxed text-[#EDE6DA] opacity-60">
                백도화는 당신의 선천 코드를 해석하고,<br />
                관계와 삶의 구조를 설계하는 전문 시스템입니다.
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </GlobalBackground>
    </main>
  )
}
