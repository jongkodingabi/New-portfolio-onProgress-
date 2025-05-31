import { useEffect, useState } from "react";
import myLogo from "../assets/logo_new.webp";
type className = {
  className: string;
};
export default function Header({ className }: className) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()));
    return () => clearInterval(interval);
  }, []);

  return (
    <header className={`${className} z-30 fixed top-0 left-0 w-full`}>
      <div className="flex">
        <img
          src={myLogo}
          alt="myLogo"
          className="w-10 md:w-16 ml-4 mt-4 md:mt-0"
          loading="lazy"
        />
        <p className="text-sm font-bold text-white mt-8">
          Code With Abisam {"</>"}
        </p>
      </div>

      <div className="mr-10 mt-8 text-base md:text-xl">
        {time.toLocaleTimeString("en-US", { timeZone: "Asia/Jakarta" })}
      </div>
    </header>
  );
}
