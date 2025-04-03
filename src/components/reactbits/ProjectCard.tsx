import arrowSVG from "@/assets/svg/right-arrow.svg";
type CardsProps = {
  title: string;
  description: string;
  imageUrl: string;
  cta: string;
  link: string;
};
export default function ProjectsCards({
  title,
  description,
  imageUrl,
  cta,
  link,
}: CardsProps) {
  return (
    <div className="group rounded-xl bg-zinc-900 relative">
      <div className="flex flex-row space-x-4">
        <div className="p-10 mt-14 max-w-md">
          <h1 className="text-2xl font-bold text-white opacity-45 group-hover:opacity-100 transition-all ease-in-out text-left">
            {title}
          </h1>
          <p className="text-lg font-light text-gray-300 opacity-45 group-hover:opacity-100 mt-2 text-left">
            {description}
          </p>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex space-x-2"
          >
            <h4 className="group mt-3 text-left hover:text-gray-400 transition-all ease-in-out duration-150">
              {cta}
            </h4>
            <img
              src={arrowSVG}
              className="w-5 mt-3.5 hover:text-gray-400"
              alt=""
            />
          </a>
        </div>
        <div className="h-full self-stretch flex items-center rounded-r-xl overflow-hidden">
          <img
            src={imageUrl}
            alt="Project Image"
            className="h-max-2xl max-w-xl w-auto object-contain opacity-40 group-hover:opacity-100 group-hover:scale-120 group-hover:rotate-3 transition-transform duration-300"
          />
        </div>
      </div>
      <div className="absolute rounded-xl bottom-0 left-0 w-0 h-1 bg-white group-hover:w-full transition-all duration-300"></div>
    </div>
  );
}
