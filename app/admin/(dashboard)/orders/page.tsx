'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { Search, Filter, ChevronRight, Loader2 } from "lucide-react";

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState('ALL');
  const [searchTerm, setSearchTerm] = useState('');

  const filters = [
    { id: 'ALL', label: '전체' },
    { id: 'new', label: '신규', field: 'order_status' },
    { id: 'paid', label: '결제완료', field: 'payment_status' },
    { id: 'pending', label: '리포트 대기', field: 'report_status' },
    { id: 'writing', label: '제작중', field: 'report_status' },
    { id: 'sent', label: '발송완료', field: 'report_status' },
  ];

  useEffect(() => {
    async function fetchOrders() {
      try {
        setLoading(true);
        let query = supabase
          .from('orders')
          .select('*')
          .order('created_at', { ascending: false });

        const activeFilter = filters.find(f => f.id === filter);
        if (activeFilter && activeFilter.field) {
          query = query.eq(activeFilter.field, activeFilter.id);
        }

        const { data, error } = await query;

        if (error) throw error;
        setOrders(data || []);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchOrders();
  }, [filter]);

  const filteredOrders = orders.filter(order => 
    order.customer_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.customer_email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.product_name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusBadge = (status: string, type: 'payment' | 'order' | 'report') => {
    const baseClasses = "text-[10px] px-2 py-0.5 rounded-full border font-bold uppercase tracking-tighter ";
    
    if (type === 'payment') {
      switch (status) {
        case 'paid': return baseClasses + "border-green-500/30 bg-green-500/10 text-green-400";
        case 'test_paid': return baseClasses + "border-blue-500/30 bg-blue-500/10 text-blue-400";
        case 'pending': return baseClasses + "border-amber-500/30 bg-amber-500/10 text-amber-400";
        case 'cancelled': return baseClasses + "border-red-500/30 bg-red-500/10 text-red-400";
        default: return baseClasses + "border-white/20 bg-white/5 text-white/60";
      }
    } else if (type === 'order') {
      switch (status) {
        case 'new': return baseClasses + "border-blue-500/30 bg-blue-500/10 text-blue-400";
        case 'ready': return baseClasses + "border-purple-500/30 bg-purple-500/10 text-purple-400";
        case 'sent': return baseClasses + "border-green-500/30 bg-green-500/10 text-green-400";
        case 'completed': return baseClasses + "border-green-500/30 bg-green-500/10 text-green-400";
        default: return baseClasses + "border-white/20 bg-white/5 text-white/60";
      }
    } else {
      switch (status) {
        case 'sent': return baseClasses + "border-indigo-500/30 bg-indigo-500/10 text-indigo-400";
        case 'writing': return baseClasses + "border-purple-500/30 bg-purple-500/10 text-purple-400";
        case 'pending': return baseClasses + "border-amber-500/30 bg-amber-500/10 text-amber-400";
        default: return baseClasses + "border-white/20 bg-white/5 text-white/60";
      }
    }
  };

  const translateStatus = (status: string) => {
    const map: any = {
      'new': '신규', 'paid': '결제완료', 'test_paid': '테스트결제', 'pending': '대기중', 'writing': '제작중', 'ready': '다운로드 가능', 'sent': '발송완료',
      'completed': '완료', 'cancelled': '취소됨', 'confirmed': '확인됨', 'processing': '처리중'
    };
    return map[status] || status;
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-elegant font-bold text-white mb-2">주문 내역 관리</h1>
          <p className="text-white/40 text-sm">백도화의 모든 주문 건을 관리하고 리포트 상태를 업데이트합니다.</p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
            <input 
              type="text" 
              placeholder="고객명, 상품명 검색..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-11 pr-6 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-[var(--accent-gold)] transition-all w-64"
            />
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 p-1 bg-white/5 rounded-xl w-fit">
        {filters.map((f) => (
          <button
            key={f.id}
            onClick={() => setFilter(f.id)}
            className={`px-5 py-2 rounded-lg text-xs font-bold transition-all ${
              filter === f.id 
              ? 'bg-[var(--accent-gold)] text-[#1a0f2e] shadow-lg' 
              : 'text-white/40 hover:text-white/70'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Table Section */}
      <div className="gungjung-glass overflow-hidden border border-white/5 shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white/5 text-[10px] uppercase tracking-widest text-white/30 border-b border-white/10">
                <th className="px-6 py-5 font-bold">주문 일시</th>
                <th className="px-6 py-5 font-bold">고객 정보</th>
                <th className="px-6 py-5 font-bold">상품 정보</th>
                <th className="px-6 py-5 font-bold text-center">주문 상태</th>
                <th className="px-6 py-5 font-bold text-center">결제 상태</th>
                <th className="px-6 py-5 font-bold text-center">리포트</th>
                <th className="px-6 py-5 font-bold text-right">결제 금액</th>
                <th className="px-6 py-5"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {loading ? (
                <tr>
                  <td colSpan={8} className="py-20 text-center">
                    <Loader2 className="w-8 h-8 text-[var(--accent-gold)] animate-spin mx-auto mb-4" />
                    <p className="text-white/40 text-sm">주문 데이터를 불러오는 중...</p>
                  </td>
                </tr>
              ) : filteredOrders.length === 0 ? (
                <tr>
                  <td colSpan={8} className="py-20 text-center">
                    <p className="text-white/20">조회된 주문 내역이 없습니다.</p>
                  </td>
                </tr>
              ) : (
                filteredOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-white/[0.02] transition-colors group">
                    <td className="px-6 py-6 text-xs text-white/40 whitespace-nowrap">
                      {new Date(order.created_at).toLocaleDateString('ko-KR', {
                        year: 'numeric', month: '2-digit', day: '2-digit',
                        hour: '2-digit', minute: '2-digit'
                      })}
                    </td>
                    <td className="px-6 py-6">
                      <div className="space-y-1">
                        <p className="text-sm font-bold text-white">{order.customer_name}</p>
                        <p className="text-[10px] text-white/30">{order.customer_email}</p>
                        <p className="text-[10px] text-white/30">{order.customer_phone}</p>
                      </div>
                    </td>
                    <td className="px-6 py-6">
                      <div className="space-y-1">
                        <p className="text-sm text-[#EDE6DA] font-bold">{order.product_title || order.product_name}</p>
                        <p className="text-[10px] text-accent-gold/60 font-medium">결제명: {order.payment_name || '-'}</p>
                        <p className="text-[10px] text-white/20 uppercase tracking-tighter">{order.product_type}</p>
                      </div>
                    </td>
                    <td className="px-6 py-6 text-center">
                      <span className={getStatusBadge(order.order_status, 'order')}>
                        {translateStatus(order.order_status)}
                      </span>
                    </td>
                    <td className="px-6 py-6 text-center">
                      <span className={getStatusBadge(order.payment_status, 'payment')}>
                        {translateStatus(order.payment_status)}
                      </span>
                    </td>
                    <td className="px-6 py-6 text-center">
                      <span className={getStatusBadge(order.report_status, 'report')}>
                        {translateStatus(order.report_status)}
                      </span>
                    </td>
                    <td className="px-6 py-6 text-right">
                      <p className="text-sm font-bold text-[var(--accent-gold)] font-elegant">
                        ₩{order.amount?.toLocaleString()}
                      </p>
                    </td>
                    <td className="px-6 py-6 text-right">
                      <Link 
                        href={`/admin/orders/${order.id}`}
                        className="inline-flex items-center gap-2 text-[10px] font-bold text-white/40 hover:text-[var(--accent-gold)] transition-colors"
                      >
                        상세보기 <ChevronRight className="w-3 h-3" />
                      </Link>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
