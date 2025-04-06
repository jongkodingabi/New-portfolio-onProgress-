import { VscHome, VscCode } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Dock from "@/components/reactbits/Dock";
import MainCard from "@/components/reactbits/MainCard";
import itemsProjects from "@/ProjectItems";

// Projects data

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
    <>
      <div className="absolute top-0 bg-neutral-950 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 z-0 w-screen h-full flex items-center justify-center text-center overflow-x-hidden scrollbar-hidden">
        <Header className="fixed flex justify-between text-xl left-0 w-full z-20 text-white" />
        {/* Bloop animate header */}
        <div className="absolute top-0 w-full max-w-lg z-0">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute top-0 -bottom-10 left-30 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          <h1 className="text-center text-white font-extrabold tracking-tighter z-[9999] flex justify-center items-center mt-20 relative">
            My Projects
          </h1>
        </div>

        {/* Cards Display */}
        <div className="absolute flex flex-col sm:flex-row mx-4 md:flex-wrap justify-center items-center mt-40 sm:mt-80 md:mt-40 z-10 gap-6">
          {itemsProjects.map((item) => (
            <MainCard
              key={item.id}
              img={item.image}
              title={item.title}
              description={item.description}
              tags={item.tags}
              link={item.link}
              cta={item.cta}
            />
          ))}
        </div>
      </div>
      <Dock
        className="z-20 fixed bg-black mb-10"
        items={items}
        panelHeight={68}
        baseItemSize={50}
        magnification={70}
      />
    </>
  );
}
