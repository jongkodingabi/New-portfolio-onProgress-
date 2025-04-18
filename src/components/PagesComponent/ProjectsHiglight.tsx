import ProjectsCards from "@/components/reactbits/ProjectCard";
import { useNavigate } from "react-router-dom";
import MainButton from "@/components/button/MainButton";
import itemsProjects from "@/ProjectItems";

export default function ProjectsHiglight() {
  const navigate = useNavigate();
  const projects = itemsProjects.slice(0, 3);
  return (
    <div className="bg-black w-screen flex flex-col items-center justify-center text-center overflow-x-hidden">
      {/* <span className="mx-auto whitespace-nowrap text-center hidden sm:hidden lg:text-[40px] font-extrabold text-white opacity-10 uppercase md:mt-20 mt-10">
        <span className="transform-none">
          <h1 className="">PROJECT HIGHLIGHTS</h1>
        </span>
      </span> */}

      <h1 className="text-xs lg:text-3xl font-bold font-impact text-white mt-10 mx-2 lg:mt-20">
        Recent Projects
      </h1>
      <p className="text-lg font-light text-gray-400 mt-4 sm:mx-2">
        Here are some of my projects that I have worked on.
      </p>
      <div className="flex flex-col space-y-18 justify-center items-center py-10">
        {/* Card Projects */}
        {projects.map((project) => (
          <ProjectsCards
            key={project.id}
            imageUrl={project.image}
            title={project.title}
            description={project.description}
            link={project.link}
            githubLink={project.github}
            cta={project.cta}
            isLinked={project.isLinked}
          />
        ))}
      </div>
      <MainButton title="See More" onClick={() => navigate("/projects")} />
    </div>
  );
}
