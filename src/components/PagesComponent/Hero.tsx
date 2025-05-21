import ScrollVelocity from "@/components/reactbits/ScrollVelocity";
import Logo from "@/assets/logo_new.webp";
import Header from "@/components/Header";
import Navigation from "../Navigation";

export function Hero() {
  return (
    <div className="absolute top-0 bg-black w-screen h-screen flex items-center justify-center text-center overflow-x-hidden">
      {/* Masking Gradient at Bottom */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-32 z-30 bg-gradient-to-b from-transparent to-black" />
      {/* Header */}
      <Header className="absolute flex justify-between text-xl left-0 w-full z-20 bg-gradient-to-t from-slate-300 to-gray-500 bg-clip-text text-transparent" />
      <div className="absolute top-0 left-0 w-300 h-120 bg-violet-300 rounded-full filter blur-[160px] opacity-40"></div>
      <div className="absolute top-0 right-7 w-120 h-100 bg-rose-300 rounded-full filter blur-[160px] opacity-40"></div>

      {/* Hero Content */}
      <div className="absolute z-10 text-white flex flex-col items-center justify-center">
        <img
          src={Logo}
          alt="myLogo"
          className="relative z-[999] w-25"
          loading="lazy"
        />
        <p className="pointer-events-none text-center bg-gradient-to-t from-slate-300 to-gray-500 bg-clip-text text-transparent text-xl font-medium leading-none mb-2">
          ABISAM HAZIM
        </p>
        <ScrollVelocity
          texts={[
            "FRONTEND DEVELOPER - DREAMER -",
            "BACKEND DEVELOPER - SURVIVOR -",
          ]}
          className="custom-scroll-text md:text-[90px] tracking-tighter font-extrabold"
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
