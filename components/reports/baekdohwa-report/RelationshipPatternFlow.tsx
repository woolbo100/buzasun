'use client'

import Image from 'next/image'
import Reveal from '@/components/Reveal'
import { patternFlowData } from './data'
import { ArrowRight, ArrowDown } from 'lucide-react'

export default function RelationshipPatternFlow() {
  return (
    <section className="mb-40">
      <Reveal>
        <div className="max-w-4xl mx-auto text-center mb-16 space-y-6">
          <span className="block font-elegant text-[12pt] font-semibold tracking-[0.2em] text-[#D9A8A7] uppercase mb-4">
            RELATIONSHIP STRUCTURE
          </span>
          <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white mb-6 leading-[1.25] md:leading-[1.3] break-keep">
            끌림은 본능입니다.<br />
            그러나 <span className="gradient-text-love">사랑은 선택</span>입니다.
          </h2>
          <p className="text-[17px] md:text-[18px] text-[#EDE6DA] opacity-80 font-light break-keep leading-relaxed">
            {patternFlowData.subCopy}
          </p>

          {/* 추가된 끌림과 설계도 서사 블록 */}
          <div className="pt-4 space-y-5 max-w-3xl mx-auto">
            <div className="space-y-4 text-[16px] md:text-[17px] text-[#EDE6DA]/90 font-light leading-relaxed break-keep">
              <p>
                그동안 우리는 뜨거운 감정의 한복판에 갇혀, 내가 왜 또 같은 상처를 향해 걸어가고 있는지조차 보지 못했습니다.
              </p>
              <p className="text-[#FAF7F2] font-medium leading-relaxed">
                마음공부에서 나를 제3자의 시선으로 바라볼 때 비로소 집착에서 깨어나듯,<br className="hidden sm:inline" />
                내 연애 역시 선천코드라는 객관적인 지도 위에서 내려다볼 때 비로소 무의식의 쳇바퀴를 멈출 수 있습니다.
              </p>
            </div>

            {/* 연애의 반복 패턴을 객관적으로 내려다보는 관찰자 시점 이미지 (16:9 가로형) */}
            <div className="w-full mt-10 mb-10 overflow-hidden rounded-[20px] border border-white/10 shadow-2xl bg-[#130917]">
              <div className="relative w-full aspect-[16/9]">
                <Image
                  src="/image/lovereport/love-blueprint-observer.webp"
                  alt="연애의 반복 패턴을 객관적으로 내려다보는 관찰자 시점 이미지"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 768px"
                  className="object-cover object-center"
                />
              </div>
            </div>

            {/* 하단 카드(01, 02, 03) 연결 브릿지 */}
            <div className="pt-2 pb-2 text-center max-w-2xl mx-auto space-y-2">
              <p className="text-[#FAF7F2] font-medium text-[16px] md:text-[17px] leading-relaxed break-keep">
                이제 감정에 휩쓸리는 당사자가 아니라, 내 연애의 판을 내려다보는 깨어있는 관찰자가 되십시오.<br className="hidden sm:inline" />
                반복의 고리를 과감하게 끊어내십시오.
              </p>
              <p className="text-sm md:text-base text-[#E6BFA9] font-light break-keep">
                아래 3가지 핵심 축을 통해, 당신을 가두던 반복의 알고리즘을 투명하게 해부합니다.
              </p>
            </div>
          </div>
        </div>

        {/* 3단계 도식 컨테이너 */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative items-stretch">
            {patternFlowData.steps.map((step, idx) => (
              <div key={idx} className="relative flex flex-col">
                <div className="gungjung-glass p-8 md:p-10 rounded-[28px] border border-white/10 hover:border-[#B7788D]/40 transition-all duration-300 h-full flex flex-col justify-between group">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-elegant font-bold text-[#D9A8A7]">
                        {step.step}
                      </span>
                      <span className="text-[11px] px-2.5 py-1 rounded-md bg-[#B7788D]/15 border border-[#B7788D]/35 text-[#D9A8A7] border border-[#B7788D]/25 font-medium">
                        {step.tag}
                      </span>
                    </div>
                    <h3 className="text-[20px] md:text-[24px] font-bold text-white mb-3 leading-snug break-keep">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-sm md:text-base text-[#EDE6DA]/70 font-light leading-relaxed break-keep mt-4 pt-4 border-t border-white/5">
                    {step.desc}
                  </p>
                </div>

                {/* 연결 화살표 (데스크톱: 우측 / 모바일: 하단) */}
                {idx < patternFlowData.steps.length - 1 && (
                  <>
                    <div className="hidden md:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-[#1A0514] border border-[#B7788D]/40 items-center justify-center text-[#D9A8A7] shadow-md">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                    <div className="flex md:hidden justify-center my-2 text-[#D9A8A7]">
                      <ArrowDown className="w-5 h-5" />
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 핵심 인용 강조 배너 */}
        <div className="max-w-7xl mx-auto p-8 md:p-12 rounded-[28px] bg-gradient-to-r from-[var(--accent-gold)]/10 via-purple-950/20 to-[var(--accent-gold)]/10 border border-[#B7788D]/30 text-center shadow-xl">
          <p className="text-xl md:text-2xl font-elegant font-bold text-[#E6BFA9] leading-relaxed whitespace-pre-line">
            &ldquo;{patternFlowData.quote}&rdquo;
          </p>
        </div>
      </Reveal>
    </section>
  )
}
