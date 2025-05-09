import Particles from "../reactbits/Particles";
import ScrollVelocity from "@/components/reactbits/ScrollVelocity";
import Logo from "@/assets/myLogo.png";
// import MainButton from "@/components/button/MainButton";
import Header from "@/components/Header";
import Navigation from "../Navigation";

export function Hero() {
  return (
    <div className="absolute top-0 bg-black w-screen h-[100vh] flex items-center justify-center text-center overflow-x-hidden scrollbar-hidden">
      {/* Header */}
      <Header className="absolute flex justify-between text-xl left-0 w-full z-20 bg-gradient-to-t from-slate-300 to-gray-500 bg-clip-text text-transparent" />

      {/* Particels Background */}
      <div className="absolute inset-0 z-0">
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
        <ScrollVelocity
          texts={[
            "FRONTEND DEVELOPER - DREAMER -",
            "BACKEND DEVELOPER - SURVIVOR -",
          ]}
          className="custom-scroll-text md:text-[90px] tracking-tighter font-extrabold font-impact"
        />
        <p className="p-5 mx-4 text-sm md:text-lg text-center font-semibold">
          "Elevating Digital Experiences with Passion & Precision."
        </p>
        {/* <MainButton title="Take a Journey" /> */}
        <div className="p-4">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollBy({
                top: window.innerHeight / 2,
                behavior: "smooth",
              });
            }}
          >
            <span className="scroll-btn">
              <span className="mouse">
                <span></span>
              </span>
            </span>
          </a>
        </div>
      </div>

      {/* Dock Nav */}
      <Navigation />
    </div>
  );
}

export default Hero;
