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
import { reunionSecretAssets } from './assets'

// ═══════════════════════════════════════════════════════════════════════════
// 📦 상품 기본 정보 및 결제 연동 설정
// ═══════════════════════════════════════════════════════════════════════════
const productData = {
  productId: 'reunion-secret-method',
  slug: 'reunion-secret-method',
  title: '재회비방',
  titleHanja: '再會秘方',
  titleEn: 'Reunion Secret',
  type: 'digital_ebook',
  category: 'reports',
  path: '/reports/reunion-secret',
  checkoutUrl: '/checkout?productId=reunion-secret-method',
  price: 19000,
  regularPrice: 79000,
  discountRate: '76% OFF',

  topBannerImage: '/image/reunion-secret/r1.webp',
  heroImage: '/image/reunion-secret/r1.webp',
  overviewImage: '/image/reunion-secret/r2.webp',
  recommendedImage: '/image/reunion-secret/r3.webp',
  formulaImage: '/image/reunion-secret/r4.webp',
  premiumImage: '/image/reunion-secret/r5.webp',
  ctaImage: '/image/reunion-secret/r6.webp',
}

// 🖼️ 신규 교체형 이미지 슬롯 컴포넌트
// (샴페인 골드 #B59C88 / #B49A70 테두리와 깊은 버건디 배경의 고급 플레이스홀더 제공)
function HybridImageSlot({
  assetKey,
  className = '',
  imgClassName = '',
}: {
  assetKey: keyof typeof reunionSecretAssets
  className?: string
  imgClassName?: string
}) {
  const asset = reunionSecretAssets[assetKey]
  const [hasError, setHasError] = useState(false)
  const isPlaceholderPath = !asset.src || asset.src.includes('placeholder')

  return (
    <div className={`relative overflow-hidden rounded-2xl md:rounded-3xl border border-[#B49A70]/40 bg-gradient-to-br from-[#1C040B] via-[#100206] to-[#0A0205] shadow-xl flex items-center justify-center ${asset.aspectRatio} ${className}`}>
      {!hasError && !isPlaceholderPath ? (
        <img
          src={asset.src}
          alt={asset.alt}
          onError={() => setHasError(true)}
          style={{ objectFit: asset.objectFit }}
          className={`w-full h-full transition-transform duration-500 hover:scale-[1.02] ${imgClassName}`}
        />
      ) : (
        <div className="flex flex-col items-center justify-center p-6 text-center space-y-3 z-10 w-full h-full bg-[#180309]/80 backdrop-blur-sm border border-[#B49A70]/25">
          <div className="w-12 h-12 rounded-full bg-[#600018]/70 border border-[#B49A70]/50 flex items-center justify-center text-[#B59C88] shadow-sm">
            <ImageIcon className="w-6 h-6 opacity-90" />
          </div>
          <div>
            <span className="inline-block px-3 py-0.5 rounded-full text-[10px] tracking-wider uppercase font-bold text-[#CDB7A3] bg-[#600018]/50 border border-[#B49A70]/30 mb-2">
              {asset.placeholderLabel}
            </span>
            <p className="text-sm md:text-base font-elegant font-bold text-[#FAF7F2] break-keep">
              {asset.alt}
            </p>
          </div>
          <span className="text-[11px] text-[#B59C88]/80 font-mono bg-black/50 px-3 py-1 rounded border border-[#B49A70]/30">
            {asset.description}
          </span>
        </div>
      )}
    </div>
  )
}

export default function ReunionSecretPage() {
  useScrollAnimation()
  const router = useRouter()

  // 책 속 미리보기 모달 상태
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

  // 구매 버튼 클릭 핸들러 (기존 결제 흐름 동일 유지)
  const handlePurchase = (e: React.MouseEvent) => {
    e.preventDefault()
    router.push(productData.checkoutUrl)
  }

  // 장바구니 추가 핸들러 (기존 동일 유지)
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

  // 백도화 전통 붉은 실 장식 구분선 (샴페인 골드 포인트)
  const RedThreadDivider = () => (
    <div className="flex items-center justify-center my-20 md:my-28 opacity-70">
      <div className="h-[1px] w-16 md:w-32 bg-gradient-to-r from-transparent via-[#B49A70]/40 to-[#8C1D24]" />
      <div className="mx-4 flex items-center justify-center">
        <svg className="w-5 h-5 text-[#B49A70] animate-pulse" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C9.5 2 7.5 4 7.5 6.5C7.5 9 10 11 12 13C14 11 16.5 9 16.5 6.5C16.5 4 14.5 2 12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 13V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="12" cy="6.5" r="2" fill="currentColor" />
        </svg>
      </div>
      <div className="h-[1px] w-16 md:w-32 bg-gradient-to-l from-transparent via-[#B49A70]/40 to-[#8C1D24]" />
    </div>
  )

  return (
    <main className="detail-page relative min-h-screen bg-[#0a0514] text-[#EDE6DA] font-sans selection:bg-[#4A0E17] selection:text-[#FAF7F2] pb-24 md:pb-0">
      <GlobalBackground 
        src="/image/love-code-bg.png" 
        brightCenter={false}
        overlay={
          <div className="absolute inset-0 w-full h-full pointer-events-none">
            {/* 1. 좌측 은은한 딥 플럼 앰비언트 글로우 (자연스러운 입체감과 부드러운 시작) */}
            <div
              className="absolute inset-0"
              style={{
                background: `
                  radial-gradient(ellipse 70% 60% at 15% 25%, rgba(56, 31, 50, 0.40) 0%, rgba(56, 31, 50, 0.15) 60%, transparent 90%),
                  radial-gradient(ellipse 60% 70% at 10% 70%, rgba(42, 22, 38, 0.35) 0%, transparent 80%)
                `,
              }}
            />

            {/* 2. 좌->우 딥 플럼 버건디(#381F32) 그라데이션 (왼쪽은 차분한 딥 플럼, 오른쪽으로 갈수록 기존 퍼플이 온전히 드러남) */}
            <div
              className="absolute inset-0"
              style={{
                background: `
                  linear-gradient(
                    90deg,
                    rgba(56, 31, 50, 0.48) 0%,
                    rgba(56, 31, 50, 0.36) 25%,
                    rgba(56, 31, 50, 0.16) 55%,
                    rgba(56, 31, 50, 0.04) 75%,
                    rgba(56, 31, 50, 0) 100%
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
                  <span className="inline-block px-5 py-1.5 rounded-full text-[12pt] font-elegant font-semibold tracking-[0.25em] text-[#CDB7A3] uppercase"
                    style={{
                      background: 'rgba(74, 14, 23, 0.4)',
                      border: '1px solid rgba(180, 154, 112, 0.3)',
                    }}>
                    PREMIUM REUNION STRATEGY EBOOK
                  </span>
                </div>

                {/* 대제목 */}
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-elegant font-bold mb-10 text-white leading-[1.45]">
                  再會秘方 <span className="text-[#CDB7A3]">재회비방</span>
                </h1>

                {/* 1. 최상단: 가로형 풀 이미지 (16:9 비율, 1280px 매칭) */}
                <div className="w-full max-w-[1280px] mx-auto mb-16">
                  <div className="relative w-full aspect-video rounded-[28px] md:rounded-[36px] overflow-hidden border border-[#B49A70]/30 shadow-2xl">
                    <Image 
                      src={productData.heroImage} 
                      alt="再會秘方 재회비방"
                      fill
                      sizes="(max-width: 1300px) 100vw, 1280px"
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>

                {/* 2. 서브카피 & 설명 */}
                <div className="max-w-4xl lg:max-w-5xl mx-auto space-y-7 mb-20 px-6 text-center">
                  <p className="text-2xl md:text-[36px] font-elegant font-bold text-[#CDB7A3] leading-[1.4] break-keep md:whitespace-nowrap">
                    끊어진 인연 앞에서 무너진 나를 다시 세우는 재회 비방서
                  </p>

                  <div className="flex items-center justify-center py-1">
                    <div
                      className="h-[1.5px] w-56 sm:w-72 md:w-96 rounded-full"
                      style={{
                        background: 'linear-gradient(90deg, transparent 0%, rgba(180, 154, 112, 0.2) 15%, rgba(180, 154, 112, 0.85) 42%, rgba(212, 178, 167, 0.95) 50%, rgba(180, 154, 112, 0.85) 58%, rgba(180, 154, 112, 0.2) 85%, transparent 100%)',
                        boxShadow: '0 0 12px rgba(180, 154, 112, 0.45)'
                      }}
                    />
                  </div>

                  <div className="text-[16px] md:text-[18px] text-[#EDE6DA]/75 leading-[1.8] font-normal space-y-3.5 break-keep">
                    <p>
                      재회비방은 헤어진 상대에게 무작정 연락하는 방법을 알려주는 책이 아닙니다.
                    </p>
                    <p>
                      이별 후 무너진 감정, 흐트러진 프레임, 반복되는 집착의 패턴을 정리하고 다시 나의 중심을 회복하기 위한 실전 재회 전략서입니다.
                    </p>
                    <p className="font-semibold text-white">
                      재회는 감정만으로 이루어지지 않습니다. 상태가 바뀌어야 흐름이 바뀝니다.
                    </p>
                  </div>
                </div>

                {/* 3. Section 1: Hero Banner 3종 패키지 소개 상자 (단일 구매 영역) */}
                <div className="w-full max-w-[1280px] mx-auto mb-16 mt-8">
                  <div
                    className="w-full rounded-[32px] md:rounded-[40px] p-6 sm:p-8 md:p-12 border border-[#B49A70]/40 text-left relative overflow-hidden shadow-2xl"
                    style={{
                      background: 'radial-gradient(ellipse at 50% 0%, rgba(96, 0, 24, 0.45) 0%, rgba(45, 6, 16, 0.4) 50%, rgba(10, 5, 20, 0.95) 100%)',
                      boxShadow: '0 0 60px rgba(96, 0, 24, 0.35)'
                    }}
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
                      {/* 좌측: 통합 배지, 큰 제목, 설명, 가격, 구매/장바구니 버튼 */}
                      <div className="lg:col-span-7 space-y-5 md:space-y-6">
                        <div className="flex flex-wrap gap-2">
                          <span className="inline-flex items-center justify-center py-[5px] px-[12px] rounded-[6px] bg-[#600018] border border-[#B49A70]/50 text-[#FAF7F2] text-xs font-bold tracking-wider whitespace-nowrap">
                            재회비방 3종 올인원 패키지
                          </span>
                          <span className="inline-flex items-center justify-center py-[5px] px-[12px] rounded-[6px] bg-[#2A0510] border border-[#B49A70]/35 text-[#B59C88] text-xs font-bold whitespace-nowrap">
                            복사·붙여넣기 템플릿 33선
                          </span>
                        </div>

                        <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white leading-[1.4] break-keep">
                          &ldquo;간절함은 닿지 않는다.<br className="hidden sm:inline" />
                          <span className="text-[#B59C88]">닿는 것은 오직 네가 되찾은 &apos;상태&apos;뿐이다.</span>&rdquo;
                        </h2>

                        <p className="text-[17px] md:text-[18px] text-[#EDE6DA]/90 leading-[1.8] font-normal break-keep max-w-xl">
                          울며 매달릴수록 남자는 도망칩니다. 남자의 무의식 신경회로에 서늘한 후폭풍을 심는 유일한 비방(秘方). 상대의 뇌 속에 각인된 찌질한 잔상을 지우고 칼자루를 쥐는 30일간의 신경심리학적 공작.
                        </p>

                        {/* 가격 안내 */}
                        <div className="flex items-baseline gap-3 pt-1">
                          <span className="text-3xl md:text-4xl font-elegant font-bold text-[#CDB7A3] tracking-tight">
                            19,000원
                          </span>
                          <span className="text-sm md:text-base text-[#EDE6DA]/40 line-through">
                            정가 79,000원
                          </span>
                          <span className="inline-flex items-center justify-center py-[5px] px-[12px] rounded-[6px] bg-[#600018] border border-[#B49A70]/50 text-[#FAF7F2] text-xs md:text-sm font-bold whitespace-nowrap">
                            76% OFF
                          </span>
                        </div>

                        {/* 구매/장바구니 버튼 */}
                        <div className="flex flex-col sm:flex-row gap-3 pt-2 items-stretch sm:items-center">
                          <button
                            type="button"
                            onClick={handleAddToCart}
                            className="py-3 px-4 sm:px-5 rounded-xl font-elegant font-medium text-xs md:text-sm border border-[#B49A70]/40 text-[#B59C88] hover:bg-[#600018]/25 hover:border-[#B49A70]/70 transition-all duration-300 shrink-0 whitespace-nowrap text-center order-2 sm:order-1"
                          >
                            장바구니
                          </button>
                          <button
                            type="button"
                            onClick={handlePurchase}
                            className="py-3.5 px-6 rounded-xl font-elegant font-bold text-sm md:text-base hover:scale-[1.01] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 text-[#FAF7F2] shadow-[0_4px_20px_rgba(96,0,24,0.45)] hover:shadow-[0_0_20px_rgba(180,154,112,0.3)] hover:brightness-110 order-1 sm:order-2 flex-1 sm:flex-initial"
                            style={{
                              background: 'linear-gradient(135deg, #800020 0%, #4A0012 100%)',
                              border: '1px solid rgba(180, 154, 112, 0.65)',
                            }}
                          >
                            <span>재회비방 19,000원에 구매하기</span>
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

            <RedThreadDivider />

            {/* ═══════════════════════════════════════════════════════════════
                Section 2: Problem Diagnosis & Resonance (문제 진단 & 공감)
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-[64px] md:mb-[112px] text-left w-full max-w-[1280px] mx-auto">
              <Reveal>
                <div className="space-y-10">
                  <div className="text-center max-w-3xl mx-auto space-y-5">
                    <span className="text-[#CDB7A3] font-elegant text-[12pt] font-semibold tracking-[0.2em] uppercase block">
                      PAIN POINT & HOOK
                    </span>
                    <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white leading-[1.4] break-keep">
                      당신의 진심이 왜 상대에게는 <span className="text-[#CDB7A3]">&apos;공포&apos;와 &apos;질림&apos;</span>이 되었을까?
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
                        <p className="text-xs md:text-sm text-[#B59C88] font-medium tracking-wide">
                          새벽 2시, 구구절절 보낸 장문 톡 옆에 뜬 ‘차단’
                        </p>
                        <p className="text-[16px] md:text-[18px] text-[#FAF7F2] font-elegant font-bold tracking-wide break-keep">
                          세 개 이상 해당된다면 지금 즉시 멈추십시오
                        </p>
                      </div>
                    </div>

                    {/* 본문 텍스트 및 자가진단 체크리스트 */}
                    <div className="lg:col-span-7 space-y-6 break-keep">
                      <div
                        className="text-[16px] md:text-[18px] text-[#EDE6DA] leading-[1.8] font-normal p-6 sm:p-7 md:p-8 rounded-2xl border border-[#B49A70]/30 shadow-[0_8px_24px_rgba(0,0,0,0.3)] space-y-3.5 break-keep h-auto"
                        style={{ background: 'rgba(45, 6, 16, 0.75)' }}
                      >
                        <p>
                          맛이 변해 손님이 끊긴 라면집 주인이 떠나는 손님 바짓가랑이를 붙잡고 울면 손님은 더 빨리 도망칩니다.
                        </p>
                        <p>
                          남자는 이별 직후 &apos;해방감&apos;이라는 가짜 도파민에 취합니다. 당신이 매달릴수록 남자는 &apos;헤어지길 잘했다&apos;는 면죄부를 얻고 안도합니다.
                        </p>
                        <p>
                          그 면죄부를 즉시 빼앗고 지독한 <strong className="text-[#FAF7F2] font-semibold">&apos;결핍의 공황&apos;</strong>에 빠뜨려야 합니다.
                        </p>
                      </div>

                      <div className="space-y-3">
                        <h3 className="text-[20px] sm:text-[22px] md:text-[24px] font-elegant font-bold text-[#CDB7A3] leading-[1.4] flex items-center gap-2.5 break-keep">
                          <AlertTriangle className="w-6 h-6 text-[#B49A70] shrink-0" />
                          나의 재회 위험도 자가진단 체크리스트
                        </h3>

                        <div className="space-y-2.5">
                          {[
                            "상대의 카톡 프로필 사진 하나 바뀔 때마다 심장이 쿵 내려앉는다",
                            "장문의 진심을 보냈다가 차갑게 '읽씹' 혹은 '차단' 당했다",
                            "\"친구로 지내자\", \"더 좋은 사람 만나\"라는 말에 피가 마른다",
                            "술에 취해 전화하거나 SNS를 염탐하다 손이 떨린 적이 있다",
                            "\"내가 다 맞출게\"라며 스스로의 가치를 깎아내려 애원했다"
                          ].map((item, idx) => (
                            <div
                              key={idx}
                              className="p-4 rounded-xl border border-white/10 bg-white/[0.02] flex items-start gap-3.5 hover:border-[#B49A70]/40 transition-colors"
                            >
                              <div className="w-5 h-5 rounded border border-[#B49A70]/60 flex items-center justify-center shrink-0 mt-1 bg-[#600018] shadow-sm">
                                <Check className="w-3.5 h-3.5 text-[#FAF7F2]" />
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
                [추가 영역 1] 공감 연결 영역 — ‘진심을 탓하지 마세요 / 이제, 나의 자리를 돌아볼 때’
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-16 md:mb-24 text-left w-full max-w-[1280px] mx-auto">
              <Reveal>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  {/* 왼쪽: 01, 02 블록 */}
                  <div className="lg:col-span-7 order-1 flex flex-col justify-center">
                    <h3 className="text-center text-[22px] md:text-[28px] font-elegant font-bold text-[#CDB7A3] leading-[1.4] mb-6 break-keep">
                      붙잡으려 애쓰는 동안, 내 &lsquo;중심&rsquo;은 어디에 있었나요?
                    </h3>

                    <div
                      className="w-full text-left break-keep p-6 sm:p-8 md:p-10 rounded-2xl md:rounded-3xl gungjung-glass border border-[#B49A70]/30 shadow-2xl space-y-8 md:space-y-10 relative overflow-hidden"
                      style={{
                        background: 'linear-gradient(135deg, rgba(60, 0, 24, 0.45) 0%, rgba(15, 6, 20, 0.94) 100%)',
                        boxShadow: '0 12px 40px rgba(0, 0, 0, 0.4)'
                      }}
                    >
                      {/* 01 · 진심을 탓하지 마세요 */}
                      <div className="space-y-3.5">
                        <div className="flex items-center gap-2.5">
                          <span className="inline-flex items-center justify-center py-[5px] px-[12px] rounded-[6px] bg-[#600018] border border-[#B49A70]/50 text-[#FAF7F2] text-xs font-bold whitespace-nowrap">
                            01
                          </span>
                          <h3 className="text-xl md:text-2xl font-elegant font-bold text-[#FAF7F2] leading-[1.4]">
                            진심을 탓하지 마세요
                          </h3>
                        </div>
                        <div className="text-[17px] md:text-[18px] text-[#EDE6DA] leading-[1.8] font-normal space-y-2 break-keep">
                          <p>
                            단 하나라도 내 이야기 같았다면,<br />
                            <span className="text-[#B59C88] font-medium">당신의 사랑이 부족해서가 결코 아닙니다.</span>
                          </p>
                          <p className="text-[#FAF7F2]/90">
                            더 애원하고, 더 참으며 끝까지 잡고 싶었던 마음.<br />
                            그만큼 상대와의 인연을 간절히 지키고 싶었을 뿐입니다.
                          </p>
                        </div>
                      </div>

                      <div className="w-full h-[1px] bg-gradient-to-r from-[#B49A70]/30 via-[#B49A70]/10 to-transparent" />

                      {/* 02 · 이제, 나의 자리를 돌아볼 때 */}
                      <div className="space-y-3.5">
                        <div className="flex items-center gap-2.5">
                          <span className="inline-flex items-center justify-center py-[5px] px-[12px] rounded-[6px] bg-[#600018] border border-[#B49A70]/50 text-[#FAF7F2] text-xs font-bold whitespace-nowrap">
                            02
                          </span>
                          <h3 className="text-xl md:text-2xl font-elegant font-bold text-[#FAF7F2] leading-[1.4]">
                            이제, <span className="text-[#B59C88]">나의 상태를 회복할 때</span>
                          </h3>
                        </div>
                        <div className="text-[17px] md:text-[18px] text-[#EDE6DA] leading-[1.8] font-normal space-y-3 break-keep">
                          <p>
                            상대의 차가운 반응에 하루 종일 매달리는 동안,<br />
                            내 마음과 일상은 완전히 무너져 내리지 않았나요?
                          </p>
                          <div className="p-4 sm:p-5 rounded-xl border border-[#B49A70]/25 bg-[#2A0510]/60 text-[#FAF7F2] font-normal leading-[1.75]">
                            《재회비방》에서 말하는 ‘상태’는<br className="hidden sm:inline" />
                            상대방에게 휘둘리지 않고 <span className="text-[#B59C88] font-semibold">내 가치와 에너지를 스스로 온전히 통제하는 중심</span>입니다.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 오른쪽: 이미지 */}
                  <div className="lg:col-span-5 w-full order-2 flex flex-col justify-center">
                    <div className="group relative w-full aspect-[3/4] rounded-2xl md:rounded-3xl overflow-hidden border border-[#B49A70]/30 shadow-[0_12px_40px_rgba(0,0,0,0.6)] bg-black/40">
                      <Image
                        src={productData.overviewImage}
                        alt="재회비방 상태 회복 비주얼"
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

            <RedThreadDivider />

            {/* ═══════════════════════════════════════════════════════════════
                [추가 영역 2] ‘왜, 이 책인가?’ 이미지·설명 영역
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-28 w-full max-w-[1280px] mx-auto space-y-[48px] md:space-y-[80px]">
              <Reveal>
                <div
                  className="relative hanji-card-hover backdrop-blur-md p-6 sm:p-8 md:p-14 lg:p-16 rounded-3xl md:rounded-[40px] border border-[#B49A70]/60 shadow-[0_16px_45px_rgba(0,0,0,0.65)] cursor-default text-center overflow-hidden"
                  style={{
                    background: 'linear-gradient(to right, rgba(45, 6, 16, 0.85) 0%, rgba(26, 4, 10, 0.85) 40%, rgba(18, 2, 6, 0.85) 70%, rgba(10, 5, 20, 0.85) 100%)',
                    boxShadow: '0 16px 45px rgba(0, 0, 0, 0.65), inset 0 0 0 1px rgba(180, 154, 112, 0.22)'
                  }}
                >
                  <div className="relative z-10 text-center mb-6">
                    <span className="inline-flex items-center justify-center py-[5px] md:py-[6px] px-[14px] md:px-[16px] rounded-[6px] bg-[#600018] border border-[#B49A70]/50 text-[#FAF7F2] text-[14px] md:text-[16px] font-bold tracking-wide whitespace-nowrap">
                      왜, 재회비방인가?
                    </span>
                  </div>
                  <h3 className="relative z-10 text-2xl md:text-[36px] font-elegant font-bold text-[#FAF7F2] leading-[1.4] break-keep mb-8 md:mb-10">
                    &ldquo;진심을 다해 매달렸는데 왜 더 멀어졌을까요?<br />
                    이별 후에도 <span className="text-[#CDB7A3]">&lsquo;전략과 심리&rsquo;</span>가 필요했던 이유&rdquo;
                  </h3>

                  <div className="relative z-10 max-w-[800px] w-full mx-auto text-left text-[17px] md:text-[18px] text-[#EDE6DA] leading-[1.8] font-normal space-y-5 md:space-y-6 break-keep">
                    <p>
                      어릴 적 우리는 진심이면 다 통한다고 배웠습니다.<br />
                      <span className="text-[#B59C88] font-semibold">
                        &ldquo;얼마나 사랑하는지 보여주면 상대도 결국 돌아올 것이다.&rdquo;
                      </span><br />
                      하지만 현실의 이별에서 구구절절한 매달림은 감동이 아니라 상대에게 피로감과 안도감만을 남깁니다.
                    </p>
                    <p>
                      떠난 남자를 돌아오게 만드는 것은 눈물이 아니라 <strong className="text-[#B59C88] font-semibold">&lsquo;통제력의 상실과 결핍&rsquo;</strong>입니다. 내가 미련의 주파수를 끊고 침묵할 때, 비로소 상대의 무의식 속에 당신이라는 존재가 지워지지 않는 후폭풍으로 각인됩니다.
                    </p>
                    <div className="pt-5 border-t border-[#B49A70]/20 text-[#EDE6DA] space-y-4">
                      <p>
                        《재회비방》은 얄팍한 카톡 스킬이 아닙니다. 이별 후 남자의 뇌에서 일어나는 심리적 기제와 자이가르닉 효과, 시간차 상실감을 유도하는 30일간의 정밀한 행동 매뉴얼입니다.
                      </p>
                      <p>
                        <strong className="text-[#B59C88] font-semibold">불안하게 매달리던 &apos;을&apos;의 자리에서, 상대가 스스로 찾아와 용서를 구하게 만드는 칼자루의 자리로.</strong>
                      </p>
                    </div>

                    <div className="pt-6 md:pt-7 mt-6 md:mt-7 border-t border-[#B49A70]/25 text-center sm:text-left">
                      <p className="font-elegant font-bold text-base md:text-lg lg:text-xl text-[#B59C88] tracking-wide break-keep leading-relaxed">
                        감정으로 망친 관계, 이제 냉철한 전략으로 바로잡으십시오.
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* BEFORE·AFTER 비교 이미지 자리 (r4.webp 활용) */}
              <Reveal>
                <div className="relative w-full overflow-hidden rounded-3xl md:rounded-[40px] border border-[#B49A70]/30 shadow-2xl bg-black/40">
                  <Image
                    src={productData.formulaImage}
                    alt="재회비방 Before & After 구조 변화"
                    width={1672}
                    height={941}
                    sizes="(max-width: 1280px) 100vw, 1280px"
                    className="w-full h-auto object-contain block"
                    priority
                  />
                </div>
              </Reveal>
            </section>

            <RedThreadDivider />

            {/* ═══════════════════════════════════════════════════════════════
                Before & After 1:1 매칭 비교 (기존 재회비방 내용 보존)
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-28 w-full max-w-[1280px] mx-auto">
              <Reveal>
                <div
                  className="gungjung-glass py-12 px-4 md:px-10 rounded-3xl md:rounded-[40px] border border-[#B49A70]/35"
                  style={{
                    background: 'linear-gradient(135deg, rgba(96, 0, 24, 0.3) 0%, rgba(20, 2, 7, 0.92) 100%)',
                    boxShadow: '0 12px 40px rgba(96, 0, 24, 0.25)'
                  }}
                >
                  <div className="max-w-3xl mx-auto px-4 text-center mb-10 space-y-3 break-keep">
                    <span className="text-[#CDB7A3] font-elegant text-xs font-bold tracking-[0.25em] uppercase block">
                      TRANSFORMATION
                    </span>
                    <h3 className="text-xl md:text-[24px] font-elegant font-bold text-[#FAF7F2] leading-[1.4] break-keep">
                      &ldquo;매달릴수록 차가워지던 그 사람,<br />
                      <span className="text-[#CDB7A3]">당신의 에너지가 바뀌면 후폭풍이 시작됩니다.</span>&rdquo;
                    </h3>
                    <p className="text-[17px] md:text-[18px] text-[#EDE6DA]/85 font-normal leading-[1.8] break-keep">
                      구차한 붙잡음은 차단을 부릅니다. 미련의 주파수를 끊는 순간 남자의 뇌에 상실감이 각인됩니다.
                    </p>
                  </div>

                  <div className="max-w-4xl mx-auto space-y-4 text-left break-keep">
                    {[
                      {
                        beforeTitle: "새벽마다 프로필 염탐하며 장문 톡을 보낸다",
                        beforeSub: "상대에게 안도감과 질림을 주며 차단 확률만 높임",
                        afterTitle: "단정한 단절로 상대의 뇌에 통제 불능 공포를 심는다",
                        afterSub: "나의 침묵이 길어질수록 그가 내 프로필을 염탐하기 시작합니다."
                      },
                      {
                        beforeTitle: "“내가 다 잘못했어, 다시 생각해 줘” 애원한다",
                        beforeSub: "자신의 가치를 바닥으로 떨어뜨려 경멸을 부르는 태도",
                        afterTitle: "우아한 쿨엔딩 템플릿으로 죄책감과 아쉬움을 남긴다",
                        afterSub: "“정말 이 여자를 이렇게 놓쳐도 될까?”라는 의구심을 점화합니다."
                      },
                      {
                        beforeTitle: "기약 없는 시간을 피폐하게 울며 버틴다",
                        beforeSub: "결핍 에너지가 온몸에 배어 재회 확률을 갉아먹는 상태",
                        afterTitle: "골든타임별 공백기 공식과 에너지 정화 루틴을 가동한다",
                        afterSub: "흔들림 없는 본래 매력을 복원해 압도적인 분위기를 형성합니다."
                      },
                      {
                        beforeTitle: "술 취해 새벽에 온 전화 한 통에 바로 흔들려 응한다",
                        beforeSub: "잠자리 상대나 감정 쓰레기통으로 전락하는 최악의 수",
                        afterTitle: "찌름성 연락을 완벽한 진심과 사과로 전환시킨다",
                        afterSub: "가벼운 떠보기를 정식 재회 고백으로 유도하는 프레임을 구사합니다."
                      }
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="grid grid-cols-1 md:grid-cols-2 gap-3 p-4 rounded-2xl bg-black/45 border border-[#B49A70]/25 hover:border-[#B49A70]/50 transition-colors"
                      >
                        <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#1C040B]/70 border border-[#600018]/50">
                          <span className="text-[#EDE6DA]/70 font-serif font-bold text-[11px] px-2.5 py-1 bg-[#3A0612]/70 border border-[#B49A70]/20 rounded shrink-0">
                            BEFORE
                          </span>
                          <div>
                            <p className="text-[#EDE6DA]/85 text-[15px] md:text-[16px] font-medium leading-snug">{item.beforeTitle}</p>
                            <p className="text-[#EDE6DA]/50 text-xs md:text-sm mt-1 font-light">{item.beforeSub}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#600018]/35 border border-[#B49A70]/40 shadow-[0_0_20px_rgba(230,190,138,0.08)]">
                          <span className="text-[#B59C88] font-serif font-bold text-[11px] px-2.5 py-1 bg-[#600018] border border-[#B49A70]/50 rounded shrink-0">
                            AFTER
                          </span>
                          <div>
                            <p className="text-[#FAF7F2] text-[15px] md:text-[16px] font-semibold leading-snug">{item.afterTitle}</p>
                            <p className="text-[#B59C88]/90 text-xs md:text-sm mt-1 font-light">{item.afterSub}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </section>

            <RedThreadDivider />

            {/* ═══════════════════════════════════════════════════════════════
                [추가 영역 3] 저자 소개 (백도화 저자 경력, 한지 질감 카드, 자격 뱃지, 저자의 편지, 낙관)
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-28 w-full max-w-[1280px] mx-auto">
              <Reveal>
                <div
                  className="relative hanji-card-hover backdrop-blur-md p-6 sm:p-8 md:p-14 lg:p-16 rounded-3xl md:rounded-[40px] border border-[#B49A70]/60 shadow-[0_16px_45px_rgba(0,0,0,0.65)] cursor-default overflow-hidden"
                  style={{
                    background: 'linear-gradient(to right, rgba(45, 6, 16, 0.85) 0%, rgba(26, 4, 10, 0.85) 40%, rgba(18, 2, 6, 0.85) 70%, rgba(10, 5, 20, 0.85) 100%)',
                    boxShadow: '0 16px 45px rgba(0, 0, 0, 0.65), inset 0 0 0 1px rgba(180, 154, 112, 0.22)'
                  }}
                >
                  {/* 이름 & 타이틀 */}
                  <div className="relative z-10 text-center mb-8 md:mb-10 space-y-2.5 break-keep">
                    <span className="text-[#CDB7A3] font-elegant text-[12pt] font-semibold tracking-[0.2em] uppercase block">
                      AUTHOR & MASTER
                    </span>
                    <h3 className="text-2xl md:text-[36px] font-elegant font-bold text-[#FAF7F2] tracking-wide">
                      백도화 (白桃花)
                    </h3>
                    <p className="text-[18px] text-[#B59C88]/90 font-normal leading-[1.8] break-keep">
                      마음의 구조를 읽고, 관계의 자리를 회복시키는 심리 멘토
                    </p>

                    {/* 핵심 공인 자격 뱃지 */}
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
                          className="inline-flex items-center justify-center py-[5px] px-[12px] rounded-[6px] bg-[#600018] border border-[#B49A70]/50 text-[#FAF7F2] text-xs md:text-sm font-bold tracking-tight whitespace-nowrap"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* 저자의 편지 본문 */}
                  <div className="relative z-10 max-w-[800px] mx-auto text-left text-[17px] md:text-[18px] text-[#EDE6DA] leading-[1.8] font-normal space-y-5 md:space-y-6 break-keep border-t border-[#B49A70]/20 pt-8 md:pt-10">
                    <div className="text-[#B59C88]/50 text-3xl font-serif leading-none select-none -mb-2">“</div>

                    <p className="text-[#FAF7F2] font-semibold text-[18px] md:text-[19px]">
                      재회비방의 저자 백도화입니다.
                    </p>
                    <p>
                      저 또한 헤어진 인연 앞에서 가슴을 쥐어뜯으며 눈물로 밤을 지새웠던 적이 있습니다. 답장 없는 휴대폰을 보며 미칠 것 같은 불안에 시달렸고, 붙잡으면 붙잡을수록 얼음처럼 차가워지던 상대의 눈빛에 절망했습니다.
                    </p>
                    <p>
                      그 뼈아픈 상처 끝에 <span className="text-[#B59C88] font-semibold">사람의 마음과 뇌가 이별 후 어떻게 작동하는지 신경심리학과 최면, NLP 역학을 깊이 파고들기 시작했습니다.</span> 그리고 깨달은 원리를 적용했을 때, 떠나갔던 상대가 먼저 안달 나 연락해 오는 극적인 반전을 경험했습니다.
                    </p>
                    <p>
                      재회는 결코 무작정 비는 감정싸움이 아닙니다. 상대의 뇌 속에 남아있는 지루함과 거부감을 지우고, 견딜 수 없는 호기심과 상실감을 점화하는 정교한 심리 설계입니다.
                    </p>
                    <p className="text-[#B59C88] font-semibold pt-1">
                      더 이상 구차하게 매달리지 마십시오.<br />
                      당신의 존엄한 가치를 되찾고, 상대가 스스로 찾아오게 만드십시오.
                    </p>

                    <div className="pt-7 md:pt-8 flex items-center justify-end gap-2.5 md:gap-3">
                      <span className="text-[15px] md:text-[17px] text-[#EDE6DA] font-elegant font-medium tracking-wide">
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

            <RedThreadDivider />

            {/* ═══════════════════════════════════════════════════════════════
                [추가 영역 4] 책의 탄생 소개 및 핵심 특징 영역
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-28 w-full max-w-[1280px] mx-auto">
              <Reveal>
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-stretch">
                  {/* 왼쪽 책 이미지 */}
                  <div className="relative w-full aspect-[3/4] overflow-hidden rounded-[32px] sm:rounded-[40px] border border-[#B49A70]/30 shadow-2xl bg-black/40">
                    <Image
                      src={productData.overviewImage}
                      alt="수많은 눈물과 치열한 연구 끝에 탄생한 재회비방"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                      priority
                    />
                  </div>

                  {/* 오른쪽 핵심 가치 및 6개 엠블럼 박스 */}
                  <div className="h-full flex flex-col justify-between text-left break-keep space-y-6 lg:space-y-0">
                    <div>
                      <p className="text-[20px] sm:text-[22px] md:text-[25px] font-elegant font-light text-[#EDE6DA]/85 leading-[1.4] mb-2 sm:mb-2.5 break-keep">
                        수많은 눈물과 연구 끝에,
                      </p>
                      <h2 className="text-[24px] sm:text-[30px] md:text-[34px] lg:text-[38px] xl:text-[40px] font-elegant font-bold text-[#FAF7F2] leading-[1.38] break-keep">
                        마침내 탄생한<br />
                        단 하나의 비방(秘方)<br />
                        <span className="text-[32px] sm:text-[38px] md:text-[44px] lg:text-[48px] xl:text-[52px] font-extrabold mt-2 text-[#CDB7A3] inline-block">
                          재회비방
                        </span>
                      </h2>
                    </div>

                    <div className="space-y-4 text-[16px] md:text-[17px] lg:text-[18px] text-[#EDE6DA] leading-[1.8] font-normal break-keep lg:py-2">
                      <p className="text-[#EDE6DA]/90">
                        더 이상 상대의 차가운 답장에 피눈물 흘리지 마십시오.
                      </p>
                      <p className="text-[#FAF7F2] font-semibold text-[17px] md:text-[19px]">
                        붙잡는 법이 아니라, 다시 선택받을 수 있는 상태로 돌아오는 법.
                      </p>
                      <p className="text-[#EDE6DA]/90">
                        <strong className="text-[#B59C88] font-semibold">《재회비방》</strong>은 끊어진 인연 앞에서 무너진 당신의 손에{' '}
                        <span className="text-[#FAF7F2] font-semibold">&lsquo;칼자루를 쥐는 주도권&rsquo;</span>과{' '}
                        <span className="text-[#FAF7F2] font-semibold">&lsquo;상대의 뇌를 흔드는 후폭풍&rsquo;</span>을 쥐여드리기 위해 탄생한 절대 지침서입니다.
                      </p>
                    </div>

                    {/* 6개 엠블럼 박스 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {[
                        "이별 원인 정밀 진단",
                        "공백기 절대 골든타임",
                        "상대 무의식 후폭풍 점화",
                        "카톡·SNS 미세신호 해독",
                        "즉답 복붙 템플릿 33선",
                        "조건부 재회 절대 프레임"
                      ].map((item, idx) => (
                        <div
                          key={idx}
                          className="p-3.5 sm:p-4 rounded-xl border border-[#B49A70]/35 flex items-center gap-3 backdrop-blur-md transition-all duration-300 hover:border-[#B49A70]/70 hover:scale-[1.01]"
                          style={{
                            background: 'rgba(45, 6, 16, 0.82)',
                            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.25)'
                          }}
                        >
                          <div className="w-6 h-6 rounded-lg bg-[#600018] flex items-center justify-center shrink-0 border border-[#B49A70]/50 text-[#B59C88] text-[13px] font-bold">
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

            <RedThreadDivider />

            {/* ═══════════════════════════════════════════════════════════════
                Section 3: Recommended For (이런 분께 추천합니다)
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-28 w-full max-w-[1280px] mx-auto">
              <Reveal>
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                  <div className="space-y-8 text-left break-keep">
                    <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white tracking-wide leading-[1.4] break-keep">
                      이런 분께 <span className="text-[#CDB7A3]">추천합니다</span>
                    </h2>

                    <RecommendedForCards 
                      textClassName="text-[16px] md:text-[18px]"
                      items={[
                        "이별 후 상대에게 연락하고 싶지만 어떤 말을 해야 할지 몰라 불안한 분",
                        "상대가 차단했거나 읽씹, 안읽씹을 반복해 어떻게 해야 할지 막막한 분",
                        "지금 연락해야 하는지, 더 기다려야 하는지 판단이 어려운 분",
                        "권태기, 반복 다툼, 집착, 신뢰 상실, 환승 의심 등 이별 원인을 제대로 진단하고 싶은 분",
                        "재회를 원하지만 예전처럼 매달리는 내가 되고 싶지는 않은 분",
                        "상대를 되찾기 전에 먼저 무너진 나의 중심을 되찾고 싶은 분"
                      ]} 
                    />
                  </div>

                  <div className="relative w-full aspect-[3/4] overflow-hidden rounded-[40px] border border-white/10 shadow-2xl">
                    <Image 
                      src={productData.recommendedImage} 
                      alt="Recommended" 
                      fill 
                      className="object-cover" 
                    />
                  </div>
                </div>
              </Reveal>
            </section>

            <RedThreadDivider />

            {/* ═══════════════════════════════════════════════════════════════
                Section 4: Solution Mechanism (솔루션 인과관계 통합)
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-28 text-left w-full max-w-[1280px] mx-auto">
              <Reveal>
                <div className="py-4">
                  <div className="text-center mb-12 space-y-4 break-keep">
                    <span className="text-[#CDB7A3] font-elegant text-xs font-bold tracking-[0.25em] uppercase block">
                      THE REUNION MECHANISM
                    </span>
                    <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-[#FAF7F2] leading-[1.4] break-keep">
                      이별의 상처를 매달림으로 풀지 마십시오.<br />
                      <span className="text-[#CDB7A3]">내 에너지를 회수하고, 상대의 무의식에 후폭풍을 심습니다.</span>
                    </h2>
                    <p className="text-[17px] md:text-[18px] text-[#EDE6DA]/85 max-w-2xl mx-auto font-normal leading-[1.8] break-keep">
                      떠난 남자를 돌아오게 만드는 것은 눈물이 아니라 <strong className="text-[#FAF7F2] font-semibold">통제력의 상실</strong>입니다.<br />
                      《재회비방》은 <strong className="text-[#FAF7F2] font-semibold">결핍 고리 끊기(에너지 회수)</strong>를 선행한 후, <strong className="text-[#B59C88] font-semibold">남자의 뇌에 미련을 점화하는 기술(후폭풍 설계)</strong>을 실행합니다.
                    </p>
                  </div>

                  <div className="space-y-10">
                    {/* STEP 1 */}
                    <div
                      className="gungjung-glass p-6 md:p-10 rounded-3xl border border-[#B49A70]/30 relative overflow-hidden"
                      style={{
                        background: 'linear-gradient(135deg, rgba(45, 6, 16, 0.55) 0%, rgba(10, 2, 5, 0.9) 100%)',
                        boxShadow: '0 8px 32px rgba(96, 0, 24, 0.2)'
                      }}
                    >
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="px-3.5 py-1 rounded-full bg-[#4A0E17] text-[#FAF7F2] font-serif font-bold text-xs tracking-wider border border-[#B49A70]/40">
                          STEP 1
                        </span>
                        <h3 className="text-xl md:text-[24px] font-elegant font-bold text-[#FAF7F2] leading-[1.4]">
                          결핍 고리 차단 (에너지 회수 5단계)
                        </h3>
                      </div>
                      <p className="text-[15px] md:text-[16px] text-[#EDE6DA]/85 mb-8 leading-[1.7] font-light break-keep">
                        상대에게 쏠려 있던 감정의 잔류 에너지를 완전히 거두어들이는 기초 정화 단계입니다. 내가 미련에서 자유로워져야 비로소 상대의 무의식이 결핍을 느끼기 시작합니다.
                      </p>

                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {[
                          { code: "01. Disconnect", title: "접촉 전면 차단", desc: "모든 감정적 누수와 반응 중단" },
                          { code: "02. Cool-Ending", title: "단정한 종결", desc: "비난 없는 품격 있는 마침표" },
                          { code: "03. Unconscious", title: "무의식 정화", desc: "불안과 집착의 뿌리 제거" },
                          { code: "04. Aura Reset", title: "아우라 리셋", desc: "결핍된 을의 파동 완전 소멸" },
                          { code: "05. Golden Time", title: "공백기 절대 법칙", desc: "이별 유형별 침묵 기간 엄수" },
                          { code: "06. Re-Centering", title: "중심성 탈환", desc: "내 삶의 주인 자리 복원" }
                        ].map((item, idx) => (
                          <div
                            key={idx}
                            className="p-4 rounded-2xl bg-black/45 border border-[#B49A70]/20 hover:border-[#B49A70]/50 transition-all break-keep"
                          >
                            <span className="text-[#B59C88] text-xs font-mono font-bold tracking-wider">{item.code}</span>
                            <p className="text-[#FAF7F2] text-[15px] md:text-[16px] font-elegant font-bold mt-1.5">{item.title}</p>
                            <p className="text-[#EDE6DA]/70 text-[13px] md:text-[14px] mt-1 font-light leading-relaxed">{item.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* 연결 화살표 */}
                    <div className="flex justify-center -my-4 relative z-10">
                      <div className="w-11 h-11 rounded-full bg-[#600018]/80 border border-[#B49A70]/50 flex items-center justify-center text-[#B59C88] shadow-[0_0_20px_rgba(230,190,138,0.25)] font-bold">
                        ↓
                      </div>
                    </div>

                    {/* STEP 2 */}
                    <div
                      className="gungjung-glass p-6 md:p-10 rounded-3xl border border-[#B49A70]/45 relative overflow-hidden"
                      style={{
                        background: 'linear-gradient(135deg, rgba(96, 0, 24, 0.35) 0%, rgba(15, 2, 6, 0.92) 100%)',
                        boxShadow: '0 12px 40px rgba(96, 0, 24, 0.3)'
                      }}
                    >
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="px-3.5 py-1 rounded-full bg-[#600018] text-[#B59C88] font-serif font-bold text-xs tracking-wider border border-[#B49A70]/40">
                          STEP 2
                        </span>
                        <h3 className="text-xl md:text-[24px] font-elegant font-bold text-[#FAF7F2] leading-[1.4]">
                          후폭풍 점화 기술 (4대 실전 비방)
                        </h3>
                      </div>
                      <p className="text-[15px] md:text-[16px] text-[#EDE6DA]/85 mb-8 leading-[1.7] font-light break-keep">
                        내 에너지가 정렬되면 상대는 ‘자유’가 아니라 ‘공허와 상실’을 맞닥뜨립니다. 남자의 뇌에 기억 왜곡과 미련을 증폭시키는 4대 트리거입니다.
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                          {
                            num: "비방 01",
                            title: "자이가르닉 효과 & 미완성 기억",
                            desc: "매달리지 않고 깔끔하게 끊어버려 상대의 뇌 속에 관계를 '끝나지 않은 찝찝한 숙제'로 각인시킵니다."
                          },
                          {
                            num: "비방 02",
                            title: "시간차 상실감 유도",
                            desc: "해방감이 끝나는 3~6주 차, 상대의 감정이 후회로 반전되는 변곡점을 정확히 노려 흔적 없는 호기심을 유발합니다."
                          },
                          {
                            num: "비방 03",
                            title: "무자극 재접촉 (Ping) 전략",
                            desc: "부담감 0%, 미련 0%의 무해한 질문 하나로 상대가 먼저 말을 걸고 장문으로 반응하게 만드는 텍스트 공식."
                          },
                          {
                            num: "비방 04",
                            title: "재회 포지션 재설정",
                            desc: "다시 사귀어 달라고 애원하는 입장이 아니라, 상대가 용기를 내어 정식으로 용서를 구하게 만드는 절대 프레임."
                          }
                        ].map((card, idx) => (
                          <div
                            key={idx}
                            className="p-5 rounded-2xl bg-black/50 border border-[#B49A70]/25 hover:border-[#B49A70] transition-all group break-keep"
                          >
                            <div className="flex items-center justify-between mb-2">
                              <span className="font-serif text-xs font-bold bg-[#600018] text-[#B59C88] px-2.5 py-0.5 rounded border border-[#B49A70]/40">
                                {card.num}
                              </span>
                              <Sparkles className="w-4 h-4 text-[#B49A70]/50 group-hover:text-[#B49A70] transition-colors" />
                            </div>
                            <h4 className="text-[#FAF7F2] font-elegant font-bold text-lg md:text-[20px] group-hover:text-[#B59C88] transition-colors">
                              {card.title}
                            </h4>
                            <p className="text-[#EDE6DA]/80 text-[15px] md:text-[16px] mt-2 leading-[1.6] font-light">
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

            <RedThreadDivider />

            {/* ═══════════════════════════════════════════════════════════════
                [추가 영역 5] 3종 역할 요약 카드 (Step 1 · 원리, Step 2 · 전략, Step 3 · 실천)
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-14 text-left w-full max-w-[1280px] mx-auto">
              <Reveal>
                <div className="text-center mb-10 md:mb-12 max-w-3xl mx-auto break-keep">
                  <span className="text-[#CDB7A3] font-elegant text-[12pt] font-semibold tracking-[0.2em] uppercase block">
                    PACKAGE COMPOSITION
                  </span>
                  <h3 className="text-2xl md:text-[36px] font-elegant font-bold text-white mt-2 leading-[1.4] break-keep">
                    재회비방 3종 올인원 세트<br />
                    <span className="text-[#CDB7A3]">끊어진 인연을 되돌리는 3단계 완성형 패키지</span>
                  </h3>
                  <p className="text-[#EDE6DA]/85 text-[18px] mt-3 leading-[1.8] font-normal break-keep">
                    본편으로 원리를 꿰뚫고, 행동 매뉴얼로 공백기를 설계하며, 시크릿 메시지로 후폭풍을 완성합니다.
                  </p>
                </div>

                {/* 3단계 핵심 역할 카드 3개 */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 text-left items-stretch">
                  {/* Book 1 */}
                  <div
                    className="relative p-5 sm:p-6 md:p-7 rounded-[12px] border border-[#B49A70]/30 flex flex-col justify-between overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.4)] transition-transform hover:-translate-y-1 duration-200"
                    style={{ background: 'rgba(45, 6, 16, 0.85)' }}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <span className="inline-flex items-center justify-center py-[6px] px-[14px] rounded-[8px] bg-[#600018] border border-[#B49A70]/50 text-[#FAF7F2] text-[13px] md:text-[14px] font-serif font-bold whitespace-nowrap shadow-sm">
                          Step 1 · 원리
                        </span>
                        <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 text-[#B59C88]">
                          <BookOpen className="w-6 h-6" />
                        </div>
                      </div>

                      <h4 className="text-[18px] md:text-[20px] font-bold text-[#FAF7F2] font-elegant mt-3 md:mt-3.5 leading-[1.4] break-keep">
                        《재회비방 완전판》
                      </h4>
                      <div className="w-8 h-[1px] bg-[#B59C88]/30 my-2.5 md:my-3" />
                      <p className="text-[16px] text-[#EDE6DA]/85 leading-[1.7] font-normal break-keep">
                        이별 원인 진단부터 선천코드 오행 분석, 상대 무의식을 뒤흔드는 7대 절대 심리 비방 바이블
                      </p>
                    </div>
                  </div>

                  {/* Book 2 */}
                  <div
                    className="relative p-5 sm:p-6 md:p-7 rounded-[12px] border border-[#B49A70]/30 flex flex-col justify-between overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.4)] transition-transform hover:-translate-y-1 duration-200"
                    style={{ background: 'rgba(45, 6, 16, 0.85)' }}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <span className="inline-flex items-center justify-center py-[6px] px-[14px] rounded-[8px] bg-[#600018] border border-[#B49A70]/50 text-[#FAF7F2] text-[13px] md:text-[14px] font-serif font-bold whitespace-nowrap shadow-sm">
                          Step 2 · 전략
                        </span>
                        <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 text-[#B59C88]">
                          <Smartphone className="w-6 h-6" />
                        </div>
                      </div>

                      <h4 className="text-[18px] md:text-[20px] font-bold text-[#FAF7F2] font-elegant mt-3 md:mt-3.5 leading-[1.4] break-keep">
                        《재회 역전의 법칙》
                      </h4>
                      <div className="w-8 h-[1px] bg-[#B59C88]/30 my-2.5 md:my-3" />
                      <p className="text-[16px] text-[#EDE6DA]/85 leading-[1.7] font-normal break-keep">
                        4주 카톡·SNS 연출 플랜, 10분 SOS 프로토콜, 공백기 일일 점검표 등 30일 실전 행동 매뉴얼
                      </p>
                    </div>
                  </div>

                  {/* Book 3 */}
                  <div
                    className="relative p-5 sm:p-6 md:p-7 rounded-[12px] border border-[#B49A70]/30 flex flex-col justify-between overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.4)] transition-transform hover:-translate-y-1 duration-200"
                    style={{ background: 'rgba(45, 6, 16, 0.85)' }}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <span className="inline-flex items-center justify-center py-[6px] px-[14px] rounded-[8px] bg-[#600018] border border-[#B49A70]/50 text-[#FAF7F2] text-[13px] md:text-[14px] font-serif font-bold whitespace-nowrap shadow-sm">
                          Step 3 · 실천
                        </span>
                        <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 text-[#B59C88]">
                          <Sparkles className="w-6 h-6" />
                        </div>
                      </div>

                      <h4 className="text-[18px] md:text-[20px] font-bold text-[#FAF7F2] font-elegant mt-3 md:mt-3.5 leading-[1.4] break-keep">
                        《무의식 시크릿 메시지 33선》
                      </h4>
                      <div className="w-8 h-[1px] bg-[#B59C88]/30 my-2.5 md:my-3" />
                      <p className="text-[16px] text-[#EDE6DA]/85 leading-[1.7] font-normal break-keep">
                        복사·붙여넣기 전용 33가지 실전 멘트와 3턴 만에 만남 잡는 대화 공식
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </section>

            {/* ═══════════════════════════════════════════════════════════════
                Product Showcase — 3종 올인원 세트 상세 해부
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-28 w-full max-w-[1280px] mx-auto">
              <Reveal>
                <div className="space-y-10">
                  {/* Book 1. [본편] 《재회비방(再會秘方) 완전판》 */}
                  <div className="p-6 md:p-10 lg:p-12 rounded-3xl bg-gradient-to-r from-[#1E040D] via-[#140207] to-[#0A0205] border border-[#B49A70]/40 shadow-2xl grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                    <div className="lg:col-span-5 flex justify-center">
                      <div className="w-full max-w-[340px] lg:max-w-none">
                        <HybridImageSlot
                          assetKey="book1"
                          className="aspect-[3/4] shadow-2xl"
                        />
                      </div>
                    </div>
                    <div className="lg:col-span-7 space-y-5 text-left break-keep">
                      <div className="inline-block px-3.5 py-1 rounded-full bg-[#600018] text-[#B59C88] text-xs font-bold border border-[#B49A70]/40 tracking-wider">
                        Book 1. [본편]
                      </div>
                      <h3 className="text-xl md:text-[24px] font-elegant font-bold text-[#FAF7F2] leading-[1.4] break-keep">
                        《재회비방(再會秘方) 완전판》
                      </h3>
                      <p className="text-[17px] md:text-[18px] text-[#B59C88] font-semibold leading-[1.6] break-keep">
                        끊어진 인연을 다시 잇는 무의식의 붉은 실
                      </p>

                      <div className="space-y-3.5 pt-2">
                        <div className="p-4 rounded-xl bg-black/40 border border-[#B49A70]/25 space-y-1">
                          <h4 className="text-[15px] md:text-[16px] font-bold text-[#FAF7F2] flex items-start gap-2">
                            <span className="text-[#B59C88] shrink-0 font-mono">①</span>
                            <span>내 이별의 진짜 원인 진단</span>
                          </h4>
                          <p className="text-[15px] md:text-[16px] text-[#EDE6DA]/80 pl-5 leading-[1.6] font-light">
                            가치 하락형(매력 저하) vs 신뢰감 하락형(피로/싸움) 구분 및 8가지 케이스별 완전 처방
                          </p>
                        </div>

                        <div className="p-4 rounded-xl bg-black/40 border border-[#B49A70]/25 space-y-1">
                          <h4 className="text-[15px] md:text-[16px] font-bold text-[#FAF7F2] flex items-start gap-2">
                            <span className="text-[#B59C88] shrink-0 font-mono">②</span>
                            <span>연애 기간·상대 성향별 공백기 황금 공식</span>
                          </h4>
                          <p className="text-[15px] md:text-[16px] text-[#EDE6DA]/80 pl-5 leading-[1.6] font-light">
                            3일 단기 트랙부터 6개월 장기 트랙까지 오차 없는 타이밍 계산법
                          </p>
                        </div>

                        <div className="p-4 rounded-xl bg-black/40 border border-[#B49A70]/25">
                          <h4 className="text-[15px] md:text-[16px] font-bold text-[#FAF7F2] flex items-start gap-2">
                            <span className="text-[#B59C88] shrink-0 font-mono">③</span>
                            <span>이별 패턴을 읽는 선천코드 5행(목·화·토·금·수) 분석법</span>
                          </h4>
                        </div>

                        <div className="p-4 rounded-xl bg-black/40 border border-[#B49A70]/25">
                          <h4 className="text-[15px] md:text-[16px] font-bold text-[#FAF7F2] flex items-start gap-2">
                            <span className="text-[#B59C88] shrink-0 font-mono">④</span>
                            <span>상대 무의식을 뒤흔드는 7대 절대 심리 비방</span>
                          </h4>
                        </div>

                        <div className="p-4 rounded-xl bg-gradient-to-r from-[#3B0A16]/50 to-[#1F050B]/50 border border-[#B49A70]/35 space-y-2">
                          <h4 className="text-[15px] md:text-[16px] font-bold text-[#FAF7F2] flex items-start gap-2">
                            <span className="text-[#B59C88] shrink-0 font-mono">⑤</span>
                            <span>조건부 재회의 법칙</span>
                          </h4>
                          <div className="p-3 rounded-lg bg-black/50 border border-[#B49A70]/30">
                            <p className="text-[15px] md:text-[16px] font-elegant font-bold text-[#B59C88]">
                              "너는 세일 상품이 아니다. 정가(正價)를 치르게 하라"
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Book 2. [실전 부록 1] 《재회 역전의 법칙: 30일 실전 행동 매뉴얼》 */}
                  <div className="p-6 md:p-10 lg:p-12 rounded-3xl bg-gradient-to-r from-[#1E040D] via-[#140207] to-[#0A0205] border border-[#B49A70]/40 shadow-2xl grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                    <div className="lg:col-span-5 flex justify-center order-last lg:order-first">
                      <div className="w-full max-w-[340px] lg:max-w-none">
                        <HybridImageSlot
                          assetKey="book2"
                          className="aspect-[3/4] shadow-2xl"
                        />
                      </div>
                    </div>
                    <div className="lg:col-span-7 space-y-5 text-left break-keep">
                      <div className="inline-block px-3.5 py-1 rounded-full bg-[#600018] text-[#B59C88] text-xs font-bold border border-[#B49A70]/40 tracking-wider">
                        Book 2. [실전 부록 1]
                      </div>
                      <h3 className="text-xl md:text-[24px] font-elegant font-bold text-[#FAF7F2] leading-[1.4] break-keep">
                        《재회 역전의 법칙: 30일 실전 행동 매뉴얼》
                      </h3>
                      <p className="text-[17px] md:text-[18px] text-[#B59C88] font-semibold leading-[1.6] break-keep">
                        카톡·SNS 연출부터 30일 공백기 설계까지, 주도권을 되찾는 매뉴얼
                      </p>

                      <div className="space-y-3.5 pt-2">
                        <div className="p-4 rounded-xl bg-black/40 border border-[#B49A70]/25">
                          <h4 className="text-[15px] md:text-[16px] font-bold text-[#FAF7F2] flex items-start gap-2">
                            <span className="text-[#B59C88] shrink-0 font-mono">①</span>
                            <span>
                              3초 진단 & 6대 상황별 즉시 행동 vs 절대 금지(<span className="text-[#B59C88] font-semibold">DO & DON'T</span>) 매뉴얼
                            </span>
                          </h4>
                        </div>

                        <div className="p-4 rounded-xl bg-black/40 border border-[#B49A70]/25 space-y-1">
                          <h4 className="text-[15px] md:text-[16px] font-bold text-[#FAF7F2] flex items-start gap-2">
                            <span className="text-[#B59C88] shrink-0 font-mono">②</span>
                            <span>
                              시각적 텔레파시 (<span className="text-[#B59C88] font-semibold">4주</span> 카톡 프로필 & SNS 연출 플랜)
                            </span>
                          </h4>
                          <p className="text-[15px] md:text-[16px] text-[#EDE6DA]/80 pl-5 leading-[1.6] font-light">
                            1주차 전신샷부터 4주차 자극까지 주차별 완벽 설계
                          </p>
                        </div>

                        <div className="p-4 rounded-xl bg-black/40 border border-[#B49A70]/25 space-y-1">
                          <h4 className="text-[15px] md:text-[16px] font-bold text-[#FAF7F2] flex items-start gap-2">
                            <span className="text-[#B59C88] shrink-0 font-mono">③</span>
                            <span>SNS 미세신호 해독표</span>
                          </h4>
                          <p className="text-[15px] md:text-[16px] text-[#EDE6DA]/80 pl-5 leading-[1.6] font-light">
                            스토리 칼조회, 좋아요 후 즉시 취소, 멀티 프로필 지정 시 대처법
                          </p>
                        </div>

                        <div className="p-4 rounded-xl bg-black/40 border border-[#B49A70]/25">
                          <h4 className="text-[15px] md:text-[16px] font-bold text-[#FAF7F2] flex items-start gap-2">
                            <span className="text-[#B59C88] shrink-0 font-mono">④</span>
                            <span>
                              연락 충동이 올라올 때 '<span className="text-[#B59C88] font-semibold">10분 SOS 프로토콜</span>'
                            </span>
                          </h4>
                        </div>

                        <div className="p-4 rounded-xl bg-black/40 border border-[#B49A70]/25 space-y-2">
                          <h4 className="text-[15px] md:text-[16px] font-bold text-[#FAF7F2] flex items-start gap-2">
                            <span className="text-[#B59C88] shrink-0 font-mono">⑤</span>
                            <span>
                              출력/복사해서 바로 쓰는 <span className="text-[#B59C88] font-semibold">실전 기록지</span>
                            </span>
                          </h4>
                          <div className="flex flex-wrap gap-2 pl-5 pt-0.5">
                            <span className="px-2.5 py-1 rounded-md bg-[#2A0510] border border-[#B49A70]/35 text-[13px] md:text-[14px] text-[#FAF7F2]">
                              감정 격류 진정 기록지
                            </span>
                            <span className="px-2.5 py-1 rounded-md bg-[#2A0510] border border-[#B49A70]/35 text-[13px] md:text-[14px] text-[#FAF7F2]">
                              공백기 일일 점검표
                            </span>
                            <span className="px-2.5 py-1 rounded-md bg-[#2A0510] border border-[#B49A70]/35 text-[13px] md:text-[14px] text-[#FAF7F2]">
                              재회 가능성 12문항 자가진단표
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Book 3. [실전 부록 2] 《재회 후폭풍 치트키: 무의식 시크릿 메시지 33선》 */}
                  <div className="p-6 md:p-10 lg:p-12 rounded-3xl bg-gradient-to-r from-[#1E040D] via-[#140207] to-[#0A0205] border border-[#B49A70]/40 shadow-2xl grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                    <div className="lg:col-span-5 flex justify-center">
                      <div className="w-full max-w-[340px] lg:max-w-none">
                        <HybridImageSlot
                          assetKey="book3"
                          className="aspect-[3/4] shadow-2xl"
                        />
                      </div>
                    </div>
                    <div className="lg:col-span-7 space-y-5 text-left break-keep">
                      <div className="inline-block px-3.5 py-1 rounded-full bg-[#600018] text-[#B59C88] text-xs font-bold border border-[#B49A70]/40 tracking-wider">
                        Book 3. [실전 부록 2]
                      </div>
                      <h3 className="text-xl md:text-[24px] font-elegant font-bold text-[#FAF7F2] leading-[1.4] break-keep">
                        《재회 후폭풍 치트키: 무의식 시크릿 메시지 33선》
                      </h3>
                      <p className="text-[17px] md:text-[18px] text-[#B59C88] font-semibold leading-[1.6] break-keep">
                        남자의 무의식을 지배하는 33가지 침투술 & 첫 만남 연출법
                      </p>

                      <div className="space-y-3.5 pt-2">
                        <div className="p-4 md:p-5 rounded-xl bg-black/40 border border-[#B49A70]/25 space-y-3">
                          <h4 className="text-[15px] md:text-[16px] font-bold text-[#FAF7F2] flex items-start gap-2">
                            <span className="text-[#B59C88] shrink-0 font-mono">①</span>
                            <span>
                              복사·붙여넣기 전용 <span className="text-[#B59C88] font-semibold">33가지</span> 실전 스크립트
                            </span>
                          </h4>

                          <div className="space-y-2 pl-1 sm:pl-5 pt-1">
                            <div className="p-3 rounded-lg bg-[#1B050E] border border-[#B49A70]/20 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2.5">
                              <span className="text-xs font-bold text-[#B59C88] bg-[#600018]/70 px-2 py-0.5 rounded border border-[#B49A70]/30 shrink-0">
                                트랙 A
                              </span>
                              <span className="text-sm md:text-[15px] text-[#EDE6DA]/90 leading-relaxed font-light">
                                안읽씹·번호 차단 직전, 읽씹 3일 차, 잠수 이별·회피형 우회 멘트
                              </span>
                            </div>

                            <div className="p-3 rounded-lg bg-[#1B050E] border border-[#B49A70]/20 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2.5">
                              <span className="text-xs font-bold text-[#B59C88] bg-[#600018]/70 px-2 py-0.5 rounded border border-[#B49A70]/30 shrink-0">
                                트랙 B
                              </span>
                              <span className="text-sm md:text-[15px] text-[#EDE6DA]/90 leading-relaxed font-light">
                                권태기, 잦은 다툼, 거짓말/신뢰 훼손, 심하게 매달린 후 흑역사 리셋 멘트
                              </span>
                            </div>

                            <div className="p-3 rounded-lg bg-[#1B050E] border border-[#B49A70]/20 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2.5">
                              <span className="text-xs font-bold text-[#B59C88] bg-[#600018]/70 px-2 py-0.5 rounded border border-[#B49A70]/30 shrink-0">
                                트랙 C
                              </span>
                              <span className="text-sm md:text-[15px] text-[#EDE6DA]/90 leading-relaxed font-light">
                                새 이성(환승/리바운드) 균열 멘트, 친구 프레임 탈출, 늦은 밤 "자니?" 찔러보기 원천 격퇴 멘트
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="p-4 rounded-xl bg-black/40 border border-[#B49A70]/25 space-y-1">
                          <h4 className="text-[15px] md:text-[16px] font-bold text-[#FAF7F2] flex items-start gap-2">
                            <span className="text-[#B59C88] shrink-0 font-mono">②</span>
                            <span>메시지 발송 후 대화 핑퐁(Turn) 공식</span>
                          </h4>
                          <p className="text-[15px] md:text-[16px] text-[#EDE6DA]/80 pl-5 leading-[1.6] font-light">
                            단답형 유도, 까칠한 반응 무장해제, <span className="text-[#B59C88] font-semibold">3턴</span> 만에 만남 약속 잡기
                          </p>
                        </div>

                        <div className="p-4 rounded-xl bg-black/40 border border-[#B49A70]/25 space-y-1">
                          <h4 className="text-[15px] md:text-[16px] font-bold text-[#FAF7F2] flex items-start gap-2">
                            <span className="text-[#B59C88] shrink-0 font-mono">③</span>
                            <span>
                              재회의 <span className="text-[#B59C88] font-semibold">첫 30분</span> 기선제압 연출법
                            </span>
                          </h4>
                          <p className="text-[15px] md:text-[16px] text-[#EDE6DA]/80 pl-5 leading-[1.6] font-light">
                            시각·후각 앵커링 세팅, 자이가르닉 철수 타이밍, 쉿 테스트(떠보기) 반사구 훈련
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Special Bonus: 회향연부 모바일 부적 */}
                  <div className="p-6 md:p-10 lg:p-12 rounded-3xl bg-gradient-to-r from-[#2A0510] via-[#1A030A] to-[#0F0206] border-2 border-[#B49A70] shadow-[0_0_35px_rgba(230,190,138,0.25)] grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    <div className="lg:col-span-5 flex justify-center order-last lg:order-first">
                      <div className="w-full max-w-[340px] lg:max-w-none">
                        <HybridImageSlot
                          assetKey="amulet"
                          className="aspect-[3/4] shadow-2xl"
                        />
                      </div>
                    </div>
                    <div className="lg:col-span-7 space-y-4 text-left break-keep">
                      <div className="inline-block px-3.5 py-1 rounded-full bg-[#B59C88] text-[#20050E] text-xs font-bold shadow-md tracking-wider">
                        Special Bonus
                      </div>
                      <h3 className="text-xl md:text-[24px] font-elegant font-bold text-[#FAF7F2] flex items-center gap-2 leading-[1.4] break-keep">
                        <span>회향연부 모바일 부적</span>
                        <Sparkles className="w-6 h-6 text-[#B49A70]" />
                      </h3>
                      <p className="text-[17px] md:text-[18px] text-[#B59C88] font-semibold leading-[1.6] break-keep">
                        흩어진 인연의 궤도를 다시 잇는 시각적 에너지 결계. 스마트폰 배경화면용.
                      </p>
                      <p className="text-[15px] md:text-[16px] text-[#EDE6DA]/85 leading-[1.7] font-light break-keep">
                        매일 수십 번씩 보게 되는 스마트폰 잠금화면에 설정하여 내면의 흔들림을 잠재우고 상대의 기운을 끌어당기는 고해상도 디지털 부적입니다.
                      </p>
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
                  title: "재회비방 본편",
                  desc: "이별 원인 진단과 상대 심리의 작동 구조",
                  note: "본문 1쪽",
                  imageSrc: ""
                },
                {
                  order: "02",
                  title: "재회 역전의 법칙",
                  desc: "4주간의 프로필 연출과 공백기 행동 수칙",
                  note: "실전 예시 1쪽",
                  imageSrc: ""
                },
                {
                  order: "03",
                  title: "무의식 시크릿 메시지 33선",
                  desc: "상황별 즉시 복사해 전송하는 대화 스크립트",
                  note: "작성용 내지 1쪽",
                  imageSrc: ""
                }
              ];
              const hasImages = previewCards.some(card => Boolean(card.imageSrc));
              const showSection = hasImages || isAdminPreview;

              if (!showSection) return null;

              return (
                <div
                  className="mb-14 gungjung-glass p-6 sm:p-8 md:p-12 lg:p-14 rounded-3xl md:rounded-[40px] border border-[#B49A70]/30 text-center relative overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, rgba(74, 14, 23, 0.45) 0%, rgba(15, 6, 20, 0.94) 100%)',
                    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.4)'
                  }}
                >
                  <span className="text-[#CDB7A3] font-elegant text-xs font-semibold tracking-[0.2em] uppercase block mb-3">
                    BOOK PREVIEW
                  </span>
                  <h3 className="text-2xl md:text-[36px] font-elegant font-bold text-[#FAF7F2] tracking-wide break-keep mb-4">
                    책 속에서 먼저 만나보세요
                  </h3>
                  <p className="text-[17px] md:text-[18px] text-[#EDE6DA]/80 font-normal max-w-2xl mx-auto leading-[1.8] break-keep mb-8 md:mb-10">
                    상대의 심리를 꿰뚫는 본문부터 실전 메시지 예시와 워크북까지,<br className="hidden sm:inline" />
                    《재회비방》의 실제 내용을 미리 확인해 보세요.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto text-left">
                    {previewCards.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-5 md:p-6 rounded-2xl bg-black/40 border border-[#B49A70]/25 flex flex-col justify-between hover:border-[#B49A70]/60 transition-all group"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-[#B59C88] font-serif font-bold text-xs tracking-wider">
                              {item.order}
                            </span>
                            <span className="inline-flex items-center justify-center py-[4px] px-[10px] rounded-[6px] bg-[#600018] border border-[#B49A70]/50 text-[#FAF7F2] text-[11px] font-bold whitespace-nowrap">
                              {isAdminPreview && !item.imageSrc ? "관리자 확인용" : "미리보기"}
                            </span>
                          </div>

                          <h4 className="text-[#FAF7F2] font-elegant font-bold text-lg mb-2 group-hover:text-[#B59C88] transition-colors">
                            {item.title}
                          </h4>
                          <p className="text-xs md:text-sm text-[#EDE6DA]/70 leading-relaxed mb-5">
                            {item.desc}
                          </p>
                        </div>

                        <div>
                          {item.imageSrc ? (
                            <div
                              onClick={() => setPreviewModalItem({ title: item.title, imageSrc: item.imageSrc })}
                              className="cursor-pointer group/img relative rounded-xl overflow-hidden border border-[#B49A70]/30 bg-black/50"
                            >
                              <div className="relative w-full aspect-[3/4]">
                                <Image
                                  src={item.imageSrc}
                                  alt={item.title}
                                  fill
                                  className="object-contain transition-transform duration-300 group-hover/img:scale-105"
                                />
                              </div>
                              <div className="py-2.5 bg-black/70 text-center border-t border-[#B49A70]/20 flex items-center justify-center gap-1.5 text-xs text-[#B59C88] font-medium group-hover/img:text-white transition-colors">
                                <Eye className="w-3.5 h-3.5" />
                                <span>눌러서 크게 보기</span>
                              </div>
                            </div>
                          ) : (
                            <div className="py-12 px-4 rounded-xl border border-dashed border-[#B49A70]/40 bg-[#120818]/60 text-center">
                              <FileText className="w-8 h-8 text-[#B49A70]/50 mx-auto mb-2" />
                              <p className="text-xs font-medium text-[#B59C88]">
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
                      <p className="text-xs text-[#B59C88]/60">
                        ※ 관리자 편집 화면입니다. 실제 내지 이미지가 등록되면 공개 페이지에도 자동으로 활성화됩니다.
                      </p>
                    </div>
                  )}
                </div>
              );
            })()}

            {/* ═══════════════════════════════════════════════════════════════
                중간 패키지 구매 안내 상자 (연애비급 규격 일치: 좌측 겹친 내지/목업 + 우측 가격/버튼)
               ═══════════════════════════════════════════════════════════════ */}
            <div
              className="gungjung-glass rounded-3xl border border-[#B49A70]/40 relative overflow-hidden shadow-2xl mb-28"
              style={{
                background: 'radial-gradient(ellipse at 50% 0%, rgba(96, 0, 24, 0.35) 0%, rgba(10, 5, 20, 0.95) 100%)',
                boxShadow: '0 12px 40px rgba(96, 0, 24, 0.20)'
              }}
            >
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 items-stretch break-keep">
                {/* 왼쪽 목업 이미지 영역 */}
                <div className="lg:col-span-5 relative w-full min-h-[260px] sm:min-h-[320px] lg:min-h-full overflow-hidden flex items-center justify-center p-6 sm:p-8">
                  <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
                    <Image
                      src={productData.heroImage}
                      alt="재회비방 3종 올인원 세트"
                      fill
                      sizes="(max-width: 1024px) 100vw, 45vw"
                      className="object-cover object-center rounded-2xl"
                      priority
                    />
                  </div>
                </div>

                {/* 오른쪽: 구성 안내 → 구분선 → 가격 안내 → 버튼 */}
                <div className="lg:col-span-7 w-full flex flex-col justify-between space-y-5 sm:space-y-6 text-left p-6 sm:p-8 md:p-10 lg:py-10 lg:pr-10 lg:pl-12">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1.5 flex-1">
                      <span className="text-xs font-elegant font-semibold tracking-wider text-[#CDB7A3] uppercase block">
                        PACKAGE OVERVIEW
                      </span>
                      <h4 className="text-lg sm:text-xl md:text-[22px] font-elegant font-bold text-[#FAF7F2] leading-[1.4] break-keep">
                        PDF 3종 (본편 + 행동 매뉴얼 + 메시지 33선) + 모바일 부적
                      </h4>
                      <div className="text-sm md:text-base text-[#EDE6DA]/90 font-light space-y-0.5 leading-[1.6]">
                        <p>재회비방 4 in 1 마스터 패키지</p>
                        <p>회향연부 고해상도 디지털 부적 함께 제공</p>
                      </div>
                    </div>

                    <span className="inline-flex items-center justify-center py-[5px] px-[12px] rounded-[6px] bg-[#600018] border border-[#B49A70]/50 text-[#FAF7F2] text-xs font-bold whitespace-nowrap shrink-0 shadow-sm mt-0.5">
                      올인원 패키지
                    </span>
                  </div>

                  <div className="border-b border-white/10" />

                  <div className="space-y-1">
                    <span className="text-xs text-[#EDE6DA]/60">정가 79,000원</span>
                    <div className="text-2xl sm:text-3xl font-elegant font-bold text-[#CDB7A3] leading-none">
                      런칭 특가 19,000원 <span className="text-sm text-white/70 font-sans font-normal ml-1.5">(76% OFF)</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2 items-stretch sm:items-center w-full">
                    <button
                      type="button"
                      onClick={handleAddToCart}
                      className="py-3.5 px-5 sm:px-6 rounded-xl font-elegant font-bold text-sm md:text-base border border-[#B49A70]/60 text-[#B59C88] hover:bg-[#600018]/25 hover:border-[#B49A70]/70 transition-all duration-300 shrink-0 whitespace-nowrap text-center bg-transparent order-2 sm:order-1"
                    >
                      장바구니 담기
                    </button>
                    <button
                      type="button"
                      onClick={handlePurchase}
                      className="flex-1 py-3.5 px-6 rounded-xl font-elegant font-bold text-sm md:text-base hover:scale-[1.01] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 text-[#FAF7F2] shadow-[0_4px_20px_rgba(96,0,24,0.45)] hover:shadow-[0_0_20px_rgba(180,154,112,0.3)] hover:brightness-110 order-1 sm:order-2 cursor-pointer"
                      style={{
                        background: 'linear-gradient(135deg, #800020 0%, #4A0012 100%)',
                        border: '1px solid rgba(180, 154, 112, 0.65)',
                      }}
                    >
                      <span>재회비방 19,000원에 구매하기</span>
                      <ChevronRight className="w-4 h-4 text-[#FAF7F2] shrink-0" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <RedThreadDivider />

            {/* ═══════════════════════════════════════════════════════════════
                [이동 및 개편] ‘읽고 끝나는 책이 아니라, 점검하고 적용하는 실전 재회 노트’
                (연애비급 활용 가이드 형태: 왼쪽 이미지 + 하단 감성 문구 / 오른쪽 제목, 메시지, 1열 4행 카드(기존 이렇게 활용해보세요 4문항), 하단 이용 안내)
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-28 w-full max-w-[1280px] mx-auto">
              <Reveal>
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
                  {/* 왼쪽 이미지 + 하단 감성 문구 */}
                  <div className="flex flex-col lg:justify-between w-full h-full">
                    <div className="relative w-full aspect-[4/5] overflow-hidden rounded-[32px] md:rounded-[40px] border border-[#B49A70]/30 shadow-2xl bg-black/40 flex items-center justify-center">
                      <Image
                        src={productData.premiumImage}
                        alt="재회비방 실전 재회 노트 가이드"
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-contain"
                      />
                    </div>

                    <div className="mt-6 md:mt-7 w-full flex flex-col items-center text-center justify-center min-h-[48px]">
                      <div className="flex items-center justify-center gap-3 w-full">
                        <div className="h-[1px] w-8 sm:w-12 bg-gradient-to-r from-transparent to-[#B49A70]/60" />
                        <p className="font-elegant text-[15px] sm:text-[16px] text-[#B59C88] tracking-wide">
                          점검하고, 적용하고, 나의 것으로.
                        </p>
                        <div className="h-[1px] w-8 sm:w-12 bg-gradient-to-l from-transparent to-[#B49A70]/60" />
                      </div>
                      <p className="text-[12px] sm:text-[13px] text-[#FAF7F2]/75 mt-1.5 tracking-wider font-light">
                        끊어진 인연 앞에서 나를 다시 세우는 시간
                      </p>
                    </div>
                  </div>

                  {/* 오른쪽 콘텐츠 영역 */}
                  <div className="flex flex-col lg:justify-between w-full h-full text-left break-keep">
                    <div className="space-y-6 md:space-y-7">
                      <div>
                        <h2 className="font-elegant font-bold leading-[1.3] text-left">
                          <span className="block text-2xl md:text-[28px] text-[#CDB7A3]">
                            《재회비방》
                          </span>
                          <span className="block text-3xl md:text-[36px] lg:text-[40px] text-[#FAF7F2] mt-1.5 break-keep">
                            실전 200% 활용 가이드
                          </span>
                        </h2>
                      </div>

                      <div className="pt-1">
                        <p className="text-[20px] md:text-[24px] font-elegant font-bold text-[#FAF7F2] leading-[1.6] break-keep">
                          “읽고 끝나는 책이 아니라,<br className="hidden sm:inline" />
                          {' '}점검하고 적용하는 <span className="text-[#B59C88]">‘실전 재회 노트’</span>”
                        </p>
                      </div>

                      <div className="text-[16px] md:text-[18px] text-[#EDE6DA] leading-[1.8] font-normal break-keep">
                        <p>
                          재회비방은 단순한 연애 조언 모음이 아닙니다.
                        </p>
                        <p>
                          이별 원인 진단, 공백기 골든타임, 문자 스크립트, 돌발 상황 대처까지 내 상황에 바로 적용할 수 있는 실전 도구를 담았습니다.
                        </p>
                      </div>

                      {/* 1열 4행 슬림 미색 한지 카드 (기존 ‘이렇게 활용해보세요’ 4개 문항 통합) */}
                      <div className="flex flex-col gap-2 md:gap-2.5 pt-1">
                        {[
                          {
                            title: "1. 내 이별 원인을 진단하세요.",
                            desc: "권태기, 신뢰 상실, 집착, 현실 문제 등 원인에 따라 접근 방식과 메시지 방향이 완전히 달라집니다."
                          },
                          {
                            title: "2. 공백기와 연락 타이밍을 점검하세요.",
                            desc: "불안해서 보내는 연락과 전략적으로 준비된 연락은 관계에 전혀 다른 파급 효과를 가져옵니다."
                          },
                          {
                            title: "3. 감정이 올라올 때마다 체크리스트를 확인하세요.",
                            desc: "지금의 행동이 관계 회복에 도움이 되는 일인지, 단지 충동적 불안 해소인지 구분하세요."
                          },
                          {
                            title: "4. 재회 이후까지 함께 설계하세요.",
                            desc: "다시 만나는 과정만큼 중요한 것은 동일한 문제를 답습하지 않고 새로운 관계 기둥을 세우는 일입니다."
                          }
                        ].map((item, idx) => (
                          <div
                            key={idx}
                            style={{
                              backgroundColor: '#F7F1E5',
                              borderColor: 'rgba(206, 175, 153, 0.55)',
                              boxShadow: '0 3px 10px -2px rgba(35, 20, 30, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.95)',
                            }}
                            className="group relative p-[11px_18px] md:p-[12px_22px] rounded-[12px] md:rounded-[14px] border flex items-start gap-3 md:gap-4 transition-all duration-300 hover:border-[#B49A70] overflow-hidden"
                          >
                            <div className="shrink-0 mt-0.5 relative z-10">
                              <div
                                style={{ backgroundColor: '#800020' }}
                                className="w-6 h-6 md:w-[26px] md:h-[26px] rounded-full flex items-center justify-center p-1 border border-[#B49A70]/50 shadow-none"
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
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 lg:mt-auto pt-4 md:pt-5 border-t border-[#B49A70]/25 min-h-[48px] items-center">
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
                            style={{ backgroundColor: '#800020' }}
                            className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 border border-[#B49A70]/40 shadow-none"
                          >
                            <Check className="w-3 h-3 text-[#FAF7F2] stroke-[2.4]" />
                          </div>
                          <div className="flex flex-col text-left">
                            <span className="text-[13px] md:text-[14px] font-semibold text-[#EDE6DA] break-keep">
                              {info.title}
                            </span>
                            <span className="text-[12px] md:text-[13px] text-[#EDE6DA]/75 mt-0.5 leading-relaxed break-keep">
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

            <RedThreadDivider />

            {/* ═══════════════════════════════════════════════════════════════
                Section 5: Social Proof (실전 카톡 복원 사례)
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-28 w-full max-w-[1280px] mx-auto">
              <Reveal>
                <div className="text-center max-w-3xl mx-auto mb-14">
                  <span className="text-[#CDB7A3] font-elegant tracking-[0.25em] text-xs uppercase font-bold">
                    SOCIAL PROOF
                  </span>
                  <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-[#FAF7F2] mt-3 leading-[1.4] break-keep">
                    실전 카톡 복원 사례
                  </h2>
                </div>

                <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                  <div className="lg:col-span-5">
                    <HybridImageSlot
                      assetKey="review"
                      className="aspect-[4/5]"
                    />
                  </div>

                  <div className="lg:col-span-7 space-y-4 text-left break-keep">
                    {[
                      "차단당하고 울던 제가, 스크립트 19번 적용 후 정확히 3주 만에 상대에게 연락받았습니다.",
                      "새 여자 생겼다고 돌아섰던 남친, 4주 프사 플랜 적용했더니 후회한다고 빌더군요.",
                      "읽씹 당해서 미칠 것 같았는데, 10분 SOS로 진정하고 3턴 대화 공식으로 만남 잡았습니다."
                    ].map((quote, idx) => (
                      <div 
                        key={idx}
                        className="p-6 md:p-7 rounded-2xl bg-[#140308]/85 border border-[#B49A70]/30 shadow-lg hover:border-[#B49A70] transition-all"
                      >
                        <span className="text-xs font-mono text-[#B59C88] block mb-2 font-semibold">
                          CASE 0{idx + 1}
                        </span>
                        <p className="text-[17px] md:text-[18px] font-elegant font-bold text-[#FAF7F2] leading-[1.7]">
                          "{quote}"
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </section>

            <RedThreadDivider />

            {/* ═══════════════════════════════════════════════════════════════
                Section 6: Comparison Table (가치 비교표)
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-28 max-w-4xl mx-auto">
              <Reveal>
                <div className="text-center max-w-3xl mx-auto mb-14">
                  <span className="text-[#CDB7A3] font-elegant tracking-[0.25em] text-xs uppercase font-bold">
                    COMPARISON TABLE
                  </span>
                  <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-[#FAF7F2] mt-3 leading-[1.4] break-keep">
                    같은 고민 앞에서, 무엇을 선택하시겠습니까?
                  </h2>
                </div>

                <div className="overflow-x-auto rounded-3xl border border-[#B49A70]/40 shadow-2xl bg-[#0F0206]">
                  <table className="w-full text-left border-collapse min-w-[580px]">
                    <thead>
                      <tr className="border-b border-[#B49A70]/30 bg-[#1A040C]">
                        <th className="p-5 md:p-6 text-sm md:text-base font-elegant font-bold text-[#FAF7F2] w-1/4">
                          구분
                        </th>
                        <th className="p-5 md:p-6 text-sm md:text-base font-elegant font-bold text-[#EDE6DA]/60 w-1/3">
                          일반 타로·연애 상담
                        </th>
                        <th className="p-5 md:p-6 text-base md:text-lg font-elegant font-bold text-[#B59C88] bg-[#600018]/50 border-x border-[#B49A70]/40 w-5/12">
                          백도화 《재회비방 3종 세트》
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 text-sm md:text-base">
                      <tr className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-5 md:p-6 font-semibold text-[#FAF7F2] bg-white/[0.01]">
                          비용
                        </td>
                        <td className="p-5 md:p-6 text-[#EDE6DA]/70">
                          1회 15만 원 이상
                        </td>
                        <td className="p-5 md:p-6 font-bold text-[#FAF7F2] bg-[#600018]/30 border-x border-[#B49A70]/30">
                          <span className="text-lg md:text-xl text-[#B59C88]">단 19,000원 (영구 소장)</span>
                        </td>
                      </tr>

                      <tr className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-5 md:p-6 font-semibold text-[#FAF7F2] bg-white/[0.01]">
                          내용
                        </td>
                        <td className="p-5 md:p-6 text-[#EDE6DA]/70">
                          감정적 위로와 시간 끌기
                        </td>
                        <td className="p-5 md:p-6 font-bold text-[#FAF7F2] bg-[#600018]/30 border-x border-[#B49A70]/30">
                          <span className="text-[#B59C88]">뇌과학 기반 심리전 + 행동 매뉴얼</span>
                        </td>
                      </tr>

                      <tr className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-5 md:p-6 font-semibold text-[#FAF7F2] bg-white/[0.01]">
                          실행 도구
                        </td>
                        <td className="p-5 md:p-6 text-[#EDE6DA]/70">
                          없음
                        </td>
                        <td className="p-5 md:p-6 font-bold text-[#FAF7F2] bg-[#600018]/30 border-x border-[#B49A70]/30">
                          상황별 <span className="text-[#B59C88]">33선 스크립트 + 30일 워크시트 제공</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Reveal>
            </section>

            <RedThreadDivider />

            {/* ═══════════════════════════════════════════════════════════════
                [통합 위치 정리] FAQ — 가치 비교 다음, 구매 전 안내 앞으로 7문항 전체 통합
               ═══════════════════════════════════════════════════════════════ */}
            <section id="faq" className="mb-28 text-left max-w-4xl mx-auto">
              <Reveal>
                <div className="text-center space-y-4 mb-14">
                  <span className="text-[#CDB7A3] font-elegant text-[12pt] font-semibold tracking-[0.2em] uppercase block">
                    Frequently Asked Questions
                  </span>
                  <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white tracking-wide leading-[1.45]">
                    자주 묻는 <span className="text-[#CDB7A3]">질문</span>
                  </h2>
                  <p className="text-[17px] md:text-[18px] text-[#EDE6DA]/75 leading-[1.8] font-normal break-keep">
                    골든타임을 놓치기 전 가장 많이 묻는 핵심 질문입니다.
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      num: "Q1",
                      q: "이미 상대방에게 심하게 매달렸고 차단까지 당했는데도 가능한가요?",
                      a: "네, 얼마든지 가능합니다. 최악의 상황일수록 필요한 것은 말이 아니라 반응의 급격한 정지입니다. 상대가 예상하는 나의 매달림 패턴을 깨뜨리고 차단을 푸는 흑역사 리셋 멘트와 무의식 자극 프로세스를 그대로 따라 하시면 됩니다."
                    },
                    {
                      num: "Q2",
                      q: "카톡과 번호가 완전히 차단당했는데 효과가 있을까요?",
                      a: "차단은 상대의 마음에 여전히 강한 감정적 잔여가 남아있다는 가장 확실한 반증입니다. 카톡 차단 3가지 케이스 해독법과 4주 카톡 프로필 및 무자극 재접촉(Ping) 전략을 통해 닫힌 문을 단계적으로 우회하여 열 수 있습니다."
                    },
                    {
                      num: "Q3",
                      q: "이별한 지 몇 달이 지났거나 상대에게 환승/새 사람이 생겼다면요?",
                      a: "새로운 관계의 도파민은 3개월을 넘기기 힘듭니다. 《재회비방》의 '대체 불가 앵커링' 기법과 리바운드 균열 멘트는 상대의 새로운 인연이 흔들리는 타이밍에 당신이라는 강력한 기억을 뇌리에 강제 소환하도록 돕습니다."
                    },
                    {
                      num: "Q4",
                      q: "제공되는 실전 카톡 템플릿은 바로 복사해서 쓸 수 있나요?",
                      a: "네. 단어 하나, 문장 부호 하나까지 심리학적으로 검증된 [쿨엔딩 템플릿], [공백기 후 핑(Ping) 템플릿], [떠보기 대응 템플릿] 등 33가지 상황별 완성문이 그대로 수록되어 있어 즉시 복사하여 전송하실 수 있습니다."
                    },
                    {
                      num: "Q5",
                      q: "결제 즉시 열람할 수 있나요?",
                      a: "네. 재회는 1분 1초의 골든타임이 생명입니다. 결제 즉시 PDF 전자책 3종과 회향연부 모바일 부적 파일이 마이페이지에 자동 발급되어 오늘 밤 즉시 읽어보실 수 있습니다."
                    },
                    {
                      num: "Q6",
                      q: "종이책이 배송되는 상품인가요?",
                      a: "아닙니다. 본 상품은 택배로 실물이 배송되지 않는 100% 디지털 다운로드 상품(PDF 전자책 및 디지털 부적)입니다. 배송을 기다릴 필요 없이 구매 후 기기에서 바로 파일을 열람하여 학습하실 수 있습니다."
                    },
                    {
                      num: "Q7",
                      q: "특정 결과(재회)를 100% 보장하나요?",
                      a: "본 전자책은 심리학과 에너지 역학에 기반한 관계 회복 전략서이며, 특정 결과를 무조건 보장하지는 않습니다. 하지만 잘못된 대처로 관계의 문을 영영 닫아버리는 치명적 실수를 방지하고 재회 성공률을 극대화하도록 안내합니다."
                    }
                  ].map((faq, idx) => {
                    const isOpen = openFaq === idx
                    return (
                      <div
                        key={idx}
                        className="gungjung-glass rounded-2xl border border-[#B49A70]/20 overflow-hidden transition-all duration-300"
                        style={{
                          background: isOpen ? 'rgba(96, 0, 24, 0.25)' : 'rgba(255, 255, 255, 0.01)'
                        }}
                      >
                        <button
                          type="button"
                          onClick={() => toggleFaq(idx)}
                          aria-expanded={isOpen}
                          className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 text-white hover:text-[#B59C88] transition-colors focus:outline-none focus:ring-1 focus:ring-[#B49A70]/40"
                        >
                          <div className="flex items-center gap-3 md:gap-3.5">
                            <span className="text-xs font-bold text-[#B59C88] font-serif shrink-0">
                              {faq.num}
                            </span>
                            <span className="text-base md:text-lg font-elegant font-semibold leading-[1.5] text-white">
                              {faq.q}
                            </span>
                          </div>
                          <ChevronDown
                            className={`w-5 h-5 text-[#B59C88] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
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
              </Reveal>
            </section>

            <RedThreadDivider />

            {/* ═══════════════════════════════════════════════════════════════
                구매 전 안내 (기존 보존)
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-28 w-full max-w-[1280px] mx-auto">
              <Reveal>
                <div className="gungjung-glass p-8 md:p-12 border-white/5 text-left w-full max-w-[1280px] mx-auto break-keep">
                  <h2 className="text-2xl md:text-[36px] font-elegant font-bold mb-10 text-white border-l-4 border-[#B49A70] pl-6 leading-[1.4] break-keep">
                    구매 전 안내
                  </h2>
                  <ul className="space-y-4 text-[15px] md:text-[16px] text-[#EDE6DA]/75 font-light leading-[1.7]">
                    {[
                      "본 상품은 PDF 형태로 제공되는 디지털 전자책입니다.",
                      "결제 완료 후 안내된 이메일 또는 마이페이지를 통해 파일을 확인하실 수 있습니다.",
                      "모바일, 태블릿, PC 등 PDF 지원 디바이스에서 언제든 편하게 열람 가능합니다.",
                      "디지털 콘텐츠 특성상 메일 발송 또는 파일 다운로드 후에는 단순 변심에 의한 환불이 제한될 수 있습니다.",
                      "본 전자책은 특정 결과나 재회를 무조건 보장하는 상품이 아닙니다.",
                      "모든 관계에는 각자의 상황과 수많은 변수가 존재하며, 결과는 개인의 상태와 상황에 따라 달라질 수 있습니다.",
                      "상대방의 의사와 심리적 경계를 존중하는 건강한 범위 안에서 전략을 활용해 주세요.",
                      "자세한 사항은 웹사이트 하단의 이용약관 및 환불정책을 참고해 주세요."
                    ].map((text, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#B59C88] shrink-0"></span>
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
            <section className="relative aspect-[16/9] md:aspect-video overflow-hidden rounded-[32px] md:rounded-[40px] mb-20 group border border-[#B49A70]/40 shadow-2xl w-full max-w-[1280px] mx-auto bg-[#1C040B]">
              <div className="absolute inset-0 z-0">
                <Image 
                  src={productData.ctaImage} 
                  alt="지금 필요한 것은 한 번 더 매달리는 연락이 아닐 수 있습니다" 
                  fill 
                  className="object-cover transition-transform duration-[10000ms] group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0514] via-[#4A0E17]/70 to-black/80 mix-blend-multiply" />
                <div className="absolute inset-0 bg-[#0a0514]/40" />
              </div>

              <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 md:px-10 text-center max-w-5xl mx-auto space-y-6 md:space-y-8 break-keep">
                <Reveal>
                  <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white leading-[1.4] break-keep">
                    지금 필요한 것은<br/>
                    한 번 더 매달리는 연락이 아닐 수 있습니다
                  </h2>
                  <p className="text-[17px] md:text-[18px] text-[#EDE6DA]/85 leading-[1.8] font-normal max-w-xl mx-auto break-keep">
                    먼저 나의 상태를 바꾸고, 관계의 흐름을 다시 읽어야 합니다.<br/>
                    끊어진 인연 앞에서 무너지고 있다면, 이제 감정이 아니라 전략으로 다시 나를 세워보세요.
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
                      className="group inline-flex flex-col items-center py-2.5 -my-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B59C88]/60 rounded-sm cursor-pointer"
                      aria-label="상대의 무의식에 후폭풍 점화하기 (하단 구매 영역으로 이동)"
                    >
                      <div className="inline-flex items-center gap-2 text-[#B59C88] group-hover:text-[#FFF1E9] font-elegant font-medium text-[17px] sm:text-[18px] md:text-[21px] tracking-wide transition-colors duration-300">
                        <span>상대의 무의식에 후폭풍 점화하기</span>
                        <span className="inline-block transform group-hover:translate-x-1 transition-transform duration-300 ease-out text-[19px] sm:text-[20px] md:text-[22px]">
                          →
                        </span>
                      </div>
                      <span className="h-[1.5px] w-[45%] group-hover:w-full bg-[#B59C88]/60 group-hover:bg-[#FFF1E9]/80 transition-[width,background-color] duration-300 ease-out mt-1.5" />
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
                      잘못 보낸 카톡 한 줄로,<br />
                      <span className="text-[#B59C88]">마지막 재회의 문</span>마저 닫지 않도록
                    </h2>

                    <div className="space-y-5 md:space-y-6 text-center break-keep">
                      <p className="text-[#EDE6DA]/85 text-[16px] sm:text-[17px] md:text-[18px] font-normal leading-[1.7] break-keep">
                        감정에 휩쓸려 보내는 새벽 연락은 영원한 차단을 부를 뿐입니다.
                      </p>

                      <div className="py-1">
                        <p className="font-elegant font-semibold text-[19px] sm:text-[20px] md:text-[22px] text-[#FAF7F2] leading-[1.7] break-keep tracking-wide">
                          &ldquo;재회는 매달리는 자에게 오지 않고,<br />
                          <span className="text-[#B59C88]">자신의 상태를 당당하게 회복한 자</span>에게 찾아옵니다.&rdquo;
                        </p>
                      </div>

                      <p className="text-[#EDE6DA]/85 text-[16px] sm:text-[17px] md:text-[18px] font-normal leading-[1.8] break-keep">
                        망쳐버린 관계를 되살릴 수 있는 시간은 무한하지 않습니다.<br />
                        단 19,000원으로 상대가 스스로 후회하고 찾아오게 만드십시오.
                      </p>
                    </div>
                  </div>

                  {/* 안쪽 구매 카드 (연애비급 디자인 규격 일치) */}
                  <div
                    className="px-6 sm:px-10 md:px-12 py-10 md:py-12 rounded-2xl md:rounded-3xl border border-[#B49A70]/40 relative shadow-2xl text-center"
                    style={{
                      background: 'radial-gradient(ellipse at 50% 0%, rgba(96, 0, 24, 0.45) 0%, rgba(45, 6, 16, 0.35) 50%, rgba(10, 5, 20, 0.95) 100%)'
                    }}
                  >
                    <h3 className="text-lg sm:text-xl md:text-2xl font-elegant font-bold text-white leading-[1.4] break-keep mb-2">
                      백도화 재회비방 올인원 패키지 (PDF 3종 + 회향연부)
                    </h3>

                    <p className="text-[18px] text-[#FAF7F2] font-semibold break-keep mb-1.5">
                      완전판 바이블 + 후폭풍 시크릿북 + 실천 행동 매뉴얼
                    </p>

                    <p className="text-[15px] sm:text-[16px] text-[#B59C88] font-medium break-keep mb-6 md:mb-7">
                      ✦ 특별 부록 회향연부(回鄕緣符) 모바일 디지털 부적
                    </p>

                    <div className="flex flex-wrap items-baseline justify-center gap-3 mb-6 md:mb-7">
                      <span className="text-4xl md:text-5xl font-elegant font-bold text-[#CDB7A3] tracking-tight">
                        19,000원
                      </span>
                      <span className="text-base md:text-lg text-[#EDE6DA]/40 line-through">
                        정가 79,000원
                      </span>
                      <span className="inline-flex items-center justify-center py-[5px] px-[12px] rounded-[6px] bg-[#600018] border border-[#B49A70]/50 text-[#FAF7F2] text-xs md:text-sm font-bold whitespace-nowrap">
                        76% OFF
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={handlePurchase}
                      className="w-full py-4 md:py-4.5 px-6 rounded-xl font-elegant font-bold text-base md:text-lg hover:scale-[1.01] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 text-[#FAF7F2] shadow-[0_4px_20px_rgba(96,0,24,0.45)] hover:shadow-[0_0_20px_rgba(180,154,112,0.3)] hover:brightness-110 cursor-pointer mb-3.5 md:mb-4"
                      style={{
                        background: 'linear-gradient(135deg, #800020 0%, #4A0012 100%)',
                        border: '1px solid rgba(180, 154, 112, 0.65)'
                      }}
                    >
                      <Sparkles className="w-5 h-5 text-[#B49A70] shrink-0" />
                      <span>재회비방 19,000원에 구매하기</span>
                      <ChevronRight className="w-5 h-5 text-[#FAF7F2] shrink-0" />
                    </button>

                    <p className="text-[15px] sm:text-base text-[#EDE6DA]/90 font-normal break-keep mb-2">
                      한 번의 구매로 영구 소장하며, 골든타임 순간마다 즉시 꺼내 볼 수 있습니다.
                    </p>

                    <p className="text-xs sm:text-[13px] text-[#EDE6DA]/50 font-light break-keep">
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
                  <Link href="/terms" className="hover:text-[#B59C88] transition-colors">이용약관</Link>
                  <Link href="/privacy" className="hover:text-[#B59C88] transition-colors">개인정보처리방침</Link>
                  <Link href="/refund" className="hover:text-[#B59C88] transition-colors">배송 및 환불정책</Link>
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
          buttonText="재회비방 구매하기 →"
        />
      </GlobalBackground>

      {/* 🔍 책 속 미리보기 고해상도 확대 모달 */}
      {previewModalItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6 overflow-y-auto"
          onClick={() => setPreviewModalItem(null)}
        >
          <div
            className="relative max-w-3xl w-full max-h-[90vh] bg-[#1F0710] border border-[#B49A70]/50 rounded-2xl md:rounded-3xl p-4 sm:p-6 overflow-auto shadow-2xl flex flex-col items-center"
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
            <p className="text-xs text-[#EDE6DA]/60 mt-3 text-center">
              터치하거나 스크롤하여 세부 본문 내용을 읽으실 수 있습니다.
            </p>
          </div>
        </div>
      )}
    </main>
  )
}
