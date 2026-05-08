'use client';

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { calculateSaju } from "@fullstackfamily/manseryeok";
import { 
  ChevronLeft, 
  User, 
  Calendar, 
  Clock, 
  Sparkles, 
  FileUp, 
  Save, 
  CheckCircle2,
  AlertCircle,
  Loader2,
  ArrowRight,
  Info
} from "lucide-react";

export default function ReportDetailPage() {
  const { orderId } = useParams();
  const router = useRouter();
  const [order, setOrder] = useState<any>(null);
  const [reportData, setReportData] = useState<any>(null);
  const [manseryeok, setManseryeok] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);

  // 데이터 불러오기
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        // 1. 주문 정보 조회
        const { data: orderData, error: orderError } = await supabase
          .from('orders')
          .select('*')
          .eq('id', orderId)
          .single();

        if (orderError) throw orderError;
        setOrder(orderData);

        // 2. 이미 저장된 리포트 데이터가 있는지 확인
        const { data: savedData } = await supabase
          .from('report_data')
          .select('*')
          .eq('order_id', orderId)
          .single();

        if (savedData) {
          setReportData(savedData);
          setManseryeok(savedData.raw_result);
        } else if (orderData.birth_date) {
          // 저장된 데이터가 없으면 즉시 계산 시도
          calculateManseryeok(orderData);
        }
      } catch (err: any) {
        console.error(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [orderId]);

  // 만세력 계산 로직
  const calculateManseryeok = (data: any) => {
    try {
      const year = Number(data.birth_date.split("-")[0]);
      const month = Number(data.birth_date.split("-")[1]);
      const day = Number(data.birth_date.split("-")[2]);
      const hour = Number(data.birth_time?.split(":")[0] || 12);
      
      const result = calculateSaju(year, month, day, hour, 0);
      
      const newSaju = {
        nyeonju: { gan: { hangeul: result.yearPillar[0] }, ji: { hangeul: result.yearPillar[1] } },
        wolju: { gan: { hangeul: result.monthPillar[0] }, ji: { hangeul: result.monthPillar[1] } },
        ilju: { gan: { hangeul: result.dayPillar[0] }, ji: { hangeul: result.dayPillar[1] } },
        siju: result.hourPillar ? { gan: { hangeul: result.hourPillar[0] }, ji: { hangeul: result.hourPillar[1] } } : { gan: { hangeul: "?" }, ji: { hangeul: "?" } },
      };

      setManseryeok(newSaju);

    } catch (err) {
      console.error("만세력 계산 실패:", err);
    }
  };

  // 기초 해석 요약 생성 (Rule-based)
  const getInterpretationSummary = (m: any) => {
    if (!m) return null;
    const dayMaster = m.ilju.gan.hangeul;
    const dayJi = m.ilju.ji.hangeul;
    
    const summaries: any = {
      '甲': '당당하고 진취적인 리더십, 새로운 시작을 두려워하지 않는 성향',
      '乙': '부드럽고 유연한 적응력, 외유내강의 기질과 끈기',
      '丙': '열정적이고 화려한 자기표현, 솔직하고 명랑한 에너지',
      '丁': '섬세하고 따뜻한 배려심, 내면의 강한 집중력과 열기',
      '戊': '믿음직하고 듬직한 중재자, 포용력 있는 대범한 성격',
      '己': '꼼꼼하고 실리적인 관리자, 타인을 챙기는 모성애적 기질',
      '庚': '결단력 있고 강직한 정의감, 원칙을 중요시하는 카리스마',
      '辛': '예민하고 섬세한 완벽주의, 세련된 감각과 고고한 자존심',
      '壬': '지혜롭고 유연한 사고방식, 거침없는 추진력과 넓은 포용력',
      '癸': '차분하고 지적인 탐구심, 생명력을 부여하는 유연한 지혜'
    };

    return {
      core: summaries[dayMaster] || "데이터 분석 중",
      dayMaster: dayMaster,
      pillar: `${dayMaster}${dayJi}`
    };
  };

  const interpretation = getInterpretationSummary(manseryeok);

  // 결과 저장
  const handleSaveReportData = async () => {
    if (!manseryeok) return;
    
    try {
      setSaving(true);
      const payload = {
        order_id: orderId,
        user_id: order.user_id,
        product_id: order.product_id,
        birth_date: order.birth_date,
        birth_time: order.birth_time,
        gender: order.gender,
        raw_result: manseryeok,
        year_pillar: `${manseryeok.nyeonju.gan.hangeul}${manseryeok.nyeonju.ji.hangeul}`,
        month_pillar: `${manseryeok.wolju.gan.hangeul}${manseryeok.wolju.ji.hangeul}`,
        day_pillar: `${manseryeok.ilju.gan.hangeul}${manseryeok.ilju.ji.hangeul}`,
        hour_pillar: `${manseryeok.siju.gan.hangeul}${manseryeok.siju.ji.hangeul}`,
        day_master: manseryeok.ilju.gan.hangeul,
        summary: interpretation,
        updated_at: new Date().toISOString()
      };

      const { error } = await supabase
        .from('report_data')
        .upsert(payload, { onConflict: 'order_id' });

      if (error) throw error;
      
      // 주문 상태도 '작성중'으로 변경
      await supabase
        .from('orders')
        .update({ report_status: '작성중' })
        .eq('id', orderId);

      alert("데이터가 저장되었습니다.");
    } catch (err: any) {
      alert("저장 실패: " + err.message);
    } finally {
      setSaving(false);
    }
  };

  // PDF 업로드
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setUploading(true);
      const fileExt = file.name.split('.').pop();
      const fileName = `${orderId}.${fileExt}`;
      const filePath = `reports/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('report-files')
        .upload(filePath, file, { upsert: true });

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('report-files')
        .getPublicUrl(filePath);

      // 주문 정보 업데이트
      await supabase
        .from('orders')
        .update({ 
          report_url: publicUrl,
          report_status: '완료',
          order_status: 'completed'
        })
        .eq('id', orderId);

      alert("리포트가 성공적으로 업로드되었습니다.");
      router.refresh();
    } catch (err: any) {
      alert("업로드 실패: " + err.message);
    } finally {
      setUploading(false);
    }
  };

  if (loading) return (
    <div className="h-[80vh] flex flex-col items-center justify-center gap-4">
      <Loader2 className="w-10 h-10 text-accent-gold animate-spin" />
      <p className="text-white/40">리포트 데이터를 불러오는 중...</p>
    </div>
  );

  return (
    <main className="p-6 md:p-10 space-y-8 animate-in fade-in duration-500">
      {/* Top Nav */}
      <nav>
        <button 
          onClick={() => router.back()}
          className="flex items-center gap-2 text-white/40 hover:text-white transition-colors group"
        >
          <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          뒤로가기
        </button>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Order & Customer Info */}
        <div className="lg:col-span-1 space-y-8">
          {/* Order Card */}
          <section className="gungjung-glass p-8 border border-white/5 shadow-2xl">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Info className="w-5 h-5 text-accent-gold" /> 주문 정보
            </h2>
            <div className="space-y-4">
              <div>
                <p className="text-[10px] text-white/30 uppercase tracking-widest font-bold">주문번호</p>
                <p className="text-sm text-white font-mono">{order?.id.split('-')[0].toUpperCase()}</p>
              </div>
              <div>
                <p className="text-[10px] text-white/30 uppercase tracking-widest font-bold">상품명</p>
                <p className="text-sm text-accent-gold font-bold">{order?.product_name}</p>
              </div>
              <div>
                <p className="text-[10px] text-white/30 uppercase tracking-widest font-bold">고객명</p>
                <p className="text-sm text-white">{order?.customer_name} ({order?.gender === 'female' ? '여' : '남'})</p>
              </div>
              {order?.partner_name && (
                <div className="pt-4 border-t border-white/5">
                  <p className="text-[10px] text-white/30 uppercase tracking-widest font-bold">상대방 이름</p>
                  <p className="text-sm text-blue-400 font-bold">{order?.partner_name}</p>
                </div>
              )}
            </div>
          </section>

          {/* Customer Input Card */}
          <section className="gungjung-glass p-8 border border-white/5 shadow-2xl">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <User className="w-5 h-5 text-accent-gold" /> 신청 데이터
            </h2>
            <div className="space-y-6">
              <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                <p className="text-[10px] text-white/30 font-bold uppercase mb-1">본인</p>
                <div className="flex items-center gap-4">
                  <Calendar className="w-5 h-5 text-white/20" />
                  <p className="text-sm font-bold text-white tracking-tight">{order?.birth_date} {order?.birth_time}</p>
                </div>
              </div>
              
              {order?.partner_birth_date && (
                <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                  <p className="text-[10px] text-blue-400 font-bold uppercase mb-1">상대방</p>
                  <div className="flex items-center gap-4">
                    <Calendar className="w-5 h-5 text-white/20" />
                    <p className="text-sm font-bold text-white tracking-tight">{order?.partner_birth_date} {order?.partner_birth_time}</p>
                  </div>
                </div>
              )}

              {order?.shipping_memo && (
                <div className="p-4 bg-red-500/5 rounded-2xl border border-red-500/10">
                  <p className="text-[10px] text-red-400 font-bold uppercase mb-1">요청사항</p>
                  <p className="text-xs text-white/60 leading-relaxed">{order?.shipping_memo}</p>
                </div>
              )}
            </div>
          </section>
        </div>

        {/* Right Column: Manseryeok & Report Work */}
        <div className="lg:col-span-2 space-y-8">
          {/* Manseryeok Result Card */}
          <section className="gungjung-glass p-8 border border-white/5 shadow-2xl">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-accent-gold" /> 만세력 자동 계산 결과
              </h2>
              <button 
                onClick={handleSaveReportData}
                disabled={saving || !manseryeok}
                className="px-4 py-2 bg-accent-gold/20 text-accent-gold hover:bg-accent-gold hover:text-[#1a0f2e] rounded-xl text-xs font-bold transition-all flex items-center gap-2 disabled:opacity-50"
              >
                {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                데이터 저장
              </button>
            </div>

            {manseryeok ? (
              <div className="space-y-8">
                {/* 4 Pillars Display */}
                <div className="grid grid-cols-4 gap-4">
                  {[
                    { label: "시주", gan: manseryeok.siju.gan.hangeul, ji: manseryeok.siju.ji.hangeul },
                    { label: "일주", gan: manseryeok.ilju.gan.hangeul, ji: manseryeok.ilju.ji.hangeul },
                    { label: "월주", gan: manseryeok.wolju.gan.hangeul, ji: manseryeok.wolju.ji.hangeul },
                    { label: "년주", gan: manseryeok.nyeonju.gan.hangeul, ji: manseryeok.nyeonju.ji.hangeul },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-white/5 rounded-3xl p-6 text-center border border-white/5 group hover:border-accent-gold/30 transition-all">
                      <p className="text-[10px] text-white/30 font-bold mb-3 uppercase tracking-widest">{item.label}</p>
                      <div className="text-3xl font-bold text-accent-gold mb-1">{item.gan}</div>
                      <div className="text-3xl font-bold text-[#EDE6DA]">{item.ji}</div>
                    </div>
                  ))}
                </div>

                {/* Summary Logic */}
                <div className="p-6 bg-accent-gold/5 rounded-2xl border border-accent-gold/10">
                  <h3 className="text-sm font-bold text-accent-gold mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" /> 관리자 해석 가이드 (초안)
                  </h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                        <p className="text-[10px] text-white/30 font-bold mb-1">핵심 일간</p>
                        <p className="text-sm font-bold text-white">{interpretation?.dayMaster} ({interpretation?.pillar})</p>
                      </div>
                      <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                        <p className="text-[10px] text-white/30 font-bold mb-1">주요 오행</p>
                        <p className="text-sm font-bold text-white">데이터 분석 중...</p>
                      </div>
                    </div>
                    <p className="text-sm text-white/60 leading-relaxed">
                      <span className="text-accent-gold font-bold">기질 요약:</span> {interpretation?.core}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="h-48 flex flex-col items-center justify-center text-white/20">
                <AlertCircle className="w-10 h-10 mb-4 opacity-10" />
                <p>생년월일 정보가 없어 만세력을 계산할 수 없습니다.</p>
              </div>
            )}
          </section>

          {/* Action Card: Upload & Status */}
          <section className="gungjung-glass p-8 border border-white/5 shadow-2xl bg-gradient-to-br from-white/5 to-accent-gold/5">
            <h2 className="text-xl font-bold text-white mb-8 flex items-center gap-2">
              <FileUp className="w-5 h-5 text-accent-gold" /> 리포트 발송 및 관리
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-sm font-bold text-white/70">1단계: PDF 리포트 업로드</p>
                <div className="relative group">
                  <input 
                    type="file" 
                    accept=".pdf"
                    onChange={handleFileUpload}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                    disabled={uploading}
                  />
                  <div className={`
                    border-2 border-dashed border-white/10 rounded-2xl p-8 text-center transition-all
                    group-hover:border-accent-gold/50 group-hover:bg-accent-gold/5
                    ${uploading ? 'opacity-50 cursor-not-allowed' : ''}
                  `}>
                    {uploading ? (
                      <Loader2 className="w-8 h-8 text-accent-gold animate-spin mx-auto mb-2" />
                    ) : (
                      <FileUp className="w-8 h-8 text-white/20 mx-auto mb-2 group-hover:text-accent-gold group-hover:scale-110 transition-all" />
                    )}
                    <p className="text-xs text-white/40">{uploading ? '업로드 중...' : 'PDF 파일을 드래그하거나 클릭하세요'}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-sm font-bold text-white/70">2단계: 상태 변경 및 완료</p>
                <div className="space-y-3">
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/5 flex items-center justify-between">
                    <span className="text-xs text-white/40">현재 상태</span>
                    <span className="text-xs font-bold text-accent-gold">{order?.report_status || '접수완료'}</span>
                  </div>
                  {order?.report_url && (
                    <a 
                      href={order.report_url} 
                      target="_blank"
                      className="w-full py-3 bg-white/10 text-white rounded-xl text-center text-xs font-bold hover:bg-white/20 transition-all block"
                    >
                      업로드된 리포트 확인하기
                    </a>
                  )}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
