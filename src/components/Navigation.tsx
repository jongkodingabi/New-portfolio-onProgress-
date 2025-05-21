import { useNavigate } from "react-router-dom";
import { VscHome, VscCode } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Dock from "@/components/reactbits/Dock";

export default function Navigation() {
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
    <Dock
      className="z-99 fixed bg-black"
      items={items}
      panelHeight={68}
      baseItemSize={50}
      magnification={70}
    />
  );
}
