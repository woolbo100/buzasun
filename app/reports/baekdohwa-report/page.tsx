'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Reveal from '@/components/Reveal'
import GlobalBackground from '@/components/GlobalBackground'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import ReportCommonInfo from '@/components/ReportCommonInfo'
import { useRouter } from 'next/navigation'
import { addToCart } from '@/hooks/useCart'
import RecommendedForCards from '@/components/RecommendedForCards'

// 새로 추가된 18개 설득 블록 독립 컴포넌트들
import LoveCoreDifferentiation from '@/components/reports/baekdohwa-report/LoveCoreDifferentiation'
import WhySeoncheonReport from '@/components/reports/baekdohwa-report/WhySeoncheonReport'
import QuestionShiftComparison from '@/components/reports/common/QuestionShiftComparison'
import LovePrescriptionSample from '@/components/reports/baekdohwa-report/LovePrescriptionSample'
import SecretPrescriptionPoint from '@/components/reports/baekdohwa-report/SecretPrescriptionPoint'
import LovePatternChecklist from '@/components/reports/baekdohwa-report/LovePatternChecklist'
import GeneralAdviceComparison from '@/components/reports/baekdohwa-report/GeneralAdviceComparison'
import RelationshipPatternFlow from '@/components/reports/baekdohwa-report/RelationshipPatternFlow'
import PersonalAnalysisMethod from '@/components/reports/baekdohwa-report/PersonalAnalysisMethod'
import PersonalizedCaseComparison from '@/components/reports/baekdohwa-report/PersonalizedCaseComparison'
import ReportComparisonTable from '@/components/reports/baekdohwa-report/ReportComparisonTable'
import LoveReportTableOfContents from '@/components/reports/baekdohwa-report/LoveReportTableOfContents'
import ReportProductionTimeline from '@/components/reports/baekdohwa-report/ReportProductionTimeline'
import ReportSamplePreview from '@/components/reports/baekdohwa-report/ReportSamplePreview'
import BaekdohwaDivider from '@/components/reports/baekdohwa-report/BaekdohwaDivider'
import TransformationThreeChanges from '@/components/reports/baekdohwa-report/TransformationThreeChanges'
import RelationshipChangeScenario from '@/components/reports/baekdohwa-report/RelationshipChangeScenario'
import RecommendedAudience from '@/components/reports/baekdohwa-report/RecommendedAudience'
import SixPerspectivesPanoramaBanner from '@/components/reports/baekdohwa-report/SixPerspectivesPanoramaBanner'
import ReportTestimonials from '@/components/reports/baekdohwa-report/ReportTestimonials'
// import BaekdohwaPhilosophy from '@/components/reports/baekdohwa-report/BaekdohwaPhilosophy' (POINT 02로 통합)
// import ReportValueSummary from '@/components/reports/baekdohwa-report/ReportValueSummary' (BEHIND THE REPORT로 통합)
import ReportFAQ from '@/components/reports/baekdohwa-report/ReportFAQ'
import PurchaseNotice from '@/components/reports/baekdohwa-report/PurchaseNotice'
import FiveElementsSpecialGift from '@/components/reports/baekdohwa-report/FiveElementsSpecialGift'

// ══════════════════════════════════════════════════════════════════════
// 히어로 & 공감 섹션 가로 16:9 이미지 설정 (교체 가능 구조)
// ══════════════════════════════════════════════════════════════════════
const HERO_IMAGE_CONFIG = {
  src: '/image/lovereport/love-report-hero.webp',
  alt: '선천코드 연애 리포트 메인 히어로 16:9',
  width: 1672,
  height: 941,
}

const EMPATHY_IMAGE_CONFIG = {
  src: '/image/lovereport/love-pattern-window.webp',
  alt: '선천코드 연애 리포트 공감 가로 비주얼 16:9',
  width: 1672,
  height: 941,
}

// ══════════════════════════════════════════════════════════════════════
// 스토리 교차 레이아웃 이미지 설정 (언제든 경로만 교체 가능)
// ══════════════════════════════════════════════════════════════════════
const DISCOVERY_STORY_IMAGE_CONFIG = {
  src: '/image/lovereport/the%20hidden%20love%20blueprint.webp',
  alt: '사주를 들여다보니 지나온 사랑이 다르게 보이기 시작했다 - the hidden love blueprint',
  width: 1086,
  height: 1448,
}

const AWAKENING_STORY_IMAGE_CONFIG = {
  src: '/image/lovereport/lost%20in%20love.webp?v=2', // 새로운 lost in love 3:4 세로 이미지 (캐시 갱신 v=2)
  alt: '왜 나는 사랑할수록 나 자신을 잃어버릴까 - lost in love',
  width: 1086,
  height: 1448,
}

export default function BaekdohwaReportPage() {
  useScrollAnimation()
  const router = useRouter()

  // 1. 기존 바로 결제 로직 보존
  const handlePurchase = (e: React.MouseEvent) => {
    e.preventDefault()
    router.push('/checkout?productId=baekdohwa-report')
  }

  // 2. 기존 장바구니 담기 로직 보존
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    addToCart({
      id: 'baekdohwa-report',
      slug: 'baekdohwa-report',
      name: '선천코드 연애 리포트',
      price: 39000,
      image: '/image/love-code-bg.png',
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
    <main className="detail-page love-report-page relative min-h-screen bg-[#130917]">
      {/* 연애비급 전용 딥 퍼플(좌) x 톤다운 로즈코코아(우) 그라데이션 배경 시스템 동일 적용 */}
      <GlobalBackground
        src="/image/main4.png"
        brightCenter={false}
        customBaseOverlay={
          <div className="absolute inset-0 w-full h-full pointer-events-none">
            {/* 1. 우측 은은한 톤다운 로즈코코아 라이트 오라 (우측 입체감 및 은은한 비침 연출) */}
            <div
              className="absolute inset-0"
              style={{
                background: `
                  radial-gradient(ellipse 70% 50% at 88% 25%, rgba(110, 58, 76, 0.20) 0%, rgba(65, 33, 46, 0.08) 50%, transparent 75%),
                  radial-gradient(circle 600px at 90% 70%, rgba(85, 44, 60, 0.15) 0%, transparent 65%)
                `,
              }}
            />

            {/* 2. 메인 가로 그라데이션 (왼쪽: 딥 퍼플 100% 완전 불투명 차단, 오른쪽: 톤다운 로즈코코아 은은한 투명 비침) */}
            <div
              className="absolute inset-0"
              style={{
                background: `
                  linear-gradient(
                    95deg,
                    #130917 0%,
                    #190E1E 35%,
                    rgba(35, 20, 36, 0.98) 55%,
                    rgba(52, 29, 44, 0.94) 75%,
                    rgba(74, 42, 56, 0.87) 100%
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
                  rgba(19, 9, 23, 0.35) 75%,
                  rgba(10, 5, 14, 0.75) 100%
                ),
                linear-gradient(
                  to right,
                  rgba(12, 6, 16, 0.65) 0%,
                  rgba(12, 6, 16, 0.25) 25%,
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
            {/* INTRO & STEP 01. 공감 — 왜 비슷한 결의 사람에게만 상처받을까? */}
            {/* ══════════════════════════════════════════════════════════════════════ */}
            <section className="text-center mb-36">
              <Reveal delayMs={100}>
                {/* 1. 상단 배지 */}
                <div className="mb-6">
                  <span className="inline-block px-5 py-1.5 rounded-full text-[12pt] font-elegant font-semibold tracking-[0.25em] uppercase bg-[#B7788D]/15 border border-[#B7788D]/35 text-[#D9A8A7]">
                    PREMIUM LOVE CODE REPORT
                  </span>
                </div>

                {/* 2. 메인 제품명 제목 */}
                <h1 className="text-3xl md:text-6xl font-elegant font-bold mb-10 text-white leading-[1.25] md:leading-[1.3] break-keep">
                  선천코드 <span className="gradient-text-love">연애 리포트</span>
                </h1>

                {/* 3. 메인 가로 이미지 (16:9 비율 풀사이즈 느낌 - 하단 여백 충분히 확대) */}
                <div className="relative w-full max-w-[1280px] mx-auto mb-12 sm:mb-16 md:mb-20 rounded-[40px] overflow-hidden border border-white/10 shadow-2xl group aspect-[16/9] bg-[#130917]">
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

                {/* 3-1. 메인 히어로 하단 공감 문구 블록 (충분한 숨 공간과 몰입감 확보) */}
                <div className="max-w-4xl mx-auto text-center px-4 space-y-4 md:space-y-5">
                  <h2 className="text-2xl sm:text-3xl md:text-[34px] lg:text-[38px] text-white font-elegant font-bold leading-[1.3] md:leading-[1.35] break-keep">
                    &ldquo;혹시 내가 만나는 사람이 <span className="gradient-text-love">우연이라고 믿고 있나요?</span>&rdquo;
                  </h2>
                  <p className="text-base sm:text-lg md:text-[21px] font-elegant text-[#FAF7F2] leading-[1.7] md:leading-[1.75] break-keep max-w-2xl mx-auto opacity-95 font-light">
                    완전히 다른 사람을 만났다고 생각했지만,<br />
                    돌아보면 그 사랑의 흔적이 기묘할 만큼 닮아 있다고<br />
                    느낀 적은 없으신가요.
                  </p>
                </div>

                {/* 3-2. 구간 전환용 백도화 아이콘 + 얇은 장식선 (공감 문구 ➔ 상품 소개 완충 전환) */}
                <div className="flex items-center justify-center my-10 sm:my-14 md:my-16 max-w-xs sm:max-w-sm mx-auto px-4" aria-hidden="true">
                  <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#D5AFAD]/35 to-transparent" />
                  <div className="mx-4 flex items-center justify-center">
                    <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7 sm:w-8 sm:h-8 text-[#D7AD9B] opacity-90 drop-shadow-[0_0_8px_rgba(215,173,155,0.4)]">
                      {/* 상단 꽃잎 */}
                      <path d="M16 16 C13.5 11 13 6 16 4 C19 6 18.5 11 16 16 Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      {/* 우상단 꽃잎 */}
                      <path d="M16 16 C20 13 24.5 12.5 26 15.5 C25 18.8 20.5 18 16 16 Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      {/* 우하단 꽃잎 */}
                      <path d="M16 16 C19.5 19.5 21.5 24 18.5 26 C16 24.5 16.2 20 16 16 Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      {/* 좌하단 꽃잎 */}
                      <path d="M16 16 C15.8 20 16 24.5 13.5 26 C10.5 24 12.5 19.5 16 16 Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      {/* 좌상단 꽃잎 */}
                      <path d="M16 16 C11.5 18 7 18.8 6 15.5 C7.5 12.5 12 13 16 16 Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      {/* 중심 꽃술 원 */}
                      <circle cx="16" cy="16" r="1.6" stroke="currentColor" strokeWidth="1" />
                    </svg>
                  </div>
                  <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#D5AFAD]/35 to-transparent" />
                </div>

                {/* 4. 메인 프리미엄 상품 소개 & 구매 CTA 상자 (하단 공감 문구와의 여유로운 숨 공간 확보) */}
                <div className="max-w-[1280px] mx-auto mb-36 md:mb-48 lg:mb-52 text-left">
                  <div 
                    className="relative rounded-[32px] md:rounded-[40px] p-7 sm:p-10 lg:p-12 border border-[#D5AFAD]/35 overflow-hidden shadow-2xl"
                    style={{
                      background: 'radial-gradient(ellipse at 50% 0%, rgba(139, 38, 62, 0.35) 0%, rgba(74, 35, 43, 0.3) 50%, rgba(10, 5, 20, 0.95) 100%)',
                      boxShadow: '0 0 60px rgba(183, 120, 141, 0.22)'
                    }}
                  >
                    {/* 은은한 배경 오라 */}
                    <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#B7788D]/15 rounded-full blur-[90px] pointer-events-none" />

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
                      {/* 좌측 (약 58%): 라벨 + 메인 카피 + 설명 + 가격 + 버튼 */}
                      <div className="lg:col-span-7 space-y-5 md:space-y-6">
                        {/* 1. 상단 라벨 */}
                        <div>
                          <span className="inline-flex items-center justify-center py-1.5 px-3.5 rounded-full bg-[#87465B]/60 border border-[#D5AFAD]/60 text-[#FFF1E9] text-xs font-bold tracking-wider whitespace-nowrap">
                            선천코드 연애 리포트
                          </span>
                        </div>

                        {/* 2. 메인 카피 (기존 히어로 하단 문구 적용) */}
                        <h3 className="text-2xl sm:text-3xl md:text-[34px] font-elegant font-bold text-white leading-[1.35] md:leading-[1.4] break-keep">
                          선천코드로 읽는 <span className="gradient-text-love">나의 사랑 설계도</span>
                        </h3>

                        {/* 3. 설명 문구 */}
                        <p className="text-[16px] md:text-[18px] text-[#EDE6DA]/90 leading-[1.7] font-light break-keep max-w-xl">
                          나를 아는 것에서부터, 당신의 진짜 연애는 시작됩니다.
                        </p>

                        {/* 4. 가격 영역 & 5. 상품 정보 */}
                        <div className="pt-2">
                          <div className="flex flex-wrap items-baseline gap-3">
                            <span className="text-3xl sm:text-4xl md:text-[42px] font-elegant font-bold text-[#FAF7F2] tracking-tight">
                              39,000원
                            </span>
                            <span className="text-xs sm:text-sm text-[#D9A8A7] font-medium tracking-wide">
                              1:1 맞춤 PDF 리포트 · 오행 에너지 카드 1종 증정
                            </span>
                          </div>
                          <p className="text-xs text-[#EDE6DA]/50 font-light mt-1.5">
                            ※ 주문 접수 후 고객님의 사주 정보를 바탕으로 순차 제작되는 디지털 맞춤 리포트입니다.
                          </p>
                        </div>

                        {/* 6. 구매 버튼 2개 */}
                        <div className="flex flex-col sm:flex-row gap-3.5 pt-2 items-stretch sm:items-center">
                          <button
                            type="button"
                            onClick={handleAddToCart}
                            className="py-3.5 px-6 rounded-2xl font-bold text-sm md:text-base border border-[#B7788D]/45 text-[#E6BFA9] hover:bg-[#B7788D]/15 hover:border-[#B7788D]/70 transition-all duration-300 text-center shrink-0 order-2 sm:order-1"
                          >
                            장바구니 담기
                          </button>
                          <button
                            type="button"
                            onClick={handlePurchase}
                            className="py-4 px-8 rounded-2xl font-bold text-base md:text-lg hover:scale-[1.01] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 text-[#FAF6EE] shadow-[0_4px_20px_rgba(125,73,84,0.35)] hover:shadow-[0_0_30px_rgba(181,121,135,0.45)] hover:brightness-110 flex-1 order-1 sm:order-2"
                            style={{
                              background: 'linear-gradient(135deg, #B57987 0%, #7D4954 100%)',
                              border: '1px solid rgba(229, 196, 187, 0.5)',
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
                            src="/image/lovereport/the%20secret%20love%20map.webp"
                            alt="선천코드로 읽는 나의 사랑 설계도"
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

                {/* 6. 공감 문구 (핵심 카피 1: 왜 이별의 타이밍도, 상처받는 방식도 놀라울 만큼 닮아 있을까요?) */}
                <div className="max-w-3xl mx-auto mb-14 text-center">
                  <span className="block font-elegant text-[12pt] font-semibold tracking-[0.2em] text-[#D9A8A7] uppercase mb-4">
                    THE REPEATING LOOP
                  </span>
                  <p className="text-2xl md:text-[34px] lg:text-[38px] text-white font-elegant font-bold leading-[1.3] break-keep mb-6">
                    &ldquo;왜 이별의 타이밍도, 상처받는 방식도<br className="hidden sm:inline" />
                    <span className="gradient-text-love">놀라울 만큼 닮아</span> 있을까요?&rdquo;
                  </p>
                  <div className="text-[18px] text-[#EDE6DA]/90 space-y-3 font-light leading-relaxed break-keep max-w-2xl mx-auto">
                    <h3 className="text-xl sm:text-2xl md:text-[25px] font-elegant font-bold text-white tracking-wide pb-1">
                      이번 만큼은 다를 거라 믿었지만...
                    </h3>
                    <p className="text-[#D9A8A7] font-medium leading-relaxed">
                      상대만 바뀌었을 뿐, 헤어지는 이유와 상처의 흔적이 매번 익숙하다면...<br className="hidden sm:inline" />
                      문제는 이번에 만난 상대 한 사람만이 아닐 수 있습니다.
                    </p>
                  </div>
                </div>

                {/* 7. 공감 문구 아래 16:9 가로 이미지 (love-pattern-window.webp) */}
                <div className="relative w-full max-w-[1280px] mx-auto rounded-[40px] overflow-hidden border border-white/10 shadow-2xl group aspect-[16/9] bg-[#130917]">
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

            {/* 1단계 심화. 반복되는 연애 패턴 체크리스트 & 근본 원인 질문 카드 */}
            <LovePatternChecklist />
            <LoveCoreDifferentiation />

            {/* ══════════════════════════════════════════════════════════════════════ */}
            {/* [교차 스토리 1] THE MOMENT OF AWAKENING (좌측 텍스트 + 우측 거울 이미지) */}
            {/* ══════════════════════════════════════════════════════════════════════ */}
            <section className="mb-24 md:mb-32">
              <Reveal>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 xl:gap-20 items-center">
                  {/* 좌측 55%: 라벨 + 제목 + 본문 및 마지막 핵심 후킹 */}
                  <div className="lg:col-span-7 space-y-6 text-left break-keep order-2 lg:order-1">
                    <div>
                      <span className="block font-elegant text-[12pt] font-semibold tracking-[0.2em] text-[#D9A8A7] uppercase mb-4">
                        THE MOMENT OF AWAKENING
                      </span>
                      <h2 className="text-2xl md:text-[34px] lg:text-[36px] font-elegant font-bold mb-6 leading-[1.3] break-keep">
                        <span className="text-[#FAF7F2]">끌림만 믿고 시작한 사랑,</span><br />
                        <span className="gradient-text-love">왜 늘 같은 미로에 갇힐까요?</span>
                      </h2>
                    </div>

                    {/* 본문 서사 */}
                    <div className="space-y-4 text-[17px] md:text-[18px] text-[#EDE6DA] opacity-85 font-light leading-[1.8] break-keep">
                      <p>
                        설렘을 운명이라 착각하는 동안, 우리의 연애는 늘 같은 결말을 향해 달렸습니다.
                      </p>
                      <p className="text-[#FAF7F2] font-semibold">
                        내 안의 진짜 무기가 무엇인지도 모른 채 남자의 비위를 맞추고,<br />
                        관계의 을(乙)이 되기를 자처했던 시간들.
                      </p>

                      {/* 하지만 기억하십시오 & 핵심 경각심 강조 카드 (왼쪽 정렬, 일정한 3줄 간격, 콤팩트한 세로 높이, 따옴표 제거) */}
                      <div 
                        className="love-report-highlight-card px-5 py-3.5 sm:px-6 sm:py-4 rounded-2xl border text-left backdrop-blur-sm my-3"
                        style={{
                          background: 'rgba(125, 76, 100, 0.20)',
                          borderColor: 'rgba(215, 170, 185, 0.20)',
                        }}
                      >
                        <div className="font-elegant text-[16px] md:text-[18px] leading-[1.75] break-keep">
                          <p className="font-bold text-[#D9A8A7]">
                            하지만 기억하십시오.
                          </p>
                          <p className="text-white font-medium">
                            끌림에만 의존하는 연애는 정답 없는 미로를 맨발로 헤매는 것과 같습니다.
                          </p>
                          <p className="text-[#D9A8A7] font-semibold">
                            내 설계도를 모른 채 달리는 연애는 언제나 같은 벽에 부딪히게 되어 있습니다.
                          </p>
                        </div>
                      </div>

                      <p>
                        내 사랑의 지도조차 없었기에, 늘 낯선 길에서 길을 잃었던 것입니다.
                      </p>
                    </div>

                    {/* 구분선 및 마지막 핵심 메시지 */}
                    <div className="pt-6 border-t border-[#B49A70]/25 mt-6">
                      <p className="font-elegant font-bold text-[18px] sm:text-[20px] md:text-[22px] leading-[1.6] break-keep text-white">
                        이제 끌림을 쫓기 전에,<br className="hidden sm:inline" />
                        <span className="gradient-text-love"> 당신 내면에 새겨진 선천코드를 먼저 펼쳐볼 때입니다.</span>
                      </p>
                    </div>
                  </div>

                  {/* 우측 45%: 새 거울 이미지 (lost in love.webp, 원본 3:4 세로 비율 유지) */}
                  <div className="lg:col-span-5 w-full flex flex-col items-center order-1 lg:order-2">
                    <div className="group relative w-full aspect-[3/4] rounded-[28px] md:rounded-[36px] overflow-hidden border border-white/10 shadow-2xl bg-[#130917] flex items-center justify-center transition-all duration-300 hover:border-[#D4B2A7]/40">
                      <Image
                        src={AWAKENING_STORY_IMAGE_CONFIG.src}
                        alt={AWAKENING_STORY_IMAGE_CONFIG.alt}
                        width={AWAKENING_STORY_IMAGE_CONFIG.width}
                        height={AWAKENING_STORY_IMAGE_CONFIG.height}
                        className="w-full h-full object-contain object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </Reveal>
            </section>

            {/* ══════════════════════════════════════════════════════════════════════ */}
            {/* [교차 스토리 2] STEP 02. DISCOVERY (좌측 이미지 + 우측 텍스트) */}
            {/* ══════════════════════════════════════════════════════════════════════ */}
            <section className="mb-24 md:mb-32">
              <Reveal>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 xl:gap-16 items-stretch">
                  {/* 좌측 45%: 세로형 3:4 이미지 영역 (좌측 정렬 및 간격 확보) */}
                  <div className="lg:col-span-5 w-full max-w-[420px] mx-auto lg:mx-0 flex flex-col items-center lg:items-start justify-center">
                    <div className="group relative w-full aspect-[3/4] rounded-[28px] md:rounded-[36px] overflow-hidden border border-white/10 shadow-2xl bg-[#130917] flex items-center justify-center transition-all duration-300 hover:border-[#D4B2A7]/40">
                      <Image
                        src={DISCOVERY_STORY_IMAGE_CONFIG.src}
                        alt={DISCOVERY_STORY_IMAGE_CONFIG.alt}
                        width={DISCOVERY_STORY_IMAGE_CONFIG.width}
                        height={DISCOVERY_STORY_IMAGE_CONFIG.height}
                        className="w-full h-full object-contain object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                        priority
                      />
                    </div>
                  </div>

                  {/* 우측 55%: 라벨 + 제목 + 본문 (상하 시작/끝 라인이 좌측 이미지와 단정하게 정렬) */}
                  <div className="lg:col-span-7 flex flex-col justify-between text-left break-keep lg:pl-6 xl:pl-8 py-1 lg:py-2 space-y-7 lg:space-y-0">
                    {/* 상단 그룹: 라벨 + 메인 제목 + 본문 서사 */}
                    <div className="space-y-5">
                      <div>
                        <span className="block font-elegant text-[12pt] font-semibold tracking-[0.2em] text-[#D9A8A7] uppercase mb-4">
                          THE HIDDEN CODE
                        </span>
                        <h2 className="text-2xl sm:text-3xl md:text-[36px] font-elegant font-bold text-white mb-5 leading-[1.25] md:leading-[1.3] break-keep">
                          내 사주를 제대로 들여다보는 순간,<br />
                          <span className="gradient-text-love">지나온 사랑의 퍼즐이 다르게</span><br />
                          보이기 시작합니다.
                        </h2>
                      </div>

                      {/* 본문 서사 */}
                      <div className="space-y-3.5 text-[17px] md:text-[18px] text-[#EDE6DA] leading-[1.8] font-light break-keep">
                        <p className="text-[#FAF7F2] font-medium">
                          서로 다른 사랑 속에서 반복되던 나의 모습이 하나의 일정한 패턴으로 읽히는 순간,<br />
                          누구나 깊은 소름과 마주하게 됩니다.
                        </p>
                        <p>
                          우연이라 믿었던 이별의 타이밍도, 늘 비슷한 결의 사람에게 무너지던 순간도<br className="hidden sm:inline" />
                          모두 당신의 선천코드 속에 촘촘히 새겨져 있던 <span className="text-[#D9A8A7] font-semibold">반복의 알고리즘</span>이었습니다.
                        </p>
                      </div>
                    </div>

                    {/* 하단 그룹: 솔루션 제안 + 은은한 로즈 플럼 하이라이트 박스 + 마무리 훅 */}
                    <div className="space-y-3.5 text-[17px] md:text-[18px] leading-[1.8] break-keep">
                      <p className="text-[#FAF7F2] font-semibold">
                        가볍고 뜬구름 잡는 연애운 풀이는 더 이상 의미가 없습니다.
                      </p>

                      {/* 강조 박스: 기준 '하지만 기억하십시오.' 카드와 100% 동일한 디자인 적용 */}
                      <div 
                        className="love-report-highlight-card p-5 md:p-6 rounded-2xl border backdrop-blur-sm"
                        style={{
                          background: 'rgba(125, 76, 100, 0.20)',
                          borderColor: 'rgba(215, 170, 185, 0.20)',
                        }}
                      >
                        <p className="text-[#FAF7F2] font-elegant font-medium text-[17px] sm:text-[18px] md:text-[19px] leading-[1.7]">
                          내가 누구에게 끌리고,<br className="hidden sm:inline" />
                          <span className="text-[#D9A8A7]"> 왜 같은 선택을 반복하는지 그 근본을 해부하는 일.</span>
                        </p>
                      </div>

                      {/* 마무리 훅: 가로선 없이 자연스러운 간격으로 이어지는 요약 문장 */}
                      <div className="pt-2">
                        <p className="font-elegant font-bold text-[19px] md:text-[22px] text-[#FAF7F2] leading-[1.7] break-keep">
                          <span className="text-[#D9A8A7] font-semibold">그것이 반복의 알고리즘을 끊는 일입니다.</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </section>

            {/* 3단계 도식 (핵심 카피 4: 끌림은 본능입니다. 그러나 사랑은 선택입니다.) */}
            <RelationshipPatternFlow />

            {/* 같은 선천코드, 다른 사랑의 이야기 (CASE A vs CASE B) */}
            <PersonalizedCaseComparison />

            {/* ══════════════════════════════════════════════════════════════════════ */}
            {/* PARADIGM SHIFT (STEP 03 통합 섹션: 내 사랑의 설계도 & 패러다임 전환) */}
            {/* ══════════════════════════════════════════════════════════════════════ */}
            <QuestionShiftComparison 
              theme="love" 
              title={
                <>
                  &ldquo;내 사랑의 설계도도 모르면서,<br className="hidden sm:inline" />
                  <span className="gradient-text-love"> 왜 상대의 마음과 미래부터</span> 묻습니까?&rdquo;
                </>
              }
              description={
                <>
                  <p>
                    상대의 표정과 카톡 하나에 밤새 흔들리고, 정해진 연애운만 점치려 애쓰는 동안<br />
                    정작 내가 어떤 사람에게 무너지는지는 한 번도 묻지 않았습니다.
                  </p>
                  <p>
                    진짜 바꿔야 할 것은 막연한 미래의 운세가 아니라,<br />
                    같은 상황에서 매번 반복되는{' '}
                    <span className="text-[#D9A8A7] font-semibold">나의 선택과 기준</span>입니다.
                  </p>
                </>
              }
              banner={
                <div className="mx-auto w-full max-w-[1280px]">
                  <Image
                    src="/image/lovereport/know%20your%20love%20blueprint.webp"
                    alt="내 사랑의 설계도를 알아야 하는 이유를 시각화한 백도화 일러스트"
                    width={1672}
                    height={941}
                    className="block h-auto w-full rounded-2xl md:rounded-[28px] border border-white/10 shadow-2xl"
                  />
                </div>
              }
            />

            {/* ══════════════════════════════════════════════════════════════════════ */}
            {/* 신규 섹션: 왜, 선천코드 연애 리포트인가? (차별점 & 처방전 철학) */}
            {/* ══════════════════════════════════════════════════════════════════════ */}
            <WhySeoncheonReport />

            {/* ══════════════════════════════════════════════════════════════════════ */}
            {/* POINT 01. 연애 특화 심층 분석 — 두루뭉술한 인생 총운이 아닌 연애·사랑 집중 분석 */}
            {/* ══════════════════════════════════════════════════════════════════════ */}
            <section className="mb-40">
              <Reveal>
                {/* 모바일 표시 순서 1: 섹션 제목 및 헤드카피 */}
                <div className="lg:hidden text-center sm:text-left mb-8 space-y-2.5">
                  <span className="block font-elegant text-[12pt] font-semibold tracking-[0.2em] text-[#D9A8A7] uppercase">
                    POINT 01 · LOVE ANALYSIS
                  </span>
                  <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white leading-[1.2] break-keep">
                    두루뭉술한 인생 총운이 아닙니다.<br />
                    오직 당신의 <span className="gradient-text-love">‘사랑’ 하나만</span><br />
                    <span className="gradient-text-love">깊이 해부</span>합니다.
                  </h2>
                </div>

                <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-20 items-stretch">
                  {/* 왼쪽 이미지: 권장 42% (12단 중 5단 = 41.67%) / 모바일 표시 순서 2 */}
                  <div className="lg:col-span-5 relative group flex flex-col">
                    <div className="relative aspect-[3/4] lg:aspect-auto lg:h-full w-full max-w-sm sm:max-w-md lg:max-w-none mx-auto rounded-[28px] md:rounded-[36px] overflow-hidden border border-white/10 shadow-2xl bg-[#130917]">
                      <Image 
                        src="/image/lovereport/love%20code%20deep%20analysis.webp" 
                        alt="선천코드 연애 특화 심층 분석" 
                        fill
                        sizes="(max-width: 1024px) 100vw, 42vw"
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]" 
                      />
                    </div>
                  </div>

                  {/* 오른쪽 텍스트: 권장 58% (12단 중 7단 = 58.33%) / 모바일 표시 순서 3 */}
                  <div className="lg:col-span-7 lg:pl-2 xl:pl-6 flex flex-col justify-between space-y-6 lg:space-y-7">
                    {/* 데스크톱 전용 헤드카피 (모바일에서는 이미지 상단에 표시) */}
                    <div className="hidden lg:block space-y-2.5">
                      <span className="block font-elegant text-[12pt] font-semibold tracking-[0.2em] text-[#D9A8A7] uppercase">
                        POINT 01 · LOVE ANALYSIS
                      </span>
                      <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white leading-[1.2] md:leading-[1.22] break-keep">
                        두루뭉술한 인생 총운이 아닙니다.<br />
                        오직 당신의 <span className="gradient-text-love">‘사랑’ 하나만</span><br />
                        <span className="gradient-text-love">깊이 해부</span>합니다.
                      </h2>
                    </div>

                    <p className="text-[17px] md:text-[18px] text-[#EDE6DA] opacity-80 leading-[1.8] break-keep font-light">
                      사주 전체를 훑는 수박 겉핥기식 운세 풀이로는 사랑의 갈등을 해결할 수 없습니다.<br />
                      단순한 연애운이나 뻔한 텍스트 조합과는 출발선부터 다릅니다.<br />
                      <span className="text-[#D9A8A7] font-medium opacity-100">당신이 사랑에 빠지는 순간부터 관계가 흔들리는 위기까지 정밀분석</span><br />
                      모든 사랑의 역학을 섬세하게 분해합니다. 동양 명리학으로 타고난 기질을 읽고,<br />
                      심리학과 무의식 탐색의 시선으로 반복되는<br />
                      <span className="text-[#D9A8A7] font-medium opacity-100">애착과 방어기제까지 입체적으로 분석해 행동의 변화를 이끕니다.</span>
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {["타고난 사랑의 기질", "무의식적 끌림 코드", "배우자 코드와 이상형", "관계 회복을 위한 솔루션"].map((item, idx) => (
                        <div key={idx} className="detail-glass-card flex items-center gap-4 p-4 rounded-2xl">
                          <div className="w-2 h-2 rounded-full bg-[#B7788D] shadow-[0_0_10px_rgba(183,120,141,0.5)]"></div>
                          <span className="text-white/90 font-semibold">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            </section>

            {/* POINT 02: 선천코드 3대 분석 방식 (명리 뼈대 + 현실 관계 기록 교차 분석) */}
            <PersonalAnalysisMethod />

            {/* ══════════════════════════════════════════════════════════════════════ */}
            {/* POINT 03. 나만의 숨겨진 연애 코드 — 매력무기·이상형·남편복·피해야 할 인연 등 6대 핵심 심층 분석 */}
            {/* ══════════════════════════════════════════════════════════════════════ */}
            <section className="mb-40 text-center">
              <Reveal>
                <div className="max-w-4xl mx-auto mb-7 md:mb-11 space-y-6">
                  {/* 구분선 도화꽃 아이콘 + 양옆 가로선 */}
                  <BaekdohwaDivider className="mb-8 md:mb-10" />
                  <span className="block font-elegant text-[12pt] font-semibold tracking-[0.2em] text-[#D9A8A7] uppercase mb-4">
                    POINT 03 · HIDDEN RELATIONSHIP CODES
                  </span>
                  <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white mb-6 leading-[1.25] md:leading-[1.3] break-keep">
                    &ldquo;나조차 알지 못했던 내 마음의 심연,<br className="sm:hidden" />
                    <span className="gradient-text-love"> 선천코드에 숨겨진 무의식</span>을 마주합니다.&rdquo;
                  </h2>
                  <p className="text-[17px] md:text-[18px] text-[#EDE6DA] opacity-80 font-light leading-relaxed max-w-2xl mx-auto break-keep">
                    겉으로 드러난 연애 성향 너머, 당신의 깊은 무의식과 내면의 그림자,<br className="hidden sm:inline" />
                    설명할 수 없이 반복되는 끌림의 뿌리까지 낱낱이 해독합니다.<br className="hidden sm:inline" />
                    의식적으로는 다짐하면서도 결국 같은 자리에서 흔들렸던 진짜 이유를 찾아내어,<br className="hidden sm:inline" />
                    <span className="text-[#D9A8A7] font-medium opacity-100">스스로도 몰랐던 깊은 내면을 투명하게 들여다보게 돕습니다.</span>
                  </p>
                </div>

                {/* 이동한 POINT 03 대표 분석 이미지 */}
                <div className="max-w-7xl mx-auto mb-16 md:mb-28">
                  <Image 
                    src="/image/lovereport/p4.webp?v=173411" 
                    alt="선천코드 연애 리포트의 6가지 핵심 분석 축 이미지" 
                    width={1672}
                    height={941}
                    className="w-full h-auto rounded-2xl md:rounded-[32px] shadow-2xl border border-white/10" 
                  />
                </div>

                {/* THE SIX PERSPECTIVES OF LOVE 영역 헤더 */}
                <div className="max-w-4xl mx-auto mb-8 text-center space-y-4">
                  <span className="block font-elegant text-[12pt] font-semibold tracking-[0.2em] text-[#D9A8A7] uppercase">
                    THE SIX PERSPECTIVES OF LOVE
                  </span>
                  <h3 className="text-2xl md:text-[34px] font-elegant font-bold text-white leading-[1.3] break-keep">
                    당신의 사랑을 움직이는 <br className="sm:hidden" />
                    <span className="gradient-text-love">6가지 핵심 분석 축</span>
                  </h3>
                  <p className="text-[16px] md:text-[18px] text-[#EDE6DA] opacity-85 font-light leading-relaxed max-w-2xl mx-auto break-keep">
                    나만의 매력 무기부터 무의식적 끌림, 반복되는 관계의 그림자와 피해야 할 악연까지,<br className="hidden sm:inline" />
                    리포트가 실제로 짚어내는 6가지 심층 분석 영역입니다.
                  </p>
                </div>

                {/* 6대 핵심 분석 축 자개 지도 파노라마 배너 (순차 강조 애니메이션) */}
                <SixPerspectivesPanoramaBanner />

                <div className="gungjung-glass px-6 py-10 md:px-10 md:py-14 lg:px-14 lg:py-16 relative overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-7">
                    {[
                      { t: "01 · 나만의 타고난 매력 무기", d: "남을 흉내 내지 않고도 상대가 깊이 빠져드는 고유한 매력의 결", i: "fa-wand-magic-sparkles" },
                      { t: "02 · 무의식적 끌림의 기준", d: "이성보다 먼저 반응하며 특정한 사람에게 마음이 열리는 숨은 취향", i: "fa-bolt" },
                      { t: "03 · 반복되는 관계의 그림자", d: "사람이 바뀌어도 늘 같은 불안과 오해로 사랑을 멈추게 하는 방어기제", i: "fa-shield-halved" },
                      { t: "04 · 반드시 피해야 할 악연 코드", d: "강렬한 끌림 뒤에 내 자존감과 에너지를 고갈시키는 위험한 관계의 신호", i: "fa-user-group" },
                      { t: "05 · 뇌에 각인된 감정 반응 회로", d: "서운함과 갈등의 순간, 나도 모르게 튀어나오는 자동화된 감정 습관", i: "fa-heart" },
                      { t: "06 · 연애 에너지 소진과 충전 회로", d: "연애할수록 지치는 원인을 짚어내고 다시 나를 채우는 건강한 회복 기준", i: "fa-key" }
                    ].map((item, idx) => (
                      <div 
                        key={idx} 
                        className="detail-glass-card flex flex-col items-center text-center py-6 px-4 sm:px-5 md:px-5 rounded-[22px] md:rounded-[26px] group transition-all duration-300"
                      >
                        <div className="w-[52px] h-[52px] rounded-2xl bg-[#B7788D]/15 flex items-center justify-center border border-[#B7788D]/35 text-[#D9A8A7] shadow-sm mb-3.5 group-hover:scale-105 group-hover:bg-[#B7788D]/25 transition-all duration-300">
                          <i className={`fas ${item.i} text-lg md:text-[19px]`}></i>
                        </div>
                        <div className="w-full flex flex-col items-center flex-1 justify-center">
                          <h4 className="text-[17px] sm:text-[18.5px] lg:text-[19.5px] font-bold text-white mb-2.5 leading-snug tracking-tight text-center whitespace-nowrap">
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

            {/* POINT 04: 실제 리포트 분석 목차 (7개의 장 목차 공개) */}
            <LoveReportTableOfContents />

            {/* 신규 섹션: POINT 04. SECRET PRESCRIPTION — 당신만을 위해 봉인된 단 하나의 선천코드 처방전 */}
            <SecretPrescriptionPoint />

            {/* POINT 05: 개인 맞춤 실천 처방 샘플 (PART 07 실제 행동 처방전 샘플) */}
            <LovePrescriptionSample />

            {/* ══════════════════════════════════════════════════════════════════════ */}
            {/* POINT 06: 백도화의 차별점 비교 — 일반 조언 vs 선천코드 처방전, 3대 비교표 */}
            {/* ══════════════════════════════════════════════════════════════════════ */}
            {/* 일반 연애 조언과의 차이점 */}
            <GeneralAdviceComparison />

            {/* 기존 사주·AI 리포트와의 3대 비교표 */}
            <ReportComparisonTable />

            {/* POINT 07: 프리미엄 결과물과 소장 가치 (리포트 샘플 미리보기, 라이트박스 지원) */}
            <ReportSamplePreview />

            {/* ══════════════════════════════════════════════════════════════════════ */}
            {/* POINT 08: 실질적인 선택의 변화 — 사랑받기 위해 애쓰는 연애에서 나다운 사랑으로 */}
            {/* ══════════════════════════════════════════════════════════════════════ */}
            <section className="mb-20 text-center">
              <Reveal>
                <div className="max-w-4xl mx-auto">
                  <span className="block font-elegant text-[12pt] font-semibold tracking-[0.2em] text-[#D9A8A7] uppercase mb-4">
                    POINT 08 · REAL TRANSFORMATION
                  </span>
                  <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white mb-6 leading-[1.25] md:leading-[1.3] break-keep">
                    &ldquo;이제 사랑 앞에서,<br className="sm:hidden" />
                    <span className="gradient-text-love"> 나만의 기준을 갖게 됩니다.</span>&rdquo;
                  </h2>
                  <p className="text-[18px] text-[#EDE6DA] opacity-85 font-light leading-relaxed max-w-2xl mx-auto break-keep">
                    사랑받기 위해 애쓰는 관계에서 벗어나,<br className="hidden sm:inline" />
                    온전한 나로서 누구에게 마음을 내어줄지 당당하게 선택합니다.
                  </p>
                </div>
              </Reveal>
            </section>

            {/* 리포트를 열어보는 순간, 당신의 연애에 생기는 3가지 변화 */}
            <TransformationThreeChanges />

            {/* 리포트를 읽은 뒤 달라질 수 있는 선택 (BEFORE -> AWARENESS -> AFTER) */}
            <RelationshipChangeScenario />

            {/* ══════════════════════════════════════════════════════════════════════ */}
            {/* 중간 CTA: POINT 08 직후 배치 */}
            {/* ══════════════════════════════════════════════════════════════════════ */}
            <section className="mb-40 max-w-4xl mx-auto px-4">
              <Reveal>
                <div className="gungjung-glass p-8 md:p-14 rounded-[36px] border border-[#B7788D]/40 bg-gradient-to-b from-[#250F22]/70 via-[#180A1A]/60 to-[#100612]/80 text-center relative overflow-hidden shadow-2xl">
                  {/* 은은한 배경 오라 */}
                  <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#B7788D]/15 rounded-full blur-[80px] pointer-events-none" />

                  <span className="block font-elegant text-xs md:text-sm font-semibold tracking-[0.25em] text-[#D9A8A7] uppercase mb-4">
                    BEGIN YOUR JOURNEY
                  </span>

                  <h3 className="text-2xl md:text-[34px] font-elegant font-bold text-white mb-4 leading-snug break-keep">
                    내 사랑의 설계도를 읽을 준비가 되셨나요?
                  </h3>

                  <p className="text-sm md:text-base text-[#EDE6DA]/85 font-light leading-relaxed max-w-xl mx-auto break-keep mb-6">
                    끌림의 이유부터 나만의 관계 처방까지. 이제 당신의 선천코드를 펼쳐보세요.
                  </p>

                  <div className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-[#B7788D]/15 border border-[#B7788D]/35 text-xs md:text-sm text-[#D9A8A7] font-medium mb-8">
                    39,000원 · 맞춤 PDF · 오행 카드 1종 포함
                  </div>

                  {/* 구매 버튼 (기존 상단/하단 동작 재사용) */}
                  <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md mx-auto justify-center items-center">
                    <button 
                      onClick={handleAddToCart}
                      className="w-full sm:w-1/2 py-4 md:py-5 px-6 rounded-2xl font-bold text-base md:text-lg hover:scale-[1.02] active:scale-95 transition-all duration-300 border border-[#B7788D]/40 text-[#E6BFA9] hover:bg-[#B7788D]/10 bg-transparent text-center"
                    >
                      장바구니 담기
                    </button>
                    <button 
                      onClick={handlePurchase}
                      className="w-full sm:w-1/2 py-4 md:py-5 px-6 rounded-2xl font-bold text-base md:text-lg hover:scale-[1.02] active:scale-95 transition-all duration-500 bg-gradient-to-br from-[#B57987] to-[#7D4954] border border-[rgba(229,196,187,0.5)] text-[#FAF6EE] shadow-[0_4px_20px_rgba(125,73,84,0.35)] hover:shadow-[0_0_25px_rgba(181,121,135,0.45)] hover:brightness-110 text-center"
                    >
                      바로 신청하기
                    </button>
                  </div>
                </div>
              </Reveal>
            </section>

            {/* BEHIND THE REPORT: 제작 철학 및 분석 기준 구축 과정 (STUDY 01~04) */}
            <ReportProductionTimeline />

            {/* 추천 대상과 맞지 않는 대상 */}
            <RecommendedAudience />

            {/* 고객 후기 (검증된 후기 등록 시 활성화) */}
            <ReportTestimonials />

            {/* 백도화의 분석 철학은 POINT 02(동양 명리 × 관계 심리)로 통합 정리됨 */}

            {/* LIFELONG COMPASS(소장 가치 6대 요소 요약)는 BEHIND THE REPORT로 통합 정리됨 */}

            {/* 소장하고 싶은 프리미엄 리포트 (p5.webp) */}
            <section className="mb-40">
              <Reveal>
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                  <div className="space-y-10 order-2 lg:order-1">
                    <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white leading-[1.25] md:leading-[1.3] break-keep">
                      소장하고 싶은 <br /> <span className="gradient-text-love">프리미엄 리포트</span>
                    </h2>
                    <p className="text-[18px] text-[#EDE6DA] opacity-75 leading-relaxed break-keep font-light whitespace-pre-wrap">
                      선천코드 연애 리포트는 한 번 읽고 끝나는 결과지가 아니라, 당신의 사랑을 다시 바라보게 하는 개인 맞춤형 감성 리포트입니다.{"\n\n"}
                      백도화만의 깊이 있는 해석과 우아한 문체로 당신의 사랑 이야기를 새롭게 정의해 드립니다.
                    </p>
                  </div>
                  <div className="order-1 lg:order-2 relative group">
                    <div className="absolute -inset-10 bg-[#B7788D]/10 blur-[60px] rounded-full"></div>
                    <Image 
                      src="/image/lovereport/the%20hidden%20love%20report.webp" 
                      alt="소장하고 싶은 프리미엄 리포트" 
                      width={1086}
                      height={1448}
                      className="relative z-10 w-full h-auto rounded-[32px] md:rounded-[44px] shadow-[0_0_80px_rgba(0,0,0,0.6)] border border-white/10 transition-transform duration-1000 group-hover:scale-[1.03]" 
                    />
                  </div>
                </div>
              </Reveal>
            </section>

            {/* 리포트 제작 및 수령 안내 ('리포트는 이렇게 만들어집니다') */}
            <section className="mb-40">
              <ReportCommonInfo isCompatibility={false} showFiveElements={false} />
            </section>

            {/* 자주 묻는 질문 FAQ (10개 항목 아코디언) */}
            <ReportFAQ />

            {/* 구매 전 안내 (6대 중요 안내 사항) */}
            <PurchaseNotice />

            {/* 오행 에너지 카드 1종 사은품 안내 (SPECIAL GIFT) */}
            <FiveElementsSpecialGift />

            {/* 최종 구매 CTA (이미지와 텍스트·버튼 분리 구조) */}
            <section className="mb-28 w-full max-w-[1280px] mx-auto">
              <Reveal>
                {/* ① 기존 배경 이미지 단독 표시 (필터 및 오버레이 완전 제거) */}
                <div className="relative w-full rounded-[40px] overflow-hidden border border-white/10 shadow-2xl aspect-[16/9] bg-[#130917] mb-14 md:mb-16 group">
                  <Image 
                    src="/image/lovereport/two%20love.webp" 
                    alt="Final CTA Journey" 
                    width={1672}
                    height={941}
                    className="w-full h-full object-cover transition-transform duration-[10000ms] group-hover:scale-105" 
                  />
                </div>

                {/* ② 이미지 아래 텍스트 영역 (중앙 정렬) */}
                <div className="text-center max-w-3xl mx-auto px-4 mb-10 md:mb-12">
                  <span className="block font-elegant text-[12pt] font-semibold tracking-[0.2em] uppercase text-[#D9A8A7] mb-6">
                    BEGIN YOUR JOURNEY
                  </span>
                  
                  <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white mb-6 leading-[1.25] md:leading-[1.3] break-keep">
                    &ldquo;반복을 끊는 첫 장을 펼치십시오.&rdquo;
                  </h2>
                  
                  <p className="text-[18px] text-[#EDE6DA]/90 leading-relaxed font-light break-keep max-w-2xl mx-auto">
                    당신은 사랑받기 위해 더 애써야 하는 사람이 아닙니다.<br className="hidden sm:inline" />
                    이제는 당신에게 이미 있는 매력을 알고, 누구에게 어떻게 마음을 내어줄지 선택할 차례입니다.
                  </p>
                </div>

                {/* ③ 구매 버튼 영역 (중앙 정렬) */}
                <div className="flex flex-col sm:flex-row gap-4 w-full max-w-lg mx-auto justify-center items-center">
                  <button 
                    onClick={handleAddToCart}
                    className="w-full sm:flex-1 py-5 md:py-6 rounded-2xl font-bold text-base md:text-lg hover:scale-[1.02] active:scale-95 transition-all duration-300 border border-[#B7788D]/40 text-[#E6BFA9] hover:bg-[#B7788D]/10 bg-transparent text-center"
                  >
                    장바구니 담기
                  </button>
                  <button 
                    onClick={handlePurchase}
                    className="w-full sm:flex-grow-[1.4] py-5 md:py-6 rounded-2xl font-bold text-base md:text-lg hover:scale-[1.02] active:scale-95 transition-all duration-500 bg-gradient-to-br from-[#B57987] to-[#7D4954] border border-[rgba(229,196,187,0.5)] text-[#FAF6EE] shadow-[0_4px_20px_rgba(125,73,84,0.35)] hover:shadow-[0_0_25px_rgba(181,121,135,0.45)] hover:brightness-110 text-center"
                  >
                    바로 신청하기
                  </button>
                </div>
              </Reveal>
            </section>

            {/* 기존 정책 링크 보존 */}
            <section className="pb-20 text-center">
              <div className="flex justify-center gap-10 text-[10px] tracking-[0.3em] uppercase text-white/30">
                <Link href="/terms" className="hover:text-[#D9A8A7] transition-colors">이용약관</Link>
                <Link href="/privacy" className="hover:text-[var(--accent-gold)] transition-colors">개인정보처리방침</Link>
                <Link href="/refund" className="hover:text-[var(--accent-gold)] transition-colors">환불정책</Link>
              </div>
            </section>

          </div>
        </div>
        <Footer />
      </GlobalBackground>
    </main>
  )
}
