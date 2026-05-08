'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { 
  ClipboardList, 
  Search, 
  Clock, 
  Edit3, 
  CheckCircle2,
  Loader2,
  ChevronRight,
  User,
  Calendar,
  AlertCircle
} from "lucide-react";

export default function AdminReportsPage() {
  const [activeTab, setActiveTab] = useState('pending'); // pending, writing, sent
  const [reports, setReports] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const tabs = [
    { id: 'pending', label: '신규 신청', icon: Clock },
    { id: 'writing', label: '제작중', icon: Edit3 },
    { id: 'sent', label: '완료', icon: CheckCircle2 },
  ];

  // 리포트 데이터 불러오기
  const fetchReports = async () => {
    try {
      setLoading(true);
      
      let query = supabase
        .from('orders')
        .select('*')
        .eq('product_type', 'report') // 리포트 상품만 필터링
        .eq('report_status', activeTab) // 현재 탭 상태 필터링
        .order('created_at', { ascending: false });

      const { data, error } = await query;

      if (error) throw error;
      setReports(data || []);
    } catch (err: any) {
      console.error("데이터 로드 실패:", err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReports();
  }, [activeTab]);

  // 검색 필터링
  const filteredReports = reports.filter(r => 
    r.customer_name?.toLowerCase().includes(searchTerm.toLowerCase()) || 
    r.customer_email?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="p-6 md:p-10 space-y-8 animate-in fade-in duration-700">
      {/* 상단 헤더 */}
      <section className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-elegant font-bold text-white flex items-center gap-3">
            <ClipboardList className="text-accent-gold" /> 리포트 제작소
          </h1>
          <p className="text-white/40 mt-2 text-sm">
            고객님의 소중한 신청 정보를 바탕으로 특별한 리포트를 제작합니다.
          </p>
        </div>
        
        {/* 검색창 */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
          <input 
            type="text" 
            placeholder="고객명 또는 이메일 검색..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-11 pr-6 py-3 bg-white/5 border border-white/10 rounded-2xl text-sm text-white focus:outline-none focus:border-accent-gold transition-all w-full md:w-72"
          />
        </div>
      </section>

      {/* 상태 탭 메뉴 */}
      <div className="flex gap-2 p-1 bg-white/5 rounded-2xl w-fit">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                px-6 py-3 rounded-xl text-sm font-bold transition-all flex items-center gap-2
                ${isActive 
                  ? 'bg-accent-gold text-[#1a0f2e] shadow-lg' 
                  : 'text-white/40 hover:text-white/70'}
              `}
            >
              <Icon className="w-4 h-4" />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* 리스트 영역 */}
      <section className="grid grid-cols-1 gap-4">
        {loading ? (
          <div className="py-32 text-center gungjung-glass rounded-3xl border border-white/5">
            <Loader2 className="w-10 h-10 text-accent-gold animate-spin mx-auto mb-4" />
            <p className="text-white/40 text-sm">리포트 목록을 불러오는 중입니다...</p>
          </div>
        ) : filteredReports.length === 0 ? (
          <div className="py-32 text-center gungjung-glass rounded-3xl border border-white/5">
            <AlertCircle className="w-10 h-10 text-white/10 mx-auto mb-4" />
            <p className="text-white/20">조회된 리포트 신청 내역이 없습니다.</p>
          </div>
        ) : (
          filteredReports.map((report) => (
            <Link 
              key={report.id} 
              href={`/admin/reports/${report.id}`}
              className="group"
            >
              <div className="gungjung-glass p-6 md:p-8 border border-white/5 rounded-[2rem] hover:border-accent-gold/30 transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl hover:shadow-accent-gold/5">
                <div className="flex items-center gap-6">
                  {/* 프로필 아이콘 또는 첫글자 */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-gold/20 to-purple-500/20 flex items-center justify-center border border-white/10 group-hover:border-accent-gold/50 transition-all">
                    <User className="w-6 h-6 text-accent-gold" />
                  </div>
                  
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-bold text-white">{report.customer_name}</h3>
                      <span className="text-[10px] bg-white/10 text-white/40 px-2 py-0.5 rounded-md font-mono">
                        #{report.id.split('-')[0].toUpperCase()}
                      </span>
                    </div>
                    <p className="text-sm text-accent-gold/60 font-medium">{report.product_name}</p>
                    <div className="flex items-center gap-4 text-[11px] text-white/30 pt-1">
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {new Date(report.created_at).toLocaleDateString()}</span>
                      <span>{report.customer_email}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-8 w-full md:w-auto border-t md:border-t-0 border-white/5 pt-4 md:pt-0">
                  {/* 입력 데이터 요약 */}
                  <div className="flex gap-2">
                    <div className="bg-white/5 px-4 py-2 rounded-xl border border-white/5 text-center">
                      <p className="text-[9px] text-white/20 font-bold uppercase mb-1">성별</p>
                      <p className="text-xs font-bold text-white/60">{report.gender === 'female' ? '여성' : '남성'}</p>
                    </div>
                    <div className="bg-white/5 px-4 py-2 rounded-xl border border-white/5 text-center">
                      <p className="text-[9px] text-white/20 font-bold uppercase mb-1">생년월일</p>
                      <p className="text-xs font-bold text-white/60">{report.birth_date || '-'}</p>
                    </div>
                  </div>

                  <div className="ml-auto flex items-center gap-4">
                    <div className="text-right hidden md:block">
                      <p className="text-[10px] text-white/20 font-bold uppercase">현재 상태</p>
                      <p className="text-xs font-bold text-accent-gold">
                        {activeTab === 'pending' ? '제작 대기' : activeTab === 'writing' ? '제작 중' : '발송 완료'}
                      </p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-accent-gold group-hover:text-[#1a0f2e] transition-all">
                      <ChevronRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))
        )}
      </section>
    </main>
  );
}
