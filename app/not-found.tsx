import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#020617] px-6">

      {/* Aurora Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">

        {/* Main Aurora */}
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/15 blur-3xl" />

        {/* Left Glow */}
        <div className="absolute left-0 top-1/3 h-[300px] w-[300px] rounded-full bg-fuchsia-500/10 blur-3xl" />

        {/* Right Glow */}
        <div className="absolute right-0 bottom-1/4 h-[280px] w-[280px] rounded-full bg-cyan-500/10 blur-3xl" />

        {/* Soft Overlay */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <section className="relative mx-auto flex max-w-2xl flex-col items-center text-center">

        {/* Tiny Label */}
        <p className="mb-6 text-xs font-medium uppercase tracking-[0.35em] text-violet-300/80">
          Error 404
        </p>

        {/* 404 */}
        <h1 className="bg-gradient-to-b from-white via-violet-200 to-violet-400 bg-clip-text text-[6rem] font-bold tracking-tight text-transparent sm:text-[8rem]">
          404
        </h1>

        {/* Heading */}
        <h2 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          You’ve drifted off the path
        </h2>

        {/* Description */}
        <p className="mt-6 max-w-xl text-base leading-8 text-slate-300/80 sm:text-lg">
          The page you’re trying to reach may have been moved,
          deleted, or perhaps never existed at all.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">

          {/* Primary */}
          <Link
            href="/"
            className="rounded-full bg-violet-600 px-7 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-violet-500"
          >
            Return Home
          </Link>

          {/* Secondary */}
          <Link
            href="/instructors"
            className="rounded-full border border-white/10 bg-white/5 px-7 py-3 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:bg-white/10"
          >
            Explore Instructors
          </Link>

        </div>
      </section>
    </main>
  );
}