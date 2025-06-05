type CardsProps = {
  title: string;
  description: string;
  imageUrl: string;
  date: string;
  instance: string;
};
export default function ProjectsCards({
  title,
  description,
  imageUrl,
  instance,
}: CardsProps) {
  return (
    <>
      <div className="group relative rounded-xl overflow-hidden bg-zinc-900 hover:border-r hover:border-violet-400 ease-in-out max-w-6xl mx-4 p-4 sm:p-6 md:p-10 flex flex-col md:flex-row items-start gap-8">
        {/* Kiri - Konten Teks */}
        <div className="w-full md:w-1/2 text-left z-10 text-[10px] sm:text-xs md:text-sm">
          <h1 className="text-xl sm:text-2xl md:text-4xl font-bold text-white group-hover:opacity-100 transition-all">
            {title}
          </h1>
          <p className="text-xs sm:text-sm md:text-base font-medium text-gray-400 mt-2">
            {description}
          </p>

          <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 text-[10px] sm:text-sm text-gray-400 mt-4 sm:mt-6">
            <span className="bg-zinc-800 px-3 py-1 rounded-full">
              {instance}
            </span>
          </div>
        </div>

        {/* Kanan - Gambar Sertifikat */}
        <div className="w-full md:w-1/2 relative flex justify-center items-end md:items-end -bottom-14 min-h-[200px] md:min-h-[300px]">
          <div className="relative w-full md:absolute md:bottom-[-40px] md:right-0 transition-transform duration-500 ease-in-out group-hover:scale-[1.02] group-hover:rotate-1 group-hover:shadow-2xl">
            <img
              src={imageUrl}
              alt="Form Builder Preview"
              loading="lazy"
              fetchPriority="high"
              className="w-full h-auto object-cover rounded-xl border border-zinc-800 transition-transform duration-500 group-hover:scale-105 group-hover:rotate-3"
              style={{ filter: "brightness(0.95) saturate(1.2)" }}
            />

            {/* Hover bubble */}
            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <span className="bg-white/80 text-zinc-900 px-4 py-2 rounded-full text-xs sm:text-sm md:text-lg font-bold shadow-lg animate-bounce">
                🎉 See More!
              </span>
            </div>
          </div>
        </div>

        {/* Border bawah saat hover */}
        <div className="absolute rounded-xl bottom-0 left-0 w-0 h-1 bg-white group-hover:w-full transition-all duration-300"></div>
      </div>
    </>
  );
}
