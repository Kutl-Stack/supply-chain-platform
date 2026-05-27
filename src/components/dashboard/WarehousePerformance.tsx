const warehouses = [
  {
    name: "Johannesburg Hub",
    utilization: 82,
  },
  {
    name: "Cape Town Distribution",
    utilization: 67,
  },
  {
    name: "Durban Logistics",
    utilization: 91,
  },
  {
    name: "Pretoria Storage",
    utilization: 58,
  },
];

export default function WarehousePerformance() {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 mt-10 shadow-sm">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900">
          Warehouse Performance
        </h2>

        <p className="text-slate-500 mt-1">
          Operational capacity and utilization metrics.
        </p>
      </div>

      <div className="space-y-6">
        {warehouses.map((warehouse) => (
          <div key={warehouse.name}>
            <div className="flex justify-between mb-2">
              <span className="font-medium text-slate-700">
                {warehouse.name}
              </span>

              <span className="text-sm font-semibold text-slate-500">
                {warehouse.utilization}%
              </span>
            </div>

            <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full ${
                  warehouse.utilization >= 85
                    ? "bg-emerald-500"
                    : warehouse.utilization >= 70
                    ? "bg-blue-500"
                    : "bg-amber-500"
                }`}
                style={{
                  width: `${warehouse.utilization}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
