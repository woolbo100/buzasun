'use client'

import Image from 'next/image'
import Reveal from '@/components/Reveal'

export default function RealTransformationBanner() {
  return (
    <section className="mb-20 md:mb-28 max-w-7xl mx-auto px-4 sm:px-6">
      <Reveal>
        {/* 2단 가로 배치: 좌측 3:4 세로 비율 이미지 + 우측 텍스트 블록 (세로 중앙 정렬) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-center">
          
          {/* 좌측: 3:4 세로 비율 이미지 (모바일에서는 위쪽) */}
          <div className="lg:col-span-5 w-full max-w-md mx-auto lg:max-w-none">
            <div className="relative aspect-[3/4] w-full rounded-2xl md:rounded-[28px] overflow-hidden border border-white/10 shadow-2xl bg-[#1a0b1c]">
              <Image
                src="/image/lovereport/love-charm-discovery.webp"
                alt="선천코드의 매력을 이해하고 연애의 주도권을 되찾는 백도화 이미지"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center"
                priority
              />
            </div>
          </div>

          {/* 우측: 텍스트 블록 (모바일에서는 아래쪽, 모든 요소 좌측 정렬 일직선, 세로 중앙 정렬) */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* 1. 소제목 (영문 라벨) */}
            <span className="block font-elegant text-xs md:text-sm font-semibold tracking-[0.25em] text-[#D9A8A7] uppercase mb-3 md:mb-4">
              FINAL AWAKENING
            </span>

            {/* 2. 두 줄 제목 */}
            <h2 className="text-2xl sm:text-3xl md:text-[34px] lg:text-[36px] font-elegant font-bold text-white mb-5 md:mb-6 leading-[1.28] md:leading-[1.3] break-keep">
              내 매력의 결을 세우고,
              <br />
              <span className="gradient-text-love">사랑의 기준을 다시 씁니다.</span>
            </h2>

            {/* 3. 본문 문단 1 */}
            <p className="text-[15px] sm:text-[16px] md:text-[17px] text-[#EDE6DA]/85 font-light leading-[1.75] break-keep mb-5 md:mb-6">
              사랑받기 위해 애쓰는 관계는 끝났습니다.<br className="hidden sm:inline" />{' '}
              나만의 고유한 매력을 깨우고, 누구에게 마음을 내어줄지 당당하게 선택할 차례입니다.
            </p>

            {/* 4. 본문 문단 2 */}
            <p className="text-[15px] sm:text-[16px] md:text-[17px] text-[#EDE6DA]/85 font-light leading-[1.75] break-keep mb-5 md:mb-6">
              자신의 선천코드를 읽고 숨겨진 <span className="text-[#D9A8A7] font-semibold">&lsquo;치명적인 매력의 무기&rsquo;</span>를 꿰뚫는 순간,<br className="hidden sm:inline" />{' '}
              사랑의 판도는 달라집니다.
            </p>

            {/* 5. 본문 문단 3 */}
            <p className="text-[15px] sm:text-[16px] md:text-[17px] text-[#EDE6DA]/85 font-light leading-[1.75] break-keep mb-7 md:mb-8">
              나를 소모하던 자리에서 내려와 선택의 기준이 세워질 때,<br className="hidden sm:inline" />{' '}
              비로소 <span className="text-[#D9A8A7] font-semibold">사랑의 주도권</span>을 쥐게 됩니다.
            </p>

            {/* 6. 하단 인용문 (앞쪽 기준선 일치) */}
            <div className="pt-1">
              <p className="font-elegant text-[17px] sm:text-[19px] md:text-[21px] leading-[1.5] md:leading-[1.55] break-keep">
                <span className="text-[#FAF7F2] font-medium block">
                  &ldquo;언제 사랑받을지를 묻지 마세요.
                </span>
                <span className="text-[#D9A8A7] font-semibold block mt-1">
                  왜 그런 사랑을 선택해 왔는지부터 읽으세요.&rdquo;
                </span>
              </p>
            </div>
          </div>

        </div>

        {/* 3. 이미지 아래 마지막 짧은 결심 문구 (배너 하단 중앙 정렬 브릿지) */}
        <div className="max-w-2xl mx-auto text-center mt-14 md:mt-20">
          <p className="text-sm sm:text-base text-[#D9A8A7] font-medium tracking-wide">
            당신의 사랑을 바꿀 첫 번째 선택,
          </p>
          <p className="font-elegant font-bold text-lg sm:text-[21px] text-[#FAF7F2] leading-relaxed break-keep mt-2.5">
            나만의 선천코드를 읽는 것에서 시작됩니다.
          </p>
        </div>
      </Reveal>
    </section>
  )
}
