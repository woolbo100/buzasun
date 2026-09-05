'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';
import { 
  Package, 
  FileText, 
  MapPin, 
  User, 
  LogOut, 
  ChevronRight, 
  ShoppingBag, 
  Download, 
  Loader2, 
  BookOpen, 
  Truck, 
  ExternalLink, 
  CheckCircle2 
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

export default function MyPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('orders');
  const [orders, setOrders] = useState<any[]>([]);

  useEffect(() => {
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        router.push('/login?returnUrl=/mypage');
        return;
      }
      setUser(user);
      fetchData(user);
      setLoading(false);
    };

    checkUser();
  }, [router]);

  const fetchData = async (currentUser: any) => {
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

      const { data: ordersData, error } = await query.order('created_at', { ascending: false });
      if (error) {
        console.error("Failed to fetch orders:", error);
      }
      if (ordersData) setOrders(ordersData);
    } catch (err) {
      console.error("Error fetching orders in MyPage:", err);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/');
    router.refresh();
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
        <div className="text-accent-gold animate-pulse font-elegant">불러오는 중...</div>
      </div>
    );
  }

  const tabs = [
    { id: 'orders', label: '주문/리포트 내역', icon: Package },
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
                <div className="space-y-6">
                  {orders.length === 0 ? (
                    <div className="text-center py-20 bg-white/5 rounded-3xl border border-dashed border-white/10">
                      <ShoppingBag className="w-12 h-12 text-white/10 mx-auto mb-4" />
                      <p className="text-white/60 mb-6">아직 주문 내역이 없습니다.</p>
                      <Link href="/shop" className="inline-block bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl transition-all text-sm font-medium">
                        백도화 비밀상점에서 당신의 첫 번째 셀렉션을 만나보세요.
                      </Link>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {orders.map((order) => {
                        const cat = getProductCategory(order);
                        const isPaid = order.payment_status === '결제완료' || order.payment_status === 'paid' || order.payment_status === 'test_paid';
                        const isPendingBank = order.payment_status === '결제대기' || order.payment_status === 'pending_bank_transfer';
                        const hasDownloadFile = Boolean(order.report_file_url || order.report_file_path);

                        const getStatusText = () => {
                          if (cat.isEbook) {
                            if (isPaid) return '전자책 구매 완료 (즉시 열람 및 다운로드 가능)';
                            if (isPendingBank) return '무통장 입금 대기 중 (입금 확인 후 즉시 열람)';
                            return '결제 확인 중';
                          }
                          if (cat.isPhysical) {
                            if (isPaid) return '주문 완료 (출고 준비 중 - 영업일 2~5일 이내 발송)';
                            if (isPendingBank) return '무통장 입금 대기 중 (입금 확인 후 배송 준비)';
                            return '결제 확인 중';
                          }
                          // Report
                          switch (order.report_status) {
                            case '작성중':
                            case 'writing': 
                              return '마스터가 사주 리포트를 정밀 제작 중입니다. (1~2일 소요)';
                            case '발송완료':
                            case 'ready':
                            case 'sent': 
                              return '리포트가 완성되었습니다. 다운로드할 수 있습니다.';
                            case '접수완료':
                            case 'pending':
                            default: 
                              return isPaid ? '리포트 신청 접수 완료 (제작 대기)' : '입금/결제 대기 중';
                          }
                        };
                        
                        return (
                          <div key={order.id} className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-accent-gold/20 transition-all">
                            <div className="flex flex-col md:flex-row justify-between gap-4">
                              <div className="space-y-2">
                                <div className="flex items-center gap-2 mb-1 flex-wrap">
                                  <span className="text-[10px] text-white/40 uppercase tracking-widest">
                                    {order.created_at ? new Date(order.created_at).toLocaleDateString('ko-KR') : '-'}
                                  </span>
                                  <span className="text-[10px] text-white/30">주문ID: {order.id?.slice(0, 8)}</span>
                                  
                                  {/* 상품 분류 태그 */}
                                  {cat.isEbook && (
                                    <span className="text-[9px] px-2 py-0.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300">
                                      전자책
                                    </span>
                                  )}
                                  {cat.isReport && (
                                    <span className="text-[9px] px-2 py-0.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300">
                                      사주 리포트
                                    </span>
                                  )}
                                  {cat.isPhysical && (
                                    <span className="text-[9px] px-2 py-0.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300">
                                      실물 배송
                                    </span>
                                  )}

                                  {/* 결제 상태 배지 */}
                                  <span className={`text-[9px] px-2 py-0.5 rounded-full border ${
                                    isPaid 
                                      ? 'border-green-500/30 bg-green-500/10 text-green-400' 
                                      : isPendingBank
                                      ? 'border-amber-500/30 bg-amber-500/10 text-amber-400'
                                      : 'border-white/10 bg-white/5 text-white/40'
                                  }`}>
                                    {isPaid ? '결제완료' : isPendingBank ? '입금대기' : '대기중'}
                                  </span>
                                </div>

                                <h3 className="text-base font-bold text-white">{order.product_name || order.product_title || '백도화 상품'}</h3>
                                <p className="text-xs text-accent-gold/90 font-medium">{getStatusText()}</p>
                              </div>
                              
                              <div className="flex items-center md:items-end justify-between md:flex-col gap-3">
                                <p className="text-sm font-elegant text-white/70">{order.amount?.toLocaleString()}원</p>
                                
                                <div className="flex items-center gap-2">
                                  {/* 전자책일 경우: 파일 다운로드 또는 비첩 즉시 열람 */}
                                  {cat.isEbook && (
                                    <>
                                      {hasDownloadFile ? (
                                        <button 
                                          onClick={() => handleDownload(order.report_file_path, order.report_file_url)}
                                          className="flex items-center gap-1.5 bg-accent-gold text-[#1A0626] px-4 py-2 rounded-xl text-[11px] font-bold hover:brightness-110 transition-all shadow-lg shadow-accent-gold/20"
                                        >
                                          <Download className="w-3.5 h-3.5" /> 전자책 다운로드
                                        </button>
                                      ) : (
                                        <Link 
                                          href={cat.ebookReadUrl}
                                          className="flex items-center gap-1.5 bg-accent-gold text-[#1A0626] px-4 py-2 rounded-xl text-[11px] font-bold hover:brightness-110 transition-all shadow-lg shadow-accent-gold/20"
                                        >
                                          <BookOpen className="w-3.5 h-3.5" /> 전자책 열람하기
                                        </Link>
                                      )}
                                    </>
                                  )}

                                  {/* 리포트 상품일 경우: 완성 시 다운로드 버튼 */}
                                  {cat.isReport && (
                                    <>
                                      {hasDownloadFile ? (
                                        <button 
                                          onClick={() => handleDownload(order.report_file_path, order.report_file_url)}
                                          className="flex items-center gap-1.5 bg-accent-gold text-[#1A0626] px-4 py-2 rounded-xl text-[11px] font-bold hover:brightness-110 transition-all shadow-lg shadow-accent-gold/20"
                                        >
                                          <Download className="w-3.5 h-3.5" /> 리포트 다운로드
                                        </button>
                                      ) : (
                                        <span className="text-[11px] text-white/40 bg-white/5 px-3 py-1.5 rounded-xl border border-white/10">
                                          {order.report_status === '작성중' || order.report_status === 'writing' ? '제작 진행 중' : '리포트 준비 중'}
                                        </span>
                                      )}
                                    </>
                                  )}

                                  {/* 실물 배송 상품일 경우 */}
                                  {cat.isPhysical && (
                                    <span className="text-[11px] text-white/40 bg-white/5 px-3 py-1.5 rounded-xl border border-white/10 flex items-center gap-1">
                                      <Truck className="w-3 h-3 text-white/40" /> 출고 준비 중
                                    </span>
                                  )}

                                  <Link 
                                    href="/mypage/orders"
                                    className="text-[10px] text-white/40 hover:text-white underline underline-offset-4 pl-1"
                                  >
                                    상세보기
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
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
