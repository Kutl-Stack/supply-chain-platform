"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/layout/Sidebar";
import StatCard from "@/components/dashboard/StatCard";
import AnalyticsChart from "@/components/dashboard/AnalyticsChart";
import ShipmentTable from "@/components/dashboard/ShipmentTable";
import InventoryTable from "@/components/dashboard/InventoryTable";
import WarehousePerformance from "@/components/dashboard/WarehousePerformance";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { SkeletonCard, SkeletonChart, SkeletonTable } from "@/components/ui/Skeleton";
import { stats, shipments, inventory, warehouses } from "@/data/mockData";

export default function Home() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = localStorage.getItem("supplyiq_auth");
    if (!auth) {
      router.push("/login");
      return;
    }
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="flex min-h-screen bg-slate-50 dark:bg-[#020817] transition-colors">
      <Sidebar />

      <section className="flex-1 p-10 transition-colors">
        <div className="flex items-start justify-between mb-10">
          <div>
            <h1 className="text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
              Supply Chain Intelligence
            </h1>
            <p className="mt-3 text-slate-500 dark:text-slate-400 text-lg">
              Operational analytics and logistics monitoring platform.
            </p>
          </div>
          <div className="mt-6">
            <ThemeToggle />
          </div>
        </div>

        {/* Stat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {loading
            ? [...Array(4)].map((_, i) => <SkeletonCard key={i} />)
            : stats.map((s, i) => (
                <StatCard key={i} title={s.title} value={s.value} change={s.change} />
              ))}
        </div>

        {/* Chart */}
        <div className="mt-8">
          {loading ? <SkeletonChart /> : <AnalyticsChart />}
        </div>

        {/* Tables */}
        <div className="mt-8 space-y-8">
          {loading ? (
            <>
              <SkeletonTable />
              <SkeletonTable />
              <SkeletonTable />
            </>
          ) : (
            <>
              <ShipmentTable data={shipments} />
              <InventoryTable data={inventory} />
              <WarehousePerformance data={warehouses} />
            </>
          )}
        </div>
      </section>
    </main>
  );
}