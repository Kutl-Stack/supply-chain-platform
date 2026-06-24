"use client";

import { useState } from "react";
import Link from "next/link";
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

import Logo from "@/components/ui/Logo";
import { Toast, useToast } from "@/components/ui/Toast";

const navItems = [
  {
    label: "Dashboard",
    icon: <FaChartLine />,
    href: "/",
  },
  {
    label: "Inventory",
    icon: <FaBoxes />,
    href: "/inventory",
  },
  {
    label: "Shipments",
    icon: <FaTruck />,
    href: "/shipments",
  },
  {
    label: "Warehouses",
    icon: <FaWarehouse />,
    href: "/warehouses",
  },
  {
    label: "Suppliers",
    icon: <FaUsers />,
    href: "/suppliers",
  },
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
        <div className="flex items-start justify-between mb-10">
  <Logo />

  <button
    onClick={() => setIsOpen(false)}
    className="md:hidden text-slate-400 hover:text-white text-xl"
  >
    <FaTimes />
  </button>
</div>

       <nav className="space-y-2 flex-1">
  <p className="text-xs uppercase tracking-widest text-slate-500 mb-4 px-3">
    Navigation
  </p>

  {navItems.map((item) => (
    <button
      key={item.href}
      onClick={() => handleNav(item.href)}
      className={`group w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 cursor-pointer ${
        pathname === item.href
          ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg"
          : "text-slate-400 hover:bg-slate-800 hover:text-white"
      }`}
    >
      <span className="text-lg">{item.icon}</span>

      <span className="font-medium">
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