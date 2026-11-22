'use client'

import Reveal from '@/components/Reveal'

export default function WealthRealReasonCard() {
  return (
    <section className="mb-20 md:mb-28 w-full max-w-[1280px] mx-auto">
      <Reveal className="w-full">
        <div className="gungjung-glass p-8 sm:p-10 md:p-14 rounded-[32px] md:rounded-[40px] border border-[#608F82]/35 bg-gradient-to-b from-[#0f241f]/40 via-[#152e27]/25 to-[#0a0514]/45 text-center relative overflow-hidden shadow-2xl backdrop-blur-md">
          {/* 은은한 배경 광채 */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#608F82]/15 rounded-full blur-[90px] pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-[#C6A477]/10 rounded-full blur-[90px] pointer-events-none" />

          <div className="max-w-3xl mx-auto relative z-10 space-y-7 md:space-y-8">
            {/* 작은 라벨 */}
            <div>
              <span className="inline-block font-elegant text-[11pt] md:text-[12pt] font-semibold tracking-[0.2em] text-[#8FB4A4] uppercase px-4 py-1.5 rounded-full bg-[#608F82]/15 border border-[#608F82]/30">
                THE REAL REASON · 풍요의 진짜 구조
              </span>
            </div>

            {/* 메인 제목 */}
            <h3 className="text-xl sm:text-2xl md:text-[30px] lg:text-[32px] font-elegant font-bold text-white leading-[1.35] break-keep">
              &ldquo;남들보다 적게 벌어서가 아닙니다.<br className="hidden sm:inline" />{' '}
              <span className="gradient-text-abundance">돈 앞에서 반복되는 나의 패턴을 읽어야 합니다.&rdquo;</span>
            </h3>

            {/* 본문 1 */}
            <p className="text-[16px] sm:text-[17px] md:text-[18px] text-[#EDE6DA]/85 font-light leading-[1.65] break-keep">
              재테크 지식이 부족해서만은 아닙니다.<br className="hidden sm:inline" />
              돈 앞에서 반복되는 판단과 감정, 관계의 습관이<br className="hidden sm:inline" />
              나의 선택에 영향을 미치고 있을 수 있습니다.
            </p>

            {/* 본문 2 */}
            <p className="text-[16px] sm:text-[17px] md:text-[18px] text-[#EDE6DA]/85 font-light leading-[1.65] break-keep">
              단순히 운세가 좋다는 말이나<br className="hidden sm:inline" />
              뜬구름 잡는 확언은 현실의 통장을 채워주지 않습니다.
            </p>

            {/* 핵심 강조 문구 (시각적 계층 부여) */}
            <div className="py-5 px-6 md:px-8 rounded-2xl bg-black/40 border border-[#608F82]/30 shadow-inner">
              <p className="text-[17px] sm:text-[19px] md:text-[21px] text-[#EDE6DA] font-elegant font-bold leading-[1.5] break-keep">
                &ldquo;선천코드 풍요 리포트는 당신이 돈을 벌고,<br className="hidden sm:inline" />{' '}
                쓰고, 지키는 방식에 어떤 반복 패턴이 있는지<br className="hidden sm:inline" />{' '}
                <span className="text-[#C6A477]">입체적으로 탐색합니다.&rdquo;</span>
              </p>
            </div>

            {/* 본문 3 */}
            <p className="text-[16px] sm:text-[17px] md:text-[18px] text-[#EDE6DA]/85 font-light leading-[1.65] break-keep">
              자신의 선천 기질과 현실적인 조건을 함께 살펴<br className="hidden sm:inline" />
              나에게 맞는 수입 모델의 가능성을 발견하고,<br className="hidden sm:inline" />
              돈 앞에서 흔들리지 않을 판단 기준과<br className="hidden sm:inline" />
              구체적인 실천 방향을 제안합니다.
            </p>

            {/* 하단 강조 문구 (구분선 아래 배치) */}
            <div className="pt-7 md:pt-8 border-t border-[#608F82]/30">
              <p className="text-[18px] sm:text-[21px] md:text-[24px] font-elegant font-bold text-[#C6A477] leading-snug break-keep">
                &ldquo;더 많이 버는 방법을 찾기 전에,<br className="hidden sm:inline" />{' '}
                왜 남지 않는지부터 읽어보세요.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
