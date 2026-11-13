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
  MessageSquare,
  Compass
} from 'lucide-react'
import RecommendedForCards, { hanjiFiberSvg } from '@/components/RecommendedForCards'
import MobileStickyBuyBar from '@/components/MobileStickyBuyBar'
import { seoncheonCodeAssets } from './assets'

// ═══════════════════════════════════════════════════════════════════════════
// 📦 상품 기본 정보 및 출시 준비 설정
// ═══════════════════════════════════════════════════════════════════════════
const productData = {
  productId: 'seoncheon-code-bigi',
  slug: 'seoncheon-code-bigi',
  pageSlug: 'seoncheon-code-bigi',
  title: '선천코드 비기',
  titleHanja: '先天코드 祕記',
  titleEn: 'Seoncheon Code Secret',
  type: 'digital_ebook',
  category: 'reports',
  path: '/reports/seoncheon-code-bigi',
  checkoutUrl: '#',
  price: 0,
  regularPrice: 0,
  discountRate: '출간 준비 중',

  topBannerImage: '/image/seoncheon-code-secret-book.webp',
  heroImage: '/image/seoncheon-code-secret-book.webp',
  overviewImage: '/image/seoncheon-code-secret-book.webp',
  recommendedImage: '/image/seoncheon-code-secret-book.webp',
  formulaImage: '/image/seoncheon-code-secret-book.webp',
  bookIntroImage: '/image/seoncheon-code-secret-book.webp',
  premiumImage: '/image/seoncheon-code-secret-book.webp',
  ctaImage: '/image/seoncheon-code-secret-book.webp',

  curriculumImage: '/image/seoncheon-code-secret-book.webp',
  packageImage: '/image/seoncheon-code-secret-book.webp',
  reunionLawImage: '/image/seoncheon-code-secret-book.webp',
  sovereignImage: '/image/seoncheon-code-secret-book.webp',
  bookPreviewGuideImage: '/image/seoncheon-code-secret-book.webp',
  bookPreviewToolsImage: '/image/seoncheon-code-secret-book.webp',
  bookPreviewJourneyImage: '/image/seoncheon-code-secret-book.webp',
  anxietyImage: '/image/seoncheon-code-secret-book.webp',
}

// 🏷️ 통일된 묵자색 뱃지 컴포넌트 (배경 #493740 · 테두리 #B7A18A · 텍스트 #F2EAE0)
function SeoncheonBadge({
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
        background: '#493740',
        border: '1px solid #B7A18A',
        color: '#F2EAE0',
        lineHeight: 1.3,
      }}
    >
      {children}
    </span>
  )
}

// 🖼️ 실전 체감 사례 이미지 슬롯 컴포넌트
function SeoncheonCaseImageSlot({
  src,
  alt,
  placeholderText,
  className = '',
}: {
  src: string
  alt: string
  placeholderText: string
  className?: string
}) {
  const [hasError, setHasError] = useState(false)

  return (
    <div className={`relative w-full aspect-[3/4] rounded-2xl md:rounded-3xl overflow-hidden border border-[#B7A18A]/30 shadow-2xl bg-[#1C171D] transition-all duration-300 ${className}`}>
      {!hasError && src ? (
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
            background: 'radial-gradient(ellipse at 50% 35%, rgba(73, 55, 64, 0.45) 0%, rgba(28, 23, 29, 0.95) 100%)',
          }}
        >
          <div className="w-14 h-14 rounded-2xl bg-[#30262F]/80 border border-[#B7A18A]/50 flex items-center justify-center text-[#B7A18A] shadow-md">
            <ImageIcon className="w-7 h-7 text-[#B7A18A]" />
          </div>
          <div className="space-y-2 max-w-xs">
            <span
              className="inline-flex items-center justify-center py-[4px] px-[10px] rounded-[6px] text-xs font-semibold text-[#F2EAE0]"
              style={{
                background: '#493740',
                border: '1px solid #B7A18A',
              }}
            >
              실전 체감 사례
            </span>
            <p className="text-sm font-elegant font-bold text-[#FAF7F2] break-keep">
              {alt}
            </p>
            <p className="text-xs text-[#EDE6DA]/70 font-light leading-relaxed break-keep">
              {placeholderText}
            </p>
          </div>
          <p className="text-[11px] text-[#B7A18A]/70 tracking-wider">
            ※ 정식 발매 시 고해상도 수묵 추상 일러스트가 적용됩니다
          </p>
        </div>
      )}
    </div>
  )
}

// 🖼️ 하이브리드 이미지 슬롯 컴포넌트
function HybridImageSlot({
  assetKey,
  className = '',
}: {
  assetKey: keyof typeof seoncheonCodeAssets
  className?: string
}) {
  const asset = seoncheonCodeAssets[assetKey]
  const [hasError, setHasError] = useState(false)

  if (!asset) {
    return (
      <div className={`relative w-full rounded-2xl border border-[#B7A18A]/30 bg-[#241E25] flex items-center justify-center p-6 text-center ${className}`}>
        <span className="text-xs text-[#EDE6DA]/60">이미지 준비 중</span>
      </div>
    )
  }

  const isRealImage = asset.src && asset.src.trim() !== '' && !hasError

  return (
    <div
      className={`relative w-full rounded-2xl md:rounded-3xl overflow-hidden border border-[#B7A18A]/30 shadow-2xl bg-[#1C171D] transition-all duration-300 ${className}`}
    >
      {isRealImage ? (
        <Image
          src={asset.src}
          alt={asset.alt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className={`${asset.objectFit === 'contain' ? 'object-contain' : 'object-cover'} transition-opacity duration-300`}
          onError={() => setHasError(true)}
          priority={assetKey === 'hero'}
        />
      ) : (
        <div
          className="w-full h-full flex flex-col items-center justify-center p-8 text-center space-y-4"
          style={{
            background: 'radial-gradient(ellipse at 50% 35%, rgba(73, 55, 64, 0.45) 0%, rgba(28, 23, 29, 0.95) 100%)',
          }}
        >
          <div className="w-14 h-14 rounded-2xl bg-[#30262F]/80 border border-[#B7A18A]/50 flex items-center justify-center text-[#B7A18A] shadow-md">
            <ImageIcon className="w-7 h-7 text-[#B7A18A]" />
          </div>
          <div className="space-y-2 max-w-xs">
            <span
              className="inline-flex items-center justify-center py-[4px] px-[10px] rounded-[6px] text-xs font-semibold text-[#F2EAE0]"
              style={{
                background: '#493740',
                border: '1px solid #B7A18A',
              }}
            >
              {asset.placeholderLabel}
            </span>
            <p className="text-sm font-elegant font-bold text-[#FAF7F2] break-keep">
              {asset.alt}
            </p>
            <p className="text-xs text-[#EDE6DA]/70 font-light leading-relaxed break-keep">
              {asset.description}
            </p>
          </div>
          <p className="text-[11px] text-[#B7A18A]/70 tracking-wider">
            ※ 정식 발매 시 고해상도 수묵 추상 일러스트가 적용됩니다
          </p>
        </div>
      )}
    </div>
  )
}

// 📑 도서별 상세 목차 아코디언 컴포넌트
function BookTocAccordion({
  items,
  badgeText = '목차 미리보기',
}: {
  items: { chapter: string; title: string; desc: string }[]
  badgeText?: string
}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="pt-4 border-t border-[#B7A18A]/20">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-3 px-4 rounded-xl border border-[#B7A18A]/30 bg-[#30262F]/40 hover:bg-[#493740]/60 hover:border-[#B7A18A]/60 transition-all flex items-center justify-between text-left group cursor-pointer"
      >
        <div className="flex items-center gap-2.5">
          <BookOpen className="w-4 h-4 text-[#B7A18A] group-hover:text-[#FAF7F2] transition-colors" />
          <span className="text-sm font-elegant font-bold text-[#FAF7F2] group-hover:text-[#B7A18A] transition-colors">
            {badgeText}
          </span>
          <span className="text-xs text-[#EDE6DA]/50 font-normal">
            ({items.length}개 장)
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-[#B7A18A]">
          <span>{isOpen ? '목차 접기' : '목차 펼쳐보기'}</span>
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          />
        </div>
      </button>

      {isOpen && (
        <div className="mt-3 p-4 sm:p-5 rounded-xl border border-[#B7A18A]/20 bg-[#1C171D]/95 space-y-3.5 transition-all animate-in fade-in duration-300">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="text-left border-b border-white/5 last:border-b-0 pb-3 last:pb-0"
            >
              <div className="flex items-baseline gap-2">
                <span className="text-xs font-mono font-bold text-[#B7A18A] shrink-0">
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
    chapter: '프롤로그',
    title: '왜 우리는 특정 사람에게 끌리고, 반복해서 상처받을까?',
    desc: '인연의 엇갈림은 우연이 아닙니다. 태어난 순간 새겨진 선천코드와 5대 본능의 역학.'
  },
  {
    chapter: 'PART 1',
    title: '선천코드의 원리: 사주 오행이 설계한 인간 심리의 지도',
    desc: '목·화·토·금·수 5대 기운의 결핍과 과다가 만들어내는 무의식적 끌림과 관계의 패턴.'
  },
  {
    chapter: 'PART 2',
    title: '십성(十星) 5대 본능: 사람을 움직이는 5가지 무의식 엔진',
    desc: '비겁·식상·재성·관성·인성 5대 본능이 지배하는 상대방의 욕망과 방어기제 완전 분석.'
  },
  {
    chapter: 'PART 3',
    title: '10대 일간(日干) 페르소나: 나와 상대의 타고난 성정과 매혹 코드',
    desc: '갑을병정무기경신임계 10대 일간 캐릭터 도감과 각 일간을 무장해제시키는 핵심 비결.'
  },
  {
    chapter: 'PART 4',
    title: '도화(桃花)와 매혹의 비밀: 끌림을 만드는 기운의 역학',
    desc: '자오묘유 4대 도화의 본질과 상대의 시선을 사로잡는 나만의 고유한 매혹 발현법.'
  },
  {
    chapter: 'PART 5',
    title: '이상형과 배우자 판별: 궁합과 인연의 깊이를 읽는 눈',
    desc: '일지와 월지로 판별하는 운명적 끌림, 상생의 동반자 vs 갈등의 원인 감별법.'
  },
  {
    chapter: 'PART 6',
    title: '관계의 그림자와 갈등 극복: 상생과 상극을 다스리는 지혜',
    desc: '피할 수 없는 기운의 충돌을 완화하고 차가워진 관계를 회복하는 오행 조화 공식.'
  },
  {
    chapter: 'PART 7',
    title: '인연의 주권자가 되는 법: 선천코드를 넘어 나만의 운명 개척하기',
    desc: '타인에게 휘둘리던 관계의 을(乙)에서 벗어나, 내 삶과 인연의 진정한 주권자로 거듭나기.'
  },
  {
    chapter: '에필로그',
    title: '타고난 코드를 알고 나면, 비로소 자유로워진다',
    desc: '나를 온전히 이해하는 순간 시작되는 평온하고 당당한 인연의 완성.'
  }
]

const manualBookToc = [
  {
    chapter: 'CHAPTER 1',
    title: '10대 일간별 성향·연애 스타일·핵심 결핍 해독',
    desc: '상대방의 일간 글자 하나로 속마음, 약점, 대화 선호 방식까지 꿰뚫는 실전 분석표.'
  },
  {
    chapter: 'CHAPTER 2',
    title: '십성 5대 본능으로 읽는 상대의 무의식 방어기제',
    desc: '회피형, 불안형, 통제형 등 관계의 저항을 불러일으키는 무의식 스위치 해제법.'
  },
  {
    chapter: 'CHAPTER 3',
    title: '오행 불균형에 따른 관계 갈등 처방전',
    desc: '기운이 부딪칠 때 어떤 말과 태도로 상극의 에너지를 상생으로 바꿀 것인가.'
  },
  {
    chapter: 'CHAPTER 4',
    title: '만세력 앱으로 나와 상대의 선천코드 3분 판독법',
    desc: '생년월일시만 알면 누구나 바로 따라 할 수 있는 일간·일지·월지 핵심 3글자 분석 가이드.'
  }
]

const messageBookToc = [
  {
    chapter: 'PART 1',
    title: '4대 도화(자·오·묘·유)의 매혹 특성과 발현 조건',
    desc: '숨겨진 나만의 도화 기운을 활성화하여 은은하고 거부할 수 없는 매력을 만드는 법.'
  },
  {
    chapter: 'PART 2',
    title: '일지와 월지로 보는 이상형과 실제 인연의 간극',
    desc: '머리로 바라는 이상형과 무의식이 진정으로 갈망하는 파트너의 차이 규명.'
  },
  {
    chapter: 'PART 3',
    title: '배우자 자리(일지)의 십성으로 읽는 미래 관계 흐름',
    desc: '결혼운, 장기적 파트너십의 안정성, 평생 함께할 동반자의 기운 판별.'
  },
  {
    chapter: 'PART 4',
    title: '나와 잘 맞는 기운 vs 피해야 할 상극 기운 구별법',
    desc: '나의 에너지를 채워주는 귀인(貴人)과 소모시키는 악연(惡緣)을 분별하는 혜안.'
  }
]

export default function SeoncheonCodeBigiPage() {
  useScrollAnimation()
  const router = useRouter()
  const [isAdminPreview, setIsAdminPreview] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search)
      if (params.get('preview') === 'admin' || params.get('admin') === 'true' || process.env.NODE_ENV === 'development') {
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
      title: "반복되던 연애 갈등과 상처 극복",
      image: "/image/seoncheon-code-secret-book.webp",
      imagePlaceholder: "선천코드 분석: 먹빛 수묵 서재, 은은한 등불, 나의 기운을 돌아보는 시간",
      cases: [
        {
          num: "사례 01 · 인연 패턴 자각",
          tag: "#반복되는패턴 #자기이해",
          quote: "왜 매번 나를 불안하게 만드는 사람에게만 끌렸는지, 내 선천코드의 결핍을 알고 나니 단숨에 이해되었습니다."
        },
        {
          num: "사례 02 · 감정 소모 중단",
          tag: "#자존감회복 #중심세우기",
          quote: "상대의 무심한 반응에 하루 종일 무너지던 습관을 멈추고, 내 고유한 에너지를 채우는 법을 알게 되었습니다."
        }
      ]
    },
    {
      id: 2,
      title: "상대의 무의식 심리와 대화법 변화",
      image: "/image/seoncheon-code-secret-book.webp",
      imagePlaceholder: "십성 본능 해독: 오행의 균형을 맞추는 차분한 다도와 비첩",
      cases: [
        {
          num: "사례 03 · 상대 본능 해독",
          tag: "#십성본능 #대화전략",
          quote: "상대가 원하던 것은 설득이 아닌 '인정'이었습니다. 상대의 일간 코드를 파악한 후 대화의 주도권이 완전히 바뀌었습니다."
        },
        {
          num: "사례 04 · 갈등 완화와 조화",
          tag: "#오행상생 #갈등해결",
          quote: "사사건건 부딪히던 상극의 불씨를 어떻게 상생으로 전환해야 하는지 실전 지침대로 적용하자 관계가 편안해졌습니다."
        }
      ]
    },
    {
      id: 3,
      title: "나만의 고유한 매혹과 인연의 주권 회복",
      image: "/image/seoncheon-code-secret-book.webp",
      imagePlaceholder: "인연의 주권자: 단아하고 당당한 매혹을 깨운 여인의 모습",
      cases: [
        {
          num: "사례 05 · 도화 기운 활성화",
          tag: "#매혹의비밀 #도화발현",
          quote: "남의 시선에 억지로 맞추던 매력이 아니라, 내 타고난 도화 코드를 살리자 주변 사람들의 태도가 확연히 달라졌습니다."
        },
        {
          num: "사례 06 · 당당한 선택과 확신",
          tag: "#인연의주권자 #배우자복덕",
          quote: "더 이상 끌려다니는 을(乙)이 아닌, 나에게 진정으로 이로운 인연을 스스로 알아보고 선택하는 확신이 생겼습니다."
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

  // 구매 버튼 클릭 핸들러 (출간 준비 중 안내 모달/알림)
  const handlePurchase = (e: React.MouseEvent) => {
    e.preventDefault()
    alert('《선천코드 비기》는 현재 정식 출간 준비 중입니다. 곧 만나보실 수 있습니다.')
  }

  // 장바구니 추가 핸들러 (출간 준비 중 안내)
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    alert('《선천코드 비기》는 현재 정식 출간 준비 중입니다. 곧 오픈될 예정입니다.')
  }

  // 백도화 전통 묵자실 장식 구분선 (앤티크 샴페인 골드 포인트)
  const AntiqueDivider = () => (
    <div className="flex items-center justify-center my-20 md:my-28 opacity-70">
      <div className="h-[1px] w-16 md:w-32 bg-gradient-to-r from-transparent via-[#B7A18A]/40 to-[#493740]" />
      <div className="mx-4 flex items-center justify-center">
        <svg className="w-5 h-5 text-[#B7A18A] animate-pulse" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
          <path d="M12 7V17M7 12H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="12" cy="12" r="2.5" fill="currentColor" />
        </svg>
      </div>
      <div className="h-[1px] w-16 md:w-32 bg-gradient-to-l from-transparent via-[#B7A18A]/40 to-[#493740]" />
    </div>
  )

  return (
    <main className="detail-page relative min-h-screen bg-[#0E0C0F] text-[#F2EAE0] font-sans selection:bg-[#493740] selection:text-[#FAF7F2] pb-24 md:pb-0">
      <GlobalBackground
        src="/image/love-code-bg.png"
        brightCenter={false}
        customBaseOverlay={
          <div className="absolute inset-0 w-full h-full pointer-events-none">
            {/* 1. 우측 은은한 먹묵자색 라이트 오라 */}
            <div
              className="absolute inset-0"
              style={{
                background: `
                  radial-gradient(ellipse 70% 50% at 88% 22%, rgba(73, 55, 64, 0.22) 0%, rgba(48, 38, 47, 0.10) 50%, transparent 75%),
                  radial-gradient(circle 600px at 90% 65%, rgba(55, 45, 53, 0.15) 0%, transparent 65%)
                `,
              }}
            />

            {/* 2. 메인 가로 그라데이션 (먹빛 묵자색 베이스) */}
            <div
              className="absolute inset-0"
              style={{
                background: `
                  linear-gradient(
                    95deg,
                    #0E0C0F 0%,
                    #151216 35%,
                    rgba(24, 20, 25, 0.98) 55%,
                    rgba(36, 30, 37, 0.94) 75%,
                    rgba(48, 38, 47, 0.88) 100%
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
                  rgba(14, 12, 15, 0.35) 75%,
                  rgba(10, 8, 11, 0.75) 100%
                ),
                linear-gradient(
                  to right,
                  rgba(10, 8, 11, 0.65) 0%,
                  rgba(10, 8, 11, 0.25) 25%,
                  transparent 50%
                )
              `,
            }}
          />
        }
      >
        <Navigation />

        <div className="relative pt-24 md:pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="max-w-5xl mx-auto text-center">

            {/* ═══════════════════════════════════════════════════════════════
                Section 1: Hero Section (히어로 및 상품 소개)
               ═══════════════════════════════════════════════════════════════ */}
            <section className="text-center mb-28">
              <Reveal delayMs={100}>
                {/* 상단 라벨 */}
                <div className="mb-8">
                  <SeoncheonBadge className="text-xs md:text-[13px] py-1.5 px-5 tracking-[0.2em] uppercase font-elegant">
                    PREMIUM INNER CODE &amp; DESTINY PSYCHOLOGY EBOOK
                  </SeoncheonBadge>
                </div>

                {/* 대제목 */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-elegant font-bold text-white tracking-tight mb-8 leading-tight">
                  <span className="font-normal mr-3">先天코드 祕記</span>
                  <span className="text-[#B7A18A]">선천코드 비기</span>
                </h1>

                {/* 1. 최상단: 가로형 풀 이미지 (16:9 비율, 1280px 매칭) */}
                <div className="relative w-full aspect-[16/9] md:aspect-[1672/941] rounded-2xl md:rounded-3xl overflow-hidden border border-[#B7A18A]/30 shadow-2xl bg-black/40 mb-10 flex items-center justify-center">
                  <Image
                    src={productData.topBannerImage}
                    alt="선천코드 비기 공식 상단 풀 배너"
                    fill
                    sizes="(max-width: 1280px) 100vw, 1280px"
                    className="object-cover"
                    priority
                  />
                </div>

                {/* 2. 서브카피 & 설명 */}
                <div className="max-w-4xl lg:max-w-5xl mx-auto space-y-7 mb-20 px-6 text-center">
                  <p className="text-2xl md:text-[36px] font-elegant font-bold text-[#B7A18A] leading-[1.4] break-keep md:whitespace-nowrap">
                    매혹과 인연의 비밀을 푸는 사주 오행 심리 암호
                  </p>

                  <div className="flex items-center justify-center py-1">
                    <div
                      className="h-[1.5px] w-56 sm:w-72 md:w-96 rounded-full"
                      style={{
                        background: 'linear-gradient(90deg, transparent 0%, rgba(183, 161, 138, 0.2) 15%, rgba(183, 161, 138, 0.85) 42%, rgba(220, 205, 185, 0.95) 50%, rgba(183, 161, 138, 0.85) 58%, rgba(183, 161, 138, 0.2) 85%, transparent 100%)',
                        boxShadow: '0 0 12px rgba(183, 161, 138, 0.45)'
                      }}
                    />
                  </div>

                  <div className="text-[16px] md:text-[18px] text-[#F2EAE0] leading-[1.8] font-normal space-y-3.5 break-keep">
                    <p>
                      왜 우리는 특정 사람에게 이토록 강렬하게 끌리고, 매번 비슷한 상처 앞에서 무너질까요?
                    </p>
                    <p>
                      그 해답은 감정이 아닌, 태어난 순간 새겨진 &lsquo;오행의 본능(선천코드)&rsquo;에 숨겨져 있습니다.
                    </p>
                    <p className="font-semibold text-white">
                      오늘부터 《선천코드 비기》와 함께 나의 타고난 기운을 깨우고, 상대의 심리 암호를 해독하는 절대 비기를 장착하십시오.
                    </p>
                  </div>
                </div>

                {/* 3. Hero Banner 패키지 소개 상자 (단일 구매 영역 - 딥 먹묵자색) */}
                <div
                  className="rounded-3xl relative overflow-hidden shadow-2xl"
                  style={{
                    background: 'linear-gradient(115deg, #241E25 0%, #30262F 52%, #1C171D 100%)',
                    border: '1px solid rgba(183, 161, 138, 0.35)',
                    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.35)'
                  }}
                >
                  <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 items-stretch break-keep">
                    {/* 좌측: 통합 배지, 큰 제목, 설명, 가격, 구매/장바구니 버튼 */}
                    <div className="lg:col-span-7 w-full flex flex-col justify-between space-y-6 text-left p-6 sm:p-8 md:p-10 lg:p-12">
                      <div className="space-y-4">
                        <div className="flex flex-wrap items-center gap-2.5">
                          <SeoncheonBadge>
                            선천코드 비기 3종 올인원 세트
                          </SeoncheonBadge>
                        </div>

                        <h2 className="text-2xl sm:text-3xl md:text-[34px] font-elegant font-bold text-[#FAF7F2] leading-[1.6] md:leading-[1.65] break-keep">
                          반복되는 관계 패턴을 깨고,<br />
                          나만의 고유한 매혹을 깨우는 <span className="text-[#B7A18A]">선천코드 비기</span>
                        </h2>

                        <div className="text-[16px] md:text-[18px] text-[#EDE6DA]/90 space-y-3 leading-[1.8] font-light">
                          <p>
                            단순한 미신이나 통계가 아닙니다. 십성 5대 본능, 10대 일간 페르소나, 도화의 심리, 이상형 및 배우자 복덕 판별까지.
                          </p>
                          <p>
                            나와 상대의 무의식을 지배하는 오행의 암호를 해독하여 평생 흔들리지 않는 인연의 주도권을 되찾으세요.
                          </p>
                        </div>
                      </div>

                      <div className="space-y-5 pt-2">
                        <div className="border-b border-white/10 pb-4">
                          <div className="flex items-baseline gap-3">
                            <span className="text-2xl sm:text-3xl font-elegant font-bold text-[#B7A18A]">
                              정식 출간 준비 중
                            </span>
                            <span className="text-sm text-[#F2EAE0]/70 font-sans">
                              (COMING SOON)
                            </span>
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 pt-1 items-stretch sm:items-center w-full">
                          <button
                            type="button"
                            onClick={handleAddToCart}
                            className="py-3.5 px-5 sm:px-6 rounded-xl font-elegant font-bold text-sm md:text-base border border-[#B7A18A]/60 text-[#B7A18A] hover:bg-[#493740]/40 hover:border-[#B7A18A]/80 transition-all duration-300 shrink-0 whitespace-nowrap text-center bg-transparent order-2 sm:order-1 cursor-pointer"
                          >
                            출간 알림 예약
                          </button>
                          <button
                            type="button"
                            onClick={handlePurchase}
                            className="flex-1 py-3.5 px-6 rounded-xl font-elegant font-bold text-sm md:text-base transition-all duration-300 flex items-center justify-center gap-2 text-[#FAF7F2] order-1 sm:order-2 cursor-pointer opacity-90 hover:opacity-100"
                            style={{
                              background: 'linear-gradient(135deg, #493740 0%, #30262F 100%)',
                              border: '1px solid #B7A18A',
                              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.4)'
                            }}
                          >
                            <span>선천코드 비기 준비 중</span>
                            <ChevronRight className="w-4 h-4 text-[#FAF7F2] shrink-0" />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* 우측: 대표 책 이미지 목업 */}
                    <div className="lg:col-span-5 relative w-full min-h-[300px] sm:min-h-[360px] lg:min-h-full p-6 sm:p-8 flex items-center justify-center bg-black/20">
                      <div className="relative w-full max-w-[320px] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-[#B7A18A]/30">
                        <Image
                          src={productData.heroImage}
                          alt="선천코드 비기 책 표지"
                          fill
                          sizes="(max-width: 1024px) 100vw, 40vw"
                          className="object-cover"
                          priority
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </section>

            <AntiqueDivider />

            {/* ═══════════════════════════════════════════════════════════════
                Section 2: Problem Diagnosis & Resonance (문제 진단·감정 공감·체크리스트)
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-[64px] md:mb-[112px] text-left w-full max-w-[1280px] mx-auto">
              <Reveal>
                <div className="space-y-10">
                  <div className="text-center max-w-3xl mx-auto space-y-5">
                    <span className="text-[#B7A18A] font-elegant text-[12pt] font-semibold tracking-[0.2em] uppercase block">
                      PAIN POINT &amp; HOOK
                    </span>
                    <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white leading-[1.4] break-keep">
                      당신의 인연이 왜 매번 비슷한<br />
                      <span className="text-[#B7A18A]">&lsquo;상처&rsquo;와 &lsquo;갈등&rsquo;</span>으로 끝났을까?
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
                        <p className="text-xs md:text-sm text-[#B7A18A] font-medium tracking-wide">
                          반복되는 어긋남, 나를 잃어버리는 인연의 고리
                        </p>
                        <p className="text-[16px] md:text-[18px] text-[#FAF7F2] font-elegant font-bold tracking-wide break-keep">
                          세 개 이상 해당된다면 지금 즉시 내 코드를 점검하십시오
                        </p>
                      </div>
                    </div>

                    {/* 본문 텍스트 및 자가진단 체크리스트 */}
                    <div className="lg:col-span-7 space-y-6 break-keep">
                      <div
                        className="text-[16px] md:text-[18px] text-[#F2EAE0] leading-[1.8] font-normal p-6 sm:p-7 md:p-8 rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.3)] space-y-3.5 break-keep h-auto"
                        style={{
                          background: 'linear-gradient(115deg, #30262F 0%, #241E25 48%, #1C171D 100%)',
                          border: '1px solid rgba(183, 161, 138, 0.35)'
                        }}
                      >
                        <p>
                          사람마다 타고난 체질이 다르듯, 인연을 맺고 사랑을 느끼는 심리적 메커니즘 또한 저마다 다릅니다.
                        </p>
                        <p>
                          내 선천코드의 결핍을 알지 못하면, 늘 나를 갉아먹는 상대에게 끌리고 끝내 버림받을까 두려워하는 악순환을 반복하게 됩니다.
                        </p>
                        <p>
                          그 굴레를 끊어내려면 상대의 마음에 매달리는 대신 <strong className="text-[#FAF7F2] font-semibold">&lsquo;나와 상대의 선천적 본능 암호&rsquo;</strong>를 명확히 해독해야 합니다.
                        </p>
                      </div>

                      <div className="space-y-3">
                        <h3 className="text-[20px] sm:text-[22px] md:text-[24px] font-elegant font-bold text-[#B7A18A] leading-[1.4] flex items-center gap-2.5 break-keep">
                          <AlertTriangle className="w-6 h-6 text-[#B7A18A] shrink-0" />
                          나의 인연 코드 위험도 자가진단 체크리스트
                        </h3>

                        <div className="space-y-2.5">
                          {[
                            "처음에는 뜨겁게 타오르다 얼마 못 가 차갑게 식어버리는 연애가 반복된다",
                            "상대방의 사소한 말투나 표정 하나에도 극심한 불안과 거절 공포를 느낀다",
                            "나를 함부로 대하거나 감정적으로 무심한 사람에게 유독 더 강하게 집착한다",
                            "‘내가 다 맞추면 변하겠지’라며 내 욕구와 감정을 억누르고 희생해왔다",
                            "헤어진 뒤에도 ‘왜 매번 이런 사람만 만날까’ 자책하며 끝없는 후회에 빠진다"
                          ].map((item, idx) => (
                            <div
                              key={idx}
                              className="p-4 rounded-xl border border-white/10 bg-white/[0.02] flex items-start gap-3.5 hover:border-[#B7A18A]/40 transition-colors"
                            >
                              <div
                                style={{
                                  backgroundColor: '#493740',
                                  borderColor: 'rgba(183, 161, 138, 0.55)'
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

                  {/* ════ 불안의 순간 공감 (좌측 55% + 우측 45% 이미지) ════ */}
                  <div className="!mt-16 sm:!mt-20 md:!mt-28 pt-10 md:pt-14 border-t border-[#B7A18A]/20">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
                      {/* 좌측 55% 공감 문구 */}
                      <div className="lg:col-span-7 space-y-5 text-left break-keep">
                        <span className="text-[#B7A18A] font-elegant text-xs md:text-sm font-semibold tracking-[0.25em] uppercase block">
                          THE MOMENT OF ANXIETY
                        </span>
                        <h3 className="text-2xl md:text-[36px] font-elegant font-bold text-white leading-[1.4] break-keep">
                          진심을 다해 마음을 주었는데,<br />
                          <span className="text-[#B7A18A]">왜 관계는 늘 상처와 불안으로 끝났을까요?</span>
                        </h3>
                        <div className="space-y-3.5 text-[18px] text-[#F2EAE0] leading-[1.8] font-normal break-keep">
                          <p>
                            상대의 마음을 얻기 위해 내 자존감을 깎아내리며 맞추던 날들.<br />
                            작은 침묵 하나에도 심장이 덜컥 내려앉던 고통스러운 시간들.
                          </p>
                          <p>
                            더 많이 사랑을 주고 더 헌신할수록,<br />
                            어쩐지 상대는 나를 더 당연하게 여기며 멀어져만 갔습니다.
                          </p>
                        </div>
                        <div className="pt-6 border-t border-[#B7A18A]/25 mt-6">
                          <p className="text-[#FAF7F2] font-elegant font-medium text-[18px] md:text-[19px] leading-[1.75] break-keep">
                            어쩌면 지금 우리에게 필요한 건,<br className="hidden sm:inline" />
                            맹목적인 희생이나 자책이 아니라<br />
                            <span className="text-[#B7A18A] font-semibold">태어난 순간 새겨진 나의 선천코드와 본능의 결핍부터 들여다보는 일</span>입니다.
                          </p>
                        </div>
                      </div>

                      {/* 우측 45% 불안 이미지 (3:4 비율) */}
                      <div className="lg:col-span-5 w-full flex flex-col items-center">
                        <div className="relative w-full aspect-[3/4] rounded-2xl md:rounded-3xl overflow-hidden border border-[#B7A18A]/35 shadow-[0_12px_40px_rgba(0,0,0,0.5)] bg-black/40 flex items-center justify-center">
                          <Image
                            src={productData.anxietyImage}
                            alt="인연의 엇갈림과 관계의 불안 공감"
                            fill
                            sizes="(max-width: 1024px) 100vw, 45vw"
                            className="object-cover"
                            priority
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* ════ 인연의 역설 3대 공감 카드 (짙은 먹묵자색 글라스) ════ */}
                  <div className="!mt-[64px] sm:!mt-[72px] md:!mt-[120px] w-full max-w-[1280px] mx-auto">
                    <div className="text-center mb-10 md:mb-12 space-y-3 md:space-y-4 break-keep">
                      <span className="text-[#B7A18A] font-elegant text-[12pt] font-semibold tracking-[0.2em] uppercase block">
                        THE PARADOX OF DESTINY
                      </span>
                      <h3 className="text-2xl md:text-[34px] lg:text-[36px] font-elegant font-bold text-white leading-[1.4] break-keep">
                        상대에게 맞추고 노력할수록…<br />
                        <span className="text-[#B7A18A]">왜 나의 매력과 가치는 흐려지고 상처만 깊어졌을까요?</span>
                      </h3>
                      <p className="text-[17px] md:text-[18px] text-[#F2EAE0] mt-4 max-w-2xl mx-auto leading-[1.8] font-normal break-keep">
                        당신의 사랑이 부족해서가 아닙니다. 내 기운과 맞지 않는 방식으로 에너지를 소모하며<br className="hidden sm:inline" />
                        &lsquo;본능적 불균형&rsquo;을 초래하여 관계의 균형이 무너졌기 때문입니다.
                      </p>
                    </div>

                    {/* 3대 공감 카드 */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {/* 카드 1 */}
                      <div
                        className="p-7 md:p-8 rounded-2xl md:rounded-3xl relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[#B7A18A]/50 flex flex-col justify-between"
                        style={{
                          background: 'linear-gradient(135deg, rgba(48, 38, 47, 0.85) 0%, rgba(28, 23, 29, 0.95) 100%)',
                          border: '1px solid rgba(183, 161, 138, 0.35)',
                          backdropFilter: 'blur(10px)',
                          WebkitBackdropFilter: 'blur(10px)',
                          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.35)'
                        }}
                      >
                        <div>
                          <div className="text-[#B7A18A] font-elegant font-semibold text-[14px] md:text-[16px] tracking-wider mb-2.5">
                            공감 01
                          </div>
                          <h4 className="text-[19px] md:text-[20px] lg:text-[21px] font-elegant font-bold text-[#FAF7F2] leading-[1.35] break-keep">
                            “왜 늘 비슷한 상처를 주는 사람만 만날까?”
                          </h4>
                          <div className="h-[1px] w-full bg-[#B7A18A]/20 my-3" />
                          <p className="text-[15px] md:text-[16px] text-[#EDE6DA]/85 leading-[1.75] font-light break-keep">
                            나도 모르게 내 선천코드의 결핍을 채워줄 것 같은 사람에게 무의식적으로 끌려가며, 같은 이별과 고통의 패턴을 되풀이합니다.
                          </p>
                        </div>
                        <div className="flex items-center justify-center gap-3 pt-6 mt-6" aria-hidden="true">
                          <span className="w-10 sm:w-12 h-[1px] bg-gradient-to-r from-transparent to-[#B7A18A]/60" />
                          <span className="text-[#B7A18A] text-sm">✦</span>
                          <span className="w-10 sm:w-12 h-[1px] bg-gradient-to-l from-transparent to-[#B7A18A]/60" />
                        </div>
                      </div>

                      {/* 카드 2 */}
                      <div
                        className="p-7 md:p-8 rounded-2xl md:rounded-3xl relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[#B7A18A]/50 flex flex-col justify-between"
                        style={{
                          background: 'linear-gradient(135deg, rgba(48, 38, 47, 0.85) 0%, rgba(28, 23, 29, 0.95) 100%)',
                          border: '1px solid rgba(183, 161, 138, 0.35)',
                          backdropFilter: 'blur(10px)',
                          WebkitBackdropFilter: 'blur(10px)',
                          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.35)'
                        }}
                      >
                        <div>
                          <div className="text-[#B7A18A] font-elegant font-semibold text-[14px] md:text-[16px] tracking-wider mb-2.5">
                            공감 02
                          </div>
                          <h4 className="text-[19px] md:text-[20px] lg:text-[21px] font-elegant font-bold text-[#FAF7F2] leading-[1.35] break-keep">
                            “상대에게 나를 맞출수록 멀어지는 마음”
                          </h4>
                          <div className="h-[1px] w-full bg-[#B7A18A]/20 my-3" />
                          <p className="text-[15px] md:text-[16px] text-[#EDE6DA]/85 leading-[1.75] font-light break-keep">
                            내 고유한 매혹과 개성을 버리고 상대의 기준에 맞추는 순간, 나의 존재감은 희미해지고 상대의 무의식 속 가치는 추락합니다.
                          </p>
                        </div>
                        <div className="flex items-center justify-center gap-3 pt-6 mt-6" aria-hidden="true">
                          <span className="w-10 sm:w-12 h-[1px] bg-gradient-to-r from-transparent to-[#B7A18A]/60" />
                          <span className="text-[#B7A18A] text-sm">✦</span>
                          <span className="w-10 sm:w-12 h-[1px] bg-gradient-to-l from-transparent to-[#B7A18A]/60" />
                        </div>
                      </div>

                      {/* 카드 3 */}
                      <div
                        className="p-7 md:p-8 rounded-2xl md:rounded-3xl relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[#B7A18A]/50 flex flex-col justify-between"
                        style={{
                          background: 'linear-gradient(135deg, rgba(48, 38, 47, 0.85) 0%, rgba(28, 23, 29, 0.95) 100%)',
                          border: '1px solid rgba(183, 161, 138, 0.35)',
                          backdropFilter: 'blur(10px)',
                          WebkitBackdropFilter: 'blur(10px)',
                          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.35)'
                        }}
                      >
                        <div>
                          <div className="text-[#B7A18A] font-elegant font-semibold text-[14px] md:text-[16px] tracking-wider mb-2.5">
                            공감 03
                          </div>
                          <h4 className="text-[19px] md:text-[20px] lg:text-[21px] font-elegant font-bold text-[#FAF7F2] leading-[1.35] break-keep">
                            “상대의 속마음을 몰라 답답했던 시간”
                          </h4>
                          <div className="h-[1px] w-full bg-[#B7A18A]/20 my-3" />
                          <p className="text-[15px] md:text-[16px] text-[#EDE6DA]/85 leading-[1.75] font-light break-keep">
                            상대의 십성 본능과 성정을 모른 채 내 방식대로만 다가가다 오해와 갈등을 키우고 소중한 인연을 허무하게 놓쳤습니다.
                          </p>
                        </div>
                        <div className="flex items-center justify-center gap-3 pt-6 mt-6" aria-hidden="true">
                          <span className="w-10 sm:w-12 h-[1px] bg-gradient-to-r from-transparent to-[#B7A18A]/60" />
                          <span className="text-[#B7A18A] text-sm">✦</span>
                          <span className="w-10 sm:w-12 h-[1px] bg-gradient-to-l from-transparent to-[#B7A18A]/60" />
                        </div>
                      </div>
                    </div>

                    {/* 하단 강조 텍스트 */}
                    <div className="mt-14 text-center">
                      <p className="text-[#FAF7F2] text-[19px] sm:text-[22px] md:text-[25px] font-elegant font-semibold leading-[1.6] break-keep sm:whitespace-nowrap">
                        이제 무의미한 자책을 멈추고, 당신의 <span className="text-[#B7A18A] font-bold">&lsquo;선천코드와 타고난 매혹&rsquo;부터 온전히 깨워야 할 때입니다.</span>
                      </p>
                    </div>

                    {/* 16:9 와이드 브릿지 이미지 */}
                    <div className="mt-8 sm:mt-10 md:mt-12 w-full aspect-[16/9] md:aspect-[1672/941] relative rounded-2xl md:rounded-3xl overflow-hidden border border-[#B7A18A]/30 shadow-2xl bg-black/40 flex items-center justify-center">
                      <Image
                        src={productData.topBannerImage}
                        alt="선천코드 비기 공감 브릿지 와이드 배너"
                        fill
                        sizes="(max-width: 1280px) 100vw, 1280px"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </Reveal>
            </section>

            <AntiqueDivider />

            {/* ═══════════════════════════════════════════════════════════════
                Section 3: 감정 공감 01 / 02 블록 (밝은 반투명 글라스 카드 영역)
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-16 md:mb-24 text-left w-full max-w-[1280px] mx-auto">
              <Reveal>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  {/* 왼쪽: 01, 02 블록 */}
                  <div className="lg:col-span-7 order-1 flex flex-col justify-center">
                    <h3 className="text-center text-[22px] md:text-[28px] font-elegant font-bold text-[#B7A18A] leading-[1.4] mb-6 break-keep">
                      상대를 맞추려 애쓰는 동안, 내 &lsquo;중심&rsquo;은 어디에 있었나요?
                    </h3>

                    <div
                      className="w-full text-left break-keep p-6 sm:p-8 md:p-10 rounded-2xl md:rounded-3xl shadow-2xl space-y-8 md:space-y-10 relative overflow-hidden"
                      style={{
                        background: 'linear-gradient(135deg, rgba(242, 234, 224, 0.05) 0%, rgba(73, 55, 64, 0.15) 100%)',
                        border: '1px solid rgba(183, 161, 138, 0.35)',
                        boxShadow: '0 12px 40px rgba(0, 0, 0, 0.4)',
                        backdropFilter: 'blur(10px)',
                        WebkitBackdropFilter: 'blur(10px)'
                      }}
                    >
                      {/* 01 · 자책하지 마세요 */}
                      <div className="space-y-3.5">
                        <div className="flex items-center gap-2.5">
                          <SeoncheonBadge>
                            01
                          </SeoncheonBadge>
                          <h3 className="text-xl md:text-2xl font-elegant font-bold text-[#FAF7F2] leading-[1.4]">
                            결코 당신의 탓이 아닙니다
                          </h3>
                        </div>
                        <div className="text-[17px] md:text-[18px] text-[#F2EAE0] leading-[1.8] font-normal space-y-2 break-keep">
                          <p>
                            단 하나라도 내 이야기 같았다면,<br />
                            <span className="text-[#B7A18A] font-medium">당신의 매력이 부족해서가 결코 아닙니다.</span>
                          </p>
                          <p className="text-[#FAF7F2]/90">
                            서로의 타고난 기운과 본능의 코드가 맞지 않았을 뿐,<br />
                            진심을 다해 사랑하고 인연을 지키려 했던 마음은 언제나 옳았습니다.
                          </p>
                        </div>
                      </div>

                      <div className="w-full h-[1px] bg-gradient-to-r from-[#B7A18A]/30 via-[#B7A18A]/10 to-transparent" />

                      {/* 02 · 이제 나의 선천코드를 깨울 때 */}
                      <div className="space-y-3.5">
                        <div className="flex items-center gap-2.5">
                          <SeoncheonBadge>
                            02
                          </SeoncheonBadge>
                          <h3 className="text-xl md:text-2xl font-elegant font-bold text-[#FAF7F2] leading-[1.4]">
                            이제, <span className="text-[#B7A18A]">나의 선천코드를 깨울 때</span>
                          </h3>
                        </div>
                        <div className="text-[17px] md:text-[18px] text-[#F2EAE0] leading-[1.8] font-normal space-y-3 break-keep">
                          <p>
                            상대의 변덕스러운 반응에 휘둘리는 동안,<br />
                            정작 나의 고유한 빛과 에너지를 잃어버리지 않았나요?
                          </p>
                          <div
                            className="p-4 sm:p-5 rounded-xl text-[#FAF7F2] font-normal leading-[1.75]"
                            style={{
                              background: 'rgba(73, 55, 64, 0.45)',
                              border: '1px solid rgba(183, 161, 138, 0.25)'
                            }}
                          >
                            《선천코드 비기》에서 말하는 ‘선천코드’는<br className="hidden sm:inline" />
                            타인에게 구걸하지 않고 <span className="text-[#B7A18A] font-semibold">내 가치와 당당한 매혹을 스스로 발현하는 근원적 힘</span>입니다.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 오른쪽: 3:4 대표 표지 이미지 */}
                  <div className="lg:col-span-5 order-2 flex justify-center">
                    <div className="w-full max-w-[420px]">
                      <HybridImageSlot
                        assetKey="book1"
                        className="aspect-[3/4] shadow-2xl"
                      />
                    </div>
                  </div>
                </div>
              </Reveal>
            </section>

            <AntiqueDivider />

            {/* ═══════════════════════════════════════════════════════════════
                Section 4: 왜, 선천코드 비기인가? (Why Seoncheon Code?)
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-28 text-left w-full max-w-[1280px] mx-auto">
              <Reveal>
                <div>
                  {/* PC (md 이상): 한지 스타일 카드 */}
                  <div
                    className="hidden md:block w-full rounded-2xl md:rounded-3xl border border-[#B7A18A]/40 shadow-2xl overflow-hidden transition-all duration-300"
                    style={{
                      backgroundColor: '#F2EAE0',
                      boxShadow: '0 12px 40px rgba(0, 0, 0, 0.45)'
                    }}
                  >
                    <div className="p-8 sm:p-10 md:p-12 lg:p-14 text-left break-keep space-y-5">
                      <span className="text-xs font-elegant font-semibold tracking-widest text-[#493740] uppercase block">
                        WHY SEONCHEON CODE SECRET
                      </span>
                      <h3 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[34px] font-elegant font-bold text-[#241E25] leading-[1.4] break-keep">
                        &ldquo;단순한 미신이나 통계가 아닙니다.<br />
                        인간 본능의 무의식을 푸는 <span className="text-[#493740] font-extrabold">&lsquo;오행 심리 암호&rsquo;</span>입니다.&rdquo;
                      </h3>

                      <div className="text-[16px] md:text-[18px] text-[#30262F] leading-[1.8] font-normal space-y-3.5 break-keep">
                        <p>
                          시중의 단순한 혈액형이나 MBTI, 겉핥기식 사주 풀이는 당신의 진짜 관계 문제를 해결해주지 못합니다. 사람은 저마다 타고난 일간과 십성의 본능에 따라 욕망과 방어기제가 전혀 다르게 작동합니다.
                        </p>
                        <p>
                          상대를 설득하고 매혹하는 진짜 열쇠는 <strong className="text-[#493740] font-bold">&lsquo;선천코드의 오행 조화&rsquo;</strong>에 있습니다. 내 코드를 바로 알고 상대의 기운을 판독할 때 비로소 상대를 끌어당기는 진정한 인연의 주도권을 쥐게 됩니다.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 모바일 (md 미만): 한지 텍스트 결합 */}
                  <div
                    className="md:hidden w-full rounded-2xl border border-[#B7A18A]/40 shadow-2xl overflow-hidden transition-all duration-300"
                    style={{
                      backgroundColor: '#F2EAE0',
                      boxShadow: '0 12px 40px rgba(0, 0, 0, 0.45)'
                    }}
                  >
                    <div className="p-6 text-left break-keep space-y-4">
                      <span className="text-xs font-elegant font-semibold tracking-widest text-[#493740] uppercase block">
                        WHY SEONCHEON CODE
                      </span>
                      <h3 className="text-[20px] sm:text-[22px] font-elegant font-bold text-[#241E25] leading-[1.45] break-keep">
                        &ldquo;단순한 미신이 아닌<br />
                        인간 본능의 <span className="text-[#493740] font-extrabold">&lsquo;오행 심리 암호&rsquo;</span>&rdquo;
                      </h3>

                      <div className="text-[15px] sm:text-[16px] text-[#30262F] leading-[1.75] font-normal space-y-3 break-keep">
                        <p>
                          사람은 저마다 타고난 일간과 십성의 본능에 따라 욕망과 방어기제가 다릅니다.
                        </p>
                        <p>
                          내 코드를 바로 알고 상대의 기운을 판독할 때, 상대를 끌어당기는 인연의 주도권을 갖게 됩니다.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </section>

            <AntiqueDivider />

            {/* ═══════════════════════════════════════════════════════════════
                Section 5: Before & After 1:1 매칭 비교 (TRANSFORMATION)
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-28 w-full max-w-[1280px] mx-auto">
              <Reveal>
                <div
                  className="py-12 px-4 md:px-10 rounded-3xl md:rounded-[40px] transition-all duration-300"
                  style={{
                    background: 'linear-gradient(135deg, rgba(242, 234, 224, 0.04) 0%, rgba(73, 55, 64, 0.12) 100%)',
                    border: '1px solid rgba(183, 161, 138, 0.25)',
                    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.4)'
                  }}
                >
                  <div className="text-center max-w-3xl mx-auto space-y-3 mb-10 md:mb-14 break-keep">
                    <span className="text-[#B7A18A] font-elegant text-[12pt] font-semibold tracking-[0.2em] uppercase block">
                      TRANSFORMATION
                    </span>
                    <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white leading-[1.4] break-keep">
                      《선천코드 비기》가 만드는<br />
                      <span className="text-[#B7A18A]">관계와 삶의 극적인 변화</span>
                    </h2>
                    <p className="text-[17px] md:text-[18px] text-[#EDE6DA]/85 mt-3 leading-[1.8] font-normal break-keep">
                      상대에게 휘둘리던 피동적인 관계에서, 나와 상대의 암호를 꿰뚫어 주도하는 관계로.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 text-left">
                    {/* BEFORE CARD */}
                    <div
                      className="p-6 sm:p-8 rounded-2xl md:rounded-3xl border border-white/10 flex flex-col justify-between space-y-6"
                      style={{
                        background: 'linear-gradient(135deg, rgba(36, 30, 37, 0.7) 0%, rgba(20, 16, 21, 0.85) 100%)',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
                      }}
                    >
                      <div className="space-y-4">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono font-bold py-1 px-2.5 rounded bg-white/10 text-white/60">
                            BEFORE
                          </span>
                          <h3 className="text-lg md:text-xl font-elegant font-bold text-white/80">
                            선천코드를 모르던 지난날
                          </h3>
                        </div>

                        <ul className="space-y-3.5 text-sm md:text-base text-white/70 font-light">
                          <li className="flex items-start gap-2.5">
                            <span className="text-red-400 font-bold shrink-0">✕</span>
                            <span>왜 매번 비슷한 유형의 사람에게 상처받는지 이유를 모른 채 자책했다</span>
                          </li>
                          <li className="flex items-start gap-2.5">
                            <span className="text-red-400 font-bold shrink-0">✕</span>
                            <span>상대의 기분과 반응에 하루 종일 감정이 롤러코스터처럼 요동쳤다</span>
                          </li>
                          <li className="flex items-start gap-2.5">
                            <span className="text-red-400 font-bold shrink-0">✕</span>
                            <span>내 매력을 모른 채 남들의 기준에 맞추려다 자존감만 깎여나갔다</span>
                          </li>
                          <li className="flex items-start gap-2.5">
                            <span className="text-red-400 font-bold shrink-0">✕</span>
                            <span>갈등이 생기면 어떻게 대처해야 할지 몰라 관계를 망치곤 했다</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* AFTER CARD */}
                    <div
                      className="p-6 sm:p-8 rounded-2xl md:rounded-3xl border border-[#B7A18A]/50 flex flex-col justify-between space-y-6"
                      style={{
                        background: 'linear-gradient(135deg, rgba(73, 55, 64, 0.6) 0%, rgba(36, 30, 37, 0.9) 100%)',
                        boxShadow: '0 12px 36px rgba(0, 0, 0, 0.4)'
                      }}
                    >
                      <div className="space-y-4">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono font-bold py-1 px-2.5 rounded bg-[#493740] border border-[#B7A18A] text-[#F2EAE0]">
                            AFTER
                          </span>
                          <h3 className="text-lg md:text-xl font-elegant font-bold text-[#FAF7F2]">
                            선천코드 비기를 장착한 후
                          </h3>
                        </div>

                        <ul className="space-y-3.5 text-sm md:text-base text-[#FAF7F2] font-medium">
                          <li className="flex items-start gap-2.5">
                            <Check className="w-5 h-5 text-[#B7A18A] shrink-0 mt-0.5" />
                            <span>나의 오행 결핍과 본능을 명확히 알아 불안과 자책의 고리를 완전히 끊어낸다</span>
                          </li>
                          <li className="flex items-start gap-2.5">
                            <Check className="w-5 h-5 text-[#B7A18A] shrink-0 mt-0.5" />
                            <span>상대의 일간과 십성을 판독하여 속마음과 무의식을 정확히 꿰뚫어본다</span>
                          </li>
                          <li className="flex items-start gap-2.5">
                            <Check className="w-5 h-5 text-[#B7A18A] shrink-0 mt-0.5" />
                            <span>나만의 고유한 도화 기운을 깨워 상대를 자연스럽게 끌어당긴다</span>
                          </li>
                          <li className="flex items-start gap-2.5">
                            <Check className="w-5 h-5 text-[#B7A18A] shrink-0 mt-0.5" />
                            <span>끌려다니는 관계가 아닌, 내가 선택하고 주도하는 인연의 주권자가 된다</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </section>

            <AntiqueDivider />

            {/* ═══════════════════════════════════════════════════════════════
                Section 6: 저자 소개 (AUTHOR & MASTER 백도화 - 한지 비단 배경 카드)
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-28 w-full max-w-[1200px] mx-auto">
              <Reveal>
                <div
                  className="rounded-xl sm:rounded-2xl border border-[#B7A18A]/30 pl-8 sm:pl-12 md:pl-20 lg:pl-28 xl:pl-32 pr-6 sm:pr-10 md:pr-14 lg:pr-20 py-8 sm:py-12 md:py-16 lg:py-20 relative overflow-hidden shadow-2xl text-left transition-all duration-300 hover:shadow-[0_0_24px_rgba(183,161,138,0.25)] min-h-[560px] md:min-h-[620px] flex flex-col justify-between"
                  style={{
                    backgroundColor: '#F2EAE0',
                    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.45)'
                  }}
                >
                  <div className="max-w-2xl lg:max-w-3xl mr-auto space-y-6 sm:space-y-8 p-6 sm:p-8 lg:p-0 rounded-2xl lg:rounded-none">
                    {/* 이름 & 타이틀 */}
                    <div className="space-y-2 border-b border-[#493740]/20 pb-5 sm:pb-6">
                      <span className="text-xs font-elegant font-semibold tracking-widest text-[#493740] uppercase block">
                        AUTHOR &amp; MASTER
                      </span>
                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-elegant font-bold text-[#241E25]">
                        백도화 <span className="text-[#493740] text-xl md:text-2xl font-normal">(白桃花)</span>
                      </h2>
                      <p className="text-[16px] sm:text-[18px] md:text-[21px] lg:text-[24px] text-[#30262F] font-medium leading-[1.6]">
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
                          className="flex items-center justify-center gap-1.5 sm:gap-2 py-2.5 px-2.5 sm:py-3 sm:px-3 text-center shadow-[0_2px_8px_rgba(100,60,30,0.06)]"
                          style={{
                            background: 'linear-gradient(135deg, rgba(245, 238, 230, 0.85) 0%, rgba(230, 220, 210, 0.75) 100%)',
                            border: '1px solid rgba(183, 161, 138, 0.45)',
                            borderRadius: '9px',
                            color: '#30262F'
                          }}
                        >
                          <span className="text-[12px] sm:text-[13px] md:text-[14px] font-elegant font-bold leading-tight break-keep">
                            {cert}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* 저자의 편지 본문 */}
                    <div className="text-[15px] sm:text-[16px] md:text-[18px] text-[#241E25] leading-[1.75] font-normal space-y-3.5 break-keep">
                      <p>
                        수많은 상담 현장에서 제가 목격한 안타까운 진실은, 대부분의 사람들이 ‘상대의 마음’을 얻으려 애쓰느라 ‘자신의 타고난 기운’을 잃어버린다는 사실이었습니다.
                      </p>
                      <p>
                        사람은 저마다 고유한 선천코드를 가지고 태어납니다. 내 코드를 알고 상대의 코드를 이해하면, 더 이상 상처받지 않고 당당하게 사랑을 이끌어갈 수 있습니다.
                      </p>
                      <p className="font-semibold text-[#493740]">
                        《선천코드 비기》가 당신의 인연을 밝히는 가장 밝은 등불이 되어드릴 것입니다.
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </section>

            <AntiqueDivider />

            {/* ═══════════════════════════════════════════════════════════════
                Section 7: 탄생 배경 (단 하나의 비방)
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-28 text-left w-full max-w-[1280px] mx-auto">
              <Reveal>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
                  {/* 왼쪽 책 이미지 */}
                  <div className="lg:col-span-5 flex justify-center">
                    <div className="w-full max-w-[400px]">
                      <HybridImageSlot
                        assetKey="book1"
                        className="aspect-[3/4] shadow-2xl"
                      />
                    </div>
                  </div>

                  {/* 오른쪽 본문 */}
                  <div className="lg:col-span-7 space-y-6 break-keep">
                    <div>
                      <span className="text-[#B7A18A] font-elegant text-xs md:text-sm font-semibold tracking-[0.25em] uppercase block">
                        THE ONLY SECRET
                      </span>
                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-elegant font-bold text-white mt-1 leading-[1.35]">
                        오직 나와 상대의 심리 암호를 위해 탄생한<br />
                        <span className="text-[#B7A18A]">단 하나의 비방(祕記)</span>
                      </h2>
                    </div>

                    <div className="space-y-4 text-[16px] md:text-[18px] text-[#EDE6DA] leading-[1.8] font-normal break-keep">
                      <p>
                        더 이상 운명이라는 말 뒤에 숨어 자책하지 마십시오.
                      </p>
                      <p className="text-white font-semibold">
                        인연은 맹목적으로 믿는 것이 아니라, 선천코드를 판독하여 지혜롭게 다스리는 것입니다.
                      </p>
                      <p>
                        《선천코드 비기》는 단순한 이론서가 아니라, 10대 일간과 십성의 본능, 도화의 매혹, 이상형 판별까지 실전에 즉각 적용할 수 있는 압축 도감입니다.
                      </p>
                    </div>

                    {/* 6대 특징 알약형 카드 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {[
                        "사주 오행 심리 암호 해독",
                        "십성 5대 무의식 본능 분석",
                        "10대 일간 페르소나 도감",
                        "도화와 매혹의 비밀 공식",
                        "이상형 & 배우자 복덕 판별",
                        "오행 조화 디지털 비첩 제공"
                      ].map((item, idx) => (
                        <div
                          key={idx}
                          className="p-3.5 sm:p-4 rounded-xl flex items-center gap-3 backdrop-blur-md transition-all duration-300 hover:border-[#B7A18A]/65 hover:scale-[1.01]"
                          style={{
                            background: 'linear-gradient(115deg, #30262F 0%, #241E25 48%, #1C171D 100%)',
                            border: '1px solid rgba(183, 161, 138, 0.35)',
                            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.35)'
                          }}
                        >
                          <div
                            className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0 border border-[#B7A18A]/40 text-[#B7A18A] text-[13px] font-bold"
                            style={{ background: '#493740' }}
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

            <AntiqueDivider />

            {/* ═══════════════════════════════════════════════════════════════
                Section 8: 이런 분께 추천합니다 (Recommended For)
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-28 w-full max-w-[1280px] mx-auto">
              <Reveal>
                <div className="space-y-10 text-left">
                  <div className="text-center max-w-3xl mx-auto space-y-4">
                    <span className="text-[#B7A18A] font-elegant text-[12pt] font-semibold tracking-[0.2em] uppercase block">
                      RECOMMENDED FOR
                    </span>
                    <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white leading-[1.4] break-keep">
                      이런 분께 <span className="text-[#B7A18A]">강력히 추천합니다</span>
                    </h2>
                    <p className="text-[17px] md:text-[18px] text-[#EDE6DA]/85 leading-[1.8] font-normal break-keep">
                      인연의 갈림길에서 나만의 중심을 찾고 상대의 심리를 해독하고 싶은 모든 분을 위한 필독서.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                      {
                        num: "01",
                        title: "반복되는 연애 상처에 지친 분",
                        desc: "늘 비슷한 패턴으로 상처받고 끝나버리는 관계의 근본 원인을 뿌리 뽑고 싶으신 분"
                      },
                      {
                        num: "02",
                        title: "상대의 속마음이 답답한 분",
                        desc: "도무지 알 수 없는 상대방의 태도와 방어기제를 심리학적으로 명쾌히 판독하고 싶으신 분"
                      },
                      {
                        num: "03",
                        title: "나만의 고유한 매력을 찾고 싶은 분",
                        desc: "남들의 기준에 휘둘리지 않고 타고난 도화와 본능의 매혹을 당당하게 발현하고 싶으신 분"
                      },
                      {
                        num: "04",
                        title: "운명적 인연을 알아보고 싶은 분",
                        desc: "평생을 함께할 동반자의 기운을 분별하고, 악연을 걸러내어 행복한 관계를 주도하고 싶으신 분"
                      }
                    ].map((card, idx) => (
                      <div
                        key={idx}
                        className="p-6 sm:p-7 rounded-2xl flex flex-col justify-between space-y-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#B7A18A]/60"
                        style={{
                          background: 'linear-gradient(135deg, rgba(48, 38, 47, 0.75) 0%, rgba(28, 23, 29, 0.9) 100%)',
                          border: '1px solid rgba(183, 161, 138, 0.3)',
                          boxShadow: '0 8px 24px rgba(0,0,0,0.3)'
                        }}
                      >
                        <div className="space-y-3">
                          <span className="text-xs font-mono font-bold text-[#B7A18A] tracking-widest uppercase block">
                            TYPE {card.num}
                          </span>
                          <h3 className="text-lg font-elegant font-bold text-[#FAF7F2] leading-[1.4] break-keep">
                            {card.title}
                          </h3>
                          <div className="h-[1px] w-full bg-[#B7A18A]/20" />
                          <p className="text-sm text-[#EDE6DA]/80 leading-relaxed font-light break-keep">
                            {card.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </section>

            <AntiqueDivider />

            {/* ═══════════════════════════════════════════════════════════════
                Section 9: CURRICULUM & ARCHITECTURE (커리큘럼 & 아키텍처)
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-28 text-left w-full max-w-[1280px] mx-auto">
              <Reveal>
                <div className="py-4">
                  <div className="text-center space-y-4 md:space-y-5 break-keep">
                    <span className="text-[#B7A18A] font-elegant text-[12pt] font-semibold tracking-[0.2em] uppercase block">
                      CURRICULUM &amp; ARCHITECTURE
                    </span>
                    <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-[#FAF7F2] leading-[1.4] break-keep">
                      &ldquo;인연을 막연한 감에 맡기지 마십시오.<br />
                      <span className="text-[#B7A18A]">《선천코드 비기》가 안내하는 오행 심리 설계도</span>&rdquo;
                    </h2>
                    <p className="text-[#EDE6DA]/85 text-[17px] md:text-[18px] max-w-3xl mx-auto font-normal leading-[1.8] break-keep">
                      인간 본능의 지도부터 10대 일간 도감, 십성 분석, 도화 매혹의 원리까지 체계적으로 담았습니다.
                    </p>
                  </div>

                  <div className="mt-8 md:mt-10 relative w-full aspect-[16/9] md:aspect-[1672/941] rounded-2xl md:rounded-3xl overflow-hidden border border-[#B7A18A]/30 shadow-2xl bg-black/40 flex items-center justify-center">
                    <Image
                      src={productData.topBannerImage}
                      alt="선천코드 비기 커리큘럼 아키텍처 다이어그램"
                      fill
                      sizes="(max-width: 1280px) 100vw, 1280px"
                      className="object-cover"
                    />
                  </div>
                </div>
              </Reveal>
            </section>

            <AntiqueDivider />

            {/* ═══════════════════════════════════════════════════════════════
                Section 10: 선천코드 5단계 전략 (THE SEONCHEON MECHANISM)
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-28 text-left w-full max-w-[1280px] mx-auto">
              <Reveal>
                <div className="space-y-12">
                  <div className="text-center max-w-3xl mx-auto space-y-4">
                    <span className="text-[#B7A18A] font-elegant tracking-[0.25em] text-xs uppercase font-bold">
                      THE SEONCHEON MECHANISM
                    </span>
                    <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white leading-[1.4] md:leading-[1.5] break-keep">
                      인연의 갈등을 감정으로 풀지 마십시오.<br />
                      <span className="text-[#B7A18A]">
                        나의 선천코드를 파악하고,<br />
                        상대의 본능을 꿰뚫습니다.
                      </span>
                    </h2>
                    <p className="text-sm md:text-base text-[#EDE6DA]/70 font-light">
                      관계를 변화시키는 힘은 눈물이 아니라 &lsquo;오행의 조화와 본능의 암호 해독&rsquo;에서 나옵니다.
                    </p>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-8 items-stretch">
                    {/* STEP 1 */}
                    <div
                      className="p-8 sm:p-10 rounded-2xl md:rounded-3xl shadow-2xl flex flex-col justify-between space-y-6"
                      style={{
                        background: 'linear-gradient(115deg, #30262F 0%, #241E25 48%, #1C171D 100%)',
                        border: '1px solid rgba(183, 161, 138, 0.35)',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.35)'
                      }}
                    >
                      <div className="space-y-5">
                        <div className="flex items-center justify-between border-b border-[#B7A18A]/30 pb-4">
                          <span className="text-xs font-mono font-bold text-[#B7A18A] uppercase tracking-widest">
                            STEP 01
                          </span>
                          <SeoncheonBadge>
                            선천코드 &amp; 오행 분석
                          </SeoncheonBadge>
                        </div>
                        <h3 className="text-xl md:text-2xl font-elegant font-bold text-[#FAF7F2] leading-[1.4]">
                          나의 결핍 파악 및 내면 중심 회복
                        </h3>
                        <p className="text-sm md:text-base text-[#EDE6DA]/90 leading-relaxed font-light">
                          내가 왜 특정 기운에 이토록 취약한지, 내 사주 오행의 과다와 결핍을 분석하여 감정의 불안을 멈춥니다.
                        </p>
                        <ul className="space-y-2.5 text-xs sm:text-sm text-[#FAF7F2] pt-2">
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#B7A18A]" />
                            <span>1단계: 만세력 핵심 3글자(일간·일지·월지) 확인</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#B7A18A]" />
                            <span>2단계: 오행 불균형 진단(목화토금수 에너지 분포)</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#B7A18A]" />
                            <span>3단계: 반복되던 관계 결핍의 심리적 기원 자각</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#B7A18A]" />
                            <span>4단계: 내 고유한 도화 기운 점검 및 매혹 발현</span>
                          </li>
                        </ul>
                      </div>
                      <div className="p-4 rounded-xl bg-black/40 border border-[#B7A18A]/20 text-xs text-[#B7A18A] font-light">
                        💡 나를 먼저 아는 것이 상대를 움직이는 가장 빠른 지름길입니다.
                      </div>
                    </div>

                    {/* STEP 2 */}
                    <div
                      className="p-8 sm:p-10 rounded-2xl md:rounded-3xl shadow-2xl flex flex-col justify-between space-y-6"
                      style={{
                        background: 'linear-gradient(115deg, #30262F 0%, #241E25 48%, #1C171D 100%)',
                        border: '1px solid rgba(183, 161, 138, 0.35)',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.35)'
                      }}
                    >
                      <div className="space-y-5">
                        <div className="flex items-center justify-between border-b border-[#B7A18A]/30 pb-4">
                          <span className="text-xs font-mono font-bold text-[#B7A18A] uppercase tracking-widest">
                            STEP 02
                          </span>
                          <SeoncheonBadge>
                            십성 본능 &amp; 상생의 관계
                          </SeoncheonBadge>
                        </div>
                        <h3 className="text-xl md:text-2xl font-elegant font-bold text-[#FAF7F2] leading-[1.4]">
                          상대의 본능 암호 해독 및 관계 주도
                        </h3>
                        <p className="text-sm md:text-base text-[#EDE6DA]/90 leading-relaxed font-light">
                          상대의 십성 5대 본능(비겁·식상·재성·관성·인성)을 꿰뚫어 상대가 거부할 수 없는 대화와 매혹을 완성합니다.
                        </p>
                        <ul className="space-y-2.5 text-xs sm:text-sm text-[#FAF7F2] pt-2">
                          <li className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-[#B7A18A]" />
                            <span>1단계: 상대 일간 캐릭터 및 핵심 방어기제 해독</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-[#B7A18A]" />
                            <span>2단계: 상대 십성 본능에 맞춘 맞춤형 심리 접근</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-[#B7A18A]" />
                            <span>3단계: 상극의 충돌을 피하고 상생의 조화 공식 실천</span>
                          </li>
                        </ul>
                      </div>
                      <div className="p-4 rounded-xl bg-[#493740]/50 border border-[#B7A18A]/40 text-xs text-[#FAF7F2] font-medium">
                        ✨ 이때 상대방은 &lsquo;이 사람은 나를 정말 깊이 이해해주는구나&rsquo; 느끼며 자발적으로 다가옵니다.
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </section>

            <AntiqueDivider />

            {/* ═══════════════════════════════════════════════════════════════
                Section 11: 3종 패키지 소개 (PACKAGE COMPOSITION)
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-14 text-left w-full max-w-[1280px] mx-auto">
              <Reveal>
                <div className="text-center mb-6 md:mb-8 max-w-3xl mx-auto break-keep">
                  <span className="text-[#B7A18A] font-elegant text-[12pt] font-semibold tracking-[0.2em] uppercase block">
                    PACKAGE COMPOSITION
                  </span>
                  <h3 className="text-2xl md:text-[36px] font-elegant font-bold text-white mt-2 leading-[1.4] break-keep">
                    선천코드 비기 3종 올인원 세트<br />
                    <span className="text-[#B7A18A]">인연의 암호를 해독하는 3단계 완성형 패키지</span>
                  </h3>
                  <p className="text-[#EDE6DA]/85 text-[18px] mt-3 leading-[1.8] font-normal break-keep">
                    본편으로 원리를 꿰뚫고, 일간·십성 도감으로 상대를 분석하며, 도화·이상형 비책으로 인연을 완성합니다.
                  </p>
                </div>

                {/* 3종 올인원 세트 목업 이미지 */}
                <div className="mb-10 md:mb-14">
                  <div className="relative w-full rounded-[20px] overflow-hidden border border-[#B7A18A]/30 shadow-[0_12px_40px_rgba(0,0,0,0.45)]">
                    <Image
                      src={productData.topBannerImage}
                      alt="선천코드 비기 본편과 실전 부록으로 구성된 3종 올인원 패키지"
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
                      background: 'linear-gradient(115deg, #30262F 0%, #241E25 48%, #1C171D 100%)',
                      border: '1px solid rgba(183, 161, 138, 0.35)'
                    }}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <SeoncheonBadge>
                          Step 1 · 원리
                        </SeoncheonBadge>
                        <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 text-[#B7A18A]">
                          <BookOpen className="w-6 h-6" />
                        </div>
                      </div>

                      <h4 className="text-[18px] md:text-[20px] font-bold text-[#FAF7F2] font-elegant mt-3 md:mt-3.5 leading-[1.4] break-keep">
                        《선천코드 비기 완전판》
                      </h4>
                      <div className="w-8 h-[1px] bg-[#B7A18A]/30 my-2.5 md:my-3" />
                      <p className="text-[16px] text-[#EDE6DA]/85 leading-[1.7] font-normal break-keep">
                        오행 심리 분석부터 십성 본능, 도화의 비밀, 인연의 주권자가 되는 7대 심리 암호 바이블
                      </p>
                    </div>
                  </div>

                  {/* Book 2 */}
                  <div
                    className="relative p-5 sm:p-6 md:p-7 rounded-[12px] flex flex-col justify-between overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.4)] transition-transform hover:-translate-y-1 duration-200"
                    style={{
                      background: 'linear-gradient(115deg, #30262F 0%, #241E25 48%, #1C171D 100%)',
                      border: '1px solid rgba(183, 161, 138, 0.35)'
                    }}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <SeoncheonBadge>
                          Step 2 · 도감
                        </SeoncheonBadge>
                        <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 text-[#B7A18A]">
                          <Smartphone className="w-6 h-6" />
                        </div>
                      </div>

                      <h4 className="text-[18px] md:text-[20px] font-bold text-[#FAF7F2] font-elegant mt-3 md:mt-3.5 leading-[1.4] break-keep">
                        《10대 일간 &amp; 십성 암호 도감》
                      </h4>
                      <div className="w-8 h-[1px] bg-[#B7A18A]/30 my-2.5 md:my-3" />
                      <p className="text-[16px] text-[#EDE6DA]/85 leading-[1.7] font-normal break-keep">
                        10대 일간 캐릭터 페르소나, 십성 무의식 방어기제 해제법, 3분 만세력 판독 실전 가이드
                      </p>
                    </div>
                  </div>

                  {/* Book 3 */}
                  <div
                    className="relative p-5 sm:p-6 md:p-7 rounded-[12px] flex flex-col justify-between overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.4)] transition-transform hover:-translate-y-1 duration-200"
                    style={{
                      background: 'linear-gradient(115deg, #30262F 0%, #241E25 48%, #1C171D 100%)',
                      border: '1px solid rgba(183, 161, 138, 0.35)'
                    }}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <SeoncheonBadge>
                          Step 3 · 판별
                        </SeoncheonBadge>
                        <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 text-[#B7A18A]">
                          <Sparkles className="w-6 h-6" />
                        </div>
                      </div>

                      <h4 className="text-[18px] md:text-[20px] font-bold text-[#FAF7F2] font-elegant mt-3 md:mt-3.5 leading-[1.4] break-keep">
                        《도화 &amp; 배우자 복덕 판별 비책》
                      </h4>
                      <div className="w-8 h-[1px] bg-[#B7A18A]/30 my-2.5 md:my-3" />
                      <p className="text-[16px] text-[#EDE6DA]/85 leading-[1.7] font-normal break-keep">
                        4대 도화 매혹 발현, 일지·월지 이상형 판별, 상생과 상극을 감별하는 평생 인연 판별 비책
                      </p>
                    </div>
                  </div>
                </div>

                {/* 3종 세트 상세 서브헤더 */}
                <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16 pt-12 md:pt-16 lg:pt-20 break-keep">
                  <span className="text-[#B7A18A] font-elegant text-[12pt] font-semibold tracking-[0.2em] uppercase block mb-3">
                    3-in-1 All-in-One Package
                  </span>
                  <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white tracking-wide leading-[1.35] mb-3">
                    선천코드 비기 3종 올인원 세트 <span className="text-[#B7A18A]">상세 해부</span>
                  </h2>
                  <div className="space-y-1.5">
                    <p className="text-[17px] md:text-[18px] text-[#EDE6DA]/85 font-normal leading-[1.5]">
                      본편부터 실전 암호 도감, 도화·배우자 판별 비책까지
                    </p>
                    <p className="text-[18px] md:text-[20px] text-[#B7A18A] font-bold font-elegant tracking-wide leading-[1.5]">
                      정식 출간 준비 중 (COMING SOON)
                    </p>
                  </div>
                </div>
              </Reveal>
            </section>

            {/* ═══════════════════════════════════════════════════════════════
                Section 12: 본편·부록별 상세 소개 및 목차 (Product Showcase)
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-28 w-full max-w-[1280px] mx-auto">
              <Reveal>
                <div className="space-y-10">
                  {/* Book 1. [본편] 《선천코드 비기 완전판》 */}
                  <div
                    className="p-6 md:p-10 lg:p-12 rounded-3xl grid lg:grid-cols-12 gap-8 lg:gap-12 items-start transition-all duration-300"
                    style={{
                      background: 'linear-gradient(135deg, rgba(242, 234, 224, 0.05) 0%, rgba(73, 55, 64, 0.15) 100%)',
                      border: '1px solid rgba(183, 161, 138, 0.35)',
                      boxShadow: '0 12px 35px rgba(0, 0, 0, 0.25)',
                      backdropFilter: 'blur(10px)',
                      WebkitBackdropFilter: 'blur(10px)'
                    }}
                  >
                    <div className="lg:col-span-5 flex justify-center">
                      <div className="w-full max-w-[340px] lg:max-w-none">
                        <HybridImageSlot
                          assetKey="book1"
                          className="aspect-[3/4] shadow-2xl"
                        />
                        <div className="mt-4 md:mt-5 text-center space-y-1 text-[16px] md:text-[18px] leading-[1.5]">
                          <p className="text-[#B7A18A] font-semibold tracking-wide">
                            원리바이블-본편
                          </p>
                          <p className="text-[#EDE6DA] font-normal tracking-wide">
                            PDF 전자책 · <strong className="font-bold">출간 예정</strong>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="lg:col-span-7 space-y-5 text-left break-keep">
                      <div>
                        <SeoncheonBadge>Book 1. [본편]</SeoncheonBadge>
                      </div>
                      <h3 className="text-xl md:text-[24px] font-elegant font-bold text-[#FAF7F2] leading-[1.4] break-keep">
                        《선천코드 비기(先天코드 祕記) 완전판》
                      </h3>
                      <p className="text-[17px] md:text-[18px] text-[#B7A18A] font-semibold leading-[1.6] break-keep">
                        매혹과 인연의 비밀을 푸는 사주 오행 심리 암호
                      </p>

                      <div className="space-y-3.5 pt-2">
                        <div className="p-4 rounded-xl bg-black/40 border border-[#B7A18A]/25 space-y-1">
                          <h4 className="text-[15px] md:text-[16px] font-bold text-[#FAF7F2] flex items-start gap-2">
                            <span className="text-[#B7A18A] shrink-0 font-mono">①</span>
                            <span>선천코드 오행 분석과 결핍의 심리학</span>
                          </h4>
                          <p className="text-[15px] md:text-[16px] text-[#EDE6DA]/80 pl-5 leading-[1.6] font-light">
                            목화토금수 기운의 과다와 결핍이 만드는 무의식적 끌림과 불안의 정밀 진단
                          </p>
                        </div>

                        <div className="p-4 rounded-xl bg-black/40 border border-[#B7A18A]/25 space-y-1">
                          <h4 className="text-[15px] md:text-[16px] font-bold text-[#FAF7F2] flex items-start gap-2">
                            <span className="text-[#B7A18A] shrink-0 font-mono">②</span>
                            <span>십성 5대 무의식 본능과 방어기제 해체</span>
                          </h4>
                          <p className="text-[15px] md:text-[16px] text-[#EDE6DA]/80 pl-5 leading-[1.6] font-light">
                            상대방을 움직이는 진짜 욕망과 갈등의 스위치를 끄는 심리 공식
                          </p>
                        </div>

                        <div className="p-4 rounded-xl bg-black/40 border border-[#B7A18A]/25">
                          <h4 className="text-[15px] md:text-[16px] font-bold text-[#FAF7F2] flex items-start gap-2">
                            <span className="text-[#B7A18A] shrink-0 font-mono">③</span>
                            <span>도화와 매혹: 나만의 거부할 수 없는 매력을 깨우는 법</span>
                          </h4>
                        </div>

                        <div className="p-4 rounded-xl bg-black/40 border border-[#B7A18A]/25">
                          <h4 className="text-[15px] md:text-[16px] font-bold text-[#FAF7F2] flex items-start gap-2">
                            <span className="text-[#B7A18A] shrink-0 font-mono">④</span>
                            <span>인연의 주권자: 끌려다니는 관계에서 주도하는 사랑으로</span>
                          </h4>
                        </div>
                      </div>

                      <div className="pt-2">
                        <BookTocAccordion items={mainBookToc} badgeText="[본편] 상세 목차 미리보기" />
                      </div>
                    </div>
                  </div>

                  {/* Book 2. [실전 부록 1] 《10대 일간 & 십성 심리 암호 해독 도감》 */}
                  <div
                    className="p-6 md:p-10 lg:p-12 rounded-3xl grid lg:grid-cols-12 gap-8 lg:gap-12 items-start transition-all duration-300"
                    style={{
                      background: 'linear-gradient(135deg, rgba(242, 234, 224, 0.05) 0%, rgba(73, 55, 64, 0.15) 100%)',
                      border: '1px solid rgba(183, 161, 138, 0.35)',
                      boxShadow: '0 12px 35px rgba(0, 0, 0, 0.25)',
                      backdropFilter: 'blur(10px)',
                      WebkitBackdropFilter: 'blur(10px)'
                    }}
                  >
                    <div className="lg:col-span-5 flex justify-center">
                      <div className="w-full max-w-[340px] lg:max-w-none">
                        <HybridImageSlot
                          assetKey="book2"
                          className="aspect-[3/4] shadow-2xl"
                        />
                        <div className="mt-4 md:mt-5 text-center space-y-1 text-[16px] md:text-[18px] leading-[1.5]">
                          <p className="text-[#B7A18A] font-semibold tracking-wide">
                            실전 도감-부록 1
                          </p>
                          <p className="text-[#EDE6DA] font-normal tracking-wide">
                            PDF 전자책 · <strong className="font-bold">출간 예정</strong>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="lg:col-span-7 space-y-5 text-left break-keep">
                      <div>
                        <SeoncheonBadge>Book 2. [실전 부록 1]</SeoncheonBadge>
                      </div>
                      <h3 className="text-xl md:text-[24px] font-elegant font-bold text-[#FAF7F2] leading-[1.4] break-keep">
                        《10대 일간 &amp; 십성 심리 암호 해독 도감》
                      </h3>
                      <p className="text-[17px] md:text-[18px] text-[#B7A18A] font-semibold leading-[1.6] break-keep">
                        상대방의 일간 하나로 속마음과 약점을 꿰뚫는 실전 사전
                      </p>

                      <div className="space-y-3.5 pt-2">
                        <div className="p-4 rounded-xl bg-black/40 border border-[#B7A18A]/25 space-y-1">
                          <h4 className="text-[15px] md:text-[16px] font-bold text-[#FAF7F2] flex items-start gap-2">
                            <span className="text-[#B7A18A] shrink-0 font-mono">①</span>
                            <span>갑을병정무기경신임계 10대 일간 페르소나 총정리</span>
                          </h4>
                          <p className="text-[15px] md:text-[16px] text-[#EDE6DA]/80 pl-5 leading-[1.6] font-light">
                            각 일간별 핵심 성향, 연애 약점, 무장해제 대화법 완벽 가이드
                          </p>
                        </div>

                        <div className="p-4 rounded-xl bg-black/40 border border-[#B7A18A]/25 space-y-1">
                          <h4 className="text-[15px] md:text-[16px] font-bold text-[#FAF7F2] flex items-start gap-2">
                            <span className="text-[#B7A18A] shrink-0 font-mono">②</span>
                            <span>만세력 앱 3분 판독법</span>
                          </h4>
                          <p className="text-[15px] md:text-[16px] text-[#EDE6DA]/80 pl-5 leading-[1.6] font-light">
                            초보자도 생년월일시만으로 나와 상대의 기운을 즉각 읽어내는 실전 가이드
                          </p>
                        </div>

                        <div className="p-4 rounded-xl bg-black/40 border border-[#B7A18A]/25">
                          <h4 className="text-[15px] md:text-[16px] font-bold text-[#FAF7F2] flex items-start gap-2">
                            <span className="text-[#B7A18A] shrink-0 font-mono">③</span>
                            <span>오행 상생·상극에 따른 관계 처방전</span>
                          </h4>
                        </div>
                      </div>

                      <div className="pt-2">
                        <BookTocAccordion items={manualBookToc} badgeText="[실전 부록 1] 상세 목차 미리보기" />
                      </div>
                    </div>
                  </div>

                  {/* Book 3. [실전 부록 2] 《도화 & 배우자 복덕 판별 비책》 */}
                  <div
                    className="p-6 md:p-10 lg:p-12 rounded-3xl grid lg:grid-cols-12 gap-8 lg:gap-12 items-start transition-all duration-300"
                    style={{
                      background: 'linear-gradient(135deg, rgba(242, 234, 224, 0.05) 0%, rgba(73, 55, 64, 0.15) 100%)',
                      border: '1px solid rgba(183, 161, 138, 0.35)',
                      boxShadow: '0 12px 35px rgba(0, 0, 0, 0.25)',
                      backdropFilter: 'blur(10px)',
                      WebkitBackdropFilter: 'blur(10px)'
                    }}
                  >
                    <div className="lg:col-span-5 flex justify-center">
                      <div className="w-full max-w-[340px] lg:max-w-none">
                        <HybridImageSlot
                          assetKey="book3"
                          className="aspect-[3/4] shadow-2xl"
                        />
                        <div className="mt-4 md:mt-5 text-center space-y-1 text-[16px] md:text-[18px] leading-[1.5]">
                          <p className="text-[#B7A18A] font-semibold tracking-wide">
                            실전 비책-부록 2
                          </p>
                          <p className="text-[#EDE6DA] font-normal tracking-wide">
                            PDF 전자책 · <strong className="font-bold">출간 예정</strong>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="lg:col-span-7 space-y-5 text-left break-keep">
                      <div>
                        <SeoncheonBadge>Book 3. [실전 부록 2]</SeoncheonBadge>
                      </div>
                      <h3 className="text-xl md:text-[24px] font-elegant font-bold text-[#FAF7F2] leading-[1.4] break-keep">
                        《도화·이상형·배우자 복덕 실전 판별 비책》
                      </h3>
                      <p className="text-[17px] md:text-[18px] text-[#B7A18A] font-semibold leading-[1.6] break-keep">
                        나와 평생을 함께할 귀인과 악연을 가려내는 인연 판별의 눈
                      </p>

                      <div className="space-y-3.5 pt-2">
                        <div className="p-4 rounded-xl bg-black/40 border border-[#B7A18A]/25 space-y-1">
                          <h4 className="text-[15px] md:text-[16px] font-bold text-[#FAF7F2] flex items-start gap-2">
                            <span className="text-[#B7A18A] shrink-0 font-mono">①</span>
                            <span>4대 도화(자오묘유)의 매혹 특성과 활용법</span>
                          </h4>
                          <p className="text-[15px] md:text-[16px] text-[#EDE6DA]/80 pl-5 leading-[1.6] font-light">
                            나만의 도화 코드를 발현하여 자연스럽고 깊은 끌림을 형성하는 비결
                          </p>
                        </div>

                        <div className="p-4 rounded-xl bg-black/40 border border-[#B7A18A]/25 space-y-1">
                          <h4 className="text-[15px] md:text-[16px] font-bold text-[#FAF7F2] flex items-start gap-2">
                            <span className="text-[#B7A18A] shrink-0 font-mono">②</span>
                            <span>일지(배우자궁)로 읽는 평생 인연의 복덕</span>
                          </h4>
                          <p className="text-[15px] md:text-[16px] text-[#EDE6DA]/80 pl-5 leading-[1.6] font-light">
                            결혼과 장기적 파트너십에서 피해야 할 상극과 꼭 붙잡아야 할 귀인의 기운
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
                Section 13: 패키지 구성 요약과 중간 안내
               ═══════════════════════════════════════════════════════════════ */}
            <div
              className="rounded-3xl relative overflow-hidden shadow-2xl mb-28"
              style={{
                background: 'linear-gradient(115deg, #241E25 0%, #30262F 52%, #1C171D 100%)',
                border: '1px solid rgba(183, 161, 138, 0.35)',
                boxShadow: '0 12px 40px rgba(0, 0, 0, 0.35)'
              }}
            >
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 items-stretch break-keep">
                <div className="lg:col-span-5 relative w-full min-h-[260px] sm:min-h-[320px] lg:min-h-full overflow-hidden flex items-center justify-center">
                  <Image
                    src={productData.heroImage}
                    alt="선천코드 비기 3종 패키지 미리보기"
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover object-center"
                    priority
                  />
                </div>

                <div className="lg:col-span-7 w-full flex flex-col justify-between space-y-5 sm:space-y-6 text-left p-6 sm:p-8 md:p-10 lg:py-10 lg:pr-10 lg:pl-12">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1.5 flex-1">
                      <span className="text-xs font-elegant font-semibold tracking-wider text-[#B7A18A] uppercase block">
                        PACKAGE OVERVIEW
                      </span>
                      <h4 className="text-lg sm:text-xl md:text-[22px] font-elegant font-bold text-[#FAF7F2] leading-[1.4] break-keep">
                        PDF 3종 (본편 + 실전부록 1 + 실전부록 2)
                      </h4>
                      <div className="text-sm md:text-base text-[#EDE6DA]/90 font-light space-y-0.5 leading-[1.6]">
                        <p>선천코드 비기 3종 패키지 구성</p>
                        <p>오행 조화 디지털 비첩 파일 함께 제공</p>
                      </div>
                    </div>

                    <SeoncheonBadge className="shrink-0 mt-0.5">
                      출간 준비 중
                    </SeoncheonBadge>
                  </div>

                  <div className="border-b border-white/10" />

                  <div className="space-y-1">
                    <span className="text-xs text-[#EDE6DA]/60">정식 발매 예정</span>
                    <div className="text-2xl sm:text-3xl font-elegant font-bold text-[#B7A18A] leading-none">
                      출간 준비 중 <span className="text-sm text-white/70 font-sans font-normal ml-1.5">(COMING SOON)</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2 items-stretch sm:items-center w-full">
                    <button
                      type="button"
                      onClick={handleAddToCart}
                      className="py-3.5 px-5 sm:px-6 rounded-xl font-elegant font-bold text-sm md:text-base border border-[#B7A18A]/60 text-[#B7A18A] hover:bg-[#493740]/30 transition-all duration-300 shrink-0 whitespace-nowrap text-center bg-transparent order-2 sm:order-1 cursor-pointer"
                    >
                      출간 알림 예약
                    </button>
                    <button
                      type="button"
                      onClick={handlePurchase}
                      className="flex-1 py-3.5 px-6 rounded-xl font-elegant font-bold text-sm md:text-base transition-all duration-300 flex items-center justify-center gap-2 text-[#FAF7F2] order-1 sm:order-2 cursor-pointer"
                      style={{
                        background: 'linear-gradient(135deg, #493740 0%, #30262F 100%)',
                        border: '1px solid #B7A18A'
                      }}
                    >
                      <span>선천코드 비기 준비 중</span>
                      <ChevronRight className="w-4 h-4 text-[#FAF7F2] shrink-0" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <AntiqueDivider />

            {/* ═══════════════════════════════════════════════════════════════
                Section 14: CORE DIFFERENTIATION (선천코드 비기 3대 차별화 카드)
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-28 text-left w-full max-w-[1280px] mx-auto">
              <Reveal>
                <div className="space-y-10 md:space-y-14">
                  <div className="text-center max-w-3xl mx-auto space-y-4 break-keep">
                    <span className="text-[#B7A18A] font-elegant text-[12pt] font-semibold tracking-[0.2em] uppercase block">
                      CORE DIFFERENTIATION
                    </span>
                    <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white leading-[1.4] break-keep">
                      왜 《선천코드 비기》여야만 하는가?<br />
                      <span className="text-[#B7A18A]">기존의 뻔한 사주·연애 상담과의 3대 결정적 차이</span>
                    </h2>
                    <p className="text-[#EDE6DA]/85 text-[17px] md:text-[18px] mt-2 font-normal leading-[1.8] break-keep">
                      두루뭉술한 미신이나 뜬구름 잡는 위로가 아닌, 오행 본능과 심리학이 결합된 실전 솔루션.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
                    {/* CARD 01 */}
                    <div
                      className="p-7 sm:p-8 rounded-2xl md:rounded-3xl shadow-[0_12px_36px_rgba(0,0,0,0.35)] backdrop-blur-md flex flex-col justify-between h-full transition-all duration-300 hover:-translate-y-1.5 hover:border-[#B7A18A]/70 group"
                      style={{
                        background: 'linear-gradient(115deg, #30262F 0%, #241E25 48%, #1C171D 100%)',
                        border: '1px solid rgba(183, 161, 138, 0.35)',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.35)'
                      }}
                    >
                      <div>
                        <div className="pb-5 mb-5 border-b border-[#B7A18A]/25 flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div
                              className="w-10 h-10 rounded-xl border border-[#B7A18A]/40 flex items-center justify-center text-[#B7A18A] shadow-sm"
                              style={{ background: '#493740' }}
                            >
                              <Sparkles className="w-5 h-5 text-[#B7A18A]" />
                            </div>
                            <div>
                              <span className="text-[11px] font-mono tracking-widest text-[#B7A18A]/80 uppercase block">
                                CARD 01
                              </span>
                              <h3 className="text-[18px] md:text-[20px] font-bold font-elegant text-[#FAF7F2]">
                                미신이 아닌 인간 심리 본능
                              </h3>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <p className="text-[16px] md:text-[17px] font-bold text-[#B7A18A] leading-[1.55] break-keep">
                            막연한 길흉화복 예언이 아닌 &lsquo;오행 심리 역학&rsquo;입니다.
                          </p>
                          <div className="space-y-3 text-[14px] sm:text-[15px] text-[#EDE6DA]/90 leading-[1.75] font-normal break-keep">
                            <p>
                              사주를 현대 관계 심리학의 언어로 완벽히 재해석하여, 왜 그런 행동을 하고 무엇을 두려워하는지 상대의 뇌 속 지도를 명쾌히 읽어냅니다.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* CARD 02 */}
                    <div
                      className="p-7 sm:p-8 rounded-2xl md:rounded-3xl shadow-[0_12px_36px_rgba(0,0,0,0.35)] backdrop-blur-md flex flex-col justify-between h-full transition-all duration-300 hover:-translate-y-1.5 hover:border-[#B7A18A]/70 group"
                      style={{
                        background: 'linear-gradient(115deg, #30262F 0%, #241E25 48%, #1C171D 100%)',
                        border: '1px solid rgba(183, 161, 138, 0.35)',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.35)'
                      }}
                    >
                      <div>
                        <div className="pb-5 mb-5 border-b border-[#B7A18A]/25 flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div
                              className="w-10 h-10 rounded-xl border border-[#B7A18A]/40 flex items-center justify-center text-[#B7A18A] shadow-sm"
                              style={{ background: '#493740' }}
                            >
                              <Compass className="w-5 h-5 text-[#B7A18A]" />
                            </div>
                            <div>
                              <span className="text-[11px] font-mono tracking-widest text-[#B7A18A]/80 uppercase block">
                                CARD 02
                              </span>
                              <h3 className="text-[18px] md:text-[20px] font-bold font-elegant text-[#FAF7F2]">
                                만세력 3분 판독 실전 도구
                              </h3>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <p className="text-[16px] md:text-[17px] font-bold text-[#B7A18A] leading-[1.55] break-keep">
                            어려운 한자 없이 누구나 따라 할 수 있는 직관적 도감입니다.
                          </p>
                          <div className="space-y-3 text-[14px] sm:text-[15px] text-[#EDE6DA]/90 leading-[1.75] font-normal break-keep">
                            <p>
                              스마트폰 무료 만세력 앱과 이 책 한 권이면, 나와 상대의 핵심 3글자만 찾아내어 관계의 본질을 즉시 파악할 수 있습니다.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* CARD 03 */}
                    <div
                      className="p-7 sm:p-8 rounded-2xl md:rounded-3xl shadow-[0_12px_36px_rgba(0,0,0,0.35)] backdrop-blur-md flex flex-col justify-between h-full transition-all duration-300 hover:-translate-y-1.5 hover:border-[#B7A18A]/70 group"
                      style={{
                        background: 'linear-gradient(115deg, #30262F 0%, #241E25 48%, #1C171D 100%)',
                        border: '1px solid rgba(183, 161, 138, 0.35)',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.35)'
                      }}
                    >
                      <div>
                        <div className="pb-5 mb-5 border-b border-[#B7A18A]/25 flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div
                              className="w-10 h-10 rounded-xl border border-[#B7A18A]/40 flex items-center justify-center text-[#B7A18A] shadow-sm"
                              style={{ background: '#493740' }}
                            >
                              <ShieldCheck className="w-5 h-5 text-[#B7A18A]" />
                            </div>
                            <div>
                              <span className="text-[11px] font-mono tracking-widest text-[#B7A18A]/80 uppercase block">
                                CARD 03
                              </span>
                              <h3 className="text-[18px] md:text-[20px] font-bold font-elegant text-[#FAF7F2]">
                                평생의 인연 주권 회복
                              </h3>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <p className="text-[16px] md:text-[17px] font-bold text-[#B7A18A] leading-[1.55] break-keep">
                            일회성 위로가 아닌 &lsquo;평생 내 삶을 지켜주는 안목&rsquo;입니다.
                          </p>
                          <div className="space-y-3 text-[14px] sm:text-[15px] text-[#EDE6DA]/90 leading-[1.75] font-normal break-keep">
                            <p>
                              내 매혹의 원천인 도화 기운을 회복하고, 악연을 걸러내어 나를 온전히 사랑해줄 귀인을 판별하는 평생의 지혜를 얻게 됩니다.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </section>

            <AntiqueDivider />

            {/* ═══════════════════════════════════════════════════════════════
                Section 15: 실전 200% 활용 가이드 & 실전 분석 노트 (통합 보존)
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-28 w-full max-w-[1280px] mx-auto">
              <Reveal>
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
                  <div className="flex flex-col lg:justify-between w-full h-full">
                    <div className="relative w-full aspect-[3/4] overflow-hidden rounded-[32px] md:rounded-[40px] border border-[#B7A18A]/30 shadow-2xl bg-black/40 flex items-center justify-center">
                      <Image
                        src={productData.heroImage}
                        alt="선천코드 비기 실전 200% 활용 가이드"
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-contain"
                        priority
                      />
                    </div>

                    <div className="mt-6 md:mt-7 w-full flex flex-col items-center text-center justify-center min-h-[48px]">
                      <div className="flex items-center justify-center gap-3 w-full">
                        <div className="h-[1px] w-8 sm:w-12 bg-gradient-to-r from-transparent to-[#B7A18A]/60" />
                        <p className="font-elegant text-[15px] sm:text-[16px] text-[#B7A18A] tracking-wide">
                          점검하고, 적용하고, 나의 것으로.
                        </p>
                        <div className="h-[1px] w-8 sm:w-12 bg-gradient-to-l from-transparent to-[#B7A18A]/60" />
                      </div>
                      <p className="text-[12px] sm:text-[13px] text-[#FAF7F2]/75 mt-1.5 tracking-wider font-light">
                        상대를 알고 나를 지키는 선천코드의 시간
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col lg:justify-between w-full h-full text-left break-keep">
                    <div className="space-y-6 md:space-y-7">
                      <div>
                        <h2 className="font-elegant font-bold leading-[1.3] text-left">
                          <span className="block text-2xl md:text-[28px] text-[#B7A18A]">
                            《선천코드 비기》
                          </span>
                          <span className="block text-3xl md:text-[36px] lg:text-[40px] text-[#FAF7F2] mt-1.5 break-keep">
                            실전 200% 활용 가이드
                          </span>
                        </h2>
                      </div>

                      <div className="pt-1">
                        <p className="text-[20px] md:text-[24px] font-elegant font-bold text-[#FAF7F2] leading-[1.6] break-keep">
                          “읽고 끝나는 책이 아니라,<br className="hidden sm:inline" />
                          {' '}점검하고 적용하는 <span className="text-[#B7A18A]">‘실전 인연 분석 노트’</span>”
                        </p>
                      </div>

                      <div className="text-[16px] md:text-[18px] text-[#F2EAE0] leading-[1.8] font-normal break-keep">
                        <p>
                          단순한 이론 습득에 그치지 않고, 스마트폰 만세력 앱으로 나와 상대의 사주를 직접 조회해 바로 적용할 수 있는 4단계 실전 로드맵을 제공합니다.
                        </p>
                      </div>

                      <div className="flex flex-col gap-2 md:gap-2.5 pt-1">
                        {[
                          {
                            title: "1. 나와 상대의 선천코드를 판독하세요.",
                            desc: "무료 만세력 앱으로 일간, 일지, 월지 3글자를 찾아내어 타고난 오행 분포를 확인합니다."
                          },
                          {
                            title: "2. 십성 5대 본능과 방어기제를 분석하세요.",
                            desc: "상대가 어떤 지점에서 불안을 느끼고 무엇을 갈망하는지 무의식 엔진을 해독합니다."
                          },
                          {
                            title: "3. 상생의 대화법과 도화 기운을 발현하세요.",
                            desc: "상극의 충돌을 피하고 나만의 도화 매혹을 은은하게 피워내어 호감과 신뢰를 극대화합니다."
                          },
                          {
                            title: "4. 평생의 귀인과 배우자 복덕을 확정하세요.",
                            desc: "나를 진정으로 행복하게 해줄 인연인지, 상생과 상극의 지표로 관계의 미래를 점검합니다."
                          }
                        ].map((guide, idx) => (
                          <div
                            key={idx}
                            className="p-3.5 sm:p-4 rounded-xl border border-[#B7A18A]/20 bg-white/[0.03] flex items-start gap-3"
                          >
                            <div className="w-5 h-5 rounded-full bg-[#493740] border border-[#B7A18A] flex items-center justify-center shrink-0 mt-0.5 text-xs text-[#FAF7F2] font-bold">
                              {idx + 1}
                            </div>
                            <div>
                              <h4 className="text-[15px] sm:text-[16px] font-bold text-[#FAF7F2]">
                                {guide.title}
                              </h4>
                              <p className="text-xs sm:text-sm text-[#EDE6DA]/75 mt-0.5 leading-relaxed">
                                {guide.desc}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </section>

            <AntiqueDivider />

            {/* ═══════════════════════════════════════════════════════════════
                Section 16: POSITION SHIFT (관계 변화 메시지 및 감성 이미지)
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-28 text-left w-full max-w-[1280px] mx-auto">
              <Reveal>
                <div className="space-y-12">
                  <div className="text-center max-w-3xl mx-auto space-y-4 break-keep">
                    <span className="text-[#B7A18A] font-elegant text-[12pt] font-semibold tracking-[0.2em] uppercase block">
                      POSITION SHIFT
                    </span>
                    <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white leading-[1.4] break-keep">
                      &ldquo;관계를 바꾸는 것은 상대의 눈치를 보는 것이 아니라,<br />
                      <span className="text-[#B7A18A]">나의 중심과 기운을 온전히 세우는 일입니다.&rdquo;</span>
                    </h2>
                    <div className="text-[17px] md:text-[18px] text-[#EDE6DA]/85 leading-[1.8] font-normal break-keep space-y-2">
                      <p>
                        상대방의 마음에만 매달리며 불안해하던 순간들.<br />
                        이제는 내 타고난 고유한 본성을 깨우고, 인연의 주권자로 당당히 서십시오.
                      </p>
                    </div>
                  </div>

                  <div className="relative w-full aspect-[16/9] md:aspect-[1672/941] rounded-2xl md:rounded-[20px] overflow-hidden shadow-2xl flex items-center justify-center border border-[#B7A18A]/30">
                    <Image
                      src={productData.topBannerImage}
                      alt="선천코드 관계 역학 인포그래픽"
                      fill
                      sizes="(max-width: 1280px) 100vw, 1280px"
                      className="object-cover"
                      priority
                    />
                  </div>

                  <div className="text-center max-w-3xl mx-auto space-y-4 md:space-y-5 mt-28 md:mt-40 break-keep">
                    <span className="text-[#B7A18A] font-elegant text-[12pt] font-semibold tracking-[0.2em] uppercase block">
                      SOVEREIGN OF RELATIONSHIP
                    </span>
                    <h3
                      className="text-[26px] sm:text-[30px] md:text-[36px] font-elegant font-bold text-[#FAF7F2] break-keep"
                      style={{ lineHeight: 1.4 }}
                    >
                      “을(乙)의 자리를 떠나,<br />
                      이제 스스로 <span className="text-[#B7A18A]">‘인연의 주권자’</span>가 되십시오.”
                    </h3>

                    <div className="space-y-3 text-[17px] md:text-[18px] text-[#EDE6DA]/85 leading-[1.8] font-normal break-keep pt-2">
                      <p>
                        매달리는 연애에서, 상대를 끌어당기는 사랑으로.
                      </p>
                      <p className="text-[#B7A18A] font-bold font-elegant text-[18px] md:text-[20px] pt-1">
                        선천코드를 아는 순간, 당신의 모든 인연이 새로워집니다.
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </section>

            <AntiqueDivider />

            {/* ═══════════════════════════════════════════════════════════════
                Section 17: REAL LIFE TRANSFORMATIONS (실전 체감 사례)
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-28 text-left w-full max-w-[1280px] mx-auto">
              <Reveal>
                <div className="text-center max-w-3xl mx-auto space-y-4 mb-14 break-keep">
                  <span className="text-[#B7A18A] font-elegant text-[12pt] font-semibold tracking-[0.2em] uppercase block mb-3">
                    REAL LIFE TRANSFORMATIONS
                  </span>
                  <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white tracking-wide leading-[1.4] break-keep">
                    실전 체감 사례
                  </h2>
                  <p className="text-[17px] md:text-[18px] text-[#EDE6DA]/85 leading-[1.8] font-normal break-keep">
                    선천코드를 통해 관계의 불안을 극복하고, 나만의 고유한 매혹을 깨운 생생한 변화를 살펴보세요.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
                  <div className="lg:col-span-5 flex flex-col justify-center">
                    <SeoncheonCaseImageSlot
                      src={transformationSlides[caseSlideIndex].image}
                      alt={transformationSlides[caseSlideIndex].title}
                      placeholderText={transformationSlides[caseSlideIndex].imagePlaceholder}
                    />
                  </div>

                  <div className="lg:col-span-7 flex flex-col justify-between space-y-5 lg:space-y-6">
                    <div className="flex-1 flex flex-col gap-4 sm:gap-5 justify-between">
                      {transformationSlides[caseSlideIndex].cases.map((cItem, cIdx) => (
                        <div
                          key={cIdx}
                          className="flex-1 p-6 sm:p-7 md:p-8 rounded-2xl md:rounded-3xl border border-[#B7A18A]/25 shadow-lg relative overflow-hidden flex flex-col justify-center space-y-3.5 transition-all duration-300 min-h-[160px] md:min-h-[180px] hover:-translate-y-1 hover:border-[#B7A18A]/40"
                          style={{
                            background: 'linear-gradient(145deg, rgba(48, 38, 47, 0.72), rgba(28, 23, 29, 0.82))',
                            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
                          }}
                        >
                          <div className="flex items-center justify-between gap-3">
                            <span
                              className="inline-flex items-center justify-center py-[5px] px-[12px] rounded-[6px] text-xs font-semibold whitespace-nowrap shadow-sm tracking-wide"
                              style={{
                                background: '#493740',
                                border: '1px solid #B7A18A',
                                color: '#F2EAE0',
                                lineHeight: 1.3,
                              }}
                            >
                              {cItem.num}
                            </span>
                            <span className="text-xs text-[#B7A18A]/70 font-mono">
                              {cItem.tag}
                            </span>
                          </div>
                          <p className="text-base sm:text-lg md:text-[18px] font-elegant font-medium text-white leading-relaxed break-keep">
                            &ldquo;{cItem.quote}&rdquo;
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-1 sm:pt-2 px-1">
                      <div className="flex items-center gap-2">
                        {transformationSlides.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={() => setCaseSlideIndex(idx)}
                            className={`h-2 rounded-full transition-all cursor-pointer ${caseSlideIndex === idx ? 'w-6 bg-[#B7A18A]' : 'w-2 bg-white/20'}`}
                            aria-label={`사례 슬라이드 ${idx + 1} 보기`}
                          />
                        ))}
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={prevCaseSlide}
                          className="w-10 h-10 rounded-xl border border-[#B7A18A]/30 bg-black/40 hover:bg-[#493740]/40 flex items-center justify-center text-[#B7A18A] transition-colors cursor-pointer"
                          aria-label="이전 사례"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                          type="button"
                          onClick={nextCaseSlide}
                          className="w-10 h-10 rounded-xl border border-[#B7A18A]/30 bg-black/40 hover:bg-[#493740]/40 flex items-center justify-center text-[#B7A18A] transition-colors cursor-pointer"
                          aria-label="다음 사례"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </section>

            <AntiqueDivider />

            {/* ═══════════════════════════════════════════════════════════════
                Section 18: Comparison Table (가치 비교 카드)
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-28 text-left w-full max-w-[1280px] mx-auto">
              <Reveal>
                <div className="text-center max-w-3xl mx-auto space-y-4 mb-14 break-keep">
                  <span className="text-[#B7A18A] font-elegant text-[12pt] font-semibold tracking-[0.2em] uppercase block mb-3">
                    Comparison Table
                  </span>
                  <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white tracking-wide leading-[1.4] break-keep">
                    단 한 권으로 끝내는<br />
                    <span className="text-[#B7A18A]">압도적인 실전 가치</span>
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
                  {/* 일반 사주/타로 상담 */}
                  <div
                    className="p-7 sm:p-9 rounded-2xl md:rounded-3xl border border-white/10 text-left flex flex-col justify-between h-full relative"
                    style={{
                      background: 'linear-gradient(145deg, rgba(36, 30, 37, 0.7), rgba(20, 16, 21, 0.85))'
                    }}
                  >
                    <div className="pb-5 mb-6 border-b border-white/10 min-h-[48px] md:min-h-[56px] flex items-center">
                      <h3 className="text-[20px] md:text-[22px] font-bold font-elegant text-white/70">
                        일반 사주·타로 상담
                      </h3>
                    </div>

                    <div className="space-y-6 flex-1 flex flex-col justify-between">
                      <div>
                        <span className="text-[14px] font-semibold text-white/50 block mb-1.5">
                          비용
                        </span>
                        <div className="text-[24px] md:text-[28px] font-bold font-elegant text-white/80 leading-none mb-1">
                          1회 5만 ~ 15만<span className="text-[16px] font-normal text-white/60 ml-1">원</span>
                        </div>
                      </div>

                      <div>
                        <span className="text-[14px] font-semibold text-white/50 block mb-1.5">
                          내용
                        </span>
                        <p className="text-[15px] md:text-[16px] text-white/70 leading-[1.7] break-keep">
                          단순 길흉화복 예언 및 일회성 소비, 돌아서면 잊혀짐
                        </p>
                      </div>

                      <div>
                        <span className="text-[14px] font-semibold text-white/50 block mb-1.5">
                          실행 도구
                        </span>
                        <p className="text-[15px] md:text-[16px] text-white/70 leading-[1.7] break-keep">
                          구체적 행동 지침 없음, 내담자의 불안만 가중
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 선천코드 비기 */}
                  <div
                    className="p-7 sm:p-9 rounded-2xl md:rounded-3xl border border-[#B7A18A]/50 shadow-[0_12px_40px_rgba(0,0,0,0.4)] text-left backdrop-blur-md flex flex-col justify-between h-full relative"
                    style={{
                      background: 'linear-gradient(145deg, rgba(73, 55, 64, 0.78), rgba(36, 30, 37, 0.86))'
                    }}
                  >
                    <div className="absolute -top-3.5 left-7 sm:left-9 z-10">
                      <span className="inline-block py-1 px-3 rounded-md text-[12px] font-bold text-[#FAF7F2] bg-[#493740] border border-[#B7A18A]/70 shadow-sm">
                        선천코드 비기 3종 올인원 세트
                      </span>
                    </div>

                    <div className="pb-5 mb-6 border-b border-[#B7A18A]/25 min-h-[48px] md:min-h-[56px] flex items-center relative z-10">
                      <h3 className="text-[20px] md:text-[22px] font-bold font-elegant text-[#FAF7F2]">
                        백도화 《선천코드 비기》
                      </h3>
                    </div>

                    <div className="space-y-6 flex-1 flex flex-col justify-between relative z-10">
                      <div>
                        <span className="text-[14px] font-semibold text-[#B7A18A] block mb-1.5">
                          소장 가치
                        </span>
                        <div className="text-[28px] md:text-[32px] font-bold font-elegant text-[#FAF7F2] leading-none mb-1">
                          평생 영구 소장<span className="text-[13px] md:text-[14px] font-normal text-[#FAF6EE]/80 ml-2 font-sans">(출간 예정)</span>
                        </div>
                      </div>

                      <div>
                        <span className="text-[14px] font-semibold text-[#B7A18A] block mb-1.5">
                          내용
                        </span>
                        <p className="text-[16px] md:text-[17px] text-[#FAF7F2] font-medium leading-[1.7] break-keep">
                          <span className="text-[#B7A18A] font-bold">오행 심리 분석</span> + 십성 본능 해독 + 도화 매혹
                        </p>
                      </div>

                      <div>
                        <span className="text-[14px] font-semibold text-[#B7A18A] block mb-1.5">
                          실행 도구
                        </span>
                        <p className="text-[16px] md:text-[17px] text-[#FAF7F2] font-medium leading-[1.7] break-keep">
                          스마트폰 <span className="text-[#B7A18A] font-bold">3분 만세력 판독표</span> + 이상형·배우자 판별 워크시트
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </section>

            <AntiqueDivider />

            {/* ═══════════════════════════════════════════════════════════════
                Section 19: FAQ 아코디언 (자주 묻는 질문 8문항)
               ═══════════════════════════════════════════════════════════════ */}
            <section id="faq" className="mb-28 text-left max-w-4xl mx-auto">
              <Reveal>
                <div className="text-center space-y-4 mb-14">
                  <span className="text-[#B7A18A] font-elegant text-[12pt] font-semibold tracking-[0.2em] uppercase block">
                    Frequently Asked Questions
                  </span>
                  <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white tracking-wide leading-[1.45]">
                    자주 묻는 <span className="text-[#B7A18A]">질문</span>
                  </h2>
                  <p className="text-[17px] md:text-[18px] text-[#EDE6DA]/75 leading-[1.8] font-normal break-keep">
                    선천코드 비기에 관해 가장 많이 묻는 핵심 질문입니다.
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      q: "사주나 명리학을 전혀 몰라도 이해할 수 있나요?",
                      a: "네, 완전히 처음 접하시는 분들도 쉽게 이해하실 수 있도록 복잡한 한자나 난해한 이론을 배제하고 직관적인 현대 심리학 용어로 완전히 풀어냈습니다. 스마트폰 무료 만세력 앱에서 글자 3개만 확인하면 바로 대입할 수 있는 상세 가이드가 포함되어 있습니다."
                    },
                    {
                      q: "상대방의 태어난 시간(시)을 몰라도 판독이 가능한가요?",
                      a: "네, 가능합니다. 선천코드의 핵심인 ‘일간(성정과 본능)’과 ‘월지(사회적 욕망)’, ‘일지(배우자관)’는 생년월일만으로도 판독이 가능하므로, 태어난 시간을 모르더라도 상대방의 주요 심리 메커니즘을 충분히 파악할 수 있습니다."
                    },
                    {
                      q: "타고난 운명대로만 살아야 한다는 뜻인가요?",
                      a: "결코 아닙니다. 선천코드는 정해진 운명의 감옥이 아니라, 내가 어떤 기운의 결핍과 강점을 가지고 태어났는지를 알려주는 ‘심리적 내비게이션’입니다. 나의 약점과 상대의 본능을 알면 얼마든지 상생의 조화로운 관계를 스스로 창조할 수 있습니다."
                    },
                    {
                      q: "현재 연애 중이거나 결혼한 상태에서도 도움이 되나요?",
                      a: "매우 큰 도움이 됩니다. 반복되는 사소한 다툼이나 권태기, 서로를 이해하지 못해 생기는 오해의 원인을 명확히 짚어주므로 부부 관계나 오랜 연인 관계의 조화를 회복하는 데 탁월한 효과가 있습니다."
                    },
                    {
                      q: "재회나 짝사랑 상황에서도 적용할 수 있나요?",
                      a: "네, 상대방의 십성 본능과 결핍 코드를 알면 상대가 어떤 방식의 접근을 부담스러워하고 어떤 대화에 마음을 여는지 파악할 수 있어, 감정적인 실수를 줄이고 지혜롭게 마음을 여는 데 결정적인 가이드가 됩니다."
                    },
                    {
                      q: "일반 사주 상담이나 점성술과 무엇이 다른가요?",
                      a: "일반 상담은 상담사의 주관적 예언에 그치고 돌아서면 잊혀지지만, 《선천코드 비기》는 인간 심리와 본능에 기반하여 스스로 사람을 판별하고 평생 관계를 주도할 수 있는 ‘실전 분석 도구’를 내 것으로 만들어 드립니다."
                    },
                    {
                      q: "구매 후 어떻게 열람하나요?",
                      a: "정식 출간 후 결제 완료 즉시 마이페이지에서 PDF 파일로 즉시 다운로드하여 스마트폰, 태블릿, PC 등 모든 기기에서 평생 소장하며 열람하실 수 있습니다."
                    },
                    {
                      q: "PDF 전자책은 영구 소장이 가능한가요?",
                      a: "네, 다운로드 받으신 PDF 파일은 횟수나 기기 제한 없이 평생 영구 소장이 가능하며 언제든 필요할 때마다 다시 펼쳐보실 수 있습니다."
                    }
                  ].map((faq, idx) => (
                    <div
                      key={idx}
                      className="border border-[#B7A18A]/25 rounded-2xl overflow-hidden bg-white/[0.02] transition-colors"
                    >
                      <button
                        type="button"
                        onClick={() => toggleFaq(idx)}
                        className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/[0.03]"
                      >
                        <span className="font-elegant font-bold text-base sm:text-lg text-[#FAF7F2] break-keep">
                          {faq.q}
                        </span>
                        <ChevronDown
                          className={`w-5 h-5 text-[#B7A18A] shrink-0 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`}
                        />
                      </button>
                      {openFaq === idx && (
                        <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm sm:text-base text-[#EDE6DA]/85 leading-relaxed font-light border-t border-white/5 pt-4 break-keep">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </Reveal>
            </section>

            <AntiqueDivider />

            {/* ═══════════════════════════════════════════════════════════════
                Section 20: 구매 전 안내
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-28 w-full max-w-[1280px] mx-auto">
              <Reveal>
                <div
                  className="rounded-3xl p-8 sm:p-10 md:p-12 text-left space-y-6 backdrop-blur-md transition-all duration-300"
                  style={{
                    background: 'linear-gradient(135deg, rgba(242, 234, 224, 0.05) 0%, rgba(73, 55, 64, 0.15) 100%)',
                    border: '1px solid rgba(183, 161, 138, 0.25)',
                    boxShadow: 'none',
                  }}
                >
                  <div className="space-y-2 border-b border-white/10 pb-4">
                    <span className="text-xs font-mono font-bold text-[#B7A18A] uppercase tracking-wider block">
                      NOTICE
                    </span>
                    <h3 className="text-xl sm:text-2xl font-elegant font-bold text-[#FAF7F2]">
                      구매 전 안내
                    </h3>
                  </div>

                  <ul className="space-y-3.5 text-xs sm:text-sm md:text-[15px] text-[#EDE6DA]/85 leading-relaxed font-light break-keep">
                    <li className="flex items-start gap-2.5">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#B7A18A] shrink-0" />
                      <span>본 상품은 실물 배송이 없는 디지털 전자책(PDF 파일) 상품입니다.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#B7A18A] shrink-0" />
                      <span>현재 정식 출시 준비 중인 상품으로, 오픈 이후 즉시 다운로드해 확인하실 수 있습니다.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#B7A18A] shrink-0" />
                      <span>디지털 콘텐츠의 특성상 파일이 다운로드되거나 메일로 발송된 이후에는 단순 변심에 의한 환불이 제한될 수 있습니다.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#B7A18A] shrink-0" />
                      <span>본 콘텐츠는 관계 심리의 이해, 자기인식 및 건강한 관계 형성을 돕기 위한 자기계발 콘텐츠이며, 전문적인 심리치료·정신건강 상담·법률 자문을 대체하지 않습니다.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#B7A18A] shrink-0" />
                      <span>
                        자세한 취소/환불 기준은 하단의{' '}
                        <Link href="/terms" className="text-[#B7A18A] underline underline-offset-4 hover:text-white transition-colors">
                          이용약관
                        </Link>
                        {' '}및{' '}
                        <Link href="/refund" className="text-[#B7A18A] underline underline-offset-4 hover:text-white transition-colors">
                          환불정책
                        </Link>
                        을 참고해 주시기 바랍니다.
                      </span>
                    </li>
                  </ul>
                </div>
              </Reveal>
            </section>

            <AntiqueDivider />

            {/* ═══════════════════════════════════════════════════════════════
                Section 21: 관계 변화 메시지 및 감성 배너
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-28 text-center max-w-3xl mx-auto space-y-6">
              <Reveal>
                <div className="space-y-3">
                  <p className="text-xl sm:text-2xl font-elegant font-bold text-[#FAF7F2]">
                    “나를 아는 순간, 삶을 바라보는 시선이 달라집니다.”
                  </p>
                  <p className="text-sm sm:text-base text-[#EDE6DA]/70 font-light">
                    선천코드 비기와 함께 평생 흔들리지 않는 나만의 기운을 되찾으세요.
                  </p>
                </div>
              </Reveal>
            </section>

            <AntiqueDivider />

            {/* ═══════════════════════════════════════════════════════════════
                Section 22: 최종 구매 CTA (Final Purchase / 출간 준비 중 안내)
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-28 w-full max-w-3xl mx-auto">
              <Reveal>
                <div
                  className="rounded-3xl p-8 sm:p-10 md:p-12 text-center shadow-2xl relative overflow-hidden"
                  style={{
                    background: 'linear-gradient(180deg, #30262F 0%, #241E25 52%, #1C171D 100%)',
                    border: '1px solid rgba(183, 161, 138, 0.65)',
                    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.45)'
                  }}
                >
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="mb-3">
                        <SeoncheonBadge>
                          올인원 완성형 패키지
                        </SeoncheonBadge>
                      </div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-elegant font-bold text-white leading-[1.4] break-keep mb-2">
                        백도화 선천코드 비기 올인원 세트
                      </h3>
                      <p className="text-[18px] text-[#FAF7F2] font-semibold break-keep mb-1.5">
                        선천코드 비기 본편 · 실전 부록 1 · 실전 부록 2
                      </p>
                      <p className="text-[15px] sm:text-[16px] text-[#B7A18A] font-medium break-keep">
                        ✦ 특별 부록: 오행 조화 디지털 비첩 제공
                      </p>
                    </div>

                    <div className="py-4 border-y border-white/10 space-y-1 text-center">
                      <span className="text-xs text-[#EDE6DA]/50">정식 출간 예정</span>
                      <div className="text-3xl sm:text-4xl font-elegant font-bold text-[#B7A18A]">
                        출간 준비 중 <span className="text-sm text-white/70 font-sans font-normal ml-2">(COMING SOON)</span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 pt-2 items-stretch sm:items-center w-full">
                      <button
                        type="button"
                        onClick={handleAddToCart}
                        className="py-4 px-6 rounded-xl font-elegant font-bold text-sm md:text-base border border-[#B7A18A]/60 text-[#B7A18A] hover:bg-[#493740]/40 transition-all duration-300 shrink-0 whitespace-nowrap text-center bg-transparent order-2 sm:order-1 cursor-pointer"
                      >
                        출간 알림 예약
                      </button>
                      <button
                        type="button"
                        onClick={handlePurchase}
                        className="flex-1 py-4 px-8 rounded-xl font-elegant font-bold text-base md:text-lg transition-all duration-300 flex items-center justify-center gap-2 text-[#FAF7F2] order-1 sm:order-2 cursor-pointer"
                        style={{
                          background: 'linear-gradient(135deg, #493740 0%, #30262F 100%)',
                          border: '1px solid #B7A18A'
                        }}
                      >
                        <span>선천코드 비기 준비 중</span>
                        <ChevronRight className="w-5 h-5 text-[#FAF7F2] shrink-0" />
                      </button>
                    </div>

                    <p className="text-[11px] text-[#EDE6DA]/50 text-center font-light pt-1">
                      오픈 즉시 마이페이지에서 다운로드 및 열람이 가능합니다.
                    </p>
                  </div>
                </div>
              </Reveal>
            </section>

            <AntiqueDivider />

            {/* ═══════════════════════════════════════════════════════════════
                Section 23: Policy Links & Footer
               ═══════════════════════════════════════════════════════════════ */}
            <section className="pb-10 text-center">
              <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-[#EDE6DA]/50">
                <Link href="/terms" className="hover:text-[#B7A18A] transition-colors">이용약관</Link>
                <span>|</span>
                <Link href="/privacy" className="hover:text-[#B7A18A] transition-colors">개인정보처리방침</Link>
                <span>|</span>
                <Link href="/refund" className="hover:text-[#B7A18A] transition-colors">배송 및 환불정책</Link>
              </div>
            </section>

          </div>
        </div>

        {/* 📱 모바일 화면 하단 고정 구매 바 */}
        <MobileStickyBuyBar
          price={0}
          onPurchase={handlePurchase}
          buttonText="선천코드 비기 준비 중 →"
        />

        <Footer />
      </GlobalBackground>
    </main>
  )
}
