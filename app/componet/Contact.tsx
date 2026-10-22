"use client";

import { useRef } from "react";
import { Mail, ArrowUpRight } from "lucide-react";
import {
  SiGithub,
  SiTelegram,
  SiInstagram,
  SiLinkerd,
} from "@icons-pack/react-simple-icons";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;

      if (!section) return;

      const intro = section.querySelector(".contact-intro");
      const cards = section.querySelectorAll(".contact-card");
      const footer = section.querySelector(".contact-footer");

      const elements = [
        intro,
        ...Array.from(cards),
        footer,
      ].filter((element): element is Element => element !== null);

      if (elements.length === 0) return;

      const observer = new IntersectionObserver(
        (entries) => {
          const isVisible = entries.some(
            (entry) => entry.isIntersecting
          );

          if (!isVisible) return;

          observer.disconnect();

          gsap.fromTo(
            elements,
            {
              autoAlpha: 0,
              y: 25,
            },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.7,
              stagger: 0.12,
              ease: "power3.out",
              clearProps: "transform,opacity,visibility",
            }
          );
        },
        {
          threshold: 0.05,
        }
      );

      observer.observe(section);

      return () => observer.disconnect();
    },
    { scope: sectionRef }
  );

  const contacts = [
    {
      title: "Email",
      value: "hossein.rafiei.dev@gmail.com",
      href: "mailto:hossein.rafiei.dev@gmail.com",
      icon: Mail,
      label: "SEND AN EMAIL",
      external: false,
    },
    {
      title: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/",
      icon: SiLinkerd,
      label: "PROFESSIONAL NETWORK",
      external: true,
    },
    {
      title: "GitHub",
      value: "Hossein-rafiee-esf",
      href: "https://github.com/Hossein-rafiee-esf",
      icon: SiGithub,
      label: "EXPLORE MY CODE",
      external: true,
    },
    {
      title: "Instagram",
      value: "Follow me",
      href: "https://www.instagram.com/",
      icon: SiInstagram,
      label: "FOLLOW MY JOURNEY",
      external: true,
    },
    {
      title: "Telegram",
      value: "Message me",
      href: "https://t.me/your_username",
      icon: SiTelegram,
      label: "LET'S TALK",
      external: true,
    },
    {
      title: "Eitaa",
      value: "Find me on Eitaa",
      href: "https://eitaa.com/",
      icon: Mail,
      label: "SEND A MESSAGE",
      external: true,
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      aria-labelledby="contact-heading"
      className="relative scroll-mt-24 overflow-hidden bg-[#080808] px-5 py-24 text-white sm:px-8 md:py-32"
    >
      {/* Background effects */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute right-[-100px] top-20 h-72 w-72 rounded-full bg-[#E32636]/10 blur-[120px]" />

        <div className="absolute bottom-0 left-[-100px] h-72 w-72 rounded-full bg-[#E32636]/5 blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#E32636 1px, transparent 1px), linear-gradient(90deg, #E32636 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Section intro */}
        <div className="contact-intro mb-14 md:mb-20">
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className="h-px w-10 bg-[#E32636]" />

            <span className="font-mono text-xs tracking-[0.3em] text-[#E32636]">
              CONTACT / 03
            </span>

            <span className="rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 font-mono text-[10px] tracking-wider text-green-400">
              OPEN TO OPPORTUNITIES
            </span>
          </div>

          <div className="grid gap-8 md:grid-cols-2 md:items-end">
            <div>
              <h2
                id="contact-heading"
                className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
              >
                Let&apos;s build
                <br />
                something{" "}
                <span className="text-[#E32636]">great.</span>
              </h2>
            </div>

            <div className="md:justify-self-end md:pb-2">
              <p className="max-w-md text-sm leading-7 text-white/55 sm:text-base">
                Have a project in mind, an opportunity to share, or just
                want to talk about technology? Feel free to reach out.
              </p>

              <div className="mt-5 flex items-center gap-2 font-mono text-xs text-white/40">
                <span className="h-2 w-2 animate-pulse rounded-full bg-[#E32636]" />
                CURRENTLY AVAILABLE FOR NEW PROJECTS
              </div>
            </div>
          </div>
        </div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {contacts.map((contact, index) => {
            const Icon = contact.icon;

            return (
              <a
                key={contact.title}
                href={contact.href}
                target={contact.external ? "_blank" : undefined}
                rel={
                  contact.external
                    ? "noopener noreferrer"
                    : undefined
                }
                className="contact-card group relative flex min-h-[190px] flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-white/[0.025] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#E32636]/60 hover:bg-[#E32636]/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E32636] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808] sm:p-7"
                aria-label={`${contact.title}: ${contact.value}`}
              >
                {/* Card number */}
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-white/70 transition-all duration-300 group-hover:border-[#E32636]/40 group-hover:bg-[#E32636]/10 group-hover:text-[#E32636]">
                    <Icon size={22} />
                  </div>

                  <span className="font-mono text-xs text-white/25">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Card content */}
                <div className="mt-8">
                  <div className="mb-2 flex items-center justify-between gap-3">
                    <h3 className="text-lg font-semibold transition-colors group-hover:text-[#E32636]">
                      {contact.title}
                    </h3>

                    <ArrowUpRight
                      size={18}
                      aria-hidden="true"
                      className="shrink-0 text-white/30 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#E32636]"
                    />
                  </div>

                  <p className="break-words text-sm text-white/55">
                    {contact.value}
                  </p>

                  <p className="mt-4 font-mono text-[9px] tracking-[0.15em] text-white/25">
                    {contact.label}
                  </p>
                </div>

                {/* Hover accent */}
                <div
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#E32636] transition-all duration-500 group-hover:w-full"
                />
              </a>
            );
          })}
        </div>

        {/* Footer */}
        <div className="contact-footer mt-16 border-t border-white/10 pt-7 sm:mt-20">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <a
              href="/#top"
              className="group flex w-fit items-center gap-2 font-mono text-sm font-bold tracking-wider"
            >
              <span className="text-[#E32636]">&lt;</span>
              <span>HOSSEIN</span>
              <span className="text-[#E32636]">/</span>
              <span className="text-white/40 transition-colors group-hover:text-white">
                DEV
              </span>
              <span className="text-[#E32636]">&gt;</span>
            </a>

            <p className="font-mono text-[10px] tracking-wider text-white/30 sm:text-xs">
              DESIGNED & BUILT WITH PASSION
            </p>

            <p className="font-mono text-xs text-white/40">
              © 2026 — ALL RIGHTS RESERVED
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}