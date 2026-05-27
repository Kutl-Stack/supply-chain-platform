"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/layout/Sidebar";
import ThemeToggle from "@/components/ui/ThemeToggle";

const shipments = [
  { id: "SH-1024", destination: "Johannesburg", status: "In Transit", value: "R120,000", date: "2026-05-20" },
  { id: "SH-1025", destination: "Cape Town", status: "Delivered", value: "R84,500", date: "2026-05-21" },
  { id: "SH-1026", destination: "Durban", status: "Pending", value: "R43,900", date: "2026-05-22" },
  { id: "SH-1027", destination: "Pretoria", status: "In Transit", value: "R67,200", date: "2026-05-23" },
  { id: "SH-1028", destination: "Gqeberha", status: "Delivered", value: "R92,100", date: "2026-05-24" },
  { id: "SH-1029", destination: "Bloemfontein", status: "Pending", value: "R31,400", date: "2026-05-25" },
];

export default function ShipmentsPage() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const auth = localStorage.getItem("supplyiq_auth");
    if (!auth) router.push("/login");
  }, []);

  const filtered = shipments.filter((s) => {
    const matchSearch = s.id.toLowerCase().includes(search.toLowerCase()) ||
      s.destination.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === "All" || s.status === filter;
    return matchSearch && matchFilter;
  });

  return (
    <main className="flex min-h-screen bg-slate-50 dark:bg-[#020817] transition-colors">
      <Sidebar />

      <section className="flex-1 p-10">
        <div className="flex items-start justify-between mb-10">
          <div>
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
              Shipments
            </h1>
            <p className="mt-2 text-slate-500 dark:text-slate-400">
              Track and manage all shipments.
            </p>
          </div>
          <ThemeToggle />
        </div>

        {/* Filters */}
        <div className="flex gap-4 mb-6 flex-wrap">
          <input
            type="text"
            placeholder="Search by ID or destination..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-slate-300 dark:border-slate-700 rounded-xl px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-500 text-slate-800 dark:text-white dark:bg-slate-800 placeholder-slate-400"
          />
          {["All", "In Transit", "Delivered", "Pending"].map((f) => (
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
                <th className="pb-4">Shipment ID</th>
                <th className="pb-4">Destination</th>
                <th className="pb-4">Status</th>
                <th className="pb-4">Value</th>
                <th className="pb-4">Date</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((s) => (
                <tr key={s.id} className="border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                  <td className="py-4 font-semibold text-slate-800 dark:text-white">{s.id}</td>
                  <td className="text-slate-600 dark:text-slate-300">{s.destination}</td>
                  <td>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      s.status === "Delivered" ? "bg-emerald-100 text-emerald-700"
                      : s.status === "Pending" ? "bg-amber-100 text-amber-700"
                      : "bg-indigo-100 text-indigo-700"
                    }`}>
                      {s.status}
                    </span>
                  </td>
                  <td className="text-slate-800 dark:text-white font-semibold">{s.value}</td>
                  <td className="text-slate-500 dark:text-slate-400">{s.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}