'use client'

import Reveal from '@/components/Reveal'

export default function CompatibilitySpecialGift() {
  const fiveElements = [
    {
      hanja: '木',
      hangul: '목',
      name: '목 (木)',
      keyword: '성장과 유연함',
      gradientClass: 'from-[#052e16]/30 via-[#10b981]/10 to-[#03150b]/40',
      borderClass: 'border-emerald-500/30',
      textClass: 'text-emerald-400',
    },
    {
      hanja: '火',
      hangul: '화',
      name: '화 (火)',
      keyword: '열정과 온기',
      gradientClass: 'from-[#450a0a]/30 via-[#f43f5e]/10 to-[#1f0505]/40',
      borderClass: 'border-rose-500/30',
      textClass: 'text-rose-400',
    },
    {
      hanja: '土',
      hangul: '토',
      name: '토 (土)',
      keyword: '신뢰와 포용',
      gradientClass: 'from-[#451a03]/30 via-[#f59e0b]/10 to-[#1f0b02]/40',
      borderClass: 'border-amber-500/30',
      textClass: 'text-amber-400',
    },
    {
      hanja: '金',
      hangul: '금',
      name: '금 (金)',
      keyword: '명료함과 의리',
      gradientClass: 'from-[#1e293b]/30 via-[#94a3b8]/10 to-[#0f172a]/40',
      borderClass: 'border-slate-400/30',
      textClass: 'text-slate-300',
    },
    {
      hanja: '水',
      hangul: '수',
      name: '수 (水)',
      keyword: '지혜와 수용',
      gradientClass: 'from-[#172554]/30 via-[#3b82f6]/10 to-[#0b1329]/40',
      borderClass: 'border-blue-500/30',
      textClass: 'text-blue-400',
    }
  ]

  return (
    <div className="w-full max-w-7xl mx-auto mb-28 md:mb-36">
      <Reveal>
        <div className="gungjung-glass p-7 sm:p-8 md:p-9 lg:p-10 rounded-[28px] md:rounded-[36px] border border-[#B78C86]/30 bg-gradient-to-r from-[#4A1F2D]/35 via-[#3A1623]/30 to-[#4A1F2D]/35 shadow-xl relative overflow-hidden backdrop-blur-md">
          {/* 은은한 배경 오라 */}
          <div className="absolute top-0 right-1/4 w-72 h-72 bg-[#5A2638]/20 rounded-full blur-[80px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center relative z-10">
            {/* 좌측: 텍스트 안내 영역 */}
            <div className="lg:col-span-7 space-y-3 md:space-y-3.5 text-left">
              <div>
                <span className="font-elegant text-[11px] sm:text-xs font-semibold tracking-[0.22em] text-[#D8BB94] uppercase block">
                  THE SPECIAL GIFT
                </span>
              </div>

              {/* 메인 제목 */}
              <h3 className="text-[21px] sm:text-2xl md:text-[27px] font-elegant font-bold text-white leading-[1.3] break-keep">
                두 사람의 관계를 이해하는<br />
                <span className="text-[#D8BB94]">두 사람 맞춤 오행 디지털 카드 증정</span>
              </h3>

              {/* 설명문 */}
              <p className="text-[14.5px] sm:text-[15.5px] md:text-[16px] text-[#EDE6DA]/85 font-light leading-relaxed break-keep">
                궁합 리포트와 함께 제공되는 오행 디지털 카드를 통해, 두 사람의 타고난 기질과 상호 보완 에너지를 시각적으로 되새겨볼 수 있습니다. 서로에게 필요한 에너지의 균형을 맞추는 작은 단서가 되어 드립니다.
              </p>

              {/* 하단 안내 */}
              <div className="pt-2 border-t border-white/10 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                <p className="text-[12px] sm:text-[13px] leading-[1.5] text-[#D8BB94]/90 font-medium tracking-tight">
                  ※ 두 분의 선천코드 분석 결과를 바탕으로 맞춤 선정되는 1:1 디지털 혜택입니다.
                </p>
              </div>
            </div>

            {/* 우측: 오행 5대 카드 미니 그리드 프리뷰 */}
            <div className="lg:col-span-5 w-full">
              <div className="grid grid-cols-5 gap-2 sm:gap-2.5">
                {fiveElements.map((elem, idx) => (
                  <div 
                    key={idx}
                    className={`p-2.5 sm:p-3 rounded-xl border ${elem.borderClass} bg-gradient-to-b ${elem.gradientClass} flex flex-col items-center justify-center text-center transition-transform hover:-translate-y-1 shadow-sm`}
                  >
                    <span className="text-xl sm:text-2xl font-elegant font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] mb-1">
                      {elem.hanja}
                    </span>
                    <span className={`text-[10px] sm:text-[11px] font-medium ${elem.textClass} whitespace-nowrap`}>
                      {elem.hangul}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-center text-[11px] text-[#EDE6DA]/60 mt-2.5 font-light">
                목·화·토·금·수 상호작용 에너지 카드
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  )
}
