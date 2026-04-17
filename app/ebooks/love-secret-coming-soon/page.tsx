'use client'

import Link from "next/link"

export default function LoveSecretComingSoon() {
  const title = "연애비급"
  const desc = "관계의 흐름을 바꾸는 심리·프레임·대화 설계 비법서"

  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-20 bg-[var(--primary-purple)]">
      <div className="gungjung-glass w-full max-w-2xl p-10 md:p-14 text-center">
        <p 
          className="text-sm mb-3"
          style={{
            color: 'rgba(255, 255, 255, 0.6)',
          }}
        >
          준비 중
        </p>

        <h1 className="text-3xl md:text-5xl font-elegant font-bold mb-6 gradient-text">
          {title}
        </h1>

        <p 
          className="mt-4 leading-relaxed"
          style={{
            color: 'rgba(255, 255, 255, 0.7)',
            lineHeight: '1.7',
            wordBreak: 'keep-all',
          }}
        >
          {desc}
        </p>

        <div 
          className="mt-6 p-4 rounded-xl"
          style={{
            background: 'rgba(255, 20, 147, 0.05)',
            border: '1px solid rgba(255, 20, 147, 0.1)',
          }}
        >
          <p 
            className="text-sm leading-relaxed"
            style={{
              color: 'rgba(255, 255, 255, 0.8)',
              lineHeight: '1.7',
              wordBreak: 'keep-all',
            }}
          >
            아직 열리진 않았지만, 중요한 공간입니다.
            <br />
            이 비법서는 현재 준비 중이며, 가장 먼저 공개됩니다.
          </p>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/#ebooks"
            className="inline-flex items-center justify-center rounded-xl px-8 py-4 border border-[var(--glass-border)] bg-white/[0.03] text-bd-ivory hover:bg-white/[0.08] transition-all duration-300 font-elegant"
          >
            다른 비법서 보기
          </Link>
          <Link
            href="/contact"
            className="btn-primary inline-flex items-center justify-center rounded-xl px-8 py-4 font-elegant font-bold text-lg transition-all"
          >
            오픈 알림 받기
          </Link>
        </div>

        <p 
          className="mt-6 text-xs"
          style={{
            color: 'rgba(255, 255, 255, 0.45)',
          }}
        >
          * 정식 판매 페이지가 오픈되면 이 페이지는 자동으로 상세 페이지로 연결됩니다.
        </p>
      </div>
    </main>
  )
}
