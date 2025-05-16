import TextPressure from "../reactbits/TextPressure";
import Profile from "@/assets/png/me.jpg";
import SliderComponent from "@/components/reactbits/SliderComponent";
import Resume from "@/assets/resume.svg";
import SecondaryButton from "../button/SecondaryButton";
import Instagram from "@/assets/svg/instagram.svg";
import Linkedin from "@/assets/svg/linkedin.svg";
import Github from "@/assets/svg/github.svg";
import GitHubCalendar from "react-github-calendar";

export function About() {
  return (
    <div className="bg-black max-w-screen min-h-screen flex flex-col items-center justify-center text-center mt-[100vh] overflow-x-hidden">
      {/* Text Pressure Animation */}
      <div className="z-10 flex items-center justify-center w-full">
        <TextPressure
          text="Hello!"
          flex={false} // Pastikan ini false agar tidak mengganggu
          alpha={false}
          stroke={false}
          width={true}
          weight={true}
          italic={true}
          textColor="#ffffff"
          strokeColor="#ff0000"
          className="w-full text-center"
        />
      </div>
      <div className="max-w-full mx-auto max-h-full p-6 md:p-14">
        <div className="grid grid-cols-1 md:grid-cols-5 grid-rows-none md:grid-rows-1 gap-4">
          {/* Profile Picture */}
          <div className="col-span-1 md:col-span-2 md:row-span-3 bg-stone-900 rounded-xl">
            <img
              src={Profile}
              alt="myPhoto"
              className="object-cover w-full h-full rounded-2xl"
            />
          </div>

          {/* Intro Text */}
          <div className="col-span-1 md:col-span-3 md:row-span-1 md:col-start-3 bg-zinc-900 rounded-2xl p-4 md:p-8">
            <p className="text-left text-lg md:text-2xl font-mono">
              <span className="font-extrabold">
                Hi there! I'm Abisam Hazim — a web developer who’s genuinely
                passionate about building websites that not only look good but
                also feel good to use.
              </span>{" "}
              I love diving into both front-end and back-end development because
              I believe great digital experiences are built when both sides work
              in harmony. I believe great digital experiences are built when
              both sides work in harmony.
              <span className="hidden md:block">
                I mostly work with modern frameworks like Laravel, React, and
                Tailwind CSS. These tools help me create clean, responsive, and
                efficient websites.
              </span>
            </p>
          </div>

          {/* Tech Stack */}
          <div className="col-span-1 md:col-span-3 md:col-start-3 md:row-start-2 bg-zinc-900 rounded-2xl p-4">
            <p className="text-left font-bold mb-2">Github activity:</p>
            <GitHubCalendar username="jongkodingabi" />
          </div>

          {/* Social Icons */}
          <a href="https://www.instagram.com/biscuitsam__" target="__blank">
            <div className="md:col-start-3 md:row-start-3 bg-pink-600 rounded-2xl flex justify-center items-center transition-all hover:scale-105 duration-300 hover:rotate-3">
              <img
                src={Instagram}
                className="w-10 md:w-14 p-2"
                alt="Instagram"
              />
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/abisam-hazim-5853b4345"
            target="__blank"
          >
            <div className="md:col-start-4 md:row-start-3 bg-blue-600 rounded-2xl flex justify-center items-center transition-all hover:scale-105 duration-300 hover:rotate-3">
              <img src={Linkedin} className="w-10 md:w-14 p-2" alt="Linkedin" />
            </div>
          </a>

          <a href="https://github.com/jongkodingabi" target="__blank">
            <div className="md:col-start-5 md:row-start-3 bg-zinc-800 rounded-2xl flex justify-center items-center transition-all hover:scale-105 duration-300 hover:rotate-3">
              <img src={Github} className="w-10 md:w-14 p-2" alt="Github" />
            </div>
          </a>
        </div>
      </div>
      <a
        href="/assets/Pdf/CV-ABISAM-HAZIM.pdf"
        download="CV-ABISAM-HAZIM"
        className="cursor-pointer"
      >
        <SecondaryButton title="Resume / CV" image={Resume} />
      </a>

      {/* Slider Icon */}
      <SliderComponent />
    </div>
  );
}
