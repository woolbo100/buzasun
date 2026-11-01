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

            {/* ═════════════════════════════════════════════════════════════════
                신규 추가 1: Before & After 1:1 매칭 비교 (재회비방 디자인 컨셉 적용)
            ═════════════════════════════════════════════════════════════════ */}
            <section className="mb-28 max-w-6xl mx-auto">
              <Reveal>
                {/* 섹션: Before & After 1:1 매칭 비교 */}
                <div
                  className="gungjung-glass py-12 px-4 md:px-10 rounded-3xl md:rounded-[40px] border border-[#C5A059]/35"
                  style={{
                    background: 'linear-gradient(135deg, rgba(96, 0, 24, 0.3) 0%, rgba(20, 2, 7, 0.92) 100%)',
                    boxShadow: '0 12px 40px rgba(96, 0, 24, 0.25)'
                  }}
                >
                  <div className="max-w-3xl mx-auto px-4 text-center mb-10 space-y-3 break-keep">
                    <span className="text-[#E6BE8A] font-elegant text-xs font-bold tracking-[0.25em] uppercase block">
                      TRANSFORMATION
                    </span>
                    <h3 className="text-2xl md:text-3xl font-elegant font-bold text-[#FAF7F2] leading-snug">
                      &ldquo;매달릴수록 차가워지던 그 사람,<br />
                      <span className="text-[#E6BE8A]">당신의 에너지가 바뀌면 후폭풍이 시작됩니다.</span>&rdquo;
                    </h3>
                    <p className="text-[#EDE6DA]/75 text-xs md:text-sm font-light leading-relaxed">
                      구차한 붙잡음은 차단을 부릅니다. 미련의 주파수를 끊는 순간 남자의 뇌에 상실감이 각인됩니다.
                    </p>
                  </div>

                  <div className="max-w-4xl mx-auto space-y-4 text-left break-keep">
                    {[
                      {
                        beforeTitle: "새벽마다 프로필 염탐하며 장문 톡을 보낸다",
                        beforeSub: "상대에게 안도감과 질림을 주며 차단 확률만 높임",
                        afterTitle: "단정한 단절로 상대의 뇌에 통제 불능 공포를 심는다",
                        afterSub: "나의 침묵이 길어질수록 그가 내 프로필을 염탐하기 시작합니다."
                      },
                      {
                        beforeTitle: "“내가 다 잘못했어, 다시 생각해 줘” 애원한다",
                        beforeSub: "자신의 가치를 바닥으로 떨어뜨려 경멸을 부르는 태도",
                        afterTitle: "우아한 쿨엔딩 템플릿으로 죄책감과 아쉬움을 남긴다",
                        afterSub: "“정말 이 여자를 이렇게 놓쳐도 될까?”라는 의구심을 점화합니다."
                      },
                      {
                        beforeTitle: "기약 없는 시간을 피폐하게 울며 버틴다",
                        beforeSub: "결핍 에너지가 온몸에 배어 재회 확률을 갉아먹는 상태",
                        afterTitle: "골든타임별 공백기 공식과 에너지 정화 루틴을 가동한다",
                        afterSub: "흔들림 없는 본래 매력을 복원해 압도적인 분위기를 형성합니다."
                      },
                      {
                        beforeTitle: "술 취해 새벽에 온 전화 한 통에 바로 흔들려 응한다",
                        beforeSub: "잠자리 상대나 감정 쓰레기통으로 전락하는 최악의 수",
                        afterTitle: "찌름성 연락을 완벽한 진심과 사과로 전환시킨다",
                        afterSub: "가벼운 떠보기를 정식 재회 고백으로 유도하는 프레임을 구사합니다."
                      }
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="grid grid-cols-1 md:grid-cols-2 gap-3 p-4 rounded-2xl bg-black/45 border border-[#C5A059]/25 hover:border-[#C5A059]/50 transition-colors"
                      >
                        <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#1C040B]/70 border border-[#600018]/50">
                          <span className="text-[#EDE6DA]/70 font-serif font-bold text-[11px] px-2.5 py-1 bg-[#3A0612]/70 border border-[#C5A059]/20 rounded shrink-0">
                            BEFORE
                          </span>
                          <div>
                            <p className="text-[#EDE6DA]/85 text-sm font-medium leading-snug">{item.beforeTitle}</p>
                            <p className="text-[#EDE6DA]/50 text-xs mt-1 font-light">{item.beforeSub}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#600018]/35 border border-[#E6BE8A]/40 shadow-[0_0_20px_rgba(230,190,138,0.08)]">
                          <span className="text-[#E6BE8A] font-serif font-bold text-[11px] px-2.5 py-1 bg-[#600018] border border-[#E6BE8A]/50 rounded shrink-0">
                            AFTER
                          </span>
                          <div>
                            <p className="text-[#FAF7F2] text-sm font-semibold leading-snug">{item.afterTitle}</p>
                            <p className="text-[#E6BE8A]/90 text-xs mt-1 font-light">{item.afterSub}</p>
                          </div>
                        </div>
                      </div>
                    ))}
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
                ⑥ 신규 교체 2: 재회 솔루션 인과관계 통합 (STEP 1 -> STEP 2)
            ═════════════════════════════════════════════════════════════════ */}
            <section className="mb-28 text-left max-w-6xl mx-auto">
              <Reveal>
                {/* 섹션: 재회 솔루션 인과관계 통합 */}
                <div className="py-4">
                  <div className="text-center mb-12 space-y-4 break-keep">
                    <span className="text-[#E6BE8A] font-elegant text-xs font-bold tracking-[0.25em] uppercase block">
                      THE REUNION MECHANISM
                    </span>
                    <h2 className="text-2xl md:text-4xl font-elegant font-bold text-[#FAF7F2] leading-snug">
                      이별의 상처를 매달림으로 풀지 마십시오.<br />
                      <span className="text-[#E6BE8A]">내 에너지를 회수하고, 상대의 무의식에 후폭풍을 심습니다.</span>
                    </h2>
                    <p className="text-[#EDE6DA]/75 text-sm md:text-base max-w-2xl mx-auto font-light leading-relaxed">
                      떠난 남자를 돌아오게 만드는 것은 눈물이 아니라 <strong className="text-[#FAF7F2] font-semibold">통제력의 상실</strong>입니다.<br />
                      《재회비방》은 <strong className="text-[#FAF7F2] font-semibold">결핍 고리 끊기(에너지 회수)</strong>를 선행한 후, <strong className="text-[#E6BE8A] font-semibold">남자의 뇌에 미련을 점화하는 기술(후폭풍 설계)</strong>을 실행합니다.
                    </p>
                  </div>

                  <div className="space-y-10">
                    {/* STEP 1 */}
                    <div
                      className="gungjung-glass p-6 md:p-10 rounded-3xl border border-[#C5A059]/30 relative overflow-hidden"
                      style={{
                        background: 'linear-gradient(135deg, rgba(45, 6, 16, 0.55) 0%, rgba(10, 2, 5, 0.9) 100%)',
                        boxShadow: '0 8px 32px rgba(96, 0, 24, 0.2)'
                      }}
                    >
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="px-3.5 py-1 rounded-full bg-[#4A0E17] text-[#FAF7F2] font-serif font-bold text-xs tracking-wider border border-[#C5A059]/40">
                          STEP 1
                        </span>
                        <h3 className="text-xl md:text-2xl font-elegant font-bold text-[#FAF7F2]">
                          결핍 고리 차단 (에너지 회수 5단계)
                        </h3>
                      </div>
                      <p className="text-[#EDE6DA]/75 text-sm mb-8 leading-relaxed font-light break-keep">
                        상대에게 쏠려 있던 감정의 잔류 에너지를 완전히 거두어들이는 기초 정화 단계입니다. 내가 미련에서 자유로워져야 비로소 상대의 무의식이 결핍을 느끼기 시작합니다.
                      </p>

                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {[
                          { code: "01. Disconnect", title: "접촉 전면 차단", desc: "모든 감정적 누수와 반응 중단" },
                          { code: "02. Cool-Ending", title: "단정한 종결", desc: "비난 없는 품격 있는 마침표" },
                          { code: "03. Unconscious", title: "무의식 정화", desc: "불안과 집착의 뿌리 제거" },
                          { code: "04. Aura Reset", title: "아우라 리셋", desc: "결핍된 을의 파동 완전 소멸" },
                          { code: "05. Golden Time", title: "공백기 절대 법칙", desc: "이별 유형별 침묵 기간 엄수" },
                          { code: "06. Re-Centering", title: "중심성 탈환", desc: "내 삶의 주인 자리 복원" }
                        ].map((item, idx) => (
                          <div
                            key={idx}
                            className="p-4 rounded-2xl bg-black/45 border border-[#C5A059]/20 hover:border-[#C5A059]/50 transition-all break-keep"
                          >
                            <span className="text-[#E6BE8A] text-xs font-mono font-bold tracking-wider">{item.code}</span>
                            <p className="text-[#FAF7F2] text-sm md:text-base font-elegant font-bold mt-1.5">{item.title}</p>
                            <p className="text-[#EDE6DA]/60 text-xs mt-1 font-light leading-relaxed">{item.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* 구분선 화살표 */}
                    <div className="flex justify-center -my-4 relative z-10">
                      <div className="w-11 h-11 rounded-full bg-[#600018]/80 border border-[#E6BE8A]/50 flex items-center justify-center text-[#E6BE8A] shadow-[0_0_20px_rgba(230,190,138,0.25)] font-bold">
                        ↓
                      </div>
                    </div>

                    {/* STEP 2 */}
                    <div
                      className="gungjung-glass p-6 md:p-10 rounded-3xl border border-[#C5A059]/45 relative overflow-hidden"
                      style={{
                        background: 'linear-gradient(135deg, rgba(96, 0, 24, 0.35) 0%, rgba(15, 2, 6, 0.92) 100%)',
                        boxShadow: '0 12px 40px rgba(96, 0, 24, 0.3)'
                      }}
                    >
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="px-3.5 py-1 rounded-full bg-[#600018] text-[#E6BE8A] font-serif font-bold text-xs tracking-wider border border-[#E6BE8A]/40">
                          STEP 2
                        </span>
                        <h3 className="text-xl md:text-2xl font-elegant font-bold text-[#FAF7F2]">
                          후폭풍 점화 기술 (4대 실전 비방)
                        </h3>
                      </div>
                      <p className="text-[#EDE6DA]/75 text-sm mb-8 leading-relaxed font-light break-keep">
                        내 에너지가 정렬되면 상대는 ‘자유’가 아니라 ‘공허와 상실’을 맞닥뜨립니다. 남자의 뇌에 기억 왜곡과 미련을 증폭시키는 4대 트리거입니다.
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                          {
                            num: "비방 01",
                            title: "자이가르닉 효과 & 미완성 기억",
                            desc: "매달리지 않고 깔끔하게 끊어버려 상대의 뇌 속에 관계를 '끝나지 않은 찝찝한 숙제'로 각인시킵니다."
                          },
                          {
                            num: "비방 02",
                            title: "시간차 상실감 유도",
                            desc: "해방감이 끝나는 3~6주 차, 상대의 감정이 후회로 반전되는 변곡점을 정확히 노려 흔적 없는 호기심을 유발합니다."
                          },
                          {
                            num: "비방 03",
                            title: "무자극 재접촉 (Ping) 전략",
                            desc: "부담감 0%, 미련 0%의 무해한 질문 하나로 상대가 먼저 말을 걸고 장문으로 반응하게 만드는 텍스트 공식."
                          },
                          {
                            num: "비방 04",
                            title: "재회 포지션 재설정",
                            desc: "다시 사귀어 달라고 애원하는 입장이 아니라, 상대가 용기를 내어 정식으로 용서를 구하게 만드는 절대 프레임."
                          }
                        ].map((card, idx) => (
                          <div
                            key={idx}
                            className="p-5 rounded-2xl bg-black/50 border border-[#C5A059]/25 hover:border-[#E6BE8A] transition-all group break-keep"
                          >
                            <div className="flex items-center justify-between mb-2">
                              <span className="font-serif text-xs font-bold bg-[#600018] text-[#E6BE8A] px-2.5 py-0.5 rounded border border-[#E6BE8A]/40">
                                {card.num}
                              </span>
                              <Sparkles className="w-4 h-4 text-[#E6BE8A]/50 group-hover:text-[#E6BE8A] transition-colors" />
                            </div>
                            <h4 className="text-[#FAF7F2] font-elegant font-bold text-base md:text-lg group-hover:text-[#E6BE8A] transition-colors">
                              {card.title}
                            </h4>
                            <p className="text-[#EDE6DA]/75 text-xs md:text-sm mt-2 leading-relaxed font-light">
                              {card.desc}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
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

            {/* ═════════════════════════════════════════════════════════════════
                신규 추가 3: 재회비방 FAQ (패키지 상세 해부 섹션 바로 아래)
            ═════════════════════════════════════════════════════════════════ */}
            <section className="mb-28 text-left max-w-4xl mx-auto">
              <Reveal>
                {/* 섹션: 재회비방 FAQ */}
                <div className="py-4">
                  <div className="text-center space-y-3 mb-14">
                    <span className="text-[#E6BE8A] font-elegant tracking-[0.25em] text-xs uppercase font-bold block">
                      FAQ
                    </span>
                    <h2 className="text-2xl md:text-4xl font-elegant font-bold text-[#FAF7F2] tracking-wide">
                      재회비방 자주 묻는 질문
                    </h2>
                    <p className="text-[#EDE6DA]/75 text-xs md:text-sm font-light leading-relaxed break-keep">
                      골든타임을 놓치기 전 가장 많이 묻는 핵심 질문입니다.
                    </p>
                  </div>

                  <div className="space-y-4 break-keep">
                    {[
                      {
                        q: "이미 매달릴 대로 매달렸고 차단까지 당했는데도 가능한가요?",
                        a: (
                          <>
                            네, 가능합니다. 최악의 상황일수록 필요한 것은 말이 아니라 <strong className="text-[#E6BE8A] font-semibold">반응의 급격한 정지</strong>입니다. 상대가 예상하는 나의 매달림 패턴을 깨뜨리고 차단을 푸는 무의식 자극 프로세스를 그대로 따라 하시면 됩니다.
                          </>
                        )
                      },
                      {
                        q: "이별한 지 몇 달이 지났거나 상대에게 환승/새 사람이 생겼다면요?",
                        a: (
                          <>
                            새로운 관계의 도파민은 3개월을 넘기기 힘듭니다. 《재회비방》의 <strong className="text-[#E6BE8A] font-semibold">&apos;대체 불가 앵커링&apos;</strong> 기법은 상대의 새로운 인연이 흔들리는 타이밍에 당신이라는 강력한 기억을 뇌리에 강제 소환하도록 돕습니다.
                          </>
                        )
                      },
                      {
                        q: "제공되는 실전 카톡 템플릿은 바로 복사해서 쓸 수 있나요?",
                        a: (
                          <>
                            네. 단어 하나, 문장 부호 하나까지 심리학적으로 검증된 <strong className="text-[#E6BE8A] font-semibold">[쿨엔딩 템플릿], [공백기 후 핑(Ping) 템플릿], [떠보기 대응 템플릿]</strong> 등 상황별 완성문이 그대로 수록되어 있습니다.
                          </>
                        )
                      },
                      {
                        q: "결제 즉시 열람할 수 있나요?",
                        a: (
                          <>
                            네. 재회는 1분 1초의 골든타임이 생명입니다. 결제 즉시 <strong className="text-[#E6BE8A] font-semibold">PDF 전자책과 부적 파일</strong>이 마이페이지에 자동 발급되어 오늘 밤 즉시 읽어보실 수 있습니다.
                          </>
                        )
                      }
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="p-6 rounded-2xl border border-[#C5A059]/30 bg-gradient-to-r from-[#1E040D]/90 via-[#140207]/90 to-[#0A0205] hover:border-[#E6BE8A]/60 transition-all shadow-lg"
                      >
                        <h4 className="text-[#FAF7F2] font-elegant font-bold text-base md:text-lg flex items-start gap-2.5">
                          <span className="text-[#E6BE8A] font-serif font-bold shrink-0">Q.</span>
                          <span>{item.q}</span>
                        </h4>
                        <p className="text-[#EDE6DA]/80 text-xs md:text-sm mt-3 pl-6 leading-relaxed font-light border-t border-white/5 pt-3">
                          {item.a}
                        </p>
                      </div>
                    ))}
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

            {/* ═════════════════════════════════════════════════════════════════
                신규 교체/추가 4: 최종 결제 마감 CTA 및 손실 회피 섹션 (재회비방 하단 디자인 유지)
            ═════════════════════════════════════════════════════════════════ */}
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

              <div className="relative z-10 max-w-3xl mx-auto space-y-8 break-keep">
                <Reveal>
                  {/* 손실 회피(소실점) 카피 */}
                  <div className="mb-8 space-y-4">
                    <span className="inline-block text-[#E6BE8A] text-xs font-elegant font-bold tracking-[0.25em] uppercase bg-[#600018]/90 border border-[#E6BE8A]/40 px-4 py-1.5 rounded-full shadow-md">
                      LAST GOLDEN TIME
                    </span>
                    <h2 className="text-2xl md:text-4xl font-elegant font-bold text-[#FAF7F2] leading-snug">
                      잘못 보낸 카톡 한 줄로,<br />
                      <span className="text-[#E6BE8A]">마지막 재회의 문</span>마저 영영 닫으시겠습니까?
                    </h2>
                    <p className="text-[#EDE6DA]/85 text-sm md:text-base font-light leading-relaxed">
                      감정에 휩쓸려 보내는 새벽 연락은 영원한 차단을 부를 뿐입니다.<br />
                      망쳐버린 관계를 되살릴 수 있는 시간은 무한하지 않습니다.<br />
                      <strong className="text-[#FAF7F2] font-semibold">단 19,000원으로 상대가 스스로 후회하고 찾아오게 만드십시오.</strong>
                    </p>
                  </div>

                  {/* 패키지 가격 카드 (기존 재회비방 하단 다크 글래스 박스 규격) */}
                  <div className="p-6 md:p-10 rounded-2xl bg-black/60 border border-[#C5A059]/40 shadow-2xl relative backdrop-blur-sm">
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#600018] text-[#E6BE8A] border border-[#E6BE8A]/50 text-xs font-elegant font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow-[0_0_15px_rgba(230,190,138,0.25)] whitespace-nowrap">
                      골든타임 특가 76% OFF
                    </div>

                    <h3 className="text-lg md:text-xl font-elegant font-bold text-[#FAF7F2] mt-2">
                      백도화 재회비방 4 in 1 올인원 패키지
                    </h3>
                    <p className="text-xs md:text-sm text-[#EDE6DA]/60 mt-1 font-light">
                      완전판 바이블 + 후폭풍 시크릿북 + 실전 공백기 워크북 + 재회 카톡 템플릿 5종
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-3 my-6">
                      <span className="text-[#EDE6DA]/40 line-through text-base md:text-lg font-mono">
                        정가 79,000원
                      </span>
                      <span className="text-3xl md:text-4xl font-elegant font-bold text-[#E6BE8A]">
                        19,000원
                      </span>
                      <span className="text-xs font-bold text-[#FAF7F2] bg-[#600018] border border-[#E6BE8A]/50 px-2.5 py-1 rounded-full font-mono">
                        76% OFF
                      </span>
                    </div>

                    {/* 구매 버튼 (기존 재회비방 딥 버건디 & 샴페인 골드 테두리 스타일) */}
                    <button
                      onClick={handlePurchase}
                      className="w-full py-4 md:py-5 px-6 rounded-xl font-elegant font-bold text-base md:text-xl text-[#FAF7F2] shadow-[0_0_40px_rgba(230,190,138,0.3)] hover:shadow-[0_0_60px_rgba(230,190,138,0.5)] transition-all duration-300 hover:scale-[1.02] active:scale-95 inline-flex items-center justify-center gap-2 cursor-pointer"
                      style={{
                        background: 'linear-gradient(135deg, #800020 0%, #4A0012 100%)',
                        border: '2px solid #C5A059'
                      }}
                    >
                      <Sparkles className="w-5 h-5 text-[#E6BE8A] shrink-0" />
                      <span>상대의 무의식에 후폭풍 점화하기</span>
                      <ChevronRight className="w-5 h-5 text-[#E6BE8A] shrink-0" />
                    </button>

                    <p className="text-[#EDE6DA]/50 text-xs mt-4 font-light">
                      * 결제 즉시 PDF 다운로드 가능 / 디지털 콘텐츠 특성상 열람 후 환불 불가
                    </p>
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
