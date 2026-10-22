"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { title: "Home", href: "/#top" },
  { title: "Projects", href: "/#projects" },
  { title: "About", href: "/#about" },
  { title: "Skills", href: "/#skills" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      id="top"
      className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#080808]/90 text-white shadow-lg shadow-black/10 backdrop-blur-xl"
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-16"
      >
        {/* Logo */}
        <Link
          href="/#top"
          onClick={closeMenu}
          aria-label="Hossein Rafiei - Home"
          className="shrink-0 text-lg font-black tracking-wide sm:text-xl"
        >
          HOSSEIN <span className="text-[#E32636]">RAFIEI</span>
          <span className="text-[#E32636]">.</span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group relative py-2 text-sm text-neutral-400 transition-colors duration-200 hover:text-white"
            >
              {item.title}
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#E32636] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <Link
          href="/#contact"
          className="hidden items-center gap-2 rounded-lg bg-[#E32636] px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-red-500 hover:shadow-lg hover:shadow-red-500/20 md:inline-flex"
        >
          Let&apos;s Talk
          <ArrowUpRight size={16} />
        </Link>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setIsOpen((previous) => !previous)}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white transition-colors hover:border-[#E32636] hover:text-[#E32636] md:hidden"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile navigation */}
      <div
        id="mobile-navigation"
        className={`overflow-hidden border-t border-white/10 transition-all duration-300 ease-in-out md:hidden ${
          isOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 border-transparent opacity-0"
        }`}
        aria-hidden={!isOpen}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4 sm:px-8">
          {navLinks.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              onClick={closeMenu}
              tabIndex={isOpen ? 0 : -1}
              className="rounded-lg px-4 py-3 text-sm text-neutral-300 transition-colors hover:bg-white/5 hover:text-[#E32636]"
            >
              {item.title}
            </Link>
          ))}

          <Link
            href="/#contact"
            onClick={closeMenu}
            tabIndex={isOpen ? 0 : -1}
            className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-[#E32636] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-500"
          >
            Let&apos;s Talk
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;