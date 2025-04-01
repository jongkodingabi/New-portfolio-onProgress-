import { useEffect, useState } from "react";
import myLogo from "../assets/myLogo.png";
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
    <header className={`${className} top-0 left-0 w-full`}>
      <img src={myLogo} alt="myLogo" className="w-10 md:w-16 ml-4 mt-4" />
      <div className="mr-10 mt-8 text-base md:text-xl">
        {time.toLocaleTimeString("en-US", { timeZone: "Asia/Jakarta" })}
      </div>
    </header>
  );
}
