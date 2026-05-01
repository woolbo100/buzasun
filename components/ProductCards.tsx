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
      <div className="py-20 text-center text-accent-gold/50">
        데이터를 불러오는 중입니다...
      </div>
    );
  }

  return (
    <section id="products" className="relative w-full overflow-hidden" style={{ background: 'transparent' }}>
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
                  당신의 타고난 에너지를 해독하여 가장 깊은 통찰을 전달합니다.
                </p>
              </div>

              {/* 상품 카드 그리드 */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.length > 0 ? (
                  products.map((product, index) => (
                    <Reveal key={product.id} delayMs={(index + 1) * 100}>
                      <div className="gungjung-glass rounded-3xl p-8 flex flex-col h-full hover:scale-[1.02] transition-transform duration-500 border border-white/10 hover:border-accent-gold/30">
                        <div className="mb-6">
                          <div className="flex justify-between items-start mb-4">
                            <span className="text-[10px] text-accent-gold/50 tracking-widest uppercase">REPORT</span>
                            {(product.is_featured || index === 0) && (
                              <span className="bg-accent-gold/20 text-accent-gold text-[10px] px-2 py-0.5 rounded border border-accent-gold/30">BEST</span>
                            )}
                          </div>
                          <h3 className="text-2xl font-bold text-white mb-3">{product.name}</h3>
                          <p className="text-sm text-[#EDE6DA] opacity-60 leading-relaxed line-clamp-3 min-h-[4.5rem]">
                            {product.description || "당신이 몰랐던 타고난 사랑의 알고리즘을 해독해 드립니다."}
                          </p>
                        </div>

                        <div className="mt-auto pt-6 border-t border-white/5 space-y-6">
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-white/40">신청 금액</span>
                            <span className="text-xl font-bold text-accent-gold">{product.price?.toLocaleString() || "49,000"}원</span>
                          </div>

                          <Link href={`/reports/${product.slug}`}>
                            <div className="w-full py-4 rounded-xl bg-accent-gold/10 border border-accent-gold/30 text-accent-gold text-center font-bold text-sm hover:bg-accent-gold hover:text-purple-950 transition-all duration-300 shadow-lg shadow-accent-gold/5">
                              {product.button_label || "리포트 보러가기"}
                            </div>
                          </Link>
                        </div>
                      </div>
                    </Reveal>
                  ))
                ) : (
                  /* Fallback: 데이터가 하나도 없을 때 보여줄 기본 카드 */
                  <Reveal delayMs={100}>
                    <div className="gungjung-glass rounded-3xl p-8 flex flex-col h-full opacity-60">
                      <div className="mb-6">
                        <div className="flex justify-between items-start mb-4">
                          <span className="text-[10px] text-accent-gold/50 tracking-widest uppercase">REPORT</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3">준비 중인 리포트</h3>
                        <p className="text-sm text-[#EDE6DA] opacity-60 leading-relaxed">
                          곧 더 많은 분석 리포트가 업데이트될 예정입니다.
                        </p>
                      </div>
                      <div className="mt-auto pt-6 border-t border-white/5">
                        <div className="w-full py-4 rounded-xl bg-white/5 border border-white/10 text-white/30 text-center font-bold text-sm">
                          잠시만 기다려주세요
                        </div>
                      </div>
                    </div>
                  </Reveal>
                )}
              </div>

            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
