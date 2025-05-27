import "../App.css";
import Hero from "../components/PagesComponent/Hero";
import Quote from "../components/PagesComponent/Quote";
import ContactHeader from "@/components/PagesComponent/ContactHeader";
import ContactSection from "@/components/PagesComponent/ContactSection";
import Footer from "@/components/PagesComponent/Footer";
import { useEffect } from "react";
import { useState } from "react";
import BlurText from "@/components/reactbits/BlurText";
import TabComponent from "@/components/PagesComponent/TabComponent";
import { About } from "@/components/PagesComponent/About";
function Home() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    document.title = "Abisam | Junior Web Developer Portfolio";
  }, []);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisited");
    if (!hasVisited) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem("hasVisited", "true");
      }, 2000);
    }
  }, []);

  return (
    <>
      {isLoading ? (
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
        <main>
          <section className="overflow-hidden scrollbar-hidden">
            <Hero />
          </section>
          <section className="overflow-hidden" id="about">
            <About />
          </section>
          <section className="overflow-hidden" id="projects">
            <TabComponent />
          </section>
          <section className="overflow-hidden" id="quote">
            <Quote />
          </section>
          <header className="overflow-hidden" id="contact-header">
            <ContactHeader />
          </header>
          <section className="overflow-hidden" id="contact-section">
            <ContactSection />
          </section>
          <footer className="overflow-hidden" id="footer">
            <Footer />
          </footer>
        </main>
      )}
    </>
  );
}

export default Home;
