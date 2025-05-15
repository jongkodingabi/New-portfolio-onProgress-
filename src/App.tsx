import { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import "./index.css";
import "aos/dist/aos.css";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import { AnimatePresence } from "framer-motion";
import BlurText from "./components/reactbits/BlurText";
import gsap from "gsap";
function App() {
  return (
    <>
      <Router>
        <AppContent />
      </Router>
    </>
  );
}

function AppContent() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    gsap.from(".fade-left", {
      x: -100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out",
    });
  }, []);

  return (
    <>
      {loading ? (
        <div className="relative flex flex-col justify-center items-center w-screen">
          <BlurText
            text="Hello There, 👋!"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-2xl md:text-5xl xl:text-7xl font-bold mb-8"
          />
          <div className="bg-white h-1 w-50 md:w-80 lg:w-100 xl:w-120 rounded-full animate-pulse">
            {/* underline border */}
          </div>
        </div>
      ) : (
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route index element={<Home />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </AnimatePresence>
      )}
    </>
  );
}

export default App;
