import {
  SiGithub,
  SiInstagram,
  
  SiLinkerd,
  SiTelegram,
} from "@icons-pack/react-simple-icons";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const navigationLinks = [
    { title: "Home", href: "/#top" },
    { title: "About", href: "/#about" },
    { title: "Projects", href: "/#projects" },
    { title: "Skills", href: "/#skills" },
    { title: "Contact", href: "/#contact" },
  ];

  const socialLinks = [
    {
      title: "GitHub",
      href: "https://github.com/Hossein-rafiee-esf",
      Icon: SiGithub,
    },
    {
      title: "LinkedIn",
      href: "https://www.linkedin.com/",
      Icon: SiLinkerd,
    },
    {
      title: "Instagram",
      href: "https://www.instagram.com/",
      Icon: SiInstagram,
    },
    {
      title: "Telegram",
      href: "https://telegram.org/",
      Icon: SiTelegram,
    },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#080808] px-5 py-14 text-white sm:px-8 sm:py-16 lg:px-16 lg:py-20">
      {/* Background glow */}
      <div className="pointer-events-none absolute -bottom-32 -right-20 h-80 w-80 rounded-full bg-red-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Main sections */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {/* Brand */}
          <div>
            <Link
              href="/#top"
              className="group inline-flex items-center gap-2"
            >
              <span className="text-3xl font-black tracking-tight">
                HOSSEIN<span className="text-[#E32636]">.</span>
              </span>
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-7 text-neutral-400">
              Turning ideas into modern web experiences. Focused on clean
              code, great design, and real impact.
            </p>

            {/* Email CTA */}
            <a
              href="mailto:hossein.rafiei.dev@gmail.com"
              className="mt-6 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.03] px-5 py-3 text-sm text-neutral-300 transition-all duration-300 hover:border-[#E32636]/60 hover:text-white"
            >
              <Mail size={18} className="text-[#E32636]" />
              Get in touch
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-6 text-xs font-semibold tracking-[0.2em] text-neutral-500">
              NAVIGATION
            </h4>

            <nav
              aria-label="Footer navigation"
              className="flex flex-col items-start gap-4"
            >
              {navigationLinks.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group flex items-center gap-2 text-sm text-neutral-400 transition-colors hover:text-[#E32636]"
                >
                  <span className="h-px w-0 bg-[#E32636] transition-all duration-300 group-hover:w-4" />
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social links */}
          <div>
            <h4 className="mb-6 text-xs font-semibold tracking-[0.2em] text-neutral-500">
              SOCIALS
            </h4>

            <div className="flex flex-col items-start gap-4">
              {socialLinks.map(({ title, href, Icon }) => (
                <a
                  key={title}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${title} (opens in a new tab)`}
                  className="group flex items-center gap-3 text-sm text-neutral-400 transition-colors hover:text-white"
                >
                  <Icon size={19} />
                  <span>{title}</span>
                  <ArrowUpRight
                    size={14}
                    className="opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Contact details */}
          <div>
            <h4 className="mb-6 text-xs font-semibold tracking-[0.2em] text-neutral-500">
              CONTACT
            </h4>

            <div className="flex flex-col gap-5">
              <a
                href="mailto:hossein.rafiei.dev@gmail.com"
                className="group flex items-start gap-3 text-sm text-neutral-400 transition-colors hover:text-[#E32636]"
              >
                <Mail size={19} className="mt-0.5 shrink-0" />
                <span className="break-all">
                  hossein.rafiei.dev@gmail.com
                </span>
              </a>

              <a
                href="tel:+989054593834"
                className="group flex items-center gap-3 text-sm text-neutral-400 transition-colors hover:text-[#E32636]"
              >
                <Phone size={19} className="shrink-0" />
                <span dir="ltr">+98 905 459 3834</span>
              </a>

              <div className="flex items-center gap-3 text-sm text-neutral-400">
                <MapPin size={19} className="shrink-0" />
                <span>Isfahan, Iran</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-14 flex flex-col gap-5 border-t border-white/10 pt-6 sm:mt-16 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs leading-6 text-neutral-500">
            © 2026 HOSSEIN. All rights reserved.
          </p>

          <p className="flex items-center gap-1.5 text-xs text-neutral-500">
            Built with
            <span className="mx-1 text-[#E32636]">♥</span>
            and <span className="text-neutral-300">Next.js</span>
          </p>

          <Link
            href="/#top"
            className="group flex w-fit items-center gap-2 text-xs text-neutral-400 transition-colors hover:text-[#E32636]"
          >
            Back to top
            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;