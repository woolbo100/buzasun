'use client'

import Reveal from '@/components/Reveal'

export default function FiveElementsSpecialGift() {
  const fiveElements = [
    {
      hanja: '木',
      hangul: '목',
      name: '목 (木)',
      keyword: '성장과 회복',
      gradientClass: 'from-[#052e16]/30 via-[#10b981]/10 to-[#03150b]/40',
      borderClass: 'border-emerald-500/30',
      textClass: 'text-emerald-400',
      tagColor: 'text-emerald-300 bg-emerald-950/60'
    },
    {
      hanja: '火',
      hangul: '화',
      name: '화 (火)',
      keyword: '매력과 표현',
      gradientClass: 'from-[#450a0a]/30 via-[#f43f5e]/10 to-[#1f0505]/40',
      borderClass: 'border-rose-500/30',
      textClass: 'text-rose-400',
      tagColor: 'text-rose-300 bg-rose-950/60'
    },
    {
      hanja: '土',
      hangul: '토',
      name: '토 (土)',
      keyword: '안정과 중심',
      gradientClass: 'from-[#451a03]/30 via-[#f59e0b]/10 to-[#1f0b02]/40',
      borderClass: 'border-amber-500/30',
      textClass: 'text-amber-400',
      tagColor: 'text-amber-300 bg-amber-950/60'
    },
    {
      hanja: '金',
      hangul: '금',
      name: '금 (金)',
      keyword: '명료와 보호',
      gradientClass: 'from-[#1e293b]/30 via-[#94a3b8]/10 to-[#0f172a]/40',
      borderClass: 'border-slate-400/30',
      textClass: 'text-slate-300',
      tagColor: 'text-slate-300 bg-slate-800/60'
    },
    {
      hanja: '水',
      hangul: '수',
      name: '수 (水)',
      keyword: '치유와 직관',
      gradientClass: 'from-[#172554]/30 via-[#3b82f6]/10 to-[#0b1329]/40',
      borderClass: 'border-blue-500/30',
      textClass: 'text-blue-400',
      tagColor: 'text-blue-300 bg-blue-950/60'
    }
  ]

  return (
    <section className="mb-20 md:mb-24 w-full max-w-[1280px] mx-auto px-4">
      <Reveal>
        <div className="gungjung-glass p-7 sm:p-9 md:p-11 lg:p-12 rounded-[32px] md:rounded-[38px] border border-[#B7788D]/30 bg-gradient-to-b from-[#1C0D1E]/75 via-[#130816]/70 to-[#0A0514]/85 shadow-2xl relative overflow-hidden">
          {/* 은은한 배경 오라 */}
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#B7788D]/10 rounded-full blur-[90px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            {/* 좌측: 텍스트 안내 영역 (12단 중 7단 = 약 58%) */}
            <div className="lg:col-span-7 space-y-4 text-left">
              {/* 영문 라벨 & 혜택 배지 */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-elegant text-xs font-semibold tracking-[0.25em] text-[#D9A8A7] uppercase">
                  SPECIAL GIFT
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#B7788D]/15 border border-[#B7788D]/35 text-[#D9A8A7]">
                  연애 리포트 구매 시 무료 제공
                </span>
              </div>

              {/* 메인 제목 */}
              <h3 className="text-2xl md:text-[32px] font-elegant font-bold text-white leading-[1.3] break-keep">
                당신의 선천코드에 맞춘<br />
                <span className="text-[#D9A8A7]">오행 에너지 카드 1종 증정</span>
              </h3>

              {/* 메인 설명문 */}
              <p className="text-[15px] md:text-[17px] text-[#EDE6DA]/90 font-light leading-relaxed break-keep">
                목(木)·화(火)·토(土)·금(金)·수(水).<br />
                다섯 가지 오행 카드 중 개인별 선천코드 분석 결과에 따라 선정된{' '}
                <span className="text-[#D9A8A7] font-semibold">디지털 에너지 카드 1종</span>을 연애 리포트와 함께 제공합니다.
              </p>

              {/* 활용 안내 */}
              <p className="text-xs md:text-sm text-[#EDE6DA]/70 font-light leading-relaxed break-keep pt-1">
                휴대폰 배경화면, 잠금화면, 개인 노트 표지 등 일상 속에서 나를 돌아보는 감성 이미지로 활용할 수 있습니다.
              </p>

              {/* 하단 유의 문구 */}
              <div className="pt-3 border-t border-white/10">
                <p className="text-[11px] md:text-xs text-white/40 font-light leading-relaxed break-keep">
                  ※ 오행 에너지 카드는 특정 결과나 운세의 변화를 보장하는 부적이 아니라, 자기 이해와 감성 리추얼을 위한 디지털 이미지입니다.
                </p>
              </div>
            </div>

            {/* 우측: 5종 미니 자개 카드 프리뷰 (12단 중 5단 = 약 42%) */}
            <div className="lg:col-span-5 w-full flex flex-col items-center">
              <div className="w-full grid grid-cols-5 gap-2 sm:gap-3">
                {fiveElements.map((card, idx) => (
                  <div
                    key={idx}
                    className={`rounded-2xl border ${card.borderClass} bg-gradient-to-b ${card.gradientClass} p-2 sm:p-2.5 flex flex-col items-center justify-between text-center relative overflow-hidden group shadow-lg transition-transform duration-300 hover:-translate-y-1`}
                  >
                    {/* 카드 테두리 장식선 */}
                    <div className="absolute inset-1 border border-white/5 rounded-xl pointer-events-none"></div>

                    {/* 카드 상단 한자 미니 액자 */}
                    <div className="w-full aspect-[3/4] mb-2 rounded-lg bg-black/40 border border-white/10 flex items-center justify-center relative shadow-inner">
                      {/* 네 모서리 자개 장식 */}
                      <div className="absolute top-1 left-1 w-1 h-1 border-t border-l border-white/30"></div>
                      <div className="absolute top-1 right-1 w-1 h-1 border-t border-r border-white/30"></div>
                      <div className="absolute bottom-1 left-1 w-1 h-1 border-b border-l border-white/30"></div>
                      <div className="absolute bottom-1 right-1 w-1 h-1 border-b border-r border-white/30"></div>

                      <span className={`text-xl sm:text-2xl font-elegant font-bold ${card.textClass}`}>
                        {card.hanja}
                      </span>
                    </div>

                    {/* 카드 하단 명칭 라벨 */}
                    <div className="w-full">
                      <span className="block text-[11px] sm:text-xs font-bold text-white/90">
                        {card.hangul}
                      </span>
                      <span className="block text-[9px] text-[#EDE6DA]/50 truncate mt-0.5">
                        {card.keyword}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* 하단 캡션 안내 */}
              <span className="text-[11px] text-[#D9A8A7]/70 font-mono tracking-wide mt-3 text-center block">
                5종 중 선천코드 맞춤 1종 증정 (디지털 이미지)
              </span>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
