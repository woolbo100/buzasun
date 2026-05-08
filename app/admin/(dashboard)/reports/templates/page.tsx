'use client';

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { 
  FileText, 
  Plus, 
  Save, 
  Trash2, 
  Loader2, 
  ChevronLeft,
  Layout
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function ReportTemplatesPage() {
  const router = useRouter();
  const [templates, setTemplates] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const fetchTemplates = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('report_templates')
        .select('*')
        .order('sort_order', { ascending: true });

      if (error) throw error;
      setTemplates(data || []);
    } catch (err: any) {
      console.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTemplates();
  }, []);

  const addTemplate = () => {
    const newTemplate = {
      id: crypto.randomUUID(), // 임시 ID
      report_type: 'baekdohwa-report',
      section_key: 'new_section',
      section_title: '새 섹션',
      template_text: '',
      sort_order: templates.length,
      is_active: true,
      isNew: true
    };
    setTemplates([...templates, newTemplate]);
  };

  const handleSave = async (template: any) => {
    try {
      setSaving(true);
      const { isNew, ...saveData } = template;
      
      const { error } = await supabase
        .from('report_templates')
        .upsert(saveData);

      if (error) throw error;
      alert("템플릿이 저장되었습니다.");
      fetchTemplates();
    } catch (err: any) {
      alert("저장 실패: " + err.message);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("정말 삭제하시겠습니까?")) return;
    try {
      const { error } = await supabase
        .from('report_templates')
        .delete()
        .eq('id', id);

      if (error) throw error;
      fetchTemplates();
    } catch (err: any) {
      alert("삭제 실패: " + err.message);
    }
  };

  return (
    <main className="p-6 md:p-10 space-y-8 animate-in fade-in duration-500">
      <nav>
        <button 
          onClick={() => router.back()}
          className="flex items-center gap-2 text-white/40 hover:text-white transition-colors group"
        >
          <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          뒤로가기
        </button>
      </nav>

      <section className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-elegant font-bold text-white flex items-center gap-3">
            <Layout className="text-accent-gold" /> 리포트 템플릿 관리
          </h1>
          <p className="text-white/40 mt-2">
            리포트 작성 시 사용할 표준 문구와 섹션을 관리합니다.
          </p>
        </div>
        
        <button 
          onClick={addTemplate}
          className="px-6 py-3 bg-accent-gold text-[#1a0f2e] rounded-xl text-sm font-bold flex items-center gap-2 hover:brightness-110 transition-all shadow-lg shadow-accent-gold/20"
        >
          <Plus className="w-4 h-4" /> 템플릿 추가
        </button>
      </section>

      <div className="grid grid-cols-1 gap-6">
        {loading ? (
          <div className="py-20 text-center">
            <Loader2 className="w-8 h-8 text-accent-gold animate-spin mx-auto" />
          </div>
        ) : templates.length === 0 ? (
          <div className="gungjung-glass p-20 text-center text-white/20 border border-white/5">
            등록된 템플릿이 없습니다.
          </div>
        ) : (
          templates.map((t) => (
            <div key={t.id} className="gungjung-glass p-8 border border-white/5 shadow-xl space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label className="text-xs text-white/40 font-bold uppercase">섹션 제목</label>
                  <input 
                    type="text"
                    value={t.section_title}
                    onChange={(e) => setTemplates(templates.map(tmp => tmp.id === t.id ? {...tmp, section_title: e.target.value} : tmp))}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-gold transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs text-white/40 font-bold uppercase">섹션 키 (시스템용)</label>
                  <input 
                    type="text"
                    value={t.section_key}
                    onChange={(e) => setTemplates(templates.map(tmp => tmp.id === t.id ? {...tmp, section_key: e.target.value} : tmp))}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-gold transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs text-white/40 font-bold uppercase">리포트 종류</label>
                  <select 
                    value={t.report_type}
                    onChange={(e) => setTemplates(templates.map(tmp => tmp.id === t.id ? {...tmp, report_type: e.target.value} : tmp))}
                    className="w-full bg-[#2A1B3D] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-gold transition-all"
                  >
                    <option value="baekdohwa-report">백도화 리포트</option>
                    <option value="premium-compatibility-report">프리미엄 궁합 리포트</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs text-white/40 font-bold uppercase">템플릿 내용</label>
                <textarea 
                  rows={4}
                  value={t.template_text}
                  onChange={(e) => setTemplates(templates.map(tmp => tmp.id === t.id ? {...tmp, template_text: e.target.value} : tmp))}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-gold transition-all resize-none"
                  placeholder="리포트에 표시될 기본 문구를 입력하세요..."
                />
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <input 
                      type="checkbox" 
                      checked={t.is_active}
                      onChange={(e) => setTemplates(templates.map(tmp => tmp.id === t.id ? {...tmp, is_active: e.target.checked} : tmp))}
                      className="accent-accent-gold"
                    />
                    <span className="text-xs text-white/60">활성화</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-white/40 font-bold">순서:</span>
                    <input 
                      type="number" 
                      value={t.sort_order}
                      onChange={(e) => setTemplates(templates.map(tmp => tmp.id === t.id ? {...tmp, sort_order: parseInt(e.target.value)} : tmp))}
                      className="w-16 bg-white/5 border border-white/10 rounded-lg px-2 py-1 text-xs text-white text-center"
                    />
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <button 
                    onClick={() => handleDelete(t.id)}
                    className="p-3 text-red-400/40 hover:text-red-400 hover:bg-red-400/10 rounded-xl transition-all"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={() => handleSave(t)}
                    className="px-6 py-3 bg-white/5 text-white hover:bg-accent-gold hover:text-[#1a0f2e] rounded-xl text-sm font-bold transition-all flex items-center gap-2 border border-white/10 hover:border-accent-gold"
                  >
                    <Save className="w-4 h-4" /> 저장하기
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </main>
  );
}
