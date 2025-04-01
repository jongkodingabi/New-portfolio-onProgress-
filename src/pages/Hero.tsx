import Particles from "../components/reactbits/Particles";
import ScrollVelocity from "@/components/reactbits/ScrollVelocity";
import Logo from "../assets/myLogo.png";
import MainButton from "@/components/button/MainButton";

export function Hero() {
  return (
    <div className="absolute top-0 bg-black w-screen h-[100vh] flex items-center justify-center text-center overflow-x-hidden">
      {/* Particles Background */}
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
    </div>
  );
}

export default Hero;
