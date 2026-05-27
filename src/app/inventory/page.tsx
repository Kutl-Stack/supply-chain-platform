"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/layout/Sidebar";
import ThemeToggle from "@/components/ui/ThemeToggle";

const inventory = [
  { id: "INV-001", product: "Industrial Sensors", category: "Electronics", warehouse: "Johannesburg", stock: 120, status: "In Stock" },
  { id: "INV-002", product: "Hydraulic Pumps", category: "Machinery", warehouse: "Cape Town", stock: 18, status: "Low Stock" },
  { id: "INV-003", product: "Steel Components", category: "Materials", warehouse: "Durban", stock: 340, status: "In Stock" },
  { id: "INV-004", product: "Packaging Units", category: "Operations", warehouse: "Pretoria", stock: 0, status: "Out of Stock" },
  { id: "INV-005", product: "Circuit Boards", category: "Electronics", warehouse: "Johannesburg", stock: 75, status: "In Stock" },
  { id: "INV-006", product: "Conveyor Belts", category: "Machinery", warehouse: "Durban", stock: 12, status: "Low Stock" },
];

export default function InventoryPage() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const auth = localStorage.getItem("supplyiq_auth");
    if (!auth) router.push("/login");
  }, []);

  const filtered = inventory.filter((item) => {
    const matchSearch = item.product.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === "All" || item.status === filter;
    return matchSearch && matchFilter;
  });

  return (
    <main className="flex min-h-screen bg-slate-50 dark:bg-[#020817] transition-colors">
      <Sidebar />

      <section className="flex-1 p-10">
        <div className="flex items-start justify-between mb-10">
          <div>
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
              Inventory
            </h1>
            <p className="mt-2 text-slate-500 dark:text-slate-400">
              Monitor stock levels across all warehouses.
            </p>
          </div>
          <ThemeToggle />
        </div>

        {/* Filters */}
        <div className="flex gap-4 mb-6 flex-wrap">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-slate-300 dark:border-slate-700 rounded-xl px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-500 text-slate-800 dark:text-white dark:bg-slate-800 placeholder-slate-400"
          />
          {["All", "In Stock", "Low Stock", "Out of Stock"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition ${
                filter === f
                  ? "bg-indigo-600 text-white"
                  : "bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-indigo-400"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Table */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
          <table className="w-full">
            <thead>
              <tr className="text-left text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">
                <th className="pb-4">ID</th>
                <th className="pb-4">Product</th>
                <th className="pb-4">Category</th>
                <th className="pb-4">Warehouse</th>
                <th className="pb-4">Stock</th>
                <th className="pb-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((item) => (
                <tr key={item.id} className="border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                  <td className="py-4 text-slate-500 dark:text-slate-400 text-sm">{item.id}</td>
                  <td className="font-semibold text-slate-800 dark:text-white">{item.product}</td>
                  <td className="text-slate-600 dark:text-slate-300">{item.category}</td>
                  <td className="text-slate-600 dark:text-slate-300">{item.warehouse}</td>
                  <td className="font-semibold text-slate-800 dark:text-white">{item.stock}</td>
                  <td>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      item.status === "In Stock" ? "bg-emerald-100 text-emerald-700"
                      : item.status === "Low Stock" ? "bg-amber-100 text-amber-700"
                      : "bg-red-100 text-red-700"
                    }`}>
                      {item.status}
                    </span>
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