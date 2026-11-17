'use client'

import Image from 'next/image'
import Reveal from '@/components/Reveal'

export default function RealTransformationBanner() {
  return (
    <section className="mb-24 md:mb-32">
      <Reveal>
        {/* 1. 이미지 위 상단 강조 카피 */}
        <div className="pt-2 space-y-5 max-w-3xl mx-auto text-center mb-10 md:mb-12">
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

          {/* 핵심 카피 */}
          <p className="font-elegant font-medium text-[17px] md:text-[20px] text-[#FAF7F2] leading-relaxed break-keep pt-3">
            &ldquo;언제 사랑받을지를 묻지 마세요.<br className="sm:hidden" />
            <span className="text-[#D9A8A7] font-semibold"> 왜 그런 사랑을 선택해 왔는지부터 읽으세요.</span>&rdquo;
          </p>
        </div>

        {/* 2. 한복 여성과 궁중 비급 가로형 대표 이미지 */}
        <div className="mx-auto mb-10 md:mb-14 w-full max-w-[1280px]">
          <Image
            src="/image/lovereport/the%20power%20of%20my%20love%20code.webp"
            alt="선천코드의 매력을 이해하고 연애의 주도권을 되찾는 백도화 이미지"
            width={1280}
            height={720}
            className="block h-auto w-full rounded-2xl border border-white/10 shadow-2xl"
          />
        </div>

        {/* 3. 하단 글라스 선언문 */}
        <div className="max-w-3xl mx-auto text-center">
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
      </Reveal>
    </section>
  )
}
