'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function KakaoConsultButton() {
  const [bottomOffset, setBottomOffset] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const updateOffset = () => {
      // 모달/다이얼로그 열림 감지 (모달 열림 시 상담 버튼을 깔끔하게 숨겨 레이어 충돌 원천 차단)
      const modal = document.querySelector(
        '[role="dialog"]:not([aria-label*="인트로"]), .fixed.inset-0.z-50, .fixed.inset-0.z-\\[100\\]'
      );
      const modalActive = Boolean(modal && (modal as HTMLElement).offsetHeight > 0);
      setIsModalOpen(modalActive);

      // PC 화면(768px 이상)에서는 기존 위치(bottom-6 = 24px) 유지
      if (typeof window !== 'undefined' && window.innerWidth >= 768) {
        setBottomOffset(null);
        return;
      }

      // 모바일 화면에서 하단 고정 스티키 구매 바 탐색
      const stickyBar =
        document.getElementById('mobile-sticky-buy-bar') ||
        document.querySelector('[data-sticky-buy-bar="true"]') ||
        document.querySelector('.fixed.bottom-0:not(#kakao-consult-button)');

      if (stickyBar && stickyBar instanceof HTMLElement) {
        const rect = stickyBar.getBoundingClientRect();
        // 실제 화면에 렌더링되어 높이를 가지고 있는 경우
        if (rect.height > 0 && rect.bottom > 0) {
          // 스티키 바의 실제 높이 + 16px 여백 (safe-area-inset-bottom 자동 포함)
          setBottomOffset(Math.round(rect.height + 16));
          return;
        }
      }

      setBottomOffset(null);
    };

    updateOffset();
    const rafId = requestAnimationFrame(updateOffset);
    const timerId = setTimeout(updateOffset, 300);

    // DOM 변화(스티키 바 및 모달 동적 생성/제거) 실시간 감지
    const observer = new MutationObserver(updateOffset);
    if (document.body) {
      observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['style', 'class'],
      });
    }

    window.addEventListener('resize', updateOffset);
    window.addEventListener('scroll', updateOffset, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(timerId);
      observer.disconnect();
      window.removeEventListener('resize', updateOffset);
      window.removeEventListener('scroll', updateOffset);
    };
  }, [pathname]);

  return (
    <a
      id="kakao-consult-button"
      href="https://pf.kakao.com/_CxdfxgG"
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-40 flex items-center gap-2.5 h-[44px] px-[18px] rounded-full bg-[#2A163A] text-[#F5E6C8] border border-[rgba(212,175,55,0.25)] shadow-lg hover:shadow-[0_0_15px_rgba(212,175,55,0.2)] transition-[bottom,opacity,transform,box-shadow] duration-300 ease-out transform hover:-translate-y-0.5 group md:!bottom-6 ${
        isModalOpen ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'
      }`}
      style={{
        bottom: bottomOffset !== null ? `${bottomOffset}px` : undefined,
      }}
      aria-label="카카오톡 상담하기"
    >
      <div className="relative flex items-center gap-2">
        {/* Kakao Icon - Muted Gold Tone */}
        <svg 
          className="w-3.5 h-3.5 text-[#D4AF37] opacity-80 group-hover:opacity-100 transition-opacity" 
          viewBox="0 0 24 24" 
          fill="currentColor"
        >
          <path d="M12 3C6.477 3 2 6.48 2 10.791c0 2.758 1.817 5.18 4.545 6.674l-1.151 4.215c-.097.356.129.709.475.709.113 0 .227-.033.323-.097l5.051-3.344c.249.027.5.041.757.041 5.523 0 10-3.48 10-7.791S17.523 3 12 3z" />
        </svg>
        
        <span className="text-sm font-medium whitespace-nowrap tracking-tight">백도화 상담</span>
      </div>
    </a>
  );
}
