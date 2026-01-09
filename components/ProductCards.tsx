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
          <div className="w-full pt-20 pb-20 md:pt-24 md:py-28 px-6 md:px-8">
            <div className="max-w-6xl mx-auto">
              <div 
                className="w-full rounded-3xl transition-all duration-300 ease-in-out cursor-pointer"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 20, 147, 0.2)',
                  backdropFilter: 'blur(20px)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 40px rgba(255, 20, 147, 0.1)',
                  padding: '3rem 72px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 20, 147, 0.3)'
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 30px rgba(255, 20, 147, 0.18), 0 0 40px rgba(255, 182, 193, 0.12)'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 20, 147, 0.2)'
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 40px rgba(255, 20, 147, 0.1)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                {/* 상단: 배지 + 메인 타이틀 */}
                <div className="text-center mb-16">
                  {/* 상단 배지 */}
                  <div className="mb-6 inline-block">
                    <div
                      className="rounded-full p-[1px]"
                      style={{
                        background: 'linear-gradient(135deg, rgba(255, 20, 147, 0.5), rgba(138, 43, 226, 0.5))',
                        boxShadow: '0 2px 12px rgba(255, 20, 147, 0.15), 0 0 20px rgba(255, 182, 193, 0.1)',
                      }}
                    >
                      <p 
                        className="px-6 py-2 rounded-full"
                        style={{
                          color: '#f3eefe',
                          letterSpacing: '0.2em',
                          fontSize: '0.8rem',
                          fontWeight: 500,
                          background: 'rgba(50, 20, 65, 0.6)',
                        }}
                      >
                        가장 많은 선택을 받은 리포트
                      </p>
                    </div>
                  </div>
                  
                  {/* 메인 타이틀 */}
                  <h2 
                    className="text-3xl md:text-5xl lg:text-6xl font-elegant font-bold mb-5 md:mb-7"
                    style={{
                      color: '#f7f1ff',
                      letterSpacing: '0.02em',
                      lineHeight: 'clamp(1.15, 1.25, 1.25)',
                    }}
                  >
                    선천코드 분석 맞춤형 연애 리포트
                  </h2>

                  {/* 서브 타이틀 - 중앙 정렬 */}
                  <div className="max-w-3xl mx-auto mb-8 md:mb-16">
                    <p 
                      className="text-xl md:text-2xl font-semibold mb-2 md:mb-2.5"
                      style={{
                        color: 'rgba(245, 239, 255, 0.95)',
                        lineHeight: 'clamp(1.3, 1.45, 1.45)',
                        wordBreak: 'keep-all',
                      }}
                    >
                      당신이 반복하는 연애의 이유는 감정이 아니라 구조입니다.
                    </p>
                    <p 
                      className="text-base md:text-lg"
                      style={{
                        color: 'rgba(245, 239, 255, 0.8)',
                        lineHeight: 'clamp(1.5, 1.7, 1.7)',
                        wordBreak: 'keep-all',
                        opacity: 0.8,
                      }}
                    >
                      선천코드 분석으로 연애 성향, 인연의 흐름, 타이밍을 명확히 정리합니다.
                    </p>
                  </div>
                </div>

                {/* 핵심 카드 그리드 - 모바일 2열, 데스크톱 3열 */}
                <div 
                  className="mx-auto mb-16 px-4 md:px-8"
                  style={{
                    maxWidth: '950px',
                    marginTop: '48px',
                  }}
                >
                  <div 
                    className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-7"
                  >
                    {([
                      {
                        title: '타고난 연애 성향 & 이상형',
                      },
                      {
                        title: '맞는 인연 vs 피해야 할 인연',
                      },
                      {
                        title: '반복되는 연애 패턴의 원인',
                      },
                      {
                        title: '내 코드에 숨겨진 남자복',
                      },
                      {
                        title: '타고난 코드가 만드는 연애의 흐름',
                      },
                      {
                        title: '관계를 바꾸는 실전 연애 조언',
                      },
                    ] as Array<{ title: string; subtitle?: string }>).map((item, index) => (
                      <div
                        key={index}
                        className="group rounded-xl transition-all duration-300 cursor-pointer p-4 md:p-5"
                        style={{
                          background: 'rgba(50, 20, 65, 0.7)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          backdropFilter: 'blur(10px)',
                          minHeight: 'auto',
                          height: 'auto',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center',
                          alignItems: 'center',
                          textAlign: 'center',
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
                          className="text-xs sm:text-sm md:text-base font-semibold mb-2 text-center"
                          style={{
                            color: 'rgba(255, 255, 255, 0.95)',
                            lineHeight: 'clamp(1.4, 1.6, 1.6)',
                            wordBreak: 'keep-all',
                          }}
                        >
                          {item.title}
                        </p>
                        {item.subtitle && (
                          <p 
                            className="text-xs md:text-sm leading-relaxed"
                            style={{
                              color: 'rgba(255, 255, 255, 0.7)',
                              lineHeight: 1.5,
                              wordBreak: 'keep-all',
                              textAlign: 'center',
                            }}
                          >
                            {item.subtitle}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* 하단: CTA 버튼 + 신뢰 문구 */}
                <div className="text-center">
                  {/* CTA 버튼 */}
                  <Link href="/report">
                    <div className="inline-block px-8 md:px-14 py-4 md:py-6 rounded-lg font-semibold text-white transition-all duration-500 relative overflow-hidden group/btn mb-3 w-[90%] sm:w-auto text-base md:text-lg"
                      style={{
                        background: 'linear-gradient(135deg, #ff1493 0%, #c71585 100%)',
                        boxShadow: '0 4px 20px rgba(255, 20, 147, 0.25), 0 0 30px rgba(255, 20, 147, 0.1)',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = '0 12px 48px rgba(255, 20, 147, 0.5), 0 0 60px rgba(255, 20, 147, 0.3)'
                        e.currentTarget.style.transform = 'translateY(-2px)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = '0 4px 20px rgba(255, 20, 147, 0.25), 0 0 30px rgba(255, 20, 147, 0.1)'
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
                    className="text-sm md:text-base"
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
                          borderColor: 'rgba(255, 20, 147, 0.2)',
                          background: 'rgba(255, 255, 255, 0.05)',
                          backdropFilter: 'blur(10px)',
                          padding: '1.5rem',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = 'rgba(255, 20, 147, 0.3)'
                          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)'
                          e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.2), 0 0 25px rgba(255, 20, 147, 0.18), 0 0 35px rgba(255, 182, 193, 0.12)'
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = 'rgba(255, 20, 147, 0.2)'
                          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'
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
