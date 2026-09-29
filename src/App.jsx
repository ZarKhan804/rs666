import { BrowserRouter, Routes, Route, useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

import Header from "./Components/Header";
import Footer from "./Components/Footer";

import Home from "./Home/Home";
import AboutUs from "./AboutUs/AboutUs";
import Contact from "./Contact/Contact";
import Blog from "./Blog/Blog";
import Download from "./Download/Download";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return null;
}

function NotFound() {
  return (
    <section className="min-h-[60vh] bg-gray-200 px-6 py-20 text-center">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-4xl font-black text-gray-900">
          Page Not Found
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-gray-600">
          The page you are looking for does not exist or may have been moved.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            to="/"
            className="rounded-xl bg-yellow-400 px-6 py-3 font-bold text-gray-950 transition hover:bg-yellow-300"
          >
            Home
          </Link>

          <Link
            to="/about-us"
            className="rounded-xl border border-gray-300 bg-white px-6 py-3 font-bold text-gray-900 transition hover:border-yellow-400 hover:text-yellow-700"
          >
            About Us
          </Link>

          <Link
            to="/blog"
            className="rounded-xl border border-gray-300 bg-white px-6 py-3 font-bold text-gray-900 transition hover:border-yellow-400 hover:text-yellow-700"
          >
            Blog
          </Link>

          <Link
            to="/download"
            className="rounded-xl border border-gray-300 bg-white px-6 py-3 font-bold text-gray-900 transition hover:border-yellow-400 hover:text-yellow-700"
          >
            Download
          </Link>

          <Link
            to="/contact"
            className="rounded-xl border border-gray-300 bg-white px-6 py-3 font-bold text-gray-900 transition hover:border-yellow-400 hover:text-yellow-700"
          >
            Contact
          </Link>
        </div>
      </div>
    </section>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Header />

      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/download" element={<Download />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;