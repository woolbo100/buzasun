'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Reveal from '@/components/Reveal'
import GlobalBackground from '@/components/GlobalBackground'
import Link from 'next/link'
import Image from 'next/image'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { useRouter } from 'next/navigation'
import { addToCart } from '@/hooks/useCart'
import { ChevronRight } from 'lucide-react'
import BrandSignatureEnding from '@/components/reports/common/BrandSignatureEnding'
import BaekdohwaDivider from '@/components/reports/baekdohwa-report/BaekdohwaDivider'

// ══════════════════════════════════════════════════════════════════════
// 풍요 리포트 마스터 템플릿 1:1 매핑 궁합 전용 컴포넌트 목록
// ══════════════════════════════════════════════════════════════════════
// A. 도입 및 공감 영역
import CompatibilityPatternChecklist from '@/components/reports/compatibility-report/CompatibilityPatternChecklist'
import CompatibilityCoreDifferentiation from '@/components/reports/compatibility-report/CompatibilityCoreDifferentiation'
import CompatibilityRelationshipDiagram from '@/components/reports/compatibility-report/CompatibilityRelationshipDiagram'
import CompatibilityCaseComparison from '@/components/reports/compatibility-report/CompatibilityCaseComparison'
import QuestionShiftComparison from '@/components/reports/common/QuestionShiftComparison'

// B. 차별성 및 심층 분석 영역
import WhyCompatibilityReport from '@/components/reports/compatibility-report/WhyCompatibilityReport'
import CompatibilityAnalysisMethod from '@/components/reports/compatibility-report/CompatibilityAnalysisMethod'
import CompatibilitySixPerspectivesBanner from '@/components/reports/compatibility-report/CompatibilitySixPerspectivesBanner'
import CompatibilityReportTableOfContents from '@/components/reports/compatibility-report/CompatibilityReportTableOfContents'

// C. 개인 맞춤 상품 구성 영역
import CompatibilityPersonalizedReportPoint from '@/components/reports/compatibility-report/CompatibilityPersonalizedReportPoint'
import CompatibilitySpecialGift from '@/components/reports/compatibility-report/CompatibilitySpecialGift'
import CompatibilityPrescriptionSample from '@/components/reports/compatibility-report/CompatibilityPrescriptionSample'
import CompatibilityReportPreview from '@/components/reports/compatibility-report/CompatibilityReportPreview'
import CompatibilityRoyalArchivePoint from '@/components/reports/compatibility-report/CompatibilityRoyalArchivePoint'
import CompatibilityComparisonTable from '@/components/reports/compatibility-report/CompatibilityComparisonTable'

// D. 변화와 감정적 설득 영역
import CompatibilityChangeScenario from '@/components/reports/compatibility-report/CompatibilityChangeScenario'
import CompatibilityTestimonials from '@/components/reports/compatibility-report/CompatibilityTestimonials'
import CompatibilityRealTransformationBanner from '@/components/reports/compatibility-report/CompatibilityRealTransformationBanner'

// E. 추천 대상 및 정보 안내 영역
import CompatibilityRecommendedAudience from '@/components/reports/compatibility-report/CompatibilityRecommendedAudience'
import CompatibilityValueSummary from '@/components/reports/compatibility-report/CompatibilityValueSummary'
import CompatibilityFAQ from '@/components/reports/compatibility-report/CompatibilityFAQ'
import CompatibilityPurchaseNotice from '@/components/reports/compatibility-report/CompatibilityPurchaseNotice'

// ══════════════════════════════════════════════════════════════════════
// 히어로 & 공감 섹션 가로 16:9 이미지 설정 (교체 가능 구조)
// ══════════════════════════════════════════════════════════════════════
const HERO_IMAGE_CONFIG = {
  src: '/image/compatibility/compatibility-royal-peony-hero.webp',
  alt: '선천코드 프리미엄 궁합 리포트 메인 히어로 - 궁중 모란과 인연 설계도',
  width: 1672,
  height: 941,
}

const EMPATHY_IMAGE_CONFIG = {
  src: '/image/compatibility/compatibility-pattern-awakening-banner.webp',
  alt: '서로 다른 감정과 관계 패턴을 암시하는 궁합 리포트 감성 이미지',
  width: 1672,
  height: 941,
}

// 교차 스토리 1 & 2 세로 3:4 이미지 설정
const COMPATIBILITY_STORY_IMAGE_1 = {
  src: '/image/compatibility/compatibility-lonely-heart-moment.webp',
  alt: '선천코드 프리미엄 궁합 리포트 - 누구보다 애썼지만 홀로 고민하고 있는 당신께',
  width: 1086,
  height: 1448,
}

const COMPATIBILITY_STORY_IMAGE_2 = {
  src: '/image/compatibility/compatibility-destiny-structure-scroll.webp',
  alt: '선천코드 프리미엄 궁합 리포트 - 사주 속 인연의 구조와 두루마리 설계도',
  width: 1086,
  height: 1448,
}

// POINT 01. 관계 특화 심층 분석 세로 3:4 이미지 설정
const POINT01_IMAGE_CONFIG = {
  src: '/image/compatibility/point01-relationship-analysis.webp',
  alt: '두 사람의 관계 흐름과 감정 구조를 상징적으로 표현한 궁합 리포트 분석 이미지',
  width: 1086,
  height: 1448,
}

// POINT 03. 6가지 핵심 분석 축 대표 16:9 이미지 설정
const SIX_PILLARS_IMAGE_CONFIG = {
  src: '/image/compatibility/compatibility-six-analysis-pillars.webp',
  alt: '선천코드 프리미엄 궁합 리포트의 6가지 핵심 분석 축과 무의식 관계 코드 정밀 해독 16:9 설계도',
  width: 1672,
  height: 941,
}

export default function PremiumCompatibilityReportPage() {
  useScrollAnimation()
  const router = useRouter()

  // 1. 기존 바로 결제 로직 보존 (59,000원 상품 결제 연결)
  const handlePurchase = (e: React.MouseEvent) => {
    e.preventDefault()
    router.push('/checkout?productId=premium-compatibility-report')
  }

  // 2. 기존 장바구니 담기 로직 보존
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    addToCart({
      id: 'premium-compatibility-report',
      slug: 'premium-compatibility-report',
      name: '선천코드 프리미엄 궁합 리포트',
      price: 59000,
      image: '/image/premium_compatibility_bg.png',
      type: 'digital_report',
      category: 'PREMIUM REPORT'
    }, 1)
    alert("장바구니에 담았습니다.")
  }

  return (
    <main className="detail-page compatibility-report-page relative min-h-screen bg-[#0D0709]">
      {/* 프리미엄 궁합 전용 딥 다크 플럼 x 버건디 그라데이션 배경 시스템 적용 */}
      <GlobalBackground
        src="/image/main4.png"
        brightCenter={false}
        customBaseOverlay={
          <div className="absolute inset-0 w-full h-full pointer-events-none">
            {/* 1. 우측 은은한 딥 플럼 버건디 라이트 오라 */}
            <div
              className="absolute inset-0"
              style={{
                background: `
                  radial-gradient(ellipse 70% 50% at 88% 22%, rgba(70, 45, 56, 0.22) 0%, rgba(56, 33, 43, 0.10) 50%, transparent 75%),
                  radial-gradient(circle 600px at 90% 65%, rgba(64, 48, 57, 0.15) 0%, transparent 65%)
                `,
              }}
            />

            {/* 2. 메인 가로 그라데이션 */}
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

        <div className="relative z-10 pt-36 md:pt-40 pb-20">
          <div className="container-premium">
            
            {/* ══════════════════════════════════════════════════════════════════════ */}
            {/* A. 도입 및 공감 영역 */}
            {/* ══════════════════════════════════════════════════════════════════════ */}

            {/* 1. HERO — 메인 히어로 및 상품 소개 & 2. 공감 서사 */}
            <section className="text-center mb-36">
              <Reveal delayMs={100}>
                {/* 1. 상단 배지 */}
                <div className="mb-6">
                  <span className="inline-block px-5 py-1.5 rounded-full text-[12pt] font-elegant font-semibold tracking-[0.25em] uppercase bg-[#5A2638]/25 border border-[#B78C86]/40 text-[#D8BB94]">
                    PREMIUM COMPATIBILITY REPORT
                  </span>
                </div>

                {/* 2. 메인 제품명 제목 */}
                <h1 className="text-3xl md:text-6xl font-elegant font-bold mb-10 text-white leading-[1.25] md:leading-[1.3] break-keep">
                  선천코드 <span className="gradient-text-reunion">프리미엄 궁합 리포트</span>
                </h1>

                {/* 3. 메인 가로 이미지 (16:9 비율 유지 · 1280 영역에 꽉 차는 object-cover 렌더링) */}
                <div className="relative w-full max-w-[1280px] mx-auto mb-12 sm:mb-16 md:mb-20 rounded-[40px] overflow-hidden border border-[#B78C86]/25 shadow-2xl aspect-[16/9] bg-[#14080E]">
                  <Image 
                    src={HERO_IMAGE_CONFIG.src} 
                    alt={HERO_IMAGE_CONFIG.alt}
                    width={HERO_IMAGE_CONFIG.width}
                    height={HERO_IMAGE_CONFIG.height}
                    priority
                    className="w-full h-full object-cover" 
                  />
                </div>

                {/* 4. 메인 히어로 하단 문제 제기형 인트로 섹션 (풍요 리포트와 동일한 구조) */}
                <div className="max-w-4xl mx-auto text-center px-4 space-y-4 md:space-y-5">
                  <h2 className="text-2xl sm:text-3xl md:text-[34px] lg:text-[38px] text-white font-elegant font-bold leading-[1.3] md:leading-[1.35] break-keep">
                    &ldquo;왜 우리는 사랑하면서도, <span className="gradient-text-reunion">늘 같은 이유로 다투게 될까요?</span>&rdquo;
                  </h2>
                  <p className="text-base sm:text-lg md:text-[20px] font-elegant text-[#FAF7F2] leading-[1.75] md:leading-[1.8] break-keep max-w-2xl mx-auto opacity-95 font-light">
                    사랑하는 마음이 부족해서가 아닙니다.<br />
                    타고난 기질의 속도, 감정을 표현하는 언어, 상처받았을 때 닫히는<br />
                    무의식의 방식이 다를 뿐입니다.<br />
                    서로의 코드를 읽지 못하면, 사랑은 깊어질수록 더 큰 외로움이 됩니다.
                  </p>
                </div>

                {/* 구간 전환용 얇은 장식선 */}
                <div className="flex items-center justify-center my-10 sm:my-14 md:my-16 max-w-xs sm:max-w-sm mx-auto px-4" aria-hidden="true">
                  <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#B78C86]/35 to-transparent" />
                  <div className="mx-4 flex items-center justify-center text-[#D8BB94] opacity-80">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D8BB94]/60"></span>
                  </div>
                  <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#B78C86]/35 to-transparent" />
                </div>

                {/* 메인 프리미엄 상품 소개 & 구매 CTA 상자 (풍요 리포트 규격 일치화) */}
                <div className="max-w-[1280px] mx-auto mb-36 md:mb-48 lg:mb-52 text-left">
                  <div 
                    className="relative rounded-[32px] md:rounded-[40px] p-7 sm:p-10 lg:p-12 border border-[#B78C86]/35 overflow-hidden shadow-2xl"
                    style={{
                      background: 'radial-gradient(ellipse at 50% 0%, rgba(90, 38, 56, 0.45) 0%, rgba(58, 22, 35, 0.40) 50%, rgba(20, 8, 14, 0.95) 100%)',
                      boxShadow: '0 0 60px rgba(90, 38, 56, 0.22)'
                    }}
                  >
                    {/* 은은한 배경 오라 */}
                    <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#5A2638]/20 rounded-full blur-[90px] pointer-events-none" />

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
                      {/* 좌측 (약 58%): 라벨 + 메인 카피 + 설명 + 가격 + 버튼 */}
                      <div className="lg:col-span-7 space-y-5 md:space-y-6">
                        {/* 1. 상단 라벨 */}
                        <div>
                          <span className="inline-flex items-center justify-center py-1.5 px-3.5 rounded-full bg-[#3D1825]/80 border border-[#B78C86]/50 text-[#D8BB94] text-xs font-bold tracking-wider whitespace-nowrap">
                            선천코드 프리미엄 궁합 리포트
                          </span>
                        </div>

                        {/* 2. 메인 카피 */}
                        <h3 className="text-2xl sm:text-3xl md:text-[34px] font-elegant font-bold text-white leading-[1.35] md:leading-[1.4] break-keep">
                          선천코드로 읽는 <span className="gradient-text-reunion">두 사람의 인연 설계도</span>
                        </h3>

                        {/* 3. 설명 문구 */}
                        <p className="text-[16px] md:text-[18px] text-[#EDE6DA]/90 leading-[1.7] font-light break-keep lg:whitespace-nowrap">
                          서로를 있는 그대로 이해하는 순간, 소모적 갈등은 멈추고 깊은 신뢰가 시작됩니다.
                        </p>

                        {/* 4. 가격 영역 & 5. 상품 정보 */}
                        <div className="pt-2">
                          <div className="flex flex-wrap items-baseline gap-3">
                            <span className="text-3xl sm:text-4xl md:text-[42px] font-elegant font-bold text-[#FAF7F2] tracking-tight">
                              59,000원
                            </span>
                            <span className="text-xs sm:text-sm text-[#D8BB94] font-medium tracking-wide">
                              1:1 맞춤 PDF 리포트 · 오행 아트카드 + 수호자 카드 2종 증정
                            </span>
                          </div>
                          <p className="text-[12px] sm:text-[13px] leading-[1.5] text-[#EDE6DA]/75 font-light mt-1.5 break-keep">
                            ※ 주문 접수 후 두 분의 사주 정보를 바탕으로 순차 제작되는 디지털 맞춤 리포트입니다.
                          </p>
                        </div>

                        {/* 6. 구매 버튼 2개 */}
                        <div className="flex flex-col sm:flex-row gap-3.5 pt-2 items-stretch sm:items-center">
                          <button
                            type="button"
                            onClick={handleAddToCart}
                            className="py-3.5 px-6 rounded-2xl font-bold text-sm md:text-base border border-[#B78C86]/45 text-[#D8BB94] hover:bg-[#5A2638]/25 hover:border-[#B78C86]/70 transition-all duration-300 text-center shrink-0 order-2 sm:order-1"
                          >
                            장바구니 담기
                          </button>
                          <button
                            type="button"
                            onClick={handlePurchase}
                            className="py-4 px-8 rounded-2xl font-bold text-base md:text-lg hover:scale-[1.01] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 text-[#FAF7F2] shadow-[0_4px_20px_rgba(90,38,56,0.5)] hover:shadow-[0_0_30px_rgba(183,140,134,0.45)] hover:brightness-110 flex-1 order-1 sm:order-2"
                            style={{
                              background: 'linear-gradient(135deg, #5A2638 0%, #4A1F2D 100%)',
                              border: '1px solid rgba(199, 169, 122, 0.45)',
                            }}
                          >
                            <span>바로 신청하기</span>
                            <ChevronRight className="w-5 h-5 text-[#FAF7F2] shrink-0" />
                          </button>
                        </div>
                      </div>

                      {/* 우측 (약 42%): 프리미엄 리포트 대표 목업 이미지 */}
                      <div className="lg:col-span-5 w-full flex justify-center">
                        <div className="relative w-full max-w-[420px] aspect-[4/3] rounded-2xl md:rounded-3xl overflow-hidden border border-[#B78C86]/35 shadow-2xl bg-black/30 group">
                          <Image
                            src="/image/compatibility/compatibility-royal-bond-blueprint.webp"
                            alt="선천코드 프리미엄 궁합 리포트 인연 설계도"
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

                {/* 2. 공감 서사 — 두 사람 사이에서 반복되는 고민 */}
                <div className="max-w-3xl mx-auto mb-14 text-center">
                  <p className="text-2xl md:text-[34px] lg:text-[38px] text-white font-elegant font-bold leading-[1.3] break-keep mb-6">
                    &ldquo;서로 사랑해서 시작했는데,<br className="hidden sm:inline" />
                    왜 대화는 <span className="gradient-text-reunion">늘 벽에 부딪힐까요?</span>&rdquo;
                  </p>
                  <div className="text-[18px] text-[#EDE6DA]/90 space-y-3 font-light leading-relaxed break-keep max-w-2xl mx-auto">
                    <p>누구보다 가까워지고 싶어서 마음을 쏟았고, 서로에게 가장 좋은 사람이 되고 싶었습니다.</p>
                    <p>하지만 사소한 말 한마디에 상처가 번지고, 풀리지 않는 감정의 침묵이 반복됩니다.</p>
                    <p className="pt-2 text-[#D8BB94] font-medium leading-relaxed">
                      혹시 두 사람은 서로를 사랑하는 마음만 앞섰지,<br className="hidden sm:inline" />
                      서로의 타고난 기질과 관계의 작동 구조는 한 번도 제대로<br />
                      들여다보지 못했던 것은 아닐까요?
                    </p>
                  </div>
                </div>

                {/* 공감 가로 이미지 (16:9 비율 유지) */}
                <div className="relative w-full max-w-[1280px] mx-auto rounded-[40px] overflow-hidden border border-[#B78C86]/25 shadow-2xl aspect-[16/9] bg-[#14080E] flex items-center justify-center">
                  <Image 
                    src={EMPATHY_IMAGE_CONFIG.src} 
                    alt={EMPATHY_IMAGE_CONFIG.alt}
                    width={EMPATHY_IMAGE_CONFIG.width}
                    height={EMPATHY_IMAGE_CONFIG.height}
                    className="w-full h-full object-cover"
                  />
                </div>
              </Reveal>
            </section>

            {/* 3. CHECKLIST — 관계 패턴 자가 점검 */}
            <CompatibilityPatternChecklist />

            {/* 4. 문제 분석 — 갈등 구조와 반복되는 반응 */}
            <CompatibilityCoreDifferentiation />

            {/* 5. THE MOMENT OF UNDERSTANDING — 관계에 대한 각성 (교차 스토리 1) */}
            <section className="mb-24 md:mb-32 w-full max-w-[1280px] mx-auto">
              <Reveal className="w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 xl:gap-18 items-start">
                  {/* 좌측 55%: 라벨 + 제목 + 본문 (상단 정렬 및 자연스러운 흐름) */}
                  <div className="lg:col-span-7 text-left break-keep order-2 lg:order-1 flex flex-col justify-start py-1 lg:py-2">
                    <div>
                      <span className="block font-elegant text-[12pt] font-semibold tracking-[0.2em] text-[#D8BB94] uppercase mb-3 md:mb-4">
                        THE MOMENT OF UNDERSTANDING
                      </span>
                      <h2 className="text-2xl md:text-[34px] lg:text-[36px] font-elegant font-bold leading-[1.3] break-keep mb-0">
                        <span className="text-[#FAF7F2]">우리는 왜 같은 사랑을</span><br />
                        <span className="gradient-text-reunion">서로 다른 방식으로 표현할까요?</span>
                      </h2>
                    </div>

                    {/* 본문 서사 (줄 띄움 삭제: 하나의 서사로 바로 연결) */}
                    <div className="mt-5 md:mt-6 text-[17px] md:text-[18px] text-[#EDE6DA] opacity-85 font-light leading-[1.75] md:leading-[1.8] break-keep">
                      <p>
                        누구보다 서로를 아끼고, 갈등이 생길 때마다 대화로 풀기 위해 노력했습니다.<br />
                        <span className="text-[#FAF7F2] font-semibold">
                          하지만 정작 상대가 무엇에 상처받고 왜 문을 닫아버리는지 모른 채,<br className="hidden sm:inline" />{' '}
                          나만의 방식으로만 다가가며 서로를 지치게 했던 시간들.
                        </span>
                      </p>
                    </div>

                    {/* 핵심 경각심 강조 카드 (굵은 문구와 박스 간격: 약 20~24px) */}
                    <div 
                      className="mt-5 md:mt-6 p-4 sm:p-5 rounded-2xl border text-left backdrop-blur-sm"
                      style={{
                        background: 'rgba(90, 38, 56, 0.35)',
                        borderColor: 'rgba(183, 140, 134, 0.30)',
                      }}
                    >
                      <div className="font-elegant text-[16px] md:text-[17.5px] leading-[1.6] break-keep space-y-1.5 md:space-y-2">
                        <p className="font-bold text-[#D8BB94]">
                          하지만 기억하십시오.
                        </p>
                        <p className="text-white font-medium">
                          상대의 고유한 선천 기질과 감정의 결을 모른 채 쏟아붓는 노력은 오히려 상대의 숨을 막히게 할 수 있습니다.
                        </p>
                        <p className="text-[#D8BB94] font-semibold">
                          두 사람의 선천코드를 모른 채 내리는 감정적 반응은 언제나 같은 갈등의 벽에 부딪히게 되어 있습니다.
                        </p>
                      </div>
                    </div>

                    {/* 박스 아래 설명 (간격: 약 18~22px) */}
                    <p className="mt-[18px] md:mt-5 text-[17px] md:text-[18px] text-[#EDE6DA] opacity-85 font-light leading-[1.75] md:leading-[1.8] break-keep">
                      타고난 인연의 흐름을 읽지 못했기에, 늘 가장 가까운 곳에서 가장 외로웠던 것입니다.
                    </p>

                    {/* 구분선 및 마지막 핵심 메시지 (구분선 위 20~24px, 아래 20~24px) */}
                    <div className="mt-5 md:mt-6 pt-5 md:pt-6 border-t border-[#B78C86]/30">
                      <p className="font-elegant font-bold text-[18px] sm:text-[20px] md:text-[22px] leading-[1.6] break-keep text-white">
                        이제 무작정 감정을 쏟아붓기 전에,<br className="hidden sm:inline" />
                        <span className="gradient-text-reunion"> 두 사람 내면에 새겨진 인연의 선천코드를 먼저 펼쳐볼 때입니다.</span>
                      </p>
                    </div>
                  </div>

                  {/* 우측 45%: 세로 3:4 이미지 영역 */}
                  <div className="lg:col-span-5 w-full max-w-[420px] lg:max-w-[450px] xl:max-w-[460px] mx-auto lg:mx-0 flex flex-col items-center lg:items-end justify-start order-1 lg:order-2 lg:py-2">
                    <div className="group relative w-full aspect-[3/4] rounded-[28px] md:rounded-[36px] overflow-hidden shadow-2xl bg-[#14080E] flex items-center justify-center border border-[#B78C86]/25">
                      <Image
                        src={COMPATIBILITY_STORY_IMAGE_1.src}
                        alt={COMPATIBILITY_STORY_IMAGE_1.alt}
                        width={COMPATIBILITY_STORY_IMAGE_1.width}
                        height={COMPATIBILITY_STORY_IMAGE_1.height}
                        className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </Reveal>
            </section>

            {/* 6. THE HIDDEN FLOW — 두 사람의 선천코드에 숨은 관계 구조 (교차 스토리 2) */}
            <section className="mb-24 md:mb-32 w-full max-w-[1280px] mx-auto">
              <Reveal className="w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 xl:gap-16 items-start">
                  {/* 좌측 45%: 세로 3:4 이미지 영역 */}
                  <div className="lg:col-span-5 w-full max-w-[420px] lg:max-w-[450px] xl:max-w-[460px] mx-auto lg:mx-0 flex flex-col items-center lg:items-start justify-start lg:py-2">
                    <div className="group relative w-full aspect-[3/4] rounded-[28px] md:rounded-[36px] overflow-hidden border border-[#B78C86]/35 shadow-2xl bg-[#14080E] flex items-center justify-center transition-all duration-300 hover:border-[#D8BB94]/50">
                      <Image
                        src={COMPATIBILITY_STORY_IMAGE_2.src}
                        alt={COMPATIBILITY_STORY_IMAGE_2.alt}
                        width={COMPATIBILITY_STORY_IMAGE_2.width}
                        height={COMPATIBILITY_STORY_IMAGE_2.height}
                        className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                        priority
                      />
                    </div>
                  </div>

                  {/* 우측 55%: 라벨 + 제목 + 본문 */}
                  <div className="lg:col-span-7 flex flex-col justify-between text-left break-keep lg:pl-6 xl:pl-8 py-1 lg:py-2 space-y-7 lg:space-y-0">
                    <div className="space-y-5">
                      <div>
                        <span className="block font-elegant text-[12pt] font-semibold tracking-[0.2em] text-[#D8BB94] uppercase mb-4">
                          THE HIDDEN CONNECTION
                        </span>
                        <h2 className="text-[20px] sm:text-2xl md:text-[34px] lg:text-[36px] font-elegant font-bold text-white mb-5 leading-[1.3] md:leading-[1.35] break-keep">
                          <span className="block">사주 속 인연의 구조를 마주하는 순간,</span>
                          <span className="gradient-text-reunion">반복되던 갈등의 고리가 다르게</span> 보이기 시작합니다.
                        </h2>
                      </div>

                      {/* 본문 서사 */}
                      <div className="space-y-3.5 text-[17px] md:text-[18px] text-[#EDE6DA] leading-[1.8] font-light break-keep">
                        <p className="text-[#FAF7F2] font-medium">
                          왜 그 사람의 차가운 침묵이 나를 견딜 수 없게 했는지, 왜 나의 절박한 호소가 상대를 도망치게 했는지.
                        </p>
                        <p>
                          마음이 식어서도, 인연이 아니어서도 아니었습니다. 모두 두 사람의 선천코드 속에 자리 잡고 있던 <span className="text-[#D8BB94] font-semibold">관계 에너지의 충돌 알고리즘</span>이었습니다.
                        </p>
                      </div>
                    </div>

                    {/* 하단 그룹: 강조 박스 + 마무리 훅 */}
                    <div className="space-y-3.5 text-[17px] md:text-[18px] leading-[1.8] break-keep">
                      <p className="text-[#FAF7F2] font-semibold">
                        단순한 궁합 점수나 단편적인 띠 맞추기는 더 이상 의미가 없습니다.
                      </p>

                      <div 
                        className="p-5 md:p-6 rounded-2xl border backdrop-blur-sm"
                        style={{
                          background: 'rgba(90, 38, 56, 0.35)',
                          borderColor: 'rgba(183, 140, 134, 0.30)',
                        }}
                      >
                        <p className="text-[#FAF7F2] font-elegant font-medium text-[17px] sm:text-[18px] md:text-[19px] leading-[1.7]">
                          상대가 왜 그렇게 반응할 수밖에 없었는지,<br className="hidden sm:inline" />
                          <span className="text-[#D8BB94]"> 그 고유한 결을 있는 그대로 읽어내는 일.</span>
                        </p>
                      </div>

                      <div className="pt-2">
                        <p className="font-elegant font-bold text-[19px] md:text-[22px] text-[#FAF7F2] leading-[1.7] break-keep">
                          <span className="text-[#D8BB94] font-semibold">그것이 소모적인 감정 싸움을 끝내고 온전한 신뢰로 나아가는 시작점입니다.</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </section>

            {/* 7. 관계 작동 구조와 3가지 핵심 분석 축 (INTERACTION DYNAMICS) */}
            <CompatibilityRelationshipDiagram />

            {/* 8. DIFFERENT CHOICES — 같은 궁합 구조, 다른 관계 선택 사례 */}
            <CompatibilityCaseComparison />

            {/* 9. PARADIGM SHIFT — 일반 궁합 질문과 백도화의 질문 비교 */}
            <QuestionShiftComparison theme="compatibility" />


            {/* ══════════════════════════════════════════════════════════════════════ */}
            {/* B. 차별성 및 심층 분석 영역 */}
            {/* ══════════════════════════════════════════════════════════════════════ */}

            {/* 10. WHY SEONCHEON CODE — 궁합 리포트 차별성 소개 */}
            <WhyCompatibilityReport />

            {/* 11. POINT 01 — 두 사람의 관계 특화 심층 분석 */}
            <section id="point-01" className="mb-40 scroll-mt-28 md:scroll-mt-36 w-full max-w-[1280px] mx-auto">
              <Reveal className="w-full">
                {/* 모바일 표시 순서 1: 섹션 제목 및 헤드카피 */}
                <div className="lg:hidden text-center sm:text-left mb-8 space-y-2.5">
                  <span className="block font-elegant text-[12pt] font-semibold tracking-[0.2em] text-[#D8BB94] uppercase">
                    POINT 01 · RELATIONSHIP ANALYSIS
                  </span>
                  <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white leading-[1.2] break-keep">
                    두 사람의 운세를 따로 보는 궁합이 아닙니다.<br />
                    오직 두 사람의 <span className="gradient-text-reunion">‘관계’ 하나만</span><br />
                    <span className="gradient-text-reunion">깊이 해부</span>합니다.
                  </h2>
                </div>

                <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-20 items-stretch">
                  {/* 왼쪽 이미지: 3:4 세로형 비율 (12단 중 5단 = 41.67%) / 모바일 표시 순서 2 */}
                  <div className="lg:col-span-5 relative group flex flex-col justify-center">
                    <div className="relative aspect-[3/4] w-full max-w-sm sm:max-w-md lg:max-w-none mx-auto rounded-[32px] md:rounded-[40px] overflow-hidden border border-[#B78C86]/25 shadow-2xl bg-[#14080E]">
                      <Image 
                        src={POINT01_IMAGE_CONFIG.src} 
                        alt={POINT01_IMAGE_CONFIG.alt} 
                        fill
                        sizes="(max-width: 1024px) 100vw, 42vw"
                        className="object-contain object-top transition-transform duration-700 group-hover:scale-[1.02]" 
                        priority
                      />
                    </div>
                  </div>

                  {/* 오른쪽 텍스트: 12단 중 7단 (58.33%) / 모바일 표시 순서 3 */}
                  <div className="lg:col-span-7 lg:pl-2 xl:pl-6 flex flex-col justify-between space-y-6 lg:space-y-7">
                    {/* 데스크톱 전용 헤드카피 (모바일에서는 이미지 상단에 표시) */}
                    <div className="hidden lg:block space-y-2.5">
                      <span className="block font-elegant text-[12pt] font-semibold tracking-[0.2em] text-[#D8BB94] uppercase">
                        POINT 01 · RELATIONSHIP ANALYSIS
                      </span>
                      <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white leading-[1.2] md:leading-[1.22] break-keep">
                        두 사람의 운세를 따로 보는 궁합이 아닙니다.<br />
                        오직 두 사람의 <span className="gradient-text-reunion">‘관계’ 하나만</span><br />
                        <span className="gradient-text-reunion">깊이 해부</span>합니다.
                      </h2>
                    </div>

                    <p className="text-[17px] md:text-[18px] text-[#EDE6DA] opacity-80 leading-[1.8] break-keep font-light">
                      일반적인 궁합 풀이로는 두 사람이 왜 서로에게 끌리고, 왜 같은 문제로 반복해서 부딪히는지 충분히 이해하기 어렵습니다.<br />
                      <span className="text-[#D8BB94] font-medium opacity-100">
                        두 사람의 선천 기질과 감정 반응, 반복되는 관계 패턴을 집중적으로 분석합니다.
                      </span><br />
                      각자의 타고난 성향을 살펴보는 데 그치지 않고, 서로의 기대와 표현 방식, 갈등이 생기는 지점까지 함께 읽어냅니다. 이를 통해 궁합의 좋고 나쁨을 넘어 <strong className="font-semibold text-white">두 사람의 관계를 이해하고 조율할 수 있는 기준</strong>을 제시합니다.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        "두 사람의 선천 기질과 차이",
                        "감정 표현과 상호작용 패턴",
                        "반복되는 갈등의 핵심 구조",
                        "관계의 강점과 조율 방향"
                      ].map((item, idx) => (
                        <div key={idx} className="detail-glass-card flex items-center gap-4 p-4 rounded-2xl border border-[#B78C86]/20 hover:border-[#D8BB94]/40 bg-gradient-to-b from-[#4A1F2D]/25 to-[#240C18]/30 transition-all">
                          <div className="w-2 h-2 rounded-full bg-[#D8BB94] shadow-[0_0_10px_rgba(216,187,148,0.6)]"></div>
                          <span className="text-white/90 font-semibold">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            </section>

            {/* 12. POINT 02 — 선천코드와 관계심리 교차 분석 */}
            <CompatibilityAnalysisMethod />

            {/* 13. POINT 03 — 무의식적 관계 패턴 및 6가지 핵심 분석 축 */}
            <section id="point-03" className="mb-40 text-center scroll-mt-28 md:scroll-mt-36 w-full max-w-[1280px] mx-auto">
              <Reveal className="w-full">
                {/* 1. 상단 전환 영역: 꽃 장식 구분선 + POINT 03 헤더 카피 + 설명 문구 */}
                <div className="max-w-4xl mx-auto mb-10 md:mb-14 space-y-6">
                  {/* 중앙 꽃 장식 및 좌우 가로 구분선 */}
                  <BaekdohwaDivider className="mb-8 md:mb-10" theme="compatibility" />

                  <span className="block font-elegant text-[12pt] font-semibold tracking-[0.2em] text-[#D8BB94] uppercase mb-4">
                    POINT 03 · HIDDEN RELATIONSHIP CODES
                  </span>

                  <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white mb-6 leading-[1.25] md:leading-[1.3] break-keep">
                    &ldquo;사랑하는 마음은 같았지만,<br className="sm:hidden" />
                    <span className="gradient-text-reunion"> 반복되는 갈등 속 숨겨진 관계의 패턴</span>을 마주합니다.&rdquo;
                  </h2>

                  <div className="text-[17px] md:text-[18px] text-[#EDE6DA] opacity-80 font-light leading-relaxed max-w-2xl mx-auto break-keep space-y-3">
                    <p>
                      서로를 사랑하면서도 같은 말에 상처받고,<br className="hidden sm:inline" />
                      같은 문제로 부딪히는 순간이 있습니다.
                    </p>
                    <p>
                      그 반복의 이면에는 서로 다른{' '}
                      <span className="text-[#D8BB94] font-medium opacity-100">
                        선천 기질과 익숙한 감정 반응의 패턴
                      </span>이 숨어 있을 수 있습니다.
                    </p>
                    <p>
                      두 사람이 왜 특정 상황에서 같은 반응을 반복하는지,<br className="hidden sm:inline" />
                      그 이면의 기대와 방어 방식을 함께 살펴보며<br className="hidden sm:inline" />
                      <span className="text-[#D8BB94] font-medium opacity-100">
                        서로를 이해하기 위한 새로운 관계의 기준을 찾아갑니다.
                      </span>
                    </p>
                  </div>
                </div>

                {/* 2. 기존 16:9 대표 분석 이미지 */}
                <div className="w-full max-w-[1280px] mx-auto mb-20 md:mb-28">
                  <Image 
                    src={SIX_PILLARS_IMAGE_CONFIG.src} 
                    alt={SIX_PILLARS_IMAGE_CONFIG.alt} 
                    width={SIX_PILLARS_IMAGE_CONFIG.width}
                    height={SIX_PILLARS_IMAGE_CONFIG.height}
                    className="w-full h-auto rounded-[32px] md:rounded-[40px] shadow-2xl border border-[#B78C86]/30 object-contain" 
                  />
                </div>

                {/* 3. [6대 관점 파노라마 와이드 배너 & 6개 분석 카드 통합] SIX PERSPECTIVES */}
                <CompatibilitySixPerspectivesBanner />
              </Reveal>
            </section>

            {/* 14. 7개 장의 궁합 리포트 목차 */}
            <CompatibilityReportTableOfContents />

            {/* 15. PART 07 — 백도화 궁합 실천 처방 (목차 뒤 슬림형 중간 CTA 패널) */}
            <section className="mb-0 w-full max-w-[1280px] mx-auto">
              <Reveal className="w-full">
                <div className="w-full gungjung-glass py-7 md:py-8 px-6 sm:px-8 md:px-10 lg:px-12 rounded-[24px] md:rounded-[30px] border border-[#B78C86]/35 bg-gradient-to-r from-[#4A1F2D]/50 via-[#2A0C1A]/60 to-[#4A1F2D]/50 relative overflow-hidden shadow-xl backdrop-blur-md">
                  {/* 은은한 배경 오라 */}
                  <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#5A2638]/15 rounded-full blur-[90px] pointer-events-none" />

                  <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
                    {/* 좌측 (약 62%): 메인 제목 + 설명 */}
                    <div className="w-full lg:w-[62%] text-center lg:text-left">
                      <h3 className="text-xl sm:text-2xl md:text-[26px] lg:text-[28px] font-elegant font-bold text-white leading-snug break-keep">
                        이제, <span className="gradient-text-reunion">두 사람의 이야기를 펼쳐볼 차례입니다.</span>
                      </h3>
                      <p className="mt-2.5 sm:mt-3 text-[14.5px] sm:text-[15.5px] md:text-[16px] text-[#EDE6DA]/85 font-light leading-relaxed break-keep">
                        서로의 선천 기질부터 끌림과 갈등의 구조, 우리 관계에 필요한 실천의 방향까지.<br className="hidden sm:inline" />{' '}
                        두 사람의 코드를 함께 읽는 프리미엄 궁합 리포트를 만나보세요.
                      </p>
                    </div>

                    {/* 우측 (약 38%): 구매 버튼 + 구성 안내 */}
                    <div className="w-full lg:w-[38%] flex flex-col items-center lg:items-end justify-center shrink-0">
                      <button 
                        type="button"
                        onClick={handlePurchase}
                        className="w-full sm:w-auto min-w-[280px] sm:min-w-[320px] lg:min-w-[340px] py-4 sm:py-4.5 px-7 sm:px-8 rounded-2xl font-bold text-base sm:text-[16.5px] hover:scale-[1.01] active:scale-95 transition-all duration-300 bg-gradient-to-br from-[#5A2638] to-[#4A1F2D] border border-[rgba(199,169,122,0.45)] text-[#FAF6EE] shadow-[0_4px_18px_rgba(90,38,56,0.35)] hover:shadow-[0_0_22px_rgba(183,140,134,0.45)] hover:brightness-110 text-center"
                      >
                        나의 선천코드 궁합 리포트 신청하기 · 59,000원
                      </button>
                      <p className="mt-2.5 text-[12px] sm:text-[13px] text-[#D8BB94]/85 font-light tracking-wide text-center lg:text-right">
                        1:1 맞춤 PDF · 오행 아트카드 + 수호자 카드 2종 증정
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </section>


            {/* ══════════════════════════════════════════════════════════════════════ */}
            {/* C. 개인 맞춤 상품 구성 영역 */}
            {/* ══════════════════════════════════════════════════════════════════════ */}

            {/* 16. POINT 04 — 두 사람을 위한 1:1 맞춤 궁합 분석서 */}
            <CompatibilityPersonalizedReportPoint />

            {/* 17. PERSONALIZED SPECIAL GIFT — 오행 아트카드·수호자 카드 */}
            <CompatibilitySpecialGift />

            {/* 18. POINT 05 — 두 사람을 위한 실전 관계 처방 */}
            <CompatibilityPrescriptionSample />

            {/* 19. POINT 06 — 프리미엄 궁합 리포트 미리보기 */}
            <CompatibilityReportPreview />

            {/* 20. PREMIUM COMPATIBILITY ARCHIVE — 프리미엄 소장용 관계 비급 */}
            <CompatibilityRoyalArchivePoint />

            {/* 21. COMPARISON MATRIX — 일반 궁합과 백도화 리포트 비교 */}
            <CompatibilityComparisonTable />


            {/* ══════════════════════════════════════════════════════════════════════ */}
            {/* D. 변화와 감정적 설득 영역 */}
            {/* ══════════════════════════════════════════════════════════════════════ */}

            {/* 22. 3단계 관계 변화 소개 & 23. 번호형 3개 변화 카드 */}
            <CompatibilityChangeScenario />

            {/* 24. RELATIONSHIP SCENARIOS — 가상 관계 변화 사례 */}
            <CompatibilityTestimonials />

            {/* 25. FINAL AWAKENING — 서로의 다름을 이해하고 관계의 기준을 세우는 메시지 */}
            <CompatibilityRealTransformationBanner />

            {/* 26. BEGIN YOUR JOURNEY — 중간 신청 유도 CTA */}
            <section className="mb-36 md:mb-40 max-w-4xl mx-auto px-4">
              <Reveal>
                <div className="gungjung-glass p-8 md:p-14 rounded-[36px] border border-[#B78C86]/35 bg-gradient-to-b from-[#4A1F2D]/40 via-[#3A1623]/35 to-[#1A0A14]/45 text-center relative overflow-hidden shadow-2xl backdrop-blur-md">
                  {/* 은은한 배경 오라 */}
                  <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#5A2638]/20 rounded-full blur-[80px] pointer-events-none" />

                  <span className="block font-elegant text-xs md:text-sm font-semibold tracking-[0.25em] text-[#D8BB94] uppercase mb-4">
                    BEGIN YOUR JOURNEY
                  </span>

                  <h3 className="text-2xl md:text-[34px] font-elegant font-bold text-white mb-4 leading-snug break-keep">
                    두 사람의 인연을 <span className="gradient-text-reunion">다시 읽을 준비가 되셨나요?</span>
                  </h3>

                  <p className="text-sm md:text-base text-[#EDE6DA]/85 font-light leading-relaxed max-w-2xl md:max-w-3xl mx-auto break-keep mb-6">
                    서로의 차이를 이해하고 관계의 방향을 새롭게 바라보는 맞춤 궁합 리포트를 만나보세요.
                  </p>

                  <div className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-[#5A2638]/40 border border-[#B78C86]/40 text-xs md:text-sm text-[#D8BB94] font-medium mb-8">
                    59,000원 · 1:1 맞춤 PDF · 오행 아트카드 + 수호자 카드 2종 포함
                  </div>

                  {/* 구매 버튼 */}
                  <div className="flex flex-col sm:flex-row gap-3.5 max-w-md mx-auto items-stretch sm:items-center">
                    <button
                      type="button"
                      onClick={handleAddToCart}
                      className="py-3.5 px-6 rounded-2xl font-bold text-sm md:text-base border border-[#B78C86]/40 text-[#D8BB94] hover:bg-[#5A2638]/30 hover:border-[#B78C86]/70 transition-all duration-300 text-center shrink-0 order-2 sm:order-1"
                    >
                      장바구니 담기
                    </button>
                    <button
                      type="button"
                      onClick={handlePurchase}
                      className="py-4 px-8 rounded-2xl font-bold text-base md:text-lg hover:scale-[1.01] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 text-[#FAF7F2] shadow-[0_4px_20px_rgba(90,38,56,0.4)] hover:shadow-[0_0_30px_rgba(183,140,134,0.45)] hover:brightness-110 flex-1 order-1 sm:order-2"
                      style={{
                        background: 'linear-gradient(135deg, #5A2638 0%, #4A1F2D 100%)',
                        border: '1px solid rgba(199, 169, 122, 0.45)',
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
            {/* E. 추천 대상 및 정보 안내 영역 */}
            {/* ══════════════════════════════════════════════════════════════════════ */}

            {/* 27. TARGET AUDIENCE — 두 분을 위한 리포트인가요? */}
            <CompatibilityRecommendedAudience />

            {/* 28. LIFELONG COMPASS FOR TWO — 다시 펼쳐보는 관계 설계도 */}
            <CompatibilityValueSummary />

            {/* 29. PROCESS & INFO — 제작 및 전달 과정 (풍요 2단 그리드 완벽 일치) */}
            <section className="mb-32 md:mb-40">
              <div className="relative">
                <Reveal>
                  <div className="text-center mb-16 space-y-4">
                    <span className="block font-elegant text-[12pt] font-semibold tracking-[0.2em] text-[#D8BB94] uppercase mb-4">
                      PROCESS & INFO
                    </span>
                    <h2 className="text-3xl md:text-5xl font-elegant font-bold text-white tracking-wide">
                      리포트는 <span className="gradient-text-reunion">이렇게</span> <span className="text-[#D8BB94]">준비됩니다</span>
                    </h2>
                    <p className="text-[18px] text-[#EDE6DA] opacity-75 max-w-3xl mx-auto break-keep font-light leading-relaxed">
                      백도화 프리미엄 궁합 리포트는 두 분의 선천 정보를 바탕으로<br />
                      관계의 특성과 상호작용을 분석하여 작성되는 디지털 맞춤 리포트입니다.
                    </p>
                  </div>
                </Reveal>

                <div className="grid lg:grid-cols-12 gap-8 w-full max-w-[1280px] mx-auto items-stretch">
                  {/* 리포트 분석 및 전달 과정 (좌측 7칸) */}
                  <div className="lg:col-span-7 h-full">
                    <Reveal className="h-full">
                      <div className="gungjung-glass p-8 border-[#B78C86]/20 h-full flex flex-col justify-between">
                        <div>
                          <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
                            <span className="w-1.5 h-6 bg-[#D8BB94] rounded-full"></span>
                            리포트 분석 및 전달 과정
                          </h3>

                          <div className="space-y-8 relative pl-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-white/10">
                            {[
                              { title: "STEP 01. 두 분의 선천 정보 입력 및 신청", desc: "신청 시 작성해주신 본인 및 상대방의 생년월일시 등 선천 정보를 기준으로 분석 준비가 시작됩니다." },
                              { title: "STEP 02. 선천 기질 및 상호작용 정밀 해석", desc: "두 분의 타고난 기질 조화, 무의식적 끌림의 이유, 반복되는 갈등의 뿌리와 현실적 소통 방식을 종합 분석합니다." },
                              { title: "STEP 03. 맞춤형 디지털 리포트 전달", desc: "완성된 리포트는 언제든 다시 펼쳐보며 관계를 점검하실 수 있도록 디지털 문서(PDF) 형태로 전달됩니다." },
                              { title: "STEP 04. 정보 확인 안내", desc: "두 분의 생년월일시 등 입력 정보에 따라 해석 방향이 달라질 수 있으므로 신청 전 정보를 정확히 확인해 주세요." }
                            ].map((step, idx) => (
                              <div key={idx} className="relative group">
                                <div className="absolute -left-[22px] top-1.5 w-3 h-3 rounded-full bg-[#1A0A14] border-2 border-[#D8BB94] group-hover:bg-[#D8BB94] transition-colors duration-300"></div>
                                <h4 className="text-base font-bold text-white mb-2">{step.title}</h4>
                                <p className="text-sm text-[#EDE6DA]/60 break-keep font-light">{step.desc}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Reveal>
                  </div>

                  {/* 정확한 분석을 위해 필요한 정보 (우측 5칸) */}
                  <div className="lg:col-span-5 h-full">
                    <Reveal className="h-full">
                      <div className="gungjung-glass p-8 border-[#B78C86]/20 h-full flex flex-col justify-between bg-gradient-to-b from-white/[0.02] to-transparent">
                        <div>
                          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="w-1.5 h-6 bg-[#D8BB94] rounded-full"></span>
                            정확한 분석을 위해 필요한 정보
                          </h3>
                          <p className="text-sm text-[#EDE6DA]/50 mb-8 break-keep font-light">
                            두 분의 정밀한 궁합 분석을 위해 아래의 기본 정보가 필요합니다.
                          </p>

                          <div className="grid grid-cols-2 gap-3 mb-6">
                            {[
                              { label: "신청자 및 상대방 이름", icon: "fa-user-group" },
                              { label: "두 분의 생년월일", icon: "fa-calendar-days" },
                              { label: "두 분의 태어난 시간", icon: "fa-clock" },
                              { label: "양력/음력 구분", icon: "fa-circle-half-stroke" },
                              { label: "성별 및 관계 상태", icon: "fa-heart" },
                              { label: "리포트 수령 이메일", icon: "fa-envelope" }
                            ].map((info, idx) => (
                              <div key={idx} className="flex items-center gap-3 p-3 bg-white/[0.02] rounded-xl border border-white/5">
                                <div className="w-8 h-8 rounded-lg bg-[#5A2638]/30 flex items-center justify-center text-[#D8BB94] shrink-0">
                                  <i className={`fas ${info.icon} text-xs`}></i>
                                </div>
                                <span className="text-xs text-[#EDE6DA]/80 font-medium">{info.label}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* 출생시간 안내 박스 */}
                        <div className="pt-5 border-t border-white/10 space-y-1.5">
                          <p className="text-xs md:text-[13px] font-bold text-[#D8BB94] flex items-center gap-1.5 break-keep">
                            <i className="fas fa-circle-info text-[11px] shrink-0 text-[#D8BB94]"></i>
                            <span>출생시간을 모르셔도 신청하실 수 있습니다.</span>
                          </p>
                          <p className="text-xs text-[#EDE6DA]/75 leading-relaxed break-keep font-light pl-4">
                            다만 한 분 또는 두 분의 출생시간이 확인되지 않으면 시주(時柱)를 포함한 일부 심층 궁합 분석이 제한될 수 있습니다.
                          </p>
                        </div>
                      </div>
                    </Reveal>
                  </div>
                </div>
              </div>
            </section>

            {/* 30. FREQUENTLY ASKED QUESTIONS — FAQ */}
            <CompatibilityFAQ />

            {/* 31. PURCHASE NOTICE — 구매 전 확인사항 */}
            <CompatibilityPurchaseNotice />

            {/* 32. BEGIN YOUR JOURNEY — 최종 신청 CTA */}
            <section className="mb-20 md:mb-24 w-full max-w-[1280px] mx-auto">
              <Reveal>
                {/* ① 16:9 와이드 단독 대표 이미지 */}
                <div className="relative w-full rounded-[40px] overflow-hidden border border-white/10 shadow-2xl aspect-[16/9] bg-[#14080E] mb-14 md:mb-16 group">
                  <Image 
                    src="/image/compatibility/compatibility-moonlit-destiny-cta.webp" 
                    alt="선천코드 프리미엄 궁합 리포트 - 관계의 흐름을 바꾸는 시작" 
                    width={1671}
                    height={941}
                    className="w-full h-full object-cover object-center transition-transform duration-[10000ms] group-hover:scale-105" 
                  />
                </div>

                {/* ② 이미지 아래 텍스트 영역 (중앙 정렬) */}
                <div className="text-center max-w-3xl mx-auto px-4 mb-10 md:mb-12">
                  <span className="block font-elegant text-[12pt] font-semibold tracking-[0.2em] uppercase text-[#D8BB94] mb-6">
                    BEGIN YOUR JOURNEY
                  </span>
                  
                  <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white mb-6 leading-[1.25] md:leading-[1.3] break-keep">
                    &ldquo;관계의 흐름을 바꾸는 첫 장을 여십시오.&rdquo;
                  </h2>
                  
                  <p className="text-[18px] text-[#EDE6DA]/90 leading-relaxed font-light break-keep max-w-2xl mx-auto">
                    상대의 눈치와 막연한 불안 속에서 헤매던 시간은 끝났습니다.<br />
                    이제는 두 사람 사이의 관계 작동 방식을 읽고,<br className="hidden sm:inline" />
                    나에게 맞는 사랑의 기준을 단단히 세울 차례입니다.
                  </p>
                </div>

                {/* ③ 독립 슬림 프리미엄 구매 카드 */}
                <div 
                  className="max-w-2xl mx-auto py-8 px-6 sm:py-10 sm:px-10 rounded-[32px] sm:rounded-[36px] border border-[#B78C86]/35 text-center relative overflow-hidden backdrop-blur-md"
                  style={{
                    background: 'radial-gradient(ellipse at 50% 0%, rgba(90, 38, 56, 0.45) 0%, rgba(74, 31, 45, 0.35) 50%, rgba(58, 22, 35, 0.45) 100%)',
                    boxShadow: '0 10px 40px rgba(74, 31, 45, 0.20)'
                  }}
                >
                  {/* 은은한 배경 오라 */}
                  <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#5A2638]/20 rounded-full blur-[80px] pointer-events-none" />

                  <div className="relative z-10">
                    {/* 1. 상품명 */}
                    <h3 className="font-elegant font-bold text-xl sm:text-[22px] text-[#FAF7F2] tracking-tight mb-2 break-keep">
                      백도화 선천코드 프리미엄 궁합 리포트
                    </h3>

                    {/* 2. 상품 구성 한 줄 표시 */}
                    <p className="text-[13.5px] sm:text-[14.5px] text-[#EDE6DA]/90 font-light mb-4 break-keep">
                      프리미엄 소장용 1:1 맞춤 PDF 비급 · 오행 아트카드 1장 + 수호자 카드 1장 증정
                    </p>

                    {/* 3. 가격 */}
                    <div className="mb-5">
                      <span className="text-3xl sm:text-[36px] font-elegant font-bold text-[#FAF7F2] tracking-tight">
                        59,000<span className="text-2xl sm:text-[28px] font-medium ml-1">원</span>
                      </span>
                    </div>

                    {/* 4. 구매 버튼 (장바구니 담기 + 바로 신청하기) */}
                    <div className="w-full max-w-md mx-auto flex flex-col sm:flex-row gap-3">
                      <button
                        type="button"
                        onClick={handleAddToCart}
                        className="py-3.5 sm:py-4 px-6 rounded-2xl font-bold text-sm md:text-base border border-[#B78C86]/40 text-[#D8BB94] hover:bg-[#5A2638]/30 hover:border-[#B78C86]/70 transition-all duration-300 text-center shrink-0 order-2 sm:order-1"
                      >
                        장바구니 담기
                      </button>
                      <button 
                        type="button"
                        onClick={handlePurchase}
                        className="py-4 sm:py-4.5 px-8 rounded-2xl font-bold text-base sm:text-[17px] hover:scale-[1.01] active:scale-95 transition-all duration-300 flex-1 text-[#FAF6EE] shadow-[0_4px_20px_rgba(90,38,56,0.4)] hover:shadow-[0_0_30px_rgba(183,140,134,0.45)] hover:brightness-110 text-center order-1 sm:order-2"
                        style={{
                          background: 'linear-gradient(135deg, #5A2638 0%, #4A1F2D 100%)',
                          border: '1px solid rgba(199, 169, 122, 0.45)',
                        }}
                      >
                        나의 궁합 리포트 신청하기
                      </button>
                    </div>

                    {/* 5. 상품 제공 안내 */}
                    <p className="text-[12px] sm:text-[13px] text-[#EDE6DA]/75 font-light mt-4 break-keep">
                      ※ 주문 접수 후 두 분의 사주 정보를 바탕으로 순차 제작되는 디지털 맞춤 리포트입니다.
                    </p>
                  </div>
                </div>
              </Reveal>
            </section>

            {/* 브랜드 시그니처 엔딩 섹션 (최종 구매 CTA 아래, 공통 푸터 위) */}
            <BrandSignatureEnding theme="compatibility" />

          </div>
        </div>
        <Footer />
      </GlobalBackground>
    </main>
  )
}
