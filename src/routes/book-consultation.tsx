import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { sendConsultation } from "@/server-fns/mail";
import bgImg from "@/assets/hero-consultation.jpg";

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

const institutionTypes = [
  "Government",
  "Aided",
  "Private",
  "Autonomous",
  "No preference",
];

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
      ? new URLSearchParams(window.location.search).get("district") ?? ""
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
    setSelectedDistricts((prev) =>
      prev.includes(d) ? prev.filter((x) => x !== d) : [...prev, d],
    );
  };

  const toggleField = (f: string) => {
    setSelectedFields((prev) =>
      prev.includes(f) ? prev.filter((x) => x !== f) : [...prev, f],
    );
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
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
      setError(
        err instanceof Error
          ? err.message
          : "Failed to send. Please try again or call us.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-ivory">
      <Nav />
      <main className="relative min-h-screen pt-24 pb-20 sm:pt-32 sm:pb-28">
        {/* Background */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={bgImg}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover object-center"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, oklch(0.32 0.045 55 / 0.85) 0%, oklch(0.32 0.045 55 / 0.4) 50%, oklch(0.32 0.045 55 / 0.1) 100%)",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-5 sm:px-8">
          {/* Header */}
          <div className="mb-10 text-center">
            <span className="eyebrow inline-flex items-center gap-3 text-gold">
              <span className="gold-rule" />
              Free consultation
              <span className="gold-rule" />
            </span>
            <h1 className="mt-5 text-[clamp(2rem,4.5vw,3.5rem)] text-ivory">
              Book your consultation.
            </h1>
            <p
              className="mt-4 text-sm leading-relaxed sm:text-base"
              style={{ color: "oklch(0.965 0.012 85 / 0.75)" }}
            >
              Tell us about yourself — we'll match you to the right colleges and
              handle the application from there.
            </p>
          </div>

          {/* Form card */}
          <div
            className="rounded-2xl p-6 sm:p-10"
            style={{
              backgroundColor: "oklch(0.985 0.005 85 / 0.95)",
              backdropFilter: "blur(12px)",
              border: "1px solid oklch(0.18 0.008 60 / 0.08)",
            }}
          >
            {submitted ? (
              <div className="py-12 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-kerala/10">
                  <span className="text-2xl text-kerala">&#10003;</span>
                </div>
                <h2 className="mt-6 font-display text-2xl font-extrabold text-brown">
                  Request received
                </h2>
                <p className="mt-3 max-w-md mx-auto text-sm leading-relaxed text-muted-foreground">
                  We'll get back to you within one working day. Check your
                  email for a confirmation, or call us directly at{" "}
                  <a href="tel:+919497771392" className="font-semibold text-brown hover:text-gold">
                    9497 771 392
                  </a>
                  .
                </p>
                <Link
                  to="/"
                  className="mt-8 inline-flex items-center rounded-full bg-brown px-7 py-3 text-sm font-bold text-offwhite transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink"
                >
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
                        <option key={l} value={l}>{l}</option>
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
                  <label className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground">
                    Which district(s) are you interested in?
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {districts.map((d) => {
                      const active = selectedDistricts.includes(d);
                      return (
                        <button
                          key={d}
                          type="button"
                          onClick={() => toggleDistrict(d)}
                          className={`rounded-full px-3.5 py-1.5 text-xs font-bold transition-all duration-200 ${
                            active
                              ? "bg-gold text-ink"
                              : "border border-hairline text-muted-foreground hover:border-gold hover:text-brown"
                          }`}
                        >
                          {d}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Fields multi-select */}
                <div className="mt-6">
                  <label className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground">
                    Field of study / course interest
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {fields.map((f) => {
                      const active = selectedFields.includes(f);
                      return (
                        <button
                          key={f}
                          type="button"
                          onClick={() => toggleField(f)}
                          className={`rounded-full px-3.5 py-1.5 text-xs font-bold transition-all duration-200 ${
                            active
                              ? "bg-kerala text-offwhite"
                              : "border border-hairline text-muted-foreground hover:border-kerala hover:text-kerala"
                          }`}
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
                        <option key={t} value={t}>{t}</option>
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
                  <div className="mt-5 rounded-lg border border-laterite/30 bg-laterite/5 px-4 py-3 text-sm text-laterite">
                    {error}
                  </div>
                )}

                {/* Submit */}
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center rounded-full bg-gold px-8 py-3.5 text-sm font-bold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-60 disabled:hover:translate-y-0"
                  >
                    {loading ? "Sending..." : "Book my consultation"}
                  </button>
                  <p
                    className="text-xs"
                    style={{ color: "oklch(0.46 0.012 70 / 0.7)" }}
                  >
                    Free — no obligation until you decide to go ahead.
                  </p>
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
  "w-full rounded-lg border border-hairline bg-white px-4 py-3 text-sm text-brown outline-none transition-colors focus:border-gold focus:ring-1 focus:ring-gold/30";

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
      <label className="mb-1.5 block text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground">
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
    <div className="flex items-center justify-between rounded-lg border border-hairline bg-white px-4 py-3">
      <label htmlFor={name} className="text-sm font-semibold text-brown">
        {label}
      </label>
      <button
        id={name}
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full transition-colors duration-200 ${
          checked ? "bg-kerala" : "bg-hairline"
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
