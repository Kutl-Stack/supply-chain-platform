"use client";

import { useState } from "react";

interface InventoryItem {
  id: number;
  item: string;
  stock: number;
}

interface InventoryTableProps {
  data: InventoryItem[];
}

export default function InventoryTable({ data }: InventoryTableProps) {
  const [search, setSearch] = useState("");

  const filtered = data.filter((item) =>
    item.item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 mt-10 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Inventory Management</h2>
          <p className="text-slate-600 mt-1">Monitor warehouse inventory and stock levels.</p>
        </div>
        <input
          type="text"
          placeholder="Search inventory..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-slate-300 rounded-xl px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-500 text-slate-800 placeholder-slate-500"
        />
      </div>

      <table className="w-full">
        <thead>
          <tr className="border-b border-slate-200 text-left text-slate-700">
            <th className="pb-4">Item</th>
            <th className="pb-4">Stock</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((item) => (
            <tr key={item.id} className="border-b border-slate-100 hover:bg-slate-50 transition">
              <td className="py-4 font-semibold text-slate-800">{item.item}</td>
              <td className="text-slate-800 font-semibold">{item.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}