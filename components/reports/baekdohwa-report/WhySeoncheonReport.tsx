'use client'

import Reveal from '@/components/Reveal'

export default function WhySeoncheonReport() {
  const differentiators = [
    {
      num: '01',
      title: '운세 예측보다 자기이해',
      desc: '나의 타고난 매력과 관계 성향을 깊이 들여다봅니다.',
    },
    {
      num: '02',
      title: '획일적인 풀이보다 개인 분석',
      desc: '나의 선천코드와 관계 특성을 바탕으로 개인별 해석을 제공합니다.',
    },
    {
      num: '03',
      title: '해석에서 끝나지 않는 실전 처방',
      desc: '관계에서 지켜야 할 기준과 구체적인 행동 전략까지 제안합니다.',
    },
  ]

  return (
    <section className="mb-28 md:mb-36">
      <Reveal>
        <div className="max-w-[1280px] mx-auto text-center">
          {/* 1. 작은 섹션 라벨 */}
          <span className="block font-elegant text-[12pt] font-semibold tracking-[0.2em] text-[#D9A8A7] uppercase mb-4">
            WHY SEONCHEON CODE
          </span>

          {/* 2. 메인 제목 */}
          <h2 className="text-2xl md:text-[36px] font-elegant font-bold text-white mb-10 md:mb-14 leading-[1.3] break-keep">
            왜, <span className="gradient-text-love">선천코드 연애 리포트</span>인가?
          </h2>

          {/* 3. 운세와 백도화의 질문 대비 블록 */}
          <div className="max-w-4xl mx-auto mb-10 md:mb-12 grid grid-cols-1 sm:grid-cols-2 gap-5 text-left">
            {/* 일반 운세의 질문 */}
            <div className="p-6 md:p-8 rounded-2xl bg-black/25 border border-white/10 backdrop-blur-sm flex flex-col justify-between">
              <span className="text-xs font-semibold text-white/50 tracking-wider uppercase mb-2">
                일반 운세의 질문
              </span>
              <p className="text-[15px] md:text-[16px] text-white/70 font-light leading-relaxed">
                운세는 묻습니다.<br />
                <span className="text-white/90 font-medium">&ldquo;언제 사랑이 찾아올까요?&rdquo;</span>
              </p>
            </div>

            {/* 백도화의 질문 */}
            <div 
              className="p-6 md:p-8 rounded-2xl border backdrop-blur-sm flex flex-col justify-between"
              style={{
                background: 'rgba(125, 76, 100, 0.28)',
                borderColor: 'rgba(215, 170, 185, 0.28)',
              }}
            >
              <span className="text-xs font-semibold text-[#D9A8A7] tracking-wider uppercase mb-2">
                백도화의 본질적인 질문
              </span>
              <p className="text-[15px] md:text-[16px] text-[#FAF7F2] font-medium leading-relaxed">
                백도화는 묻습니다.<br />
                <span className="text-[#E6BFA9] font-bold text-[17px] md:text-[18px]">&ldquo;왜 당신은 그런 사랑을 선택했을까요?&rdquo;</span>
              </p>
            </div>
          </div>

          {/* 4. 설명 본문 */}
          <div className="max-w-3xl mx-auto space-y-3 text-[17px] md:text-[18px] text-[#EDE6DA] opacity-85 font-light leading-[1.8] break-keep mb-12">
            <p>
              누군가를 언제 만날지보다 중요한 것은,<br className="hidden sm:inline" />
              그 사람 앞에서 내가 어떤 모습이 되는가입니다.
            </p>
            <p>
              나의 매력은 어디에서 빛나고, 어떤 끌림 앞에서 판단이 흐려지며,<br className="hidden sm:inline" />
              어떤 관계에서 나를 잃기 쉬운가.
            </p>
          </div>

          {/* 5. 가장 강조할 문장 (충분한 상하 여백과 큰 타이포그래피) */}
          <div className="my-10 md:my-14 py-8 md:py-10 border-y border-[#B49A70]/25 max-w-4xl mx-auto">
            <p className="font-elegant font-bold text-xl sm:text-2xl md:text-[28px] text-white leading-relaxed break-keep">
              &ldquo;연애 조언은 넘쳐납니다.<br className="sm:hidden" />
              <span className="gradient-text-love"> 당신만의 처방전은 없었습니다.</span>&rdquo;
            </p>
          </div>

          {/* 6. 리포트 소개 문구 */}
          <div className="max-w-3xl mx-auto space-y-4 text-[16px] md:text-[17px] text-[#EDE6DA] opacity-90 font-light leading-[1.8] break-keep mb-8">
            <p>
              백도화 선천코드 연애 리포트는 타고난 기질을 바탕으로 나의 매력과 관계의 그림자, 잘 맞는 상대와 주의할 유형을 살펴봅니다.
            </p>
            <p>
              그리고 나만의 연애 기준과 실제 관계에서 활용할 수 있는 실천 전략을 제안합니다.
            </p>
            <div className="pt-2">
              <p className="font-elegant font-semibold text-[17px] md:text-[19px] text-[#FAF7F2] leading-[1.7] break-keep">
                &ldquo;찍어낸 듯 똑같은 사주 풀이는 이제 그만.<br className="hidden sm:inline" />
                <span className="text-[#E6BFA9]"> 당신의 만세력 여섯 글자(또는 여덟 글자)로 빚어낸 45~50페이지 분량의 1:1 맞춤형 왕실 비급 처방서</span>&rdquo;
              </p>
            </div>
          </div>

          {/* 6-1. 브랜드 해석 관점 라벨 */}
          <div className="text-center max-w-xl mx-auto mb-12 md:mb-16">
            <div className="inline-flex flex-col items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#B7788D]/10 border border-[#B7788D]/25">
              <span className="text-[12px] md:text-[13px] font-medium tracking-[0.12em] text-[#E6BFA9] break-keep leading-relaxed">
                동양 명리학 <span className="text-[#D9A8A7]/70 mx-1">✦</span> 관계 심리학 <span className="text-[#D9A8A7]/70 mx-1">✦</span> 뇌과학적 통찰
              </span>
              <span className="text-[10px] md:text-[11px] font-mono tracking-[0.18em] uppercase text-[#D9A8A7]/60">
                EASTERN WISDOM × PSYCHOLOGY × NEUROSCIENCE
              </span>
            </div>
          </div>

          {/* 7. 차별점 3가지 카드 (가로 컨텐츠 사이즈 1280px 기준 시원한 3열 배치) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-left w-full max-w-[1280px] mx-auto mb-14 md:mb-16">
            {differentiators.map((diff, idx) => (
              <div
                key={idx}
                className="p-8 md:p-10 rounded-[28px] shadow-xl relative overflow-hidden transition-all duration-300 hover:border-[rgba(245,218,226,0.35)] flex flex-col justify-between"
                style={{
                  background: 'rgba(125, 76, 100, 0.22)',
                  border: '1px solid rgba(215, 170, 185, 0.20)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                }}
              >
                <div>
                  <span className="block font-elegant text-sm font-bold tracking-[0.2em] text-[#D9A8A7] mb-3">
                    {diff.num}
                  </span>
                  <h3 className="text-[19px] md:text-[21px] font-bold text-white mb-3.5 leading-snug break-keep">
                    {diff.title}
                  </h3>
                  <p className="text-[15px] md:text-[16px] text-[#EDE6DA]/85 font-light leading-relaxed break-keep">
                    {diff.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* 8. 마지막 핵심 카피 */}
          <div className="max-w-3xl mx-auto pt-4">
            <p className="font-elegant font-medium text-[18px] md:text-[21px] text-[#FAF7F2] leading-relaxed break-keep">
              &ldquo;언제 사랑받을지를 묻지 마세요.<br className="sm:hidden" />
              <span className="text-[#E6BFA9] font-semibold"> 왜 그런 사랑을 선택해 왔는지부터 읽으세요.</span>&rdquo;
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
