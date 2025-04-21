type MainCardProps = {
  img: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
  cta: string;
  githubLink: string;
  isLinked: boolean;
};
export default function MainCard({
  img,
  title,
  description,
  tags,
  link,
  githubLink,
  cta,
  isLinked,
}: MainCardProps) {
  return (
    <div className="group cursor-pointer hover:bg-gradient-to-r from-purple-300 via-yellow-300 to-pink-300 p-1 border border-gray-400 hover:border-0 shadow-2xl transition-all duration-300 ease-in-out hover:transition-all hover:duration-500 hover:ease-in-out rounded-xl relative mx-2 z-10 mt-10 hover:scale-105 hover:shadow-lg hover:shadow-gray-600 w-full sm:w-80 md:w-96">
      <div className="bg-zinc-950 rounded-lg w-full h-full">
        <div className="flex flex-col space-y-2 md:space-y-0">
          <div className="h-full w-full self-stretch flex items-center rounded-t-lg overflow-hidden">
            <img
              src={img}
              alt="Project Image"
              className="h-full w-full object-contain group-hover:scale-110 group-hover:rotate-2 transition-transform duration-300"
            />
          </div>
          <div className=""></div>
          <div className="p-4 md:p-4 mt-2 space-y-2">
            <h1 className="text-sm md:text-lg lg:text-lg font-bold text-white transition-all ease-in-out text-left mb-5">
              {title}
            </h1>
            <p className="text-xs md:text-base font-semibold text-gray-300 mt-1 text-left">
              {description}
            </p>
          </div>
          <div className="flex flex-wrap pl-4 mb-4 gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="cursor-default px-4 py-1 rounded-full bg-transparent hover:bg-gray-600 transition-all duration-300 border border-white text-xs md:text-sm font-semibold text-gray-300"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex flex-row p-2 mb-4">
            {isLinked && link ? (
              <a href={link} target="_blank" rel="noopener noreferrer">
                <button className="cursor-pointer w-full sm:w-auto px-4 py-1 text-lg font-bold bg-white rounded-full text-black hover:bg-gray-200 transition-all duration-300 border border-white">
                  {cta}
                </button>
              </a>
            ) : (
              <a href={githubLink} target="_blank" rel="noopener noreferrer">
                <button className="cursor-pointer w-full sm:w-auto px-4 py-1 text-lg font-bold bg-white rounded-full text-black hover:bg-gray-200 transition-all duration-300 border border-white">
                  {cta}
                </button>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
