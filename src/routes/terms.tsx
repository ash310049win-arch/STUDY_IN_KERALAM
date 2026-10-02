import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms and Conditions | Study in Keralam — Quilon Educational Consultancy" },
      {
        name: "description",
        content:
          "Terms and conditions for using the Quilon Educational Consultancy website and services.",
      },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
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
            Terms and Conditions
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Last updated: August 21, 2026
          </p>

          <div className="mt-10 space-y-10 text-sm leading-relaxed text-muted-foreground">
            <p>
              Welcome to Quilon Educational Consultancy. By accessing or using
              our Site or services, you agree to the following terms.
            </p>

            {/* 1 */}
            <section>
              <h2 className="mb-3 font-display text-lg font-extrabold text-brown">
                1. About Our Services
              </h2>
              <p>
                Quilon Educational Consultancy provides educational counseling,
                university/college application guidance, visa preparation
                support, test preparation guidance, scholarship guidance, and
                pre-departure support for students pursuing education within
                India and abroad.
              </p>
            </section>

            {/* 2 */}
            <section>
              <h2 className="mb-3 font-display text-lg font-extrabold text-brown">
                2. No Guarantee of Admission or Visa Approval
              </h2>
              <p>
                While we provide dedicated guidance and support throughout the
                application process,{" "}
                <strong className="text-brown">
                  we do not guarantee admission to any university, college, or
                  program, nor do we guarantee visa approval
                </strong>
                . Final decisions rest solely with the relevant educational
                institutions and government authorities.
              </p>
            </section>

            {/* 3 */}
            <section>
              <h2 className="mb-3 font-display text-lg font-extrabold text-brown">
                3. Information Accuracy
              </h2>
              <p>
                We make reasonable efforts to keep information on our Site
                (including university details, costs, visa rules, and
                post-study work policies) accurate and up to date. However,
                such information &mdash; particularly costs, visa regulations,
                and post-study work rights &mdash; is subject to change by
                third parties (universities, governments) and should be
                independently verified before making decisions. We are not
                liable for outcomes based on outdated or changed third-party
                information.
              </p>
            </section>

            {/* 4 */}
            <section>
              <h2 className="mb-3 font-display text-lg font-extrabold text-brown">
                4. Career Matcher Tool
              </h2>
              <p>
                The Career Matcher tool on our Site provides suggested
                destinations, universities, and courses based on the
                information you provide. These suggestions are intended as a
                starting point for discussion with our counselors, not as
                final or definitive recommendations, and should not be treated
                as personalized professional advice on their own.
              </p>
            </section>

            {/* 5 */}
            <section>
              <h2 className="mb-3 font-display text-lg font-extrabold text-brown">
                5. User Conduct
              </h2>
              <p className="mb-3">
                When using our Site or services, you agree not to:
              </p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Provide false or misleading information</li>
                <li>Use the Site for any unlawful purpose</li>
                <li>
                  Attempt to interfere with the Site&apos;s proper functioning
                </li>
              </ul>
            </section>

            {/* 6 */}
            <section>
              <h2 className="mb-3 font-display text-lg font-extrabold text-brown">
                6. Fees and Services
              </h2>
              <p>
                Specific service fees, if applicable, will be communicated
                directly to you by our counselors and are not published on this
                Site unless stated otherwise. Any fees paid for our services
                are subject to our separate{" "}
                <Link to="/refund" className="font-semibold text-kerala hover:text-gold">
                  Refund Policy
                </Link>
                .
              </p>
            </section>

            {/* 7 */}
            <section>
              <h2 className="mb-3 font-display text-lg font-extrabold text-brown">
                7. Intellectual Property
              </h2>
              <p>
                All content on this Site, including text, graphics, logos, and
                design elements, is the property of Quilon Educational
                Consultancy unless otherwise noted, and may not be reproduced
                without permission.
              </p>
            </section>

            {/* 8 */}
            <section>
              <h2 className="mb-3 font-display text-lg font-extrabold text-brown">
                8. Limitation of Liability
              </h2>
              <p>
                To the extent permitted by law, Quilon Educational Consultancy
                is not liable for any indirect, incidental, or consequential
                damages arising from your use of our Site or services,
                including decisions made based on information provided through
                the Site.
              </p>
            </section>

            {/* 9 */}
            <section>
              <h2 className="mb-3 font-display text-lg font-extrabold text-brown">
                9. Third-Party Links
              </h2>
              <p>
                Our Site may contain links to third-party websites (such as
                university websites or news sources on our Resources page). We
                are not responsible for the content or practices of these
                external sites.
              </p>
            </section>

            {/* 10 */}
            <section>
              <h2 className="mb-3 font-display text-lg font-extrabold text-brown">
                10. Governing Law
              </h2>
              <p>
                These Terms are governed by the laws of India, and any disputes
                shall be subject to the jurisdiction of the courts in Kollam,
                Kerala.
              </p>
            </section>

            {/* 11 */}
            <section>
              <h2 className="mb-3 font-display text-lg font-extrabold text-brown">
                11. Changes to These Terms
              </h2>
              <p>
                We may update these Terms from time to time. Continued use of
                the Site after changes are posted constitutes acceptance of the
                updated Terms.
              </p>
            </section>

            {/* 12 */}
            <section>
              <h2 className="mb-3 font-display text-lg font-extrabold text-brown">
                12. Contact Us
              </h2>
              <div className="mt-2 rounded-lg border border-hairline bg-offwhite p-5">
                <p className="font-bold text-brown">
                  Quilon Educational Consultancy
                </p>
                <p className="mt-1">
                  Opp. Swayamvara Silks, Pulamon Junction, Kottarakara, Kollam,
                  Kerala &ndash; 691531
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
