import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <section
      aria-labelledby="contact-page-title"
      className="relative overflow-hidden bg-gray-200 text-gray-950"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-180px] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-yellow-400/20 blur-[110px]" />

        <div className="absolute -left-32 bottom-[-100px] h-[300px] w-[300px] rounded-full bg-amber-400/10 blur-[100px]" />

        <div className="absolute -right-32 top-1/2 h-[320px] w-[320px] -translate-y-1/2 rounded-full bg-yellow-300/10 blur-[110px]" />

        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#111 1px, transparent 1px), linear-gradient(90deg, #111 1px, transparent 1px)",
            backgroundSize: "55px 55px",
          }}
        />
      </div>

      <div className="relative h-[2px] w-full bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-[430px] items-center justify-center py-8 sm:min-h-[460px] sm:py-10 lg:min-h-[480px]">
          <header className="w-full max-w-4xl text-center">
            <div className="mb-4 inline-flex rounded-full border border-yellow-600/30 bg-white/30 px-4 py-2 shadow-sm backdrop-blur-md">
              <span className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-yellow-800 sm:text-xs">
                666RS Contact & Support
              </span>
            </div>

            {/* واحد واضح H1 */}
            <h1
              id="contact-page-title"
              className="text-4xl font-black leading-[1.05] tracking-tight text-gray-950 sm:text-5xl md:text-6xl"
            >
              Contact{" "}
              <span className="bg-gradient-to-r from-yellow-700 via-amber-600 to-yellow-700 bg-clip-text text-transparent">
                666RS Game
              </span>

              <span className="mt-1 block text-gray-950">
                Support & Assistance
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-700 sm:text-base">
              Have a question about 666RS Game, mobile access, account
              information, download guidance, or the available gaming
              platform? Use the contact form below to send your message and
              request general assistance.
            </p>

            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="#contact-form"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-400 px-7 py-3.5 text-sm font-black text-gray-950 shadow-lg shadow-yellow-600/20 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                Contact 666RS Support
              </a>

              <Link
                to="/download"
                className="inline-flex items-center justify-center rounded-xl border border-gray-400 bg-white/60 px-7 py-3.5 text-sm font-bold text-gray-900 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-yellow-500 hover:bg-yellow-50"
              >
                666RS Download
              </Link>
            </div>

            <div className="mx-auto mt-7 flex max-w-2xl flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-semibold text-gray-700 sm:text-sm">
              <span>666RS Game Information</span>

              <span className="hidden h-4 w-px bg-gray-600/30 sm:block" />

              <span>Account Assistance</span>

              <span className="hidden h-4 w-px bg-gray-600/30 sm:block" />

              <span>General Support</span>
            </div>
          </header>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-yellow-600/60 to-transparent" />
    </section>
  );
}

export default HeroSection;