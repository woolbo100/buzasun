'use client'

const projects = [
  {
    icon: 'fas fa-sparkles',
    title: '선천코드 분석',
    description: '개인의 고유한 선천코드를 분석하여 에너지 패턴과 매력 주파수를 발견하는 맞춤형 프로그램입니다.',
  },
  {
    icon: 'fas fa-heart',
    title: '연애 솔루션',
    description: '선천코드 기반 분석을 통해 이상적인 관계 패턴을 찾고, 진정한 연애를 실현하는 솔루션입니다.',
  },
  {
    icon: 'fas fa-star',
    title: '풍요 솔루션',
    description: '에너지 패턴을 조화롭게 조정하여 삶의 풍요로움을 실현하는 깊이 있는 솔루션입니다.',
  },
  {
    icon: 'fas fa-gem',
    title: '매력 주파수 조정',
    description: '1:1 맞춤형 컨설팅으로 개인의 매력 주파수를 최적화하고 극대화합니다.',
  },
  {
    icon: 'fas fa-moon',
    title: '에너지 패턴 워크샵',
    description: '청초하고 고급스러운 분위기 속에서 에너지 패턴을 이해하고 조정하는 워크샵입니다.',
  },
  {
    icon: 'fas fa-feather',
    title: '한국적 미학 컨설팅',
    description: '한국적 미학을 바탕으로 한 우아하고 세련된 매력 표현 방법을 배웁니다.',
  },
]

export default function Projects() {
  return (
    <section 
      id="projects" 
      className="py-20 px-6 relative bg-transparent"
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-elegant font-bold text-center mb-12 text-bd-ivory fade-in-up">
          프로젝트
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="card-hover p-6 rounded-lg fade-in-up bg-white/5 backdrop-blur-xl border border-white/10"
              style={{ 
                boxShadow: '0 8px 32px rgba(20, 6, 31, 0.3), 0 0 40px rgba(27, 7, 38, 0.15)',
              }}
            >
              <div className="text-3xl mb-4" style={{ color: '#ff1493' }}>
                <i className={project.icon}></i>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-bd-ivory">{project.title}</h3>
              <p className="text-bd-gray mb-4">
                {project.description}
              </p>
              <a 
                href="#" 
                className="transition-colors text-bd-pink hover:text-bd-pink2"
                onMouseEnter={(e) => {
                  e.currentTarget.style.textShadow = '0 0 8px rgba(255, 20, 147, 0.5)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.textShadow = 'none'
                }}
              >
                자세히 보기 →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
