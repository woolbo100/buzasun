'use client'

import Reveal from '@/components/Reveal'
import { CheckCircle2, FileText, ArrowRight } from 'lucide-react'

export default function WealthPrescriptionSample() {
  return (
    <section className="mb-40">
      <Reveal>
        <div className="max-w-4xl mx-auto text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full text-[12px] font-bold tracking-[0.25em] bg-[#608F82]/15 border border-[#608F82]/35 text-[#8FB4A4] uppercase mb-6">
            ACTIONABLE WEALTH PRESCRIPTION [SAMPLE]
          </span>
          <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white mb-6 leading-[1.25] md:leading-[1.3] break-keep">
            막연한 부자 마인드셋이 아닌, <br className="sm:hidden" />
            <span className="gradient-text-abundance">현실적인 행동 처방전</span>
          </h2>
          <p className="text-[16px] md:text-[18px] text-[#EDE6DA] opacity-80 font-light leading-relaxed max-w-2xl mx-auto break-keep">
            백도화 선천코드 풍요 리포트의 핵심인 PART 07에서는 비현실적인 요행 대신,<br className="hidden sm:inline" />
            돈 앞에서의 위축과 누수를 즉시 차단할 실제 행동 가이드를 처방합니다.
          </p>
        </div>

        {/* 실제 처방전 형태의 프리미엄 샘플 카드 */}
        <div className="max-w-3xl mx-auto gungjung-glass p-8 md:p-12 rounded-[36px] border-2 border-[#608F82]/40 bg-gradient-to-b from-[#0f241f]/95 via-[#152e27]/40 to-[#0a0514]/95 shadow-2xl relative overflow-hidden">
          {/* 상단 샘플 알림 뱃지 */}
          <div className="flex items-center justify-between pb-6 mb-8 border-b border-white/10">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#8FB4A4] font-bold">
              <FileText className="w-4 h-4" />
              PART 07 WEALTH PRESCRIPTION [SAMPLE]
            </div>
            <span className="text-[11px] text-white/50 px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
              * 실제 고객 진단 결과가 아닌 샘플 예시입니다.
            </span>
          </div>

          {/* 처방 질문 헤드라인 */}
          <div className="mb-8">
            <span className="text-xs font-mono font-bold text-[#C6A477] tracking-wider uppercase block mb-3">
              [진단 질문] 가격 책정 및 가치 인정 패턴
            </span>
            <h3 className="text-xl md:text-2xl font-elegant font-bold text-white leading-snug break-keep">
              &ldquo;가격을 제시하는 순간 작아지는 사람은,<br className="hidden sm:inline" />
              <span className="text-[#C6A477]">자신의 노동에 얼마의 가치</span>를 부여하고 있는가?&rdquo;
            </h3>
          </div>

          {/* 구체적인 행동 실천 가이드 */}
          <div className="p-6 md:p-8 rounded-2xl bg-black/60 border border-[#608F82]/30 space-y-4">
            <div className="flex items-center gap-2 text-sm font-bold text-[#8FB4A4]">
              <CheckCircle2 className="w-4 h-4 text-[#608F82]" />
              백도화 맞춤 실천 행동 처방
            </div>
            <p className="text-base md:text-lg text-[#EDE6DA] font-medium leading-relaxed break-keep">
              가격을 낮추거나 스스로 할인을 제안하기 전,<br className="hidden sm:inline" />
              <span className="text-[#C6A477] underline underline-offset-4 decoration-[#608F82]">
                ① 고객에게 제공하는 본질 가치
              </span>, <span className="text-[#C6A477] underline underline-offset-4 decoration-[#608F82]">
                ② 나의 투입 소요 시간
              </span>, <span className="text-[#C6A477] underline underline-offset-4 decoration-[#608F82]">
                ③ 고객이 최종적으로 얻게 될 실질적 결과
              </span>를 세 가지 항목으로 문서화하십시오.
            </p>
            <p className="text-xs md:text-sm text-[#EDE6DA]/60 font-light leading-relaxed break-keep pt-2">
              자신의 가격을 스스로 깎는 행위는 배려가 아니라 &apos;거절에 대한 공포&apos;에서 비롯된 무의식적 방어기제입니다. 세 가지 객관적 가치를 눈앞에 적어두는 것만으로도 당당한 기준이 세워집니다.
            </p>
          </div>

          {/* 하단 리포트 안내 */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#EDE6DA]/70 font-light">
            <span>실제 리포트에서는 고객님의 타고난 재물 기질과 현재 활동 조건에 맞춘 맞춤 처방이 제공됩니다.</span>
            <span className="text-[#8FB4A4] font-medium flex items-center gap-1">
              개인 맞춤형 솔루션 <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
