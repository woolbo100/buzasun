'use client'

import Reveal from './Reveal'

const testimonials = [
  {
    content: "항상 비슷한 사람에게 끌리는 이유가 딱 보였어요. 정리된 구조를 보니 마음이 차분해졌습니다.",
    tags: ['#반복패턴', '#이상형'],
    author: "익명 A님 · 30대",
    rating: "★★★★★",
  },
  {
    content: "'나에게 맞는 인연 vs 피해야 할 인연' 구분이 제일 강력했어요. 이제 기준이 생겼어요.",
    tags: ['#타이밍', '#이상형'],
    author: "익명 B님 · 직장인",
    rating: "★★★★★",
  },
  {
    content: "타이밍 파트가 진짜 현실적… 연락/만남/거리두기 판단이 쉬워졌어요.",
    tags: ['#타이밍', '#반복패턴'],
    author: "익명 C님 · 20대",
    rating: "★★★★★",
  },
  {
    content: "감정 상담이 아니라 분석이라 좋았어요. 읽고 나서 선택이 빨라졌습니다.",
    tags: ['#반복패턴', '#남자복'],
    author: "익명 D님 · 30대",
    rating: "★★★★★",
  },
  {
    content: "남자복이라는 말이 막연했는데, 내 코드 기준으로 설명해줘서 납득됐어요.",
    tags: ['#남자복', '#이상형'],
    author: "익명 E님 · 20대",
    rating: "★★★★★",
  },
  {
    content: "연애가 흔들릴 때마다 다시 펼쳐볼 '매뉴얼' 같은 느낌이에요.",
    tags: ['#타이밍', '#반복패턴'],
    author: "익명 F님 · 30대",
    rating: "★★★★★",
  },
]

export default function Testimonials() {
  return (
    <section className="relative w-full overflow-hidden py-20 md:py-24" style={{ background: 'transparent' }}>
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* 상단: 배지 + 타이틀 */}
        <div className="text-center">
          {/* 상단 배지 */}
          <Reveal delayMs={100}>
            <div className="mb-6 inline-block">
              <div
                className="rounded-full p-[1px]"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 20, 147, 0.5), rgba(138, 43, 226, 0.5))',
                  boxShadow: '0 2px 12px rgba(255, 20, 147, 0.15), 0 0 20px rgba(255, 182, 193, 0.1)',
                }}
              >
                <p 
                  className="px-6 py-2 rounded-full"
                  style={{
                    color: '#f3eefe',
                    letterSpacing: '0.2em',
                    fontSize: '0.8rem',
                    fontWeight: 500,
                    background: 'rgba(50, 20, 65, 0.6)',
                  }}
                >
                  실제 구매자 후기
                </p>
              </div>
            </div>
          </Reveal>
          
          {/* 메인 타이틀 */}
          <Reveal delayMs={200}>
            <h2 
              className="text-3xl md:text-5xl lg:text-6xl font-elegant font-bold mt-4"
              style={{
                color: '#f7f1ff',
                letterSpacing: '0.02em',
                lineHeight: 'clamp(1.15, 1.25, 1.25)',
              }}
            >
              후기로 증명된 '구조 해석' 리포트
            </h2>
          </Reveal>

          {/* 서브 타이틀 */}
          <Reveal delayMs={300}>
            <p 
              className="text-base md:text-lg max-w-3xl mx-auto mt-10"
              style={{
                color: 'rgba(245, 239, 255, 0.8)',
                lineHeight: 'clamp(1.5, 1.7, 1.7)',
                wordBreak: 'keep-all',
                opacity: 0.8,
              }}
            >
              감정 위로가 아니라, 관계의 패턴을 '명확히' 정리해준다는 평가가 많아요.
            </p>
          </Reveal>
        </div>

        {/* 후기 카드 그리드 */}
        <div className="mt-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <Reveal key={index} delayMs={400 + index * 100}>
                <div
                  className="rounded-2xl p-8 transition-all duration-300 cursor-pointer h-full min-h-[240px] backdrop-blur-md"
                  style={{
                    background: 'rgba(43, 16, 53, 0.65)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    boxShadow: '0 10px 50px rgba(0, 0, 0, 0.35)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)'
                    e.currentTarget.style.borderColor = 'rgba(255, 42, 166, 0.35)'
                    e.currentTarget.style.boxShadow = '0 10px 50px rgba(0, 0, 0, 0.35), 0 0 30px rgba(255, 42, 166, 0.18)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'
                    e.currentTarget.style.boxShadow = '0 10px 50px rgba(0, 0, 0, 0.35)'
                  }}
                >
                  {/* 별점 */}
                  <div className="mb-4">
                    <span 
                      className="text-sm"
                      style={{
                        color: '#ff2aa6',
                        letterSpacing: '0.1em',
                        filter: 'drop-shadow(0 0 4px rgba(255, 42, 166, 0.4))',
                      }}
                    >
                      {testimonial.rating}
                    </span>
                  </div>

                  {/* 후기 내용 */}
                  <p 
                    className="mb-4 flex-grow leading-relaxed"
                    style={{
                      color: 'rgba(255, 255, 255, 0.9)',
                      fontSize: '15px',
                      lineHeight: '1.7',
                      wordBreak: 'keep-all',
                    }}
                  >
                    {testimonial.content}
                  </p>

                  {/* 태그 */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {testimonial.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 rounded-full text-xs border"
                        style={{
                          background: 'rgba(255, 42, 166, 0.1)',
                          borderColor: 'rgba(255, 42, 166, 0.2)',
                          color: '#ff7ac8',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* 작성자 */}
                  <p 
                    className="text-xs mt-auto"
                    style={{
                      color: 'rgba(255, 255, 255, 0.6)',
                    }}
                  >
                    {testimonial.author}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
