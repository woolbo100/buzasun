'use client'

import Image from 'next/image'
import Reveal from '@/components/Reveal'

export default function WealthRealTransformationBanner() {
  return (
    <section className="mb-20 md:mb-28 w-full max-w-[1280px] mx-auto">
      <Reveal className="w-full">
        {/* FINAL AWAKENING: 통합 와이드 레이아웃 에디토리얼 디자인 */}
        <div>
          <div className="text-center">
            {/* (1) 상단 영어 라벨 */}
            <span className="block font-elegant text-[12pt] font-semibold tracking-[0.2em] text-[#8FB4A4] uppercase mb-4">
              FINAL AWAKENING
            </span>

            {/* (2) 메인 제목 */}
            <h2 className="text-[26px] sm:text-[30px] md:text-[38px] lg:text-[40px] font-elegant font-bold text-white mb-6 md:mb-8 leading-[1.3] break-keep max-w-4xl mx-auto">
              내 안의 풍요를 깨우고,<br className="hidden sm:inline" />{' '}
              <span className="gradient-text-abundance">부의 흐름을 다시 읽습니다.</span>
            </h2>

            {/* (3) 제목 아래 설명 */}
            <div className="max-w-3xl mx-auto mb-6 md:mb-8">
              <p className="text-[16px] sm:text-[17px] md:text-[18px] text-[#EDE6DA]/85 font-light leading-[1.6] break-keep">
                풍요를 바란다고 해서 언제나 같은 방식으로 돈을 선택하는 것은 아닙니다.<br />
                어떤 순간에는 기회를 붙잡고, 어떤 순간에는 익숙한 두려움이나 오래된 습관에 따라 움직이기도 합니다.
              </p>
            </div>

            {/* (4) 중간 핵심 메시지 (본문 간 간격 28~32px, line-height 1.6) */}
            <div className="max-w-3xl mx-auto space-y-7 md:space-y-8 mb-10 md:mb-14">
              <p className="text-[16px] sm:text-[17px] md:text-[18px] text-[#EDE6DA]/85 font-light leading-[1.6] break-keep">
                나의 선천코드와 실제 재정 경험을 함께 살펴보면, 돈 앞에서 반복해 온 생각과 감정, 선택의 방식이 조금씩 드러날 수 있습니다.<br />
                중요한 것은 정해진 부의 운명을 기다리는 것이 아니라,{' '}
                <span className="text-[#8FB4A4] font-semibold">나의 자원과 현실적 여건을 깊이 이해하는 일</span>입니다.
              </p>
              <p className="text-[16px] sm:text-[17px] md:text-[18px] text-[#EDE6DA]/85 font-light leading-[1.6] break-keep">
                나에게 맞지 않는 성공 공식을 무조건 따라갈 필요는 없습니다. 내가 가진 강점과 부족한 부분을 알아차리고, 현재의 조건 안에서 실천할 수 있는 작은 선택부터 다시 설계합니다.<br />
                풍요는 막연한 기대가 아니라 나의 삶에서 지속할 수 있는{' '}
                <span className="text-[#E6BE8A] font-semibold">선택과 행동을 통해 만들어갈 방향</span>입니다.
              </p>
            </div>

            {/* (5) 마지막 각성 인용문 (데스크톱 정확히 2줄, 상하 가로 구분선) */}
            <div className="my-10 md:my-14 py-8 md:py-10 border-y border-[#608F82]/25 max-w-4xl mx-auto">
              <p className="font-elegant font-bold text-xl sm:text-2xl md:text-[26px] leading-[1.5] break-keep">
                <span className="text-[#FAF7F2] block">&ldquo;언제 부자가 될지를 묻지 마세요.</span>
                <span className="text-[#8FB4A4] block mt-1.5 md:mt-2">돈 앞에서 반복해 온 나의 선택부터 읽으세요.&rdquo;</span>
              </p>
            </div>
          </div>

          {/* (6) 아래쪽 대형 가로 이미지 슬롯 (16:9 와이드) */}
          <div className="w-full max-w-[1280px] mx-auto mb-12 md:mb-16">
            <Image
              src="/image/abundance/a1.webp"
              alt="선천코드 풍요 비급을 통해 부의 흐름을 읽어내는 장면"
              width={1280}
              height={720}
              className="block h-auto w-full rounded-2xl md:rounded-[28px] border border-[#608F82]/25 shadow-2xl"
            />
          </div>
        </div>

        {/* (7) 이미지 아래 마지막 짧은 결심 문구 */}
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm sm:text-base text-[#8FB4A4] font-medium tracking-wide">
            나의 선택을 이해하는 순간,
          </p>
          <p className="font-elegant font-bold text-lg sm:text-[21px] text-[#FAF7F2] leading-relaxed break-keep mt-2.5">
            풍요의 방향도 다시 세울 수 있습니다.
          </p>
        </div>
      </Reveal>
    </section>
  )
}
