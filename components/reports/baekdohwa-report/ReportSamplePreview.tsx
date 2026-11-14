'use client'

import { useState } from 'react'
import Image from 'next/image'
import Reveal from '@/components/Reveal'
import { samplePreviewData } from './data'
import { ZoomIn, X } from 'lucide-react'

export default function ReportSamplePreview() {
  const [activeModalImage, setActiveModalImage] = useState<{
    src: string
    title: string
    desc: string
  } | null>(null)

  return (
    <section className="mb-40" id="sample-preview">
      <Reveal>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="block text-[12px] font-semibold tracking-[0.2em] text-[#D9A8A7] uppercase mb-4">
            DIGITAL REPORT PREVIEW
          </span>
          <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white mb-6 leading-[1.25] md:leading-[1.3] break-keep whitespace-pre-line">
            {samplePreviewData.mainCopy}
          </h2>
          <p className="text-[16px] md:text-[18px] text-[#EDE6DA] opacity-75 font-light break-keep">
            {samplePreviewData.subCopy}
          </p>
        </div>

        {/* 4개 샘플 프리뷰 그리드 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-10">
          {samplePreviewData.samples.map((sample) => (
            <div
              key={sample.id}
              onClick={() =>
                setActiveModalImage({
                  src: sample.src,
                  title: sample.title,
                  desc: sample.desc
                })
              }
              className="gungjung-glass p-5 rounded-[28px] border border-white/10 hover:border-[#B7788D]/50 transition-all duration-300 group cursor-pointer flex flex-col justify-between"
            >
              <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden mb-4 bg-black/40 border border-white/5">
                <Image
                  src={sample.src}
                  alt={sample.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono font-bold text-[#E6BFA9]">
                  {sample.badge}
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-10 h-10 rounded-full bg-black/70 backdrop-blur-md border border-[#B7788D]/40 flex items-center justify-center text-[#D9A8A7] shadow-xl">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-bold text-white mb-1 group-hover:text-[#E6BFA9] transition-colors">
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
          {samplePreviewData.disclaimer}
        </p>
      </Reveal>

      {/* 이미지 확대 라이트박스 모달 */}
      {activeModalImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 md:p-10 animate-fade-in"
          onClick={() => setActiveModalImage(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] bg-[#120014] rounded-3xl border border-[#B7788D]/30 p-6 md:p-8 flex flex-col items-center overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveModalImage(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-[#B7788D] hover:text-black transition-colors"
              aria-label="모달 닫기"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-4">
              <h3 className="text-xl md:text-2xl font-bold text-white">
                {activeModalImage.title}
              </h3>
              <p className="text-sm text-[#EDE6DA]/60 mt-1">
                {activeModalImage.desc}
              </p>
            </div>

            <div className="relative w-full h-[60vh] max-h-[580px] rounded-2xl overflow-hidden border border-white/10 bg-black/40">
              <Image
                src={activeModalImage.src}
                alt={activeModalImage.title}
                fill
                className="object-contain"
              />
            </div>

            <p className="text-xs text-white/40 mt-4">
              클릭하거나 바깥 영역을 누르면 닫힙니다.
            </p>
          </div>
        </div>
      )}
    </section>
  )
}
