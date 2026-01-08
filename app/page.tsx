'use client'

import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import ProductCards from '@/components/ProductCards'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import AdminModal from '@/components/AdminModal'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function Home() {
  useScrollAnimation()

  return (
    <main>
      <Navigation />
      <Hero />
      <ProductCards />
      
      {/* 통배경 래퍼 - About/Projects/Contact 공유 */}
      <div className="relative bg-gradient-to-b from-[#1b0726] to-[#14061f] overflow-hidden">
        {/* 신비로운 오라 오버레이 레이어들 */}
        <div 
          className="absolute top-0 left-0 right-0 h-96 pointer-events-none z-0"
          style={{
            background: 'radial-gradient(ellipse at center top, rgba(138, 43, 226, 0.1) 0%, rgba(255, 20, 147, 0.05) 25%, transparent 60%)',
          }}
        />
        <div 
          className="absolute top-0 left-0 right-0 bottom-0 pointer-events-none z-0"
          style={{
            background: 'linear-gradient(to bottom, transparent 0%, rgba(20, 6, 31, 0.3) 50%, rgba(20, 6, 31, 0.6) 100%)',
          }}
        />
        
        {/* 섹션들 */}
        <div className="relative z-10">
          <About />
          <Projects />
          <Contact />
        </div>
      </div>
      
      <Footer />
      <AdminModal />
    </main>
  )
}
