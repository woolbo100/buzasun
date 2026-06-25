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
  productId: 'love-secret-ebook',
  slug: 'love-secret',
  title: '연애비급',
  titleEn: 'Love Secret',
  type: 'digital_ebook',
  category: 'reports',
  path: '/reports/love-secret',
  checkoutUrl: '/checkout?productId=love-secret-ebook',

  heroImage: '/image/love/l1.webp',
  overviewImage: '/image/love/l2.webp',
  recommendedImage: '/image/love/l3.webp',
  structureImage: '/image/love/l4.webp',
  premiumImage: '/image/love/l5.webp',
  ctaImage: '/image/love/l6.webp',
}

export default function LoveSecretEbookPage() {
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
      name: productData.title + ' 전자책',
      price: 19000,
      image: productData.heroImage,
      type: productData.type,
      category: 'SECRET METHOD'
    }, 1)
    alert("장바구니에 담았습니다.")
  }

  // 샴페인 골드 & 핑크 매듭 장식 구분선 (전통적 기품 강조)
  const ChampagneThreadDivider = () => (
    <div className="flex items-center justify-center my-20 opacity-60">
      <div className="h-[1px] w-16 md:w-28 bg-gradient-to-r from-transparent to-[#D4B2A7]" />
      <div className="mx-4 flex items-center justify-center">
        <svg className="w-5 h-5 text-[#D4B2A7] animate-pulse" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C9.5 2 7.5 4 7.5 6.5C7.5 9 10 11 12 13C14 11 16.5 9 16.5 6.5C16.5 4 14.5 2 12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 13V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="12" cy="6.5" r="2" fill="currentColor" />
        </svg>
      </div>
      <div className="h-[1px] w-16 md:w-28 bg-gradient-to-l from-transparent to-[#D4B2A7]" />
    </div>
  )

  // 공통 CTA 버튼 -> 장바구니 / 바로구매 분리 (연애비급 테마 색상 적용)
  const CTAButton = ({ text }: { text: string }) => (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center my-6 max-w-md mx-auto">
      <button
        onClick={handleAddToCart}
        className="flex-1 py-4.5 rounded-xl font-elegant font-bold text-base hover:scale-[1.02] active:scale-95 transition-all duration-300 border border-[#D4B2A7]/30 text-[#D4B2A7] hover:bg-[#D4B2A7]/10 bg-transparent w-full"
      >
        장바구니 담기
      </button>
      <button
        onClick={handlePurchase}
        className="flex-grow-[1.5] py-4.5 rounded-xl font-elegant font-bold text-base hover:scale-[1.02] active:scale-95 transition-all duration-500 flex items-center justify-center gap-2 text-[#FAF7F2] w-full animate-pulse-slow"
        style={{
          background: 'linear-gradient(135deg, #BA8D7E 0%, #8C5E50 100%)', // 샴페인 브라운/로즈 골드 톤으로 우아하게
          border: '1px solid rgba(212, 178, 167, 0.5)',
          boxShadow: '0 0 35px rgba(197, 139, 160, 0.25)'
        }}
      >
        {text}
        <ChevronRight className="w-5 h-5 text-[#FAF7F2]" />
      </button>
    </div>
  )

  return (
    <main className="relative min-h-screen bg-[#0a0514] text-[#EDE6DA] font-sans selection:bg-[#FAF7F2] selection:text-[#1A0F2E]">
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
                  <span className="inline-block px-5 py-1.5 rounded-full text-[10px] md:text-xs font-bold tracking-[0.25em] text-[#D4B2A7] uppercase"
                    style={{
                      background: 'rgba(186, 141, 126, 0.15)',
                      border: '1px solid rgba(212, 178, 167, 0.3)',
                    }}>
                    PREMIUM LOVE POSITION GUIDE
                  </span>
                </div>

                {/* 대제목 */}
                <h1 className="text-3xl md:text-5xl font-elegant font-bold mb-10 text-white leading-tight">
                  戀愛秘笈 <span className="text-[#D4B2A7]">연애비급</span>
                </h1>

                {/* 큰 이미지 배치 */}
                <div className="relative max-w-6xl mx-auto aspect-video mb-16 rounded-[30px] md:rounded-[40px] overflow-hidden border border-white/10 shadow-2xl group">
                  <Image 
                    src={productData.heroImage} 
                    alt="연애비급"
                    fill
                    className="object-cover transition-transform duration-[10000ms] group-hover:scale-110"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0514]/60 to-transparent"></div>
                </div>

                {/* 하단 서브카피, 설명 및 구매 버튼 */}
                <div className="max-w-3xl mx-auto space-y-6">
                  <p className="text-xl md:text-2xl font-elegant font-semibold text-[#BA8D7E] leading-snug break-keep">
                    사랑을 구걸하는 자리에서, 사랑이 머무는 자리로
                  </p>

                  <div className="text-sm md:text-base text-[#EDE6DA]/75 leading-relaxed space-y-3 pt-6 border-t border-white/5 break-keep">
                    <p>
                      연애비급은 반복적으로 낮은 자리에 서는 여성을 위한 프리미엄 연애 심리·포지션·매력 구조 해석서입니다.
                    </p>
                    <p>
                      더 많이 애쓰는 것이 아니라, 내가 서 있는 자리를 바꾸는 것.
                    </p>
                    <p className="font-semibold text-white">
                      이제 사랑을 확인하고 붙잡는 연애가 아니라, 나의 기준과 매력을 잃지 않는 연애를 시작해보세요.
                    </p>
                  </div>

                  <div className="pt-4">
                    <CTAButton text="연애비급 구매하기" />
                  </div>
                </div>
              </Reveal>
            </section>

            <ChampagneThreadDivider />

            {/* 2. Product Overview Section */}
            <section className="mb-28">
              <Reveal>
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                  {/* 왼쪽 실제 전자책 목업 */}
                  <div className="relative w-full aspect-square overflow-hidden rounded-[40px] border border-[#D4B2A7]/30 shadow-2xl">
                    <Image 
                      src={productData.overviewImage} 
                      alt="연애비급 전자책 목업" 
                      fill 
                      className="object-cover" 
                    />
                  </div>

                  {/* 오른쪽 핵심 가치 및 6개 포인트 카드 */}
                  <div className="space-y-6 text-left break-keep">
                    <h2 className="text-2xl md:text-3xl font-elegant font-bold text-white leading-snug">
                      사랑은 감정이 아니라<br/>
                      <span className="text-[#D4B2A7]">관계의 구조</span>입니다
                    </h2>
                    <p className="text-sm md:text-base text-[#EDE6DA]/75 leading-relaxed font-light">
                      연애비급은 단순히 더 예뻐지는 법, 더 잘해주는 법, 더 참는 법을 말하지 않습니다. 이 책은 연애에서 반복적으로 상처받는 여성이 왜 늘 같은 자리에서 흔들리는지, 어떤 순간 관계의 포지션이 기울어지는지, 그리고 어떻게 다시 나의 중심으로 돌아올 수 있는지를 다룹니다. 사랑받기 위해 애쓰는 여자가 아니라, 사랑이 머물 수밖에 없는 여자가 되는 관계 구조 안내서입니다.
                    </p>

                    {/* 포인트 카드 6개 (glass card 형태) */}
                    <div className="grid grid-cols-2 gap-4 pt-4">
                      {[
                        "연애 포지션 회복",
                        "남자의 심리 구조 이해",
                        "흔들리지 않는 매력의 근원",
                        "무의식적 관계 패턴 해석",
                        "말의 결을 바꾸는 언어 구조",
                        "선택받는 자리에서 선택하는 자리로"
                      ].map((item, idx) => (
                        <div 
                          key={idx}
                          className="gungjung-glass p-4 border-[#D4B2A7]/20 flex items-center gap-3 hover:border-[#D4B2A7]/50 transition-all"
                          style={{
                            boxShadow: '0 8px 32px rgba(197, 139, 160, 0.05)'
                          }}
                        >
                          <div className="w-6 h-6 rounded-full bg-[#BA8D7E]/20 flex items-center justify-center shrink-0 border border-[#D4B2A7]/30">
                            <Check className="w-3.5 h-3.5 text-[#D4B2A7]" />
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

            <ChampagneThreadDivider />

            {/* 3. Recommended For Section */}
            <section className="mb-28">
              <Reveal>
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                  {/* 왼쪽 추천 리스트 */}
                  <div className="space-y-8 text-left break-keep">
                    <h2 className="text-2xl md:text-3xl font-elegant font-bold text-white tracking-wide">
                      이런 분께 <span className="text-[#D4B2A7]">추천합니다</span>
                    </h2>

                    <div className="space-y-4">
                      {[
                        "연애할 때 늘 내가 더 불안해지는 분",
                        "잘해줄수록 관계가 기울어진다고 느꼈던 분",
                        "사랑받기 위해 나를 자주 설명하고 증명해온 분",
                        "남자의 반응에 따라 내 감정이 크게 흔들리는 분",
                        "연애에서 늘 기다리는 사람, 맞춰주는 사람의 자리에 섰던 분",
                        "더 이상 사랑 앞에서 작아지고 싶지 않은 분",
                        "관계 안에서도 나의 기준과 품격을 지키고 싶은 분",
                        "성숙한 여성의 연애 감각과 자기 가치를 회복하고 싶은 분"
                      ].map((text, idx) => (
                        <div 
                          key={idx}
                          className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#D4B2A7]/30 shadow-md flex items-start gap-4 hover:scale-[1.01] transition-transform"
                        >
                          <div className="w-5.5 h-5.5 rounded-full bg-[#C58BA0]/10 flex items-center justify-center shrink-0 mt-0.5 border border-[#C58BA0]/30">
                            <Check className="w-3.5 h-3.5 text-[#C58BA0]" />
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
                      alt="성숙한 여성을 상징하는 이미지" 
                      fill 
                      className="object-cover" 
                    />
                  </div>
                </div>
              </Reveal>
            </section>

            <ChampagneThreadDivider />

            {/* 4. Core Structure Section */}
            <section className="mb-28 text-center">
              <Reveal>
                <div className="max-w-4xl mx-auto space-y-4 mb-10">
                  <span className="text-[#D4B2A7] font-elegant tracking-[0.2em] text-xs uppercase">Core Structure</span>
                  <h2 className="text-3xl md:text-4xl font-elegant font-bold text-white tracking-widest">
                    관계의 핵심 구조
                  </h2>
                  <p className="text-sm md:text-base text-[#EDE6DA]/75 leading-relaxed break-keep font-light max-w-2xl mx-auto">
                    연애비급은 감정만을 위로하는 책이 아닙니다. 관계가 시작되고, 기울어지고, 반복되고, 다시 회복되는 흐름을 포지션·심리·무의식·언어·매력의 관점에서 6가지 핵심 구조로 나누어 정리합니다.
                  </p>
                </div>

                {/* 중앙 인포그래픽 이미지 */}
                <div className="max-w-6xl mx-auto mb-12">
                  <div className="relative aspect-video rounded-[30px] overflow-hidden border border-white/10 shadow-xl group">
                    <Image 
                      src={productData.structureImage} 
                      alt="관계의 6가지 핵심 구조 설명 이미지" 
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
                      label: "Position",
                      title: "관계 안에서 서 있는 자리",
                      desc: "사랑을 확인받으려 애쓰는 낮은 자리가 아닌, 나의 존재감과 가치가 존중받는 중심 자리를 회복합니다."
                    },
                    {
                      num: "02",
                      label: "State",
                      title: "그가 느끼는 자기 상태",
                      desc: "상대가 내 곁에 머물며 느끼는 편안함과, 나라는 존재가 주는 긴장감이 우아하게 공존하는 흐름을 설계합니다."
                    },
                    {
                      num: "03",
                      label: "Identity",
                      title: "나에 대한 인식과 정체성",
                      desc: "그가 나를 수많은 사람들 중 하나가 아닌, 쉽게 대체할 수 없는 고유하고 특별한 가치를 지닌 존재로 인식하게 돕습니다."
                    },
                    {
                      num: "04",
                      label: "Aura",
                      title: "설명하지 않아도 남는 분위기",
                      desc: "구구절절 스스로를 해명하거나 매달리지 않아도, 말과 태도의 여백을 통해 드러나는 고요하고 단단한 아우라입니다."
                    },
                    {
                      num: "05",
                      label: "Boundary",
                      title: "사랑 안에서도 지켜야 할 기준",
                      desc: "스스로를 갉아먹는 과도한 헌신을 멈추고, 관계의 품격을 지키기 위해 결코 양보해서는 안 될 최소한의 경계선입니다."
                    },
                    {
                      num: "06",
                      label: "Choice",
                      title: "선택받는 것을 넘어 선택하는 힘",
                      desc: "상대방의 사소한 리액션에 휘둘리며 응답을 기다리는 관계에서 탈피하여, 내가 관계의 주도권을 쥐고 결정합니다."
                    }
                  ].map((item, idx) => (
                    <div 
                      key={idx} 
                      className="gungjung-glass p-6 border-[#D4B2A7]/20 flex flex-col justify-between hover:border-[#D4B2A7]/50 transition-all"
                      style={{
                        boxShadow: '0 8px 32px rgba(197, 139, 160, 0.05)'
                      }}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="font-serif text-xs font-bold bg-[#8C5E50] text-[#FAF7F2] px-2.5 py-0.5 rounded border border-[#D4B2A7]/30">
                            {item.num}
                          </span>
                          <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#D4B2A7]">{item.label}</span>
                        </div>
                        <h3 className="text-base md:text-lg font-elegant font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-xs md:text-sm text-[#EDE6DA]/60 leading-relaxed font-light break-keep">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 text-center">
                  <p className="text-xs text-[#EDE6DA]/40 leading-relaxed font-light">
                    * 연애비급은 누군가를 조종하기 위한 책이 아니라, 관계 안에서 나를 잃지 않기 위한 구조 안내서입니다.
                  </p>
                </div>
              </Reveal>
            </section>

            <ChampagneThreadDivider />

            {/* 5. Premium Content Section */}
            <section className="mb-28">
              <Reveal>
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                  {/* 왼쪽 이미지 */}
                  <div className="relative w-full aspect-[4/5] overflow-hidden rounded-[40px] border border-white/10 shadow-2xl">
                    <Image 
                      src={productData.premiumImage} 
                      alt="프리미엄 연애 비급서 이미지" 
                      fill 
                      className="object-cover" 
                    />
                  </div>

                  {/* 오른쪽 특징 리스트 */}
                  <div className="space-y-6 text-left break-keep">
                    <div>
                      <span className="text-[#D4B2A7] font-elegant tracking-[0.2em] text-xs uppercase">Premium Guidebook</span>
                      <h2 className="text-2xl md:text-3xl font-elegant font-bold text-white mt-1 leading-snug">
                        백도화가 전하는<br/>
                        <span className="text-[#D4B2A7]">프리미엄 연애 구조 해석서</span>
                      </h2>
                    </div>
                    
                    <p className="text-sm md:text-base text-[#EDE6DA]/75 leading-relaxed font-light">
                      연애비급은 가벼운 밀당 기술이나 순간적인 유혹법을 말하지 않습니다. 이 책이 말하는 핵심은 상대를 억지로 붙잡는 방법이 아니라, 내가 더 이상 낮은 자리에서 사랑을 기다리지 않는 법입니다. 여성의 품격, 관계의 중심, 말의 결, 감정의 여백, 그리고 자기 가치의 회복을 다룹니다.
                    </p>

                    {/* 강점 6가지 리스트 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                      {[
                        "디지털 파일 형태의 프리미엄 전자책",
                        "연애 심리와 관계 구조의 융합 분석",
                        "여성의 자기가치와 연애 감각의 연결",
                        "백도화 브랜드 톤의 기품 있는 문체",
                        "관계 속에서 나를 잃지 않는 기준점 제안",
                        "반복되는 내 안의 연애 패턴 자가 점검"
                      ].map((item, idx) => (
                        <div 
                          key={idx} 
                          className="flex items-center gap-3 p-3 bg-[#FAF7F2] rounded-xl border border-[#D4B2A7]/25 hover:border-[#C58BA0]/40 transition-colors"
                        >
                          <Check className="w-4 h-4 text-[#C58BA0] shrink-0" />
                          <span className="text-xs md:text-sm text-[#3D3530] font-semibold">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4">
                      <CTAButton text="연애비급 즉시 다운로드" />
                    </div>
                  </div>
                </div>
              </Reveal>
            </section>

            <ChampagneThreadDivider />

            {/* 6. Book Contents Section (목차 영역) */}
            <section className="mb-28">
              <Reveal>
                <div className="gungjung-glass p-8 md:p-12 border-[#D4B2A7]/20 bg-gradient-to-br from-white/[0.02] to-transparent text-left max-w-6xl mx-auto break-keep">
                  <div className="text-center md:text-left mb-10">
                    <span className="text-[#D4B2A7] font-elegant tracking-[0.2em] text-xs uppercase">Table of Contents</span>
                    <h2 className="text-2xl md:text-3xl font-elegant font-bold mt-1 text-white border-l-4 border-[#D4B2A7] pl-6">
                      연애비급 구성
                    </h2>
                    <p className="text-xs md:text-sm text-[#EDE6DA]/50 mt-3 font-light leading-relaxed pl-6">
                      연애비급은 총 7부 구성으로, 연애의 시작부터 매력의 근원, 무의식적 관계 구조, 말의 힘, 관계를 망치는 심리, 오래 가는 사랑의 구조, 그리고 선택의 자리까지 단계적으로 안내합니다.
                    </p>
                  </div>
                  
                  {/* 목차 리스트 */}
                  <div className="grid md:grid-cols-2 gap-6 text-sm md:text-base leading-relaxed text-[#EDE6DA]/85">
                    {[
                      {
                        title: "프롤로그",
                        desc: "사랑은 노력으로 만들어지지 않는다"
                      },
                      {
                        title: "1부. 시작과 변화",
                        desc: "남자의 사랑은 어떻게 시작되고 변하는가"
                      },
                      {
                        title: "2부. 매력의 본질",
                        desc: "흔들리지 않는 매력의 근원"
                      },
                      {
                        title: "3부. 무의식과 프레임",
                        desc: "연애 최면과 유혹의 구조"
                      },
                      {
                        title: "4부. 언어의 결",
                        desc: "말의 결, 관계의 위상을 바꾸는 언어"
                      },
                      {
                        title: "5부. 심리의 함정",
                        desc: "관계를 망치는 심리와 치명적인 함정"
                      },
                      {
                        title: "6부. 관계의 완성",
                        desc: "오래 가는 사랑의 구조"
                      },
                      {
                        title: "7부. 주체적 관계",
                        desc: "선택과 졸업"
                      },
                      {
                        title: "에필로그",
                        desc: "사랑을 얻으려 하지 말고, 사랑이 머무를 자리가 되어라"
                      }
                    ].map((item, idx) => (
                      <div 
                        key={idx} 
                        className="flex gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-colors"
                      >
                        <div className="w-12 h-12 rounded-lg bg-[#BA8D7E]/10 border border-[#D4B2A7]/20 flex items-center justify-center shrink-0 text-xs font-bold font-serif text-[#D4B2A7]">
                          {idx === 0 ? "Prologue" : idx === 8 ? "Epilogue" : `${idx}부`}
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

            <ChampagneThreadDivider />

            {/* 7. Digital Product Notice Section (구매 전 안내) */}
            <section className="mb-28">
              <Reveal>
                <div className="gungjung-glass p-8 md:p-12 border-white/5 text-left max-w-6xl mx-auto break-keep">
                  <h2 className="text-2xl font-elegant font-bold mb-10 text-white border-l-4 border-[#D4B2A7] pl-6">
                    구매 전 안내
                  </h2>
                  <ul className="space-y-4 text-xs md:text-sm text-[#EDE6DA]/60 font-light">
                    {[
                      "본 상품은 실물 배송이 없는 디지털 전자책(PDF 파일) 상품입니다.",
                      "결제 완료 후 안내된 방식(마이페이지 또는 가입하신 이메일)에 따라 즉시 콘텐츠를 다운로드해 확인하실 수 있습니다.",
                      "디지털 콘텐츠의 특성상 파일이 다운로드되거나 메일로 발송된 이후에는 단순 변심에 의한 환불이 제한될 수 있습니다.",
                      "본 콘텐츠에 소개된 정보는 개인의 연애 환경 및 상황에 따라 적용 방식과 체감 결과가 다를 수 있습니다.",
                      "본 콘텐츠는 심리적·관계적 이해를 돕기 위한 자기계발 성격의 서적이며, 의학적·법률적 진단이나 전문 상담 치료를 대체하지 않습니다.",
                      "특정 결과나 관계의 강제적인 회복, 또는 상대방의 특정 반응을 무조건적으로 보장하지 않습니다.",
                      "건강하고 상호 존중받는 관계 속에서 스스로의 주체성을 기르기 위해 전자책의 지침을 적용해 주시기 바랍니다.",
                      "자세한 취소/환불 기준은 하단의 이용약관 및 환불정책을 참고해 주시기 바랍니다."
                    ].map((text, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#D4B2A7] shrink-0"></span>
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </section>

            {/* 8. Final CTA Section */}
            <section className="relative aspect-[16/9] md:aspect-video overflow-hidden rounded-[40px] mb-20 group border border-[#D4B2A7]/40 shadow-2xl">
              {/* l6.webp 배경 */}
              <div className="absolute inset-0 z-0">
                <Image 
                  src={productData.ctaImage} 
                  alt="연애비급 마지막 안내 배경" 
                  fill 
                  className="object-cover transition-transform duration-[10000ms] group-hover:scale-110" 
                />
                {/* 텍스트 가독성을 위한 로즈브라운 반투명 오버레이 필터 */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0514] via-[#4A232B]/75 to-black/80 mix-blend-multiply" />
                <div className="absolute inset-0 bg-[#0a0514]/30" />
              </div>

              {/* 중앙 정보 및 CTA 버튼 */}
              <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 md:px-10 text-center max-w-5xl mx-auto space-y-6 md:space-y-8 break-keep">
                <Reveal>
                  <h2 className="text-2xl md:text-4xl font-elegant font-bold text-white leading-tight">
                    이제 사랑 앞에서 작아지지 마세요
                  </h2>
                  <p className="text-sm md:text-base text-[#EDE6DA]/85 leading-relaxed font-light max-w-xl mx-auto">
                    사랑은 더 많이 애쓴 사람에게 주어지는 보상이 아니라, 자기 자리를 잃지 않는 사람에게 오래 머무는 에너지입니다. 불안하게 확인하고 맞춰주는 연애에서 벗어나 나의 기준과 매력을 회복해 보세요.
                  </p>
                  
                  <div className="pt-4">
                    <CTAButton text="연애비급 구매하기" />
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
