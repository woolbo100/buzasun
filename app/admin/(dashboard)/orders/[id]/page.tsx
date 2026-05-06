'use client';

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { ChevronLeft, Save, ExternalLink, User, Package, CreditCard, FileText, Loader2 } from "lucide-react";

export default function OrderDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [order, setOrder] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [memo, setMemo] = useState('');
  const [orderStatus, setOrderStatus] = useState('');
  const [reportStatus, setReportStatus] = useState('');

  useEffect(() => {
    async function fetchOrder() {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('orders')
          .select('*')
          .eq('id', params.id)
          .single();

        if (error) throw error;
        setOrder(data);
        setMemo(data.order_memo || '');
        setOrderStatus(data.order_status);
        setReportStatus(data.report_status);
      } catch (err: any) {
        console.error("Failed to fetch order:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchOrder();
  }, [params.id]);

  const handleSave = async () => {
    try {
      setSaving(true);
      const { error } = await supabase
        .from('orders')
        .update({
          order_memo: memo,
          order_status: orderStatus,
          report_status: reportStatus,
          updated_at: new Date().toISOString()
        })
        .eq('id', params.id);

      if (error) throw error;
      alert("저장되었습니다.");
      router.refresh();
    } catch (err: any) {
      alert("저장 중 오류가 발생했습니다.");
    } finally {
      setSaving(false);
    }
  };

  const handleDownload = async (path: string) => {
    try {
      const { data, error } = await supabase.storage
        .from('reports')
        .createSignedUrl(path, 300); // 관리자용은 5분간 유효

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
      <div className="min-h-[60vh] flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-[var(--accent-gold)] animate-spin" />
      </div>
    );
  }

  if (!order) {
    return (
      <div className="text-center py-20">
        <p className="text-white/40">주문 정보를 찾을 수 없습니다.</p>
        <Link href="/admin/orders" className="text-[var(--accent-gold)] mt-4 inline-block underline">목록으로 돌아가기</Link>
      </div>
    );
  }

  const translateStatus = (status: string) => {
    const map: any = {
      'new': '신규', 'paid': '결제완료', 'test_paid': '테스트결제', 'pending': '대기중', 'writing': '제작중', 'ready': '다운로드 가능', 'sent': '발송완료',
      'completed': '완료', 'cancelled': '취소됨', 'confirmed': '확인됨', 'processing': '처리중'
    };
    return map[status] || status;
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <Link href="/admin/orders" className="p-2 hover:bg-white/10 rounded-full transition-colors">
            <ChevronLeft className="w-6 h-6 text-white/60" />
          </Link>
          <div>
            <h1 className="text-2xl font-elegant font-bold text-white mb-1">주문 상세 내역</h1>
            <p className="text-white/30 text-xs">주문 번호: {order.merchant_uid}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <Link 
            href={`/admin/reports/create?orderId=${order.id}`}
            className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-xs font-bold text-white hover:bg-white/10 transition-all"
          >
            <ExternalLink className="w-3 h-3" /> 리포트 제작실로 이동
          </Link>
          <button
            onClick={handleSave}
            disabled={saving}
            className="flex items-center gap-2 px-8 py-3 bg-[var(--accent-gold)] text-[#1a0f2e] rounded-xl text-xs font-bold shadow-lg hover:brightness-110 active:scale-95 transition-all disabled:opacity-50"
          >
            {saving ? <Loader2 className="w-3 h-3 animate-spin" /> : <Save className="w-3 h-3" />} 저장하기
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Info Cards */}
        <div className="lg:col-span-2 space-y-8">
          {/* Order & Product Info */}
          <section className="gungjung-glass p-8 space-y-6">
            <div className="flex items-center gap-3 mb-2">
              <Package className="w-5 h-5 text-[var(--accent-gold)]" />
              <h2 className="text-lg font-bold text-white">주문 및 상품 정보</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-white/30 block mb-1">상품명</label>
                  <p className="text-[#EDE6DA] font-medium">{order.product_name}</p>
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-white/30 block mb-1">상품 유형</label>
                  <p className="text-white/60 text-sm uppercase">{order.product_type}</p>
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-white/30 block mb-1">주문 일시</label>
                  <p className="text-white/60 text-sm">
                    {new Date(order.created_at).toLocaleString('ko-KR', {
                      year: 'numeric', month: 'long', day: 'numeric',
                      hour: '2-digit', minute: '2-digit'
                    })}
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-white/30 block mb-1">결제 금액</label>
                  <p className="text-xl font-bold text-[var(--accent-gold)] font-elegant">₩{order.amount?.toLocaleString()}</p>
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-white/30 block mb-1">결제 상태</label>
                  <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold border ${
                    order.payment_status === 'paid' ? 'border-green-500/30 bg-green-500/10 text-green-400' : 
                    order.payment_status === 'test_paid' ? 'border-blue-500/30 bg-blue-500/10 text-blue-400' :
                    'border-white/20 bg-white/5 text-white/60'
                  }`}>
                    {translateStatus(order.payment_status)}
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Report Request Info */}
          <section className="gungjung-glass p-8 space-y-6">
            <div className="flex items-center gap-3 mb-2">
              <FileText className="w-5 h-5 text-[var(--accent-gold)]" />
              <h2 className="text-lg font-bold text-white">리포트 신청 상세 정보</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* My Info */}
              <div className="space-y-4">
                <p className="text-xs font-bold text-[var(--accent-gold)]/60 border-b border-white/5 pb-2">본인 사주 정보</p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] text-white/20 block mb-1">생년월일</label>
                    <p className="text-sm text-white">{order.birth_date || '-'}</p>
                  </div>
                  <div>
                    <label className="text-[10px] text-white/20 block mb-1">출생시간</label>
                    <p className="text-sm text-white">{order.birth_time || '-'}</p>
                  </div>
                  <div>
                    <label className="text-[10px] text-white/20 block mb-1">역법</label>
                    <p className="text-sm text-white">{order.calendar_type === 'solar' ? '양력' : '음력'}</p>
                  </div>
                  <div>
                    <label className="text-[10px] text-white/20 block mb-1">성별</label>
                    <p className="text-sm text-white">{order.gender === 'male' ? '남성' : '여성'}</p>
                  </div>
                </div>
              </div>

              {/* Partner Info */}
              <div className="space-y-4">
                <p className="text-xs font-bold text-[var(--accent-gold)]/60 border-b border-white/5 pb-2">상대방 사주 정보</p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] text-white/20 block mb-1">생년월일</label>
                    <p className="text-sm text-white">{order.partner_birth_date || '-'}</p>
                  </div>
                  <div>
                    <label className="text-[10px] text-white/20 block mb-1">출생시간</label>
                    <p className="text-sm text-white">{order.partner_birth_time || '-'}</p>
                  </div>
                  <div>
                    <label className="text-[10px] text-white/20 block mb-1">역법</label>
                    <p className="text-sm text-white">{order.partner_calendar_type === 'solar' ? '양력' : '음력'}</p>
                  </div>
                  <div>
                    <label className="text-[10px] text-white/20 block mb-1">성별</label>
                    <p className="text-sm text-white">{order.partner_gender === 'male' ? '남성' : '여성'}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/5">
              <label className="text-[10px] text-white/20 block mb-2 font-bold uppercase tracking-widest">고객 요청 사항</label>
              <div className="p-5 bg-white/5 rounded-xl border border-white/5 text-sm text-[#EDE6DA] leading-relaxed whitespace-pre-wrap italic">
                {order.request_note || '작성된 요청 사항이 없습니다.'}
              </div>
            </div>
          </section>
        </div>

        {/* Right Column: Processing & Customer */}
        <div className="space-y-8">
          {/* Customer Info */}
          <section className="gungjung-glass p-8 space-y-6">
            <div className="flex items-center gap-3 mb-2">
              <User className="w-5 h-5 text-[var(--accent-gold)]" />
              <h2 className="text-lg font-bold text-white">고객 정보</h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="text-[10px] text-white/30 block mb-1">이름</label>
                <p className="text-[#EDE6DA] font-bold">{order.customer_name}</p>
              </div>
              <div>
                <label className="text-[10px] text-white/30 block mb-1">이메일</label>
                <p className="text-white/60 text-sm">{order.customer_email}</p>
              </div>
              <div>
                <label className="text-[10px] text-white/30 block mb-1">전화번호</label>
                <p className="text-white/60 text-sm">{order.customer_phone}</p>
              </div>
            </div>
          </section>

          {/* Admin Processing Area */}
          <section className="gungjung-glass p-8 space-y-6 border border-[var(--accent-gold)]/20 shadow-[0_0_40px_rgba(212,178,167,0.05)]">
            <div className="flex items-center gap-3 mb-2">
              <CreditCard className="w-5 h-5 text-[var(--accent-gold)]" />
              <h2 className="text-lg font-bold text-white">관리자 처리</h2>
            </div>
            
            <div className="space-y-5">
              <div className="space-y-2">
                <label className="text-[10px] text-white/30 block font-bold tracking-widest">주문 상태</label>
                <select 
                  value={orderStatus}
                  onChange={(e) => setOrderStatus(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[var(--accent-gold)] transition-all"
                >
                  <option value="new">신규 (New)</option>
                  <option value="confirmed">주문확인 (Confirmed)</option>
                  <option value="processing">처리중 (Processing)</option>
                  <option value="completed">배송/완료 (Completed)</option>
                  <option value="cancelled">취소됨 (Cancelled)</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] text-white/30 block font-bold tracking-widest">리포트 상태</label>
                <select 
                  value={reportStatus}
                  onChange={(e) => setReportStatus(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[var(--accent-gold)] transition-all"
                >
                  <option value="pending">리포트 대기 (Pending)</option>
                  <option value="writing">리포트 제작중 (Writing)</option>
                  <option value="reviewing">검수중 (Reviewing)</option>
                  <option value="ready">다운로드 가능 (Ready)</option>
                  <option value="sent">발송완료 (Sent)</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] text-white/30 block font-bold tracking-widest">PDF 리포트 업로드</label>
                <div className="space-y-4">
                  {order.report_file_url ? (
                    <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <FileText className="w-5 h-5 text-green-400" />
                        <span className="text-xs text-green-400 font-bold">업로드 완료</span>
                      </div>
                      <button 
                        onClick={() => handleDownload(order.report_file_path)}
                        className="text-[10px] text-white/40 hover:text-white underline transition-colors"
                      >
                        파일 확인하기
                      </button>
                    </div>
                  ) : (
                    <div className="p-8 border-2 border-dashed border-white/10 rounded-2xl text-center space-y-4 hover:border-[var(--accent-gold)]/30 transition-colors group">
                      <input 
                        type="file" 
                        id="pdf-upload" 
                        accept=".pdf"
                        onChange={async (e) => {
                          const file = e.target.files?.[0];
                          if (!file) return;
                          
                          try {
                            setSaving(true);
                            const fileExt = file.name.split('.').pop();
                            const fileName = `${order.id}_${Date.now()}.${fileExt}`;
                            const filePath = `reports/${fileName}`;

                            const { error: uploadError } = await supabase.storage
                              .from('reports')
                              .upload(filePath, file);

                            if (uploadError) throw uploadError;

                            const { data: { publicUrl } } = supabase.storage
                              .from('reports')
                              .getPublicUrl(filePath);

                            const { error: updateError } = await supabase
                              .from('orders')
                              .update({
                                report_file_url: publicUrl,
                                report_file_path: filePath,
                                report_uploaded_at: new Date().toISOString(),
                                report_status: 'ready'
                              })
                              .eq('id', order.id);

                            if (updateError) throw updateError;
                            
                            alert("리포트가 업로드되었습니다.");
                            window.location.reload();
                          } catch (err) {
                            console.error("Upload error:", err);
                            alert("업로드 중 오류가 발생했습니다.");
                          } finally {
                            setSaving(false);
                          }
                        }}
                        className="hidden" 
                      />
                      <label htmlFor="pdf-upload" className="cursor-pointer block">
                        <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[var(--accent-gold)]/10 transition-colors">
                          <FileText className="w-6 h-6 text-white/20 group-hover:text-[var(--accent-gold)] transition-colors" />
                        </div>
                        <p className="text-sm text-white/40 group-hover:text-white/60">클릭하여 PDF 파일 업로드</p>
                        <p className="text-[10px] text-white/20 mt-1">최대 50MB, PDF 형식만 가능</p>
                      </label>
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] text-white/30 block font-bold tracking-widest">관리자 메모</label>
                <textarea 
                  value={memo}
                  onChange={(e) => setMemo(e.target.value)}
                  rows={5}
                  placeholder="진행 상황이나 참고할 내용을 기록하세요."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[var(--accent-gold)] transition-all resize-none"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
