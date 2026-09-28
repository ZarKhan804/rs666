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

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/download" element={<Download />} />

          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;