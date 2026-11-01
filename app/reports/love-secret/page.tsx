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
  ImageIcon,
  ZoomIn,
  X
} from 'lucide-react'
import RecommendedForCards from '@/components/RecommendedForCards'
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

  heroImage: '/image/love/l1.webp',
  overviewImage: '/image/love/l2.webp',
  recommendedImage: '/image/love/l3.webp',
  structureImage: '/image/love/l4.webp',
  premiumImage: '/image/love/l5.webp',
  ctaImage: '/image/love/l6.webp',
}

// 🖼️ 신규 교체형 이미지 슬롯 컴포넌트
// (로즈골드 #D4B2A7 / 샴페인 골드 #C5A059 테두리와 딥 버건디 로즈 배경의 고급 플레이스홀더)
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
            <span className="inline-block px-3 py-0.5 rounded-full text-[10px] tracking-wider uppercase font-bold text-[#E6BE8A] bg-[#8B263E]/70 border border-[#D4B2A7]/30 mb-2">
              {asset.placeholderLabel}
            </span>
            <p className="text-sm md:text-base font-elegant font-bold text-[#FAF7F2] break-keep">
              {asset.alt}
            </p>
          </div>
          <span className="text-[11px] text-[#D4B2A7]/80 font-mono bg-black/50 px-3 py-1 rounded border border-[#C5A059]/30">
            {asset.description}
          </span>
        </div>
      )}
    </div>
  )
}

// 📦 3종 올인원 세트 패키지 목업 이미지 (추후 교체 시 아래 경로만 변경)
const PACKAGE_MOCKUP_IMAGE = '/images/love-secret/package-mockup.png'

// 📚 개별 도서 3:4 목업 이미지 (추후 개별 교체 시 아래 경로만 변경)
const BOOK_MOCKUPS = {
  book1: '/images/love-secret/book1-love-mockup.png',       // Book 1: 피치핑크 꽃 장식 《연애비급 완전판》
  book2: '/images/love-secret/book2-secret-mockup.png',     // Book 2: 금빛 열쇠 《매혹의 무의식 침투 프로토콜》
  book3: '/images/love-secret/book3-workbook-mockup.png',   // Book 3: 핫핑크 남녀 실루엣 《30일 매력 각성 워크북》
}

export default function LoveSecretEbookPage() {
  useScrollAnimation()
  const router = useRouter()

  // 인포그래픽 및 패키지 목업 확대 모달 상태
  const [isInfographicZoomed, setIsInfographicZoomed] = useState(false)
  const [isPackageMockupZoomed, setIsPackageMockupZoomed] = useState(false)

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
      <div className="h-[1px] w-16 md:w-32 bg-gradient-to-r from-transparent via-[#D4B2A7]/40 to-[#8B263E]" />
      <div className="mx-4 flex items-center justify-center">
        <svg className="w-5 h-5 text-[#D4B2A7] animate-pulse" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C9.5 2 7.5 4 7.5 6.5C7.5 9 10 11 12 13C14 11 16.5 9 16.5 6.5C16.5 4 14.5 2 12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 13V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="12" cy="6.5" r="2" fill="currentColor" />
        </svg>
      </div>
      <div className="h-[1px] w-16 md:w-32 bg-gradient-to-l from-transparent via-[#D4B2A7]/40 to-[#8B263E]" />
    </div>
  )

  // 공통 CTA 버튼 -> 장바구니 / 바로구매 분리 (연애비급 테마 색상 적용)
  const CTAButton = ({ text }: { text: string }) => (
    <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center my-6 max-w-xl mx-auto w-full">
      <button
        onClick={handleAddToCart}
        className="py-4 px-6 rounded-xl font-elegant font-bold text-base hover:scale-[1.02] active:scale-95 transition-all duration-300 border border-[#D4B2A7]/40 text-[#D4B2A7] hover:bg-[#D4B2A7]/10 bg-transparent shrink-0 whitespace-nowrap w-full sm:w-auto"
      >
        장바구니 담기
      </button>
      <button
        onClick={handlePurchase}
        className="flex-1 py-4 px-6 rounded-xl font-elegant font-bold text-sm md:text-base hover:scale-[1.02] active:scale-95 transition-all duration-500 flex items-center justify-center gap-2 text-[#FAF7F2] w-full shadow-[0_0_35px_rgba(197,139,160,0.25)]"
        style={{
          background: 'linear-gradient(135deg, #BA8D7E 0%, #8C5E50 100%)',
          border: '1px solid rgba(212, 178, 167, 0.55)',
        }}
      >
        <span className="break-keep text-center">{text}</span>
        <ChevronRight className="w-5 h-5 text-[#FAF7F2] shrink-0" />
      </button>
    </div>
  )

  return (
    <main className="detail-page relative min-h-screen bg-[#0a0514] text-[#EDE6DA] font-sans selection:bg-[#FAF7F2] selection:text-[#1A0F2E]">
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
                  <span className="inline-block px-5 py-1.5 rounded-full text-[10px] md:text-xs font-bold tracking-[0.25em] text-[#D4B2A7] uppercase"
                    style={{
                      background: 'rgba(186, 141, 126, 0.15)',
                      border: '1px solid rgba(212, 178, 167, 0.3)',
                    }}>
                    PREMIUM LOVE POSITION GUIDE
                  </span>
                </div>

                {/* 대제목 */}
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-elegant font-bold mb-10 text-white leading-tight">
                  戀愛秘笈 <span className="text-[#D4B2A7]">연애비급</span>
                </h1>

                {/* 1. 최상단: 가로형 풀 이미지 (기존 l1.webp, 16:9 비율) */}
                <div className="relative max-w-6xl mx-auto aspect-video mb-16 rounded-[30px] md:rounded-[40px] overflow-hidden border border-white/10 shadow-2xl group">
                  <Image
                    src={productData.heroImage}
                    alt="연애비급"
                    fill
                    className="object-cover transition-transform duration-[10000ms] group-hover:scale-110"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0514]/60 to-transparent"></div>
                </div>

                {/* 2. 기존 하단 서브카피, 설명 및 구매 버튼 보존 */}
                <div className="max-w-3xl mx-auto space-y-6 mb-20">
                  <p className="text-xl md:text-2xl font-elegant font-semibold text-[#BA8D7E] leading-snug break-keep">
                    사랑을 구걸하는 자리에서, 사랑이 머무는 자리로
                  </p>

                  <div className="text-sm md:text-base text-[#EDE6DA]/75 leading-relaxed space-y-3 pt-6 border-t border-white/5 break-keep">
                    <p>
                      연애비급은 반복적으로 낮은 자리에 서는 여성을 위한 프리미엄 연애 심리·포지션·매력 구조 해석서입니다.
                    </p>
                    <p>
                      더 많이 애쓰는 것이 아니라, 내가 서 있는 자리를 바꾸는 것.
                    </p>
                    <p className="font-semibold text-white">
                      이제 사랑을 확인하고 붙잡는 연애가 아니라, 나의 기준과 매력을 잃지 않는 연애를 시작해보세요.
                    </p>
                  </div>

                  <div className="pt-4">
                    <CTAButton text="연애비급 구매하기" />
                  </div>
                </div>

                {/* 3. 그 밑에 새로 추가된 Section 1: Hero Banner 3종 패키지 확장 통합 카드 */}
                <div
                  className="max-w-6xl mx-auto rounded-[32px] md:rounded-[40px] p-6 md:p-12 mb-16 border border-[#D4B2A7]/40 text-left relative overflow-hidden shadow-2xl mt-12"
                  style={{
                    background: 'radial-gradient(ellipse at 50% 0%, rgba(139, 38, 62, 0.35) 0%, rgba(74, 35, 43, 0.3) 50%, rgba(10, 5, 20, 0.95) 100%)',
                    boxShadow: '0 0 60px rgba(186, 141, 126, 0.25)'
                  }}
                >
                  <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
                    {/* 좌측: 신규 헤드카피, 서브카피, 뱃지, 가격 강조, CTA */}
                    <div className="lg:col-span-7 space-y-6">
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3.5 py-1.5 rounded-full text-[11px] md:text-xs font-bold tracking-wide text-[#E6BE8A] bg-[#8B263E]/60 border border-[#D4B2A7]/40">
                          [본편+전략시크릿북+실전워크북+도화만개부 4 in 1]
                        </span>
                        <span className="px-3.5 py-1.5 rounded-full text-[11px] md:text-xs font-bold tracking-wide text-[#E6BE8A] bg-[#8B263E]/60 border border-[#D4B2A7]/40">
                          [실전 카톡 템플릿 5종]
                        </span>
                      </div>

                      <h2 className="text-2xl md:text-3xl lg:text-4xl font-elegant font-bold text-white leading-snug break-keep">
                        &ldquo;사랑은 노력으로 만들어지지 않는다. 네가 서 있는 자리가 결과를 만든다.&rdquo;
                      </h2>

                      <p className="text-sm md:text-base text-[#EDE6DA]/85 leading-relaxed font-light break-keep">
                        착하게 맞출수록 만만해지던 연애의 잔혹한 끝. 남자의 무의식 신경회로를 뒤흔들고 관계의 절대적 주도권을 쥐는 22가지 비밀 법칙.
                      </p>

                      {/* 가격 강조 박스 */}
                      <div className="p-5 rounded-2xl bg-[#2A0A14]/70 border border-[#D4B2A7]/30 flex flex-wrap items-center justify-between gap-4">
                        <div className="space-y-1">
                          <span className="text-xs text-[#EDE6DA]/50 block">백도화 연애비급 3종 올인원 세트</span>
                          <div className="flex items-baseline gap-3">
                            <span className="text-sm md:text-base text-[#EDE6DA]/40 line-through">
                              정가 79,000원
                            </span>
                            <span className="text-2xl md:text-3xl font-elegant font-bold text-[#E6BE8A]">
                              19,000원
                            </span>
                          </div>
                        </div>
                        <span className="px-3 py-1 rounded-full text-xs font-bold text-white bg-[#8B263E] border border-[#D4B2A7]/50 shadow-[0_0_15px_rgba(212,178,167,0.2)]">
                          76% OFF
                        </span>
                      </div>

                      <div className="pt-2">
                        <CTAButton text="지금 19,000원에 연애의 칼자루 쥐기" />
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

            <ChampagneThreadDivider />

            {/* ═══════════════════════════════════════════════════════════════
                2. Product Overview Section (기존 상품 소개 보존)
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-28">
              <Reveal>
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                  {/* 왼쪽 실제 전자책 목업 */}
                  <div className="relative w-full aspect-square overflow-hidden rounded-[40px] border border-[#D4B2A7]/30 shadow-2xl">
                    <Image
                      src={productData.overviewImage}
                      alt="연애비급 전자책 목업"
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* 오른쪽 핵심 가치 및 6개 포인트 카드 */}
                  <div className="space-y-6 text-left break-keep">
                    <h2 className="text-2xl md:text-3xl font-elegant font-bold text-white leading-snug">
                      사랑은 감정이 아니라<br />
                      <span className="text-[#D4B2A7]">관계의 구조</span>입니다
                    </h2>
                    <p className="text-sm md:text-base text-[#EDE6DA]/75 leading-relaxed font-light">
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
                          <div className="w-6 h-6 rounded-full bg-[#BA8D7E]/20 flex items-center justify-center shrink-0 border border-[#D4B2A7]/30">
                            <Check className="w-3.5 h-3.5 text-[#D4B2A7]" />
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
                신규 Section 2. Pain Point — 문제 진단 & 공감
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-28 text-left max-w-6xl mx-auto">
              <Reveal>
                <div className="space-y-10">
                  <div className="text-center max-w-3xl mx-auto space-y-4">
                    <span className="text-[#D4B2A7] font-elegant tracking-[0.2em] text-xs uppercase">
                      Problem Diagnosis & Resonance
                    </span>
                    <h2 className="text-2xl md:text-4xl font-elegant font-bold text-white leading-tight break-keep">
                      &ldquo;당신이 마음을 다 바쳐 헌신할수록, 남자는 왜 만만하게 보고 떠났을까?&rdquo;
                    </h2>
                  </div>

                  <div className="grid lg:grid-cols-12 gap-10 items-start">
                    {/* 이미지 교체 영역 (기울어진 시소 및 읽씹 화면 비주얼 - 가로 3 : 세로 4 비율, 잘림 없이 전체 표시) */}
                    <div className="lg:col-span-5 w-full">
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
                    </div>

                    {/* 본문 텍스트 및 나의 연애 누수 체크리스트 */}
                    <div className="lg:col-span-7 space-y-6 break-keep">
                      <p className="text-sm md:text-base text-[#EDE6DA]/85 leading-relaxed font-light p-6 rounded-2xl bg-[#2A0A14]/50 border border-[#D4B2A7]/30">
                        진심을 다하고 참아주면 사랑받는다는 말은 연애에서 가장 잔인한 거짓말입니다. 연애는 도덕 시험이 아니라 위치(Position) 싸움입니다. 언제든 연락되고 일정을 맞춰주는 순간, 당신은 매혹의 대상이 아닌 &apos;소모품 노동자&apos;로 전락합니다. 남자를 잡으려 하지 말고 자리를 잡으십시오.
                      </p>

                      <div className="space-y-3">
                        <h3 className="text-base md:text-lg font-elegant font-bold text-[#E6BE8A] flex items-center gap-2">
                          <AlertTriangle className="w-5 h-5 text-[#E6BE8A]" />
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
                              <div className="w-5 h-5 rounded border border-[#D4B2A7]/60 flex items-center justify-center shrink-0 mt-0.5 bg-[#8B263E]/40">
                                <Check className="w-3.5 h-3.5 text-[#E6BE8A]" />
                              </div>
                              <span className="text-xs md:text-sm text-[#FAF7F2] font-medium leading-snug">
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
                신규 추가: Before & After 1:1 매칭 비교 (기존 연애비급 디자인 톤앤매너 적용)
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-28 max-w-6xl mx-auto">
              <Reveal>
                <div
                  className="gungjung-glass py-12 px-4 md:px-10 rounded-3xl md:rounded-[40px] border border-[#D4B2A7]/30"
                  style={{
                    background: 'linear-gradient(135deg, rgba(139, 38, 62, 0.25) 0%, rgba(10, 5, 20, 0.9) 100%)',
                    boxShadow: '0 12px 40px rgba(186, 141, 126, 0.15)'
                  }}
                >
                  <div className="max-w-3xl mx-auto px-4 text-center mb-10 space-y-3 break-keep">
                    <span className="text-[#D4B2A7] font-elegant text-xs font-semibold tracking-[0.2em] uppercase block">
                      TRANSFORMATION
                    </span>
                    <h3 className="text-2xl md:text-3xl font-elegant font-bold text-white leading-snug">
                      &ldquo;위 체크리스트 중 3개 이상 해당된다면,<br />
                      <span className="text-[#E6BE8A]">당신이 서 있는 자리가 이렇게 바뀝니다.</span>&rdquo;
                    </h3>
                    <p className="text-[#EDE6DA]/75 text-xs md:text-sm font-light leading-relaxed">
                      노력과 헌신으로 붙잡는 연애는 끝났습니다. 자리를 바꾸는 순간 관계의 역학이 뒤집힙니다.
                    </p>
                  </div>

                  <div className="max-w-4xl mx-auto space-y-4 text-left break-keep">
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
                        className="grid grid-cols-1 md:grid-cols-2 gap-3 p-4 rounded-2xl bg-black/40 border border-[#D4B2A7]/20 hover:border-[#D4B2A7]/40 transition-colors"
                      >
                        <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#2A0A14]/60 border border-[#8B263E]/40">
                          <span className="text-[#D4B2A7]/80 font-serif font-bold text-[11px] px-2.5 py-1 bg-[#4A232B]/60 border border-[#D4B2A7]/20 rounded shrink-0">
                            BEFORE
                          </span>
                          <div>
                            <p className="text-[#EDE6DA]/85 text-sm font-medium leading-snug">{item.beforeTitle}</p>
                            <p className="text-[#EDE6DA]/50 text-xs mt-1 font-light">{item.beforeSub}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#8B263E]/25 border border-[#D4B2A7]/40 shadow-[0_0_20px_rgba(212,178,167,0.08)]">
                          <span className="text-[#E6BE8A] font-serif font-bold text-[11px] px-2.5 py-1 bg-[#8B263E]/80 border border-[#E6BE8A]/40 rounded shrink-0">
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

            <ChampagneThreadDivider />

            {/* ═══════════════════════════════════════════════════════════════
                3. Recommended For Section (기존 추천 대상 보존)
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-28">
              <Reveal>
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                  {/* 왼쪽 추천 리스트 */}
                  <div className="space-y-8 text-left break-keep">
                    <h2 className="text-2xl md:text-3xl font-elegant font-bold text-white tracking-wide">
                      이런 분께 <span className="text-[#D4B2A7]">추천합니다</span>
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

                  {/* 오른쪽 세로 이미지 */}
                  <div className="relative w-full aspect-[3/4] overflow-hidden rounded-[40px] border border-white/10 shadow-2xl">
                    <Image
                      src={productData.recommendedImage}
                      alt="성숙한 여성을 상징하는 이미지"
                      fill
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
            <section className="mb-28 text-left max-w-6xl mx-auto">
              <Reveal>
                <div className="py-4">
                  {/* 솔루션 시스템 인포그래픽 (제목 바로 위 중앙 배치, 원본 비율 유지, 클릭 시 모달 확대) */}
                  <div className="mb-10 md:mb-14">
                    <div
                      onClick={() => setIsInfographicZoomed(true)}
                      className="relative max-w-4xl mx-auto rounded-2xl md:rounded-3xl overflow-hidden border border-[#D4B2A7]/30 bg-black/40 shadow-[0_12px_40px_rgba(0,0,0,0.6)] cursor-pointer group transition-all duration-300 hover:border-[#E6BE8A]/60"
                      title="클릭하여 원본 크기로 확대 보기"
                    >
                      <div className="relative w-full">
                        <Image
                          src="/images/love-secret/solution-system.png"
                          alt="연애비급 솔루션 시스템 인포그래픽: STEP 1 내 자리 바로잡기 & STEP 2 관계에 적용하기"
                          width={1200}
                          height={675}
                          sizes="(max-width: 768px) 100vw, 896px"
                          className="w-full h-auto object-contain block transition-transform duration-500 group-hover:scale-[1.01]"
                          priority
                        />
                      </div>

                      {/* 탭/클릭하여 확대 안내 뱃지 */}
                      <div className="absolute bottom-3 right-3 md:bottom-4 md:right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/80 border border-[#D4B2A7]/50 text-[#E6BE8A] text-xs font-medium shadow-lg backdrop-blur-sm pointer-events-none group-hover:bg-[#2D0A1E] group-hover:border-[#E6BE8A] transition-all">
                        <ZoomIn className="w-3.5 h-3.5 text-[#E6BE8A]" />
                        <span>탭하여 크게 보기</span>
                      </div>
                    </div>
                  </div>

                  {/* 인트로 헤드라인 */}
                  <div className="text-center mb-12 space-y-4 break-keep">
                    <span className="text-[#D4B2A7] font-elegant text-xs font-semibold tracking-[0.2em] uppercase block">
                      THE BAEKDOHWA SOLUTION
                    </span>
                    <h2 className="text-2xl md:text-4xl font-elegant font-bold text-white leading-snug">
                      복잡한 심리 이론은 필요 없습니다.<br />
                      <span className="text-[#E6BE8A]">내 자리를 바로잡고, 상대를 움직이는 기술을 얹습니다.</span>
                    </h2>
                    <p className="text-[#EDE6DA]/75 text-sm md:text-base max-w-2xl mx-auto font-light leading-relaxed">
                      내가 흔들리는 상태에서는 어떤 밀당 기술도 먹히지 않습니다.<br />
                      《연애비급》은 <strong className="text-[#FAF7F2] font-semibold">내면의 중심(6대 구조)</strong>을 먼저 세운 뒤, <strong className="text-[#E6BE8A] font-semibold">상대의 무의식을 자극하는 기술(4대 역학)</strong>을 실행하도록 설계되었습니다.
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
                        <span className="px-3.5 py-1 rounded-full bg-[#8C5E50] text-[#FAF7F2] font-serif font-bold text-xs tracking-wider border border-[#D4B2A7]/40">
                          STEP 1
                        </span>
                        <h3 className="text-xl md:text-2xl font-elegant font-bold text-white">
                          내 자리 바로잡기 (6대 핵심 구조)
                        </h3>
                      </div>
                      <p className="text-[#EDE6DA]/75 text-sm mb-8 leading-relaxed font-light break-keep">
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
                            <p className="text-white text-sm md:text-base font-elegant font-bold mt-1.5">{item.title}</p>
                            <p className="text-[#EDE6DA]/60 text-xs mt-1 font-light leading-relaxed">{item.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* 연결 화살표 */}
                    <div className="flex justify-center -my-4 relative z-10">
                      <div className="w-11 h-11 rounded-full bg-[#8B263E]/60 border border-[#D4B2A7]/50 flex items-center justify-center text-[#E6BE8A] shadow-[0_0_20px_rgba(212,178,167,0.25)] font-bold">
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
                        <span className="px-3.5 py-1 rounded-full bg-[#8B263E] text-[#E6BE8A] font-serif font-bold text-xs tracking-wider border border-[#D4B2A7]/40">
                          STEP 2
                        </span>
                        <h3 className="text-xl md:text-2xl font-elegant font-bold text-white">
                          상대를 움직이는 실전 기술 (4대 핵심 역학)
                        </h3>
                      </div>
                      <p className="text-[#EDE6DA]/75 text-sm mb-8 leading-relaxed font-light break-keep">
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
                            className="p-5 rounded-2xl bg-black/45 border border-[#D4B2A7]/25 hover:border-[#E6BE8A]/60 transition-all group break-keep"
                          >
                            <div className="flex items-center justify-between mb-2">
                              <span className="font-serif text-xs font-bold bg-[#8B263E] text-[#E6BE8A] px-2.5 py-0.5 rounded border border-[#D4B2A7]/40">
                                {card.num}
                              </span>
                              <Sparkles className="w-4 h-4 text-[#D4B2A7]/50 group-hover:text-[#E6BE8A] transition-colors" />
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

            <ChampagneThreadDivider />

            {/* ═══════════════════════════════════════════════════════════════
                신규 Section 4. Product Showcase — 3종 올인원 세트 상세 해부
                (Book 1, Book 2, Book 3, Special Bonus 전체 목차 및 상세 반영)
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-28 text-left max-w-6xl mx-auto">
              <Reveal>
                {/* 3종 올인원 세트 목업 이미지 (하단 상자와 동일한 가로 너비로 비율 맞춰 확대, 클릭 시 원본 확대) */}
                <div className="mb-10 md:mb-14">
                  <div
                    onClick={() => setIsPackageMockupZoomed(true)}
                    className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden border border-[#D4B2A7]/30 bg-black/40 shadow-[0_12px_40px_rgba(0,0,0,0.6)] cursor-pointer group transition-all duration-300 hover:border-[#E6BE8A]/60"
                    title="클릭하여 원본 크기로 확대 보기"
                  >
                    <div className="relative w-full">
                      <Image
                        src={PACKAGE_MOCKUP_IMAGE}
                        alt="연애비급 3종 올인원 세트 패키지 목업: 연애비급 완전판, 매혹의 무의식 침투 프로토콜, 30일 매력 각성 워크북, 모바일 배경화면"
                        width={1200}
                        height={675}
                        sizes="(max-width: 1024px) 100vw, 1152px"
                        className="w-full h-auto object-contain block transition-transform duration-500 group-hover:scale-[1.01]"
                        priority
                      />
                    </div>

                    {/* 확대 안내 뱃지 */}
                    <div className="absolute bottom-3 right-3 md:bottom-4 md:right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/80 border border-[#D4B2A7]/50 text-[#E6BE8A] text-xs font-medium shadow-lg backdrop-blur-sm pointer-events-none group-hover:bg-[#2D0A1E] group-hover:border-[#E6BE8A] transition-all">
                      <ZoomIn className="w-3.5 h-3.5 text-[#E6BE8A]" />
                      <span>탭하여 크게 보기</span>
                    </div>
                  </div>

                  {/* 이미지 아래 작은 안내 문구 */}
                  <p className="text-xs md:text-sm text-[#EDE6DA]/70 mt-3.5 text-center font-light tracking-wide">
                    전자책 PDF 3종 + 모바일 배경화면 · 실물 배송 없음
                  </p>
                </div>

                <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
                  <span className="text-[#D4B2A7] font-elegant tracking-[0.2em] text-xs uppercase">
                    3-in-1 All-in-One Package
                  </span>
                  <h2 className="text-2xl md:text-4xl font-elegant font-bold text-white tracking-wide">
                    3종 올인원 세트 상세 해부
                  </h2>
                  <p className="text-sm md:text-base text-[#EDE6DA]/75 leading-relaxed font-light break-keep">
                    정통 바이블, 전략 시크릿북, 실전 워크북, 그리고 디지털 부적까지 하나로 통합된 4 in 1 구성입니다.
                  </p>
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
                      </div>

                      {/* 상세 설명 */}
                      <div className="lg:col-span-8 space-y-6 break-keep">
                        <div>
                          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold text-[#E6BE8A] bg-[#8B263E]/70 border border-[#D4B2A7]/30 mb-3">
                            🌸 Book 1. [정통 바이블]
                          </span>
                          <h3 className="text-2xl md:text-3xl font-elegant font-bold text-white mb-2">
                            《연애비급(戀愛秘笈) 완전판》
                          </h3>
                          <p className="text-sm md:text-base text-[#D4B2A7] font-medium">
                            사랑의 본능·심리·무의식을 읽는 22가지 관계 절대 비법서
                          </p>
                        </div>

                        {/* 핵심 내용 요약 */}
                        <div className="p-4 rounded-xl bg-white/[0.02] border border-[#D4B2A7]/20 text-xs md:text-sm text-[#EDE6DA]/85 leading-relaxed font-light">
                          <span className="font-bold text-[#E6BE8A] block mb-1">핵심 내용 요약</span>
                          남자의 정복 심리 해부 / 흔들리지 않는 매력의 근원 / 앵커링과 라벨링 최면 / 남자가 원하는 3가지(섹슈얼리티·치어링·서브미시브) / 맹목적 부양본능 작동법
                        </div>

                        {/* 상세 목차 1부~7부 */}
                        <div className="space-y-3 pt-2">
                          <h4 className="text-sm font-bold text-white border-b border-white/10 pb-2">상세 목차 (1부 ~ 7부)</h4>

                          {[
                            {
                              part: "1부. 남자의 사랑 작동 원리",
                              desc: "남자가 사랑을 '정복'으로 느끼는 사냥꾼 코드 & 르네 지라르의 삼각 욕망"
                            },
                            {
                              part: "2부. 흔들리지 않는 매력의 근원",
                              desc: "안정된 상태의 힘, 먼 세계의 아우라, 금지된 과일 효과"
                            },
                            {
                              part: "3부. 연애 최면과 유혹의 구조",
                              desc: "상태 동기화(미러링), 앵커링, 라벨링 효과, 자이가르닉 효과, 유혹의 3단계(혼란-고립-각인)"
                            },
                            {
                              part: "4부. 말의 결 (언어 포지셔닝)",
                              desc: "남자를 묶는 3가지 말의 구조 & 남자가 진정으로 원하는 3가지(섹슈얼리티·치어링·서브미시브)"
                            },
                            {
                              part: "5부. 관계를 망치는 치명적 함정",
                              desc: "감정 없는 거리두기(부적 처벌), 간헐적 보상 공식, 감정 잔존 효과"
                            },
                            {
                              part: "6부. 오래 가는 사랑의 구조",
                              desc: "남자의 '맹목적 부양본능'을 촉발시키는 조건 & 돈 많은 남자의 지위 피로 공략법"
                            },
                            {
                              part: "7부. 연애 졸업 선언",
                              desc: "선택받으려 애쓰지 않고 내가 선택하는 절대 주권자의 완성"
                            }
                          ].map((item, idx) => (
                            <div key={idx} className="p-3.5 rounded-xl bg-black/40 border border-[#D4B2A7]/15 space-y-1">
                              <h5 className="text-xs md:text-sm font-bold text-[#E6BE8A]">{item.part}</h5>
                              <p className="text-xs text-[#EDE6DA]/75 font-light leading-relaxed">{item.desc}</p>
                            </div>
                          ))}
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
                      </div>

                      {/* 상세 설명 */}
                      <div className="lg:col-span-8 space-y-6 break-keep">
                        <div>
                          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold text-[#E6BE8A] bg-[#8B263E]/70 border border-[#D4B2A7]/30 mb-3">
                            🖤 Book 2. [전략 시크릿북]
                          </span>
                          <h3 className="text-2xl md:text-3xl font-elegant font-bold text-white mb-2">
                            《매혹의 무의식 침투 프로토콜》
                          </h3>
                          <p className="text-sm md:text-base text-[#D4B2A7] font-medium">
                            9대 유혹자 페르소나 진단 &amp; 실전 카톡 프로토콜
                          </p>
                        </div>

                        {/* 핵심 내용 요약 */}
                        <div className="p-4 rounded-xl bg-white/[0.02] border border-[#D4B2A7]/20 text-xs md:text-sm text-[#EDE6DA]/85 leading-relaxed font-light">
                          <span className="font-bold text-[#E6BE8A] block mb-1">핵심 내용 요약</span>
                          9대 유혹자 페르소나 정밀 진단 / 상대 결핍 코드 판별 / 실전 최면 기법 7선 / 쉿 테스트 방어법 / 상황별 복붙 전용 카톡 템플릿 5종
                        </div>

                        {/* 상세 내용 ①~⑤ */}
                        <div className="space-y-4 pt-2">
                          <div className="p-4.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5">
                            <h4 className="text-sm md:text-base font-bold text-white flex items-center gap-2">
                              <span className="text-[#E6BE8A]">①</span> 9대 유혹자(Seducer) 페르소나 정밀 진단
                            </h4>
                            <p className="text-xs md:text-sm text-[#EDE6DA]/75 font-light pl-6">
                              세이렌, 레이크, 아이디얼 러버, 댄디, 내추럴, 코케트, 차머, 카리스마, 스타 원형 분석 및 치명적 결함 봉인
                            </p>
                          </div>

                          <div className="p-4.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5">
                            <h4 className="text-sm md:text-base font-bold text-white flex items-center gap-2">
                              <span className="text-[#E6BE8A]">②</span> 상대 남자의 3대 무의식 결핍 코드 판별표
                            </h4>
                            <p className="text-xs md:text-sm text-[#EDE6DA]/75 font-light pl-6">
                              자아 존중 결핍형 / 도파민 고갈형 / 정서적 피로형
                            </p>
                          </div>

                          <div className="p-4.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5">
                            <h4 className="text-sm md:text-base font-bold text-white flex items-center gap-2">
                              <span className="text-[#E6BE8A]">③</span> 상대 이성을 마비시키는 실전 심리·최면 기법 7선
                            </h4>
                            <p className="text-xs md:text-sm text-[#EDE6DA]/75 font-light pl-6">
                              흔들다리 효과, 오감 앵커링, 페이싱&amp;리딩, 밀턴 모델 이중 구속 등
                            </p>
                          </div>

                          <div className="p-4.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5">
                            <h4 className="text-sm md:text-base font-bold text-white flex items-center gap-2">
                              <span className="text-[#E6BE8A]">④</span> 관계의 판을 뒤집는 무의식 심리 역학 7대 법칙
                            </h4>
                            <p className="text-xs md:text-sm text-[#EDE6DA]/75 font-light pl-6">
                              에너지 시소의 법칙, 쉿 테스트(떠보기) 여유로운 격퇴법, 정가 지불의 결계
                            </p>
                          </div>

                          {/* ⑤ 실전 상황별 카톡 무의식 침투 프로토콜 */}
                          <div className="p-5 rounded-xl bg-[#8B263E]/20 border border-[#D4B2A7]/30 space-y-3.5">
                            <h4 className="text-sm md:text-base font-bold text-[#FAF7F2] flex items-center gap-2">
                              <span className="text-[#E6BE8A]">⑤</span> 실전 상황별 카톡 무의식 침투 프로토콜 (복사·붙여넣기 템플릿)
                            </h4>

                            <div className="grid sm:grid-cols-2 gap-3 pl-2 pt-1">
                              <div className="p-3.5 rounded-lg bg-black/40 border border-[#D4B2A7]/20 space-y-1">
                                <span className="text-xs font-bold text-[#E6BE8A] block">[썸·호감기]</span>
                                <p className="text-xs text-[#EDE6DA]/80 font-light leading-relaxed">
                                  밤마다 생각나게 만드는 자이가르닉 훅킹 톡
                                </p>
                              </div>

                              <div className="p-3.5 rounded-lg bg-black/40 border border-[#D4B2A7]/20 space-y-1">
                                <span className="text-xs font-bold text-[#E6BE8A] block">[밀당·거리두기]</span>
                                <p className="text-xs text-[#EDE6DA]/80 font-light leading-relaxed">
                                  상대가 단답일 때 온기만 거두는 부적 처벌 응수 톡
                                </p>
                              </div>

                              <div className="p-3.5 rounded-lg bg-black/40 border border-[#D4B2A7]/20 space-y-1">
                                <span className="text-xs font-bold text-[#E6BE8A] block">[관계 경계선]</span>
                                <p className="text-xs text-[#EDE6DA]/80 font-light leading-relaxed">
                                  당일 번개와 일방적 약속을 차단하는 여왕의 선 긋기 톡
                                </p>
                              </div>

                              <div className="p-3.5 rounded-lg bg-black/40 border border-[#D4B2A7]/20 space-y-1">
                                <span className="text-xs font-bold text-[#E6BE8A] block">[텐션 소생]</span>
                                <p className="text-xs text-[#EDE6DA]/80 font-light leading-relaxed">
                                  연락 뜸해진 남자의 뇌를 여는 부담 제로 인셉션 톡
                                </p>
                              </div>

                              <div className="p-3.5 rounded-lg bg-black/40 border border-[#D4B2A7]/20 space-y-1 sm:col-span-2">
                                <span className="text-xs font-bold text-[#E6BE8A] block">[프레임 장악]</span>
                                <p className="text-xs text-[#EDE6DA]/80 font-light leading-relaxed">
                                  어장관리와 짓궂은 떠보기를 단칼에 무력화하는 반사구
                                </p>
                              </div>
                            </div>
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
                      </div>

                      {/* 상세 설명 */}
                      <div className="lg:col-span-8 space-y-6 break-keep">
                        <div>
                          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold text-[#E6BE8A] bg-[#8B263E]/70 border border-[#D4B2A7]/30 mb-3">
                            📖 Book 3. [실전 워크북]
                          </span>
                          <h3 className="text-2xl md:text-3xl font-elegant font-bold text-white mb-2">
                            《30일 매력 각성 워크북》
                          </h3>
                          <p className="text-sm md:text-base text-[#D4B2A7] font-medium">
                            무의식을 흔들고 기억에 남는 여자의 시크릿 액션 플랜
                          </p>
                        </div>

                        {/* 핵심 내용 요약 */}
                        <div className="p-4 rounded-xl bg-white/[0.02] border border-[#D4B2A7]/20 text-xs md:text-sm text-[#EDE6DA]/85 leading-relaxed font-light">
                          <span className="font-bold text-[#E6BE8A] block mb-1">핵심 내용 요약</span>
                          속도와 곡선이 만드는 아우라 / 래포 구축 5단계 / 소울메이트 가치관 대화법 / 남자의 동굴 대처법 / 30일 데일리 실천 플래너
                        </div>

                        {/* 상세 내용 PHASE 1~4 및 부록 */}
                        <div className="space-y-3 pt-2">
                          <h4 className="text-sm font-bold text-white border-b border-white/10 pb-2">30일 액션 플랜 단계</h4>

                          {[
                            {
                              phase: "PHASE 1 (Day 1~7) 첫인상의 법칙",
                              desc: "속도와 곡선이 만드는 아우라, 오감 시선 설계, 모호함의 여백"
                            },
                            {
                              phase: "PHASE 2 (Day 8~14) 연결의 기술",
                              desc: "래포의 5단계, 공통점 발굴 질문법, 소울메이트 3대 대화법, 섹시한 친구 포지션"
                            },
                            {
                              phase: "PHASE 3 (Day 15~21) 욕망의 온도",
                              desc: "불규칙한 반응 패턴, 사소한 부탁으로 만드는 헌신의 관성, 침묵의 센터링"
                            },
                            {
                              phase: "PHASE 4 (Day 22~30) 오래 머물게 하는 여자",
                              desc: "남자의 동굴을 이해하는 여유, 관계 파국 4대 덫 차단, 10년 뒤에도 그리워지는 존재의 깊이"
                            },
                            {
                              phase: "부록.",
                              desc: "30일 데일리 실천 플래너 & 주간 여왕의 에너지 자가 진단표 (Day 7, 14, 21, 30)"
                            }
                          ].map((item, idx) => (
                            <div key={idx} className="p-3.5 rounded-xl bg-black/40 border border-[#D4B2A7]/15 space-y-1">
                              <h5 className="text-xs md:text-sm font-bold text-[#E6BE8A]">{item.phase}</h5>
                              <p className="text-xs text-[#EDE6DA]/75 font-light leading-relaxed">{item.desc}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* ─────────────────────────────────────────────────────────
                      Special Bonus: 《도화만개부(桃花滿開符) 모바일 월페이퍼》
                     ───────────────────────────────────────────────────────── */}
                  <div className="gungjung-glass p-8 md:p-12 border-[#D4B2A7]/40 rounded-3xl relative overflow-hidden"
                    style={{
                      background: 'radial-gradient(ellipse at 50% 0%, rgba(139, 38, 62, 0.4) 0%, rgba(10, 5, 20, 0.95) 100%)',
                      boxShadow: '0 12px 40px rgba(186, 141, 126, 0.22)'
                    }}>
                    <div className="grid lg:grid-cols-12 gap-10 items-center">
                      {/* 부적 이미지 슬롯 */}
                      <div className="lg:col-span-4">
                        <HybridImageSlot assetKey="amulet" className="w-full aspect-[3/4]" />
                      </div>

                      {/* 부적 소개, 설명, 활용 및 패키지 요약 */}
                      <div className="lg:col-span-8 space-y-6 break-keep">
                        <div>
                          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold text-[#E6BE8A] bg-[#8B263E]/70 border border-[#D4B2A7]/30 mb-3">
                            🧧 Special Bonus. [디지털 부적]
                          </span>
                          <h3 className="text-2xl md:text-3xl font-elegant font-bold text-white mb-2">
                            《도화만개부(桃花滿開符) 모바일 월페이퍼》
                          </h3>
                          <p className="text-sm md:text-base text-[#D4B2A7] font-medium mb-3">
                            본연의 치명적인 매력을 깨우고 시선을 독점하는 스마트폰 배경화면용 시각적 에너지 결계
                          </p>
                          <p className="text-xs md:text-sm text-[#EDE6DA]/80 leading-relaxed font-light space-y-1">
                            <span className="block">• <strong className="text-white">설명:</strong> 핑크빛 자개 매화와 황금빛 선율이 어우러져 본연의 치명적인 매력을 깨우는 부적</span>
                            <span className="block">• <strong className="text-white">활용:</strong> 스마트폰 배경화면으로 설정하여 불안을 잠재우고 어디서나 시선을 독점하는 도화 주파수 유지</span>
                          </p>
                        </div>

                        {/* 구성 안내 박스 */}
                        <div className="p-6 rounded-2xl bg-[#2A0A14]/70 border border-[#D4B2A7]/30 space-y-4">
                          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
                            <span className="text-sm font-bold text-white">
                              구성: 본편 + 전략시크릿북 + 실전워크북 + 도화만개부
                            </span>
                            <span className="text-xs px-2.5 py-1 rounded bg-[#8B263E] text-[#E6BE8A] font-bold border border-[#D4B2A7]/30">
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
                            <CTAButton text="연애비급 3종 세트 구매하기" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </section>

            {/* ═══════════════════════════════════════════════════════════════
                신규 추가: 구매 망설임 차단 FAQ ("3종 올인원 세트 상세 해부" 바로 아래)
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-28 text-left max-w-4xl mx-auto">
              <Reveal>
                {/* 섹션: 구매 망설임 차단 FAQ */}
                <div className="py-4">
                  <div className="text-center space-y-4 mb-14">
                    <span className="text-[#D4B2A7] font-elegant tracking-[0.2em] text-xs uppercase block">
                      FAQ
                    </span>
                    <h2 className="text-2xl md:text-4xl font-elegant font-bold text-white tracking-wide">
                      자주 묻는 질문
                    </h2>
                    <p className="text-[#EDE6DA]/75 text-sm md:text-base font-light leading-relaxed break-keep">
                      구매 전 가장 많이 확인하시는 질문들을 모았습니다.
                    </p>
                  </div>

                  <div className="space-y-4 break-keep">
                    {/* Q1 */}
                    <div
                      className="gungjung-glass p-6 rounded-2xl border border-[#D4B2A7]/25 hover:border-[#D4B2A7]/50 transition-all"
                      style={{
                        background: 'linear-gradient(135deg, rgba(139, 38, 62, 0.2) 0%, rgba(10, 5, 20, 0.85) 100%)'
                      }}
                    >
                      <h4 className="text-white font-elegant font-semibold text-base md:text-lg flex items-start gap-2.5">
                        <span className="text-[#E6BE8A] font-serif font-bold shrink-0">Q.</span>
                        <span>지금 썸 단계이거나 헤어진 상태(재회 희망)여도 적용할 수 있나요?</span>
                      </h4>
                      <p className="text-[#EDE6DA]/80 text-xs md:text-sm mt-3 pl-6 leading-relaxed font-light border-t border-white/5 pt-3">
                        네, 완벽히 적용됩니다. 《연애비급》은 특정 연애 기간에 국한된 조언이 아니라, <strong className="text-[#E6BE8A] font-semibold">남자의 무의식이 작동하는 본능적 회로</strong>를 다룹니다. 짝사랑, 썸, 연애 초반 주도권 싸움, 권태기, 이별 후 후폭풍 유도까지 관계의 모든 국면에서 내 포지션을 재설정하는 핵심 원리입니다.
                      </p>
                    </div>

                    {/* Q2 */}
                    <div
                      className="gungjung-glass p-6 rounded-2xl border border-[#D4B2A7]/25 hover:border-[#D4B2A7]/50 transition-all"
                      style={{
                        background: 'linear-gradient(135deg, rgba(139, 38, 62, 0.2) 0%, rgba(10, 5, 20, 0.85) 100%)'
                      }}
                    >
                      <h4 className="text-white font-elegant font-semibold text-base md:text-lg flex items-start gap-2.5">
                        <span className="text-[#E6BE8A] font-serif font-bold shrink-0">Q.</span>
                        <span>제가 마음이 여리고 소심한 편인데, 독해지거나 연기해야 하나요?</span>
                      </h4>
                      <p className="text-[#EDE6DA]/80 text-xs md:text-sm mt-3 pl-6 leading-relaxed font-light border-t border-white/5 pt-3">
                        억지로 성격을 바꾸거나 센 척할 필요가 전혀 없습니다. 상대에게 화를 내거나 무리한 밀당을 시도하는 것은 오히려 불안함을 들키는 하책입니다. 이 책은 <strong className="text-[#E6BE8A] font-semibold">말의 배치와 침묵의 타이밍, 답장의 길이</strong>라는 단순한 ‘구조’만 바꾸어 내 본래의 품격을 지켜내도록 돕습니다.
                      </p>
                    </div>

                    {/* Q3 */}
                    <div
                      className="gungjung-glass p-6 rounded-2xl border border-[#D4B2A7]/25 hover:border-[#D4B2A7]/50 transition-all"
                      style={{
                        background: 'linear-gradient(135deg, rgba(139, 38, 62, 0.2) 0%, rgba(10, 5, 20, 0.85) 100%)'
                      }}
                    >
                      <h4 className="text-white font-elegant font-semibold text-base md:text-lg flex items-start gap-2.5">
                        <span className="text-[#E6BE8A] font-serif font-bold shrink-0">Q.</span>
                        <span>책 분량과 구성은 어떻게 되며, 실전 적용이 쉬운가요?</span>
                      </h4>
                      <p className="text-[#EDE6DA]/80 text-xs md:text-sm mt-3 pl-6 leading-relaxed font-light border-t border-white/5 pt-3">
                        《연애비급 완전판 본편》, 《전략 시크릿북》, 《실전 워크북》에 더해 막막한 상황에서 복사해 쓸 수 있는 <strong className="text-[#E6BE8A] font-semibold">[실전 카톡 템플릿 5종]</strong>까지 4 in 1 올인원으로 제공됩니다. 추상적인 감정 위로에 머물지 않고 당장 오늘 밤 카톡부터 어떻게 보내야 하는지 구체적인 행동 가이드를 담았습니다.
                      </p>
                    </div>

                    {/* Q4 */}
                    <div
                      className="gungjung-glass p-6 rounded-2xl border border-[#D4B2A7]/25 hover:border-[#D4B2A7]/50 transition-all"
                      style={{
                        background: 'linear-gradient(135deg, rgba(139, 38, 62, 0.2) 0%, rgba(10, 5, 20, 0.85) 100%)'
                      }}
                    >
                      <h4 className="text-white font-elegant font-semibold text-base md:text-lg flex items-start gap-2.5">
                        <span className="text-[#E6BE8A] font-serif font-bold shrink-0">Q.</span>
                        <span>결제 후 어떻게 열람하나요? 종이책 배송인가요?</span>
                      </h4>
                      <p className="text-[#EDE6DA]/80 text-xs md:text-sm mt-3 pl-6 leading-relaxed font-light border-t border-white/5 pt-3">
                        실물 배송을 기다릴 필요 없는 <strong className="text-[#E6BE8A] font-semibold">디지털 PDF 전자책 패키지</strong>입니다. 결제 완료 즉시 마이페이지 및 다운로드 링크를 통해 스마트폰, 태블릿, PC에서 영구적으로 소장하고 언제 어디서든 꺼내보실 수 있습니다.
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </section>

            <ChampagneThreadDivider />

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
                      alt="프리미엄 연애 비급서 이미지"
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* 오른쪽 특징 리스트 */}
                  <div className="space-y-6 text-left break-keep">
                    <div>
                      <span className="text-[#D4B2A7] font-elegant tracking-[0.2em] text-xs uppercase">Premium Guidebook</span>
                      <h2 className="text-2xl md:text-3xl font-elegant font-bold text-white mt-1 leading-snug">
                        백도화가 전하는<br />
                        <span className="text-[#D4B2A7]">프리미엄 연애 구조 해석서</span>
                      </h2>
                    </div>

                    <p className="text-sm md:text-base text-[#EDE6DA]/75 leading-relaxed font-light">
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
                6. Book Contents Section (기존 목차 영역 보존)
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-28">
              <Reveal>
                <div className="gungjung-glass p-8 md:p-12 border-[#D4B2A7]/20 bg-gradient-to-br from-white/[0.02] to-transparent text-left max-w-6xl mx-auto break-keep">
                  <div className="text-center md:text-left mb-10">
                    <span className="text-[#D4B2A7] font-elegant tracking-[0.2em] text-xs uppercase">Table of Contents</span>
                    <h2 className="text-2xl md:text-3xl font-elegant font-bold mt-1 text-white border-l-4 border-[#D4B2A7] pl-6">
                      연애비급 구성
                    </h2>
                    <p className="text-xs md:text-sm text-[#EDE6DA]/50 mt-3 font-light leading-relaxed pl-6">
                      연애비급은 총 7부 구성으로, 연애의 시작부터 매력의 근원, 무의식적 관계 구조, 말의 힘, 관계를 망치는 심리, 오래 가는 사랑의 구조, 그리고 선택의 자리까지 단계적으로 안내합니다.
                    </p>
                  </div>

                  {/* 목차 리스트 */}
                  <div className="grid md:grid-cols-2 gap-6 text-sm md:text-base leading-relaxed text-[#EDE6DA]/85">
                    {[
                      {
                        title: "프롤로그",
                        desc: "사랑은 노력으로 만들어지지 않는다"
                      },
                      {
                        title: "1부. 시작과 변화",
                        desc: "남자의 사랑은 어떻게 시작되고 변하는가"
                      },
                      {
                        title: "2부. 매력의 본질",
                        desc: "흔들리지 않는 매력의 근원"
                      },
                      {
                        title: "3부. 무의식과 프레임",
                        desc: "연애 최면과 유혹의 구조"
                      },
                      {
                        title: "4부. 언어의 결",
                        desc: "말의 결, 관계의 위상을 바꾸는 언어"
                      },
                      {
                        title: "5부. 심리의 함정",
                        desc: "관계를 망치는 심리와 치명적인 함정"
                      },
                      {
                        title: "6부. 관계의 완성",
                        desc: "오래 가는 사랑의 구조"
                      },
                      {
                        title: "7부. 주체적 관계",
                        desc: "선택과 졸업"
                      },
                      {
                        title: "에필로그",
                        desc: "사랑을 얻으려 하지 말고, 사랑이 머무를 자리가 되어라"
                      }
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="flex gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-colors"
                      >
                        <div className="w-12 h-12 rounded-lg bg-[#BA8D7E]/10 border border-[#D4B2A7]/20 flex items-center justify-center shrink-0 text-xs font-bold font-serif text-[#D4B2A7]">
                          {idx === 0 ? "Prologue" : idx === 8 ? "Epilogue" : `${idx}부`}
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

            <ChampagneThreadDivider />

            {/* ═══════════════════════════════════════════════════════════════
                신규 Section 5. Social Proof — 실전 체감 사례 (슬라이더)
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-28 text-left max-w-6xl mx-auto">
              <Reveal>
                <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
                  <span className="text-[#D4B2A7] font-elegant tracking-[0.2em] text-xs uppercase">
                    Real Life Transformations
                  </span>
                  <h2 className="text-2xl md:text-4xl font-elegant font-bold text-white tracking-wide">
                    실전 체감 사례
                  </h2>
                  <p className="text-sm md:text-base text-[#EDE6DA]/75 leading-relaxed font-light break-keep">
                    연애비급을 적용한 분들의 실제 관계에 일어난 구체적인 변화입니다.
                  </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-10 items-center">
                  {/* 좌측: 리뷰 목업 이미지 슬롯 */}
                  <div className="lg:col-span-5">
                    <HybridImageSlot
                      assetKey="reviews"
                      className="w-full aspect-[4/3] md:aspect-square"
                    />
                  </div>

                  {/* 우측: 후기 슬라이더 */}
                  <div className="lg:col-span-7 space-y-6">
                    <div
                      className="gungjung-glass p-8 md:p-10 border-[#D4B2A7]/30 rounded-3xl relative overflow-hidden min-h-[220px] flex flex-col justify-between"
                      style={{
                        background: 'linear-gradient(135deg, rgba(139, 38, 62, 0.25) 0%, rgba(10, 5, 20, 0.9) 100%)',
                        boxShadow: '0 8px 32px rgba(186, 141, 126, 0.12)'
                      }}
                    >
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="px-3 py-1 rounded-full text-xs font-bold text-[#E6BE8A] bg-[#8B263E]/70 border border-[#D4B2A7]/30">
                            {reviewCards[reviewIndex].badge}
                          </span>
                          <span className="text-xs text-[#D4B2A7]/70 font-mono">
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
                </div>
              </Reveal>
            </section>

            <ChampagneThreadDivider />

            {/* ═══════════════════════════════════════════════════════════════
                신규 Section 6. Comparison Table — 가치 비교표
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-28 text-left max-w-6xl mx-auto">
              <Reveal>
                <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
                  <span className="text-[#D4B2A7] font-elegant tracking-[0.2em] text-xs uppercase">
                    Value Comparison
                  </span>
                  <h2 className="text-2xl md:text-4xl font-elegant font-bold text-white tracking-wide">
                    가치 비교표
                  </h2>
                  <p className="text-sm md:text-base text-[#EDE6DA]/75 leading-relaxed font-light break-keep">
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
                        <th className="py-5 px-6 text-base font-bold text-[#E6BE8A] bg-[#8B263E]/40 border-l border-r border-[#D4B2A7]/40 w-1/4">
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
                        <td className="py-5 px-6 font-bold text-[#FAF7F2] bg-[#8B263E]/30 border-l border-r border-[#D4B2A7]/40">
                          <span className="text-[#E6BE8A] text-base">단 19,000원</span> (영구 소장)
                        </td>
                      </tr>

                      {/* 행 2: 관점 */}
                      <tr className="hover:bg-white/[0.01] transition-colors">
                        <td className="py-5 px-6 font-bold text-white">관점</td>
                        <td className="py-5 px-6 text-[#EDE6DA]/70">&ldquo;답장 늦게 해라&rdquo; 식</td>
                        <td className="py-5 px-6 text-[#EDE6DA]/70">얄팍한 애교</td>
                        <td className="py-5 px-6 font-bold text-[#FAF7F2] bg-[#8B263E]/30 border-l border-r border-[#D4B2A7]/40">
                          진화심리학 + 최면 역학 + 무너지지 않는 자립 프레임
                        </td>
                      </tr>

                      {/* 행 3: 도구 */}
                      <tr className="hover:bg-white/[0.01] transition-colors">
                        <td className="py-5 px-6 font-bold text-white">도구</td>
                        <td className="py-5 px-6 text-[#EDE6DA]/70">없음</td>
                        <td className="py-5 px-6 text-[#EDE6DA]/70">어색한 연기</td>
                        <td className="py-5 px-6 font-bold text-[#FAF7F2] bg-[#8B263E]/30 border-l border-r border-[#D4B2A7]/40">
                          복붙 카톡 프로토콜 5종 + 30일 실천 워크북
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Reveal>
            </section>

            <ChampagneThreadDivider />

            {/* ═══════════════════════════════════════════════════════════════
                신규 Section 7. FAQ — 자주 묻는 질문
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-28 text-left max-w-4xl mx-auto">
              <Reveal>
                <div className="text-center space-y-4 mb-14">
                  <span className="text-[#D4B2A7] font-elegant tracking-[0.2em] text-xs uppercase">
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
                      q: "1. 외모/내성적 성격 적용 여부",
                      questionTitle: "외모에 자신이 없거나 내성적인 성격이어도 적용할 수 있나요?",
                      a: "네, 당연히 가능합니다. 연애비급은 얄팍한 외모나 애교 기술을 가르치는 책이 아닙니다. 진화심리학적 사냥꾼 코드와 비소유 신호, 말의 결을 통해 어떤 성격이든 나만의 단단하고 우아한 여왕의 아우라를 세우도록 돕는 관계 구조서입니다."
                    },
                    {
                      q: "2. 억지 밀당과의 차이점",
                      questionTitle: "시중의 억지 밀당이나 인터넷 팁과 무엇이 다른가요?",
                      a: "단순히 \"답장을 늦게 하라\"는 식의 유치한 수싸움이 아닙니다. 상대의 뇌섬엽과 도파민을 자극하는 신경회로 설계, 자이가르닉 효과, 간헐적 보상 공식을 체계화하여 억지로 연기하지 않아도 자연스럽게 주도권이 넘어오는 절대적 포지션 역학입니다."
                    },
                    {
                      q: "3. 짝사랑/식은 텐션 소생 여부",
                      questionTitle: "짝사랑 중이거나 이미 텐션이 식은 관계에서도 효과가 있나요?",
                      a: "네, 가능합니다. 전략 시크릿북에 수록된 5대 복붙 카톡 프로토콜(부담 제로 인셉션 톡, 반사구 등)과 30일 워크북의 래포 구축 플랜을 통해 어장관리나 식어버린 관계의 프레임을 단칼에 뒤집고 새로운 호기심을 유발할 수 있습니다."
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
                        className="gungjung-glass rounded-2xl border border-[#D4B2A7]/20 overflow-hidden transition-all duration-300"
                        style={{
                          background: isOpen ? 'rgba(139, 38, 62, 0.25)' : 'rgba(255, 255, 255, 0.01)'
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
                            className={`w-5 h-5 text-[#D4B2A7] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''
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

            <ChampagneThreadDivider />

            {/* ═══════════════════════════════════════════════════════════════
                7. Digital Product Notice Section (기존 구매 전 안내 보존)
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-28">
              <Reveal>
                <div className="gungjung-glass p-8 md:p-12 border-white/5 text-left max-w-6xl mx-auto break-keep">
                  <h2 className="text-2xl font-elegant font-bold mb-10 text-white border-l-4 border-[#D4B2A7] pl-6">
                    구매 전 안내
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
                기존 최종 CTA 보존 (가로형 와이드 16:9 대형 배너, 1440px)
               ═══════════════════════════════════════════════════════════════ */}
            <section className="relative aspect-[16/9] md:aspect-video overflow-hidden rounded-[40px] mb-20 group border border-[#C5A059]/40 shadow-2xl">
              {/* l6.webp 배경 */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={productData.ctaImage}
                  alt="연애비급 마지막 안내 배경"
                  fill
                  className="object-cover transition-transform duration-[10000ms] group-hover:scale-110"
                />
                {/* 텍스트 가독성을 위한 로즈브라운 반투명 오버레이 필터 */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0514] via-[#4A232B]/75 to-black/80 mix-blend-multiply" />
                <div className="absolute inset-0 bg-[#0a0514]/30" />
              </div>

              {/* 중앙 정보 및 CTA 버튼 */}
              <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 md:px-10 text-center max-w-5xl mx-auto space-y-6 md:space-y-8 break-keep">
                <Reveal>
                  <h2 className="text-2xl md:text-4xl font-elegant font-bold text-white leading-tight">
                    이제 사랑 앞에서 작아지지 마세요
                  </h2>
                  <p className="text-sm md:text-base text-[#EDE6DA]/85 leading-relaxed font-light max-w-xl mx-auto">
                    사랑은 더 많이 애쓴 사람에게 주어지는 보상이 아니라, 자기 자리를 잃지 않는 사람에게 오래 머무는 에너지입니다.<br />
                    불안하게 확인하고 맞춰주는 연애에서 벗어나 나의 기준과 매력을 회복해 보세요.
                  </p>

                  <div className="pt-4">
                    <CTAButton text="연애비급 구매하기" />
                  </div>
                </Reveal>
              </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════
                신규 교체/추가: 최종 결제 마감 CTA 및 손실 회피 섹션 (기존 연애비급 하단 박스 디자인 적용)
               ═══════════════════════════════════════════════════════════════ */}
            <section className="relative overflow-hidden rounded-3xl md:rounded-[40px] mb-20 p-8 md:p-16 border-2 border-[#C5A059] shadow-[0_0_50px_rgba(186,141,126,0.6)] text-center max-w-5xl mx-auto">
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
                    <span className="inline-block text-[#E6BE8A] text-xs font-elegant font-bold tracking-[0.2em] uppercase bg-[#8B263E]/80 border border-[#D4B2A7]/40 px-4 py-1.5 rounded-full">
                      CRITICAL CHOICE
                    </span>
                    <h2 className="text-2xl md:text-4xl font-elegant font-bold text-white leading-snug">
                      또다시 수개월의 눈물과<br />
                      <span className="text-[#E6BE8A]">바닥난 자존감</span>을 치르시겠습니까?
                    </h2>
                    <p className="text-[#EDE6DA]/85 text-sm md:text-base font-light leading-relaxed">
                      남자의 변덕과 차가운 답장에 하루를 통째로 낭비하던 악순환.<br />
                      자리를 바꾸지 않으면 다음 사람을 만나도 같은 자리에서 상처받습니다.<br />
                      <strong className="text-[#FAF7F2] font-semibold">단 한 번 치킨 한 마리 값으로, 평생 관계의 주도권을 쥐십시오.</strong>
                    </p>
                  </div>

                  {/* 패키지 가격 카드 (기존 연애비급 하단 다크 글래스 박스 규격) */}
                  <div className="p-6 md:p-10 rounded-2xl bg-black/60 border border-[#C5A059]/40 shadow-2xl relative backdrop-blur-sm">
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#8B263E] text-[#E6BE8A] border border-[#D4B2A7]/50 text-xs font-elegant font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow-[0_0_15px_rgba(212,178,167,0.25)] whitespace-nowrap">
                      런칭 기념 76% 한정 특가
                    </div>

                    <h3 className="text-lg md:text-xl font-elegant font-bold text-white mt-2">
                      백도화 연애비급 4 in 1 올인원 패키지
                    </h3>
                    <p className="text-xs md:text-sm text-[#EDE6DA]/60 mt-1 font-light">
                      완전판 바이블 + 전략 시크릿북 + 실전 워크북 + 카톡 템플릿 5종
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-3 my-6">
                      <span className="text-[#EDE6DA]/40 line-through text-base md:text-lg">
                        정가 79,000원
                      </span>
                      <span className="text-3xl md:text-4xl font-elegant font-bold text-[#E6BE8A]">
                        19,000원
                      </span>
                      <span className="text-xs font-bold text-white bg-[#8B263E] border border-[#D4B2A7]/50 px-2.5 py-1 rounded-full">
                        76% OFF
                      </span>
                    </div>

                    {/* 구매 버튼 (기존 연애비급 샴페인 골드/로즈골드 버튼 스타일) */}
                    <button
                      onClick={handlePurchase}
                      className="w-full py-4 md:py-5 px-6 rounded-xl font-elegant font-bold text-base md:text-xl text-[#FAF7F2] shadow-[0_0_40px_rgba(230,190,138,0.3)] hover:shadow-[0_0_60px_rgba(230,190,138,0.5)] transition-all duration-300 hover:scale-[1.02] active:scale-95 inline-flex items-center justify-center gap-2 cursor-pointer"
                      style={{
                        background: 'linear-gradient(135deg, #BA8D7E 0%, #8C5E50 100%)',
                        border: '2px solid #C5A059'
                      }}
                    >
                      <Sparkles className="w-5 h-5 text-[#E6BE8A] shrink-0" />
                      <span>사랑이 머무는 자리로 지금 이동하기</span>
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

        {/* 인포그래픽 확대 모달 (라이트박스) */}
        {isInfographicZoomed && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 bg-black/90 backdrop-blur-md transition-all"
            onClick={() => setIsInfographicZoomed(false)}
          >
            <div
              className="relative max-w-5xl w-full max-h-[95vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* 닫기 버튼 */}
              <button
                type="button"
                onClick={() => setIsInfographicZoomed(false)}
                className="absolute -top-11 right-0 md:-top-12 md:right-0 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-900 border border-white/20 text-white hover:text-[#E6BE8A] hover:border-[#E6BE8A] transition-colors text-xs"
                aria-label="닫기"
              >
                <X className="w-4 h-4" />
                <span>닫기</span>
              </button>

              {/* 확대된 이미지 (원본 비율 유지, 잘림 없음, 100% 밝기) */}
              <div className="relative w-full overflow-auto max-h-[85vh] rounded-2xl border border-[#D4B2A7]/40 shadow-2xl bg-black">
                <Image
                  src="/images/love-secret/solution-system.png"
                  alt="연애비급 솔루션 시스템 인포그래픽 확대"
                  width={1920}
                  height={1080}
                  className="w-full h-auto object-contain block"
                />
              </div>

              <p className="text-xs text-[#EDE6DA]/70 mt-3 text-center">
                화면 바깥을 누르거나 닫기 버튼을 누르면 닫힙니다.
              </p>
            </div>
          </div>
        )}

        {/* 3종 올인원 세트 목업 확대 모달 (라이트박스) */}
        {isPackageMockupZoomed && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 bg-black/90 backdrop-blur-md transition-all"
            onClick={() => setIsPackageMockupZoomed(false)}
          >
            <div
              className="relative max-w-5xl w-full max-h-[95vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* 닫기 버튼 */}
              <button
                type="button"
                onClick={() => setIsPackageMockupZoomed(false)}
                className="absolute -top-11 right-0 md:-top-12 md:right-0 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-900 border border-white/20 text-white hover:text-[#E6BE8A] hover:border-[#E6BE8A] transition-colors text-xs"
                aria-label="닫기"
              >
                <X className="w-4 h-4" />
                <span>닫기</span>
              </button>

              {/* 확대된 이미지 (원본 비율 유지, 잘림 없음, 100% 밝기) */}
              <div className="relative w-full overflow-auto max-h-[85vh] rounded-2xl border border-[#D4B2A7]/40 shadow-2xl bg-black">
                <Image
                  src={PACKAGE_MOCKUP_IMAGE}
                  alt="연애비급 3종 올인원 세트 패키지 목업 확대"
                  width={1920}
                  height={1080}
                  className="w-full h-auto object-contain block"
                />
              </div>

              <p className="text-xs text-[#EDE6DA]/70 mt-3 text-center">
                화면 바깥을 누르거나 닫기 버튼을 누르면 닫힙니다.
              </p>
            </div>
          </div>
        )}

        <Footer />
      </GlobalBackground>
    </main>
  )
}
