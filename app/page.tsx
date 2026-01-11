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

export default function Home() {
  useScrollAnimation()

  return (
    <main>
      <Navigation />
      <BookmarkTassel />
      
      {/* Hero ~ 리포트 ~ 후기 ~ 시크릿 비법서 통배경 래퍼 */}
      <div 
        className="relative overflow-hidden"
        style={{ 
          background: 'linear-gradient(180deg, #0d0010 0%, #14061f 15%, #1a0726 30%, #1d082e 45%, #1a0726 60%, #1a0626 75%, #14061f 90%, #120014 100%)',
        }}
      >
        <Hero />
        <ProductCards />
        <Testimonials />
        <Ebooks />
      </div>

      
      {/* 통배경 래퍼 - About/Projects/Contact 공유 */}
      <div 
        className="relative overflow-hidden"
        style={{ 
          background: 'linear-gradient(180deg, #1a0626 0%, #14061f 30%, #120014 60%, #14061f 100%)',
        }}
      >
        {/* 입체감을 위한 추가 그라데이션 레이어 */}
        <div 
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            background: 'radial-gradient(ellipse 80% 50% at 50% 20%, rgba(27, 7, 38, 0.4) 0%, transparent 60%)',
          }}
        />
        {/* 신비로운 오라 오버레이 - 아주 약하게만 */}
        <div 
          className="absolute top-0 left-0 right-0 h-[600px] pointer-events-none z-0"
          style={{
            background: 'radial-gradient(ellipse at center top, rgba(138, 43, 226, 0.06) 0%, rgba(255, 20, 147, 0.03) 20%, transparent 50%)',
          }}
        />
        
        {/* 섹션들 - 경계 없이 자연스럽게 연결 */}
        <div className="relative z-10">
          <About />
          <Contact />
        </div>
      </div>
      
      <Footer />
      <AdminModal />
    </main>
  )
}
