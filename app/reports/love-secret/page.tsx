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
import { loveSecretAssets } from './assets'

// ═══════════════════════════════════════════════════════════════════════════
// 📦 상품 기본 정보 및 결제 연동 설정 (연애비급 고유 정보 유지)
// ═══════════════════════════════════════════════════════════════════════════
const productData = {
  productId: 'love-secret-ebook',
  slug: 'love-secret',
  title: '연애비급',
  titleEn: 'Love Secret',
  type: 'digital_ebook',
  category: 'reports',
  path: '/reports/love-secret',
  checkoutUrl: '/checkout?productId=love-secret-ebook',
  price: 19000,
  regularPrice: 79000,
  discountRate: '76% OFF',

  topBannerImage: '/image/love-secret/love-secret-hero.png',
  heroImage: '/image/love-secret/package-mockup2.png',
  overviewImage: '/image/love-secret/love-secret-your-choice-3x4.png',
  recommendedImage: '/image/love-secret/love-secret-keep-yourself-3x4.png',
  structureImage: '/image/love/l4.webp',
  premiumImage: '/image/love-secret/love-secret-contents.png?v=20261102_v2',
  ctaImage: '/image/love-secret/love-secret-closing-banner.png?v=20261102',
}

// 🖼️ 신규 교체형 이미지 슬롯 컴포넌트
// (로즈골드 #D4B2A7 / 샴페인 골드 #D4B2A7 테두리와 딥 버건디 로즈 배경의 고급 플레이스홀더)
function HybridImageSlot({
  assetKey,
  className = '',
  imgClassName = '',
}: {
  assetKey: keyof typeof loveSecretAssets
  className?: string
  imgClassName?: string
}) {
  const asset = loveSecretAssets[assetKey]
  const [hasError, setHasError] = useState(false)
  const isPlaceholderPath = !asset.src || asset.src.includes('placeholder')

  return (
    <div className={`relative overflow-hidden rounded-2xl md:rounded-3xl border border-[#D4B2A7]/40 bg-gradient-to-br from-[#4A232B]/40 via-[#2A0A14]/70 to-[#0A0514] shadow-xl flex items-center justify-center ${asset.aspectRatio} ${className}`}>
      {!hasError && !isPlaceholderPath ? (
        <img
          src={asset.src}
          alt={asset.alt}
          onError={() => setHasError(true)}
          style={{ objectFit: asset.objectFit }}
          className={`w-full h-full transition-transform duration-500 hover:scale-[1.02] ${imgClassName}`}
        />
      ) : (
        <div className="flex flex-col items-center justify-center p-6 text-center space-y-3 z-10 w-full h-full bg-[#2A0A14]/85 backdrop-blur-sm border border-[#D4B2A7]/25">
          <div className="w-12 h-12 rounded-full bg-[#8B263E]/60 border border-[#D4B2A7]/50 flex items-center justify-center text-[#D4B2A7] shadow-[0_0_15px_rgba(212,178,167,0.25)]">
            <ImageIcon className="w-6 h-6 opacity-90" />
          </div>
          <div>
            <span className="inline-block px-3 py-0.5 rounded-full text-[10px] tracking-wider uppercase font-bold text-[#FAF6EE] bg-[#A66B73] border border-[#D4B2A7]/30 mb-2">
              {asset.placeholderLabel}
            </span>
            <p className="text-sm md:text-base font-elegant font-bold text-[#FAF7F2] break-keep">
              {asset.alt}
            </p>
          </div>
          <span className="text-[11px] text-[#D4B2A7]/80 font-mono bg-black/50 px-3 py-1 rounded border border-[#D4B2A7]/30">
            {asset.description}
          </span>
        </div>
      )}
    </div>
  )
}

// 📦 3종 올인원 세트 패키지 목업 이미지 (캐시 방지 버전 쿼리 적용)
const PACKAGE_MOCKUP_IMAGE = '/images/love-secret/package-mockup.png?v=20261101_v2'

// 📚 개별 도서 3:4 목업 이미지 (캐시 방지 버전 쿼리 적용)
const BOOK_MOCKUPS = {
  book1: '/images/love-secret/book1-love-mockup.png?v=20261101_v2',       // Book 1: 최신 단독 책 목업 이미지
  book2: '/images/love-secret/book2-secret-mockup.png',     // Book 2: 금빛 열쇠 《매혹의 무의식 침투 프로토콜》
  book3: '/images/love-secret/book3-workbook-mockup.png',   // Book 3: 핫핑크 남녀 실루엣 《30일 매력 각성 워크북》
}

export default function LoveSecretEbookPage() {
  useScrollAnimation()
  const router = useRouter()

  // 인포그래픽 및 패키지 목업 확대 모달 상태

  // FAQ 아코디언 상태 관리 (첫 번째 질문 기본 오픈)
  // 관리자·편집 화면 전용 미리보기 상태 (?preview=admin 파라미터 또는 개발 환경)
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

  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  // 실전 체감 사례 슬라이더 인덱스 관리
  const [reviewIndex, setReviewIndex] = useState(0)
  const reviewCards = [
    {
      id: 1,
      badge: "사례 01 · 비소유 신호",
      quote: "항상 헌신하다 차이기 일쑤였는데, 비소유 신호를 체화하자마자 남친이 주말마다 제 눈치를 보며 데이트 코스를 짜옵니다.",
      tag: "#비소유신호 #트로피포지션"
    },
    {
      id: 2,
      badge: "사례 02 · 프레임 장악",
      quote: "간 보며 어장관리하던 남자에게 프로토콜 5번을 날렸더니, 다음 날 꽃다발 들고 집 앞으로 찾아와 고백했습니다.",
      tag: "#반사구 #어장관리격퇴"
    },
    {
      id: 3,
      badge: "사례 03 · 장기 연애 텐션 소생",
      quote: "권태기로 식어버렸던 4년 장기 연애, 오감 앵커링과 간헐적 보상을 쓰자 연애 초반처럼 눈빛이 뜨겁게 변했습니다.",
      tag: "#오감앵커링 #간헐적보상"
    }
  ]

  const nextReview = () => {
    setReviewIndex((prev) => (prev + 1) % reviewCards.length)
  }

  const prevReview = () => {
    setReviewIndex((prev) => (prev - 1 + reviewCards.length) % reviewCards.length)
  }

  // 구매 버튼 클릭 핸들러 (기존 연애비급 결제 흐름 100% 동일 유지)
  const handlePurchase = (e: React.MouseEvent) => {
    e.preventDefault()
    router.push(productData.checkoutUrl)
  }

  // 장바구니 추가 핸들러 (기존 연애비급 장바구니 연동 동일 유지)
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

  // 샴페인 골드 & 핑크 매듭 장식 구분선 (전통적 기품 강조)
  const ChampagneThreadDivider = () => (
    <div className="flex items-center justify-center my-20 md:my-28 opacity-70">
      <div className="h-[1px] w-16 md:w-32 bg-gradient-to-r from-transparent via-[#D4B2A7]/40 to-[#A66B73]" />
      <div className="mx-4 flex items-center justify-center">
        <svg className="w-5 h-5 text-[#D4B2A7] animate-pulse" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C9.5 2 7.5 4 7.5 6.5C7.5 9 10 11 12 13C14 11 16.5 9 16.5 6.5C16.5 4 14.5 2 12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 13V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="12" cy="6.5" r="2" fill="currentColor" />
        </svg>
      </div>
      <div className="h-[1px] w-16 md:w-32 bg-gradient-to-l from-transparent via-[#D4B2A7]/40 to-[#A66B73]" />
    </div>
  )

  // 공통 CTA 버튼 -> 장바구니 / 바로구매 분리 (연애비급 테마 색상 적용)
  const CTAButton = ({ text }: { text: string }) => (
    <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center my-6 max-w-xl mx-auto w-full">
      <button
        onClick={handleAddToCart}
        className="py-4 px-6 rounded-xl font-elegant font-bold text-base hover:scale-[1.02] active:scale-95 transition-all duration-300 border border-[#A66B73]/60 text-[#D4B2A7] hover:bg-[#A66B73]/15 bg-transparent shrink-0 whitespace-nowrap w-full sm:w-auto"
      >
        장바구니 담기
      </button>
      <button
        onClick={handlePurchase}
        className="flex-1 py-4 px-6 rounded-xl font-elegant font-bold text-sm md:text-base hover:scale-[1.02] active:scale-95 transition-all duration-500 flex items-center justify-center gap-2 text-[#FAF6EE] w-full shadow-[0_0_35px_rgba(166,107,115,0.25)] hover:brightness-105"
        style={{
          background: 'linear-gradient(135deg, #A66B73 0%, #955D65 100%)',
          border: '1px solid rgba(212, 178, 167, 0.55)',
        }}
      >
        <span className="break-keep text-center">{text}</span>
        <ChevronRight className="w-5 h-5 text-[#FAF7F2] shrink-0" />
      </button>
    </div>
  )

  return (
    <main className="detail-page relative min-h-screen bg-[#0a0514] text-[#EDE6DA] font-sans selection:bg-[#FAF7F2] selection:text-[#1A0F2E] pb-24 md:pb-0">
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
                  <span className="inline-block px-5 py-1.5 rounded-full text-[12pt] font-elegant font-semibold tracking-[0.25em] text-[#D4B2A7] uppercase"
                    style={{
                      background: 'rgba(186, 141, 126, 0.15)',
                      border: '1px solid rgba(212, 178, 167, 0.3)',
                    }}>
                    PREMIUM LOVE POSITION GUIDE
                  </span>
                </div>

                {/* 대제목 */}
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-elegant font-bold mb-10 text-white leading-[1.45]">
                  戀愛秘笈 <span className="text-[#D4B2A7]">연애비급</span>
                </h1>

                {/* 1. 최상단: 가로형 풀 이미지 (love-secret-hero.png, 16:9 비율, 1280px 너비 매칭) */}
                <div className="w-full max-w-[1280px] mx-auto mb-16">
                  <div className="relative w-full aspect-video rounded-[28px] md:rounded-[36px] overflow-hidden border border-[#D4B2A7]/25 shadow-2xl">
                    <Image
                      src={productData.topBannerImage}
                      alt="戀愛秘笈 연애비급"
                      fill
                      sizes="(max-width: 1300px) 100vw, 1280px"
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>

                {/* 2. 기존 하단 서브카피 & 설명 보존 (장바구니·구매하기 버튼 2개는 삭제) */}
                <div className="max-w-4xl lg:max-w-5xl mx-auto space-y-7 mb-20 px-6 text-center">
                  <p className="text-2xl md:text-[36px] font-elegant font-bold text-[#E5C4BB] leading-[1.4] break-keep md:whitespace-nowrap">
                    사랑을 갈구하는 자리에서, 사랑이 머무는 자리로
                  </p>

                  <div className="text-[16px] md:text-[18px] text-[#EDE6DA]/75 leading-[1.8] font-normal space-y-3.5 pt-6 border-t border-white/5 break-keep">
                    <p className="md:whitespace-nowrap">
                      연애비급은 사랑할수록 반복적으로 흔들리는 여성을 위한 프리미엄 연애 심리·포지션·매력 구조 해석서입니다.
                    </p>
                    <p>
                      더 많이 애쓰는 것이 아니라, 내가 서 있는 자리를 바꾸는 것.
                    </p>
                    <p className="font-semibold text-white">
                      이제 사랑을 확인하고 붙잡는 연애가 아니라, 나의 기준과 매력을 잃지 않는 연애를 시작해보세요.
                    </p>
                  </div>
                </div>

                {/* 3. Section 1: Hero Banner 3종 패키지 소개 상자 (1280px 너비 매칭, 단일 구매 영역) */}
                <div className="w-full max-w-[1280px] mx-auto mb-16 mt-8">
                  <div
                    className="w-full rounded-[32px] md:rounded-[40px] p-6 sm:p-8 md:p-12 border border-[#D4B2A7]/40 text-left relative overflow-hidden shadow-2xl"
                    style={{
                      background: 'radial-gradient(ellipse at 50% 0%, rgba(139, 38, 62, 0.35) 0%, rgba(74, 35, 43, 0.3) 50%, rgba(10, 5, 20, 0.95) 100%)',
                      boxShadow: '0 0 60px rgba(186, 141, 126, 0.25)'
                    }}
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
                      {/* 좌측: 통합 배지, 큰 제목, 설명, 1줄 가격, 간결한 구매/장바구니 버튼 */}
                      <div className="lg:col-span-7 space-y-5 md:space-y-6">
                        {/* 상단 통합 배지 */}
                        <div>
                          <span className="inline-flex items-center justify-center py-[5px] px-[12px] rounded-[6px] bg-[#87465B] border border-[#D5AFAD] text-[#FFF1E9] text-xs font-bold tracking-wider whitespace-nowrap">
                            연애비급 3종 올인원 패키지
                          </span>
                        </div>

                        {/* 큰 제목 유지 & 두 줄 이내 설명 */}
                        <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white leading-[1.4] break-keep">
                          &ldquo;사랑은 노력으로 만들어지지 않는다.<br className="hidden sm:inline" />
                          <span className="text-[#E5C4BB]">네가 서 있는 자리가 결과를 만든다.</span>&rdquo;
                        </h2>

                        <p className="text-[17px] md:text-[18px] text-[#D5C2C6] leading-[1.8] font-normal break-keep max-w-xl">
                          착하게 맞출수록 가벼워지던 관계의 끝에서 남자의 무의식을 흔들고<br />
                          관계의 주도권을 되찾는 22가지 비밀 법칙
                        </p>

                        {/* 가격 내부 네모상자 제거: 19,000원 가장 크게, 정가와 할인율은 작게 한 줄 정리 */}
                        <div className="flex items-baseline gap-3 pt-1">
                          <span className="text-3xl md:text-4xl font-elegant font-bold text-[#E5C4BB] tracking-tight">
                            19,000원
                          </span>
                          <span className="text-sm md:text-base text-[#EDE6DA]/40 line-through">
                            정가 79,000원
                          </span>
                          <span className="inline-flex items-center justify-center py-[5px] px-[12px] rounded-[6px] bg-[#87465B] border border-[#D5AFAD] text-[#FFF1E9] text-xs md:text-sm font-bold whitespace-nowrap">76% OFF</span>
                        </div>

                        {/* 구매 버튼 문구 간결화 & 장바구니 보조 버튼 */}
                        <div className="flex flex-col sm:flex-row gap-3 pt-2 items-stretch sm:items-center">
                          <button
                            type="button"
                            onClick={handleAddToCart}
                            className="py-3 px-4 sm:px-5 rounded-xl font-elegant font-medium text-xs md:text-sm border border-[#D4B2A7]/40 text-[#D4B2A7] hover:bg-[#A66B73]/15 hover:border-[#D4B2A7]/70 transition-all duration-300 shrink-0 whitespace-nowrap text-center order-2 sm:order-1"
                          >
                            장바구니
                          </button>
                          <button
                            type="button"
                            onClick={handlePurchase}
                            className="py-3.5 px-6 rounded-xl font-elegant font-bold text-sm md:text-base hover:scale-[1.01] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 text-[#FAF6EE] shadow-[0_0_30px_rgba(166,107,115,0.3)] hover:brightness-105 order-1 sm:order-2 flex-1 sm:flex-initial"
                            style={{
                              background: 'linear-gradient(135deg, #A66B73 0%, #8B263E 100%)',
                              border: '1px solid rgba(212, 178, 167, 0.55)',
                            }}
                          >
                            <span>연애비급 19,000원에 구매하기</span>
                            <ChevronRight className="w-4 h-4 text-[#FAF7F2] shrink-0" />
                          </button>
                        </div>
                      </div>

                      {/* 우측: 목업 이미지 유지 (글과 이미지 사이 여백 충분히 확보) */}
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

            <ChampagneThreadDivider />

            {/* ═══════════════════════════════════════════════════════════════
                신규 Section 2. Pain Point — 문제 진단 & 공감
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-[64px] md:mb-[112px] text-left w-full max-w-[1280px] mx-auto">
              <Reveal>
                <div className="space-y-10">
                  <div className="text-center max-w-3xl mx-auto space-y-5">
                    <span className="text-[#D4B2A7] font-elegant text-[12pt] font-semibold tracking-[0.2em] uppercase block">
                      Problem Diagnosis & Resonance
                    </span>
                    <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white leading-[1.4] break-keep">
                      진심을 다했는데,<br className="sm:hidden" /> 왜 관계는 <span className="text-[#E5C4BB]">점점 기울었을까요?</span>
                    </h2>
                  </div>

                  <div className="grid lg:grid-cols-12 gap-10 items-start">
                    {/* 이미지 교체 영역 (기울어진 시소 및 읽씹 화면 비주얼 - 가로 3 : 세로 4 비율, 잘림 없이 전체 표시) */}
                    <div className="lg:col-span-5 w-full space-y-3.5">
                      <div className="relative w-full aspect-[3/4] rounded-2xl md:rounded-3xl overflow-hidden border border-[#D4B2A7]/30 shadow-[0_12px_40px_rgba(0,0,0,0.6)] bg-black/40">
                        <Image
                          src="/images/love-secret/love-pain.png"
                          alt="기울어진 시소 및 읽씹 화면 비주얼"
                          fill
                          sizes="(max-width: 1024px) 100vw, 40vw"
                          className="object-contain"
                          priority
                        />
                      </div>
                      <div className="space-y-1.5 text-center">
                        <p className="text-xs md:text-sm text-[#D4B2A7] font-medium tracking-wide">
                          새벽 2시, 구구절절 보낸 장문 톡 옆에 뜬 ‘숫자 1’
                        </p>
                        <p className="text-[16px] md:text-[18px] text-[#E5C4BB] font-elegant font-bold tracking-wide break-keep">
                          세개 이상 해당된다면 잠시 멈추십시오
                        </p>
                      </div>
                    </div>

                    {/* 본문 텍스트 및 나의 연애 누수 체크리스트 */}
                    <div className="lg:col-span-7 space-y-6 break-keep">
                      <div
                        className="text-[16px] md:text-[18px] text-[#D5C2C6] leading-[1.8] font-normal p-6 sm:p-7 md:p-8 rounded-2xl border border-[rgba(210,166,172,0.30)] shadow-[0_8px_24px_rgba(0,0,0,0.3)] space-y-3.5 break-keep h-auto"
                        style={{ background: 'rgba(60, 34, 50, 0.80)' }}
                      >
                        <p>
                          진심을 다하고 참아주면 사랑받는다는 말은 연애에서 가장 아픈 착각입니다.<br />
                          연애는 마음의 크기를 겨루는 도덕 시험이 아니라, 내가 어디에 서 있느냐의 <strong className="text-[#F5E9E2] font-semibold">&lsquo;자리(Position)&rsquo;</strong>의 문제입니다.
                        </p>
                        <p>
                          언제든 연락이 닿고, 일정을 맞추며 서운함을 삼키는 순간,<br />
                          당신은 매혹의 대상이 아닌 <strong className="text-[#F5E9E2] font-semibold">&lsquo;늘 그 자리에 있는 편한 사람&rsquo;</strong>으로 흐려집니다.
                        </p>
                        <p>
                          남자를 붙잡으려 애쓰지 말고, 당신의 자리를 먼저 세우십시오.<br />
                          필요한 것은 더 많은 희생이 아니라, 상대가 스스로 다가오게 만드는 <strong className="text-[#F5E9E2] font-semibold">단단한 중심</strong>입니다.
                        </p>
                      </div>

                      <div className="space-y-3">
                        <h3 className="text-[20px] sm:text-[22px] md:text-[24px] font-elegant font-bold text-[#E5C4BB] leading-[1.4] flex items-center gap-2.5 break-keep">
                          <AlertTriangle className="w-6 h-6 text-[#E5C4BB] shrink-0" />
                          나의 연애 누수 체크리스트
                        </h3>

                        <div className="space-y-2.5">
                          {[
                            "상대의 사소한 연락 텀 하나에 하루 종일 멘탈이 요동친다",
                            "불편한 일이 있어도 관계가 깨질까 봐 웃으며 넘긴다",
                            "\"나 진짜 좋아?\", \"우리 무슨 사이야?\" 확인하려 든다",
                            "챙겨주고 다 맞춰줬더니 결국 \"설레지 않는다\"며 차였다",
                            "서운함에 못 이겨 밤에 장문 카톡을 보낸 적이 있다"
                          ].map((item, idx) => (
                            <div
                              key={idx}
                              className="p-4 rounded-xl border border-white/10 bg-white/[0.02] flex items-start gap-3.5 hover:border-[#D4B2A7]/40 transition-colors"
                            >
                              <div className="w-5 h-5 rounded border border-[#A66B73]/60 flex items-center justify-center shrink-0 mt-1 bg-[#A66B73] shadow-sm">
                                <Check className="w-3.5 h-3.5 text-[#FAF6EE]" />
                              </div>
                              <span className="text-[16px] md:text-[18px] text-[#FAF7F2] font-medium leading-[1.6] break-keep">
                                {item}
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
                신규: 공감 & 자리 진단 — 진심을 탓하지 마세요 & 나의 자리를 돌아볼 때
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-16 md:mb-24 text-left w-full max-w-[1280px] mx-auto">
              <Reveal>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  {/* 왼쪽: 신규 제목 + 01, 02 반투명 상자 (PC 세로 중앙 정렬) */}
                  <div className="lg:col-span-7 order-1 flex flex-col justify-center">
                    <h3 className="text-center text-[22px] md:text-[28px] font-elegant font-bold text-[#E5C4BB] leading-[1.4] mb-6 break-keep">
                      사랑하는 동안, 내 &lsquo;자리&rsquo;는 어디였나요?
                    </h3>

                    <div
                      className="w-full text-left break-keep p-6 sm:p-8 md:p-10 rounded-2xl md:rounded-3xl gungjung-glass border border-[#D4B2A7]/30 shadow-2xl space-y-8 md:space-y-10 relative overflow-hidden"
                      style={{
                        background: 'linear-gradient(135deg, rgba(74, 35, 43, 0.45) 0%, rgba(15, 6, 20, 0.94) 100%)',
                        boxShadow: '0 12px 40px rgba(0, 0, 0, 0.4)'
                      }}
                    >
                      {/* 01 · 진심을 탓하지 마세요 */}
                      <div className="space-y-3.5">
                        <div className="flex items-center gap-2.5">
                          <span className="inline-flex items-center justify-center py-[5px] px-[12px] rounded-[6px] bg-[#87465B] border border-[#D5AFAD] text-[#FFF1E9] text-xs font-bold whitespace-nowrap">
                            01
                          </span>
                          <h3 className="text-xl md:text-2xl font-elegant font-bold text-[#FAF7F2] leading-[1.4]">
                            진심을 탓하지 마세요
                          </h3>
                        </div>
                        <div className="text-[17px] md:text-[18px] text-[#EDE6DA] leading-[1.8] font-normal space-y-2 break-keep">
                          <p>
                            단 하나라도 내 이야기 같았다면,<br />
                            <span className="text-[#E5C4BB] font-medium">당신의 매력이 부족해서만은 아닙니다.</span>
                          </p>
                          <p className="text-[#FAF7F2]/90">
                            더 참고, 더 맞추고, 더 기다렸던 마음.<br />
                            그만큼 관계를 소중히 지키고 싶었을 거예요.
                          </p>
                        </div>
                      </div>

                      {/* 구분선 (은은한 로즈 샴페인 선) */}
                      <div className="w-full h-[1px] bg-gradient-to-r from-[#D4B2A7]/30 via-[#D4B2A7]/10 to-transparent" />

                      {/* 02 · 이제, 나의 자리를 돌아볼 때 */}
                      <div className="space-y-3.5">
                        <div className="flex items-center gap-2.5">
                          <span className="inline-flex items-center justify-center py-[5px] px-[12px] rounded-[6px] bg-[#87465B] border border-[#D5AFAD] text-[#FFF1E9] text-xs font-bold whitespace-nowrap">
                            02
                          </span>
                          <h3 className="text-xl md:text-2xl font-elegant font-bold text-[#FAF7F2] leading-[1.4]">
                            이제, <span className="text-[#E5C4BB]">나의 자리를 돌아볼 때</span>
                          </h3>
                        </div>
                        <div className="text-[17px] md:text-[18px] text-[#EDE6DA] leading-[1.8] font-normal space-y-3 break-keep">
                          <p>
                            상대의 기분과 반응을 먼저 살피는 동안,<br />
                            내 감정과 기준은 자꾸 뒤로 밀리지 않았나요?
                          </p>
                          <div className="p-4 sm:p-5 rounded-xl border border-[rgba(210,166,172,0.25)] bg-[#49303F]/60 text-[#FAF7F2] font-normal leading-[1.75]">
                            《연애비급》에서 말하는 ‘자리’는<br className="hidden sm:inline" />
                            관계 안에서 <span className="text-[#E5C4BB] font-semibold">내 마음과 선택도 존중받는 위치(Position)</span>입니다.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 오른쪽: 이미지 (약 42% 비율, 상단 이미지와 동일한 크기 및 테두리/모서리 규격, 터치하여 확대 글자 제거) */}
                  <div className="lg:col-span-5 w-full order-2 flex flex-col justify-center">
                    <div
                      onClick={() =>
                        setPreviewModalItem({
                          title: '잘해줄수록, 왜 내 마음은 더 불안해질까요?',
                          imageSrc: '/image/love-secret/love-secret-empathy.png'
                        })
                      }
                      className="cursor-pointer group relative w-full aspect-[3/4] rounded-2xl md:rounded-3xl overflow-hidden border border-[#D4B2A7]/30 shadow-[0_12px_40px_rgba(0,0,0,0.6)] bg-black/40 transition-transform duration-300 hover:scale-[1.01]"
                    >
                      <Image
                        src="/image/love-secret/love-secret-empathy.png"
                        alt="잘해줄수록, 왜 내 마음은 더 불안해질까요? - 한옥 창가 여성"
                        fill
                        sizes="(max-width: 1024px) 100vw, 40vw"
                        className="object-contain"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </Reveal>
            </section>

            <ChampagneThreadDivider />

            {/* ═══════════════════════════════════════════════════════════════
                섹션 1: 왜 연애비급을 읽어야 하는가? (진심과 공부 스토리텔링 - 글라스 퍼플 카드)
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-28 w-full max-w-[1280px] mx-auto space-y-[48px] md:space-y-[80px]">
              {/* 1. THE HIDDEN TRUTH 설명 영역 (설명 글 먼저) */}
              <Reveal>
                <div
                  className="relative hanji-card-hover backdrop-blur-md p-6 sm:p-8 md:p-14 lg:p-16 rounded-3xl md:rounded-[40px] border border-[#D4B2A7]/70 shadow-[0_16px_45px_rgba(0,0,0,0.65)] cursor-default text-center overflow-hidden"
                  style={{
                    background: 'linear-gradient(to right, rgba(38, 17, 26, 0.85) 0%, rgba(26, 12, 25, 0.85) 40%, rgba(18, 9, 23, 0.85) 70%, rgba(10, 5, 20, 0.85) 100%)',
                    boxShadow: '0 16px 45px rgba(0, 0, 0, 0.65), inset 0 0 0 1px rgba(212, 178, 167, 0.22)'
                  }}
                >
                  {/* 실제 전통 닥종이 한지 질감 레이어 (짧고 가는 불규칙 섬유 + 은은한 펄프 얼룩 + 미세 종이 입자) */}
                  <svg
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full pointer-events-none rounded-[inherit] overflow-hidden"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      {/* 불규칙한 짧은 닥나무 섬유 패턴 (대부분 3~12px, 일부 15~20px, 굵기 0.5~1px, 회베이지/어두운색 혼합) */}
                      <pattern id="hanji-why-fibers" width="260" height="260" patternUnits="userSpaceOnUse">
                        <path d="M179.5 184.8 Q173.5 180.3 166.7 177.1" stroke="#A88880" strokeWidth="0.9" strokeLinecap="round" opacity="0.19" fill="none" />
                        <path d="M200.7 162.7 Q208.7 162.1 216.5 160.1" stroke="#E5C4BB" strokeWidth="0.6" strokeLinecap="round" opacity="0.18" fill="none" />
                        <path d="M53.3 167.2 Q58 173.7 62.7 180.2" stroke="#A88880" strokeWidth="0.6" strokeLinecap="round" opacity="0.18" fill="none" />
                        <path d="M134.5 128.8 Q134.9 134.1 135.1 139.4" stroke="#A88880" strokeWidth="0.7" strokeLinecap="round" opacity="0.15" fill="none" />
                        <path d="M126.9 102.5 Q129.3 104.4 130.9 107" stroke="#240B13" strokeWidth="0.8" strokeLinecap="round" opacity="0.22" fill="none" />
                        <path d="M156.2 195.4 Q155.7 198.3 154.1 200.8" stroke="#D4B2A7" strokeWidth="0.9" strokeLinecap="round" opacity="0.19" fill="none" />
                        <path d="M116.2 145.5 Q108.8 150.3 100.8 153.9" stroke="#E5C4BB" strokeWidth="0.6" strokeLinecap="round" opacity="0.22" fill="none" />
                        <path d="M230.8 63.9 Q231.8 65.2 232.8 66.4" stroke="#A88880" strokeWidth="0.8" strokeLinecap="round" opacity="0.20" fill="none" />
                        <path d="M38.5 29.2 Q38.1 31.1 37 32.8" stroke="#A88880" strokeWidth="0.9" strokeLinecap="round" opacity="0.18" fill="none" />
                        <path d="M4.5 21.2 Q0.3 19.6 -4.1 18.9" stroke="#E5C4BB" strokeWidth="0.6" strokeLinecap="round" opacity="0.19" fill="none" />
                        <path d="M225.4 212.5 Q226.7 211.5 227.6 210.1" stroke="#E5C4BB" strokeWidth="0.5" strokeLinecap="round" opacity="0.17" fill="none" />
                        <path d="M113.2 158.3 Q116.8 161.1 121.1 162.5" stroke="#DFCECA" strokeWidth="0.7" strokeLinecap="round" opacity="0.20" fill="none" />
                        <path d="M43.8 48.6 Q42.7 52.3 40.5 55.4" stroke="#1C080F" strokeWidth="0.8" strokeLinecap="round" opacity="0.30" fill="none" />
                        <path d="M19 205.4 Q21 200.4 23.4 195.6" stroke="#A88880" strokeWidth="0.8" strokeLinecap="round" opacity="0.20" fill="none" />
                        <path d="M226.9 175.8 Q230.9 176.2 234.9 175.4" stroke="#240B13" strokeWidth="0.9" strokeLinecap="round" opacity="0.23" fill="none" />
                        <path d="M228.2 100.2 Q225.7 91.2 224.5 81.9" stroke="#240B13" strokeWidth="0.9" strokeLinecap="round" opacity="0.31" fill="none" />
                        <path d="M84.8 14.1 Q79.5 11.5 74.1 9" stroke="#1C080F" strokeWidth="0.6" strokeLinecap="round" opacity="0.25" fill="none" />
                        <path d="M232.8 166.8 Q238.5 166.7 244.2 167.5" stroke="#95716A" strokeWidth="0.7" strokeLinecap="round" opacity="0.15" fill="none" />
                        <path d="M224.9 233 Q218.4 238.7 212 244.7" stroke="#C9B6A9" strokeWidth="0.6" strokeLinecap="round" opacity="0.18" fill="none" />
                        <path d="M246.1 258.1 Q247.2 255.6 248.7 253.4" stroke="#DFCECA" strokeWidth="0.5" strokeLinecap="round" opacity="0.21" fill="none" />
                        <path d="M123.5 102.7 Q116.3 109.6 109.5 116.8" stroke="#E5C4BB" strokeWidth="0.8" strokeLinecap="round" opacity="0.14" fill="none" />
                        <path d="M74.3 70.2 Q77.4 70.9 80.6 70.6" stroke="#D4B2A7" strokeWidth="0.7" strokeLinecap="round" opacity="0.18" fill="none" />
                        <path d="M107 42.6 Q109.1 42.8 111 41.7" stroke="#835E57" strokeWidth="0.9" strokeLinecap="round" opacity="0.17" fill="none" />
                        <path d="M180.4 61.9 Q178 60.2 175.8 58.3" stroke="#D4B2A7" strokeWidth="0.8" strokeLinecap="round" opacity="0.21" fill="none" />
                        <path d="M257.4 110.8 Q257.1 114.7 256.9 118.5" stroke="#1C080F" strokeWidth="0.5" strokeLinecap="round" opacity="0.24" fill="none" />
                        <path d="M130.3 144.3 Q128.3 147.5 125.6 150.1" stroke="#240B13" strokeWidth="0.6" strokeLinecap="round" opacity="0.24" fill="none" />
                        <path d="M201.4 190.1 Q205.9 187.8 210 184.8" stroke="#E5C4BB" strokeWidth="0.7" strokeLinecap="round" opacity="0.15" fill="none" />
                        <path d="M259.9 220.6 Q260.3 218.7 260.2 216.8" stroke="#E5C4BB" strokeWidth="0.8" strokeLinecap="round" opacity="0.21" fill="none" />
                        <path d="M245.5 114.9 Q251.5 122.5 256.8 130.5" stroke="#1C080F" strokeWidth="0.8" strokeLinecap="round" opacity="0.25" fill="none" />
                        <path d="M146.9 202.7 Q146 200.2 145 197.8" stroke="#240B13" strokeWidth="0.9" strokeLinecap="round" opacity="0.25" fill="none" />
                        <path d="M51.9 178.2 Q52.4 176 53.7 174.2" stroke="#E5C4BB" strokeWidth="0.6" strokeLinecap="round" opacity="0.18" fill="none" />
                        <path d="M98.1 99.5 Q99.5 94.4 101.1 89.3" stroke="#835E57" strokeWidth="0.5" strokeLinecap="round" opacity="0.17" fill="none" />
                        <path d="M64.2 46.3 Q59.8 46.6 55.4 46.5" stroke="#E5C4BB" strokeWidth="0.9" strokeLinecap="round" opacity="0.14" fill="none" />
                        <path d="M248.4 113 Q249.8 109.8 250.5 106.5" stroke="#DFCECA" strokeWidth="0.6" strokeLinecap="round" opacity="0.20" fill="none" />
                        <path d="M48.7 15.5 Q53.6 17.6 58.4 19.7" stroke="#1C080F" strokeWidth="0.9" strokeLinecap="round" opacity="0.28" fill="none" />
                        <path d="M64.6 14.8 Q66.5 16.3 68.1 18" stroke="#DFCECA" strokeWidth="0.7" strokeLinecap="round" opacity="0.21" fill="none" />
                        <path d="M145.7 26.9 Q147.5 31 149.6 35" stroke="#1C080F" strokeWidth="0.8" strokeLinecap="round" opacity="0.30" fill="none" />
                        <path d="M104.5 109 Q107.9 110.4 111.5 110.7" stroke="#DFCECA" strokeWidth="0.6" strokeLinecap="round" opacity="0.14" fill="none" />
                        <path d="M247.3 121.5 Q247.1 123.3 246.5 125" stroke="#C9B6A9" strokeWidth="0.6" strokeLinecap="round" opacity="0.15" fill="none" />
                        <path d="M43.6 64.4 Q40.7 67.1 38.6 70.4" stroke="#240B13" strokeWidth="0.6" strokeLinecap="round" opacity="0.27" fill="none" />
                        <path d="M213.9 157.5 Q206.4 150.8 199.7 143.4" stroke="#95716A" strokeWidth="0.7" strokeLinecap="round" opacity="0.17" fill="none" />
                        <path d="M192.7 35.9 Q191.8 45 190.3 53.9" stroke="#D4B2A7" strokeWidth="0.6" strokeLinecap="round" opacity="0.18" fill="none" />
                        <path d="M186.6 39.7 Q188.4 46.8 189.2 54.1" stroke="#2C0E18" strokeWidth="0.9" strokeLinecap="round" opacity="0.30" fill="none" />
                        <path d="M213.7 233.3 Q216.9 230.1 220.7 227.5" stroke="#DFCECA" strokeWidth="0.8" strokeLinecap="round" opacity="0.17" fill="none" />
                        <path d="M82.3 17.5 Q85.4 16.9 88 15.2" stroke="#16070D" strokeWidth="0.6" strokeLinecap="round" opacity="0.31" fill="none" />
                        <path d="M43.5 46.4 Q46.7 41.9 49.8 37.4" stroke="#DFCECA" strokeWidth="0.6" strokeLinecap="round" opacity="0.18" fill="none" />
                        <path d="M10.1 226.5 Q11 225.1 12.4 224.2" stroke="#E5C4BB" strokeWidth="0.7" strokeLinecap="round" opacity="0.21" fill="none" />
                        <path d="M186.7 35.6 Q189.5 37.3 192.5 38.4" stroke="#C9B6A9" strokeWidth="0.8" strokeLinecap="round" opacity="0.16" fill="none" />
                        <path d="M168.8 80.3 Q167 76.3 166 72.1" stroke="#C9B6A9" strokeWidth="0.7" strokeLinecap="round" opacity="0.19" fill="none" />
                        <path d="M145.3 57 Q144 55.8 142.4 55.1" stroke="#835E57" strokeWidth="0.8" strokeLinecap="round" opacity="0.17" fill="none" />
                        <path d="M40.2 206.5 Q44.2 203 47.2 198.7" stroke="#16070D" strokeWidth="0.5" strokeLinecap="round" opacity="0.25" fill="none" />
                        <path d="M3.8 21.9 Q2.2 25.2 -0.1 28.1" stroke="#C9B6A9" strokeWidth="0.6" strokeLinecap="round" opacity="0.18" fill="none" />
                        <path d="M178.4 82.5 Q180.3 79.5 182 76.4" stroke="#835E57" strokeWidth="0.6" strokeLinecap="round" opacity="0.19" fill="none" />
                        <path d="M121.9 252.3 Q122.8 246.7 124.7 241.5" stroke="#D4B2A7" strokeWidth="0.8" strokeLinecap="round" opacity="0.16" fill="none" />
                        <path d="M214.6 146.5 Q213.6 150.6 213 154.8" stroke="#16070D" strokeWidth="0.9" strokeLinecap="round" opacity="0.30" fill="none" />
                        <path d="M224.5 69.9 Q226.6 67.8 229.5 67.1" stroke="#DFCECA" strokeWidth="0.5" strokeLinecap="round" opacity="0.16" fill="none" />
                        <path d="M191.2 79.5 Q188.2 78.2 184.9 78.2" stroke="#DFCECA" strokeWidth="0.9" strokeLinecap="round" opacity="0.14" fill="none" />
                        <path d="M86.9 11.1 Q88.7 15.5 90 20.1" stroke="#1C080F" strokeWidth="0.5" strokeLinecap="round" opacity="0.31" fill="none" />
                        <path d="M249.5 41.7 Q245.5 44.3 241.3 46.7" stroke="#E5C4BB" strokeWidth="0.6" strokeLinecap="round" opacity="0.14" fill="none" />
                        <path d="M118.9 139.7 Q115.6 142.7 112.3 145.7" stroke="#DFCECA" strokeWidth="0.9" strokeLinecap="round" opacity="0.14" fill="none" />
                        <path d="M118.8 147.4 Q114.9 143.4 110.7 139.6" stroke="#C9B6A9" strokeWidth="0.9" strokeLinecap="round" opacity="0.21" fill="none" />
                        <path d="M113.3 204 Q109.8 199.2 106 194.7" stroke="#E5C4BB" strokeWidth="0.5" strokeLinecap="round" opacity="0.16" fill="none" />
                        <path d="M111.5 185.8 Q113.9 184.2 116.2 182.6" stroke="#D4B2A7" strokeWidth="0.6" strokeLinecap="round" opacity="0.14" fill="none" />
                        <path d="M125.4 110.7 Q120.5 104.3 115.8 97.7" stroke="#16070D" strokeWidth="0.6" strokeLinecap="round" opacity="0.28" fill="none" />
                        <path d="M31.5 202.8 Q26.7 201.5 22.3 199.2" stroke="#C9B6A9" strokeWidth="0.6" strokeLinecap="round" opacity="0.16" fill="none" />
                        <path d="M24.2 83.7 Q26.2 86 28.6 88" stroke="#A88880" strokeWidth="0.9" strokeLinecap="round" opacity="0.14" fill="none" />
                        <path d="M82.9 257.8 Q79.6 253.5 75.4 250.2" stroke="#2C0E18" strokeWidth="0.6" strokeLinecap="round" opacity="0.22" fill="none" />
                        <path d="M30.5 252.5 Q34 261.1 38.8 269.1" stroke="#E5C4BB" strokeWidth="0.9" strokeLinecap="round" opacity="0.17" fill="none" />
                        <path d="M121.5 15.4 Q122.7 19.8 124.1 24.2" stroke="#C9B6A9" strokeWidth="0.6" strokeLinecap="round" opacity="0.18" fill="none" />
                        <path d="M71.6 51.1 Q72.4 54.2 72.9 57.4" stroke="#DFCECA" strokeWidth="0.7" strokeLinecap="round" opacity="0.18" fill="none" />
                        <path d="M258.7 67.2 Q259.9 69.8 261.1 72.4" stroke="#C9B6A9" strokeWidth="0.5" strokeLinecap="round" opacity="0.14" fill="none" />
                        <path d="M50.4 47.2 Q51.9 49.8 53.8 52.1" stroke="#C9B6A9" strokeWidth="0.8" strokeLinecap="round" opacity="0.21" fill="none" />
                        <path d="M45.6 1.3 Q42.7 2.6 40.1 4.3" stroke="#DFCECA" strokeWidth="0.7" strokeLinecap="round" opacity="0.19" fill="none" />
                        <path d="M229 218 Q234.2 217.9 239.5 217.4" stroke="#A88880" strokeWidth="0.5" strokeLinecap="round" opacity="0.20" fill="none" />
                        <path d="M20.6 204.5 Q21.3 207.3 23.1 209.6" stroke="#16070D" strokeWidth="0.7" strokeLinecap="round" opacity="0.30" fill="none" />
                        <path d="M230.4 146.6 Q232.9 151 236.5 154.5" stroke="#A88880" strokeWidth="0.6" strokeLinecap="round" opacity="0.19" fill="none" />
                        <path d="M14.5 234.8 Q14.4 237.4 13.8 239.9" stroke="#16070D" strokeWidth="0.6" strokeLinecap="round" opacity="0.23" fill="none" />
                        <path d="M49.3 130.5 Q49.7 132.8 50.5 135" stroke="#1C080F" strokeWidth="0.7" strokeLinecap="round" opacity="0.24" fill="none" />
                        <path d="M105.3 230.2 Q113.6 233.2 121.8 236.3" stroke="#16070D" strokeWidth="0.6" strokeLinecap="round" opacity="0.26" fill="none" />
                        <path d="M11.1 111.8 Q10.1 109.8 9.6 107.6" stroke="#16070D" strokeWidth="0.9" strokeLinecap="round" opacity="0.30" fill="none" />
                        <path d="M31.9 135.4 Q30.2 138.6 28.4 141.7" stroke="#D4B2A7" strokeWidth="0.5" strokeLinecap="round" opacity="0.20" fill="none" />
                        <path d="M98.6 220.7 Q90.4 218.7 82.7 215.4" stroke="#A88880" strokeWidth="0.8" strokeLinecap="round" opacity="0.16" fill="none" />
                        <path d="M8.3 86.4 Q8.5 81.2 9.1 76" stroke="#835E57" strokeWidth="0.9" strokeLinecap="round" opacity="0.20" fill="none" />
                        <path d="M192.3 106.9 Q191.7 114.5 192 122.1" stroke="#835E57" strokeWidth="0.6" strokeLinecap="round" opacity="0.18" fill="none" />
                        <path d="M52.9 15.8 Q48.5 17.7 44.4 20.1" stroke="#835E57" strokeWidth="0.7" strokeLinecap="round" opacity="0.19" fill="none" />
                      </pattern>

                      {/* 은은한 한지 명암 얼룩 (닥나무 펄프 구름결) */}
                      <filter id="hanji-why-cloudy-pulp">
                        <feTurbulence type="fractalNoise" baseFrequency="0.012 0.018" numOctaves="3" result="pulpNoise" />
                        <feColorMatrix type="matrix" values="1 0 0 0 0.85  0 1 0 0 0.72  0 0 1 0 0.68  0 0 0 0.05 0" />
                      </filter>

                      {/* 미세 종이 입자 (한지 표면 질감) */}
                      <filter id="hanji-why-paper-grain">
                        <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="3" result="paperTooth" />
                        <feColorMatrix type="matrix" values="1 0 0 0 0.8  0 1 0 0 0.7  0 0 1 0 0.65  0 0 0 0.035 0" />
                      </filter>
                    </defs>

                    {/* 1단계: 닥나무 펄프 명암 얼룩 */}
                    <rect width="100%" height="100%" filter="url(#hanji-why-cloudy-pulp)" />

                    {/* 2단계: 미세 종이 입자 */}
                    <rect width="100%" height="100%" filter="url(#hanji-why-paper-grain)" />

                    {/* 3단계: 밀도 높게 흩뿌려진 짧은 닥나무 섬유들 */}
                    <rect width="100%" height="100%" fill="url(#hanji-why-fibers)" />
                  </svg>

                  {/* 네 모서리 전통 한국식 격자 문양 (PC 36px, 모바일 22px) */}
                  {/* 좌상단 */}
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 40 40"
                    fill="none"
                    stroke="#D4B2A7"
                    strokeWidth="1.2"
                    className="absolute top-3 left-3 sm:top-4 sm:left-4 md:top-5 md:left-5 w-[22px] h-[22px] sm:w-[28px] sm:h-[28px] md:w-[36px] md:h-[36px] pointer-events-none text-[#D4B2A7] opacity-85"
                  >
                    <path d="M2 38V2H38" strokeOpacity="0.9" />
                    <path d="M7 34V7H34" strokeOpacity="0.55" />
                    <rect x="2" y="2" width="13" height="13" strokeOpacity="0.95" />
                    <rect x="6" y="6" width="5" height="5" strokeOpacity="0.65" />
                    <path d="M15 7H34M7 15V34" strokeOpacity="0.6" />
                    <path d="M2 20H7M20 2V7" strokeOpacity="0.8" />
                  </svg>
                  {/* 우상단 */}
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 40 40"
                    fill="none"
                    stroke="#D4B2A7"
                    strokeWidth="1.2"
                    className="absolute top-3 right-3 sm:top-4 sm:right-4 md:top-5 md:right-5 w-[22px] h-[22px] sm:w-[28px] sm:h-[28px] md:w-[36px] md:h-[36px] pointer-events-none text-[#D4B2A7] opacity-85 rotate-90"
                  >
                    <path d="M2 38V2H38" strokeOpacity="0.9" />
                    <path d="M7 34V7H34" strokeOpacity="0.55" />
                    <rect x="2" y="2" width="13" height="13" strokeOpacity="0.95" />
                    <rect x="6" y="6" width="5" height="5" strokeOpacity="0.65" />
                    <path d="M15 7H34M7 15V34" strokeOpacity="0.6" />
                    <path d="M2 20H7M20 2V7" strokeOpacity="0.8" />
                  </svg>
                  {/* 우하단 */}
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 40 40"
                    fill="none"
                    stroke="#D4B2A7"
                    strokeWidth="1.2"
                    className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 md:bottom-5 md:right-5 w-[22px] h-[22px] sm:w-[28px] sm:h-[28px] md:w-[36px] md:h-[36px] pointer-events-none text-[#D4B2A7] opacity-85 rotate-180"
                  >
                    <path d="M2 38V2H38" strokeOpacity="0.9" />
                    <path d="M7 34V7H34" strokeOpacity="0.55" />
                    <rect x="2" y="2" width="13" height="13" strokeOpacity="0.95" />
                    <rect x="6" y="6" width="5" height="5" strokeOpacity="0.65" />
                    <path d="M15 7H34M7 15V34" strokeOpacity="0.6" />
                    <path d="M2 20H7M20 2V7" strokeOpacity="0.8" />
                  </svg>
                  {/* 좌하단 */}
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 40 40"
                    fill="none"
                    stroke="#D4B2A7"
                    strokeWidth="1.2"
                    className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 md:bottom-5 md:left-5 w-[22px] h-[22px] sm:w-[28px] sm:h-[28px] md:w-[36px] md:h-[36px] pointer-events-none text-[#D4B2A7] opacity-85 -rotate-90"
                  >
                    <path d="M2 38V2H38" strokeOpacity="0.9" />
                    <path d="M7 34V7H34" strokeOpacity="0.55" />
                    <rect x="2" y="2" width="13" height="13" strokeOpacity="0.95" />
                    <rect x="6" y="6" width="5" height="5" strokeOpacity="0.65" />
                    <path d="M15 7H34M7 15V34" strokeOpacity="0.6" />
                    <path d="M2 20H7M20 2V7" strokeOpacity="0.8" />
                  </svg>

                  <div className="relative z-10 text-center mb-6">
                    <span className="inline-flex items-center justify-center py-[5px] md:py-[6px] px-[14px] md:px-[16px] rounded-[6px] bg-[#87465B] border border-[#D5AFAD] text-[#FFF1E9] text-[14px] md:text-[16px] font-bold tracking-wide whitespace-nowrap">
                      왜, 연애비급인가?
                    </span>
                  </div>
                  <h3 className="relative z-10 text-2xl md:text-[36px] font-elegant font-bold text-[#FAF7F2] leading-[1.4] break-keep mb-8 md:mb-10">
                    &ldquo;진심을 다하고 참아주면 될 줄 알았습니다.<br />
                    그런데 왜 사랑도 <span className="text-[#E5C4BB]">&lsquo;공부&rsquo;</span>해야 했을까요?&rdquo;
                  </h3>

                  {/* 이중 상자 제거: 카드 배경 위에 본문 직접 배치 (최대 너비 800px) */}
                  <div className="relative z-10 max-w-[800px] w-full mx-auto text-left text-[17px] md:text-[18px] text-[#EDE6DA] leading-[1.8] font-normal space-y-5 md:space-y-6 break-keep">
                    <p>
                      어릴 적 우리는 사랑을 이렇게 배웠습니다.<br />
                      <span className="text-[#E5C4BB] font-semibold">
                        &ldquo;진심을 다하면 결국 통한다. 착하게 배려하고 헌신하면 언젠가 내 마음을 알아준다.&rdquo;
                      </span><br />
                      진심을 다하면 마음이 닿고, 더 많이 양보하면 관계는 깊어진다고 믿었습니다.
                    </p>
                    <p>
                      하지만 현실의 연애는 도덕 시험도, 인내심 테스트도 아니었습니다. 온 마음을 내어주고 모든 일정을 상대에게 맞출수록 상대의 긴장감은 사라졌고, 헌신의 대가로 돌아온 것은 깊은 사랑과 존중이 아니라<br />
                      <strong className="text-[#E5C4BB] font-semibold">&lsquo;당연함&rsquo;과 &lsquo;무관심&rsquo;</strong>이었습니다.
                    </p>
                    <p>
                      상대의 마음이 식은 것은 매력이 부족해서가 아닙니다. 관계를 지탱하는 보이지 않는 <strong className="text-[#E5C4BB] font-semibold">&lsquo;무게중심&rsquo;</strong>을 배우지 못했기 때문입니다. 운전면허 없이 도로에 나가면 사고가 나듯,
                      <strong className="text-[#E5C4BB] font-semibold"> 사람의 마음이 어떻게 움직이는지 모른 채 뛰어드는 연애는 늘 같은 자리에서 상처를 남깁니다.</strong>
                    </p>
                    <div className="pt-5 border-t border-[#D4B2A7]/20 text-[#EDE6DA] space-y-4">
                      <p>
                        《연애비급》은 얄팍한 밀당 기술이 아닙니다. 남자의 심리와 무의식이 작동하는 방식, 말 한마디가 관계의 위치를 바꾸는 언어의 원리, 최면과 NLP에서 가져온 관계의 기술까지.
                        <strong className="text-[#E5C4BB] font-semibold"> 사랑을 감정이 아닌 구조로 이해하도록 정리한 책입니다.</strong>
                      </p>
                      <p>
                        진심은 그대로입니다. 달라지는 건 그 진심이 닿는 방법입니다.<br />
                        <strong className="text-[#E5C4BB] font-semibold">불안하게 확인하고 맞춰주던 연애에서, 흔들리지 않고 사랑받는 연애로.</strong>
                      </p>
                    </div>

                    {/* 마무리 강조 문장 */}
                    <div className="pt-6 md:pt-7 mt-6 md:mt-7 border-t border-[#D4B2A7]/25 text-center sm:text-left">
                      <p className="font-elegant font-bold text-base md:text-lg lg:text-xl text-[#E5C4BB] tracking-wide break-keep leading-relaxed">
                        진심에 관계를 읽는 눈을 더하세요. 연락의 기술보다, 관계의 맥락을 먼저 읽으세요.
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* 2. BEFORE·AFTER 비교 이미지 영역 (전후 비교 이미지 다음) */}
              <Reveal>
                <div className="relative w-full overflow-hidden rounded-3xl md:rounded-[40px] border border-[#D4B2A7]/30 shadow-2xl bg-black/40">
                  <Image
                    src="/image/love-secret/love-secret-before-after.png"
                    alt="연애비급 Before & After 구조 변화"
                    width={1672}
                    height={941}
                    sizes="(max-width: 1280px) 100vw, 1280px"
                    className="w-full h-auto object-contain block"
                    priority
                  />
                </div>
              </Reveal>
            </section>

            <ChampagneThreadDivider />

            {/* ═══════════════════════════════════════════════════════════════
                신규 추가: Before & After 1:1 매칭 비교 (기존 연애비급 디자인 톤앤매너 적용)
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-28 w-full max-w-[1280px] mx-auto">
              <Reveal>
                <div
                  className="gungjung-glass py-10 md:py-14 px-4 sm:px-6 md:px-8 rounded-3xl md:rounded-[40px] border border-[#D4B2A7]/30"
                  style={{
                    background: 'linear-gradient(135deg, rgba(139, 38, 62, 0.25) 0%, rgba(10, 5, 20, 0.9) 100%)',
                    boxShadow: '0 12px 40px rgba(186, 141, 126, 0.15)'
                  }}
                >
                  <div className="max-w-4xl mx-auto px-4 text-center mb-10 space-y-3 break-keep">
                    <span className="text-[#D4B2A7] font-elegant text-[12pt] font-semibold tracking-[0.2em] uppercase block mb-3">
                      THE POSITION SHIFT
                    </span>
                    <h3 className="text-2xl md:text-[36px] font-elegant font-bold text-white leading-[1.4] break-keep">
                      <span className="sm:whitespace-nowrap">&ldquo;사랑을 공부하고 내 자리를 바로 세웠을 때,</span><br />
                      <span className="text-[#E5C4BB] sm:whitespace-nowrap">당신의 연애에 일어나는 극적인 반전&rdquo;</span>
                    </h3>
                    <p className="text-[#EDE6DA]/80 text-[18px] font-normal leading-[1.8] break-keep">
                      상대의 반응에 끌려다니던 &apos;을의 자리&apos;에서,<br className="hidden md:inline" />
                      스스로 존중받고 주도권을 쥐는 &apos;중심의 자리&apos;로 이동합니다.
                    </p>
                  </div>

                  <div className="max-w-5xl mx-auto space-y-3.5 md:space-y-4 text-left break-keep">
                    {[
                      {
                        beforeTitle: "연락 텀 하나에 하루 종일 멘탈이 요동친다",
                        beforeSub: "답장을 기다리며 일상이 마비되는 '을의 자리'",
                        afterTitle: "단정한 여백으로 오히려 상대를 초조하게 만든다",
                        afterSub: "내 일상에 집중할수록 남자가 먼저 안달 나 연락해옵니다."
                      },
                      {
                        beforeTitle: "관계가 깨질까 봐 서운한 일도 웃으며 참는다",
                        beforeSub: "맞춰줄수록 ‘당연한 권리’가 되어버린 착한 여자",
                        afterTitle: "감정 소모 없이 우아한 바운더리로 선을 긋는다",
                        afterSub: "화를 내지 않아도 남자가 스스로 예의를 갖추고 눈치를 봅니다."
                      },
                      {
                        beforeTitle: "“나 진짜 좋아?”, “우리 무슨 사이야?” 확인하려 든다",
                        beforeSub: "확답을 요구할수록 가치가 떨어져 달아나는 상대",
                        afterTitle: "남자가 먼저 관계를 정의하고 확답을 조른다",
                        afterSub: "말하지 않아도 대체 불가능한 '트로피'의 자리에 섭니다."
                      },
                      {
                        beforeTitle: "다 챙겨주고 맞춰줬더니 “설레지 않는다”며 차였다",
                        beforeSub: "과도한 정성과 헌신이 남자의 정복 욕구를 0으로 만듦",
                        afterTitle: "남자의 마음에 놓칠 수 있다는 긴장감을 준다",
                        afterSub: "언제든 떠날 수 있는 품격 있는 여자를 남자는 결코 놓지 못합니다."
                      },
                      {
                        beforeTitle: "서운함에 못 이겨 밤에 장문 카톡을 보낸 적이 있다",
                        beforeSub: "상대에게 감정 쓰레기통 취급을 받거나 차단당하는 결말",
                        afterTitle: "단 3줄의 절제된 답장으로 의문과 여운을 준다",
                        afterSub: "구구절절 설명하지 않고 침묵과 여백으로 상황을 종결짓습니다."
                      }
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="grid grid-cols-1 md:grid-cols-2 gap-3.5 md:gap-4 items-stretch"
                      >
                        {/* BEFORE 카드 (코코아 배지 #4B3C43, 밝은 베이지 텍스트) */}
                        <div className="h-full flex items-center gap-3.5 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-black/40 border border-[#D4B2A7]/20 hover:border-[#D4B2A7]/40 transition-all">
                          <span className="w-[68px] shrink-0 inline-flex items-center justify-center py-[5px] px-[12px] rounded-[6px] bg-[#4B3C43] border border-[#79646D] text-[#DED0D2] text-[11px] font-serif font-bold leading-none whitespace-nowrap">
                            BEFORE
                          </span>
                          <div className="flex-1 min-w-0">
                            <p className="text-[#EDE6DA] text-[16px] md:text-[17px] font-semibold leading-[1.4] break-keep">
                              {item.beforeTitle}
                            </p>
                            <p className="text-[#EDE6DA]/65 text-[12px] sm:text-[13px] font-light leading-[1.4] mt-1 break-keep">
                              {item.beforeSub}
                            </p>
                          </div>
                        </div>

                        {/* AFTER 카드 (진한 로즈 배지 #87465B, 딥 플럼 와인 배경) */}
                        <div
                          className="h-full flex items-center gap-3.5 sm:gap-4 p-4 sm:p-5 rounded-2xl border border-[rgba(210,166,172,0.30)] shadow-[0_4px_16px_rgba(0,0,0,0.25)] hover:border-[rgba(210,166,172,0.60)] transition-all"
                          style={{ background: 'rgba(60, 34, 50, 0.80)' }}
                        >
                          <span className="w-[68px] shrink-0 inline-flex items-center justify-center py-[5px] px-[12px] rounded-[6px] bg-[#87465B] border border-[#D5AFAD] text-[#FFF1E9] text-[11px] font-serif font-bold leading-none whitespace-nowrap">
                            AFTER
                          </span>
                          <div className="flex-1 min-w-0">
                            <p className="text-[#F5E9E2] text-[16px] md:text-[17px] font-semibold leading-[1.4] break-keep">
                              {item.afterTitle}
                            </p>
                            <p className="text-[#D5C2C6] text-[12px] sm:text-[13px] font-light leading-[1.4] mt-1 break-keep">
                              {item.afterSub}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </section>

            <ChampagneThreadDivider />

            {/* ═══════════════════════════════════════════════════════════════
                섹션 3: 저자 경력 및 [저자의 말] (신뢰 구축 - 글라스 퍼플 카드)
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-28 w-full max-w-[1280px] mx-auto">
              <Reveal>
                <div
                  className="relative hanji-card-hover backdrop-blur-md p-6 sm:p-8 md:p-14 lg:p-16 rounded-3xl md:rounded-[40px] border border-[#D4B2A7]/70 shadow-[0_16px_45px_rgba(0,0,0,0.65)] cursor-default overflow-hidden"
                  style={{
                    background: 'linear-gradient(to right, rgba(38, 17, 26, 0.85) 0%, rgba(26, 12, 25, 0.85) 40%, rgba(18, 9, 23, 0.85) 70%, rgba(10, 5, 20, 0.85) 100%)',
                    boxShadow: '0 16px 45px rgba(0, 0, 0, 0.65), inset 0 0 0 1px rgba(212, 178, 167, 0.22)'
                  }}
                >
                  {/* 실제 전통 닥종이 한지 질감 레이어 (짧고 가는 불규칙 섬유 + 은은한 펄프 얼룩 + 미세 종이 입자) */}
                  <svg
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full pointer-events-none rounded-[inherit] overflow-hidden"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      {/* 불규칙한 짧은 닥나무 섬유 패턴 (대부분 3~12px, 일부 15~20px, 굵기 0.5~1px, 회베이지/어두운색 혼합) */}
                      <pattern id="hanji-natural-fibers" width="260" height="260" patternUnits="userSpaceOnUse">
                        <path d="M110.5 68.7 Q107.8 70.2 104.8 70.6" stroke="#16070D" strokeWidth="0.7" strokeLinecap="round" opacity="0.27" fill="none" />
                        <path d="M56.3 56.4 Q64.5 62.2 73.2 67" stroke="#DFCECA" strokeWidth="0.7" strokeLinecap="round" opacity="0.21" fill="none" />
                        <path d="M66.5 46.9 Q61 41.4 56 35.5" stroke="#1C080F" strokeWidth="0.8" strokeLinecap="round" opacity="0.26" fill="none" />
                        <path d="M139.8 93.5 Q138.3 90.9 138.1 87.9" stroke="#A88880" strokeWidth="0.8" strokeLinecap="round" opacity="0.17" fill="none" />
                        <path d="M103.8 29.7 Q105 30.9 105.9 32.3" stroke="#C9B6A9" strokeWidth="0.5" strokeLinecap="round" opacity="0.16" fill="none" />
                        <path d="M198.3 225.5 Q197 223.3 195 221.8" stroke="#16070D" strokeWidth="0.5" strokeLinecap="round" opacity="0.31" fill="none" />
                        <path d="M171.8 48.9 Q170.2 50.7 168.3 52" stroke="#1C080F" strokeWidth="0.6" strokeLinecap="round" opacity="0.23" fill="none" />
                        <path d="M236.6 256.3 Q233.8 258.7 230.5 260.3" stroke="#16070D" strokeWidth="0.9" strokeLinecap="round" opacity="0.25" fill="none" />
                        <path d="M224.5 252.9 Q232.8 255.6 241 258.6" stroke="#DFCECA" strokeWidth="0.7" strokeLinecap="round" opacity="0.14" fill="none" />
                        <path d="M98.5 184.1 Q101.4 181.5 104.3 178.7" stroke="#1C080F" strokeWidth="0.8" strokeLinecap="round" opacity="0.29" fill="none" />
                        <path d="M231.2 192.2 Q231.6 197.9 233.1 203.5" stroke="#2C0E18" strokeWidth="0.7" strokeLinecap="round" opacity="0.31" fill="none" />
                        <path d="M39.5 1.3 Q35 3.2 30.5 5" stroke="#835E57" strokeWidth="0.8" strokeLinecap="round" opacity="0.20" fill="none" />
                        <path d="M178.4 234.7 Q187.2 231.1 196.3 228.5" stroke="#D4B2A7" strokeWidth="0.7" strokeLinecap="round" opacity="0.14" fill="none" />
                        <path d="M57.1 124.8 Q59.1 122.1 60.7 119.2" stroke="#DFCECA" strokeWidth="0.7" strokeLinecap="round" opacity="0.18" fill="none" />
                        <path d="M75.3 198.3 Q78.8 201.7 82.5 204.7" stroke="#835E57" strokeWidth="0.9" strokeLinecap="round" opacity="0.18" fill="none" />
                        <path d="M156.6 168.8 Q158.1 168.5 159.6 168.1" stroke="#2C0E18" strokeWidth="0.6" strokeLinecap="round" opacity="0.29" fill="none" />
                        <path d="M3.2 65.5 Q-3.4 72 -9.4 79.2" stroke="#240B13" strokeWidth="0.8" strokeLinecap="round" opacity="0.28" fill="none" />
                        <path d="M76 79.3 Q76.2 88.7 76.7 98" stroke="#DFCECA" strokeWidth="0.6" strokeLinecap="round" opacity="0.20" fill="none" />
                        <path d="M130.3 103.3 Q133.7 104.8 137.1 106.2" stroke="#16070D" strokeWidth="0.6" strokeLinecap="round" opacity="0.30" fill="none" />
                        <path d="M114.6 7.6 Q118.6 16 122.9 24.2" stroke="#835E57" strokeWidth="0.6" strokeLinecap="round" opacity="0.16" fill="none" />
                        <path d="M34.4 147.5 Q37.1 143.3 38.6 138.5" stroke="#1C080F" strokeWidth="0.7" strokeLinecap="round" opacity="0.26" fill="none" />
                        <path d="M214.4 240.9 Q213.9 245.2 213 249.4" stroke="#1C080F" strokeWidth="0.9" strokeLinecap="round" opacity="0.23" fill="none" />
                        <path d="M25 218.6 Q26.8 215.8 27.6 212.6" stroke="#16070D" strokeWidth="0.9" strokeLinecap="round" opacity="0.27" fill="none" />
                        <path d="M159.2 183.2 Q156.3 190.3 152.4 196.9" stroke="#C9B6A9" strokeWidth="0.9" strokeLinecap="round" opacity="0.20" fill="none" />
                        <path d="M48.2 86.4 Q48.8 84.8 48.2 83.1" stroke="#835E57" strokeWidth="0.5" strokeLinecap="round" opacity="0.19" fill="none" />
                        <path d="M84.1 194.5 Q88.1 195.2 91.8 196.8" stroke="#A88880" strokeWidth="0.8" strokeLinecap="round" opacity="0.15" fill="none" />
                        <path d="M71.9 63.6 Q64.7 62.5 57.5 62.9" stroke="#D4B2A7" strokeWidth="0.8" strokeLinecap="round" opacity="0.15" fill="none" />
                        <path d="M69 154.8 Q69 156.5 67.8 157.7" stroke="#D4B2A7" strokeWidth="0.6" strokeLinecap="round" opacity="0.22" fill="none" />
                        <path d="M131.8 184.3 Q131.6 187.4 131 190.4" stroke="#240B13" strokeWidth="0.7" strokeLinecap="round" opacity="0.25" fill="none" />
                        <path d="M14.7 30 Q12.8 34.1 9.8 37.5" stroke="#C9B6A9" strokeWidth="0.8" strokeLinecap="round" opacity="0.19" fill="none" />
                        <path d="M157.5 123.8 Q161.1 122 164.3 119.7" stroke="#DFCECA" strokeWidth="0.6" strokeLinecap="round" opacity="0.16" fill="none" />
                        <path d="M157.1 141.1 Q157.3 138.9 158.6 137.1" stroke="#D4B2A7" strokeWidth="0.7" strokeLinecap="round" opacity="0.16" fill="none" />
                        <path d="M105.8 227.9 Q102.2 231.7 98.1 235" stroke="#C9B6A9" strokeWidth="0.8" strokeLinecap="round" opacity="0.14" fill="none" />
                        <path d="M155.3 16 Q156.8 17.9 157.9 20.1" stroke="#C9B6A9" strokeWidth="0.7" strokeLinecap="round" opacity="0.16" fill="none" />
                        <path d="M256.6 225.1 Q259.4 221.2 261.2 216.6" stroke="#240B13" strokeWidth="0.7" strokeLinecap="round" opacity="0.24" fill="none" />
                        <path d="M221.2 127.9 Q225 118.8 228.6 109.6" stroke="#16070D" strokeWidth="0.7" strokeLinecap="round" opacity="0.26" fill="none" />
                        <path d="M19.7 33.8 Q18.5 31.4 17.6 28.9" stroke="#C9B6A9" strokeWidth="0.8" strokeLinecap="round" opacity="0.18" fill="none" />
                        <path d="M15.5 229.5 Q19.7 230.2 23.7 231.7" stroke="#1C080F" strokeWidth="0.9" strokeLinecap="round" opacity="0.28" fill="none" />
                        <path d="M17.1 256.7 Q13.5 254.6 10.8 251.4" stroke="#DFCECA" strokeWidth="0.7" strokeLinecap="round" opacity="0.15" fill="none" />
                        <path d="M236.3 93.1 Q237.2 96.7 237.4 100.4" stroke="#95716A" strokeWidth="0.7" strokeLinecap="round" opacity="0.19" fill="none" />
                        <path d="M99.2 191.5 Q95 187.4 90.7 183.5" stroke="#1C080F" strokeWidth="0.6" strokeLinecap="round" opacity="0.29" fill="none" />
                        <path d="M199.3 96.8 Q201.9 93.5 203.7 89.7" stroke="#DFCECA" strokeWidth="0.9" strokeLinecap="round" opacity="0.18" fill="none" />
                        <path d="M203.7 210.2 Q203.2 207.3 204.1 204.6" stroke="#DFCECA" strokeWidth="0.8" strokeLinecap="round" opacity="0.16" fill="none" />
                        <path d="M139.1 196.2 Q137.8 199.6 135.3 202.4" stroke="#2C0E18" strokeWidth="0.6" strokeLinecap="round" opacity="0.26" fill="none" />
                        <path d="M75.8 254 Q77.7 257.5 80.1 260.7" stroke="#C9B6A9" strokeWidth="0.8" strokeLinecap="round" opacity="0.21" fill="none" />
                        <path d="M16.3 207.1 Q11.3 206.4 6.4 205.7" stroke="#A88880" strokeWidth="0.7" strokeLinecap="round" opacity="0.16" fill="none" />
                        <path d="M151.1 155.8 Q150.8 159.6 149 162.9" stroke="#A88880" strokeWidth="0.6" strokeLinecap="round" opacity="0.18" fill="none" />
                        <path d="M253.8 57.2 Q254.6 55.4 254.9 53.5" stroke="#E5C4BB" strokeWidth="0.9" strokeLinecap="round" opacity="0.18" fill="none" />
                        <path d="M27.5 36.2 Q33.8 29 39.9 21.6" stroke="#2C0E18" strokeWidth="0.7" strokeLinecap="round" opacity="0.22" fill="none" />
                        <path d="M19.1 25.2 Q14.2 24.8 9.2 24.4" stroke="#E5C4BB" strokeWidth="0.9" strokeLinecap="round" opacity="0.14" fill="none" />
                        <path d="M232.7 101.6 Q233.1 104.7 233 107.8" stroke="#C9B6A9" strokeWidth="0.7" strokeLinecap="round" opacity="0.14" fill="none" />
                        <path d="M34.5 43 Q34.9 37.8 34.6 32.6" stroke="#2C0E18" strokeWidth="0.9" strokeLinecap="round" opacity="0.29" fill="none" />
                        <path d="M240.4 25.4 Q241.2 23.1 242.3 20.8" stroke="#240B13" strokeWidth="0.6" strokeLinecap="round" opacity="0.26" fill="none" />
                        <path d="M89.8 129.2 Q87.8 124.4 85.6 119.7" stroke="#16070D" strokeWidth="0.8" strokeLinecap="round" opacity="0.31" fill="none" />
                        <path d="M97.2 193.9 Q99.9 197.5 102.3 201.3" stroke="#DFCECA" strokeWidth="0.8" strokeLinecap="round" opacity="0.19" fill="none" />
                        <path d="M216 91.6 Q218.6 90.9 220.9 89.5" stroke="#A88880" strokeWidth="0.7" strokeLinecap="round" opacity="0.20" fill="none" />
                        <path d="M77.7 149.2 Q81 149.5 84.2 150.4" stroke="#C9B6A9" strokeWidth="0.7" strokeLinecap="round" opacity="0.21" fill="none" />
                        <path d="M197.8 232 Q196.6 234.4 196.2 237" stroke="#E5C4BB" strokeWidth="0.8" strokeLinecap="round" opacity="0.17" fill="none" />
                        <path d="M223.3 146.1 Q231.4 143.3 239.7 141.5" stroke="#D4B2A7" strokeWidth="0.8" strokeLinecap="round" opacity="0.18" fill="none" />
                        <path d="M227.9 24.7 Q228.3 26.9 227.5 29" stroke="#E5C4BB" strokeWidth="0.6" strokeLinecap="round" opacity="0.13" fill="none" />
                        <path d="M247.8 259.9 Q246.6 264.6 244.2 268.9" stroke="#16070D" strokeWidth="0.7" strokeLinecap="round" opacity="0.24" fill="none" />
                        <path d="M237.7 177.5 Q237.5 184.7 236.5 191.9" stroke="#E5C4BB" strokeWidth="0.6" strokeLinecap="round" opacity="0.19" fill="none" />
                        <path d="M146.3 146.4 Q147.2 144.6 147.7 142.6" stroke="#240B13" strokeWidth="0.6" strokeLinecap="round" opacity="0.23" fill="none" />
                        <path d="M185.7 195.5 Q180.1 196.7 174.6 197.8" stroke="#DFCECA" strokeWidth="0.8" strokeLinecap="round" opacity="0.19" fill="none" />
                        <path d="M143.8 141.7 Q139.9 142.4 136.2 143.7" stroke="#C9B6A9" strokeWidth="0.8" strokeLinecap="round" opacity="0.21" fill="none" />
                        <path d="M173.6 61.7 Q171.8 64.7 169.1 66.8" stroke="#D4B2A7" strokeWidth="0.6" strokeLinecap="round" opacity="0.16" fill="none" />
                        <path d="M250.9 223.1 Q249.1 222.8 247.3 223.2" stroke="#C9B6A9" strokeWidth="0.9" strokeLinecap="round" opacity="0.18" fill="none" />
                        <path d="M6 156.1 Q1.5 152.3 -3.5 149.3" stroke="#DFCECA" strokeWidth="0.8" strokeLinecap="round" opacity="0.16" fill="none" />
                        <path d="M8.6 65.3 Q9.3 62.7 9.4 60.1" stroke="#1C080F" strokeWidth="0.9" strokeLinecap="round" opacity="0.31" fill="none" />
                        <path d="M174.4 120.7 Q173.4 125.8 172.9 131" stroke="#1C080F" strokeWidth="0.7" strokeLinecap="round" opacity="0.31" fill="none" />
                        <path d="M229 143.2 Q234.7 142.9 240.4 142.3" stroke="#D4B2A7" strokeWidth="0.6" strokeLinecap="round" opacity="0.19" fill="none" />
                        <path d="M226.6 2.5 Q224.4 5.4 221.5 7.5" stroke="#835E57" strokeWidth="0.6" strokeLinecap="round" opacity="0.15" fill="none" />
                        <path d="M207.2 119 Q205.9 118.2 204.6 117.4" stroke="#D4B2A7" strokeWidth="0.9" strokeLinecap="round" opacity="0.16" fill="none" />
                        <path d="M53.2 192.3 Q53.1 188.5 52.4 184.7" stroke="#D4B2A7" strokeWidth="0.9" strokeLinecap="round" opacity="0.18" fill="none" />
                        <path d="M122.2 7.5 Q120.4 6.2 118.5 4.8" stroke="#95716A" strokeWidth="0.5" strokeLinecap="round" opacity="0.20" fill="none" />
                        <path d="M153.1 253.8 Q151.7 252.7 151.7 250.9" stroke="#240B13" strokeWidth="0.9" strokeLinecap="round" opacity="0.31" fill="none" />
                        <path d="M166.1 124.8 Q171.2 124.1 176.1 122.8" stroke="#16070D" strokeWidth="0.9" strokeLinecap="round" opacity="0.23" fill="none" />
                        <path d="M151.8 226 Q150.6 227.1 149.5 228.3" stroke="#D4B2A7" strokeWidth="0.7" strokeLinecap="round" opacity="0.19" fill="none" />
                        <path d="M19.1 138.9 Q18.1 135.3 18.5 131.6" stroke="#DFCECA" strokeWidth="0.8" strokeLinecap="round" opacity="0.22" fill="none" />
                        <path d="M171 259.7 Q168.8 251.1 167.9 242.2" stroke="#95716A" strokeWidth="0.8" strokeLinecap="round" opacity="0.19" fill="none" />
                        <path d="M80.9 57.7 Q82.6 53.4 83 48.8" stroke="#835E57" strokeWidth="0.6" strokeLinecap="round" opacity="0.19" fill="none" />
                        <path d="M230.9 184.9 Q232.4 185.9 233.9 187" stroke="#C9B6A9" strokeWidth="0.7" strokeLinecap="round" opacity="0.16" fill="none" />
                        <path d="M20.8 107 Q19.5 116.7 19.1 126.4" stroke="#95716A" strokeWidth="0.5" strokeLinecap="round" opacity="0.17" fill="none" />
                        <path d="M66.6 106.6 Q65.6 113.8 64.8 121" stroke="#D4B2A7" strokeWidth="0.5" strokeLinecap="round" opacity="0.21" fill="none" />
                        <path d="M3.8 9 Q5.4 14.4 6.8 19.9" stroke="#A88880" strokeWidth="0.8" strokeLinecap="round" opacity="0.16" fill="none" />
                      </pattern>

                      {/* 은은한 한지 명암 얼룩 (닥나무 펄프 구름결) */}
                      <filter id="hanji-cloudy-pulp">
                        <feTurbulence type="fractalNoise" baseFrequency="0.012 0.018" numOctaves="3" result="pulpNoise" />
                        <feColorMatrix type="matrix" values="1 0 0 0 0.85  0 1 0 0 0.72  0 0 1 0 0.68  0 0 0 0.05 0" />
                      </filter>

                      {/* 미세 종이 입자 (한지 표면 질감) */}
                      <filter id="hanji-author-paper-grain">
                        <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="3" result="paperTooth" />
                        <feColorMatrix type="matrix" values="1 0 0 0 0.8  0 1 0 0 0.7  0 0 1 0 0.65  0 0 0 0.035 0" />
                      </filter>
                    </defs>

                    {/* 1단계: 닥나무 펄프 명암 얼룩 */}
                    <rect width="100%" height="100%" filter="url(#hanji-cloudy-pulp)" />

                    {/* 2단계: 미세 종이 입자 */}
                    <rect width="100%" height="100%" filter="url(#hanji-author-paper-grain)" />

                    {/* 3단계: 밀도 높게 흩뿌려진 짧은 닥나무 섬유들 */}
                    <rect width="100%" height="100%" fill="url(#hanji-natural-fibers)" />
                  </svg>

                  {/* 네 모서리 전통 한국식 격자 문양 (1.5~2배 확대: PC 36px, 모바일 22px, 선명한 샴페인골드) */}
                  {/* 좌상단 */}
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 40 40"
                    fill="none"
                    stroke="#D4B2A7"
                    strokeWidth="1.2"
                    className="absolute top-3 left-3 sm:top-4 sm:left-4 md:top-5 md:left-5 w-[22px] h-[22px] sm:w-[28px] sm:h-[28px] md:w-[36px] md:h-[36px] pointer-events-none text-[#D4B2A7] opacity-85"
                  >
                    <path d="M2 38V2H38" strokeOpacity="0.9" />
                    <path d="M7 34V7H34" strokeOpacity="0.55" />
                    <rect x="2" y="2" width="13" height="13" strokeOpacity="0.95" />
                    <rect x="6" y="6" width="5" height="5" strokeOpacity="0.65" />
                    <path d="M15 7H34M7 15V34" strokeOpacity="0.6" />
                    <path d="M2 20H7M20 2V7" strokeOpacity="0.8" />
                  </svg>
                  {/* 우상단 */}
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 40 40"
                    fill="none"
                    stroke="#D4B2A7"
                    strokeWidth="1.2"
                    className="absolute top-3 right-3 sm:top-4 sm:right-4 md:top-5 md:right-5 w-[22px] h-[22px] sm:w-[28px] sm:h-[28px] md:w-[36px] md:h-[36px] pointer-events-none text-[#D4B2A7] opacity-85 rotate-90"
                  >
                    <path d="M2 38V2H38" strokeOpacity="0.9" />
                    <path d="M7 34V7H34" strokeOpacity="0.55" />
                    <rect x="2" y="2" width="13" height="13" strokeOpacity="0.95" />
                    <rect x="6" y="6" width="5" height="5" strokeOpacity="0.65" />
                    <path d="M15 7H34M7 15V34" strokeOpacity="0.6" />
                    <path d="M2 20H7M20 2V7" strokeOpacity="0.8" />
                  </svg>
                  {/* 우하단 */}
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 40 40"
                    fill="none"
                    stroke="#D4B2A7"
                    strokeWidth="1.2"
                    className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 md:bottom-5 md:right-5 w-[22px] h-[22px] sm:w-[28px] sm:h-[28px] md:w-[36px] md:h-[36px] pointer-events-none text-[#D4B2A7] opacity-85 rotate-180"
                  >
                    <path d="M2 38V2H38" strokeOpacity="0.9" />
                    <path d="M7 34V7H34" strokeOpacity="0.55" />
                    <rect x="2" y="2" width="13" height="13" strokeOpacity="0.95" />
                    <rect x="6" y="6" width="5" height="5" strokeOpacity="0.65" />
                    <path d="M15 7H34M7 15V34" strokeOpacity="0.6" />
                    <path d="M2 20H7M20 2V7" strokeOpacity="0.8" />
                  </svg>
                  {/* 좌하단 */}
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 40 40"
                    fill="none"
                    stroke="#D4B2A7"
                    strokeWidth="1.2"
                    className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 md:bottom-5 md:left-5 w-[22px] h-[22px] sm:w-[28px] sm:h-[28px] md:w-[36px] md:h-[36px] pointer-events-none text-[#D4B2A7] opacity-85 -rotate-90"
                  >
                    <path d="M2 38V2H38" strokeOpacity="0.9" />
                    <path d="M7 34V7H34" strokeOpacity="0.55" />
                    <rect x="2" y="2" width="13" height="13" strokeOpacity="0.95" />
                    <rect x="6" y="6" width="5" height="5" strokeOpacity="0.65" />
                    <path d="M15 7H34M7 15V34" strokeOpacity="0.6" />
                    <path d="M2 20H7M20 2V7" strokeOpacity="0.8" />
                  </svg>

                  {/* 이름 & 타이틀 (가운데 정렬) */}
                  <div className="relative z-10 text-center mb-8 md:mb-10 space-y-2.5 break-keep">
                    <span className="text-[#D4B2A7] font-elegant text-[12pt] font-semibold tracking-[0.2em] uppercase block">
                      AUTHOR & MASTER
                    </span>
                    <h3 className="text-2xl md:text-[36px] font-elegant font-bold text-[#FAF7F2] tracking-wide">
                      백도화 (白桃花)
                    </h3>
                    <p className="text-[18px] text-[#D4B2A7]/90 font-normal leading-[1.8] break-keep">
                      마음의 구조를 읽고, 관계의 자리를 회복시키는 심리 멘토
                    </p>

                    {/* 핵심 공인 자격 뱃지 (반투명 로즈퍼플 바탕 + 얇은 테두리) */}
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
                          className="inline-flex items-center justify-center py-[5px] px-[12px] rounded-[6px] bg-[#87465B] border border-[#D5AFAD] text-[#FFF1E9] text-xs md:text-sm font-bold tracking-tight whitespace-nowrap"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* 이중 상자 제거: 저자의 편지 본문 (왼쪽 정렬, 최대 너비 800px) */}
                  <div className="relative z-10 max-w-[800px] mx-auto text-left text-[17px] md:text-[18px] text-[#EDE6DA] leading-[1.8] font-normal space-y-5 md:space-y-6 break-keep border-t border-[#D4B2A7]/20 pt-8 md:pt-10">
                    <div className="text-[#D4B2A7]/50 text-3xl font-serif leading-none select-none -mb-2">“</div>

                    <p className="text-[#FAF7F2] font-semibold text-[18px] md:text-[19px]">
                      연애비급의 저자 백도화입니다.
                    </p>
                    <p>
                      저 또한 온 마음을 다해 사랑했고, 끝없이 헌신했습니다. 하지만 그 시절 제게 돌아온 것은 깊은 상처와 배신이었습니다. 그 아픔 끝에 <span className="text-[#E5C4BB] font-semibold">사람의 마음과 관계의 구조를 깊이 파고들기 시작했습니다.</span> 그리고 배운 것을 제 삶에 직접 적용했을 때, 거짓말처럼 관계의 역학이 뒤집히는 것을 경험했습니다. 공부로 깨달은 남자의 무의식 심리가 현실의 연애에서 그대로 작동한 것입니다.
                    </p>
                    <p>
                      그래서 저는 <span className="text-[#E5C4BB] font-semibold">연애를 결코 &apos;감&apos;이나 &apos;운&apos;으로 말하지 않습니다.</span> 심리학을 바탕으로 NLP 상담, 전문 최면, 명상 지도, 뇌 트레이닝, 그리고 명리학까지 사람의 마음과 관계의 흐름을 읽는 도구들을 오랜 시간 연구하고 현장에서 다뤄왔습니다. <span className="text-[#E5C4BB] font-semibold">직접 겪은 경험을 배운 것으로 풀어내고, 배운 것을 다시 경험으로 확인해 왔습니다.</span>
                    </p>
                    <p>
                      수많은 연애 이야기를 마주하며 늘 마주치는 안타까운 장면이 있습니다. 더 잘하려고 애쓰는 사람이 먼저 지치고, 사랑을 확인하려는 사람이 먼저 작아지는 모습입니다. 그것은 결코 당신의 마음이 부족하거나 성격이 약해서가 아닙니다. 관계 안에서 내가 서 있어야 할 &lsquo;자리(Position)&rsquo;를 잃어버렸기 때문입니다.
                    </p>
                    <p>
                      《연애비급》은 심리학의 구조적 통찰, 최면·NLP의 언어 역학, 명리학의 에너지 관점을 하나의 정교한 <span className="text-[#E5C4BB] font-semibold">&lsquo;관계의 지도&rsquo;</span>로 엮어낸 책입니다.
                    </p>
                    <p className="text-[#E5C4BB] font-semibold pt-1">
                      사랑 앞에서 더 이상은 작아지지 않기를,<br />
                      그리고 나다운 온전한 매력으로 당당하게 사랑받기를.
                    </p>

                    {/* 서명과 낙관 묶음 (본문과 28~32px 간격, 오른쪽 정렬) */}
                    <div className="pt-7 md:pt-8 flex items-center justify-end gap-2.5 md:gap-3">
                      <span className="text-[15px] md:text-[17px] text-[#EDE6DA] font-elegant font-medium tracking-wide">
                        저자 백도화 드림
                      </span>
                      <img
                        src="/image/love-secret/baekdohwa-vertical-seal.png?v=20261103"
                        alt="백도화 낙관"
                        className="h-[68px] sm:h-[78px] md:h-[92px] w-auto object-contain select-none opacity-95 hover:opacity-100 transition-opacity"
                      />
                    </div>
                  </div>
                </div>
              </Reveal>
            </section>
            <ChampagneThreadDivider />

            {/* ═══════════════════════════════════════════════════════════════
                2. Product Overview Section: THE FINAL SOLUTION · 戀愛秘笈
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-28 w-full max-w-[1280px] mx-auto">
              <Reveal>
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                  {/* 왼쪽 책 이미지 (3:4 비율) */}
                  <div className="relative w-full aspect-[3/4] overflow-hidden rounded-[32px] sm:rounded-[40px] border border-[#D4B2A7]/30 shadow-2xl bg-black/40">
                    <Image
                      src={productData.overviewImage}
                      alt="수많은 눈물과 치열한 연구 끝에 탄생한 연애비급"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                      priority
                    />
                  </div>

                  {/* 오른쪽 핵심 가치 및 6개 별(✦) 포인트 카드 (좌측 이미지 시작선에 맞춤) */}
                  <div className="space-y-6 sm:space-y-7 text-left break-keep lg:pt-1">
                    <div>
                      {/* [메인 타이틀] 단 하나의 비기(秘笈) / 《연애비급》이 탄생했습니다. (2줄 구성) */}
                      <h2 className="text-[26px] sm:text-[34px] md:text-[42px] lg:text-[46px] font-elegant font-bold text-[#FAF7F2] leading-[1.35] break-keep">
                        단 하나의 비기(秘笈)<br />
                        <span className="bg-gradient-to-r from-[#D49992] to-[#E5C4BB] bg-clip-text text-transparent font-extrabold drop-shadow-[0_0_20px_rgba(229,196,187,0.35)]">
                          《연애비급》
                        </span>
                        이 탄생했습니다.
                      </h2>
                    </div>

                    {/* [스토리 브릿지 본문] 짧고 직관적으로 분할된 문단 */}
                    <div className="space-y-4 text-[16px] md:text-[17px] lg:text-[18px] text-[#EDE6DA] leading-[1.8] font-normal break-keep">
                      <p className="text-[#EDE6DA]/90">
                        진심만으로 상처받던 시절을 지나, 심리학·최면 역학·뇌과학으로 직접 증명해 낸 관계의 공식.
                      </p>
                      <p className="text-[#FAF7F2] font-semibold text-[17px] md:text-[19px]">
                        더 이상 상대의 눈치를 보며 울지 마십시오.
                      </p>
                      <p className="text-[#EDE6DA]/90">
                        <strong className="text-[#E5C4BB] font-semibold">《연애비급》</strong>은 사랑을 구걸하던 당신의 손에{' '}
                        <span className="text-[#FAF7F2] font-semibold">&lsquo;선택하는 주도권&rsquo;</span>과{' '}
                        <span className="text-[#FAF7F2] font-semibold">&lsquo;흔들리지 않는 중심&rsquo;</span>을 쥐여드리기 위해 탄생한 실전 설계도입니다.
                      </p>
                    </div>

                    {/* [체크 칩 대신 별(✦) 박스 6개] 로즈코코아 테마 프리미엄 엠블럼 박스 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2 sm:pt-3">
                      {[
                        "연애 포지션 회복",
                        "남자의 심리 구조 이해",
                        "흔들리지 않는 매력의 근원",
                        "무의식적 관계 패턴 해석",
                        "말의 결을 바꾸는 언어 구조",
                        "내가 선택하는 자리로"
                      ].map((item, idx) => (
                        <div
                          key={idx}
                          className="p-3.5 sm:p-4 rounded-xl border border-[rgba(210,166,172,0.35)] flex items-center gap-3 backdrop-blur-md transition-all duration-300 hover:border-[rgba(210,166,172,0.65)] hover:scale-[1.01]"
                          style={{
                            background: 'rgba(60, 34, 50, 0.82)',
                            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.25)'
                          }}
                        >
                          {/* 별(✦) 엠블럼 (로즈코코아 배지 톤 매칭) */}
                          <div className="w-6 h-6 rounded-lg bg-[#87465B] flex items-center justify-center shrink-0 border border-[#D5AFAD] shadow-[0_0_10px_rgba(213,175,173,0.35)] text-[#FFF1E9] text-[13px] font-bold">
                            ✦
                          </div>
                          <span className="text-[14px] sm:text-[15px] text-[#F5E9E2] font-semibold tracking-wide break-keep">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            </section>

            <ChampagneThreadDivider />

            {/* ═══════════════════════════════════════════════════════════════
                3. Recommended For Section (기존 추천 대상 보존)
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-28 w-full max-w-[1280px] mx-auto">
              <Reveal>
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                  {/* 왼쪽 추천 리스트 */}
                  <div className="space-y-8 text-left break-keep">
                    <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white tracking-wide">
                      이런 분께 <span className="text-[#E5C4BB]">추천합니다</span>
                    </h2>

                    <RecommendedForCards
                      textClassName="text-[16px] md:text-[18px]"
                      items={[
                        "연애할 때 늘 내가 더 불안해지는 분",
                        "잘해줄수록 관계가 기울어진다고 느꼈던 분",
                        "사랑받기 위해 나를 자주 설명하고 증명해온 분",
                        "남자의 반응에 따라 내 감정이 크게 흔들리는 분",
                        "연애에서 늘 기다리는 사람, 맞춰주는 사람의 자리에 섰던 분",
                        "더 이상 사랑 앞에서 작아지고 싶지 않은 분",
                        "관계 안에서도 나의 기준과 품격을 지키고 싶은 분",
                        "성숙한 여성의 연애 감각과 자기 가치를 회복하고 싶은 분"
                      ]}
                    />
                  </div>

                  {/* 오른쪽 세로 이미지 (3:4 비율, 품격 있는 여성 이미지) */}
                  <div className="relative w-full aspect-[3/4] overflow-hidden rounded-[40px] border border-[#D4B2A7]/30 shadow-2xl">
                    <Image
                      src={productData.recommendedImage}
                      alt="나의 기준과 품격을 지키는 여성 - 연애비급"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </Reveal>
            </section>

            <ChampagneThreadDivider />

            {/* ═══════════════════════════════════════════════════════════════
                신규 교체: 솔루션 인과관계 통합 설명 (STEP 1: 6대 구조 -> STEP 2: 4대 역학)
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-28 text-left w-full max-w-[1280px] mx-auto">
              <Reveal>
                <div className="py-4">
                  {/* 솔루션 시스템 인포그래픽 (하단 STEP 1 박스와 동일한 가로폭 적용) */}
                  <div className="mb-10 md:mb-14">
                    <div className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden border border-[#D4B2A7]/30 bg-black/40 shadow-[0_12px_40px_rgba(0,0,0,0.6)]">
                      <div className="relative w-full">
                        <Image
                          src="/image/love-secret/solution-system.png?v=20261102"
                          alt="연애비급 솔루션 시스템 인포그래픽: STEP 1 내 자리 바로잡기 & STEP 2 관계에 적용하기"
                          width={1672}
                          height={941}
                          sizes="(max-width: 1280px) 100vw, 1280px"
                          className="w-full h-auto object-contain block"
                          priority
                        />
                      </div>
                    </div>
                  </div>

                  {/* 인트로 헤드라인 */}
                  <div className="text-center mb-12 space-y-5 break-keep">
                    <span className="text-[#D4B2A7] font-elegant text-[12pt] font-semibold tracking-[0.2em] uppercase block">
                      THE BAEKDOHWA SOLUTION
                    </span>
                    <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white leading-[1.4] break-keep">
                      복잡한 심리 이론은 필요 없습니다.<br />
                      <span className="text-[#E5C4BB]">내 자리를 바로잡고, 상대를 움직이는 기술을 얹습니다.</span>
                    </h2>
                    <p className="text-[#EDE6DA]/75 text-[17px] md:text-[18px] max-w-2xl mx-auto font-normal leading-[1.8] break-keep">
                      내가 흔들리는 상태에서는 어떤 밀당 기술도 먹히지 않습니다.<br />
                      《연애비급》은 <strong className="text-[#FAF7F2] font-semibold">내면의 중심(6대 구조)</strong>을 먼저 세운 뒤, <strong className="text-[#E5C4BB] font-semibold">상대의 무의식을 자극하는 기술(4대 역학)</strong>을 실행하도록 설계되었습니다.
                    </p>
                  </div>

                  {/* STEP 1 & STEP 2 컨테이너 */}
                  <div className="space-y-10">

                    {/* STEP 1 */}
                    <div
                      className="gungjung-glass p-6 md:p-10 rounded-3xl border border-[#D4B2A7]/30 relative overflow-hidden"
                      style={{
                        background: 'linear-gradient(135deg, rgba(74, 35, 43, 0.35) 0%, rgba(10, 5, 20, 0.85) 100%)',
                        boxShadow: '0 8px 32px rgba(197, 139, 160, 0.08)'
                      }}
                    >
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="inline-flex items-center justify-center py-[5px] px-[12px] rounded-[6px] bg-[#87465B] border border-[#D5AFAD] text-[#FFF1E9] font-serif font-bold text-xs tracking-wider whitespace-nowrap">
                          STEP 1
                        </span>
                        <h3 className="text-xl md:text-2xl font-elegant font-bold text-white leading-[1.5]">
                          내 자리 바로잡기 (6대 핵심 구조)
                        </h3>
                      </div>
                      <p className="text-[#EDE6DA]/75 text-[17px] md:text-[18px] mb-8 leading-[1.8] font-normal break-keep">
                        사랑받기 위해 나를 설명하고 증명하던 ‘낮은 자리’에서 벗어나는 내면의 기초 작업입니다. 감정에 휘둘리지 않는 자리가 잡혀야 비로소 관계의 주도권이 생깁니다.
                      </p>

                      {/* 6대 구조 그리드 */}
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {[
                          { code: "01. Position", title: "중심 자리 회복", desc: "확인받는 자리가 아닌 존중받는 자리" },
                          { code: "02. State", title: "매혹적 긴장감", desc: "편안함과 긴장감이 공존하는 상태" },
                          { code: "03. Identity", title: "고유한 정체성", desc: "대체 불가능한 독보적 가치 인식" },
                          { code: "04. Aura", title: "말 없는 여백", desc: "구차한 해명 없이 전해지는 단단함" },
                          { code: "05. Boundary", title: "품격의 경계선", desc: "자기 파괴적 헌신을 차단하는 선" },
                          { code: "06. Choice", title: "선택하는 권한", desc: "처분을 기다리지 않고 내가 결정" }
                        ].map((item, idx) => (
                          <div
                            key={idx}
                            className="p-4 rounded-2xl bg-black/40 border border-[#D4B2A7]/20 hover:border-[#D4B2A7]/50 transition-all break-keep"
                          >
                            <span className="text-[#D4B2A7] text-xs font-serif font-bold tracking-wider">{item.code}</span>
                            <p className="text-white text-sm md:text-base font-elegant font-bold mt-2 leading-[1.5]">{item.title}</p>
                            <p className="text-[#EDE6DA]/60 text-xs mt-1.5 font-light leading-[1.65]">{item.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* 연결 화살표 */}
                    <div className="flex justify-center -my-4 relative z-10">
                      <div className="w-11 h-11 rounded-full bg-[#A66B73] border border-[#D4B2A7]/50 flex items-center justify-center text-[#FAF6EE] shadow-[0_0_20px_rgba(166,107,115,0.3)] font-bold">
                        ↓
                      </div>
                    </div>

                    {/* STEP 2 */}
                    <div
                      className="gungjung-glass p-6 md:p-10 rounded-3xl border border-[#D4B2A7]/40 relative overflow-hidden"
                      style={{
                        background: 'linear-gradient(135deg, rgba(139, 38, 62, 0.3) 0%, rgba(10, 5, 20, 0.9) 100%)',
                        boxShadow: '0 12px 40px rgba(186, 141, 126, 0.18)'
                      }}
                    >
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="inline-flex items-center justify-center py-[5px] px-[12px] rounded-[6px] bg-[#87465B] border border-[#D5AFAD] text-[#FFF1E9] font-serif font-bold text-xs tracking-wider whitespace-nowrap">
                          STEP 2
                        </span>
                        <h3 className="text-xl md:text-2xl font-elegant font-bold text-white leading-[1.5]">
                          상대를 움직이는 실전 기술 (4대 핵심 역학)
                        </h3>
                      </div>
                      <p className="text-[#EDE6DA]/75 text-[17px] md:text-[18px] mb-8 leading-[1.8] font-normal break-keep">
                        내 자리가 단단해졌다면, 이제 남자의 뇌 신경회로를 건드릴 차례입니다. 애원하지 않고도 상대가 스스로 나를 갈망하도록 유도하는 4가지 실전 메커니즘입니다.
                      </p>

                      {/* 4대 역학 그리드 */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                          {
                            num: "역학 01",
                            title: "사냥꾼 코드 & 트로피 포지션",
                            desc: "남자의 타고난 정복 본능을 자극하는 적정 난이도 설계. 쉬운 사냥감이 아닌, 평생 자랑하고 싶은 트로피가 되는 법."
                          },
                          {
                            num: "역학 02",
                            title: "금지된 과일 & 비소유 신호",
                            desc: "“너 없이도 내 삶은 이미 충만하다”는 고요한 신호로 상대에게 통제 불가능성과 잠재적 상실 공포를 부여합니다."
                          },
                          {
                            num: "역학 03",
                            title: "연애 최면 & 정체성 라벨링",
                            desc: "서운함의 잔소리 대신, 그가 되고 싶어 하는 남성적 정체성을 지정해 스스로 자발적 헌신과 배려를 선택하게 만듭니다."
                          },
                          {
                            num: "역학 04",
                            title: "간헐적 보상 & 텍스트 여백",
                            desc: "연락에는 여백을 두고, 대면했을 때는 찬란한 몰입을 선사하여 상대의 뇌 속에 도파민을 가두는 완급 조절 공식."
                          }
                        ].map((card, idx) => (
                          <div
                            key={idx}
                            className="p-5 rounded-2xl bg-black/45 border border-[#D4B2A7]/25 hover:border-[#E5C4BB]/60 transition-all group break-keep"
                          >
                            <div className="flex items-center justify-between mb-2">
                              <span className="inline-flex items-center justify-center py-[5px] px-[12px] rounded-[6px] bg-[#87465B] border border-[#D5AFAD] text-[#FFF1E9] font-serif text-xs font-bold whitespace-nowrap">
                                {card.num}
                              </span>
                              <Sparkles className="w-4 h-4 text-[#D4B2A7]/50 group-hover:text-[#E5C4BB] transition-colors" />
                            </div>
                            <h4 className="text-white font-elegant font-bold text-base md:text-lg leading-[1.5] group-hover:text-[#E5C4BB] transition-colors">
                              {card.title}
                            </h4>
                            <p className="text-[#EDE6DA]/75 text-[17px] md:text-[18px] mt-2 leading-[1.8] font-normal break-keep">
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

            <ChampagneThreadDivider />

            {/* ═══════════════════════════════════════════════════════════════
                신규 Section 4. Product Showcase — 3종 올인원 세트 상세 해부
                (Book 1, Book 2, Book 3, Special Bonus 전체 목차 및 상세 반영)
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-28 text-left w-full max-w-[1280px] mx-auto">
              <Reveal>
                {/* 이미지 상단 헤드라인 */}
                <div className="text-center mb-6 md:mb-8 max-w-3xl mx-auto break-keep">
                  <span className="text-[#D4B2A7] font-elegant text-[12pt] font-semibold tracking-[0.2em] uppercase block">
                    3-STEP MASTER PACKAGE
                  </span>
                  <h3 className="text-2xl md:text-[36px] font-elegant font-bold text-white mt-2 leading-[1.45]">
                    관계의 판을 뒤집는 <span className="text-[#E5C4BB]">3단계 마스터 패키지</span>
                  </h3>
                  <p className="text-[#EDE6DA]/75 text-[17px] md:text-[18px] mt-2 leading-[1.8] font-normal break-keep">
                    본편으로 원리를 꿰뚫고, 시크릿북으로 실전 무기를 쥐며, 워크북으로 체질을 완성합니다.
                  </p>
                </div>

                {/* 3종 올인원 세트 목업 이미지 (하단 상자와 동일한 가로 너비 100% 매칭) */}
                <div className="mb-10 md:mb-14">
                  <div className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden border border-[#D4B2A7]/30 bg-black/40 shadow-[0_12px_40px_rgba(0,0,0,0.6)]">
                    <div className="relative w-full">
                      <Image
                        src={PACKAGE_MOCKUP_IMAGE}
                        alt="연애비급 3종 올인원 세트 패키지 목업: 연애비급 완전판, 매혹의 무의식 침투 프로토콜, 30일 매력 각성 워크북, 모바일 배경화면"
                        width={1672}
                        height={941}
                        sizes="(max-width: 1280px) 100vw, 1280px"
                        className="w-full h-auto object-contain block"
                        priority
                      />
                    </div>
                  </div>

                  {/* 이미지 하단 3단계 핵심 역할 카드 (짙은 자주빛 브라운 & 샴페인골드 테마) */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 text-left mt-8 items-stretch">
                    {/* Book 1: Step 1 · 원리 */}
                    <div
                      className="relative p-5 sm:p-6 md:p-7 rounded-[12px] border border-[rgba(210,166,172,0.30)] flex flex-col justify-between overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.4)] transition-transform hover:-translate-y-1 duration-200"
                      style={{ background: 'rgba(60, 34, 50, 0.80)' }}
                    >
                      {/* 귀퉁이 전통 기하학 금색 장식 */}
                      <svg className="absolute top-2.5 left-2.5 w-3.5 h-3.5 text-[#C5A578]/30 pointer-events-none" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1">
                        <path d="M1 9V1h8" />
                        <path d="M4 9V4h5" />
                      </svg>

                      <div>
                        {/* 상단: 단계 배지 & 우측 샴페인골드 선화 장식 (펼친 책) */}
                        <div className="flex items-center justify-between gap-2">
                          <span className="inline-flex items-center justify-center py-[5px] px-[12px] rounded-[6px] bg-[#87465B] border border-[#D5AFAD] text-[#FFF1E9] text-[11px] md:text-xs font-serif font-bold tracking-tight whitespace-nowrap">
                            Step 1 · 원리
                          </span>
                          <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 text-[#C5A578]" title="펼친 책">
                            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                            </svg>
                          </div>
                        </div>

                        {/* 상품명 */}
                        <h4 className="text-[18px] md:text-[20px] font-bold text-[#F5E9E2] font-elegant mt-3 md:mt-3.5 leading-[1.4] break-keep">
                          《연애비급 완전판》
                        </h4>

                        {/* 짧은 금색 구분선 */}
                        <div className="w-8 h-[1px] bg-[#C5A578]/30 my-2.5 md:my-3" />

                        {/* 설명 */}
                        <p className="text-[13.5px] md:text-[14.5px] text-[#D5C2C6] leading-[1.7] font-normal break-keep">
                          남자의 본능과 심리를 꿰뚫어 보고, 사랑을 갈구하던 자리에서 존중받는 중심 자리로 이동하는 근본 바이블.
                        </p>
                      </div>
                    </div>

                    {/* Book 2: Step 2 · 전략 */}
                    <div
                      className="relative p-5 sm:p-6 md:p-7 rounded-[12px] border border-[rgba(210,166,172,0.30)] flex flex-col justify-between overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.4)] transition-transform hover:-translate-y-1 duration-200"
                      style={{ background: 'rgba(60, 34, 50, 0.80)' }}
                    >
                      {/* 귀퉁이 전통 기하학 금색 장식 */}
                      <svg className="absolute top-2.5 left-2.5 w-3.5 h-3.5 text-[#C5A578]/30 pointer-events-none" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1">
                        <path d="M1 9V1h8" />
                        <path d="M4 9V4h5" />
                      </svg>

                      <div>
                        {/* 상단: 단계 배지 & 우측 샴페인골드 선화 장식 (작은 열쇠) */}
                        <div className="flex items-center justify-between gap-2">
                          <span className="inline-flex items-center justify-center py-[5px] px-[12px] rounded-[6px] bg-[#87465B] border border-[#D5AFAD] text-[#FFF1E9] text-[11px] md:text-xs font-serif font-bold tracking-tight whitespace-nowrap">
                            Step 2 · 전략
                          </span>
                          <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 text-[#C5A578]" title="작은 열쇠">
                            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                              <circle cx="7.5" cy="15.5" r="4.5" />
                              <path d="m21 2-9.6 9.6" />
                              <path d="m15.5 7.5 3 3" />
                              <path d="m18.5 4.5 2 2" />
                            </svg>
                          </div>
                        </div>

                        {/* 상품명 */}
                        <h4 className="text-[18px] md:text-[20px] font-bold text-[#F5E9E2] font-elegant mt-3 md:mt-3.5 leading-[1.4] break-keep">
                          《매혹의 무의식 침투 프로토콜》
                        </h4>

                        {/* 짧은 금색 구분선 */}
                        <div className="w-8 h-[1px] bg-[#C5A578]/30 my-2.5 md:my-3" />

                        {/* 설명 */}
                        <p className="text-[13.5px] md:text-[14.5px] text-[#D5C2C6] leading-[1.7] font-normal break-keep">
                          9대 유혹자 페르소나와 최면 기법, 실전 카톡 템플릿으로 상대의 뇌를 안달 나게 만드는 즉각적 실전 무기.
                        </p>
                      </div>
                    </div>

                    {/* Book 3: Step 3 · 실천 */}
                    <div
                      className="relative p-5 sm:p-6 md:p-7 rounded-[12px] border border-[rgba(210,166,172,0.30)] flex flex-col justify-between overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.4)] transition-transform hover:-translate-y-1 duration-200"
                      style={{ background: 'rgba(60, 34, 50, 0.80)' }}
                    >
                      {/* 귀퉁이 전통 기하학 금색 장식 */}
                      <svg className="absolute top-2.5 left-2.5 w-3.5 h-3.5 text-[#C5A578]/30 pointer-events-none" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1">
                        <path d="M1 9V1h8" />
                        <path d="M4 9V4h5" />
                      </svg>

                      <div>
                        {/* 상단: 단계 배지 & 우측 샴페인골드 선화 장식 (붓 / 기록지) */}
                        <div className="flex items-center justify-between gap-2">
                          <span className="inline-flex items-center justify-center py-[5px] px-[12px] rounded-[6px] bg-[#87465B] border border-[#D5AFAD] text-[#FFF1E9] text-[11px] md:text-xs font-serif font-bold tracking-tight whitespace-nowrap">
                            Step 3 · 실천
                          </span>
                          <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 text-[#C5A578]" title="붓 또는 기록지">
                            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
                              <line x1="16" y1="8" x2="2" y2="22" />
                              <line x1="17.5" y1="15" x2="9" y2="15" />
                            </svg>
                          </div>
                        </div>

                        {/* 상품명 */}
                        <h4 className="text-[18px] md:text-[20px] font-bold text-[#F5E9E2] font-elegant mt-3 md:mt-3.5 leading-[1.4] break-keep">
                          《30일 매력 각성 워크북》
                        </h4>

                        {/* 짧은 금색 구분선 */}
                        <div className="w-8 h-[1px] bg-[#C5A578]/30 my-2.5 md:my-3" />

                        {/* 설명 */}
                        <p className="text-[13.5px] md:text-[14.5px] text-[#D5C2C6] leading-[1.7] font-normal break-keep">
                          30일간의 데일리 미션을 통해 휘둘리지 않고 주도권을 쥐는 여왕의 태도를 몸에 새기는 체질 각성서.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center max-w-3xl mx-auto space-y-5 mb-16">
                  <span className="text-[#D4B2A7] font-elegant text-[12pt] font-semibold tracking-[0.2em] uppercase block">
                    3-in-1 All-in-One Package
                  </span>
                  <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white tracking-wide leading-[1.45]">
                    3종 올인원 세트 <span className="text-[#E5C4BB]">상세 해부</span>
                  </h2>
                  <p className="text-[17px] md:text-[18px] text-[#EDE6DA]/75 leading-[1.8] font-normal break-keep">
                    PDF 3종(총 172페이지)과 도화만개부 고화질 이미지 파일이 모두 포함된 올인원 패키지입니다.
                  </p>

                  {/* 📚 추가 안내 문구: 총 페이지 수 요약 (16px 간격, 2줄 유지) */}
                  <div className="space-y-1">
                    <p className="text-xs sm:text-sm md:text-base text-[#EDE6DA]/75 font-light leading-[1.6]">
                      본편부터 전략서, 실전 워크북까지
                    </p>
                    <p className="text-sm sm:text-base md:text-lg text-[#E5C4BB] font-bold font-elegant tracking-wide leading-[1.6]">
                      3종 · 총 172페이지 PDF 패키지
                    </p>
                  </div>
                </div>

                <div className="space-y-12">
                  {/* ─────────────────────────────────────────────────────────
                      Book 1: 《연애비급(戀愛秘笈) 완전판》
                     ───────────────────────────────────────────────────────── */}
                  <div className="gungjung-glass p-8 md:p-12 border-[#D4B2A7]/30 rounded-3xl relative overflow-hidden"
                    style={{
                      background: 'linear-gradient(135deg, rgba(139, 38, 62, 0.3) 0%, rgba(10, 5, 20, 0.85) 100%)',
                      boxShadow: '0 12px 40px rgba(186, 141, 126, 0.18)'
                    }}>
                    <div className="grid lg:grid-cols-12 gap-10 items-start">
                      {/* 표지 목업 이미지 슬롯 (3:4 비율, 원본 비율 유지, 잘림 및 필터 없음) */}
                      <div className="lg:col-span-4 w-full">
                        <div className="relative w-full aspect-[3/4] rounded-2xl md:rounded-3xl overflow-hidden border border-[#D4B2A7]/30 shadow-[0_12px_40px_rgba(0,0,0,0.6)] flex items-center justify-center">
                          <Image
                            src={BOOK_MOCKUPS.book1}
                            alt="Book 1. [정통 바이블] 연애비급 완전판"
                            fill
                            sizes="(max-width: 1024px) 100vw, 33vw"
                            className="object-contain"
                            priority
                          />
                        </div>
                        {/* 이미지 바로 아래 페이지 수 안내 (16~20px 여백, 핑크골드 컬러, 숫자 강조) */}
                        <p className="mt-4 md:mt-5 text-center text-sm md:text-[15px] text-[#D4B2A7] font-light tracking-wide">
                          PDF 전자책 · <strong className="font-bold text-[#E5C4BB]">90</strong>페이지
                        </p>
                      </div>

                      {/* 상세 설명 */}
                      <div className="lg:col-span-8 space-y-6 break-keep">
                        <div>
                          <span className="inline-flex items-center justify-center py-[5px] px-[12px] rounded-[6px] bg-[#87465B] border border-[#D5AFAD] text-[#FFF1E9] text-xs font-bold mb-3 whitespace-nowrap">🌸 Book 1. [정통 바이블]
                          </span>
                          <h3 className="text-2xl md:text-3xl font-elegant font-bold text-white mb-3 leading-[1.45]">
                            《연애비급(戀愛秘笈) 완전판》
                          </h3>
                          <p className="text-sm md:text-base text-[#D4B2A7] font-medium leading-[1.5]">
                            사랑의 본능·심리·무의식을 읽는 22가지 관계 절대 비법서
                          </p>
                        </div>

                        {/* 핵심 내용 요약 */}
                        <div className="p-4 rounded-xl bg-white/[0.02] border border-[#D4B2A7]/20 text-xs md:text-sm text-[#EDE6DA]/85 leading-[1.8] font-light">
                          <span className="font-bold text-[#E5C4BB] block mb-1">핵심 내용 요약</span>
                          남자의 정복 심리 해부 / 흔들리지 않는 매력의 근원 / 앵커링과 라벨링 최면 / 남자가 원하는 3가지(섹슈얼리티·치어링·서브미시브) / 맹목적 부양본능 작동법
                        </div>

                        {/* 상세 목차 1부~7부 */}
                        <div className="space-y-3 pt-2">
                          <h4 className="text-sm font-bold text-white border-b border-white/10 pb-2">상세 목차 (1부 ~ 7부)</h4>

                          {[
                            {
                              part: "1부. 남자의 사랑 작동 원리",
                              desc: "사랑을 '정복'으로 느끼는 사냥꾼 본능 해부"
                            },
                            {
                              part: "2부. 흔들리지 않는 매력의 근원",
                              desc: "애쓰지 않아도 스스로 찾아오게 만드는 금지된 과일의 법칙"
                            },
                            {
                              part: "3부. 연애 최면과 유혹의 구조",
                              desc: "의식을 우회해 무의식에 각인시키는 감정 앵커링"
                            },
                            {
                              part: "4부. 말의 결 (언어 포지셔닝)",
                              desc: "설명하지 않고도 관계의 위상을 역전시키는 대화법"
                            },
                            {
                              part: "5부. 관계를 망치는 치명적 함정",
                              desc: "착하게 다 맞춰주다 '을'로 전락하는 원인 차단"
                            },
                            {
                              part: "6부. 오래 가는 사랑의 구조",
                              desc: "남자의 맹목적 부양본능을 자극하는 안식처의 비밀"
                            },
                            {
                              part: "7부. 연애 졸업 선언",
                              desc: "선택받기를 기다리지 않고, 내가 선택하는 절대 주권의 완성"
                            }
                          ].map((item, idx) => (
                            <div key={idx} className="p-3.5 rounded-xl bg-black/40 border border-[#D4B2A7]/15">
                              <p className="text-xs md:text-sm leading-[1.6] break-keep">
                                <strong className="font-bold text-[#E5C4BB] font-elegant mr-2">{item.part}</strong>
                                <span className="text-[#D4B2A7]/50 mr-2">|</span>
                                <span className="text-[#EDE6DA]/85 font-light">{item.desc}</span>
                              </p>
                            </div>
                          ))}
                        </div>

                        {/* 도화만개부 수록 및 이미지 파일 제공 안내 한 줄 */}
                        <div className="pt-3 border-t border-white/10">
                          <p className="text-xs text-[#D4B2A7]/90 font-light tracking-wide flex items-center gap-1.5 break-keep">
                            <span className="text-[#E5C4BB]">✨</span>
                            <span>본편 마지막에 도화만개부를 수록하며, 별도 이미지 파일도 함께 제공합니다.</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* ─────────────────────────────────────────────────────────
                      Book 2: 《매혹의 무의식 침투 프로토콜》
                     ───────────────────────────────────────────────────────── */}
                  <div className="gungjung-glass p-8 md:p-12 border-[#D4B2A7]/30 rounded-3xl relative overflow-hidden"
                    style={{
                      background: 'linear-gradient(135deg, rgba(139, 38, 62, 0.3) 0%, rgba(10, 5, 20, 0.85) 100%)',
                      boxShadow: '0 12px 40px rgba(186, 141, 126, 0.18)'
                    }}>
                    <div className="grid lg:grid-cols-12 gap-10 items-start">
                      {/* 표지 목업 이미지 슬롯 (3:4 비율, 원본 비율 유지, 잘림 및 필터 없음) */}
                      <div className="lg:col-span-4 w-full">
                        <div className="relative w-full aspect-[3/4] rounded-2xl md:rounded-3xl overflow-hidden border border-[#D4B2A7]/30 shadow-[0_12px_40px_rgba(0,0,0,0.6)] flex items-center justify-center">
                          <Image
                            src={BOOK_MOCKUPS.book2}
                            alt="Book 2. [전략 시크릿북] 매혹의 무의식 침투 프로토콜"
                            fill
                            sizes="(max-width: 1024px) 100vw, 33vw"
                            className="object-contain"
                          />
                        </div>
                        {/* 이미지 바로 아래 페이지 수 안내 (16~20px 여백, 핑크골드 컬러, 숫자 강조) */}
                        <p className="mt-4 md:mt-5 text-center text-sm md:text-[15px] text-[#D4B2A7] font-light tracking-wide">
                          PDF 전자책 · <strong className="font-bold text-[#E5C4BB]">34</strong>페이지
                        </p>
                      </div>

                      {/* 상세 설명 */}
                      <div className="lg:col-span-8 space-y-6 break-keep">
                        <div>
                          <span className="inline-flex items-center justify-center py-[5px] px-[12px] rounded-[6px] bg-[#87465B] border border-[#D5AFAD] text-[#FFF1E9] text-xs font-bold mb-3 whitespace-nowrap">🖤 Book 2. [전략 시크릿북]
                          </span>
                          <h3 className="text-2xl md:text-3xl font-elegant font-bold text-white mb-3 leading-[1.45]">
                            《매혹의 무의식 침투 프로토콜》
                          </h3>
                          <p className="text-sm md:text-base text-[#D4B2A7] font-medium leading-[1.5]">
                            9대 유혹자 페르소나 진단 &amp; 실전 카톡 프로토콜
                          </p>
                        </div>

                        {/* 핵심 내용 요약 */}
                        <div className="p-4 rounded-xl bg-white/[0.02] border border-[#D4B2A7]/20 text-xs md:text-sm text-[#EDE6DA]/85 leading-[1.8] font-light">
                          <span className="font-bold text-[#E5C4BB] block mb-1">핵심 내용 요약</span>
                          9대 유혹자 페르소나 정밀 진단 / 실전 심리·최면 기법 7선 / 무의식 심리 역학 7대 법칙 / 상황별 복붙 전용 카톡 즉답 템플릿 5종
                        </div>

                        {/* 상세 내용 Part 1 ~ Part 4 */}
                        <div className="space-y-4 pt-2">
                          {/* Part 1 */}
                          <div className="py-5 md:py-6 px-5 md:px-6 rounded-2xl bg-white/[0.025] border border-[#D4B2A7]/20 space-y-2 md:space-y-2.5">
                            <h4 className="text-sm md:text-base font-bold text-white leading-[1.5] flex items-center gap-2">
                              <span className="text-[#E5C4BB] font-serif font-bold">Part 1.</span> 9대 유혹자 페르소나 정밀 진단
                            </h4>
                            <p className="text-xs md:text-sm text-[#EDE6DA]/80 font-light pl-6 leading-[1.75] break-keep">
                              남자의 무의식을 뒤흔드는 9가지 원형과 나만의 매혹 무기 장착
                            </p>
                          </div>

                          {/* Part 2 */}
                          <div className="py-5 md:py-6 px-5 md:px-6 rounded-2xl bg-white/[0.025] border border-[#D4B2A7]/20 space-y-2 md:space-y-2.5">
                            <h4 className="text-sm md:text-base font-bold text-white leading-[1.5] flex items-center gap-2">
                              <span className="text-[#E5C4BB] font-serif font-bold">Part 2.</span> 이성을 마비시키는 실전 심리·최면 기법 7선
                            </h4>
                            <p className="text-xs md:text-sm text-[#EDE6DA]/80 font-light pl-6 leading-[1.75] break-keep">
                              경계심을 풀고 스스로 빠져들게 만드는 무의식 닻 내리기
                            </p>
                          </div>

                          {/* Part 3 */}
                          <div className="py-5 md:py-6 px-5 md:px-6 rounded-2xl bg-white/[0.025] border border-[#D4B2A7]/20 space-y-2 md:space-y-2.5">
                            <h4 className="text-sm md:text-base font-bold text-white leading-[1.5] flex items-center gap-2">
                              <span className="text-[#E5C4BB] font-serif font-bold">Part 3.</span> 관계의 판을 뒤집는 무의식 심리 역학 7대 법칙
                            </h4>
                            <p className="text-xs md:text-sm text-[#EDE6DA]/80 font-light pl-6 leading-[1.75] break-keep">
                              애타는 추격자에서 판을 지배하는 설계자로 거듭나는 법칙
                            </p>
                          </div>

                          {/* Part 4 */}
                          <div className="py-5 md:py-6 px-5 md:px-6 rounded-2xl bg-white/[0.025] border border-[#D4B2A7]/20 space-y-2 md:space-y-2.5">
                            <h4 className="text-sm md:text-base font-bold text-white leading-[1.5] flex items-center gap-2">
                              <span className="text-[#E5C4BB] font-serif font-bold">Part 4.</span> 실전 상황별 카톡 무의식 침투 프로토콜
                            </h4>
                            <p className="text-xs md:text-sm text-[#EDE6DA]/80 font-light pl-6 leading-[1.75] break-keep">
                              썸, 밀당, 잠수, 어장관리 상황에서 그대로 복사해 쓰는 즉답 템플릿 5종
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* ─────────────────────────────────────────────────────────
                      Book 3: 《30일 매력 각성 워크북》
                     ───────────────────────────────────────────────────────── */}
                  <div className="gungjung-glass p-8 md:p-12 border-[#D4B2A7]/30 rounded-3xl relative overflow-hidden"
                    style={{
                      background: 'linear-gradient(135deg, rgba(139, 38, 62, 0.3) 0%, rgba(10, 5, 20, 0.85) 100%)',
                      boxShadow: '0 12px 40px rgba(186, 141, 126, 0.18)'
                    }}>
                    <div className="grid lg:grid-cols-12 gap-10 items-start">
                      {/* 표지 목업 이미지 슬롯 (3:4 비율, 원본 비율 유지, 잘림 및 필터 없음) */}
                      <div className="lg:col-span-4 w-full">
                        <div className="relative w-full aspect-[3/4] rounded-2xl md:rounded-3xl overflow-hidden border border-[#D4B2A7]/30 shadow-[0_12px_40px_rgba(0,0,0,0.6)] flex items-center justify-center">
                          <Image
                            src={BOOK_MOCKUPS.book3}
                            alt="Book 3. [실전 워크북] 30일 매력 각성 워크북"
                            fill
                            sizes="(max-width: 1024px) 100vw, 33vw"
                            className="object-contain"
                          />
                        </div>
                        {/* 이미지 바로 아래 페이지 수 안내 (16~20px 여백, 핑크골드 컬러, 숫자 강조) */}
                        <p className="mt-4 md:mt-5 text-center text-sm md:text-[15px] text-[#D4B2A7] font-light tracking-wide">
                          PDF 워크북 · <strong className="font-bold text-[#E5C4BB]">48</strong>페이지
                        </p>
                      </div>

                      {/* 상세 설명 */}
                      <div className="lg:col-span-8 space-y-6 break-keep">
                        <div>
                          <span className="inline-flex items-center justify-center py-[5px] px-[12px] rounded-[6px] bg-[#87465B] border border-[#D5AFAD] text-[#FFF1E9] text-xs font-bold mb-3 whitespace-nowrap">📖 Book 3. [실전 워크북]
                          </span>
                          <h3 className="text-2xl md:text-3xl font-elegant font-bold text-white mb-3 leading-[1.45]">
                            《30일 매력 각성 워크북》
                          </h3>
                          <p className="text-sm md:text-base text-[#D4B2A7] font-medium leading-[1.5]">
                            무의식을 흔들고 기억에 남는 여자의 시크릿 액션 플랜
                          </p>
                        </div>

                        {/* 핵심 내용 요약 */}
                        <div className="p-4 rounded-xl bg-white/[0.02] border border-[#D4B2A7]/20 text-xs md:text-sm text-[#EDE6DA]/85 leading-[1.8] font-light">
                          <span className="font-bold text-[#E5C4BB] block mb-1">핵심 내용 요약</span>
                          속도와 곡선이 만드는 아우라 / 래포 구축 5단계 / 소울메이트 가치관 대화법 / 남자의 동굴 대처법 / 30일 데일리 실천 플래너
                        </div>

                        {/* 상세 내용 PHASE 1~4 및 부록 */}
                        <div className="space-y-3 pt-2">
                          <h4 className="text-sm font-bold text-white border-b border-white/10 pb-2">30일 액션 플랜 단계</h4>

                          {[
                            {
                              phase: "Phase 1. 첫인상의 법칙",
                              desc: "시선을 묶어두는 독보적 아우라와 속도의 설계"
                            },
                            {
                              phase: "Phase 2. 연결의 기술",
                              desc: "편안함 속에 서늘한 긴장감을 품은 소울메이트 라포"
                            },
                            {
                              phase: "Phase 3. 욕망의 온도",
                              desc: "희소성과 결핍을 이용해 상대를 안달 나게 만드는 헌신 유도"
                            },
                            {
                              phase: "Phase 4. 오래 머물게 하는 여자",
                              desc: "10년 뒤에도 그리워지는 대체 불가한 존재의 깊이"
                            },
                            {
                              phase: "부록.",
                              desc: "30일 데일리 실천 플래너 & 주간 에너지 자가 진단표"
                            }
                          ].map((item, idx) => (
                            <div key={idx} className="p-3.5 rounded-xl bg-black/40 border border-[#D4B2A7]/15">
                              <p className="text-xs md:text-sm leading-[1.6] break-keep">
                                <strong className="font-bold text-[#E5C4BB] font-elegant mr-2">{item.phase}</strong>
                                <span className="text-[#D4B2A7]/50 mr-2">|</span>
                                <span className="text-[#EDE6DA]/85 font-light">{item.desc}</span>
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* ─────────────────────────────────────────────────────────
                      책 속에서 먼저 만나보세요 (본문 미리보기 영역)
                      - 이미지가 등록되기 전: 관리자/편집 화면(?preview=admin)에서만 자리 표시
                      - 공개 화면: 이미지 등록 전까지 이 영역과 빈 여백을 완전히 숨김 (null)
                     ───────────────────────────────────────────────────────── */}
                  {(() => {
                    const previewCards = [
                      {
                        order: "01",
                        title: "연애비급 본편",
                        desc: "관계를 이해하는 본질적인 원리와 심리 역학",
                        note: "본문 1쪽",
                        imageSrc: ""
                      },
                      {
                        order: "02",
                        title: "매혹의 무의식 침투 프로토콜",
                        desc: "남자의 신경회로를 건드리는 실전 대화 예시",
                        note: "실전 예시 1쪽",
                        imageSrc: ""
                      },
                      {
                        order: "03",
                        title: "30일 매력각성 워크북",
                        desc: "스스로를 점검하고 내 자리를 바로잡는 실전 훈련지",
                        note: "작성용 내지 1쪽",
                        imageSrc: ""
                      }
                    ];
                    const hasImages = previewCards.some(card => Boolean(card.imageSrc));
                    const showSection = hasImages || isAdminPreview;

                    if (!showSection) return null;

                    return (
                      <div
                        className="gungjung-glass p-6 sm:p-8 md:p-12 lg:p-14 rounded-3xl md:rounded-[40px] border border-[#D4B2A7]/30 text-center relative overflow-hidden"
                        style={{
                          background: 'linear-gradient(135deg, rgba(74, 35, 43, 0.45) 0%, rgba(15, 6, 20, 0.94) 100%)',
                          boxShadow: '0 12px 40px rgba(0, 0, 0, 0.4)'
                        }}
                      >
                        <span className="text-[#D4B2A7] font-elegant text-xs font-semibold tracking-[0.2em] uppercase block mb-3">
                          BOOK PREVIEW
                        </span>
                        <h3 className="text-2xl md:text-[36px] font-elegant font-bold text-[#FAF7F2] tracking-wide break-keep mb-4">
                          책 속에서 먼저 만나보세요
                        </h3>
                        <p className="text-[17px] md:text-[18px] text-[#EDE6DA]/80 font-normal max-w-2xl mx-auto leading-[1.8] break-keep mb-8 md:mb-10">
                          관계를 이해하는 본문부터 실전 예시와 워크북까지,<br className="hidden sm:inline" />
                          《연애비급》의 실제 내용을 미리 확인해 보세요.
                        </p>

                        {/* PC 3열, 모바일 세로 1열 그리드 */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto text-left">
                          {previewCards.map((item, idx) => (
                            <div
                              key={idx}
                              className="p-5 md:p-6 rounded-2xl bg-black/40 border border-[#D4B2A7]/25 flex flex-col justify-between hover:border-[#E5C4BB]/60 transition-all group"
                            >
                              <div>
                                <div className="flex items-center justify-between mb-3">
                                  <span className="text-[#D4B2A7] font-serif font-bold text-xs tracking-wider">
                                    {item.order}
                                  </span>
                                  <span className="inline-flex items-center justify-center py-[4px] px-[10px] rounded-[6px] bg-[#87465B] border border-[#D5AFAD] text-[#FFF1E9] text-[11px] font-bold whitespace-nowrap">
                                    {isAdminPreview && !item.imageSrc ? "관리자 확인용" : "미리보기"}
                                  </span>
                                </div>

                                <h4 className="text-[#FAF7F2] font-elegant font-bold text-lg mb-2 group-hover:text-[#E5C4BB] transition-colors">
                                  {item.title}
                                </h4>
                                <p className="text-xs md:text-sm text-[#EDE6DA]/70 leading-relaxed mb-5">
                                  {item.desc}
                                </p>
                              </div>

                              {/* 내지 이미지 슬롯 (내지는 잘리지 않게 object-contain으로 전체 페이지 표시) */}
                              <div>
                                {item.imageSrc ? (
                                  <div
                                    onClick={() => setPreviewModalItem({ title: item.title, imageSrc: item.imageSrc })}
                                    className="cursor-pointer group/img relative rounded-xl overflow-hidden border border-[#D4B2A7]/30 bg-black/50"
                                  >
                                    <div className="relative w-full aspect-[3/4]">
                                      <Image
                                        src={item.imageSrc}
                                        alt={item.title}
                                        fill
                                        className="object-contain transition-transform duration-300 group-hover/img:scale-105"
                                      />
                                    </div>
                                    <div className="py-2.5 bg-black/70 text-center border-t border-[#D4B2A7]/20 flex items-center justify-center gap-1.5 text-xs text-[#E5C4BB] font-medium group-hover/img:text-white transition-colors">
                                      <Eye className="w-3.5 h-3.5" />
                                      <span>눌러서 크게 보기</span>
                                    </div>
                                  </div>
                                ) : (
                                  <div className="py-12 px-4 rounded-xl border border-dashed border-[#D4B2A7]/40 bg-[#120818]/60 text-center">
                                    <FileText className="w-8 h-8 text-[#D4B2A7]/50 mx-auto mb-2" />
                                    <p className="text-xs font-medium text-[#E5C4BB]">
                                      [실제 페이지 이미지 삽입 예정]
                                    </p>
                                    <p className="text-[11px] text-[#EDE6DA]/50 mt-1">
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
                            <p className="text-xs text-[#D4B2A7]/60">
                              ※ 관리자 편집 화면입니다. 실제 내지 이미지가 등록되면 공개 페이지에도 자동으로 활성화됩니다.
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })()}

                  {/* ─────────────────────────────────────────────────────────
                      올인원 패키지 가격·장바구니·구매 버튼 묶음 (미리보기 아래 분리 배치)
                     ───────────────────────────────────────────────────────── */}
                  <div
                    className="gungjung-glass p-6 sm:p-8 md:p-10 rounded-3xl border border-[#D4B2A7]/40 relative overflow-hidden shadow-2xl"
                    style={{
                      background: 'radial-gradient(ellipse at 50% 0%, rgba(139, 38, 62, 0.35) 0%, rgba(10, 5, 20, 0.95) 100%)',
                      boxShadow: '0 12px 40px rgba(186, 141, 126, 0.20)'
                    }}
                  >
                    <div className="max-w-4xl mx-auto space-y-6 break-keep">
                      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
                        <div className="space-y-1">
                          <span className="text-xs font-elegant font-semibold tracking-wider text-[#D4B2A7] uppercase block">
                            PACKAGE OVERVIEW
                          </span>
                          <h4 className="text-base sm:text-lg md:text-xl font-elegant font-bold text-white">
                            구성: <span className="text-[#E5C4BB]">PDF 3종 · 총 172페이지 + 도화만개부 이미지 파일 제공</span>
                          </h4>
                        </div>
                        <span className="inline-flex items-center justify-center py-[5px] px-[12px] rounded-[6px] bg-[#87465B] border border-[#D5AFAD] text-[#FFF1E9] text-xs font-bold whitespace-nowrap">
                          올인원 패키지
                        </span>
                      </div>

                      <div className="flex flex-wrap items-baseline justify-between gap-4">
                        <div className="space-y-1">
                          <span className="text-xs text-[#EDE6DA]/60">정가 79,000원</span>
                          <div className="text-2xl md:text-3xl font-elegant font-bold text-[#E5C4BB]">
                            런칭 특가 19,000원 <span className="text-sm text-white/70 font-sans font-normal">(76% OFF)</span>
                          </div>
                        </div>
                        <span className="text-xs text-[#EDE6DA]/60">
                          * 전자책 PDF 3종(총 172페이지)과 도화만개부 고화질 이미지 파일이 함께 제공됩니다.
                        </span>
                      </div>

                      <div className="pt-2">
                        <CTAButton text="연애비급 3종 세트 구매하기" />
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </section>

            <ChampagneThreadDivider />

            {/* ═══════════════════════════════════════════════════════════════
                5. Premium Content Section (기존 프리미엄 가이드북 안내 보존)
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-28 w-full max-w-[1280px] mx-auto">
              <Reveal>
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                  {/* 왼쪽 이미지 (love-secret-contents.png 최신 3:4 비율 유지, 잘림 없이 표시) */}
                  <div className="relative w-full aspect-[3/4] overflow-hidden rounded-[32px] md:rounded-[40px] border border-[#D4B2A7]/30 shadow-2xl bg-black/40 flex items-center justify-center">
                    <Image
                      src={productData.premiumImage}
                      alt="백도화 프리미엄 연애 구조 해석서 목차 및 구성 안내"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-contain"
                    />
                  </div>

                  {/* 오른쪽 특징 리스트 */}
                  <div className="space-y-6 text-left break-keep">
                    <div>
                      <span className="text-[#D4B2A7] font-elegant text-[12pt] font-semibold tracking-[0.2em] uppercase block">PREMIUM GUIDEBOOK</span>
                      <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white mt-2.5 leading-[1.4] break-keep">
                        백도화가 전하는<br />
                        <span className="text-[#E5C4BB]">프리미엄 연애 구조 해석서</span>
                      </h2>
                    </div>

                    <p className="text-[17px] md:text-[18px] text-[#EDE6DA]/75 leading-[1.8] font-normal break-keep">
                      연애비급은 가벼운 밀당 기술이나 순간적인 유혹법을 말하지 않습니다. 이 책이 말하는 핵심은 상대를 억지로 붙잡는 방법이 아니라, 내가 더 이상 낮은 자리에서 사랑을 기다리지 않는 법입니다. 여성의 품격, 관계의 중심, 말의 결, 감정의 여백, 그리고 자기 가치의 회복을 다룹니다.
                    </p>

                    {/* 강점 6가지 리스트 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                      {[
                        "디지털 파일 형태의 프리미엄 전자책",
                        "연애 심리와 관계 구조의 융합 분석",
                        "여성의 자기가치와 연애 감각의 연결",
                        "백도화 브랜드 톤의 기품 있는 문체",
                        "관계 속에서 나를 잃지 않는 기준점 제안",
                        "반복되는 내 안의 연애 패턴 자가 점검"
                      ].map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-3 p-3 bg-[#FAF7F2] rounded-xl border border-[#D4B2A7]/25 hover:border-[#C58BA0]/40 transition-colors"
                        >
                          <Check className="w-4 h-4 text-[#C58BA0] shrink-0" />
                          <span className="text-xs md:text-sm text-[#3D3530] font-semibold">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4">
                      <CTAButton text="연애비급 즉시 다운로드" />
                    </div>
                  </div>
                </div>
              </Reveal>
            </section>

            <ChampagneThreadDivider />

            {/* ═══════════════════════════════════════════════════════════════
                6. Position Shift: 관계 시소의 법칙 & 관계 비교 다이어그램
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-28 text-left w-full max-w-[1280px] mx-auto">
              <Reveal>
                <div>
                  {/* 상단 텍스트 영역 */}
                  <div className="text-center max-w-3xl mx-auto space-y-4 mb-10 md:mb-14 break-keep">
                    <span className="text-[#D4B2A7] font-elegant text-[12pt] font-semibold tracking-[0.2em] uppercase block">
                      POSITION SHIFT
                    </span>
                    <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white leading-[1.4] break-keep">
                      &ldquo;당신의 헌신이 만만함이 되는 이유,<br className="hidden sm:inline" />
                      <span className="text-[#E5C4BB]">&lsquo;관계 시소&rsquo;의 법칙</span>을 모르기 때문입니다.&rdquo;
                    </h2>
                    <p className="text-[17px] md:text-[18px] text-[#EDE6DA]/80 leading-[1.8] font-normal break-keep">
                      애원하며 기다리는 자리를 끝내고, 스스로 갈망하게 만드는 주도권을 쥐십시오.
                    </p>
                  </div>

                  {/* 하단: 전체 폭 대형 관계 비교 이미지 (기존 박스 전체 가로폭 100% 매칭) */}
                  <div className="relative w-full aspect-[3/2] rounded-2xl md:rounded-3xl overflow-hidden border border-[#D4B2A7]/30 shadow-[0_12px_45px_rgba(0,0,0,0.6)] bg-black/40 flex items-center justify-center">
                    <Image
                      src="/image/love-secret/love-secret-relationship-comparison.png"
                      alt="당신의 헌신이 만만함이 되는 이유, 관계 시소의 법칙 - 관계 비교 인포그래픽"
                      fill
                      sizes="(max-width: 1200px) 100vw, 1152px"
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>
              </Reveal>
            </section>

            <ChampagneThreadDivider />

            {/* ═══════════════════════════════════════════════════════════════
                신규 Section 5. Social Proof — 실전 체감 사례 (슬라이더)
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-28 text-left w-full max-w-[1280px] mx-auto">
              <Reveal>
                <div className="text-center max-w-3xl mx-auto space-y-5 mb-14">
                  <span className="text-[#D4B2A7] font-elegant text-[12pt] font-semibold tracking-[0.2em] uppercase block">
                    Real Life Transformations
                  </span>
                  <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white tracking-wide leading-[1.45]">
                    실전 <span className="text-[#E5C4BB]">체감 사례</span>
                  </h2>
                  <p className="text-[17px] md:text-[18px] text-[#EDE6DA]/75 leading-[1.8] font-normal break-keep">
                    연애비급을 적용한 분들의 실제 관계에 일어난 구체적인 변화입니다.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
                  {/* 좌측: 리뷰 목업 이미지 슬롯 (상하 기준선 일치) */}
                  <div className="lg:col-span-5 flex flex-col justify-center">
                    <HybridImageSlot
                      assetKey="reviews"
                      className="w-full aspect-[3/4]"
                    />
                  </div>

                  {/* 우측: 후기 영역 (PC 세로 2개 배치, 모바일 1개 배치, 하단 단일 컨트롤러) */}
                  <div className="lg:col-span-7 flex flex-col justify-between space-y-5 lg:space-y-6">
                    {/* 카드 2개 묶음 (PC 기준 간격 20~24px: gap-5 lg:gap-6) */}
                    <div className="flex-1 flex flex-col gap-5 lg:gap-6 justify-between">
                      {/* 카드 1 (모바일 & PC 공통 표시) */}
                      <div
                        className="flex-1 gungjung-glass p-6 sm:p-7 md:p-8 border-[#D4B2A7]/30 rounded-3xl relative overflow-hidden flex flex-col justify-center space-y-3.5 transition-all duration-300 min-h-[160px] md:min-h-[180px]"
                        style={{
                          background: 'linear-gradient(135deg, rgba(139, 38, 62, 0.25) 0%, rgba(10, 5, 20, 0.9) 100%)',
                          boxShadow: '0 8px 32px rgba(186, 141, 126, 0.12)'
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <span className="inline-flex items-center justify-center py-[5px] px-[12px] rounded-[6px] text-xs font-bold text-[#FFF1E9] bg-[#87465B] border border-[#D5AFAD] whitespace-nowrap">
                            {reviewCards[reviewIndex].badge}
                          </span>
                          <span className="text-xs text-[#D4B2A7]/70 font-mono">
                            {reviewCards[reviewIndex].tag}
                          </span>
                        </div>
                        <p className="text-base sm:text-lg md:text-[19px] font-elegant font-semibold text-white leading-relaxed break-keep">
                          &ldquo;{reviewCards[reviewIndex].quote}&rdquo;
                        </p>
                      </div>

                      {/* 카드 2 (PC 화면 전용 세로 배치, 기존 서로 다른 후기 데이터 연결) */}
                      <div
                        className="hidden lg:flex flex-1 gungjung-glass p-6 sm:p-7 md:p-8 border-[#D4B2A7]/30 rounded-3xl relative overflow-hidden flex-col justify-center space-y-3.5 transition-all duration-300 min-h-[160px] md:min-h-[180px]"
                        style={{
                          background: 'linear-gradient(135deg, rgba(139, 38, 62, 0.25) 0%, rgba(10, 5, 20, 0.9) 100%)',
                          boxShadow: '0 8px 32px rgba(186, 141, 126, 0.12)'
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <span className="inline-flex items-center justify-center py-[5px] px-[12px] rounded-[6px] text-xs font-bold text-[#FFF1E9] bg-[#87465B] border border-[#D5AFAD] whitespace-nowrap">
                            {reviewCards[(reviewIndex + 1) % reviewCards.length].badge}
                          </span>
                          <span className="text-xs text-[#D4B2A7]/70 font-mono">
                            {reviewCards[(reviewIndex + 1) % reviewCards.length].tag}
                          </span>
                        </div>
                        <p className="text-base sm:text-lg md:text-[19px] font-elegant font-semibold text-white leading-relaxed break-keep">
                          &ldquo;{reviewCards[(reviewIndex + 1) % reviewCards.length].quote}&rdquo;
                        </p>
                      </div>
                    </div>

                    {/* 하단 컨트롤러: 표시 점 + 전환 화살표 한 세트만 배치 */}
                    <div className="flex items-center justify-between pt-1 sm:pt-2 px-1">
                      <div className="flex items-center gap-2">
                        {reviewCards.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={() => setReviewIndex(idx)}
                            className={`h-2 rounded-full transition-all ${reviewIndex === idx ? 'w-6 bg-[#D4B2A7]' : 'w-2 bg-white/20'
                              }`}
                            aria-label={`후기 ${idx + 1} 보기`}
                          />
                        ))}
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={prevReview}
                          className="p-2.5 rounded-full border border-white/10 hover:border-[#D4B2A7]/50 bg-white/[0.02] hover:bg-white/[0.05] text-[#EDE6DA] transition-all"
                          aria-label="이전 후기"
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button
                          onClick={nextReview}
                          className="p-2.5 rounded-full border border-white/10 hover:border-[#D4B2A7]/50 bg-white/[0.02] hover:bg-white/[0.05] text-[#EDE6DA] transition-all"
                          aria-label="다음 후기"
                        >
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </section>

            <ChampagneThreadDivider />

            {/* ═══════════════════════════════════════════════════════════════
                신규 Section 6. Comparison Table — 가치 비교표
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-28 text-left w-full max-w-[1280px] mx-auto">
              <Reveal>
                <div className="text-center max-w-3xl mx-auto space-y-5 mb-14">
                  <span className="text-[#D4B2A7] font-elegant text-[12pt] font-semibold tracking-[0.2em] uppercase block">
                    Value Comparison
                  </span>
                  <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white tracking-wide leading-[1.45]">
                    가치 <span className="text-[#E5C4BB]">비교표</span>
                  </h2>
                  <p className="text-[17px] md:text-[18px] text-[#EDE6DA]/75 leading-[1.8] font-normal break-keep">
                    단편적인 인터넷 조언이나 얄팍한 애교와는 완전히 다른 차원의 관계 역학입니다.
                  </p>
                </div>

                {/* 텍스트 기반 3개 카드 가치 비교 그리드 */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
                  {/* 카드 1: 일반 인터넷 조언 */}
                  <div
                    className="p-7 sm:p-8 rounded-2xl md:rounded-3xl border border-[#5E3B48]/50 shadow-lg text-left backdrop-blur-md flex flex-col justify-between h-full"
                    style={{ background: 'rgba(32, 16, 24, 0.94)' }}
                  >
                    <div>
                      {/* 카드 제목 (PC 22px 전후) */}
                      <h3 className="text-[20px] md:text-[22px] font-bold font-elegant text-[#FAF7F2] pb-5 mb-6 border-b border-white/10">
                        일반 인터넷 조언
                      </h3>

                      {/* 항목 리스트: 비용, 관점, 도구 (간격 24px) */}
                      <div className="space-y-6">
                        {/* 1. 비용 */}
                        <div>
                          <span className="text-[14px] font-semibold text-[#D4B2A7]/80 block mb-1.5">
                            비용
                          </span>
                          <p className="text-[16px] md:text-[17px] text-[#EDE6DA] leading-[1.7] break-keep">
                            표면적으로는 무료이지만, 무수한 시행착오와 관계 상처라는 보이지 않는 큰 대가를 치르게 됩니다.
                          </p>
                        </div>

                        {/* 2. 관점 */}
                        <div>
                          <span className="text-[14px] font-semibold text-[#D4B2A7]/80 block mb-1.5">
                            관점
                          </span>
                          <p className="text-[16px] md:text-[17px] text-[#EDE6DA] leading-[1.7] break-keep">
                            &ldquo;답장 늦게 해라&rdquo;, &ldquo;단답으로 튕겨라&rdquo; 식의 원리 없는 1차원적 밀당에 머뭅니다.
                          </p>
                        </div>

                        {/* 3. 도구 */}
                        <div>
                          <span className="text-[14px] font-semibold text-[#D4B2A7]/80 block mb-1.5">
                            도구
                          </span>
                          <p className="text-[16px] md:text-[17px] text-[#EDE6DA] leading-[1.7] break-keep">
                            상황별 명확한 기준과 도구가 없어, 막상 돌발 상황이 닥치면 다시 본래의 불안한 감정대로 흔들립니다.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 카드 2: 뻔한 여우짓 강의 */}
                  <div
                    className="p-7 sm:p-8 rounded-2xl md:rounded-3xl border border-[#5E3B48]/50 shadow-lg text-left backdrop-blur-md flex flex-col justify-between h-full"
                    style={{ background: 'rgba(32, 16, 24, 0.94)' }}
                  >
                    <div>
                      {/* 카드 제목 (PC 22px 전후) */}
                      <h3 className="text-[20px] md:text-[22px] font-bold font-elegant text-[#FAF7F2] pb-5 mb-6 border-b border-white/10">
                        뻔한 여우짓 강의
                      </h3>

                      {/* 항목 리스트: 비용, 관점, 도구 (간격 24px) */}
                      <div className="space-y-6">
                        {/* 1. 비용 */}
                        <div>
                          <span className="text-[14px] font-semibold text-[#D4B2A7]/80 block mb-1.5">
                            비용
                          </span>
                          <p className="text-[16px] md:text-[17px] text-[#EDE6DA] leading-[1.7] break-keep">
                            1회 수십만 원에 달하는 고액 수강료를 지불해야 하지만, 상담이 끝나면 다시 혼자 남겨집니다.
                          </p>
                        </div>

                        {/* 2. 관점 */}
                        <div>
                          <span className="text-[14px] font-semibold text-[#D4B2A7]/80 block mb-1.5">
                            관점
                          </span>
                          <p className="text-[16px] md:text-[17px] text-[#EDE6DA] leading-[1.7] break-keep">
                            내 성향과 맞지 않는 과도한 애교나 인위적인 연기를 무리하게 강요하여 오래 지속하기 어렵습니다.
                          </p>
                        </div>

                        {/* 3. 도구 */}
                        <div>
                          <span className="text-[14px] font-semibold text-[#D4B2A7]/80 block mb-1.5">
                            도구
                          </span>
                          <p className="text-[16px] md:text-[17px] text-[#EDE6DA] leading-[1.7] break-keep">
                            체화되지 않는 어색한 연기 기술로, 실전 대화에서 상대방에게 금방 밑천과 조급함이 간파당합니다.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 카드 3: 백도화 연애비급 (강조 카드) */}
                  <div
                    className="p-7 sm:p-8 rounded-2xl md:rounded-3xl border border-[#D4B2A7]/60 shadow-[0_12px_40px_rgba(166,107,115,0.22)] text-left backdrop-blur-md flex flex-col justify-between h-full relative"
                    style={{
                      background: 'linear-gradient(145deg, rgba(68, 24, 38, 0.95) 0%, rgba(42, 13, 24, 0.95) 100%)'
                    }}
                  >
                    <div>
                      {/* 상단 배지 */}
                      <div className="mb-2.5">
                        <span className="inline-block py-1 px-3 rounded-md text-[12px] font-bold text-[#FAF6EE] bg-[#87465B] border border-[#D5AFAD]/60">
                          연애비급 3종 패키지
                        </span>
                      </div>

                      {/* 카드 제목 (PC 22px 전후) */}
                      <h3 className="text-[20px] md:text-[22px] font-bold font-elegant text-[#FAF7F2] pb-5 mb-6 border-b border-[#D4B2A7]/25">
                        백도화 연애비급
                      </h3>

                      {/* 항목 리스트: 비용, 관점, 도구 (간격 24px) */}
                      <div className="space-y-6">
                        {/* 1. 비용 (19,000원 가장 크게 강조) */}
                        <div>
                          <span className="text-[14px] font-semibold text-[#E5C4BB] block mb-1.5">
                            비용
                          </span>
                          <div className="text-[28px] md:text-[32px] font-bold font-elegant text-[#FAF7F2] leading-none mb-2">
                            19,000<span className="text-[18px] font-normal text-[#E5C4BB] ml-1">원</span>
                            <span className="text-[13px] md:text-[14px] font-normal text-[#FAF6EE]/80 ml-2 font-sans">(영구 소장)</span>
                          </div>
                          <p className="text-[16px] md:text-[17px] text-[#EDE6DA] leading-[1.7] break-keep">
                            단 한 번 치킨 한 마리 값으로 추가 지출 없이 평생 꺼내보는 압도적인 가성비입니다.
                          </p>
                        </div>

                        {/* 2. 관점 */}
                        <div>
                          <span className="text-[14px] font-semibold text-[#E5C4BB] block mb-1.5">
                            관점
                          </span>
                          <p className="text-[16px] md:text-[17px] text-[#EDE6DA] leading-[1.7] break-keep">
                            진화심리학과 무의식 역학을 바탕으로, 나를 잃지 않고 관계의 무게중심을 회복하는 자립 프레임입니다.
                          </p>
                        </div>

                        {/* 3. 도구 */}
                        <div>
                          <span className="text-[14px] font-semibold text-[#E5C4BB] block mb-1.5">
                            도구
                          </span>
                          <p className="text-[16px] md:text-[17px] text-[#EDE6DA] leading-[1.7] break-keep">
                            상황별 즉시 복사해 쓰는 카톡 프로토콜 5종과 30일 매력 각성 워크북으로 실전에 즉각 적용합니다.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </section>

            <ChampagneThreadDivider />

            {/* ═══════════════════════════════════════════════════════════════
                통합 자주 묻는 질문 (FAQ 아코디언)
               ═══════════════════════════════════════════════════════════════ */}
            <section id="faq" className="mb-28 text-left max-w-4xl mx-auto">
              <Reveal>
                <div className="text-center space-y-4 mb-14">
                  <span className="text-[#D4B2A7] font-elegant text-[12pt] font-semibold tracking-[0.2em] uppercase block">
                    Frequently Asked Questions
                  </span>
                  <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white tracking-wide leading-[1.45]">
                    자주 묻는 <span className="text-[#E5C4BB]">질문</span>
                  </h2>
                  <p className="text-[17px] md:text-[18px] text-[#EDE6DA]/75 leading-[1.8] font-normal break-keep">
                    구매 전 궁금하신 내용을 확인해 보세요.
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      num: "Q1",
                      q: "외모에 자신이 없거나 내성적이고 소심한 성격이어도 적용할 수 있나요?",
                      a: "네, 얼마든지 참고하고 적용하실 수 있습니다. 《연애비급》은 얄팍한 외모나 애교 기술을 요구하거나 억지로 센 척하고 독해지기를 강요하지 않습니다. 상대에게 무리하게 화를 내거나 인위적인 밀당을 시도하지 않아도, 말의 배치와 침묵의 타이밍, 답장의 길이 등 단순한 ‘관계의 구조’를 상황에 맞춰 조정함으로써 어떤 성격이든 나만의 단단하고 우아한 태도를 지켜낼 수 있도록 돕습니다."
                    },
                    {
                      num: "Q2",
                      q: "시중의 밀당 조언이나 인터넷 연애 팁과 무엇이 다른가요?",
                      a: "단순히 \"답장을 늦게 하라\"거나 화를 내라는 식의 유치한 수싸움이 아닙니다. 상대의 심리와 무의식적 관계 구조, 자이가르닉 효과, 간헐적 보상 원리를 체계화하여 억지로 연기하거나 불안해하지 않아도 자연스럽게 주도권과 존중을 확보할 수 있는 포지션 역학을 다룹니다."
                    },
                    {
                      num: "Q3",
                      q: "짝사랑·썸·권태기·이별 후 상황에도 참고할 수 있나요?",
                      a: "네, 각 상황에 맞춰 유용하게 참고하고 활용할 수 있습니다. 《연애비급》은 특정 연애 기간에 국한된 조언이 아니라 관계의 무의식적 작동 원리를 다룹니다. 짝사랑, 썸, 연애 초반의 주도권 정립, 권태기, 이별 후 냉각기까지 각 단계에서 상대방의 선택과 감정 경계를 존중하면서도 나의 가치를 바로 세우는 실전적 관점과 소통 방식을 안내합니다."
                    },
                    {
                      num: "Q4",
                      q: "책의 분량과 구성은 어떻게 되며, 실전에 적용하기 쉬운가요?",
                      a: "《연애비급 완전판 본편》, 《전략 시크릿북》, 《실전 워크북》 3권의 체계적인 패키지로 구성되어 있습니다. 막연하고 추상적인 감정 위로에 머물지 않고, 시크릿북에 수록된 상황별 실전 소통 템플릿과 워크북의 데일리 미션을 통해 일상 대화와 카톡에서 당장 어떻게 행동해야 하는지 차근차근 실전에 맞춰 활용하실 수 있습니다."
                    },
                    {
                      num: "Q5",
                      q: "구매 후 다운로드와 열람은 어떻게 진행되나요?",
                      a: "결제 완료 후 마이페이지의 구매 내역 또는 안내 페이지를 통해 다운로드하실 수 있습니다. 표준 PDF 형식으로 제공되므로 스마트폰, 태블릿, PC 등 다양한 디지털 기기에서 뷰어 앱을 통해 편리하게 열람하고 보관하실 수 있습니다."
                    },
                    {
                      num: "Q6",
                      q: "종이책이 배송되는 상품인가요?",
                      a: "아닙니다. 본 상품은 택배로 실물이 배송되지 않는 100% 디지털 다운로드 상품(PDF 전자책 및 디지털 배경화면)입니다. 배송을 기다릴 필요 없이 구매 후 기기에서 바로 파일을 열람하여 학습하실 수 있습니다."
                    }
                  ].map((faq, idx) => {
                    const isOpen = openFaq === idx
                    return (
                      <div
                        key={idx}
                        className="gungjung-glass rounded-2xl border border-[#D4B2A7]/20 overflow-hidden transition-all duration-300"
                        style={{
                          background: isOpen ? 'rgba(166, 107, 115, 0.2)' : 'rgba(255, 255, 255, 0.01)'
                        }}
                      >
                        <button
                          type="button"
                          onClick={() => toggleFaq(idx)}
                          aria-expanded={isOpen}
                          className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 text-white hover:text-[#E5C4BB] transition-colors focus:outline-none focus:ring-1 focus:ring-[#D4B2A7]/40"
                        >
                          <div className="flex items-center gap-3 md:gap-3.5">
                            <span className="text-xs font-bold text-[#E5C4BB] font-serif shrink-0">
                              {faq.num}
                            </span>
                            <span className="text-base md:text-lg font-elegant font-semibold leading-[1.5] text-white">
                              {faq.q}
                            </span>
                          </div>
                          <ChevronDown
                            className={`w-5 h-5 text-[#D4B2A7] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                          />
                        </button>

                        {isOpen && (
                          <div className="px-6 pb-6 pt-2.5 text-[15px] md:text-[16px] text-[#EDE6DA]/85 leading-[1.8] font-light border-t border-white/5 break-keep">
                            {faq.a}
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>

                {/* FAQ 하단 상시 노출: 재회비방 안내 카드 (FAQ와 가로폭 동일, 은은한 글라스 퍼플) */}
                <div
                  className="mt-8 md:mt-10 p-5 sm:p-6 md:p-7 rounded-2xl border border-[#D4B2A7]/25 relative overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, rgba(74, 35, 43, 0.35) 0%, rgba(15, 6, 20, 0.85) 100%)',
                    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.3)'
                  }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="space-y-1.5">
                      <h4 className="text-base md:text-lg font-elegant font-bold text-[#FAF7F2] tracking-wide break-keep">
                        이미 헤어진 관계로 고민하고 계신가요?
                      </h4>
                      <p className="text-[15px] md:text-[16px] text-[#EDE6DA] font-light leading-relaxed break-keep">
                        이별 후 마음 정리와 연락·재회의 방향은 《재회비방》에서 살펴보세요.
                      </p>
                    </div>
                    <div className="sm:self-center shrink-0 pt-1 sm:pt-0">
                      <Link
                        href="/reports/reunion-secret"
                        className="inline-flex items-center gap-1.5 text-xs md:text-sm font-semibold text-[#E5C4BB] hover:text-[#FAF7F2] transition-colors group"
                      >
                        <span className="group-hover:underline underline-offset-4">재회비방 살펴보기 →</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </Reveal>
            </section>

            {/* ═══════════════════════════════════════════════════════════════
                [추후 추가 예정 · 구매 및 PDF 열람 방법] 독립 영역
                - 위치: FAQ 아래, '구매 전 안내' 바로 위
                - 공개 페이지: 임시 문구·빈 상자·불필요한 여백 완전 숨김 처리 (null 반환)
                - 관리자/편집 화면(?preview=admin): 편집 가이드 프로세스 노출
                - 추후 이미지·문구 확정 시 즉시 전환 가능한 독립 모듈 구조
               ═══════════════════════════════════════════════════════════════ */}
            {isAdminPreview ? (
              <>
                <ChampagneThreadDivider />
                <section className="mb-28 w-full max-w-[1280px] mx-auto px-4">
                  <Reveal>
                    <div className="p-8 md:p-12 rounded-3xl border-2 border-dashed border-[#D4B2A7]/45 bg-[#2A0A14]/70 backdrop-blur-md text-center max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
                      {/* 관리자 뱃지 */}
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8B263E]/40 border border-[#D4B2A7]/40 text-[#FAF6EE] text-xs font-medium mb-4">
                        <span className="w-2 h-2 rounded-full bg-[#E5C4BB] animate-pulse" />
                        <span>관리자 · 편집 화면 전용 표시 (공개 페이지에서는 자동 숨김)</span>
                      </div>

                      {/* 안내 타이틀 */}
                      <h3 className="text-xl md:text-2xl font-elegant font-bold text-[#FAF7F2] mb-3">
                        [추후 추가 예정 · 구매 및 PDF 열람 방법]
                      </h3>
                      <p className="text-sm md:text-base text-[#EDE6DA]/85 mb-8 font-light break-keep">
                        구매·다운로드 방식 확정 후 3단계 안내와 실제 화면 캡처 삽입.
                      </p>

                      {/* 3단계 프로세스 자리표시 카드 */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center my-6">
                        <div className="p-5 rounded-2xl bg-black/50 border border-[#D4B2A7]/25 flex flex-col items-center justify-center space-y-2">
                          <span className="inline-flex items-center justify-center py-[4px] px-[10px] rounded-[6px] bg-[#87465B] border border-[#D5AFAD] text-[#FFF1E9] text-xs font-mono font-bold whitespace-nowrap">
                            STEP 01
                          </span>
                          <span className="text-sm md:text-base font-semibold text-white">결제</span>
                        </div>
                        <div className="p-5 rounded-2xl bg-black/50 border border-[#D4B2A7]/25 flex flex-col items-center justify-center space-y-2">
                          <span className="inline-flex items-center justify-center py-[4px] px-[10px] rounded-[6px] bg-[#87465B] border border-[#D5AFAD] text-[#FFF1E9] text-xs font-mono font-bold whitespace-nowrap">
                            STEP 02
                          </span>
                          <span className="text-sm md:text-base font-semibold text-white">콘텐츠 수령 경로 확인</span>
                        </div>
                        <div className="p-5 rounded-2xl bg-black/50 border border-[#D4B2A7]/25 flex flex-col items-center justify-center space-y-2">
                          <span className="inline-flex items-center justify-center py-[4px] px-[10px] rounded-[6px] bg-[#87465B] border border-[#D5AFAD] text-[#FFF1E9] text-xs font-mono font-bold whitespace-nowrap">
                            STEP 03
                          </span>
                          <span className="text-sm md:text-base font-semibold text-white">PDF 다운로드 · 열람</span>
                        </div>
                      </div>

                      <p className="text-xs text-[#D4B2A7]/80 font-light mt-6">
                        ※ 단계명과 설명은 실제 제공 방식 확정 후 작성.
                      </p>
                    </div>
                  </Reveal>
                </section>
              </>
            ) : null}


            <ChampagneThreadDivider />

            {/* ═══════════════════════════════════════════════════════════════
                7. Digital Product Notice Section (기존 구매 전 안내 보존)
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-28 w-full max-w-[1280px] mx-auto">
              <Reveal>
                <div className="gungjung-glass p-8 md:p-12 border-white/5 text-left w-full max-w-[1280px] mx-auto break-keep">
                  <h2 className="text-2xl md:text-[36px] font-elegant font-bold mb-10 text-white border-l-4 border-[#E5C4BB] pl-6 leading-[1.45]">
                    구매 전 <span className="text-[#E5C4BB]">안내</span>
                  </h2>
                  <ul className="space-y-4 text-[15px] md:text-[16px] text-[#EDE6DA]/75 leading-[1.7] font-light">
                    {[
                      "본 상품은 실물 배송이 없는 디지털 전자책(PDF 파일) 상품입니다.",
                      "결제 완료 후 안내된 방식(마이페이지 또는 가입하신 이메일)에 따라 즉시 콘텐츠를 다운로드해 확인하실 수 있습니다.",
                      "디지털 콘텐츠의 특성상 파일이 다운로드되거나 메일로 발송된 이후에는 단순 변심에 의한 환불이 제한될 수 있습니다.",
                      "본 콘텐츠에 소개된 정보는 개인의 연애 환경 및 상황에 따라 적용 방식과 체감 결과가 다를 수 있습니다.",
                      "본 콘텐츠는 심리적·관계적 이해를 돕기 위한 자기계발 성격의 서적이며, 의학적·법률적 진단이나 전문 상담 치료를 대체하지 않습니다.",
                      "특정 결과나 관계의 강제적인 회복, 또는 상대방의 특정 반응을 무조건적으로 보장하지 않습니다.",
                      "건강하고 상호 존중받는 관계 속에서 스스로의 주체성을 기르기 위해 전자책의 지침을 적용해 주시기 바랍니다.",
                      "자세한 취소/환불 기준은 하단의 이용약관 및 환불정책을 참고해 주시기 바랍니다."
                    ].map((text, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#D4B2A7] shrink-0"></span>
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </section>

            {/* ═══════════════════════════════════════════════════════════════
                기존 최종 CTA 보존 (가로형 와이드 16:9 대형 배너, 1280px 너비 매칭)
               ═══════════════════════════════════════════════════════════════ */}
            <section className="relative overflow-hidden rounded-3xl md:rounded-[40px] mb-20 border border-[#D4B2A7]/40 shadow-2xl bg-[#1F0710] lg:min-h-[640px] xl:min-h-[670px] w-full max-w-[1280px] mx-auto">
              {/* 1. 배경 이미지 영역:
                  - 업로드된 원본 사이즈(1672:941) 그대로 세로 사이즈를 크게 확보
                  - object-[85%_top]으로 위쪽 머리 실루엣이 절대 잘리지 않도록 상단 기준 배치 */}
              <div className="relative w-full aspect-[1672/941] lg:aspect-auto lg:absolute lg:inset-0 lg:h-full">
                <Image
                  src={productData.ctaImage}
                  alt="선택받기 위해 애쓰지 마세요. 이제, 당신이 선택하세요 - 연애비급"
                  fill
                  sizes="(max-width: 1280px) 100vw, 1280px"
                  className="object-cover object-[right_top] sm:object-[85%_top] lg:object-[85%_top]"
                  priority
                />
                {/* PC 전용: 왼쪽 텍스트 가독성 확보용 은은한 다크 그라데이션 (우측 인물 머리 및 실루엣은 100% 선명하게 노출) */}
                <div className="hidden lg:block absolute inset-0 z-[1] bg-gradient-to-r from-[#18050C]/95 via-[#18050C]/80 to-transparent w-[62%]" />
                {/* 모바일 전용: 이미지와 하단 텍스트 영역 사이의 자연스러운 그라데이션 페이드 */}
                <div className="lg:hidden absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[#1F0710] to-transparent z-[1]" />
              </div>

              {/* 2. 텍스트 및 구매 버튼 영역:
                  - PC(lg): 왼쪽 여백에 정렬 (너비 58% 이내로 제한하여 오른쪽 여성 인물 침범 차단, 세로 높이 640px 이상 넉넉하게 확장)
                  - 모바일: 이미지 아래에 같은 자주빛 배경으로 여유롭게 이어짐 */}
              <div className="relative z-10 p-6 sm:p-8 lg:p-14 xl:p-16 lg:max-w-[58%] text-left flex flex-col justify-center lg:min-h-[640px] xl:min-h-[670px]">
                <Reveal>
                  <div className="space-y-6 sm:space-y-7 break-keep">
                    {/* [큰 제목] (36px) */}
                    <h2 className="text-[28px] sm:text-[32px] md:text-[36px] font-elegant font-bold text-[#FAF7F2] leading-[1.4] break-keep">
                      선택받기 위해 애쓰지 마세요.<br />
                      <span className="text-[#E5C4BB]">이제, 당신이 선택하세요.</span>
                    </h2>

                    {/* [본문] (18px, 밝은 베이지색, 충분한 줄·문단 간격) */}
                    <div className="space-y-3.5 text-[16px] sm:text-[17px] md:text-[18px] text-[#EDE6DA] leading-[1.8] font-normal break-keep">
                      <p>
                        사랑은 더 많이 애쓴 만큼 주어지는 보상이 아닙니다.<br />
                        진심을 다하는 동안에도, 나의 자리를 잃지 않아야 합니다.
                      </p>
                      <p className="text-[#EDE6DA]/90">
                        불안하게 확인하고 맞추느라 지쳤다면,<br />
                        이제 나의 기준과 매력을 회복하는 연애를 시작해 보세요.
                      </p>
                    </div>

                    {/* [마무리 문장] (24px, 은은한 샴페인골드색) */}
                    <p className="text-[19px] sm:text-[21px] md:text-[24px] font-elegant text-[#D4B2A7] font-medium tracking-wide pt-1">
                      사랑 안에서, 나를 잃지 않도록. 《연애비급》
                    </p>

                    {/* [구매 버튼] (마무리 문장 아래 충분한 간격, 기존 handleAddToCart 및 handlePurchase 연결 보존) */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-2 sm:pt-4 items-stretch sm:items-center w-full max-w-lg">
                      <button
                        type="button"
                        onClick={handleAddToCart}
                        className="py-3.5 px-5 rounded-xl font-elegant font-medium text-sm sm:text-base border border-[#D4B2A7]/50 text-[#EDE6DA] hover:text-[#FAF7F2] hover:bg-[#A66B73]/20 hover:border-[#D4B2A7]/80 transition-all duration-300 shrink-0 whitespace-nowrap text-center bg-black/40 backdrop-blur-sm order-2 sm:order-1"
                      >
                        장바구니 담기
                      </button>
                      <button
                        type="button"
                        onClick={handlePurchase}
                        className="flex-1 py-3.5 px-6 rounded-xl font-elegant font-bold text-sm sm:text-base hover:scale-[1.01] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 text-[#FAF6EE] shadow-[0_0_30px_rgba(166,107,115,0.35)] hover:brightness-110 order-1 sm:order-2"
                        style={{
                          background: 'linear-gradient(135deg, #A66B73 0%, #8B263E 100%)',
                          border: '1px solid rgba(212, 178, 167, 0.65)',
                        }}
                      >
                        <span>연애비급 19,000원에 구매하기</span>
                        <ChevronRight className="w-4 h-4 text-[#FAF7F2] shrink-0" />
                      </button>
                    </div>
                  </div>
                </Reveal>
              </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════
                신규 교체/추가: 최종 결제 마감 CTA 및 손실 회피 섹션 (기존 연애비급 하단 박스 디자인 적용)
               ═══════════════════════════════════════════════════════════════ */}
            <section className="relative overflow-hidden rounded-3xl md:rounded-[40px] mb-20 p-8 md:p-16 border-2 border-[#D4B2A7] shadow-[0_0_50px_rgba(186,141,126,0.6)] text-center max-w-5xl mx-auto">
              {/* 로즈 버건디 풀 컬러 배경 */}
              <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#6B2838] via-[#4A1824] to-[#1E0810]" />

              {/* 이미지 교체 영역 8 (매혹의 열쇠 오브제 배경 슬롯) */}
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
                    <span className="inline-flex items-center justify-center py-[5px] px-[12px] rounded-[6px] text-xs font-elegant font-bold tracking-[0.2em] uppercase bg-[#87465B] border border-[#D5AFAD] text-[#FFF1E9] whitespace-nowrap">CRITICAL CHOICE</span>
                    <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white leading-[1.4] break-keep">
                      또다시 수개월의 눈물과<br />
                      <span className="text-[#E5C4BB]">바닥난 자존감</span>을 치르시겠습니까?
                    </h2>
                    <p className="text-[#EDE6DA]/85 text-[17px] md:text-[18px] font-normal leading-[1.8] break-keep">
                      남자의 변덕과 차가운 답장에 하루를 통째로 낭비하던 악순환.<br />
                      자리를 바꾸지 않으면 다음 사람을 만나도 같은 자리에서 상처받습니다.<br />
                      <strong className="text-[#FAF7F2] font-semibold">단 한 번 치킨 한 마리 값으로, 평생 관계의 주도권을 쥐십시오.</strong>
                    </p>
                  </div>

                  {/* 패키지 가격 카드 (기존 연애비급 하단 다크 글래스 박스 규격) */}
                  <div className="p-6 md:p-10 rounded-2xl bg-black/60 border border-[#D4B2A7]/40 shadow-2xl relative backdrop-blur-sm">
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#87465B] text-[#FFF1E9] border border-[#D5AFAD] text-xs font-elegant font-bold py-[5px] px-[12px] rounded-[6px] uppercase tracking-wider whitespace-nowrap">런칭 기념 76% 한정 특가</div>

                    <h3 className="text-lg md:text-xl font-elegant font-bold text-white mt-2.5 leading-[1.5]">
                      백도화 연애비급 올인원 패키지 (PDF 3종 + 도화만개부)
                    </h3>
                    <p className="text-xs md:text-sm text-[#EDE6DA]/60 mt-1 font-light">
                      완전판 바이블 + 전략 시크릿북 + 실전 워크북 + 카톡 템플릿 5종
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-3 my-6">
                      <span className="text-[#EDE6DA]/40 line-through text-base md:text-lg">
                        정가 79,000원
                      </span>
                      <span className="text-3xl md:text-4xl font-elegant font-bold text-[#E5C4BB]">
                        19,000원
                      </span>
                      <span className="inline-flex items-center justify-center py-[5px] px-[12px] rounded-[6px] bg-[#87465B] border border-[#D5AFAD] text-[#FFF1E9] text-xs font-bold whitespace-nowrap">
                        76% OFF
                      </span>
                    </div>

                    {/* 구매 버튼 (기존 연애비급 샴페인 골드/로즈골드 버튼 스타일) */}
                    <button
                      onClick={handlePurchase}
                      className="w-full py-4 md:py-5 px-6 rounded-xl font-elegant font-bold text-base md:text-xl text-[#FAF6EE] shadow-[0_0_40px_rgba(166,107,115,0.35)] hover:shadow-[0_0_60px_rgba(166,107,115,0.55)] transition-all duration-300 hover:scale-[1.02] active:scale-95 inline-flex items-center justify-center gap-2 cursor-pointer hover:brightness-105"
                      style={{
                        background: 'linear-gradient(135deg, #A66B73 0%, #955D65 100%)',
                        border: '2px solid #D4B2A7'
                      }}
                    >
                      <Sparkles className="w-5 h-5 text-[#FAF6EE] shrink-0" />
                      <span>사랑이 머무는 자리로 지금 이동하기</span>
                      <ChevronRight className="w-5 h-5 text-[#FAF6EE] shrink-0" />
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
                  <Link href="/terms" className="hover:text-[#E5C4BB] transition-colors">이용약관</Link>
                  <Link href="/privacy" className="hover:text-[#E5C4BB] transition-colors">개인정보처리방침</Link>
                  <Link href="/refund" className="hover:text-[#E5C4BB] transition-colors">배송 및 환불정책</Link>
                </div>
              </Reveal>
            </section>

          </div>
        </div>




        <Footer />

        {/* 📱 모바일 화면 하단 고정 구매 바 (모바일 전용, PC에서는 숨김) */}
        <MobileStickyBuyBar
          price={productData.price}
          onPurchase={handlePurchase}
        />
      </GlobalBackground>
      {/* 🔍 책 속 미리보기 고해상도 확대 모달 (PC/모바일 확대 & 스크롤 지원) */}
      {previewModalItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6 overflow-y-auto"
          onClick={() => setPreviewModalItem(null)}
        >
          <div
            className="relative max-w-3xl w-full max-h-[90vh] bg-[#1F0710] border border-[#D4B2A7]/50 rounded-2xl md:rounded-3xl p-4 sm:p-6 overflow-auto shadow-2xl flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 상단 헤더: 제목 & 닫기 버튼 */}
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

            {/* 고해상도 이미지 영역 (스크롤/확대 지원) */}
            <div className="relative w-full max-w-xl aspect-[3/4] rounded-xl overflow-hidden bg-black/60 flex items-center justify-center">
              <img
                src={previewModalItem.imageSrc}
                alt={previewModalItem.title}
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-xs text-[#EDE6DA]/60 mt-3 text-center">
              터치하거나 스크롤하여 세부 본문 내용을 읽으실 수 있습니다.
            </p>
          </div>
        </div>
      )}

    </main>
  )
}
