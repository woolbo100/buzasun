'use client'

import { FormEvent, useState } from 'react'
import Reveal from './Reveal'

const faqs = [
  {
    question: '이것은 연애 상담인가요?',
    answer: '아니요. 백도화는 감정 위로나 상담이 아닌, 선천 코드와 관계 패턴을 분석하는 구조 해석 리포트입니다. 당신이 반복하는 연애의 이유를 감정이 아닌 구조로 명확히 정리합니다.',
  },
  {
    question: '리포트에는 어떤 내용이 포함되나요?',
    answer: '선천코드 분석을 기반으로 연애 성향, 인연의 흐름, 타이밍을 명확히 정리합니다. 타고난 연애 성향과 이상형, 맞는 인연 vs 피해야 할 인연, 반복되는 연애 패턴의 원인, 내 코드에 숨겨진 남자복, 타고난 코드가 만드는 연애의 흐름, 관계를 바꾸는 실전 연애 조언이 포함됩니다.',
  },
  {
    question: '분석은 어떻게 진행되나요?',
    answer: '심리·무의식·선천 코드·관계 패턴 분석 분야에서 공식적으로 검증된 다수의 전문 자격과 실제 상담·분석 데이터를 기반으로 리포트가 설계됩니다. 감이 아닌 이론, 직관이 아닌 구조로 해석합니다.',
  },
  {
    question: '리포트를 받는 데 얼마나 걸리나요?',
    answer: '문의 접수 후 분석 리포트 설계까지 소요 기간은 개인별로 다를 수 있습니다. 정확한 일정은 문의 시 안내해드립니다.',
  },
  {
    question: '리포트는 어떤 형태로 제공되나요?',
    answer: '구조 해석 리포트는 디지털 형태로 제공되며, 언제든 다시 펼쳐볼 수 있는 매뉴얼 형태로 설계됩니다. 연애가 흔들릴 때마다 참고할 수 있는 기준서 역할을 합니다.',
  },
]

export default function Contact() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <>
      {/* 문의 전 배너 - 브랜드 철학 & 리포트 필요성 설명 */}
      <section className="py-16 md:py-20 px-6 relative" style={{ background: 'transparent' }}>
        <div className="container mx-auto max-w-6xl">
          <Reveal delayMs={100}>
            <div 
              className="max-w-4xl mx-auto py-20 px-6 md:px-10 text-center relative"
              style={{
                position: 'relative',
              }}
            >
              {/* 은은한 빛의 안개 효과 - Radial Gradient */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(168, 85, 247, 0.15) 0%, rgba(236, 72, 153, 0.1) 30%, transparent 70%)',
                  borderRadius: '50%',
                }}
              />
              
              {/* 텍스트 컨텐츠 */}
              <div className="relative z-10">
                {/* 상단 문장 (명령형 2줄) - 차분한 회색 */}
                <div className="mb-8 md:mb-10">
                  <p 
                    className="text-lg md:text-xl lg:text-2xl font-elegant font-normal leading-loose"
                    style={{
                      color: '#9ca3af',
                      letterSpacing: '0.02em',
                      wordBreak: 'keep-all',
                    }}
                  >
                    더 애쓰지 마세요.<br />
                    더 증명하지 마세요.
                  </p>
                </div>

                {/* 하단 문장 (전환·설명 파트) - 밝은 흰색 */}
                <div>
                  <p 
                    className="text-base md:text-lg lg:text-xl font-elegant font-normal leading-loose"
                    style={{
                      color: '#f3f4f6',
                      letterSpacing: '0.02em',
                      wordBreak: 'keep-all',
                    }}
                  >
                    <span style={{ color: '#f3f4f6', fontWeight: 500 }}>선천코드를 이해하면</span><br />
                    반복되던 연애는 멈추고,<br />
                    <span style={{ color: '#f3f4f6', fontWeight: 500 }}>만나는 사람이 달라집니다.</span>
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 문의하기 섹션 */}
      <ContactForm />
    </>
  )
}

function ContactForm() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    const form = e.currentTarget
    const formData = new FormData(form)
    const name = formData.get('name')?.toString().trim()
    const email = formData.get('email')?.toString().trim()
    const message = formData.get('message')?.toString().trim()
    
    if (!name || !email || !message) {
      alert('모든 필드를 입력해주세요.')
      return
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      alert('올바른 이메일 형식을 입력해주세요.')
      return
    }
    
    alert('문의가 성공적으로 전송되었습니다!')
    form.reset()
  }

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section 
      id="contact" 
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
            문의하기
          </h2>
        </Reveal>

        {/* 좌우 2컬럼 레이아웃 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* 왼쪽: FAQ */}
          <Reveal delayMs={200}>
            <div className="h-full flex flex-col">
              <h3 
                className="text-2xl md:text-3xl font-elegant font-semibold mb-8 mt-0 pt-0"
                style={{
                  color: '#f7f1ff',
                  letterSpacing: '0.02em',
                }}
              >
                자주 묻는 질문
              </h3>
              <div className="space-y-4 flex-grow">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="rounded-lg transition-all duration-300"
                    style={{
                      background: 'rgba(26, 6, 38, 0.4)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(10px)',
                    }}
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between transition-colors duration-300"
                      style={{
                        color: '#f7f1ff',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#ff7ac8'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = '#f7f1ff'
                      }}
                    >
                      <span className="font-medium text-sm md:text-base pr-4">{faq.question}</span>
                      <i 
                        className={`fas fa-chevron-${openIndex === index ? 'up' : 'down'} text-xs transition-transform duration-300`}
                        style={{
                          color: openIndex === index ? '#ff7ac8' : 'rgba(255, 255, 255, 0.6)',
                        }}
                      />
                    </button>
                    {openIndex === index && (
                      <div 
                        className="px-6 pb-4 text-sm md:text-base leading-relaxed"
                        style={{
                          color: 'rgba(255, 255, 255, 0.8)',
                          lineHeight: '1.7',
                          wordBreak: 'keep-all',
                        }}
                      >
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* 오른쪽: 문의 폼 */}
          <Reveal delayMs={300}>
            <div className="h-full flex flex-col">
              <div className="mb-8 mt-0 pt-0">
                <h3 
                  className="text-2xl md:text-3xl font-elegant font-semibold mb-3"
                  style={{
                    color: '#f7f1ff',
                    letterSpacing: '0.02em',
                  }}
                >
                  문의하기
                </h3>
                <p 
                  className="text-sm"
                  style={{
                    color: 'rgba(255, 255, 255, 0.6)',
                  }}
                >
                  연애 상담이 아닌, 분석 리포트 문의입니다.
                </p>
              </div>
              
              {/* 폼 컨테이너 */}
              <form 
                id="contactForm" 
                className="space-y-6 p-8 md:p-10 rounded-2xl"
                style={{
                  background: 'rgba(26, 6, 38, 0.4)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 8px 32px rgba(20, 6, 31, 0.4), 0 0 60px rgba(27, 7, 38, 0.2)',
                }}
                onSubmit={handleSubmit}
              >
                <div>
                  <label 
                    htmlFor="name" 
                    className="block mb-3 text-sm font-medium"
                    style={{
                      color: 'rgba(255, 255, 255, 0.8)',
                    }}
                  >
                    이름
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    className="w-full px-4 py-3 rounded-lg bg-transparent border transition-all duration-300"
                    style={{
                      borderColor: 'rgba(255, 255, 255, 0.2)',
                      color: '#f7f1ff',
                    }}
                    placeholder="이름을 입력해주세요"
                    required
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = '#ff1493'
                      e.currentTarget.style.boxShadow = '0 0 0 3px rgba(255, 20, 147, 0.2)'
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)'
                      e.currentTarget.style.boxShadow = 'none'
                    }}
                  />
                </div>
                
                <div>
                  <label 
                    htmlFor="email" 
                    className="block mb-3 text-sm font-medium"
                    style={{
                      color: 'rgba(255, 255, 255, 0.8)',
                    }}
                  >
                    이메일
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    className="w-full px-4 py-3 rounded-lg bg-transparent border transition-all duration-300"
                    style={{
                      borderColor: 'rgba(255, 255, 255, 0.2)',
                      color: '#f7f1ff',
                    }}
                    placeholder="이메일을 입력해주세요"
                    required
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = '#ff1493'
                      e.currentTarget.style.boxShadow = '0 0 0 3px rgba(255, 20, 147, 0.2)'
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)'
                      e.currentTarget.style.boxShadow = 'none'
                    }}
                  />
                </div>
                
                <div>
                  <label 
                    htmlFor="message" 
                    className="block mb-3 text-sm font-medium"
                    style={{
                      color: 'rgba(255, 255, 255, 0.8)',
                    }}
                  >
                    문의 내용
                  </label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={6} 
                    className="w-full px-4 py-3 rounded-lg bg-transparent border transition-all duration-300 resize-none"
                    style={{
                      borderColor: 'rgba(255, 255, 255, 0.2)',
                      color: '#f7f1ff',
                    }}
                    placeholder="문의 내용을 입력해주세요"
                    required
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = '#ff1493'
                      e.currentTarget.style.boxShadow = '0 0 0 3px rgba(255, 20, 147, 0.2)'
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)'
                      e.currentTarget.style.boxShadow = 'none'
                    }}
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full py-4 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                  style={{
                    background: 'linear-gradient(135deg, #ff1493 0%, #ff69b4 50%, #ff1493 100%)',
                    boxShadow: '0 8px 24px rgba(255, 20, 147, 0.4), 0 0 40px rgba(255, 105, 180, 0.2)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 12px 32px rgba(255, 20, 147, 0.5), 0 0 60px rgba(255, 105, 180, 0.3)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(255, 20, 147, 0.4), 0 0 40px rgba(255, 105, 180, 0.2)'
                  }}
                >
                  보내기
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
