'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Reveal from '@/components/Reveal'
import GlobalBackground from '@/components/GlobalBackground'
import BaekdohwaFlowerMark from '@/components/BaekdohwaFlowerMark'
import Link from 'next/link'
import Image from 'next/image'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { supabase } from '@/lib/supabase'
import { useState, useEffect } from 'react'
import { ChevronDown, AlertCircle, Check, ArrowRight } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { addToCart } from '@/hooks/useCart'
import RecommendedForCards from '@/components/RecommendedForCards'

export interface Ingredient {
  title: string;
  desc: string;
  icon?: string;
  badge?: string;
}

export interface PhysicalProductDetailProps {
  productId: string;
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  overviewImage: string;
  recommendedImage: string;
  formulaImage: string;
  giftImage: string;
  ctaImage: string;
  price: string;
  recommendedPoints: string[];
  ingredients?: Ingredient[];
  functionalIngredients?: Ingredient[];
  subIngredients?: Ingredient[];
  giftTitle: string;
  giftDesc: string;
  formulaTitle?: string;
  formulaDescription?: string;
  formulaWarning?: string;
  selfCareTitle?: string;
  selfCareDesc?: string;
  selfCareImage?: string;
  howToUseImage?: string;
  howToUse?: string;
  warningText?: string;
  accentColor?: string;
  options?: any[];
  ctaTitle?: string;
  ctaButtonText?: string;
  ctaDescription?: string;
  tagline?: string;
  heroEnglishSubtitle?: string;
  heroMainCopy?: string;
  heroDescription?: string;
  heroButtonText?: string;
  overviewTitle?: string;
  overviewPoints?: string[];
  notices?: string[];
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
  ingredients = [],
  functionalIngredients,
  subIngredients,
  giftTitle,
  giftDesc,
  formulaTitle,
  formulaDescription,
  formulaWarning,
  selfCareTitle,
  selfCareDesc,
  selfCareImage,
  howToUseImage,
  howToUse,
  warningText,
  accentColor = '#E6BE8A',
  options: initialOptions,
  ctaTitle,
  ctaButtonText,
  ctaDescription,
  tagline,
  heroEnglishSubtitle,
  heroMainCopy,
  heroDescription,
  heroButtonText,
  overviewTitle,
  overviewPoints,
  notices
}: PhysicalProductDetailProps) {
  useScrollAnimation()
  const router = useRouter()
  const [dbOptions, setDbOptions] = useState<any[]>(initialOptions || [])
  const [selectedOption, setSelectedOption] = useState<string>("")
  const [showError, setShowError] = useState(false)
  const [dbPrice, setDbPrice] = useState<string | number>(price)

  useEffect(() => {
    async function fetchProductData() {
      try {
        const { data, error } = await supabase
          .from('products')
          .select('price, options')
          .eq('slug', productId)
          .single()

        if (!error && data) {
          if (data.price !== undefined && data.price !== null) {
            setDbPrice(data.price)
          }
          if (data.options && !initialOptions) {
            setDbOptions(data.options)
          }
        }
      } catch (err) {
        console.error("Failed to fetch product data:", err)
      }
    }
    fetchProductData()
  }, [productId, initialOptions])

  const handlePurchase = (e: React.MouseEvent) => {
    e.preventDefault()
    if (dbOptions.length > 0 && !selectedOption) {
      setShowError(true)
      alert("옵션을 선택해주세요.")
      return
    }
    
    let url = `/checkout?productId=${productId}`
    if (selectedOption) {
      url += `&option=${encodeURIComponent(selectedOption)}`
    }
    router.push(url)
  }

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    if (dbOptions.length > 0 && !selectedOption) {
      setShowError(true)
      alert("옵션을 선택해주세요.")
      return
    }

    addToCart({
      id: productId,
      slug: productId,
      name: title,
      price: Number(dbPrice),
      option: selectedOption || undefined,
      image: heroImage,
      type: 'physical',
      category: 'PHYSICAL CARE'
    }, 1)

    alert("장바구니에 담았습니다.")
  }

  const activeOptions = dbOptions[0];

  return (
    <main className="relative min-h-screen bg-[#0a0514] text-white selection:bg-[#E6BE8A] selection:text-black font-sans" style={{ '--accent-shadow': `${accentColor}26` } as any}>
      <GlobalBackground src="/image/shop-hero.png" brightCenter={false}>
        <Navigation />

        <div className="relative z-10 pt-36 md:pt-44 pb-20">
          <div className="container-premium">
            
            {/* ==========================================
                1. Hero Section
                ========================================== */}
            <section className="text-center mb-28 md:mb-36">
              <Reveal delayMs={100}>
                {/* 상단 라벨 */}
                <div className="mb-6 flex justify-center items-center gap-2">
                  <span className="h-[1px] w-8 bg-[#E6BE8A]/30"></span>
                  <span 
                    className="inline-block px-4 py-1.5 rounded-full text-[10px] md:text-xs font-bold tracking-[0.25em] uppercase"
                    style={{
                      background: 'rgba(45, 10, 30, 0.7)',
                      border: `1px solid ${accentColor}4D`,
                      color: accentColor,
                    }}
                  >
                    {tagline || 'PREMIUM PHYSICAL CARE'}
                  </span>
                  <span className="h-[1px] w-8 bg-[#E6BE8A]/30"></span>
                </div>

                {/* 메인 타이틀 */}
                <h1 className="text-3xl md:text-5xl font-elegant font-bold mb-4 text-white leading-tight">
                  {title.includes(' ') ? (
                    <>
                      {title.split(' ')[0]} <span style={{ color: accentColor }}>{title.split(' ').slice(1).join(' ')}</span>
                    </>
                  ) : title}
                </h1>

                {/* 영문 서브타이틀 */}
                {heroEnglishSubtitle && (
                  <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-[#EDE6DA]/50 mb-6 font-mono">
                    {heroEnglishSubtitle}
                  </p>
                )}

                {/* 메인 카피 */}
                {heroMainCopy && (
                  <p className="text-xl md:text-2xl text-[#EDE6DA] font-elegant italic tracking-wide mb-8">
                    &ldquo;{heroMainCopy}&rdquo;
                  </p>
                )}
                
                {/* 메인 비주얼 이미지 (max-w-6xl) */}
                <div className="relative max-w-6xl mx-auto aspect-video mb-14 rounded-[30px] md:rounded-[40px] overflow-hidden border border-white/10 shadow-2xl group bg-black/40">
                  <div className="absolute inset-0 p-[1px] rounded-[30px] md:rounded-[40px] bg-gradient-to-tr from-[#D8A48F]/40 via-[#E6BE8A]/40 to-transparent pointer-events-none z-10 opacity-70" />
                  <Image 
                    src={heroImage} 
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-[10000ms] group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0514]/80 via-transparent to-transparent z-0"></div>
                </div>

                {/* 히어로 설명 문구 (max-w-3xl) */}
                {heroDescription ? (
                  <div className="max-w-3xl mx-auto text-[#EDE6DA]/85 text-sm md:text-base leading-relaxed mb-10 whitespace-pre-wrap font-light break-keep">
                    {heroDescription}
                  </div>
                ) : (
                  <p className="text-base md:text-xl text-[#EDE6DA] opacity-80 leading-relaxed mb-10 max-w-3xl mx-auto break-keep font-elegant italic">
                    {subtitle}
                  </p>
                )}

                {/* 옵션 & 구매 버튼 */}
                <div className="flex flex-col items-center gap-6">
                  {activeOptions && activeOptions.values && activeOptions.values.length > 0 && (
                    <div className="w-full max-w-md space-y-3 text-left">
                      <div className="flex items-center justify-between px-2">
                        <label className="text-xs font-bold tracking-widest text-white/50 uppercase">
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
                          className={`w-full bg-white/[0.04] border ${showError && !selectedOption ? 'border-red-500/50' : 'border-white/10'} rounded-2xl px-6 py-4 text-white appearance-none outline-none focus:border-[var(--accent-gold)] transition-all cursor-pointer font-elegant`}
                        >
                          <option value="" className="bg-[#0a0514]">옵션을 선택하세요</option>
                          {activeOptions.values.map((val: string) => (
                            <option key={val} value={val} className="bg-[#0a0514]">{val}</option>
                          ))}
                        </select>
                        <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-white/30 group-hover:text-[var(--accent-gold)] transition-colors">
                          <ChevronDown className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
                    <button 
                      onClick={handleAddToCart}
                      className="flex-1 py-4.5 rounded-2xl font-bold text-base hover:scale-[1.02] active:scale-95 transition-all duration-300 border border-[#E6BE8A]/30 text-[#E6BE8A] hover:bg-[#E6BE8A]/10 bg-white/[0.02]"
                    >
                      장바구니 담기
                    </button>
                    <button 
                      onClick={handlePurchase}
                      className="flex-grow-[1.3] py-4.5 rounded-2xl font-bold text-base hover:scale-[1.02] active:scale-95 transition-all duration-500 text-[#2D0A1E] flex items-center justify-center gap-2"
                      style={{
                        background: 'linear-gradient(135deg, #E6BE8A 0%, #D8A48F 100%)',
                        boxShadow: `0 0 30px ${accentColor}33`
                      }}
                    >
                      {heroButtonText || '바로 구매하기'}
                      <ArrowRight className="w-4 h-4 text-[#2D0A1E]" />
                    </button>
                  </div>

                  <span className="text-xs text-[#EDE6DA]/40">
                    {typeof dbPrice === 'number' ? dbPrice.toLocaleString() : dbPrice}원 | 무료 배송
                  </span>
                </div>
              </Reveal>
            </section>

            {/* ==========================================
                2. Brand Story / Product Overview Section
                ========================================== */}
            <section className="mb-28 md:mb-36">
              <Reveal>
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center mb-16">
                  <div className="relative w-full aspect-square overflow-hidden rounded-[32px] md:rounded-[40px] border border-white/10 shadow-2xl bg-black/40">
                    <div className="absolute inset-0 p-[1px] rounded-[32px] md:rounded-[40px] bg-gradient-to-bl from-[#D8A48F]/40 to-[#E6BE8A]/40 pointer-events-none z-10" />
                    <Image src={overviewImage} alt="Brand Story" fill className="object-cover" />
                  </div>
                  <div className="space-y-6 text-left break-keep">
                    <div className="flex items-center gap-3">
                      <BaekdohwaFlowerMark size={26} outlineGold />
                      <span className="text-xs tracking-[0.25em] text-[#E6BE8A] font-bold uppercase">BRAND STORY & OVERVIEW</span>
                    </div>
                    <h2 className="text-2xl md:text-4xl font-elegant font-bold text-white leading-tight break-keep whitespace-pre-wrap">
                      {overviewTitle || (
                        <>
                          {title}의<br /> <span style={{ color: accentColor }}>특별한 가치</span>
                        </>
                      )}
                    </h2>
                    <div className="text-base text-[#EDE6DA]/85 leading-relaxed break-keep font-light whitespace-pre-wrap space-y-4">
                      {description}
                    </div>
                  </div>
                </div>

                {/* 포인트 카드 6개 그리드 */}
                {overviewPoints && overviewPoints.length > 0 && (
                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
                    {overviewPoints.map((point, idx) => (
                      <div 
                        key={idx} 
                        className="gungjung-glass p-6 md:p-7 rounded-2xl border border-white/5 bg-gradient-to-br from-white/[0.03] to-[#2D0A1E]/15 hover:border-[#E6BE8A]/30 hover:shadow-[0_0_25px_rgba(230,190,138,0.12)] transition-all duration-300 group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-[#2D0A1E] border border-[#E6BE8A]/25 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                          <span className="text-xs text-[#E6BE8A] font-serif">0{idx + 1}</span>
                        </div>
                        <h3 className="text-sm md:text-base font-bold text-white group-hover:text-[#E6BE8A] transition-colors break-keep">
                          {point}
                        </h3>
                      </div>
                    ))}
                  </div>
                )}
              </Reveal>
            </section>

            {/* ==========================================
                3. Recommended For Section
                ========================================== */}
            <section className="mb-28 md:mb-36">
              <Reveal>
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
                  <div className="space-y-8 order-2 lg:order-1 text-left break-keep">
                    <div className="flex items-center gap-3">
                      <BaekdohwaFlowerMark size={26} outlineGold />
                      <span className="text-xs tracking-[0.25em] text-[#E6BE8A] font-bold uppercase">RECOMMENDED FOR</span>
                    </div>
                    <h2 className="text-2xl md:text-4xl font-elegant font-bold text-white tracking-wide">
                      이런 여성에게 <span style={{ color: accentColor }}>권합니다</span>
                    </h2>
                    <RecommendedForCards items={recommendedPoints} />
                  </div>
                  <div className="relative w-full aspect-[3/4] rounded-[32px] md:rounded-[40px] overflow-hidden border border-white/10 shadow-2xl order-1 lg:order-2 bg-black/40">
                    <div className="absolute inset-0 p-[1px] rounded-[32px] md:rounded-[40px] bg-gradient-to-tr from-[#D8A48F]/30 to-[#E6BE8A]/30 pointer-events-none z-10" />
                    <Image src={recommendedImage} alt="Recommended" fill className="object-cover" />
                  </div>
                </div>
              </Reveal>
            </section>

            {/* ==========================================
                4. Formula Section (기능성 원료 & 부원료 분리 지원)
                ========================================== */}
            <section className="mb-28 md:mb-36 text-center">
              <Reveal>
                <div className="mb-4 flex justify-center items-center gap-2">
                  <span className="h-[1px] w-6 bg-[#E6BE8A]/30"></span>
                  <span className="text-xs tracking-[0.25em] text-[#E6BE8A] font-bold uppercase">BALANCE FORMULA</span>
                  <span className="h-[1px] w-6 bg-[#E6BE8A]/30"></span>
                </div>

                {formulaTitle && (
                  <h2 className="text-2xl md:text-4xl font-elegant font-bold text-white tracking-wide mb-6">
                    {formulaTitle}
                  </h2>
                )}

                {formulaDescription && (
                  <p className="text-sm md:text-base text-[#EDE6DA]/75 max-w-2xl mx-auto mb-12 whitespace-pre-wrap font-light break-keep">
                    {formulaDescription}
                  </p>
                )}

                {/* 포뮬러 메인 이미지 (max-w-6xl) */}
                <div className="max-w-6xl mx-auto mb-14">
                  <div className="relative aspect-video rounded-[28px] md:rounded-[36px] overflow-hidden border border-white/10 shadow-xl group bg-black/40">
                    <div className="absolute inset-0 p-[1px] rounded-[28px] md:rounded-[36px] bg-gradient-to-t from-[#D8A48F]/30 to-transparent pointer-events-none z-10" />
                    <Image src={formulaImage} alt="Formula" fill className="object-cover" />
                  </div>
                </div>

                {/* 기능성 원료 & 부원료가 분리되어 넘어온 경우 */}
                {(functionalIngredients && functionalIngredients.length > 0) || (subIngredients && subIngredients.length > 0) ? (
                  <div className="max-w-6xl mx-auto space-y-10 text-left">
                    {/* 기능성 원료 블록 */}
                    {functionalIngredients && functionalIngredients.length > 0 && (
                      <div className="gungjung-glass p-8 md:p-10 rounded-[28px] border border-[#E6BE8A]/30 bg-gradient-to-br from-[#2D0A1E]/30 to-transparent">
                        <div className="flex items-center gap-3 mb-6">
                          <span className="px-3.5 py-1 rounded-full text-xs font-bold tracking-wider text-[#2D0A1E] bg-[#E6BE8A]">
                            기능성 원료
                          </span>
                          <span className="text-xs text-[#EDE6DA]/50">식약처 인정 기능성 원료</span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {functionalIngredients.map((item, idx) => (
                            <div key={idx} className="p-6 rounded-2xl bg-white/[0.03] border border-[#E6BE8A]/20 flex gap-5 items-start">
                              <div className="w-12 h-12 rounded-xl bg-[#2D0A1E] border border-[#E6BE8A]/40 flex items-center justify-center shrink-0 text-[#E6BE8A]">
                                <i className={`fas ${item.icon || 'fa-leaf'} text-lg`}></i>
                              </div>
                              <div>
                                <div className="flex items-center gap-2 mb-2">
                                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                                  {item.badge && (
                                    <span className="text-[10px] px-2 py-0.5 rounded bg-[#E6BE8A]/20 text-[#E6BE8A] border border-[#E6BE8A]/30">
                                      {item.badge}
                                    </span>
                                  )}
                                </div>
                                <p className="text-sm text-[#EDE6DA]/75 font-light leading-relaxed break-keep">{item.desc}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* 부원료 블록 */}
                    {subIngredients && subIngredients.length > 0 && (
                      <div className="gungjung-glass p-8 md:p-10 rounded-[28px] border border-white/5">
                        <div className="flex items-center gap-3 mb-6">
                          <span className="px-3.5 py-1 rounded-full text-xs font-bold tracking-wider text-[#EDE6DA] bg-white/10 border border-white/15">
                            함께 배합된 부원료
                          </span>
                          <span className="text-xs text-[#EDE6DA]/50">식물 유래 및 포뮬러 구성 원료</span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                          {subIngredients.map((item, idx) => (
                            <div key={idx} className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 flex gap-4 items-start hover:border-white/15 transition-all">
                              <div className="w-10 h-10 rounded-xl bg-[#2D0A1E]/80 border border-white/10 flex items-center justify-center shrink-0 text-[#E6BE8A]/80">
                                <i className={`fas ${item.icon || 'fa-seedling'} text-base`}></i>
                              </div>
                              <div>
                                <h3 className="text-base font-bold text-white mb-1">{item.title}</h3>
                                <p className="text-xs text-[#EDE6DA]/60 font-light leading-relaxed break-keep">{item.desc}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  /* 기존 ingredients 단일 그리드 */
                  <div className="gungjung-glass p-8 md:p-14 relative overflow-hidden rounded-[28px] border border-white/5 max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
                      {ingredients.map((ing, idx) => (
                        <div key={idx} className="flex gap-5 items-start p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all">
                          <div className="w-12 h-12 rounded-xl bg-[#2D0A1E] flex items-center justify-center shrink-0" style={{ borderColor: `${accentColor}33`, color: accentColor, border: '1px solid' }}>
                            <i className={`fas ${ing.icon || 'fa-leaf'} text-lg`}></i>
                          </div>
                          <div>
                            <h3 className="text-base font-bold text-white mb-1.5">{ing.title}</h3>
                            <p className="text-xs text-[#EDE6DA]/60 font-light leading-relaxed">{ing.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 포뮬러 하단 주의 문구 */}
                {formulaWarning && (
                  <div className="mt-8 p-5 rounded-2xl bg-white/[0.02] border border-white/5 max-w-4xl mx-auto">
                    <p className="text-xs text-[#EDE6DA]/50 leading-relaxed break-keep whitespace-pre-wrap">
                      <i className="fas fa-circle-info mr-2 opacity-60"></i>
                      {formulaWarning}
                    </p>
                  </div>
                )}
              </Reveal>
            </section>

            {/* ==========================================
                5. Self-Care / Premium Product Section (옵셔널)
                ========================================== */}
            {selfCareImage && (
              <section className="mb-28 md:mb-36">
                <Reveal>
                  <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
                    <div className="space-y-6 text-left break-keep">
                      <div className="flex items-center gap-3">
                        <BaekdohwaFlowerMark size={26} outlineGold />
                        <span className="text-xs tracking-[0.25em] text-[#E6BE8A] font-bold uppercase">SELF-CARE RITUAL</span>
                      </div>
                      <h2 className="text-2xl md:text-4xl font-elegant font-bold text-white leading-tight break-keep whitespace-pre-wrap">
                        {selfCareTitle || '나를 위한 시간이\n가장 뒤가 되지 않도록'}
                      </h2>
                      <div className="text-base text-[#EDE6DA]/85 leading-relaxed break-keep font-light whitespace-pre-wrap space-y-4">
                        {selfCareDesc}
                      </div>
                    </div>
                    <div className="relative w-full aspect-[4/5] overflow-hidden rounded-[32px] md:rounded-[40px] border border-white/10 shadow-2xl bg-black/40">
                      <div className="absolute inset-0 p-[1px] rounded-[32px] md:rounded-[40px] bg-gradient-to-tr from-[#D8A48F]/30 to-[#E6BE8A]/30 pointer-events-none z-10" />
                      <Image src={selfCareImage} alt="Self Care" fill className="object-cover" />
                    </div>
                  </div>
                </Reveal>
              </section>
            )}

            {/* ==========================================
                6. Gift Section
                ========================================== */}
            <section className="mb-28 md:mb-36">
              <Reveal>
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
                  <div className="space-y-6 order-2 lg:order-1 text-left break-keep">
                    <div className="flex items-center gap-3">
                      <BaekdohwaFlowerMark size={26} outlineGold />
                      <span className="text-xs tracking-[0.25em] text-[#E6BE8A] font-bold uppercase">WELLNESS GIFT</span>
                    </div>
                    <h2 className="text-2xl md:text-4xl font-elegant font-bold text-white leading-tight">
                      {giftTitle}
                    </h2>
                    <p className="text-base text-[#EDE6DA]/80 leading-relaxed break-keep font-light whitespace-pre-wrap">
                      {giftDesc}
                    </p>
                  </div>
                  <div className="relative w-full aspect-[4/5] overflow-hidden rounded-[32px] md:rounded-[40px] border border-white/10 shadow-2xl order-1 lg:order-2 bg-black/40">
                    <div className="absolute inset-0 p-[1px] rounded-[32px] md:rounded-[40px] bg-gradient-to-bl from-[#D8A48F]/30 to-[#E6BE8A]/30 pointer-events-none z-10" />
                    <Image src={giftImage} alt="Gift" fill className="object-cover" />
                  </div>
                </div>
              </Reveal>
            </section>

            {/* ==========================================
                7. How To Use Section
                ========================================== */}
            {howToUse && (
              <section className="mb-28 md:mb-36">
                <Reveal>
                  {howToUseImage ? (
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
                      <div className="relative w-full aspect-[4/5] overflow-hidden rounded-[32px] md:rounded-[40px] border border-white/10 shadow-2xl bg-black/40">
                        <div className="absolute inset-0 p-[1px] rounded-[32px] md:rounded-[40px] bg-gradient-to-tr from-[#D8A48F]/30 to-[#E6BE8A]/30 pointer-events-none z-10" />
                        <Image src={howToUseImage} alt="How to Use" fill className="object-cover" />
                      </div>
                      <div className="gungjung-glass p-8 md:p-12 rounded-[28px] border border-white/5 space-y-6 text-left break-keep">
                        <div className="flex items-center gap-3">
                          <span className="text-xs tracking-[0.25em] text-[#E6BE8A] font-bold uppercase">DAILY ROUTINE</span>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-elegant font-bold text-white border-l-4 pl-5" style={{ borderColor: `${accentColor}` }}>
                          매일의 루틴
                        </h2>
                        <div className="text-base text-[#EDE6DA]/85 leading-relaxed break-keep whitespace-pre-wrap font-light">
                          {howToUse}
                        </div>
                        {warningText && (
                          <div className="pt-6 border-t border-white/5">
                            <p className="text-xs text-[#EDE6DA]/50 leading-relaxed break-keep whitespace-pre-wrap">
                              <i className="fas fa-exclamation-circle mr-2 opacity-50"></i>
                              {warningText}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className="gungjung-glass p-10 rounded-[28px] border-white/5 bg-gradient-to-br from-white/[0.02] to-transparent max-w-6xl mx-auto text-left break-keep">
                      <h2 className="text-2xl font-elegant font-bold mb-8 text-white border-l-4 pl-6" style={{ borderColor: `${accentColor}80` }}>사용 방법</h2>
                      <div className="space-y-6">
                        <p className="text-base text-[#EDE6DA]/80 leading-relaxed break-keep whitespace-pre-wrap">
                          {howToUse}
                        </p>
                        {warningText && (
                          <div className="mt-8 pt-8 border-t border-white/5">
                            <p className="text-xs text-[#EDE6DA]/40 leading-relaxed break-keep">
                              <i className="fas fa-exclamation-circle mr-2 opacity-50"></i>
                              {warningText}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </Reveal>
              </section>
            )}

            {/* ==========================================
                8. Notice Section (max-w-6xl)
                ========================================== */}
            <section className="mb-28 md:mb-36 max-w-6xl mx-auto">
              <Reveal>
                <div className="gungjung-glass p-8 md:p-12 rounded-[28px] border border-white/5 text-left">
                  <h2 className="text-xl md:text-2xl font-elegant font-bold mb-8 text-white border-l-4 border-[#E6BE8A] pl-5">
                    구매 전 안내
                  </h2>
                  <ul className="space-y-3.5">
                    {(notices || [
                      '본 제품은 실물 배송 상품입니다.',
                      '결제 시 배송지 정보를 정확히 입력해주세요.',
                      '배송 기간은 결제 완료 후 영업일 기준 2~5일 정도 소요됩니다.',
                      '제품 특성상 개봉 후 단순 변심에 의한 교환/반품은 제한될 수 있습니다.'
                    ]).map((text, idx) => (
                      <li key={idx} className="flex items-start gap-3.5 text-[#EDE6DA]/70 text-xs md:text-sm font-light">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#E6BE8A] shrink-0"></span>
                        <span className="break-keep">{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </section>

            {/* ==========================================
                9. Final CTA Section (max-w-6xl)
                ========================================== */}
            <section className="max-w-6xl mx-auto relative aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-[32px] md:rounded-[40px] mb-20 group border border-white/10">
              <div className="absolute inset-0 z-0">
                <Image src={ctaImage} alt="CTA" fill className="object-cover transition-transform duration-[10000ms] group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0514] via-[#0a0514]/75 to-transparent"></div>
              </div>
              <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 md:px-10 text-center">
                <Reveal>
                  <h2 className="text-2xl md:text-5xl font-elegant font-bold text-white mb-6 leading-tight whitespace-pre-wrap">
                    {ctaTitle || `${title}와 함께하는\n아름다운 변화`}
                  </h2>
                  {ctaDescription && (
                    <p className="text-sm md:text-base text-[#EDE6DA]/80 max-w-xl mx-auto mb-10 leading-relaxed font-light whitespace-pre-wrap break-keep">
                      {ctaDescription}
                    </p>
                  )}
                  <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md relative z-10 mx-auto">
                    <button 
                      onClick={handleAddToCart}
                      className="flex-1 py-4.5 rounded-2xl font-bold text-base hover:scale-[1.02] active:scale-95 transition-all duration-300 border border-[#E6BE8A]/30 text-[#E6BE8A] hover:bg-[#E6BE8A]/10 bg-white/[0.05]"
                      style={{ backdropFilter: 'blur(5px)' }}
                    >
                      장바구니 담기
                    </button>
                    <button 
                      onClick={handlePurchase}
                      className="flex-grow-[1.3] py-4.5 rounded-2xl font-bold text-base hover:scale-[1.02] active:scale-95 transition-all duration-500 text-[#2D0A1E] flex items-center justify-center gap-2" 
                      style={{ 
                        background: 'linear-gradient(135deg, #E6BE8A 0%, #D8A48F 100%)', 
                        boxShadow: `0 0 40px ${accentColor}33` 
                      }}
                    >
                      {ctaButtonText || "바로 구매하기"}
                      <ArrowRight className="w-4 h-4 text-[#2D0A1E]" />
                    </button>
                  </div>
                </Reveal>
              </div>
            </section>

            {/* Policy Links */}
            <section className="pb-16 text-center">
              <Reveal>
                <div className="flex justify-center gap-8 text-[11px] tracking-[0.2em] uppercase text-white/30">
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


