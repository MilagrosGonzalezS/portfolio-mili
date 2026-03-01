"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { motion, AnimatePresence, useInView } from "framer-motion";

type CategoryKey =
  | "all"
  | "corporate"
  | "sports"
  | "health"
  | "artistic"
  | "weddings"
  | "entrepreneur";

interface Project {
  name: string;
  url: string;
  category: Exclude<CategoryKey, "all">;
  thumbnail: string;
}

const projects: Project[] = [
  // Entrepreneur
  {
    name: "Amarelo",
    url: "https://amarelocreativestudio.com.ar",
    category: "entrepreneur",
    thumbnail: "/thumbnails/amarelo.png",
  },
  {
    name: "Macana",
    url: "https://parrillasmacana.com",
    category: "entrepreneur",
    thumbnail: "/thumbnails/macana.png",
  },
  {
    name: "Concepto Fusion",
    url: "https://conceptofusion.com.ar/",
    category: "entrepreneur",
    thumbnail: "/thumbnails/concepto-fusion.png",
  },
  {
    name: "Chim & Churri",
    url: "https://www.chimandchurri.com/",
    category: "entrepreneur",
    thumbnail: "/thumbnails/chim-and-churri.png",
  },
  {
    name: "Beam",
    url: "https://beam.brokerhub.io/",
    category: "entrepreneur",
    thumbnail: "/thumbnails/beam.png",
  },
  // Sports
  {
    name: "Summa Sports",
    url: "https://sportsumma.com/",
    category: "sports",
    thumbnail: "/thumbnails/summa-sports.png",
  },
  {
    name: "Cracks",
    url: "https://cracksgroup.com/",
    category: "sports",
    thumbnail: "/thumbnails/cracks.png",
  },
  {
    name: "El Faro",
    url: "https://elfaroarg.com/",
    category: "sports",
    thumbnail: "/thumbnails/el-faro.png",
  },
  // Health
  {
    name: "Sofi Carmona",
    url: "https://soficarmona.com.ar/",
    category: "health",
    thumbnail: "/thumbnails/sofi-carmona.png",
  },
  {
    name: "Wuman",
    url: "https://wuman.com.ar/",
    category: "health",
    thumbnail: "/thumbnails/wuman.png",
  },
  // Weddings
  {
    name: "Milauti",
    url: "https://www.milauti.com.ar",
    category: "weddings",
    thumbnail: "/thumbnails/milauti.png",
  },
  {
    name: "Cande y Diego",
    url: "https://lagala-candeydiego.com.ar",
    category: "weddings",
    thumbnail: "/thumbnails/candiego.png",
  },
  {
    name: "Kate y Tute",
    url: "https://kateytute.com.ar",
    category: "weddings",
    thumbnail: "/thumbnails/kate-y-tute.png",
  },
  // Artistic
  {
    name: "Julieta Lopez",
    url: "https://julietalopez.com.ar/",
    category: "artistic",
    thumbnail: "/thumbnails/portfolio-juli.png",
  },
  {
    name: "Nina Vais",
    url: "https://www.ninavais.com/",
    category: "artistic",
    thumbnail: "/thumbnails/nina-vais.png",
  },
  // Corporate
  {
    name: "Thermotec",
    url: "https://www.thermotecuk.com/",
    category: "corporate",
    thumbnail: "/thumbnails/thermotec.png",
  },
  {
    name: "LegalDirect",
    url: "https://legaldirect.ca/",
    category: "corporate",
    thumbnail: "/thumbnails/legaldirect.png",
  },
  {
    name: "Headroom",
    url: "https://headroom.com.ar/",
    category: "corporate",
    thumbnail: "/thumbnails/headroom.png",
  },
  {
    name: "Startap",
    url: "https://startap.com.ar/",
    category: "corporate",
    thumbnail: "/thumbnails/startap.png",
  },
  {
    name: "Ecominera",
    url: "https://www.ecominera.com.ar/",
    category: "corporate",
    thumbnail: "/thumbnails/ecominera.png",
  },
  {
    name: "Cannizzo",
    url: "https://cannizzoconstrucciones.com/",
    category: "corporate",
    thumbnail: "/thumbnails/cannizzo.png",
  },
  {
    name: "iServe",
    url: "https://www.iserveoffices.com/",
    category: "corporate",
    thumbnail: "/thumbnails/iserve.png",
  },
  {
    name: "Media Lima",
    url: "https://agenciamedialima.com/",
    category: "corporate",
    thumbnail: "/thumbnails/media-lima.png",
  },
  {
    name: "Central de Carnes",
    url: "https://centraldecarnes.com.ar/",
    category: "corporate",
    thumbnail: "/thumbnails/central-de-carnes.png",
  },
  {
    name: "Event Trend",
    url: "https://event-trend.com/",
    category: "corporate",
    thumbnail: "/thumbnails/event-trend.png",
  },
  {
    name: "CLO",
    url: "https://clo.com.ar/",
    category: "corporate",
    thumbnail: "/thumbnails/clo.png",
  },
  {
    name: "JET",
    url: "https://jet.com.ar/",
    category: "corporate",
    thumbnail: "/thumbnails/jet.png",
  },
];

const featuredNames = [
  "Amarelo",
  "Summa Sports",
  "LegalDirect",
  "Wuman",
  "Julieta Lopez",
  "Milauti",
];
const allProjects = [
  ...featuredNames.map((name) => projects.find((p) => p.name === name)!),
  ...projects.filter((p) => !featuredNames.includes(p.name)),
];

const categoryKeys: CategoryKey[] = [
  "all",
  "entrepreneur",
  "sports",
  "health",
  "weddings",
  "artistic",
  "corporate",
];

const categoryColorMap: Record<Exclude<CategoryKey, "all">, string> = {
  corporate: "bg-foreground/8 text-foreground",
  sports: "bg-green-100 text-green-800",
  health: "bg-pink-100 text-pink-800",
  artistic: "bg-amber-100 text-amber-800",
  weddings: "bg-rose-100 text-rose-800",
  entrepreneur: "bg-sky-100 text-sky-800",
};

const ease = [0.22, 1, 0.36, 1] as const;

export function Projects() {
  const [active, setActive] = useState<CategoryKey>("all");
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const filtered =
    active === "all"
      ? allProjects
      : projects.filter((p) => p.category === active);

  const getCategoryLabel = (key: CategoryKey) => t(`projects.${key}`);

  return (
    <section id="work" className="px-6 py-12 md:py-24" ref={ref}>
      <div className="mx-auto max-w-7xl">
        {/* Header row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease }}
          className="mb-8 rounded-3xl bg-card p-8 shadow-sm md:p-10"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="inline-block rounded-full bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent">
                {t("projects.tag")}
              </span>
              <h2 className="mt-4 font-serif text-2xl leading-tight tracking-tight text-foreground md:text-3xl">
                {t("projects.title")}
              </h2>
              <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted-foreground md:text-base">
                {t("projects.description")}
              </p>
            </div>
            <motion.p
              key={filtered.length}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="shrink-0 text-sm text-muted-foreground"
            >
              {filtered.length} / {projects.length}
            </motion.p>
          </div>

          {/* Category pills */}
          <div
            className="mt-6 flex flex-wrap gap-2"
            role="tablist"
            aria-label="Filter projects by category"
          >
            {categoryKeys.map((cat) => (
              <motion.button
                key={cat}
                role="tab"
                aria-selected={active === cat}
                onClick={() => setActive(cat)}
                whileTap={{ scale: 0.95 }}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                  active === cat
                    ? "bg-accent text-accent-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {getCategoryLabel(cat)}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Project Grid with layout animation */}
        <motion.div
          layout
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          role="tabpanel"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.a
                key={project.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, ease }}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group overflow-hidden rounded-3xl bg-card shadow-sm transition-all hover:shadow-md"
              >
                <div className="relative aspect-video w-full overflow-hidden bg-muted">
                  <Image
                    src={project.thumbnail}
                    alt={`${project.name} website screenshot`}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/5" />
                  <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 opacity-0 backdrop-blur-sm transition-all group-hover:opacity-100">
                    <ExternalLink size={14} className="text-foreground" />
                  </div>
                </div>
                <div className="flex items-center justify-between px-5 py-4">
                  <h3 className="text-sm font-bold text-foreground">
                    {project.name}
                  </h3>
                  <span
                    className={`rounded-full px-3 py-0.5 text-[11px] font-medium ${
                      categoryColorMap[project.category]
                    }`}
                  >
                    {getCategoryLabel(project.category)}
                  </span>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
