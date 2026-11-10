'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import GlobalBackground from '@/components/GlobalBackground'
import Reveal from '@/components/Reveal'
import Link from 'next/link'
import Image from 'next/image'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function ReportsHubPage() {
  useScrollAnimation()

  // 추후 이미지 교체 시 아래 경로만 변경하면 됩니다.
  const ABUNDANCE_BANNER_IMAGE = '/image/baekdohwa-wealth-destiny.webp'

  const reports = [
    {
      id: 'love-code',
      title: '선천코드 연애 리포트',
      desc: '나의 타고난 연애 에너지, 반복되는 사랑의 패턴, 끌리는 사람의 유형과 관계의 흐름을 분석합니다.',
      label: 'PREMIUM REPORT',
      btnText: '연애 리포트 자세히 보기',
      link: '/reports/baekdohwa-report',
      image: '/image/baekdohwa-love-destiny.webp',
      // ① 선천코드 연애 리포트 — 로즈핑크 플럼 글라스 + 은은한 로즈골드 테두리
      cardClass: 'border-[#C48B9F]/25 bg-gradient-to-b from-[#A65B80]/[0.22] via-[#75415F]/[0.12] to-[#0a0514]/[0.35] hover:border-[#C48B9F]/40 hover:shadow-[0_0_50px_rgba(166,91,128,0.22)]',
      // CTA 버튼: 배경 #A65B80 / 호버 #B96D92
      btnClass: 'bg-[#A65B80] hover:bg-[#B96D92] text-[#EDE6DA] hover:text-white shadow-[0_4px_20px_rgba(166,91,128,0.25)] hover:shadow-[0_4px_25px_rgba(166,91,128,0.4)]',
      theme: 'default' as const
    },
    {
      id: 'compatibility',
      title: '프리미엄 궁합 리포트',
      desc: '두 사람이 서로에게 끌리는 이유, 반복해서 부딪히는 지점, 관계가 깊어질 수 있는 방향을 함께 읽어드립니다.',
      label: 'PREMIUM COMPATIBILITY READING',
      btnText: '궁합 리포트 자세히 보기',
      link: '/reports/premium-compatibility-report',
      image: '/image/baekdohwa-romantic-compatibility.webp', 
      // ② 프리미엄 궁합 리포트 — 버건디 플럼 글라스 + 차분한 버건디 플럼 테두리
      cardClass: 'border-[#793B58]/25 bg-gradient-to-b from-[#793B58]/[0.22] via-[#542C49]/[0.12] to-[#0a0514]/[0.35] hover:border-[#793B58]/40 hover:shadow-[0_0_50px_rgba(121,59,88,0.22)]',
      // CTA 버튼: 배경 #793B58 / 호버 #945071
      btnClass: 'bg-[#793B58] hover:bg-[#945071] text-[#EDE6DA] hover:text-white shadow-[0_4px_20px_rgba(121,59,88,0.25)] hover:shadow-[0_4px_25px_rgba(121,59,88,0.4)]',
      theme: 'default' as const
    },
    {
      id: 'abundance-report',
      title: '선천코드 풍요 리포트',
      desc: '나의 타고난 재능과 돈을 대하는 성향, 반복되는 수입·소비 패턴을 읽고 나에게 맞는 풍요의 방향을 살펴봅니다.',
      label: 'PREMIUM ABUNDANCE REPORT',
      btnText: '풍요 리포트 자세히 보기',
      link: '/reports/abundance-report',
      image: '/image/baekdohwa-wealth-destiny.webp',
      // ③ 선천코드 풍요 리포트 — 옥색 글라스 + 은은한 청옥빛 테두리
      cardClass: 'border-[#568D86]/25 bg-gradient-to-b from-[#568D86]/[0.22] via-[#416A70]/[0.12] to-[#0a0514]/[0.35] hover:border-[#568D86]/40 hover:shadow-[0_0_50px_rgba(86,141,134,0.22)]',
      // CTA 버튼: 배경 #568D86 / 호버 #70A59D
      btnClass: 'bg-[#568D86] hover:bg-[#70A59D] text-[#EDE6DA] hover:text-white shadow-[0_4px_20px_rgba(86,141,134,0.25)] hover:shadow-[0_4px_25px_rgba(86,141,134,0.4)]',
      theme: 'jade-gold' as const
    }
  ]

  return (
    <main className="relative min-h-screen bg-[#0a0514]">
      <GlobalBackground src="/image/main4.png">
        <Navigation />

        <div className="relative z-10 pt-44 pb-24">
          <div className="container-premium">
            
            {/* Header Section */}
            <div className="text-center mb-20">
              <Reveal>
                <h1 className="text-4xl md:text-6xl font-elegant font-bold text-white mb-8 tracking-widest">
                  선천코드 <span className="text-[var(--accent-gold)]">리포트</span>
                </h1>
                <p className="text-[#EDE6DA] opacity-90 text-[19px] sm:text-xl md:text-[22px] font-elegant leading-[1.8] max-w-3xl mx-auto break-keep">
                  사랑의 비밀, 인연의 결, 풍요의 흐름까지<br />
                  <span className="text-[var(--accent-gold-light)]">타고난 선천코드에 담긴 나만의 이야기를 백도화의 시선으로 풀어드립니다.</span>
                </p>
              </Reveal>
            </div>

            {/* Reports Grid */}
            <div className="space-y-12">
              {reports.map((report, idx) => {
                const isJadeGold = report.theme === 'jade-gold'
                return (
                  <Reveal key={report.id} delayMs={idx * 200}>
                    <div className={`gungjung-glass overflow-hidden rounded-[2rem] border transition-all duration-700 group ${report.cardClass}`}>
                      <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                        
                        {/* Image Side */}
                        <div className={`relative h-[300px] md:h-[450px] overflow-hidden ${idx % 2 === 1 ? 'md:order-last' : ''}`}>
                          <Image 
                            src={report.image} 
                            alt={report.title}
                            fill
                            priority={idx === 0}
                            className={`object-cover transition-transform duration-[3000ms] group-hover:scale-110 ${
                              isJadeGold ? '' : 'opacity-60 group-hover:opacity-80'
                            }`}
                          />
                          {!isJadeGold && (
                            <div className={`absolute inset-0 bg-gradient-to-t md:bg-gradient-to-${idx % 2 === 1 ? 'l' : 'r'} from-[#0a0514] via-transparent to-transparent`}></div>
                          )}
                        </div>

                        {/* Content Side */}
                        <div className="p-8 md:p-16 space-y-6">
                          <span className={`text-[10px] md:text-xs tracking-[0.4em] block font-bold uppercase ${
                            isJadeGold ? 'text-[#8FD3B6]' : 'text-[var(--accent-gold)] opacity-70'
                          }`}>
                            {report.label}
                          </span>
                          <h2 className={`text-3xl md:text-4xl font-elegant font-bold text-white transition-colors duration-500 ${
                            isJadeGold ? 'group-hover:text-[#E6BE8A]' : 'group-hover:text-[var(--accent-gold-light)]'
                          }`}>
                            {report.title}
                          </h2>
                          <p className="text-base md:text-lg text-[#EDE6DA] opacity-60 leading-relaxed break-keep font-light">
                            {report.desc}
                          </p>
                          <div className={`pt-6 ${isJadeGold ? 'flex justify-end' : ''}`}>
                            <Link 
                              href={report.link}
                              className={`inline-flex items-center px-10 py-4 rounded-xl transition-all duration-500 text-sm font-bold tracking-widest hover:-translate-y-0.5 ${report.btnClass}`}
                            >
                              {report.btnText}
                            </Link>
                          </div>
                        </div>

                      </div>
                    </div>
                  </Reveal>
                )
              })}
            </div>

            {/* Footer Guidance */}
            <div className="mt-24 text-center">
              <Reveal>
                <p className="text-[#EDE6DA] opacity-60 text-base md:text-lg mb-10 max-w-2xl mx-auto break-keep leading-relaxed font-light italic">
                  “나만의 선천코드를 읽기 전, 사랑과 관계, 풍요의 비밀을 먼저 만나보세요.”
                </p>
                <Link 
                  href="/ebooks"
                  className="text-[var(--accent-gold)] opacity-50 hover:opacity-100 hover:text-[var(--accent-gold-light)] transition-all flex items-center justify-center gap-2 group mx-auto w-fit"
                >
                  <span className="text-sm tracking-[0.2em]">백도화 비급서 둘러보기</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </Reveal>
            </div>

          </div>
        </div>

        <Footer />
      </GlobalBackground>
    </main>
  )
}
