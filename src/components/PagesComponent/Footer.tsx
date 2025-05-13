import myLogo from "@/assets/myLogo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex flex-col bg-zinc-900 text-white mask-b-from-80% mask-b-to-90%">
      <footer className="container">
        <div className="flex justify-between items-center py-4 px-6">
          <div className="flex flex-col items-left">
            <img src={myLogo} alt="Logo" className="w-20 object-contain mr-2" />
            <span className="text-md text-left font-light text-gray-400 max-w-100">
              Merging art and technology to craft digital spaces that are as
              functional as they are visually striking.
            </span>
          </div>
          <div className="flex gap-10 p-4">
            {/* Route Page Links */}
            <nav className="flex flex-col">
              <h4 className="font-bold mb-4">Links</h4>
              <Link to="/" className="text-gray-300 hover:text-gray-400">
                Home
              </Link>
              <Link
                to="/projects"
                className="text-gray-300 hover:text-gray-400"
              >
                Projects
              </Link>
              <a href="#contact" className="text-gray-300 hover:text-gray-400">
                Contact
              </a>
            </nav>

            {/* Social Media Links */}
            <nav className="flex flex-col">
              <h4 className="font-bold mb-4">Connect</h4>
              <a className="text-light text-gray-300 hover:text-gray-400">
                Github
              </a>
              <a className="text-light text-gray-300 hover:text-gray-400">
                Linkedin
              </a>
            </nav>
          </div>
        </div>
      </footer>
      <div className="flex flex-col items-center justify-center py-4 pb-23">
        <div className="border-t w-350 border-gray-600 flex items-center justify-center"></div>
        <p className="text-xs text-gray-400 font-medium pt-2">
          © 2025 Abisam Hazim. All rights deserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
