"use client";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#050816] px-6 text-center text-zinc-100">
      <section className="max-w-xl rounded-[2rem] border border-white/[0.10] bg-white/[0.05] p-8 shadow-2xl shadow-black/40">
        <p className="text-xs uppercase tracking-[0.34em] text-cyan-200/70">
          Connection issue
        </p>
        <h1 className="mt-4 text-3xl font-semibold text-white">
          The dashboard could not sync.
        </h1>
        <p className="mt-4 text-sm leading-7 text-zinc-300">{error.message}</p>
        <button
          type="button"
          onClick={reset}
          className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-medium text-[#050816] transition-transform hover:scale-[1.02]"
        >
          Retry sync
        </button>
      </section>
    </div>
  );
}