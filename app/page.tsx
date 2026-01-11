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
          background: 'linear-gradient(180deg, #0d0010 0%, #14061f 15%, #1a0726 30%, #1d082e 45%, #1a0726 60%, #14061f 90%, #120014 100%)',
        }}
      >
        {/* 상단 Hero 영역 전용 배경 레이어 */}
        <div className="absolute inset-x-0 top-0 h-[820px] lg:h-[900px] pointer-events-none z-0">
          {/* 궁궐 이미지 */}
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: "url('/image/baekdohwa-palace-bg.png')",
              backgroundPosition: 'center 58%',
              backgroundSize: '150% auto',
              backgroundRepeat: 'no-repeat',
              opacity: 0.45,
              filter: 'brightness(0.32) contrast(1.12) saturate(1.0)',
              mixBlendMode: 'normal',
            }}
          />
          
          {/* 상단 오버레이 */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.35) 40%, rgba(26,7,38,0.55) 70%, rgba(13,0,16,0) 100%)',
            }}
          />
        </div>
        
        {/* 하단 페더링 레이어 (경계선 제거) - 상단 레이어 밖으로 이동 */}
        <div 
          className="absolute left-0 right-0 top-[740px] lg:top-[820px] pointer-events-none z-0"
          style={{
            height: '1000px',
            background: `
              radial-gradient(ellipse 200% 100% at 50% 0%, rgba(26,7,38,0.6) 0%, rgba(20,6,31,0.5) 30%, rgba(13,0,16,0.4) 60%, rgba(13,0,16,0.2) 85%, transparent 100%),
              linear-gradient(to bottom, rgba(26,7,38,0.5) 0%, rgba(20,6,31,0.4) 30%, rgba(13,0,16,0.3) 60%, transparent 100%)
            `,
            filter: 'blur(40px)',
            opacity: 0.95,
            mixBlendMode: 'normal',
          }}
        />
        
        {/* 콘텐츠 */}
        <div className="relative z-10">
          <Hero />
          <ProductCards />
          <Testimonials />
          <Ebooks />
        </div>
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
