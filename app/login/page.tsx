'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import { Suspense } from 'react';
import SocialAuthButtons from '@/components/auth/SocialAuthButtons';

function LoginContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const returnUrl = searchParams.get('returnUrl') || '/mypage';
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      router.push(returnUrl);
      router.refresh();
    } catch (err: any) {
      setError(err.message === 'Invalid login credentials' ? '이메일 또는 비밀번호가 일치하지 않습니다.' : err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md">
      <div className="bg-white/5 backdrop-blur-xl border border-accent-gold/20 rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden group">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-accent-gold/5 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-accent-gold/10 transition-colors duration-700" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent-pink/5 rounded-full -ml-16 -mb-16 blur-3xl group-hover:bg-accent-pink/10 transition-colors duration-700" />

        <div className="relative z-10">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-elegant font-bold text-white mb-2 tracking-tight">백도화 로그인</h1>
            <p className="text-bd-gray text-sm">당신의 특별한 여정을 이어가세요</p>
          </div>

          {error && (
            <div className="bg-red-500/10 border border-red-500/30 text-red-200 text-sm py-3 px-4 rounded-xl mb-6 animate-in fade-in slide-in-from-top-1">
              {error}
            </div>
          )}

          <div className="mb-8">
            <SocialAuthButtons mode="login" returnUrl={returnUrl} onError={setError} />
          </div>

          <div className="relative mb-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-[#160B24] px-2 text-white/40">또는 이메일로 로그인</span>
            </div>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-xs font-medium text-accent-gold/70 mb-1.5 ml-1 uppercase tracking-wider">이메일 주소</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="example@email.com"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 text-white placeholder:text-white/20 focus:outline-none focus:border-accent-gold/50 focus:ring-1 focus:ring-accent-gold/50 transition-all duration-300"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-accent-gold/70 mb-1.5 ml-1 uppercase tracking-wider">비밀번호</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="••••••••"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 text-white placeholder:text-white/20 focus:outline-none focus:border-accent-gold/50 focus:ring-1 focus:ring-accent-gold/50 transition-all duration-300"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-[#D4AF37] to-[#B8860B] hover:from-[#E5C158] hover:to-[#C9971C] text-[#1A0626] font-bold py-4 rounded-2xl transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-0.5 active:translate-y-0 mt-4"
            >
              {loading ? '로그인 중...' : '로그인'}
            </button>
          </form>

          <div className="mt-8 text-center space-y-3">
            <p className="text-bd-gray text-sm">
              아직 계정이 없으신가요?{' '}
              <Link href="/signup" className="text-accent-gold hover:text-white transition-colors font-medium underline underline-offset-4">
                회원가입하기
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#2A103D,_#160B24,_#0B0612)] flex items-center justify-center p-4 pt-24">
      <Suspense fallback={<div className="text-accent-gold animate-pulse">로딩 중...</div>}>
        <LoginContent />
      </Suspense>
    </main>
  );
}
