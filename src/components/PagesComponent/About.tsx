import TextPressure from "../reactbits/TextPressure";
import Profile from "@/assets/Profile.png";
import Resume from "@/assets/resume.svg";
import SliderComponent from "@/components/reactbits/SliderComponent";

export function About() {
  return (
    <div className="bg-black max-w-screen min-h-screen flex flex-col items-center justify-center text-center mt-[100vh] overflow-x-hidden">
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
          className="text-md md:text-3xl font-light p-8 md:mx-auto md:p-10 text-center font-mono"
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
      <SliderComponent />
    </div>
  );
}
