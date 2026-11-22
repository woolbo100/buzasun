'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Reveal from '@/components/Reveal'
import GlobalBackground from '@/components/GlobalBackground'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { addToCart } from '@/hooks/useCart'
import { ChevronRight } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import RecommendedForCards from '@/components/RecommendedForCards'
import BrandSignatureEnding from '@/components/reports/common/BrandSignatureEnding'

// 새로 추가된 풍요 리포트 전용 18개 설득 블록 독립 컴포넌트들
import WealthCoreDifferentiation from '@/components/reports/abundance-report/WealthCoreDifferentiation'
import WhyWealthReport from '@/components/reports/abundance-report/WhyWealthReport'
import QuestionShiftComparison from '@/components/reports/common/QuestionShiftComparison'
import WealthPrescriptionSample from '@/components/reports/abundance-report/WealthPrescriptionSample'
import WealthPatternChecklist from '@/components/reports/abundance-report/WealthPatternChecklist'
import WealthAdviceComparison from '@/components/reports/abundance-report/WealthAdviceComparison'
import WealthPatternFlow from '@/components/reports/abundance-report/WealthPatternFlow'
import WealthAnalysisMethod from '@/components/reports/abundance-report/WealthAnalysisMethod'
import WealthPersonalizedCases from '@/components/reports/abundance-report/WealthPersonalizedCases'
import WealthComparisonTable from '@/components/reports/abundance-report/WealthComparisonTable'
import WealthReportTableOfContents from '@/components/reports/abundance-report/WealthReportTableOfContents'
import WealthReportProcess from '@/components/reports/abundance-report/WealthReportProcess'
import WealthReportPreview from '@/components/reports/abundance-report/WealthReportPreview'
import WealthChangeScenario from '@/components/reports/abundance-report/WealthChangeScenario'
import WealthAudience from '@/components/reports/abundance-report/WealthAudience'
import WealthTestimonials from '@/components/reports/abundance-report/WealthTestimonials'
import WealthPhilosophy from '@/components/reports/abundance-report/WealthPhilosophy'
import WealthValueSummary from '@/components/reports/abundance-report/WealthValueSummary'
import WealthReportFAQ from '@/components/reports/abundance-report/WealthReportFAQ'
import WealthPurchaseNotice from '@/components/reports/abundance-report/WealthPurchaseNotice'
import WealthSixPerspectivesBanner from '@/components/reports/abundance-report/WealthSixPerspectivesBanner'
import WealthSpecialGift from '@/components/reports/abundance-report/WealthSpecialGift'
import WealthRealTransformationBanner from '@/components/reports/abundance-report/WealthRealTransformationBanner'
import WealthRealReasonCard from '@/components/reports/abundance-report/WealthRealReasonCard'

// 추후 개별 이미지 교체 시 아래 경로만 수정하면 각 섹션에 즉시 반영됩니다.
const ABUNDANCE_REPORT_IMAGES = {
  hero: '/image/abundance/baekdohwa-wealth-code-hero.webp',
  card: '/image/abundance/wealth-blueprint-lotus-card.webp', // 메인 구매 카드 영역 우측 재물 설계도 이미지
  empathy: '/image/abundance/wealth-money-pattern-awareness.webp', // 문제 제기 공감 문구 아래 가로 16:9 이미지
  overview: '/image/abundance/a2.webp',
  recommended: '/image/abundance/a3.webp',
  analysis: '/image/abundance/a4.webp',
  premium: '/image/abundance/a5.webp',
  finalCta: '/image/abundance/a6.webp',
}

// 교차 스토리 1 & 2 세로 3:4 이미지 설정
const ABUNDANCE_STORY_IMAGE_1 = {
  src: '/image/abundance/quiet-night-of-abundance.webp',
  alt: '풍요를 기다리는 고요한 밤, 전통 서재에서 생각에 잠긴 여성의 3:4 감성 이미지',
  width: 1088,
  height: 1448,
}

const ABUNDANCE_STORY_IMAGE_2 = {
  src: '/image/abundance/wealth-hidden-flow-scroll.webp',
  alt: '선천코드 풍요 리포트의 재물 구조를 상징하는 옥빛 두루마리와 샴페인 골드 금박 설계도',
  width: 1086,
  height: 1448,
}

export default function AbundanceReportPage() {
  const router = useRouter()
  useScrollAnimation()

  // 1. 바로 신청하기 로직 (풍요 리포트 결제 페이지 이동)
  const handlePurchase = (e: React.MouseEvent) => {
    e.preventDefault()
    router.push('/checkout?productId=abundance-report')
  }

  // 2. 장바구니 담기 로직
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    addToCart({
      id: 'abundance-report',
      slug: 'abundance-report',
      name: '선천코드 풍요 리포트',
      price: 39000,
      image: '/image/baekdohwa-wealth-destiny.webp',
      type: 'digital_report',
      category: 'PREMIUM REPORT'
    }, 1)
  }

  // 리포트 샘플 미리보기 스크롤 보조 함수
  const scrollToSample = (e: React.MouseEvent) => {
    e.preventDefault()
    const element = document.getElementById('sample-preview')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // 오행 에너지 카드 정보 (기존 자산 보존)
  const fiveElements = [
    {
      hanja: '木',
      hangul: '목 (木)',
      keyword: '성장, 기획, 시작의 기운',
      desc: '새로운 가능성을 발견하고 나만의 재능을 밖으로 펼쳐 나가는 성장의 에너지를 상징합니다.',
      gradientClass: 'from-[#052e16]/20 via-[#10b981]/5 to-transparent',
      borderClass: 'border-emerald-500/20 hover:border-emerald-400/40',
      tagColor: 'text-emerald-400 bg-emerald-950/40',
      bgGlow: 'bg-emerald-500/5'
    },
    {
      hanja: '火',
      hangul: '화 (火)',
      keyword: '표현, 확장, 전달의 기운',
      desc: '나의 강점과 가치를 세상과 나누고, 사람들과 활발히 소통하며 흐름을 넓히는 에너지를 상징합니다.',
      gradientClass: 'from-[#450a0a]/20 via-[#f43f5e]/5 to-transparent',
      borderClass: 'border-rose-500/20 hover:border-rose-400/40',
      tagColor: 'text-rose-400 bg-rose-950/40',
      bgGlow: 'bg-rose-500/5'
    },
    {
      hanja: '土',
      hangul: '토 (土)',
      keyword: '안정, 축적, 균형의 기운',
      desc: '흔들리지 않는 생활의 중심을 잡고, 일상의 자원을 차분하게 정돈하며 지키는 에너지를 상징합니다.',
      gradientClass: 'from-[#451a03]/20 via-[#f59e0b]/5 to-transparent',
      borderClass: 'border-amber-500/20 hover:border-amber-400/40',
      tagColor: 'text-amber-400 bg-amber-950/40',
      bgGlow: 'bg-amber-500/5'
    },
    {
      hanja: '金',
      hangul: '금 (金)',
      keyword: '결단, 분별, 완결의 기운',
      desc: '불필요한 지출과 에너지 누수를 덜어내고, 우선순위를 명료하게 세우는 기준의 에너지를 상징합니다.',
      gradientClass: 'from-[#1e293b]/20 via-[#94a3b8]/5 to-transparent',
      borderClass: 'border-slate-400/20 hover:border-slate-300/40',
      tagColor: 'text-slate-300 bg-slate-800/40',
      bgGlow: 'bg-slate-400/5'
    },
    {
      hanja: '水',
      hangul: '수 (水)',
      keyword: '통찰, 유연함, 지혜의 기운',
      desc: '깊은 사유와 유연한 시선으로 흐름을 읽고, 나에게 맞는 방향을 차분히 준비하는 에너지를 상징합니다.',
      gradientClass: 'from-[#172554]/20 via-[#3b82f6]/5 to-transparent',
      borderClass: 'border-blue-500/20 hover:border-blue-400/40',
      tagColor: 'text-blue-400 bg-blue-950/40',
      bgGlow: 'bg-blue-500/5'
    }
  ]

  return (
    <main className="detail-page abundance-report-page relative min-h-screen bg-[#0a0514]">
      {/* 풍요비책 전용 딥 에메랄드 그린 그라데이션 배경 시스템 동일 적용 */}
      <GlobalBackground
        src="/image/main4.png"
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

        <div className="relative z-10 pt-36 md:pt-40 pb-20">
          <div className="container-premium">
            
            {/* ══════════════════════════════════════════════════════════════════════ */}
            {/* SECTION 01. 히어로 — 제목 → 16:9 메인 이미지 → 버튼 → 공감 문구 → 공감 16:9 이미지 */}
            {/* ══════════════════════════════════════════════════════════════════════ */}
            <section className="text-center mb-36">
              <Reveal delayMs={100}>
                {/* 1. 상단 배지 */}
                <div className="mb-6">
                  <span className="inline-block px-5 py-1.5 rounded-full text-[12pt] font-elegant font-semibold tracking-[0.25em] uppercase bg-[#608F82]/15 border border-[#608F82]/35 text-[#8FB4A4]">
                    PREMIUM ABUNDANCE REPORT
                  </span>
                </div>

                {/* 2. 메인 제품명 제목 */}
                <h1 className="text-3xl md:text-6xl font-elegant font-bold mb-10 text-white leading-[1.25] md:leading-[1.3] break-keep">
                  선천코드 <span className="gradient-text-abundance">풍요 리포트</span>
                </h1>

                {/* 4. 메인 가로 이미지 (16:9 비율 유지 · 글자 잘림 없는 contain 렌더링) */}
                <div className="relative w-full max-w-[1280px] mx-auto mb-12 sm:mb-16 md:mb-20 rounded-[40px] overflow-hidden border border-[#608F82]/25 shadow-2xl aspect-[16/9] bg-[#0B1514] flex items-center justify-center">
                  <Image 
                    src={ABUNDANCE_REPORT_IMAGES.hero} 
                    alt="선천코드 풍요 리포트 메인 히어로 16:9" 
                    width={1672}
                    height={941}
                    priority
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* 4-1. 메인 히어로 하단 문제 제기형 인트로 섹션 (연애 리포트와 동일한 구조) */}
                <div className="max-w-4xl mx-auto text-center px-4 space-y-4 md:space-y-5">
                  <h2 className="text-2xl sm:text-3xl md:text-[34px] lg:text-[38px] text-white font-elegant font-bold leading-[1.3] md:leading-[1.35] break-keep">
                    &ldquo;왜 어떤 노력은 쌓이는데도, <span className="gradient-text-abundance">풍요는 늘 제자리일까요?</span>&rdquo;
                  </h2>
                  <p className="text-base sm:text-lg md:text-[20px] font-elegant text-[#FAF7F2] leading-[1.75] md:leading-[1.8] break-keep max-w-2xl mx-auto opacity-95 font-light">
                    열심히 산다고 모두 같은 결과를 얻는 것은 아닙니다.<br />
                    재능을 쓰는 방식, 돈을 대하는 습관, 무의식의 선택이 어긋나면<br />
                    풍요는 들어와도 머물지 못한 채 다시 흩어집니다.
                  </p>
                </div>

                {/* 4-2. 구간 전환용 얇은 장식선 + 백도화 풍요 문양 */}
                <div className="flex items-center justify-center my-10 sm:my-14 md:my-16 max-w-xs sm:max-w-sm mx-auto px-4" aria-hidden="true">
                  <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#608F82]/35 to-transparent" />
                  <div className="mx-4 flex items-center justify-center">
                    <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7 sm:w-8 sm:h-8 text-[#C6A477] opacity-90 drop-shadow-[0_0_8px_rgba(198,164,119,0.4)]">
                      <path d="M16 16 C13.5 11 13 6 16 4 C19 6 18.5 11 16 16 Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M16 16 C20 13 24.5 12.5 26 15.5 C25 18.8 20.5 18 16 16 Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M16 16 C19.5 19.5 21.5 24 18.5 26 C16 24.5 16.2 20 16 16 Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M16 16 C15.8 20 16 24.5 13.5 26 C10.5 24 12.5 19.5 16 16 Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M16 16 C11.5 18 7 18.8 6 15.5 C7.5 12.5 12 13 16 16 Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="16" cy="16" r="1.6" stroke="currentColor" strokeWidth="1" />
                    </svg>
                  </div>
                  <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#608F82]/35 to-transparent" />
                </div>

                {/* 4. 메인 프리미엄 상품 소개 & 구매 CTA 상자 (판매형 전환) */}
                <div className="max-w-[1280px] mx-auto mb-36 md:mb-48 lg:mb-52 text-left">
                  <div 
                    className="relative rounded-[32px] md:rounded-[40px] p-7 sm:p-10 lg:p-12 border border-[#608F82]/35 overflow-hidden shadow-2xl"
                    style={{
                      background: 'radial-gradient(ellipse at 50% 0%, rgba(37, 68, 59, 0.45) 0%, rgba(15, 36, 31, 0.40) 50%, rgba(11, 21, 20, 0.95) 100%)',
                      boxShadow: '0 0 60px rgba(96, 143, 130, 0.22)'
                    }}
                  >
                    {/* 은은한 배경 오라 */}
                    <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#608F82]/15 rounded-full blur-[90px] pointer-events-none" />

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
                      {/* 좌측 (약 58%): 라벨 + 메인 카피 + 설명 + 가격 + 버튼 */}
                      <div className="lg:col-span-7 space-y-5 md:space-y-6">
                        {/* 1. 상단 라벨 */}
                        <div>
                          <span className="inline-flex items-center justify-center py-1.5 px-3.5 rounded-full bg-[#1A3830]/80 border border-[#608F82]/50 text-[#8FD3B6] text-xs font-bold tracking-wider whitespace-nowrap">
                            선천코드 풍요 리포트
                          </span>
                        </div>

                        {/* 2. 메인 카피 */}
                        <h3 className="text-2xl sm:text-3xl md:text-[34px] font-elegant font-bold text-white leading-[1.35] md:leading-[1.4] break-keep">
                          선천코드로 읽는 <span className="gradient-text-abundance">나의 풍요 설계도</span>
                        </h3>

                        {/* 3. 설명 문구 */}
                        <p className="text-[16px] md:text-[18px] text-[#EDE6DA]/90 leading-[1.7] font-light break-keep max-w-xl">
                          나에게 맞는 풍요는, 내 타고난 흐름을 읽는 것에서 시작됩니다.
                        </p>

                        {/* 4. 가격 영역 & 5. 상품 정보 */}
                        <div className="pt-2">
                          <div className="flex flex-wrap items-baseline gap-3">
                            <span className="text-3xl sm:text-4xl md:text-[42px] font-elegant font-bold text-[#FAF7F2] tracking-tight">
                              39,000원
                            </span>
                            <span className="text-xs sm:text-sm text-[#8FD3B6] font-medium tracking-wide">
                              1:1 맞춤 PDF 리포트 · 오행 아트카드 + 오행 수호자 카드 증정
                            </span>
                          </div>
                          <p className="text-[12px] sm:text-[13px] leading-[1.5] text-[#EDE6DA]/75 font-light mt-1.5 break-keep">
                            ※ 주문 접수 후 고객님의 사주 정보를 바탕으로 순차 제작되는 디지털 맞춤 리포트입니다.
                          </p>
                        </div>

                        {/* 6. 구매 버튼 2개 */}
                        <div className="flex flex-col sm:flex-row gap-3.5 pt-2 items-stretch sm:items-center">
                          <button
                            type="button"
                            onClick={handleAddToCart}
                            className="py-3.5 px-6 rounded-2xl font-bold text-sm md:text-base border border-[#608F82]/45 text-[#8FD3B6] hover:bg-[#608F82]/15 hover:border-[#608F82]/70 transition-all duration-300 text-center shrink-0 order-2 sm:order-1"
                          >
                            장바구니 담기
                          </button>
                          <button
                            type="button"
                            onClick={handlePurchase}
                            className="py-4 px-8 rounded-2xl font-bold text-base md:text-lg hover:scale-[1.01] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 text-[#FAF7F2] shadow-[0_4px_20px_rgba(20,43,36,0.5)] hover:shadow-[0_0_30px_rgba(96,143,130,0.45)] hover:brightness-110 flex-1 order-1 sm:order-2"
                            style={{
                              background: 'linear-gradient(135deg, #3A5F53 0%, #25443B 100%)',
                              border: '1px solid rgba(229, 195, 120, 0.6)',
                            }}
                          >
                            <span>바로 신청하기</span>
                            <ChevronRight className="w-5 h-5 text-[#FAF7F2] shrink-0" />
                          </button>
                        </div>
                      </div>

                      {/* 우측 (약 42%): 프리미엄 리포트 대표 목업 이미지 */}
                      <div className="lg:col-span-5 w-full flex justify-center">
                        <div className="relative w-full max-w-[420px] aspect-[4/3] rounded-2xl md:rounded-3xl overflow-hidden border border-[#608F82]/35 shadow-2xl bg-black/30 group">
                          <Image
                            src={ABUNDANCE_REPORT_IMAGES.card}
                            alt="선천코드 풍요 리포트 재물 설계도 이미지"
                            fill
                            className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                            sizes="(max-width: 1024px) 100vw, 420px"
                            priority
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 7. 기존 공감 문구 (구매 버튼 아래로 이동) */}
                <div className="max-w-3xl mx-auto mb-14 text-center">
                  <p className="text-2xl md:text-[34px] lg:text-[38px] text-white font-elegant font-bold leading-[1.3] break-keep mb-6">
                    &ldquo;남들보다 열심히 사는데,<br className="hidden sm:inline" />
                    왜 내 통장은 <span className="gradient-text-abundance">늘 제자리</span>일까?&rdquo;
                  </p>
                  <div className="text-[18px] text-[#EDE6DA]/90 space-y-3 font-light leading-relaxed break-keep max-w-2xl mx-auto">
                    <p>돈을 벌 기회가 없었던 것도 아니다. 분명 수입은 있었고, 누구보다 부지런히 움직였다.</p>
                    <p>그런데 정작 내 손에 남은 것은 생각보다 적다.</p>
                    <p className="pt-2 text-[#C6A477] font-medium leading-relaxed">
                      혹시 당신은 돈을 버는 방법만 배웠지,<br className="hidden sm:inline" />
                      돈 앞에서 반복되는 자신의 선택은 한 번도 분석하지 않았던 것은 아닐까요?
                    </p>
                  </div>
                </div>

                {/* 8. 공감 문구 아래 추가 가로 이미지 (16:9 비율 유지 · 글자 잘림 없는 contain 렌더링) */}
                <div className="relative w-full max-w-[1280px] mx-auto rounded-[40px] overflow-hidden border border-[#608F82]/25 shadow-2xl aspect-[16/9] bg-[#0B1514] flex items-center justify-center">
                  <Image 
                    src={ABUNDANCE_REPORT_IMAGES.empathy} 
                    alt="선천코드 풍요 리포트 돈의 반복 패턴 인식 16:9" 
                    width={1672}
                    height={941}
                    className="w-full h-full object-contain"
                  />
                </div>
              </Reveal>
            </section>

            {/* ══════════════════════════════════════════════════════════════════════ */}
            {/* SECTION 02. 돈의 반복 패턴 체크리스트 */}
            {/* ══════════════════════════════════════════════════════════════════════ */}
            <WealthPatternChecklist />

            {/* ══════════════════════════════════════════════════════════════════════ */}
            {/* NEW. 돈이 부족한 이유를 수입에서만 찾지 마세요 (차별화 섹션) */}
            {/* ══════════════════════════════════════════════════════════════════════ */}
            <WealthCoreDifferentiation />

            {/* ══════════════════════════════════════════════════════════════════════ */}
            {/* [교차 스토리 1] THE MOMENT OF AWARENESS (좌측 텍스트 + 우측 이미지) */}
            {/* ══════════════════════════════════════════════════════════════════════ */}
            <section className="mb-24 md:mb-32">
              <Reveal>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 xl:gap-18 items-stretch">
                  {/* 좌측 55%: 라벨 + 제목 + 본문 및 마지막 핵심 후킹 */}
                  <div className="lg:col-span-7 space-y-6 text-left break-keep order-2 lg:order-1 flex flex-col justify-between py-1 lg:py-2">
                    <div>
                      <span className="block font-elegant text-[12pt] font-semibold tracking-[0.2em] text-[#C6A477] uppercase mb-4">
                        THE MOMENT OF AWARENESS
                      </span>
                      <h2 className="text-2xl md:text-[34px] lg:text-[36px] font-elegant font-bold mb-6 leading-[1.3] break-keep">
                        <span className="text-[#FAF7F2]">왜 나는 돈 앞에서</span><br />
                        <span className="gradient-text-abundance">늘 비슷한 선택을 반복해 왔을까요?</span>
                      </h2>
                    </div>

                    {/* 본문 서사 */}
                    <div className="space-y-4 text-[17px] md:text-[18px] text-[#EDE6DA] opacity-85 font-light leading-[1.8] break-keep">
                      <p>
                        남들과 똑같이 치열하게 일하고, 기회가 찾아왔을 때마다 최선을 다해 붙잡으려 했습니다.
                      </p>
                      <p className="text-[#FAF7F2] font-semibold">
                        하지만 정작 돈이 들어오는 통로와 새어나가는 구멍이 어디인지 모른 채,<br />
                        남들의 성공 방식만을 쫓으며 지쳐갔던 시간들.
                      </p>

                      {/* 핵심 경각심 강조 카드 */}
                      <div 
                        className="px-5 py-3.5 sm:px-6 sm:py-4 rounded-2xl border text-left backdrop-blur-sm my-3"
                        style={{
                          background: 'rgba(37, 68, 59, 0.25)',
                          borderColor: 'rgba(96, 143, 130, 0.25)',
                        }}
                      >
                        <div className="font-elegant text-[16px] md:text-[18px] leading-[1.75] break-keep">
                          <p className="font-bold text-[#C6A477]">
                            하지만 기억하십시오.
                          </p>
                          <p className="text-white font-medium">
                            내 재물의 그릇과 결을 모른 채 달리는 노력은 밑 빠진 독에 물을 붓는 것과 같습니다.
                          </p>
                          <p className="text-[#C6A477] font-semibold">
                            내 선천코드를 모른 채 내리는 금전적 선택은 언제나 같은 결핍의 벽에 부딪히게 되어 있습니다.
                          </p>
                        </div>
                      </div>

                      <p className="xl:whitespace-nowrap tracking-[-0.015em] lg:tracking-[-0.01em]">
                        타고난 부의 흐름조차 읽지 못했기에, 늘 기회의 문턱에서 제자리걸음을 했던 것입니다.
                      </p>
                    </div>

                    {/* 구분선 및 마지막 핵심 메시지 */}
                    <div className="pt-6 border-t border-[#608F82]/30 mt-6">
                      <p className="font-elegant font-bold text-[18px] sm:text-[20px] md:text-[22px] leading-[1.6] break-keep text-white">
                        이제 무작정 속도를 내기 전에,<br className="hidden sm:inline" />
                        <span className="gradient-text-abundance"> 당신 내면에 새겨진 풍요의 선천코드를 먼저 펼쳐볼 때입니다.</span>
                      </p>
                    </div>
                  </div>

                  {/* 우측 45%: 세로 이미지 영역 (데스크톱에서는 좌측 텍스트 전체 높이와 상하단 균형 정렬) */}
                  <div className="lg:col-span-5 w-full max-w-[420px] lg:max-w-[450px] xl:max-w-[460px] mx-auto lg:mx-0 flex flex-col items-center lg:items-end justify-start order-1 lg:order-2 lg:py-2">
                    <div className="group relative w-full aspect-[3/4] lg:aspect-auto lg:h-full rounded-[28px] md:rounded-[36px] overflow-hidden shadow-2xl bg-[#0B1514] flex items-center justify-center">
                      <Image
                        src={ABUNDANCE_STORY_IMAGE_1.src}
                        alt={ABUNDANCE_STORY_IMAGE_1.alt}
                        width={ABUNDANCE_STORY_IMAGE_1.width}
                        height={ABUNDANCE_STORY_IMAGE_1.height}
                        className="w-full h-full object-cover object-[center_20%] group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </Reveal>
            </section>

            {/* ══════════════════════════════════════════════════════════════════════ */}
            {/* [교차 스토리 2] THE HIDDEN FLOW (좌측 이미지 + 우측 텍스트) */}
            {/* ══════════════════════════════════════════════════════════════════════ */}
            <section className="mb-24 md:mb-32">
              <Reveal>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 xl:gap-16 items-stretch">
                  {/* 좌측 45%: 세로형 3:4 이미지 영역 (데스크톱에서는 우측 텍스트 전체 높이와 상하단 균형 정렬) */}
                  <div className="lg:col-span-5 w-full max-w-[420px] lg:max-w-[450px] xl:max-w-[460px] mx-auto lg:mx-0 flex flex-col items-center lg:items-start justify-start lg:py-2">
                    <div className="group relative w-full aspect-[3/4] lg:aspect-auto lg:h-full rounded-[28px] md:rounded-[36px] overflow-hidden border border-[#608F82]/35 shadow-2xl bg-[#0B1514] flex items-center justify-center transition-all duration-300 hover:border-[#8FB4A4]/50">
                      <Image
                        src={ABUNDANCE_STORY_IMAGE_2.src}
                        alt={ABUNDANCE_STORY_IMAGE_2.alt}
                        width={ABUNDANCE_STORY_IMAGE_2.width}
                        height={ABUNDANCE_STORY_IMAGE_2.height}
                        className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                        priority
                      />
                    </div>
                  </div>

                  {/* 우측 55%: 라벨 + 제목 + 본문 */}
                  <div className="lg:col-span-7 flex flex-col justify-between text-left break-keep lg:pl-6 xl:pl-8 py-1 lg:py-2 space-y-7 lg:space-y-0">
                    {/* 상단 그룹: 라벨 + 메인 제목 + 본문 서사 */}
                    <div className="space-y-5">
                      <div>
                        <span className="block font-elegant text-[12pt] font-semibold tracking-[0.2em] text-[#C6A477] uppercase mb-4">
                          THE HIDDEN FLOW
                        </span>
                        <h2 className="text-[20px] sm:text-2xl md:text-[34px] lg:text-[36px] font-elegant font-bold text-white mb-5 leading-[1.3] md:leading-[1.35] break-keep">
                          <span className="block">사주 속 재물 구조를 마주하는 순간,</span>
                          <span className="gradient-text-abundance">반복되던 돈의 흐름이 다르게</span> 보이기 시작합니다.
                        </h2>
                      </div>

                      {/* 본문 서사 */}
                      <div className="space-y-3.5 text-[17px] md:text-[18px] text-[#EDE6DA] leading-[1.8] font-light break-keep">
                        <p className="text-[#FAF7F2] font-medium">
                          수입이 생겨도 허무하게 빠져나가던 패턴, 투자의 타이밍마다 결정을 망설이게 했던 두려움의 실체.
                        </p>
                        <p>
                          운이 없어서도, 의지가 부족해서도 아니었습니다. 모두 당신의 선천코드 속에 자리 잡고 있던 <span className="text-[#C6A477] font-semibold">재물 에너지의 순환 알고리즘</span>이었습니다.
                        </p>
                      </div>
                    </div>

                    {/* 하단 그룹: 솔루션 제안 + 하이라이트 박스 + 마무리 훅 */}
                    <div className="space-y-3.5 text-[17px] md:text-[18px] leading-[1.8] break-keep">
                      <p className="text-[#FAF7F2] font-semibold">
                        근거 없는 부자 공식이나 뜬구름 잡는 재테크 조언은 더 이상 의미가 없습니다.
                      </p>

                      {/* 강조 박스 */}
                      <div 
                        className="p-5 md:p-6 rounded-2xl border backdrop-blur-sm"
                        style={{
                          background: 'rgba(37, 68, 59, 0.25)',
                          borderColor: 'rgba(96, 143, 130, 0.25)',
                        }}
                      >
                        <p className="text-[#FAF7F2] font-elegant font-medium text-[17px] sm:text-[18px] md:text-[19px] leading-[1.7]">
                          내가 어떤 방식으로 부를 축적하고,<br className="hidden sm:inline" />
                          <span className="text-[#C6A477]"> 왜 특정 순간에 손실을 반복하는지 그 근본을 해부하는 일.</span>
                        </p>
                      </div>

                      {/* 마무리 훅 */}
                      <div className="pt-2">
                        <p className="font-elegant font-bold text-[19px] md:text-[22px] text-[#FAF7F2] leading-[1.7] break-keep">
                          <span className="text-[#C6A477] font-semibold">그것이 헛된 누수를 막고 진정한 풍요의 주도권을 쥐는 시작점입니다.</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </section>

            {/* ══════════════════════════════════════════════════════════════════════ */}
            {/* SECTION 03. 왜 일반적인 성공 공식이 맞지 않았을까? */}
            {/* ══════════════════════════════════════════════════════════════════════ */}
            <WealthAdviceComparison />

            {/* ══════════════════════════════════════════════════════════════════════ */}
            {/* SECTION 04. 반복되는 돈의 흐름을 재정의하다 */}
            {/* ══════════════════════════════════════════════════════════════════════ */}
            <WealthPatternFlow />

            {/* ══════════════════════════════════════════════════════════════════════ */}
            {/* [중간 구매 CTA 1차] BEGIN YOUR JOURNEY (와이드형 프리미엄 CTA) */}
            {/* ══════════════════════════════════════════════════════════════════════ */}
            <section className="mb-36 md:mb-40 max-w-4xl mx-auto px-4">
              <Reveal>
                <div className="gungjung-glass p-8 md:p-14 rounded-[36px] border border-[#608F82]/40 bg-gradient-to-b from-[#142B24]/80 via-[#0B1514]/70 to-[#050D0C]/90 text-center relative overflow-hidden shadow-2xl">
                  {/* 은은한 배경 오라 */}
                  <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#608F82]/15 rounded-full blur-[80px] pointer-events-none" />

                  <span className="block font-elegant text-xs md:text-sm font-semibold tracking-[0.25em] text-[#8FB4A4] uppercase mb-4">
                    BEGIN YOUR JOURNEY
                  </span>

                  <h3 className="text-2xl md:text-[34px] font-elegant font-bold text-white mb-4 leading-snug break-keep">
                    나의 풍요를 <span className="gradient-text-abundance">새롭게 읽을 준비가 되셨나요?</span>
                  </h3>

                  <p className="text-sm md:text-base text-[#EDE6DA]/85 font-light leading-relaxed max-w-xl mx-auto break-keep mb-6">
                    돈에 대한 익숙한 생각과 선택을 돌아보고 나에게 맞는 풍요의 방향을 탐색해 보세요.
                  </p>

                  <div className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-[#1A3830]/60 border border-[#608F82]/40 text-xs md:text-sm text-[#8FD3B6] font-medium mb-8">
                    39,000원 · 1:1 맞춤 PDF · 오행 아트카드 + 수호자 카드 2종 포함
                  </div>

                  {/* 구매 버튼 2개 (장바구니 담기 + 바로 신청하기) */}
                  <div className="flex flex-col sm:flex-row gap-3.5 max-w-md mx-auto items-stretch sm:items-center">
                    <button
                      type="button"
                      onClick={handleAddToCart}
                      className="py-3.5 px-6 rounded-2xl font-bold text-sm md:text-base border border-[#608F82]/40 text-[#8FD3B6] hover:bg-[#608F82]/20 hover:border-[#608F82]/70 transition-all duration-300 text-center shrink-0 order-2 sm:order-1"
                    >
                      장바구니 담기
                    </button>
                    <button
                      type="button"
                      onClick={handlePurchase}
                      className="py-4 px-8 rounded-2xl font-bold text-base md:text-lg hover:scale-[1.01] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 text-[#FAF7F2] shadow-[0_4px_20px_rgba(20,43,36,0.5)] hover:shadow-[0_0_30px_rgba(96,143,130,0.45)] hover:brightness-110 flex-1 order-1 sm:order-2"
                      style={{
                        background: 'linear-gradient(135deg, #3A5F53 0%, #25443B 100%)',
                        border: '1px solid rgba(229, 195, 120, 0.6)',
                      }}
                    >
                      <span>바로 신청하기</span>
                      <ChevronRight className="w-5 h-5 text-[#FAF7F2] shrink-0" />
                    </button>
                  </div>
                </div>
              </Reveal>
            </section>

            {/* ══════════════════════════════════════════════════════════════════════ */}
            {/* 신규 섹션: 왜, 선천코드 풍요 리포트인가? (차별점 & 처방전 철학) */}
            {/* ══════════════════════════════════════════════════════════════════════ */}
            <WhyWealthReport />

            {/* ══════════════════════════════════════════════════════════════════════ */}
            {/* POINT 01. 풍요 구조 집중 분석 — 타고난 재능과 돈을 대하는 태도 정밀 분석 */}
            {/* ══════════════════════════════════════════════════════════════════════ */}
            <section id="point-01" className="mb-40 scroll-mt-28 md:scroll-mt-36">
              <Reveal>
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                  <div className="relative overflow-hidden rounded-[40px] border border-[#608F82]/25 shadow-2xl">
                    <Image 
                      src={ABUNDANCE_REPORT_IMAGES.overview} 
                      alt="선천코드 풍요 리포트 소개 이미지" 
                      width={800}
                      height={600}
                      className="w-full h-auto object-cover" 
                    />
                  </div>
                  <div className="space-y-8">
                    <div className="space-y-3">
                      <span className="block font-elegant text-[12pt] font-semibold tracking-[0.2em] text-[#8FD3B6] uppercase">
                        POINT 01 · WEALTH STRUCTURE ANALYSIS
                      </span>
                      <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white leading-[1.25] md:leading-[1.3] break-keep">
                        나에게 맞는 풍요의 길은 <br />
                        <span className="gradient-text-abundance">나를 아는 것에서 시작됩니다</span>
                      </h2>
                    </div>
                    <p className="text-[18px] text-[#EDE6DA] opacity-75 leading-relaxed break-keep font-light whitespace-pre-wrap">
                      선천코드 풍요 리포트는 막연한 요행을 바라는 운세 풀이가 아닙니다. 내가 타고난 재능과 강점이 무엇인지, 돈을 대할 때 어떤 태도와 기준이 작동하는지, 그리고 일상에서 왜 비슷한 수입·소비 패턴이 반복되는지를 차분하게 짚어보고 현실에서 실천할 방향을 함께 모색하는 리포트입니다.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        "타고난 재능과 강점",
                        "나에게 맞는 수익 활동 성향",
                        "돈을 대하는 태도",
                        "반복되는 수입·소비 패턴"
                      ].map((item, idx) => (
                        <div key={idx} className="detail-glass-card flex items-center gap-4 p-4 rounded-2xl border border-[#8FD3B6]/15">
                          <div className="w-2 h-2 rounded-full bg-[#8FD3B6] shadow-[0_0_10px_#8FD3B6]"></div>
                          <span className="text-white/85">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            </section>

            {/* ══════════════════════════════════════════════════════════════════════ */}
            {/* POINT 02: 선천코드 풍요 분석 체계 (명리 뼈대 + 재정 행동 패턴 교차 분석) */}
            {/* ══════════════════════════════════════════════════════════════════════ */}
            <WealthAnalysisMethod />

            {/* ══════════════════════════════════════════════════════════════════════ */}
            {/* POINT 03. 돈과 선택 패턴의 개인 맞춤 해독 — 6가지 핵심 탐구 축 */}
            {/* ══════════════════════════════════════════════════════════════════════ */}
            <section id="point-03" className="mb-40 text-center scroll-mt-28 md:scroll-mt-36">
              <Reveal>
                <div className="space-y-4 mb-16">
                  <span className="block font-elegant text-[12pt] font-semibold tracking-[0.2em] text-[#8FD3B6] uppercase">
                    POINT 03 · DYNAMICS & SIX PERSPECTIVES
                  </span>
                  <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white tracking-[0.05em] leading-[1.25] md:leading-[1.3] break-keep">
                    돈과 선택 패턴의 개인 맞춤 해독 — <span className="gradient-text-abundance">6가지 핵심 탐구 축</span>
                  </h2>
                </div>
                <div className="w-full max-w-[1280px] mx-auto mb-20">
                  <Image 
                    src={ABUNDANCE_REPORT_IMAGES.analysis} 
                    alt="선천코드 풍요 리포트 핵심 탐구 주제 이미지" 
                    width={1200}
                    height={800}
                    className="w-full h-auto rounded-[50px] shadow-2xl border border-[#608F82]/25" 
                  />
                </div>
                <div className="gungjung-glass px-6 py-10 md:px-10 md:py-14 lg:px-14 lg:py-16 relative overflow-hidden rounded-[36px] border border-[#8FD3B6]/15">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-7">
                    {[
                      { t: "타고난 재능과 강점", d: "내가 억지로 애쓰지 않아도 자연스럽게 발휘할 수 있는 고유한 강점과 잠재력을 읽어냅니다.", i: "fa-gem" },
                      { t: "수익 활동 성향", d: "자율적 환경, 협업, 전문 분야 몰입 등 나에게 잘 맞는 일의 방식과 수익 활동 성향을 살펴봅니다.", i: "fa-compass" },
                      { t: "돈을 대하는 태도", d: "재정적 선택의 순간마다 무의식적으로 작동하는 나의 가치관과 돈을 바라보는 시선을 점검합니다.", i: "fa-scale-balanced" },
                      { t: "반복되는 수입 패턴", d: "일의 시작과 유지, 확장의 과정에서 나타나는 나만의 흐름과 에너지가 분산되는 지점을 짚어봅니다.", i: "fa-chart-line" },
                      { t: "소비 습관과 균형", d: "감정적 지출이나 습관적 소비가 일어나는 맥락을 이해하고 나에게 만족을 주는 소비 기준을 세웁니다.", i: "fa-seedling" },
                      { t: "현실 실천 방향", d: "일상에서 부담 없이 시작하고 꾸준히 이어갈 수 있는 현실적인 정돈과 실천 방향을 제안합니다.", i: "fa-route" }
                    ].map((item, idx) => (
                      <div 
                        key={idx} 
                        className="detail-glass-card flex flex-col items-center text-center py-6 px-4 sm:px-5 md:px-5 rounded-[22px] md:rounded-[26px] group transition-all duration-300 border border-[#8FD3B6]/15 hover:border-[#8FD3B6]/35"
                      >
                        <div className="w-[52px] h-[52px] rounded-2xl bg-[#0f241f] flex items-center justify-center border border-[#8FD3B6]/35 text-[#E6BE8A] shadow-sm mb-3.5 group-hover:scale-105 group-hover:bg-[#152e27] transition-all duration-300">
                          <i className={`fas ${item.i} text-lg md:text-[19px] text-[#8FB4A4]`}></i>
                        </div>
                        <div className="w-full flex flex-col items-center flex-1 justify-center">
                          <h4 className="text-[17px] sm:text-[18.5px] lg:text-[19.5px] font-bold text-white mb-2.5 group-hover:text-[#E6BE8A] transition-colors leading-snug tracking-tight text-center break-keep">
                            {item.t}
                          </h4>
                          <p className="text-[14.5px] md:text-[15.5px] text-[#EDE6DA]/75 font-light leading-[1.65] break-keep text-center">
                            {item.d}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </section>

            {/* ══════════════════════════════════════════════════════════════════════ */}
            {/* SECTION 06. 같은 선천코드, 다른 돈의 선택 */}
            {/* ══════════════════════════════════════════════════════════════════════ */}
            <WealthPersonalizedCases />

            {/* ══════════════════════════════════════════════════════════════════════ */}
            {/* SECTION 07. 일반 재물운 풀이와의 차별점 */}
            {/* ══════════════════════════════════════════════════════════════════════ */}
            <WealthComparisonTable />

            {/* ══════════════════════════════════════════════════════════════════════ */}
            {/* NEW. 당신은 아직도 미래가 어떻게 될지만 묻고 있습니까? (패러다임 전환) */}
            {/* ══════════════════════════════════════════════════════════════════════ */}
            <QuestionShiftComparison theme="abundance" />

            {/* ══════════════════════════════════════════════════════════════════════ */}
            {/* [6대 관점 파노라마 와이드 배너] SIX PERSPECTIVES */}
            {/* ══════════════════════════════════════════════════════════════════════ */}
            <WealthSixPerspectivesBanner />

            {/* ══════════════════════════════════════════════════════════════════════ */}
            {/* SECTION 08. 풍요 리포트 목차 공개 (7 PART & PART 07 강조) */}
            {/* ══════════════════════════════════════════════════════════════════════ */}
            <WealthReportTableOfContents />

            {/* ══════════════════════════════════════════════════════════════════════ */}
            {/* [특별 증정품 안내] 나의 오행으로 만나는 풍요의 상징 (오행 아트카드 + 수호자 카드 2종 증정) */}
            {/* ══════════════════════════════════════════════════════════════════════ */}
            <WealthSpecialGift />

            {/* ══════════════════════════════════════════════════════════════════════ */}
            {/* NEW. PART 07 실제 행동 처방전 샘플 영역 (구체적 실천 솔루션) */}
            {/* ══════════════════════════════════════════════════════════════════════ */}
            <WealthPrescriptionSample />

            {/* ══════════════════════════════════════════════════════════════════════ */}
            {/* [목차 및 실전 처방 이후 슬림형 중간 CTA] 가로폭 맞춤 패널 (오픈 예정 보존) */}
            {/* ══════════════════════════════════════════════════════════════════════ */}
            <section className="mb-28 md:mb-36 max-w-7xl mx-auto px-4">
              <Reveal>
                <div className="gungjung-glass py-7 md:py-8 px-6 sm:px-8 md:px-10 lg:px-12 rounded-[24px] md:rounded-[30px] border border-[#608F82]/35 bg-gradient-to-r from-[#142B24]/75 via-[#0B1514]/65 to-[#142B24]/75 relative overflow-hidden shadow-xl backdrop-blur-md">
                  {/* 은은한 배경 오라 */}
                  <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#608F82]/10 rounded-full blur-[90px] pointer-events-none" />

                  <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
                    {/* 좌측 (약 62%): 메인 제목 + 설명 */}
                    <div className="w-full lg:w-[62%] text-center lg:text-left">
                      <h3 className="text-xl sm:text-2xl md:text-[26px] lg:text-[28px] font-elegant font-bold text-white leading-snug break-keep">
                        이제, <span className="gradient-text-abundance">나의 풍요 이야기를 펼쳐볼 차례입니다.</span>
                      </h3>
                      <p className="mt-2.5 sm:mt-3 text-[14.5px] sm:text-[15.5px] md:text-[16px] text-[#EDE6DA]/85 font-light leading-relaxed break-keep">
                        타고난 기질과 돈을 대하는 태도, 반복되는 선택 패턴과 나에게 맞는 행동의 방향까지.<br className="hidden sm:inline" />{' '}
                        나의 풍요를 새롭게 이해하는 맞춤 리포트를 만나보세요.
                      </p>
                    </div>

                    {/* 우측 (약 38%): 구매 버튼 + 구성 안내 */}
                    <div className="w-full lg:w-[38%] flex flex-col items-center lg:items-end justify-center shrink-0">
                      <button 
                        type="button"
                        onClick={handlePurchase}
                        className="w-full sm:w-auto min-w-[280px] sm:min-w-[320px] lg:min-w-[340px] py-4 sm:py-4.5 px-7 sm:px-8 rounded-2xl font-bold text-base sm:text-[16.5px] hover:scale-[1.01] active:scale-95 transition-all duration-300 bg-gradient-to-br from-[#3A5F53] to-[#25443B] border border-[#E5C378]/90 text-[#FAF7F2] shadow-[0_4px_18px_rgba(20,43,36,0.35)] hover:shadow-[0_0_22px_rgba(96,143,130,0.45)] hover:brightness-110 text-center"
                      >
                        나의 선천코드 풍요 리포트 신청하기 · 39,000원
                      </button>
                      <p className="mt-2.5 text-[12px] sm:text-[13px] text-[#8FB4A4]/85 font-light tracking-wide text-center lg:text-right">
                        1:1 맞춤 PDF · 오행 아트카드 + 수호자 카드 2종 증정
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </section>

            {/* ══════════════════════════════════════════════════════════════════════ */}
            {/* SECTION 09. 개인 맞춤 리포트 제작 과정 */}
            {/* ══════════════════════════════════════════════════════════════════════ */}
            <WealthReportProcess />

            {/* ══════════════════════════════════════════════════════════════════════ */}
            {/* SECTION 10. 리포트 샘플 미리보기 (확대 라이트박스 지원) */}
            {/* ══════════════════════════════════════════════════════════════════════ */}
            <WealthReportPreview />

            {/* ══════════════════════════════════════════════════════════════════════ */}
            {/* SECTION 11. 리포트를 읽은 뒤 달라질 수 있는 선택 */}
            {/* ══════════════════════════════════════════════════════════════════════ */}
            <WealthChangeScenario />

            {/* ══════════════════════════════════════════════════════════════════════ */}
            {/* SECTION 12. 추천 대상과 맞지 않는 대상 (a3.webp & 추천 카드 보존) */}
            {/* ══════════════════════════════════════════════════════════════════════ */}
            <WealthAudience />

            {/* ══════════════════════════════════════════════════════════════════════ */}
            {/* SECTION 13. 가상 활용 시나리오 (4차 개편 완료) */}
            {/* ══════════════════════════════════════════════════════════════════════ */}
            <WealthTestimonials />

            {/* ══════════════════════════════════════════════════════════════════════ */}
            {/* THE REAL REASON · 풍요의 진짜 구조 (후반부 통합 카드) */}
            {/* ══════════════════════════════════════════════════════════════════════ */}
            <WealthRealReasonCard />

            {/* ══════════════════════════════════════════════════════════════════════ */}
            {/* FINAL AWAKENING: 피날레 에디토리얼 와이드 배너 (5차 신규 추가) */}
            {/* ══════════════════════════════════════════════════════════════════════ */}
            <WealthRealTransformationBanner />

            {/* ══════════════════════════════════════════════════════════════════════ */}
            {/* SECTION 14. 백도화의 풍요 분석 철학 (궁중 서신 편지 형태 보존) */}
            {/* ══════════════════════════════════════════════════════════════════════ */}
            <WealthPhilosophy />

            {/* ══════════════════════════════════════════════════════════════════════ */}
            {/* SECTION 15. 소장 가치와 오행 에너지 카드 & 전자책 연결 */}
            {/* ══════════════════════════════════════════════════════════════════════ */}
            {/* 15-1. 소장 가치 6대 핵심 요소 요약 및 《풍요비책》 전자책 연결 카드 */}
            <WealthValueSummary />

            {/* 15-2. 기존 프리미엄 섹션 (a5.webp 에셋 보존) */}
            <section className="mb-40">
              <Reveal>
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                  <div className="space-y-10 order-2 lg:order-1">
                    <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white leading-[1.25] md:leading-[1.3] break-keep">
                      나만의 기준을 세우는 <br />
                      <span className="text-[#8FB4A4]">프리미엄</span> <span className="text-[#E6BE8A]">풍요 리포트</span>
                    </h2>
                    <p className="text-[18px] text-[#EDE6DA] opacity-75 leading-relaxed break-keep font-light whitespace-pre-wrap">
                      선천코드 풍요 리포트는 타인의 기준을 무작정 따라가는 대신, 나의 기질과 생활의 리듬에 어울리는 풍요의 방향을 차분히 정리해 보는 맞춤형 리포트입니다.{"\n\n"}
                      백도화만의 깊이 있는 해석과 정갈한 문체로, 내 안의 강점과 일상의 재정 습관을 돌아보고 현실에서 단단하게 걸어갈 방향을 함께 그려봅니다.
                    </p>
                  </div>
                  <div className="order-1 lg:order-2 relative group">
                    <div className="absolute -inset-10 bg-[#608F82]/10 blur-[60px] rounded-full"></div>
                    <Image 
                      src={ABUNDANCE_REPORT_IMAGES.premium} 
                      alt="선천코드 풍요 리포트 프리미엄 디자인 이미지" 
                      width={800}
                      height={600}
                      className="relative z-10 w-full h-auto rounded-[60px] shadow-[0_0_80px_rgba(0,0,0,0.6)] border border-[#608F82]/25 transition-transform duration-1000 group-hover:scale-[1.03]" 
                    />
                  </div>
                </div>
              </Reveal>
            </section>

            {/* 15-3. 기존 오행 에너지 카드 5종 및 제작/수령 안내 보존 */}
            <section className="mb-40">
              <div className="space-y-40">
                {/* 오행 에너지 카드 안내 */}
                <div className="relative">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] bg-gradient-to-r from-emerald-900/10 via-amber-900/5 to-teal-900/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>

                  <Reveal>
                    <div className="text-center mb-10 md:mb-14 space-y-4">
                      <span className="block font-elegant text-[12pt] font-semibold tracking-[0.2em] text-[#8FB4A4] uppercase mb-4">
                        Digital Ritual Gift
                      </span>
                      <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white tracking-wide leading-[1.25] md:leading-[1.3] break-keep">
                        당신의 흐름에 맞춘 <span className="text-[#8FB4A4]">오행 에너지</span> <span className="text-[#E6BE8A]">카드</span>
                      </h2>
                      <p className="text-[18px] text-[#EDE6DA] opacity-60 max-w-2xl mx-auto break-keep font-light">
                        ※ 오행 에너지 카드는 특정 결과를 보장하는 부적이 아니라, 나의 기질과 흐름을 상징적으로 바라보기 위한 감성 리추얼 이미지입니다.
                      </p>
                    </div>
                  </Reveal>

                  <Reveal>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full max-w-[1280px] mx-auto">
                      {fiveElements.map((item, idx) => (
                        <div
                          key={idx}
                          className={`gungjung-glass point-box p-8 border ${item.borderClass} bg-gradient-to-b ${item.gradientClass} relative overflow-hidden group flex flex-col items-center justify-between text-center transition-all duration-500 hover:-translate-y-2`}
                        >
                          <div className={`absolute -inset-10 ${item.bgGlow} blur-[30px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
                          <div className="absolute inset-2 border border-white/[0.03] group-hover:border-[#E6BE8A]/25 rounded-xl pointer-events-none transition-colors duration-500"></div>

                          <div className="w-full relative z-10 flex flex-col items-center">
                            <div className="w-20 h-28 mb-6 border border-[#E6BE8A]/30 rounded-lg flex items-center justify-center bg-black/40 relative shadow-inner group-hover:scale-105 transition-transform duration-500">
                              <span className="text-4xl md:text-5xl font-elegant font-bold text-[#E6BE8A] drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                                {item.hanja}
                              </span>
                              <div className="absolute top-1.5 left-1.5 w-1.5 h-1.5 border-t border-l border-[#608F82]/40"></div>
                              <div className="absolute top-1.5 right-1.5 w-1.5 h-1.5 border-t border-r border-[#608F82]/40"></div>
                              <div className="absolute bottom-1.5 left-1.5 w-1.5 h-1.5 border-b border-l border-[#608F82]/40"></div>
                              <div className="absolute bottom-1.5 right-1.5 w-1.5 h-1.5 border-b border-r border-[#608F82]/40"></div>
                            </div>

                            <span className={`inline-block px-3 py-1 rounded-md text-xs font-semibold mb-3 ${item.tagColor}`}>
                              {item.hangul}
                            </span>

                            <h4 className="text-base font-bold text-white mb-4 break-keep">
                              {item.keyword}
                            </h4>

                            <p className="text-xs text-[#EDE6DA]/60 leading-relaxed break-keep font-light">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Reveal>
                </div>

                {/* 리포트 준비 과정 및 필요 정보 안내 */}
                <div className="relative">
                  <Reveal>
                    <div className="text-center mb-16 space-y-4">
                      <span className="block font-elegant text-[12pt] font-semibold tracking-[0.2em] text-[#8FB4A4] uppercase mb-4">
                        Process & Info
                      </span>
                      <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white tracking-wide leading-[1.25] md:leading-[1.3] break-keep">
                        리포트는 <span className="text-[#8FB4A4]">이렇게</span> <span className="text-[#E6BE8A]">준비됩니다</span>
                      </h2>
                      <p className="text-[18px] text-[#EDE6DA] opacity-75 max-w-3xl mx-auto break-keep font-light">
                        백도화의 선천코드 리포트는 신청자분의 선천 정보를 바탕으로 정성스럽게 분석하여 작성되는 디지털 리포트입니다.
                      </p>
                    </div>
                  </Reveal>

                  <div className="grid lg:grid-cols-12 gap-8 w-full max-w-[1280px] mx-auto">
                    <div className="lg:col-span-7 space-y-6">
                      <Reveal>
                        <div className="gungjung-glass p-8 border-[#8FD3B6]/15 h-full flex flex-col justify-between">
                          <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
                            <span className="w-1.5 h-6 bg-[#8FD3B6] rounded-full"></span>
                            리포트 분석 및 전달 과정
                          </h3>

                          <div className="space-y-8 relative pl-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-white/10">
                            {[
                              { title: "선천 정보 입력 및 신청", desc: "신청 시 작성해주신 생년월일시 등 기본 선천 정보를 기준으로 분석 준비가 시작됩니다." },
                              { title: "성향 및 패턴 정밀 해석", desc: "타고난 재능과 강점, 돈을 대하는 태도, 수입·소비 흐름을 종합적으로 살펴 리포트를 구성합니다." },
                              { title: "맞춤형 디지털 리포트 전달", desc: "완성된 리포트는 언제든 다시 펼쳐보며 점검하실 수 있도록 디지털 문서 형태로 전달됩니다." },
                              { title: "정보 확인 안내", desc: "생년월일시 등 입력 정보에 따라 해석 방향이 달라질 수 있으므로 신청 전 정보를 정확히 확인해 주세요." }
                            ].map((step, idx) => (
                              <div key={idx} className="relative group">
                                <div className="absolute -left-[22px] top-1.5 w-3 h-3 rounded-full bg-[#0f241f] border-2 border-[#8FD3B6] group-hover:bg-[#E6BE8A] transition-colors duration-300"></div>
                                <h4 className="text-base font-bold text-white mb-2">{step.title}</h4>
                                <p className="text-sm text-[#EDE6DA]/60 break-keep font-light">{step.desc}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </Reveal>
                    </div>

                    <div className="lg:col-span-5 space-y-6">
                      <Reveal>
                        <div className="gungjung-glass p-8 border-[#8FD3B6]/15 h-full flex flex-col justify-between bg-gradient-to-b from-white/[0.02] to-transparent">
                          <div>
                            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                              <span className="w-1.5 h-6 bg-[#E6BE8A] rounded-full"></span>
                              정확한 분석을 위해 필요한 정보
                            </h3>
                            <p className="text-sm text-[#EDE6DA]/50 mb-8 break-keep font-light">
                              선천코드 분석 리포트의 특성상 아래의 기본 정보가 필요합니다.
                            </p>

                            <div className="grid grid-cols-2 gap-3 mb-8">
                              {[
                                { label: "이름 또는 닉네임", icon: "fa-user" },
                                { label: "생년월일", icon: "fa-calendar-days" },
                                { label: "태어난 시간", icon: "fa-clock" },
                                { label: "양력/음력 여부", icon: "fa-circle-half-stroke" },
                                { label: "성별", icon: "fa-venus-mars" },
                                { label: "리포트 수령 이메일", icon: "fa-envelope" }
                              ].map((info, idx) => (
                                <div key={idx} className="flex items-center gap-3 p-3 bg-white/[0.02] rounded-xl border border-white/5">
                                  <div className="w-8 h-8 rounded-lg bg-[#608F82]/15 flex items-center justify-center text-[#8FB4A4] shrink-0">
                                    <i className={`fas ${info.icon} text-xs`}></i>
                                  </div>
                                  <span className="text-xs text-[#EDE6DA]/80 font-medium">{info.label}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="p-4 bg-[#608F82]/10 border border-[#608F82]/25 rounded-xl">
                            <p className="text-xs text-[#EDE6DA]/70 leading-relaxed break-keep font-light">
                              ※ 본 리포트는 개인의 선천적 기질과 재정적 습관을 성찰하고 현실적인 방향을 모색하기 위한 분석 콘텐츠이며, 특정 수익이나 재물의 증가를 보장하지 않습니다.
                            </p>
                          </div>
                        </div>
                      </Reveal>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ══════════════════════════════════════════════════════════════════════ */}
            {/* SECTION 16. 자주 묻는 질문 FAQ (10개 항목 아코디언) */}
            {/* ══════════════════════════════════════════════════════════════════════ */}
            <WealthReportFAQ />

            {/* ══════════════════════════════════════════════════════════════════════ */}
            {/* SECTION 17. 구매 전 안내 (6대 중요 안내 사항) */}
            {/* ══════════════════════════════════════════════════════════════════════ */}
            <WealthPurchaseNotice />

            {/* ══════════════════════════════════════════════════════════════════════ */}
            {/* SECTION 18. 최종 구매 CTA (이미지와 텍스트·구매 카드 분리 구조 - 오픈 예정 보존) */}
            {/* ══════════════════════════════════════════════════════════════════════ */}
            <section className="mb-20 md:mb-24 w-full max-w-[1280px] mx-auto">
              <Reveal>
                {/* ① 16:9 와이드 단독 대표 이미지 (오버레이 제거) */}
                <div className="relative w-full rounded-[40px] overflow-hidden border border-[#608F82]/25 shadow-2xl aspect-[16/9] bg-[#0B1514] mb-14 md:mb-16 group">
                  <Image 
                    src={ABUNDANCE_REPORT_IMAGES.finalCta} 
                    alt="선천코드 풍요 리포트 하단 배너 이미지" 
                    width={1672}
                    height={941}
                    className="w-full h-full object-cover transition-transform duration-[10000ms] group-hover:scale-105" 
                  />
                </div>

                {/* ② 이미지 아래 텍스트 영역 (중앙 정렬) */}
                <div className="text-center max-w-3xl mx-auto px-4 mb-10 md:mb-12">
                  <span className="block font-elegant text-[12pt] font-semibold tracking-[0.2em] uppercase text-[#8FB4A4] mb-6">
                    EMBRACE YOUR ABUNDANCE
                  </span>
                  
                  <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white mb-6 leading-[1.25] md:leading-[1.3] break-keep">
                    &ldquo;나의 풍요를, 이제 새로운 시선으로 읽어보세요.&rdquo;
                  </h2>
                  
                  <p className="text-[18px] text-[#EDE6DA]/90 leading-relaxed font-light break-keep max-w-2xl mx-auto">
                    타고난 기질과 돈을 대하는 태도, 반복되는 선택과 자원 활용의 방향을<br className="hidden sm:inline" />
                    나만의 선천코드로 살펴보는 프리미엄 풍요 리포트입니다.
                  </p>
                </div>

                {/* ③ 독립 슬림 프리미엄 구매 카드 */}
                <div 
                  className="max-w-2xl mx-auto py-8 px-6 sm:py-10 sm:px-10 rounded-[32px] sm:rounded-[36px] border border-[#608F82]/35 text-center relative overflow-hidden backdrop-blur-md"
                  style={{
                    background: 'radial-gradient(ellipse at 50% 0%, rgba(37, 68, 59, 0.45) 0%, rgba(15, 36, 31, 0.40) 50%, rgba(11, 21, 20, 0.95) 100%)',
                    boxShadow: '0 0 50px rgba(96, 143, 130, 0.20)'
                  }}
                >
                  {/* 은은한 배경 오라 */}
                  <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#608F82]/15 rounded-full blur-[80px] pointer-events-none" />

                  <div className="relative z-10">
                    {/* 1. 상품명 */}
                    <h3 className="font-elegant font-bold text-xl sm:text-[22px] text-[#FAF7F2] tracking-tight mb-2 break-keep">
                      백도화 선천코드 풍요 리포트
                    </h3>

                    {/* 2. 상품 구성 한 줄 표시 */}
                    <p className="text-[13.5px] sm:text-[14.5px] text-[#EDE6DA]/90 font-light mb-4 break-keep">
                      프리미엄 소장용 1:1 맞춤 PDF 비급 · 오행 아트카드 1장 + 수호자 카드 1장 증정
                    </p>

                    {/* 3. 가격 */}
                    <div className="mb-5">
                      <span className="text-3xl sm:text-[36px] font-elegant font-bold text-[#FAF7F2] tracking-tight">
                        39,000<span className="text-2xl sm:text-[28px] font-medium ml-1">원</span>
                      </span>
                    </div>

                    {/* 4. 구매 버튼 2개 */}
                    <div className="w-full max-w-md mx-auto flex flex-col sm:flex-row gap-3">
                      <button
                        type="button"
                        onClick={handleAddToCart}
                        className="py-3.5 sm:py-4 px-6 rounded-2xl font-bold text-sm md:text-base border border-[#608F82]/40 text-[#8FD3B6] hover:bg-[#608F82]/20 hover:border-[#608F82]/70 transition-all duration-300 text-center shrink-0 order-2 sm:order-1"
                      >
                        장바구니 담기
                      </button>
                      <button 
                        type="button"
                        onClick={handlePurchase}
                        className="py-4 sm:py-4.5 px-8 rounded-2xl font-bold text-base sm:text-[17px] hover:scale-[1.01] active:scale-95 transition-all duration-300 flex-1 text-[#FAF7F2] shadow-[0_4px_20px_rgba(20,43,36,0.5)] hover:shadow-[0_0_30px_rgba(96,143,130,0.45)] hover:brightness-110 text-center order-1 sm:order-2"
                        style={{
                          background: 'linear-gradient(135deg, #3A5F53 0%, #25443B 100%)',
                          border: '1px solid rgba(229, 195, 120, 0.6)',
                        }}
                      >
                        나의 풍요 리포트 신청하기
                      </button>
                    </div>

                    {/* 5. 상품 제공 안내 */}
                    <p className="text-[12px] sm:text-[13px] text-[#EDE6DA]/75 font-light mt-4 break-keep">
                      ※ 주문 접수 후 고객님의 사주 정보를 바탕으로 순차 제작되는 디지털 맞춤 리포트입니다.
                    </p>
                  </div>
                </div>
              </Reveal>
            </section>

            {/* 브랜드 시그니처 엔딩 섹션 (최종 구매 CTA 아래, 공통 푸터 위) */}
            <BrandSignatureEnding theme="abundance" />

          </div>
        </div>
        <Footer />
      </GlobalBackground>
    </main>
  )
}
