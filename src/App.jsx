import { useEffect } from "react";
import {BrowserRouter as Router, Routes,Route, useLocation,} from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { AnimatePresence } from "framer-motion";
import { Toaster } from 'react-hot-toast';
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Navbar from "./components/Navbar";
import Footer from"./components/Footer"
// Custom wrapper to handle AOS + AnimatePresence
function AnimatedRoutes() {
  const location = useLocation()

  useEffect(() => {
    AOS.refresh(); // 🔄 Refresh AOS on route change
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true, // ✅ animate on scroll up
    });
  }, []);

  return (
    <Router>
      <div className="bg-gray-900 text-white min-h-screen">
        <Toaster position="top-center" />
        <Navbar />
        <AnimatedRoutes />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
