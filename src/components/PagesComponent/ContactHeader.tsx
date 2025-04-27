export default function Quote() {
  return (
    <div className="bg-black w-full flex flex-col items-center justify-center text-center overflow-x-hidden">
      {/* title */}
      <span className="mx-auto flex items-center justify-center z-0 absolute whitespace-nowrap text-center tracking-tighter text-2xl md:text-7xl lg:text-[100px] font-extrabold text-white opacity-10 uppercase lg:mt-30 mt-2">
        <span className="">
          <h1 className="">CONTACT</h1>
        </span>
      </span>

      <div className="py-7 lg:mt-80 mt-25" data-aos="fade-up">
        {/* Qoute */}
        <h3
          className="text-2xl md:text-6xl mx-8 md:mx-20 lg:mx-60 lg:text-7xl tracking-tighter font-extrabold font-impact text-white text-center"
          data-aos="fade-up"
        >
          I'D LOVE TO HEAR FROM YOU
        </h3>
        <h3
          className="text-2xl md:text-6xl mx-8 md:mx-20 lg:mx-60 lg:text-7xl tracking-tighter font-extrabold font-impact text-gray-400 text-center"
          data-aos="fade-up"
        >
          CONTACT ME
        </h3>

        {/* Author */}
        <p className="text-xs md:text-2xl font-bold text-gray-400 mt-4 mx-4 md:mx-40">
          Let's turn ideas into reality! If you have a project in mind, need
          assistance, or simply want to start a conversation, feel free to drop
          me a message anytime.
        </p>
      </div>
    </div>
  );
}
