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

  // 대표 상품 (가장 순서가 빠른 상품)
  const mainProduct = products[0];

  return (
    <section className="relative w-full overflow-hidden" style={{ background: 'transparent' }}>
      <div className="relative z-10">
        {/* 리포트 섹션 - 카드형 구조 */}
        <Reveal delayMs={0}>
          <div className="container-premium py-20 md:py-28">
              <div 
                className="gungjung-glass w-full rounded-3xl"
                style={{
                  padding: '4rem 8%',
                }}
              >
                {/* 상단: 배지 + 메인 타이틀 */}
                <div className="text-center mb-16">
                  {/* 상단 배지 */}
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
                  
                  {/* 메인 타이틀 - DB 연동 */}
                  <h2 
                    className="text-3xl md:text-5xl lg:text-6xl font-elegant font-bold mb-5 md:mb-7"
                    style={{
                      color: '#f7f1ff',
                      letterSpacing: '0.02em',
                      lineHeight: 'clamp(1.15, 1.25, 1.25)',
                    }}
                  >
                    {mainProduct?.name || "선천코드 분석 맞춤형 연애 리포트"}
                  </h2>

                  {/* 서브 타이틀 - DB 연동 */}
                  <div className="max-w-3xl mx-auto mb-8 md:mb-16">
                    <p 
                      className="text-xl md:text-2xl font-semibold mb-2 md:mb-2.5"
                      style={{
                        color: 'rgba(237, 230, 218, 0.95)',
                        lineHeight: 'clamp(1.3, 1.45, 1.45)',
                        wordBreak: 'keep-all',
                      }}
                    >
                      {mainProduct?.description ? mainProduct.description.split('\n')[0] : "당신이 반복하는 연애의 이유는 감정이 아니라 구조입니다."}
                    </p>
                    <p 
                      className="text-base md:text-lg"
                      style={{
                        color: 'rgba(237, 230, 218, 0.8)',
                        lineHeight: 'clamp(1.5, 1.7, 1.7)',
                        wordBreak: 'keep-all',
                        opacity: 0.8,
                      }}
                    >
                      {mainProduct?.description && mainProduct.description.includes('\n') 
                        ? mainProduct.description.split('\n').slice(1).join('\n') 
                        : <>전통적 동양 철학과 현대 심리 분석을 결합해<br className="hidden md:block" /> 여자의 상태·에너지·관계 패턴을 구조적으로 해석합니다.</>}
                    </p>
                  </div>
                </div>

                {/* 핵심 카드 그리드 - 기존 디자인 유지 (데이터는 고정 문구 유지 추천) */}
                <div 
                  className="mx-auto mb-16 px-4 md:px-8"
                  style={{
                    maxWidth: '950px',
                    marginTop: '48px',
                  }}
                >
                  <div 
                    className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-7"
                  >
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
                        className="gungjung-glass rounded-xl p-4 md:p-5 flex flex-col justify-center items-center text-center"
                        style={{
                          background: 'rgba(26, 6, 38, 0.6)',
                          minHeight: '120px',
                        }}
                      >
                        <p 
                          className="text-xs sm:text-sm md:text-base font-semibold text-[#EDE6DA] leading-relaxed"
                          style={{
                            wordBreak: 'keep-all',
                          }}
                        >
                          {item.title}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 하단: CTA 버튼 + 신뢰 문구 */}
                <div className="text-center">
                  {/* CTA 버튼 - DB 연동 */}
                  <Link href={mainProduct ? `/reports/${mainProduct.slug}` : "/report"}>
                    <div className="btn-primary inline-block px-8 md:px-14 py-4 md:py-6 rounded-lg font-semibold transition-all duration-500 relative overflow-hidden group/btn mb-3 w-[90%] sm:w-auto text-base md:text-lg">
                      <span className="relative z-10">{mainProduct?.button_label || "내 연애 코드 지금 확인하기"}</span>
                      <div className="absolute inset-0 bg-white/5 opacity-0 group-hover/btn:opacity-10 transition-opacity" />
                    </div>
                  </Link>
                  
                  {/* 신뢰 문구 */}
                  <p 
                    className="text-sm md:text-base"
                    style={{
                      color: 'rgba(237, 230, 218, 0.4)',
                      letterSpacing: '0.02em',
                    }}
                  >
                    상담이 아닌, 구조를 해석하는 분석 리포트입니다.
                  </p>
                </div>
              </div>
            </div>
        </Reveal>
      </div>
    </section>
  )
}
