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
      title: '연애 특화 심층 분석',
      hook: '“인생 전체를 묻는 사주가 아니라, 당신의 사랑을 깊이 들여다봅니다.”',
      desc: '재물, 직업, 건강 등 인생 전반을 폭넓게 살펴보는 종합 풀이와 달리, 백도화는 연애라는 한 가지 주제에 집중합니다. 매력과 이상형부터 배우자 코드, 관계의 흐름까지 세밀하게 분석합니다.',
      icon: <Heart className="w-4 h-4" />,
    },
    {
      num: '02',
      title: '동양 명리 × 관계 심리',
      hook: '“타고난 기질을 읽고, 사랑 앞에서 움직이는 마음을 이해합니다.”',
      desc: '동양 명리학으로 개인의 기질을 해석하고, 관계 심리와 감정·행동 습관의 관점을 함께 살펴봅니다. 타고난 성향이 실제 사랑에서 어떻게 표현될 수 있는지 이해하도록 돕습니다.',
      icon: <Scale className="w-4 h-4" />,
    },
    {
      num: '03',
      title: '숨겨진 매력과 무의식 코드',
      hook: '“당신도 몰랐던 매력, 설명할 수 없었던 끌림의 이유.”',
      desc: '나의 매력무기, 무의식적 끌림, 관계의 그림자, 이상형과 피해야 할 인연까지. 선천코드를 단서로 사랑에 숨겨진 다양한 기질과 심리적 특징을 탐구합니다.',
      icon: <Sparkles className="w-4 h-4" />,
    },
    {
      num: '04',
      title: '1:1 개인 맞춤 분석',
      hook: '“같은 사랑은 없습니다. 당신의 선천코드도 그러합니다.”',
      desc: '개인별 명리 데이터를 바탕으로 연애 기질과 관계 특징을 분석합니다. 일반적인 성격 유형 설명을 넘어 개인의 강점과 주의할 지점, 관계의 선택 기준을 정리합니다.',
      icon: <UserCheck className="w-4 h-4" />,
    },
    {
      num: '05',
      title: '실전 관계 처방',
      hook: '“무엇을 타고났는가보다, 이제 무엇을 선택할 것인가.”',
      desc: '분석을 이해에서 끝내지 않고 실제 관계에 적용할 수 있는 선택 기준과 행동 가이드를 제시합니다. 개인별 관계 처방과 부족 오행에 맞춘 에너지 카드도 함께 제공합니다.',
      icon: <Compass className="w-4 h-4" />,
    },
    {
      num: '06',
      title: '프리미엄 궁중 비급',
      hook: '“한 번 읽고 잊는 운세가 아닌, 오래 펼쳐볼 나만의 사랑 비급.”',
      desc: '한국 전통 왕실 도감의 미감을 현대적으로 재해석한 프리미엄 PDF 리포트입니다. 한지와 비단의 감성, 아름다운 간지, 인포그래픽을 더해 읽는 경험과 소장 가치까지 고려합니다.',
      icon: <Crown className="w-4 h-4" />,
    },
  ]

  return (
    <section className="mb-28 md:mb-36">
      <Reveal>
        <div className="max-w-[1280px] mx-auto text-center">
          {/* 구분선 도화꽃 아이콘 + 양옆 가로선 */}
          <BaekdohwaDivider className="mb-6 md:mb-7" />

          {/* 1. 작은 섹션 라벨 */}
          <span className="block font-elegant text-[12pt] font-semibold tracking-[0.2em] text-[#D9A8A7] uppercase mb-4">
            WHY SEONCHEON CODE
          </span>

          {/* 2. 메인 제목 */}
          <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white mb-8 md:mb-10 leading-[1.3] break-keep">
            왜, <span className="gradient-text-love">선천코드 연애 리포트</span>인가?
          </h2>

          {/* 3. 설명 본문 */}
          <div className="max-w-3xl mx-auto space-y-4 text-[17px] md:text-[18px] text-[#EDE6DA] opacity-85 font-light leading-[1.8] break-keep mb-12">
            <p>
              연애가 힘든 건 운이 나빠서도, 사람 보는 눈이 없어서도 아니었습니다.<br className="hidden sm:inline" />
              나에게 이미 쓰여 있는 코드를 모른 채 같은 문을 계속 두드렸기 때문입니다.
            </p>
            <p>
              수많은 명리 고전과 심리학 이론 사이에서 길을 찾다, 비로소 내 명식과 무의식의 패턴을 한 책상 위에 나란히 펼쳐 놓던 밤.<br className="hidden sm:inline" />
              그날 처음으로 지나온 연애들이 하나의 선명한 줄로 이어져 보였습니다.
            </p>
          </div>

          {/* 4. 가장 강조할 문장 (충분한 상하 여백과 큰 타이포그래피) */}
          <div className="my-10 md:my-14 py-8 md:py-10 border-y border-[#B49A70]/25 max-w-4xl mx-auto">
            <p className="font-elegant font-bold text-xl sm:text-2xl md:text-[28px] text-white leading-relaxed break-keep">
              &ldquo;그 명쾌한 각성을 당신의 사랑에도 똑같이 건네기 위해,<br className="hidden sm:inline" />
              <span className="gradient-text-love"> 이 리포트는 태어났습니다.</span>&rdquo;
            </p>
          </div>

          {/* 6. 6대 차별화 핵심 가치 요약 카드 (PC: 3열×2행, 모바일: 2열×3행/1열) */}
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
                  <div className="flex items-center justify-between w-full mb-3">
                    <span className={`font-mono text-xs font-bold tracking-widest ${isSelected ? 'text-[#D9A8A7]' : 'text-[#D9A8A7]/70'}`}>
                      CARD {card.num}
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
            className="max-w-[1280px] mx-auto p-6 md:p-8 rounded-[26px] border border-[#B7788D]/40 text-left relative overflow-hidden transition-all duration-300 shadow-2xl mb-12"
            style={{
              background: 'radial-gradient(ellipse at 50% 0%, rgba(139, 38, 62, 0.25) 0%, rgba(30, 12, 25, 0.65) 100%)',
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.35)',
            }}
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#B7788D]/25 border border-[#B7788D]/40 text-[#D9A8A7]">
                CARD {cards[activeCardIndex].num} 핵심 가치
              </span>
              <span className="text-xs text-white/50 hidden sm:inline">
                위 카드를 클릭하시면 각 차별화 가치의 상세 설명을 확인하실 수 있습니다.
              </span>
            </div>
            <p className="font-elegant font-bold text-[18px] md:text-[21px] text-white mb-2.5 leading-snug break-keep">
              {cards[activeCardIndex].hook}
            </p>
            <p className="text-[15px] md:text-[16px] text-[#EDE6DA]/90 font-light leading-relaxed break-keep">
              {cards[activeCardIndex].desc}
            </p>
          </div>

          {/* 8. 마지막 핵심 카피 */}
          <div className="max-w-3xl mx-auto pt-2">
            <p className="font-elegant font-medium text-[18px] md:text-[21px] text-[#FAF7F2] leading-relaxed break-keep">
              &ldquo;언제 사랑받을지를 묻지 마세요.<br className="sm:hidden" />
              <span className="text-[#D9A8A7] font-semibold"> 왜 그런 사랑을 선택해 왔는지부터 읽으세요.</span>&rdquo;
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
