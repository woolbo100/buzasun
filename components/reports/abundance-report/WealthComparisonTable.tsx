'use client'

import Reveal from '@/components/Reveal'
import { wealthComparisonTableData } from './data'

export default function WealthComparisonTable() {
  return (
    <section className="mb-40">
      <Reveal>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-[12px] font-bold tracking-[0.25em] bg-[#608F82]/15 border border-[#608F82]/35 text-[#8FB4A4] uppercase mb-6">
            DIFFERENCE IN VALUE
          </span>
          <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white mb-6 leading-[1.25] md:leading-[1.3] break-keep whitespace-pre-line">
            {wealthComparisonTableData.title}
          </h2>
          <p className="text-[16px] md:text-[18px] text-[#EDE6DA] opacity-75 font-light break-keep">
            {wealthComparisonTableData.subTitle}
          </p>
        </div>

        {/* 데스크톱/태블릿 비교표 (가로 스크롤 완벽 대응) */}
        <div className="max-w-5xl mx-auto overflow-x-auto pb-4">
          <div className="min-w-[680px]">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-5 px-6 text-sm font-semibold text-white/50 w-1/4">
                    비교 항목
                  </th>
                  <th className="py-5 px-6 text-sm font-semibold text-white/60 w-1/4 text-center">
                    자동 생성형 운세
                  </th>
                  <th className="py-5 px-6 text-sm font-semibold text-white/60 w-1/4 text-center">
                    일반 재물 사주
                  </th>
                  <th className="py-5 px-6 text-base font-bold text-[#8FB4A4] w-1/4 text-center bg-[#0f241f]/70 rounded-t-2xl border-t border-x border-[#608F82]/40">
                    백도화 풍요 리포트
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {wealthComparisonTableData.rows.map((row, idx) => (
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
                    <td className="py-5 px-6 text-sm md:text-base font-medium text-white text-center break-keep bg-[#0f241f]/40 border-x border-[#608F82]/25 shadow-inner">
                      <span className="text-[#E6BE8A] font-bold">
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
