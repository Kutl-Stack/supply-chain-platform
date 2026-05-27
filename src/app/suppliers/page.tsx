"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/layout/Sidebar";
import ThemeToggle from "@/components/ui/ThemeToggle";

const suppliers = [
  { id: "SUP-001", name: "SteelCo Industries", category: "Raw Materials", location: "Johannesburg", contact: "steelco@email.com", status: "Active", rating: 5 },
  { id: "SUP-002", name: "Cape Logistics Ltd", category: "Logistics", location: "Cape Town", contact: "cape@logistics.co.za", status: "Active", rating: 4 },
  { id: "SUP-003", name: "Durban Electronics", category: "Electronics", location: "Durban", contact: "info@durbanelec.co.za", status: "Active", rating: 4 },
  { id: "SUP-004", name: "Pretoria Packaging", category: "Packaging", location: "Pretoria", contact: "pp@packaging.co.za", status: "Inactive", rating: 3 },
  { id: "SUP-005", name: "Gqeberha Machinery", category: "Machinery", location: "Gqeberha", contact: "gm@machinery.co.za", status: "Active", rating: 5 },
  { id: "SUP-006", name: "Bloemfontein Supplies", category: "Raw Materials", location: "Bloemfontein", contact: "bfs@supplies.co.za", status: "Under Review", rating: 3 },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={star <= rating ? "text-amber-400" : "text-slate-300 dark:text-slate-600"}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default function SuppliersPage() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const auth = localStorage.getItem("supplyiq_auth");
    if (!auth) router.push("/login");
  }, []);

  const filtered = suppliers.filter((s) => {
    const matchSearch =
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.category.toLowerCase().includes(search.toLowerCase()) ||
      s.location.toLowerCase().includes(search.toLowerCase());
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
              Suppliers
            </h1>
            <p className="mt-2 text-slate-500 dark:text-slate-400">
              Manage and monitor your supplier network.
            </p>
          </div>
          <ThemeToggle />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
            <p className="text-sm text-slate-500 dark:text-slate-400">Total Suppliers</p>
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mt-2">{suppliers.length}</h3>
          </div>
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
            <p className="text-sm text-slate-500 dark:text-slate-400">Active Suppliers</p>
            <h3 className="text-3xl font-bold text-emerald-500 mt-2">
              {suppliers.filter((s) => s.status === "Active").length}
            </h3>
          </div>
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
            <p className="text-sm text-slate-500 dark:text-slate-400">Under Review</p>
            <h3 className="text-3xl font-bold text-amber-500 mt-2">
              {suppliers.filter((s) => s.status === "Under Review").length}
            </h3>
          </div>
        </div>

        {/* Filters */}
        <div className="flex gap-4 mb-6 flex-wrap">
          <input
            type="text"
            placeholder="Search suppliers..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-slate-300 dark:border-slate-700 rounded-xl px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-500 text-slate-800 dark:text-white dark:bg-slate-800 placeholder-slate-400"
          />
          {["All", "Active", "Inactive", "Under Review"].map((f) => (
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
                <th className="pb-4">Name</th>
                <th className="pb-4">Category</th>
                <th className="pb-4">Location</th>
                <th className="pb-4">Rating</th>
                <th className="pb-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((s) => (
                <tr
                  key={s.id}
                  className="border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition"
                >
                  <td className="py-4 text-slate-500 dark:text-slate-400 text-sm">{s.id}</td>
                  <td className="font-semibold text-slate-800 dark:text-white">
                    {s.name}
                    <p className="text-xs text-slate-400 font-normal">{s.contact}</p>
                  </td>
                  <td className="text-slate-600 dark:text-slate-300">{s.category}</td>
                  <td className="text-slate-600 dark:text-slate-300">{s.location}</td>
                  <td><StarRating rating={s.rating} /></td>
                  <td>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      s.status === "Active" ? "bg-emerald-100 text-emerald-700"
                      : s.status === "Inactive" ? "bg-slate-100 text-slate-600"
                      : "bg-amber-100 text-amber-700"
                    }`}>
                      {s.status}
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