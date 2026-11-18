'use client'

import Reveal from '@/components/Reveal'
import { comparisonTableData } from './data'

export default function ReportComparisonTable() {
  return (
    <section className="mb-40">
      <Reveal>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="block font-elegant text-[12pt] font-semibold tracking-[0.2em] text-[#D9A8A7] uppercase mb-4">
            COMPARISON MATRIX
          </span>
          <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white mb-6 leading-[1.25] md:leading-[1.3] break-keep whitespace-pre-line">
            {comparisonTableData.title}
          </h2>
          <p className="text-[18px] text-[#EDE6DA] opacity-75 font-light break-keep">
            {comparisonTableData.subTitle}
          </p>
        </div>

        {/* 데스크톱/태블릿 비교표 (가로 스크롤 완벽 대응) */}
        <div className="max-w-7xl mx-auto overflow-x-auto pb-4">
          <div className="min-w-[720px]">
            <table className="w-full border-separate border-spacing-0 text-left">
              <thead>
                <tr>
                  <th className="py-5 px-4 md:px-5 text-sm font-semibold text-white/50 w-[19%] border-b border-white/10">
                    비교 항목
                  </th>
                  <th className="py-5 px-3 md:px-4 lg:px-5 text-sm md:text-[15px] font-semibold text-white/70 w-[25%] text-center border-b border-white/10">
                    자동 생성형 운세
                  </th>
                  <th className="py-5 px-3 md:px-4 lg:px-5 text-sm md:text-[15px] font-semibold text-white/70 w-[25%] text-center border-b border-white/10">
                    전통 명리 · 구두 상담
                  </th>
                  <th className="py-5 px-3 md:px-4 lg:px-5 text-base font-bold text-[#D9A8A7] w-[31%] text-center bg-[#B7788D]/15 rounded-t-2xl border-t border-x border-[#B7788D]/30 border-b border-[#B7788D]/20">
                    백도화 선천코드 리포트
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonTableData.rows.map((row, idx) => {
                  const isLast = idx === comparisonTableData.rows.length - 1
                  return (
                    <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                      <td className={`py-5 px-4 md:px-5 text-sm md:text-base font-bold text-white align-middle break-keep ${!isLast ? 'border-b border-white/5' : ''}`}>
                        {row.feature}
                      </td>
                      <td className={`py-5 px-3 md:px-4 lg:px-5 text-[14px] md:text-[16px] font-normal leading-[1.48] text-[#EDE6DA] opacity-75 text-center align-middle break-keep ${!isLast ? 'border-b border-white/5' : ''}`}>
                        {row.ai}
                      </td>
                      <td className={`py-5 px-3 md:px-4 lg:px-5 text-[14px] md:text-[16px] font-normal leading-[1.48] text-[#EDE6DA] opacity-75 text-center align-middle break-keep ${!isLast ? 'border-b border-white/5' : ''}`}>
                        {row.traditional}
                      </td>
                      <td className={`py-5 px-3 md:px-4 lg:px-5 text-sm md:text-base font-medium text-white text-center align-middle break-keep bg-[#B7788D]/10 border-x border-[#B7788D]/25 shadow-inner ${
                        isLast 
                          ? 'rounded-b-2xl border-b border-[#B7788D]/30' 
                          : 'border-b border-[#B7788D]/15'
                      }`}>
                        <span className="text-[#D9A8A7] font-bold leading-[1.48] inline-block">
                          {row.baekdohwa}
                        </span>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>

        <p className="text-center text-[12px] sm:text-[13px] leading-[1.5] text-[#EDE6DA]/75 mt-6 break-keep">
          ※ 타 서비스를 폄하하려는 목적이 아니며, 각 분석 방식의 일반적 특성과 백도화가 지향하는 깊이의 차이를 객관적으로 안내해 드립니다.
        </p>
      </Reveal>
    </section>
  )
}
