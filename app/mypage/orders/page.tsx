'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import GlobalBackground from '@/components/GlobalBackground';
import { 
  Package, 
  FileText, 
  Download, 
  ChevronRight, 
  ShoppingBag, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  BookOpen, 
  Truck,
  ExternalLink 
} from 'lucide-react';

// 상품 분류 및 열람 경로 판별 함수
function getProductCategory(order: any) {
  const name = (order.product_name || order.product_title || '').toLowerCase();
  const pid = (order.product_id || '').toLowerCase();
  const memo = order.shipping_memo || '';
  
  const isPhysical = 
    memo.includes('[실물 상품 배송 정보]') || 
    pid === '6472fa45-4657-4c71-a79f-6979ffad1dac' || 
    pid === '2921df33-c570-488c-b4e7-618fbed5930c' || 
    pid === '62ecefad-cb8d-43e0-983a-ac4655313cc4' || 
    pid === '99325a06-3afe-40bf-8165-72a303be73d0' || 
    pid === 'a36e938d-0a6d-407c-88cf-6d3b4d3b52cc' || 
    name.includes('향수') || name.includes('크림') || name.includes('책갈피') || name.includes('하이랜더') || name.includes('레이디');

  const isEbook = 
    !isPhysical && (
      pid === 'bb61bbaa-365e-41d4-adc8-132f9043270d' ||
      pid === '5594bf01-0b83-443d-8a33-1235b4053d82' ||
      pid === '10898351-7c14-4912-a970-f079dd477b1a' ||
      name.includes('비급') || name.includes('비책') || name.includes('비방') || name.includes('전자책') || name.includes('ebook') || name.includes('가이드')
    );

  let ebookReadUrl = '/bicheop/love';
  if (isEbook) {
    if (name.includes('재회') || pid === '5594bf01-0b83-443d-8a33-1235b4053d82') {
      ebookReadUrl = '/bicheop/reunion';
    } else if (name.includes('풍요') || name.includes('부의') || pid === '10898351-7c14-4912-a970-f079dd477b1a') {
      ebookReadUrl = '/bicheop/abundance';
    } else {
      ebookReadUrl = '/bicheop/love';
    }
  }

  return {
    isPhysical,
    isEbook,
    isReport: !isPhysical && !isEbook,
    ebookReadUrl
  };
}

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
      fetchOrders(user);
      setLoading(false);
    };

    checkUser();
  }, [router]);

  const fetchOrders = async (currentUser: any) => {
    if (!currentUser) return;
    
    try {
      let query = supabase.from('orders').select('*');
      if (currentUser.email && currentUser.id) {
        query = query.or(`customer_email.eq.${currentUser.email},user_id.eq.${currentUser.id}`);
      } else if (currentUser.email) {
        query = query.eq('customer_email', currentUser.email);
      } else if (currentUser.id) {
        query = query.eq('user_id', currentUser.id);
      }

      const { data, error } = await query.order('created_at', { ascending: false });
      
      if (error) throw error;
      if (data) setOrders(data);
    } catch (err) {
      console.error("Failed to fetch orders:", err);
    }
  };

  const handleDownload = async (path?: string, directUrl?: string) => {
    try {
      if (directUrl && (directUrl.startsWith('http://') || directUrl.startsWith('https://'))) {
        window.open(directUrl, '_blank');
        return;
      }
      if (path) {
        const { data, error } = await supabase.storage
          .from('reports')
          .createSignedUrl(path, 60);

        if (error) throw error;
        if (data?.signedUrl) {
          window.open(data.signedUrl, '_blank');
          return;
        }
      }
      alert("다운로드 가능한 파일이 아직 등록되지 않았습니다. 관리자에게 문의해 주세요.");
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
                <p className="text-sm text-white/30">백도화의 특별한 리포트와 비첩으로 당신의 매력을 발견해 보세요.</p>
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
                const cat = getProductCategory(order);
                const isPaid = order.payment_status === 'paid' || order.payment_status === 'test_paid';
                const isPendingBank = order.payment_status === 'pending_bank_transfer';
                const hasDownloadFile = Boolean(order.report_file_url || order.report_file_path);

                const getStatusInfo = () => {
                  if (cat.isEbook) {
                    if (isPaid) {
                      return {
                        text: '전자책 구매 완료 (즉시 열람 및 다운로드 가능)',
                        icon: CheckCircle2,
                        color: 'text-purple-300',
                        bgColor: 'bg-purple-500/10',
                        borderColor: 'border-purple-500/20'
                      };
                    }
                    if (isPendingBank) {
                      return {
                        text: '무통장 입금 대기 중 (입금 확인 후 즉시 열람)',
                        icon: Clock,
                        color: 'text-amber-400',
                        bgColor: 'bg-amber-400/10',
                        borderColor: 'border-amber-400/20'
                      };
                    }
                    return {
                      text: '결제 대기 중입니다.',
                      icon: Clock,
                      color: 'text-white/40',
                      bgColor: 'bg-white/5',
                      borderColor: 'border-white/10'
                    };
                  }

                  if (cat.isPhysical) {
                    if (isPaid) {
                      return {
                        text: '주문 접수 완료 (출고 준비 중 - 영업일 2~5일 이내 배송)',
                        icon: Truck,
                        color: 'text-emerald-400',
                        bgColor: 'bg-emerald-400/10',
                        borderColor: 'border-emerald-400/20'
                      };
                    }
                    if (isPendingBank) {
                      return {
                        text: '무통장 입금 대기 중 (입금 확인 후 상품 출고)',
                        icon: Clock,
                        color: 'text-amber-400',
                        bgColor: 'bg-amber-400/10',
                        borderColor: 'border-amber-400/20'
                      };
                    }
                    return {
                      text: '결제 대기 중입니다.',
                      icon: Clock,
                      color: 'text-white/40',
                      bgColor: 'bg-white/5',
                      borderColor: 'border-white/10'
                    };
                  }

                  // Report
                  switch (order.report_status) {
                    case 'writing':
                      return { 
                        text: '마스터가 사주 리포트를 정밀 제작 중입니다. (1~2일 소요)', 
                        icon: Loader2, 
                        color: 'text-accent-gold',
                        bgColor: 'bg-accent-gold/10',
                        borderColor: 'border-accent-gold/20'
                      };
                    case 'ready':
                      return { 
                        text: '리포트가 완성되었습니다. 지금 다운로드할 수 있습니다.', 
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
                    case 'pending':
                    default:
                      return { 
                        text: isPaid ? '리포트 신청이 접수되어 제작 준비 중입니다.' : '입금 대기 중입니다.', 
                        icon: Clock, 
                        color: 'text-white/60',
                        bgColor: 'bg-white/5',
                        borderColor: 'border-white/10'
                      };
                  }
                };

                const status = getStatusInfo();
                const StatusIcon = status.icon;
                
                return (
                  <div key={order.id} className="gungjung-glass p-8 rounded-[32px] border-white/5 hover:border-accent-gold/20 transition-all group overflow-hidden relative">
                    <div className="absolute -right-4 -top-4 w-32 h-32 bg-accent-gold/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    
                    <div className="flex flex-col md:flex-row justify-between gap-8 relative z-10">
                      {/* Left: Product Info */}
                      <div className="flex-1 space-y-4">
                        <div className="flex items-center gap-3 flex-wrap">
                          <span className="text-[10px] tracking-[0.2em] text-accent-gold opacity-60 font-bold uppercase">
                            {order.created_at ? new Date(order.created_at).toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' }) : '-'}
                          </span>
                          <span className="w-1 h-1 rounded-full bg-white/10"></span>
                          <span className="text-[10px] text-white/30">주문ID: {order.id?.slice(0, 8)}</span>

                          {/* 태그 */}
                          {cat.isEbook && (
                            <span className="text-[9px] px-2.5 py-0.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 font-medium">
                              전자책
                            </span>
                          )}
                          {cat.isReport && (
                            <span className="text-[9px] px-2.5 py-0.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 font-medium">
                              사주 리포트
                            </span>
                          )}
                          {cat.isPhysical && (
                            <span className="text-[9px] px-2.5 py-0.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 font-medium">
                              실물 배송
                            </span>
                          )}
                        </div>
                        
                        <div>
                          <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-accent-gold transition-colors duration-500 mb-1">
                            {order.product_name || order.product_title || '백도화 상품'}
                          </h3>
                          <p className="text-sm text-white/50 font-light">결제금액: <strong className="text-white font-serif">{order.amount?.toLocaleString()}원</strong></p>
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
                            isPaid
                              ? 'border-green-500/30 bg-green-500/10 text-green-400' 
                              : isPendingBank
                              ? 'border-amber-500/30 bg-amber-500/10 text-amber-400'
                              : 'border-white/10 bg-white/5 text-white/40'
                          }`}>
                            {isPaid ? '결제완료' : isPendingBank ? '입금대기' : '대기중'}
                          </span>
                        </div>

                        {/* 버튼 영역 */}
                        <div className="flex flex-wrap gap-2">
                          {cat.isEbook && (
                            <>
                              {hasDownloadFile ? (
                                <button 
                                  onClick={() => handleDownload(order.report_file_path, order.report_file_url)}
                                  className="flex items-center gap-2 bg-accent-gold text-[#1A0626] px-6 py-3.5 rounded-2xl text-xs font-bold hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-accent-gold/20"
                                >
                                  <Download className="w-4 h-4" /> 전자책 다운로드
                                </button>
                              ) : (
                                <Link 
                                  href={cat.ebookReadUrl}
                                  className="flex items-center gap-2 bg-accent-gold text-[#1A0626] px-6 py-3.5 rounded-2xl text-xs font-bold hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-accent-gold/20"
                                >
                                  <BookOpen className="w-4 h-4" /> 전자책 열람하기
                                </Link>
                              )}
                            </>
                          )}

                          {cat.isReport && (
                            <>
                              {hasDownloadFile ? (
                                <button 
                                  onClick={() => handleDownload(order.report_file_path, order.report_file_url)}
                                  className="flex items-center gap-2 bg-accent-gold text-[#1A0626] px-6 py-3.5 rounded-2xl text-xs font-bold hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-accent-gold/20"
                                >
                                  <Download className="w-4 h-4" /> 리포트 다운로드
                                </button>
                              ) : (
                                <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-2xl text-xs text-white/40 font-medium cursor-default">
                                  {order.report_status === 'writing' ? '제작 진행 중' : '리포트 준비 중'}
                                </div>
                              )}
                            </>
                          )}

                          {cat.isPhysical && (
                            <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-2xl text-xs text-white/40 font-medium cursor-default flex items-center gap-1.5">
                              <Truck className="w-3.5 h-3.5 text-white/40" />
                              출고 준비 중
                            </div>
                          )}
                        </div>
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
