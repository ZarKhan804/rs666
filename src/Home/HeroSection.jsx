function HeroSection() {
  const gameImage =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB_WP8_RE8VQ3n5hRA6qQGwJ17yuor8qbHdXmmqvmLz4yzvNfun1p7YVcg&s=10";

  const gameUrl = "https://666rs2fs.com/s/80A66581142";

  return (
    <section
      aria-labelledby="666rs-home-title"
      className="relative overflow-hidden bg-gray-400 text-gray-950"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
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
          {/* LEFT CONTENT */}
          <div className="order-1">
            <div className="mb-5 inline-flex items-center rounded-full border border-yellow-600/30 bg-gray-300 px-4 py-2 shadow-sm backdrop-blur-sm">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-800">
                666RS Game Pakistan
              </span>
            </div>

            <h1
              id="666rs-home-title"
              className="text-4xl font-black leading-[1.05] tracking-tight text-gray-950 sm:text-5xl md:text-6xl lg:text-[4rem]"
            >
              666RS Game
              <span className="block text-yellow-700">
                Download & Online Gaming
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-gray-800 sm:text-lg sm:leading-8">
              Explore 666RS Game Pakistan, learn about 666RS Game Download,
              666RS APK Download, mobile access, gaming features, account
              information, and useful guides for visitors researching the 666RS
              App.
            </p>

            {/* BUTTONS */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              {/* DOWNLOAD NOW */}
              <a
                href={gameUrl}
                target="_blank"
                rel="nofollow sponsored noopener noreferrer"
                aria-label="Download Now - 666RS Game"
                className="inline-flex min-h-[52px] w-full items-center justify-center rounded-xl bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500 px-8 py-3.5 text-sm font-extrabold text-gray-950 shadow-lg shadow-yellow-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl sm:w-auto sm:min-w-[170px]"
              >
                Download Now
              </a>

              {/* LEARN MORE - DUMMY BUTTON */}
              <button
                type="button"
                aria-label="Learn More"
                className="inline-flex min-h-[52px] w-full items-center justify-center rounded-xl border border-gray-300 bg-gray-300 px-8 py-3.5 text-sm font-bold text-gray-900 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-yellow-500 hover:bg-yellow-100 hover:text-yellow-800 sm:w-auto sm:min-w-[170px]"
              >
                Learn More
              </button>
            </div>

            {/* FEATURES */}
            <div className="mt-8 flex flex-wrap gap-5">
              <div>
                <p className="text-xs font-bold text-gray-950">666RS Game</p>

                <p className="mt-0.5 text-[11px] text-gray-700">
                  Pakistan gaming information
                </p>
              </div>

              <div className="hidden h-9 w-px bg-gray-500 sm:block" />

              <div>
                <p className="text-xs font-bold text-gray-950">
                  666RS Download
                </p>

                <p className="mt-0.5 text-[11px] text-gray-700">
                  Mobile access guide
                </p>
              </div>

              <div className="hidden h-9 w-px bg-gray-500 sm:block" />

              <div>
                <p className="text-xs font-bold text-gray-950">666RS APK</p>

                <p className="mt-0.5 text-[11px] text-gray-700">
                  Android information
                </p>
              </div>
            </div>

            {/* SUPPORTING KEYWORD CONTENT */}
            <div className="mt-7 max-w-xl">
              <p className="text-sm leading-7 text-gray-700">
                Looking for <strong>666RS Game Download</strong>,
                <strong> 666RS APK Download</strong>, or information about the
                <strong> 666RS App</strong>? Explore the website for platform
                information, mobile guides, account resources, and related
                gaming content.
              </p>
            </div>
          </div>

          {/* DESKTOP IMAGE */}
          <div className="order-2 hidden lg:block mb-20">
            <GameImage gameImage={gameImage} gameUrl={gameUrl} />
          </div>

          {/* MOBILE IMAGE */}
          <div className="order-2 block lg:hidden">
            <GameImage gameImage={gameImage} gameUrl={gameUrl} />
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-600/60 to-transparent"
      />
    </section>
  );
}

function GameImage({ gameImage, gameUrl }) {
  return (
    <div className="relative mx-auto w-full max-w-[560px]">
      {/* SIMPLE GLOW - NO IMAGE HOVER ZOOM */}
      <div
        aria-hidden="true"
        className="absolute -inset-5 rounded-[2rem] bg-yellow-400/20 blur-3xl"
      />

      {/* DECORATIVE CIRCLES */}
      <div
        aria-hidden="true"
        className="absolute -right-5 -top-5 h-20 w-20 rounded-full border border-yellow-600/20 bg-yellow-400/10"
      />

      <div
        aria-hidden="true"
        className="absolute -bottom-5 -left-5 h-16 w-16 rounded-full border border-yellow-600/20 bg-yellow-400/10"
      />

      {/* CLICKABLE IMAGE */}
      <a
        href={gameUrl}
        target="_blank"
        rel="nofollow sponsored noopener noreferrer"
        aria-label="Download 666RS Game"
        className="relative block"
      >
        <div className="relative overflow-hidden rounded-[1.75rem] border border-gray-300 bg-gray-300 p-2 shadow-2xl shadow-gray-500/30">
          <div className="overflow-hidden rounded-[1.35rem]">
            <img
              src={gameImage}
              alt="666RS Game online gaming platform in Pakistan"
              width="1200"
              height="675"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="block h-auto max-h-[620px] w-full object-cover"
            />
          </div>
        </div>
      </a>
    </div>
  );
}

export default HeroSection;
