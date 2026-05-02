'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import GlobalBackground from '@/components/GlobalBackground'

export default function PrivacyPolicy() {
  return (
    <main className="relative min-h-screen bg-[#0a0514]">
      <GlobalBackground>
        <Navigation />
        
        <div className="relative z-10 pt-32 pb-20 px-6">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-[#1a0f2e]/60 backdrop-blur-md border border-[rgba(212,175,55,0.15)] p-8 md:p-16 rounded-2xl shadow-2xl">
              <h1 className="text-3xl md:text-4xl font-elegant font-bold text-[var(--accent-gold)] mb-12 tracking-wider text-center">
                개인정보처리방침
              </h1>
              
              <div className="space-y-10 text-[#EDE6DA] leading-relaxed opacity-90">
                <section>
                  <h2 className="text-xl font-bold text-[var(--accent-gold)] mb-4">제1조 목적</h2>
                  <p>
                    백도화(이하 “회사”)는 이용자의 개인정보를 중요하게 생각하며, 「개인정보 보호법」 등 관련 법령을 준수합니다.
                  </p>
                  <p className="mt-2">
                    회사는 개인정보처리방침을 통해 이용자가 제공한 개인정보가 어떠한 용도와 방식으로 이용되고 있으며, 개인정보 보호를 위해 어떠한 조치가 취해지고 있는지 안내드립니다.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-[var(--accent-gold)] mb-4">제2조 수집하는 개인정보 항목</h2>
                  <p className="mb-4">회사는 서비스 제공을 위해 다음과 같은 개인정보를 수집할 수 있습니다.</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-bold text-[var(--accent-gold)]/80 mb-2">[필수항목]</h3>
                      <ul className="list-disc list-inside pl-4 space-y-1 opacity-80">
                        <li>이름</li>
                        <li>연락처</li>
                        <li>이메일 주소</li>
                        <li>생년월일</li>
                        <li>결제정보</li>
                        <li>상담 및 리포트 작성을 위한 기본 정보</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-bold text-[var(--accent-gold)]/80 mb-2">[선택항목]</h3>
                      <ul className="list-disc list-inside pl-4 space-y-1 opacity-80">
                        <li>추가 상담 내용</li>
                        <li>관계 정보</li>
                        <li>기타 사용자가 자발적으로 제공한 정보</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-[var(--accent-gold)] mb-4">제3조 개인정보 수집 및 이용 목적</h2>
                  <p className="mb-2">회사는 수집한 개인정보를 다음의 목적을 위해 사용합니다.</p>
                  <ul className="list-disc list-inside pl-4 space-y-1 opacity-80">
                    <li>리포트 제작 및 서비스 제공</li>
                    <li>고객 상담 및 문의 응대</li>
                    <li>결제 및 환불 처리</li>
                    <li>서비스 품질 개선</li>
                    <li>공지사항 전달</li>
                    <li>법령상 의무 이행</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-[var(--accent-gold)] mb-4">제4조 개인정보 보유 및 이용 기간</h2>
                  <p>
                    회사는 개인정보 수집 및 이용 목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다.
                  </p>
                  <p className="mt-2 opacity-80">
                    단, 관계 법령에 따라 일정 기간 보관이 필요한 경우에는 해당 기간 동안 보관합니다.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-[var(--accent-gold)] mb-4">제5조 개인정보 제3자 제공</h2>
                  <p>회사는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다.</p>
                  <p className="mt-2 mb-2 opacity-80">다만 다음의 경우에는 예외로 합니다.</p>
                  <ul className="list-disc list-inside pl-4 space-y-1 opacity-80">
                    <li>이용자가 사전에 동의한 경우</li>
                    <li>법령에 의해 요구되는 경우</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-[var(--accent-gold)] mb-4">제6조 개인정보 보호 책임자</h2>
                  <p>회사는 개인정보 보호를 위해 책임자를 지정하고 있습니다.</p>
                  <div className="mt-4 p-6 bg-[#0a0514]/40 border border-[rgba(212,175,55,0.1)] rounded-lg">
                    <h3 className="font-bold mb-2">개인정보 보호 책임자</h3>
                    <p className="opacity-80">상호명 : 이끌림</p>
                    <p className="opacity-80">담당자 : 백진선</p>
                    <p className="opacity-80">이메일 : buzasun@naver.com</p>
                  </div>
                </section>

                <section className="pt-10 border-t border-[rgba(212,175,55,0.1)]">
                  <h2 className="text-xl font-bold text-[var(--accent-gold)] mb-4">제7조 정책 변경</h2>
                  <p>본 개인정보처리방침은 법령 또는 서비스 정책 변경에 따라 수정될 수 있습니다.</p>
                  <p className="mt-4 text-sm opacity-60">시행일 : 2026.05.02</p>
                </section>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </GlobalBackground>
    </main>
  )
}
