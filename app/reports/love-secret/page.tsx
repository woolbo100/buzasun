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
            <section className="mb-12 md:mb-16 text-left w-full max-w-[1280px] mx-auto">
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
                            "\"나 얼만큼 좋아해?\", \"우리 무슨 사이야?\" 확인하려 든다",
                            "챙겨주고 다 맞춰줬더니 결국 \"설레지 않는다\"며 차였다",
                            "서운함에 못 이겨 새벽에 긴 장문 카톡을 보낸 적이 있다"
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
                  {/* 왼쪽: 01, 02 웹 텍스트 글귀 (약 58% 비율, 테두리 없는 은은한 퍼플 그라데이션 배경으로 가독성 확보) */}
                  <div
                    className="lg:col-span-7 order-1 break-keep p-6 sm:p-8 md:p-10 rounded-2xl md:rounded-3xl gungjung-glass border border-[#D4B2A7]/30 shadow-2xl space-y-8 md:space-y-10 relative overflow-hidden"
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

                  {/* 오른쪽: 이미지 (약 42% 비율, 상단 이미지와 동일한 크기 및 테두리/모서리 규격, 터치하여 확대 글자 제거) */}
                  <div className="lg:col-span-5 w-full order-2">
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
            <section className="mb-28 w-full max-w-[1280px] mx-auto space-y-8 md:space-y-10">
              {/* 상단 이미지: 영역 상자 가로폭(max-w-[1280px])과 일치하게 삽입 */}
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

              <Reveal>
                <div
                  className="gungjung-glass p-6 sm:p-8 md:p-14 lg:p-16 rounded-3xl md:rounded-[40px] border border-[#D4B2A7]/30 text-center"
                  style={{
                    background: 'linear-gradient(135deg, rgba(74, 35, 43, 0.45) 0%, rgba(15, 6, 20, 0.94) 100%)',
                    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.4)'
                  }}
                >
                  <span className="text-[#D4B2A7] font-elegant text-[12pt] font-semibold tracking-[0.2em] uppercase block mb-3">
                    THE HIDDEN TRUTH
                  </span>
                  <h3 className="text-2xl md:text-[36px] font-elegant font-bold text-[#FAF7F2] leading-[1.4] break-keep mb-8 md:mb-10">
                    &ldquo;진심을 다하고 참아주면 될 줄 알았습니다.<br />
                    그런데 왜 사랑도 <span className="text-[#E5C4BB]">&lsquo;공부&rsquo;</span>해야 했을까요?&rdquo;
                  </h3>

                  {/* 이중 상자 제거: 카드 배경 위에 본문 직접 배치 (최대 너비 800px) */}
                  <div className="max-w-[800px] mx-auto text-left text-[17px] md:text-[18px] text-[#EDE6DA] leading-[1.8] font-normal space-y-5 md:space-y-6 break-keep">
                    <p>
                      어릴 적 우리는 사랑을 이렇게 배웠습니다.<br />
                      <span className="text-[#FAF7F2] font-medium">
                        &ldquo;진심을 다하면 결국 통한다. 착하게 맞춰주고 헌신하면 마음을 알아준다.&rdquo;
                      </span>
                    </p>
                    <p>
                      하지만 현실의 연애는 도덕 시험도, 인내심 테스트도 아니었습니다.
                      내 감정을 다 쏟아붓고 모든 일정을 상대에게 맞출수록, 돌아온 것은 깊은 사랑이 아니라
                      <strong className="text-[#E5C4BB] font-semibold"> &ldquo;설레지 않는다&rdquo;, &ldquo;편한 친구 같다&rdquo;는 차가운 통보</strong>였습니다.
                    </p>
                    <p>
                      운전면허 없이 도로에 나가면 사고가 나듯,
                      <strong className="text-[#FAF7F2] font-medium"> 남자의 무의식 작동 원리와 심리 역학을 모른 채 뛰어드는 연애는 늘 같은 자리에서 상처를 남깁니다.</strong>
                    </p>
                    <div className="pt-5 border-t border-[#D4B2A7]/20 text-[#EDE6DA]">
                      《연애비급》은 뜬구름 잡는 위로나 얄팍한 밀당 기술을 말하지 않습니다.
                      내가 서 있는 자리를 바로잡고 상대의 심리 회로를 꿰뚫어 보아,
                      <strong className="text-[#FAF7F2] font-semibold"> 사랑 앞에서 다시는 스스로를 갉아먹지 않는 &lsquo;관계의 구조&rsquo;를 배우는 책입니다.</strong>
                    </div>

                    {/* 마무리 강조 문장 */}
                    <div className="pt-6 md:pt-7 mt-6 md:mt-7 border-t border-[#D4B2A7]/25 text-center sm:text-left">
                      <p className="font-elegant font-bold text-base md:text-lg lg:text-xl text-[#E5C4BB] tracking-wide break-keep leading-relaxed">
                        연락의 기술보다, 관계의 맥락을 먼저 읽으세요.
                      </p>
                    </div>
                  </div>
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
                  <div className="max-w-2xl mx-auto px-4 text-center mb-10 space-y-3 break-keep">
                    <span className="text-[#D4B2A7] font-elegant text-[12pt] font-semibold tracking-[0.2em] uppercase block mb-3">
                      THE POSITION SHIFT
                    </span>
                    <h3 className="text-2xl md:text-[36px] font-elegant font-bold text-white leading-[1.4] break-keep">
                      &ldquo;사랑을 공부하고 내 자리를 바로 세웠을 때,<br />
                      <span className="text-[#E5C4BB]">당신의 연애에 일어나는 극적인 반전</span>&rdquo;
                    </h3>
                    <p className="text-[#EDE6DA]/80 text-[17px] md:text-[18px] font-normal leading-[1.8] break-keep">
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
                        beforeSub: "맞춰줄수록 '소모품 노동자' 취급을 받는 착한 여자",
                        afterTitle: "감정 소모 없이 우아한 바운더리로 선을 긋는다",
                        afterSub: "화를 내지 않아도 남자가 스스로 예의를 갖추고 눈치를 봅니다."
                      },
                      {
                        beforeTitle: "“나 얼만큼 좋아해?”, “우리 무슨 사이야?” 확인하려 든다",
                        beforeSub: "확답을 구걸할수록 가치가 떨어져 달아나는 상대",
                        afterTitle: "남자가 먼저 관계를 정의하고 확답을 조른다",
                        afterSub: "말하지 않아도 대체 불가능한 '트로피'의 자리에 섭니다."
                      },
                      {
                        beforeTitle: "다 챙겨주고 맞춰줬더니 “설레지 않는다”며 차였다",
                        beforeSub: "과도한 정성과 헌신이 남자의 정복 욕구를 0으로 만듦",
                        afterTitle: "비소유 신호로 남자의 뇌에 강력한 상실 공포를 심는다",
                        afterSub: "언제든 떠날 수 있는 품격 있는 여자를 남자는 결코 놓지 못합니다."
                      },
                      {
                        beforeTitle: "서운함에 못 이겨 새벽에 긴 장문 카톡을 보낸 적이 있다",
                        beforeSub: "상대에게 감정 쓰레기통 취급을 받거나 차단당하는 결말",
                        afterTitle: "단 3줄의 실전 템플릿으로 남자의 뇌에 죄책감을 각인한다",
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
                            <p className="text-[#EDE6DA] text-[14px] sm:text-[15px] font-semibold leading-[1.4] break-keep">
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
                            <p className="text-[#F5E9E2] text-[14px] sm:text-[15px] font-semibold leading-[1.4] break-keep">
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
                  className="gungjung-glass p-6 sm:p-8 md:p-14 lg:p-16 rounded-3xl md:rounded-[40px] border border-[#D4B2A7]/30"
                  style={{
                    background: 'linear-gradient(135deg, rgba(74, 35, 43, 0.45) 0%, rgba(15, 6, 20, 0.94) 100%)',
                    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.4)'
                  }}
                >
                  {/* 이름 & 타이틀 (가운데 정렬) */}
                  <div className="text-center mb-8 md:mb-10 space-y-2.5 break-keep">
                    <span className="text-[#D4B2A7] font-elegant text-[12pt] font-semibold tracking-[0.2em] uppercase block">
                      AUTHOR & MASTER
                    </span>
                    <h3 className="text-2xl md:text-[36px] font-elegant font-bold text-[#FAF7F2] tracking-wide">
                      백도화 (白桃花)
                    </h3>
                    <p className="text-[17px] md:text-[18px] text-[#D4B2A7]/90 font-normal leading-[1.8] break-keep">
                      마음의 구조를 읽고, 관계의 자리를 회복시키는 심리 멘토
                    </p>

                    {/* 핵심 공인 자격 뱃지 (반투명 로즈퍼플 바탕 + 얇은 테두리) */}
                    <div className="flex flex-wrap justify-center gap-2 md:gap-2.5 pt-3 max-w-2xl mx-auto">
                      {[
                        "국가공인 브레인트레이너",
                        "NLP 전문상담사",
                        "전문 최면상담사",
                        "자존감코칭전문가",
                        "심리상담사",
                        "평생교육사"
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
                  <div className="max-w-[800px] mx-auto text-left text-[17px] md:text-[18px] text-[#EDE6DA] leading-[1.8] font-normal space-y-5 md:space-y-6 break-keep border-t border-[#D4B2A7]/20 pt-8 md:pt-10">
                    <div className="text-[#D4B2A7]/50 text-3xl font-serif leading-none select-none -mb-2">“</div>

                    <p>
                      연애는 진심을 다하고 최선을 다하면 되는 줄 알았습니다.
                      하지만 마음이 깊어질수록 더 불안해지고, 잘해주면서도 서운함이 쌓이는 관계는 진심만으로 풀리지 않을 때가 있습니다.
                    </p>
                    <p>
                      그래서 필요한 것은 더 많은 희생에 앞서, 내 마음과 관계의 심리를 이해하는 일입니다.
                      《연애비급》은 그 이해를 일상의 말과 행동, 거리와 선택에 연결하기 위해 쓴 책입니다.
                    </p>
                    <p className="text-[#FAF7F2] font-medium">
                      상대의 마음을 헤아리면서도 내 감정과 기준을 놓치지 않는 것.
                      사랑 안에서 나를 잃지 않고, 나에게 맞는 관계를 선택하는 것.
                      이 책이 그 시작을 함께하기를 바랍니다.
                    </p>

                    <div className="pt-2 text-right text-xs md:text-sm text-[#D4B2A7] font-elegant tracking-wide">
                      — 마스터 백도화 드림
                    </div>
                  </div>
                </div>
              </Reveal>
            </section>
            <ChampagneThreadDivider />

            {/* ═══════════════════════════════════════════════════════════════
                2. Product Overview Section: 사랑은 감정이 아니라 관계의 구조입니다
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-28 w-full max-w-[1280px] mx-auto">
              <Reveal>
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                  {/* 왼쪽 세로 이미지 (3:4 비율, 선택하는 주권자의 위상) */}
                  <div className="relative w-full aspect-[3/4] overflow-hidden rounded-[40px] border border-[#D4B2A7]/30 shadow-2xl">
                    <Image
                      src={productData.overviewImage}
                      alt="사랑은 감정이 아니라 관계의 구조입니다 - 연애비급"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>

                  {/* 오른쪽 핵심 가치 및 6개 포인트 카드 */}
                  <div className="space-y-6 text-left break-keep">
                    <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white leading-[1.4] break-keep">
                      사랑은 감정이 아니라<br />
                      <span className="text-[#E5C4BB]">관계의 구조</span>입니다
                    </h2>
                    <p className="text-[17px] md:text-[18px] text-[#EDE6DA]/75 leading-[1.8] font-normal break-keep">
                      연애비급은 단순히 더 예뻐지는 법, 더 잘해주는 법, 더 참는 법을 말하지 않습니다. 이 책은 연애에서 반복적으로 상처받는 여성이 왜 늘 같은 자리에서 흔들리는지, 어떤 순간 관계의 포지션이 기울어지는지, 그리고 어떻게 다시 나의 중심으로 돌아올 수 있는지를 다룹니다. 사랑받기 위해 애쓰는 여자가 아니라, 사랑이 머물 수밖에 없는 여자가 되는 관계 구조 안내서입니다.
                    </p>

                    {/* 포인트 카드 6개 (glass card 형태) */}
                    <div className="grid grid-cols-2 gap-4 pt-4">
                      {[
                        "연애 포지션 회복",
                        "남자의 심리 구조 이해",
                        "흔들리지 않는 매력의 근원",
                        "무의식적 관계 패턴 해석",
                        "말의 결을 바꾸는 언어 구조",
                        "선택받는 자리에서 선택하는 자리로"
                      ].map((item, idx) => (
                        <div
                          key={idx}
                          className="gungjung-glass p-4 border-[#D4B2A7]/20 flex items-center gap-3 hover:border-[#D4B2A7]/50 transition-all"
                          style={{
                            boxShadow: '0 8px 32px rgba(197, 139, 160, 0.05)'
                          }}
                        >
                          <div className="w-6 h-6 rounded-full bg-[#A66B73] flex items-center justify-center shrink-0 border border-[#A66B73]/50 shadow-sm">
                            <Check className="w-3.5 h-3.5 text-[#FAF6EE]" />
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
                            className={`h-2 rounded-full transition-all ${
                              reviewIndex === idx ? 'w-6 bg-[#D4B2A7]' : 'w-2 bg-white/20'
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

                {/* 반응형 비교표 컨테이너 */}
                <div className="overflow-x-auto rounded-3xl border border-[#D4B2A7]/40 shadow-2xl bg-[#2A0A14]/30 backdrop-blur-sm">
                  <table className="w-full text-left border-collapse min-w-[640px]">
                    <thead>
                      <tr className="border-b border-[#D4B2A7]/30 bg-black/40">
                        <th className="py-5 px-6 text-sm font-bold text-[#EDE6DA]/60 w-1/4">구분</th>
                        <th className="py-5 px-6 text-sm font-bold text-[#EDE6DA]/60 w-1/4">일반 인터넷 조언</th>
                        <th className="py-5 px-6 text-sm font-bold text-[#EDE6DA]/60 w-1/4">뻔한 여우짓 강의</th>
                        <th className="py-5 px-6 text-base font-bold text-[#FAF6EE] bg-[#A66B73]/30 border-l border-r border-[#A66B73]/40 w-1/4">
                          백도화 연애비급 3종 세트
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 text-xs md:text-sm">
                      {/* 행 1: 비용 */}
                      <tr className="hover:bg-white/[0.01] transition-colors">
                        <td className="py-5 px-6 font-bold text-white">비용</td>
                        <td className="py-5 px-6 text-[#EDE6DA]/70">단편적 정보</td>
                        <td className="py-5 px-6 text-[#EDE6DA]/70">수십만 원 상당</td>
                        <td className="py-5 px-6 font-bold text-[#FAF7F2] bg-[#A66B73]/20 border-l border-r border-[#A66B73]/40">
                          <span className="text-[#E5C4BB] text-base">단 19,000원</span> (영구 소장)
                        </td>
                      </tr>

                      {/* 행 2: 관점 */}
                      <tr className="hover:bg-white/[0.01] transition-colors">
                        <td className="py-5 px-6 font-bold text-white">관점</td>
                        <td className="py-5 px-6 text-[#EDE6DA]/70">&ldquo;답장 늦게 해라&rdquo; 식</td>
                        <td className="py-5 px-6 text-[#EDE6DA]/70">얄팍한 애교</td>
                        <td className="py-5 px-6 font-bold text-[#FAF7F2] bg-[#A66B73]/20 border-l border-r border-[#A66B73]/40">
                          진화심리학 + 최면 역학 + 무너지지 않는 자립 프레임
                        </td>
                      </tr>

                      {/* 행 3: 도구 */}
                      <tr className="hover:bg-white/[0.01] transition-colors">
                        <td className="py-5 px-6 font-bold text-white">도구</td>
                        <td className="py-5 px-6 text-[#EDE6DA]/70">없음</td>
                        <td className="py-5 px-6 text-[#EDE6DA]/70">어색한 연기</td>
                        <td className="py-5 px-6 font-bold text-[#FAF7F2] bg-[#A66B73]/20 border-l border-r border-[#A66B73]/40">
                          복붙 카톡 프로토콜 5종 + 30일 실천 워크북
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* 가치 비교 핵심 포인트 요약 */}
                <div className="mt-8 space-y-3 max-w-4xl mx-auto break-keep">
                  {/* 항목 1 */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-black/40 border border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-2.5 md:gap-4 hover:border-[#D4B2A7]/30 transition-all">
                    <div className="flex items-center gap-3 text-white/90 font-medium text-sm sm:text-base shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4B2A7]/50 shrink-0" />
                      <span>1회 15만 원짜리 연애 상담?</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#EDE6DA]/70 text-xs sm:text-sm pl-4 md:pl-0 font-light">
                      <span className="text-[#D4B2A7] font-bold shrink-0">➔</span>
                      <span>상담 끝나면 또 원점으로 돌아와 불안해집니다.</span>
                    </div>
                  </div>

                  {/* 항목 2 */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-black/40 border border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-2.5 md:gap-4 hover:border-[#D4B2A7]/30 transition-all">
                    <div className="flex items-center gap-3 text-white/90 font-medium text-sm sm:text-base shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4B2A7]/50 shrink-0" />
                      <span>시중의 수박 겉핥기 연애 유튜브?</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#EDE6DA]/70 text-xs sm:text-sm pl-4 md:pl-0 font-light">
                      <span className="text-[#D4B2A7] font-bold shrink-0">➔</span>
                      <span>뻔한 &lsquo;밀당해라, 연락 늦게 해라&rsquo; 잡기술로 밑천만 드러납니다.</span>
                    </div>
                  </div>

                  {/* 항목 3: 연애비급 세트 강조 (차분한 딥 더스티 로즈 #49303F 테마 통일) */}
                  <div
                    className="p-4 sm:p-5 rounded-2xl border border-[rgba(210,166,172,0.30)] shadow-[0_8px_24px_rgba(0,0,0,0.35)] flex flex-col md:flex-row md:items-center justify-between gap-2.5 md:gap-4 hover:border-[rgba(210,166,172,0.60)] transition-all"
                    style={{ background: 'rgba(60, 34, 50, 0.80)' }}
                  >
                    <div className="flex items-center gap-3 text-[#F5E9E2] font-elegant font-bold text-sm sm:text-base shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C5A578] shrink-0 shadow-[0_0_8px_#C5A578]" />
                      <span>《연애비급 3종 마스터 세트》</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#D5C2C6] text-xs sm:text-sm pl-4 md:pl-0 font-normal">
                      <span className="text-[#C5A578] font-bold shrink-0">➔</span>
                      <span>단 한 번 치킨 한 마리 값(<strong className="text-[#F5E9E2] font-bold">19,000원</strong>)으로 평생 남자를 다루는 절대 프레임을 소장합니다.</span>
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
                          <div className="px-6 pb-6 pt-2.5 text-xs md:text-sm text-[#EDE6DA]/80 leading-[1.8] font-light border-t border-white/5 break-keep">
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
                      <p className="text-xs md:text-sm text-[#EDE6DA] font-light leading-relaxed break-keep">
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
                  <ul className="space-y-4 text-xs md:text-sm text-[#EDE6DA]/60 font-light">
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
                    {/* [큰 제목] */}
                    <h2 className="text-2xl sm:text-3xl md:text-[36px] font-elegant font-bold text-[#FAF7F2] leading-[1.4] break-keep">
                      선택받기 위해 애쓰지 마세요.<br />
                      <span className="text-[#E5C4BB]">이제, 당신이 선택하세요.</span>
                    </h2>

                    {/* [본문] (최소 16px, 밝은 베이지색, 충분한 줄·문단 간격) */}
                    <div className="space-y-3.5 text-[17px] md:text-[18px] text-[#EDE6DA] leading-[1.8] font-normal break-keep">
                      <p>
                        사랑은 더 많이 애쓴 만큼 주어지는 보상이 아닙니다.<br />
                        진심을 다하는 동안에도, 나의 자리를 잃지 않아야 합니다.
                      </p>
                      <p className="text-[#EDE6DA]/90">
                        불안하게 확인하고 맞추느라 지쳤다면,<br />
                        이제 나의 기준과 매력을 회복하는 연애를 시작해 보세요.
                      </p>
                    </div>

                    {/* [마무리 문장] (은은한 샴페인골드색) */}
                    <p className="text-sm sm:text-base font-elegant text-[#D4B2A7] font-medium tracking-wide pt-1">
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
