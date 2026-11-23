'use client'

import Reveal from '@/components/Reveal'
import { compatibilityValueData } from './data'

export default function CompatibilityValueSummary() {
  return (
    <div className="mb-28 md:mb-36 w-full max-w-[1280px] mx-auto">
      <Reveal className="w-full">
        {/* 1. 상단 영문 라벨 + 메인 제목 + 설명 문구 */}
        <div className="max-w-4xl mx-auto text-center mb-8 md:mb-10">
          <span className="block font-elegant text-[12pt] font-semibold tracking-[0.2em] text-[#D8BB94] uppercase mb-4">
            LIFELONG COMPASS FOR TWO
          </span>
          <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white mb-6 leading-[1.25] md:leading-[1.3] break-keep">
            한 번 읽고 끝나는 궁합 풀이가 아니라,<br />
            관계가 흔들릴 때{' '}
            <span className="gradient-text-reunion">다시 펼쳐보는 두 사람의 설계도.</span>
          </h2>
          <p className="text-[18px] text-[#EDE6DA] opacity-75 font-light break-keep">
            {compatibilityValueData.subCopy}
          </p>
        </div>

        {/* 2. 6가지 핵심 가치 요소 그리드 */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 lg:gap-3.5 xl:gap-4 w-full max-w-[1280px] mx-auto items-stretch">
          {compatibilityValueData.elements.map((el, idx) => (
            <div
              key={idx}
              className="gungjung-glass px-3.5 py-6 sm:px-4 sm:py-7 lg:px-3 lg:py-6 xl:px-4 xl:py-7 rounded-[22px] border border-[#B78C86]/20 hover:border-[#D8BB94]/50 bg-gradient-to-b from-[#4A1F2D]/35 via-transparent to-black/40 text-center flex flex-col justify-center items-center transition-all duration-300 hover:-translate-y-1 group h-full shadow-lg backdrop-blur-md"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#D8BB94] mb-3.5 group-hover:scale-150 transition-transform shrink-0"></span>
              <h4 className="text-[15px] sm:text-[15.5px] lg:text-[15px] xl:text-[16px] font-bold text-white mb-2 md:mb-2.5 break-keep">
                {el.title}
              </h4>
              <p className="text-[12.5px] sm:text-[13px] lg:text-[12.5px] xl:text-[13.5px] text-[#EDE6DA]/85 font-normal leading-[1.55] break-keep whitespace-pre-line">
                {el.desc}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  )
}
