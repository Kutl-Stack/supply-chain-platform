const shipments = [
  {
    id: "SH-1024",
    destination: "Johannesburg",
    status: "In Transit",
    value: "R120,000",
  },
  {
    id: "SH-1025",
    destination: "Cape Town",
    status: "Delivered",
    value: "R84,500",
  },
  {
    id: "SH-1026",
    destination: "Durban",
    status: "Pending",
    value: "R43,900",
  },
  {
    id: "SH-1027",
    destination: "Pretoria",
    status: "In Transit",
    value: "R67,200",
  },
];

export default function ShipmentTable() {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 mt-10 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-slate-900">Recent Shipments</h2>
        <button className="text-indigo-600 font-medium hover:underline">
          View All
        </button>
      </div>

      <table className="w-full">
        <thead>
          <tr className="text-left text-slate-500 border-b">
            <th className="pb-4">Shipment ID</th>
            <th className="pb-4">Destination</th>
            <th className="pb-4">Status</th>
            <th className="pb-4">Value</th>
          </tr>
        </thead>

        <tbody>
          {shipments.map((shipment) => (
            <tr
              key={shipment.id}
              className="border-b hover:bg-slate-50 transition"
            >
              <td className="py-4 font-semibold text-slate-800">{shipment.id}</td>
              <td className="text-slate-700 font-medium">{shipment.destination}</td>
              <td>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    shipment.status === "Delivered"
                      ? "bg-emerald-100 text-emerald-700"
                      : shipment.status === "Pending"
                      ? "bg-amber-100 text-amber-700"
                      : "bg-indigo-100 text-indigo-700"
                  }`}
                >
                  {shipment.status}
                </span>
              </td>
              <td className="text-slate-800 font-semibold">{shipment.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
