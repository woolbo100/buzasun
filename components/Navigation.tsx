'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import NorigaeElement from './NorigaeElement'
import { supabase } from '@/lib/supabase'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [ebookMenuOpen, setEbookMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const ebookMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ebookMenuRef.current && !ebookMenuRef.current.contains(e.target as Node)) {
        setEbookMenuOpen(false)
      }
    }
    if (ebookMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [ebookMenuOpen])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  const [mainReportSlug, setMainReportSlug] = useState('love-code-report')

  useEffect(() => {
    async function fetchMainReport() {
      try {
        const { data } = await supabase
          .from('products')
          .select('slug')
          .eq('is_active', true)
          .order('main_sort_order', { ascending: true })
          .limit(1)
          .single()
        
        if (data?.slug) setMainReportSlug(data.slug)
      } catch (err) {
        // ignore
      }
    }
    fetchMainReport()
  }, [])

  // 메뉴 링크 공통 스타일 (hover 애니메이션 포함)
  const menuLinkClass = "relative text-bd-gray hover:text-bd-ivory transition-all duration-300 group"
  const menuLinkStyle = {
    fontSize: '1rem',
    letterSpacing: '0.08em',
    fontWeight: '500',
  }
  
  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-out ${
        scrolled 
          ? 'bg-[rgba(18,0,20,0.85)] backdrop-blur-xl' 
          : 'bg-[rgba(18,0,20,0.3)] backdrop-blur-sm'
      }`}
      style={{
        boxShadow: scrolled 
          ? '0 8px 32px rgba(0, 0, 0, 0.4), 0 0 60px rgba(216, 191, 163, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
          : 'none',
      }}
    >
      {/* 글로우 라인 - 스크롤 시만 강하게 표시 */}
      {scrolled && (
        <div 
          className="absolute bottom-0 left-0 right-0 h-[1.5px] opacity-100 transition-opacity duration-500"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, var(--accent-gold) 50%, transparent 100%)',
            boxShadow: '0 0 15px var(--accent-gold-soft)',
          }}
        />
      )}
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center h-16 md:h-18">
          {/* 로고 - 핫핑크 + 꽃 아이콘 */}
          <Link 
            href="/" 
            className="flex items-center gap-2.5 group/logo transition-all duration-300"
            style={{
              filter: 'drop-shadow(0 0 8px rgba(216, 191, 163, 0.2))',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.filter = 'drop-shadow(0 0 16px rgba(216, 191, 163, 0.4)) brightness(1.1)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.filter = 'drop-shadow(0 0 8px rgba(216, 191, 163, 0.2))'
            }}
          >
            {/* 핫핑크 꽃모양 심볼 */}
            <svg 
              className="w-6 h-6 md:w-7 md:h-7 transition-all duration-300 group-hover/logo:scale-110"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                filter: 'drop-shadow(0 0 8px rgba(216, 191, 163, 0.4))',
              }}
            >
              <path 
                d="M12 2C12 2 8 6 8 10C8 12.2091 9.79086 14 12 14C14.2091 14 16 12.2091 16 10C16 6 12 2 12 2Z" 
                fill="var(--accent-gold)"
                opacity="0.9"
              />
              <path 
                d="M12 22C12 22 8 18 8 14C8 11.7909 9.79086 10 12 10C14.2091 10 16 11.7909 16 14C16 18 12 22 12 22Z" 
                fill="var(--accent-gold)"
                opacity="0.9"
              />
              <path 
                d="M2 12C2 12 6 8 10 8C12.2091 8 14 9.79086 14 12C14 14.2091 12.2091 16 10 16C6 16 2 12 2 12Z" 
                fill="var(--accent-gold)"
                opacity="0.9"
              />
              <path 
                d="M22 12C22 12 18 8 14 8C11.7909 8 10 9.79086 10 12C10 14.2091 11.7909 16 14 16C18 16 22 12 22 12Z" 
                fill="var(--accent-gold)"
                opacity="0.9"
              />
              <circle 
                cx="12" 
                cy="12" 
                r="3" 
                fill="#F5F5F5"
              />
            </svg>
            <span 
              className="text-lg md:text-xl font-elegant font-bold transition-all duration-300"
            >
              <span style={{ 
                color: '#ffffff',
                textShadow: '0 0 20px rgba(255, 255, 255, 0.3)',
              }}>
                백도화
              </span>
              <span style={{ 
                color: 'var(--accent-gold)',
                textShadow: '0 0 20px rgba(216, 191, 163, 0.4)',
              }}>
                {' '}매력학당
              </span>
            </span>
          </Link>

          {/* 데스크탑 메뉴 */}
          <div className="hidden lg:flex items-center space-x-8 ml-auto mr-8">
            <Link href="/about" className={menuLinkClass} style={menuLinkStyle}>
              백도화 소개
              <span 
                className="absolute bottom-0 left-1/2 h-[1.5px] w-0 bg-gradient-to-r from-transparent via-[var(--accent-gold)] to-transparent transition-all duration-500 ease-out -translate-x-1/2 group-hover:w-full"
                style={{
                  boxShadow: '0 0 10px var(--accent-gold-soft)',
                }}
              />
            </Link>
            
            <Link href={`/reports/${mainReportSlug}`} className={menuLinkClass} style={menuLinkStyle}>
              선천코드 리포트
              <span 
                className="absolute bottom-0 left-1/2 h-[1px] w-0 bg-gradient-to-r from-transparent via-[var(--accent-pink)] to-transparent transition-all duration-500 ease-out -translate-x-1/2 group-hover:w-full"
                style={{
                  boxShadow: '0 0 8px var(--accent-pink-soft)',
                }}
              />
            </Link>
            
            {/* 시크릿 비법서 드롭다운 */}
            <div 
              className="relative" 
              ref={ebookMenuRef}
              onMouseEnter={() => setEbookMenuOpen(true)}
              onMouseLeave={() => setEbookMenuOpen(false)}
            >
              <div className="flex items-center">
                <Link
                  href="/ebooks"
                  className={`${menuLinkClass} flex items-center`}
                  style={menuLinkStyle}
                >
                  시크릿 비법서
                  <span 
                    className="absolute bottom-0 left-1/2 h-[1px] w-0 bg-gradient-to-r from-transparent via-[var(--accent-pink)] to-transparent transition-all duration-500 ease-out -translate-x-1/2 group-hover:w-full"
                    style={{
                      boxShadow: '0 0 8px var(--accent-pink-soft)',
                    }}
                  />
                </Link>
                <button
                  onClick={() => setEbookMenuOpen(!ebookMenuOpen)}
                  className="ml-1.5 text-bd-gray hover:text-bd-ivory transition-colors"
                  style={menuLinkStyle}
                  aria-label="드롭다운 메뉴"
                >
                  <i className={`fas fa-chevron-down text-xs transition-transform duration-200 ${ebookMenuOpen ? 'rotate-180' : ''}`}></i>
                </button>
              </div>
              {ebookMenuOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-40 rounded-lg shadow-lg backdrop-blur-xl border transition-all duration-200 animate-in fade-in slide-in-from-top-2"
                  style={{
                    background: 'rgba(26, 6, 38, 0.95)',
                    borderColor: 'var(--accent-gold-soft)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), 0 0 20px var(--accent-gold-soft)',
                  }}
                >
                  <Link 
                    href="/ebooks" 
                    className="block px-4 py-3 text-bd-gray hover:text-bd-ivory hover:bg-bd-bg3 transition-colors text-sm rounded-t-lg"
                    onClick={() => setEbookMenuOpen(false)}
                  >
                    연애비급
                  </Link>
                  <Link 
                    href="/ebooks" 
                    className="block px-4 py-3 text-bd-gray hover:text-bd-ivory hover:bg-bd-bg3 transition-colors text-sm"
                    onClick={() => setEbookMenuOpen(false)}
                  >
                    풍요비책
                  </Link>
                  <Link 
                    href="/ebooks" 
                    className="block px-4 py-3 text-bd-gray hover:text-bd-ivory hover:bg-bd-bg3 transition-colors text-sm rounded-b-lg"
                    onClick={() => setEbookMenuOpen(false)}
                  >
                    재회비방
                  </Link>
                </div>
              )}
            </div>

            <Link href="/shop" className={menuLinkClass} style={menuLinkStyle}>
              비밀상점
              <span 
                className="absolute bottom-0 left-1/2 h-[1px] w-0 bg-gradient-to-r from-transparent via-[var(--accent-pink)] to-transparent transition-all duration-500 ease-out -translate-x-1/2 group-hover:w-full"
                style={{
                  boxShadow: '0 0 8px var(--accent-pink-soft)',
                }}
              />
            </Link>
            
            <Link href="/counseling" className={menuLinkClass} style={menuLinkStyle}>
              상담
              <span 
                className="absolute bottom-0 left-1/2 h-[1px] w-0 bg-gradient-to-r from-transparent via-[var(--accent-pink)] to-transparent transition-all duration-500 ease-out -translate-x-1/2 group-hover:w-full"
                style={{
                  boxShadow: '0 0 8px var(--accent-pink-soft)',
                }}
              />
            </Link>
          </div>

          {/* 오른쪽 아이콘들 */}
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-4 relative">
              <Link href="/cart" className="text-bd-gray hover:text-bd-ivory transition-all duration-300 relative group">
                <i className="fas fa-shopping-cart text-lg"></i>
                <span className="absolute bottom-0 left-1/2 h-[1px] w-0 bg-[var(--accent-gold)] transition-all duration-300 ease-out -translate-x-1/2 group-hover:w-full" style={{ boxShadow: '0 0 8px var(--accent-gold-soft)' }} />
              </Link>
              <Link href="/mypage" className="text-bd-gray hover:text-bd-ivory transition-all duration-300 relative group">
                <i className="fas fa-user text-lg"></i>
                <span className="absolute bottom-0 left-1/2 h-[1px] w-0 bg-[var(--accent-gold)] transition-all duration-300 ease-out -translate-x-1/2 group-hover:w-full" style={{ boxShadow: '0 0 8px var(--accent-gold-soft)' }} />
              </Link>
            </div>

            {/* 모바일 햄버거 메뉴 버튼 */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden text-bd-gray hover:text-bd-ivory transition-colors"
              aria-label="메뉴 토글"
            >
              <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl transition-transform duration-200`}></i>
            </button>
          </div>
        </div>

        {/* 모바일 메뉴 */}
        {mobileMenuOpen && (
          <div 
            className="lg:hidden border-t transition-all duration-300"
            style={{ borderColor: scrolled ? 'rgba(216, 191, 163, 0.2)' : 'rgba(216, 191, 163, 0.1)' }}
          >
            <div className="py-4 space-y-1">
              <Link 
                href="/about" 
                className="block px-4 py-2 text-bd-gray hover:text-bd-ivory hover:bg-bd-bg3 transition-colors rounded-lg mx-2"
                onClick={closeMobileMenu}
              >
                백도화 소개
              </Link>
              <Link 
                href={`/reports/${mainReportSlug}`} 
                className="block px-4 py-2 text-bd-gray hover:text-bd-ivory hover:bg-bd-bg3 transition-colors rounded-lg mx-2"
                onClick={closeMobileMenu}
              >
                선천코드 리포트
              </Link>
              
              {/* 모바일 시크릿 비법서 메뉴 */}
              <div className="px-4 py-2">
                <div className="flex items-center justify-between">
                  <Link
                    href="/ebooks"
                    className="flex-1 text-bd-gray hover:text-bd-ivory transition-colors rounded-lg px-2 py-2"
                    onClick={closeMobileMenu}
                  >
                    시크릿 비법서
                  </Link>
                  <button
                    onClick={() => setEbookMenuOpen(!ebookMenuOpen)}
                    className="text-bd-gray hover:text-bd-ivory transition-colors px-2 py-2"
                    aria-label="드롭다운 메뉴"
                  >
                    <i className={`fas fa-chevron-down text-xs transition-transform duration-200 ${ebookMenuOpen ? 'rotate-180' : ''}`}></i>
                  </button>
                </div>
                {ebookMenuOpen && (
                  <div className="mt-2 ml-4 space-y-1">
                    <Link 
                      href="/ebooks" 
                      className="block py-2 text-bd-muted hover:text-bd-ivory transition-colors text-sm rounded-lg px-2"
                      onClick={closeMobileMenu}
                    >
                      연애비급
                    </Link>
                    <Link 
                      href="/ebooks" 
                      className="block py-2 text-bd-muted hover:text-bd-ivory transition-colors text-sm rounded-lg px-2"
                      onClick={closeMobileMenu}
                    >
                      풍요비책
                    </Link>
                    <Link 
                      href="/ebooks" 
                      className="block py-2 text-bd-muted hover:text-bd-ivory transition-colors text-sm rounded-lg px-2"
                      onClick={closeMobileMenu}
                    >
                      재회비방
                    </Link>
                  </div>
                )}
              </div>

              <Link 
                href="/shop" 
                className="block px-4 py-2 text-bd-gray hover:text-bd-ivory hover:bg-bd-bg3 transition-colors rounded-lg mx-2"
                onClick={closeMobileMenu}
              >
                비밀상점
              </Link>
              <Link 
                href="/counseling" 
                className="block px-4 py-2 text-bd-gray hover:text-bd-ivory hover:bg-bd-bg3 transition-colors rounded-lg mx-2"
                onClick={closeMobileMenu}
              >
                상담
              </Link>
              
              <div 
                className="flex items-center space-x-4 px-4 py-2 border-t mx-2 mt-2" 
                style={{ borderColor: scrolled ? 'rgba(216, 191, 163, 0.2)' : 'rgba(216, 191, 163, 0.1)' }}
              >
                <Link 
                  href="/cart" 
                  className="text-bd-gray hover:text-bd-ivory transition-colors"
                  onClick={closeMobileMenu}
                >
                  <i className="fas fa-shopping-cart text-lg"></i>
                </Link>
                <Link 
                  href="/mypage" 
                  className="text-bd-gray hover:text-bd-ivory transition-colors"
                  onClick={closeMobileMenu}
                >
                  <i className="fas fa-user text-lg"></i>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
