'use client'

import Link from 'next/link'
import Reveal from './Reveal'

const products = [
  {
    tag: "맞춤 리포트",
    title: "선천코드 연애상담 리포트",
    desc: "내 연애 패턴·이상형·관계의 함정 포인트를 한 번에 정리하는 맞춤 분석.",
    href: "/report",
  },
  {
    tag: "전자책",
    title: "연애비급",
    desc: "관계의 흐름을 바꾸는 심리·프레임·대화 설계. '애쓰지 않는 매력'의 기술.",
    href: "/ebooks/love",
  },
  {
    tag: "전자책",
    title: "재회비방",
    desc: "감정선 복구부터 메시지 설계까지. 재회에서 흔들리지 않는 기준 만들기.",
    href: "/ebooks/reunion",
  },
  {
    tag: "전자책",
    title: "풍요비책",
    desc: "상태를 바꾸면 현실이 따라온다. 풍요 마인드·주파수 루틴 실전 가이드.",
    href: "/ebooks/abundance",
  },
  {
    tag: "아이템",
    title: "매력 아이템 샵",
    desc: "향·키링·부적·원석 등 '분위기와 에너지'를 고급스럽게 올리는 아이템 큐레이션.",
    href: "/shop",
  },
]

export default function ProductCards() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-14">
      <Reveal>
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-elegant font-semibold tracking-tight text-bd-ivory">
              지금, 당신에게 맞는 선택
            </h2>
            <p className="mt-2 text-sm text-bd-gray opacity-80">
              리포트 · 전자책 · 아이템 — 원하는 방향으로 바로 이동하세요.
            </p>
          </div>

          {/* 선택: 우측 작은 링크 */}
          <Link
            href="/"
            className="hidden text-sm text-bd-gray opacity-80 hover:opacity-100 md:inline transition-opacity"
          >
            전체 보기 →
          </Link>
        </div>
      </Reveal>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p, index) => (
          <Reveal key={p.title} delayMs={index * 100}>
            <Link href={p.href} className="group block">
              <div
                className="
                  relative h-full overflow-hidden rounded-2xl
                  border transition-all duration-300 ease-out
                  hover:-translate-y-1 hover:shadow-[0_18px_60px_-20px_rgba(255,20,147,0.45)]
                  focus-visible:outline-none focus-visible:ring-2
                "
                style={{
                  borderColor: 'rgba(255, 255, 255, 0.1)',
                  background: 'rgba(26, 6, 38, 0.6)',
                  backdropFilter: 'blur(10px)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 182, 193, 0.3)'
                  e.currentTarget.style.background = 'rgba(26, 6, 38, 0.8)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'
                  e.currentTarget.style.background = 'rgba(26, 6, 38, 0.6)'
                }}
              >
                {/* 은은한 빛 번짐 레이어 */}
                <div
                  className="
                    pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full
                    blur-2xl opacity-0 transition-opacity duration-300
                    group-hover:opacity-100
                  "
                  style={{
                    background: 'rgba(255, 182, 193, 0.1)',
                  }}
                />

                <div className="p-6">
                  {/* 상단 태그 */}
                  <div 
                    className="inline-flex items-center rounded-full border px-3 py-1 text-xs opacity-85"
                    style={{
                      borderColor: 'rgba(255, 255, 255, 0.1)',
                      background: 'rgba(255, 255, 255, 0.05)',
                      color: '#cfc7dc',
                    }}
                  >
                    {p.tag}
                  </div>

                  {/* 타이틀/설명 */}
                  <div className="mt-4 text-lg font-elegant font-semibold tracking-tight text-bd-ivory">
                    {p.title}
                  </div>
                  <p className="mt-2 text-sm text-bd-gray opacity-80 leading-relaxed">
                    {p.desc}
                  </p>

                  {/* 하단 CTA */}
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium opacity-90 transition-opacity group-hover:opacity-100"
                    style={{ color: '#ffb3d9' }}
                  >
                    자세히 보기
                    <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                      →
                    </span>
                  </div>
                </div>

                {/* 카드 테두리 하이라이트 */}
                <div
                  className="
                    pointer-events-none absolute inset-0 rounded-2xl
                    border transition-colors
                  "
                  style={{
                    borderColor: 'rgba(255, 255, 255, 0.05)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 182, 193, 0.2)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)'
                  }}
                />
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
