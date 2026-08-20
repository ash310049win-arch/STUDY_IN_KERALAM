import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { getDistrictBySlug } from "@/data/districts";

export const Route = createFileRoute("/districts/$slug")({
  head: ({ params }) => {
    const district = getDistrictBySlug(params.slug);
    const name = district?.name ?? "District";
    const title = `${name} — Study in Keralam | Quilon Educational Consultancy`;
    const description = `Explore ${district?.institutions ?? ""} institutions and ${district?.courseCount ?? ""} courses in ${name}, Kerala. Quilon Educational Consultancy guides your application from start to admission.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  component: DistrictPage,
  errorComponent: () => (
    <div className="flex min-h-screen items-center justify-center bg-ivory px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-display font-extrabold text-brown">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-brown">District not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          We don't have a page for that district yet.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center rounded-full bg-brown px-6 py-3 text-sm font-bold text-offwhite transition-colors hover:bg-ink"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  ),
});

function DistrictPage() {
  const { slug } = Route.useParams();
  const district = getDistrictBySlug(slug);

  if (!district) return null;

  return (
    <div className="min-h-screen bg-ivory">
      <Nav />
      <main>
        {/* Header */}
        <section className="bg-offwhite pt-32 pb-16 sm:pt-40 sm:pb-20">
          <div className="mx-auto max-w-5xl px-5 sm:px-8">
            <span className="eyebrow flex items-center gap-3 text-kerala">
              <span className="gold-rule" />
              District coverage
            </span>
            <h1 className="mt-5 text-[clamp(2.4rem,5vw,4rem)] text-brown">
              {district.name}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {district.tagline}
            </p>
          </div>
        </section>

        {/* Stats bar */}
        <section className="border-b border-hairline bg-ivory py-8">
          <div className="mx-auto max-w-5xl px-5 sm:px-8">
            <div className="grid grid-cols-2 gap-8 text-center">
              <div>
                <span className="font-display text-3xl font-extrabold text-brown sm:text-4xl">
                  {district.institutions}
                </span>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                  Institutions
                </p>
              </div>
              <div>
                <span className="font-display text-3xl font-extrabold text-gold sm:text-4xl">
                  {district.courseCount}
                </span>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                  Courses
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Course category sections */}
        {district.categories.map((cat, catIdx) => (
          <section
            key={cat.name}
            className="border-b border-hairline py-14 sm:py-20"
            style={{
              backgroundColor:
                catIdx % 2 === 0
                  ? "var(--color-ivory)"
                  : "var(--color-offwhite)",
            }}
          >
            <div className="mx-auto max-w-5xl px-5 sm:px-8">
              <div className="flex items-baseline gap-4">
                <span className="font-display text-5xl font-extrabold text-gold/25">
                  {String(catIdx + 1).padStart(2, "0")}
                </span>
                <h2 className="text-[clamp(1.5rem,3vw,2.2rem)] text-brown">
                  {cat.name}
                </h2>
              </div>

              <div className="mt-8 divide-y divide-hairline rounded-sm border border-hairline bg-offwhite">
                {cat.colleges.map((college, i) => (
                  <Link
                    key={college.name + i}
                    to="/book-consultation"
                    search={{ district: district.slug }}
                    className="flex flex-col gap-2 px-6 py-5 transition-colors hover:bg-ivory sm:flex-row sm:items-center sm:justify-between sm:gap-4"
                  >
                    <div className="min-w-0">
                      <h3 className="text-base font-bold text-brown">
                        {college.name}
                      </h3>
                      {college.note && (
                        <p className="mt-0.5 text-xs text-muted-foreground">
                          {college.note}
                        </p>
                      )}
                    </div>
                    <span
                      className="shrink-0 rounded-full px-3 py-1 text-[11px] font-bold tracking-wide"
                      style={{
                        backgroundColor:
                          college.type === "Government"
                            ? "oklch(0.42 0.075 155 / 0.1)"
                            : college.type === "Aided"
                              ? "oklch(0.74 0.095 82 / 0.1)"
                              : college.type === "Autonomous"
                                ? "oklch(0.52 0.115 42 / 0.1)"
                                : "oklch(0.18 0.008 60 / 0.06)",
                        color:
                          college.type === "Government"
                            ? "var(--kerala)"
                            : college.type === "Aided"
                              ? "var(--gold)"
                              : college.type === "Autonomous"
                                ? "var(--laterite)"
                                : "var(--brown)",
                      }}
                    >
                      {college.type}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* CTA */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-5xl px-5 sm:px-8 text-center">
            <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] text-brown">
              Get help applying in {district.name}
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-sm leading-relaxed text-muted-foreground sm:text-base">
              From document verification to deadline tracking — our advisors
              handle the entire application process for{" "}
              {district.name} students.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to="/book-consultation"
                search={{ district: district.slug }}
                className="inline-flex items-center rounded-full bg-brown px-8 py-4 text-sm font-bold text-offwhite transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink"
              >
                Talk to an advisor
              </Link>
              <Link
                to="/"
                className="inline-flex items-center rounded-full border border-hairline px-8 py-4 text-sm font-bold text-brown transition-all duration-300 hover:border-gold hover:text-gold"
              >
                Back to map
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
