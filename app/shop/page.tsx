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

  // 카테고리 정의
  const categories = ['ALL', 'PREMIUM REPORT', 'SECRET METHOD', 'ENERGY CARE', 'PRIVATE OBJECT']

  // 슬러그 기반 기본 이미지 매핑
  const defaultImageMap: { [key: string]: string } = {
    'baekdohwa-report': '/image/product-love-report.png',
    'premium-compatibility-report': '/image/premium_compatibility_report.png',
    'reunion-secret': '/image/reunion-secret-thumb.png',
    'reunion-secret-method': '/image/reunion-secret-thumb.png',
    'abundance-secret': '/image/abundance-secret-thumb.png',
    'abundance-secret-guide': '/image/abundance-secret-thumb.png',
    'love-secret': '/image/love-secret-thumb.png',
    'love-secret-ebook': '/image/love-secret-thumb.png',
    'miss-highlander': '/image/miss/m1.webp',
    'wangbitna-cream': '/image/wangbitna/w7.webp',
    'golden-forever-lady': '/image/golden/m7.webp',
    'premium-bookmark': '/image/pre/p7.webp'
  }
  
  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true)
        const { data, error } = await supabase
          .from('products')
          .select('*')
          .eq('is_active', true)
          .order('sort_order', { ascending: true })

        if (!error && data) {
          // 카테고리 매핑 로직 제거 (DB 값 그대로 사용)
          let mappedData = data.map(p => {
            const isCompatibility = (p.name?.includes('궁합') || p.slug?.includes('compatibility'));
            const slug = p.slug?.trim().toLowerCase();
            const isMissHighlander = slug === 'miss-highlander';
            const isWangbitna = slug === 'wangbitna-cream';
            const isGoldenForever = slug === 'golden-forever-lady';
            const isLoveSecret = p.slug?.includes('love-secret') || p.name?.includes('연애비급');
            const isAbundanceSecret = p.slug?.includes('abundance-secret') || p.name?.includes('풍요비책');
            const isReunionSecret = p.slug?.includes('reunion-secret') || p.name?.includes('재회비방');
            const isPremiumBookmark = slug === 'premium-bookmark';
            
            // 슬러그 보정 (사용자 지침 반영: 공백 및 표준 ID 유지)
            let currentSlug = p.slug;
            
            // 상품명 보정 (필요한 경우에만)
            let currentName = p.name?.trim();
            if (currentSlug.includes('wangbitna-cream') && !currentName?.includes('어디서나')) {
              currentName = '어디서나 왕빛나 크림';
            }

            return {
              ...p,
              name: currentName,
              slug: currentSlug,
              main_image: isMissHighlander ? '/image/miss/m1.webp' : 
                          isWangbitna ? '/image/wangbitna/w7.webp' :
                          isGoldenForever ? '/image/golden/m7.webp' :
                          isLoveSecret ? '/image/love-secret-thumb.png' :
                          isAbundanceSecret ? '/image/abundance-secret-thumb.png' :
                          isReunionSecret ? '/image/reunion-secret-thumb.png' :
                          isPremiumBookmark ? '/image/pre/p7.webp' :
                          (isCompatibility ? '/image/premium_compatibility_v3.png?v=4' : p.main_image)
            };
          })

          // 미스하이랜더 플러스가 DB에 없을 경우 수동 추가
          const hasMissHighlander = mappedData.some(p => p.slug === 'miss-highlander')
          if (!hasMissHighlander) {
            mappedData.push({
              id: 'manual-miss-highlander',
              name: '미스하이랜더 플러스',
              slug: 'miss-highlander',
              category: 'ENERGY CARE',
              description: '프리미엄 이너뷰티 루틴을 위한 럭셔리 뷰티 케어 셀렉션',
              price: 69000,
              main_image: '/image/miss/m1.webp',
              is_active: true,
              type: 'physical'
            })
          }

          // 왕빛나 크림 수동 추가
          const hasWangbitna = mappedData.some(p => p.slug === 'wangbitna-cream')
          if (!hasWangbitna) {
            mappedData.push({
              id: 'manual-wangbitna-cream',
              name: '어디서나 왕빛나 크림',
              slug: 'wangbitna-cream',
              category: 'ENERGY CARE',
              description: '여성의 우아한 자신감과 탄력 있는 피부를 위한 프리미엄 바디 케어 리추얼',
              price: 59000,
              main_image: '/image/wangbitna/w7.webp',
              is_active: true,
              type: 'physical'
            })
          }

          // 골든 포에버 레이디 수동 추가
          const hasGoldenForever = mappedData.some(p => p.slug === 'golden-forever-lady')
          if (!hasGoldenForever) {
            mappedData.push({
              id: 'manual-golden-forever-lady',
              name: 'Golden Forever Lady',
              slug: 'golden-forever-lady',
              category: 'ENERGY CARE',
              description: '갱년기 여성 건강의 균형을 위한 프리미엄 여성 건강기능식품',
              price: 89000,
              main_image: '/image/golden/m7.webp',
              is_active: true,
              type: 'physical'
            })
          }
          // 프리미엄 북마크 수동 추가
          const hasPremiumBookmark = mappedData.some(p => p.slug === 'premium-bookmark')
          if (!hasPremiumBookmark) {
            mappedData.push({
              id: 'manual-premium-bookmark',
              name: '프리미엄 플라워 북마크 세트',
              slug: 'premium-bookmark',
              category: 'PRIVATE OBJECT',
              description: '섬세한 금속 디테일과 우아한 태슬 장식이 더해진 프리미엄 플라워 북마크 세트입니다.',
              price: 9900,
              main_image: '/image/pre/p7.webp',
              is_active: true,
              type: 'physical',
              featured: true,
              sort_order: 10
            })
          }

          // [Hiding Logic] 전자책 3종 숨김 처리 (데이터는 유지하되 외부 노출만 차단)
          const hiddenSlugs = ['love-secret-ebook', 'abundance-secret-guide', 'reunion-secret-method', 'love-secret', 'abundance-secret', 'reunion-secret'];
          const finalData = mappedData.filter(p => !hiddenSlugs.includes(p.slug?.trim().toLowerCase()));

          setProducts(finalData)
        }
      } catch (err) {
        console.error("Shop: Failed to fetch products", err)
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  // [Hiding Logic] 숨겨진 상품이 포함된 카테고리 필터링
  const visibleCategories = categories.filter(cat => cat !== 'SECRET METHOD');

  const filteredProducts = activeCategory === 'ALL' 
    ? products 
    : products.filter(p => p.category === activeCategory)

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
              {visibleCategories.map((cat) => (
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
        <section ref={productSectionRef} className="py-32 bg-[#0c0816]/50">
          <div className="container-premium">
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
                      <Link 
                        href={
                          (() => {
                            const s = product.slug.trim();
                            if (product.type === 'physical' || ['miss-highlander', 'wangbitna-cream', 'premium-bookmark'].includes(s)) return `/shop/${s}`;
                            if (s === 'baekdohwa-report') return `/reports/baekdohwa-report`;
                            if (s === 'premium-compatibility-report') return `/reports/premium-compatibility-report`;
                            if (s === 'love-secret-ebook') return `/reports/love-secret`;
                            if (s === 'abundance-secret-guide') return `/reports/abundance-secret`;
                            if (s === 'reunion-secret-method') return `/reports/reunion-secret`;
                            return `/reports/${s}`;
                          })()
                        } 
                        className="group block"
                      >
                        <div className="gungjung-glass overflow-hidden rounded-3xl border border-white/5 group-hover:border-[var(--accent-gold)]/40 transition-all duration-700 hover:shadow-[0_40px_80px_rgba(0,0,0,0.7),0_0_30px_rgba(212,178,167,0.15)] bg-gradient-to-b from-white/[0.03] to-transparent">
                          <div className="relative aspect-[3/4] overflow-hidden">
                            <Image 
                              src={product.main_image || defaultImageMap[product.slug] || '/image/product-love-report.png'} 
                              alt={product.name}
                              fill
                              className="object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                            />
                            {product.slug === 'baekdohwa-report' && (
                              <div className="absolute top-0 right-1 w-28 md:w-32 z-20 drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)] transform transition-transform duration-700 group-hover:scale-110 origin-top">
                                <Image 
                                  src="/image/pick.png" 
                                  alt="Expert Pick" 
                                  width={160} 
                                  height={240} 
                                  className="object-contain"
                                />
                              </div>
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0816] via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-700"></div>
                          </div>

                          <div className="p-8 space-y-4 relative">
                            <div className="flex justify-between items-start">
                              <span className="text-[10px] tracking-[0.3em] text-[var(--accent-gold)] opacity-70 uppercase font-bold">
                                {product.category || 'NO CATEGORY'}
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
        <section className="py-32">
          <div className="container-premium">
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
