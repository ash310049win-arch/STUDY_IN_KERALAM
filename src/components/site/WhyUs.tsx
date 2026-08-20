import { Link } from "@tanstack/react-router";
import groupStudy from "@/assets/group-study.jpg";

const points = [
  {
    n: "01",
    title: "Entrance exams & cutoffs, decoded",
    body: "KEAM, CUET, LBS, university-specific tests — we know which ones matter for your course and what last year's closing ranks actually were.",
  },
  {
    n: "02",
    title: "Applications handled end to end",
    body: "Forms, fee payments, option registration, revisions. We file them, you approve them.",
  },
  {
    n: "03",
    title: "Documents verified before they cost you",
    body: "One wrong certificate — nativity, income, community — and a seat disappears. We check everything twice.",
  },
  {
    n: "04",
    title: "Deadlines tracked for you",
    body: "Allotment rounds move fast. You get a reminder before every window, not after.",
  },
  {
    n: "05",
    title: "Seat matching, not guesswork",
    body: "We shortlist colleges you can realistically get into and would actually want to attend.",
  },
];

/** Treatment 1: solid Brown panel floating over part of a fully bright photo. */
export function WhyUs() {
  return (
    <section id="why" className="bg-ivory py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="relative">
          <img
            src={groupStudy}
            alt="Four students studying together with books and laptops"
            width={1920}
            height={1104}
            loading="lazy"
            className="h-[460px] w-full rounded-sm object-cover sm:h-[620px]"
          />

          <div className="relative -mt-24 ml-0 max-w-2xl bg-brown p-8 sm:-mt-32 sm:ml-10 sm:p-12 lg:ml-16">
            <span className="eyebrow flex items-center gap-3 text-gold">
              <span className="gold-rule" />
              Why go through us
            </span>
            <h2 className="mt-5 text-[clamp(1.9rem,3.6vw,3rem)] text-offwhite">
              You could do all of this alone. This is what alone looks like.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-offwhite/85 sm:text-base">
              Kerala admissions run on overlapping calendars, shifting quotas and
              paperwork that is unforgiving about small mistakes. We do it every day.
            </p>
          </div>
        </div>

        <ul className="mt-14 grid gap-px overflow-hidden rounded-sm bg-hairline sm:grid-cols-2 lg:grid-cols-3">
          {points.map((p) => (
            <li key={p.n} className="group bg-offwhite p-8 transition-colors hover:bg-secondary">
              <span className="font-display text-sm font-extrabold tracking-widest text-kerala">
                {p.n}
              </span>
              <h3 className="mt-4 text-lg leading-tight">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </li>
          ))}
          <li className="flex flex-col justify-center bg-secondary p-8">
            <p className="font-display text-lg font-bold leading-tight text-brown">
              One missed document costs a year.
            </p>
            <Link
              to="/book-consultation"
              className="mt-4 inline-flex w-fit items-center gap-2 border-b-2 border-gold pb-1 text-sm font-bold text-kerala"
            >
              Get a free eligibility check
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
