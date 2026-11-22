'use client'

import Image from 'next/image'
import Reveal from '@/components/Reveal'

export default function WealthRoyalArchivePoint() {
  const points = [
    {
      num: '01',
      title: '나만의 풍요 기준을 담은 소장용 기록',
      desc: '타고난 재물 기질과 반복되는 선택 패턴, 현실의 수입·지출 흐름을 한 권에 정리한 개인 맞춤형 풍요 아카이브입니다.'
    },
    {
      num: '02',
      title: '돈 앞에서 흔들리지 않도록 다시 펼쳐보는 기준',
      desc: '막연한 재물운 설명이 아니라, 실제 삶에서 무엇을 지키고 무엇을 바꿔야 하는지 스스로 확인할 수 있는 기준서 역할을 합니다.'
    },
    {
      num: '03',
      title: '시간이 지나도 다시 꺼내볼 가치',
      desc: '풍요의 방향을 잃거나 선택이 흔들릴 때, 다시 펼쳐보며 나의 재정 감각과 실천 방향을 되찾는 개인 기록물로 남습니다.'
    }
  ]

  return (
    <section id="wealth-royal-archive" className="w-full max-w-[1280px] mx-auto mb-28 md:mb-36 scroll-mt-28 md:scroll-mt-36">
      <Reveal className="w-full">
        {/* 모바일 전용 상단 헤드카피 (데스크톱에서는 숨김) */}
        <div className="lg:hidden text-center sm:text-left mb-8 space-y-2.5 w-full max-w-[1280px] mx-auto">
          <span className="block font-elegant text-[12pt] font-semibold tracking-[0.2em] text-[#8FB4A4] uppercase">
            PREMIUM WEALTH ARCHIVE
          </span>
          <h2 className="text-2xl sm:text-3xl font-elegant font-bold text-white leading-[1.3] break-keep">
            프리미엄 소장용 <span className="gradient-text-abundance">풍요비책</span>
          </h2>
        </div>

        {/* 2단 구성: 데스크톱 [왼쪽: 설명 텍스트 7단 (약 58%)] | [오른쪽: 세로 이미지 5단 (약 42%)] */}
        <div className="w-full max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-20 items-center lg:items-stretch">
          
          {/* 왼쪽 텍스트 그룹 (데스크톱 7단 / 모바일 순서 2: 이미지 뒤에 표시) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6 lg:space-y-0 order-2 lg:order-1 h-full py-0.5">
            {/* 상단 그룹: 데스크톱 헤드카피 + 도입 설명 문단 + 3가지 핵심 소구점 리스트 */}
            <div className="space-y-5 lg:space-y-6">
              {/* 데스크톱 전용 헤드카피 */}
              <div className="hidden lg:block space-y-3">
                <span className="block font-elegant text-[12pt] font-semibold tracking-[0.2em] text-[#8FB4A4] uppercase">
                  PREMIUM WEALTH ARCHIVE
                </span>
                <h2 className="text-2xl md:text-[34px] lg:text-[36px] font-elegant font-bold text-white leading-[1.25] md:leading-[1.3] break-keep">
                  프리미엄 소장용 <span className="gradient-text-abundance">풍요비책</span>
                </h2>
              </div>

              {/* 도입 설명 문단 */}
              <div className="space-y-2.5 md:space-y-3 pt-1">
                <p className="text-[17px] md:text-[18.5px] text-[#FAF7F2] font-medium leading-relaxed break-keep">
                  한 번 읽고 사라지는 재물운 풀이가 아닌, 나의 풍요를 오래 간직하는 특별한 기록.
                </p>
                <p className="text-[15.5px] sm:text-[16.5px] md:text-[17px] text-[#EDE6DA]/85 font-light leading-[1.75] break-keep">
                  선천코드와 재정의 흐름을 한 권에 담아, 시간이 지나도 다시 펼쳐보며 나만의 기준을 점검할 수 있는 개인 맞춤형 디지털 풍요비책으로 완성합니다.
                </p>
              </div>

              {/* 핵심 소구점 3개 번호형 리스트 */}
              <div className="space-y-3.5 md:space-y-4 pt-2">
                {points.map((item, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex items-center gap-2 sm:gap-2.5">
                      <span className="text-[12.5px] sm:text-[13px] font-mono font-bold tracking-wider text-[#C2A477] shrink-0">
                        {item.num}
                      </span>
                      <span className="text-[#C2A477]/70 text-xs">·</span>
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
            <div className="py-3.5 px-5 sm:py-4 sm:px-6 rounded-2xl border border-[#608F82]/30 bg-gradient-to-r from-[#142B24]/40 via-[#0B1514]/65 to-[#142B24]/40 backdrop-blur-sm mt-6 sm:mt-7 lg:mt-auto">
              <p className="font-elegant font-semibold text-[15.5px] md:text-[17px] text-[#C2A477] leading-relaxed break-keep">
                &ldquo;당신의 풍요는 한 번 보고 끝나는 운세가 아니라,<br className="hidden sm:inline" />{' '}
                오래 곁에 두고 다시 펼쳐볼 한 권의 기준서입니다.&rdquo;
              </p>
            </div>
          </div>

          {/* 오른쪽 3:4 세로 이미지 (데스크톱 5단 / 모바일 순서 1: 3:4 규격 유지) */}
          <div className="lg:col-span-5 relative group flex flex-col order-1 lg:order-2 mb-8 lg:mb-0 justify-start">
            <div className="relative aspect-[3/4] w-full max-w-sm sm:max-w-md lg:max-w-none mx-auto rounded-[28px] md:rounded-[36px] overflow-hidden border border-[#608F82]/35 shadow-2xl bg-[#0F201B]">
              {/* 은은한 배경 오라 */}
              <div className="absolute -inset-10 bg-[#608F82]/10 blur-[60px] rounded-full pointer-events-none"></div>
              <Image 
                src="/images/abundance/wealth-report-premium-gift-wrap.webp" 
                alt="프리미엄 소장용 풍요비책 — 옥빛 비단 포장과 앤티크 골드 장식으로 완성된 선천코드 풍요 리포트" 
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
