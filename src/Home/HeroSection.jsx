
import { Link } from "react-router-dom";

function HeroSection() {
  const gameImage =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB_WP8_RE8VQ3n5hRA6qQGwJ17yuor8qbHdXmmqvmLz4yzvNfun1p7YVcg&s=10";

  const gameUrl = "https://666rs2fs.com/s/80A66581142";

  return (
    <section
      aria-labelledby="666rs-home-title"
      className="relative overflow-hidden bg-gray-200 text-gray-900"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-180px] h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-yellow-400/15 blur-[110px]" />

        <div className="absolute -left-32 top-1/2 h-[280px] w-[280px] -translate-y-1/2 rounded-full bg-amber-500/10 blur-[100px]" />

        <div className="absolute -bottom-32 -right-32 h-[300px] w-[300px] rounded-full bg-yellow-300/10 blur-[100px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#111 1px, transparent 1px), linear-gradient(90deg, #111 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-0 flex-col items-center py-7 sm:py-9 lg:py-10">
          <div className="mb-3 inline-flex rounded-full border border-yellow-600/30 bg-white/50 px-4 py-1.5 shadow-sm backdrop-blur-md">
            <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-yellow-800 sm:text-xs">
              Welcome to 666RS Game
            </span>
          </div>

          <h1
            id="666rs-home-title"
            className="max-w-5xl text-center text-3xl font-black leading-tight tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-5xl"
          >
            666RS Game Pakistan

            <span className="block bg-gradient-to-r from-yellow-700 via-amber-600 to-yellow-700 bg-clip-text text-transparent">
              Online Gaming & Mobile Access
            </span>
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-6 text-gray-700 sm:text-base">
            Discover 666RS Game, explore mobile gaming information, learn about
            666RS App access, and find useful resources for visitors looking for
            a simple way to reach the platform.
          </p>

          <div className="relative mt-5 w-full max-w-3xl">
            <div
              aria-hidden="true"
              className="absolute -inset-3 rounded-3xl bg-yellow-400/15 blur-2xl"
            />

            <a
              href={gameUrl}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              aria-label="Access 666RS Game"
              className="group relative block"
            >
              <div className="relative overflow-hidden rounded-2xl border border-yellow-500/30 bg-gray-300/80 p-1.5 shadow-xl transition-all duration-300 group-hover:-translate-y-1 group-hover:border-yellow-500/70 group-hover:shadow-yellow-500/20">
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={gameImage}
                    alt="666RS Game Pakistan online gaming platform"
                    width="1000"
                    height="420"
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                    className="block h-[150px] w-full object-cover object-center transition duration-500 group-hover:scale-[1.02] sm:h-[190px] md:h-[220px] lg:h-[240px]"
                  />

                  <div className="absolute inset-0 flex items-center justify-center bg-black/5 transition duration-300 group-hover:bg-black/10">
                    <span className="rounded-full bg-white/90 px-4 py-2 text-xs font-extrabold text-gray-900 shadow-lg backdrop-blur-sm sm:text-sm">
                      Explore 666RS Game
                    </span>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={gameUrl}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              aria-label="Access 666RS Game"
              className="inline-flex min-w-[210px] items-center justify-center rounded-xl bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-400 px-7 py-3.5 text-sm font-black text-gray-950 shadow-lg shadow-yellow-600/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-yellow-600/30"
            >
              Download Game
            </a>
          </div>

          <nav
            aria-label="666RS website navigation"
            className="mt-4 flex flex-wrap items-center justify-center gap-2"
          >
            <Link
              to="/"
              className="rounded-lg border border-gray-700/20 bg-white/50 px-4 py-2 text-xs font-bold text-gray-800 backdrop-blur-sm transition hover:border-yellow-500/50 hover:bg-yellow-400/20 hover:text-yellow-800"
            >
              Home
            </Link>

            <Link
              to="/about"
              className="rounded-lg border border-gray-700/20 bg-white/50 px-4 py-2 text-xs font-bold text-gray-800 backdrop-blur-sm transition hover:border-yellow-500/50 hover:bg-yellow-400/20 hover:text-yellow-800"
            >
              About
            </Link>

            <Link
              to="/blog"
              className="rounded-lg border border-gray-700/20 bg-white/50 px-4 py-2 text-xs font-bold text-gray-800 backdrop-blur-sm transition hover:border-yellow-500/50 hover:bg-yellow-400/20 hover:text-yellow-800"
            >
              Blog
            </Link>

            <Link
              to="/download"
              className="rounded-lg border border-gray-700/20 bg-white/50 px-4 py-2 text-xs font-bold text-gray-800 backdrop-blur-sm transition hover:border-yellow-500/50 hover:bg-yellow-400/20 hover:text-yellow-800"
            >
              Download
            </Link>

            <Link
              to="/contact"
              className="rounded-lg border border-gray-700/20 bg-white/50 px-4 py-2 text-xs font-bold text-gray-800 backdrop-blur-sm transition hover:border-yellow-500/50 hover:bg-yellow-400/20 hover:text-yellow-800"
            >
              Contact
            </Link>
          </nav>

          <p className="mt-5 max-w-2xl text-center text-xs leading-5 text-gray-600">
            Learn more about 666RS Game, mobile access, app information and
            related gaming resources through the pages available on this
            website.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

