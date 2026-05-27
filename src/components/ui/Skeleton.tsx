export function SkeletonCard() {
  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm animate-pulse">
      <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-1/2 mb-5" />
      <div className="h-8 bg-slate-200 dark:bg-slate-700 rounded w-3/4" />
    </div>
  );
}

export function SkeletonTable() {
  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm animate-pulse">
      <div className="h-6 bg-slate-200 dark:bg-slate-700 rounded w-1/4 mb-6" />
      <div className="space-y-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-full" />
        ))}
      </div>
    </div>
  );
}

export function SkeletonChart() {
  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm animate-pulse">
      <div className="h-6 bg-slate-200 dark:bg-slate-700 rounded w-1/4 mb-6" />
      <div className="h-80 bg-slate-200 dark:bg-slate-700 rounded" />
    </div>
  );
}