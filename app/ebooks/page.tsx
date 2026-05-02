import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import GlobalBackground from '@/components/GlobalBackground'
import Link from 'next/link'

export const metadata = {
  title: '시크릿 비법서 | 백도화 매력학당',
  description: '연애와 풍요에 관한 시크릿 비법서를 만나보세요',
}

export default function EbooksPage() {
  const ebooks = [
    {
      title: '연애비급',
      description: '연애의 핵심 비법을 담은 시크릿 비법서',
      href: '/reports/love-secret-ebook',
      cta: '연애비급 자세히 보기'
    },
    {
      title: '풍요비책',
      description: '풍요로운 삶을 위한 가이드북',
      href: '/reports/abundance-secret-guide',
      cta: '풍요비책 자세히 보기'
    },
    {
      title: '재회비방',
      description: '재회를 위한 실전 전략서',
      href: '/reports/reunion-secret-method',
      cta: '재회비방 자세히 보기'
    },
  ]

  return (
    <main className="relative min-h-screen">
      <GlobalBackground src="/image/main4.png">
        <Navigation />
        
        <div className="pt-44 px-4 md:px-6 py-16 md:py-24">
          <div className="container mx-auto max-w-4xl relative z-10">
            {/* Rule 5: 가독성과 고급감을 위한 궁중유리 카드 적용 */}
            <div className="gungjung-glass p-8 md:p-12 mb-12">
              <h1 className="text-4xl md:text-5xl font-elegant font-bold mb-8 gradient-text">
                시크릿 비법서
              </h1>
              <p className="text-lg md:text-xl text-[#EDE6DA] leading-relaxed opacity-90">
                연애와 풍요에 관한 깊이 있는 지식을 담은 시크릿 비법서를 만나보세요.<br />
                선천코드 분석을 바탕으로 한 실전 가이드로 더 나은 관계와 풍요로운 삶을 만들어가세요.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {ebooks.map((ebook, index) => (
                <div
                  key={index}
                  className="gungjung-glass p-8 flex flex-col group transition-all duration-500 hover:-translate-y-1"
                >
                  <h2 className="text-2xl font-elegant font-bold text-[#EDE6DA] mb-4 group-hover:text-[var(--accent-gold)] transition-colors">
                    {ebook.title}
                  </h2>
                  <p className="text-[#EDE6DA] opacity-60 text-base leading-relaxed mb-10 group-hover:opacity-100 transition-opacity flex-grow">
                    {ebook.description}
                  </p>
                  <Link
                    href={ebook.href}
                    className="mt-auto py-3 px-4 rounded-lg text-sm font-bold text-center border transition-all duration-300 hover:shadow-[0_0_15px_rgba(212,178,167,0.3)] hover:border-[var(--accent-gold)]"
                    style={{
                      background: 'rgba(59, 15, 27, 0.4)',
                      borderColor: 'rgba(216, 191, 163, 0.3)',
                      color: 'var(--accent-gold-light)',
                    }}
                  >
                    {ebook.cta}
                  </Link>
                </div>
              ))}
            </div>

            <div className="mb-16" />

            <div className="gungjung-glass p-8 opacity-90 border-dashed border-opacity-30">
              <h3 className="text-bd-white font-elegant font-bold mb-4">결제 완료 후 안내</h3>
              <div className="space-y-2 text-[#EDE6DA] opacity-70">
                <p>• 결제가 완료되면 이메일로 시크릿 비법서 다운로드 링크가 발송됩니다.</p>
                <p>• 다운로드 링크는 구매 후 7일간 유효합니다.</p>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </GlobalBackground>
    </main>
  )
}
