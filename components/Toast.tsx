'use client'

import { useEffect } from 'react'

interface ToastProps {
  message: string
  isVisible: boolean
  onClose: () => void
  duration?: number
}

export default function Toast({ message, isVisible, onClose, duration = 4000 }: ToastProps) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose()
      }, duration)
      return () => clearTimeout(timer)
    }
  }, [isVisible, duration, onClose])

  if (!isVisible) return null

  return (
    <div
      className="fixed top-24 left-1/2 -translate-x-1/2 z-[100] px-6 py-4 rounded-lg backdrop-blur-xl border transition-all duration-300 animate-in fade-in slide-in-from-top-2"
      style={{
        background: 'rgba(26, 6, 38, 0.95)',
        borderColor: 'rgba(255, 20, 147, 0.3)',
        boxShadow: '0 8px 32px rgba(255, 20, 147, 0.3), 0 0 40px rgba(138, 43, 226, 0.2)',
      }}
    >
      <p className="text-bd-ivory text-sm font-medium text-center whitespace-nowrap">
        {message}
      </p>
    </div>
  )
}
