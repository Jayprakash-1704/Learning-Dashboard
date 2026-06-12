export function DashboardShellSkeleton() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(110,231,183,0.12),_transparent_30%),linear-gradient(180deg,#050816_0%,#060913_100%)] px-4 py-4 sm:px-6 lg:px-8 lg:py-8">
      <div className="mx-auto flex min-h-[calc(100vh-2rem)] max-w-[1600px] gap-6">
        <aside className="hidden w-72 shrink-0 rounded-[2rem] border border-white/[0.08] bg-white/[0.05] p-4 lg:block">
          <div className="h-12 w-40 animate-pulse rounded-2xl bg-white/[0.08]" />
          <div className="mt-8 space-y-3">
            <div className="h-12 animate-pulse rounded-2xl bg-white/[0.06]" />
            <div className="h-12 animate-pulse rounded-2xl bg-white/[0.06]" />
            <div className="h-12 animate-pulse rounded-2xl bg-white/[0.06]" />
            <div className="h-12 animate-pulse rounded-2xl bg-white/[0.06]" />
          </div>
        </aside>

        <main className="flex-1 space-y-6">
          <section className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-12">
            <div className="h-[26rem] rounded-[2rem] border border-white/[0.08] bg-white/[0.05] p-6 md:col-span-2 xl:col-span-7">
              <div className="h-6 w-44 animate-pulse rounded-full bg-white/[0.08]" />
              <div className="mt-8 h-12 w-4/5 animate-pulse rounded-2xl bg-white/[0.08]" />
              <div className="mt-4 h-4 w-2/3 animate-pulse rounded-full bg-white/[0.08]" />
            </div>
            <div className="h-[26rem] rounded-[2rem] border border-white/[0.08] bg-white/[0.05] p-6 md:col-span-2 xl:col-span-5">
              <div className="h-6 w-36 animate-pulse rounded-full bg-white/[0.08]" />
              <div className="mt-8 h-56 animate-pulse rounded-[1.5rem] bg-white/[0.08]" />
            </div>
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="h-64 rounded-[1.9rem] border border-white/[0.08] bg-white/[0.05] p-5 md:col-span-1"
              >
                <div className="h-10 w-10 animate-pulse rounded-2xl bg-white/[0.08]" />
                <div className="mt-5 h-5 w-3/4 animate-pulse rounded-full bg-white/[0.08]" />
                <div className="mt-3 h-4 w-full animate-pulse rounded-full bg-white/[0.08]" />
                <div className="mt-4 h-2 w-full animate-pulse rounded-full bg-white/[0.08]" />
              </div>
            ))}
          </section>
        </main>
      </div>
    </div>
  );
}