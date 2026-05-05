'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';
import { Package, FileText, MapPin, User, LogOut, ChevronRight, ShoppingBag } from 'lucide-react';

export default function MyPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('orders');
  const [orders, setOrders] = useState<any[]>([]);
  const [reports, setReports] = useState<any[]>([]);

  useEffect(() => {
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        router.push('/login?returnUrl=/mypage');
        return;
      }
      setUser(user);
      fetchData(user.id);
      setLoading(false);
    };

    checkUser();
  }, [router]);

  const fetchData = async (userId: string) => {
    // 주문 내역 조회
    const { data: ordersData } = await supabase
      .from('orders')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });
    
    if (ordersData) setOrders(ordersData);

    // 리포트 신청 내역 조회 (테이블명이 report_requests라고 가정)
    const { data: reportsData } = await supabase
      .from('report_requests')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });

    if (reportsData) setReports(reportsData);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/');
    router.refresh();
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0B0612] flex items-center justify-center">
        <div className="text-accent-gold animate-pulse font-elegant">불러오는 중...</div>
      </div>
    );
  }

  const tabs = [
    { id: 'orders', label: '주문내역', icon: Package },
    { id: 'reports', label: '리포트 신청내역', icon: FileText },
    { id: 'address', label: '배송지 관리', icon: MapPin },
    { id: 'profile', label: '회원정보', icon: User },
  ];

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#2A103D,_#160B24,_#0B0612)] text-white pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <aside className="w-full md:w-64 space-y-6">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-accent-gold/20 rounded-full flex items-center justify-center text-accent-gold font-bold">
                  {user.email?.[0].toUpperCase()}
                </div>
                <div className="overflow-hidden">
                  <p className="text-xs text-white/40 mb-0.5">반갑습니다</p>
                  <p className="text-sm font-medium truncate">{user.email}</p>
                </div>
              </div>
              
              <nav className="space-y-1">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-all ${
                      activeTab === tab.id 
                        ? 'bg-accent-gold text-[#1A0626] font-bold shadow-[0_0_15px_rgba(212,175,55,0.3)]' 
                        : 'text-white/60 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <tab.icon className="w-4 h-4" />
                    {tab.label}
                  </button>
                ))}
              </nav>

              <button 
                onClick={handleLogout}
                className="w-full flex items-center gap-3 px-4 py-3 mt-8 rounded-xl text-sm text-red-400 hover:bg-red-500/10 transition-all border border-transparent hover:border-red-500/20"
              >
                <LogOut className="w-4 h-4" />
                로그아웃
              </button>
            </div>

            <div className="bg-gradient-to-br from-accent-gold/10 to-transparent border border-accent-gold/20 rounded-3xl p-6">
              <h4 className="text-xs font-bold text-accent-gold mb-2 uppercase tracking-widest">도움이 필요하신가요?</h4>
              <p className="text-xs text-white/60 mb-4 leading-relaxed">
                궁금하신 점이나 불편한 사항은<br />언제든 문의해 주세요.
              </p>
              <Link href="/contact" className="text-xs font-bold flex items-center gap-1 text-white hover:text-accent-gold transition-colors">
                1:1 문의하기 <ChevronRight className="w-3 h-3" />
              </Link>
            </div>
          </aside>

          {/* Content Area */}
          <section className="flex-1">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 min-h-[500px]">
              <h2 className="text-2xl font-elegant font-bold mb-8">
                {tabs.find(t => t.id === activeTab)?.label}
              </h2>

              {activeTab === 'orders' && (
                <div className="space-y-4">
                  {orders.length === 0 ? (
                    <div className="text-center py-20 bg-white/5 rounded-3xl border border-dashed border-white/10">
                      <ShoppingBag className="w-12 h-12 text-white/10 mx-auto mb-4" />
                      <p className="text-white/60 mb-6">아직 주문 내역이 없습니다.</p>
                      <Link href="/shop" className="inline-block bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl transition-all text-sm font-medium">
                        백도화 비밀상점에서 당신의 첫 번째 셀렉션을 만나보세요.
                      </Link>
                    </div>
                  ) : (
                    <div className="overflow-x-auto">
                      <table className="w-full text-left">
                        <thead className="border-b border-white/10 text-xs text-white/40 uppercase tracking-widest">
                          <tr>
                            <th className="pb-4 font-medium">주문정보</th>
                            <th className="pb-4 font-medium">결제금액</th>
                            <th className="pb-4 font-medium text-center">상태</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                          {orders.map((order) => (
                            <tr key={order.id} className="group">
                              <td className="py-5">
                                <p className="text-sm font-bold group-hover:text-accent-gold transition-colors">{order.product_title || '상품명 없음'}</p>
                                <p className="text-xs text-white/40 mt-1">{new Date(order.created_at).toLocaleDateString()}</p>
                              </td>
                              <td className="py-5 text-sm font-medium">
                                {order.amount?.toLocaleString()}원
                              </td>
                              <td className="py-5 text-center">
                                <span className={`text-[10px] px-2 py-1 rounded-full border ${
                                  order.payment_status === '결제완료' 
                                    ? 'border-green-500/30 bg-green-500/10 text-green-400' 
                                    : 'border-accent-gold/30 bg-accent-gold/10 text-accent-gold'
                                }`}>
                                  {order.payment_status || '확인중'}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'reports' && (
                <div className="space-y-4">
                  {reports.length === 0 ? (
                    <div className="text-center py-20 bg-white/5 rounded-3xl border border-dashed border-white/10">
                      <FileText className="w-12 h-12 text-white/10 mx-auto mb-4" />
                      <p className="text-white/60 mb-6">아직 신청한 리포트가 없습니다.</p>
                      <Link href="/reports" className="inline-block bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl transition-all text-sm font-medium">
                        나의 선천코드 리포트 신청하기
                      </Link>
                    </div>
                  ) : (
                    <div className="overflow-x-auto">
                      <table className="w-full text-left">
                        <thead className="border-b border-white/10 text-xs text-white/40 uppercase tracking-widest">
                          <tr>
                            <th className="pb-4 font-medium">리포트 종류</th>
                            <th className="pb-4 font-medium">신청일</th>
                            <th className="pb-4 font-medium text-center">진행상태</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                          {reports.map((report) => (
                            <tr key={report.id}>
                              <td className="py-5">
                                <p className="text-sm font-bold">{report.report_type}</p>
                              </td>
                              <td className="py-5 text-sm text-white/60">
                                {new Date(report.created_at).toLocaleDateString()}
                              </td>
                              <td className="py-5 text-center">
                                <span className={`text-[10px] px-2 py-1 rounded-full border ${
                                  report.status === '발송완료' 
                                    ? 'border-blue-500/30 bg-blue-500/10 text-blue-400' 
                                    : 'border-accent-gold/30 bg-accent-gold/10 text-accent-gold'
                                }`}>
                                  {report.status || '대기중'}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'address' && (
                <div className="space-y-8">
                  <div className="flex justify-between items-center">
                    <p className="text-sm text-white/60">자주 사용하시는 배송지를 관리하세요.</p>
                    <button className="text-xs bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-all">신규 등록</button>
                  </div>
                  
                  <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
                    <p className="text-white/20 text-center py-10 italic">저장된 배송지가 없습니다.</p>
                  </div>
                </div>
              )}

              {activeTab === 'profile' && (
                <div className="max-w-md space-y-6">
                  <div>
                    <label className="block text-xs font-medium text-accent-gold/70 mb-2 uppercase tracking-widest">이메일 계정</label>
                    <div className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white/60">
                      {user.email}
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-accent-gold/70 mb-2 uppercase tracking-widest">비밀번호 관리</label>
                    <button className="w-full text-left bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-sm hover:bg-white/10 transition-all flex justify-between items-center">
                      비밀번호 변경하기 <ChevronRight className="w-4 h-4 text-white/20" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
