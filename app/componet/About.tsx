"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;

      if (!section) return;

      const title = section.querySelector(".about-title");
      const image = section.querySelector(".about-image");
      const content = section.querySelector(".about-content");

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          once: true,
        },
      });

      if (title) {
        timeline.fromTo(
          title,
          {
            y: 30,
            autoAlpha: 0,
          },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.7,
            ease: "power3.out",
          }
        );
      }

      if (image) {
        timeline.fromTo(
          image,
          {
            x: -40,
            autoAlpha: 0,
          },
          {
            x: 0,
            autoAlpha: 1,
            duration: 0.9,
            ease: "power3.out",
          },
          "-=0.35"
        );
      }

      if (content) {
        timeline.fromTo(
          content,
          {
            x: 40,
            autoAlpha: 0,
          },
          {
            x: 0,
            autoAlpha: 1,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.65"
        );
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative overflow-hidden bg-[#080808] px-5 py-20 text-white sm:px-8 md:py-28 lg:px-12 lg:py-32"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-32 top-1/3 h-72 w-72 rounded-full bg-red-600/[0.04] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Title */}
        <div className="about-title mb-8">
          <span className="text-sm font-medium tracking-widest text-[#E32636]">
            ABOUT / 01
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            A Little About <span className="text-[#E32636]">Me.</span>
          </h2>
        </div>

        <hr className="mb-10 border-[#2A2A2A] md:mb-14" />

        {/* Info Section */}
        <div className="grid grid-cols-1 items-center gap-12 md:gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Image Section */}
          <div className="about-image relative mx-auto w-full max-w-md lg:max-w-none">
            {/* Top Red Corner */}
            <div className="absolute -left-3 -top-3 z-10 h-20 w-20 border-l-2 border-t-2 border-[#E32636] sm:-left-4 sm:-top-4" />

            {/* Image */}
            <div className="group relative aspect-[4/5] overflow-hidden border border-[#2A2A2A] bg-[#111111] sm:aspect-[3/4] lg:max-h-[600px]">
              <Image
                src="/about.png"
                alt="Hossein Rafiei - Front-End Developer"
                fill
                priority
                sizes="(max-width: 1023px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />

              {/* Image Label */}
              <span className="absolute bottom-4 left-4 text-xs tracking-wider text-white/80">
                PORTFOLIO / 2026
              </span>

              {/* Red Status Dot */}
              <span className="absolute right-4 top-4 h-2 w-2 animate-pulse rounded-full bg-[#E32636]" />
            </div>

            {/* Bottom Red Corner */}
            <div className="absolute -bottom-3 -right-3 h-20 w-20 border-b-2 border-r-2 border-[#E32636] sm:-bottom-4 sm:-right-4" />

            {/* Image Caption */}
            <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
              <span className="text-[10px] tracking-[0.2em] text-neutral-500 sm:text-xs">
                FRONT-END DEVELOPER
              </span>

              <span className="text-xs text-neutral-400">
                Based in Iran
              </span>
            </div>
          </div>

          {/* Information Section */}
          <div className="about-content flex flex-col items-start">
            <span className="mb-4 text-xs font-semibold tracking-[0.2em] text-[#E32636] sm:text-sm">
              WHO AM I?
            </span>

            <h3 className="mb-6 text-2xl font-bold sm:text-3xl md:text-4xl">
              I'm Hossein Rafiei
              <span className="text-[#E32636]">.</span>
            </h3>

            <p className="text-sm leading-8 text-[#A1A1AA] sm:text-base sm:leading-9">
              I'm a Front-End Developer passionate about building modern,
              responsive, and user-friendly web experiences. I work with
              React, Next.js, Tailwind CSS, and TypeScript to turn ideas into
              clean, functional interfaces. I enjoy learning new technologies,
              solving problems, and improving my skills through real-world
              projects. I'm currently focused on growing as a developer and
              looking for opportunities to collaborate with a team, learn from
              experienced developers, and contribute to meaningful projects.
            </p>

            {/* Highlights */}
            <div className="mt-8 grid w-full grid-cols-2 gap-4 border-y border-white/10 py-6">
              <div>
                <p className="text-sm font-semibold text-white sm:text-base">
                  Clean Code
                </p>
                <p className="mt-2 text-xs leading-6 text-neutral-500 sm:text-sm">
                  Maintainable and reusable components
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold text-white sm:text-base">
                  Responsive UI
                </p>
                <p className="mt-2 text-xs leading-6 text-neutral-500 sm:text-sm">
                  Interfaces for every screen size
                </p>
              </div>
            </div>

            {/* Contact Button */}
            <Link
              href="#contact"
              className="group mt-8 inline-flex items-center gap-3 border border-[#E32636] px-6 py-3 text-sm font-medium transition-all duration-300 hover:bg-[#E32636]"
            >
              Let's Talk

              <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;