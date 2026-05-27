"use client";

import { useState } from "react";

const inventory = [
  {
    product: "Industrial Sensors",
    category: "Electronics",
    warehouse: "Johannesburg",
    stock: 120,
    status: "In Stock",
  },
  {
    product: "Hydraulic Pumps",
    category: "Machinery",
    warehouse: "Cape Town",
    stock: 18,
    status: "Low Stock",
  },
  {
    product: "Steel Components",
    category: "Materials",
    warehouse: "Durban",
    stock: 340,
    status: "In Stock",
  },
  {
    product: "Packaging Units",
    category: "Operations",
    warehouse: "Pretoria",
    stock: 0,
    status: "Out of Stock",
  },
];

export default function InventoryTable() {
  const [search, setSearch] = useState("");

  const filteredInventory = inventory.filter((item) =>
    item.product.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 mt-10 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            Inventory Management
          </h2>
          <p className="text-slate-600 mt-1">
            Monitor warehouse inventory and stock levels.
          </p>
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
            <th className="pb-4">Product</th>
            <th className="pb-4">Category</th>
            <th className="pb-4">Warehouse</th>
            <th className="pb-4">Stock</th>
            <th className="pb-4">Status</th>
          </tr>
        </thead>

        <tbody>
          {filteredInventory.map((item) => (
            <tr
              key={item.product}
              className="border-b border-slate-100 hover:bg-slate-50 transition"
            >
              <td className="py-4 font-semibold text-slate-800">
                {item.product}
              </td>
              <td className="text-slate-700 font-medium">{item.category}</td>
              <td className="text-slate-700 font-medium">{item.warehouse}</td>
              <td className="text-slate-800 font-semibold">{item.stock}</td>
              <td>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    item.status === "In Stock"
                      ? "bg-emerald-100 text-emerald-700"
                      : item.status === "Low Stock"
                      ? "bg-amber-100 text-amber-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {item.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
