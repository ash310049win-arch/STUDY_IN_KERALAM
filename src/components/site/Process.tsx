import { Link } from "@tanstack/react-router";
import consult from "@/assets/hero-consultation.jpg";
import match from "@/assets/step-match.jpg";
import application from "@/assets/step-application.jpg";
import admitted from "@/assets/step-admitted.jpg";

export function Process() {
  return (
    <section id="process" className="bg-offwhite py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <span className="eyebrow flex items-center gap-3 text-laterite">
            <span className="gold-rule" />
            The process
          </span>
          <h2 className="mt-5 text-[clamp(2rem,4vw,3.4rem)]">
            Four steps. We carry the weight of three of them.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {/* Step 1 — treatment 3: headline on bright photo with blur strip */}
          <article className="relative isolate overflow-hidden rounded-sm lg:col-span-2">
            <img
              src={consult}
              alt="An advisor discussing course goals with a student"
              width={1920}
              height={1280}
              loading="lazy"
              className="h-[340px] w-full object-cover object-center sm:h-[440px]"
            />
            <div className="absolute inset-x-0 bottom-0 flex flex-wrap items-end justify-between gap-6 p-6 sm:p-10">
              <div className="text-blur-strip max-w-xl rounded-sm px-6 py-5">
                <h3 className="text-2xl sm:text-3xl">Tell us your goals</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  A free sit-down — in Kollam or on a call. Your marks, your budget, your
                  course, how far from home you're willing to go.
                </p>
              </div>
              <span className="font-display text-[5rem] font-extrabold leading-none text-offwhite drop-shadow-[0_2px_16px_oklch(0.18_0.008_60/0.55)] sm:text-[7rem]">
                01
              </span>
            </div>
          </article>

          {/* Step 2 — treatment 1: offwhite card over part of the photo */}
          <article className="relative isolate overflow-hidden rounded-sm">
            <img
              src={match}
              alt="A shortlist of Kerala colleges and course brochures on a desk"
              width={1200}
              height={900}
              loading="lazy"
              className="h-[420px] w-full object-cover"
            />
            <span className="absolute right-5 top-4 font-display text-[4.5rem] font-extrabold leading-none text-offwhite/90 drop-shadow-[0_2px_14px_oklch(0.18_0.008_60/0.5)]">
              02
            </span>
            <div className="absolute bottom-5 left-5 max-w-sm bg-offwhite p-6">
              <h3 className="text-xl">We match you to colleges & courses</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                A ranked shortlist: safe, likely, ambitious — with fees, hostel reality and
                placement records attached.
              </p>
            </div>
          </article>

          {/* Step 3 — treatment 4: vertical Kerala Green band carrying the text */}
          <article className="relative isolate flex overflow-hidden rounded-sm">
            <img
              src={application}
              alt="A student completing a college admission application form"
              width={1200}
              height={900}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="relative ml-auto flex h-[420px] w-[62%] flex-col justify-end bg-kerala p-6 sm:w-[55%] sm:p-8">
              <span className="font-display text-[4.5rem] font-extrabold leading-none text-offwhite/35">
                03
              </span>
              <h3 className="mt-2 text-xl text-offwhite">We handle the application</h3>
              <p className="mt-2 text-sm leading-relaxed text-offwhite/85">
                Registration, document upload, fee payment, option entry and every
                allotment revision — filed on time, checked twice.
              </p>
            </div>
          </article>

          {/* Step 4 — treatment 2: bottom-only gradient */}
          <article className="relative isolate overflow-hidden rounded-sm lg:col-span-2">
            <img
              src={admitted}
              alt="A student holding an admission letter outside a Kerala college"
              width={1200}
              height={900}
              loading="lazy"
              className="h-[360px] w-full object-cover object-[center_30%] sm:h-[460px]"
            />
            <div className="photo-scrim-bottom absolute inset-0" />
            <div className="absolute inset-x-0 bottom-0 flex flex-wrap items-end justify-between gap-6 p-6 sm:p-10">
              <div className="max-w-xl">
                <span className="font-display text-sm font-extrabold tracking-[0.2em] text-gold">
                  04
                </span>
                <h3 className="mt-2 text-2xl text-offwhite sm:text-3xl">You get admitted</h3>
                <p className="mt-2 text-sm leading-relaxed text-offwhite/85">
                  We stay on it through fee remittance and joining formalities. Nothing is
                  handed back to you half-finished.
                </p>
              </div>
              <Link
                to="/book-consultation"
                className="inline-flex items-center rounded-full bg-offwhite px-6 py-3 text-sm font-bold text-brown"
              >
                Begin step one
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
