'use client'

import Reveal from './Reveal'

interface ReportCommonInfoProps {
  isCompatibility?: boolean
}

export default function ReportCommonInfo({ isCompatibility = false }: ReportCommonInfoProps) {
  // 오행 카드 정보 정의
  const fiveElements = [
    {
      hanja: '木',
      hangul: '목 (木)',
      keyword: '성장, 회복, 시작의 기운',
      desc: '새로운 싹을 틔우듯 굽히지 않고 뻗어 나가는 생명력과 내면의 회복력을 상징합니다.',
      gradientClass: 'from-[#052e16]/20 via-[#10b981]/5 to-transparent',
      borderClass: 'border-emerald-500/20 hover:border-emerald-400/40',
      tagColor: 'text-emerald-400 bg-emerald-950/40',
      bgGlow: 'bg-emerald-500/5'
    },
    {
      hanja: '火',
      hangul: '화 (火)',
      keyword: '매력, 표현, 생동감의 기운',
      desc: '세상을 환히 밝히는 불꽃처럼 나를 표현하고, 시선을 사로잡는 아름다운 에너지를 상징합니다.',
      gradientClass: 'from-[#450a0a]/20 via-[#f43f5e]/5 to-transparent',
      borderClass: 'border-rose-500/20 hover:border-rose-400/40',
      tagColor: 'text-rose-400 bg-rose-950/40',
      bgGlow: 'bg-rose-500/5'
    },
    {
      hanja: '土',
      hangul: '토 (土)',
      keyword: '안정, 중심, 균형의 기운',
      desc: '대지가 모든 것을 품듯 쉽게 흔들리지 않는 굳건함과 마음의 든든한 중심을 상징합니다.',
      gradientClass: 'from-[#451a03]/20 via-[#f59e0b]/5 to-transparent',
      borderClass: 'border-amber-500/20 hover:border-amber-400/40',
      tagColor: 'text-amber-400 bg-amber-950/40',
      bgGlow: 'bg-amber-500/5'
    },
    {
      hanja: '金',
      hangul: '금 (金)',
      keyword: '정리, 보호, 명료함의 기운',
      desc: '단단한 바위나 보석처럼 불필요한 감정을 벼려내어 스스로를 지키는 주관과 명료함을 상징합니다.',
      gradientClass: 'from-[#1e293b]/20 via-[#94a3b8]/5 to-transparent',
      borderClass: 'border-slate-400/20 hover:border-slate-300/40',
      tagColor: 'text-slate-300 bg-slate-800/40',
      bgGlow: 'bg-slate-400/5'
    },
    {
      hanja: '水',
      hangul: '수 (水)',
      keyword: '치유, 직관, 흐름의 기운',
      desc: '깊은 물속처럼 고요하게 흐르며 상처를 다스리고, 상대방의 무의식을 꿰뚫는 직관력을 상징합니다.',
      gradientClass: 'from-[#172554]/20 via-[#3b82f6]/5 to-transparent',
      borderClass: 'border-blue-500/20 hover:border-blue-400/40',
      tagColor: 'text-blue-400 bg-blue-950/40',
      bgGlow: 'bg-blue-500/5'
    }
  ]

  return (
    <div className="space-y-40">
      
      {/* 1. 오행 에너지 카드 제공 안내 섹션 */}
      <section className="relative">
        {/* 은은한 배경 자개 오로라 효과 */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] bg-gradient-to-r from-purple-900/10 via-pink-900/5 to-blue-900/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>
        
        <Reveal>
          <div className="text-center mb-16 space-y-4">
            <span className="inline-block px-4 py-1 rounded-full text-xs font-bold tracking-[0.2em] bg-[var(--accent-gold)]/10 border border-[var(--accent-gold)]/20 text-[var(--accent-gold-light)] uppercase">
              Digital Ritual Gift
            </span>
            <h2 className="text-3xl md:text-5xl font-elegant font-bold text-white tracking-wide">
              당신의 흐름에 맞춘 <span className="text-[var(--accent-gold)]">오행 에너지 카드</span> 제공
            </h2>
            <p className="text-sm md:text-base text-[#EDE6DA] opacity-60 max-w-2xl mx-auto break-keep">
              ※ 오행 에너지 카드는 특정 결과를 보장하는 부적이 아니라, 나의 흐름을 상징적으로 바라보기 위한 감성 리추얼 이미지입니다.
            </p>
          </div>
        </Reveal>

        {/* 오행 소개 본문 문구 */}
        <Reveal>
          <div className="gungjung-glass p-8 md:p-12 max-w-4xl mx-auto mb-16 text-center border-white/[0.04] relative overflow-hidden">
            {/* 자개 무늬 느낌의 오버레이 광채 */}
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/5 via-pink-500/3 to-transparent pointer-events-none"></div>
            
            <p className="text-lg md:text-xl text-[#EDE6DA] leading-relaxed break-keep font-light space-y-4">
              <span className="block text-white font-medium">
                백도화 선천코드 리포트 구매 시, 고객님의 선천적 흐름에 어울리는 오행 에너지 카드 1종이 함께 제공됩니다.
              </span>
              <span className="block text-base opacity-75">
                오행 에너지 카드는 목·화·토·금·수의 상징을 한국적 자개 무드로 표현한 디지털 리추얼 이미지입니다. <br className="hidden md:inline" />
                부족하거나 보완이 필요한 기운을 시각적으로 바라보고, 마음의 균형을 정리하는 감성 카드로 활용하실 수 있습니다.
              </span>
              <span className="block text-sm text-[var(--accent-gold-light)] opacity-90 border-t border-white/5 pt-6 mt-6">
                ✨ 휴대폰 배경화면, 잠금화면, 개인 노트 표지, 감정 정리 리추얼 이미지 등으로 자유롭게 사용하실 수 있습니다.
              </span>
            </p>
          </div>
        </Reveal>

        {/* 5종 카드 그리드 배치 */}
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
            {fiveElements.map((item, idx) => (
              <div
                key={idx}
                className={`gungjung-glass p-8 border ${item.borderClass} bg-gradient-to-b ${item.gradientClass} relative overflow-hidden group flex flex-col items-center justify-between text-center transition-all duration-500 hover:-translate-y-2`}
              >
                {/* 카드 내 펄 광채 효과 백그라운드 */}
                <div className={`absolute -inset-10 ${item.bgGlow} blur-[30px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
                
                {/* 얇은 프레임 라인 (자개 카드 느낌) */}
                <div className="absolute inset-2 border border-white/[0.03] group-hover:border-[var(--accent-gold)]/20 rounded-xl pointer-events-none transition-colors duration-500"></div>

                <div className="w-full relative z-10 flex flex-col items-center">
                  {/* 한자 마크 (동양적 느낌 극대화) */}
                  <div className="w-20 h-28 mb-6 border border-[var(--accent-gold)]/30 rounded-lg flex items-center justify-center bg-black/40 relative shadow-inner group-hover:scale-105 transition-transform duration-500">
                    <span className="text-4xl md:text-5xl font-elegant font-bold text-[var(--accent-gold-light)] drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                      {item.hanja}
                    </span>
                    {/* 카드 네 모서리 장식선 */}
                    <div className="absolute top-1.5 left-1.5 w-1.5 h-1.5 border-t border-l border-[var(--accent-gold)]/40"></div>
                    <div className="absolute top-1.5 right-1.5 w-1.5 h-1.5 border-t border-r border-[var(--accent-gold)]/40"></div>
                    <div className="absolute bottom-1.5 left-1.5 w-1.5 h-1.5 border-b border-l border-[var(--accent-gold)]/40"></div>
                    <div className="absolute bottom-1.5 right-1.5 w-1.5 h-1.5 border-b border-r border-[var(--accent-gold)]/40"></div>
                  </div>

                  {/* 한글 타이틀 & 설명 */}
                  <span className={`inline-block px-3 py-1 rounded-md text-xs font-semibold mb-3 ${item.tagColor}`}>
                    {item.hangul}
                  </span>
                  
                  <h4 className="text-base font-bold text-white mb-4 break-keep">
                    {item.keyword}
                  </h4>
                  
                  <p className="text-xs text-[#EDE6DA]/60 leading-relaxed break-keep font-light">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* 2. 리포트 제작 및 수령 안내 섹션 */}
      <section className="relative">
        
        <Reveal>
          <div className="text-center mb-16 space-y-4">
            <span className="inline-block px-4 py-1 rounded-full text-xs font-bold tracking-[0.2em] bg-[var(--accent-gold)]/10 border border-[var(--accent-gold)]/20 text-[var(--accent-gold-light)] uppercase">
              Process & Info
            </span>
            <h2 className="text-3xl md:text-5xl font-elegant font-bold text-white tracking-wide">
              리포트는 <span className="text-[var(--accent-gold)]">이렇게 제작됩니다</span>
            </h2>
            <p className="text-base text-[#EDE6DA] opacity-75 max-w-3xl mx-auto break-keep font-light">
              백도화 리포트는 입력해주신 정보를 바탕으로 순차적으로 제작됩니다.<br />
              주문 후 제작되는 디지털 리포트 특성상, 결제 완료 후 바로 자동 발송되는 상품이 아니라 제작 시간이 소요될 수 있습니다.
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
          {/* 제작 흐름 안내 (좌측 7칸) */}
          <div className="lg:col-span-7 space-y-6">
            <Reveal>
              <div className="gungjung-glass p-8 border-white/[0.04] h-full flex flex-col justify-between">
                <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
                  <span className="w-1.5 h-6 bg-[var(--accent-gold)] rounded-full"></span>
                  리포트 제작 및 수령 과정
                </h3>
                
                <div className="space-y-8 relative pl-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-white/10">
                  {[
                    { title: "정보 입력 및 결제 완료", desc: "결제 완료 후 입력하신 정보를 기준으로 맞춤 제작이 시작됩니다." },
                    { title: "정밀 분석 및 리포트 작성", desc: "고객님의 선천 코드를 분석하여 깊이 있는 리포트를 PDF 형식으로 제작합니다." },
                    { title: "제작 완료 및 순차 전달", desc: "제작 완료 후 기재해주신 이메일 또는 마이페이지 다운로드 방식으로 안전하게 전달됩니다." },
                    { title: "소요 기간 및 재확인 요청", desc: "주문량에 따라 제작 시간이 달라질 수 있으며, 입력 정보가 잘못된 경우 해석이 달라질 수 있으니 결제 전 정보를 꼭 확인해 주세요." }
                  ].map((step, idx) => (
                    <div key={idx} className="relative group">
                      {/* 타임라인 원형 마커 */}
                      <div className="absolute -left-[22px] top-1.5 w-3 h-3 rounded-full bg-[#1A0514] border-2 border-[var(--accent-gold)] group-hover:bg-[var(--accent-gold)] transition-colors duration-300"></div>
                      <h4 className="text-base font-bold text-white mb-2">{step.title}</h4>
                      <p className="text-sm text-[#EDE6DA]/60 break-keep font-light">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* 정확한 분석을 위해 필요한 정보 (우측 5칸) */}
          <div className="lg:col-span-5 space-y-6">
            <Reveal>
              <div className="gungjung-glass p-8 border-white/[0.04] h-full flex flex-col justify-between bg-gradient-to-b from-white/[0.02] to-transparent">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                    <span className="w-1.5 h-6 bg-[var(--accent-gold)] rounded-full"></span>
                    정확한 분석을 위해 필요한 정보
                  </h3>
                  <p className="text-sm text-[#EDE6DA]/50 mb-8 break-keep font-light">
                    사주 분석 리포트의 특성상 아래의 정확한 선천 정보가 필요합니다.
                  </p>

                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {[
                      { label: "이름 또는 닉네임", icon: "fa-user" },
                      { label: "생년월일", icon: "fa-calendar-days" },
                      { label: "태어난 시간", icon: "fa-clock" },
                      { label: "양력/음력 여부", icon: "fa-circle-half-stroke" },
                      { label: "성별", icon: "fa-venus-mars" },
                      { label: "리포트 수령 이메일", icon: "fa-envelope" }
                    ].map((info, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-3 bg-white/[0.02] rounded-xl border border-white/5">
                        <div className="w-8 h-8 rounded-lg bg-[var(--accent-gold)]/10 flex items-center justify-center text-[var(--accent-gold)] shrink-0">
                          <i className={`fas ${info.icon} text-xs`}></i>
                        </div>
                        <span className="text-xs text-[#EDE6DA]/80 font-medium">{info.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {isCompatibility && (
                  <div className="p-4 bg-[var(--accent-gold)]/5 border border-[var(--accent-gold)]/20 rounded-xl">
                    <p className="text-xs text-[var(--accent-gold-light)] leading-relaxed break-keep font-light flex items-start gap-2">
                      <i className="fas fa-circle-info mt-0.5 shrink-0"></i>
                      <span><strong>궁합 리포트의 경우</strong>, 본인과 상대방의 정보가 모두 필요합니다. 결제 페이지에서 두 분의 정보를 빠짐없이 입력해 주세요.</span>
                    </p>
                  </div>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

    </div>
  )
}
