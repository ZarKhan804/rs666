function HeroSection() {
  const gameImage =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB_WP8_RE8VQ3n5hRA6qQGwJ17yuor8qbHdXmmqvmLz4yzvNfun1p7YVcg&s=10";

  const gameUrl = "https://666rs2fs.com/s/80A66581142";

  return (
    <section className="relative overflow-hidden bg-gray-400 text-gray-950">

      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0">

        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-yellow-400/20 blur-3xl" />

        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-yellow-500/15 blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#111 1px, transparent 1px), linear-gradient(90deg, #111 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-12">

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

          {/* ================= LEFT CONTENT ================= */}

          <div className="order-1 lg:order-1">

            {/* Welcome Label */}
            <div className="mb-5 inline-flex items-center rounded-full border border-yellow-600/30 bg-gray-300 px-4 py-2 shadow-sm backdrop-blur-sm">

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-800">
                Welcome to 666RS Game
              </span>

            </div>

            {/* Heading */}
            <h1 className="text-4xl font-black leading-[1.05] tracking-tight text-gray-950 sm:text-5xl md:text-6xl lg:text-[4rem]">

              Welcome to{" "}

              <span className="text-yellow-700">
                666RS
              </span>

              <br />

              <span className="text-gray-950">
                Game
              </span>

            </h1>

            {/* Mobile Image */}
            <div className="mt-8 block lg:hidden">

              <GameImage
                gameImage={gameImage}
                gameUrl={gameUrl}
              />

            </div>

            {/* Buttons */}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">

              <a
                href={gameUrl}
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500 px-6 py-3.5 text-sm font-extrabold text-gray-950 shadow-lg shadow-yellow-500/20 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >

                <span>
                  Download Game
                </span>

                <span className="transition group-hover:translate-x-1">
                  →
                </span>

              </a>

              <a
                href={gameUrl}
                className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-gray-300 px-6 py-3.5 text-sm font-bold text-gray-900 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-yellow-500 hover:bg-yellow-100 hover:text-yellow-800"
              >

                Play Now

              </a>

            </div>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base leading-7 text-gray-800 sm:text-lg sm:leading-8">
              Explore 666RS Game, discover new gaming options, and
              enjoy a simple online gaming experience from your device.
            </p>

            {/* Features */}
            <div className="mt-8 flex flex-wrap gap-5">

              {/* Feature 1 */}
              <div>

                <p className="text-xs font-bold text-gray-950">
                  Smooth Gaming
                </p>

                <p className="mt-0.5 text-[11px] text-gray-700">
                  Fast & responsive
                </p>

              </div>

              {/* Divider */}
              <div className="hidden h-9 w-px bg-gray-500 sm:block" />

              {/* Feature 2 */}
              <div>

                <p className="text-xs font-bold text-gray-950">
                  Easy Access
                </p>

                <p className="mt-0.5 text-[11px] text-gray-700">
                  Get started quickly
                </p>

              </div>

            </div>

          </div>

          {/* ================= DESKTOP IMAGE ================= */}

          <div className="order-2 hidden lg:block">

            <GameImage
              gameImage={gameImage}
              gameUrl={gameUrl}
            />

          </div>

        </div>

      </div>

      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-600/60 to-transparent" />

    </section>
  );
}


/* ================= GAME IMAGE COMPONENT ================= */

function GameImage({ gameImage, gameUrl }) {

  return (
    <div className="relative mx-auto w-full max-w-[560px]">

      {/* Glow */}
      <div className="absolute -inset-5 rounded-[2rem] bg-yellow-400/20 blur-3xl" />

      {/* Decorative Circles */}
      <div className="absolute -right-5 -top-5 h-20 w-20 rounded-full border border-yellow-600/20 bg-yellow-400/10" />

      <div className="absolute -bottom-5 -left-5 h-16 w-16 rounded-full border border-yellow-600/20 bg-yellow-400/10" />

      {/* Clickable Image */}
      <a
        href={gameUrl}
        aria-label="Open 666RS Game"
        className="group relative block"
      >

        <div className="relative overflow-hidden rounded-[1.75rem] border border-gray-300 bg-gray-300 p-2 shadow-2xl shadow-gray-500/30 transition duration-500 group-hover:-translate-y-2 group-hover:border-yellow-500/60 group-hover:shadow-yellow-500/20">

          <div className="overflow-hidden rounded-[1.35rem]">

            <img
              src={gameImage}
              alt="666RS Game"
              className="block h-auto max-h-[620px] w-full object-cover transition duration-700 group-hover:scale-105"
            />

          </div>

        </div>

      </a>

    </div>
  );
}

export default HeroSection;