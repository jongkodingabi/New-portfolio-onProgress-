import Header from "@/components/Header";
import Navigation from "../Navigation";
import myPhoto from "@/assets/png/myPhoto.webp";

export function Hero() {
  return (
    <div className="absolute top-0 bg-white dark:bg-zinc-900 w-screen h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Masking Gradient at Bottom */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-32 z-10 bg-gradient-to-b from-transparent to-black" />

      {/* Header */}
      <Header className="absolute flex justify-between text-base sm:text-lg md:text-xl left-0 w-full z-20 bg-gradient-to-t from-slate-300 to-gray-500 bg-clip-text text-transparent" />

      {/* Hero Content */}
      <div className="absolute z-10 text-white flex flex-col items-center justify-center top-40 md:top-10">
        {/* Nama */}
        <span className="text-[100px] md:text-[200px] font-extrabold">
          ABISAM
        </span>

        {/* Foto */}
        <img
          src={myPhoto}
          alt="myPhoto"
          className="w-32 sm:w-40 md:w-50 object-contain rounded-4xl absolute mt-4 mb-4 hover:opacity-40 transition-opacity"
        />

        <span className="text-[100px] md:text-[200px] font-extrabold">
          HAZIM
        </span>

        {/* Mouse Scroll */}
        {/* <div className="p-2">
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
              <span className="mouse"></span>
            </span>
          </a>
        </div> */}

        {/* Lokasi */}
        <div className="fixed bottom-40 left-2 sm:left-4 bg-zinc-800 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-r-full flex items-center space-x-2 shadow-lg z-40">
          <div className="text-sm sm:text-base text-left leading-tight">
            <p>Located in</p>
            <p className="font-medium">Bogor, Indonesia</p>
          </div>
          <div className="bg-black p-2 sm:p-3 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 sm:h-6 sm:w-6 text-gray-200 animate-spin"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 2a10 10 0 100 20 10 10 0 000-20zM2 12h20M12 2c2.21 2.5 3.5 5.77 3.5 10S14.21 19.5 12 22M12 2c-2.21 2.5-3.5 5.77-3.5 10s1.29 7.5 3.5 10"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Dock Nav */}
      <Navigation />
    </div>
  );
}

export default Hero;
