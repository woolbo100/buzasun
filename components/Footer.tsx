import Link from 'next/link'

export default function Footer() {
  return (
    <footer 
      className="py-16 px-6 relative z-10 border-t border-[rgba(212,175,55,0.15)] bg-bd-bg" 
      style={{ 
        backgroundImage: 'linear-gradient(to bottom, rgba(18, 0, 20, 0.95), rgba(10, 0, 12, 1))',
      }}
    >
      {/* Hanji texture overlay (optional/subtle) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/natural-paper.png")' }}></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* 1. ABOUT */}
          <div className="space-y-4">
            <Link href="/about">
              <h3 className="text-sm font-elegant font-bold text-[var(--accent-gold)] tracking-[0.2em] mb-6 hover:brightness-125 transition-all cursor-pointer">ABOUT</h3>
            </Link>
            <div className="text-[#EDE6DA] opacity-80 text-sm leading-relaxed space-y-2">
              <p>
                백도화는 반복되는 사랑의 패턴을 읽고 관계의 흐름을 해석하는 프리미엄 감정 리포트 브랜드입니다.
              </p>
              <p>
                운세가 아닌 당신만의 관계 코드를 조용히 읽어드립니다.
              </p>
            </div>
          </div>

          {/* 2. POLICY */}
          <div className="space-y-4">
            <h3 className="text-sm font-elegant font-bold text-[var(--accent-gold)] tracking-[0.2em] mb-6">POLICY</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy" className="text-[#EDE6DA] opacity-60 hover:opacity-100 hover:text-[var(--accent-gold)] transition-all text-sm">개인정보처리방침</Link>
              </li>
              <li>
                <Link href="/terms" className="text-[#EDE6DA] opacity-60 hover:opacity-100 hover:text-[var(--accent-gold)] transition-all text-sm">이용약관</Link>
              </li>
              <li>
                <Link href="/refund" className="text-[#EDE6DA] opacity-60 hover:opacity-100 hover:text-[var(--accent-gold)] transition-all text-sm">환불 및 교환 정책</Link>
              </li>
            </ul>
          </div>

          {/* 3. SUPPORT */}
          <div className="space-y-4">
            <h3 className="text-sm font-elegant font-bold text-[var(--accent-gold)] tracking-[0.2em] mb-6">SUPPORT</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/faq" className="text-[#EDE6DA] opacity-60 hover:opacity-100 hover:text-[var(--accent-gold)] transition-all text-sm">FAQ</Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#EDE6DA] opacity-60 hover:opacity-100 hover:text-[var(--accent-gold)] transition-all text-sm">고객센터</Link>
              </li>
              <li>
                <a href="mailto:buzasun@naver.com" className="text-[#EDE6DA] opacity-60 hover:opacity-100 hover:text-[var(--accent-gold)] transition-all text-sm">문의하기 (이메일)</a>
              </li>
              <li>
                <a href="https://pf.kakao.com/_xxxx" target="_blank" rel="noopener noreferrer" className="text-[#EDE6DA] opacity-60 hover:opacity-100 hover:text-[var(--accent-gold)] transition-all text-sm">카카오톡 채널</a>
              </li>
            </ul>
          </div>

          {/* 4. BUSINESS INFO */}
          <div className="space-y-4 lg:col-span-1">
            <h3 className="text-sm font-elegant font-bold text-[var(--accent-gold)] tracking-[0.2em] mb-6">BUSINESS INFO</h3>
            <div className="text-[#EDE6DA] opacity-60 text-[11px] leading-loose">
              <p>상호명 : 이끌림</p>
              <p>대표자 : 백진선</p>
              <p>사업자등록번호 : 605-22-78891</p>
              <p>통신판매업 신고번호 : 2021-부산해운대-1716</p>
              <p>주소 : 부산광역시 해운대구 반송로 621(석대동) 203호</p>
              <p>Email : buzasun@naver.com</p>
              <p>Customer Center : 1600-2805</p>
              <p>운영시간 : Mon–Fri 10:00–18:00</p>
            </div>
          </div>

        </div>

        {/* Brand Message Section */}
        <div className="border-t border-[rgba(212,175,55,0.05)] pt-12 pb-8 text-center">
          {/* Footer Logo 추가 */}
          <div className="flex flex-col items-center mb-8 opacity-80">
            <div className="flex items-center gap-2 mb-2 scale-90">
              <svg 
                className="w-5 h-5 md:w-6 md:h-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  filter: 'drop-shadow(0 0 5px rgba(216, 191, 163, 0.2))',
                }}
              >
                <path 
                  d="M12 2C12 2 8 6 8 10C8 12.2091 9.79086 14 12 14C14.2091 14 16 12.2091 16 10C16 6 12 2 12 2Z" 
                  fill="var(--accent-gold-light)"
                  opacity="0.8"
                />
                <path 
                  d="M12 22C12 22 8 18 8 14C8 11.7909 9.79086 10 12 10C14.2091 10 16 11.7909 16 14C16 18 12 22 12 22Z" 
                  fill="var(--accent-gold-light)"
                  opacity="0.8"
                />
                <path 
                  d="M2 12C2 12 6 8 10 8C12.2091 8 14 9.79086 14 12C14 14.2091 12.2091 16 10 16C6 16 2 12 2 12Z" 
                  fill="var(--accent-gold-light)"
                  opacity="0.8"
                />
                <path 
                  d="M22 12C22 12 18 8 14 8C11.7909 8 10 9.79086 10 12C10 14.2091 11.7909 16 14 16C18 16 22 12 22 12Z" 
                  fill="var(--accent-gold-light)"
                  opacity="0.8"
                />
                <circle cx="12" cy="12" r="2.5" fill="#F5F5F5" />
              </svg>
              <div className="text-sm md:text-base font-elegant font-bold tracking-wider">
                <span className="text-[#F5F5F5] opacity-90">백도화</span>
                <span className="text-[var(--accent-gold-light)] opacity-80"> 매력학당</span>
              </div>
            </div>
          </div>

          <p className="text-[var(--accent-gold-light)] text-sm md:text-base font-elegant tracking-[0.3em] mb-8 opacity-70" 
             style={{ textShadow: '0 0 10px rgba(212, 178, 167, 0.15)' }}>
            “반복되는 사랑의 패턴을 읽어드립니다”
          </p>
          
          <div className="flex flex-col items-center gap-4">
            <p className="text-[#EDE6DA] opacity-30 text-[10px] tracking-[0.2em]">
              © 2026 Baekdohwa. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}



