import { Link } from "@tanstack/react-router";

export function FinalCta() {
  return (
    <section id="contact" className="bg-offwhite py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          {/* Left — copy + CTA */}
          <div>
            <span className="eyebrow flex items-center gap-3 text-kerala">
              <span className="gold-rule" />
              Contact us
            </span>
            <h2 className="mt-5 text-[clamp(2rem,4vw,3.4rem)] text-brown">
              Let's get your application filed properly.
            </h2>
            <p className="mt-5 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
              One free consultation. No obligation, no fee until you decide to
              go ahead — just a clear read on where you stand and what happens
              next.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/book-consultation"
                className="inline-flex items-center rounded-full bg-gold px-7 py-3.5 text-sm font-bold text-ink transition-transform hover:-translate-y-0.5"
              >
                Get in touch
              </Link>
              <a
                href="tel:+919497771392"
                className="inline-flex items-center gap-2 border-b-2 border-kerala pb-1 text-sm font-bold text-brown transition-colors hover:text-kerala"
              >
                9497 771 392
              </a>
            </div>
          </div>

          {/* Right — contact details card */}
          <div className="rounded-2xl border border-hairline bg-ivory p-8 sm:p-10">
            <h3 className="font-display text-sm font-extrabold uppercase tracking-[0.14em] text-brown">
              Quilon Educational Consultancy
            </h3>
            <p className="mt-1 text-xs text-muted-foreground">
              H.O: Ambalakara, Kottarakara
            </p>

            <div className="mt-6 space-y-5">
              {/* Phone */}
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold/10 text-xs font-bold text-gold">
                  ph
                </span>
                <div>
                  <a
                    href="tel:+919497771392"
                    className="block text-sm font-semibold text-brown hover:text-gold"
                  >
                    9497 771 392
                  </a>
                  <a
                    href="tel:+919207774402"
                    className="block text-sm font-semibold text-brown hover:text-gold"
                  >
                    9207 774 402
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-kerala/10 text-xs font-bold text-kerala">
                  @
                </span>
                <a
                  href="mailto:info@quilonconsultancy.com"
                  className="text-sm font-semibold text-brown hover:text-kerala"
                >
                  info@quilonconsultancy.com
                </a>
              </div>

              {/* Branches */}
              <div className="border-t border-hairline pt-5">
                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                  Branches
                </p>
                <ul className="mt-3 space-y-2 text-xs leading-relaxed text-muted-foreground">
                  <li>
                    <span className="font-semibold text-brown">Kottarakara</span>{" "}
                    — Opp. Swayamwara Skills, Pulamon P.O
                  </li>
                  <li>
                    <span className="font-semibold text-brown">Trivandrum</span>{" "}
                    — Near Ameya Collections, Vanross Road, Oottukuzhy Jn, 695001
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
