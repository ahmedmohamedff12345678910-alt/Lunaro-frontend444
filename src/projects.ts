
import { useState } from "react";
import { ExternalLink, ArrowUpLeft } from "lucide-react";

type Project = {
  id: number;
  name: string;
  nameEn: string;
  category: string;
  image: string;
  website: string;
};

const projects: Project[] = [
  {
    id: 1,
    name: "اكتيف إيجيبت",
    nameEn: "ACTIV Egypt",
    category: "تجارة",
    image: "/projects/activ.jpg",
    website: "https://activ-eg.com",
  },
  {
    id: 2,
    name: "أبو شقرة",
    nameEn: "Abu Shakra",
    category: "مطاعم",
    image: "/projects/abu-shaqra.jpg",
    website: "https://abushakra.com",
  },
  {
    id: 3,
    name: "أسماك قدورة",
    nameEn: "Asmak Kadoura",
    category: "مطاعم",
    image: "/projects/kadoura.jpg",
    website: "https://kadoura.com",
  },
  {
    id: 4,
    name: "الحسن للمقاولات",
    nameEn: "Al Hassan Contracting",
    category: "مقاولات",
    image: "/projects/al-hassan.jpg",
    website: "https://www.hassanallam.com",
  },
  {
    id: 5,
    name: "تاون تيم",
    nameEn: "Town Team",
    category: "متاجر",
    image: "/projects/town-team.jpg",
    website: "https://townteam.com/ar/",
  },
  {
    id: 6,
    name: "حلواني العبد",
    nameEn: "El Abd Foods",
    category: "أغذية",
    image: "/projects/el-abd.jpg",
    website: "https://elabdfoods.com",
  },
  {
    id: 7,
    name: "ريماس لاند",
    nameEn: "Remas Land",
    category: "أغذية",
    image: "/projects/remas-land.jpg",
    website: "https://remaslandeg.com",
  },
  {
    id: 8,
    name: "سبيرو سباتس",
    nameEn: "Spiro Spathis",
    category: "مشروبات",
    image: "/projects/spiro-spathis.jpg",
    website: "https://spirospathis.com",
  },
  {
    id: 9,
    name: "عبور لاند",
    nameEn: "Obour Land",
    category: "أغذية",
    image: "/projects/obour-land.jpg",
    website: "https://obourland.com/ar/",
  },
  {
    id: 10,
    name: "فيت آند فيكس",
    nameEn: "Fit & Fix",
    category: "سيارات",
    image: "/projects/fit-and-fix.jpg",
    website: "https://www.fitandfix.com/ar",
  },
];

const categories = [
  "الكل",
  ...Array.from(new Set(projects.map((p) => p.category))),
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("الكل");

  const filteredProjects =
    activeCategory === "الكل"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section
      dir="rtl"
      className="relative min-h-screen overflow-hidden bg-[#060B13] px-5 py-24 text-white md:px-10"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-[450px] w-[450px] rounded-full bg-cyan-500/5 blur-[120px]" />
        <div className="absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-blue-500/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-14 text-center">
          <span className="mb-5 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/5 px-5 py-2 text-sm text-cyan-300">
            مشاريع ومواقع حقيقية
          </span>

          <h1 className="mb-5 text-4xl font-black tracking-tight md:text-6xl">
            استكشف <span className="text-cyan-400">المشاريع</span>
          </h1>

          <p className="mx-auto max-w-2xl text-base leading-8 text-slate-400 md:text-lg">
            مجموعة من المواقع الرقمية لعلامات تجارية وشركات حقيقية،
            استكشف كل موقع من خلال معاينته مباشرة.
          </p>

          <div className="mt-8 text-sm text-slate-500">
            <span className="font-bold text-cyan-400">
              {filteredProjects.length}
            </span>{" "}
            مشروع
          </div>
        </div>

        {/* Filters */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-xl border px-5 py-3 text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "border-cyan-400 bg-cyan-400 text-[#060B13]"
                  : "border-white/10 bg-white/[0.03] text-slate-400 hover:border-cyan-400/40 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0A141E] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:shadow-[0_15px_50px_rgba(0,229,255,0.07)]"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#111D29]">
                <img
                  src={project.image}
                  alt={`صورة موقع ${project.name}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#060B13]/70 via-transparent to-transparent" />

                <span className="absolute right-4 top-4 rounded-lg border border-white/10 bg-[#060B13]/80 px-3 py-1.5 text-xs text-cyan-300 backdrop-blur-md">
                  {project.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="mb-5">
                  <h2 className="text-xl font-bold text-white transition-colors group-hover:text-cyan-300">
                    {project.name}
                  </h2>
                  <p dir="ltr" className="mt-1 text-right text-sm text-slate-500">
                    {project.nameEn}
                  </p>
                </div>

                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-cyan-400/20 bg-cyan-400/[0.06] px-4 py-3 text-sm font-semibold text-cyan-300 transition-all hover:border-cyan-400/50 hover:bg-cyan-400/10"
                >
                  <ExternalLink size={16} />
                  معاينة الموقع
                  <ArrowUpLeft size={16} className="mr-auto" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-14 text-center text-xs leading-6 text-slate-500">
          المواقع المعروضة تخص أصحاب العلامات التجارية المذكورة،
          وتُستخدم للمعاينة المرجعية فقط.
        </div>
      </div>
    </section>
  );
}
