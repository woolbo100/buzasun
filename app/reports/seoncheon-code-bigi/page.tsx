'use client'

import React, { useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Reveal from '@/components/Reveal'
import GlobalBackground from '@/components/GlobalBackground'
import Image from 'next/image'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import {
  Check,
  BookOpen,
  FileText,
  AlertCircle,
  ChevronRight,
  ChevronDown,
  Sparkles,
  Clock,
  CheckCircle2,
  Eye,
  ShieldCheck,
  Heart,
  Compass,
  Scroll,
  Layers,
  HelpCircle,
} from 'lucide-react'
import { seoncheonCodeAssets } from './assets'

// ═══════════════════════════════════════════════════════════════════════════
// 📦 상품 기본 정보 및 설정 (선천코드 비기 전용)
// ═══════════════════════════════════════════════════════════════════════════
const productData = {
  productId: 'seoncheon-code-bigi',
  slug: 'seoncheon-code-bigi',
  pageSlug: 'seoncheon-code-bigi',
  title: '선천코드 비기',
  titleHanja: '先天코드 祕記',
  titleEn: 'Seoncheon Code Secret Book',
  type: 'digital_ebook',
  category: 'reports',
  path: '/reports/seoncheon-code-bigi',
  checkoutUrl: '#',
  price: 29000,
  regularPrice: 89000,
  discountRate: '67% OFF',

  heroImage: '/image/seoncheon-code-secret-book.webp',
  bookCoverImage: '/image/seoncheon-code-secret-book.webp',
}

// 🏷️ 선천코드 비기 전용 앤티크 묵자색 뱃지
function SeoncheonBadge({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <span
      className={`inline-flex items-center justify-center py-[5px] px-[14px] rounded-[6px] text-xs font-semibold whitespace-nowrap shadow-sm tracking-widest ${className}`}
      style={{
        background: 'linear-gradient(135deg, #493740 0%, #30262F 100%)',
        border: '1px solid rgba(183, 161, 138, 0.45)',
        color: '#EAE0DD',
        lineHeight: 1.3,
      }}
    >
      {children}
    </span>
  )
}

// 📖 목차 커리큘럼 데이터 (SECTION 08)
const curriculumData = [
  {
    part: 'PROLOGUE',
    title: '당신이라는 고유한 우주를 읽는 법',
    desc: '운명론에 갇히지 않고, 선천코드를 통해 나를 온전히 이해하는 첫걸음',
    subitems: [
      '왜 우리는 서로 다른 방식으로 사랑하고 상처받는가',
      '사주 오행: 미래 예언이 아닌 나의 심리 청사진',
      '선천코드를 읽는 3가지 기본 원칙 (주체성·수용·조화)',
    ],
  },
  {
    part: 'PART 1',
    title: '선천코드 캐릭터 도감: 십성과 10대 일간',
    desc: '나의 본능적 관계 성향과 매력 페르소나 완전 분석',
    subitems: [
      '십성(十星)으로 읽는 5대 본능 캐릭터 (비겁·식상·재성·관성·인성)',
      '10대 일간 페르소나: 갑(甲)·을(乙)·병(丙)·정(丁)·무(戊)·기(己)·경(庚)·신(辛)·임(壬)·계(癸)',
      '내가 무의식적으로 발산하는 에너지의 결',
    ],
  },
  {
    part: 'PART 2',
    title: '매혹의 각성: 도화와 끌림의 심리',
    desc: '상대방의 마음을 흔드는 고유한 매혹 코드의 비밀',
    subitems: [
      '도화살(桃花煞)의 재해석: 결핍이 아닌 매혹의 빛',
      '오행별 도화의 형태: 수(水)의 관능, 목(木)의 청초함, 금(金)의 기품 등',
      '나만의 매력 시그널을 각성시키는 실전 루틴',
    ],
  },
  {
    part: 'PART 3',
    title: '인연의 비밀: 반복되는 끌림의 메커니즘',
    desc: '왜 나는 매번 비슷한 사람에게 마음을 빼앗기는가',
    subitems: [
      '끌림의 사주적 원리: 나의 부족한 오행을 채우려는 무의식적 갈망',
      '위험한 끌림과 안전한 안식처의 차이',
      '반복되는 연애 패턴의 굴레를 끊어내는 자기 확립법',
    ],
  },
  {
    part: 'PART 4',
    title: '배우자 판별 공식: 이상형과 현실의 조화',
    desc: '월지와 일지로 풀어내는 현실적 인연의 지도',
    subitems: [
      '월지(月支)로 탐색하는 내 마음속 이상형의 실체',
      '일지(日支) 배우자 자리로 보는 실제 함께하기 편안한 사람',
      '배우자 복(福)과 덕(德)의 엄격한 구분과 판별법',
    ],
  },
  {
    part: 'PART 5',
    title: '관계의 그림자: 갈등과 집착의 오행 심리',
    desc: '충(沖)과 극(剋) 속에서 관계의 주도권을 지키는 법',
    subitems: [
      '오행의 불균형이 만들어내는 감정적 과몰입과 불안',
      '부딪히는 에너지를 창조적 대화로 전환하는 완충 지대 형성',
      '상대에게 휘둘리지 않고 내 중심을 세우는 감정 경계선',
    ],
  },
  {
    part: 'PART 6',
    title: '관계의 충돌과 재회: 끝난 인연을 읽는 지혜',
    desc: '이별의 흐름을 이해하고 스스로 다시 선택하는 기준',
    subitems: [
      '인연이 엇갈리는 시기와 에너지의 소진',
      '재회를 바라는 마음 뒤에 숨은 결핍 바라보기',
      '재회보다 앞서야 할 자존감과 주도권의 회복',
    ],
  },
  {
    part: 'PART 7',
    title: '운명의 조화: 오행 리추얼과 삶의 균형',
    desc: '일상에서 실천하는 나만의 기운 충전 솔루션',
    subitems: [
      '나에게 필요한 용신(用神) 오행을 일상에서 채우는 법',
      '색상, 공간, 습관으로 조율하는 관계 운(運) 관리',
      '사랑 앞에서 평온하고 단단해지는 백도화 마인드셋',
    ],
  },
  {
    part: 'EPILOGUE',
    title: '내 선천코드로 관계와 삶을 리드하는 법',
    desc: '운명에 끌려다니지 않고, 스스로 선택하는 삶의 완성',
    subitems: [
      '나를 완전히 알았을 때 비로소 시작되는 자유로운 사랑',
      '백도화 매력학당이 전하는 마지막 비기(祕記)',
    ],
  },
]

// ❓ 자주 묻는 질문 데이터 (SECTION 14)
const faqData = [
  {
    q: '사주를 전혀 몰라도 읽을 수 있나요?',
    a: '네, 물론입니다. 《선천코드 비기》는 복잡한 사주 명리학 용어를 현대 관계 심리학과 감각적인 캐릭터 언어로 쉽게 풀어냈습니다. 사주 초보자도 자신의 타고난 성향과 연애 패턴을 바로 이해하고 실생활에 적용할 수 있습니다.',
  },
  {
    q: '어려운 한자를 알아야 하나요?',
    a: '전혀 모르셔도 됩니다. 모든 핵심 원리는 쉬운 한글과 직관적인 설명으로 구성되어 있으며, 꼭 필요한 기초 글자도 한글 음과 함께 친절히 해설되어 있어 부담 없이 편안하게 읽으실 수 있습니다.',
  },
  {
    q: '내 사주를 직접 찾아 적용할 수 있나요?',
    a: '네. 책 속에서 시중의 무료 만세력 앱/사이트를 통해 나의 생년월일시로 [일간], [일지], [월지] 3가지 핵심 글자를 1분 만에 찾는 법을 안내해 드립니다. 이를 바탕으로 책 속 캐릭터 도감과 배우자 판별법을 즉시 대입해 보실 수 있습니다.',
  },
  {
    q: '현재 연애 중이 아니거나 솔로여도 도움이 되나요?',
    a: '네, 매우 큰 도움이 됩니다. 이 책은 타인을 분석하기에 앞서 [내가 어떤 본능과 매력을 가진 사람인가]를 깊이 있게 탐색하는 자기 이해 도감입니다. 지난 연애의 반복된 상처를 치유하고, 앞으로 나에게 진정으로 잘 맞는 인연의 기준을 세우는 데 최고의 길잡이가 되어 드립니다.',
  },
  {
    q: '궁합이나 배우자에 관한 구체적인 내용도 있나요?',
    a: '네. PART 4와 PART 5에서 이상형을 나타내는 월지와 실제 배우자 자리를 뜻하는 일지의 조화, 배우자 복과 덕의 판별, 오행별 궁합 해석 관점을 깊이 있게 다루고 있습니다.',
  },
  {
    q: '개인 맞춤 사주 분석을 직접 작성해 주는 상품인가요?',
    a: '아닙니다. 본 상품은 1:1 개인 사주 감명 리포트가 아닌, 스스로 자신의 선천코드를 판독하고 평생 활용할 수 있도록 체계적으로 정리된 [고품격 종합 PDF 전자책]입니다.',
  },
  {
    q: 'PDF 파일은 어떻게 전달받나요?',
    a: '결제 완료 즉시 주문 페이지에서 바로 다운로드하실 수 있으며, 등록하신 이메일로도 영구 소장용 다운로드 링크가 자동으로 즉시 발송됩니다. 스마트폰, 태블릿, PC 등 모든 기기에서 편리하게 열람하실 수 있습니다.',
  },
  {
    q: '종이책으로도 배송되나요?',
    a: '본 상품은 디지털 PDF 전자책으로 배송을 기다릴 필요 없이 구매 즉시 열람이 가능합니다. 필요에 따라 A4 크기로 깔끔하게 개인 소장용 인쇄를 하실 수도 있습니다.',
  },
]

export default function SeoncheonCodeBigiPage() {
  useScrollAnimation()

  // 목차 아코디언 상태
  const [openPart, setOpenPart] = useState<number | null>(0)
  // FAQ 아코디언 상태
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const togglePart = (idx: number) => {
    setOpenPart(openPart === idx ? null : idx)
  }

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx)
  }

  return (
    <main className="relative min-h-screen bg-[#171318] text-[#EAE0DD] selection:bg-[#B7A18A]/30">
      <GlobalBackground src="/image/main4.png">
        <Navigation />

        <div className="relative z-10 pt-40 md:pt-48 pb-32">
          <div className="container-premium max-w-5xl mx-auto px-4 sm:px-6">

            {/* ═══════════════════════════════════════════════════════════════
                SECTION 01. HERO / 메인 히어로
               ═══════════════════════════════════════════════════════════════ */}
            <section className="text-center mb-28">
              <Reveal delayMs={100}>
                {/* 상단 라벨 */}
                <div className="mb-6">
                  <SeoncheonBadge className="text-[11px] md:text-xs py-1 px-4 tracking-[0.25em]">
                    PREMIUM SEONCHEON CODE EBOOK
                  </SeoncheonBadge>
                </div>

                {/* 메인 타이틀 */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-elegant font-bold text-white mb-6 tracking-wide leading-[1.3] break-keep">
                  {productData.title}{' '}
                  <span className="text-[#B7A18A] font-light text-2xl sm:text-3xl md:text-4xl block md:inline mt-2 md:mt-0">
                    ({productData.titleHanja})
                  </span>
                </h1>

                {/* 부제 */}
                <p className="text-base sm:text-lg md:text-xl font-elegant text-[#FAF7F2] font-medium tracking-wide mb-8 max-w-2xl mx-auto break-keep">
                  매혹과 인연의 비밀을 푸는 사주 오행 심리 암호
                </p>

                {/* 메인 카피 */}
                <div className="my-8 py-5 px-6 rounded-2xl bg-gradient-to-r from-transparent via-[#30262F]/60 to-transparent border-y border-[#B7A18A]/20 max-w-2xl mx-auto">
                  <p className="text-xl sm:text-2xl md:text-3xl font-elegant font-semibold text-[#FAF7F2] italic tracking-wide break-keep">
                    “사랑에는 이유가 있고, 인연에는 패턴이 있다.”
                  </p>
                </div>

                {/* 설명 문구 */}
                <p className="text-sm sm:text-base md:text-lg text-[#EAE0DD]/80 font-light leading-relaxed max-w-2xl mx-auto mb-12 break-keep">
                  왜 나는 비슷한 사람에게 끌리고, 같은 관계에서 반복해서 흔들릴까요?<br />
                  십성과 10대 일간, 도화와 오행의 언어로 나의 본능과 매력, 인연의 패턴을 탐색하는{' '}
                  <span className="text-[#B7A18A] font-medium">실전 관계 심리 도감</span>입니다.
                </p>

                {/* 메인 책 표지 이미지 */}
                <div className="relative mx-auto max-w-md sm:max-w-lg md:max-w-xl aspect-[16/9] rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.6)] border border-[#B7A18A]/30 mb-12 group">
                  <Image
                    src={productData.heroImage}
                    alt={productData.title}
                    fill
                    priority
                    className="object-cover object-[65%_center] transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#171318] via-transparent to-transparent opacity-40 pointer-events-none" />
                </div>

                {/* 구매 안내 카드 & 액션 버튼 (임시 비활성 상태) */}
                <div
                  className="rounded-3xl p-8 sm:p-10 max-w-xl mx-auto border transition-all duration-500 text-center"
                  style={{
                    background: 'linear-gradient(135deg, rgba(48, 38, 47, 0.85) 0%, rgba(36, 30, 37, 0.95) 100%)',
                    borderColor: 'rgba(183, 161, 138, 0.35)',
                    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.5), 0 0 30px rgba(183, 161, 138, 0.12)',
                  }}
                >
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <span className="text-xs uppercase tracking-widest text-[#B7A18A] font-mono">DIGITAL EDITION</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B7A18A]" />
                    <span className="text-xs text-[#EAE0DD]/70">PDF 즉시 다운로드</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-elegant font-bold text-white mb-2">
                    백도화 《선천코드 비기》 완전판
                  </h3>
                  <p className="text-xs sm:text-sm text-[#EAE0DD]/70 mb-6 font-light">
                    프롤로그 + PART 1~7 + 에필로그 | 총 9개 챕터 올인원
                  </p>

                  {/* 가격 안내 (임시) */}
                  <div className="flex items-center justify-center gap-3 mb-6">
                    <span className="text-sm line-through text-[#EAE0DD]/40">
                      {productData.regularPrice.toLocaleString()}원
                    </span>
                    <span className="text-2xl sm:text-3xl font-bold font-elegant text-white">
                      {productData.price.toLocaleString()}원
                    </span>
                    <span className="px-2 py-0.5 rounded text-xs font-bold bg-[#B7A18A]/20 text-[#B7A18A] border border-[#B7A18A]/30">
                      {productData.discountRate}
                    </span>
                  </div>

                  {/* 1차 초안: 안전한 비활성 상태 버튼 */}
                  <div
                    className="w-full h-14 rounded-xl flex items-center justify-center gap-2 font-medium text-center border opacity-75 cursor-not-allowed select-none"
                    style={{
                      background: 'linear-gradient(135deg, rgba(73, 55, 64, 0.7) 0%, rgba(36, 30, 37, 0.9) 100%)',
                      borderColor: 'rgba(183, 161, 138, 0.4)',
                      color: '#EAE0DD',
                    }}
                  >
                    <span>선천코드 비기 출간 준비 중</span>
                    <span className="text-xs font-mono text-[#B7A18A] tracking-wider uppercase ml-1">
                      (COMING SOON)
                    </span>
                  </div>
                  <p className="text-[11px] text-[#EAE0DD]/50 mt-3 font-light">
                    * 현재 1차 상세페이지 초안 구축 중이며, 정식 출간 시 구매가 오픈됩니다.
                  </p>
                </div>
              </Reveal>
            </section>


            {/* ═══════════════════════════════════════════════════════════════
                SECTION 02. PAIN POINT / 공감 및 후킹
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-28 text-left">
              <Reveal>
                <div className="text-center max-w-3xl mx-auto space-y-4 mb-14 break-keep">
                  <span className="text-[#B7A18A] font-elegant text-xs md:text-sm font-semibold tracking-[0.25em] uppercase block">
                    PAIN POINT & HOOK
                  </span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-elegant font-bold text-white leading-snug break-keep">
                    “왜 나는 늘 비슷한 사람에게 끌리고,<br />
                    같은 상처를 반복할까요?”
                  </h2>
                  <p className="text-sm sm:text-base text-[#EAE0DD]/70 font-light leading-relaxed">
                    상대를 더 잘 사랑하려 애쓸수록, 왜 관계는 뜻대로 풀리지 않았을까요?
                  </p>
                </div>

                {/* 체크리스트 카드 (A. 밝은 투명 카드 스타일) */}
                <div
                  className="rounded-3xl p-8 sm:p-10 md:p-12 border backdrop-blur-md max-w-3xl mx-auto"
                  style={{
                    background: 'linear-gradient(135deg, rgba(234, 224, 221, 0.06) 0%, rgba(73, 55, 64, 0.16) 100%)',
                    borderColor: 'rgba(183, 161, 138, 0.28)',
                  }}
                >
                  <div className="space-y-4">
                    {[
                      '연애할 때마다 비슷한 성향의 사람에게 끌린다.',
                      '상대를 이해하려다 오히려 나 자신을 잃어버린다.',
                      '내 매력이 무엇인지 정확하게 설명하기 어렵다.',
                      '이상형과 실제 잘 맞는 사람이 다르게 느껴진다.',
                      '사주와 궁합에 관심은 있지만 한자가 어렵고 복잡하게 느껴진다.',
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#241E25]/50 border border-[#B7A18A]/10">
                        <div className="w-5 h-5 rounded-full bg-[#B7A18A]/20 border border-[#B7A18A]/40 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-[#B7A18A]" />
                        </div>
                        <p className="text-sm sm:text-base text-[#FAF7F2] font-light leading-relaxed break-keep">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>

                  <p className="text-center text-xs sm:text-sm text-[#B7A18A] mt-8 font-light italic">
                    단 하나의 항목이라도 고개를 끄덕였다면, 이 책은 당신의 관계 지도를 완전히 바꿀 열쇠가 됩니다.
                  </p>
                </div>
              </Reveal>
            </section>


            {/* ═══════════════════════════════════════════════════════════════
                SECTION 03. EMPATHY / 공감 카드 3종
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-28 text-left">
              <Reveal>
                <div className="text-center max-w-3xl mx-auto space-y-4 mb-14 break-keep">
                  <span className="text-[#B7A18A] font-elegant text-xs md:text-sm font-semibold tracking-[0.25em] uppercase block">
                    EMPATHY & PATTERN
                  </span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-elegant font-bold text-white leading-snug break-keep">
                    관계의 굴레 앞에서 마주하는 질문들
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      num: 'CARD 01',
                      title: '반복되는 끌림',
                      question: '왜 매번 비슷한 사람에게 마음을 빼앗길까요?',
                      desc: '이유 없는 우연이 아닙니다. 내 선천코드에 잠재된 결핍과 에너지가 특정한 오행을 끊임없이 부르고 있기 때문입니다.',
                    },
                    {
                      num: 'CARD 02',
                      title: '알 수 없는 나의 매력',
                      question: '내가 가진 매력은 무엇이고, 왜 사람마다 다르게 반응할까요?',
                      desc: '나의 일간과 도화의 형태를 모른 채 남들의 매력을 흉내 내면 에너지만 소진됩니다. 나만의 고유한 매혹 코드를 깨워야 합니다.',
                    },
                    {
                      num: 'CARD 03',
                      title: '이상형과 현실의 차이',
                      question: '강하게 끌리는 사람과 실제로 함께하기 좋은 사람은 왜 다를까요?',
                      desc: '마음이 원하는 사람(월지)과 나의 삶을 편안하게 지탱해 줄 사람(일지)의 사주학적 역할이 완전히 다르기 때문입니다.',
                    },
                  ].map((card, idx) => (
                    <div
                      key={idx}
                      className="rounded-3xl p-7 sm:p-8 border backdrop-blur-md flex flex-col justify-between transition-all duration-500 hover:-translate-y-1 group"
                      style={{
                        background: 'linear-gradient(135deg, rgba(234, 224, 221, 0.05) 0%, rgba(73, 55, 64, 0.15) 100%)',
                        borderColor: 'rgba(183, 161, 138, 0.22)',
                      }}
                    >
                      <div>
                        <span className="text-xs font-mono tracking-widest text-[#B7A18A] block mb-3">
                          {card.num} · {card.title}
                        </span>
                        <h3 className="text-lg sm:text-xl font-elegant font-bold text-white mb-4 leading-snug group-hover:text-[#FAF7F2] transition-colors">
                          {card.question}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#EAE0DD]/75 font-light leading-relaxed break-keep">
                          {card.desc}
                        </p>
                      </div>
                      <div className="pt-6 mt-6 border-t border-[#B7A18A]/15 flex items-center justify-between text-xs text-[#B7A18A]">
                        <span>해법은 선천코드에 있습니다</span>
                        <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </section>


            {/* ═══════════════════════════════════════════════════════════════
                SECTION 04. WHY THIS BOOK / 왜 선천코드 비기인가?
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-28 text-left">
              <Reveal>
                <div className="text-center max-w-3xl mx-auto space-y-4 mb-14 break-keep">
                  <span className="text-[#B7A18A] font-elegant text-xs md:text-sm font-semibold tracking-[0.25em] uppercase block">
                    WHY THIS BOOK
                  </span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-elegant font-bold text-white leading-snug break-keep">
                    “운명을 맞히는 책이 아니라,<br />
                    나의 관계 패턴을 읽는 도감.”
                  </h2>
                  <p className="text-sm sm:text-base text-[#EAE0DD]/80 font-light leading-relaxed max-w-2xl mx-auto">
                    《선천코드 비기》는 복잡하게 느껴지는 사주와 오행을 자기 이해와 관계 심리의 언어로 풀어낸 책입니다.
                    내가 가진 고유한 성향, 매력을 표현하는 방식, 반복되는 끌림과 관계의 갈등을 다각도에서 탐색합니다.
                  </p>
                </div>

                {/* 핵심 카드 3개 (B. 짙은 컬러 카드 스타일) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      step: '01',
                      title: '십성과 10대 일간으로 읽는 나의 관계 캐릭터',
                      desc: '비겁·식상·재성·관성·인성 5대 본능과 10대 일간의 매력 페르소나를 통해 내 심리의 본질을 낱낱이 파악합니다.',
                    },
                    {
                      step: '02',
                      title: '도화와 오행으로 탐색하는 매혹의 언어',
                      desc: '누군가를 강렬하게 끌어당기는 내 안의 매혹 코드를 찾고, 억지스럽지 않은 본연의 아우라를 피워냅니다.',
                    },
                    {
                      step: '03',
                      title: '이상형부터 배우자·궁합·재회까지 이어지는 관계 도감',
                      desc: '월지와 일지의 판독으로 이상형과 진짜 배우자를 구분하고, 엇갈린 인연의 주도권을 되찾는 지혜를 얻습니다.',
                    },
                  ].map((card, idx) => (
                    <div
                      key={idx}
                      className="rounded-3xl p-8 border transition-all duration-500 hover:-translate-y-1 flex flex-col justify-between"
                      style={{
                        background: 'linear-gradient(135deg, rgba(48, 38, 47, 0.9) 0%, rgba(36, 30, 37, 0.95) 100%)',
                        borderColor: 'rgba(183, 161, 138, 0.35)',
                        boxShadow: '0 8px 30px rgba(0,0,0,0.4)',
                      }}
                    >
                      <div>
                        <div className="w-10 h-10 rounded-xl bg-[#B7A18A]/15 border border-[#B7A18A]/30 flex items-center justify-center font-mono font-bold text-[#B7A18A] mb-5">
                          {card.step}
                        </div>
                        <h3 className="text-lg font-elegant font-bold text-white mb-3 leading-snug">
                          {card.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#EAE0DD]/75 font-light leading-relaxed break-keep">
                          {card.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </section>


            {/* ═══════════════════════════════════════════════════════════════
                SECTION 05. TRANSFORMATION / 전후 변화 비교
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-28 text-left">
              <Reveal>
                <div className="text-center max-w-3xl mx-auto space-y-4 mb-14 break-keep">
                  <span className="text-[#B7A18A] font-elegant text-xs md:text-sm font-semibold tracking-[0.25em] uppercase block">
                    TRANSFORMATION
                  </span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-elegant font-bold text-white leading-snug break-keep">
                    선천코드를 이해한 순간 달라지는 것들
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  {/* BEFORE */}
                  <div
                    className="rounded-3xl p-8 sm:p-10 border"
                    style={{
                      background: 'rgba(36, 30, 37, 0.5)',
                      borderColor: 'rgba(255, 255, 255, 0.1)',
                    }}
                  >
                    <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-white/50 mb-6 font-mono">
                      <span>BEFORE</span>
                      <span className="text-xs font-light">| 방황과 오해</span>
                    </div>
                    <ul className="space-y-4">
                      {[
                        '사주를 어렵고 복잡한 한자로만 생각한다.',
                        '연애가 반복해서 어긋나는 이유를 알기 어렵다.',
                        '상대에게 끌리는 감정만으로 관계를 섣불리 판단한다.',
                        '궁합을 좋다 또는 나쁘다로 단순하게만 해석한다.',
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#EAE0DD]/60 font-light break-keep">
                          <span className="text-red-400/80 font-bold mt-0.5">✕</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* AFTER */}
                  <div
                    className="rounded-3xl p-8 sm:p-10 border"
                    style={{
                      background: 'linear-gradient(135deg, rgba(48, 38, 47, 0.95) 0%, rgba(36, 30, 37, 1) 100%)',
                      borderColor: 'rgba(183, 161, 138, 0.5)',
                      boxShadow: '0 10px 40px rgba(0, 0, 0, 0.4), 0 0 25px rgba(183, 161, 138, 0.15)',
                    }}
                  >
                    <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#B7A18A] mb-6 font-mono">
                      <span>AFTER</span>
                      <span className="text-xs font-light text-[#EAE0DD]/80">| 관계의 주도권 회복</span>
                    </div>
                    <ul className="space-y-4">
                      {[
                        '일간·일지·월지의 기본 역할을 명쾌하게 이해한다.',
                        '나의 강점과 관계에서 주의할 패턴을 통찰한다.',
                        '이상형과 현실적 관계 조건을 지혜롭게 구분한다.',
                        '궁합을 관계를 깊이 이해하기 위한 다양한 해석 지도로 활용한다.',
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#FAF7F2] font-medium break-keep">
                          <CheckCircle2 className="w-4 h-4 text-[#B7A18A] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            </section>


            {/* ═══════════════════════════════════════════════════════════════
                SECTION 06. AUTHOR / 저자 소개
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-28 text-left">
              <Reveal>
                <div
                  className="rounded-3xl p-8 sm:p-12 border backdrop-blur-md max-w-4xl mx-auto"
                  style={{
                    background: 'linear-gradient(135deg, rgba(48, 38, 47, 0.8) 0%, rgba(36, 30, 37, 0.9) 100%)',
                    borderColor: 'rgba(183, 161, 138, 0.3)',
                  }}
                >
                  <div className="text-center md:text-left md:flex items-center gap-10">
                    <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border-2 border-[#B7A18A]/40 flex items-center justify-center shrink-0 mx-auto md:mx-0 mb-6 md:mb-0 bg-[#241E25] shadow-[0_0_30px_rgba(183,161,138,0.15)]">
                      <span className="text-3xl font-elegant text-[#B7A18A] font-bold">白桃華</span>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-center md:justify-start gap-2">
                        <span className="text-xs uppercase font-mono tracking-widest text-[#B7A18A]">AUTHOR & MASTER</span>
                        <span className="w-1 h-1 rounded-full bg-[#B7A18A]" />
                        <span className="text-xs text-[#EAE0DD]/70">백도화 매력학당</span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-elegant font-bold text-white">
                        도화 연구가 백도화
                      </h3>
                      <p className="text-sm sm:text-base text-[#FAF7F2] font-elegant italic pt-1">
                        “사주는 정해진 미래를 맞히는 예언서가 아닙니다.<br className="hidden sm:inline" />
                        나를 이해하고 관계에서 중심을 지키기 위한 하나의 해석 지도입니다.”
                      </p>
                      <p className="text-xs sm:text-sm text-[#EAE0DD]/70 font-light leading-relaxed pt-2 break-keep">
                        수많은 상담과 명리학 연구를 통해, 타고난 기운을 온전히 긍정하고 사랑의 주도권을 되찾는 실천적 심리 솔루션을 전하고 있습니다.
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </section>


            {/* ═══════════════════════════════════════════════════════════════
                SECTION 07. BOOK VALUE / 책의 핵심 가치
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-28 text-left">
              <Reveal>
                <div className="text-center max-w-3xl mx-auto space-y-4 mb-14 break-keep">
                  <span className="text-[#B7A18A] font-elegant text-xs md:text-sm font-semibold tracking-[0.25em] uppercase block">
                    CORE VALUE
                  </span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-elegant font-bold text-white leading-snug break-keep">
                    한자를 몰라도 읽을 수 있는<br />
                    나만의 관계 심리 도감
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
                  {[
                    { title: '십성으로 읽는 5대 본능', desc: '비겁·식상·재성·관성·인성으로 파악하는 타고난 관계 욕구' },
                    { title: '10대 일간 매력 페르소나', desc: '갑목부터 계수까지 고유한 매력의 결을 깨우는 캐릭터 분석' },
                    { title: '도화와 매혹의 심리', desc: '이유 없이 끌어당기는 치명적인 도화 에너지의 바른 사용법' },
                    { title: '월지로 탐색하는 이상형', desc: '내가 무의식적으로 갈망하는 이상형의 명확한 조건' },
                    { title: '배우자 복과 덕의 구분', desc: '실제 결혼 생활에서 나를 평온하게 만들어줄 배우자 판별' },
                    { title: '위험한 관계 패턴과 갈등', desc: '서로 상처 주는 충(沖)과 극(剋)을 슬기롭게 넘기는 법' },
                    { title: '재회와 오행 리추얼', desc: '어긋난 인연 앞에서 중심을 잡고 기운을 보완하는 실천법' },
                  ].map((val, idx) => (
                    <div
                      key={idx}
                      className="p-6 rounded-2xl border backdrop-blur-sm bg-[#241E25]/60 border-[#B7A18A]/20 transition-all duration-300 hover:border-[#B7A18A]/40"
                    >
                      <Sparkles className="w-5 h-5 text-[#B7A18A] mb-3" />
                      <h4 className="text-base font-elegant font-bold text-white mb-2">{val.title}</h4>
                      <p className="text-xs text-[#EAE0DD]/70 font-light leading-relaxed break-keep">{val.desc}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </section>


            {/* ═══════════════════════════════════════════════════════════════
                SECTION 08. CURRICULUM / 전체 목차 공개 (아코디언)
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-28 text-left">
              <Reveal>
                <div className="text-center max-w-3xl mx-auto space-y-4 mb-14 break-keep">
                  <span className="text-[#B7A18A] font-elegant text-xs md:text-sm font-semibold tracking-[0.25em] uppercase block">
                    TABLE OF CONTENTS
                  </span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-elegant font-bold text-white leading-snug break-keep">
                    《선천코드 비기》 전체 목차 공개
                  </h2>
                  <p className="text-sm sm:text-base text-[#EAE0DD]/75 font-light">
                    프롤로그부터 에필로그까지 이어지는 총 9개 챕터의 정교한 여정
                  </p>
                </div>

                <div className="max-w-3xl mx-auto space-y-3.5">
                  {curriculumData.map((item, idx) => {
                    const isOpen = openPart === idx
                    return (
                      <div
                        key={idx}
                        className="rounded-2xl border transition-all duration-300 overflow-hidden"
                        style={{
                          background: isOpen ? 'rgba(48, 38, 47, 0.95)' : 'rgba(36, 30, 37, 0.7)',
                          borderColor: isOpen ? 'rgba(183, 161, 138, 0.5)' : 'rgba(183, 161, 138, 0.2)',
                        }}
                      >
                        <button
                          onClick={() => togglePart(idx)}
                          className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                        >
                          <div>
                            <span className="text-xs font-mono font-semibold tracking-wider text-[#B7A18A] uppercase block mb-1">
                              {item.part}
                            </span>
                            <h3 className="text-base sm:text-lg font-elegant font-bold text-white leading-snug">
                              {item.title}
                            </h3>
                            <p className="text-xs text-[#EAE0DD]/60 font-light mt-1 hidden sm:block">
                              {item.desc}
                            </p>
                          </div>
                          <div className="w-8 h-8 rounded-full bg-[#B7A18A]/10 border border-[#B7A18A]/30 flex items-center justify-center shrink-0">
                            <ChevronDown
                              className={`w-4 h-4 text-[#B7A18A] transition-transform duration-300 ${
                                isOpen ? 'rotate-180' : ''
                              }`}
                            />
                          </div>
                        </button>

                        {isOpen && (
                          <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-[#B7A18A]/15 bg-[#171318]/50">
                            <ul className="space-y-2.5">
                              {item.subitems.map((sub, sIdx) => (
                                <li key={sIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#FAF7F2]/80 font-light break-keep">
                                  <span className="text-[#B7A18A] mt-0.5">•</span>
                                  <span>{sub}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </Reveal>
            </section>


            {/* ═══════════════════════════════════════════════════════════════
                SECTION 09. INSIDE THE BOOK / 책 속에서 만날 내용
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-28 text-left">
              <Reveal>
                <div className="text-center max-w-3xl mx-auto space-y-4 mb-14 break-keep">
                  <span className="text-[#B7A18A] font-elegant text-xs md:text-sm font-semibold tracking-[0.25em] uppercase block">
                    INSIDE THE BOOK
                  </span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-elegant font-bold text-white leading-snug break-keep">
                    책 속에서 직접 마주할 핵심 내용
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  {[
                    {
                      tag: 'CONTENT 01',
                      title: '나의 선천코드를 찾는 만세력 기본 판독법',
                      desc: '생년월일시만으로 내 관계의 중심축인 [일간·일지·월지]를 1분 만에 판독하는 실전 방법',
                    },
                    {
                      tag: 'CONTENT 02',
                      title: '10대 일간 페르소나와 관계 캐릭터 도감',
                      desc: '나무, 불, 흙, 쇠, 물의 오행 기운이 인간의 성격과 애정 표현으로 드러나는 10가지 양상',
                    },
                    {
                      tag: 'CONTENT 03',
                      title: '도화·이상형·배우자·궁합 해석의 주요 관점',
                      desc: '끌림의 이유를 알고 타인을 비난하지 않으며, 스스로 사랑의 주인이 되는 명리학적 통찰',
                    },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="rounded-3xl p-7 border backdrop-blur-md bg-[#241E25]/80 border-[#B7A18A]/25 flex flex-col justify-between"
                    >
                      <div>
                        {/* 임시 이미지 플레이스홀더 영역 */}
                        <div className="w-full aspect-[4/3] rounded-2xl bg-[#171318] border border-[#B7A18A]/20 flex flex-col items-center justify-center p-4 mb-5 text-center">
                          <BookOpen className="w-8 h-8 text-[#B7A18A]/60 mb-2" />
                          <span className="text-[11px] text-[#B7A18A] font-mono tracking-wider">{item.tag}</span>
                          <span className="text-[10px] text-[#EAE0DD]/40 mt-1 font-light">인포그래픽 제작 예정</span>
                        </div>
                        <h3 className="text-base font-elegant font-bold text-white mb-2 leading-snug">{item.title}</h3>
                        <p className="text-xs text-[#EAE0DD]/70 font-light leading-relaxed break-keep">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </section>


            {/* ═══════════════════════════════════════════════════════════════
                SECTION 10. PACKAGE / 상품 상세 해부
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-28 text-left">
              <Reveal>
                <div className="text-center max-w-3xl mx-auto space-y-4 mb-14 break-keep">
                  <span className="text-[#B7A18A] font-elegant text-xs md:text-sm font-semibold tracking-[0.25em] uppercase block">
                    PACKAGE DETAILS
                  </span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-elegant font-bold text-white leading-snug break-keep">
                    《선천코드 비기 완전판》 패키지 구성
                  </h2>
                </div>

                <div
                  className="rounded-3xl p-8 sm:p-12 border max-w-3xl mx-auto"
                  style={{
                    background: 'linear-gradient(135deg, rgba(48, 38, 47, 0.9) 0%, rgba(36, 30, 37, 0.95) 100%)',
                    borderColor: 'rgba(183, 161, 138, 0.35)',
                    boxShadow: '0 12px 40px rgba(0,0,0,0.4)',
                  }}
                >
                  <div className="flex flex-col sm:flex-row items-center gap-8">
                    <div className="w-40 sm:w-48 aspect-[3/4] relative rounded-2xl overflow-hidden shadow-2xl border border-[#B7A18A]/40 shrink-0">
                      <Image
                        src={productData.bookCoverImage}
                        alt="선천코드 비기 완전판 목업"
                        fill
                        className="object-cover object-[65%_center]"
                      />
                    </div>

                    <div className="space-y-4 text-center sm:text-left">
                      <span className="px-3 py-1 rounded-full text-xs font-mono bg-[#B7A18A]/20 text-[#B7A18A] border border-[#B7A18A]/30">
                        OFFICIAL MAIN EBOOK
                      </span>
                      <h3 className="text-2xl font-elegant font-bold text-white">
                        《선천코드 비기 완전판》 PDF
                      </h3>
                      <p className="text-xs sm:text-sm text-[#EAE0DD]/75 font-light leading-relaxed break-keep">
                        • 판형: A4 세로형 디지털 PDF 전자책 (모바일·PC 최적화)<br />
                        • 구성: 프롤로그 + 본편 PART 1~7 + 에필로그 전체 수록<br />
                        • 해설: 십성·일간·도화·이상형·배우자·궁합·재회 종합 가이드
                      </p>
                      <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-2 text-xs text-[#B7A18A]">
                        <span>✓ 무제한 영구 소장</span>
                        <span>•</span>
                        <span>✓ 구매 즉시 다운로드</span>
                        <span>•</span>
                        <span>✓ 선명한 고화질 판독</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </section>


            {/* ═══════════════════════════════════════════════════════════════
                SECTION 11. CORE DIFFERENTIATION / 3대 차별화
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-28 text-left">
              <Reveal>
                <div className="text-center max-w-3xl mx-auto space-y-4 mb-14 break-keep">
                  <span className="text-[#B7A18A] font-elegant text-xs md:text-sm font-semibold tracking-[0.25em] uppercase block">
                    DIFFERENTIATION
                  </span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-elegant font-bold text-white leading-snug break-keep">
                    백도화 선천코드 비기만의 3대 차별점
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  {[
                    {
                      card: 'CARD 01',
                      title: '어려운 명리학을 관계 심리의 언어로',
                      desc: '고루한 한자 풀이를 벗어나, 나와 상대방의 심리와 무의식적 끌림을 명쾌한 현대 심리학적 언어로 풀어냅니다.',
                    },
                    {
                      card: 'CARD 02',
                      title: '매혹부터 궁합까지 연결되는 도감',
                      desc: '단순한 성향 분석에 그치지 않고 매력, 이상형, 현실적 배우자, 충돌과 갈등 극복까지 하나의 완성된 여정으로 담았습니다.',
                    },
                    {
                      card: 'CARD 03',
                      title: '읽고 바로 적용하는 실전 안내서',
                      desc: '만세력의 주요 글자를 직접 확인하며 책의 해석을 나의 지난 연애 경험과 현재 인연에 즉시 대입해 볼 수 있습니다.',
                    },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="rounded-3xl p-7 border backdrop-blur-md bg-[#241E25]/70 border-[#B7A18A]/25"
                    >
                      <span className="text-xs font-mono tracking-widest text-[#B7A18A] block mb-3">
                        {item.card}
                      </span>
                      <h3 className="text-base sm:text-lg font-elegant font-bold text-white mb-3 leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#EAE0DD]/70 font-light leading-relaxed break-keep">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </section>


            {/* ═══════════════════════════════════════════════════════════════
                SECTION 12. PRACTICAL GUIDE / 200% 활용 가이드
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-28 text-left">
              <Reveal>
                <div className="text-center max-w-3xl mx-auto space-y-4 mb-14 break-keep">
                  <span className="text-[#B7A18A] font-elegant text-xs md:text-sm font-semibold tracking-[0.25em] uppercase block">
                    PRACTICAL GUIDE
                  </span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-elegant font-bold text-white leading-snug break-keep">
                    《선천코드 비기》 실전 200% 활용 가이드
                  </h2>
                </div>

                <div className="max-w-3xl mx-auto space-y-4">
                  {[
                    {
                      step: 'STEP 1',
                      title: '무료 만세력에서 나의 일간·일지·월지를 찾습니다.',
                      desc: '책 속 안내에 따라 생년월일시를 입력하고 나의 3가지 핵심 글자를 메모합니다.',
                    },
                    {
                      step: 'STEP 2',
                      title: '10대 일간과 십성 캐릭터를 읽으며 나의 성향을 탐색합니다.',
                      desc: '내가 관계에서 무의식적으로 원하는 본능과 매력의 결을 확인합니다.',
                    },
                    {
                      step: 'STEP 3',
                      title: '도화, 이상형, 배우자, 궁합과 관련된 장을 찾아봅니다.',
                      desc: '내가 끌리는 상대방의 일간과 비교하며 관계의 장단점과 흐름을 조율합니다.',
                    },
                    {
                      step: 'STEP 4',
                      title: '관계에서 반복되는 행동과 감정을 돌아보고 나만의 기준을 정리합니다.',
                      desc: '상대에게 휘둘리지 않고 내 중심을 지키는 새로운 관계 지도를 완성합니다.',
                    },
                  ].map((st, idx) => (
                    <div
                      key={idx}
                      className="p-6 rounded-2xl border backdrop-blur-sm bg-[#241E25]/60 border-[#B7A18A]/20 flex items-start gap-4"
                    >
                      <span className="px-2.5 py-1 rounded bg-[#B7A18A]/15 border border-[#B7A18A]/30 font-mono text-xs font-bold text-[#B7A18A] shrink-0 mt-0.5">
                        {st.step}
                      </span>
                      <div>
                        <h4 className="text-base font-elegant font-bold text-white mb-1">{st.title}</h4>
                        <p className="text-xs sm:text-sm text-[#EAE0DD]/70 font-light leading-relaxed break-keep">{st.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </section>


            {/* ═══════════════════════════════════════════════════════════════
                SECTION 13. CLOSING / 감성 메시지
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-28 text-center">
              <Reveal>
                <div
                  className="rounded-3xl p-10 sm:p-14 border max-w-4xl mx-auto relative overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, rgba(48, 38, 47, 0.95) 0%, rgba(36, 30, 37, 1) 100%)',
                    borderColor: 'rgba(183, 161, 138, 0.45)',
                    boxShadow: '0 16px 50px rgba(0, 0, 0, 0.5), 0 0 35px rgba(183, 161, 138, 0.15)',
                  }}
                >
                  <p className="text-xs uppercase tracking-widest text-[#B7A18A] font-mono mb-4">CLOSING MESSAGE</p>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-elegant font-bold text-white mb-6 leading-snug break-keep">
                    “운명을 기다리는 사람이 아니라,<br />
                    나를 이해하고 선택하는 사람이 되십시오.”
                  </h2>
                  <p className="text-sm sm:text-base text-[#EAE0DD]/80 font-light leading-relaxed max-w-2xl mx-auto break-keep">
                    내가 어떤 사람인지 알고, 무엇에 끌리며, 어떤 관계에서 편안해지는지 이해하는 것.<br />
                    그 작은 이해가 앞으로의 모든 만남과 선택을 바꾸는 찬란한 출발점이 됩니다.
                  </p>
                </div>
              </Reveal>
            </section>


            {/* ═══════════════════════════════════════════════════════════════
                SECTION 14. FAQ / 자주 묻는 질문 (아코디언)
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-28 text-left">
              <Reveal>
                <div className="text-center max-w-3xl mx-auto space-y-4 mb-14 break-keep">
                  <span className="text-[#B7A18A] font-elegant text-xs md:text-sm font-semibold tracking-[0.25em] uppercase block">
                    FAQ
                  </span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-elegant font-bold text-white leading-snug break-keep">
                    자주 묻는 질문
                  </h2>
                </div>

                <div className="max-w-3xl mx-auto space-y-3.5">
                  {faqData.map((item, idx) => {
                    const isOpen = openFaq === idx
                    return (
                      <div
                        key={idx}
                        className="rounded-2xl border transition-all duration-300 overflow-hidden"
                        style={{
                          background: isOpen ? 'rgba(48, 38, 47, 0.95)' : 'rgba(36, 30, 37, 0.6)',
                          borderColor: isOpen ? 'rgba(183, 161, 138, 0.45)' : 'rgba(183, 161, 138, 0.15)',
                        }}
                      >
                        <button
                          onClick={() => toggleFaq(idx)}
                          className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                        >
                          <div className="flex items-center gap-3">
                            <span className="font-mono font-bold text-[#B7A18A] text-sm">Q.</span>
                            <span className="text-sm sm:text-base font-elegant font-bold text-white leading-snug">
                              {item.q}
                            </span>
                          </div>
                          <div className="w-7 h-7 rounded-full bg-[#B7A18A]/10 border border-[#B7A18A]/25 flex items-center justify-center shrink-0">
                            <ChevronDown
                              className={`w-3.5 h-3.5 text-[#B7A18A] transition-transform duration-300 ${
                                isOpen ? 'rotate-180' : ''
                              }`}
                            />
                          </div>
                        </button>

                        {isOpen && (
                          <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-[#B7A18A]/15 bg-[#171318]/40">
                            <p className="text-xs sm:text-sm text-[#EAE0DD]/80 font-light leading-relaxed break-keep">
                              {item.a}
                            </p>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </Reveal>
            </section>


            {/* ═══════════════════════════════════════════════════════════════
                SECTION 15. NOTICE / 구매 전 안내
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-28 text-left">
              <Reveal>
                <div
                  className="rounded-3xl p-8 sm:p-10 border backdrop-blur-md max-w-3xl mx-auto"
                  style={{
                    background: 'rgba(36, 30, 37, 0.65)',
                    borderColor: 'rgba(183, 161, 138, 0.25)',
                  }}
                >
                  <div className="flex items-center gap-2 mb-4 text-[#B7A18A]">
                    <AlertCircle className="w-5 h-5" />
                    <h3 className="text-base font-elegant font-bold text-white">구매 전 유의사항 안내</h3>
                  </div>
                  <div className="space-y-2 text-xs sm:text-sm text-[#EAE0DD]/70 font-light leading-relaxed break-keep">
                    <p>• <strong>디지털 상품 안내:</strong> 본 상품은 실물 종이책이 아니며, 결제 즉시 다운로드하여 열람하는 디지털 PDF 전자책입니다.</p>
                    <p>• <strong>환불 규정:</strong> 디지털 콘텐츠의 특성상 다운로드 링크가 발송되거나 열람이 개시된 이후에는 전자상거래법에 의거하여 단순 변심에 의한 환불이 제한될 수 있습니다.</p>
                    <p>• <strong>콘텐츠 성격 고지:</strong> 본 전자책에 수록된 사주와 오행에 관한 내용은 전통적인 해석 체계를 바탕으로 자기 이해와 관계를 탐색하기 위한 인문·심리 콘텐츠이며, 미래 사건이나 타인의 행동을 확정적으로 예측하거나 특정 결과를 보장하지 않습니다.</p>
                  </div>
                </div>
              </Reveal>
            </section>


            {/* ═══════════════════════════════════════════════════════════════
                SECTION 16. FINAL CTA & 구매 영역
               ═══════════════════════════════════════════════════════════════ */}
            <section className="text-center max-w-2xl mx-auto mb-16">
              <Reveal>
                <div
                  className="rounded-3xl p-8 sm:p-12 border text-center"
                  style={{
                    background: 'linear-gradient(135deg, rgba(48, 38, 47, 0.95) 0%, rgba(36, 30, 37, 1) 100%)',
                    borderColor: 'rgba(183, 161, 138, 0.45)',
                    boxShadow: '0 16px 50px rgba(0, 0, 0, 0.6), 0 0 30px rgba(183, 161, 138, 0.15)',
                  }}
                >
                  <span className="text-xs uppercase font-mono tracking-widest text-[#B7A18A] block mb-2">
                    START YOUR JOURNEY
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-elegant font-bold text-white mb-3">
                    백도화 《선천코드 비기》 완전판
                  </h3>
                  <p className="text-sm text-[#FAF7F2] font-elegant italic mb-8 break-keep">
                    “나의 선천코드를 읽고, 관계의 주도권을 되찾는 첫걸음.”
                  </p>

                  <div className="flex items-center justify-center gap-3 mb-6">
                    <span className="text-sm line-through text-[#EAE0DD]/40">
                      {productData.regularPrice.toLocaleString()}원
                    </span>
                    <span className="text-3xl font-bold font-elegant text-white">
                      {productData.price.toLocaleString()}원
                    </span>
                    <span className="px-2 py-0.5 rounded text-xs font-bold bg-[#B7A18A]/20 text-[#B7A18A] border border-[#B7A18A]/30">
                      {productData.discountRate}
                    </span>
                  </div>

                  {/* 안전한 비활성 버튼 */}
                  <div
                    className="w-full h-14 rounded-xl flex items-center justify-center gap-2 font-medium text-center border opacity-75 cursor-not-allowed select-none"
                    style={{
                      background: 'linear-gradient(135deg, rgba(73, 55, 64, 0.7) 0%, rgba(36, 30, 37, 0.9) 100%)',
                      borderColor: 'rgba(183, 161, 138, 0.4)',
                      color: '#EAE0DD',
                    }}
                  >
                    <span>선천코드 비기 준비 중</span>
                    <span className="text-xs font-mono text-[#B7A18A] tracking-wider uppercase ml-1">
                      (출간 예정)
                    </span>
                  </div>
                </div>
              </Reveal>
            </section>

          </div>
        </div>

        {/* 📱 모바일 하단 고정 구매 바 (준비 중 비활성 상태) */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-3 bg-[#171318]/95 backdrop-blur-lg border-t border-[#B7A18A]/30 flex items-center justify-between gap-3">
          <div className="pl-2">
            <span className="text-[10px] text-[#B7A18A] uppercase font-mono block">선천코드 비기</span>
            <span className="text-base font-bold font-elegant text-white">{productData.price.toLocaleString()}원</span>
          </div>
          <div className="px-5 py-2.5 rounded-lg bg-[#30262F] border border-[#B7A18A]/30 text-xs font-semibold text-[#EAE0DD] opacity-80 cursor-not-allowed">
            출간 준비 중
          </div>
        </div>

        <Footer />
      </GlobalBackground>
    </main>
  )
}
