'use client'

import Link from 'next/link'
import PetalsCanvas from './PetalsCanvas'
import Reveal from './Reveal'

export default function Hero() {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    })
  }

  return (
    <section className="relative min-h-fit flex items-center justify-center pt-52 md:pt-60 pb-20 px-4 md:px-6 overflow-hidden" style={{ background: 'transparent' }}>
      <PetalsCanvas color="#fce7f3" density={28} />
      
      {/* 달빛 효과 (안개 속에 숨은 달빛) */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 120% 80% at 50% 25%, rgba(200, 190, 210, 0.05) 0%, rgba(180, 170, 200, 0.03) 30%, rgba(160, 150, 185, 0.015) 50%, transparent 70%)',
          filter: 'blur(120px)',
          mixBlendMode: 'screen',
        }}
      />
      
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        {/* 상단 배지 */}
        <Reveal delayMs={0}>
          <div className="mb-8">
            <span 
              className="inline-block px-5 py-2.5 rounded-full text-sm font-medium backdrop-blur-sm"
              style={{
                background: 'rgba(26, 6, 38, 0.6)',
                border: '1px solid rgba(255, 20, 147, 0.2)',
                color: '#f7f1ff',
                boxShadow: '0 4px 20px rgba(252, 231, 243, 0.1)',
              }}
            >
              당신이 몰랐던 타고난 사랑의 알고리즘
            </span>
          </div>
        </Reveal>

        {/* 메인 타이틀 */}
        <Reveal delayMs={100}>
          <h1 
            className="font-elegant font-bold mb-8 leading-[1.1] relative"
            style={{
              fontSize: 'clamp(1.875rem, 6vw, 5rem)',
              letterSpacing: '0.02em',
              wordBreak: 'keep-all',
            }}
          >
            {/* 은은한 아우라 글로우 배경 */}
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse 85% 60% at 50% 50%, rgba(255, 230, 240, 0.16) 0%, rgba(255, 180, 210, 0.12) 30%, rgba(255, 130, 190, 0.08) 50%, rgba(255, 90, 170, 0.05) 70%, transparent 100%)',
                filter: 'blur(60px)',
                transform: 'translateY(-10%)',
                zIndex: -1,
              }}
            />
            <span 
              className="block relative z-10"
              style={{
                color: '#ffffff',
                textShadow: '0 0 8px rgba(255, 255, 255, 0.2), 0 4px 20px rgba(0, 0, 0, 0.3)',
                wordBreak: 'keep-all',
              }}
            >
              당신의 연애는
            </span>
            <span 
              className="block mt-2 relative z-10"
              style={{
                letterSpacing: '0.03em',
                background: 'linear-gradient(to right, #fff5f8 0%, #ffe0f0 20%, #ffb6d9 40%, #ff69b4 60%, #ff1493 80%, #ff1493 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '0 0 12px rgba(255, 20, 147, 0.25), 0 0 24px rgba(255, 105, 180, 0.15), 0 4px 20px rgba(0, 0, 0, 0.3)',
                wordBreak: 'keep-all',
              }}
            >
              타고난 코드부터 다르다
            </span>
          </h1>
        </Reveal>

        {/* 서브 카피 */}
        <Reveal delayMs={200}>
          <p 
            className="mb-12 max-w-2xl mx-auto"
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              letterSpacing: '0.01em',
              color: 'rgba(255, 255, 255, 0.9)',
              fontWeight: 400,
              lineHeight: 1.7,
              wordBreak: 'keep-all',
            }}
          >
            선천코드 분석을 통해 당신이 반복하는 연애 패턴과
            <br />
            나의 에너지에 공명하는 사랑의 지도를 정밀하게 해독합니다.
          </p>
        </Reveal>

        {/* CTA 버튼 */}
        <Reveal delayMs={300}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
            <div className="flex flex-col items-center">
              <Link
                href="/report"
                className="group relative px-10 py-4 rounded-lg font-semibold text-white overflow-hidden transition-all duration-500"
                style={{
                  background: 'linear-gradient(135deg, #ff1493 0%, #c71585 100%)',
                  boxShadow: '0 8px 32px rgba(255, 20, 147, 0.3), 0 0 40px rgba(255, 20, 147, 0.1)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 12px 48px rgba(255, 20, 147, 0.5), 0 0 60px rgba(255, 20, 147, 0.2)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(255, 20, 147, 0.3), 0 0 40px rgba(255, 20, 147, 0.1)'
                }}
              >
                {/* 빛이 흐르는 효과 */}
                <span 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{
                    background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.3) 50%, transparent 100%)',
                    animation: 'shimmer 2s infinite',
                  }}
                />
                <span className="relative z-10">맞춤 리포트 받기</span>
              </Link>
            </div>
            
            <div className="flex flex-col items-center">
              <Link
                href="/ebooks"
                className="group relative px-10 py-4 rounded-lg font-semibold transition-all duration-500 backdrop-blur-sm"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 20, 147, 0.5)',
                  color: '#f7f1ff',
                  boxShadow: '0 4px 20px rgba(255, 20, 147, 0.1)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 20, 147, 0.15)'
                  e.currentTarget.style.borderColor = '#ff69b4'
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(255, 20, 147, 0.3)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'
                  e.currentTarget.style.borderColor = 'rgba(255, 20, 147, 0.5)'
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(255, 20, 147, 0.1)'
                }}
              >
                <span className="relative z-10">시크릿 비법서 둘러보기</span>
              </Link>
            </div>
          </div>
        </Reveal>
      </div>

    </section>
  )
}
