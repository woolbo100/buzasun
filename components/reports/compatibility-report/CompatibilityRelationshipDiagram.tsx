'use client'

import Image from 'next/image'
import Reveal from '@/components/Reveal'
import { compatibilityDiagramData } from './data'
import { ArrowRight, ArrowDown } from 'lucide-react'

// 16:9 가로형 비주얼 이미지 설정
// (향후 compatibility-interaction-dynamics.webp 이미지가 public/image/compatibility/에 추가되면 isReady를 true로 설정하거나 src를 유지하면 됩니다)
const INTERACTION_DYNAMICS_VISUAL = {
  src: '/image/compatibility/compatibility-interaction-dynamics.webp',
  alt: '백도화 프리미엄 궁합 리포트 상호작용 역학 16:9 비주얼',
  width: 1672,
  height: 941,
  // 실제 파일 준비 시 true로 전환하여 활성화 (미제작 상태에서 깨진 이미지 표시 방지)
  isReady: false,
}

export default function CompatibilityRelationshipDiagram() {
  return (
    <section className="mb-40 w-full max-w-[1280px] mx-auto">
      <Reveal className="w-full">
        {/* 1. 상단 라벨, 제목 & 확장된 설명 문구 (풍요 리포트 WEALTH DYNAMICS 규격과 동일) */}
        <div className="max-w-4xl mx-auto text-center mb-12 space-y-6">
          <div>
            <span className="block font-elegant text-[12pt] font-semibold tracking-[0.2em] text-[#D8BB94] uppercase mb-4">
              INTERACTION DYNAMICS
            </span>
            <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white mb-6 leading-[1.25] md:leading-[1.3] break-keep">
              우리는 서로 다른 두 개의 세계가 만나<br />
              <span className="gradient-text-reunion">만들어진 관계입니다.</span>
            </h2>
          </div>

          {/* 2문단 설명 문구 */}
          <div className="space-y-4 text-[16px] md:text-[18px] text-[#EDE6DA]/90 font-light leading-relaxed break-keep max-w-3xl mx-auto">
            {/* 일반 설명 문단 */}
            <p className="opacity-85">
              사랑이 깊어지는 순간도, 갈등이 반복되는 순간도<br className="hidden sm:inline" />
              두 사람의 기질과 감정이 서로에게 반응하는 방식에서 시작됩니다.
            </p>
            {/* 하단 강조 문단 */}
            <p className="text-[#FAF7F2] font-medium">
              같은 사랑을 바라보면서도 서로 다른 방식으로 표현했던 이유,<br className="hidden sm:inline" />
              두 사람의 선천코드가 만들어 내는{' '}
              <span className="text-[#D8BB94] font-semibold">관계의 구조를 알지 못했기 때문일 수 있습니다.</span>
            </p>
          </div>
        </div>

        {/* 2. [신규] 16:9 와이드 가로형 이미지 영역 (풍요 리포트와 동일한 16:9 규격 및 라운드 적용) */}
        <div className="w-full max-w-[1280px] mx-auto mb-14">
          <div className="w-full overflow-hidden rounded-[24px] md:rounded-[36px] border border-[#B78C86]/30 shadow-2xl bg-[#14080E] relative group">
            <div className="relative w-full aspect-[16/9]">
              {INTERACTION_DYNAMICS_VISUAL.isReady ? (
                <Image
                  src={INTERACTION_DYNAMICS_VISUAL.src}
                  alt={INTERACTION_DYNAMICS_VISUAL.alt}
                  fill
                  sizes="(max-width: 1280px) 100vw, 1280px"
                  className="object-contain object-center group-hover:scale-[1.01] transition-transform duration-700 ease-out"
                  priority
                />
              ) : (
                /* 이미지 파일 준비 중일 때 조화로운 궁중 버건디 프레임 (깨진 엑스박스 이미지 방지) */
                <div 
                  className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#2D121C]/80 via-[#1F0A14]/90 to-[#14080E]"
                  aria-label="궁합 관계 역학 이미지 영역"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#5A2638]/25 via-transparent to-transparent pointer-events-none" />
                  <div className="w-16 h-16 rounded-full border border-[#D8BB94]/20 flex items-center justify-center opacity-40">
                    <div className="w-8 h-8 rounded-full bg-[#D8BB94]/10" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 3. [신규] 이미지 하단 각성 메시지 3단 (풍요 리포트 WEALTH DYNAMICS 스타일 규격) */}
        <div className="pt-2 pb-2 text-center max-w-3xl mx-auto space-y-4 md:space-y-5 mb-14 md:mb-16 px-4">
          {/* 첫 번째 — 메인 각성 메시지 */}
          <p className="font-elegant font-bold text-[20px] sm:text-[22px] md:text-[24px] text-[#FAF7F2] leading-[1.6] break-keep">
            이제는 누가 더 사랑하는지 확인하려 애쓰기보다,<br className="hidden sm:inline" />
            두 사람이 <span className="gradient-text-reunion">왜 다르게 반응하는지 이해하는 사람</span>이 되십시오.
          </p>

          {/* 두 번째 — 원인 설명 */}
          <p className="text-base sm:text-lg text-[#EDE6DA]/85 font-light leading-relaxed break-keep">
            서로의 선천적 기질과 감정의 흐름을 알지 못했기에, 같은 갈등 앞에서 반복해서 상처받았을 수 있습니다.
          </p>

          {/* 세 번째 — 카드 연결 문구 */}
          <p className="text-sm md:text-base text-[#D8BB94] font-semibold tracking-wide break-keep pt-2">
            아래 3가지 핵심 관계 축을 통해, 두 사람 사이에 반복되는 사랑의 패턴을 선명하게 읽어냅니다.
          </p>
        </div>

        {/* 4. 기존 콘텐츠: 4단계 도식 컨테이너 */}
        <div className="w-full max-w-[1280px] mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative items-stretch">
            {compatibilityDiagramData.steps.map((step, idx) => (
              <div key={idx} className="relative flex flex-col">
                <div className="gungjung-glass p-7 md:p-8 rounded-[28px] border border-[#B78C86]/25 hover:border-[#C7A97A]/50 bg-gradient-to-b from-[#4A1F2D]/35 to-[#3A1623]/35 transition-all duration-300 h-full flex flex-col justify-between group backdrop-blur-md">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-elegant font-bold text-[#D8BB94]">
                        {step.step}
                      </span>
                      <span className="text-[11px] px-2.5 py-1 rounded-md bg-[#5A2638]/40 border border-[#B78C86]/35 text-[#D8BB94] font-medium">
                        {step.tag}
                      </span>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-white mb-3 break-keep">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-xs md:text-sm text-[#EDE6DA]/70 font-light leading-relaxed break-keep mt-4 pt-4 border-t border-white/5">
                    {step.desc}
                  </p>
                </div>

                {/* 연결 화살표 (데스크톱: 우측 / 모바일: 하단) */}
                {idx < compatibilityDiagramData.steps.length - 1 && (
                  <>
                    <div className="hidden lg:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-[#240C18] border border-[#B78C86]/40 items-center justify-center text-[#D8BB94] shadow-md">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                    <div className="flex lg:hidden justify-center my-2 text-[#D8BB94]">
                      <ArrowDown className="w-5 h-5" />
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 5. 기존 콘텐츠: 핵심 인용 강조 배너 (풍요 리포트 규격 동일 호버 효과 적용) */}
        <div className="awakening-quote-card-compatibility w-full max-w-[1280px] mx-auto p-8 md:p-12 rounded-[28px] bg-gradient-to-r from-[#4A1F2D]/35 via-[#5A2638]/25 to-[#4A1F2D]/35 border border-[#B78C86]/35 text-center shadow-xl backdrop-blur-md">
          <p className="relative z-10 text-lg md:text-2xl font-elegant font-bold text-[#C19B83] leading-relaxed whitespace-pre-line drop-shadow-sm">
            &ldquo;{compatibilityDiagramData.quote}&rdquo;
          </p>
        </div>
      </Reveal>
    </section>
  )
}
