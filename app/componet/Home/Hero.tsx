
"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
} from "@icons-pack/react-simple-icons";

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // Text animation
      gsap.from("[data-hero-reveal]", {
        y: 35,
        autoAlpha: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        delay: 0.1,
      });

      // Image entrance animation
      gsap.from("[data-hero-image]", {
        y: 40,
        autoAlpha: 0,
        scale: 0.94,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.25,
      });
    },
    { scope: heroRef }
  );

  // 3D image interaction
  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = (x / rect.width - 0.5) * 10;
    const rotateX = (0.5 - y / rect.height) * 10;

    gsap.to(card, {
      rotateX,
      rotateY,
      transformPerspective: 1000,
      duration: 0.35,
      ease: "power2.out",
      overwrite: "auto",
    });
  };

  const handleMouseLeave = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    gsap.to(e.currentTarget, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.5,
      ease: "power3.out",
      overwrite: "auto",
    });
  };

  return (
    <section
      ref={heroRef}
      className="w-full overflow-hidden bg-[#080808] px-5 py-16 sm:px-8 sm:py-20 lg:px-16 lg:py-28"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-20">

        {/* Information */}
        <div className="order-2 space-y-6 md:order-1">

          {/* Title label */}
          <p
            data-hero-reveal
            className="flex flex-wrap items-center gap-2 text-xs font-medium tracking-[0.2em] text-[#A1A1AA] sm:text-sm"
          >
            <span>FRONT-END DEVELOPER</span>
            <span className="text-[#E32636]">/</span>
            <span>PORTFOLIO 2026</span>
          </p>

          {/* Main title */}
          <div className="space-y-2">
            <h1
              data-hero-reveal
              className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl"
            >
              Hi, I&apos;m
            </h1>

            <h2
              data-hero-reveal
              className="text-4xl font-bold leading-tight tracking-tight text-[#E32636] sm:text-5xl lg:text-7xl"
            >
              Hossein Rafiei.
            </h2>
          </div>

          {/* Description */}
          <div
            data-hero-reveal
            className="space-y-1 text-base leading-7 text-[#A1A1AA] sm:text-lg"
          >
            <p>
              I build modern, responsive, and user-focused
            </p>
            <p>web experiences.</p>
          </div>

          {/* Buttons */}
          <div
            data-hero-reveal
            className="flex flex-wrap items-center gap-4 pt-3"
          >
            <Link
              href="/Projects"
              className="inline-flex items-center gap-2 rounded-md bg-[#E32636] px-5 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-red-700"
            >
              VIEW PROJECTS <span>↘</span>
            </Link>

            <Link
              href="/Contact"
              className="inline-flex items-center gap-2 rounded-md border border-[#2A2A2A] px-5 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:border-[#E32636] hover:text-[#E32636]"
            >
              CONTACT ME <span>↗</span>
            </Link>
          </div>

          {/* Technologies */}
          <div
            data-hero-reveal
            className="flex flex-wrap items-center gap-3 pt-5 text-sm text-[#A1A1AA]"
          >
            <SiReact size={30} />
            <span className="text-[#E32636]">/</span>
            <SiNextdotjs size={30} />
            <span className="text-[#E32636]">/</span>
            <SiTypescript size={30} />
            <span className="text-[#E32636]">/</span>
            <SiTailwindcss size={30} />
          </div>
        </div>

        {/* Hero Image */}
        <div className="order-1 md:order-2">
          <div
            data-hero-image
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl border border-[#2A2A2A] bg-[#111111] transform-gpu sm:max-w-md"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Actual Image */}
            <Image
              src="/heroimg.png"
              alt="Hossein Rafiei - Front-End Developer"
              fill
              priority
              sizes="(max-width: 768px) 90vw, (max-width: 1280px) 40vw, 448px"
              className="object-cover object-center transition-transform duration-700 hover:scale-105"
            />

            {/* Decorative Background */}
            <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-br from-[#E32636]/15 via-transparent to-black/40" />

            {/* Bottom Label */}
            <div className="pointer-events-none absolute bottom-4 left-4 z-20 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#E32636]" />
              <span className="text-xs tracking-wider text-white/80">
                AVAILABLE FOR OPPORTUNITIES
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;