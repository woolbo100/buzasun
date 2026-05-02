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

  const reports = [
    {
      id: 'love-code',
      title: '선천코드 연애 리포트',
      desc: '나의 타고난 연애 에너지, 반복되는 사랑의 패턴, 끌리는 사람의 유형과 관계의 흐름을 분석합니다.',
      label: 'PREMIUM REPORT',
      btnText: '연애 리포트 자세히 보기',
      link: '/reports/love-code',
      image: '/image/love-code-bg.png', // Reusing existing image if available
      premium: false
    },
    {
      id: 'compatibility',
      title: '프리미엄 궁합 리포트',
      desc: '두 사람이 서로에게 끌리는 이유, 반복해서 부딪히는 지점, 관계가 깊어질 수 있는 방향을 함께 읽어드립니다.',
      label: 'PREMIUM COMPATIBILITY READING',
      btnText: '궁합 리포트 자세히 보기',
      link: '/reports/premium-compatibility',
      image: '/image/premium_compatibility_bg.png', 
      premium: true
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
                <p className="text-[#EDE6DA] opacity-80 text-lg md:text-xl font-elegant leading-relaxed max-w-2xl mx-auto break-keep">
                  나를 이해하는 리포트에서<br className="md:hidden" /> 우리 관계를 읽는 리포트까지<br />
                  <span className="text-[var(--accent-gold-light)]">백도화식 선천코드로 사랑의 흐름을 조용히 읽어드립니다.</span>
                </p>
              </Reveal>
            </div>

            {/* Reports Grid */}
            <div className="space-y-12">
              {reports.map((report, idx) => (
                <Reveal key={report.id} delayMs={idx * 200}>
                  <div className={`gungjung-glass overflow-hidden rounded-[2rem] border transition-all duration-700 hover:shadow-[0_0_50px_rgba(212,178,167,0.15)] group ${
                    report.premium 
                      ? 'border-[rgba(212,175,55,0.25)] bg-gradient-to-br from-[#1a0f2e]/80 to-[#0a0514]/95' 
                      : 'border-white/[0.05] bg-white/[0.03]'
                  }`}>
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                      
                      {/* Image Side */}
                      <div className={`relative h-[300px] md:h-[450px] overflow-hidden ${idx % 2 === 1 ? 'md:order-last' : ''}`}>
                        <Image 
                          src={report.image} 
                          alt={report.title}
                          fill
                          className="object-cover transition-transform duration-[3000ms] group-hover:scale-110 opacity-60 group-hover:opacity-80"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-t md:bg-gradient-to-${idx % 2 === 1 ? 'l' : 'r'} from-[#0a0514] via-transparent to-transparent`}></div>
                      </div>

                      {/* Content Side */}
                      <div className="p-8 md:p-16 space-y-6">
                        <span className="text-[10px] md:text-xs tracking-[0.4em] text-[var(--accent-gold)] opacity-70 block font-bold uppercase">
                          {report.label}
                        </span>
                        <h2 className="text-3xl md:text-4xl font-elegant font-bold text-white group-hover:text-[var(--accent-gold-light)] transition-colors duration-500">
                          {report.title}
                        </h2>
                        <p className="text-base md:text-lg text-[#EDE6DA] opacity-60 leading-relaxed break-keep font-light">
                          {report.desc}
                        </p>
                        <div className="pt-6">
                          <Link 
                            href={report.link}
                            className={`inline-flex items-center px-10 py-4 rounded-xl transition-all duration-500 text-sm font-bold tracking-widest ${
                              report.premium 
                                ? 'bg-[var(--accent-gold)] text-[#120014] hover:brightness-110 shadow-[0_0_20px_rgba(212,175,55,0.3)]' 
                                : 'border border-[var(--accent-gold-soft)] text-[var(--accent-gold)] hover:bg-[var(--accent-gold-soft)]'
                            }`}
                          >
                            {report.btnText}
                          </Link>
                        </div>
                      </div>

                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Footer Guidance */}
            <div className="mt-24 text-center">
              <Reveal>
                <p className="text-[#EDE6DA] opacity-60 text-base md:text-lg mb-10 max-w-2xl mx-auto break-keep leading-relaxed font-light italic">
                  “처음이라면 연애 리포트부터,<br className="md:hidden" /> 이미 마음에 두고 있는 관계가 있다면 궁합 리포트부터 시작하셔도 좋습니다.”
                </p>
                <Link 
                  href="/shop"
                  className="text-[var(--accent-gold)] opacity-50 hover:opacity-100 hover:text-[var(--accent-gold-light)] transition-all flex items-center justify-center gap-2 group mx-auto w-fit"
                >
                  <span className="text-sm tracking-[0.2em]">비밀상점 둘러보기</span>
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
