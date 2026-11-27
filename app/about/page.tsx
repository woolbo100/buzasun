import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import GlobalBackground from '@/components/GlobalBackground'

// 신규 및 확장 브랜드 소개 섹션 컴포넌트
import CustomerQuestionSection from '@/components/about/CustomerQuestionSection'
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
            [기존 히어로 섹션 완전 보존] 백도화 소개 (1280px 기준선 정렬)
            ========================================================================= */}
        <section className="pt-40 md:pt-48 pb-16 px-4 sm:px-6 lg:px-8 relative w-full">
          <div className="max-w-[1280px] mx-auto w-full relative z-10">
            {/* Rule 5: 텍스트 및 UI 레이어 보호를 위한 궁중유리 카드 */}
            <div className="gungjung-glass w-full p-8 sm:p-12 md:p-16">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-elegant font-bold mb-8 gradient-text">
                백도화 소개
              </h1>

              <div className="space-y-6">
                <p className="text-[18px] leading-[1.7] text-[#EDE6DA] opacity-90 font-light break-keep">
                  백도화 매력학당은 선천코드 분석을 기반으로 한 연애·풍요 솔루션을 제공하는 공간입니다.<br className="hidden sm:inline" />{' '}
                  각자의 고유한 에너지 패턴을 분석하여 매력 주파수를 발견하고, 이를 통해 진정한 관계와 풍요로운 삶을 만들어가는 여정을 함께합니다.
                </p>

                <div className="gold-divider opacity-30 my-6" />

                <p className="text-[18px] leading-[1.7] text-[#EDE6DA] opacity-80 font-light break-keep">
                  청초하고 고급스러운 한국적 미학을 바탕으로, 과학적 접근과 세심한 분석을 통해 여러분의 선천코드를 해석합니다.<br className="hidden sm:inline" />{' '}
                  이를 통해 개인의 고유한 매력을 극대화하고, 더 나은 관계와 풍요로운 삶을 실현할 수 있도록 돕는 것이 우리의 사명입니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            [신규 도입부] 고객의 고민에서 시작하는 메시지 영역
            ========================================================================= */}
        <CustomerQuestionSection />

        {/* 01. 브랜드 핵심 철학 및 메인 메시지 */}
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
