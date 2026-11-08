'use client'

import Reveal from '@/components/Reveal'
import { wealthTestimonialConfig } from './data'

export default function WealthTestimonials() {
  // 실제 검증된 고객 후기가 등록되기 전까지는 노출하지 않습니다.
  if (!wealthTestimonialConfig.showReviews || wealthTestimonialConfig.reviews.length === 0) {
    return null
  }

  return (
    <section className="mb-40">
      <Reveal>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-[12px] font-bold tracking-[0.25em] bg-[#8FD3B6]/10 border border-[#8FD3B6]/30 text-[#8FD3B6] uppercase mb-6">
            REAL CLIENT REVIEWS
          </span>
          <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white mb-6 leading-[1.25] md:leading-[1.3] break-keep">
            {wealthTestimonialConfig.title}
          </h2>
          <p className="text-[16px] md:text-[18px] text-[#EDE6DA] opacity-75 font-light break-keep">
            {wealthTestimonialConfig.subTitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {wealthTestimonialConfig.reviews.map((rev: any, idx: number) => (
            <div
              key={idx}
              className="gungjung-glass p-8 rounded-[28px] border border-white/10 flex flex-col justify-between"
            >
              <div>
                <span className="text-xs px-2.5 py-1 rounded bg-[#8FD3B6]/15 text-[#8FD3B6] font-medium mb-4 inline-block">
                  {rev.tag}
                </span>
                <h4 className="text-[20px] md:text-[24px] font-bold text-white mb-3 leading-snug break-keep">
                  {rev.title}
                </h4>
                <p className="text-sm text-[#EDE6DA]/75 font-light leading-relaxed break-keep">
                  {rev.content}
                </p>
              </div>
              <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/5 text-xs text-white/40">
                <span>{rev.author}</span>
                <span>{rev.date}</span>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
