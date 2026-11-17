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
    <div className="w-full max-w-7xl mx-auto mt-0 mb-32 md:mb-40">
      <Reveal>
        <div className="gungjung-glass p-7 sm:p-8 md:p-9 lg:p-10 rounded-[28px] md:rounded-[36px] border border-[#B7788D]/25 bg-gradient-to-r from-[#1C0D1E]/75 via-[#130816]/70 to-[#1C0D1E]/75 shadow-xl relative overflow-hidden">
          {/* 은은한 배경 오라 */}
          <div className="absolute top-0 right-1/4 w-72 h-72 bg-[#B7788D]/10 rounded-full blur-[80px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center relative z-10">
            {/* 좌측: 텍스트 안내 영역 (12단 중 7단 = 약 58~60%) */}
            <div className="lg:col-span-7 space-y-3 md:space-y-3.5 text-left">
              {/* 작은 영문 라벨 */}
              <div>
                <span className="font-elegant text-[11px] sm:text-xs font-semibold tracking-[0.22em] text-[#D9A8A7] uppercase block">
                  PERSONALIZED SPECIAL GIFT
                </span>
              </div>

              {/* 메인 제목 (2줄) */}
              <h3 className="text-[21px] sm:text-2xl md:text-[27px] font-elegant font-bold text-white leading-[1.3] break-keep">
                나의 선천코드에 맞춘<br />
                <span className="text-[#D9A8A7]">오행 에너지 카드 2종 증정</span>
              </h3>

              {/* 간결한 설명문 */}
              <p className="text-[14.5px] sm:text-[15.5px] md:text-[16px] text-[#EDE6DA]/85 font-light leading-relaxed break-keep">
                개인 1:1 맞춤형 선천코드 분석 결과를 바탕으로 나에게 부족한 오행을 보완해주는<br />
                나의 오행 아트 카드와 나의 오행 수호자 카드 2종을 함께 제공합니다.
              </p>

              {/* 하단 작은 안내 문구 */}
              <div className="pt-2 border-t border-white/10 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                <p className="text-[11.5px] sm:text-xs text-[#D9A8A7]/80 font-medium tracking-tight">
                  ※ 5종 중 개인별 2종 제공 · 디지털 이미지
                </p>
                <span className="hidden sm:inline text-white/20">|</span>
                <p className="text-[11px] text-white/40 font-light">
                  자기 이해와 감성 리추얼을 돕는 부가 혜택입니다.
                </p>
              </div>
            </div>

            {/* 우측: 5종 미니 오행 카드 프리뷰 (12단 중 5단 = 약 40~42%) */}
            <div className="lg:col-span-5 w-full flex flex-col items-center">
              <div className="w-full grid grid-cols-5 gap-1.5 sm:gap-2.5">
                {fiveElements.map((card, idx) => (
                  <div
                    key={idx}
                    className={`rounded-xl sm:rounded-2xl border ${card.borderClass} bg-gradient-to-b ${card.gradientClass} p-1.5 sm:p-2 flex flex-col items-center justify-between text-center relative overflow-hidden group shadow-md transition-transform duration-300 hover:-translate-y-1`}
                  >
                    {/* 카드 테두리 장식선 */}
                    <div className="absolute inset-0.5 sm:inset-1 border border-white/5 rounded-lg sm:rounded-xl pointer-events-none"></div>

                    {/* 카드 상단 한자 미니 액자 */}
                    <div className="w-full aspect-[3/4] mb-1.5 rounded-md sm:rounded-lg bg-black/40 border border-white/10 flex items-center justify-center relative shadow-inner">
                      {/* 네 모서리 자개 장식 */}
                      <div className="absolute top-0.5 left-0.5 sm:top-1 sm:left-1 w-1 h-1 border-t border-l border-white/30"></div>
                      <div className="absolute top-0.5 right-0.5 sm:top-1 sm:right-1 w-1 h-1 border-t border-r border-white/30"></div>
                      <div className="absolute bottom-0.5 left-0.5 sm:bottom-1 sm:left-1 w-1 h-1 border-b border-l border-white/30"></div>
                      <div className="absolute bottom-0.5 right-0.5 sm:bottom-1 sm:right-1 w-1 h-1 border-b border-r border-white/30"></div>

                      <span className={`text-lg sm:text-xl md:text-2xl font-elegant font-bold ${card.textClass}`}>
                        {card.hanja}
                      </span>
                    </div>

                    {/* 카드 하단 명칭 라벨 */}
                    <div className="w-full">
                      <span className="block text-[10.5px] sm:text-xs font-bold text-white/90">
                        {card.hangul}
                      </span>
                      <span className="block text-[8.5px] sm:text-[9px] text-[#EDE6DA]/50 truncate mt-0.5">
                        {card.keyword}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  )
}
