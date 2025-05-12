import { useRef } from "react";
import Lanyard from "../../../app/components/Lanyard";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const ContactSection = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_x8u7oup",
          "template_pewvlxw",
          form.current,
          "0fwvCkIqeHTUwVVkw"
        )
        .then(
          () => {
            toast.success("Email sent successfully!");
            if (form.current) {
              form.current.reset();
            }
          },
          () => {
            console.log("Failed to send email.");
          }
        );
    }
  };
  return (
    <div className="max-w-full max-h-full bg-gray-300 flex items-center justify-center">
      <Toaster position="top-center" />
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
            ref={form}
            onSubmit={sendEmail}
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
            <input
              type="submit"
              value="Send"
              className="w-full bg-gray-900 px-4 py-2 text-white rounded-full cursor-pointer hover:bg-gray-800 transition duration-300 ease-in-out"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
