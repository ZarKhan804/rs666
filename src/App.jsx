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
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/download" element={<Download />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}