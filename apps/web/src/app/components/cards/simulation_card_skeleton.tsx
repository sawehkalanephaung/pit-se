export function SimulationCardSkeleton() {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="aspect-video bg-slate-100 animate-pulse" />
      <div className="flex flex-1 flex-col gap-4 px-5 py-5">
        <div className="flex items-start justify-between gap-3">
          <div className="h-4 w-1/2 rounded bg-slate-200 animate-pulse" />
          <div className="h-6 w-20 rounded-full border border-slate-200 bg-slate-100 animate-pulse" />
        </div>
        <div className="h-3 w-full rounded bg-slate-200 animate-pulse" />
        <div className="h-3 w-5/6 rounded bg-slate-200 animate-pulse" />
        <div className="mt-auto h-4 w-16 rounded bg-slate-200 animate-pulse self-end" />
      </div>
    </div>
  );
}

export default SimulationCardSkeleton;
