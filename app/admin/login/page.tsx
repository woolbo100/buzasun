'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { Lock, Mail, Loader2 } from 'lucide-react';

export default function AdminLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const searchParams = useSearchParams();

  // URL에 에러가 있으면 표시 (예: 허용되지 않은 계정)
  useEffect(() => {
    const errorMsg = searchParams.get('error');
    if (errorMsg === 'unauthorized') {
      setError('허용되지 않은 계정입니다. 관리자 전용 계정으로 로그인해주세요.');
    }
  }, [searchParams]);

  // 구글 로그인 처리
  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/admin`,
        },
      });
      if (error) throw error;
    } catch (err: any) {
      setError(err.message);
      setLoading(false);
    }
  };

  // 이메일 로그인 처리
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
      router.push('/admin');
      router.refresh();
    } catch (err: any) {
      setError(err.message || '로그인에 실패했습니다. 정보를 확인해주세요.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden" 
         style={{ background: 'radial-gradient(circle at top left, #2A103D, #160B24, #0B0612)' }}>
      
      {/* 배경 장식 */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full blur-[120px] bg-purple-900/20" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full blur-[100px] bg-rose-900/10" />

      <div className="w-full max-w-md backdrop-blur-xl bg-black/40 rounded-3xl p-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative z-10"
           style={{ border: '1px solid rgba(229, 195, 178, 0.35)' }}>
        
        <div className="flex flex-col items-center mb-10">
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
               style={{ background: 'linear-gradient(135deg, #2A103D 0%, #160B24 100%)', border: '1px solid rgba(229, 195, 178, 0.35)' }}>
            <Lock className="w-7 h-7 text-[#E5C3B2]" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-3 tracking-tight font-serif italic">Admin Portal</h1>
          <p className="text-[#E5C3B2]/70 text-sm text-center font-light tracking-wide">
            백도화 매력학당의 비밀스러운 관리 공간입니다.
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#E5C3B2]/30" />
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-[#E5C3B2]/50 transition-all"
              placeholder="admin@example.com"
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#E5C3B2]/30" />
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-[#E5C3B2]/50 transition-all"
              placeholder="••••••••"
            />
          </div>

          {error && (
            <div className="bg-rose-950/30 border border-rose-500/20 text-rose-300 text-xs p-4 rounded-xl text-center">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-2xl py-4 text-white font-bold transition-all hover:scale-[1.01] active:scale-95"
            style={{ background: 'linear-gradient(to right, #6D3FEF, #A855F7)' }}
          >
            {loading ? <Loader2 className="w-5 h-5 animate-spin mx-auto" /> : '관리자 입장'}
          </button>
        </form>

        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-white/10"></div></div>
          <div className="relative flex justify-center text-xs uppercase"><span className="bg-[#160B24] px-2 text-white/30 tracking-tighter">OR</span></div>
        </div>

        <button
          onClick={handleGoogleLogin}
          disabled={loading}
          className="w-full py-4 rounded-2xl bg-white/5 border border-white/10 text-[#E5C3B2] font-medium flex items-center justify-center gap-3 hover:bg-white/10 transition-all active:scale-95"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
            <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
            <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
          </svg>
          Google로 계속하기
        </button>
      </div>
    </div>
  );
}
