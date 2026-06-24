export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 text-xl font-bold text-white shadow-lg">
        SI
      </div>

      <div>
        <h1 className="text-lg font-bold text-white tracking-wide">
          SupplyIQ
        </h1>

        <p className="text-xs text-slate-400">
          Supply Chain Intelligence
        </p>
      </div>
    </div>
  );
}