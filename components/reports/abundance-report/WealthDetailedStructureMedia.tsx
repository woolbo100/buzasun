'use client'

import Image from 'next/image'

/**
 * 백도화 풍요 리포트 — DETAILED STRUCTURE 대표 미디어 컴포넌트
 * - 실제 파일: /images/abundance/wealth-detailed-structure-banner.webp (1974 x 797)
 * - 연애 리포트와 동일한 가로폭(max-w-7xl) 및 라운드(rounded-2xl md:rounded-[28px])
 * - 상하/좌우 빈 여백 없이 꽉 찬 가로형 배너로 표시
 */
export default function WealthDetailedStructureMedia() {
  return (
    <div className="w-full max-w-7xl mx-auto mt-8 md:mt-9">
      <div className="relative w-full overflow-hidden rounded-2xl md:rounded-[28px] border border-[#608F82]/30 shadow-2xl bg-[#0d221c]">
        <Image
          src="/images/abundance/wealth-detailed-structure-banner.webp"
          alt="백도화 선천코드 풍요 리포트 제1장~제7장 정밀 분석 도감 목차 배너"
          width={1974}
          height={797}
          className="w-full h-auto block"
          sizes="(max-width: 1280px) 100vw, 1280px"
          priority={false}
        />
      </div>
    </div>
  )
}
