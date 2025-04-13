import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import MainCard from "@/components/reactbits/MainCard";
import itemsProjects from "@/ProjectItems";

// Projects data

export default function Projects() {
  return (
    <>
      <div className="relative top-0 m-0 bg-black z-0 max-w-full min-h-screen overflow-hidden text-white flex flex-col text-center">
        <Header className="fixed flex justify-between text-xl left-0 w-full z-20 text-white" />
        {/* Bloop animate header */}
        <div className="absolute inset-0 flex flex-col items-center justify-center mx-auto z-2 max-w-lg">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute top-0 -bottom-10 left-30 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          <h1 className="absolute top-14 text-center text-white font-extrabold tracking-tighter z-[9999] flex justify-center items-center">
            My Projects
          </h1>
        </div>

        {/* Cards Display */}
        <div className="flex flex-col sm:flex-row mx-4 md:flex-wrap justify-center items-center mt-40 sm:mt-80 md:mt-40 z-10 gap-6">
          {itemsProjects.map((item) => (
            <MainCard
              key={item.id}
              img={item.image}
              title={item.title}
              description={item.description}
              tags={item.tags}
              link={item.link}
              isLinked={item.isLinked}
              githubLink={item.github}
              cta={item.cta}
            />
          ))}
        </div>
        <Navigation />
      </div>
    </>
  );
}
