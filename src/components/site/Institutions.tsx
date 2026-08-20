import engineeringImg from "@/assets/step-match.jpg";
import medicineImg from "@/assets/proof-admitted.jpg";
import lawImg from "@/assets/step-goals.jpg";
import designImg from "@/assets/group-study.jpg";
import commerceImg from "@/assets/step-application.jpg";
import nursingImg from "@/assets/cta-counter.jpg";
import artsImg from "@/assets/step-admitted.jpg";
import tourismImg from "@/assets/hero-consultation.jpg";

const categories = [
  {
    name: "Engineering",
    count: "120+ courses",
    img: engineeringImg,
    alt: "Students working in an engineering lab",
  },
  {
    name: "Medicine",
    count: "40+ institutions",
    img: medicineImg,
    alt: "Medical students on campus",
  },
  {
    name: "Law",
    count: "30+ programmes",
    img: lawImg,
    alt: "Law college campus building",
  },
  {
    name: "Design",
    count: "25+ programmes",
    img: designImg,
    alt: "Students collaborating on a design project",
  },
  {
    name: "Commerce",
    count: "90+ courses",
    img: commerceImg,
    alt: "Commerce students in a classroom",
  },
  {
    name: "Nursing",
    count: "35+ institutions",
    img: nursingImg,
    alt: "Nursing students in a training ward",
  },
  {
    name: "Arts & Science",
    count: "150+ courses",
    img: artsImg,
    alt: "Students walking across campus",
  },
  {
    name: "Tourism",
    count: "20+ programmes",
    img: tourismImg,
    alt: "Students at a Kerala tourism location",
  },
];

export function Institutions() {
  return (
    <section id="institutions" className="bg-offwhite py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <span className="eyebrow flex items-center gap-3 text-kerala">
            <span className="gold-rule" />
            Explore by field
          </span>
          <h2 className="mt-5 text-[clamp(2rem,4vw,3.4rem)] text-brown">
            Find your path.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            From medicine to design — we know every option across Kerala, and
            we'll match you to the right one.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c) => (
            <a
              key={c.name}
              href="/courses"
              className="group relative flex h-64 flex-col justify-end overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-18px_oklch(0.74_0.095_82/0.35)]"
            >
              <img
                src={c.img}
                alt={c.alt}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* bottom gradient for legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/20 to-transparent" />
              <div className="relative z-10 p-6">
                <h3 className="font-display text-xl font-extrabold text-offwhite">
                  {c.name}
                </h3>
                <p className="mt-1 text-sm font-semibold text-gold">
                  {c.count}
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a
            href="/courses"
            className="inline-flex items-center gap-2 rounded-full bg-brown px-8 py-4 text-sm font-bold text-offwhite transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink hover:shadow-lg"
          >
            Explore all courses &amp; institutions
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
