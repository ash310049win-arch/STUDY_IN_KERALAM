import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="bg-ink py-14 text-offwhite/70">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <p className="font-display text-xl font-extrabold text-offwhite">
              Study in Keralam
            </p>
            <p className="mt-1 text-xs font-bold uppercase tracking-[0.18em] text-gold">
              Quilon Educational Consultancy
            </p>
            <p className="mt-5 max-w-sm text-sm leading-relaxed">
              Admission guidance for students across Kerala — entrance exams,
              applications, documents and allotment, handled with you.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-offwhite">
              Explore
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {[
                ["#why", "Why Quilon"],
                ["#process", "Our process"],
                ["#districts", "Districts"],
                ["#proof", "Results"],
              ].map(([href, label]) => (
                <li key={href}>
                  <a href={href} className="transition-colors hover:text-gold">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-offwhite">
              Contact
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <span className="text-offwhite/50 text-xs font-semibold uppercase tracking-wider">H.O</span>
                <br />
                Ambalakara, Kottarakara
              </li>
              <li>
                <a href="tel:+919497771392" className="hover:text-gold">
                  9497 771 392
                </a>
                {" / "}
                <a href="tel:+919207774401" className="hover:text-gold">
                  9207 774 401
                </a>
              </li>
              <li>
                <a href="mailto:info@quilonconsultancy.com" className="hover:text-gold">
                  info@quilonconsultancy.com
                </a>
              </li>
              <li className="text-offwhite/50">Mon–Sat · 9:30am to 6:30pm</li>
            </ul>
          </div>
        </div>

        {/* Branches */}
        <div className="mt-10 border-t border-offwhite/15 pt-8">
          <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-offwhite">
            Our branches
          </h3>
            <div className="mt-4 grid gap-4 text-xs leading-relaxed sm:grid-cols-2">
            <div>
              <span className="font-bold text-gold">Kottarakara</span>
              <p className="mt-1 text-offwhite/60">
                Opposite Swayamwara Skills, Pulamon P.O, Kottarakara (Kollam)
              </p>
            </div>
            <div>
              <span className="font-bold text-gold">Trivandrum</span>
              <p className="mt-1 text-offwhite/60">
                Near Ameya Collections, Vanross Road, Oottukuzhy Jn, Trivandrum, Kerala - 695001
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-offwhite/15 pt-6 text-xs">
          <p>&copy; {new Date().getFullYear()} Quilon Educational Consultancy.</p>
          <div className="flex gap-5">
            <Link to="/book-consultation" className="hover:text-gold">
              Contact us
            </Link>
            <a href="#top" className="hover:text-gold">
              Privacy
            </a>
            <a href="#top" className="hover:text-gold">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
