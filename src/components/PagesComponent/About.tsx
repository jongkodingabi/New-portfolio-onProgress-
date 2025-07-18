import SliderComponent from "@/components/reactbits/SliderComponent";
import Resume from "@/assets/resume.svg";
import SecondaryButton from "../button/SecondaryButton";
import Instagram from "@/assets/svg/instagram.svg";
import Linkedin from "@/assets/svg/linkedin.svg";
import Github from "@/assets/svg/github.svg";
import GitHubCalendar from "react-github-calendar";
import stars from "@/assets/svg/stars.svg";
import Experiences from "./Experiences";

export function About() {
  return (
    <>
      <div className="bg-black max-w-screen min-h-screen flex flex-col items-center justify-center text-center mt-[100vh] overflow-hidden relative">
        <div className="z-10 flex justify-between w-full items-start text-[8px] md:text-[11px] gap-3 md:text-md mt-15 md:mt-30 px-6 md:px-20">
          <h1 className="font-bold">About Me</h1>
          <img src={stars} alt="Stars" className="w-14" />
        </div>
        <div className="max-w-full mx-auto max-h-full p-6 md:p-14">
          <div className="grid grid-cols-5 grid-rows-1 gap-6 p-4">
            {/* Intro Section */}
            <div className="col-span-5 row-span-2 bg-zinc-950 p-6 rounded-xl shadow-md">
              <p className="text-left text-lg md:text-2xl font-mono leading-relaxed text-white">
                <span className="font-extrabold">
                  Hi there! I'm Abisam Hazim — a junior web developer who’s
                  genuinely passionate about building websites that not only
                  look good but also feel good to use.
                </span>{" "}
                I enjoy learning new things every day and love exploring both
                front-end and back-end development. For me, building a website
                is not just about making it work, but also making sure it’s easy
                and fun for people to use. I believe great digital experiences
                happen when design and code work together.
                <span className="hidden md:block">
                  I mostly work with modern frameworks like Laravel, React, and
                  Tailwind CSS. These tools help me create clean, responsive,
                  and efficient websites. I’m always open to feedback and new
                  ideas, and I’m excited to keep growing as a developer by
                  working on real projects and collaborating with others.
                </span>
              </p>
              <div className="py-6 mt-7">
                <h3 className="font-bold text-2xl flex justify-items-center mb-3">
                  Experiences
                </h3>
                <Experiences />
              </div>
            </div>

            {/* Section Title */}

            {/* Spotify + GitHub Calendar Combined Section */}
            <div className="col-span-5 grid grid-cols-1 md:grid-cols-5 gap-6">
              {/* Spotify Embed */}
              <div className="col-span-1 md:col-span-2 bg-zinc-900 border-r border-l border-violet-400 p-4 rounded-xl shadow-md flex items-center justify-center">
                <div className="w-full max-w-md mx-auto">
                  <iframe
                    src="https://open.spotify.com/embed/track/4M6pDt6pICsMiiwXGkufLe"
                    width="100%"
                    height="240"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    className="rounded-lg transition-all duration-500 hover:scale-[1.01]"
                  ></iframe>
                </div>
              </div>

              {/* GitHub Calendar */}
              <div className="col-span-1 md:col-span-3 bg-zinc-900 border-r border-l border-violet-400 p-4 rounded-xl shadow-md">
                <p className="text-left font-semibold text-white text-lg mb-2">
                  GitHub activity:
                </p>
                <div className="w-full">
                  <GitHubCalendar username="jongkodingabi" />
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <a
              href="https://www.instagram.com/biscuitsam__"
              target="_blank"
              rel="noopener noreferrer"
              className="col-start-2 row-start-5"
            >
              <div className="bg-pink-600 rounded-2xl flex justify-center items-center p-3 transition-all hover:scale-105 duration-300 hover:rotate-3 shadow-md">
                <img src={Instagram} className="w-10 md:w-14" alt="Instagram" />
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/abisam-hazim-5853b4345"
              target="_blank"
              rel="noopener noreferrer"
              className="col-start-3 row-start-5"
            >
              <div className="bg-blue-600 rounded-2xl flex justify-center items-center p-3 transition-all hover:scale-105 duration-300 hover:rotate-3 shadow-md">
                <img src={Linkedin} className="w-10 md:w-14" alt="LinkedIn" />
              </div>
            </a>

            <a
              href="https://github.com/jongkodingabi"
              target="_blank"
              rel="noopener noreferrer"
              className="col-start-4 row-start-5"
            >
              <div className="bg-zinc-800 rounded-2xl flex justify-center items-center p-3 transition-all hover:scale-105 duration-300 hover:rotate-3 shadow-md">
                <img src={Github} className="w-10 md:w-14" alt="GitHub" />
              </div>
            </a>
          </div>
        </div>

        <a
          href="https://drive.google.com/file/d/1xo2rbJ6l616j9jl0PgRG-0K06F39ctMz/view?usp=sharing"
          className="cursor-pointer"
        >
          <SecondaryButton title="Resume / CV" image={Resume} />
        </a>

        {/* Slider Icon */}
        <SliderComponent />
      </div>
    </>
  );
}
