import LinkButton from "../LinkButton";

type CardsProps = {
  title: string;
  description: string;
  imageUrl: string;
  cta: string;
  link: string;
  githubLink: string;
  isLinked: boolean;
  tags?: string[];
};
export default function ProjectsCards({
  title,
  description,
  imageUrl,
  link,
  githubLink,
  tags,
  isLinked,
}: CardsProps) {
  return (
    <>
      <div className="fade-left group rounded-xl bg-zinc-900 relative lg:max-w-5xl mx-4">
        <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row-reverse">
          <div className="w-full md:w-1/2 flex items-center md:rounded-r-xl rounded-t-2xl overflow-hidden">
            <img
              src={imageUrl}
              alt="Project Image"
              loading="lazy"
              className="w-full h-48 sm:h-64 md:h-full object-cover opacity-40 group-hover:opacity-100 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300"
            />
          </div>
          <div className="p-4 sm:p-6 md:p-10 mt-1 w-full md:w-1/2 max-w-full">
            {/* icon CTA */}
            <LinkButton
              link={link}
              githubLink={githubLink}
              isLinked={isLinked}
            />
            <h1 className="text-base sm:text-lg md:text-2xl font-bold text-white opacity-45 group-hover:opacity-100 transition-all ease-in-out text-left">
              {title}
            </h1>
            <p className="text-xs sm:text-sm md:text-lg font-light text-gray-300 opacity-45 group-hover:opacity-100 mt-2 text-left">
              {description}
            </p>
            <div className="flex flex-wrap mt-4 gap-2 mb-2">
              {tags?.map((tag, index) => (
                <span
                  key={index}
                  className="cursor-default px-3 sm:px-4 py-1 rounded-full bg-transparent hover:bg-gray-600 transition-all duration-300 border border-white text-xs sm:text-sm font-semibold text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute rounded-xl bottom-0 left-0 w-0 h-1 bg-purple-400 group-hover:w-full transition-all duration-300"></div>
      </div>
    </>
  );
}
