import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import GlobalBackground from '@/components/GlobalBackground'
import Link from 'next/link'
import Reveal from '@/components/Reveal'

export const metadata = {
  title: '시크릿 비첩 | 백도화 매력학당',
  description: '사랑의 매듭을 풀고, 풍요의 문을 여는 비밀. 나를 이해하는 통찰부터 일상에서 실천하는 방법까지, 백도화의 시크릿 비첩에 담았습니다.',
}

export default function EbooksPage() {
  const ebooks = [
    {
      title: '연애비급 (매력 시그널)',
      description: '상대방의 무의식을 자극하는 매력코드 장착하는 방법.',
      href: '/reports/love-secret',
      cta: '연애비급 자세히 보기',
      image: '/image/love-secret-thumb.png',
      category: 'AURA ANALYSIS'
    },
    {
      title: '풍요비책 (에너지 가이드)',
      description: '당신에게 흘러들어오는 풍요의 물길을 트는 에너지 활용법.',
      href: '/reports/abundance-secret',
      cta: '풍요비책 자세히 보기',
      image: '/image/abundance-secret-thumb.png',
      category: 'ENERGY GUIDE'
    },
    {
      title: '재회비방 (시크릿 솔루션)',
      description: '어긋난 인연을 다시 잇는 가장 은밀하고 확실한 방법.',
      href: '/reports/reunion-secret',
      cta: '재회비방 자세히 보기',
      image: '/image/reunion-secret-thumb.png',
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
                  시크릿 <span className="text-[var(--accent-gold)]">비첩</span>
                </h1>
                <p className="text-[#EDE6DA] opacity-90 text-lg md:text-xl font-elegant leading-relaxed max-w-2xl mx-auto break-keep">
                  사랑의 매듭을 풀고, 풍요의 문을 여는 비밀.<br />
                  <span className="text-[var(--accent-gold-light)]">
                    나를 이해하는 통찰부터 일상에서 실천하는 방법까지,<br />
                    백도화의 시크릿 비첩에 담았습니다.
                  </span>
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
                  <div className="relative aspect-[3/4] overflow-hidden">
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

                  {/* 상품 정보 영역 (상단 패딩을 살짝 늘려 글자 위치를 아래로 내림) */}
                  <div className="px-6 pb-6 pt-7 sm:pt-8 flex flex-col flex-grow">
                    <h2 className="text-[22px] sm:text-[23px] md:text-2xl font-elegant font-bold text-[#EDE6DA] mb-3 group-hover:text-[var(--accent-gold)] transition-colors leading-[1.35] break-keep">
                      {ebook.title}
                    </h2>
                    <p className="text-[#EDE6DA] opacity-80 text-[15px] sm:text-base leading-relaxed mb-6 group-hover:opacity-100 transition-opacity flex-grow min-h-[46px] md:min-h-[50px] break-keep">
                      {ebook.description}
                    </p>
                    <Link
                      href={ebook.href}
                      className="group/btn w-full h-[50px] sm:h-[52px] rounded-xl text-[15px] sm:text-[16px] font-semibold text-center border transition-all duration-300 flex items-center justify-center gap-1.5 shadow-[0_4px_15px_rgba(0,0,0,0.3)] hover:shadow-[0_0_22px_rgba(229,196,187,0.45)] hover:border-[#E5C4BB] hover:brightness-110 active:scale-[0.98] mt-auto cursor-pointer"
                      style={{
                        background: 'linear-gradient(135deg, rgba(85, 25, 42, 0.85) 0%, rgba(50, 15, 26, 0.95) 100%)',
                        borderColor: 'rgba(229, 196, 187, 0.55)',
                        color: '#FAF7F2',
                      }}
                    >
                      <span>{ebook.cta}</span>
                      <span className="font-normal text-[18px] sm:text-[19px] leading-none transition-transform duration-300 group-hover/btn:translate-x-1 text-[#E5C4BB]">
                        ›
                      </span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="mb-16" />

            <div className="gungjung-glass p-8 opacity-90 border-dashed border-opacity-30">
              <h3 className="text-bd-white font-elegant font-bold mb-4">결제 완료 후 안내</h3>
              <div className="space-y-2 text-[#EDE6DA] opacity-70">
                <p>• 결제가 완료되면 이메일로 시크릿 비첩 다운로드 링크가 발송됩니다.</p>
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
