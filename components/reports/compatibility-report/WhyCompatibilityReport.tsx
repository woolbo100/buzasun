'use client'

import { useState } from 'react'
import Reveal from '@/components/Reveal'
import BaekdohwaDivider from '@/components/reports/baekdohwa-report/BaekdohwaDivider'
import { HeartHandshake, Scale, Sparkles, BookOpen, MessageSquareHeart, Crown, ArrowDown } from 'lucide-react'

export default function WhyCompatibilityReport() {
  const [activeCardIndex, setActiveCardIndex] = useState(0)

  const cards = [
    {
      num: '01',
      label: 'POINT 01',
      title: '두 사람의 관계 집중 분석',
      hook: '“개인의 운세를 따로 보는 것이 아닌, 두 사람의 관계를 집중 해부합니다.”',
      desc: '개인의 운세를 따로 읽는 데 그치지 않고 두 사람의 기질, 끌림, 갈등과 관계의 상호작용을 집중적으로 살펴봅니다. 서로의 차이를 입체적으로 이해하여 소모적인 오해를 멈추는 선천코드 기반 1:1 맞춤형 궁합 설계도입니다.',
      anchorId: 'point-01',
      icon: <HeartHandshake className="w-4 h-4" />,
    },
    {
      num: '02',
      label: 'POINT 02',
      title: '선천 기질과 관계심리 교차 분석',
      hook: '“명리로 타고난 코드를 읽고, 관계심리로 부딪힘의 원인을 이해합니다.”',
      desc: '선천코드의 기질 정보와 실제 관계에서 나타나는 반응 패턴을 함께 살펴보며 다름이 충돌하는 지점을 객관적으로 이해하도록 돕습니다. 상대를 탓하기 전에 왜 그렇게 반응할 수밖에 없었는지 그 심층 구조를 밝혀냅니다.',
      anchorId: 'point-02',
      icon: <Scale className="w-4 h-4" />,
    },
    {
      num: '03',
      label: 'POINT 03',
      title: '두 사람만의 맞춤 궁합 해독',
      hook: '“같은 갈등을 겪어도 두 사람이 부딪히는 방식은 다릅니다.”',
      desc: '같은 문제를 겪어도 두 사람이 충돌하는 방식은 다를 수 있습니다. 각자의 선천 기질과 관계 특성을 바탕으로 두 사람의 상호작용을 분석하고, 6가지 핵심 분석 축을 통해 관계의 역학을 정밀하게 풀어냅니다.',
      anchorId: 'point-03',
      icon: <Sparkles className="w-4 h-4" />,
    },
    {
      num: '04',
      label: 'POINT 04',
      title: '프리미엄 궁합 비급의 상세 구성',
      hook: '“두 사람의 인연을 위해 섬세하게 짜인 7개 파트와 특별 증정품”',
      desc: '두 사람의 관계를 다양한 관점에서 살펴보는 분석 목차와 실제 제공되는 리포트 구성을 투명하고 자세하게 공개합니다. 두 사람 맞춤 오행 디지털 카드 증정 혜택까지 함께 정성껏 담았습니다.',
      anchorId: 'point-04',
      icon: <BookOpen className="w-4 h-4" />,
    },
    {
      num: '05',
      label: 'POINT 05',
      title: '두 사람을 위한 실전 관계 처방',
      hook: '“단순한 길흉 풀이를 넘어, 실제 관계에서 적용하는 구체적 대화 처방”',
      desc: '서로 다른 기질을 이해하고 실제 관계에서 적용해 볼 수 있는 대화와 관계 조율의 방향을 제안합니다. 갈등의 순간 방어벽을 내리는 3단계 소통 솔루션을 통해 반복되는 싸움의 굴레를 끊어냅니다.',
      anchorId: 'point-05',
      icon: <MessageSquareHeart className="w-4 h-4" />,
    },
    {
      num: '06',
      label: 'POINT 06',
      title: '프리미엄 궁합 리포트 미리보기',
      hook: '“평생 서랍에 간직할 두 사람만의 품격 있는 프리미엄 비급”',
      desc: '리포트에 담기는 분석 결과의 구성과 표현 방식을 미리 살펴보고 프리미엄 결과물의 특징을 확인할 수 있습니다. 수십 페이지에 걸친 고밀도 해독과 감각적인 시각화가 결합된 소장용 리포트입니다.',
      anchorId: 'point-06',
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
          <h2 className="text-2xl sm:text-3xl md:text-[38px] font-elegant font-bold text-white mb-6 leading-[1.3] md:leading-[1.35] break-keep max-w-4xl mx-auto">
            &ldquo;단순한 궁합 점수가 아닙니다.&rdquo;<br />
            두 사람의 다름을 이해하고,{' '}
            <span className="gradient-text-reunion">관계의 깊이를 다시 쓰는</span> 6대 핵심 소구점
          </h2>

          {/* 3. 본문 도입 설명 */}
          <p className="text-[17px] md:text-[18px] text-[#EDE6DA] opacity-85 font-light leading-[1.8] max-w-3xl mx-auto mb-10 md:mb-14 break-keep">
            상대의 마음을 내 방식대로만 짐작하던 소모적인 오해를 멈추고,<br className="hidden sm:inline" />
            두 사람 사이에 흐르는 선천코드와 상호작용의 결을 정밀하게 읽어냅니다.
          </p>

          {/* 4. 중앙 핵심 각성 인용문 */}
          <div className="my-8 md:my-12 py-8 md:py-10 border-y border-[#B78C86]/30 max-w-4xl mx-auto">
            <p className="font-elegant font-bold text-xl sm:text-2xl md:text-[28px] text-white leading-[1.85] md:leading-[2.1] break-keep">
              상대를 억지로 바꾸려 하지 마세요.<br className="hidden sm:inline" />
              <span className="gradient-text-reunion"> 두 사람 사이에 흐르는 관계의 결부터 읽으세요.</span>
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

          {/* 6. 공통 상세 설명 패널 (클릭 시 내용 전환 및 하단 상세 섹션 이동 링크 제공) */}
          <div 
            className="max-w-[1280px] mx-auto p-6 md:p-8 rounded-[26px] border border-[#B78C86]/35 text-left relative overflow-hidden transition-all duration-300 shadow-2xl backdrop-blur-md"
            style={{
              background: 'radial-gradient(ellipse at 50% 0%, rgba(90, 38, 56, 0.40) 0%, rgba(42, 18, 28, 0.45) 50%, rgba(18, 8, 14, 0.75) 100%)',
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.35)',
            }}
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#5A2638]/70 border border-[#B78C86]/50 text-[#D8BB94]">
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
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#D8BB94] hover:text-white transition-colors duration-200 group/link"
              >
                <span>{cards[activeCardIndex].label} 상세 분석 영역 바로보기</span>
                <ArrowDown className="w-3.5 h-3.5 group-hover/link:translate-y-0.5 transition-transform text-[#D8BB94]" />
              </a>
              <span className="text-[11px] text-[#EDE6DA]/50 font-light">
                페이지 아래 해당 상세 분석 섹션으로 부드럽게 이동합니다
              </span>
            </div>
          </div>

          {/* 7. 섹션 마무리 2줄 핵심 메시지 */}
          <div className="max-w-3xl mx-auto mt-8 md:mt-10 text-center space-y-2 md:space-y-2.5">
            <h3 className="font-elegant font-bold text-[20px] md:text-[24px] text-white leading-snug break-keep">
              지금껏 이런 궁합 리포트는 없었습니다.
            </h3>
            <p className="font-elegant font-medium text-[16px] md:text-[18px] text-[#D8BB94] leading-relaxed break-keep">
              두 사람의 선천코드, 여섯 겹의 통찰, 오직 두 분만을 위한 1:1 관계 비급
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
