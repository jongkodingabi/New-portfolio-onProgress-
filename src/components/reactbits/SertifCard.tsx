type CardsProps = {
  title: string;
  description: string;
  imageUrl: string;
  date: string;
};
export default function ProjectsCards({
  title,
  description,
  imageUrl,
  date,
}: CardsProps) {
  return (
    <>
      <div className="fade-left group rounded-xl bg-zinc-900 relative lg:max-w-5xl mx-4">
        <div className="flex flex-col md:flex-row-reverse">
          {/* Konten Teks */}
          <div className="p-4 sm:p-6 md:p-10 mt-1 w-full md:w-1/2 max-w-full text-[9px] md:text-xs">
            <h1 className="text-[2px] font-bold text-white opacity-45 group-hover:opacity-100 transition-all ease-in-out text-left">
              {title}
            </h1>
            <p className="text-xs sm:text-sm md:text-lg font-light text-gray-300 opacity-45 group-hover:opacity-100 mt-2 text-left">
              {description}
            </p>
            <div className="flex flex-wrap mt-4 gap-2 mb-2 text-gray-400">
              <p>{date}</p>
            </div>
          </div>

          {/* Gambar */}
          <div className="w-full md:w-1/2 relative overflow-hidden md:rounded-r-xl rounded-b-2xl p-0 flex items-end">
            <img
              src={imageUrl}
              alt="Certificate"
              loading="lazy"
              className="w-full object-cover h-[180px] md:h-[350px] translate-y-3"
            />
          </div>
        </div>

        {/* Border bawah saat hover */}
        <div className="absolute rounded-xl bottom-0 left-0 w-0 h-1 bg-white group-hover:w-full transition-all duration-300"></div>
      </div>
    </>
  );
}
