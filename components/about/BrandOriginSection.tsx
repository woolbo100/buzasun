'use client'

import React from 'react'
import Reveal from '@/components/Reveal'

export default function BrandOriginSection() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative w-full">
      <div className="max-w-[1280px] mx-auto w-full">
        {/* 1. 신규 영문 라벨 (공통 12pt 규격, 양쪽 가로 구분선) */}
        <Reveal delayMs={100}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-[1px] w-8 bg-[var(--accent-gold)] opacity-40" />
            <span className="text-[12pt] font-elegant font-semibold tracking-[0.25em] text-[var(--accent-gold)] uppercase opacity-90">
              THE ORIGIN OF BAEKDOHWA
            </span>
            <span className="h-[1px] w-8 bg-[var(--accent-gold)] opacity-40" />
          </div>
        </Reveal>

        {/* 2. 신규 메인 제목 (의미 단위 2줄 배치, 붓글씨 서체, 줄간격 1.4, 중앙 정렬) */}
        <Reveal delayMs={150}>
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="about-heading text-2xl sm:text-4xl md:text-5xl font-elegant font-bold text-[#F5F5F5] leading-[1.4] text-center">
              저마다 다른 결을 가진 사람에게는,<br className="hidden sm:inline" />{' '}
              저마다의 해답이 필요하기에
            </h2>
          </div>
        </Reveal>

        {/* 3. 브랜드 탄생 스토리 본문 카드 (차분한 퍼플 반투명 카드, 최대너비 1280px, 본문 1000px 중앙) */}
        <Reveal delayMs={200}>
          <div className="gungjung-glass w-full p-8 sm:p-12 md:p-16 border border-[rgba(216,191,163,0.2)]">
            <div className="max-w-[1000px] mx-auto">
              {/* 본문 에세이 (18px, 줄간격 1.7, 문단 간격 24px, 좌측 정렬) */}
              <div className="space-y-6 text-[18px] leading-[1.7] text-[#EDE6DA] opacity-85 font-light break-keep text-left">
                <p>
                  백도화(白桃花)의 시작에는 하나의 질문이 있었습니다.
                </p>

                <p>
                  <strong className="font-semibold text-[var(--accent-gold)]">
                    사람마다 타고난 기질과 매력, 세상을 바라보는 방식이 다른데, 왜 사랑과 관계, 풍요에 대한 조언은 모두에게 같아야 하는가.
                  </strong>
                </p>

                <p>
                  어떤 사람에게 용기가 필요한 순간이, 다른 사람에게는 멈춤이 필요한 순간입니다. 누군가에게는 새로운 인연을 선택하는 것이 성장이고, 또 누군가에게는 익숙한 관계의 패턴을 알아차리는 것이 변화의 시작입니다. 같은 조언이 누군가에게는 약이 되고, 누군가에게는 같은 상처를 되풀이하게 만드는 이유입니다.
                </p>

                <p>
                  오랜 마음공부와 명상으로 자신을 관찰하며 발견한 것은, <strong className="font-semibold text-[var(--accent-gold)]">삶 속에서 반복되는 감정과 선택의 패턴</strong>이었습니다.
                </p>

                <p>
                  사람은 달라져도 반복되는 관계, 환경은 달라져도 익숙한 감정, 새로운 기회 앞에서도 되풀이되는 선택.
                </p>

                <p>
                  그 반복의 뿌리에는 미처 알아차리지 못한 신념과 경험, 무의식적인 반응이 있었습니다. 그 패턴을 읽지 못하면, 상대가 바뀌어도 같은 장면이 되풀이됩니다.
                </p>

                <p>
                  이러한 탐구는 동양의 명리학에서 심리학과 무의식, NLP, 뇌과학과 브레인트레이닝, 명상에 이르기까지 다양한 분야의 공부로 이어졌습니다.
                </p>

                <p>
                  명리로 타고난 기질을 읽고, 마음에 대한 이해로 살아오며 형성된 패턴을 돌아보고, 새로운 인식과 실천으로 앞으로의 삶을 설계하는 것.
                </p>

                <p>
                  서로 다른 지식의 경계를 넘어 이 관점들을 하나로 엮어낸 결과가 <strong className="font-semibold text-[var(--accent-gold)]">백도화의 선천코드 리포트와 비첩</strong>입니다.
                </p>

                <p>
                  백도화는 미래를 단정하거나 모두에게 같은 정답을 내밀지 않습니다. 자신을 깊이 이해하고, 스스로의 기준으로 사랑과 풍요의 방향을 고를 수 있도록 돕습니다.
                </p>
              </div>

              {/* 4. 하단 가로 구분선 */}
              <div className="gold-divider opacity-25 my-10 max-w-sm mx-auto" />

              {/* 5. 하단 브랜드 철학 강조 문구 (피치 베이지, 붓글씨, 26px, 줄간격 1.4, 중앙 정렬) */}
              <div className="text-center space-y-4">
                <p className="text-xl sm:text-2xl md:text-[26px] font-elegant font-bold text-[var(--accent-gold)] leading-[1.4] break-keep">
                  태어난 나를 이해하고,<br />
                  형성된 나를 알아차리며,<br />
                  앞으로의 나를 스스로 만들어 가는 것.
                </p>
                <p className="text-lg sm:text-xl md:text-[24px] font-elegant font-medium text-[var(--accent-gold)] opacity-90 leading-[1.4] break-keep pt-2">
                  그것이 백도화가 존재하는 이유입니다.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
