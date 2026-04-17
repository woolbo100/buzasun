'use client'

import { FormEvent, useState } from 'react'
import Reveal from './Reveal'
import BaekdohwaFlowerMark from './BaekdohwaFlowerMark'

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
  return (
    <>
      {/* 문의 전 배너 - 브랜드 철학 & 리포트 필요성 설명 */}
      <section className="py-20 md:py-32 px-6 relative" style={{ background: 'transparent' }}>
        <div className="container mx-auto max-w-6xl">
          <Reveal delayMs={100}>
            <div className="gungjung-glass mx-auto py-16 md:py-24 text-center relative overflow-hidden">
              {/* 배경 장식 */}
              <div className="absolute top-0 right-0 p-8 opacity-20">
                <BaekdohwaFlowerMark size={120} outlineGold={true} />
              </div>
              
              {/* 텍스트 컨텐츠 */}
              <div className="max-w-2xl mx-auto relative z-10 px-6">
                <p className="text-2xl md:text-3xl lg:text-4xl font-elegant font-bold text-[#F5F5F5] mb-8 leading-tight">
                  더 애쓰지 마세요<br />
                  더 증명하려 하지 마세요
                </p>

                <div className="gold-divider mb-8 max-w-[100px] mx-auto" />

                <p className="text-xl md:text-2xl font-elegant text-[#EDE6DA] leading-relaxed">
                  <span className="text-[#B8964A] font-bold">선천코드</span>를 이해하면<br />
                  <span className="text-[#B8964A] font-bold">반복되던 연애</span>는 멈추고<br />
                  <span className="text-[#B8964A] font-bold">만나는 사람</span>이 달라집니다
                </p>
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
    alert('문의가 성공적으로 전송되었습니다!')
  }

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section 
      id="contact" 
      className="py-20 md:py-32 px-6 relative"
      style={{ background: 'transparent' }}
    >
      <div className="container mx-auto max-w-6xl">
        <Reveal delayMs={100}>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-elegant font-bold text-center mb-20 text-[#F5F5F5]">
            문의하기
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* FAQ */}
          <Reveal delayMs={200}>
            <div className="space-y-6">
              <h3 className="text-2xl font-elegant font-bold mb-8 text-[#F5F5F5]">자주 묻는 질문</h3>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="gungjung-glass overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full px-6 py-5 text-left flex items-center justify-between group"
                    >
                      <span className="font-medium text-[#EDE6DA] group-hover:text-[#B8964A] transition-colors">
                        {faq.question}
                      </span>
                      <span className={`transform transition-transform duration-300 text-[#B8964A] ${openIndex === index ? 'rotate-180' : ''}`}>
                        ▼
                      </span>
                    </button>
                    {openIndex === index && (
                      <div className="px-6 pb-6 text-sm md:text-base text-[#EDE6DA] opacity-70 leading-relaxed border-t border-[rgba(184,150,74,0.15)] pt-4">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Contact Form */}
          <Reveal delayMs={300}>
            <div className="gungjung-glass p-8 md:p-12">
              <h3 className="text-2xl font-elegant font-bold mb-2 text-[#F5F5F5]">문의 메일</h3>
              <p className="text-sm text-[#B8964A] opacity-60 mb-10">연애 상담이 아닌, 분석 리포트 관련 문의입니다.</p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-[#EDE6DA] opacity-50 mb-2">성함</label>
                  <input 
                    type="text" 
                    className="w-full bg-[rgba(59,15,27,0.2)] border border-[rgba(184,150,74,0.15)] rounded px-4 py-3 text-[#F5F5F5] focus:outline-none focus:border-[#B8964A] transition-colors placeholder:text-white/20"
                    placeholder="성함을 입력해주세요"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-[#EDE6DA] opacity-50 mb-2">이메일</label>
                  <input 
                    type="email" 
                    className="w-full bg-[rgba(59,15,27,0.2)] border border-[rgba(184,150,74,0.15)] rounded px-4 py-3 text-[#F5F5F5] focus:outline-none focus:border-[#B8964A] transition-colors placeholder:text-white/20"
                    placeholder="이메일을 입력해주세요"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-[#EDE6DA] opacity-50 mb-2">내용</label>
                  <textarea 
                    rows={5}
                    className="w-full bg-[rgba(59,15,27,0.2)] border border-[rgba(184,150,74,0.15)] rounded px-4 py-3 text-[#F5F5F5] focus:outline-none focus:border-[#B8964A] transition-colors resize-none placeholder:text-white/20"
                    placeholder="문의하실 내용을 입력해주세요"
                    required
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full py-4 bg-[#3B0F1B] border border-[#B8964A] text-[#B8964A] font-bold tracking-widest hover:bg-[#B8964A] hover:text-[#1A0F2E] transition-all duration-300"
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
