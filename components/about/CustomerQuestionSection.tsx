'use client'

import React from 'react'
import Reveal from '@/components/Reveal'
import BaekdohwaFlowerMark from '@/components/BaekdohwaFlowerMark'

export default function CustomerQuestionSection() {
  return (
    <section className="py-20 md:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 relative w-full">
      <div className="max-w-[1280px] mx-auto w-full">
        {/* 독립적인 브랜드 메시지 영역 (1280px 기준선 정렬, 연애비급의 고급 한지 그라데이션 스타일 적용) */}
        <Reveal delayMs={150}>
          <div
            className="relative backdrop-blur-md w-full p-10 sm:p-16 md:p-20 lg:p-24 text-center overflow-hidden rounded-3xl border border-[#D4B2A7]/70 shadow-[0_16px_45px_rgba(0,0,0,0.65)] cursor-default"
            style={{
              background:
                'linear-gradient(to right, rgba(38, 17, 26, 0.85) 0%, rgba(26, 12, 25, 0.85) 40%, rgba(18, 9, 23, 0.85) 70%, rgba(10, 5, 20, 0.85) 100%)',
              boxShadow:
                '0 16px 45px rgba(0, 0, 0, 0.65), inset 0 0 0 1px rgba(212, 178, 167, 0.22)'
            }}
          >
            {/* 전통 닥종이 한지 질감 레이어 (짧고 가는 불규칙 섬유 + 은은한 펄프 얼룩 + 미세 종이 입자) */}
            <svg
              aria-hidden="true"
              className="absolute inset-0 w-full h-full pointer-events-none rounded-[inherit] overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* 불규칙한 짧은 닥나무 섬유 패턴 */}
                <pattern
                  id="hanji-question-fibers"
                  width="260"
                  height="260"
                  patternUnits="userSpaceOnUse"
                >
                  <path d="M179.5 184.8 Q173.5 180.3 166.7 177.1" stroke="#A88880" strokeWidth="0.9" strokeLinecap="round" opacity="0.19" fill="none" />
                  <path d="M200.7 162.7 Q208.7 162.1 216.5 160.1" stroke="#E5C4BB" strokeWidth="0.6" strokeLinecap="round" opacity="0.18" fill="none" />
                  <path d="M53.3 167.2 Q58 173.7 62.7 180.2" stroke="#A88880" strokeWidth="0.6" strokeLinecap="round" opacity="0.18" fill="none" />
                  <path d="M134.5 128.8 Q134.9 134.1 135.1 139.4" stroke="#A88880" strokeWidth="0.7" strokeLinecap="round" opacity="0.15" fill="none" />
                  <path d="M126.9 102.5 Q129.3 104.4 130.9 107" stroke="#240B13" strokeWidth="0.8" strokeLinecap="round" opacity="0.22" fill="none" />
                  <path d="M156.2 195.4 Q155.7 198.3 154.1 200.8" stroke="#D4B2A7" strokeWidth="0.9" strokeLinecap="round" opacity="0.19" fill="none" />
                  <path d="M116.2 145.5 Q108.8 150.3 100.8 153.9" stroke="#E5C4BB" strokeWidth="0.6" strokeLinecap="round" opacity="0.22" fill="none" />
                  <path d="M230.8 63.9 Q231.8 65.2 232.8 66.4" stroke="#A88880" strokeWidth="0.8" strokeLinecap="round" opacity="0.20" fill="none" />
                  <path d="M38.5 29.2 Q38.1 31.1 37 32.8" stroke="#A88880" strokeWidth="0.9" strokeLinecap="round" opacity="0.18" fill="none" />
                  <path d="M4.5 21.2 Q0.3 19.6 -4.1 18.9" stroke="#E5C4BB" strokeWidth="0.6" strokeLinecap="round" opacity="0.19" fill="none" />
                  <path d="M225.4 212.5 Q226.7 211.5 227.6 210.1" stroke="#E5C4BB" strokeWidth="0.5" strokeLinecap="round" opacity="0.17" fill="none" />
                  <path d="M113.2 158.3 Q116.8 161.1 121.1 162.5" stroke="#DFCECA" strokeWidth="0.7" strokeLinecap="round" opacity="0.20" fill="none" />
                  <path d="M43.8 48.6 Q42.7 52.3 40.5 55.4" stroke="#1C080F" strokeWidth="0.8" strokeLinecap="round" opacity="0.30" fill="none" />
                  <path d="M19 205.4 Q21 200.4 23.4 195.6" stroke="#A88880" strokeWidth="0.8" strokeLinecap="round" opacity="0.20" fill="none" />
                  <path d="M226.9 175.8 Q230.9 176.2 234.9 175.4" stroke="#240B13" strokeWidth="0.9" strokeLinecap="round" opacity="0.23" fill="none" />
                  <path d="M228.2 100.2 Q225.7 91.2 224.5 81.9" stroke="#240B13" strokeWidth="0.9" strokeLinecap="round" opacity="0.31" fill="none" />
                  <path d="M84.8 14.1 Q79.5 11.5 74.1 9" stroke="#1C080F" strokeWidth="0.6" strokeLinecap="round" opacity="0.25" fill="none" />
                  <path d="M232.8 166.8 Q238.5 166.7 244.2 167.5" stroke="#95716A" strokeWidth="0.7" strokeLinecap="round" opacity="0.15" fill="none" />
                  <path d="M224.9 233 Q218.4 238.7 212 244.7" stroke="#C9B6A9" strokeWidth="0.6" strokeLinecap="round" opacity="0.18" fill="none" />
                  <path d="M246.1 258.1 Q247.2 255.6 248.7 253.4" stroke="#DFCECA" strokeWidth="0.5" strokeLinecap="round" opacity="0.21" fill="none" />
                  <path d="M123.5 102.7 Q116.3 109.6 109.5 116.8" stroke="#E5C4BB" strokeWidth="0.8" strokeLinecap="round" opacity="0.14" fill="none" />
                  <path d="M74.3 70.2 Q77.4 70.9 80.6 70.6" stroke="#D4B2A7" strokeWidth="0.7" strokeLinecap="round" opacity="0.18" fill="none" />
                  <path d="M107 42.6 Q109.1 42.8 111 41.7" stroke="#835E57" strokeWidth="0.9" strokeLinecap="round" opacity="0.17" fill="none" />
                  <path d="M180.4 61.9 Q178 60.2 175.8 58.3" stroke="#D4B2A7" strokeWidth="0.8" strokeLinecap="round" opacity="0.21" fill="none" />
                  <path d="M257.4 110.8 Q257.1 114.7 256.9 118.5" stroke="#1C080F" strokeWidth="0.5" strokeLinecap="round" opacity="0.24" fill="none" />
                  <path d="M130.3 144.3 Q128.3 147.5 125.6 150.1" stroke="#240B13" strokeWidth="0.6" strokeLinecap="round" opacity="0.24" fill="none" />
                  <path d="M201.4 190.1 Q205.9 187.8 210 184.8" stroke="#E5C4BB" strokeWidth="0.7" strokeLinecap="round" opacity="0.15" fill="none" />
                  <path d="M259.9 220.6 Q260.3 218.7 260.2 216.8" stroke="#E5C4BB" strokeWidth="0.8" strokeLinecap="round" opacity="0.21" fill="none" />
                  <path d="M245.5 114.9 Q251.5 122.5 256.8 130.5" stroke="#1C080F" strokeWidth="0.8" strokeLinecap="round" opacity="0.25" fill="none" />
                  <path d="M146.9 202.7 Q146 200.2 145 197.8" stroke="#240B13" strokeWidth="0.9" strokeLinecap="round" opacity="0.25" fill="none" />
                  <path d="M51.9 178.2 Q52.4 176 53.7 174.2" stroke="#E5C4BB" strokeWidth="0.6" strokeLinecap="round" opacity="0.18" fill="none" />
                  <path d="M98.1 99.5 Q99.5 94.4 101.1 89.3" stroke="#835E57" strokeWidth="0.5" strokeLinecap="round" opacity="0.17" fill="none" />
                  <path d="M64.2 46.3 Q59.8 46.6 55.4 46.5" stroke="#E5C4BB" strokeWidth="0.9" strokeLinecap="round" opacity="0.14" fill="none" />
                  <path d="M248.4 113 Q249.8 109.8 250.5 106.5" stroke="#DFCECA" strokeWidth="0.6" strokeLinecap="round" opacity="0.20" fill="none" />
                  <path d="M48.7 15.5 Q53.6 17.6 58.4 19.7" stroke="#1C080F" strokeWidth="0.9" strokeLinecap="round" opacity="0.28" fill="none" />
                  <path d="M64.6 14.8 Q66.5 16.3 68.1 18" stroke="#DFCECA" strokeWidth="0.7" strokeLinecap="round" opacity="0.21" fill="none" />
                  <path d="M145.7 26.9 Q147.5 31 149.6 35" stroke="#1C080F" strokeWidth="0.8" strokeLinecap="round" opacity="0.30" fill="none" />
                  <path d="M104.5 109 Q107.9 110.4 111.5 110.7" stroke="#DFCECA" strokeWidth="0.6" strokeLinecap="round" opacity="0.14" fill="none" />
                  <path d="M247.3 121.5 Q247.1 123.3 246.5 125" stroke="#C9B6A9" strokeWidth="0.6" strokeLinecap="round" opacity="0.15" fill="none" />
                  <path d="M43.6 64.4 Q40.7 67.1 38.6 70.4" stroke="#240B13" strokeWidth="0.6" strokeLinecap="round" opacity="0.27" fill="none" />
                  <path d="M213.9 157.5 Q206.4 150.8 199.7 143.4" stroke="#95716A" strokeWidth="0.7" strokeLinecap="round" opacity="0.17" fill="none" />
                  <path d="M192.7 35.9 Q191.8 45 190.3 53.9" stroke="#D4B2A7" strokeWidth="0.6" strokeLinecap="round" opacity="0.18" fill="none" />
                  <path d="M186.6 39.7 Q188.4 46.8 189.2 54.1" stroke="#2C0E18" strokeWidth="0.9" strokeLinecap="round" opacity="0.30" fill="none" />
                  <path d="M213.7 233.3 Q216.9 230.1 220.7 227.5" stroke="#DFCECA" strokeWidth="0.8" strokeLinecap="round" opacity="0.17" fill="none" />
                  <path d="M82.3 17.5 Q85.4 16.9 88 15.2" stroke="#16070D" strokeWidth="0.6" strokeLinecap="round" opacity="0.31" fill="none" />
                  <path d="M43.5 46.4 Q46.7 41.9 49.8 37.4" stroke="#DFCECA" strokeWidth="0.6" strokeLinecap="round" opacity="0.18" fill="none" />
                  <path d="M10.1 226.5 Q11 225.1 12.4 224.2" stroke="#E5C4BB" strokeWidth="0.7" strokeLinecap="round" opacity="0.21" fill="none" />
                  <path d="M186.7 35.6 Q189.5 37.3 192.5 38.4" stroke="#C9B6A9" strokeWidth="0.8" strokeLinecap="round" opacity="0.16" fill="none" />
                  <path d="M168.8 80.3 Q167 76.3 166 72.1" stroke="#C9B6A9" strokeWidth="0.7" strokeLinecap="round" opacity="0.19" fill="none" />
                  <path d="M145.3 57 Q144 55.8 142.4 55.1" stroke="#835E57" strokeWidth="0.8" strokeLinecap="round" opacity="0.17" fill="none" />
                  <path d="M40.2 206.5 Q44.2 203 47.2 198.7" stroke="#16070D" strokeWidth="0.5" strokeLinecap="round" opacity="0.25" fill="none" />
                  <path d="M3.8 21.9 Q2.2 25.2 -0.1 28.1" stroke="#C9B6A9" strokeWidth="0.6" strokeLinecap="round" opacity="0.18" fill="none" />
                  <path d="M178.4 82.5 Q180.3 79.5 182 76.4" stroke="#835E57" strokeWidth="0.6" strokeLinecap="round" opacity="0.19" fill="none" />
                  <path d="M121.9 252.3 Q122.8 246.7 124.7 241.5" stroke="#D4B2A7" strokeWidth="0.8" strokeLinecap="round" opacity="0.16" fill="none" />
                  <path d="M214.6 146.5 Q213.6 150.6 213 154.8" stroke="#16070D" strokeWidth="0.9" strokeLinecap="round" opacity="0.30" fill="none" />
                  <path d="M224.5 69.9 Q226.6 67.8 229.5 67.1" stroke="#DFCECA" strokeWidth="0.5" strokeLinecap="round" opacity="0.16" fill="none" />
                  <path d="M191.2 79.5 Q188.2 78.2 184.9 78.2" stroke="#DFCECA" strokeWidth="0.9" strokeLinecap="round" opacity="0.14" fill="none" />
                  <path d="M86.9 11.1 Q88.7 15.5 90 20.1" stroke="#1C080F" strokeWidth="0.5" strokeLinecap="round" opacity="0.31" fill="none" />
                  <path d="M249.5 41.7 Q245.5 44.3 241.3 46.7" stroke="#E5C4BB" strokeWidth="0.6" strokeLinecap="round" opacity="0.14" fill="none" />
                  <path d="M118.9 139.7 Q115.6 142.7 112.3 145.7" stroke="#DFCECA" strokeWidth="0.9" strokeLinecap="round" opacity="0.14" fill="none" />
                  <path d="M118.8 147.4 Q114.9 143.4 110.7 139.6" stroke="#C9B6A9" strokeWidth="0.9" strokeLinecap="round" opacity="0.21" fill="none" />
                  <path d="M113.3 204 Q109.8 199.2 106 194.7" stroke="#E5C4BB" strokeWidth="0.5" strokeLinecap="round" opacity="0.16" fill="none" />
                  <path d="M111.5 185.8 Q113.9 184.2 116.2 182.6" stroke="#D4B2A7" strokeWidth="0.6" strokeLinecap="round" opacity="0.14" fill="none" />
                  <path d="M125.4 110.7 Q120.5 104.3 115.8 97.7" stroke="#16070D" strokeWidth="0.6" strokeLinecap="round" opacity="0.28" fill="none" />
                  <path d="M31.5 202.8 Q26.7 201.5 22.3 199.2" stroke="#C9B6A9" strokeWidth="0.6" strokeLinecap="round" opacity="0.16" fill="none" />
                  <path d="M24.2 83.7 Q26.2 86 28.6 88" stroke="#A88880" strokeWidth="0.9" strokeLinecap="round" opacity="0.14" fill="none" />
                  <path d="M82.9 257.8 Q79.6 253.5 75.4 250.2" stroke="#2C0E18" strokeWidth="0.6" strokeLinecap="round" opacity="0.22" fill="none" />
                  <path d="M30.5 252.5 Q34 261.1 38.8 269.1" stroke="#E5C4BB" strokeWidth="0.9" strokeLinecap="round" opacity="0.17" fill="none" />
                  <path d="M121.5 15.4 Q122.7 19.8 124.1 24.2" stroke="#C9B6A9" strokeWidth="0.6" strokeLinecap="round" opacity="0.18" fill="none" />
                  <path d="M71.6 51.1 Q72.4 54.2 72.9 57.4" stroke="#DFCECA" strokeWidth="0.7" strokeLinecap="round" opacity="0.18" fill="none" />
                  <path d="M258.7 67.2 Q259.9 69.8 261.1 72.4" stroke="#C9B6A9" strokeWidth="0.5" strokeLinecap="round" opacity="0.14" fill="none" />
                  <path d="M50.4 47.2 Q51.9 49.8 53.8 52.1" stroke="#C9B6A9" strokeWidth="0.8" strokeLinecap="round" opacity="0.21" fill="none" />
                  <path d="M45.6 1.3 Q42.7 2.6 40.1 4.3" stroke="#DFCECA" strokeWidth="0.7" strokeLinecap="round" opacity="0.19" fill="none" />
                  <path d="M229 218 Q234.2 217.9 239.5 217.4" stroke="#A88880" strokeWidth="0.5" strokeLinecap="round" opacity="0.20" fill="none" />
                  <path d="M20.6 204.5 Q21.3 207.3 23.1 209.6" stroke="#16070D" strokeWidth="0.7" strokeLinecap="round" opacity="0.30" fill="none" />
                  <path d="M230.4 146.6 Q232.9 151 236.5 154.5" stroke="#A88880" strokeWidth="0.6" strokeLinecap="round" opacity="0.19" fill="none" />
                  <path d="M14.5 234.8 Q14.4 237.4 13.8 239.9" stroke="#16070D" strokeWidth="0.6" strokeLinecap="round" opacity="0.23" fill="none" />
                  <path d="M49.3 130.5 Q49.7 132.8 50.5 135" stroke="#1C080F" strokeWidth="0.7" strokeLinecap="round" opacity="0.24" fill="none" />
                  <path d="M105.3 230.2 Q113.6 233.2 121.8 236.3" stroke="#16070D" strokeWidth="0.6" strokeLinecap="round" opacity="0.26" fill="none" />
                  <path d="M11.1 111.8 Q10.1 109.8 9.6 107.6" stroke="#16070D" strokeWidth="0.9" strokeLinecap="round" opacity="0.30" fill="none" />
                  <path d="M31.9 135.4 Q30.2 138.6 28.4 141.7" stroke="#D4B2A7" strokeWidth="0.5" strokeLinecap="round" opacity="0.20" fill="none" />
                  <path d="M98.6 220.7 Q90.4 218.7 82.7 215.4" stroke="#A88880" strokeWidth="0.8" strokeLinecap="round" opacity="0.16" fill="none" />
                  <path d="M8.3 86.4 Q8.5 81.2 9.1 76" stroke="#835E57" strokeWidth="0.9" strokeLinecap="round" opacity="0.20" fill="none" />
                  <path d="M192.3 106.9 Q191.7 114.5 192 122.1" stroke="#835E57" strokeWidth="0.6" strokeLinecap="round" opacity="0.18" fill="none" />
                  <path d="M52.9 15.8 Q48.5 17.7 44.4 20.1" stroke="#835E57" strokeWidth="0.7" strokeLinecap="round" opacity="0.19" fill="none" />
                </pattern>

                {/* 은은한 한지 명암 얼룩 (닥나무 펄프 구름결) */}
                <filter id="hanji-question-cloudy-pulp">
                  <feTurbulence type="fractalNoise" baseFrequency="0.012 0.018" numOctaves="3" result="pulpNoise" />
                  <feColorMatrix type="matrix" values="1 0 0 0 0.85  0 1 0 0 0.72  0 0 1 0 0.68  0 0 0 0.05 0" />
                </filter>

                {/* 미세 종이 입자 (한지 표면 질감) */}
                <filter id="hanji-question-paper-grain">
                  <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="3" result="paperTooth" />
                  <feColorMatrix type="matrix" values="1 0 0 0 0.8  0 1 0 0 0.7  0 0 1 0 0.65  0 0 0 0.035 0" />
                </filter>
              </defs>

              {/* 1단계: 닥나무 펄프 명암 얼룩 */}
              <rect width="100%" height="100%" filter="url(#hanji-question-cloudy-pulp)" />

              {/* 2단계: 미세 종이 입자 */}
              <rect width="100%" height="100%" filter="url(#hanji-question-paper-grain)" />

              {/* 3단계: 밀도 높게 흩뿌려진 짧은 닥나무 섬유들 */}
              <rect width="100%" height="100%" fill="url(#hanji-question-fibers)" />
            </svg>

            {/* 은은한 백도화 꽃 워터마크 배경 (기존 도화 워터마크 유지) */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.035] flex items-center justify-center">
              <BaekdohwaFlowerMark size={480} watermark={true} />
            </div>

            {/* 메인 헤드라인 (PC 기준 42~48px 품격 있는 명조 계열) */}
            <div className="relative z-10 max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl md:text-[44px] lg:text-[48px] font-elegant font-bold leading-tight sm:leading-snug mb-8 text-[#F5F5F5] tracking-tight">
                수많은 연애 조언을 들어도,<br />
                <span className="text-[#F5F5F5] underline decoration-[rgba(212,178,167,0.4)] decoration-1 underline-offset-8">
                  왜 나의 사랑은 달라지지 않을까요?
                </span>
              </h2>

              {/* 얇고 은은한 골드 구분선 */}
              <div className="gold-divider max-w-xs mx-auto my-8 opacity-40" />

              {/* 서브카피 (20px 전후, 가독성 높은 폰트와 넉넉한 자간) */}
              <p className="text-base sm:text-lg md:text-[20px] font-light text-[#EDE6DA] leading-relaxed opacity-90 max-w-2xl mx-auto">
                사람마다 기질도, 매력도,<br className="sm:hidden" />{' '}
                사랑에 끌리는 이유도 다르기 때문입니다.
              </p>

              {/* 하단 여백 및 얇은 장식점 */}
              <div className="my-10 flex items-center justify-center gap-2 opacity-30">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-gold)]" />
                <span className="w-8 h-[1px] bg-[var(--accent-gold)]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-gold)]" />
              </div>

              {/* 핵심 강조 메시지 (32~36px 기준, 선천코드 앤티크 샴페인 골드 강조) */}
              <div className="space-y-4">
                <p className="text-2xl sm:text-3xl md:text-[34px] font-elegant font-bold leading-relaxed text-[#F5F5F5] tracking-wide">
                  사랑의 공식을 배우기 전에,<br />
                  <span className="text-[var(--accent-gold)] drop-shadow-[0_0_12px_rgba(212,178,167,0.3)]">
                    당신의 선천코드
                  </span>
                  를 읽으십시오.
                </p>

                {/* 백도화 브랜드 한자·한글 낙관 */}
                <div className="pt-4">
                  <span className="inline-block text-xs sm:text-sm font-elegant tracking-[0.35em] text-[var(--accent-gold)] opacity-75 uppercase">
                    白桃花 · 백도화
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
