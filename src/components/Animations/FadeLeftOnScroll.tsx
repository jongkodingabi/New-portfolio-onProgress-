import React, { useRef, useEffect, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Wajib daftar plugin sekali saja
gsap.registerPlugin(ScrollTrigger);

// Tipe props untuk komponen
interface FadeLeftOnScrollProps {
  children: ReactNode;
  delay?: number;
}

const FadeLeftOnScroll: React.FC<FadeLeftOnScrollProps> = ({
  children,
  delay = 0,
}) => {
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    gsap.fromTo(
      el,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 2,
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
    <div className="overflow-x-hidden-" ref={elementRef}>
      {children}
    </div>
  );
};

export default FadeLeftOnScroll;
