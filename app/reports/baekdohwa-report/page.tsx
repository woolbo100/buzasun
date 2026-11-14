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

// 새로 추가된 18개 설득 블록 독립 컴포넌트들
import LoveCoreDifferentiation from '@/components/reports/baekdohwa-report/LoveCoreDifferentiation'
import QuestionShiftComparison from '@/components/reports/common/QuestionShiftComparison'
import LovePrescriptionSample from '@/components/reports/baekdohwa-report/LovePrescriptionSample'
import LovePatternChecklist from '@/components/reports/baekdohwa-report/LovePatternChecklist'
import GeneralAdviceComparison from '@/components/reports/baekdohwa-report/GeneralAdviceComparison'
import RelationshipPatternFlow from '@/components/reports/baekdohwa-report/RelationshipPatternFlow'
import PersonalAnalysisMethod from '@/components/reports/baekdohwa-report/PersonalAnalysisMethod'
import PersonalizedCaseComparison from '@/components/reports/baekdohwa-report/PersonalizedCaseComparison'
import ReportComparisonTable from '@/components/reports/baekdohwa-report/ReportComparisonTable'
import LoveReportTableOfContents from '@/components/reports/baekdohwa-report/LoveReportTableOfContents'
import ReportProductionTimeline from '@/components/reports/baekdohwa-report/ReportProductionTimeline'
import ReportSamplePreview from '@/components/reports/baekdohwa-report/ReportSamplePreview'
import RelationshipChangeScenario from '@/components/reports/baekdohwa-report/RelationshipChangeScenario'
import RecommendedAudience from '@/components/reports/baekdohwa-report/RecommendedAudience'
import ReportTestimonials from '@/components/reports/baekdohwa-report/ReportTestimonials'
import BaekdohwaPhilosophy from '@/components/reports/baekdohwa-report/BaekdohwaPhilosophy'
import ReportValueSummary from '@/components/reports/baekdohwa-report/ReportValueSummary'
import ReportFAQ from '@/components/reports/baekdohwa-report/ReportFAQ'
import PurchaseNotice from '@/components/reports/baekdohwa-report/PurchaseNotice'

// ══════════════════════════════════════════════════════════════════════
// 히어로 & 공감 섹션 가로 16:9 이미지 설정 (교체 가능 구조)
// ══════════════════════════════════════════════════════════════════════
const HERO_IMAGE_CONFIG = {
  src: '/image/lovereport/p1.webp',
  alt: '선천코드 연애 리포트 메인 히어로 16:9',
  width: 1440,
  height: 810,
}

const EMPATHY_IMAGE_CONFIG = {
  src: '/image/lovereport/p2.webp',
  alt: '선천코드 연애 리포트 공감 가로 비주얼 16:9',
  width: 1440,
  height: 810,
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
      price: 49000,
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
            {/* SECTION 01. 히어로 — 제목 → 16:9 메인 이미지 → 버튼 → 공감 문구 → 공감 16:9 이미지 */}
            {/* ══════════════════════════════════════════════════════════════════════ */}
            <section className="text-center mb-36">
              <Reveal delayMs={100}>
                {/* 1. 상단 배지 */}
                <div className="mb-6">
                  <span className="inline-block px-5 py-1.5 rounded-full text-[12pt] font-elegant font-semibold tracking-[0.25em] uppercase bg-[#B7788D]/15 border border-[#B7788D]/35 text-[#D9A8A7]">
                    PREMIUM LOVE CODE REPORT
                  </span>
                </div>

                {/* 2. 보조 카피 */}
                <p className="text-[16px] md:text-[18px] text-[#D9A8A7] font-medium tracking-wide mb-4">
                  선천코드로 읽는 나의 사랑 설계도
                </p>

                {/* 3. 메인 제품명 제목 */}
                <h1 className="text-3xl md:text-6xl font-elegant font-bold mb-10 text-white leading-[1.25] md:leading-[1.3] break-keep">
                  선천코드 <span className="gradient-text-love">연애 리포트</span>
                </h1>

                {/* 4. 메인 가로 이미지 (16:9 비율 풀사이즈 느낌) */}
                <div className="relative w-full max-w-[1280px] mx-auto mb-6 md:mb-8 rounded-[40px] overflow-hidden border border-white/10 shadow-2xl group aspect-[16/9] bg-[#130917]">
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
                  나를 아는 것에서부터, 당신의 진짜 연애는 시작됩니다.
                </p>

                {/* 6. 구매 버튼 영역 */}
                <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md mx-auto justify-center items-center mb-24 md:mb-28">
                  <button 
                    onClick={handleAddToCart}
                    className="w-full sm:w-1/2 py-5 px-6 rounded-2xl font-bold text-base md:text-lg hover:scale-[1.02] active:scale-95 transition-all duration-300 border border-[#B7788D]/40 text-[#E6BFA9] hover:bg-[#B7788D]/10 bg-transparent text-center"
                  >
                    장바구니 담기
                  </button>
                  <button 
                    onClick={handlePurchase}
                    className="w-full sm:w-1/2 py-5 px-6 rounded-2xl font-bold text-base md:text-lg hover:scale-[1.02] active:scale-95 transition-all duration-500 bg-gradient-to-br from-[#B57987] to-[#7D4954] border border-[rgba(229,196,187,0.5)] text-[#FAF6EE] shadow-[0_4px_20px_rgba(125,73,84,0.35)] hover:shadow-[0_0_25px_rgba(181,121,135,0.45)] hover:brightness-110 text-center"
                  >
                    바로 신청하기
                  </button>
                </div>

                {/* 7. 기존 공감 문구 (구매 버튼 아래로 이동) */}
                <div className="max-w-3xl mx-auto mb-14 text-center">
                  <p className="text-2xl md:text-[34px] lg:text-[38px] text-white font-elegant font-bold leading-[1.3] break-keep mb-6">
                    &ldquo;상대만 바뀌었을 뿐,<br className="hidden sm:inline" />
                    당신의 연애는 왜 <span className="gradient-text-love">매번 같은 결말</span>을 맞을까?&rdquo;
                  </p>
                  <div className="text-[16px] md:text-[18px] text-[#EDE6DA]/90 space-y-3 font-light leading-relaxed break-keep max-w-2xl mx-auto">
                    <p>처음에는 다정했다. 이번만큼은 다를 거라 믿었다.</p>
                    <p>그런데 어느 순간부터 또 내가 기다리고, 내가 불안해하고, 내가 관계를 붙잡고 있다.</p>
                    <p className="pt-2 text-[#E6BFA9] font-medium leading-relaxed">
                      문제는 이번에 만난 상대 한 사람만이 아닐 수 있습니다.<br className="hidden sm:inline" />
                      당신이 사랑을 선택하고 반응하는 방식에도 반복되는 패턴이 있을지 모릅니다.
                    </p>
                  </div>
                </div>

                {/* 8. 공감 문구 아래 추가 가로 이미지 (16:9, 교체 가능 구조) */}
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

            {/* ══════════════════════════════════════════════════════════════════════ */}
            {/* SECTION 02. 반복되는 연애 패턴 체크리스트 */}
            {/* ══════════════════════════════════════════════════════════════════════ */}
            <LovePatternChecklist />

            {/* ══════════════════════════════════════════════════════════════════════ */}
            {/* NEW. 사람을 바꾸는 것만으로는 같은 연애가 끝나지 않는다 (차별화 섹션) */}
            {/* ══════════════════════════════════════════════════════════════════════ */}
            <LoveCoreDifferentiation />

            {/* ══════════════════════════════════════════════════════════════════════ */}
            {/* SECTION 03. 일반적인 연애 조언이 맞지 않았던 이유 */}
            {/* ══════════════════════════════════════════════════════════════════════ */}
            <GeneralAdviceComparison />

            {/* ══════════════════════════════════════════════════════════════════════ */}
            {/* SECTION 04. 반복되는 사랑의 구조 */}
            {/* ══════════════════════════════════════════════════════════════════════ */}
            <RelationshipPatternFlow />

            {/* ══════════════════════════════════════════════════════════════════════ */}
            {/* SECTION 05. 선천코드 리포트의 분석 방식 (기존 Overview & 6대 카드 통합) */}
            {/* ══════════════════════════════════════════════════════════════════════ */}
            <PersonalAnalysisMethod />

            {/* 기존 Overview 섹션 (p2.webp 에셋 보존) */}
            <section className="mb-40">
              <Reveal>
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                  <div className="relative overflow-hidden rounded-[40px] border border-white/10 shadow-2xl">
                    <Image 
                      src="/image/lovereport/p2.webp" 
                      alt="Overview" 
                      width={800}
                      height={600}
                      className="w-full h-auto object-cover" 
                    />
                  </div>
                  <div className="space-y-10">
                    <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white leading-[1.25] md:leading-[1.3] break-keep">
                      당신의 사랑은 <br /> <span className="gradient-text-love">우연이 아닙니다</span>
                    </h2>
                    <p className="text-[16px] md:text-[18px] text-[#EDE6DA] opacity-75 leading-relaxed break-keep font-light whitespace-pre-wrap">
                      선천코드 연애 리포트는 단순한 연애운 풀이가 아니라, 당신이 어떤 사람에게 끌리고, 왜 비슷한 관계 패턴을 반복하는지, 그리고 어떤 방식으로 사랑을 회복하고 성장시킬 수 있는지를 섬세하게 해석하는 프리미엄 연애 리포트입니다.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {["타고난 연애 기질", "무의식적 끌림 패턴", "관계 유지 전략", "매력 에너지 활용법"].map((item, idx) => (
                        <div key={idx} className="detail-glass-card flex items-center gap-4 p-4 rounded-2xl">
                          <div className="w-2 h-2 rounded-full bg-[#B7788D] shadow-[0_0_10px_rgba(183,120,141,0.5)]"></div>
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
                  리포트 <span className="gradient-text-love">주요 분석</span> 내용
                </h2>
                <div className="max-w-7xl mx-auto mb-20">
                  <Image 
                    src="/image/lovereport/p4.webp" 
                    alt="Analysis Detail" 
                    width={1200}
                    height={800}
                    className="w-full h-auto rounded-[50px] shadow-2xl border border-white/10" 
                  />
                </div>
                <div className="gungjung-glass p-12 md:p-24 relative overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {[
                      { t: "선천적 연애 기질", d: "당신이 타고난 사랑의 에너지 분석", i: "fa-heart" },
                      { t: "무의식적 끌림", d: "반복적으로 끌리는 이성 유형 해독", i: "fa-bolt" },
                      { t: "관계 방어기제", d: "연애를 방해하는 무의식적 장벽 탐색", i: "fa-shield-halved" },
                      { t: "최적의 파트너", d: "에너지를 보충해줄 파트너 유형 제안", i: "fa-user-group" },
                      { t: "매력 에너지", d: "가장 나다운 모습으로 사랑받는 법", i: "fa-wand-magic-sparkles" },
                      { t: "이별 솔루션", d: "갈등의 고리를 끊어낼 실질적 변화", i: "fa-key" }
                    ].map((item, idx) => (
                      <div key={idx} className="detail-glass-card flex flex-col items-center gap-6 p-8 rounded-3xl group">
                        <div className="w-16 h-16 rounded-2xl bg-[#2D0A1E] flex items-center justify-center border border-[#B7788D]/35 text-[#D9A8A7] shadow-lg group-hover:scale-110 transition-transform">
                          <i className={`fas ${item.i} text-2xl`}></i>
                        </div>
                        <div>
                          <h3 className="text-[20px] md:text-[24px] font-bold text-white mb-3 leading-snug break-keep">{item.t}</h3>
                          <p className="text-[15px] md:text-[16px] text-[#EDE6DA] opacity-60 font-light break-keep">{item.d}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </section>

            {/* ══════════════════════════════════════════════════════════════════════ */}
            {/* SECTION 06. 같은 선천코드, 다른 사랑의 이야기 */}
            {/* ══════════════════════════════════════════════════════════════════════ */}
            <PersonalizedCaseComparison />

            {/* ══════════════════════════════════════════════════════════════════════ */}
            {/* SECTION 07. 기존 사주·AI 리포트와의 차별점 */}
            {/* ══════════════════════════════════════════════════════════════════════ */}
            <ReportComparisonTable />

            {/* ══════════════════════════════════════════════════════════════════════ */}
            {/* NEW. 당신은 아직도 미래가 어떻게 될지만 묻고 있습니까? (패러다임 전환) */}
            {/* ══════════════════════════════════════════════════════════════════════ */}
            <QuestionShiftComparison theme="love" />

            {/* ══════════════════════════════════════════════════════════════════════ */}
            {/* SECTION 08. 목차 공개 — 가장 중요한 핵심 영역 (7 PART & PART 07 강조) */}
            {/* ══════════════════════════════════════════════════════════════════════ */}
            <LoveReportTableOfContents />

            {/* ══════════════════════════════════════════════════════════════════════ */}
            {/* NEW. PART 07 실제 행동 처방전 샘플 영역 (구체적 실천 솔루션) */}
            {/* ══════════════════════════════════════════════════════════════════════ */}
            <LovePrescriptionSample />

            {/* ══════════════════════════════════════════════════════════════════════ */}
            {/* SECTION 09. 맞춤 리포트 제작 과정 */}
            {/* ══════════════════════════════════════════════════════════════════════ */}
            <ReportProductionTimeline />

            {/* ══════════════════════════════════════════════════════════════════════ */}
            {/* SECTION 10. 리포트 샘플 미리보기 (확대 라이트박스 지원) */}
            {/* ══════════════════════════════════════════════════════════════════════ */}
            <ReportSamplePreview />

            {/* ══════════════════════════════════════════════════════════════════════ */}
            {/* SECTION 11. 리포트를 읽은 뒤 달라질 수 있는 선택 */}
            {/* ══════════════════════════════════════════════════════════════════════ */}
            <RelationshipChangeScenario />

            {/* ══════════════════════════════════════════════════════════════════════ */}
            {/* SECTION 12. 추천 대상과 맞지 않는 대상 (p3.webp & 추천 카드 보존) */}
            {/* ══════════════════════════════════════════════════════════════════════ */}
            <RecommendedAudience />

            {/* ══════════════════════════════════════════════════════════════════════ */}
            {/* SECTION 13. 고객 후기 (검증된 후기 등록 시 활성화) */}
            {/* ══════════════════════════════════════════════════════════════════════ */}
            <ReportTestimonials />

            {/* ══════════════════════════════════════════════════════════════════════ */}
            {/* SECTION 14. 백도화의 분석 철학 (궁중 서신 편지 형태) */}
            {/* ══════════════════════════════════════════════════════════════════════ */}
            <BaekdohwaPhilosophy />

            {/* ══════════════════════════════════════════════════════════════════════ */}
            {/* SECTION 15. 소장 가치와 오행 에너지 카드 (p5.webp 및 ReportCommonInfo 보존) */}
            {/* ══════════════════════════════════════════════════════════════════════ */}
            {/* 15-1. 소장 가치 6대 요소 요약 */}
            <ReportValueSummary />

            {/* 15-2. 기존 프리미엄 섹션 (p5.webp 에셋 보존) */}
            <section className="mb-40">
              <Reveal>
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                  <div className="space-y-10 order-2 lg:order-1">
                    <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white leading-[1.25] md:leading-[1.3] break-keep">
                      소장하고 싶은 <br /> <span className="gradient-text-love">프리미엄 리포트</span>
                    </h2>
                    <p className="text-[16px] md:text-[18px] text-[#EDE6DA] opacity-75 leading-relaxed break-keep font-light whitespace-pre-wrap">
                      선천코드 연애 리포트는 한 번 읽고 끝나는 결과지가 아니라, 당신의 사랑을 다시 바라보게 하는 개인 맞춤형 감성 리포트입니다.{"\n\n"}
                      백도화만의 깊이 있는 해석과 우아한 문체로 당신의 사랑 이야기를 새롭게 정의해 드립니다.
                    </p>
                  </div>
                  <div className="order-1 lg:order-2 relative group">
                    <div className="absolute -inset-10 bg-[#B7788D]/10 blur-[60px] rounded-full"></div>
                    <Image 
                      src="/image/lovereport/p5.webp" 
                      alt="Premium Design" 
                      width={800}
                      height={600}
                      className="relative z-10 w-full h-auto rounded-[60px] shadow-[0_0_80px_rgba(0,0,0,0.6)] border border-white/10 transition-transform duration-1000 group-hover:scale-[1.03]" 
                    />
                  </div>
                </div>
              </Reveal>
            </section>

            {/* 15-3. 기존 오행 에너지 카드 5종 및 제작/수령 안내 (ReportCommonInfo 보존) */}
            <section className="mb-40">
              <ReportCommonInfo isCompatibility={false} />
            </section>

            {/* ══════════════════════════════════════════════════════════════════════ */}
            {/* SECTION 16. 자주 묻는 질문 FAQ (10개 항목 아코디언) */}
            {/* ══════════════════════════════════════════════════════════════════════ */}
            <ReportFAQ />

            {/* ══════════════════════════════════════════════════════════════════════ */}
            {/* SECTION 17. 구매 전 안내 (6대 중요 안내 사항) */}
            {/* ══════════════════════════════════════════════════════════════════════ */}
            <PurchaseNotice />

            {/* ══════════════════════════════════════════════════════════════════════ */}
            {/* SECTION 18. 최종 구매 CTA (p6.webp 및 기존 구매 버튼 보존) */}
            {/* ══════════════════════════════════════════════════════════════════════ */}
            <section className="relative min-h-[640px] flex flex-col items-center justify-center overflow-hidden rounded-[60px] mb-20 group w-full max-w-[1280px] mx-auto border border-white/10 shadow-2xl">
              <div className="absolute inset-0 z-0">
                <Image 
                  src="/image/lovereport/p6.webp" 
                  alt="Final CTA Background" 
                  fill
                  className="object-cover transition-transform duration-[15000ms] group-hover:scale-125" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0514] via-[#0a0514]/75 to-transparent"></div>
              </div>

              <div className="relative z-10 text-center px-6 md:px-10 py-16">
                <Reveal>
                  <span className="block font-elegant text-[12pt] font-semibold tracking-[0.2em] uppercase text-[#D9A8A7] mb-6">
                    BEGIN YOUR JOURNEY
                  </span>
                  
                  <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white mb-6 leading-[1.25] md:leading-[1.3] break-keep">
                    &ldquo;반복을 끊는 첫 장을 펼치십시오.&rdquo;
                  </h2>
                  
                  <p className="text-[16px] md:text-[18px] text-[#EDE6DA]/85 max-w-2xl mx-auto mb-12 font-light leading-relaxed break-keep">
                    사랑의 답을 바깥에서만 찾지 마십시오.<br />
                    나의 관계 구조를 이해하는 것에서 새로운 선택이 시작됩니다.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 w-full max-w-lg mx-auto relative z-10 justify-center">
                    <button 
                      onClick={handleAddToCart}
                      className="flex-1 py-6 rounded-2xl font-bold text-lg md:text-xl hover:scale-[1.02] active:scale-95 transition-all duration-300 border border-[#B7788D]/35 text-[#E6BFA9] hover:bg-[#B7788D]/10 bg-transparent"
                    >
                      장바구니 담기
                    </button>
                    <button 
                      onClick={handlePurchase}
                      className="flex-grow-[1.5] py-6 rounded-2xl font-bold text-lg md:text-xl hover:scale-[1.02] active:scale-95 transition-all duration-500 bg-gradient-to-br from-[#B57987] to-[#7D4954] border border-[rgba(229,196,187,0.5)] text-[#FAF6EE] shadow-[0_4px_20px_rgba(125,73,84,0.35)] hover:shadow-[0_0_25px_rgba(181,121,135,0.45)] hover:brightness-110"
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
