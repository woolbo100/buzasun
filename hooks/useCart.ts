'use client'

import { useState, useEffect } from 'react'

export interface CartItem {
  id: string;
  slug: string;
  name: string;
  price: number;
  quantity: number;
  option?: string;
  image?: string;
  type: string;
  category?: string;
}

const CART_KEY = 'bdh_cart'

// 로컬스토리지에서 안전하게 장바구니 데이터를 읽어옵니다 (SSR/서버 환경 대응)
export function getCartItems(): CartItem[] {
  if (typeof window === 'undefined') return []
  try {
    const data = localStorage.getItem(CART_KEY)
    return data ? JSON.parse(data) : []
  } catch (e) {
    console.error('Failed to parse cart data from localStorage', e)
    return []
  }
}

// 로컬스토리지에 장바구니 데이터를 저장하고 변경 이벤트를 발생시킵니다
export function saveCartItems(items: CartItem[]) {
  if (typeof window === 'undefined') return
  try {
    localStorage.setItem(CART_KEY, JSON.stringify(items))
    // 장바구니 변경 사실을 실시간으로 웹사이트 전체(헤더 등)에 소문냅니다
    window.dispatchEvent(new Event('cart-change'))
  } catch (e) {
    console.error('Failed to save cart data to localStorage', e)
  }
}

// 장바구니에 새 상품을 추가합니다
export function addToCart(item: Omit<CartItem, 'quantity'>, quantity: number = 1) {
  const cart = getCartItems()
  // 동일한 상품이고 선택한 옵션까지 일치하는 것이 있는지 찾습니다
  const existingIndex = cart.findIndex(
    (i) => i.slug === item.slug && i.option === item.option
  )

  if (existingIndex > -1) {
    // 이미 담겨있다면 수량만 더해줍니다
    cart[existingIndex].quantity += quantity
  } else {
    // 없다면 새로 목록에 추가합니다
    cart.push({ ...item, quantity })
  }
  saveCartItems(cart)
}

// 장바구니에서 특정 상품(옵션 매칭)을 제외시킵니다
export function removeFromCart(slug: string, option?: string) {
  const cart = getCartItems()
  const filtered = cart.filter(
    (i) => !(i.slug === slug && i.option === option)
  )
  saveCartItems(filtered)
}

// 장바구니에 담긴 상품의 수량을 변경합니다
export function updateCartQuantity(slug: string, option: string | undefined, quantity: number) {
  if (quantity <= 0) return
  const cart = getCartItems()
  const idx = cart.findIndex((i) => i.slug === slug && i.option === option)
  if (idx > -1) {
    cart[idx].quantity = quantity
    saveCartItems(cart)
  }
}

// 장바구니를 깨끗이 비웁니다
export function clearCart() {
  saveCartItems([])
}

// 컴포넌트들에서 실시간으로 장바구니 상태를 지켜볼 수 있게 해주는 Hook입니다
export function useCart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  useEffect(() => {
    // 컴포넌트가 켜질 때 초기 장바구니 목록을 가져옵니다
    setCartItems(getCartItems())

    const handleCartChange = () => {
      setCartItems(getCartItems())
    }

    // 장바구니 변경 이벤트를 감시합니다
    window.addEventListener('cart-change', handleCartChange)
    return () => {
      window.removeEventListener('cart-change', handleCartChange)
    }
  }, [])

  // 총 상품 수량(배지에 표시할 숫자)
  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)
  
  // 총 결제 대상 금액
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return {
    cartItems,
    totalCount,
    totalPrice,
    addToCart,
    removeFromCart,
    updateCartQuantity,
    clearCart,
  }
}
