'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import GlobalBackground from '@/components/GlobalBackground'
import Reveal from '@/components/Reveal'

export default function PrivacyPage() {
  const privacyContent = [
    {
      title: '제1조 목적',
      content: '이끌림(이하 “회사”)이 운영하는 백도화는 이용자의 개인정보를 중요하게 생각하며, 「개인정보 보호법」 등 관련 법령을 준수합니다. 회사는 개인정보처리방침을 통해 이용자가 제공한 개인정보가 어떠한 용도와 방식으로 이용되고 있으며, 개인정보 보호를 위해 어떠한 조치가 취해지고 있는지 안내드립니다.'
    },
    {
      title: '제2조 수집하는 개인정보 항목',
      content: '회사는 서비스 제공을 위해 다음과 같은 개인정보를 수집할 수 있습니다.\n\n[필수항목]\n- 이름, 연락처, 이메일 주소, 생년월일, 결제정보, 상담 및 리포트 작성을 위한 기본 정보\n\n[선택항목]\n- 추가 상담 내용, 관계 정보, 기타 사용자가 자발적으로 제공한 정보\n\n또한 서비스 이용 과정에서 접속 로그, 쿠키, IP 정보 등이 자동으로 생성되어 수집될 수 있습니다.'
    },
    {
      title: '제3조 개인정보 수집 및 이용 목적',
      content: '회사는 수집한 개인정보를 다음의 목적을 위해 사용합니다.\n\n- 리포트 제작 및 서비스 제공\n- 고객 상담 및 문의 응대\n- 결제 및 환불 처리\n- 서비스 품질 개선\n- 공지사항 전달\n- 법령상 의무 이행'
    },
    {
      title: '제4조 개인정보 보유 및 이용 기간',
      content: '회사는 개인정보 수집 및 이용 목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 단, 관계 법령에 따라 일정 기간 보관이 필요한 경우에는 해당 기간 동안 보관합니다. 전자적 파일은 복구 불가능한 방법으로 삭제하며, 종이 문서는 분쇄 또는 소각하여 파기합니다.'
    },
    {
      title: '제5조 개인정보 제3자 제공',
      content: '회사는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다. 다만 다음의 경우에는 예외로 합니다.\n\n- 이용자가 사전에 동의한 경우\n- 법령에 의해 요구되는 경우'
    },
    {
      title: '제6조 개인정보 보호 책임자',
      content: '회사는 개인정보 보호를 위해 책임자를 지정하고 있습니다.\n\n서비스명 : 백도화\n사업자명 : 이끌림\n담당자 : 백진선\n이메일 : buzasun@naver.com'
    },
    {
      title: '제7조 정책 변경',
      content: '본 개인정보처리방침은 법령 또는 서비스 정책 변경에 따라 수정될 수 있습니다. 변경 시 홈페이지를 통해 사전 공지합니다.'
    }
  ]

  return (
    <main className="relative min-h-screen bg-[#0a0514]">
      <GlobalBackground src="/image/main4.png">
        <Navigation />
        
        <div className="container-premium py-32 md:py-44">
          <div className="max-w-3xl mx-auto">
            <Reveal>
              <h1 className="text-3xl md:text-4xl font-elegant font-bold text-white mb-4 text-center">개인정보처리방침</h1>
              <p className="text-[var(--accent-gold)] text-sm text-center mb-16 opacity-60 tracking-widest">시행일 : 2026.05.02</p>
            </Reveal>

            <div className="space-y-8">
              {privacyContent.map((item, index) => (
                <Reveal key={index} delayMs={index * 50}>
                  <div className="gungjung-glass p-8 md:p-10 border-white/5 hover:border-[var(--accent-gold)]/20 transition-colors">
                    <h2 className="text-xl font-bold text-white mb-6 border-l-4 border-[var(--accent-gold)] pl-4">{item.title}</h2>
                    <div className="text-bd-ivory opacity-70 leading-relaxed whitespace-pre-line text-sm md:text-base font-light break-keep">
                      {item.content}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

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
