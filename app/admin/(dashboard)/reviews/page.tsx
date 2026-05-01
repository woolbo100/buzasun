'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default function AdminReviewsPage() {
  const [reviews, setReviews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // 등록 폼 관련 상태
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    customer_name: "",
    product_name: "",
    rating: 5,
    content: "",
    is_public: true,
    show_on_main: false
  });

  const fetchReviews = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('reviews')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setReviews(data || []);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.customer_name || !formData.content) {
      alert("고객명과 후기 내용은 필수입니다.");
      return;
    }

    try {
      setIsSubmitting(true);
      const { error } = await supabase
        .from('reviews')
        .insert([formData]);

      if (error) throw error;

      alert("후기가 등록되었습니다.");
      setIsFormOpen(false);
      setFormData({
        customer_name: "",
        product_name: "",
        rating: 5,
        content: "",
        is_public: true,
        show_on_main: false
      });
      fetchReviews(); // 목록 새로고침
    } catch (err: any) {
      alert("저장 실패: " + err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getToggleBadge = (active: boolean) => {
    return active 
      ? "bg-yellow-200/20 text-yellow-200 border border-yellow-200/30" 
      : "bg-white/5 text-white/40 border border-white/10";
  };

  const renderStars = (rating: number) => {
    return "★".repeat(rating) + "☆".repeat(5 - rating);
  };

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#2A103D,_#160B24,_#0B0612)] text-white p-6 md:p-10 relative">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <section className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <Link href="/admin" className="text-sm text-yellow-200/60 hover:text-yellow-200 transition-colors flex items-center gap-2 mb-2">
              ← 대시보드로 돌아가기
            </Link>
            <h1 className="text-3xl md:text-4xl font-semibold">후기 관리</h1>
            <p className="text-white/70 mt-2">
              고객님들이 남겨주신 소중한 리포트 후기를 관리합니다.
            </p>
          </div>
          <button 
            onClick={() => setIsFormOpen(true)}
            className="rounded-2xl border border-yellow-200/30 bg-yellow-200/10 px-6 py-3 text-yellow-200 hover:bg-yellow-200/20 transition-all shadow-lg font-medium"
          >
            + 후기 직접 등록
          </button>
        </section>

        {/* Status Handling */}
        {loading ? (
          <div className="text-center py-20 bg-white/5 rounded-3xl border border-white/10">
            <p className="text-yellow-200 animate-pulse">데이터를 불러오는 중...</p>
          </div>
        ) : error ? (
          <div className="text-center py-20 bg-red-500/10 rounded-3xl border border-red-500/20">
            <p className="text-red-400">오류가 발생했습니다: {error}</p>
          </div>
        ) : reviews.length === 0 ? (
          <div className="text-center py-20 bg-white/5 rounded-3xl border border-white/10">
            <p className="text-white/40">아직 등록된 후기 데이터가 없습니다.</p>
          </div>
        ) : (
          /* Reviews Table */
          <section className="rounded-3xl border border-yellow-200/20 bg-white/5 backdrop-blur-xl overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5 text-sm text-white/60">
                    <th className="p-5 font-medium">작성일</th>
                    <th className="p-5 font-medium">고객명</th>
                    <th className="p-5 font-medium">상품명 / 별점</th>
                    <th className="p-5 font-medium">후기 내용</th>
                    <th className="p-5 font-medium text-center">공개</th>
                    <th className="p-5 font-medium text-center">메인노출</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {reviews.map((review) => (
                    <tr key={review.id} className="hover:bg-white/5 transition-colors group">
                      <td className="p-5 text-sm text-white/70">
                        {new Date(review.created_at).toLocaleDateString()}
                      </td>
                      <td className="p-5 font-medium">{review.customer_name}</td>
                      <td className="p-5">
                        <p className="text-sm">{review.product_name || "미지정"}</p>
                        <p className="text-xs text-yellow-200/70 mt-1">{renderStars(review.rating)}</p>
                      </td>
                      <td className="p-5 text-sm max-w-xs">
                        <p className="truncate text-white/80" title={review.content}>
                          {review.content}
                        </p>
                      </td>
                      <td className="p-5 text-center">
                        <span className={`text-[10px] font-bold px-2 py-1 rounded-md uppercase ${getToggleBadge(review.is_public)}`}>
                          {review.is_public ? "ON" : "OFF"}
                        </span>
                      </td>
                      <td className="p-5 text-center">
                        <span className={`text-[10px] font-bold px-2 py-1 rounded-md uppercase ${getToggleBadge(review.show_on_main)}`}>
                          {review.show_on_main ? "ON" : "OFF"}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-5 border-t border-white/5 text-center text-sm text-white/40">
              총 {reviews.length}개의 후기가 있습니다.
            </div>
          </section>
        )}
      </div>

      {/* 등록 폼 모달 */}
      {isFormOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="w-full max-w-xl rounded-3xl border border-yellow-200/30 bg-[#1A0B2E] p-8 shadow-2xl relative overflow-hidden">
            {/* 배경 장식 */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-200/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>
            
            <h2 className="text-2xl font-semibold mb-6">후기 직접 등록</h2>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm text-white/60">고객명 *</label>
                  <input 
                    type="text"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-200/50"
                    value={formData.customer_name}
                    onChange={(e) => setFormData({...formData, customer_name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-white/60">상품명</label>
                  <input 
                    type="text"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-200/50"
                    value={formData.product_name}
                    onChange={(e) => setFormData({...formData, product_name: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-white/60">별점 ({formData.rating}점)</label>
                <input 
                  type="range" min="1" max="5" 
                  className="w-full accent-yellow-200"
                  value={formData.rating}
                  onChange={(e) => setFormData({...formData, rating: parseInt(e.target.value)})}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-white/60">후기 내용 *</label>
                <textarea 
                  required
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-200/50 resize-none"
                  value={formData.content}
                  onChange={(e) => setFormData({...formData, content: e.target.value})}
                ></textarea>
              </div>

              <div className="flex gap-6">
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input 
                    type="checkbox" 
                    className="w-5 h-5 rounded border-white/10 bg-white/5 checked:bg-yellow-200"
                    checked={formData.is_public}
                    onChange={(e) => setFormData({...formData, is_public: e.target.checked})}
                  />
                  <span className="text-sm text-white/80">공개 여부</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input 
                    type="checkbox" 
                    className="w-5 h-5 rounded border-white/10 bg-white/5 checked:bg-yellow-200"
                    checked={formData.show_on_main}
                    onChange={(e) => setFormData({...formData, show_on_main: e.target.checked})}
                  />
                  <span className="text-sm text-white/80">메인 노출</span>
                </label>
              </div>

              <div className="flex gap-3 pt-4">
                <button 
                  type="button"
                  onClick={() => setIsFormOpen(false)}
                  className="flex-1 rounded-xl border border-white/10 bg-white/5 py-3 hover:bg-white/10 transition-all"
                >
                  취소
                </button>
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 rounded-xl bg-yellow-200 text-purple-900 py-3 font-semibold hover:bg-yellow-300 transition-all disabled:opacity-50"
                >
                  {isSubmitting ? "저장 중..." : "후기 저장하기"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
