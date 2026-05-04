'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Reveal from './Reveal'
import { supabase } from '@/lib/supabase'

interface Product {
  id: string
  name: string
  display_title?: string
  slug: string
  category: string
  price: number
  main_image: string
  thumbnail_image?: string
  description: string
  short_description?: string
  type: string
}

export default function FeaturedProducts() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchFeaturedProducts() {
      try {
        setLoading(true)
        
        // Supabase에서 실물 제품(physical) 중 추천(featured) 상품 3개 가져오기
        const { data, error } = await supabase
          .from('products')
          .select('*')
          .eq('type', 'physical')
          .eq('is_active', true)
          .eq('featured', true)
          .order('sort_order', { ascending: true })
          .limit(3)

        if (!error && data && data.length > 0) {
          setProducts(data as any)
        } else {
          // 데이터가 없을 경우 기본값(Fallback) 사용
          setProducts([
            {
              id: 'f1',
              name: '미스하이랜더 플러스',
              slug: 'miss-highlander',
              category: 'ENERGY CARE',
              description: '자신감을 위한 프리미엄 여성 이너뷰티 아이템',
              price: 69000,
              main_image: '/image/miss/m1.webp',
              type: 'physical'
            },
            {
              id: 'f2',
              name: '어디서나 왕빛나 크림',
              slug: 'wangbitna-cream',
              category: 'ENERGY CARE',
              description: '여성의 빛나는 품격을 위한 바디 케어 아이템',
              price: 59000,
              main_image: '/image/wangbitna/w7.webp',
              type: 'physical'
            },
            {
              id: 'f3',
              name: '플라워 북마크 세트',
              slug: 'premium-bookmark',
              category: 'PRIVATE OBJECT',
              description: '소중한 사람에게 선물하기 좋은 프리미엄 감성 오브제',
              price: 9900,
              main_image: '/image/pre/p7.webp',
              type: 'physical'
            }
          ])
        }
      } catch (err) {
        console.error("Failed to fetch featured products:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchFeaturedProducts()
  }, [])

  return (
    <section id="featured-selection" className="relative w-full overflow-hidden py-20 md:py-32 scroll-mt-28">
      <Reveal delayMs={200}>
        <div className="container-premium">
          {/* 섹션 헤더 */}
          <div className="text-center mb-16">
            <Reveal delayMs={100}>
              <div className="mb-6 inline-block">
                <div
                  className="rounded-full p-[1px]"
                  style={{
                    background: 'linear-gradient(135deg, var(--accent-gold), #D4B2A7)',
                    boxShadow: '0 2px 8px rgba(212, 178, 167, 0.12)',
                  }}
                >
                  <p 
                    className="px-6 py-2 rounded-full"
                    style={{
                      color: '#f3eefe',
                      letterSpacing: '0.2em',
                      fontSize: '0.8rem',
                      fontWeight: 500,
                      background: 'rgba(59, 15, 27, 0.5)',
                    }}
                  >
                    PREMIUM SELECTION
                  </p>
                </div>
              </div>
            </Reveal>
            
            <Reveal delayMs={200}>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-elegant font-bold text-[#F5F5F5] mb-8">
                백도화 비밀상점 추천 셀렉션
              </h2>
            </Reveal>

            <Reveal delayMs={300}>
              <p className="text-base md:text-lg max-w-3xl mx-auto text-[#EDE6DA] opacity-80 leading-relaxed break-keep">
                당신의 분위기와 흐름을 바꾸는 프리미엄 여성 셀렉션.<br />
                백도화가 고른 감각적인 실물 아이템을 만나보세요.
              </p>
            </Reveal>
          </div>

          {/* 상품 카드 그리드 */}
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => (
              <Reveal key={product.id} delayMs={300 + index * 100}>
                <Link 
                  href={`/shop/${product.slug}`}
                  className="group block h-full w-full"
                >
                  <div className="gungjung-glass h-full flex flex-col relative overflow-hidden transition-all duration-500 hover:-translate-y-2">
                    
                    {/* 상품 이미지 영역 */}
                    <div className="relative aspect-[3/4] overflow-hidden">
                      <Image 
                        src={product.main_image || product.thumbnail_image || '/image/product-love-report.png'} 
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1A0F2E] via-transparent to-transparent opacity-60" />
                    </div>

                    <div className="p-8 flex flex-col flex-grow">
                      {/* 카테고리 태그 */}
                      <div className="flex items-center gap-2 mb-4 flex-wrap">
                        <div 
                          className="px-3 py-1 rounded-full border text-[10px] md:text-xs tracking-wider"
                          style={{
                            borderColor: 'rgba(216, 191, 163, 0.3)',
                            background: 'rgba(59, 15, 27, 0.4)',
                            color: 'var(--text-ivory)',
                          }}
                        >
                          {product.category}
                        </div>
                      </div>

                      <h3 className="text-2xl md:text-3xl font-elegant font-bold mb-4 text-[#F5F5F5] group-hover:text-[var(--accent-gold)] transition-colors">
                        {product.display_title || product.name}
                      </h3>

                      <p className="text-sm md:text-base mb-8 leading-relaxed text-[#EDE6DA] opacity-70 group-hover:opacity-100 transition-opacity break-keep">
                        {product.short_description || product.description}
                      </p>

                      <div className="mt-auto">
                        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--accent-gold)]">
                          자세히 보기 <span style={{ color: 'var(--accent-pink)' }}>→</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          
          <div className="mt-20 text-center">
            <Reveal delayMs={600}>
              <Link 
                href="/shop"
                className="btn-outline px-10 py-4 rounded-full text-sm tracking-[0.2em] font-bold group inline-block"
              >
                비밀상점 전체보기
              </Link>
            </Reveal>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
