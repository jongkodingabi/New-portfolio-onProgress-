import { useState } from "react";
import { Certificate } from "./Certificate";
import ProjectsHiglight from "./ProjectsHiglight";
import stars from "@/assets/svg/stars.svg";

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState("projects");
  return (
    <>
      <div className="bg-black">
        <div className="z-10 flex justify-center w-full items-start text-[11px] md:text-md">
          <img src={stars} alt="Stars" className="w-12" />
          <h1 className="font-bold">Projects & Reward</h1>
        </div>
        <div className="flex justify-center items-center space-x-8 border-b border-gray-700 max-w-[270px] md:max-w-2xl mx-auto mt-8">
          <button
            onClick={() => setActiveTab("projects")}
            className={`pb-2 transition-all ${
              activeTab === "projects"
                ? "text-white border-b-2 border-purple-400"
                : "text-gray-400"
            }`}
          >
            Projects
          </button>
          <button
            onClick={() => setActiveTab("cert")}
            className={`pb-2 transition-all ${
              activeTab === "cert"
                ? "text-white border-b-2 border-purple-400"
                : "text-gray-400"
            }`}
          >
            Certificates
          </button>
        </div>
        {activeTab == "projects" && <ProjectsHiglight />}
        {activeTab == "cert" && <Certificate />}
      </div>
    </>
  );
};

export default TabComponent;
