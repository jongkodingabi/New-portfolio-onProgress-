import { useRef } from "react";
import Lanyard from "../../../app/components/Lanyard";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import Person from "@/assets/svg/person.svg";
import Email from "@/assets/svg/email.svg";
import Message from "@/assets/svg/message.svg";
import z from "zod";

const formSchema = z.object({
  name: z.coerce.string().min(3, "Invalid name input"),
  email: z.coerce.string().email("Invalid email address"),
  message: z.coerce.string().min(5, "Message is required min 5 characters"),
});

const ContactSection = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    // Ambil data dari form
    const formData = new FormData(form.current);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };

    // Validasi dengan Zod
    const result = formSchema.safeParse(data);
    if (!result.success) {
      const errors = result.error.flatten().fieldErrors;
      toast.error(
        errors.name?.[0] ||
          errors.email?.[0] ||
          errors.message?.[0] ||
          "Please fill in all fields correctly."
      );
      return;
    }

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
  };
  return (
    <div className="max-w-full max-h-full bg-zinc-200 flex flex-col items-center justify-center">
      <Toaster position="top-center" />
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-7xl gap-4 p-4">
        {/* Lanyard */}
        <div className="flex-1 flex justify-center">
          <Lanyard />
        </div>

        {/* Form */}
        <div className="flex-1 flex flex-col py-10 items-center justify-center md:mt-55">
          <div className="flex text-left pl-2 w-full max-w-md">
            <h1 className="text-2xl text-left font-bold text-black">
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
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full border-b-2 border-black flex-1 py-2 placeholder-gray-500 outline-none"
                  required
                />
                <span className="absolute top-2 right-0 inset-y-0 pr-0 pb-2 flex items-center">
                  <img src={Person} alt="person svg" className="w-6 h-6" />
                </span>
              </div>
            </label>
            <label
              htmlFor="email"
              className="w-full inline-block text-gray-500 text-right"
            >
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  className="w-full border-b-2 border-black flex-1 py-2 placeholder-gray-500 outline-none"
                  required
                />
                <span className="absolute top-2 right-0 inset-y-0 pr-0 pb-2 flex items-center">
                  <img src={Email} alt="person svg" className="w-6 h-6" />
                </span>
              </div>
            </label>
            <label
              htmlFor="message"
              className="w-full inline-block text-gray-500 text-right"
            >
              <div className="relative">
                <textarea
                  name="message"
                  placeholder="Your message"
                  className="w-full border-b-2 border-black flex-1 py-2 placeholder-gray-500 outline-none"
                  required
                ></textarea>
                <span className="absolute top-2 right-0 inset-y-0 pr-0 pb-2 flex items-center">
                  <img src={Message} alt="person svg" className="w-6 h-6" />
                </span>
              </div>
            </label>
            <input
              type="submit"
              value="Send"
              className="w-full bg-zinc-950 px-4 py-2 text-white rounded-full cursor-pointer hover:bg-zinc-900 transition duration-300 ease-in-out"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
