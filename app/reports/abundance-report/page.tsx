'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Reveal from '@/components/Reveal'
import GlobalBackground from '@/components/GlobalBackground'
import Link from 'next/link'
import Image from 'next/image'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import RecommendedForCards from '@/components/RecommendedForCards'

// 새로 추가된 풍요 리포트 전용 18개 설득 블록 독립 컴포넌트들
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

// 추후 개별 이미지 교체 시 아래 경로만 수정하면 각 섹션에 즉시 반영됩니다.
const ABUNDANCE_REPORT_IMAGES = {
  hero: '/image/abundance/a1.webp',
  overview: '/image/abundance/a2.webp',
  recommended: '/image/abundance/a3.webp',
  analysis: '/image/abundance/a4.webp',
  premium: '/image/abundance/a5.webp',
  finalCta: '/image/abundance/a6.webp',
}

export default function AbundanceReportPage() {
  useScrollAnimation()

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
    <main className="detail-page relative min-h-screen bg-[#0a0514]">
      <GlobalBackground src="/image/main4.png">
        <Navigation />

        <div className="relative z-10 pt-36 md:pt-40 pb-20">
          <div className="container-premium">
            
            {/* ══════════════════════════════════════════════════════════════════════ */}
            {/* SECTION 01. 히어로 — 나의 풍요 설계도 (기존 이미지 & 버튼 상태 100% 보존) */}
            {/* ══════════════════════════════════════════════════════════════════════ */}
            <section className="text-center mb-36">
              <Reveal delayMs={100}>
                <div className="mb-6">
                  <span className="inline-block px-5 py-1.5 rounded-full text-[12px] font-bold tracking-[0.25em] uppercase bg-[#608F82]/15 border border-[#608F82]/35 text-[#8FB4A4]">
                    PREMIUM ABUNDANCE REPORT
                  </span>
                </div>

                {/* 서브 타이틀 카피 */}
                <p className="text-[16px] md:text-[18px] text-[#8FB4A4] font-medium tracking-wide mb-4">
                  선천코드로 읽는 나의 풍요 설계도
                </p>

                {/* 메인 제품명 */}
                <h1 className="text-3xl md:text-6xl font-elegant font-bold mb-8 text-white leading-[1.25] md:leading-[1.3] break-keep">
                  선천코드 <span className="gradient-text-abundance">풍요 리포트</span>
                </h1>

                {/* 핵심 후킹 카피 */}
                <div className="max-w-2xl mx-auto mb-12">
                  <p className="text-xl md:text-[28px] text-white font-elegant font-medium leading-[1.3] break-keep">
                    &ldquo;벌어도 같은 자리에서 새어나간다면,<br />
                    돈이 아니라 반복되는 선택을 살펴볼 때입니다.&rdquo;
                  </p>
                  <p className="text-[16px] md:text-[18px] text-[#EDE6DA]/85 mt-4 break-keep font-light leading-relaxed">
                    타고난 재물 성향과 현실에서 반복되는 돈의 패턴을 함께 읽고,<br className="hidden sm:inline" />
                    나에게 어울리는 수입 방식과 실천 방향을 정리한 1:1 맞춤 리포트.
                  </p>
                </div>
                
                {/* 메인 히어로 이미지 - 기존 a1.webp 에셋 보존 */}
                <div className="relative w-full max-w-[1280px] mx-auto mb-14 rounded-[40px] overflow-hidden border border-[#608F82]/25 shadow-2xl group">
                  <Image 
                    src={ABUNDANCE_REPORT_IMAGES.hero} 
                    alt="선천코드 풍요 리포트 메인 히어로 이미지" 
                    width={1440}
                    height={810}
                    priority
                    className="w-full h-auto transition-transform duration-[10000ms] group-hover:scale-110"
                  />
                </div>

                <p className="text-[16px] md:text-[18px] text-[#EDE6DA] opacity-90 leading-relaxed mb-10 max-w-3xl mx-auto break-keep font-elegant italic">
                  나의 타고난 재능과 돈을 대하는 성향을 이해할 때, 나에게 맞는 풍요의 방향이 보입니다.
                </p>
                
                {/* 기존 버튼 상태 보존 및 리포트 미리보기 보조 버튼 */}
                <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md mx-auto justify-center items-center">
                  <button 
                    onClick={scrollToSample}
                    className="w-full sm:w-auto px-6 py-5 rounded-2xl font-bold text-base hover:scale-[1.02] active:scale-95 transition-all duration-300 border border-white/20 text-[#EDE6DA] hover:bg-white/10 bg-black/40"
                  >
                    리포트 미리보기
                  </button>
                  <button 
                    type="button"
                    disabled
                    aria-disabled="true"
                    className="w-full sm:flex-1 py-5 rounded-2xl font-bold text-lg cursor-not-allowed border border-[#608F82]/40 text-[#C6A477] bg-gradient-to-r from-[#0f241f]/90 via-[#152e27]/90 to-[#0f241f]/90 opacity-85 tracking-widest shadow-[0_0_35px_rgba(96,143,130,0.2)]"
                  >
                    오픈 예정
                  </button>
                </div>
              </Reveal>
            </section>

            {/* ══════════════════════════════════════════════════════════════════════ */}
            {/* SECTION 02. 돈의 반복 패턴 체크리스트 */}
            {/* ══════════════════════════════════════════════════════════════════════ */}
            <WealthPatternChecklist />

            {/* ══════════════════════════════════════════════════════════════════════ */}
            {/* SECTION 03. 왜 일반적인 성공 공식이 맞지 않았을까? */}
            {/* ══════════════════════════════════════════════════════════════════════ */}
            <WealthAdviceComparison />

            {/* ══════════════════════════════════════════════════════════════════════ */}
            {/* SECTION 04. 반복되는 돈의 흐름을 재정의하다 */}
            {/* ══════════════════════════════════════════════════════════════════════ */}
            <WealthPatternFlow />

            {/* ══════════════════════════════════════════════════════════════════════ */}
            {/* SECTION 05. 선천코드 풍요 리포트 분석 체계 (기존 Overview & 6대 주제 통합) */}
            {/* ══════════════════════════════════════════════════════════════════════ */}
            <WealthAnalysisMethod />

            {/* 기존 Overview 섹션 (a2.webp 에셋 보존) */}
            <section className="mb-40">
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
                  <div className="space-y-10">
                    <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white leading-[1.25] md:leading-[1.3] break-keep">
                      나에게 맞는 풍요의 길은 <br />
                      <span className="gradient-text-abundance">나를 아는 것에서 시작됩니다</span>
                    </h2>
                    <p className="text-[16px] md:text-[18px] text-[#EDE6DA] opacity-75 leading-relaxed break-keep font-light whitespace-pre-wrap">
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

            {/* 기존 6대 핵심 탐구 주제 및 이미지 (a4.webp 에셋 보존) */}
            <section className="mb-40 text-center">
              <Reveal>
                <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white tracking-[0.1em] mb-16 leading-[1.25] md:leading-[1.3] break-keep">
                  리포트 <span className="text-[#8FB4A4]">핵심</span> <span className="text-[#E6BE8A]">탐구 주제</span>
                </h2>
                <div className="w-full max-w-[1280px] mx-auto mb-20">
                  <Image 
                    src={ABUNDANCE_REPORT_IMAGES.analysis} 
                    alt="선천코드 풍요 리포트 핵심 탐구 주제 이미지" 
                    width={1200}
                    height={800}
                    className="w-full h-auto rounded-[50px] shadow-2xl border border-[#608F82]/25" 
                  />
                </div>
                <div className="gungjung-glass p-12 md:p-24 relative overflow-hidden border border-[#8FD3B6]/15">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {[
                      { t: "타고난 재능과 강점", d: "내가 억지로 애쓰지 않아도 자연스럽게 발휘할 수 있는 고유한 강점과 잠재력을 읽어냅니다.", i: "fa-gem" },
                      { t: "수익 활동 성향", d: "자율적 환경, 협업, 전문 분야 몰입 등 나에게 잘 맞는 일의 방식과 수익 활동 성향을 살펴봅니다.", i: "fa-compass" },
                      { t: "돈을 대하는 태도", d: "재정적 선택의 순간마다 무의식적으로 작동하는 나의 가치관과 돈을 바라보는 시선을 점검합니다.", i: "fa-scale-balanced" },
                      { t: "반복되는 수입 패턴", d: "일의 시작과 유지, 확장의 과정에서 나타나는 나만의 흐름과 에너지가 분산되는 지점을 짚어봅니다.", i: "fa-chart-line" },
                      { t: "소비 습관과 균형", d: "감정적 지출이나 습관적 소비가 일어나는 맥락을 이해하고 나에게 만족을 주는 소비 기준을 세웁니다.", i: "fa-seedling" },
                      { t: "현실 실천 방향", d: "일상에서 부담 없이 시작하고 꾸준히 이어갈 수 있는 현실적인 정돈과 실천 방향을 제안합니다.", i: "fa-route" }
                    ].map((item, idx) => (
                      <div key={idx} className="detail-glass-card flex flex-col items-center gap-6 p-8 rounded-3xl group border border-[#8FD3B6]/15">
                        <div className="w-16 h-16 rounded-2xl bg-[#0f241f] flex items-center justify-center border border-[#8FD3B6]/35 text-[#E6BE8A] shadow-lg group-hover:scale-110 transition-transform">
                          <i className={`fas ${item.i} text-2xl text-[#8FB4A4]`}></i>
                        </div>
                        <div>
                          <h3 className="text-[20px] md:text-[24px] font-bold text-white mb-3 group-hover:text-[#E6BE8A] transition-colors leading-snug break-keep">{item.t}</h3>
                          <p className="text-[15px] md:text-[16px] text-[#EDE6DA] opacity-65 font-light break-keep leading-relaxed">{item.d}</p>
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
            {/* SECTION 08. 풍요 리포트 목차 공개 (7 PART & PART 07 강조) */}
            {/* ══════════════════════════════════════════════════════════════════════ */}
            <WealthReportTableOfContents />

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
            {/* SECTION 13. 고객 후기 (검증된 후기 등록 시 활성화) */}
            {/* ══════════════════════════════════════════════════════════════════════ */}
            <WealthTestimonials />

            {/* ══════════════════════════════════════════════════════════════════════ */}
            {/* SECTION 14. 백도화의 풍요 분석 철학 (궁중 서신 편지 형태) */}
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
                    <p className="text-[16px] md:text-[18px] text-[#EDE6DA] opacity-75 leading-relaxed break-keep font-light whitespace-pre-wrap">
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
                    <div className="text-center mb-16 space-y-4">
                      <span className="inline-block px-4 py-1 rounded-full text-[12px] font-bold tracking-[0.2em] bg-[#608F82]/15 border border-[#608F82]/30 text-[#8FB4A4] uppercase">
                        Digital Ritual Gift
                      </span>
                      <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white tracking-wide leading-[1.25] md:leading-[1.3] break-keep">
                        당신의 흐름에 맞춘 <span className="text-[#8FB4A4]">오행 에너지</span> <span className="text-[#E6BE8A]">카드</span>
                      </h2>
                      <p className="text-[16px] md:text-[18px] text-[#EDE6DA] opacity-60 max-w-2xl mx-auto break-keep font-light">
                        ※ 오행 에너지 카드는 특정 결과를 보장하는 부적이 아니라, 나의 기질과 흐름을 상징적으로 바라보기 위한 감성 리추얼 이미지입니다.
                      </p>
                    </div>
                  </Reveal>

                  <Reveal>
                    <div className="gungjung-glass p-8 md:p-12 max-w-4xl mx-auto mb-16 text-center border-[#8FD3B6]/15 relative overflow-hidden">
                      <div className="text-[16px] md:text-[18px] text-[#EDE6DA] leading-relaxed break-keep font-light space-y-4">
                        <span className="block text-white font-medium">
                          백도화 선천코드 리포트 이용 시, 고객님의 선천적 기질과 흐름에 어울리는 오행 에너지 카드가 함께 안내됩니다.
                        </span>
                        <span className="block text-[15px] md:text-[16px] opacity-75">
                          오행 에너지 카드는 목·화·토·금·수의 상징을 한국적 자개 무드로 표현한 디지털 리추얼 이미지입니다. <br className="hidden md:inline" />
                          나에게 필요한 균형과 태도를 시각적으로 되새기며 일상의 중심을 다잡는 카드로 활용하실 수 있습니다.
                        </span>
                        <span className="block text-sm text-[#E6BE8A] opacity-90 border-t border-white/5 pt-6 mt-6">
                          ✨ 휴대폰 배경화면, 잠금화면, 개인 노트 표지, 일상 다짐 리추얼 이미지 등으로 자유롭게 활용하실 수 있습니다.
                        </span>
                      </div>
                    </div>
                  </Reveal>

                  <Reveal>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full max-w-[1280px] mx-auto">
                      {fiveElements.map((item, idx) => (
                        <div
                          key={idx}
                          className={`gungjung-glass p-8 border ${item.borderClass} bg-gradient-to-b ${item.gradientClass} relative overflow-hidden group flex flex-col items-center justify-between text-center transition-all duration-500 hover:-translate-y-2`}
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
                      <span className="inline-block px-4 py-1 rounded-full text-[12px] font-bold tracking-[0.2em] bg-[#608F82]/15 border border-[#608F82]/30 text-[#8FB4A4] uppercase">
                        Process & Info
                      </span>
                      <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white tracking-wide leading-[1.25] md:leading-[1.3] break-keep">
                        리포트는 <span className="text-[#8FB4A4]">이렇게</span> <span className="text-[#E6BE8A]">준비됩니다</span>
                      </h2>
                      <p className="text-[16px] md:text-[18px] text-[#EDE6DA] opacity-75 max-w-3xl mx-auto break-keep font-light">
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
            {/* SECTION 18. 최종 구매 CTA (a6.webp 및 버튼 상태 보존) */}
            {/* ══════════════════════════════════════════════════════════════════════ */}
            <section className="relative min-h-[640px] flex flex-col items-center justify-center overflow-hidden rounded-[60px] mb-20 group border border-[#608F82]/25 w-full max-w-[1280px] mx-auto shadow-2xl">
              <div className="absolute inset-0 z-0">
                <Image 
                  src={ABUNDANCE_REPORT_IMAGES.finalCta} 
                  alt="선천코드 풍요 리포트 하단 배너 이미지" 
                  fill
                  className="object-cover transition-transform duration-[15000ms] group-hover:scale-125" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0514] via-[#0a0514]/75 to-transparent"></div>
              </div>

              <div className="relative z-10 text-center px-6 md:px-10 py-16">
                <Reveal>
                  <span className="inline-block px-5 py-1.5 rounded-full text-[12px] font-bold tracking-[0.25em] uppercase bg-[#608F82]/15 border border-[#608F82]/30 text-[#8FB4A4] mb-8">
                    EMBRACE YOUR ABUNDANCE
                  </span>
                  
                  {/* 기존 메인 카피 보존 */}
                  <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white mb-6 leading-[1.25] md:leading-[1.3] break-keep">
                    나다운 풍요의 방향을 <span className="text-[#8FB4A4]">마주하는</span> <span className="text-[#E6BE8A]">시작</span>
                  </h2>

                  {/* 새로운 보조 강조 문구 추가 */}
                  <p className="text-[18px] md:text-[22px] text-[#E6BE8A] font-medium mb-6 max-w-2xl mx-auto break-keep font-elegant leading-[1.3]">
                    &ldquo;내 안의 풍요를 읽는 첫 장을 펼치십시오.&rdquo;
                  </p>
                  
                  <p className="text-[16px] md:text-[18px] text-[#EDE6DA]/85 max-w-2xl mx-auto mb-12 font-light leading-relaxed break-keep">
                    남의 성공 공식이 아니라, 나의 기질과 반복되는 선택에서 출발하십시오.<br />
                    돈의 흐름을 이해하고, 나에게 맞는 풍요의 방식을 설계할 시간입니다.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 w-full max-w-lg mx-auto relative z-10 justify-center">
                    <button 
                      type="button"
                      disabled
                      aria-disabled="true"
                      className="w-full py-6 rounded-2xl font-bold text-xl cursor-not-allowed border border-[#8FD3B6]/50 text-[#E6BE8A] bg-[#0a0514]/85 backdrop-blur-md tracking-widest shadow-[0_0_50px_rgba(0,0,0,0.6)]"
                    >
                      오픈 예정
                    </button>
                  </div>
                </Reveal>
              </div>
            </section>

            {/* 기존 정책 링크 보존 */}
            <section className="pb-20 text-center">
              <div className="flex justify-center gap-10 text-[10px] tracking-[0.3em] uppercase text-white/30">
                <Link href="/terms" className="hover:text-[#E6BE8A] transition-colors">이용약관</Link>
                <Link href="/privacy" className="hover:text-[#E6BE8A] transition-colors">개인정보처리방침</Link>
                <Link href="/refund" className="hover:text-[#E6BE8A] transition-colors">환불정책</Link>
              </div>
            </section>

          </div>
        </div>
        <Footer />
      </GlobalBackground>
    </main>
  )
}
