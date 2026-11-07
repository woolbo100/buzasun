'use client'

import React from 'react'
import PetalsCanvas from './PetalsCanvas'

interface GlobalBackgroundProps {
  children: React.ReactNode
  /** 페이지별 배경 이미지 경로 */
  src: string
  /** 꽃잎 효과 활성화 여부 (기본값: true) */
  showPetals?: boolean
  /** 중앙 영역을 더 밝게 유지할지 여부 (기본값: false, 비밀상점용) */
  brightCenter?: boolean
  /** 페이지별 추가 배경 오버레이 (기존 보라색 배경 위에 반투명하게 얹히는 커스텀 레이어) */
  overlay?: React.ReactNode
}

/**
 * 백도화 글로벌 배경 시스템 (Global Background System)
 * 
 * 1. Background Image (페이지별 이미지, Opacity 0.5)
 * 2. Purple Gradient Overlay (전역 공통)
 * 2.5 Custom Overlay (페이지별 선택적 오버레이, 예: 풍요비책 딥 에메랄드 그린)
 * 3. Vignette Overlay (전역 공통)
 * 4. Content Layer (Z-index 및 가독성 확보)
 */
export default function GlobalBackground({
  children,
  src,
  showPetals = true,
  brightCenter = false,
  overlay
}: GlobalBackgroundProps) {
  return (
    <div className="relative min-h-screen">
      {/* 배경 레이어 시스템 (Fixed로 고정하여 스크롤 시에도 유지, transform-gpu로 레이어 격리) */}
      <div className="fixed inset-0 z-0 pointer-events-none transform-gpu" style={{ transform: 'translateZ(0)' }}>
        {/* 1. 기본 이미지 레이어 (Next.js Image로 최적화) */}
        <div className="absolute inset-0 z-0">
          <img
            src={src}
            alt=""
            className="w-full h-full object-cover opacity-50"
            style={{ objectPosition: 'center' }}
            loading="eager"
          />
        </div>

        {/* 2. 퍼플 그라데이션 오버레이 (브랜드 톤 유지) */}
        <div
          className="absolute inset-0 z-10"
          style={{ background: 'var(--bg-purple-overlay)' }}
        />

        {/* 2.5 페이지별 커스텀 오버레이 (특정 페이지에서 기존 보라색 배경 위에 얹힘) */}
        {overlay && (
          <div className="absolute inset-0 z-15 pointer-events-none">
            {overlay}
          </div>
        )}

        {/* 3. 비네팅 오버레이 (몰입감 및 가독성) */}
        <div
          className="absolute inset-0 z-20"
          style={{
            background: 'var(--bg-vignette)',
            /* brightCenter 옵션이 켜지면 비네팅의 불투명도를 낮춰 중앙을 더 밝게 표현 */
            opacity: brightCenter ? 0.5 : 1
          }}
        />

        {/* 4. 선택적 꽃잎 파티클 효과 (수량 대폭 증가) */}
        {showPetals && <PetalsCanvas color="#EDE6DA" density={80} />}
      </div>

      {/* 실질적 콘텐츠 영역 */}
      <div className="relative z-30">
        {children}
      </div>
    </div>
  )
}
