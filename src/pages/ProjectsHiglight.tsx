import ProjectsCards from "@/components/reactbits/ProjectCard";
import KataKita from "../assets/projects/kataKita.png";
import BeedeGo from "../assets/projects/beedego.png";
import YourMeals from "../assets/projects/YourMeals.png";
import MainButton from "@/components/button/MainButton";

export default function ProjectsHiglight() {
  return (
    <div className="bg-black w-screen flex flex-col items-center justify-center text-center">
      <span className="mx-auto whitespace-nowrap text-center text-[47px] font-extrabold text-white opacity-10 uppercase mt-20">
        <span className="transform-none">
          <h1 className="">PROJECT HIGHLIGHTS</h1>
        </span>
      </span>

      <h1 className="text-3xl font-bold font-impact text-white mt-20">
        Recent Projects
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
        {/* Card Project 3 */}
        <ProjectsCards
          title="YourMeals App"
          description="lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          imageUrl={YourMeals}
          cta="View Site"
          link="https://your-meals-app.netlify.app/"
        />
      </div>
      <MainButton title="See More" />
    </div>
  );
}
