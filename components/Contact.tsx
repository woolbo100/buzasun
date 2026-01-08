'use client'

import { FormEvent } from 'react'

export default function Contact() {
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

  return (
    <section 
      id="contact" 
      className="py-20 px-6 relative z-10 bg-gradient-to-b from-[#1b0726] to-[#14061f]"
    >
      {/* 신비로운 오라 오버레이 - 상단에 은은한 퍼플/핑크 */}
      <div 
        className="absolute top-0 left-0 right-0 h-40 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center top, rgba(138, 43, 226, 0.08) 0%, rgba(255, 20, 147, 0.04) 30%, transparent 70%)',
        }}
      />
      <div className="container mx-auto max-w-2xl relative z-10">
        <h2 className="text-4xl md:text-5xl font-elegant font-bold text-center mb-12 text-bd-ivory fade-in-up">
          문의하기
        </h2>
        
        {/* 폼 컨테이너 - 반투명 유리 느낌 */}
        <form 
          id="contactForm" 
          className="space-y-6 fade-in-up p-8 md:p-10 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10"
          style={{
            boxShadow: '0 8px 32px rgba(20, 6, 31, 0.4), 0 0 60px rgba(27, 7, 38, 0.2)',
          }}
          onSubmit={handleSubmit}
        >
          <div>
            <label 
              htmlFor="name" 
              className="block mb-3 text-sm font-medium text-bd-gray"
            >
              이름
            </label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              className="w-full px-4 py-3 rounded-lg bg-transparent border border-white/20 text-bd-ivory placeholder:text-bd-muted focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/30 transition-all duration-300"
              placeholder="이름을 입력해주세요"
              required
            />
          </div>
          
          <div>
            <label 
              htmlFor="email" 
              className="block mb-3 text-sm font-medium text-bd-gray"
            >
              이메일
            </label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              className="w-full px-4 py-3 rounded-lg bg-transparent border border-white/20 text-bd-ivory placeholder:text-bd-muted focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/30 transition-all duration-300"
              placeholder="이메일을 입력해주세요"
              required
            />
          </div>
          
          <div>
            <label 
              htmlFor="message" 
              className="block mb-3 text-sm font-medium text-bd-gray"
            >
              문의 내용
            </label>
            <textarea 
              id="message" 
              name="message" 
              rows={6} 
              className="w-full px-4 py-3 rounded-lg bg-transparent border border-white/20 text-bd-ivory placeholder:text-bd-muted focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/30 transition-all duration-300 resize-none"
              placeholder="문의 내용을 입력해주세요"
              required
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
    </section>
  )
}
