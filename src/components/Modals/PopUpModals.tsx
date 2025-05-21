import { AnimatePresence, motion } from "framer-motion";
import close from "@/assets/svg/circle-close.svg";

type PopUpModalsProps = {
  onClick: () => void;
  image: string;
  title: string;
  description: string;
  tags: string[];
  isLinked: boolean;
  githubLink: string;
  link?: string;
  cta: string;
};

const PopUpModals = ({
  onClick,
  image,
  title,
  description,
  tags,
  isLinked,
  githubLink,
  link,
  cta,
}: PopUpModalsProps) => {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] bg-black/60 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClick}
      >
        <div
          className="fixed inset-0 z-[9999] bg-black/60 flex items-center justify-center"
          onClick={onClick}
        >
          <div className="bg-transparent bg-opacity-70 border border-white backdrop-blur-sm rounded-xl w-[90%] max-w-xl shadow-lg">
            <div className="h-full w-full self-stretch flex items-center rounded-t-xl overflow-hidden p-0 m-0 relative">
              <button
                onClick={onClick}
                className="absolute top-2 left-2 z-10 bg-black/50 p-2 rounded-full hover:bg-black/70 transition-all"
              >
                <img
                  src={close}
                  loading="lazy"
                  alt="close icon"
                  className="w-6 h-6 cursor-pointer"
                />
              </button>
              <img
                src={image}
                alt="Project Image"
                className="h-full w-full object-cover group-hover:scale-110 group-hover:rotate-2 transition-transform duration-300 "
              />
            </div>
            <div className="flex flex-col space-y-2 md:space-y-0">
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
                  <a
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="cursor-pointer w-full sm:w-auto px-4 py-1 text-lg font-bold bg-white rounded-full text-black hover:bg-gray-200 transition-all duration-300 border border-white">
                      {cta}
                    </button>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PopUpModals;
