'use client'

import Image from 'next/image'
import Reveal from '@/components/Reveal'

export default function PersonalAnalysisMethod() {
  const analysisPhases = [
    {
      num: '01',
      title: '동양 명리학 — 선천 기질 해독',
      desc: '일간과 십성, 지장간과 배우자궁을 정밀 분석해 타고난 연애 성향과 끌림의 원형을 읽어냅니다.'
    },
    {
      num: '02',
      title: '심리학 · NLP · 무의식 — 반복 패턴 분석',
      desc: '기질 너머에 숨겨진 애착 유형, 방어기제, 무의식적 선택과 뇌에 각인된 감정 습관을 찾아냅니다.'
    },
    {
      num: '03',
      title: '행동 설계 · 자기계발 — 실전 관계 처방',
      desc: '원인 분석에서 멈추지 않고, 익숙한 본능적 반응을 멈추고 새로운 선택을 내리는 구체적 행동 루틴을 제시합니다.'
    }
  ]

  const tags = [
    '선천코드 해독',
    '무의식 · NLP',
    '감정 습관 이해',
    '실전 행동 처방'
  ]

  return (
    <section id="point-02" className="mb-32 md:mb-40 scroll-mt-28 md:scroll-mt-36 pt-4 md:pt-8">
      <Reveal>
        {/* 1. 상단 전체 폭 헤더: 영문 라벨, 메인 제목, 도입 설명 (데스크톱/모바일 공통 최상단) */}
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16 space-y-4 md:space-y-5 px-4">
          <span className="inline-block font-elegant text-[12pt] font-semibold tracking-[0.2em] text-[#D9A8A7] uppercase">
            POINT 02 · THE CONVERGENCE
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-[36px] font-elegant font-bold text-white leading-[1.3] md:leading-[1.32] break-keep">
            &ldquo;사주로 타고난 코드를 읽고,<br className="hidden sm:inline" />
            <span className="gradient-text-love"> 심리와 무의식 설계</span>로{' '}
            <span className="gradient-text-love">사랑의 습관</span>을 바꿉니다.&rdquo;
          </h2>
          <div className="max-w-3xl mx-auto text-[16px] md:text-[17px] text-[#EDE6DA] opacity-85 leading-[1.8] break-keep font-light space-y-2 pt-1">
            <p>
              단순한 만세력 해석이나 자동 조합 운세와는 설계부터 다릅니다.
            </p>
            <p>
              동양 명리학, 심리학, NLP·최면 상담, 두뇌 습관 코칭까지—마음과 행동을 다루는 모든 영역을 하나로 통합해 당신의 연애를 입체적으로 해부합니다.
            </p>
          </div>
        </div>

        {/* 2. 본문 2단 구성: 데스크톱 [왼쪽: 설명 카드/텍스트] | [오른쪽: 기존 3:4 이미지] */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
          
          {/* 왼쪽 텍스트 그룹 (데스크톱 7단 / 모바일 순서 2: 이미지 뒤에 표시) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-5 lg:space-y-6 order-2 lg:order-1">
            {/* 3단계 통합 해독 카드 3개 */}
            <div className="space-y-3.5">
              {analysisPhases.map((phase, idx) => (
                <div
                  key={idx}
                  className="gungjung-glass p-4 sm:p-5 rounded-2xl border border-white/10 hover:border-[#B7788D]/40 transition-all duration-300"
                >
                  <div className="flex items-center gap-2 sm:gap-2.5 mb-1.5">
                    <span className="text-xs font-mono font-bold tracking-widest text-[#D9A8A7] shrink-0">
                      {phase.num}
                    </span>
                    <span className="text-[#D9A8A7]/70 text-xs">·</span>
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

            {/* 하단 강조 문구 박스 */}
            <div className="p-5 md:p-6 rounded-2xl border border-[#B7788D]/25 bg-gradient-to-r from-[#2D0A1E]/30 to-[#140816]/40 backdrop-blur-sm space-y-2">
              <p className="font-elegant font-medium text-[15px] md:text-[16px] text-[#FAF7F2] leading-relaxed break-keep">
                &ldquo;명리학의 해석과 심리·무의식에 대한 자기 이해, 두뇌 습관 코칭의 관점을 함께 익혀온 경험을 바탕으로 설계했습니다.
              </p>
              <p className="font-elegant font-semibold text-[15px] md:text-[16px] text-[#D9A8A7] leading-relaxed break-keep">
                단편적인 운세 설명을 넘어, 당신의 연애를 여러 각도에서 이해할 수 있도록 돕는 심층 분석서입니다.&rdquo;
              </p>
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

          {/* 오른쪽 3:4 세로 이미지 (데스크톱 5단 / 모바일 순서 1: 상단 설명 직후 표시) */}
          <div className="lg:col-span-5 w-full flex justify-center items-center order-1 lg:order-2 mb-6 lg:mb-0">
            <div className="relative aspect-[3/4] w-full max-w-[360px] sm:max-w-[380px] lg:max-w-[400px] rounded-[28px] md:rounded-[36px] overflow-hidden border border-white/10 shadow-2xl bg-[#130917] group">
              <Image 
                src="/image/lovereport/p2.webp" 
                alt="사주와 심리로 사랑의 이면을 들여다보는 백도화 선천코드 연애 리포트" 
                fill
                sizes="(max-width: 640px) 360px, (max-width: 1024px) 380px, 400px"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]" 
              />
            </div>
          </div>

        </div>
      </Reveal>
    </section>
  )
}
