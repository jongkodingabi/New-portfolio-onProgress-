import LinkButton from "../LinkButton";
import FadeLeftOnScroll from "../Animations/FadeLeftOnScroll";

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
      <FadeLeftOnScroll>
        <div className="fade-left group rounded-xl bg-zinc-900 relative mx-4">
          <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row-reverse">
            <div className="h-full w-full self-stretch flex items-center md:rounded-r-xl rounded-t-2xl overflow-hidden">
              <img
                src={imageUrl}
                alt="Project Image"
                className="h-full w-full md:h-max-2xl md:max-w-2xl object-contain opacity-40 group-hover:opacity-100 group-hover:scale-120 group-hover:rotate-3 transition-transform duration-300"
              />
            </div>
            <div className="p-6 md:p-10 mt-1 max-w-full md:max-w-md">
              {/* icon CTA */}
              <LinkButton
                link={link}
                githubLink={githubLink}
                isLinked={isLinked}
              />
              <h1 className="text-base md:text-2xl font-bold text-white opacity-45 group-hover:opacity-100 transition-all ease-in-out text-left">
                {title}
              </h1>
              <p className="text-sm md:text-lg font-light text-gray-300 opacity-45 group-hover:opacity-100 mt-2 text-left">
                {description}
              </p>
              <div className="flex flex-wrap mt-4 gap-2">
                {tags?.map((tag, index) => (
                  <div className="">
                    <span
                      key={index}
                      className="cursor-default px-4 py-1 rounded-full bg-transparent hover:bg-gray-600 transition-all duration-300 border border-white text-xs md:text-sm font-semibold text-gray-300"
                    >
                      {tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute rounded-xl bottom-0 left-0 w-0 h-1 bg-white group-hover:w-full transition-all duration-300"></div>
        </div>
      </FadeLeftOnScroll>
    </>
  );
}
