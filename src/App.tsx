import { useEffect } from "react";
import "./App.css";
import { About } from "./pages/About";
import { Hero } from "./pages/Hero";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });
  return (
    <>
      <section className="overflow-hidden scrollbar-hidden">
        <Hero />
      </section>
      <section className="overflow-hidden" id="#about">
        <About />
      </section>
    </>
  );
}

export default App;
