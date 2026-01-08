'use client'

export default function About() {
  return (
    <section 
      id="about" 
      className="pt-40 pb-20 px-6 relative"
      style={{ background: 'transparent' }}
    >
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-elegant font-bold text-center mb-12 text-bd-ivory fade-in-up">
          우리에 대해
        </h2>
        <div className="space-y-8 fade-in-up">
          <p className="text-lg leading-relaxed text-bd-gray">
            백도화 매력학당은 선천코드 분석을 기반으로 한 연애·풍요 솔루션을 제공하는 공간입니다. 
            각자의 고유한 에너지 패턴을 분석하여 매력 주파수를 발견하고, 
            이를 통해 진정한 관계와 풍요로운 삶을 만들어가는 여정을 함께합니다.
          </p>
          <p className="text-lg leading-relaxed text-bd-gray">
            청초하고 고급스러운 한국적 미학을 바탕으로, 과학적 접근과 세심한 분석을 통해 
            여러분의 선천코드를 해석합니다. 이를 통해 개인의 고유한 매력을 극대화하고, 
            더 나은 관계와 풍요로운 삶을 실현할 수 있도록 돕는 것이 우리의 사명입니다.
          </p>
        </div>
      </div>
    </section>
  )
}
