'use client'

import Link from 'next/link'
import Reveal from './Reveal'
import NorigaeElement from './NorigaeElement'

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
] as const

export default function Ebooks() {
  return (
    <section id="secret-archive" className="relative w-full overflow-hidden py-20 md:py-32 scroll-mt-28" style={{ background: 'transparent' }}>
      <Reveal delayMs={200}>
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          {/* 섹션 헤더 */}
          <div className="text-center mb-16">
            <Reveal delayMs={100}>
              <div className="mb-6 inline-block">
                <div
                  className="rounded-full p-[1px]"
                  style={{
                    background: 'linear-gradient(135deg, var(--accent-gold), #8A6D3B)',
                    boxShadow: '0 2px 8px rgba(184, 150, 74, 0.12)',
                  }}
                >
                  <p 
                    className="px-6 py-2 rounded-full"
                    style={{
                      color: '#f3eefe',
                      letterSpacing: '0.2em',
                      fontSize: '0.8rem',
                      fontWeight: 500,
                      background: 'rgba(59, 15, 27, 0.5)',
                    }}
                  >
                    시크릿 비법서 3종
                  </p>
                </div>
              </div>
            </Reveal>
            
            <Reveal delayMs={200}>
              <div className="flex flex-col items-center justify-center gap-4 mb-8">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-elegant font-bold text-[#F5F5F5]">
                  백도화 시크릿 비법서 아카이브
                </h2>
                <Link 
                  href="/ebooks"
                  className="hidden md:inline-flex items-center gap-2 text-base md:text-lg font-medium transition-all duration-300 ml-4 relative group/link"
                  style={{
                    color: 'var(--accent-gold)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.filter = 'drop-shadow(0 0 8px var(--accent-gold-soft))'
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
                      background: 'var(--accent-gold)',
                      boxShadow: '0 0 6px var(--accent-gold-soft)',
                    }}
                  />
                </Link>
              </div>
            </Reveal>

            <Reveal delayMs={300}>
              <p className="text-base md:text-lg max-w-3xl mx-auto text-[#EDE6DA] opacity-80 leading-relaxed">
                연애·풍요·재회의 '기준'을 만드는 3권의 시크릿 비법서.<br />
                지금 당신에게 필요한 흐름부터 선택하세요.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {ebooks.map((ebook, index) => (
                <Reveal key={ebook.title} delayMs={300 + index * 100}>
                  <Link 
                    href={ebook.href}
                    className="group block h-full w-full"
                  >
                    <div className="gungjung-glass h-full p-8 flex flex-col relative overflow-hidden">
                      {/* 노리개 장식 포인트 */}
                      <NorigaeElement className="absolute -top-4 -right-4 opacity-30 group-hover:opacity-60 transition-opacity" size={60} />
                      
                      {/* 카테고리 태그 */}
                      <div className="flex items-center gap-2 mb-6 flex-wrap">
                        <div 
                          className="px-3 py-1 rounded-full border text-[10px] md:text-xs tracking-wider"
                          style={{
                            borderColor: 'rgba(184, 150, 74, 0.3)',
                            background: 'rgba(59, 15, 27, 0.4)',
                            color: 'var(--text-ivory)',
                          }}
                        >
                          {ebook.subLabel}
                        </div>
                      </div>

                      <h3 className="text-2xl md:text-3xl font-elegant font-bold mb-4 text-[#F5F5F5]">
                        {ebook.title}
                      </h3>

                      <p className="text-sm md:text-base mb-8 leading-relaxed text-[#EDE6DA] opacity-70">
                        {ebook.desc}
                      </p>

                      <div className="mt-auto">
                        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#B8964A] group-hover:translate-x-1 transition-transform">
                          자세히 보기 <span style={{ color: 'var(--accent-pink)' }}>→</span>
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
