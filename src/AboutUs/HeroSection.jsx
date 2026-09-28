
export default function HeroSection() {
  return (
    <section
      aria-labelledby="about-666rs-heading"
      className="relative overflow-hidden bg-gray-200 text-gray-900"
    >
      {/* ================= BACKGROUND EFFECTS ================= */}
      <div className="pointer-events-none absolute inset-0">

        <div className="absolute left-1/2 top-[-180px] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-yellow-400/20 blur-[120px]" />

        <div className="absolute left-[-150px] top-1/2 h-[350px] w-[350px] -translate-y-1/2 rounded-full bg-amber-500/15 blur-[100px]" />

        <div className="absolute bottom-[-100px] right-[-150px] h-[350px] w-[350px] rounded-full bg-yellow-300/15 blur-[100px]" />

      </div>

      {/* ================= TOP ACCENT ================= */}
      <div className="relative h-[2px] w-full bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />

      {/* ================= HERO CONTENT ================= */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="flex min-h-[520px] items-center justify-center py-12 lg:py-16">

          <div className="w-full max-w-4xl text-center">

            {/* ================= LABEL ================= */}
            <div className="mb-6 inline-flex items-center rounded-full border border-yellow-600/30 bg-white/30 px-4 py-2 shadow-sm backdrop-blur-sm">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-yellow-800">
                About 666RS Game
              </span>
            </div>

            {/* ================= H1 ================= */}
            <h1
              id="about-666rs-heading"
              className="text-4xl font-black leading-tight tracking-tight text-gray-950 sm:text-5xl lg:text-6xl"
            >
              About 666RS Game

              <span className="block text-yellow-700">
                Complete Gaming Platform Guide
              </span>
            </h1>

            {/* ================= DESCRIPTION ================= */}
            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-700 sm:text-lg">
              Learn more about 666RS Game Pakistan, 666RS Game Download,
              666RS APK, mobile access, platform features, account information,
              gaming resources and useful guides for visitors researching
              666RS online gaming.
            </p>

            {/* ================= INFORMATION BUTTONS ================= */}
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

              {/* Dummy / Informational Button */}
              <button
                type="button"
                disabled
                className="inline-flex cursor-default items-center justify-center rounded-xl bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-400 px-7 py-3.5 text-sm font-extrabold text-gray-950 shadow-lg shadow-yellow-600/20"
              >
                Platform Overview
              </button>

              {/* Dummy / Informational Button */}
              <button
                type="button"
                disabled
                className="inline-flex cursor-default items-center justify-center rounded-xl border border-gray-700/30 bg-white/40 px-7 py-3.5 text-sm font-bold text-gray-800 backdrop-blur-sm"
              >
                Gaming Information
              </button>

            </div>

            {/* ================= HIGHLIGHTS ================= */}
            <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-3">

              <div className="rounded-2xl border border-gray-300 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:shadow-md">
                <h2 className="text-2xl font-extrabold text-yellow-600">
                  Gaming
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  666RS Platform Information
                </p>
              </div>

              <div className="rounded-2xl border border-gray-300 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:shadow-md">
                <h2 className="text-2xl font-extrabold text-yellow-600">
                  Mobile
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Mobile & APK Information
                </p>
              </div>

              <div className="rounded-2xl border border-gray-300 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:shadow-md">
                <h2 className="text-2xl font-extrabold text-yellow-600">
                  Guides
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Helpful Gaming Resources
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

