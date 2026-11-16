'use client'

import Image from 'next/image'
import Reveal from '@/components/Reveal'

export default function PersonalAnalysisMethod() {
  const analysisPhases = [
    {
      num: '01',
      title: '동양 명리학 — 선천 기질 해독',
      desc: '일간과 십성, 지장간과 배우자궁을 살펴 타고난 연애 기질과 끌림의 특징을 해석합니다.'
    },
    {
      num: '02',
      title: '심리학 · NLP · 무의식 — 관계 패턴 이해',
      desc: '애착, 방어기제, 감정 반응과 무의식적인 관계 습관을 심리적 자기 이해의 관점에서 함께 살펴봅니다.'
    },
    {
      num: '03',
      title: '행동 설계 · 자기 이해 — 실전 관계 처방',
      desc: '분석을 통해 발견한 특징을 일상에서 활용할 수 있도록 관계의 선택 기준과 구체적인 행동 루틴으로 연결합니다.'
    }
  ]

  const tags = [
    '선천코드 해독',
    '무의식 · NLP',
    '감정 습관 이해',
    '실전 행동 처방'
  ]

  return (
    <section className="mb-40">
      <Reveal>
        {/* 모바일 표시 순서 1: 섹션 제목 및 헤드카피 */}
        <div className="lg:hidden text-center sm:text-left mb-8 space-y-2.5">
          <span className="block font-elegant text-[12pt] font-semibold tracking-[0.2em] text-[#D9A8A7] uppercase">
            POINT 02 · CONVERGENCE
          </span>
          <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white leading-[1.25] break-keep">
            사주로 타고난 코드를 읽고,<br />
            <span className="gradient-text-love">심리와 무의식의 관점</span>으로 <span className="gradient-text-love">사랑의 습관</span>을 이해합니다.
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-20 items-stretch">
          {/* PC 좌측 텍스트 (7단 = 58.33%) / 모바일 표시 순서 3 */}
          <div className="lg:col-span-7 lg:pr-2 xl:pr-6 flex flex-col justify-between space-y-6 lg:space-y-7 order-2 lg:order-1">
            {/* 데스크톱 전용 헤드카피 (모바일에서는 이미지 상단에 표시) */}
            <div className="hidden lg:block space-y-2.5">
              <span className="block font-elegant text-[12pt] font-semibold tracking-[0.2em] text-[#D9A8A7] uppercase">
                POINT 02 · CONVERGENCE
              </span>
              <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white leading-[1.2] md:leading-[1.22] break-keep">
                사주로 타고난 코드를 읽고,<br />
                <span className="gradient-text-love">심리와 무의식의 관점</span>으로 <span className="gradient-text-love">사랑의 습관</span>을 이해합니다.
              </h2>
            </div>

            {/* 핵심 본문 2개 문단 */}
            <div className="space-y-3.5 text-[16px] md:text-[17px] text-[#EDE6DA] opacity-85 leading-[1.8] break-keep font-light">
              <p>
                단순한 만세력 해석이나 자동 조합 운세와는 분석의 설계부터 다릅니다.
              </p>
              <p>
                동양 명리학을 바탕으로 심리학, NLP·최면 상담, 두뇌 습관 코칭에서 다루는 자기 이해의 관점까지 연결해, 당신의 연애를 더욱 입체적으로 살펴봅니다.
              </p>
            </div>

            {/* 3단계 통합 해독 구조 (가로형 글라스 블록 세로 정돈) */}
            <div className="space-y-3 pt-1">
              {analysisPhases.map((phase, idx) => (
                <div
                  key={idx}
                  className="gungjung-glass p-4 sm:p-5 rounded-2xl border border-white/10 hover:border-[#B7788D]/40 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-1.5">
                    <span className="text-xs font-mono font-bold tracking-widest text-[#D9A8A7] shrink-0">
                      {phase.num}
                    </span>
                    <h3 className="text-base md:text-[17px] font-bold text-white leading-snug break-keep">
                      {phase.title}
                    </h3>
                  </div>
                  <p className="text-sm md:text-[15px] text-[#EDE6DA]/75 font-light leading-relaxed break-keep pl-7">
                    {phase.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* 하단 전문성 및 분석 철학 강조 문구 */}
            <div className="pt-2">
              <div className="p-5 md:p-6 rounded-2xl border border-[#B7788D]/25 bg-gradient-to-r from-[#2D0A1E]/30 to-[#140816]/40 backdrop-blur-sm space-y-2">
                <p className="font-elegant font-medium text-[15px] md:text-[17px] text-[#FAF7F2] leading-relaxed break-keep">
                  &ldquo;명리학의 해석과 심리·무의식에 대한 자기 이해, 두뇌 습관 코칭의 관점을 함께 익혀온 경험을 바탕으로 설계했습니다.
                </p>
                <p className="font-elegant font-semibold text-[15px] md:text-[17px] text-[#D9A8A7] leading-relaxed break-keep">
                  단편적인 운세 설명을 넘어, 당신의 연애를 여러 각도에서 이해할 수 있도록 돕는 심층 분석서입니다.&rdquo;
                </p>
              </div>
            </div>

            {/* 하단 4개 태그 배지 */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
              {tags.map((tag, idx) => (
                <div key={idx} className="detail-glass-card flex items-center justify-center gap-2 p-3 rounded-2xl text-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#B7788D] shadow-[0_0_10px_rgba(183,120,141,0.5)] shrink-0"></div>
                  <span className="text-xs sm:text-sm text-white/85 font-medium">{tag}</span>
                </div>
              ))}
            </div>
          </div>

          {/* PC 우측 이미지 (5단 = 41.67%) / 모바일 표시 순서 2 */}
          <div className="lg:col-span-5 relative group flex flex-col order-1 lg:order-2">
            <div className="relative aspect-[3/4] lg:aspect-auto lg:h-full w-full max-w-sm sm:max-w-md lg:max-w-none mx-auto rounded-[28px] md:rounded-[36px] overflow-hidden border border-white/10 shadow-2xl bg-[#130917]">
              <Image 
                src="/image/lovereport/p2.webp" 
                alt="사주와 심리로 사랑의 이면을 들여다보는 백도화 선천코드 연애 리포트" 
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]" 
              />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
