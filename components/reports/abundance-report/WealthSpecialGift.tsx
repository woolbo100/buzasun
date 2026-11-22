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
    <div className="w-full max-w-7xl mx-auto mt-0 mb-32 md:mb-40">
      <Reveal>
        <div className="gungjung-glass p-7 sm:p-8 md:p-9 lg:p-10 rounded-[28px] md:rounded-[36px] border border-[#608F82]/35 bg-gradient-to-r from-[#142B24]/80 via-[#0B1514]/75 to-[#142B24]/80 shadow-xl relative overflow-hidden backdrop-blur-md">
          {/* 은은한 배경 오라 */}
          <div className="absolute top-0 right-1/4 w-72 h-72 bg-[#608F82]/20 rounded-full blur-[80px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center relative z-10">
            {/* 좌측: 텍스트 안내 영역 (12단 중 7단) */}
            <div className="lg:col-span-7 space-y-3.5 md:space-y-4 text-left">
              {/* 작은 영문 라벨 */}
              <div>
                <span className="font-elegant text-[11px] sm:text-xs font-semibold tracking-[0.22em] text-[#8FB4A4] uppercase block">
                  PERSONALIZED SPECIAL GIFT
                </span>
              </div>

              {/* 메인 제목 */}
              <h3 className="text-[21px] sm:text-2xl md:text-[27px] font-elegant font-bold text-white leading-[1.3] break-keep">
                나의 오행으로 만나는 풍요의 상징<br />
                <span className="text-[#E6BE8A]">나의 오행 아트카드 1장 + 나의 오행 수호자 카드 1장</span>
              </h3>

              {/* 설명문 */}
              <p className="text-[14.5px] sm:text-[15.5px] md:text-[16px] text-[#EDE6DA]/85 font-light leading-relaxed break-keep">
                나의 기질과 선택을 이해하는 여정에, 스스로의 방향을 되새길 수 있도록<br className="hidden sm:inline" />{' '}
                개인별 오행 디지털 카드 2종을 함께 제공합니다.
              </p>

              {/* 증정품 2종 구성 시각화 박스 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-[#1A3830]/50 border border-[#608F82]/35 backdrop-blur-sm">
                  <span className="w-5 h-5 rounded-full bg-[#E6BE8A]/20 border border-[#E6BE8A]/40 flex items-center justify-center text-[11px] font-bold text-[#E6BE8A] shrink-0">
                    1
                  </span>
                  <div className="text-left">
                    <span className="text-[13.5px] font-medium text-white block">
                      나의 오행 아트카드 <strong className="text-[#E6BE8A]">1장</strong>
                    </span>
                    <span className="text-[11px] text-[#EDE6DA]/60 font-light block">
                      나만의 타고난 기질과 풍요 에너지를 시각화한 아트 이미지
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-[#1A3830]/50 border border-[#608F82]/35 backdrop-blur-sm">
                  <span className="w-5 h-5 rounded-full bg-[#E6BE8A]/20 border border-[#E6BE8A]/40 flex items-center justify-center text-[11px] font-bold text-[#E6BE8A] shrink-0">
                    2
                  </span>
                  <div className="text-left">
                    <span className="text-[13.5px] font-medium text-white block">
                      나의 오행 수호자 카드 <strong className="text-[#E6BE8A]">1장</strong>
                    </span>
                    <span className="text-[11px] text-[#EDE6DA]/60 font-light block">
                      재정 중심과 균형을 지켜주는 상징적 수호 이미지
                    </span>
                  </div>
                </div>
              </div>

              {/* 하단 안내 및 강조 문구 (주의: 성과 보장이 아닌 감성 리추얼 명시) */}
              <div className="pt-2 border-t border-white/10 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                <p className="text-[12px] sm:text-[13px] leading-[1.5] text-[#8FD3B6] font-medium tracking-tight">
                  ※ 개인별 선정된 동일 오행으로 구성된 디지털 이미지 2종 제공
                </p>
                <span className="hidden sm:inline text-white/20">|</span>
                <p className="text-[11px] text-white/40 font-light">
                  특정 결과를 보장하는 것이 아닌, 기질과 방향을 상징적으로 되새기는 감성 리추얼 혜택입니다.
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
                      <div className="absolute top-0.5 left-0.5 sm:top-1 sm:left-1 w-1 h-1 border-t border-l border-[#608F82]/50"></div>
                      <div className="absolute top-0.5 right-0.5 sm:top-1 sm:right-1 w-1 h-1 border-t border-r border-[#608F82]/50"></div>
                      <div className="absolute bottom-0.5 left-0.5 sm:bottom-1 sm:left-1 w-1 h-1 border-b border-l border-[#608F82]/50"></div>
                      <div className="absolute bottom-0.5 right-0.5 sm:bottom-1 sm:right-1 w-1 h-1 border-b border-r border-[#608F82]/50"></div>

                      <span className={`text-lg sm:text-xl md:text-2xl font-elegant font-bold text-[#E6BE8A] drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]`}>
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
              <p className="text-center text-[11px] text-[#EDE6DA]/60 mt-2.5 font-light">
                개인별 선정 동일 오행 기준 · 디지털 이미지 총 2종 제공
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  )
}
