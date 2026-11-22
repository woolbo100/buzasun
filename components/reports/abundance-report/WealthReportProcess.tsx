'use client'

import Reveal from '@/components/Reveal'
import { BookOpen, Compass, ClipboardCheck, Shuffle } from 'lucide-react'

export default function WealthReportProcess() {
  const studies = [
    {
      num: 'STUDY 01',
      title: '명리 재물 구조 연구',
      desc: '일간·십성과 오행의 구성까지 명리의 핵심 요소를 입체 교차하여, 타고난 재물 기질과 자원 활용 성향을 읽는 정통 기준을 세웠습니다.',
      icon: <BookOpen className="w-6 h-6 text-[#8FB4A4]" />
    },
    {
      num: 'STUDY 02',
      title: '돈의 심리·행동 탐구',
      desc: '결핍감과 가격 책정의 두려움, 시작을 미루는 습관까지 더해 돈 앞에서 반복되는 선택과 소비의 무의식적 뿌리를 규명했습니다.',
      icon: <Compass className="w-6 h-6 text-[#8FB4A4]" />
    },
    {
      num: 'STUDY 03',
      title: '풍요 특화 분석 기준서',
      desc: '재물 기질부터 수익 활동 성향, 소비 패턴과 금전적 경계선까지 오직 풍요에만 집중한 분석 체계와 심층 질문 구조를 설계했습니다.',
      icon: <ClipboardCheck className="w-6 h-6 text-[#8FB4A4]" />
    },
    {
      num: 'STUDY 04',
      title: '실전 풍요 행동 처방',
      desc: '막연한 재물운 풀이에 그치지 않고, 선천 기질과 현실 여건을 연결해 일상의 돈 흐름과 선택 습관을 바꾸는 구체적 행동 처방을 완성했습니다.',
      icon: <Shuffle className="w-6 h-6 text-[#8FB4A4]" />
    }
  ]

  return (
    <section className="mb-40 w-full max-w-[1280px] mx-auto">
      <Reveal className="w-full">
        <div className="max-w-4xl mx-auto text-center mb-14">
          <span className="block font-elegant text-[12pt] font-semibold tracking-[0.2em] text-[#8FB4A4] uppercase mb-4">
            PRECISION & RESEARCH
          </span>
          <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white mb-6 leading-[1.28] md:leading-[1.32] break-keep">
            한 권의 풍요 리포트가 완성되기까지,<br />
            <span className="gradient-text-abundance">수많은 질문과 정밀한 연구</span>가 있었습니다.
          </h2>
          <div className="max-w-3xl mx-auto text-[17px] md:text-[18px] text-[#EDE6DA] opacity-85 font-light leading-relaxed break-keep space-y-3 md:space-y-3.5">
            <p>
              백도화의 선천코드 풍요 리포트는 단순히 재물운을 예측하는 결과물이 아닙니다.
            </p>
            <p>
              동양 명리학의 재물 구조 해석에 <strong className="text-[#C2A477] font-semibold">돈을 대하는 심리와 현실의 행동 패턴</strong>을 연결하여,<br className="hidden sm:inline" />
              풍요에 관한 본질적인 질문을 다시 설계했습니다.
            </p>
            <p>
              이를 바탕으로 <strong className="text-[#C2A477] font-semibold">오직 풍요라는 주제에 집중한 분석 체계</strong>와 <strong className="text-[#C2A477] font-semibold">개인 맞춤형 행동 처방 구조</strong>를 마련했습니다.
            </p>
          </div>
        </div>

        {/* 4단계 연구 및 분석 기준 그리드 (동일 높이 flex-col 및 내부 위치 완벽 일치) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-[1280px] mx-auto">
          {studies.map((item, idx) => (
            <div
              key={idx}
              className="gungjung-glass p-7 sm:p-8 rounded-[28px] border border-white/10 hover:border-[#608F82]/40 bg-gradient-to-b from-[#0f241f]/30 via-transparent to-black/40 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#608F82]/15 rounded-bl-full pointer-events-none"></div>

              <div>
                {/* ① 상단 아이콘 */}
                <div className="w-12 h-12 rounded-2xl bg-[#0f241f] border border-[#608F82]/30 flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                {/* ② STUDY 번호 */}
                <span className="text-xs font-mono font-bold tracking-widest text-[#C2A477] mb-2 block">
                  {item.num}
                </span>
                {/* ③ 카드 제목 (데스크톱 1줄 통일) */}
                <h3 className="text-[20px] sm:text-[21px] lg:text-[21px] font-bold text-white mb-3 leading-snug break-keep">
                  {item.title}
                </h3>
              </div>

              {/* ④ 구분선 및 ⑤ 설명 문구 (데스크톱 약 4줄 정렬 & 시작 높이 통일) */}
              <p className="text-[14.5px] sm:text-[15px] text-[#EDE6DA]/75 font-light leading-[1.68] md:leading-[1.72] break-keep mt-4 pt-4 border-t border-white/5">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* 하단 마무리 브랜드 철학 문구 */}
        <div className="mt-14 md:mt-16 text-center max-w-2xl mx-auto px-4">
          <p className="font-elegant font-medium text-[20px] md:text-[23px] text-[#FAF7F2] leading-relaxed break-keep">
            &ldquo;한 사람의 풍요를 가볍게 예측하지 않기 위해,<br />
            <span className="text-[#C2A477] font-semibold">백도화는 분석의 기준부터 세웠습니다.</span>&rdquo;
          </p>
        </div>
      </Reveal>
    </section>
  )
}
