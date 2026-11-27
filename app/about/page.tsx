import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import GlobalBackground from '@/components/GlobalBackground'
import Reveal from '@/components/Reveal'
import Image from 'next/image'

// 신규 및 확장 브랜드 소개 섹션 컴포넌트
import PhilosophySection from '@/components/about/PhilosophySection'
import BeyondRulesSection from '@/components/about/BeyondRulesSection'
import LoveSecretCodeSection from '@/components/about/LoveSecretCodeSection'
import LoveStrategyComparisonSection from '@/components/about/LoveStrategyComparisonSection'
import FourWayComparisonSection from '@/components/about/FourWayComparisonSection'
import QuestionsSection from '@/components/about/QuestionsSection'
import NameMeaningSection from '@/components/about/NameMeaningSection'
import OriginBackgroundSection from '@/components/about/OriginBackgroundSection'
import ThreeLayersDiagram from '@/components/about/ThreeLayersDiagram'
import MethodologySection from '@/components/about/MethodologySection'
import PerspectiveComparisonSection from '@/components/about/PerspectiveComparisonSection'
import ThreeRealmsSection from '@/components/about/ThreeRealmsSection'
import KnowledgeArchiveSection from '@/components/about/KnowledgeArchiveSection'
import BaekJangmiStorySection from '@/components/about/BaekJangmiStorySection'
import IntegratedApproachSection from '@/components/about/IntegratedApproachSection'
import PrinciplesSection from '@/components/about/PrinciplesSection'
import TargetAudienceSection from '@/components/about/TargetAudienceSection'
import ManifestoSection from '@/components/about/ManifestoSection'
import ClosingCtaSection from '@/components/about/ClosingCtaSection'

export default function AboutPage() {
  return (
    <main className="relative min-h-screen">
      <GlobalBackground src="/image/main4.png">
        <Navigation />

        {/* =========================================================================
            [신규 페이지 상단 헤더] 선천코드 리포트 허브와 동일한 독립 헤더 영역
            ========================================================================= */}
        <div className="relative z-10 pt-44 text-center">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
              <h1 className="text-4xl md:text-6xl font-elegant font-bold text-white mb-8 tracking-widest">
                백도화 <span className="text-[var(--accent-gold)]">소개</span>
              </h1>
              <p className="text-[#EDE6DA] opacity-90 text-[19px] sm:text-xl md:text-[22px] font-elegant leading-[1.8] max-w-3xl mx-auto break-keep">
                사랑의 비밀, 인연의 결, 풍요의 방향까지<br />
                <span className="text-[var(--accent-gold-light)]">타고난 나를 이해하고, 스스로 운명을 설계하는 백도화의 세계를 만나보세요.</span>
              </p>
            </Reveal>
          </div>
        </div>

        {/* =========================================================================
            [신규 브랜드 시그니처 이미지] 3:1 와이드 배너 (1280px 기준선 정렬, 라운딩 16px)
            상단 설명 문구와 48px, 하단 메인 소개 카드와 40px 여백
            ========================================================================= */}
        <div className="relative z-10 pt-12 pb-10 px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-[1280px] mx-auto w-full">
            <Reveal delayMs={150}>
              <div className="relative w-full aspect-[3/1] rounded-[16px] overflow-hidden">
                <Image
                  src="/image/baekdohwa-signature-blossom.webp"
                  alt="백도화 시그니처 블라썸"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1280px) 100vw, 1280px"
                />
              </div>
            </Reveal>
          </div>
        </div>

        {/* =========================================================================
            [메인 소개 영역] 백도화 소개 — 운명을 설계하는 은밀한 비기 (1280px 기준선 정렬)
            ========================================================================= */}
        <section className="pb-16 px-4 sm:px-6 lg:px-8 relative w-full">
          <div className="max-w-[1280px] mx-auto w-full relative z-10">
            {/* Rule 5: 텍스트 및 UI 레이어 보호를 위한 궁중유리 카드 */}
            <div className="gungjung-glass w-full p-8 sm:p-12 md:p-16 text-left">
              {/* 1. 상단 영어 라벨 신규 추가 (비첩 상세페이지 기준 text-[12pt] font-semibold, 앤티크 샴페인 골드, 타이틀과의 간격 16px) */}
              <div className="mb-4">
                <span className="text-[12pt] font-elegant font-semibold tracking-[0.25em] text-[var(--accent-gold)] uppercase opacity-90">
                  ABOUT BAEKDOHWA · PRIVATE ARCHIVE
                </span>
              </div>

              {/* 2. 메인 타이틀 변경 (36px, 앤티크 샴페인 골드 그라데이션, 좌측 정렬) */}
              <h1 
                className="text-[26px] sm:text-[32px] md:text-[36px] font-elegant font-bold mb-8 gradient-text text-left break-keep"
                style={{ lineHeight: 1.8, letterSpacing: '0.04em' }}
              >
                백도화(白桃花),<br className="sm:hidden" /> 운명을 설계하는 은밀한 비기
              </h1>

              {/* 3 & 4. 본문 문단 (18px, 줄간격 1.7, 문단 간격 24~28px, 좌측 정렬, break-keep) */}
              <div className="space-y-6 md:space-y-7">
                <p className="text-[18px] leading-[1.7] text-[#EDE6DA] opacity-90 font-light break-keep text-left">
                  붉게 들뜨는 도화가 아닌, 가장 고고하고 단단하게 피어나는 하얀 복숭아꽃(白桃花)의 기품. 백도화 매력학당은 타고난 사주의 껍질을 벗겨 당신만의 ‘선천코드’를 해독하고, 반복되는 사랑과 결핍의 판을 뒤집는 프라이빗 각성 공간입니다.
                </p>

                <p className="text-[18px] leading-[1.7] text-[#EDE6DA] opacity-90 font-light break-keep text-left">
                  왕실의 은밀한 비방(秘方)에서 비롯된 동양의 정통 통찰과 현대 심리 설계의 만남. 아무에게나 허락되지 않는 정교한 분석과 프리미엄 솔루션으로, 당신이 삶의 온전한 주권자로 서는 결정적 기준을 제시합니다.
                </p>

                {/* 5. 마지막 사명 문구 강조 (상단 은은한 구분선, 간격 24px, 18px, font-semibold 600, 앤티크 샴페인 골드) */}
                <div className="pt-2">
                  <div className="gold-divider opacity-30 mb-6" />
                  <p className="text-[18px] leading-[1.7] font-semibold text-[var(--accent-gold)] break-keep text-left">
                    타고난 고유한 매력의 결을 극대화하여 주도적인 사랑과 온전한 풍요의 삶을 실현하게 하는 것. 그것이 바로 백도화가 존재하는 이유이자 우리의 사명입니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            01. 브랜드 핵심 철학 및 메인 메시지 (단일 통합 카드)
            ========================================================================= */}
        <PhilosophySection />

        {/* --- [선천코드 차별화 및 시각적 콘텐츠 영역] --- */}
        {/* NEW 01. 핵심 차별화 메시지 (BEYOND THE RULES OF LOVE) */}
        <BeyondRulesSection />

        {/* NEW 02. 백도화의 선천코드 연애 설계 (THE SECRET CODE OF LOVE 인포그래픽 - 절대 유지) */}
        <LoveSecretCodeSection />

        {/* NEW 03. 보편적인 연애 공식과 선천코드 맞춤 전략 비교 (2자 비교 카드 유지) */}
        <LoveStrategyComparisonSection />

        {/* NEW 04. 백도화의 4자 비교 영역 (연애 콘텐츠, 일반 상담, 전통 사주, 백도화 카드형 매트릭스) */}
        <FourWayComparisonSection />

        {/* 02. 백도화가 세상에 던지는 질문 */}
        <QuestionsSection />

        {/* 03. 백도화라는 이름과 세계관 */}
        <NameMeaningSection />

        {/* 04. 백도화의 탄생 배경 */}
        <OriginBackgroundSection />

        {/* 05. 인간을 바라보는 세 가지 층위 (3층 동심원 인포그래픽) */}
        <ThreeLayersDiagram />

        {/* 06. 백도화의 고유 해석 방법론 (4단계 해독·발견·각성·재설계) */}
        <MethodologySection />

        {/* 07. 백도화가 다른 이유 (2열 비교 구조) */}
        <PerspectiveComparisonSection />

        {/* 08. 백도화의 세 가지 전문 영역 (사랑과 매력, 인연과 관계, 풍요와 자기실현) */}
        <ThreeRealmsSection />

        {/* 09. 백도화의 지식 자산 (비급 시리즈, 선천코드 비기, 프리미엄 리포트) */}
        <KnowledgeArchiveSection />

        {/* 10. 백장미의 이야기와 전문성 (연결 문구 + 기존 백도화 선언 및 전문분야 자격 완전 보존) */}
        <BaekJangmiStorySection />

        {/* 11. 통합적 연구와 해석 (6개 관점 + 기존 우리가 설계하는 영역 프로젝트 완전 보존) */}
        <IntegratedApproachSection />

        {/* 12. 백도화가 지키는 다섯 가지 원칙 */}
        <PrinciplesSection />

        {/* 13. 이런 분들에게 백도화를 권합니다 */}
        <TargetAudienceSection />

        {/* 14. 백도화 브랜드 선언문 (MANIFESTO) */}
        <ManifestoSection />

        {/* 15. 최종 클로징 및 CTA (기존 브랜드 엔딩 카피 완전 보존 + 3대 CTA) */}
        <ClosingCtaSection />

        <Footer />
      </GlobalBackground>
    </main>
  )
}
