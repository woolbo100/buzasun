'use client'

import React from 'react'
import Reveal from '@/components/Reveal'
import { PlayCircle, MessageSquare, BookOpen, Sparkles } from 'lucide-react'

interface ComparisonColumn {
  id: string
  title: string
  subtitle: string
  icon: React.ReactNode
  isHighlighted?: boolean
  startingPoint: string
  coreQuestion: string
  mainValue: string
}

const comparisonData: ComparisonColumn[] = [
  {
    id: 'dating-content',
    title: '연애 콘텐츠',
    subtitle: 'DATING CONTENT',
    icon: <PlayCircle size={26} className="text-[#A89BBF]" />,
    isHighlighted: false,
    startingPoint: '보편적 연애 전략',
    coreQuestion: '어떻게 연애할까?',
    mainValue: '연애 정보와 조언'
  },
  {
    id: 'counseling',
    title: '일반 상담',
    subtitle: 'COUNSELING',
    icon: <MessageSquare size={26} className="text-[#A89BBF]" />,
    isHighlighted: false,
    startingPoint: '현재의 고민',
    coreQuestion: '지금 무엇이 힘든가?',
    mainValue: '정서적 이해와 문제 해결'
  },
  {
    id: 'traditional-saju',
    title: '전통 사주',
    subtitle: 'TRADITIONAL SAJU',
    icon: <BookOpen size={26} className="text-[#A89BBF]" />,
    isHighlighted: false,
    startingPoint: '타고난 명리 구조',
    coreQuestion: '어떤 운의 흐름인가?',
    mainValue: '전통적 운명 해석'
  },
  {
    id: 'baekdohwa',
    title: '백도화',
    subtitle: 'BAEKDOHWA',
    icon: <Sparkles size={26} className="text-[var(--accent-gold)]" />,
    isHighlighted: true,
    startingPoint: '선천코드와 반복 패턴',
    coreQuestion: '나는 왜 이런 사랑을 반복할까?',
    mainValue: '개인별 자기이해와 관계 전략'
  }
]

export default function FourWayComparisonSection() {
  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 relative w-full">
      <div className="max-w-[1280px] mx-auto w-full">
        {/* 영문 소제목 */}
        <Reveal delayMs={100}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-[1px] w-8 bg-[var(--accent-gold)] opacity-40" />
            <span className="text-xs md:text-sm font-elegant tracking-[0.25em] text-[var(--accent-gold)] uppercase opacity-80">
              A DIFFERENT PERSPECTIVE
            </span>
            <span className="h-[1px] w-8 bg-[var(--accent-gold)] opacity-40" />
          </div>
        </Reveal>

        {/* 헤드라인 및 서브카피 */}
        <Reveal delayMs={150}>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-elegant font-bold text-[#F5F5F5] mb-4 leading-snug">
              같은 사랑, 서로 다른 접근법
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-[#EDE6DA] opacity-85 font-light leading-relaxed">
              사랑과 관계를 이해하는 다양한 방법.<br className="sm:hidden" />{' '}
              백도화는 나의 선천코드에서 시작합니다.
            </p>
          </div>
        </Reveal>

        {/* =========================================================================
            PC 및 태블릿 (lg 이상): 품격 있는 5열 비교 매트릭스 카드 (1280px 최적화)
            ========================================================================= */}
        <Reveal delayMs={250}>
          <div className="hidden lg:grid lg:grid-cols-5 gap-4 items-stretch w-full">
            {/* 1열: 구분 레이블 열 */}
            <div className="flex flex-col justify-between py-6 px-4 rounded-2xl bg-[rgba(26,15,35,0.3)] border border-[rgba(216,191,163,0.1)]">
              {/* 상단 헤더 빈 공간 맞춤 */}
              <div className="h-[120px] flex flex-col justify-end pb-4 border-b border-[rgba(216,191,163,0.12)]">
                <span className="text-xs font-elegant font-bold tracking-widest text-[#A89BBF] uppercase opacity-70">
                  CRITERIA
                </span>
                <span className="text-lg font-elegant font-semibold text-[#EDE6DA]">
                  구분 항목
                </span>
              </div>

              {/* 구분 항목 1: 출발점 */}
              <div className="flex-1 flex flex-col justify-center py-6 border-b border-[rgba(216,191,163,0.12)]">
                <span className="text-xs font-mono text-[#A89BBF] opacity-60 uppercase mb-1">
                  01
                </span>
                <span className="text-base font-medium text-[#EDE6DA]">
                  출발점
                </span>
              </div>

              {/* 구분 항목 2: 핵심 질문 */}
              <div className="flex-1 flex flex-col justify-center py-6 border-b border-[rgba(216,191,163,0.12)]">
                <span className="text-xs font-mono text-[#A89BBF] opacity-60 uppercase mb-1">
                  02
                </span>
                <span className="text-base font-medium text-[#EDE6DA]">
                  핵심 질문
                </span>
              </div>

              {/* 구분 항목 3: 주요 가치 */}
              <div className="flex-1 flex flex-col justify-center py-6">
                <span className="text-xs font-mono text-[#A89BBF] opacity-60 uppercase mb-1">
                  03
                </span>
                <span className="text-base font-medium text-[#EDE6DA]">
                  주요 가치
                </span>
              </div>
            </div>

            {/* 2~5열: 4개 비교 대상 열 */}
            {comparisonData.map((col) => {
              const isBd = col.isHighlighted

              return (
                <div
                  key={col.id}
                  className={`flex flex-col justify-between rounded-2xl p-6 transition-all duration-300 relative ${
                    isBd
                      ? 'bg-gradient-to-b from-[rgba(78,20,36,0.65)] via-[rgba(62,15,31,0.7)] to-[rgba(45,15,25,0.65)] border-2 border-[var(--accent-gold)] shadow-[0_16px_48px_rgba(0,0,0,0.6)] lg:-translate-y-2'
                      : 'bg-[rgba(32,22,30,0.55)] border border-[rgba(216,191,163,0.14)] hover:border-[rgba(216,191,163,0.25)]'
                  }`}
                >
                  {/* 백도화 강조 뱃지 */}
                  {isBd && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[var(--accent-gold)] text-[#1A0A16] text-[11px] font-bold tracking-wider uppercase shadow-md">
                      선천코드 기반
                    </div>
                  )}

                  {/* 상단 열 헤더: 아이콘 + 제목 */}
                  <div
                    className={`h-[120px] flex flex-col items-center justify-center text-center pb-4 border-b ${
                      isBd
                        ? 'border-[rgba(216,191,163,0.3)]'
                        : 'border-[rgba(216,191,163,0.12)]'
                    }`}
                  >
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center mb-2.5 ${
                        isBd
                          ? 'bg-[rgba(212,178,167,0.12)] border border-[rgba(212,178,167,0.35)]'
                          : 'bg-[rgba(255,255,255,0.04)] border border-[rgba(216,191,163,0.12)]'
                      }`}
                    >
                      {col.icon}
                    </div>
                    <span
                      className={`text-[10px] font-elegant font-semibold tracking-widest uppercase mb-0.5 ${
                        isBd ? 'text-[var(--accent-gold)]' : 'text-[#A89BBF]'
                      }`}
                    >
                      {col.subtitle}
                    </span>
                    <h3
                      className={`text-lg font-elegant font-bold ${
                        isBd ? 'text-[var(--accent-gold)] text-xl' : 'text-[#EDE6DA]'
                      }`}
                    >
                      {col.title}
                    </h3>
                  </div>

                  {/* 항목 1: 출발점 */}
                  <div
                    className={`flex-1 flex flex-col items-center justify-center text-center py-6 px-2 border-b ${
                      isBd
                        ? 'border-[rgba(216,191,163,0.25)]'
                        : 'border-[rgba(216,191,163,0.1)]'
                    }`}
                  >
                    <span className="text-[11px] text-[#A89BBF] opacity-60 block lg:hidden mb-1">
                      출발점
                    </span>
                    <p
                      className={`text-sm sm:text-base leading-snug ${
                        isBd
                          ? 'text-[var(--accent-gold-light)] font-semibold'
                          : 'text-[#CFC7DC] font-light'
                      }`}
                    >
                      {col.startingPoint}
                    </p>
                  </div>

                  {/* 항목 2: 핵심 질문 */}
                  <div
                    className={`flex-1 flex flex-col items-center justify-center text-center py-6 px-2 border-b ${
                      isBd
                        ? 'border-[rgba(216,191,163,0.25)]'
                        : 'border-[rgba(216,191,163,0.1)]'
                    }`}
                  >
                    <span className="text-[11px] text-[#A89BBF] opacity-60 block lg:hidden mb-1">
                      핵심 질문
                    </span>
                    <p
                      className={`text-sm sm:text-base leading-snug ${
                        isBd
                          ? 'text-[var(--accent-gold)] font-bold'
                          : 'text-[#EDE6DA] font-light'
                      }`}
                    >
                      {col.coreQuestion}
                    </p>
                  </div>

                  {/* 항목 3: 주요 가치 */}
                  <div className="flex-1 flex flex-col items-center justify-center text-center py-6 px-2">
                    <span className="text-[11px] text-[#A89BBF] opacity-60 block lg:hidden mb-1">
                      주요 가치
                    </span>
                    <p
                      className={`text-sm sm:text-base leading-snug ${
                        isBd
                          ? 'text-[#F5F5F5] font-semibold'
                          : 'text-[#CFC7DC] font-light'
                      }`}
                    >
                      {col.mainValue}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </Reveal>

        {/* =========================================================================
            모바일 및 태블릿 화면: 각 비교 대상을 독립적인 카드로 전환 (가독성 극대화)
            ========================================================================= */}
        <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          {comparisonData.map((col) => {
            const isBd = col.isHighlighted

            return (
              <Reveal key={col.id} delayMs={200}>
                <div
                  className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between h-full relative ${
                    isBd
                      ? 'bg-gradient-to-b from-[rgba(78,20,36,0.7)] via-[rgba(62,15,31,0.75)] to-[rgba(45,15,25,0.7)] border-2 border-[var(--accent-gold)] shadow-[0_12px_36px_rgba(0,0,0,0.6)]'
                      : 'bg-[rgba(32,22,30,0.55)] border border-[rgba(216,191,163,0.15)]'
                  }`}
                >
                  {isBd && (
                    <div className="absolute -top-3 left-6 px-3 py-0.5 rounded-full bg-[var(--accent-gold)] text-[#1A0A16] text-[10px] font-bold tracking-wider uppercase shadow-md">
                      선천코드 기반
                    </div>
                  )}

                  {/* 카드 상단: 아이콘 및 타이틀 */}
                  <div className="flex items-center gap-3.5 pb-5 border-b border-[rgba(216,191,163,0.15)] mb-5">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                        isBd
                          ? 'bg-[rgba(212,178,167,0.15)] border border-[rgba(212,178,167,0.35)]'
                          : 'bg-[rgba(255,255,255,0.05)] border border-[rgba(216,191,163,0.15)]'
                      }`}
                    >
                      {col.icon}
                    </div>
                    <div>
                      <span
                        className={`text-[10px] font-elegant font-semibold tracking-widest uppercase block ${
                          isBd ? 'text-[var(--accent-gold)]' : 'text-[#A89BBF]'
                        }`}
                      >
                        {col.subtitle}
                      </span>
                      <h3
                        className={`text-xl font-elegant font-bold ${
                          isBd ? 'text-[var(--accent-gold)]' : 'text-[#EDE6DA]'
                        }`}
                      >
                        {col.title}
                      </h3>
                    </div>
                  </div>

                  {/* 카드 본문: 출발점, 핵심 질문, 주요 가치 세로 배치 */}
                  <div className="space-y-4">
                    {/* 출발점 */}
                    <div className="pb-3 border-b border-[rgba(216,191,163,0.1)]">
                      <span className="text-xs text-[#A89BBF] font-light block mb-1">
                        출발점
                      </span>
                      <p
                        className={`text-sm sm:text-base ${
                          isBd
                            ? 'text-[var(--accent-gold-light)] font-medium'
                            : 'text-[#EDE6DA] font-light'
                        }`}
                      >
                        {col.startingPoint}
                      </p>
                    </div>

                    {/* 핵심 질문 */}
                    <div className="pb-3 border-b border-[rgba(216,191,163,0.1)]">
                      <span className="text-xs text-[#A89BBF] font-light block mb-1">
                        핵심 질문
                      </span>
                      <p
                        className={`text-sm sm:text-base ${
                          isBd
                            ? 'text-[var(--accent-gold)] font-bold'
                            : 'text-[#F5F5F5] font-light'
                        }`}
                      >
                        {col.coreQuestion}
                      </p>
                    </div>

                    {/* 주요 가치 */}
                    <div className="pt-1">
                      <span className="text-xs text-[#A89BBF] font-light block mb-1">
                        주요 가치
                      </span>
                      <p
                        className={`text-sm sm:text-base ${
                          isBd
                            ? 'text-[#F5F5F5] font-medium'
                            : 'text-[#CFC7DC] font-light'
                        }`}
                      >
                        {col.mainValue}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>

        {/* 하단 작은 안내 문구 */}
        <Reveal delayMs={400}>
          <div className="mt-8 text-center">
            <p className="text-xs sm:text-sm text-[#A89BBF] opacity-70 font-light">
              ※ 각 분야의 대표적인 접근 방향을 비교한 예시입니다.
            </p>
          </div>
        </Reveal>

        {/* =========================================================================
            비교 영역 하단 강조 카피 (36~40px 기준 명조 계열, 앤티크 샴페인 골드 강조)
            ========================================================================= */}
        <Reveal delayMs={500}>
          <div className="mt-20 md:mt-24 text-center max-w-3xl mx-auto">
            <h3 className="text-2xl sm:text-3xl md:text-[38px] font-elegant font-bold text-[var(--accent-gold)] mb-5 leading-tight tracking-tight">
              사랑에도 나만의 방식이 있습니다.
            </h3>
            <p className="text-base sm:text-xl text-[#EDE6DA] opacity-90 font-light leading-relaxed">
              누군가의 공식을 따라가는 사랑에서<br className="sm:hidden" />{' '}
              나를 이해하고 선택하는 사랑으로.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
