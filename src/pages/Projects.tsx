import { VscHome, VscCode } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Dock from "@/components/reactbits/Dock";

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
      <div className="absolute top-0 bg-black z-0 w-screen h-[100vh] flex items-center justify-center text-center overflow-x-hidden scrollbar-hidden">
        <div className="absolute top-5 w-full max-w-lg z-0">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute top-0 -bottom-10 left-30 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          <h1 className="text-center text-white font-extrabold tracking-tighter z-[9999] flex justify-center items-center mt-20 relative">
            My Projects
          </h1>
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
