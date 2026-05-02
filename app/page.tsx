'use client'

import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import CompatibilityBanner from '@/components/CompatibilityBanner'
import ProductCards from '@/components/ProductCards'
import Testimonials from '@/components/Testimonials'
import Ebooks from '@/components/Ebooks'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import AdminModal from '@/components/AdminModal'
import BookmarkTassel from '@/components/BookmarkTassel'
import NorigaeElement from '@/components/NorigaeElement'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import GlobalBackground from '@/components/GlobalBackground'

export default function Home() {
  useScrollAnimation()

  return (
    <main className="relative min-h-screen bg-[#0a0514]">
      <GlobalBackground src="/image/main.png">
        <Navigation />

        {/* 헤더 바로 오른쪽 아래 배치되는 고정 노리개 (nlg) */}
        <div 
          className="fixed top-0 right-4 md:right-12 z-[60] pointer-events-none hidden sm:block"
          style={{ 
            animation: 'swingGentle 4s ease-in-out infinite',
            transformOrigin: 'top center',
            filter: 'drop-shadow(0 0 20px rgba(212, 178, 167, 0.4))'
          }}
        >
          <NorigaeElement src="/image/nlg.png" size={180} />
        </div>

        {/* 실질적 콘텐츠 영역 */}
        <div className="relative z-10">
          <Hero />
          
          <div className="gold-divider my-10" />
          <ProductCards />
          
          {/* 프리미엄 궁합 리포트 배너 - 연애 리포트(ProductCards) 아래로 이동 */}
          <CompatibilityBanner />
          
          <div className="gold-divider my-16" />
          <Testimonials />
          
          <div className="gold-divider my-10" />
          <Ebooks />
          
          <div className="gold-divider my-10" />
          <About />
          
          <div className="gold-divider my-10" />
          <Contact />
          
          <Footer />
        </div>

        <AdminModal />
      </GlobalBackground>
    </main>
  )
}
