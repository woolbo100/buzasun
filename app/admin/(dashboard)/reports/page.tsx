'use client';

import { useState } from "react";
import Link from "next/link";
import { 
  FileText, 
  Search, 
  Filter, 
  MoreHorizontal, 
  Clock, 
  Edit3, 
  Eye, 
  Send, 
  CheckCircle2 
} from "lucide-react";

export default function AdminReportsPage() {
  // 샘플 데이터
  const [reports] = useState([
    { id: 1, date: "2024-05-01", name: "김도화", email: "dohwa@example.com", product: "연애 선천코드 리포트", reportStatus: "작성중", sendStatus: "미발송", memo: "세부 분석 진행 중", lastSent: "-" },
    { id: 2, date: "2024-05-01", name: "이수연", email: "sy@example.com", product: "재회 가능성 리포트", reportStatus: "검토중", sendStatus: "미발송", memo: "최종 오탈자 검토", lastSent: "-" },
    { id: 3, date: "2024-04-30", name: "박하늘", email: "sky@example.com", product: "궁합 리포트", reportStatus: "완료", sendStatus: "발송완료", memo: "정상 발송 완료", lastSent: "2024-05-01" },
    { id: 4, date: "2024-04-30", name: "최서윤", email: "seo@example.com", product: "사주 운세 리포트", reportStatus: "작성대기", sendStatus: "미발송", memo: "사주 정보 확인 필요", lastSent: "-" },
    { id: 5, date: "2024-04-29", name: "정지민", email: "jimin@example.com", product: "재회 가능성 리포트", reportStatus: "접수완료", sendStatus: "재발송", memo: "이메일 오기입으로 재발송 요청", lastSent: "2024-04-30" },
  ]);

  const stats = [
    { title: "작성대기", value: "3", icon: Clock, color: "text-white/60" },
    { title: "작성중", value: "5", icon: Edit3, color: "text-purple-400" },
    { title: "검토중", value: "2", icon: Eye, color: "text-blue-400" },
    { title: "발송완료", value: "12", icon: CheckCircle2, color: "text-green-400" },
  ];

  const getReportStatusBadge = (status: string) => {
    const base = "text-[11px] px-2.5 py-1 rounded-full border ";
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
    const base = "text-[11px] px-2.5 py-1 rounded-full border ";
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
        <h1 className="text-3xl md:text-4xl font-semibold flex items-center gap-3">
          <FileText className="text-yellow-200" /> 리포트 관리
        </h1>
        <p className="text-white/70 mt-2">
          주문별 리포트 작성 상태와 발송 상태를 체계적으로 관리합니다.
        </p>
      </section>

      {/* Summary Stats */}
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div key={stat.title} className="rounded-3xl border border-yellow-200/10 bg-white/5 backdrop-blur-xl p-5 shadow-xl">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-white/50">{stat.title}</span>
              <stat.icon className={`w-4 h-4 ${stat.color}`} />
            </div>
            <p className="text-2xl font-bold">{stat.value}<span className="text-sm font-normal ml-1">건</span></p>
          </div>
        ))}
      </section>

      {/* Filters & Search */}
      <section className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:w-96 group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30 group-focus-within:text-yellow-200 transition-colors" />
          <input 
            type="text" 
            placeholder="고객명, 이메일로 검색..." 
            className="w-full bg-white/5 border border-white/10 rounded-2xl pl-11 pr-5 py-3 focus:outline-none focus:border-yellow-200/50 transition-all text-sm"
          />
        </div>
        <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
          {["전체", "작성중", "검토중", "완료", "미발송"].map((filter) => (
            <button 
              key={filter}
              className={`px-4 py-2 rounded-xl border text-xs whitespace-nowrap transition-all ${
                filter === "전체" ? "border-yellow-200/50 bg-yellow-200/10 text-yellow-200" : "border-white/10 bg-white/5 text-white/60 hover:bg-white/10"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      {/* Reports List */}
      <section className="rounded-3xl border border-yellow-200/10 bg-white/5 backdrop-blur-xl overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 bg-white/5 text-[13px] text-white/50">
                <th className="p-5 font-medium">주문일</th>
                <th className="p-5 font-medium">고객 정보</th>
                <th className="p-5 font-medium">상품명</th>
                <th className="p-5 font-medium text-center">리포트 상태</th>
                <th className="p-5 font-medium text-center">발송 상태</th>
                <th className="p-5 font-medium">관리자 메모</th>
                <th className="p-5 font-medium text-center">최종 발송일</th>
                <th className="p-5 font-medium text-right">관리</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {reports.map((report) => (
                <tr key={report.id} className="hover:bg-white/5 transition-colors group">
                  <td className="p-5 text-sm text-white/60">{report.date}</td>
                  <td className="p-5">
                    <p className="font-medium text-sm">{report.name}</p>
                    <p className="text-[11px] text-white/30">{report.email}</p>
                  </td>
                  <td className="p-5 text-sm text-white/80">{report.product}</td>
                  <td className="p-5 text-center">
                    <span className={getReportStatusBadge(report.reportStatus)}>
                      {report.reportStatus}
                    </span>
                  </td>
                  <td className="p-5 text-center">
                    <span className={getSendStatusBadge(report.sendStatus)}>
                      {report.sendStatus}
                    </span>
                  </td>
                  <td className="p-5 text-sm text-white/60 max-w-[150px] truncate" title={report.memo}>
                    {report.memo}
                  </td>
                  <td className="p-5 text-sm text-white/40 text-center">{report.lastSent}</td>
                  <td className="p-5 text-right">
                    <button className="p-2 rounded-lg bg-white/5 hover:bg-yellow-200/20 text-white/40 hover:text-yellow-200 transition-all">
                      상세 관리
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
