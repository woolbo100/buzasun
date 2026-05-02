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
      className="py-20 md:py-32 px-6 relative overflow-hidden"
      style={{ background: 'transparent' }}
    >
      <div className="container-premium relative z-10">
        {/* 메인 타이틀 */}
        <Reveal delayMs={100}>
          <div className="flex items-center justify-center gap-4 md:gap-8 mb-20">
            <div className="flex-shrink-0">
              <BaekdohwaFlowerMark size={60} outlinePink={false} />
            </div>
            
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-elegant font-bold text-center text-[#F5F5F5]">
              백도화 선언
            </h2>
            
            <div className="flex-shrink-0">
              <BaekdohwaFlowerMark size={60} outlinePink={false} />
            </div>
          </div>
        </Reveal>

        {/* 메인 선언문 */}
        <Reveal delayMs={200}>
          <div className="gungjung-glass max-w-4xl mx-auto p-12 md:p-20 text-center mb-20">
            <p className="text-xl md:text-2xl leading-loose text-[#EDE6DA] font-light italic mb-10">
              "백도화의 모든 분석과 설계는<br className="hidden md:block" />
              전문 자격과 실제 데이터를 기반으로 하는<br className="hidden md:block" />
              구조적 해석 공간입니다."
            </p>
            
            <div className="gold-divider mb-10 max-w-sm mx-auto" />
            
            <BaekdohwaFlowerMark 
              size={80}
              className="hidden md:block mx-auto mb-10"
              outlineGold={true}
            />
            <BaekdohwaFlowerMark 
              size={56}
              className="block md:hidden mx-auto mb-10"
              outlineGold={true}
            />
            
            <p className="text-3xl md:text-4xl lg:text-5xl font-elegant font-bold text-[var(--accent-gold)] leading-tight tracking-wider">
              감이 아닌 이론<br />
              직관이 아닌 구조<br />
              위로가 아닌 설계
            </p>
          </div>
        </Reveal>

        {/* 자격증 그룹핑 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Brain size={40} style={{ color: 'var(--accent-gold)' }} className="mb-6" />,
              title: '내면 설계',
              subtitle: 'Inner Design',
              items: ['심리상담', '연애관계심리', 'NLP기법', '최면심리']
            },
            {
              icon: <Compass size={40} style={{ color: 'var(--accent-gold)' }} className="mb-6" />,
              title: '선천코드 분석',
              subtitle: 'Code Analyzing',
              items: ['명리심리', '타로심리', '풍수학, 성명학', '동양철학']
            },
            {
              icon: <Building2 size={40} style={{ color: 'var(--accent-gold)' }} className="mb-6" />,
              title: '미래 설계',
              subtitle: 'Future Architect',
              items: ['AI 콘텐츠 제작', '퍼스널 브래딩', '디지털 자아 설계', '뇌과학 기반 설계']
            }
          ].map((section, idx) => (
            <Reveal key={idx} delayMs={500 + idx * 100}>
              <div 
                className="p-10 h-full text-center flex flex-col items-center"
                style={{
                  border: `1px solid ${isHovered ? 'var(--accent-gold)' : 'rgba(216, 191, 163, 0.2)'}`,
                  borderRadius: '16px',
                  background: 'transparent',
                  transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
                  boxShadow: isHovered 
                    ? '0 10px 40px rgba(0, 0, 0, 0.5), 0 0 20px var(--accent-gold-soft)'
                    : 'none',
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {section.icon}
                <h3 className="text-2xl font-elegant font-bold mb-2 text-[#F5F5F5]">
                  {section.title}
                </h3>
                <p className="text-xs tracking-widest text-[var(--accent-gold)] mb-8 opacity-70 uppercase">
                  {section.subtitle}
                </p>
                <div className="space-y-3 text-sm text-[#EDE6DA] opacity-80">
                  {section.items.map((item, i) => (
                    <p key={i} style={{ color: 'var(--accent-gold)', opacity: 0.9 }}>{item}</p>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
