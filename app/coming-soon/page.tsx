'use client'

import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Suspense } from "react"
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import GlobalBackground from '@/components/GlobalBackground'

function ComingSoonContent() {
  const searchParams = useSearchParams()
  const title = decodeURIComponent(searchParams?.get('title') ?? "시크릿 비법서")
  const desc = decodeURIComponent(searchParams?.get('desc') ?? "곧 공개됩니다. 현재는 프리뷰 단계예요.")

  return (
    <div className="flex items-center justify-center min-h-[70vh] px-6 py-20">
      {/* Rule 5: 텍스트 및 UI 레이어 보호를 위한 궁중유리 카드 */}
      <div className="gungjung-glass w-full max-w-2xl p-10 md:p-14 text-center">
        <p className="text-sm mb-3 text-white/60">준비 중</p>
        
        <h1 className="text-4xl md:text-5xl font-elegant font-bold mb-8 gradient-text">
          {title}
        </h1>
        
        <p className="mt-4 leading-relaxed text-[#EDE6DA] opacity-70 font-elegant text-lg">
          {desc}
        </p>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/#ebooks"
            className="inline-flex items-center justify-center rounded-xl px-8 py-4 border border-[var(--glass-border)] bg-white/[0.03] text-[#EDE6DA] hover:bg-white/[0.08] transition-all duration-300 font-elegant"
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

        <p className="mt-8 text-xs text-white/40">
          * 정식 판매 페이지가 오픈되면 이 페이지는 자동으로 상세 페이지로 연결됩니다.
        </p>
      </div>
    </div>
  )
}

export default function ComingSoonPage() {
  return (
    <main className="relative min-h-screen">
      <GlobalBackground src="/image/main4.png">
        <Navigation />
        
        <Suspense fallback={
          <div className="flex items-center justify-center min-h-[70vh] px-6 py-20">
            <div className="gungjung-glass w-full max-w-2xl p-10 md:p-14 text-center">
              <p className="text-[#EDE6DA] opacity-50">상기하는 중...</p>
            </div>
          </div>
        }>
          <ComingSoonContent />
        </Suspense>

        <Footer />
      </GlobalBackground>
    </main>
  )
}
