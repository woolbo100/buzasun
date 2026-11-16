'use client'

import Image from 'next/image'
import Reveal from '@/components/Reveal'

export default function PersonalAnalysisMethod() {
  const keywordCards = [
    "선천적 기질",
    "내면의 욕구",
    "감정 반응",
    "관계 심리"
  ]

  return (
    <section className="mb-40">
      <Reveal>
        {/* 모바일 표시 순서 1: 섹션 제목 및 헤드카피 */}
        <div className="lg:hidden text-center sm:text-left mb-8 space-y-2.5">
          <span className="block font-elegant text-[12pt] font-semibold tracking-[0.2em] text-[#D9A8A7] uppercase">
            POINT 02 · MIND &amp; DESTINY
          </span>
          <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white leading-[1.2] break-keep">
            사주로 타고난 기질을 읽고,<br />
            <span className="gradient-text-love">심리로 사랑의 이면</span>을 들여다봅니다.
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-20 items-stretch">
          {/* 왼쪽 이미지: 권장 42% (12단 중 5단 = 41.67%) / 모바일 표시 순서 2 */}
          <div className="lg:col-span-5 relative group flex flex-col">
            <div className="relative aspect-[3/4] lg:aspect-auto lg:h-full w-full max-w-sm sm:max-w-md lg:max-w-none mx-auto rounded-[28px] md:rounded-[36px] overflow-hidden border border-white/10 shadow-2xl bg-[#130917]">
              <Image 
                src="/image/lovereport/p2.webp" 
                alt="사주와 심리로 사랑의 이면을 들여다보는 백도화 선천코드 연애 리포트" 
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]" 
              />
            </div>
          </div>

          {/* 오른쪽 텍스트: 권장 58% (12단 중 7단 = 58.33%) / 모바일 표시 순서 3 */}
          <div className="lg:col-span-7 lg:pl-2 xl:pl-6 flex flex-col justify-between space-y-6 lg:space-y-7">
            {/* 데스크톱 전용 헤드카피 (모바일에서는 이미지 상단에 표시) */}
            <div className="hidden lg:block space-y-2.5">
              <span className="block font-elegant text-[12pt] font-semibold tracking-[0.2em] text-[#D9A8A7] uppercase">
                POINT 02 · MIND &amp; DESTINY
              </span>
              <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white leading-[1.2] md:leading-[1.22] break-keep">
                사주로 타고난 기질을 읽고,<br />
                <span className="gradient-text-love">심리로 사랑의 이면</span>을 들여다봅니다.
              </h2>
            </div>

            {/* 본문 서사 3단계 흐름 */}
            <div className="space-y-5 text-[17px] md:text-[18px] text-[#EDE6DA] opacity-80 leading-[1.8] break-keep font-light">
              <p>
                동양 명리학은 태어난 순간의 사주 구조를 통해 한 사람의 기질과 성향을 해석합니다.<br />
                백도화는 일간과 십성, 지장간과 배우자궁 등 명리학의 다양한 요소를 살펴보며, 사랑 앞에서 드러나는 성향과 관계의 특징을 읽어갑니다.
              </p>
              <p>
                그러나 타고난 기질만으로 한 사람의 사랑을 모두 설명할 수는 없습니다.<br />
                같은 상황에서도 누군가는 불안해하고, 누군가는 마음을 닫으며, 또 누군가는 지나치게 상대에게 맞추려 합니다.<br />
                백도화는 이러한 감정 반응을 이해하기 위해{' '}
                <span className="text-[#D9A8A7] font-medium opacity-100">
                  애착, 방어기제, 관계 습관과 무의식적 선택의 관점
                </span>
                을 함께 살펴봅니다.
              </p>
              <p>
                겉으로 드러나는 연애 성향과, 스스로도 쉽게 알아차리지 못하는 내면의 욕구.<br />
                이 두 층위를 함께 살펴볼 때, 익숙했던 자신의 행동을 조금 더 입체적으로 이해할 수 있습니다.<br />
                <span className="text-[#D9A8A7] font-medium opacity-100">
                  타고난 기질을 해석하는 명리학과, 관계 속 마음의 움직임을 이해하는 심리학.
                </span><br />
                백도화는 서로 다른 두 관점을 연결해 자신을 이해할 수 있는 또 하나의 시선을 제안합니다.
              </p>
            </div>

            {/* 하단 핵심 인용 문구 */}
            <div className="pt-2">
              <div className="p-5 md:p-6 rounded-2xl border border-[#B7788D]/25 bg-gradient-to-r from-[#2D0A1E]/30 to-[#140816]/40 backdrop-blur-sm">
                <p className="font-elegant font-medium text-[17px] md:text-[19px] text-[#FAF7F2] leading-relaxed break-keep">
                  &ldquo;사주가 기질을 비춘다면,{' '}
                  <span className="text-[#D9A8A7] font-semibold">
                    심리는 그 기질이 사랑 속에서 어떻게 드러나는지 질문합니다.
                  </span>&rdquo;
                </p>
              </div>
            </div>

            {/* 추천 키워드 요약 카드 4종 */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
              {keywordCards.map((item, idx) => (
                <div key={idx} className="detail-glass-card flex items-center justify-center gap-2.5 p-3.5 rounded-2xl text-center">
                  <div className="w-2 h-2 rounded-full bg-[#B7788D] shadow-[0_0_10px_rgba(183,120,141,0.5)] shrink-0"></div>
                  <span className="text-sm md:text-[15px] text-white/85 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
