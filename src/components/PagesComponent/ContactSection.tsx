import Lanyard from "../../../app/components/Lanyard";

const ContactSection = () => {
  return (
    <div className="max-w-full max-h-full bg-gray-300 flex items-center justify-center">
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-7xl gap-4 p-4">
        {/* Lanyard */}
        <div className="flex-1 flex justify-center">
          <Lanyard />
        </div>

        {/* Form */}
        <div className="flex-1 flex flex-col py-10 items-center justify-center md:mt-55">
          <div className="flex text-left pl-2 w-full max-w-md">
            <h1 className="text-2xl text-left font-bold text-gray-800">
              Message Me
            </h1>
          </div>
          <form
            action=""
            className="mt-10 flex flex-col items-center justify-center w-full max-w-md rounded-2xl p-4 gap-6"
          >
            <label
              htmlFor="name"
              className="w-full inline-block text-gray-500 text-right"
            >
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border-b-2 border-black flex-1 py-2 placeholder-gray-500 outline-none"
              />
            </label>
            <label
              htmlFor="email"
              className="w-full inline-block text-gray-500 text-right"
            >
              <input
                type="email"
                placeholder="Your email"
                className="w-full border-b-2 border-black flex-1 py-2 placeholder-gray-500 outline-none"
              />
            </label>
            <label
              htmlFor="message"
              className="w-full inline-block text-gray-500 text-right"
            >
              <input
                type="text"
                placeholder="Your message"
                className="w-full border-b-2 border-black flex-1 py-2 placeholder-gray-500 outline-none"
              />
            </label>
            <button
              type="submit"
              className="w-full bg-gray-900 px-4 py-2 text-white rounded-full cursor-pointer hover:bg-gray-800 transition duration-300 ease-in-out"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
