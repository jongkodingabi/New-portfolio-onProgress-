import TextPressure from "../components/reactbits/TextPressure";
import Profile from "../assets/Profile.png";
import { useRef } from "react";

export function About() {
  const containerRef = useRef(null);
  return (
    <div className="bg-black w-screen min-h-screen flex flex-col items-center justify-center text-center mt-[100vh]">
      <div className="z-10 flex items-center justify-center w-full">
        <TextPressure
          text="Hello!"
          flex={false} // Pastikan ini false agar tidak mengganggu
          alpha={false}
          stroke={false}
          width={true}
          weight={true}
          italic={true}
          textColor="#ffffff"
          strokeColor="#ff0000"
          className="w-full text-center"
        />
      </div>
      <div className="">
        <img src={Profile} alt="" className="rounded-full w-full h-60 mt-40" />
      </div>
    </div>
  );
}
