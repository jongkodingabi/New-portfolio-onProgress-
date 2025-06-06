import { BsEyeFill } from "react-icons/bs";

type SecondaryCertifCardProps = {
  title: string;
  description: string;
  src: string;
  instance: string;
  alt: string;
  onClick?: () => void;
};

const SecondaryCertifCard = ({
  title,
  description,
  src,
  instance,
  alt,
  onClick = () => {}, // Default to an empty function if not provided
}: SecondaryCertifCardProps) => {
  return (
    <>
      <div
        className="bg-zinc-900 text-white rounded-2xl p-6 max-w-md mx-auto shadow-lg z-10 cursor-pointer"
        onClick={onClick}
      >
        <h2 className="text-2xl font-semibold mb-2">{title}</h2>
        <p className="text-sm text-gray-300 mb-4">{description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="bg-gray-700 text-sm px-3 py-1 rounded-md">
            {instance}
          </span>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4 mb-4">
          <div className="bg-white text-gray-800 p-2 rounded-full">
            <BsEyeFill />
          </div>
        </div>

        {/* Image */}
        <div className="rounded-lg overflow-hidden">
          <img
            src={src}
            alt={alt}
            loading="lazy"
            fetchPriority="high"
            className="w-full object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default SecondaryCertifCard;
