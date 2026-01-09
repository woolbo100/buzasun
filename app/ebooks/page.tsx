import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
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
      href: '/ebooks/love',
    },
    {
      title: '풍요비책',
      description: '풍요로운 삶을 위한 가이드북',
      href: '/ebooks/prosperity',
    },
    {
      title: '재회비방',
      description: '재회를 위한 실전 전략서',
      href: '/ebooks/reunion',
    },
  ]

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-16 px-4 md:px-6 py-16 md:py-24">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-elegant font-bold text-bd-ivory mb-6">
            시크릿 비법서
          </h1>
          <p className="text-lg md:text-xl text-bd-gray mb-10 leading-relaxed">
            연애와 풍요에 관한 깊이 있는 지식을 담은 시크릿 비법서를 만나보세요.
            선천코드 분석을 바탕으로 한 실전 가이드로 더 나은 관계와 풍요로운 삶을 만들어가세요.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {ebooks.map((ebook, index) => (
              <div
                key={index}
                className="p-6 rounded-lg"
                style={{
                  background: '#1a0626',
                  border: '1px solid rgba(255, 20, 147, 0.2)',
                }}
              >
                <h2 className="text-2xl font-elegant font-bold text-bd-ivory mb-3">
                  {ebook.title}
                </h2>
                <p className="text-bd-gray text-sm mb-4">
                  {ebook.description}
                </p>
              </div>
            ))}
          </div>

          <a
            href="https://payment-link.com/ebooks"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 rounded-lg font-semibold text-white transition-colors mb-6 hover:bg-bd-pink2"
            style={{
              background: '#ff1493',
            }}
          >
            시크릿 비법서 구매하기
          </a>

          <div 
            className="p-6 rounded-lg"
            style={{
              background: '#1a0a2e',
              border: '1px solid rgba(255, 20, 147, 0.2)',
            }}
          >
            <p className="text-bd-gray leading-relaxed">
              <strong className="text-bd-ivory">결제 완료 후 안내</strong>
              <br />
              결제가 완료되면 이메일로 시크릿 비법서 다운로드 링크가 발송됩니다.
              <br />
              다운로드 링크는 구매 후 7일간 유효합니다.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
