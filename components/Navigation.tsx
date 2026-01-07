'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

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

  return (
    <nav 
      className="fixed top-0 w-full z-50"
      style={{
        background: scrolled ? 'rgba(10, 0, 21, 0.95)' : 'rgba(10, 0, 21, 0.85)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255, 20, 147, 0.1)',
      }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center h-16">
          {/* 로고 */}
          <Link href="/" className="text-xl font-elegant font-bold text-bd-ivory">
            백도화 매력학당
          </Link>

          {/* 데스크탑 메뉴 */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link href="/about" className="text-bd-gray hover:text-bd-ivory transition-colors text-sm">
              백도화 소개
            </Link>
            <Link href="/report" className="text-bd-gray hover:text-bd-ivory transition-colors text-sm">
              선천코드 리포트
            </Link>
            
            {/* 전자책 드롭다운 */}
            <div className="relative" ref={ebookMenuRef}>
              <button
                onClick={() => setEbookMenuOpen(!ebookMenuOpen)}
                className="text-bd-gray hover:text-bd-ivory transition-colors text-sm flex items-center"
              >
                전자책
                <i className={`fas fa-chevron-down ml-1 text-xs transition-transform ${ebookMenuOpen ? 'rotate-180' : ''}`}></i>
              </button>
              {ebookMenuOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-40 rounded-lg shadow-lg"
                  style={{
                    background: '#1a0a2e',
                    border: '1px solid rgba(255, 20, 147, 0.2)',
                  }}
                >
                  <Link 
                    href="/ebooks/love" 
                    className="block px-4 py-3 text-bd-gray hover:text-bd-ivory hover:bg-bd-bg3 transition-colors text-sm"
                    onClick={() => setEbookMenuOpen(false)}
                  >
                    연애비급
                  </Link>
                  <Link 
                    href="/ebooks/prosperity" 
                    className="block px-4 py-3 text-bd-gray hover:text-bd-ivory hover:bg-bd-bg3 transition-colors text-sm"
                    onClick={() => setEbookMenuOpen(false)}
                  >
                    풍요비책
                  </Link>
                  <Link 
                    href="/ebooks/reunion" 
                    className="block px-4 py-3 text-bd-gray hover:text-bd-ivory hover:bg-bd-bg3 transition-colors text-sm"
                    onClick={() => setEbookMenuOpen(false)}
                  >
                    재회비방
                  </Link>
                </div>
              )}
            </div>

            <Link href="/shop" className="text-bd-gray hover:text-bd-ivory transition-colors text-sm">
              아이템샵
            </Link>
            <Link href="/counseling" className="text-bd-gray hover:text-bd-ivory transition-colors text-sm">
              상담
            </Link>
          </div>

          {/* 오른쪽 아이콘들 */}
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-4">
              <Link href="/cart" className="text-bd-gray hover:text-bd-ivory transition-colors">
                <i className="fas fa-shopping-cart text-lg"></i>
              </Link>
              <Link href="/mypage" className="text-bd-gray hover:text-bd-ivory transition-colors">
                <i className="fas fa-user text-lg"></i>
              </Link>
            </div>

            {/* 모바일 햄버거 메뉴 버튼 */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden text-bd-gray hover:text-bd-ivory transition-colors"
            >
              <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>

        {/* 모바일 메뉴 */}
        {mobileMenuOpen && (
          <div 
            className="lg:hidden border-t"
            style={{ borderColor: 'rgba(255, 20, 147, 0.1)' }}
          >
            <div className="py-4 space-y-1">
              <Link 
                href="/about" 
                className="block px-4 py-2 text-bd-gray hover:text-bd-ivory hover:bg-bd-bg3 transition-colors"
                onClick={closeMobileMenu}
              >
                백도화 소개
              </Link>
              <Link 
                href="/report" 
                className="block px-4 py-2 text-bd-gray hover:text-bd-ivory hover:bg-bd-bg3 transition-colors"
                onClick={closeMobileMenu}
              >
                선천코드 리포트
              </Link>
              
              {/* 모바일 전자책 메뉴 */}
              <div className="px-4 py-2">
                <button
                  onClick={() => setEbookMenuOpen(!ebookMenuOpen)}
                  className="w-full flex justify-between items-center text-bd-gray hover:text-bd-ivory transition-colors"
                >
                  <span>전자책</span>
                  <i className={`fas fa-chevron-down text-xs transition-transform ${ebookMenuOpen ? 'rotate-180' : ''}`}></i>
                </button>
                {ebookMenuOpen && (
                  <div className="mt-2 ml-4 space-y-1">
                    <Link 
                      href="/ebooks/love" 
                      className="block py-2 text-bd-muted hover:text-bd-ivory transition-colors text-sm"
                      onClick={closeMobileMenu}
                    >
                      연애비급
                    </Link>
                    <Link 
                      href="/ebooks/prosperity" 
                      className="block py-2 text-bd-muted hover:text-bd-ivory transition-colors text-sm"
                      onClick={closeMobileMenu}
                    >
                      풍요비책
                    </Link>
                    <Link 
                      href="/ebooks/reunion" 
                      className="block py-2 text-bd-muted hover:text-bd-ivory transition-colors text-sm"
                      onClick={closeMobileMenu}
                    >
                      재회비방
                    </Link>
                  </div>
                )}
              </div>

              <Link 
                href="/shop" 
                className="block px-4 py-2 text-bd-gray hover:text-bd-ivory hover:bg-bd-bg3 transition-colors"
                onClick={closeMobileMenu}
              >
                아이템샵
              </Link>
              <Link 
                href="/counseling" 
                className="block px-4 py-2 text-bd-gray hover:text-bd-ivory hover:bg-bd-bg3 transition-colors"
                onClick={closeMobileMenu}
              >
                상담
              </Link>
              
              <div className="flex items-center space-x-4 px-4 py-2 border-t" style={{ borderColor: 'rgba(255, 20, 147, 0.1)' }}>
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
