'use client'

import { useState } from 'react'
import Reveal from '@/components/Reveal'
import BaekdohwaDivider from '@/components/reports/baekdohwa-report/BaekdohwaDivider'
import { Coins, Scale, Sparkles, BookOpen, CheckCircle2, Crown } from 'lucide-react'

export default function WhyWealthReport() {
  const [activeCardIndex, setActiveCardIndex] = useState(0)

  const cards = [
    {
      num: '01',
      label: 'POINT 01',
      title: '풍요 특화 심층 분석',
      hook: '“인생 전체를 묻는 사주가 아니라, 당신의 풍요를 깊이 들여다봅니다.”',
      desc: '재물, 직업, 건강 등 인생 전반을 폭넓게 살펴보는 종합 풀이와 달리, 백도화 풍요 리포트는 풍요라는 한 가지 주제에 집중합니다. 타고난 재물 성향부터 수익 활동의 기질, 돈을 대하는 무의식적 반응, 반복되는 소비와 선택의 패턴까지 입체적으로 살펴보는 선천코드 기반 개인 맞춤 분석서입니다.',
      icon: <Coins className="w-4 h-4" />,
    },
    {
      num: '02',
      label: 'POINT 02',
      title: '동양명리학 × 심리학 × 뇌과학',
      hook: '“타고난 선천코드를 읽고, 돈 앞에서 반복되는 생각과 습관의 회로를 바꿉니다.”',
      desc: '동양 명리학으로 선천적인 재물 기질과 오행의 흐름을 해독하고, 인지심리학과 습관 뇌과학적 관점을 접목해 돈 앞에서 무의식적으로 작동하는 결핍감과 소비 회로를 입체적으로 살펴봅니다. 타고난 성향이 실제 경제적 선택에서 어떻게 작동하는지 정확히 짚어내고, 건강한 재정 행동 습관을 형성할 수 있도록 이끕니다.',
      icon: <Scale className="w-4 h-4" />,
    },
    {
      num: '03',
      label: 'POINT 03',
      title: '숨겨진 무의식 코드 정밀 해독',
      hook: '“나조차 알지 못했던 돈에 대한 결핍과 두려움, 선천코드에 숨겨진 무의식을 마주합니다.”',
      desc: '겉으로 드러난 소비 습관 너머, 돈 앞에서 무의식적으로 튀어나오는 가격 책정의 두려움, 준비만 하다 시작을 미루는 방어기제, 목돈이 생기면 흘려보내는 결핍의 뿌리까지 깊게 파고듭니다. 선천코드에 새겨진 내면의 재물 지도를 읽어내어 제자리를 맴돌던 선택의 고리를 끊어내도록 돕습니다.',
      icon: <Sparkles className="w-4 h-4" />,
    },
    {
      num: '04',
      label: 'POINT 04',
      title: '1:1 개인 맞춤형 리포트',
      hook: '“누구에게나 똑같이 열려 있는 뻔한 재테크 조언은 담지 않았습니다.”',
      desc: '생년월일만 넣고 기계적으로 찍어내는 자동 조합 풀이가 아닙니다. 개인의 고유한 사주 명식과 선천적 그릇부터 현실에서 반복되는 재정 행동 패턴까지 정밀하게 교차 분석하여, 오직 당신 한 사람만을 위한 1:1 맞춤형 풍요 처방전 PDF를 완성합니다.',
      icon: <BookOpen className="w-4 h-4" />,
    },
    {
      num: '05',
      label: 'POINT 05',
      title: '나를 위한 실전 풍요 행동 처방',
      hook: '“추상적인 부의 조언이 아닌, 일상에서 즉시 실천하는 재정 행동 처방”',
      desc: '나의 자원과 현실적 여건을 고려하여 일상에서 바로 실천할 수 있는 선택과 행동의 방향을 제안합니다. 막연한 다짐이나 남의 방식이 아닌, 내 생활 리듬과 그릇에 맞는 현실적인 기준을 세우도록 돕습니다. 이를 통해 새어나가는 에너지와 불필요한 소모를 막고, 풍요를 차곡차곡 축적하는 구체적 실천 지침을 제공합니다.',
      icon: <CheckCircle2 className="w-4 h-4" />,
    },
    {
      num: '06',
      label: 'POINT 06',
      title: '프리미엄 소장용 궁중 비급',
      hook: '“한 번 읽고 덮어버리는 가벼운 운세가 아닙니다. 평생 곁에 두고 펼쳐볼 당신만의 풍요 비급입니다.”',
      desc: '수십 페이지에 걸친 깊이 있는 해독과 정갈한 문체, 은은한 옥빛과 샴페인 골드 금박을 품은 품격 있는 디지털 구성까지 모든 디테일을 장인정신으로 엮었습니다. 돈의 흐름 앞에서 판단이 흔들릴 때마다 언제든 꺼내어 나침반처럼 삼을 수 있는 프리미엄 소장용 맞춤 디지털 비급입니다.',
      icon: <Crown className="w-4 h-4" />,
    },
  ]

  return (
    <section className="mb-24 md:mb-36 lg:mb-40">
      <Reveal>
        <div className="max-w-[1280px] mx-auto text-center">
          {/* 구분선: 도화꽃 아이콘 + 양옆 가로선 (풍요 테마 연옥색/자개빛) */}
          <BaekdohwaDivider className="mb-6 md:mb-7" theme="abundance" />

          {/* 1. 상단 섹션 라벨 */}
          <span className="block font-elegant text-[12pt] font-semibold tracking-[0.2em] text-[#8FB4A4] uppercase mb-4">
            WHY SEONCHEON CODE
          </span>

          {/* 2. 메인 헤드카피 */}
          <h2 className="text-[26px] sm:text-[28px] md:text-[38px] font-elegant font-bold text-white mb-8 md:mb-10 leading-[1.3] break-keep max-w-4xl mx-auto">
            왜, <span className="gradient-text-abundance">선천코드 풍요 리포트</span>인가?
          </h2>

          {/* 3. 본문 설명 문구 */}
          <div className="max-w-3xl mx-auto space-y-5 md:space-y-6 mb-10 md:mb-12">
            <p className="text-[16px] sm:text-[17px] md:text-[18px] text-[#EDE6DA] opacity-85 font-light leading-[1.75] break-keep">
              통장이 늘 제자리였던 건 남들보다 덜 노력해서도, 요행이 없어서도 아니었습니다.<br className="hidden sm:inline" />
              <span className="sm:inline-block">내 안의 풍요 작동 방식을 읽지 못한 채 늘 같은 자리에서 멈춰 섰기 때문입니다.</span>
            </p>

            <div className="space-y-2 md:space-y-2.5">
              <p className="text-[16px] sm:text-[17px] md:text-[18px] text-[#EDE6DA] opacity-85 font-light leading-[1.75] break-keep">
                명리의 구조와 마음의 무의식적 습관을 함께 들여다보며,<br />
                <span className="text-[#E5C378] font-medium opacity-100">
                  돈 앞에서 망설이고 흘려보내던 나만의 패턴을 한눈에 그려내던 순간.
                </span>
              </p>
              <p className="text-[17px] sm:text-[18px] md:text-[18.5px] text-[#EDE6DA] font-medium opacity-95 leading-[1.75] break-keep">
                비로소 왜 그 기회들이 내 손에 머물지 않았는지 그 이유가 선명히 드러났습니다.
              </p>
            </div>
          </div>

          {/* 4. 중간 구분선 + 하단 강조 문구 2줄 + 하단 구분선 */}
          <div className="my-8 md:my-12 py-8 md:py-10 border-y border-[#608F82]/30 max-w-4xl mx-auto">
            <p className="font-elegant font-bold text-xl sm:text-2xl md:text-[28px] text-white leading-[1.85] md:leading-[2.1] break-keep">
              그 명쾌한 각성을 당신의 부와 흐름에도 고스란히 건네기 위해,<br className="hidden sm:inline" />
              <span className="gradient-text-abundance"> 이 리포트는 태어났습니다.</span>
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
                  className={`p-5 md:p-6 rounded-[22px] md:rounded-[26px] text-left transition-all duration-300 relative overflow-hidden flex flex-col justify-between group cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#E5C378] ${
                    isSelected
                      ? 'border-[#E5C378] shadow-[0_0_25px_rgba(143,211,182,0.25)]'
                      : 'border-[#608F82]/20 hover:border-[#8FD3B6]/40 hover:bg-[#142B24]/40'
                  }`}
                  style={{
                    background: isSelected ? 'rgba(29, 61, 51, 0.60)' : 'rgba(20, 43, 36, 0.25)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    borderWidth: '1px',
                  }}
                >
                  <div className="flex items-center justify-between w-full mb-2.5">
                    <span className={`font-mono text-[13px] md:text-[14px] font-semibold tracking-widest ${isSelected ? 'text-[#8FD3B6]' : 'text-[#8FB4A4]/70'}`}>
                      {card.label}
                    </span>
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center transition-colors ${
                      isSelected ? 'bg-[#1D3D33] text-[#8FD3B6] border border-[#8FD3B6]/60' : 'bg-white/5 text-white/50 group-hover:text-white/70'
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
            className="max-w-[1280px] mx-auto p-6 md:p-8 rounded-[26px] border border-[#608F82]/35 text-left relative overflow-hidden transition-all duration-300 shadow-2xl backdrop-blur-md"
            style={{
              background: 'radial-gradient(ellipse at 50% 0%, rgba(35, 75, 62, 0.45) 0%, rgba(18, 38, 32, 0.50) 50%, rgba(6, 15, 12, 0.85) 100%)',
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.35)',
            }}
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#1D3D33]/80 border border-[#608F82]/50 text-[#8FD3B6]">
                {cards[activeCardIndex].label} 핵심 가치
              </span>
              <span className="text-xs text-[#EDE6DA]/60 hidden sm:inline">
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
              지금껏 이런 풍요 리포트는 없었습니다.
            </h3>
            <p className="font-elegant font-medium text-[16px] md:text-[18px] text-[#E5C378] leading-relaxed break-keep">
              하나의 선천코드, 세 겹의 통찰, 오직 당신만을 위한 1:1 재정 나침반
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
