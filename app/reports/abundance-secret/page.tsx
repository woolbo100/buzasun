'use client'

import React from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Reveal from '@/components/Reveal'
import GlobalBackground from '@/components/GlobalBackground'
import Link from 'next/link'
import Image from 'next/image'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { useRouter } from 'next/navigation'
import { addToCart } from '@/hooks/useCart'
import { 
  Check, 
  BookOpen, 
  FileText, 
  Smartphone, 
  AlertCircle,
  ChevronRight
} from 'lucide-react'

const productData = {
  productId: 'abundance-secret-guide',
  slug: 'abundance-secret-guide',
  pageSlug: 'abundance-secret',
  title: '풍요비책',
  titleHanja: '豊饒秘策',
  titleEn: 'Abundance Secret',
  type: 'digital_ebook',
  category: 'reports',
  path: '/reports/abundance-secret',
  checkoutUrl: '/checkout?productId=abundance-secret-guide',

  heroImage: '/image/abundance/a1.webp',
  overviewImage: '/image/abundance/a2.webp',
  recommendedImage: '/image/abundance/a3.webp',
  structureImage: '/image/abundance/a4.webp',
  premiumImage: '/image/abundance/a5.webp',
  ctaImage: '/image/abundance/a6.webp',
}

export default function AbundanceSecretPage() {
  useScrollAnimation()
  const router = useRouter()

  const handlePurchase = (e: React.MouseEvent) => {
    e.preventDefault()
    router.push(productData.checkoutUrl)
  }

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    addToCart({
      id: productData.productId,
      slug: productData.slug,
      name: productData.title + ' 가이드',
      price: 19000,
      image: productData.heroImage,
      type: productData.type,
      category: 'SECRET METHOD'
    }, 1)
    alert("장바구니에 담았습니다.")
  }

  // 샴페인 골드 & 전통 금박 구름 장식 구분선
  const EmeraldCloudDivider = () => (
    <div className="flex items-center justify-center my-20 opacity-60">
      <div className="h-[1px] w-16 md:w-28 bg-gradient-to-r from-transparent to-[#E6BE8A]" />
      <div className="mx-4 flex items-center justify-center">
        {/* 금박 구름 문양 SVG */}
        <svg className="w-6 h-6 text-[#E6BE8A] animate-pulse" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.5 18C3.46 18 1 15.54 1 12.5C1 9.79 2.95 7.54 5.56 7.07C6.73 4.64 9.17 3 12 3C15.42 3 18.3 5.42 18.91 8.68C21.74 9.07 23 11.23 23 13.5C23 15.98 20.98 18 18.5 18H6.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <div className="h-[1px] w-16 md:w-28 bg-gradient-to-l from-transparent to-[#E6BE8A]" />
    </div>
  )

  // 공통 CTA 버튼 -> 장바구니 / 바로구매 분리 (풍요비책 에메랄드 테마 색상 적용)
  const CTAButton = ({ text }: { text: string }) => (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center my-6 max-w-md mx-auto">
      <button
        onClick={handleAddToCart}
        className="flex-1 py-4.5 rounded-xl font-elegant font-bold text-base hover:scale-[1.02] active:scale-95 transition-all duration-300 border border-[#E6BE8A]/30 text-[#E6BE8A] hover:bg-[#E6BE8A]/10 bg-transparent w-full"
      >
        장바구니 담기
      </button>
      <button
        onClick={handlePurchase}
        className="flex-grow-[1.5] py-4.5 rounded-xl font-elegant font-bold text-base hover:scale-[1.02] active:scale-95 transition-all duration-500 flex items-center justify-center gap-2 text-[#FAF7F2] w-full animate-pulse-slow"
        style={{
          background: 'linear-gradient(135deg, #114234 0%, #0B2B22 100%)', // 딥 에메랄드 그린
          border: '1px solid rgba(230, 190, 138, 0.5)',
          boxShadow: '0 0 35px rgba(22, 78, 63, 0.35)' // 에메랄드 소프트 글로우
        }}
      >
        {text}
        <ChevronRight className="w-5 h-5 text-[#FAF7F2]" />
      </button>
    </div>
  )

  return (
    <main className="relative min-h-screen bg-[#0a0514] text-[#EDE6DA] font-sans selection:bg-[#FAF7F2] selection:text-[#0B2B22]">
      {/* 기존 백도화 템플릿의 다크 배경(GlobalBackground) 유지 */}
      <GlobalBackground src="/image/love-code-bg.png" brightCenter={false}>
        <Navigation />

        <div className="relative z-10 pt-44 pb-20">
          <div className="container-premium">
            
            {/* 1. Hero Section */}
            <section className="text-center mb-28">
              <Reveal delayMs={100}>
                {/* 상단 라벨 */}
                <div className="mb-8">
                  <span className="inline-block px-5 py-1.5 rounded-full text-[10px] md:text-xs font-bold tracking-[0.25em] text-[#E6BE8A] uppercase"
                    style={{
                      background: 'rgba(22, 78, 63, 0.25)',
                      border: '1px solid rgba(230, 190, 138, 0.3)',
                    }}>
                    PREMIUM ABUNDANCE MINDSET GUIDE
                  </span>
                </div>

                {/* 대제목 */}
                <h1 className="text-3xl md:text-5xl font-elegant font-bold mb-10 text-white leading-tight">
                  豊饒秘策 <span className="text-[#E6BE8A]">풍요비책</span>
                </h1>

                {/* 큰 이미지 배치 */}
                <div className="relative max-w-6xl mx-auto aspect-video mb-16 rounded-[30px] md:rounded-[40px] overflow-hidden border border-white/10 shadow-2xl group">
                  <Image 
                    src={productData.heroImage} 
                    alt="풍요비책"
                    fill
                    className="object-cover transition-transform duration-[10000ms] group-hover:scale-110"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0514]/60 to-transparent"></div>
                </div>

                {/* 하단 서브카피, 설명 및 구매 버튼 */}
                <div className="max-w-3xl mx-auto space-y-6">
                  <p className="text-xl md:text-2xl font-elegant font-semibold text-[#E6BE8A] leading-snug break-keep">
                    숨겨진 황금의 문을 여는 풍요의 비밀서
                  </p>

                  <div className="text-sm md:text-base text-[#EDE6DA]/75 leading-relaxed space-y-3 pt-6 border-t border-white/5 break-keep">
                    <p>
                      풍요비책은 돈을 쫓는 방식이 아니라, 내면의 결핍 코드를 점검하고 풍요를 받아들일 마음그릇을 키우기 위한 프리미엄 풍요의식 자기계발 전자책입니다.
                    </p>
                    <p>
                      부는 바깥에서 억지로 붙잡는 것이 아니라, 내 안의 문을 여는 순간 다른 방식으로 흐르기 시작합니다.
                    </p>
                    <p className="font-semibold text-white">
                      오늘부터 풍요비책과 함께 나의 무의식, 감정, 언어, 소비, 감사의 루틴을 새롭게 정렬해보세요.
                    </p>
                  </div>

                  <div className="pt-4">
                    <CTAButton text="풍요비책 구매하기" />
                  </div>
                </div>
              </Reveal>
            </section>

            <EmeraldCloudDivider />

            {/* 2. Product Overview Section */}
            <section className="mb-28">
              <Reveal>
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                  {/* 왼쪽 실제 전자책 목업 */}
                  <div className="relative w-full aspect-square overflow-hidden rounded-[40px] border border-[#E6BE8A]/30 shadow-2xl">
                    <Image 
                      src={productData.overviewImage} 
                      alt="풍요비책 전자책 목업" 
                      fill 
                      className="object-cover" 
                    />
                  </div>

                  {/* 오른쪽 핵심 가치 및 6개 포인트 카드 */}
                  <div className="space-y-6 text-left break-keep">
                    <h2 className="text-2xl md:text-3xl font-elegant font-bold text-white leading-snug">
                      부는 쫓는 것이 아니라,<br/>
                      <span className="text-[#E6BE8A]">여는 것</span>입니다
                    </h2>
                    <p className="text-sm md:text-base text-[#EDE6DA]/75 leading-relaxed font-light">
                      풍요비책은 단순히 더 많이 벌기 위한 방법론을 말하지 않습니다. 이 책은 왜 열심히 살아도 같은 결핍 패턴이 반복되는지, 왜 돈이 들어와도 오래 머물지 않는지, 왜 풍요를 원하면서도 마음 깊은 곳에서는 두려워하는지 내면의 관점에서 바라보도록 돕습니다. 가난의 무의식을 진단하고, 묵은 감정을 정화하고, 풍요의 코드를 새기며, 부를 받아들일 마음그릇을 넓히는 백도화식 마음의 연금술 안내서입니다.
                    </p>

                    {/* 포인트 카드 6개 (glass card 형태) */}
                    <div className="grid grid-cols-2 gap-4 pt-4">
                      {[
                        "결핍 무의식 진단",
                        "감정 정화와 비움의 법칙",
                        "풍요의식 회복",
                        "돈과 에너지의 관계 이해",
                        "마음그릇과 돈그릇 확장",
                        "21일 풍요 루틴 실천"
                      ].map((item, idx) => (
                        <div 
                          key={idx}
                          className="gungjung-glass p-4 border-[#E6BE8A]/20 flex items-center gap-3 hover:border-[#E6BE8A]/50 transition-all"
                          style={{
                            boxShadow: '0 8px 32px rgba(22, 78, 63, 0.05)'
                          }}
                        >
                          <div className="w-6 h-6 rounded-full bg-[#114234]/35 flex items-center justify-center shrink-0 border border-[#E6BE8A]/30">
                            <Check className="w-3.5 h-3.5 text-[#E6BE8A]" />
                          </div>
                          <span className="text-xs md:text-sm text-white/90 font-medium">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            </section>

            <EmeraldCloudDivider />

            {/* 3. Recommended For Section */}
            <section className="mb-28">
              <Reveal>
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                  {/* 왼쪽 추천 리스트 */}
                  <div className="space-y-8 text-left break-keep">
                    <h2 className="text-2xl md:text-3xl font-elegant font-bold text-white tracking-wide">
                      이런 분께 <span className="text-[#E6BE8A]">추천합니다</span>
                    </h2>

                    <div className="space-y-4">
                      {[
                        "열심히 사는데도 같은 돈 패턴이 반복된다고 느끼는 분",
                        "돈을 벌고 싶지만 마음 한쪽에 불안과 두려움이 큰 분",
                        "돈을 쓸 때 죄책감이나 긴장감이 자주 올라오는 분",
                        "나의 결핍의식과 무의식 패턴을 점검하고 싶은 분",
                        "부를 단순한 숫자가 아니라 삶의 에너지로 바라보고 싶은 분",
                        "감사, 순환, 비움의 관점으로 풍요를 다시 정리하고 싶은 분",
                        "자기계발과 마음공부를 통해 돈과의 관계를 바꾸고 싶은 분",
                        "부의 그릇을 키우는 매일의 루틴이 필요한 분"
                      ].map((text, idx) => (
                        <div 
                          key={idx}
                          className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#E6BE8A]/30 shadow-md flex items-start gap-4 hover:scale-[1.01] transition-transform"
                        >
                          <div className="w-5.5 h-5.5 rounded-full bg-[#114234]/10 flex items-center justify-center shrink-0 mt-0.5 border border-[#114234]/30">
                            <Check className="w-3.5 h-3.5 text-[#114234]" />
                          </div>
                          <p className="text-sm md:text-base text-[#3D3530] font-medium leading-relaxed">
                            {text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 오른쪽 세로 이미지 */}
                  <div className="relative w-full aspect-[3/4] overflow-hidden rounded-[40px] border border-white/10 shadow-2xl">
                    <Image 
                      src={productData.recommendedImage} 
                      alt="풍요를 지닌 성숙한 여성을 상징하는 이미지" 
                      fill 
                      className="object-cover" 
                    />
                  </div>
                </div>
              </Reveal>
            </section>

            <EmeraldCloudDivider />

            {/* 4. Core Structure Section */}
            <section className="mb-28 text-center">
              <Reveal>
                <div className="max-w-4xl mx-auto space-y-4 mb-10">
                  <span className="text-[#E6BE8A] font-elegant tracking-[0.2em] text-xs uppercase">Core Structure</span>
                  <h2 className="text-3xl md:text-4xl font-elegant font-bold text-white tracking-widest">
                    부의 핵심 구조
                  </h2>
                  <p className="text-sm md:text-base text-[#EDE6DA]/75 leading-relaxed break-keep font-light max-w-2xl mx-auto">
                    풍요비책은 돈을 단순히 숫자나 통장 잔고로만 바라보지 않습니다. 내가 돈을 어떻게 느끼는지, 돈을 쓸 때 어떤 감정이 올라오는지, 나의 무의식에 어떤 결핍 신념이 저장되어 있는지, 그리고 어떤 방식으로 풍요의 상태를 훈련할 수 있는지를 단계적으로 정리합니다.
                  </p>
                </div>

                {/* 중앙 인포그래픽 이미지 */}
                <div className="max-w-6xl mx-auto mb-12">
                  <div className="relative aspect-video rounded-[30px] overflow-hidden border border-white/10 shadow-xl group">
                    <Image 
                      src={productData.structureImage} 
                      alt="풍요비책 핵심 구조 설명 이미지" 
                      fill 
                      className="object-cover" 
                    />
                  </div>
                </div>

                {/* 6대 구조 상세 설명 카드 */}
                <div className="grid md:grid-cols-3 gap-4 text-left max-w-6xl mx-auto">
                  {[
                    {
                      num: "01",
                      label: "Diagnosis",
                      title: "결핍 무의식 진단",
                      desc: "내면의 결핍 필터와 돈에 대한 무의식 신념을 점검하고 현재 상태를 다각도로 마주합니다."
                    },
                    {
                      num: "02",
                      label: "Cleansing",
                      title: "묵은 감정과 과거 패턴 정화",
                      desc: "돈에 얽힌 불안, 원망, 수치심 등 마음 깊은 곳에 가라앉은 감정들을 깨끗이 비워냅니다."
                    },
                    {
                      num: "03",
                      label: "Abundance Code",
                      title: "풍요의식 새기기",
                      desc: "돈이 자연스레 따르는 마음의 작동 원리를 이해하고 내면의 풍요 코드를 조율합니다."
                    },
                    {
                      num: "04",
                      label: "Flow",
                      title: "돈의 순환과 감사의 에너지",
                      desc: "억지로 붙잡아 두려는 소비가 아닌, 감사와 배풂을 통해 순환하는 건강한 돈의 에너지를 훈련합니다."
                    },
                    {
                      num: "05",
                      label: "Vessel",
                      title: "마음그릇과 돈그릇 확장",
                      desc: "풍요가 일시적인 현상에 그치지 않고, 삶에 안정적으로 안착할 수 있는 부의 그릇을 넓힙니다."
                    },
                    {
                      num: "06",
                      label: "Practice",
                      title: "21일 풍요 루틴 실천",
                      desc: "무의식 속에 부의 뇌를 온전히 저장하고 자동화하기 위한 21일간의 일상 행동 챌린지를 적용합니다."
                    }
                  ].map((item, idx) => (
                    <div 
                      key={idx} 
                      className="gungjung-glass p-6 border-[#E6BE8A]/20 flex flex-col justify-between hover:border-[#E6BE8A]/50 transition-all"
                      style={{
                        boxShadow: '0 8px 32px rgba(22, 78, 63, 0.05)'
                      }}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="font-serif text-xs font-bold bg-[#114234] text-[#FAF7F2] px-2.5 py-0.5 rounded border border-[#E6BE8A]/30">
                            {item.num}
                          </span>
                          <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#E6BE8A]">{item.label}</span>
                        </div>
                        <h3 className="text-base md:text-lg font-elegant font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-xs md:text-sm text-[#EDE6DA]/60 leading-relaxed font-light break-keep">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 text-center">
                  <p className="text-xs text-[#EDE6DA]/40 leading-relaxed font-light">
                    * 풍요비책은 돈을 보장하는 책이 아니라, 돈과 나의 관계를 새롭게 바라보고 풍요를 받아들일 내면의 준비를 돕는 자기계발 안내서입니다.
                  </p>
                </div>
              </Reveal>
            </section>

            <EmeraldCloudDivider />

            {/* 5. Premium Content Section */}
            <section className="mb-28">
              <Reveal>
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                  {/* 왼쪽 이미지 */}
                  <div className="relative w-full aspect-[4/5] overflow-hidden rounded-[40px] border border-white/10 shadow-2xl">
                    <Image 
                      src={productData.premiumImage} 
                      alt="프리미엄 풍요비책 이미지" 
                      fill 
                      className="object-cover" 
                    />
                  </div>

                  {/* 오른쪽 특징 리스트 */}
                  <div className="space-y-6 text-left break-keep">
                    <div>
                      <span className="text-[#E6BE8A] font-elegant tracking-[0.2em] text-xs uppercase">Premium Guidebook</span>
                      <h2 className="text-2xl md:text-3xl font-elegant font-bold text-white mt-1 leading-snug">
                        백도화가 전하는<br/>
                        <span className="text-[#E6BE8A]">마음의 연금술 비급서</span>
                      </h2>
                    </div>
                    
                    <p className="text-sm md:text-base text-[#EDE6DA]/75 leading-relaxed font-light">
                      풍요비책은 단순한 재테크서도, 막연한 끌어당김 문구 모음집도 아닙니다. 이 책이 말하는 핵심은 돈을 더 간절히 쫓는 방법이 아니라, 내 안의 결핍 신호를 알아차리고 풍요가 머물 수 있는 마음의 공간을 만드는 법입니다. 진단, 정화, 비움, 감사, 순환, 언어, 호흡, 시각화, 그리고 21일 루틴을 망라한 백도화식 프리미엄 풍요의식 구조서입니다.
                    </p>

                    {/* 강점 6가지 리스트 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                      {[
                        "디지털 파일 형태의 프리미엄 전자책",
                        "풍요의식과 무의식 패턴의 통합 분석",
                        "마음공부와 풍요 가치의 연결 설계",
                        "백도화 브랜드 톤의 기품 있는 문체",
                        "돈과 나의 관계를 성찰하는 질문 구성",
                        "21일 풍요 루틴 실천 가이드 포함"
                      ].map((item, idx) => (
                        <div 
                          key={idx} 
                          className="flex items-center gap-3 p-3 bg-[#FAF7F2] rounded-xl border border-[#E6BE8A]/25 hover:border-[#114234]/40 transition-colors"
                        >
                          <Check className="w-4 h-4 text-[#114234] shrink-0" />
                          <span className="text-xs md:text-sm text-[#3D3530] font-semibold">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4">
                      <CTAButton text="풍요비책 즉시 다운로드" />
                    </div>
                  </div>
                </div>
              </Reveal>
            </section>

            <EmeraldCloudDivider />

            {/* 6. Book Contents Section (목차 영역) */}
            <section className="mb-28">
              <Reveal>
                <div className="gungjung-glass p-8 md:p-12 border-[#E6BE8A]/20 bg-gradient-to-br from-white/[0.02] to-transparent text-left max-w-6xl mx-auto break-keep">
                  <div className="text-center md:text-left mb-10">
                    <span className="text-[#E6BE8A] font-elegant tracking-[0.2em] text-xs uppercase">Table of Contents</span>
                    <h2 className="text-2xl md:text-3xl font-elegant font-bold mt-1 text-white border-l-4 border-[#E6BE8A] pl-6">
                      풍요비책 구성
                    </h2>
                    <p className="text-xs md:text-sm text-[#EDE6DA]/50 mt-3 font-light leading-relaxed pl-6">
                      풍요비책은 진단, 정화, 원리, 심화 법칙, 실전 루틴으로 이어지는 체계적인 구조를 통해 가난의 무의식을 점검하고, 감정을 치유하여, 삶에 풍요를 온전히 안착시키는 실전 지침을 다룹니다.
                    </p>
                  </div>
                  
                  {/* 목차 리스트 */}
                  <div className="grid md:grid-cols-2 gap-6 text-sm md:text-base leading-relaxed text-[#EDE6DA]/85">
                    {[
                      {
                        title: "프롤로그",
                        desc: "숨겨진 황금의 문을 열며"
                      },
                      {
                        title: "제1부 봉인 해제: 진단편",
                        desc: "가난의 무의식을 발견하고 진단하는 단계"
                      },
                      {
                        title: "제2부 정화의 연금술: 치유편",
                        desc: "과거에 얽매인 묵은 감정과 돈의 상처 정화"
                      },
                      {
                        title: "제3부 풍요의 코드: 원리편",
                        desc: "부의 본질을 이해하고 풍요의식을 새기는 단계"
                      },
                      {
                        title: "제4부 부의 법칙 7가지: 심화편",
                        desc: "돈을 당기며 순환시키는 7가지 우아한 황금률"
                      },
                      {
                        title: "제5부 창조의 주문: 실전편",
                        desc: "호흡, 시각화, 풍요 언어를 활용한 실천"
                      },
                      {
                        title: "특별 부록. 마음그릇 · 돈그릇",
                        desc: "풍요를 안정적으로 담아내는 용량 키우기"
                      },
                      {
                        title: "실전 챌린지. 21일 풍요 뇌 만들기",
                        desc: "무의식 속에 부의 감각을 각인하는 21일 챌린지"
                      },
                      {
                        title: "에필로그",
                        desc: "부가 오기 전의 징조"
                      }
                    ].map((item, idx) => (
                      <div 
                        key={idx} 
                        className="flex gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-colors"
                      >
                        <div className="w-12 h-12 rounded-lg bg-[#114234]/15 border border-[#E6BE8A]/20 flex items-center justify-center shrink-0 text-xs font-bold font-serif text-[#E6BE8A]">
                          {idx === 0 ? "Prologue" : idx === 8 ? "Epilogue" : idx === 6 ? "Appendix" : idx === 7 ? "Challenge" : `제${idx}부`}
                        </div>
                        <div className="space-y-1">
                          <h3 className="font-semibold text-white text-sm md:text-base">{item.title}</h3>
                          <p className="text-xs md:text-sm text-[#EDE6DA]/60 font-light leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </section>

            <EmeraldCloudDivider />

            {/* 7. Digital Product Notice Section (구매 전 안내) */}
            <section className="mb-28">
              <Reveal>
                <div className="gungjung-glass p-8 md:p-12 border-white/5 text-left max-w-6xl mx-auto break-keep">
                  <h2 className="text-2xl font-elegant font-bold mb-10 text-white border-l-4 border-[#E6BE8A] pl-6">
                    구매 전 안내
                  </h2>
                  <ul className="space-y-4 text-xs md:text-sm text-[#EDE6DA]/60 font-light">
                    {[
                      "본 상품은 실물 배송이 없는 디지털 전자책(PDF 파일) 상품입니다.",
                      "결제 완료 후 안내된 방식(마이페이지 또는 등록된 이메일)에 따라 즉시 다운로드해 확인하실 수 있습니다.",
                      "디지털 콘텐츠의 특성상 파일이 다운로드되거나 메일로 발송된 이후에는 단순 변심에 의한 환불이 제한될 수 있습니다.",
                      "개인의 상황, 경제적 환경, 실천 강도에 따라 배움의 깊이와 체감되는 결과는 다를 수 있습니다.",
                      "본 콘텐츠는 풍요의식 형성과 자기이해를 돕기 위한 자기계발 콘텐츠이며, 전문적인 금융·투자·법률·세무 자문을 대체하지 않습니다.",
                      "특정 금액의 수익 성과나 투자 성공, 강제적인 경제적 이득을 무조건 보장하지 않습니다.",
                      "자세한 취소/환불 기준은 하단의 이용약관 및 환불정책을 참고해 주시기 바랍니다."
                    ].map((text, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#E6BE8A] shrink-0"></span>
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </section>

            {/* 8. Final CTA Section */}
            <section className="relative aspect-[16/9] md:aspect-video overflow-hidden rounded-[40px] mb-20 group border border-[#E6BE8A]/40 shadow-2xl">
              {/* a6.webp 배경 */}
              <div className="absolute inset-0 z-0">
                <Image 
                  src={productData.ctaImage} 
                  alt="풍요비책 마지막 안내 배경" 
                  fill 
                  className="object-cover transition-transform duration-[10000ms] group-hover:scale-110" 
                />
                {/* 텍스트 가독성을 위한 딥그린 반투명 오버레이 필터 */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0514] via-[#0B2B22]/75 to-black/80 mix-blend-multiply" />
                <div className="absolute inset-0 bg-[#0a0514]/30" />
              </div>

              {/* 중앙 정보 및 CTA 버튼 */}
              <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 md:px-10 text-center max-w-5xl mx-auto space-y-6 md:space-y-8 break-keep">
                <Reveal>
                  <h2 className="text-2xl md:text-4xl font-elegant font-bold text-white leading-tight">
                    내 안의 황금 문을 여는 시간
                  </h2>
                  <p className="text-sm md:text-base text-[#EDE6DA]/85 leading-relaxed font-light max-w-xl mx-auto">
                    풍요는 더 많이 쫓는 사람에게만 오는 것이 아니라, 받아들일 준비가 된 마음에 오래 머무릅니다. 결핍을 반복하던 무의식에서 벗어나 나의 감정, 언어, 소비, 감사, 실천 루틴을 새롭게 정렬해 보세요.
                  </p>
                  
                  <div className="pt-4">
                    <CTAButton text="풍요비책 구매하기" />
                  </div>
                </Reveal>
              </div>
            </section>

            {/* Policy Links */}
            <section className="pb-10 text-center">
              <Reveal>
                <div className="flex justify-center gap-8 text-[10px] tracking-[0.2em] uppercase text-white/30">
                  <Link href="/terms" className="hover:text-[var(--accent-gold)] transition-colors">이용약관</Link>
                  <Link href="/privacy" className="hover:text-[var(--accent-gold)] transition-colors">개인정보처리방침</Link>
                  <Link href="/refund" className="hover:text-[var(--accent-gold)] transition-colors">배송 및 환불정책</Link>
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
