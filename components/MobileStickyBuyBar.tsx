'use client'

import React from 'react'

interface MobileStickyBuyBarProps {
  price?: string | number
  onPurchase: (e: React.MouseEvent) => void
  buttonText?: string
}

/**
 * 모바일 화면 하단에 고정되는 구매 바 컴포넌트
 * - 모바일(md 미만)에서만 표시되며 PC에서는 숨겨집니다.
 * - 아이폰 하단 홈 바(안전 여백)를 자동으로 고려합니다.
 */
export default function MobileStickyBuyBar({
  price = '19,000원',
  onPurchase,
  buttonText = '구매하기 →',
}: MobileStickyBuyBarProps) {
  const displayPrice = typeof price === 'number' ? `${price.toLocaleString()}원` : price

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[#241525] border-t border-[#D4B2A7]/30 shadow-[0_-8px_24px_rgba(0,0,0,0.5)] px-5 pt-3"
      style={{
        paddingBottom: 'calc(12px + env(safe-area-inset-bottom, 0px))',
      }}
    >
      <div className="flex items-center justify-between gap-4 max-w-md mx-auto">
        {/* 왼쪽: 가격 표시 */}
        <div className="flex items-center">
          <span className="text-xl font-bold font-elegant text-[#FAF6EE] tracking-tight">
            {displayPrice}
          </span>
        </div>

        {/* 오른쪽: 구매 버튼 */}
        <button
          type="button"
          onClick={onPurchase}
          className="h-[46px] min-h-[44px] px-6 rounded-xl font-bold text-sm bg-[#C49A58] text-[#291B16] hover:bg-[#B38A49] active:scale-[0.98] transition-all flex items-center justify-center gap-1.5 shadow-md cursor-pointer shrink-0"
        >
          <span>{buttonText}</span>
        </button>
      </div>
    </div>
  )
}

