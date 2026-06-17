'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import NorigaeElement from './NorigaeElement'
import { ShoppingCart, User, Menu, X, ChevronDown } from 'lucide-react'
import { supabase } from '@/lib/supabase'
import { useCart } from '@/hooks/useCart'

export default function Navigation() {
  const showConsultMenu = false
  const showEbooksMenu = false
  const showAboutMenu = true
  const consultMenuLabel = '프리미엄 1:1 상담'
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileBicheopOpen, setMobileBicheopOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<'reports' | 'ebooks' | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const [user, setUser] = useState<any>(null)
  const { totalCount } = useCart()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()

    // Auth state check
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      setUser(user)
    }
    checkUser()

    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user || null)
    })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      authListener.subscription.unsubscribe()
    }
  }, [])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveDropdown(null)
      }
    }
    if (activeDropdown) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [activeDropdown])

  const toggleDropdown = (type: 'reports' | 'ebooks') => {
    setActiveDropdown(activeDropdown === type ? null : type)
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
    setActiveDropdown(null)
    setMobileBicheopOpen(false)
  }

  const [mainReportSlug, setMainReportSlug] = useState('baekdohwa-report')

  useEffect(() => {
    async function fetchMainReport() {
      try {
        const { data } = await supabase
          .from('products')
          .select('slug')
          .eq('is_active', true)
          .order('sort_order', { ascending: true })
          .limit(1)
          .single()

        if (data?.slug) setMainReportSlug(data.slug)
      } catch (err) {
        // ignore
      }
    }
    fetchMainReport()
  }, [])

  const menuLinkClass = 'relative text-bd-gray hover:text-bd-ivory transition-all duration-300 group'
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
              <circle cx="12" cy="12" r="3" fill="#F5F5F5" />
            </svg>
            <span className="text-lg md:text-xl font-elegant font-bold transition-all duration-300">
              <span
                style={{
                  color: '#ffffff',
                  textShadow: '0 0 20px rgba(255, 255, 255, 0.3)',
                }}
              >
                백도화
              </span>
              <span
                style={{
                  color: 'var(--accent-gold)',
                  textShadow: '0 0 20px rgba(216, 191, 163, 0.4)',
                }}
              >
                {' '}
                매력학당
              </span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center space-x-8 ml-auto mr-8" ref={dropdownRef}>
            {showAboutMenu && (
              <Link href="/about" className={menuLinkClass} style={menuLinkStyle}>
                백도화 소개
                <span
                  className="absolute bottom-0 left-1/2 h-[1.5px] w-0 bg-gradient-to-r from-transparent via-[var(--accent-gold)] to-transparent transition-all duration-500 ease-out -translate-x-1/2 group-hover:w-full"
                  style={{
                    boxShadow: '0 0 10px var(--accent-gold-soft)',
                  }}
                />
              </Link>
            )}

            <Link href="/reports" className={menuLinkClass} style={menuLinkStyle}>
              선천코드 리포트
              <span
                className="absolute bottom-0 left-1/2 h-[1px] w-0 bg-gradient-to-r from-transparent via-[var(--accent-pink)] to-transparent transition-all duration-500 ease-out -translate-x-1/2 group-hover:w-full"
                style={{
                  boxShadow: '0 0 8px var(--accent-pink-soft)',
                }}
              />
            </Link>

            <Link href="/ebooks" className={menuLinkClass} style={menuLinkStyle}>
              비법서
              <span
                className="absolute bottom-0 left-1/2 h-[1px] w-0 bg-gradient-to-r from-transparent via-[var(--accent-pink)] to-transparent transition-all duration-500 ease-out -translate-x-1/2 group-hover:w-full"
                style={{
                  boxShadow: '0 0 8px var(--accent-pink-soft)',
                }}
              />
            </Link>

            <Link href="/shop" className={menuLinkClass} style={menuLinkStyle}>
              비밀상점
              <span
                className="absolute bottom-0 left-1/2 h-[1px] w-0 bg-gradient-to-r from-transparent via-[var(--accent-pink)] to-transparent transition-all duration-500 ease-out -translate-x-1/2 group-hover:w-full"
                style={{
                  boxShadow: '0 0 8px var(--accent-pink-soft)',
                }}
              />
            </Link>

            {/* 비첩 데스크톱 드롭다운 메뉴 */}
            <div 
              className="relative group flex items-center"
              onMouseEnter={() => setActiveDropdown('bicheop' as any)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link href="/bicheop" className={menuLinkClass} style={menuLinkStyle}>
                비첩
                <span
                  className="absolute bottom-0 left-1/2 h-[1px] w-0 bg-gradient-to-r from-transparent via-[var(--accent-pink)] to-transparent transition-all duration-500 ease-out -translate-x-1/2 group-hover:w-full"
                  style={{
                    boxShadow: '0 0 8px var(--accent-pink-soft)',
                  }}
                />
              </Link>
              
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 pt-2 w-32 bg-[#1A0B2E]/95 border border-accent-gold/10 rounded-xl py-2 px-1 shadow-[0_10px_30px_rgba(0,0,0,0.6)] transition-all duration-300 opacity-0 invisible group-hover:opacity-100 group-hover:visible backdrop-blur-md">
                <div className="space-y-0.5">
                  <Link href="/bicheop/love" className="block px-3 py-1.5 text-xs text-bd-gray hover:text-white hover:bg-white/5 rounded-lg transition-colors font-light text-center">연애비첩</Link>
                  <Link href="/bicheop/reunion" className="block px-3 py-1.5 text-xs text-bd-gray hover:text-white hover:bg-white/5 rounded-lg transition-colors font-light text-center">재회비첩</Link>
                  <Link href="/bicheop/abundance" className="block px-3 py-1.5 text-xs text-bd-gray hover:text-white hover:bg-white/5 rounded-lg transition-colors font-light text-center">풍요비첩</Link>
                  <Link href="/bicheop/charm" className="block px-3 py-1.5 text-xs text-bd-gray hover:text-white hover:bg-white/5 rounded-lg transition-colors font-light text-center">매력비첩</Link>
                  <Link href="/bicheop/mind" className="block px-3 py-1.5 text-xs text-bd-gray hover:text-white hover:bg-white/5 rounded-lg transition-colors font-light text-center">마음비첩</Link>
                </div>
              </div>
            </div>

            <Link href="/contact" className={menuLinkClass} style={menuLinkStyle}>
              문의하기
              <span
                className="absolute bottom-0 left-1/2 h-[1px] w-0 bg-gradient-to-r from-transparent via-[var(--accent-gold)] to-transparent transition-all duration-500 ease-out -translate-x-1/2 group-hover:w-full"
                style={{
                  boxShadow: '0 0 10px var(--accent-gold-soft)',
                }}
              />
            </Link>

            {showConsultMenu && (
              <Link href="/counseling" className={menuLinkClass} style={menuLinkStyle}>
                {consultMenuLabel}
                <span
                  className="absolute bottom-0 left-1/2 h-[1px] w-0 bg-gradient-to-r from-transparent via-[var(--accent-pink)] to-transparent transition-all duration-500 ease-out -translate-x-1/2 group-hover:w-full"
                  style={{
                    boxShadow: '0 0 8px var(--accent-pink-soft)',
                  }}
                />
              </Link>
            )}
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-4 relative">
              <Link
                href="/cart"
                className="text-bd-ivory/80 hover:text-[var(--accent-gold)] transition-all duration-300 relative group flex items-center justify-center"
                title="장바구니"
                aria-label="장바구니"
              >
                <ShoppingCart className="w-5 h-5" />
                {totalCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[var(--accent-gold)] text-[#1a0f2e] text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-[0_0_8px_rgba(230,190,138,0.5)]">
                    {totalCount}
                  </span>
                )}
                <span className="absolute -bottom-1.5 left-1/2 h-[1px] w-0 bg-[var(--accent-gold)] transition-all duration-300 ease-out -translate-x-1/2 group-hover:w-full" style={{ boxShadow: '0 0 12px var(--accent-gold)' }} />
              </Link>
              <Link
                href={user ? "/mypage" : "/login"}
                className="text-bd-ivory/80 hover:text-[var(--accent-gold)] transition-all duration-300 relative group flex items-center justify-center"
                title="마이페이지"
                aria-label="마이페이지"
              >
                <User className="w-5 h-5" />
                <span className="absolute -bottom-1.5 left-1/2 h-[1px] w-0 bg-[var(--accent-gold)] transition-all duration-300 ease-out -translate-x-1/2 group-hover:w-full" style={{ boxShadow: '0 0 12px var(--accent-gold)' }} />
              </Link>
            </div>

            <button
              onClick={toggleMobileMenu}
              className="lg:hidden text-bd-ivory/80 hover:text-[var(--accent-gold)] transition-all duration-300"
              aria-label="메뉴 열기"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div
            className="lg:hidden border-t transition-all duration-300"
            style={{ borderColor: scrolled ? 'rgba(216, 191, 163, 0.2)' : 'rgba(216, 191, 163, 0.1)' }}
          >
            <div className="py-4 space-y-1">
              {showAboutMenu && (
                <Link
                  href="/about"
                  className="block px-4 py-2 text-bd-gray hover:text-bd-ivory hover:bg-bd-bg3 transition-colors rounded-lg mx-2"
                  onClick={closeMobileMenu}
                >
                  백도화 소개
                </Link>
              )}
              <Link
                href="/reports"
                className="block px-4 py-2 text-bd-gray hover:text-bd-ivory hover:bg-bd-bg3 transition-colors rounded-lg mx-2"
                onClick={closeMobileMenu}
              >
                선천코드 리포트
              </Link>

              <Link
                href="/ebooks"
                className="block px-4 py-2 text-bd-gray hover:text-bd-ivory hover:bg-bd-bg3 transition-colors rounded-lg mx-2"
                onClick={closeMobileMenu}
              >
                비법서
              </Link>

              <Link
                href="/shop"
                className="block px-4 py-2 text-bd-gray hover:text-bd-ivory hover:bg-bd-bg3 transition-colors rounded-lg mx-2"
                onClick={closeMobileMenu}
              >
                비밀상점
              </Link>

              {/* 모바일 비첩 아코디언 */}
              <div className="mx-2">
                <button
                  onClick={() => setMobileBicheopOpen(!mobileBicheopOpen)}
                  className="w-full flex justify-between items-center px-4 py-2 text-bd-gray hover:text-bd-ivory hover:bg-bd-bg3 transition-colors rounded-lg text-left"
                >
                  <span className="text-base font-medium" style={{ fontSize: '1rem', letterSpacing: '0.08em' }}>비첩</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileBicheopOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobileBicheopOpen && (
                  <div className="pl-4 py-1 space-y-1 bg-white/[0.01] rounded-lg mt-1 border-l border-white/5 mx-2">
                    <Link
                      href="/bicheop"
                      className="block px-4 py-2 text-xs text-bd-gray hover:text-bd-ivory transition-colors font-light"
                      onClick={closeMobileMenu}
                    >
                      전체 비첩 보기
                    </Link>
                    <Link
                      href="/bicheop/love"
                      className="block px-4 py-2 text-xs text-bd-gray hover:text-bd-ivory transition-colors font-light"
                      onClick={closeMobileMenu}
                    >
                      연애비첩
                    </Link>
                    <Link
                      href="/bicheop/reunion"
                      className="block px-4 py-2 text-xs text-bd-gray hover:text-bd-ivory transition-colors font-light"
                      onClick={closeMobileMenu}
                    >
                      재회비첩
                    </Link>
                    <Link
                      href="/bicheop/abundance"
                      className="block px-4 py-2 text-xs text-bd-gray hover:text-bd-ivory transition-colors font-light"
                      onClick={closeMobileMenu}
                    >
                      풍요비첩
                    </Link>
                    <Link
                      href="/bicheop/charm"
                      className="block px-4 py-2 text-xs text-bd-gray hover:text-bd-ivory transition-colors font-light"
                      onClick={closeMobileMenu}
                    >
                      매력비첩
                    </Link>
                    <Link
                      href="/bicheop/mind"
                      className="block px-4 py-2 text-xs text-bd-gray hover:text-bd-ivory transition-colors font-light"
                      onClick={closeMobileMenu}
                    >
                      마음비첩
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/contact"
                className="block px-4 py-2 text-bd-gray hover:text-bd-ivory hover:bg-bd-bg3 transition-colors rounded-lg mx-2"
                onClick={closeMobileMenu}
              >
                문의하기
              </Link>
              {showConsultMenu && (
                <Link
                  href="/counseling"
                  className="block px-4 py-2 text-bd-gray hover:text-bd-ivory hover:bg-bd-bg3 transition-colors rounded-lg mx-2"
                  onClick={closeMobileMenu}
                >
                  {consultMenuLabel}
                </Link>
              )}

              <div
                className="flex items-center space-x-6 px-4 py-3 border-t mx-2 mt-4"
                style={{ borderColor: scrolled ? 'rgba(216, 191, 163, 0.2)' : 'rgba(216, 191, 163, 0.1)' }}
              >
                <Link
                  href="/cart"
                  className="text-bd-ivory/80 hover:text-[var(--accent-gold)] transition-colors flex items-center space-x-2 relative"
                  onClick={closeMobileMenu}
                >
                  <div className="relative">
                    <ShoppingCart className="w-5 h-5" />
                    {totalCount > 0 && (
                      <span className="absolute -top-1.5 -right-1.5 bg-[var(--accent-gold)] text-[#1a0f2e] text-[8px] font-bold w-3.5 h-3.5 rounded-full flex items-center justify-center">
                        {totalCount}
                      </span>
                    )}
                  </div>
                  <span className="text-sm">장바구니</span>
                </Link>
                <Link
                  href={user ? "/mypage" : "/login"}
                  className="text-bd-ivory/80 hover:text-[var(--accent-gold)] transition-colors flex items-center space-x-2"
                  onClick={closeMobileMenu}
                  title="마이페이지"
                  aria-label="마이페이지"
                >
                  <User className="w-5 h-5" />
                  <span className="text-sm">{user ? '마이페이지' : '로그인'}</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

