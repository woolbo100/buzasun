'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Reveal from '@/components/Reveal'
import GlobalBackground from '@/components/GlobalBackground'
import Link from 'next/link'
import Image from 'next/image'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import RecommendedForCards from '@/components/RecommendedForCards'

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

  // 오행 에너지 카드 정보
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

        <div className="relative z-10 pt-40 pb-20">
          <div className="container-premium">
            
            {/* 1. Hero Section */}
            <section className="text-center mb-32">
              <Reveal delayMs={100}>
                <div className="mb-8">
                  <span className="inline-block px-5 py-1.5 rounded-full text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase bg-[#8FD3B6]/10 border border-[#8FD3B6]/35 text-[#8FD3B6]">
                    PREMIUM ABUNDANCE REPORT
                  </span>
                </div>
                <h1 className="text-4xl md:text-7xl font-elegant font-bold mb-10 text-white leading-tight">
                  선천코드 <span className="text-[#8FD3B6]">풍요</span> <span className="text-[#E6BE8A]">리포트</span>
                </h1>
                
                {/* 메인 히어로 이미지 - 어두운 필터나 오버레이 없이 원본 표시 */}
                <div className="relative max-w-6xl mx-auto mb-16 rounded-[40px] overflow-hidden border border-[#8FD3B6]/20 shadow-2xl group">
                  <Image 
                    src={ABUNDANCE_REPORT_IMAGES.hero} 
                    alt="선천코드 풍요 리포트 메인 이미지"
                    width={1440}
                    height={810}
                    priority
                    className="w-full h-auto transition-transform duration-[10000ms] group-hover:scale-110"
                  />
                </div>

                <p className="text-xl md:text-3xl text-[#EDE6DA] opacity-90 leading-relaxed mb-12 max-w-3xl mx-auto break-keep font-elegant italic">
                  나의 타고난 재능과 돈을 대하는 성향을 이해할 때, 나에게 맞는 풍요의 방향이 보입니다.
                </p>
                
                {/* 구매 영역 - 판매 정보 확정 전 '오픈 예정' 비활성 버튼 */}
                <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md mx-auto justify-center">
                  <button 
                    type="button"
                    disabled
                    aria-disabled="true"
                    className="w-full py-5 rounded-2xl font-bold text-lg cursor-not-allowed border border-[#8FD3B6]/40 text-[#E6BE8A] bg-gradient-to-r from-[#0f241f]/90 via-[#152e27]/90 to-[#0f241f]/90 opacity-85 tracking-widest shadow-[0_0_35px_rgba(143,211,182,0.15)]"
                  >
                    오픈 예정
                  </button>
                </div>
              </Reveal>
            </section>

            {/* 2. Overview Section - 좌우 배치 구조 */}
            <section className="mb-40">
              <Reveal>
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                  <div className="relative overflow-hidden rounded-[40px] border border-[#8FD3B6]/20 shadow-2xl">
                    <Image 
                      src={ABUNDANCE_REPORT_IMAGES.overview} 
                      alt="선천코드 풍요 리포트 소개 이미지" 
                      width={800}
                      height={600}
                      className="w-full h-auto object-cover" 
                    />
                  </div>
                  <div className="space-y-10">
                    <h2 className="text-4xl md:text-5xl font-elegant font-bold text-white leading-tight break-keep">
                      나에게 맞는 풍요의 길은 <br />
                      <span className="text-[#8FD3B6]">나를 아는 것</span><span className="text-[#E6BE8A]">에서 시작됩니다</span>
                    </h2>
                    <p className="text-xl text-[#EDE6DA] opacity-75 leading-relaxed break-keep font-light whitespace-pre-wrap">
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

            {/* 3. Recommended For - 세로형 이미지 본연의 비율 강조 */}
            <section className="mb-40">
              <Reveal>
                <div className="grid lg:grid-cols-2 gap-24 items-center">
                  <div className="space-y-12">
                    <h2 className="text-4xl font-elegant font-bold text-white tracking-widest">
                      이런 분께 <span className="text-[#8FD3B6]">추천</span><span className="text-[#E6BE8A]">합니다</span>
                    </h2>
                    <RecommendedForCards 
                      items={[
                        '나의 타고난 재능과 강점을 객관적으로 발견하고 싶은 분',
                        '나에게 자연스럽게 맞는 일과 수익 활동 성향이 궁금한 분',
                        '돈을 대하는 나의 태도와 심리적 기준을 돌아보고 싶은 분',
                        '반복되는 수입·소비 패턴을 점검하고 흐름을 정돈하고 싶은 분',
                        '무리한 목표 대신 현실에서 꾸준히 실천할 방향을 찾고 싶은 분',
                      ]}
                    />
                  </div>
                  {/* 세로형 이미지 그대로 노출 (어두운 필터나 오버레이 없음) */}
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-[#8FD3B6]/10 blur-[40px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <Image 
                      src={ABUNDANCE_REPORT_IMAGES.recommended} 
                      alt="선천코드 풍요 리포트 추천 대상 이미지" 
                      width={600}
                      height={900}
                      className="relative z-10 w-full h-auto rounded-[50px] shadow-3xl border border-[#8FD3B6]/20 transition-transform duration-1000 group-hover:scale-[1.02]" 
                    />
                  </div>
                </div>
              </Reveal>
            </section>

            {/* 4. Analysis Content - 와이드 배치 */}
            <section className="mb-40 text-center">
              <Reveal>
                <h2 className="text-3xl md:text-5xl font-elegant font-bold text-white tracking-[0.2em] mb-16">
                  리포트 <span className="text-[#8FD3B6]">핵심</span> <span className="text-[#E6BE8A]">탐구 주제</span>
                </h2>
                <div className="max-w-7xl mx-auto mb-20">
                  <Image 
                    src={ABUNDANCE_REPORT_IMAGES.analysis} 
                    alt="선천코드 풍요 리포트 핵심 탐구 주제 이미지" 
                    width={1200}
                    height={800}
                    className="w-full h-auto rounded-[50px] shadow-2xl border border-[#8FD3B6]/20" 
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
                          <i className={`fas ${item.i} text-2xl text-[#8FD3B6]`}></i>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#E6BE8A] transition-colors">{item.t}</h3>
                          <p className="text-sm text-[#EDE6DA] opacity-65 font-light break-keep leading-relaxed">{item.d}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </section>

            {/* 5. Premium Section */}
            <section className="mb-40">
              <Reveal>
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                  <div className="space-y-10 order-2 lg:order-1">
                    <h2 className="text-4xl md:text-6xl font-elegant font-bold text-white leading-tight break-keep">
                      나만의 기준을 세우는 <br />
                      <span className="text-[#8FD3B6]">프리미엄</span> <span className="text-[#E6BE8A]">풍요 리포트</span>
                    </h2>
                    <p className="text-xl text-[#EDE6DA] opacity-75 leading-relaxed break-keep font-light whitespace-pre-wrap">
                      선천코드 풍요 리포트는 타인의 기준을 무작정 따라가는 대신, 나의 기질과 생활의 리듬에 어울리는 풍요의 방향을 차분히 정리해 보는 맞춤형 리포트입니다.{"\n\n"}
                      백도화만의 깊이 있는 해석과 정갈한 문체로, 내 안의 강점과 일상의 재정 습관을 돌아보고 현실에서 단단하게 걸어갈 방향을 함께 그려봅니다.
                    </p>
                  </div>
                  <div className="order-1 lg:order-2 relative group">
                    <div className="absolute -inset-10 bg-[#8FD3B6]/5 blur-[60px] rounded-full"></div>
                    <Image 
                      src={ABUNDANCE_REPORT_IMAGES.premium} 
                      alt="선천코드 풍요 리포트 프리미엄 디자인 이미지" 
                      width={800}
                      height={600}
                      className="relative z-10 w-full h-auto rounded-[60px] shadow-[0_0_80px_rgba(0,0,0,0.6)] border border-[#8FD3B6]/20 transition-transform duration-1000 group-hover:scale-[1.03]" 
                    />
                  </div>
                </div>
              </Reveal>
            </section>

            {/* 6. Common Report Info (오행 에너지 카드 및 분석 정보 안내) */}
            <section className="mb-40">
              <div className="space-y-40">
                {/* 6-1. 오행 에너지 카드 안내 */}
                <div className="relative">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] bg-gradient-to-r from-emerald-900/10 via-amber-900/5 to-teal-900/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>

                  <Reveal>
                    <div className="text-center mb-16 space-y-4">
                      <span className="inline-block px-4 py-1 rounded-full text-xs font-bold tracking-[0.2em] bg-[#8FD3B6]/10 border border-[#8FD3B6]/30 text-[#8FD3B6] uppercase">
                        Digital Ritual Gift
                      </span>
                      <h2 className="text-3xl md:text-5xl font-elegant font-bold text-white tracking-wide">
                        당신의 흐름에 맞춘 <span className="text-[#8FD3B6]">오행 에너지</span> <span className="text-[#E6BE8A]">카드</span>
                      </h2>
                      <p className="text-sm md:text-base text-[#EDE6DA] opacity-60 max-w-2xl mx-auto break-keep">
                        ※ 오행 에너지 카드는 특정 결과를 보장하는 부적이 아니라, 나의 기질과 흐름을 상징적으로 바라보기 위한 감성 리추얼 이미지입니다.
                      </p>
                    </div>
                  </Reveal>

                  <Reveal>
                    <div className="gungjung-glass p-8 md:p-12 max-w-4xl mx-auto mb-16 text-center border-[#8FD3B6]/15 relative overflow-hidden">
                      <p className="text-lg md:text-xl text-[#EDE6DA] leading-relaxed break-keep font-light space-y-4">
                        <span className="block text-white font-medium">
                          백도화 선천코드 리포트 이용 시, 고객님의 선천적 기질과 흐름에 어울리는 오행 에너지 카드가 함께 안내됩니다.
                        </span>
                        <span className="block text-base opacity-75">
                          오행 에너지 카드는 목·화·토·금·수의 상징을 한국적 자개 무드로 표현한 디지털 리추얼 이미지입니다. <br className="hidden md:inline" />
                          나에게 필요한 균형과 태도를 시각적으로 되새기며 일상의 중심을 다잡는 카드로 활용하실 수 있습니다.
                        </span>
                        <span className="block text-sm text-[#E6BE8A] opacity-90 border-t border-white/5 pt-6 mt-6">
                          ✨ 휴대폰 배경화면, 잠금화면, 개인 노트 표지, 일상 다짐 리추얼 이미지 등으로 자유롭게 활용하실 수 있습니다.
                        </span>
                      </p>
                    </div>
                  </Reveal>

                  <Reveal>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
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
                              <div className="absolute top-1.5 left-1.5 w-1.5 h-1.5 border-t border-l border-[#8FD3B6]/40"></div>
                              <div className="absolute top-1.5 right-1.5 w-1.5 h-1.5 border-t border-r border-[#8FD3B6]/40"></div>
                              <div className="absolute bottom-1.5 left-1.5 w-1.5 h-1.5 border-b border-l border-[#8FD3B6]/40"></div>
                              <div className="absolute bottom-1.5 right-1.5 w-1.5 h-1.5 border-b border-r border-[#8FD3B6]/40"></div>
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

                {/* 6-2. 리포트 제작 과정 및 필요 정보 안내 */}
                <div className="relative">
                  <Reveal>
                    <div className="text-center mb-16 space-y-4">
                      <span className="inline-block px-4 py-1 rounded-full text-xs font-bold tracking-[0.2em] bg-[#8FD3B6]/10 border border-[#8FD3B6]/30 text-[#8FD3B6] uppercase">
                        Process & Info
                      </span>
                      <h2 className="text-3xl md:text-5xl font-elegant font-bold text-white tracking-wide">
                        리포트는 <span className="text-[#8FD3B6]">이렇게</span> <span className="text-[#E6BE8A]">준비됩니다</span>
                      </h2>
                      <p className="text-base text-[#EDE6DA] opacity-75 max-w-3xl mx-auto break-keep font-light">
                        백도화의 선천코드 리포트는 신청자분의 선천 정보를 바탕으로 정성스럽게 분석하여 작성되는 디지털 리포트입니다.
                      </p>
                    </div>
                  </Reveal>

                  <div className="grid lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
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
                                  <div className="w-8 h-8 rounded-lg bg-[#8FD3B6]/10 flex items-center justify-center text-[#8FD3B6] shrink-0">
                                    <i className={`fas ${info.icon} text-xs`}></i>
                                  </div>
                                  <span className="text-xs text-[#EDE6DA]/80 font-medium">{info.label}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="p-4 bg-[#8FD3B6]/5 border border-[#8FD3B6]/20 rounded-xl">
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

            {/* 7. CTA - 어두운 필터/오버레이 없이 원본 이미지 표시 + 오픈 예정 비활성 버튼 */}
            <section className="relative min-h-[600px] flex flex-col items-center justify-center overflow-hidden rounded-[60px] mb-20 group border border-[#8FD3B6]/20">
              <div className="absolute inset-0 z-0">
                <Image 
                  src={ABUNDANCE_REPORT_IMAGES.finalCta} 
                  alt="선천코드 풍요 리포트 하단 배너 이미지" 
                  fill
                  className="object-cover transition-transform duration-[15000ms] group-hover:scale-125" 
                />
              </div>
              <div className="relative z-10 text-center px-10">
                <Reveal>
                  <h2 className="text-4xl md:text-7xl font-elegant font-bold text-white mb-12 leading-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)]">
                    나다운 풍요의 방향을 <br />
                    <span className="text-[#8FD3B6]">마주하는</span> <span className="text-[#E6BE8A]">시작</span>
                  </h2>
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

            {/* Policy Links */}
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

