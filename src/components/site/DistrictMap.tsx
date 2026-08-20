import { useState } from "react";
import { Link } from "@tanstack/react-router";
import bgImg from "@/assets/districts-landscape.jpg";

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
    service: "We handle KEAM and NEET option-filling for the capital's government campuses, where cutoffs move every round.",
  },
  {
    name: "Kollam",
    slug: "kollam",
    x: 140,
    y: 638,
    institutions: 41,
    courses: ["Engineering", "Nursing", "Commerce"],
    service: "Our home district — walk-in document verification, TKM and SN College counselling, and same-day fee guidance.",
  },
  {
    name: "Pathanamthitta",
    slug: "pathanamthitta",
    x: 178,
    y: 592,
    institutions: 19,
    courses: ["Nursing", "Arts & Science", "B.Ed"],
    service: "We map aided-college merit quotas and arrange hostel confirmations before you travel for admission.",
  },
  {
    name: "Alappuzha",
    slug: "alappuzha",
    x: 118,
    y: 566,
    institutions: 23,
    courses: ["Medical", "Commerce", "Marine"],
    service: "We track polytechnic and paramedical seat releases here and file your applications on the opening day.",
  },
  {
    name: "Kottayam",
    slug: "kottayam",
    x: 166,
    y: 528,
    institutions: 31,
    courses: ["Medical", "Law", "Management"],
    service: "MG University affiliation checks, equivalency certificates and deadline reminders handled end to end.",
  },
  {
    name: "Idukki",
    slug: "idukki",
    x: 208,
    y: 496,
    institutions: 12,
    courses: ["Agriculture", "Engineering", "Forestry"],
    service: "Limited seats, long distances — we shortlist realistically and confirm transport and hostel before you commit.",
  },
  {
    name: "Ernakulam",
    slug: "ernakulam",
    x: 128,
    y: 474,
    institutions: 52,
    courses: ["Engineering", "Management", "Design"],
    service: "The widest choice in Kerala. We compare fee structures and placement records so you don't pay for a brand alone.",
  },
  {
    name: "Thrissur",
    slug: "thrissur",
    x: 126,
    y: 412,
    institutions: 37,
    courses: ["Law", "Medical", "Fine Arts"],
    service: "We prepare KLEE and entrance portfolios, and verify your reservation category documents before submission.",
  },
  {
    name: "Palakkad",
    slug: "palakkad",
    x: 196,
    y: 386,
    institutions: 26,
    courses: ["Engineering", "Agriculture", "Arts & Science"],
    service: "IIT and government campus applications, plus a backup plan filed in parallel so no year is lost.",
  },
  {
    name: "Malappuram",
    slug: "malappuram",
    x: 132,
    y: 340,
    institutions: 29,
    courses: ["Arts & Science", "Management", "Nursing"],
    service: "Calicut University CAP registration, community quota paperwork and result-day follow-up on your behalf.",
  },
  {
    name: "Kozhikode",
    slug: "kozhikode",
    x: 104,
    y: 292,
    institutions: 33,
    courses: ["Medical", "Management", "Engineering"],
    service: "We schedule your interviews and certificate checks in one trip to save families repeated travel.",
  },
  {
    name: "Wayanad",
    slug: "wayanad",
    x: 166,
    y: 262,
    institutions: 9,
    courses: ["Agriculture", "Veterinary", "B.Ed"],
    service: "Scholarship and tribal-quota assistance, plus direct coordination with the campus admission office.",
  },
  {
    name: "Kannur",
    slug: "kannur",
    x: 96,
    y: 190,
    institutions: 21,
    courses: ["Engineering", "Nursing", "Commerce"],
    service: "Kannur University portal filing, spot-admission alerts and refund-rule explanations before you pay.",
  },
  {
    name: "Kasaragod",
    slug: "kasaragod",
    x: 82,
    y: 96,
    institutions: 14,
    courses: ["Arts & Science", "Nursing", "B.Ed"],
    service: "Bilingual guidance for northern families, including inter-state options if a Kerala seat isn't the best fit.",
  },
];

const keralaOutline =
  "M72 30 C58 60 50 120 52 152 C56 190 68 232 78 320 C86 382 96 436 108 492 C118 548 126 602 138 652 C146 692 152 726 160 756 L176 742 C176 700 180 664 192 636 C204 610 214 574 212 546 C208 512 196 486 196 456 C198 428 214 400 226 380 C234 356 234 336 224 300 C214 266 208 236 206 220 C202 192 190 160 178 140 C164 114 152 92 140 70 C122 48 100 36 72 30 Z";

export function DistrictMap() {
  const [active, setActive] = useState(6);
  const current = districts[active]!;

  return (
    <section
      id="districts"
      className="relative overflow-hidden py-20 sm:py-28"
    >
      {/* Background image */}
      <img
        src={bgImg}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* Dark brown overlay */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "oklch(0.32 0.045 55 / 0.78)" }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <div className="max-w-2xl">
          <span className="eyebrow flex items-center gap-3 text-gold">
            <span className="gold-rule" />
            Coverage
          </span>
          <h2 className="mt-5 text-[clamp(2rem,4vw,3.4rem)] text-ivory">
            Fourteen districts.
          </h2>
          <p
            className="mt-4 text-sm leading-relaxed sm:text-base"
            style={{ color: "oklch(0.965 0.012 85 / 0.72)" }}
          >
            Tap a district to see institutions and courses we cover there.
          </p>
        </div>

        {/* Map + detail layout */}
        <div className="mt-14 grid items-start gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          {/* SVG Map */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Glow behind the map */}
              <div
                className="pointer-events-none absolute inset-0 -m-8 rounded-full"
                style={{
                  background: "oklch(0.74 0.095 82 / 0.12)",
                  filter: "blur(40px)",
                }}
              />
              <svg
                viewBox="0 0 300 790"
                className="relative h-[440px] w-auto sm:h-[560px]"
                role="img"
                aria-label="Map of Kerala with the fourteen districts Quilon Educational Consultancy covers"
              >
                <defs>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="6" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Map outline */}
                <path
                  d={keralaOutline}
                  fill="none"
                  stroke="var(--ivory)"
                  strokeWidth={2}
                  strokeLinejoin="round"
                  opacity={0.35}
                />
                <path
                  d={keralaOutline}
                  fill="none"
                  stroke="var(--gold)"
                  strokeWidth={1.2}
                  strokeLinejoin="round"
                  opacity={0.18}
                  filter="url(#glow)"
                />

                {/* District markers */}
                {districts.map((d, i) => {
                  const isActive = i === active;
                  return (
                    <g
                      key={d.name}
                      onMouseEnter={() => setActive(i)}
                      onClick={() => setActive(i)}
                      className="cursor-pointer"
                    >
                      {/* Active ring pulse */}
                      {isActive && (
                        <>
                          <circle
                            cx={d.x}
                            cy={d.y}
                            r={18}
                            fill="none"
                            stroke="var(--gold)"
                            strokeWidth={1.5}
                            opacity={0.5}
                          >
                            <animate
                              attributeName="r"
                              values="12;22;12"
                              dur="2.4s"
                              repeatCount="indefinite"
                            />
                            <animate
                              attributeName="opacity"
                              values="0.55;0.15;0.55"
                              dur="2.4s"
                              repeatCount="indefinite"
                            />
                          </circle>
                          <circle
                            cx={d.x}
                            cy={d.y}
                            r={14}
                            fill="var(--gold)"
                            opacity={0.18}
                          >
                            <animate
                              attributeName="r"
                              values="10;20;10"
                              dur="2.4s"
                              repeatCount="indefinite"
                            />
                            <animate
                              attributeName="opacity"
                              values="0.22;0.04;0.22"
                              dur="2.4s"
                              repeatCount="indefinite"
                            />
                          </circle>
                        </>
                      )}

                      {/* Marker dot */}
                      <circle
                        cx={d.x}
                        cy={d.y}
                        r={isActive ? 8 : 5}
                        fill={isActive ? "var(--gold)" : "var(--ivory)"}
                        opacity={isActive ? 1 : 0.4}
                        style={{ transition: "all 250ms ease" }}
                      />
                      {isActive && (
                        <circle
                          cx={d.x}
                          cy={d.y}
                          r={8}
                          fill="none"
                          stroke="var(--ivory)"
                          strokeWidth={2}
                          opacity={0.9}
                          style={{ transition: "all 250ms ease" }}
                        />
                      )}

                      {/* Larger hit target */}
                      <circle cx={d.x} cy={d.y} r={28} fill="transparent" />

                      {/* Tooltip label */}
                      {isActive && (
                        <g>
                          <rect
                            x={d.x + 14}
                            y={d.y - 14}
                            width={d.name.length * 7.5 + 16}
                            height={26}
                            rx={6}
                            fill="oklch(0.32 0.045 55 / 0.92)"
                            stroke="var(--gold)"
                            strokeWidth={0.8}
                          />
                          <text
                            x={d.x + 22}
                            y={d.y + 3}
                            fill="var(--ivory)"
                            fontSize={11}
                            fontFamily="var(--font-display)"
                            fontWeight={700}
                          >
                            {d.name}
                          </text>
                        </g>
                      )}
                    </g>
                  );
                })}
              </svg>
            </div>
          </div>

          {/* Detail card */}
          <div
            className="rounded-2xl p-8 sm:p-10"
            style={{
              backgroundColor: "oklch(0.32 0.045 55 / 0.55)",
              backdropFilter: "blur(16px) saturate(1.1)",
              border: "1px solid oklch(0.965 0.012 85 / 0.1)",
            }}
          >
            <span className="eyebrow text-gold">
              District {String(active + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-3 text-[clamp(1.6rem,2.6vw,2.4rem)] text-ivory">
              {current.name}
            </h3>

            <div className="mt-6 flex items-baseline gap-3">
              <span className="font-display text-4xl font-extrabold text-gold">
                {current.institutions}
              </span>
              <span
                className="text-sm"
                style={{ color: "oklch(0.965 0.012 85 / 0.65)" }}
              >
                institutions covered by Quilon
              </span>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {current.courses.map((c) => (
                <span
                  key={c}
                  className="rounded-full px-3 py-1 text-xs font-semibold"
                  style={{
                    color: "var(--gold)",
                    border: "1px solid oklch(0.74 0.095 82 / 0.35)",
                  }}
                >
                  {c}
                </span>
              ))}
            </div>

            <p
              className="mt-6 border-t pt-6 text-sm leading-relaxed"
              style={{
                color: "oklch(0.965 0.012 85 / 0.72)",
                borderColor: "oklch(0.965 0.012 85 / 0.12)",
              }}
            >
              {current.service}
            </p>

            <Link
              to="/districts/$slug"
              params={{ slug: current.slug }}
              className="mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-all duration-300 hover:-translate-y-0.5"
              style={{
                backgroundColor: "var(--gold)",
                color: "var(--ink)",
              }}
            >
              Explore more options
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
