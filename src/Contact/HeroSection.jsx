function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gray-400 text-gray-900">

      {/* ================= BACKGROUND ================= */}
      <div className="pointer-events-none absolute inset-0">

        <div className="absolute left-1/2 top-[-220px] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-yellow-400/20 blur-[140px]" />

        <div className="absolute -left-48 top-1/2 h-[450px] w-[450px] -translate-y-1/2 rounded-full bg-amber-400/10 blur-[130px]" />

        <div className="absolute -bottom-52 -right-48 h-[500px] w-[500px] rounded-full bg-yellow-300/15 blur-[140px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#111 1px, transparent 1px), linear-gradient(90deg, #111 1px, transparent 1px)",
            backgroundSize: "55px 55px",
          }}
        />

      </div>

      {/* ================= TOP LINE ================= */}
      <div className="relative h-[2px] w-full bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />

      {/* ================= HERO ================= */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="flex min-h-[560px] items-center justify-center py-8 sm:py-10 lg:py-12">

          <div className="w-full max-w-4xl text-center">

            {/* LABEL */}
            <div className="mb-7 inline-flex rounded-full border border-yellow-600/30 bg-white/30 px-5 py-2.5 shadow-sm backdrop-blur-md">
              <span className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-yellow-800 sm:text-xs">
                Contact & Support
              </span>
            </div>

            {/* HEADING */}
            <h1 className="text-4xl font-black leading-[1.05] tracking-tight text-gray-950 sm:text-5xl md:text-6xl lg:text-7xl">
              Let&apos;s Talk About
              <br />
              <span className="bg-gradient-to-r from-yellow-700 via-amber-600 to-yellow-700 bg-clip-text text-transparent">
                666RS Game
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-gray-700 sm:text-lg">
              Have a question about 666RS Game or need more information?
              Send us your message and let us know how we can help.
              Our contact page provides a simple way to reach out.
            </p>

            {/* SECONDARY DESCRIPTION */}
            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
              Whether you want to ask a question, share feedback, or
              request information, you can contact us using the form below.
            </p>

            {/* CTA */}
            <div className="mt-10">
              <a
                href="#contact-form"
                className="inline-flex items-center justify-center rounded-2xl border border-yellow-300/50 bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-400 px-8 py-4 text-sm font-black text-gray-950 shadow-xl shadow-yellow-600/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-yellow-600/30 sm:px-10"
              >
                Contact Us Today
              </a>
            </div>

            {/* INFORMATION */}
            <div className="mx-auto mt-10 flex max-w-2xl flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-gray-700">

              <span className="font-semibold">
                Questions & Support
              </span>

              <span className="hidden h-4 w-px bg-gray-600/30 sm:block" />

              <span className="font-semibold">
                666RS Game Information
              </span>

              <span className="hidden h-4 w-px bg-gray-600/30 sm:block" />

              <span className="font-semibold">
                We&apos;re Here to Help
              </span>

            </div>

            {/* BOTTOM TEXT */}
            <p className="mt-7 text-xs font-medium tracking-wide text-gray-600">
              Send your message through the contact form below
            </p>

          </div>

        </div>

      </div>

      {/* ================= BOTTOM ACCENT ================= */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-yellow-600/60 to-transparent" />

    </section>
  );
}

export default HeroSection;