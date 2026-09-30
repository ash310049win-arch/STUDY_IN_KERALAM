import { useState } from "react";
import proofGroup from "@/assets/proof-group.jpg";

const reviews = [
  {
    quote: "KEAM rank in hand, no clue what next. They filed the option list and I got TKM.",
    name: "Adithyan R.",
    college: "TKM College of Engineering",
    district: "Kollam",
  },
  {
    quote: "My community certificate was wrong format. Found it a week before deadline, fixed it.",
    name: "Fathima S.",
    college: "Amrita School of Nursing",
    district: "Kollam",
  },
  {
    quote: "NEET counselling felt impossible alone. They walked me through every round.",
    name: "Arjun M.",
    college: "Govt Medical College Thrissur",
    district: "Thrissur",
  },
  {
    quote:
      "Didn't know MG University had equivalency issues. They handled it before I even worried.",
    name: "Devika P.",
    college: "CMS College Kottayam",
    district: "Kottayam",
  },
  {
    quote:
      "I'm from Wayanad, no family connections in colleges. They coordinated everything remotely.",
    name: "Akhil T.",
    college: "Govt Arts College Mananthavady",
    district: "Wayanad",
  },
  {
    quote: "One missed document costs a year — they made sure mine were all in order.",
    name: "Nimisha V.",
    college: "SN College Kollam",
    district: "Kollam",
  },
  {
    quote: "Wanted design, parents wanted engineering. They showed us both options clearly.",
    name: "Rahul K.",
    college: "LIMS College of Design",
    district: "Ernakulam",
  },
  {
    quote: "Got into CUSAT through their backup plan when my first choice didn't work out.",
    name: "Meera J.",
    college: "CUSAT",
    district: "Ernakulam",
  },
  {
    quote: "Hostel confirmation was my biggest worry. They sorted it before admission day.",
    name: "Sneha L.",
    college: "Govt Engineering College Palakkad",
    district: "Palakkad",
  },
  {
    quote: "Kannur University portal kept crashing. They filed on opening minute.",
    name: "Yasin C.",
    college: "St. Aloysius College",
    district: "Kannur",
  },
  {
    quote: "Pathanamthitta colleges are limited. They found me a spot in the aided quota.",
    name: "Gopika R.",
    college: "N.S.S. College Pandalam",
    district: "Pathanamthitta",
  },
  {
    quote: "Refund rules confused us. They explained what we'd get back before we paid.",
    name: "Aishwarya N.",
    college: "Govt Law College Trivandrum",
    district: "Thiruvananthapuram",
  },
  {
    quote: "Idukki to Ernakulam felt like another country. They confirmed transport and hostel.",
    name: "Midhun P.",
    college: "Rajagiri College of Engineering",
    district: "Idukki",
  },
  {
    quote: "Reservation category docs needed — they guided my parents through everything.",
    name: "Sana M.",
    college: "Farook College Kozhikode",
    district: "Kozhikode",
  },
  {
    quote: "IIT was a dream. They filed parallel applications so no year was lost.",
    name: "Vishnu S.",
    college: "IIT Palakkad",
    district: "Palakkad",
  },
];

const INITIAL = 9;

function initials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .replace(/[^A-Z]/g, "");
}

export function Proof() {
  const [showAll, setShowAll] = useState(false);
  const shown = showAll ? reviews : reviews.slice(0, INITIAL);

  return (
    <section id="proof" className="py-24 sm:py-32">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-20">
          <div>
            <p className="eyebrow flex items-center gap-3 text-ochre">
              <span className="gold-rule" />
              Admitted through Quilon
            </p>
            <h2 className="reveal mt-6 text-[clamp(2.3rem,4.8vw,4.2rem)]">
              <span className="tnum">1,000+</span> students since 2012.{" "}
              <em className="font-light italic text-ochre">Here are a few of them.</em>
            </h2>
            <div className="mt-10 flex items-baseline gap-5 border-t border-hairline pt-6">
              <span className="tnum font-display text-6xl leading-none text-brown sm:text-7xl">
                96%
              </span>
              <span className="max-w-[16rem] text-sm leading-snug">
                placed in a shortlisted first or second choice
              </span>
            </div>
          </div>
          <img
            src={proofGroup}
            alt="Students walking together along a college corridor in Kerala"
            width={1920}
            height={1200}
            loading="lazy"
            className="reveal aspect-[4/3] w-full rounded-[1.5rem] rounded-tl-[6rem] object-cover"
          />
        </div>

        <div className="mt-20 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {shown.map((r, i) => {
            const tone =
              i % 7 === 3
                ? "bg-gold text-ink"
                : i % 3 === 1
                  ? "bg-paper-deep text-brown"
                  : "bg-offwhite text-brown";
            const big = i % 4 === 0;
            return (
              <figure
                key={r.name}
                className={`reveal mb-5 break-inside-avoid rounded-[1.25rem] p-7 shadow-[0_1px_0_oklch(0.3_0.042_52/0.08)] ${tone}`}
              >
                <blockquote
                  className={`font-display leading-snug ${big ? "text-[1.55rem]" : "text-[1.2rem]"}`}
                >
                  <span aria-hidden="true" className="mr-0.5 opacity-40">
                    “
                  </span>
                  {r.quote}
                  <span aria-hidden="true" className="opacity-40">
                    ”
                  </span>
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 text-sm">
                  <span
                    aria-hidden="true"
                    className="flex size-9 shrink-0 items-center justify-center rounded-[0.7rem] bg-brown/10 text-xs font-semibold"
                  >
                    {initials(r.name)}
                  </span>
                  <span className="min-w-0">
                    <span className="block font-semibold">{r.name}</span>
                    <span className="block truncate text-xs opacity-70">
                      {r.college} · {r.district}
                    </span>
                  </span>
                </figcaption>
              </figure>
            );
          })}
        </div>

        {!showAll && (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll(true)}
              className="btn border border-hairline text-brown hover:bg-paper-deep"
            >
              Read {reviews.length - INITIAL} more
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
