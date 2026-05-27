"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/layout/Sidebar";
import ThemeToggle from "@/components/ui/ThemeToggle";

const warehouses = [
  { id: "JHB-01", name: "Johannesburg Main", city: "Johannesburg", capacity: 91, shipments: 312, alerts: 2, status: "Operational" },
  { id: "CPT-02", name: "Cape Town North", city: "Cape Town", capacity: 78, shipments: 198, alerts: 0, status: "Operational" },
  { id: "DBN-01", name: "Durban Port", city: "Durban", capacity: 85, shipments: 241, alerts: 1, status: "Operational" },
  { id: "PRE-01", name: "Pretoria East", city: "Pretoria", capacity: 63, shipments: 142, alerts: 5, status: "Maintenance" },
  { id: "PLZ-01", name: "Gqeberha Logistics", city: "Gqeberha", capacity: 55, shipments: 89, alerts: 8, status: "At Risk" },
];

export default function WarehousesPage() {
  const router = useRouter();

  useEffect(() => {
    const auth = localStorage.getItem("supplyiq_auth");
    if (!auth) router.push("/login");
  }, []);

  return (
    <main className="flex min-h-screen bg-slate-50 dark:bg-[#020817] transition-colors">
      <Sidebar />

      <section className="flex-1 p-10">
        <div className="flex items-start justify-between mb-10">
          <div>
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
              Warehouses
            </h1>
            <p className="mt-2 text-slate-500 dark:text-slate-400">
              Monitor all warehouse operations and capacity.
            </p>
          </div>
          <ThemeToggle />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {warehouses.map((w) => (
            <div key={w.id} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-lg">{w.name}</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">{w.city}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  w.status === "Operational" ? "bg-emerald-100 text-emerald-700"
                  : w.status === "Maintenance" ? "bg-amber-100 text-amber-700"
                  : "bg-red-100 text-red-700"
                }`}>
                  {w.status}
                </span>
              </div>

              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate-500 dark:text-slate-400">Capacity</span>
                    <span className="font-semibold text-slate-800 dark:text-white">{w.capacity}%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full">
                    <div
                      className={`h-full rounded-full ${
                        w.capacity >= 85 ? "bg-emerald-500"
                        : w.capacity >= 70 ? "bg-blue-500"
                        : "bg-amber-500"
                      }`}
                      style={{ width: `${w.capacity}%` }}
                    />
                  </div>
                </div>

                <div className="flex justify-between text-sm pt-2">
                  <span className="text-slate-500 dark:text-slate-400">Shipments</span>
                  <span className="font-semibold text-slate-800 dark:text-white">{w.shipments}</span>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-slate-500 dark:text-slate-400">Alerts</span>
                  <span className={`font-semibold ${w.alerts > 3 ? "text-red-500" : w.alerts > 0 ? "text-amber-500" : "text-emerald-500"}`}>
                    {w.alerts}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}