import { Link } from "@tanstack/react-router";

const partners = [
  {
    name: "Chinmaya Vishwa Vidyapeeth",
    subtitle: "Deemed to be University",
    location: "Kerala",
    programs: [
      "B.Tech CSE – Data Science",
      "B.Tech CSE – AI & ML",
      "B.Tech CSE – Cyber Security",
      "B.Tech Electronics & Communication Engineering",
    ],
    note: "Flagship deemed university offering industry-aligned engineering programs across multiple specialisations.",
    stat: { value: "4+", label: "B.Tech specialisations" },
    feature: true,
  },
  {
    name: "Travancore Engineering College",
    location: "Oyoor, Kollam",
    programs: [
      "B.Tech CSE",
      "B.Tech Civil Engineering",
      "B.Tech Mechanical Engineering",
      "B.Tech Electrical & Electronics Engineering",
      "BBA",
      "BBA + Aviation & Airport Management",
      "BCA",
      "BCA + Cloud Computing & Ethical Hacking",
      "BHM",
    ],
  },
  {
    name: "KMM College of Arts & Science",
    location: "Kochi",
    programs: [
      "BBA",
      "BBA + Aviation & Airport Management",
      "B.Com",
      "B.Com + ACCA",
      "BCA",
      "BCA + AI & Data Science",
      "BCA + Cloud Computing & Cyber Security",
      "B.Sc Computer Science",
      "B.Sc Cyber Forensics",
      "BBA + Logistics & Supply Chain Management",
    ],
  },
  {
    name: "Don Bosco College",
    location: "Mampetta, Malappuram",
    programs: [
      "BBA + Aviation & Logistics",
      "B.Com + Aviation & Logistics",
      "BCA + AI & Data Science",
      "B.Sc AI & Data Science",
      "BSW + Hospital Administration & Health Care Management",
    ],
    stat: { value: "100%", label: "placement assistance" },
    note: "Educational loan support available.",
  },
  {
    name: "Cochin Arts and Science College",
    location: "Ernakulam",
    programs: [
      "BBA",
      "BCA",
      "BCA + AI & Data Science",
      "BCA + Full Stack Development",
      "B.Sc Cyber Forensics",
      "B.Sc Psychology",
      "B.Sc Microbiology",
      "B.Sc Biotechnology",
      "B.Com + ACCA",
      "MBA",
    ],
  },
  {
    name: "Indira Gandhi Group of Institutions",
    location: "Kothamangalam, Ernakulam",
    programs: [
      "BBA + Hybrid Aviation & Hospitality Management",
      "BBA + Logistics & Supply Chain Management",
      "BBA + Hospital Administration & Health Care Management",
      "BBA + Sports Management & Fitness Trainer",
    ],
  },
];

function ProgramPill({ label }: { label: string }) {
  return (
    <span className="inline-block whitespace-nowrap rounded-full border border-gold px-3 py-1 text-xs font-semibold tracking-wide text-gold">
      {label}
    </span>
  );
}

function PartnerBadge() {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-sm bg-kerala px-2.5 py-1 text-[0.625rem] font-bold uppercase tracking-widest text-offwhite">
      <span className="inline-block size-1.5 rounded-full bg-gold" />
      Partner Institution
    </span>
  );
}

function PartnerCard({
  partner,
  className = "",
}: {
  partner: (typeof partners)[number];
  className?: string;
}) {
  const isFeature = partner.feature;

  return (
    <article
      className={`relative flex flex-col rounded-sm border border-hairline bg-offwhite ${
        isFeature
          ? "border-l-[3px] border-l-gold p-7 sm:p-9"
          : "p-5 sm:p-6"
      } ${className}`}
    >
      <PartnerBadge />

      <h3
        className={`mt-4 font-display font-extrabold leading-tight text-brown ${
          isFeature
            ? "text-[clamp(1.4rem,2.5vw,2rem)]"
            : "text-[clamp(1rem,1.6vw,1.25rem)]"
        }`}
      >
        {partner.name}
      </h3>

      {partner.subtitle && (
        <p className="mt-1 text-sm font-semibold text-gold">
          {partner.subtitle}
        </p>
      )}

      <p className="mt-1 text-sm text-muted-foreground">{partner.location}</p>

      {partner.note && (
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {partner.note}
        </p>
      )}

      {partner.stat && (
        <div className="mt-4 flex items-baseline gap-2">
          <span className="font-display text-3xl font-extrabold text-gold">
            {partner.stat.value}
          </span>
          <span className="text-sm text-muted-foreground">
            {partner.stat.label}
          </span>
        </div>
      )}

      <div className="pt-5">
        <p className="mb-2.5 text-[0.6875rem] font-bold uppercase tracking-widest text-gold">
          Flagship programs
        </p>
        <div className="flex flex-wrap gap-2">
          {partner.programs.map((p) => (
            <ProgramPill key={p} label={p} />
          ))}
        </div>
      </div>
    </article>
  );
}

export function PartnerInstitutions() {
  return (
    <section id="partners" className="bg-ivory py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* ── Header ── */}
        <div className="max-w-2xl">
          <span className="eyebrow flex items-center gap-3 text-kerala">
            <span className="gold-rule" />
            Our network
          </span>
          <h2 className="mt-5 text-[clamp(2rem,4vw,3.4rem)]">
            Our Partner Institutions
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            The colleges we work with directly to get Kerala students admitted
          </p>
        </div>

        {/*
         * Layout: three independent flex columns on desktop.
         * Each card is natural-height (content-driven), no min-h, no translate.
         * Column 3 starts lower (pt-14) for the staggered / asymmetric feel.
         * No overlap is possible because there are no transforms — every card
         * sits exactly where the flex flow places it.
         */}

        {/* ── Mobile: single column ── */}
        <div className="mt-12 flex flex-col gap-5 md:hidden">
          {partners.map((p) => (
            <PartnerCard key={p.name} partner={p} />
          ))}
        </div>

        {/* ── Tablet: two columns ── */}
        <div className="mt-12 hidden gap-5 md:flex lg:hidden">
          <div className="flex flex-1 flex-col gap-5">
            <PartnerCard partner={partners[0]} />
            <PartnerCard partner={partners[3]} />
            <PartnerCard partner={partners[5]} />
          </div>
          <div className="flex flex-1 flex-col gap-5 pt-8">
            <PartnerCard partner={partners[1]} />
            <PartnerCard partner={partners[2]} />
            <PartnerCard partner={partners[4]} />
          </div>
        </div>

        {/* ── Desktop: three asymmetric columns ── */}
        <div className="mt-12 hidden gap-5 lg:flex">
          {/* Col 1 — Feature card + compact */}
          <div className="flex flex-1 flex-col gap-5">
            <PartnerCard partner={partners[0]} />
            <PartnerCard partner={partners[3]} />
          </div>

          {/* Col 2 — Tall card (7 programs) + wide */}
          <div className="flex flex-1 flex-col gap-5">
            <PartnerCard partner={partners[1]} />
            <PartnerCard partner={partners[4]} />
          </div>

          {/* Col 3 — Staggered start (offset down) + compact */}
          <div className="flex flex-1 flex-col gap-5 pt-14">
            <PartnerCard partner={partners[2]} />
            <PartnerCard partner={partners[5]} />
          </div>
        </div>

        {/* ── CTA ── */}
        <div className="mt-14 flex justify-center">
          <Link
            to="/book-consultation"
            className="inline-flex items-center gap-2 rounded-sm bg-brown px-8 py-3.5 text-sm font-bold uppercase tracking-widest text-offwhite transition-colors hover:bg-gold hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          >
            Apply through Quilon
            <svg
              className="size-4"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
