import { Link } from "@tanstack/react-router";
import heroWalking from "@/assets/hero-walking.jpg";

/** Treatment 2: gradient dark only in the bottom third of the image. */
export function Hero() {
  return (
    <section id="top" className="relative isolate min-h-[92vh] w-full overflow-hidden">
      <img
        src={heroWalking}
        alt="Students walking toward a university building in Kerala"
        width={1920}
        height={1200}
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-ink/30" />
      <div className="photo-scrim-bottom absolute inset-0" />

      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-end px-5 pb-16 pt-32 sm:px-8 sm:pb-24">
        <span className="eyebrow mb-5 flex items-center gap-3 text-gold">
          <span className="gold-rule" />
          Quilon Educational Consultancy
        </span>
        <h1 className="max-w-5xl text-[clamp(3.5rem,10vw,8.5rem)] text-offwhite">
          Study in Keralam.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-offwhite/90 sm:text-lg">
          You could file every application yourself. Or you could let advisors who track
          every cutoff, quota and deadline in Kerala do it with you — and get it right the
          first time.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-4">
          <Link
            to="/book-consultation"
            className="inline-flex items-center rounded-full bg-gold px-7 py-3.5 text-sm font-bold text-ink transition-transform hover:-translate-y-0.5"
          >
            Start your application
          </Link>
          <a
            href="#process"
            className="inline-flex items-center rounded-full border border-offwhite/50 px-7 py-3.5 text-sm font-bold text-offwhite transition-colors hover:bg-offwhite/10"
          >
            See how it works
          </a>
        </div>

        <dl className="mt-14 grid max-w-2xl grid-cols-3 gap-6 border-t border-offwhite/25 pt-7">
          {[
            ["1000+", "admissions guided"],
            ["180+", "Kerala institutions"],
            ["14 yrs", "in Kollam"],
          ].map(([n, label]) => (
            <div key={label}>
              <dt className="font-display text-2xl font-extrabold text-offwhite sm:text-3xl">
                {n}
              </dt>
              <dd className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-offwhite/75">
                {label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
