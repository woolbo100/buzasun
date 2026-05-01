'use client';

import { useState } from "react";
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
  Building2
} from "lucide-react";

export default function AdminSettingsPage() {
  // 샘플 설정 데이터
  const [settings, setSettings] = useState({
    siteName: "백도화 매력학당",
    adminEmail: "admin@baekdohwa.com",
    csEmail: "help@baekdohwa.com",
    kakaoChannel: "https://pf.kakao.com/_xxxx",
    contact: "010-1234-5678",
    
    bankName: "신한은행",
    accountNumber: "110-123-456789",
    accountHolder: "백도화",
    depositGuide: "입금 확인 후 리포트 작성이 시작됩니다. 입금자명은 주문자명과 동일하게 해주세요.",
    
    reportSentMsg: "안녕하세요, 백도화입니다. 신청하신 리포트가 완성되어 발송해 드립니다.",
    reviewRequestMsg: "리포트는 어떠셨나요? 소중한 후기를 남겨주시면 큰 힘이 됩니다.",
    consultationMsg: "추가 상담이 필요하시면 언제든 카카오톡으로 문의해 주세요.",
    
    mainReviewCount: 6,
    mainFeaturedCount: 3,
    isSalesPaused: false
  });

  const handleSave = () => {
    alert("설정 저장 기능은 현재 준비 중입니다. (화면 껍데기만 구현 완료)");
  };

  return (
    <main className="p-6 md:p-10 space-y-8 max-w-5xl">
      {/* Header */}
      <section className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl md:text-4xl font-semibold flex items-center gap-3 text-white">
            <Settings className="text-yellow-200" /> 설정 관리
          </h1>
          <p className="text-white/70 mt-2">
            사이트 운영에 필요한 기본 정보와 정책을 관리합니다.
          </p>
        </div>
        <button 
          onClick={handleSave}
          className="rounded-2xl bg-yellow-200 text-purple-900 px-8 py-4 font-bold hover:bg-yellow-300 transition-all shadow-lg flex items-center gap-2"
        >
          <Save className="w-5 h-5" /> 설정 저장하기
        </button>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* 1. 기본 정보 */}
        <section className="rounded-3xl border border-yellow-200/10 bg-white/5 backdrop-blur-xl p-8 space-y-6">
          <h2 className="text-xl font-semibold flex items-center gap-2 text-yellow-100">
            <Globe className="w-5 h-5 text-yellow-200" /> 기본 정보
          </h2>
          <div className="space-y-4">
            <div className="space-y-1">
              <label className="text-xs text-white/40 uppercase">사이트명</label>
              <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-yellow-200/50" value={settings.siteName} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs text-white/40 uppercase flex items-center gap-1"><Mail className="w-3 h-3" /> 관리자 이메일</label>
                <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-yellow-200/50" value={settings.adminEmail} />
              </div>
              <div className="space-y-1">
                <label className="text-xs text-white/40 uppercase flex items-center gap-1"><Mail className="w-3 h-3" /> 고객센터 이메일</label>
                <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-yellow-200/50" value={settings.csEmail} />
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-xs text-white/40 uppercase flex items-center gap-1"><MessageCircle className="w-3 h-3" /> 카카오채널 링크</label>
              <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-yellow-200/50" value={settings.kakaoChannel} />
            </div>
            <div className="space-y-1">
              <label className="text-xs text-white/40 uppercase flex items-center gap-1"><Phone className="w-3 h-3" /> 대표 연락처</label>
              <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-yellow-200/50" value={settings.contact} />
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
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-yellow-200/50" value={settings.bankName} />
              </div>
              <div className="space-y-1">
                <label className="text-xs text-white/40 uppercase">예금주</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-yellow-200/50" value={settings.accountHolder} />
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-xs text-white/40 uppercase">계좌번호</label>
              <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-yellow-200/50" value={settings.accountNumber} />
            </div>
            <div className="space-y-1">
              <label className="text-xs text-white/40 uppercase">입금 안내 문구</label>
              <textarea rows={3} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-yellow-200/50 resize-none" value={settings.depositGuide} />
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
              <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-yellow-200/50 resize-none" value={settings.reportSentMsg} />
            </div>
            <div className="space-y-1">
              <label className="text-xs text-white/40 uppercase">후기 요청 메시지</label>
              <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-yellow-200/50 resize-none" value={settings.reviewRequestMsg} />
            </div>
            <div className="space-y-1">
              <label className="text-xs text-white/40 uppercase">상담 안내 메시지</label>
              <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-yellow-200/50 resize-none" value={settings.consultationMsg} />
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
              <input type="number" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-yellow-200/50" value={settings.mainReviewCount} />
            </div>
            <div className="space-y-1 min-w-[150px]">
              <label className="text-xs text-white/40 uppercase">메인 추천 상품 개수</label>
              <input type="number" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-yellow-200/50" value={settings.mainFeaturedCount} />
            </div>
            <div className="flex items-center gap-4 pt-4">
              <span className="text-sm text-white/80">판매 일시중지</span>
              <button 
                onClick={() => setSettings({...settings, isSalesPaused: !settings.isSalesPaused})}
                className={`w-14 h-7 rounded-full transition-all relative ${settings.isSalesPaused ? 'bg-red-500' : 'bg-white/10'}`}
              >
                <div className={`absolute top-1 w-5 h-5 rounded-full bg-white transition-all ${settings.isSalesPaused ? 'left-8' : 'left-1'}`} />
              </button>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
