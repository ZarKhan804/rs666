function HeroSection() {
  const gameImage =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB_WP8_RE8VQ3n5hRA6qQGwJ17yuor8qbHdXmmqvmLz4yzvNfun1p7YVcg&s=10";

  const gameUrl = "https://666rs2fs.com/s/80A66581142";

  return (
    <section className="relative overflow-hidden bg-gray-400 text-gray-950">

      {/* ================= BACKGROUND EFFECTS ================= */}
      <div className="pointer-events-none absolute inset-0">

        <div className="absolute left-1/2 top-[-180px] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-yellow-400/20 blur-[120px]" />

        <div className="absolute -left-40 top-1/2 h-[350px] w-[350px] -translate-y-1/2 rounded-full bg-amber-500/10 blur-[110px]" />

        <div className="absolute -bottom-40 -right-40 h-[350px] w-[350px] rounded-full bg-yellow-300/15 blur-[110px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#111 1px, transparent 1px), linear-gradient(90deg, #111 1px, transparent 1px)",
            backgroundSize: "55px 55px",
          }}
        />

      </div>

      {/* ================= TOP ACCENT ================= */}
      <div className="relative h-[2px] w-full bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />

      {/* ================= MAIN CONTENT ================= */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col items-center pt-4 pb-12 sm:pt-5 sm:pb-16 lg:pt-6 lg:pb-20">

          {/* ================= LABEL ================= */}
          <div className="mb-3 inline-flex rounded-full border border-yellow-600/30 bg-white/30 px-5 py-2 shadow-sm backdrop-blur-md">
            <span className="text-xs font-extrabold uppercase tracking-[0.22em] text-yellow-800">
              666RS Game Download
            </span>
          </div>

          {/* ================= HEADING ================= */}
          <h1 className="max-w-4xl text-center text-4xl font-black leading-tight tracking-tight text-gray-950 sm:text-5xl md:text-6xl lg:text-6xl">
            Download{" "}
            <span className="bg-gradient-to-r from-yellow-700 via-amber-600 to-yellow-700 bg-clip-text text-transparent">
              666RS Game
            </span>
          </h1>

          {/* ================= IMAGE ================= */}
          <div className="relative mt-5 w-full max-w-[1000px]">

            {/* Glow */}
            <div className="absolute -inset-4 rounded-[2rem] bg-yellow-400/15 blur-3xl" />

            {/* Clickable Image */}
            <a
              href={gameUrl}
              aria-label="Download 666RS Game"
              className="group relative block"
            >
              <div className="relative overflow-hidden rounded-2xl border border-gray-300 bg-gray-300 p-1.5 shadow-2xl shadow-gray-500/25 transition-all duration-500 group-hover:border-yellow-500/60 group-hover:shadow-yellow-500/20">

                <div className="overflow-hidden rounded-xl">

                  <img
                    src={gameImage}
                    alt="Download 666RS Game"
                  className="block h-[200px] w-full object-cover object-center transition duration-700 group-hover:scale-[1.02] sm:h-[280px] md:h-[330px] lg:h-[380px]"
                  />

                </div>

              </div>
            </a>

          </div>

          {/* ================= DOWNLOAD BUTTON ================= */}
          <div className="mt-5">

            <a
              href={gameUrl}
              className="inline-flex min-w-[230px] items-center justify-center rounded-xl bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-400 px-8 py-4 text-sm font-black text-gray-950 shadow-xl shadow-yellow-600/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-yellow-600/30"
            >
              Download 666RS Game
            </a>

          </div>

          {/* ================= INTRO TEXT ================= */}
          <p className="mx-auto mt-7 max-w-3xl text-center text-sm leading-7 text-gray-700 sm:text-base">
            Access 666RS Game through the download option above and
            explore the available gaming experience from your preferred
            device. The page is designed to provide a simple and
            straightforward way to continue to the game.
          </p>

          {/* ================= ARTICLE ================= */}
          <article className="mt-10 w-full max-w-4xl border-t border-gray-500/30 pt-10">

            <h2 className="text-center text-2xl font-black text-gray-950 sm:text-3xl lg:text-4xl">
              666RS Game Download Guide
            </h2>

            <p className="mt-5 text-sm leading-8 text-gray-700 sm:text-base">
              The 666RS Game download page gives visitors a convenient
              way to access the available gaming platform. Simply review
              the information and use the download button to continue to
              the game page.
            </p>

            <p className="mt-5 text-sm leading-8 text-gray-700 sm:text-base">
              The game image is also clickable, so you can select the
              image or the download button to continue. This makes the
              page easy to use on smartphones, tablets, laptops, and
              desktop computers.
            </p>

            <h3 className="mt-9 text-xl font-black text-gray-950 sm:text-2xl">
              How to Access 666RS Game
            </h3>

            <p className="mt-4 text-sm leading-8 text-gray-700 sm:text-base">
              To access 666RS Game, use the download option displayed
              above. After selecting the button, follow the instructions
              provided on the destination page and continue according to
              your device and preferences.
            </p>

            <h3 className="mt-9 text-xl font-black text-gray-950 sm:text-2xl">
              666RS Game on Mobile
            </h3>

            <p className="mt-4 text-sm leading-8 text-gray-700 sm:text-base">
              The page is responsive and can be viewed on different
              screen sizes. If you are using a mobile device, keep your
              browser updated and use a stable internet connection for a
              smoother browsing experience.
            </p>

            {/* ================= FINAL BUTTON ================= */}
            <div className="mt-9 text-center">

              <a
                href={gameUrl}
                className="inline-flex min-w-[220px] items-center justify-center rounded-xl bg-yellow-400 px-7 py-3.5 text-sm font-extrabold text-gray-950 shadow-lg shadow-yellow-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-500 hover:shadow-xl"
              >
                Continue to 666RS Game
              </a>

            </div>

          </article>

        </div>

      </div>

      {/* ================= BOTTOM ACCENT ================= */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-yellow-600/60 to-transparent" />

    </section>
  );
}

export default HeroSection;