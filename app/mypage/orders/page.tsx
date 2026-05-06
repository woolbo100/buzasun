'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import GlobalBackground from '@/components/GlobalBackground';
import { Package, FileText, Download, ChevronRight, ShoppingBag, Clock, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export default function MyOrdersPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState<any[]>([]);

  useEffect(() => {
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        router.push('/login?returnUrl=/mypage/orders');
        return;
      }
      setUser(user);
      fetchOrders(user.email);
      setLoading(false);
    };

    checkUser();
  }, [router]);

  const fetchOrders = async (email: string | undefined) => {
    if (!email) return;
    
    try {
      const { data, error } = await supabase
        .from('orders')
        .select('*')
        .eq('customer_email', email)
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      if (data) setOrders(data);
    } catch (err) {
      console.error("Failed to fetch orders:", err);
    }
  };

  const getStatusInfo = (status: string) => {
    switch (status) {
      case 'pending':
        return { 
          text: '리포트 신청이 접수되었습니다.', 
          icon: Clock, 
          color: 'text-white/40',
          bgColor: 'bg-white/5',
          borderColor: 'border-white/10'
        };
      case 'writing':
        return { 
          text: '리포트를 제작 중입니다.', 
          icon: Loader2, 
          color: 'text-accent-gold',
          bgColor: 'bg-accent-gold/10',
          borderColor: 'border-accent-gold/20'
        };
      case 'ready':
        return { 
          text: '리포트가 준비되었습니다. 다운로드할 수 있습니다.', 
          icon: CheckCircle2, 
          color: 'text-green-400',
          bgColor: 'bg-green-400/10',
          borderColor: 'border-green-400/20'
        };
      case 'sent':
        return { 
          text: '리포트 전달이 완료되었습니다.', 
          icon: CheckCircle2, 
          color: 'text-blue-400',
          bgColor: 'bg-blue-400/10',
          borderColor: 'border-blue-400/20'
        };
      default:
        return { 
          text: '상태 확인 중입니다.', 
          icon: AlertCircle, 
          color: 'text-white/20',
          bgColor: 'bg-white/5',
          borderColor: 'border-white/5'
        };
    }
  };

  const handleDownload = async (path: string) => {
    try {
      const { data, error } = await supabase.storage
        .from('reports')
        .createSignedUrl(path, 60); // 60초간 유효한 링크 생성

      if (error) throw error;
      if (data?.signedUrl) {
        window.open(data.signedUrl, '_blank');
      }
    } catch (err) {
      console.error("Failed to generate signed URL:", err);
      alert("파일을 불러오는 데 실패했습니다.");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0B0612] flex items-center justify-center">
        <div className="text-accent-gold animate-pulse font-elegant tracking-widest">불러오는 중...</div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#0B0612] text-white selection:bg-accent-gold selection:text-black">
      <GlobalBackground src="/image/shop-hero.png" brightCenter={false}>
        <Navigation />
        
        <div className="container mx-auto px-6 pt-32 pb-40 max-w-5xl">
          <div className="mb-12 flex items-center justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-elegant font-bold mb-2">나의 주문/리포트 내역</h1>
              <p className="text-white/40 text-sm">{user?.email} 님의 소중한 기록입니다.</p>
            </div>
            <Link 
              href="/mypage" 
              className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs text-white/60 hover:bg-white/10 transition-all flex items-center gap-2"
            >
              마이페이지 홈 <ChevronRight className="w-3 h-3" />
            </Link>
          </div>

          {orders.length === 0 ? (
            <div className="gungjung-glass p-20 text-center space-y-8 rounded-[40px] border-white/5">
              <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingBag className="w-10 h-10 text-white/10" />
              </div>
              <div>
                <p className="text-xl text-[#EDE6DA] opacity-80 font-light mb-2">아직 주문 내역이 없습니다.</p>
                <p className="text-sm text-white/30">백도화의 특별한 리포트로 당신의 매력을 발견해 보세요.</p>
              </div>
              <Link 
                href="/shop" 
                className="btn-primary inline-block px-10 py-4 rounded-full text-sm tracking-widest font-bold"
              >
                비밀상점 둘러보기
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {orders.map((order) => {
                const status = getStatusInfo(order.report_status || 'pending');
                const StatusIcon = status.icon;
                
                return (
                  <div key={order.id} className="gungjung-glass p-8 rounded-[32px] border-white/5 hover:border-accent-gold/20 transition-all group overflow-hidden relative">
                    <div className="absolute -right-4 -top-4 w-32 h-32 bg-accent-gold/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    
                    <div className="flex flex-col md:flex-row justify-between gap-8 relative z-10">
                      {/* Left: Product Info */}
                      <div className="flex-1 space-y-4">
                        <div className="flex items-center gap-3">
                          <span className="text-[10px] tracking-[0.2em] text-accent-gold opacity-60 font-bold uppercase">
                            {order.created_at ? new Date(order.created_at).toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' }) : '-'}
                          </span>
                          <span className="w-1 h-1 rounded-full bg-white/10"></span>
                          <span className="text-[10px] text-white/30">ID: {order.id?.slice(0, 8)}</span>
                        </div>
                        
                        <div>
                          <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-accent-gold transition-colors duration-500 mb-1">
                            {order.product_name}
                          </h3>
                          <p className="text-sm text-white/40 font-light">결제금액: {order.amount?.toLocaleString()}원</p>
                        </div>

                        {/* Status Message */}
                        <div className={`inline-flex items-center gap-3 px-5 py-3 rounded-2xl ${status.bgColor} ${status.borderColor} border`}>
                          <StatusIcon className={`w-4 h-4 ${status.color} ${order.report_status === 'writing' ? 'animate-spin' : ''}`} />
                          <p className={`text-xs font-medium ${status.color}`}>{status.text}</p>
                        </div>
                      </div>

                      {/* Right: Actions */}
                      <div className="flex items-center md:items-end justify-between md:flex-col gap-4">
                        <div className="flex flex-col items-end">
                          <span className={`text-[10px] px-3 py-1 rounded-full border mb-2 font-bold ${
                            (order.payment_status === 'paid' || order.payment_status === 'test_paid') 
                              ? 'border-green-500/30 bg-green-500/10 text-green-400' 
                              : 'border-white/10 bg-white/5 text-white/40'
                          }`}>
                            {order.payment_status === 'paid' || order.payment_status === 'test_paid' ? '결제완료' : '대기중'}
                          </span>
                        </div>

                        {order.report_file_url ? (
                          <button 
                            onClick={() => handleDownload(order.report_file_path)}
                            className="flex items-center gap-3 bg-accent-gold text-[#1A0626] px-8 py-4 rounded-2xl text-sm font-bold hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-accent-gold/20"
                          >
                            <Download className="w-4 h-4" /> 리포트 다운로드
                          </button>
                        ) : (
                          <div className="px-8 py-4 bg-white/5 border border-white/10 rounded-2xl text-xs text-white/20 font-medium cursor-default">
                            {order.report_status === 'writing' ? '제작 진행 중' : '리포트 준비 중'}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <Footer />
      </GlobalBackground>

      <style jsx global>{`
        .font-elegant { font-family: 'GmarketSans', sans-serif; }
        .gungjung-glass {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
        .btn-primary {
          background: linear-gradient(135deg, var(--accent-gold) 0%, #BA8D7E 100%);
          color: #1a0f2e;
          box-shadow: 0 10px 30px rgba(212, 178, 167, 0.3);
          transition: all 0.5s ease;
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 40px rgba(212, 178, 167, 0.5);
          filter: brightness(1.1);
        }
      `}</style>
    </main>
  );
}
