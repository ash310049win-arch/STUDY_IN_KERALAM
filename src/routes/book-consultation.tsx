import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { sendConsultation } from "@/server-fns/mail";
import bgImg from "@/assets/final-cta.jpg";

const districts = [
  "Thiruvananthapuram",
  "Kollam",
  "Pathanamthitta",
  "Alappuzha",
  "Kottayam",
  "Idukki",
  "Ernakulam",
  "Thrissur",
  "Palakkad",
  "Malappuram",
  "Kozhikode",
  "Wayanad",
  "Kannur",
  "Kasaragod",
];

const fields = [
  "Engineering",
  "Medicine",
  "Nursing",
  "Law",
  "Arts & Science",
  "Commerce",
  "Design",
  "Tourism",
  "Education / B.Ed",
  "Paramedical",
  "Agriculture",
];

const studyLevels = [
  "10th grade",
  "12th grade",
  "Diploma",
  "Bachelor's",
  "Master's",
  "Working professional exploring further study",
];

const institutionTypes = ["Government", "Aided", "Private", "Autonomous", "No preference"];

export const Route = createFileRoute("/book-consultation")({
  head: () => ({
    meta: [
      {
        title: "Book a Consultation | Study in Keralam — Quilon Educational Consultancy",
      },
      {
        name: "description",
        content:
          "Book a free consultation with Quilon Educational Consultancy. Get personalised guidance on Kerala college admissions, entrance exams, and course selection.",
      },
    ],
  }),
  component: BookConsultationPage,
});

function BookConsultationPage() {
  const prefillDistrict =
    typeof window !== "undefined"
      ? (new URLSearchParams(window.location.search).get("district") ?? "")
      : "";
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedDistricts, setSelectedDistricts] = useState<string[]>(
    prefillDistrict ? [prefillDistrict] : [],
  );
  const [selectedFields, setSelectedFields] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    studyLevel: "",
    location: "",
    institutionType: "",
    entranceCoaching: false,
    hostelGuidance: false,
  });

  const toggleDistrict = (d: string) => {
    setSelectedDistricts((prev) => (prev.includes(d) ? prev.filter((x) => x !== d) : [...prev, d]));
  };

  const toggleField = (f: string) => {
    setSelectedFields((prev) => (prev.includes(f) ? prev.filter((x) => x !== f) : [...prev, f]));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const { error } = await sendConsultation({
        data: {
          ...formData,
          districts: selectedDistricts,
          fields: selectedFields,
        },
      });

      if (error) {
        throw new Error(error.message || "Something went wrong.");
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send. Please try again or call us.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-ivory">
      <Nav />
      <main id="main" className="pb-24 pt-28 sm:pb-32 sm:pt-36">
        <div className="mx-auto grid max-w-[1320px] gap-14 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow flex items-center gap-3 text-ochre">
              <span className="gold-rule" />
              Free consultation
            </p>
            <h1 className="mt-6 text-[clamp(2.6rem,5vw,4.4rem)]">
              Tell us where you are.{" "}
              <em className="font-light italic text-ochre">We'll map the rest.</em>
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed">
              A few details help us come prepared — which colleges fit your marks, what the fees
              look like and which deadlines are closest.
            </p>
            <img
              src={bgImg}
              alt="A student on a call with an advisor, taking notes at her desk"
              width={1920}
              height={1280}
              className="mt-10 hidden aspect-[4/3] w-full rounded-[1.5rem] rounded-tr-[5rem] object-cover lg:block"
            />
            <ol className="mt-10 space-y-4 border-t border-hairline pt-8 text-sm">
              {[
                "We call you back within one working day.",
                "A 30–45 minute sit-down, in person or on a call.",
                "You leave with a shortlist and a deadline plan. No fee until you decide.",
              ].map((t, i) => (
                <li key={t} className="grid grid-cols-[2rem_1fr]">
                  <span className="font-display italic text-ochre">{i + 1}.</span>
                  <span>{t}</span>
                </li>
              ))}
            </ol>
          </aside>

          <div className="rounded-[2rem] bg-offwhite p-6 shadow-[0_30px_60px_-40px_oklch(0.3_0.042_52/0.45)] sm:p-10">
            {submitted ? (
              <div className="py-12 text-center">
                <p className="font-mal text-2xl text-ochre">നന്ദി</p>
                <h2 className="mt-4 text-4xl">Request received.</h2>
                <p className="mt-3 max-w-md mx-auto text-sm leading-relaxed text-muted-foreground">
                  We'll get back to you within one working day. Check your email for a confirmation,
                  or call us directly at{" "}
                  <a href="tel:+919497771392" className="font-semibold text-brown hover:text-gold">
                    9497 771 392
                  </a>
                  .
                </p>
                <Link to="/" className="btn btn-primary mt-8">
                  Back to home
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {/* Row: Name + Phone */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Name" required>
                    <input
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className={inputClass}
                    />
                  </Field>
                  <Field label="Phone" required>
                    <input
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Mobile number"
                      className={inputClass}
                    />
                  </Field>
                </div>

                {/* Row: Email */}
                <div className="mt-5">
                  <Field label="Email" required>
                    <input
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className={inputClass}
                    />
                  </Field>
                </div>

                {/* Row: Study level + Location */}
                <div className="mt-5 grid gap-5 sm:grid-cols-2">
                  <Field label="Current study level">
                    <select
                      name="studyLevel"
                      value={formData.studyLevel}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="">Select...</option>
                      {studyLevels.map((l) => (
                        <option key={l} value={l}>
                          {l}
                        </option>
                      ))}
                    </select>
                  </Field>
                  <Field label="Where do you live">
                    <input
                      name="location"
                      type="text"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="City or town"
                      className={inputClass}
                    />
                  </Field>
                </div>

                {/* Districts multi-select */}
                <div className="mt-6">
                  <p className="mb-3 block text-sm font-semibold text-brown">
                    Which district(s) are you interested in?
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {districts.map((d) => {
                      const active = selectedDistricts.includes(d);
                      return (
                        <button
                          key={d}
                          type="button"
                          onClick={() => toggleDistrict(d)}
                          aria-pressed={active}
                          className={`${chipClass} ${active ? chipOn : chipOff}`}
                        >
                          {d}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Fields multi-select */}
                <div className="mt-6">
                  <p className="mb-3 block text-sm font-semibold text-brown">
                    Field of study / course interest
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {fields.map((f) => {
                      const active = selectedFields.includes(f);
                      return (
                        <button
                          key={f}
                          type="button"
                          onClick={() => toggleField(f)}
                          aria-pressed={active}
                          className={`${chipClass} ${active ? chipOn : chipOff}`}
                        >
                          {f}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Institution type */}
                <div className="mt-6">
                  <Field label="Preferred institution type">
                    <select
                      name="institutionType"
                      value={formData.institutionType}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="">No preference</option>
                      {institutionTypes.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </Field>
                </div>

                {/* Toggles */}
                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                  <ToggleField
                    label="Interested in entrance exam coaching support?"
                    name="entranceCoaching"
                    checked={formData.entranceCoaching}
                    onChange={(v) =>
                      setFormData((prev) => ({
                        ...prev,
                        entranceCoaching: v,
                      }))
                    }
                  />
                  <ToggleField
                    label="Need hostel / accommodation guidance?"
                    name="hostelGuidance"
                    checked={formData.hostelGuidance}
                    onChange={(v) =>
                      setFormData((prev) => ({
                        ...prev,
                        hostelGuidance: v,
                      }))
                    }
                  />
                </div>

                {/* Error */}
                {error && (
                  <div
                    role="alert"
                    className="mt-6 rounded-xl border border-laterite/30 bg-laterite/5 px-4 py-3 text-sm text-laterite"
                  >
                    {error}
                  </div>
                )}

                {/* Submit */}
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn btn-primary disabled:pointer-events-none disabled:opacity-60"
                  >
                    {loading ? "Sending..." : "Book my consultation"}
                  </button>
                  <p className="text-xs">Free — no obligation until you decide to go ahead.</p>
                </div>
              </form>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

/* ─── helpers ─── */

const inputClass =
  "w-full rounded-xl border border-hairline bg-paper/60 px-4 py-3.5 text-[0.95rem] text-brown outline-none transition-[border-color,background-color,box-shadow] placeholder:text-muted-foreground/60 hover:border-brown/30 focus:border-brown focus:bg-offwhite focus:ring-4 focus:ring-gold/25";

const chipClass =
  "rounded-full border px-4 py-2 text-sm font-medium transition-[background-color,border-color,color] duration-200 active:scale-[0.97]";
const chipOn = "border-brown bg-brown text-offwhite";
const chipOff = "border-hairline text-brown/80 hover:border-brown/40 hover:text-brown";

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-brown">
        {label}
        {required && <span className="ml-0.5 text-laterite">*</span>}
      </label>
      {children}
    </div>
  );
}

function ToggleField({
  label,
  name,
  checked,
  onChange,
}: {
  label: string;
  name: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-xl border border-hairline bg-paper/60 px-4 py-3.5">
      <label htmlFor={name} className="text-sm text-brown">
        {label}
      </label>
      <button
        id={name}
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full transition-colors duration-200 ${
          checked ? "bg-brown" : "bg-brown/20"
        }`}
      >
        <span
          className={`inline-block h-5 w-5 translate-y-0.5 rounded-full bg-white shadow-sm transition-transform duration-200 ${
            checked ? "translate-x-5.5" : "translate-x-0.5"
          }`}
        />
      </button>
    </div>
  );
}
