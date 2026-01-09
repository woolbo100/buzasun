'use client'

import Link from 'next/link'
import Reveal from './Reveal'

const ebooks = [
  {
    title: "연애비급",
    desc: "관계의 흐름을 바꾸는 심리·프레임·대화 설계",
    href: "/ebooks/love-secret-coming-soon",
    subLabel: "관계 설계 비법서",
  },
  {
    title: "풍요비책",
    desc: "상태를 바꾸면 현실이 따라온다. 풍요 마인드 실전 가이드",
    href: "/ebooks/abundance-secret-coming-soon",
    subLabel: "상태·주파수 비법서",
  },
  {
    title: "재회비방",
    desc: "감정선 복구부터 메시지 설계까지. 재회 기준 만들기",
    href: "/ebooks/reunion-secret-coming-soon",
    subLabel: "메시지·기준 비법서",
  },
]

export default function Ebooks() {
  return (
    <section id="secret-archive" className="relative w-full overflow-hidden pt-0 pb-20 scroll-mt-28" style={{ background: 'transparent' }}>
      {/* 섹션 분리선 */}
      <div className="mx-auto max-w-6xl px-6 lg:px-8 mt-20 md:mt-28 mb-20 md:mb-24">
        <div 
          className="h-px"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(255, 42, 166, 0.3) 20%, rgba(255, 105, 180, 0.4) 50%, rgba(255, 42, 166, 0.3) 80%, transparent 100%)',
            filter: 'blur(1px)',
            boxShadow: '0 0 8px rgba(255, 42, 166, 0.2)',
          }}
        />
      </div>

      {/* 시크릿 비법서 섹션 - 3개 가로 배치 */}
      <Reveal delayMs={200}>
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          {/* 섹션 헤더 */}
          <div className="text-center mb-12">
            {/* 상단 배지 */}
            <Reveal delayMs={100}>
              <div className="mb-6 inline-block">
                <div
                  className="rounded-full p-[1px]"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 20, 147, 0.4), rgba(138, 43, 226, 0.4))',
                    boxShadow: '0 2px 8px rgba(255, 20, 147, 0.12), 0 0 15px rgba(255, 182, 193, 0.08)',
                  }}
                >
                  <p 
                    className="px-6 py-2 rounded-full"
                    style={{
                      color: '#f3eefe',
                      letterSpacing: '0.2em',
                      fontSize: '0.8rem',
                      fontWeight: 500,
                      background: 'rgba(50, 20, 65, 0.5)',
                    }}
                  >
                    시크릿 비법서 3종
                  </p>
                </div>
              </div>
            </Reveal>
            
            {/* 메인 타이틀 */}
            <Reveal delayMs={200}>
              <div className="flex items-center justify-center gap-4 mb-6">
                <h2 
                  className="text-3xl md:text-5xl lg:text-6xl font-elegant font-bold"
                  style={{
                    color: '#f7f1ff',
                    letterSpacing: '0.02em',
                    lineHeight: 'clamp(1.15, 1.25, 1.25)',
                  }}
                >
                  백도화 시크릿 비법서 아카이브
                </h2>
                {/* 전체 보기 링크 */}
                <Link 
                  href="/ebooks"
                  className="hidden md:inline-flex items-center gap-2 text-base md:text-lg font-medium transition-all duration-300 ml-4 relative group/link"
                  style={{
                    color: '#ff7ac8',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.filter = 'drop-shadow(0 0 8px rgba(255, 42, 166, 0.5))'
                    e.currentTarget.style.transform = 'translateX(2px)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.filter = 'none'
                    e.currentTarget.style.transform = 'translateX(0)'
                  }}
                >
                  전체 보기
                  <span className="transition-transform duration-300 group-hover/link:translate-x-1">→</span>
                  <span 
                    className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover/link:w-full"
                    style={{
                      background: 'linear-gradient(90deg, rgba(255, 42, 166, 0.6), rgba(255, 105, 180, 0.8))',
                      boxShadow: '0 0 6px rgba(255, 42, 166, 0.5)',
                    }}
                  />
                </Link>
              </div>
            </Reveal>

            {/* 서브 타이틀 */}
            <Reveal delayMs={300}>
              <p 
                className="text-base md:text-lg max-w-3xl mx-auto"
                style={{
                  color: 'rgba(245, 239, 255, 0.8)',
                  lineHeight: 'clamp(1.5, 1.7, 1.7)',
                  wordBreak: 'keep-all',
                  opacity: 0.8,
                }}
              >
                연애·풍요·재회의 '기준'을 만드는 3권의 시크릿 비법서.<br />
                지금 당신에게 필요한 흐름부터 선택하세요.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {ebooks.map((ebook, index) => (
                <Reveal key={ebook.title} delayMs={300 + index * 100}>
                  <Link 
                    href={ebook.href}
                    className="group block h-full w-full"
                  >
                    <div
                      className="
                        w-full relative h-full overflow-hidden rounded-2xl
                        border transition-all duration-300 ease-out
                        hover:-translate-y-2
                        focus-visible:outline-none focus-visible:ring-2
                      "
                      style={{
                        borderColor: 'rgba(255, 20, 147, 0.2)',
                        background: 'rgba(50, 20, 65, 0.6)',
                        backdropFilter: 'blur(10px)',
                        padding: '1.75rem',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(255, 20, 147, 0.35)'
                        e.currentTarget.style.background = 'rgba(50, 20, 65, 0.75)'
                        e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.3), 0 0 25px rgba(255, 20, 147, 0.2), 0 0 35px rgba(255, 182, 193, 0.15)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(255, 20, 147, 0.2)'
                        e.currentTarget.style.background = 'rgba(50, 20, 65, 0.6)'
                        e.currentTarget.style.boxShadow = 'none'
                      }}
                    >
                      {/* 카테고리 태그 */}
                      <div className="flex items-center gap-2 mb-4 flex-wrap justify-center">
                        <div 
                          className="inline-flex items-center justify-center rounded-full border h-7 min-w-[104px] px-4 text-xs leading-none"
                          style={{
                            borderColor: 'rgba(255, 255, 255, 0.15)',
                            background: 'rgba(255, 255, 255, 0.05)',
                            color: '#cfc7dc',
                          }}
                        >
                          시크릿 비법서
                        </div>
                        {ebook.subLabel && (
                          <div 
                            className="inline-flex items-center justify-center rounded-full border h-7 min-w-[104px] px-4 text-xs leading-none"
                            style={{
                              borderColor: 'rgba(255, 105, 180, 0.25)',
                              background: 'rgba(255, 42, 166, 0.08)',
                              color: '#ff7ac8',
                            }}
                          >
                            {ebook.subLabel}
                          </div>
                        )}
                      </div>

                      {/* 제목 */}
                      <h3 
                        className="text-2xl md:text-3xl font-elegant font-semibold mb-4"
                        style={{
                          color: '#f7f1ff',
                          letterSpacing: '0.01em',
                        }}
                      >
                        {ebook.title}
                      </h3>

                      {/* 한 줄 설명 */}
                      <p 
                        className="text-base md:text-lg mb-6 leading-relaxed"
                        style={{
                          color: 'rgba(255, 255, 255, 0.8)',
                          lineHeight: 1.7,
                          wordBreak: 'keep-all',
                        }}
                      >
                        {ebook.desc}
                      </p>

                      {/* CTA 버튼 */}
                      <div className="mt-auto">
                        <div 
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 border"
                          style={{
                            borderColor: 'rgba(255, 42, 166, 0.3)',
                            background: 'rgba(255, 42, 166, 0.08)',
                            color: '#ff7ac8',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = 'rgba(255, 42, 166, 0.5)'
                            e.currentTarget.style.background = 'rgba(255, 42, 166, 0.15)'
                            e.currentTarget.style.boxShadow = '0 0 12px rgba(255, 42, 166, 0.3)'
                            e.currentTarget.style.transform = 'translateX(2px)'
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = 'rgba(255, 42, 166, 0.3)'
                            e.currentTarget.style.background = 'rgba(255, 42, 166, 0.08)'
                            e.currentTarget.style.boxShadow = 'none'
                            e.currentTarget.style.transform = 'translateX(0)'
                          }}
                        >
                          자세히 보기
                          <span className="transition-transform duration-300">→</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
