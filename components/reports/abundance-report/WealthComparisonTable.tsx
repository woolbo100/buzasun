'use client'

import Reveal from '@/components/Reveal'
import { wealthComparisonTableData } from './data'

export default function WealthComparisonTable() {
  return (
    <section className="mb-28 md:mb-36 w-full max-w-[1280px] mx-auto">
      <Reveal className="w-full">
        {/* 상단 라벨 / 제목 / 설명 문구 */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="block font-elegant text-[12pt] font-semibold tracking-[0.2em] text-[#8FB4A4] uppercase mb-4">
            COMPARISON MATRIX
          </span>
          <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white mb-6 leading-[1.25] md:leading-[1.3] break-keep">
            재물운을 묻는 것에서,<br />
            <span className="gradient-text-abundance">나에게 맞는 풍요의 방식을 찾는 것까지.</span>
          </h2>
          <p className="text-[18px] text-[#EDE6DA] opacity-75 font-light break-keep">
            {wealthComparisonTableData.subTitle}
          </p>
        </div>

        {/* 데스크톱/태블릿 비교표 (가로 스크롤 완벽 대응) */}
        <div className="w-full max-w-[1280px] mx-auto overflow-x-auto pb-4">
          <div className="min-w-[720px]">
            <table className="w-full border-separate border-spacing-0 text-left">
              <thead>
                <tr>
                  <th className="py-5 px-4 md:px-5 text-sm font-semibold text-white/50 w-[19%] border-b border-white/10">
                    비교 항목
                  </th>
                  <th className="py-5 px-3 md:px-4 lg:px-5 text-sm md:text-[15px] font-semibold text-white/70 w-[24%] text-center border-b border-white/10">
                    자동 생성형 운세
                  </th>
                  <th className="py-5 px-3 md:px-4 lg:px-5 text-sm md:text-[15px] font-semibold text-white/70 w-[24%] text-center border-b border-white/10">
                    일반 재물 사주
                  </th>
                  <th className="py-5 px-3 md:px-4 lg:px-5 text-base font-bold text-[#8FB4A4] w-[33%] text-center bg-[#0f241f]/75 rounded-t-2xl border-t border-x border-[#608F82]/35 border-b border-[#608F82]/20">
                    백도화 풍요 리포트
                  </th>
                </tr>
              </thead>
              <tbody>
                {wealthComparisonTableData.rows.map((row, idx) => {
                  const isLast = idx === wealthComparisonTableData.rows.length - 1
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
                      <td className={`py-5 px-3 md:px-4 lg:px-5 text-sm md:text-base font-medium text-white text-center align-middle break-keep bg-[#0f241f]/45 border-x border-[#608F82]/30 shadow-inner ${
                        isLast 
                          ? 'rounded-b-2xl border-b border-[#608F82]/35' 
                          : 'border-b border-[#608F82]/20'
                      }`}>
                        <span className="text-[#8FB4A4] font-bold leading-[1.48] inline-block">
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
