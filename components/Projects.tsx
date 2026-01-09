'use client'

import Reveal from './Reveal'

const projects = [
  {
    icon: 'fas fa-sparkles',
    title: '선천코드 분석',
    description: '개인의 고유한 선천 코드를 분석해\n관계·매력·선택의 기준을 설계합니다.',
  },
  {
    icon: 'fas fa-heart',
    title: '연애 솔루션',
    description: '반복되는 연애 패턴을\n감정이 아닌 구조로 해석하고 재설계합니다.',
  },
  {
    icon: 'fas fa-star',
    title: '풍요 솔루션',
    description: '에너지 흐름과 선택 구조를 조정해\n삶의 방향성을 바로잡습니다.',
  },
  {
    icon: 'fas fa-gem',
    title: '매력 주파수 조정',
    description: '개인의 매력 주파수를 분석해\n표현과 선택의 밀도를 높입니다.',
  },
  {
    icon: 'fas fa-moon',
    title: '에너지 패턴 워크샵',
    description: '에너지 패턴을 이해하고\n현실에서 작동하는 방식으로 재정렬합니다.',
  },
  {
    icon: 'fas fa-feather',
    title: '한국적 미학 컨설팅',
    description: '한국적 미학을 기반으로\n고유한 분위기와 인상을 설계합니다.',
  },
]

export default function Projects() {
  return (
    <section 
      id="projects" 
      className="py-20 px-6 relative"
      style={{ background: 'transparent' }}
    >
      <div className="container mx-auto max-w-6xl">
        <Reveal delayMs={100}>
          <h2 
            className="text-3xl md:text-5xl lg:text-6xl font-elegant font-bold text-center mb-16"
            style={{
              color: '#f7f1ff',
              letterSpacing: '0.02em',
              lineHeight: 'clamp(1.15, 1.25, 1.25)',
            }}
          >
            우리가 설계하는 영역
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <Reveal key={index} delayMs={200 + index * 100}>
              <div 
                className="p-6 rounded-lg transition-all duration-300"
                style={{ 
                  background: 'rgba(26, 6, 38, 0.3)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)'
                  e.currentTarget.style.background = 'rgba(26, 6, 38, 0.4)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)'
                  e.currentTarget.style.background = 'rgba(26, 6, 38, 0.3)'
                }}
              >
                <div 
                  className="text-3xl mb-4" 
                  style={{ 
                    color: 'rgba(255, 255, 255, 0.7)',
                  }}
                >
                  <i className={project.icon}></i>
                </div>
                <h3 
                  className="text-xl md:text-2xl font-semibold mb-4"
                  style={{
                    color: '#f7f1ff',
                    letterSpacing: '0.02em',
                  }}
                >
                  {project.title}
                </h3>
                <p 
                  className="text-sm md:text-base leading-relaxed"
                  style={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    lineHeight: '1.7',
                    wordBreak: 'keep-all',
                    whiteSpace: 'pre-line',
                  }}
                >
                  {project.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
