import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/refund")({
  head: () => ({
    meta: [
      { title: "Refund Policy | Study in Keralam — Quilon Educational Consultancy" },
      {
        name: "description",
        content:
          "Refund policy for consultation and service fees paid to Quilon Educational Consultancy.",
      },
    ],
  }),
  component: RefundPage,
});

function RefundPage() {
  return (
    <div className="min-h-screen bg-ivory">
      <Nav />
      <main className="pt-28 pb-20 sm:pt-36 sm:pb-28">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <span className="eyebrow flex items-center gap-3 text-kerala">
            <span className="gold-rule" />
            Legal
          </span>
          <h1 className="mt-5 text-[clamp(2rem,4vw,3.4rem)] text-brown">
            Refund Policy
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Last updated: August 21, 2026
          </p>

          <div className="mt-10 space-y-10 text-sm leading-relaxed text-muted-foreground">
            <p>
              This Refund Policy applies to consultation and service fees paid
              to Quilon Educational Consultancy.
            </p>

            {/* 1 */}
            <section>
              <h2 className="mb-3 font-display text-lg font-extrabold text-brown">
                1. Free Consultation
              </h2>
              <p>
                Our initial consultation, booked through the &quot;Book a Free
                Consultation&quot; form on our Site, is provided free of charge
                and is not subject to this Refund Policy.
              </p>
            </section>

            {/* 2 */}
            <section>
              <h2 className="mb-3 font-display text-lg font-extrabold text-brown">
                2. Service Fees
              </h2>
              <p>
                Where you engage Quilon Educational Consultancy for paid
                services (such as application processing, visa preparation
                support, or test preparation coaching), specific fee and refund
                terms for that service will be communicated to you in writing
                (via invoice, service agreement, or email) at the time of
                engagement.
              </p>
            </section>

            {/* 3 */}
            <section>
              <h2 className="mb-3 font-display text-lg font-extrabold text-brown">
                3. General Refund Principles
              </h2>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  Refund eligibility and amounts depend on the stage of service
                  delivery at the time of a refund request (e.g. before any
                  application has been submitted vs. after applications are
                  underway)
                </li>
                <li>
                  Fees already paid to third parties on your behalf (such as
                  university application fees or visa processing fees) are
                  generally non-refundable once paid, as these are governed by
                  the third party&apos;s own policies, not ours
                </li>
                <li>
                  Refund requests should be submitted in writing to{" "}
                  <a
                    href="mailto:info@quilonconsultancy.com"
                    className="font-semibold text-kerala hover:text-gold"
                  >
                    info@quilonconsultancy.com
                  </a>
                  , along with the reason for the request
                </li>
              </ul>
            </section>

            {/* 4 */}
            <section>
              <h2 className="mb-3 font-display text-lg font-extrabold text-brown">
                4. Processing Time
              </h2>
              <p>
                Approved refunds, where applicable, will be processed within
                15&ndash;30 business days of approval, using the original
                payment method where possible.
              </p>
            </section>

            {/* 5 */}
            <section>
              <h2 className="mb-3 font-display text-lg font-extrabold text-brown">
                5. Non-Refundable Circumstances
              </h2>
              <p className="mb-3">
                Fees are generally non-refundable where:
              </p>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  Services have already been substantially delivered (e.g.
                  counseling sessions completed, applications submitted)
                </li>
                <li>
                  The student provided false or incomplete information that
                  affected service delivery
                </li>
                <li>
                  The student independently withdraws an application after it
                  has already been submitted to an institution
                </li>
              </ul>
            </section>

            {/* 6 */}
            <section>
              <h2 className="mb-3 font-display text-lg font-extrabold text-brown">
                6. Contact for Refund Requests
              </h2>
              <p>
                For any refund-related questions or requests, please contact:
              </p>
              <div className="mt-4 rounded-lg border border-hairline bg-offwhite p-5">
                <p className="font-bold text-brown">
                  Quilon Educational Consultancy
                </p>
                <p className="mt-1">
                  Email:{" "}
                  <a
                    href="mailto:info@quilonconsultancy.com"
                    className="font-semibold text-kerala hover:text-gold"
                  >
                    info@quilonconsultancy.com
                  </a>
                </p>
                <p>
                  Phone:{" "}
                  <a
                    href="tel:+919497771392"
                    className="font-semibold text-kerala hover:text-gold"
                  >
                    +91 94977 71392
                  </a>{" "}
                  /{" "}
                  <a
                    href="tel:+919207774401"
                    className="font-semibold text-kerala hover:text-gold"
                  >
                    +91 92077 74401
                  </a>
                </p>
              </div>
            </section>

            <div className="rounded-lg border border-gold/30 bg-gold/5 p-5 text-xs text-muted-foreground">
              <strong className="text-brown">Note:</strong> Since specific
              service fee structures aren&apos;t published on the Site, this policy
              is written at a general level. Once real service packages and
              pricing are finalized, this policy should be updated with
              specific, concrete refund terms rather than general language.
            </div>
          </div>

          <div className="mt-14">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full border border-hairline px-6 py-3 text-sm font-bold text-brown transition-all duration-300 hover:border-gold hover:text-gold"
            >
              &larr; Back to home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
