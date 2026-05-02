'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import GlobalBackground from '@/components/GlobalBackground'
import Reveal from '@/components/Reveal'

export default function TermsPage() {
  const termsContent = [
    {
      title: '제1조 목적',
      content: '본 약관은 이끌림(이하 “회사”)이 운영하는 백도화 서비스의 이용과 관련하여 회사와 이용자 간의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.'
    },
    {
      title: '제2조 서비스 내용',
      content: '회사는 백도화 서비스를 통해 다음과 같은 서비스를 제공합니다.\n\n- 선천코드 연애 리포트\n- 프리미엄 궁합 리포트\n- 관계 흐름 해석 서비스\n- 프리미엄 감정 분석 서비스\n- 전자책 및 디지털 콘텐츠 제공\n- 실물 상품 판매 및 관련 서비스'
    },
    {
      title: '제3조 서비스 이용',
      content: '이용자는 회사가 제공하는 절차에 따라 서비스를 신청하고 결제를 완료함으로써 서비스를 이용할 수 있습니다. 서비스 이용 과정에서 필요한 정보는 정확하게 입력해야 하며, 허위 정보 제공으로 인한 불이익은 이용자 본인에게 있습니다.'
    },
    {
      title: '제4조 이용자의 의무',
      content: '이용자는 다음 행위를 해서는 안 됩니다.\n\n- 허위 정보 제공\n- 타인의 개인정보 도용\n- 서비스 운영 방해 행위\n- 회사의 저작물 무단 복제 및 배포\n- 회사의 사전 동의 없는 상업적 이용'
    },
    {
      title: '제5조 저작권',
      content: '회사가 제공하는 리포트, 전자책, 콘텐츠 및 모든 디지털 자료의 저작권은 회사에 있습니다. 이용자는 이를 무단 복제, 재판매, 배포, 공유할 수 없습니다. 위반 시 관련 법령에 따라 민형사상 책임이 발생할 수 있습니다.'
    },
    {
      title: '제6조 환불 및 교환',
      content: '환불 및 교환에 관한 사항은 별도의 환불정책 및 배송정책에 따릅니다. 디지털 콘텐츠 및 맞춤 제작 리포트는 서비스 특성상 제공이 시작된 이후 환불이 제한될 수 있습니다. 실물 상품의 교환 및 반품은 관련 법령 및 회사 정책에 따라 처리됩니다.'
    },
    {
      title: '제7조 면책사항',
      content: '회사가 제공하는 서비스는 개인 맞춤형 해석 및 참고 자료이며, 법적, 의학적, 재정적 판단의 직접적인 근거로 사용될 수 없습니다. 회사는 이용자의 개인적 판단에 따른 결과에 대해 책임을 지지 않습니다. 또한 천재지변, 시스템 장애, 이용자의 귀책사유로 인한 서비스 이용 장애에 대해서도 책임을 지지 않습니다.'
    },
    {
      title: '제8조 약관 변경',
      content: '회사는 필요한 경우 관련 법령을 위배하지 않는 범위에서 본 약관을 변경할 수 있습니다. 약관이 변경되는 경우 홈페이지를 통해 사전 공지합니다.'
    }
  ]

  return (
    <main className="relative min-h-screen bg-[#0a0514]">
      <GlobalBackground src="/image/main4.png">
        <Navigation />
        
        <div className="container-premium py-32 md:py-44">
          <div className="max-w-4xl mx-auto">
            <Reveal>
              <div className="gungjung-glass p-8 md:p-16 lg:p-20 border-white/10">
                <h1 className="text-3xl md:text-4xl font-elegant font-bold text-white mb-4 text-center">이용약관</h1>
                <p className="text-[var(--accent-gold)] text-sm text-center mb-16 opacity-60 tracking-widest">시행일 : 2026.05.02</p>

                <div className="space-y-12">
                  {termsContent.map((item, index) => (
                    <div key={index} className="space-y-6">
                      <h2 className="text-xl md:text-2xl font-bold text-white border-l-2 border-[var(--accent-gold)] pl-4">
                        {item.title}
                      </h2>
                      <div className="text-bd-ivory opacity-70 leading-relaxed whitespace-pre-line text-sm md:text-base font-light break-keep pl-4">
                        {item.content}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delayMs={500}>
              <div className="mt-20 text-center text-white/30 text-xs">
                <p>© 2026 Baekdohwa. All rights reserved.</p>
              </div>
            </Reveal>
          </div>
        </div>

        <Footer />
      </GlobalBackground>
    </main>
  )
}
