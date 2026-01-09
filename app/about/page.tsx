'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import About from '@/components/About'
import Projects from '@/components/Projects'

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main 
        className="min-h-screen relative"
        style={{
          background: 'linear-gradient(180deg, #0d0010 0%, #14061f 15%, #1a0726 30%, #1d082e 45%, #1a0726 60%, #1a0626 75%, #14061f 90%, #120014 100%)',
        }}
      >
        {/* 백도화 히어로 소개 */}
        <section className="pt-32 pb-20 px-6 relative">
          <div className="container mx-auto max-w-4xl">
            <h1 
              className="text-3xl md:text-5xl lg:text-6xl font-elegant font-bold mb-8"
              style={{
                color: '#f7f1ff',
                letterSpacing: '0.02em',
                lineHeight: 'clamp(1.15, 1.25, 1.25)',
              }}
            >
              백도화 소개
            </h1>
            <p 
              className="text-lg md:text-xl mb-8 leading-relaxed"
              style={{
                color: 'rgba(255, 255, 255, 0.8)',
                lineHeight: '1.8',
                wordBreak: 'keep-all',
              }}
            >
              백도화 매력학당은 선천코드 분석을 기반으로 한 연애·풍요 솔루션을 제공하는 공간입니다.
              각자의 고유한 에너지 패턴을 분석하여 매력 주파수를 발견하고, 이를 통해 진정한 관계와 풍요로운 삶을 만들어가는 여정을 함께합니다.
            </p>
            <p 
              className="text-lg md:text-xl mb-10 leading-relaxed"
              style={{
                color: 'rgba(255, 255, 255, 0.8)',
                lineHeight: '1.8',
                wordBreak: 'keep-all',
              }}
            >
              청초하고 고급스러운 한국적 미학을 바탕으로, 과학적 접근과 세심한 분석을 통해 여러분의 선천코드를 해석합니다.
              이를 통해 개인의 고유한 매력을 극대화하고, 더 나은 관계와 풍요로운 삶을 실현할 수 있도록 돕는 것이 우리의 사명입니다.
            </p>
          </div>
        </section>

        {/* 백도화 선언 */}
        <About />

        {/* 우리가 설계하는 영역 */}
        <Projects />

        {/* 브랜드 엔딩 카피 */}
        <section className="py-20 px-6 relative">
          <div className="container mx-auto max-w-4xl text-center">
            <p 
              className="text-lg md:text-xl leading-relaxed"
              style={{
                color: 'rgba(255, 255, 255, 0.7)',
                lineHeight: '1.8',
                wordBreak: 'keep-all',
              }}
            >
              백도화는 당신의 선천 코드를 해석하고,<br />
              관계와 삶의 구조를 설계하는 전문 시스템입니다.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
