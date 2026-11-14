'use client'

import Reveal from '@/components/Reveal'
import { wealthProcessData } from './data'
import { ClipboardList, Gem, Shuffle, BookOpen } from 'lucide-react'

export default function WealthReportProcess() {
  const stepIcons = [
    <ClipboardList key="step-1" className="w-6 h-6 text-[#8FB4A4]" />,
    <Gem key="step-2" className="w-6 h-6 text-[#8FB4A4]" />,
    <Shuffle key="step-3" className="w-6 h-6 text-[#8FB4A4]" />,
    <BookOpen key="step-4" className="w-6 h-6 text-[#8FB4A4]" />
  ]

  return (
    <section className="mb-40">
      <Reveal>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="block text-[12px] font-semibold tracking-[0.2em] text-[#8FB4A4] uppercase mb-4">
            PRECISE PROCESS
          </span>
          <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white mb-6 leading-[1.25] md:leading-[1.3] break-keep whitespace-pre-line">
            {wealthProcessData.mainCopy}
          </h2>
          <p className="text-[16px] md:text-[18px] text-[#EDE6DA] opacity-75 font-light break-keep">
            {wealthProcessData.subCopy}
          </p>
        </div>

        {/* 4단계 타임라인 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {wealthProcessData.steps.map((step, idx) => (
            <div
              key={idx}
              className="gungjung-glass p-8 rounded-[28px] border border-white/10 hover:border-[#608F82]/40 bg-gradient-to-b from-[#0f241f]/30 via-transparent to-black/40 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#608F82]/15 rounded-bl-full pointer-events-none"></div>

              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#0f241f] border border-[#608F82]/30 flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform">
                  {stepIcons[idx]}
                </div>
                <span className="text-xs font-mono font-bold tracking-widest text-[#E6BE8A] mb-2 block">
                  {step.step}
                </span>
                <h3 className="text-[20px] md:text-[24px] font-bold text-white mb-3 leading-snug break-keep">
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
