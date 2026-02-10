import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 border-b border-slate-800/70 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="h-px w-full bg-linear-to-r from-transparent via-cyan-400/25 to-transparent" />
          <div className="flex h-16 items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-lg bg-linear-to-br from-cyan-300 via-sky-400 to-indigo-400" />
              <div className="leading-tight">
                <div className="font-display text-lg font-bold tracking-wide text-white">
                  APEX ARENAS
                </div>
                <div className="text-xs text-slate-400">SuperAdmin Console</div>
              </div>
            </Link>

            <Link
              to="/"
              className="inline-flex items-center rounded-lg px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
            >
              Back to landing
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="mx-auto max-w-md rounded-2xl border border-slate-800/70 bg-slate-950/40 p-6">
          <h1 className="font-display text-2xl font-bold text-white">
            Sign in
          </h1>
          <p className="mt-1 text-sm text-slate-400 font-body">
            Use your SuperAdmin credentials to continue.
          </p>

          <form className="mt-6 grid gap-4">
            <label className="grid gap-2">
              <span className="text-xs text-slate-400">Email</span>
              <input
                type="email"
                autoComplete="email"
                className="h-11 rounded-lg border border-slate-800/70 bg-slate-950/50 px-3 text-sm text-white outline-none focus:border-cyan-400/60"
                placeholder="admin@apexarenas.com"
              />
            </label>

            <label className="grid gap-2">
              <span className="text-xs text-slate-400">Password</span>
              <input
                type="password"
                autoComplete="current-password"
                className="h-11 rounded-lg border border-slate-800/70 bg-slate-950/50 px-3 text-sm text-white outline-none focus:border-cyan-400/60"
                placeholder="••••••••"
              />
            </label>

            <button
              type="button"
              className="mt-2 inline-flex h-11 items-center justify-center rounded-lg bg-linear-to-r from-cyan-300 via-sky-400 to-indigo-400 px-4 text-sm font-semibold text-slate-950 transition-shadow hover:shadow-md hover:shadow-cyan-500/30"
            >
              Sign in
            </button>

            <p className="text-xs text-slate-500">
              This is a UI route only (no auth wired yet).
            </p>
          </form>
        </div>
      </main>
    </div>
  );
}
