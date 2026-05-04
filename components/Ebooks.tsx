'use client'

import Link from 'next/link'
import Reveal from './Reveal'

const ebooks = [
  {
    title: "연애비급",
    desc: "관계의 흐름을 바꾸는 심리·프레임·대화 설계",
    href: "/checkout?productId=love-secret",
    subLabel: "관계 설계 비법서",
    image: "/image/love-secret-thumb.png"
  },
  {
    title: "풍요비책",
    desc: "상태를 바꾸면 현실이 따라온다. 풍요 마인드 실전 가이드",
    href: "/checkout?productId=abundance-secret",
    subLabel: "상태·주파수 비법서",
    image: "/image/abundance-secret-thumb.png"
  },
  {
    title: "재회비방",
    desc: "감정선 복구부터 메시지 설계까지. 재회 기준 만들기",
    href: "/checkout?productId=reunion-secret",
    subLabel: "메시지·기준 비법서",
    image: "/image/reunion-secret-thumb.png"
  },
] as const

export default function Ebooks() {
  return (
    <section id="secret-archive" className="relative w-full overflow-hidden py-20 md:py-32 scroll-mt-28" style={{ background: 'transparent' }}>
      <Reveal delayMs={200}>
        <div className="container-premium">
          {/* 섹션 헤더 */}
          <div className="text-center mb-16">
            <Reveal delayMs={100}>
              <div className="mb-6 inline-block">
                <div
                  className="rounded-full p-[1px]"
                  style={{
                    background: 'linear-gradient(135deg, var(--accent-gold), #D4B2A7)',
                    boxShadow: '0 2px 8px rgba(212, 178, 167, 0.12)',
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

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
              {ebooks.map((ebook, index) => (
                <Reveal key={ebook.title} delayMs={300 + index * 100}>
                  <Link 
                    href={ebook.href}
                    className="group block h-full w-full"
                  >
                    <div className="gungjung-glass h-full flex flex-col relative overflow-hidden transition-all duration-500 hover:-translate-y-2">
                      
                      {/* 상품 이미지 영역 */}
                      <div className="relative aspect-[3/4] overflow-hidden">
                        <img 
                          src={ebook.image} 
                          alt={ebook.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1A0F2E] via-transparent to-transparent opacity-60" />
                      </div>

                      <div className="p-8 flex flex-col flex-grow">
                        {/* 카테고리 태그 */}
                        <div className="flex items-center gap-2 mb-4 flex-wrap">
                          <div 
                            className="px-3 py-1 rounded-full border text-[10px] md:text-xs tracking-wider"
                            style={{
                              borderColor: 'rgba(216, 191, 163, 0.3)',
                              background: 'rgba(59, 15, 27, 0.4)',
                              color: 'var(--text-ivory)',
                            }}
                          >
                            {ebook.subLabel}
                          </div>
                        </div>

                        <h3 className="text-2xl md:text-3xl font-elegant font-bold mb-4 text-[#F5F5F5] group-hover:text-[var(--accent-gold)] transition-colors">
                          {ebook.title}
                        </h3>

                        <p className="text-sm md:text-base mb-8 leading-relaxed text-[#EDE6DA] opacity-70 group-hover:opacity-100 transition-opacity">
                          {ebook.desc}
                        </p>

                        <div className="mt-auto">
                          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--accent-gold)]">
                            자세히 보기 <span style={{ color: 'var(--accent-pink)' }}>→</span>
                          </div>
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
