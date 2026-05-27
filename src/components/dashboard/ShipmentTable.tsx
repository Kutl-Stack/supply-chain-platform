interface Shipment {
  id: number;
  destination: string;
  status: string;
}

interface ShipmentTableProps {
  data: Shipment[];
}

export default function ShipmentTable({ data }: ShipmentTableProps) {
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
          </tr>
        </thead>

        <tbody>
          {data.map((shipment) => (
            <tr
              key={shipment.id}
              className="border-b hover:bg-slate-50 transition"
            >
              <td className="py-4 font-semibold text-slate-800">
                {shipment.id}
              </td>
              <td className="text-slate-700 font-medium">
                {shipment.destination}
              </td>
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}