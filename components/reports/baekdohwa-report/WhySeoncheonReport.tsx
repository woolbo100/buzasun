'use client'

import { useState } from 'react'
import Reveal from '@/components/Reveal'
import BaekdohwaDivider from './BaekdohwaDivider'
import { Heart, Scale, Sparkles, UserCheck, Compass, Crown } from 'lucide-react'

export default function WhySeoncheonReport() {
  const [activeCardIndex, setActiveCardIndex] = useState(0)

  const cards = [
    {
      num: '01',
      label: 'POINT 01',
      title: '연애 특화 심층 분석',
      hook: '“인생 전체를 묻는 사주가 아니라, 당신의 사랑을 깊이 들여다봅니다.”',
      desc: '재물, 직업, 건강 등 인생 전반을 폭넓게 살펴보는 종합 풀이와 달리, 백도화 연애 리포트는 연애라는 한 가지 주제에 집중합니다. 매력과 이상형부터 배우자 코드, 관계의 흐름까지 입체적으로 해부하여 분석합니다. 하나의 주제를 깊이 읽어내는 선천코드 기반 개인 맞춤 정밀 분석서입니다.',
      icon: <Heart className="w-4 h-4" />,
    },
    {
      num: '02',
      label: 'POINT 02',
      title: '동양명리학 × 심리학 × 뇌과학',
      hook: '“타고난 선천코드를 읽고, 사랑 앞에서 반복되는 마음과 습관의 회로를 바꿉니다.”',
      desc: '동양 명리학으로 선천적인 연애 기질을 해독하고, 심리학과 뇌과학적 관점을 접목해 무의식에 각인된 감정 반응과 애착 습관을 입체적으로 살펴봅니다. 타고난 성향이 실제 관계에서 어떻게 작동하는지 정확히 짚어내고, 새로운 선택을 내릴 수 있도록 이끕니다.',
      icon: <Scale className="w-4 h-4" />,
    },
    {
      num: '03',
      label: 'POINT 03',
      title: '숨겨진 무의식 코드 정밀 해독',
      hook: '“나조차 알지 못했던 내 마음의 심연, 선천코드에 숨겨진 무의식을 마주합니다.”',
      desc: '겉으로 드러난 연애 성향 너머, 나도 모르게 반복하던 방어기제와 무의식적 선택의 뿌리까지 깊게 파고듭니다. 선천코드에 새겨진 깊은 내면의 지도를 읽어내어 스스로도 몰랐던 진짜 나를 선명하게 마주하게 돕습니다.',
      icon: <Sparkles className="w-4 h-4" />,
    },
    {
      num: '04',
      label: 'POINT 04',
      title: '1:1 개인 맞춤형 리포트',
      hook: '“누구에게나 똑같이 열려 있는 뻔한 조언은 담지 않았습니다.”',
      desc: '생년월일만 넣고 기계적으로 찍어내는 자동 조합 풀이가 아닙니다. 타고난 성향의 결부터 겉과 다른 내면의 온도, 반복되는 연애의 약점까지 정밀하게 엮어 오직 당신 한 사람만을 위한 맞춤 처방전을 완성합니다.',
      icon: <UserCheck className="w-4 h-4" />,
    },
    {
      num: '05',
      label: 'POINT 05',
      title: '실전 관계 행동 처방',
      hook: '“읽고 나서 고개만 끄덕이고 끝나는 분석은 아무 의미가 없습니다.”',
      desc: '타고난 성향을 아는 것에서 멈추지 않고, 실제 연애의 갈등과 선택의 순간에 바로 적용할 수 있는 구체적인 행동 지침을 제시합니다. 내 안의 오래된 연애 습관을 끊어내고 관계의 흐름을 바꾸는 현실적인 처방전입니다.',
      icon: <Compass className="w-4 h-4" />,
    },
    {
      num: '06',
      label: 'POINT 06',
      title: '프리미엄 소장용 궁중 비급',
      hook: '“한 번 읽고 덮어버리는 가벼운 운세가 아닙니다. 평생 곁에 두고 펼쳐볼 당신만의 연애 비급입니다.”',
      desc: '수십 페이지에 걸친 밀도 높은 해독과 정제된 문장, 한 권의 화보집을 닮은 품격 있는 구성까지 모든 디테일을 장인정신으로 빚어냈습니다. 사랑의 방향을 잃을 때마다 언제든 꺼내어 나침반처럼 삼을 수 있는 하이엔드 소장용 분석서입니다.',
      icon: <Crown className="w-4 h-4" />,
    },
  ]

  return (
    <section className="mb-24 md:mb-36 lg:mb-40">
      <Reveal>
        <div className="max-w-[1280px] mx-auto text-center">
          {/* 구분선 도화꽃 아이콘 + 양옆 가로선 */}
          <BaekdohwaDivider className="mb-6 md:mb-7" />

          {/* 1. 작은 섹션 라벨 */}
          <span className="block font-elegant text-[12pt] font-semibold tracking-[0.2em] text-[#D9A8A7] uppercase mb-4">
            WHY SEONCHEON CODE
          </span>

          {/* 2. 메인 제목 */}
          <h2 className="text-[26px] sm:text-[28px] md:text-[38px] font-elegant font-bold text-white mb-8 md:mb-10 leading-[1.3] break-keep">
            왜, <span className="gradient-text-love">선천코드 연애 리포트</span>인가?
          </h2>

          {/* 3. 설명 본문 */}
          <div className="max-w-3xl mx-auto space-y-5 md:space-y-6 mb-10 md:mb-12">
            {/* 첫 번째 설명 문단 */}
            <p className="text-[16px] sm:text-[17px] md:text-[18px] text-[#EDE6DA] opacity-85 font-light leading-[1.75] break-keep">
              연애가 힘든 건 운이 나빠서도, 사람 보는 눈이 없어서도 아니었습니다.<br className="hidden sm:inline" />
              <span className="sm:inline-block">나에게 이미 쓰여 있는 코드를 모른 채 같은 문을 계속 두드렸기 때문입니다.</span>
            </p>

            {/* 두 번째 설명 문단 */}
            <div className="space-y-2 md:space-y-2.5">
              <p className="text-[16px] sm:text-[17px] md:text-[18px] text-[#EDE6DA] opacity-85 font-light leading-[1.75] break-keep">
                수많은 명리 고전과 심리학 이론 사이에서 길을 찾다,<br />
                <span className="text-[#D9A8A7] font-medium opacity-100">
                  비로소 내 명식과 무의식의 패턴을 한 책상 위에 나란히 펼쳐 놓던 밤.
                </span>
              </p>
              <p className="text-[17px] sm:text-[18px] md:text-[18.5px] text-[#EDE6DA] font-medium opacity-95 leading-[1.75] break-keep">
                그날 처음으로 지나온 연애들이 하나의 선명한 줄로 이어져 보였습니다.
              </p>
            </div>
          </div>

          {/* 4. 가장 강조할 문장 (충분한 상하 여백과 큰 타이포그래피) */}
          <div className="my-10 md:my-14 py-8 md:py-10 border-y border-[#B49A70]/25 max-w-4xl mx-auto">
            <p className="font-elegant font-bold text-xl sm:text-2xl md:text-[28px] text-white leading-[1.85] md:leading-[2.1] break-keep">
              그 명쾌한 각성을 당신의 사랑에도 똑같이 건네기 위해,<br className="hidden sm:inline" />
              <span className="gradient-text-love"> 이 리포트는 태어났습니다.</span>
            </p>
          </div>

          {/* 5. 6대 차별화 핵심 가치 요약 카드 (PC: 3열×2행, 모바일: 2열×3행/1열) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 md:gap-5 text-left w-full max-w-[1280px] mx-auto mb-6">
            {cards.map((card, idx) => {
              const isSelected = activeCardIndex === idx
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveCardIndex(idx)}
                  className={`p-5 md:p-6 rounded-[22px] md:rounded-[26px] text-left transition-all duration-300 relative overflow-hidden flex flex-col justify-between group cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#D9A8A7] ${
                    isSelected
                      ? 'border-[#D9A8A7] shadow-[0_0_25px_rgba(217,168,167,0.22)]'
                      : 'border-white/10 hover:border-white/25 hover:bg-white/[0.04]'
                  }`}
                  style={{
                    background: isSelected ? 'rgba(166, 91, 128, 0.28)' : 'rgba(125, 76, 100, 0.16)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    borderWidth: '1px',
                  }}
                >
                  <div className="flex items-center justify-between w-full mb-2.5">
                    <span className={`font-mono text-[13px] md:text-[14px] font-semibold tracking-widest ${isSelected ? 'text-[#D9A8A7]' : 'text-[#D9A8A7]/70'}`}>
                      {card.label}
                    </span>
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center transition-colors ${
                      isSelected ? 'bg-[#D9A8A7]/20 text-[#D9A8A7]' : 'bg-white/5 text-white/50 group-hover:text-white/70'
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

          {/* 7. 공통 설명 패널 (클릭 시 페이드 전환 & 레이아웃 안정성 유지) */}
          <div 
            className="max-w-[1280px] mx-auto p-6 md:p-8 rounded-[26px] border border-[#B7788D]/40 text-left relative overflow-hidden transition-all duration-300 shadow-2xl"
            style={{
              background: 'radial-gradient(ellipse at 50% 0%, rgba(139, 38, 62, 0.25) 0%, rgba(30, 12, 25, 0.65) 100%)',
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.35)',
            }}
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#B7788D]/25 border border-[#B7788D]/40 text-[#D9A8A7]">
                {cards[activeCardIndex].label} 핵심 가치
              </span>
              <span className="text-xs text-white/50 hidden sm:inline">
                위 카드를 클릭하시면 각 차별화 가치의 상세 설명을 확인하실 수 있습니다.
              </span>
            </div>
            <p className="font-elegant font-bold text-[18px] md:text-[21px] text-white mb-2.5 leading-snug break-keep">
              {cards[activeCardIndex].hook}
            </p>
            <p className="text-[16px] text-[#EDE6DA] font-light leading-[1.75] break-keep">
              {cards[activeCardIndex].desc}
            </p>
          </div>

          {/* 8. 섹션 마무리 2단 핵심 메시지 */}
          <div className="max-w-3xl mx-auto mt-8 md:mt-10 text-center space-y-2 md:space-y-2.5">
            <h3 className="font-elegant font-bold text-[20px] md:text-[24px] text-white leading-snug break-keep">
              지금껏 이런 리포트는 없었습니다.
            </h3>
            <p className="font-elegant font-medium text-[16px] md:text-[18px] text-[#D9A8A7] leading-relaxed break-keep">
              하나의 선천코드, 세 겹의 통찰, 오직 당신만의 해답
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
