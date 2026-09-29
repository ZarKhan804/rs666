import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
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
          <Route path="/contact" element={<Contact />} />
          <Route path="/download" element={<Download />} />

          <Route
            path="*"
            element={
              <div className="min-h-[60vh] bg-gray-200 px-6 py-20 text-center">
                <h1 className="text-4xl font-black text-gray-900">
                  Page Not Found
                </h1>

                <p className="mx-auto mt-4 max-w-xl text-gray-600">
                  The page you are looking for does not exist.
                </p>

                <a
                  href="/"
                  className="mt-8 inline-flex rounded-xl bg-yellow-400 px-6 py-3 font-bold text-gray-950 transition hover:bg-yellow-300"
                >
                  Go to Home
                </a>
              </div>
            }
          />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;