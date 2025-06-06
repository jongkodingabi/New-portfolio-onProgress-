import { AnimatePresence, motion } from "framer-motion";
import close from "@/assets/svg/circle-close.svg";

type PopUpModalsProps = {
  onClick: () => void;
  image?: string;
  title?: string;
  description: string;
  tags: string[];
  isLinked?: boolean;
  githubLink?: string;
  link?: string;
  cta?: string;
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
          <div className="bg-transparent bg-opacity-70 border border-white backdrop-blur-sm rounded-xl w-[95%] max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg shadow-lg mx-2">
            <div className="h-40 sm:h-48 md:h-56 w-full flex items-center rounded-t-xl overflow-hidden relative">
              <button
                onClick={onClick}
                className="absolute top-2 left-2 z-10 bg-black/50 p-1 rounded-full hover:bg-black/70 transition-all"
              >
                <img
                  src={close}
                  loading="lazy"
                  alt="close icon"
                  className="w-5 h-5 cursor-pointer"
                />
              </button>
              {image && (
                <img
                  src={image}
                  alt="Project Image"
                  className="h-full w-full object-cover transition-transform duration-300"
                />
              )}
            </div>
            <div className="flex flex-col space-y-2">
              <div className="p-3 md:p-4 mt-2 space-y-2 text-xs md:text-sm">
                <h1 className="text-base md:text-lg font-bold text-white text-left mb-2">
                  {title}
                </h1>
                <p className="text-xs md:text-sm font-semibold text-gray-300 text-left">
                  {description}
                </p>
              </div>
              <div className="flex flex-wrap pl-3 mb-3 gap-2">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-0.5 rounded-full bg-transparent hover:bg-gray-600 transition-all duration-300 border border-white text-xs font-semibold text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-row p-2 mb-3">
                {isLinked && link ? (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <button className="w-full px-3 py-1 text-sm font-bold bg-white rounded-full text-black hover:bg-gray-200 transition-all duration-300 border border-white">
                      {cta}
                    </button>
                  </a>
                ) : (
                  <a
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <button className="w-full px-3 py-1 text-sm font-bold bg-white rounded-full text-black hover:bg-gray-200 transition-all duration-300 border border-white">
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
