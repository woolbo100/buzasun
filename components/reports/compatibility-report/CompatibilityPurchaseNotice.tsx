'use client'

import Reveal from '@/components/Reveal'
import { compatibilityNoticeData } from './data'
import { Info } from 'lucide-react'

export default function CompatibilityPurchaseNotice() {
  return (
    <section className="mb-40" id="notice">
      <Reveal>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.25em] bg-[var(--accent-gold)]/10 border border-[var(--accent-gold)]/20 text-[var(--accent-gold-light)] uppercase mb-6">
            PURCHASE NOTICE
          </span>
          <h2 className="text-3xl md:text-5xl font-elegant font-bold text-white mb-6 leading-tight">
            {compatibilityNoticeData.title}
          </h2>
          <p className="text-lg md:text-xl text-[#EDE6DA] opacity-75 font-light">
            {compatibilityNoticeData.subTitle}
          </p>
        </div>

        <div className="gungjung-glass p-8 md:p-12 rounded-[32px] border border-white/10 max-w-5xl mx-auto bg-gradient-to-b from-[#2D0A1E]/30 via-black/40 to-black/60">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {compatibilityNoticeData.notices.map((notice, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                <div className="w-8 h-8 rounded-lg bg-[#3B0F1B] border border-[var(--accent-gold)]/30 flex items-center justify-center text-[var(--accent-gold)] shrink-0 mt-0.5">
                  <Info className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white mb-1.5 break-keep">
                    {notice.title}
                  </h4>
                  <p className="text-xs md:text-sm text-[#EDE6DA]/70 font-light leading-relaxed break-keep">
                    {notice.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-white/5 text-center">
            <p className="text-xs text-white/40">
              ※ 백도화 매력학당의 모든 리포트는 전자상거래 등에서의 소비자보호에 관한 법률 및 사이트의 기본 이용약관을 철저히 준수합니다.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
