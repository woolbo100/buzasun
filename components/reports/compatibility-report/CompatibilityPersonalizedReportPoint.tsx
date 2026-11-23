'use client'

import { useState } from 'react'
import Image from 'next/image'
import Reveal from '@/components/Reveal'
import { Sparkles, BookOpen } from 'lucide-react'

interface CompatibilityPersonalizedReportPointProps {
  imageSrc?: string
}

export default function CompatibilityPersonalizedReportPoint({
  imageSrc = '/image/compatibility/p4.webp'
}: CompatibilityPersonalizedReportPointProps) {
  const [imageError, setImageError] = useState(false)

  const secretFeatures = [
    {
      num: '01',
      title: '둘만의 고유한 선천 기질과 에너지 조화',
      desc: '각자의 고유한 기질과 서로에게 미치는 상호작용의 흐름을 정밀하게 분석합니다.'
    },
    {
      num: '02',
      title: '무의식적 끌림과 반복되는 갈등의 뿌리',
      desc: '왜 강하게 끌렸는지, 왜 비슷한 문제로 다투게 되는지 무의식적 배경을 짚습니다.'
    },
    {
      num: '03',
      title: '함께 성장하고 조화를 이루는 현실적 처방',
      desc: '단순한 해석을 넘어 두 사람의 관계를 건강하게 유지하고 조율하는 실천 지침을 제공합니다.'
    }
  ]

  return (
    <section id="point-04-personalized" className="mt-[72px] sm:mt-[104px] lg:mt-[160px] mb-14 md:mb-18 scroll-mt-28 md:scroll-mt-36 w-full max-w-[1280px] mx-auto">
      <Reveal className="w-full">
        {/* 모바일 전용 상단 헤드카피 (데스크톱에서는 숨김) */}
        <div className="lg:hidden text-center sm:text-left mb-8 space-y-2.5 w-full max-w-[1280px] mx-auto">
          <span className="block font-elegant text-[12pt] font-semibold tracking-[0.2em] text-[#D8BB94] uppercase">
            POINT 04 · PERSONALIZED REPORT
          </span>
          <h2 className="text-2xl sm:text-3xl font-elegant font-bold text-white leading-[1.3] break-keep">
            두 사람만을 위해 완성되는<br className="sm:hidden" />
            <span className="gradient-text-reunion"> 단 하나의 선천코드 1:1 맞춤 궁합 분석서</span>
          </h2>
        </div>

        {/* 2단 구성: 데스크톱 [왼쪽: 설명 텍스트 7단] | [오른쪽: 3:4 세로 이미지 5단] (1280px 풀 위드 정렬) */}
        <div className="w-full max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-20 items-center lg:items-stretch">
          
          {/* 왼쪽 텍스트 그룹 (데스크톱 7단 / 모바일 순서 2: 이미지 뒤에 표시 / 데스크톱 세로 균형 정렬) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6 lg:space-y-0 order-2 lg:order-1 h-full py-0.5">
            {/* 상단 그룹: 데스크톱 헤드카피 + 본문 설명 문단 + 3가지 처방 원칙 리스트 */}
            <div className="space-y-5 lg:space-y-6">
              {/* 데스크톱 전용 헤드카피 */}
              <div className="hidden lg:block space-y-3">
                <span className="block font-elegant text-[12pt] font-semibold tracking-[0.2em] text-[#D8BB94] uppercase">
                  POINT 04 · PERSONALIZED REPORT
                </span>
                <h2 className="text-2xl md:text-[34px] lg:text-[36px] font-elegant font-bold text-white leading-[1.25] md:leading-[1.3] break-keep">
                  두 사람만을 위해 완성되는<br />
                  <span className="gradient-text-reunion">단 하나의 선천코드 1:1 맞춤 궁합 분석서</span>
                </h2>
              </div>

              {/* 본문 설명 문단 */}
              <div className="space-y-2.5 md:space-y-3 pt-1">
                {/* 제목 아래 강조 문구 */}
                <p className="text-[17px] md:text-[18.5px] text-[#FAF7F2] font-semibold leading-relaxed break-keep">
                  단순한 점수나 길흉화복이 아닌, 두 사람의 관계를 입체적으로 분석합니다.
                </p>

                {/* 본문 설명 */}
                <p className="text-[15.5px] sm:text-[16.5px] md:text-[17px] text-[#EDE6DA]/85 font-light leading-[1.75] break-keep">
                  두 분의 선천코드에 담긴 기질과 무의식적 끌림, 반복되는 갈등의 이유를 함께 살펴<br className="hidden sm:inline" />
                  우리 관계에 꼭 맞는 대화와 소통의 방향을 찾아갑니다.
                </p>
              </div>

              {/* 3가지 핵심 소구점 리스트 (01~03) */}
              <div className="space-y-3.5 md:space-y-4 pt-2">
                {secretFeatures.map((item, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex items-center gap-2 sm:gap-2.5">
                      <span className="text-[12.5px] sm:text-[13px] font-mono font-bold tracking-wider text-[#D8BB94] shrink-0">
                        {item.num}
                      </span>
                      <span className="text-[#D8BB94]/70 text-xs">·</span>
                      <h4 className="text-[15.5px] sm:text-[16.5px] md:text-[17.5px] font-bold text-white leading-snug break-keep lg:whitespace-nowrap">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-[14px] sm:text-[15px] md:text-[15.5px] text-[#EDE6DA]/80 font-light leading-relaxed break-keep pl-7 sm:pl-7.5">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 하단 강조 문구 인용 박스 */}
            <div className="py-3.5 px-5 sm:py-4 sm:px-6 rounded-2xl border border-[#B78C86]/30 bg-gradient-to-r from-[#4A1F2D]/40 via-[#2A0C1A]/65 to-[#4A1F2D]/40 backdrop-blur-sm mt-5 lg:mt-6">
              <p className="font-elegant font-semibold text-[15.5px] md:text-[17px] text-[#D8BB94] leading-relaxed break-keep">
                &ldquo;두 사람의 인연은 단순한 우연이 아니라, 서로를 이해하며 완성해가는 특별한 여정입니다.&rdquo;
              </p>
            </div>
          </div>

          {/* 오른쪽 3:4 세로 이미지 (데스크톱 5단 / 모바일 순서 1: 3:4 규격) */}
          <div className="lg:col-span-5 relative group flex flex-col order-1 lg:order-2 mb-8 lg:mb-0 justify-start">
            <div className="relative aspect-[3/4] w-full max-w-sm sm:max-w-md lg:max-w-none mx-auto rounded-[28px] md:rounded-[36px] overflow-hidden border border-[#B78C86]/35 shadow-2xl bg-gradient-to-b from-[#250C1B] via-[#1A0612] to-[#0D0309]">
              {!imageError ? (
                <Image 
                  src={imageSrc} 
                  alt="POINT 04 개인 맞춤형 리포트 — 두 사람만을 위해 완성되는 단 하나의 선천코드 1:1 맞춤 궁합 분석서" 
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.01]" 
                  onError={() => setImageError(true)}
                />
              ) : (
                /* 파일 제작 전 임시 플레이스홀더 슬롯 */
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-gradient-to-b from-[#4A1F2D]/60 via-[#2A0C1A]/80 to-[#14050D]/95 relative overflow-hidden">
                  <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#B78C86]/15 rounded-full blur-[50px] pointer-events-none" />
                  <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-[#D8BB94]/10 rounded-full blur-[50px] pointer-events-none" />
                  
                  {/* 중앙 원형 엠블럼 */}
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border border-[#D8BB94]/40 bg-[#351221]/80 flex items-center justify-center mb-6 shadow-[0_0_25px_rgba(183,140,134,0.25)] relative">
                    <BookOpen className="w-9 h-9 md:w-11 md:h-11 text-[#D8BB94]" />
                    <Sparkles className="w-4 h-4 text-[#D8BB94] absolute top-2 right-2 animate-pulse" />
                  </div>

                  <span className="text-xs font-mono font-bold tracking-widest text-[#D8BB94] uppercase mb-2">
                    PERSONALIZED REPORT
                  </span>
                  <h4 className="text-lg md:text-xl font-bold font-elegant text-white mb-3 break-keep">
                    두 사람만을 위한<br />
                    <span className="text-[#D8BB94]">1:1 맞춤 궁합 분석서</span>
                  </h4>
                  <p className="text-xs md:text-sm text-[#EDE6DA]/70 font-light leading-relaxed max-w-[240px] break-keep">
                    두 사람의 사주 원국과 관계 경험 질문지를 결합한 프리미엄 리포트
                  </p>
                </div>
              )}
            </div>
          </div>

        </div>
      </Reveal>
    </section>
  )
}
