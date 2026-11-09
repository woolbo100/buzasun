'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
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
  X,
  RotateCcw,
  Coins,
  ShieldCheck,
  Heart,
  MessageSquare
} from 'lucide-react'
import RecommendedForCards, { hanjiFiberSvg } from '@/components/RecommendedForCards'
import MobileStickyBuyBar from '@/components/MobileStickyBuyBar'
import { reunionSecretAssets } from './assets'

// ═══════════════════════════════════════════════════════════════════════════
// 📦 상품 기본 정보 및 결제 연동 설정
// ═══════════════════════════════════════════════════════════════════════════
const productData = {
  productId: 'reunion-secret-method',
  slug: 'reunion-secret-method',
  pageSlug: 'reunion-secret',
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

  topBannerImage: '/image/reunion-secret/reunion-secret-hero.webp?v=20261108_1',
  heroImage: '/image/reunion-secret/r9.webp?v=20261108_2',
  overviewImage: '/image/reunion-secret/reunion-emotional-empathy.webp?v=20261108',
  recommendedImage: '/image/reunion-secret/reunion-secret-recommended.webp?v=20261108',
  formulaImage: '/image/reunion-secret/r4.webp',
  bookIntroImage: '/image/reunion-secret/reunion-secret-book-intro.webp?v=20261108',
  premiumImage: '/image/reunion-secret/return-secret-usage-guide.webp',
  ctaImage: '/image/reunion-secret/return-secret-cta-bg.webp?v=20261109_v2',

  // 💡 [커리큘럼 & 아키텍처] 16:9 와이드 인포그래픽 이미지 경로
  curriculumImage: '/image/reunion-secret/reunion-secret-two-step-transformation.webp?v=20261109_transparent',
  // 💡 [패키지 구성] 16:9 와이드 3종 책 목업 이미지 경로
  packageImage: '/image/reunion-secret/reunion-package-3books.webp',
  // 💡 [신규 영역 1] 관계 역전의 법칙 (16:9 인포그래픽 다이어그램 이미지 경로)
  reunionLawImage: '/image/reunion-secret/return-secret-position-shift.webp',
  // 💡 [신규 영역 2] 인연의 주권자 (16:9 와이드 배너 이미지 경로)
  sovereignImage: '/image/reunion-secret/return-secret-sovereign-mindset-visual-v2.webp',
  // 💡 [책 속에서 만날 내용] 미리보기 이미지 3종
  bookPreviewGuideImage: '/image/reunion-secret/return-secret-book-preview-guide.webp',
  bookPreviewToolsImage: '/image/reunion-secret/return-secret-book-preview-tools.webp',
  bookPreviewJourneyImage: '/image/reunion-secret/return-secret-book-preview-journey.webp',
  // 💡 이별 불안 공감 (3:4 이미지 경로)
  anxietyImage: '/image/reunion-secret/reunion-closed-heart.webp',
}

// 🏷️ 통일된 뮤트 로즈코코아 뱃지 컴포넌트 (추천 1안: 배경 #563743 · 테두리 #A78383 · 풍요비책 사각 뱃지 규격)
function ReunionBadge({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <span
      className={`inline-flex items-center justify-center py-[5px] px-[12px] rounded-[6px] text-xs font-semibold whitespace-nowrap shadow-sm tracking-wide ${className}`}
      style={{
        background: '#563743',
        border: '1px solid #A78383',
        color: '#F5E6DA',
        lineHeight: 1.3,
      }}
    >
      {children}
    </span>
  )
}

// 🖼️ 실전 체감 사례 이미지 슬롯 컴포넌트
function ReunionCaseImageSlot({
  src,
  alt,
  placeholderText,
  className = "",
}: {
  src: string
  alt: string
  placeholderText: string
  className?: string
}) {
  const [hasError, setHasError] = useState(false)

  return (
    <div className={`relative w-full aspect-[3/4] rounded-2xl md:rounded-3xl overflow-hidden border border-[#B49A70]/30 shadow-2xl bg-[#23131A] transition-all duration-300 ${className}`}>
      {!hasError ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-contain transition-opacity duration-300"
          onError={() => setHasError(true)}
        />
      ) : (
        <div
          className="w-full h-full flex flex-col items-center justify-center p-8 text-center space-y-4"
          style={{
            background: 'radial-gradient(ellipse at 50% 35%, rgba(86, 43, 59, 0.45) 0%, rgba(35, 19, 26, 0.95) 100%)',
          }}
        >
          <div className="w-14 h-14 rounded-2xl bg-[#462D38]/60 border border-[#B49A70]/50 flex items-center justify-center text-[#B59C88] shadow-md">
            <ImageIcon className="w-7 h-7 text-[#C2A477]" />
          </div>
          <div className="space-y-2 max-w-xs">
            <span
              className="inline-flex items-center justify-center py-[4px] px-[10px] rounded-[6px] text-xs font-semibold text-[#F5E6DA]"
              style={{
                background: '#563743',
                border: '1px solid #A78383',
              }}
            >
              실전 체감 사례
            </span>
            <p className="text-sm font-elegant text-[#FAF7F2] font-medium leading-relaxed break-keep">
              {alt}
            </p>
            <p className="text-xs text-[#EDE6DA]/60 font-light leading-relaxed break-keep">
              {placeholderText}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

// 🖼️ 교체형 이미지 슬롯 컴포넌트
// (로즈골드/샴페인골드 #B49A70 테두리와 깊은 버건디 배경의 고급 플레이스홀더 제공)
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

  if (!asset) {
    return (
      <div className={`rounded-2xl border border-dashed border-[#B49A70]/40 bg-[#1C040B]/80 flex flex-col items-center justify-center p-6 text-center ${className}`}>
        <ImageIcon className="w-8 h-8 text-[#B49A70]/60 mb-2" />
        <span className="text-xs text-[#C2A477]">에셋 키 &apos;{assetKey}&apos; 정의 필요</span>
      </div>
    )
  }

  const isRealImage = asset.src && (asset.src.startsWith('/') || !asset.src.includes('placeholder'))

  if (isRealImage) {
    return (
      <div className={`relative overflow-hidden rounded-2xl md:rounded-3xl border border-[#B49A70]/30 shadow-2xl bg-[#0F0206] ${className}`}>
        <Image
          src={asset.src}
          alt={asset.alt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className={`${asset.objectFit === 'contain' ? 'object-contain' : 'object-cover'} ${imgClassName}`}
          priority={assetKey === 'hero'}
        />
      </div>
    )
  }

  return (
    <div
      className={`relative overflow-hidden rounded-2xl md:rounded-3xl border border-[#B49A70]/40 shadow-2xl flex flex-col items-center justify-center p-6 text-center group transition-all duration-300 hover:border-[#B49A70]/70 ${className}`}
      style={{
        background: 'radial-gradient(ellipse at 50% 30%, rgba(70, 45, 56, 0.45) 0%, rgba(38, 25, 32, 0.95) 100%)',
        boxShadow: '0 12px 40px rgba(0, 0, 0, 0.5), inset 0 0 20px rgba(180, 154, 112, 0.08)'
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(180,154,112,0.12)_0%,transparent_60%)] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center space-y-3 max-w-xs">
        <div className="w-12 h-12 rounded-2xl bg-[#462D38]/60 border border-[#B49A70]/50 flex items-center justify-center text-[#B59C88] shadow-md group-hover:scale-105 transition-transform">
          <ImageIcon className="w-6 h-6 text-[#C2A477]" />
        </div>

        <div className="space-y-1">
          <ReunionBadge className="text-[11px] font-mono tracking-wider">
            {asset.aspectRatio || '3:4 비율 권장'}
          </ReunionBadge>
          <h4 className="text-sm md:text-base font-elegant font-bold text-[#FAF7F2] break-keep pt-1">
            {asset.placeholderLabel}
          </h4>
          <p className="text-[11px] md:text-xs text-[#EDE6DA]/60 font-light leading-relaxed break-keep">
            {asset.description}
          </p>
        </div>

        <div className="pt-2">
          <span className="text-[10px] text-[#B59C88]/70 border-b border-[#B49A70]/30 pb-0.5">
            assets.ts에서 이미지 경로 설정 가능
          </span>
        </div>
      </div>
    </div>
  )
}

// ═══════════════════════════════════════════════════════════════════════════
// 📑 도서별 상세 목차 아코디언 컴포넌트
// ═══════════════════════════════════════════════════════════════════════════
function BookTocAccordion({
  items,
  badgeText = '목차 미리보기',
}: {
  items: { chapter: string; title: string; desc: string }[]
  badgeText?: string
}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="pt-4 border-t border-[#B49A70]/20">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-3 px-4 rounded-xl border border-[#B49A70]/30 bg-[#38212B]/40 hover:bg-[#462D38]/60 hover:border-[#B49A70]/60 transition-all flex items-center justify-between text-left group cursor-pointer"
      >
        <div className="flex items-center gap-2.5">
          <BookOpen className="w-4 h-4 text-[#C2A477] group-hover:text-[#FAF7F2] transition-colors" />
          <span className="text-sm font-elegant font-bold text-[#FAF7F2] group-hover:text-[#C2A477] transition-colors">
            {badgeText}
          </span>
          <span className="text-xs text-[#EDE6DA]/50 font-normal">
            ({items.length}개 장)
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-[#C2A477]">
          <span>{isOpen ? '목차 접기' : '목차 펼쳐보기'}</span>
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''
              }`}
          />
        </div>
      </button>

      {isOpen && (
        <div className="mt-3 p-4 sm:p-5 rounded-xl border border-[#B49A70]/20 bg-[#1A030A]/90 space-y-3.5 transition-all animate-in fade-in duration-300">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="text-left border-b border-white/5 last:border-b-0 pb-3 last:pb-0"
            >
              <div className="flex items-baseline gap-2">
                <span className="text-xs font-mono font-bold text-[#B59C88] shrink-0">
                  {item.chapter}
                </span>
                <span className="text-sm font-elegant font-semibold text-[#FAF7F2] break-keep">
                  {item.title}
                </span>
              </div>
              <p className="text-xs text-[#EDE6DA]/70 font-light mt-1 pl-6 break-keep leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

// ═══════════════════════════════════════════════════════════════════════════
// 📑 각 책별 목차 데이터
// ═══════════════════════════════════════════════════════════════════════════
const mainBookToc = [
  {
    chapter: '제1장',
    title: '이별의 본질과 남녀 심리 역학',
    desc: '남자가 이별을 결심하는 진짜 이유와 이별 직후 겪는 3단계 심리 변화(해방감-공허함-후회).'
  },
  {
    chapter: '제2장',
    title: '결핍 고리 차단과 에너지 회수',
    desc: '매달릴수록 낮아지는 나의 프레임을 즉시 멈추고 주도권을 가져오는 심리적 리셋 공식.'
  },
  {
    chapter: '제3장',
    title: '골든타임 공백기 계산법',
    desc: '싸움 이별, 권태기, 상황 이별, 환승 이별 등 4대 유형별 최적의 공백기 일수 산정.'
  },
  {
    chapter: '제4장',
    title: '무의식 자극과 프레임 역전',
    desc: 'SNS 프로필과 간접 신호를 통해 상대방의 무의식에 후폭풍과 호기심을 유발하는 전략.'
  },
  {
    chapter: '제5장',
    title: '재회 성사와 새로운 관계 설계',
    desc: '상대방에게 먼저 연락이 왔을 때의 응대법과 같은 실수를 반복하지 않는 영구적 관계 결속.'
  }
]

const manualBookToc = [
  {
    chapter: 'DAY 01-03',
    title: '감정 단절 및 응급 처치',
    desc: '이별 직후 장문 카톡, 부재중 전화의 치명적 흑역사를 수습하는 쿨엔딩 템플릿.'
  },
  {
    chapter: 'DAY 04-14',
    title: '자아 재정렬 및 침묵 훈련',
    desc: '상대의 SNS 염탐을 멈추고 내 에너지를 온전히 회수하는 멘탈 디톡스 훈련법.'
  },
  {
    chapter: 'DAY 15-21',
    title: '간접 자극 및 무의식 흔들기',
    desc: '상대방이 나를 떠올리게 만드는 메신저 프로필 및 무자극 일상 노출 연출법.'
  },
  {
    chapter: 'DAY 22-30',
    title: '첫 접촉(Ping) 및 만남 유도',
    desc: '부담감 제로의 명분 있는 선톡 멘트와 자연스러운 애프터 만남 약속 잡기.'
  }
]

const messageBookToc = [
  {
    chapter: 'PART 1',
    title: '상황별 골든타임 쿨엔딩 메시지 7선',
    desc: '미련 없이 쿨하게 물러서서 상대의 뒤통수를 치고 강한 여운을 남기는 작별 멘트.'
  },
  {
    chapter: 'PART 2',
    title: '공백기 이후 무자극 핑(Ping) 메시지 10선',
    desc: '상대가 답장하지 않고는 못 배기게 만드는 일상적이고 자연스러운 질문 템플릿.'
  },
  {
    chapter: 'PART 3',
    title: '상대의 떠보기(자니? 잘 지내?) 철벽 대응 8선',
    desc: '새벽에 오는 가벼운 연락에 휘둘리지 않고 상대의 안달을 유도하는 고단수 응수법.'
  },
  {
    chapter: 'PART 4',
    title: '만남 약속을 확정 짓는 심리 유도 메시지 8선',
    desc: '재회의 결정적 순간, 부담 없이 얼굴을 마주하게 만드는 클로징 대화 공식.'
  }
]

export default function ReunionSecretPage() {
  useScrollAnimation()
  const router = useRouter()
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

  // 🌟 실전 체감 사례 슬라이드 데이터 및 인덱스 관리
  const [caseSlideIndex, setCaseSlideIndex] = useState(0)
  const transformationSlides = [
    {
      id: 1,
      title: "연락 충동과 감정 회복",
      image: "/image/reunion-secret/return-secret-emotional-recovery-scene.webp",
      imagePlaceholder: "연락 충동: 한옥 창가, 휴대전화를 내려놓은 여인, 은은한 달빛, 버건디 실크",
      cases: [
        {
          num: "사례 01 · 연락 충동",
          tag: "#연락충동 #감정회복",
          quote: "상대의 프로필을 확인하고 연락하고 싶은 순간, 즉각 반응하기보다 내 감정을 먼저 정리하는 연습."
        },
        {
          num: "사례 02 · 자존감 회복",
          tag: "#자존감회복 #관계중심",
          quote: "이별의 원인을 모두 내 탓으로 돌리던 태도에서 벗어나, 관계를 조금 더 객관적으로 바라보는 변화."
        }
      ]
    },
    {
      id: 2,
      title: "공백기와 재접촉",
      image: "/image/reunion-secret/reunion-case-02.webp",
      imagePlaceholder: "공백기: 조용한 서책과 모란꽃, 따뜻한 촛불, 자신을 돌보는 시간",
      cases: [
        {
          num: "사례 03 · 공백기 설계",
          tag: "#공백기 #관계거리",
          quote: "막연히 기다리는 시간이 아니라, 감정과 일상을 회복하기 위한 공백기 실천."
        },
        {
          num: "사례 04 · 재접촉 판단",
          tag: "#재접촉 #대화전략",
          quote: "상대의 반응에 휘둘리지 않고, 연락의 필요성과 시점을 차분히 판단하는 연습."
        }
      ]
    },
    {
      id: 3,
      title: "반복 패턴과 관계 재정립",
      image: "/image/reunion-secret/reunion-case-03.webp",
      imagePlaceholder: "관계 재정립: 단정한 와인빛 한복을 입은 여인, 열린 창과 새벽빛, 평온한 분위기",
      cases: [
        {
          num: "사례 05 · 반복 패턴 인식",
          tag: "#관계패턴 #자기이해",
          quote: "불안할수록 더 매달리던 관계 패턴을 알아차리고, 다른 선택을 시도하는 과정."
        },
        {
          num: "사례 06 · 관계 재정립",
          tag: "#관계기준 #자기존중",
          quote: "재회를 원하는 마음과 별개로, 내가 지켜야 할 관계의 기준을 분명히 세우는 변화."
        }
      ]
    }
  ]

  const nextCaseSlide = () => {
    setCaseSlideIndex((prev) => (prev + 1) % transformationSlides.length)
  }

  const prevCaseSlide = () => {
    setCaseSlideIndex((prev) => (prev - 1 + transformationSlides.length) % transformationSlides.length)
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
    <main className="detail-page relative min-h-screen bg-[#0D0709] text-[#EDE6DA] font-sans selection:bg-[#361722] selection:text-[#FAF7F2] pb-24 md:pb-0">
      <GlobalBackground
        src="/image/love-code-bg.png"
        brightCenter={false}
        customBaseOverlay={
          <div className="absolute inset-0 w-full h-full pointer-events-none">
            {/* 1. 우측 은은한 딥 플럼 버건디 라이트 오라 (오른쪽 입체감 및 비침 효과 강화) */}
            <div
              className="absolute inset-0"
              style={{
                background: `
                  radial-gradient(ellipse 70% 50% at 88% 22%, rgba(70, 45, 56, 0.22) 0%, rgba(56, 33, 43, 0.10) 50%, transparent 75%),
                  radial-gradient(circle 600px at 90% 65%, rgba(64, 48, 57, 0.15) 0%, transparent 65%)
                `,
              }}
            />

            {/* 2. 메인 가로 그라데이션 (왼쪽은 딥 다크 플럼으로 배경 차단, 오른쪽만 살짝 투명도를 주어 은은하게 비침) */}
            <div
              className="absolute inset-0"
              style={{
                background: `
                  linear-gradient(
                    95deg,
                    #120B0E 0%,
                    #181014 35%,
                    rgba(26, 17, 22, 0.98) 55%,
                    rgba(38, 25, 32, 0.94) 75%,
                    rgba(56, 33, 43, 0.88) 100%
                  )
                `,
              }}
            />
          </div>
        }
        customVignette={
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `
                radial-gradient(
                  circle at 65% 45%,
                  rgba(0, 0, 0, 0) 40%,
                  rgba(13, 7, 9, 0.35) 75%,
                  rgba(8, 4, 6, 0.75) 100%
                ),
                linear-gradient(
                  to right,
                  rgba(10, 4, 6, 0.65) 0%,
                  rgba(10, 4, 6, 0.25) 25%,
                  transparent 50%
                )
              `,
            }}
          />
        }
      >
        <Navigation />

        <div className="relative z-10 pt-44 pb-20">
          <div className="container-premium">

            {/* ═══════════════════════════════════════════════════════════════
                Section 1: Hero Section (히어로 및 상품 소개)
               ═══════════════════════════════════════════════════════════════ */}
            <section className="text-center mb-28">
              <Reveal delayMs={100}>
                {/* 상단 라벨 */}
                <div className="mb-8">
                  <ReunionBadge className="text-xs md:text-[13px] py-1.5 px-5 tracking-[0.2em] uppercase font-elegant">
                    PREMIUM REUNION STRATEGY EBOOK
                  </ReunionBadge>
                </div>

                {/* 대제목 */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-elegant font-bold text-white tracking-tight mb-8 leading-tight">
                  <span className="font-normal mr-3">再會秘方</span>
                  <span className="text-[#C2A477]">재회비방</span>
                </h1>

                {/* 1. 최상단: 가로형 풀 이미지 (16:9 비율, 1280px 매칭) */}
                <div className="relative w-full aspect-[16/9] md:aspect-[1672/941] rounded-2xl md:rounded-3xl overflow-hidden border border-[#B49A70]/30 shadow-2xl bg-black/40 mb-10 flex items-center justify-center">
                  <Image
                    src={productData.topBannerImage}
                    alt="재회비방 상단 풀 배너"
                    fill
                    sizes="(max-width: 1280px) 100vw, 1280px"
                    className="object-cover"
                    priority
                  />
                </div>

                {/* 2. 서브카피 & 설명 (풍요비책 규격 일치: 골드 서브타이틀, 중앙 금색 광채 구분선, 계층형 본문) */}
                <div className="max-w-4xl lg:max-w-5xl mx-auto space-y-7 mb-20 px-6 text-center">
                  <p className="text-2xl md:text-[36px] font-elegant font-bold text-[#C2A477] leading-[1.4] break-keep md:whitespace-nowrap">
                    끊어진 인연 앞에서 무너진 나를 다시 세우는 재회 비방서
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

                  <div className="text-[16px] md:text-[18px] text-[#EDE6DA] leading-[1.8] font-normal space-y-3.5 break-keep">
                    <p>
                      매달림과 자책으로 밤을 지새우던 시간을 끝내십시오.
                    </p>
                    <p>
                      감정이 아닌 &lsquo;무의식 심리 메커니즘&rsquo;과 &lsquo;프레임 역전&rsquo;으로 관계의 주도권을 되찾는 실전 전략을 전합니다.
                    </p>
                    <p className="font-semibold text-white">
                      오늘부터 《재회비방》과 함께 차갑게 식어버린 상대의 마음을 흔드는 절대 비기를 장착하십시오.
                    </p>
                  </div>
                </div>

                {/* 3. Hero Banner 3종 패키지 소개 상자 (단일 구매 영역 - 딥 브라운 버건디) */}
                <div
                  className="rounded-3xl relative overflow-hidden shadow-2xl"
                  style={{
                    background: 'linear-gradient(115deg, #302023 0%, #29191d 52%, #302027 100%)',
                    border: '1px solid rgba(185, 154, 115, 0.35)',
                    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.35)'
                  }}
                >
                  <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 items-stretch break-keep">
                    {/* 좌측: 통합 배지, 큰 제목, 설명, 가격, 구매/장바구니 버튼 */}
                    <div className="lg:col-span-7 w-full flex flex-col justify-between space-y-6 text-left p-6 sm:p-8 md:p-10 lg:p-12">
                      <div className="space-y-4">
                        <div className="flex flex-wrap items-center gap-2.5">
                          <ReunionBadge>
                            재회비방 3종 올인원 세트
                          </ReunionBadge>
                        </div>

                        <h2 className="text-2xl sm:text-3xl md:text-[34px] font-elegant font-bold text-[#FAF7F2] leading-[1.6] md:leading-[1.65] break-keep">
                          을(乙)의 자리를 끝내고,<br />
                          상대가 먼저 찾게 만드는 <span className="text-[#C2A477]">재회의 정석</span>
                        </h2>

                        <div className="text-[16px] md:text-[18px] text-[#EDE6DA]/90 space-y-3 leading-[1.8] font-light">
                          <p>
                            이별 후 무너진 감정, 흐트러진 프레임, 반복되는 집착의 패턴을 정리하고<br />
                            다시 나의 중심을 회복하기 위한 실전 재회 전략서입니다.
                          </p>
                          <p className="font-semibold text-white">
                            단순한 위로가 아닌, 상대를 뒤흔드는 무의식 공략 비방을 담았습니다.
                          </p>
                        </div>
                      </div>

                      <div className="pt-2 border-t border-white/10 space-y-4">
                        {/* 가격 안내 */}
                        <div className="space-y-1">
                          <span className="text-xs text-[#EDE6DA]/60">정가 79,000원</span>
                          <div className="text-2xl sm:text-3xl font-elegant font-bold text-[#C2A477] leading-none">
                            런칭 특가 19,000원 <span className="text-sm text-white/70 font-sans font-normal ml-1.5">(76% OFF)</span>
                          </div>
                        </div>

                        {/* 구매/장바구니 버튼 */}
                        <div className="flex flex-col sm:flex-row gap-3 pt-1 items-stretch sm:items-center w-full">
                          <button
                            type="button"
                            onClick={handleAddToCart}
                            className="py-3.5 px-5 sm:px-6 rounded-xl font-elegant font-bold text-sm md:text-base border border-[#B49A70]/60 text-[#B59C88] hover:bg-[#462D38]/30 hover:border-[#B49A70]/70 transition-all duration-300 shrink-0 whitespace-nowrap text-center bg-transparent order-2 sm:order-1"
                          >
                            장바구니 담기
                          </button>
                          <button
                            type="button"
                            onClick={handlePurchase}
                            className="reunion-cta-btn flex-1 py-3.5 px-6 rounded-xl font-elegant font-bold text-sm md:text-base hover:scale-[1.01] active:scale-95 flex items-center justify-center gap-2 text-[#FAF7F2] order-1 sm:order-2 cursor-pointer"
                          >
                            <span>재회비방 19,000원에 구매하기</span>
                            <ChevronRight className="w-4 h-4 text-[#FAF7F2] shrink-0" />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* 우측 목업 (1:1 비율로 잘림 없이 온전히 표시) */}
                    <div className="lg:col-span-5 relative w-full min-h-[300px] sm:min-h-[360px] lg:min-h-full overflow-hidden flex items-center justify-center p-6 sm:p-8">
                      <div className="relative w-full aspect-square max-w-[440px] rounded-2xl overflow-hidden shadow-xl border border-white/10">
                        <Image
                          src={productData.heroImage}
                          alt="재회비방 3종 올인원 세트 목업"
                          fill
                          sizes="(max-width: 1024px) 100vw, 45vw"
                          className="object-cover object-center rounded-2xl"
                          priority
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </section>

            <RedThreadDivider />

            {/* ═══════════════════════════════════════════════════════════════
                Section 2: Problem Diagnosis & Resonance (문제 진단·감정 공감·체크리스트)
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-[64px] md:mb-[112px] text-left w-full max-w-[1280px] mx-auto">
              <Reveal>
                <div className="space-y-10">
                  <div className="text-center max-w-3xl mx-auto space-y-5">
                    <span className="text-[#D8BB94] font-elegant text-[12pt] font-semibold tracking-[0.2em] uppercase block">
                      PAIN POINT & HOOK
                    </span>
                    <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white leading-[1.4] break-keep">
                      당신의 진심이 왜 상대에게는<br />
                      <span className="text-[#C2A477]">&apos;공포&apos;와 &apos;질림&apos;</span>이 되었을까?
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
                        className="text-[16px] md:text-[18px] text-[#EDE6DA] leading-[1.8] font-normal p-6 sm:p-7 md:p-8 rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.3)] space-y-3.5 break-keep h-auto"
                        style={{
                          background: 'linear-gradient(115deg, #542638 0%, #482535 48%, #342028 100%)',
                          border: '1px solid rgba(185, 154, 115, 0.35)'
                        }}
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
                        <h3 className="text-[20px] sm:text-[22px] md:text-[24px] font-elegant font-bold text-[#C2A477] leading-[1.4] flex items-center gap-2.5 break-keep">
                          <AlertTriangle className="w-6 h-6 text-[#B49A70] shrink-0" />
                          나의 재회 위험도 자가진단 체크리스트
                        </h3>

                        <div className="space-y-2.5">
                          {[
                            "상대의 카톡 프로필 사진 하나 바뀔 때마다 심장이 쿵 내려앉는다",
                            "장문의 진심을 보냈다가 차갑게 '읽씹' 혹은 '차단' 당했다",
                            "'친구로 지내자', '더 좋은 사람 만나'라는 말에 피가 마른다",
                            "술에 취해 전화하거나 SNS를 염탐하다 손이 떨린 적이 있다",
                            "'내가 다 맞출게'라며 스스로의 가치를 깎아내려 애원했다"
                          ].map((item, idx) => (
                            <div
                              key={idx}
                              className="p-4 rounded-xl border border-white/10 bg-white/[0.02] flex items-start gap-3.5 hover:border-[#B49A70]/40 transition-colors"
                            >
                              <div
                                style={{
                                  backgroundColor: '#54283D',
                                  borderColor: 'rgba(185, 145, 155, 0.55)'
                                }}
                                className="w-5 h-5 rounded border flex items-center justify-center shrink-0 mt-1 shadow-sm"
                              >
                                <Check className="w-3.5 h-3.5 text-[#FFF7EC] stroke-[2.4]" />
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

                  {/* ═══════════════════════════════════════════════════════════════
                      [풍요비책 차용 신규 영역 1] 불안의 순간 공감
                      (좌측 55% 공감 문구 + 우측 45% 불안/차단 이미지)
                     ═══════════════════════════════════════════════════════════════ */}
                  <div className="!mt-16 sm:!mt-20 md:!mt-28 pt-10 md:pt-14 border-t border-[#B49A70]/20">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
                      {/* 좌측 55% 공감 문구 */}
                      <div className="lg:col-span-7 space-y-5 text-left break-keep">
                        <span className="text-[#D8BB94] font-elegant text-xs md:text-sm font-semibold tracking-[0.25em] uppercase block">
                          THE MOMENT OF ANXIETY
                        </span>
                        <h3 className="text-2xl md:text-[36px] font-elegant font-bold text-white leading-[1.4] break-keep">
                          진심을 다해 사랑했는데,<br />
                          <span className="text-[#C2A477]">왜 상대는 도망치듯 차가워졌을까요?</span>
                        </h3>
                        <div className="space-y-3.5 text-[18px] text-[#EDE6DA] leading-[1.8] font-normal break-keep">
                          <p>
                            새벽 2시, 적었다 지우기를 반복하던 카톡 메시지.<br />
                            프로필 사진 하나 바뀔 때마다 가슴이 쿵 내려앉던 피 마르는 순간들.
                          </p>
                          <p>
                            더 많이 사랑을 증명하고 더 간절히 애원할수록,<br />
                            어쩐지 상대는 더 냉정하게 돌아서며 나를 작아지게 만들었습니다.
                          </p>
                        </div>
                        <div className="pt-6 border-t border-[#B49A70]/25 mt-6">
                          <p className="text-[#FAF7F2] font-elegant font-medium text-[18px] md:text-[19px] leading-[1.75] break-keep">
                            어쩌면 지금 우리에게 필요한 건,<br className="hidden sm:inline" />
                            눈물로 매달리는 애원이 아니라<br />
                            <span className="text-[#C2A477] font-semibold">무너진 내 중심과 관계의 프레임부터 돌아보는 시간</span>인지도 모릅니다.
                          </p>
                        </div>
                      </div>

                      {/* 우측 45% 불안 이미지 (3:4 비율) */}
                      <div className="lg:col-span-5 w-full flex flex-col items-center">
                        <div className="relative w-full aspect-[3/4] rounded-2xl md:rounded-3xl overflow-hidden border border-[#B49A70]/35 shadow-[0_12px_40px_rgba(0,0,0,0.5)] bg-black/40 flex items-center justify-center">
                          {productData.anxietyImage ? (
                            <Image
                              src={productData.anxietyImage}
                              alt="진심을 다해 사랑했는데, 왜 상대는 도망치듯 차가워졌을까 - 이별 불안 공감"
                              fill
                              sizes="(max-width: 1024px) 100vw, 45vw"
                              className="object-cover"
                              priority
                            />
                          ) : (
                            <div className="w-full h-full p-8 flex flex-col justify-between relative overflow-hidden"
                              style={{
                                background: 'radial-gradient(ellipse at 50% 30%, rgba(70, 45, 56, 0.45) 0%, rgba(38, 25, 32, 0.95) 100%)'
                              }}>
                              <div className="text-center relative z-10 space-y-2">
                                <ReunionBadge>
                                  이별 후폭풍 및 감정 공감
                                </ReunionBadge>
                                <h4 className="text-lg font-elegant font-bold text-[#FAF7F2]">
                                  닫혀버린 상대방의 마음
                                </h4>
                              </div>
                              <div className="p-4 rounded-xl bg-black/40 border border-[#B49A70]/20 text-center relative z-10 space-y-1">
                                <p className="text-xs text-[#B59C88]">
                                  &ldquo;너랑 헤어지길 정말 잘한 것 같아&rdquo;
                                </p>
                                <p className="text-sm text-[#FAF7F2] font-semibold">
                                  매달릴수록 상대는 안도하고 멀어집니다
                                </p>
                              </div>
                              <div className="text-center text-[11px] text-[#C2A477]/60 relative z-10">
                                ※ 최종 이미지가 등록되면 위 영역이 고해상도 그래픽으로 자동 대체됩니다.
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* ═══════════════════════════════════════════════════════════════
                      [풍요비책 차용 신규 영역 2] 재회의 역설 3대 공감 카드
                     ═══════════════════════════════════════════════════════════════ */}
                  <div className="!mt-[64px] sm:!mt-[72px] md:!mt-[120px] w-full max-w-[1280px] mx-auto">
                    <div className="text-center mb-10 md:mb-12 space-y-3 md:space-y-4 break-keep">
                      <span className="text-[#D8BB94] font-elegant text-[12pt] font-semibold tracking-[0.2em] uppercase block">
                        THE PARADOX OF REUNION
                      </span>
                      <h3 className="text-2xl md:text-[34px] lg:text-[36px] font-elegant font-bold text-white leading-[1.4] break-keep">
                        진심을 보이고 매달릴수록…<br />
                        <span className="text-[#C2A477]">왜 상대는 더 매정해지고 마음은 지옥 같았을까요?</span>
                      </h3>
                      <p className="text-[17px] md:text-[18px] text-[#EDE6DA] mt-4 max-w-2xl mx-auto leading-[1.8] font-normal break-keep">
                        당신의 사랑이 부족해서가 아닙니다. 상대를 붙잡고 싶던 간절함이<br className="hidden sm:inline" />
                        &apos;결핍과 불안의 신호&apos;가 되어 상대의 무의식에 부담과 질림을 주었기 때문입니다.
                      </p>
                    </div>

                    {/* 3대 공감 카드 (버건디 글라스 스타일) */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {/* 카드 1 */}
                      <div
                        className="p-7 md:p-8 rounded-2xl md:rounded-3xl relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[#B49A70]/50 flex flex-col justify-between"
                        style={{
                          background: 'linear-gradient(135deg, rgba(84, 38, 56, 0.78) 0%, rgba(52, 32, 40, 0.90) 100%)',
                          border: '1px solid rgba(185, 154, 115, 0.35)',
                          backdropFilter: 'blur(10px)',
                          WebkitBackdropFilter: 'blur(10px)',
                          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.35)'
                        }}
                      >
                        <div>
                          <div className="text-[#B59C88] font-elegant font-semibold text-[14px] md:text-[16px] tracking-wider mb-2.5">
                            공감 01
                          </div>
                          <h4 className="text-[19px] md:text-[20px] lg:text-[21px] font-elegant font-bold text-[#FAF7F2] leading-[1.35] break-keep">
                            “지금 안 잡으면 잊혀질까 봐…”
                          </h4>
                          <div className="h-[1px] w-full bg-[#B49A70]/20 my-3" />
                          <p className="text-[15px] md:text-[16px] text-[#EDE6DA]/85 leading-[1.75] font-light break-keep">
                            불안을 이기지 못해 보낸 구구절절한 장문 카톡. 상대는 감정의 강요로 느껴 &apos;차단&apos;이라는 더 차가운 방어벽을 세우게 만들었습니다.
                          </p>
                        </div>
                        {/* 본문 하단 중앙 모란꽃 라인 아트 장식 (풍요비책 연꽃과 동일 비율 · 재회비방 모란꽃 문양) */}
                        <div className="flex items-center justify-center gap-3 pt-6 mt-6" aria-hidden="true">
                          <span className="w-10 sm:w-12 h-[1px] bg-gradient-to-r from-transparent to-[#B79A77]/60" />
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#B79A77"
                            strokeWidth="1.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] opacity-80 shrink-0"
                          >
                            {/* 중앙 둥근 꽃잎 */}
                            <path d="M12 17.5 C10.2 13.5 10 9 12 6 C14 9 13.8 13.5 12 17.5 Z" />
                            {/* 좌우 안쪽 꽃잎 */}
                            <path d="M12 17 C9.5 14.5 7.8 11 8.8 7.5 C9.6 6 11.2 6.8 11.8 8.5" />
                            <path d="M12 17 C14.5 14.5 16.2 11 15.2 7.5 C14.4 6 12.8 6.8 12.2 8.5" />
                            {/* 좌우 바깥 꽃잎 */}
                            <path d="M9.8 17.5 C7 15.5 5 12.5 5.5 9.5 C6 8 7.8 8.8 8.5 10.5" />
                            <path d="M14.2 17.5 C17 15.5 19 12.5 18.5 9.5 C18 8 16.2 8.8 15.5 10.5" />
                            {/* 하단 꽃받침 */}
                            <path d="M8 19.5 C10.5 18 13.5 18 16 19.5" />
                          </svg>
                          <span className="w-10 sm:w-12 h-[1px] bg-gradient-to-l from-transparent to-[#B79A77]/60" />
                        </div>
                      </div>

                      {/* 카드 2 */}
                      <div
                        className="p-7 md:p-8 rounded-2xl md:rounded-3xl relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[#B49A70]/50 flex flex-col justify-between"
                        style={{
                          background: 'linear-gradient(135deg, rgba(84, 38, 56, 0.78) 0%, rgba(52, 32, 40, 0.90) 100%)',
                          border: '1px solid rgba(185, 154, 115, 0.35)',
                          backdropFilter: 'blur(10px)',
                          WebkitBackdropFilter: 'blur(10px)',
                          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.35)'
                        }}
                      >
                        <div>
                          <div className="text-[#B59C88] font-elegant font-semibold text-[14px] md:text-[16px] tracking-wider mb-2.5">
                            공감 02
                          </div>
                          <h4 className="text-[19px] md:text-[20px] lg:text-[21px] font-elegant font-bold text-[#FAF7F2] leading-[1.35] break-keep">
                            “내가 다 맞출게, 제발 돌아와줘”
                          </h4>
                          <div className="h-[1px] w-full bg-[#B49A70]/20 my-3" />
                          <p className="text-[15px] md:text-[16px] text-[#EDE6DA]/85 leading-[1.75] font-light break-keep">
                            내 모든 자존감과 가치를 깎아내리며 매달릴수록, 상대의 무의식 속에서 당신의 매력과 프레임은 바닥으로 곤두박질쳤습니다.
                          </p>
                        </div>
                        {/* 본문 하단 중앙 모란꽃 라인 아트 장식 (풍요비책 연꽃과 동일 비율 · 재회비방 모란꽃 문양) */}
                        <div className="flex items-center justify-center gap-3 pt-6 mt-6" aria-hidden="true">
                          <span className="w-10 sm:w-12 h-[1px] bg-gradient-to-r from-transparent to-[#B79A77]/60" />
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#B79A77"
                            strokeWidth="1.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] opacity-80 shrink-0"
                          >
                            {/* 중앙 둥근 꽃잎 */}
                            <path d="M12 17.5 C10.2 13.5 10 9 12 6 C14 9 13.8 13.5 12 17.5 Z" />
                            {/* 좌우 안쪽 꽃잎 */}
                            <path d="M12 17 C9.5 14.5 7.8 11 8.8 7.5 C9.6 6 11.2 6.8 11.8 8.5" />
                            <path d="M12 17 C14.5 14.5 16.2 11 15.2 7.5 C14.4 6 12.8 6.8 12.2 8.5" />
                            {/* 좌우 바깥 꽃잎 */}
                            <path d="M9.8 17.5 C7 15.5 5 12.5 5.5 9.5 C6 8 7.8 8.8 8.5 10.5" />
                            <path d="M14.2 17.5 C17 15.5 19 12.5 18.5 9.5 C18 8 16.2 8.8 15.5 10.5" />
                            {/* 하단 꽃받침 */}
                            <path d="M8 19.5 C10.5 18 13.5 18 16 19.5" />
                          </svg>
                          <span className="w-10 sm:w-12 h-[1px] bg-gradient-to-l from-transparent to-[#B79A77]/60" />
                        </div>
                      </div>

                      {/* 카드 3 */}
                      <div
                        className="p-7 md:p-8 rounded-2xl md:rounded-3xl relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[#B49A70]/50 flex flex-col justify-between"
                        style={{
                          background: 'linear-gradient(135deg, rgba(84, 38, 56, 0.78) 0%, rgba(52, 32, 40, 0.90) 100%)',
                          border: '1px solid rgba(185, 154, 115, 0.35)',
                          backdropFilter: 'blur(10px)',
                          WebkitBackdropFilter: 'blur(10px)',
                          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.35)'
                        }}
                      >
                        <div>
                          <div className="text-[#B59C88] font-elegant font-semibold text-[14px] md:text-[16px] tracking-wider mb-2.5">
                            공감 03
                          </div>
                          <h4 className="text-[19px] md:text-[20px] lg:text-[21px] font-elegant font-bold text-[#FAF7F2] leading-[1.35] break-keep">
                            “이별 직후 매달렸던 치명적 실수”
                          </h4>
                          <div className="h-[1px] w-full bg-[#B49A70]/20 my-3" />
                          <p className="text-[15px] md:text-[16px] text-[#EDE6DA]/85 leading-[1.75] font-light break-keep">
                            남자가 이별 직후 느끼는 &apos;해방감&apos; 타이밍에 무작정 매달리는 것은, 상대에게 &apos;헤어지길 참 잘했다&apos;는 안도감과 면죄부만 쥐여줄 뿐입니다.
                          </p>
                        </div>
                        {/* 본문 하단 중앙 모란꽃 라인 아트 장식 (풍요비책 연꽃과 동일 비율 · 재회비방 모란꽃 문양) */}
                        <div className="flex items-center justify-center gap-3 pt-6 mt-6" aria-hidden="true">
                          <span className="w-10 sm:w-12 h-[1px] bg-gradient-to-r from-transparent to-[#B79A77]/60" />
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#B79A77"
                            strokeWidth="1.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] opacity-80 shrink-0"
                          >
                            {/* 중앙 둥근 꽃잎 */}
                            <path d="M12 17.5 C10.2 13.5 10 9 12 6 C14 9 13.8 13.5 12 17.5 Z" />
                            {/* 좌우 안쪽 꽃잎 */}
                            <path d="M12 17 C9.5 14.5 7.8 11 8.8 7.5 C9.6 6 11.2 6.8 11.8 8.5" />
                            <path d="M12 17 C14.5 14.5 16.2 11 15.2 7.5 C14.4 6 12.8 6.8 12.2 8.5" />
                            {/* 좌우 바깥 꽃잎 */}
                            <path d="M9.8 17.5 C7 15.5 5 12.5 5.5 9.5 C6 8 7.8 8.8 8.5 10.5" />
                            <path d="M14.2 17.5 C17 15.5 19 12.5 18.5 9.5 C18 8 16.2 8.8 15.5 10.5" />
                            {/* 하단 꽃받침 */}
                            <path d="M8 19.5 C10.5 18 13.5 18 16 19.5" />
                          </svg>
                          <span className="w-10 sm:w-12 h-[1px] bg-gradient-to-l from-transparent to-[#B79A77]/60" />
                        </div>
                      </div>
                    </div>

                    {/* 공감 마무리 브릿지 메시지 (상자 없이 배경 위에 직접 배치 + 금빛 텍스트 흐름 & 모란꽃 심벌) */}
                    <div className="mt-14 md:mt-[65px] text-center max-w-[1050px] mx-auto px-4 break-keep">
                      {/* 첫 번째 줄 — 상대적으로 작은 글자 & 가벼운 두께 */}
                      <p className="text-[#FAF7F2] text-[17px] sm:text-[18px] md:text-[20px] font-elegant font-normal leading-[1.75] break-keep mb-3 sm:mb-4">
                        불안에 떨며 매달리는 손길에는, 아무리 <span className="gold-shimmer-text font-semibold">뜨거운 진심을 쏟아도</span> 닿지 않습니다,
                      </p>

                      {/* 두 번째 줄 — 약 15~20% 더 크고 강조된 글자 & 굵은 두께 (금빛 강조 텍스트 흐름 애니메이션 적용) */}
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="text-[#FAF7F2] text-[19px] sm:text-[22px] md:text-[25px] font-elegant font-semibold leading-[1.6] break-keep sm:whitespace-nowrap"
                      >
                        이제 애원을 멈추고, 당신의 <span className="gold-shimmer-text font-bold">‘중심과 프레임’부터 온전히 바로 세워야 할 때입니다.</span>
                      </motion.p>

                      {/* 하단 모란꽃 심벌 & 잔잔한 받침선 곡선 (풍요비책과 동일한 위치·크기·여백) */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className="flex flex-col items-center justify-center mt-7 md:mt-8"
                        aria-hidden="true"
                      >
                        <svg viewBox="0 0 32 32" fill="none" className="w-[38px] h-[38px] sm:w-[44px] sm:h-[44px] opacity-85">
                          {/* 중앙 둥근 모란 꽃잎 */}
                          <path
                            d="M16 21 C13.5 16 13 10 16 6 C19 10 18.5 16 16 21 Z"
                            stroke="#C2A477"
                            strokeWidth="1.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          {/* 좌우 안쪽 모란 꽃잎 */}
                          <path
                            d="M16 20.5 C12.5 17 10 12.5 11.5 8 C12.5 6 14.8 7 15.6 9.5"
                            stroke="#C2A477"
                            strokeWidth="1.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M16 20.5 C19.5 17 22 12.5 20.5 8 C19.5 6 17.2 7 16.4 9.5"
                            stroke="#C2A477"
                            strokeWidth="1.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          {/* 좌우 바깥 모란 꽃잎 */}
                          <path
                            d="M13 21 C9 18.5 6 14.5 7 10.5 C7.8 8.5 10 9.8 11 12"
                            stroke="#C2A477"
                            strokeWidth="1.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M19 21 C23 18.5 26 14.5 25 10.5 C24.2 8.5 22 9.8 21 12"
                            stroke="#C2A477"
                            strokeWidth="1.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          {/* 하단 모란 받침선 곡선 1 */}
                          <path
                            d="M8 24 C13 22.5 19 22.5 24 24"
                            stroke="#C2A477"
                            strokeWidth="1"
                            strokeLinecap="round"
                            opacity="0.6"
                          />
                          {/* 하단 모란 받침선 곡선 2 */}
                          <path
                            d="M11 27 C14 26 18 26 21 27"
                            stroke="#C2A477"
                            strokeWidth="0.8"
                            strokeLinecap="round"
                            opacity="0.35"
                          />
                        </svg>
                      </motion.div>
                    </div>

                    {/* 16:9 와이드 브릿지 이미지 (1672x941 매칭, 콘텐츠 전체 너비 100%) */}
                    <div className="mt-7 sm:mt-8 md:mt-9 w-full aspect-[16/9] md:aspect-[1672/941] relative rounded-2xl md:rounded-3xl overflow-hidden border border-[#B49A70]/30 shadow-2xl bg-black/40 flex items-center justify-center">
                      <Image
                        src="/image/reunion-secret/reunion-emotional-bridge.webp"
                        alt="재회비방 공감 브릿지 와이드 배너"
                        fill
                        sizes="(max-width: 1280px) 100vw, 1280px"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </Reveal>
            </section>

            <RedThreadDivider />

            {/* ═══════════════════════════════════════════════════════════════
                Section 3: 감정 공감 01 / 02 블록 (‘진심을 탓하지 마세요 / 이제, 나의 상태를 회복할 때’)
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-16 md:mb-24 text-left w-full max-w-[1280px] mx-auto">
              <Reveal>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  {/* 왼쪽: 01, 02 블록 */}
                  <div className="lg:col-span-7 order-1 flex flex-col justify-center">
                    <h3 className="text-center text-[22px] md:text-[28px] font-elegant font-bold text-[#C2A477] leading-[1.4] mb-6 break-keep">
                      붙잡으려 애쓰는 동안, 내 &lsquo;중심&rsquo;은 어디에 있었나요?
                    </h3>

                    <div
                      className="w-full text-left break-keep p-6 sm:p-8 md:p-10 rounded-2xl md:rounded-3xl gungjung-glass reunion-center-test-box shadow-2xl space-y-8 md:space-y-10 relative overflow-hidden"
                      style={{
                        background: 'linear-gradient(135deg, rgba(70, 43, 48, 0.08) 0%, rgba(49, 30, 39, 0.12) 100%)',
                        border: '1px solid rgba(185, 154, 115, 0.35)',
                        boxShadow: '0 12px 40px rgba(0, 0, 0, 0.4)'
                      }}
                    >
                      {/* 01 · 진심을 탓하지 마세요 */}
                      <div className="space-y-3.5">
                        <div className="flex items-center gap-2.5">
                          <ReunionBadge>
                            01
                          </ReunionBadge>
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
                          <ReunionBadge>
                            02
                          </ReunionBadge>
                          <h3 className="text-xl md:text-2xl font-elegant font-bold text-[#FAF7F2] leading-[1.4]">
                            이제, <span className="text-[#C2A477]">나의 상태를 회복할 때</span>
                          </h3>
                        </div>
                        <div className="text-[17px] md:text-[18px] text-[#EDE6DA] leading-[1.8] font-normal space-y-3 break-keep">
                          <p>
                            상대의 차가운 반응에 하루 종일 매달리는 동안,<br />
                            내 마음과 일상은 완전히 무너져 내리지 않았나요?
                          </p>
                          <div
                            className="p-4 sm:p-5 rounded-xl text-[#FAF7F2] font-normal leading-[1.75]"
                            style={{
                              background: 'rgba(67, 39, 53, 0.45)',
                              border: '1px solid rgba(185, 151, 130, 0.25)'
                            }}
                          >
                            《재회비방》에서 말하는 ‘상태’는<br className="hidden sm:inline" />
                            상대방에게 휘둘리지 않고 <span className="text-[#C2A477] font-semibold">내 가치와 에너지를 스스로 온전히 통제하는 중심</span>입니다.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 오른쪽: 이미지 (3:4 세로형 감성 공감 포스터) */}
                  <div className="lg:col-span-5 w-full order-2 flex flex-col justify-center">
                    <div className="relative w-full aspect-[3/4] rounded-2xl md:rounded-3xl overflow-hidden border border-[#B49A70]/30 shadow-[0_12px_40px_rgba(0,0,0,0.5)] bg-black/30">
                      <Image
                        src={productData.overviewImage}
                        alt="붙잡으려 애쓰는 동안 내 중심은 어디에 있었나요? 재회비방"
                        fill
                        sizes="(max-width: 1024px) 100vw, 42vw"
                        className="object-contain object-center"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </Reveal>
            </section>

            <RedThreadDivider />

            {/* ═══════════════════════════════════════════════════════════════
                Section 4: 왜, 재회비방인가? (Why Reunion Secret?)
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-28 w-full max-w-[1280px] mx-auto space-y-[48px] md:space-y-[80px]">
              <Reveal>
                <div className="space-y-6 md:space-y-8">
                  <div className="text-center max-w-3xl mx-auto space-y-3">
                    <span className="text-[#D8BB94] font-elegant text-[12pt] font-semibold tracking-[0.2em] uppercase block">
                      THE REUNION SECRET
                    </span>
                    <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white tracking-wide leading-[1.4] break-keep">
                      왜, <span className="text-[#C2A477]">재회비방</span>인가?
                    </h2>
                  </div>

                  {/* ════ 데스크톱 / 태블릿 (md 이상): 16:9 원본 비율 유지 단일 카드 ════ */}
                  <div
                    className="hidden md:block w-full aspect-[16/9] rounded-2xl md:rounded-3xl border border-[#B49A70]/40 shadow-2xl relative overflow-hidden transition-all duration-300 hover:shadow-[0_0_24px_rgba(185,145,91,0.2)]"
                    style={{
                      backgroundImage: "url('/image/reunion-secret/r7.webp')",
                      backgroundSize: '100% 100%',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      boxShadow: '0 12px 40px rgba(0, 0, 0, 0.45)'
                    }}
                  >
                    {/* 왼쪽 베이지 한지 영역 위에 배치되는 텍스트 컨테이너 (왼쪽 7% 시작, 너비 53%, 위치 살짝 상단 이동) */}
                    <div className="w-full h-full flex flex-col justify-center text-left pl-[6.5%] lg:pl-[7.5%] pr-4 -translate-y-2 lg:-translate-y-3">
                      <div className="w-[53%] max-w-[55%] space-y-3 lg:space-y-4">
                        <h3 className="text-[20px] md:text-[24px] font-elegant font-bold text-[#512733] leading-[1.4] break-keep">
                          &ldquo;진심을 다해 매달렸는데 왜 더 멀어졌을까요?<br />
                          이별 후에도 <span className="text-[#713F4C] font-extrabold">&lsquo;전략과 심리&rsquo;</span>가 필요했던 이유&rdquo;
                        </h3>

                        <div className="text-[16px] md:text-[18px] text-[#453536] leading-[1.7] lg:leading-[1.75] font-normal space-y-2.5 lg:space-y-3 break-keep">
                          <p>
                            연애 중의 다정함과 이별 후의 재회는 작동하는 무의식의 문법이 완전히 다릅니다. 이별하는 순간, 상대방의 뇌 속에서 당신은 &apos;사랑하는 연인&apos;에서 &apos;나의 자유를 옭아매는 부담스러운 존재&apos;로 재분류됩니다.
                          </p>
                          <p>
                            이 상태에서 쏟아붓는 눈물과 사과는 상대를 질리게 만들 뿐입니다. 재회의 유일한 열쇠는 <strong className="text-[#713F4C] font-bold">&apos;무의식적 프레임 역전&apos;</strong>입니다. 내가 먼저 물러서서 상대의 예측을 박살 내고, 상대의 결핍과 후폭풍을 설계해야 합니다.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* ════ 모바일 (md 미만): 16:9 이미지 전체 표시 + 하단 한지 텍스트 자연스러운 결합 ════ */}
                  <div
                    className="md:hidden w-full rounded-2xl border border-[#B49A70]/40 shadow-2xl overflow-hidden transition-all duration-300"
                    style={{
                      backgroundColor: '#F3E9D8',
                      boxShadow: '0 12px 40px rgba(0, 0, 0, 0.45)'
                    }}
                  >
                    {/* 상단 16:9 원본 이미지 (노리개와 비단, 테두리가 잘리지 않고 전체 노출) */}
                    <div
                      className="w-full aspect-[16/9] relative"
                      style={{
                        backgroundImage: "url('/image/reunion-secret/r7.webp')",
                        backgroundSize: '100% 100%',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                      }}
                    />
                    {/* 하단 한지 텍스트 영역 (가독성 100% 확보) */}
                    <div className="p-6 text-left break-keep space-y-4">
                      <h3 className="text-[20px] sm:text-[22px] md:text-[24px] font-elegant font-bold text-[#512733] leading-[1.45] break-keep">
                        &ldquo;진심을 다해 매달렸는데 왜 더 멀어졌을까요?<br />
                        이별 후에도 <span className="text-[#713F4C] font-extrabold">&lsquo;전략과 심리&rsquo;</span>가 필요했던 이유&rdquo;
                      </h3>

                      <div className="text-[16px] md:text-[18px] text-[#453536] leading-[1.75] font-normal space-y-3 break-keep">
                        <p>
                          연애 중의 다정함과 이별 후의 재회는 작동하는 무의식의 문법이 완전히 다릅니다. 이별하는 순간, 상대방의 뇌 속에서 당신은 &apos;사랑하는 연인&apos;에서 &apos;나의 자유를 옭아매는 부담스러운 존재&apos;로 재분류됩니다.
                        </p>
                        <p>
                          이 상태에서 쏟아붓는 눈물과 사과는 상대를 질리게 만들 뿐입니다. 재회의 유일한 열쇠는 <strong className="text-[#713F4C] font-bold">&apos;무의식적 프레임 역전&apos;</strong>입니다. 내가 먼저 물러서서 상대의 예측을 박살 내고, 상대의 결핍과 후폭풍을 설계해야 합니다.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </section>

            <RedThreadDivider />

            {/* ═══════════════════════════════════════════════════════════════
                Section 5: Before & After 1:1 매칭 비교 (TRANSFORMATION)
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-28 w-full max-w-[1280px] mx-auto">
              <Reveal>
                <div
                  className="gungjung-glass reunion-transformation-box py-12 px-4 md:px-10 rounded-3xl md:rounded-[40px] transition-all duration-300"
                  style={{
                    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.4)'
                  }}
                >
                  <div className="max-w-4xl mx-auto px-4 text-center mb-10 space-y-3 break-keep">
                    <span className="text-[#D8BB94] font-elegant text-xs font-semibold tracking-[0.2em] uppercase block">
                      TRANSFORMATION
                    </span>
                    <h3 className="text-2xl md:text-[36px] font-elegant font-bold text-white leading-[1.4] break-keep">
                      &ldquo;매달릴수록 차가워지던 그 사람,<br />
                      <span className="text-[#C2A477] sm:whitespace-nowrap">당신의 에너지가 바뀌면 후폭풍이 시작됩니다.</span>&rdquo;
                    </h3>
                    <p className="text-[17px] md:text-[18px] text-[#EDE6DA]/85 font-normal leading-[1.8] break-keep">
                      구차한 붙잡음은 차단을 부릅니다. 미련의 주파수를 끊는 순간 남자의 뇌에 상실감이 각인됩니다.
                    </p>
                  </div>

                  <div className="max-w-5xl mx-auto space-y-3.5 md:space-y-4 text-left break-keep">
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
                        className="grid grid-cols-1 md:grid-cols-2 gap-3.5 md:gap-4 items-stretch"
                      >
                        {/* BEFORE 카드 (다크 브라운 버건디 계열) */}
                        <div
                          className="h-full flex items-center gap-3.5 sm:gap-4 p-4 sm:p-5 rounded-2xl border transition-all duration-300 backdrop-blur-md hover:border-[rgba(161,125,119,0.35)]"
                          style={{
                            background: 'linear-gradient(125deg, #211318 0%, #28161D 55%, #24151B 100%)',
                            borderColor: 'rgba(161, 125, 119, 0.15)'
                          }}
                        >
                          <span
                            className="w-[68px] shrink-0 inline-flex items-center justify-center py-[5px] px-[12px] rounded-[6px] border border-[#5E3340] text-[11px] font-serif font-bold leading-none whitespace-nowrap"
                            style={{ backgroundColor: '#3D1C26', color: '#E5DED0' }}
                          >
                            BEFORE
                          </span>
                          <div className="flex-1 min-w-0">
                            <p className="text-[#F1EBE2] text-[15px] sm:text-[16px] md:text-[17px] font-semibold leading-[1.4] break-keep md:whitespace-nowrap">
                              {item.beforeTitle}
                            </p>
                            <p className="text-[#C8B8B5] text-[12px] sm:text-[13px] font-light leading-[1.4] mt-1 break-keep">
                              {item.beforeSub}
                            </p>
                          </div>
                        </div>

                        {/* AFTER 카드 (톤다운 딥 플럼 버건디 계열) */}
                        <div
                          className="h-full flex items-center gap-3.5 sm:gap-4 p-4 sm:p-5 rounded-2xl border transition-all duration-300 backdrop-blur-md hover:border-[rgba(179,141,127,0.50)]"
                          style={{
                            background: 'linear-gradient(120deg, #472630 0%, #4B2936 52%, #3D2430 100%)',
                            borderColor: 'rgba(179, 141, 127, 0.28)',
                            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.35)'
                          }}
                        >
                          <span
                            className="w-[68px] shrink-0 inline-flex items-center justify-center py-[5px] px-[12px] rounded-[6px] border border-[#D8C49B] text-[11px] font-serif font-bold leading-none whitespace-nowrap"
                            style={{ backgroundColor: '#B49A70', color: '#1A040A' }}
                          >
                            AFTER
                          </span>
                          <div className="flex-1 min-w-0">
                            <p className="text-[#FFF5E6] text-[15px] sm:text-[16px] md:text-[17px] font-semibold leading-[1.4] break-keep md:whitespace-nowrap">
                              {item.afterTitle}
                            </p>
                            <p className="text-[#EDE6DA]/85 text-[12px] sm:text-[13px] font-light leading-[1.4] mt-1 break-keep">
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

            <RedThreadDivider />

            {/* ═══════════════════════════════════════════════════════════════
                Section 6: 저자 소개 (AUTHOR & MASTER 백도화 - r8.webp 한지 비단 배경 카드)
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-28 w-full max-w-[1200px] mx-auto">
              <Reveal>
                <div
                  className="rounded-xl sm:rounded-2xl border border-[#B49A70]/30 pl-8 sm:pl-12 md:pl-20 lg:pl-28 xl:pl-32 pr-6 sm:pr-10 md:pr-14 lg:pr-20 py-8 sm:py-12 md:py-16 lg:py-20 relative overflow-hidden shadow-2xl text-left transition-all duration-300 hover:shadow-[0_0_24px_rgba(185,145,91,0.25)] min-h-[560px] md:min-h-[620px] flex flex-col justify-between"
                  style={{
                    backgroundImage: "url('/image/reunion-secret/r8.webp')",
                    backgroundSize: '100% 100%',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.45)'
                  }}
                >
                  {/* 중앙~좌측 한지 영역 위에 배치되는 텍스트 컨테이너 (오른쪽 달과 붉은 매듭, 하단 모란 비단 장식과 조화) */}
                  <div className="max-w-2xl lg:max-w-3xl mr-auto space-y-6 sm:space-y-8 bg-[#FAF7F2]/85 lg:bg-transparent backdrop-blur-[3px] lg:backdrop-blur-none p-6 sm:p-8 lg:p-0 rounded-2xl lg:rounded-none shadow-sm lg:shadow-none border border-[#B49A70]/30 lg:border-none">
                    {/* 이름 & 타이틀 */}
                    <div className="space-y-2 border-b border-[#B49A70]/30 pb-5 sm:pb-6">
                      <span className="text-xs font-elegant font-semibold tracking-widest text-[#7A0D23] uppercase block">
                        AUTHOR & MASTER
                      </span>
                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-elegant font-bold text-[#1F070F]">
                        백도화 <span className="text-[#600018] text-xl md:text-2xl font-normal">(白桃花)</span>
                      </h2>
                      <p className="text-[16px] sm:text-[18px] md:text-[21px] lg:text-[24px] text-[#381E26] font-medium leading-[1.6]">
                        마음의 구조를 읽고, 관계의 자리를 회복시키는 심리 멘토
                      </p>
                    </div>

                    {/* 핵심 공인 자격 및 전문 분야 인증 패널 (한지 스타일 8개) */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 pt-1">
                      {[
                        "브레인트레이너",
                        "NLP 전문상담사",
                        "전문 최면상담사",
                        "자존감코칭전문가",
                        "심리상담사",
                        "명상지도사",
                        "연애상담사",
                        "타로/사주상담사"
                      ].map((cert, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-center gap-1.5 sm:gap-2 py-2.5 px-2.5 sm:py-3 sm:px-3 text-center shadow-[0_2px_8px_rgba(100,60,30,0.06)] transition-all hover:border-[rgba(153,111,69,0.6)]"
                          style={{
                            background: 'linear-gradient(135deg, rgba(245, 231, 207, 0.85) 0%, rgba(229, 206, 170, 0.75) 100%)',
                            border: '1px solid rgba(153, 111, 69, 0.35)',
                            borderRadius: '9px',
                            color: '#452D25'
                          }}
                        >
                          <svg className="w-3.5 h-3.5 text-[#8C5E35] shrink-0" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-[12px] sm:text-[13px] md:text-[13.5px] lg:text-[14px] font-elegant font-bold leading-tight break-keep">
                            {cert}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* 저자의 편지 본문 (18px) */}
                    <div className="text-[15px] sm:text-[16px] md:text-[18px] text-[#251219] leading-[1.75] font-normal space-y-4 sm:space-y-5 break-keep pt-2 sm:pt-4">
                      <p>
                        &ldquo;재회에서 가장 위험한 것은 &apos;진심이면 통할 것&apos;이라는 순진한 착각입니다. 상대방이 마음의 문을 닫았을 때 보내는 당신의 진심은, 상대에게는 질식할 것 같은 무거운 빚이 됩니다.&rdquo;
                      </p>
                      <p>
                        수많은 내담자들의 이별 눈물을 닦아주며 확인한 진실은 하나였습니다. 떠난 사람의 발길을 돌리는 것은 눈물이 아니라, <strong className="text-[#7A0D23] font-bold">&apos;다시 호기심을 갖게 만드는 당신의 달라진 상태와 에너지&apos;</strong>입니다.
                      </p>
                      <p>
                        오늘 밤, 이 책을 통해 매달림의 흑역사를 멈추고 당당하게 당신의 가치를 되찾으시길 바랍니다.
                      </p>
                    </div>

                    {/* 낙관 (백도화 서명 인장 이미지 - 왼쪽 정렬로 우측 꽃 장식과 분리) */}
                    <div className="pt-5 sm:pt-7 flex items-end justify-start gap-2.5 sm:gap-3">
                      <span className="text-[16px] sm:text-[17px] font-elegant text-[#1F070F] font-bold pb-1 tracking-wider">
                        백도화 올림
                      </span>
                      <img
                        src="/image/reunion-secret/baekdohwa-signature-seal.png"
                        alt="백도화 낙관 인장"
                        className="h-[42px] sm:h-[48px] md:h-[54px] w-auto object-contain select-none shrink-0"
                      />
                    </div>
                  </div>
                </div>
              </Reveal>
            </section>

            <RedThreadDivider />

            {/* ═══════════════════════════════════════════════════════════════
                Section 7: 탄생 배경 (단 하나의 비방 - 풍요비책 레이아웃과 100% 동일)
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-28 w-full max-w-[1280px] mx-auto">
              <Reveal>
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-stretch">
                  {/* 왼쪽 책 비주얼 이미지 (풍요비책 3:4 라운드 프레임과 동일) */}
                  <div className="relative w-full aspect-[3/4] overflow-hidden rounded-[32px] sm:rounded-[40px] border border-[#B49A70]/30 shadow-2xl bg-black/40">
                    <Image
                      src={productData.bookIntroImage}
                      alt="수많은 눈물과 연구 끝에 탄생한 재회비방"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-center"
                      priority
                    />
                  </div>

                  {/* 오른쪽 핵심 가치 및 6개 알약형 특징 카드 */}
                  <div className="h-full flex flex-col justify-between text-left break-keep space-y-6 lg:space-y-0">
                    <div>
                      <p className="text-[20px] sm:text-[22px] md:text-[25px] font-elegant font-light text-[#F0EBE2] leading-[1.4] mb-2 sm:mb-2.5 break-keep">
                        수많은 눈물과 연구 끝에,
                      </p>
                      <h2 className="text-[24px] sm:text-[30px] md:text-[34px] lg:text-[38px] xl:text-[40px] font-elegant font-bold text-[#FAF7F2] leading-[1.38] break-keep">
                        마침내 탄생한<br />
                        단 하나의 비방(秘方)<br />
                        <span
                          className="text-[32px] sm:text-[38px] md:text-[44px] lg:text-[48px] xl:text-[52px] font-extrabold mt-2 inline-block"
                          style={{
                            background: 'linear-gradient(110deg, #D7BC91 0%, #C9A68F 35%, #B78E83 65%, #794653 100%)',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            color: 'transparent',
                            WebkitTextFillColor: 'transparent',
                            opacity: 1
                          }}
                        >
                          재회비방
                        </span>
                      </h2>
                    </div>

                    <div className="space-y-4 text-[16px] md:text-[17px] lg:text-[18px] text-[#EAE4D8] leading-[1.8] font-normal break-keep lg:py-2">
                      <p className="text-[#F0EBE2]">
                        더 이상 어긋난 인연 앞에서 자책하며 무너지지 마십시오.
                      </p>
                      <p className="text-[#FAF7F2] font-semibold text-[17px] md:text-[19px]">
                        재회는 매달리는 것이 아니라, 내 안의 프레임을 바로 세우는 것입니다.
                      </p>
                      <p className="text-[#F0EBE2]">
                        <strong className="text-[#C2A477] font-semibold">《재회비방》</strong>은 시중의 뻔한 연애 팁이나 근거 없는 감정적 위로를 거부하고{' '}
                        <span className="text-[#FAF7F2] font-semibold">&lsquo;뇌과학 심리전&rsquo;</span>과{' '}
                        <span className="text-[#FAF7F2] font-semibold">&lsquo;무의식 역학&rsquo;</span>을 집대성하여 오직 실제 재회만을 위해 탄생한 실전 비방서입니다.
                      </p>
                    </div>

                    {/* 2열 3행 알약형 특징 카드 (풍요비책과 100% 동일한 레이아웃) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {[
                        "뇌과학 무의식 심리전",
                        "을에서 갑으로 프레임 역전",
                        "4대 유형별 골든타임 공식",
                        "복사 전용 33선 스크립트",
                        "30일 실전 행동 데일리 매뉴얼",
                        "인연 결속 모바일 부적"
                      ].map((item, idx) => (
                        <div
                          key={idx}
                          className="p-3.5 sm:p-4 rounded-xl flex items-center gap-3 backdrop-blur-md transition-all duration-300 hover:border-[#B49A70]/65 hover:shadow-[0_0_20px_rgba(185,151,130,0.18)] hover:scale-[1.01]"
                          style={{
                            background: 'linear-gradient(115deg, #542638 0%, #482535 48%, #342028 100%)',
                            border: '1px solid rgba(185, 154, 115, 0.35)',
                            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.35)'
                          }}
                        >
                          <div
                            className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0 border border-[#B49A70]/40 text-[#C2A477] text-[13px] font-bold"
                            style={{ background: '#552334' }}
                          >
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
                Section 8: 이런 분께 추천합니다 (Recommended For)
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-28 w-full max-w-[1280px] mx-auto">
              <Reveal>
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 xl:gap-14 items-center">
                  {/* 왼쪽: '이런 분께 추천합니다' 제목 및 추천 카드 (약 52% 너비) */}
                  <div className="w-full lg:w-[53%] xl:w-[52%] space-y-5 md:space-y-7 text-left break-keep shrink-0">
                    <div>
                      <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white tracking-wide leading-[1.4] break-keep">
                        이런 분께 <span className="text-[#C2A477]">추천합니다</span>
                      </h2>
                    </div>

                    <div className="space-y-2.5 sm:space-y-3 md:space-y-3">
                      {[
                        "이별 후 상대에게 연락하고 싶지만 어떤 말을 해야 할지 몰라 불안한 분",
                        "상대가 차단했거나 읽씹, 안읽씹을 반복해 어떻게 해야 할지 막막한 분",
                        "지금 연락해야 하는지, 더 기다려야 하는지 판단이 어려운 분",
                        "권태기, 반복 다툼, 집착, 환승 의심 등 이별 원인을 제대로 진단하고 싶은 분",
                        "재회를 원하지만 예전처럼 매달리는 내가 되고 싶지는 않은 분",
                        "상대를 되찾기 전에 먼저 무너진 나의 중심과 가치를 바로잡고 싶은 분",
                        "이별 후 상대의 SNS나 근황을 반복해서 확인하며 감정이 흔들리는 분",
                        "재회 가능성만 기다리기보다 관계를 이해하고 새로운 시작을 준비하고 싶은 분"
                      ].map((item, idx) => (
                        <div
                          key={idx}
                          style={{
                            background: 'linear-gradient(135deg, #F5EEE3 0%, #F0E6D7 55%, #E9DECD 100%)',
                            backgroundImage: `
                              radial-gradient(circle at 18% 28%, rgba(245, 238, 227, 0.8) 0%, transparent 45%),
                              radial-gradient(circle at 82% 72%, rgba(233, 222, 205, 0.8) 0%, transparent 50%),
                              ${hanjiFiberSvg},
                              linear-gradient(135deg, #F5EEE3 0%, #F0E6D7 55%, #E9DECD 100%)
                            `,
                            backgroundSize: '100% 100%, 100% 100%, 340px 340px, 100% 100%',
                            backgroundPosition: `0 0, 0 0, ${(idx * 79) % 340}px ${(idx * 113) % 340}px, 0 0`,
                            borderColor: 'rgba(165, 135, 105, 0.30)',
                            boxShadow: '0 3px 10px -2px rgba(35, 20, 30, 0.08), 0 1px 3px 0 rgba(35, 20, 30, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.95)',
                          }}
                          className="group relative p-3 sm:p-3.5 md:p-[13px_18px] lg:p-[14px_20px] rounded-[12px] md:rounded-[14px] border flex items-start gap-3 sm:gap-3.5 md:gap-4 transition-all duration-300 hover:border-[#947852] hover:shadow-[0_4px_16px_rgba(35,20,30,0.12)] overflow-hidden"
                        >
                          {/* 딥 플럼 버건디 원형 체크 아이콘 (텍스트 첫 줄에 맞춤) */}
                          <div className="shrink-0 mt-0.5 sm:mt-1 relative z-10">
                            <div
                              style={{ backgroundColor: '#54283D', borderColor: 'rgba(125, 75, 89, 0.25)' }}
                              className="w-5 h-5 sm:w-6 sm:h-6 md:w-[26px] md:h-[26px] rounded-full flex items-center justify-center p-1 border shadow-none"
                            >
                              <Check className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#FFF7EC] stroke-[2.4]" />
                            </div>
                          </div>

                          {/* 본문 텍스트 (16~17px 확대, 두 줄로 자연스럽게 늘어남) */}
                          <p className="text-[15px] sm:text-[16px] md:text-[16.5px] lg:text-[17px] text-[#352521] font-semibold leading-[1.55] sm:leading-[1.6] break-keep select-text relative z-10">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 오른쪽: 《재회비방》 3:4 세로형 브랜드 포스터 이미지 (약 48% 너비, 시각적 존재감 확대) */}
                  <div className="w-full lg:w-[47%] xl:w-[48%] flex justify-center items-center">
                    <div className="relative w-full max-w-[440px] sm:max-w-[480px] lg:max-w-[500px] xl:max-w-[520px] aspect-[3/4] overflow-hidden rounded-[28px] md:rounded-[36px] border border-[#B49A70]/30 shadow-2xl bg-black/20">
                      <Image
                        src={productData.recommendedImage}
                        alt="재회를 바라더라도, 나를 지키는 기준은 필요합니다. 재회비방"
                        fill
                        sizes="(max-width: 1024px) 100vw, 48vw"
                        className="object-cover object-center"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </Reveal>
            </section>

            <RedThreadDivider />

            {/* ═══════════════════════════════════════════════════════════════
                [신규 추가] Section 9: CURRICULUM & ARCHITECTURE (커리큘럼 & 아키텍처)
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-28 text-left w-full max-w-[1280px] mx-auto">
              <Reveal>
                <div className="py-4">
                  <div className="text-center space-y-4 md:space-y-5 break-keep">
                    <span className="text-[#D8BB94] font-elegant text-[12pt] font-semibold tracking-[0.2em] uppercase block">
                      CURRICULUM &amp; ARCHITECTURE
                    </span>
                    <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-[#FAF7F2] leading-[1.4] break-keep">
                      &ldquo;재회를 운에 맡기지 마십시오.<br />
                      <span className="text-[#C2A477]">《재회비방》이 안내하는 무의식 재회 설계도</span>&rdquo;
                    </h2>
                    <p className="text-[#EDE6DA]/85 text-[17px] md:text-[18px] max-w-3xl mx-auto font-normal leading-[1.8] break-keep">
                      이별의 혼란에서 벗어나, 무너진 자존감을 회복하고 상대의 마음에 닿는 심리 원리부터<br className="hidden sm:inline" />
                      삶에 적용하는 구체적인 실전 행동 매뉴얼까지 체계적으로 담았습니다.
                    </p>
                  </div>

                  {/* 16:9 와이드 인포그래픽 이미지 영역 (바깥 검은 사각 배경을 완전 투명화하여 카드만 단독 노출) */}
                  <div className="mt-8 md:mt-10 relative w-full">
                    <Image
                      src="/image/reunion-secret/reunion-secret-two-step-transformation.webp?v=20261109_transparent"
                      alt="재회를 운에 맡기지 마십시오. 《재회비방》이 안내하는 무의식 재회 설계도"
                      width={1655}
                      height={879}
                      sizes="(max-width: 1280px) 100vw, 1280px"
                      className="w-full h-auto object-contain block"
                      priority
                    />
                  </div>
                </div>
              </Reveal>
            </section>

            <RedThreadDivider />

            {/* ═══════════════════════════════════════════════════════════════
                Section 10: 재회비방 5단계 전략 (THE REUNION MECHANISM)
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-28 text-left w-full max-w-[1280px] mx-auto">
              <Reveal>
                <div className="space-y-12">
                  <div className="text-center max-w-3xl mx-auto space-y-4">
                    <span className="text-[#C2A477] font-elegant tracking-[0.25em] text-xs uppercase font-bold">
                      THE REUNION MECHANISM
                    </span>
                    <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white leading-[1.4] md:leading-[1.5] break-keep">
                      이별의 상처를 매달림으로 풀지 마십시오.<br />
                      <span className="text-[#C2A477]">
                        내 에너지를 회수하고, 상대의 무의식에<br />
                        후폭풍을 심습니다.
                      </span>
                    </h2>
                    <p className="text-sm md:text-base text-[#EDE6DA]/70 font-light">
                      떠난 남자를 돌아오게 만드는 것은 눈물이 아니라 &apos;통제된 결핍과 프레임 역전&apos;입니다.
                    </p>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-8 items-stretch">
                    {/* STEP 1 */}
                    <div
                      className="p-8 sm:p-10 rounded-2xl md:rounded-3xl shadow-2xl flex flex-col justify-between space-y-6"
                      style={{
                        background: 'linear-gradient(115deg, #542638 0%, #482535 48%, #342028 100%)',
                        border: '1px solid rgba(185, 154, 115, 0.35)',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.35)'
                      }}
                    >
                      <div className="space-y-5">
                        <div className="flex items-center justify-between border-b border-[#B49A70]/20 pb-4">
                          <span className="text-xs font-mono font-bold text-[#C2A477] uppercase tracking-widest">
                            STEP 01
                          </span>
                          <ReunionBadge>
                            응급 처치 &amp; 침묵
                          </ReunionBadge>
                        </div>
                        <h3 className="text-xl md:text-2xl font-elegant font-bold text-[#FAF7F2] leading-[1.4]">
                          결핍 고리 차단 (에너지 회수 5단계)
                        </h3>
                        <p className="text-sm md:text-base text-[#EDE6DA]/80 leading-relaxed font-light">
                          상대가 당신을 &apos;언제든 부르면 올 쉬운 사람&apos;으로 착각하는 순간 재회의 문은 닫힙니다. 즉시 매달림을 중단하고 상대방이 쥔 칼자루를 빼앗아옵니다.
                        </p>
                        <ul className="space-y-2.5 text-xs sm:text-sm text-[#FAF7F2]/90 pt-2">
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#C2A477]" />
                            <span>1단계: 흑역사 수습 쿨엔딩 메시지 송부</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#C2A477]" />
                            <span>2단계: SNS 및 메신저 반응 100% 완전 동결</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#C2A477]" />
                            <span>3단계: 상대의 해방감 유효기간(도파민 방전) 대기</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#C2A477]" />
                            <span>4단계: 내 무너진 감정 에너지 즉각 회수 및 중심 회복</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#C2A477]" />
                            <span>5단계: 상대방 뇌리에 피어오르는 첫 번째 공허감 포착</span>
                          </li>
                        </ul>
                      </div>
                      <div className="p-4 rounded-xl bg-black/40 border border-[#B49A70]/20 text-xs text-[#B59C88] font-light">
                        💡 침묵은 패배가 아닙니다. 상대방의 무의식을 뒤흔드는 가장 강력한 무기입니다.
                      </div>
                    </div>

                    {/* STEP 2 */}
                    <div
                      className="p-8 sm:p-10 rounded-2xl md:rounded-3xl shadow-2xl flex flex-col justify-between space-y-6"
                      style={{
                        background: 'linear-gradient(115deg, #542638 0%, #482535 48%, #342028 100%)',
                        border: '1px solid rgba(185, 154, 115, 0.35)',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.35)'
                      }}
                    >
                      <div className="space-y-5">
                        <div className="flex items-center justify-between border-b border-[#B49A70]/30 pb-4">
                          <span className="text-xs font-mono font-bold text-[#C2A477] uppercase tracking-widest">
                            STEP 02
                          </span>
                          <ReunionBadge>
                            프레임 역전 &amp; 후폭풍
                          </ReunionBadge>
                        </div>
                        <h3 className="text-xl md:text-2xl font-elegant font-bold text-[#FAF7F2] leading-[1.4]">
                          프레임 재배치 및 무의식 자극 (후폭풍 유도 3단계)
                        </h3>
                        <p className="text-sm md:text-base text-[#EDE6DA]/90 leading-relaxed font-light">
                          상대의 무의식에 자리 잡은 익숙함을 깨부수고, 당신이라는 존재의 대체 불가능한 가치를 뇌리에 강제 각인시킵니다.
                        </p>
                        <ul className="space-y-2.5 text-xs sm:text-sm text-[#FAF7F2] pt-2">
                          <li className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-[#C2A477]" />
                            <span>1단계: 4대 유형별(권태·신뢰·상황·환승) 골든타임 공백기 완료</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-[#C2A477]" />
                            <span>2단계: 부담 없는 일상적 핑(Ping) 멘트로 상대의 심리적 방어벽 우회</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-[#C2A477]" />
                            <span>3단계: 만남 유도 후 대등한 프레임에서 재회 확정</span>
                          </li>
                        </ul>
                      </div>
                      <div className="p-4 rounded-xl bg-[#462D38]/50 border border-[#B49A70]/40 text-xs text-[#FAF7F2] font-medium">
                        ✨ 이때 상대방은 &apos;내가 잘못 판단했구나&apos;라는 후회와 함께 자발적으로 다가옵니다.
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </section>

            <RedThreadDivider />

            {/* ═══════════════════════════════════════════════════════════════
                Section 11: 3종 패키지 소개 (PACKAGE COMPOSITION)
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-14 text-left w-full max-w-[1280px] mx-auto">
              <Reveal>
                <div className="text-center mb-6 md:mb-8 max-w-3xl mx-auto break-keep">
                  <span className="text-[#D8BB94] font-elegant text-[12pt] font-semibold tracking-[0.2em] uppercase block">
                    PACKAGE COMPOSITION
                  </span>
                  <h3 className="text-2xl md:text-[36px] font-elegant font-bold text-white mt-2 leading-[1.4] break-keep">
                    재회비방 3종 올인원 세트<br />
                    <span className="text-[#C2A477]">끊어진 인연을 되돌리는 3단계 완성형 패키지</span>
                  </h3>
                  <p className="text-[#EDE6DA]/85 text-[18px] mt-3 leading-[1.8] font-normal break-keep">
                    본편으로 원리를 꿰뚫고, 행동 매뉴얼로 공백기를 설계하며, 시크릿 메시지로 후폭풍을 완성합니다.
                  </p>
                </div>

                {/* 3종 올인원 세트 목업 이미지 (16:9 가로 와이드 컷) */}
                <div className="mb-10 md:mb-14">
                  <div className="relative w-full rounded-[20px] overflow-hidden border border-[#B49A70]/30 shadow-[0_12px_40px_rgba(0,0,0,0.45)]">
                    <Image
                      src="/image/reunion-secret/reunion-package-3books.webp"
                      alt="재회비방 본편과 실전 부록으로 구성된 3종 올인원 패키지"
                      width={1600}
                      height={900}
                      sizes="(max-width: 1280px) 100vw, 1280px"
                      className="w-full h-auto object-contain block rounded-[20px]"
                      priority
                    />
                  </div>
                </div>

                {/* 3단계 핵심 역할 카드 3개 */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 text-left items-stretch">
                  {/* Book 1 */}
                  <div
                    className="relative p-5 sm:p-6 md:p-7 rounded-[12px] flex flex-col justify-between overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.4)] transition-transform hover:-translate-y-1 duration-200"
                    style={{
                      background: 'linear-gradient(115deg, #542638 0%, #482535 48%, #342028 100%)',
                      border: '1px solid rgba(185, 154, 115, 0.35)'
                    }}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <ReunionBadge>
                          Step 1 · 원리
                        </ReunionBadge>
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
                    className="relative p-5 sm:p-6 md:p-7 rounded-[12px] flex flex-col justify-between overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.4)] transition-transform hover:-translate-y-1 duration-200"
                    style={{
                      background: 'linear-gradient(115deg, #542638 0%, #482535 48%, #342028 100%)',
                      border: '1px solid rgba(185, 154, 115, 0.35)'
                    }}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <ReunionBadge>
                          Step 2 · 전략
                        </ReunionBadge>
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
                    className="relative p-5 sm:p-6 md:p-7 rounded-[12px] flex flex-col justify-between overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.4)] transition-transform hover:-translate-y-1 duration-200"
                    style={{
                      background: 'linear-gradient(115deg, #542638 0%, #482535 48%, #342028 100%)',
                      border: '1px solid rgba(185, 154, 115, 0.35)'
                    }}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <ReunionBadge>
                          Step 3 · 실천
                        </ReunionBadge>
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

                {/* ─────────────────────────────────────────────────────────
                    [신규 섹션] INSIDE THE SECRET BOOK: 책 속에서 만날 내용
                    (반투명 외곽 컨테이너 1개 내에 이미지 3장 가로 배치, 상자 속 상자 금지)
                   ───────────────────────────────────────────────────────── */}
                <div className="pt-16 md:pt-20 lg:pt-24 mb-14 md:mb-18">
                  {/* 섹션 제목 및 부제 (컨테이너 바깥 위쪽 배치) */}
                  <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14 break-keep px-4">
                    <span className="text-[#C2A477] font-elegant text-[12pt] font-semibold tracking-[0.2em] uppercase block mb-3">
                      INSIDE THE SECRET BOOK
                    </span>
                    <h3 className="text-2xl sm:text-3xl md:text-[36px] font-elegant font-bold text-[#FAF7F2] tracking-wide mb-3 md:mb-4">
                      책 속에서 만날 내용
                    </h3>
                    <p className="text-[16px] md:text-[18px] text-[#EDE6DA]/85 font-normal leading-[1.6] break-keep">
                      《재회비방》이 안내하는 관계의 이해부터 실천까지, 그 특별한 여정을 미리 만나보세요.
                    </p>
                  </div>

                  {/* 이미지 3장을 감싸는 단일 반투명 컨테이너 (개별 카드 상자 제거) */}
                  <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-6">
                    <div
                      className="w-full rounded-[24px] p-5 sm:p-6 md:p-8 lg:p-9 transition-all duration-300"
                      style={{
                        background: 'rgba(85, 53, 67, 0.12)',
                        border: '1px solid rgba(194, 150, 145, 0.18)',
                        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)'
                      }}
                    >
                      {/* 가로 3열 이미지 그리드 (데스크톱 가로 1줄, 모바일 1열) */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 items-start w-full">
                        {/* 이미지 1 — 진단·기준·조언 */}
                        <div className="w-full hover:-translate-y-1 transition-transform duration-300">
                          <Image
                            src={productData.bookPreviewGuideImage}
                            alt="책 속에서 만날 내용 - 진단·기준·조언"
                            width={440}
                            height={661}
                            className="w-full h-auto object-contain block rounded-[16px] md:rounded-[20px]"
                            sizes="(max-width: 768px) 100vw, 33vw"
                          />
                        </div>

                        {/* 이미지 2 — 여섯 가지 실전 도구 */}
                        <div className="w-full hover:-translate-y-1 transition-transform duration-300">
                          <Image
                            src={productData.bookPreviewToolsImage}
                            alt="막막한 순간에 펼쳐 볼 여섯 가지 도구 - 6가지 실전 자료"
                            width={440}
                            height={656}
                            className="w-full h-auto object-contain block rounded-[16px] md:rounded-[20px]"
                            sizes="(max-width: 768px) 100vw, 33vw"
                          />
                        </div>

                        {/* 이미지 3 — 재회의 5단계 여정 */}
                        <div className="w-full hover:-translate-y-1 transition-transform duration-300">
                          <Image
                            src={productData.bookPreviewJourneyImage}
                            alt="다시 만나는 일만큼, 나를 잃지 않는 일 - 파동의 진단부터 완성된 나까지 다섯 단계"
                            width={440}
                            height={658}
                            className="w-full h-auto object-contain block rounded-[16px] md:rounded-[20px]"
                            sizes="(max-width: 768px) 100vw, 33vw"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3종 올인원 세트 상세 해부 서브헤더 (책 속에서 만날 내용 섹션 아래로 배치) */}
                <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16 pt-12 md:pt-16 lg:pt-20 break-keep">
                  <span className="text-[#C2A477] font-elegant text-[12pt] font-semibold tracking-[0.2em] uppercase block mb-3">
                    3-in-1 All-in-One Package
                  </span>
                  <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white tracking-wide leading-[1.35] mb-3">
                    3종 올인원 세트 <span className="text-[#C2A477]">상세 해부</span>
                  </h2>
                  <div className="space-y-1.5">
                    <p className="text-[17px] md:text-[18px] text-[#EDE6DA]/85 font-normal leading-[1.5]">
                      본편부터 실전 워크북 1, 실전 워크북 2 까지
                    </p>
                    <p className="text-[18px] md:text-[20px] text-[#C2A477] font-bold font-elegant tracking-wide leading-[1.5]">
                      3종 · 총 189페이지 PDF 패키지
                    </p>
                  </div>
                </div>
              </Reveal>
            </section>

            {/* ═══════════════════════════════════════════════════════════════
                Section 12: 본편·부록별 상세 소개 및 목차 (Product Showcase — 3종 올인원 세트 상세 해부)
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-28 w-full max-w-[1280px] mx-auto">
              <Reveal>
                <div className="space-y-10">
                  {/* Book 1. [본편] 《재회비방(再會秘方) 완전판》 */}
                  <div
                    className="gungjung-glass reunion-transformation-box p-6 md:p-10 lg:p-12 rounded-3xl grid lg:grid-cols-12 gap-8 lg:gap-12 items-start transition-all duration-300"
                    style={{
                      boxShadow: '0 12px 35px rgba(0, 0, 0, 0.25)'
                    }}
                  >
                    <div className="lg:col-span-5 flex justify-center">
                      <div className="w-full max-w-[340px] lg:max-w-none">
                        <HybridImageSlot
                          assetKey="book1"
                          className="aspect-[3/4] shadow-2xl"
                        />
                        {/* 📖 Book 1 목업 하단 정보 */}
                        <div className="mt-4 md:mt-5 text-center space-y-1 text-[16px] md:text-[18px] leading-[1.5]">
                          <p className="text-[#C4A477] font-semibold tracking-wide">
                            원리바이블-본편
                          </p>
                          <p className="text-[#E8DED6] font-normal tracking-wide">
                            PDF 전자책 · <strong className="font-bold">92페이지</strong>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="lg:col-span-7 space-y-5 text-left break-keep">
                      <div>
                        <ReunionBadge>Book 1. [본편]</ReunionBadge>
                      </div>
                      <h3 className="text-xl md:text-[24px] font-elegant font-bold text-[#FAF7F2] leading-[1.4] break-keep">
                        《재회비방(再會秘方) 완전판》
                      </h3>
                      <p className="text-[17px] md:text-[18px] text-[#C2A477] font-semibold leading-[1.6] break-keep">
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
                              &ldquo;너는 세일 상품이 아니다. 정가(正價)를 치르게 하라&rdquo;
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="pt-2">
                        <BookTocAccordion items={mainBookToc} badgeText="[본편] 상세 목차 미리보기" />
                      </div>
                    </div>
                  </div>

                  {/* Book 2. [실전 부록 1] 《재회 역전의 법칙: 30일 실전 행동 매뉴얼》 */}
                  <div
                    className="gungjung-glass reunion-transformation-box p-6 md:p-10 lg:p-12 rounded-3xl grid lg:grid-cols-12 gap-8 lg:gap-12 items-start transition-all duration-300"
                    style={{
                      boxShadow: '0 12px 35px rgba(0, 0, 0, 0.25)'
                    }}
                  >
                    <div className="lg:col-span-5 flex justify-center order-last lg:order-first">
                      <div className="w-full max-w-[340px] lg:max-w-none">
                        <HybridImageSlot
                          assetKey="book2"
                          className="aspect-[3/4] shadow-2xl"
                        />
                        {/* 📖 Book 2 목업 하단 정보 */}
                        <div className="mt-4 md:mt-5 text-center text-[16px] md:text-[18px] leading-[1.5]">
                          <p className="text-[#E8DED6] font-normal tracking-wide">
                            PDF 전자책 · <strong className="font-bold">43페이지</strong>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="lg:col-span-7 space-y-5 text-left break-keep">
                      <div>
                        <ReunionBadge>Book 2. [실전 부록 1]</ReunionBadge>
                      </div>
                      <h3 className="text-xl md:text-[24px] font-elegant font-bold text-[#FAF7F2] leading-[1.4] break-keep">
                        《재회 역전의 법칙: 30일 실전 행동 매뉴얼》
                      </h3>
                      <p className="text-[17px] md:text-[18px] text-[#C2A477] font-semibold leading-[1.6] break-keep">
                        카톡·SNS 연출부터 30일 공백기 설계까지, 주도권을 되찾는 매뉴얼
                      </p>

                      <div className="space-y-3.5 pt-2">
                        <div className="p-4 rounded-xl bg-black/40 border border-[#B49A70]/25">
                          <h4 className="text-[15px] md:text-[16px] font-bold text-[#FAF7F2] flex items-start gap-2">
                            <span className="text-[#B59C88] shrink-0 font-mono">①</span>
                            <span>
                              3초 진단 & 6대 상황별 즉시 행동 vs 절대 금지(<span className="text-[#B59C88] font-semibold">DO & DON&apos;T</span>) 매뉴얼
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
                              연락 충동이 올라올 때 &apos;<span className="text-[#B59C88] font-semibold">10분 SOS 프로토콜</span>&apos;
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
                            <span className="px-2.5 py-1 rounded-md bg-[#552334] border border-[#B49A70]/35 text-[13px] md:text-[14px] text-[#FAF7F2]">
                              감정 격류 진정 기록지
                            </span>
                            <span className="px-2.5 py-1 rounded-md bg-[#552334] border border-[#B49A70]/35 text-[13px] md:text-[14px] text-[#FAF7F2]">
                              공백기 일일 점검표
                            </span>
                            <span className="px-2.5 py-1 rounded-md bg-[#552334] border border-[#B49A70]/35 text-[13px] md:text-[14px] text-[#FAF7F2]">
                              재회 가능성 12문항 자가진단표
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="pt-2">
                        <BookTocAccordion items={manualBookToc} badgeText="[실전 부록 1] 상세 목차 미리보기" />
                      </div>
                    </div>
                  </div>

                  {/* Book 3. [실전 부록 2] 《재회 후폭풍 치트키: 무의식 시크릿 메시지 33선》 */}
                  <div
                    className="gungjung-glass reunion-transformation-box p-6 md:p-10 lg:p-12 rounded-3xl grid lg:grid-cols-12 gap-8 lg:gap-12 items-start transition-all duration-300"
                    style={{
                      boxShadow: '0 12px 35px rgba(0, 0, 0, 0.25)'
                    }}
                  >
                    <div className="lg:col-span-5 flex justify-center">
                      <div className="w-full max-w-[340px] lg:max-w-none">
                        <HybridImageSlot
                          assetKey="book3"
                          className="aspect-[3/4] shadow-2xl"
                        />
                        {/* 📖 Book 3 목업 하단 정보 */}
                        <div className="mt-4 md:mt-5 text-center text-[16px] md:text-[18px] leading-[1.5]">
                          <p className="text-[#E8DED6] font-normal tracking-wide">
                            PDF 전자책 · <strong className="font-bold">54페이지</strong>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="lg:col-span-7 space-y-5 text-left break-keep">
                      <div>
                        <ReunionBadge>Book 3. [실전 부록 2]</ReunionBadge>
                      </div>
                      <h3 className="text-xl md:text-[24px] font-elegant font-bold text-[#FAF7F2] leading-[1.4] break-keep">
                        《재회 후폭풍 치트키: 무의식 시크릿 메시지 33선》
                      </h3>
                      <p className="text-[17px] md:text-[18px] text-[#C2A477] font-semibold leading-[1.6] break-keep">
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
                              <ReunionBadge className="py-0.5 px-2 text-[11px] shrink-0">
                                트랙 A
                              </ReunionBadge>
                              <span className="text-sm md:text-[15px] text-[#EDE6DA]/90 leading-relaxed font-light">
                                안읽씹·번호 차단 직전, 읽씹 3일 차, 잠수 이별·회피형 우회 멘트
                              </span>
                            </div>

                            <div className="p-3 rounded-lg bg-[#1B050E] border border-[#B49A70]/20 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2.5">
                              <ReunionBadge className="py-0.5 px-2 text-[11px] shrink-0">
                                트랙 B
                              </ReunionBadge>
                              <span className="text-sm md:text-[15px] text-[#EDE6DA]/90 leading-relaxed font-light">
                                권태기, 잦은 다툼, 거짓말/신뢰 훼손, 심하게 매달린 후 흑역사 리셋 멘트
                              </span>
                            </div>

                            <div className="p-3 rounded-lg bg-[#1B050E] border border-[#B49A70]/20 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2.5">
                              <ReunionBadge className="py-0.5 px-2 text-[11px] shrink-0">
                                트랙 C
                              </ReunionBadge>
                              <span className="text-sm md:text-[15px] text-[#EDE6DA]/90 leading-relaxed font-light">
                                새 이성(환승/리바운드) 균열 멘트, 친구 프레임 탈출, 늦은 밤 &quot;자니?&quot; 찔러보기 원천 격퇴 멘트
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

                      <div className="pt-2">
                        <BookTocAccordion items={messageBookToc} badgeText="[실전 부록 2] 상세 목차 미리보기" />
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </section>

            {/* ═══════════════════════════════════════════════════════════════
                Section 13: 패키지 구성 요약과 중간 구매 CTA
               ═══════════════════════════════════════════════════════════════ */}
            <div
              className="rounded-3xl relative overflow-hidden shadow-2xl mb-28"
              style={{
                background: 'linear-gradient(115deg, #302023 0%, #29191d 52%, #302027 100%)',
                border: '1px solid rgba(185, 154, 115, 0.35)',
                boxShadow: '0 12px 40px rgba(0, 0, 0, 0.35)'
              }}
            >
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 items-stretch break-keep">
                {/* 왼쪽 약 45%: 상자 끝까지 꽉 차게 들어가는 독립 이미지 영역 (네모 박스 없이 모서리 풀 블리드) */}
                <div className="lg:col-span-5 relative w-full min-h-[260px] sm:min-h-[320px] lg:min-h-full overflow-hidden flex items-center justify-center">
                  <Image
                    src="/image/reunion-secret/bookiner.webp"
                    alt="재회비방 3종 패키지 내지 미리보기"
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover object-center"
                    priority
                  />
                </div>

                {/* 오른쪽: 구성 안내 → 구분선 → 가격 안내 → 버튼 */}
                <div className="lg:col-span-7 w-full flex flex-col justify-between space-y-5 sm:space-y-6 text-left p-6 sm:p-8 md:p-10 lg:py-10 lg:pr-10 lg:pl-12">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1.5 flex-1">
                      <span className="text-xs font-elegant font-semibold tracking-wider text-[#C2A477] uppercase block">
                        PACKAGE OVERVIEW
                      </span>
                      <h4 className="text-lg sm:text-xl md:text-[22px] font-elegant font-bold text-[#FAF7F2] leading-[1.4] break-keep">
                        PDF 3종 (본편 + 실전부록 1 + 실전부록 2)
                      </h4>
                      <div className="text-sm md:text-base text-[#EDE6DA]/90 font-light space-y-0.5 leading-[1.6]">
                        <p>PDF 3종 · 총 189페이지</p>
                        <p>회향연부 이미지 파일 함께 제공</p>
                      </div>
                    </div>

                    <ReunionBadge className="shrink-0 mt-0.5">
                      올인원 패키지
                    </ReunionBadge>
                  </div>

                  <div className="border-b border-white/10" />

                  <div className="space-y-1">
                    <span className="text-xs text-[#EDE6DA]/60">정가 79,000원</span>
                    <div className="text-2xl sm:text-3xl font-elegant font-bold text-[#C2A477] leading-none">
                      런칭 특가 19,000원 <span className="text-sm text-white/70 font-sans font-normal ml-1.5">(76% OFF)</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2 items-stretch sm:items-center w-full">
                    <button
                      type="button"
                      onClick={handleAddToCart}
                      className="py-3.5 px-5 sm:px-6 rounded-xl font-elegant font-bold text-sm md:text-base border border-[#B49A70]/60 text-[#B59C88] hover:bg-[#462D38]/30 hover:border-[#B49A70]/70 transition-all duration-300 shrink-0 whitespace-nowrap text-center bg-transparent order-2 sm:order-1"
                    >
                      장바구니 담기
                    </button>
                    <button
                      type="button"
                      onClick={handlePurchase}
                      className="reunion-cta-btn flex-1 py-3.5 px-6 rounded-xl font-elegant font-bold text-sm md:text-base hover:scale-[1.01] active:scale-95 flex items-center justify-center gap-2 text-[#FAF7F2] order-1 sm:order-2 cursor-pointer"
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
                [신규 추가] Section 14: CORE DIFFERENTIATION (재회비방 3대 차별화 카드)
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-28 text-left w-full max-w-[1280px] mx-auto">
              <Reveal>
                <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 md:mb-14 break-keep">
                  <span className="text-[#D8BB94] font-elegant text-[12pt] font-semibold tracking-[0.2em] uppercase block">
                    CORE DIFFERENTIATION
                  </span>
                  <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white tracking-wide leading-[1.4]">
                    <span className="text-[#C2A477] mr-1.5 md:mr-2">✦</span>
                    《재회비방》은 무엇이 다른가?
                  </h2>
                  <p className="text-[16px] md:text-[18px] text-[#EDE6DA]/85 leading-[1.8] font-normal break-keep">
                    감정적 매달림이나 억지 위로를 넘어, 관계의 프레임을 역전시키고<br />
                    상대의 무의식에 후폭풍을 심는 3대 핵심 차별화
                  </p>
                </div>

                {/* 3개의 카드: PC 3열, 모바일 1열 */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-7 items-stretch">
                  {/* CARD 01 | 무의식의 프레임 역전 */}
                  <div
                    className="p-7 sm:p-8 rounded-2xl md:rounded-3xl shadow-[0_12px_36px_rgba(0,0,0,0.35)] backdrop-blur-md flex flex-col justify-between h-full transition-all duration-300 hover:-translate-y-1.5 hover:border-[#B49A70]/70 group"
                    style={{
                      background: 'linear-gradient(115deg, #542638 0%, #482535 48%, #342028 100%)',
                      border: '1px solid rgba(185, 154, 115, 0.35)',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.35)'
                    }}
                  >
                    <div>
                      <div className="pb-5 mb-5 border-b border-[#B49A70]/25 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div
                            className="w-10 h-10 rounded-xl border border-[#B49A70]/40 flex items-center justify-center text-[#B59C88] shadow-sm group-hover:border-[#C2A477]/60 transition-colors"
                            style={{ background: '#552334' }}
                          >
                            <RotateCcw className="w-5 h-5 text-[#C2A477]" />
                          </div>
                          <div>
                            <span className="text-[11px] font-mono tracking-widest text-[#C2A477]/80 uppercase block">
                              CARD 01
                            </span>
                            <h3 className="text-[18px] md:text-[20px] font-bold font-elegant text-[#FAF7F2]">
                              무의식의 프레임 역전
                            </h3>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <p className="text-[16px] md:text-[17px] font-bold text-[#C2A477] leading-[1.55] break-keep min-h-[48px] md:min-h-[52px]">
                          단순한 매달림이 아닌 ‘무의식 프레임의 재배치’입니다.
                        </p>
                        <div className="space-y-3 text-[14px] sm:text-[15px] text-[#EDE6DA]/90 leading-[1.75] font-normal break-keep">
                          <p>
                            &ldquo;잘못했어, 다시 돌아와줘&rdquo;를 애원하는 저자세 매달림이 아닙니다.
                          </p>
                          <p>
                            왜 진심을 다해 잡으려 할수록 상대는 더 차갑게 돌아섰는지, 그 심리적 원인을 뇌과학과 무의식 역학으로 분해하여 상대가 먼저 아쉬워하는 위치로 프레임을 재정렬합니다.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CARD 02 | 골든타임 공백기 설계 */}
                  <div
                    className="p-7 sm:p-8 rounded-2xl md:rounded-3xl shadow-[0_12px_36px_rgba(0,0,0,0.35)] backdrop-blur-md flex flex-col justify-between h-full transition-all duration-300 hover:-translate-y-1.5 hover:border-[#B49A70]/70 group"
                    style={{
                      background: 'linear-gradient(115deg, #542638 0%, #482535 48%, #342028 100%)',
                      border: '1px solid rgba(185, 154, 115, 0.35)',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.35)'
                    }}
                  >
                    <div>
                      <div className="pb-5 mb-5 border-b border-[#B49A70]/25 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div
                            className="w-10 h-10 rounded-xl border border-[#B49A70]/40 flex items-center justify-center text-[#B59C88] shadow-sm group-hover:border-[#C2A477]/60 transition-colors"
                            style={{ background: '#552334' }}
                          >
                            <Clock className="w-5 h-5 text-[#C2A477]" />
                          </div>
                          <div>
                            <span className="text-[11px] font-mono tracking-widest text-[#C2A477]/80 uppercase block">
                              CARD 02
                            </span>
                            <h3 className="text-[18px] md:text-[20px] font-bold font-elegant text-[#FAF7F2]">
                              골든타임 공백기 설계
                            </h3>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <p className="text-[16px] md:text-[17px] font-bold text-[#C2A477] leading-[1.55] break-keep min-h-[48px] md:min-h-[52px]">
                          불안해서 참는 시간이 아닌 ‘철저히 계산된 심리적 공백’입니다.
                        </p>
                        <div className="space-y-3 text-[14px] sm:text-[15px] text-[#EDE6DA]/90 leading-[1.75] font-normal break-keep">
                          <p>
                            무작정 버티는 기다림이 아닙니다.
                          </p>
                          <p>
                            이별의 4대 유형별 최적의 공백기를 계산하고, 프로필 관리와 미세 신호(Ping) 전략을 통해 상대의 무의식 속에 당신이라는 강력한 기억을 소환합니다.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CARD 03 | 평생의 관계 비책 */}
                  <div
                    className="p-7 sm:p-8 rounded-2xl md:rounded-3xl shadow-[0_12px_36px_rgba(0,0,0,0.35)] backdrop-blur-md flex flex-col justify-between h-full transition-all duration-300 hover:-translate-y-1.5 hover:border-[#B49A70]/70 group"
                    style={{
                      background: 'linear-gradient(115deg, #542638 0%, #482535 48%, #342028 100%)',
                      border: '1px solid rgba(185, 154, 115, 0.35)',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.35)'
                    }}
                  >
                    <div>
                      <div className="pb-5 mb-5 border-b border-[#B49A70]/25 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div
                            className="w-10 h-10 rounded-xl border border-[#B49A70]/40 flex items-center justify-center text-[#B59C88] shadow-sm group-hover:border-[#C2A477]/60 transition-colors"
                            style={{ background: '#552334' }}
                          >
                            <ShieldCheck className="w-5 h-5 text-[#C2A477]" />
                          </div>
                          <div>
                            <span className="text-[11px] font-mono tracking-widest text-[#C2A477]/80 uppercase block">
                              CARD 03
                            </span>
                            <h3 className="text-[18px] md:text-[20px] font-bold font-elegant text-[#FAF7F2]">
                              평생의 관계 비책
                            </h3>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <p className="text-[16px] md:text-[17px] font-bold text-[#C2A477] leading-[1.55] break-keep min-h-[48px] md:min-h-[52px]">
                          일회성 재회를 넘어 다시는 을의 연애를 반복하지 않는 ‘평생의 관계 무기’입니다.
                        </p>
                        <div className="space-y-3 text-[14px] sm:text-[15px] text-[#EDE6DA]/90 leading-[1.75] font-normal break-keep">
                          <p>
                            한 번 읽고 덮는 책이 아닙니다.
                          </p>
                          <p>
                            이별의 고통 속에서 중심을 잃을 때마다 스마트폰으로 즉시 꺼내보며, 내 가치와 품격을 지켜내는 가장 은밀하고 강력한 무기입니다.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </section>

            <RedThreadDivider />

            {/* ═══════════════════════════════════════════════════════════════
                Section 15: 실전 200% 활용 가이드 & 실전 재회 노트 & 이렇게 활용해보세요 (통합 보존)
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-28 w-full max-w-[1280px] mx-auto">
              <Reveal>
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
                  {/* 왼쪽 이미지 + 하단 감성 문구 */}
                  <div className="flex flex-col lg:justify-between w-full h-full">
                    <div className="relative w-full aspect-[3/4] overflow-hidden rounded-[32px] md:rounded-[40px] border border-[#B49A70]/30 shadow-2xl bg-black/40 flex items-center justify-center">
                      <Image
                        src={productData.premiumImage}
                        alt="재회비방 실전 200% 활용 가이드 - 진단·준비·실천"
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-contain"
                        priority
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
                          <span className="block text-2xl md:text-[28px] text-[#C2A477]">
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

                      {/* 1열 4행 슬림 미색 한지 카드 (풍요비책 및 이런 분께 추천합니다와 100% 동일한 딥 버건디 체크 및 한지 스타일) */}
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
                              background: 'linear-gradient(135deg, #F5EEE3 0%, #F0E6D7 55%, #E9DECD 100%)',
                              backgroundImage: `
                                radial-gradient(circle at 18% 28%, rgba(245, 238, 227, 0.8) 0%, transparent 45%),
                                radial-gradient(circle at 82% 72%, rgba(233, 222, 205, 0.8) 0%, transparent 50%),
                                ${hanjiFiberSvg},
                                linear-gradient(135deg, #F5EEE3 0%, #F0E6D7 55%, #E9DECD 100%)
                              `,
                              backgroundSize: '100% 100%, 100% 100%, 340px 340px, 100% 100%',
                              backgroundPosition: `0 0, 0 0, ${(idx * 79) % 340}px ${(idx * 113) % 340}px, 0 0`,
                              borderColor: 'rgba(165, 135, 105, 0.30)',
                              boxShadow: '0 3px 10px -2px rgba(35, 20, 30, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.95)',
                            }}
                            className="group relative p-3.5 sm:p-4 md:p-[14px_20px] rounded-[12px] md:rounded-[14px] border flex items-start gap-3.5 md:gap-4 transition-all duration-300 hover:border-[#947852] hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(35,20,30,0.12)] overflow-hidden"
                          >
                            {/* 딥 플럼 버건디 원형 체크 아이콘 (이런 분께 추천합니다와 크기·색상·비율 100% 일치) */}
                            <div className="shrink-0 mt-0.5 relative z-10">
                              <div
                                style={{ backgroundColor: '#54283D', borderColor: 'rgba(125, 75, 89, 0.25)' }}
                                className="w-6 h-6 md:w-[26px] md:h-[26px] rounded-full flex items-center justify-center p-1 border shadow-none"
                              >
                                <Check className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#FFF7EC] stroke-[2.4]" />
                              </div>
                            </div>

                            <div className="flex flex-col text-left w-full relative z-10 space-y-0.5">
                              <h3 className="font-elegant text-[15px] sm:text-[16px] font-bold text-[#352521] leading-snug break-keep">
                                {item.title}
                              </h3>
                              <p className="text-[13px] sm:text-[14px] text-[#74665D] font-normal leading-relaxed break-keep">
                                {item.desc}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* 이용 안내 2개 */}
                      <div className="pt-2 border-t border-white/10 space-y-1.5 text-xs text-[#EDE6DA]/70 font-light">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#B59C88] shrink-0" />
                          <span>PDF 디지털 전자책으로 결제 즉시 마이페이지에서 다운로드하여 열람하실 수 있습니다.</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#B59C88] shrink-0" />
                          <span>스마트폰, 태블릿, PC 등 모든 기기에서 제한 없이 영구 소장 가능합니다.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </section>

            <RedThreadDivider />

            {/* ═══════════════════════════════════════════════════════════════
                [신규 추가] Section 16: POSITION SHIFT (관계 변화 메시지 및 감성 이미지)
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-28 text-left w-full max-w-[1280px] mx-auto">
              <Reveal>
                <div>
                  {/* [신규 영역 1] 관계 역전의 법칙 상단 텍스트 영역 */}
                  <div className="text-center max-w-3xl mx-auto space-y-4 mb-10 md:mb-14 break-keep">
                    <span className="text-[#D8BB94] font-elegant text-[12pt] font-semibold tracking-[0.2em] uppercase block">
                      POSITION SHIFT
                    </span>
                    <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-[#FAF7F2] leading-[1.4] break-keep">
                      &ldquo;매달려도 차가워졌던 이유,<br className="hidden sm:inline" />
                      어쩌면 <span className="text-[#C2A477]">&lsquo;관계의 프레임&rsquo;</span>을 돌보지 않았기 때문입니다.&rdquo;
                    </h2>
                    <div className="text-[17px] md:text-[18px] text-[#EDE6DA]/85 leading-[1.8] font-normal break-keep space-y-2">
                      <p>
                        상대방의 마음만 붙잡으려 애쓰는 동안,<br className="hidden sm:inline" />
                        우리는 스스로의 중심과 가치를 놓치곤 합니다.
                      </p>
                      <p>
                        저자세의 불안에서 벗어나,<br className="hidden sm:inline" />
                        이제 상대가 스스로 돌아오게 만드는 나만의 중심을 세워보세요.
                      </p>
                    </div>
                  </div>

                  {/* [신규 영역 1] 관계 역전의 법칙 인포그래픽 이미지 (16:9 원본 베이지 한지 & 플럼 버건디) */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="relative w-full aspect-[16/9] md:aspect-[1672/941] rounded-2xl md:rounded-[20px] overflow-hidden shadow-2xl flex items-center justify-center"
                  >
                    <Image
                      src={productData.reunionLawImage}
                      alt="관계 역전의 법칙 - 매달려도 차가워졌던 이유, 관계의 프레임 인포그래픽"
                      fill
                      sizes="(max-width: 1280px) 100vw, 1280px"
                      className="object-contain"
                      priority
                    />
                  </motion.div>

                  {/* [신규 영역 2] 인연의 주권자 브릿지 카피 (mt-28 md:mt-40) */}
                  <div className="text-center max-w-3xl mx-auto space-y-4 md:space-y-5 mt-28 md:mt-40 break-keep">
                    <span className="text-[#D8BB94] font-elegant text-[12pt] font-semibold tracking-[0.2em] uppercase block">
                      SOVEREIGN OF RELATIONSHIP
                    </span>
                    <h3
                      className="text-[26px] sm:text-[30px] md:text-[36px] font-elegant font-bold text-[#FAF7F2] break-keep"
                      style={{ lineHeight: 1.4 }}
                    >
                      “을의 자리를 떠나,<br />
                      이제 스스로 <span className="text-[#C2A477]">‘인연의 주권자’</span>가 되십시오.”
                    </h3>

                    <div className="space-y-3 text-[17px] md:text-[18px] text-[#EDE6DA]/85 leading-[1.8] font-normal break-keep pt-2">
                      <p>
                        상대의 연락 하나에 하루 종일 무너지며 스스로를 작게 만들었던 순간들.
                      </p>
                      <p>
                        이제는 내면의 불안을 잠재우고,<br className="hidden sm:inline" />
                        나의 가치를 되찾아 당당하게 사랑을 이끄는 삶으로 나아갈 시간입니다.
                      </p>
                      <p className="text-[#C2A477] font-bold font-elegant text-[18px] md:text-[20px] pt-1">
                        매달리는 연애에서, 상대를 끌어당기는 사랑으로.
                      </p>
                    </div>
                  </div>

                  {/* [신규 영역 2] 하단: 인연의 주권자 16:9 와이드 배너 이미지 (mt-12 md:mt-16) */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="relative w-full aspect-[16/9] md:aspect-[1672/941] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center mt-12 md:mt-16"
                  >
                    <Image
                      src={productData.sovereignImage}
                      alt="마음을 끌어당기는 인연의 주권자 - 을의 자리에서 벗어나 관계의 주권자로"
                      fill
                      sizes="(max-width: 1280px) 100vw, 1280px"
                      className="object-contain"
                      priority
                    />
                  </motion.div>
                </div>
              </Reveal>
            </section>

            <RedThreadDivider />

            {/* ═══════════════════════════════════════════════════════════════
                Section 17: REAL LIFE TRANSFORMATIONS (실전 체감 사례)
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-28 text-left w-full max-w-[1280px] mx-auto">
              <Reveal>
                <div className="text-center max-w-3xl mx-auto space-y-4 mb-14 break-keep">
                  <span className="text-[#C2A477] font-elegant text-[12pt] font-semibold tracking-[0.2em] uppercase block mb-3">
                    REAL LIFE TRANSFORMATIONS
                  </span>
                  <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white tracking-wide leading-[1.4] break-keep">
                    실전 체감 사례
                  </h2>
                  <p className="text-[17px] md:text-[18px] text-[#EDE6DA]/85 leading-[1.8] font-normal break-keep">
                    이별 후 무너진 중심을 회복하고, 반복되던 관계의 패턴을 바꾸는 구체적인 실천 장면을 살펴보세요.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
                  {/* 좌측: 실전 체감 사례 이미지 슬롯 (aspect-[3/4]) */}
                  <div className="lg:col-span-5 flex flex-col justify-center">
                    <ReunionCaseImageSlot
                      src={transformationSlides[caseSlideIndex].image}
                      alt={transformationSlides[caseSlideIndex].title}
                      placeholderText={transformationSlides[caseSlideIndex].imagePlaceholder}
                    />
                  </div>

                  {/* 우측: 사례 카드 영역 (상하 2개 카드 + 하단 컨트롤러) */}
                  <div className="lg:col-span-7 flex flex-col justify-between space-y-5 lg:space-y-6">
                    {/* 상하 사례 카드 2개 묶음 */}
                    <div className="flex-1 flex flex-col gap-4 sm:gap-5 justify-between">
                      {transformationSlides[caseSlideIndex].cases.map((cItem, cIdx) => (
                        <div
                          key={cIdx}
                          className="flex-1 p-6 sm:p-7 md:p-8 rounded-2xl md:rounded-3xl border border-[#B49A70]/25 shadow-lg relative overflow-hidden flex flex-col justify-center space-y-3.5 transition-all duration-300 min-h-[160px] md:min-h-[180px] hover:-translate-y-1 hover:border-[#C2A477]/40"
                          style={{
                            background: 'linear-gradient(145deg, rgba(49, 29, 37, 0.72), rgba(35, 23, 30, 0.82))',
                            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
                          }}
                        >
                          <div className="flex items-center justify-between gap-3">
                            <span
                              className="inline-flex items-center justify-center py-[5px] px-[12px] rounded-[6px] text-xs font-semibold whitespace-nowrap shadow-sm tracking-wide"
                              style={{
                                background: '#563743',
                                border: '1px solid #A78383',
                                color: '#F5E6DA',
                                lineHeight: 1.3,
                              }}
                            >
                              {cItem.num}
                            </span>
                            <span className="text-xs text-[#C2A477]/70 font-mono">
                              {cItem.tag}
                            </span>
                          </div>
                          <p className="text-base sm:text-lg md:text-[18px] font-elegant font-medium text-white leading-relaxed break-keep">
                            &ldquo;{cItem.quote}&rdquo;
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* 하단 컨트롤러: 표시 점(인디케이터) + 전환 화살표 버튼 */}
                    <div className="flex items-center justify-between pt-1 sm:pt-2 px-1">
                      <div className="flex items-center gap-2">
                        {transformationSlides.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={() => setCaseSlideIndex(idx)}
                            className={`h-2 rounded-full transition-all cursor-pointer ${caseSlideIndex === idx ? 'w-6 bg-[#C2A477]' : 'w-2 bg-white/20'
                              }`}
                            aria-label={`사례 슬라이드 ${idx + 1} 보기`}
                          />
                        ))}
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={prevCaseSlide}
                          className="p-2.5 rounded-full border border-white/10 hover:border-[#B49A70]/50 bg-white/[0.02] hover:bg-white/[0.05] text-[#EDE6DA] transition-all cursor-pointer"
                          aria-label="이전 사례"
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button
                          type="button"
                          onClick={nextCaseSlide}
                          className="p-2.5 rounded-full border border-white/10 hover:border-[#B49A70]/50 bg-white/[0.02] hover:bg-white/[0.05] text-[#EDE6DA] transition-all cursor-pointer"
                          aria-label="다음 사례"
                        >
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </section>

            {/* ═══════════════════════════════════════════════════════════════
                Section 18: Comparison Table (가치 비교 카드)
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-28 max-w-4xl mx-auto">
              <Reveal>
                <div className="text-center max-w-3xl mx-auto mb-12 md:mb-14 break-keep">
                  <span className="text-[#C2A477] font-elegant text-[12pt] font-semibold tracking-[0.2em] uppercase block mb-3">
                    COMPARISON TABLE
                  </span>
                  <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-[#FAF7F2] leading-[1.4] break-keep">
                    같은 고민 앞에서, 무엇을 선택하시겠습니까?
                  </h2>
                </div>

                {/* 세로형 2열 비교 카드 그리드 (PC 2열, 모바일 1열) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch pt-2">
                  {/* 카드 1 — 일반 타로·연애 상담 (어두운 브라운 버건디 글라스) */}
                  <div
                    className="p-7 sm:p-9 rounded-2xl md:rounded-3xl border border-[#B99A73]/20 shadow-[0_8px_32px_rgba(0,0,0,0.35)] hover:border-[#B49A70]/40 text-left backdrop-blur-md flex flex-col justify-between h-full transition-all duration-300 hover:-translate-y-1"
                    style={{
                      background: 'linear-gradient(145deg, rgba(39, 25, 31, 0.78), rgba(28, 20, 25, 0.84))',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.35)'
                    }}
                  >
                    {/* 카드 제목 헤더 */}
                    <div className="pb-5 mb-6 border-b border-white/10 min-h-[48px] md:min-h-[56px] flex items-center">
                      <h3 className="text-[20px] md:text-[22px] font-bold font-elegant text-[#FAF7F2]/90">
                        일반 타로·연애 상담
                      </h3>
                    </div>

                    {/* 항목 리스트: 비용, 내용, 실행 도구 */}
                    <div className="space-y-6 flex-1 flex flex-col justify-between">
                      {/* 1. 비용 */}
                      <div>
                        <span className="text-[14px] font-semibold text-[#C2A477]/80 block mb-1.5">
                          비용
                        </span>
                        <div className="text-[22px] md:text-[24px] font-bold font-elegant text-[#FAF7F2] leading-none mb-1">
                          1회 15만 원 이상
                        </div>
                      </div>

                      {/* 2. 내용 */}
                      <div>
                        <span className="text-[14px] font-semibold text-[#C2A477]/80 block mb-1.5">
                          내용
                        </span>
                        <p className="text-[16px] md:text-[17px] text-[#EDE6DA]/85 leading-[1.7] break-keep">
                          감정적 위로와 시간 끌기
                        </p>
                      </div>

                      {/* 3. 실행 도구 */}
                      <div>
                        <span className="text-[14px] font-semibold text-[#C2A477]/80 block mb-1.5">
                          실행 도구
                        </span>
                        <p className="text-[16px] md:text-[17px] text-[#EDE6DA]/85 leading-[1.7] break-keep">
                          없음
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 카드 2 — 백도화 《재회비방 3종 세트》 (뮤트 버건디 플럼 글라스 + 샴페인 골드 테두리 강조) */}
                  <div
                    className="p-7 sm:p-9 rounded-2xl md:rounded-3xl border border-[#BE9D70]/50 shadow-[0_12px_40px_rgba(0,0,0,0.4)] hover:border-[#C2A477] text-left backdrop-blur-md flex flex-col justify-between h-full relative transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_45px_rgba(0,0,0,0.5),0_0_25px_rgba(190,157,112,0.22)]"
                    style={{
                      background: 'linear-gradient(145deg, rgba(91, 49, 65, 0.78), rgba(58, 31, 44, 0.86))',
                      boxShadow: '0 12px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(190, 157, 112, 0.12)'
                    }}
                  >
                    {/* 상단 뱃지 (라벨) */}
                    <div className="absolute -top-3.5 left-7 sm:left-9 z-10">
                      <span className="inline-block py-1 px-3 rounded-md text-[12px] font-bold text-[#FAF7F2] bg-[#562B3B] border border-[#C2A477]/70 shadow-sm">
                        재회비방 3종 올인원 패키지
                      </span>
                    </div>

                    {/* 카드 제목 헤더 */}
                    <div className="pb-5 mb-6 border-b border-[#C2A477]/25 min-h-[48px] md:min-h-[56px] flex items-center relative z-10">
                      <h3 className="text-[20px] md:text-[22px] font-bold font-elegant text-[#FAF7F2]">
                        백도화 《재회비방 3종 세트》
                      </h3>
                    </div>

                    {/* 항목 리스트: 비용, 내용, 실행 도구 */}
                    <div className="space-y-6 flex-1 flex flex-col justify-between relative z-10">
                      {/* 1. 비용 (단 19,000원 크게 강조) */}
                      <div>
                        <span className="text-[14px] font-semibold text-[#C2A477] block mb-1.5">
                          비용
                        </span>
                        <div className="text-[28px] md:text-[32px] font-bold font-elegant text-[#FAF7F2] leading-none mb-1">
                          단 19,000<span className="text-[18px] font-normal text-[#C2A477] ml-1">원</span>
                          <span className="text-[13px] md:text-[14px] font-normal text-[#FAF6EE]/80 ml-2 font-sans">(영구 소장)</span>
                        </div>
                      </div>

                      {/* 2. 내용 */}
                      <div>
                        <span className="text-[14px] font-semibold text-[#C2A477] block mb-1.5">
                          내용
                        </span>
                        <p className="text-[16px] md:text-[17px] text-[#FAF7F2] font-medium leading-[1.7] break-keep">
                          <span className="text-[#C2A477] font-bold">뇌과학 기반 심리전</span> + 행동 매뉴얼
                        </p>
                      </div>

                      {/* 3. 실행 도구 */}
                      <div>
                        <span className="text-[14px] font-semibold text-[#C2A477] block mb-1.5">
                          실행 도구
                        </span>
                        <p className="text-[16px] md:text-[17px] text-[#FAF7F2] font-medium leading-[1.7] break-keep">
                          상황별 <span className="text-[#C2A477] font-bold">33선 스크립트</span> + 30일 워크시트 제공
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </section>

            <RedThreadDivider />

            {/* ═══════════════════════════════════════════════════════════════
                Section 19: FAQ 아코디언 (자주 묻는 질문 7문항)
               ═══════════════════════════════════════════════════════════════ */}
            <section id="faq" className="mb-28 text-left max-w-4xl mx-auto">
              <Reveal>
                <div className="text-center space-y-4 mb-14">
                  <span className="text-[#D8BB94] font-elegant text-[12pt] font-semibold tracking-[0.2em] uppercase block">
                    Frequently Asked Questions
                  </span>
                  <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white tracking-wide leading-[1.45]">
                    자주 묻는 <span className="text-[#C2A477]">질문</span>
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
                      a: "본 상품은 스마트폰, 태블릿, PC 등에서 언제 어디서나 안전하고 비밀스럽게 열람할 수 있는 디지털 PDF 전자책 세트입니다. 별도의 실물 택배 배송이 없어 누구에게도 구매 사실을 들키지 않습니다."
                    },
                    {
                      num: "Q7",
                      q: "남자친구뿐만 아니라 여자친구 재회에도 적용되나요?",
                      a: "네. 남녀의 심리적 방어 기제 차이를 반영하여 각 성별에 맞춘 미세 조정 팁이 본편과 부록에 상세히 안내되어 있어 성별에 관계없이 적용하실 수 있습니다."
                    }
                  ].map((faq, idx) => {
                    const isOpen = openFaq === idx
                    return (
                      <div
                        key={idx}
                        className="reunion-faq-card rounded-2xl overflow-hidden transition-all duration-300"
                        style={{
                          background: 'linear-gradient(135deg, rgba(70, 43, 48, 0.08) 0%, rgba(49, 30, 39, 0.12) 100%)',
                          border: '1px solid rgba(177, 143, 119, 0.18)',
                          boxShadow: 'none',
                        }}
                      >
                        <button
                          type="button"
                          onClick={() => toggleFaq(idx)}
                          aria-expanded={isOpen}
                          className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-white/[0.02] transition-colors cursor-pointer"
                        >
                          <div className="flex items-center gap-3.5">
                            <span className="font-mono font-bold text-sm text-[#C2A477] shrink-0">
                              {faq.num}
                            </span>
                            <span className="text-base sm:text-lg font-elegant font-bold text-[#FAF7F2] break-keep">
                              {faq.q}
                            </span>
                          </div>
                          <ChevronDown
                            className={`w-5 h-5 text-[#C2A477] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''
                              }`}
                          />
                        </button>
                        {isOpen && (
                          <div className="px-5 pb-6 sm:px-6 sm:pb-7 text-sm sm:text-base text-[#EDE6DA]/85 leading-relaxed font-light border-t border-[#B49A70]/15 pt-4 break-keep">
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
                Section 20: 구매 전 안내
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-28 w-full max-w-[1280px] mx-auto">
              <Reveal>
                <div
                  className="rounded-3xl p-8 sm:p-10 md:p-12 text-left space-y-6 backdrop-blur-md transition-all duration-300"
                  style={{
                    background: 'linear-gradient(135deg, rgba(70, 43, 48, 0.08) 0%, rgba(49, 30, 39, 0.12) 100%)',
                    border: '1px solid rgba(177, 143, 119, 0.18)',
                    boxShadow: 'none',
                  }}
                >
                  <div className="space-y-2 border-b border-white/10 pb-4">
                    <span className="text-xs font-mono font-bold text-[#C2A477] uppercase tracking-wider block">
                      NOTICE
                    </span>
                    <h3 className="text-xl sm:text-2xl font-elegant font-bold text-[#FAF7F2]">
                      구매 전 안내
                    </h3>
                  </div>

                  <ul className="space-y-3.5 text-xs sm:text-sm md:text-[15px] text-[#EDE6DA]/85 leading-relaxed font-light break-keep">
                    <li className="flex items-start gap-2.5">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#C2A477] shrink-0" />
                      <span>본 상품은 실물 배송이 없는 디지털 전자책(PDF 파일) 상품입니다.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#C2A477] shrink-0" />
                      <span>결제 완료 후 안내된 방식(마이페이지 또는 등록된 이메일)에 따라 즉시 다운로드해 확인하실 수 있습니다.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#C2A477] shrink-0" />
                      <span>디지털 콘텐츠의 특성상 파일이 다운로드되거나 메일로 발송된 이후에는 단순 변심에 의한 환불이 제한될 수 있습니다.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#C2A477] shrink-0" />
                      <span>개인의 관계 상황, 상대방의 의사와 행동, 실천 방식에 따라 배움의 깊이와 체감되는 결과는 다를 수 있습니다.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#C2A477] shrink-0" />
                      <span>본 콘텐츠는 관계 심리의 이해, 자기인식 및 건강한 관계 형성을 돕기 위한 자기계발 콘텐츠이며, 전문적인 심리치료·정신건강 상담·법률 자문을 대체하지 않습니다.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#C2A477] shrink-0" />
                      <span>특정 상대방과의 재회, 연락 재개, 관계 회복 또는 상대방의 감정과 행동 변화를 무조건 보장하지 않습니다.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#C2A477] shrink-0" />
                      <span>
                        자세한 취소/환불 기준은 하단의{' '}
                        <Link href="/terms" className="text-[#C2A477] underline underline-offset-4 hover:text-white transition-colors">
                          이용약관
                        </Link>
                        {' '}및{' '}
                        <Link href="/refund" className="text-[#C2A477] underline underline-offset-4 hover:text-white transition-colors">
                          환불정책
                        </Link>
                        을 참고해 주시기 바랍니다.
                      </span>
                    </li>
                  </ul>
                </div>
              </Reveal>
            </section>

            <RedThreadDivider />

            {/* ═══════════════════════════════════════════════════════════════
                Section 21: 관계 변화 메시지 및 감성 텍스트 링크 배너
               ═══════════════════════════════════════════════════════════════ */}
            <section
              className="relative min-h-[320px] sm:min-h-[360px] md:min-h-0 aspect-auto md:aspect-[1672/941] overflow-hidden rounded-[32px] md:rounded-[40px] mb-20 group shadow-2xl w-full max-w-[1280px] mx-auto bg-[#341824]"
              style={{
                border: '1px solid rgba(190, 158, 108, 0.78)',
                boxShadow: '0 0 0 1px rgba(221, 190, 142, 0.08), 0 0 24px rgba(185, 145, 91, 0.09), 0 16px 45px rgba(0, 0, 0, 0.5)'
              }}
            >
              <Image
                src={productData.ctaImage}
                alt="재회비방 감성 배경 - 지금 필요한 것은 한 번 더 매달리는 연락이 아닐 수 있습니다"
                fill
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-cover object-[70%_center] md:object-center transition-transform duration-700 group-hover:scale-105"
                priority
              />

              {/* 텍스트 영역 (새 이미지 좌측 45~50% 플럼 버건디 그라데이션 영역 내 배치) */}
              <div className="absolute inset-0 flex flex-col justify-center p-6 sm:p-10 md:p-12 lg:p-16 text-left w-full max-w-[92%] sm:max-w-[70%] md:max-w-[50%] lg:max-w-[48%] z-10">
                <span className="text-[#C2A477] font-elegant text-xs md:text-sm tracking-[0.25em] md:tracking-[0.3em] uppercase mb-2.5 md:mb-3 block font-semibold">
                  A WORD FOR YOUR HEART
                </span>
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-elegant font-bold text-white mb-4 sm:mb-5 md:mb-6 leading-[1.4] md:leading-[1.42] break-keep">
                  지금 필요한 것은<br />
                  <span className="text-[#FAF7F2]">한 번 더 매달리는 연락이 아닐 수 있습니다</span>
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-[#EDE6DA]/85 font-light leading-relaxed mb-5 sm:mb-6 break-keep">
                  먼저 나의 상태를 바꾸고, 관계의 흐름을 다시 읽어야 합니다.<br className="hidden sm:inline" />
                  끊어진 인연 앞에서 무너지고 있다면, 이제 감정이 아니라 전략으로 다시 나를 세워보세요.
                </p>

                {/* 연애비급 방식의 배경 없는 감성 텍스트 링크 */}
                <div className="pt-1 sm:pt-2">
                  <a
                    href="#final-purchase"
                    className="inline-flex items-center gap-2 text-sm sm:text-base md:text-lg text-[#C2A477] hover:text-[#FAF7F2] font-elegant font-bold tracking-wide transition-all group/link cursor-pointer"
                  >
                    <span>끊어진 인연 다시 세우기</span>
                    <span className="text-xs transition-transform duration-300 group-hover/link:translate-x-1">→</span>
                  </a>
                </div>
              </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════
                Section 22: 최종 구매 CTA (Final Purchase)
               ═══════════════════════════════════════════════════════════════ */}
            <section id="final-purchase" className="scroll-mt-24 md:scroll-mt-28 pt-12 md:pt-16 mb-24 text-center max-w-4xl mx-auto px-4">
              <Reveal>
                <div className="text-center space-y-4 mb-10 md:mb-12">
                  <span className="text-[#D8BB94] font-elegant text-[12pt] font-semibold tracking-[0.2em] uppercase block">
                    TIME TO RECLAIM YOUR POWER
                  </span>
                  <h2 className="text-2xl sm:text-3xl md:text-[36px] lg:text-[40px] font-elegant font-bold text-white leading-[1.6] md:leading-[1.65] break-keep mb-5 md:mb-6">
                    잘못 보낸 카톡 한 줄로,<br />
                    <span className="text-[#C2A477]">마지막 재회의 문</span>마저 닫지 않도록
                  </h2>
                  <p className="text-sm sm:text-base md:text-[18px] text-[#EDE6DA]/80 leading-relaxed font-light max-w-2xl mx-auto break-keep">
                    감정에 휩쓸려 보내는 새벽 연락은 영원한 차단을 부를 뿐입니다.<br />
                    지금 바로 《재회비방 3종 올인원 세트》로 상대방의 무의식을 흔드는<br />
                    냉철한 심리전을 시작하십시오.
                  </p>
                </div>

                {/* 안쪽 구매 카드 (상자 가로폭을 max-w-[820px]로 확장하여 상품명 한 줄 표시 최적화) */}
                <div
                  className="rounded-3xl px-6 sm:px-10 md:px-12 py-8 sm:py-10 md:py-12 relative overflow-hidden shadow-2xl max-w-[820px] mx-auto"
                  style={{
                    background: 'linear-gradient(180deg, #542638 0%, #44202e 52%, #2c1620 100%)',
                    border: '1px solid rgba(190, 158, 108, 0.78)',
                    boxShadow: '0 0 0 1px rgba(221, 190, 142, 0.08), 0 0 24px rgba(185, 145, 91, 0.12), 0 12px 40px rgba(84, 38, 56, 0.40)'
                  }}
                >
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="mb-3">
                        <ReunionBadge>
                          올인원 완성형 패키지
                        </ReunionBadge>
                      </div>
                      {/* 1) 상품명 */}
                      <h3 className="text-lg sm:text-xl md:text-2xl font-elegant font-bold text-white leading-[1.4] break-keep mb-2">
                        백도화 재회비방 올인원 패키지 (PDF 3종 + 회향연부 부적)
                      </h3>
                      {/* 2) 구성 안내 */}
                      <p className="text-[18px] text-[#FAF7F2] font-semibold break-keep mb-1.5">
                        재회비방 본편 · 실전 부록 1 · 실전 부록 2
                      </p>
                      {/* 3) 특별 부록 안내 */}
                      <p className="text-[15px] sm:text-[16px] text-[#C2A477] font-medium break-keep">
                        ✦ 특별 부록 회향연부(回向緣符) 디지털 부적
                      </p>
                    </div>

                    <div className="py-4 border-y border-white/10 space-y-1 text-center">
                      <span className="text-xs text-[#EDE6DA]/50 line-through">정가 79,000원</span>
                      <div className="text-3xl sm:text-4xl font-elegant font-bold text-[#C2A477]">
                        런칭 특가 19,000원 <span className="text-sm text-white/70 font-sans font-normal ml-2">(76% OFF)</span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 pt-2 items-stretch sm:items-center w-full">
                      <button
                        type="button"
                        onClick={handleAddToCart}
                        className="py-4 px-6 rounded-xl font-elegant font-bold text-sm md:text-base border border-[#B49A70]/60 text-[#B59C88] hover:bg-[#462D38]/30 hover:border-[#B49A70]/70 transition-all duration-300 shrink-0 whitespace-nowrap text-center bg-transparent order-2 sm:order-1"
                      >
                        장바구니 담기
                      </button>
                      <button
                        type="button"
                        onClick={handlePurchase}
                        className="reunion-cta-btn flex-1 py-4 px-8 rounded-xl font-elegant font-bold text-base md:text-lg hover:scale-[1.01] active:scale-95 flex items-center justify-center gap-2 text-[#FAF7F2] order-1 sm:order-2 cursor-pointer"
                      >
                        <span>재회비방 19,000원에 구매하기</span>
                        <ChevronRight className="w-5 h-5 text-[#FAF7F2] shrink-0" />
                      </button>
                    </div>

                    <p className="text-[11px] text-[#EDE6DA]/50 text-center font-light pt-1">
                      결제 즉시 마이페이지에서 다운로드 및 열람이 가능합니다.
                    </p>
                  </div>
                </div>
              </Reveal>
            </section>

            <RedThreadDivider />

            {/* ═══════════════════════════════════════════════════════════════
                Section 23: Policy Links & Footer
               ═══════════════════════════════════════════════════════════════ */}
            <section className="pb-10 text-center">
              <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-[#EDE6DA]/50">
                <Link href="/terms" className="hover:text-[#C2A477] transition-colors">이용약관</Link>
                <span>|</span>
                <Link href="/privacy" className="hover:text-[#C2A477] transition-colors">개인정보처리방침</Link>
                <span>|</span>
                <Link href="/refund" className="hover:text-[#C2A477] transition-colors">배송 및 환불정책</Link>
              </div>
            </section>

          </div>
        </div>

        {/* 📱 모바일 화면 하단 고정 구매 바 */}
        <MobileStickyBuyBar
          price={productData.price}
          onPurchase={handlePurchase}
          buttonText="재회비방 구매하기 →"
        />

        <Footer />
      </GlobalBackground>
    </main>
  )
}
