import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata = {
  title: '백도화 소개 | 백도화 매력학당',
  description: '백도화 매력학당에 대해 알아보세요',
}

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-16 px-4 md:px-6 py-16 md:py-24">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-elegant font-bold text-bd-ivory mb-6">
            백도화 소개
          </h1>
          <p className="text-lg md:text-xl text-bd-gray mb-8 leading-relaxed">
            백도화 매력학당은 선천코드 분석을 기반으로 한 연애·풍요 솔루션을 제공하는 공간입니다.
            각자의 고유한 에너지 패턴을 분석하여 매력 주파수를 발견하고, 이를 통해 진정한 관계와 풍요로운 삶을 만들어가는 여정을 함께합니다.
          </p>
          <p className="text-lg md:text-xl text-bd-gray mb-10 leading-relaxed">
            청초하고 고급스러운 한국적 미학을 바탕으로, 과학적 접근과 세심한 분석을 통해 여러분의 선천코드를 해석합니다.
            이를 통해 개인의 고유한 매력을 극대화하고, 더 나은 관계와 풍요로운 삶을 실현할 수 있도록 돕는 것이 우리의 사명입니다.
          </p>
          <a
            href="/report"
            className="inline-block px-8 py-3 rounded-lg font-semibold text-white transition-colors hover:bg-bd-pink2"
            style={{
              background: '#ff1493',
            }}
          >
            선천코드 리포트 받기
          </a>
        </div>
      </main>
      <Footer />
    </>
  )
}
