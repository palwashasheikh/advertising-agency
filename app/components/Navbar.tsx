"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { navLinks, site } from "@/lib/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled
          ? "border-b border-line bg-paper/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#" className="flex items-center gap-2">
          <Image
            src="/logo-mark.png"
            alt="B-Creative logo"
            width={753}
            height={674}
            className="h-9 w-auto"
            priority
          />
          <span className="font-display text-sm font-semibold uppercase tracking-[0.25em]">
            Creative
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-ink/70 transition hover:text-ink"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="btn-primary hidden rounded-full px-5 py-2 text-sm font-semibold text-white md:block"
        >
          Get a Quote
        </a>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-line bg-paper/95 px-5 py-4 backdrop-blur-xl md:hidden">
          <ul className="flex flex-col gap-4">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block text-ink/80"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={site.whatsapp}
                className="btn-primary inline-block rounded-full px-5 py-2 text-sm font-semibold text-white"
              >
                WhatsApp Us
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}