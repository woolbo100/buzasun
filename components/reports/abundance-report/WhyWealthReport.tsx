'use client'

import { useState } from 'react'
import Reveal from '@/components/Reveal'
import BaekdohwaDivider from '@/components/reports/baekdohwa-report/BaekdohwaDivider'
import { Coins, Scale, Sparkles, BookOpen, CheckCircle2, Crown, ArrowDown } from 'lucide-react'

export default function WhyWealthReport() {
  const [activeCardIndex, setActiveCardIndex] = useState(0)

  const cards = [
    {
      num: '01',
      label: 'POINT 01',
      title: '나만의 풍요 구조 집중 분석',
      hook: '“단순한 재물운 예측이 아닌, 타고난 그릇과 풍요의 결을 해부합니다.”',
      desc: '단순한 재물운 예측이 아니라 타고난 자원 활용 성향과 돈을 대하는 나의 방식을 집중적으로 살펴봅니다. 내 손을 스쳐 지나가는 돈의 흐름을 멈추고 온전한 그릇을 세우는 1:1 맞춤 분석입니다.',
      anchorId: 'point-01',
      icon: <Coins className="w-4 h-4" />,
    },
    {
      num: '02',
      label: 'POINT 02',
      title: '선천 기질과 재정 행동 교차 분석',
      hook: '“명리로 타고난 재정 코드를 읽고, 행동심리로 돈을 대하는 습관을 바꿉니다.”',
      desc: '선천 기질과 실제 돈을 다루는 경험 및 행동을 함께 살펴보며 선택의 패턴을 이해하도록 돕습니다. 무의식적으로 돈을 쓰거나 잃게 만드는 내면의 습관을 객관적으로 마주합니다.',
      anchorId: 'point-02',
      icon: <Scale className="w-4 h-4" />,
    },
    {
      num: '03',
      label: 'POINT 03',
      title: '돈과 선택 패턴의 개인 맞춤 해독',
      hook: '“남들의 투자 성공 방식이 내게 맞지 않았던 진짜 이유를 찾습니다.”',
      desc: '재정적 선택에는 각자의 경험과 감정, 우선순위가 반영됩니다. 나의 기질과 현실적 상황을 바탕으로 반복되는 선택을 분석하고, 6가지 핵심 탐구 축을 통해 풍요의 방향을 짚어냅니다.',
      anchorId: 'point-03',
      icon: <Sparkles className="w-4 h-4" />,
    },
    {
      num: '04',
      label: 'POINT 04',
      title: '프리미엄 풍요 비급의 상세 구성',
      hook: '“나만의 풍요 흐름을 단계별로 풀어낸 심층 목차와 특별 증정품”',
      desc: '풍요 리포트의 심층 분석 목차와 실제 제공되는 결과물의 구성을 구체적으로 살펴볼 수 있습니다. 나만의 수호 에너지와 오행을 시각화한 맞춤 디지털 카드 증정 혜택을 함께 담았습니다.',
      anchorId: 'point-04',
      icon: <BookOpen className="w-4 h-4" />,
    },
    {
      num: '05',
      label: 'POINT 05',
      title: '나를 위한 실전 풍요 행동 처방',
      hook: '“추상적인 부의 조언이 아닌, 일상에서 즉시 실천하는 재정 행동 처방”',
      desc: '나의 자원과 현실적 여건을 고려하여 일상에서 실천할 수 있는 선택과 행동의 방향을 제안합니다. 새어나가는 에너지를 막고 풍요를 축적하는 구체적 실천 지침을 제공합니다.',
      anchorId: 'point-05',
      icon: <CheckCircle2 className="w-4 h-4" />,
    },
    {
      num: '06',
      label: 'POINT 06',
      title: '프리미엄 풍요 리포트 미리보기',
      hook: '“평생 곁에 두고 꺼내볼 나만의 재정 나침반, 프리미엄 소장용 비급”',
      desc: '실제 리포트의 분석 방식과 프리미엄 PDF 결과물의 구성, 시각적 완성도를 미리 확인할 수 있습니다. 장인의 손길로 정성스럽게 엮어낸 고품격 리포트 샘플을 확인하세요.',
      anchorId: 'point-06',
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
            WHY BAEKDOHWA ABUNDANCE REPORT
          </span>

          {/* 2. 메인 헤드카피 */}
          <h2 className="text-2xl sm:text-3xl md:text-[38px] font-elegant font-bold text-white mb-6 leading-[1.3] md:leading-[1.35] break-keep max-w-4xl mx-auto">
            &ldquo;막연한 부의 예측이 아닙니다.&rdquo;<br />
            나만의 풍요 그릇을 세우고,{' '}
            <span className="gradient-text-abundance">돈의 흐름을 다시 쓰는</span> 6대 핵심 소구점
          </h2>

          {/* 3. 본문 도입 설명 */}
          <p className="text-[17px] md:text-[18px] text-[#EDE6DA] opacity-85 font-light leading-[1.8] max-w-3xl mx-auto mb-10 md:mb-14 break-keep">
            남들의 재테크 성공 방식과 조언을 무작정 쫓던 불안을 멈추고,<br className="hidden sm:inline" />
            내가 타고난 자원과 현실적 재정 행동의 패턴을 정밀하게 읽어냅니다.
          </p>

          {/* 4. 중앙 핵심 각성 인용문 */}
          <div className="my-8 md:my-12 py-8 md:py-10 border-y border-[#608F82]/30 max-w-4xl mx-auto">
            <p className="font-elegant font-bold text-xl sm:text-2xl md:text-[28px] text-white leading-[1.85] md:leading-[2.1] break-keep">
              남의 방식을 흉내 내지 마세요.<br className="hidden sm:inline" />
              <span className="gradient-text-abundance"> 나만의 고유한 풍요의 결부터 읽으세요.</span>
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

          {/* 6. 공통 상세 설명 패널 (클릭 시 내용 전환 및 하단 상세 섹션 이동 링크 제공) */}
          <div 
            className="max-w-[1280px] mx-auto p-6 md:p-8 rounded-[26px] border border-[#608F82]/35 text-left relative overflow-hidden transition-all duration-300 shadow-2xl backdrop-blur-md"
            style={{
              background: 'radial-gradient(ellipse at 50% 0%, rgba(35, 75, 62, 0.45) 0%, rgba(18, 38, 32, 0.50) 50%, rgba(6, 15, 12, 0.85) 100%)',
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.35)',
            }}
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#1D3D33]/80 border border-[#608F82]/50 text-[#8FD3B6]">
                {cards[activeCardIndex].label} 핵심 소구점
              </span>
              <span className="text-xs text-[#EDE6DA]/50 hidden sm:inline">
                * 카드를 클릭하시면 각 소구점의 상세 설명을 확인하실 수 있습니다.
              </span>
            </div>
            
            <p className="font-elegant font-bold text-[18px] md:text-[21px] text-white mb-2.5 leading-snug break-keep">
              {cards[activeCardIndex].hook}
            </p>
            
            <p className="text-[16px] text-[#EDE6DA]/90 font-light leading-[1.75] break-keep mb-4">
              {cards[activeCardIndex].desc}
            </p>

            {/* 해당 POINT 상세 영역 이동 링크 */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <a 
                href={`#${cards[activeCardIndex].anchorId}`}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#8FD3B6] hover:text-white transition-colors duration-200 group/link"
              >
                <span>{cards[activeCardIndex].label} 상세 분석 영역 바로보기</span>
                <ArrowDown className="w-3.5 h-3.5 group-hover/link:translate-y-0.5 transition-transform text-[#8FD3B6]" />
              </a>
              <span className="text-[11px] text-[#EDE6DA]/50 font-light">
                페이지 아래 해당 상세 분석 섹션으로 부드럽게 이동합니다
              </span>
            </div>
          </div>

          {/* 7. 섹션 마무리 2줄 핵심 메시지 */}
          <div className="max-w-3xl mx-auto mt-8 md:mt-10 text-center space-y-2 md:space-y-2.5">
            <h3 className="font-elegant font-bold text-[20px] md:text-[24px] text-white leading-snug break-keep">
              지금껏 이런 풍요 리포트는 없었습니다.
            </h3>
            <p className="font-elegant font-medium text-[16px] md:text-[18px] text-[#8FB4A4] leading-relaxed break-keep">
              하나의 선천코드, 여섯 겹의 통찰, 오직 당신만을 위한 1:1 재정 나침반
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
