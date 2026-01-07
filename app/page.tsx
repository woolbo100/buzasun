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
      <About />
      <Projects />
      <Contact />
      <Footer />
      <AdminModal />
    </main>
  )
}
