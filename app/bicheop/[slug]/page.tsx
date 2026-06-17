import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import GlobalBackground from '@/components/GlobalBackground'
import Reveal from '@/components/Reveal'
import MarkdownRenderer from '@/components/MarkdownRenderer'
import { getBicheopPostBySlug, getBicheopPosts } from '@/lib/bicheop'
import { Calendar, BookOpen, ArrowLeft, ArrowRight } from 'lucide-react'

interface PostDetailPageProps {
  params: {
    slug: string;
  };
}

// 검색엔진 노출을 위한 동적 메타태그(SEO) 생성기
export async function generateMetadata({ params }: PostDetailPageProps): Promise<Metadata> {
  const post = getBicheopPostBySlug(params.slug)
  if (!post) {
    return {
      title: '비첩 기록을 찾을 수 없습니다 | 백도화',
    }
  }
  return {
    title: `${post.seoTitle || post.title} | 백도화 매력학당`,
    description: post.seoDescription || post.excerpt,
    openGraph: {
      title: post.seoTitle || post.title,
      description: post.seoDescription || post.excerpt,
      images: [
        {
          url: post.thumbnail || '/image/product-love-report.png',
        },
      ],
    },
  }
}

export default function BicheopPostDetailPage({ params }: PostDetailPageProps) {
  const post = getBicheopPostBySlug(params.slug)

  // 글이 없으면 Next.js의 404 페이지로 정중하게 보냅니다
  if (!post) {
    notFound()
  }

  // 관련 글 추천 로직: 같은 카테고리에 속한 글 2개를 가져옵니다 (현재 읽고 있는 글 제외)
  const allPosts = getBicheopPosts()
  let relatedPosts = allPosts
    .filter(p => p.slug !== post.slug && (p.category === post.category || (post.category === 'mind' && p.category === 'mind-study')))
    .slice(0, 2)

  // 만약 같은 카테고리의 다른 글이 부족하면, 카테고리 관계없이 최신 글을 추천합니다
  if (relatedPosts.length < 2) {
    const extraPosts = allPosts
      .filter(p => p.slug !== post.slug && !relatedPosts.some(r => r.slug === p.slug))
      .slice(0, 2 - relatedPosts.length)
    relatedPosts = [...relatedPosts, ...extraPosts]
  }

  return (
    <main className="relative min-h-screen bg-[#0a0514] text-white selection:bg-[#BA8D7E] selection:text-black font-sans">
      <GlobalBackground src="/image/shop-hero.png" brightCenter={false}>
        <Navigation />

        <div className="relative z-10 pt-40 pb-24">
          <div className="container-premium max-w-3xl mx-auto px-6">
            
            {/* 뒤로 가기 링크 */}
            <Reveal delayMs={50}>
              <div className="mb-8">
                <Link
                  href="/bicheop"
                  className="inline-flex items-center gap-2 text-xs text-white/40 hover:text-[#BA8D7E] transition-colors duration-300 uppercase tracking-widest font-bold"
                >
                  <ArrowLeft className="w-4 h-4" /> 비첩 목록으로 돌아가기
                </Link>
              </div>
            </Reveal>

            {/* 글 헤더 영역 */}
            <header className="mb-12">
              <Reveal delayMs={100}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-block px-3 py-1 rounded-full text-[9px] font-bold tracking-widest text-[#BA8D7E] bg-[#2D0A1E]/80 border border-[#BA8D7E]/20 uppercase">
                    {post.categoryName}
                  </span>
                  <span className="text-[10px] text-white/30 tracking-widest font-mono flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-white/20" />
                    {post.date}
                  </span>
                </div>
                <h1 className="text-3xl md:text-4xl font-elegant font-bold text-white leading-snug mb-6 break-keep">
                  {post.title}
                </h1>
                <p className="text-sm md:text-base text-[#EDE6DA]/60 leading-relaxed font-light break-keep border-l-2 border-[#BA8D7E]/30 pl-4 py-1 italic">
                  {post.excerpt}
                </p>
              </Reveal>
            </header>

            {/* 썸네일 대형 비주얼 */}
            {post.thumbnail && (
              <Reveal delayMs={150}>
                <div className="relative aspect-video w-full rounded-[24px] overflow-hidden border border-white/10 shadow-[0_15px_30px_rgba(0,0,0,0.4)] mb-12">
                  <Image
                    src={post.thumbnail}
                    alt={post.title}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0514]/40 to-transparent"></div>
                </div>
              </Reveal>
            )}

            {/* 본문 콘텐츠 영역 (고풍스러운 비밀 리포트 질감의 gungjung-glass 카드 내부에 배치) */}
            <Reveal delayMs={200}>
              <article className="gungjung-glass p-8 md:p-12 border-white/5 rounded-[32px] bg-gradient-to-b from-white/[0.02] to-transparent shadow-[0_20px_50px_rgba(0,0,0,0.5)] mb-20">
                <MarkdownRenderer content={post.content} />
              </article>
            </Reveal>

            {/* 하단 관련 추천 글 영역 */}
            {relatedPosts.length > 0 && (
              <section className="border-t border-white/10 pt-16">
                <Reveal>
                  <h3 className="text-lg md:text-xl font-elegant font-bold text-white tracking-widest mb-8 border-b border-white/5 pb-4">
                    다른 비첩 기록 <span className="text-[#BA8D7E]">추천</span>
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {relatedPosts.map((relatedPost) => (
                      <Link
                        key={relatedPost.slug}
                        href={`/bicheop/${relatedPost.slug}`}
                        className="gungjung-glass p-5 rounded-2xl border border-white/5 hover:border-[#BA8D7E]/30 hover:shadow-[0_10px_20px_rgba(186,141,126,0.05)] transition-all duration-300 flex gap-4 items-center group bg-white/[0.01]"
                      >
                        {/* 미니 썸네일 */}
                        <div className="relative w-16 h-16 rounded-lg overflow-hidden shrink-0 border border-white/10 bg-[#0a0514]">
                          <Image
                            src={relatedPost.thumbnail || '/image/product-love-report.png'}
                            alt={relatedPost.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        
                        {/* 간략 텍스트 */}
                        <div className="min-w-0">
                          <span className="text-[9px] tracking-wider text-[#BA8D7E] font-bold block mb-1">
                            {relatedPost.categoryName}
                          </span>
                          <h4 className="text-sm font-bold text-white group-hover:text-[#BA8D7E] transition-colors truncate mb-1">
                            {relatedPost.title}
                          </h4>
                          <span className="text-[9px] text-white/30 font-mono">
                            {relatedPost.date}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </Reveal>
              </section>
            )}

          </div>
        </div>

        <Footer />
      </GlobalBackground>
    </main>
  )
}
