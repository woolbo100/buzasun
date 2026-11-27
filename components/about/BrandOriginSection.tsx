'use client'

import React from 'react'
import Reveal from '@/components/Reveal'
import Image from 'next/image'

export default function BrandOriginSection() {
  return (
    <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 relative w-full">
      <div className="max-w-[1280px] mx-auto w-full">
        {/* 1. 신규 영문 라벨 (공통 12pt 규격, 양쪽 가로 구분선) */}
        <Reveal delayMs={100}>
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="h-[1px] w-8 bg-[var(--accent-gold)] opacity-40" />
            <span className="text-[12pt] font-elegant font-semibold tracking-[0.25em] text-[var(--accent-gold)] uppercase opacity-90">
              THE ORIGIN OF BAEKDOHWA
            </span>
            <span className="h-[1px] w-8 bg-[var(--accent-gold)] opacity-40" />
          </div>
        </Reveal>

        {/* 2. 신규 메인 제목 (의미 단위 2줄 배치, 붓글씨 서체, 줄간격 1.4, 중앙 정렬) */}
        <Reveal delayMs={150}>
          <div className="text-center mb-10 sm:mb-12 max-w-4xl mx-auto">
            <h2 className="about-heading text-2xl sm:text-4xl md:text-5xl font-elegant font-bold text-[#F5F5F5] leading-[1.4] text-center">
              저마다 다른 결을 가진 사람에게는,<br className="hidden sm:inline" />{' '}
              저마다의 해답이 필요하기에
            </h2>
          </div>
        </Reveal>

        {/* 3. 브랜드 탄생 스토리 서책형 한지 카드 (최대 너비 1280px, origin-hanji-v2.webp 단일 한지 배경, 경계선 없음) */}
        <Reveal delayMs={200}>
          <div 
            className="relative w-full rounded-[14px] md:rounded-[18px] overflow-hidden"
            style={{
              backgroundColor: '#F5DBB9',
            }}
          >
            {/* 3-1. 단일 16:9 한지 배경 이미지 (분할 없음, 경계선 없음, 제본·골드테두리·복숭아꽃 원본 비율 보존) */}
            <div className="absolute inset-0 z-0 pointer-events-none">
              <Image
                src="/image/origin-hanji-v2.webp"
                alt="백도화 한지 서책 배경"
                fill
                priority
                className="object-cover object-center select-none"
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
            </div>

            {/* 3-2. 카드 본문 콘텐츠 (z-10, 상하 패딩 40~48px, 가로공간 최적화, 문단 간격 8~10px/16px) */}
            <div className="relative z-10 w-full py-10 sm:py-12 pl-6 sm:pl-14 md:pl-20 lg:pl-24 pr-6 sm:pr-10 md:pr-14 lg:pr-18">
              <div className="max-w-[1040px] mx-auto">
                {/* 본문 에세이 (18px 유지, 줄간격 1.7 유지, 일반 문단 간격 8~10px, 주요 전환부 16px, 먹갈색 본문, 딥 버건디 강조) */}
                <div className="text-[17px] sm:text-[18px] leading-[1.7] text-[#493A35] font-normal break-keep text-left">
                  <p className="mb-2 sm:mb-2.5">
                    백도화(白桃花)의 시작에는 하나의 질문이 있었습니다.
                  </p>

                  <p className="mb-2 sm:mb-2.5">
                    <strong className="font-semibold text-[#6B2E3A]">
                      사람마다 타고난 기질과 매력, 세상을 바라보는 방식이 다른데, 왜 사랑과 관계, 풍요에 대한 조언은 모두에게 같아야 하는가.
                    </strong>
                  </p>

                  <p className="mb-4">
                    어떤 사람에게 용기가 필요한 순간이, 다른 사람에게는 멈춤이 필요한 순간입니다. 누군가에게는 새로운 인연을 선택하는 것이 성장이고, 또 누군가에게는 익숙한 관계의 패턴을 알아차리는 것이 변화의 시작입니다. 같은 조언이 누군가에게는 약이 되고, 누군가에게는 같은 상처를 되풀이하게 만드는 이유입니다.
                  </p>

                  {/* 주요 내용 구분 여백 16px (mb-4 적용 후 전환) */}
                  <p className="mb-2 sm:mb-2.5">
                    오랜 마음공부와 명상으로 자신을 관찰하며 발견한 것은, <strong className="font-semibold text-[#6B2E3A]">삶 속에서 반복되는 감정과 선택의 패턴</strong>이었습니다.
                  </p>

                  <p className="mb-2 sm:mb-2.5">
                    사람은 달라져도 반복되는 관계, 환경은 달라져도 익숙한 감정, 새로운 기회 앞에서도 되풀이되는 선택.
                  </p>

                  <p className="mb-4">
                    그 반복의 뿌리에는 미처 알아차리지 못한 신념과 경험, 무의식적인 반응이 있었습니다. 그 패턴을 읽지 못하면, 상대가 바뀌어도 같은 장면이 되풀이됩니다.
                  </p>

                  {/* 주요 내용 구분 여백 16px (mb-4 적용 후 전환) */}
                  <p className="mb-2 sm:mb-2.5">
                    이러한 탐구는 동양의 명리학에서 심리학과 무의식, NLP, 뇌과학과 브레인트레이닝, 명상에 이르기까지 다양한 분야의 공부로 이어졌습니다.
                  </p>

                  <p className="mb-2 sm:mb-2.5">
                    명리로 타고난 기질을 읽고, 마음에 대한 이해로 살아오며 형성된 패턴을 돌아보고, 새로운 인식과 실천으로 앞으로의 삶을 설계하는 것.
                  </p>

                  <p className="mb-2 sm:mb-2.5">
                    서로 다른 지식의 경계를 넘어 이 관점들을 하나로 엮어낸 결과가 <strong className="font-semibold text-[#6B2E3A]">백도화의 선천코드 리포트와 비첩</strong>입니다.
                  </p>

                  <p>
                    백도화는 미래를 단정하거나 모두에게 같은 정답을 내밀지 않습니다. 자신을 깊이 이해하고, 스스로의 기준으로 사랑과 풍요의 방향을 고를 수 있도록 돕습니다.
                  </p>
                </div>

                {/* 4. 하단 가로 구분선 (은은한 딥 버건디 라인, 콤팩트 여백) */}
                <div className="w-24 sm:w-28 h-[1px] bg-[#6B2E3A] opacity-25 my-3.5 sm:my-4 mx-auto" />

                {/* 5. 하단 브랜드 철학 강조 문구 (딥 버건디 #6B2E3A, 붓글씨, 중앙 정렬, 콤팩트 여백) */}
                <div className="text-center space-y-1">
                  <p className="text-xl sm:text-2xl md:text-[25px] font-elegant font-bold text-[#6B2E3A] leading-[1.35] break-keep">
                    태어난 나를 이해하고,<br />
                    형성된 나를 알아차리며,<br />
                    앞으로의 나를 스스로 만들어 가는 것.
                  </p>
                  <p className="text-base sm:text-lg md:text-[21px] font-elegant font-bold text-[#6B2E3A] opacity-95 leading-[1.35] break-keep pt-0.5">
                    그것이 백도화가 존재하는 이유입니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
