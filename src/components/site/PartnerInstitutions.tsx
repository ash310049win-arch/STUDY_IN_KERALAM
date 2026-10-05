import { useState } from "react";
import { Link } from "@tanstack/react-router";

const cochinPrograms = [
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
];

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
    programs: cochinPrograms,
  },
  {
    name: "Indira Gandhi Group of Institutions",
    location: "Kothamangalam, Ernakulam",
    programs: [
      "BBA + Hybrid Aviation & Hospitality Management",
      "BBA + Logistics & Supply Chain Management",
      "BBA + Hospital Administration & Health Care Management",
      "BBA + Sports Management & Fitness Trainer",
      ...cochinPrograms,
    ],
  },
];

type Partner = (typeof partners)[number];

function ProgramList({ programs }: { programs: string[] }) {
  return (
    <ul className="columns-1 gap-10 text-[0.95rem] leading-snug sm:columns-2 lg:columns-3">
      {programs.map((p) => (
        <li key={p} className="mb-2.5 flex break-inside-avoid gap-3">
          <span
            aria-hidden="true"
            className="mt-[0.55em] h-px w-3 shrink-0 bg-current opacity-40"
          />
          {p}
        </li>
      ))}
    </ul>
  );
}

function FeaturePartner({ partner }: { partner: Partner }) {
  const [expanded, setExpanded] = useState(false);
  const shown = expanded ? partner.programs : partner.programs.slice(0, 9);
  return (
    <article className="reveal relative overflow-hidden rounded-[2rem] bg-brown p-7 text-offwhite/80 sm:p-12">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-6 -top-10 font-mal text-[11rem] leading-none text-offwhite/[0.04] sm:text-[16rem]"
      >
        വി
      </span>
      <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <p className="text-xs font-semibold text-gold">Featured partner · {partner.subtitle}</p>
          <h3 className="mt-4 text-[clamp(2rem,3.6vw,3rem)] text-offwhite">{partner.name}</h3>
          <p className="mt-2 text-sm">{partner.location}</p>
          {partner.note && (
            <p className="mt-6 max-w-md text-base leading-relaxed">{partner.note}</p>
          )}
          {partner.stat && (
            <p className="mt-8 flex items-baseline gap-3 border-t border-offwhite/15 pt-6">
              <span className="tnum font-display text-5xl text-gold">{partner.stat.value}</span>
              <span className="text-sm">{partner.stat.label}</span>
            </p>
          )}
        </div>
        <div>
          <p className="mb-5 text-xs font-semibold text-offwhite/60">
            {partner.programs.length} programmes
          </p>
          <ul className="grid gap-x-8 text-[0.95rem] sm:grid-cols-2">
            {shown.map((p) => (
              <li key={p} className="border-b border-offwhite/10 py-2.5 text-offwhite/90">
                {p}
              </li>
            ))}
          </ul>
          {partner.programs.length > 9 && (
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              aria-expanded={expanded}
              className="link-underline mt-5 text-sm font-semibold text-gold"
            >
              {expanded ? "Show fewer" : `Show all ${partner.programs.length} programmes`}
            </button>
          )}
        </div>
      </div>
    </article>
  );
}

function PartnerRow({ partner, index }: { partner: Partner; index: number }) {
  const [open, setOpen] = useState(false);
  const id = `partner-${index}`;
  return (
    <li className="border-b border-hairline">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={id}
        className="group grid w-full grid-cols-[1fr_auto] items-center gap-x-6 gap-y-1 py-7 text-left sm:grid-cols-[3rem_1fr_auto_auto] sm:py-8"
      >
        <span className="tnum hidden text-sm text-muted-foreground sm:block">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span>
          <span className="block font-display text-[clamp(1.4rem,2.6vw,2.1rem)] leading-tight text-brown transition-colors group-hover:text-ochre">
            {partner.name}
          </span>
          <span className="mt-1 block text-sm">{partner.location}</span>
        </span>
        <span className="tnum hidden text-sm text-muted-foreground sm:block">
          {partner.programs.length} programmes
        </span>
        <span
          aria-hidden="true"
          className={`flex size-10 items-center justify-center rounded-full border border-hairline text-brown transition-[transform,background-color] duration-300 group-hover:bg-paper-deep ${
            open ? "rotate-45" : ""
          }`}
        >
          <svg
            viewBox="0 0 16 16"
            className="size-3.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M8 2v12M2 8h12" />
          </svg>
        </span>
      </button>
      <div
        id={id}
        className={`grid transition-[grid-template-rows] duration-500 ease-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="pb-10 sm:pl-[4.5rem]">
            {(partner.note || partner.stat) && (
              <p className="mb-6 max-w-2xl text-sm leading-relaxed text-brown">
                {partner.stat && (
                  <strong className="font-semibold">
                    {partner.stat.value} {partner.stat.label}.{" "}
                  </strong>
                )}
                {partner.note}
              </p>
            )}
            <ProgramList programs={partner.programs} />
          </div>
        </div>
      </div>
    </li>
  );
}

export function PartnerInstitutions() {
  const [feature, ...rest] = partners;
  return (
    <section id="partners" className="py-24 sm:py-32">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-3xl">
            <p className="eyebrow flex items-center gap-3 text-ochre">
              <span className="gold-rule" />
              Partner colleges
            </p>
            <h2 className="reveal mt-6 text-[clamp(2.3rem,4.8vw,4.2rem)]">
              Colleges we work with <em className="font-light italic text-ochre">directly.</em>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed">
            A direct line to the admission office means faster answers on seats, fees and hostel —
            for you, not for us.
          </p>
        </div>

        <div className="mt-16">
          <FeaturePartner partner={feature!} />
        </div>

        <ul className="mt-6 border-t border-hairline">
          {rest.map((p, i) => (
            <PartnerRow key={p.name} partner={p} index={i} />
          ))}
        </ul>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-6">
          <p className="max-w-md text-sm">
            Looking at a college that isn't listed? We guide admissions to 180+ institutions across
            Kerala.
          </p>
          <Link to="/book-consultation" className="btn btn-primary">
            Apply through Quilon
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
