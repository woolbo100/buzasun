'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import CompatibilityBanner from '@/components/CompatibilityBanner'
import ProductCards from '@/components/ProductCards'
import Testimonials from '@/components/Testimonials'
import Ebooks from '@/components/Ebooks'
import FeaturedProducts from '@/components/FeaturedProducts'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import AdminModal from '@/components/AdminModal'
import BookmarkTassel from '@/components/BookmarkTassel'
import NorigaeElement from '@/components/NorigaeElement'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import GlobalBackground from '@/components/GlobalBackground'
import MobileIntroDoor from '@/components/MobileIntroDoor'

export default function Home() {
  useScrollAnimation()

  // 모바일 인트로 딥 퍼플 심화 시점 메인홈 hero fade-in 연동
  const [isIntroTarget, setIsIntroTarget] = useState<boolean>(false)
  const [heroVisible, setHeroVisible] = useState<boolean>(false)

  const showSecretArchive = true;

  return (
    <main className="relative min-h-screen bg-[#0a0514]">
      {/* 모바일 최초 방문자 전용 인트로 문 & 퍼플 한옥 오버레이 */}
      <MobileIntroDoor
        onIntroActive={(active) => setIsIntroTarget(active)}
        onCrossfadeStart={() => setHeroVisible(true)}
        onComplete={() => {
          setIsIntroTarget(false)
          setHeroVisible(true)
        }}
      />

      <GlobalBackground src="/image/main.png">
        {/* 네비게이션 & 메인 콘텐츠: 퍼플 오버레이가 짙어진 시점부터 900ms 동안 부드럽게 fade-in */}
        <div
          style={{
            opacity: isIntroTarget ? (heroVisible ? 1 : 0) : 1,
            visibility: 'visible',
            transition: 'opacity 900ms cubic-bezier(0.4, 0, 0.2, 1)',
            willChange: 'opacity',
          }}
        >
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
            {showSecretArchive ? (
              <Ebooks />
            ) : (
              <FeaturedProducts />
            )}
            
            <div className="gold-divider my-10" />
            <About />
            
            <div className="gold-divider my-10" />
            <Contact />
            
            <Footer />
          </div>
        </div>

        <AdminModal />
      </GlobalBackground>
    </main>
  )
}
