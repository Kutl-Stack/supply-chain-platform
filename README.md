# SupplyIQ — Supply Chain Intelligence Platform

A full-stack supply chain dashboard built with Next.js, TypeScript, and Tailwind CSS.

🔗 **Live Demo:** [supply-chain-platform-three.vercel.app](https://supply-chain-platform-three.vercel.app)

> Demo credentials: admin@supplyiq.co.za / admin123

## Features

- 🔐 Authentication with protected routes
- 📊 Animated KPI stat cards
- 📈 Shipment analytics chart (Recharts)
- 📦 Inventory management with search & filters
- 🚚 Shipments tracking with status filters
- 🏭 Warehouse performance monitoring
- 🤝 Supplier network management with ratings
- 🌙 Dark mode support
- ⏳ Loading skeletons
- 🔔 Toast notifications
- 📱 Mobile responsive with hamburger menu

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Charts:** Recharts
- **Icons:** React Icons
- **Deployment:** Vercel

## Getting Started

\`\`\`bash
git clone https://github.com/Kutl-Stack/supply-chain-platform.git
cd supply-chain-platform
npm install
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

\`\`\`
src/
├── app/
│   ├── page.tsx          # Dashboard
│   ├── login/            # Login page
│   ├── shipments/        # Shipments page
│   ├── inventory/        # Inventory page
│   ├── warehouses/       # Warehouses page
│   └── suppliers/        # Suppliers page
├── components/
│   ├── dashboard/        # Dashboard components
│   ├── layout/           # Sidebar
│   └── ui/               # Reusable UI components
└── data/
    └── mockData.ts       # Mock data
\`\`\`

## Author

**Miracle Kutlwano Ejiofor**
- GitHub: [@Kutl-Stack](https://github.com/Kutl-Stack)
- LinkedIn: [miracle-ejiofor](https://linkedin.com/in/miracle-ejiofor037211223)
- Portfolio: [miracleejiofor.netlify.app](https://miracleejiofor.netlify.app)