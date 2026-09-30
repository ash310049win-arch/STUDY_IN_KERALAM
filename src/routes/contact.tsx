import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { sendContact } from "@/server-fns/mail";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | Study in Keralam — Quilon Educational Consultancy" },
      {
        name: "description",
        content:
          "Get in touch with Quilon Educational Consultancy. Free consultation for Kerala college admissions — call, email, or visit our branches in Kottarakara, Kollam, Trivandrum or Adimali.",
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const { error } = await sendContact({ data: formData });

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
      <main id="main" className="pt-28 pb-20 sm:pt-36 sm:pb-28">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
          {/* Header */}
          <div className="max-w-2xl">
            <span className="eyebrow flex items-center gap-3 text-ochre">
              <span className="gold-rule" />
              Get in touch
            </span>
            <h1 className="mt-6 text-[clamp(2.6rem,5vw,4.4rem)]">
              Talk to an <em className="font-light italic text-ochre">advisor.</em>
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Free consultation — no obligation, no fee until you decide to go ahead. We'll tell you
              exactly where you stand and what happens next.
            </p>
          </div>

          <div className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
            {/* Form */}
            <div>
              {submitted ? (
                <div className="rounded-[2rem] bg-offwhite p-10 text-center">
                  <p className="font-mal text-2xl text-ochre">നന്ദി</p>
                  <p className="mt-4 font-display text-3xl text-brown">Message sent.</p>
                  <p className="mt-3 text-sm text-muted-foreground">
                    We'll get back to you within one working day. You can also call us at{" "}
                    <a
                      href="tel:+919497771392"
                      className="font-semibold text-brown hover:text-gold"
                    >
                      9497 771 392
                    </a>
                    .
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="btn mt-6 border border-hairline text-brown hover:bg-paper-deep"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="rounded-[2rem] bg-offwhite p-6 shadow-[0_30px_60px_-40px_oklch(0.3_0.042_52/0.45)] sm:p-10"
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-2 block text-sm font-semibold text-brown">
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
                        className="w-full rounded-xl border border-hairline bg-paper/60 px-4 py-3.5 text-[0.95rem] text-brown outline-none transition-[border-color,background-color,box-shadow] placeholder:text-muted-foreground/60 hover:border-brown/30 focus:border-brown focus:bg-offwhite focus:ring-4 focus:ring-gold/25"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-semibold text-brown"
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
                        className="w-full rounded-xl border border-hairline bg-paper/60 px-4 py-3.5 text-[0.95rem] text-brown outline-none transition-[border-color,background-color,box-shadow] placeholder:text-muted-foreground/60 hover:border-brown/30 focus:border-brown focus:bg-offwhite focus:ring-4 focus:ring-gold/25"
                      />
                    </div>
                  </div>
                  <div className="mt-5">
                    <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-brown">
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Optional"
                      className="w-full rounded-xl border border-hairline bg-paper/60 px-4 py-3.5 text-[0.95rem] text-brown outline-none transition-[border-color,background-color,box-shadow] placeholder:text-muted-foreground/60 hover:border-brown/30 focus:border-brown focus:bg-offwhite focus:ring-4 focus:ring-gold/25"
                    />
                  </div>
                  <div className="mt-5">
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-semibold text-brown"
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
                      className="w-full resize-none rounded-xl border border-hairline bg-ivory px-4 py-3 text-sm text-brown outline-none transition-colors focus:border-gold focus:ring-1 focus:ring-gold/30"
                    />
                  </div>

                  {error && (
                    <div
                      role="alert"
                      className="mt-4 rounded-xl border border-laterite/30 bg-laterite/5 px-4 py-3 text-sm text-laterite"
                    >
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn btn-primary mt-8 disabled:pointer-events-none disabled:opacity-60"
                  >
                    {loading ? "Sending..." : "Send enquiry"}
                  </button>
                </form>
              )}

              {/* Map */}
              <div className="mt-8 overflow-hidden rounded-[1.5rem] border border-hairline">
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
            <div className="space-y-10 lg:pl-8">
              <div>
                <p className="text-xs text-muted-foreground">Call the office</p>
                <a
                  href="tel:+919497771392"
                  className="tnum mt-2 block font-display text-4xl text-brown transition-colors hover:text-ochre"
                >
                  9497 771 392
                </a>
                <a
                  href="tel:+919207774401"
                  className="tnum mt-1 block font-display text-4xl text-brown transition-colors hover:text-ochre"
                >
                  9207 774 401
                </a>
                <p className="mt-6 text-xs text-muted-foreground">Email</p>
                <a
                  href="mailto:info@quilonconsultancy.com"
                  className="link-underline mt-2 inline-block text-base text-brown"
                >
                  info@quilonconsultancy.com
                </a>
              </div>

              <div className="border-t border-hairline pt-8">
                <h2 className="text-2xl">Visit us</h2>
                <ul className="mt-5 space-y-5 text-sm">
                  {[
                    { name: "Head office", address: "Ambalakara, Kottarakara" },
                    {
                      name: "Kottarakara",
                      address: "Opposite Swayamwara Skills, Pulamon P.O, Kottarakara (Kollam)",
                    },
                    {
                      name: "Kollam",
                      address: "Kollam, Kerala",
                    },
                    {
                      name: "Trivandrum",
                      address:
                        "Near Ameya Collections, Vanross Road, Oottukuzhy Jn, Trivandrum, Kerala 695001",
                    },
                    {
                      name: "Adimali",
                      address: "Adimali, Idukki",
                    },
                  ].map((b) => (
                    <li key={b.name} className="grid grid-cols-[7rem_1fr] gap-4">
                      <p className="font-semibold text-brown">{b.name}</p>
                      <p className="leading-relaxed">{b.address}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-hairline pt-8 text-sm">
                <h2 className="text-2xl">Hours</h2>
                <p className="mt-4 text-brown">Monday – Saturday, 9:30 am – 6:30 pm</p>
                <p className="mt-1">Closed on Sundays and public holidays</p>
              </div>

              {/* Back to home */}
              <Link to="/" className="link-underline inline-block text-sm font-semibold text-brown">
                ← Back to home
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
