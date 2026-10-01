import {
  ArrowUpRight,
  ShieldCheck,
  Download,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const gameUrl = "https://666rs2fs.com/s/80A66581142";

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Blog", path: "/blog" },
    { name: "Download", path: "/download" },
    { name: "Contact", path: "/contact" },
  ];

  const informationLinks = [
    {
      name: "666RS Game Information",
      path: "/about-us",
    },
    {
      name: "666RS Game Blog",
      path: "/blog",
    },
    {
      name: "666RS Download Guide",
      path: "/download",
    },
    {
      name: "666RS Contact",
      path: "/contact",
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">
      {/* Background Decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-yellow-400/5 blur-3xl" />

        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-amber-500/5 blur-3xl" />

        <div className="absolute right-0 top-1/3 h-64 w-64 rounded-full bg-yellow-300/5 blur-3xl" />
      </div>

      <div className="relative h-px w-full bg-gradient-to-r from-transparent via-yellow-400/70 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          
          {/* Brand */}
          <div>
            <a
              href="/"
              aria-label="666RS Game home page"
              className="group inline-flex items-center gap-3"
            >
              <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-yellow-300 via-yellow-400 to-amber-500 shadow-lg shadow-yellow-500/10 transition duration-300 group-hover:scale-105 group-hover:shadow-yellow-400/20">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB_WP8_RE8VQ3n5hRA6qQGwJ17yuor8qbHdXmmqvmLz4yzvNfun1p7YVcg&s=10"
                  alt="666RS Game Logo"
                  width="48"
                  height="48"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="leading-none">
                <div className="flex items-center">
                  <span className="text-2xl font-black text-white">
                    666
                  </span>

                  <span className="text-2xl font-black text-yellow-400">
                    RS
                  </span>
                </div>

                <span className="mt-1 block text-[9px] font-semibold uppercase tracking-[0.3em] text-slate-500">
                  Gaming Platform
                </span>
              </div>
            </a>

            <p className="mt-6 max-w-md text-sm leading-7 text-slate-400">
              666RS Game is an online gaming information platform covering
              666RS Game Download, 666RS APK information, mobile access,
              gaming guides, platform resources, and related updates.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2">
              <ShieldCheck
                size={17}
                className="text-yellow-400"
              />

              <span className="text-xs font-medium text-slate-400">
                666RS Game Information
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label="666RS quick links">
            <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.18em] text-white">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <a
                    href={link.path}
                    className="group inline-flex items-center gap-1.5 text-sm text-slate-400 transition-colors duration-200 hover:text-yellow-400"
                  >
                    <span>{link.name}</span>

                    <ArrowUpRight
                      size={13}
                      className="opacity-0 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Discover */}
          <nav aria-label="666RS discover links">
            <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.18em] text-white">
              Discover
            </h3>

            <ul className="space-y-3">
              {informationLinks.map((link) => (
                <li key={link.path}>
                  <a
                    href={link.path}
                    className="text-sm text-slate-400 transition-colors hover:text-yellow-400"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Download */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.18em] text-white">
              666RS Game
            </h3>

            <p className="text-sm leading-6 text-slate-500">
              Explore 666RS Game resources, mobile information, download
              guidance and the latest gaming-related content.
            </p>

            <a
              href={gameUrl}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              aria-label="Download 666RS Game"
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-400 px-5 py-3 text-sm font-extrabold text-slate-950 shadow-lg shadow-yellow-500/10 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-yellow-400/20"
            >
              <Download size={17} />

              <span>Download Game</span>
            </a>

            {/* حقیقی external link */}
            <a
              href="https://safety.google/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-slate-400 transition hover:text-yellow-400"
            >
              Online Safety Information
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        {/* Internal Site Navigation */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
          <h3 className="text-sm font-bold text-white">
            Explore 666RS Game
          </h3>

          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-3">
            <a
              href="/"
              className="text-sm text-slate-400 transition hover:text-yellow-400"
            >
              666RS Game
            </a>

            <a
              href="/about-us"
              className="text-sm text-slate-400 transition hover:text-yellow-400"
            >
              666RS Game Information
            </a>

            <a
              href="/blog"
              className="text-sm text-slate-400 transition hover:text-yellow-400"
            >
              666RS Game Blog
            </a>

            <a
              href="/download"
              className="text-sm text-slate-400 transition hover:text-yellow-400"
            >
              666RS Game Download
            </a>

            <a
              href="/contact"
              className="text-sm text-slate-400 transition hover:text-yellow-400"
            >
              666RS Contact
            </a>
          </div>
        </div>

        <div className="my-7 h-px bg-white/10" />

        {/* Bottom Footer */}
        <div className="flex flex-col gap-5 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs leading-5 text-slate-500">
            © {currentYear} 666RS Game. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-5">
            <a
              href="/"
              className="text-xs text-slate-500 transition-colors hover:text-slate-300"
            >
              Home
            </a>

            <a
              href="/about-us"
              className="text-xs text-slate-500 transition-colors hover:text-slate-300"
            >
              About
            </a>

            <a
              href="/blog"
              className="text-xs text-slate-500 transition-colors hover:text-slate-300"
            >
              Blog
            </a>

            <a
              href="/contact"
              className="text-xs text-slate-500 transition-colors hover:text-slate-300"
            >
              Support
            </a>

            <a
              href="/download"
              className="text-xs text-slate-500 transition-colors hover:text-slate-300"
            >
              Download
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}