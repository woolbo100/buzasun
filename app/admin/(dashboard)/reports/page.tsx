'use client';

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { 
  FileText, 
  Search, 
  Clock, 
  Edit3, 
  Eye, 
  CheckCircle2,
  Save,
  Loader2,
  AlertCircle
} from "lucide-react";

export default function AdminReportsPage() {
  const [reports, setReports] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState({
    report_status: "",
    delivery_status: "",
    admin_memo: ""
  });

  // 데이터 불러오기
  const fetchReports = async () => {
    try {
      setLoading(true);
      setError(null);
      const { data, error } = await supabase
        .from('reports')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setReports(data || []);
    } catch (err: any) {
      console.error(err.message);
      setError("데이터를 불러오는 중 오류가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReports();
  }, []);

  // 수정 모드 진입
  const startEditing = (report: any) => {
    setEditingId(report.id);
    setEditForm({
      report_status: report.report_status,
      delivery_status: report.delivery_status,
      admin_memo: report.admin_memo || ""
    });
  };

  // 수정 내용 저장
  const handleUpdate = async (id: string) => {
    try {
      const { error } = await supabase
        .from('reports')
        .update({
          report_status: editForm.report_status,
          delivery_status: editForm.delivery_status,
          admin_memo: editForm.admin_memo,
          updated_at: new Date().toISOString(),
          // '완료'와 '발송완료'가 되면 발송일 자동 기록
          sent_at: editForm.delivery_status === '발송완료' ? new Date().toISOString() : null
        })
        .eq('id', id);

      if (error) throw error;

      alert("리포트 정보가 수정되었습니다.");
      setEditingId(null);
      fetchReports();
    } catch (err: any) {
      alert("수정 실패: " + err.message);
    }
  };

  const getReportStatusBadge = (status: string) => {
    const base = "text-[11px] px-2.5 py-1 rounded-full border inline-block ";
    switch (status) {
      case '완료': return base + "border-green-500/30 bg-green-500/10 text-green-400";
      case '검토중': return base + "border-blue-500/30 bg-blue-500/10 text-blue-400";
      case '작성중': return base + "border-purple-500/30 bg-purple-500/10 text-purple-400";
      case '작성대기': return base + "border-yellow-500/30 bg-yellow-500/10 text-yellow-400";
      case '접수완료': return base + "border-white/20 bg-white/5 text-white/60";
      default: return base + "border-white/10 bg-white/5 text-white/40";
    }
  };

  const getSendStatusBadge = (status: string) => {
    const base = "text-[11px] px-2.5 py-1 rounded-full border inline-block ";
    switch (status) {
      case '발송완료': return base + "border-green-500/30 bg-green-500/10 text-green-400";
      case '재발송': return base + "border-red-500/30 bg-red-500/10 text-red-400";
      case '미발송': return base + "border-white/20 bg-white/5 text-white/60";
      default: return base + "border-white/10 bg-white/5 text-white/40";
    }
  };

  return (
    <main className="p-6 md:p-10 space-y-8">
      {/* Header */}
      <section>
        <h1 className="text-3xl md:text-4xl font-semibold flex items-center gap-3 text-white">
          <FileText className="text-yellow-200" /> 리포트 관리
        </h1>
        <p className="text-white/70 mt-2">
          실시간 Supabase 연동을 통해 리포트 상태를 관리합니다.
        </p>
      </section>

      {/* Reports List */}
      <section className="rounded-3xl border border-yellow-200/10 bg-white/5 backdrop-blur-xl overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 bg-white/5 text-[13px] text-white/50">
                <th className="p-5 font-medium">고객/상품</th>
                <th className="p-5 font-medium text-center">리포트 상태</th>
                <th className="p-5 font-medium text-center">발송 상태</th>
                <th className="p-5 font-medium">관리자 메모</th>
                <th className="p-5 font-medium text-right">관리</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {loading ? (
                <tr>
                  <td colSpan={5} className="p-20 text-center">
                    <Loader2 className="w-8 h-8 text-yellow-200 animate-spin mx-auto mb-4" />
                    <p className="text-yellow-200/60">리포트를 불러오는 중...</p>
                  </td>
                </tr>
              ) : error ? (
                <tr>
                  <td colSpan={5} className="p-20 text-center">
                    <AlertCircle className="w-8 h-8 text-red-400 mx-auto mb-4" />
                    <p className="text-red-400">{error}</p>
                  </td>
                </tr>
              ) : reports.length === 0 ? (
                <tr>
                  <td colSpan={5} className="p-20 text-center">
                    <p className="text-white/40">등록된 리포트가 없습니다.</p>
                  </td>
                </tr>
              ) : (
                reports.map((report) => (
                  <tr key={report.id} className="hover:bg-white/5 transition-colors group">
                    <td className="p-5">
                      <p className="font-medium text-sm text-white">{report.customer_name}</p>
                      <p className="text-[11px] text-white/30 truncate max-w-[150px]">{report.product_name}</p>
                      <p className="text-[10px] text-white/20">{new Date(report.created_at).toLocaleDateString()}</p>
                    </td>
                    
                    <td className="p-5 text-center">
                      {editingId === report.id ? (
                        <select 
                          className="bg-[#2A1B3D] border border-white/20 rounded-lg px-2 py-1 text-xs text-white focus:outline-none focus:border-yellow-200/50"
                          value={editForm.report_status}
                          onChange={(e) => setEditForm({...editForm, report_status: e.target.value})}
                        >
                          {['접수완료', '작성대기', '작성중', '검토중', '완료'].map(s => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                      ) : (
                        <span className={getReportStatusBadge(report.report_status)}>
                          {report.report_status}
                        </span>
                      )}
                    </td>

                    <td className="p-5 text-center">
                      {editingId === report.id ? (
                        <select 
                          className="bg-[#2A1B3D] border border-white/20 rounded-lg px-2 py-1 text-xs text-white focus:outline-none focus:border-yellow-200/50"
                          value={editForm.delivery_status}
                          onChange={(e) => setEditForm({...editForm, delivery_status: e.target.value})}
                        >
                          {['미발송', '발송완료', '재발송'].map(s => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                      ) : (
                        <span className={getSendStatusBadge(report.delivery_status)}>
                          {report.delivery_status}
                        </span>
                      )}
                    </td>

                    <td className="p-5 text-sm text-white/60">
                      {editingId === report.id ? (
                        <input 
                          type="text"
                          className="w-full bg-white/5 border border-white/20 rounded-lg px-3 py-1 text-xs focus:outline-none focus:border-yellow-200/50"
                          value={editForm.admin_memo}
                          onChange={(e) => setEditForm({...editForm, admin_memo: e.target.value})}
                        />
                      ) : (
                        <span className="truncate block max-w-[200px]" title={report.admin_memo}>
                          {report.admin_memo || "-"}
                        </span>
                      )}
                    </td>

                    <td className="p-5 text-right">
                      {editingId === report.id ? (
                        <div className="flex justify-end gap-2">
                          <button 
                            onClick={() => handleUpdate(report.id)}
                            className="p-2 rounded-lg bg-yellow-200/20 text-yellow-200 hover:bg-yellow-200 transition-all hover:text-purple-900"
                            title="저장"
                          >
                            <Save className="w-4 h-4" />
                          </button>
                          <button 
                            onClick={() => setEditingId(null)}
                            className="p-2 rounded-lg bg-white/5 text-white/40 hover:bg-white/10"
                          >
                            취소
                          </button>
                        </div>
                      ) : (
                        <button 
                          onClick={() => startEditing(report)}
                          className="px-4 py-2 rounded-xl bg-white/5 hover:bg-yellow-200/20 text-white/40 hover:text-yellow-200 transition-all text-xs"
                        >
                          상세 관리
                        </button>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
