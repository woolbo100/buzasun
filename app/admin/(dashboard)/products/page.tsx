'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { Package, Plus, ExternalLink, CheckCircle2, XCircle, Trash2, Pencil } from "lucide-react";

export default function AdminProductsPage() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 상품 등록 폼 상태
  const [formData, setFormData] = useState({
    slug: "",
    name: "",
    description: "",
    price: 0,
    button_label: "자세히 보기",
    main_cta_label: "지금 바로 신청하기",
    show_on_main: false,
    is_featured: false,
    is_active: true,
    main_sort_order: 0
  });

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('main_sort_order', { ascending: true });

      if (error) throw error;
      setProducts(data || []);
    } catch (err: any) {
      console.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.slug || !formData.name || formData.price <= 0) {
      alert("슬러그, 상품명, 가격은 필수 입력 사항입니다.");
      return;
    }

    try {
      setIsSubmitting(true);
      
      if (editingId) {
        // 수정 모드
        const { error } = await supabase
          .from('products')
          .update(formData)
          .eq('id', editingId);
        if (error) throw error;
        alert("상품 정보가 수정되었습니다.");
      } else {
        // 신규 등록 모드
        const { error } = await supabase
          .from('products')
          .insert([formData]);
        if (error) throw error;
        alert("상품이 등록되었습니다.");
      }

      setIsFormOpen(false);
      setEditingId(null);
      setFormData({
        slug: "",
        name: "",
        description: "",
        price: 0,
        button_label: "자세히 보기",
        main_cta_label: "지금 바로 신청하기",
        show_on_main: false,
        is_featured: false,
        is_active: true,
        main_sort_order: 0
      });
      fetchProducts();
    } catch (err: any) {
      alert("저장 실패: " + err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const openEditForm = (product: any) => {
    setFormData({
      slug: product.slug,
      name: product.name,
      description: product.description || "",
      price: product.price,
      button_label: product.button_label || "자세히 보기",
      main_cta_label: product.main_cta_label || "지금 바로 신청하기",
      show_on_main: product.show_on_main,
      is_featured: product.is_featured,
      is_active: product.is_active,
      main_sort_order: product.main_sort_order
    });
    setEditingId(product.id);
    setIsFormOpen(true);
  };

  const handleDelete = async (id: string, name: string) => {
    if (!confirm(`'${name}' 상품을 정말 삭제하시겠습니까?\n이 작업은 되돌릴 수 없습니다.`)) return;

    try {
      const { error } = await supabase
        .from('products')
        .delete()
        .eq('id', id);

      if (error) throw error;

      alert("상품이 삭제되었습니다.");
      fetchProducts();
    } catch (err: any) {
      alert("삭제 실패: " + err.message);
    }
  };

  return (
    <main className="p-6 md:p-10 space-y-8">
      {/* Header */}
      <section className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-semibold flex items-center gap-3">
            <Package className="text-accent-gold" /> 상품 관리
          </h1>
          <p className="text-white/70 mt-2">
            판매 중인 상품 리스트와 메인 페이지 노출 정보를 관리합니다.
          </p>
        </div>
        <button 
          onClick={() => setIsFormOpen(true)}
          className="rounded-2xl border border-accent-gold/30 bg-accent-gold/10 px-6 py-3 text-accent-gold hover:bg-accent-gold/20 transition-all shadow-lg font-medium flex items-center gap-2"
        >
          <Plus className="w-5 h-5" /> 상품 신규 등록
        </button>
      </section>

      {/* Product List */}
      {loading ? (
        <div className="text-center py-20 bg-white/5 rounded-3xl border border-white/10">
          <p className="text-accent-gold animate-pulse">상품 목록을 불러오는 중...</p>
        </div>
      ) : products.length === 0 ? (
        <div className="text-center py-20 bg-white/5 rounded-3xl border border-white/10">
          <p className="text-white/40">등록된 상품이 없습니다. 새로운 상품을 등록해 보세요!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {products.map((product) => (
            <div 
              key={product.id}
              className="rounded-3xl border border-accent-gold/10 bg-white/5 backdrop-blur-xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 group hover:bg-white/10 transition-all"
            >
              <div className="space-y-1 flex-1">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-accent-gold/50 uppercase tracking-widest">{product.slug}</span>
                  {product.is_featured && <span className="bg-accent-gold/20 text-accent-gold text-[10px] px-2 py-0.5 rounded border border-accent-gold/30">FEATURED</span>}
                </div>
                <h3 className="text-xl font-semibold">{product.name}</h3>
                <p className="text-sm text-white/50 line-clamp-1">{product.description}</p>
              </div>

              <div className="flex items-center gap-8 pr-4">
                <div className="text-right">
                  <p className="text-xs text-white/40 uppercase tracking-tighter">Price</p>
                  <p className="text-lg font-bold text-accent-gold">{product.price?.toLocaleString()}원</p>
                </div>
                
                <div className="flex gap-4 border-l border-white/10 pl-8">
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-[10px] text-white/40">판매중</span>
                    {product.is_active ? <CheckCircle2 className="w-5 h-5 text-green-400" /> : <XCircle className="w-5 h-5 text-red-400" />}
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-[10px] text-white/40">메인노출</span>
                    {product.show_on_main ? <CheckCircle2 className="w-5 h-5 text-accent-gold" /> : <XCircle className="w-5 h-5 text-white/20" />}
                  </div>
                  <button 
                    onClick={() => openEditForm(product)}
                    className="flex flex-col items-center gap-1 hover:text-accent-gold transition-colors text-white/20"
                    title="상품 수정"
                  >
                    <span className="text-[10px]">수정</span>
                    <Pencil className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={() => handleDelete(product.id, product.name)}
                    className="flex flex-col items-center gap-1 hover:text-red-400 transition-colors text-white/20"
                    title="상품 삭제"
                  >
                    <span className="text-[10px]">삭제</span>
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 등록 모달 */}
      {isFormOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="w-full max-w-2xl rounded-3xl border border-accent-gold/30 bg-[#1A0B2E] p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto custom-scrollbar">
            <h2 className="text-2xl font-semibold mb-8 text-white flex items-center gap-2">
              {editingId ? <Pencil className="text-accent-gold" /> : <Plus className="text-accent-gold" />}
              {editingId ? "상품 정보 수정" : "새로운 상품 등록"}
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-white/60">상품 고유 슬러그 (URL용) *</label>
                  <input 
                    type="text" required placeholder="예: love-code-report"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent-gold/50"
                    value={formData.slug}
                    onChange={(e) => setFormData({...formData, slug: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-white/60">상품명 *</label>
                  <input 
                    type="text" required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent-gold/50"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-white/60">상품 설명</label>
                <textarea 
                  rows={3}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent-gold/50 resize-none"
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                ></textarea>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-white/60">가격 (원) *</label>
                  <input 
                    type="number" required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent-gold/50"
                    value={formData.price}
                    onChange={(e) => setFormData({...formData, price: parseInt(e.target.value) || 0})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-white/60">메인 노출 순서 (낮을수록 먼저)</label>
                  <input 
                    type="number"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent-gold/50"
                    value={formData.main_sort_order}
                    onChange={(e) => setFormData({...formData, main_sort_order: parseInt(e.target.value) || 0})}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-white/60">상품 카드 버튼 문구</label>
                  <input 
                    type="text"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent-gold/50"
                    value={formData.button_label}
                    onChange={(e) => setFormData({...formData, button_label: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-white/60">메인 CTA 버튼 문구</label>
                  <input 
                    type="text"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent-gold/50"
                    value={formData.main_cta_label}
                    onChange={(e) => setFormData({...formData, main_cta_label: e.target.value})}
                  />
                </div>
              </div>

              <div className="flex flex-wrap gap-6 py-2">
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input type="checkbox" className="w-5 h-5 rounded border-white/10 bg-white/5 checked:bg-accent-gold"
                    checked={formData.show_on_main}
                    onChange={(e) => setFormData({...formData, show_on_main: e.target.checked})} />
                  <span className="text-sm text-white/80">메인페이지 노출</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input type="checkbox" className="w-5 h-5 rounded border-white/10 bg-white/5 checked:bg-accent-gold"
                    checked={formData.is_featured}
                    onChange={(e) => setFormData({...formData, is_featured: e.target.checked})} />
                  <span className="text-sm text-white/80">추천 상품 설정</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input type="checkbox" className="w-5 h-5 rounded border-white/10 bg-white/5 checked:bg-accent-gold"
                    checked={formData.is_active}
                    onChange={(e) => setFormData({...formData, is_active: e.target.checked})} />
                  <span className="text-sm text-white/80">현재 판매 중</span>
                </label>
              </div>

              <div className="flex gap-4 pt-6 border-t border-white/5">
                <button type="button" onClick={() => { setIsFormOpen(false); setEditingId(null); }}
                  className="flex-1 rounded-2xl border border-white/10 bg-white/5 py-4 hover:bg-white/10 transition-all font-medium">
                  취소
                </button>
                <button type="submit" disabled={isSubmitting}
                  className="flex-1 rounded-2xl bg-accent-gold text-purple-900 py-4 font-bold hover:bg-accent-gold-deep transition-all disabled:opacity-50">
                  {isSubmitting ? "저장 중..." : (editingId ? "정보 수정 완료" : "상품 정보 저장하기")}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
