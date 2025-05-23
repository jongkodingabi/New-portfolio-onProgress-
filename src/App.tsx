import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import "./index.css";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import { AnimatePresence } from "framer-motion";
import ScrollToTop from "./components/Animations/ScrolltoTop";
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

  return (
    <>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
