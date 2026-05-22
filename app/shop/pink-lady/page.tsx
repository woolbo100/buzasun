'use client'

import React from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Reveal from '@/components/Reveal'
import GlobalBackground from '@/components/GlobalBackground'
import BaekdohwaFlowerMark from '@/components/BaekdohwaFlowerMark'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Check, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function PinkLadyDetailPage() {
  useScrollAnimation()
  const router = useRouter()

  const handlePurchase = (e: React.MouseEvent) => {
    e.preventDefault()
    router.push('/checkout?productId=pink-lady')
  }

  // 2. Product Overview - 포인트 카드 리스트 (6개)
  const pointCards = [
    { title: '여성 밸런스 케어', desc: '섬세한 주기에 맞춘 밸런스' },
    { title: '프라이빗 데일리 루틴', desc: '나만을 위한 은밀한 일상 습관' },
    { title: '청결한 컨디션 관리', desc: '매일 상쾌하고 가벼운 몸' },
    { title: '촉촉한 사용감', desc: '피부에 스며드는 수분 컨디셔닝' },
    { title: '프리미엄 원료 구성', desc: '자연에서 고른 순수한 영양' },
    { title: '간편한 사용', desc: '바쁜 일상에서도 손쉬운 관리' }
  ]

  // 3. Recommended For - 카드형 리스트 (6개)
  const recommendedPoints = [
    '자신만의 자기관리 루틴을 만들고 싶은 분',
    '프라이빗 케어를 중요하게 생각하는 분',
    '청결하고 상쾌한 컨디션 관리를 원하는 분',
    '바쁜 일상 속에서도 꾸준한 관리 습관을 만들고 싶은 분',
    '여성 밸런스를 섬세하게 관리하고 싶은 분',
    '선물하기 좋은 프리미엄 여성 케어 제품을 찾는 분'
  ]

  // 4. Premium Formula - 성분 카드 리스트 (6개)
  const ingredients = [
    {
      title: '프리바이오틱스 복합 성분',
      desc: '여성의 섬세한 밸런스 건강 관리에 순하고 건강한 도움을 주는 프리미엄 성분 함유'
    },
    {
      title: '알로에베라 유래 성분',
      desc: '예민해지기 쉬운 부위에 풍부한 수분을 공급하여 촉촉하고 편안한 진정 케어 선사'
    },
    {
      title: '버지니아 풍년화 추출물',
      desc: '피부 장벽을 보호하고 불균형해지기 쉬운 환경을 깨끗하고 청결한 컨디션으로 케어'
    },
    {
      title: '스피룰리나 추출물',
      desc: '영양이 가득한 자연 유래 성분으로 연약한 피부의 탄력 있는 관리와 영양 공급에 도움'
    },
    {
      title: '인삼 유래 성분',
      desc: '피부 본연의 활력을 충전하고 튼튼하며 건강한 피부 컨디션을 우아하게 유지'
    },
    {
      title: '알란토인',
      desc: '외부 자극으로 민감해진 부위를 부드럽게 진정시키고 편안한 장벽 강화에 기여'
    }
  ]

  return (
    <main className="relative min-h-screen bg-[#0a0514] text-white selection:bg-[#E6BE8A] selection:text-black font-sans">
      <GlobalBackground src="/image/shop-hero.png" brightCenter={false}>
        <Navigation />

        <div className="relative z-10 pt-36 md:pt-44 pb-20 overflow-hidden">
          
          {/* 궁중 창살 모티브 배경 장식 (CSS 패턴 활용) */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.02]" 
               style={{
                 backgroundImage: 'linear-gradient(rgba(230, 190, 138, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(230, 190, 138, 0.2) 1px, transparent 1px)',
                 backgroundSize: '24px 24px'
               }}
          />

          <div className="container-premium max-w-6xl mx-auto px-6">

            {/* ==========================================
                1. Hero Section
                ========================================== */}
            <section className="text-center mb-24 md:mb-36 relative">
              <Reveal delayMs={100}>
                <div className="mb-6 flex justify-center items-center gap-2">
                  <span className="h-[1px] w-8 bg-[#E6BE8A]/30"></span>
                  <span className="inline-block px-4 py-1 rounded-full text-[10px] md:text-xs font-bold tracking-[0.25em] uppercase text-[#E6BE8A] bg-[#2D0A1E]/80 border border-[#E6BE8A]/20">
                    PRIVATE FEMININE RITUAL
                  </span>
                  <span className="h-[1px] w-8 bg-[#E6BE8A]/30"></span>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-elegant font-bold mb-6 tracking-wide text-white leading-tight">
                  Pink Lady <span className="text-[#E6BE8A] block md:inline">Secret Ritual</span>
                </h1>
                
                <p className="text-base md:text-xl text-[#E6BE8A] font-medium tracking-wide mb-12 max-w-2xl mx-auto break-keep">
                  보이지 않는 곳까지 우아하게 관리하는 여성의 루틴
                </p>

                {/* 메인 비주얼 - 자개 테두리 효과와 럭셔리 섀도우 */}
                <div className="relative max-w-4xl mx-auto aspect-video mb-12 rounded-[32px] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(230,190,138,0.1)] group">
                  {/* 자개빛 레인보우 그라데이션 테두리 */}
                  <div className="absolute inset-0 p-[1px] rounded-[32px] bg-gradient-to-tr from-[#C58BA0] via-[#E6BE8A] to-[#87CEFA] pointer-events-none z-10 opacity-70">
                    <div className="w-full h-full rounded-[31px] bg-transparent"></div>
                  </div>
                  <Image 
                    src="/image/pinklady/p1.webp" 
                    alt="Pink Lady Secret Ritual"
                    fill
                    className="object-cover transition-transform duration-[8000ms] group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0514]/80 via-transparent to-transparent z-0"></div>
                </div>

                {/* 메인 카피 설명 */}
                <div className="max-w-2xl mx-auto text-[#EDE6DA] leading-relaxed mb-10 text-sm md:text-base space-y-4 font-light break-keep">
                  <p>자신감은 화려함에서 시작되지 않습니다.</p>
                  <p className="text-white font-medium">나를 아끼고 돌보는 작은 습관에서 시작됩니다.</p>
                  <p className="pt-2 opacity-75">
                    핑크레이디 시크릿 리추얼은 여성의 섬세한 밸런스를 위한<br />
                    프리미엄 프라이빗 케어 루틴을 제안합니다.
                  </p>
                </div>

                <div className="flex flex-col items-center gap-4">
                  <button 
                    onClick={handlePurchase}
                    className="btn-primary inline-flex items-center gap-3 px-12 py-5 rounded-full font-bold text-lg hover:scale-105 transition-all duration-500 hover:shadow-[0_0_35px_rgba(230,190,138,0.3)]"
                    style={{
                      background: 'linear-gradient(135deg, #2D0A1E 0%, #1A0514 100%)',
                      border: '1px solid rgba(230, 190, 138, 0.4)',
                      color: '#E6BE8A',
                    }}
                  >
                    시크릿 리추얼 시작하기
                    <ArrowRight className="w-5 h-5 text-[#E6BE8A]" />
                  </button>
                  <span className="text-xs text-[#EDE6DA]/40">89,000원 | 무료 배송</span>
                </div>
              </Reveal>
            </section>


            {/* ==========================================
                2. Product Overview
                ========================================== */}
            <section className="mb-24 md:mb-36">
              <Reveal>
                <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center mb-16">
                  {/* 오버뷰 이미지 */}
                  <div className="relative aspect-square overflow-hidden rounded-[32px] border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
                    {/* 은은한 자개 무늬 글로우 */}
                    <div className="absolute inset-0 p-[1px] rounded-[32px] bg-gradient-to-bl from-[#C58BA0]/40 to-[#E6BE8A]/40 pointer-events-none z-10" />
                    <Image src="/image/pinklady/p2.webp" alt="Product Overview" fill className="object-cover" />
                  </div>
                  
                  {/* 설명 문구 */}
                  <div className="space-y-8">
                    <div className="flex items-center gap-3">
                      <BaekdohwaFlowerMark size={28} outlineGold />
                      <span className="text-xs tracking-[0.2em] text-[#E6BE8A] font-bold">OVERVIEW</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-elegant font-bold text-white leading-tight break-keep">
                      매일의 자신감을 위한<br className="hidden md:inline" /> 여성 밸런스 루틴
                    </h2>
                    <div className="text-sm md:text-base text-[#EDE6DA]/85 space-y-4 font-light break-keep leading-relaxed">
                      <p>바쁜 일상 속에서도 여성의 몸은 끊임없이 변화합니다.</p>
                      <p>
                        핑크레이디 시크릿 리추얼은 <strong className="text-[#E6BE8A] font-medium">청결함</strong>, <strong className="text-[#E6BE8A] font-medium">촉촉한 컨디션</strong>, <strong className="text-[#E6BE8A] font-medium">편안한 사용감</strong>, 그리고 여성만의 섬세한 밸런스를 고려하여 만들어진 프리미엄 프라이빗 케어 제품입니다.
                      </p>
                      <p className="opacity-90">
                        단순한 케어 제품이 아닌, 나를 깊이 아끼고 건강하게 가꾸는 자존감 있는 자기관리 습관으로 구성해보세요.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 포인트 카드 그리드 (6개) */}
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  {pointCards.map((card, idx) => (
                    <div key={idx} 
                         className="gungjung-glass p-6 md:p-8 rounded-2xl border border-white/5 bg-gradient-to-br from-white/[0.03] to-[#2D0A1E]/10 hover:border-[#E6BE8A]/30 hover:shadow-[0_0_20px_rgba(230,190,138,0.1)] transition-all duration-500 group relative overflow-hidden">
                      {/* 카드 백그라운드 소프트 골드 글로우 */}
                      <div className="absolute -top-12 -left-12 w-24 h-24 bg-[#E6BE8A]/5 blur-2xl rounded-full group-hover:bg-[#E6BE8A]/10 transition-all pointer-events-none" />
                      
                      <div className="relative z-10">
                        <div className="w-8 h-8 rounded-lg bg-[#2D0A1E] border border-[#E6BE8A]/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                          <span className="text-xs text-[#E6BE8A] font-serif">0{idx + 1}</span>
                        </div>
                        <h3 className="text-base md:text-lg font-bold text-white mb-2 group-hover:text-[#E6BE8A] transition-colors">{card.title}</h3>
                        <p className="text-xs md:text-sm text-[#EDE6DA]/50 font-light break-keep">{card.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </section>


            {/* ==========================================
                3. Recommended For
                ========================================== */}
            <section className="mb-24 md:mb-36">
              <Reveal>
                <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
                  
                  {/* 왼쪽 추천 항목 */}
                  <div className="space-y-10 order-2 md:order-1">
                    <div className="flex items-center gap-3">
                      <BaekdohwaFlowerMark size={28} outlineGold />
                      <span className="text-xs tracking-[0.2em] text-[#E6BE8A] font-bold">RECOMMENDED FOR</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-elegant font-bold text-white tracking-wide">
                      이런 분께 추천합니다
                    </h2>
                    
                    <div className="space-y-3">
                      {recommendedPoints.map((item, idx) => (
                        <div key={idx} 
                             className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.01] border border-white/5 hover:bg-[#2D0A1E]/15 hover:border-[#E6BE8A]/20 transition-all duration-300 group">
                          <div className="w-5 h-5 rounded-full bg-[#2D0A1E] border border-[#E6BE8A]/30 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#E6BE8A]/20 transition-all">
                            <Check className="w-3 h-3 text-[#E6BE8A]" />
                          </div>
                          <p className="text-sm md:text-base text-[#EDE6DA]/80 font-light break-keep">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* 오른쪽 이미지 */}
                  <div className="relative aspect-[3/4] rounded-[32px] overflow-hidden border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.5)] order-1 md:order-2">
                    <div className="absolute inset-0 p-[1px] rounded-[32px] bg-gradient-to-tr from-[#E6BE8A]/30 via-[#2D0A1E]/40 to-[#C58BA0]/30 pointer-events-none z-10" />
                    <Image src="/image/pinklady/p3.webp" alt="Recommended for you" fill className="object-cover" />
                  </div>

                </div>
              </Reveal>
            </section>


            {/* ==========================================
                4. Premium Formula
                ========================================== */}
            <section className="mb-24 md:mb-36">
              <Reveal>
                <div className="text-center max-w-2xl mx-auto mb-12">
                  <div className="flex justify-center mb-4">
                    <BaekdohwaFlowerMark size={44} outlineGold />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-elegant font-bold text-white tracking-widest mb-4">
                    프리미엄 원료로 완성한 섬세한 포뮬러
                  </h2>
                  <p className="text-sm md:text-base text-[#EDE6DA]/70 font-light break-keep leading-relaxed">
                    여성의 프라이빗 케어를 위해 다양한 식물 유래 성분과 보습·컨디셔닝 성분을 조화롭게 담아냈습니다. 자극을 줄이고 자연의 순수한 편안함만을 전합니다.
                  </p>
                </div>

                {/* 포뮬러 비주얼 배너 */}
                <div className="relative aspect-video rounded-[32px] overflow-hidden border border-white/10 shadow-[0_15px_30px_rgba(0,0,0,0.4)] mb-12 group">
                  <Image src="/image/pinklady/p4.webp" alt="Premium Formula ingredients" fill className="object-cover transition-transform duration-[6000ms] group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0514]/70 to-transparent"></div>
                </div>

                {/* 성분 카드 6개 그리드 */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {ingredients.map((ing, idx) => (
                    <div key={idx} 
                         className="p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#E6BE8A]/20 hover:bg-[#2D0A1E]/10 transition-all duration-300 flex gap-4">
                      {/* 성분 아이콘 대신 단아한 전통 문양 포인트 */}
                      <div className="w-10 h-10 rounded-xl bg-[#2D0A1E] border border-[#E6BE8A]/30 flex items-center justify-center shrink-0">
                        <span className="text-xs text-[#E6BE8A] font-bold">숲</span>
                      </div>
                      <div>
                        <h3 className="text-base md:text-lg font-bold text-white mb-2">{ing.title}</h3>
                        <p className="text-xs md:text-sm text-[#EDE6DA]/60 leading-relaxed font-light break-keep">{ing.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* 하단 Disclaimer */}
                <div className="p-4 rounded-xl bg-white/[0.01] border border-white/5 max-w-2xl mx-auto flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#E6BE8A] shrink-0" />
                  <p className="text-[11px] md:text-xs text-[#EDE6DA]/40 leading-normal break-keep">
                    본 제품은 의약품이 아닙니다. 개인의 체질과 생활환경에 따라 사용감은 달라질 수 있습니다.
                  </p>
                </div>
              </Reveal>
            </section>


            {/* ==========================================
                5. Lifestyle Section
                ========================================== */}
            <section className="mb-24 md:mb-36">
              <Reveal>
                <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
                  
                  {/* 이미지 */}
                  <div className="relative aspect-square overflow-hidden rounded-[32px] border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
                    <div className="absolute inset-0 p-[1px] rounded-[32px] bg-gradient-to-tr from-[#C58BA0]/30 to-[#E6BE8A]/30 pointer-events-none z-10" />
                    <Image src="/image/pinklady/p5.webp" alt="Healthy feminine lifestyle" fill className="object-cover" />
                  </div>

                  {/* 텍스트 설명 */}
                  <div className="space-y-8">
                    <div className="flex items-center gap-3">
                      <BaekdohwaFlowerMark size={28} outlineGold />
                      <span className="text-xs tracking-[0.2em] text-[#E6BE8A] font-bold">LIFESTYLE</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-elegant font-bold text-white leading-tight">
                      관리하는 여성은 다릅니다
                    </h2>
                    <div className="text-sm md:text-base text-[#EDE6DA]/85 space-y-6 font-light break-keep leading-relaxed">
                      <p>
                        좋은 습관은 겉으로 보이는 곳에서만 시작되지 않습니다.
                      </p>
                      <div className="pl-4 border-l-2 border-[#E6BE8A] py-1 space-y-1 text-[#E6BE8A] font-medium">
                        <p>매일의 규칙적인 운동,</p>
                        <p>충분한 수분 섭취,</p>
                        <p>온전한 휴식,</p>
                        <p>그리고 나를 위한 프라이빗 케어까지.</p>
                      </div>
                      <p>
                        핑크레이디 시크릿 리추얼은 나를 소중히 아끼고 끊임없이 돌보는 우아한 여성을 위한 모든 라이프스타일 여정을 진심으로 응원합니다.
                      </p>
                    </div>
                  </div>

                </div>
              </Reveal>
            </section>


            {/* ==========================================
                6. How To Use
                ========================================== */}
            <section className="mb-12 md:mb-16">
              <Reveal>
                <div className="p-8 md:p-12 rounded-[24px] border border-white/5 bg-[#2D0A1E]/10 backdrop-blur-xl relative overflow-hidden">
                  {/* 자개 오로라 광채 백그라운드 효과 */}
                  <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-gradient-to-tr from-[#C58BA0]/10 via-[#E6BE8A]/5 to-[#87CEFA]/10 blur-3xl rounded-full pointer-events-none" />
                  
                  <div className="relative z-10">
                    <h3 className="text-xl md:text-2xl font-elegant font-bold mb-6 text-white border-l-4 border-[#E6BE8A] pl-4">
                      사용 방법
                    </h3>
                    <div className="text-sm md:text-base text-[#EDE6DA]/85 space-y-4 font-light mb-8 break-keep">
                      <p>제품 설명서 및 패키지에 기재된 사용 방법을 정확하게 확인하신 후 사용해 주세요.</p>
                      <p>소중한 부위에 직접 닿는 제품이므로, 사용 전 손을 흐르는 물에 깨끗하게 씻고 권장하는 가이드라인에 따라 청결하게 사용해 주십시오.</p>
                    </div>

                    <div className="pt-6 border-t border-white/5">
                      <div className="flex items-center gap-2 mb-3 text-red-300">
                        <HelpCircle className="w-4 h-4 shrink-0" />
                        <span className="text-xs font-bold tracking-wide uppercase">주의사항</span>
                      </div>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#EDE6DA]/40 leading-normal font-light">
                        <li className="flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-red-400/40"></span>
                          사용 시 피부에 이상 증상이 생길 경우 즉시 사용을 중단해 주세요.
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-red-400/40"></span>
                          임산부 및 특정 질환이 있는 분은 사용 전 전문가와 상담 후 사용해 주세요.
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-red-400/40"></span>
                          고온 및 직사광선을 피하고 서늘한 곳에 보관해 주세요.
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-red-400/40"></span>
                          어린이의 손이 닿지 않는 안전한 장소에 보관해 주세요.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Reveal>
            </section>


            {/* ==========================================
                7. Notice
                ========================================== */}
            <section className="mb-24 md:mb-36">
              <Reveal>
                <div className="p-8 md:p-12 rounded-[24px] border border-white/5 bg-white/[0.01]">
                  <h3 className="text-xl md:text-2xl font-elegant font-bold mb-6 text-white border-l-4 border-[#EDE6DA]/40 pl-4">
                    구매 전 안내
                  </h3>
                  <ul className="space-y-3.5 text-xs md:text-sm text-[#EDE6DA]/60 font-light break-keep">
                    <li className="flex items-start gap-2.5">
                      <span className="mt-2 w-1 h-1 rounded-full bg-[#E6BE8A] shrink-0" />
                      <span>본 제품은 우체국택배 또는 CJ대한통운 등을 통해 안전하게 실물 배송되는 상품입니다.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="mt-2 w-1 h-1 rounded-full bg-[#E6BE8A] shrink-0" />
                      <span>배송기간은 결제 완료일 기준으로 영업일 2~5일 정도 소요될 수 있습니다.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="mt-2 w-1 h-1 rounded-full bg-[#E6BE8A] shrink-0" />
                      <span>위생 및 안전상의 이유로 제품 개봉 후에는 단순 변심에 의한 교환 및 반품이 제한될 수 있습니다.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="mt-2 w-1 h-1 rounded-full bg-[#E6BE8A] shrink-0" />
                      <span>사용 후 느껴지는 체감 및 사용감은 개인의 체질이나 생활환경에 따라 다를 수 있습니다.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="mt-2 w-1 h-1 rounded-full bg-[#E6BE8A] shrink-0" />
                      <span>본 제품은 질병의 예방, 개선 및 치료를 목적으로 하는 의약품이 아닙니다.</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-[#E6BE8A]">
                      <span className="mt-2 w-1 h-1 rounded-full bg-[#E6BE8A] shrink-0" />
                      <span>배송 및 교환/환불 정책의 상세 요건은 쇼핑몰 하단의 환불정책 및 배송정책 메뉴를 확인해주세요.</span>
                    </li>
                  </ul>
                </div>
              </Reveal>
            </section>


            {/* ==========================================
                8. Final CTA
                ========================================== */}
            <section className="relative aspect-video overflow-hidden rounded-[32px] mb-20 group">
              <div className="absolute inset-0 z-0">
                <Image src="/image/pinklady/p6.webp" alt="Feminine elegance background" fill className="object-cover transition-transform duration-[10000ms] group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0514] via-[#0a0514]/50 to-transparent"></div>
              </div>
              
              <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
                <Reveal>
                  <div className="mb-4 flex justify-center">
                    <BaekdohwaFlowerMark size={40} outlineGold />
                  </div>
                  <h2 className="text-2xl md:text-4xl font-elegant font-bold text-white mb-4 leading-tight">
                    우아한 여성의 작은 습관
                  </h2>
                  <p className="text-xs md:text-sm text-[#EDE6DA] opacity-80 mb-8 max-w-md mx-auto break-keep">
                    진정한 자신감은 특별한 날이 아니라 매일의 관리에서 시작됩니다.<br />
                    오늘부터 핑크레이디 시크릿 리추얼로 당신의 첫 프리미엄 케어를 시작하세요.
                  </p>
                  
                  <button 
                    onClick={handlePurchase}
                    className="btn-primary inline-flex items-center gap-3 px-12 py-5 rounded-full font-bold text-lg hover:scale-105 transition-all duration-500 hover:shadow-[0_0_35px_rgba(230,190,138,0.35)]" 
                    style={{ 
                      background: 'linear-gradient(135deg, #E6BE8A 0%, #BA8D7E 100%)', 
                      color: '#2D0A1E', 
                    }}
                  >
                    지금 시작하기
                    <ArrowRight className="w-5 h-5 text-[#2D0A1E]" />
                  </button>
                </Reveal>
              </div>
            </section>


            {/* Policy Links */}
            <section className="pb-10 text-center border-t border-white/5 pt-10">
              <Reveal>
                <div className="flex justify-center gap-6 text-[10px] md:text-xs tracking-[0.2em] uppercase text-white/30">
                  <Link href="/terms" className="hover:text-[#E6BE8A] transition-colors">이용약관</Link>
                  <Link href="/privacy" className="hover:text-[#E6BE8A] transition-colors">개인정보처리방침</Link>
                  <Link href="/refund" className="hover:text-[#E6BE8A] transition-colors">배송 및 환불정책</Link>
                </div>
              </Reveal>
            </section>

          </div>
        </div>
        <Footer />
      </GlobalBackground>
    </main>
  )
}
