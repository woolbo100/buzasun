'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Reveal from './Reveal'
import { supabase } from '@/lib/supabase'

export default function Hero() {
  const [mainProduct, setMainProduct] = useState<any>(null);

  useEffect(() => {
    async function fetchMainProduct() {
      try {
        const { data, error } = await supabase
          .from('products')
          .select('slug, main_cta_label')
          .eq('is_active', true)
          .eq('show_on_main', true)
          .order('main_sort_order', { ascending: true })
          .limit(1)
          .single();

        if (!error && data) {
          setMainProduct(data);
        }
      } catch (err) {
        console.error("Hero: Failed to fetch main product", err);
      }
    }
    fetchMainProduct();
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 px-4 md:px-6 overflow-hidden">
        {/* 텍스트 가독성을 위한 메인 카드 */}
        <div className="gungjung-glass container mx-auto max-w-5xl py-16 md:py-24 px-8 md:px-16 text-center relative z-10">

        {/* 상단 배지 */}
        <Reveal delayMs={0}>
          <div className="mb-10">
            <span 
              className="inline-block px-6 py-2 rounded-full text-sm font-medium"
              style={{
                background: 'rgba(59, 15, 27, 0.5)', /* 버건디 */
                border: '1px solid rgba(216, 191, 163, 0.3)',
                color: 'var(--text-ivory)',
                letterSpacing: '0.1em',
              }}
            >
              당신이 몰랐던 타고난 사랑의 알고리즘
            </span>
          </div>
        </Reveal>

        {/* 메인 타이틀 */}
        <Reveal delayMs={100}>
          <h1 
            className="font-elegant font-bold mb-10 leading-[1.3] relative"
            style={{
              fontSize: 'clamp(2rem, 5vw, 4.5rem)',
              letterSpacing: '0.05em',
              wordBreak: 'keep-all',
              color: 'var(--text-white)',
            }}
          >
            당신의 연애는<br />
            <span 
              style={{
                color: 'var(--accent-gold)',
                textShadow: '0 0 15px rgba(216, 191, 163, 0.2)',
              }}
            >
              타고난 코드부터 다르다
            </span>
          </h1>
        </Reveal>

        {/* 서브 카피 */}
        <Reveal delayMs={200}>
          <p 
            className="mb-14 max-w-2xl mx-auto"
            style={{
              fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
              letterSpacing: '0.02em',
              color: 'var(--text-ivory)',
              fontWeight: 300,
              lineHeight: 1.8,
              wordBreak: 'keep-all',
            }}
          >
            선천코드 분석을 통해 당신이 반복하는 연애 패턴과
            <br className="hidden md:block" />
            나의 에너지에 공명하는 사랑의 지도를 정밀하게 해독합니다.
          </p>
        </Reveal>

        {/* CTA 버튼 */}
        <Reveal delayMs={300}>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href={mainProduct ? `/reports/${mainProduct.slug}` : "/report"}
              className="group relative px-12 py-5 rounded-lg font-semibold text-white overflow-hidden transition-all duration-500"
              style={{
                background: 'linear-gradient(135deg, var(--primary-burgundy) 0%, #2A0A14 100%)',
                border: '1px solid rgba(216, 191, 163, 0.4)',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)',
              }}
            >
              <span className="relative z-10">
                {mainProduct?.main_cta_label || "나의 선천코드 맞춤 리포트 받기"}
              </span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
            </Link>
            
            <Link
              href="/ebooks"
              className="group relative px-12 py-5 rounded-lg font-semibold transition-all duration-500"
              style={{
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(216, 191, 163, 0.2)',
                color: 'var(--text-ivory)',
              }}
            >
              <span className="relative z-10">시크릿 비법서 둘러보기</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
