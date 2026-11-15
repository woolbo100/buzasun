'use client'

import Reveal from '@/components/Reveal'
import { Crown, Sparkles, ShieldCheck } from 'lucide-react'

export default function TransformationThreeChanges() {
  const changes = [
    {
      num: '01',
      symbol: '①',
      title: '연애의 주도권 탈환',
      desc: '남자의 비위를 맞추던 ‘을(乙)’에서 벗어나, 판을 읽고 선택하는 ‘주권자’가 됩니다.',
      icon: <Crown className="w-5 h-5 text-[#D9A8A7]" />,
      tag: '주권자의 연애'
    },
    {
      num: '02',
      symbol: '②',
      title: '소모적인 반복의 종결',
      desc: '왜 내가 늘 그런 사람에게 끌렸는지 원인을 알기에, 다음 연애부터는 엉뚱한 함정에 빠지지 않습니다.',
      icon: <Sparkles className="w-5 h-5 text-[#D9A8A7]" />,
      tag: '패턴의 해방'
    },
    {
      num: '03',
      symbol: '③',
      title: '나만의 연애 기준(필터) 정립',
      desc: '흔들리지 않고 나를 온전히 지켜줄 진짜 인연을 알아보는 눈이 생깁니다.',
      icon: <ShieldCheck className="w-5 h-5 text-[#D9A8A7]" />,
      tag: '진짜 인연의 분별'
    }
  ]

  return (
    <section className="mb-32">
      <Reveal>
        <div className="max-w-4xl mx-auto text-center mb-14">
          <span className="block font-elegant text-xs md:text-sm font-semibold tracking-[0.25em] text-[#D9A8A7] uppercase mb-4">
            TRANSFORMATION
          </span>
          <h2 className="text-2xl md:text-[34px] lg:text-[36px] font-elegant font-bold text-white mb-4 leading-[1.3] break-keep">
            리포트를 열어보는 순간,<br className="sm:hidden" />
            <span className="gradient-text-love"> 당신의 연애에 생기는 3가지 변화</span>
          </h2>
          <p className="text-sm md:text-base text-[#EDE6DA]/75 font-light leading-relaxed max-w-xl mx-auto break-keep">
            단순한 성향 분석을 넘어, 당신의 미래 연애 청사진을 명확하고 당당하게 바꿔놓습니다.
          </p>
        </div>

        {/* 3가지 변화 카드 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {changes.map((item, idx) => (
            <div
              key={idx}
              className="gungjung-glass p-8 md:p-9 rounded-[32px] border border-[#B7788D]/35 bg-gradient-to-b from-[#2A0E22]/50 via-[#1C091A]/40 to-[#100612]/60 flex flex-col justify-between group hover:border-[#B7788D]/60 transition-all duration-300 hover:-translate-y-1 shadow-xl relative overflow-hidden"
            >
              {/* 은은한 배경 오라 */}
              <div className="absolute top-0 right-0 w-28 h-28 bg-[#B7788D]/10 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#2D0A1E] border border-[#B7788D]/40 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                    {item.icon}
                  </div>
                  <span className="text-xs font-mono font-bold tracking-widest px-3 py-1 rounded-full bg-[#B7788D]/15 border border-[#B7788D]/30 text-[#E6BFA9]">
                    {item.tag}
                  </span>
                </div>

                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-sm md:text-base font-bold text-[#D9A8A7]">
                    {item.symbol}
                  </span>
                  <h3 className="text-lg md:text-xl font-bold text-white leading-snug break-keep group-hover:text-[#FAF6EE] transition-colors">
                    {item.title}
                  </h3>
                </div>

                <p className="text-sm md:text-base text-[#EDE6DA]/85 font-light leading-relaxed break-keep mt-2">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-[#E6BFA9]/60">
                <span className="font-mono tracking-wider">CHANGE {item.num}</span>
                <span className="text-[#D9A8A7]/70">선천코드 실천 변화</span>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
