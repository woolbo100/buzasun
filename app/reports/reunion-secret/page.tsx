'use client'

import React from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Reveal from '@/components/Reveal'
import Link from 'next/link'
import PetalsCanvas from '@/components/PetalsCanvas'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { 
  Check, 
  BookOpen, 
  FileText, 
  Smartphone, 
  HelpCircle, 
  AlertCircle,
  Sparkles,
  Heart,
  Compass,
  Lock,
  ChevronRight
} from 'lucide-react'

export default function ReunionSecretPage() {
  useScrollAnimation()

  // 붉은 실 장식선 컴포넌트
  const RedThreadDivider = () => (
    <div className="flex items-center justify-center my-16 opacity-70">
      <div className="h-[1px] w-20 md:w-32 bg-gradient-to-r from-transparent to-[#8C1D24]" />
      <div className="mx-3 flex items-center justify-center">
        <svg className="w-6 h-6 text-[#8C1D24]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* 동양적 전통 매듭 문양 */}
          <path d="M12 2C9.5 2 7.5 4 7.5 6.5C7.5 9 10 11 12 13C14 11 16.5 9 16.5 6.5C16.5 4 14.5 2 12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 13V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="12" cy="6.5" r="2.5" fill="currentColor" />
          <path d="M8.5 6.5C8.5 7.5 9.5 8.5 12 8.5C14.5 8.5 15.5 7.5 15.5 6.5" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </div>
      <div className="h-[1px] w-20 md:w-32 bg-gradient-to-l from-transparent to-[#8C1D24]" />
    </div>
  )

  // CTA 버튼 컴포넌트
  const CTAButton = ({ text }: { text: string }) => (
    <div className="text-center my-10">
      <Link
        href="/checkout?productId=reunion-secret-method"
        className="relative inline-flex items-center justify-center px-12 py-5 rounded-full font-serif font-bold text-lg md:text-xl text-[#FAF7F2] bg-gradient-to-r from-[#4A0E17] to-[#2B050B] border border-[#C5A059]/60 shadow-[0_8px_30px_rgba(74,14,23,0.35)] hover:shadow-[0_8px_40px_rgba(197,160,89,0.55)] hover:scale-105 hover:border-[#C5A059] transition-all duration-500 tracking-wider group overflow-hidden"
      >
        {/* 내부 반짝임 광채 효과 */}
        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
        <span className="relative flex items-center gap-2">
          {text}
          <ChevronRight className="w-5 h-5 text-[#C5A059] group-hover:translate-x-1 transition-transform" />
        </span>
      </Link>
    </div>
  )

  // 기존 소중한 후기 (과장이 없고 진정성 있는 후기들로 한지 디자인에 맞춰 재배치)
  const reviews = [
    { id: 1, author: '임하늘님', content: '헤어지고 매달리기만 하다가 이 책을 보고 제 행동이 얼마나 잘못됐는지 알게 됐어요. 마음을 가다듬는 데 큰 도움이 됐습니다.', rating: 5 },
    { id: 2, author: '윤지후님', content: '상대방의 심리를 구조적으로 설명해 주셔서 연락할 때 어떤 태도를 가져야 할지 기준이 생겼어요. 예시 문구들도 정말 유용합니다.', rating: 5 },
    { id: 3, author: '최유진님', content: '무작정 재회를 권하는 게 아니라 저 자신을 먼저 돌보게 해주는 내용이라 더 좋았습니다. 디자인도 예뻐서 읽는 내내 기분이 묘했어요.', rating: 5 },
  ]

  // 기존 FAQ (과장 문구 없음을 명확히 보여주는 안내)
  const faqs = [
    { 
      q: '재회를 보장하나요?', 
      a: '재회를 무조건 보장하는 상품은 아닙니다. 감정적 매달림을 줄이고 관계의 흐름을 더 차분하게 정리하도록 돕는 PDF 실전 전략서입니다.' 
    },
    { 
      q: '상대에게 보낼 문구가 포함되나요?', 
      a: '상황별 메시지 설계 방향과 예시 문구 스크립트가 포함되어 있어 실질적인 행동 매뉴얼을 제공합니다.' 
    },
    { 
      q: '상담이 포함되나요?', 
      a: '상담은 포함되지 않으며 PDF 전자책 형태로 제공되는 지식 콘텐츠입니다.' 
    },
    { 
      q: '언제 받을 수 있나요?', 
      a: '결제 및 정보 확인 후 신청하신 이메일 또는 마이페이지를 통해 편리하게 전달됩니다.' 
    },
  ]

  return (
    <main className="relative min-h-screen bg-[#FAF7F2] text-[#3D3530] overflow-hidden font-sans selection:bg-[#4A0E17]/10 selection:text-[#4A0E17]">
      {/* 벚꽃잎 효과 (한국 전통 리추얼 무드를 극대화하기 위해 로즈 골드/미색 톤 적용) */}
      <div className="absolute inset-0 pointer-events-none z-10 opacity-40">
        <PetalsCanvas color="#C5A059" density={40} />
      </div>

      {/* 전통 한지 느낌의 은은한 배경 질감 레이어 */}
      <div className="absolute inset-0 bg-radial-at-t from-[#FAF7F2] via-[#F4EDE2] to-[#EFE6D8] -z-10" />
      <div className="absolute top-[15%] left-[-10%] w-[60%] h-[60%] bg-[#F2EAE0] rounded-full blur-[120px] opacity-70 -z-10" />
      <div className="absolute bottom-[20%] right-[-10%] w-[70%] h-[70%] bg-[#EAE0D0] rounded-full blur-[140px] opacity-80 -z-10" />

      {/* 상단 네비게이션바와의 조화를 위한 어두운 그라데이션 */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#180010]/95 via-[#180010]/40 to-transparent pointer-events-none z-10" />

      <Navigation />

      {/* 본문 콘텐츠 랩퍼 */}
      <div className="relative z-20 pt-40 pb-24">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          
          {/* 1. 상단 히어로 섹션 */}
          <section className="mb-24">
            <Reveal delayMs={100}>
              <div className="grid md:grid-cols-12 gap-10 items-center">
                {/* 왼쪽 텍스트 정보 */}
                <div className="md:col-span-7 space-y-6 text-left">
                  <span 
                    className="inline-block px-4 py-1.5 rounded-full text-xs font-serif tracking-[0.25em] text-[#C5A059] bg-[#4A0E17]/5 border border-[#C5A059]/30"
                  >
                    再會秘方
                  </span>
                  
                  <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#4A0E17] leading-tight break-keep">
                    재회비방
                  </h1>

                  <div className="space-y-2">
                    <p className="text-lg md:text-2xl font-serif font-semibold text-[#8C1D24] leading-snug">
                      끊어진 인연을 다시 잇는 무의식의 붉은 실
                    </p>
                    <p className="text-base md:text-lg text-[#5A4F46] font-medium leading-relaxed break-keep">
                      붙잡는 법이 아니라, 다시 선택받을 수 있는 상태로 돌아오는 법.
                    </p>
                  </div>

                  <div className="text-sm md:text-base text-[#5A4F46] leading-relaxed space-y-3 pt-2 border-t border-[#C5A059]/20 break-keep">
                    <p>
                      이 전자책은 헤어진 상대에게 무작정 연락하는 방법을 알려주는 책이 아닙니다.
                    </p>
                    <p>
                      이별 후 무너진 감정, 흐트러진 프레임, 반복되는 집착의 패턴을 정리하고 다시 나의 중심을 회복하기 위한 실전 재회 전략서입니다.
                    </p>
                  </div>

                  {/* 포인트 강조 박스 */}
                  <div className="p-6 rounded-2xl bg-[#4A0E17]/[0.03] border-l-4 border-[#8C1D24] shadow-sm my-6 break-keep">
                    <p className="text-base md:text-lg text-[#4A0E17] font-bold leading-relaxed">
                      "재회는 감정만으로 이루어지지 않습니다.<br/>
                      상태가 바뀌어야 흐름이 바뀝니다."
                    </p>
                  </div>

                  <CTAButton text="재회비방 구매하기" />
                </div>

                {/* 오른쪽 히어로 비주얼 (r1.webp) */}
                <div className="md:col-span-5 flex justify-center">
                  <div className="relative p-3 bg-white/75 rounded-2xl border border-[#C5A059]/30 shadow-[0_12px_40px_rgba(74,14,23,0.08)] max-w-sm w-full transition-transform duration-500 hover:scale-[1.02]">
                    {/* 전통 액자 틀 느낌의 안쪽 테두리 */}
                    <div className="absolute inset-4 border border-[#C5A059]/15 pointer-events-none rounded-lg" />
                    <img 
                      src="/image/reunion-secret/r1.webp" 
                      alt="재회비방 전자책을 상징하는 버건디 실크와 붉은 실 이미지"
                      className="w-full h-auto rounded-lg object-cover"
                    />
                  </div>
                </div>
              </div>
            </Reveal>
          </section>

          <RedThreadDivider />

          {/* 2. 공감 섹션 */}
          <section className="mb-24">
            <Reveal>
              <div className="grid md:grid-cols-12 gap-12 items-center">
                {/* 왼쪽 이미지 (r2.webp) */}
                <div className="md:col-span-5 order-last md:order-first flex justify-center">
                  <div className="relative p-3 bg-white/75 rounded-2xl border border-[#C5A059]/30 shadow-[0_12px_40px_rgba(74,14,23,0.08)] max-w-sm w-full transition-transform duration-500 hover:scale-[1.02]">
                    <div className="absolute inset-4 border border-[#C5A059]/15 pointer-events-none rounded-lg" />
                    <img 
                      src="/image/reunion-secret/r2.webp" 
                      alt="이별 후 보내지 못한 연락과 기다림을 상징하는 휴대폰 이미지"
                      className="w-full h-auto rounded-lg object-cover"
                    />
                  </div>
                </div>

                {/* 오른쪽 공감 문구 */}
                <div className="md:col-span-7 space-y-6 text-left break-keep">
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#4A0E17] leading-snug">
                    혹시 지금 이런 마음인가요?
                  </h2>

                  {/* 질문 독백 카드 리스트 */}
                  <div className="space-y-3.5 my-6">
                    {[
                      "밤마다 휴대폰을 확인하고,",
                      "보내지 못한 문장을 수십 번씩 고쳐 쓰고,",
                      "상대의 SNS를 보며 작은 흔적 하나에 무너지고 있나요?",
                      "“내가 한 번만 더 잘 말하면 돌아오지 않을까?”",
                      "“지금 연락하지 않으면 정말 끝나는 건 아닐까?”",
                      "“차단을 풀게 만들 방법은 없을까?”",
                      "“상대는 정말 아무렇지 않은 걸까?”"
                    ].map((sentence, idx) => (
                      <div 
                        key={idx} 
                        className="px-5 py-3 rounded-xl bg-white/40 border border-[#C5A059]/15 text-sm md:text-base text-[#5A4F46] font-medium italic"
                      >
                        {sentence}
                      </div>
                    ))}
                  </div>

                  <div className="text-base text-[#5A4F46] leading-relaxed space-y-4 font-light">
                    <p>
                      하지만 이별 직후의 간절함은 때로 상대에게 사랑이 아니라 부담으로 전달됩니다.
                    </p>
                    <p className="font-medium text-[#4A0E17]">
                      재회에서 가장 먼저 필요한 것은 더 많은 연락이 아니라, 무너진 나의 상태를 멈추고 다시 세우는 일입니다.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </section>

          <RedThreadDivider />

          {/* 3. 이 책의 핵심 메시지 */}
          <section className="mb-24 text-center">
            <Reveal>
              <div className="space-y-6 max-w-3xl mx-auto mb-10">
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#8C1D24] tracking-tight">
                  간절함은 닿지 않습니다.
                </h2>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#4A0E17] tracking-tight">
                  닿는 것은 오직 ‘상태’입니다.
                </h2>
              </div>

              {/* 와이드 이미지 (r3.webp) */}
              <div className="relative p-3 bg-white/75 rounded-3xl border border-[#C5A059]/30 shadow-[0_16px_48px_rgba(74,14,23,0.06)] max-w-4xl mx-auto mb-12 overflow-hidden transition-transform duration-700 hover:scale-[1.01]">
                <div className="absolute inset-4 border border-[#C5A059]/15 pointer-events-none rounded-2xl" />
                <img 
                  src="/image/reunion-secret/r3.webp" 
                  alt="끊어진 인연이 다시 이어지는 것을 상징하는 붉은 실과 금빛 나비 이미지"
                  className="w-full h-auto rounded-2xl object-cover max-h-[360px]"
                />
              </div>

              <div className="max-w-3xl mx-auto text-left md:text-center text-[#5A4F46] leading-relaxed space-y-4 break-keep font-light text-base md:text-lg">
                <p className="font-semibold text-[#4A0E17]">
                  재회비방은 상대를 조종하는 책이 아닙니다. 상대에게 매달리는 법을 알려주는 책도 아닙니다.
                </p>
                <p>
                  이 책은 이별 후 가장 위험한 시기, 내가 어떤 행동을 멈춰야 하는지, 어떤 공백기를 가져야 하는지, 어떤 이미지와 말투로 다시 나타나야 하는지, 어떤 순서로 관계의 흐름을 회복해야 하는지를 알려줍니다.
                </p>
                <p>
                  재회는 운에만 맡기는 일이 아닙니다. 원인을 진단하고, 침묵을 설계하고, 나의 에너지를 회수한 뒤 다시 접근의 타이밍을 잡는 과정입니다.
                </p>
              </div>
            </Reveal>
          </section>

          <RedThreadDivider />

          {/* 4. 재회비방 5단계 흐름 */}
          <section className="mb-24">
            <Reveal>
              <div className="text-center mb-12">
                <span className="text-[#C5A059] font-serif tracking-[0.2em] text-sm uppercase">Process</span>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#4A0E17] mt-2">
                  재회비방 5단계 흐름
                </h2>
              </div>

              {/* 5단계 이미지 배치 (r4.webp) */}
              <div className="relative p-3 bg-white/75 rounded-3xl border border-[#C5A059]/30 shadow-[0_12px_40px_rgba(74,14,23,0.06)] max-w-3xl mx-auto mb-16 transition-transform duration-500 hover:scale-[1.01]">
                <div className="absolute inset-4 border border-[#C5A059]/15 pointer-events-none rounded-2xl" />
                <img 
                  src="/image/reunion-secret/r4.webp" 
                  alt="재회비방의 5단계 흐름을 보여주는 전통 한국풍 인포그래픽"
                  className="w-full h-auto rounded-2xl object-cover"
                />
              </div>

              {/* 단계별 텍스트 카드 */}
              <div className="grid md:grid-cols-5 gap-6 max-w-5xl mx-auto text-left">
                {[
                  { step: "1단계", title: "파동의 진단", desc: "왜 이별이 일어났는지 진단합니다. 권태기, 신뢰 상실, 집착, 현실적 문제 등 원인에 따라 전략은 달라집니다." },
                  { step: "2단계", title: "비방의 준비", desc: "재회에서 가장 어려운 공백기와 침묵을 다룹니다. 아무것도 하지 않는 게 아닌 나의 프레임을 다시 세우는 시간입니다." },
                  { step: "3단계", title: "실전 재회술", desc: "언제 어떤 방식으로 어떤 메시지를 보내야 하는지 정리합니다. 무의식에 부담이 아닌 여운을 남깁니다." },
                  { step: "4단계", title: "재회의 완성", desc: "다시 만났을 때 흔들리지 않는 태도, 첫 대면의 기류, 상대가 던지는 테스트를 슬기롭게 통과하는 법을 배웁니다." },
                  { step: "5단계", title: "완성된 나", desc: "재회 이후에도 같은 문제를 반복하지 않기 위해 나의 내면 감정과 관계 패턴을 단단하게 재설계합니다." }
                ].map((item, idx) => (
                  <div 
                    key={idx}
                    className="relative p-6 bg-white/60 rounded-2xl border border-[#C5A059]/20 shadow-sm hover:border-[#8C1D24]/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <span className="block font-serif text-xs text-[#8C1D24] font-semibold tracking-wider mb-2">
                        {item.step}
                      </span>
                      <h3 className="text-lg font-serif font-bold text-[#4A0E17] mb-3">
                        {item.title}
                      </h3>
                      <p className="text-xs md:text-sm text-[#5A4F46] leading-relaxed break-keep">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </section>

          <RedThreadDivider />

          {/* 5. 이런 분께 추천합니다 */}
          <section className="mb-24">
            <Reveal>
              <div className="p-8 md:p-12 rounded-3xl bg-white/50 border border-[#C5A059]/30 shadow-[0_16px_48px_rgba(74,14,23,0.04)] max-w-4xl mx-auto">
                <div className="text-center mb-10">
                  <span className="text-[#C5A059] font-serif tracking-[0.2em] text-sm uppercase">Recommendation</span>
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#4A0E17] mt-2">
                    이런 분께 추천합니다
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6 text-left max-w-3xl mx-auto my-8">
                  {[
                    "이별 후 상대에게 연락하고 싶지만, 어떤 말을 해야 할지 몰라 불안한 분",
                    "상대가 차단했거나 읽씹, 안읽씹을 반복해 더 이상 어떻게 해야 할지 막막한 분",
                    "무작정 기다리는 것이 맞는지, 지금 연락해야 하는지 판단이 어려운 분",
                    "권태기, 반복 다툼, 집착, 신뢰 상실, 환승 의심 등 이별 원인을 제대로 진단하고 싶은 분",
                    "재회를 원하지만 예전처럼 매달리는 내가 되고 싶지는 않은 분",
                    "상대를 되찾기 전에 먼저 무너진 나의 중심을 되찾고 싶은 분"
                  ].map((text, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-start gap-3 p-4 bg-white/30 rounded-xl border border-[#C5A059]/10 hover:border-[#C5A059]/30 transition-colors"
                    >
                      <div className="w-5 h-5 rounded-full bg-[#4A0E17]/5 flex items-center justify-center shrink-0 mt-0.5 border border-[#8C1D24]/30">
                        <Check className="w-3.5 h-3.5 text-[#8C1D24]" />
                      </div>
                      <span className="text-sm md:text-base text-[#5A4F46] font-medium leading-relaxed break-keep">
                        {text}
                      </span>
                    </div>
                  ))}
                </div>

                <CTAButton text="재회비방 구매하기" />
              </div>
            </Reveal>
          </section>

          <RedThreadDivider />

          {/* 6. 이 책에서 다루는 내용 */}
          <section className="mb-24">
            <Reveal>
              <div className="grid md:grid-cols-12 gap-12 items-center">
                {/* 왼쪽 목업 이미지 (r5.webp) */}
                <div className="md:col-span-5 flex justify-center">
                  <div className="relative p-3 bg-white/75 rounded-2xl border border-[#C5A059]/30 shadow-[0_12px_40px_rgba(74,14,23,0.08)] max-w-sm w-full transition-transform duration-500 hover:scale-[1.02]">
                    <div className="absolute inset-4 border border-[#C5A059]/15 pointer-events-none rounded-lg" />
                    <img 
                      src="/image/reunion-secret/r5.webp" 
                      alt="버건디와 샴페인 골드 장식의 재회비방 전자책 목업 이미지"
                      className="w-full h-auto rounded-lg object-cover"
                    />
                  </div>
                </div>

                {/* 오른쪽 내용 구성 */}
                <div className="md:col-span-7 space-y-6 text-left break-keep">
                  <div className="space-y-1">
                    <span className="text-[#C5A059] font-serif tracking-[0.2em] text-sm uppercase">Curriculum</span>
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#4A0E17]">
                      이 책에서 다루는 내용
                    </h2>
                    <p className="text-sm md:text-base text-[#5A4F46] font-light">
                      재회비방은 총 5부 구성으로 이루어져 있습니다.
                    </p>
                  </div>

                  {/* 5부 구성 리스트 */}
                  <div className="space-y-4">
                    {[
                      { part: "1부. 파동의 진단", content: "이별 원인 분석, 에너지 시소의 법칙, 가치 하락형과 신뢰 하락형 구분, 집착의 심리학" },
                      { part: "2부. 비방의 준비", content: "대침묵, 공백기 황금 공식, 끈 자르기 의식, 왕좌의 탈환, 이미지 리셋" },
                      { part: "3부. 실전 재회술", content: "미완성 과제의 저주, 인셉션 문자, 가능성 제시의 기술, 역반응 대처법" },
                      { part: "4부. 재회의 완성", content: "첫 대면 시나리오, 테스트 통과하기, 카톡 차단 케이스 해독, 재회 이후 관계 재설계" },
                      { part: "5부. 완성된 나", content: "자기 에너지 각성, 감정 정화 의식, 나를 선택하는 법" }
                    ].map((item, idx) => (
                      <div 
                        key={idx}
                        className="p-5 rounded-2xl bg-white/50 border border-[#C5A059]/25 hover:border-[#8C1D24]/30 shadow-sm transition-all duration-300"
                      >
                        <h3 className="font-serif font-bold text-[#4A0E17] text-base md:text-lg mb-2 flex items-center gap-2">
                          <span className="inline-block w-1.5 h-4 bg-[#8C1D24] rounded-full" />
                          {item.part}
                        </h3>
                        <p className="text-xs md:text-sm text-[#5A4F46] leading-relaxed pl-3.5 font-light">
                          {item.content}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </section>

          <RedThreadDivider />

          {/* 7. 실전 부록 포함 */}
          <section className="mb-24">
            <Reveal>
              <div className="grid md:grid-cols-12 gap-12 items-center">
                {/* 왼쪽 설명글 */}
                <div className="md:col-span-7 space-y-6 text-left break-keep">
                  <div className="space-y-1">
                    <span className="text-[#C5A059] font-serif tracking-[0.2em] text-sm uppercase">Bonus Tools</span>
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#4A0E17]">
                      실전 부록 포함
                    </h2>
                    <p className="text-sm md:text-base text-[#5A4F46] font-light">
                      재회비방에는 읽고 끝나는 이론만 담겨 있지 않습니다.<br/>
                      바로 점검하고 적용할 수 있는 실전 도구를 함께 담았습니다.
                    </p>
                  </div>

                  {/* 9가지 부록 리스트 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 py-4">
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
                        className="flex items-center gap-3 p-3 bg-white/30 rounded-xl border border-[#C5A059]/10"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#8C1D24] shrink-0" />
                        <span className="text-sm text-[#5A4F46] font-medium">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 오른쪽 이미지 (r6.webp) */}
                <div className="md:col-span-5 flex justify-center">
                  <div className="relative p-3 bg-white/75 rounded-2xl border border-[#C5A059]/30 shadow-[0_12px_40px_rgba(74,14,23,0.08)] max-w-sm w-full transition-transform duration-500 hover:scale-[1.02]">
                    <div className="absolute inset-4 border border-[#C5A059]/15 pointer-events-none rounded-lg" />
                    <img 
                      src="/image/reunion-secret/r6.webp" 
                      alt="재회비방 실전 부록과 체크리스트를 상징하는 워크북 이미지"
                      className="w-full h-auto rounded-lg object-cover"
                    />
                  </div>
                </div>
              </div>
            </Reveal>
          </section>

          <RedThreadDivider />

          {/* 8. 구매 후 받는 것 */}
          <section className="mb-24 text-center">
            <Reveal>
              <div className="mb-12">
                <span className="text-[#C5A059] font-serif tracking-[0.2em] text-sm uppercase">Package</span>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#4A0E17] mt-2">
                  구매 후 받는 것
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto text-left">
                {[
                  {
                    icon: <BookOpen className="w-8 h-8 text-[#8C1D24]" />,
                    title: "재회비방 PDF 전자책",
                    desc: "끊어진 관계를 다시 바라보고 중심을 잡는 실전 재회 전략서"
                  },
                  {
                    icon: <FileText className="w-8 h-8 text-[#8C1D24]" />,
                    title: "실전 체크리스트 & 부록",
                    desc: "내 상황을 정확히 진단하고, 공백기와 접근 타이밍을 점검할 수 있는 구성"
                  },
                  {
                    icon: <Smartphone className="w-8 h-8 text-[#8C1D24]" />,
                    title: "모바일·PC 즉시 열람",
                    desc: "휴대폰, 태블릿, 노트북 어디서든 언제든 편하게 확인 가능한 모바일 최적화 PDF"
                  }
                ].map((item, idx) => (
                  <div 
                    key={idx}
                    className="p-8 bg-white/60 rounded-2xl border border-[#C5A059]/30 shadow-sm flex flex-col justify-between hover:border-[#8C1D24]/30 transition-all duration-300"
                  >
                    <div>
                      <div className="mb-6 p-3 bg-[#4A0E17]/5 rounded-xl inline-block border border-[#C5A059]/20">
                        {item.icon}
                      </div>
                      <h3 className="text-lg font-serif font-bold text-[#4A0E17] mb-3">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[#5A4F46] leading-relaxed font-light break-keep">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </section>

          <RedThreadDivider />

          {/* 추가 섹션: 생생한 재회 후기 (사용자 신뢰 강화) */}
          <section className="mb-24">
            <Reveal>
              <div className="text-center mb-12">
                <span className="text-[#C5A059] font-serif tracking-[0.2em] text-sm uppercase">Reviews</span>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#4A0E17] mt-2">
                  진실된 재회 후기
                </h2>
              </div>
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto text-left">
                {reviews.map((review) => (
                  <div 
                    key={review.id} 
                    className="p-6 bg-white/50 rounded-2xl border border-[#C5A059]/25 flex flex-col justify-between shadow-sm hover:border-[#8C1D24]/30 transition-all duration-300"
                  >
                    <div className="space-y-4">
                      <div className="flex gap-0.5 text-[#C5A059]">
                        {[...Array(review.rating)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 fill-currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-sm text-[#5A4F46] leading-relaxed italic break-keep font-light">
                        "{review.content}"
                      </p>
                    </div>
                    <div className="text-right mt-6 border-t border-[#C5A059]/10 pt-3">
                      <span className="text-xs text-[#8C1D24] font-medium">{review.author}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </section>

          <RedThreadDivider />

          {/* 추가 섹션: 자주 묻는 질문 FAQ */}
          <section className="mb-24">
            <Reveal>
              <div className="text-center mb-12">
                <span className="text-[#C5A059] font-serif tracking-[0.2em] text-sm uppercase">FAQ</span>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#4A0E17] mt-2">
                  자주 묻는 질문
                </h2>
              </div>
              <div className="space-y-4 max-w-3xl mx-auto text-left">
                {faqs.map((faq, idx) => (
                  <details 
                    key={idx} 
                    className="p-6 bg-white/50 rounded-2xl border border-[#C5A059]/25 group overflow-hidden [&_summary::-webkit-details-marker]:hidden transition-all duration-300 hover:border-[#8C1D24]/20"
                  >
                    <summary className="cursor-pointer list-none flex justify-between items-center text-[#4A0E17] font-serif font-bold text-base md:text-lg focus:outline-none">
                      <span className="flex items-center gap-3">
                        <span className="text-[#8C1D24]">Q.</span>
                        {faq.q}
                      </span>
                      <span className="transition-transform duration-300 group-open:rotate-180 text-[#C5A059]">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </summary>
                    <div className="mt-4 pt-4 border-t border-[#C5A059]/10 text-sm md:text-base text-[#5A4F46] leading-relaxed font-light break-keep">
                      <span className="font-semibold text-[#8C1D24] mr-1">A.</span> {faq.a}
                    </div>
                  </details>
                ))}
              </div>
            </Reveal>
          </section>

          <RedThreadDivider />

          {/* 9. 안내사항 */}
          <section className="mb-24">
            <Reveal>
              <div className="p-8 md:p-12 rounded-3xl bg-[#F7EFE5] border border-[#C5A059]/20 max-w-4xl mx-auto text-left break-keep">
                <h3 className="text-lg md:text-xl font-serif font-bold text-[#4A0E17] mb-6 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-[#8C1D24]" />
                  구매 전 확인사항
                </h3>
                
                <div className="space-y-6 text-xs md:text-sm text-[#5A4F46] leading-relaxed font-light">
                  <div className="p-4 bg-white/40 rounded-xl border border-[#C5A059]/10 mb-4">
                    <p className="font-medium text-[#4A0E17]">
                      이 전자책은 특정한 결과(재회)를 보장하는 상품이 아닙니다.
                    </p>
                    <p className="mt-1">
                      모든 관계에는 각자의 상황과 변수가 있으며, 재회 가능성은 이별 원인, 현재 상황, 상대의 상태, 나의 변화 정도에 따라 달라질 수 있습니다. 재회비방은 상대를 억지로 붙잡기 위한 책이 아니라, 이별 후 무너진 나의 상태를 정리하고 관계의 흐름을 더 현명하게 바라보기 위한 실전 가이드입니다.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 pt-2">
                    <div>
                      <h4 className="text-sm font-bold text-[#8C1D24] mb-2 flex items-center gap-1.5">
                        환불 가능 안내
                      </h4>
                      <ul className="space-y-1.5 text-xs text-[#6B5E55]">
                        <li>• 중복 결제가 발생한 경우</li>
                        <li>• 시스템 오류로 정상 다운로드가 불가능한 경우</li>
                        <li>• 결제 후 PDF 파일 자체에 심각한 에러가 있는 경우</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-bold text-[#4A0E17] mb-2 flex items-center gap-1.5">
                        환불 제한 안내
                      </h4>
                      <p className="text-xs text-[#6B5E55]">
                        구매 후 PDF 파일 형태로 즉시 제공되는 디지털 콘텐츠 특성상, 파일 다운로드 또는 메일 발송 완료 후에는 단순 변심에 의한 환불이 제한될 수 있습니다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </section>

          {/* 10. 마지막 CTA */}
          <section className="relative rounded-3xl overflow-hidden shadow-[0_16px_48px_rgba(74,14,23,0.1)] border border-[#C5A059]/40">
            {/* 배경 이미지 (r7.webp) */}
            <div className="absolute inset-0 z-0">
              <img 
                src="/image/reunion-secret/r7.webp" 
                alt="재회비방 구매를 유도하는 붉은 실 매듭과 한지 배경 이미지"
                className="w-full h-full object-cover"
              />
              {/* 이미지 어둡게 처리하여 글자 잘 보이게 하는 버건디/블랙 레이어 */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#2B050B]/85 to-black/90 mix-blend-multiply" />
              <div className="absolute inset-0 bg-black/40" />
            </div>

            <div className="relative z-10 py-16 md:py-24 px-6 md:px-12 text-center max-w-3xl mx-auto space-y-8">
              <Reveal>
                <p className="text-base md:text-xl text-[#C5A059] font-serif tracking-wider">
                  지금 필요한 것은 한 번 더 매달리는 연락이 아닐 수 있습니다.
                </p>
                <h2 className="text-2xl md:text-4xl font-serif font-bold text-[#FAF7F2] leading-tight break-keep">
                  먼저 나의 상태를 바꾸고,<br/>
                  관계의 흐름을 다시 읽어야 합니다.
                </h2>
                
                {/* 장식 선 */}
                <div className="w-12 h-[1px] bg-[#C5A059] mx-auto my-4 opacity-60" />

                <p className="text-sm md:text-base text-[#EDE6DA] leading-relaxed max-w-xl mx-auto break-keep opacity-90 font-light">
                  끊어진 인연 앞에서 무너지고 있다면, 이제 감정이 아니라 전략으로 다시 나를 세워보세요.
                </p>

                <div className="pt-4">
                  <Link
                    href="/checkout?productId=reunion-secret-method"
                    className="relative inline-flex items-center justify-center px-12 py-5 rounded-full font-serif font-bold text-lg md:text-xl text-[#4A0E17] bg-[#C5A059] border border-[#FAF7F2]/30 shadow-[0_8px_30px_rgba(197,160,89,0.3)] hover:shadow-[0_8px_45px_rgba(255,255,255,0.4)] hover:scale-105 hover:bg-[#FAF7F2] transition-all duration-500 tracking-wider group overflow-hidden"
                  >
                    <span className="relative flex items-center gap-2">
                      재회비방 구매하기
                      <ChevronRight className="w-5 h-5 text-[#4A0E17] group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                </div>
              </Reveal>
            </div>
          </section>

        </div>
      </div>

      <Footer />
    </main>
  )
}
