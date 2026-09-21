
import { Link } from "react-router-dom";

import {
  Download,
  ArrowUpRight,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Blog", path: "/blog" },
    { name: "Download", path: "/download" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">

      {/* ================= BACKGROUND EFFECTS ================= */}

      <div className="pointer-events-none absolute inset-0">

        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-yellow-400/5 blur-3xl" />

        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-amber-500/5 blur-3xl" />

        <div className="absolute right-0 top-1/3 h-64 w-64 rounded-full bg-yellow-300/5 blur-3xl" />

      </div>

      {/* ================= TOP ACCENT ================= */}

      <div className="relative h-px w-full bg-gradient-to-r from-transparent via-yellow-400/70 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ================= MAIN FOOTER ================= */}

        <div className="grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">

          {/* ================= BRAND + ARTICLE ================= */}

          <div className="lg:col-span-2">

            <Link
              to="/"
              className="group inline-flex items-center gap-3"
            >

              {/* LOGO */}

              <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-yellow-300 via-yellow-400 to-amber-500 shadow-lg shadow-yellow-500/10 transition duration-300 group-hover:scale-105 group-hover:shadow-yellow-400/20">

                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB_WP8_RE8VQ3n5hRA6qQGwJ17yuor8qbHdXmmqvmLz4yzvNfun1p7YVcg&s=10"
                  alt="666 RS Logo"
                  className="h-full w-full object-cover"
                />

              </div>

              {/* BRAND NAME */}

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

            </Link>

            {/* ================= 50 WORD ARTICLE ================= */}

            <p className="mt-6 max-w-md text-sm leading-7 text-slate-400">
              666RS is a fresh online gaming platform where users can
              explore different entertainment options in one place.
              Discover new games, browse the platform, and enjoy a
              simple gaming experience from your preferred device.
              Users can explore available features and choose the
              entertainment options they personally enjoy in their
              free time.

            </p>

            {/* TRUST BADGE */}

            <div className="mt-6 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2">

              <ShieldCheck
                size={17}
                className="text-yellow-400"
              />

              <span className="text-xs font-medium text-slate-400">
                Designed for a smooth experience
              </span>

            </div>

          </div>

          {/* ================= QUICK LINKS ================= */}

          <div>

            <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.18em] text-white">
              Quick Links
            </h3>

            <ul className="space-y-3">

              {quickLinks.map((link) => (

                <li key={link.path}>

                  <Link
                    to={link.path}
                    className="group inline-flex items-center gap-1.5 text-sm text-slate-400 transition-colors duration-200 hover:text-yellow-400"
                  >

                    <span>
                      {link.name}
                    </span>

                    <ArrowUpRight
                      size={13}
                      className="opacity-0 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                    />

                  </Link>

                </li>

              ))}

            </ul>

          </div>

          {/* ================= INFORMATION ================= */}

          <div>

            <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.18em] text-white">
              Information
            </h3>

            <ul className="space-y-3">

              <li>
                <Link
                  to="/about-us"
                  className="text-sm text-slate-400 transition-colors hover:text-yellow-400"
                >
                  About 666RS
                </Link>
              </li>

              <li>
                <Link
                  to="/blog"
                  className="text-sm text-slate-400 transition-colors hover:text-yellow-400"
                >
                  Latest Updates
                </Link>
              </li>

              <li>
                <Link
                  to="/download"
                  className="text-sm text-slate-400 transition-colors hover:text-yellow-400"
                >
                  Game Download
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="text-sm text-slate-400 transition-colors hover:text-yellow-400"
                >
                  Contact Support
                </Link>
              </li>

            </ul>

          </div>

        </div>

        {/* ================= BOTTOM BAR ================= */}

        <div className="flex flex-col gap-5 border-t border-white/10 py-6 sm:flex-row sm:items-center sm:justify-between">

          {/* COPYRIGHT */}

          <p className="text-xs leading-5 text-slate-500">
            © {currentYear} 666RS Game. All rights reserved.
          </p>

          {/* BOTTOM LINKS */}

          <div className="flex flex-wrap items-center gap-5">

            <Link
              to="/"
              className="text-xs text-slate-500 transition-colors hover:text-slate-300"
            >
              Privacy
            </Link>

            <Link
              to="/"
              className="text-xs text-slate-500 transition-colors hover:text-slate-300"
            >
              Terms
            </Link>

            <Link
              to="/contact"
              className="text-xs text-slate-500 transition-colors hover:text-slate-300"
            >
              Support
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}

