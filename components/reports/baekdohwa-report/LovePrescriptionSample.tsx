'use client'

import Reveal from '@/components/Reveal'
import { Sparkles, CheckCircle2, FileText, ArrowRight } from 'lucide-react'

export default function LovePrescriptionSample() {
  return (
    <section className="mb-40">
      <Reveal>
        <div className="max-w-4xl mx-auto text-center mb-12">
          <span className="block font-elegant text-[12pt] font-semibold tracking-[0.2em] text-[#D9A8A7] uppercase mb-4">
            SECTION E · ACTIONABLE PRESCRIPTION
          </span>
          <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white mb-6 leading-[1.25] md:leading-[1.3] break-keep">
            해석에서 끝나지 않습니다.<br className="sm:hidden" />
            <span className="gradient-text-love"> 당신의 다음 선택까지</span>
          </h2>
          <p className="text-[18px] text-[#EDE6DA] opacity-80 font-light leading-relaxed max-w-2xl mx-auto break-keep">
            &ldquo;올해는 남자를 조심하라&rdquo;는 식의 공허한 말은 하지 않습니다.<br className="hidden sm:inline" />
            갈등이 시작되거나 불안이 차오를 때 중심을 지켜줄 실제 행동 가이드와 부족한 오행 에너지를 보완하는 실천 처방을 제시합니다.
          </p>
        </div>

        {/* 실제 처방전 형태의 프리미엄 샘플 카드 */}
        <div className="max-w-7xl mx-auto gungjung-glass point-box p-8 md:p-12 rounded-[36px] border-2 border-[#B7788D]/40 bg-gradient-to-b from-[#1A0514]/35 via-[#2D0A1E]/20 to-[#0A0514]/35 shadow-2xl relative overflow-hidden">
          {/* 상단 샘플 알림 뱃지 */}
          <div className="flex items-center justify-between pb-6 mb-8 border-b border-white/10">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#D9A8A7] font-bold">
              <FileText className="w-4 h-4" />
              PART 07 ACTION PRESCRIPTION [SAMPLE]
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
      </Reveal>
    </section>
  )
}
