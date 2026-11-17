'use client'

import Image from 'next/image'

/**
 * 백도화 연애 리포트 — 목차 상단 파노라마 미디어 컴포넌트
 * - 원본 규격: 2172 x 724 (가로형 파노라마 약 3:1)
 * - 반응형: 모바일~데스크톱 비율 보존 및 최대 콘텐츠 너비(100%, max-w-7xl) 매칭
 * - 확장성: 추후 '책장 넘김 영상(video)'으로 손쉽게 교체할 수 있도록 독립 모듈로 설계
 */
export default function TableOfContentsMedia() {
  return (
    <div className="w-full max-w-7xl mx-auto mt-8">
      <div className="relative w-full overflow-hidden rounded-2xl md:rounded-[28px] border border-white/10 shadow-2xl bg-[#140816]">
        <Image
          src="/image/lovereport/love%20secret%20chapters.webp"
          alt="선천코드 연애 리포트 제1장~제8장 심층 분석 전체 목차 파노라마"
          width={2172}
          height={724}
          className="w-full h-auto object-contain block"
          sizes="(max-width: 1280px) 100vw, 1280px"
          priority={false}
        />
      </div>
    </div>
  )
}
