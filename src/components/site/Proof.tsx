import { useRef, useState, useEffect, useCallback } from "react";
import proofGroup from "@/assets/proof-group.jpg";

const reviews = [
  { quote: "KEAM rank in hand, no clue what next. They filed the option list and I got TKM.", name: "Adithyan R.", college: "TKM College of Engineering", district: "Kollam" },
  { quote: "My community certificate was wrong format. Found it a week before deadline, fixed it.", name: "Fathima S.", college: "Amrita School of Nursing", district: "Kollam" },
  { quote: "NEET counselling felt impossible alone. They walked me through every round.", name: "Arjun M.", college: "Govt Medical College Thrissur", district: "Thrissur" },
  { quote: "Didn't know MG University had equivalency issues. They handled it before I even worried.", name: "Devika P.", college: "CMS College Kottayam", district: "Kottayam" },
  { quote: "I'm from Wayanad, no family connections in colleges. They coordinated everything remotely.", name: "Akhil T.", college: "Govt Arts College Mananthavady", district: "Wayanad" },
  { quote: "One missed document costs a year — they made sure mine were all in order.", name: "Nimisha V.", college: "SN College Kollam", district: "Kollam" },
  { quote: "Wanted design, parents wanted engineering. They showed us both options clearly.", name: "Rahul K.", college: "LIMS College of Design", district: "Ernakulam" },
  { quote: "Got into CUSAT through their backup plan when my first choice didn't work out.", name: "Meera J.", college: "CUSAT", district: "Ernakulam" },
  { quote: "Hostel confirmation was my biggest worry. They sorted it before admission day.", name: "Sneha L.", college: "Govt Engineering College Palakkad", district: "Palakkad" },
  { quote: "Kannur University portal kept crashing. They filed on opening minute.", name: "Yasin C.", college: "St. Aloysius College", district: "Kannur" },
  { quote: "Pathanamthitta colleges are limited. They found me a spot in the aided quota.", name: "Gopika R.", college: "N.S.S. College Pandalam", district: "Pathanamthitta" },
  { quote: "Refund rules confused us. They explained what we'd get back before we paid.", name: "Aishwarya N.", college: "Govt Law College Trivandrum", district: "Thiruvananthapuram" },
  { quote: "Idukki to Ernakulam felt like another country. They confirmed transport and hostel.", name: "Midhun P.", college: "Rajagiri College of Engineering", district: "Idukki" },
  { quote: "Reservation category docs needed — they guided my parents through everything.", name: "Sana M.", college: "Farook College Kozhikode", district: "Kozhikode" },
  { quote: "IIT was a dream. They filed parallel applications so no year was lost.", name: "Vishnu S.", college: "IIT Palakkad", district: "Palakkad" },
];

/** Auto-scrolling horizontal carousel of short student reviews. */
export function Proof() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const scroll = useCallback(() => {
    const el = trackRef.current;
    if (!el || isPaused) return;
    if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 1) {
      el.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      el.scrollBy({ left: 1, behavior: "auto" });
    }
  }, [isPaused]);

  useEffect(() => {
    const id = setInterval(scroll, 30);
    return () => clearInterval(id);
  }, [scroll]);

  return (
    <section id="proof" className="bg-offwhite pb-12 sm:pb-16">
      {/* Stats on photo */}
      <div className="relative isolate">
        <img
          src={proofGroup}
          alt="Students walking together along a college corridor in Kerala"
          width={1920}
          height={1200}
          loading="lazy"
          className="h-[560px] w-full object-cover object-center sm:h-[680px]"
        />
        <div className="absolute inset-0 mx-auto flex max-w-7xl flex-col justify-between px-5 py-10 sm:px-8 sm:py-14">
          <div className="text-blur-strip w-fit rounded-sm px-6 py-5 sm:px-8 sm:py-6">
            <span className="eyebrow text-kerala">Admitted through Quilon</span>
            <p className="mt-2 font-display text-[clamp(2.6rem,7vw,5.5rem)] font-extrabold leading-[0.9] tracking-tight text-brown">
              1000+ admissions
              <span className="block text-kerala">guided since 2014</span>
            </p>
          </div>
          <div className="ml-auto w-full max-w-xs text-blur-strip rounded-sm px-6 py-5">
            <p className="font-display text-3xl font-extrabold text-brown">96%</p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              placed in a shortlisted first or second choice
            </p>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mt-14 mb-4 flex items-baseline justify-between">
          <h2 className="font-display text-[clamp(1.4rem,2.5vw,2rem)] font-extrabold text-brown">
            What students say
          </h2>
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            Swipe &rarr;
          </span>
        </div>
      </div>

      <div
        ref={trackRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="flex gap-5 overflow-x-auto scroll-smooth px-5 pb-4 pt-2 sm:px-8"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {reviews.map((r, i) => (
          <blockquote
            key={i}
            className="flex w-[340px] shrink-0 flex-col justify-between rounded-xl border border-hairline bg-ivory p-6 sm:p-7"
          >
            <p className="text-[15px] leading-relaxed text-brown">
              "{r.quote}"
            </p>
            <footer className="mt-5 border-t border-hairline pt-4">
              <p className="text-sm font-bold text-brown">{r.name}</p>
              <p className="mt-0.5 text-xs text-muted-foreground">
                {r.college}
              </p>
              <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-kerala">
                {r.district}
              </p>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
