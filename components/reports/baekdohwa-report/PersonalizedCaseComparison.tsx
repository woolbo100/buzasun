'use client'

import Reveal from '@/components/Reveal'
import { personalizedCaseData } from './data'

export default function PersonalizedCaseComparison() {
  return (
    <section className="mb-40">
      <Reveal>
        <div className="max-w-4xl mx-auto text-center mb-16 space-y-6">
          <div>
            <span className="block font-elegant text-[12pt] font-semibold tracking-[0.2em] text-[#D9A8A7] uppercase mb-4">
              DIFFERENT CHOICES, DIFFERENT LOVE
            </span>
            <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white mb-6 leading-[1.25] md:leading-[1.3] break-keep whitespace-pre-line">
              {personalizedCaseData.mainCopy}
            </h2>
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            <p className="text-[17px] md:text-[18px] text-[#EDE6DA] opacity-85 font-light leading-relaxed break-keep">
              {personalizedCaseData.subCopy}<br />
              타고난 선천코드가 같아도, 내가 어떤 인연을 만나고 어떤 상호작용을 하느냐에 따라<br className="hidden sm:inline" />
              사랑의 결말은 완전히 달라집니다.
            </p>
            <p className="font-elegant font-medium text-[17px] md:text-[19px] text-[#FAF7F2] leading-relaxed break-keep pt-1">
              <span className="text-[#D9A8A7] font-semibold">중요한 것은 내 안의 코드뿐만 아니라, 그 코드가 발현될 때<br />
              내가 어떻게 반응하는지를 아는 것입니다.</span>
            </p>
          </div>
        </div>

        {/* CASE A & B 비교 카드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-7xl mx-auto mb-12">
          {personalizedCaseData.cases.map((c, idx) => (
            <div
              key={idx}
              className="p-7 md:p-9 rounded-[28px] md:rounded-[32px] transition-all duration-300 relative overflow-hidden flex flex-col justify-between group shadow-2xl hover:border-[rgba(245,218,226,0.30)]"
              style={{
                background: 'rgba(110, 62, 85, 0.16)',
                border: '1px solid rgba(215, 170, 185, 0.18)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
              }}
            >
              {/* 은은한 배경 광채 효과 */}
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-[#B7788D]/10 rounded-full blur-[60px] pointer-events-none" />

              <div className="relative z-10">
                {/* 상단 뱃지 & 선천코드 보조 라벨 */}
                <div className="flex items-center justify-between mb-5">
                  {/* CASE 메인 라벨 (현실의 패턴과 동일한 로즈플럼 pill 스타일) */}
                  <span className="px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider bg-[#B7788D]/20 border border-[#B7788D]/40 text-[#FAF7F2] shadow-sm">
                    {c.badge}
                  </span>
                  {/* 선천코드 보조 라벨 (한 단계 은은한 보조 표시) */}
                  <div className="px-2.5 py-1 rounded-full bg-white/[0.03] border border-white/10 text-[11px] text-[#EDE6DA]/60">
                    선천코드 · <span className="text-[#EDE6DA]/85 font-medium">{c.code}</span>
                  </div>
                </div>

                {/* 카드 제목 */}
                <h3 className="text-[20px] md:text-[23px] font-bold text-white mb-6 leading-snug break-keep tracking-tight">
                  {c.typeName}
                </h3>

                {/* 3개 정보 박스 (한 세트의 통일된 반투명 정보 블록) */}
                <div className="space-y-3.5">
                  {/* 1. 반복 행동 */}
                  <div className="p-4 md:p-4.5 rounded-2xl bg-black/20 border border-white/10 backdrop-blur-sm">
                    <span className="text-xs font-medium text-white/50 block mb-1.5">
                      {c.behaviorTitle}
                    </span>
                    <p className="text-sm md:text-base text-[#EDE6DA]/90 font-light leading-relaxed break-keep">
                      {c.behaviorDesc}
                    </p>
                  </div>

                  {/* 2. 관계의 결과 (미세한 로즈플럼 틴트) */}
                  <div className="p-4 md:p-4.5 rounded-2xl bg-[#4A1D2C]/20 border border-[#B7788D]/20 backdrop-blur-sm">
                    <span className="text-xs font-semibold text-[#D9A8A7] block mb-1.5">
                      {c.resultTitle}
                    </span>
                    <p className="text-sm md:text-base text-[#EDE6DA]/90 font-light leading-relaxed break-keep">
                      {c.resultDesc}
                    </p>
                  </div>

                  {/* 3. 처방 방향 (소프트 더스티 로즈 틴트) */}
                  <div className="p-4 md:p-4.5 rounded-2xl bg-[#B7788D]/10 border border-[#B7788D]/25 backdrop-blur-sm">
                    <span className="text-xs font-semibold text-[#D9A8A7] block mb-1.5">
                      ✦ {c.solutionTitle}
                    </span>
                    <p className="text-sm md:text-base text-[#FAF7F2] font-medium leading-relaxed break-keep">
                      {c.solutionDesc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 결론 요약 & 면책 고지 */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <p className="text-base md:text-lg text-[#D9A8A7] font-elegant leading-relaxed whitespace-pre-line font-medium">
            {personalizedCaseData.conclusion}
          </p>
          <p className="text-xs text-white/40">
            {personalizedCaseData.disclaimer}
          </p>
        </div>
      </Reveal>
    </section>
  )
}
