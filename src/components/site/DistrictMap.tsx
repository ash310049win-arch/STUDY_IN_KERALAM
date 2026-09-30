import { useState } from "react";
import { Link } from "@tanstack/react-router";

type District = {
  name: string;
  slug: string;
  x: number;
  y: number;
  institutions: number;
  courses: string[];
  service: string;
};

const districts: District[] = [
  {
    name: "Thiruvananthapuram",
    slug: "thiruvananthapuram",
    x: 158,
    y: 712,
    institutions: 34,
    courses: ["Engineering", "Medical", "Law"],
    service:
      "We handle KEAM and NEET option-filling for the capital's government campuses, where cutoffs move every round.",
  },
  {
    name: "Kollam",
    slug: "kollam",
    x: 140,
    y: 638,
    institutions: 41,
    courses: ["Engineering", "Nursing", "Commerce"],
    service:
      "Our home district — walk-in document verification, TKM and SN College counselling, and same-day fee guidance.",
  },
  {
    name: "Pathanamthitta",
    slug: "pathanamthitta",
    x: 178,
    y: 592,
    institutions: 19,
    courses: ["Nursing", "Arts & Science", "B.Ed"],
    service:
      "We map aided-college merit quotas and arrange hostel confirmations before you travel for admission.",
  },
  {
    name: "Alappuzha",
    slug: "alappuzha",
    x: 118,
    y: 566,
    institutions: 23,
    courses: ["Medical", "Commerce", "Marine"],
    service:
      "We track polytechnic and paramedical seat releases here and file your applications on the opening day.",
  },
  {
    name: "Kottayam",
    slug: "kottayam",
    x: 166,
    y: 528,
    institutions: 31,
    courses: ["Medical", "Law", "Management"],
    service:
      "MG University affiliation checks, equivalency certificates and deadline reminders handled end to end.",
  },
  {
    name: "Idukki",
    slug: "idukki",
    x: 208,
    y: 496,
    institutions: 12,
    courses: ["Agriculture", "Engineering", "Forestry"],
    service:
      "Limited seats, long distances — we shortlist realistically and confirm transport and hostel before you commit.",
  },
  {
    name: "Ernakulam",
    slug: "ernakulam",
    x: 128,
    y: 474,
    institutions: 52,
    courses: ["Engineering", "Management", "Design"],
    service:
      "The widest choice in Kerala. We compare fee structures and placement records so you don't pay for a brand alone.",
  },
  {
    name: "Thrissur",
    slug: "thrissur",
    x: 126,
    y: 412,
    institutions: 37,
    courses: ["Law", "Medical", "Fine Arts"],
    service:
      "We prepare KLEE and entrance portfolios, and verify your reservation category documents before submission.",
  },
  {
    name: "Palakkad",
    slug: "palakkad",
    x: 196,
    y: 386,
    institutions: 26,
    courses: ["Engineering", "Agriculture", "Arts & Science"],
    service:
      "IIT and government campus applications, plus a backup plan filed in parallel so no year is lost.",
  },
  {
    name: "Malappuram",
    slug: "malappuram",
    x: 132,
    y: 340,
    institutions: 29,
    courses: ["Arts & Science", "Management", "Nursing"],
    service:
      "Calicut University CAP registration, community quota paperwork and result-day follow-up on your behalf.",
  },
  {
    name: "Kozhikode",
    slug: "kozhikode",
    x: 104,
    y: 292,
    institutions: 33,
    courses: ["Medical", "Management", "Engineering"],
    service:
      "We schedule your interviews and certificate checks in one trip to save families repeated travel.",
  },
  {
    name: "Wayanad",
    slug: "wayanad",
    x: 166,
    y: 262,
    institutions: 9,
    courses: ["Agriculture", "Veterinary", "B.Ed"],
    service:
      "Scholarship and tribal-quota assistance, plus direct coordination with the campus admission office.",
  },
  {
    name: "Kannur",
    slug: "kannur",
    x: 96,
    y: 190,
    institutions: 21,
    courses: ["Engineering", "Nursing", "Commerce"],
    service:
      "Kannur University portal filing, spot-admission alerts and refund-rule explanations before you pay.",
  },
  {
    name: "Kasaragod",
    slug: "kasaragod",
    x: 82,
    y: 96,
    institutions: 14,
    courses: ["Arts & Science", "Nursing", "B.Ed"],
    service:
      "Bilingual guidance for northern families, including inter-state options if a Kerala seat isn't the best fit.",
  },
];

const keralaOutline =
  "M72 30 C58 60 50 120 52 152 C56 190 68 232 78 320 C86 382 96 436 108 492 C118 548 126 602 138 652 C146 692 152 726 160 756 L176 742 C176 700 180 664 192 636 C204 610 214 574 212 546 C208 512 196 486 196 456 C198 428 214 400 226 380 C234 356 234 336 224 300 C214 266 208 236 206 220 C202 192 190 160 178 140 C164 114 152 92 140 70 C122 48 100 36 72 30 Z";

export function DistrictMap() {
  const [active, setActive] = useState(1);
  const current = districts[active]!;
  const total = districts.reduce((n, d) => n + d.institutions, 0);

  return (
    <section id="districts" className="bg-paper-deep py-24 sm:py-32">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-3xl">
            <p className="eyebrow flex items-center gap-3 text-ochre">
              <span className="gold-rule" />
              Where we work
            </p>
            <h2 className="reveal mt-6 text-[clamp(2.3rem,4.8vw,4.2rem)]">
              All fourteen districts,{" "}
              <em className="font-light italic text-ochre">Kasaragod to Thiruvananthapuram.</em>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed">
            <span className="tnum font-semibold text-brown">{total}</span> institutions on our
            books. Pick a district to see what we cover there.
          </p>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
          {/* Map */}
          <div className="relative flex justify-center rounded-[2rem] bg-paper px-4 py-10 sm:py-12">
            <span className="absolute left-6 top-6 text-xs text-muted-foreground">
              Kerala · 14 districts
            </span>
            <span className="absolute bottom-6 right-6 font-mal text-lg text-brown/40">കേരളം</span>
            <svg
              viewBox="0 0 300 790"
              className="h-[440px] w-auto sm:h-[600px]"
              role="img"
              aria-label="Map of Kerala with the fourteen districts Quilon Educational Consultancy covers"
            >
              <path
                d={keralaOutline}
                fill="var(--paper-deep)"
                stroke="var(--brown)"
                strokeWidth={1.4}
                strokeLinejoin="round"
                opacity={0.9}
              />
              <path
                d={keralaOutline}
                fill="none"
                stroke="var(--brown)"
                strokeWidth={0.6}
                strokeDasharray="2 5"
                opacity={0.35}
                transform="translate(-10 4)"
              />

              {districts.map((d, i) => {
                const isActive = i === active;
                return (
                  <g
                    key={d.name}
                    onMouseEnter={() => setActive(i)}
                    onClick={() => setActive(i)}
                    className="cursor-pointer"
                  >
                    {isActive && (
                      <circle
                        cx={d.x}
                        cy={d.y}
                        r={16}
                        fill="none"
                        stroke="var(--ochre)"
                        strokeWidth={1}
                      >
                        <animate
                          attributeName="r"
                          values="10;20;10"
                          dur="2.6s"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="opacity"
                          values="0.8;0.1;0.8"
                          dur="2.6s"
                          repeatCount="indefinite"
                        />
                      </circle>
                    )}
                    <circle
                      cx={d.x}
                      cy={d.y}
                      r={isActive ? 7 : 4}
                      fill={isActive ? "var(--gold)" : "var(--brown)"}
                      stroke={isActive ? "var(--brown)" : "none"}
                      strokeWidth={1.5}
                      opacity={isActive ? 1 : 0.55}
                      style={{ transition: "all 250ms ease" }}
                    />
                    <circle cx={d.x} cy={d.y} r={24} fill="transparent" />
                    {isActive &&
                      (() => {
                        const left = d.x + 26 + d.name.length * 7 > 296;
                        const dir = left ? -1 : 1;
                        return (
                          <g>
                            <line
                              x1={d.x + 9 * dir}
                              y1={d.y}
                              x2={d.x + 22 * dir}
                              y2={d.y}
                              stroke="var(--brown)"
                              strokeWidth={1}
                            />
                            <text
                              x={d.x + 26 * dir}
                              y={d.y + 4}
                              textAnchor={left ? "end" : "start"}
                              fill="var(--brown)"
                              fontSize={13}
                              fontFamily="var(--font-display)"
                              fontStyle="italic"
                            >
                              {d.name}
                            </text>
                          </g>
                        );
                      })()}
                  </g>
                );
              })}
            </svg>
          </div>

          <div className="flex flex-col">
            {/* Detail */}
            <div aria-live="polite" className="border-b border-hairline pb-10">
              <div className="flex flex-wrap items-baseline justify-between gap-4">
                <h3 className="text-[clamp(2.2rem,4vw,3.4rem)]">{current.name}</h3>
                <p className="flex items-baseline gap-2">
                  <span className="tnum font-display text-4xl text-ochre">
                    {current.institutions}
                  </span>
                  <span className="text-sm">institutions</span>
                </p>
              </div>
              <p className="mt-3 text-sm text-brown/70">{current.courses.join(" · ")}</p>
              <p className="mt-6 max-w-xl text-base leading-relaxed">{current.service}</p>
              <Link
                to="/districts/$slug"
                params={{ slug: current.slug }}
                className="btn btn-primary mt-8"
              >
                Colleges in {current.name}
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            {/* Index */}
            <ul className="mt-8 grid grid-cols-2 gap-x-6 sm:grid-cols-3">
              {districts.map((d, i) => (
                <li key={d.slug}>
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    onMouseEnter={() => setActive(i)}
                    aria-pressed={i === active}
                    className={`flex w-full items-baseline justify-between gap-2 border-b border-hairline py-2.5 text-left text-sm transition-colors ${
                      i === active
                        ? "font-semibold text-brown"
                        : "text-muted-foreground hover:text-brown"
                    }`}
                  >
                    <span className="truncate">{d.name}</span>
                    <span className="tnum text-xs opacity-70">{d.institutions}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
