'use client'

import Image from 'next/image'
import Reveal from '@/components/Reveal'

export default function RealTransformationBanner() {
  return (
    <section className="mb-20 md:mb-28 max-w-7xl mx-auto px-4 sm:px-6">
      <Reveal>
        {/* FINAL AWAKENING: 통합 와이드 레이아웃 에디토리얼 디자인 */}
        <div>
          <div className="text-center">
            {/* (1) 상단 영어 라벨 */}
            <span className="block font-elegant text-xs md:text-sm font-semibold tracking-[0.25em] text-[#D9A8A7] uppercase mb-4">
              FINAL AWAKENING
            </span>

            {/* (2) 메인 제목 (넓은 폭, 데스크톱 1~2줄, 아이보리 + 로즈플럼 그라데이션) */}
            <h2 className="text-[26px] sm:text-[30px] md:text-[38px] lg:text-[40px] font-elegant font-bold text-white mb-6 md:mb-8 leading-[1.3] break-keep max-w-4xl mx-auto">
              내 매력의 결을 세우고,<br className="hidden sm:inline" />{' '}
              <span className="gradient-text-love">사랑의 기준을 다시 씁니다.</span>
            </h2>

            {/* (3) 제목 아래 설명 (가로폭 약 760~860px 확보, 중앙 정렬, 자연스러운 줄바꿈) */}
            <div className="max-w-3xl mx-auto space-y-3 md:space-y-4 mb-10 md:mb-12">
              <p className="text-[16px] sm:text-[17px] md:text-[18px] text-[#EDE6DA]/85 font-light leading-[1.75] break-keep">
                사랑받기 위해 애쓰는 관계는 끝났습니다.
              </p>
              <p className="text-[16px] sm:text-[17px] md:text-[18px] text-[#EDE6DA]/85 font-light leading-[1.75] break-keep">
                이제는 나만의 고유한 매력을 깨우고, 누구에게 마음을 내어줄지 당당하게 선택할 차례입니다.
              </p>
            </div>

            {/* (4) 중간 핵심 메시지 (2개 문단, 2~3줄 자연스러운 호흡, 로즈플럼 강조) */}
            <div className="max-w-3xl mx-auto space-y-5 md:space-y-6 mb-10 md:mb-14">
              <p className="text-[16px] sm:text-[17px] md:text-[18px] text-[#EDE6DA]/85 font-light leading-[1.75] md:leading-[1.8] break-keep">
                자신의 선천코드를 읽고, 그 안에 숨겨진{' '}
                <span className="text-[#D9A8A7] font-semibold">&lsquo;치명적인 매력의 무기&rsquo;</span>를 정확히 꿰뚫는 순간,
                사랑의 판도는 달라지기 시작합니다.
              </p>
              <p className="text-[16px] sm:text-[17px] md:text-[18px] text-[#EDE6DA]/85 font-light leading-[1.75] md:leading-[1.8] break-keep">
                더 이상 누군가의 마음을 얻기 위해 나를 소모하지 않습니다.{' '}
                내 매력의 결이 선명해지고 선택의 기준이 세워질 때,
                나는 비로소 <span className="text-[#D9A8A7] font-semibold">사랑의 주도권</span>을 쥐게 됩니다.
              </p>
            </div>

            {/* (5) 마지막 각성 인용문 (상하 얇은 가로 구분선 사이, 앤티크 샴페인 골드 구분선, 두 번째 문장 로즈플럼 강조) */}
            <div className="my-10 md:my-14 py-8 md:py-10 border-y border-[#B49A70]/25 max-w-4xl mx-auto">
              <p className="font-elegant font-bold text-xl sm:text-2xl md:text-[26px] leading-[1.8] md:leading-[2.0] break-keep">
                <span className="text-[#FAF7F2] block sm:inline">&ldquo;언제 사랑받을지를 묻지 마세요.</span>{' '}
                <span className="text-[#D9A8A7] block sm:inline">왜 그런 사랑을 선택해 왔는지부터 읽으세요.&rdquo;</span>
              </p>
            </div>
          </div>

          {/* 아래쪽 가로 컨텐츠 풀 사이즈 이미지 (기존 한복 입은 여성 가로 와이드 이미지 그대로 유지) */}
          <div className="w-full max-w-[1280px] mx-auto mb-12 md:mb-16">
            <Image
              src="/image/lovereport/love-charm-discovery.webp"
              alt="선천코드의 기질을 읽고 사랑의 기적을 마주하는 백도화 비급 이미지"
              width={1280}
              height={720}
              className="block h-auto w-full rounded-2xl md:rounded-[28px] border border-white/10 shadow-2xl"
            />
          </div>
        </div>

        {/* 3. 이미지 아래 마지막 짧은 결심 문구 (배너 하단 중앙 정렬 브릿지) */}
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
