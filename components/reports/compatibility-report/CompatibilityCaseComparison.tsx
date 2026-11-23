'use client'

import Reveal from '@/components/Reveal'
import { compatibilityCaseData } from './data'

export default function CompatibilityCaseComparison() {
  return (
    <section className="mb-40 w-full max-w-[1280px] mx-auto">
      <Reveal className="w-full">
        {/* 상단 헤더: 영문 라벨, 메인 제목 2줄, 설명 2문단, 하단 강조 문구 (풍요 리포트 규격 동일 적용) */}
        <div className="max-w-4xl mx-auto text-center mb-16 space-y-6">
          <div>
            <span className="block font-elegant text-[12pt] font-semibold tracking-[0.2em] text-[#D8BB94] uppercase mb-4">
              DIFFERENT CHOICES, DIFFERENT BONDS
            </span>
            <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white mb-6 leading-[1.25] md:leading-[1.3] break-keep">
              같은 궁합 구조라도,<br />
              <span className="gradient-text-reunion">관계의 모습은 달라질 수 있습니다.</span>
            </h2>
          </div>

          {/* 3개 문단 설명 문구 블록 (일반 설명 2문단 + 하단 강조 문구) */}
          <div className="space-y-3.5 md:space-y-4 max-w-3xl mx-auto text-[16px] md:text-[18px] text-[#EDE6DA]/90 font-light leading-relaxed break-keep">
            <p>
              반복되는 갈등에는 두 사람만의 반응과 선택의 패턴이 숨어 있습니다.<br className="hidden sm:inline" />
              같은 상황에서도 누군가는 다가가고, 누군가는 침묵하며 서로 다른 방식으로 관계를 지키려 합니다.
            </p>
            <p>
              같은 선천 기질의 조합이라도 서로의 차이를 어떻게 이해하고 대화하느냐에 따라<br className="hidden sm:inline" />
              두 사람이 만들어 가는 관계의 모습은 달라질 수 있습니다.
            </p>
            <p className="text-[#FAF7F2] font-medium pt-1">
              중요한 것은 두 사람의 궁합이 좋고 나쁜지가 아니라,<br className="hidden sm:inline" />
              <span className="text-[#D8BB94] font-semibold">서로의 반응을 이해하고 어떤 선택으로 관계를 이어가는지</span> 아는 것입니다.
            </p>
          </div>
        </div>

        {/* CASE A & B 비교 카드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-[1280px] mx-auto mb-12">
          {compatibilityCaseData.cases.map((c, idx) => (
            <div
              key={idx}
              className="gungjung-glass p-8 md:p-10 rounded-[32px] border border-[#B78C86]/25 hover:border-[#C7A97A]/50 bg-gradient-to-b from-[#4A1F2D]/35 to-[#3A1623]/35 transition-all duration-300 relative overflow-hidden flex flex-col justify-between group backdrop-blur-md"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider bg-[#5A2638] text-[#FAF7F2] border border-[#B78C86]/50">
                    {c.badge}
                  </span>
                  <div className="px-3 py-1 rounded-lg bg-[#3A1623]/40 border border-[#B78C86]/20 text-xs text-[#D8BB94]">
                    선천 관계 기질: <span className="font-semibold">{c.code}</span>
                  </div>
                </div>

                <h3 className="text-[20px] md:text-[24px] font-bold text-white mb-3 group-hover:text-[#D8BB94] transition-colors leading-snug break-keep">
                  {c.typeName}
                </h3>
                <p className="text-xs text-[#EDE6DA]/60 mb-6 font-light break-keep">
                  {c.structureDesc}
                </p>

                <div className="space-y-4">
                  {/* 실제 관계 기록 */}
                  <div className="p-4 rounded-2xl bg-[#3A1623]/25 border border-[#B78C86]/20">
                    <span className="text-xs font-bold text-white/50 block mb-1">
                      {c.behaviorTitle}
                    </span>
                    <p className="text-sm md:text-base text-[#EDE6DA]/85 font-light leading-relaxed break-keep">
                      {c.behaviorDesc}
                    </p>
                  </div>

                  {/* 반복되는 갈등 */}
                  <div className="p-4 rounded-2xl bg-[#4A1F2D]/35 border border-[#B78C86]/30">
                    <span className="text-xs font-bold text-rose-300/80 block mb-1">
                      {c.conflictTitle}
                    </span>
                    <p className="text-sm md:text-base text-rose-100/85 font-light leading-relaxed break-keep">
                      {c.conflictDesc}
                    </p>
                  </div>
                </div>
              </div>

              {/* 실천 처방 (하단 강조) */}
              <div className="mt-8 pt-6 border-t border-[#B78C86]/30 p-4 rounded-2xl bg-[#5A2638]/40 border border-[#B78C86]/35">
                <span className="text-xs font-bold text-[#D8BB94] block mb-1">
                  ✨ {c.solutionTitle}
                </span>
                <p className="text-sm md:text-base text-white font-medium leading-relaxed break-keep">
                  {c.solutionDesc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 결론 요약 & 면책 고지 */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <p className="text-base md:text-lg text-[#C19B83] font-elegant leading-relaxed whitespace-pre-line font-medium">
            {compatibilityCaseData.conclusion}
          </p>
          <p className="text-xs text-white/40">
            {compatibilityCaseData.disclaimer}
          </p>
        </div>
      </Reveal>
    </section>
  )
}
