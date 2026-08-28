"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Destinations", href: "https://www.ritumbhara.com/destinations" },
  { label: "The Standard", href: "https://www.ritumbhara.com/#standard" },
  { label: "Experiences", href: "https://www.ritumbhara.com/experiences" },
  { label: "Our Story", href: "https://www.ritumbhara.com/about" },
  { label: "Contact", href: "https://www.ritumbhara.com/contact" },
] as const;

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-ritumbhara-border bg-ritumbhara-bg/70 backdrop-blur-sm transition-shadow duration-300 ${
        isScrolled ? "shadow-sm" : ""
      }`}
    >
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="group shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ritumbhara-maroon focus-visible:ring-offset-2 focus-visible:ring-offset-ritumbhara-bg"
          onClick={closeMenu}
        >
          <span className="inline-flex items-center bg-ritumbhara-maroon px-4 py-2.5 text-sm font-semibold tracking-tight text-white transition-colors duration-200 group-hover:bg-ritumbhara-maroon-dark sm:px-5 sm:py-3 sm:text-base">
            Ritumbhara
            <sup className="ml-0.5 text-[0.55em] font-normal">®</sup>
          </span>
        </Link>

        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="relative rounded-sm px-3 py-2 text-sm font-medium text-ritumbhara-text transition-colors duration-200 hover:text-ritumbhara-maroon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ritumbhara-maroon focus-visible:ring-offset-2 focus-visible:ring-offset-ritumbhara-bg after:absolute after:inset-x-3 after:bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-ritumbhara-maroon after:transition-transform after:duration-200 hover:after:scale-x-100"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Link
            href="#destinations"
            className="inline-flex items-center border border-ritumbhara-maroon px-5 py-2 text-sm font-medium text-ritumbhara-maroon transition-all duration-200 hover:bg-ritumbhara-maroon hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ritumbhara-maroon focus-visible:ring-offset-2 focus-visible:ring-offset-ritumbhara-bg"
          >
            Explore Destinations
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-sm text-ritumbhara-text transition-colors hover:text-ritumbhara-maroon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ritumbhara-maroon focus-visible:ring-offset-2 focus-visible:ring-offset-ritumbhara-bg lg:hidden"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className="sr-only">{isMenuOpen ? "Close menu" : "Open menu"}</span>
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            aria-hidden="true"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
            ) : (
              <>
                <path strokeLinecap="round" d="M4 7h16" />
                <path strokeLinecap="round" d="M4 12h16" />
                <path strokeLinecap="round" d="M4 17h16" />
              </>
            )}
          </svg>
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-ritumbhara-border bg-ritumbhara-bg transition-[max-height,opacity] duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0"
        }`}
        aria-hidden={!isMenuOpen}
      >
        <ul className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block rounded-sm px-3 py-3 text-base font-medium text-ritumbhara-text transition-colors hover:bg-ritumbhara-maroon/5 hover:text-ritumbhara-maroon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ritumbhara-maroon"
                onClick={closeMenu}
                tabIndex={isMenuOpen ? 0 : -1}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-2">
            <Link
              href="#destinations"
              className="block border border-ritumbhara-maroon px-5 py-3 text-center text-sm font-medium text-ritumbhara-maroon transition-all duration-200 hover:bg-ritumbhara-maroon hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ritumbhara-maroon"
              onClick={closeMenu}
              tabIndex={isMenuOpen ? 0 : -1}
            >
              Explore Destinations
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
