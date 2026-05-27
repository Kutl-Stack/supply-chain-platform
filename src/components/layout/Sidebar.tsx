"use client";

import { useRouter, usePathname } from "next/navigation";
import {
  FaChartLine,
  FaBoxes,
  FaTruck,
  FaWarehouse,
  FaSignOutAlt,
} from "react-icons/fa";
import { Toast, useToast } from "@/components/ui/Toast";

const navItems = [
  { label: "Dashboard", icon: <FaChartLine />, href: "/" },
  { label: "Inventory", icon: <FaBoxes />, href: "/inventory" },
  { label: "Shipments", icon: <FaTruck />, href: "/shipments" },
  { label: "Warehouses", icon: <FaWarehouse />, href: "/warehouses" },
];

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const { toast, showToast, hideToast } = useToast();

  function handleLogout() {
    showToast("Signed out successfully", "success");
    setTimeout(() => {
      localStorage.removeItem("supplyiq_auth");
      router.push("/login");
    }, 1500);
  }

  return (
    <aside className="w-72 min-h-screen bg-[#0f172a] border-r border-slate-800 text-slate-300 p-7 flex flex-col">
      <h2 className="text-3xl font-bold text-white tracking-tight mb-14">
        SupplyIQ
      </h2>

      <nav className="space-y-3 flex-1">
        {navItems.map((item) => (
          <button
            key={item.href}
            onClick={() => router.push(item.href)}
            className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition cursor-pointer ${
              pathname === item.href
                ? "bg-slate-800/60 text-white"
                : "hover:bg-slate-800/60 hover:text-white"
            }`}
          >
            {item.icon}
            <span className={pathname === item.href ? "font-medium" : ""}>{item.label}</span>
          </button>
        ))}
      </nav>

      <button
        onClick={handleLogout}
        className="flex items-center gap-4 hover:bg-red-500/10 hover:text-red-400 px-4 py-3 rounded-xl transition cursor-pointer w-full mt-auto"
      >
        <FaSignOutAlt />
        <span>Sign Out</span>
      </button>

      {toast && (
        <Toast message={toast.message} type={toast.type} onClose={hideToast} />
      )}
    </aside>
  );
}