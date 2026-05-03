'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { 
  Package, Plus, ExternalLink, CheckCircle2, XCircle, 
  Trash2, Pencil, Upload, Image as ImageIcon, Loader2, 
  ChevronRight, Info, Eye, EyeOff, LayoutGrid, Truck,
  Settings, Layers, AlignLeft
} from "lucide-react";
import Image from "next/image";

export default function AdminProductsPage() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [isGalleryUploading, setIsGalleryUploading] = useState(false);

  // 상품 등록 폼 상태 (개선 지침 반영)
  const [formData, setFormData] = useState({
    name: "",
    slug: "",
    product_id: "",
    type: "physical",
    category: "ENERGY CARE",
    price: 0,
    short_description: "",
    description: "",
    main_image: "",
    gallery_images: [] as string[],
    is_active: true,
    featured: false,
    requires_shipping: false,
    in_stock: true,
    sort_order: 0,
    detail_path: "",
    checkout_path: ""
  });

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('sort_order', { ascending: true });

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

  // 자동 경로 생성
  useEffect(() => {
    const slug = formData.slug.trim();
    if (slug) {
      setFormData(prev => ({
        ...prev,
        detail_path: `/shop/${slug}`,
        checkout_path: `/checkout?productId=${slug}`
      }));
    }
  }, [formData.slug]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.slug || !formData.name || formData.price <= 0) {
      alert("상품명, 슬러그, 가격은 필수 입력 사항입니다.");
      return;
    }

    try {
      setIsSubmitting(true);
      
      const payload = {
        name: formData.name,
        slug: formData.slug,
        product_id: formData.product_id || formData.slug,
        type: formData.type,
        category: formData.category,
        price: formData.price,
        short_description: formData.short_description,
        description: formData.description,
        main_image: formData.main_image,
        gallery_images: formData.gallery_images,
        is_active: formData.is_active,
        featured: formData.featured,
        requires_shipping: formData.requires_shipping,
        in_stock: formData.in_stock,
        sort_order: formData.sort_order,
        detail_path: formData.detail_path,
        checkout_path: formData.checkout_path
      };

      if (editingId) {
        const { error } = await supabase
          .from('products')
          .update(payload)
          .eq('id', editingId);
        
        if (error) throw error;
        alert("상품 정보가 수정되었습니다.");
      } else {
        const { error } = await supabase
          .from('products')
          .insert([payload]);
          
        if (error) throw error;
        alert("상품이 등록되었습니다.");
      }

      closeForm();
      fetchProducts();
    } catch (err: any) {
      alert("저장 실패: DB 컬럼이 존재하지 않거나 데이터 형식이 올바르지 않습니다. (SQL 스크립트 실행 확인 필요)\n\n에러내용: " + err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeForm = () => {
    setIsFormOpen(false);
    setEditingId(null);
    setFormData({
      name: "",
      slug: "",
      product_id: "",
      type: "physical",
      category: "ENERGY CARE",
      price: 0,
      short_description: "",
      description: "",
      main_image: "",
      gallery_images: [],
      is_active: true,
      featured: false,
      requires_shipping: false,
      in_stock: true,
      sort_order: 0,
      detail_path: "",
      checkout_path: ""
    });
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>, field: 'main' | 'gallery') => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    try {
      if (field === 'main') setIsUploading(true);
      else setIsGalleryUploading(true);

      const uploadedUrls: string[] = [];

      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const fileExt = file.name.split('.').pop();
        const fileName = `${Math.random().toString(36).substring(2)}-${Date.now()}.${fileExt}`;
        const filePath = `products/${fileName}`;

        const { error: uploadError } = await supabase.storage
          .from('product-images')
          .upload(filePath, file);

        if (uploadError) throw uploadError;

        const { data: { publicUrl } } = supabase.storage
          .from('product-images')
          .getPublicUrl(filePath);
        
        uploadedUrls.push(publicUrl);
      }

      if (field === 'main') {
        setFormData(prev => ({ ...prev, main_image: uploadedUrls[0] }));
      } else {
        setFormData(prev => ({ ...prev, gallery_images: [...prev.gallery_images, ...uploadedUrls] }));
      }

      alert("이미지가 성공적으로 업로드되었습니다.");
    } catch (err: any) {
      alert("업로드 실패: " + err.message);
    } finally {
      setIsUploading(false);
      setIsGalleryUploading(false);
    }
  };

  const removeGalleryImage = (index: number) => {
    setFormData(prev => ({
      ...prev,
      gallery_images: prev.gallery_images.filter((_, i) => i !== index)
    }));
  };

  const openEditForm = (product: any) => {
    setFormData({
      name: product.name,
      slug: product.slug,
      product_id: product.product_id || product.slug,
      type: product.type || "physical",
      category: product.category || "ENERGY CARE",
      price: product.price,
      short_description: product.short_description || "",
      description: product.description || "",
      main_image: product.main_image || "",
      gallery_images: product.gallery_images || [],
      is_active: product.is_active,
      featured: product.featured,
      requires_shipping: product.requires_shipping || false,
      in_stock: product.in_stock ?? true,
      sort_order: product.sort_order || 0,
      detail_path: product.detail_path || `/shop/${product.slug}`,
      checkout_path: product.checkout_path || `/checkout?productId=${product.slug}`
    });
    setEditingId(product.id);
    setIsFormOpen(true);
  };

  const handleDelete = async (id: string, name: string) => {
    if (!confirm(`'${name}' 상품을 정말 삭제하시겠습니까?`)) return;

    try {
      const { error } = await supabase.from('products').delete().eq('id', id);
      if (error) throw error;
      alert("상품이 삭제되었습니다.");
      fetchProducts();
    } catch (err: any) {
      alert("삭제 실패: " + err.message);
    }
  };

  return (
    <main className="p-6 md:p-10 space-y-8 bg-[#0a0514] min-h-screen text-white">
      {/* Header */}
      <section className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold flex items-center gap-3 font-elegant">
            <Package className="text-accent-gold" /> 상품 통합 관리
          </h1>
          <p className="text-white/50 mt-2 font-light">
            실물 상품부터 디지털 리포트까지 체계적으로 관리하세요.
          </p>
        </div>
        <button 
          onClick={() => setIsFormOpen(true)}
          className="rounded-xl bg-gradient-to-r from-accent-gold to-[#BA8D7E] px-8 py-4 text-[#2D0A1E] font-bold shadow-lg flex items-center gap-2 hover:scale-105 transition-all"
        >
          <Plus className="w-5 h-5" /> 새 상품 등록하기
        </button>
      </section>

      {/* Stats/Filter (Optional) */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: '전체 상품', value: products.length, icon: Package },
          { label: '실물 상품', value: products.filter(p => p.type === 'physical').length, icon: Truck },
          { label: '디지털 리포트', value: products.filter(p => p.type?.includes('report')).length, icon: AlignLeft },
          { label: '비활성 상품', value: products.filter(p => !p.is_active).length, icon: EyeOff },
        ].map((stat, i) => (
          <div key={i} className="gungjung-glass p-6 border-white/5 flex items-center justify-between">
            <div>
              <p className="text-xs text-white/40 uppercase tracking-widest mb-1">{stat.label}</p>
              <p className="text-2xl font-bold text-accent-gold">{stat.value}</p>
            </div>
            <stat.icon className="w-8 h-8 text-white/10" />
          </div>
        ))}
      </div>

      {/* Product List Table-like Grid */}
      <div className="gungjung-glass overflow-hidden border-white/5">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-white/5 text-[10px] uppercase tracking-[0.2em] text-white/40">
                <th className="px-6 py-4">상품 정보</th>
                <th className="px-6 py-4">유형/카테고리</th>
                <th className="px-6 py-4">가격</th>
                <th className="px-6 py-4">노출/재고</th>
                <th className="px-6 py-4 text-right">관리</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {loading ? (
                <tr><td colSpan={5} className="py-20 text-center text-accent-gold animate-pulse">로딩 중...</td></tr>
              ) : products.length === 0 ? (
                <tr><td colSpan={5} className="py-20 text-center text-white/20">등록된 상품이 없습니다.</td></tr>
              ) : (
                products.map((product) => (
                  <tr key={product.id} className="hover:bg-white/[0.02] transition-colors group">
                    <td className="px-6 py-6">
                      <div className="flex items-center gap-4">
                        <div className="relative w-12 h-16 rounded-lg overflow-hidden bg-white/5 border border-white/10 shrink-0">
                          {product.main_image ? (
                            <Image src={product.main_image} alt={product.name} fill className="object-cover" />
                          ) : (
                            <ImageIcon className="w-full h-full p-3 text-white/10" />
                          )}
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-[10px] font-mono text-accent-gold/60 uppercase">{product.slug}</span>
                            {product.featured && <span className="bg-accent-gold/20 text-accent-gold text-[8px] px-1.5 py-0.5 rounded border border-accent-gold/30 uppercase">Featured</span>}
                          </div>
                          <h3 className="text-base font-bold text-white leading-none">{product.name}</h3>
                          <p className="text-[11px] text-white/30 mt-1 line-clamp-1">{product.short_description}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-6">
                      <div className="space-y-1">
                        <div className="flex items-center gap-1.5">
                          {product.type === 'physical' ? <Truck className="w-3 h-3 text-blue-400" /> : <AlignLeft className="w-3 h-3 text-purple-400" />}
                          <span className="text-xs text-white/60">{product.type?.replace('_', ' ')}</span>
                        </div>
                        <p className="text-[10px] text-accent-gold/40 font-bold">{product.category}</p>
                      </div>
                    </td>
                    <td className="px-6 py-6">
                      <p className="text-base font-bold text-white">₩{product.price?.toLocaleString()}</p>
                    </td>
                    <td className="px-6 py-6">
                      <div className="flex items-center gap-4">
                        <div className="flex flex-col items-center gap-1">
                          <span className="text-[8px] text-white/30">활성</span>
                          {product.is_active ? <Eye className="w-4 h-4 text-green-400" /> : <EyeOff className="w-4 h-4 text-red-400" />}
                        </div>
                        <div className="flex flex-col items-center gap-1">
                          <span className="text-[8px] text-white/30">재고</span>
                          {product.in_stock ? <CheckCircle2 className="w-4 h-4 text-accent-gold" /> : <XCircle className="w-4 h-4 text-white/10" />}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-6 text-right">
                      <div className="flex justify-end gap-2">
                        <button onClick={() => openEditForm(product)} className="p-2 rounded-lg bg-white/5 border border-white/10 hover:border-accent-gold/50 text-white/40 hover:text-accent-gold transition-all">
                          <Pencil className="w-4 h-4" />
                        </button>
                        <button onClick={() => handleDelete(product.id, product.name)} className="p-2 rounded-lg bg-white/5 border border-white/10 hover:border-red-500/50 text-white/40 hover:text-red-500 transition-all">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* [모달] 상품 등록/수정 폼 */}
      {isFormOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl">
          <div className="w-full max-w-4xl rounded-[40px] border border-white/10 bg-[#0a0514] shadow-2xl relative max-h-[90vh] flex flex-col">
            
            {/* Modal Header */}
            <div className="p-8 border-b border-white/5 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold font-elegant flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-accent-gold/10">
                    {editingId ? <Pencil className="w-6 h-6 text-accent-gold" /> : <Plus className="w-6 h-6 text-accent-gold" />}
                  </div>
                  {editingId ? "상품 정보 수정" : "새로운 상품 등록"}
                </h2>
                <p className="text-white/40 text-sm mt-1">{formData.name || '새 상품 정보를 입력하세요.'}</p>
              </div>
              <button onClick={closeForm} className="p-2 hover:bg-white/5 rounded-full text-white/40 transition-colors">
                <XCircle className="w-8 h-8" />
              </button>
            </div>

            {/* Modal Body - Scrolled Form */}
            <div className="flex-1 overflow-y-auto p-8 space-y-12 custom-scrollbar">
              <form id="product-form" onSubmit={handleSubmit} className="space-y-12">
                
                {/* [기본 정보] */}
                <div className="space-y-6">
                  <div className="flex items-center gap-2 text-accent-gold border-l-2 border-accent-gold pl-4">
                    <Info className="w-5 h-5" />
                    <span className="font-bold tracking-widest text-sm">기본 정보</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <label className="text-[11px] text-white/40 uppercase font-bold tracking-tighter">상품명 (Title) *</label>
                      <input type="text" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-accent-gold/50 outline-none" placeholder="예: 미스하이랜더 플러스" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[11px] text-white/40 uppercase font-bold tracking-tighter">슬러그 (Slug) *</label>
                      <input type="text" required value={formData.slug} onChange={e => setFormData({...formData, slug: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-accent-gold/50 outline-none" placeholder="예: miss-highlander" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[11px] text-white/40 uppercase font-bold tracking-tighter">상품 ID (product_id)</label>
                      <input type="text" value={formData.product_id} onChange={e => setFormData({...formData, product_id: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-accent-gold/50 outline-none" placeholder={formData.slug || "미입력 시 슬러그와 동일"} />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[11px] text-white/40 uppercase font-bold tracking-tighter">상품 유형 (Type) *</label>
                      <select value={formData.type} onChange={e => setFormData({...formData, type: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-accent-gold/50 outline-none appearance-none">
                        <option value="digital_ebook">Digital E-book (전자책)</option>
                        <option value="digital_report">Digital Report (리포트)</option>
                        <option value="physical">Physical (실물 상품)</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[11px] text-white/40 uppercase font-bold tracking-tighter">카테고리 (Category) *</label>
                      <select value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-accent-gold/50 outline-none appearance-none">
                        <option value="PRIVATE READING">PRIVATE READING</option>
                        <option value="SECRET METHOD">SECRET METHOD</option>
                        <option value="ENERGY CARE">ENERGY CARE</option>
                        <option value="PRIVATE OBJECT">PRIVATE OBJECT</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[11px] text-white/40 uppercase font-bold tracking-tighter">가격 (Price) *</label>
                      <input type="number" required value={formData.price} onChange={e => setFormData({...formData, price: parseInt(e.target.value) || 0})}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-accent-gold/50 outline-none text-accent-gold font-bold" />
                    </div>
                  </div>
                </div>

                {/* [설명 정보] */}
                <div className="space-y-6">
                  <div className="flex items-center gap-2 text-accent-gold border-l-2 border-accent-gold pl-4">
                    <AlignLeft className="w-5 h-5" />
                    <span className="font-bold tracking-widest text-sm">설명 정보</span>
                  </div>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-[11px] text-white/40 uppercase font-bold tracking-tighter">짧은 설명 (Short Description)</label>
                      <input type="text" value={formData.short_description} onChange={e => setFormData({...formData, short_description: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-accent-gold/50 outline-none" placeholder="상품 카드에 노출되는 한 줄 설명" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[11px] text-white/40 uppercase font-bold tracking-tighter">상세 설명 (Detailed Description)</label>
                      <textarea rows={5} value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:border-accent-gold/50 outline-none resize-none" placeholder="상세페이지에 노출될 내용을 입력하세요." />
                    </div>
                  </div>
                </div>

                {/* [이미지 관리] */}
                <div className="space-y-6">
                  <div className="flex items-center gap-2 text-accent-gold border-l-2 border-accent-gold pl-4">
                    <ImageIcon className="w-5 h-5" />
                    <span className="font-bold tracking-widest text-sm">이미지 관리</span>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {/* Main Image */}
                    <div className="space-y-4">
                      <label className="text-[11px] text-white/40 uppercase font-bold tracking-tighter block">대표 이미지 (Main Image)</label>
                      <div className="relative aspect-[3/4] max-w-[240px] rounded-2xl overflow-hidden border-2 border-dashed border-white/10 bg-white/5 flex items-center justify-center group/main">
                        {formData.main_image ? (
                          <>
                            <Image src={formData.main_image} alt="Main" fill className="object-cover" />
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/main:opacity-100 transition-opacity flex items-center justify-center p-4">
                              <label htmlFor="main-upload" className="cursor-pointer bg-white/20 px-4 py-2 rounded-lg text-xs font-bold backdrop-blur-md">이미지 변경</label>
                            </div>
                          </>
                        ) : (
                          <div className="text-center p-4">
                            <Upload className="w-8 h-8 text-white/20 mx-auto mb-2" />
                            <p className="text-[10px] text-white/30">대표 이미지를 업로드하세요</p>
                          </div>
                        )}
                        {isUploading && <div className="absolute inset-0 bg-black/60 flex items-center justify-center"><Loader2 className="w-6 h-6 text-accent-gold animate-spin" /></div>}
                        <input type="file" id="main-upload" className="hidden" accept="image/*" onChange={e => handleFileUpload(e, 'main')} />
                      </div>
                    </div>

                    {/* Gallery Images */}
                    <div className="space-y-4">
                      <label className="text-[11px] text-white/40 uppercase font-bold tracking-tighter block">추가 갤러리 이미지 (Gallery)</label>
                      <div className="grid grid-cols-3 gap-3 mb-4">
                        {formData.gallery_images.map((url, idx) => (
                          <div key={idx} className="relative aspect-square rounded-lg overflow-hidden group/gal">
                            <Image src={url} alt={`Gallery ${idx}`} fill className="object-cover" />
                            <button type="button" onClick={() => removeGalleryImage(idx)}
                              className="absolute top-1 right-1 w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center opacity-0 group-hover/gal:opacity-100 transition-opacity">
                              <Trash2 className="w-3 h-3" />
                            </button>
                          </div>
                        ))}
                        <label className="aspect-square rounded-lg border border-dashed border-white/20 bg-white/5 flex flex-col items-center justify-center cursor-pointer hover:bg-white/10 transition-all">
                          <Plus className="w-5 h-5 text-white/30" />
                          <span className="text-[8px] text-white/20 mt-1 uppercase">Add Image</span>
                          <input type="file" multiple className="hidden" accept="image/*" onChange={e => handleFileUpload(e, 'gallery')} />
                        </label>
                      </div>
                      {isGalleryUploading && <p className="text-[10px] text-accent-gold animate-pulse">추가 이미지 업로드 중...</p>}
                    </div>
                  </div>
                </div>

                {/* [노출 및 배송 설정] */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-10 border-t border-white/5">
                  {/* 노출 설정 */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-2 text-accent-gold border-l-2 border-accent-gold pl-4">
                      <Settings className="w-5 h-5" />
                      <span className="font-bold tracking-widest text-sm">노출 설정</span>
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                      {[
                        { key: 'is_active', label: '상품 판매 활성화 (isActive)', desc: '체크 해제 시 고객에게 노출되지 않습니다.' },
                        { key: 'featured', label: '추천 상품 설정 (Featured)', desc: '메인 페이지의 추천 영역에 노출됩니다.' },
                        { key: 'in_stock', label: '재고 있음 (In Stock)', desc: '품절 여부를 관리합니다.' },
                      ].map((toggle) => (
                        <div key={toggle.key} className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                          <div className="space-y-0.5">
                            <p className="text-sm font-bold">{toggle.label}</p>
                            <p className="text-[10px] text-white/30">{toggle.desc}</p>
                          </div>
                          <input type="checkbox" className="w-6 h-6 rounded-lg accent-accent-gold" checked={(formData as any)[toggle.key]} onChange={e => setFormData({...formData, [toggle.key]: e.target.checked})} />
                        </div>
                      ))}
                      <div className="space-y-2 p-4">
                        <label className="text-[11px] text-white/40 uppercase font-bold tracking-tighter">정렬 순서 (Sort Order)</label>
                        <input type="number" value={formData.sort_order} onChange={e => setFormData({...formData, sort_order: parseInt(e.target.value) || 0})}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2 focus:border-accent-gold/50 outline-none" />
                      </div>
                    </div>
                  </div>

                  {/* 배송 및 경로 설정 */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-2 text-accent-gold border-l-2 border-accent-gold pl-4">
                      <Truck className="w-5 h-5" />
                      <span className="font-bold tracking-widest text-sm">배송 및 자동 경로</span>
                    </div>
                    <div className="space-y-6">
                      <div className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                        <div className="space-y-0.5">
                          <p className="text-sm font-bold">배송 필요 (Requires Shipping)</p>
                          <p className="text-[10px] text-white/30">실물 상품일 경우 반드시 체크하세요.</p>
                        </div>
                        <input type="checkbox" className="w-6 h-6 rounded-lg accent-blue-400" checked={formData.requires_shipping} onChange={e => setFormData({...formData, requires_shipping: e.target.checked})} />
                      </div>
                      
                      <div className="space-y-4 p-4 rounded-2xl bg-accent-gold/5 border border-accent-gold/10">
                        <div className="space-y-2">
                          <label className="text-[10px] text-accent-gold/60 uppercase font-bold tracking-tighter">예상 상세페이지 경로</label>
                          <div className="bg-black/20 p-2 rounded-lg text-[11px] font-mono text-white/40 truncate">{formData.detail_path || "슬러그를 입력하세요"}</div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] text-accent-gold/60 uppercase font-bold tracking-tighter">예상 결제 연결 경로</label>
                          <div className="bg-black/20 p-2 rounded-lg text-[11px] font-mono text-white/40 truncate">{formData.checkout_path || "슬러그를 입력하세요"}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </form>
            </div>

            {/* Modal Footer */}
            <div className="p-8 border-t border-white/5 bg-white/[0.02] flex gap-4">
              <button type="button" onClick={closeForm}
                className="flex-1 py-4 rounded-2xl border border-white/10 bg-white/5 font-bold hover:bg-white/10 transition-all">
                취소
              </button>
              <button type="submit" form="product-form" disabled={isSubmitting}
                className="flex-[2] py-4 rounded-2xl bg-gradient-to-r from-accent-gold to-[#BA8D7E] text-[#2D0A1E] font-bold hover:scale-[1.02] transition-all disabled:opacity-50">
                {isSubmitting ? "저장 중..." : (editingId ? "상품 정보 수정 완료" : "신규 상품 등록하기")}
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: rgba(255, 255, 255, 0.02); }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(230, 190, 138, 0.2); border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(230, 190, 138, 0.4); }
      `}</style>
    </main>
  );
}
