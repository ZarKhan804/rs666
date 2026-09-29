import { useState } from "react";
import {
  Menu,
  X,
  Download,
  ChevronRight,
} from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const gameUrl = "https://666rs2fs.com/s/80A66581142";

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Blog", path: "/blog" },
    { name: "Download", path: "/download" },
    { name: "Contact", path: "/contact" },
  ];

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-yellow-400 focus:px-4 focus:py-2 focus:font-bold focus:text-slate-950"
      >
        Skip to main content
      </a>

      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/95 text-white shadow-lg shadow-black/10 backdrop-blur-xl">

        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="flex h-[76px] items-center justify-between">

            <a
              href="/"
              onClick={closeMenu}
              aria-label="666RS Game home page"
              className="group flex items-center gap-3"
            >
              <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-yellow-300 via-yellow-400 to-amber-500 shadow-lg shadow-yellow-500/20 transition duration-300 group-hover:scale-105 group-hover:shadow-yellow-400/40">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB_WP8_RE8VQ3n5hRA6qQGwJ17yuor8qbHdXmmqvmLz4yzvNfun1p7YVcg&s=10"
                  alt="666RS Game Logo"
                  width="48"
                  height="48"
                  loading="eager"
                  decoding="async"
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-white/20 opacity-0 transition group-hover:opacity-100" />
              </div>

              <div className="leading-none">
                <div className="flex items-center gap-1">
                  <span className="text-xl font-black tracking-tight text-white sm:text-2xl">
                    666
                  </span>

                  <span className="text-xl font-black tracking-tight text-yellow-400 sm:text-2xl">
                    RS
                  </span>
                </div>

                <span className="mt-1 block text-[9px] font-semibold uppercase tracking-[0.32em] text-slate-400">
                  Gaming Platform
                </span>
              </div>
            </a>

            <nav
              aria-label="Primary navigation"
              className="hidden items-center gap-1 md:flex"
            >
              {navLinks.map((link) => (
                <a
                  key={link.path}
                  href={link.path}
                  className="group relative rounded-lg px-4 py-3 text-sm font-semibold text-slate-300 transition-all duration-300 hover:text-white"
                >
                  <span className="relative z-10">
                    {link.name}
                  </span>

                  <span className="absolute bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-yellow-400 transition-all duration-300 group-hover:w-5" />
                </a>
              ))}
            </nav>

            <div className="hidden md:block">
              <a
                href={gameUrl}
                target="_blank"
                rel="nofollow sponsored noopener noreferrer"
                aria-label="Download 666RS Game"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-400 px-5 py-3 text-sm font-extrabold text-slate-950 shadow-lg shadow-yellow-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-yellow-400/30"
              >
                <Download
                  size={17}
                  strokeWidth={2.5}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5"
                />

                <span>Download Game</span>

                <ChevronRight
                  size={16}
                  strokeWidth={2.5}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </div>

            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-all duration-300 hover:border-yellow-400/30 hover:bg-yellow-400/10 hover:text-yellow-400 md:hidden"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
            >
              {menuOpen ? (
                <X size={25} strokeWidth={2} />
              ) : (
                <Menu size={25} strokeWidth={2} />
              )}
            </button>
          </div>

          <div
            id="mobile-navigation"
            className={`overflow-hidden transition-all duration-300 md:hidden ${
              menuOpen
                ? "max-h-[600px] pb-5 opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="border-t border-white/10 pt-3">

              <nav
                aria-label="Mobile primary navigation"
                className="flex flex-col"
              >
                {navLinks.map((link) => (
                  <a
                    key={link.path}
                    href={link.path}
                    onClick={closeMenu}
                    className="group flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-semibold text-slate-300 transition-all duration-200 hover:bg-white/5 hover:text-white"
                  >
                    <span>{link.name}</span>

                    <ChevronRight
                      size={17}
                      className="opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
                    />
                  </a>
                ))}
              </nav>

              <a
                href={gameUrl}
                target="_blank"
                rel="nofollow sponsored noopener noreferrer"
                onClick={closeMenu}
                className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-yellow-300 to-amber-400 px-5 py-3.5 text-sm font-extrabold text-slate-950 shadow-lg shadow-yellow-500/20 transition-all hover:shadow-yellow-400/30"
              >
                <Download size={18} />
                Download Game
              </a>

            </div>
          </div>

        </div>
      </header>
    </>
  );
}