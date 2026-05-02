'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import GlobalBackground from '@/components/GlobalBackground'
import { motion, AnimatePresence } from 'framer-motion'
import { supabase } from '@/lib/supabase'

// Premium Reveal Animation Component
const Reveal = ({ children, delayMs = 0 }: { children: React.ReactNode, delayMs?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 1.2, delay: delayMs / 1000, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
)

export default function ShopPage() {
  const [products, setProducts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [activeCategory, setActiveCategory] = useState('ALL')
  const productSectionRef = useRef<HTMLElement>(null)

  // 카테고리 정의 (DB 값 -> UI 레이블 매핑)
  const categoryMap: { [key: string]: string } = {
    'private_reading': 'PRIVATE READING',
    'secret_method': 'SECRET METHOD',
    'energy_care': 'ENERGY CARE',
    'private_object': 'PRIVATE OBJECT'
  }

  const categories = ['ALL', 'PRIVATE READING', 'SECRET METHOD', 'ENERGY CARE', 'PRIVATE OBJECT']
  
  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true)
        const { data, error } = await supabase
          .from('products')
          .select('*')
          .eq('is_active', true)
          .order('main_sort_order', { ascending: true })

        if (!error && data) {
          setProducts(data)
        }
      } catch (err) {
        console.error("Shop: Failed to fetch products", err)
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  const filteredProducts = activeCategory === 'ALL' 
    ? products 
    : products.filter(p => categoryMap[p.category] === activeCategory || p.category === activeCategory)

  const scrollToProducts = () => {
    productSectionRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main className="relative min-h-screen bg-[#0c0816] text-white selection:bg-[var(--accent-gold)] selection:text-black">
      <GlobalBackground src="/image/shop-hero.png" brightCenter={false}>
        <Navigation />
        
        {/* 1. Hero Section: Premium Boutique Atmosphere */}
        <section className="relative h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[120%] h-[120%] bg-gradient-radial from-[rgba(138,43,226,0.15)] via-transparent to-transparent pointer-events-none"></div>
          
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="flex flex-col items-center text-center">
              <Reveal>
                <span className="text-[var(--accent-gold)] tracking-[0.6em] text-sm md:text-base mb-8 block uppercase font-elegant">
                  Baekdohwa Secret Boutique
                </span>
              </Reveal>
              
              <Reveal delayMs={200}>
                <h1 className="text-5xl md:text-8xl font-elegant font-bold mb-12 leading-tight">
                  <span className="gradient-text italic px-4">비밀상점</span>
                </h1>
              </Reveal>
              
              <Reveal delayMs={400}>
                <p className="text-lg md:text-2xl text-[#EDE6DA] opacity-80 max-w-2xl mx-auto leading-relaxed mb-16 break-keep font-light">
                  누구나 들어올 수 있지만,<br /> 아무나 쉽게 지나칠 수 없는 당신만을 위한 특별한 공간.
                </p>
              </Reveal>
              
              <Reveal delayMs={600}>
                <div className="flex flex-wrap justify-center gap-6">
                  <button 
                    onClick={scrollToProducts}
                    className="btn-primary px-12 py-5 rounded-full text-lg tracking-widest font-bold group overflow-hidden relative"
                  >
                    <span className="relative z-10">진열대 보기</span>
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
                  </button>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section id="product-list" className="sticky top-16 z-40 py-8 bg-[#0c0816]/80 backdrop-blur-md border-y border-white/5">
          <div className="container mx-auto px-6">
            <div className="flex justify-center items-center gap-8 md:gap-16 overflow-x-auto no-scrollbar py-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-xs md:text-sm tracking-[0.3em] whitespace-nowrap transition-all relative py-2 uppercase ${
                    activeCategory === cat 
                      ? 'text-[var(--accent-gold)] font-bold scale-110' 
                      : 'text-white/40 hover:text-white/80'
                  }`}
                >
                  {cat}
                  {activeCategory === cat && (
                    <motion.span 
                      layoutId="cat-underline"
                      className="absolute bottom-0 left-0 w-full h-[2px] bg-[var(--accent-gold)] shadow-[0_0_12px_var(--accent-gold)]"
                    ></motion.span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* 2. Product Grid Section */}
        <section ref={productSectionRef} className="py-32 px-6 bg-[#0c0816]/50">
          <div className="container mx-auto max-w-7xl">
            {loading ? (
              <div className="py-40 text-center">
                <p className="text-accent-gold animate-pulse tracking-[0.3em]">비밀 진열대를 정리하는 중...</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                <AnimatePresence mode="popLayout">
                  {filteredProducts.map((product, idx) => (
                    <motion.div
                      key={product.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.6, delay: idx * 0.1 }}
                    >
                      <Link href={`/reports/${product.slug}`} className="group block">
                        <div className="gungjung-glass overflow-hidden rounded-3xl border border-white/5 group-hover:border-[var(--accent-gold)]/40 transition-all duration-700 hover:shadow-[0_40px_80px_rgba(0,0,0,0.7),0_0_30px_rgba(212,178,167,0.15)] bg-gradient-to-b from-white/[0.03] to-transparent">
                          <div className="relative aspect-[3/4] overflow-hidden">
                            <Image 
                              src={product.image_url || '/image/product-placeholder.png'} 
                              alt={product.name}
                              fill
                              className="object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0816] via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-700"></div>
                          </div>

                          <div className="p-8 space-y-4 relative">
                            <div className="flex justify-between items-start">
                              <span className="text-[10px] tracking-[0.3em] text-[var(--accent-gold)] opacity-70 uppercase font-bold">
                                {categoryMap[product.category] || 'PRIVATE READING'}
                              </span>
                              <div className="w-1 h-1 rounded-full bg-[var(--accent-gold)] shadow-[0_0_8px_var(--accent-gold)]"></div>
                            </div>
                            
                            <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-[var(--accent-gold)] transition-colors duration-500">{product.name}</h3>
                            <p className="text-sm text-[#EDE6DA] opacity-40 leading-relaxed font-light line-clamp-2">{product.description}</p>
                            
                            <div className="pt-6">
                              <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[var(--accent-gold)]/30 to-transparent mb-6"></div>
                              <div className="flex justify-between items-center">
                                <span className="text-xl font-elegant text-[var(--accent-gold)] tracking-widest font-bold">
                                  ₩{product.price?.toLocaleString()}
                                </span>
                                <i className="fas fa-arrow-right text-[var(--accent-gold)]/40 group-hover:translate-x-2 transition-transform duration-500"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            )}
            
            {!loading && filteredProducts.length === 0 && (
              <div className="py-40 text-center">
                <Reveal>
                  <p className="text-[#EDE6DA]/30 tracking-[0.5em] text-sm uppercase">이 카테고리의 비밀 아이템을 준비 중입니다</p>
                </Reveal>
              </div>
            )}
          </div>
        </section>

        {/* 4. Trust Section */}
        <section className="py-32 px-6">
          <div className="container mx-auto max-w-5xl">
            <Reveal>
              <div className="gungjung-glass p-12 md:p-24 text-center border-[var(--accent-gold)]/10 relative overflow-hidden group">
                <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-[#8a2be2]/10 blur-[120px] rounded-full pointer-events-none"></div>
                
                <h2 className="text-4xl md:text-5xl font-elegant font-bold mb-12 text-white relative z-10">
                  왜 백도화는 다를까요
                </h2>
                <div className="space-y-10 text-[#EDE6DA] opacity-80 leading-relaxed mb-16 max-w-2xl mx-auto break-keep text-base md:text-lg relative z-10 font-light">
                  <p>우리는 단순한 상품을 판매하지 않습니다.</p>
                  <p>당신의 흐름을 읽고, 당신의 선택이 더 선명해질 수 있도록 돕습니다.</p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-12 relative z-10">
                  {[
                    { icon: 'fa-magic', title: '1:1 프리미엄 제작', desc: '모든 리포트는 한 분만을 위해 정성껏 제작됩니다.' },
                    { icon: 'fa-brain', title: '직접 해석 + AI 리딩', desc: '전문적인 통찰과 정밀한 분석이 만났습니다.' },
                    { icon: 'fa-heart', title: '높은 재구매율', desc: '경험해보신 분들이 다시 찾는 개인 맞춤형 리포트입니다.' }
                  ].map((item, i) => (
                    <div key={i} className="space-y-4 group/item">
                      <div className="w-12 h-12 mx-auto rounded-full bg-[rgba(212,178,167,0.1)] border border-[var(--accent-gold)]/20 flex items-center justify-center text-[var(--accent-gold)] group-hover/item:bg-[var(--accent-gold)]/20 transition-all duration-500">
                        <i className={`fas ${item.icon}`}></i>
                      </div>
                      <div className="text-[var(--accent-gold)] font-bold text-lg tracking-wider">{item.title}</div>
                      <p className="text-xs opacity-50 leading-relaxed break-keep font-light">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <Footer />
      </GlobalBackground>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .gradient-text {
          background: linear-gradient(135deg, #F5F5F5 0%, var(--accent-gold) 50%, #BA8D7E 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          filter: drop-shadow(0 0 15px rgba(212, 178, 167, 0.3));
        }
      `}</style>
    </main>
  )
}
