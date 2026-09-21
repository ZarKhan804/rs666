
import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Menu,
  X,
  Download,
  ChevronRight,
} from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

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
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/90 shadow-lg shadow-black/10 backdrop-blur-xl">

      {/* Top Accent Line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="flex h-[76px] items-center justify-between">

          {/* ================= LOGO ================= */}
          <NavLink
            to="/"
            onClick={closeMenu}
            className="group flex items-center gap-3"
          >

            {/* Logo Image */}
            <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-yellow-300 via-yellow-400 to-amber-500 shadow-lg shadow-yellow-500/20 transition duration-300 group-hover:scale-105 group-hover:shadow-yellow-400/40">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB_WP8_RE8VQ3n5hRA6qQGwJ17yuor8qbHdXmmqvmLz4yzvNfun1p7YVcg&s=10"
                alt="666 RS Logo"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-white/20 opacity-0 transition group-hover:opacity-100" />
            </div>

            {/* Brand Name */}
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
          </NavLink>

          {/* ================= DESKTOP NAV ================= */}
          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `group relative px-4 py-3 text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? "text-yellow-400"
                      : "text-slate-300 hover:text-white"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span className="relative z-10">
                      {link.name}
                    </span>

                    {/* Active / Hover Indicator */}
                    <span
                      className={`absolute bottom-1 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-yellow-400 transition-all duration-300 ${
                        isActive
                          ? "w-5"
                          : "w-0 group-hover:w-5"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* ================= DESKTOP CTA ================= */}
          <div className="hidden md:block">
            <NavLink
              to="/download"
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

              {/* Shine Effect */}
              <span className="absolute inset-y-0 -left-20 w-10 rotate-12 bg-white/30 blur-md transition-all duration-700 group-hover:left-[120%]" />
            </NavLink>
          </div>

          {/* ================= MOBILE BUTTON ================= */}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-all duration-300 hover:border-yellow-400/30 hover:bg-yellow-400/10 hover:text-yellow-400 md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <X size={25} strokeWidth={2} />
            ) : (
              <Menu size={25} strokeWidth={2} />
            )}
          </button>
        </div>

        {/* ================= MOBILE MENU ================= */}
        <div
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            menuOpen
              ? "max-h-[500px] pb-5 opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-white/10 pt-3">

            <nav className="flex flex-col">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `group flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-semibold transition-all duration-200 ${
                      isActive
                        ? "bg-yellow-400/10 text-yellow-400"
                        : "text-slate-300 hover:bg-white/5 hover:text-white"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span>{link.name}</span>

                      <ChevronRight
                        size={17}
                        className={`transition-transform duration-200 ${
                          isActive
                            ? "translate-x-0 text-yellow-400"
                            : "-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                        }`}
                      />
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* Mobile CTA */}
            <NavLink
              to="/download"
              onClick={closeMenu}
              className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-yellow-300 to-amber-400 px-5 py-3.5 text-sm font-extrabold text-slate-950 shadow-lg shadow-yellow-500/20 transition-all hover:shadow-yellow-400/30"
            >
              <Download size={18} />
              Download Game
            </NavLink>

          </div>
        </div>

      </div>
    </header>
  );
}

