'use client'

import Reveal from '@/components/Reveal'
import { CheckCircle2, FileText, ArrowRight } from 'lucide-react'

export default function CompatibilityPrescriptionSample() {
  return (
    <section className="mb-40">
      <Reveal>
        <div className="max-w-4xl mx-auto text-center mb-12">
          <span className="block text-[12px] font-semibold tracking-[0.2em] text-[#D8BB94] uppercase mb-4">
            ACTIONABLE DIALOGUE PRESCRIPTION [SAMPLE]
          </span>
          <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white mb-6 leading-[1.25] md:leading-[1.3] break-keep">
            단순한 성격 차이 설명이 아닌, <br className="sm:hidden" />
            <span className="gradient-text-reunion">관계 조율 대화 처방전</span>
          </h2>
          <p className="text-[16px] md:text-[18px] text-[#EDE6DA] opacity-80 font-light leading-relaxed max-w-2xl mx-auto break-keep">
            백도화 프리미엄 궁합 리포트의 핵심인 PART 07에서는 비난과 방어 대신,<br className="hidden sm:inline" />
            갈등의 고리를 즉시 끊어낼 실제 대화법과 소통 행동 가이드를 처방합니다.
          </p>
        </div>

        {/* 실제 처방전 형태의 프리미엄 샘플 카드 */}
        <div className="max-w-7xl mx-auto gungjung-glass point-box p-8 md:p-12 rounded-[36px] border-2 border-[#935C6B]/40 bg-gradient-to-b from-[#2D0A1E]/35 via-[#3B0F1B]/20 to-[#0A0514]/35 shadow-2xl relative overflow-hidden">
          {/* 상단 샘플 알림 뱃지 */}
          <div className="flex items-center justify-between pb-6 mb-8 border-b border-white/10">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#D8BB94] font-bold">
              <FileText className="w-4 h-4" />
              PART 07 DIALOGUE PRESCRIPTION [SAMPLE]
            </div>
            <span className="text-[11px] text-white/50 px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
              * 실제 고객 진단 결과가 아닌 샘플 예시입니다.
            </span>
          </div>

          {/* 처방 질문 헤드라인 */}
          <div className="mb-8">
            <span className="text-xs font-mono font-bold text-[#C19B83] tracking-wider uppercase block mb-3">
              [진단 질문] 갈등 대화 악순환 패턴
            </span>
            <h3 className="text-xl md:text-2xl font-elegant font-bold text-white leading-snug break-keep">
              &ldquo;상대는 공격받았다고 느끼고, 나는 무시당했다고 느낀다.<br className="hidden sm:inline" />
              <span className="text-[#D8BB94]">이 대화는 어디서부터 어긋났을까?</span>&rdquo;
            </h3>
          </div>

          {/* 구체적인 행동 실천 가이드 */}
          <div className="p-6 md:p-8 rounded-2xl bg-black/60 border border-[#935C6B]/30 space-y-4">
            <div className="flex items-center gap-2 text-sm font-bold text-[#D8BB94]">
              <CheckCircle2 className="w-4 h-4 text-[#935C6B]" />
              백도화 맞춤 실천 행동 처방
            </div>
            <p className="text-base md:text-lg text-[#EDE6DA] font-medium leading-relaxed break-keep">
              &ldquo;넌 항상 왜 그래?&rdquo;처럼 상대를 단정하고 평가하는 표현 대신,<br className="hidden sm:inline" />
              <span className="text-[#D8BB94] underline underline-offset-4 decoration-[#935C6B]">
                ① 눈에 보인 구체적 사실(행동)
              </span>, <span className="text-[#D8BB94] underline underline-offset-4 decoration-[#935C6B]">
                ② 그때 내가 느낀 주관적 감정
              </span>, <span className="text-[#D8BB94] underline underline-offset-4 decoration-[#935C6B]">
                ③ 구체적으로 원하는 요청 사항
              </span>을 세 단계로 분리하여 말하십시오.
            </p>
            <p className="text-xs md:text-sm text-[#EDE6DA]/60 font-light leading-relaxed break-keep pt-2">
              한 사람은 문제를 해결하고자 서둘러 몰아붙이고, 다른 사람은 비난을 피하고자 입을 닫아버립니다. 평가를 걷어내고 구체적 사실과 요청만 전달할 때, 비로소 상대의 방어벽이 내려갑니다.
            </p>
          </div>

          {/* 하단 리포트 안내 */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#EDE6DA]/70 font-light">
            <span>실제 리포트에서는 두 분의 상호 선천코드 조합에 맞춘 관계 조율 및 소통 처방이 제공됩니다.</span>
            <span className="text-[#D8BB94] font-medium flex items-center gap-1">
              두 사람 맞춤형 솔루션 <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
