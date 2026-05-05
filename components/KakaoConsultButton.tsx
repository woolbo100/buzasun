'use client';

import React from 'react';

export default function KakaoConsultButton() {
  return (
    <a
      href="https://pf.kakao.com/_CxdfxgG"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[9999] flex items-center gap-2.5 h-[44px] px-[18px] rounded-full bg-[#2A163A] text-[#F5E6C8] border border-[rgba(212,175,55,0.25)] shadow-lg hover:shadow-[0_0_15px_rgba(212,175,55,0.2)] transition-all duration-300 transform hover:-translate-y-0.5 group"
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
