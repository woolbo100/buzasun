import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata = {
  title: '비밀상점 | 백도화 매력학당',
  description: '선택받은 사람만 들어가는 비밀 공간',
}

export default function ShopPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-16 px-4 md:px-6 py-20 md:py-32">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-elegant font-bold mb-12"
            style={{
              color: '#f7f1ff',
              letterSpacing: '0.02em',
            }}
          >
            백도화 비밀상점
          </h1>
          <div className="mb-16 space-y-6">
            <p 
              className="text-lg md:text-xl leading-relaxed"
              style={{
                color: 'rgba(245, 239, 255, 0.9)',
                lineHeight: 1.8,
                wordBreak: 'keep-all',
              }}
            >
              상태를 바꾸는 도구가 아니라,<br />
              당신의 주파수를 미세하게 조율하는 비밀 아이템을 만납니다.
            </p>
            <p 
              className="text-lg md:text-xl leading-relaxed"
              style={{
                color: 'rgba(245, 239, 255, 0.85)',
                lineHeight: 1.8,
                wordBreak: 'keep-all',
              }}
            >
              선천코드 분석을 바탕으로,<br />
              당신의 에너지 흐름에 맞는 것만 선별했습니다.
            </p>
          </div>
          <div className="text-center">
            <a
              href="https://payment-link.com/shop"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-14 py-6 rounded-lg font-semibold text-white transition-all duration-500 relative overflow-hidden group/btn"
              style={{
                background: 'linear-gradient(135deg, #ff1493 0%, #c71585 100%)',
                boxShadow: '0 8px 32px rgba(255, 20, 147, 0.3), 0 0 40px rgba(255, 20, 147, 0.15)',
                fontSize: '1.15rem',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 12px 48px rgba(255, 20, 147, 0.5), 0 0 60px rgba(255, 20, 147, 0.3)'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(255, 20, 147, 0.3), 0 0 40px rgba(255, 20, 147, 0.15)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              {/* 빛이 흐르는 효과 */}
              <span 
                className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-700"
                style={{
                  background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.3) 50%, transparent 100%)',
                  animation: 'shimmer 2s infinite',
                }}
              />
              <span className="relative z-10">비밀 아이템 확인하기</span>
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
