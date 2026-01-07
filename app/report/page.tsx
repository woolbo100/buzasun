import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata = {
  title: '선천코드 리포트 | 백도화 매력학당',
  description: '당신의 선천코드를 분석한 맞춤 리포트를 받아보세요',
}

export default function ReportPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-16 px-4 md:px-6 py-16 md:py-24">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-elegant font-bold text-bd-ivory mb-6">
            선천코드 리포트
          </h1>
          <p className="text-lg md:text-xl text-bd-gray mb-8 leading-relaxed">
            선천코드 분석을 통해 당신의 연애 패턴, 이성복, 재회 가능성을 정밀하게 해독합니다.
            타고난 코드부터 다른 당신만의 연애 특성을 발견하고, 더 나은 관계를 만들어가는 길을 제시합니다.
          </p>
          <p className="text-lg md:text-xl text-bd-gray mb-10 leading-relaxed">
            에너지 패턴과 매력 주파수를 분석하여 당신이 반복하는 연애 패턴과 끌어당기는 사랑의 방향을 정밀하게 해독합니다.
          </p>
          <a
            href="https://payment-link.com/report"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 rounded-lg font-semibold text-white transition-colors hover:bg-bd-pink2"
            style={{
              background: '#ff1493',
            }}
          >
            리포트 신청하기
          </a>
        </div>
      </main>
      <Footer />
    </>
  )
}
