"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import projects from "./AllProject";

gsap.registerPlugin(ScrollTrigger);

const Project = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      // Title: horizontal reveal with a red scanning line
      const title = section.querySelector(".project-title");
      const titleText = section.querySelector(".project-title-text");
      const titleLine = section.querySelector(".project-title-line");

      if (title && titleText && titleLine) {
        const titleTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: title,
            start: "top 82%",
            once: true,
          },
        });

        titleTimeline
          .fromTo(
            titleText,
            {
              clipPath: "inset(0 100% 0 0)",
            },
            {
              clipPath: "inset(0 0% 0 0)",
              duration: 1.1,
              ease: "power4.inOut",
            }
          )
          .fromTo(
            titleLine,
            {
              scaleX: 0,
              transformOrigin: "left center",
            },
            {
              scaleX: 1,
              duration: 0.65,
              ease: "power3.out",
            },
            "-=0.35"
          );
      }

      // Supporting text and link
      const description = section.querySelector(".project-description");
      const viewAll = section.querySelector(".project-view-all");

      const introElements = [description, viewAll].filter(
        (element): element is Element => element !== null
      );

      if (introElements.length > 0) {
        gsap.fromTo(
          introElements,
          {
            y: 24,
            autoAlpha: 0,
          },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: title,
              start: "top 78%",
              once: true,
            },
          }
        );
      }

      // Project cards
      const cards = section.querySelectorAll(".project-card");

      if (cards.length > 0) {
        gsap.fromTo(
          cards,
          {
            y: 70,
            scale: 0.94,
            autoAlpha: 0,
            filter: "blur(10px)",
          },
          {
            y: 0,
            scale: 1,
            autoAlpha: 1,
            filter: "blur(0px)",
            duration: 1,
            stagger: 0.16,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cards[0],
              start: "top 85%",
              once: true,
            },
            clearProps: "filter,transform,opacity,visibility",
          }
        );
      }

      // Footer
      const footer = section.querySelector(".project-footer");

      if (footer) {
        gsap.fromTo(
          footer,
          {
            y: 20,
            autoAlpha: 0,
          },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: footer,
              start: "top 95%",
              once: true,
            },
          }
        );
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative overflow-hidden bg-[#080808] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-16 lg:py-32"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute right-0 top-20 h-64 w-64 rounded-full bg-red-600/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10 flex items-center justify-between border-b border-white/10 pb-5 sm:mb-14">
          <p className="text-xs font-medium tracking-[0.2em] text-neutral-400 sm:text-sm">
            01 / SELECTED WORK
          </p>

          <p className="text-[10px] tracking-[0.15em] text-neutral-600 sm:text-xs">
            PORTFOLIO — 2026
          </p>
        </div>

        {/* Title */}
        <div className="mb-10 flex flex-col gap-6 sm:mb-14 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <h2 className="project-title text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-7xl">
              <span className="project-title-text inline-block">
                Projects That Make an{" "}
                <span className="text-red-500">Impact.</span>
              </span>

              <span
                aria-hidden="true"
                className="project-title-line mt-3 block h-[3px] w-20 bg-red-500 sm:mt-4 sm:w-28"
              />
            </h2>

            <p className="project-description mt-5 max-w-lg text-sm leading-7 text-neutral-400 sm:text-base">
              A selection of projects where design meets functionality.
              Built with curiosity, attention to detail, and clean code.
            </p>
          </div>

          <Link
            href="/projects"
            className="project-view-all group inline-flex w-fit items-center gap-3 border-b border-white/20 pb-2 text-sm transition-colors hover:border-red-500 hover:text-red-400"
          >
            View All Projects
            <span className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
              ↗
            </span>
          </Link>
        </div>

        {/* Project cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {projects.map((item, index) => (
            <article
              key={item.title}
              className="project-card group overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] transition-colors duration-500 hover:border-red-500/40 hover:bg-white/[0.04]"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900">
                <Image
                  src={item.url}
                  alt={item.title}
                  fill
                  sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 600px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />

                <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/15 bg-black/50 px-3 py-1.5 backdrop-blur-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-red-500" />

                  <span className="text-[10px] tracking-widest text-white/80">
                    {String(index + 1).padStart(2, "0")} / PROJECT
                  </span>
                </div>

                <div className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/40 transition-all duration-300 group-hover:border-red-500 group-hover:bg-red-500">
                  <span className="text-xl">↗</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-7">
                <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                    {item.title}
                  </h3>

                  <span className="text-xs text-neutral-500">
                    SELECTED PROJECT
                  </span>
                </div>

                <p className="mb-5 text-sm leading-7 text-neutral-400 sm:text-base">
                  {item.description}
                </p>

                <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-5">
                  <span className="text-xs tracking-wide text-neutral-300">
                    {item.build}
                  </span>

                  <span className="text-sm text-neutral-500 transition-colors duration-300 group-hover:text-red-400">
                    Explore Project ↗
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Footer line */}
        <div className="project-footer mt-12 flex items-center justify-between border-t border-white/10 pt-5 sm:mt-16">
          <p className="text-[10px] tracking-[0.15em] text-neutral-600 sm:text-xs">
            DESIGNED & BUILT WITH PURPOSE
          </p>

          <p className="text-xs text-neutral-500">
            {String(projects.length).padStart(2, "0")} PROJECTS
          </p>
        </div>
      </div>
    </section>
  );
};

export default Project;