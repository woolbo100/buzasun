'use client'

import Image from 'next/image'
import Reveal from '@/components/Reveal'
import BaekdohwaDivider from '@/components/reports/baekdohwa-report/BaekdohwaDivider'

// 풍요 리포트 소개 섹션 전용 16:9 이미지 설정 (a4.webp 또는 전용 이미지)
const INTRO_PHILOSOPHY_VISUAL = {
  src: '/image/abundance/a4.webp',
  alt: '선천코드 풍요 리포트 — 나만의 풍요 그릇을 세우고 돈의 흐름을 다시 쓰는 16:9 비주얼',
  width: 1672,
  height: 941,
}

export default function WealthIntroPhilosophy() {
  return (
    <section className="mb-14 md:mb-20">
      <Reveal>
        <div className="max-w-[1280px] mx-auto text-center">
          {/* 1. 상단 장식 영역: 좌우 얇은 라인 + 중앙 작은 선화 도화꽃 심볼 */}
          <BaekdohwaDivider className="mb-6 md:mb-7" theme="abundance" />

          {/* 2. 영문 라벨 */}
          <span className="block font-elegant text-[12pt] font-semibold tracking-[0.2em] text-[#8FB4A4] uppercase mb-4">
            WHY BAEKDOHWA ABUNDANCE REPORT
          </span>

          {/* 3. 큰 제목 (2줄) */}
          <h2 className="text-2xl sm:text-3xl md:text-[38px] lg:text-[40px] font-elegant font-bold text-white mb-6 leading-[1.3] md:leading-[1.35] break-keep max-w-4xl mx-auto">
            &ldquo;막연한 부의 예측이 아닙니다.&rdquo;<br />
            <span className="text-[#FAF7F2]">나만의 풍요 그릇을 세우고, </span>
            <span className="gradient-text-abundance">돈의 흐름을 다시 씁니다.</span>
          </h2>

          {/* 4. 설명 문구 (2줄) */}
          <div className="text-[16px] md:text-[18px] text-[#EDE6DA] opacity-85 font-light leading-[1.8] max-w-3xl mx-auto mb-8 md:mb-10 break-keep space-y-1">
            <p>남들의 재테크 성공 방식과 조언을 무작정 쫓던 불안을 멈추고,</p>
            <p>내가 타고난 자원과 현실적 재정 행동의 패턴을 정밀하게 읽어냅니다.</p>
          </div>

          {/* 5. 구분선 아래 강조 문구 (상하 가로선 + 강조 2줄) */}
          <div className="my-8 md:my-12 py-8 md:py-10 border-y border-[#608F82]/30 max-w-4xl mx-auto">
            <p className="font-elegant font-bold text-xl sm:text-2xl md:text-[28px] lg:text-[30px] text-white leading-[1.8] md:leading-[1.95] break-keep">
              남의 방식을 흉내 내지 마세요.<br className="hidden sm:inline" />
              <span className="gradient-text-abundance"> 나만의 고유한 풍요의 결부터 읽으세요.</span>
            </p>
          </div>

          {/* 6. 가로 풀사이즈 16:9 이미지 */}
          <div className="w-full max-w-7xl mx-auto mt-10 md:mt-14 mb-12 md:mb-16">
            <div className="w-full overflow-hidden rounded-[24px] md:rounded-[36px] border border-[#608F82]/30 shadow-2xl bg-[#0B1514] relative group">
              <div className="relative w-full aspect-[16/9]">
                <Image
                  src={INTRO_PHILOSOPHY_VISUAL.src}
                  alt={INTRO_PHILOSOPHY_VISUAL.alt}
                  fill
                  sizes="(max-width: 1280px) 100vw, 1280px"
                  className="object-contain object-center group-hover:scale-[1.01] transition-transform duration-700 ease-out"
                  priority
                />
              </div>
            </div>
          </div>

          {/* 7. 이미지 아래 브릿지 결심 문구 (연애 리포트와 동일한 글자 크기 & 디자인) */}
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-sm sm:text-base text-[#E5C378] font-medium tracking-wide">
              당신의 풍요를 바꿀 첫 번째 선택,
            </p>
            <p className="font-elegant font-bold text-lg sm:text-[21px] text-[#FAF7F2] leading-relaxed break-keep mt-2.5">
              나만의 선천코드를 읽는 것에서 시작됩니다.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
