'use client';

import { supabase } from '@/lib/supabase';
import { useState } from 'react';

interface SocialAuthButtonsProps {
  mode: 'login' | 'signup';
  returnUrl?: string;
  onError?: (error: string) => void;
}

export default function SocialAuthButtons({ mode, returnUrl = '/mypage', onError }: SocialAuthButtonsProps) {
  const [loading, setLoading] = useState<string | null>(null);

  const handleOAuthLogin = async (provider: 'kakao' | 'google') => {
    setLoading(provider);
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: `${window.location.origin}/auth/callback?next=${returnUrl}`,
        },
      });
      if (error) throw error;
    } catch (err: any) {
      if (onError) onError(err.message);
      setLoading(null);
    }
  };

  const kakaoText = mode === 'login' ? '카카오로 로그인' : '카카오로 시작하기';
  const googleText = mode === 'login' ? '구글로 로그인' : '구글로 시작하기';

  return (
    <div className="space-y-3 w-full">
      {/* Kakao Button */}
      <button
        onClick={() => handleOAuthLogin('kakao')}
        disabled={!!loading}
        className="w-full bg-[#2A163A] text-[#F5E6C8] border border-[rgba(212,175,55,0.25)] font-bold py-4 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-[0_0_15px_rgba(212,175,55,0.2)] disabled:opacity-50"
      >
        <svg className="w-5 h-5 text-[#D4AF37]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 3C6.477 3 2 6.48 2 10.791c0 2.758 1.817 5.18 4.545 6.674l-1.151 4.215c-.097.356.129.709.475.709.113 0 .227-.033.323-.097l5.051-3.344c.249.027.5.041.757.041 5.523 0 10-3.48 10-7.791S17.523 3 12 3z" />
        </svg>
        <span>{loading === 'kakao' ? '연결 중...' : kakaoText}</span>
      </button>

      {/* Google Button */}
      <button
        onClick={() => handleOAuthLogin('google')}
        disabled={!!loading}
        className="w-full bg-[#2A163A] text-[#F5E6C8] border border-[rgba(212,175,55,0.25)] font-bold py-4 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-[0_0_15px_rgba(212,175,55,0.2)] disabled:opacity-50"
      >
        <svg className="w-5 h-5 text-[#D4AF37]" viewBox="0 0 24 24" fill="currentColor">
          <path
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            fill="currentColor"
            opacity="0.9"
          />
          <path
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            fill="currentColor"
            opacity="0.8"
          />
          <path
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            fill="currentColor"
            opacity="0.7"
          />
          <path
            d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            fill="currentColor"
            opacity="0.9"
          />
        </svg>
        <span>{loading === 'google' ? '연결 중...' : googleText}</span>
      </button>
    </div>
  );
}
