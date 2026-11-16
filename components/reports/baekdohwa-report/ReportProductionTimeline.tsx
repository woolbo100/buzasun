'use client'

import Reveal from '@/components/Reveal'
import { BookOpen, Compass, ClipboardCheck, Shuffle } from 'lucide-react'

export default function ReportProductionTimeline() {
  const studies = [
    {
      num: 'STUDY 01',
      title: '명리 자료 연구',
      desc: '일간·십성·지장간·배우자궁 등 명리학의 주요 요소와 해석 자료를 공부하고 정리하며, 연애와 관계를 살펴볼 수 있는 기초 자료를 축적했습니다.',
      icon: <BookOpen className="w-6 h-6 text-[#D9A8A7]" />
    },
    {
      num: 'STUDY 02',
      title: '관계 심리 탐구',
      desc: '애착, 방어기제, 감정 반응, 관계 습관 등 심리적 자기 이해의 관점을 살피며, 사랑 앞에서 나타나는 다양한 행동과 감정의 특징을 정리했습니다.',
      icon: <Compass className="w-6 h-6 text-[#D9A8A7]" />
    },
    {
      num: 'STUDY 03',
      title: '연애 분석 기준서 구축',
      desc: '연애 기질, 매력무기, 이상형, 배우자 코드, 관계의 그림자 등을 세분화하여 개인별 분석에 활용할 수 있는 기준과 질문 체계를 구성했습니다.',
      icon: <ClipboardCheck className="w-6 h-6 text-[#D9A8A7]" />
    },
    {
      num: 'STUDY 04',
      title: '실천 처방 설계',
      desc: '해석에서 끝나지 않도록 관계의 선택 기준, 감정 표현, 행동 습관을 점검할 수 있는 실천 항목을 기획하고, 분석 결과와 연결하는 방법을 설계했습니다.',
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
          <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white mb-6 leading-[1.25] md:leading-[1.3] break-keep">
            한 권의 리포트가 완성되기까지,<br className="sm:hidden" />
            <span className="gradient-text-love"> 수많은 질문과 연구</span>가 있었습니다.
          </h2>
          <div className="max-w-3xl mx-auto text-[17px] md:text-[18px] text-[#EDE6DA] opacity-85 font-light leading-relaxed break-keep space-y-3">
            <p>
              백도화의 선천코드 연애 리포트는 단순히 운세 문장을 모아 만든 결과물이 아닙니다.<br className="hidden sm:inline" />
              명리학의 다양한 해석 자료를 공부하고, 관계 심리와 자기 이해의 관점에서 사랑에 관한 질문을 다시 살폈습니다.
            </p>
            <p>
              그 과정에서{' '}
              <span className="text-[#D9A8A7] font-semibold">
                연애에 특화된 분석 항목
              </span>
              을 정리하고,{' '}
              <span className="text-[#D9A8A7] font-semibold">
                고객마다 다른 선천코드를 일관된 기준으로 해석하기 위한 분석 체계
              </span>
              를 설계했습니다.
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
              <p className="text-sm text-[#EDE6DA]/70 font-light leading-relaxed break-keep mt-4 pt-4 border-t border-white/5">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* 하단 마무리 문구 */}
        <div className="mt-14 md:mt-16 text-center max-w-2xl mx-auto px-4">
          <p className="font-elegant font-medium text-[20px] md:text-[23px] text-[#FAF7F2] leading-relaxed break-keep">
            &ldquo;한 사람의 사랑을 가볍게 해석하지 않기 위해,<br className="sm:hidden" />
            <span className="text-[#D9A8A7] font-semibold"> 백도화는 분석의 기준부터 세웠습니다.</span>&rdquo;
          </p>
        </div>
      </Reveal>
    </section>
  )
}
