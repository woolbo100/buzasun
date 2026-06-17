import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import GlobalBackground from '@/components/GlobalBackground'
import Reveal from '@/components/Reveal'
import { getBicheopPosts } from '@/lib/bicheop'
import { Calendar, BookOpen, ArrowRight } from 'lucide-react'

export const metadata = {
  title: '비첩 | 백도화 매력학당',
  description: '백도화의 비첩은 사랑, 재회, 풍요, 매력, 마음의 흐름을 읽어 내 인연과 운명의 결을 읽는 은밀한 기록입니다.',
}

export default function BicheopListPage() {
  const posts = getBicheopPosts()

  // 카테고리 탭 리스트 정의
  const categories = [
    { name: '전체', href: '/bicheop', active: true },
    { name: '연애비첩', href: '/bicheop/love', active: false },
    { name: '재회비첩', href: '/bicheop/reunion', active: false },
    { name: '풍요비첩', href: '/bicheop/abundance', active: false },
    { name: '매력비첩', href: '/bicheop/charm', active: false },
    { name: '마음비첩', href: '/bicheop/mind', active: false },
  ]

  return (
    <main className="relative min-h-screen bg-[#0a0514] text-white selection:bg-[#BA8D7E] selection:text-black font-sans">
      <GlobalBackground src="/image/shop-hero.png" brightCenter={false}>
        <Navigation />

        <div className="relative z-10 pt-40 pb-24">
          <div className="container-premium max-w-5xl mx-auto px-6">
            
            {/* 상단 타이틀 영역 */}
            <section className="text-center mb-16">
              <Reveal delayMs={100}>
                <div className="mb-4 flex justify-center items-center gap-2">
                  <span className="h-[1px] w-6 bg-[#BA8D7E]/30"></span>
                  <span className="text-xs md:text-sm font-bold tracking-[0.3em] text-[#BA8D7E] uppercase font-elegant">
                    Secret Records
                  </span>
                  <span className="h-[1px] w-6 bg-[#BA8D7E]/30"></span>
                </div>
                <h1 className="text-5xl md:text-7xl font-elegant font-bold text-white mb-6 tracking-wide leading-tight">
                  비<span className="text-[#BA8D7E]">첩</span> <span className="text-[#BA8D7E] font-normal font-serif text-3xl md:text-5xl">(秘帖)</span>
                </h1>
                <p className="text-sm md:text-base text-[#EDE6DA] opacity-75 max-w-xl mx-auto break-keep leading-relaxed font-light font-elegant italic">
                  “백도화의 비첩은 사랑, 재회, 풍요, 매력, 마음의 흐름을 읽어 내 인연과 운명의 결을 읽는 은밀한 기록입니다.”
                </p>
              </Reveal>
            </section>

            {/* 카테고리 탭 메뉴 */}
            <Reveal delayMs={150}>
              <div className="flex justify-center flex-wrap gap-2 md:gap-3 mb-12 border-b border-white/5 pb-6">
                {categories.map((cat) => (
                  <Link
                    key={cat.href}
                    href={cat.href}
                    className={`px-5 py-2.5 rounded-full text-xs md:text-sm transition-all duration-300 font-medium tracking-wider border ${
                      cat.active
                        ? 'bg-[#BA8D7E] text-[#2D0A1E] border-[#BA8D7E] shadow-[0_0_15px_rgba(186,141,126,0.25)] font-bold'
                        : 'bg-white/5 text-white/50 border-white/5 hover:text-white hover:bg-white/10 hover:border-white/10'
                    }`}
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            </Reveal>

            {/* 글 목록 카드 그리드 */}
            {posts.length === 0 ? (
              <Reveal delayMs={200}>
                <div className="gungjung-glass p-16 text-center border-white/5 rounded-[24px]">
                  <BookOpen className="w-10 h-10 text-[#BA8D7E]/30 mx-auto mb-4" />
                  <p className="text-[#EDE6DA] opacity-50 text-sm">등록된 비첩 기록이 없습니다.</p>
                </div>
              </Reveal>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {posts.map((post, idx) => (
                  <Reveal key={post.slug} delayMs={idx * 80}>
                    <article className="gungjung-glass rounded-[24px] border border-white/5 bg-gradient-to-b from-white/[0.03] to-[#2D0A1E]/5 overflow-hidden hover:border-[#BA8D7E]/30 hover:shadow-[0_15px_30px_rgba(186,141,126,0.08)] transition-all duration-500 flex flex-col h-full group">
                      
                      {/* 썸네일 영역 */}
                      <Link href={`/bicheop/${post.slug}`} className="relative aspect-video w-full overflow-hidden block bg-[#0a0514] border-b border-white/5">
                        <Image
                          src={post.thumbnail || '/image/product-love-report.png'}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-[6000ms] group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0514]/60 to-transparent"></div>
                        
                        {/* 카테고리 태그 */}
                        <span className="absolute top-4 left-4 inline-block px-3 py-1 rounded-full text-[9px] font-bold tracking-widest text-[#BA8D7E] bg-[#2D0A1E]/90 border border-[#BA8D7E]/20 uppercase">
                          {post.categoryName}
                        </span>
                      </Link>

                      {/* 本문 영역 */}
                      <div className="p-6 md:p-8 flex-grow flex flex-col justify-between">
                        <div className="space-y-4">
                          {/* 날짜 */}
                          <div className="flex items-center gap-1.5 text-[10px] text-white/30 uppercase tracking-widest font-mono">
                            <Calendar className="w-3.5 h-3.5 text-white/20" />
                            {post.date}
                          </div>
                          
                          {/* 제목 */}
                          <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-[#BA8D7E] transition-colors leading-snug break-keep font-elegant">
                            <Link href={`/bicheop/${post.slug}`}>{post.title}</Link>
                          </h3>
                          
                          {/* 요약 */}
                          <p className="text-xs md:text-sm text-[#EDE6DA]/60 leading-relaxed font-light break-keep line-clamp-3">
                            {post.excerpt}
                          </p>
                        </div>

                        {/* 하단 버튼 */}
                        <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-end">
                          <Link
                            href={`/bicheop/${post.slug}`}
                            className="inline-flex items-center gap-1.5 text-xs text-[#BA8D7E] hover:text-white transition-colors duration-300 font-bold group/btn tracking-widest"
                          >
                            자세히 보기
                            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                          </Link>
                        </div>
                      </div>

                    </article>
                  </Reveal>
                ))}
              </div>
            )}

          </div>
        </div>

        <Footer />
      </GlobalBackground>
    </main>
  )
}
