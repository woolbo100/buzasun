'use client'

import { useState, useEffect } from 'react'

export default function BookmarkTassel() {
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    // 로컬 스토리지에서 즐겨찾기 상태 확인
    const saved = localStorage.getItem('bookmarked')
    if (saved === 'true') {
      setIsBookmarked(true)
    }
  }, [])

  const handleClick = () => {
    const newState = !isBookmarked
    setIsBookmarked(newState)
    localStorage.setItem('bookmarked', String(newState))
    
    // 피드백 메시지 (선택사항)
    if (newState) {
      alert('즐겨찾기에 추가되었습니다!')
    } else {
      alert('즐겨찾기에서 제거되었습니다.')
    }
  }

  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fixed top-12 right-12 md:top-16 md:right-16 z-50 cursor-pointer transition-all duration-300 group"
      aria-label="즐겨찾기"
      style={{
        filter: isHovered 
          ? 'drop-shadow(0 0 20px rgba(255, 182, 193, 0.6)) brightness(1.1)' 
          : 'drop-shadow(0 0 8px rgba(138, 43, 226, 0.3))',
      }}
    >
      {/* 노리개 SVG */}
      <svg
        width="80"
        height="160"
        viewBox="0 0 60 120"
        className="transition-all duration-300"
        style={{
          animation: 'swing 3s ease-in-out infinite',
          transformOrigin: '40px 0',
        }}
      >
        {/* 상단 코드 */}
        <line
          x1="30"
          y1="0"
          x2="30"
          y2="15"
          stroke="#8a2be2"
          strokeWidth="2"
          fill="none"
        />
        
        {/* 진주 구슬 */}
        <circle
          cx="30"
          cy="20"
          r="4"
          fill="#f7f1ff"
          style={{
            filter: 'drop-shadow(0 0 4px rgba(247, 241, 255, 0.8))',
          }}
        />
        
        {/* 매듭 */}
        <path
          d="M 25 25 Q 30 28 35 25 Q 30 30 25 25"
          stroke="#8a2be2"
          strokeWidth="1.5"
          fill="none"
        />
        
        {/* 자개 꽃 - hover 시 빛남 */}
        <g
          style={{
            filter: isHovered 
              ? 'drop-shadow(0 0 12px rgba(255, 182, 193, 0.8)) drop-shadow(0 0 20px rgba(138, 43, 226, 0.6))' 
              : 'drop-shadow(0 0 4px rgba(255, 182, 193, 0.3))',
            transition: 'filter 0.3s ease',
          }}
        >
          {/* 꽃잎들 - 자개 느낌 */}
          <ellipse
            cx="30"
            cy="40"
            rx="8"
            ry="12"
            fill="url(#pearlGradient)"
            opacity={isHovered ? 1 : 0.9}
            transform="rotate(0 30 40)"
          />
          <ellipse
            cx="30"
            cy="40"
            rx="8"
            ry="12"
            fill="url(#pearlGradient)"
            opacity={isHovered ? 1 : 0.9}
            transform="rotate(72 30 40)"
          />
          <ellipse
            cx="30"
            cy="40"
            rx="8"
            ry="12"
            fill="url(#pearlGradient)"
            opacity={isHovered ? 1 : 0.9}
            transform="rotate(144 30 40)"
          />
          <ellipse
            cx="30"
            cy="40"
            rx="8"
            ry="12"
            fill="url(#pearlGradient)"
            opacity={isHovered ? 1 : 0.9}
            transform="rotate(216 30 40)"
          />
          <ellipse
            cx="30"
            cy="40"
            rx="8"
            ry="12"
            fill="url(#pearlGradient)"
            opacity={isHovered ? 1 : 0.9}
            transform="rotate(288 30 40)"
          />
          
          {/* 꽃 중심 - 금색 */}
          <circle
            cx="30"
            cy="40"
            r="3"
            fill="#ffd700"
            style={{
              filter: 'drop-shadow(0 0 4px rgba(255, 215, 0, 0.8))',
            }}
          />
        </g>
        
        {/* 노리개 캡 */}
        <rect
          x="25"
          y="50"
          width="10"
          height="6"
          fill="#8a2be2"
          rx="1"
        />
        <rect
          x="26"
          y="52"
          width="8"
          height="2"
          fill="#ffd700"
        />
        
        {/* 노리개 실들 */}
        <g opacity="0.9">
          {Array.from({ length: 20 }).map((_, i) => (
            <line
              key={i}
              x1={28 + (i % 5) * 1}
              y1="58"
              x2={28 + (i % 5) * 1 + (Math.random() - 0.5) * 2}
              y2="120"
              stroke={i % 3 === 0 ? '#8a2be2' : i % 3 === 1 ? '#ff1493' : '#4b0082'}
              strokeWidth="1"
              opacity="0.7"
            />
          ))}
        </g>
        
        {/* 그라데이션 정의 */}
        <defs>
          <linearGradient id="pearlGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fce7f3" stopOpacity="0.9" />
            <stop offset="30%" stopColor="#ffb6c1" stopOpacity="0.8" />
            <stop offset="60%" stopColor="#dda0dd" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#9370db" stopOpacity="0.6" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* 즐겨찾기 상태 표시 */}
      {isBookmarked && (
        <div 
          className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-pink-500"
          style={{
            boxShadow: '0 0 8px rgba(255, 20, 147, 0.8)',
          }}
        />
      )}
    </button>
  )
}
