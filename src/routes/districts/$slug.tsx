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
        <p className="font-mal text-2xl text-ochre">വഴി തെറ്റി</p>
        <h1 className="mt-4 text-5xl">District not found</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          We don't have a page for that district yet.
        </p>
        <div className="mt-6">
          <Link to="/" className="btn btn-primary">
            Go home
          </Link>
        </div>
      </div>
    </div>
  ),
});

const typeTone: Record<string, string> = {
  Government: "bg-brown text-offwhite",
  Aided: "bg-gold/40 text-ink",
  Autonomous: "border border-brown/30 text-brown",
  Private: "bg-offwhite text-brown/80",
};

function DistrictPage() {
  const { slug } = Route.useParams();
  const district = getDistrictBySlug(slug);

  if (!district) return null;

  return (
    <div className="min-h-screen bg-ivory">
      <Nav />
      <main id="main">
        <section className="pb-16 pt-32 sm:pb-20 sm:pt-40">
          <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
            <Link to="/" hash="districts" className="link-underline text-sm font-medium text-brown">
              ← All districts
            </Link>
            <div className="mt-10 grid gap-10 lg:grid-cols-[1.4fr_0.6fr] lg:items-end">
              <div>
                <p className="eyebrow flex items-center gap-3 text-ochre">
                  <span className="gold-rule" />
                  District guide
                </p>
                <h1 className="mt-6 text-[clamp(3rem,7vw,6rem)]">{district.name}</h1>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed">{district.tagline}</p>
              </div>
              <dl className="grid grid-cols-2 border-t border-hairline">
                <div className="pr-4 pt-5">
                  <dt className="text-sm">Institutions</dt>
                  <dd className="tnum mt-1 font-display text-5xl text-brown">
                    {district.institutions}
                  </dd>
                </div>
                <div className="border-l border-hairline pl-6 pt-5">
                  <dt className="text-sm">Courses</dt>
                  <dd className="tnum mt-1 font-display text-5xl text-ochre">
                    {district.courseCount}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <section className="bg-paper-deep py-20 sm:py-28">
          <div className="mx-auto max-w-[1320px] space-y-20 px-5 sm:px-8">
            {district.categories.map((cat, catIdx) => (
              <div key={cat.name} className="grid gap-8 lg:grid-cols-[0.35fr_0.65fr] lg:gap-16">
                <div className="lg:sticky lg:top-28 lg:self-start">
                  <span className="font-display text-5xl font-light italic text-ochre">
                    {String(catIdx + 1).padStart(2, "0")}
                  </span>
                  <h2 className="mt-3 text-[clamp(1.8rem,3vw,2.6rem)]">{cat.name}</h2>
                  <p className="mt-2 text-sm">{cat.colleges.length} colleges listed</p>
                </div>

                <ul className="border-t border-hairline">
                  {cat.colleges.map((college, i) => (
                    <li key={college.name + i} className="border-b border-hairline">
                      <Link
                        to="/book-consultation"
                        search={{ district: district.slug }}
                        className="group flex flex-col gap-2 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
                      >
                        <span className="min-w-0">
                          <span className="block font-display text-xl text-brown transition-colors group-hover:text-ochre">
                            {college.name}
                          </span>
                          {college.note && (
                            <span className="mt-1 block text-sm">{college.note}</span>
                          )}
                        </span>
                        <span className="flex shrink-0 items-center gap-4">
                          <span
                            className={`rounded-md px-2.5 py-1 text-xs font-medium ${typeTone[college.type]}`}
                          >
                            {college.type}
                          </span>
                          <span
                            aria-hidden="true"
                            className="hidden text-brown opacity-0 transition-opacity group-hover:opacity-100 sm:inline"
                          >
                            →
                          </span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
            <h2 className="max-w-4xl text-[clamp(2.3rem,4.8vw,4.2rem)]">
              Applying in {district.name}?{" "}
              <em className="font-light italic text-ochre">We'll handle the paperwork.</em>
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed">
              From document verification to deadline tracking — our advisors handle the entire
              application process for {district.name} students.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-8">
              <Link
                to="/book-consultation"
                search={{ district: district.slug }}
                className="btn btn-primary"
              >
                Talk to an advisor
                <span aria-hidden="true">→</span>
              </Link>
              <Link
                to="/"
                hash="districts"
                className="link-underline text-sm font-semibold text-brown"
              >
                Back to the map
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
