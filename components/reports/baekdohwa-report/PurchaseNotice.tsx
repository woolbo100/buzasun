'use client'

import Reveal from '@/components/Reveal'
import { purchaseNoticeData } from './data'
import { Info } from 'lucide-react'

export default function PurchaseNotice() {
  return (
    <section className="mb-40" id="notice">
      <Reveal>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="block font-elegant text-[12pt] font-semibold tracking-[0.2em] text-[#D9A8A7] uppercase mb-4">
            PURCHASE NOTICE
          </span>
          <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white mb-6 leading-[1.25] md:leading-[1.3] break-keep">
            {purchaseNoticeData.title}
          </h2>
          <p className="text-[18px] text-[#EDE6DA] opacity-75 font-light break-keep">
            {purchaseNoticeData.subTitle}
          </p>
        </div>

        <div 
          className="p-8 md:p-12 rounded-[32px] max-w-7xl mx-auto shadow-2xl relative overflow-hidden"
          style={{
            background: 'rgba(125, 76, 100, 0.22)',
            border: '1px solid rgba(215, 170, 185, 0.20)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
          }}
        >
          {/* 은은한 배경 광채 */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#B7788D]/10 rounded-full blur-[80px] pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 relative z-10">
            {purchaseNoticeData.notices.map((notice, idx) => (
              <div 
                key={idx} 
                className="flex items-start gap-4 p-5 md:p-6 rounded-2xl border transition-all duration-300 hover:border-[rgba(245,218,226,0.35)] backdrop-blur-sm"
                style={{
                  background: 'rgba(92, 53, 78, 0.68)',
                  borderColor: 'rgba(218, 174, 190, 0.16)',
                }}
              >
                <div className="w-9 h-9 rounded-xl bg-[#B7788D]/25 border border-[#B7788D]/30 flex items-center justify-center text-[#F3C4D1] shrink-0 mt-0.5">
                  <Info className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-base md:text-[17px] font-bold text-white mb-1.5 break-keep">
                    {notice.title}
                  </h4>
                  <p className="text-xs md:text-sm text-[#F3E5E9]/90 font-light leading-relaxed break-keep">
                    {notice.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 text-center relative z-10">
            <p className="text-xs text-white/50">
              ※ 백도화 매력학당의 모든 리포트는 전자상거래 등에서의 소비자보호에 관한 법률 및 사이트의 기본 이용약관을 철저히 준수합니다.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
