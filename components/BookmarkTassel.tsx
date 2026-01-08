'use client'

import { useState, useEffect, useRef } from 'react'
import Toast from './Toast'

export default function BookmarkTassel() {
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
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
    
    // Click 시 밝아졌다가 원래대로 효과
    setIsClicked(true)
    setTimeout(() => {
      setIsClicked(false)
    }, 500)
    
    // 핑크 빛 파동(ripple) 효과
    if (containerRef.current) {
      const ripple = document.createElement('div')
      ripple.className = 'absolute inset-0 rounded-full pointer-events-none'
      ripple.style.background = 'radial-gradient(circle, rgba(255, 20, 147, 0.5) 0%, rgba(255, 105, 180, 0.3) 30%, transparent 70%)'
      ripple.style.animation = 'ripple 0.5s ease-out'
      ripple.style.transformOrigin = 'center'
      ripple.style.zIndex = '10'
      containerRef.current.appendChild(ripple)
      
      setTimeout(() => {
        ripple.remove()
      }, 500)
    }

    // Toast 메시지
    const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0
    const shortcut = isMac ? 'Cmd+D' : 'Ctrl+D'
    setToastMessage(`${shortcut}로 즐겨찾기에 추가하세요`)
    setShowToast(true)
  }

  return (
    <>
      {/* 컨테이너: 노리개 전체를 감싸는 div */}
      <div className="fixed top-0 right-6 md:right-20 z-50 relative">
        {/* 줄: 화면 최상단부터 시작, 고정 높이 */}
        <div 
          className="absolute pointer-events-none"
          style={{
            top: '0',
            right: '0',
            width: '2px',
            height: '100px',
            background: 'linear-gradient(180deg, rgba(255, 192, 203, 0.85) 0%, rgba(255, 182, 193, 0.8) 30%, rgba(255, 175, 185, 0.75) 60%, rgba(255, 182, 193, 0.8) 100%)',
            boxShadow: 'inset 0 1px 2px rgba(255, 255, 255, 0.15), 0 0 3px rgba(255, 192, 203, 0.3)',
            zIndex: 0,
          }}
        />

        {/* 노리개 SVG: 줄 끝 지점에 배치, 줄을 살짝 덮음 */}
        <button
          ref={containerRef}
          onClick={handleClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="absolute cursor-pointer transition-all duration-300 group"
          aria-label="즐겨찾기"
          style={{
            top: '95px',
            right: '0',
            filter: isClicked
              ? 'drop-shadow(0 0 20px rgba(255, 20, 147, 0.6)) brightness(1.15)'
              : isHovered 
              ? 'drop-shadow(0 0 12px rgba(255, 182, 193, 0.3)) brightness(1.05)' 
              : isBookmarked
              ? 'drop-shadow(0 0 6px rgba(255, 20, 147, 0.25))'
              : 'drop-shadow(0 0 4px rgba(138, 43, 226, 0.15))',
            transition: 'filter 0.3s ease-out',
            zIndex: 10,
          }}
        >
          <svg
            className="w-[70px] h-[180px] md:w-[90px] md:h-[220px] transition-all duration-300"
            viewBox="0 0 60 120"
            style={{
              animation: hasAnimated 
                ? 'swingGentle 4s ease-in-out infinite' 
                : 'swingInitial 1.5s ease-in-out',
              transformOrigin: 'center top',
            }}
          >
          {/* 그라데이션 정의 - 줄과 술용 */}
          <defs>
            {/* 실크 끈 그라데이션 - 로즈핑크 */}
            <linearGradient id="cordGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffc0cb" />
              <stop offset="30%" stopColor="#ffb6c1" />
              <stop offset="60%" stopColor="#ffafb9" />
              <stop offset="100%" stopColor="#ffb6c1" />
            </linearGradient>
            
            {/* 노리개 캡 그라데이션 - 로즈핑크 */}
            <linearGradient id="capGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffb6c1" />
              <stop offset="50%" stopColor="#ffc0cb" />
              <stop offset="100%" stopColor="#ffb6c1" />
            </linearGradient>
            
            {/* 노리개 실 그라데이션 1 - 로즈핑크 */}
            <linearGradient id="threadGradient0" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffb6c1" />
              <stop offset="50%" stopColor="#ffc0cb" />
              <stop offset="100%" stopColor="#ffd0d5" />
            </linearGradient>
            
            {/* 노리개 실 그라데이션 2 - 밝은 로즈핑크 */}
            <linearGradient id="threadGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffa8b5" />
              <stop offset="50%" stopColor="#ffb6c1" />
              <stop offset="100%" stopColor="#ffc0cb" />
            </linearGradient>
            
            {/* 노리개 실 그라데이션 3 - 부드러운 로즈핑크 */}
            <linearGradient id="threadGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ff9fad" />
              <stop offset="50%" stopColor="#ffafb9" />
              <stop offset="100%" stopColor="#ffb6c1" />
            </linearGradient>
          </defs>
          
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
            stroke="url(#cordGradient)"
            strokeWidth="1.5"
            fill="none"
            style={{
              filter: 'drop-shadow(0 0 2px rgba(255, 192, 203, 0.35))',
            }}
          />
          
          {/* 자개 꽃 - hover 시 은은한 펄(glow) 효과 */}
          <g
            className="transition-all duration-300"
            style={{
              filter: isClicked
                ? 'drop-shadow(0 0 24px rgba(255, 255, 255, 0.8)) drop-shadow(0 0 36px rgba(255, 182, 193, 0.5)) drop-shadow(0 0 48px rgba(255, 20, 147, 0.4))'
                : isHovered 
                ? 'drop-shadow(0 0 16px rgba(255, 255, 255, 0.5)) drop-shadow(0 0 24px rgba(255, 182, 193, 0.3)) drop-shadow(0 0 32px rgba(255, 20, 147, 0.2))' 
                : isBookmarked
                ? 'drop-shadow(0 0 8px rgba(255, 20, 147, 0.25)) drop-shadow(0 0 12px rgba(255, 182, 193, 0.15))'
                : 'drop-shadow(0 0 4px rgba(255, 182, 193, 0.2))',
              opacity: isClicked ? 1.1 : isHovered ? 1 : isBookmarked ? 0.98 : 0.95,
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
                  stroke="#c71585"
                  strokeWidth="1.8"
                  opacity="0.85"
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
            fill="url(#capGradient)"
            rx="1.5"
            style={{
              filter: 'drop-shadow(0 0 3px rgba(255, 192, 203, 0.4))',
            }}
          />
          <rect
            x="25"
            y="52"
            width="10"
            height="3"
            fill="#ff9fad"
            rx="0.5"
            opacity="0.55"
          />
          
          {/* 노리개 실들 - 로즈핑크 (부드러운 새틴 광택) */}
          <g opacity="0.8">
            {Array.from({ length: 24 }).map((_, i) => {
              const baseX = 26 + (i % 6) * 1.2
              const randomOffset = (i * 0.3) % 2 - 1
              return (
                <line
                  key={i}
                  x1={baseX}
                  y1="59"
                  x2={baseX + randomOffset}
                  y2="120"
                  stroke={`url(#threadGradient${i % 3})`}
                  strokeWidth="1.25"
                  opacity="0.85"
                  style={{
                    filter: 'drop-shadow(0 0 1.5px rgba(255, 192, 203, 0.3))',
                  }}
                />
              )
            })}
          </g>
        </svg>
        
        {/* Hover 시 약한 핑크 블룸 효과 */}
        {isHovered && (
          <div
            className="absolute inset-0 pointer-events-none rounded-full -z-10 transition-opacity duration-300"
            style={{
              background: 'radial-gradient(circle, rgba(255, 20, 147, 0.15) 0%, rgba(255, 105, 180, 0.1) 30%, transparent 70%)',
              filter: 'blur(25px)',
              transform: 'scale(1.5)',
            }}
          />
        )}
      </button>
      </div>

      <Toast
        message={toastMessage}
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
    </>
  )
}
