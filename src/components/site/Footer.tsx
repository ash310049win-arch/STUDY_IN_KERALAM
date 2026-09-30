import { Link } from "@tanstack/react-router";

const explore = [
  ["why", "Why us"],
  ["process", "How it works"],
  ["partners", "Partner colleges"],
  ["districts", "Districts"],
  ["proof", "Students"],
] as const;

const branches = [
  ["Kottarakara", "Opposite Swayamwara Skills, Pulamon P.O, Kottarakara, Kollam"],
  ["Kollam", "Kollam, Kerala"],
  ["Trivandrum", "Near Ameya Collections, Vanross Road, Oottukuzhy Jn, Thiruvananthapuram 695001"],
  ["Adimali", "Adimali, Idukki"],
] as const;

export function Footer() {
  return (
    <footer className="bg-ink text-sm text-offwhite/60">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        <div className="grid gap-12 border-t border-offwhite/15 py-14 md:grid-cols-[1.3fr_0.7fr_1.4fr]">
          <div>
            <Link to="/" className="font-display text-2xl text-offwhite">
              Study in <em className="italic text-gold">Keralam</em>
            </Link>
            <p className="mt-2 text-xs text-offwhite/50">
              by Quilon Educational Consultancy · <span className="font-mal">കേരളം</span>
            </p>
            <p className="mt-6 max-w-xs leading-relaxed">
              Admission guidance for students across Kerala — entrance exams, applications,
              documents and allotment, handled with you.
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="text-xs text-offwhite/40">On this site</p>
            <ul className="mt-4 space-y-2.5">
              {explore.map(([hash, label]) => (
                <li key={hash}>
                  <Link to="/" hash={hash} className="transition-colors hover:text-gold">
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/contact" className="transition-colors hover:text-gold">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <p className="text-xs text-offwhite/40">Branches</p>
            <ul className="mt-4 space-y-5">
              {branches.map(([name, addr]) => (
                <li key={name}>
                  <p className="font-semibold text-offwhite">{name}</p>
                  <p className="mt-1 leading-relaxed">{addr}</p>
                </li>
              ))}
              <li>
                <p className="font-semibold text-offwhite">Head office</p>
                <p className="mt-1">Ambalakara, Kottarakara</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-offwhite/15 py-6 text-xs">
          <p>&copy; {new Date().getFullYear()} Quilon Educational Consultancy</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-gold">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-gold">
              Terms
            </Link>
            <Link to="/refund" className="hover:text-gold">
              Refunds
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
