import { Link } from "@tanstack/react-router";

export function FinalCta() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-ink pb-20 pt-24 text-offwhite/75 sm:pt-32"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-16 right-0 select-none font-mal text-[clamp(8rem,22vw,20rem)] leading-none text-offwhite/[0.035]"
      >
        സ്വാഗതം
      </span>
      <div className="relative mx-auto max-w-[1320px] px-5 sm:px-8">
        <p className="eyebrow flex items-center gap-3 text-gold">
          <span className="gold-rule" />
          Free first consultation
        </p>
        <h2 className="reveal mt-6 max-w-5xl text-[clamp(2.6rem,6.4vw,5.8rem)] text-offwhite">
          Let's get your application{" "}
          <em className="font-light italic text-gold">filed properly.</em>
        </h2>

        <div className="mt-14 grid gap-12 border-t border-offwhite/15 pt-10 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <p className="max-w-md text-base leading-relaxed">
              No obligation, no fee until you decide to go ahead — just a clear read on where you
              stand and what happens next.
            </p>
            <Link to="/book-consultation" className="btn btn-gold mt-8">
              Book a consultation
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div>
            <p className="text-xs text-offwhite/50">Call the office</p>
            <a
              href="tel:+919497771392"
              className="tnum mt-2 block font-display text-3xl text-offwhite transition-colors hover:text-gold"
            >
              9497 771 392
            </a>
            <a
              href="tel:+919207774401"
              className="tnum mt-1 block font-display text-3xl text-offwhite transition-colors hover:text-gold"
            >
              9207 774 401
            </a>
            <p className="mt-3 text-sm">Mon–Sat · 9:30 am to 6:30 pm</p>
          </div>

          <div>
            <p className="text-xs text-offwhite/50">Write to us</p>
            <a
              href="mailto:info@quilonconsultancy.com"
              className="link-underline mt-2 inline-block text-base text-offwhite"
            >
              info@quilonconsultancy.com
            </a>
            <p className="mt-6 text-xs text-offwhite/50">Head office</p>
            <p className="mt-2 text-sm">Ambalakara, Kottarakara, Kollam</p>
          </div>
        </div>
      </div>
    </section>
  );
}
