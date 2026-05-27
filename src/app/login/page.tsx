"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleLogin() {
    setError("");
    setLoading(true);

    setTimeout(() => {
      if (email === "admin@supplyiq.co.za" && password === "admin123") {
        localStorage.setItem("supplyiq_auth", "true");
        router.push("/");
      } else {
        setError("Invalid email or password.");
        setLoading(false);
      }
    }, 1000);
  }

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#020817] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-10">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
          SupplyIQ
        </h1>
        <p className="text-slate-500 dark:text-slate-400 mb-8">
          Sign in to your account
        </p>

        <div className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@supplyiq.co.za"
              className="w-full border border-slate-300 dark:border-slate-700 rounded-xl px-4 py-3 text-slate-800 dark:text-white dark:bg-slate-800 outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full border border-slate-300 dark:border-slate-700 rounded-xl px-4 py-3 text-slate-800 dark:text-white dark:bg-slate-800 outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}

          <button
            onClick={handleLogin}
            disabled={loading}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl transition disabled:opacity-60"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>

          <p className="text-center text-sm text-slate-400">
            Demo: admin@supplyiq.co.za / admin123
          </p>
        </div>
      </div>
    </main>
  );
}