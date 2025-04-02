import ProjectsCards from "@/components/reactbits/ProjectCard";
import KataKita from "../assets/projects/kataKita.png";
import BeedeGo from "../assets/projects/beedego.png";

export default function ProjectsHiglight() {
  return (
    <div className="bg-black w-screen flex flex-col items-center justify-center text-center">
      <h1 className="flex justify-center items-center text-[10vw] font-extrabold text-white opacity-20 uppercase tracking-wide mt-20 w-screen">
        PROJECT HIGHLIGHTS
      </h1>

      <h1 className="text-3xl font-bold font-impact text-white mt-20">
        Projects Highlight
      </h1>
      <p className="text-lg font-light text-gray-400 mt-4">
        Here are some of my projects that I have worked on.
      </p>
      <div className="flex flex-col space-y-18 justify-center items-center py-10">
        {/* Card Project 1 */}
        <ProjectsCards
          title="KataKita App"
          description="lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          imageUrl={KataKita}
          cta="View Github"
          link="https://github.com/jongkodingabi/KataKita"
        />
        {/* Card Project 2 */}
        <ProjectsCards
          title="BeedeGo Web"
          description="lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          imageUrl={BeedeGo}
          cta="View Site"
          link="https://beedego-abisam-hazims-projects.vercel.app/"
        />
      </div>
    </div>
  );
}
