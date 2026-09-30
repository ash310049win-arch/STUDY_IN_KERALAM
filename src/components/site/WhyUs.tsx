import { Link } from "@tanstack/react-router";
import groupStudy from "@/assets/group-study.jpg";

const points = [
  {
    title: "Entrance exams and cutoffs, decoded",
    body: "KEAM, CUET, LBS, university-specific tests — we know which ones matter for your course and what last year's closing ranks actually were.",
  },
  {
    title: "Applications handled end to end",
    body: "Forms, fee payments, option registration, revisions. We file them, you approve them.",
  },
  {
    title: "Documents verified before they cost you",
    body: "One wrong certificate — nativity, income, community — and a seat disappears. We check everything twice.",
  },
  {
    title: "Deadlines tracked for you",
    body: "Allotment rounds move fast. You get a reminder before every window, not after.",
  },
  {
    title: "Seat matching, not guesswork",
    body: "We shortlist colleges you can realistically get into and would actually want to attend.",
  },
];

export function WhyUs() {
  return (
    <section id="why" className="py-24 sm:py-32">
      <div className="mx-auto grid max-w-[1320px] gap-16 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="eyebrow flex items-center gap-3 text-ochre">
            <span className="gold-rule" />
            Why go through us
          </p>
          <h2 className="reveal mt-6 text-[clamp(2.3rem,4.4vw,3.8rem)]">
            You could do all of this alone.{" "}
            <em className="font-light italic text-ochre">This is what alone looks like.</em>
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed">
            Kerala admissions run on overlapping calendars, shifting quotas and paperwork that is
            unforgiving about small mistakes. We do it every day.
          </p>

          <div className="mt-10 grid grid-cols-[auto_1fr] items-end gap-5">
            <img
              src={groupStudy}
              alt="Four students studying together with books and laptops"
              width={1920}
              height={1104}
              loading="lazy"
              className="h-40 w-32 rounded-[1.25rem] rounded-br-[3rem] object-cover sm:h-48 sm:w-40"
            />
            <div className="pb-1">
              <p className="font-display text-xl leading-snug text-brown">
                One missed document costs a year.
              </p>
              <Link
                to="/book-consultation"
                className="link-underline mt-3 inline-block text-sm font-semibold text-brown"
              >
                Get a free eligibility check →
              </Link>
            </div>
          </div>
        </div>

        <ol className="border-b border-hairline">
          {points.map((p, i) => (
            <li
              key={p.title}
              className="reveal group grid grid-cols-[3.5rem_1fr] gap-x-4 border-t border-hairline py-8 sm:grid-cols-[5.5rem_1fr] sm:py-10"
            >
              <span className="tnum font-display text-4xl font-light italic leading-none text-brown/30 transition-colors duration-300 group-hover:text-ochre sm:text-5xl">
                {i + 1}.
              </span>
              <div>
                <h3 className="text-[clamp(1.35rem,2.2vw,1.85rem)] leading-tight">{p.title}</h3>
                <p className="mt-3 max-w-[36rem] text-base leading-relaxed">{p.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
