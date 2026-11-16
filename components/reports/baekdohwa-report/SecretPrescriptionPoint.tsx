'use client'

import Image from 'next/image'
import Reveal from '@/components/Reveal'

interface SecretPrescriptionPointProps {
  imageSrc?: string
}

export default function SecretPrescriptionPoint({
  imageSrc = '/image/lovereport/discover%20your%20love%20code.webp'
}: SecretPrescriptionPointProps) {
  return (
    <section id="point-04-secret" className="mb-32 md:mb-40 scroll-mt-28 md:scroll-mt-36">
      <Reveal>
        {/* 모바일 전용 상단 헤드카피 (데스크톱에서는 숨김) */}
        <div className="lg:hidden text-center sm:text-left mb-8 space-y-2.5 max-w-7xl mx-auto">
          <span className="block font-elegant text-[12pt] font-semibold tracking-[0.2em] text-[#D9A8A7] uppercase">
            POINT 04 · SECRET PRESCRIPTION
          </span>
          <h2 className="text-2xl sm:text-3xl font-elegant font-bold text-white leading-[1.3] break-keep">
            &ldquo;당신만을 위해 봉인된<br className="sm:hidden" />
            <span className="gradient-text-love"> 단 하나의 선천코드 처방전</span>&rdquo;
          </h2>
        </div>

        {/* 2단 구성: 데스크톱 [왼쪽: 설명 텍스트 7단] | [오른쪽: 3:4 세로 이미지 5단] */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-20 items-center lg:items-stretch">
          
          {/* 왼쪽 텍스트 그룹 (데스크톱 7단 / 모바일 순서 2: 이미지 뒤에 표시) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6 lg:space-y-0 order-2 lg:order-1 h-full py-0.5">
            {/* 상단 그룹: 데스크톱 헤드카피 + 본문 설명 문단 */}
            <div className="space-y-6 lg:space-y-7">
              {/* 데스크톱 전용 헤드카피 */}
              <div className="hidden lg:block space-y-3">
                <span className="block font-elegant text-[12pt] font-semibold tracking-[0.2em] text-[#D9A8A7] uppercase">
                  POINT 04 · SECRET PRESCRIPTION
                </span>
                <h2 className="text-2xl md:text-[34px] lg:text-[36px] font-elegant font-bold text-white leading-[1.25] md:leading-[1.3] break-keep">
                  &ldquo;당신만을 위해 봉인된<br />
                  <span className="gradient-text-love">단 하나의 선천코드 처방전</span>&rdquo;
                </h2>
              </div>

              {/* 본문 설명 문단 */}
              <div className="space-y-4 md:space-y-5 pt-1">
                {/* 문장 1 */}
                <p className="text-[17px] md:text-[19px] text-[#FAF7F2] font-medium leading-relaxed break-keep">
                  누구에게나 똑같이 열려 있는 뻔한 조언이 아닙니다.
                </p>

                {/* 문장 2 */}
                <p className="text-[16px] sm:text-[17px] md:text-[18px] text-[#EDE6DA]/85 font-light leading-[1.8] break-keep">
                  오직 당신의 생년월시 속에 숨겨진 고유한 선천코드와 마음의 설계를 해독하여, 가장 은밀하고 비밀스럽게 봉인된 맞춤형 연애 처방을 내립니다.
                </p>
              </div>
            </div>

            {/* 하단 강조 문구 박스 (기존 POINT 02 강조 박스와 동일한 크기·색상·디자인) */}
            <div className="p-5 md:p-6 rounded-2xl border border-[#B7788D]/25 bg-gradient-to-r from-[#2D0A1E]/30 to-[#140816]/40 backdrop-blur-sm space-y-2 mt-6 lg:mt-8">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D9A8A7] animate-pulse" />
                <span className="text-xs font-mono font-semibold tracking-wider text-[#D9A8A7] uppercase">
                  CONFIDENTIAL PRESCRIPTION
                </span>
              </div>
              <p className="font-elegant font-semibold text-[16px] md:text-[18px] text-[#D9A8A7] leading-relaxed break-keep">
                &ldquo;당신의 연애를 구원할 단 하나의 시크릿 리포트가 마침내 펼쳐집니다.&rdquo;
              </p>
            </div>
          </div>

          {/* 오른쪽 3:4 세로 이미지 (데스크톱 5단 / 모바일 순서 1: POINT 01, 02와 동일한 3:4 규격) */}
          <div className="lg:col-span-5 relative group flex flex-col order-1 lg:order-2 mb-8 lg:mb-0 justify-start">
            <div className="relative aspect-[3/4] w-full max-w-sm sm:max-w-md lg:max-w-none mx-auto rounded-[28px] md:rounded-[36px] overflow-hidden border border-white/10 shadow-2xl bg-[#130917]">
              <Image 
                src={imageSrc} 
                alt="POINT 04 시크릿 처방전 — 당신만을 위해 봉인된 단 하나의 선천코드 처방전" 
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]" 
              />
            </div>
          </div>

        </div>
      </Reveal>
    </section>
  )
}
