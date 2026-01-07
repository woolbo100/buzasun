import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata = {
  title: '상담 안내 | 백도화 매력학당',
  description: '1:1 맞춤 상담을 통해 선천코드를 분석받아보세요',
}

export default function CounselingPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-16 px-4 md:px-6 py-16 md:py-24">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-elegant font-bold text-bd-ivory mb-6">
            상담 안내
          </h1>
          <p className="text-lg md:text-xl text-bd-gray mb-8 leading-relaxed">
            1:1 맞춤 상담을 통해 당신의 선천코드를 정밀하게 분석받아보세요.
            전문 상담사가 당신의 에너지 패턴과 매력 주파수를 분석하여,
            연애와 풍요에 관한 맞춤 솔루션을 제시합니다.
          </p>
          <p className="text-lg md:text-xl text-bd-gray mb-10 leading-relaxed">
            상담을 통해 반복되는 연애 패턴을 이해하고, 끌어당기는 사랑의 방향을 발견하며,
            더 나은 관계와 풍요로운 삶을 만들어가는 길을 함께 찾아갑니다.
          </p>
          <a
            href="https://forms.gle/your-form-link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 rounded-lg font-semibold text-white transition-colors hover:bg-bd-pink2"
            style={{
              background: '#ff1493',
            }}
          >
            상담 예약하기
          </a>
        </div>
      </main>
      <Footer />
    </>
  )
}
