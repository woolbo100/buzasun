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
      {/* 컨테이너: 노리개 전체를 하나의 그룹으로 */}
      <div className="fixed top-0 right-6 md:right-20 z-50">
        <button
          ref={containerRef}
          onClick={handleClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="cursor-pointer transition-all duration-300 group"
          aria-label="즐겨찾기"
          style={{
            filter: isClicked
              ? 'drop-shadow(0 0 20px rgba(255, 20, 147, 0.6)) brightness(1.15)'
              : isHovered 
              ? 'drop-shadow(0 0 12px rgba(255, 182, 193, 0.3)) brightness(1.05)' 
              : isBookmarked
              ? 'drop-shadow(0 0 6px rgba(255, 20, 147, 0.25))'
              : 'drop-shadow(0 0 4px rgba(138, 43, 226, 0.15))',
            transition: 'filter 0.3s ease-out',
            transformOrigin: 'center top',
            animation: hasAnimated 
              ? 'swingGentle 4s ease-in-out infinite' 
              : 'swingInitial 1.5s ease-in-out',
          }}
        >
          <svg
            className="w-[70px] h-[280px] md:w-[90px] md:h-[320px]"
            viewBox="0 0 60 200"
            style={{
              display: 'block',
            }}
          >
            <defs>
              {/* 줄 그라데이션 - 딥 버건디 + 퍼플 */}
              <linearGradient id="cordGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#6b1d3f" />
                <stop offset="30%" stopColor="#5a1a35" />
                <stop offset="60%" stopColor="#4a152b" />
                <stop offset="100%" stopColor="#3d1022" />
              </linearGradient>
              
              {/* 꼬임실 매듭 그라데이션 - 딥 버건디 */}
              <linearGradient id="knotGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#5a1a35" />
                <stop offset="50%" stopColor="#4a152b" />
                <stop offset="100%" stopColor="#3d1022" />
              </linearGradient>
              
              {/* 노리개 캡 그라데이션 */}
              <linearGradient id="capGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#5a1a35" />
                <stop offset="50%" stopColor="#4a152b" />
                <stop offset="100%" stopColor="#3d1022" />
              </linearGradient>
              
              {/* 노리개 실 그라데이션 - 버건디 → 딥퍼플 → 블랙 */}
              <linearGradient id="threadGradient0" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#6b1d3f" />
                <stop offset="30%" stopColor="#4a152b" />
                <stop offset="60%" stopColor="#2d0a1a" />
                <stop offset="100%" stopColor="#1a0510" />
              </linearGradient>
              
              <linearGradient id="threadGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#5a1a35" />
                <stop offset="30%" stopColor="#3d1022" />
                <stop offset="60%" stopColor="#2a0a18" />
                <stop offset="100%" stopColor="#150508" />
              </linearGradient>
              
              <linearGradient id="threadGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#4a152b" />
                <stop offset="30%" stopColor="#2d0a1a" />
                <stop offset="60%" stopColor="#1a0510" />
                <stop offset="100%" stopColor="#0d0208" />
              </linearGradient>

              {/* 백도화 꽃 그라데이션 */}
              <radialGradient id="baekdohwaFill" cx="50%" cy="45%" r="75%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
                <stop offset="25%" stopColor="#fefefe" stopOpacity="0.98" />
                <stop offset="50%" stopColor="#faf9f7" stopOpacity="0.95" />
                <stop offset="75%" stopColor="#f5f3f0" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#f0ede8" stopOpacity="0.85" />
              </radialGradient>

              {/* 자개(나전) 느낌의 영롱한 하이라이트 */}
              <linearGradient id="najeonTassel" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.95)" />
                <stop offset="20%" stopColor="rgba(250,249,247,0.9)" />
                <stop offset="40%" stopColor="rgba(245,243,240,0.85)" />
                <stop offset="60%" stopColor="rgba(240,237,232,0.8)" />
                <stop offset="80%" stopColor="rgba(250,248,245,0.85)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0.9)" />
              </linearGradient>

              {/* 자개 반사 느낌 */}
              <linearGradient id="pearlReflectionTassel" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.6)" />
                <stop offset="30%" stopColor="rgba(250,248,245,0.4)" />
                <stop offset="60%" stopColor="rgba(245,240,235,0.35)" />
                <stop offset="100%" stopColor="rgba(240,235,230,0.3)" />
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

              {/* Hover 시 은은한 글로우 */}
              <filter id="hoverGlowTassel" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feColorMatrix
                  in="blur"
                  type="matrix"
                  values="1 0 0 0 0 0 0.3 0 0 0 0 0 0.5 0 0 0 0 0 0.8 0"
                  result="softGlow"
                />
                <feMerge>
                  <feMergeNode in="softGlow" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            
            {/* 줄: 화면 최상단부터 시작 */}
            <line
              x1="30"
              y1="0"
              x2="30"
              y2="50"
              stroke="url(#cordGradient)"
              strokeWidth="2.5"
              style={{
                filter: 'drop-shadow(0 0 2px rgba(90, 26, 53, 0.5))',
              }}
            />
            
            {/* 꼬임실 매듭: 줄과 꽃을 연결 */}
            <g transform="translate(30, 50)">
              {/* X자 꼬임 형태 */}
              <path
                d="M -4 -6 L 4 6 M 4 -6 L -4 6"
                stroke="url(#knotGradient)"
                strokeWidth="2"
                strokeLinecap="round"
                style={{
                  filter: 'drop-shadow(0 0 3px rgba(58, 21, 43, 0.6))',
                }}
              />
              {/* 매듭 중심 원 */}
              <circle
                cx="0"
                cy="0"
                r="3"
                fill="url(#knotGradient)"
                style={{
                  filter: 'drop-shadow(0 0 4px rgba(58, 21, 43, 0.7))',
                }}
              />
            </g>
            
            {/* 진주 구슬 (매듭 아래) */}
            <circle
              cx="30"
              cy="60"
              r="4.5"
              fill="#f7f1ff"
              style={{
                filter: 'drop-shadow(0 0 6px rgba(247, 241, 255, 0.8))',
              }}
            />
            
            {/* 자개 꽃 - 백도화 형태 */}
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
              transform="translate(30 90) scale(0.28) translate(-100 -100)"
            >
              {/* 꽃잎 5장: 백도화 형태 */}
              <g transform="translate(100 100)" filter="url(#depthShadowTassel)">
                <g id="petalTassel">
                  {/* 꽃잎 내부 - 화이트/아이보리 */}
                  <path
                    d="M 0 -70 C 20 -70, 38 -48, 34 -28 C 30 -10, 14 8, 0 18 C -14 8, -30 -10, -34 -28 C -38 -48, -20 -70, 0 -70 Z"
                    fill="url(#baekdohwaFill)"
                    opacity="0.98"
                  />
                  {/* 자개 반사 느낌 */}
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

                {/* 중앙 백도화 - 화이트/아이보리 */}
                <circle r="18" fill="rgba(255,255,255,0.2)" />
                <circle r="14" fill="url(#najeonTassel)" opacity="0.9" />
                <circle r="11" fill="url(#pearlReflectionTassel)" opacity="0.7" />
                <circle r="9" fill="rgba(255,255,255,0.95)" opacity="0.95" />
                {/* 중앙 핑크 원 제거, 대신 화이트 중심 */}
                <circle r="4" fill="#ffffff" opacity="1" />
              </g>
            </g>
            
            {/* 노리개 캡 */}
            <rect
              x="24"
              y="102"
              width="12"
              height="7"
              fill="url(#capGradient)"
              rx="1.5"
              style={{
                filter: 'drop-shadow(0 0 3px rgba(90, 26, 53, 0.4))',
              }}
            />
            <rect
              x="25"
              y="104"
              width="10"
              height="3"
              fill="#4a152b"
              rx="0.5"
              opacity="0.55"
            />
            
            {/* 노리개 실들 - 버건디 → 딥퍼플 → 블랙 그라데이션 */}
            <g opacity="0.8">
              {Array.from({ length: 24 }).map((_, i) => {
                const baseX = 26 + (i % 6) * 1.2
                const randomOffset = (i * 0.3) % 2 - 1
                return (
                  <line
                    key={i}
                    x1={baseX}
                    y1="111"
                    x2={baseX + randomOffset}
                    y2="200"
                    stroke={`url(#threadGradient${i % 3})`}
                    strokeWidth="1.25"
                    opacity="0.85"
                    style={{
                      filter: 'drop-shadow(0 0 1.5px rgba(58, 21, 43, 0.3))',
                    }}
                  />
                )
              })}
            </g>
          </svg>
          
          {/* Hover 시 약한 핑크 블룸 효과 */}
          {isHovered && (
            <div
              className="absolute pointer-events-none rounded-full -z-10 transition-opacity duration-300"
              style={{
                background: 'radial-gradient(circle, rgba(255, 20, 147, 0.15) 0%, rgba(255, 105, 180, 0.1) 30%, transparent 70%)',
                filter: 'blur(25px)',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%) scale(1.5)',
                width: '120px',
                height: '120px',
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
