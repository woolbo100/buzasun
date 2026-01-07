'use client'

import { useEffect, useRef } from 'react'

export default function AdminModal() {
  const modalRef = useRef<HTMLDivElement>(null)

  const closeModal = () => {
    const modal = modalRef.current
    if (modal) {
      modal.classList.remove('active')
      document.body.style.overflow = 'auto'
    }
  }

  useEffect(() => {
    const modal = modalRef.current
    if (!modal) return

    const handleClickOutside = (e: MouseEvent) => {
      if (e.target === modal) {
        closeModal()
      }
    }

    modal.addEventListener('click', handleClickOutside)
    return () => modal.removeEventListener('click', handleClickOutside)
  }, [])

  const handleSave = () => {
    const titleInput = document.getElementById('adminTitle') as HTMLInputElement
    const contentInput = document.getElementById('adminContent') as HTMLTextAreaElement
    
    const title = titleInput?.value.trim()
    const content = contentInput?.value.trim()
    
    if (!title || !content) {
      alert('제목과 내용을 모두 입력해주세요.')
      return
    }
    
    alert('글이 저장되었습니다! (UI Mockup)')
    if (titleInput) titleInput.value = ''
    if (contentInput) contentInput.value = ''
    closeModal()
  }

  return (
    <div id="adminModal" ref={modalRef} className="modal">
      <div className="modal-content">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-elegant font-bold gradient-text">관리자 대시보드</h2>
          <button onClick={closeModal} className="text-gray-400 hover:text-white text-2xl">
            <i className="fas fa-times"></i>
          </button>
        </div>
        
        <div className="space-y-6">
          <div>
            <label htmlFor="adminTitle" className="block mb-2" style={{ color: '#ff69b4' }}>제목</label>
            <input 
              type="text" 
              id="adminTitle" 
              className="w-full px-4 py-3 rounded-lg"
              placeholder="글 제목을 입력해주세요"
            />
          </div>
          <div>
            <label htmlFor="adminContent" className="block mb-2" style={{ color: '#ff69b4' }}>내용</label>
            <textarea 
              id="adminContent" 
              rows={10} 
              className="w-full px-4 py-3 rounded-lg"
              placeholder="글 내용을 입력해주세요"
            ></textarea>
          </div>
          <div className="flex space-x-4">
            <button 
              onClick={handleSave} 
              className="btn-primary flex-1 py-3 rounded-lg font-semibold"
            >
              저장하기
            </button>
            <button 
              onClick={closeModal} 
              className="flex-1 py-3 rounded-lg font-semibold transition-colors"
              style={{ border: '1px solid rgba(255, 20, 147, 0.3)' }}
            >
              취소
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
