import { useEffect } from "react";
import "../App.css";
import { About } from "../components/PagesComponent/About";
import { Hero } from "../components/PagesComponent/Hero";
import AOS from "aos";
import "aos/dist/aos.css";
import ProjectsHiglight from "../components/PagesComponent/ProjectsHiglight";
import Quote from "../components/PagesComponent/Quote";
import transition from "@/components/Transition";

function Home() {
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

export default transition(Home);
