"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import headerData from "@/data/header.json";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        solid
          ? "bg-paper/95 backdrop-blur-md border-b border-line shadow-xs"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <Link
          href="/"
          className="group flex flex-col leading-none transform transition-transform duration-300 hover:scale-[1.02]"
          aria-label={headerData.ariaLabel}
        >
          <span
            className={`font-serif text-xl tracking-wide transition-colors duration-500 sm:text-2xl ${
              solid ? "text-ink" : "text-paper"
            }`}
          >
            {headerData.logoText}
          </span>
          <span
            className={`mt-1 text-[0.65rem] font-light uppercase tracking-[0.4em] transition-colors duration-500 ${
              solid ? "text-gold" : "text-gold-soft"
            }`}
          >
            {headerData.logoSub}
          </span>
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {headerData.navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`group relative text-sm font-medium tracking-wide transition-colors duration-300 py-1 ${
                solid
                  ? "text-ink-soft hover:text-ink"
                  : "text-paper/80 hover:text-paper"
              }`}
            >
              {item.label}
              <span className="absolute bottom-0 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className={`inline-flex h-10 w-10 items-center justify-center rounded-sm transition-transform active:scale-95 lg:hidden ${
            solid ? "text-ink" : "text-paper"
          }`}
          aria-label={open ? headerData.ariaClose : headerData.ariaOpen}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-line bg-paper transition-[max-height] duration-500 lg:hidden shadow-lg ${
          open ? "max-h-[80vh]" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-4">
          {headerData.navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-line/60 py-4 font-serif text-2xl text-ink transition-colors hover:text-gold active:translate-x-1"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}