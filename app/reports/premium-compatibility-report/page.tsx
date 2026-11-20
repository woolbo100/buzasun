'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Reveal from '@/components/Reveal'
import GlobalBackground from '@/components/GlobalBackground'
import Link from 'next/link'
import Image from 'next/image'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import ReportCommonInfo from '@/components/ReportCommonInfo'
import { useRouter } from 'next/navigation'
import { addToCart } from '@/hooks/useCart'
import { ChevronRight } from 'lucide-react'
import RecommendedForCards from '@/components/RecommendedForCards'
import BrandSignatureEnding from '@/components/reports/common/BrandSignatureEnding'

// 새로 추가된 궁합 전용 18개 설득 블록 독립 컴포넌트들
import CompatibilityCoreDifferentiation from '@/components/reports/compatibility-report/CompatibilityCoreDifferentiation'
import WhyCompatibilityReport from '@/components/reports/compatibility-report/WhyCompatibilityReport'
import QuestionShiftComparison from '@/components/reports/common/QuestionShiftComparison'
import CompatibilityPrescriptionSample from '@/components/reports/compatibility-report/CompatibilityPrescriptionSample'
import CompatibilityPatternChecklist from '@/components/reports/compatibility-report/CompatibilityPatternChecklist'
import CompatibilityAdviceComparison from '@/components/reports/compatibility-report/CompatibilityAdviceComparison'
import CompatibilityRelationshipDiagram from '@/components/reports/compatibility-report/CompatibilityRelationshipDiagram'
import CompatibilityAnalysisMethod from '@/components/reports/compatibility-report/CompatibilityAnalysisMethod'
import CompatibilityCaseComparison from '@/components/reports/compatibility-report/CompatibilityCaseComparison'
import CompatibilityComparisonTable from '@/components/reports/compatibility-report/CompatibilityComparisonTable'
import CompatibilityReportTableOfContents from '@/components/reports/compatibility-report/CompatibilityReportTableOfContents'
import CompatibilityProductionTimeline from '@/components/reports/compatibility-report/CompatibilityProductionTimeline'
import CompatibilityReportPreview from '@/components/reports/compatibility-report/CompatibilityReportPreview'
import CompatibilityChangeScenario from '@/components/reports/compatibility-report/CompatibilityChangeScenario'
import CompatibilityRecommendedAudience from '@/components/reports/compatibility-report/CompatibilityRecommendedAudience'
import CompatibilityTestimonials from '@/components/reports/compatibility-report/CompatibilityTestimonials'
import CompatibilityPhilosophy from '@/components/reports/compatibility-report/CompatibilityPhilosophy'
import CompatibilityValueSummary from '@/components/reports/compatibility-report/CompatibilityValueSummary'
import CompatibilityFAQ from '@/components/reports/compatibility-report/CompatibilityFAQ'
import CompatibilityPurchaseNotice from '@/components/reports/compatibility-report/CompatibilityPurchaseNotice'
import CompatibilitySixPerspectivesBanner from '@/components/reports/compatibility-report/CompatibilitySixPerspectivesBanner'
import CompatibilitySpecialGift from '@/components/reports/compatibility-report/CompatibilitySpecialGift'
import CompatibilityRealTransformationBanner from '@/components/reports/compatibility-report/CompatibilityRealTransformationBanner'

// ══════════════════════════════════════════════════════════════════════
// 히어로 & 공감 섹션 가로 16:9 이미지 설정 (교체 가능 구조)
// ══════════════════════════════════════════════════════════════════════
const HERO_IMAGE_CONFIG = {
  src: '/image/compatibility/p1.webp',
  alt: '프리미엄 궁합 리포트 메인 히어로 16:9',
  width: 1440,
  height: 810,
}

const EMPATHY_IMAGE_CONFIG = {
  src: '/image/compatibility/p2.webp',
  alt: '프리미엄 궁합 리포트 공감 가로 비주얼 16:9',
  width: 1440,
  height: 810,
}

// 교차 스토리 1 & 2 세로 3:4 이미지 설정
const COMPATIBILITY_STORY_IMAGE_1 = {
  src: '/image/compatibility/p3.webp',
  alt: '프리미엄 궁합 리포트 첫 번째 스토리 - 이해의 순간',
  width: 900,
  height: 1200,
}

const COMPATIBILITY_STORY_IMAGE_2 = {
  src: '/image/compatibility/p4.webp',
  alt: '프리미엄 궁합 리포트 두 번째 스토리 - 숨겨진 인연의 연결',
  width: 900,
  height: 1200,
}

export default function PremiumCompatibilityReportPage() {
  useScrollAnimation()
  const router = useRouter()

  // 1. 기존 바로 결제 로직 보존
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
      name: '프리미엄 궁합 리포트',
      price: 59000,
      image: '/image/premium_compatibility_bg.png',
      type: 'digital_report',
      category: 'PREMIUM REPORT'
    }, 1)
    alert("장바구니에 담았습니다.")
  }

  // 3. 리포트 샘플 미리보기 스크롤 보조 함수
  const scrollToSample = (e: React.MouseEvent) => {
    e.preventDefault()
    const element = document.getElementById('sample-preview')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <main className="detail-page compatibility-report-page relative min-h-screen bg-[#0D0709]">
      {/* 재회비방 전용 딥 다크 플럼 x 버건디 그라데이션 배경 시스템 동일 적용 */}
      <GlobalBackground
        src="/image/main4.png"
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

        <div className="relative z-10 pt-36 md:pt-40 pb-20">
          <div className="container-premium">
            
            {/* ══════════════════════════════════════════════════════════════════════ */}
            {/* SECTION 01. 히어로 — 제목 → 16:9 메인 이미지 → 버튼 → 공감 문구 → 공감 16:9 이미지 */}
            {/* ══════════════════════════════════════════════════════════════════════ */}
            <section className="text-center mb-36">
              <Reveal delayMs={100}>
                {/* 1. 상단 배지 */}
                <div className="mb-6">
                  <span className="inline-block px-5 py-1.5 rounded-full text-[12pt] font-elegant font-semibold tracking-[0.25em] uppercase bg-[#5A2638]/30 border border-[#B78C86]/40 text-[#D8BB94]">
                    BAEKDOHWA PREMIUM COMPATIBILITY REPORT
                  </span>
                </div>

                {/* 2. 보조 카피 */}
                <p className="text-[18px] text-[#D8BB94] font-medium tracking-wide mb-4">
                  두 사람의 선천코드와 관계 패턴을 함께 읽는 1:1 프리미엄 궁합 설계도
                </p>

                {/* 3. 메인 제품명 제목 */}
                <h1 className="text-3xl md:text-6xl font-elegant font-bold mb-10 text-white leading-[1.25] md:leading-[1.3] break-keep">
                  프리미엄 <span className="gradient-text-reunion">궁합 리포트</span>
                </h1>

                {/* 4. 메인 가로 이미지 (16:9 비율 풀사이즈 느낌) */}
                <div className="relative w-full max-w-[1280px] mx-auto mb-6 md:mb-8 rounded-[40px] overflow-hidden border border-white/10 shadow-2xl group aspect-[16/9] bg-[#14080E]">
                  <Image 
                    src={HERO_IMAGE_CONFIG.src} 
                    alt={HERO_IMAGE_CONFIG.alt}
                    width={HERO_IMAGE_CONFIG.width}
                    height={HERO_IMAGE_CONFIG.height}
                    priority
                    className="w-full h-full object-cover transition-transform duration-[10000ms] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0514]/40 via-transparent to-transparent pointer-events-none"></div>
                </div>

                {/* 5. 메인 이미지 하단 기울어진 감성 문구 */}
                <p className="text-[18px] text-[#EDE6DA] opacity-90 leading-relaxed max-w-2xl mx-auto break-keep font-elegant italic mb-6 md:mb-7">
                  두 사람의 인연은 우연이 아니라 흐름입니다.
                </p>

                {/* 4. 메인 프리미엄 상품 소개 & 구매 CTA 상자 (하단 공감 문구와의 여유로운 숨 공간 확보) */}
                <div className="max-w-[1280px] mx-auto mb-36 md:mb-48 lg:mb-52 text-left">
                  <div 
                    className="relative rounded-[32px] md:rounded-[40px] p-7 sm:p-10 lg:p-12 border border-[#B78C86]/35 overflow-hidden shadow-2xl backdrop-blur-md"
                    style={{
                      background: 'radial-gradient(ellipse at 50% 0%, rgba(90, 38, 56, 0.45) 0%, rgba(74, 31, 45, 0.35) 50%, rgba(58, 22, 35, 0.45) 100%)',
                      boxShadow: '0 10px 40px rgba(74, 31, 45, 0.20)'
                    }}
                  >
                    {/* 은은한 배경 오라 */}
                    <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#5A2638]/20 rounded-full blur-[90px] pointer-events-none" />

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
                      {/* 좌측 (약 58%): 라벨 + 메인 카피 + 설명 + 가격 + 버튼 */}
                      <div className="lg:col-span-7 space-y-5 md:space-y-6">
                        {/* 1. 상단 라벨 */}
                        <div>
                          <span className="inline-flex items-center justify-center py-1.5 px-3.5 rounded-full bg-[#5A2638]/70 border border-[#B78C86]/60 text-[#FAF7F2] text-xs font-bold tracking-wider whitespace-nowrap">
                            선천코드 프리미엄 궁합 리포트
                          </span>
                        </div>

                        {/* 2. 메인 카피 */}
                        <h3 className="text-2xl sm:text-3xl md:text-[34px] font-elegant font-bold text-white leading-[1.35] md:leading-[1.4] break-keep">
                          선천코드로 읽는 <span className="gradient-text-reunion">두 사람의 인연 설계도</span>
                        </h3>

                        {/* 3. 설명 문구 */}
                        <p className="text-[16px] md:text-[18px] text-[#EDE6DA]/90 leading-[1.7] font-light break-keep max-w-xl">
                          두 사람의 선천코드와 관계 패턴을 함께 읽는 1:1 프리미엄 궁합 설계도. 서로의 다름을 이해하는 순간 소모적인 오해는 멈추고 온전한 신뢰가 시작됩니다.
                        </p>

                        {/* 4. 가격 영역 & 5. 상품 정보 */}
                        <div className="pt-2">
                          <div className="flex flex-wrap items-baseline gap-3">
                            <span className="text-3xl sm:text-4xl md:text-[42px] font-elegant font-bold text-[#FAF7F2] tracking-tight">
                              69,000원
                            </span>
                            <span className="text-xs sm:text-sm text-[#D8BB94] font-medium tracking-wide">
                              1:1 맞춤 PDF 리포트 · 두 사람의 선천코드 정밀 분석
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

                      {/* 우측 (약 42%): 프리미엄 리포트 대표 목업 이미지 */}
                      <div className="lg:col-span-5 w-full flex justify-center">
                        <div className="relative w-full max-w-[420px] aspect-[4/3] rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-black/30 group">
                          <Image
                            src="/image/compatibility/p2.webp"
                            alt="선천코드로 읽는 두 사람의 인연 설계도"
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
                    &ldquo;분명 사랑하는데,<br className="hidden sm:inline" />
                    왜 우리는 같은 이유로 <span className="gradient-text-reunion">계속 상처를 주고받을까?</span>&rdquo;
                  </p>
                  <div className="text-[18px] text-[#EDE6DA]/90 space-y-3 font-light leading-relaxed break-keep max-w-2xl mx-auto">
                    <p>한 사람은 대화를 원하고, 다른 사람은 입을 닫는다.</p>
                    <p>한 사람은 확인받고 싶어 하고, 다른 사람은 간섭받는다고 느낀다.</p>
                    <p>같은 사건인데 서로가 받아들이는 의미는 전혀 다르다.</p>
                    <p className="pt-2 text-[#D8BB94] font-medium leading-relaxed">
                      사랑이 부족해서가 아니라, 서로의 반응 방식이 충돌하고 있을 수 있습니다.
                    </p>
                  </div>
                </div>

                {/* 8. 공감 문구 아래 추가 가로 이미지 (16:9, 교체 가능 구조) */}
                <div className="relative w-full max-w-[1280px] mx-auto rounded-[40px] overflow-hidden border border-white/10 shadow-2xl group aspect-[16/9] bg-[#14080E]">
                  <Image 
                    src={EMPATHY_IMAGE_CONFIG.src} 
                    alt={EMPATHY_IMAGE_CONFIG.alt}
                    width={EMPATHY_IMAGE_CONFIG.width}
                    height={EMPATHY_IMAGE_CONFIG.height}
                    className="w-full h-full object-cover transition-transform duration-[10000ms] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0514]/40 via-transparent to-transparent pointer-events-none"></div>
                </div>
              </Reveal>
            </section>

            {/* ══════════════════════════════════════════════════════════════════════ */}
            {/* SECTION 02. 관계 반복 패턴 체크리스트 */}
            {/* ══════════════════════════════════════════════════════════════════════ */}
            <CompatibilityPatternChecklist />

            {/* ══════════════════════════════════════════════════════════════════════ */}
            {/* NEW. 궁합이 좋다는 말보다 중요한 것은 왜 부딪히는지 아는 것 (차별화) */}
            {/* ══════════════════════════════════════════════════════════════════════ */}
            <CompatibilityCoreDifferentiation />

            {/* ══════════════════════════════════════════════════════════════════════ */}
            {/* [교차 스토리 1] THE MOMENT OF UNDERSTANDING (좌측 텍스트 + 우측 이미지) */}
            {/* ══════════════════════════════════════════════════════════════════════ */}
            <section className="mb-24 md:mb-32">
              <Reveal>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 xl:gap-20 items-center">
                  {/* 좌측 55%: 라벨 + 제목 + 본문 및 마지막 핵심 후킹 */}
                  <div className="lg:col-span-7 space-y-6 text-left break-keep order-2 lg:order-1">
                    <div>
                      <span className="block font-elegant text-[12pt] font-semibold tracking-[0.2em] text-[#D8BB94] uppercase mb-4">
                        THE MOMENT OF UNDERSTANDING
                      </span>
                      <h2 className="text-2xl md:text-[34px] lg:text-[36px] font-elegant font-bold mb-6 leading-[1.3] break-keep">
                        <span className="text-[#FAF7F2]">우리는 왜 같은 사랑을</span><br />
                        <span className="gradient-text-reunion">서로 다른 방식으로 표현할까요?</span>
                      </h2>
                    </div>

                    {/* 본문 서사 */}
                    <div className="space-y-4 text-[17px] md:text-[18px] text-[#EDE6DA] opacity-85 font-light leading-[1.8] break-keep">
                      <p>
                        한 사람은 끊임없는 대화와 표현으로 사랑을 확인하려 하고, 다른 한 사람은 묵묵한 신뢰와 혼자만의 시간으로 관계를 지키려 합니다.
                      </p>
                      <p className="text-[#FAF7F2] font-semibold">
                        서로의 사랑 언어가 다르다는 사실을 모른 채 상대의 방식을 의심하고,<br />
                        맞추기만을 강요하며 지쳐갔던 시간들.
                      </p>

                      {/* 핵심 경각심 강조 카드 */}
                      <div 
                        className="px-5 py-3.5 sm:px-6 sm:py-4 rounded-2xl border text-left backdrop-blur-sm my-3"
                        style={{
                          background: 'rgba(90, 38, 56, 0.35)',
                          borderColor: 'rgba(183, 140, 134, 0.30)',
                        }}
                      >
                        <div className="font-elegant text-[16px] md:text-[18px] leading-[1.75] break-keep">
                          <p className="font-bold text-[#D8BB94]">
                            하지만 기억하십시오.
                          </p>
                          <p className="text-white font-medium">
                            상대의 마음을 내 방식대로만 짐작하는 것은 짙은 안개 속에서 길을 찾는 것과 같습니다.
                          </p>
                          <p className="text-[#D8BB94] font-semibold">
                            서로의 선천코드를 모른 채 나누는 대화는 언제나 같은 오해의 벽에 부딪히게 되어 있습니다.
                          </p>
                        </div>
                      </div>

                      <p>
                        내 감정의 결조차 온전히 이해받지 못했다고 느꼈기에, 늘 익숙한 관계 안에서도 외로웠던 것입니다.
                      </p>
                    </div>

                    {/* 구분선 및 마지막 핵심 메시지 */}
                    <div className="pt-6 border-t border-[#935C6B]/25 mt-6">
                      <p className="font-elegant font-bold text-[18px] sm:text-[20px] md:text-[22px] leading-[1.6] break-keep text-white">
                        이제 상대방을 탓하기 전에,<br className="hidden sm:inline" />
                        <span className="gradient-text-reunion"> 두 사람 사이에 흐르는 선천코드의 결을 먼저 펼쳐볼 때입니다.</span>
                      </p>
                    </div>
                  </div>

                  {/* 우측 45%: 세로 3:4 이미지 영역 */}
                  <div className="lg:col-span-5 w-full flex flex-col items-center order-1 lg:order-2">
                    <div className="group relative w-full aspect-[3/4] rounded-[28px] md:rounded-[36px] overflow-hidden border border-white/10 shadow-2xl bg-[#14080E] flex items-center justify-center transition-all duration-300 hover:border-[#D8BB94]/40">
                      <Image
                        src={COMPATIBILITY_STORY_IMAGE_1.src}
                        alt={COMPATIBILITY_STORY_IMAGE_1.alt}
                        width={COMPATIBILITY_STORY_IMAGE_1.width}
                        height={COMPATIBILITY_STORY_IMAGE_1.height}
                        className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </Reveal>
            </section>

            {/* ══════════════════════════════════════════════════════════════════════ */}
            {/* [교차 스토리 2] THE HIDDEN CONNECTION (좌측 이미지 + 우측 텍스트) */}
            {/* ══════════════════════════════════════════════════════════════════════ */}
            <section className="mb-24 md:mb-32">
              <Reveal>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 xl:gap-16 items-stretch">
                  {/* 좌측 45%: 세로형 3:4 이미지 영역 */}
                  <div className="lg:col-span-5 w-full max-w-[420px] mx-auto lg:mx-0 flex flex-col items-center lg:items-start justify-center">
                    <div className="group relative w-full aspect-[3/4] rounded-[28px] md:rounded-[36px] overflow-hidden border border-white/10 shadow-2xl bg-[#14080E] flex items-center justify-center transition-all duration-300 hover:border-[#D8BB94]/40">
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
                    {/* 상단 그룹: 라벨 + 메인 제목 + 본문 서사 */}
                    <div className="space-y-5">
                      <div>
                        <span className="block font-elegant text-[12pt] font-semibold tracking-[0.2em] text-[#D8BB94] uppercase mb-4">
                          THE HIDDEN CONNECTION
                        </span>
                        <h2 className="text-2xl sm:text-3xl md:text-[36px] font-elegant font-bold text-white mb-5 leading-[1.25] md:leading-[1.3] break-keep">
                          두 사람의 사주를 함께 들여다보는 순간,<br />
                          <span className="gradient-text-reunion">풀리지 않던 관계의 수수께끼가</span><br />
                          풀리기 시작합니다.
                        </h2>
                      </div>

                      {/* 본문 서사 */}
                      <div className="space-y-3.5 text-[17px] md:text-[18px] text-[#EDE6DA] leading-[1.8] font-light break-keep">
                        <p className="text-[#FAF7F2] font-medium">
                          왜 한 사람은 갈등 앞에서 침묵을 택하고, 왜 다른 한 사람은 즉각적인 대답을 원했는지.
                        </p>
                        <p>
                          우연이라 생각했던 부딪힘도, 상처가 되었던 대화의 방식도 모두 두 사람의 선천코드 속에 새겨진 <span className="text-[#D8BB94] font-semibold">반복되는 에너지의 상호작용</span>이었습니다.
                        </p>
                      </div>
                    </div>

                    {/* 하단 그룹: 솔루션 제안 + 하이라이트 박스 + 마무리 훅 */}
                    <div className="space-y-3.5 text-[17px] md:text-[18px] leading-[1.8] break-keep">
                      <p className="text-[#FAF7F2] font-semibold">
                        겉으로 드러난 갈등의 표면만 붙잡고 씨름하는 것은 더 이상 의미가 없습니다.
                      </p>

                      {/* 강조 박스 */}
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

                      {/* 마무리 훅 */}
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

            {/* ══════════════════════════════════════════════════════════════════════ */}
            {/* SECTION 03. 일반적인 연애 조언이 충분하지 않은 이유 */}
            {/* ══════════════════════════════════════════════════════════════════════ */}
            <CompatibilityAdviceComparison />

            {/* ══════════════════════════════════════════════════════════════════════ */}
            {/* SECTION 04. 두 사람의 관계 구조 재정의 */}
            {/* ══════════════════════════════════════════════════════════════════════ */}
            <CompatibilityRelationshipDiagram />

            {/* ══════════════════════════════════════════════════════════════════════ */}
            {/* [중간 구매 CTA 1차] BEGIN YOUR JOURNEY (와이드형 프리미엄 CTA) */}
            {/* ══════════════════════════════════════════════════════════════════════ */}
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

                  <p className="text-sm md:text-base text-[#EDE6DA]/85 font-light leading-relaxed max-w-xl mx-auto break-keep mb-6">
                    서로의 차이를 이해하고 우리 관계의 방향을 새롭게 바라보는 맞춤 궁합 리포트를 만나보세요.
                  </p>

                  <div className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-[#5A2638]/40 border border-[#B78C86]/40 text-xs md:text-sm text-[#D8BB94] font-medium mb-8">
                    69,000원 · 1:1 맞춤 PDF · 두 사람의 선천코드 정밀 분석
                  </div>

                  {/* 구매 버튼 (기존 상단/하단 동작 재사용) */}
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
            {/* 신규 섹션: 왜, 선천코드 궁합 리포트인가? (차별점 & 처방전 철학) */}
            {/* ══════════════════════════════════════════════════════════════════════ */}
            <WhyCompatibilityReport />

            {/* ══════════════════════════════════════════════════════════════════════ */}
            {/* POINT 01. 관계 특화 심층 분석 — 두 사람의 선천코드와 관계 흐름 집중 분석 */}
            {/* ══════════════════════════════════════════════════════════════════════ */}
            <section id="point-01" className="mb-40 scroll-mt-28 md:scroll-mt-36">
              <Reveal>
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                  <div className="relative overflow-hidden rounded-[40px] border border-white/10 shadow-2xl">
                    <Image 
                      src="/image/compatibility/p2.webp" 
                      alt="선천코드 궁합 리포트 개요" 
                      width={800}
                      height={600}
                      className="w-full h-auto object-cover" 
                    />
                  </div>
                  <div className="space-y-8">
                    <div className="space-y-3">
                      <span className="block font-elegant text-[12pt] font-semibold tracking-[0.2em] text-[#D8BB94] uppercase">
                        POINT 01 · RELATIONSHIP ANALYSIS
                      </span>
                      <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white leading-[1.25] md:leading-[1.3] break-keep">
                        사랑은 감정이지만,<br /> <span className="gradient-text-reunion">관계는 흐름입니다</span>
                      </h2>
                    </div>
                    <p className="text-[18px] text-[#EDE6DA] opacity-75 leading-relaxed break-keep font-light whitespace-pre-wrap">
                      프리미엄 궁합 리포트는 단순한 궁합 점수가 아니라,{"\n\n"}
                      두 사람이 왜 끌리는지, 왜 자꾸 부딪히는지, 어떤 방식으로 함께 성장할 수 있는지를 섬세하게 해석하는 프리미엄 관계 분석 리포트입니다.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        "두 사람의 기본 기질 분석", 
                        "감정 흐름과 관계 패턴", 
                        "서로 끌리는 이유 분석", 
                        "갈등이 반복되는 핵심 원인",
                        "오래가는 관계의 방향성",
                        "결혼/장기 관계 가능성"
                      ].map((item, idx) => (
                        <div key={idx} className="detail-glass-card flex items-center gap-4 p-4 rounded-2xl">
                          <div className="w-2 h-2 rounded-full bg-[#D8BB94] shadow-[0_0_10px_rgba(216,187,148,0.5)]"></div>
                          <span className="text-white/80">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            </section>

            {/* ══════════════════════════════════════════════════════════════════════ */}
            {/* POINT 02: 선천코드 궁합 분석 방식 (명리 뼈대 + 관계 심리 교차 분석) */}
            {/* ══════════════════════════════════════════════════════════════════════ */}
            <CompatibilityAnalysisMethod />

            {/* ══════════════════════════════════════════════════════════════════════ */}
            {/* POINT 03. 두 사람만의 맞춤 궁합 해독 — 6가지 핵심 분석 축 */}
            {/* ══════════════════════════════════════════════════════════════════════ */}
            <section id="point-03" className="mb-40 text-center scroll-mt-28 md:scroll-mt-36">
              <Reveal>
                <div className="space-y-4 mb-16">
                  <span className="block font-elegant text-[12pt] font-semibold tracking-[0.2em] text-[#D8BB94] uppercase">
                    POINT 03 · DYNAMICS & SIX PERSPECTIVES
                  </span>
                  <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white tracking-[0.05em] leading-[1.25] md:leading-[1.3] break-keep">
                    두 사람만의 맞춤 궁합 해독 — <span className="gradient-text-reunion">6가지 핵심 분석 축</span>
                  </h2>
                </div>
                <div className="max-w-7xl mx-auto mb-20">
                  <Image 
                    src="/image/compatibility/p4.webp" 
                    alt="Analysis Detail" 
                    width={1200}
                    height={800}
                    className="w-full h-auto rounded-[50px] shadow-2xl border border-white/10" 
                  />
                </div>
                <div className="gungjung-glass p-12 md:p-24 relative overflow-hidden rounded-[36px] border border-[#B78C86]/30 bg-gradient-to-b from-[#4A1F2D]/30 via-[#3A1623]/25 to-[#180A14]/35 backdrop-blur-md">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {[
                      { t: "선천적 기질 궁합", d: "두 사람의 타고난 에너지 조화 분석", i: "fa-yin-yang" },
                      { t: "핵심 끌림 이유", d: "서로에게 강력하게 끌리는 근본 원인 해독", i: "fa-magnet" },
                      { t: "갈등 근본 원인", d: "반복되는 다툼의 무의식적 배경 분석", i: "fa-triangle-exclamation" },
                      { t: "소통 및 유지 전략", d: "서로를 이해하는 방식과 관계 유지법 제안", i: "fa-comments" },
                      { t: "미래 관계 해석", d: "결혼 및 장기적 인연의 가능성 탐색", i: "fa-ring" },
                      { t: "성장 방향 제안", d: "함께 더 행복해질 수 있는 실질적 가이드", i: "fa-seedling" }
                    ].map((item, idx) => (
                      <div key={idx} className="detail-glass-card flex flex-col items-center gap-6 p-8 rounded-3xl group border border-[#B78C86]/25 hover:border-[#C7A97A]/45 bg-gradient-to-b from-[#5A2638]/35 to-[#3A1623]/35 transition-all duration-300 backdrop-blur-sm">
                        <div className="w-16 h-16 rounded-2xl bg-[#4A1F2D]/60 flex items-center justify-center border border-[#B78C86]/40 text-[#D8BB94] shadow-lg group-hover:scale-110 transition-transform">
                          <i className={`fas ${item.i} text-2xl`}></i>
                        </div>
                        <div>
                          <h3 className="text-[20px] md:text-[24px] font-bold text-white mb-3 leading-snug break-keep">{item.t}</h3>
                          <p className="text-[15px] md:text-[16px] text-[#EDE6DA] opacity-60 font-light break-keep">{item.d}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-16 pt-16 border-t border-white/5 text-center">
                    <p className="text-[#EDE6DA] opacity-75 italic font-elegant text-[18px] break-keep">
                      &ldquo;이 리포트는 단순한 궁합 점수가 아니라, 관계의 흐름을 이해하고 더 건강한 사랑을 선택하기 위한 프리미엄 자기이해 리포트입니다.&rdquo;
                    </p>
                  </div>
                </div>
              </Reveal>
            </section>

            {/* ══════════════════════════════════════════════════════════════════════ */}
            {/* SECTION 06. 같은 궁합도 다른 관계가 되는 이유 */}
            {/* ══════════════════════════════════════════════════════════════════════ */}
            <CompatibilityCaseComparison />

            {/* ══════════════════════════════════════════════════════════════════════ */}
            {/* SECTION 07. 일반 궁합 풀이와의 차별점 */}
            {/* ══════════════════════════════════════════════════════════════════════ */}
            <CompatibilityComparisonTable />

            {/* ══════════════════════════════════════════════════════════════════════ */}
            {/* NEW. 당신은 아직도 미래가 어떻게 될지만 묻고 있습니까? (패러다임 전환) */}
            {/* ══════════════════════════════════════════════════════════════════════ */}
            <QuestionShiftComparison theme="compatibility" />

            {/* ══════════════════════════════════════════════════════════════════════ */}
            {/* [특별 증정품 안내 독립 섹션] THE SPECIAL GIFT */}
            {/* ══════════════════════════════════════════════════════════════════════ */}
            <CompatibilitySpecialGift />

            {/* ══════════════════════════════════════════════════════════════════════ */}
            {/* [6대 관점 파노라마 와이드 배너] SIX PERSPECTIVES */}
            {/* ══════════════════════════════════════════════════════════════════════ */}
            <CompatibilitySixPerspectivesBanner />

            {/* ══════════════════════════════════════════════════════════════════════ */}
            {/* SECTION 08. 프리미엄 궁합 리포트 목차 공개 (7 PART & PART 07 강조) */}
            {/* ══════════════════════════════════════════════════════════════════════ */}
            <CompatibilityReportTableOfContents />

            {/* ══════════════════════════════════════════════════════════════════════ */}
            {/* NEW. PART 07 실제 행동 대화 처방전 샘플 영역 (구체적 소통 솔루션) */}
            {/* ══════════════════════════════════════════════════════════════════════ */}
            <CompatibilityPrescriptionSample />

            {/* ══════════════════════════════════════════════════════════════════════ */}
            {/* [목차 및 실전 처방 이후 슬림형 중간 CTA] 가로폭 맞춤 패널 */}
            {/* ══════════════════════════════════════════════════════════════════════ */}
            <section className="mb-28 md:mb-36 max-w-7xl mx-auto px-4">
              <Reveal>
                <div className="gungjung-glass py-7 md:py-8 px-6 sm:px-8 md:px-10 lg:px-12 rounded-[24px] md:rounded-[30px] border border-[#B78C86]/30 bg-gradient-to-r from-[#4A1F2D]/40 via-[#3A1623]/30 to-[#4A1F2D]/40 relative overflow-hidden shadow-xl backdrop-blur-md">
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
                        onClick={handlePurchase}
                        className="w-full sm:w-auto min-w-[280px] sm:min-w-[320px] lg:min-w-[340px] py-4 sm:py-4.5 px-7 sm:px-8 rounded-2xl font-bold text-base sm:text-[16.5px] hover:scale-[1.01] active:scale-95 transition-all duration-300 bg-gradient-to-br from-[#5A2638] to-[#4A1F2D] border border-[rgba(199,169,122,0.45)] text-[#FAF6EE] shadow-[0_4px_18px_rgba(90,38,56,0.35)] hover:shadow-[0_0_22px_rgba(183,140,134,0.45)] hover:brightness-110 text-center"
                      >
                        나의 선천코드 궁합 리포트 신청하기 · 69,000원
                      </button>
                      <p className="mt-2.5 text-[12px] sm:text-[13px] text-[#D8BB94]/85 font-light tracking-wide text-center lg:text-right">
                        1:1 맞춤 PDF · 두 사람 맞춤 오행 디지털 카드 증정
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </section>

            {/* ══════════════════════════════════════════════════════════════════════ */}
            {/* SECTION 09. 맞춤 리포트 제작 과정 */}
            {/* ══════════════════════════════════════════════════════════════════════ */}
            <CompatibilityProductionTimeline />

            {/* ══════════════════════════════════════════════════════════════════════ */}
            {/* SECTION 10. 궁합 리포트 샘플 미리보기 (확대 라이트박스 및 이전/다음 지원) */}
            {/* ══════════════════════════════════════════════════════════════════════ */}
            <CompatibilityReportPreview />

            {/* ══════════════════════════════════════════════════════════════════════ */}
            {/* SECTION 11. 관계를 이해한 뒤 달라질 수 있는 선택 */}
            {/* ══════════════════════════════════════════════════════════════════════ */}
            <CompatibilityChangeScenario />

            {/* ══════════════════════════════════════════════════════════════════════ */}
            {/* SECTION 12. 추천 대상과 맞지 않는 대상 (p3.webp & 추천 카드 보존) */}
            {/* ══════════════════════════════════════════════════════════════════════ */}
            <CompatibilityRecommendedAudience />

            {/* ══════════════════════════════════════════════════════════════════════ */}
            {/* SECTION 13. 가상 활용 시나리오 (4차 개편 완료) */}
            {/* ══════════════════════════════════════════════════════════════════════ */}
            <CompatibilityTestimonials />

            {/* ══════════════════════════════════════════════════════════════════════ */}
            {/* FINAL AWAKENING: 피날레 에디토리얼 와이드 배너 (5차 신규 추가) */}
            {/* ══════════════════════════════════════════════════════════════════════ */}
            <CompatibilityRealTransformationBanner />

            {/* ══════════════════════════════════════════════════════════════════════ */}
            {/* SECTION 14. 백도화의 궁합 분석 철학 (궁중 서신 편지 형태 보존) */}
            {/* ══════════════════════════════════════════════════════════════════════ */}
            <CompatibilityPhilosophy />

            {/* ══════════════════════════════════════════════════════════════════════ */}
            {/* SECTION 15. 소장 가치와 오행 에너지 카드 (p5.webp 및 ReportCommonInfo 보존) */}
            {/* ══════════════════════════════════════════════════════════════════════ */}
            {/* 15-1. 소장 가치 6대 핵심 요소 요약 */}
            <CompatibilityValueSummary />

            {/* 15-2. 기존 프리미엄 섹션 (p5.webp 에셋 보존) */}
            <section className="mb-40">
              <Reveal>
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                  <div className="space-y-10 order-2 lg:order-1">
                    <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white leading-[1.25] md:leading-[1.3] break-keep">
                      소장하고 싶은 <br /> <span className="gradient-text-reunion">프리미엄 궁합 리포트</span>
                    </h2>
                    <p className="text-[18px] text-[#EDE6DA] opacity-75 leading-relaxed break-keep font-light whitespace-pre-wrap">
                      프리미엄 궁합 리포트는 한 번 읽고 끝나는 결과지가 아니라, 두 사람의 관계를 다시 바라보게 만드는 개인 맞춤형 감성 리포트입니다.{"\n\n"}
                      서로의 성향, 반복되는 관계 패턴, 끌림과 거리감의 이유, 그리고 더 나은 사랑을 위한 방향성을 백도화만의 언어로 정리해드립니다.
                    </p>
                  </div>
                  <div className="order-1 lg:order-2 relative group">
                    <div className="absolute -inset-10 bg-[#663244]/15 blur-[60px] rounded-full"></div>
                    <Image 
                      src="/image/compatibility/p5.webp" 
                      alt="Premium Design" 
                      width={800}
                      height={600}
                      className="relative z-10 w-full h-auto rounded-[60px] shadow-[0_0_80px_rgba(0,0,0,0.6)] border border-white/10 transition-transform duration-1000 group-hover:scale-[1.03]" 
                    />
                  </div>
                </div>
              </Reveal>
            </section>

            {/* 15-3. 기존 오행 에너지 카드 5종 및 제작/수령 안내 (ReportCommonInfo 보존, isCompatibility={true}) */}
            <section className="mb-40">
              <ReportCommonInfo isCompatibility={true} />
            </section>

            {/* ══════════════════════════════════════════════════════════════════════ */}
            {/* SECTION 16. 자주 묻는 질문 FAQ (10개 항목 아코디언) */}
            {/* ══════════════════════════════════════════════════════════════════════ */}
            <CompatibilityFAQ />

            {/* ══════════════════════════════════════════════════════════════════════ */}
            {/* SECTION 17. 구매 전 안내 (6대 중요 안내 사항) */}
            {/* ══════════════════════════════════════════════════════════════════════ */}
            <CompatibilityPurchaseNotice />

            {/* ══════════════════════════════════════════════════════════════════════ */}
            {/* SECTION 18. 최종 구매 CTA (이미지와 텍스트·구매 카드 분리 구조) */}
            {/* ══════════════════════════════════════════════════════════════════════ */}
            <section className="mb-20 md:mb-24 w-full max-w-[1280px] mx-auto">
              <Reveal>
                {/* ① 16:9 와이드 단독 대표 이미지 (오버레이 제거) */}
                <div className="relative w-full rounded-[40px] overflow-hidden border border-white/10 shadow-2xl aspect-[16/9] bg-[#14080E] mb-14 md:mb-16 group">
                  <Image 
                    src="/image/compatibility/p6.webp" 
                    alt="Final CTA Journey" 
                    width={1672}
                    height={941}
                    className="w-full h-full object-cover transition-transform duration-[10000ms] group-hover:scale-105" 
                  />
                </div>

                {/* ② 이미지 아래 텍스트 영역 (중앙 정렬) */}
                <div className="text-center max-w-3xl mx-auto px-4 mb-10 md:mb-12">
                  <span className="block font-elegant text-[12pt] font-semibold tracking-[0.2em] uppercase text-[#D8BB94] mb-6">
                    BEGIN YOUR JOURNEY
                  </span>
                  
                  <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white mb-6 leading-[1.25] md:leading-[1.3] break-keep">
                    &ldquo;두 사람의 인연을, 이제 더 깊이 읽어보세요.&rdquo;
                  </h2>
                  
                  <p className="text-[18px] text-[#EDE6DA]/90 leading-relaxed font-light break-keep max-w-2xl mx-auto">
                    서로의 기질과 끌림, 갈등과 소통의 패턴을 함께 살펴보고<br className="hidden sm:inline" />
                    우리 관계에 필요한 이해의 방향을 프리미엄 궁합 리포트로 만나보세요.
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
                      프리미엄 소장용 1:1 맞춤 PDF 비급 · 두 사람 맞춤 오행 디지털 카드 증정
                    </p>

                    {/* 3. 가격 */}
                    <div className="mb-5">
                      <span className="text-3xl sm:text-[36px] font-elegant font-bold text-[#FAF7F2] tracking-tight">
                        69,000<span className="text-2xl sm:text-[28px] font-medium ml-1">원</span>
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

            {/* 기존 정책 링크 보존 */}
            <section className="pb-16 text-center">
              <div className="flex justify-center gap-10 text-[10px] tracking-[0.3em] uppercase text-white/30">
                <Link href="/terms" className="hover:text-[#D8BB94] transition-colors">이용약관</Link>
                <Link href="/privacy" className="hover:text-[var(--accent-gold)] transition-colors">개인정보처리방침</Link>
                <Link href="/refund" className="hover:text-[var(--accent-gold)] transition-colors">환불정책</Link>
              </div>
            </section>

            {/* 브랜드 시그니처 엔딩 섹션 (최종 구매 CTA 및 정책 안내 아래, 공통 푸터 위) */}
            <BrandSignatureEnding theme="compatibility" />

          </div>
        </div>
        <Footer />
      </GlobalBackground>
    </main>
  )
}
