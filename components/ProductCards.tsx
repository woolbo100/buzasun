'use client'

import Link from 'next/link'
import Reveal from './Reveal'

const ebooks = [
  {
    title: "연애비급",
    desc: "관계의 흐름을 바꾸는 심리·프레임·대화 설계",
    href: "/ebooks/love",
  },
  {
    title: "풍요비책",
    desc: "상태를 바꾸면 현실이 따라온다. 풍요 마인드 실전 가이드",
    href: "/ebooks/abundance",
  },
  {
    title: "재회비방",
    desc: "감정선 복구부터 메시지 설계까지. 재회 기준 만들기",
    href: "/ebooks/reunion",
  },
]

export default function ProductCards() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* 배경 그라데이션 - 히어로와 자연스럽게 이어짐 */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, #0d0010 0%, #15051a 30%, #25081a 60%, #15051a 100%)',
        }}
      />
      
      <div className="relative z-10">
        {/* 리포트 섹션 - 풀 너비 메인 블록 */}
        <Reveal delayMs={0}>
          <div 
            className="w-full py-20 md:py-28 px-6 md:px-8"
            style={{
              background: 'linear-gradient(180deg, rgba(13, 0, 16, 0.95) 0%, rgba(21, 5, 26, 0.9) 50%, rgba(37, 8, 26, 0.95) 100%)',
            }}
          >
            <div className="max-w-5xl mx-auto text-center">
              {/* 소제목 */}
              <p 
                className="text-sm md:text-base mb-4 opacity-70"
                style={{
                  color: '#cfc7dc',
                  letterSpacing: '0.1em',
                }}
              >
                가장 많은 선택을 받은 리포트
              </p>
              
              {/* 메인 타이틀 */}
              <h2 
                className="text-3xl md:text-5xl lg:text-6xl font-elegant font-bold mb-6"
                style={{
                  color: '#f7f1ff',
                  letterSpacing: '0.02em',
                  textShadow: '0 0 20px rgba(255, 20, 147, 0.2), 0 4px 30px rgba(0, 0, 0, 0.4)',
                }}
              >
                선천코드 맞춤 연애 상담 리포트
              </h2>
              
              {/* 설명 문구 */}
              <p 
                className="text-base md:text-lg mb-10 max-w-2xl mx-auto leading-relaxed"
                style={{
                  color: 'rgba(255, 255, 255, 0.85)',
                  lineHeight: 1.7,
                  wordBreak: 'keep-all',
                }}
              >
                당신이 반복하는 연애 패턴과 끌어당기는 사랑의 방향을<br />
                선천코드 분석을 통해 정밀하게 해독합니다.
              </p>
              
              {/* CTA 버튼 */}
              <Link
                href="/report"
                className="inline-block px-12 py-5 rounded-lg font-semibold text-white transition-all duration-500 relative overflow-hidden group"
                style={{
                  background: 'linear-gradient(135deg, #ff1493 0%, #c71585 100%)',
                  boxShadow: '0 8px 32px rgba(255, 20, 147, 0.4), 0 0 50px rgba(255, 20, 147, 0.2)',
                  fontSize: '1.1rem',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 12px 48px rgba(255, 20, 147, 0.6), 0 0 70px rgba(255, 20, 147, 0.3)'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(255, 20, 147, 0.4), 0 0 50px rgba(255, 20, 147, 0.2)'
                  e.currentTarget.style.transform = 'translateY(0)'
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
          </div>
        </Reveal>

        {/* 전자책 섹션 - 3개 가로 배치 */}
        <Reveal delayMs={200}>
          <div className="w-full py-16 md:py-20 px-6 md:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {ebooks.map((ebook, index) => (
                  <Reveal key={ebook.title} delayMs={300 + index * 100}>
                    <Link 
                      href={ebook.href}
                      className="group block h-full"
                    >
                      <div
                        className="
                          relative h-full overflow-hidden rounded-2xl
                          border transition-all duration-300 ease-out
                          hover:-translate-y-2
                          focus-visible:outline-none focus-visible:ring-2
                        "
                        style={{
                          borderColor: 'rgba(255, 255, 255, 0.1)',
                          background: 'rgba(26, 6, 38, 0.5)',
                          backdropFilter: 'blur(10px)',
                          padding: '1.5rem',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = 'rgba(255, 20, 147, 0.4)'
                          e.currentTarget.style.background = 'rgba(26, 6, 38, 0.7)'
                          e.currentTarget.style.boxShadow = '0 12px 40px rgba(255, 20, 147, 0.2), 0 0 30px rgba(255, 182, 193, 0.1)'
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'
                          e.currentTarget.style.background = 'rgba(26, 6, 38, 0.5)'
                          e.currentTarget.style.boxShadow = 'none'
                        }}
                      >
                        {/* 카테고리 태그 */}
                        <div 
                          className="inline-flex items-center rounded-full border px-3 py-1 text-xs mb-4"
                          style={{
                            borderColor: 'rgba(255, 255, 255, 0.15)',
                            background: 'rgba(255, 255, 255, 0.05)',
                            color: '#cfc7dc',
                          }}
                        >
                          전자책
                        </div>

                        {/* 제목 */}
                        <h3 
                          className="text-xl md:text-2xl font-elegant font-semibold mb-3"
                          style={{
                            color: '#f7f1ff',
                            letterSpacing: '0.01em',
                          }}
                        >
                          {ebook.title}
                        </h3>

                        {/* 한 줄 설명 */}
                        <p 
                          className="text-sm md:text-base mb-6 leading-relaxed"
                          style={{
                            color: 'rgba(255, 255, 255, 0.75)',
                            lineHeight: 1.6,
                            wordBreak: 'keep-all',
                          }}
                        >
                          {ebook.desc}
                        </p>

                        {/* CTA */}
                        <div 
                          className="inline-flex items-center gap-2 text-sm font-medium transition-opacity group-hover:opacity-100"
                          style={{
                            color: '#ffb3d9',
                            opacity: 0.9,
                          }}
                        >
                          자세히 보기
                          <span className="transition-transform duration-300 group-hover:translate-x-1">
                            →
                          </span>
                        </div>
                      </div>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
