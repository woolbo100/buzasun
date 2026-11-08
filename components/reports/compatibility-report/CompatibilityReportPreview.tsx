'use client'

import { useState } from 'react'
import Image from 'next/image'
import Reveal from '@/components/Reveal'
import { compatibilityPreviewData } from './data'
import { ZoomIn, X, ChevronLeft, ChevronRight } from 'lucide-react'

export default function CompatibilityReportPreview() {
  const [activeModalIndex, setActiveModalIndex] = useState<number | null>(null)

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (activeModalIndex !== null) {
      setActiveModalIndex(
        activeModalIndex === 0
          ? compatibilityPreviewData.samples.length - 1
          : activeModalIndex - 1
      )
    }
  }

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (activeModalIndex !== null) {
      setActiveModalIndex(
        activeModalIndex === compatibilityPreviewData.samples.length - 1
          ? 0
          : activeModalIndex + 1
      )
    }
  }

  const currentSample =
    activeModalIndex !== null
      ? compatibilityPreviewData.samples[activeModalIndex]
      : null

  return (
    <section className="mb-40" id="sample-preview">
      <Reveal>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.25em] bg-[var(--accent-gold)]/10 border border-[var(--accent-gold)]/20 text-[var(--accent-gold-light)] uppercase mb-6">
            DIGITAL REPORT PREVIEW
          </span>
          <h2 className="text-3xl md:text-5xl font-elegant font-bold text-white mb-6 leading-tight whitespace-pre-line">
            {compatibilityPreviewData.mainCopy}
          </h2>
          <p className="text-lg md:text-xl text-[#EDE6DA] opacity-75 font-light">
            {compatibilityPreviewData.subCopy}
          </p>
        </div>

        {/* 4개 샘플 프리뷰 그리드 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-10">
          {compatibilityPreviewData.samples.map((sample, idx) => (
            <div
              key={sample.id}
              onClick={() => setActiveModalIndex(idx)}
              className="gungjung-glass p-5 rounded-[28px] border border-white/10 hover:border-[var(--accent-gold)]/50 bg-gradient-to-b from-[#2D0A1E]/30 via-transparent to-black/40 transition-all duration-300 group cursor-pointer flex flex-col justify-between"
            >
              <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden mb-4 bg-black/40 border border-white/5">
                <Image
                  src={sample.src}
                  alt={sample.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono font-bold text-[var(--accent-gold-light)]">
                  {sample.badge}
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-10 h-10 rounded-full bg-black/70 backdrop-blur-md border border-[var(--accent-gold)]/40 flex items-center justify-center text-[var(--accent-gold)] shadow-xl">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-bold text-white mb-1 group-hover:text-[var(--accent-gold-light)] transition-colors">
                  {sample.title}
                </h4>
                <p className="text-xs text-[#EDE6DA]/60 font-light break-keep">
                  {sample.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-white/40">
          {compatibilityPreviewData.disclaimer}
        </p>
      </Reveal>

      {/* 이미지 확대 라이트박스 모달 (이전/다음 지원) */}
      {currentSample && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 md:p-10 animate-fade-in"
          onClick={() => setActiveModalIndex(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] bg-[#1a0514] rounded-3xl border border-[var(--accent-gold)]/40 p-6 md:p-8 flex flex-col items-center overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 닫기 버튼 */}
            <button
              onClick={() => setActiveModalIndex(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-[var(--accent-gold)] hover:text-black transition-colors z-20"
              aria-label="모달 닫기"
            >
              <X className="w-5 h-5" />
            </button>

            {/* 이전 버튼 */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white hover:bg-[var(--accent-gold)] hover:text-black transition-colors z-20"
              aria-label="이전 샘플"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* 다음 버튼 */}
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white hover:bg-[var(--accent-gold)] hover:text-black transition-colors z-20"
              aria-label="다음 샘플"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="text-center mb-4 z-10">
              <span className="text-xs font-mono text-[var(--accent-gold)] px-2.5 py-0.5 rounded bg-[var(--accent-gold)]/10 mb-2 inline-block">
                {currentSample.badge}
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-white">
                {currentSample.title}
              </h3>
              <p className="text-sm text-[#EDE6DA]/70 mt-1">
                {currentSample.desc}
              </p>
            </div>

            <div className="relative w-full h-[58vh] max-h-[560px] rounded-2xl overflow-hidden border border-white/10 bg-black/40">
              <Image
                src={currentSample.src}
                alt={currentSample.title}
                fill
                className="object-contain"
              />
            </div>

            <p className="text-xs text-white/40 mt-4">
              좌우 화살표를 누르거나 화면을 터치하여 다른 페이지를 살펴보실 수 있습니다.
            </p>
          </div>
        </div>
      )}
    </section>
  )
}
