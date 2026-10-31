'use client'

import React, { useState } from 'react'
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
  ChevronRight,
  ChevronDown,
  AlertTriangle,
  Sparkles,
  Clock,
  CheckCircle2,
  ImageIcon
} from 'lucide-react'
import RecommendedForCards from '@/components/RecommendedForCards'
import { reunionSecretAssets } from './assets'

// ═══════════════════════════════════════════════════════════════════════════
// 📦 상품 기본 정보 및 결제 연동 설정
// ═══════════════════════════════════════════════════════════════════════════
const productData = {
  productId: 'reunion-secret-method',
  slug: 'reunion-secret-method',
  title: '재회비방',
  type: 'digital_ebook',
  checkoutUrl: '/checkout?productId=reunion-secret-method',
  price: 19000,

  heroImage: '/image/reunion-secret/r1.webp',
  overviewImage: '/image/reunion-secret/r2.webp',
  recommendedImage: '/image/reunion-secret/r3.webp',
  formulaImage: '/image/reunion-secret/r4.webp',
  premiumImage: '/image/reunion-secret/r5.webp',
  ctaImage: '/image/reunion-secret/r6.webp',
}

// 🖼️ 신규 교체형 이미지 슬롯 컴포넌트
// (샴페인 골드 #E6BE8A / #C5A059 테두리와 깊은 버건디 배경의 고급 플레이스홀더 제공)
function HybridImageSlot({
  assetKey,
  className = '',
  imgClassName = '',
}: {
  assetKey: keyof typeof reunionSecretAssets
  className?: string
  imgClassName?: string
}) {
  const asset = reunionSecretAssets[assetKey]
  const [hasError, setHasError] = useState(false)
  const isPlaceholderPath = !asset.src || asset.src.includes('placeholder')

  return (
    <div className={`relative overflow-hidden rounded-2xl md:rounded-3xl border border-[#C5A059]/40 bg-gradient-to-br from-[#1C040B] via-[#100206] to-[#0A0205] shadow-xl flex items-center justify-center ${asset.aspectRatio} ${className}`}>
      {!hasError && !isPlaceholderPath ? (
        <img
          src={asset.src}
          alt={asset.alt}
          onError={() => setHasError(true)}
          style={{ objectFit: asset.objectFit }}
          className={`w-full h-full transition-transform duration-500 hover:scale-[1.02] ${imgClassName}`}
        />
      ) : (
        <div className="flex flex-col items-center justify-center p-6 text-center space-y-3 z-10 w-full h-full bg-[#180309]/80 backdrop-blur-sm border border-[#C5A059]/25">
          <div className="w-12 h-12 rounded-full bg-[#600018]/70 border border-[#E6BE8A]/50 flex items-center justify-center text-[#E6BE8A] shadow-[0_0_15px_rgba(230,190,138,0.25)]">
            <ImageIcon className="w-6 h-6 opacity-90" />
          </div>
          <div>
            <span className="inline-block px-3 py-0.5 rounded-full text-[10px] tracking-wider uppercase font-bold text-[#E6BE8A] bg-[#600018]/50 border border-[#E6BE8A]/30 mb-2">
              {asset.placeholderLabel}
            </span>
            <p className="text-sm md:text-base font-elegant font-bold text-[#FAF7F2] break-keep">
              {asset.alt}
            </p>
          </div>
          <span className="text-[11px] text-[#E6BE8A]/80 font-mono bg-black/50 px-3 py-1 rounded border border-[#C5A059]/30">
            {asset.description}
          </span>
        </div>
      )}
    </div>
  )
}

export default function ReunionSecretPage() {
  useScrollAnimation()
  const router = useRouter()

  // FAQ 아코디언 상태 관리 (첫 번째 질문 기본 오픈)
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  // 구매 버튼 클릭 핸들러 (기존 결제 흐름 동일 유지)
  const handlePurchase = (e: React.MouseEvent) => {
    e.preventDefault()
    router.push(productData.checkoutUrl)
  }

  // 장바구니 추가 핸들러 (기존 동일 유지)
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    addToCart({
      id: productData.productId,
      slug: productData.slug,
      name: productData.title + ' 전자책',
      price: productData.price,
      image: productData.heroImage,
      type: productData.type,
      category: 'SECRET METHOD'
    }, 1)
    alert("장바구니에 담았습니다.")
  }

  // 백도화 전통 붉은 실 장식 구분선 (샴페인 골드 포인트)
  const RedThreadDivider = () => (
    <div className="flex items-center justify-center my-20 md:my-28 opacity-70">
      <div className="h-[1px] w-16 md:w-32 bg-gradient-to-r from-transparent via-[#E6BE8A]/40 to-[#8C1D24]" />
      <div className="mx-4 flex items-center justify-center">
        <svg className="w-5 h-5 text-[#E6BE8A] animate-pulse" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C9.5 2 7.5 4 7.5 6.5C7.5 9 10 11 12 13C14 11 16.5 9 16.5 6.5C16.5 4 14.5 2 12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 13V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="12" cy="6.5" r="2" fill="currentColor" />
        </svg>
      </div>
      <div className="h-[1px] w-16 md:w-32 bg-gradient-to-l from-transparent via-[#E6BE8A]/40 to-[#8C1D24]" />
    </div>
  )

  // 공통 CTA 버튼 그룹 (기존 스타일 및 샴페인 골드 핸들러 재사용)
  const CTAButton = ({ text }: { text: string }) => (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center my-6 max-w-md mx-auto w-full">
      <button
        onClick={handleAddToCart}
        className="flex-1 py-4.5 rounded-xl font-elegant font-bold text-base hover:scale-[1.02] active:scale-95 transition-all duration-300 border border-[#E6BE8A]/40 text-[#E6BE8A] hover:bg-[#E6BE8A]/10 bg-transparent w-full"
      >
        장바구니 담기
      </button>
      <button
        onClick={handlePurchase}
        className="flex-grow-[1.5] py-4.5 rounded-xl font-elegant font-bold text-base hover:scale-[1.02] active:scale-95 transition-all duration-500 flex items-center justify-center gap-2 text-[#FAF7F2] w-full shadow-[0_0_35px_rgba(74,14,23,0.35)]"
        style={{
          background: 'linear-gradient(135deg, #600018 0%, #2A0A14 100%)',
          border: '1px solid rgba(230, 190, 138, 0.55)',
        }}
      >
        {text}
        <ChevronRight className="w-5 h-5 text-[#FAF7F2]" />
      </button>
    </div>
  )

  return (
    <main className="detail-page relative min-h-screen bg-[#0a0514] text-[#EDE6DA] font-sans selection:bg-[#4A0E17] selection:text-[#FAF7F2]">
      {/* ═════════════════════════════════════════════════════════════════
          ① 기존 헤더·내비게이션 (원본 그대로 유지)
      ═════════════════════════════════════════════════════════════════ */}
      <GlobalBackground src="/image/love-code-bg.png" brightCenter={false}>
        <Navigation />

        <div className="relative z-10 pt-44 pb-20">
          {/* 기존의 넓은 1440px 와이드 컨테이너 시스템 복원 */}
          <div className="container-premium">
            
            {/* ═════════════════════════════════════════════════════════════════
                ② 기존 Hero 확장 (기존 제목/소개/이미지/구매버튼 + Section 1 신규 기획 추가)
            ═════════════════════════════════════════════════════════════════ */}
            <section className="text-center mb-28">
              <Reveal delayMs={100}>
                {/* [기존 Hero 보존 영역] */}
                <div className="mb-8">
                  <span className="inline-block px-5 py-1.5 rounded-full text-[10px] md:text-xs font-bold tracking-[0.25em] text-[#E6BE8A] uppercase"
                    style={{
                      background: 'rgba(74, 14, 23, 0.4)',
                      border: '1px solid rgba(230, 190, 138, 0.3)',
                    }}>
                    PREMIUM REUNION STRATEGY EBOOK
                  </span>
                </div>

                <h1 className="text-3xl md:text-5xl font-elegant font-bold mb-10 text-white leading-tight">
                  再會秘方 <span className="text-[#E6BE8A]">재회비방</span>
                </h1>

                {/* 큰 이미지 배치 (기존 r1.webp, 16:9 비율) */}
                <div className="relative max-w-6xl mx-auto aspect-video mb-16 rounded-[30px] md:rounded-[40px] overflow-hidden border border-white/10 shadow-2xl group">
                  <Image 
                    src={productData.heroImage} 
                    alt="재회비방"
                    fill
                    className="object-cover transition-transform duration-[10000ms] group-hover:scale-110"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0514]/60 to-transparent"></div>
                </div>

                {/* 기존 하단 서브카피, 설명 및 구매 버튼 보존 */}
                <div className="max-w-3xl mx-auto space-y-6 mb-20">
                  <p className="text-xl md:text-2xl font-elegant font-semibold text-[#BA8D7E] leading-snug break-keep">
                    끊어진 인연 앞에서 무너진 나를 다시 세우는 재회 비방서
                  </p>

                  <div className="text-sm md:text-base text-[#EDE6DA]/75 leading-relaxed space-y-3 pt-6 border-t border-white/5 break-keep">
                    <p>
                      재회비방은 헤어진 상대에게 무작정 연락하는 방법을 알려주는 책이 아닙니다.
                    </p>
                    <p>
                      이별 후 무너진 감정, 흐트러진 프레임, 반복되는 집착의 패턴을 정리하고 다시 나의 중심을 회복하기 위한<br />
                      실전 재회 전략 전자책입니다.
                    </p>
                    <p className="font-semibold text-white">
                      재회는 감정만으로 이루어지지 않습니다. 상태가 바뀌어야 흐름이 바뀝니다.
                    </p>
                  </div>

                  <div className="pt-4">
                    <CTAButton text="재회비방 구매하기" />
                  </div>
                </div>

                {/* ─── [신규 Section 1: Hero Banner 패키지 확장 통합] ─── */}
                <div className="max-w-6xl mx-auto p-8 md:p-14 rounded-3xl bg-gradient-to-b from-[#2D0610]/95 via-[#1E040B]/90 to-[#0A0514] border border-[#C5A059]/40 shadow-[0_0_45px_rgba(96,0,24,0.4)] mt-12 text-center break-keep">
                  {/* 핵심 배지 */}
                  <div className="flex flex-wrap items-center justify-center gap-2.5 mb-6">
                    <span className="inline-block px-4 py-1.5 rounded-full text-xs md:text-sm font-bold tracking-wider text-[#E6BE8A] bg-[#600018]/70 border border-[#E6BE8A]/50 shadow-md">
                      [본편+실전부록 2종+디지털부적 4 in 1 패키지]
                    </span>
                    <span className="inline-block px-4 py-1.5 rounded-full text-xs md:text-sm font-bold tracking-wider text-[#FAF7F2] bg-[#2A0510] border border-[#C5A059]/35">
                      [복사·붙여넣기 템플릿 33선]
                    </span>
                  </div>

                  {/* 헤드카피 */}
                  <h2 className="text-2xl sm:text-3xl md:text-5xl font-elegant font-bold text-[#FAF7F2] mb-6 leading-tight">
                    간절함은 닿지 않는다. 닿는 것은 오직 네가 되찾은 <span className="text-[#E6BE8A]">'상태'</span>뿐이다.
                  </h2>

                  {/* 이미지 교체 영역 1: 패키지 전체 목업 */}
                  <div className="max-w-5xl mx-auto my-8">
                    <HybridImageSlot
                      assetKey="hero"
                      className="hero-image aspect-video"
                    />
                  </div>

                  {/* 서브카피 */}
                  <p className="text-base sm:text-lg md:text-xl text-[#EDE6DA]/90 leading-relaxed font-light max-w-3xl mx-auto mb-8">
                    울며 매달릴수록 남자는 도망칩니다. 남자의 무의식 신경회로에 서늘한 후폭풍을 심는 유일한 비방(秘方). 차단, 읽씹, 환승 이별... 상대의 뇌 속에 각인된 찌질한 잔상을 지우고 <span className="text-[#E6BE8A] font-semibold">'칼자루'를 쥐는 30일간의 신경심리학적 공작</span>.
                  </p>

                  {/* 가격 앵커링 */}
                  <div className="p-4 md:p-6 rounded-2xl bg-[#1A040B]/80 border border-[#C5A059]/35 inline-flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-6 my-2 shadow-inner">
                    <div className="flex items-center gap-2 text-sm md:text-base text-[#EDE6DA]/60">
                      <span>정가</span>
                      <span className="line-through text-red-300/60 font-mono">79,000원</span>
                    </div>
                    <div className="text-xl md:text-3xl font-elegant font-bold text-[#FAF7F2] flex items-center gap-3">
                      <span className="text-[#E6BE8A] text-sm md:text-base px-2 py-0.5 rounded bg-[#600018] border border-[#E6BE8A]/40 font-mono">
                        76% OFF
                      </span>
                      <span>패키지 런칭 특가 <span className="text-[#E6BE8A] font-extrabold text-2xl md:text-4xl">19,000원</span></span>
                    </div>
                  </div>

                  {/* CTA 버튼 */}
                  <div className="pt-4 max-w-md mx-auto">
                    <button
                      onClick={handlePurchase}
                      className="w-full py-4.5 px-6 rounded-xl font-elegant font-bold text-base md:text-lg flex items-center justify-center gap-2 text-[#FAF7F2] transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-[0_0_30px_rgba(96,0,24,0.55)] hover:shadow-[0_0_40px_rgba(230,190,138,0.4)]"
                      style={{
                        background: 'linear-gradient(135deg, #600018 0%, #3A030E 100%)',
                        border: '1px solid rgba(230, 190, 138, 0.65)'
                      }}
                    >
                      <span>지금 19,000원에 칼자루 쥐기</span>
                      <ChevronRight className="w-5 h-5 text-[#E6BE8A]" />
                    </button>
                  </div>
                </div>
              </Reveal>
            </section>

            <RedThreadDivider />

            {/* ═════════════════════════════════════════════════════════════════
                ③ 기존 “붙잡는 법이 아니라…” 소개 (원본 그대로 유지, 와이드 1440px)
            ═════════════════════════════════════════════════════════════════ */}
            <section className="mb-28">
              <Reveal>
                <div className="grid lg:grid-cols-2 gap-16 xl:gap-20 items-center">
                  <div className="relative w-full aspect-square overflow-hidden rounded-[40px] border border-[#C5A059]/30 shadow-2xl">
                    <Image 
                      src={productData.overviewImage} 
                      alt="전자책 목업" 
                      fill 
                      className="object-cover" 
                    />
                  </div>

                  <div className="space-y-6 text-left break-keep">
                    <h2 className="text-2xl md:text-3xl font-elegant font-bold text-white leading-snug">
                      붙잡는 법이 아니라,<br/>
                      <span className="text-[#E6BE8A]">다시 선택받을 수 있는 상태</span>로 돌아오는 법
                    </h2>
                    <p className="text-sm md:text-base text-[#EDE6DA]/75 leading-relaxed font-light">
                      재회비방은 이별 후 가장 불안한 시기에 무엇을 멈추고, 무엇을 정리하고, 어떤 순서로 다시 움직여야 하는지를 알려주는 프리미엄 재회 전략 전자책입니다. 상대를 억지로 붙잡기 전에 먼저 나의 감정, 프레임, 연락 패턴, 공백기 전략을 차분하게 점검하도록 구성되어 있습니다.
                    </p>

                    <div className="grid grid-cols-2 gap-4 pt-4">
                      {[
                        "이별 원인 진단",
                        "공백기 전략 정리",
                        "연락 타이밍 점검",
                        "집착 패턴 정리",
                        "재회 가능성 흐름 파악",
                        "재회 이후 관계 재설계"
                      ].map((item, idx) => (
                        <div 
                          key={idx}
                          className="gungjung-glass p-4 border-[#C5A059]/20 flex items-center gap-3 hover:border-[#C5A059]/50 transition-all"
                        >
                          <div className="w-6 h-6 rounded-full bg-[#4A0E17]/60 flex items-center justify-center shrink-0 border border-[#C5A059]/30">
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

            <RedThreadDivider />

            {/* ═════════════════════════════════════════════════════════════════
                ④ 신규 Section 2: 문제 진단 (Pain Point & Hook)
            ═════════════════════════════════════════════════════════════════ */}
            <section className="mb-28 max-w-6xl mx-auto">
              <Reveal>
                <div className="text-center max-w-3xl mx-auto mb-14">
                  <span className="text-[#E6BE8A] font-elegant tracking-[0.25em] text-xs uppercase font-bold">
                    PAIN POINT & HOOK
                  </span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-elegant font-bold text-[#FAF7F2] mt-3 leading-snug break-keep">
                    당신의 진심이 왜 상대에게는 '공포'와 '질림'이 되었을까?
                  </h2>
                </div>

                <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                  {/* 왼쪽 본문 (팩트 폭격 + 자가진단 체크리스트) */}
                  <div className="lg:col-span-7 space-y-6 text-left break-keep">
                    <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-[#1C050D] to-[#0D0206] border-l-4 border-l-[#600018] border border-[#C5A059]/25 shadow-lg">
                      <p className="text-base md:text-lg text-[#EDE6DA] leading-relaxed font-light">
                        맛이 변해 손님이 끊긴 라면집 주인이 떠나는 손님 바짓가랑이를 붙잡고 울면 손님은 더 빨리 도망칩니다. 남자는 이별 직후 '해방감'이라는 가짜 도파민에 취합니다. 당신이 매달릴수록 남자는 '헤어지길 잘했다'는 면죄부를 얻고 안도합니다. 그 면죄부를 즉시 빼앗고 지독한 '결핍의 공황'에 빠뜨려야 합니다.
                      </p>
                    </div>

                    <div className="pt-2">
                      <h3 className="text-base md:text-lg font-elegant font-bold text-[#E6BE8A] mb-4 flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5 text-[#E6BE8A]" />
                        <span>자가진단 체크리스트</span>
                      </h3>
                      
                      <div className="space-y-3">
                        {[
                          "상대의 카톡 프로필 사진 하나 바뀔 때마다 심장이 쿵 내려앉는다.",
                          "장문의 진심을 보냈다가 차갑게 '읽씹' 혹은 '차단' 당했다.",
                          "\"친구로 지내자\", \"더 좋은 사람 만나\"라는 말에 피가 마른다."
                        ].map((checkItem, idx) => (
                          <div 
                            key={idx}
                            className="p-4 rounded-xl bg-[#FAF9F6] text-[#20050E] flex items-start gap-3 shadow-md border border-[#C5A059]/35 transition-transform hover:-translate-y-0.5"
                          >
                            <div className="w-6 h-6 rounded-md bg-[#600018] text-[#FAF7F2] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                              <Check className="w-4 h-4 text-[#E6BE8A] stroke-[3]" />
                            </div>
                            <span className="text-sm md:text-base font-semibold leading-relaxed">
                              {checkItem}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* 오른쪽 이미지 교체 영역 2: 카톡 차단 화면 */}
                  <div className="lg:col-span-5">
                    <HybridImageSlot
                      assetKey="pain"
                      className="aspect-[4/5]"
                    />
                  </div>
                </div>
              </Reveal>
            </section>

            <RedThreadDivider />

            {/* ═════════════════════════════════════════════════════════════════
                ⑤ 기존 “이런 분께 추천합니다” (원본 1440px 와이드 레이아웃 복원 - 베이지 카드 1줄 구현)
            ═════════════════════════════════════════════════════════════════ */}
            <section className="mb-28">
              <Reveal>
                <div className="grid lg:grid-cols-[1.15fr_0.85fr] xl:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 xl:gap-20 items-center">
                  <div className="space-y-8 text-left break-keep">
                    <h2 className="text-2xl md:text-3xl font-elegant font-bold text-white tracking-wide">
                      이런 분께 <span className="text-[#E6BE8A]">추천합니다</span>
                    </h2>

                    {/* 충분한 가로폭이 확보되어 베이지 카드의 문장이 한 줄로 여유롭게 배치됩니다 */}
                    <RecommendedForCards 
                      items={[
                        "이별 후 상대에게 연락하고 싶지만 어떤 말을 해야 할지 몰라 불안한 분",
                        "상대가 차단했거나 읽씹, 안읽씹을 반복해 어떻게 해야 할지 막막한 분",
                        "지금 연락해야 하는지, 더 기다려야 하는지 판단이 어려운 분",
                        "권태기, 반복 다툼, 집착, 신뢰 상실, 환승 의심 등 이별 원인을 제대로 진단하고 싶은 분",
                        "재회를 원하지만 예전처럼 매달리는 내가 되고 싶지는 않은 분",
                        "상대를 되찾기 전에 먼저 무너진 나의 중심을 되찾고 싶은 분"
                      ]} 
                    />
                  </div>

                  <div className="relative w-full aspect-[3/4] overflow-hidden rounded-[40px] border border-white/10 shadow-2xl">
                    <Image 
                      src={productData.recommendedImage} 
                      alt="Recommended" 
                      fill 
                      className="object-cover" 
                    />
                  </div>
                </div>
              </Reveal>
            </section>

            <RedThreadDivider />

            {/* ═════════════════════════════════════════════════════════════════
                ⑥ 신규 Section 3: 핵심 원리 (Solution)
            ═════════════════════════════════════════════════════════════════ */}
            <section className="mb-28 text-center max-w-6xl mx-auto">
              <Reveal>
                <div className="max-w-3xl mx-auto mb-14 space-y-3">
                  <span className="text-[#E6BE8A] font-elegant tracking-[0.25em] text-xs uppercase font-bold">
                    SOLUTION
                  </span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-elegant font-bold text-[#FAF7F2] leading-tight break-keep">
                    재회는 설득이 아닙니다. 상대의 뇌간을 강제로 흔드는 '신경심리학'입니다.
                  </h2>
                </div>

                {/* 4 그리드 카드 레이아웃 */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
                  {[
                    {
                      title: "대침묵",
                      desc: "값싸게 퍼주던 관심의 공급을 끊어 결핍과 손실 회피 공황 점화"
                    },
                    {
                      title: "자이가르닉 효과",
                      desc: "완결된 사과가 아닌 미완성의 찝찝함을 남겨 밤마다 곱씹게 만드는 기술"
                    },
                    {
                      title: "인지 부조화",
                      desc: "찌질함을 부수고 세련된 프레임으로 뇌 내 도파민 역주행"
                    },
                    {
                      title: "인셉션 메시지",
                      desc: "감정 배출이 아닌 상대 무의식에 침투하는 단 한 줄의 트리거"
                    }
                  ].map((card, idx) => (
                    <div 
                      key={idx}
                      className="relative p-6 md:p-8 rounded-2xl bg-gradient-to-b from-[#1C050D]/90 to-[#0F0206] border border-[#C5A059]/30 hover:border-[#E6BE8A] transition-all duration-300 hover:-translate-y-1 shadow-xl flex flex-col justify-between"
                    >
                      <div>
                        <span className="font-mono text-xs font-bold text-[#E6BE8A] tracking-widest px-2.5 py-1 rounded bg-[#600018]/60 border border-[#E6BE8A]/30 inline-block mb-4">
                          CARD 0{idx + 1}
                        </span>
                        <h3 className="text-xl font-elegant font-bold text-[#FAF7F2] mb-3">
                          {card.title}
                        </h3>
                        <p className="text-sm text-[#EDE6DA]/75 leading-relaxed font-light break-keep">
                          {card.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </section>

            <RedThreadDivider />

            {/* ═════════════════════════════════════════════════════════════════
                ⑦ 기존 “재회비방 5단계 흐름” (원본 그대로 유지)
            ═════════════════════════════════════════════════════════════════ */}
            <section className="mb-28 text-center">
              <Reveal>
                <div className="max-w-4xl mx-auto space-y-4 mb-10">
                  <span className="text-[#E6BE8A] font-elegant tracking-[0.2em] text-xs uppercase">5-Step Strategy</span>
                  <h2 className="text-3xl md:text-4xl font-elegant font-bold text-white tracking-widest">
                    재회비방 5단계 흐름
                  </h2>
                  <p className="text-sm md:text-base text-[#EDE6DA]/75 leading-relaxed break-keep font-light max-w-2xl mx-auto">
                    재회비방은 감정적으로 흔들리는 상태에서 무작정 연락을 시도하지 않도록, 이별 후 필요한 과정을 5단계 흐름으로 정리합니다. 상대의 마음을 단정하거나 조종하려는 방식이 아니라, 나의 상태를 회복하고 관계의 구조를 다시 바라보는 방식으로 구성되어 있습니다.
                  </p>
                </div>

                <div className="max-w-6xl mx-auto mb-12">
                  <div className="relative aspect-video rounded-[30px] overflow-hidden border border-white/10 shadow-xl group">
                    <Image 
                      src={productData.formulaImage} 
                      alt="재회비방 5단계 인포그래픽" 
                      fill 
                      className="object-cover" 
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-5 gap-4 text-left max-w-6xl mx-auto">
                  {[
                    {
                      num: "1",
                      title: "파동의 진단",
                      desc: "왜 이별이 일어났는지 진단합니다. 권태기, 신뢰 상실, 집착, 현실적 문제 등 원인에 따라 재회 전략은 달라집니다."
                    },
                    {
                      num: "2",
                      title: "비방의 준비",
                      desc: "가장 어려운 공백기와 침묵을 다룹니다. 아무것도 하지 않는 것이 아니라, 다시 나의 프레임을 온전히 세우는 시간입니다."
                    },
                    {
                      num: "3",
                      title: "실전 재회술",
                      desc: "언제, 어떤 방식으로, 어떤 메시지를 보내야 하는지 정리합니다. 상대에게 부담이 아닌 여운을 남기는 접근법입니다."
                    },
                    {
                      num: "4",
                      title: "재회의 완성",
                      desc: "다시 만났을 때 무너지지 않는 태도, 첫 대면의 기류, 상대가 던지는 무의식적 테스트를 슬기롭게 통과하는 법을 정리합니다."
                    },
                    {
                      num: "5",
                      title: "완성된 나",
                      desc: "재회 이후에도 같은 문제를 반복하지 않기 위해, 나의 내면 감정과 관계 패턴을 단단하게 재설계합니다."
                    }
                  ].map((item, idx) => (
                    <div 
                      key={idx} 
                      className="gungjung-glass p-5 border-[#C5A059]/20 flex flex-col justify-between hover:border-[#C5A059]/50 transition-all"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="font-serif text-xs font-bold bg-[#4A0E17] text-[#FAF7F2] px-2.5 py-0.5 rounded border border-[#C5A059]/30">
                            {item.num}단계
                          </span>
                        </div>
                        <h3 className="text-base md:text-lg font-elegant font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-xs md:text-sm text-[#EDE6DA]/60 leading-relaxed font-light break-keep">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </section>

            <RedThreadDivider />

            {/* ═════════════════════════════════════════════════════════════════
                ⑧ 기존 “실전 재회 노트” (원본 그대로 유지, 와이드 1440px)
            ═════════════════════════════════════════════════════════════════ */}
            <section className="mb-28">
              <Reveal>
                <div className="grid lg:grid-cols-2 gap-16 xl:gap-20 items-center">
                  <div className="relative w-full aspect-[4/5] overflow-hidden rounded-[40px] border border-white/10 shadow-2xl">
                    <Image 
                      src={productData.premiumImage} 
                      alt="실전 재회 노트 번들" 
                      fill 
                      className="object-cover" 
                    />
                  </div>

                  <div className="space-y-6 text-left break-keep">
                    <div>
                      <span className="text-[#E6BE8A] font-elegant tracking-[0.2em] text-xs uppercase">Workbook Included</span>
                      <h2 className="text-2xl md:text-3xl font-elegant font-bold text-white mt-1 leading-snug">
                        읽고 끝나는 책이 아니라,<br/>
                        <span className="text-[#E6BE8A]">점검하고 적용하는 실전 재회 노트</span>
                      </h2>
                    </div>
                    
                    <p className="text-sm md:text-base text-[#EDE6DA]/75 leading-relaxed font-light">
                      재회비방은 단순한 연애 조언 모음이 아닙니다. 이별 유형, 공백기, 문자 흐름, 돌발 상황, 재회 이후 관계 선언까지 직접 진단하고 내 상황에 바로 적용할 수 있는 실전 도구를 담았습니다.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                      {[
                        "이별 유형별 골든 타이밍",
                        "재회 전략 전체 흐름도",
                        "재회를 부르는 멘탈 관리 확언",
                        "돌발 상황 대처 매뉴얼",
                        "상황별 문자 스크립트 완전판",
                        "공백기 골든 타이밍표",
                        "30일 황금기 실전 체크리스트",
                        "재회 가능성 자가진단표",
                        "재회 후 관계 선언문"
                      ].map((item, idx) => (
                        <div 
                          key={idx} 
                          className="flex items-center gap-3 p-3 bg-[#FAF7F2] rounded-xl border border-[#C5A059]/25 hover:border-[#8C1D24]/40 transition-colors"
                        >
                          <Check className="w-4 h-4 text-[#8C1D24] shrink-0" />
                          <span className="text-xs md:text-sm text-[#3D3530] font-semibold">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4">
                      <CTAButton text="실전 부록과 함께 받기" />
                    </div>
                  </div>
                </div>
              </Reveal>
            </section>

            <RedThreadDivider />

            {/* ═════════════════════════════════════════════════════════════════
                ⑨ 신규 Section 4: 패키지 구성 (Product Showcase 상세 해부 확장)
            ═════════════════════════════════════════════════════════════════ */}
            <section className="mb-28 max-w-6xl mx-auto">
              <Reveal>
                <div className="text-center max-w-3xl mx-auto mb-14">
                  <span className="text-[#E6BE8A] font-elegant tracking-[0.25em] text-xs uppercase font-bold">
                    PRODUCT SHOWCASE
                  </span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-elegant font-bold text-[#FAF7F2] mt-3 leading-snug break-keep">
                    재회비방 3종 올인원 패키지 상세 해부
                  </h2>
                  <div className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#600018]/50 border border-[#E6BE8A]/40 text-xs md:text-sm text-[#E6BE8A] font-semibold">
                    <span>전자책 3종(3종 패키지) + 디지털 부적 = 4 in 1 구성</span>
                  </div>
                </div>

                <div className="space-y-10">
                  {/* Book 1. [본편] 《재회비방(再會秘方) 완전판》 */}
                  <div className="p-6 md:p-10 lg:p-12 rounded-3xl bg-gradient-to-r from-[#1E040D] via-[#140207] to-[#0A0205] border border-[#C5A059]/40 shadow-2xl grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                    <div className="lg:col-span-5 flex justify-center">
                      <div className="w-full max-w-[340px] lg:max-w-none">
                        <HybridImageSlot
                          assetKey="book1"
                          className="aspect-[3/4] shadow-2xl"
                        />
                      </div>
                    </div>
                    <div className="lg:col-span-7 space-y-5 text-left break-keep">
                      <div className="inline-block px-3.5 py-1 rounded-full bg-[#600018] text-[#E6BE8A] text-xs font-bold border border-[#E6BE8A]/40 tracking-wider">
                        Book 1. [본편]
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-elegant font-bold text-[#FAF7F2] leading-tight">
                        《재회비방(再會秘方) 완전판》
                      </h3>
                      <p className="text-base md:text-lg text-[#E6BE8A] font-semibold leading-relaxed">
                        끊어진 인연을 다시 잇는 무의식의 붉은 실
                      </p>

                      {/* 핵심 내용 목록 ①~⑤ */}
                      <div className="space-y-3.5 pt-2">
                        <div className="p-4 rounded-xl bg-black/40 border border-[#C5A059]/25 space-y-1">
                          <h4 className="text-sm md:text-base font-bold text-[#FAF7F2] flex items-start gap-2">
                            <span className="text-[#E6BE8A] shrink-0 font-mono">①</span>
                            <span>내 이별의 진짜 원인 진단</span>
                          </h4>
                          <p className="text-xs md:text-sm text-[#EDE6DA]/80 pl-5 leading-relaxed font-light">
                            가치 하락형(매력 저하) vs 신뢰감 하락형(피로/싸움) 구분 및 8가지 케이스별 완전 처방
                          </p>
                        </div>

                        <div className="p-4 rounded-xl bg-black/40 border border-[#C5A059]/25 space-y-1">
                          <h4 className="text-sm md:text-base font-bold text-[#FAF7F2] flex items-start gap-2">
                            <span className="text-[#E6BE8A] shrink-0 font-mono">②</span>
                            <span>연애 기간·상대 성향별 공백기 황금 공식</span>
                          </h4>
                          <p className="text-xs md:text-sm text-[#EDE6DA]/80 pl-5 leading-relaxed font-light">
                            3일 단기 트랙부터 6개월 장기 트랙까지 오차 없는 타이밍 계산법
                          </p>
                        </div>

                        <div className="p-4 rounded-xl bg-black/40 border border-[#C5A059]/25">
                          <h4 className="text-sm md:text-base font-bold text-[#FAF7F2] flex items-start gap-2">
                            <span className="text-[#E6BE8A] shrink-0 font-mono">③</span>
                            <span>이별 패턴을 읽는 선천코드 5행(목·화·토·금·수) 분석법</span>
                          </h4>
                        </div>

                        <div className="p-4 rounded-xl bg-black/40 border border-[#C5A059]/25">
                          <h4 className="text-sm md:text-base font-bold text-[#FAF7F2] flex items-start gap-2">
                            <span className="text-[#E6BE8A] shrink-0 font-mono">④</span>
                            <span>상대 무의식을 뒤흔드는 7대 절대 심리 비방</span>
                          </h4>
                        </div>

                        <div className="p-4 rounded-xl bg-gradient-to-r from-[#3B0A16]/50 to-[#1F050B]/50 border border-[#E6BE8A]/35 space-y-2">
                          <h4 className="text-sm md:text-base font-bold text-[#FAF7F2] flex items-start gap-2">
                            <span className="text-[#E6BE8A] shrink-0 font-mono">⑤</span>
                            <span>조건부 재회의 법칙</span>
                          </h4>
                          <div className="p-3 rounded-lg bg-black/50 border border-[#E6BE8A]/30">
                            <p className="text-xs md:text-sm font-elegant font-bold text-[#E6BE8A]">
                              "너는 세일 상품이 아니다. 정가(正價)를 치르게 하라"
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Book 2. [실전 부록 1] 《재회 역전의 법칙: 30일 실전 행동 매뉴얼》 */}
                  <div className="p-6 md:p-10 lg:p-12 rounded-3xl bg-gradient-to-r from-[#1E040D] via-[#140207] to-[#0A0205] border border-[#C5A059]/40 shadow-2xl grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                    <div className="lg:col-span-5 flex justify-center order-last lg:order-first">
                      <div className="w-full max-w-[340px] lg:max-w-none">
                        <HybridImageSlot
                          assetKey="book2"
                          className="aspect-[3/4] shadow-2xl"
                        />
                      </div>
                    </div>
                    <div className="lg:col-span-7 space-y-5 text-left break-keep">
                      <div className="inline-block px-3.5 py-1 rounded-full bg-[#600018] text-[#E6BE8A] text-xs font-bold border border-[#E6BE8A]/40 tracking-wider">
                        Book 2. [실전 부록 1]
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-elegant font-bold text-[#FAF7F2] leading-tight">
                        《재회 역전의 법칙: 30일 실전 행동 매뉴얼》
                      </h3>
                      <p className="text-base md:text-lg text-[#E6BE8A] font-semibold leading-relaxed">
                        카톡·SNS 연출부터 30일 공백기 설계까지, 주도권을 되찾는 매뉴얼
                      </p>

                      {/* 핵심 내용 목록 ①~⑤ */}
                      <div className="space-y-3.5 pt-2">
                        <div className="p-4 rounded-xl bg-black/40 border border-[#C5A059]/25">
                          <h4 className="text-sm md:text-base font-bold text-[#FAF7F2] flex items-start gap-2">
                            <span className="text-[#E6BE8A] shrink-0 font-mono">①</span>
                            <span>
                              3초 진단 & 6대 상황별 즉시 행동 vs 절대 금지(<span className="text-[#E6BE8A] font-semibold">DO & DON'T</span>) 매뉴얼
                            </span>
                          </h4>
                        </div>

                        <div className="p-4 rounded-xl bg-black/40 border border-[#C5A059]/25 space-y-1">
                          <h4 className="text-sm md:text-base font-bold text-[#FAF7F2] flex items-start gap-2">
                            <span className="text-[#E6BE8A] shrink-0 font-mono">②</span>
                            <span>
                              시각적 텔레파시 (<span className="text-[#E6BE8A] font-semibold">4주</span> 카톡 프로필 & SNS 연출 플랜)
                            </span>
                          </h4>
                          <p className="text-xs md:text-sm text-[#EDE6DA]/80 pl-5 leading-relaxed font-light">
                            1주차 전신샷부터 4주차 자극까지 주차별 완벽 설계
                          </p>
                        </div>

                        <div className="p-4 rounded-xl bg-black/40 border border-[#C5A059]/25 space-y-1">
                          <h4 className="text-sm md:text-base font-bold text-[#FAF7F2] flex items-start gap-2">
                            <span className="text-[#E6BE8A] shrink-0 font-mono">③</span>
                            <span>SNS 미세신호 해독표</span>
                          </h4>
                          <p className="text-xs md:text-sm text-[#EDE6DA]/80 pl-5 leading-relaxed font-light">
                            스토리 칼조회, 좋아요 후 즉시 취소, 멀티 프로필 지정 시 대처법
                          </p>
                        </div>

                        <div className="p-4 rounded-xl bg-black/40 border border-[#C5A059]/25">
                          <h4 className="text-sm md:text-base font-bold text-[#FAF7F2] flex items-start gap-2">
                            <span className="text-[#E6BE8A] shrink-0 font-mono">④</span>
                            <span>
                              연락 충동이 올라올 때 '<span className="text-[#E6BE8A] font-semibold">10분 SOS 프로토콜</span>'
                            </span>
                          </h4>
                        </div>

                        <div className="p-4 rounded-xl bg-black/40 border border-[#C5A059]/25 space-y-2">
                          <h4 className="text-sm md:text-base font-bold text-[#FAF7F2] flex items-start gap-2">
                            <span className="text-[#E6BE8A] shrink-0 font-mono">⑤</span>
                            <span>
                              출력/복사해서 바로 쓰는 <span className="text-[#E6BE8A] font-semibold">실전 기록지</span>
                            </span>
                          </h4>
                          <div className="flex flex-wrap gap-2 pl-5 pt-0.5">
                            <span className="px-2.5 py-1 rounded-md bg-[#2A0510] border border-[#C5A059]/35 text-xs text-[#FAF7F2]">
                              감정 격류 진정 기록지
                            </span>
                            <span className="px-2.5 py-1 rounded-md bg-[#2A0510] border border-[#C5A059]/35 text-xs text-[#FAF7F2]">
                              공백기 일일 점검표
                            </span>
                            <span className="px-2.5 py-1 rounded-md bg-[#2A0510] border border-[#C5A059]/35 text-xs text-[#FAF7F2]">
                              재회 가능성 12문항 자가진단표
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Book 3. [실전 부록 2] 《재회 후폭풍 치트키: 무의식 시크릿 메시지 33선》 */}
                  <div className="p-6 md:p-10 lg:p-12 rounded-3xl bg-gradient-to-r from-[#1E040D] via-[#140207] to-[#0A0205] border border-[#C5A059]/40 shadow-2xl grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                    <div className="lg:col-span-5 flex justify-center">
                      <div className="w-full max-w-[340px] lg:max-w-none">
                        <HybridImageSlot
                          assetKey="book3"
                          className="aspect-[3/4] shadow-2xl"
                        />
                      </div>
                    </div>
                    <div className="lg:col-span-7 space-y-5 text-left break-keep">
                      <div className="inline-block px-3.5 py-1 rounded-full bg-[#600018] text-[#E6BE8A] text-xs font-bold border border-[#E6BE8A]/40 tracking-wider">
                        Book 3. [실전 부록 2]
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-elegant font-bold text-[#FAF7F2] leading-tight">
                        《재회 후폭풍 치트키: 무의식 시크릿 메시지 33선》
                      </h3>
                      <p className="text-base md:text-lg text-[#E6BE8A] font-semibold leading-relaxed">
                        남자의 무의식을 지배하는 33가지 침투술 & 첫 만남 연출법
                      </p>

                      {/* 핵심 내용 목록 ①~③ */}
                      <div className="space-y-3.5 pt-2">
                        <div className="p-4 md:p-5 rounded-xl bg-black/40 border border-[#C5A059]/25 space-y-3">
                          <h4 className="text-sm md:text-base font-bold text-[#FAF7F2] flex items-start gap-2">
                            <span className="text-[#E6BE8A] shrink-0 font-mono">①</span>
                            <span>
                              복사·붙여넣기 전용 <span className="text-[#E6BE8A] font-semibold">33가지</span> 실전 스크립트 (상황별/타이밍/뉘앙스 해설)
                            </span>
                          </h4>

                          {/* 트랙 A, B, C 상세 구분 박스 */}
                          <div className="space-y-2 pl-1 sm:pl-5 pt-1">
                            <div className="p-3 rounded-lg bg-[#1B050E] border border-[#C5A059]/20 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2.5">
                              <span className="text-xs font-bold text-[#E6BE8A] bg-[#600018]/70 px-2 py-0.5 rounded border border-[#E6BE8A]/30 shrink-0">
                                트랙 A
                              </span>
                              <span className="text-xs sm:text-sm text-[#EDE6DA]/90 leading-relaxed font-light">
                                안읽씹·번호 차단 직전, 읽씹 3일 차, 잠수 이별·회피형 우회 멘트
                              </span>
                            </div>

                            <div className="p-3 rounded-lg bg-[#1B050E] border border-[#C5A059]/20 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2.5">
                              <span className="text-xs font-bold text-[#E6BE8A] bg-[#600018]/70 px-2 py-0.5 rounded border border-[#E6BE8A]/30 shrink-0">
                                트랙 B
                              </span>
                              <span className="text-xs sm:text-sm text-[#EDE6DA]/90 leading-relaxed font-light">
                                권태기, 잦은 다툼, 거짓말/신뢰 훼손, 심하게 매달린 후 흑역사 리셋 멘트
                              </span>
                            </div>

                            <div className="p-3 rounded-lg bg-[#1B050E] border border-[#C5A059]/20 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2.5">
                              <span className="text-xs font-bold text-[#E6BE8A] bg-[#600018]/70 px-2 py-0.5 rounded border border-[#E6BE8A]/30 shrink-0">
                                트랙 C
                              </span>
                              <span className="text-xs sm:text-sm text-[#EDE6DA]/90 leading-relaxed font-light">
                                새 이성(환승/리바운드) 균열 멘트, 친구 프레임 탈출, 늦은 밤 "자니?" 찔러보기 원천 격퇴 멘트
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="p-4 rounded-xl bg-black/40 border border-[#C5A059]/25 space-y-1">
                          <h4 className="text-sm md:text-base font-bold text-[#FAF7F2] flex items-start gap-2">
                            <span className="text-[#E6BE8A] shrink-0 font-mono">②</span>
                            <span>메시지 발송 후 대화 핑퐁(Turn) 공식</span>
                          </h4>
                          <p className="text-xs md:text-sm text-[#EDE6DA]/80 pl-5 leading-relaxed font-light">
                            단답형 유도, 까칠한 반응 무장해제, <span className="text-[#E6BE8A] font-semibold">3턴</span> 만에 만남 약속 잡기
                          </p>
                        </div>

                        <div className="p-4 rounded-xl bg-black/40 border border-[#C5A059]/25 space-y-1">
                          <h4 className="text-sm md:text-base font-bold text-[#FAF7F2] flex items-start gap-2">
                            <span className="text-[#E6BE8A] shrink-0 font-mono">③</span>
                            <span>
                              재회의 <span className="text-[#E6BE8A] font-semibold">첫 30분</span> 기선제압 연출법
                            </span>
                          </h4>
                          <p className="text-xs md:text-sm text-[#EDE6DA]/80 pl-5 leading-relaxed font-light">
                            시각·후각 앵커링 세팅, 자이가르닉 철수 타이밍, 쉿 테스트(떠보기) 반사구 훈련
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Special Bonus: 회향연부 모바일 부적 (기존 구성 보존) */}
                  <div className="p-6 md:p-10 lg:p-12 rounded-3xl bg-gradient-to-r from-[#2A0510] via-[#1A030A] to-[#0F0206] border-2 border-[#C5A059] shadow-[0_0_35px_rgba(230,190,138,0.25)] grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    <div className="lg:col-span-5 flex justify-center order-last lg:order-first">
                      <div className="w-full max-w-[340px] lg:max-w-none">
                        <HybridImageSlot
                          assetKey="amulet"
                          className="aspect-[3/4] shadow-2xl"
                        />
                      </div>
                    </div>
                    <div className="lg:col-span-7 space-y-4 text-left break-keep">
                      <div className="inline-block px-3.5 py-1 rounded-full bg-[#E6BE8A] text-[#20050E] text-xs font-bold shadow-md tracking-wider">
                        Special Bonus
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-elegant font-bold text-[#FAF7F2] flex items-center gap-2">
                        <span>회향연부 모바일 부적</span>
                        <Sparkles className="w-6 h-6 text-[#E6BE8A]" />
                      </h3>
                      <p className="text-base md:text-lg text-[#E6BE8A] font-semibold">
                        흩어진 인연의 궤도를 다시 잇는 시각적 에너지 결계. 스마트폰 배경화면용.
                      </p>
                      <p className="text-sm md:text-base text-[#EDE6DA]/80 leading-relaxed font-light">
                        매일 수십 번씩 보게 되는 스마트폰 잠금화면에 설정하여 내면의 흔들림을 잠재우고 상대의 기운을 끌어당기는 고해상도 디지털 부적입니다.
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </section>

            <RedThreadDivider />

            {/* ═════════════════════════════════════════════════════════════════
                ⑩ 기존 “이렇게 활용해보세요” (원본 그대로 유지)
            ═════════════════════════════════════════════════════════════════ */}
            <section className="mb-28">
              <Reveal>
                <div className="gungjung-glass p-8 md:p-12 border-[#C5A059]/20 bg-gradient-to-br from-white/[0.02] to-transparent text-left max-w-6xl mx-auto break-keep">
                  <h2 className="text-2xl font-elegant font-bold mb-8 text-white border-l-4 border-[#E6BE8A] pl-6">
                    이렇게 활용해보세요
                  </h2>
                  
                  <div className="grid md:grid-cols-2 gap-8 text-sm md:text-base leading-relaxed text-[#EDE6DA]/85">
                    {[
                      {
                        title: "1. 내 이별 원인을 진단하세요.",
                        desc: "권태기, 신뢰 상실, 집착, 현실 문제 등 원인에 따라 접근 방식과 메시지 방향이 완전히 달라집니다."
                      },
                      {
                        title: "2. 공백기와 연락 타이밍을 점검하세요.",
                        desc: "불안해서 보내는 연락과 전략적으로 준비된 연락은 관계에 전혀 다른 파급 효과를 가져옵니다."
                      },
                      {
                        title: "3. 감정이 올라올 때마다 체크리스트를 확인하세요.",
                        desc: "지금의 행동이 관계 회복에 도움이 되는 일인지, 단지 불안을 해소하려는 충동적 행동인지 구분해야 합니다."
                      },
                      {
                        title: "4. 재회 이후까지 함께 설계하세요.",
                        desc: "다시 만나는 과정만큼 중요한 것은, 재회 이후에 동일한 문제를 답습하지 않고 새로운 관계의 기둥을 세우는 일입니다."
                      }
                    ].map((item, idx) => (
                      <div key={idx} className="space-y-2">
                        <h3 className="font-semibold text-[#E6BE8A]">{item.title}</h3>
                        <p className="text-xs md:text-sm text-[#EDE6DA]/65 font-light leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-8 border-t border-white/5">
                    <p className="text-xs text-[#EDE6DA]/40 leading-relaxed font-light">
                      <AlertCircle className="w-3.5 h-3.5 inline mr-1.5 opacity-50" />
                      이 전자책은 특정 결과(재회)를 보장하지 않습니다. 관계의 회복 가능성은 이별 원인, 현재 상황, 상대의 상태, 나의 변화 정도에 따라 달라질 수 있습니다.
                    </p>
                  </div>
                </div>
              </Reveal>
            </section>

            <RedThreadDivider />

            {/* ═════════════════════════════════════════════════════════════════
                ⑪ 신규 Section 5: 후기 영역 (Social Proof)
            ═════════════════════════════════════════════════════════════════ */}
            <section className="mb-28 max-w-6xl mx-auto">
              <Reveal>
                <div className="text-center max-w-3xl mx-auto mb-14">
                  <span className="text-[#E6BE8A] font-elegant tracking-[0.25em] text-xs uppercase font-bold">
                    SOCIAL PROOF
                  </span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-elegant font-bold text-[#FAF7F2] mt-3 leading-snug break-keep">
                    실전 카톡 복원 사례
                  </h2>
                </div>

                <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                  {/* 왼쪽 이미지 교체 영역 7: 재회 성공 카톡 캡처 3종 */}
                  <div className="lg:col-span-5">
                    <HybridImageSlot
                      assetKey="review"
                      className="aspect-[4/5]"
                    />
                  </div>

                  {/* 오른쪽 반응형 3개 카드 그리드 */}
                  <div className="lg:col-span-7 space-y-4 text-left break-keep">
                    {[
                      "차단당하고 울던 제가, 스크립트 19번 적용 후 정확히 3주 만에 상대에게 연락받았습니다.",
                      "새 여자 생겼다고 돌아섰던 남친, 4주 프사 플랜 적용했더니 후회한다고 빌더군요.",
                      "읽씹 당해서 미칠 것 같았는데, 10분 SOS로 진정하고 3턴 대화 공식으로 만남 잡았습니다."
                    ].map((quote, idx) => (
                      <div 
                        key={idx}
                        className="p-6 md:p-7 rounded-2xl bg-[#140308]/85 border border-[#C5A059]/30 shadow-lg hover:border-[#E6BE8A] transition-all"
                      >
                        <span className="text-xs font-mono text-[#E6BE8A] block mb-2 font-semibold">
                          CASE 0{idx + 1}
                        </span>
                        <p className="text-base md:text-lg font-elegant font-bold text-[#FAF7F2] leading-relaxed">
                          "{quote}"
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </section>

            <RedThreadDivider />

            {/* ═════════════════════════════════════════════════════════════════
                ⑫ 신규 Section 6: 가치 비교표 (Comparison Table)
            ═════════════════════════════════════════════════════════════════ */}
            <section className="mb-28 max-w-4xl mx-auto">
              <Reveal>
                <div className="text-center max-w-3xl mx-auto mb-14">
                  <span className="text-[#E6BE8A] font-elegant tracking-[0.25em] text-xs uppercase font-bold">
                    COMPARISON TABLE
                  </span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-elegant font-bold text-[#FAF7F2] mt-3 leading-snug break-keep">
                    같은 고민 앞에서, 무엇을 선택하시겠습니까?
                  </h2>
                </div>

                {/* 비교표 테이블 UI */}
                <div className="overflow-x-auto rounded-3xl border border-[#C5A059]/40 shadow-2xl bg-[#0F0206]">
                  <table className="w-full text-left border-collapse min-w-[580px]">
                    <thead>
                      <tr className="border-b border-[#C5A059]/30 bg-[#1A040C]">
                        <th className="p-5 md:p-6 text-sm md:text-base font-elegant font-bold text-[#FAF7F2] w-1/4">
                          구분
                        </th>
                        <th className="p-5 md:p-6 text-sm md:text-base font-elegant font-bold text-[#EDE6DA]/60 w-1/3">
                          일반 타로·연애 상담
                        </th>
                        <th className="p-5 md:p-6 text-base md:text-lg font-elegant font-bold text-[#E6BE8A] bg-[#600018]/50 border-x border-[#C5A059]/40 w-5/12">
                          백도화 《재회비방 3종 세트》
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 text-sm md:text-base">
                      {/* 행 1: 비용 */}
                      <tr className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-5 md:p-6 font-semibold text-[#FAF7F2] bg-white/[0.01]">
                          비용
                        </td>
                        <td className="p-5 md:p-6 text-[#EDE6DA]/70">
                          1회 15만 원 이상
                        </td>
                        <td className="p-5 md:p-6 font-bold text-[#FAF7F2] bg-[#600018]/30 border-x border-[#C5A059]/30">
                          <span className="text-lg md:text-xl text-[#E6BE8A]">단 19,000원 (영구 소장)</span>
                        </td>
                      </tr>

                      {/* 행 2: 내용 */}
                      <tr className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-5 md:p-6 font-semibold text-[#FAF7F2] bg-white/[0.01]">
                          내용
                        </td>
                        <td className="p-5 md:p-6 text-[#EDE6DA]/70">
                          감정적 위로와 시간 끌기
                        </td>
                        <td className="p-5 md:p-6 font-bold text-[#FAF7F2] bg-[#600018]/30 border-x border-[#C5A059]/30">
                          <span className="text-[#E6BE8A]">뇌과학 기반 심리전 + 행동 매뉴얼</span>
                        </td>
                      </tr>

                      {/* 행 3: 실행 도구 */}
                      <tr className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-5 md:p-6 font-semibold text-[#FAF7F2] bg-white/[0.01]">
                          실행 도구
                        </td>
                        <td className="p-5 md:p-6 text-[#EDE6DA]/70">
                          없음
                        </td>
                        <td className="p-5 md:p-6 font-bold text-[#FAF7F2] bg-[#600018]/30 border-x border-[#C5A059]/30">
                          상황별 <span className="text-[#E6BE8A]">33선 스크립트 + 30일 워크시트 제공</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Reveal>
            </section>

            <RedThreadDivider />

            {/* ═════════════════════════════════════════════════════════════════
                ⑬ 신규 Section 7: FAQ (자주 묻는 질문)
            ═════════════════════════════════════════════════════════════════ */}
            <section className="mb-28 max-w-4xl mx-auto">
              <Reveal>
                <div className="text-center max-w-3xl mx-auto mb-14">
                  <span className="text-[#E6BE8A] font-elegant tracking-[0.25em] text-xs uppercase font-bold">
                    FAQ
                  </span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-elegant font-bold text-[#FAF7F2] mt-3 leading-snug break-keep">
                    자주 묻는 질문
                  </h2>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      q: "이미 상대방에게 심하게 매달렸는데 통하나요?",
                      a: "네, 흑역사를 리셋하는 쿨한 반전 멘트와 재활용 공백기 공식이 수록되어 있습니다."
                    },
                    {
                      q: "카톡과 번호가 완전히 차단당했는데 효과가 있을까요?",
                      a: "차단은 가장 강한 감정이 남아있다는 반증입니다. 카톡 차단 3가지 케이스 해독법을 확인하세요."
                    },
                    {
                      q: "새 이성(환승)이 생겼는데 늦지 않았나요?",
                      a: "리바운드 관계는 도파민 착시일 뿐 유통기한이 짧습니다. 비교 우위에 올라놓는 전략이 있습니다."
                    }
                  ].map((faq, idx) => (
                    <div 
                      key={idx}
                      className="rounded-2xl border border-[#C5A059]/30 bg-[#16040A]/85 overflow-hidden transition-all duration-300"
                    >
                      <button
                        onClick={() => toggleFaq(idx)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault()
                            toggleFaq(idx)
                          }
                        }}
                        aria-expanded={openFaq === idx}
                        aria-controls={`faq-answer-${idx}`}
                        className="w-full p-5 md:p-6 text-left flex items-center justify-between gap-4 hover:bg-white/[0.03] transition-colors focus:outline-none focus:ring-1 focus:ring-[#E6BE8A]"
                      >
                        <span className="text-base md:text-lg font-elegant font-bold text-[#FAF7F2] flex items-center gap-3">
                          <span className="text-[#E6BE8A] font-mono text-lg">Q{idx + 1}.</span>
                          <span>{faq.q}</span>
                        </span>
                        <ChevronDown className={`w-5 h-5 text-[#E6BE8A] shrink-0 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} />
                      </button>

                      {openFaq === idx && (
                        <div 
                          id={`faq-answer-${idx}`}
                          className="px-5 pb-6 md:px-6 md:pb-6 text-sm md:text-base text-[#EDE6DA]/85 leading-relaxed font-light border-t border-white/5 pt-4 break-keep bg-[#100207]/60"
                        >
                          <p>{faq.a}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </Reveal>
            </section>

            <RedThreadDivider />

            {/* ═════════════════════════════════════════════════════════════════
                ⑭ 기존 “구매 전 안내” (원본 그대로 유지)
            ═════════════════════════════════════════════════════════════════ */}
            <section className="mb-28">
              <Reveal>
                <div className="gungjung-glass p-8 md:p-12 border-white/5 text-left max-w-6xl mx-auto break-keep">
                  <h2 className="text-2xl font-elegant font-bold mb-10 text-white border-l-4 border-[#E6BE8A] pl-6">
                    구매 전 안내
                  </h2>
                  <ul className="space-y-4 text-xs md:text-sm text-[#EDE6DA]/60 font-light">
                    {[
                      "본 상품은 PDF 형태로 제공되는 디지털 전자책입니다.",
                      "결제 완료 후 안내된 이메일 또는 마이페이지를 통해 파일을 확인하실 수 있습니다.",
                      "모바일, 태블릿, PC 등 PDF 지원 디바이스에서 언제든 편하게 열람 가능합니다.",
                      "디지털 콘텐츠 특성상 메일 발송 또는 파일 다운로드 후에는 단순 변심에 의한 환불이 제한될 수 있습니다.",
                      "본 전자책은 특정 결과나 재회를 무조건 보장하는 상품이 아닙니다.",
                      "모든 관계에는 각자의 상황과 수많은 변수가 존재하며, 결과는 개인의 상태와 상황에 따라 달라질 수 있습니다.",
                      "상대방의 의사와 심리적 경계를 존중하는 건강한 범위 안에서 전략을 활용해 주세요.",
                      "자세한 사항은 웹사이트 하단의 이용약관 및 환불정책을 참고해 주세요."
                    ].map((text, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="mt-2 w-1 h-1 rounded-full bg-[#E6BE8A] shrink-0"></span>
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </section>

            {/* ═════════════════════════════════════════════════════════════════
                ⑮ 기존 최종 CTA 확장 (기존 제목/설명/버튼 보존 + Section 8 추가)
            ═════════════════════════════════════════════════════════════════ */}
            {/* [기존 최종 CTA 보존, 와이드 1440px] */}
            <section className="relative aspect-[16/9] md:aspect-video overflow-hidden rounded-[40px] mb-20 group border border-[#C5A059]/40 shadow-2xl">
              <div className="absolute inset-0 z-0">
                <Image 
                  src={productData.ctaImage} 
                  alt="Final CTA Background" 
                  fill 
                  className="object-cover transition-transform duration-[10000ms] group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0514] via-[#4A0E17]/70 to-black/80 mix-blend-multiply" />
                <div className="absolute inset-0 bg-[#0a0514]/30" />
              </div>

              <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 md:px-10 text-center max-w-5xl mx-auto space-y-6 md:space-y-8 break-keep">
                <Reveal>
                  <h2 className="text-2xl md:text-4xl font-elegant font-bold text-white leading-tight">
                    지금 필요한 것은<br/>
                    한 번 더 매달리는 연락이 아닐 수 있습니다
                  </h2>
                  <p className="text-sm md:text-base text-[#EDE6DA]/85 leading-relaxed font-light max-w-xl mx-auto">
                    먼저 나의 상태를 바꾸고, 관계의 흐름을 다시 읽어야 합니다.<br/>
                    끊어진 인연 앞에서 무너지고 있다면, 이제 감정이 아니라 전략으로 다시 나를 세워보세요.
                  </p>
                  
                  <div className="pt-4">
                    <CTAButton text="재회비방 구매하기" />
                  </div>
                </Reveal>
              </div>
            </section>

            {/* [신규 Section 8: Final CTA 최종 마감 트리거 추가] */}
            <section className="relative overflow-hidden rounded-3xl md:rounded-[40px] mb-20 p-8 md:p-16 border-2 border-[#C5A059] shadow-[0_0_50px_rgba(96,0,24,0.6)] text-center max-w-5xl mx-auto">
              {/* 딥 버건디 풀 컬러 배경 */}
              <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#600018] via-[#4A0012] to-[#1E0208]" />
              
              {/* 이미지 교체 영역 8: 최종 CTA 배경 오브제 */}
              <div className="absolute inset-0 z-0 opacity-25 mix-blend-overlay">
                <HybridImageSlot
                  assetKey="finalCta"
                  className="w-full h-full rounded-none border-none"
                  imgClassName="object-cover"
                />
              </div>

              <div className="relative z-10 max-w-4xl mx-auto space-y-6 md:space-y-8">
                <Reveal>
                  <div className="p-6 md:p-8 rounded-2xl bg-black/60 border border-[#C5A059]/40 max-w-2xl mx-auto text-left sm:text-center text-sm md:text-base leading-relaxed text-[#EDE6DA] break-keep shadow-xl">
                    <p className="font-semibold text-[#E6BE8A] text-base md:text-lg mb-2 flex items-center justify-center gap-1.5">
                      <span>⚠️ 경고: 재회는 1분 1초의 골든타임 싸움입니다.</span>
                    </p>
                    <p className="font-light">
                      지금 잘못 보낸 카톡 한 줄은 영구 차단의 문을 닫아버리지만, 정교하게 계산된 침묵과 문장 하나는 닫힌 상대방의 문을 부수고 들어옵니다.
                    </p>
                  </div>

                  {/* 최종 CTA 버튼 (은은한 펄스 애니메이션, 샴페인 골드 테두리) */}
                  <div className="pt-4">
                    <button
                      onClick={handlePurchase}
                      className="w-full sm:w-auto px-8 md:px-14 py-5 md:py-6 rounded-2xl font-elegant font-bold text-lg md:text-2xl text-[#FAF7F2] shadow-[0_0_40px_rgba(230,190,138,0.35)] hover:shadow-[0_0_60px_rgba(230,190,138,0.55)] transition-all duration-300 hover:scale-105 active:scale-95 motion-safe:animate-pulse inline-flex items-center justify-center gap-3 cursor-pointer"
                      style={{
                        background: 'linear-gradient(135deg, #800020 0%, #4A0012 100%)',
                        border: '2px solid #C5A059'
                      }}
                    >
                      <Sparkles className="w-6 h-6 text-[#E6BE8A]" />
                      <span>지금 19,000원에 3종 풀패키지 다운로드하기</span>
                      <ChevronRight className="w-6 h-6 text-[#E6BE8A]" />
                    </button>
                  </div>
                </Reveal>
              </div>
            </section>

            {/* ═════════════════════════════════════════════════════════════════
                ⑯ 기존 정책 링크·푸터 (원본 그대로 유지)
            ═════════════════════════════════════════════════════════════════ */}
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
