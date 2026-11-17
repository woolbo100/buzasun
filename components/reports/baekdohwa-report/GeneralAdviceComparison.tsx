'use client'

import Image from 'next/image'
import Reveal from '@/components/Reveal'
import { generalAdviceData } from './data'

export default function GeneralAdviceComparison() {
  return (
    <section className="mb-40">
      <Reveal>
        {/* 1. 기존 섹션 제목 & 2. 기존 섹션의 핵심 도입 문구 */}
        <div className="max-w-4xl mx-auto text-center mb-10 md:mb-12">
          <span className="block font-elegant text-[12pt] font-semibold tracking-[0.2em] text-[#D9A8A7] uppercase mb-4">
            POINT 06 · WHY COMMON ADVICE FAILS
          </span>
          <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white mb-6 leading-[1.25] md:leading-[1.3] break-keep whitespace-pre-line">
            {generalAdviceData.mainCopy}
          </h2>
          <p className="text-[18px] text-[#EDE6DA] opacity-75 font-light break-keep mb-8">
            {generalAdviceData.subCopy}
          </p>

          {/* 3. 이동한 상단 설명 문구 A */}
          <div className="pt-2 space-y-5 max-w-3xl mx-auto text-center">
            <p className="text-[16px] md:text-[17px] text-[#FAF7F2] font-medium leading-relaxed break-keep">
              자신의 사주를 읽고, 선천코드 속 <span className="text-[#D9A8A7] font-semibold">&lsquo;치명적인 무기&rsquo;</span>를 정확히 꿰뚫은 여자는 연애의 판도가 완전히 달라집니다.
            </p>

            <div className="space-y-3 text-[16px] md:text-[17px] text-[#EDE6DA]/90 font-light leading-relaxed break-keep">
              <p className="text-white font-medium">
                남자의 마음을 얻기 위해 애쓰지 않습니다.
              </p>
              <p>
                내 코드가 정렬되는 순간, 남자가 먼저 알아서 스며들고 헌신하는 <span className="text-[#D9A8A7] font-semibold">&lsquo;선택받는 판&rsquo;</span>이 만들어지기 때문입니다.
              </p>
            </div>
          </div>
        </div>

        {/* 4. 이동한 이미지 B */}
        <div className="mx-auto mt-8 mb-10 md:mb-12 w-full max-w-[1280px]">
          <Image
            src="/image/lovereport/the%20power%20of%20my%20love%20code.webp"
            alt="선천코드의 매력을 이해하고 연애의 주도권을 되찾는 백도화 이미지"
            width={1280}
            height={720}
            className="block h-auto w-full rounded-2xl border border-white/10 shadow-2xl"
          />
        </div>

        {/* 5. 이동한 하단 글라스 선언문 C */}
        <div className="max-w-3xl mx-auto mb-14 md:mb-16 text-center">
          <div 
            className="love-report-highlight-card p-6 md:p-8 rounded-2xl border text-center space-y-2 backdrop-blur-sm"
            style={{
              background: 'rgba(125, 76, 100, 0.20)',
              borderColor: 'rgba(215, 170, 185, 0.20)',
            }}
          >
            <p className="text-sm md:text-base text-[#D9A8A7] font-bold tracking-wide">
              이제 감정에 휘둘리며 닳아버리는 연애는 끝내세요.
            </p>
            <p className="font-elegant font-medium text-[17px] md:text-[19px] text-white leading-relaxed break-keep">
              당신의 연애 판도를 완전히 뒤바꿀 단 하나의 비급,<br className="hidden sm:inline" />
              <span className="text-[#D9A8A7] font-semibold">백도화 《연애비급》 선천코드 리포트가 당신의 진짜 매력을 깨워드립니다.</span>
            </p>
          </div>
        </div>

        {/* 6. 기존 처방전 관련 상세 콘텐츠 (3개 카드) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {generalAdviceData.cards.map((card, idx) => (
            <div
              key={idx}
              className="gungjung-glass p-8 md:p-10 rounded-[28px] border border-white/10 hover:border-[#B7788D]/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(183, 120, 141, 0.1)] flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono font-bold tracking-widest text-[#D9A8A7]">
                    {card.num}
                  </span>
                  <span className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70">
                    {card.tag}
                  </span>
                </div>
                <h3 className="text-[20px] md:text-[24px] font-elegant font-bold text-white mb-4 leading-snug break-keep group-hover:text-[#D9A8A7] transition-colors">
                  &ldquo;{card.content}&rdquo;
                </h3>
              </div>
              <p className="text-sm md:text-base text-[#EDE6DA]/60 leading-relaxed font-light break-keep pt-4 border-t border-white/5">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
