'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Reveal from '@/components/Reveal'
import GlobalBackground from '@/components/GlobalBackground'
import BaekdohwaFlowerMark from '@/components/BaekdohwaFlowerMark'
import RecommendedForCards from '@/components/RecommendedForCards'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { addToCart } from '@/hooks/useCart'
import { supabase } from '@/lib/supabase'
import { Check, ArrowRight } from 'lucide-react'

export default function DubomProductPage() {
  useScrollAnimation()
  const router = useRouter()

  const productId = 'dubom'
  const title = '두봄 | DUBOM'
  const tagline = 'BAEKDOHWA WELLNESS SELECTION'
  const heroEnglishSubtitle = 'DUBOM · THE SECOND SPRING'
  const heroMainCopy = '여자에게는 두 번의 봄이 옵니다'
  const heroDescription = `첫 번째 봄이 세상을 향해 피어나는 시간이었다면,
두 번째 봄은 나에게 다시 돌아오는 시간입니다.

매일 조금 더 나를 돌보고,
오늘의 나에게 필요한 것을 선택하는 시간.

여성의 건강한 변화와 일상의 밸런스를 위한
프리미엄 여성 데일리 케어, 두봄.`
  const heroButtonText = '두봄 만나보기'

  const accentColor = '#D8A48F'

  // 이미지 매핑
  const heroImage = '/image/dubom/m1.webp'
  const overviewImage = '/image/dubom/m2.webp'
  const recommendedImage = '/image/dubom/m3.webp'
  const formulaImage = '/image/dubom/m4.webp'
  const selfCareImage = '/image/dubom/m5.webp'
  const giftImage = '/image/dubom/m6.webp'
  const howToUseImage = '/image/dubom/m7.webp'
  const ctaImage = '/image/dubom/m6.webp'

  // DB 연동 상태
  const [dbPrice, setDbPrice] = useState<number | string>('89,000')
  const [dbOptions, setDbOptions] = useState<any[]>([])
  const [selectedOption, setSelectedOption] = useState<string>('')
  const [showError, setShowError] = useState(false)

  useEffect(() => {
    async function fetchProduct() {
      try {
        const { data, error } = await supabase
          .from('products')
          .select('price, options')
          .eq('productId', productId)
          .single()

        if (data && !error) {
          if (data.price) setDbPrice(data.price)
          if (data.options && Array.isArray(data.options)) {
            setDbOptions(data.options)
            if (data.options.length > 0 && data.options[0].name) {
              setSelectedOption(data.options[0].name)
            }
          }
        }
      } catch (err) {
        console.error('Failed to load dubom price from supabase:', err)
      }
    }
    fetchProduct()
  }, [])

  const handlePurchase = (e: React.MouseEvent) => {
    e.preventDefault()
    if (dbOptions.length > 0 && !selectedOption) {
      setShowError(true)
      alert('옵션을 선택해주세요.')
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
      alert('옵션을 선택해주세요.')
      return
    }

    addToCart(
      {
        id: productId,
        slug: productId,
        name: title,
        price: typeof dbPrice === 'number' ? dbPrice : Number(String(dbPrice).replace(/[^0-9]/g, '')),
        option: selectedOption || undefined,
        image: heroImage,
        type: 'physical',
        category: 'PHYSICAL CARE',
      },
      1
    )

    alert('장바구니에 담았습니다.')
  }

  // 2. Brand Story / Overview 데이터
  const overviewTitle = '두 번째 봄은\n나를 돌보는 시간입니다'
  const overviewDesc = `누군가를 돌보고,
수많은 역할을 살아오느라
정작 나 자신을 뒤로 미뤄온 시간.

이제는 내 몸의 변화와
오늘의 컨디션을 조금 더 섬세하게 살펴보세요.

두봄은 여성의 건강한 변화의 시기를 생각해
기능성 원료와 다양한 부원료를 함께 구성한
프리미엄 여성 건강기능식품입니다.

단순히 무언가를 더 먹는 것이 아니라,
매일 나를 챙기는 작은 습관.

두봄을 나를 위한
데일리 밸런스 루틴으로 제안합니다.`

  const overviewPoints = [
    '여성 건강 밸런스 케어',
    '갱년기 여성 건강에 도움을 줄 수 있는 기능성 원료',
    '매일 간편하게 챙기는 루틴',
    '다양한 식물 유래 부원료',
    '여성의 변화하는 시기를 고려한 포뮬러',
    '나를 위한 프리미엄 자기관리',
  ]

  // 3. Recommended For 데이터
  const recommendedPoints = [
    '요즘 내 몸과 컨디션의 변화에 조금 더 관심을 갖고 싶은 분',
    '여성의 건강한 변화의 시기를 미리 준비하고 싶은 분',
    '갱년기 전후 여성 건강 관리에 관심 있는 분',
    '매일 간편하게 챙길 수 있는 여성 건강 루틴을 찾는 분',
    '원료 구성을 꼼꼼하게 확인하고 제품을 선택하는 분',
    '가족을 챙기듯 이제는 나 자신도 돌보고 싶은 분',
    '엄마, 아내, 언니, 친구에게 의미 있는 건강 선물을 찾는 분',
  ]

  // 4. Formula 데이터
  const formulaTitle = '여성을 생각해 구성한\n두봄의 밸런스 포뮬러'
  const formulaDesc = `여성의 건강한 일상과 변화의 시기를 생각해
기능성 원료와 다양한 부원료를 함께 담았습니다.`

  const functionalIngredients = [
    {
      title: '회화나무열매추출물',
      desc: '갱년기 여성 건강에 도움을 줄 수 있는 식약처 기능성 인정 원료',
      icon: 'fa-leaf',
      badge: '식약처 기능성 인정 원료',
    },
  ]

  const subIngredients = [
    {
      title: '감마리놀렌산 함유 유지',
      desc: '식물 유래 원료를 함께 배합했습니다.',
      icon: 'fa-seedling',
    },
    {
      title: '이노시톨',
      desc: '두봄의 균형 잡힌 포뮬러를 구성하는 부원료입니다.',
      icon: 'fa-heart',
    },
    {
      title: '브로콜리추출물분말',
      desc: '자연에서 찾은 식물 유래 원료를 더했습니다.',
      icon: 'fa-spa',
    },
    {
      title: '퀘르세틴 & 브로멜라인',
      desc: '여성의 조화로운 일상을 고려하여 배합한 부원료입니다.',
      icon: 'fa-shield-halved',
    },
    {
      title: '어성초추출분말',
      desc: '정갈하게 선별하여 더한 식물 유래 부원료입니다.',
      icon: 'fa-clover',
    },
    {
      title: '프로바이오틱스 유산균',
      desc: '매일의 편안하고 가벼운 루틴을 돕는 부원료입니다.',
      icon: 'fa-circle-check',
    },
  ]

  // 5. Self-Care 데이터
  const selfCareTitle = '나를 위한 것이\n가장 뒤가 되지 않도록'
  const selfCareDesc = `가족을 먼저 챙기고,
일을 먼저 생각하고,
나를 위한 선택은 늘 뒤로 미뤄두었다면.

이제는 나에게도
작은 건강 루틴을 선물해보세요.

두봄이 이야기하는 두 번째 봄은
젊음으로 돌아가는 시간이 아닙니다.

지금의 나를 이해하고,
지금의 나를 더 소중하게 돌보는 시간입니다.

Golden Age가 아닌,
나만의 Second Spring.

건강과 우아함, 여성의 자신감과 자기돌봄이 느껴지는
백도화 비밀상점만의 프리미엄 감성으로 함께합니다.`

  // 6. Gift 데이터
  const giftTitle = '두 번째 봄을 선물하세요'
  const giftDesc = `엄마에게,
사랑하는 아내에게,
언니와 친구에게,
그리고 가장 소중한 나 자신에게.

건강을 챙기라는 말 대신
"당신의 시간을 더 소중히 여기길 바란다"는 마음을 담아
두봄의 단정한 프리미엄 패키지로 선물해보세요.`

  // 7. How to Use 데이터
  const howToUse = `하루 한 번, 편안한 시간에
충분한 물과 함께 섭취해주세요.

아침의 시작이나 나만의 저녁 루틴과 함께하면
더욱 꾸준한 데일리 밸런스 관리가 가능합니다.`

  const formulaWarning = `본 제품은 질병의 예방 및 치료를 위한 의약품이 아닙니다.
건강기능식품의 기능성 및 원료 정보는 제품 표시사항을 기준으로 확인해주세요.
개인의 체질과 건강 상태에 따라 체감은 다를 수 있습니다.`

  const warningText = `특이체질, 알레르기 체질의 경우 성분을 확인 후 섭취하십시오.
어린이, 임산부 및 수유부는 섭취에 주의하십시오.
에스트로겐 호르몬에 민감한 사람은 섭취에 주의하십시오.`

  return (
    <main
      className="relative min-h-screen bg-[#0a0514] text-white selection:bg-[#E6BE8A] selection:text-black font-sans"
      style={{ '--accent-shadow': `${accentColor}26` } as any}
    >
      <GlobalBackground src="/image/shop-hero.png" brightCenter={false}>
        <Navigation />

        <div className="relative z-10 pt-36 md:pt-44 pb-20">
          {/* /reports/love-secret과 완전히 동일한 와이드 1440px container-premium 적용 */}
          <div className="container-premium">
            
            {/* ==========================================
                1. Hero Section (/reports/love-secret 기준 통일)
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
                    {tagline}
                  </span>
                  <span className="h-[1px] w-8 bg-[#E6BE8A]/30"></span>
                </div>

                {/* 메인 타이틀 */}
                <h1 className="text-3xl md:text-5xl font-elegant font-bold mb-4 text-white leading-tight">
                  두봄 <span style={{ color: accentColor }}>| DUBOM</span>
                </h1>

                {/* 영문 서브타이틀 */}
                <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-[#EDE6DA]/50 mb-6 font-mono">
                  {heroEnglishSubtitle}
                </p>

                {/* 메인 카피 */}
                <p className="text-xl md:text-2xl text-[#EDE6DA] font-elegant italic tracking-wide mb-8">
                  &ldquo;{heroMainCopy}&rdquo;
                </p>

                {/* 메인 16:9 이미지 (/reports/love-secret의 max-w-6xl 규격 적용) */}
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

                {/* 히어로 설명 문구 (/reports/love-secret의 max-w-3xl 규격 적용) */}
                <div className="max-w-3xl mx-auto text-[#EDE6DA]/85 text-sm md:text-base leading-relaxed mb-10 whitespace-pre-wrap font-light break-keep">
                  {heroDescription}
                </div>

                {/* CTA 버튼 & 가격 */}
                <div className="flex flex-col items-center gap-6">
                  {dbOptions && dbOptions.length > 0 && (
                    <div className="w-full max-w-md text-left">
                      <label className="block text-xs text-[#EDE6DA]/70 mb-2">옵션 선택</label>
                      <select
                        value={selectedOption}
                        onChange={(e) => setSelectedOption(e.target.value)}
                        className="w-full bg-[#180b22] border border-[#E6BE8A]/30 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#E6BE8A]"
                      >
                        {dbOptions.map((opt: any, idx: number) => (
                          <option key={idx} value={opt.name}>
                            {opt.name} {opt.priceDiff ? `(+${opt.priceDiff.toLocaleString()}원)` : ''}
                          </option>
                        ))}
                      </select>
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
                        boxShadow: `0 0 30px ${accentColor}33`,
                      }}
                    >
                      {heroButtonText}
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
                2. Brand Story / Product Overview Section (/reports/love-secret의 2열 와이드 그리드)
                ========================================== */}
            <section className="mb-28 md:mb-36">
              <Reveal>
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
                  {/* 왼쪽 대표 정사각 비주얼 */}
                  <div className="relative w-full aspect-square overflow-hidden rounded-[32px] md:rounded-[40px] border border-white/10 shadow-2xl bg-black/40">
                    <div className="absolute inset-0 p-[1px] rounded-[32px] md:rounded-[40px] bg-gradient-to-bl from-[#D8A48F]/40 to-[#E6BE8A]/40 pointer-events-none z-10" />
                    <Image src={overviewImage} alt="두봄 브랜드 스토리" fill className="object-cover" />
                  </div>

                  {/* 오른쪽 핵심 가치 및 6대 포인트 카드 */}
                  <div className="space-y-6 text-left break-keep">
                    <div className="flex items-center gap-3">
                      <BaekdohwaFlowerMark size={26} outlineGold />
                      <span className="text-xs tracking-[0.25em] text-[#E6BE8A] font-bold uppercase">
                        BRAND STORY & OVERVIEW
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-4xl font-elegant font-bold text-white leading-tight break-keep whitespace-pre-wrap">
                      두 번째 봄은<br />
                      <span style={{ color: accentColor }}>나를 돌보는 시간입니다</span>
                    </h2>
                    <div className="text-base text-[#EDE6DA]/85 leading-relaxed break-keep font-light whitespace-pre-wrap space-y-4">
                      {overviewDesc}
                    </div>

                    {/* 포인트 카드 6개 그리드 (/reports/love-secret처럼 설명 아래 조화롭게 배치) */}
                    <div className="grid grid-cols-2 gap-3.5 pt-4">
                      {overviewPoints.map((point, idx) => (
                        <div
                          key={idx}
                          className="gungjung-glass p-4 rounded-xl border border-white/5 bg-gradient-to-br from-white/[0.03] to-[#2D0A1E]/15 hover:border-[#E6BE8A]/30 transition-all duration-300 flex items-center gap-3"
                        >
                          <div className="w-7 h-7 rounded-lg bg-[#2D0A1E] border border-[#E6BE8A]/30 flex items-center justify-center shrink-0">
                            <span className="text-[11px] text-[#E6BE8A] font-serif">0{idx + 1}</span>
                          </div>
                          <span className="text-xs md:text-sm font-medium text-white/90 break-keep">
                            {point}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            </section>

            {/* ==========================================
                3. Recommended For Section (/reports/love-secret의 2열 와이드 그리드)
                ========================================== */}
            <section className="mb-28 md:mb-36">
              <Reveal>
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
                  {/* 왼쪽 추천 문구 리스트 */}
                  <div className="space-y-8 text-left break-keep order-2 lg:order-1">
                    <div className="flex items-center gap-3">
                      <BaekdohwaFlowerMark size={26} outlineGold />
                      <span className="text-xs tracking-[0.25em] text-[#E6BE8A] font-bold uppercase">
                        RECOMMENDED FOR
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-4xl font-elegant font-bold text-white tracking-wide">
                      이런 여성에게 <span style={{ color: accentColor }}>권합니다</span>
                    </h2>
                    <RecommendedForCards items={recommendedPoints} />
                  </div>

                  {/* 오른쪽 세로 비주얼 (3:4 비율) */}
                  <div className="relative w-full aspect-[3/4] rounded-[32px] md:rounded-[40px] overflow-hidden border border-white/10 shadow-2xl order-1 lg:order-2 bg-black/40">
                    <div className="absolute inset-0 p-[1px] rounded-[32px] md:rounded-[40px] bg-gradient-to-tr from-[#D8A48F]/30 to-[#E6BE8A]/30 pointer-events-none z-10" />
                    <Image src={recommendedImage} alt="두봄 추천 대상" fill className="object-cover" />
                  </div>
                </div>
              </Reveal>
            </section>

            {/* ==========================================
                4. Formula Section (/reports/love-secret의 와이드 중앙 정렬 섹션)
                ========================================== */}
            <section className="mb-28 md:mb-36 text-center">
              <Reveal>
                <div className="max-w-4xl mx-auto space-y-4 mb-10">
                  <div className="flex justify-center items-center gap-2">
                    <span className="h-[1px] w-6 bg-[#E6BE8A]/30"></span>
                    <span className="text-xs tracking-[0.25em] text-[#E6BE8A] font-bold uppercase">
                      BALANCE FORMULA
                    </span>
                    <span className="h-[1px] w-6 bg-[#E6BE8A]/30"></span>
                  </div>
                  <h2 className="text-2xl md:text-4xl font-elegant font-bold text-white tracking-wide mb-6">
                    여성을 생각해 구성한<br />
                    <span style={{ color: accentColor }}>두봄의 밸런스 포뮬러</span>
                  </h2>
                  <p className="text-sm md:text-base text-[#EDE6DA]/75 max-w-2xl mx-auto mb-12 whitespace-pre-wrap font-light break-keep">
                    {formulaDesc}
                  </p>
                </div>

                {/* 중앙 16:9 와이드 인포그래픽 이미지 (max-w-6xl) */}
                <div className="max-w-6xl mx-auto mb-14">
                  <div className="relative aspect-video rounded-[28px] md:rounded-[36px] overflow-hidden border border-white/10 shadow-xl group bg-black/40">
                    <div className="absolute inset-0 p-[1px] rounded-[28px] md:rounded-[36px] bg-gradient-to-t from-[#D8A48F]/30 to-transparent pointer-events-none z-10" />
                    <Image src={formulaImage} alt="두봄 포뮬러 배합" fill className="object-cover" />
                  </div>
                </div>

                {/* 원료 정보 카드 목록 (max-w-6xl) */}
                <div className="max-w-6xl mx-auto space-y-10 text-left">
                  {/* 기능성 원료 */}
                  <div className="gungjung-glass p-8 md:p-10 rounded-[28px] border border-[#E6BE8A]/30 bg-gradient-to-br from-[#2D0A1E]/30 to-transparent">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="px-3.5 py-1 rounded-full text-xs font-bold tracking-wider text-[#2D0A1E] bg-[#E6BE8A]">
                        기능성 원료
                      </span>
                      <span className="text-xs text-[#EDE6DA]/50">식약처 인정 기능성 원료</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {functionalIngredients.map((item, idx) => (
                        <div
                          key={idx}
                          className="p-6 rounded-2xl bg-white/[0.03] border border-[#E6BE8A]/20 flex gap-5 items-start"
                        >
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
                            <p className="text-sm text-[#EDE6DA]/75 font-light leading-relaxed break-keep">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 함께 배합된 부원료 6종 */}
                  <div className="gungjung-glass p-8 md:p-10 rounded-[28px] border border-white/5">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="px-3.5 py-1 rounded-full text-xs font-bold tracking-wider text-[#EDE6DA] bg-white/10 border border-white/15">
                        함께 배합된 부원료
                      </span>
                      <span className="text-xs text-[#EDE6DA]/50">식물 유래 및 포뮬러 구성 원료</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {subIngredients.map((item, idx) => (
                        <div
                          key={idx}
                          className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 flex gap-4 items-start hover:border-white/15 transition-all"
                        >
                          <div className="w-10 h-10 rounded-xl bg-[#2D0A1E]/80 border border-white/10 flex items-center justify-center shrink-0 text-[#E6BE8A]/80">
                            <i className={`fas ${item.icon || 'fa-seedling'} text-base`}></i>
                          </div>
                          <div>
                            <h3 className="text-base font-bold text-white mb-1">{item.title}</h3>
                            <p className="text-xs text-[#EDE6DA]/60 font-light leading-relaxed break-keep">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

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
                5. Self-Care Section (/reports/love-secret의 2열 와이드 그리드)
                ========================================== */}
            <section className="mb-28 md:mb-36">
              <Reveal>
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
                  <div className="space-y-6 text-left break-keep">
                    <div className="flex items-center gap-3">
                      <BaekdohwaFlowerMark size={26} outlineGold />
                      <span className="text-xs tracking-[0.25em] text-[#E6BE8A] font-bold uppercase">
                        SELF-CARE RITUAL
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-4xl font-elegant font-bold text-white leading-tight break-keep whitespace-pre-wrap">
                      나를 위한 것이<br />
                      <span style={{ color: accentColor }}>가장 뒤가 되지 않도록</span>
                    </h2>
                    <div className="text-base text-[#EDE6DA]/85 leading-relaxed break-keep font-light whitespace-pre-wrap space-y-4">
                      {selfCareDesc}
                    </div>
                  </div>
                  <div className="relative w-full aspect-[4/5] overflow-hidden rounded-[32px] md:rounded-[40px] border border-white/10 shadow-2xl bg-black/40">
                    <div className="absolute inset-0 p-[1px] rounded-[32px] md:rounded-[40px] bg-gradient-to-tr from-[#D8A48F]/30 to-[#E6BE8A]/30 pointer-events-none z-10" />
                    <Image src={selfCareImage} alt="두봄 셀프케어" fill className="object-cover" />
                  </div>
                </div>
              </Reveal>
            </section>

            {/* ==========================================
                6. Gift Section (/reports/love-secret의 2열 와이드 그리드)
                ========================================== */}
            <section className="mb-28 md:mb-36">
              <Reveal>
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
                  <div className="space-y-6 text-left break-keep order-2 lg:order-1">
                    <div className="flex items-center gap-3">
                      <BaekdohwaFlowerMark size={26} outlineGold />
                      <span className="text-xs tracking-[0.25em] text-[#E6BE8A] font-bold uppercase">
                        WELLNESS GIFT
                      </span>
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
                    <Image src={giftImage} alt="두봄 선물 포장" fill className="object-cover" />
                  </div>
                </div>
              </Reveal>
            </section>

            {/* ==========================================
                7. How To Use Section (/reports/love-secret의 2열 와이드 그리드)
                ========================================== */}
            <section className="mb-28 md:mb-36">
              <Reveal>
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
                  <div className="relative w-full aspect-[4/5] overflow-hidden rounded-[32px] md:rounded-[40px] border border-white/10 shadow-2xl bg-black/40">
                    <div className="absolute inset-0 p-[1px] rounded-[32px] md:rounded-[40px] bg-gradient-to-tr from-[#D8A48F]/30 to-[#E6BE8A]/30 pointer-events-none z-10" />
                    <Image src={howToUseImage} alt="두봄 섭취 방법" fill className="object-cover" />
                  </div>
                  <div className="gungjung-glass p-8 md:p-12 rounded-[28px] border border-white/5 space-y-6 text-left break-keep">
                    <div className="flex items-center gap-3">
                      <span className="text-xs tracking-[0.25em] text-[#E6BE8A] font-bold uppercase">
                        DAILY ROUTINE
                      </span>
                    </div>
                    <h2
                      className="text-2xl md:text-3xl font-elegant font-bold text-white border-l-4 pl-5"
                      style={{ borderColor: `${accentColor}` }}
                    >
                      매일의 두봄 루틴
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
              </Reveal>
            </section>

            {/* ==========================================
                8. Notice Section (max-w-6xl 중앙 정렬)
                ========================================== */}
            <section className="mb-28 md:mb-36 max-w-6xl mx-auto">
              <Reveal>
                <div className="gungjung-glass p-8 md:p-12 rounded-[28px] border border-white/5 text-left">
                  <h2 className="text-xl md:text-2xl font-elegant font-bold mb-8 text-white border-l-4 border-[#E6BE8A] pl-5">
                    구매 전 안내
                  </h2>
                  <ul className="space-y-3.5">
                    {[
                      '본 제품은 실물 배송 상품입니다.',
                      '결제 시 배송지 정보를 정확히 입력해주세요.',
                      '배송 기간은 결제 완료 후 영업일 기준 2~5일 정도 소요됩니다.',
                      '제품 특성상 개봉 후 단순 변심에 의한 교환/반품은 제한될 수 있습니다.',
                    ].map((text, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3.5 text-[#EDE6DA]/70 text-xs md:text-sm font-light"
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#E6BE8A] shrink-0"></span>
                        <span className="break-keep">{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </section>

            {/* ==========================================
                9. Final CTA Section (max-w-6xl 와이드 배치)
                ========================================== */}
            <section className="max-w-6xl mx-auto relative aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-[32px] md:rounded-[40px] mb-20 group border border-white/10">
              <div className="absolute inset-0 z-0">
                <Image
                  src={ctaImage}
                  alt="두봄과 함께하는 아름다운 변화"
                  fill
                  className="object-cover transition-transform duration-[10000ms] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0514] via-[#0a0514]/75 to-transparent"></div>
              </div>
              <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 md:px-10 text-center">
                <Reveal>
                  <h2 className="text-2xl md:text-5xl font-elegant font-bold text-white mb-6 leading-tight whitespace-pre-wrap">
                    두봄과 함께하는{'\n'}아름다운 변화
                  </h2>
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
                        boxShadow: `0 0 40px ${accentColor}33`,
                      }}
                    >
                      두봄 구매하기
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
                  <Link href="/terms" className="hover:text-[var(--accent-gold)] transition-colors">
                    이용약관
                  </Link>
                  <Link href="/privacy" className="hover:text-[var(--accent-gold)] transition-colors">
                    개인정보처리방침
                  </Link>
                  <Link href="/refund" className="hover:text-[var(--accent-gold)] transition-colors">
                    배송 및 환불정책
                  </Link>
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
