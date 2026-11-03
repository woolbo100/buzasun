'use client'

import React, { useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Reveal from '@/components/Reveal'
import GlobalBackground from '@/components/GlobalBackground'
import Link from 'next/link'
import Image from 'next/image'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { useRouter } from 'next/navigation'
import { addToCart } from '@/hooks/useCart'
import { 
  Check, 
  BookOpen, 
  FileText, 
  Smartphone, 
  AlertCircle,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  AlertTriangle,
  Sparkles,
  Clock,
  CheckCircle2,
  ImageIcon
} from 'lucide-react'
import RecommendedForCards from '@/components/RecommendedForCards'
import { abundanceSecretAssets } from './assets'

// ═══════════════════════════════════════════════════════════════════════════
// 📦 상품 기본 정보 및 결제 연동 설정
// ═══════════════════════════════════════════════════════════════════════════
const productData = {
  productId: 'abundance-secret-guide',
  slug: 'abundance-secret-guide',
  pageSlug: 'abundance-secret',
  title: '풍요비책',
  titleHanja: '豊饒秘策',
  titleEn: 'Abundance Secret',
  type: 'digital_ebook',
  category: 'reports',
  path: '/reports/abundance-secret',
  checkoutUrl: '/checkout?productId=abundance-secret-guide',
  price: 19000,
  regularPrice: 79000,
  discountRate: '76% OFF',

  heroImage: '/image/abundance/a1.webp',
  overviewImage: '/image/abundance/a2.webp',
  recommendedImage: '/image/abundance/a3.webp',
  structureImage: '/image/abundance/a4.webp',
  premiumImage: '/image/abundance/a5.webp',
  ctaImage: '/image/abundance/a6.webp',
}

// 🖼️ 신규 교체형 이미지 슬롯 컴포넌트
// (샴페인 골드 #E6BE8A / #C5A059 테두리와 딥 에메랄드 그린 배경의 고급 플레이스홀더 제공)
function HybridImageSlot({
  assetKey,
  className = '',
  imgClassName = '',
}: {
  assetKey: keyof typeof abundanceSecretAssets
  className?: string
  imgClassName?: string
}) {
  const asset = abundanceSecretAssets[assetKey]
  const [hasError, setHasError] = useState(false)
  const isPlaceholderPath = !asset.src || asset.src.includes('placeholder')

  return (
    <div className={`relative overflow-hidden rounded-2xl md:rounded-3xl border border-[#C5A059]/40 bg-gradient-to-br from-[#0B3B24]/40 via-[#082E1E]/60 to-[#0A0514] shadow-xl flex items-center justify-center ${asset.aspectRatio} ${className}`}>
      {!hasError && !isPlaceholderPath ? (
        <img
          src={asset.src}
          alt={asset.alt}
          onError={() => setHasError(true)}
          style={{ objectFit: asset.objectFit }}
          className={`w-full h-full transition-transform duration-500 hover:scale-[1.02] ${imgClassName}`}
        />
      ) : (
        <div className="flex flex-col items-center justify-center p-6 text-center space-y-3 z-10 w-full h-full bg-[#082E1E]/80 backdrop-blur-sm border border-[#C5A059]/25">
          <div className="w-12 h-12 rounded-full bg-[#114234] border border-[#E6BE8A]/50 flex items-center justify-center text-[#E6BE8A] shadow-[0_0_15px_rgba(230,190,138,0.25)]">
            <ImageIcon className="w-6 h-6 opacity-90" />
          </div>
          <div>
            <span className="inline-block px-3 py-0.5 rounded-full text-[10px] tracking-wider uppercase font-bold text-[#E6BE8A] bg-[#114234]/70 border border-[#E6BE8A]/30 mb-2">
              {asset.placeholderLabel}
            </span>
            <p className="text-sm md:text-base font-elegant font-bold text-[#FAF7F2] break-keep">
              {asset.alt}
            </p>
          </div>
          <span className="text-[11px] text-[#E6BE8A]/80 font-mono bg-black/50 px-3 py-1 rounded border border-[#C5A059]/30">
            {asset.description}
          </span>
        </div>
      )}
    </div>
  )
}

export default function AbundanceSecretPage() {
  useScrollAnimation()
  const router = useRouter()

  // FAQ 아코디언 상태 관리 (첫 번째 질문 기본 오픈)
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  // 실전 체감 사례 슬라이더 인덱스 관리
  const [reviewIndex, setReviewIndex] = useState(0)
  const reviewCards = [
    {
      id: 1,
      badge: "사례 01 · 가격 도약",
      quote: "1회 5만 원도 손 떨며 깎아주던 제가, 50만 원으로 10배 올렸는데도 예약이 넘쳐납니다.",
      tag: "#제값선언문 #가격결계"
    },
    {
      id: 2,
      badge: "사례 02 · 통장 잔고 혁명",
      quote: "월급만 들어오면 카드값으로 사라지던 통장에 여유 자금이 500만 원 이상 고이기 시작했습니다.",
      tag: "#돈맥누수차단 #선천코드락해제"
    },
    {
      id: 3,
      badge: "사례 03 · 자동 자본 순환",
      quote: "스펙 설명 대신 정체성 판매 공식을 적용하자마자 자는 동안 결제 알림이 쏟아졌습니다.",
      tag: "#자본의흑마법 #상징자본"
    }
  ]

  const nextReview = () => {
    setReviewIndex((prev) => (prev + 1) % reviewCards.length)
  }

  const prevReview = () => {
    setReviewIndex((prev) => (prev - 1 + reviewCards.length) % reviewCards.length)
  }

  // 구매 버튼 클릭 핸들러 (기존 풍요비책 결제 흐름 100% 동일 유지)
  const handlePurchase = (e: React.MouseEvent) => {
    e.preventDefault()
    router.push(productData.checkoutUrl)
  }

  // 장바구니 추가 핸들러 (기존 풍요비책 장바구니 연동 동일 유지)
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    addToCart({
      id: productData.productId,
      slug: productData.slug,
      name: productData.title + ' 3종 올인원 세트',
      price: productData.price,
      image: productData.heroImage,
      type: productData.type,
      category: 'SECRET METHOD'
    }, 1)
    alert("장바구니에 담았습니다.")
  }

  // 샴페인 골드 & 전통 금박 구름 장식 구분선
  const EmeraldCloudDivider = () => (
    <div className="flex items-center justify-center my-20 md:my-28 opacity-70">
      <div className="h-[1px] w-16 md:w-32 bg-gradient-to-r from-transparent via-[#E6BE8A]/40 to-[#114234]" />
      <div className="mx-4 flex items-center justify-center">
        {/* 금박 구름 문양 SVG */}
        <svg className="w-6 h-6 text-[#E6BE8A] animate-pulse" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.5 18C3.46 18 1 15.54 1 12.5C1 9.79 2.95 7.54 5.56 7.07C6.73 4.64 9.17 3 12 3C15.42 3 18.3 5.42 18.91 8.68C21.74 9.07 23 11.23 23 13.5C23 15.98 20.98 18 18.5 18H6.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <div className="h-[1px] w-16 md:w-32 bg-gradient-to-l from-transparent via-[#E6BE8A]/40 to-[#114234]" />
    </div>
  )

  // 공통 CTA 버튼 -> 장바구니 / 바로구매 분리 (풍요비책 에메랄드 테마 색상 적용)
  const CTAButton = ({ text }: { text: string }) => (
    <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center my-6 max-w-xl mx-auto w-full">
      <button
        onClick={handleAddToCart}
        className="py-4 px-6 rounded-xl font-elegant font-bold text-base hover:scale-[1.02] active:scale-95 transition-all duration-300 border border-[#E6BE8A]/40 text-[#E6BE8A] hover:bg-[#E6BE8A]/10 bg-transparent shrink-0 whitespace-nowrap w-full sm:w-auto"
      >
        장바구니 담기
      </button>
      <button
        onClick={handlePurchase}
        className="flex-1 py-4 px-6 rounded-xl font-elegant font-bold text-sm md:text-base hover:scale-[1.02] active:scale-95 transition-all duration-500 flex items-center justify-center gap-2 text-[#FAF7F2] w-full shadow-[0_0_35px_rgba(22,78,63,0.35)]"
        style={{
          background: 'linear-gradient(135deg, #114234 0%, #0B2B22 100%)', // 딥 에메랄드 그린
          border: '1px solid rgba(230, 190, 138, 0.55)',
        }}
      >
        <span className="break-keep text-center">{text}</span>
        <ChevronRight className="w-5 h-5 text-[#FAF7F2]" />
      </button>
    </div>
  )

  return (
    <main className="detail-page relative min-h-screen bg-[#0a0514] text-[#EDE6DA] font-sans selection:bg-[#FAF7F2] selection:text-[#0B2B22]">
      {/* 기존 백도화 템플릿의 다크 배경(GlobalBackground) 유지 */}
      <GlobalBackground src="/image/love-code-bg.png" brightCenter={false}>
        <Navigation />

        <div className="relative z-10 pt-44 pb-20">
          <div className="container-premium">
            
            {/* ═══════════════════════════════════════════════════════════════
                1. Hero Section (재회비방과 동일한 구성 순서: 풀 이미지 상단 -> 신규 패키지 카드)
               ═══════════════════════════════════════════════════════════════ */}
            <section className="text-center mb-28">
              <Reveal delayMs={100}>
                {/* [기존 Hero 보존 영역] 상단 라벨 */}
                <div className="mb-8">
                  <span className="inline-block px-5 py-1.5 rounded-full text-[10px] md:text-xs font-bold tracking-[0.25em] text-[#E6BE8A] uppercase"
                    style={{
                      background: 'rgba(22, 78, 63, 0.25)',
                      border: '1px solid rgba(230, 190, 138, 0.3)',
                    }}>
                    PREMIUM ABUNDANCE MINDSET GUIDE
                  </span>
                </div>

                {/* 대제목 */}
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-elegant font-bold mb-10 text-white leading-tight">
                  豊饒秘策 <span className="text-[#E6BE8A]">풍요비책</span>
                </h1>

                {/* 1. 최상단: 가로형 풀 이미지 (기존 a1.webp, 16:9 비율) */}
                <div className="relative w-full max-w-[1280px] mx-auto aspect-video mb-16 rounded-[30px] md:rounded-[40px] overflow-hidden border border-white/10 shadow-2xl group">
                  <Image 
                    src={productData.heroImage} 
                    alt="풍요비책"
                    fill
                    className="object-cover transition-transform duration-[10000ms] group-hover:scale-110"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0514]/60 to-transparent"></div>
                </div>

                {/* 2. 기존 하단 서브카피, 설명 및 구매 버튼 보존 */}
                <div className="max-w-3xl mx-auto space-y-6 mb-20">
                  <p className="text-xl md:text-2xl font-elegant font-semibold text-[#E6BE8A] leading-snug break-keep">
                    숨겨진 황금의 문을 여는 풍요의 비밀서
                  </p>

                  <div className="text-sm md:text-base text-[#EDE6DA]/75 leading-relaxed space-y-3 pt-6 border-t border-white/5 break-keep">
                    <p>
                      풍요비책은 돈을 쫓는 방식이 아니라, 내면의 결핍 코드를 점검하고 풍요를 받아들일 마음그릇을 키우기 위한 프리미엄 풍요의식 자기계발 전자책입니다.
                    </p>
                    <p>
                      부는 바깥에서 억지로 붙잡는 것이 아니라, 내 안의 문을 여는 순간 다른 방식으로 흐르기 시작합니다.
                    </p>
                    <p className="font-semibold text-white">
                      오늘부터 풍요비책과 함께 나의 무의식, 감정, 언어, 소비, 감사의 루틴을 새롭게 정렬해보세요.
                    </p>
                  </div>

                  <div className="pt-4">
                    <CTAButton text="풍요비책 구매하기" />
                  </div>
                </div>

                {/* 3. 그 밑에 새로 추가된 Section 1: Hero Banner 3종 패키지 확장 통합 카드 */}
                <div 
                  className="w-full max-w-[1280px] mx-auto rounded-[32px] md:rounded-[40px] p-6 md:p-12 mb-16 border border-[#C5A059]/40 text-left relative overflow-hidden shadow-2xl mt-12"
                  style={{
                    background: 'radial-gradient(ellipse at 50% 0%, rgba(22, 78, 63, 0.45) 0%, rgba(11, 43, 34, 0.35) 50%, rgba(10, 5, 20, 0.95) 100%)',
                    boxShadow: '0 0 60px rgba(17, 66, 52, 0.3)'
                  }}
                >
                  <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
                    {/* 좌측: 신규 헤드카피, 서브카피, 뱃지, 가격 강조, CTA */}
                    <div className="lg:col-span-7 space-y-6">
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3.5 py-1.5 rounded-full text-[11px] md:text-xs font-bold tracking-wide text-[#E6BE8A] bg-[#114234]/60 border border-[#E6BE8A]/40">
                          [본편+실전워크북+특별외전+금옥만당부 4 in 1]
                        </span>
                        <span className="px-3.5 py-1.5 rounded-full text-[11px] md:text-xs font-bold tracking-wide text-[#E6BE8A] bg-[#114234]/60 border border-[#E6BE8A]/40">
                          [실전 템플릿 4종 수록]
                        </span>
                      </div>

                      <h2 className="text-2xl md:text-3xl lg:text-4xl font-elegant font-bold text-white leading-snug break-keep">
                        &ldquo;부는 쫓아야 할 것이 아니라, 내면에서 &apos;여는&apos; 것이다.&rdquo;
                      </h2>

                      <p className="text-sm md:text-base text-[#EDE6DA]/85 leading-relaxed font-light break-keep">
                        이를 악물고 일해도 통장이 비어 있던 진짜 이유. 무의식의 가난 바이러스를 소각하고 자본의 흑마법을 깨우는 황금의 비밀서(秘密書).
                      </p>

                      {/* 가격 강조 박스 */}
                      <div className="p-5 rounded-2xl bg-[#082E1E]/60 border border-[#C5A059]/30 flex flex-wrap items-center justify-between gap-4">
                        <div className="space-y-1">
                          <span className="text-xs text-[#EDE6DA]/50 block">백도화 풍요비책 3종 올인원 세트</span>
                          <div className="flex items-baseline gap-3">
                            <span className="text-sm md:text-base text-[#EDE6DA]/40 line-through">
                              정가 79,000원
                            </span>
                            <span className="text-2xl md:text-3xl font-elegant font-bold text-[#E6BE8A]">
                              19,000원
                            </span>
                          </div>
                        </div>
                        <span className="px-3 py-1 rounded-full text-xs font-bold text-white bg-[#114234] border border-[#E6BE8A]/50 shadow-[0_0_15px_rgba(230,190,138,0.2)]">
                          76% OFF
                        </span>
                      </div>

                      <div className="pt-2">
                        <CTAButton text="지금 19,000원에 황금의 문 열기" />
                      </div>
                    </div>

                    {/* 우측: 이미지 교체 영역 1 (Hero 목업) */}
                    <div className="lg:col-span-5">
                      <HybridImageSlot 
                        assetKey="hero" 
                        className="w-full aspect-[4/3] md:aspect-square"
                      />
                    </div>
                  </div>
                </div>
              </Reveal>
            </section>

            <EmeraldCloudDivider />

            {/* ═══════════════════════════════════════════════════════════════
                2. Product Overview Section (기존 풍요비책 개요 보존)
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-28">
              <Reveal>
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                  {/* 왼쪽 실제 전자책 목업 */}
                  <div className="relative w-full aspect-square overflow-hidden rounded-[40px] border border-[#E6BE8A]/30 shadow-2xl">
                    <Image 
                      src={productData.overviewImage} 
                      alt="풍요비책 전자책 목업" 
                      fill 
                      className="object-cover" 
                    />
                  </div>

                  {/* 오른쪽 핵심 가치 및 6개 포인트 카드 */}
                  <div className="space-y-6 text-left break-keep">
                    <h2 className="text-2xl md:text-3xl font-elegant font-bold text-white leading-snug">
                      부는 쫓는 것이 아니라,<br/>
                      <span className="text-[#E6BE8A]">여는 것</span>입니다
                    </h2>
                    <p className="text-sm md:text-base text-[#EDE6DA]/75 leading-relaxed font-light">
                      풍요비책은 단순히 더 많이 벌기 위한 방법론을 말하지 않습니다. 이 책은 왜 열심히 살아도 같은 결핍 패턴이 반복되는지, 왜 돈이 들어와도 오래 머물지 않는지, 왜 풍요를 원하면서도 마음 깊은 곳에서는 두려워하는지 내면의 관점에서 바라보도록 돕습니다. 가난의 무의식을 진단하고, 묵은 감정을 정화하고, 풍요의 코드를 새기며, 부를 받아들일 마음그릇을 넓히는 백도화식 마음의 연금술 안내서입니다.
                    </p>

                    {/* 포인트 카드 6개 (glass card 형태) */}
                    <div className="grid grid-cols-2 gap-4 pt-4">
                      {[
                        "결핍 무의식 진단",
                        "감정 정화와 비움의 법칙",
                        "풍요의식 회복",
                        "돈과 에너지의 관계 이해",
                        "마음그릇과 돈그릇 확장",
                        "21일 풍요 루틴 실천"
                      ].map((item, idx) => (
                        <div 
                          key={idx}
                          className="gungjung-glass p-4 border-[#E6BE8A]/20 flex items-center gap-3 hover:border-[#E6BE8A]/50 transition-all"
                          style={{
                            boxShadow: '0 8px 32px rgba(22, 78, 63, 0.05)'
                          }}
                        >
                          <div className="w-6 h-6 rounded-full bg-[#114234]/35 flex items-center justify-center shrink-0 border border-[#E6BE8A]/30">
                            <Check className="w-3.5 h-3.5 text-[#E6BE8A]" />
                          </div>
                          <span className="text-xs md:text-sm text-white/90 font-medium">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            </section>

            <EmeraldCloudDivider />

            {/* ═══════════════════════════════════════════════════════════════
                신규 Section 2. Pain Point — 문제 진단 & 공감
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-28 text-left w-full max-w-[1280px] mx-auto">
              <Reveal>
                <div className="space-y-10">
                  <div className="text-center max-w-3xl mx-auto space-y-4">
                    <span className="text-[#E6BE8A] font-elegant tracking-[0.2em] text-xs uppercase">
                      Problem Diagnosis & Resonance
                    </span>
                    <h2 className="text-2xl md:text-4xl font-elegant font-bold text-white leading-tight break-keep">
                      &ldquo;당신이 밤낮없이 뼈를 갈아 넣어 일해도 돈이 모이지 않던 잔인한 진실&rdquo;
                    </h2>
                  </div>

                  <div className="grid lg:grid-cols-12 gap-10 items-center">
                    {/* 이미지 교체 영역 2 (윈도우 95 에러 및 텅 빈 통장 비주얼) */}
                    <div className="lg:col-span-5">
                      <HybridImageSlot 
                        assetKey="pain" 
                        className="w-full aspect-[4/3] md:aspect-square"
                      />
                    </div>

                    {/* 본문 텍스트 및 5대 저주 체크리스트 */}
                    <div className="lg:col-span-7 space-y-6 break-keep">
                      <p className="text-sm md:text-base text-[#EDE6DA]/85 leading-relaxed font-light p-6 rounded-2xl bg-[#082E1E]/40 border border-[#C5A059]/30">
                        최신형 고사양 게임(부자의 삶)을 돌리고 싶은데, 컴퓨터 본체에는 20년 전 &apos;윈도우 95&apos;가 깔려 있습니다. 무의식이 결핍으로 차 있으면 결국 &apos;블루스크린&apos;이 뜹니다. 돈을 벌고 싶다며 엑셀을 밟으면서, 무의식 바닥에서는 돈을 두려워하며 브레이크를 동시에 밟고 있던 당신의 무의식 운영체제부터 포맷해야 합니다.
                      </p>

                      <div className="space-y-3">
                        <h3 className="text-base md:text-lg font-elegant font-bold text-[#E6BE8A] flex items-center gap-2">
                          <AlertTriangle className="w-5 h-5 text-[#E6BE8A]" />
                          5대 저주 체크리스트
                        </h3>

                        <div className="space-y-2.5">
                          {[
                            "통장에 돈이 조금 모이면 귀신같이 사고나 지출로 빠져나간다 (누수형 저주)",
                            "내 지식과 상품의 가격을 당당히 올리지 못하고 깎아준다 (구걸형 저주)",
                            "계좌에서 돈이 빠져나갈 때 가슴이 조이고 숨이 턱 막힌다 (망령형 저주)",
                            "큰돈이 생기면 왠지 모를 불안감과 죄책감이 든다 (원죄형 저주)",
                            "남이 돈 번 소식을 들으면 속으로는 박탈감이 치민다"
                          ].map((curse, idx) => (
                            <div 
                              key={idx}
                              className="p-4 rounded-xl border border-white/10 bg-white/[0.02] flex items-start gap-3.5 hover:border-[#E6BE8A]/40 transition-colors"
                            >
                              <div className="w-5 h-5 rounded border border-[#E6BE8A]/60 flex items-center justify-center shrink-0 mt-0.5 bg-[#114234]/40">
                                <Check className="w-3.5 h-3.5 text-[#E6BE8A]" />
                              </div>
                              <span className="text-xs md:text-sm text-[#FAF7F2] font-medium leading-snug">
                                {curse}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </section>

            {/* ═══════════════════════════════════════════════════════════════
                신규 추가 1: Before & After 1:1 매칭 비교 (풍요비책 디자인 컨셉 적용)
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-28 w-full max-w-[1280px] mx-auto">
              <Reveal>
                {/* 섹션: Before & After 1:1 매칭 비교 */}
                <div
                  className="gungjung-glass py-12 px-4 md:px-10 rounded-3xl md:rounded-[40px] border border-[#C5A059]/35"
                  style={{
                    background: 'linear-gradient(135deg, rgba(17, 66, 52, 0.3) 0%, rgba(10, 5, 20, 0.92) 100%)',
                    boxShadow: '0 12px 40px rgba(17, 66, 52, 0.2)'
                  }}
                >
                  <div className="max-w-3xl mx-auto px-4 text-center mb-10 space-y-3 break-keep">
                    <span className="text-[#E6BE8A] font-elegant text-xs font-semibold tracking-[0.2em] uppercase block">
                      TRANSFORMATION
                    </span>
                    <h3 className="text-2xl md:text-3xl font-elegant font-bold text-white leading-snug">
                      &ldquo;열심히 사는데 왜 늘 통장은 마를까?<br />
                      <span className="text-[#E6BE8A]">결핍의 무의식을 지우면 돈의 흐름이 반전됩니다.</span>&rdquo;
                    </h3>
                    <p className="text-[#EDE6DA]/75 text-xs md:text-sm font-light leading-relaxed">
                      돈을 쫓으며 아등바등하던 삶에서, 부가 스스로 머무는 풍요의 그릇으로 전환됩니다.
                    </p>
                  </div>

                  <div className="max-w-4xl mx-auto space-y-4 text-left break-keep">
                    {[
                      {
                        beforeTitle: "돈을 쓸 때마다 죄책감과 막연한 불안에 시달린다",
                        beforeSub: "지출할 때 결핍 주파수를 발산해 더 큰 가난을 끌어당김",
                        afterTitle: "풍요 감각(Having)으로 돈의 순환 통로를 연다",
                        afterSub: "돈이 나갈 때도 충만함을 느껴 배 이상의 재정적 기회를 회수합니다."
                      },
                      {
                        beforeTitle: "몸을 갈아 넣어 일해도 수입에 눈에 띄는 한계가 있다",
                        beforeSub: "노동 시간과 소득을 1:1로 맞바꾸는 고갈형 노동자 마인드",
                        afterTitle: "나만의 고유 가치를 자산화·시스템화한다",
                        afterSub: "내가 잠든 시간에도 작동하는 지식/콘텐츠 수익 파이프라인을 구축합니다."
                      },
                      {
                        beforeTitle: "목돈이 생겨도 예상치 못한 일로 신기하게 빠져나간다",
                        beforeSub: "내 무의식의 그릇(머니 콘테이너)이 깨져 있어 생기는 재정 누수",
                        afterTitle: "무의식 속 부의 임계치를 확장해 돈을 가둔다",
                        afterSub: "돈이 새어나가지 않고 내 곁에 묵직하게 머무는 그릇을 완성합니다."
                      },
                      {
                        beforeTitle: "가격표를 볼 때마다 위축되고 싼 것만 찾아 타협한다",
                        beforeSub: "삶의 모든 선택을 결핍과 가격에 종속시키는 악순환",
                        afterTitle: "선택의 품격을 회복하고 부자의 주파수에 접속한다",
                        afterSub: "당당하고 우아한 태도가 더 큰 귀인과 기회를 자연스레 끌어옵니다."
                      }
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="grid grid-cols-1 md:grid-cols-2 gap-3 p-4 rounded-2xl bg-black/45 border border-[#C5A059]/20 hover:border-[#C5A059]/45 transition-colors"
                      >
                        <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#082E1E]/40 border border-[#114234]/60">
                          <span className="text-[#EDE6DA]/70 font-serif font-bold text-[11px] px-2.5 py-1 bg-[#0B2B22] border border-[#C5A059]/20 rounded shrink-0">
                            BEFORE
                          </span>
                          <div>
                            <p className="text-[#EDE6DA]/85 text-sm font-medium leading-snug">{item.beforeTitle}</p>
                            <p className="text-[#EDE6DA]/50 text-xs mt-1 font-light">{item.beforeSub}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#114234]/35 border border-[#E6BE8A]/40 shadow-[0_0_20px_rgba(230,190,138,0.08)]">
                          <span className="text-[#E6BE8A] font-serif font-bold text-[11px] px-2.5 py-1 bg-[#114234] border border-[#E6BE8A]/50 rounded shrink-0">
                            AFTER
                          </span>
                          <div>
                            <p className="text-[#FAF7F2] text-sm font-semibold leading-snug">{item.afterTitle}</p>
                            <p className="text-[#E6BE8A]/90 text-xs mt-1 font-light">{item.afterSub}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </section>

            <EmeraldCloudDivider />

            {/* ═══════════════════════════════════════════════════════════════
                3. Recommended For Section (기존 추천 대상 보존)
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-28">
              <Reveal>
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                  {/* 왼쪽 추천 리스트 */}
                  <div className="space-y-8 text-left break-keep">
                    <h2 className="text-2xl md:text-3xl font-elegant font-bold text-white tracking-wide">
                      이런 분께 <span className="text-[#E6BE8A]">추천합니다</span>
                    </h2>

                    <RecommendedForCards 
                      items={[
                        "열심히 사는데도 같은 돈 패턴이 반복된다고 느끼는 분",
                        "돈을 벌고 싶지만 마음 한쪽에 불안과 두려움이 큰 분",
                        "돈을 쓸 때 죄책감이나 긴장감이 자주 올라오는 분",
                        "나의 결핍의식과 무의식 패턴을 점검하고 싶은 분",
                        "부를 단순한 숫자가 아니라 삶의 에너지로 바라보고 싶은 분",
                        "감사, 순환, 비움의 관점으로 풍요를 다시 정리하고 싶은 분",
                        "자기계발과 마음공부를 통해 돈과의 관계를 바꾸고 싶은 분",
                        "부의 그릇을 키우는 매일의 루틴이 필요한 분"
                      ]} 
                    />
                  </div>

                  {/* 오른쪽 세로 이미지 */}
                  <div className="relative w-full aspect-[3/4] overflow-hidden rounded-[40px] border border-white/10 shadow-2xl">
                    <Image 
                      src={productData.recommendedImage} 
                      alt="풍요를 지닌 성숙한 여성을 상징하는 이미지" 
                      fill 
                      className="object-cover" 
                    />
                  </div>
                </div>
              </Reveal>
            </section>

            <EmeraldCloudDivider />

            {/* ═══════════════════════════════════════════════════════════════
                신규 교체 2: 풍요 솔루션 인과관계 통합 (STEP 1 -> STEP 2)
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-28 text-left w-full max-w-[1280px] mx-auto">
              <Reveal>
                {/* 섹션: 풍요 솔루션 인과관계 통합 */}
                <div className="py-4">
                  <div className="text-center mb-12 space-y-4 break-keep">
                    <span className="text-[#E6BE8A] font-elegant text-xs font-semibold tracking-[0.2em] uppercase block">
                      ABUNDANCE CODE
                    </span>
                    <h2 className="text-2xl md:text-4xl font-elegant font-bold text-white leading-snug">
                      가난을 두려워하는 마음으로는 절대 부자가 될 수 없습니다.<br />
                      <span className="text-[#E6BE8A]">내면의 부의 그릇을 넓히고, 현실의 시스템을 가동합니다.</span>
                    </h2>
                    <p className="text-[#EDE6DA]/75 text-sm md:text-base max-w-2xl mx-auto font-light leading-relaxed">
                      통장의 숫자는 내 무의식 프로그램의 그림자일 뿐입니다.<br />
                      《풍요비책》은 <strong className="text-[#FAF7F2] font-semibold">돈의 무의식 정화(내적 그릇)</strong>를 마친 후, <strong className="text-[#E6BE8A] font-semibold">마르지 않는 부의 파이프라인(외적 자산화)</strong>을 세우도록 설계되었습니다.
                    </p>
                  </div>

                  <div className="space-y-10">
                    {/* STEP 1 */}
                    <div
                      className="gungjung-glass p-6 md:p-10 rounded-3xl border border-[#C5A059]/30 relative overflow-hidden"
                      style={{
                        background: 'linear-gradient(135deg, rgba(11, 43, 34, 0.45) 0%, rgba(10, 5, 20, 0.85) 100%)',
                        boxShadow: '0 8px 32px rgba(22, 78, 63, 0.12)'
                      }}
                    >
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="px-3.5 py-1 rounded-full bg-[#0B2B22] text-[#FAF7F2] font-serif font-bold text-xs tracking-wider border border-[#C5A059]/40">
                          STEP 1
                        </span>
                        <h3 className="text-xl md:text-2xl font-elegant font-bold text-white">
                          결핍 정화 &amp; 부의 그릇 재설계 (내적 정렬)
                        </h3>
                      </div>
                      <p className="text-[#EDE6DA]/75 text-sm mb-8 leading-relaxed font-light break-keep">
                        어린 시절부터 학습된 가난의 죄책감, 결핍 공포, 부자에 대한 무의식적 거부감을 뿌리 뽑습니다. 그릇이 온전해야 어떤 돈이 들어와도 넘치지 않고 담깁니다.
                      </p>

                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {[
                          { code: "01. Scarcity Clearing", title: "결핍 신념 정화", desc: "가난을 부르는 무의식 각인 소멸" },
                          { code: "02. Money Container", title: "머니 컨테이너", desc: "돈이 새지 않는 에너지 그릇 확장" },
                          { code: "03. Guilt-Free Flow", title: "죄책감 제로 지출", desc: "돈을 보낼 때 느끼는 축복과 순환" },
                          { code: "04. Self-Worth", title: "자기 가치 가격화", desc: "헐값 노동 거부와 당당한 단가 책정" },
                          { code: "05. Abundance Aura", title: "풍요의 아우라", desc: "부유한 자들이 알아채는 단정한 기운" },
                          { code: "06. Noble Choice", title: "선택의 품격", desc: "가격이 아닌 가치를 기준으로 결정" }
                        ].map((item, idx) => (
                          <div
                            key={idx}
                            className="p-4 rounded-2xl bg-black/45 border border-[#C5A059]/20 hover:border-[#E6BE8A]/50 transition-all break-keep"
                          >
                            <span className="text-[#E6BE8A] text-xs font-mono font-bold tracking-wider">{item.code}</span>
                            <p className="text-white text-sm md:text-base font-elegant font-bold mt-1.5">{item.title}</p>
                            <p className="text-[#EDE6DA]/60 text-xs mt-1 font-light leading-relaxed">{item.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* 구분선 화살표 */}
                    <div className="flex justify-center -my-4 relative z-10">
                      <div className="w-11 h-11 rounded-full bg-[#114234]/80 border border-[#E6BE8A]/50 flex items-center justify-center text-[#E6BE8A] shadow-[0_0_20px_rgba(230,190,138,0.25)] font-bold">
                        ↓
                      </div>
                    </div>

                    {/* STEP 2 */}
                    <div
                      className="gungjung-glass p-6 md:p-10 rounded-3xl border border-[#C5A059]/45 relative overflow-hidden"
                      style={{
                        background: 'linear-gradient(135deg, rgba(17, 66, 52, 0.35) 0%, rgba(10, 5, 20, 0.9) 100%)',
                        boxShadow: '0 12px 40px rgba(17, 66, 52, 0.22)'
                      }}
                    >
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="px-3.5 py-1 rounded-full bg-[#114234] text-[#E6BE8A] font-serif font-bold text-xs tracking-wider border border-[#E6BE8A]/40">
                          STEP 2
                        </span>
                        <h3 className="text-xl md:text-2xl font-elegant font-bold text-white">
                          현실 부의 창출 공식 (4대 머니 메커니즘)
                        </h3>
                      </div>
                      <p className="text-[#EDE6DA]/75 text-sm mb-8 leading-relaxed font-light break-keep">
                        마인드만으로 통장에 돈이 꽂히지 않습니다. 풍요의 의식을 현실의 화폐로 치환하는 4가지 구체적 지식자산화 전략입니다.
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                          {
                            num: "법칙 01",
                            title: "경험의 디지털 자산화",
                            desc: "사소한 삶의 시행착오와 전문성을 전자책, 디지털 파일, 고단가 리포트로 패키징하는 무자본 상품화 공식."
                          },
                          {
                            num: "법칙 02",
                            title: "24시간 자동 판매 퍼널 구축",
                            desc: "SNS 무료 진단 콘텐츠로 잠재고객을 유입시켜 유료 결제로 물 흐르듯 이어지는 자동화 동선 설계."
                          },
                          {
                            num: "법칙 03",
                            title: "시간-소득 분리 레버리지",
                            desc: "내가 일하는 시간에만 돈이 들어오는 육체노동을 탈피하여, 한 번 만든 상품이 1,000번 팔리는 지능적 수익 구조."
                          },
                          {
                            num: "법칙 04",
                            title: "귀인(貴人) 자석 네트워크",
                            desc: "구차하게 부탁하지 않아도 나보다 뛰어난 사람과 부유한 고객이 먼저 찾아오게 만드는 브랜드 아우라 설계."
                          }
                        ].map((card, idx) => (
                          <div
                            key={idx}
                            className="p-5 rounded-2xl bg-black/45 border border-[#C5A059]/25 hover:border-[#E6BE8A]/60 transition-all group break-keep"
                          >
                            <div className="flex items-center justify-between mb-2">
                              <span className="font-serif text-xs font-bold bg-[#114234] text-[#E6BE8A] px-2.5 py-0.5 rounded border border-[#E6BE8A]/40">
                                {card.num}
                              </span>
                              <Sparkles className="w-4 h-4 text-[#E6BE8A]/50 group-hover:text-[#E6BE8A] transition-colors" />
                            </div>
                            <h4 className="text-white font-elegant font-bold text-base md:text-lg group-hover:text-[#E6BE8A] transition-colors">
                              {card.title}
                            </h4>
                            <p className="text-[#EDE6DA]/75 text-xs md:text-sm mt-2 leading-relaxed font-light">
                              {card.desc}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </section>

            <EmeraldCloudDivider />

            {/* ═══════════════════════════════════════════════════════════════
                신규 Section 4. Product Showcase — 3종 올인원 세트 상세 해부
                (제공된 확장 상세 지침 100% 반영: Book 1, Book 2, Book 3, Bonus)
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-28 text-left w-full max-w-[1280px] mx-auto">
              <Reveal>
                <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
                  <span className="text-[#E6BE8A] font-elegant tracking-[0.2em] text-xs uppercase">
                    3-in-1 All-in-One Package
                  </span>
                  <h2 className="text-2xl md:text-4xl font-elegant font-bold text-white tracking-wide">
                    3종 올인원 세트 상세 해부
                  </h2>
                  <p className="text-sm md:text-base text-[#EDE6DA]/75 leading-relaxed font-light break-keep">
                    본편, 실전 워크북, 특별 외전, 그리고 디지털 부적까지 하나로 통합된 4 in 1 마법서 구성입니다.
                  </p>
                </div>

                <div className="space-y-12">
                  {/* ─────────────────────────────────────────────────────────
                      Book 1: 《풍요비책(豊饒秘策) 완전판》
                     ───────────────────────────────────────────────────────── */}
                  <div className="gungjung-glass p-8 md:p-12 border-[#C5A059]/30 rounded-3xl relative overflow-hidden"
                    style={{
                      background: 'linear-gradient(135deg, rgba(17, 66, 52, 0.3) 0%, rgba(10, 5, 20, 0.85) 100%)',
                      boxShadow: '0 12px 40px rgba(17, 66, 52, 0.2)'
                    }}>
                    <div className="grid lg:grid-cols-12 gap-10 items-start">
                      {/* 표지 슬롯 */}
                      <div className="lg:col-span-4">
                        <HybridImageSlot assetKey="book1" className="w-full aspect-[3/4]" />
                      </div>

                      {/* 상세 설명 */}
                      <div className="lg:col-span-8 space-y-6 break-keep">
                        <div>
                          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold text-[#E6BE8A] bg-[#114234]/70 border border-[#E6BE8A]/30 mb-3">
                            📗 Book 1. [본편]
                          </span>
                          <h3 className="text-2xl md:text-3xl font-elegant font-bold text-white mb-2">
                            《풍요비책(豊饒秘策) 완전판》
                          </h3>
                          <p className="text-sm md:text-base text-[#E6BE8A] font-medium">
                            가난을 황금으로 바꾸는 마음의 연금술 (소장용 비밀 마법서)
                          </p>
                        </div>

                        {/* 핵심 내용 ①~⑤ */}
                        <div className="space-y-4 pt-2">
                          <div className="p-4.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5">
                            <h4 className="text-sm md:text-base font-bold text-white flex items-center gap-2">
                              <span className="text-[#E6BE8A]">①</span> 무의식의 저주와 가난의 3가지 그림자
                            </h4>
                            <p className="text-xs md:text-sm text-[#EDE6DA]/70 font-light pl-6">
                              결핍(Scarcity), 속박(Bondage), 희생자 마인드(Victim) 심판
                            </p>
                          </div>

                          <div className="p-4.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5">
                            <h4 className="text-sm md:text-base font-bold text-white flex items-center gap-2">
                              <span className="text-[#E6BE8A]">②</span> 선천코드 5원소(오행) 재물 락 해제 비기
                            </h4>
                            <p className="text-xs md:text-sm text-[#EDE6DA]/70 font-light pl-6">
                              목·화·토·금·수 기운별 맞춤형 돈그릇 확장법
                            </p>
                          </div>

                          {/* ③ 자본의 흑마법 4대 절대 비기 */}
                          <div className="p-5 rounded-xl bg-[#114234]/25 border border-[#E6BE8A]/30 space-y-3.5">
                            <h4 className="text-sm md:text-base font-bold text-[#FAF7F2] flex items-center gap-2">
                              <span className="text-[#E6BE8A]">③</span> 자본의 흑마법 4대 절대 비기
                            </h4>

                            <div className="grid sm:grid-cols-2 gap-3 pl-2 pt-1">
                              <div className="p-3.5 rounded-lg bg-black/40 border border-[#C5A059]/20 space-y-1">
                                <span className="text-xs font-bold text-[#E6BE8A] block">비기 1. [프레임 지배]</span>
                                <p className="text-xs text-[#EDE6DA]/80 font-light leading-relaxed">
                                  게이트키핑(자격 심사)을 통해 공급자에서 &apos;심판관&apos;으로 지위 역전
                                </p>
                              </div>

                              <div className="p-3.5 rounded-lg bg-black/40 border border-[#C5A059]/20 space-y-1">
                                <span className="text-xs font-bold text-[#E6BE8A] block">비기 2. [신경 연금술]</span>
                                <p className="text-xs text-[#EDE6DA]/80 font-light leading-relaxed">
                                  뇌섬엽 통증을 마비시키고 &apos;미결정 시 겪을 파멸&apos;로 결제를 구원화
                                </p>
                              </div>

                              <div className="p-3.5 rounded-lg bg-black/40 border border-[#C5A059]/20 space-y-1">
                                <span className="text-xs font-bold text-[#E6BE8A] block">비기 3. [상징 자본]</span>
                                <p className="text-xs text-[#EDE6DA]/80 font-light leading-relaxed">
                                  스펙 나열을 파괴하고 에르메스처럼 상위 1% 계급의 인장(Seal) 판매
                                </p>
                              </div>

                              <div className="p-3.5 rounded-lg bg-black/40 border border-[#C5A059]/20 space-y-1">
                                <span className="text-xs font-bold text-[#E6BE8A] block">비기 4. [인간 조종술]</span>
                                <p className="text-xs text-[#EDE6DA]/80 font-light leading-relaxed">
                                  자이가르닉(열린 고리)과 서늘한 침묵으로 상대의 도파민을 감금
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="p-4.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5">
                            <h4 className="text-sm md:text-base font-bold text-white flex items-center gap-2">
                              <span className="text-[#E6BE8A]">④</span> 착한 가격의 저주 파괴
                            </h4>
                            <p className="text-xs md:text-sm text-[#EDE6DA]/70 font-light pl-6">
                              헐값 노동의 죄책감을 깨고 내 몸값과 가치를 10배 올리는 가격 결계 3원칙
                            </p>
                          </div>

                          <div className="p-4.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5">
                            <h4 className="text-sm md:text-base font-bold text-white flex items-center gap-2">
                              <span className="text-[#E6BE8A]">⑤</span> 풍요를 부르는 마음의 법칙 10가지 &amp; 우주 부의 법칙 7가지
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* ─────────────────────────────────────────────────────────
                      Book 2: 《정화와 각성의 서》
                     ───────────────────────────────────────────────────────── */}
                  <div className="gungjung-glass p-8 md:p-12 border-[#C5A059]/30 rounded-3xl relative overflow-hidden"
                    style={{
                      background: 'linear-gradient(135deg, rgba(17, 66, 52, 0.3) 0%, rgba(10, 5, 20, 0.85) 100%)',
                      boxShadow: '0 12px 40px rgba(17, 66, 52, 0.2)'
                    }}>
                    <div className="grid lg:grid-cols-12 gap-10 items-start">
                      {/* 표지 슬롯 */}
                      <div className="lg:col-span-4">
                        <HybridImageSlot assetKey="workbook" className="w-full aspect-[3/4]" />
                      </div>

                      {/* 상세 설명 */}
                      <div className="lg:col-span-8 space-y-6 break-keep">
                        <div>
                          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold text-[#E6BE8A] bg-[#114234]/70 border border-[#E6BE8A]/30 mb-3">
                            📙 Book 2. [실전 워크북]
                          </span>
                          <h3 className="text-2xl md:text-3xl font-elegant font-bold text-white mb-2">
                            《정화와 각성의 서》
                          </h3>
                          <p className="text-sm md:text-base text-[#E6BE8A] font-medium">
                            무의식 정화 실천 워크북 (손으로 직접 쓰는 4~6주 완성 지침서)
                          </p>
                        </div>

                        {/* 핵심 내용 ①~⑦ */}
                        <div className="space-y-4 pt-2">
                          <div className="p-4.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5">
                            <h4 className="text-sm md:text-base font-bold text-white flex items-center gap-2">
                              <span className="text-[#E6BE8A]">①</span> 과거 결핍 코드의 물리적 단절
                            </h4>
                            <p className="text-xs md:text-sm text-[#EDE6DA]/70 font-light pl-6">
                              기억의 도서관 청소, 용서의 편지, 가난 신념 소각식 주문
                            </p>
                          </div>

                          <div className="p-4.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5">
                            <h4 className="text-sm md:text-base font-bold text-white flex items-center gap-2">
                              <span className="text-[#E6BE8A]">②</span> 비움의 법칙
                            </h4>
                            <p className="text-xs md:text-sm text-[#EDE6DA]/70 font-light pl-6">
                              지갑 쓰레기 청소, 낡은 옷 폐기, 명현반응(好轉反應) 극복 절대 주문
                            </p>
                          </div>

                          <div className="p-4.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5">
                            <h4 className="text-sm md:text-base font-bold text-white flex items-center gap-2">
                              <span className="text-[#E6BE8A]">③</span> 나의 풍요 가격 선언문 &amp; 새로운 최상위 정체성 선언서
                            </h4>
                          </div>

                          <div className="p-4.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                            <h4 className="text-sm md:text-base font-bold text-white flex items-center gap-2">
                              <span className="text-[#E6BE8A]">④</span> 돈그릇 수용 한계선 3단계 확장 실습
                            </h4>
                            <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-[#EDE6DA]/85 pl-6">
                              <span className="px-2.5 py-1 rounded bg-[#114234]/50 border border-[#C5A059]/30">무저항 씨앗 금액</span>
                              <span>➔</span>
                              <span className="px-2.5 py-1 rounded bg-[#114234]/50 border border-[#C5A059]/30">저항 돌파</span>
                              <span>➔</span>
                              <span className="px-2.5 py-1 rounded bg-[#114234]/50 border border-[#C5A059]/30">도약 비노동 순환</span>
                            </div>
                          </div>

                          <div className="p-4.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5">
                            <h4 className="text-sm md:text-base font-bold text-white flex items-center gap-2">
                              <span className="text-[#E6BE8A]">⑤</span> 심야의 뇌파 해킹 (5초 루프 각인법)
                            </h4>
                            <p className="text-xs md:text-sm text-[#EDE6DA]/70 font-light pl-6">
                              수면 직전 세타파 상태에서 무의식을 속이는 4K 시각화
                            </p>
                          </div>

                          {/* ⑥ 실전 통제 치트키 템플릿 4종 */}
                          <div className="p-5 rounded-xl bg-[#114234]/25 border border-[#E6BE8A]/30 space-y-3.5">
                            <h4 className="text-sm md:text-base font-bold text-[#FAF7F2] flex items-center gap-2">
                              <span className="text-[#E6BE8A]">⑥</span> 실전 통제 치트키 템플릿 4종
                            </h4>

                            <div className="grid sm:grid-cols-2 gap-3 pl-2 pt-1">
                              <div className="p-3.5 rounded-lg bg-black/40 border border-[#C5A059]/20 space-y-1">
                                <span className="text-xs font-bold text-[#E6BE8A] block">[자격 거절문]</span>
                                <p className="text-xs text-[#EDE6DA]/80 font-light leading-relaxed">
                                  무례한 요구와 선 넘기를 차단하는 자격 거절문
                                </p>
                              </div>

                              <div className="p-3.5 rounded-lg bg-black/40 border border-[#C5A059]/20 space-y-1">
                                <span className="text-xs font-bold text-[#E6BE8A] block">[제값 선언문]</span>
                                <p className="text-xs text-[#EDE6DA]/80 font-light leading-relaxed">
                                  헐값 노동과 가격 후려치기를 박살 내는 제값 선언문
                                </p>
                              </div>

                              <div className="p-3.5 rounded-lg bg-black/40 border border-[#C5A059]/20 space-y-1">
                                <span className="text-xs font-bold text-[#E6BE8A] block">[바운더리 선언문]</span>
                                <p className="text-xs text-[#EDE6DA]/80 font-light leading-relaxed">
                                  에너지 뱀파이어를 쳐내는 바운더리 선언문
                                </p>
                              </div>

                              <div className="p-3.5 rounded-lg bg-black/40 border border-[#C5A059]/20 space-y-1">
                                <span className="text-xs font-bold text-[#E6BE8A] block">[단호한 종결문]</span>
                                <p className="text-xs text-[#EDE6DA]/80 font-light leading-relaxed">
                                  선택과 마감을 내 통제 아래 두는 단호한 종결문
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="p-4.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5">
                            <h4 className="text-sm md:text-base font-bold text-white flex items-center gap-2">
                              <span className="text-[#E6BE8A]">⑦</span> 7일 행동 기록장 &amp; 21일 풍요 뇌 데일리 실천 저널
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* ─────────────────────────────────────────────────────────
                      Book 3: 《풍요의 파동(豊饒의 波動)》
                     ───────────────────────────────────────────────────────── */}
                  <div className="gungjung-glass p-8 md:p-12 border-[#C5A059]/30 rounded-3xl relative overflow-hidden"
                    style={{
                      background: 'linear-gradient(135deg, rgba(17, 66, 52, 0.3) 0%, rgba(10, 5, 20, 0.85) 100%)',
                      boxShadow: '0 12px 40px rgba(17, 66, 52, 0.2)'
                    }}>
                    <div className="grid lg:grid-cols-12 gap-10 items-start">
                      {/* 표지 슬롯 */}
                      <div className="lg:col-span-4">
                        <HybridImageSlot assetKey="wave" className="w-full aspect-[3/4]" />
                      </div>

                      {/* 상세 설명 */}
                      <div className="lg:col-span-8 space-y-6 break-keep">
                        <div>
                          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold text-[#E6BE8A] bg-[#114234]/70 border border-[#E6BE8A]/30 mb-3">
                            📘 Book 3. [특별 외전]
                          </span>
                          <h3 className="text-2xl md:text-3xl font-elegant font-bold text-white mb-2">
                            《풍요의 파동(豊饒의 波動)》
                          </h3>
                          <p className="text-sm md:text-base text-[#E6BE8A] font-medium">
                            기분과 에너지가 운명을 바꾼다 (끌어당김의 본질, 8대 감정 에너지 백과 잠언록)
                          </p>
                        </div>

                        {/* 핵심 내용 ①~⑤ */}
                        <div className="space-y-4 pt-2">
                          <div className="p-4.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5">
                            <h4 className="text-sm md:text-base font-bold text-white flex items-center gap-2">
                              <span className="text-[#E6BE8A]">①</span> 5년간의 실증 보고서
                            </h4>
                            <p className="text-xs md:text-sm text-[#EDE6DA]/70 font-light pl-6">
                              5만 원, 50만 원, 500만 원, 1,000만 원까지 무노동 자본 순환을 일군 &apos;기분의 법칙&apos;
                            </p>
                          </div>

                          <div className="p-4.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5">
                            <h4 className="text-sm md:text-base font-bold text-white flex items-center gap-2">
                              <span className="text-[#E6BE8A]">②</span> 기분과 감정의 재정의
                            </h4>
                            <p className="text-xs md:text-sm text-[#EDE6DA]/70 font-light pl-6">
                              감정은 마음의 독백이 아닌 우주망에 쏘아 올리는 &apos;실시간 영적 실행 코드&apos;
                            </p>
                          </div>

                          <div className="p-4.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5">
                            <h4 className="text-sm md:text-base font-bold text-white flex items-center gap-2">
                              <span className="text-[#E6BE8A]">③</span> 저항의 해체
                            </h4>
                            <p className="text-xs md:text-sm text-[#EDE6DA]/70 font-light pl-6">
                              &apos;간절히 갈망할수록 결핍이 복제되는 역설&apos;을 부수는 무저항의 기술
                            </p>
                          </div>

                          <div className="p-4.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5">
                            <h4 className="text-sm md:text-base font-bold text-white flex items-center gap-2">
                              <span className="text-[#E6BE8A]">④</span> 경쾌함의 권능
                            </h4>
                            <p className="text-xs md:text-sm text-[#EDE6DA]/70 font-light pl-6">
                              가벼운 파동이 무거운 물질 세상을 지배하는 물리 법칙
                            </p>
                          </div>

                          {/* ⑤ [권말 특전] 8대 감정 파동 즉각 전환 비방전 (제공 5종) */}
                          <div className="p-5 rounded-xl bg-[#114234]/25 border border-[#E6BE8A]/30 space-y-3.5">
                            <h4 className="text-sm md:text-base font-bold text-[#FAF7F2] flex items-center gap-2">
                              <span className="text-[#E6BE8A]">⑤</span> [권말 특전] 8대 감정 파동 즉각 전환 비방전
                            </h4>

                            <div className="space-y-2.5 pl-2 pt-1">
                              {[
                                { from: "불안·조급", method: "호흡 '멈춤'을 통한", to: "[평온]" },
                                { from: "결핍·갈망", method: "'이미 주셔서 감사합니다' 완료형 선점을 통한", to: "[충만]" },
                                { from: "질투·시기", method: "타인의 성공을 내 징조로 삼는", to: "[동기화]" },
                                { from: "지출 죄책감", method: "'10배로 귀환하라' 축복을 통한", to: "[순환]" },
                                { from: "무기력·좌절", method: "신체 배터리 충전을 통한", to: "[이완]" }
                              ].map((item, idx) => (
                                <div 
                                  key={idx}
                                  className="p-3 rounded-lg bg-black/40 border border-[#C5A059]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs"
                                >
                                  <span className="font-semibold text-white/90 shrink-0">{item.from}</span>
                                  <span className="text-[#EDE6DA]/60 font-light">{item.method}</span>
                                  <span className="font-bold text-[#E6BE8A] shrink-0">{item.to}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* ─────────────────────────────────────────────────────────
                      Bonus: 《금옥만당부 모바일 월페이퍼》
                     ───────────────────────────────────────────────────────── */}
                  <div className="gungjung-glass p-8 md:p-12 border-[#C5A059]/40 rounded-3xl relative overflow-hidden"
                    style={{
                      background: 'radial-gradient(ellipse at 50% 0%, rgba(22, 78, 63, 0.4) 0%, rgba(10, 5, 20, 0.95) 100%)',
                      boxShadow: '0 12px 40px rgba(17, 66, 52, 0.25)'
                    }}>
                    <div className="grid lg:grid-cols-12 gap-10 items-center">
                      {/* 부적 이미지 슬롯 */}
                      <div className="lg:col-span-4">
                        <HybridImageSlot assetKey="amulet" className="w-full aspect-[3/4]" />
                      </div>

                      {/* 부적 설명 및 패키지 요약 */}
                      <div className="lg:col-span-8 space-y-6 break-keep">
                        <div>
                          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold text-[#E6BE8A] bg-[#114234]/70 border border-[#E6BE8A]/30 mb-3">
                            ⚜️ Special Bonus. [디지털 부적]
                          </span>
                          <h3 className="text-2xl md:text-3xl font-elegant font-bold text-white mb-2">
                            금옥만당부 모바일 월페이퍼
                          </h3>
                          <p className="text-sm md:text-base text-[#EDE6DA]/85 leading-relaxed font-light">
                            결핍을 지우고 부와 풍요를 끌어당기는 스마트폰 배경화면용 시각적 에너지 결계
                          </p>
                        </div>

                        {/* 구성 안내 박스 */}
                        <div className="p-6 rounded-2xl bg-[#082E1E]/70 border border-[#C5A059]/30 space-y-4">
                          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
                            <span className="text-sm font-bold text-white">
                              구성: 본편 + 실전 워크북 + 특별 외전 + 디지털 부적
                            </span>
                            <span className="text-xs px-2.5 py-1 rounded bg-[#114234] text-[#E6BE8A] font-bold border border-[#E6BE8A]/30">
                              4 in 1 구성
                            </span>
                          </div>

                          <div className="flex flex-wrap items-baseline justify-between gap-4">
                            <div className="space-y-1">
                              <span className="text-xs text-[#EDE6DA]/60">정가 79,000원</span>
                              <div className="text-2xl md:text-3xl font-elegant font-bold text-[#E6BE8A]">
                                런칭 특가 19,000원 <span className="text-sm text-white/70 font-sans font-normal">(76% OFF)</span>
                              </div>
                            </div>
                            <span className="text-xs text-[#EDE6DA]/50">
                              * 전자책은 3종이며, 디지털 부적을 포함한 4 in 1 구성입니다.
                            </span>
                          </div>

                          <div className="pt-2">
                            <CTAButton text="풍요비책 3종 세트 구매하기" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </section>

            {/* ═══════════════════════════════════════════════════════════════
                신규 추가 3: 풍요비책 FAQ ("3종 올인원 세트 상세 해부" 바로 아래)
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-28 text-left max-w-4xl mx-auto">
              <Reveal>
                {/* 섹션: 풍요비책 FAQ */}
                <div className="py-4">
                  <div className="text-center space-y-3 mb-14">
                    <span className="text-[#E6BE8A] font-elegant tracking-[0.2em] text-xs uppercase font-bold block">
                      FAQ
                    </span>
                    <h2 className="text-2xl md:text-4xl font-elegant font-bold text-white tracking-wide">
                      풍요비책 자주 묻는 질문
                    </h2>
                    <p className="text-[#EDE6DA]/75 text-xs md:text-sm font-light leading-relaxed break-keep">
                      풍요의 문턱을 넘어서기 전 확인해야 할 필수 질문입니다.
                    </p>
                  </div>

                  <div className="space-y-4 break-keep">
                    {[
                      {
                        q: "단순한 ‘끌어당김의 법칙’이나 뜬구름 잡는 명상 이야기인가요?",
                        a: (
                          <>
                            전혀 아닙니다. 무의식의 결핍을 지우는 마인드셋은 출발점일 뿐입니다. 《풍요비책》은 <strong className="text-[#E6BE8A] font-semibold">나의 지식과 경험을 어떻게 디지털 상품으로 바꾸고, 24시간 판매 동선을 짜는지</strong>에 대한 실전 비즈니스 매뉴얼을 함께 제공합니다.
                          </>
                        )
                      },
                      {
                        q: "특별한 전문성이나 자본금이 전혀 없는 평범한 사람도 가능한가요?",
                        a: (
                          <>
                            자본금 0원으로 시작하는 1인 지식창업 모델을 다룹니다. 남들은 대단하게 생각하지 않는 나의 작은 극복 경험, 취미, 관심사를 <strong className="text-[#E6BE8A] font-semibold">가치 있는 지식재산(IP)으로 전환하는 구체적 프레임워크</strong>를 알려드립니다.
                          </>
                        )
                      },
                      {
                        q: "책을 읽고 나면 당장 무엇부터 실행해야 할지 막막하지 않을까요?",
                        a: (
                          <>
                            함께 제공되는 <strong className="text-[#E6BE8A] font-semibold">《풍요 실천 워크북》과 《자산화 템플릿》</strong>을 통해 오늘부터 버려야 할 소비 습관과 상품 기획 아이디어를 빈칸 채우기 방식으로 완성할 수 있도록 돕습니다.
                          </>
                        )
                      },
                      {
                        q: "결제 후 어떻게 제공받나요?",
                        a: (
                          <>
                            결제 즉시 평생 소장 가능한 <strong className="text-[#E6BE8A] font-semibold">PDF 전자책 세트와 고해상도 풍요만개부 디지털 파일</strong>이 발급됩니다. 스마트폰이나 태블릿으로 시간과 장소에 구애받지 않고 학습하실 수 있습니다.
                          </>
                        )
                      }
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="gungjung-glass p-6 rounded-2xl border border-[#C5A059]/30 hover:border-[#E6BE8A]/60 transition-all"
                        style={{
                          background: 'linear-gradient(135deg, rgba(17, 66, 52, 0.25) 0%, rgba(10, 5, 20, 0.85) 100%)'
                        }}
                      >
                        <h4 className="text-white font-elegant font-semibold text-base md:text-lg flex items-start gap-2.5">
                          <span className="text-[#E6BE8A] font-serif font-bold shrink-0">Q.</span>
                          <span>{item.q}</span>
                        </h4>
                        <p className="text-[#EDE6DA]/80 text-xs md:text-sm mt-3 pl-6 leading-relaxed font-light border-t border-white/5 pt-3">
                          {item.a}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </section>

            <EmeraldCloudDivider />

            {/* ═══════════════════════════════════════════════════════════════
                5. Premium Content Section (기존 프리미엄 가이드북 안내 보존)
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-28">
              <Reveal>
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                  {/* 왼쪽 이미지 */}
                  <div className="relative w-full aspect-[4/5] overflow-hidden rounded-[40px] border border-white/10 shadow-2xl">
                    <Image 
                      src={productData.premiumImage} 
                      alt="프리미엄 풍요비책 이미지" 
                      fill 
                      className="object-cover" 
                    />
                  </div>

                  {/* 오른쪽 특징 리스트 */}
                  <div className="space-y-6 text-left break-keep">
                    <div>
                      <span className="text-[#E6BE8A] font-elegant tracking-[0.2em] text-xs uppercase">Premium Guidebook</span>
                      <h2 className="text-2xl md:text-3xl font-elegant font-bold text-white mt-1 leading-snug">
                        백도화가 전하는<br/>
                        <span className="text-[#E6BE8A]">마음의 연금술 비급서</span>
                      </h2>
                    </div>
                    
                    <p className="text-sm md:text-base text-[#EDE6DA]/75 leading-relaxed font-light">
                      풍요비책은 단순한 재테크서도, 막연한 끌어당김 문구 모음집도 아닙니다. 이 책이 말하는 핵심은 돈을 더 간절히 쫓는 방법이 아니라, 내 안의 결핍 신호를 알아차리고 풍요가 머물 수 있는 마음의 공간을 만드는 법입니다. 진단, 정화, 비움, 감사, 순환, 언어, 호흡, 시각화, 그리고 21일 루틴을 망라한 백도화식 프리미엄 풍요의식 구조서입니다.
                    </p>

                    {/* 강점 6가지 리스트 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                      {[
                        "디지털 파일 형태의 프리미엄 전자책",
                        "풍요의식과 무의식 패턴의 통합 분석",
                        "마음공부와 풍요 가치의 연결 설계",
                        "백도화 브랜드 톤의 기품 있는 문체",
                        "돈과 나의 관계를 성찰하는 질문 구성",
                        "21일 풍요 루틴 실천 가이드 포함"
                      ].map((item, idx) => (
                        <div 
                          key={idx} 
                          className="flex items-center gap-3 p-3 bg-[#FAF7F2] rounded-xl border border-[#E6BE8A]/25 hover:border-[#114234]/40 transition-colors"
                        >
                          <Check className="w-4 h-4 text-[#114234] shrink-0" />
                          <span className="text-xs md:text-sm text-[#3D3530] font-semibold">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4">
                      <CTAButton text="풍요비책 즉시 다운로드" />
                    </div>
                  </div>
                </div>
              </Reveal>
            </section>

            <EmeraldCloudDivider />

            {/* ═══════════════════════════════════════════════════════════════
                6. Book Contents Section (기존 목차 영역 보존)
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-28">
              <Reveal>
                <div className="gungjung-glass p-8 md:p-12 border-[#E6BE8A]/20 bg-gradient-to-br from-white/[0.02] to-transparent text-left w-full max-w-[1280px] mx-auto break-keep">
                  <div className="text-center md:text-left mb-10">
                    <span className="text-[#E6BE8A] font-elegant tracking-[0.2em] text-xs uppercase">Table of Contents</span>
                    <h2 className="text-2xl md:text-3xl font-elegant font-bold mt-1 text-white border-l-4 border-[#E6BE8A] pl-6">
                      풍요비책 구성
                    </h2>
                    <p className="text-xs md:text-sm text-[#EDE6DA]/50 mt-3 font-light leading-relaxed pl-6">
                      풍요비책은 진단, 정화, 원리, 심화 법칙, 실전 루틴으로 이어지는 체계적인 구조를 통해 가난의 무의식을 점검하고, 감정을 치유하여, 삶에 풍요를 온전히 안착시키는 실전 지침을 다룹니다.
                    </p>
                  </div>
                  
                  {/* 목차 리스트 */}
                  <div className="grid md:grid-cols-2 gap-6 text-sm md:text-base leading-relaxed text-[#EDE6DA]/85">
                    {[
                      {
                        title: "프롤로그",
                        desc: "숨겨진 황금의 문을 열며"
                      },
                      {
                        title: "제1부 봉인 해제: 진단편",
                        desc: "가난의 무의식을 발견하고 진단하는 단계"
                      },
                      {
                        title: "제2부 정화의 연금술: 치유편",
                        desc: "과거에 얽매인 묵은 감정과 돈의 상처 정화"
                      },
                      {
                        title: "제3부 풍요의 코드: 원리편",
                        desc: "부의 본질을 이해하고 풍요의식을 새기는 단계"
                      },
                      {
                        title: "제4부 부의 법칙 7가지: 심화편",
                        desc: "돈을 당기며 순환시키는 7가지 우아한 황금률"
                      },
                      {
                        title: "제5부 창조의 주문: 실전편",
                        desc: "호흡, 시각화, 풍요 언어를 활용한 실천"
                      },
                      {
                        title: "특별 부록. 마음그릇 · 돈그릇",
                        desc: "풍요를 안정적으로 담아내는 용량 키우기"
                      },
                      {
                        title: "실전 챌린지. 21일 풍요 뇌 만들기",
                        desc: "무의식 속에 부의 감각을 각인하는 21일 챌린지"
                      },
                      {
                        title: "에필로그",
                        desc: "부가 오기 전의 징조"
                      }
                    ].map((item, idx) => (
                      <div 
                        key={idx} 
                        className="flex gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-colors"
                      >
                        <div className="w-12 h-12 rounded-lg bg-[#114234]/15 border border-[#E6BE8A]/20 flex items-center justify-center shrink-0 text-xs font-bold font-serif text-[#E6BE8A]">
                          {idx === 0 ? "Prologue" : idx === 8 ? "Epilogue" : idx === 6 ? "Appendix" : idx === 7 ? "Challenge" : `제${idx}부`}
                        </div>
                        <div className="space-y-1">
                          <h3 className="font-semibold text-white text-sm md:text-base">{item.title}</h3>
                          <p className="text-xs md:text-sm text-[#EDE6DA]/60 font-light leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </section>

            <EmeraldCloudDivider />

            {/* ═══════════════════════════════════════════════════════════════
                신규 Section 5. Social Proof — 실전 체감 사례 (슬라이더)
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-28 text-left w-full max-w-[1280px] mx-auto">
              <Reveal>
                <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
                  <span className="text-[#E6BE8A] font-elegant tracking-[0.2em] text-xs uppercase">
                    Real Life Transformations
                  </span>
                  <h2 className="text-2xl md:text-4xl font-elegant font-bold text-white tracking-wide">
                    실전 체감 사례
                  </h2>
                  <p className="text-sm md:text-base text-[#EDE6DA]/75 leading-relaxed font-light break-keep">
                    풍요비책을 실천한 분들의 실제 삶에 일어난 감정과 통장의 구체적인 변화입니다.
                  </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-10 items-center">
                  {/* 좌측: 리뷰 목업 이미지 슬롯 */}
                  <div className="lg:col-span-5">
                    <HybridImageSlot 
                      assetKey="proof" 
                      className="w-full aspect-[4/3] md:aspect-square"
                    />
                  </div>

                  {/* 우측: 후기 슬라이더 */}
                  <div className="lg:col-span-7 space-y-6">
                    <div 
                      className="gungjung-glass p-8 md:p-10 border-[#C5A059]/30 rounded-3xl relative overflow-hidden min-h-[220px] flex flex-col justify-between"
                      style={{
                        background: 'linear-gradient(135deg, rgba(17, 66, 52, 0.25) 0%, rgba(10, 5, 20, 0.9) 100%)',
                        boxShadow: '0 8px 32px rgba(22, 78, 63, 0.15)'
                      }}
                    >
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="px-3 py-1 rounded-full text-xs font-bold text-[#E6BE8A] bg-[#114234]/70 border border-[#E6BE8A]/30">
                            {reviewCards[reviewIndex].badge}
                          </span>
                          <span className="text-xs text-[#E6BE8A]/60 font-mono">
                            {reviewCards[reviewIndex].tag}
                          </span>
                        </div>
                        <p className="text-lg md:text-xl font-elegant font-semibold text-white leading-relaxed break-keep">
                          &ldquo;{reviewCards[reviewIndex].quote}&rdquo;
                        </p>
                      </div>

                      {/* 하단 컨트롤러 */}
                      <div className="flex items-center justify-between pt-6 border-t border-white/5 mt-4">
                        <div className="flex items-center gap-2">
                          {reviewCards.map((_, idx) => (
                            <button
                              key={idx}
                              onClick={() => setReviewIndex(idx)}
                              className={`h-2 rounded-full transition-all ${
                                reviewIndex === idx ? 'w-6 bg-[#E6BE8A]' : 'w-2 bg-white/20'
                              }`}
                              aria-label={`리뷰 ${idx + 1} 보기`}
                            />
                          ))}
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={prevReview}
                            className="p-2.5 rounded-full border border-white/10 hover:border-[#E6BE8A]/50 bg-white/[0.02] hover:bg-white/[0.05] text-[#EDE6DA] transition-all"
                            aria-label="이전 후기"
                          >
                            <ChevronLeft className="w-4 h-4" />
                          </button>
                          <button
                            onClick={nextReview}
                            className="p-2.5 rounded-full border border-white/10 hover:border-[#E6BE8A]/50 bg-white/[0.02] hover:bg-white/[0.05] text-[#EDE6DA] transition-all"
                            aria-label="다음 후기"
                          >
                            <ChevronRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </section>

            <EmeraldCloudDivider />

            {/* ═══════════════════════════════════════════════════════════════
                신규 Section 6. Comparison Table — 가치 비교표
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-28 text-left w-full max-w-[1280px] mx-auto">
              <Reveal>
                <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
                  <span className="text-[#E6BE8A] font-elegant tracking-[0.2em] text-xs uppercase">
                    Value Comparison
                  </span>
                  <h2 className="text-2xl md:text-4xl font-elegant font-bold text-white tracking-wide">
                    가치 비교표
                  </h2>
                  <p className="text-sm md:text-base text-[#EDE6DA]/75 leading-relaxed font-light break-keep">
                    일반 재테크 강의나 뜬구름 잡는 확언과는 완전히 다른 차원의 실전 연금술입니다.
                  </p>
                </div>

                {/* 반응형 비교표 컨테이너 */}
                <div className="overflow-x-auto rounded-3xl border border-[#C5A059]/40 shadow-2xl bg-[#082E1E]/30 backdrop-blur-sm">
                  <table className="w-full text-left border-collapse min-w-[640px]">
                    <thead>
                      <tr className="border-b border-[#C5A059]/30 bg-black/40">
                        <th className="py-5 px-6 text-sm font-bold text-[#EDE6DA]/60 w-1/4">구분</th>
                        <th className="py-5 px-6 text-sm font-bold text-[#EDE6DA]/60 w-1/4">일반 재테크 강의</th>
                        <th className="py-5 px-6 text-sm font-bold text-[#EDE6DA]/60 w-1/4">뜬구름 잡는 끌어당김</th>
                        <th className="py-5 px-6 text-base font-bold text-[#E6BE8A] bg-[#114234]/40 border-l border-r border-[#C5A059]/40 w-1/4">
                          백도화 풍요비책 3종 세트
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 text-xs md:text-sm">
                      {/* 행 1: 비용 */}
                      <tr className="hover:bg-white/[0.01] transition-colors">
                        <td className="py-5 px-6 font-bold text-white">비용</td>
                        <td className="py-5 px-6 text-[#EDE6DA]/70">수십~수백만 원</td>
                        <td className="py-5 px-6 text-[#EDE6DA]/70">1~2만 원</td>
                        <td className="py-5 px-6 font-bold text-[#FAF7F2] bg-[#114234]/30 border-l border-r border-[#C5A059]/40">
                          <span className="text-[#E6BE8A] text-base">단 19,000원</span> (영구 소장)
                        </td>
                      </tr>

                      {/* 행 2: 내용 */}
                      <tr className="hover:bg-white/[0.01] transition-colors">
                        <td className="py-5 px-6 font-bold text-white">내용</td>
                        <td className="py-5 px-6 text-[#EDE6DA]/70">노동 중심 테크닉</td>
                        <td className="py-5 px-6 text-[#EDE6DA]/70">뜬구름 잡는 위로</td>
                        <td className="py-5 px-6 font-bold text-[#FAF7F2] bg-[#114234]/30 border-l border-r border-[#C5A059]/40">
                          뇌신경 재배선 + 자본의 흑마법
                        </td>
                      </tr>

                      {/* 행 3: 도구 */}
                      <tr className="hover:bg-white/[0.01] transition-colors">
                        <td className="py-5 px-6 font-bold text-white">도구</td>
                        <td className="py-5 px-6 text-[#EDE6DA]/70">없음</td>
                        <td className="py-5 px-6 text-[#EDE6DA]/70">확언 몇 줄</td>
                        <td className="py-5 px-6 font-bold text-[#FAF7F2] bg-[#114234]/30 border-l border-r border-[#C5A059]/40">
                          선천코드 진단 + 템플릿 4종 + 21일 저널
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Reveal>
            </section>

            <EmeraldCloudDivider />

            {/* ═══════════════════════════════════════════════════════════════
                신규 Section 7. FAQ — 자주 묻는 질문
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-28 text-left max-w-4xl mx-auto">
              <Reveal>
                <div className="text-center space-y-4 mb-14">
                  <span className="text-[#E6BE8A] font-elegant tracking-[0.2em] text-xs uppercase">
                    Frequently Asked Questions
                  </span>
                  <h2 className="text-2xl md:text-4xl font-elegant font-bold text-white tracking-wide">
                    자주 묻는 질문
                  </h2>
                  <p className="text-sm md:text-base text-[#EDE6DA]/75 leading-relaxed font-light break-keep">
                    구매 전 궁금해하시는 핵심 질문을 모았습니다.
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      q: "1. 시크릿과의 차이점",
                      questionTitle: "시크릿이나 기존 끌어당김 서적과 무엇이 다른가요?",
                      a: "뜬구름 잡는 막연한 긍정 확언이 아닙니다. 풍요비책은 뇌신경망 재배선과 결핍의 무의식 코드를 직접 소각하고, 자본의 흑마법과 선천코드 오행 분석을 결합하여 실질적인 부의 통로를 여는 현실적이고 구체적인 심리·에너지 연금술 지침서입니다."
                    },
                    {
                      q: "2. 직장인/주부 적용 여부",
                      questionTitle: "직장인이나 주부도 적용할 수 있나요?",
                      a: "네, 당연히 가능합니다. 사업가뿐만 아니라 직장인, 주부, 프리랜서 등 돈을 벌고 소비하는 모든 사람이 겪는 5대 저주(누수, 죄책감, 구걸 등)를 치유하고, 21일 데일리 실천 저널과 4대 실전 템플릿을 통해 일상 속에서 즉시 부의 주파수를 동기화할 수 있습니다."
                    },
                    {
                      q: "3. 선천코드 난이도",
                      questionTitle: "선천코드 분석의 난이도는 어떤가요?",
                      a: "사주나 명리학에 대한 전문 지식이 전혀 없어도 누구나 자신의 타고난 오행(목·화·토·금·수) 기운과 돈맥 누수 지점을 쉽게 파악하고 돈그릇을 확장할 수 있도록 친절하고 직관적인 가이드로 구성되어 있습니다."
                    },
                    {
                      q: "4. 다운로드 방식",
                      questionTitle: "구매 후 다운로드는 어떻게 진행되나요?",
                      a: "본 상품은 실물 배송이 없는 디지털 전자책(PDF) 및 모바일 월페이퍼 패키지입니다. 결제 완료 즉시 마이페이지 또는 등록된 이메일 안내를 통해 언제 어디서나 기기 제한 없이 영구 소장하여 즉시 열람 및 다운로드하실 수 있습니다."
                    }
                  ].map((faq, idx) => {
                    const isOpen = openFaq === idx
                    return (
                      <div 
                        key={idx}
                        className="gungjung-glass rounded-2xl border border-[#C5A059]/20 overflow-hidden transition-all duration-300"
                        style={{
                          background: isOpen ? 'rgba(17, 66, 52, 0.25)' : 'rgba(255, 255, 255, 0.01)'
                        }}
                      >
                        <button
                          onClick={() => toggleFaq(idx)}
                          aria-expanded={isOpen}
                          className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 text-white hover:text-[#E6BE8A] transition-colors"
                        >
                          <div className="space-y-1">
                            <span className="text-xs font-bold text-[#E6BE8A] block">{faq.q}</span>
                            <span className="text-base md:text-lg font-elegant font-semibold">{faq.questionTitle}</span>
                          </div>
                          <ChevronDown 
                            className={`w-5 h-5 text-[#E6BE8A] shrink-0 transition-transform duration-300 ${
                              isOpen ? 'rotate-180' : ''
                            }`} 
                          />
                        </button>

                        {isOpen && (
                          <div className="px-6 pb-6 pt-2 text-xs md:text-sm text-[#EDE6DA]/80 leading-relaxed font-light border-t border-white/5 break-keep">
                            {faq.a}
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </Reveal>
            </section>

            <EmeraldCloudDivider />

            {/* ═══════════════════════════════════════════════════════════════
                7. Digital Product Notice Section (기존 구매 전 안내 보존)
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-28 w-full max-w-[1280px] mx-auto">
              <Reveal>
                <div className="gungjung-glass p-8 md:p-12 border-white/5 text-left w-full max-w-[1280px] mx-auto break-keep">
                  <h2 className="text-2xl font-elegant font-bold mb-10 text-white border-l-4 border-[#E6BE8A] pl-6">
                    구매 전 안내
                  </h2>
                  <ul className="space-y-4 text-xs md:text-sm text-[#EDE6DA]/60 font-light">
                    {[
                      "본 상품은 실물 배송이 없는 디지털 전자책(PDF 파일) 상품입니다.",
                      "결제 완료 후 안내된 방식(마이페이지 또는 등록된 이메일)에 따라 즉시 다운로드해 확인하실 수 있습니다.",
                      "디지털 콘텐츠의 특성상 파일이 다운로드되거나 메일로 발송된 이후에는 단순 변심에 의한 환불이 제한될 수 있습니다.",
                      "개인의 상황, 경제적 환경, 실천 강도에 따라 배움의 깊이와 체감되는 결과는 다를 수 있습니다.",
                      "본 콘텐츠는 풍요의식 형성과 자기이해를 돕기 위한 자기계발 콘텐츠이며, 전문적인 금융·투자·법률·세무 자문을 대체하지 않습니다.",
                      "특정 금액의 수익 성과나 투자 성공, 강제적인 경제적 이득을 무조건 보장하지 않습니다.",
                      "자세한 취소/환불 기준은 하단의 이용약관 및 환불정책을 참고해 주시기 바랍니다."
                    ].map((text, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#E6BE8A] shrink-0"></span>
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </section>

            {/* ═══════════════════════════════════════════════════════════════
                기존 최종 CTA 보존 (가로형 와이드 16:9 대형 배너, 1440px)
               ═══════════════════════════════════════════════════════════════ */}
            <section className="relative aspect-[16/9] md:aspect-video overflow-hidden rounded-[40px] mb-20 group border border-[#C5A059]/40 shadow-2xl w-full max-w-[1280px] mx-auto">
              {/* a6.webp 배경 */}
              <div className="absolute inset-0 z-0">
                <Image 
                  src={productData.ctaImage} 
                  alt="풍요비책 마지막 안내 배경" 
                  fill 
                  className="object-cover transition-transform duration-[10000ms] group-hover:scale-110" 
                />
                {/* 텍스트 가독성을 위한 딥그린 반투명 오버레이 필터 */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0514] via-[#0B2B22]/75 to-black/80 mix-blend-multiply" />
                <div className="absolute inset-0 bg-[#0a0514]/30" />
              </div>

              {/* 중앙 정보 및 CTA 버튼 */}
              <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 md:px-10 text-center max-w-5xl mx-auto space-y-6 md:space-y-8 break-keep">
                <Reveal>
                  <h2 className="text-2xl md:text-4xl font-elegant font-bold text-white leading-tight">
                    내 안의 황금 문을 여는 시간
                  </h2>
                  <p className="text-sm md:text-base text-[#EDE6DA]/85 leading-relaxed font-light max-w-xl mx-auto">
                    풍요는 더 많이 쫓는 사람에게만 오는 것이 아니라, 받아들일 준비가 된 마음에 오래 머무릅니다.<br/>
                    결핍을 반복하던 무의식에서 벗어나 나의 감정, 언어, 소비, 감사, 실천 루틴을 새롭게 정렬해 보세요.
                  </p>
                  
                  <div className="pt-4">
                    <CTAButton text="풍요비책 구매하기" />
                  </div>
                </Reveal>
              </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════
                신규 교체/추가 4: 최종 결제 마감 CTA 및 손실 회피 섹션 (풍요비책 하단 디자인 유지)
               ═══════════════════════════════════════════════════════════════ */}
            <section className="relative overflow-hidden rounded-3xl md:rounded-[40px] mb-20 p-8 md:p-16 border-2 border-[#C5A059] shadow-[0_0_50px_rgba(22,78,63,0.6)] text-center max-w-5xl mx-auto">
              {/* 딥 에메랄드 풀 컬러 배경 */}
              <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#114234] via-[#0B2B22] to-[#051712]" />
              
              {/* 이미지 교체 영역 8 (황금의 문 오브제 배경 슬롯) */}
              <div className="absolute inset-0 z-0 opacity-25 mix-blend-overlay">
                <HybridImageSlot 
                  assetKey="finalCta" 
                  className="w-full h-full rounded-none border-none"
                  imgClassName="object-cover"
                />
              </div>

              <div className="relative z-10 max-w-3xl mx-auto space-y-8 break-keep">
                <Reveal>
                  {/* 손실 회피(소실점) 카피 */}
                  <div className="mb-8 space-y-4">
                    <span className="inline-block text-[#E6BE8A] text-xs font-elegant font-bold tracking-[0.25em] uppercase bg-[#114234]/90 border border-[#E6BE8A]/40 px-4 py-1.5 rounded-full shadow-md">
                      THE ABUNDANCE SHIFT
                    </span>
                    <h2 className="text-2xl md:text-4xl font-elegant font-bold text-white leading-snug">
                      내일도 가격표 앞에서 망설이며<br />
                      <span className="text-[#E6BE8A]">통장의 결핍</span>에 갇혀 계시겠습니까?
                    </h2>
                    <p className="text-[#EDE6DA]/85 text-sm md:text-base font-light leading-relaxed">
                      생각을 바꾸지 않으면 10년 후에도 똑같이 시간에 쫓기며 돈을 걱정합니다.<br />
                      돈을 쫓아가는 삶을 멈추고, 돈이 나를 찾아오게 만드십시오.<br />
                      <strong className="text-[#FAF7F2] font-semibold">단 19,000원으로 평생을 관통하는 부의 회로를 소장하십시오.</strong>
                    </p>
                  </div>

                  {/* 패키지 가격 카드 (기존 풍요비책 하단 다크 글래스 박스 규격) */}
                  <div className="p-6 md:p-10 rounded-2xl bg-black/60 border border-[#C5A059]/40 shadow-2xl relative backdrop-blur-sm">
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#114234] text-[#E6BE8A] border border-[#E6BE8A]/50 text-xs font-elegant font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow-[0_0_15px_rgba(230,190,138,0.25)] whitespace-nowrap">
                      런칭 기념 76% 한정 특가
                    </div>

                    <h3 className="text-lg md:text-xl font-elegant font-bold text-white mt-2">
                      백도화 풍요비책 4 in 1 올인원 패키지
                    </h3>
                    <p className="text-xs md:text-sm text-[#EDE6DA]/60 mt-1 font-light">
                      완전판 바이블 + 자산화 시크릿북 + 실전 풍요 워크북 + 풍요만개부 디지털 부적
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-3 my-6">
                      <span className="text-[#EDE6DA]/40 line-through text-base md:text-lg font-mono">
                        정가 79,000원
                      </span>
                      <span className="text-3xl md:text-4xl font-elegant font-bold text-[#E6BE8A]">
                        19,000원
                      </span>
                      <span className="text-xs font-bold text-white bg-[#114234] border border-[#E6BE8A]/50 px-2.5 py-1 rounded-full font-mono">
                        76% OFF
                      </span>
                    </div>

                    {/* 구매 버튼 (기존 풍요비책 딥 에메랄드 & 샴페인 골드 테두리 스타일) */}
                    <button
                      onClick={handlePurchase}
                      className="w-full py-4 md:py-5 px-6 rounded-xl font-elegant font-bold text-base md:text-xl text-[#FAF7F2] shadow-[0_0_40px_rgba(230,190,138,0.3)] hover:shadow-[0_0_60px_rgba(230,190,138,0.5)] transition-all duration-300 hover:scale-[1.02] active:scale-95 inline-flex items-center justify-center gap-2 cursor-pointer"
                      style={{
                        background: 'linear-gradient(135deg, #114234 0%, #0B2B22 100%)',
                        border: '2px solid #C5A059'
                      }}
                    >
                      <Sparkles className="w-5 h-5 text-[#E6BE8A] shrink-0" />
                      <span>마르지 않는 풍요의 그릇 완성하기</span>
                      <ChevronRight className="w-5 h-5 text-[#E6BE8A] shrink-0" />
                    </button>

                    <p className="text-[#EDE6DA]/50 text-xs mt-4 font-light">
                      * 결제 즉시 PDF 다운로드 가능 / 디지털 콘텐츠 특성상 열람 후 환불 불가
                    </p>
                  </div>
                </Reveal>
              </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════
                Policy Links (기존 정책 링크 보존)
               ═══════════════════════════════════════════════════════════════ */}
            <section className="pb-10 text-center">
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
