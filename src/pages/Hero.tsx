import Particles from "../components/reactbits/Particles";
import ScrollVelocity from "@/components/reactbits/ScrollVelocity";
import Logo from "../assets/myLogo.png";
import MainButton from "@/components/button/MainButton";
import Header from "@/components/Header";
import { VscHome, VscCode } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import Dock from "@/components/reactbits/Dock";

export function Hero() {
  const items = [
    {
      icon: <VscHome size={20} />,
      label: "Home",
      onClick: () => alert("Home!"),
    },
    {
      icon: <VscCode size={20} />,
      label: "Project",
      onClick: () => window.open("/projects", "_self"),
    },
    {
      icon: <FaLinkedin size={20} />,
      label: "Linkedin",
      onClick: () =>
        window.open(
          "https://www.linkedin.com/in/abisam-hazim-5853b4345",
          "_blank"
        ),
    },
    {
      icon: <FaGithub size={20} />,
      label: "Github",
      onClick: () => window.open("https://github.com/jongkodingabi", "_blank"),
    },
  ];

  return (
    <div className="absolute top-0 bg-black w-screen h-[100vh] flex items-center justify-center text-center overflow-x-hidden scrollbar-hidden">
      <Header className="absolute flex justify-between text-xl left-0 w-full z-20 bg-gradient-to-t from-slate-300 to-gray-500 bg-clip-text text-transparent" />

      <div className="absolute inset-0 z-10">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={1000}
          particleSpread={30}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Hero Content */}
      <div className="absolute z-10 text-white flex flex-col items-center justify-center">
        <img
          src={Logo}
          alt="myLogo"
          className="relative z-[999] w-25"
          data-aos="fade-up"
        />
        <p className="pointer-events-none text-center bg-gradient-to-t from-slate-300 to-gray-500 bg-clip-text text-transparent text-xl font-medium leading-none mb-2">
          ABISAM HAZIM
        </p>
        {/* <h1 className="text-5xl font-bold mb-4">Welcome to Our Website</h1> */}
        <ScrollVelocity
          texts={[
            "FRONTEND DEVELOPER - DESIGNER -",
            "BACKEND DEVELOPER - SURVIVOR -",
          ]}
          className="custom-scroll-text"
        />
        <p className="p-5 mx-4 text-sm md:text-lg text-center">
          "Elevating Digital Experiences with Passion & Precision."
        </p>
        <MainButton title="Take a Journey" />
      </div>
      <Dock
        className="z-20 fixed bg-black mb-10"
        items={items}
        panelHeight={68}
        baseItemSize={50}
        magnification={70}
      />
    </div>
  );
}

export default Hero;
