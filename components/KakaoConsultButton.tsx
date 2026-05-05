'use client';

import React from 'react';

export default function KakaoConsultButton() {
  return (
    <a
      href="https://pf.kakao.com/_CxdfxgG"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[9999] flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-[#1A0626] font-bold shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 group"
      aria-label="카카오톡 상담하기"
    >
      {/* Subtle Purple Glow Overlay */}
      <div className="absolute inset-0 rounded-full bg-purple-600/10 blur-xl group-hover:bg-purple-600/20 transition-all duration-300" />
      
      <div className="relative flex items-center gap-2">
        {/* Kakao Icon */}
        <div className="bg-[#1A0626]/10 p-1 rounded-full">
          <svg 
            className="w-5 h-5" 
            viewBox="0 0 24 24" 
            fill="currentColor"
          >
            <path d="M12 3C6.477 3 2 6.48 2 10.791c0 2.758 1.817 5.18 4.545 6.674l-1.151 4.215c-.097.356.129.709.475.709.113 0 .227-.033.323-.097l5.051-3.344c.249.027.5.041.757.041 5.523 0 10-3.48 10-7.791S17.523 3 12 3z" />
          </svg>
        </div>
        
        <span className="text-sm md:text-base whitespace-nowrap tracking-tight">백도화 상담실</span>
      </div>
    </a>
  );
}
