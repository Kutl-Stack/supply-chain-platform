"use client";

import { useEffect, useState } from "react";

interface ToastProps {
  message: string;
  type?: "success" | "error" | "info";
  onClose: () => void;
}

export function Toast({ message, type = "success", onClose }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const colors = {
    success: "bg-emerald-500",
    error: "bg-red-500",
    info: "bg-indigo-500",
  };

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 ${colors[type]} text-white px-6 py-4 rounded-2xl shadow-lg flex items-center gap-4 animate-fade-in`}
    >
      <span className="font-medium">{message}</span>
      <button onClick={onClose} className="text-white/70 hover:text-white text-lg">
        ✕
      </button>
    </div>
  );
}

export function useToast() {
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error" | "info";
  } | null>(null);

  function showToast(message: string, type: "success" | "error" | "info" = "success") {
    setToast({ message, type });
  }

  function hideToast() {
    setToast(null);
  }

  return { toast, showToast, hideToast };
}