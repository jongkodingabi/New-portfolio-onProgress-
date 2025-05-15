import React, { useRef, useEffect, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Wajib daftar plugin sekali saja
gsap.registerPlugin(ScrollTrigger);

// Tipe props untuk komponen
interface FadeUpProps {
  children: ReactNode;
  delay?: number;
}

const FadeUp: React.FC<FadeUpProps> = ({ children, delay = 0 }) => {
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    gsap.fromTo(
      el,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  }, [delay]);

  return (
    <div className="z-20" ref={elementRef}>
      {children}
    </div>
  );
};

export default FadeUp;
