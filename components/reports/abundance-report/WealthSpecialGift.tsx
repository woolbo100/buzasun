'use client'

import Reveal from '@/components/Reveal'

export default function WealthSpecialGift() {
  const fiveElements = [
    {
      hanja: '木',
      hangul: '목',
      name: '목 (木)',
      keyword: '성장과 확장',
      gradientClass: 'from-[#052e16]/30 via-[#10b981]/10 to-[#03150b]/40',
      borderClass: 'border-emerald-500/30',
      textClass: 'text-emerald-400',
    },
    {
      hanja: '火',
      hangul: '화',
      name: '화 (火)',
      keyword: '추진과 실행',
      gradientClass: 'from-[#450a0a]/30 via-[#f43f5e]/10 to-[#1f0505]/40',
      borderClass: 'border-rose-500/30',
      textClass: 'text-rose-400',
    },
    {
      hanja: '土',
      hangul: '토',
      name: '토 (土)',
      keyword: '축적과 안정',
      gradientClass: 'from-[#451a03]/30 via-[#f59e0b]/10 to-[#1f0b02]/40',
      borderClass: 'border-amber-500/30',
      textClass: 'text-amber-400',
    },
    {
      hanja: '金',
      hangul: '금',
      name: '금 (金)',
      keyword: '결실과 결단',
      gradientClass: 'from-[#1e293b]/30 via-[#94a3b8]/10 to-[#0f172a]/40',
      borderClass: 'border-slate-400/30',
      textClass: 'text-slate-300',
    },
    {
      hanja: '水',
      hangul: '수',
      name: '수 (水)',
      keyword: '유통과 지혜',
      gradientClass: 'from-[#172554]/30 via-[#3b82f6]/10 to-[#0b1329]/40',
      borderClass: 'border-blue-500/30',
      textClass: 'text-blue-400',
    }
  ]

  return (
    <div className="w-full max-w-7xl mx-auto mb-28 md:mb-36">
      <Reveal>
        <div className="gungjung-glass p-7 sm:p-8 md:p-9 lg:p-10 rounded-[28px] md:rounded-[36px] border border-[#608F82]/35 bg-gradient-to-r from-[#142B24]/75 via-[#0B1514]/70 to-[#142B24]/75 shadow-xl relative overflow-hidden">
          {/* 은은한 배경 오라 */}
          <div className="absolute top-0 right-1/4 w-72 h-72 bg-[#608F82]/15 rounded-full blur-[80px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center relative z-10">
            {/* 좌측: 텍스트 안내 영역 */}
            <div className="lg:col-span-7 space-y-3 md:space-y-3.5 text-left">
              <div>
                <span className="font-elegant text-[11px] sm:text-xs font-semibold tracking-[0.22em] text-[#8FB4A4] uppercase block">
                  THE SPECIAL GIFT
                </span>
              </div>

              {/* 메인 제목 */}
              <h3 className="text-[21px] sm:text-2xl md:text-[27px] font-elegant font-bold text-white leading-[1.3] break-keep">
                나의 풍요 흐름을 되새기는<br />
                <span className="text-[#E6BE8A]">나만의 오행 디지털 리추얼 아트 혜택</span>
              </h3>

              {/* 설명문 */}
              <p className="text-[14.5px] sm:text-[15.5px] md:text-[16px] text-[#EDE6DA]/85 font-light leading-relaxed break-keep">
                오행의 상징과 고유한 색채를 통해, 타고난 기질과 현실에서 발휘해야 할 풍요의 방향을 시각적으로 되새기는 특별한 디지털 혜택입니다. 일상의 다짐과 배경화면으로 활용하여 흔들리지 않는 재정 기준을 세워보세요.
              </p>

              {/* 하단 안내 */}
              <div className="pt-2 border-t border-white/10 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                <p className="text-[12px] sm:text-[13px] leading-[1.5] text-[#8FB4A4]/90 font-medium tracking-tight">
                  ※ 개인 선천코드 분석 결과를 바탕으로 나에게 필요한 균형 에너지를 담은 맞춤 디지털 카드입니다.
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
                나만의 재물 흐름을 보완하는 오행 에너지 카드
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  )
}
