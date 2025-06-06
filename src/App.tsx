import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes, useLocation } from "react-router-dom";
import { lazy } from "react";
import "./App.css";
import "./index.css";
import { AnimatePresence } from "framer-motion";
import ScrollToTop from "./components/Animations/ScrolltoTop";
import Home from "./pages/Home";

// Lazy load pages
// const Home = lazy(() => import("./pages/Home"));
const Projects = lazy(() => import("./pages/Projects"));
const Certificate = lazy(() => import("./pages/CertificatePage"));
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  return (
    <>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        {/* <Suspense
          fallback={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
              <rect
                fill="#FFFFFF"
                stroke="#FFFFFF"
                stroke-width="15"
                width="30"
                height="30"
                x="25"
                y="50"
              >
                <animate
                  attributeName="y"
                  calcMode="spline"
                  dur="2"
                  values="50;120;50;"
                  keySplines=".5 0 .5 1;.5 0 .5 1"
                  repeatCount="indefinite"
                  begin="-.4"
                ></animate>
              </rect>
              <rect
                fill="#FFFFFF"
                stroke="#FFFFFF"
                stroke-width="15"
                width="30"
                height="30"
                x="85"
                y="50"
              >
                <animate
                  attributeName="y"
                  calcMode="spline"
                  dur="2"
                  values="50;120;50;"
                  keySplines=".5 0 .5 1;.5 0 .5 1"
                  repeatCount="indefinite"
                  begin="-.2"
                ></animate>
              </rect>
              <rect
                fill="#FFFFFF"
                stroke="#FFFFFF"
                stroke-width="15"
                width="30"
                height="30"
                x="145"
                y="50"
              >
                <animate
                  attributeName="y"
                  calcMode="spline"
                  dur="2"
                  values="50;120;50;"
                  keySplines=".5 0 .5 1;.5 0 .5 1"
                  repeatCount="indefinite"
                  begin="0"
                ></animate>
              </rect>
            </svg>
          }
        > */}
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certificates" element={<Certificate />} />
          {/* Add more routes as needed */}
        </Routes>
        {/* </Suspense> */}
      </AnimatePresence>
    </>
  );
}

export default App;
