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
    <div className="w-full max-w-[1280px] mx-auto mt-0 mb-28 md:mb-36">
      <Reveal>
        <div className="gungjung-glass p-7 sm:p-8 md:p-9 lg:p-10 rounded-[28px] md:rounded-[36px] border border-[#B78C86]/35 bg-gradient-to-r from-[#4A1F2D]/55 via-[#3A1623]/45 to-[#4A1F2D]/55 shadow-xl relative overflow-hidden backdrop-blur-md">
          {/* 은은한 배경 오라 */}
          <div className="absolute top-0 right-1/4 w-72 h-72 bg-[#5A2638]/25 rounded-full blur-[80px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center relative z-10">
            {/* 좌측: 텍스트 안내 영역 (12단 중 7단) - 풍요 리포트 규격 100% 일치 */}
            <div className="lg:col-span-7 space-y-3 md:space-y-3.5 text-left">
              {/* 작은 영문 라벨 */}
              <div>
                <span className="font-elegant text-[11px] sm:text-xs font-semibold tracking-[0.22em] text-[#D8BB94] uppercase block">
                  PERSONALIZED SPECIAL GIFT
                </span>
              </div>

              {/* 메인 제목 (2줄) */}
              <h3 className="text-[21px] sm:text-2xl md:text-[27px] font-elegant font-bold text-white leading-[1.3] break-keep">
                두 사람의 선천코드를 기억하는<br />
                <span className="text-[#D8BB94]">오행 아트카드 1장 + 오행 수호자 카드 1장</span>
              </h3>

              {/* 간결한 설명문 (풍요 리포트 규격 동일) */}
              <p className="text-[14.5px] sm:text-[15.5px] md:text-[16px] text-[#EDE6DA]/85 font-light leading-relaxed break-keep">
                개인 1:1 맞춤형 선천코드 분석 결과를 바탕으로 나의 오행을 상징하는<br className="hidden sm:inline" />{' '}
                아트카드 1장과 오행 수호자 카드 1장을 함께 제공합니다.
              </p>

              {/* 하단 구분선 및 안내 문구 (좌우 분리 구조) */}
              <div className="pt-2.5 border-t border-white/10 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                <p className="text-[12px] sm:text-[13px] leading-[1.5] text-[#D8BB94] font-medium tracking-tight">
                  ※ 개인별 선정된 동일 오행의 아트카드와 수호자 카드를 각각 1장씩 디지털 이미지로 제공합니다.
                </p>
                <span className="hidden sm:inline text-white/20">|</span>
                <p className="text-[11px] text-[#EDE6DA]/50 font-light">
                  자기 이해와 관계의 조화를 되새기는 상징적 감성 이미지입니다.
                </p>
              </div>
            </div>

            {/* 우측: 5종 미니 오행 카드 프리뷰 (12단 중 5단) */}
            <div className="lg:col-span-5 w-full flex flex-col items-center">
              <div className="w-full grid grid-cols-5 gap-1.5 sm:gap-2.5">
                {fiveElements.map((card, idx) => (
                  <div
                    key={idx}
                    className={`rounded-xl sm:rounded-2xl border ${card.borderClass} bg-gradient-to-b ${card.gradientClass} p-1.5 sm:p-2 flex flex-col items-center justify-between text-center relative overflow-hidden group shadow-md transition-transform duration-300 hover:-translate-y-1`}
                  >
                    {/* 카드 테두리 장식선 */}
                    <div className="absolute inset-0.5 sm:inset-1 border border-white/5 rounded-lg sm:rounded-xl pointer-events-none"></div>

                    {/* 카드 상단 한자 미니 액자 (3:4 비율) */}
                    <div className="w-full aspect-[3/4] mb-1.5 rounded-md sm:rounded-lg bg-black/40 border border-white/10 flex items-center justify-center relative shadow-inner">
                      {/* 네 모서리 자개 장식 */}
                      <div className="absolute top-0.5 left-0.5 sm:top-1 sm:left-1 w-1 h-1 border-t border-l border-[#B78C86]/50"></div>
                      <div className="absolute top-0.5 right-0.5 sm:top-1 sm:right-1 w-1 h-1 border-t border-r border-[#B78C86]/50"></div>
                      <div className="absolute bottom-0.5 left-0.5 sm:bottom-1 sm:left-1 w-1 h-1 border-b border-l border-[#B78C86]/50"></div>
                      <div className="absolute bottom-0.5 right-0.5 sm:bottom-1 sm:right-1 w-1 h-1 border-b border-r border-[#B78C86]/50"></div>

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
