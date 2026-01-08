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
    <section className="relative min-h-screen flex items-center justify-center pt-16 px-4 md:px-6 overflow-hidden">
      <PetalsCanvas color="#fce7f3" density={28} />
      
      {/* 중앙 글로우 오라 레이어 */}
      <div 
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-5"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(252, 231, 243, 0.15) 0%, rgba(255, 182, 193, 0.08) 40%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
      
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        {/* 상단 배지 */}
        <Reveal delayMs={0}>
          <div className="mb-8">
            <span 
              className="inline-block px-5 py-2.5 rounded-full text-sm font-medium backdrop-blur-sm"
              style={{
                background: 'rgba(26, 10, 46, 0.6)',
                border: '1px solid rgba(255, 20, 147, 0.2)',
                color: '#f7f1ff',
                boxShadow: '0 4px 20px rgba(252, 231, 243, 0.1)',
              }}
            >
              ✨ 선천코드 분석 맞춤 리포트
            </span>
          </div>
        </Reveal>

        {/* 메인 타이틀 */}
        <Reveal delayMs={100}>
          <h1 
            className="font-elegant font-bold mb-8 text-bd-ivory leading-[1.1]"
            style={{
              fontSize: 'clamp(2.5rem, 8vw, 5rem)',
              letterSpacing: '0.02em',
              textShadow: '0 0 40px rgba(252, 231, 243, 0.2), 0 4px 20px rgba(0, 0, 0, 0.3)',
            }}
          >
            당신의 연애는
            <br />
            <span className="block mt-2" style={{ letterSpacing: '0.03em' }}>
              타고난 코드부터 다르다
            </span>
          </h1>
        </Reveal>

        {/* 서브 카피 */}
        <Reveal delayMs={200}>
          <p 
            className="text-bd-gray mb-12 max-w-2xl mx-auto leading-relaxed"
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              letterSpacing: '0.01em',
              opacity: 0.9,
            }}
          >
            선천코드 분석을 통해
            <br />
            당신이 반복하는 연애 패턴과
            <br />
            끌어당기는 사랑의 방향을
            <br />
            정밀하게 해독합니다.
          </p>
        </Reveal>

        {/* CTA 버튼 */}
        <Reveal delayMs={300}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20 sm:mb-24">
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
              <p className="mt-2 text-xs text-bd-gray opacity-60 whitespace-nowrap">
                당신만의 코드를 발견하세요
              </p>
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
                <span className="relative z-10">전자책 둘러보기</span>
              </Link>
              <p className="mt-2 text-xs text-bd-gray opacity-60 whitespace-nowrap">
                깊이 있는 지식으로
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      {/* 스크롤 유도 요소 - Hero 섹션 하단 중앙 고정 */}
      <Reveal delayMs={500}>
        <button
          onClick={scrollToContent}
          className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-bd-gray hover:text-bd-ivory transition-all duration-300 opacity-60 hover:opacity-100 group z-10"
          style={{
            animation: 'float 3s ease-in-out infinite',
          }}
          aria-label="아래로 스크롤"
        >
          <span className="text-xs sm:text-sm font-medium tracking-wider" style={{ letterSpacing: '0.1em' }}>
            백도화의 세계로 들어가기
          </span>
          <div className="flex flex-col items-center gap-1">
            <i className="fas fa-chevron-down text-xs animate-bounce"></i>
            <div 
              className="h-6 sm:h-8 w-px bg-gradient-to-b from-pink-200/50 to-transparent transition-all duration-300 group-hover:from-pink-200"
              style={{
                boxShadow: '0 0 8px rgba(255, 182, 193, 0.3)',
              }}
            />
          </div>
        </button>
      </Reveal>
    </section>
  )
}
