'use client'

import Reveal from '@/components/Reveal'
import { BookOpen, Compass, ClipboardCheck, Shuffle } from 'lucide-react'

export default function ReportProductionTimeline() {
  const studies = [
    {
      num: 'STUDY 01',
      title: '명리 원국 정밀 연구',
      desc: '일간·십성·지장간부터 배우자궁과 12운성까지, 명리의 핵심 요소를 입체 교차하여 타고난 연애 기질을 읽는 정통 기준을 세웠습니다.',
      icon: <BookOpen className="w-6 h-6 text-[#D9A8A7]" />
    },
    {
      num: 'STUDY 02',
      title: '심리·뇌과학 회로 탐구',
      desc: '애착 유형과 방어기제에 뇌과학적 감정 반응 회로를 결합해, 갈등 순간 반복되는 연애 습관의 무의식적 뿌리를 규명했습니다.',
      icon: <Compass className="w-6 h-6 text-[#D9A8A7]" />
    },
    {
      num: 'STUDY 03',
      title: '연애 특화 분석 기준서',
      desc: '매력 무기부터 무의식적 끌림, 배우자 코드, 관계의 그림자까지 오직 사랑에만 집중한 8개 장, 30여 개 심층 질문 체계를 설계했습니다.',
      icon: <ClipboardCheck className="w-6 h-6 text-[#D9A8A7]" />
    },
    {
      num: 'STUDY 04',
      title: '실전 행동 처방 설계',
      desc: '단순한 운명 감상에서 끝나지 않도록 소통 화법, 감정 경계선, 오행 개운 루틴 등 내일의 연애를 바꾸는 실전 처방을 완성했습니다.',
      icon: <Shuffle className="w-6 h-6 text-[#D9A8A7]" />
    }
  ]

  return (
    <section className="mb-40">
      <Reveal>
        <div className="max-w-4xl mx-auto text-center mb-14">
          <span className="block font-elegant text-[12pt] font-semibold tracking-[0.2em] text-[#D9A8A7] uppercase mb-4">
            BEHIND THE REPORT
          </span>
          <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white mb-6 leading-[1.28] md:leading-[1.32] break-keep">
            한 권의 리포트가 완성되기까지,<br />
            <span className="gradient-text-love">수많은 질문과 정밀한 연구</span>가 있었습니다.
          </h2>
          <div className="max-w-3xl mx-auto text-[17px] md:text-[18px] text-[#EDE6DA] opacity-85 font-light leading-relaxed break-keep space-y-3 md:space-y-3.5">
            <p>
              백도화의 선천코드 연애 리포트는 시중의 운세 문장을 짜깁기한 결과물이 아닙니다.
            </p>
            <p>
              동양명리학의 정밀한 원국 해석에 <strong className="text-[#D9A8A7] font-semibold">심리학과 뇌과학의 통찰</strong>을 더해,<br />
              사랑과 관계의 본질적인 질문을 다시 설계했습니다.
            </p>
            <p>
              이를 바탕으로 <strong className="text-[#D9A8A7] font-semibold">오직 연애에만 집중한 핵심 분석 축</strong>과 <strong className="text-[#D9A8A7] font-semibold">일관된 정밀 해독 시스템</strong>을 구축했습니다.
            </p>
          </div>
        </div>

        {/* 4단계 연구 및 분석 기준 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {studies.map((item, idx) => (
            <div
              key={idx}
              className="gungjung-glass p-8 rounded-[28px] border border-white/10 hover:border-[#B7788D]/40 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#B7788D]/10 rounded-bl-full pointer-events-none"></div>

              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#2D0A1E] border border-[#B7788D]/30 flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <span className="text-xs font-mono font-bold tracking-widest text-[#D9A8A7] mb-2 block">
                  {item.num}
                </span>
                <h3 className="text-[20px] md:text-[22px] font-bold text-white mb-3 leading-snug break-keep">
                  {item.title}
                </h3>
              </div>
              <p className="text-[15px] md:text-[16px] text-[#EDE6DA]/75 font-light leading-[1.68] md:leading-[1.72] break-keep mt-4 pt-4 border-t border-white/5">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* 하단 마무리 문구 */}
        <div className="mt-14 md:mt-16 text-center max-w-2xl mx-auto px-4">
          <p className="font-elegant font-medium text-[20px] md:text-[23px] text-[#FAF7F2] leading-relaxed break-keep">
            &ldquo;한 사람의 사랑을 가볍게 해석하지 않기 위해,<br />
            <span className="text-[#D9A8A7] font-semibold">백도화는 분석의 기준부터 세웠습니다.</span>&rdquo;
          </p>
        </div>
      </Reveal>
    </section>
  )
}
