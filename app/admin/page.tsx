import Link from 'next/link'

const stats = [
  { title: '오늘 주문', value: '12건', desc: '신규 주문 확인이 필요합니다.' },
  { title: '결제 완료', value: '8건', desc: '결제 완료 후 처리 대기 중입니다.' },
  { title: '리포트 대기', value: '5건', desc: '작성 및 발송 일정이 잡혀 있습니다.' },
  { title: '신규 고객', value: '3명', desc: '오늘 처음 유입된 고객입니다.' },
]

const recentOrders = [
  { name: '김서화', product: '재회 진단 코드 리포트', status: '접수 완료' },
  { name: '이수연', product: '사회 매력 분석 리포트', status: '작성 중' },
  { name: '박하늘', product: '궁합 리포트', status: '발송 완료' },
]

const quickActions = [
  { title: '상품 관리', href: '/admin/products', desc: '상품 목록과 설명을 수정합니다.' },
  { title: '주문 관리', href: '/admin/orders', desc: '주문 현황과 상세 정보를 조회합니다.' },
  { title: '리포트 발송', href: '/admin/reports', desc: '분석 완료 리포트를 전송합니다.' },
  { title: '후기 관리', href: '/admin/reviews', desc: '고객 후기를 검토하고 정리합니다.' },
]

export default function AdminDashboardPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#2A103D,_#160B24,_#0B0612)] p-6 text-white md:p-10">
      <div className="mx-auto max-w-7xl space-y-8">
        <section className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-[var(--accent-gold)]/70">
              Baekdohwa Admin
            </p>
            <h1 className="mt-2 text-3xl font-semibold md:text-5xl">
              백도화 관리자 대시보드
            </h1>
            <p className="mt-3 text-white/70">
              주문, 고객, 리포트 흐름을 한눈에 확인하는 운영 화면입니다.
            </p>
          </div>

          <button className="rounded-2xl border border-[var(--accent-gold)]/30 bg-white/5 px-6 py-3 shadow-lg transition-all hover:bg-white/10">
            오늘 업무 시작하기
          </button>
        </section>

        <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-[var(--accent-gold)]/20 bg-white/5 p-6 shadow-xl backdrop-blur-xl"
            >
              <p className="text-sm text-white/60">{item.title}</p>
              <h2 className="mt-2 text-3xl font-bold">{item.value}</h2>
              <p className="mt-3 text-sm text-white/50">{item.desc}</p>
            </div>
          ))}
        </section>

        <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {quickActions.map((action) => (
            <Link
              key={action.href}
              href={action.href}
              className="group rounded-3xl border border-[var(--accent-gold)]/20 bg-white/5 p-6 text-left transition-all hover:bg-white/10 backdrop-blur-xl"
            >
              <p className="text-lg font-medium transition-colors group-hover:text-[var(--accent-gold)]">
                {action.title}
              </p>
              <p className="mt-2 text-sm text-white/60">{action.desc}</p>
            </Link>
          ))}
        </section>

        <section className="rounded-3xl border border-[var(--accent-gold)]/20 bg-white/5 p-6 shadow-xl backdrop-blur-xl">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-xl font-semibold">최근 주문</h3>
            <span className="text-sm text-white/60">최근 3건</span>
          </div>

          <div className="space-y-4">
            {recentOrders.map((order) => (
              <div
                key={`${order.name}-${order.product}`}
                className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-black/10 p-4 md:flex-row md:items-center md:justify-between"
              >
                <div>
                  <p className="font-medium">{order.name}</p>
                  <p className="text-sm text-white/60">{order.product}</p>
                </div>
                <span className="rounded-full border border-[var(--accent-gold)]/20 bg-white/5 px-4 py-2 text-sm">
                  {order.status}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
