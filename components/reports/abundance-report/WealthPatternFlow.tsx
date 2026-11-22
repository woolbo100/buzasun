'use client'

import Image from 'next/image'
import Reveal from '@/components/Reveal'
import { ArrowRight, ArrowDown } from 'lucide-react'

// 16:9 통합 비주얼 이미지 설정 (풍요 리포트 전용 재물 지형도 비주얼)
const WEALTH_DYNAMICS_VISUAL = {
  src: '/image/abundance/wealth-structure-over-instinct.webp',
  alt: '선천코드 풍요 리포트 재물 구조와 지형도 16:9 비주얼',
  width: 1672,
  height: 941,
}

// 3가지 핵심 축 카드 데이터
const WEALTH_AXIS_STEPS = [
  {
    step: '01',
    tag: '01 / 선천적 설계',
    title: '타고난 재물 성향과 그릇',
    desc: '동양 명리학으로 읽는 고유한 오행의 기운과 나만의 일하는 방식, 남의 성공 공식이 아닌 내 그릇에 맞는 수입·축적의 기준을 확인합니다.',
  },
  {
    step: '02',
    tag: '02 / 무의식적 반응',
    title: '돈 앞에서 작동하는 방어기제',
    desc: '돈을 벌고 쓸 때 무의식적으로 튀어나오는 결핍감, 가격 책정의 두려움, 무작정 아끼거나 충동적으로 흘려보내는 심리적 패턴을 짚어냅니다.',
  },
  {
    step: '03',
    tag: '03 / 현실의 흐름',
    title: '반복되는 선택과 통장의 결과',
    desc: '준비만 하다 미루거나 목돈이 생기면 다시 제자리로 돌아가는 습관을 점검하고, 반복되는 지출·선택의 고리를 끊어낼 명확한 기준을 세웁니다.',
  },
]

export default function WealthPatternFlow() {
  return (
    <section className="mb-40 w-full max-w-[1280px] mx-auto">
      <Reveal className="w-full">
        {/* 1. 상단 제목 & 설명 문구 */}
        <div className="max-w-4xl mx-auto text-center mb-12 space-y-6">
          <div>
            <span className="block font-elegant text-[12pt] font-semibold tracking-[0.2em] text-[#8FB4A4] uppercase mb-4">
              WEALTH DYNAMICS
            </span>
            <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white mb-6 leading-[1.25] md:leading-[1.3] break-keep">
              기준은 본능이 아니라 구조입니다.<br />
              그러나 <span className="gradient-text-abundance">풍요는 선택</span>입니다.
            </h2>
          </div>

          {/* 설명 문구 */}
          <div className="space-y-4 text-[16px] md:text-[18px] text-[#EDE6DA]/90 font-light leading-relaxed break-keep max-w-3xl mx-auto">
            <p className="opacity-85">
              돈 앞에서 요동치는 감정과 조급함에서 한 걸음 물러나 내 재물 구조를 객관적으로 바라보는 순간,<br className="hidden sm:inline" />
              제자리를 맴돌던 결핍의 고리는 끊어집니다.
            </p>
            <p className="text-[#FAF7F2] font-medium">
              수많은 재테크 강의와 성공 법칙이 나에게 맞지 않았던 이유 역시,<br className="hidden sm:inline" />
              사주 속 재물 구조라는 지도 위에서 <span className="text-[#C6A477] font-semibold">내 선택을 내려다보지 못했기 때문</span>입니다.
            </p>
          </div>
        </div>

        {/* 2. 16:9 신규 비주얼 이미지 (자체 타이포그래피 포함으로 오버레이 텍스트 없음) */}
        <div className="w-full max-w-[1280px] mx-auto mb-14">
          <div className="w-full overflow-hidden rounded-[24px] md:rounded-[36px] border border-[#608F82]/30 shadow-2xl bg-[#0B1514] relative group">
            <div className="relative w-full aspect-[16/9]">
              <Image
                src={WEALTH_DYNAMICS_VISUAL.src}
                alt={WEALTH_DYNAMICS_VISUAL.alt}
                fill
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-contain object-center group-hover:scale-[1.01] transition-transform duration-700 ease-out"
                priority
              />
            </div>
          </div>
        </div>

        {/* 3. 이미지 아래 전환 문구 */}
        <div className="pt-2 pb-2 text-center max-w-3xl mx-auto space-y-4 mb-16 px-4">
          <p className="font-elegant font-bold text-[20px] sm:text-[22px] md:text-[24px] text-[#FAF7F2] leading-[1.6] break-keep">
            이제는 조급함과 막연한 기대로 흔들리는 당사자가 아니라,<br className="hidden sm:inline" />
            내 돈의 판을 내려다보는 <span className="gradient-text-abundance">깨어있는 관찰자</span>가 되십시오.
          </p>
          <p className="text-base sm:text-lg text-[#EDE6DA]/85 font-light leading-relaxed break-keep">
            타고난 부의 흐름조차 읽지 못했기에, 늘 기회의 문턱에서 제자리였던 것입니다.
          </p>
          <p className="text-sm md:text-base text-[#8FB4A4] font-medium tracking-wide break-keep pt-2">
            아래 3가지 핵심 축을 통해, 당신을 가두던 돈의 패턴을 투명하게 해부합니다.
          </p>
        </div>

        {/* 4. 3단 카드 (3개의 핵심 축) */}
        <div className="w-full max-w-[1280px] mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative items-stretch">
            {WEALTH_AXIS_STEPS.map((step, idx) => (
              <div key={idx} className="relative flex flex-col">
                <div className="gungjung-glass p-8 md:p-10 rounded-[28px] border border-white/10 hover:border-[#608F82]/50 bg-gradient-to-b from-[#0f241f]/35 via-transparent to-black/40 transition-all duration-300 h-full flex flex-col justify-between group shadow-lg hover:shadow-[0_10px_30px_rgba(96,143,130,0.15)]">
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-2xl font-elegant font-bold text-[#8FB4A4]">
                        {step.step}
                      </span>
                      <span className="text-[12px] md:text-[13px] px-3.5 py-1.5 rounded-lg bg-[#608F82]/15 border border-[#608F82]/30 text-[#8FB4A4] font-semibold tracking-wide">
                        {step.tag}
                      </span>
                    </div>
                    <h3 className="text-[20px] md:text-[24px] font-bold text-white mb-3 leading-snug break-keep group-hover:text-[#8FD3B6] transition-colors">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-[15px] md:text-[16px] text-[#EDE6DA]/85 font-light leading-[1.75] break-keep mt-5 pt-5 border-t border-white/10">
                    {step.desc}
                  </p>
                </div>

                {/* 연결 화살표 (데스크톱: 우측 / 모바일: 하단) */}
                {idx < WEALTH_AXIS_STEPS.length - 1 && (
                  <>
                    <div className="hidden md:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-[#0a0514] border border-[#608F82]/40 items-center justify-center text-[#8FB4A4] shadow-md">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                    <div className="flex md:hidden justify-center my-2 text-[#8FB4A4]">
                      <ArrowDown className="w-5 h-5" />
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 5. 하단 인용 박스 (각성 메시지 카드 전용 프리미엄 호버 효과) */}
        <div className="awakening-quote-card-wealth w-full max-w-[1280px] mx-auto p-8 md:p-12 rounded-[28px] bg-gradient-to-r from-[#0f241f]/30 via-[#152e27]/45 to-[#0f241f]/30 border border-[#608F82]/35 text-center shadow-xl backdrop-blur-md">
          <p className="relative z-10 text-lg sm:text-xl md:text-2xl font-elegant font-bold text-[#E6BE8A] leading-relaxed whitespace-pre-line drop-shadow-sm">
            &ldquo;명(命)은 바꾸는 것이 아니라 쓰는 것입니다.{"\n"}
            이제는 익숙한 본능대로 반응하지 말고, 내 기질과 구조에 맞게 써야 할 때입니다.&rdquo;
          </p>
        </div>
      </Reveal>
    </section>
  )
}
