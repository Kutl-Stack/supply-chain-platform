// src/data/mockData.ts
export const stats = [
  {
    title: "Total Revenue",
    value: "R2,483,000",
    change: "+12.5%",
  },
  {
    title: "Active Shipments",
    value: "842",
    change: "+8.2%",
  },
  {
    title: "Warehouses",
    value: "16",
    change: "+2.1%",
  },
  {
    title: "Low Stock Alerts",
    value: "23",
    change: "-4.3%",
  },
];
export const shipments = [
  { id: 1, destination: "Cape Town", status: "In Transit" },
  { id: 2, destination: "Durban", status: "Delivered" },
  { id: 3, destination: "Johannesburg", status: "Pending" },
];
export const inventory = [
  { id: 1, item: "Steel Rods", stock: 1200 },
  { id: 2, item: "Copper Wire", stock: 450 },
  { id: 3, item: "Plastic Sheets", stock: 80 },
];
export const warehouses = [
  { id: "JHB-01", name: "Johannesburg Main", city: "Johannesburg", capacity: 91, shipments: 312, alerts: 2, status: "Operational" },
  { id: "CPT-02", name: "Cape Town North", city: "Cape Town", capacity: 78, shipments: 198, alerts: 0, status: "Operational" },
  { id: "DBN-01", name: "Durban Port", city: "Durban", capacity: 85, shipments: 241, alerts: 1, status: "Operational" },
  { id: "PRE-01", name: "Pretoria East", city: "Pretoria", capacity: 63, shipments: 142, alerts: 5, status: "Maintenance" },
  { id: "PLZ-01", name: "Gqeberha Logistics", city: "Gqeberha", capacity: 55, shipments: 89, alerts: 8, status: "At Risk" },
];