'use client'

import { useState, useEffect, useRef } from 'react'
import Toast from './Toast'

export default function BookmarkTassel() {
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState('')
  const [hasAnimated, setHasAnimated] = useState(false)
  const containerRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    // 로컬 스토리지에서 즐겨찾기 상태 확인
    const saved = localStorage.getItem('bookmarked')
    if (saved === 'true') {
      setIsBookmarked(true)
    }

    // 첫 진입 애니메이션
    const timer = setTimeout(() => {
      setHasAnimated(true)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  const handleClick = () => {
    const newState = !isBookmarked
    setIsBookmarked(newState)
    localStorage.setItem('bookmarked', String(newState))
    
    // Ripple 효과
    if (containerRef.current) {
      const ripple = document.createElement('div')
      ripple.className = 'absolute inset-0 rounded-full pointer-events-none'
      ripple.style.background = 'radial-gradient(circle, rgba(255, 20, 147, 0.4) 0%, transparent 70%)'
      ripple.style.animation = 'ripple 0.6s ease-out'
      ripple.style.transformOrigin = 'center'
      containerRef.current.appendChild(ripple)
      
      setTimeout(() => {
        ripple.remove()
      }, 600)
    }

    // Toast 메시지
    const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0
    const shortcut = isMac ? 'Cmd+D' : 'Ctrl+D'
    setToastMessage(`${shortcut}로 즐겨찾기에 추가하세요`)
    setShowToast(true)
  }

  return (
    <>
      <button
        ref={containerRef}
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="fixed top-8 right-6 md:top-12 md:right-20 z-50 cursor-pointer transition-all duration-300 group"
        aria-label="즐겨찾기"
        style={{
          filter: isHovered 
            ? 'drop-shadow(0 0 16px rgba(255, 182, 193, 0.4)) brightness(1.05)' 
            : isBookmarked
            ? 'drop-shadow(0 0 8px rgba(255, 20, 147, 0.3))'
            : 'drop-shadow(0 0 6px rgba(138, 43, 226, 0.2))',
        }}
      >
        {/* 상단 고정점과 줄(끈) */}
        <div 
          className="absolute -top-10 md:-top-16 left-1/2 -translate-x-1/2 w-0.5 pointer-events-none"
          style={{
            height: '40px',
            background: 'linear-gradient(180deg, rgba(138, 43, 226, 0.8) 0%, rgba(147, 51, 234, 0.7) 50%, rgba(139, 92, 246, 0.6) 100%)',
            boxShadow: '0 0 8px rgba(138, 43, 226, 0.4), 0 0 12px rgba(147, 51, 234, 0.3)',
          }}
        />

        {/* 노리개 SVG */}
        <svg
          className="w-[70px] h-[180px] md:w-[90px] md:h-[220px] transition-all duration-300 relative z-10"
          viewBox="0 0 60 120"
          style={{
            animation: hasAnimated 
              ? 'swingGentle 4s ease-in-out infinite' 
              : 'swingInitial 1.5s ease-in-out',
            transformOrigin: 'center top',
          }}
        >
          {/* 상단 고정 고리 */}
          <circle
            cx="30"
            cy="5"
            r="2.5"
            fill="#9333ea"
            style={{
              filter: 'drop-shadow(0 0 4px rgba(147, 51, 234, 0.6))',
            }}
          />
          
          {/* 상단 코드 */}
          <line
            x1="30"
            y1="5"
            x2="30"
            y2="15"
            stroke="#9333ea"
            strokeWidth="2"
            fill="none"
            style={{
              filter: 'drop-shadow(0 0 4px rgba(147, 51, 234, 0.6))',
            }}
          />
          
          {/* 진주 구슬 */}
          <circle
            cx="30"
            cy="20"
            r="4.5"
            fill="#f7f1ff"
            style={{
              filter: 'drop-shadow(0 0 6px rgba(247, 241, 255, 0.8))',
            }}
          />
          
          {/* 매듭 */}
          <path
            d="M 25 25 Q 30 28 35 25 Q 30 30 25 25"
            stroke="#9333ea"
            strokeWidth="1.5"
            fill="none"
            style={{
              filter: 'drop-shadow(0 0 3px rgba(147, 51, 234, 0.5))',
            }}
          />
          
          {/* 자개 꽃 - hover 시 빛남 */}
          <g
            className="transition-all duration-300"
            style={{
              filter: isHovered 
                ? 'drop-shadow(0 0 16px rgba(255, 182, 193, 0.6)) drop-shadow(0 0 24px rgba(255, 20, 147, 0.4))' 
                : isBookmarked
                ? 'drop-shadow(0 0 8px rgba(255, 20, 147, 0.3))'
                : 'drop-shadow(0 0 4px rgba(255, 182, 193, 0.2))',
              opacity: isHovered ? 1 : 0.95,
            }}
            transform="translate(30 40) scale(0.28) translate(-100 -100)"
          >
            <defs>
              {/* 자개(진주) 느낌의 영롱한 펄 그라데이션 - 입체감 강화 */}
              <radialGradient id="pearlFillTassel" cx="50%" cy="45%" r="75%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
                <stop offset="25%" stopColor="#fefefe" stopOpacity="0.98" />
                <stop offset="50%" stopColor="#f8f5ff" stopOpacity="0.92" />
                <stop offset="75%" stopColor="#f0ebff" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#e9d5ff" stopOpacity="0.75" />
              </radialGradient>

              {/* 자개(나전) 느낌의 영롱한 무지개 하이라이트 - 입체감 */}
              <linearGradient id="najeonTassel" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.95)" />
                <stop offset="20%" stopColor="rgba(248,245,255,0.85)" />
                <stop offset="40%" stopColor="rgba(240,235,255,0.75)" />
                <stop offset="60%" stopColor="rgba(232,225,255,0.7)" />
                <stop offset="80%" stopColor="rgba(255,250,252,0.8)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0.9)" />
              </linearGradient>

              {/* 자개 반사 느낌 - 입체감 강화 */}
              <linearGradient id="pearlReflectionTassel" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.6)" />
                <stop offset="30%" stopColor="rgba(255,240,245,0.4)" />
                <stop offset="60%" stopColor="rgba(230,240,255,0.35)" />
                <stop offset="100%" stopColor="rgba(255,250,240,0.3)" />
              </linearGradient>

              {/* 가장자리 핑크 라인 글로우 */}
              <filter id="edgeGlowTassel" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="2.5" result="blur" />
                <feColorMatrix
                  in="blur"
                  type="matrix"
                  values="1 0 0 0 0 0 0.2 0 0 0 0 0 0.4 0 0 0 0 0 0.7 0"
                  result="pinkEdge"
                />
                <feMerge>
                  <feMergeNode in="pinkEdge" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              {/* 입체감을 위한 그림자 */}
              <filter id="depthShadowTassel" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="1.5" result="blur" />
                <feOffset dx="0" dy="1" result="offset" />
                <feColorMatrix
                  in="offset"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                  result="shadow"
                />
                <feMerge>
                  <feMergeNode in="shadow" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              {/* 살짝 반짝이는 점(미세) */}
              <filter id="sparkleTassel" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="0.8" />
              </filter>
            </defs>

            {/* 꽃잎 5장: 하나의 꽃잎 모양을 회전 복제 - 입체감 강화 */}
            <g transform="translate(100 100)" filter="url(#depthShadowTassel)">
              {/* 꽃잎 하나 */}
              <g id="petalTassel">
                {/* 꽃잎 내부 - 자개/진주 톤 (기본 레이어) */}
                <path
                  d="M 0 -70 C 20 -70, 38 -48, 34 -28 C 30 -10, 14 8, 0 18 C -14 8, -30 -10, -34 -28 C -38 -48, -20 -70, 0 -70 Z"
                  fill="url(#pearlFillTassel)"
                  opacity="0.98"
                />
                {/* 자개 반사 느낌 - 입체감 */}
                <path
                  d="M 0 -64 C 16 -62, 28 -45, 25 -28 C 22 -12, 12 2, 0 10 C -12 2, -22 -12, -25 -28 C -28 -45, -16 -62, 0 -64 Z"
                  fill="url(#pearlReflectionTassel)"
                  opacity="0.6"
                />
                {/* 자개 하이라이트 오버레이 */}
                <path
                  d="M 0 -64 C 16 -62, 28 -45, 25 -28 C 22 -12, 12 2, 0 10 C -12 2, -22 -12, -25 -28 C -28 -45, -16 -62, 0 -64 Z"
                  fill="url(#najeonTassel)"
                  opacity="0.55"
                />
                {/* 가장자리 핑크 라인 - 소프트 글로우 */}
                <path
                  d="M 0 -70 C 20 -70, 38 -48, 34 -28 C 30 -10, 14 8, 0 18 C -14 8, -30 -10, -34 -28 C -38 -48, -20 -70, 0 -70 Z"
                  fill="none"
                  stroke="#ff1493"
                  strokeWidth="1.8"
                  opacity="0.75"
                  filter="url(#edgeGlowTassel)"
                />
              </g>

              {/* 5장 회전 */}
              <use href="#petalTassel" transform="rotate(0)" />
              <use href="#petalTassel" transform="rotate(72)" />
              <use href="#petalTassel" transform="rotate(144)" />
              <use href="#petalTassel" transform="rotate(216)" />
              <use href="#petalTassel" transform="rotate(288)" />

              {/* 중앙 보석 - 자개/진주 느낌 (입체감 강화) */}
              <circle r="18" fill="rgba(255,255,255,0.2)" />
              <circle r="14" fill="url(#najeonTassel)" opacity="0.9" />
              <circle r="11" fill="url(#pearlReflectionTassel)" opacity="0.7" />
              <circle r="9" fill="rgba(255,255,255,0.95)" opacity="0.95" />
              <circle r="4" fill="#ffffff" opacity="1" />

              {/* 미세 스파클 - 절제된 고급 톤 */}
              <g opacity="0.5" filter="url(#sparkleTassel)">
                <circle cx="-38" cy="-10" r="1.8" fill="rgba(255,255,255,0.9)" />
                <circle cx="42" cy="-6" r="1.6" fill="rgba(255,255,255,0.85)" />
                <circle cx="10" cy="44" r="1.4" fill="rgba(255,255,255,0.8)" />
                <circle cx="-14" cy="-48" r="1.2" fill="rgba(255,255,255,0.75)" />
                <circle cx="28" cy="-35" r="1.3" fill="rgba(255,255,255,0.7)" />
              </g>
            </g>
          </g>
          
          {/* 노리개 캡 */}
          <rect
            x="24"
            y="50"
            width="12"
            height="7"
            fill="#9333ea"
            rx="1.5"
            style={{
              filter: 'drop-shadow(0 0 4px rgba(147, 51, 234, 0.5))',
            }}
          />
          <rect
            x="25"
            y="52"
            width="10"
            height="3"
            fill="#ffd700"
            rx="0.5"
          />
          
          {/* 노리개 실들 */}
          <g opacity="0.85">
            {Array.from({ length: 24 }).map((_, i) => {
              const baseX = 26 + (i % 6) * 1.2
              const randomOffset = (i * 0.3) % 2 - 1
              const purpleShades = ['#9333ea', '#8b5cf6', '#a855f7', '#7c3aed']
              return (
                <line
                  key={i}
                  x1={baseX}
                  y1="59"
                  x2={baseX + randomOffset}
                  y2="120"
                  stroke={purpleShades[i % purpleShades.length]}
                  strokeWidth="1.2"
                  opacity="0.75"
                  style={{
                    filter: 'drop-shadow(0 0 2px rgba(147, 51, 234, 0.3))',
                  }}
                />
              )
            })}
          </g>
          
        </svg>
        
        {/* Hover 시 핑크 블룸 */}
        {isHovered && (
          <div
            className="absolute inset-0 pointer-events-none rounded-full -z-10 transition-opacity duration-300"
            style={{
              background: 'radial-gradient(circle, rgba(255, 20, 147, 0.15) 0%, transparent 70%)',
              filter: 'blur(20px)',
              transform: 'scale(1.5)',
            }}
          />
        )}
      </button>

      <Toast
        message={toastMessage}
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
    </>
  )
}
