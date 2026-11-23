'use client'

import Image from 'next/image'
import Reveal from '@/components/Reveal'

interface SecretPrescriptionPointProps {
  imageSrc?: string
}

export default function SecretPrescriptionPoint({
  imageSrc = '/image/lovereport/the%20hidden%20love%20report.webp'
}: SecretPrescriptionPointProps) {
  const secretFeatures = [
    {
      num: '01',
      title: '남들과 똑같은 뻔한 연애 공식은 쓰지 않습니다',
      desc: '타고난 기질과 성향에 따라 사랑이 피어나는 방식도, 상처받는 지점도 다르기 때문입니다.'
    },
    {
      num: '02',
      title: '겉모습과 내면의 진짜 속마음을 함께 봅니다',
      desc: '타고난 성향과 무의식적 감정 패턴을 교차해 당신의 진짜 연애 온도를 정확히 짚어냅니다.'
    },
    {
      num: '03',
      title: '내 연애의 치명적인 약점을 메우는 실전 전략 추천',
      desc: '가장 흔들리는 결정적 순간을 찾아내고, 그 빈틈을 채워줄 나만의 행동 처방을 건넵니다.'
    }
  ]

  return (
    <section id="point-04-secret" className="mb-14 md:mb-18 scroll-mt-28 md:scroll-mt-36">
      <Reveal>
        {/* 모바일 전용 상단 헤드카피 (데스크톱에서는 숨김) */}
        <div className="lg:hidden text-center sm:text-left mb-8 space-y-2.5 max-w-7xl mx-auto">
          <span className="block font-elegant text-[12pt] font-semibold tracking-[0.2em] text-[#D9A8A7] uppercase">
            POINT 04 · PERSONALIZED REPORT
          </span>
          <h2 className="text-2xl sm:text-3xl font-elegant font-bold text-white leading-[1.3] break-keep">
            당신만을 위해 봉인된<br className="sm:hidden" />
            <span className="gradient-text-love"> 단 하나의 선천코드 1:1 분석서</span>
          </h2>
        </div>

        {/* 2단 구성: 데스크톱 [왼쪽: 설명 텍스트 7단] | [오른쪽: 3:4 세로 이미지 5단] */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-20 items-center lg:items-stretch">
          
          {/* 왼쪽 텍스트 그룹 (데스크톱 7단 / 모바일 순서 2: 이미지 뒤에 표시 / 데스크톱 세로 균형 정렬) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6 lg:space-y-0 order-2 lg:order-1 h-full py-0.5">
            {/* 상단 그룹: 데스크톱 헤드카피 + 본문 설명 문단 + 3가지 처방 원칙 리스트 */}
            <div className="space-y-5 lg:space-y-6">
              {/* 데스크톱 전용 헤드카피 */}
              <div className="hidden lg:block space-y-3">
                <span className="block font-elegant text-[12pt] font-semibold tracking-[0.2em] text-[#D9A8A7] uppercase">
                  POINT 04 · PERSONALIZED REPORT
                </span>
                <h2 className="text-2xl md:text-[34px] lg:text-[36px] font-elegant font-bold text-white leading-[1.25] md:leading-[1.3] break-keep">
                  당신만을 위해 봉인된<br />
                  <span className="gradient-text-love">단 하나의 선천코드 1:1 분석서</span>
                </h2>
              </div>

              {/* 본문 설명 문단 */}
              <div className="space-y-2.5 md:space-y-3 pt-1">
                {/* 문장 1 */}
                <p className="text-[17px] md:text-[18.5px] text-[#FAF7F2] font-medium leading-relaxed break-keep">
                  누구에게나 똑같이 열려 있는 뻔한 조언이 아닙니다.
                </p>

                {/* 문장 2 */}
                <p className="text-[15.5px] sm:text-[16.5px] md:text-[17px] text-[#EDE6DA]/85 font-light leading-[1.75] break-keep">
                  오직 당신의 생년월시 속에 숨겨진 고유한 선천코드와 마음의 설계를 깊이 해독하여,<br />
                  가장 은밀하고 비밀스럽게 봉인된 맞춤형 연애 처방을 내립니다.
                </p>
              </div>

              {/* 3가지 핵심 처방 리스트 (테두리 없는 깔끔한 1줄 리스트) */}
              <div className="space-y-3.5 md:space-y-4 pt-2">
                {secretFeatures.map((item, idx) => (
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
                &ldquo;당신의 연애를 구원할 단 하나의 시크릿 리포트가 마침내 펼쳐집니다.&rdquo;
              </p>
            </div>
          </div>

          {/* 오른쪽 3:4 세로 이미지 (데스크톱 5단 / 모바일 순서 1: POINT 01, 02와 동일한 3:4 규격) */}
          <div className="lg:col-span-5 relative group flex flex-col order-1 lg:order-2 mb-8 lg:mb-0 justify-start">
            <div className="relative aspect-[3/4] w-full max-w-sm sm:max-w-md lg:max-w-none mx-auto rounded-[28px] md:rounded-[36px] overflow-hidden border border-white/10 shadow-2xl bg-[#130917]">
              <Image 
                src={imageSrc} 
                alt="오직 당신만을 위한 1:1 개인 맞춤형 연애 리포트 이미지" 
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.01]" 
              />
            </div>
          </div>

        </div>
      </Reveal>
    </section>
  )
}
