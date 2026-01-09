'use client'

import Reveal from './Reveal'
import { Brain, Compass, Building2 } from 'lucide-react'
import BaekdohwaFlowerMark from './BaekdohwaFlowerMark'

export default function About() {
  return (
    <section 
      id="about" 
      className="pt-40 pb-20 px-6 relative overflow-hidden"
      style={{ background: 'transparent' }}
    >
      {/* 배경 워터마크 - 흰색→핫핑크 그라데이션 */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none"
        style={{
          width: '600px',
          height: '600px',
          opacity: 0.06,
        }}
      >
        <BaekdohwaFlowerMark
          size={600}
          watermark={true}
          style={{
            width: '100%',
            height: '100%',
          }}
        />
      </div>
      
      <div className="container mx-auto max-w-5xl relative z-10">
        {/* 메인 타이틀 */}
        <Reveal delayMs={100}>
          <div className="flex items-center justify-center gap-4 md:gap-8 mb-16">
            {/* 왼쪽 꽃 아이콘 */}
            <div 
              className="flex-shrink-0"
              style={{
                opacity: 0.6,
                filter: 'brightness(1.3) contrast(0.9)',
              }}
            >
              <BaekdohwaFlowerMark 
                size={80}
                className="hidden md:block"
                bright={true}
                style={{
                  filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.3))',
                }}
              />
              <BaekdohwaFlowerMark 
                size={56}
                className="block md:hidden"
                bright={true}
                style={{
                  filter: 'drop-shadow(0 0 6px rgba(255, 255, 255, 0.3))',
                }}
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
              className="flex-shrink-0"
              style={{
                opacity: 0.6,
                filter: 'brightness(1.3) contrast(0.9)',
              }}
            >
              <BaekdohwaFlowerMark 
                size={80}
                className="hidden md:block"
                bright={true}
                style={{
                  filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.3))',
                }}
              />
              <BaekdohwaFlowerMark 
                size={56}
                className="block md:hidden"
                bright={true}
                style={{
                  filter: 'drop-shadow(0 0 6px rgba(255, 255, 255, 0.3))',
                }}
              />
            </div>
          </div>
        </Reveal>

        {/* 메인 선언문 */}
        <Reveal delayMs={200}>
          <p 
            className="text-lg md:text-xl leading-relaxed text-center mb-16"
            style={{
              color: '#f7f1ff',
              lineHeight: '1.8',
              wordBreak: 'keep-all',
            }}
          >
            백도화의 모든 분석과 설계는<br />
            심리·무의식·선천 코드·관계 패턴 분석 분야에서<br />
            공식적으로 검증된 다수의 전문 자격과<br />
            실제 상담·분석 데이터를 기반으로 합니다.
          </p>
        </Reveal>

        {/* 강조 문구 (골드) - 섹션 핵심 */}
        <Reveal delayMs={300}>
          <div 
            className="text-center mb-16 py-10 px-6"
            style={{
              borderTop: '1px solid rgba(212, 175, 55, 0.25)',
              borderBottom: '1px solid rgba(212, 175, 55, 0.25)',
            }}
          >
            <p 
              className="text-3xl md:text-4xl lg:text-5xl font-elegant font-bold"
              style={{
                color: '#D4AF37',
                letterSpacing: '0.12em',
                lineHeight: '1.5',
                wordBreak: 'keep-all',
                textShadow: '0 0 20px rgba(212, 175, 55, 0.3)',
              }}
            >
              감이 아닌 이론,<br />
              직관이 아닌 구조,<br />
              위로가 아닌 설계.
            </p>
          </div>
        </Reveal>

        {/* 자격증 신뢰 보증 문장 */}
        <Reveal delayMs={400}>
          <p 
            className="text-sm md:text-base text-center mb-20"
            style={{
              color: 'rgba(255, 255, 255, 0.7)',
              lineHeight: '1.7',
              wordBreak: 'keep-all',
            }}
          >
            심리상담 · 연애심리 · 명리심리 · NLP · 최면 · 무의식 설계 ·<br />
            콘텐츠 구조 분석 분야의 전문 자격과 연구를 바탕으로<br />
            리포트는 설계됩니다.
          </p>
        </Reveal>

        {/* 자격증 그룹핑 - 카드 레이아웃 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* SECTION 1: 마음 해킹 */}
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
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'
                e.currentTarget.style.background = 'rgba(26, 6, 38, 0.4)'
              }}
            >
              <div className="text-center mb-6">
                <Brain 
                  size={48} 
                  className="mx-auto mb-4"
                  style={{
                    color: '#D4AF37',
                    opacity: 0.9,
                  }}
                />
              </div>
              <h3 
                className="text-xl md:text-2xl font-elegant font-semibold mb-3 text-center"
                style={{
                  color: '#f7f1ff',
                  letterSpacing: '0.05em',
                }}
              >
                마음 해킹
              </h3>
              <p 
                className="text-sm mb-6 text-center"
                style={{
                  color: '#D4AF37',
                  letterSpacing: '0.1em',
                  fontSize: '0.75rem',
                }}
              >
                Mind Hacking
              </p>
              <div 
                className="space-y-3 text-sm text-center"
                style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  lineHeight: '1.6',
                }}
              >
                <p>심리상담</p>
                <p>연애심리</p>
                <p>NLP</p>
                <p>최면</p>
              </div>
            </div>
          </Reveal>

          {/* SECTION 2: 운명 분석 */}
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
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'
                e.currentTarget.style.background = 'rgba(26, 6, 38, 0.4)'
              }}
            >
              <div className="text-center mb-6">
                <Compass 
                  size={48} 
                  className="mx-auto mb-4"
                  style={{
                    color: '#D4AF37',
                    opacity: 0.9,
                  }}
                />
              </div>
              <h3 
                className="text-xl md:text-2xl font-elegant font-semibold mb-3 text-center"
                style={{
                  color: '#f7f1ff',
                  letterSpacing: '0.05em',
                }}
              >
                운명 분석
              </h3>
              <p 
                className="text-sm mb-6 text-center"
                style={{
                  color: '#D4AF37',
                  letterSpacing: '0.1em',
                  fontSize: '0.75rem',
                }}
              >
                Code Analyzing
              </p>
              <div 
                className="space-y-3 text-sm text-center"
                style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  lineHeight: '1.6',
                }}
              >
                <p>명리심리</p>
                <p>타로심리</p>
                <p>풍수 기반 분석</p>
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
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'
                e.currentTarget.style.background = 'rgba(26, 6, 38, 0.4)'
              }}
            >
              <div className="text-center mb-6">
                <Building2 
                  size={48} 
                  className="mx-auto mb-4"
                  style={{
                    color: '#D4AF37',
                    opacity: 0.9,
                  }}
                />
              </div>
              <h3 
                className="text-xl md:text-2xl font-elegant font-semibold mb-3 text-center"
                style={{
                  color: '#f7f1ff',
                  letterSpacing: '0.05em',
                }}
              >
                미래 설계
              </h3>
              <p 
                className="text-sm mb-6 text-center"
                style={{
                  color: '#D4AF37',
                  letterSpacing: '0.1em',
                  fontSize: '0.75rem',
                }}
              >
                Future Architect
              </p>
              <div 
                className="space-y-3 text-sm text-center"
                style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  lineHeight: '1.6',
                }}
              >
                <p>AI 콘텐츠 제작</p>
                <p>퍼스널 브랜딩</p>
                <p>디지털 자아 설계</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
