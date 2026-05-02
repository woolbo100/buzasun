'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
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

  // 대표 상품 (가장 순서가 빠른 상품)
  const mainProduct = products[0];

  return (
    <section className="relative w-full overflow-hidden py-16 md:py-32" style={{ background: 'transparent' }}>
      <div className="container-premium relative z-10">
        <Reveal delayMs={0}>
          <div className="gungjung-glass w-full rounded-[40px] overflow-hidden border border-[rgba(216,191,163,0.15)] bg-gradient-to-br from-[#1a0626]/95 via-[#2d0b40]/90 to-[#12041a]/95 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            {/* [상단] Premium Hero Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch min-h-[500px] md:min-h-[600px]">
              
              {/* Left: Text Content */}
              <div className="p-8 md:p-16 lg:p-20 flex flex-col justify-center text-left">
                {/* 상단 라벨 */}
                <div className="mb-8 flex">
                  <div
                    className="rounded-full p-[1px]"
                    style={{
                      background: 'linear-gradient(135deg, var(--accent-gold), #D4B2A7)',
                      boxShadow: '0 2px 15px rgba(138, 43, 226, 0.2)',
                    }}
                  >
                    <p 
                      className="px-6 py-1.5 rounded-full text-[10px] md:text-xs tracking-[0.2em] font-bold uppercase"
                      style={{
                        color: '#f3eefe',
                        background: 'rgba(26, 6, 38, 0.8)',
                      }}
                    >
                      심리학 + 자기계발 + 동양 철학 + 에너지 차원
                    </p>
                  </div>
                </div>

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-elegant font-bold text-white mb-6 leading-tight">
                  선천코드 연애 리포트
                </h2>
                
                <p className="text-xl md:text-2xl font-semibold mb-6" style={{ color: 'var(--accent-gold-light)', wordBreak: 'keep-all' }}>
                  당신의 연애는 타고난 코드부터 다릅니다.
                </p>
                
                <p className="text-base md:text-lg leading-relaxed mb-10 break-keep font-light" style={{ color: 'rgba(237, 230, 218, 0.8)' }}>
                  선천코드 분석을 통해 당신이 반복하는 연애 패턴과<br className="hidden md:block" />
                  나의 에너지에 공명하는 사랑의 지도를 정밀하게 해독합니다.
                </p>

                <div className="hidden lg:block">
                  <Link
                    href="/reports/love-code"
                    className="btn-primary inline-flex items-center px-10 py-5 rounded-xl font-bold tracking-widest text-lg transition-all duration-500 shadow-[0_10px_30px_rgba(138,43,226,0.3)] hover:scale-105"
                  >
                    내 연애 코드 지금 확인하기
                  </Link>
                </div>
              </div>

              {/* Right: Emotional Image */}
              <div className="relative h-[400px] lg:h-auto border-t lg:border-t-0 lg:border-l border-white/10 group">
                <div className="absolute inset-0 z-10 bg-gradient-to-t lg:bg-gradient-to-l from-transparent via-transparent to-[#1a0626]/80" />
                <Image 
                  src="/image/love_report_hero.png" 
                  alt="선천코드 연애 리포트" 
                  fill
                  className="object-cover transition-transform duration-[5000ms] group-hover:scale-110 opacity-80"
                />
                
                {/* Subtle Overlays */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-[var(--accent-gold)]/10 blur-[60px] rounded-full animate-pulse-slow" />
                  <div className="absolute bottom-1/4 left-1/4 w-40 h-40 bg-[#8a2be2]/20 blur-[80px] rounded-full animate-pulse-slow" style={{ animationDelay: '2s' }} />
                </div>
              </div>
            </div>

            {/* [하단] 6개 분석 카드 섹션 */}
            <div className="px-6 md:px-16 lg:px-20 pb-20 pt-10 border-t border-white/5 bg-[#12041a]/40">
              <div className="max-w-5xl mx-auto">
                <h3 className="text-center text-[#EDE6DA] opacity-40 text-sm md:text-base tracking-[0.3em] mb-12 font-elegant uppercase">
                  Analysis Components
                </h3>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                  {[
                    { title: '타고난 연애 성향 & 이상형' },
                    { title: '맞는 인연 vs 피해야 할 인연' },
                    { title: '반복되는 연애 패턴의 원인' },
                    { title: '내 코드에 숨겨진 남자복' },
                    { title: '타고난 코드가 만드는 연애의 흐름' },
                    { title: '관계를 바꾸는 실전 연애 조언' },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="gungjung-glass rounded-2xl p-5 md:p-8 flex flex-col justify-center items-center text-center transition-all duration-500 hover:bg-white/5 border border-white/5 group/card"
                      style={{
                        background: 'rgba(255, 255, 255, 0.02)',
                        minHeight: '140px',
                      }}
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent-gold)] mb-4 opacity-30 group-hover/card:scale-150 group-hover/card:opacity-100 transition-all duration-500" />
                      <p className="text-sm md:text-lg font-medium text-[#EDE6DA] leading-relaxed break-keep group-hover/card:text-[var(--accent-gold-light)] transition-colors duration-500">
                        {item.title}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Mobile/Tablet CTA Button (Visible on smaller screens) */}
                <div className="mt-16 text-center lg:hidden">
                  <Link
                    href="/reports/love-code"
                    className="btn-primary inline-flex items-center px-8 py-5 rounded-xl font-bold tracking-widest text-base w-full sm:w-auto justify-center"
                  >
                    내 연애 코드 지금 확인하기
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Decorative Glows */}
      <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-[#3a0b5a]/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-[#1a0626]/30 blur-[120px] rounded-full pointer-events-none" />
    </section>
  )
}
