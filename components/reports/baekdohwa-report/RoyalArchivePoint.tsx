'use client'

import Image from 'next/image'
import Reveal from '@/components/Reveal'

export default function RoyalArchivePoint() {
  const points = [
    {
      num: '01',
      title: '한국 전통 궁중 비급의 미학',
      desc: '한지와 비단, 섬세한 전통 문양과 앤티크 골드의 아름다움을 현대적으로 재해석한 프리미엄 디자인.'
    },
    {
      num: '02',
      title: '나의 사랑을 담은 소장용 기록',
      desc: '나만의 선천코드와 관계의 이야기를 담아, 오직 한 사람을 위한 특별한 디지털 기록물로 완성합니다.'
    },
    {
      num: '03',
      title: '시간이 지나도 다시 펼쳐볼 가치',
      desc: '사랑의 중요한 선택 앞에서 다시 꺼내 읽으며, 나를 이해하고 다음 선택의 기준을 되찾는 개인 아카이브.'
    }
  ]

  return (
    <section id="royal-archive" className="mb-32 md:mb-40 scroll-mt-28 md:scroll-mt-36">
      <Reveal>
        {/* 모바일 전용 상단 헤드카피 (데스크톱에서는 숨김) */}
        <div className="lg:hidden text-center sm:text-left mb-8 space-y-2.5 max-w-7xl mx-auto">
          <span className="block font-elegant text-[12pt] font-semibold tracking-[0.2em] text-[#D9A8A7] uppercase">
            PREMIUM ROYAL ARCHIVE
          </span>
          <h2 className="text-2xl sm:text-3xl font-elegant font-bold text-white leading-[1.3] break-keep">
            프리미엄 소장용<br />
            <span className="gradient-text-love">궁중 비급</span>
          </h2>
        </div>

        {/* 2단 구성: 데스크톱 [왼쪽: 설명 텍스트 7단 (약 57~58%)] | [오른쪽: 세로 이미지 5단 (약 42~43%)] */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-20 items-center lg:items-stretch">
          
          {/* 왼쪽 텍스트 그룹 (데스크톱 7단 / 모바일 순서 2: 이미지 뒤에 표시) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6 lg:space-y-0 order-2 lg:order-1 h-full py-0.5">
            {/* 상단 그룹: 데스크톱 헤드카피 + 도입 설명 문단 + 3가지 핵심 소구점 리스트 */}
            <div className="space-y-5 lg:space-y-6">
              {/* 데스크톱 전용 헤드카피 */}
              <div className="hidden lg:block space-y-3">
                <span className="block font-elegant text-[12pt] font-semibold tracking-[0.2em] text-[#D9A8A7] uppercase">
                  PREMIUM ROYAL ARCHIVE
                </span>
                <h2 className="text-2xl md:text-[34px] lg:text-[36px] font-elegant font-bold text-white leading-[1.25] md:leading-[1.3] break-keep">
                  프리미엄 소장용<br />
                  <span className="gradient-text-love">궁중 비급</span>
                </h2>
              </div>

              {/* 도입 설명 문단 */}
              <div className="space-y-2.5 md:space-y-3 pt-1">
                <p className="text-[17px] md:text-[18.5px] text-[#FAF7F2] font-medium leading-relaxed break-keep">
                  한 번 읽고 사라지는 운세가 아닌, 나의 사랑을 오래 간직하는 특별한 기록.
                </p>
                <p className="text-[15.5px] sm:text-[16.5px] md:text-[17px] text-[#EDE6DA]/85 font-light leading-[1.75] break-keep">
                  선천코드와 사랑의 이야기를 한 권에 담아, 시간이 지나도 다시 펼쳐볼 수 있는 개인 맞춤형 디지털 비급으로 완성합니다.
                </p>
              </div>

              {/* 핵심 소구점 3개 번호형 리스트 */}
              <div className="space-y-3.5 md:space-y-4 pt-2">
                {points.map((item, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex items-center gap-2 sm:gap-2.5">
                      <span className="text-[12.5px] sm:text-[13px] font-mono font-bold tracking-wider text-[#D9A8A7] shrink-0">
                        {item.num}
                      </span>
                      <span className="text-[#D9A8A7]/70 text-xs">·</span>
                      <h4 className="text-[15.5px] sm:text-[16.5px] md:text-[17.5px] font-bold text-white leading-snug break-keep">
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

            {/* 하단 강조 문구 박스 (슬림 버전) */}
            <div className="py-3.5 px-5 sm:py-4 sm:px-6 rounded-2xl border border-[#B7788D]/25 bg-gradient-to-r from-[#2D0A1E]/30 to-[#140816]/40 backdrop-blur-sm mt-5 lg:mt-6">
              <p className="font-elegant font-semibold text-[15.5px] md:text-[17px] text-[#D9A8A7] leading-relaxed break-keep">
                &ldquo;당신의 사랑은 한 번 읽고 사라질 운세가 아니라, 오래 간직할 한 권의 이야기입니다.&rdquo;
              </p>
            </div>
          </div>

          {/* 오른쪽 3:4 세로 이미지 (데스크톱 5단 / 모바일 순서 1: POINT 04와 동일한 비율 및 규격 적용) */}
          <div className="lg:col-span-5 relative group flex flex-col order-1 lg:order-2 mb-8 lg:mb-0 justify-start">
            <div className="relative aspect-[3/4] w-full max-w-sm sm:max-w-md lg:max-w-none mx-auto rounded-[28px] md:rounded-[36px] overflow-hidden border border-white/10 shadow-2xl bg-[#130917]">
              {/* 은은한 배경 오라 */}
              <div className="absolute -inset-10 bg-[#B7788D]/10 blur-[60px] rounded-full pointer-events-none"></div>
              <Image 
                src="/image/lovereport/the%20hidden%20love%20report.webp" 
                alt="프리미엄 소장용 궁중 비급 — 로즈핑크 비단 포장과 봉인된 선천코드 연애 리포트" 
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.02]" 
              />
            </div>
          </div>

        </div>
      </Reveal>
    </section>
  )
}
