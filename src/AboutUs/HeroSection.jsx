import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section
      aria-labelledby="about-666rs-heading"
      className="relative overflow-hidden bg-gray-200 text-gray-900"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-1/2 top-[-180px] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-yellow-400/20 blur-[120px]" />

        <div className="absolute left-[-150px] top-1/2 h-[350px] w-[350px] -translate-y-1/2 rounded-full bg-amber-500/15 blur-[100px]" />

        <div className="absolute bottom-[-100px] right-[-150px] h-[350px] w-[350px] rounded-full bg-yellow-300/15 blur-[100px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#111 1px, transparent 1px), linear-gradient(90deg, #111 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative h-[2px] w-full bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-[500px] items-center justify-center py-12 sm:py-14 lg:py-16">
          <div className="w-full max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center rounded-full border border-yellow-600/30 bg-white/40 px-4 py-2 shadow-sm backdrop-blur-md">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-yellow-800">
                About 666RS Game
              </span>
            </div>

            <h1
              id="about-666rs-heading"
              className="text-4xl font-black leading-tight tracking-tight text-gray-950 sm:text-5xl lg:text-6xl"
            >
              About 666RS Game Pakistan
              <span className="block bg-gradient-to-r from-yellow-700 via-amber-600 to-yellow-700 bg-clip-text text-transparent">
                Gaming Platform & Information Guide
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-700 sm:text-lg">
              Learn about 666RS Game, mobile access, download information,
              gaming features, account resources and useful guides for visitors
              researching online gaming services in Pakistan.
            </p>

            <nav
              aria-label="About 666RS page navigation"
              className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"
            >
              <Link
                to="/download"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-400 px-7 py-3.5 text-sm font-extrabold text-gray-950 shadow-lg shadow-yellow-600/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-yellow-600/30"
              >
                Download Guide
              </Link>

              <Link
                to="/blog"
                className="inline-flex items-center justify-center rounded-xl border border-gray-700/30 bg-white/50 px-7 py-3.5 text-sm font-bold text-gray-800 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-yellow-500/50 hover:bg-yellow-100 hover:text-yellow-800"
              >
                Explore Gaming Guides
              </Link>
            </nav>

            <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-gray-300 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:shadow-md">
                <h2 className="text-2xl font-extrabold text-yellow-600">
                  Gaming
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Platform & gaming information
                </p>
              </div>

              <div className="rounded-2xl border border-gray-300 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:shadow-md">
                <h2 className="text-2xl font-extrabold text-yellow-600">
                  Mobile
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Mobile & APK information
                </p>
              </div>

              <div className="rounded-2xl border border-gray-300 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:shadow-md">
                <h2 className="text-2xl font-extrabold text-yellow-600">
                  Guides
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Helpful gaming resources
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}