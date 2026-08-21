import { useState } from "react";
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
      "B.Tech Mechanical Engineering",
      "BBA (Hons)",
      "B.Com (Hons)",
      "BCA (Hons)",
      "B.Sc (Hons)",
      "BA",
      "Integrated B.Ed",
      "MBA",
      "MCA",
      "M.Sc",
      "M.Com",
    ],
    note: "Flagship deemed university offering industry-aligned engineering programs across multiple specialisations.",
    stat: { value: "4+", label: "B.Tech specialisations" },
    feature: true,
  },
  {
    name: "Travancore Engineering College",
    location: "Oyoor, Kollam",
    programs: [
      "B.Tech CSE (AI & ML)",
      "B.Tech CSE (Cloud Computing with Cyber Security)",
      "B.Tech Civil Engineering (QA&QC / Concrete NDT)",
      "B.Tech Civil Engineering (Quality Surveying & Cost Estimation)",
      "B.Tech Mechanical Engineering (QA&QC / Automation Design)",
      "B.Tech Electrical & Electronics Engineering (Robotic Process Automation & AI)",
      "B.Tech Electrical & Electronics Engineering (QA&QC / Electric Vehicle Technology)",
      "BBA (Logistics & Supply Chain Management)",
      "BBA (Aviation & Airport Management)",
      "BCA (Cloud Computing & Ethical Hacking)",
      "BCA (Artificial Intelligence & Machine Learning)",
      "BHM",
    ],
  },
  {
    name: "KMM College of Arts & Science",
    location: "Kochi",
    programs: [
      "BBA",
      "BBA + Aviation & Airport Management",
      "BBA + Logistics & Supply Chain Management & Air Cargo Management",
      "BBA + Entrepreneurship & Startup",
      "B.Com",
      "B.Com + ACCA",
      "B.Com + Aviation & Airport Management",
      "B.Com + Logistics & Supply Chain Management & Air Cargo Management",
      "B.Com + Entrepreneurship & Startup",
      "BCA",
      "BCA + AI & Data Science",
      "BCA + Cloud Computing & Ethical Hacking & Cyber Security",
      "B.Sc Cyber Forensics",
      "B.Sc Cyber Forensics + AI & Data Science",
      "B.Sc Cyber Forensics + Cloud Computing & Ethical Hacking & Cyber Security",
      "B.Sc Computer Science",
      "B.Sc Computer Science + AI & Data Science",
      "B.Sc Computer Science + Cloud Computing & Ethical Hacking & Cyber Security",
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
      "BBA + Aviation & Logistics",
      "BBA + Airline Cabin Crew & Airport Management",
      "BCA",
      "BCA + Cloud Computing & Cyber Security",
      "BCA + Full Stack Development",
      "BCA + Game Development & 3D Art Design",
      "BCA + AI & Data Science",
      "B.Sc Cyber Forensics (Hons) + Cloud Computing & Full Stack Development",
      "B.Sc Cyber Forensics (Hons) + Game Development & 3D Art Designing",
      "B.Sc Cyber Forensics + AI & Data Science",
      "B.Sc Food Technology & Quality Assurance",
      "B.Sc Psychology",
      "B.Sc Microbiology",
      "B.Sc Biotechnology",
      "B.Com",
      "B.Com + ACCA",
      "B.Com + CMA (India/USA)",
      "B.Com + Aviation & Logistics",
      "B.Com + Airline Cabin Crew & Airport Management",
      "B.Com + Game Development & 3D Art Design",
      "B.Com + Fintech & AI",
      "B.Com + Business Mastery Program",
      "B.Com + Stock Trading & Investment Management",
      "B.Com + Blockchain & AI",
      "B.Com + Cyber Security & Ethical Hacking",
      "M.Com Finance & Taxation",
      "M.Sc Artificial Intelligence",
      "M.Sc Microbiology",
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

const VISIBLE_PROGRAM_COUNT = 7;

function ProgramPill({ label }: { label: string }) {
  return (
    <span className="inline-block max-w-full rounded-full border border-gold px-3 py-1 text-xs font-semibold leading-snug tracking-wide text-gold">
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
  const [expanded, setExpanded] = useState(false);
  const visiblePrograms =
    partner.programs.length > VISIBLE_PROGRAM_COUNT && !expanded
      ? partner.programs.slice(0, VISIBLE_PROGRAM_COUNT)
      : partner.programs;
  const hiddenCount = partner.programs.length - VISIBLE_PROGRAM_COUNT;

  return (
    <article
      className={`relative flex min-w-0 flex-col rounded-sm border border-hairline bg-offwhite ${
        isFeature ? "border-l-[3px] border-l-gold p-7 sm:p-9" : "p-5 sm:p-6"
      } ${className}`}
    >
      <PartnerBadge />

      <h3
        className={`mt-4 font-display font-extrabold leading-tight text-brown ${
          isFeature ? "text-[clamp(1.4rem,2.5vw,2rem)]" : "text-[clamp(1rem,1.6vw,1.25rem)]"
        }`}
      >
        {partner.name}
      </h3>

      {partner.subtitle && (
        <p className="mt-1 text-sm font-semibold text-gold">{partner.subtitle}</p>
      )}

      <p className="mt-1 text-sm text-muted-foreground">{partner.location}</p>

      {partner.note && (
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{partner.note}</p>
      )}

      {partner.stat && (
        <div className="mt-4 flex items-baseline gap-2">
          <span className="font-display text-3xl font-extrabold text-gold">
            {partner.stat.value}
          </span>
          <span className="text-sm text-muted-foreground">{partner.stat.label}</span>
        </div>
      )}

      <div className="pt-5">
        <p className="mb-2.5 text-[0.6875rem] font-bold uppercase tracking-widest text-gold">
          Flagship programs
        </p>
        <div className="flex min-w-0 flex-wrap gap-2">
          {visiblePrograms.map((p) => (
            <ProgramPill key={p} label={p} />
          ))}
        </div>
        {partner.programs.length > VISIBLE_PROGRAM_COUNT && (
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            className="mt-3 inline-flex items-center gap-1.5 text-[0.6875rem] font-bold uppercase tracking-widest text-gold transition-colors hover:text-brown focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          >
            {expanded
              ? "Show fewer"
              : `Show all ${partner.programs.length} programs (+${hiddenCount})`}
            <svg
              className={`size-3.5 transition-transform ${expanded ? "rotate-180" : ""}`}
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 6l4 4 4-4" />
            </svg>
          </button>
        )}
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
          <h2 className="mt-5 text-[clamp(2rem,4vw,3.4rem)]">Our Partner Institutions</h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            The colleges we work with directly to get Kerala students admitted
          </p>
        </div>

        {/*
         * Card grid: 1 col (mobile) / 2 cols (tablet) / 3 equal cols (desktop).
         * CSS Grid sizes every track identically, so no card can exceed its
         * column; min-w-0 on each card lets long program pills wrap instead
         * of pushing the grid wider than the container. Cards keep natural
         * heights while stretch alignment keeps same-row cards level.
         */}
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {partners.map((p) => (
            <PartnerCard key={p.name} partner={p} />
          ))}
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
