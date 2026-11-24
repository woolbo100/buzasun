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
  MessageSquare,
  Compass
} from 'lucide-react'
import RecommendedForCards, { hanjiFiberSvg } from '@/components/RecommendedForCards'
import MobileStickyBuyBar from '@/components/MobileStickyBuyBar'
import { seoncheonCodeAssets } from './assets'

// ═══════════════════════════════════════════════════════════════════════════
// 📦 상품 기본 정보 및 결제 연동 설정
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
  checkoutUrl: '/checkout?productId=seoncheon-code-bigi',
  price: 29000,
  regularPrice: 79000,
  discountRate: '63% OFF',

  topBannerImage: '/image/seoncheon-code-bigi/hero-secret-code.webp',
  heroImage: '/image/seoncheon-code-bigi/book-purchase-mockup.webp',
  overviewImage: '/image/seoncheon-code-bigi/seoncheon-code-trilogy-package.webp',
  recommendedImage: '/image/seoncheon-code-secret-book.webp',
  formulaImage: '/image/seoncheon-code-secret-book.webp',
  bookIntroImage: '/image/seoncheon-code-secret-book.webp',
  premiumImage: '/image/seoncheon-code-secret-book.webp',
  ctaImage: '/image/seoncheon-code-secret-book.webp',

  curriculumImage: '/image/seoncheon-code-bigi/three-code-decoding-roadmap.webp',
  packageImage: '/image/seoncheon-code-bigi/seoncheon-code-all-in-one-mockup.webp',
  reunionLawImage: '/image/seoncheon-code-bigi/law-of-code-reading.webp',
  sovereignImage: '/image/seoncheon-code-bigi/sovereign-of-relationship.webp',
  bookPreviewGuideImage: '/image/seoncheon-code-secret-book.webp',
  bookPreviewToolsImage: '/image/seoncheon-code-secret-book.webp',
  bookPreviewJourneyImage: '/image/seoncheon-code-secret-book.webp',
  anxietyImage: '/image/seoncheon-code-bigi/relationship-disconnection.webp',
  repeatingPatternImage: '/image/seoncheon-code-bigi/repeating-love-pattern.webp',
  whySecretCodeBg: '/image/seoncheon-code-bigi/why-secret-code-bg.webp',
  useTogetherRoadmap: '/image/seoncheon-code-bigi/use-together-roadmap.webp',
  authorIntroductionBg: '/image/seoncheon-code-bigi/author-introduction-bg.webp',
  practicalUsageGuide: '/image/seoncheon-code-bigi/practical-usage-guide.webp',
  readingPeopleGuide: '/image/seoncheon-code-bigi/seoncheon-code-bigi-reading-people-guide-4x3.webp',
  heartBanner: '/image/seoncheon-code-bigi/final-heart-banner.webp',
}

// 🏷️ 통일된 묵자색 뱃지 컴포넌트 (배경 #493740 · 테두리 #B7A18A · 텍스트 #F2EAE0)
function SeoncheonBadge({
  children,
  className = '',
  style = {},
}: {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}) {
  return (
    <span
      className={`inline-flex items-center justify-center py-[5px] px-[12px] rounded-[6px] text-xs font-semibold whitespace-nowrap shadow-sm tracking-wide ${className}`}
      style={{
        background: '#493740',
        border: '1px solid #B7A18A',
        color: '#F2EAE0',
        lineHeight: 1.3,
        fontSize: '12px',
        ...style,
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
    <div className={`relative w-full aspect-[3/4] rounded-2xl md:rounded-3xl overflow-hidden border border-[#B7A18A]/30 shadow-2xl bg-[#1C171D] transition-all duration-300 flex items-center justify-center ${className}`}>
      {!hasError && src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-contain transition-opacity duration-300 block"
          onError={() => setHasError(true)}
          priority
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

  const isRealImage = asset.src && asset.src.trim() !== '' && !hasError && !asset.isPlaceholder

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

// 🖼️ 책 속에서 만날 내용(Inside The Secret Book) 3종 전용 미리보기 슬롯 컴포넌트
function PreviewBookSlot({
  assetKey,
  previewNum,
  title,
  desc,
}: {
  assetKey: keyof typeof seoncheonCodeAssets
  previewNum: string
  title: string
  desc: string
}) {
  const asset = seoncheonCodeAssets[assetKey]
  const [hasError, setHasError] = useState(false)

  const isReal = asset && asset.src && asset.src.trim() !== '' && !hasError && !asset.isPlaceholder

  return (
    <div className="w-full hover:-translate-y-1 transition-transform duration-300">
      <div className="relative w-full aspect-[440/660] rounded-[14px] md:rounded-[18px] overflow-hidden border border-[#B7A18A]/30 shadow-lg bg-[#1C171D] flex flex-col justify-between">
        {isReal ? (
          <Image
            src={asset.src}
            alt={title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-contain block"
            onError={() => setHasError(true)}
          />
        ) : (
          <div
            className="w-full h-full flex flex-col items-center justify-between p-6 sm:p-7 text-center"
            style={{
              background: 'radial-gradient(ellipse at 50% 35%, rgba(73, 55, 64, 0.45) 0%, rgba(28, 23, 29, 0.95) 100%)',
            }}
          >
            {/* 상단 라벨 */}
            <div className="w-full flex justify-between items-center border-b border-[#B7A18A]/20 pb-3">
              <span className="text-[12px] font-mono font-bold text-[#B7A18A] tracking-wider uppercase">
                {previewNum}
              </span>
              <span
                className="py-[3px] px-[8px] rounded-[6px] text-[10px] font-semibold text-[#F2EAE0]"
                style={{
                  background: '#493740',
                  border: '1px solid #B7A18A',
                }}
              >
                미리보기
              </span>
            </div>

            {/* 중앙 아이콘 및 안내 */}
            <div className="my-auto space-y-3">
              <div className="w-12 h-12 mx-auto rounded-xl bg-[#30262F]/80 border border-[#B7A18A]/50 flex items-center justify-center text-[#B7A18A] shadow-md">
                <ImageIcon className="w-6 h-6 text-[#B7A18A]" />
              </div>
              <div className="space-y-1.5 max-w-[220px]">
                <h4 className="text-sm sm:text-base font-elegant font-bold text-[#FAF7F2] break-keep leading-snug">
                  {title}
                </h4>
                <p className="text-[11px] sm:text-xs text-[#EDE6DA]/75 font-light leading-relaxed break-keep">
                  {desc}
                </p>
              </div>
            </div>

            {/* 하단 캡션 */}
            <p className="text-[10px] text-[#B7A18A]/60 tracking-wider pt-2 border-t border-white/10 w-full">
              ※ 출간 시 고해상도 내지·도감이 적용됩니다
            </p>
          </div>
        )}
      </div>
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
    desc: '인연의 엇갈림은 우연이 아닙니다. 태어난 순간 새겨진 선천코드와 5대 본능의 역학'
  },
  {
    chapter: 'PART 1',
    title: '선천코드의 원리: 사주 오행이 설계한 인간 심리의 지도',
    desc: '목·화·토·금·수 5대 기운의 결핍과 과다가 만들어내는 무의식적 끌림과 관계의 패턴'
  },
  {
    chapter: 'PART 2',
    title: '십성(十星) 5대 본능: 사람을 움직이는 5가지 무의식 엔진',
    desc: '비겁·식상·재성·관성·인성 5대 본능이 지배하는 상대방의 욕망과 방어기제 완전 분석'
  },
  {
    chapter: 'PART 3',
    title: '10대 일간(日干) 페르소나: 나와 상대의 타고난 성정과 매혹 코드',
    desc: '갑을병정무기경신임계 10대 일간 캐릭터 도감과 각 일간을 무장해제시키는 핵심 비결'
  },
  {
    chapter: 'PART 4',
    title: '도화(桃花)와 매혹의 비밀: 끌림을 만드는 기운의 역학',
    desc: '자오묘유 4대 도화의 본질과 상대의 시선을 사로잡는 나만의 고유한 매혹 발현법'
  },
  {
    chapter: 'PART 5',
    title: '이상형과 배우자 판별: 궁합과 인연의 깊이를 읽는 눈',
    desc: '일지와 월지로 판별하는 운명적 끌림, 상생의 동반자 vs 갈등의 원인 감별법'
  },
  {
    chapter: 'PART 6',
    title: '관계의 그림자와 갈등 극복: 상생과 상극을 다스리는 지혜',
    desc: '피할 수 없는 기운의 충돌을 완화하고 차가워진 관계를 회복하는 오행 조화 공식'
  },
  {
    chapter: 'PART 7',
    title: '인연의 주권자가 되는 법: 선천코드를 넘어 나만의 운명 개척하기',
    desc: '타인에게 휘둘리던 관계의 을(乙)에서 벗어나, 내 삶과 인연의 진정한 주권자로 거듭나기'
  },
  {
    chapter: '에필로그',
    title: '타고난 코드를 알고 나면, 비로소 자유로워진다',
    desc: '나를 온전히 이해하는 순간 시작되는 평온하고 당당한 인연의 완성'
  }
]

const manualBookToc = [
  {
    chapter: 'CHAPTER 1',
    title: '10대 일간별 성향·연애 스타일·핵심 결핍 해독',
    desc: '상대방의 일간 글자 하나로 속마음, 약점, 대화 선호 방식까지 꿰뚫는 실전 분석표'
  },
  {
    chapter: 'CHAPTER 2',
    title: '십성 5대 본능으로 읽는 상대의 무의식 방어기제',
    desc: '회피형, 불안형, 통제형 등 관계의 저항을 불러일으키는 무의식 스위치 해제법'
  },
  {
    chapter: 'CHAPTER 3',
    title: '오행 불균형에 따른 관계 갈등 처방전',
    desc: '기운이 부딪칠 때 어떤 말과 태도로 상극의 에너지를 상생으로 바꿀 것인가'
  },
  {
    chapter: 'CHAPTER 4',
    title: '만세력 앱으로 나와 상대의 선천코드 3분 판독법',
    desc: '생년월일시만 알면 누구나 바로 따라 할 수 있는 일간·일지·월지 핵심 3글자 분석 가이드'
  }
]

const messageBookToc = [
  {
    chapter: 'PART 1',
    title: '4대 도화(자·오·묘·유)의 매혹 특성과 발현 조건',
    desc: '숨겨진 나만의 도화 기운을 활성화하여 은은하고 거부할 수 없는 매력을 만드는 법'
  },
  {
    chapter: 'PART 2',
    title: '일지와 월지로 보는 이상형과 실제 인연의 간극',
    desc: '머리로 바라는 이상형과 무의식이 진정으로 갈망하는 파트너의 차이 규명'
  },
  {
    chapter: 'PART 3',
    title: '배우자 자리(일지)의 십성으로 읽는 미래 관계 흐름',
    desc: '결혼운, 장기적 파트너십의 안정성, 평생 함께할 동반자의 기운 판별'
  },
  {
    chapter: 'PART 4',
    title: '나와 잘 맞는 기운 vs 피해야 할 상극 기운 구별법',
    desc: '나의 에너지를 채워주는 귀인(貴人)과 소모시키는 악연(惡緣)을 분별하는 혜안'
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
      image: "/image/seoncheon-code-bigi/real-life-transformation.webp",
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
      image: "/image/seoncheon-code-bigi/real-life-transformation.webp",
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
      image: "/image/seoncheon-code-bigi/real-life-transformation.webp",
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

  // 구매 버튼 클릭 핸들러 (실제 결제 페이지 이동)
  const handlePurchase = (e: React.MouseEvent) => {
    e.preventDefault()
    router.push(productData.checkoutUrl)
  }

  // 장바구니 추가 핸들러 (실제 장바구니 연동)
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

  // 구매/상세 안내 영역으로 부드럽게 스크롤 이동
  const scrollToFinalCta = (e: React.MouseEvent) => {
    e.preventDefault()
    const target = document.getElementById('final-cta')
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // 백도화 전통 묵자실 장식 구분선 (앤티크 샴페인 골드 포인트)
  // 독립 주요 섹션 간격 기준: PC 96px, 태블릿 80px, 모바일 64px (아이콘 20px 감안)
  // 연관 하위 섹션 간격 기준: PC 64px, 태블릿 48px, 모바일 40px
  const AntiqueDivider = ({ subSection = false, className = '' }: { subSection?: boolean; className?: string }) => {
    const spacing = subSection
      ? 'my-14 md:my-20'
      : 'my-20 md:my-28'
    return (
      <div className={`flex items-center justify-center ${spacing} opacity-70 ${className}`}>
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
  }

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
          <div className="container-premium w-full max-w-[1280px] mx-auto px-4 sm:px-6">

            {/* ═══════════════════════════════════════════════════════════════
                Section 1: Hero Section (히어로 및 상품 소개)
               ═══════════════════════════════════════════════════════════════ */}
            <section className="text-center mb-28 w-full max-w-[1280px] mx-auto">
              <Reveal delayMs={100}>
                {/* 상단 라벨 */}
                <div className="mb-8">
                  <SeoncheonBadge className="py-1.5 px-5 tracking-[0.2em] uppercase font-elegant">
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
                    <p className="text-[18px] sm:text-[20px] md:text-[22px] text-[#B7A18A] font-elegant font-bold leading-[1.4]">
                      사주를 공부하는 책이 아니라,<br />
                      사람과 사랑을 이해하기 위해 펼쳐보는 관계 도감
                    </p>
                    <p>
                      왜 우리는 하필 그 사람에게 끌릴까요?<br />
                      그 사람은 어떤 사랑을 원하고, 나는 어떤 인연 앞에서 마음을 열게 될까요?
                    </p>
                    <p>
                      복잡한 한자와 어려운 명리학을 캐릭터와 그림, 친근한 언어로 풀어낸 연애·관계 특화 사주 해설서<br className="hidden md:inline" />
                      나의 타고난 매력부터 상대의 연애 성향, 이상형, 궁합과 배우자 이야기까지
                    </p>
                    <p className="font-semibold text-white">
                      이제 궁금한 사람이 생길 때마다 《선천코드 비기》를 펼쳐보세요.
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
                          나의 매력부터 상대의 연애 성향까지,<br />
                          한 권으로 만나보는 <span className="text-[#B7A18A]">선천코드 관계 도감</span>
                        </h2>

                        <div className="text-[16px] md:text-[18px] text-[#EDE6DA]/90 space-y-3 leading-[1.8] font-light">
                          <p>
                            십성 5대 본능 캐릭터, 10대 일간 매력 페르소나, 도화와 본능적 끌림, 이상형과 배우자, 궁합과 재회까지
                          </p>
                          <p className="font-bold text-[#FAF7F2]">
                            어렵게만 느껴졌던 사주를 쉽고 재미있게 이해하고, 나와 상대의 관계를 새로운 시선으로 전체를 조망하는 마스터 비기입니다.
                          </p>
                        </div>
                      </div>

                      <div className="pt-2 border-t border-white/10 space-y-4">
                        {/* 가격 안내 */}
                        <div className="space-y-1">
                          <span className="text-xs text-[#EDE6DA]/60">정가 79,000원</span>
                          <div className="text-2xl sm:text-3xl font-elegant font-bold text-[#B7A18A] leading-none">
                            런칭 특가 29,000원 <span className="text-sm text-white/70 font-sans font-normal ml-1.5">(63% OFF)</span>
                          </div>
                        </div>

                        {/* 구매/장바구니 버튼 */}
                        <div className="flex flex-col sm:flex-row gap-3 pt-1 items-stretch sm:items-center w-full">
                          <button
                            type="button"
                            onClick={handleAddToCart}
                            className="py-3.5 px-5 sm:px-6 rounded-xl font-elegant font-bold text-sm md:text-base border border-[#B7A18A]/60 text-[#B7A18A] hover:bg-[#493740]/40 hover:border-[#B7A18A]/80 transition-all duration-300 shrink-0 whitespace-nowrap text-center bg-transparent order-2 sm:order-1 cursor-pointer"
                          >
                            장바구니 담기
                          </button>
                          <button
                            type="button"
                            onClick={handlePurchase}
                            className="flex-1 py-3.5 px-6 rounded-xl font-elegant font-bold text-sm md:text-base hover:scale-[1.01] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 text-[#FAF7F2] order-1 sm:order-2 cursor-pointer shadow-lg"
                            style={{
                              background: 'linear-gradient(135deg, #493740 0%, #30262F 100%)',
                              border: '1px solid #B7A18A',
                              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.4)'
                            }}
                          >
                            <span>선천코드 비기 29,000원에 구매하기</span>
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
                          className="object-contain"
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
                  <div className="text-center max-w-3xl mx-auto space-y-4">
                    <span className="text-[#B7A18A] font-elegant text-[12pt] font-semibold tracking-[0.2em] uppercase block">
                      PAIN POINT &amp; HOOK
                    </span>
                    <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white leading-[1.4] break-keep">
                      사람의 마음이 궁금했던 순간,<br />
                      <span className="text-[#B7A18A]">당신에게도 이런 질문이 있었나요?</span>
                    </h2>
                    <p className="text-[17px] md:text-[18px] text-[#EDE6DA]/85 leading-[1.8] font-normal break-keep">
                      이름과 얼굴만 바뀌었을 뿐, 왜 내 연애는 늘 똑같은 비극으로 끝날까요?<br />
                      머리로는 피해야 할 사람인 줄 알면서 가슴은 기어이 무장해제되는 이유,<br className="hidden sm:inline" />
                      나와 상대의 &apos;선천코드 암호&apos;를 몰라 맨몸으로 부딪혔기 때문입니다.
                    </p>
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
                          보이지 않는 선천코드의 궤적
                        </p>
                        <p className="text-[16px] md:text-[18px] text-[#FAF7F2] font-elegant font-bold tracking-wide break-keep">
                          내 무의식이 부르는 인연의 패턴을 읽지 못하면,<br />
                          사랑은 늘 같은 자리에서 무너집니다.
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
                          왜 우리는 특정 사람에게 끌리는지, 왜 같은 관계에서 서로 다른 감정을 느끼는지 궁금했던 적이 있나요?
                        </p>
                        <p className="font-semibold text-white">
                          아래 항목 중 단 하나라도 당신의 이야기라면,<br className="hidden sm:inline" />
                          필요한 건 막연한 연애 조언이 아니라 내 선천코드의 정밀 해독입니다.
                        </p>
                      </div>

                      <div className="space-y-3">
                        <h3 className="text-[20px] sm:text-[22px] md:text-[24px] font-elegant font-bold text-[#B7A18A] leading-[1.4] flex items-center gap-2.5 break-keep">
                          <AlertTriangle className="w-6 h-6 text-[#B7A18A] shrink-0" />
                          나와 상대의 관계 코드 체크리스트
                        </h3>

                        <div className="space-y-2.5">
                          {[
                            "좋아하는 사람의 타고난 성향과 연애 스타일이 궁금하다.",
                            "그 사람이 어떤 유형에게 마음을 열고 끌리는지 알고 싶다.",
                            "나만의 타고난 매력과 연애 성향을 발견하고 싶다.",
                            "왜 매번 비슷한 유형의 사람에게 끌리는지 궁금하다.",
                            "강렬하게 끌리는 사람과 편안하게 지낼 수 있는 사람의 차이를 알고 싶다.",
                            "나와 상대가 왜 잘 맞거나 자주 부딪히는지 이해하고 싶다.",
                            "어려운 사주 공부 없이도 직접 나와 상대의 성향을 찾아보고 싶다."
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
                          같은 시간, 같은 공간에 있어도<br />
                          <span className="text-[#B7A18A]">우리는 왜 늘 다른 곳을 바라볼까요?</span>
                        </h3>
                        <div className="space-y-3.5 text-[18px] text-[#F2EAE0] leading-[1.8] font-normal break-keep">
                          <p>
                            나는 애정 표현이라 믿고 건넨 말이 상대에게는 숨 막히는 통제가 되고, 상대가 침묵으로 지킨 배려는 나에게 차가운 방관으로 꽂힙니다.
                          </p>
                          <p>
                            사랑이 식어서도, 노력이 부족해서도 아닙니다.<br />
                            <strong className="font-bold text-white">타고난 오행의 온도와 십성의 언어가 정반대인 두 사람이 서로의 암호를 모른 채 맨몸으로 부딪히고 있었기 때문입니다.</strong>
                          </p>
                        </div>
                        <div className="pt-6 border-t border-[#B7A18A]/25 mt-6 space-y-2">
                          <p className="text-white font-elegant font-bold text-[18px] md:text-[19px] leading-[1.75] break-keep">
                            상대를 내 방식대로 바꾸려 애쓰는 순간 관계는 무너집니다.
                          </p>
                          <p className="text-[#B7A18A] font-elegant font-bold text-[18px] md:text-[19px] leading-[1.75] break-keep">
                            선천코드의 차이를 읽는 것,<br />
                            그것이 엇갈린 인연을 바로잡는 첫 번째 열쇠입니다.
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
                  <div className="!mt-24 sm:!mt-28 md:!mt-36 lg:!mt-44 w-full max-w-[1280px] mx-auto">
                    <div className="text-center mb-10 md:mb-12 space-y-3 md:space-y-4 break-keep">
                      <span className="text-[#B7A18A] font-elegant text-[12pt] font-semibold tracking-[0.2em] uppercase block">
                          THE PARADOX OF DESTINY
                      </span>
                      <h3 className="text-2xl md:text-[34px] lg:text-[36px] font-elegant font-bold text-white leading-[1.4] break-keep">
                        조건도 성격도 다 맞춰봤는데…<br />
                        <span className="text-[#B7A18A]">왜 나는 늘 같은 상처로 끝나는 연애만 반복할까요?</span>
                      </h3>
                      <div className="text-[17px] md:text-[18px] text-[#F2EAE0] mt-4 max-w-3xl mx-auto leading-[1.8] font-normal break-keep space-y-2">
                        <p>당신의 눈이 낮아서도, 사랑이 부족해서도 아닙니다.</p>
                        <p>
                          <strong className="font-bold text-white">나와 상대의 &apos;선천코드 암호&apos;를 모른 채, 물과 불이 정면으로 부딪히는 인연에<br />맨몸으로 뛰어들었기 때문입니다.</strong>
                        </p>
                      </div>
                    </div>

                    {/* 3대 공감 카드 */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
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
                            공감 카드 01
                          </div>
                          <h4 className="text-[20px] md:text-[22px] lg:text-[24px] font-elegant font-bold text-[#FAF7F2] leading-[1.35] break-keep">
                            “나쁜 남자인 줄 알면서 또 끌렸어…”
                          </h4>
                          <div className="h-[1px] w-full bg-[#B7A18A]/20 my-3.5" />
                          <p className="text-[16px] text-[#EDE6DA]/85 leading-[1.75] font-light break-keep">
                            머리로는 피해야 할 사람인 줄 뻔히 알면서도 기어이 무장해제되던 순간들. 내 무의식의 이상형 좌표(월지)와 결핍 코드가 작동해, 가장 치명적인 함정으로 스스로 걸어 들어간 것입니다.
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
                            공감 카드 02
                          </div>
                          <h4 className="text-[20px] md:text-[22px] lg:text-[24px] font-elegant font-bold text-[#FAF7F2] leading-[1.35] break-keep">
                            “내 진심이 왜 너에겐 집착이 될까”
                          </h4>
                          <div className="h-[1px] w-full bg-[#B7A18A]/20 my-3.5" />
                          <p className="text-[16px] text-[#EDE6DA]/85 leading-[1.75] font-light break-keep">
                            나는 사랑을 증명하려 온 마음을 쏟았지만, 상대에겐 숨 막히는 통제와 간섭으로 꽂혔습니다. 타고난 오행의 온도와 십성의 언어가 정반대인 사람에게 내 방식의 사랑만 강요했기 때문입니다.
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
                            공감 카드 03
                          </div>
                          <h4 className="text-[20px] md:text-[22px] lg:text-[24px] font-elegant font-bold text-[#FAF7F2] leading-[1.35] break-keep">
                            “겉으론 완벽했는데 안방은 지옥이었어”
                          </h4>
                          <div className="h-[1px] w-full bg-[#B7A18A]/20 my-3.5" />
                          <p className="text-[16px] text-[#EDE6DA]/85 leading-[1.75] font-light break-keep">
                            남들 부러워하는 조건(성)만 보고 시작했지만, 막상 깊어질수록 숨이 막히던 관계. 두 사람의 가장 은밀한 본능이 부딪히는 배우자 자리(궁)의 파국 코드를 보지 못한 대가입니다.
                          </p>
                        </div>
                        <div className="flex items-center justify-center gap-3 pt-6 mt-6" aria-hidden="true">
                          <span className="w-10 sm:w-12 h-[1px] bg-gradient-to-r from-transparent to-[#B7A18A]/60" />
                          <span className="text-[#B7A18A] text-sm">✦</span>
                          <span className="w-10 sm:w-12 h-[1px] bg-gradient-to-l from-transparent to-[#B7A18A]/60" />
                        </div>
                      </div>
                    </div>

                    {/* 하단 강조 클로징 카피 (재회비방 공감 카드 하단 클로징 2줄 구조 차용) */}
                    <div className="mt-14 md:mt-[65px] text-center max-w-[1050px] mx-auto px-4 break-keep">
                      <p className="text-[#FAF7F2] text-[18px] font-elegant font-medium leading-[1.75] break-keep mb-3 sm:mb-4">
                        운명이라는 변명 뒤에 숨어 상처받던 연애는 이제 끝내십시오,
                      </p>
                      <p className="text-[#B7A18A] text-[21px] sm:text-[24px] font-elegant font-bold leading-[1.6] break-keep">
                        이제 사람의 본능과 인연의 암호를 직접 해독하는 ‘눈’을 뜰 때입니다.
                      </p>
                    </div>

                    {/* 16:9 와이드 브릿지 이미지 */}
                    <div className="mt-8 sm:mt-10 md:mt-12 w-full aspect-[16/9] md:aspect-[1672/941] relative rounded-2xl md:rounded-3xl overflow-hidden border border-[#B7A18A]/30 shadow-2xl bg-black/40 flex items-center justify-center">
                      <Image
                        src={productData.repeatingPatternImage}
                        alt="선천코드 비기 반복되는 연애 패턴 해독 와이드 배너"
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
                      서로의 다름을 이해하고, 나만의 코드를 발견하는 시간
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
                      {/* 01 · 서로 다르다는 것을 이해하는 순간 */}
                      <div className="space-y-3.5">
                        <div className="flex items-center gap-2.5">
                          <SeoncheonBadge>
                            01
                          </SeoncheonBadge>
                          <h3 className="text-xl md:text-2xl font-elegant font-bold text-[#FAF7F2] leading-[1.4]">
                            서로 다르다는 것을 이해하는 순간
                          </h3>
                        </div>
                        <div className="text-[17px] md:text-[18px] text-[#F2EAE0] leading-[1.8] font-normal space-y-2 break-keep">
                          <p>
                            모든 사람이 나와 같은 방식으로 생각하고 사랑하는 것은 아닙니다.
                          </p>
                          <p className="text-[#FAF7F2]/90">
                            서로의 기질과 표현 방식의 차이를 이해하면 관계를 바라보는 관점이 넓어집니다.
                          </p>
                        </div>
                      </div>

                      <div className="w-full h-[1px] bg-gradient-to-r from-[#B7A18A]/30 via-[#B7A18A]/10 to-transparent" />

                      {/* 02 · 나만의 선천코드를 발견하는 순간 */}
                      <div className="space-y-3.5">
                        <div className="flex items-center gap-2.5">
                          <SeoncheonBadge>
                            02
                          </SeoncheonBadge>
                          <h3 className="text-xl md:text-2xl font-elegant font-bold text-[#FAF7F2] leading-[1.4]">
                            나만의 선천코드를 발견하는 순간
                          </h3>
                        </div>
                        <div className="text-[17px] md:text-[18px] text-[#F2EAE0] leading-[1.8] font-normal space-y-3 break-keep">
                          <p>
                            상대를 이해하는 것만큼 중요한 것은 나 자신을 이해하는 일입니다.
                          </p>
                          <div
                            className="p-4 sm:p-5 rounded-xl text-[#FAF7F2] font-normal leading-[1.75]"
                            style={{
                              background: 'rgba(73, 55, 64, 0.45)',
                              border: '1px solid rgba(183, 161, 138, 0.25)'
                            }}
                          >
                            나의 타고난 매력과 사랑의 방식을 발견하고, 관계 속에서도 나다운 모습을 지켜보세요.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 오른쪽: 3:4 대표 표지 이미지 */}
                  <div className="lg:col-span-5 order-2 flex justify-center">
                    <div className="w-full max-w-[420px]">
                      <HybridImageSlot
                        assetKey="compass"
                        className="aspect-[3/4] shadow-2xl"
                      />
                    </div>
                  </div>
                </div>
              </Reveal>
            </section>

            <AntiqueDivider />

            {/* ═══════════════════════════════════════════════════════════════
                Section 4: 왜, 선천코드 비기인가? (Why Seoncheon Code Secret)
                - 핵심 수정 영역 A: 왜 《선천코드 비기》인가 & 4대 핵심 가치 카드
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-28 text-left w-full max-w-[1280px] mx-auto">
              <Reveal>
                <div className="space-y-10 md:space-y-12">
                  {/* 상단 라벨 및 메인 제목 (카드 외부 상단 중앙 정렬, 36px, 포인트 컬러) */}
                  <div className="text-center max-w-4xl mx-auto space-y-3">
                    <span className="text-[#B7A18A] font-elegant text-[12pt] font-semibold tracking-[0.2em] uppercase block">
                      WHY SEONCHEON CODE SECRET
                    </span>
                    <h2 className="text-2xl sm:text-3xl md:text-[36px] font-elegant font-bold text-white tracking-wide leading-[1.4] break-keep md:whitespace-nowrap">
                      왜 《<span className="text-[#B7A18A]">선천코드 비기</span>》를 내 손에 두어야 할까요?
                    </h2>
                  </div>

                  {/* ════ 데스크톱 / 태블릿 (md 이상): 16:9 한지 배경 카드 ════ */}
                  <div
                    className="hidden md:block w-full aspect-[16/9] rounded-2xl md:rounded-3xl border border-[#B7A18A]/40 shadow-2xl relative overflow-hidden transition-all duration-300 hover:shadow-[0_0_24px_rgba(183,161,138,0.2)]"
                    style={{
                      backgroundImage: `url('${productData.whySecretCodeBg}')`,
                      backgroundSize: '100% 100%',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      boxShadow: '0 12px 40px rgba(0, 0, 0, 0.45)'
                    }}
                  >
                    {/* 왼쪽 한지 영역 위에 배치되는 텍스트 컨테이너 (우측 오행 나침반·금박 장식 침범 방지: 폭 54%) */}
                    <div className="w-full h-full flex flex-col justify-center text-left pl-[5.5%] lg:pl-[6.5%] pr-4 py-6">
                      <div className="w-[54%] max-w-[56%] space-y-2.5 lg:space-y-3">
                        <p className="text-[17px] lg:text-[20px] font-elegant font-bold text-[#493740] leading-[1.4] break-keep">
                          &ldquo;누군가의 해석을 기다리는 대신, 이제 당신이 직접 관계의 코드를 읽어보세요.&rdquo;
                        </p>

                        <div className="text-[14.5px] lg:text-[16px] text-[#241E25] leading-[1.65] lg:leading-[1.72] font-normal space-y-2 lg:space-y-2.5 break-keep">
                          <div className="space-y-1">
                            <p className="font-semibold text-[#1C171D]">
                              사람을 알아갈 때마다 같은 질문이 반복됩니다.
                            </p>
                            <div className="pl-3 border-l-2 border-[#B7A18A] space-y-0.5 text-[#493740] font-medium text-[13.5px] lg:text-[14.5px]">
                              <p>&ldquo;왜 저 사람은 저렇게 행동할까?&rdquo;</p>
                              <p>&ldquo;왜 나는 비슷한 관계에서 같은 문제를 겪을까?&rdquo;</p>
                              <p>&ldquo;우리는 무엇이 닮았고, 어디에서 부딪히는 걸까?&rdquo;</p>
                            </div>
                          </div>

                          <p>
                            누군가에게 매번 물어볼 수도 있지만, 관계를 이해하는 기본 원리와 해석 방법을 익힌다면 스스로 살펴볼 수 있는 영역이 넓어집니다.
                          </p>

                          <p>
                            <strong className="text-[#1C171D] font-bold">《선천코드 비기》</strong>는 어려운 명리학을 쉽고 재미있게 풀어낸 <span className="text-[#493740] font-semibold">연애·관계 특화 사주 해설서</span>이자, 나와 상대의 기질을 직접 찾아보고 이해할 수 있는 <strong className="text-[#493740] font-bold">소장용 관계 도감</strong>입니다.
                          </p>

                          <p>
                            자신의 만세력뿐 아니라 상대방의 만세력 정보가 있을 때도 책의 해석 기준을 참고하여 성향과 관계 패턴을 비교해 볼 수 있습니다.
                          </p>

                          <p>
                            한 번 읽고 덮어두는 책이 아니라, 궁금한 사람이 생기거나 관계에서 이해되지 않는 상황을 만날 때 다시 펼쳐보는 <strong className="text-[#493740] font-bold">평생의 실전 비서</strong>입니다.
                          </p>
                        </div>

                        {/* 강조 카피 박스 */}
                        <div
                          className="p-2.5 lg:p-3 rounded-xl border border-[#B7A18A]/60 text-center"
                          style={{
                            background: 'linear-gradient(135deg, rgba(73, 55, 64, 0.08) 0%, rgba(183, 161, 138, 0.15) 100%)',
                          }}
                        >
                          <p className="text-[14px] lg:text-[15.5px] font-elegant font-bold text-[#241E25] leading-snug break-keep">
                            &ldquo;사주를 공부하는 책이 아니라, 사람과 사랑을 이해하기 위해 펼쳐보는 관계 도감&rdquo;
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* ════ 모바일 (md 미만): 16:9 배경 이미지 + 하단 한지 텍스트 반응형 결합 ════ */}
                  <div
                    className="md:hidden w-full rounded-2xl border border-[#B7A18A]/40 shadow-2xl overflow-hidden transition-all duration-300"
                    style={{
                      backgroundColor: '#F2EAE0',
                      boxShadow: '0 12px 40px rgba(0, 0, 0, 0.45)'
                    }}
                  >
                    {/* 상단 16:9 원본 이미지 (오행 나침반, 비단, 금박 장식 전체 노출) */}
                    <div
                      className="w-full aspect-[16/9] relative"
                      style={{
                        backgroundImage: `url('${productData.whySecretCodeBg}')`,
                        backgroundSize: '100% 100%',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                      }}
                    />
                    {/* 하단 한지 텍스트 영역 (가독성 100% 확보) */}
                    <div className="p-6 sm:p-7 text-left break-keep space-y-4">
                      <p className="text-[18px] sm:text-[20px] font-elegant font-bold text-[#493740] leading-[1.45] break-keep">
                        &ldquo;누군가의 해석을 기다리는 대신, 이제 당신이 직접 관계의 코드를 읽어보세요.&rdquo;
                      </p>

                      <div className="text-[15px] sm:text-[16px] text-[#241E25] leading-[1.8] font-normal space-y-3.5 break-keep border-t border-[#B7A18A]/30 pt-4">
                        <div className="space-y-1.5">
                          <p className="font-semibold text-[#1C171D]">
                            사람을 알아갈 때마다 같은 질문이 반복됩니다.
                          </p>
                          <div className="pl-3 border-l-2 border-[#B7A18A] space-y-1 text-[#493740] font-medium text-[14px]">
                            <p>&ldquo;왜 저 사람은 저렇게 행동할까?&rdquo;</p>
                            <p>&ldquo;왜 나는 비슷한 관계에서 같은 문제를 겪을까?&rdquo;</p>
                            <p>&ldquo;우리는 무엇이 닮았고, 어디에서 부딪히는 걸까?&rdquo;</p>
                          </div>
                        </div>

                        <p>
                          누군가에게 매번 물어볼 수도 있지만, 관계를 이해하는 기본 원리와 해석 방법을 익힌다면 스스로 살펴볼 수 있는 영역이 넓어집니다.
                        </p>

                        <p>
                          <strong className="text-[#1C171D] font-bold">《선천코드 비기》</strong>는 어려운 명리학을 쉽고 재미있게 풀어낸 <span className="text-[#493740] font-semibold">연애·관계 특화 사주 해설서</span>이자, 나와 상대의 기질을 직접 찾아보고 이해할 수 있는 <strong className="text-[#493740] font-bold">소장용 관계 도감</strong>입니다.
                        </p>

                        <p>
                          자신의 만세력뿐 아니라 상대방의 만세력 정보가 있을 때도 책의 해석 기준을 참고하여 성향과 관계 패턴을 비교해 볼 수 있습니다.
                        </p>

                        <p>
                          한 번 읽고 덮어두는 책이 아니라, 궁금한 사람이 생기거나 관계에서 이해되지 않는 상황을 만날 때 다시 펼쳐보는 <strong className="text-[#493740] font-bold">평생의 실전 비서</strong>입니다.
                        </p>
                      </div>

                      {/* 강조 카피 박스 */}
                      <div
                        className="p-4 rounded-xl border border-[#B7A18A]/60 text-center"
                        style={{
                          background: 'linear-gradient(135deg, rgba(73, 55, 64, 0.08) 0%, rgba(183, 161, 138, 0.15) 100%)',
                        }}
                      >
                        <p className="text-[16px] font-elegant font-bold text-[#241E25] leading-relaxed break-keep">
                          &ldquo;사주를 공부하는 책이 아니라, 사람과 사랑을 이해하기 위해 펼쳐보는 관계 도감&rdquo;
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 🎴 4대 핵심 차별점 카드 */}
                  <div className="space-y-6 !mt-16 sm:!mt-20 md:!mt-28">
                    <div className="text-center max-w-3xl mx-auto space-y-3">
                      <span className="text-[#B7A18A] font-elegant text-[12pt] font-semibold tracking-[0.2em] uppercase block">
                        CORE VALUES OF THE BOOK
                      </span>
                      <h3 className="text-2xl sm:text-3xl md:text-[36px] font-elegant font-bold text-[#FAF7F2] tracking-wide leading-[1.4] break-keep">
                        《선천코드 비기》 핵심 차별점 4가지
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                      {/* POINT 01 */}
                      <div
                        className="rounded-2xl p-6 flex flex-col justify-between border border-[#B7A18A]/45 transition-all duration-300 hover:translate-y-[-2px]"
                        style={{
                          background: 'linear-gradient(160deg, #F2EAE0 0%, #EDE2D3 100%)',
                          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)'
                        }}
                      >
                        <div className="flex flex-col">
                          {/* 상단 뱃지 & 아이콘 */}
                          <div className="flex items-center justify-between mb-3.5">
                            <span className="text-xs font-mono font-bold tracking-wider px-2.5 py-0.5 rounded bg-[#493740] text-[#F2EAE0] border border-[#B7A18A]/60 shadow-sm">
                              POINT 01
                            </span>
                            <div className="w-8 h-8 rounded-full bg-[#493740] border border-[#B7A18A]/60 flex items-center justify-center text-[#FAF7F2] shadow-sm">
                              <BookOpen className="w-4 h-4" />
                            </div>
                          </div>

                          {/* 소제목 & 메인 제목 (2줄 기준 동일 높이로 구분선 수평 위치 일치) */}
                          <div className="min-h-[66px] sm:min-h-[72px] flex flex-col justify-start">
                            <span className="text-[11px] font-bold text-[#493740] tracking-wide block mb-1">직관적 해설</span>
                            <h5 className="text-[17px] sm:text-[18px] font-elegant font-bold text-[#2F2525] leading-snug">
                              어려운 사주를 쉽고 재미있게
                            </h5>
                          </div>

                          {/* 메인 제목 바로 아래 얇은 가로 구분선 (1px, 100% 폭, #B7A18A 40%, 상하 12px 간격) */}
                          <div className="w-full h-[1px] bg-[#B7A18A]/40 mt-3 mb-3" />

                          {/* 본문 설명 문구 */}
                          <p className="text-[16px] text-[#4A3D39] leading-[1.7] break-keep font-normal">
                            복잡한 한자도, 어려운 명리학 이론도 외울 필요 없습니다. 만세력에서 나와 상대의 글자를 찾아보고, 캐릭터 도감과 인포그래픽을 통해 선천적 기질과 관계 성향을 쉽고 직관적으로 이해할 수 있습니다.
                          </p>
                        </div>
                      </div>

                      {/* POINT 02 */}
                      <div
                        className="rounded-2xl p-6 flex flex-col justify-between border border-[#B7A18A]/45 transition-all duration-300 hover:translate-y-[-2px]"
                        style={{
                          background: 'linear-gradient(160deg, #F2EAE0 0%, #EDE2D3 100%)',
                          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)'
                        }}
                      >
                        <div className="flex flex-col">
                          {/* 상단 뱃지 & 아이콘 */}
                          <div className="flex items-center justify-between mb-3.5">
                            <span className="text-xs font-mono font-bold tracking-wider px-2.5 py-0.5 rounded bg-[#493740] text-[#F2EAE0] border border-[#B7A18A]/60 shadow-sm">
                              POINT 02
                            </span>
                            <div className="w-8 h-8 rounded-full bg-[#493740] border border-[#B7A18A]/60 flex items-center justify-center text-[#FAF7F2] shadow-sm">
                              <Compass className="w-4 h-4" />
                            </div>
                          </div>

                          {/* 소제목 & 메인 제목 (2줄 기준 동일 높이로 구분선 수평 위치 일치) */}
                          <div className="min-h-[66px] sm:min-h-[72px] flex flex-col justify-start">
                            <span className="text-[11px] font-bold text-[#493740] tracking-wide block mb-1">사랑·인연 특화</span>
                            <h5 className="text-[17px] sm:text-[18px] font-elegant font-bold text-[#2F2525] leading-snug">
                              사랑과 인연에 특화된 관계 해설서
                            </h5>
                          </div>

                          {/* 메인 제목 바로 아래 얇은 가로 구분선 (1px, 100% 폭, #B7A18A 40%, 상하 12px 간격) */}
                          <div className="w-full h-[1px] bg-[#B7A18A]/40 mt-3 mb-3" />

                          {/* 본문 설명 문구 */}
                          <p className="text-[16px] text-[#4A3D39] leading-[1.7] break-keep font-normal">
                            일반적인 사주책처럼 직업운, 재물운, 신년운세를 두루 다루는 책이 아닙니다. 타고난 매력, 이상형, 본능적 끌림, 배우자, 궁합, 관계 갈등, 재회까지 사랑과 인연에 집중한 실전 관계 해설서입니다.
                          </p>
                        </div>
                      </div>

                      {/* POINT 03 */}
                      <div
                        className="rounded-2xl p-6 flex flex-col justify-between border border-[#B7A18A]/45 transition-all duration-300 hover:translate-y-[-2px]"
                        style={{
                          background: 'linear-gradient(160deg, #F2EAE0 0%, #EDE2D3 100%)',
                          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)'
                        }}
                      >
                        <div className="flex flex-col">
                          {/* 상단 뱃지 & 아이콘 */}
                          <div className="flex items-center justify-between mb-3.5">
                            <span className="text-xs font-mono font-bold tracking-wider px-2.5 py-0.5 rounded bg-[#493740] text-[#F2EAE0] border border-[#B7A18A]/60 shadow-sm">
                              POINT 03
                            </span>
                            <div className="w-8 h-8 rounded-full bg-[#493740] border border-[#B7A18A]/60 flex items-center justify-center text-[#FAF7F2] shadow-sm">
                              <RotateCcw className="w-4 h-4" />
                            </div>
                          </div>

                          {/* 소제목 & 메인 제목 (2줄 기준 동일 높이로 구분선 수평 위치 일치) */}
                          <div className="min-h-[66px] sm:min-h-[72px] flex flex-col justify-start">
                            <span className="text-[11px] font-bold text-[#493740] tracking-wide block mb-1">상대방 이해</span>
                            <h5 className="text-[17px] sm:text-[18px] font-elegant font-bold text-[#2F2525] leading-snug">
                              나를 넘어 상대를 이해하는 관계 도감
                            </h5>
                          </div>

                          {/* 메인 제목 바로 아래 얇은 가로 구분선 (1px, 100% 폭, #B7A18A 40%, 상하 12px 간격) */}
                          <div className="w-full h-[1px] bg-[#B7A18A]/40 mt-3 mb-3" />

                          {/* 본문 설명 문구 */}
                          <p className="text-[16px] text-[#4A3D39] leading-[1.7] break-keep font-normal">
                            나의 연애 성향뿐 아니라 현재 연인, 관심 있는 상대, 헤어진 연인, 배우자의 기질과 관계 성향까지 직접 찾아볼 수 있습니다. 사람과 인연을 이해하고 관계를 바라보는 나만의 기준을 세워갑니다.
                          </p>
                        </div>
                      </div>

                      {/* POINT 04 */}
                      <div
                        className="rounded-2xl p-6 flex flex-col justify-between border border-[#B7A18A]/45 transition-all duration-300 hover:translate-y-[-2px]"
                        style={{
                          background: 'linear-gradient(160deg, #F2EAE0 0%, #EDE2D3 100%)',
                          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)'
                        }}
                      >
                        <div className="flex flex-col">
                          {/* 상단 뱃지 & 아이콘 */}
                          <div className="flex items-center justify-between mb-3.5">
                            <span className="text-xs font-mono font-bold tracking-wider px-2.5 py-0.5 rounded bg-[#493740] text-[#F2EAE0] border border-[#B7A18A]/60 shadow-sm">
                              POINT 04
                            </span>
                            <div className="w-8 h-8 rounded-full bg-[#493740] border border-[#B7A18A]/60 flex items-center justify-center text-[#FAF7F2] shadow-sm">
                              <Sparkles className="w-4 h-4" />
                            </div>
                          </div>

                          {/* 소제목 & 메인 제목 (2줄 기준 동일 높이로 구분선 수평 위치 일치) */}
                          <div className="min-h-[66px] sm:min-h-[72px] flex flex-col justify-start">
                            <span className="text-[11px] font-bold text-[#493740] tracking-wide block mb-1">평생 소장 비서</span>
                            <h5 className="text-[17px] sm:text-[18px] font-elegant font-bold text-[#2F2525] leading-snug">
                              인연이 바뀔 때마다 다시 펼쳐보는 소장용 비서
                            </h5>
                          </div>

                          {/* 메인 제목 바로 아래 얇은 가로 구분선 (1px, 100% 폭, #B7A18A 40%, 상하 12px 간격) */}
                          <div className="w-full h-[1px] bg-[#B7A18A]/40 mt-3 mb-3" />

                          {/* 본문 설명 문구 */}
                          <p className="text-[16px] text-[#4A3D39] leading-[1.7] break-keep font-normal">
                            한 번 읽고 책장에 넣어두는 책이 아닙니다. 새로운 인연을 만날 때마다, 사랑이 궁금해질 때마다, 관계에서 고민이 생길 때마다 필요한 부분을 다시 찾아볼 수 있는 소장용 관계 도감입니다.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* 카드 하단 강조 문구 */}
                    <div className="pt-2 text-center">
                      <p className="text-[20px] sm:text-[22px] md:text-[24px] font-elegant font-bold text-[#B7A18A] leading-[1.4] break-keep">
                        &ldquo;정답을 대신 내려주는 책이 아니라, 스스로 질문하고 해석하는 힘을 길러주는 책&rdquo;
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </section>

            <AntiqueDivider subSection />

            {/* ═══════════════════════════════════════════════════════════════
                Section 4-B: 전자책과 개인 맞춤 리포트 비교 (Product Comparison)
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-28 text-left w-full max-w-[1280px] mx-auto">
              <Reveal>
                <div className="space-y-8 md:space-y-10">
                  {/* 헤더 */}
                  <div className="text-center max-w-3xl mx-auto space-y-3 break-keep">
                    <span className="text-[#B7A18A] font-elegant text-[12pt] font-semibold tracking-[0.2em] uppercase block">
                      PRODUCT COMPARISON
                    </span>
                    <h3 className="text-[24px] sm:text-[28px] md:text-[34px] font-elegant font-bold text-[#FAF7F2] leading-[1.4] break-keep">
                      《선천코드 비기》와 《선천코드 리포트》<br />무엇이 다를까요?
                    </h3>
                    <p className="text-[16px] sm:text-[18px] text-[#B7A18A] font-medium">
                      &ldquo;같은 선천코드에서 출발하지만, 역할과 쓰임새는 다릅니다.&rdquo;
                    </p>
                  </div>

                  {/* 설명 안내 블록 */}
                  <div
                    className="p-6 sm:p-8 rounded-2xl border border-[#B7A18A]/30 text-left space-y-3.5 leading-relaxed text-[#EDE6DA] text-[15px] sm:text-[16px] break-keep shadow-xl"
                    style={{
                      background: 'linear-gradient(135deg, rgba(73, 55, 64, 0.3) 0%, rgba(36, 30, 37, 0.7) 100%)',
                    }}
                  >
                    <p>
                      <strong className="text-[#FAF7F2] font-semibold">《선천코드 비기》</strong>는 오행과 십성의 해석 원리를 익혀 다양한 사람과 관계를 스스로 살펴볼 수 있도록 구성한 <span className="text-[#B7A18A] font-semibold">전자책</span>입니다.
                    </p>
                    <p>
                      반면 <strong className="text-[#FAF7F2] font-semibold">《선천코드 리포트》</strong>는 고객이 제공한 출생 정보를 바탕으로 개인의 사주 구조와 특정 고민을 중심으로 작성하는 <span className="text-[#B7A18A] font-semibold">맞춤 분석서</span>입니다.
                    </p>
                    <p className="text-[#B7A18A] font-medium pt-1 border-t border-[#B7A18A]/20">
                      ✦ 하나는 스스로 해석하는 방법을 배우는 도감이고, 다른 하나는 자신의 구조를 중심으로 분석한 개인별 결과물입니다.
                    </p>
                  </div>

                  {/* 📊 데스크톱 비교표 (md 이상) */}
                  <div className="hidden md:block overflow-hidden rounded-2xl border border-[#B7A18A]/40 shadow-2xl bg-[#1C171D]">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="border-b border-[#B7A18A]/30 bg-[#30262F]/90">
                          <th className="py-4 px-6 text-sm font-elegant font-bold text-[#B7A18A] w-[20%] text-center">
                            구분
                          </th>
                          <th className="py-4 px-6 text-base font-elegant font-bold text-[#FAF7F2] w-[40%] bg-[#493740]/40 border-l border-[#B7A18A]/20">
                            <div className="flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-[#B7A18A]" />
                              <span>선천코드 비기</span>
                              <span className="text-xs font-normal text-[#B7A18A]/80 font-sans ml-1">(평생 소장 도감)</span>
                            </div>
                          </th>
                          <th className="py-4 px-6 text-base font-elegant font-bold text-[#FAF7F2] w-[40%] border-l border-[#B7A18A]/20">
                            <div className="flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-[#82968F]" />
                              <span>선천코드 리포트</span>
                              <span className="text-xs font-normal text-[#82968F]/80 font-sans ml-1">(1:1 맞춤 분석서)</span>
                            </div>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#B7A18A]/15 text-[16px] text-[#EDE6DA]">
                        <tr className="hover:bg-white/[0.02] transition-colors">
                          <td className="py-4 px-6 font-semibold text-[#B7A18A] text-center bg-[#241E25]/50">핵심 역할</td>
                          <td className="py-4 px-6 font-bold text-[#FAF7F2] bg-[#493740]/15 border-l border-[#B7A18A]/20">스스로 읽는 해석 도감</td>
                          <td className="py-4 px-6 font-medium text-[#FAF7F2] border-l border-[#B7A18A]/20">개인 맞춤 분석서</td>
                        </tr>
                        <tr className="hover:bg-white/[0.02] transition-colors">
                          <td className="py-4 px-6 font-semibold text-[#B7A18A] text-center bg-[#241E25]/50">제공 형태</td>
                          <td className="py-4 px-6 bg-[#493740]/15 border-l border-[#B7A18A]/20">공통 교육 콘텐츠 PDF</td>
                          <td className="py-4 px-6 border-l border-[#B7A18A]/20">개인별 작성 PDF</td>
                        </tr>
                        <tr className="hover:bg-white/[0.02] transition-colors">
                          <td className="py-4 px-6 font-semibold text-[#B7A18A] text-center bg-[#241E25]/50">분석 대상</td>
                          <td className="py-4 px-6 bg-[#493740]/15 border-l border-[#B7A18A]/20">자신 및 다양한 관계</td>
                          <td className="py-4 px-6 border-l border-[#B7A18A]/20">신청자 또는 신청한 궁합 대상</td>
                        </tr>
                        <tr className="hover:bg-white/[0.02] transition-colors">
                          <td className="py-4 px-6 font-semibold text-[#B7A18A] text-center bg-[#241E25]/50">주요 내용</td>
                          <td className="py-4 px-6 bg-[#493740]/15 border-l border-[#B7A18A]/20">오행·십성·관계 해석 원리</td>
                          <td className="py-4 px-6 border-l border-[#B7A18A]/20">개인 사주 구조와 주제별 분석</td>
                        </tr>
                        <tr className="hover:bg-white/[0.02] transition-colors">
                          <td className="py-4 px-6 font-semibold text-[#B7A18A] text-center bg-[#241E25]/50">활용 방식</td>
                          <td className="py-4 px-6 bg-[#493740]/15 border-l border-[#B7A18A]/20">필요할 때 반복 참고</td>
                          <td className="py-4 px-6 border-l border-[#B7A18A]/20">자신의 특성과 고민을 집중적으로 이해</td>
                        </tr>
                        <tr className="hover:bg-white/[0.02] transition-colors">
                          <td className="py-4 px-6 font-semibold text-[#B7A18A] text-center bg-[#241E25]/50">주요 장점</td>
                          <td className="py-4 px-6 bg-[#493740]/15 border-l border-[#B7A18A]/20">해석 원리 학습과 반복 활용</td>
                          <td className="py-4 px-6 border-l border-[#B7A18A]/20">개인화된 분석과 실천 제안</td>
                        </tr>
                        <tr className="hover:bg-white/[0.02] transition-colors">
                          <td className="py-4 px-6 font-semibold text-[#B7A18A] text-center bg-[#241E25]/50">추천 대상</td>
                          <td className="py-4 px-6 font-semibold text-[#FAF7F2] bg-[#493740]/15 border-l border-[#B7A18A]/20">
                            직접 공부하고 비교하고 싶은 분
                          </td>
                          <td className="py-4 px-6 font-semibold text-[#FAF7F2] border-l border-[#B7A18A]/20">
                            자신의 사주를 개별적으로 분석받고 싶은 분
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* 📱 모바일 비교 카드 (md 미만) */}
                  <div className="md:hidden space-y-4">
                    {/* 비기 카드 */}
                    <div
                      className="rounded-2xl p-6 border border-[#B7A18A]/50 shadow-xl space-y-4"
                      style={{ backgroundColor: '#F2EAE0' }}
                    >
                      <div className="flex items-center justify-between border-b border-[#B7A18A]/30 pb-3">
                        <div className="space-y-0.5">
                          <span className="text-[11px] font-semibold text-[#493740] block">평생 소장 도감</span>
                          <h4 className="text-[19px] font-elegant font-bold text-[#241E25]">선천코드 비기</h4>
                        </div>
                        <SeoncheonBadge>학습·도감형</SeoncheonBadge>
                      </div>

                      <div className="space-y-2.5 text-[16px] text-[#30262F]">
                        <div className="flex justify-between py-1 border-b border-[#B7A18A]/20">
                          <span className="font-semibold text-[#493740] shrink-0">핵심 역할</span>
                          <span className="font-bold text-[#241E25] text-right">스스로 읽는 해석 도감</span>
                        </div>
                        <div className="flex justify-between py-1 border-b border-[#B7A18A]/20">
                          <span className="font-semibold text-[#493740] shrink-0">제공 형태</span>
                          <span className="text-right">공통 교육 콘텐츠 PDF</span>
                        </div>
                        <div className="flex justify-between py-1 border-b border-[#B7A18A]/20">
                          <span className="font-semibold text-[#493740] shrink-0">분석 대상</span>
                          <span className="text-right">자신 및 다양한 관계</span>
                        </div>
                        <div className="flex justify-between py-1 border-b border-[#B7A18A]/20">
                          <span className="font-semibold text-[#493740] shrink-0">주요 내용</span>
                          <span className="text-right">오행·십성·관계 해석 원리</span>
                        </div>
                        <div className="flex justify-between py-1 border-b border-[#B7A18A]/20">
                          <span className="font-semibold text-[#493740] shrink-0">활용 방식</span>
                          <span className="text-right">필요할 때 반복 참고</span>
                        </div>
                        <div className="flex justify-between py-1 border-b border-[#B7A18A]/20">
                          <span className="font-semibold text-[#493740] shrink-0">주요 장점</span>
                          <span className="text-right">해석 원리 학습과 반복 활용</span>
                        </div>
                        <div className="flex justify-between py-1">
                          <span className="font-semibold text-[#493740] shrink-0">추천 대상</span>
                          <span className="font-bold text-[#493740] text-right">직접 공부하고 비교하고 싶은 분</span>
                        </div>
                      </div>
                    </div>

                    {/* 리포트 카드 */}
                    <div
                      className="rounded-2xl p-6 border border-[#B7A18A]/35 shadow-xl space-y-4 bg-[#241E25]"
                    >
                      <div className="flex items-center justify-between border-b border-white/10 pb-3">
                        <div className="space-y-0.5">
                          <span className="text-[11px] font-semibold text-[#82968F] block">1:1 맞춤 분석서</span>
                          <h4 className="text-[19px] font-elegant font-bold text-[#FAF7F2]">선천코드 리포트</h4>
                        </div>
                        <span className="py-1 px-2.5 rounded text-[11px] font-medium bg-[#82968F]/20 text-[#82968F] border border-[#82968F]/40">
                          개인 맞춤형
                        </span>
                      </div>

                      <div className="space-y-2.5 text-[16px] text-[#EDE6DA]">
                        <div className="flex justify-between py-1 border-b border-white/5">
                          <span className="text-[#B7A18A] shrink-0">핵심 역할</span>
                          <span className="font-semibold text-[#FAF7F2] text-right">개인 맞춤 분석서</span>
                        </div>
                        <div className="flex justify-between py-1 border-b border-white/5">
                          <span className="text-[#B7A18A] shrink-0">제공 형태</span>
                          <span className="text-right">개인별 작성 PDF</span>
                        </div>
                        <div className="flex justify-between py-1 border-b border-white/5">
                          <span className="text-[#B7A18A] shrink-0">분석 대상</span>
                          <span className="text-right">신청자 또는 궁합 대상</span>
                        </div>
                        <div className="flex justify-between py-1 border-b border-white/5">
                          <span className="text-[#B7A18A] shrink-0">주요 내용</span>
                          <span className="text-right">개인 사주 구조와 주제별 분석</span>
                        </div>
                        <div className="flex justify-between py-1 border-b border-white/5">
                          <span className="text-[#B7A18A] shrink-0">활용 방식</span>
                          <span className="text-right">자신의 특성과 고민을 집중 이해</span>
                        </div>
                        <div className="flex justify-between py-1 border-b border-white/5">
                          <span className="text-[#B7A18A] shrink-0">주요 장점</span>
                          <span className="text-right">개인화된 분석과 실천 제안</span>
                        </div>
                        <div className="flex justify-between py-1">
                          <span className="text-[#B7A18A] shrink-0">추천 대상</span>
                          <span className="font-semibold text-[#FAF7F2] text-right">개별 분석을 받고 싶은 분</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 비교표 하단 카피 */}
                  <div className="text-center pt-2">
                    <p className="text-[17px] sm:text-[20px] font-elegant font-bold text-[#FAF7F2] leading-relaxed break-keep">
                      &ldquo;비기는 읽는 방법을 알려주고, 리포트는 나의 이야기를 깊이 들여다봅니다.&rdquo;
                    </p>
                  </div>
                </div>
              </Reveal>
            </section>

            <AntiqueDivider subSection />

            {/* ═══════════════════════════════════════════════════════════════
                Section 4-C: 나에게 맞는 선택은? (Selection Guide)
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-28 text-left w-full max-w-[1280px] mx-auto">
              <Reveal>
                <div className="space-y-8 md:space-y-10">
                  <div className="text-center max-w-2xl mx-auto space-y-2.5 break-keep">
                    <span className="text-[#B7A18A] font-elegant text-[12pt] font-semibold tracking-[0.2em] uppercase block">
                      SELECTION GUIDE
                    </span>
                    <h3 className="text-[24px] sm:text-[28px] md:text-[32px] font-elegant font-bold text-[#FAF7F2]">
                      지금 당신에게 필요한 것은 무엇인가요?
                    </h3>
                    <p className="text-sm sm:text-base text-[#EDE6DA]/70 font-light">
                      나의 고민과 목적에 맞는 가장 지혜로운 방식을 선택해 보세요.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch">
                    {/* 선택 카드 01 — 《선천코드 비기》 */}
                    <div
                      className="rounded-3xl p-7 sm:p-9 flex flex-col justify-between border-2 border-[#B7A18A]/60 relative overflow-hidden transition-all duration-300"
                      style={{
                        background: 'linear-gradient(160deg, #F2EAE0 0%, #EDE2D3 100%)',
                        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.22)'
                      }}
                    >
                      <div className="space-y-5">
                        <div className="flex items-center justify-between">
                          <span
                            className="inline-flex items-center justify-center py-1 px-3 rounded text-xs font-semibold shadow-sm"
                            style={{
                              background: '#493740',
                              color: '#F2EAE0',
                              border: '1px solid #B7A18A'
                            }}
                          >
                            스스로 읽는 해석 도감
                          </span>
                          <span className="text-xs font-mono font-bold tracking-wider px-2.5 py-1 rounded bg-[#493740] text-[#F2EAE0] border border-[#B7A18A]/60 shadow-sm">
                            CHOICE 01
                          </span>
                        </div>

                        <div className="space-y-1.5">
                          <h4 className="text-[22px] sm:text-[25px] font-elegant font-bold text-[#2F2525] leading-[1.4]">
                            &ldquo;스스로 읽고 이해하고 싶다면&rdquo;
                          </h4>
                          <p className="text-xs sm:text-sm text-[#493740] font-medium">
                            선천코드 비기 (전자책 평생 소장)
                          </p>
                        </div>

                        {/* 체크리스트 */}
                        <ul className="space-y-2.5 text-[16px] text-[#4A3D39] font-medium pt-2 border-t border-[#B7A18A]/35">
                          <li className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-5 h-5 text-[#493740] shrink-0 mt-0.5" />
                            <span>오행과 십성의 원리를 배우고 싶다.</span>
                          </li>
                          <li className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-5 h-5 text-[#493740] shrink-0 mt-0.5" />
                            <span>나와 상대의 차이를 비교해 보고 싶다.</span>
                          </li>
                          <li className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-5 h-5 text-[#493740] shrink-0 mt-0.5" />
                            <span>여러 관계에서 반복 활용할 참고서가 필요하다.</span>
                          </li>
                          <li className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-5 h-5 text-[#493740] shrink-0 mt-0.5" />
                            <span>관계 패턴을 이해하는 공부를 하고 싶다.</span>
                          </li>
                        </ul>
                      </div>

                      <div className="pt-6 space-y-4 border-t border-[#B7A18A]/35 mt-6">
                        <div className="text-center">
                          <span className="text-xs font-semibold text-[#493740] block mb-0.5">핵심 포지셔닝</span>
                          <p className="text-[17px] font-elegant font-bold text-[#2F2525]">
                            &ldquo;내 손안의 선천코드 해석 도감&rdquo;
                          </p>
                        </div>

                        <button
                          type="button"
                          onClick={scrollToFinalCta}
                          className="w-full py-4 px-6 rounded-xl font-elegant font-bold text-base transition-all duration-300 flex items-center justify-center gap-2 text-[#FAF7F2] shadow-md hover:brightness-110 cursor-pointer"
                          style={{
                            background: 'linear-gradient(135deg, #493740 0%, #30262F 100%)',
                            border: '1px solid #B7A18A'
                          }}
                        >
                          <span>《선천코드 비기》 자세히 보기</span>
                          <ChevronDown className="w-4 h-4 text-[#FAF7F2]" />
                        </button>
                      </div>
                    </div>

                    {/* 선택 카드 02 — 《선천코드 리포트》 */}
                    <div
                      className="rounded-3xl p-7 sm:p-9 flex flex-col justify-between border border-[#B7A18A]/40 shadow-2xl relative overflow-hidden bg-[#241E25] transition-all duration-300"
                    >
                      <div className="space-y-5">
                        <div className="flex items-center justify-between">
                          <span className="inline-flex items-center justify-center py-1 px-3 rounded text-xs font-semibold bg-[#82968F]/20 text-[#82968F] border border-[#82968F]/40">
                            1:1 개인 맞춤 분석서
                          </span>
                          <span className="text-xs font-mono text-[#EDE6DA]/50 font-bold">CHOICE 02</span>
                        </div>

                        <div className="space-y-1.5">
                          <h4 className="text-[22px] sm:text-[25px] font-elegant font-bold text-[#FAF7F2] leading-[1.4]">
                            &ldquo;나의 이야기를 개별적으로 분석받고 싶다면&rdquo;
                          </h4>
                          <p className="text-xs sm:text-sm text-[#82968F] font-medium">
                            선천코드 리포트 (연애·궁합·풍요 맞춤 분석)
                          </p>
                        </div>

                        {/* 체크리스트 */}
                        <ul className="space-y-2.5 text-[16px] text-[#EDE6DA] font-light pt-2 border-t border-white/10">
                          <li className="flex items-start gap-2.5">
                            <Check className="w-5 h-5 text-[#82968F] shrink-0 mt-0.5" />
                            <span>내 사주 구조를 종합적으로 알고 싶다.</span>
                          </li>
                          <li className="flex items-start gap-2.5">
                            <Check className="w-5 h-5 text-[#82968F] shrink-0 mt-0.5" />
                            <span>나의 연애 성향과 반복 패턴이 궁금하다.</span>
                          </li>
                          <li className="flex items-start gap-2.5">
                            <Check className="w-5 h-5 text-[#82968F] shrink-0 mt-0.5" />
                            <span>특정 상대와의 관계를 집중적으로 살펴보고 싶다.</span>
                          </li>
                          <li className="flex items-start gap-2.5">
                            <Check className="w-5 h-5 text-[#82968F] shrink-0 mt-0.5" />
                            <span>개인 상황에 맞는 해석과 실천 제안을 받고 싶다.</span>
                          </li>
                        </ul>
                      </div>

                      <div className="pt-6 space-y-4 border-t border-white/10 mt-6">
                        <div className="text-center">
                          <span className="text-xs font-semibold text-[#82968F] block mb-0.5">핵심 포지셔닝</span>
                          <p className="text-[17px] font-elegant font-bold text-[#FAF7F2]">
                            &ldquo;오직 나를 위해 작성되는 1:1 맞춤 분석서&rdquo;
                          </p>
                        </div>

                        <Link
                          href="/reports"
                          className="w-full py-4 px-6 rounded-xl font-elegant font-bold text-base transition-all duration-300 flex items-center justify-center gap-2 text-[#FAF7F2] border border-[#B7A18A]/50 bg-[#30262F]/70 hover:bg-[#493740]/80 hover:border-[#B7A18A] text-center"
                        >
                          <span>개인 맞춤 리포트 살펴보기</span>
                          <ChevronRight className="w-4 h-4 text-[#B7A18A]" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </section>

            <AntiqueDivider subSection />

            {/* ═══════════════════════════════════════════════════════════════
                Section 4-D: 두 상품을 함께 활용하는 방법 (Synergy Roadmap & CTA)
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-28 text-left w-full max-w-[1280px] mx-auto">
              <Reveal>
                <div className="space-y-8 md:space-y-10">
                  {/* 헤더 */}
                  <div className="text-center max-w-3xl mx-auto space-y-3 break-keep">
                    <span className="text-[#B7A18A] font-elegant text-[12pt] font-semibold tracking-[0.2em] uppercase block">
                      HOW TO USE TOGETHER
                    </span>
                    <h3 className="text-[24px] sm:text-[28px] md:text-[32px] font-elegant font-bold text-[#FAF7F2] leading-[1.38]">
                      원리를 이해하고, 나의 구조를 더 깊이 살펴보는 방법
                    </h3>
                    <p className="text-sm sm:text-base text-[#EDE6DA]/70 font-light">
                      각 상품은 독립적으로 소장하고 활용할 수 있으며, 함께할 때 가장 깊이 있는 관계의 통찰을 제공합니다.
                    </p>
                  </div>

                  {/* 3단계 카드 */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                    {/* STEP 01 */}
                    <div
                      className="rounded-2xl p-6 sm:p-7 border border-[#B7A18A]/35 shadow-xl bg-[#241E25] space-y-3.5 relative overflow-hidden"
                    >
                      <div className="flex items-center justify-between border-b border-white/10 pb-3">
                        <span className="text-xs font-mono font-bold tracking-widest text-[#B7A18A]">
                          STEP 01
                        </span>
                        <span className="text-xs font-elegant font-bold text-[#FAF7F2] px-2.5 py-0.5 rounded bg-white/5 border border-white/10">
                          이해하다
                        </span>
                      </div>
                      <h4 className="text-[18px] font-elegant font-bold text-[#FAF7F2]">
                        해석의 기준을 세우다
                      </h4>
                      <p className="text-[16px] text-[#EDE6DA]/80 leading-relaxed font-light break-keep">
                        <strong className="text-[#FAF7F2] font-medium">《선천코드 비기》</strong>로 오행과 십성, 관계를 해석하는 기본 원리를 익힙니다.
                      </p>
                    </div>

                    {/* STEP 02 */}
                    <div
                      className="rounded-2xl p-6 sm:p-7 border border-[#B7A18A]/35 shadow-xl bg-[#241E25] space-y-3.5 relative overflow-hidden"
                    >
                      <div className="flex items-center justify-between border-b border-white/10 pb-3">
                        <span className="text-xs font-mono font-bold tracking-widest text-[#82968F]">
                          STEP 02
                        </span>
                        <span className="text-xs font-elegant font-bold text-[#FAF7F2] px-2.5 py-0.5 rounded bg-white/5 border border-white/10">
                          확인하다
                        </span>
                      </div>
                      <h4 className="text-[18px] font-elegant font-bold text-[#FAF7F2]">
                        나의 코드를 깊이 읽다
                      </h4>
                      <p className="text-[16px] text-[#EDE6DA]/80 leading-relaxed font-light break-keep">
                        <strong className="text-[#FAF7F2] font-medium">《선천코드 리포트》</strong>로 자신의 사주 구조와 개별적인 해석을 살펴봅니다.
                      </p>
                    </div>

                    {/* STEP 03 */}
                    <div
                      className="rounded-2xl p-6 sm:p-7 border border-[#B7A18A]/35 shadow-xl bg-[#241E25] space-y-3.5 relative overflow-hidden"
                    >
                      <div className="flex items-center justify-between border-b border-white/10 pb-3">
                        <span className="text-xs font-mono font-bold tracking-widest text-[#B7A18A]">
                          STEP 03
                        </span>
                        <span className="text-xs font-elegant font-bold text-[#FAF7F2] px-2.5 py-0.5 rounded bg-white/5 border border-white/10">
                          활용하다
                        </span>
                      </div>
                      <h4 className="text-[18px] font-elegant font-bold text-[#FAF7F2]">
                        관계의 중심을 잡다
                      </h4>
                      <p className="text-[16px] text-[#EDE6DA]/80 leading-relaxed font-light break-keep">
                        배운 원리와 개인별 분석 내용을 참고하여 자신의 관계 패턴을 돌아보고 실천 방향을 정리합니다.
                      </p>
                    </div>
                  </div>

                  {/* 3:1 와이드 로드맵 배너 (2172x724 원본 비율 3:1 유지, 1280px 외곽선 정렬) */}
                  <div className="w-full aspect-[3/1] relative rounded-2xl md:rounded-3xl overflow-hidden border border-[#B7A18A]/35 shadow-2xl bg-[#1C171D] flex items-center justify-center my-6 sm:my-8 md:my-10">
                    <Image
                      src={productData.useTogetherRoadmap}
                      alt="원리를 이해하고, 나의 구조를 더 깊이 살펴보는 방법 - 선천코드 비기와 리포트 함께 활용하는 로드맵"
                      fill
                      sizes="(max-width: 1280px) 100vw, 1280px"
                      className="object-contain"
                    />
                  </div>

                  {/* 하단 카피 */}
                  <div className="text-center pt-2">
                    <p className="text-[17px] sm:text-[20px] font-elegant font-bold text-[#B7A18A] break-keep">
                      &ldquo;비기로 해석의 눈을 기르고, 리포트로 나를 더 깊이 이해하세요.&rdquo;
                    </p>
                  </div>

                  {/* 🎯 전환 및 브릿지 CTA */}
                  <div
                    className="rounded-2xl p-6 sm:p-8 text-center border border-[#B7A18A]/40 shadow-xl space-y-4 max-w-2xl mx-auto !mt-14 sm:!mt-16 md:!mt-20"
                    style={{
                      background: 'linear-gradient(135deg, rgba(73, 55, 64, 0.4) 0%, rgba(36, 30, 37, 0.8) 100%)',
                    }}
                  >
                    <div className="space-y-1">
                      <span className="text-[#B7A18A] font-elegant text-xs md:text-sm font-semibold tracking-[0.25em] uppercase block">
                        BEGIN YOUR JOURNEY
                      </span>
                      <h4 className="text-[19px] sm:text-[22px] font-elegant font-bold text-[#FAF7F2]">
                        이제, 나만의 해석 도감을 펼쳐보세요.
                      </h4>
                    </div>

                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={handlePurchase}
                        className="py-3.5 px-8 rounded-xl font-elegant font-bold text-base transition-all duration-300 inline-flex items-center justify-center gap-2 text-[#FAF7F2] shadow-lg hover:brightness-110 cursor-pointer"
                        style={{
                          background: 'linear-gradient(135deg, #493740 0%, #30262F 100%)',
                          border: '1px solid #B7A18A'
                        }}
                      >
                        <span>《선천코드 비기》 소장하기</span>
                        <ChevronRight className="w-4 h-4 text-[#FAF7F2]" />
                      </button>
                    </div>

                    <div className="pt-2 text-xs sm:text-sm text-[#EDE6DA]/70 font-light">
                      <span>나만을 위한 분석이 궁금하다면? </span>
                      <Link
                        href="/reports"
                        className="text-[#B7A18A] font-semibold underline underline-offset-4 hover:text-[#FAF7F2] transition-colors ml-1"
                      >
                        선천코드 맞춤 리포트 살펴보기 →
                      </Link>
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
                    <span className="text-[#B7A18A] font-elegant text-xs font-semibold tracking-[0.2em] uppercase block">
                      TRANSFORMATION
                    </span>
                    <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white leading-[1.4] break-keep">
                      사람을 바라보는 시선이 달라지면,<br />
                      <span className="text-[#B7A18A]">인연을 이해하는 기준도 달라집니다.</span>
                    </h2>
                    <p className="text-[17px] md:text-[18px] text-[#EDE6DA]/85 mt-3 leading-[1.8] font-normal break-keep">
                      막연한 궁금증에서 스스로 찾아보고 이해하는 관계의 안목으로
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
                            선천코드를 모르던 때
                          </h3>
                        </div>

                        <ul className="space-y-3.5 text-sm md:text-base text-white/70 font-light">
                          <li className="flex items-start gap-2.5">
                            <span className="text-red-400 font-bold shrink-0">✕</span>
                            <span>궁금한 사람이 생길 때마다 누군가의 해석에 의존했다.</span>
                          </li>
                          <li className="flex items-start gap-2.5">
                            <span className="text-red-400 font-bold shrink-0">✕</span>
                            <span>복잡한 사주 용어와 한자 앞에서 공부를 포기하곤 했다.</span>
                          </li>
                          <li className="flex items-start gap-2.5">
                            <span className="text-red-400 font-bold shrink-0">✕</span>
                            <span>상대가 왜 그런 행동을 하는지 이해하기 어려웠다.</span>
                          </li>
                          <li className="flex items-start gap-2.5">
                            <span className="text-red-400 font-bold shrink-0">✕</span>
                            <span>끌림과 궁합, 이상형의 차이를 구분하기 어려웠다.</span>
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
                            선천코드 비기를 만난 후
                          </h3>
                        </div>

                        <ul className="space-y-3.5 text-sm md:text-base text-[#FAF7F2] font-medium">
                          <li className="flex items-start gap-2.5">
                            <Check className="w-5 h-5 text-[#B7A18A] shrink-0 mt-0.5" />
                            <span>나와 상대의 만세력을 직접 찾아보고 책의 해석을 참고할 수 있다.</span>
                          </li>
                          <li className="flex items-start gap-2.5">
                            <Check className="w-5 h-5 text-[#B7A18A] shrink-0 mt-0.5" />
                            <span>캐릭터와 인포그래픽으로 명리학에 재미있게 접근한다.</span>
                          </li>
                          <li className="flex items-start gap-2.5">
                            <Check className="w-5 h-5 text-[#B7A18A] shrink-0 mt-0.5" />
                            <span>서로 다른 성향과 사랑의 표현 방식을 이해하는 관점이 넓어진다.</span>
                          </li>
                          <li className="flex items-start gap-2.5">
                            <Check className="w-5 h-5 text-[#B7A18A] shrink-0 mt-0.5" />
                            <span>매력과 끌림, 관계의 조화를 살펴보며 나만의 선택 기준을 세워간다.</span>
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
            <section className="mb-28 w-full max-w-[1280px] mx-auto">
              <Reveal>
                <div
                  className="rounded-xl sm:rounded-2xl border border-[#B7A18A]/30 pl-8 sm:pl-12 md:pl-20 lg:pl-28 xl:pl-32 pr-6 sm:pr-10 md:pr-14 lg:pr-20 py-8 sm:py-12 md:py-16 lg:py-20 relative overflow-hidden shadow-2xl text-left transition-all duration-300 hover:shadow-[0_0_24px_rgba(183,161,138,0.25)] min-h-[560px] md:min-h-[620px] flex flex-col justify-between"
                  style={{
                    backgroundImage: `url(${productData.authorIntroductionBg})`,
                    backgroundSize: '100% 100%',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.45)',
                  }}
                >
                  {/* 중앙~좌측 한지 영역 위에 안정적으로 배치되는 텍스트 컨테이너 (모바일 가독성 보호 및 우측 하단 모란꽃 겹침 방지) */}
                  <div className="max-w-2xl lg:max-w-3xl mr-auto space-y-6 sm:space-y-8 bg-[#FAF7F2]/85 lg:bg-transparent backdrop-blur-[3px] lg:backdrop-blur-none p-6 sm:p-8 lg:p-0 rounded-2xl lg:rounded-none shadow-sm lg:shadow-none border border-[#B7A18A]/30 lg:border-none">
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
                        사주와 명리학은 사람을 이해하는 하나의 흥미로운 관점을 제공합니다. 하지만 복잡한 한자와 전문 용어는 많은 분들에게 높은 진입장벽이 되곤 합니다.
                      </p>
                      <p>
                        저는 어렵게만 느껴졌던 명리학을 누구나 쉽고 재미있게 접할 수 있도록, 사랑과 인연이라는 친숙한 주제로 풀어내고 싶었습니다.
                      </p>
                      <p>
                        나와 상대의 기질을 이해하고, 새로운 인연을 만날 때마다 직접 찾아볼 수 있는 책
                      </p>
                      <p className="font-semibold text-[#493740]">
                        《선천코드 비기》가 당신의 관계를 바라보는 새로운 시선이 되기를 바랍니다.
                      </p>
                    </div>

                    {/* 백도화 올림 및 낙관 (왼쪽 정렬로 우측 하단 모란꽃 장식과 분리) */}
                    <div className="pt-4 sm:pt-6 flex items-end justify-start gap-2.5 sm:gap-3">
                      <span className="text-[16px] sm:text-[17px] font-elegant text-[#241E25] font-bold pb-1 tracking-wider">
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

            <AntiqueDivider />

            {/* ═══════════════════════════════════════════════════════════════
                Section 7: 책의 탄생 배경 (THE ONLY SECRET 단 하나의 관계 암호서)
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-28 text-left w-full max-w-[1280px] mx-auto">
              <Reveal>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-14 items-center">
                  {/* 왼쪽 책 이미지 (가로폭 약 20~25% 확대, 최대 500px, 3:4 비율 및 중앙 정렬 유지) */}
                  <div className="lg:col-span-5 flex justify-center lg:justify-start w-full">
                    <div className="w-full max-w-[480px] lg:max-w-[500px]">
                      <HybridImageSlot
                        assetKey="book1"
                        className="aspect-[3/4] shadow-2xl"
                      />
                    </div>
                  </div>

                  {/* 오른쪽 본문 (가로폭 소폭 축소 및 오른쪽으로 살짝 이동) */}
                  <div className="lg:col-span-7 break-keep lg:pl-4 xl:pl-6">
                    <div>
                      {/* 1. 상단 영문 라벨 (12px / 12pt 유지) */}
                      <span className="text-[#B7A18A] font-elegant text-[12pt] font-semibold tracking-[0.2em] uppercase block mb-2.5 sm:mb-3">
                        THE ONLY SECRET
                      </span>

                      {/* 2. 상단 리드 문구 (메인 제목과 8~12px 여백) */}
                      <p className="text-[17px] sm:text-[18px] font-elegant font-light text-[#B7A18A] leading-[1.4] mb-2 sm:mb-2.5 break-keep">
                        수많은 엇갈림과 임상 통찰 끝에,
                      </p>

                      {/* 3. 메인 헤드카피 (두 줄 메인 제목, 36px, 기존 정상 행간 1.4 유지) */}
                      <h2 className="text-[26px] sm:text-[30px] md:text-[34px] lg:text-[36px] font-elegant font-bold leading-[1.4] break-keep">
                        <span className="text-[#FAF7F2] block">마침내 탄생한</span>
                        <span className="text-[#B7A18A] block mt-1">단 하나의 관계 암호서(暗號書)</span>
                      </h2>

                      {/* 4. 대형 상품 타이틀
                          - 메인 제목과 최종 여백: 8~12px (mt-2 sm:mt-2.5, leading-none으로 거대 폰트 상하 기본 여백 제거)
                          - 기존 고풍스러운 세리프 서체(font-elegant font-extrabold) 및 그라데이션 유지 */}
                      <div className="mt-2 sm:mt-2.5">
                        <span
                          className="text-[32px] sm:text-[38px] md:text-[44px] lg:text-[48px] xl:text-[52px] font-elegant font-extrabold inline-block tracking-tight leading-none"
                          style={{
                            background: 'linear-gradient(110deg, #E2CEB9 0%, #B7A18A 35%, #9E7D8A 65%, #6B4E5D 100%)',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            color: 'transparent',
                            WebkitTextFillColor: 'transparent',
                            opacity: 1
                          }}
                        >
                          선천코드 비기
                        </span>
                      </div>
                    </div>

                    {/* 5. 본문 설명 문구
                        - 상품명 하단과의 최종 간격: 12~16px 축소 (mt-3 sm:mt-3.5)
                        - 본문 자체 line-height: 1.7 유지, 글자 크기: 18px 유지
                        - 문단 1 ↔ 문단 2 간격: 8~12px (mt-2 sm:mt-2.5)
                        - 문단 2 ↔ 문단 3 간격: 12~16px (mt-3 sm:mt-3.5) */}
                    <div className="text-[17px] sm:text-[18px] text-[#EDE6DA] leading-[1.7] font-normal break-keep mt-3 sm:mt-3.5">
                      <p className="text-[#F0EBE2]">
                        더 이상 남의 점괘에 휘둘리며 불안해하지 마십시오.
                      </p>
                      <p className="text-[#FAF7F2] font-bold mt-2 sm:mt-2.5">
                        사랑은 운에 맡기는 것이 아니라, 나와 상대의 코드를 읽고 주도권을 쥐는 것입니다.
                      </p>
                      <p className="text-[#F0EBE2] mt-3 sm:mt-3.5">
                        《선천코드 비기》는 난해한 한자 풀이와 뜬구름 잡는 사주 상담을 거부하고<br />
                        <strong className="text-[#B7A18A] font-bold">&lsquo;명리 심리 역학&rsquo;</strong>과{' '}
                        <strong className="text-[#B7A18A] font-bold">&lsquo;오감 행동 처방&rsquo;</strong>을 집대성하여 오직 사랑과 인연의 판을 뒤집기 위해 탄생한<br />
                        <strong className="text-[#B7A18A] font-bold">실전 관계 도감</strong>입니다.
                      </p>
                    </div>

                    {/* 6. 핵심 키워드 카드 6종
                        - 마지막 설명 문구와의 여백: 24px (mt-6)
                        - 기존 2열 3행 구조, 카드 크기/패딩/디자인 온전히 유지 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 mt-6">
                      {[
                        "만세력 3초 핵심 좌표 판독",
                        "십성 5대 본능 캐릭터 도감",
                        "10대 일간 오감 매혹 무기",
                        "도화와 본능적 끌림의 비밀",
                        "이상형 vs 배우자 안방 감별",
                        "파국 궁합 방어 & 재회 타이밍"
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
                          <span className="text-[16px] text-[#FAF7F2] font-semibold tracking-wide break-keep">
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
                      인연의 갈림길에서 나만의 중심을 찾고 상대의 심리를 해독하고 싶은 모든 분을 위한 필독서
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                    {[
                      {
                        num: "01",
                        title: "사주를 쉽고 재미있게 만나고 싶은 분",
                        desc: "복잡한 한자와 어려운 전문 용어 때문에 사주 공부를 망설였던 분"
                      },
                      {
                        num: "02",
                        title: "좋아하는 사람을 더 이해하고 싶은 분",
                        desc: "연인, 썸을 타는 상대, 관심 있는 사람의 기질과 연애 성향이 궁금한 분"
                      },
                      {
                        num: "03",
                        title: "나만의 매력과 연애 성향을 발견하고 싶은 분",
                        desc: "타고난 기질과 도화의 특성, 본능적인 끌림과 이상형을 살펴보고 싶은 분"
                      },
                      {
                        num: "04",
                        title: "인연을 바라보는 나만의 기준을 세우고 싶은 분",
                        desc: "궁합, 배우자, 관계의 갈등과 반복되는 패턴을 이해하며 지혜롭게 관계를 선택하고 싶은 분"
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
                          <p className="text-[16px] text-[#EDE6DA]/80 leading-relaxed font-light break-keep">
                            {card.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* ─────────────────────────────────────────────────────────────
                      실생활 활용 공감: WHEN TO OPEN THIS BOOK
                     ───────────────────────────────────────────────────────────── */}
                  <div className="mt-6 md:mt-7 lg:mt-8 pt-4 md:pt-5 lg:pt-8 border-t border-[#B7A18A]/20">
                    {/* 좌측 세로형 이미지 + 우측 (제목·라벨 + 6개 체크리스트 카드) 2분할 레이아웃 (수직 중앙 정렬) */}
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 xl:gap-14 items-center">
                      {/* 좌측: 3:4 세로형 이미지 삽입 공간 (모바일 위, 데스크톱 좌측 약 47~48% 너비) */}
                      <div className="w-full lg:w-[47%] xl:w-[48%] flex justify-center items-center">
                        <div className="relative w-full max-w-[440px] sm:max-w-[480px] lg:max-w-[500px] xl:max-w-[520px]">
                          <HybridImageSlot
                            assetKey="whenToOpen"
                            className="aspect-[3/4] shadow-2xl"
                          />
                        </div>
                      </div>

                      {/* 우측: 영문 라벨 + 메인 제목(36px 기준, 좌측 정렬) + 6개 체크리스트 카드 */}
                      <div className="w-full lg:w-[53%] xl:w-[52%] space-y-5 md:space-y-6 text-left break-keep">
                        {/* 영문 라벨 및 메인 제목 (체크리스트 바로 위 좌측 정렬) */}
                        <div className="space-y-2.5">
                          <span className="inline-block px-3 py-1 text-xs font-mono tracking-widest uppercase rounded-full bg-[#B7A18A]/10 text-[#B7A18A] border border-[#B7A18A]/20">
                            WHEN TO OPEN THIS BOOK
                          </span>
                          <h3 className="text-2xl sm:text-3xl md:text-[36px] font-elegant font-bold text-[#FAF7F2] leading-[1.35] md:leading-[1.4] break-keep">
                            사람이 궁금해지는 순간,<br className="hidden sm:inline" />
                            {' '}이 책을 펼쳐보세요.
                          </h3>
                        </div>

                        {/* 6개 체크리스트 카드 1열 세로 배치 */}
                        <div className="space-y-3 sm:space-y-3.5">
                          {[
                            "새로운 인연을 만났을 때, 그 사람의 연애 성향이 궁금하다면",
                            "좋아하는 사람이 어떤 유형에게 끌리는지 알고 싶다면",
                            "연인의 이해하기 어려운 행동을 다른 관점에서 바라보고 싶다면",
                            "강렬하게 끌리는 사람과 편안하게 지낼 수 있는 사람의 차이가 궁금하다면",
                            "나와 상대의 관계에서 반복되는 패턴을 이해하고 싶다면",
                            "어려운 사주를 공부하지 않고도 직접 찾아보고 싶다면"
                          ].map((item, idx) => (
                            <div
                              key={idx}
                              className="flex items-start gap-3 p-4 sm:p-4.5 rounded-xl border border-[#B7A18A]/20 bg-[#241E26]/60 backdrop-blur-sm transition-all duration-300 hover:border-[#B7A18A]/50"
                            >
                              <div className="w-5 h-5 rounded-full bg-[#B7A18A]/20 border border-[#B7A18A]/40 flex items-center justify-center shrink-0 mt-0.5 text-[#B7A18A]">
                                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                              <p className="text-[16px] text-[#EDE6DA]/90 leading-relaxed font-light break-keep">
                                {item}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* 하단 강조 문구 (2분할 영역 아래 중앙 정렬 유지) */}
                    <div className="mt-10 md:mt-12 text-center">
                      <div className="inline-block px-6 py-3.5 rounded-full border border-[#B7A18A]/40 bg-gradient-to-r from-[#B7A18A]/15 via-[#B7A18A]/10 to-[#B7A18A]/15 backdrop-blur-sm">
                        <p className="text-sm sm:text-base font-elegant font-semibold text-[#B7A18A] tracking-wide break-keep">
                          당신의 인연이 달라질 때마다, 이 책의 쓰임도 달라집니다.
                        </p>
                      </div>
                    </div>
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
                    <h2 className="text-2xl sm:text-3xl md:text-[36px] font-elegant font-bold text-[#FAF7F2] leading-[1.6] md:leading-[1.65] break-keep">
                      사랑과 인연을 감(感)에 맡기지 마십시오.<br />
                      <span className="text-[#B7A18A]">《선천코드 비기》가 설계한 7단계 관계 해독 지도</span>
                    </h2>
                    <div className="text-[#EDE6DA]/85 text-[18px] max-w-4xl mx-auto font-normal leading-[1.8] break-keep space-y-1 sm:space-y-1.5">
                      <p>
                        타고난 본능 캐릭터와 오감 매혹 무기부터 이상형 감별, 파국 궁합 방어, 재회 골든타임까지
                      </p>
                      <p className="font-bold text-[#FAF7F2]">
                        한자 몰라도 3초 만에 나와 상대의 코드를 읽어내는 실전 해독 체계를 한 권에 집약했습니다.
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 md:mt-10 relative w-full aspect-[16/9] md:aspect-[1672/941] rounded-2xl md:rounded-3xl overflow-hidden border border-[#B7A18A]/30 shadow-2xl bg-black/40 flex items-center justify-center">
                    <Image
                      src={productData.curriculumImage}
                      alt="사랑과 인연을 감에 맡기지 마십시오 - 선천코드 비기가 설계한 7단계 관계 해독 지도 인포그래픽"
                      fill
                      sizes="(max-width: 1280px) 100vw, 1280px"
                      className="object-contain"
                    />
                  </div>
                </div>
              </Reveal>
            </section>

            <AntiqueDivider subSection />

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
                      만세력 속 작은 글자에서,<br />
                      <span className="text-[#B7A18A]">
                        사람과 사랑을 이해하는 새로운 세계로
                      </span>
                    </h2>
                    <p className="text-sm md:text-base text-[#EDE6DA]/70 font-light">
                      복잡한 명리학을 모두 공부할 필요는 없습니다. 책에서 안내하는 핵심 좌표와 캐릭터 도감부터 차근차근 살펴보세요.
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
                            나의 선천코드
                          </SeoncheonBadge>
                        </div>
                        <h3 className="text-xl md:text-2xl font-elegant font-bold text-[#FAF7F2] leading-[1.4]">
                          나의 선천코드를 발견하다
                        </h3>
                        <p className="text-sm md:text-base text-[#EDE6DA]/90 leading-relaxed font-light">
                          일간·일지·월지를 찾아보고 나의 매력, 관계 성향, 이상형에 대한 해설을 살펴봅니다.
                        </p>
                        <ul className="space-y-2.5 text-[16px] text-[#FAF7F2] pt-2">
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#B7A18A]" />
                            <span>만세력 핵심 3글자 확인</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#B7A18A]" />
                            <span>오행과 십성의 기본 특성 이해</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#B7A18A]" />
                            <span>10대 일간 매력 페르소나 확인</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#B7A18A]" />
                            <span>나의 도화와 고유한 매력 살펴보기</span>
                          </li>
                        </ul>
                      </div>
                      <div className="p-4 rounded-xl bg-black/40 border border-[#B7A18A]/20 text-xs text-[#B7A18A] font-light">
                        💡 나를 이해하는 즐거움에서, 상대를 이해하는 새로운 시선으로
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
                            상대의 선천코드
                          </SeoncheonBadge>
                        </div>
                        <h3 className="text-xl md:text-2xl font-elegant font-bold text-[#FAF7F2] leading-[1.4]">
                          상대의 선천코드를 이해하다
                        </h3>
                        <p className="text-sm md:text-base text-[#EDE6DA]/90 leading-relaxed font-light">
                          상대의 만세력 정보를 알고 있다면 동일한 방법으로 책의 캐릭터와 관계 해설을 참고할 수 있습니다.
                        </p>
                        <ul className="space-y-2.5 text-[16px] text-[#FAF7F2] pt-2">
                          <li className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-[#B7A18A]" />
                            <span>상대의 일간 캐릭터 찾아보기</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-[#B7A18A]" />
                            <span>십성으로 보는 사랑의 표현 방식 이해</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-[#B7A18A]" />
                            <span>나와 상대의 끌림과 차이점 살펴보기</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-[#B7A18A]" />
                            <span>궁합과 관계의 조화에 대한 해설 참고하기</span>
                          </li>
                        </ul>
                      </div>
                      <div className="p-4 rounded-xl bg-[#493740]/50 border border-[#B7A18A]/40 text-[16px] text-[#FAF7F2] font-medium">
                        ✨ 나를 이해하는 즐거움에서, 상대를 이해하는 새로운 시선으로
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
                    본편으로 원리를 꿰뚫고, 일간·십성 도감으로 상대를 분석하며,<br className="hidden sm:inline" />
                    {' '}도화·이상형 비책으로 인연을 완성합니다.
                  </p>
                </div>

                {/* 3종 올인원 세트 목업 이미지 */}
                <div className="mb-10 md:mb-14">
                  <div className="relative w-full rounded-[20px] overflow-hidden border border-[#B7A18A]/30 shadow-[0_12px_40px_rgba(0,0,0,0.45)] bg-black/20 flex items-center justify-center">
                    <Image
                      src={productData.packageImage}
                      alt="선천코드 비기 3종 올인원 세트 - 인연의 암호를 해독하는 3단계 완성형 패키지 와이드 목업"
                      width={1536}
                      height={1024}
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

                {/* ─────────────────────────────────────────────────────────────
                    책 속 콘텐츠 미리보기: INSIDE THE SECRET BOOK
                   ───────────────────────────────────────────────────────────── */}
                <div className="!mt-24 sm:!mt-28 md:!mt-36 pt-16 md:pt-20 lg:pt-24 mb-14 md:mb-18 border-t border-[#B7A18A]/20">
                  <div className="text-center max-w-3xl mx-auto mb-10 break-keep">
                    <span className="text-[#B7A18A] font-elegant text-[12pt] font-semibold tracking-[0.2em] uppercase block mb-3">
                      INSIDE THE SECRET BOOK
                    </span>
                    <h3 className="text-2xl md:text-[36px] font-elegant font-bold text-[#FAF7F2] tracking-wide leading-[1.4] mb-3">
                      캐릭터로 만나고, 그림으로 이해하는 선천코드의 세계
                    </h3>
                    <p className="text-[17px] md:text-[18px] text-[#EDE6DA]/85 font-normal leading-[1.8]">
                      어렵게만 느껴졌던 사주와 명리학을 캐릭터, 도감, 인포그래픽으로 만나보세요.
                    </p>
                  </div>

                  {/* 4열 책 속 이미지 슬롯 (최대 가로폭 1280px 전체 너비 정렬) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full">
                    <PreviewBookSlot
                      assetKey="bookPreviewGuide"
                      previewNum="미리보기 01"
                      title="나와 상대의 본능 캐릭터 도감"
                      desc="십성으로 살펴보는 5대 본능 캐릭터와 관계 아키타입"
                    />
                    <PreviewBookSlot
                      assetKey="bookPreviewTools"
                      previewNum="미리보기 02"
                      title="타고난 매력 페르소나 도감"
                      desc="10가지 일간을 통해 살펴보는 각자의 고유한 매력과 연애 성향"
                    />
                    <PreviewBookSlot
                      assetKey="bookPreviewJourney"
                      previewNum="미리보기 03"
                      title="사랑과 인연의 실전 해석 도감"
                      desc="이상형, 본능적 끌림, 배우자, 궁합, 관계 충돌 등을 직관적으로 이해하는 인포그래픽과 해설"
                    />
                    <PreviewBookSlot
                      assetKey="bookPreviewProfile"
                      previewNum="미리보기 04"
                      title="도화 &amp; 궁합 프로필 도감"
                      desc="도화 매혹의 기제와 나와 상대의 인연 궁합을 한눈에 살펴보는 실전 프로필 도감"
                    />
                  </div>
                </div>

                {/* 3종 세트 상세 서브헤더 */}
                <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16 pt-12 md:pt-16 lg:pt-20 break-keep">
                  <span className="text-[#B7A18A] font-elegant text-[12pt] font-semibold tracking-[0.2em] uppercase block mb-3">
                    3-in-1 All-in-One Package
                  </span>
                  <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white tracking-wide leading-[1.4] mb-3">
                    선천코드 비기 3종 올인원 세트 <span className="text-[#B7A18A]">상세 해부</span>
                  </h2>
                  <div className="space-y-1.5">
                    <p className="text-[17px] md:text-[18px] text-[#EDE6DA]/85 font-normal leading-[1.5]">
                      본편부터 실전 암호 도감, 도화·배우자 판별 비책까지
                    </p>
                    <p className="text-[18px] md:text-[20px] text-[#B7A18A] font-bold font-elegant tracking-wide leading-[1.5]">
                      선천코드 비기 3종 올인원 완성형 패키지
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
                          assetKey="bookMainMockup"
                          className="aspect-[3/4] shadow-2xl"
                        />
                        <div className="mt-4 md:mt-5 text-center space-y-1 text-[16px] md:text-[18px] leading-[1.5]">
                          <p className="text-[#B7A18A] font-semibold tracking-wide">
                            원리바이블-본편
                          </p>
                          <p className="text-[#EDE6DA] font-normal tracking-wide">
                            PDF 전자책 · <strong className="font-bold">즉시 열람</strong>
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
                          assetKey="bookAppendix01Mockup"
                          className="aspect-[3/4] shadow-2xl"
                        />
                        <div className="mt-4 md:mt-5 text-center space-y-1 text-[16px] md:text-[18px] leading-[1.5]">
                          <p className="text-[#B7A18A] font-semibold tracking-wide">
                            실전 도감-부록 1
                          </p>
                          <p className="text-[#EDE6DA] font-normal tracking-wide">
                            PDF 전자책 · <strong className="font-bold">즉시 열람</strong>
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
                          assetKey="bookAppendix02Mockup"
                          className="aspect-[3/4] shadow-2xl"
                        />
                        <div className="mt-4 md:mt-5 text-center space-y-1 text-[16px] md:text-[18px] leading-[1.5]">
                          <p className="text-[#B7A18A] font-semibold tracking-wide">
                            실전 비책-부록 2
                          </p>
                          <p className="text-[#EDE6DA] font-normal tracking-wide">
                            PDF 전자책 · <strong className="font-bold">즉시 열람</strong>
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
              className="w-full max-w-[1280px] mx-auto rounded-3xl relative overflow-hidden shadow-2xl mb-0"
              style={{
                background: 'linear-gradient(115deg, #241E25 0%, #30262F 52%, #1C171D 100%)',
                border: '1px solid rgba(183, 161, 138, 0.35)',
                boxShadow: '0 12px 40px rgba(0, 0, 0, 0.35)'
              }}
            >
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 items-stretch break-keep">
                <div className="lg:col-span-5 relative w-full min-h-[280px] sm:min-h-[340px] lg:min-h-full overflow-hidden flex items-center justify-center p-3 sm:p-5 lg:p-6 bg-black/20">
                  <Image
                    src={productData.overviewImage}
                    alt="선천코드 비기 3종 패키지 (본편 + 실전부록 1 + 실전부록 2) 세트 모형"
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-contain object-center"
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
                      올인원 패키지
                    </SeoncheonBadge>
                  </div>

                  <div className="border-b border-white/10" />

                  <div className="space-y-1">
                    <span className="text-xs text-[#EDE6DA]/60">정가 79,000원</span>
                    <div className="text-2xl sm:text-3xl font-elegant font-bold text-[#B7A18A] leading-none">
                      런칭 특가 29,000원 <span className="text-sm text-white/70 font-sans font-normal ml-1.5">(63% OFF)</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2 items-stretch sm:items-center w-full">
                    <button
                      type="button"
                      onClick={handleAddToCart}
                      className="py-3.5 px-5 sm:px-6 rounded-xl font-elegant font-bold text-sm md:text-base border border-[#B7A18A]/60 text-[#B7A18A] hover:bg-[#493740]/30 transition-all duration-300 shrink-0 whitespace-nowrap text-center bg-transparent order-2 sm:order-1 cursor-pointer"
                    >
                      장바구니 담기
                    </button>
                    <button
                      type="button"
                      onClick={handlePurchase}
                      className="flex-1 py-3.5 px-6 rounded-xl font-elegant font-bold text-sm md:text-base hover:scale-[1.01] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 text-[#FAF7F2] order-1 sm:order-2 cursor-pointer shadow-lg"
                      style={{
                        background: 'linear-gradient(135deg, #493740 0%, #30262F 100%)',
                        border: '1px solid #B7A18A'
                      }}
                    >
                      <span>선천코드 비기 29,000원에 구매하기</span>
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
                      읽는 재미에, 찾아보는 재미까지<br />
                      <span className="text-[#B7A18A]">선천코드 비기만의 3대 실전 도감</span>
                    </h2>
                    <p className="text-[#EDE6DA]/85 text-[17px] md:text-[18px] mt-2 font-normal leading-[1.8] break-keep">
                      두루뭉술한 미신이 아닌, 캐릭터와 도감으로 사람을 이해하고 관계의 지혜를 세우는 실전 해설서
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 items-stretch">
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
                              <span className="text-xs font-mono tracking-widest text-[#B7A18A]/80 uppercase block">
                                CARD 01
                              </span>
                              <h3 className="text-[18px] md:text-[20px] font-bold font-elegant text-[#FAF7F2]">
                                십성 5대 본능 캐릭터
                              </h3>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div className="space-y-3 text-[16px] text-[#EDE6DA]/90 leading-[1.75] font-normal break-keep">
                            <p>
                              사랑 앞에서 드러나는 서로 다른 본능과 관계의 표현 방식을 개성 있는 캐릭터로 만나보세요.
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
                              <span className="text-xs font-mono tracking-widest text-[#B7A18A]/80 uppercase block">
                                CARD 02
                              </span>
                              <h3 className="text-[18px] md:text-[20px] font-bold font-elegant text-[#FAF7F2]">
                                10대 일간 매력 페르소나
                              </h3>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div className="space-y-3 text-[16px] text-[#EDE6DA]/90 leading-[1.75] font-normal break-keep">
                            <p>
                              거목의 수호자 갑목, 화초형 힐러 을목, 태양의 주인공 병화처럼 각 일간의 고유한 매력과 관계 성향을 흥미롭게 살펴봅니다.
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
                              <span className="text-xs font-mono tracking-widest text-[#B7A18A]/80 uppercase block">
                                CARD 03
                              </span>
                              <h3 className="text-[18px] md:text-[20px] font-bold font-elegant text-[#FAF7F2]">
                                사랑과 인연의 시각적 해설
                              </h3>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div className="space-y-3 text-[16px] text-[#EDE6DA]/90 leading-[1.75] font-normal break-keep">
                            <p>
                              도화, 이상형, 배우자, 궁합과 관계 충돌까지 복잡한 개념을 인포그래픽과 도감으로 이해하고 필요한 순간 다시 찾아볼 수 있습니다.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </section>

            <AntiqueDivider subSection />

            {/* ═══════════════════════════════════════════════════════════════
                Section 14-B: WHY THIS BOOK IS DIFFERENT (기존 사주 전문서와의 차별성)
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-28 text-left w-full max-w-[1280px] mx-auto">
              <Reveal>
                <div
                  className="rounded-[32px] md:rounded-[40px] p-6 sm:p-10 md:p-14 relative overflow-hidden backdrop-blur-md"
                  style={{
                    background: 'linear-gradient(135deg, rgba(48, 38, 47, 0.75) 0%, rgba(28, 23, 29, 0.9) 100%)',
                    border: '1px solid rgba(183, 161, 138, 0.35)',
                    boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
                  }}
                >
                  <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12 break-keep">
                    <span className="inline-block px-3.5 py-1 text-xs font-mono tracking-widest uppercase rounded-full bg-[#B7A18A]/10 text-[#B7A18A] border border-[#B7A18A]/25 mb-3.5">
                      WHY THIS BOOK IS DIFFERENT
                    </span>
                    <h2 className="text-2xl sm:text-3xl md:text-[36px] font-elegant font-bold text-[#FAF7F2] leading-[1.4] mb-3">
                      어려웠던 사주, 사랑을 만나 쉬워지다
                    </h2>
                    <p className="text-[17px] md:text-[18px] text-[#EDE6DA]/85 font-normal leading-[1.8] break-keep">
                      이론과 암기 중심의 전통 명리학 학습서와, 필요한 순간 직접 찾아보는<br />&lsquo;선천코드 비기&rsquo;의 접근 방식 차이입니다.
                    </p>
                  </div>

                  {/* Desktop Table View */}
                  <div className="hidden md:block overflow-hidden rounded-2xl border border-[#B7A18A]/30">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-[#1C171D] border-b border-[#B7A18A]/30">
                          <th className="py-4 px-6 text-sm font-mono text-[#EDE6DA]/60 uppercase tracking-wider w-1/4">
                            비교 기준
                          </th>
                          <th className="py-4 px-6 text-sm font-elegant font-bold text-[#EDE6DA]/70 w-[37.5%]">
                            기존 사주 전문서
                          </th>
                          <th className="py-4 px-6 text-sm font-elegant font-bold text-[#B7A18A] bg-[#B7A18A]/10 w-[37.5%]">
                            선천코드 비기 (관계 도감)
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#B7A18A]/15 bg-[#241E26]/40">
                        {[
                          { criteria: "사용 언어", traditional: "복잡한 한자와 명리학 용어", secretBook: "쉽고 친근한 언어" },
                          { criteria: "접근 방식", traditional: "이론과 학습 중심", secretBook: "캐릭터와 도감 중심" },
                          { criteria: "해석 영역", traditional: "전반적인 운세 해석 (직업·재물 등)", secretBook: "연애·매력·인연·궁합 특화" },
                          { criteria: "읽는 방식", traditional: "공부하고 외워야 하는 구성", secretBook: "필요한 부분을 찾아보는 구성" },
                          { criteria: "습득 목표", traditional: "명리학적 지식 습득", secretBook: "나와 상대를 이해하는 관점" },
                          { criteria: "시각적 표현", traditional: "전문적인 설명 위주", secretBook: "인포그래픽과 시각적 해설" }
                        ].map((row, idx) => (
                          <tr key={idx} className="hover:bg-[#B7A18A]/5 transition-colors">
                            <td className="py-4 px-6 text-[16px] font-medium text-[#EDE6DA]/80">
                              {row.criteria}
                            </td>
                            <td className="py-4 px-6 text-[16px] text-[#EDE6DA]/70 font-light">
                              {row.traditional}
                            </td>
                            <td className="py-4 px-6 text-[16px] text-[#FAF7F2] font-semibold bg-[#B7A18A]/5">
                              <span className="text-[#B7A18A] mr-2">✓</span>
                              {row.secretBook}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Mobile Card View */}
                  <div className="md:hidden space-y-4">
                    {[
                      { criteria: "사용 언어", traditional: "복잡한 한자와 명리학 용어", secretBook: "쉽고 친근한 언어" },
                      { criteria: "접근 방식", traditional: "이론과 학습 중심", secretBook: "캐릭터와 도감 중심" },
                      { criteria: "해석 영역", traditional: "전반적인 운세 해석 (직업·재물 등)", secretBook: "연애·매력·인연·궁합 특화" },
                      { criteria: "읽는 방식", traditional: "공부하고 외워야 하는 구성", secretBook: "필요한 부분을 찾아보는 구성" },
                      { criteria: "습득 목표", traditional: "명리학적 지식 습득", secretBook: "나와 상대를 이해하는 관점" },
                      { criteria: "시각적 표현", traditional: "전문적인 설명 위주", secretBook: "인포그래픽과 시각적 해설" }
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl border border-[#B7A18A]/25 bg-[#241E26]/70 space-y-2.5"
                      >
                        <span className="text-[12px] font-mono font-bold text-[#B7A18A] tracking-wider block">
                          {item.criteria}
                        </span>
                        <div className="text-xs text-[#EDE6DA]/60 line-through">
                          기존: {item.traditional}
                        </div>
                        <div className="text-[16px] font-semibold text-[#FAF7F2] flex items-start gap-1.5 pt-0.5">
                          <span className="text-[#B7A18A] shrink-0">✓</span>
                          <span>{item.secretBook}</span>
                        </div>
                      </div>
                    ))}
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
                {/* 1. 좌우 약 50:50 2단 그리드 레이아웃 (상단 정렬 및 균형 있는 하단 매칭) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 xl:gap-16 items-start">
                  {/* 좌측 3:4 실전 가이드 포스터 이미지 */}
                  <div className="w-full">
                    <div className="relative w-full aspect-[3/4] overflow-hidden rounded-[32px] md:rounded-[40px] border border-[#B7A18A]/30 shadow-2xl bg-black/40 flex items-center justify-center">
                      <Image
                        src={productData.practicalUsageGuide}
                        alt="선천코드 비기 실전 200% 활용 가이드 - 만세력 조회·해독·적용 4단계 로드맵 포스터"
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-contain"
                        priority
                      />
                    </div>
                  </div>

                  {/* 우측 4단계 가이드 콘텐츠 */}
                  <div className="flex flex-col w-full text-left break-keep">
                    {/* 상단 제목 & 부제목 & 설명 문구 블록 (균일한 16~20px 여백) */}
                    <div>
                      {/* 메인 타이틀 */}
                      <h2 className="font-elegant font-bold leading-[1.4] text-left">
                        <span className="block text-2xl md:text-[28px] text-[#B7A18A]">
                          《선천코드 비기》
                        </span>
                        <span className="block text-3xl md:text-[36px] lg:text-[40px] text-[#FAF7F2] mt-1.5 break-keep">
                          실전 200% 활용 가이드
                        </span>
                      </h2>

                      {/* 부제목: 제목과 16~20px 간격 (mt-4 md:mt-5) */}
                      <p className="mt-4 md:mt-5 text-[20px] md:text-[24px] font-elegant font-bold text-[#FAF7F2] leading-[1.5] md:leading-[1.55] break-keep">
                        한자를 몰라도 3초면 충분합니다.<br className="hidden sm:inline" />
                        {' '}지금 당장 이렇게 펼쳐보세요.
                      </p>

                      {/* 설명 문구: 부제목과 16~20px 간격 (mt-4 md:mt-5), 18px, 행간 1.75~1.8 */}
                      <p className="mt-4 md:mt-5 text-[17px] md:text-[18px] text-[#F2EAE0] leading-[1.75] md:leading-[1.8] font-normal break-keep">
                        단순한 이론 습득에 그치지 않고, 스마트폰 만세력 앱으로 나와 상대의 사주를 직접 조회해 바로 적용할 수 있는 4단계 실전 로드맵을 제공합니다.
                      </p>
                    </div>

                    {/* STEP 01~04 카드: 설명 문구와 24px 간격 (mt-6), 카드 간 간격 12~16px (gap-3 sm:gap-3.5) */}
                    <div className="flex flex-col gap-3 sm:gap-3.5 mt-6">
                      {[
                        {
                          title: "STEP 01. 만세력을 확인하세요.",
                          desc: "스마트폰 만세력에서 일간, 일지, 월지의 위치를 확인합니다. 책에 수록된 만세력 판독법을 활용하면 초보자도 쉽게 따라갈 수 있습니다."
                        },
                        {
                          title: "STEP 02. 나와 상대의 캐릭터를 찾아보세요.",
                          desc: "10대 일간 페르소나와 십성 캐릭터 도감에서 각자의 기질과 매력에 관한 해설을 찾아봅니다."
                        },
                        {
                          title: "STEP 03. 궁금한 관계의 주제를 펼쳐보세요.",
                          desc: "이상형, 본능적 끌림, 도화, 배우자, 궁합, 갈등, 재회 등 지금 궁금한 주제를 선택해 읽어보세요."
                        },
                        {
                          title: "STEP 04. 나만의 관계 기준을 세워보세요.",
                          desc: "책의 해석과 실제 관계에서 경험하는 행동과 감정을 함께 살펴보며 자신에게 맞는 관계와 선택의 기준을 정리합니다."
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
                            <h4 className="text-[15px] sm:text-[16px] font-bold text-[#FAF7F2] leading-[1.4]">
                              {guide.title}
                            </h4>
                            <p className="text-[15px] sm:text-[16px] text-[#EDE6DA]/75 mt-1 leading-relaxed break-keep">
                              {guide.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 2. 하단 전체 가로 중앙 마무리 문구 (좌우 2단 콘텐츠 아래 32px 간격 mt-8 md:mt-10) */}
                <div className="mt-8 md:mt-10 w-full flex flex-col items-center text-center justify-center">
                  <div className="flex items-center justify-center gap-3 w-full">
                    <div className="h-[1px] w-8 sm:w-16 bg-gradient-to-r from-transparent to-[#B7A18A]/60" />
                    <p className="font-elegant text-[15px] sm:text-[16px] text-[#B7A18A] tracking-wide">
                      점검하고, 적용하고, 나의 것으로
                    </p>
                    <div className="h-[1px] w-8 sm:w-16 bg-gradient-to-l from-transparent to-[#B7A18A]/60" />
                  </div>
                  <p className="text-[12px] sm:text-[13px] text-[#FAF7F2]/75 mt-1.5 tracking-wider font-light">
                    상대를 알고 나를 지키는 선천코드의 시간
                  </p>
                </div>
              </Reveal>
            </section>

            <AntiqueDivider subSection />

            {/* ═══════════════════════════════════════════════════════════════
                Section 15-B: THE ART OF READING PEOPLE (감성 브릿지 영역)
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-28 text-left w-full max-w-[1280px] mx-auto">
              <Reveal>
                <div
                  className="rounded-[32px] md:rounded-[40px] p-8 sm:p-12 md:p-16 relative overflow-hidden backdrop-blur-md"
                  style={{
                    background: 'linear-gradient(135deg, rgba(48, 38, 47, 0.85) 0%, rgba(28, 23, 29, 0.95) 100%)',
                    border: '1px solid rgba(183, 161, 138, 0.35)',
                    boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
                  }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
                    {/* 감성 문구 영역 (좌측 약 45% 너비) */}
                    <div className="lg:col-span-5 space-y-6 break-keep">
                      <div>
                        <span className="inline-block px-3.5 py-1 text-xs font-mono tracking-widest uppercase rounded-full bg-[#B7A18A]/10 text-[#B7A18A] border border-[#B7A18A]/25 mb-4">
                          THE ART OF READING PEOPLE
                        </span>
                        <h2 className="text-2xl sm:text-3xl md:text-[36px] font-elegant font-bold text-[#FAF7F2] leading-[1.5] md:leading-[1.55] break-keep">
                          사람이 궁금해질 때마다,<br />
                          펼쳐보는 관계 도감
                        </h2>
                      </div>

                      <div className="space-y-4 text-base sm:text-lg text-[#EDE6DA]/90 font-light leading-relaxed">
                        <p>
                          새로운 인연을 만났을 때도,<br />
                          사랑하는 사람의 마음이 궁금할 때도,<br />
                          이해하기 어려운 관계 앞에 서 있을 때도
                        </p>
                        <p className="text-[#EDE6DA]/75">
                          복잡한 한자를 외우지 않아도 좋습니다.<br />
                          명리학을 깊이 공부하지 않아도 좋습니다.
                        </p>
                        <p>
                          캐릭터로 만나고, 그림으로 이해하며,<br />
                          나와 상대의 선천코드를 하나씩 읽어보세요.
                        </p>
                      </div>

                      <div className="pt-2">
                        <div className="p-4 rounded-xl border border-[#B7A18A]/30 bg-[#B7A18A]/10 backdrop-blur-sm inline-block">
                          <p className="text-base sm:text-lg font-elegant font-bold text-[#B7A18A] tracking-wide">
                            사랑을 이해하는 새로운 시선,<br />
                            인연을 바라보는 나만의 기준
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* 책을 펼쳐보는 감성 이미지 슬롯 (우측 약 55% 너비로 최대 확대, 4:3 원본 비율 유지) */}
                    <div className="lg:col-span-7 w-full flex items-center justify-center">
                      <div className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden border border-[#B7A18A]/35 shadow-2xl bg-[#1C171D]">
                        <Image
                          src={productData.readingPeopleGuide}
                          alt="사람이 궁금해질 때마다 펼쳐보는 관계 도감 - 펼쳐진 책과 오행 심리 해독 가이드"
                          width={1448}
                          height={1086}
                          sizes="(max-width: 1024px) 100vw, 55vw"
                          className="w-full h-auto object-contain block rounded-2xl md:rounded-3xl"
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
                Section 16: POSITION SHIFT (관계 변화 메시지 및 감성 이미지)
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-28 text-left w-full max-w-[1280px] mx-auto">
              <Reveal>
                <div className="space-y-10 md:space-y-12">
                  <div className="text-center max-w-4xl mx-auto space-y-4 md:space-y-5 mb-10 md:mb-14 break-keep">
                    {/* 1. 영문 라벨 */}
                    <span className="text-[#B7A18A] font-elegant text-[12pt] font-semibold tracking-[0.2em] uppercase block">
                      POSITION SHIFT
                    </span>

                    {/* 2. 메인 헤드카피 */}
                    <h2 className="text-2xl sm:text-3xl md:text-[36px] font-elegant font-bold text-[#FAF7F2] leading-[1.6] md:leading-[1.65] break-keep">
                      &ldquo;같은 연애를 반복했던 이유,<br />
                      <span className="text-[#B7A18A]">어쩌면 &lsquo;관계의 암호&rsquo;를 읽지 못했기 때문입니다.&rdquo;</span>
                    </h2>

                    {/* 3. 신규 서브 설명 문구 */}
                    <div className="text-[17px] md:text-[18px] text-[#EDE6DA]/85 leading-[1.8] font-normal break-keep pt-2 space-y-4">
                      <p>
                        상대의 마음을 추측하며 불안해하는 동안,<br className="hidden sm:inline" />
                        우리는 스스로가 가진 고유의 매력과 기준을 잃곤 합니다.
                      </p>
                      <p>
                        막연한 운에 기대는 연애에서 벗어나,<br className="hidden sm:inline" />
                        <strong className="text-[#B7A18A] font-bold">이제 상대를 꿰뚫어 보고 인연을 직접 선택하는 시선을 세워보세요.</strong>
                      </p>
                    </div>
                  </div>

                  <div className="relative w-full aspect-[16/9] md:aspect-[1672/941] rounded-2xl md:rounded-[20px] overflow-hidden shadow-2xl flex items-center justify-center border border-[#B7A18A]/30 bg-[#1C171D]">
                    <Image
                      src={productData.reunionLawImage}
                      alt="인연 해독의 법칙 - 같은 연애를 반복했던 이유, 어쩌면 관계의 암호를 읽지 못했기 때문입니다"
                      fill
                      sizes="(max-width: 1280px) 100vw, 1280px"
                      className="object-contain"
                      priority
                    />
                  </div>

                  {/* 4. 인연의 주권자 브릿지 카피
                      - 상단 이미지(reunionLawImage) 하단과의 거리: PC 128px, 태블릿 96px, 모바일 64~80px
                      - 부모 space-y 및 마진 병합(margin collapsing) 방지를 위해 !mt-0과 padding-top으로 절대 여백 보장 */}
                  <div className="text-center max-w-3xl mx-auto break-keep !mt-0 pt-16 sm:pt-20 md:pt-24 lg:pt-32">
                    {/* 1) 영문 라벨 (12pt/12px, 메인 제목과 16~20px 간격 유지) */}
                    <span className="text-[#B7A18A] font-elegant text-[12pt] font-semibold tracking-[0.2em] uppercase block mb-4 md:mb-4.5">
                      SOVEREIGN OF RELATIONSHIP
                    </span>

                    {/* 2) 메인 제목 (36px, 기존 행간 유지, 설명 문구와 16~20px 간격으로 축소) */}
                    <h3 className="text-[26px] sm:text-[30px] md:text-[36px] font-elegant font-bold text-[#FAF7F2] leading-[1.32] md:leading-[1.35] break-keep mb-4 md:mb-5">
                      나를 읽고, 상대를 이해하고,<br />
                      스스로 <span className="text-[#B7A18A]">인연을 선택하는 사람</span>
                    </h3>

                    {/* 3) 설명 문구 및 하단 강조 문구 (빈 줄 느낌 제거, 4~8px 간격으로 자연스럽게 결합) */}
                    <div className="text-[17px] md:text-[18px] text-[#EDE6DA]/85 leading-[1.7] md:leading-[1.75] font-normal break-keep">
                      <p className="whitespace-normal md:whitespace-nowrap">
                        정해진 운명에 순응하는 것이 아니라, 나의 기질과 상대의 차이를 이해하며 관계를 주체적으로 바라보는 것
                      </p>
                      <p className="text-[#B7A18A] font-bold font-elegant text-[18px] md:text-[20px] mt-1.5 md:mt-2 leading-[1.5]">
                        그것이 선천코드 비기가 전하고 싶은 인연의 지혜입니다.
                      </p>
                    </div>
                  </div>

                  {/* 인연의 주권자 하단 감성 배너 이미지 슬롯 */}
                  <div className="relative w-full aspect-[16/9] md:aspect-[1672/941] rounded-2xl md:rounded-[24px] overflow-hidden shadow-2xl flex items-center justify-center border border-[#B7A18A]/30 mt-8">
                    <HybridImageSlot
                      assetKey="sovereign"
                      className="w-full h-full"
                    />
                  </div>
                </div>
              </Reveal>
            </section>

            <AntiqueDivider />

            {/* ═══════════════════════════════════════════════════════════════
                Section 17: REAL LIFE TRANSFORMATIONS (선천코드 비기 실전 활용 예시)
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-28 text-left w-full max-w-[1280px] mx-auto">
              <Reveal>
                <div className="text-center max-w-3xl mx-auto space-y-4 mb-14 break-keep">
                  <span className="text-[#B7A18A] font-elegant text-[12pt] font-semibold tracking-[0.2em] uppercase block mb-3">
                    REAL LIFE TRANSFORMATIONS
                  </span>
                  <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white tracking-wide leading-[1.4] break-keep">
                    선천코드 비기 실전 활용 예시
                  </h2>
                  <p className="text-[17px] md:text-[18px] text-[#EDE6DA]/85 leading-[1.8] font-normal break-keep">
                    ※ 본 사례는 도서의 이해를 돕기 위해 구성된 가상의 실전 활용 예시입니다.
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
                    COMPARISON TABLE
                  </span>
                  <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white tracking-wide leading-[1.4] break-keep">
                    한 번의 궁금증을 넘어,<br />
                    <span className="text-[#B7A18A]">새로운 인연마다 함께하는 소장 가치</span>
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
                  {/* 일반적인 1회성 해석 서비스 */}
                  <div
                    className="p-7 sm:p-9 rounded-2xl md:rounded-3xl border border-white/10 text-left flex flex-col justify-between h-full relative"
                    style={{
                      background: 'linear-gradient(145deg, rgba(36, 30, 37, 0.7), rgba(20, 16, 21, 0.85))'
                    }}
                  >
                    <div className="pb-5 mb-6 border-b border-white/10 min-h-[48px] md:min-h-[56px] flex items-center">
                      <h3 className="text-[20px] md:text-[22px] font-bold font-elegant text-white/70">
                        일반적인 1회성 해석 서비스
                      </h3>
                    </div>

                    <div className="space-y-6 flex-1 flex flex-col justify-between">
                      <div>
                        <span className="text-[14px] font-semibold text-white/50 block mb-1.5">
                          특징
                        </span>
                        <div className="text-[20px] md:text-[22px] font-bold font-elegant text-white/80 leading-[1.4] mb-1">
                          특정 시점의 고민을 중심으로 해석
                        </div>
                      </div>

                      <div>
                        <span className="text-[14px] font-semibold text-white/50 block mb-1.5">
                          적용 범위
                        </span>
                        <p className="text-[16px] text-white/70 leading-[1.7] break-keep">
                          신청한 대상과 주제에 집중
                        </p>
                      </div>

                      <div>
                        <span className="text-[14px] font-semibold text-white/50 block mb-1.5">
                          한계
                        </span>
                        <p className="text-[16px] text-white/70 leading-[1.7] break-keep">
                          새로운 궁금증이 생기면 추가 해석이 필요할 수 있음
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
                        <div className="text-[20px] md:text-[22px] font-bold font-elegant text-[#FAF7F2] leading-[1.4] mb-1">
                          나와 다양한 사람의 성향을 살펴보는 참고서
                        </div>
                      </div>

                      <div>
                        <span className="text-[14px] font-semibold text-[#B7A18A] block mb-1.5">
                          내용
                        </span>
                        <p className="text-[16px] md:text-[17px] text-[#FAF7F2] font-medium leading-[1.7] break-keep">
                          매력·이상형·궁합·배우자·재회 등 다양한 주제 수록
                        </p>
                      </div>

                      <div>
                        <span className="text-[14px] font-semibold text-[#B7A18A] block mb-1.5">
                          활용성
                        </span>
                        <p className="text-[16px] md:text-[17px] text-[#FAF7F2] font-medium leading-[1.7] break-keep">
                          궁금한 순간마다 반복 확인 및 관계를 이해하는 관점 확장
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
            <section id="faq" className="mb-28 text-left w-full max-w-4xl mx-auto">
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
                      a: "결제 완료 즉시 마이페이지에서 PDF 파일로 즉시 다운로드하여 스마트폰, 태블릿, PC 등 모든 기기에서 평생 소장하며 열람하실 수 있습니다."
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
                        <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-[16px] text-[#EDE6DA]/85 leading-relaxed font-light border-t border-white/5 pt-4 break-keep">
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

                  <ul className="space-y-3.5 text-[16px] text-[#EDE6DA]/85 leading-relaxed font-light break-keep">
                    <li className="flex items-start gap-2.5">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#B7A18A] shrink-0" />
                      <span>본 상품은 실물 배송이 없는 디지털 전자책(PDF 파일) 상품입니다.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#B7A18A] shrink-0" />
                      <span>결제 완료 후 안내된 방식(마이페이지 또는 등록된 이메일)에 따라 즉시 다운로드해 확인하실 수 있습니다.</span>
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
                Section 21: 구매 전 안내 이후 감성 배너 (A WORD FOR YOUR HEART)
               ═══════════════════════════════════════════════════════════════ */}
            <section
              className="relative min-h-[360px] sm:min-h-[420px] md:min-h-0 aspect-auto md:aspect-[1672/941] overflow-hidden rounded-[32px] md:rounded-[40px] mb-20 group shadow-2xl w-full max-w-[1280px] mx-auto bg-[#1C171D]"
              style={{
                border: '1px solid rgba(183, 161, 138, 0.45)',
                boxShadow: '0 0 24px rgba(183, 161, 138, 0.08), 0 16px 45px rgba(0, 0, 0, 0.5)'
              }}
            >
              {/* 배경 이미지 (우측 남녀 인물과 달빛 소품이 잘리지 않도록 object-[75%_center] md:object-center 배치) */}
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                <Image
                  src={productData.heartBanner}
                  alt="선천코드 비기 감성 배경 - 지금 필요한 것은 나를 소모하는 노력이 아닐 수 있습니다"
                  fill
                  sizes="(max-width: 1280px) 100vw, 1280px"
                  className="object-cover object-[75%_center] md:object-center transition-transform duration-700 group-hover:scale-105"
                  priority
                />
              </div>

              {/* 좌측 텍스트 가독성을 위한 은은한 국한 그라데이션 (과도한 전체 암전 방지, 원본 묵자색·버건디·금박 색감 보존) */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#1C171D]/90 via-[#1C171D]/55 to-transparent sm:via-[#1C171D]/40 md:via-[#1C171D]/25" />

              {/* 텍스트 영역 (좌측 약 45% 너비 배치, 수직 중앙 정렬, 우측 인물과 겹침 방지) */}
              <div className="absolute inset-0 flex flex-col justify-center p-6 sm:p-10 md:p-12 lg:p-16 text-left w-full max-w-[95%] sm:max-w-[70%] md:max-w-[48%] lg:max-w-[45%] z-10">
                <span className="text-[#B7A18A] font-elegant text-xs md:text-sm tracking-[0.25em] md:tracking-[0.3em] uppercase mb-2.5 md:mb-3 block font-semibold">
                  A WORD FOR YOUR HEART
                </span>
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-[36px] font-elegant font-bold text-white mb-4 sm:mb-5 md:mb-6 leading-[1.4] md:leading-[1.42] break-keep">
                  지금 필요한 것은<br />
                  <span className="text-[#FAF7F2]">나를 소모하는 노력이 아닐 수 있습니다.</span>
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-[#EDE6DA]/85 font-light leading-relaxed mb-6 break-keep">
                  새로운 인연을 만났을 때도,<br className="hidden sm:inline" />
                  사랑하는 사람을 더 이해하고 싶을 때도<br />
                  캐릭터로 만나고, 그림으로 이해하며, 나와 상대의 선천코드를 하나씩 찾아보세요.
                </p>

                {/* 신규 20px 볼드 강조 문구 */}
                <div className="text-[17px] sm:text-[19px] md:text-[20px] font-elegant font-bold leading-[1.6] break-keep mb-5 sm:mb-6">
                  <p className="text-[#FAF7F2]">
                    운명에 휘둘리는 사랑을 끝내고,
                  </p>
                  <p className="text-[#B7A18A]">
                    이제 당신만의 관계 기준을 세울 시간
                  </p>
                </div>

                {/* 하단 앵커 링크 */}
                <div className="pt-1 sm:pt-2">
                  <a
                    href="#final-cta"
                    className="inline-flex items-center gap-2 text-sm sm:text-base md:text-lg text-[#B7A18A] hover:text-[#FAF7F2] font-elegant font-bold tracking-wide transition-all group/link cursor-pointer"
                  >
                    <span>《선천코드 비기》로 인연의 암호 해독하기</span>
                    <span className="text-xs transition-transform duration-300 group-hover/link:translate-x-1">→</span>
                  </a>
                </div>
              </div>
            </section>

            <AntiqueDivider />

            {/* ═══════════════════════════════════════════════════════════════
                Section 22: 최종 구매 CTA (Final Purchase)
               ═══════════════════════════════════════════════════════════════ */}
            <section id="final-cta" className="scroll-mt-24 md:scroll-mt-28 pt-12 md:pt-16 mb-24 text-center max-w-4xl mx-auto px-4">
              <Reveal>
                {/* TIME TO RECLAIM YOUR POWER 상단 헤드라인 및 최종 구매 유도 메시지 */}
                <div className="text-center space-y-4 mb-10 md:mb-12">
                  <span className="text-[#B7A18A] font-elegant text-[12pt] font-semibold tracking-[0.2em] uppercase block">
                    TIME TO RECLAIM YOUR POWER
                  </span>
                  <h2 className="text-2xl sm:text-3xl md:text-[36px] font-elegant font-bold text-white leading-[1.6] md:leading-[1.65] break-keep mb-4">
                    나를 읽고, 상대를 이해하고,<br />
                    <span className="text-[#B7A18A]">인연을 선택하다.</span>
                  </h2>
                  <div className="text-[17px] md:text-[18px] text-[#EDE6DA]/85 leading-[1.8] font-normal max-w-2xl mx-auto break-keep space-y-2">
                    <p>
                      한 사람만을 위한 해설이 아닌, 앞으로 만날 수많은 인연을 이해하기 위한 소장용 관계 비서
                    </p>
                    <p className="text-[#B7A18A] font-medium pt-1">
                      인연이 바뀔 때마다 다시 펼쳐보는 책, 선천코드 비기
                    </p>
                  </div>
                </div>

                <div
                  className="rounded-3xl p-8 sm:p-10 md:p-12 text-center shadow-2xl relative overflow-hidden max-w-[820px] mx-auto"
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
                      <span className="text-xs text-[#EDE6DA]/60">정가 79,000원</span>
                      <div className="text-3xl sm:text-4xl font-elegant font-bold text-[#B7A18A]">
                        런칭 특가 29,000원 <span className="text-sm text-white/70 font-sans font-normal ml-2">(63% OFF)</span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 pt-2 items-stretch sm:items-center w-full">
                      <button
                        type="button"
                        onClick={handleAddToCart}
                        className="py-4 px-6 rounded-xl font-elegant font-bold text-sm md:text-base border border-[#B7A18A]/60 text-[#B7A18A] hover:bg-[#493740]/40 transition-all duration-300 shrink-0 whitespace-nowrap text-center bg-transparent order-2 sm:order-1 cursor-pointer"
                      >
                        장바구니 담기
                      </button>
                      <button
                        type="button"
                        onClick={handlePurchase}
                        className="flex-1 py-4 px-8 rounded-xl font-elegant font-bold text-base md:text-lg hover:scale-[1.01] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 text-[#FAF7F2] order-1 sm:order-2 cursor-pointer shadow-lg"
                        style={{
                          background: 'linear-gradient(135deg, #493740 0%, #30262F 100%)',
                          border: '1px solid #B7A18A',
                          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.4)'
                        }}
                      >
                        <span>선천코드 비기 29,000원에 구매하기</span>
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
          price={productData.price}
          onPurchase={handlePurchase}
          buttonText="선천코드 비기 구매하기 →"
        />

        <Footer />
      </GlobalBackground>
    </main>
  )
}
