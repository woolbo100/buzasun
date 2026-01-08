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
    <section className="relative w-full overflow-hidden" style={{ background: 'transparent' }}>
      <div className="relative z-10">
        {/* 리포트 섹션 - 카드형 구조 */}
        <Reveal delayMs={0}>
          <div className="w-full py-20 md:py-28 px-6 md:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="w-full rounded-3xl"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 20, 147, 0.2)',
                  backdropFilter: 'blur(20px)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 40px rgba(255, 20, 147, 0.1)',
                  padding: '3rem 2.5rem',
                }}
              >
                {/* 상단: 배지 + 메인 타이틀 */}
                <div className="text-center mb-12">
                  {/* 상단 배지 */}
                  <p 
                    className="text-xs md:text-sm mb-6"
                    style={{
                      color: '#cfc7dc',
                      letterSpacing: '0.15em',
                      opacity: 0.6,
                    }}
                  >
                    가장 많은 선택을 받은 리포트
                  </p>
                  
                  {/* 메인 타이틀 */}
                  <h2 
                    className="text-3xl md:text-5xl lg:text-6xl font-elegant font-bold"
                    style={{
                      color: '#f7f1ff',
                      letterSpacing: '0.02em',
                      lineHeight: 1.3,
                    }}
                  >
                    선천코드 맞춤 연애 상담 리포트
                  </h2>
                </div>

                {/* 중간: 좌측 메시지 + 우측 카드 그리드 */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
                  {/* 좌측: 핵심 메시지 */}
                  <div className="text-left">
                    <p 
                      className="text-xl md:text-2xl font-semibold mb-4 leading-relaxed"
                      style={{
                        color: 'rgba(245, 239, 255, 0.95)',
                        lineHeight: 1.6,
                        wordBreak: 'keep-all',
                      }}
                    >
                      당신이 반복하는 연애의 이유는<br />
                      감정이 아니라 구조입니다.
                    </p>
                    <p 
                      className="text-base md:text-lg leading-relaxed"
                      style={{
                        color: 'rgba(245, 239, 255, 0.8)',
                        lineHeight: 1.7,
                        wordBreak: 'keep-all',
                      }}
                    >
                      선천코드 분석으로 연애 성향, 인연의 흐름, 타이밍을 명확히 정리합니다.
                    </p>
                  </div>

                  {/* 우측: 카드형 핵심 포인트 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      '타고난 연애 성향 & 숨겨진 남자복',
                      '맞는 인연 vs 피해야 할 이상형',
                      '반복되는 연애 패턴의 원인',
                      '결정적인 연애 타이밍',
                      '관계를 바꾸는 실전 조언',
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="group rounded-xl p-4 transition-all duration-300 cursor-pointer"
                        style={{
                          background: 'rgba(40, 15, 55, 0.6)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          backdropFilter: 'blur(10px)',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'translateY(-4px)'
                          e.currentTarget.style.borderColor = 'rgba(255, 20, 147, 0.4)'
                          e.currentTarget.style.boxShadow = '0 8px 24px rgba(255, 20, 147, 0.2), 0 0 20px rgba(255, 182, 193, 0.15)'
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'translateY(0)'
                          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'
                          e.currentTarget.style.boxShadow = 'none'
                        }}
                      >
                        <p 
                          className="text-sm md:text-base leading-relaxed"
                          style={{
                            color: 'rgba(255, 255, 255, 0.9)',
                            lineHeight: 1.6,
                            wordBreak: 'keep-all',
                          }}
                        >
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 하단: CTA 버튼 + 신뢰 문구 */}
                <div className="text-center">
                  {/* CTA 버튼 */}
                  <Link href="/report">
                    <div className="inline-block px-14 py-6 rounded-lg font-semibold text-white transition-all duration-500 relative overflow-hidden group/btn mb-3"
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
                      <span className="relative z-10">내 연애 코드 지금 확인하기</span>
                    </div>
                  </Link>
                  
                  {/* 신뢰 문구 */}
                  <p 
                    className="text-xs md:text-sm"
                    style={{
                      color: 'rgba(245, 239, 255, 0.5)',
                      letterSpacing: '0.02em',
                    }}
                  >
                    상담이 아닌, 구조를 해석하는 분석 리포트입니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* 전자책 섹션 - 3개 가로 배치 */}
        <Reveal delayMs={200}>
          <div className="w-full py-16 md:py-20 px-6 md:px-8" style={{ background: 'transparent' }}>
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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
