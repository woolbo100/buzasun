'use client'

import Link from 'next/link'
import Image from 'next/image'
import Reveal from './Reveal'

export default function CompatibilityBanner() {
  return (
    <section className="relative pt-4 pb-16 md:pt-6 md:pb-24 overflow-hidden">
      <div className="container-premium relative z-10">
        <Reveal>
          <div className="gungjung-glass overflow-hidden rounded-3xl border border-[rgba(216,191,163,0.15)] bg-gradient-to-br from-[#1a0f2e]/80 to-[#0a0514]/90 group relative min-h-[400px] md:min-h-[500px]">
            {/* Left Content Area */}
            <div className="relative z-10 w-full md:w-1/2 p-8 md:p-16 lg:p-20 flex flex-col justify-center text-left">
              <span className="text-[10px] md:text-xs tracking-[0.4em] text-[var(--accent-gold)] opacity-70 mb-4 block font-bold uppercase">
                PREMIUM COMPATIBILITY READING
              </span>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-elegant font-bold text-white mb-6 leading-tight group-hover:text-[var(--accent-gold-light)] transition-colors duration-500">
                프리미엄 궁합 리포트
              </h2>

              <p className="text-base md:text-lg text-[var(--accent-gold-light)] opacity-90 mb-6 font-elegant italic tracking-wide">
                두 사람의 사랑은 어디에서 만나고,<br className="hidden sm:block" /> 어디에서 흔들릴까요?
              </p>
              
              <p className="text-base md:text-lg text-[#EDE6DA] opacity-60 leading-relaxed mb-10 break-keep font-light">
                두 사람이 서로에게 끌리는 이유, 반복해서 부딪히는 지점, 관계가 깊어질 수 있는 방향을 함께 읽어드립니다.
              </p>
              
              <div>
                <Link
                  href="/reports/premium-compatibility-report"
                  className="inline-flex items-center px-10 py-4 rounded-xl border border-[var(--accent-gold-soft)] text-[var(--accent-gold)] bg-[var(--accent-gold-soft)]/20 hover:bg-[var(--accent-gold-soft)] hover:scale-105 transition-all duration-500 text-sm font-bold tracking-widest shadow-[0_0_20px_rgba(212,178,167,0.1)] hover:shadow-[0_0_30px_rgba(212,178,167,0.2)]"
                >
                  궁합 리포트 자세히 보기
                </Link>
              </div>
            </div>
            
            {/* Right Image Area - Restored to standard layout */}
            <div className="relative md:absolute md:top-0 md:right-0 md:bottom-0 w-full md:w-1/2 min-h-[350px] md:min-h-full overflow-hidden z-0">
              <Image 
                src="/image/love2.png" 
                alt="Premium Compatibility"
                fill
                className="object-cover transition-transform duration-[5000ms] group-hover:scale-110"
              />
            </div>
          </div>
        </Reveal>
      </div>
      
      {/* Background Glow */}
      <div className="absolute -bottom-1/2 -right-1/4 w-[600px] h-[600px] bg-[var(--accent-gold)]/5 blur-[60px] rounded-full pointer-events-none"></div>
    </section>
  )
}
