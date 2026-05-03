'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Reveal from '@/components/Reveal'
import GlobalBackground from '@/components/GlobalBackground'
import Link from 'next/link'
import Image from 'next/image'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

interface Ingredient {
  title: string;
  desc: string;
  icon: string;
}

interface PhysicalProductDetailProps {
  productId: string;
  title: string;
  subtitle: string;
  description: string;
  heroImage: string; // m7
  overviewImage: string; // m2
  recommendedImage: string; // m4
  formulaImage: string; // m5
  giftImage: string; // m3
  ctaImage: string; // m6
  price: string;
  recommendedPoints: string[];
  ingredients: Ingredient[];
  giftTitle: string;
  giftDesc: string;
  formulaTitle?: string;
  howToUse?: string;
  warningText?: string;
}

export default function PhysicalProductDetail({
  productId,
  title,
  subtitle,
  description,
  heroImage,
  overviewImage,
  recommendedImage,
  formulaImage,
  giftImage,
  ctaImage,
  price,
  recommendedPoints,
  ingredients,
  giftTitle,
  giftDesc,
  formulaTitle,
  howToUse,
  warningText
}: PhysicalProductDetailProps) {
  useScrollAnimation()
  const checkoutUrl = `/checkout?productId=${productId}`

  return (
    <main className="relative min-h-screen bg-[#0a0514]">
      <GlobalBackground src="/image/shop-hero.png" brightCenter={false}>
        <Navigation />

        <div className="relative z-10 pt-44 pb-20">
          <div className="container-premium">
            
            {/* 1. Hero Section */}
            <section className="text-center mb-32">
              <Reveal delayMs={100}>
                <div className="mb-8">
                  <span className="inline-block px-5 py-1.5 rounded-full text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase"
                    style={{
                      background: 'rgba(216, 191, 163, 0.1)',
                      border: '1px solid rgba(255, 182, 193, 0.3)',
                      color: '#FFB6C1',
                    }}>
                    PREMIUM PHYSICAL CARE
                  </span>
                </div>
                <h1 className="text-4xl md:text-7xl font-elegant font-bold mb-10 text-white leading-tight">
                  {title}
                </h1>
                
                <div className="relative max-w-4xl mx-auto aspect-video mb-16 rounded-[40px] overflow-hidden border border-white/10 shadow-2xl group">
                  <Image 
                    src={heroImage} 
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-[10000ms] group-hover:scale-110"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0514]/60 to-transparent"></div>
                </div>

                <p className="text-xl md:text-2xl text-[#EDE6DA] opacity-80 leading-relaxed mb-12 max-w-2xl mx-auto break-keep font-elegant italic">
                  {subtitle}
                </p>
                <div className="flex flex-col items-center gap-6">
                  <Link 
                    href={checkoutUrl}
                    className="btn-primary inline-flex items-center px-16 py-6 rounded-xl font-bold text-xl shadow-[0_0_40px_rgba(255,182,193,0.15)] hover:scale-105 transition-all duration-500"
                    style={{
                      background: 'linear-gradient(135deg, #2D0A1E 0%, #1A0514 100%)',
                      border: '1px solid rgba(230, 190, 138, 0.4)',
                      color: '#E6BE8A'
                    }}
                  >
                    구매하기 ({price}원)
                  </Link>
                </div>
              </Reveal>
            </section>

            {/* 2. Overview */}
            <section className="mb-32">
              <Reveal>
                <div className="grid md:grid-cols-2 gap-16 items-center">
                  <div className="relative aspect-square overflow-hidden rounded-[40px] border border-white/10 shadow-2xl">
                    <Image src={overviewImage} alt="Overview" fill className="object-cover" />
                  </div>
                  <div className="space-y-10">
                    <h2 className="text-3xl md:text-4xl font-elegant font-bold text-white leading-tight">
                      {title}의<br /> <span style={{ color: '#FFB6C1' }}>특별한 가치</span>
                    </h2>
                    <p className="text-lg text-[#EDE6DA] opacity-70 leading-relaxed break-keep font-light whitespace-pre-wrap">
                      {description}
                    </p>
                  </div>
                </div>
              </Reveal>
            </section>

            {/* 3. Recommended For */}
            <section className="mb-32">
              <Reveal>
                <div className="grid md:grid-cols-2 gap-16 items-center">
                  <div className="space-y-12">
                    <h2 className="text-3xl font-elegant font-bold text-white tracking-widest mb-4">
                      이런 분께 <span style={{ color: '#FFB6C1' }}>추천합니다</span>
                    </h2>
                    <div className="grid grid-cols-1 gap-4">
                      {recommendedPoints.map((item, idx) => (
                        <div key={idx} className="gungjung-glass p-6 border-white/[0.03] flex items-center gap-6 group">
                          <div className="w-10 h-10 rounded-full bg-white/[0.03] flex items-center justify-center text-[#FFB6C1]/50 shrink-0">
                            <i className="fas fa-check text-sm"></i>
                          </div>
                          <p className="text-[#EDE6DA] opacity-70 text-base font-light break-keep">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="relative aspect-[3/4] rounded-[40px] overflow-hidden border border-white/10 shadow-2xl">
                    <Image src={recommendedImage} alt="Recommended" fill className="object-cover" />
                  </div>
                </div>
              </Reveal>
            </section>

            {/* 4. Formula/Detail */}
            <section className="mb-32 text-center">
              <Reveal>
                {formulaTitle && (
                  <h2 className="text-2xl md:text-4xl font-elegant font-bold text-white tracking-[0.2em] mb-12">
                    {formulaTitle.includes('프리미엄') ? (
                      <>
                        {formulaTitle.split('프리미엄')[0]}
                        <span className="text-[#FFB6C1]">프리미엄</span>
                        {formulaTitle.split('프리미엄')[1]}
                      </>
                    ) : formulaTitle}
                  </h2>
                )}
                <div className="max-w-4xl mx-auto mb-12">
                  <div className="relative aspect-video rounded-[30px] overflow-hidden border border-white/10 shadow-xl group">
                    <Image src={formulaImage} alt="Detail" fill className="object-cover" />
                  </div>
                </div>
                <div className="gungjung-glass p-12 md:p-20 relative overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {ingredients.map((ing, idx) => (
                      <div key={idx} className="flex gap-6 items-start p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-all group">
                        <div className="w-12 h-12 rounded-xl bg-[#2D0A1E] border border-[#FFB6C1]/20 flex items-center justify-center text-[#FFB6C1] shrink-0">
                          <i className={`fas ${ing.icon} text-lg`}></i>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white mb-2">{ing.title}</h3>
                          <p className="text-sm text-[#EDE6DA] opacity-50 font-light">{ing.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </section>

            {/* 5. Gift */}
            <section className="mb-32">
              <Reveal>
                <div className="grid md:grid-cols-2 gap-16 items-center">
                  <div className="space-y-8">
                    <h2 className="text-3xl md:text-4xl font-elegant font-bold text-white leading-tight">
                      {giftTitle}
                    </h2>
                    <p className="text-lg text-[#EDE6DA] opacity-70 leading-relaxed break-keep font-light whitespace-pre-wrap">
                      {giftDesc}
                    </p>
                  </div>
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[40px] border border-white/10 shadow-2xl">
                    <Image src={giftImage} alt="Gift" fill className="object-cover" />
                  </div>
                </div>
              </Reveal>
            </section>

            {/* 5-1. How To Use */}
            {howToUse && (
              <section className="mb-32">
                <Reveal>
                  <div className="gungjung-glass p-10 border-white/5 bg-gradient-to-br from-white/[0.02] to-transparent">
                    <h2 className="text-2xl font-elegant font-bold mb-8 text-white border-l-4 border-[#FFB6C1]/50 pl-6">사용 방법</h2>
                    <div className="space-y-6">
                      <p className="text-lg text-[#EDE6DA] opacity-80 leading-relaxed break-keep whitespace-pre-wrap">
                        {howToUse}
                      </p>
                      {warningText && (
                        <div className="mt-8 pt-8 border-t border-white/5">
                          <p className="text-xs text-[#EDE6DA] opacity-40 leading-relaxed break-keep">
                            <i className="fas fa-exclamation-circle mr-2 opacity-50"></i>
                            {warningText}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </Reveal>
              </section>
            )}

            {/* 6. Notices */}
            <section className="mb-32">
              <Reveal>
                <div className="gungjung-glass p-10 border-white/5">
                  <h2 className="text-2xl font-elegant font-bold mb-10 text-white border-l-4 border-[#E6BE8A] pl-6">구매 전 안내</h2>
                  <ul className="space-y-4">
                    {['본 제품은 실물 배송 상품입니다.', '결제 시 배송지 정보를 정확히 입력해주세요.', '배송 기간은 결제 완료 후 영업일 기준 2~5일 정도 소요됩니다.'].map((text, idx) => (
                      <li key={idx} className="flex items-start gap-4 text-[#EDE6DA] opacity-60 text-sm font-light">
                        <span className="mt-2 w-1 h-1 rounded-full bg-[#E6BE8A] shrink-0"></span>
                        {text}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </section>

            {/* 7. CTA */}
            <section className="relative aspect-video overflow-hidden rounded-[40px] mb-20 group">
              <div className="absolute inset-0 z-0">
                <Image src={ctaImage} alt="CTA" fill className="object-cover transition-transform duration-[10000ms] group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0514] via-[#0a0514]/40 to-transparent"></div>
              </div>
              <div className="relative z-10 h-full flex flex-col items-center justify-center px-10 text-center">
                <Reveal>
                  <h2 className="text-3xl md:text-5xl font-elegant font-bold text-white mb-12 leading-tight">
                    {title}와 함께하는<br />아름다운 변화
                  </h2>
                  <Link href={checkoutUrl} className="btn-primary inline-flex items-center px-16 py-6 rounded-xl font-bold text-xl shadow-[0_0_40px_rgba(255,182,193,0.15)] hover:scale-105 transition-all duration-500" style={{ background: 'linear-gradient(135deg, #E6BE8A 0%, #BA8D7E 100%)', color: '#2D0A1E' }}>
                    지금 바로 구매하기
                  </Link>
                </Reveal>
              </div>
            </section>

          </div>
        </div>
        <Footer />
      </GlobalBackground>
    </main>
  )
}
