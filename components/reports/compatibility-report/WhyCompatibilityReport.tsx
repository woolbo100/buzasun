'use client'

import { useState } from 'react'
import Reveal from '@/components/Reveal'
import BaekdohwaDivider from '@/components/reports/baekdohwa-report/BaekdohwaDivider'
import { HeartHandshake, Scale, Sparkles, BookOpen, MessageSquareHeart, Crown } from 'lucide-react'

export default function WhyCompatibilityReport() {
  const [activeCardIndex, setActiveCardIndex] = useState(0)

  const cards = [
    {
      num: '01',
      label: 'POINT 01',
      title: '두 사람의 관계 특화 심층 분석',
      detailLabel: 'POINT 01 핵심 가치',
      hook: '개인의 운세를 따로 보는 것이 아니라, 두 사람의 관계가 움직이는 방식을 깊이 들여다봅니다.',
      desc: '재물과 직업, 건강 등 인생 전반을 폭넓게 살펴보는 종합 풀이와 달리, 백도화 궁합 리포트는 두 사람의 관계에 집중합니다. 서로 다른 기질과 애정 표현, 갈등 반응과 관계의 반복 패턴을 함께 살펴보는 선천코드 기반 맞춤형 관계 분석입니다.',
      icon: <HeartHandshake className="w-4 h-4" />,
    },
    {
      num: '02',
      label: 'POINT 02',
      title: '동양명리학 × 관계심리학 × 감정 패턴 분석',
      detailLabel: 'POINT 02 분석 방법',
      hook: '타고난 기질을 읽고, 서로의 심리가 부딪히는 순간을 함께 이해합니다.',
      desc: '동양명리학의 선천 기질 분석에 관계심리학의 관점과 감정 반응 패턴을 결합해 두 사람의 차이를 입체적으로 살펴봅니다. 누가 옳고 그른지를 판단하기보다, 같은 상황에서도 기대와 표현, 상처받는 방식이 달라지는 이유를 이해하도록 돕습니다.',
      icon: <Scale className="w-4 h-4" />,
    },
    {
      num: '03',
      label: 'POINT 03',
      title: '반복되는 관계의 무의식 코드 정밀 해독',
      detailLabel: 'POINT 03 정밀 해독',
      hook: '사랑하는 마음은 그대로인데, 왜 같은 갈등이 반복되는지 그 구조를 살펴봅니다.',
      desc: '관계에서 반복적으로 나타나는 기대, 방어 반응, 감정적 거리두기와 충돌의 흐름을 분석합니다. 겉으로 드러난 말과 행동만이 아니라, 두 사람의 선천적 성향과 익숙한 반응 패턴이 어떤 방식으로 맞물리는지 해석합니다.',
      icon: <Sparkles className="w-4 h-4" />,
    },
    {
      num: '04',
      label: 'POINT 04',
      title: '두 사람만을 위한 1:1 맞춤형 궁합 리포트',
      detailLabel: 'POINT 04 맞춤 보고서',
      hook: '누구에게나 적용되는 궁합 풀이가 아닌, 오직 두 사람의 관계를 위한 해설입니다.',
      desc: '두 사람의 선천코드 조합과 상호작용을 바탕으로 관계의 강점, 갈등 요소, 정서적 요구와 조율 방향을 정리합니다. 일반적인 궁합 점수나 정형화된 해석을 넘어, 해당 관계에서 특히 중요하게 살펴볼 지점을 중심으로 구성합니다.',
      icon: <BookOpen className="w-4 h-4" />,
    },
    {
      num: '05',
      label: 'POINT 05',
      title: '두 사람을 위한 실전 관계 행동 처방',
      detailLabel: 'POINT 05 실전 행동 처방',
      hook: '상대를 바꾸려는 노력보다, 서로의 차이를 이해하는 새로운 선택이 필요합니다.',
      desc: '반복되는 갈등 속에서 자신의 반응을 돌아보고, 서로에게 필요한 대화와 감정 표현, 거리 조절 방법을 구체적으로 제안합니다. 관계의 방향을 운명에 맡기기보다 일상에서 실천할 수 있는 선택과 행동에 초점을 맞춥니다.',
      icon: <MessageSquareHeart className="w-4 h-4" />,
    },
    {
      num: '06',
      label: 'POINT 06',
      title: '프리미엄 소장용 궁중 인연 비급',
      detailLabel: 'POINT 06 프리미엄 소장 가치',
      hook: '한 번 읽고 끝나는 궁합 풀이가 아니라, 관계를 돌아볼 때 다시 펼치는 두 사람의 비급입니다.',
      desc: '한국 왕실 도감에서 영감을 받은 버건디 비단과 금사 모란의 시각적 품격에 두 사람의 관계 해설을 담았습니다. 서로의 차이를 잊거나 같은 문제에 부딪힐 때 다시 읽으며 관계를 돌아볼 수 있도록 구성한 프리미엄 디지털 리포트입니다.',
      icon: <Crown className="w-4 h-4" />,
    },
  ]

  return (
    <section className="mb-24 md:mb-36 lg:mb-40">
      <Reveal>
        <div className="max-w-[1280px] mx-auto text-center">
          {/* 구분선: 도화꽃 아이콘 + 양옆 가로선 (궁합 테마 샴페인 로즈골드) */}
          <BaekdohwaDivider className="mb-6 md:mb-7" theme="compatibility" />

          {/* 1. 상단 섹션 라벨 */}
          <span className="block font-elegant text-[12pt] font-semibold tracking-[0.2em] text-[#D8BB94] uppercase mb-4">
            WHY BAEKDOHWA COMPATIBILITY REPORT
          </span>

          {/* 2. 메인 헤드카피 */}
          <h2 className="text-[26px] sm:text-[28px] md:text-[38px] font-elegant font-bold text-white mb-8 md:mb-10 leading-[1.3] break-keep max-w-4xl mx-auto">
            왜, <span className="gradient-text-reunion">선천코드 궁합 리포트</span>인가?
          </h2>

          {/* 3. 본문 설명 문구 (풍요 리포트 대응 3단 서사 구조) */}
          <div className="max-w-3xl mx-auto space-y-5 md:space-y-6 mb-10 md:mb-12">
            {/* 첫 번째 문단 */}
            <p className="text-[16px] sm:text-[17px] md:text-[18px] text-[#EDE6DA] opacity-85 font-light leading-[1.75] break-keep">
              서로 사랑하는 마음이 같다고 해서, 관계를 풀어가는 방식까지 같은 것은 아닙니다.<br className="hidden sm:inline" />
              <span className="sm:inline-block">같은 상황에서도 서로 다르게 기대하고, 표현하고, 상처받기 때문입니다.</span>
            </p>

            {/* 두 번째 문단 + 세 번째 문단(결론 강조) */}
            <div className="space-y-2 md:space-y-2.5">
              <p className="text-[16px] sm:text-[17px] md:text-[18px] text-[#EDE6DA] opacity-85 font-light leading-[1.75] break-keep">
                두 사람의 선천 기질과 반복되는 반응 구조를 함께 들여다보며,<br />
                <span className="text-[#D8BB94] font-medium opacity-100">
                  사랑하면서도 자꾸 엇갈렸던 관계의 패턴을 선명하게 마주하는 순간.
                </span>
              </p>
              <p className="text-[17px] sm:text-[18px] md:text-[18.5px] text-[#EDE6DA] font-medium opacity-95 leading-[1.75] break-keep">
                비로소 왜 같은 갈등이 반복되었는지, 그 이유가 보이기 시작합니다.
              </p>
            </div>
          </div>

          {/* 4. 중간 구분선 + 하단 선언문 2줄 + 하단 구분선 */}
          <div className="my-8 md:my-12 py-8 md:py-10 border-y border-[#B78C86]/30 max-w-4xl mx-auto">
            <p className="font-elegant font-bold text-xl sm:text-2xl md:text-[28px] text-white leading-[1.85] md:leading-[2.1] break-keep">
              서로의 다름을 이해하고, 관계의 방향을 다시 선택할 수 있도록,<br className="hidden sm:inline" />
              <span className="gradient-text-reunion text-[#D8BB94]"> 이 리포트는 태어났습니다.</span>
            </p>
          </div>

          {/* 5. 6대 핵심 소구점 인터랙티브 카드 그리드 (PC: 3열x2행, 모바일: 1~2열) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 md:gap-5 text-left w-full max-w-[1280px] mx-auto mb-6">
            {cards.map((card, idx) => {
              const isSelected = activeCardIndex === idx
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveCardIndex(idx)}
                  className={`p-5 md:p-6 rounded-[22px] md:rounded-[26px] text-left transition-all duration-300 relative overflow-hidden flex flex-col justify-between group cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#C7A97A] ${
                    isSelected
                      ? 'border-[#C7A97A] shadow-[0_0_25px_rgba(183,140,134,0.30)]'
                      : 'border-[#B78C86]/20 hover:border-[#B78C86]/40 hover:bg-[#4A1F2D]/25'
                  }`}
                  style={{
                    background: isSelected ? 'rgba(90, 38, 56, 0.45)' : 'rgba(74, 31, 45, 0.22)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    borderWidth: '1px',
                  }}
                >
                  <div className="flex items-center justify-between w-full mb-2.5">
                    <span className={`font-mono text-[13px] md:text-[14px] font-semibold tracking-widest ${isSelected ? 'text-[#D8BB94]' : 'text-[#D8BB94]/70'}`}>
                      {card.label}
                    </span>
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center transition-colors ${
                      isSelected ? 'bg-[#5A2638] text-[#D8BB94] border border-[#B78C86]/60' : 'bg-white/5 text-white/50 group-hover:text-white/70'
                    }`}>
                      {card.icon}
                    </div>
                  </div>
                  <h3 className={`text-[17px] md:text-[19px] font-bold leading-snug break-keep ${
                    isSelected ? 'text-white' : 'text-white/85 group-hover:text-white'
                  }`}>
                    {card.title}
                  </h3>
                </button>
              )
            })}
          </div>

          {/* 6. 공통 상세 설명 패널 (클릭 시 내용 전환) */}
          <div 
            className="max-w-[1280px] mx-auto p-6 md:p-8 rounded-[26px] border border-[#B78C86]/35 text-left relative overflow-hidden transition-all duration-300 shadow-2xl backdrop-blur-md"
            style={{
              background: 'radial-gradient(ellipse at 50% 0%, rgba(90, 38, 56, 0.40) 0%, rgba(42, 18, 28, 0.45) 50%, rgba(18, 8, 14, 0.75) 100%)',
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.35)',
            }}
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#5A2638]/70 border border-[#B78C86]/50 text-[#D8BB94]">
                {cards[activeCardIndex].detailLabel}
              </span>
              <span className="text-xs text-[#EDE6DA]/50 hidden sm:inline">
                위 카드를 클릭하시면 각 차별화 가치의 상세 설명을 확인하실 수 있습니다.
              </span>
            </div>
            
            <p className="font-elegant font-bold text-[18px] md:text-[21px] text-white mb-2.5 leading-snug break-keep">
              {cards[activeCardIndex].hook}
            </p>
            
            <p className="text-[16px] text-[#EDE6DA]/90 font-light leading-[1.75] break-keep">
              {cards[activeCardIndex].desc}
            </p>
          </div>

          {/* 7. 섹션 마무리 2줄 핵심 메시지 */}
          <div className="max-w-3xl mx-auto mt-8 md:mt-10 text-center space-y-2 md:space-y-2.5">
            <h3 className="font-elegant font-bold text-[20px] md:text-[24px] text-white leading-snug break-keep">
              지금껏 이런 궁합 리포트는 없었습니다.
            </h3>
            <p className="font-elegant font-medium text-[16px] md:text-[18px] text-[#D8BB94] leading-relaxed break-keep">
              두 사람의 선천코드, 세 겹의 통찰, 오직 두 분만을 위한 1:1 관계 비급
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
