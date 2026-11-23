'use client'

import Image from 'next/image'
import Reveal from '@/components/Reveal'
import WealthAnalysisMethod from './WealthAnalysisMethod'

export default function WealthRealTransformationBanner() {
  return (
    <section className="mb-28 md:mb-36 w-full max-w-[1280px] mx-auto">
      <Reveal className="w-full">
        {/* FINAL AWAKENING: 통합 와이드 레이아웃 에디토리얼 디자인 */}
        <div>
          <div className="text-center">
            {/* (1) 상단 영어 라벨 */}
            <span className="block font-elegant text-[12pt] font-semibold tracking-[0.2em] text-[#8FB4A4] uppercase mb-4">
              FINAL AWAKENING
            </span>

            {/* (2) 메인 제목 */}
            <h2 className="text-2xl sm:text-3xl md:text-[36px] font-elegant font-bold text-[#FAF7F2] mb-6 md:mb-8 leading-[1.3] break-keep max-w-4xl mx-auto">
              내 풍요의 결을 세우고,<br className="hidden sm:inline" />{' '}
              <span className="gradient-text-abundance">돈의 기준을 다시 씁니다.</span>
            </h2>

            {/* (3) 설명 문구 3단락 (연애 리포트와 동일한 3단락 구성, 단락 사이 여백 유지) */}
            <div className="max-w-3xl mx-auto space-y-6 md:space-y-7 mb-10 md:mb-14">
              <p className="text-[16px] sm:text-[17px] md:text-[18px] text-[#EDE6DA]/85 font-light leading-[1.6] break-keep">
                남의 성공 공식을 좇으며 조급해하던 시간은 끝났습니다.<br className="hidden sm:inline" />{' '}
                이제는 나만의 고유한 재물 기질을 깨우고,<br className="hidden sm:inline" />{' '}
                어디에 자원과 에너지를 흘려보낼지 당당하게 선택할 차례입니다.
              </p>
              <p className="text-[16px] sm:text-[17px] md:text-[18px] text-[#EDE6DA]/85 font-light leading-[1.6] break-keep">
                자신의 선천코드를 읽고, 그 안에 숨겨진<br className="hidden sm:inline" />{' '}
                <span className="text-[#8FB4A4] font-semibold">&lsquo;나만의 풍요 작동 방식&rsquo;</span>을 정확히 꿰뚫는 순간,<br className="hidden sm:inline" />{' '}
                돈과 기회의 판도는 달라지기 시작합니다.
              </p>
              <p className="text-[16px] sm:text-[17px] md:text-[18px] text-[#EDE6DA]/85 font-light leading-[1.6] break-keep">
                더 이상 막연한 재물운이나 불안한 기대로 나를 소모하지 않습니다.<br className="hidden sm:inline" />{' '}
                내 풍요의 결이 선명해지고 선택의 기준이 세워질 때,<br className="hidden sm:inline" />{' '}
                나는 비로소 돈의 흐름과 주도권을 쥐게 됩니다.
              </p>
            </div>

            {/* (4) 마지막 각성 인용문 (데스크톱 정확히 2줄, 상하 가로 구분선) */}
            <div className="my-10 md:my-14 py-8 md:py-10 border-y border-[#608F82]/25 max-w-4xl mx-auto">
              <p className="font-elegant font-bold text-xl sm:text-2xl md:text-[26px] leading-[1.5] break-keep">
                <span className="text-[#FAF7F2] block">&ldquo;언제 돈이 들어올지를 묻지 마세요.</span>
                <span className="gradient-text-abundance block mt-1.5 md:mt-2">왜 같은 흐름과 선택을 반복해 왔는지부터 읽으세요.&rdquo;</span>
              </p>
            </div>
          </div>

          {/* (5) 아래쪽 대형 가로 이미지 슬롯 (16:9 와이드) */}
          <div className="w-full max-w-[1280px] mx-auto">
            <Image
              src="/images/abundance/baekdohwa-wealth-final-awakening.webp"
              alt="선천코드 풍요 비급을 통해 부의 흐름과 기준을 세우는 백도화 파이널 각성 이미지"
              width={1671}
              height={941}
              className="block h-auto w-full rounded-2xl md:rounded-[28px] border border-[#608F82]/25 shadow-2xl"
            />
          </div>

          {/* (6) PHASE 카드 3개 */}
          <div className="mt-[40px] sm:mt-[48px] md:mt-[64px] lg:mt-[80px]">
            <WealthAnalysisMethod />
          </div>

          {/* (7) 하단 마무리 문구 */}
          <div className="max-w-2xl mx-auto text-center mt-[40px] md:mt-[64px]">
            <p className="text-sm sm:text-base text-[#C2A477] font-medium tracking-wide">
              당신의 풍요를 바꿀 첫 번째 선택,
            </p>
            <p className="font-elegant font-bold text-lg sm:text-[21px] text-[#FAF7F2] leading-relaxed break-keep mt-2.5">
              나만의 선천코드를 읽는 것에서 시작됩니다.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
