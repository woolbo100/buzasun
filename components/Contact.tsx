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
    <section id="contact" className="py-20 px-6" style={{ position: 'relative', zIndex: 1 }}>
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-4xl md:text-5xl font-elegant font-bold text-center mb-12 gradient-text fade-in-up">
          문의하기
        </h2>
        <form id="contactForm" className="space-y-6 fade-in-up" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block mb-2" style={{ color: '#ff69b4' }}>이름</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              className="w-full px-4 py-3 rounded-lg"
              placeholder="이름을 입력해주세요"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2" style={{ color: '#ff69b4' }}>이메일</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              className="w-full px-4 py-3 rounded-lg"
              placeholder="이메일을 입력해주세요"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2" style={{ color: '#ff69b4' }}>문의 내용</label>
            <textarea 
              id="message" 
              name="message" 
              rows={6} 
              className="w-full px-4 py-3 rounded-lg"
              placeholder="문의 내용을 입력해주세요"
              required
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="btn-primary w-full py-3 rounded-lg font-semibold"
          >
            보내기
          </button>
        </form>
      </div>
    </section>
  )
}
