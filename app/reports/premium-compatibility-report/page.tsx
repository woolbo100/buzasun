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
import RecommendedForCards from '@/components/RecommendedForCards'

// 새로 추가된 궁합 전용 18개 설득 블록 독립 컴포넌트들
import CompatibilityCoreDifferentiation from '@/components/reports/compatibility-report/CompatibilityCoreDifferentiation'
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
                  <span className="inline-block px-5 py-1.5 rounded-full text-[12pt] font-elegant font-semibold tracking-[0.25em] uppercase bg-[#663244]/20 border border-[#935C6B]/40 text-[#D8BB94]">
                    BAEKDOHWA PREMIUM COMPATIBILITY REPORT
                  </span>
                </div>

                {/* 2. 보조 카피 */}
                <p className="text-[16px] md:text-[18px] text-[#D8BB94] font-medium tracking-wide mb-4">
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
                <p className="text-[16px] md:text-[18px] text-[#EDE6DA] opacity-90 leading-relaxed max-w-2xl mx-auto break-keep font-elegant italic mb-6 md:mb-7">
                  두 사람의 인연은 우연이 아니라 흐름입니다.
                </p>

                {/* 6. 구매 버튼 영역 */}
                <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md mx-auto justify-center items-center mb-24 md:mb-28">
                  <button 
                    onClick={handleAddToCart}
                    className="w-full sm:w-1/2 py-5 px-6 rounded-2xl font-bold text-base md:text-lg hover:scale-[1.02] active:scale-95 transition-all duration-300 border border-[#935C6B]/40 text-[#D8BB94] hover:bg-[#663244]/20 bg-transparent text-center"
                  >
                    장바구니 담기
                  </button>
                  <button 
                    onClick={handlePurchase}
                    className="w-full sm:w-1/2 py-5 px-6 rounded-2xl font-bold text-base md:text-lg hover:scale-[1.02] active:scale-95 transition-all duration-500 bg-[linear-gradient(110deg,#552334_0%,#431a2a_55%,#32141f_100%)] hover:bg-[linear-gradient(110deg,#64293d_0%,#522034_55%,#3e1927_100%)] border border-[rgba(229,196,187,0.6)] hover:border-[rgba(229,196,187,0.85)] text-[#FAF7F2] shadow-[0_4px_16px_rgba(0,0,0,0.35)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.4),0_0_20px_rgba(229,196,187,0.32)] hover:brightness-105 text-center"
                  >
                    바로 신청하기
                  </button>
                </div>

                {/* 7. 기존 공감 문구 (구매 버튼 아래로 이동) */}
                <div className="max-w-3xl mx-auto mb-14 text-center">
                  <p className="text-2xl md:text-[34px] lg:text-[38px] text-white font-elegant font-bold leading-[1.3] break-keep mb-6">
                    &ldquo;분명 사랑하는데,<br className="hidden sm:inline" />
                    왜 우리는 같은 이유로 <span className="gradient-text-reunion">계속 상처를 주고받을까?</span>&rdquo;
                  </p>
                  <div className="text-[16px] md:text-[18px] text-[#EDE6DA]/90 space-y-3 font-light leading-relaxed break-keep max-w-2xl mx-auto">
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
            {/* SECTION 03. 일반적인 연애 조언이 충분하지 않은 이유 */}
            {/* ══════════════════════════════════════════════════════════════════════ */}
            <CompatibilityAdviceComparison />

            {/* ══════════════════════════════════════════════════════════════════════ */}
            {/* SECTION 04. 두 사람의 관계 구조 재정의 */}
            {/* ══════════════════════════════════════════════════════════════════════ */}
            <CompatibilityRelationshipDiagram />

            {/* ══════════════════════════════════════════════════════════════════════ */}
            {/* SECTION 05. 선천코드 궁합 리포트 분석 방법 (기존 Overview & 6대 카드 통합) */}
            {/* ══════════════════════════════════════════════════════════════════════ */}
            <CompatibilityAnalysisMethod />

            {/* 기존 Overview 섹션 (p2.webp 에셋 보존) */}
            <section className="mb-40">
              <Reveal>
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                  <div className="relative overflow-hidden rounded-[40px] border border-white/10 shadow-2xl">
                    <Image 
                      src="/image/compatibility/p2.webp" 
                      alt="Overview" 
                      width={800}
                      height={600}
                      className="w-full h-auto object-cover" 
                    />
                  </div>
                  <div className="space-y-10">
                    <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white leading-[1.25] md:leading-[1.3] break-keep">
                      사랑은 감정이지만,<br /> <span className="text-[var(--accent-gold)]">관계는 흐름입니다</span>
                    </h2>
                    <p className="text-[16px] md:text-[18px] text-[#EDE6DA] opacity-75 leading-relaxed break-keep font-light whitespace-pre-wrap">
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

            {/* 기존 6대 분석 내용 카드 및 이미지 (p4.webp 에셋 보존) */}
            <section className="mb-40 text-center">
              <Reveal>
                <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white tracking-[0.1em] mb-16 leading-[1.25] md:leading-[1.3] break-keep">
                  리포트 <span className="gradient-text-reunion">주요 분석 내용</span>
                </h2>
                <div className="max-w-7xl mx-auto mb-20">
                  <Image 
                    src="/image/compatibility/p4.webp" 
                    alt="Analysis Detail" 
                    width={1200}
                    height={800}
                    className="w-full h-auto rounded-[50px] shadow-2xl border border-white/10" 
                  />
                </div>
                <div className="gungjung-glass p-12 md:p-24 relative overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {[
                      { t: "선천적 기질 궁합", d: "두 사람의 타고난 에너지 조화 분석", i: "fa-yin-yang" },
                      { t: "핵심 끌림 이유", d: "서로에게 강력하게 끌리는 근본 원인 해독", i: "fa-magnet" },
                      { t: "갈등 근본 원인", d: "반복되는 다툼의 무의식적 배경 분석", i: "fa-triangle-exclamation" },
                      { t: "소통 및 유지 전략", d: "서로를 이해하는 방식과 관계 유지법 제안", i: "fa-comments" },
                      { t: "미래 관계 해석", d: "결혼 및 장기적 인연의 가능성 탐색", i: "fa-ring" },
                      { t: "성장 방향 제안", d: "함께 더 행복해질 수 있는 실질적 가이드", i: "fa-seedling" }
                    ].map((item, idx) => (
                      <div key={idx} className="detail-glass-card flex flex-col items-center gap-6 p-8 rounded-3xl group">
                        <div className="w-16 h-16 rounded-2xl bg-[#1A0514] flex items-center justify-center border border-[#935C6B]/40 text-[#D8BB94] shadow-lg group-hover:scale-110 transition-transform">
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
                    <p className="text-[#EDE6DA] opacity-75 italic font-elegant text-[16px] md:text-[18px] break-keep">
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
            {/* SECTION 08. 프리미엄 궁합 리포트 목차 공개 (7 PART & PART 07 강조) */}
            {/* ══════════════════════════════════════════════════════════════════════ */}
            <CompatibilityReportTableOfContents />

            {/* ══════════════════════════════════════════════════════════════════════ */}
            {/* NEW. PART 07 실제 행동 대화 처방전 샘플 영역 (구체적 소통 솔루션) */}
            {/* ══════════════════════════════════════════════════════════════════════ */}
            <CompatibilityPrescriptionSample />

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
            {/* SECTION 13. 고객 후기 (실제 검증된 후기 등록 시 활성화) */}
            {/* ══════════════════════════════════════════════════════════════════════ */}
            <CompatibilityTestimonials />

            {/* ══════════════════════════════════════════════════════════════════════ */}
            {/* SECTION 14. 백도화의 궁합 분석 철학 (궁중 서신 편지 형태) */}
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
                    <p className="text-[16px] md:text-[18px] text-[#EDE6DA] opacity-75 leading-relaxed break-keep font-light whitespace-pre-wrap">
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
            {/* SECTION 18. 최종 CTA (p6.webp 및 기존 구매 버튼 보존) */}
            {/* ══════════════════════════════════════════════════════════════════════ */}
            <section className="relative min-h-[640px] flex flex-col items-center justify-center overflow-hidden rounded-[60px] mb-20 group w-full max-w-[1280px] mx-auto border border-white/10 shadow-2xl">
              <div className="absolute inset-0 z-0">
                <Image 
                  src="/image/compatibility/p6.webp" 
                  alt="Final CTA Background" 
                  fill
                  className="object-cover transition-transform duration-[15000ms] group-hover:scale-125" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0514] via-[#0a0514]/75 to-transparent"></div>
              </div>

              <div className="relative z-10 text-center px-6 md:px-10 py-16">
                <Reveal>
                  <span className="block font-elegant text-[12pt] font-semibold tracking-[0.2em] uppercase text-[#D8BB94] mb-6">
                    HARMONY FOR TWO
                  </span>
                  
                  {/* 기존 메인 카피 보존 */}
                  <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white mb-6 leading-[1.25] md:leading-[1.3] break-keep">
                    사랑의 방향을 <span className="text-[var(--accent-gold)]">결정하는 순간</span>
                  </h2>

                  {/* 새로운 보조 강조 문구 추가 */}
                  <p className="text-[18px] md:text-[22px] text-[var(--accent-gold-light)] font-medium mb-6 max-w-2xl mx-auto break-keep font-elegant leading-[1.3]">
                    &ldquo;두 사람의 차이를 이해하는 순간,<br />
                    관계의 새로운 선택이 시작됩니다.&rdquo;
                  </p>
                  
                  <p className="text-[16px] md:text-[18px] text-[#EDE6DA]/85 max-w-2xl mx-auto mb-12 font-light leading-relaxed break-keep">
                    우리의 관계를 단순한 점수로 판단하지 마십시오.<br />
                    서로의 기질과 반복되는 관계 패턴을 이해하고, 앞으로의 선택을 위한 두 사람만의 설계도를 펼쳐보십시오.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 w-full max-w-lg mx-auto relative z-10 justify-center">
                    <button 
                      onClick={handleAddToCart}
                      className="flex-1 py-6 rounded-2xl font-bold text-lg md:text-xl hover:scale-[1.02] active:scale-95 transition-all duration-300 border border-[#935C6B]/40 text-[#D8BB94] hover:bg-[#663244]/20 bg-transparent"
                    >
                      장바구니 담기
                    </button>
                    <button 
                      onClick={handlePurchase}
                      className="flex-grow-[1.5] py-6 rounded-2xl font-bold text-lg md:text-xl hover:scale-[1.02] active:scale-95 transition-all duration-500 bg-[linear-gradient(110deg,#552334_0%,#431a2a_55%,#32141f_100%)] hover:bg-[linear-gradient(110deg,#64293d_0%,#522034_55%,#3e1927_100%)] border border-[rgba(229,196,187,0.6)] hover:border-[rgba(229,196,187,0.85)] text-[#FAF7F2] shadow-[0_4px_16px_rgba(0,0,0,0.35)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.4),0_0_20px_rgba(229,196,187,0.32)] hover:brightness-105"
                    >
                      바로 신청하기
                    </button>
                  </div>
                </Reveal>
              </div>
            </section>

            {/* 기존 정책 링크 보존 */}
            <section className="pb-20 text-center">
              <div className="flex justify-center gap-10 text-[10px] tracking-[0.3em] uppercase text-white/30">
                <Link href="/terms" className="hover:text-[#D8BB94] transition-colors">이용약관</Link>
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
