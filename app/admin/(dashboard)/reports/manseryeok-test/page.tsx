'use client';

import { useState } from "react";
import { calculateSaju } from "@fullstackfamily/manseryeok";
import { 
  Calculator, 
  User, 
  Calendar, 
  Clock, 
  Search,
  RefreshCw
} from "lucide-react";

export default function ManseryeokTestPage() {
  const [formData, setFormData] = useState({
    birthDate: "1990-01-01",
    birthTime: "12:00",
    gender: "female"
  });
  const [result, setResult] = useState<any>(null);

  const handleTest = () => {
    try {
      const [year, month, day] = formData.birthDate.split("-").map(Number);
      const [hour, minute] = formData.birthTime.split(":").map(Number);
      
      const manseryeok = calculateSaju(
        year, 
        month, 
        day, 
        hour,
        0
      );

      setResult(manseryeok);
    } catch (err: any) {
      alert("계산 중 오류가 발생했습니다: " + err.message);
    }
  };

  return (
    <main className="p-6 md:p-10 space-y-8 animate-in fade-in duration-500">
      <section>
        <h1 className="text-3xl font-elegant font-bold text-white flex items-center gap-3">
          <Calculator className="text-accent-gold" /> 만세력 테스트
        </h1>
        <p className="text-white/40 mt-2">
          라이브러리 계산 결과를 미리 확인하고 데이터를 검증합니다.
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Input Card */}
        <section className="lg:col-span-1 space-y-6 gungjung-glass p-8 border border-white/5 shadow-2xl">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <User className="w-5 h-5 text-accent-gold" /> 데이터 입력
          </h2>
          
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-xs text-white/40 font-bold uppercase tracking-wider">생년월일</label>
              <div className="relative">
                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
                <input 
                  type="date"
                  value={formData.birthDate}
                  onChange={(e) => setFormData({...formData, birthDate: e.target.value})}
                  className="w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-accent-gold transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs text-white/40 font-bold uppercase tracking-wider">출생시간</label>
              <div className="relative">
                <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
                <input 
                  type="time"
                  value={formData.birthTime}
                  onChange={(e) => setFormData({...formData, birthTime: e.target.value})}
                  className="w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-accent-gold transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs text-white/40 font-bold uppercase tracking-wider">성별</label>
              <div className="flex gap-4">
                {['female', 'male'].map((g) => (
                  <button
                    key={g}
                    onClick={() => setFormData({...formData, gender: g})}
                    className={`flex-1 py-3 rounded-xl border text-sm font-bold transition-all ${
                      formData.gender === g 
                      ? 'bg-accent-gold text-[#1a0f2e] border-accent-gold shadow-lg' 
                      : 'bg-white/5 text-white/40 border-white/10 hover:border-white/20'
                    }`}
                  >
                    {g === 'female' ? '여성' : '남성'}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={handleTest}
              className="w-full py-4 bg-accent-gold text-[#1a0f2e] font-bold rounded-2xl flex items-center justify-center gap-2 hover:brightness-110 active:scale-[0.98] transition-all shadow-xl shadow-accent-gold/20"
            >
              <RefreshCw className="w-5 h-5" /> 계산하기
            </button>
          </div>
        </section>

        {/* Result Card */}
        <section className="lg:col-span-2 gungjung-glass p-8 border border-white/5 shadow-2xl overflow-hidden">
          <h2 className="text-xl font-bold text-white flex items-center gap-2 mb-6">
            <Search className="w-5 h-5 text-accent-gold" /> 계산 결과 (Raw Data)
          </h2>

          {result ? (
            <div className="space-y-6">
              {/* 四柱 (Four Pillars) Display */}
              <div className="grid grid-cols-4 gap-4 mb-8">
                {[
                  { label: "시주", gan: result.siju.gan.hangeul, ji: result.siju.ji.hangeul },
                  { label: "일주", gan: result.ilju.gan.hangeul, ji: result.ilju.ji.hangeul },
                  { label: "월주", gan: result.wolju.gan.hangeul, ji: result.wolju.ji.hangeul },
                  { label: "년주", gan: result.nyeonju.gan.hangeul, ji: result.nyeonju.ji.hangeul },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white/5 rounded-2xl p-4 text-center border border-white/5">
                    <p className="text-[10px] text-white/30 font-bold mb-2 uppercase tracking-widest">{item.label}</p>
                    <div className="text-2xl font-bold text-accent-gold">{item.gan}</div>
                    <div className="text-2xl font-bold text-[#EDE6DA]">{item.ji}</div>
                  </div>
                ))}
              </div>

              {/* JSON View */}
              <div className="bg-black/40 rounded-2xl p-6 overflow-auto max-h-[500px] border border-white/5">
                <pre className="text-[12px] text-green-400 font-mono leading-relaxed">
                  {JSON.stringify(result, null, 2)}
                </pre>
              </div>
            </div>
          ) : (
            <div className="h-64 flex flex-col items-center justify-center text-white/20">
              <Calculator className="w-12 h-12 mb-4 opacity-10" />
              <p>데이터를 입력하고 계산하기 버튼을 눌러주세요.</p>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
