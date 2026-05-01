'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchOrders() {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('orders')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) throw error;
        setOrders(data || []);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchOrders();
  }, []);

  const getStatusBadge = (status: string, type: 'payment' | 'report') => {
    const baseClasses = "text-xs px-3 py-1 rounded-full border ";
    
    if (type === 'payment') {
      switch (status) {
        case '결제완료': return baseClasses + "border-green-500/30 bg-green-500/10 text-green-400";
        case '결제대기': return baseClasses + "border-accent-gold/30 bg-accent-gold/10 text-accent-gold";
        case '환불완료': return baseClasses + "border-red-500/30 bg-red-500/10 text-red-400";
        default: return baseClasses + "border-white/20 bg-white/5 text-white/60";
      }
    } else {
      switch (status) {
        case '발송완료': return baseClasses + "border-blue-500/30 bg-blue-500/10 text-blue-400";
        case '작성중': return baseClasses + "border-purple-500/30 bg-purple-500/10 text-purple-400";
        case '접수완료': return baseClasses + "border-accent-gold/30 bg-accent-gold/10 text-accent-gold";
        default: return baseClasses + "border-white/20 bg-white/5 text-white/60";
      }
    }
  };

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#2A103D,_#160B24,_#0B0612)] text-white p-6 md:p-10">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <section className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <Link href="/admin" className="text-sm text-accent-gold/60 hover:text-accent-gold transition-colors flex items-center gap-2 mb-2">
              ← 대시보드로 돌아가기
            </Link>
            <h1 className="text-3xl md:text-4xl font-semibold">주문 관리</h1>
            <p className="text-white/70 mt-2">
              백도화 리포트 주문 현황을 확인하고 리포트 상태를 관리합니다.
            </p>
          </div>
        </section>

        {/* Filters (UI only) */}
        <section className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-96">
            <input 
              type="text" 
              placeholder="고객명, 이메일 검색..." 
              className="w-full bg-white/5 border border-accent-gold/20 rounded-2xl px-5 py-3 focus:outline-none focus:border-accent-gold/50 transition-all"
            />
          </div>
        </section>

        {/* Status Handling */}
        {loading ? (
          <div className="text-center py-20 bg-white/5 rounded-3xl border border-white/10">
            <p className="text-accent-gold animate-pulse">데이터를 불러오는 중...</p>
          </div>
        ) : error ? (
          <div className="text-center py-20 bg-red-500/10 rounded-3xl border border-red-500/20">
            <p className="text-red-400">오류가 발생했습니다: {error}</p>
          </div>
        ) : orders.length === 0 ? (
          <div className="text-center py-20 bg-white/5 rounded-3xl border border-white/10">
            <p className="text-white/40">아직 등록된 주문 데이터가 없습니다.</p>
          </div>
        ) : (
          /* Orders Table */
          <section className="rounded-3xl border border-accent-gold/20 bg-white/5 backdrop-blur-xl overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5 text-sm text-white/60">
                    <th className="p-5 font-medium">주문일</th>
                    <th className="p-5 font-medium">고객명 / 이메일</th>
                    <th className="p-5 font-medium">상품명</th>
                    <th className="p-5 font-medium text-center">결제상태</th>
                    <th className="p-5 font-medium text-center">리포트상태</th>
                    <th className="p-5 font-medium text-right">금액</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {orders.map((order) => (
                    <tr key={order.id} className="hover:bg-white/5 transition-colors group">
                      <td className="p-5 text-sm text-white/70">
                        {new Date(order.created_at).toLocaleDateString()}
                      </td>
                      <td className="p-5">
                        <p className="font-medium">{order.customer_name}</p>
                        <p className="text-xs text-white/40">{order.customer_email}</p>
                      </td>
                      <td className="p-5 text-sm">{order.product_name}</td>
                      <td className="p-5 text-center">
                        <span className={getStatusBadge(order.payment_status, 'payment')}>
                          {order.payment_status}
                        </span>
                      </td>
                      <td className="p-5 text-center">
                        <span className={getStatusBadge(order.report_status, 'report')}>
                          {order.report_status}
                        </span>
                      </td>
                      <td className="p-5 text-right font-medium text-accent-gold/90">
                        {order.amount?.toLocaleString()}원
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
