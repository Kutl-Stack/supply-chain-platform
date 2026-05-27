"use client";

import { useEffect, useState } from "react";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
}

function useCountUp(target: string) {
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    const numeric = parseFloat(target.replace(/[^0-9.]/g, ""));
    if (isNaN(numeric)) {
      setDisplay(target);
      return;
    }

    const prefix = target.match(/^[^0-9]*/)?.[0] ?? "";
    const suffix = target.match(/[^0-9.]+$/)?.[0] ?? "";
    const duration = 1200;
    const steps = 40;
    const increment = numeric / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current += increment;
      if (step >= steps) {
        setDisplay(target);
        clearInterval(timer);
      } else {
        const formatted = Number.isInteger(numeric)
          ? Math.floor(current).toLocaleString()
          : current.toFixed(1);
        setDisplay(`${prefix}${formatted}${suffix}`);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [target]);

  return display;
}

export default function StatCard({ title, value, change }: StatCardProps) {
  const animatedValue = useCountUp(value);

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm transition-colors">
      <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
        {title}
      </p>

      <div className="flex items-end justify-between mt-5">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
          {animatedValue}
        </h2>

        <span
          className={`font-semibold text-sm ${
            change.startsWith("-") ? "text-red-500" : "text-emerald-500"
          }`}
        >
          {change}
        </span>
      </div>
    </div>
  );
}