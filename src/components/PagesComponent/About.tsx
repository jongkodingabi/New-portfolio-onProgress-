import TextPressure from "../reactbits/TextPressure";
import Profile from "@/assets/Profile.png";
import Slider from "react-infinite-logo-slider";
import HTML from "@/assets/skills/HTML.png";
import CSS from "@/assets/skills/CSS完全に理解した.png";
import Tailwind from "@/assets/skills/Tailwindcss6.png";
import React from "@/assets/skills/React.png";
import Vue from "@/assets/skills/Vue.png";
import Laravel from "@/assets/skills/Laravel.png";
import PHP from "@/assets/skills/default.png";
import Vite from "@/assets/skills/Vite.png";
import Figma from "@/assets/skills/Figma.png";
import Github from "@/assets/skills/GitHub.png";
import Gitlab from "@/assets/skills/GitLab.png";
import VSCODE from "@/assets/skills/VisualStudioCode.png";
import Resume from "@/assets/resume.svg";

export function About() {
  return (
    <div className="bg-black w-screen min-h-screen flex flex-col items-center justify-center text-center mt-[100vh] overflow-x-hidden">
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
      <div className="p-3">
        <img
          src={Profile}
          alt="Profile photo"
          className="rounded-full w-65 md:w-80 mt-20 mb-8 hover:shadow-lg hover:shadow-gray-500 hover:scale-105 transition-all"
        />
        <p className="text-lg font-semibold space-x-2" data-aos="fade-up">
          Abisam Hazim
        </p>
        <p className="text-base font-light" data-aos="fade-up">
          Programmer
        </p>
      </div>
      <div className="flex justifiy-center">
        <h2
          className="text-md md:text-3xl font-light p-8 md:mx-40 md:p-10 text-center font-mono"
          data-aos="fade-up"
        >
          <span className="font-bold">
            I'm passionate to be a web developer with a focus on creating
            dynamic and user-friendly websites. Which interest in front-end and
            back-end development,{" "}
          </span>{" "}
          I love creating and designing friendly user website.
        </h2>
      </div>
      <button className="group mb-3 px-4 py-3 rounded-full inline-flex border border-white bg-[##1a1a1a] hover:bg-white hover:text-black transition-all ease-in-out">
        <img
          src={Resume}
          className="w-5 mr-2 group-hover:text-black group-hover:filter group-hover:invert"
          alt=""
        />
        Resume / CV
      </button>
      <Slider
        width="250px"
        duration={20}
        pauseOnHover={true}
        blurBorders={false}
        blurBorderColor={"#fff"}
      >
        {[
          { src: HTML, alt: "HTML" },
          { src: CSS, alt: "CSS" },
          { src: Tailwind, alt: "Tailwind" },
          { src: Vite, alt: "Vite" },
          { src: Vue, alt: "Vue" },
          { src: React, alt: "React" },
          { src: Laravel, alt: "Laravel" },
          { src: PHP, alt: "PHP" },
          { src: Figma, alt: "Figma" },
          { src: Github, alt: "Github" },
          { src: Gitlab, alt: "Gitlab" },
          { src: VSCODE, alt: "VSCODE" },
        ].map((item, index) => (
          <Slider.Slide key={index}>
            <img
              src={item.src}
              alt={item.alt}
              className="w-40 md:w-50 grayscale hover:grayscale-0 transition-all ease-in-out"
            />
          </Slider.Slide>
        ))}
      </Slider>
    </div>
  );
}
