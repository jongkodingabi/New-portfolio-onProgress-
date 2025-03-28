import TextPressure from "../components/reactbits/TextPressure";
import Profile from "../assets/Profile.png";
import Slider from "react-infinite-logo-slider";
import HTML from "../assets/skills/HTML.png";
import CSS from "../assets/skills/CSS完全に理解した.png";
import Tailwind from "../assets/skills/Tailwindcss6.png";
import React from "../assets/skills/React.png";
import Vue from "../assets/skills/Vue.png";
import Laravel from "../assets/skills/Laravel.png";
import PHP from "../assets/skills/default.png";
import Vite from "../assets/skills/Vite.png";
import Figma from "../assets/skills/Figma.png";
import Github from "../assets/skills/GitHub.png";
import Gitlab from "../assets/skills/GitLab.png";
import VSCODE from "../assets/skills/VisualStudioCode.png";

export function About() {
  return (
    <div className="bg-black w-screen min-h-screen flex flex-col items-center justify-center text-center mt-[100vh]">
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
          alt=""
          className="rounded-full w-80 mt-20 mb-8 hover:shadow-lg hover:shadow-gray-500 hover:scale-105 transition-all"
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
          className="text-3xl font-light mx-40 p-10 text-center font-mono"
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
      <button className="bg-red-500">Download CV</button>
      <Slider
        width="250px"
        duration={40}
        pauseOnHover={true}
        blurBorders={false}
        blurBorderColor={"#fff"}
      >
        <Slider.Slide>
          <img
            src={HTML}
            alt="any"
            className="w-50 grayscale hover:grayscale-0 transition-all ease-in-out"
          />
        </Slider.Slide>
        <Slider.Slide>
          <img
            src={CSS}
            alt="any2"
            className="w-50 grayscale hover:grayscale-0 transition-all ease-in-out"
          />
        </Slider.Slide>
        <Slider.Slide>
          <img
            src={Tailwind}
            alt="any3"
            className="w-50 grayscale hover:grayscale-0 transition-all ease-in-out"
          />
        </Slider.Slide>
        <Slider.Slide>
          <img
            src={Vite}
            alt="any4"
            className="w-50 grayscale hover:grayscale-0 transition-all ease-in-out"
          />
        </Slider.Slide>
        <Slider.Slide>
          <img
            src={Vue}
            alt="any5"
            className="w-50 grayscale hover:grayscale-0 transition-all ease-in-out"
          />
        </Slider.Slide>
        <Slider.Slide>
          <img
            src={React}
            alt="any6"
            className="w-50 grayscale hover:grayscale-0 transition-all ease-in-out"
          />
        </Slider.Slide>
        <Slider.Slide>
          <img
            src={Laravel}
            alt="any7"
            className="w-50 grayscale hover:grayscale-0 transition-all ease-in-out"
          />
        </Slider.Slide>
        <Slider.Slide>
          <img
            src={PHP}
            alt="any8"
            className="w-50 grayscale hover:grayscale-0 transition-all ease-in-out"
          />
        </Slider.Slide>
        <Slider.Slide>
          <img
            src={Figma}
            alt="any9"
            className="w-50 grayscale hover:grayscale-0 transition-all ease-in-out"
          />
        </Slider.Slide>
        <Slider.Slide>
          <img
            src={Github}
            alt="any10"
            className="w-50 grayscale hover:grayscale-0 transition-all ease-in-out"
          />
        </Slider.Slide>
        <Slider.Slide>
          <img
            src={Gitlab}
            alt="any11"
            className="w-50 grayscale hover:grayscale-0 transition-all ease-in-out"
          />
        </Slider.Slide>
        <Slider.Slide>
          <img
            src={VSCODE}
            alt="any12"
            className="w-50 grayscale hover:grayscale-0 transition-all ease-in-out"
          />
        </Slider.Slide>
      </Slider>
    </div>
  );
}
