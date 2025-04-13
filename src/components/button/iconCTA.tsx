type IconCTAProps = {
  imageUrl: string;
  altText: string;
  link?: string;
};

export default function IconCTA({ imageUrl, altText, link }: IconCTAProps) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="w-10 h-10 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
        <img src={imageUrl} alt={altText} className="w-8 md:w-10" />
      </div>
    </a>
  );
}
