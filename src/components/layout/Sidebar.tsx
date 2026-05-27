"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import {
  FaChartLine,
  FaBoxes,
  FaTruck,
  FaWarehouse,
  FaUsers,
  FaSignOutAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { Toast, useToast } from "@/components/ui/Toast";

const navItems = [
  { label: "Dashboard", icon: <FaChartLine />, href: "/" },
  { label: "Inventory", icon: <FaBoxes />, href: "/inventory" },
  { label: "Shipments", icon: <FaTruck />, href: "/shipments" },
  { label: "Warehouses", icon: <FaWarehouse />, href: "/warehouses" },
  { label: "Suppliers", icon: <FaUsers />, href: "/suppliers" },
];

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const { toast, showToast, hideToast } = useToast();
  const [isOpen, setIsOpen] = useState(false);

  function handleLogout() {
    showToast("Signed out successfully", "success");
    setTimeout(() => {
      localStorage.removeItem("supplyiq_auth");
      router.push("/login");
    }, 1500);
  }

  function handleNav(href: string) {
    router.push(href);
    setIsOpen(false);
  }

  return (
    <>
      {/* Mobile hamburger button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-4 left-4 z-50 md:hidden bg-[#0f172a] text-white p-3 rounded-xl shadow-lg"
      >
        <FaBars />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed md:static z-50 top-0 left-0 h-full w-72 min-h-screen bg-[#0f172a] border-r border-slate-800 text-slate-300 p-7 flex flex-col transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="flex items-center justify-between mb-14">
          <h2 className="text-3xl font-bold text-white tracking-tight">
            SupplyIQ
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            className="md:hidden text-slate-400 hover:text-white"
          >
            <FaTimes />
          </button>
        </div>

        <nav className="space-y-3 flex-1">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNav(item.href)}
              className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition cursor-pointer ${
                pathname === item.href
                  ? "bg-slate-800/60 text-white"
                  : "hover:bg-slate-800/60 hover:text-white"
              }`}
            >
              {item.icon}
              <span className={pathname === item.href ? "font-medium" : ""}>
                {item.label}
              </span>
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
    </>
  );
}