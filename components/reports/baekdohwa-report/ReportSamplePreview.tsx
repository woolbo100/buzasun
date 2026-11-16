'use client'

import { useState } from 'react'
import Image from 'next/image'
import Reveal from '@/components/Reveal'
import { samplePreviewData } from './data'
import { ZoomIn, X, FileText } from 'lucide-react'

// 실제 리포트 원고 1페이지 추가 슬롯 (원고 제공 시 경로 지정, 미제공 시 null)
// 예: '/image/lovereport/manuscript-sample-page-1.webp'
const FEATURED_MANUSCRIPT_PAGE: {
  src: string | null
  title: string
  desc: string
  badge: string
} = {
  src: null, // 원고 제공 시 이미지 경로 입력 (임의의 가짜 본문 미게시)
  title: '실제 리포트 본문 발췌 페이지',
  desc: '실제 발행되는 1:1 맞춤 PDF 리포트의 본문 페이지 발췌본입니다. 원본 A4 규격으로 구성되어 있습니다.',
  badge: 'A4 ORIGINAL'
}

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
          <span className="block font-elegant text-[12pt] font-semibold tracking-[0.2em] text-[#D9A8A7] uppercase mb-4">
            DIGITAL REPORT PREVIEW
          </span>
          <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white mb-6 leading-[1.25] md:leading-[1.3] break-keep whitespace-pre-line">
            {samplePreviewData.mainCopy}
          </h2>
          <p className="text-[18px] text-[#EDE6DA] opacity-75 font-light break-keep">
            {samplePreviewData.subCopy}
          </p>
        </div>

        {/* 4개 샘플 프리뷰 그리드 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16">
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
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono font-bold text-[#D9A8A7]">
                  {sample.badge}
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-10 h-10 rounded-full bg-black/70 backdrop-blur-md border border-[#B7788D]/40 flex items-center justify-center text-[#D9A8A7] shadow-xl">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-bold text-white mb-1 group-hover:text-[#D9A8A7] transition-colors">
                  {sample.title}
                </h4>
                <p className="text-xs text-[#EDE6DA]/60 font-light break-keep">
                  {sample.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 실제 리포트 본문 1페이지 미리보기 슬롯 (A4 규격 · 모바일 확대 지원) */}
        <div className="max-w-2xl mx-auto mb-10">
          <div className="gungjung-glass p-6 md:p-8 rounded-[32px] border border-[#B7788D]/30 bg-gradient-to-b from-[#1C0D1E]/60 to-[#0F0712]/70">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-white/10">
              <div>
                <span className="text-[11px] font-mono font-semibold tracking-wider text-[#D9A8A7] uppercase block mb-1">
                  REPORT EXCERPT · A4 PREVIEW
                </span>
                <h3 className="text-lg md:text-xl font-bold text-white">
                  실제 리포트 본문 발췌 페이지
                </h3>
              </div>
              <span className="text-xs px-3 py-1 rounded-full bg-[#B7788D]/20 border border-[#B7788D]/40 text-[#D9A8A7] font-medium">
                A4 규격 (210 × 297mm)
              </span>
            </div>

            {FEATURED_MANUSCRIPT_PAGE.src ? (
              /* 원고 이미지가 등록된 경우: 원본 A4 비율 유지 및 탭/클릭 확대 지원 */
              <div
                onClick={() =>
                  setActiveModalImage({
                    src: FEATURED_MANUSCRIPT_PAGE.src!,
                    title: FEATURED_MANUSCRIPT_PAGE.title,
                    desc: FEATURED_MANUSCRIPT_PAGE.desc
                  })
                }
                className="relative w-full max-w-md mx-auto aspect-[210/297] rounded-2xl overflow-hidden border border-white/15 bg-black/50 shadow-2xl group cursor-pointer"
              >
                <Image
                  src={FEATURED_MANUSCRIPT_PAGE.src}
                  alt={FEATURED_MANUSCRIPT_PAGE.title}
                  fill
                  className="object-contain transition-transform duration-700 group-hover:scale-102"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/70 backdrop-blur-md border border-[#B7788D]/40 text-[#D9A8A7] text-sm font-medium shadow-xl">
                    <ZoomIn className="w-4 h-4" />
                    <span>크게 보기</span>
                  </div>
                </div>
              </div>
            ) : (
              /* 원고 등록 전: 가짜 본문 없이 규격과 슬롯 구조를 보존하는 단정한 플레이스홀더 */
              <div className="relative w-full max-w-md mx-auto aspect-[210/297] rounded-2xl border-2 border-dashed border-[#B7788D]/30 bg-[#140816]/50 flex flex-col items-center justify-center p-8 text-center">
                <div className="w-16 h-16 rounded-2xl bg-[#2D0A1E] border border-[#B7788D]/40 flex items-center justify-center text-[#D9A8A7] mb-4 shadow-lg">
                  <FileText className="w-8 h-8" />
                </div>
                <h4 className="text-base md:text-lg font-bold text-white mb-2">
                  본문 발췌 페이지 준비 중
                </h4>
                <p className="text-xs md:text-sm text-[#EDE6DA]/70 font-light leading-relaxed break-keep max-w-xs">
                  실제 발행되는 맞춤 리포트의 A4 원본 페이지 발췌본이 검수 완료 후 본 슬롯에 순차적으로 공개됩니다.
                </p>
                <span className="mt-4 text-[11px] font-mono text-[#D9A8A7]/60">
                  SLOT: A4 RATIO (210 × 297)
                </span>
              </div>
            )}

            <div className="mt-6 pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-[#EDE6DA]/60 gap-2">
              <span>※ 개인 맞춤 제작 리포트로 고객마다 세부 구성과 처방이 다르게 기재됩니다.</span>
              <span className="text-[#D9A8A7]">모바일 터치 시 전체화면 확대 지원</span>
            </div>
          </div>
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
