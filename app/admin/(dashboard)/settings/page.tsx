'use client';

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { 
  Settings, 
  Globe, 
  CreditCard, 
  MessageSquare, 
  Layout, 
  Save, 
  Mail, 
  Phone, 
  MessageCircle,
  Building2,
  Loader2,
  AlertCircle
} from "lucide-react";

export default function AdminSettingsPage() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [settings, setSettings] = useState<any>(null);

  // 설정 불러오기
  const fetchSettings = async () => {
    try {
      setLoading(true);
      setError(null);
      const { data, error } = await supabase
        .from('settings')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(1)
        .single();

      if (error) throw error;
      setSettings(data);
    } catch (err: any) {
      console.error(err.message);
      setError("설정 데이터를 불러오는 중 오류가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSettings();
  }, []);

  // 저장하기
  const handleSave = async () => {
    if (!settings) return;
    
    try {
      setSaving(true);
      const { error } = await supabase
        .from('settings')
        .update({
          ...settings,
          updated_at: new Date().toISOString()
        })
        .eq('id', settings.id);

      if (error) throw error;
      alert("설정이 성공적으로 저장되었습니다. ✨");
    } catch (err: any) {
      alert("저장 실패: " + err.message);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="p-20 text-center">
        <Loader2 className="w-10 h-10 text-yellow-200 animate-spin mx-auto mb-4" />
        <p className="text-yellow-200/60">설정을 불러오는 중입니다...</p>
      </div>
    );
  }

  if (error || !settings) {
    return (
      <div className="p-20 text-center">
        <AlertCircle className="w-10 h-10 text-red-400 mx-auto mb-4" />
        <p className="text-red-400">{error || "설정 데이터가 없습니다. SQL을 먼저 실행해 주세요."}</p>
      </div>
    );
  }

  return (
    <main className="p-6 md:p-10 space-y-8 max-w-5xl">
      {/* Header */}
      <section className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-semibold flex items-center gap-3 text-white">
            <Settings className="text-yellow-200" /> 설정 관리
          </h1>
          <p className="text-white/70 mt-2">
            사이트 전체에 적용되는 운영 정보와 문구를 관리합니다.
          </p>
        </div>
        <button 
          onClick={handleSave}
          disabled={saving}
          className="rounded-2xl bg-yellow-200 text-purple-900 px-8 py-4 font-bold hover:bg-yellow-300 transition-all shadow-lg flex items-center gap-2 disabled:opacity-50"
        >
          {saving ? <Loader2 className="w-5 h-5 animate-spin" /> : <Save className="w-5 h-5" />}
          {saving ? "저장 중..." : "설정 저장하기"}
        </button>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-20">
        
        {/* 1. 기본 정보 */}
        <section className="rounded-3xl border border-yellow-200/10 bg-white/5 backdrop-blur-xl p-8 space-y-6">
          <h2 className="text-xl font-semibold flex items-center gap-2 text-yellow-100">
            <Globe className="w-5 h-5 text-yellow-200" /> 기본 정보
          </h2>
          <div className="space-y-4">
            <div className="space-y-1">
              <label className="text-xs text-white/40 uppercase">사이트명</label>
              <input 
                type="text" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-yellow-200/50" 
                value={settings.site_name}
                onChange={(e) => setSettings({...settings, site_name: e.target.value})}
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs text-white/40 uppercase flex items-center gap-1"><Mail className="w-3 h-3" /> 관리자 이메일</label>
                <input 
                  type="email" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-yellow-200/50" 
                  value={settings.admin_email}
                  onChange={(e) => setSettings({...settings, admin_email: e.target.value})}
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs text-white/40 uppercase flex items-center gap-1"><Mail className="w-3 h-3" /> 고객센터 이메일</label>
                <input 
                  type="email" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-yellow-200/50" 
                  value={settings.support_email}
                  onChange={(e) => setSettings({...settings, support_email: e.target.value})}
                />
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-xs text-white/40 uppercase flex items-center gap-1"><MessageCircle className="w-3 h-3" /> 카카오채널 링크</label>
              <input 
                type="text" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-yellow-200/50" 
                value={settings.kakao_channel_url}
                onChange={(e) => setSettings({...settings, kakao_channel_url: e.target.value})}
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs text-white/40 uppercase flex items-center gap-1"><Phone className="w-3 h-3" /> 대표 연락처</label>
              <input 
                type="text" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-yellow-200/50" 
                value={settings.contact_phone}
                onChange={(e) => setSettings({...settings, contact_phone: e.target.value})}
              />
            </div>
          </div>
        </section>

        {/* 2. 결제/입금 정보 */}
        <section className="rounded-3xl border border-yellow-200/10 bg-white/5 backdrop-blur-xl p-8 space-y-6">
          <h2 className="text-xl font-semibold flex items-center gap-2 text-yellow-100">
            <CreditCard className="w-5 h-5 text-yellow-200" /> 결제/입금 정보
          </h2>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs text-white/40 uppercase flex items-center gap-1"><Building2 className="w-3 h-3" /> 은행명</label>
                <input 
                  type="text" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-yellow-200/50" 
                  value={settings.bank_name}
                  onChange={(e) => setSettings({...settings, bank_name: e.target.value})}
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs text-white/40 uppercase">예금주</label>
                <input 
                  type="text" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-yellow-200/50" 
                  value={settings.account_holder}
                  onChange={(e) => setSettings({...settings, account_holder: e.target.value})}
                />
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-xs text-white/40 uppercase">계좌번호</label>
              <input 
                type="text" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-yellow-200/50" 
                value={settings.bank_account}
                onChange={(e) => setSettings({...settings, bank_account: e.target.value})}
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs text-white/40 uppercase">입금 안내 문구</label>
              <textarea 
                rows={3} 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-yellow-200/50 resize-none" 
                value={settings.payment_notice}
                onChange={(e) => setSettings({...settings, payment_notice: e.target.value})}
              />
            </div>
          </div>
        </section>

        {/* 3. 리포트 발송 기본 문구 */}
        <section className="rounded-3xl border border-yellow-200/10 bg-white/5 backdrop-blur-xl p-8 space-y-6 md:col-span-2">
          <h2 className="text-xl font-semibold flex items-center gap-2 text-yellow-100">
            <MessageSquare className="w-5 h-5 text-yellow-200" /> 리포트 발송 기본 문구
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-1">
              <label className="text-xs text-white/40 uppercase">리포트 발송 안내</label>
              <textarea 
                rows={4} 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-yellow-200/50 resize-none" 
                value={settings.report_delivery_message}
                onChange={(e) => setSettings({...settings, report_delivery_message: e.target.value})}
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs text-white/40 uppercase">후기 요청 메시지</label>
              <textarea 
                rows={4} 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-yellow-200/50 resize-none" 
                value={settings.review_request_message}
                onChange={(e) => setSettings({...settings, review_request_message: e.target.value})}
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs text-white/40 uppercase">상담 안내 메시지</label>
              <textarea 
                rows={4} 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-yellow-200/50 resize-none" 
                value={settings.consultation_message}
                onChange={(e) => setSettings({...settings, consultation_message: e.target.value})}
              />
            </div>
          </div>
        </section>

        {/* 4. 사이트 노출 설정 */}
        <section className="rounded-3xl border border-yellow-200/10 bg-white/5 backdrop-blur-xl p-8 space-y-6 md:col-span-2">
          <h2 className="text-xl font-semibold flex items-center gap-2 text-yellow-100">
            <Layout className="w-5 h-5 text-yellow-200" /> 사이트 노출 설정
          </h2>
          <div className="flex flex-wrap gap-12">
            <div className="space-y-1 min-w-[150px]">
              <label className="text-xs text-white/40 uppercase">메인 후기 노출 개수</label>
              <input 
                type="number" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-yellow-200/50" 
                value={settings.main_review_count}
                onChange={(e) => setSettings({...settings, main_review_count: parseInt(e.target.value)})}
              />
            </div>
            <div className="space-y-1 min-w-[150px]">
              <label className="text-xs text-white/40 uppercase">메인 추천 상품 개수</label>
              <input 
                type="number" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-yellow-200/50" 
                value={settings.main_featured_product_count}
                onChange={(e) => setSettings({...settings, main_featured_product_count: parseInt(e.target.value)})}
              />
            </div>
            <div className="flex items-center gap-4 pt-4">
              <span className="text-sm text-white/80">판매 일시중지</span>
              <button 
                onClick={() => setSettings({...settings, is_sales_paused: !settings.is_sales_paused})}
                className={`w-14 h-7 rounded-full transition-all relative ${settings.is_sales_paused ? 'bg-red-500' : 'bg-white/10'}`}
              >
                <div className={`absolute top-1 w-5 h-5 rounded-full bg-white transition-all ${settings.is_sales_paused ? 'left-8' : 'left-1'}`} />
              </button>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
