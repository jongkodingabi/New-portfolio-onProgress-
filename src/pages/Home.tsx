import "../App.css";
import { About } from "../components/PagesComponent/About";
import { Hero } from "../components/PagesComponent/Hero";
import ProjectsHiglight from "../components/PagesComponent/ProjectsHiglight";
import Quote from "../components/PagesComponent/Quote";
import ContactHeader from "@/components/PagesComponent/ContactHeader";
import ContactSection from "@/components/PagesComponent/ContactSection";
import Footer from "@/components/PagesComponent/Footer";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    document.title = "Abisam | Junior Web Developer Portfolio";
  }, []);
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
      <section className="overflow-hidden" id="#ContactHeader">
        <ContactHeader />
      </section>
      <section className="overflow-hidden" id="#ContactSection">
        <ContactSection />
      </section>
      <section className="overflow-hidden" id="#Footer">
        <Footer />
      </section>
    </>
  );
}

export default Home;
