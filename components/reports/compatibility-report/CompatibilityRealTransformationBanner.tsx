'use client'

import Image from 'next/image'
import Reveal from '@/components/Reveal'

export default function CompatibilityRealTransformationBanner() {
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

            {/* (3) 제목 아래 설명 */}
            <div className="max-w-3xl mx-auto mb-6 md:mb-8">
              <p className="text-[16px] sm:text-[17px] md:text-[18px] text-[#EDE6DA]/85 font-light leading-[1.6] break-keep">
                사랑한다고 해서 서로의 마음을 저절로 이해하게 되는 것은 아닙니다.<br />
                같은 관계 안에서도 두 사람은 서로 다른 방식으로 기대하고, 표현하고, 상처받습니다.
              </p>
            </div>

            {/* (4) 중간 핵심 메시지 (본문 간 간격 28~32px, line-height 1.6) */}
            <div className="max-w-3xl mx-auto space-y-7 md:space-y-8 mb-10 md:mb-14">
              <p className="text-[16px] sm:text-[17px] md:text-[18px] text-[#EDE6DA]/85 font-light leading-[1.6] break-keep">
                두 사람의 선천코드를 함께 읽는다는 것은 누가 더 옳은지를 가리는 일이 아닙니다.<br />
                서로의 기질과 반응의 차이를 알아차리고, 반복되는 오해와 갈등의 구조를{' '}
                <span className="text-[#D8BB94] font-semibold">새로운 관점에서 바라보는 일</span>입니다.
              </p>
              <p className="text-[16px] sm:text-[17px] md:text-[18px] text-[#EDE6DA]/85 font-light leading-[1.6] break-keep">
                상대를 나와 같은 사람으로 바꾸는 대신 우리 사이에 필요한 대화와 거리, 서로 존중해야 할 기준을 다시 세워봅니다.<br />
                관계의 방향은 두 사람이 서로의 다름을{' '}
                <span className="text-[#D8BB94] font-semibold">어떻게 다루느냐에 따라</span> 달라질 수 있습니다.
              </p>
            </div>

            {/* (5) 마지막 각성 인용문 (데스크톱 정확히 2줄, 상하 가로 구분선) */}
            <div className="my-10 md:my-14 py-8 md:py-10 border-y border-[#935C6B]/25 max-w-4xl mx-auto">
              <p className="font-elegant font-bold text-xl sm:text-2xl md:text-[26px] leading-[1.5] break-keep">
                <span className="text-[#FAF7F2] block">&ldquo;누가 맞고 틀렸는지를 따지지 마세요.</span>
                <span className="text-[#D8BB94] block mt-1.5 md:mt-2">두 사람 사이에 흐르는 관계의 결부터 읽으세요.&rdquo;</span>
              </p>
            </div>
          </div>

          {/* (6) 아래쪽 대형 가로 이미지 슬롯 (16:9 와이드) */}
          <div className="w-full max-w-[1280px] mx-auto mb-12 md:mb-16">
            <Image
              src="/image/compatibility/p1.webp"
              alt="선천코드 궁합 비급을 읽으며 서로의 다름을 이해하는 장면"
              width={1280}
              height={720}
              className="block h-auto w-full rounded-2xl md:rounded-[28px] border border-white/10 shadow-2xl"
            />
          </div>
        </div>

        {/* (7) 이미지 아래 마지막 짧은 결심 문구 */}
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
