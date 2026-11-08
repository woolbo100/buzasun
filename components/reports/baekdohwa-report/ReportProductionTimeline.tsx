'use client'

import Reveal from '@/components/Reveal'
import { productionTimelineData } from './data'
import { ClipboardCheck, Compass, Shuffle, BookOpen } from 'lucide-react'

export default function ReportProductionTimeline() {
  const stepIcons = [
    <ClipboardCheck key="step-1" className="w-6 h-6 text-[var(--accent-gold)]" />,
    <Compass key="step-2" className="w-6 h-6 text-[var(--accent-gold)]" />,
    <Shuffle key="step-3" className="w-6 h-6 text-[var(--accent-gold)]" />,
    <BookOpen key="step-4" className="w-6 h-6 text-[var(--accent-gold)]" />
  ]

  return (
    <section className="mb-40">
      <Reveal>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.25em] bg-[var(--accent-gold)]/10 border border-[var(--accent-gold)]/20 text-[var(--accent-gold-light)] uppercase mb-6">
            PRODUCTION TIMELINE
          </span>
          <h2 className="text-3xl md:text-5xl font-elegant font-bold text-white mb-6 leading-tight whitespace-pre-line">
            {productionTimelineData.mainCopy}
          </h2>
          <p className="text-lg md:text-xl text-[#EDE6DA] opacity-75 font-light">
            {productionTimelineData.subCopy}
          </p>
        </div>

        {/* 4단계 타임라인 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {productionTimelineData.steps.map((step, idx) => (
            <div
              key={idx}
              className="gungjung-glass p-8 rounded-[28px] border border-white/10 hover:border-[var(--accent-gold)]/40 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[var(--accent-gold)]/5 rounded-bl-full pointer-events-none"></div>

              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#2D0A1E] border border-[var(--accent-gold)]/30 flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform">
                  {stepIcons[idx]}
                </div>
                <span className="text-xs font-mono font-bold tracking-widest text-[var(--accent-gold)] mb-2 block">
                  {step.step}
                </span>
                <h3 className="text-xl font-bold text-white mb-3 break-keep">
                  {step.title}
                </h3>
              </div>
              <p className="text-sm text-[#EDE6DA]/70 font-light leading-relaxed break-keep mt-4 pt-4 border-t border-white/5">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
