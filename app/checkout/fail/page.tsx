'use client'

import { Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import GlobalBackground from '@/components/GlobalBackground'
import Reveal from '@/components/Reveal'
import { XCircle, AlertCircle, RefreshCcw, Headset } from 'lucide-react'

function FailContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const errorMessage = searchParams.get('error_msg') || '결제 중 오류가 발생했습니다.'
  const errorCode = searchParams.get('error_code')

  return (
    <div className="container-premium py-32">
      <div className="max-w-2xl mx-auto text-center">
        <Reveal>
          <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-8 border border-red-500/30 shadow-[0_0_30px_rgba(239,68,68,0.2)]">
            <XCircle className="w-10 h-10 text-red-500" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-elegant font-bold mb-6 text-white leading-tight">
            결제에 <span className="text-red-500">실패하였습니다</span>
          </h1>
          
          <div className="gungjung-glass p-8 mb-12 text-left space-y-4 border-red-500/10">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-5 h-5 text-red-400 mt-1 shrink-0" />
              <div>
                <p className="text-white font-medium mb-1">실패 사유</p>
                <p className="text-sm text-white/60">{errorMessage}</p>
                {errorCode && <p className="text-[10px] text-white/30 mt-2">Error Code: {errorCode}</p>}
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => router.back()}
              className="btn-primary px-10 py-4 rounded-xl font-bold tracking-widest flex items-center justify-center gap-2"
            >
              <RefreshCcw className="w-4 h-4" /> 결제 재시도
            </button>
            <Link 
              href="/contact" 
              className="px-10 py-4 rounded-xl border border-white/10 text-white/60 hover:text-white transition-all flex items-center justify-center gap-2"
            >
              <Headset className="w-4 h-4" /> 고객센터 문의
            </Link>
          </div>
          
          <p className="mt-12 text-sm text-white/30">
            문제가 지속될 경우 브라우저를 새로고침하거나 다른 결제 수단을 이용해 보세요.
          </p>
        </Reveal>
      </div>
    </div>
  )
}

export default function CheckoutFailPage() {
  return (
    <main className="relative min-h-screen bg-[#0a0514]">
      <GlobalBackground src="/image/main4.png">
        <Navigation />
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><p className="text-red-500 animate-pulse">Loading...</p></div>}>
          <FailContent />
        </Suspense>
        <Footer />
      </GlobalBackground>

      <style jsx global>{`
        .font-elegant { font-family: 'GmarketSans', sans-serif; }
        .gungjung-glass {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
        .btn-primary {
          background: linear-gradient(135deg, var(--accent-gold) 0%, #BA8D7E 100%);
          color: #1a0f2e;
          box-shadow: 0 10px 30px rgba(212, 178, 167, 0.3);
          transition: all 0.5s ease;
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 40px rgba(212, 178, 167, 0.5);
          filter: brightness(1.1);
        }
      `}</style>
    </main>
  )
}
