import { createFileRoute } from "@tanstack/react-router";

import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { WhyUs } from "@/components/site/WhyUs";
import { Process } from "@/components/site/Process";
import { DistrictMap } from "@/components/site/DistrictMap";
import { Proof } from "@/components/site/Proof";
import { FinalCta } from "@/components/site/FinalCta";
import { Footer } from "@/components/site/Footer";

const title = "Study in Kerala | Quilon Educational Consultancy";
const description =
  "Kerala college admissions handled with you: entrance exam guidance, seat matching, document checks and deadline tracking from Quilon Educational Consultancy, Kollam.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-ivory">
      <Nav />
      <main>
        <Hero />
        <WhyUs />
        <Process />
        <DistrictMap />
        <Proof />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
