'use client'

import Image from 'next/image'
import Reveal from '@/components/Reveal'

export default function RealTransformationBanner() {
  return (
    <section className="mb-10 md:mb-14">
      <Reveal>
        {/* 1. 이미지 위 메인 메시지 본문 (나의 매력 발견 → 사랑의 주도권 → 마지막 각성) */}
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-12">
          {/* 첫 번째 메시지 — 나의 매력 발견 */}
          <p className="text-[16px] md:text-[18px] text-[#EDE6DA]/90 font-light leading-[1.8] break-keep mb-7 md:mb-8">
            자신의 선천코드를 읽고 숨겨진 <span className="text-[#D9A8A7] font-semibold">&lsquo;치명적인 매력의 무기&rsquo;</span>를 꿰뚫는 순간,<br className="hidden sm:inline" />
            사랑의 판도는 달라집니다.
          </p>

          {/* 두 번째 메시지 — 사랑의 주도권 */}
          <p className="text-[16px] md:text-[18px] text-[#EDE6DA]/90 font-light leading-[1.8] break-keep">
            나를 소모하던 자리에서 내려와 선택의 기준이 세워질 때,<br className="hidden sm:inline" />
            비로소 <span className="text-[#D9A8A7] font-semibold">사랑의 주도권</span>을 쥐게 됩니다.
          </p>

          {/* 세 번째 메시지 — 마지막 각성 문장 (독립된 인용문 2줄 배치) */}
          <div className="mt-8 md:mt-10">
            <p className="font-elegant text-[18px] sm:text-[20px] md:text-[22px] leading-[1.5] md:leading-[1.55] break-keep">
              <span className="text-[#FAF7F2] font-medium">
                &ldquo;언제 사랑받을지를 묻지 마세요.
              </span>
              <br />
              <span className="text-[#D9A8A7] font-semibold">
                왜 그런 사랑을 선택해 왔는지부터 읽으세요.&rdquo;
              </span>
            </p>
          </div>
        </div>

        {/* 2. 한복 여성과 궁중 비급 가로형 대표 이미지 */}
        <div className="mx-auto mb-10 md:mb-14 w-full max-w-[1280px]">
          <Image
            src="/image/lovereport/love-charm-discovery.webp"
            alt="선천코드의 매력을 이해하고 연애의 주도권을 되찾는 백도화 이미지"
            width={1280}
            height={720}
            className="block h-auto w-full rounded-2xl md:rounded-[28px] border border-white/10 shadow-2xl"
          />
        </div>

        {/* 3. 이미지 아래 마지막 짧은 결심 문구 (상자 형태 제거, 순수 텍스트 중앙 정렬) */}
        <div className="max-w-2xl mx-auto text-center">
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
