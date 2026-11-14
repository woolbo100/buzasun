'use client'

import Reveal from '@/components/Reveal'
import { compatibilityComparisonTableData } from './data'

export default function CompatibilityComparisonTable() {
  return (
    <section className="mb-40">
      <Reveal>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="block font-elegant text-[12pt] font-semibold tracking-[0.2em] text-[#D8BB94] uppercase mb-4">
            DIFFERENCE IN DEPTH
          </span>
          <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white mb-6 leading-[1.25] md:leading-[1.3] break-keep whitespace-pre-line">
            {compatibilityComparisonTableData.title}
          </h2>
          <p className="text-[16px] md:text-[18px] text-[#EDE6DA] opacity-75 font-light break-keep">
            {compatibilityComparisonTableData.subTitle}
          </p>
        </div>

        {/* 데스크톱/태블릿 비교표 (가로 스크롤 완벽 대응) */}
        <div className="max-w-7xl mx-auto overflow-x-auto pb-4">
          <div className="min-w-[680px]">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-5 px-6 text-sm font-semibold text-white/50 w-1/4">
                    비교 항목
                  </th>
                  <th className="py-5 px-6 text-sm font-semibold text-white/60 w-1/4 text-center">
                    자동 생성형 궁합
                  </th>
                  <th className="py-5 px-6 text-sm font-semibold text-white/60 w-1/4 text-center">
                    일반 사주 궁합
                  </th>
                  <th className="py-5 px-6 text-base font-bold text-[#D8BB94] w-1/4 text-center bg-[#3B0F1B]/40 rounded-t-2xl border-t border-x border-[#935C6B]/40">
                    백도화 프리미엄 궁합
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {compatibilityComparisonTableData.rows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-5 px-6 text-sm md:text-base font-bold text-white break-keep">
                      {row.feature}
                    </td>
                    <td className="py-5 px-6 text-sm text-[#EDE6DA]/50 text-center break-keep">
                      {row.ai}
                    </td>
                    <td className="py-5 px-6 text-sm text-[#EDE6DA]/60 text-center break-keep">
                      {row.traditional}
                    </td>
                    <td className="py-5 px-6 text-sm md:text-base font-medium text-white text-center break-keep bg-[#2D0A1E]/30 border-x border-[#935C6B]/30 shadow-inner">
                      <span className="text-[#C19B83] font-bold">
                        {row.baekdohwa}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <p className="text-center text-xs text-white/35 mt-6">
          ※ 타 서비스를 평가절하하려는 목적이 아니며, 각 분석 방식의 일반적 특성과 백도화가 지향하는 깊이의 차이를 객관적으로 안내해 드립니다.
        </p>
      </Reveal>
    </section>
  )
}
