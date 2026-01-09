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

export default function Ebooks() {
  return (
    <section className="relative w-full overflow-hidden py-20" style={{ background: 'transparent' }}>
      {/* 전자책 섹션 - 3개 가로 배치 */}
      <Reveal delayMs={200}>
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
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
      </Reveal>
    </section>
  )
}
