import { VscHome, VscCode } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Dock from "@/components/reactbits/Dock";
import YourMeals from "@/assets/projects/YourMeals.png";

export default function Projects() {
  const navigate = useNavigate();
  const items = [
    {
      icon: <VscHome size={20} />,
      label: "Home",
      onClick: () => navigate("/"),
    },
    {
      icon: <VscCode size={20} />,
      label: "Project",
      onClick: () => navigate("/projects"),
    },
    {
      icon: <FaLinkedin size={20} />,
      label: "Linkedin",
      onClick: () =>
        window.open(
          "https://www.linkedin.com/in/abisam-hazim-5853b4345",
          "_blank"
        ),
    },
    {
      icon: <FaGithub size={20} />,
      label: "Github",
      onClick: () => window.open("https://github.com/jongkodingabi", "_blank"),
    },
  ];
  return (
    <div className="">
      <div className="absolute top-0 bg-black bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 z-0 w-screen h-[100vh] flex items-center justify-center text-center overflow-x-hidden scrollbar-hidden">
        <div className="absolute top-5 w-full max-w-lg z-0">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute top-0 -bottom-10 left-30 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          <h1 className="text-center text-white font-extrabold tracking-tighter z-[9999] flex justify-center items-center mt-20 relative">
            My Projects
          </h1>
        </div>
        <div className="flex flex-wrap justify-center items-center md:mt-40 z-0 gap-6">
          {/* Cards */}
          <div className="group transition-all duration-300 ease-in-out rounded-xl bg-transparent border border-white relative mx-2 z-10 mt-10 hover:scale-105 hover:shadow-lg hover:shadow-gray-600 w-full sm:w-80 md:w-96">
            <div className="flex flex-col space-y-2 md:space-y-0">
              <div className="h-full w-full self-stretch flex items-center rounded-t-lg overflow-hidden">
                <img
                  src={YourMeals}
                  alt="Project Image"
                  className="h-full w-full object-contain group-hover:scale-110 group-hover:rotate-2 transition-transform duration-300"
                />
              </div>
              <div className="p-4 md:p-6 mt-2 space-y-2">
                <h1 className="text-sm md:text-lg lg:text-lg font-bold text-white transition-all ease-in-out text-left mb-5">
                  YourMeals
                </h1>
                <p className="text-xs md:text-base font-semibold text-gray-300 mt-1 text-left">
                  A simple and intuitive application designed to help users
                  explore a variety of recipes. Each meal includes a detailed
                  list of ingredients and step-by-step instructions.
                </p>
              </div>
              <div className="flex flex-wrap pl-4 mb-4 gap-2">
                <div className="px-4 py-1 rounded-full bg-transparent hover:bg-gray-600 transition-all duration-300 border border-white">
                  <p className="text-sm">Vue.JS</p>
                </div>
                <div className="px-4 py-1 rounded-full bg-transparent hover:bg-gray-600 transition-all duration-300 border border-white">
                  <p className="text-sm">Tailwind</p>
                </div>
                <div className="px-4 py-1 rounded-full bg-transparent hover:bg-gray-600 transition-all duration-300 border border-white">
                  <p className="text-sm">MealDB</p>
                </div>
              </div>
              <div className="flex flex-row pl-4 mb-4">
                <button className="cursor-pointer w-full sm:w-auto px-4 py-1 text-lg font-bold bg-white rounded-full text-black hover:bg-gray-200 transition-all duration-300 border border-white">
                  Visit site
                </button>
              </div>
            </div>
          </div>
          {/* Cards */}
          <div className="group transition-all duration-300 ease-in-out rounded-xl bg-transparent border border-white relative mx-2 z-10 mt-10 hover:scale-105 hover:shadow-lg hover:shadow-gray-600 w-full sm:w-80 md:w-96">
            <div className="flex flex-col space-y-2 md:space-y-0">
              <div className="h-full w-full self-stretch flex items-center rounded-t-lg overflow-hidden">
                <img
                  src={YourMeals}
                  alt="Project Image"
                  className="h-full w-full object-contain group-hover:scale-110 group-hover:rotate-2 transition-transform duration-300"
                />
              </div>
              <div className="p-4 md:p-6 mt-2 space-y-2">
                <h1 className="text-sm md:text-lg lg:text-lg font-bold text-white transition-all ease-in-out text-left mb-5">
                  YourMeals
                </h1>
                <p className="text-xs md:text-base font-semibold text-gray-300 mt-1 text-left">
                  A simple and intuitive application designed to help users
                  explore a variety of recipes. Each meal includes a detailed
                  list of ingredients and step-by-step instructions.
                </p>
              </div>
              <div className="flex flex-wrap pl-4 mb-4 gap-2">
                <div className="px-4 py-1 rounded-full bg-transparent hover:bg-gray-600 transition-all duration-300 border border-white">
                  <p className="text-sm">Vue.JS</p>
                </div>
                <div className="px-4 py-1 rounded-full bg-transparent hover:bg-gray-600 transition-all duration-300 border border-white">
                  <p className="text-sm">Tailwind</p>
                </div>
                <div className="px-4 py-1 rounded-full bg-transparent hover:bg-gray-600 transition-all duration-300 border border-white">
                  <p className="text-sm">MealDB</p>
                </div>
              </div>
              <div className="flex flex-row pl-4 mb-4">
                <button className="cursor-pointer w-full sm:w-auto px-4 py-1 text-lg font-bold bg-white rounded-full text-black hover:bg-gray-200 transition-all duration-300 border border-white">
                  Visit site
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Dock
        className="z-20 fixed bg-black mb-10"
        items={items}
        panelHeight={68}
        baseItemSize={50}
        magnification={70}
      />
    </div>
  );
}
