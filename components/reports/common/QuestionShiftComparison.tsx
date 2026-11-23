'use client'

import Image from 'next/image'
import Reveal from '@/components/Reveal'
import { HelpCircle, Compass, ArrowRight } from 'lucide-react'

// 16:9 가로형 비주얼 이미지 설정 (궁합 리포트 패러다임 시프트 슬롯)
const COMPATIBILITY_PARADIGM_SHIFT_VISUAL = {
  src: '/image/compatibility/compatibility-paradigm-shift-couple-scene.webp',
  alt: '선천코드 프리미엄 궁합 리포트 패러다임 시프트 - 우리가 잘 맞는지 묻기 전에, 왜 같은 문제로 부딪히는지 먼저 알아야 한다',
  width: 1672,
  height: 941,
  isReady: true,
}

interface QuestionShiftComparisonProps {
  theme: 'love' | 'abundance' | 'compatibility'
  banner?: React.ReactNode
  title?: React.ReactNode
  description?: React.ReactNode
}

export default function QuestionShiftComparison({
  theme,
  banner,
  title,
  description,
}: QuestionShiftComparisonProps) {
  // 테마별 컬러 및 뱃지 설정
  const themeConfig = {
    love: {
      badgeBg: 'bg-[#B7788D]/15 border-[#B7788D]/35 text-[#D9A8A7]',
      cardBorder: 'border-[#B7788D]/40',
      glowBg: 'bg-[#B7788D]/10',
      activeText: 'text-[#D9A8A7]',
      highlightText: 'text-[#E6BFA9]',
      gradientClass: 'gradient-text-love',
      shadowClass: 'shadow-[0_0_30px_rgba(183,120,141,0.15)]',
    },
    abundance: {
      badgeBg: 'bg-[#608F82]/15 border-[#608F82]/35 text-[#8FB4A4]',
      cardBorder: 'border-[#608F82]/40',
      glowBg: 'bg-[#608F82]/10',
      activeText: 'text-[#8FB4A4]',
      highlightText: 'text-[#C2A477]',
      gradientClass: 'gradient-text-abundance',
      shadowClass: 'shadow-[0_0_30px_rgba(96,143,130,0.18)]',
    },
    compatibility: {
      badgeBg: 'bg-[#5A2638]/50 border-[#B78C86]/50 text-[#D8BB94]',
      cardBorder: 'border-[#B78C86]/40',
      glowBg: 'bg-[#5A2638]/30',
      activeText: 'text-[#D8BB94]',
      highlightText: 'text-[#D8BB94]',
      gradientClass: 'gradient-text-reunion',
      shadowClass: 'shadow-[0_0_35px_rgba(90,38,56,0.3)]',
    },
  }[theme]

  // 테마별 카드 문구 설정 (풍요 리포트 전용 문구 vs 연애/궁합 문구)
  const contentConfig = {
    abundance: {
      card1: {
        title: '기존의 운세 중심 질문',
        description: '미래의 결과를 묻고 기다리는 익숙한 시선',
        questions: [
          '올해 재물운이 좋을까?',
          '언제 큰돈이 들어올까?',
          '나는 부자가 될 사주일까?',
          '앞으로 돈 벌 기회가 찾아올까?',
        ],
        bottomText: (
          <>
            결과를 기다리는 질문만으로는<br className="hidden sm:inline" /> 돈을 다루는 습관이 달라지지 않습니다.
          </>
        ),
      },
      card2: {
        title: '백도화 선천코드의 질문',
        description: '재물 구조를 이해하고 선택을 바꾸는 능동적인 시선',
        questions: [
          '나는 어떤 방식으로 돈을 벌 때 강점이 드러날까?',
          '왜 돈이 들어와도 비슷한 지출이 반복될까?',
          '나는 어떤 기회 앞에서 망설이거나 서두를까?',
          '앞으로 돈을 다루는 어떤 기준을 바꿀 수 있을까?',
        ],
        bottomText: (
          <>
            나의 재물 구조를 이해하면,<br className="hidden sm:inline" /> 선택의 기준을 새롭게 세울 수 있습니다.
          </>
        ),
      },
    },
    love: {
      card1: {
        title: '기존의 운세 중심 질문',
        description: '미래를 수동적으로 묻고 결과를 기다리는 익숙한 시선',
        questions: [
          '올해 연애운이 좋을까?',
          '나에게 재물복이 있을까?',
          '우리는 천생연분일까?',
          '앞으로 좋은 일이 생길까?',
        ],
        bottomText: '단순한 결과 풀이는 내 행동을 바꾸지 못합니다.',
      },
      card2: {
        title: '백도화 선천코드의 질문',
        description: '선택의 뿌리를 분석하고 행동을 바꾸는 능동적인 설계',
        questions: [
          '나는 왜 비슷한 연애에서 상처받을까?',
          '사랑 앞에서 반복되는 나의 선택은 무엇일까?',
          '우리는 어떤 순간에 서로를 자극할까?',
          '앞으로 무엇을 다르게 선택할 수 있을까?',
        ],
        bottomText: '구조를 알면, 마침내 다른 선택을 시작할 수 있습니다.',
      },
    },
    compatibility: {
      card1: {
        title: '기존의 궁합 중심 질문',
        description: '미래의 결과를 묻고 답을 기다리는 익숙한 시선',
        questions: [
          '우리는 천생연분일까?',
          '두 사람의 궁합 점수는 몇 점일까?',
          '이 사람과 결혼해도 괜찮을까?',
          '우리는 결국 헤어지게 될까?',
        ],
        bottomText: '궁합의 결과만 확인해서는 반복되는 갈등의 이유를 알기 어렵습니다.',
      },
      card2: {
        title: '백도화 선천코드의 질문',
        description: '관계의 구조를 이해하고 선택을 바꾸는 능동적인 시선',
        questions: [
          '우리는 왜 서로에게 끌렸을까?',
          '같은 상황에서 왜 다르게 반응할까?',
          '반복되는 갈등은 어디에서 시작될까?',
          '서로를 위해 무엇을 다르게 선택할 수 있을까?',
        ],
        bottomText: '관계의 작동 구조를 이해하면 두 사람에 맞는 새로운 선택 기준을 세울 수 있습니다.',
      },
    },
  }[theme]

  return (
    <section className="mb-40 w-full max-w-[1280px] mx-auto">
      <Reveal className="w-full">
        <div className="max-w-4xl mx-auto text-center mb-14 md:mb-16">
          <span className={`block font-elegant text-[12pt] font-semibold tracking-[0.2em] ${themeConfig.activeText} uppercase mb-4`}>
            PARADIGM SHIFT
          </span>
          {title ? (
            <h2 className="text-2xl md:text-[34px] lg:text-[36px] font-elegant font-bold text-white mb-6 leading-[1.25] md:leading-[1.3] break-keep">
              {title}
            </h2>
          ) : theme === 'compatibility' ? (
            <h2 className="text-2xl md:text-[34px] lg:text-[36px] font-elegant font-bold text-white mb-6 leading-[1.25] md:leading-[1.3] break-keep">
              우리가 잘 맞는지 묻기 전에,<br className="hidden sm:inline" />
              <span className={themeConfig.gradientClass}>왜 같은 문제로 부딪히는지 먼저 알아야 합니다.</span>
            </h2>
          ) : (
            <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white mb-6 leading-[1.25] md:leading-[1.3] break-keep">
              당신은 아직도 <br className="sm:hidden" />
              <span className={themeConfig.gradientClass}>미래가 어떻게 될지만</span> 묻고 있습니까?
            </h2>
          )}
          {description ? (
            <div className="space-y-3 md:space-y-3.5 text-[16px] md:text-[18px] text-[#EDE6DA] opacity-85 font-light leading-relaxed max-w-3xl mx-auto break-keep">
              {description}
            </div>
          ) : theme === 'compatibility' ? (
            <div className="space-y-3.5 md:space-y-4 text-[16px] md:text-[18px] text-[#EDE6DA]/90 font-light leading-relaxed max-w-3xl mx-auto break-keep">
              {/* 일반 설명 문단 01 */}
              <p className="opacity-85">
                궁합이 좋다는 결과만으로 관계의 갈등이 사라지지는 않습니다.<br className="hidden sm:inline" />
                같은 사랑을 나누면서도 두 사람은 서로 다른 방식으로 기대하고, 표현하고, 상처받을 수 있습니다.
              </p>
              {/* 강조 설명 문단 02 */}
              <p className="text-[#FAF7F2] font-medium">
                중요한 것은 궁합의 점수나 정해진 미래가 아니라,<br className="hidden sm:inline" />
                두 사람이 어떤 순간에 서로를 자극하고,{' '}
                <span className="text-[#D8BB94] font-semibold">어떤 선택으로 관계를 이어가는지</span> 이해하는 것입니다.
              </p>
            </div>
          ) : (
            <p className="text-[16px] md:text-[18px] text-[#EDE6DA] opacity-85 font-light leading-relaxed max-w-2xl mx-auto break-keep">
              진짜 바꿔야 할 것은 정해진 운세가 아니라,<br className="hidden sm:inline" />
              <span className={`${themeConfig.highlightText} font-medium`}>같은 상황에서 반복되는 나의 선택</span>일지도 모릅니다.
            </p>
          )}
        </div>

        {/* 16:9 와이드 가로형 이미지 슬롯 */}
        {banner ? (
          <div className="mb-14 md:mb-16">
            {banner}
          </div>
        ) : theme === 'compatibility' ? (
          <div className="w-full max-w-[1280px] mx-auto mb-14 md:mb-16">
            <div className="w-full overflow-hidden rounded-[24px] md:rounded-[36px] border border-[#B78C86]/30 shadow-2xl bg-[#14080E] relative group">
              <div className="relative w-full aspect-[16/9]">
                {COMPATIBILITY_PARADIGM_SHIFT_VISUAL.isReady ? (
                  <Image
                    src={COMPATIBILITY_PARADIGM_SHIFT_VISUAL.src}
                    alt={COMPATIBILITY_PARADIGM_SHIFT_VISUAL.alt}
                    fill
                    sizes="(max-width: 1280px) 100vw, 1280px"
                    className="object-contain object-center group-hover:scale-[1.01] transition-transform duration-700 ease-out"
                    priority
                  />
                ) : (
                  /* 이미지 파일 준비 중일 때 조화로운 궁중 버건디 프레임 (깨진 엑스박스 이미지 방지) */
                  <div 
                    className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#2D121C]/80 via-[#1F0A14]/90 to-[#14080E]"
                    aria-label="궁합 패러다임 시프트 이미지 영역"
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#5A2638]/25 via-transparent to-transparent pointer-events-none" />
                    <div className="w-16 h-16 rounded-full border border-[#D8BB94]/20 flex items-center justify-center opacity-40">
                      <div className="w-8 h-8 rounded-full bg-[#D8BB94]/10" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : null}

        {/* [신규] 이미지 아래 연결 메시지 3단 (theme === 'compatibility' 전용) */}
        {theme === 'compatibility' && (
          <div className="pt-2 pb-2 text-center max-w-3xl mx-auto space-y-3 md:space-y-4 mb-14 md:mb-16 px-4">
            {/* 첫 번째 메시지: 아이보리, Semibold */}
            <p className="font-elegant font-bold text-[18px] sm:text-[20px] md:text-[22px] text-[#FAF7F2] leading-[1.6] break-keep">
              이제는 좋은 궁합이라는 답을 기다리기보다,<br className="hidden sm:inline" />
              두 사람의 관계가 어떻게 움직이는지 이해할 때입니다.
            </p>

            {/* 두 번째 메시지: 웜그레이 */}
            <p className="text-base sm:text-lg text-[#EDE6DA]/85 font-light leading-relaxed break-keep">
              반복되는 갈등에는 서로 다른 기질과 감정의 반응이 숨어 있을 수 있습니다.
            </p>

            {/* 세 번째 메시지: 샴페인 골드 */}
            <p className="text-sm md:text-base text-[#D8BB94] font-semibold tracking-wide break-keep pt-1">
              아래 두 가지 질문의 차이를 통해, 궁합의 결과를 묻는 시선에서 관계의 구조를 읽는 시선으로 전환해 보세요.
            </p>
          </div>
        )}

        {/* 2단 비교 카드 (모바일 세로, 데스크톱 가로) */}
        <div className="w-full max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mb-12">
          
          {/* CARD 01 — 기존의 운세/궁합 중심 질문 */}
          <div 
            className={`gungjung-glass ${
              theme === 'abundance'
                ? 'bg-[#222D36]/75 border-[#3A4A54]/50 shadow-xl'
                : theme === 'love' 
                ? 'point-box bg-gradient-to-b from-[#1A0514]/35 via-[#2D0A1E]/20 to-[#0A0514]/35 border-white/10' 
                : theme === 'compatibility'
                ? 'bg-[#24141B]/85 border-[#5A2D3A]/45 shadow-xl'
                : 'bg-white/[0.02] border-white/10'
            } p-8 md:p-10 rounded-[32px] border flex flex-col justify-between relative overflow-hidden`}
          >
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-xl ${
                  theme === 'abundance' 
                    ? 'bg-[#171F29] border border-[#3A4A54]/60 text-[#9CA8AD]' 
                    : theme === 'compatibility'
                    ? 'bg-[#1D1017] border border-[#5A2D3A]/50 text-[#C19B83]'
                    : 'bg-white/5 border border-white/10 text-white/50'
                } flex items-center justify-center`}>
                  <HelpCircle className="w-5 h-5" />
                </div>
                <div>
                  <span className={`text-xs font-mono tracking-widest ${
                    theme === 'abundance' 
                      ? 'text-[#9CA8AD]' 
                      : theme === 'compatibility'
                      ? 'text-[#C19B83]/70'
                      : 'text-white/40'
                  } uppercase block font-medium`}>CARD 01</span>
                  <h3 className={`text-lg md:text-xl font-bold ${
                    theme === 'abundance' 
                      ? 'text-[#E4EBEF]' 
                      : theme === 'compatibility'
                      ? 'text-[#FAF7F2]/90'
                      : 'text-white/70'
                  }`}>{contentConfig.card1.title}</h3>
                </div>
              </div>
              <p className={`text-[16px] ${
                theme === 'abundance' 
                  ? 'text-[#9CA8AD]' 
                  : theme === 'compatibility'
                  ? 'text-[#EDE6DA]/60'
                  : 'text-[#EDE6DA]/60'
              } font-light mb-6 break-keep`}>
                {contentConfig.card1.description}
              </p>

              <div className="space-y-3.5">
                {contentConfig.card1.questions.map((q, idx) => (
                  <div key={idx} className={`p-4 rounded-xl ${
                    theme === 'abundance' 
                      ? 'bg-[#171F29]/90 border border-[#2E3C46]/60 text-[#9CA8AD]' 
                      : theme === 'compatibility'
                      ? 'bg-[#1D1017]/90 border border-[#4A2430]/40 text-[#EDE6DA]/60'
                      : 'bg-black/30 border border-white/5 text-white/60'
                  } flex items-center gap-3`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${
                      theme === 'abundance' 
                        ? 'bg-[#9CA8AD]/40' 
                        : theme === 'compatibility'
                        ? 'bg-[#C19B83]/30'
                        : 'bg-white/30'
                    } shrink-0`}></span>
                    <span className="text-sm md:text-base line-through opacity-70 break-keep">{q}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={`pt-6 border-t ${
              theme === 'abundance' 
                ? 'border-[#3A4A54]/40 text-[#9CA8AD]' 
                : theme === 'compatibility'
                ? 'border-[#5A2D3A]/30 text-[#EDE6DA]/60'
                : 'border-white/5 text-white/50'
            } text-sm md:text-[14px] lg:text-[14px] xl:text-[15px] text-center font-light leading-relaxed break-keep`}>
              {contentConfig.card1.bottomText}
            </div>
          </div>

          {/* CARD 02 — 백도화 선천코드의 질문 */}
          <div 
            className={`gungjung-glass ${
              theme === 'abundance'
                ? 'bg-gradient-to-b from-[#30464A]/85 via-[#25393D]/80 to-[#1A282B]/90 border-[#5A787A]/50 hover:border-[#C7A97A]/50 shadow-[0_10px_35px_rgba(35,55,58,0.35)]'
                : theme === 'love' 
                ? 'border-[#B7788D]/40 shadow-[0_0_30px_rgba(183,120,141,0.15)]' 
                : theme === 'compatibility'
                ? 'point-box bg-gradient-to-b from-[#442A30]/80 via-[#321E23]/75 to-[#1C1014]/90 border-[#8A636A]/50 hover:border-[#C7A97A]/60 shadow-[0_10px_35px_rgba(68,42,48,0.25)]'
                : 'point-box bg-gradient-to-b from-[#1A0514]/35 via-[#2D0A1E]/20 to-[#0A0514]/35 border-[#608F82]/40 shadow-[0_0_30px_rgba(96,143,130,0.18)]'
            } p-8 md:p-10 rounded-[32px] border transition-all duration-300 flex flex-col justify-between relative overflow-hidden`}
            style={theme === 'love' ? { backgroundColor: 'rgba(166, 91, 128, 0.18)' } : undefined}
          >
            {/* 배경 은은한 광채 */}
            <div className={`absolute -top-20 -right-20 w-60 h-60 ${
              theme === 'abundance' 
                ? 'bg-[#4B6B6F]/20' 
                : theme === 'compatibility'
                ? 'bg-[#442A30]/20'
                : themeConfig.glowBg
            } rounded-full blur-[80px] pointer-events-none`}></div>

            <div className="mb-6 relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-xl ${
                  theme === 'abundance' 
                    ? 'bg-[#1D3035] border border-[#5A787A]/60 text-[#A4BAB5]' 
                    : theme === 'compatibility'
                    ? 'bg-[#442A30]/70 border border-[#8A636A]/50 text-[#C7A97A]'
                    : themeConfig.badgeBg
                } flex items-center justify-center`}>
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <span className={`text-xs font-mono tracking-widest ${
                    theme === 'abundance' 
                      ? 'text-[#A4BAB5]' 
                      : theme === 'compatibility'
                      ? 'text-[#C7A97A]'
                      : themeConfig.activeText
                  } uppercase block font-bold`}>CARD 02</span>
                  <h3 className="text-lg md:text-xl font-bold text-white">{contentConfig.card2.title}</h3>
                </div>
              </div>
              <p className={`text-[16px] ${
                theme === 'abundance' 
                  ? 'text-[#EDE6DA]' 
                  : theme === 'compatibility'
                  ? 'text-[#EDE6DA]/85'
                  : 'text-[#EDE6DA]/85'
              } font-light mb-6 break-keep`}>
                {contentConfig.card2.description}
              </p>

              <div className="space-y-3.5">
                {contentConfig.card2.questions.map((q, idx) => (
                  <div key={idx} className={`p-4 rounded-xl ${
                    theme === 'abundance' 
                      ? 'bg-[#1D3035]/90 border border-[#3A5358]/60 text-[#F2ECE3]' 
                      : theme === 'compatibility'
                      ? 'bg-[#2E1B20]/85 border border-[#8A636A]/35 text-white'
                      : 'bg-black/50 border border-white/10 text-white'
                  } flex items-center gap-3 shadow-sm`}>
                    <ArrowRight className={`w-4 h-4 ${
                      theme === 'abundance' 
                        ? 'text-[#A4BAB5]' 
                        : theme === 'compatibility'
                        ? 'text-[#C7A97A]'
                        : themeConfig.activeText
                    } shrink-0`} />
                    <span className="text-sm md:text-base font-medium break-keep">{q}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={`pt-6 border-t ${
              theme === 'abundance' 
                ? 'border-[#5A787A]/30 text-[#EDE6DA]' 
                : theme === 'compatibility'
                ? 'border-[#8A636A]/30 text-[#EDE6DA]/90'
                : 'border-white/10 text-[#EDE6DA]/90'
            } text-sm md:text-[14px] lg:text-[14px] xl:text-[15px] tracking-tight xl:whitespace-nowrap text-center font-light leading-relaxed break-keep relative z-10`}>
              {contentConfig.card2.bottomText}
            </div>
          </div>

        </div>

        {/* 하단 강조 문구 박스 */}
        <div className="max-w-3xl mx-auto text-center p-6 md:p-8 rounded-2xl gungjung-glass border border-[#B78C86]/25 bg-black/40">
          <p className="text-lg md:text-xl font-elegant font-bold text-white break-keep">
            {theme === 'compatibility' ? (
              <>
                &ldquo;좋은 궁합을 기다릴 것인가.{' '}
                <span className={themeConfig.highlightText}>서로를 이해하고 관계를 조율할 것인가.</span>&rdquo;
              </>
            ) : (
              <>
                &ldquo;미래를 듣고 기다릴 것인가.{' '}
                <span className={themeConfig.highlightText}>나를 이해하고 선택을 바꿀 것인가.</span>&rdquo;
              </>
            )}
          </p>
        </div>
      </Reveal>
    </section>
  )
}
