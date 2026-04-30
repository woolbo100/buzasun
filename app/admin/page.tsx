'use client';

import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import { LogOut, LayoutDashboard, Users, FileText, Settings } from 'lucide-react';

export default function AdminDashboardPage() {
  const router = useRouter();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/admin/login');
    router.refresh();
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* 사이드바 및 네비게이션 */}
      <nav className="border-b border-white/10 bg-[#141414] px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <LayoutDashboard className="text-rose-500 w-6 h-6" />
            <span className="text-xl font-bold font-serif italic">Admin Panel</span>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <LogOut className="w-5 h-5" />
            <span>로그아웃</span>
          </button>
        </div>
      </nav>

      <main className="p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">관리자 대시보드</h1>
          <p className="text-gray-400">백도화 매력학당의 데이터를 관리하는 공간입니다.</p>
        </div>

        {/* 퀵 액션 카드들 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AdminCard 
            icon={<Users className="w-6 h-6" />}
            title="사용자 관리"
            description="가입된 사용자 목록을 확인하고 관리합니다."
          />
          <AdminCard 
            icon={<FileText className="w-6 h-6" />}
            title="컨텐츠 관리"
            description="블로그 및 강의 자료를 업데이트합니다."
          />
          <AdminCard 
            icon={<Settings className="w-6 h-6" />}
            title="시스템 설정"
            description="웹사이트의 전역 설정을 변경합니다."
          />
        </div>
      </main>
    </div>
  );
}

function AdminCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="bg-[#1a1a1a] border border-white/10 p-6 rounded-2xl hover:border-rose-500/30 transition-all cursor-pointer group">
      <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-4 group-hover:bg-rose-500/10 group-hover:text-rose-500 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
}
