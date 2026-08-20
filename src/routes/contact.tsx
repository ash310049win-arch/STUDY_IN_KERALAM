import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | Study in Keralam — Quilon Educational Consultancy" },
      {
        name: "description",
        content:
          "Get in touch with Quilon Educational Consultancy. Free consultation for Kerala college admissions — call, email, or visit our branches in Kottarakara or Trivandrum.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/send-contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || data.error) {
        throw new Error(data.error || "Something went wrong.");
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
      <main className="pt-28 pb-20 sm:pt-36 sm:pb-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          {/* Header */}
          <div className="max-w-2xl">
            <span className="eyebrow flex items-center gap-3 text-kerala">
              <span className="gold-rule" />
              Get in touch
            </span>
            <h1 className="mt-5 text-[clamp(2rem,4vw,3.4rem)] text-brown">
              Talk to an advisor.
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Free consultation — no obligation, no fee until you decide to go
              ahead. We'll tell you exactly where you stand and what happens
              next.
            </p>
          </div>

          <div className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
            {/* Form */}
            <div>
              {submitted ? (
                <div className="rounded-2xl border border-kerala/30 bg-kerala/5 p-10 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-kerala/10">
                    <span className="text-2xl text-kerala">&#10003;</span>
                  </div>
                  <p className="mt-5 font-display text-xl font-extrabold text-brown">
                    Message sent
                  </p>
                  <p className="mt-3 text-sm text-muted-foreground">
                    We'll get back to you within one working day. You can also
                    call us at{" "}
                    <a href="tel:+919497771392" className="font-semibold text-brown hover:text-gold">
                      9497 771 392
                    </a>
                    .
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-6 rounded-full border border-hairline px-6 py-2.5 text-sm font-bold text-brown transition-colors hover:border-gold hover:text-gold"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="rounded-2xl border border-hairline bg-offwhite p-8 sm:p-10"
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-1.5 block text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="w-full rounded-lg border border-hairline bg-ivory px-4 py-3 text-sm text-brown outline-none transition-colors focus:border-gold focus:ring-1 focus:ring-gold/30"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-1.5 block text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="w-full rounded-lg border border-hairline bg-ivory px-4 py-3 text-sm text-brown outline-none transition-colors focus:border-gold focus:ring-1 focus:ring-gold/30"
                      />
                    </div>
                  </div>
                  <div className="mt-5">
                    <label
                      htmlFor="phone"
                      className="mb-1.5 block text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground"
                    >
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Optional"
                      className="w-full rounded-lg border border-hairline bg-ivory px-4 py-3 text-sm text-brown outline-none transition-colors focus:border-gold focus:ring-1 focus:ring-gold/30"
                    />
                  </div>
                  <div className="mt-5">
                    <label
                      htmlFor="message"
                      className="mb-1.5 block text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us which district, course, or exam you need help with..."
                      className="w-full resize-none rounded-lg border border-hairline bg-ivory px-4 py-3 text-sm text-brown outline-none transition-colors focus:border-gold focus:ring-1 focus:ring-gold/30"
                    />
                  </div>

                  {error && (
                    <div className="mt-4 rounded-lg border border-laterite/30 bg-laterite/5 px-4 py-3 text-sm text-laterite">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="mt-6 inline-flex items-center rounded-full bg-gold px-8 py-3.5 text-sm font-bold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-60 disabled:hover:translate-y-0"
                  >
                    {loading ? "Sending..." : "Send enquiry"}
                  </button>
                </form>
              )}

              {/* Map */}
              <div className="mt-8 overflow-hidden rounded-2xl border border-hairline">
                <iframe
                  title="Quilon Educational Consultancy — Trivandrum Branch"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.7!2d76.955!3d8.488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMjknMTYuOCJOIDc2wrA1NzE4LjAiRQ!5e0!3m2!1sen!2sin!4v1700000000000"
                  width="100%"
                  height="340"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                />
              </div>
            </div>

            {/* Contact details sidebar */}
            <div className="space-y-8">
              {/* Quick contact */}
              <div className="rounded-2xl border border-hairline bg-offwhite p-8">
                <h2 className="font-display text-lg font-extrabold text-brown">
                  Quilon Educational Consultancy
                </h2>
                <p className="mt-1 text-xs text-muted-foreground">
                  H.O: Ambalakara, Kottarakara
                </p>

                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold/10 text-sm font-bold text-gold">
                      ph
                    </span>
                    <div>
                      <a
                        href="tel:+919497771392"
                        className="block text-sm font-semibold text-brown hover:text-gold"
                      >
                        9497 771 392
                      </a>
                      <a
                        href="tel:+919207774402"
                        className="block text-sm font-semibold text-brown hover:text-gold"
                      >
                        9207 774 402
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-kerala/10 text-sm font-bold text-kerala">
                      @
                    </span>
                    <a
                      href="mailto:info@quilonconsultancy.com"
                      className="text-sm font-semibold text-brown hover:text-kerala"
                    >
                      info@quilonconsultancy.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Branches */}
              <div className="rounded-2xl border border-hairline bg-offwhite p-8">
                <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
                  Branches
                </h3>
                <ul className="mt-5 space-y-5">
                  {[
                    {
                      name: "Kottarakara",
                      address:
                        "Opposite Swayamwara Skills, Pulamon P.O, Kottarakara (Kollam)",
                    },
                    {
                      name: "Trivandrum",
                      address:
                        "Near Ameya Collections, Vanross Road, Oottukuzhy Jn, Trivandrum, Kerala - 695001",
                    },
                  ].map((b) => (
                    <li key={b.name}>
                      <p className="text-sm font-bold text-brown">{b.name}</p>
                      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                        {b.address}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hours */}
              <div className="rounded-2xl border border-hairline bg-offwhite p-8">
                <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
                  Working hours
                </h3>
                <p className="mt-4 text-sm text-brown">
                  Monday – Saturday
                </p>
                <p className="text-sm text-muted-foreground">
                  9:30 AM – 6:30 PM
                </p>
                <p className="mt-3 text-xs text-muted-foreground">
                  Closed on Sundays and public holidays
                </p>
              </div>

              {/* Back to home */}
              <Link
                to="/"
                className="inline-flex items-center gap-2 rounded-full border border-hairline px-6 py-3 text-sm font-bold text-brown transition-all duration-300 hover:border-gold hover:text-gold"
              >
                &larr; Back to home
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
