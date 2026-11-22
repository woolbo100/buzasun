'use client'

import Reveal from '@/components/Reveal'
import { wealthCaseData } from './data'

export default function WealthPersonalizedCases() {
  return (
    <section className="mb-40">
      <Reveal>
        <div className="max-w-4xl mx-auto text-center mb-16 space-y-6">
          <div>
            <span className="block font-elegant text-[12pt] font-semibold tracking-[0.2em] text-[#8FB4A4] uppercase mb-4">
              DIFFERENT CHOICES, DIFFERENT WEALTH
            </span>
            <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white mb-6 leading-[1.25] md:leading-[1.3] break-keep">
              같은 재물 성향이라도,<br />
              <span className="gradient-text-abundance">돈을 다루는 방식</span>은 다를 수 있습니다.
            </h2>
          </div>

          {/* 3개 문단 설명 문구 블록 */}
          <div className="space-y-3.5 md:space-y-4 max-w-3xl mx-auto text-[16px] md:text-[18px] text-[#EDE6DA]/90 font-light leading-relaxed break-keep">
            <p>
              반복되는 돈의 흐름에는 나만의 선택 구조가 숨어 있습니다.<br className="hidden sm:inline" />
              수입과 지출, 통장의 잔고에는 내가 세상을 대하는 고유한 무의식적 반응이 깃들어 있습니다.
            </p>
            <p>
              타고난 재물 코드가 같아도, 내가 어떤 기회와 환경을 만나고 어떤 판단을 내리느냐에 따라<br />
              현실의 결과는 완전히 달라집니다.
            </p>
            <p className="text-[#FAF7F2] font-medium pt-1">
              중요한 것은 내 안의 코드뿐만 아니라, 그 코드가 발현될 때<br />
              <span className="text-[#8FB4A4] font-semibold">내가 돈 앞에서 어떻게 반응하고 선택하는지를 아는 것</span>입니다.
            </p>
          </div>
        </div>

        {/* CASE A & B 비교 카드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto mb-12">
          {wealthCaseData.cases.map((c, idx) => (
            <div
              key={idx}
              className="gungjung-glass p-8 md:p-10 rounded-[32px] border border-white/10 hover:border-[#608F82]/50 bg-gradient-to-b from-[#0f241f]/25 via-black/30 to-black/35 transition-all duration-300 relative overflow-hidden flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider bg-[#608F82] text-[#0f241f]">
                    {c.badge}
                  </span>
                  <div className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-[#E6BE8A]">
                    선천 재물 코드: <span className="font-semibold">{c.code}</span>
                  </div>
                </div>

                <h3 className="text-[20px] md:text-[24px] font-bold text-white mb-6 group-hover:text-[#8FB4A4] transition-colors leading-snug break-keep">
                  {c.typeName}
                </h3>

                <div className="space-y-4">
                  {/* 현실에서 나타나는 패턴 */}
                  <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                    <span className="text-xs font-bold text-white/50 block mb-1">
                      {c.behaviorTitle}
                    </span>
                    <p className="text-sm md:text-base text-[#EDE6DA]/85 font-light leading-relaxed break-keep">
                      {c.behaviorDesc}
                    </p>
                  </div>

                  {/* 반복되는 선택 */}
                  <div className="p-4 rounded-2xl bg-emerald-950/20 border border-[#608F82]/25">
                    <span className="text-xs font-bold text-[#8FB4A4]/80 block mb-1">
                      {c.decisionTitle}
                    </span>
                    <p className="text-sm md:text-base text-[#EDE6DA]/85 font-light leading-relaxed break-keep">
                      {c.decisionDesc}
                    </p>
                  </div>
                </div>
              </div>

              {/* 실천 처방 방향 (하단 강조) */}
              <div className="mt-8 pt-6 border-t border-[#608F82]/25 p-4 rounded-2xl bg-[#608F82]/15">
                <span className="text-xs font-bold text-[#E6BE8A] block mb-1">
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
          <p className="text-base md:text-lg text-[#E6BE8A] font-elegant leading-relaxed whitespace-pre-line font-medium">
            {wealthCaseData.conclusion}
          </p>
          <p className="text-xs text-white/40">
            {wealthCaseData.disclaimer}
          </p>
        </div>
      </Reveal>
    </section>
  )
}
