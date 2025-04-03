import { useEffect } from "react";
import "./App.css";
import { About } from "./pages/About";
import { Hero } from "./pages/Hero";
import AOS from "aos";
import "aos/dist/aos.css";
import ProjectsHiglight from "./pages/ProjectsHiglight";
import Quote from "./pages/Quote";

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
      <section className="overflow-hidden" id="#projects">
        <ProjectsHiglight />
      </section>
      <section className="overflow-hidden" id="#Quote">
        <Quote />
      </section>
    </>
  );
}

export default App;
