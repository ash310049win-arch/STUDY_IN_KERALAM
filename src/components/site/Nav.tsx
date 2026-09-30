import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

const links = [
  { hash: "why", label: "Why us" },
  { hash: "process", label: "How it works" },
  { hash: "partners", label: "Colleges" },
  { hash: "districts", label: "Districts" },
  { hash: "proof", label: "Students" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow] duration-300 ${
        scrolled || open
          ? "border-b border-hairline bg-paper/90 backdrop-blur-lg"
          : "border-b border-transparent bg-paper/0"
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:rounded-md focus:bg-brown focus:px-3 focus:py-2 focus:text-sm focus:text-offwhite"
      >
        Skip to content
      </a>
      <div className="mx-auto flex h-[4.5rem] max-w-[1320px] items-center gap-8 px-5 sm:px-8">
        <Link to="/" className="group flex items-baseline gap-2.5" onClick={() => setOpen(false)}>
          <span className="font-display text-[1.35rem] font-medium tracking-[-0.03em] text-brown">
            Study in <em className="italic text-ochre">Keralam</em>
          </span>
          <span className="hidden font-mal text-sm text-muted-foreground lg:inline">· കേരളം</span>
        </Link>

        <nav aria-label="Primary" className="ml-auto hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <Link
              key={l.hash}
              to="/"
              hash={l.hash}
              className="text-[0.9rem] font-medium text-brown/75 transition-colors hover:text-brown"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/book-consultation"
          className="btn btn-primary ml-auto hidden !py-2.5 !text-sm sm:inline-flex md:ml-0"
        >
          Free consultation
        </Link>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="ml-auto -mr-2 flex size-11 items-center justify-center rounded-full text-brown sm:ml-0 md:hidden"
        >
          <span className="relative block h-3 w-6">
            <span
              className={`absolute left-0 top-0 h-px w-6 bg-current transition-transform duration-300 ${
                open ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute bottom-0 left-0 h-px w-6 bg-current transition-transform duration-300 ${
                open ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`overflow-hidden transition-[max-height,opacity] duration-400 md:hidden ${
          open ? "max-h-[80dvh] opacity-100" : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <nav aria-label="Mobile" className="flex flex-col px-5 pb-8 pt-2">
          {links.map((l, i) => (
            <Link
              key={l.hash}
              to="/"
              hash={l.hash}
              onClick={() => setOpen(false)}
              className="flex items-baseline gap-4 border-b border-hairline py-4 font-display text-2xl text-brown"
            >
              <span className="tnum font-sans text-xs text-muted-foreground">0{i + 1}</span>
              {l.label}
            </Link>
          ))}
          <Link
            to="/book-consultation"
            onClick={() => setOpen(false)}
            className="btn btn-primary mt-8 justify-center"
          >
            Book a free consultation
          </Link>
          <a href="tel:+919497771392" className="mt-4 text-center text-sm font-semibold text-brown">
            or call 9497 771 392
          </a>
        </nav>
      </div>
    </header>
  );
}
