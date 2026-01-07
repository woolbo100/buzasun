'use client'

import Link from 'next/link'

export default function ProductCards() {
  const cards = [
    {
      title: '선천코드 연애 리포트',
      description: '연애 패턴 · 이성복 · 재회 가능성',
      cta: '리포트 보러가기',
      href: '/report',
    },
    {
      title: '연애 · 풍요 전자책',
      description: '연애비급 · 풍요비책 · 재회비방',
      cta: '전자책 보기',
      href: '/ebooks',
    },
    {
      title: '백도화 아이템샵',
      description: '상태를 바꾸는 감각적 도구',
      cta: '아이템 보러가기',
      href: '/shop',
    },
  ]

  return (
    <section className="py-16 md:py-24 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="fade-in-up rounded-lg p-6 md:p-8 transition-all"
              style={{
                background: '#1a0a2e',
                border: '1px solid rgba(255, 20, 147, 0.2)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 20, 147, 0.4)'
                e.currentTarget.style.transform = 'translateY(-4px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 20, 147, 0.2)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <h3 className="text-2xl md:text-3xl font-elegant font-bold text-bd-ivory mb-4">
                {card.title}
              </h3>
              <p className="text-bd-gray mb-6 leading-relaxed">
                {card.description}
              </p>
              <Link
                href={card.href}
                className="inline-flex items-center text-bd-pink2 font-semibold transition-colors hover:text-bd-pink"
              >
                {card.cta}
                <i className="fas fa-arrow-right ml-2 text-sm"></i>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
