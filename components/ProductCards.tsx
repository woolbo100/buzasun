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
          <div className="gungjung-glass w-full rounded-[40px] overflow-hidden border border-white/[0.08] bg-white/[0.02] shadow-[0_20px_80px_rgba(0,0,0,0.4)] group">
            {/* [상단] Premium Hero Section */}
            <div className="relative z-20 grid grid-cols-1 lg:grid-cols-2 items-stretch min-h-[500px] md:min-h-[600px]">
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

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-elegant font-bold text-white mb-6 leading-tight group-hover:text-[var(--accent-gold-light)] transition-colors duration-500">
                  선천코드 연애 리포트
                </h2>
                
                <p className="text-base md:text-lg text-[var(--accent-gold-light)] opacity-90 mb-6 font-elegant italic tracking-wide">
                  선천코드 분석을 통해 당신의 연애 패턴, 이성복, 재회 가능성을 정밀하게 해독합니다.
                </p>
                
                <p className="text-base md:text-lg leading-relaxed mb-10 break-keep font-light text-[#EDE6DA] opacity-60">
                  연애는 우연이 아니라 타고난 흐름입니다.<br />
                  당신이 반복하는 사랑의 패턴과<br />
                  관계를 바꾸는 방향을 읽어드립니다.
                </p>

                <div className="hidden lg:block">
                  <Link
                    href="/reports/love-code"
                    className="btn-primary inline-flex items-center px-10 py-5 rounded-xl font-bold tracking-widest text-lg transition-all duration-500 shadow-[0_10px_30px_rgba(212,178,167,0.2)] hover:scale-105"
                  >
                    연애 리포트 자세히 보기
                  </Link>
                </div>
              </div>

              {/* Right: Emotional Image */}
              <div className="relative h-[400px] lg:h-auto border-t lg:border-t-0 lg:border-l border-white/10 group overflow-hidden">
                <div className="absolute inset-0 z-10 bg-gradient-to-t lg:bg-gradient-to-l from-transparent via-transparent to-[#1a0626]/80" />
                <Image 
                  src="/image/love1.png" 
                  alt="선천코드 연애 리포트" 
                  fill
                  className="object-cover transition-transform duration-[5000ms] group-hover:scale-110 opacity-90"
                />
                
                {/* Subtle Overlays */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-[var(--accent-gold)]/10 blur-[60px] rounded-full animate-pulse-slow" />
                  <div className="absolute bottom-1/4 left-1/4 w-40 h-40 bg-[var(--accent-gold)]/10 blur-[80px] rounded-full animate-pulse-slow" style={{ animationDelay: '2s' }} />
                </div>
              </div>
            </div>

            {/* [하단] 6개 분석 카드 섹션 */}
            <div className="relative z-20 px-6 md:px-16 lg:px-20 pb-20 pt-10 border-t border-white/[0.05] bg-white/[0.01]">
              <div className="max-w-5xl mx-auto">
                <h3 className="text-center text-[#EDE6DA] opacity-30 text-xs md:text-sm tracking-[0.4em] mb-10 font-elegant uppercase">
                  Analysis Components
                </h3>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
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
                      className="gungjung-glass rounded-xl p-4 md:p-6 flex flex-col justify-center items-center text-center transition-all duration-500 hover:bg-white/5 border border-white/5 group/card"
                      style={{
                        background: 'rgba(255, 255, 255, 0.01)',
                        minHeight: '100px',
                      }}
                    >
                      <p className="text-sm md:text-base lg:text-lg font-medium text-[#EDE6DA] leading-relaxed break-keep group-hover/card:text-[var(--accent-gold-light)] transition-colors duration-500">
                        {item.title}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Mobile/Tablet CTA Button (Visible on smaller screens) */}
                <div className="mt-10 text-center lg:hidden">
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
      <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-[var(--accent-gold)]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-[var(--accent-gold-soft)]/10 blur-[120px] rounded-full pointer-events-none" />
    </section>
  )
}
