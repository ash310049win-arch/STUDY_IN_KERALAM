import { Link } from "@tanstack/react-router";
import consult from "@/assets/final-cta.jpg";
import match from "@/assets/step-match.jpg";
import application from "@/assets/step-application.jpg";
import admitted from "@/assets/step-admitted.jpg";

const steps = [
  {
    label: "One",
    who: "You and us",
    title: "Tell us your goals",
    body: "A free sit-down — in Kollam, Trivandrum or on a call. Your marks, your budget, your course, how far from home you're willing to go.",
    img: consult,
    alt: "A student on a call with an advisor, taking notes at her desk",
    shape: "rounded-[1.5rem] rounded-tr-[6rem] aspect-[5/4]",
  },
  {
    label: "Two",
    who: "Our job",
    title: "We match you to colleges and courses",
    body: "A ranked shortlist: safe, likely, ambitious — with fees, hostel reality and placement records attached.",
    img: match,
    alt: "A shortlist of Kerala colleges and course brochures on a desk",
    shape: "rounded-[1.5rem] aspect-[4/3]",
  },
  {
    label: "Three",
    who: "Our job",
    title: "We handle the application",
    body: "Registration, document upload, fee payment, option entry and every allotment revision — filed on time, checked twice.",
    img: application,
    alt: "A student completing a college admission application form",
    shape: "rounded-[1.5rem] rounded-bl-[6rem] aspect-[5/4]",
  },
  {
    label: "Four",
    who: "Our job, until the end",
    title: "You get admitted",
    body: "We stay on it through fee remittance and joining formalities. Nothing is handed back to you half-finished.",
    img: admitted,
    alt: "A student holding an admission letter outside a Kerala college",
    shape: "rounded-[1.5rem] aspect-[4/3] object-[center_30%]",
  },
];

export function Process() {
  return (
    <section id="process" className="bg-paper-deep py-24 sm:py-32">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-3xl">
            <p className="eyebrow flex items-center gap-3 text-ochre">
              <span className="gold-rule" />
              How it works
            </p>
            <h2 className="reveal mt-6 text-[clamp(2.3rem,4.8vw,4.2rem)]">
              Four steps. <em className="font-light italic text-ochre">We carry three of them.</em>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed">
            You make the decisions. We do the portals, the paperwork and the waiting-by-the-phone on
            allotment day.
          </p>
        </div>

        <ol className="relative mt-20 space-y-20 sm:space-y-28">
          <span
            aria-hidden="true"
            className="absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 bg-hairline lg:block"
          />
          {steps.map((s, i) => {
            const flip = i % 2 === 1;
            return (
              <li
                key={s.label}
                className="relative grid items-center gap-8 lg:grid-cols-2 lg:gap-24"
              >
                <span
                  aria-hidden="true"
                  className="absolute left-1/2 top-1/2 hidden size-3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-brown/40 bg-paper-deep lg:block"
                />
                <div className={`reveal ${flip ? "lg:order-2" : ""}`}>
                  <img
                    src={s.img}
                    alt={s.alt}
                    width={1200}
                    height={900}
                    loading="lazy"
                    className={`w-full object-cover ${s.shape}`}
                  />
                </div>
                <div className={`reveal max-w-lg ${flip ? "lg:order-1 lg:justify-self-end" : ""}`}>
                  <p className="flex items-baseline gap-4">
                    <span className="font-display text-5xl font-light italic text-ochre sm:text-6xl">
                      {s.label}
                    </span>
                    <span className="text-xs font-medium text-muted-foreground">{s.who}</span>
                  </p>
                  <h3 className="mt-5 text-[clamp(1.7rem,2.8vw,2.4rem)] leading-tight">
                    {s.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed">{s.body}</p>
                  {i === 0 && (
                    <Link
                      to="/book-consultation"
                      className="link-underline mt-6 inline-block text-sm font-semibold text-brown"
                    >
                      Book the free sit-down →
                    </Link>
                  )}
                  {i === steps.length - 1 && (
                    <Link to="/book-consultation" className="btn btn-primary mt-8">
                      Begin step one
                      <span aria-hidden="true">→</span>
                    </Link>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
