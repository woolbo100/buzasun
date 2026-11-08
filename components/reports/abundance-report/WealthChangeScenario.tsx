'use client'

import Reveal from '@/components/Reveal'
import { wealthScenarioData } from './data'
import { ArrowRight, ArrowDown } from 'lucide-react'

export default function WealthChangeScenario() {
  return (
    <section className="mb-40">
      <Reveal>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-[12px] font-bold tracking-[0.25em] bg-[#608F82]/15 border border-[#608F82]/35 text-[#8FB4A4] uppercase mb-6">
            TRANSFORMATION SCENARIO
          </span>
          <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white mb-6 leading-[1.25] md:leading-[1.3] break-keep whitespace-pre-line">
            {wealthScenarioData.mainCopy}
          </h2>
          <p className="text-[16px] md:text-[18px] text-[#EDE6DA] opacity-75 font-light break-keep">
            {wealthScenarioData.subCopy}
          </p>
        </div>

        {/* 3단계 시나리오 카드 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-10 items-stretch">
          {wealthScenarioData.stages.map((stage, idx) => (
            <div key={idx} className="relative flex flex-col">
              <div
                className={`gungjung-glass p-8 md:p-10 rounded-[32px] border ${stage.borderColor} bg-gradient-to-b ${stage.color} h-full flex flex-col justify-between transition-all duration-300 hover:-translate-y-1`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-bold tracking-widest px-3 py-1 rounded-md bg-white/10 text-white">
                      {stage.stage}
                    </span>
                    <span className="text-xs text-[#8FB4A4] font-semibold">
                      {stage.tag}
                    </span>
                  </div>
                  <h4 className="text-[20px] md:text-[24px] font-elegant font-bold text-[#E6BE8A] mb-4 leading-snug break-keep">
                    {stage.quote}
                  </h4>
                  <p className="text-sm md:text-base text-[#EDE6DA]/85 font-light leading-relaxed break-keep">
                    {stage.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10">
                  <span className="text-xs text-white/40 block mb-1">상태 분석</span>
                  <p className="text-xs md:text-sm text-[#EDE6DA]/70 font-light leading-relaxed break-keep">
                    {stage.state}
                  </p>
                </div>
              </div>

              {/* 연결 화살표 */}
              {idx < wealthScenarioData.stages.length - 1 && (
                <>
                  <div className="hidden md:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-[#0a0514] border border-[#608F82]/40 items-center justify-center text-[#8FB4A4] shadow-md">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                  <div className="flex md:hidden justify-center my-2 text-[#8FB4A4]">
                    <ArrowDown className="w-5 h-5" />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-white/35">
          {wealthScenarioData.disclaimer}
        </p>
      </Reveal>
    </section>
  )
}
