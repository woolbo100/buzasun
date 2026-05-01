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

              {/* 상품 리스트 영역 */}
              <div className="space-y-12">
                {products.length > 0 ? (
                  <>
                    {/* 1. 대형 대표 배너 (선천코드 연애 리포트 전용 디자인) */}
                    <Reveal delayMs={100}>
                      <div className="gungjung-glass p-8 md:p-14 relative overflow-hidden group">
                        {/* 배경 장식 (빛 효과) */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-accent-gold/5 rounded-full -mr-32 -mt-32 blur-3xl group-hover:bg-accent-gold/10 transition-all duration-700"></div>
                        
                        <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
                          <div>
                            <div className="flex items-center gap-3 mb-6">
                              <span className="text-xs font-mono text-accent-gold tracking-[0.3em] uppercase">Signature Report</span>
                              <div className="h-px w-12 bg-accent-gold/30"></div>
                            </div>
                            
                            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                              {products[0].name}
                            </h3>
                            <p className="text-lg md:text-xl text-[#EDE6DA] opacity-80 mb-10 max-w-xl leading-relaxed break-keep">
                              {products[0].description || "당신이 몰랐던 타고난 사랑의 알고리즘을 해독해 드립니다."}
                            </p>

                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-12">
                              {[
                                "타고난 연애 성향 & 숨겨진 남자복",
                                "맞는 인연 vs 피해야 할 이상형",
                                "반복되는 연애 패턴의 원인",
                                "결정적인 연애 타이밍",
                                "관계를 바꾸는 실전 조언"
                              ].map((text, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-sm md:text-base text-white/80">
                                  <div className="w-1.5 h-1.5 rounded-full bg-accent-gold"></div>
                                  {text}
                                </li>
                              ))}
                            </ul>

                            <div className="flex flex-col sm:flex-row items-center gap-6">
                              <Link href={`/reports/${products[0].slug}`} className="w-full sm:w-auto">
                                <div className="btn-primary px-10 py-5 rounded-xl font-bold text-lg text-center shadow-2xl shadow-accent-gold/20">
                                  {products[0].button_label || "내 연애 코드 지금 확인하기"}
                                </div>
                              </Link>
                              <div className="flex flex-col items-start">
                                <span className="text-xs text-white/40 uppercase tracking-widest mb-1">Standard Price</span>
                                <span className="text-2xl font-elegant font-bold text-accent-gold">{products[0].price?.toLocaleString()}원</span>
                              </div>
                            </div>
                          </div>

                          <div className="hidden lg:block relative">
                            <div className="aspect-[4/5] rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden relative group-hover:border-accent-gold/30 transition-all duration-500">
                              <div className="absolute inset-0 flex items-center justify-center p-12">
                                <div className="text-center space-y-6">
                                  <div className="w-20 h-20 mx-auto rounded-full border border-accent-gold/20 flex items-center justify-center">
                                    <span className="text-3xl">📜</span>
                                  </div>
                                  <div className="space-y-2">
                                    <p className="text-accent-gold font-elegant text-xl">BAEKDOHWA</p>
                                    <p className="text-white/60 text-sm tracking-widest uppercase">Secret Archive</p>
                                  </div>
                                  <div className="h-px w-12 bg-accent-gold/30 mx-auto"></div>
                                  <p className="text-xs text-white/40 leading-relaxed italic">
                                    "당신의 에너지는 이미 답을 알고 있습니다.<br/>우리는 단지 그것을 읽어낼 뿐입니다."
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Reveal>

                    {/* 2. 나머지 상품들 (그리드 형태) */}
                    {products.length > 1 && (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-12">
                        {products.slice(1).map((product, index) => (
                          <Reveal key={product.id} delayMs={(index + 1) * 100}>
                            <div className="gungjung-glass rounded-3xl p-8 flex flex-col h-full hover:scale-[1.02] transition-transform duration-500 border border-white/10 hover:border-accent-gold/30">
                              <div className="mb-6">
                                <div className="flex justify-between items-start mb-4">
                                  <span className="text-[10px] text-accent-gold/50 tracking-widest uppercase">REPORT</span>
                                  {product.is_featured && (
                                    <span className="bg-accent-gold/20 text-accent-gold text-[10px] px-2 py-0.5 rounded border border-accent-gold/30">FEATURED</span>
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
                                  <span className="text-xl font-bold text-accent-gold">{product.price?.toLocaleString()}원</span>
                                </div>

                                <Link href={`/reports/${product.slug}`}>
                                  <div className="w-full py-4 rounded-xl bg-accent-gold/10 border border-accent-gold/30 text-accent-gold text-center font-bold text-sm hover:bg-accent-gold hover:text-purple-950 transition-all duration-300">
                                    {product.button_label || "리포트 보러가기"}
                                  </div>
                                </Link>
                              </div>
                            </div>
                          </Reveal>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  /* Fallback: 데이터가 없을 때 */
                  <Reveal delayMs={100}>
                    <div className="gungjung-glass rounded-3xl p-8 md:p-14 text-center">
                      <p className="text-white/40">준비 중인 상품이 없습니다. 관리자 페이지에서 상품을 등록해 주세요.</p>
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
