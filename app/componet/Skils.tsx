"use client";

import { useRef } from "react";
import {
  SiAxios,
  SiCss,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "@icons-pack/react-simple-icons";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const skills = [
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "#F7DF1E",
  },
  {
    name: "CSS3",
    icon: SiCss,
    color: "#1572B6",
  },
  {
    name: "HTML5",
    icon: SiHtml5,
    color: "#E34F26",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "#FFFFFF",
  },
  {
    name: "React",
    icon: SiReact,
    color: "#61DAFB",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "#3178C6",
  },
  {
    name: "GitHub",
    icon: SiGithub,
    color: "#FFFFFF",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "#06B6D4",
  },
  {
    name: "Git",
    icon: SiGit,
    color: "#F05032",
  },
  {
    name: "Axios",
    icon: SiAxios,
    color: "#671DDF",
  },
];

const Skils = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;

      if (!section) return;

      const title = section.querySelector(".skills-title");
      const description = section.querySelector(".skills-description");
      const cards = section.querySelectorAll(".skill-card");

      const observer = new IntersectionObserver(
        (entries) => {
          if (!entries.some((entry) => entry.isIntersecting)) return;

          observer.disconnect();

          const timeline = gsap.timeline();

          if (title) {
            timeline.fromTo(
              title,
              {
                autoAlpha: 0,
                x: -35,
                filter: "blur(8px)",
              },
              {
                autoAlpha: 1,
                x: 0,
                filter: "blur(0px)",
                duration: 0.8,
                ease: "power3.out",
              }
            );
          }

          if (description) {
            timeline.fromTo(
              description,
              {
                autoAlpha: 0,
                y: 15,
              },
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.6,
                ease: "power2.out",
              },
              "-=0.4"
            );
          }

          if (cards.length > 0) {
            timeline.fromTo(
              cards,
              {
                autoAlpha: 0,
                y: 35,
                scale: 0.94,
              },
              {
                autoAlpha: 1,
                y: 0,
                scale: 1,
                duration: 0.65,
                stagger: 0.09,
                ease: "power3.out",
                clearProps: "transform,opacity,visibility",
              },
              "-=0.2"
            );
          }
        },
        {
          threshold: 0.1,
        }
      );

      observer.observe(section);

      return () => observer.disconnect();
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative overflow-hidden bg-[#080808] px-5 py-20 text-white sm:px-8 md:py-28 lg:px-12"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#E32636]/[0.07] blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10 sm:mb-12">
          <span className="inline-flex items-center gap-3 text-sm font-medium tracking-widest text-[#E32636]">
            <span className="h-px w-8 bg-[#E32636]" />
            SKILLS / 02
          </span>

          <h2 className="skills-title mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            My Tech <span className="text-[#E32636]">Stack.</span>
          </h2>

          <p className="skills-description mt-4 max-w-xl text-sm leading-7 text-[#A1A1AA] sm:text-base">
            Tools and technologies I use to build modern, responsive, and
            user-friendly web experiences.
          </p>
        </div>

        {/* Skills Cards */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <div
                key={skill.name}
                className="skill-card group relative flex min-h-28 items-center gap-3 overflow-hidden border border-[#2A2A2A] bg-[#111111] p-4 transition-colors duration-300 hover:border-[#E32636]/70 sm:min-h-32 sm:gap-4 sm:p-5"
              >
                {/* Hover glow */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#E32636]/0 blur-2xl transition-colors duration-500 group-hover:bg-[#E32636]/20"
                />

                {/* Skill number */}
                <span className="absolute right-3 top-2 font-mono text-[9px] text-white/20 transition-colors group-hover:text-[#E32636]/70">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Icon */}
                <div className="relative flex h-10 w-10 shrink-0 items-center justify-center sm:h-11 sm:w-11">
                  <Icon
                    size={30}
                    color={skill.color}
                    className="transition-transform duration-300 ease-out group-hover:scale-110 group-hover:-rotate-6 sm:!h-9 sm:!w-9"
                  />
                </div>

                {/* Skill name */}
                <p className="relative text-xs font-medium sm:text-sm md:text-base">
                  {skill.name}
                </p>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#E32636] transition-all duration-500 group-hover:w-full" />
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5 sm:mt-10">
          <p className="font-mono text-[10px] tracking-wider text-neutral-600 sm:text-xs">
            TOOLS OF THE TRADE
          </p>

          <p className="font-mono text-xs text-neutral-500">
            {String(skills.length).padStart(2, "0")} TECHNOLOGIES
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skils;