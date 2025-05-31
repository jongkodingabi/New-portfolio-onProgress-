import Header from "@/components/Header";
import Navigation from "../Navigation";
import myPhoto from "@/assets/png/myPhoto.webp";

export function Hero() {
  return (
    <>
      <div className="absolute top-0 bg-white dark:bg-zinc-900 w-screen h-screen flex items-center justify-center text-center overflow-hidden p-8">
        {/* Masking Gradient at Bottom */}
        <div className="pointer-events-none absolute bottom-0 left-0 w-full h-32 z-10 bg-gradient-to-b from-transparent to-black" />

        {/* Header */}
        <Header className="absolute flex justify-between text-base sm:text-lg md:text-xl left-0 w-full z-20 bg-gradient-to-t from-slate-300 to-gray-500 bg-clip-text text-transparent" />

        {/* Hero Text */}
        <div className="absolute z-0 text-white flex flex-col items-center justify-center top-32 md:top-18 gap-3 leading-none">
          <span className="text-[60px] md:text-[150px] font-extrabold opacity-30">
            PORTFOLIO
          </span>
          <span className="text-[60px] md:text-[140px] font-extrabold">
            ABISAM
          </span>
          <span className="text-[60px] md:text-[140px] font-extrabold">
            HAZIM
          </span>
        </div>

        {/* Foto - Pusat dan di atas teks */}
        <div className="absolute z-20 top-[28%] md:top-[26%]">
          <img
            src={myPhoto}
            alt="myPhoto"
            fetchPriority="high"
            className="w-32 sm:w-40 md:w-60 object-cover rounded-3xl shadow-xl hover:opacity-40 hover:scale-105 hover:rotate-1 transition-all duration-300 ease-in-out"
          />
        </div>

        {/* Dock Nav */}
        <div className="absolute bottom-18 animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>

        <Navigation />

        {/* Lokasi - di luar hero section */}
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

        <div className="slider-right-2 mt-80 md:mt-150 z-40">
          <div className="slider-track-right-2 text-md md:text-2xl">
            {/* Konten asli */}
            <h1 className="slide2 font-bold">WEB DEVELOPER</h1>
            <h1 className="slide2 font-bold">FRONTEND DEVELOPER</h1>
            <h1 className="slide2 font-bold">BACKEND DEVELOPER</h1>

            {/* Duplikasi agar seamless */}
            <h1 className="slide2 font-bold">WEB DEVELOPER</h1>
            <h1 className="slide2 font-bold">FRONTEND DEVELOPER</h1>
            <h1 className="slide2 font-bold">BACKEND DEVELOPER</h1>
          </div>
        </div>

        {/* Copy of items */}
      </div>
    </>
  );
}

export default Hero;
