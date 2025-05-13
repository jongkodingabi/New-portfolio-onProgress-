export default function Quote() {
  return (
    <div className="bg-black max-w-full flex flex-col items-center justify-center text-center px-4 sm:px-8">
      {/* title */}
      <span className="mx-auto flex items-center justify-center z-0 absolute whitespace-nowrap text-center tracking-tighter text-xl sm:text-3xl md:text-6xl lg:text-[120px] max-w-[120px] font-extrabold text-white opacity-10 uppercase lg:mt-10 mt-2">
        <span>
          <h1 className="">QUOTE</h1>
        </span>
      </span>

      <div className="py-7 lg:mt-70 mt-20" data-aos="fade-up">
        {/* Quote Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-white w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 mx-auto mb-4"
          stroke="currentColor"
        >
          <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
        </svg>

        {/* Quote */}
        <h3
          className="text-lg sm:text-2xl md:text-4xl lg:text-6xl mx-4 sm:mx-12 md:mx-20 lg:mx-40 tracking-tighter font-extrabold font-impact text-white text-center"
          data-aos="fade-up"
        >
          Good code is like a good joke—clear, simple, and makes everyone nod in
          agreement.
        </h3>

        {/* Author */}
        <p className="text-sm sm:text-base lg:text-lg font-light text-gray-400 mt-4">
          Abisam Hazim
        </p>
      </div>
    </div>
  );
}
