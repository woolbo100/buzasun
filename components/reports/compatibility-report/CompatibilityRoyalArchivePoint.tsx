'use client'

import { useState } from 'react'
import Image from 'next/image'
import Reveal from '@/components/Reveal'
import { Sparkles, BookOpen } from 'lucide-react'

interface CompatibilityRoyalArchivePointProps {
  imageSrc?: string
}

export default function CompatibilityRoyalArchivePoint({
  imageSrc = '/image/compatibility/p5.webp'
}: CompatibilityRoyalArchivePointProps) {
  const [imageError, setImageError] = useState(false)

  const points = [
    {
      num: '01',
      title: '둘만의 관계 기준을 담은 소장형 기록',
      desc: '타고난 선천 기질과 반복되는 관계 패턴, 현실의 소통 방식을 한 권에 정리한 개인 맞춤형 궁합 아카이브입니다.'
    },
    {
      num: '02',
      title: '갈등 앞에서 흔들리지 않도록 다시 펼쳐보는 기준',
      desc: '막연한 점수 풀이가 아니라, 실제 관계에서 무엇을 배려하고 무엇을 조율해야 하는지 스스로 확인할 수 있는 기준이 됩니다.'
    },
    {
      num: '03',
      title: '시간이 지나도 다시 꺼내볼 가치',
      desc: '관계의 방향을 잃거나 감정에 휩쓸릴 때, 다시 펼쳐보며 서로의 마음과 대화의 방향을 되찾는 소중한 기록물로 남습니다.'
    }
  ]

  return (
    <section id="compatibility-royal-archive" className="w-full max-w-[1280px] mx-auto mb-28 md:mb-36 scroll-mt-28 md:scroll-mt-36">
      <Reveal className="w-full">
        {/* 모바일 전용 상단 헤드카피 (데스크톱에서는 숨김) */}
        <div className="lg:hidden text-center sm:text-left mb-8 space-y-2.5 w-full max-w-[1280px] mx-auto">
          <span className="block font-elegant text-[12pt] font-semibold tracking-[0.2em] text-[#D8BB94] uppercase">
            PREMIUM COMPATIBILITY ARCHIVE
          </span>
          <h2 className="text-2xl sm:text-3xl font-elegant font-bold text-white leading-[1.3] break-keep">
            프리미엄 소장용 <span className="gradient-text-reunion">관계 비급</span>
          </h2>
        </div>

        {/* 2단 구성: 데스크톱 [왼쪽: 설명 텍스트 7단] | [오른쪽: 3:4 세로 이미지 5단] (1280px 풀 위드 정렬) */}
        <div className="w-full max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-20 items-center lg:items-stretch">
          
          {/* 왼쪽 텍스트 그룹 (데스크톱 7단 / 모바일 순서 2: 이미지 뒤에 표시) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6 lg:space-y-0 order-2 lg:order-1 h-full py-0.5">
            {/* 상단 그룹: 데스크톱 헤드카피 + 도입 설명 문단 + 3가지 핵심 소구점 리스트 */}
            <div className="space-y-5 lg:space-y-6">
              {/* 데스크톱 전용 헤드카피 */}
              <div className="hidden lg:block space-y-3">
                <span className="block font-elegant text-[12pt] font-semibold tracking-[0.2em] text-[#D8BB94] uppercase">
                  PREMIUM COMPATIBILITY ARCHIVE
                </span>
                <h2 className="text-2xl md:text-[34px] lg:text-[36px] font-elegant font-bold text-white leading-[1.25] md:leading-[1.3] break-keep">
                  프리미엄 소장용 <span className="gradient-text-reunion">관계 비급</span>
                </h2>
              </div>

              {/* 도입 설명 문단 */}
              <div className="space-y-2.5 md:space-y-3 pt-1">
                <p className="text-[17px] md:text-[18.5px] text-[#FAF7F2] font-medium leading-relaxed break-keep">
                  한 번 읽고 사라지는 궁합 풀이가 아닌, 두 사람의 관계를 오래 간직하는 특별한 기록.
                </p>
                <p className="text-[15.5px] sm:text-[16.5px] md:text-[17px] text-[#EDE6DA]/85 font-light leading-[1.75] break-keep">
                  선천코드와 관계의 흐름을 한 권에 담아, 서로 흔들릴 때마다 다시 펼쳐보며 기준을 점검할 수 있는 개인 맞춤형 디지털 궁합비급으로 완성합니다.
                </p>
              </div>

              {/* 핵심 소구점 3개 번호형 리스트 */}
              <div className="space-y-3.5 md:space-y-4 pt-2">
                {points.map((item, idx) => (
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

            {/* 하단 강조 문구 박스 (데스크톱에서 mt-auto로 우측 이미지 하단 라인과 정렬) */}
            <div className="py-3.5 px-5 sm:py-4 sm:px-6 rounded-2xl border border-[#B78C86]/30 bg-gradient-to-r from-[#4A1F2D]/40 via-[#2A0C1A]/65 to-[#4A1F2D]/40 backdrop-blur-sm mt-6 sm:mt-7 lg:mt-auto">
              <p className="font-elegant font-semibold text-[15.5px] md:text-[17px] text-[#D8BB94] leading-relaxed break-keep">
                &ldquo;두 사람의 궁합은 한 번 보고 끝나는 운세가 아니라,<br className="hidden sm:inline" />{' '}
                오래 곁에 두고 다시 펼쳐볼 둘만의 관계 나침반입니다.&rdquo;
              </p>
            </div>
          </div>

          {/* 오른쪽 3:4 세로 이미지 (데스크톱 5단 / 모바일 순서 1: 3:4 규격 유지) */}
          <div className="lg:col-span-5 relative group flex flex-col order-1 lg:order-2 mb-8 lg:mb-0 justify-start">
            <div className="relative aspect-[3/4] w-full max-w-sm sm:max-w-md lg:max-w-none mx-auto rounded-[28px] md:rounded-[36px] overflow-hidden border border-[#B78C86]/35 shadow-2xl bg-[#250C1B]">
              {/* 은은한 배경 오라 */}
              <div className="absolute -inset-10 bg-[#5A2638]/20 blur-[60px] rounded-full pointer-events-none"></div>
              {!imageError ? (
                <Image 
                  src={imageSrc} 
                  alt="프리미엄 소장용 관계 비급 — 두 사람을 위한 궁합 아카이브" 
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.01]" 
                  onError={() => setImageError(true)}
                />
              ) : (
                /* 파일 제작 전 임시 플레이스홀더 슬롯 */
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-gradient-to-b from-[#4A1F2D]/60 via-[#2A0C1A]/80 to-[#14050D]/95 relative overflow-hidden">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border border-[#D8BB94]/40 bg-[#351221]/80 flex items-center justify-center mb-6 shadow-[0_0_25px_rgba(183,140,134,0.25)] relative">
                    <BookOpen className="w-9 h-9 md:w-11 md:h-11 text-[#D8BB94]" />
                    <Sparkles className="w-4 h-4 text-[#D8BB94] absolute top-2 right-2 animate-pulse" />
                  </div>
                  <span className="text-xs font-mono font-bold tracking-widest text-[#D8BB94] uppercase mb-2">
                    COMPATIBILITY ARCHIVE
                  </span>
                  <h4 className="text-lg md:text-xl font-bold font-elegant text-white mb-3 break-keep">
                    프리미엄 소장용<br />
                    <span className="text-[#D8BB94]">관계 비급</span>
                  </h4>
                  <p className="text-xs md:text-sm text-[#EDE6DA]/70 font-light leading-relaxed max-w-[240px] break-keep">
                    두 사람의 관계를 오래 간직하는 개인 맞춤형 궁합 비급
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
