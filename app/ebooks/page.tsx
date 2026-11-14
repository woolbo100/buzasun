import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import GlobalBackground from '@/components/GlobalBackground'
import Link from 'next/link'
import Image from 'next/image'
import Reveal from '@/components/Reveal'

export const metadata = {
  title: '시크릿 비첩 | 백도화 매력학당',
  description: '사랑의 매듭을 풀고, 풍요의 문을 여는 비밀. 나를 이해하는 통찰부터 일상에서 실천하는 방법까지, 백도화의 시크릿 비첩에 담았습니다.',
}

export default function EbooksPage() {
  const ebooks = [
    {
      id: 'love-secret',
      title: '연애비급 (매력 시그널)',
      category: 'AURA ANALYSIS',
      summary: '반복되는 연애 패턴을 이해하고, 나만의 매력을 발견하는 비밀 전략서.',
      description: '끌려가는 관계가 아닌 스스로 선택하는 관계를 위해 매력의 원리와 실천 방법을 담았습니다.',
      href: '/reports/love-secret',
      cta: '연애비급 자세히 보기',
      image: '/image/love-secret-book-showcase.webp',
      imageClass: 'object-[25%_center]',
      // ① 연애비급 — 로즈핑크 플럼 글라스 + 은은한 로즈골드 테두리
      cardClass: 'border-[#C48B9F]/25 bg-gradient-to-b from-[#A65B80]/[0.22] via-[#75415F]/[0.12] to-[#0a0514]/[0.35] hover:border-[#C48B9F]/40 hover:shadow-[0_0_50px_rgba(166,91,128,0.22)]',
      isAvailable: true,
    },
    {
      id: 'reunion-secret',
      title: '재회비방 (시크릿 솔루션)',
      category: 'SECRET METHOD',
      summary: '끝난 관계 앞에서 흔들리는 마음을 읽고, 관계의 주도권을 되찾는 비밀 지침서.',
      description: '이별 이후의 감정과 관계의 흐름을 이해하고, 다시 선택해야 할 기준을 발견하도록 돕습니다.',
      href: '/reports/reunion-secret',
      cta: '재회비방 자세히 보기',
      image: '/image/reunion-secret-book-showcase.webp',
      imageClass: 'object-[75%_center]',
      // ② 재회비방 — 앤티크 브라운 버건디 글라스 (붉은기 뺀 차분한 브라운 버건디)
      cardClass: 'border-[#6B443B]/25 bg-gradient-to-b from-[#5E3B32]/[0.22] via-[#472A24]/[0.12] to-[#0a0514]/[0.35] hover:border-[#6B443B]/40 hover:shadow-[0_0_50px_rgba(107,68,59,0.22)]',
      isAvailable: true,
    },
    {
      id: 'abundance-secret',
      title: '풍요비책 (에너지 가이드)',
      category: 'ENERGY GUIDE',
      summary: '돈을 대하는 태도와 익숙한 습관을 돌아보고, 나만의 풍요를 설계하는 비밀 실천서.',
      description: '풍요에 대한 관점을 바꾸고, 일상에서 적용할 수 있는 구체적인 실천 방법을 담았습니다.',
      href: '/reports/abundance-secret',
      cta: '풍요비책 자세히 보기',
      image: '/image/abundance-secret-book-showcase.webp',
      imageClass: 'object-[25%_center]',
      // ③ 풍요비책 — 옥색 글라스 + 은은한 청옥빛 테두리
      cardClass: 'border-[#568D86]/25 bg-gradient-to-b from-[#568D86]/[0.22] via-[#416A70]/[0.12] to-[#0a0514]/[0.35] hover:border-[#568D86]/40 hover:shadow-[0_0_50px_rgba(86,141,134,0.22)]',
      isAvailable: true,
    },
    {
      id: 'innate-code',
      title: '선천코드 비기',
      category: 'INNER CODE',
      summary: '나를 이해하는 순간, 삶을 바라보는 시선이 달라집니다.',
      description: '오행과 선천코드의 기본 원리를 통해 나의 타고난 성향과 관계, 삶의 흐름을 탐색하는 비밀 도감입니다.',
      href: '/reports/seoncheon-code-bigi',
      cta: '선천코드 비기 자세히 보기',
      image: '/image/seoncheon-code-secret-book.webp',
      imageClass: 'object-[75%_center]',
      // ④ 선천코드 비기 — 상단 스모키 먹색 & 하단 투명 글라스 (풍요비책처럼 상단 먹빛 강조, 하단 투명화)
      cardClass: 'border-[#B7A18A]/25 bg-gradient-to-b from-[#58505D]/[0.30] via-[#332F38]/[0.10] to-[#0a0514]/[0.25] hover:border-[#B7A18A]/40 hover:shadow-[0_0_50px_rgba(183,161,138,0.22)]',
      isAvailable: true,
    },
  ]

  return (
    <main className="relative min-h-screen">
      <GlobalBackground src="/image/main4.png">
        <Navigation />
        
        <div className="relative z-10 pt-44 pb-24">
          <div className="container-premium">
            
            {/* Header Section - 유지 */}
            <div className="text-center mb-20">
              <Reveal>
                <h1 className="text-4xl md:text-6xl font-elegant font-bold text-white mb-8 tracking-widest">
                  시크릿 <span className="text-[var(--accent-gold)]">비첩</span>
                </h1>
                <p className="text-[#EDE6DA] opacity-90 text-[19px] sm:text-xl md:text-[22px] font-elegant leading-[1.8] max-w-3xl mx-auto break-keep">
                  사랑의 매듭을 풀고, 풍요의 문을 여는 비밀<br />
                  <span className="text-[var(--accent-gold-light)]">
                    나를 이해하는 통찰부터 일상에서 실천하는 방법까지,<br />
                    백도화의 시크릿 비첩에 담았습니다.
                  </span>
                </p>
              </Reveal>
            </div>
            
            {/* 4종 교차형 가로 카드 레이아웃 */}
            <div className="space-y-12 mb-16">
              {ebooks.map((ebook, idx) => {
                // 홀수 인덱스(1, 3: 재회비방, 선천코드 비기)는 데스크톱에서 이미지가 오른쪽(md:order-last)
                // 모바일에서는 모든 카드가 기본 DOM 순서대로 [이미지 -> 설명 -> 버튼] 배치
                const isImageRightOnDesktop = idx % 2 === 1

                return (
                  <Reveal key={ebook.id} delayMs={idx * 150}>
                    <div className={`gungjung-glass overflow-hidden rounded-[2rem] border transition-all duration-700 group ${ebook.cardClass}`}>
                      <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                        
                        {/* 이미지 영역 */}
                        <div className={`relative w-full aspect-[16/9] md:aspect-auto md:h-full md:min-h-[420px] overflow-hidden ${isImageRightOnDesktop ? 'md:order-last' : ''}`}>
                          {ebook.image ? (
                            <Image 
                              src={ebook.image} 
                              alt={ebook.title}
                              fill
                              sizes="(max-width: 768px) 100vw, 50vw"
                              priority={idx === 0}
                              className={`object-cover ${ebook.imageClass || 'object-center'} transition-transform duration-[2000ms] group-hover:scale-105`}
                            />
                          ) : (
                            /* 네 번째 선천코드 비기 임시 영역 (나중에 이미지가 들어올 투명하고 은은한 프레임) */
                            <div className="w-full h-full min-h-[280px] sm:min-h-[350px] md:min-h-[440px] flex flex-col items-center justify-center p-8 text-center relative bg-black/25 backdrop-blur-sm select-none">
                              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border border-[#B7A18A]/35 flex items-center justify-center mb-5 shadow-[0_0_25px_rgba(183,161,138,0.15)] bg-[#252026]/60">
                                <span className="text-2xl sm:text-3xl text-[#B7A18A] font-elegant">秘</span>
                              </div>
                              <span className="text-[11px] sm:text-xs tracking-[0.3em] uppercase text-[#B7A18A] opacity-80 mb-2 font-mono">
                                SECRET ARCHIVE
                              </span>
                              <h3 className="text-xl sm:text-2xl font-elegant font-bold text-white mb-2">
                                선천코드 비기 (先天秘記)
                              </h3>
                              <p className="text-xs sm:text-sm text-[#EDE6DA] opacity-65 font-light">
                                비첩 집필 및 도감 편찬 중입니다
                              </p>
                            </div>
                          )}
                        </div>

                        {/* 설명 영역 (1. 라벨 -> 2. 제목 -> 3. 핵심 소개 -> 4. 추가 설명 -> 5. 버건디 버튼) */}
                        <div className="p-8 sm:p-10 md:p-14 lg:p-16 space-y-6 flex flex-col justify-center">
                          {/* 1. 영문 카테고리 라벨 */}
                          <div>
                            <span className="text-[12px] md:text-[14px] tracking-[0.35em] block font-bold uppercase text-[var(--accent-gold)] opacity-80">
                              {ebook.category}
                            </span>
                          </div>

                          {/* 2. 전자책 제목 */}
                          <h2 className="text-2xl sm:text-3xl md:text-4xl font-elegant font-bold text-white transition-colors duration-500 group-hover:text-[var(--accent-gold-light)] leading-snug break-keep">
                            {ebook.title}
                          </h2>

                          {/* 3. 짧은 핵심 소개 문장 */}
                          <p className="text-base sm:text-lg md:text-[19px] font-medium text-[#FAF7F2] opacity-95 leading-relaxed break-keep">
                            {ebook.summary}
                          </p>

                          {/* 4. 추가 설명 1~2문장 */}
                          <p className="text-sm sm:text-base text-[#EDE6DA] opacity-70 leading-relaxed break-keep font-light">
                            {ebook.description}
                          </p>

                          {/* 5. 기존 버건디 컬러 상세 보기 버튼 */}
                          <div className="pt-2 sm:pt-4">
                            {ebook.isAvailable ? (
                              <Link
                                href={ebook.href}
                                className="group/btn inline-flex items-center justify-center gap-2 h-[50px] sm:h-[52px] px-8 sm:px-10 rounded-xl text-[15px] sm:text-[16px] font-semibold text-center border transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.3)] hover:shadow-[0_0_22px_rgba(229,196,187,0.45)] hover:border-[#E5C4BB] hover:brightness-110 active:scale-[0.98] cursor-pointer w-full sm:w-fit"
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
                            ) : (
                              /* 선천코드 비기: 임의 링크 생성 방지를 위한 안전한 비활성 상태 버튼 */
                              <div
                                className="inline-flex items-center justify-center gap-2 h-[50px] sm:h-[52px] px-8 sm:px-10 rounded-xl text-[15px] sm:text-[16px] font-medium text-center border opacity-65 cursor-not-allowed w-full sm:w-fit select-none shadow-[0_4px_15px_rgba(0,0,0,0.2)]"
                                style={{
                                  background: 'linear-gradient(135deg, rgba(60, 20, 30, 0.6) 0%, rgba(35, 12, 18, 0.7) 100%)',
                                  borderColor: 'rgba(229, 196, 187, 0.35)',
                                  color: '#EDE6DA',
                                }}
                              >
                                <span>{ebook.cta}</span>
                                <span className="text-[11px] sm:text-[12px] opacity-75 tracking-wider uppercase ml-1 font-mono text-[var(--accent-gold-soft)]">
                                  COMING SOON
                                </span>
                              </div>
                            )}
                          </div>
                        </div>

                      </div>
                    </div>
                  </Reveal>
                )
              })}
            </div>

            {/* 결제 완료 후 안내 영역 - 유지 */}
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
