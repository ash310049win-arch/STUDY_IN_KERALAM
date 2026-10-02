import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Study in Keralam — Quilon Educational Consultancy" },
      {
        name: "description",
        content:
          "Privacy Policy for Quilon Educational Consultancy. Learn how we collect, use, and protect your information when you use our Site and services.",
      },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
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
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Last updated: August 21, 2026
          </p>

          <div className="mt-10 space-y-10 text-sm leading-relaxed text-muted-foreground">
            <p>
              Quilon Educational Consultancy (&quot;we,&quot; &quot;us,&quot; &quot;our&quot;) operates
              quilonconsultancy.in and quilonconsultancy.com (the &quot;Site&quot;). This
              Privacy Policy explains how we collect, use, and protect
              information when you use our Site and services.
            </p>

            {/* 1 */}
            <section>
              <h2 className="mb-3 font-display text-lg font-extrabold text-brown">
                1. Information We Collect
              </h2>
              <p className="mb-3">
                We collect information you provide directly to us, including:
              </p>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  <strong className="text-brown">Contact form submissions:</strong>{" "}
                  name, email, phone number, and message content
                </li>
                <li>
                  <strong className="text-brown">
                    Free Consultation booking form:
                  </strong>{" "}
                  name, phone, email, current study level, address, destination
                  country/countries of interest, field(s) of study, and
                  preferences regarding education loan and coaching services
                </li>
                <li>
                  <strong className="text-brown">Career Matcher tool:</strong>{" "}
                  subjects/interests, academic stream, target destinations,
                  budget range, timeline, and test readiness
                </li>
              </ul>
              <p className="mt-3">
                We do not knowingly collect sensitive personal information such
                as government ID numbers, financial account details, or health
                information through the Site.
              </p>
            </section>

            {/* 2 */}
            <section>
              <h2 className="mb-3 font-display text-lg font-extrabold text-brown">
                2. How We Use Your Information
              </h2>
              <p className="mb-3">
                We use the information you provide to:
              </p>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  Respond to your enquiries and provide consultation services
                </li>
                <li>
                  Match you with relevant destinations, universities, and courses
                  through our Career Matcher tool
                </li>
                <li>
                  Contact you regarding admissions, visa, test preparation, and
                  scholarship guidance you&apos;ve requested
                </li>
                <li>Improve our services and Site experience</li>
              </ul>
            </section>

            {/* 3 */}
            <section>
              <h2 className="mb-3 font-display text-lg font-extrabold text-brown">
                3. How We Share Your Information
              </h2>
              <p className="mb-3">
                We do not sell your personal information. We may share your
                information with:
              </p>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  Partner universities or institutions, only where relevant to an
                  application you are pursuing through us, and only with your
                  knowledge
                </li>
                <li>
                  Service providers who help us operate the Site (e.g. email
                  delivery services), under obligations to protect your data
                </li>
                <li>Legal authorities, if required by law</li>
              </ul>
            </section>

            {/* 4 */}
            <section>
              <h2 className="mb-3 font-display text-lg font-extrabold text-brown">
                4. Cookies
              </h2>
              <p>
                Our Site may use cookies and similar technologies (including
                analytics tools such as Google Analytics and the Meta Pixel) to
                understand how visitors use the Site and to measure the
                effectiveness of our services and any advertising. You can
                control cookies through your browser settings.
              </p>
            </section>

            {/* 5 */}
            <section>
              <h2 className="mb-3 font-display text-lg font-extrabold text-brown">
                5. Data Retention
              </h2>
              <p>
                We retain your information for as long as necessary to provide
                our services and respond to your enquiries, or as required by
                law.
              </p>
            </section>

            {/* 6 */}
            <section>
              <h2 className="mb-3 font-display text-lg font-extrabold text-brown">
                6. Your Rights
              </h2>
              <p className="mb-3">
                You may contact us at any time to:
              </p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Ask what information we hold about you</li>
                <li>Request corrections to inaccurate information</li>
                <li>
                  Request deletion of your information, subject to any legal or
                  legitimate business requirements to retain it
                </li>
              </ul>
            </section>

            {/* 7 */}
            <section>
              <h2 className="mb-3 font-display text-lg font-extrabold text-brown">
                7. Data Security
              </h2>
              <p>
                We take reasonable measures to protect your information from
                unauthorized access, loss, or misuse. However, no method of
                transmission over the internet is completely secure, and we
                cannot guarantee absolute security.
              </p>
            </section>

            {/* 8 */}
            <section>
              <h2 className="mb-3 font-display text-lg font-extrabold text-brown">
                8. Children&apos;s Privacy
              </h2>
              <p>
                Our services are intended for prospective students generally aged
                16 and above. If you believe a minor has provided us with personal
                information without appropriate consent, please contact us and we
                will take steps to remove it.
              </p>
            </section>

            {/* 9 */}
            <section>
              <h2 className="mb-3 font-display text-lg font-extrabold text-brown">
                9. Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. Changes
                will be posted on this page with an updated &quot;Last updated&quot; date.
              </p>
            </section>

            {/* 10 */}
            <section>
              <h2 className="mb-3 font-display text-lg font-extrabold text-brown">
                10. Contact Us
              </h2>
              <p>
                If you have questions about this Privacy Policy or how your
                information is handled, contact us at:
              </p>
              <div className="mt-4 rounded-lg border border-hairline bg-offwhite p-5">
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
