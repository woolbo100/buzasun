'use client'

import { useState } from 'react'
import Reveal from './Reveal'
import { Brain, Compass, Building2 } from 'lucide-react'
import BaekdohwaFlowerMark from './BaekdohwaFlowerMark'

export default function About() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section 
      id="about" 
      className="pt-40 pb-20 px-6 relative overflow-hidden"
      style={{ background: 'transparent' }}
    >
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* 메인 타이틀 */}
        <Reveal delayMs={100}>
          <div className="flex items-center justify-center gap-4 md:gap-8 mb-16">
            {/* 왼쪽 꽃 아이콘 */}
            <div 
              className="flex-shrink-0 cursor-pointer"
              style={{
                transition: 'filter 0.3s ease-out',
                filter: 'drop-shadow(0 0 6px rgba(236, 72, 153, 0.25))',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.filter = 'drop-shadow(0 0 12px rgba(255, 182, 193, 0.4)) brightness(1.15)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.filter = 'drop-shadow(0 0 6px rgba(236, 72, 153, 0.25))'
              }}
            >
              <BaekdohwaFlowerMark 
                size={80}
                className="hidden md:block"
                outlinePink={true}
              />
              <BaekdohwaFlowerMark 
                size={56}
                className="block md:hidden"
                outlinePink={true}
              />
            </div>
            
            <h2 
              className="text-3xl md:text-5xl lg:text-6xl font-elegant font-bold text-center"
              style={{
                color: '#f7f1ff',
                letterSpacing: '0.02em',
                lineHeight: 'clamp(1.15, 1.25, 1.25)',
              }}
            >
              백도화 선언
            </h2>
            
            {/* 오른쪽 꽃 아이콘 */}
            <div 
              className="flex-shrink-0 cursor-pointer"
              style={{
                transition: 'filter 0.3s ease-out',
                filter: 'drop-shadow(0 0 6px rgba(236, 72, 153, 0.25))',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.filter = 'drop-shadow(0 0 12px rgba(255, 182, 193, 0.4)) brightness(1.15)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.filter = 'drop-shadow(0 0 6px rgba(236, 72, 153, 0.25))'
              }}
            >
              <BaekdohwaFlowerMark 
                size={80}
                className="hidden md:block"
                outlinePink={true}
              />
              <BaekdohwaFlowerMark 
                size={56}
                className="block md:hidden"
                outlinePink={true}
              />
            </div>
          </div>
        </Reveal>

        {/* 메인 선언문 */}
        <Reveal delayMs={200}>
          <div className="max-w-3xl mx-auto">
            <p 
              className="text-xl md:text-2xl leading-loose text-center mb-32"
              style={{
                color: 'rgba(255, 255, 255, 0.7)',
                lineHeight: '2',
                wordBreak: 'keep-all',
              }}
            >
              백도화의 모든 분석과 설계는<br />
              심리·무의식·선천 코드·관계 패턴 분석 분야에서<br />
              공식적으로 검증된 다수의 전문 자격과<br />
              실제 상담·분석 데이터를 기반으로 합니다.
            </p>
          </div>
        </Reveal>

        {/* 강조 문구 (핫핑크) - 섹션 핵심 */}
        <Reveal delayMs={300}>
          <div 
            className="text-center mb-32 py-8 px-6 max-w-3xl mx-auto relative overflow-hidden"
            style={{
              border: `1px solid ${isHovered ? 'rgba(255, 0, 150, 0.33)' : 'rgba(255, 0, 150, 0.30)'}`,
              borderRadius: '16px',
              background: 'transparent',
              transition: 'border-color 0.35s ease-in-out, box-shadow 0.35s ease-in-out',
              boxShadow: isHovered 
                ? '0 0 12px rgba(236, 72, 153, 0.15), 0 0 20px rgba(236, 72, 153, 0.08)'
                : 'none',
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* 프레임 안쪽 그라데이션 광 효과 - 기본 상태에서 상시 적용, 중앙에서 가장 밝고 가장자리로 흐려짐 */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: isHovered
                  ? 'radial-gradient(ellipse at center, rgba(236, 72, 153, 0.11) 0%, rgba(138, 43, 226, 0.08) 40%, rgba(236, 72, 153, 0.05) 70%, transparent 100%)'
                  : 'radial-gradient(ellipse at center, rgba(236, 72, 153, 0.10) 0%, rgba(138, 43, 226, 0.07) 40%, rgba(236, 72, 153, 0.04) 70%, transparent 100%)',
                borderRadius: '16px',
                transition: 'background 0.35s ease-in-out',
              }}
            />
            <p 
              className="text-3xl md:text-4xl lg:text-5xl font-elegant font-bold relative z-10"
              style={{
                color: '#ec4899',
                letterSpacing: '0.12em',
                lineHeight: '1.20',
                wordBreak: 'keep-all',
              }}
            >
              감이 아닌 <span style={{ textShadow: isHovered ? '0 0 5px rgba(236, 72, 153, 0.20), 0 0 8px rgba(236, 72, 153, 0.13)' : '0 0 5px rgba(236, 72, 153, 0.15), 0 0 8px rgba(236, 72, 153, 0.1)', transition: 'text-shadow 0.35s ease-in-out' }}>이론</span>
              <br />
              직관이 아닌 <span style={{ textShadow: isHovered ? '0 0 5px rgba(236, 72, 153, 0.20), 0 0 8px rgba(236, 72, 153, 0.13)' : '0 0 5px rgba(236, 72, 153, 0.15), 0 0 8px rgba(236, 72, 153, 0.1)', transition: 'text-shadow 0.35s ease-in-out' }}>구조</span>
              <br />
              위로가 아닌 <span style={{ textShadow: isHovered ? '0 0 5px rgba(236, 72, 153, 0.20), 0 0 8px rgba(236, 72, 153, 0.13)' : '0 0 5px rgba(236, 72, 153, 0.15), 0 0 8px rgba(236, 72, 153, 0.1)', transition: 'text-shadow 0.35s ease-in-out' }}>설계</span>
            </p>
          </div>
        </Reveal>

        {/* 자격증 신뢰 보증 문장 */}
        <Reveal delayMs={400}>
          <div className="max-w-3xl mx-auto">
            <p 
              className="text-xl md:text-xl leading-loose text-center mb-20"
              style={{
                color: 'rgba(255, 255, 255, 0.78)',
                lineHeight: '2',
                wordBreak: 'keep-all',
              }}
            >
              심리상담 · 연애심리 · 명리심리 · NLP기법 · 최면심리 · 무의식 설계 · 콘텐츠 구조 분석 분야의<br />
              전문 자격과 연구를 바탕으로 리포트는 설계됩니다.
            </p>
          </div>
        </Reveal>

        {/* 자격증 그룹핑 - 카드 레이아웃 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* SECTION 1: 내면 설계 */}
          <Reveal delayMs={500}>
            <div 
              className="rounded-2xl p-8 h-full transition-all duration-300"
              style={{
                background: 'rgba(26, 6, 38, 0.4)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)'
                e.currentTarget.style.background = 'rgba(26, 6, 38, 0.5)'
                e.currentTarget.style.boxShadow = '0 0 20px rgba(236, 72, 153, 0.15), 0 0 40px rgba(236, 72, 153, 0.08)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'
                e.currentTarget.style.background = 'rgba(26, 6, 38, 0.4)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <div className="text-center mb-6">
                <Brain 
                  size={48} 
                  className="mx-auto mb-4"
                  style={{
                    color: '#ec4899',
                    opacity: 0.9,
                  }}
                />
              </div>
              <h3 
                className="text-2xl md:text-3xl font-elegant font-semibold mb-3 text-center"
                style={{
                  color: '#f7f1ff',
                  letterSpacing: '0.05em',
                }}
              >
                내면 설계
              </h3>
              <p 
                className="text-base md:text-lg mb-6 text-center"
                style={{
                  color: '#ec4899',
                  letterSpacing: '0.1em',
                }}
              >
                Inner Design
              </p>
              <div 
                className="space-y-3 text-base text-center"
                style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  lineHeight: '1.6',
                }}
              >
                <p>심리상담</p>
                <p>연애심리</p>
                <p>NLP기법</p>
                <p>최면심리</p>
              </div>
            </div>
          </Reveal>

          {/* SECTION 2: 선천코드 분석 */}
          <Reveal delayMs={600}>
            <div 
              className="rounded-2xl p-8 h-full transition-all duration-300"
              style={{
                background: 'rgba(26, 6, 38, 0.4)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)'
                e.currentTarget.style.background = 'rgba(26, 6, 38, 0.5)'
                e.currentTarget.style.boxShadow = '0 0 20px rgba(236, 72, 153, 0.15), 0 0 40px rgba(236, 72, 153, 0.08)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'
                e.currentTarget.style.background = 'rgba(26, 6, 38, 0.4)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <div className="text-center mb-6">
                <Compass 
                  size={48} 
                  className="mx-auto mb-4"
                  style={{
                    color: '#ec4899',
                    opacity: 0.9,
                  }}
                />
              </div>
              <h3 
                className="text-2xl md:text-3xl font-elegant font-semibold mb-3 text-center"
                style={{
                  color: '#f7f1ff',
                  letterSpacing: '0.05em',
                }}
              >
                선천코드 분석
              </h3>
              <p 
                className="text-base md:text-lg mb-6 text-center"
                style={{
                  color: '#ec4899',
                  letterSpacing: '0.1em',
                }}
              >
                Code Analyzing
              </p>
              <div 
                className="space-y-3 text-base text-center"
                style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  lineHeight: '1.6',
                }}
              >
                <p>명리심리</p>
                <p>타로심리</p>
                <p>풍수학, 성명학</p>
                <p>동양철학</p>
              </div>
            </div>
          </Reveal>

          {/* SECTION 3: 미래 설계 */}
          <Reveal delayMs={700}>
            <div 
              className="rounded-2xl p-8 h-full transition-all duration-300"
              style={{
                background: 'rgba(26, 6, 38, 0.4)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)'
                e.currentTarget.style.background = 'rgba(26, 6, 38, 0.5)'
                e.currentTarget.style.boxShadow = '0 0 20px rgba(236, 72, 153, 0.15), 0 0 40px rgba(236, 72, 153, 0.08)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'
                e.currentTarget.style.background = 'rgba(26, 6, 38, 0.4)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <div className="text-center mb-6">
                <Building2 
                  size={48} 
                  className="mx-auto mb-4"
                  style={{
                    color: '#ec4899',
                    opacity: 0.9,
                  }}
                />
              </div>
              <h3 
                className="text-2xl md:text-3xl font-elegant font-semibold mb-3 text-center"
                style={{
                  color: '#f7f1ff',
                  letterSpacing: '0.05em',
                }}
              >
                미래 설계
              </h3>
              <p 
                className="text-base md:text-lg mb-6 text-center"
                style={{
                  color: '#ec4899',
                  letterSpacing: '0.1em',
                }}
              >
                Future Architect
              </p>
              <div 
                className="space-y-3 text-base text-center"
                style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  lineHeight: '1.6',
                }}
              >
                <p>AI 콘텐츠 제작</p>
                <p>퍼스널 브랜딩</p>
                <p>디지털 자아 설계</p>
                <p>뇌과학 기반 설계</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
