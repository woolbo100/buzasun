'use client'

import React, { useState, useEffect } from 'react'
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
  ImageIcon,
  Eye,
  ZoomIn,
  X
} from 'lucide-react'
import RecommendedForCards from '@/components/RecommendedForCards'
import MobileStickyBuyBar from '@/components/MobileStickyBuyBar'
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

  topBannerImage: '/image/abundance-secret/korean-hanbok-abundance.webp',
  heroImage: '/image/abundance-secret/korean-hanbok-abundance.webp',
  overviewImage: '/image/abundance-secret/golden-abundance.webp',
  recommendedImage: '/image/abundance/a3.webp',
  structureImage: '/image/abundance-secret/abundance-transformation.webp',
  premiumImage: '/image/abundance/a5.webp',
  ctaImage: '/image/abundance/a6.webp',
}

// 🖼️ 신규 교체형 이미지 슬롯 컴포넌트
// (샴페인 골드 #AA8A57 / #947852 테두리와 딥 에메랄드 그린 배경의 고급 플레이스홀더 제공)
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
    <div className={`relative overflow-hidden rounded-2xl md:rounded-3xl border border-[#CBEBDE]/40 bg-gradient-to-br from-[#789E90]/45 via-[#224A3E]/75 to-[#12241F] shadow-xl flex items-center justify-center ${asset.aspectRatio} ${className}`}>
      {!hasError && !isPlaceholderPath ? (
        <img
          src={asset.src}
          alt={asset.alt}
          onError={() => setHasError(true)}
          style={{ objectFit: asset.objectFit }}
          className={`w-full h-full transition-transform duration-500 hover:scale-[1.02] ${imgClassName}`}
        />
      ) : (
        <div className="flex flex-col items-center justify-center p-6 text-center space-y-3 z-10 w-full h-full bg-[#16382F]/85 backdrop-blur-md border border-[#CBEBDE]/40">
          <div className="w-12 h-12 rounded-full bg-[#8CD3B6]/25 border border-[#CBEBDE]/40 flex items-center justify-center text-[#AA8A57] shadow-sm">
            <ImageIcon className="w-6 h-6 opacity-90" />
          </div>
          <div>
            <span className="inline-block px-3 py-0.5 rounded-full text-[10px] tracking-wider uppercase font-bold text-[#C2A477] bg-[#8CD3B6]/25 border border-[#CBEBDE]/45 mb-2">
              {asset.placeholderLabel}
            </span>
            <p className="text-sm md:text-base font-elegant font-bold text-[#FAF7F2] break-keep">
              {asset.alt}
            </p>
          </div>
          <span className="text-[11px] text-[#AA8A57]/80 font-mono bg-black/50 px-3 py-1 rounded border border-[#947852]/30">
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

  // 책 속 미리보기 고해상도 확대 모달 상태
  const [previewModalItem, setPreviewModalItem] = useState<{ title: string; imageSrc: string } | null>(null)
  const [isAdminPreview, setIsAdminPreview] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search)
      if (params.get("preview") === "admin" || params.get("admin") === "true" || process.env.NODE_ENV === "development") {
        setIsAdminPreview(true)
      }
    }
  }, [])

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

  // 구매 버튼 클릭 핸들러
  const handlePurchase = (e: React.MouseEvent) => {
    e.preventDefault()
    router.push(productData.checkoutUrl)
  }

  // 장바구니 추가 핸들러
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
      <div className="h-[1px] w-16 md:w-32 bg-gradient-to-r from-transparent via-[#947852]/40 to-[#789E90]/30" />
      <div className="mx-4 flex items-center justify-center">
        <svg className="w-6 h-6 text-[#947852] animate-pulse" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.5 18C3.46 18 1 15.54 1 12.5C1 9.79 2.95 7.54 5.56 7.07C6.73 4.64 9.17 3 12 3C15.42 3 18.3 5.42 18.91 8.68C21.74 9.07 23 11.23 23 13.5C23 15.98 20.98 18 18.5 18H6.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <div className="h-[1px] w-16 md:w-32 bg-gradient-to-l from-transparent via-[#947852]/40 to-[#789E90]/30" />
    </div>
  )

  return (
    <main className="detail-page abundance-detail-page relative min-h-screen bg-[#0a0514] text-[#EAE4D8] font-sans selection:bg-[#FAF7F2] selection:text-[#0B2B22] pb-24 md:pb-0">
      <GlobalBackground 
        src="/image/love-code-bg.png" 
        brightCenter={false}
        overlay={
          <div className="absolute inset-0 w-full h-full pointer-events-none">
            {/* 1. 상단/중앙 신비로운 옥빛 라이트 오라 (입체감과 질감 보존) */}
            <div
              className="absolute inset-0"
              style={{
                background: `
                  radial-gradient(ellipse 90% 55% at 50% 12%, rgba(34, 88, 79, 0.45) 0%, rgba(20, 47, 43, 0.2) 55%, transparent 85%),
                  radial-gradient(circle 700px at 80% 20%, rgba(27, 66, 61, 0.3) 0%, transparent 70%),
                  radial-gradient(circle 600px at 20% 60%, rgba(20, 47, 43, 0.25) 0%, transparent 70%)
                `,
              }}
            />

            {/* 2. 메인 딥 에메랄드(#142F2B) 수직 그라데이션 (보라색을 딥 옥빛 & 다크 그린으로 부드럽게 전환) */}
            <div
              className="absolute inset-0"
              style={{
                background: `
                  linear-gradient(
                    180deg,
                    rgba(20, 47, 43, 0.72) 0%,
                    rgba(27, 66, 61, 0.78) 22%,
                    rgba(20, 47, 43, 0.84) 52%,
                    rgba(13, 32, 29, 0.90) 80%,
                    rgba(8, 21, 19, 0.95) 100%
                  )
                `,
              }}
            />
          </div>
        }
      >
        <Navigation />

        <div className="relative z-10 pt-44 pb-20">
          <div className="container-premium">
            
            {/* ═══════════════════════════════════════════════════════════════
                1. Hero Section (연애비급 규격 일치: 풀 이미지 상단 -> 서브카피 -> 3종 패키지 소개 상자)
               ═══════════════════════════════════════════════════════════════ */}
            <section className="text-center mb-28">
              <Reveal delayMs={100}>
                {/* 상단 라벨 */}
                <div className="mb-8">
                  <span className="inline-block px-5 py-1.5 rounded-full text-[12pt] font-elegant font-semibold tracking-[0.25em] text-[#C2A477] uppercase"
                    style={{
                      background: 'rgba(120, 158, 144, 0.18)',
                      border: '1px solid rgba(203, 235, 222, 0.3)',
                    }}>
                    PREMIUM ABUNDANCE MINDSET GUIDE
                  </span>
                </div>

                {/* 대제목 */}
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-elegant font-bold mb-10 text-white leading-[1.45]">
                  豊饒秘策 <span className="text-[#C2A477]">풍요비책</span>
                </h1>

                {/* 1. 최상단: 가로형 풀 이미지 (16:9 비율, 1280px 매칭) */}
                <div className="w-full max-w-[1280px] mx-auto mb-16">
                  <div className="relative w-full aspect-video rounded-[28px] md:rounded-[36px] overflow-hidden border border-[#947852]/30 shadow-2xl">
                    <Image 
                      src={productData.heroImage} 
                      alt="豊饒秘策 풍요비책" 
                      fill 
                      sizes="(max-width: 1300px) 100vw, 1280px"
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>

                {/* 2. 서브카피 & 설명 */}
                <div className="max-w-4xl lg:max-w-5xl mx-auto space-y-7 mb-20 px-6 text-center">
                  <p className="text-2xl md:text-[36px] font-elegant font-bold text-[#C2A477] leading-[1.4] break-keep md:whitespace-nowrap">
                    숨겨진 황금의 문을 여는 풍요의 비밀서
                  </p>

                  <div className="flex items-center justify-center py-1">
                    <div
                      className="h-[1.5px] w-56 sm:w-72 md:w-96 rounded-full"
                      style={{
                        background: 'linear-gradient(90deg, transparent 0%, rgba(148, 120, 82, 0.2) 15%, rgba(148, 120, 82, 0.85) 42%, rgba(194, 164, 119, 0.95) 50%, rgba(148, 120, 82, 0.85) 58%, rgba(148, 120, 82, 0.2) 85%, transparent 100%)',
                        boxShadow: '0 0 12px rgba(148, 120, 82, 0.45)'
                      }}
                    />
                  </div>

                  <div className="text-[16px] md:text-[18px] text-[#EAE4D8] leading-[1.8] font-normal space-y-3.5 break-keep">
                    <p>
                      부(富)는 바깥에서 쫓는 것이 아니라, 내 안의 결핍을 비워낼 때 비로소 흘러듭니다.
                    </p>
                    <p>
                      억지로 붙잡지 않아도 스스로 흐르기 시작하는 절대 풍요의 궤도를 경험해 보세요.
                    </p>
                    <p className="font-semibold text-white">
                      오늘부터 풍요비책과 함께 무의식 깊은 곳의 부의 흐름을 새롭게 정렬하십시오.
                    </p>
                  </div>
                </div>

                {/* 3. Section 1: Hero Banner 3종 패키지 소개 상자 (단일 구매 영역) */}
                <div className="w-full max-w-[1280px] mx-auto mb-16 mt-8">
                  <div 
                    className="w-full rounded-[32px] md:rounded-[40px] p-6 sm:p-8 md:p-12 border border-[#947852]/40 text-left relative overflow-hidden shadow-2xl"
                    style={{
                      background: 'radial-gradient(ellipse at 50% 0%, rgba(120, 158, 144, 0.45) 0%, rgba(18, 38, 32, 0.92) 100%)',
                    boxShadow: '0 0 40px rgba(120, 158, 144, 0.12)'
                    }}
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
                      {/* 좌측: 통합 배지, 큰 제목, 설명, 가격, 구매/장바구니 버튼 */}
                      <div className="lg:col-span-7 space-y-5 md:space-y-6">
                        <div className="flex flex-wrap gap-2">
                          <span className="inline-flex items-center justify-center py-[5px] px-[12px] rounded-[6px] bg-[#8CD3B6]/25 border border-[#CBEBDE]/40 text-[#FAF7F2] text-xs font-bold tracking-wider whitespace-nowrap">
                            풍요비책 3종 올인원 패키지
                          </span>
                        </div>

                        <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white leading-[1.4] break-keep">
                          &ldquo;부는 쫓아야 할 것이 아니라,<br className="hidden sm:inline" />
                          <span className="text-[#AA8A57]">내면에서 &apos;여는&apos; 것이다.</span>&rdquo;
                        </h2>

                        <p className="text-[17px] md:text-[18px] text-[#F0EBE2] leading-[1.8] font-normal break-keep max-w-xl">
                          이를 악물고 일해도 통장이 비어 있던 진짜 이유. 무의식의 가난 바이러스를 소각하고 황금의 비밀코드를 깨우는 황금의 비밀서(秘密書)
                        </p>

                        {/* 가격 안내 */}
                        <div className="flex items-baseline gap-3 pt-1">
                          <span className="text-3xl md:text-4xl font-elegant font-bold text-[#C2A477] tracking-tight">
                            19,000원
                          </span>
                          <span className="text-sm md:text-base text-[#EDE6DA]/40 line-through">
                            정가 79,000원
                          </span>
                          <span className="inline-flex items-center justify-center py-[5px] px-[12px] rounded-[6px] bg-[#8CD3B6]/20 border border-[#CBEBDE]/40 text-[#FAF7F2] text-xs md:text-sm font-bold whitespace-nowrap">
                            76% OFF
                          </span>
                        </div>

                        {/* 구매/장바구니 버튼 */}
                        <div className="flex flex-col sm:flex-row gap-3 pt-2 items-stretch">
                          <button
                            type="button"
                            onClick={handleAddToCart}
                            className="py-3.5 px-5 sm:px-6 rounded-xl font-elegant font-medium text-sm md:text-base border border-[#947852]/40 text-[#AA8A57] hover:bg-[#789E90]/20 hover:border-[#CBEBDE]/50 transition-all duration-300 shrink-0 whitespace-nowrap text-center order-2 sm:order-1 flex items-center justify-center"
                          >
                            장바구니
                          </button>
                          <button
                            type="button"
                            onClick={handlePurchase}
                            className="py-3.5 px-6 rounded-xl font-elegant font-bold text-sm md:text-base hover:scale-[1.01] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 text-[#FAF7F2] hover:brightness-110 order-1 sm:order-2 flex-1 sm:flex-initial"
                            style={{
                              background: 'linear-gradient(135deg, #3A5F53 0%, #25443B 100%)',
                              border: '1.2px solid #E5C378',
                              boxShadow: '0 0 10px rgba(194, 164, 119, 0.35), 0 3px 10px rgba(0, 0, 0, 0.3)'
                            }}
                          >
                            <span>풍요비책 19,000원에 구매하기</span>
                            <ChevronRight className="w-4 h-4 text-[#FAF7F2] shrink-0" />
                          </button>
                        </div>
                      </div>

                      {/* 우측 목업 */}
                      <div className="lg:col-span-5">
                        <HybridImageSlot 
                          assetKey="hero" 
                          className="w-full aspect-square max-w-md mx-auto"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </section>

            <EmeraldCloudDivider />

            {/* ═══════════════════════════════════════════════════════════════
                Section 2: Problem Diagnosis & Resonance (문제 진단 & 공감)
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-[64px] md:mb-[112px] text-left w-full max-w-[1280px] mx-auto">
              <Reveal>
                <div className="space-y-10">
                  <div className="text-center max-w-3xl mx-auto space-y-5">
                    <span className="text-[#C2A477] font-elegant text-[12pt] font-semibold tracking-[0.2em] uppercase block">
                      Problem Diagnosis & Resonance
                    </span>
                    <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white leading-[1.4] break-keep">
                      &ldquo;당신이 밤낮없이 뼈를 갈아 넣어 일해도<br />
                      <span className="text-[#C2A477]">돈이 모이지 않던 잔인한 진실</span>&rdquo;
                    </h2>
                  </div>

                  <div className="grid lg:grid-cols-12 gap-10 items-start">
                    {/* 이미지 영역 (3:4 비율) */}
                    <div className="lg:col-span-5 w-full space-y-3.5">
                      <HybridImageSlot 
                        assetKey="pain" 
                        className="w-full aspect-[3/4]"
                      />
                      <div className="space-y-1.5 text-center">
                        <p className="text-xs md:text-sm text-[#AA8A57] font-medium tracking-wide">
                          밑 빠진 독에 물 붓듯 빠져나가는 통장 잔고
                        </p>
                        <p className="text-[16px] md:text-[18px] text-[#FAF7F2] font-elegant font-bold tracking-wide break-keep">
                          세 개 이상 해당된다면 지금 즉시 멈추십시오
                        </p>
                      </div>
                    </div>

                    {/* 본문 텍스트 및 5대 저주 체크리스트 */}
                    <div className="lg:col-span-7 space-y-6 break-keep">
                      <div
                        className="text-[16px] md:text-[18px] text-[#EAE4D8] leading-[1.8] font-normal p-6 sm:p-7 md:p-8 rounded-2xl border border-[#CBEBDE]/35 shadow-[0_8px_24px_rgba(0,0,0,0.3)] space-y-3.5 break-keep h-auto"
                        style={{ background: 'linear-gradient(135deg, rgba(120, 158, 144, 0.42) 0%, rgba(18, 38, 32, 0.90) 100%)' }}
                      >
                        <p>
                          최신형 고사양 게임(부자의 삶)을 돌리고 싶은데, 컴퓨터 본체에는 20년 전 &apos;윈도우 95&apos;가 깔려 있습니다. 무의식이 결핍으로 차 있으면 결국 &apos;블루스크린&apos;이 뜹니다.
                        </p>
                        <p>
                          돈을 벌고 싶다며 엑셀을 밟으면서, 무의식 바닥에서는 돈을 두려워하며 브레이크를 동시에 밟고 있던 당신의 무의식 운영체제부터 포맷해야 합니다.
                        </p>
                      </div>

                      <div className="space-y-3">
                        <h3 className="text-[20px] sm:text-[22px] md:text-[24px] font-elegant font-bold text-[#C2A477] leading-[1.4] flex items-center gap-2.5 break-keep">
                          <AlertTriangle className="w-6 h-6 text-[#947852] shrink-0" />
                          나의 재정 누수 체크리스트
                        </h3>

                        <div className="space-y-2.5">
                          {[
                            "통장에 돈이 조금 모이면 귀신같이 사고나 지출로 빠져나간다",
                            "내 지식과 상품의 가격을 당당히 올리지 못하고 깎아준다",
                            "계좌에서 돈이 빠져나갈 때 가슴이 조이고 숨이 턱 막힌다",
                            "큰돈이 생기면 왠지 모를 불안감과 죄책감이 든다",
                            "남이 돈 번 소식을 들으면 속으로는 박탈감이 치민다"
                          ].map((curse, idx) => (
                            <div 
                              key={idx}
                              className="p-4 rounded-xl border border-white/10 bg-white/[0.02] flex items-start gap-3.5 hover:border-[#947852]/40 transition-colors"
                            >
                              <div className="w-5 h-5 rounded border border-[#CBEBDE]/40 flex items-center justify-center shrink-0 mt-1 bg-[#8CD3B6]/25 shadow-sm">
                                <Check className="w-3.5 h-3.5 text-[#FAF7F2]" />
                              </div>
                              <span className="text-[16px] md:text-[18px] text-[#FAF7F2] font-medium leading-[1.6] break-keep">
                                {curse}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 마음공부 / 끌어당김 역설 공감 섹션 */}
                  <div className="!mt-[64px] sm:!mt-[72px] md:!mt-[120px] !mb-[56px] md:!mb-[96px] w-full max-w-[1280px] mx-auto">
                    {/* 상단 영문 섹션 라벨 및 헤더 */}
                    <div className="text-center mb-10 md:mb-12 space-y-3 md:space-y-4 break-keep">
                      <span className="text-[#C2A477] font-elegant text-[12pt] font-semibold tracking-[0.2em] uppercase block">
                        THE PARADOX OF ATTRACTION
                      </span>
                      <h3 className="text-2xl md:text-[34px] lg:text-[36px] font-elegant font-bold text-white leading-[1.4] break-keep">
                        &ldquo;확언을 100번씩 쓰고 &lsquo;끌어당김&rsquo;을 간절히 외쳤는데…<br />
                        <span className="text-[#C2A477]">왜 통장은 더 바닥나고 마음은 쫓겼을까요?</span>&rdquo;
                      </h3>
                      <p className="text-[17px] md:text-[18px] text-[#EAE4D8] mt-4 max-w-2xl mx-auto leading-[1.8] font-normal break-keep">
                        당신의 정성이 부족해서가 아닙니다. 풍요를 바라는 마음 이면에 도사린<br className="hidden sm:inline" />
                        ‘간절한 결핍’이 무의식의 톱니바퀴를 거꾸로 돌리고 있었기 때문입니다.
                      </p>
                    </div>

                    {/* 3대 공감 카드 (옥빛 차콜 글라스 스타일) */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {/* 카드 1 */}
                      <div 
                        className="p-7 md:p-8 rounded-2xl md:rounded-3xl relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[#BBCDC6]/35 flex flex-col justify-between"
                        style={{
                          background: 'linear-gradient(135deg, rgba(46, 66, 66, 0.64) 0%, rgba(27, 39, 45, 0.70) 100%)',
                          border: '1px solid rgba(187, 210, 198, 0.15)',
                          backdropFilter: 'blur(10px)',
                          WebkitBackdropFilter: 'blur(10px)',
                          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.35)'
                        }}
                      >
                        <div>
                          <div className="text-[#AA8A57] font-elegant font-semibold text-xs md:text-sm tracking-wider mb-2.5">
                            공감 01
                          </div>
                          <h4 className="text-xl md:text-[22px] font-elegant font-bold text-[#FAF7F2] mb-3 leading-[1.4] break-keep">
                            확언 뒤에 남는 서늘한 불안
                          </h4>
                          <p className="text-[15px] md:text-[16px] text-[#EAE4D8] leading-[1.7] font-normal break-keep">
                            “나는 부자다”를 외치면서도, 불쑥 날아오는 카드값 고지서 앞에서는 가슴이 쿵 내려앉는 괴리감과 죄책감을 겪지 않았나요?
                          </p>
                        </div>
                      </div>

                      {/* 카드 2 */}
                      <div 
                        className="p-7 md:p-8 rounded-2xl md:rounded-3xl relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[#BBCDC6]/35 flex flex-col justify-between"
                        style={{
                          background: 'linear-gradient(135deg, rgba(46, 66, 66, 0.64) 0%, rgba(27, 39, 45, 0.70) 100%)',
                          border: '1px solid rgba(187, 210, 198, 0.15)',
                          backdropFilter: 'blur(10px)',
                          WebkitBackdropFilter: 'blur(10px)',
                          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.35)'
                        }}
                      >
                        <div>
                          <div className="text-[#AA8A57] font-elegant font-semibold text-xs md:text-sm tracking-wider mb-2.5">
                            공감 02
                          </div>
                          <h4 className="text-xl md:text-[22px] font-elegant font-bold text-[#FAF7F2] mb-3 leading-[1.4] break-keep">
                            억지 긍정이 낳은 무의식의 역풍
                          </h4>
                          <p className="text-[15px] md:text-[16px] text-[#EAE4D8] leading-[1.7] font-normal break-keep">
                            불안과 두려움을 ‘부정적인 감정’이라며 억누른 채 덮어두다 보니, 억압된 결핍이 현실에서 예기치 못한 지출로 터져 나왔습니다.
                          </p>
                        </div>
                      </div>

                      {/* 카드 3 */}
                      <div 
                        className="p-7 md:p-8 rounded-2xl md:rounded-3xl relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[#BBCDC6]/35 flex flex-col justify-between"
                        style={{
                          background: 'linear-gradient(135deg, rgba(46, 66, 66, 0.64) 0%, rgba(27, 39, 45, 0.70) 100%)',
                          border: '1px solid rgba(187, 210, 198, 0.15)',
                          backdropFilter: 'blur(10px)',
                          WebkitBackdropFilter: 'blur(10px)',
                          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.35)'
                        }}
                      >
                        <div>
                          <div className="text-[#AA8A57] font-elegant font-semibold text-xs md:text-sm tracking-wider mb-2.5">
                            공감 03
                          </div>
                          <h4 className="text-xl md:text-[22px] font-elegant font-bold text-[#FAF7F2] mb-3 leading-[1.4] break-keep">
                            ‘간절함’이라는 이름의 결핍 주파수
                          </h4>
                          <p className="text-[15px] md:text-[16px] text-[#EAE4D8] leading-[1.7] font-normal break-keep">
                            간절함은 역설적으로 “지금 내게 돈이 없다”는 것을 가장 크게 증명하는 신호입니다. 쫓아가는 마음에는 결코 부가 머물지 않습니다.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* 공감 마무리 메시지 (상자 없이 배경 위에 직접 배치) */}
                    <div className="mt-10 sm:mt-12 md:mt-[72px] text-center max-w-[1050px] mx-auto px-4 break-keep">
                      <p className="text-[#FAF7F2] text-[17px] sm:text-[19px] md:text-[21px] lg:text-[22px] font-elegant leading-[1.6]">
                        금이 가 물이 새는 독에는, 아무리 화려한 황금빛 주문을 외워도 물이 차오르지 않습니다.
                      </p>
                      <p className="text-[#C2A477] text-[18px] sm:text-[20px] md:text-[23px] lg:text-[24px] font-elegant font-semibold leading-[1.6] mt-3.5 md:mt-4">
                        이제 주문을 멈추고, 당신의 무의식 밑바닥 ‘그릇’부터 온전히 기워내야 할 때입니다.
                      </p>
                    </div>

                    {/* 16:9 비주얼: 황금빛 흐름과 부의 그릇 */}
                    <div className="mt-10 md:mt-14 w-full aspect-[16/9] relative rounded-[20px] overflow-hidden">
                      <Image
                        src="/image/abundance-secret/abundance-vessel-golden-flow.webp"
                        alt="풍요비책 부의 그릇과 황금빛 흐름"
                        fill
                        sizes="(max-width: 1280px) 100vw, 1280px"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </Reveal>
            </section>

            {/* ═══════════════════════════════════════════════════════════════
                [추가 영역 1] 공감 연결 영역 — ‘진심을 탓하지 마세요 / 이제, 나의 자리를 돌아볼 때’
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-16 md:mb-24 text-left w-full max-w-[1280px] mx-auto">
              <Reveal>
                <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-8 lg:gap-10 items-stretch">
                  <div className="order-1 flex flex-col justify-between h-auto lg:h-full">
                    <h3 className="text-center lg:text-left text-[20px] sm:text-[23px] md:text-[25px] lg:text-[26px] xl:text-[28px] font-elegant font-bold text-[#C2A477] leading-[1.4] mb-6 break-keep lg:whitespace-nowrap">
                      그토록 애쓰는 동안, 내 &lsquo;부의 그릇&rsquo;은 채워졌나요?
                    </h3>

                    <div
                      className="w-full flex-1 flex flex-col justify-between text-left break-keep p-6 sm:p-8 md:p-10 rounded-2xl md:rounded-3xl gungjung-glass border border-[#947852]/30 shadow-2xl relative overflow-hidden"
                      style={{
                        background: 'linear-gradient(135deg, rgba(120, 158, 144, 0.42) 0%, rgba(18, 38, 32, 0.92) 100%)',
                        boxShadow: '0 12px 40px rgba(0, 0, 0, 0.4)'
                      }}
                    >
                      {/* 01 · 진심을 탓하지 마세요 */}
                      <div className="space-y-3.5">
                        <div className="flex items-center gap-2.5">
                          <span className="inline-flex items-center justify-center py-[5px] px-[12px] rounded-[6px] bg-[#8CD3B6]/25 border border-[#CBEBDE]/40 text-[#FAF7F2] text-xs font-bold whitespace-nowrap">
                            01
                          </span>
                          <h3 className="text-xl md:text-2xl font-elegant font-bold text-[#FAF7F2] leading-[1.4]">
                            노력을 탓하지 마세요
                          </h3>
                        </div>
                        <div className="text-[17px] md:text-[18px] text-[#EAE4D8] leading-[1.8] font-normal space-y-2 break-keep">
                          <p>
                            단 하나라도 내 이야기 같았다면,<br />
                            <span className="text-[#AA8A57] font-medium">당신의 능력이 부족해서가 결코 아닙니다.</span>
                          </p>
                          <p className="text-[#FAF7F2]/90">
                            더 아끼고, 더 참고, 더 밤새워 일했던 시간.<br />
                            그만큼 삶과 가족을 소중히 지키고 싶었을 거예요.
                          </p>
                        </div>
                      </div>

                      <div className="w-full h-[1px] bg-gradient-to-r from-[#947852]/30 via-[#947852]/10 to-transparent my-6 md:my-7" />

                      {/* 02 · 이제, 나의 자리를 돌아볼 때 */}
                      <div className="space-y-3.5">
                        <div className="flex items-center gap-2.5">
                          <span className="inline-flex items-center justify-center py-[5px] px-[12px] rounded-[6px] bg-[#8CD3B6]/25 border border-[#CBEBDE]/40 text-[#FAF7F2] text-xs font-bold whitespace-nowrap">
                            02
                          </span>
                          <h3 className="text-xl md:text-2xl font-elegant font-bold text-[#FAF7F2] leading-[1.4]">
                            이제, <span className="text-[#AA8A57]">나의 부의 의식을 돌아볼 때</span>
                          </h3>
                        </div>
                        <div className="text-[17px] md:text-[18px] text-[#EAE4D8] leading-[1.8] font-normal space-y-3 break-keep">
                          <p>
                            가격표와 남들의 눈치를 살피는 동안,<br />
                            내 가치와 기준은 자꾸 뒤로 밀리지 않았나요?
                          </p>
                          <div 
                            className="p-4 sm:p-5 rounded-xl border border-[#CBEBDE]/35 shadow-[0_8px_24px_rgba(0,0,0,0.25)] backdrop-blur-sm text-[#FAF7F2] font-normal leading-[1.75]"
                            style={{ background: 'linear-gradient(135deg, rgba(120, 158, 144, 0.42) 0%, rgba(18, 38, 32, 0.90) 100%)' }}
                          >
                            《풍요비책》에서 말하는 ‘그릇’은<br className="hidden sm:inline" />
                            돈을 쫓아가는 삶이 아니라 <span className="text-[#AA8A57] font-semibold">돈이 스스로 흘러들어 머무는 풍요의 의식(Container)</span>입니다.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-full order-2 flex flex-col justify-between h-auto lg:h-full">
                    <div className="group relative w-full aspect-[3/4] lg:aspect-auto lg:h-full rounded-2xl md:rounded-3xl overflow-hidden border border-[#947852]/30 shadow-[0_12px_40px_rgba(0,0,0,0.6)] bg-black/40">
                      <Image
                        src="/image/abundance-secret/abundance-scarcity-mindset.webp"
                        alt="풍요비책 부의 의식 비주얼"
                        fill
                        sizes="(max-width: 1024px) 100vw, 40vw"
                        className="object-cover"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </Reveal>
            </section>

            <EmeraldCloudDivider />

            {/* ═══════════════════════════════════════════════════════════════
                [추가 영역 2] ‘왜, 이 책인가?’ 이미지·설명 영역 (옥색 한지 텍스처 & 차분한 회옥빛 그라데이션)
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-28 w-full max-w-[1280px] mx-auto space-y-[48px] md:space-y-[80px]">
              <Reveal>
                <div
                  className="relative jade-card-hover backdrop-blur-md p-6 sm:p-8 md:p-14 lg:p-16 rounded-3xl md:rounded-[40px] border border-[#947852]/40 shadow-[0_16px_45px_rgba(0,0,0,0.7)] cursor-default text-center overflow-hidden"
                  style={{
                    background: 'radial-gradient(circle at 14% 16%, rgba(138, 160, 125, 0.22) 0%, transparent 48%), radial-gradient(circle at 86% 84%, rgba(138, 160, 125, 0.18) 0%, transparent 48%), radial-gradient(ellipse at 50% 0%, rgba(95, 115, 88, 0.20) 0%, transparent 55%), linear-gradient(145deg, #0D1612 0%, #14221A 100%)',
                    boxShadow: '0 16px 45px rgba(0, 0, 0, 0.7), inset 0 0 60px rgba(10, 5, 20, 0.65), inset 0 0 0 1px rgba(148, 120, 82, 0.25)'
                  }}
                >
                  {/* 실제 전통 옥색 한지(Sage Celadon Hanji) 섬유 텍스처 레이어 (업로드해주신 한지 사진 질감) */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 pointer-events-none rounded-[inherit] overflow-hidden"
                    style={{
                      backgroundImage: "url('/image/abundance/jade-hanji-bg.jpg')",
                      backgroundRepeat: 'repeat',
                      backgroundSize: '340px 340px',
                      opacity: 0.36,
                      mixBlendMode: 'screen',
                      filter: 'contrast(1.15) brightness(0.85) saturate(0.85)'
                    }}
                  />

                  {/* 글자 가독성 보호(중앙 차분한 음영) & 주변 퍼플 배경 연결용 가장자리 채도 감쇠 비네트 */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 pointer-events-none rounded-[inherit]"
                    style={{
                      background: 'radial-gradient(ellipse at 50% 50%, rgba(13, 22, 18, 0.65) 20%, transparent 80%), radial-gradient(circle at 50% 50%, transparent 55%, rgba(10, 5, 20, 0.65) 88%, rgba(10, 5, 20, 0.90) 100%)'
                    }}
                  />

                  {/* 앤틱 골드 네 모서리 전통 코너 문양 */}
                  <img
                    src="/image/abundance/corner-ornament.svg"
                    alt=""
                    aria-hidden="true"
                    className="absolute top-3 left-3 sm:top-4 sm:left-4 md:top-5 md:left-5 w-7 h-7 sm:w-9 sm:h-9 md:w-11 md:h-11 object-contain pointer-events-none select-none opacity-85 z-10"
                  />
                  <img
                    src="/image/abundance/corner-ornament.svg"
                    alt=""
                    aria-hidden="true"
                    className="absolute top-3 right-3 sm:top-4 sm:right-4 md:top-5 md:right-5 w-7 h-7 sm:w-9 sm:h-9 md:w-11 md:h-11 object-contain pointer-events-none select-none opacity-85 z-10 -scale-x-100"
                  />
                  <img
                    src="/image/abundance/corner-ornament.svg"
                    alt=""
                    aria-hidden="true"
                    className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 md:bottom-5 md:left-5 w-7 h-7 sm:w-9 sm:h-9 md:w-11 md:h-11 object-contain pointer-events-none select-none opacity-85 z-10 -scale-y-100"
                  />
                  <img
                    src="/image/abundance/corner-ornament.svg"
                    alt=""
                    aria-hidden="true"
                    className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 md:bottom-5 md:right-5 w-7 h-7 sm:w-9 sm:h-9 md:w-11 md:h-11 object-contain pointer-events-none select-none opacity-85 z-10 -scale-100"
                  />

                  <div className="relative z-10 text-center mb-6">
                    <span className="inline-flex items-center justify-center py-[5px] md:py-[6px] px-[14px] md:px-[16px] rounded-[6px] bg-[#0A261E]/90 border border-[#947852]/45 text-[#FAF7F2] text-[14px] md:text-[16px] font-bold tracking-wide whitespace-nowrap shadow-sm">
                      왜, 풍요비책인가?
                    </span>
                  </div>
                  <h3 className="relative z-10 text-2xl md:text-[36px] font-elegant font-bold text-[#FAF7F2] leading-[1.4] break-keep mb-8 md:mb-10">
                    &ldquo;열심히 아끼고 살았는데 왜 늘 통장은 말랐을까요?<br />
                    돈과 부에도 <span className="text-[#C2A477]">&lsquo;무의식의 연금술&rsquo;</span>이 필요했던 이유&rdquo;
                  </h3>

                  <div className="relative z-10 max-w-[800px] w-full mx-auto text-left text-[17px] md:text-[18px] text-[#FAF7F2] leading-[1.8] font-normal space-y-5 md:space-y-6 break-keep">
                    <p>
                      어릴 적 우리는 이렇게 배웠습니다.<br />
                      <span className="text-[#AA8A57] font-semibold">
                        &ldquo;땀 흘려 고생하고 무조건 아껴야 돈이 모인다.&rdquo;
                      </span><br />
                      <span className="text-[#EAE4D8]">하지만 현실의 경제는 단순한 노동 시간과 인내의 비례가 아니었습니다.</span>
                    </p>
                    <p>
                      마음속 깊은 곳에 가난의 공포와 결핍이 자리 잡고 있다면, 아무리 많은 돈이 들어와도 깨진 항아리처럼 귀신같이 빠져나갑니다. 부는 억지로 쫓아가는 것이 아니라, 내 안의 그릇을 온전히 넓히고 자본의 흐름을 여는 것입니다.
                    </p>
                    <div className="pt-5 border-t border-[#947852]/20 text-[#FAF7F2] space-y-4">
                      <p className="text-[#EAE4D8]">
                        《풍요비책》은 뜬구름 잡는 확언집이 아닙니다. 무의식 속 가난 코드를 소각하고, 선천코드 오행 분석과 자본의 흑마법을 통해 현실의 화폐로 치환하는 구체적 지침서입니다.
                      </p>
                      <p>
                        <strong className="text-[#AA8A57] font-semibold">가격표에 쫓기던 결핍의 삶에서, 스스로 풍요를 선택하고 끌어당기는 여유로운 삶으로.</strong>
                      </p>
                    </div>

                    <div className="pt-6 md:pt-7 mt-6 md:mt-7 border-t border-[#947852]/25 text-center sm:text-left">
                      <p className="font-elegant font-bold text-base md:text-lg lg:text-xl text-[#AA8A57] tracking-wide break-keep leading-relaxed">
                        노동의 굴레를 넘어, 부의 무의식 코드를 직접 깨우십시오.
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* BEFORE·AFTER 비교 이미지 자리 (abundance-transformation.webp 활용) */}
              <Reveal>
                <div className="relative w-full overflow-hidden rounded-3xl md:rounded-[40px] border border-[#947852]/30 shadow-2xl bg-black/40">
                  <Image
                    src={productData.structureImage}
                    alt="풍요비책 Before & After 트랜스포메이션"
                    width={1670}
                    height={942}
                    sizes="(max-width: 1280px) 100vw, 1280px"
                    className="w-full h-auto object-contain block"
                    priority
                  />
                </div>
              </Reveal>
            </section>

            <EmeraldCloudDivider />

            {/* ═══════════════════════════════════════════════════════════════
                Before & After 1:1 매칭 비교 (기존 풍요비책 내용 보존)
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-28 w-full max-w-[1280px] mx-auto">
              <Reveal>
                <div
                  className="gungjung-glass py-12 px-4 md:px-10 rounded-3xl md:rounded-[40px] border border-[#CBEBDE]/40"
                  style={{
                    background: 'linear-gradient(135deg, rgba(120, 158, 144, 0.42) 0%, rgba(18, 38, 32, 0.92) 100%)',
                    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.4)'
                  }}
                >
                  <div className="max-w-3xl mx-auto px-4 text-center mb-10 space-y-3 break-keep">
                    <span className="text-[#C2A477] font-elegant text-xs font-semibold tracking-[0.2em] uppercase block">
                      TRANSFORMATION
                    </span>
                    <h3 className="text-xl md:text-[24px] font-elegant font-bold text-white leading-[1.4] break-keep">
                      &ldquo;열심히 사는데 왜 늘 통장은 마를까?<br />
                      <span className="text-[#C2A477]">결핍의 무의식을 지우면 돈의 흐름이 반전됩니다.</span>&rdquo;
                    </h3>
                    <p className="text-[17px] md:text-[18px] text-[#F0EBE2] font-normal leading-[1.8] break-keep">
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
                        className="grid grid-cols-1 md:grid-cols-2 gap-3 p-4 rounded-2xl bg-black/45 border border-[#947852]/20 hover:border-[#947852]/45 transition-colors"
                      >
                        <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#789E90]/10 border border-[#CBEBDE]/20">
                          <span className="text-[#EAE4D8] font-serif font-bold text-[11px] px-2.5 py-1 bg-[#8CD3B6]/22 border border-[#CBEBDE]/35 rounded shrink-0">
                            BEFORE
                          </span>
                          <div>
                            <p className="text-[#F0EBE2] text-[15px] md:text-[16px] font-medium leading-snug">{item.beforeTitle}</p>
                            <p className="text-[#EAE4D8] text-xs md:text-sm mt-1 font-light">{item.beforeSub}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#789E90]/20 border border-[#CBEBDE]/35">
                          <span className="text-[#AA8A57] font-serif font-bold text-[11px] px-2.5 py-1 bg-[#8CD3B6]/28 border border-[#CBEBDE]/40 rounded shrink-0">
                            AFTER
                          </span>
                          <div>
                            <p className="text-[#FAF7F2] text-[15px] md:text-[16px] font-semibold leading-snug">{item.afterTitle}</p>
                            <p className="text-[#AA8A57]/90 text-xs md:text-sm mt-1 font-light">{item.afterSub}</p>
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
                [추가 영역 3] 저자 소개 (백도화 저자 경력, 옥색 한지 텍스처 카드, 자격 뱃지, 저자의 편지, 낙관)
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-28 w-full max-w-[1280px] mx-auto">
              <Reveal>
                <div
                  className="relative jade-card-hover backdrop-blur-md p-6 sm:p-8 md:p-14 lg:p-16 rounded-3xl md:rounded-[40px] border border-[#947852]/40 shadow-[0_16px_45px_rgba(0,0,0,0.7)] cursor-default overflow-hidden"
                  style={{
                    background: 'radial-gradient(circle at 14% 16%, rgba(138, 160, 125, 0.22) 0%, transparent 48%), radial-gradient(circle at 86% 84%, rgba(138, 160, 125, 0.18) 0%, transparent 48%), radial-gradient(ellipse at 50% 0%, rgba(95, 115, 88, 0.20) 0%, transparent 55%), linear-gradient(145deg, #0D1612 0%, #14221A 100%)',
                    boxShadow: '0 16px 45px rgba(0, 0, 0, 0.7), inset 0 0 60px rgba(10, 5, 20, 0.65), inset 0 0 0 1px rgba(148, 120, 82, 0.25)'
                  }}
                >
                  {/* 실제 전통 옥색 한지(Sage Celadon Hanji) 섬유 텍스처 레이어 (업로드해주신 한지 사진 질감) */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 pointer-events-none rounded-[inherit] overflow-hidden"
                    style={{
                      backgroundImage: "url('/image/abundance/jade-hanji-bg.jpg')",
                      backgroundRepeat: 'repeat',
                      backgroundSize: '340px 340px',
                      opacity: 0.36,
                      mixBlendMode: 'screen',
                      filter: 'contrast(1.15) brightness(0.85) saturate(0.85)'
                    }}
                  />

                  {/* 글자 가독성 보호(중앙 차분한 음영) & 주변 퍼플 배경 연결용 가장자리 채도 감쇠 비네트 */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 pointer-events-none rounded-[inherit]"
                    style={{
                      background: 'radial-gradient(ellipse at 50% 50%, rgba(13, 22, 18, 0.65) 20%, transparent 80%), radial-gradient(circle at 50% 50%, transparent 55%, rgba(10, 5, 20, 0.65) 88%, rgba(10, 5, 20, 0.90) 100%)'
                    }}
                  />

                  {/* 앤틱 골드 네 모서리 전통 코너 문양 */}
                  <img
                    src="/image/abundance/corner-ornament.svg"
                    alt=""
                    aria-hidden="true"
                    className="absolute top-3 left-3 sm:top-4 sm:left-4 md:top-5 md:left-5 w-7 h-7 sm:w-9 sm:h-9 md:w-11 md:h-11 object-contain pointer-events-none select-none opacity-85 z-10"
                  />
                  <img
                    src="/image/abundance/corner-ornament.svg"
                    alt=""
                    aria-hidden="true"
                    className="absolute top-3 right-3 sm:top-4 sm:right-4 md:top-5 md:right-5 w-7 h-7 sm:w-9 sm:h-9 md:w-11 md:h-11 object-contain pointer-events-none select-none opacity-85 z-10 -scale-x-100"
                  />
                  <img
                    src="/image/abundance/corner-ornament.svg"
                    alt=""
                    aria-hidden="true"
                    className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 md:bottom-5 md:left-5 w-7 h-7 sm:w-9 sm:h-9 md:w-11 md:h-11 object-contain pointer-events-none select-none opacity-85 z-10 -scale-y-100"
                  />
                  <img
                    src="/image/abundance/corner-ornament.svg"
                    alt=""
                    aria-hidden="true"
                    className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 md:bottom-5 md:right-5 w-7 h-7 sm:w-9 sm:h-9 md:w-11 md:h-11 object-contain pointer-events-none select-none opacity-85 z-10 -scale-100"
                  />

                  <div className="relative z-10 text-center mb-8 md:mb-10 space-y-2.5 break-keep">
                    <span className="text-[#C2A477] font-elegant text-[12pt] font-semibold tracking-[0.2em] uppercase block">
                      AUTHOR & MASTER
                    </span>
                    <h3 className="text-2xl md:text-[36px] font-elegant font-bold text-[#FAF7F2] tracking-wide">
                      백도화 (白桃花)
                    </h3>
                    <p className="text-[18px] text-[#EAE4D8] font-normal leading-[1.8] break-keep">
                      마음의 구조를 읽고, 관계와 부의 자리를 회복시키는 심리 멘토
                    </p>

                    <div className="flex flex-wrap justify-center gap-2 md:gap-2.5 pt-3 max-w-2xl mx-auto">
                      {[
                        "브레인트레이너",
                        "NLP 전문상담사",
                        "전문 최면상담사",
                        "자존감코칭전문가",
                        "심리상담사",
                        "명상지도사",
                        "연애상담사",
                        "타로/사주상담사"
                      ].map((badge, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center justify-center py-[5px] px-[12px] rounded-[6px] bg-[#0A261E]/90 border border-[#947852]/40 text-[#FAF7F2] text-xs md:text-sm font-bold tracking-tight whitespace-nowrap shadow-sm"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="relative z-10 max-w-[800px] mx-auto text-left text-[17px] md:text-[18px] text-[#FAF7F2] leading-[1.8] font-normal space-y-5 md:space-y-6 break-keep border-t border-[#947852]/20 pt-8 md:pt-10">
                    <div className="text-[#947852]/45 text-3xl font-serif leading-none select-none -mb-2">“</div>

                    <p className="text-[#FAF7F2] font-semibold text-[18px] md:text-[19px]">
                      풍요비책의 저자 백도화입니다.
                    </p>
                    <p className="text-[#FAF7F2]">
                      저 또한 통장에 찍히는 숫자 하나에 가슴 졸이며, 끝없는 불안과 결핍 속에서 밤낮없이 일했던 시절이 있었습니다. <span className="text-[#EAE4D8]">아끼고 아껴도 돈은 늘 모자랐고, 돈을 쓸 때마다 가슴 한구석이 서늘하게 죄여왔습니다.</span>
                    </p>
                    <p className="text-[#FAF7F2]">
                      그 결핍의 고통 끝에 <span className="text-[#AA8A57] font-semibold">사람의 마음과 무의식이 돈이라는 에너지와 어떻게 상호작용하는지 깊이 연구하기 시작했습니다.</span> 그리고 무의식의 결핍 코드를 소각하고 부의 그릇을 확장했을 때, 통장과 삶의 흐름이 거짓말처럼 반전되는 경험을 했습니다.
                    </p>
                    <p className="text-[#EAE4D8]">
                      부는 억지로 쫓는 노동의 대가가 아닙니다. 내면의 결핍을 지우고, 가치를 담아낼 온전한 그릇을 세우는 마음의 연금술입니다.
                    </p>
                    <p className="text-[#AA8A57] font-semibold pt-1">
                      더 이상 가격표 앞에서 망설이며 위축되지 마십시오.<br />
                      마르지 않는 풍요의 그릇을 열고, 당신의 가치에 걸맞은 삶을 누리십시오.
                    </p>

                    <div className="pt-7 md:pt-8 flex items-center justify-end gap-2.5 md:gap-3">
                      <span className="text-[15px] md:text-[17px] text-[#EAE4D8] font-elegant font-medium tracking-wide">
                        저자 백도화 드림
                      </span>
                      <img
                        src="/image/love-secret/baekdohwa-vertical-seal.png?v=20261103"
                        alt="백도화 낙관"
                        className="h-[68px] sm:h-[78px] md:h-[92px] w-auto object-contain select-none opacity-95"
                      />
                    </div>
                  </div>
                </div>
              </Reveal>
            </section>

            <EmeraldCloudDivider />

            {/* ═══════════════════════════════════════════════════════════════
                [추가 영역 4] 책의 탄생 소개 및 핵심 특징 영역
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-28 w-full max-w-[1280px] mx-auto">
              <Reveal>
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-stretch">
                  <div className="relative w-full aspect-[3/4] overflow-hidden rounded-[32px] sm:rounded-[40px] border border-[#947852]/30 shadow-2xl bg-black/40">
                    <Image
                      src={productData.overviewImage}
                      alt="수많은 눈물과 치열한 연구 끝에 탄생한 풍요비책"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                      priority
                    />
                  </div>

                  <div className="h-full flex flex-col justify-between text-left break-keep space-y-6 lg:space-y-0">
                    <div>
                      <p className="text-[20px] sm:text-[22px] md:text-[25px] font-elegant font-light text-[#F0EBE2] leading-[1.4] mb-2 sm:mb-2.5 break-keep">
                        수많은 눈물과 연구 끝에,
                      </p>
                      <h2 className="text-[24px] sm:text-[30px] md:text-[34px] lg:text-[38px] xl:text-[40px] font-elegant font-bold text-[#FAF7F2] leading-[1.38] break-keep">
                        마침내 탄생한<br />
                        단 하나의 비책(秘策)<br />
                        <span className="text-[32px] sm:text-[38px] md:text-[44px] lg:text-[48px] xl:text-[52px] font-extrabold mt-2 text-[#C2A477] inline-block">
                          풍요비책
                        </span>
                      </h2>
                    </div>

                    <div className="space-y-4 text-[16px] md:text-[17px] lg:text-[18px] text-[#EAE4D8] leading-[1.8] font-normal break-keep lg:py-2">
                      <p className="text-[#F0EBE2]">
                        더 이상 가격표 앞에서 망설이며 불안해하지 마십시오.
                      </p>
                      <p className="text-[#FAF7F2] font-semibold text-[17px] md:text-[19px]">
                        부는 쫓는 것이 아니라, 내 안에서 여는 것입니다.
                      </p>
                      <p className="text-[#F0EBE2]">
                        <strong className="text-[#AA8A57] font-semibold">《풍요비책》</strong>은 결핍과 가난의 무의식을 소각하고{' '}
                        <span className="text-[#FAF7F2] font-semibold">&lsquo;당당한 가치 책정&rsquo;</span>과{' '}
                        <span className="text-[#FAF7F2] font-semibold">&lsquo;마르지 않는 자본의 순환&rsquo;</span>을 손에 쥐여드리기 위해 탄생한 실전 설계도입니다.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {[
                        "결핍 무의식 완전 소각",
                        "돈그릇 머니 컨테이너 확장",
                        "선천코드 재물 락 해제",
                        "자본의 흑마법 4대 비기",
                        "헐값 노동 탈피 가격 결계",
                        "21일 풍요 뇌 데일리 실천"
                      ].map((item, idx) => (
                        <div
                          key={idx}
                          className="p-3.5 sm:p-4 rounded-xl border border-[#CBEBDE]/40 flex items-center gap-3 backdrop-blur-md transition-all duration-300 hover:border-[#CBEBDE]/65 hover:shadow-[0_0_20px_rgba(203,235,222,0.18)] hover:scale-[1.01]"
                          style={{
                            background: 'linear-gradient(135deg, rgba(120, 158, 144, 0.45) 0%, rgba(20, 44, 37, 0.90) 100%)',
                            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.35)'
                          }}
                        >
                          <div className="w-6 h-6 rounded-lg bg-[#8CD3B6]/25 flex items-center justify-center shrink-0 border border-[#CBEBDE]/40 text-[#AA8A57] text-[13px] font-bold">
                            ✦
                          </div>
                          <span className="text-[14px] sm:text-[15px] text-[#FAF7F2] font-semibold tracking-wide break-keep">
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
                Section 3: Recommended For (이런 분께 추천합니다)
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-28">
              <Reveal>
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                  <div className="space-y-8 text-left break-keep">
                    <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white tracking-wide leading-[1.4] break-keep">
                      이런 분께 <span className="text-[#C2A477]">추천합니다</span>
                    </h2>

                    <RecommendedForCards 
                      textClassName="text-[16px] md:text-[18px]"
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
                Section 4: Solution Mechanism (풍요 솔루션 인과관계 통합)
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-28 text-left w-full max-w-[1280px] mx-auto">
              <Reveal>
                <div className="py-4">
                  <div className="text-center mb-12 space-y-4 break-keep">
                    <span className="text-[#C2A477] font-elegant text-xs font-semibold tracking-[0.2em] uppercase block">
                      ABUNDANCE CODE
                    </span>
                    <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white leading-[1.4] break-keep">
                      가난을 두려워하는 마음으로는 절대 부자가 될 수 없습니다.<br />
                      <span className="text-[#C2A477]">내면의 부의 그릇을 넓히고, 현실의 시스템을 가동합니다.</span>
                    </h2>
                    <p className="text-[17px] md:text-[18px] text-[#F0EBE2] max-w-2xl mx-auto font-normal leading-[1.8] break-keep">
                      통장의 숫자는 내 무의식 프로그램의 그림자일 뿐입니다.<br />
                      《풍요비책》은 <strong className="text-[#FAF7F2] font-semibold">돈의 무의식 정화(내적 그릇)</strong>를 마친 후, <strong className="text-[#AA8A57] font-semibold">마르지 않는 부의 파이프라인(외적 자산화)</strong>을 세우도록 설계되었습니다.
                    </p>
                  </div>

                  <div className="space-y-10">
                    {/* STEP 1 */}
                    <div
                      className="gungjung-glass p-6 md:p-10 rounded-3xl border border-[#947852]/30 relative overflow-hidden"
                      style={{
                        background: 'linear-gradient(135deg, rgba(120, 158, 144, 0.42) 0%, rgba(18, 38, 32, 0.92) 100%)',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), 0 0 20px rgba(120, 158, 144, 0.08)'
                      }}
                    >
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="px-3.5 py-1 rounded-full bg-[#8CD3B6]/25 text-[#FAF7F2] font-serif font-bold text-xs tracking-wider border border-[#CBEBDE]/40">
                          STEP 1
                        </span>
                        <h3 className="text-xl md:text-[24px] font-elegant font-bold text-white leading-[1.4] break-keep">
                          결핍 정화 &amp; 부의 그릇 재설계 (내적 정렬)
                        </h3>
                      </div>
                      <p className="text-[15px] md:text-[16px] text-[#F0EBE2] mb-8 leading-[1.7] font-light break-keep">
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
                            className="p-4 rounded-2xl border border-[#CBEBDE]/30 hover:border-[#CBEBDE]/55 hover:shadow-[0_0_18px_rgba(203,235,222,0.15)] transition-all break-keep"
                            style={{ background: 'rgba(10, 12, 15, 0.88)' }}
                          >
                            <span className="text-[#AA8A57] text-xs font-mono font-bold tracking-wider">{item.code}</span>
                            <p className="text-white text-[15px] md:text-[16px] font-elegant font-bold mt-1.5">{item.title}</p>
                            <p className="text-[#EAE4D8] text-[13px] md:text-[14px] mt-1 font-light leading-relaxed">{item.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* 연결 화살표 */}
                    <div className="flex justify-center -my-4 relative z-10">
                      <div className="w-11 h-11 rounded-full bg-[#8CD3B6]/28 border border-[#CBEBDE]/45 flex items-center justify-center text-[#AA8A57] shadow-[0_0_15px_rgba(203,235,222,0.2)] font-bold">
                        ↓
                      </div>
                    </div>

                    {/* STEP 2 */}
                    <div
                      className="gungjung-glass p-6 md:p-10 rounded-3xl border border-[#947852]/45 relative overflow-hidden"
                      style={{
                        background: 'linear-gradient(135deg, rgba(120, 158, 144, 0.42) 0%, rgba(18, 38, 32, 0.92) 100%)',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), 0 0 20px rgba(120, 158, 144, 0.08)'
                      }}
                    >
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="px-3.5 py-1 rounded-full bg-[#8CD3B6]/25 text-[#AA8A57] font-serif font-bold text-xs tracking-wider border border-[#CBEBDE]/40">
                          STEP 2
                        </span>
                        <h3 className="text-xl md:text-[24px] font-elegant font-bold text-white leading-[1.4] break-keep">
                          현실 부의 창출 공식 (4대 머니 메커니즘)
                        </h3>
                      </div>
                      <p className="text-[15px] md:text-[16px] text-[#F0EBE2] mb-8 leading-[1.7] font-light break-keep">
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
                            className="p-5 rounded-2xl border border-[#CBEBDE]/30 hover:border-[#CBEBDE]/55 hover:shadow-[0_0_18px_rgba(203,235,222,0.15)] transition-all group break-keep"
                            style={{ background: 'rgba(10, 12, 15, 0.88)' }}
                          >
                            <div className="flex items-center justify-between mb-2">
                              <span className="font-serif text-xs font-bold bg-[#8CD3B6]/25 text-[#AA8A57] px-2.5 py-0.5 rounded border border-[#CBEBDE]/40">
                                {card.num}
                              </span>
                              <Sparkles className="w-4 h-4 text-[#947852]/50 group-hover:text-[#947852] transition-colors" />
                            </div>
                            <h4 className="text-white font-elegant font-bold text-[17px] md:text-[18px] group-hover:text-[#AA8A57] transition-colors">
                              {card.title}
                            </h4>
                            <p className="text-[#EAE4D8] text-[15px] md:text-[16px] mt-2 leading-[1.6] font-light">
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
                [추가 영역 5] 3종 역할 요약 카드 (Step 1 · 원리, Step 2 · 전략, Step 3 · 실천)
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-14 text-left w-full max-w-[1280px] mx-auto">
              <Reveal>
                <div className="text-center mb-10 md:mb-12 max-w-3xl mx-auto break-keep">
                  <span className="text-[#C2A477] font-elegant text-[12pt] font-semibold tracking-[0.2em] uppercase block">
                    PACKAGE COMPOSITION
                  </span>
                  <h3 className="text-2xl md:text-[36px] font-elegant font-bold text-white mt-2 leading-[1.4] break-keep">
                    풍요비책 3종 올인원 세트<br />
                    <span className="text-[#AA8A57]">결핍을 황금으로 바꾸는 3단계 완성형 패키지</span>
                  </h3>
                  <p className="text-[#F0EBE2] text-[18px] mt-3 leading-[1.8] font-normal break-keep">
                    본편으로 원리를 꿰뚫고, 실전 워크북으로 그릇을 넓히며, 특별 외전으로 부의 파동을 완성합니다.
                  </p>
                </div>

                {/* 3단계 핵심 역할 카드 3개 */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 text-left items-stretch">
                  {/* Book 1 */}
                  <div
                    className="relative p-5 sm:p-6 md:p-7 rounded-[12px] border border-[#CBEBDE]/40 flex flex-col justify-between overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.4)] transition-all hover:border-[#CBEBDE]/65 hover:shadow-[0_8px_30px_rgba(203,235,222,0.22)] hover:-translate-y-1 duration-200"
                    style={{ background: 'linear-gradient(145deg, rgba(120, 158, 144, 0.45) 0%, rgba(20, 44, 37, 0.90) 100%)' }}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <span className="inline-flex items-center justify-center py-[6px] px-[14px] rounded-[8px] bg-[#8CD3B6]/25 border border-[#CBEBDE]/45 text-[#FAF7F2] text-[13px] md:text-[14px] font-serif font-bold whitespace-nowrap shadow-sm">
                          Step 1 · 원리
                        </span>
                        <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 text-[#AA8A57]">
                          <BookOpen className="w-6 h-6" />
                        </div>
                      </div>

                      <h4 className="text-[18px] md:text-[20px] font-bold text-[#FAF7F2] font-elegant mt-3 md:mt-3.5 leading-[1.4] break-keep">
                        《풍요비책 완전판》
                      </h4>
                      <div className="w-8 h-[1px] bg-[#AA8A57]/30 my-2.5 md:my-3" />
                      <p className="text-[16px] text-[#F0EBE2] leading-[1.7] font-normal break-keep">
                        가난의 무의식 저주를 풀고 선천코드 오행 분석과 자본의 흑마법을 담은 근본 마법서
                      </p>
                    </div>
                  </div>

                  {/* Book 2 */}
                  <div
                    className="relative p-5 sm:p-6 md:p-7 rounded-[12px] border border-[#CBEBDE]/40 flex flex-col justify-between overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.4)] transition-all hover:border-[#CBEBDE]/65 hover:shadow-[0_8px_30px_rgba(203,235,222,0.22)] hover:-translate-y-1 duration-200"
                    style={{ background: 'linear-gradient(145deg, rgba(120, 158, 144, 0.45) 0%, rgba(20, 44, 37, 0.90) 100%)' }}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <span className="inline-flex items-center justify-center py-[6px] px-[14px] rounded-[8px] bg-[#8CD3B6]/25 border border-[#CBEBDE]/45 text-[#FAF7F2] text-[13px] md:text-[14px] font-serif font-bold whitespace-nowrap shadow-sm">
                          Step 2 · 전략
                        </span>
                        <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 text-[#AA8A57]">
                          <Smartphone className="w-6 h-6" />
                        </div>
                      </div>

                      <h4 className="text-[18px] md:text-[20px] font-bold text-[#FAF7F2] font-elegant mt-3 md:mt-3.5 leading-[1.4] break-keep">
                        《정화와 각성의 서》
                      </h4>
                      <div className="w-8 h-[1px] bg-[#AA8A57]/30 my-2.5 md:my-3" />
                      <p className="text-[16px] text-[#F0EBE2] leading-[1.7] font-normal break-keep">
                        비움의 법칙, 제값 선언문, 5초 루프 각인법, 21일 풍요 뇌 데일리 실천 저널 워크북
                      </p>
                    </div>
                  </div>

                  {/* Book 3 */}
                  <div
                    className="relative p-5 sm:p-6 md:p-7 rounded-[12px] border border-[#CBEBDE]/40 flex flex-col justify-between overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.4)] transition-all hover:border-[#CBEBDE]/65 hover:shadow-[0_8px_30px_rgba(203,235,222,0.22)] hover:-translate-y-1 duration-200"
                    style={{ background: 'linear-gradient(145deg, rgba(120, 158, 144, 0.45) 0%, rgba(20, 44, 37, 0.90) 100%)' }}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <span className="inline-flex items-center justify-center py-[6px] px-[14px] rounded-[8px] bg-[#8CD3B6]/25 border border-[#CBEBDE]/45 text-[#FAF7F2] text-[13px] md:text-[14px] font-serif font-bold whitespace-nowrap shadow-sm">
                          Step 3 · 실천
                        </span>
                        <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 text-[#AA8A57]">
                          <Sparkles className="w-6 h-6" />
                        </div>
                      </div>

                      <h4 className="text-[18px] md:text-[20px] font-bold text-[#FAF7F2] font-elegant mt-3 md:mt-3.5 leading-[1.4] break-keep">
                        《풍요의 파동》
                      </h4>
                      <div className="w-8 h-[1px] bg-[#AA8A57]/30 my-2.5 md:my-3" />
                      <p className="text-[16px] text-[#F0EBE2] leading-[1.7] font-normal break-keep">
                        기분의 법칙, 저항의 해체, 8대 감정 파동 즉각 전환 비방전을 담은 특별 잠언서
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </section>

            {/* ═══════════════════════════════════════════════════════════════
                Product Showcase — 3종 올인원 세트 상세 해부
                (풍요비책 구성 목차를 Book 1 본편 상세 소개 안으로 통합!)
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-28 w-full max-w-[1280px] mx-auto">
              <Reveal>
                <div className="space-y-12">
                  {/* Book 1. [본편] 《풍요비책(豊饒秘策) 완전판》 */}
                  <div className="gungjung-glass p-8 md:p-12 border-[#947852]/30 rounded-3xl relative overflow-hidden"
                    style={{
                      background: 'linear-gradient(135deg, rgba(120, 158, 144, 0.42) 0%, rgba(18, 38, 32, 0.92) 100%)',
                      boxShadow: '0 12px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(120, 158, 144, 0.08)'
                    }}>
                    <div className="grid lg:grid-cols-12 gap-10 items-start">
                      <div className="lg:col-span-4">
                        <HybridImageSlot assetKey="book1" className="w-full aspect-[3/4]" />
                      </div>

                      <div className="lg:col-span-8 space-y-6 break-keep">
                        <div>
                          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold text-[#AA8A57] bg-[#8CD3B6]/25 border border-[#CBEBDE]/40 mb-3">
                            📗 Book 1. [본편]
                          </span>
                          <h3 className="text-xl md:text-[24px] font-elegant font-bold text-white mb-2 leading-[1.4] break-keep">
                            《풍요비책(豊饒秘策) 완전판》
                          </h3>
                          <p className="text-[17px] md:text-[18px] text-[#AA8A57] font-semibold leading-[1.6] break-keep">
                            가난을 황금으로 바꾸는 마음의 연금술 (소장용 비밀 마법서)
                          </p>
                        </div>

                        {/* 핵심 내용 ①~⑤ */}
                        <div className="space-y-4 pt-2">
                          <div className="p-4.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5">
                            <h4 className="text-[15px] md:text-[16px] font-bold text-white flex items-center gap-2">
                              <span className="text-[#AA8A57]">①</span> 무의식의 저주와 가난의 3가지 그림자
                            </h4>
                            <p className="text-[15px] md:text-[16px] text-[#EAE4D8] font-light pl-6 leading-[1.6]">
                              결핍(Scarcity), 속박(Bondage), 희생자 마인드(Victim) 심판
                            </p>
                          </div>

                          <div className="p-4.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5">
                            <h4 className="text-[15px] md:text-[16px] font-bold text-white flex items-center gap-2">
                              <span className="text-[#AA8A57]">②</span> 선천코드 5원소(오행) 재물 락 해제 비기
                            </h4>
                            <p className="text-[15px] md:text-[16px] text-[#EAE4D8] font-light pl-6 leading-[1.6]">
                              목·화·토·금·수 기운별 맞춤형 돈그릇 확장법
                            </p>
                          </div>

                          {/* ③ 자본의 흑마법 4대 절대 비기 */}
                          <div className="p-5 rounded-xl bg-[#789E90]/32 border border-[#CBEBDE]/40 space-y-3.5">
                            <h4 className="text-[15px] md:text-[16px] font-bold text-[#FAF7F2] flex items-center gap-2">
                              <span className="text-[#AA8A57]">③</span> 자본의 흑마법 4대 절대 비기
                            </h4>

                            <div className="grid sm:grid-cols-2 gap-3 pl-2 pt-1">
                              <div className="p-3.5 rounded-lg bg-black/40 border border-[#947852]/20 space-y-1">
                                <span className="text-xs font-bold text-[#AA8A57] block">비기 1. [프레임 지배]</span>
                                <p className="text-[13px] md:text-[14px] text-[#EAE4D8] font-light leading-relaxed">
                                  게이트키핑(자격 심사)을 통해 공급자에서 &apos;심판관&apos;으로 지위 역전
                                </p>
                              </div>

                              <div className="p-3.5 rounded-lg bg-black/40 border border-[#947852]/20 space-y-1">
                                <span className="text-xs font-bold text-[#AA8A57] block">비기 2. [신경 연금술]</span>
                                <p className="text-[13px] md:text-[14px] text-[#EAE4D8] font-light leading-relaxed">
                                  뇌섬엽 통증을 마비시키고 &apos;미결정 시 겪을 파멸&apos;로 결제를 구원화
                                </p>
                              </div>

                              <div className="p-3.5 rounded-lg bg-black/40 border border-[#947852]/20 space-y-1">
                                <span className="text-xs font-bold text-[#AA8A57] block">비기 3. [상징 자본]</span>
                                <p className="text-[13px] md:text-[14px] text-[#EAE4D8] font-light leading-relaxed">
                                  스펙 나열을 파괴하고 에르메스처럼 상위 1% 계급의 인장(Seal) 판매
                                </p>
                              </div>

                              <div className="p-3.5 rounded-lg bg-black/40 border border-[#947852]/20 space-y-1">
                                <span className="text-xs font-bold text-[#AA8A57] block">비기 4. [인간 조종술]</span>
                                <p className="text-[13px] md:text-[14px] text-[#EAE4D8] font-light leading-relaxed">
                                  자이가르닉(열린 고리)과 서늘한 침묵으로 상대의 도파민을 감금
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="p-4.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5">
                            <h4 className="text-[15px] md:text-[16px] font-bold text-white flex items-center gap-2">
                              <span className="text-[#AA8A57]">④</span> 착한 가격의 저주 파괴
                            </h4>
                            <p className="text-[15px] md:text-[16px] text-[#EAE4D8] font-light pl-6 leading-[1.6]">
                              헐값 노동의 죄책감을 깨고 내 몸값과 가치를 10배 올리는 가격 결계 3원칙
                            </p>
                          </div>

                          <div className="p-4.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5">
                            <h4 className="text-[15px] md:text-[16px] font-bold text-white flex items-center gap-2">
                              <span className="text-[#AA8A57]">⑤</span> 풍요를 부르는 마음의 법칙 10가지 &amp; 우주 부의 법칙 7가지
                            </h4>
                          </div>
                        </div>

                        {/* [이동 통합] 기존 하단의 별도 ‘풍요비책 구성’ 목차를 Book 1 본편 안으로 이동 */}
                        <div className="pt-6 border-t border-white/10 space-y-4">
                          <h4 className="text-[16px] md:text-[17px] font-bold text-[#AA8A57] flex items-center gap-2">
                            <span>풍요비책 본편 상세 목차</span>
                          </h4>

                          <div className="grid sm:grid-cols-2 gap-3 text-sm">
                            {[
                              { title: "프롤로그", desc: "숨겨진 황금의 문을 열며" },
                              { title: "제1부 봉인 해제: 진단편", desc: "가난의 무의식을 발견하고 진단하는 단계" },
                              { title: "제2부 정화의 연금술: 치유편", desc: "과거에 얽매인 묵은 감정과 돈의 상처 정화" },
                              { title: "제3부 풍요의 코드: 원리편", desc: "부의 본질을 이해하고 풍요의식을 새기는 단계" },
                              { title: "제4부 부의 법칙 7가지: 심화편", desc: "돈을 당기며 순환시키는 7가지 우아한 황금률" },
                              { title: "제5부 창조의 주문: 실전편", desc: "호흡, 시각화, 풍요 언어를 활용한 실천" },
                              { title: "특별 부록. 마음그릇 · 돈그릇", desc: "풍요를 안정적으로 담아내는 용량 키우기" },
                              { title: "실전 챌린지. 21일 풍요 뇌 만들기", desc: "무의식 속에 부의 감각을 각인하는 21일 챌린지" },
                              { title: "에필로그", desc: "부가 오기 전의 징조" }
                            ].map((item, idx) => (
                              <div 
                                key={idx} 
                                className="p-3 rounded-lg bg-black/40 border border-[#947852]/15 flex items-start gap-2.5"
                              >
                                <span className="text-[#AA8A57] font-mono text-xs font-bold shrink-0 mt-0.5">
                                  {idx + 1}.
                                </span>
                                <div>
                                  <p className="font-semibold text-white text-xs md:text-sm">{item.title}</p>
                                  <p className="text-[#EAE4D8] text-[11px] md:text-xs font-light mt-0.5">{item.desc}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Book 2: 《정화와 각성의 서》 */}
                  <div className="gungjung-glass p-8 md:p-12 border-[#947852]/30 rounded-3xl relative overflow-hidden"
                    style={{
                      background: 'linear-gradient(135deg, rgba(120, 158, 144, 0.42) 0%, rgba(18, 38, 32, 0.92) 100%)',
                      boxShadow: '0 12px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(120, 158, 144, 0.08)'
                    }}>
                    <div className="grid lg:grid-cols-12 gap-10 items-start">
                      <div className="lg:col-span-4">
                        <HybridImageSlot assetKey="workbook" className="w-full aspect-[3/4]" />
                      </div>

                      <div className="lg:col-span-8 space-y-6 break-keep">
                        <div>
                          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold text-[#AA8A57] bg-[#8CD3B6]/25 border border-[#CBEBDE]/40 mb-3">
                            📙 Book 2. [실전 워크북]
                          </span>
                          <h3 className="text-xl md:text-[24px] font-elegant font-bold text-white mb-2 leading-[1.4] break-keep">
                            《정화와 각성의 서》
                          </h3>
                          <p className="text-[17px] md:text-[18px] text-[#AA8A57] font-semibold leading-[1.6] break-keep">
                            무의식 정화 실천 워크북 (손으로 직접 쓰는 4~6주 완성 지침서)
                          </p>
                        </div>

                        <div className="space-y-4 pt-2">
                          <div className="p-4.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5">
                            <h4 className="text-[15px] md:text-[16px] font-bold text-white flex items-center gap-2">
                              <span className="text-[#AA8A57]">①</span> 과거 결핍 코드의 물리적 단절
                            </h4>
                            <p className="text-[15px] md:text-[16px] text-[#EAE4D8] font-light pl-6 leading-[1.6]">
                              기억의 도서관 청소, 용서의 편지, 가난 신념 소각식 주문
                            </p>
                          </div>

                          <div className="p-4.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5">
                            <h4 className="text-[15px] md:text-[16px] font-bold text-white flex items-center gap-2">
                              <span className="text-[#AA8A57]">②</span> 비움의 법칙
                            </h4>
                            <p className="text-[15px] md:text-[16px] text-[#EAE4D8] font-light pl-6 leading-[1.6]">
                              지갑 쓰레기 청소, 낡은 옷 폐기, 명현반응(好轉反應) 극복 절대 주문
                            </p>
                          </div>

                          <div className="p-4.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5">
                            <h4 className="text-[15px] md:text-[16px] font-bold text-white flex items-center gap-2">
                              <span className="text-[#AA8A57]">③</span> 나의 풍요 가격 선언문 &amp; 새로운 최상위 정체성 선언서
                            </h4>
                          </div>

                          <div className="p-4.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                            <h4 className="text-[15px] md:text-[16px] font-bold text-white flex items-center gap-2">
                              <span className="text-[#AA8A57]">④</span> 돈그릇 수용 한계선 3단계 확장 실습
                            </h4>
                            <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-[#F0EBE2] pl-6">
                              <span className="px-2.5 py-1 rounded bg-[#8CD3B6]/25 border border-[#CBEBDE]/35">무저항 씨앗 금액</span>
                              <span>➔</span>
                              <span className="px-2.5 py-1 rounded bg-[#8CD3B6]/25 border border-[#CBEBDE]/35">저항 돌파</span>
                              <span>➔</span>
                              <span className="px-2.5 py-1 rounded bg-[#8CD3B6]/25 border border-[#CBEBDE]/35">도약 비노동 순환</span>
                            </div>
                          </div>

                          <div className="p-4.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5">
                            <h4 className="text-[15px] md:text-[16px] font-bold text-white flex items-center gap-2">
                              <span className="text-[#AA8A57]">⑤</span> 심야의 뇌파 해킹 (5초 루프 각인법)
                            </h4>
                            <p className="text-[15px] md:text-[16px] text-[#EAE4D8] font-light pl-6 leading-[1.6]">
                              수면 직전 세타파 상태에서 무의식을 속이는 4K 시각화
                            </p>
                          </div>

                          <div className="p-5 rounded-xl bg-[#789E90]/32 border border-[#CBEBDE]/40 space-y-3.5">
                            <h4 className="text-[15px] md:text-[16px] font-bold text-[#FAF7F2] flex items-center gap-2">
                              <span className="text-[#AA8A57]">⑥</span> 실전 통제 치트키 템플릿 4종
                            </h4>

                            <div className="grid sm:grid-cols-2 gap-3 pl-2 pt-1">
                              <div className="p-3.5 rounded-lg bg-black/40 border border-[#947852]/20 space-y-1">
                                <span className="text-xs font-bold text-[#AA8A57] block">[자격 거절문]</span>
                                <p className="text-[13px] md:text-[14px] text-[#EAE4D8] font-light leading-relaxed">
                                  무례한 요구와 선 넘기를 차단하는 자격 거절문
                                </p>
                              </div>

                              <div className="p-3.5 rounded-lg bg-black/40 border border-[#947852]/20 space-y-1">
                                <span className="text-xs font-bold text-[#AA8A57] block">[제값 선언문]</span>
                                <p className="text-[13px] md:text-[14px] text-[#EAE4D8] font-light leading-relaxed">
                                  헐값 노동과 가격 후려치기를 박살 내는 제값 선언문
                                </p>
                              </div>

                              <div className="p-3.5 rounded-lg bg-black/40 border border-[#947852]/20 space-y-1">
                                <span className="text-xs font-bold text-[#AA8A57] block">[바운더리 선언문]</span>
                                <p className="text-[13px] md:text-[14px] text-[#EAE4D8] font-light leading-relaxed">
                                  에너지 뱀파이어를 쳐내는 바운더리 선언문
                                </p>
                              </div>

                              <div className="p-3.5 rounded-lg bg-black/40 border border-[#947852]/20 space-y-1">
                                <span className="text-xs font-bold text-[#AA8A57] block">[단호한 종결문]</span>
                                <p className="text-[13px] md:text-[14px] text-[#EAE4D8] font-light leading-relaxed">
                                  선택과 마감을 내 통제 아래 두는 단호한 종결문
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="p-4.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5">
                            <h4 className="text-[15px] md:text-[16px] font-bold text-white flex items-center gap-2">
                              <span className="text-[#AA8A57]">⑦</span> 7일 행동 기록장 &amp; 21일 풍요 뇌 데일리 실천 저널
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Book 3: 《풍요의 파동(豊饒의 波動)》 */}
                  <div className="gungjung-glass p-8 md:p-12 border-[#947852]/30 rounded-3xl relative overflow-hidden"
                    style={{
                      background: 'linear-gradient(135deg, rgba(120, 158, 144, 0.42) 0%, rgba(18, 38, 32, 0.92) 100%)',
                      boxShadow: '0 12px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(120, 158, 144, 0.08)'
                    }}>
                    <div className="grid lg:grid-cols-12 gap-10 items-start">
                      <div className="lg:col-span-4">
                        <HybridImageSlot assetKey="wave" className="w-full aspect-[3/4]" />
                      </div>

                      <div className="lg:col-span-8 space-y-6 break-keep">
                        <div>
                          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold text-[#AA8A57] bg-[#8CD3B6]/25 border border-[#CBEBDE]/40 mb-3">
                            📘 Book 3. [특별 외전]
                          </span>
                          <h3 className="text-xl md:text-[24px] font-elegant font-bold text-white mb-2 leading-[1.4] break-keep">
                            《풍요의 파동(豊饒의 波動)》
                          </h3>
                          <p className="text-[17px] md:text-[18px] text-[#AA8A57] font-semibold leading-[1.6] break-keep">
                            기분과 에너지가 운명을 바꾼다 (끌어당김의 본질, 8대 감정 에너지 백과 잠언록)
                          </p>
                        </div>

                        <div className="space-y-4 pt-2">
                          <div className="p-4.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5">
                            <h4 className="text-[15px] md:text-[16px] font-bold text-white flex items-center gap-2">
                              <span className="text-[#AA8A57]">①</span> 5년간의 실증 보고서
                            </h4>
                            <p className="text-[15px] md:text-[16px] text-[#EAE4D8] font-light pl-6 leading-[1.6]">
                              5만 원, 50만 원, 500만 원, 1,000만 원까지 무노동 자본 순환을 일군 &apos;기분의 법칙&apos;
                            </p>
                          </div>

                          <div className="p-4.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5">
                            <h4 className="text-[15px] md:text-[16px] font-bold text-white flex items-center gap-2">
                              <span className="text-[#AA8A57]">②</span> 기분과 감정의 재정의
                            </h4>
                            <p className="text-[15px] md:text-[16px] text-[#EAE4D8] font-light pl-6 leading-[1.6]">
                              감정은 마음의 독백이 아닌 우주망에 쏘아 올리는 &apos;실시간 영적 실행 코드&apos;
                            </p>
                          </div>

                          <div className="p-4.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5">
                            <h4 className="text-[15px] md:text-[16px] font-bold text-white flex items-center gap-2">
                              <span className="text-[#AA8A57]">③</span> 저항의 해체
                            </h4>
                            <p className="text-[15px] md:text-[16px] text-[#EAE4D8] font-light pl-6 leading-[1.6]">
                              &apos;간절히 갈망할수록 결핍이 복제되는 역설&apos;을 부수는 무저항의 기술
                            </p>
                          </div>

                          <div className="p-4.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5">
                            <h4 className="text-[15px] md:text-[16px] font-bold text-white flex items-center gap-2">
                              <span className="text-[#AA8A57]">④</span> 경쾌함의 권능
                            </h4>
                            <p className="text-[15px] md:text-[16px] text-[#EAE4D8] font-light pl-6 leading-[1.6]">
                              가벼운 파동이 무거운 물질 세상을 지배하는 물리 법칙
                            </p>
                          </div>

                          <div className="p-5 rounded-xl bg-[#789E90]/32 border border-[#CBEBDE]/40 space-y-3.5">
                            <h4 className="text-[15px] md:text-[16px] font-bold text-[#FAF7F2] flex items-center gap-2">
                              <span className="text-[#AA8A57]">⑤</span> [권말 특전] 8대 감정 파동 즉각 전환 비방전
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
                                  className="p-3 rounded-lg bg-black/40 border border-[#947852]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs"
                                >
                                  <span className="font-semibold text-white/90 shrink-0">{item.from}</span>
                                  <span className="text-[#EAE4D8] font-light">{item.method}</span>
                                  <span className="font-bold text-[#AA8A57] shrink-0">{item.to}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bonus: 《금옥만당부 모바일 월페이퍼》 */}
                  <div className="gungjung-glass p-8 md:p-12 border-[#947852]/40 rounded-3xl relative overflow-hidden"
                    style={{
                      background: 'linear-gradient(135deg, rgba(120, 158, 144, 0.42) 0%, rgba(18, 38, 32, 0.92) 100%)',
                      boxShadow: '0 12px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(120, 158, 144, 0.08)'
                    }}>
                    <div className="grid lg:grid-cols-12 gap-10 items-center">
                      <div className="lg:col-span-4">
                        <HybridImageSlot assetKey="amulet" className="w-full aspect-[3/4]" />
                      </div>

                      <div className="lg:col-span-8 space-y-6 break-keep">
                        <div>
                          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold text-[#AA8A57] bg-[#8CD3B6]/25 border border-[#CBEBDE]/40 mb-3">
                            ⚜️ Special Bonus. [디지털 부적]
                          </span>
                          <h3 className="text-xl md:text-[24px] font-elegant font-bold text-white mb-2 leading-[1.4] break-keep">
                            금옥만당부 모바일 월페이퍼
                          </h3>
                          <p className="text-[17px] md:text-[18px] text-[#F0EBE2] leading-[1.8] font-normal break-keep">
                            결핍을 지우고 부와 풍요를 끌어당기는 스마트폰 배경화면용 시각적 에너지 결계
                          </p>
                        </div>

                        <div className="p-6 rounded-2xl bg-[#789E90]/32 border border-[#CBEBDE]/40 space-y-4">
                          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
                            <span className="text-[15px] md:text-[16px] font-bold text-white">
                              구성: 본편 + 실전 워크북 + 특별 외전 + 디지털 부적
                            </span>
                            <span className="text-xs px-2.5 py-1 rounded bg-[#8CD3B6]/25 text-[#AA8A57] font-bold border border-[#CBEBDE]/40">
                              4 in 1 구성
                            </span>
                          </div>

                          <div className="flex flex-wrap items-baseline justify-between gap-4">
                            <div className="space-y-1">
                              <span className="text-xs text-[#EAE4D8]">정가 79,000원</span>
                              <div className="text-2xl md:text-3xl font-elegant font-bold text-[#C2A477]">
                                런칭 특가 19,000원 <span className="text-sm text-white/70 font-sans font-normal">(76% OFF)</span>
                              </div>
                            </div>
                            <span className="text-xs text-[#EAE4D8]">
                              * 전자책은 3종이며, 디지털 부적을 포함한 4 in 1 구성입니다.
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </section>

            {/* ═══════════════════════════════════════════════════════════════
                [추가 영역 6] 내지 미리보기 이미지 자리 (BOOK PREVIEW)
               ═══════════════════════════════════════════════════════════════ */}
            {(() => {
              const previewCards = [
                {
                  order: "01",
                  title: "풍요비책 본편",
                  desc: "가난의 무의식을 소각하는 연금술 원리",
                  note: "본문 1쪽",
                  imageSrc: ""
                },
                {
                  order: "02",
                  title: "정화와 각성의 서",
                  desc: "제값 선언문과 21일 풍요 뇌 실천 저널",
                  note: "실전 예시 1쪽",
                  imageSrc: ""
                },
                {
                  order: "03",
                  title: "풍요의 파동",
                  desc: "기분의 법칙과 8대 감정 파동 즉각 전환 비방",
                  note: "작성용 내지 1쪽",
                  imageSrc: ""
                }
              ];
              const hasImages = previewCards.some(card => Boolean(card.imageSrc));
              const showSection = hasImages || isAdminPreview;

              if (!showSection) return null;

              return (
                <div
                  className="mb-14 gungjung-glass p-6 sm:p-8 md:p-12 lg:p-14 rounded-3xl md:rounded-[40px] border border-[#947852]/30 text-center relative overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, rgba(120, 158, 144, 0.42) 0%, rgba(18, 38, 32, 0.92) 100%)',
                    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.4)'
                  }}
                >
                  <span className="text-[#C2A477] font-elegant text-xs font-semibold tracking-[0.2em] uppercase block mb-3">
                    BOOK PREVIEW
                  </span>
                  <h3 className="text-2xl md:text-[36px] font-elegant font-bold text-[#FAF7F2] tracking-wide break-keep mb-4">
                    책 속에서 먼저 만나보세요
                  </h3>
                  <p className="text-[17px] md:text-[18px] text-[#EAE4D8] font-normal max-w-2xl mx-auto leading-[1.8] break-keep mb-8 md:mb-10">
                    부의 의식을 깨우는 본문부터 실전 워크북과 비방전까지,<br className="hidden sm:inline" />
                    《풍요비책》의 실제 내용을 미리 확인해 보세요.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto text-left">
                    {previewCards.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-5 md:p-6 rounded-2xl bg-black/40 border border-[#947852]/25 flex flex-col justify-between hover:border-[#947852]/60 transition-all group"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-[#AA8A57] font-serif font-bold text-xs tracking-wider">
                              {item.order}
                            </span>
                            <span className="inline-flex items-center justify-center py-[4px] px-[10px] rounded-[6px] bg-[#8CD3B6]/25 border border-[#CBEBDE]/40 text-[#FAF7F2] text-[11px] font-bold whitespace-nowrap">
                              {isAdminPreview && !item.imageSrc ? "관리자 확인용" : "미리보기"}
                            </span>
                          </div>

                          <h4 className="text-[#FAF7F2] font-elegant font-bold text-lg mb-2 group-hover:text-[#AA8A57] transition-colors">
                            {item.title}
                          </h4>
                          <p className="text-xs md:text-sm text-[#EAE4D8] leading-relaxed mb-5">
                            {item.desc}
                          </p>
                        </div>

                        <div>
                          {item.imageSrc ? (
                            <div
                              onClick={() => setPreviewModalItem({ title: item.title, imageSrc: item.imageSrc })}
                              className="cursor-pointer group/img relative rounded-xl overflow-hidden border border-[#947852]/30 bg-black/50"
                            >
                              <div className="relative w-full aspect-[3/4]">
                                <Image
                                  src={item.imageSrc}
                                  alt={item.title}
                                  fill
                                  className="object-contain transition-transform duration-300 group-hover/img:scale-105"
                                />
                              </div>
                              <div className="py-2.5 bg-black/70 text-center border-t border-[#947852]/20 flex items-center justify-center gap-1.5 text-xs text-[#AA8A57] font-medium group-hover/img:text-white transition-colors">
                                <Eye className="w-3.5 h-3.5" />
                                <span>눌러서 크게 보기</span>
                              </div>
                            </div>
                          ) : (
                            <div className="py-12 px-4 rounded-xl border border-dashed border-[#947852]/40 bg-[#120818]/60 text-center">
                              <FileText className="w-8 h-8 text-[#947852]/50 mx-auto mb-2" />
                              <p className="text-xs font-medium text-[#AA8A57]">
                                [실제 페이지 이미지 삽입 예정]
                              </p>
                              <p className="text-[11px] text-[#EAE4D8] mt-1">
                                {item.note}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {isAdminPreview && !hasImages && (
                    <div className="mt-8 text-center">
                      <p className="text-xs text-[#AA8A57]/60">
                        ※ 관리자 편집 화면입니다. 실제 내지 이미지가 등록되면 공개 페이지에도 자동으로 활성화됩니다.
                      </p>
                    </div>
                  )}
                </div>
              );
            })()}

            {/* ═══════════════════════════════════════════════════════════════
                중간 패키지 구매 안내 상자 (연애비급 규격 일치)
               ═══════════════════════════════════════════════════════════════ */}
            <div
              className="gungjung-glass rounded-3xl border border-[#947852]/40 relative overflow-hidden shadow-2xl mb-28"
              style={{
                background: 'radial-gradient(ellipse at 50% 0%, rgba(120, 158, 144, 0.45) 0%, rgba(18, 38, 32, 0.92) 100%)',
                boxShadow: '0 12px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(120, 158, 144, 0.08)'
              }}
            >
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 items-stretch break-keep">
                <div className="lg:col-span-5 relative w-full min-h-[260px] sm:min-h-[320px] lg:min-h-full overflow-hidden flex items-center justify-center p-6 sm:p-8">
                  <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
                    <Image
                      src={productData.heroImage}
                      alt="풍요비책 3종 올인원 세트"
                      fill
                      sizes="(max-width: 1024px) 100vw, 45vw"
                      className="object-cover object-center rounded-2xl"
                      priority
                    />
                  </div>
                </div>

                <div className="lg:col-span-7 w-full flex flex-col justify-between space-y-5 sm:space-y-6 text-left p-6 sm:p-8 md:p-10 lg:py-10 lg:pr-10 lg:pl-12">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1.5 flex-1">
                      <span className="text-xs font-elegant font-semibold tracking-wider text-[#C2A477] uppercase block">
                        PACKAGE OVERVIEW
                      </span>
                      <h4 className="text-lg sm:text-xl md:text-[22px] font-elegant font-bold text-[#FAF7F2] leading-[1.4] break-keep">
                        PDF 3종 (본편 + 실전 워크북 + 특별 외전) + 모바일 월페이퍼
                      </h4>
                      <div className="text-sm md:text-base text-[#F0EBE2] font-light space-y-0.5 leading-[1.6]">
                        <p>풍요비책 4 in 1 마스터 패키지</p>
                        <p>금옥만당부 고해상도 디지털 부적 함께 제공</p>
                      </div>
                    </div>

                    <span className="inline-flex items-center justify-center py-[5px] px-[12px] rounded-[6px] bg-[#8CD3B6]/25 border border-[#CBEBDE]/40 text-[#FAF7F2] text-xs font-bold whitespace-nowrap shrink-0 shadow-sm mt-0.5">
                      올인원 패키지
                    </span>
                  </div>

                  <div className="border-b border-white/10" />

                  <div className="space-y-1">
                    <span className="text-xs text-[#EAE4D8]">정가 79,000원</span>
                    <div className="text-2xl sm:text-3xl font-elegant font-bold text-[#C2A477] leading-none">
                      런칭 특가 19,000원 <span className="text-sm text-white/70 font-sans font-normal ml-1.5">(76% OFF)</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2 items-stretch sm:items-center w-full">
                    <button
                      type="button"
                      onClick={handleAddToCart}
                      className="py-3.5 px-5 sm:px-6 rounded-xl font-elegant font-bold text-sm md:text-base border border-[#947852]/60 text-[#AA8A57] hover:bg-[#789E90]/20 hover:border-[#CBEBDE]/50 transition-all duration-300 shrink-0 whitespace-nowrap text-center bg-transparent order-2 sm:order-1"
                    >
                      장바구니 담기
                    </button>
                    <button
                      type="button"
                      onClick={handlePurchase}
                      className="flex-1 py-3.5 px-6 rounded-xl font-elegant font-bold text-sm md:text-base hover:scale-[1.01] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 text-[#FAF7F2] hover:brightness-110 order-1 sm:order-2 cursor-pointer"
                      style={{
                        background: 'linear-gradient(135deg, #3A5F53 0%, #25443B 100%)',
                        border: '1.2px solid #E5C378',
                        boxShadow: '0 0 10px rgba(194, 164, 119, 0.35), 0 3px 10px rgba(0, 0, 0, 0.3)'
                      }}
                    >
                      <span>풍요비책 19,000원에 구매하기</span>
                      <ChevronRight className="w-4 h-4 text-[#FAF7F2] shrink-0" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <EmeraldCloudDivider />

            {/* ═══════════════════════════════════════════════════════════════
                [이동 및 개편] ‘백도화가 전하는 마음의 연금술 비급서’
                (연애비급 활용 가이드 형태: 왼쪽 이미지 + 하단 감성 문구 / 오른쪽 제목, 메시지, 1열 4행 카드, 하단 이용 안내)
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-28 w-full max-w-[1280px] mx-auto">
              <Reveal>
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
                  <div className="flex flex-col lg:justify-between w-full h-full">
                    <div className="relative w-full aspect-[4/5] overflow-hidden rounded-[32px] md:rounded-[40px] border border-[#947852]/30 shadow-2xl bg-black/40 flex items-center justify-center">
                      <Image
                        src={productData.premiumImage}
                        alt="백도화 풍요비책 실전 활용 가이드"
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-contain"
                      />
                    </div>

                    <div className="mt-6 md:mt-7 w-full flex flex-col items-center text-center justify-center min-h-[48px]">
                      <div className="flex items-center justify-center gap-3 w-full">
                        <div className="h-[1px] w-8 sm:w-12 bg-gradient-to-r from-transparent to-[#947852]/60" />
                        <p className="font-elegant text-[15px] sm:text-[16px] text-[#AA8A57] tracking-wide">
                          비우고, 채우고, 나의 것으로.
                        </p>
                        <div className="h-[1px] w-8 sm:w-12 bg-gradient-to-l from-transparent to-[#947852]/60" />
                      </div>
                      <p className="text-[12px] sm:text-[13px] text-[#FAF7F2]/75 mt-1.5 tracking-wider font-light">
                        내 안의 황금 문을 열고 부의 그릇을 넓히는 시간
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col lg:justify-between w-full h-full text-left break-keep">
                    <div className="space-y-6 md:space-y-7">
                      <div>
                        <h2 className="font-elegant font-bold leading-[1.3] text-left">
                          <span className="block text-2xl md:text-[28px] text-[#C2A477]">
                            《풍요비책》
                          </span>
                          <span className="block text-3xl md:text-[36px] lg:text-[40px] text-[#FAF7F2] mt-1.5 break-keep">
                            실전 200% 활용 가이드
                          </span>
                        </h2>
                      </div>

                      <div className="pt-1">
                        <p className="text-[20px] md:text-[24px] font-elegant font-bold text-[#FAF7F2] leading-[1.6] break-keep">
                          “단순한 재테크서가 아닙니다.<br className="hidden sm:inline" />
                          {' '}백도화가 전하는 <span className="text-[#AA8A57]">‘마음의 연금술 비급서’</span>”
                        </p>
                      </div>

                      <div className="text-[16px] md:text-[18px] text-[#EAE4D8] leading-[1.8] font-normal break-keep">
                        <p>
                          풍요비책은 돈을 더 간절히 쫓는 방법이 아니라, 내 안의 결핍 신호를 알아차리고 풍요가 머물 수 있는 마음의 공간을 만드는 법을 다룹니다.
                        </p>
                        <p>
                          진단, 정화, 비움, 감사, 순환, 언어, 호흡, 시각화, 그리고 21일 루틴을 망라한 백도화식 프리미엄 풍요의식 구조서입니다.
                        </p>
                      </div>

                      {/* 1열 4행 슬림 미색 한지 카드 */}
                      <div className="flex flex-col gap-2 md:gap-2.5 pt-1">
                        {[
                          {
                            title: "1. 가난의 무의식과 결핍 신호 진단",
                            desc: "과거에 얽매인 돈의 상처와 무의식적 죄책감을 스스로 점검하세요."
                          },
                          {
                            title: "2. 감정 정화와 비움의 법칙 실천",
                            desc: "지갑 청소와 불필요한 소비를 비워내고 풍요가 머물 공간을 만드세요."
                          },
                          {
                            title: "3. 선천코드와 4대 머니 메커니즘",
                            desc: "나만의 고유 가치를 디지털 자산으로 치환하는 공식을 적용하세요."
                          },
                          {
                            title: "4. 21일 풍요 뇌 데일리 실천 저널",
                            desc: "무의식 속에 부의 주파수를 각인하고 돈그릇을 확장하세요."
                          }
                        ].map((item, idx) => (
                          <div
                            key={idx}
                            style={{
                              backgroundColor: '#F7F1E5',
                              borderColor: 'rgba(206, 175, 153, 0.55)',
                              boxShadow: '0 3px 10px -2px rgba(35, 20, 30, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.95)',
                            }}
                            className="group relative p-[11px_18px] md:p-[12px_22px] rounded-[12px] md:rounded-[14px] border flex items-start gap-3 md:gap-4 transition-all duration-300 hover:border-[#947852] overflow-hidden"
                          >
                            <div className="shrink-0 mt-0.5 relative z-10">
                              <div
                                style={{ backgroundColor: 'rgba(140, 211, 182, 0.20)' }}
                                className="w-6 h-6 md:w-[26px] md:h-[26px] rounded-full flex items-center justify-center p-1 border border-[#CBEBDE]/40 shadow-none"
                              >
                                <Check className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#FAF7F2] stroke-[2.4]" />
                              </div>
                            </div>

                            <div className="flex flex-col text-left w-full relative z-10">
                              <h3 className="text-[16px] md:text-[18px] text-[#362822] font-semibold leading-[1.3] break-keep">
                                {item.title}
                              </h3>
                              <p className="text-[15px] md:text-[16px] text-[#634E45] mt-0.5 font-normal leading-[1.45] break-keep">
                                {item.desc}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* 이용 안내 2개 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 lg:mt-auto pt-4 md:pt-5 border-t border-[#947852]/25 min-h-[48px] items-center">
                      {[
                        {
                          title: "휴대폰·태블릿·PC에서 열람",
                          desc: "PDF를 지원하는 기기에서 언제든 확인하세요."
                        },
                        {
                          title: "한번 다운로드로 평생소장",
                          desc: "흔들릴 때마다 즉시 꺼내보는 나만의 무기."
                        }
                      ].map((info, idx) => (
                        <div key={idx} className="flex items-start gap-2.5">
                          <div
                            style={{ backgroundColor: 'rgba(140, 211, 182, 0.20)' }}
                            className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 border border-[#CBEBDE]/40 shadow-none"
                          >
                            <Check className="w-3 h-3 text-[#FAF7F2] stroke-[2.4]" />
                          </div>
                          <div className="flex flex-col text-left">
                            <span className="text-[13px] md:text-[14px] font-semibold text-[#EAE4D8] break-keep">
                              {info.title}
                            </span>
                            <span className="text-[12px] md:text-[13px] text-[#EAE4D8] mt-0.5 leading-relaxed break-keep">
                              {info.desc}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            </section>

            <EmeraldCloudDivider />

            {/* ═══════════════════════════════════════════════════════════════
                Section 5: Social Proof (실전 체감 사례)
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-28 text-left w-full max-w-[1280px] mx-auto">
              <Reveal>
                <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
                  <span className="text-[#C2A477] font-elegant tracking-[0.2em] text-xs uppercase">
                    Real Life Transformations
                  </span>
                  <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white tracking-wide leading-[1.4] break-keep">
                    실전 체감 사례
                  </h2>
                  <p className="text-[17px] md:text-[18px] text-[#F0EBE2] leading-[1.8] font-normal break-keep">
                    풍요비책을 실천한 분들의 실제 삶에 일어난 감정과 통장의 구체적인 변화입니다.
                  </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-10 items-center">
                  <div className="lg:col-span-5">
                    <HybridImageSlot 
                      assetKey="proof" 
                      className="w-full aspect-[4/3] md:aspect-square"
                    />
                  </div>

                  <div className="lg:col-span-7 space-y-6">
                    <div 
                      className="gungjung-glass p-8 md:p-10 border-[#947852]/30 rounded-3xl relative overflow-hidden min-h-[220px] flex flex-col justify-between"
                      style={{
                        background: 'linear-gradient(135deg, rgba(120, 158, 144, 0.42) 0%, rgba(18, 38, 32, 0.92) 100%)',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)'
                      }}
                    >
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="px-3 py-1 rounded-full text-xs font-bold text-[#AA8A57] bg-[#8CD3B6]/25 border border-[#CBEBDE]/40">
                            {reviewCards[reviewIndex].badge}
                          </span>
                          <span className="text-xs text-[#AA8A57]/60 font-mono">
                            {reviewCards[reviewIndex].tag}
                          </span>
                        </div>
                        <p className="text-[17px] md:text-[18px] font-elegant font-semibold text-white leading-[1.7] break-keep">
                          &ldquo;{reviewCards[reviewIndex].quote}&rdquo;
                        </p>
                      </div>

                      <div className="flex items-center justify-between pt-6 border-t border-white/5 mt-4">
                        <div className="flex items-center gap-2">
                          {reviewCards.map((_, idx) => (
                            <button
                              key={idx}
                              onClick={() => setReviewIndex(idx)}
                              className={`h-2 rounded-full transition-all ${
                                reviewIndex === idx ? 'w-6 bg-[#AA8A57]' : 'w-2 bg-white/20'
                              }`}
                              aria-label={`리뷰 ${idx + 1} 보기`}
                            />
                          ))}
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={prevReview}
                            className="p-2.5 rounded-full border border-white/10 hover:border-[#947852]/50 bg-white/[0.02] hover:bg-white/[0.05] text-[#EAE4D8] transition-all"
                            aria-label="이전 후기"
                          >
                            <ChevronLeft className="w-4 h-4" />
                          </button>
                          <button
                            onClick={nextReview}
                            className="p-2.5 rounded-full border border-white/10 hover:border-[#947852]/50 bg-white/[0.02] hover:bg-white/[0.05] text-[#EAE4D8] transition-all"
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
                Section 6: Comparison Table (가치 비교표)
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-28 text-left w-full max-w-[1280px] mx-auto">
              <Reveal>
                <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
                  <span className="text-[#C2A477] font-elegant tracking-[0.2em] text-xs uppercase">
                    Value Comparison
                  </span>
                  <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white tracking-wide leading-[1.4] break-keep">
                    가치 비교표
                  </h2>
                  <p className="text-[17px] md:text-[18px] text-[#F0EBE2] leading-[1.8] font-normal break-keep">
                    일반 재테크 강의나 뜬구름 잡는 확언과는 완전히 다른 차원의 실전 연금술입니다.
                  </p>
                </div>

                <div className="overflow-x-auto rounded-3xl border border-[#947852]/40 shadow-2xl bg-[#789E90]/32 border border-[#CBEBDE]/40 shadow-2xl backdrop-blur-sm">
                  <table className="w-full text-left border-collapse min-w-[640px]">
                    <thead>
                      <tr className="border-b border-[#947852]/30 bg-black/40">
                        <th className="py-5 px-6 text-[15px] md:text-[16px] font-bold text-[#EAE4D8] w-1/4">구분</th>
                        <th className="py-5 px-6 text-[15px] md:text-[16px] font-bold text-[#EAE4D8] w-1/4">일반 재테크 강의</th>
                        <th className="py-5 px-6 text-[15px] md:text-[16px] font-bold text-[#EAE4D8] w-1/4">뜬구름 잡는 끌어당김</th>
                        <th className="py-5 px-6 text-[15px] md:text-[16px] font-bold text-[#AA8A57] bg-[#8CD3B6]/30 border-l border-r border-[#CBEBDE]/40 w-1/4">
                          백도화 풍요비책 3종 세트
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 text-[15px] md:text-[16px]">
                      <tr className="hover:bg-white/[0.01] transition-colors">
                        <td className="py-5 px-6 font-bold text-white">비용</td>
                        <td className="py-5 px-6 text-[#EAE4D8]">수십~수백만 원</td>
                        <td className="py-5 px-6 text-[#EAE4D8]">1~2만 원</td>
                        <td className="py-5 px-6 font-bold text-[#FAF7F2] bg-[#789E90]/32 border-l border-r border-[#CBEBDE]/40">
                          <span className="text-[#AA8A57] text-base">단 19,000원</span> (영구 소장)
                        </td>
                      </tr>

                      <tr className="hover:bg-white/[0.01] transition-colors">
                        <td className="py-5 px-6 font-bold text-white">내용</td>
                        <td className="py-5 px-6 text-[#EAE4D8]">노동 중심 테크닉</td>
                        <td className="py-5 px-6 text-[#EAE4D8]">뜬구름 잡는 위로</td>
                        <td className="py-5 px-6 font-bold text-[#FAF7F2] bg-[#789E90]/32 border-l border-r border-[#CBEBDE]/40">
                          뇌신경 재배선 + 자본의 흑마법
                        </td>
                      </tr>

                      <tr className="hover:bg-white/[0.01] transition-colors">
                        <td className="py-5 px-6 font-bold text-white">도구</td>
                        <td className="py-5 px-6 text-[#EAE4D8]">없음</td>
                        <td className="py-5 px-6 text-[#EAE4D8]">확언 몇 줄</td>
                        <td className="py-5 px-6 font-bold text-[#FAF7F2] bg-[#789E90]/32 border-l border-r border-[#CBEBDE]/40">
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
                [통합 위치 정리] FAQ — 가치 비교 다음, 구매 전 안내 앞으로 8문항 전체 통합
               ═══════════════════════════════════════════════════════════════ */}
            <section id="faq" className="mb-28 text-left max-w-4xl mx-auto">
              <Reveal>
                <div className="text-center space-y-4 mb-14">
                  <span className="text-[#C2A477] font-elegant text-[12pt] font-semibold tracking-[0.2em] uppercase block">
                    Frequently Asked Questions
                  </span>
                  <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white tracking-wide leading-[1.45]">
                    자주 묻는 <span className="text-[#C2A477]">질문</span>
                  </h2>
                  <p className="text-[17px] md:text-[18px] text-[#F0EBE2] leading-[1.8] font-normal break-keep">
                    구매 전 궁금해하시는 핵심 질문을 모았습니다.
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      num: "Q1",
                      q: "단순한 ‘끌어당김의 법칙’이나 뜬구름 잡는 명상 이야기인가요?",
                      a: "전혀 아닙니다. 무의식의 결핍을 지우는 마인드셋은 출발점일 뿐입니다. 《풍요비책》은 나의 지식과 경험을 어떻게 디지털 상품으로 바꾸고, 24시간 판매 동선을 짜는지에 대한 실전 비즈니스 매뉴얼을 함께 제공합니다."
                    },
                    {
                      num: "Q2",
                      q: "특별한 전문성이나 자본금이 전혀 없는 평범한 사람도 가능한가요?",
                      a: "자본금 0원으로 시작하는 1인 지식창업 모델을 다룹니다. 남들은 대단하게 생각하지 않는 나의 작은 극복 경험, 취미, 관심사를 가치 있는 지식재산(IP)으로 전환하는 구체적 프레임워크를 알려드립니다."
                    },
                    {
                      num: "Q3",
                      q: "책을 읽고 나면 당장 무엇부터 실행해야 할지 막막하지 않을까요?",
                      a: "함께 제공되는 《정화와 각성의 서 워크북》과 《자산화 템플릿》을 통해 오늘부터 버려야 할 소비 습관과 상품 기획 아이디어를 빈칸 채우기 방식으로 완성할 수 있도록 돕습니다."
                    },
                    {
                      num: "Q4",
                      q: "시크릿이나 기존 끌어당김 서적과 무엇이 다른가요?",
                      a: "뜬구름 잡는 막연한 긍정 확언이 아닙니다. 풍요비책은 뇌신경망 재배선과 결핍의 무의식 코드를 직접 소각하고, 자본의 흑마법과 선천코드 오행 분석을 결합하여 실질적인 부의 통로를 여는 현실적이고 구체적인 심리·에너지 연금술 지침서입니다."
                    },
                    {
                      num: "Q5",
                      q: "직장인이나 주부도 적용할 수 있나요?",
                      a: "네, 당연히 가능합니다. 사업가뿐만 아니라 직장인, 주부, 프리랜서 등 돈을 벌고 소비하는 모든 사람이 겪는 5대 저주(누수, 죄책감, 구걸 등)를 치유하고, 21일 데일리 실천 저널과 4대 실전 템플릿을 통해 일상 속에서 즉시 부의 주파수를 동기화할 수 있습니다."
                    },
                    {
                      num: "Q6",
                      q: "선천코드 분석의 난이도는 어떤가요?",
                      a: "사주나 명리학에 대한 전문 지식이 전혀 없어도 누구나 자신의 타고난 오행(목·화·토·금·수) 기운과 돈맥 누수 지점을 쉽게 파악하고 돈그릇을 확장할 수 있도록 친절하고 직관적인 가이드로 구성되어 있습니다."
                    },
                    {
                      num: "Q7",
                      q: "구매 후 다운로드는 어떻게 진행되나요?",
                      a: "본 상품은 실물 배송이 없는 디지털 전자책(PDF) 및 모바일 월페이퍼 패키지입니다. 결제 완료 즉시 마이페이지 또는 등록된 이메일 안내를 통해 언제 어디서나 기기 제한 없이 영구 소장하여 즉시 열람 및 다운로드하실 수 있습니다."
                    },
                    {
                      num: "Q8",
                      q: "특정 금액의 수익 성과를 보장하나요?",
                      a: "본 전자책은 풍요의식 형성과 자기이해, 지식자산화를 돕기 위한 자기계발 콘텐츠이며, 특정 금액의 수익 성과나 투자 성공을 무조건적으로 보장하지는 않습니다. 스스로의 삶과 경제적 그릇을 건강하게 확장하기 위한 목적으로 활용해 주시기 바랍니다."
                    }
                  ].map((faq, idx) => {
                    const isOpen = openFaq === idx
                    return (
                      <div 
                        key={idx}
                        className="gungjung-glass rounded-2xl border border-[#CBEBDE]/20 overflow-hidden transition-all duration-300"
                        style={{
                          background: isOpen ? 'rgba(120, 158, 144, 0.38)' : 'rgba(255, 255, 255, 0.01)'
                        }}
                      >
                        <button
                          type="button"
                          onClick={() => toggleFaq(idx)}
                          aria-expanded={isOpen}
                          className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 text-white hover:text-[#AA8A57] transition-colors focus:outline-none focus:ring-1 focus:ring-[#947852]/40"
                        >
                          <div className="flex items-center gap-3 md:gap-3.5">
                            <span className="text-xs font-bold text-[#AA8A57] font-serif shrink-0">
                              {faq.num}
                            </span>
                            <span className="text-base md:text-lg font-elegant font-semibold leading-[1.5] text-white">
                              {faq.q}
                            </span>
                          </div>
                          <ChevronDown 
                            className={`w-5 h-5 text-[#AA8A57] shrink-0 transition-transform duration-300 ${
                              isOpen ? 'rotate-180' : ''
                            }`} 
                          />
                        </button>

                        {isOpen && (
                          <div className="px-6 pb-6 pt-2.5 text-[15px] md:text-[16px] text-[#EAE4D8] leading-[1.8] font-light border-t border-white/5 break-keep">
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
                구매 전 안내 (기존 보존)
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-28 w-full max-w-[1280px] mx-auto">
              <Reveal>
                <div className="gungjung-glass p-8 md:p-12 border-white/5 text-left w-full max-w-[1280px] mx-auto break-keep">
                  <h2 className="text-2xl md:text-[36px] font-elegant font-bold mb-10 text-white border-l-4 border-[#947852] pl-6 leading-[1.4] break-keep">
                    구매 전 안내
                  </h2>
                  <ul className="space-y-4 text-[15px] md:text-[16px] text-[#EAE4D8] font-light leading-[1.7]">
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
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#AA8A57] shrink-0"></span>
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </section>

            {/* ═══════════════════════════════════════════════════════════════
                [수정] 감성 이미지 영역 (버튼 디자인 -> 연애비급 감성 텍스트 링크로 교체)
               ═══════════════════════════════════════════════════════════════ */}
            <section className="relative aspect-[16/9] md:aspect-video overflow-hidden rounded-[32px] md:rounded-[40px] mb-20 group border border-[#947852]/40 shadow-2xl w-full max-w-[1280px] mx-auto bg-[#082E1E]">
              <div className="absolute inset-0 z-0">
                <Image 
                  src={productData.ctaImage} 
                  alt="내 안의 황금 문을 여는 시간" 
                  fill 
                  className="object-cover transition-transform duration-[10000ms] group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0514] via-[#182924]/60 to-black/80 mix-blend-multiply" />
                <div className="absolute inset-0 bg-[#0a0514]/40" />
              </div>

              <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 md:px-10 text-center max-w-5xl mx-auto space-y-6 md:space-y-8 break-keep">
                <Reveal>
                  <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white leading-[1.4] break-keep">
                    내 안의 황금 문을 여는 시간
                  </h2>
                  <p className="text-[17px] md:text-[18px] text-[#F0EBE2] leading-[1.8] font-normal max-w-xl mx-auto break-keep">
                    풍요는 더 많이 쫓는 사람에게만 오는 것이 아니라, 받아들일 준비가 된 마음에 오래 머무릅니다.<br/>
                    결핍을 반복하던 무의식에서 벗어나 나의 감정, 언어, 소비, 감사, 실천 루틴을 새롭게 정렬해 보세요.
                  </p>
                  
                  {/* 연애비급 방식의 배경 없는 감성 텍스트 링크 */}
                  <div className="pt-4 sm:pt-6">
                    <a
                      href="#final-purchase"
                      onClick={(e) => {
                        e.preventDefault()
                        const target = document.getElementById('final-purchase')
                        if (target) {
                          target.scrollIntoView({ behavior: 'smooth' })
                        }
                      }}
                      className="group inline-flex flex-col items-center py-2.5 -my-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#AA8A57]/60 rounded-sm cursor-pointer"
                      aria-label="마르지 않는 풍요의 그릇 완성하기 (하단 구매 영역으로 이동)"
                    >
                      <div className="inline-flex items-center gap-2 text-[#AA8A57] group-hover:text-[#FFF1E9] font-elegant font-medium text-[17px] sm:text-[18px] md:text-[21px] tracking-wide transition-colors duration-300">
                        <span>마르지 않는 풍요의 그릇 완성하기</span>
                        <span className="inline-block transform group-hover:translate-x-1 transition-transform duration-300 ease-out text-[19px] sm:text-[20px] md:text-[22px]">
                          →
                        </span>
                      </div>
                      <span className="h-[1.5px] w-[45%] group-hover:w-full bg-[#AA8A57]/60 group-hover:bg-[#FFF1E9]/80 transition-[width,background-color] duration-300 ease-out mt-1.5" />
                    </a>
                  </div>
                </Reveal>
              </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════
                [수정] 마지막 가격·구매 영역 (연애비급의 바깥 큰 상자 없는 배치 + 안쪽 구매 카드 디자인)
               ═══════════════════════════════════════════════════════════════ */}
            <section id="final-purchase" className="scroll-mt-24 md:scroll-mt-28 pt-12 md:pt-16 mb-24 text-center max-w-4xl mx-auto px-4">
              <div className="max-w-[820px] mx-auto break-keep">
                <Reveal>
                  <div className="max-w-3xl mx-auto mb-14 md:mb-16">
                    <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white leading-[1.4] break-keep mb-5 md:mb-6">
                      내일도 가격표 앞에서 망설이며<br />
                      <span className="text-[#AA8A57]">통장의 결핍</span>에 갇혀 계시겠습니까?
                    </h2>

                    <div className="space-y-5 md:space-y-6 text-center break-keep">
                      <p className="text-[#F0EBE2] text-[16px] sm:text-[17px] md:text-[18px] font-normal leading-[1.7] break-keep">
                        생각을 바꾸지 않으면 10년 후에도 똑같이 시간에 쫓기며 돈을 걱정합니다.
                      </p>

                      <div className="py-1">
                        <p className="font-elegant font-semibold text-[19px] sm:text-[20px] md:text-[22px] text-[#FAF7F2] leading-[1.7] break-keep tracking-wide">
                          &ldquo;돈은 쫓아가는 자에게 머물지 않고,<br />
                          <span className="text-[#AA8A57]">자신의 그릇을 당당하게 넓힌 자</span>에게 흘러듭니다.&rdquo;
                        </p>
                      </div>

                      <p className="text-[#F0EBE2] text-[16px] sm:text-[17px] md:text-[18px] font-normal leading-[1.8] break-keep">
                        돈을 쫓아가는 삶을 멈추고, 돈이 나를 찾아오게 만드십시오.<br />
                        단 19,000원으로 평생을 관통하는 부의 회로를 소장하십시오.
                      </p>
                    </div>
                  </div>

                  {/* 안쪽 구매 카드 (연애비급 디자인 규격 일치) */}
                  <div
                    className="px-6 sm:px-10 md:px-12 py-10 md:py-12 rounded-2xl md:rounded-3xl border border-[#947852]/40 relative shadow-2xl text-center"
                    style={{
                      background: 'radial-gradient(ellipse at 50% 0%, rgba(120, 158, 144, 0.45) 0%, rgba(18, 38, 32, 0.92) 100%)'
                    }}
                  >
                    <h3 className="text-lg sm:text-xl md:text-2xl font-elegant font-bold text-white leading-[1.4] break-keep mb-2">
                      백도화 풍요비책 올인원 패키지 (PDF 3종 + 금옥만당부)
                    </h3>

                    <p className="text-[18px] text-[#FAF7F2] font-semibold break-keep mb-1.5">
                      완전판 바이블 + 자산화 시크릿북 + 실전 풍요 워크북
                    </p>

                    <p className="text-[15px] sm:text-[16px] text-[#AA8A57] font-medium break-keep mb-6 md:mb-7">
                      ✦ 특별 부록 금옥만당부(金玉滿堂符) 모바일 디지털 부적
                    </p>

                    <div className="flex flex-wrap items-baseline justify-center gap-3 mb-6 md:mb-7">
                      <span className="text-4xl md:text-5xl font-elegant font-bold text-[#C2A477] tracking-tight">
                        19,000원
                      </span>
                      <span className="text-base md:text-lg text-[#EDE6DA]/40 line-through">
                        정가 79,000원
                      </span>
                      <span className="inline-flex items-center justify-center py-[5px] px-[12px] rounded-[6px] bg-[#8CD3B6]/20 border border-[#CBEBDE]/40 text-[#FAF7F2] text-xs md:text-sm font-bold whitespace-nowrap">
                        76% OFF
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={handlePurchase}
                      className="w-full py-4 md:py-4.5 px-6 rounded-xl font-elegant font-bold text-base md:text-lg hover:scale-[1.01] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 text-[#FAF7F2] hover:brightness-110 cursor-pointer mb-3.5 md:mb-4"
                      style={{
                        background: 'linear-gradient(135deg, #3A5F53 0%, #25443B 100%)',
                        border: '1.2px solid #E5C378',
                        boxShadow: '0 0 12px rgba(194, 164, 119, 0.38), 0 3px 12px rgba(0, 0, 0, 0.3)'
                      }}
                    >
                      <Sparkles className="w-5 h-5 text-[#E5C378] shrink-0" />
                      <span>풍요비책 19,000원에 구매하기</span>
                      <ChevronRight className="w-5 h-5 text-[#FAF7F2] shrink-0" />
                    </button>

                    <p className="text-[15px] sm:text-base text-[#F0EBE2] font-normal break-keep mb-2">
                      한 번의 구매로 영구 소장하며, 필요한 순간마다 꺼내 볼 수 있습니다.
                    </p>

                    <p className="text-xs sm:text-[13px] text-[#EAE4D8] font-light break-keep">
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
                  <Link href="/terms" className="hover:text-[#AA8A57] transition-colors">이용약관</Link>
                  <Link href="/privacy" className="hover:text-[#AA8A57] transition-colors">개인정보처리방침</Link>
                  <Link href="/refund" className="hover:text-[#AA8A57] transition-colors">배송 및 환불정책</Link>
                </div>
              </Reveal>
            </section>

          </div>
        </div>

        <Footer />

        {/* 📱 모바일 화면 하단 고정 구매 바 */}
        <MobileStickyBuyBar
          price={productData.price}
          onPurchase={handlePurchase}
          buttonText="풍요비책 구매하기 →"
        />
      </GlobalBackground>

      {/* 🔍 책 속 미리보기 고해상도 확대 모달 */}
      {previewModalItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6 overflow-y-auto"
          onClick={() => setPreviewModalItem(null)}
        >
          <div
            className="relative max-w-3xl w-full max-h-[90vh] bg-[#0E1B17] border border-[#CBEBDE]/40 rounded-2xl md:rounded-3xl p-4 sm:p-6 overflow-auto shadow-2xl flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full flex items-center justify-between pb-3 mb-3 border-b border-white/10">
              <span className="text-sm sm:text-base font-elegant font-bold text-[#FAF7F2]">
                {previewModalItem.title}
              </span>
              <button
                type="button"
                onClick={() => setPreviewModalItem(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-[#FAF7F2] flex items-center justify-center transition-colors text-sm font-bold"
                aria-label="닫기"
              >
                ✕
              </button>
            </div>

            <div className="relative w-full max-w-xl aspect-[3/4] rounded-xl overflow-hidden bg-black/60 flex items-center justify-center">
              <img
                src={previewModalItem.imageSrc}
                alt={previewModalItem.title}
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-xs text-[#EAE4D8] mt-3 text-center">
              터치하거나 스크롤하여 세부 본문 내용을 읽으실 수 있습니다.
            </p>
          </div>
        </div>
      )}
    </main>
  )
}
