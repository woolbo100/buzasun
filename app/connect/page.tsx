import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import GlobalBackground from '@/components/GlobalBackground'
import Link from 'next/link'

export const metadata = {
  title: 'Connect | 백도화 매력학당',
  description: '백도화 매력학당의 공식 채널과 소셜 링크를 확인할 수 있는 페이지입니다.',
}

const socialLinks = [
  {
    name: 'Instagram',
    desc: '브랜드 무드와 일상을 가장 빠르게 만나는 공간',
    url: 'https://instagram.com/baekdohwa',
    color: '#E1306C',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: 'Threads',
    desc: '관계와 감정에 대한 짧고 가벼운 인사이트',
    url: 'https://threads.net/@baekdohwa',
    color: '#ffffff',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 18.5c-3.59 0-6.5-2.91-6.5-6.5s2.91-6.5 6.5-6.5 6.5 2.91 6.5 6.5-2.91 6.5-6.5 6.5zm0-11c-2.485 0-4.5 2.015-4.5 4.5s2.015 4.5 4.5 4.5 4.5-2.015 4.5-4.5-2.015-4.5-4.5-4.5zm0 7.5c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
      </svg>
    ),
  },
  {
    name: 'Naver Blog',
    desc: '리포트 해설과 상담 관련 글을 차분하게 정리한 채널',
    url: 'https://blog.naver.com/buzasun',
    color: '#2DB400',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16.273 12.845L7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727v12.845z" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    desc: '매력학당의 가이드와 영상 콘텐츠를 보는 공간',
    url: 'https://youtube.com/@baekdohwa',
    color: '#FF0000',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505a3.017 3.017 0 0 0-2.122 2.136C0 8.055 0 12 0 12s0 3.945.501 5.814a3.017 3.017 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.945 24 12 24 12s0-3.945-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
]

export default function ConnectPage() {
  return (
    <main className="relative min-h-screen">
      <GlobalBackground src="/image/main.png">
        <Navigation />

        <div className="relative z-10 px-6 pb-24 pt-44">
          <div className="container mx-auto max-w-4xl">
            <div className="mb-16 text-center">
              <h1 className="mb-6 text-3xl font-elegant font-bold tracking-wider text-[var(--accent-gold)] md:text-5xl">
                Connect with Baekdohwa
              </h1>
              <p className="font-elegant text-base tracking-[0.1em] text-[#EDE6DA] opacity-80 md:text-lg">
                백도화 매력학당과 이어지는 공식 채널을 통해
                <br className="hidden md:block" />
                가장 편한 방식으로 소식과 상담 안내를 받아보세요.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-2xl transition-all duration-500"
                >
                  <div className="gungjung-glass flex items-center gap-6 border border-white/[0.05] p-8 transition-all group-hover:border-[var(--accent-gold-soft)] group-hover:bg-white/[0.08] md:p-10">
                    <div
                      className="flex h-14 w-14 items-center justify-center rounded-full border border-white/[0.05] bg-white/[0.03] transition-all duration-500 group-hover:scale-110"
                      style={{ color: link.color }}
                    >
                      {link.icon}
                    </div>
                    <div>
                      <h3 className="mb-1 text-xl font-elegant font-bold text-[var(--accent-gold-light)] transition-colors group-hover:text-white">
                        {link.name}
                      </h3>
                      <p className="text-sm text-[#EDE6DA] opacity-50 transition-opacity group-hover:opacity-70">
                        {link.desc}
                      </p>
                    </div>
                    <div className="ml-auto transform opacity-20 transition-all group-hover:translate-x-1 group-hover:opacity-100">
                      <svg className="h-5 w-5 text-[var(--accent-gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-20 text-center">
              <p className="mb-8 text-sm italic text-[#EDE6DA] opacity-40">
                모든 공식 채널은 백도화 매력학당에서 직접 운영합니다.
              </p>
              <Link
                href="/support"
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--accent-gold-soft)] px-8 py-3 text-sm font-medium text-[var(--accent-gold)] transition-all hover:bg-[var(--accent-gold-soft)]"
              >
                고객센터로 이동하기
              </Link>
            </div>
          </div>
        </div>

        <Footer />
      </GlobalBackground>
    </main>
  )
}
