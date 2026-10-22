
"use client";

import { useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

type RevealProps = {
  children: ReactNode;
  delay?: number;
};

export default function Reveal({
  children,
  delay = 0,
}: RevealProps) {
  const revealRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const element = revealRef.current;
      const content = element?.firstElementChild;

      if (!element || !content) return;

      const animation = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: "top 82%",
          once: true,
        },
        delay,
      });

      animation.fromTo(
        content,
        {
          y: 55,
          scale: 0.97,
          autoAlpha: 0,
          filter: "blur(8px)",
        },
        {
          y: 0,
          scale: 1,
          autoAlpha: 1,
          filter: "blur(0px)",
          duration: 1.15,
          ease: "power4.out",
          clearProps: "filter,transform,opacity,visibility",
        }
      );
    },
    { scope: revealRef }
  );

  return (
    <div ref={revealRef} className="bg-[#080808]">
      {children}
    </div>
  );
}
