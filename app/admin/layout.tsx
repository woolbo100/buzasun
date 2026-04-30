'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { Loader2 } from 'lucide-react';

// 허용된 관리자 이메일 목록
const ADMIN_EMAILS = ['buzasun@gmail.com'];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // 로그인 페이지는 체크 제외
    if (pathname === '/admin/login') {
      setLoading(false);
      return;
    }

    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      
      // 1. 로그인이 안 되어 있거나 2. 허용되지 않은 이메일인 경우
      if (!user || !ADMIN_EMAILS.includes(user.email || '')) {
        // 이미 로그인된 상태라면 로그아웃 시킴 (권한 없는 계정 보호)
        if (user) await supabase.auth.signOut();
        router.push('/admin/login?error=unauthorized');
      } else {
        setAuthenticated(true);
      }
      setLoading(false);
    };

    checkUser();
  }, [pathname, router]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-rose-500 animate-spin" />
      </div>
    );
  }

  if (pathname === '/admin/login' || authenticated) {
    return <>{children}</>;
  }

  return null;
}
