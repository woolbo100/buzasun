'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Reveal from '@/components/Reveal'
import GlobalBackground from '@/components/GlobalBackground'
import Link from 'next/link'
import Image from 'next/image'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { supabase } from '@/lib/supabase'
import { useState, useEffect } from 'react'
import { ChevronDown, CheckCircle2, AlertCircle } from 'lucide-react'
import { useRouter } from 'next/navigation'

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
  accentColor?: string;
  options?: any[];
  ctaTitle?: string;
  ctaButtonText?: string;
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
  warningText,
  accentColor = '#FFB6C1',
  options: initialOptions,
  ctaTitle,
  ctaButtonText
}: PhysicalProductDetailProps) {
  useScrollAnimation()
  const router = useRouter()
  const [dbOptions, setDbOptions] = useState<any[]>(initialOptions || [])
  const [selectedOption, setSelectedOption] = useState<string>("")
  const [showError, setShowError] = useState(false)

  useEffect(() => {
    async function fetchOptions() {
      if (initialOptions) return;
      
      try {
        const { data, error } = await supabase
          .from('products')
          .select('options')
          .eq('slug', productId)
          .single()

        if (!error && data?.options) {
          setDbOptions(data.options)
        }
      } catch (err) {
        console.error("Failed to fetch options:", err)
      }
    }
    fetchOptions()
  }, [productId, initialOptions])

  const handlePurchase = (e: React.MouseEvent) => {
    e.preventDefault()
    if (dbOptions.length > 0 && !selectedOption) {
      setShowError(true)
      // 스무스하게 드롭다운 위치로 이동하면 좋지만 일단 알럿
      alert("옵션을 선택해주세요.")
      return
    }
    
    let url = `/checkout?productId=${productId}`
    if (selectedOption) {
      url += `&option=${encodeURIComponent(selectedOption)}`
    }
    router.push(url)
  }

  const activeOptions = dbOptions[0]; // 현재는 단일 옵션 1개만 지원

  return (
    <main className="relative min-h-screen bg-[#0a0514]" style={{ '--accent-shadow': `${accentColor}26` } as any}>
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
                      border: `1px solid ${accentColor}4D`,
                      color: accentColor,
                    }}>
                    PREMIUM PHYSICAL CARE
                  </span>
                </div>
                <h1 className="text-3xl md:text-5xl font-elegant font-bold mb-10 text-white leading-tight">
                  {title.includes(' ') ? (
                    <>
                      {title.split(' ')[0]} <span style={{ color: accentColor }}>{title.split(' ').slice(1).join(' ')}</span>
                    </>
                  ) : title}
                </h1>
                
                <div className="relative max-w-6xl mx-auto aspect-video mb-16 rounded-[40px] overflow-hidden border border-white/10 shadow-2xl group">
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
                <div className="flex flex-col items-center gap-8">
                  {/* 옵션 선택 영역 */}
                  {activeOptions && activeOptions.values && activeOptions.values.length > 0 && (
                    <div className="w-full max-w-md space-y-4">
                      <div className="flex items-center justify-between px-2">
                        <label className="text-xs font-bold tracking-widest text-white/40 uppercase">
                          {activeOptions.name} 선택
                        </label>
                        {showError && !selectedOption && (
                          <span className="text-[10px] text-red-400 flex items-center gap-1 animate-pulse">
                            <AlertCircle className="w-3 h-3" /> 필수 선택입니다
                          </span>
                        )}
                      </div>
                      <div className="relative group">
                        <select 
                          value={selectedOption}
                          onChange={(e) => {
                            setSelectedOption(e.target.value)
                            setShowError(false)
                          }}
                          className={`w-full bg-white/[0.03] border ${showError && !selectedOption ? 'border-red-500/50' : 'border-white/10'} rounded-2xl px-6 py-4 text-white appearance-none outline-none focus:border-[var(--accent-gold)] transition-all cursor-pointer font-elegant`}
                        >
                          <option value="" className="bg-[#0a0514]">옵션을 선택하세요</option>
                          {activeOptions.values.map((val: string) => (
                            <option key={val} value={val} className="bg-[#0a0514]">{val}</option>
                          ))}
                        </select>
                        <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-white/20 group-hover:text-[var(--accent-gold)] transition-colors">
                          <ChevronDown className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                  )}

                  <button 
                    onClick={handlePurchase}
                    className="btn-primary inline-flex items-center px-16 py-6 rounded-xl font-bold text-xl hover:scale-105 transition-all duration-500"
                    style={{
                      background: 'linear-gradient(135deg, #2D0A1E 0%, #1A0514 100%)',
                      border: '1px solid rgba(230, 190, 138, 0.4)',
                      color: '#E6BE8A',
                      boxShadow: `0 0 40px ${accentColor}26`
                    }}
                  >
                    구매하기 ({price}원)
                  </button>
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
                      {title}의<br /> <span style={{ color: accentColor }}>특별한 가치</span>
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
                      이런 분께 <span style={{ color: accentColor }}>추천합니다</span>
                    </h2>
                    <div className="grid grid-cols-1 gap-4">
                      {recommendedPoints.map((item, idx) => (
                        <div key={idx} className="gungjung-glass p-6 border-white/[0.03] flex items-center gap-6 group">
                          <div className="w-10 h-10 rounded-full bg-white/[0.03] flex items-center justify-center shrink-0" style={{ color: `${accentColor}80` }}>
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
                        <span style={{ color: accentColor }}>프리미엄</span>
                        {formulaTitle.split('프리미엄')[1]}
                      </>
                    ) : formulaTitle}
                  </h2>
                )}
                <div className="max-w-6xl mx-auto mb-12">
                  <div className="relative aspect-video rounded-[30px] overflow-hidden border border-white/10 shadow-xl group">
                    <Image src={formulaImage} alt="Detail" fill className="object-cover" />
                  </div>
                </div>
                <div className="gungjung-glass p-12 md:p-20 relative overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {ingredients.map((ing, idx) => (
                      <div key={idx} className="flex gap-6 items-start p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-all group">
                        <div className="w-12 h-12 rounded-xl bg-[#2D0A1E] flex items-center justify-center shrink-0" style={{ borderColor: `${accentColor}33`, color: accentColor, border: '1px solid' }}>
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
                    <h2 className="text-2xl font-elegant font-bold mb-8 text-white border-l-4 pl-6" style={{ borderColor: `${accentColor}80` }}>사용 방법</h2>
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
                    {ctaTitle || `${title}와 함께하는\n아름다운 변화`}
                  </h2>
                  <button 
                    onClick={handlePurchase}
                    className="btn-primary inline-flex items-center px-16 py-6 rounded-xl font-bold text-xl hover:scale-105 transition-all duration-500" 
                    style={{ 
                      background: 'linear-gradient(135deg, #E6BE8A 0%, #BA8D7E 100%)', 
                      color: '#2D0A1E', 
                      boxShadow: `0 0 40px ${accentColor}26` 
                    }}
                  >
                    {ctaButtonText || "지금 바로 구매하기"}
                  </button>
                </Reveal>
              </div>
            </section>

            {/* Policy Links */}
            <section className="pb-20 text-center">
              <Reveal>
                <div className="flex justify-center gap-8 text-[10px] tracking-[0.2em] uppercase text-white/30">
                  <Link href="/terms" className="hover:text-[var(--accent-gold)] transition-colors">이용약관</Link>
                  <Link href="/privacy" className="hover:text-[var(--accent-gold)] transition-colors">개인정보처리방침</Link>
                  <Link href="/refund" className="hover:text-[var(--accent-gold)] transition-colors">배송 및 환불정책</Link>
                </div>
              </Reveal>
            </section>

          </div>
        </div>
        <Footer />
      </GlobalBackground>
    </main>
  )
}
