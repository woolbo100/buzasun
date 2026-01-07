import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata = {
  title: '아이템샵 | 백도화 매력학당',
  description: '상태를 바꾸는 감각적 도구를 만나보세요',
}

export default function ShopPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-16 px-4 md:px-6 py-16 md:py-24">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-elegant font-bold text-bd-ivory mb-6">
            백도화 아이템샵
          </h1>
          <p className="text-lg md:text-xl text-bd-gray mb-8 leading-relaxed">
            상태를 바꾸는 감각적 도구를 만나보세요. 선천코드 분석을 바탕으로 한 특별한 아이템들이
            당신의 에너지 패턴을 조정하고 매력 주파수를 높여줍니다.
          </p>
          <p className="text-lg md:text-xl text-bd-gray mb-10 leading-relaxed">
            각 아이템은 선천코드 분석을 통해 개인의 에너지 패턴에 맞게 설계되어 있어,
            더 효과적으로 상태 변화를 경험할 수 있습니다.
          </p>
          <a
            href="https://payment-link.com/shop"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 rounded-lg font-semibold text-white transition-colors hover:bg-bd-pink2"
            style={{
              background: '#ff1493',
            }}
          >
            아이템 둘러보기
          </a>
        </div>
      </main>
      <Footer />
    </>
  )
}
