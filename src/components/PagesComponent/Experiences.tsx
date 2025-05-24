import experiencesItems from "@/ExperiencesItems";

const Experiences = () => {
  return (
    <div className="slider-left">
      <div className="slider-track-left gap-8">
        {experiencesItems.map((exp) => (
          <div className="slide">
            <div className="item bg-zinc-900 rounded-xl w-80 text-left p-4 border-r border-l border-violet-400">
              <p className="text-lg font-bold mb-6">{exp.title}</p>
              <p className="text-gray-600 font-bold mb-2 text-sm">{exp.date}</p>
              <p className="text-gray-600 font-semibold text-sm">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
        {experiencesItems.map((exp) => (
          <div className="slide">
            <div className="item bg-zinc-900 rounded-xl w-80 text-left p-4 border-r border-l border-violet-400">
              <p className="text-lg font-bold mb-6">{exp.title}</p>
              <p className="text-gray-600 font-bold mb-2 text-sm">{exp.date}</p>
              <p className="text-gray-600 font-semibold text-sm">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
