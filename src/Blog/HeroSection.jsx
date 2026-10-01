import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section
      aria-labelledby="blog-666rs-heading"
      className="relative overflow-hidden bg-gray-200 text-gray-900"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-1/2 top-[-180px] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-yellow-400/20 blur-[120px]" />

        <div className="absolute left-[-150px] top-1/2 h-[350px] w-[350px] -translate-y-1/2 rounded-full bg-amber-500/15 blur-[100px]" />

        <div className="absolute bottom-[-100px] right-[-150px] h-[350px] w-[350px] rounded-full bg-yellow-300/15 blur-[100px]" />
      </div>

      <div className="relative h-[2px] w-full bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-[520px] items-center justify-center py-12 lg:py-16">
          <div className="w-full max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center rounded-full border border-yellow-600/30 bg-white/40 px-4 py-2 shadow-sm backdrop-blur-sm">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-yellow-800">
                666RS Game Blog
              </span>
            </div>

            <h1
              id="blog-666rs-heading"
              className="text-4xl font-black leading-tight tracking-tight text-gray-950 sm:text-5xl lg:text-6xl"
            >
              666RS Game
              <span className="block text-yellow-700">
                Gaming Guides & Information
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-700 sm:text-lg">
              Explore practical information about the 666RS platform, mobile
              access, application topics, account guidance, gaming resources
              and related website information.
            </p>

            <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-gray-600 sm:text-base">
              Browse the guides below to learn about commonly searched
              platform topics and find relevant sections of the website.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="#blog-666rs-article"
                aria-label="Read the 666RS Game guide"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-400 px-7 py-3.5 text-sm font-extrabold text-gray-950 shadow-lg shadow-yellow-600/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-yellow-600/30"
              >
                Read Full Guide
              </a>

              <Link
                to="/about-us"
                className="inline-flex items-center justify-center rounded-xl border border-gray-700/30 bg-white/40 px-7 py-3.5 text-sm font-bold text-gray-800 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-yellow-600/40 hover:bg-yellow-400/20 hover:text-yellow-800"
              >
                About 666RS
              </Link>
            </div>

            <nav
              aria-label="Blog navigation"
              className="mt-8 flex flex-wrap justify-center gap-3"
            >
              <Link
                to="/"
                className="rounded-xl border border-gray-300 bg-white px-5 py-3 text-sm font-bold text-gray-800 transition hover:-translate-y-1 hover:border-yellow-500 hover:text-yellow-700"
              >
                Home
              </Link>

              <Link
                to="/about-us"
                className="rounded-xl border border-gray-300 bg-white px-5 py-3 text-sm font-bold text-gray-800 transition hover:-translate-y-1 hover:border-yellow-500 hover:text-yellow-700"
              >
                About
              </Link>

              <Link
                to="/download"
                className="rounded-xl border border-gray-300 bg-white px-5 py-3 text-sm font-bold text-gray-800 transition hover:-translate-y-1 hover:border-yellow-500 hover:text-yellow-700"
              >
                Download
              </Link>

              <Link
                to="/contact"
                className="rounded-xl border border-gray-300 bg-white px-5 py-3 text-sm font-bold text-gray-800 transition hover:-translate-y-1 hover:border-yellow-500 hover:text-yellow-700"
              >
                Contact
              </Link>
            </nav>

            <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-gray-300 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:shadow-md">
                <h2 className="text-2xl font-extrabold text-yellow-600">
                  Gaming
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Platform and game information
                </p>
              </div>

              <div className="rounded-2xl border border-gray-300 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:shadow-md">
                <h2 className="text-2xl font-extrabold text-yellow-600">
                  Mobile
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  App, APK and access topics
                </p>
              </div>

              <div className="rounded-2xl border border-gray-300 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:shadow-md">
                <h2 className="text-2xl font-extrabold text-yellow-600">
                  Guides
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Account and gaming resources
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}