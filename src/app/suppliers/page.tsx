import Sidebar from "@/components/layout/Sidebar";
import StatCard from "@/components/dashboard/StatCard";
import AnalyticsChart from "@/components/dashboard/AnalyticsChart";
import ShipmentTable from "@/components/dashboard/ShipmentTable";
import InventoryTable from "@/components/dashboard/InventoryTable";
import WarehousePerformance from "@/components/dashboard/WarehousePerformance";
import ThemeToggle from "@/components/ui/ThemeToggle";
import {
  stats,
  shipments,
  inventory,
  warehouses,
} from "@/data/mockData";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 dark:bg-[#020817] transition-colors lg:flex">
      <Sidebar />

      <section className="flex-1 lg:ml-72">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">

          {/* Header */}
          <header className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between mb-8">

            <div>
              <h1 className="text-3xl sm:text-4xl xl:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
                Supply Chain Intelligence
              </h1>

              <p className="mt-3 text-slate-500 dark:text-slate-400 text-base sm:text-lg">
                Operational analytics and logistics monitoring platform.
              </p>
            </div>

            <div className="self-start lg:self-auto">
              <ThemeToggle />
            </div>
          </header>

          {/* KPI Cards */}

          <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

            {stats.map((stat) => (
              <StatCard
                key={stat.title}
                title={stat.title}
                value={stat.value}
                change={stat.change}
              />
            ))}

          </section>

          {/* Analytics */}

          <section className="mt-8">
            <AnalyticsChart />
          </section>

          {/* Tables */}

          <section className="mt-8 space-y-8">

            <ShipmentTable data={shipments} />

            <InventoryTable data={inventory} />

            <WarehousePerformance data={warehouses} />

          </section>

        </div>
      </section>
    </main>
  );
}