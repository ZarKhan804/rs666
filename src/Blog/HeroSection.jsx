import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gray-400 text-gray-900">

      {/* ================= BACKGROUND EFFECTS ================= */}
      <div className="pointer-events-none absolute inset-0">

        <div className="absolute left-1/2 top-[-180px] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-yellow-400/20 blur-[120px]" />

        <div className="absolute left-[-150px] top-1/2 h-[350px] w-[350px] -translate-y-1/2 rounded-full bg-amber-500/15 blur-[100px]" />

        <div className="absolute right-[-150px] bottom-[-100px] h-[350px] w-[350px] rounded-full bg-yellow-300/15 blur-[100px]" />

      </div>

      {/* ================= TOP ACCENT ================= */}
      <div className="relative h-[2px] w-full bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />

      {/* ================= HERO CONTENT ================= */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="flex min-h-[520px] items-center justify-center py-12 lg:py-16">

          {/* ================= CENTER CONTENT ================= */}
          <div className="w-full max-w-4xl text-center">

            {/* Small Label */}
            <div className="mb-6 inline-flex items-center rounded-full border border-yellow-600/30 bg-white/30 px-4 py-2 shadow-sm backdrop-blur-sm">

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-yellow-800">
                666RS Game Blog
              </span>

            </div>

            {/* Main Heading */}
            <h1 className="text-4xl font-black leading-tight tracking-tight text-gray-950 sm:text-5xl lg:text-6xl">

              666RS Game –{" "}

              <span className="text-yellow-700">
                Complete Guide for Beginners
              </span>

            </h1>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-700 sm:text-lg">

              Explore our complete guide to 666RS Game and learn about
              666RS App, 666RS APK, 666RS Game Download, 666RS Login,
              666RS Registration, 666RS Games, deposits, withdrawals,
              JazzCash, Easypaisa, account security, and responsible
              gaming in one simple guide.

            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

              {/* Read Article */}
              <a
                href="#blog-article"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-400 px-6 py-3.5 text-sm font-extrabold text-gray-950 shadow-lg shadow-yellow-600/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-yellow-600/30"
              >
                Read Full Guide
              </a>

              {/* Explore Games */}
              <Link
                to="/download"
                className="inline-flex items-center justify-center rounded-xl border border-gray-700/30 bg-white/30 px-6 py-3.5 text-sm font-bold text-gray-800 backdrop-blur-sm transition-all duration-300 hover:border-yellow-600/40 hover:bg-yellow-400/20 hover:text-yellow-800"
              >
                Explore 666RS
              </Link>

            </div>

            {/* Information */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-5">

              <div className="text-sm text-gray-700">
                Beginner Friendly Guide
              </div>

              <div className="hidden h-4 w-px bg-gray-700/30 sm:block" />

              <div className="text-sm text-gray-700">
                666RS Gaming Information
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default HeroSection;