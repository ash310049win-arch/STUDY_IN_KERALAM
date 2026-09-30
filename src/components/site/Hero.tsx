import { Link } from "@tanstack/react-router";
import heroWalking from "@/assets/hero-walking.jpg";

const exams = [
  "KEAM",
  "NEET UG",
  "CUET",
  "LBS Centre",
  "KLEE",
  "Calicut University CAP",
  "MG University CAP",
  "Kerala University CAP",
  "Kannur University CAP",
  "KMAT",
  "Paramedical allotment",
  "Nursing allotment",
];

const stats = [
  ["1,000+", "students admitted"],
  ["180+", "Kerala institutions"],
  ["14", "years, from Kollam"],
];

function Seal() {
  const text = "Quilon Educational Consultancy · Est. 2012 · Kollam · ";
  return (
    <div className="absolute -left-10 bottom-10 hidden size-36 items-center justify-center rounded-full bg-gold text-ink shadow-[0_18px_40px_-18px_oklch(0.3_0.042_52/0.6)] lg:flex">
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 size-full motion-safe:animate-[spin_28s_linear_infinite]"
        aria-hidden="true"
      >
        <defs>
          <path id="seal-circle" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
        </defs>
        <text fontSize="7.4" letterSpacing="1.1" fill="currentColor" fontWeight="600">
          <textPath href="#seal-circle">{text}</textPath>
        </text>
      </svg>
      <span className="font-mal text-2xl leading-none">ക</span>
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative pt-[4.5rem]">
      <div className="mx-auto grid max-w-[1320px] gap-12 px-5 pb-16 pt-10 sm:px-8 sm:pt-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:pb-24">
        <div className="flex flex-col justify-between">
          <div>
            <p className="intro flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-medium text-brown/70">
              <span className="whitespace-nowrap font-mal text-base text-ochre">
                കേരളത്തിൽ പഠിക്കാം
              </span>
              <span className="hidden h-px w-8 bg-brown/25 sm:block" />
              Admission guidance, Kollam
            </p>
            <h1 className="intro mt-8 text-[clamp(3rem,7.4vw,6.6rem)] leading-[0.95] [animation-delay:80ms]">
              The right Kerala college,{" "}
              <em className="font-light italic text-ochre">without the guesswork.</em>
            </h1>
            <p className="intro mt-8 max-w-[34rem] text-lg leading-relaxed [animation-delay:160ms]">
              You could file every application yourself. Or you could sit down with advisors who
              track every cutoff, quota and allotment round in Kerala — and get it right the first
              time.
            </p>
            <div className="intro mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 [animation-delay:240ms]">
              <Link to="/book-consultation" className="btn btn-primary">
                Book a free consultation
                <span aria-hidden="true">→</span>
              </Link>
              <a href="tel:+919497771392" className="group text-sm text-brown">
                <span className="block text-xs text-muted-foreground">Or call the office</span>
                <span className="tnum link-underline font-semibold">9497 771 392</span>
              </a>
            </div>
          </div>

          <dl className="intro mt-16 grid grid-cols-3 border-t border-hairline [animation-delay:320ms]">
            {stats.map(([n, label], i) => (
              <div
                key={label}
                className={`pt-5 ${i > 0 ? "border-l border-hairline pl-4 sm:pl-6" : "pr-4"}`}
              >
                <dt className="sr-only">{label}</dt>
                <dd>
                  <span className="tnum block font-display text-[clamp(1.8rem,3.4vw,2.75rem)] leading-none text-brown">
                    {n}
                  </span>
                  <span className="mt-2 block text-[0.8rem] leading-snug">{label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <figure className="intro relative [animation-delay:120ms]">
          <div className="relative overflow-hidden rounded-[2rem] rounded-tl-[7rem]">
            <img
              src={heroWalking}
              alt="Students walking toward a college building in Kerala"
              width={1920}
              height={1200}
              fetchPriority="high"
              className="aspect-[4/5] w-full object-cover object-[60%_center] lg:aspect-auto lg:h-[min(78dvh,720px)]"
            />
          </div>
          <Seal />
          <figcaption className="mt-4 flex items-start justify-between gap-6 text-xs text-muted-foreground">
            <span>
              Admission season runs from results day to the last spot round. We stay with you for
              all of it.
            </span>
            <span className="tnum shrink-0">Fig. 01</span>
          </figcaption>
        </figure>
      </div>

      <div className="overflow-hidden border-y border-ink/10 bg-brown py-4 text-offwhite">
        <div className="marquee-track flex w-max">
          {[0, 1].map((k) => (
            <ul key={k} aria-hidden={k === 1} className="flex shrink-0 items-center">
              {exams.map((e) => (
                <li key={e} className="flex items-center whitespace-nowrap text-sm font-medium">
                  <span className="px-6 opacity-90">{e}</span>
                  <span className="text-gold" aria-hidden="true">
                    ✦
                  </span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
