'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';

import SocialAuthButtons from '@/components/auth/SocialAuthButtons';

export default function SignupPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (password !== confirmPassword) {
      setError('비밀번호가 일치하지 않습니다.');
      setLoading(false);
      return;
    }

    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/login`,
        },
      });

      if (error) throw error;

      setSuccess(true);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#2A103D,_#160B24,_#0B0612)] flex items-center justify-center p-4 pt-24">
        <div className="w-full max-w-md text-center">
          <div className="bg-white/5 backdrop-blur-xl border border-accent-gold/20 rounded-3xl p-8 md:p-10 shadow-2xl">
            <div className="w-20 h-20 bg-accent-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-elegant font-bold text-white mb-4">회원가입 신청 완료</h2>
            <p className="text-bd-gray mb-8">
              이메일로 전송된 인증 링크를 클릭하여<br />
              회원가입을 완료해 주세요.
            </p>
            <Link href="/login" className="inline-block bg-accent-gold hover:bg-white text-[#1A0626] font-bold py-3 px-8 rounded-xl transition-all">
              로그인 화면으로 이동
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#2A103D,_#160B24,_#0B0612)] flex items-center justify-center p-4 pt-24">
      <div className="w-full max-w-md">
        <div className="bg-white/5 backdrop-blur-xl border border-accent-gold/20 rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent-gold/5 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-accent-gold/10 transition-colors duration-700" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent-pink/5 rounded-full -ml-16 -mb-16 blur-3xl group-hover:bg-accent-pink/10 transition-colors duration-700" />

          <div className="relative z-10">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-elegant font-bold text-white mb-2 tracking-tight">백도화 회원가입</h1>
              <p className="text-bd-gray text-sm">백도화의 특별한 혜택을 만나보세요</p>
            </div>

            {error && (
              <div className="bg-red-500/10 border border-red-500/30 text-red-200 text-sm py-3 px-4 rounded-xl mb-6">
                {error}
              </div>
            )}

            <div className="mb-8">
              <SocialAuthButtons mode="signup" onError={setError} />
            </div>

            <div className="relative mb-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-[#160B24] px-2 text-white/40">또는 이메일로 시작하기</span>
              </div>
            </div>

            <form onSubmit={handleSignup} className="space-y-5">
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
                  placeholder="8자 이상의 비밀번호"
                  minLength={8}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 text-white placeholder:text-white/20 focus:outline-none focus:border-accent-gold/50 focus:ring-1 focus:ring-accent-gold/50 transition-all duration-300"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-accent-gold/70 mb-1.5 ml-1 uppercase tracking-wider">비밀번호 확인</label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  placeholder="비밀번호를 다시 입력하세요"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 text-white placeholder:text-white/20 focus:outline-none focus:border-accent-gold/50 focus:ring-1 focus:ring-accent-gold/50 transition-all duration-300"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-[#D4AF37] to-[#B8860B] hover:from-[#E5C158] hover:to-[#C9971C] text-[#1A0626] font-bold py-4 rounded-2xl transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.2)] transform hover:-translate-y-0.5 mt-4"
              >
                {loading ? '가입 중...' : '회원가입'}
              </button>
            </form>

            <div className="mt-8 text-center space-y-3">
              <p className="text-bd-gray text-sm">
                이미 계정이 있으신가요?{' '}
                <Link href="/login" className="text-accent-gold hover:text-white transition-colors font-medium underline underline-offset-4">
                  로그인하기
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
