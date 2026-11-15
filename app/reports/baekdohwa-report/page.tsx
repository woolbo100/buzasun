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

                {/* 3. 메인 가로 이미지 (16:9 비율 풀사이즈 느낌) */}
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

                {/* 4. 메인 이미지 하단 감성 문구 */}
                <p className="text-[18px] text-[#D9A8A7] font-medium tracking-wide mb-2">
                  선천코드로 읽는 나의 사랑 설계도
                </p>
                <p className="text-[18px] text-[#EDE6DA] opacity-90 leading-relaxed max-w-2xl mx-auto break-keep font-elegant italic mb-6 md:mb-7">
                  나를 아는 것에서부터, 당신의 진짜 연애는 시작됩니다.
                </p>

                {/* 5. 구매 버튼 영역 */}
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

                {/* 6. 공감 문구 (핵심 카피 1: 왜 이별의 타이밍도, 상처받는 방식도 놀라울 만큼 닮아 있을까요?) */}
                <div className="max-w-3xl mx-auto mb-14 text-center">
                  <p className="text-2xl md:text-[34px] lg:text-[38px] text-white font-elegant font-bold leading-[1.3] break-keep mb-6">
                    &ldquo;왜 이별의 타이밍도, 상처받는 방식도<br className="hidden sm:inline" />
                    <span className="gradient-text-love">놀라울 만큼 닮아</span> 있을까요?&rdquo;
                  </p>
                  <div className="text-[18px] text-[#EDE6DA]/90 space-y-3 font-light leading-relaxed break-keep max-w-2xl mx-auto">
                    <p>처음에는 다정했다. 이번만큼은 다를 거라 믿었다.</p>
                    <p>그런데 어느 순간부터 또 내가 기다리고, 내가 불안해하고, 내가 관계를 붙잡고 있다.</p>
                    <p className="pt-2 text-[#E6BFA9] font-medium leading-relaxed">
                      문제는 이번에 만난 상대 한 사람만이 아닐 수 있습니다.<br className="hidden sm:inline" />
                      상대만 바뀌었을 뿐, 끝나는 이유와 상처의 궤적이 매번 익숙하다면...
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
            {/* STEP 02. 발견 — 사주를 들여다보니 지나온 연애가 다르게 보이기 시작했다 */}
            {/* ══════════════════════════════════════════════════════════════════════ */}
            <section className="mb-20 text-center">
              <Reveal>
                <div className="max-w-4xl mx-auto">
                  <span className="block font-elegant text-[12pt] font-semibold tracking-[0.2em] text-[#D9A8A7] uppercase mb-4">
                    STEP 02 · DISCOVERY
                  </span>
                  <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white mb-6 leading-[1.25] md:leading-[1.3] break-keep">
                    &ldquo;사주를 들여다보니,<br className="sm:hidden" />
                    <span className="gradient-text-love"> 지나온 사랑이 다르게</span> 보이기 시작했습니다.&rdquo;
                  </h2>
                  <p className="text-[18px] text-[#EDE6DA] opacity-80 font-light leading-relaxed max-w-2xl mx-auto break-keep">
                    어긋난 관계의 원인은 내 부족함이나 상대의 변덕 때문만은 아니었습니다.<br className="hidden sm:inline" />
                    내가 타고난 기질과 감정의 에너지 흐름을 알지 못했을 뿐입니다.
                  </p>
                </div>
              </Reveal>
            </section>

            {/* 3단계 도식 (핵심 카피 4: 끌림은 본능입니다. 그러나 사랑은 선택입니다.) */}
            <RelationshipPatternFlow />

            {/* 같은 선천코드, 다른 사랑의 이야기 (CASE A vs CASE B) */}
            <PersonalizedCaseComparison />

            {/* ══════════════════════════════════════════════════════════════════════ */}
            {/* STEP 03. 필요성 — 내 사랑의 설계도도 모르면서 왜 상대의 마음부터 읽는가? */}
            {/* ══════════════════════════════════════════════════════════════════════ */}
            <section className="mb-12 text-center">
              <Reveal>
                <div className="max-w-4xl mx-auto">
                  <span className="block font-elegant text-[12pt] font-semibold tracking-[0.2em] text-[#D9A8A7] uppercase mb-4">
                    STEP 03 · THE REAL NEED
                  </span>
                  <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white mb-6 leading-[1.25] md:leading-[1.3] break-keep">
                    &ldquo;내 사랑의 설계도도 모르면서,<br className="sm:hidden" />
                    <span className="gradient-text-love"> 왜 상대의 마음부터</span> 읽습니까?&rdquo;
                  </h2>
                  <p className="text-[18px] text-[#EDE6DA] opacity-80 font-light leading-relaxed max-w-2xl mx-auto break-keep">
                    상대의 카톡 하나, 표정 하나에 밤새 불안해하면서도 정작 내가 어떤 사람에게 무너지고 어떤 사랑을 원하는지는 묻지 않았습니다.<br className="hidden sm:inline" />
                    상대를 파악하기 전에, 먼저 내 안의 &lsquo;사랑 설계도&rsquo;를 손에 쥐어야 합니다.
                  </p>
                </div>
              </Reveal>
            </section>

            {/* 패러다임 전환: 상대의 마음이 아니라 나의 선택을 묻다 */}
            <QuestionShiftComparison theme="love" />

            {/* ══════════════════════════════════════════════════════════════════════ */}
            {/* STEP 04. 선천코드 소개 — 선천코드란 무엇이며, 왜 나를 이해하는 데 도움이 되는가? */}
            {/* ══════════════════════════════════════════════════════════════════════ */}
            <section className="mb-40">
              <Reveal>
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                  <div className="relative overflow-hidden rounded-[40px] border border-white/10 shadow-2xl">
                    <Image 
                      src="/image/lovereport/p2.webp" 
                      alt="선천코드 소개" 
                      width={800}
                      height={600}
                      className="w-full h-auto object-cover" 
                    />
                  </div>
                  <div className="space-y-10">
                    <span className="block font-elegant text-[12pt] font-semibold tracking-[0.2em] text-[#D9A8A7] uppercase">
                      STEP 04 · WHAT IS SEONCHEON CODE
                    </span>
                    <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white leading-[1.25] md:leading-[1.3] break-keep">
                      선천코드: 타고난 사랑의 기질과 <br /> <span className="gradient-text-love">인연의 지도</span>
                    </h2>
                    <p className="text-[18px] text-[#EDE6DA] opacity-75 leading-relaxed break-keep font-light whitespace-pre-wrap">
                      선천코드 연애 리포트는 단순한 연애운 풀이가 아니라, 당신이 어떤 사람에게 끌리고, 왜 비슷한 관계 패턴을 반복하는지, 그리고 어떤 방식으로 사랑을 회복하고 선택할 수 있는지를 섬세하게 해석하는 프리미엄 연애 리포트입니다.
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

            {/* 선천코드 3대 분석 방식 (명리 뼈대 + 현실 관계 기록 교차 분석) */}
            <PersonalAnalysisMethod />

            {/* ══════════════════════════════════════════════════════════════════════ */}
            {/* STEP 05. 매력 발견 — 나의 3대 매력 무기, 숨겨진 강점, 그림자, 잘 맞는 유형과 피해야 할 유형 */}
            {/* ══════════════════════════════════════════════════════════════════════ */}
            <section className="mb-40 text-center">
              <Reveal>
                <div className="max-w-4xl mx-auto mb-16">
                  <span className="block font-elegant text-[12pt] font-semibold tracking-[0.2em] text-[#D9A8A7] uppercase mb-4">
                    STEP 05 · ATTRACTION & WEAPONS
                  </span>
                  <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white mb-6 leading-[1.25] md:leading-[1.3] break-keep">
                    &ldquo;당신에게는 아직 꺼내지 않은<br className="sm:hidden" />
                    <span className="gradient-text-love"> 치명적인 매력의 무기</span>가 있습니다.&rdquo;
                  </h2>
                  <p className="text-[18px] text-[#EDE6DA] opacity-80 font-light leading-relaxed max-w-2xl mx-auto break-keep">
                    남들의 기준에 나를 억지로 맞추지 않아도 됩니다.<br className="hidden sm:inline" />
                    내가 가진 고유한 매력의 결을 알고 드러낼 때, 비로소 나에게 꼭 맞는 인연이 알아봅니다.
                  </p>
                </div>

                <div className="max-w-7xl mx-auto mb-20">
                  <Image 
                    src="/image/lovereport/p4.webp" 
                    alt="매력 분석 상세" 
                    width={1200}
                    height={800}
                    className="w-full h-auto rounded-[50px] shadow-2xl border border-white/10" 
                  />
                </div>
                <div className="gungjung-glass p-12 md:p-24 relative overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {[
                      { t: "나의 3대 매력 무기", d: "가장 나다운 모습으로 온전히 존중받는 법", i: "fa-wand-magic-sparkles" },
                      { t: "무의식적 끌림 패턴", d: "반복적으로 빠져드는 위험한 매혹과 끌림의 원인", i: "fa-bolt" },
                      { t: "숨겨진 그림자와 방어기제", d: "불안할 때 스스로 관계를 닫는 무의식 장벽", i: "fa-shield-halved" },
                      { t: "잘 맞는 파트너 vs 피할 유형", d: "나를 채워주는 인연과 소모시키는 인연의 분별", i: "fa-user-group" },
                      { t: "타고난 사랑의 본질", d: "동양 명리학으로 읽는 고유한 감정 에너지", i: "fa-heart" },
                      { t: "관계 전환 솔루션", d: "상처의 고리를 끊어낼 실질적인 변화의 시작", i: "fa-key" }
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

            {/* 7개의 장 목차 공개 */}
            <LoveReportTableOfContents />

            {/* ══════════════════════════════════════════════════════════════════════ */}
            {/* STEP 06. 차별화와 실전 처방 — 1:1 맞춤 분석, 구체적인 실천 처방 */}
            {/* ══════════════════════════════════════════════════════════════════════ */}
            {/* 일반 연애 조언과의 차이점 (핵심 카피 6: 연애 조언은 넘쳐납니다. 당신만의 처방전은 없었습니다.) */}
            <GeneralAdviceComparison />

            {/* 기존 사주·AI 리포트와의 3대 비교표 */}
            <ReportComparisonTable />

            {/* PART 07 실제 행동 처방전 샘플 영역 */}
            <LovePrescriptionSample />

            {/* 맞춤 리포트 제작 과정 (STEP 01~04) */}
            <ReportProductionTimeline />

            {/* 리포트 샘플 미리보기 (확대 라이트박스 지원) */}
            <ReportSamplePreview />

            {/* ══════════════════════════════════════════════════════════════════════ */}
            {/* STEP 07. 각성 — 사랑받기 위해 애쓰는 연애에서 벗어나 나의 매력과 기준을 알고 사랑을 선택한다 */}
            {/* ══════════════════════════════════════════════════════════════════════ */}
            <section className="mb-20 text-center">
              <Reveal>
                <div className="max-w-4xl mx-auto">
                  <span className="block font-elegant text-[12pt] font-semibold tracking-[0.2em] text-[#D9A8A7] uppercase mb-4">
                    STEP 07 · AWAKENING
                  </span>
                  <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white mb-6 leading-[1.25] md:leading-[1.3] break-keep">
                    &ldquo;당신은 사랑받기 위해<br className="sm:hidden" />
                    <span className="gradient-text-love"> 더 애써야 하는 사람</span>이 아닙니다.&rdquo;
                  </h2>
                  <p className="text-[18px] text-[#EDE6DA] opacity-85 font-light leading-relaxed max-w-2xl mx-auto break-keep">
                    이제는 당신에게 이미 있는 매력을 알고,<br className="hidden sm:inline" />
                    누구에게 어떻게 마음을 내어줄지 당당하게 선택할 차례입니다.
                  </p>
                </div>
              </Reveal>
            </section>

            {/* 리포트를 읽은 뒤 달라질 수 있는 선택 (BEFORE -> AWARENESS -> AFTER) */}
            <RelationshipChangeScenario />

            {/* 추천 대상과 맞지 않는 대상 */}
            <RecommendedAudience />

            {/* 고객 후기 (검증된 후기 등록 시 활성화) */}
            <ReportTestimonials />

            {/* 백도화의 분석 철학 (궁중 서신 편지 형태) */}
            <BaekdohwaPhilosophy />

            {/* 소장 가치 6대 요소 요약 */}
            <ReportValueSummary />

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

            {/* 오행 에너지 카드 5종 및 제작/수령 안내 */}
            <section className="mb-40">
              <ReportCommonInfo isCompatibility={false} />
            </section>

            {/* 자주 묻는 질문 FAQ (10개 항목 아코디언) */}
            <ReportFAQ />

            {/* 구매 전 안내 (6대 중요 안내 사항) */}
            <PurchaseNotice />

            {/* 최종 구매 CTA (이미지와 텍스트·버튼 분리 구조) */}
            <section className="mb-28 w-full max-w-[1280px] mx-auto">
              <Reveal>
                {/* ① 기존 배경 이미지 단독 표시 (필터 및 오버레이 완전 제거) */}
                <div className="relative w-full rounded-[40px] overflow-hidden border border-white/10 shadow-2xl aspect-[16/9] bg-[#130917] mb-14 md:mb-16 group">
                  <Image 
                    src="/image/lovereport/p6.webp" 
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
