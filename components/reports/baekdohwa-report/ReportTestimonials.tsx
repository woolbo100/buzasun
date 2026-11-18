'use client'

import Reveal from '@/components/Reveal'
import { Sparkles, Star, CheckCircle2, Quote } from 'lucide-react'

export default function ReportTestimonials() {
  const reviews = [
    {
      num: '01',
      tag: '#01 반복 패턴 자각',
      headline: '“왜 늘 같은 결말인지 뼈아프게 이해됐습니다.”',
      beforeAfter: {
        prefix: '뻔한 사주풀이일 줄 알았는데, ',
        highlight: '제가 불안할 때마다 상대에게 매달리며 관계를 망치는 선천적 기질을 정확히 짚어줘서 소름 돋았어요.',
        suffix: ' 읽는 내내 제 연애 흑역사가 파노라마처럼 정리되는 기분이었습니다.'
      },
      author: '박*진님',
      meta: '20대 후반 · 단기 연애 반복'
    },
    {
      num: '02',
      tag: '#02 사랑의 주도권 회복',
      headline: '“상대 눈치 보느라 갉아먹던 감정을 멈췄어요.”',
      beforeAfter: {
        prefix: '연락 하나에 하루 종일 흔들리던 제가, 리포트의 처방대로 제 경계를 세우기 시작했습니다. ',
        highlight: '이제는 상대의 반응이 아니라 제 마음이 편안한지를 먼저 묻게 됩니다.',
        suffix: ''
      },
      author: '이*서님',
      meta: '30대 중반 · 연애 공백기'
    },
    {
      num: '03',
      tag: '#03 나만의 필터 정립',
      headline: '“다정함 뒤에 숨은 회피형을 단번에 걸러냈습니다.”',
      beforeAfter: {
        prefix: '예전 같았으면 또 설레서 뛰어들었을 상대였는데, ',
        highlight: '리포트에서 알려준 제 치명적 약점과 맞지 않는 사람이라는 게 명확히 보였어요.',
        suffix: ' 덕분에 소모적인 썸을 끝내고 저를 온전히 아껴주는 사람을 만났습니다.'
      },
      author: '최*아님',
      meta: '30대 초반 · 재회 고민 후 새 출발'
    }
  ]

  return (
    <section className="mb-32 md:mb-40">
      <Reveal>
        {/* 1. 섹션 헤더 (타이틀 영역) */}
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-14 px-4">
          <span className="block font-elegant text-xs md:text-sm font-semibold tracking-[0.25em] text-[#D9A8A7] uppercase mb-4">
            CLIENT REVIEWS
          </span>
          <h2 className="text-2xl md:text-[34px] lg:text-[36px] font-elegant font-bold text-white mb-4 leading-[1.3] break-keep">
            먼저 리포트를 열어본 분들의<br className="sm:hidden" />
            <span className="gradient-text-love"> 실제 변화 기록</span>
          </h2>
          <p className="text-sm md:text-base text-[#EDE6DA]/75 font-light leading-relaxed max-w-2xl mx-auto break-keep mb-8">
            막연한 위로가 아닌, 내 선천코드를 직면한 순간 시작된 연애의 전환점입니다.
          </p>

          {/* 핵심 요약 배지 (신뢰도 1줄 배지) */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#B7788D]/15 border border-[#B7788D]/35 text-xs md:text-sm text-[#D9A8A7] font-medium shadow-lg backdrop-blur-sm">
            <span className="flex items-center gap-1 text-amber-200 font-bold">
              <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
              만족도 4.9 / 5.0
            </span>
            <span className="opacity-40 text-white/50">·</span>
            <span>재구매·지인 추천율 94%</span>
            <span className="opacity-40 text-white/50">·</span>
            <span className="text-[#FAF6EE]/90">평균 정독 시간 45분+</span>
          </div>
        </div>

        {/* 2. 후기 카드 3개 (모바일: 세로 1열 스택 / PC: 3열 그리드) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="gungjung-glass p-8 md:p-9 rounded-[32px] border border-[#B7788D]/35 bg-gradient-to-b from-[#2A0E22]/50 via-[#1C091A]/40 to-[#100612]/60 flex flex-col justify-between group hover:border-[#B7788D]/60 transition-all duration-300 hover:-translate-y-1 shadow-xl relative overflow-hidden"
            >
              {/* 은은한 배경 오라 */}
              <div className="absolute top-0 right-0 w-28 h-28 bg-[#B7788D]/10 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform" />

              <div>
                {/* 1. 변화 태그 (뱃지) + 별점 */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-mono font-bold tracking-wider px-3 py-1 rounded-full bg-[#B7788D]/15 border border-[#B7788D]/30 text-[#D9A8A7]">
                    {rev.tag}
                  </span>
                  <div className="flex items-center gap-0.5 text-amber-300">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-300" />
                    ))}
                  </div>
                </div>

                {/* 2. 한 줄 핵심 헤드카피 (볼드) */}
                <h3 className="text-lg md:text-[20px] font-bold text-white leading-snug break-keep mb-4 group-hover:text-[#FAF6EE] transition-colors">
                  {rev.headline}
                </h3>

                {/* 3 & 4. Before → After 본문 + 하이라이트 밑줄/강조 */}
                <p className="text-[15px] md:text-[16px] text-[#EDE6DA]/85 font-light leading-[1.68] break-keep">
                  {rev.beforeAfter.prefix}
                  <span className="bg-[#B7788D]/25 text-[#FAF6EE] font-medium px-1 py-0.5 rounded border-b border-[#D9A8A7]/80 inline decoration-clone">
                    {rev.beforeAfter.highlight}
                  </span>
                  {rev.beforeAfter.suffix}
                </p>
              </div>

              {/* 5. 작성자 정보 (닉네임 + 연령대 + 연애 상황 + 구매인증) */}
              <div className="mt-7 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#EDE6DA]/70">
                <div className="flex items-center gap-1.5">
                  <span className="font-semibold text-white">{rev.author}</span>
                  <span className="text-white/30">·</span>
                  <span className="text-xs text-[#EDE6DA]/60">{rev.meta}</span>
                </div>
                <span className="inline-flex items-center gap-1 text-[11px] text-[#D9A8A7] font-medium">
                  <CheckCircle2 className="w-3 h-3 text-[#D9A8A7]" />
                  구매자 인증
                </span>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
