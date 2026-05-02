import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import GlobalBackground from '@/components/GlobalBackground'
import Link from 'next/link'
import Reveal from '@/components/Reveal'

export const metadata = {
  title: '시크릿 비법서 | 백도화 매력학당',
  description: '연애와 풍요에 관한 시크릿 비법서를 만나보세요',
}

export default function EbooksPage() {
  const ebooks = [
    {
      title: '연애비급 (매력 시그널)',
      description: '상대방의 무의식을 자극하는 당신만의 고유한 아우라 분석.',
      href: '/reports/love-secret-ebook',
      cta: '연애비급 자세히 보기',
      image: '/image/product-charm-signal.png',
      category: 'AURA ANALYSIS'
    },
    {
      title: '풍요비책 (에너지 가이드)',
      description: '당신에게 흘러들어오는 풍요의 물길을 트는 에너지 활용법.',
      href: '/reports/abundance-secret-guide',
      cta: '풍요비책 자세히 보기',
      image: '/image/product-abundance.png',
      category: 'ENERGY GUIDE'
    },
    {
      title: '재회비방 (시크릿 솔루션)',
      description: '어긋난 인연을 다시 잇는 가장 은밀하고 확실한 방법.',
      href: '/reports/reunion-secret-method',
      cta: '재회비방 자세히 보기',
      image: '/image/product-reunion-reading.png',
      category: 'SECRET METHOD'
    },
  ]

  return (
    <main className="relative min-h-screen">
      <GlobalBackground src="/image/main4.png">
        <Navigation />
        
        <div className="relative z-10 pt-44 pb-24">
          <div className="container-premium">
            
            {/* Header Section - Unified with Reports Hub */}
            <div className="text-center mb-20">
              <Reveal>
                <h1 className="text-4xl md:text-6xl font-elegant font-bold text-white mb-8 tracking-widest">
                  시크릿 <span className="text-[var(--accent-gold)]">비법서</span>
                </h1>
                <p className="text-[#EDE6DA] opacity-80 text-lg md:text-xl font-elegant leading-relaxed max-w-2xl mx-auto break-keep">
                  연애와 풍요에 관한 깊이 있는 지식을 담은 시크릿 비법서를 만나보세요.<br className="md:hidden" />
                  <span className="text-[var(--accent-gold-light)]">선천코드 분석을 바탕으로 한 실전 가이드로 더 나은 관계와<br />풍요로운 삶을 만들어가세요.</span>
                </p>
              </Reveal>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {ebooks.map((ebook, index) => (
                <div
                  key={index}
                  className="gungjung-glass group transition-all duration-500 hover:-translate-y-2 overflow-hidden flex flex-col"
                >
                  {/* 상품 이미지 영역 */}
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img 
                      src={ebook.image} 
                      alt={ebook.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A0F2E] via-transparent to-transparent opacity-60" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-[10px] tracking-widest uppercase font-medium bg-[#3B0F1B]/80 text-[var(--accent-gold-light)] border border-[var(--accent-gold-soft)]">
                        {ebook.category}
                      </span>
                    </div>
                  </div>

                  {/* 상품 정보 영역 */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h2 className="text-xl font-elegant font-bold text-[#EDE6DA] mb-3 group-hover:text-[var(--accent-gold)] transition-colors">
                      {ebook.title}
                    </h2>
                    <p className="text-[#EDE6DA] opacity-60 text-sm leading-relaxed mb-8 group-hover:opacity-100 transition-opacity flex-grow">
                      {ebook.description}
                    </p>
                    <Link
                      href={ebook.href}
                      className="py-3 px-4 rounded-lg text-xs font-bold text-center border transition-all duration-300 hover:shadow-[0_0_15px_rgba(212,178,167,0.3)] hover:border-[var(--accent-gold)]"
                      style={{
                        background: 'rgba(59, 15, 27, 0.6)',
                        borderColor: 'rgba(216, 191, 163, 0.3)',
                        color: 'var(--accent-gold-light)',
                      }}
                    >
                      {ebook.cta}
                    </Link>
                  </div>
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
