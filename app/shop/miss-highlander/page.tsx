'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Reveal from '@/components/Reveal'
import GlobalBackground from '@/components/GlobalBackground'
import Link from 'next/link'
import Image from 'next/image'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function MissHighlanderPage() {
  useScrollAnimation()

  const productId = 'miss-highlander'
  const checkoutUrl = `/checkout?productId=${productId}`

  const recommendedFor = [
    '피부 탄력 관리가 필요한 분',
    '건조함과 푸석함이 고민인 분',
    '이너뷰티 루틴을 시작하고 싶은 분',
    '매일 간편한 셀프케어를 원하는 분',
    '선물하기 좋은 프리미엄 제품을 찾는 분',
  ]

  const ingredients = [
    { title: '콜라겐', desc: '피부 탄력 케어에 도움', icon: 'fa-sparkles' },
    { title: '글루타치온', desc: '맑은 피부 컨디션 관리', icon: 'fa-sun' },
    { title: '히알루론산', desc: '촉촉한 보습 케어', icon: 'fa-tint' },
    { title: '비타민 C', desc: '활력 있는 뷰티 루틴', icon: 'fa-bolt' },
    { title: 'L-시스테인', desc: '균형 있는 피부 관리', icon: 'fa-leaf' },
    { title: 'MSM', desc: '건강한 일상 케어', icon: 'fa-shield-heart' },
  ]

  return (
    <main className="relative min-h-screen bg-[#0a0514]">
      <GlobalBackground src="/image/miss/m1.webp" brightCenter={false}>
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
                      color: '#FFB6C1', // Soft Pink
                    }}>
                    PREMIUM INNER BEAUTY CARE
                  </span>
                </div>
                <h1 className="text-4xl md:text-7xl font-elegant font-bold mb-10 text-white leading-tight">
                  미스하이랜더 <span style={{ color: '#E6BE8A' }}>플러스</span>
                </h1>
                <p className="text-xl md:text-2xl text-[#EDE6DA] opacity-80 leading-relaxed mb-12 max-w-2xl mx-auto break-keep font-elegant italic">
                  아름다움은 매일의 습관에서 시작됩니다
                </p>
                <p className="text-base md:text-lg text-[#EDE6DA] opacity-60 mb-14 max-w-xl mx-auto break-keep font-light leading-relaxed">
                  프랑스산 콜라겐과 글루타치온, 히알루론산 등<br />
                  이너뷰티 성분을 담은 프리미엄 뷰티 케어 제품입니다.
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
                    구매하기
                  </Link>
                </div>
              </Reveal>
            </section>

            {/* 2. Product Overview Section */}
            <section className="mb-32">
              <Reveal>
                <div className="grid md:grid-cols-2 gap-16 items-center">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[40px] border border-white/10 shadow-2xl">
                    <Image 
                      src="/image/miss/m2.webp" 
                      alt="Product Overview"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-10">
                    <div className="space-y-6">
                      <h2 className="text-3xl md:text-4xl font-elegant font-bold text-white leading-tight">
                        나를 위한 프리미엄<br /> 
                        <span style={{ color: '#FFB6C1' }}>이너뷰티 루틴</span>
                      </h2>
                      <p className="text-lg text-[#EDE6DA] opacity-70 leading-relaxed break-keep font-light">
                        미스하이랜더 플러스는 바쁜 일상 속에서도<br />
                        간편하게 아름다움과 컨디션을 관리하고 싶은 분들을 위한<br />
                        프리미엄 이너뷰티 제품입니다.
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      {['프랑스산 콜라겐', '글루타치온', '히알루론산', '비타민 C', 'L-시스테인', 'MSM'].map((point, idx) => (
                        <div key={idx} className="gungjung-glass px-4 py-3 border-white/[0.05] flex items-center gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#E6BE8A]"></div>
                          <span className="text-sm text-[#EDE6DA] opacity-80">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            </section>

            {/* 3. Recommended For Section */}
            <section className="mb-32">
              <Reveal>
                <div className="text-center mb-16">
                  <h2 className="text-3xl font-elegant font-bold text-white tracking-widest">
                    이런 분께 <span style={{ color: '#FFB6C1' }}>추천합니다</span>
                  </h2>
                </div>
                <div className="grid md:grid-cols-5 gap-4">
                  {recommendedFor.map((item, idx) => (
                    <div key={idx} className="gungjung-glass p-8 text-center border-white/[0.05] hover:border-[#FFB6C1]/30 transition-all group">
                      <div className="mb-6 text-[#FFB6C1]/50 group-hover:scale-110 transition-transform">
                        <i className="fas fa-check-circle text-2xl"></i>
                      </div>
                      <p className="text-[#EDE6DA] opacity-80 text-sm leading-relaxed break-keep font-light">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </section>

            {/* 4. Ingredient Section */}
            <section className="mb-32">
              <Reveal>
                <div className="gungjung-glass p-12 md:p-20 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
                    <Image 
                      src="/image/miss/m4.webp" 
                      alt="Ingredients Background"
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  <div className="relative z-10">
                    <div className="max-w-2xl">
                      <h2 className="text-3xl md:text-5xl font-elegant font-bold mb-8 text-white">
                        프리미엄 <span style={{ color: '#E6BE8A' }}>포뮬러</span>
                      </h2>
                      <p className="text-lg text-[#EDE6DA] opacity-70 mb-16 leading-relaxed font-light break-keep">
                        콜라겐, 글루타치온, 히알루론산, 비타민 C 등<br />
                        일상 속 아름다움 관리를 돕는 성분을 균형 있게 담았습니다.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {ingredients.map((ing, idx) => (
                        <div key={idx} className="flex gap-6 items-start p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-all group">
                          <div className="w-12 h-12 rounded-xl bg-[#2D0A1E] border border-[#FFB6C1]/20 flex items-center justify-center text-[#FFB6C1] shrink-0 group-hover:scale-110 transition-transform">
                            <i className={`fas ${ing.icon} text-lg`}></i>
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#E6BE8A] transition-colors">{ing.title}</h3>
                            <p className="text-sm text-[#EDE6DA] opacity-50 font-light">{ing.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            </section>

            {/* 5. Gift Section */}
            <section className="mb-32">
              <Reveal>
                <div className="grid md:grid-cols-2 gap-16 items-center flex-row-reverse">
                   <div className="order-2 md:order-1 space-y-8">
                    <h2 className="text-3xl md:text-4xl font-elegant font-bold text-white leading-tight">
                      선물하고 싶은<br /> 
                      <span style={{ color: '#E6BE8A' }}>프리미엄 케어</span>
                    </h2>
                    <p className="text-lg text-[#EDE6DA] opacity-70 leading-relaxed break-keep font-light">
                      나를 위한 루틴으로도,<br />
                      소중한 사람을 위한 선물로도 좋은<br />
                      우아한 이너뷰티 셀렉션입니다.
                    </p>
                  </div>
                  <div className="order-1 md:order-2 relative aspect-[16/10] overflow-hidden rounded-[40px] border border-white/10 shadow-2xl">
                    <Image 
                      src="/image/miss/m5.webp" 
                      alt="Premium Gift"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </Reveal>
            </section>

            {/* 6. How To Use Section */}
            <section className="mb-32">
              <Reveal>
                <div className="max-w-3xl mx-auto text-center space-y-10">
                  <h2 className="text-3xl font-elegant font-bold text-white">섭취 방법</h2>
                  <div className="gungjung-glass p-10 space-y-6">
                    <p className="text-lg text-[#EDE6DA] opacity-80 leading-relaxed font-light">
                      제품 패키지 및 안내사항에 따라 섭취해주세요.<br />
                      개인의 건강 상태에 따라 섭취 전 전문가와 상담이 필요할 수 있습니다.
                    </p>
                    <div className="pt-6 border-t border-white/5">
                      <p className="text-sm text-[#EDE6DA] opacity-40 italic">
                        건강기능식품은 질병의 예방 또는 치료를 위한 의약품이 아닙니다.
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </section>

            {/* 7. Notice Section */}
            <section className="mb-32">
              <Reveal>
                <div className="gungjung-glass p-10 md:p-16 border-white/5">
                  <h2 className="text-2xl font-elegant font-bold mb-10 text-white border-l-4 border-[#E6BE8A] pl-6">구매 전 안내</h2>
                  <ul className="space-y-4">
                    {[
                      '본 제품은 실물 배송 상품입니다.',
                      '결제 시 배송지 정보를 정확히 입력해주세요.',
                      '배송 기간은 결제 완료 후 영업일 기준 2~5일 정도 소요될 수 있습니다.',
                      '제품 특성상 개봉 후 단순 변심에 의한 교환/반품은 제한될 수 있습니다.',
                      '자세한 사항은 배송정책 및 환불정책을 확인해주세요.'
                    ].map((text, idx) => (
                      <li key={idx} className="flex items-start gap-4 text-[#EDE6DA] opacity-60 text-sm md:text-base font-light">
                        <span className="mt-2 w-1 h-1 rounded-full bg-[#E6BE8A] shrink-0"></span>
                        {text}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </section>

            {/* 8. Final CTA Section */}
            <section className="relative overflow-hidden rounded-[40px] mb-20 group">
              <div className="absolute inset-0 z-0">
                <Image 
                  src="/image/miss/m6.webp" 
                  alt="Final Call to Action"
                  fill
                  className="object-cover transition-transform duration-[10000ms] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0514] via-[#0a0514]/40 to-transparent"></div>
              </div>
              
              <div className="relative z-10 py-32 px-10 text-center">
                <Reveal>
                  <h2 className="text-3xl md:text-5xl font-elegant font-bold text-white mb-12 leading-tight">
                    오늘부터 시작하는<br /> 나만의 이너뷰티 루틴
                  </h2>
                  <Link 
                    href={checkoutUrl}
                    className="btn-primary inline-flex items-center px-16 py-6 rounded-xl font-bold text-xl shadow-[0_0_40px_rgba(255,182,193,0.15)] hover:scale-105 transition-all duration-500"
                    style={{
                      background: 'linear-gradient(135deg, #E6BE8A 0%, #BA8D7E 100%)',
                      color: '#2D0A1E'
                    }}
                  >
                    미스하이랜더 플러스 구매하기
                  </Link>
                </Reveal>
              </div>
            </section>

            {/* Footer Links */}
            <div className="flex justify-center gap-10 text-xs tracking-widest text-[#EDE6DA] opacity-30 mb-20 uppercase font-light">
              <Link href="/terms" className="hover:text-[#E6BE8A] transition-colors">배송정책</Link>
              <Link href="/refund" className="hover:text-[#E6BE8A] transition-colors">환불정책</Link>
            </div>

          </div>
        </div>

        <Footer />
      </GlobalBackground>
    </main>
  )
}
