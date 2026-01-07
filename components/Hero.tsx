'use client'

import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 px-4 md:px-6">
      <div className="container mx-auto max-w-4xl text-center">
        {/* 상단 배지 */}
        <div className="mb-6 fade-in-up">
          <span 
            className="inline-block px-4 py-2 rounded-full text-sm font-medium"
            style={{
              background: 'rgba(26, 10, 46, 0.6)',
              border: '1px solid rgba(255, 20, 147, 0.2)',
              color: '#f7f1ff',
            }}
          >
            ✨ 선천코드 분석 맞춤 리포트
          </span>
        </div>

        {/* 메인 타이틀 */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-elegant font-bold mb-6 text-bd-ivory leading-tight fade-in-up">
          당신의 연애는
          <br />
          타고난 코드부터 다르다
        </h1>

        {/* 서브 카피 */}
        <p className="text-lg md:text-xl text-bd-gray mb-10 max-w-2xl mx-auto leading-relaxed fade-in-up">
          선천코드 분석을 통해
          <br />
          당신이 반복하는 연애 패턴과
          <br />
          끌어당기는 사랑의 방향을
          <br />
          정밀하게 해독합니다.
        </p>

        {/* CTA 버튼 */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center fade-in-up">
          <Link
            href="/report"
            className="px-8 py-3 rounded-lg font-semibold text-white transition-colors"
            style={{
              background: '#ff1493',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#ff69b4'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#ff1493'
            }}
          >
            맞춤 리포트 받기
          </Link>
          <Link
            href="/ebooks"
            className="px-8 py-3 rounded-lg font-semibold transition-colors"
            style={{
              background: 'transparent',
              border: '1px solid rgba(255, 20, 147, 0.5)',
              color: '#f7f1ff',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 20, 147, 0.1)'
              e.currentTarget.style.borderColor = '#ff69b4'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.borderColor = 'rgba(255, 20, 147, 0.5)'
            }}
          >
            전자책 둘러보기
          </Link>
        </div>
      </div>
    </section>
  )
}
