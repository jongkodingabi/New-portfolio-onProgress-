import ProjectsCards from "@/components/reactbits/ProjectCard";
import { useNavigate } from "react-router-dom";
import MainButton from "@/components/button/MainButton";
import itemsProjects from "@/ProjectItems";

export default function ProjectsHiglight() {
  const navigate = useNavigate();
  const projects = itemsProjects.slice(0, 3);
  return (
    <div className="bg-black w-screen flex flex-col items-center justify-center text-center overflow-x-hidden">
      {/* Title */}

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
            tags={project.tags}
          />
        ))}
      </div>
      {/* Projects Nav */}
      <MainButton title="View All" onClick={() => navigate("/projects")} />
    </div>
  );
}
