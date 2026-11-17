'use client'

import Image from 'next/image'
import Reveal from '@/components/Reveal'
import { generalAdviceData } from './data'
import { CheckCircle2, FileText, ArrowRight } from 'lucide-react'

/**
 * ══════════════════════════════════════════════════════════════════════
 * POINT 05 · ACTIONABLE PRESCRIPTION (실전 관계 처방 4단계 통합 판매 스토리)
 * ──────────────────────────────────────────────────────────────────────
 * [PART A] 일반적인 연애 조언의 한계 (문제 제기 + 3개 비교 카드)
 * [PART B] 백도화의 해결책과 실천 가치 (다음 선택까지의 행동 가이드)
 * [PART C] 실제 개인 맞춤 처방 샘플 (CHAPTER 08 · PRESCRIPTION SAMPLE)
 * [PART D] 이미지와 감성적인 마무리 (강조 문구 + 한복 여성 비급 이미지 + 글라스 선언문)
 * ══════════════════════════════════════════════════════════════════════
 */
export default function LovePrescriptionSample() {
  return (
    <section id="point-05-prescription" className="mb-36 md:mb-44 scroll-mt-28 md:scroll-mt-36">
      <Reveal>
        {/* ══════════════════════════════════════════════════════════════════ */}
        {/* [PART A] 일반적인 연애 조언의 한계 (문제 제기) */}
        {/* ══════════════════════════════════════════════════════════════════ */}
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-14">
          {/* 전체 POINT 05의 시작을 알리는 단일 상단 라벨 */}
          <span className="block font-elegant text-[12pt] font-semibold tracking-[0.2em] text-[#D9A8A7] uppercase mb-4">
            POINT 05 · ACTIONABLE PRESCRIPTION
          </span>

          <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white mb-6 leading-[1.25] md:leading-[1.3] break-keep whitespace-pre-line">
            {generalAdviceData.mainCopy}
          </h2>

          <p className="text-[18px] text-[#EDE6DA] opacity-75 font-light break-keep max-w-2xl mx-auto leading-relaxed">
            {generalAdviceData.subCopy}
          </p>
        </div>

        {/* PART A: 3개 비교 카드 (평균의 이야기 / 유형의 이야기 / 남의 성공 공식) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-24 md:mb-32">
          {generalAdviceData.cards.map((card, idx) => (
            <div
              key={idx}
              className="gungjung-glass p-8 md:p-10 rounded-[28px] border border-white/10 hover:border-[#B7788D]/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(183, 120, 141, 0.1)] flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono font-bold tracking-widest text-[#D9A8A7]">
                    {card.num}
                  </span>
                  <span className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70">
                    {card.tag}
                  </span>
                </div>
                <h3 className="text-[20px] md:text-[24px] font-elegant font-bold text-white mb-4 leading-snug break-keep group-hover:text-[#D9A8A7] transition-colors">
                  &ldquo;{card.content}&rdquo;
                </h3>
              </div>
              <p className="text-sm md:text-base text-[#EDE6DA]/60 leading-relaxed font-light break-keep pt-4 border-t border-white/5">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        {/* ══════════════════════════════════════════════════════════════════ */}
        {/* [PART B] 백도화의 해결책과 실천 가치 */}
        {/* ══════════════════════════════════════════════════════════════════ */}
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-14">
          <h3 className="text-2xl md:text-[36px] font-elegant font-bold text-white mb-6 leading-[1.25] md:leading-[1.3] break-keep">
            해석에서 끝나지 않습니다.<br className="sm:hidden" />
            <span className="gradient-text-love"> 당신의 다음 선택까지</span>
          </h3>
          <p className="text-[18px] text-[#EDE6DA] opacity-80 font-light leading-relaxed max-w-2xl mx-auto break-keep">
            &ldquo;올해는 남자를 조심하라&rdquo;는 식의 공허한 말은 하지 않습니다.<br className="hidden sm:inline" />
            갈등이 시작되거나 불안이 차오를 때 중심을 지켜줄 실제 행동 가이드와 부족한 오행 에너지를 보완하는 실천 처방을 제시합니다.
          </p>
        </div>

        {/* ══════════════════════════════════════════════════════════════════ */}
        {/* [PART C] 실제 개인 맞춤 처방 샘플 (CHAPTER 08 규격 적용) */}
        {/* ══════════════════════════════════════════════════════════════════ */}
        <div className="max-w-7xl mx-auto gungjung-glass point-box p-8 md:p-12 rounded-[36px] border-2 border-[#B7788D]/40 bg-gradient-to-b from-[#1A0514]/35 via-[#2D0A1E]/20 to-[#0A0514]/35 shadow-2xl relative overflow-hidden mb-24 md:mb-32">
          {/* 상단 샘플 알림 뱃지 (최신 8장 목차 기준 CHAPTER 08로 업데이트) */}
          <div className="flex items-center justify-between pb-6 mb-8 border-b border-white/10">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#D9A8A7] font-bold">
              <FileText className="w-4 h-4" />
              CHAPTER 08 · PRESCRIPTION SAMPLE
            </div>
            <span className="text-[11px] text-white/50 px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
              * 실제 고객 진단 결과가 아닌 샘플 예시입니다.
            </span>
          </div>

          {/* 처방 질문 헤드라인 */}
          <div className="mb-8">
            <span className="text-xs font-mono font-bold text-[#D9A8A7] tracking-wider uppercase block mb-3">
              [진단 질문] 불안 반응 패턴
            </span>
            <h3 className="text-xl md:text-2xl font-elegant font-bold text-white leading-snug break-keep">
              &ldquo;답장이 늦어지는 순간, 당신은 상대의 마음보다 먼저 <br className="hidden sm:inline" />
              <span className="text-[#D9A8A7]">자신의 가치를 의심</span>하고 있지 않은가?&rdquo;
            </h3>
          </div>

          {/* 구체적인 행동 실천 가이드 */}
          <div className="p-6 md:p-8 rounded-2xl bg-black/60 border border-[#B7788D]/30 space-y-4">
            <div className="flex items-center gap-2 text-sm font-bold text-[#D9A8A7]">
              <CheckCircle2 className="w-4 h-4 text-[#B7788D]" />
              백도화 맞춤 실천 행동 처방
            </div>
            <p className="text-base md:text-lg text-[#EDE6DA] font-medium leading-relaxed break-keep">
              불안한 마음에 쫓겨 장문의 메시지를 보내거나 상대를 추궁하기 전,<br className="hidden sm:inline" />
              <span className="text-[#D9A8A7] underline underline-offset-4 decoration-[#B7788D]">
                지금 확인된 객관적 사실
              </span>과 <span className="text-[#D9A8A7] underline underline-offset-4 decoration-[#B7788D]">
                내 불안이 상상해낸 이야기
              </span>를 메모장에 두 줄로 분리해 기록하십시오.
            </p>
            <p className="text-xs md:text-sm text-[#EDE6DA]/60 font-light leading-relaxed break-keep pt-2">
              상대의 침묵은 단지 바쁜 상황(사실)일 수 있지만, 무의식적 방어기제는 &apos;나를 소홀히 여긴다&apos;(상상)로 번역합니다. 이 둘을 분리하는 순간 조급한 감정의 브레이크가 걸립니다.
            </p>
          </div>

          {/* 하단 리포트 안내 */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#EDE6DA]/70 font-light">
            <span>실제 리포트에서는 고객님의 고유 선천코드에 맞춘 3~5가지 맞춤 처방이 제공됩니다.</span>
            <span className="text-[#D9A8A7] font-medium flex items-center gap-1">
              개인 맞춤형 솔루션 <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════════ */}
        {/* [PART D] 이미지와 감성적인 마무리 */}
        {/* ══════════════════════════════════════════════════════════════════ */}
        {/* 1. 이미지 위 기존 상단 강조 카피 */}
        <div className="pt-2 space-y-5 max-w-3xl mx-auto text-center mb-10 md:mb-12">
          <p className="text-[16px] md:text-[17px] text-[#FAF7F2] font-medium leading-relaxed break-keep">
            자신의 사주를 읽고, 선천코드 속 <span className="text-[#D9A8A7] font-semibold">&lsquo;치명적인 무기&rsquo;</span>를 정확히 꿰뚫은 여자는 연애의 판도가 완전히 달라집니다.
          </p>

          <div className="space-y-3 text-[16px] md:text-[17px] text-[#EDE6DA]/90 font-light leading-relaxed break-keep">
            <p className="text-white font-medium">
              남자의 마음을 얻기 위해 애쓰지 않습니다.
            </p>
            <p>
              내 코드가 정렬되는 순간, 남자가 먼저 알아서 스며들고 헌신하는 <span className="text-[#D9A8A7] font-semibold">&lsquo;선택받는 판&rsquo;</span>이 만들어지기 때문입니다.
            </p>
          </div>

          {/* 핵심 카피 */}
          <p className="font-elegant font-medium text-[17px] md:text-[20px] text-[#FAF7F2] leading-relaxed break-keep pt-3">
            &ldquo;언제 사랑받을지를 묻지 마세요.<br className="sm:hidden" />
            <span className="text-[#D9A8A7] font-semibold"> 왜 그런 사랑을 선택해 왔는지부터 읽으세요.</span>&rdquo;
          </p>
        </div>

        {/* 2. 한복 여성과 궁중 비급 가로형 대표 이미지 */}
        <div className="mx-auto mb-10 md:mb-14 w-full max-w-[1280px]">
          <Image
            src="/image/lovereport/the%20power%20of%20my%20love%20code.webp"
            alt="선천코드의 매력을 이해하고 연애의 주도권을 되찾는 백도화 이미지"
            width={1280}
            height={720}
            className="block h-auto w-full rounded-2xl border border-white/10 shadow-2xl"
          />
        </div>

        {/* 3. 이동한 하단 글라스 선언문 */}
        <div className="max-w-3xl mx-auto text-center">
          <div 
            className="love-report-highlight-card p-6 md:p-8 rounded-2xl border text-center space-y-2 backdrop-blur-sm"
            style={{
              background: 'rgba(125, 76, 100, 0.20)',
              borderColor: 'rgba(215, 170, 185, 0.20)',
            }}
          >
            <p className="text-sm md:text-base text-[#D9A8A7] font-bold tracking-wide">
              이제 감정에 휘둘리며 닳아버리는 연애는 끝내세요.
            </p>
            <p className="font-elegant font-medium text-[17px] md:text-[19px] text-white leading-relaxed break-keep">
              당신의 연애 판도를 완전히 뒤바꿀 단 하나의 비급,<br className="hidden sm:inline" />
              <span className="text-[#D9A8A7] font-semibold">백도화 《연애비급》 선천코드 리포트가 당신의 진짜 매력을 깨워드립니다.</span>
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
