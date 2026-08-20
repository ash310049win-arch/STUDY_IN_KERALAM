import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

const links = [
  { hash: "#why", label: "Why Quilon" },
  { hash: "#process", label: "Process" },
  { hash: "#districts", label: "Districts" },
  { hash: "#proof", label: "Results" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-hairline bg-white/95 backdrop-blur-xl py-2"
          : "border-b border-transparent py-3"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center gap-6 px-5 sm:px-8">
        <Link to="/" className="flex flex-col leading-none">
          <span
            className={`font-display text-lg font-extrabold tracking-tight transition-colors duration-300 ${
              scrolled ? "text-brown" : "text-offwhite"
            }`}
          >
            Study in Keralam
          </span>
          <span className="mt-0.5 text-[10px] font-bold uppercase tracking-[0.16em] text-gold">
            Quilon Educational Consultancy
          </span>
        </Link>

        <nav className="ml-auto hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.hash}
              to="/"
              hash={l.hash}
              className={`relative text-sm font-semibold transition-colors duration-300 ${
                scrolled
                  ? "text-muted-foreground hover:text-kerala"
                  : "text-offwhite/80 hover:text-offwhite"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/book-consultation"
          className={`ml-auto inline-flex items-center rounded-full px-5 py-2.5 text-sm font-bold shadow-sm transition-all duration-300 md:ml-0 ${
            scrolled
              ? "bg-brown text-offwhite hover:bg-ink"
              : "bg-gold text-ink hover:bg-gold/90"
          }`}
        >
          Talk to an advisor
        </Link>
      </div>
    </header>
  );
}
