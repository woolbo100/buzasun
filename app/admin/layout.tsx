'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { Loader2 } from 'lucide-react';

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
    // 로그인 페이지는 인증 체크를 하지 않습니다.
    if (pathname === '/admin/login') {
      setLoading(false);
      return;
    }

    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        // 로그인하지 않은 경우 로그인 페이지로 이동
        router.push('/admin/login');
      } else {
        setAuthenticated(true);
      }
      setLoading(false);
    };

    checkUser();
  }, [pathname, router]);

  // 로딩 중일 때 보여줄 화면
  if (loading) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-rose-500 animate-spin" />
      </div>
    );
  }

  // 로그인 페이지거나 인증된 경우에만 콘텐츠를 보여줍니다.
  if (pathname === '/admin/login' || authenticated) {
    return <>{children}</>;
  }

  return null;
}
