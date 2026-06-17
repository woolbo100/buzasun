'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import GlobalBackground from '@/components/GlobalBackground'
import Reveal from '@/components/Reveal'
import { useCart, CartItem } from '@/hooks/useCart'
import { Plus, Minus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react'

export default function CartPage() {
  const router = useRouter()
  const { cartItems, removeFromCart, updateCartQuantity, totalPrice } = useCart()
  const [mounted, setMounted] = useState(false)

  // SSR 환경에서 클라이언트가 마운트될 때까지 대기하여 hydration 오류를 방지합니다
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <main className="relative min-h-screen bg-[#0a0514]">
        <GlobalBackground src="/image/shop-hero.png" brightCenter={false}>
          <Navigation />
          <div className="min-h-[60vh] flex items-center justify-center">
            <p className="text-[var(--accent-gold)] animate-pulse tracking-widest">장바구니 불러오는 중...</p>
          </div>
          <Footer />
        </GlobalBackground>
      </main>
    )
  }

  // 실물 상품이 포함되어 있는지 여부 체크
  const hasPhysicalProduct = cartItems.some(item => item.type === 'physical')

  // 배송비 계산: 실물 상품이 있고, 총액이 50,000원 미만인 경우에만 3,000원 부과 (디지털 상품만 있거나 5만원 이상 시 무료)
  const shippingFee = (hasPhysicalProduct && totalPrice < 50000) ? 3000 : 0
  const finalPrice = totalPrice + shippingFee

  return (
    <main className="relative min-h-screen bg-[#0a0514] text-white selection:bg-[var(--accent-gold)] selection:text-black">
      <GlobalBackground src="/image/shop-hero.png" brightCenter={false}>
        <Navigation />

        <div className="relative z-10 pt-40 pb-20">
          <div className="container-premium max-w-5xl mx-auto px-6">
            <Reveal>
              <h1 className="text-3xl md:text-5xl font-elegant font-bold text-center mb-12 text-white">
                비밀 <span className="text-[var(--accent-gold)]">장바구니</span>
              </h1>
            </Reveal>

            {cartItems.length === 0 ? (
              /* 장바구니가 비어있을 때의 고급스러운 안내 화면 */
              <Reveal delayMs={100}>
                <div className="gungjung-glass p-12 md:p-20 text-center border-white/5 max-w-2xl mx-auto rounded-[32px] bg-gradient-to-b from-white/[0.02] to-transparent">
                  <div className="w-20 h-20 bg-[#2D0A1E] border border-[var(--accent-gold)]/20 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(230,190,138,0.1)]">
                    <ShoppingBag className="w-8 h-8 text-[var(--accent-gold)]" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold mb-4 text-white">장바구니가 비어 있습니다.</h2>
                  <p className="text-[#EDE6DA] opacity-60 text-sm md:text-base mb-8 max-w-md mx-auto break-keep leading-relaxed">
                    비밀상점에서 백도화의 비법서와 특별한 상품을 만나보세요.
                  </p>
                  <button
                    onClick={() => router.push('/shop')}
                    className="btn-primary inline-flex items-center gap-2 px-10 py-4.5 rounded-xl font-bold text-sm tracking-widest hover:scale-[1.03] transition-all duration-300"
                    style={{
                      background: 'linear-gradient(135deg, #E6BE8A 0%, #BA8D7E 100%)',
                      color: '#2D0A1E',
                      boxShadow: '0 0 30px rgba(230, 190, 138, 0.2)'
                    }}
                  >
                    비밀상점으로 이동하기
                    <ArrowRight className="w-4 h-4 text-[#2D0A1E]" />
                  </button>
                </div>
              </Reveal>
            ) : (
              /* 장바구니 목록이 있을 때의 화면 */
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* 왼쪽: 상품 리스트 */}
                <div className="lg:col-span-2 space-y-4">
                  {cartItems.map((item, idx) => (
                    <Reveal key={`${item.slug}-${item.option || 'none'}`} delayMs={idx * 50}>
                      <div className="gungjung-glass p-5 flex gap-4 md:gap-6 items-center border-white/5 rounded-2xl bg-white/[0.02] relative group">
                        {/* 상품 이미지 */}
                        <div className="relative w-20 h-24 rounded-lg overflow-hidden shrink-0 border border-white/10 bg-[#0a0514]">
                          <Image
                            src={item.image || '/image/product-love-report.png'}
                            alt={item.name}
                            fill
                            className="object-cover"
                          />
                        </div>

                        {/* 상품 정보 및 조절부 */}
                        <div className="flex-grow min-w-0">
                          <span className="text-[9px] tracking-widest text-[var(--accent-gold)] opacity-60 uppercase font-bold mb-0.5 block">
                            {item.category || (item.type === 'physical' ? 'PHYSICAL CARE' : 'DIGITAL CONTENT')}
                          </span>
                          <h3 className="text-base md:text-lg font-bold text-white truncate mb-1">{item.name}</h3>
                          
                          {/* 옵션 표시 */}
                          {item.option && (
                            <p className="text-xs text-white/40 mb-3 block">
                              옵션: <span className="text-white/60">{item.option}</span>
                            </p>
                          )}

                          <div className="flex items-center justify-between mt-2 flex-wrap gap-3">
                            {/* 수량 변경기 */}
                            <div className="flex items-center bg-white/5 border border-white/10 rounded-lg py-1 px-2.5 space-x-3.5">
                              <button
                                onClick={() => updateCartQuantity(item.slug, item.option, item.quantity - 1)}
                                disabled={item.quantity <= 1}
                                className={`text-white/40 hover:text-white transition-colors ${item.quantity <= 1 ? 'opacity-30 cursor-not-allowed' : ''}`}
                              >
                                <Minus className="w-3.5 h-3.5" />
                              </button>
                              <span className="text-xs font-mono font-bold w-4 text-center">{item.quantity}</span>
                              <button
                                onClick={() => updateCartQuantity(item.slug, item.option, item.quantity + 1)}
                                className="text-white/40 hover:text-white transition-colors"
                              >
                                <Plus className="w-3.5 h-3.5" />
                              </button>
                            </div>

                            {/* 가격 */}
                            <p className="text-sm font-bold text-[var(--accent-gold)]">
                              ₩{(item.price * item.quantity).toLocaleString()}
                              {item.quantity > 1 && (
                                <span className="text-[10px] text-white/30 font-normal ml-1.5 block md:inline">
                                  (개당 ₩{item.price.toLocaleString()})
                                </span>
                              )}
                            </p>
                          </div>
                        </div>

                        {/* 개별 제거 버튼 */}
                        <button
                          onClick={() => removeFromCart(item.slug, item.option)}
                          className="text-white/30 hover:text-red-400 p-2 transition-colors duration-300 self-start md:self-center"
                          title="삭제하기"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </Reveal>
                  ))}
                </div>

                {/* 오른쪽: 결제 요약 및 주문 버튼 */}
                <div className="space-y-6">
                  <Reveal delayMs={150}>
                    <div className="gungjung-glass p-6 md:p-8 border-white/5 rounded-2xl bg-gradient-to-br from-white/[0.03] to-[#2D0A1E]/10 sticky top-24">
                      <h2 className="text-lg font-bold text-white mb-6 border-b border-white/10 pb-4">결제 내역</h2>
                      
                      <div className="space-y-4 mb-6">
                        <div className="flex justify-between text-sm">
                          <span className="text-white/40">상품 합계</span>
                          <span className="text-white font-medium">₩{totalPrice.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-white/40">배송비</span>
                          <span className="text-white font-medium">
                            {shippingFee > 0 ? `₩${shippingFee.toLocaleString()}` : '무료 배송'}
                          </span>
                        </div>
                        {hasPhysicalProduct && totalPrice < 50000 && (
                          <p className="text-[10px] text-[var(--accent-gold)] opacity-50 text-right leading-none">
                            ※ 50,000원 이상 구매 시 배송비 무료
                          </p>
                        )}
                        <div className="pt-4 border-t border-white/10 flex justify-between items-center">
                          <span className="text-white font-bold">총 결제금액</span>
                          <span className="text-xl font-bold text-[var(--accent-gold)]">₩{finalPrice.toLocaleString()}</span>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <button
                          onClick={() => router.push('/checkout')}
                          className="w-full py-4 bg-gradient-to-r from-[#E6BE8A] to-[#BA8D7E] text-[#2D0A1E] font-bold rounded-xl tracking-widest hover:scale-[1.02] active:scale-95 transition-all shadow-[0_10px_20px_rgba(212,178,167,0.15)] flex items-center justify-center gap-2"
                        >
                          주문하기
                          <ArrowRight className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => router.push('/shop')}
                          className="w-full py-3.5 bg-white/5 border border-white/10 text-white/80 hover:text-white hover:bg-white/[0.08] font-bold rounded-xl tracking-widest transition-all text-sm"
                        >
                          계속 쇼핑하기
                        </button>
                      </div>
                    </div>
                  </Reveal>
                </div>
              </div>
            )}
          </div>
        </div>

        <Footer />
      </GlobalBackground>
    </main>
  )
}
