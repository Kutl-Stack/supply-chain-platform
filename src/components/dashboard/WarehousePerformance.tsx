interface Warehouse {
  id: string;
  name: string;
  capacity: number;
}

interface WarehousePerformanceProps {
  data: Warehouse[];
}

export default function WarehousePerformance({ data }: WarehousePerformanceProps) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 mt-10 shadow-sm">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900">Warehouse Performance</h2>
        <p className="text-slate-500 mt-1">Operational capacity and utilization metrics.</p>
      </div>

      <div className="space-y-6">
        {data.map((warehouse) => (
          <div key={warehouse.id}>
            <div className="flex justify-between mb-2">
              <span className="font-medium text-slate-700">{warehouse.name}</span>
              <span className="text-sm font-semibold text-slate-500">{warehouse.capacity}%</span>
            </div>
            <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full ${
                  warehouse.capacity >= 85 ? "bg-emerald-500"
                  : warehouse.capacity >= 70 ? "bg-blue-500"
                  : "bg-amber-500"
                }`}
                style={{ width: `${warehouse.capacity}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}