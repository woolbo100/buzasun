'use client'

import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Suspense } from "react"

function ComingSoonContent() {
  const searchParams = useSearchParams()
  const title = decodeURIComponent(searchParams?.get('title') ?? "시크릿 비법서")
  const desc = decodeURIComponent(searchParams?.get('desc') ?? "곧 공개됩니다. 현재는 프리뷰 단계예요.")

  return (
    <main 
      className="min-h-screen flex items-center justify-center px-6 py-20"
      style={{
        background: 'linear-gradient(135deg, #0d0010 0%, #15051a 30%, #25081a 60%, #15051a 100%)',
      }}
    >
      <div 
        className="w-full max-w-3xl rounded-3xl border backdrop-blur-xl p-10"
        style={{
          borderColor: 'rgba(255, 20, 147, 0.3)',
          background: 'rgba(26, 6, 38, 0.6)',
          boxShadow: '0 20px 60px rgba(138, 43, 226, 0.3), 0 0 40px rgba(255, 20, 147, 0.2)',
        }}
      >
        <p 
          className="text-sm mb-3"
          style={{
            color: 'rgba(255, 255, 255, 0.6)',
          }}
        >
          준비 중
        </p>

        <h1 
          className="text-3xl md:text-4xl font-semibold leading-tight"
          style={{
            color: '#f7f1ff',
            fontFamily: 'Playfair Display, serif',
            letterSpacing: '0.01em',
          }}
        >
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

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <Link
            href="/#secret-archive"
            className="inline-flex items-center justify-center rounded-xl px-5 py-3 border transition-all duration-300"
            style={{
              borderColor: 'rgba(255, 255, 255, 0.1)',
              background: 'rgba(255, 255, 255, 0.05)',
              color: '#f7f1ff',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'
              e.currentTarget.style.borderColor = 'rgba(255, 20, 147, 0.3)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'
            }}
          >
            시크릿 비법서 3종 보기
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl px-5 py-3 transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, #ff69b4 0%, #ff1493 50%, #c71585 100%)',
              color: '#ffffff',
              boxShadow: '0 4px 15px rgba(255, 20, 147, 0.3), 0 0 20px rgba(138, 43, 226, 0.2)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(255, 20, 147, 0.5), 0 0 30px rgba(138, 43, 226, 0.3)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(255, 20, 147, 0.3), 0 0 20px rgba(138, 43, 226, 0.2)'
            }}
          >
            오픈 알림 받기 / 문의하기
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

export default function ComingSoonPage() {
  return (
    <Suspense fallback={
      <main 
        className="min-h-screen flex items-center justify-center px-6 py-20"
        style={{
          background: 'linear-gradient(135deg, #0d0010 0%, #15051a 30%, #25081a 60%, #15051a 100%)',
        }}
      >
        <div 
          className="w-full max-w-3xl rounded-3xl border backdrop-blur-xl p-10"
          style={{
            borderColor: 'rgba(255, 20, 147, 0.3)',
            background: 'rgba(26, 6, 38, 0.6)',
            boxShadow: '0 20px 60px rgba(138, 43, 226, 0.3), 0 0 40px rgba(255, 20, 147, 0.2)',
          }}
        >
          <p style={{ color: 'rgba(255, 255, 255, 0.6)' }}>로딩 중...</p>
        </div>
      </main>
    }>
      <ComingSoonContent />
    </Suspense>
  )
}
