'use client'

import React from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Reveal from '@/components/Reveal'
import GlobalBackground from '@/components/GlobalBackground'
import Link from 'next/link'
import Image from 'next/image'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { 
  Check, 
  BookOpen, 
  FileText, 
  Smartphone, 
  AlertCircle,
  ChevronRight
} from 'lucide-react'

export default function ReunionSecretPage() {
  useScrollAnimation()

  // 붉은 실 장식 구분선
  const RedThreadDivider = () => (
    <div className="flex items-center justify-center my-20 opacity-60">
      <div className="h-[1px] w-16 md:w-28 bg-gradient-to-r from-transparent to-[#8C1D24]" />
      <div className="mx-4 flex items-center justify-center">
        <svg className="w-5 h-5 text-[#8C1D24] animate-pulse" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C9.5 2 7.5 4 7.5 6.5C7.5 9 10 11 12 13C14 11 16.5 9 16.5 6.5C16.5 4 14.5 2 12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 13V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="12" cy="6.5" r="2" fill="currentColor" />
        </svg>
      </div>
      <div className="h-[1px] w-16 md:w-28 bg-gradient-to-l from-transparent to-[#8C1D24]" />
    </div>
  )

  // 공통 CTA 버튼
  const CTAButton = ({ text }: { text: string }) => (
    <div className="text-center my-6">
      <Link
        href="/checkout?productId=reunion-secret"
        className="btn-primary inline-flex items-center px-12 py-5 rounded-xl font-elegant font-bold text-lg md:text-xl hover:scale-105 transition-all duration-500 group"
        style={{
          background: 'linear-gradient(135deg, #4A0E17 0%, #2A0A14 100%)',
          border: '1px solid rgba(230, 190, 138, 0.5)',
          color: '#E6BE8A',
          boxShadow: '0 0 35px rgba(74, 14, 23, 0.35)'
        }}
      >
        <span className="relative z-10 flex items-center gap-2">
          {text}
          <ChevronRight className="w-5 h-5 text-[#E6BE8A] group-hover:translate-x-1 transition-transform" />
        </span>
      </Link>
    </div>
  )

  return (
    <main className="relative min-h-screen bg-[#0a0514] text-[#EDE6DA] font-sans selection:bg-[#4A0E17] selection:text-[#FAF7F2]">
      {/* 기존 백도화 템플릿의 다크 배경(GlobalBackground) 유지 */}
      <GlobalBackground src="/image/love-code-bg.png" brightCenter={false}>
        <Navigation />

        <div className="relative z-10 pt-44 pb-20">
          <div className="container-premium max-w-5xl mx-auto px-6 md:px-8">
            
            {/* 1. Hero Section (다른 제품처럼 중앙 정렬, 큰 이미지, 그 아래 글귀와 버튼 배치) */}
            <section className="text-center mb-28">
              <Reveal delayMs={100}>
                {/* 상단 라벨 */}
                <div className="mb-8">
                  <span className="inline-block px-5 py-1.5 rounded-full text-[10px] md:text-xs font-bold tracking-[0.25em] text-[#E6BE8A] uppercase"
                    style={{
                      background: 'rgba(74, 14, 23, 0.4)',
                      border: '1px solid rgba(230, 190, 138, 0.3)',
                    }}>
                    PREMIUM REUNION STRATEGY EBOOK
                  </span>
                </div>

                {/* 대제목 */}
                <h1 className="text-3xl md:text-5xl font-elegant font-bold mb-10 text-white leading-tight">
                  再會秘方 <span className="text-[#E6BE8A]">재회비방</span>
                </h1>

                {/* 큰 이미지 배치 (r1.webp, 16:9 비율) */}
                <div className="relative max-w-4xl mx-auto aspect-video mb-16 rounded-[30px] md:rounded-[40px] overflow-hidden border border-white/10 shadow-2xl group">
                  <Image 
                    src="/image/reunion-secret/r1.webp" 
                    alt="재회비방"
                    fill
                    className="object-cover transition-transform duration-[10000ms] group-hover:scale-110"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0514]/60 to-transparent"></div>
                </div>

                {/* 하단 서브카피, 설명 및 구매 버튼 */}
                <div className="max-w-2xl mx-auto space-y-6">
                  <p className="text-xl md:text-2xl font-elegant font-semibold text-[#BA8D7E] leading-snug break-keep">
                    끊어진 인연 앞에서 무너진 나를 다시 세우는 재회 비방서
                  </p>

                  <div className="text-sm md:text-base text-[#EDE6DA]/75 leading-relaxed space-y-3 pt-6 border-t border-white/5 break-keep">
                    <p>
                      재회비방은 헤어진 상대에게 무작정 연락하는 방법을 알려주는 책이 아닙니다.
                    </p>
                    <p>
                      이별 후 무너진 감정, 흐트러진 프레임, 반복되는 집착의 패턴을 정리하고 다시 나의 중심을 회복하기 위한 실전 재회 전략 전자책입니다.
                    </p>
                    <p className="font-semibold text-white">
                      재회는 감정만으로 이루어지지 않습니다. 상태가 바뀌어야 흐름이 바뀝니다.
                    </p>
                  </div>

                  <div className="pt-4">
                    <CTAButton text="재회비방 구매하기" />
                  </div>
                </div>
              </Reveal>
            </section>

            <RedThreadDivider />

            {/* 2. Product Overview Section */}
            <section className="mb-28">
              <Reveal>
                <div className="grid md:grid-cols-12 gap-12 items-center">
                  {/* 왼쪽 실제 전자책 목업 (r2.webp, 1:1) */}
                  <div className="md:col-span-5 flex justify-center">
                    <div className="relative w-full max-w-sm aspect-square overflow-hidden rounded-[30px] border border-[#C5A059]/30 shadow-2xl">
                      <Image 
                        src="/image/reunion-secret/r2.webp" 
                        alt="전자책 목업" 
                        fill 
                        className="object-cover" 
                      />
                    </div>
                  </div>

                  {/* 오른쪽 핵심 가치 및 6개 포인트 카드 */}
                  <div className="md:col-span-7 space-y-6 text-left break-keep">
                    <h2 className="text-2xl md:text-3xl font-elegant font-bold text-white leading-snug">
                      붙잡는 법이 아니라,<br/>
                      <span className="text-[#E6BE8A]">다시 선택받을 수 있는 상태</span>로 돌아오는 법
                    </h2>
                    <p className="text-sm md:text-base text-[#EDE6DA]/75 leading-relaxed font-light">
                      재회비방은 이별 후 가장 불안한 시기에 무엇을 멈추고, 무엇을 정리하고, 어떤 순서로 다시 움직여야 하는지를 알려주는 프리미엄 재회 전략 전자책입니다. 상대를 억지로 붙잡기 전에 먼저 나의 감정, 프레임, 연락 패턴, 공백기 전략을 차분하게 점검하도록 구성되어 있습니다.
                    </p>

                    {/* 포인트 카드 6개 (glass card 형태, 골드 라인, 버건디 아이콘) */}
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

            {/* 3. Recommended For Section */}
            <section className="mb-28">
              <Reveal>
                <div className="grid md:grid-cols-12 gap-12 items-center">
                  {/* 왼쪽 추천 리스트 (아이보리 한지 톤 카드, 버건디 체크) */}
                  <div className="md:col-span-7 space-y-8 text-left break-keep">
                    <h2 className="text-2xl md:text-3xl font-elegant font-bold text-white tracking-wide">
                      이런 분께 <span className="text-[#E6BE8A]">추천합니다</span>
                    </h2>

                    <div className="space-y-4">
                      {[
                        "이별 후 상대에게 연락하고 싶지만 어떤 말을 해야 할지 몰라 불안한 분",
                        "상대가 차단했거나 읽씹, 안읽씹을 반복해 어떻게 해야 할지 막막한 분",
                        "지금 연락해야 하는지, 더 기다려야 하는지 판단이 어려운 분",
                        "권태기, 반복 다툼, 집착, 신뢰 상실, 환승 의심 등 이별 원인을 제대로 진단하고 싶은 분",
                        "재회를 원하지만 예전처럼 매달리는 내가 되고 싶지는 않은 분",
                        "상대를 되찾기 전에 먼저 무너진 나의 중심을 되찾고 싶은 분"
                      ].map((text, idx) => (
                        <div 
                          key={idx}
                          className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#C5A059]/30 shadow-md flex items-start gap-4 hover:scale-[1.01] transition-transform"
                        >
                          <div className="w-5.5 h-5.5 rounded-full bg-[#4A0E17]/10 flex items-center justify-center shrink-0 mt-0.5 border border-[#8C1D24]/30">
                            <Check className="w-3.5 h-3.5 text-[#8C1D24]" />
                          </div>
                          <p className="text-sm md:text-base text-[#3D3530] font-medium leading-relaxed">
                            {text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 오른쪽 세로 이미지 (r3.webp, 3:4) */}
                  <div className="md:col-span-5 flex justify-center">
                    <div className="relative w-full max-w-sm aspect-[3/4] overflow-hidden rounded-[30px] border border-white/10 shadow-2xl">
                      <Image 
                        src="/image/reunion-secret/r3.webp" 
                        alt="Recommended" 
                        fill 
                        className="object-cover" 
                      />
                    </div>
                  </div>
                </div>
              </Reveal>
            </section>

            <RedThreadDivider />

            {/* 4. Formula / Content Section */}
            <section className="mb-28 text-center">
              <Reveal>
                <div className="max-w-3xl mx-auto space-y-4 mb-10">
                  <span className="text-[#E6BE8A] font-elegant tracking-[0.2em] text-xs uppercase">5-Step Strategy</span>
                  <h2 className="text-3xl md:text-4xl font-elegant font-bold text-white tracking-widest">
                    재회비방 5단계 흐름
                  </h2>
                  <p className="text-sm md:text-base text-[#EDE6DA]/75 leading-relaxed break-keep font-light max-w-2xl mx-auto">
                    재회비방은 감정적으로 흔들리는 상태에서 무작정 연락을 시도하지 않도록, 이별 후 필요한 과정을 5단계 흐름으로 정리합니다. 상대의 마음을 단정하거나 조종하려는 방식이 아니라, 나의 상태를 회복하고 관계의 구조를 다시 바라보는 방식으로 구성되어 있습니다.
                  </p>
                </div>

                {/* 중앙 16:9 배경/인포그래픽 이미지 (r4.webp) */}
                <div className="max-w-4xl mx-auto mb-12">
                  <div className="relative aspect-video rounded-[30px] overflow-hidden border border-white/10 shadow-xl group">
                    <Image 
                      src="/image/reunion-secret/r4.webp" 
                      alt="재회비방 5단계 인포그래픽" 
                      fill 
                      className="object-cover" 
                    />
                  </div>
                </div>

                {/* 5단계 상세 설명 카드 */}
                <div className="grid md:grid-cols-5 gap-4 text-left max-w-5xl mx-auto">
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

            {/* 5. Premium Product Section */}
            <section className="mb-28">
              <Reveal>
                <div className="grid md:grid-cols-12 gap-12 items-center">
                  {/* 왼쪽 이미지 (r5.webp, 4:5) */}
                  <div className="md:col-span-5 flex justify-center">
                    <div className="relative w-full max-w-sm aspect-[4/5] overflow-hidden rounded-[30px] border border-white/10 shadow-2xl">
                      <Image 
                        src="/image/reunion-secret/r5.webp" 
                        alt="실전 재회 노트 번들" 
                        fill 
                        className="object-cover" 
                      />
                    </div>
                  </div>

                  {/* 오른쪽 부록 리스트 (골드 경계선, 버건디 체크) */}
                  <div className="md:col-span-7 space-y-6 text-left break-keep">
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

                    {/* 부록 9종 리스트 (한지 톤 카드) */}
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

            {/* 6. How To Use Section */}
            <section className="mb-28">
              <Reveal>
                <div className="gungjung-glass p-8 md:p-12 border-[#C5A059]/20 bg-gradient-to-br from-white/[0.02] to-transparent text-left max-w-4xl mx-auto break-keep">
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

                  {/* 주의 문구 */}
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

            {/* 7. Notice Section */}
            <section className="mb-28">
              <Reveal>
                <div className="gungjung-glass p-8 md:p-12 border-white/5 text-left max-w-4xl mx-auto break-keep">
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

            {/* 8. Final CTA Section */}
            <section className="relative aspect-[16/9] md:aspect-video overflow-hidden rounded-[40px] mb-20 group border border-[#C5A059]/40 shadow-2xl">
              {/* r6.webp 배경 */}
              <div className="absolute inset-0 z-0">
                <Image 
                  src="/image/reunion-secret/r6.webp" 
                  alt="Final CTA Background" 
                  fill 
                  className="object-cover transition-transform duration-[10000ms] group-hover:scale-110" 
                />
                {/* 텍스트 가독성을 위한 버건디 반투명 오버레이 필터 */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0514] via-[#4A0E17]/70 to-black/80 mix-blend-multiply" />
                <div className="absolute inset-0 bg-[#0a0514]/30" />
              </div>

              {/* 중앙 정보 및 CTA 3 버튼 */}
              <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 md:px-10 text-center max-w-3xl mx-auto space-y-6 md:space-y-8 break-keep">
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
