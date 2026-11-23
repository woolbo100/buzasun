'use client'

import Image from 'next/image'
import Reveal from '@/components/Reveal'
import { HeartHandshake, GitCompareArrows, Gem } from 'lucide-react'

export default function CompatibilityRealTransformationBanner() {
  const transformationCards = [
    {
      tag: '기질의 이해',
      title: '① 서로 다른 사랑의 방식 이해',
      desc: '두 사람의 선천 기질과 감정 표현의 차이를 읽고, 서로의 반응을 오해하기보다 이해하는 기준을 세웁니다.',
      changeNum: 'CHANGE 01',
      icon: <HeartHandshake className="w-5 h-5 text-[#D8BB94]" />,
    },
    {
      tag: '패턴의 발견',
      title: '② 반복되는 관계 충돌 해독',
      desc: '같은 문제로 부딪히는 이유와 감정의 방어 패턴을 살펴보고, 갈등이 반복되는 구조를 발견합니다.',
      changeNum: 'CHANGE 02',
      icon: <GitCompareArrows className="w-5 h-5 text-[#D8BB94]" />,
    },
    {
      tag: '관계의 설계',
      title: '③ 두 사람만의 관계 기준 세우기',
      desc: '서로에게 맞는 소통과 행동 방식을 정리하고, 함께 지켜갈 관계의 기준과 실천 방향을 세웁니다.',
      changeNum: 'CHANGE 03',
      icon: <Gem className="w-5 h-5 text-[#D8BB94]" />,
    },
  ]

  return (
    <section className="mb-20 md:mb-28 max-w-7xl mx-auto px-4 sm:px-6">
      <Reveal>
        {/* FINAL AWAKENING: 통합 와이드 레이아웃 에디토리얼 디자인 */}
        <div>
          <div className="text-center">
            {/* (1) 상단 영어 라벨 */}
            <span className="block font-elegant text-[12pt] font-semibold tracking-[0.2em] text-[#D8BB94] uppercase mb-4">
              FINAL AWAKENING
            </span>

            {/* (2) 메인 제목 */}
            <h2 className="text-[26px] sm:text-[30px] md:text-[38px] lg:text-[40px] font-elegant font-bold text-white mb-6 md:mb-8 leading-[1.3] break-keep max-w-4xl mx-auto">
              서로의 다름을 이해하고,<br className="hidden sm:inline" />{' '}
              <span className="gradient-text-reunion">사랑의 깊이를 다시 선택합니다.</span>
            </h2>

            {/* (3) 설명 문구 3단락 (균일한 간격과 안정된 2줄 구성) */}
            <div className="max-w-3xl mx-auto space-y-6 md:space-y-7 mb-10 md:mb-14">
              <p className="text-[16px] sm:text-[17px] md:text-[18px] text-[#EDE6DA]/85 font-light leading-[1.7] break-keep">
                사랑한다고 해서 서로의 마음을 저절로 이해하게 되는 것은 아닙니다.<br className="hidden sm:inline" />{' '}
                같은 관계 안에서도 두 사람은 서로 다른 방식으로 기대하고, 표현하고, 상처받습니다.
              </p>
              <p className="text-[16px] sm:text-[17px] md:text-[18px] text-[#EDE6DA]/85 font-light leading-[1.7] break-keep">
                두 사람의 선천코드를 함께 읽는다는 것은 누가 더 옳은지를 가리는 일이 아닙니다.<br className="hidden sm:inline" />{' '}
                서로의 기질과 반응을 이해하고, 반복되는 갈등을 새로운 관점에서 바라보는 일입니다.
              </p>
              <p className="text-[16px] sm:text-[17px] md:text-[18px] text-[#EDE6DA]/85 font-light leading-[1.7] break-keep">
                상대를 나와 같은 사람으로 바꾸려 하기보다,<br className="hidden sm:inline" />{' '}
                서로에게 필요한 대화와 거리, 존중의 기준을 새롭게 세웁니다.
              </p>
            </div>

            {/* (5) 마지막 각성 인용문 (데스크톱 정확히 2줄, 상하 가로 구분선) */}
            <div className="my-10 md:my-14 py-8 md:py-10 border-y border-[#B78C86]/30 max-w-4xl mx-auto">
              <p className="font-elegant font-bold text-xl sm:text-2xl md:text-[26px] leading-[1.5] break-keep">
                <span className="text-[#FAF7F2] block">&ldquo;누가 맞고 틀렸는지를 따지지 마세요.</span>
                <span className="text-[#D8BB94] block mt-1.5 md:mt-2">두 사람 사이에 흐르는 관계의 결부터 읽으세요.&rdquo;</span>
              </p>
            </div>
          </div>

          {/* (6) 아래쪽 대형 가로 이미지 슬롯 (16:9 와이드) */}
          <div className="w-full max-w-[1280px] mx-auto mb-10 md:mb-12">
            <Image
              src="/image/compatibility/compatibility-final-awakening-banner.webp"
              alt="선천코드 프리미엄 궁합 리포트 파이널 각성 배너"
              width={1671}
              height={941}
              className="block h-auto w-full rounded-2xl md:rounded-[28px] border border-[#B78C86]/30 shadow-2xl"
            />
          </div>

          {/* (7) [신규] 궁합 변화 카드 3개 */}
          <div className="w-full max-w-[1280px] mx-auto mb-12 md:mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
              {transformationCards.map((card, idx) => (
                <div
                  key={idx}
                  className="gungjung-glass p-7 sm:p-8 lg:p-9 rounded-[32px] border border-[#B78C86]/35 bg-gradient-to-b from-[#4A1F2D]/50 via-[#3A1623]/40 to-[#180A14]/60 flex flex-col justify-between group hover:border-[#D8BB94]/60 transition-all duration-300 hover:-translate-y-1 shadow-xl relative overflow-hidden h-full text-left"
                >
                  {/* 은은한 배경 오라 */}
                  <div className="absolute top-0 right-0 w-28 h-28 bg-[#5A2638]/20 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform" />

                  <div>
                    {/* 상단: 좌측 컴팩트 아이콘 박스 + 우측 캡슐 라벨 */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-[#3A1623] border border-[#B78C86]/40 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform text-[#D8BB94]">
                        {card.icon}
                      </div>
                      <span className="text-xs font-mono font-bold tracking-widest px-3 py-1 rounded-full bg-[#5A2638]/40 border border-[#B78C86]/30 text-[#D8BB94]">
                        {card.tag}
                      </span>
                    </div>

                    {/* 본문 상단: 제목 */}
                    <h3 className="text-[19px] md:text-[21px] font-bold text-[#FAF7F2] leading-snug break-keep group-hover:text-white transition-colors mb-3">
                      {card.title}
                    </h3>

                    {/* 본문 설명 */}
                    <p className="text-[16px] text-[#EDE6DA]/85 font-light leading-[1.7] break-keep">
                      {card.desc}
                    </p>
                  </div>

                  {/* 하단: 얇은 구분선 + 보조 텍스트 2개 */}
                  <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                    <span className="font-mono tracking-wider font-semibold text-[#C7A97A]">
                      {card.changeNum}
                    </span>
                    <span className="text-[#D8BB94]/80 font-medium">
                      선천코드 관계 변화
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* (8) 이미지 아래 마지막 짧은 결심 문구 */}
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm sm:text-base text-[#D8BB94] font-medium tracking-wide">
            서로를 바꾸는 대신,
          </p>
          <p className="font-elegant font-bold text-lg sm:text-[21px] text-[#FAF7F2] leading-relaxed break-keep mt-2.5">
            서로를 이해하는 선택에서 시작됩니다.
          </p>
        </div>
      </Reveal>
    </section>
  )
}
