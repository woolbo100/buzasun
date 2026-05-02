import Link from "next/link";

export default function AdminDashboardPage() {
  const stats = [
    { title: "오늘 주문", value: "12건", desc: "신규 주문 확인" },
    { title: "결제 완료", value: "8건", desc: "결제 확인 필요" },
    { title: "리포트 대기", value: "5건", desc: "작성 및 발송 예정" },
    { title: "신규 고객", value: "3명", desc: "오늘 가입 기준" },
  ];

  const recentOrders = [
    { name: "김도화", product: "연애 선천코드 리포트", status: "접수완료" },
    { name: "이수연", product: "재회 가능성 리포트", status: "작성중" },
    { name: "박하늘", product: "궁합 리포트", status: "발송완료" },
  ];

  const quickActions = [
    { title: "상품 관리", href: "/admin/products", desc: "상품 목록 및 정보 수정" },
    { title: "주문 관리", href: "/admin/orders", desc: "주문 현황 및 상세 조회" },
    { title: "리포트 발송", href: "/admin/reports", desc: "분석 완료 리포트 전송" },
    { title: "후기 관리", href: "/admin/reviews", desc: "고객 리포트 후기 검토" },
  ];

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#2A103D,_#160B24,_#0B0612)] text-white p-6 md:p-10">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <section className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <p className="text-sm tracking-[0.25em] text-accent-gold/70 uppercase">
              Baekdohwa Admin
            </p>
            <h1 className="text-3xl md:text-5xl font-semibold mt-2">
              백도화 관리자 대시보드
            </h1>
            <p className="text-white/70 mt-3">
              주문, 고객, 리포트 흐름을 한눈에 관리하는 비밀 공간입니다.
            </p>
          </div>

          <button className="rounded-2xl border border-accent-gold/30 bg-white/5 backdrop-blur-md px-6 py-3 hover:bg-white/10 transition-all shadow-lg">
            오늘 업무 시작하기
          </button>
        </section>

        {/* Stats */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-accent-gold/20 bg-white/5 backdrop-blur-xl p-6 shadow-xl"
            >
              <p className="text-sm text-white/60">{item.title}</p>
              <h2 className="text-3xl font-bold mt-2">{item.value}</h2>
              <p className="text-sm text-white/50 mt-3">{item.desc}</p>
            </div>
          ))}
        </section>

        {/* Quick Actions */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {quickActions.map((action) => (
            <Link
              key={action.href}
              href={action.href}
              className="rounded-3xl border border-accent-gold/20 bg-white/5 backdrop-blur-xl p-6 text-left hover:bg-white/10 transition-all group"
            >
              <p className="text-lg font-medium group-hover:text-accent-gold transition-colors">
                {action.title}
              </p>
              <p className="text-sm text-white/60 mt-2">
                {action.desc}
              </p>
            </Link>
          ))}
        </section>

        {/* Recent Orders */}
        <section className="rounded-3xl border border-accent-gold/20 bg-white/5 backdrop-blur-xl p-6 shadow-xl">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold">최근 주문</h3>
            <span className="text-sm text-white/60">최근 3건</span>
          </div>

          <div className="space-y-4">
            {recentOrders.map((order, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-white/10 bg-black/10 p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3"
              >
                <div>
                  <p className="font-medium">{order.name}</p>
                  <p className="text-sm text-white/60">{order.product}</p>
                </div>
                <span className="text-sm rounded-full px-4 py-2 border border-accent-gold/20 bg-white/5">
                  {order.status}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
운세가 아닌 당신만의 관계 코드를 조용히 읽어드립니다.