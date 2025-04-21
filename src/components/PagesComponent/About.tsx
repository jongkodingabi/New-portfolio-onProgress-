import TextPressure from "../reactbits/TextPressure";
import Profile from "@/assets/Profile.png";
import SliderComponent from "@/components/reactbits/SliderComponent";
import Resume from "@/assets/resume.svg";
import SecondaryButton from "../button/SecondaryButton";
import Instagram from "@/assets/svg/instagram.svg";
import Linkedin from "@/assets/svg/linkedin.svg";
import Github from "@/assets/svg/github.svg";
import Tailwind from "@/assets/svg/tailwindcss.svg";
import ReactIcon from "@/assets/svg/react.svg";
import TypeScript from "@/assets/svg/typescript.svg";
import Framer from "@/assets/framer-motion2.png";

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
      <div className="max-w-full mx-auto h-full p-6 md:p-14">
        <div className="grid grid-cols-1 md:grid-cols-5 grid-rows-none md:grid-rows-5 gap-4">
          {/* Profile Picture */}
          <div className="col-span-1 md:col-span-2 md:row-span-5 bg-stone-900 rounded-xl">
            <img
              src={Profile}
              alt=""
              className="object-cover w-full h-full rounded-2xl"
            />
          </div>

          {/* Intro Text */}
          <div className="col-span-1 md:col-span-3 md:row-span-3 md:col-start-3 bg-gray-600 bg-opacity-5 rounded-2xl p-4 md:p-8">
            <p className="text-left text-lg md:text-2xl font-mono">
              <span className="font-extrabold">
                Hi there! I'm Abisam Hazim — a web developer who’s genuinely
                passionate about building websites that not only look good but
                also feel good to use.
              </span>{" "}
              I love diving into both front-end and back-end development because
              I believe great digital experiences are built when both sides work
              in harmony.
              <span className="hidden md:block">
                I mostly work with modern frameworks like Laravel, React, and
                Tailwind CSS. These tools help me create clean, responsive, and
                efficient websites.
              </span>
            </p>
          </div>

          {/* Tech Stack */}
          <div className="col-span-1 md:col-span-3 md:col-start-3 md:row-start-4 bg-gray-600 rounded-2xl p-4">
            <div className="text-center mb-4 font-semibold">Made With:</div>
            <div className="flex md:flex-row justify-center items-center gap-6 md:gap-40">
              <img src={ReactIcon} className="w-10 md:w-12" alt="React" />
              <img src={TypeScript} className="w-10 md:w-12" alt="TypeScript" />
              <img src={Tailwind} className="w-10 md:w-12" alt="Tailwind" />
              <img
                src={Framer}
                className="w-10 md:w-12 filter invert"
                alt="Framer"
              />
            </div>
          </div>

          {/* Social Icons */}
          <div className="md:col-start-3 md:row-start-5 bg-pink-600 rounded-2xl flex justify-center items-center transition-all hover:scale-105 duration-300 hover:rotate-3">
            <img src={Instagram} className="w-10 md:w-14 p-2" alt="Instagram" />
          </div>
          <div className="md:col-start-4 md:row-start-5 bg-blue-600 rounded-2xl flex justify-center items-center transition-all hover:scale-105 duration-300 hover:rotate-3">
            <img src={Linkedin} className="w-10 md:w-14 p-2" alt="Linkedin" />
          </div>
          <div className="md:col-start-5 md:row-start-5 bg-zinc-800 rounded-2xl flex justify-center items-center transition-all hover:scale-105 duration-300 hover:rotate-3">
            <img src={Github} className="w-10 md:w-14 p-2" alt="Github" />
          </div>
        </div>
      </div>

      <SecondaryButton title="Resume / CV" image={Resume} />

      {/* Slider Icon */}
      <SliderComponent />
    </div>
  );
}
