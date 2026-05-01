'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Reveal from './Reveal'
import { supabase } from '@/lib/supabase'

export default function ProductCards() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('products')
          .select('*')
          .eq('is_active', true)
          .eq('show_on_main', true)
          .order('main_sort_order', { ascending: true });

        if (!error && data) {
          setProducts(data);
        }
      } catch (err) {
        console.error("ProductCards: Failed to fetch products", err);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="py-20 text-center text-white/50">
        데이터를 불러오는 중입니다...
      </div>
    );
  }

  return (
    <section className="relative w-full overflow-hidden" style={{ background: 'transparent' }}>
      <div className="relative z-10">
        <Reveal delayMs={0}>
          <div className="w-full pt-20 pb-20 md:pt-24 md:py-28 px-6 md:px-8">
            <div className="max-w-6xl mx-auto">
              
              {/* 섹션 헤더 */}
              <div className="text-center mb-16">
                <div className="mb-6 inline-block">
                  <div
                    className="rounded-full p-[1px]"
                    style={{
                      background: 'linear-gradient(135deg, var(--accent-gold), #D4B2A7)',
                      boxShadow: '0 2px 12px rgba(212, 178, 167, 0.15)',
                    }}
                  >
                    <p 
                      className="px-6 py-2 rounded-full text-xs md:text-sm"
                      style={{
                        color: '#f3eefe',
                        letterSpacing: '0.2em',
                        fontWeight: 500,
                        background: 'rgba(59, 15, 27, 0.7)',
                      }}
                    >
                      심리학 + 자기계발 + 동양 철학 + 에너지 차원
                    </p>
                  </div>
                </div>
                
                <h2 
                  className="text-3xl md:text-5xl lg:text-6xl font-elegant font-bold mb-5 md:mb-7 text-[#f7f1ff]"
                  style={{ letterSpacing: '0.02em' }}
                >
                  백도화 분석 맞춤형 리포트
                </h2>
                <p className="text-[#EDE6DA] opacity-80 max-w-2xl mx-auto text-base md:text-lg">
                  관리자에서 엄선된 리포트와 비법서를 확인하고 신청하세요.
                </p>
              </div>

              {/* 상품 카드 그리드 */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product, index) => (
                  <Reveal key={product.id} delayMs={index * 100}>
                    <div className="gungjung-glass rounded-3xl p-8 flex flex-col h-full hover:scale-[1.02] transition-transform duration-500">
                      <div className="mb-6">
                        <div className="flex justify-between items-start mb-4">
                          <span className="text-[10px] text-yellow-200/50 tracking-widest uppercase">{product.slug}</span>
                          {product.is_featured && (
                            <span className="bg-yellow-200/20 text-yellow-200 text-[10px] px-2 py-0.5 rounded border border-yellow-200/30">FEATURED</span>
                          )}
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3">{product.name}</h3>
                        <p className="text-sm text-[#EDE6DA] opacity-60 leading-relaxed line-clamp-3 min-h-[4.5rem]">
                          {product.description}
                        </p>
                      </div>

                      <div className="mt-auto pt-6 border-t border-white/5 space-y-6">
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-white/40">신청 금액</span>
                          <span className="text-xl font-bold text-yellow-200">{product.price?.toLocaleString()}원</span>
                        </div>

                        <Link href={`/products/${product.slug}`}>
                          <div className="w-full py-4 rounded-xl bg-yellow-200/10 border border-yellow-200/30 text-yellow-200 text-center font-bold text-sm hover:bg-yellow-200 hover:text-purple-950 transition-all duration-300">
                            {product.button_label || "자세히 보기"}
                          </div>
                        </Link>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>

              {products.length === 0 && (
                <div className="text-center py-20 bg-white/5 rounded-3xl border border-white/10">
                  <p className="text-white/40">현재 등록된 상품이 없습니다.</p>
                </div>
              )}

            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
