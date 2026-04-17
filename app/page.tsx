'use client'

import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import ProductCards from '@/components/ProductCards'
import Testimonials from '@/components/Testimonials'
import Ebooks from '@/components/Ebooks'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import AdminModal from '@/components/AdminModal'
import BookmarkTassel from '@/components/BookmarkTassel'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import PetalsCanvas from '@/components/PetalsCanvas'

export default function Home() {
  useScrollAnimation()

  return (
    <main className="relative min-h-screen bg-[#0a0514]">
      <Navigation />
      <BookmarkTassel />
      
      {/* 전체 통합 궁궐 배경 및 오버레이 */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* 궁궐 통배경 이미지 */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: "url('/image/main.png')",
            opacity: 0.5, /* 배경 이미지 자체의 투명도 조절 */
          }}
        />
        
        {/* 요청된 다크 오버레이 그라데이션 */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(10, 5, 20, 0.6) 0%, rgba(0, 0, 0, 0.85) 100%)',
          }}
        />

        {/* 페이지 전체 꽃잎 파티클 */}
        <PetalsCanvas color="#EDE6DA" density={35} />
      </div>

      {/* 실질적 콘텐츠 영역 */}
      <div className="relative z-10">
        <Hero />
        
        <div className="max-w-6xl mx-auto px-4">
          <div className="gold-divider my-10" />
          <ProductCards />
          
          <div className="gold-divider my-10" />
          <Testimonials />
          
          <div className="gold-divider my-10" />
          <Ebooks />
          
          <div className="gold-divider my-10" />
          <About />
          
          <div className="gold-divider my-10" />
          <Contact />
        </div>
        
        <Footer />
      </div>

      <AdminModal />
    </main>
  )
}

