'use client';

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { 
  LayoutDashboard, 
  ShoppingBag, 
  MessageSquare, 
  Package, 
  FileText, 
  Settings, 
  LogOut,
  Menu,
  X
} from "lucide-react";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { title: "대시보드", href: "/admin", icon: LayoutDashboard },
    { title: "주문 관리", href: "/admin/orders", icon: ShoppingBag },
    { title: "후기 관리", href: "/admin/reviews", icon: MessageSquare },
    { title: "상품 관리", href: "/admin/products", icon: Package },
    { title: "리포트 관리", href: "/admin/reports", icon: FileText },
    { title: "설정", href: "/admin/settings", icon: Settings },
  ];

  const handleLogout = async () => {
    if (confirm("로그아웃 하시겠습니까?")) {
      await supabase.auth.signOut();
      router.push("/admin/login");
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0612] flex flex-col md:flex-row">
      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between p-4 bg-white/5 border-b border-white/10 backdrop-blur-md sticky top-0 z-50">
        <span className="text-yellow-200 font-semibold tracking-wider">BAEKDOHWA ADMIN</span>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X className="text-white" /> : <Menu className="text-white" />}
        </button>
      </div>

      {/* Sidebar Overlay (Mobile) */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed md:static inset-y-0 left-0 z-50 w-64 
        bg-[#1A0B2E]/80 backdrop-blur-xl border-r border-yellow-200/10
        transform ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0 transition-transform duration-300 ease-in-out
        flex flex-col
      `}>
        <div className="p-8">
          <p className="text-xs tracking-[0.3em] text-yellow-200/50 uppercase mb-2">Management</p>
          <h1 className="text-xl font-bold text-white tracking-tight">백도화 관리자</h1>
        </div>

        <nav className="flex-1 px-4 space-y-2">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`
                  flex items-center gap-3 px-4 py-3 rounded-2xl transition-all group
                  ${isActive 
                    ? "bg-yellow-200/10 text-yellow-200 border border-yellow-200/20" 
                    : "text-white/50 hover:bg-white/5 hover:text-white"}
                `}
              >
                <item.icon className={`w-5 h-5 ${isActive ? "text-yellow-200" : "text-white/40 group-hover:text-white"}`} />
                <span className="font-medium">{item.title}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-white/5 mt-auto">
          <button 
            onClick={handleLogout}
            className="flex items-center gap-3 w-full px-4 py-3 rounded-2xl text-red-400 hover:bg-red-500/10 transition-all"
          >
            <LogOut className="w-5 h-5" />
            <span className="font-medium">로그아웃</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto bg-[radial-gradient(circle_at_top,_#2A103D,_#160B24,_#0B0612)]">
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
