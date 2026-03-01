"use client";

import { Code2, Layout, Palette } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export function About() {
  const { t } = useLanguage();

  const highlights = [
    {
      icon: Code2,
      title: t("about.highlight1.title"),
      description: t("about.highlight1.desc"),
      accent: true,
    },
    {
      icon: Layout,
      title: t("about.highlight2.title"),
      description: t("about.highlight2.desc"),
      accent: false,
    },
    {
      icon: Palette,
      title: t("about.highlight3.title"),
      description: t("about.highlight3.desc"),
      accent: false,
    },
  ];

  return (
    <section id="about" className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-4 md:grid-cols-12">
          {/* Title card */}
          <div className="rounded-3xl bg-card p-8 shadow-sm md:col-span-5 md:p-10">
            <span className="inline-block rounded-full bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent">
              {t("about.tag")}
            </span>
            <h2 className="mt-5 font-serif text-2xl leading-tight tracking-tight text-foreground md:text-3xl">
              {t("about.title")}
            </h2>
          </div>

          {/* Description card */}
          <div className="flex flex-col justify-center rounded-3xl bg-card p-8 shadow-sm md:col-span-7 md:p-10">
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              {t("about.p1")}
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              {t("about.p2")}
            </p>
          </div>
        </div>

        {/* Highlight cards */}
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {highlights.map((item, i) => (
            <div
              key={item.title}
              className={`group rounded-3xl p-8 transition-all ${
                i === 0
                  ? "bg-accent shadow-sm"
                  : "bg-card shadow-sm hover:bg-secondary"
              }`}
            >
              <div
                className={`mb-5 flex h-12 w-12 items-center justify-center rounded-2xl ${
                  i === 0 ? "bg-accent-foreground/20" : "bg-accent/10"
                }`}
              >
                <item.icon
                  size={22}
                  className={
                    i === 0 ? "text-accent-foreground" : "text-foreground"
                  }
                  strokeWidth={1.5}
                />
              </div>
              <h3
                className={`mb-2 text-lg font-bold ${
                  i === 0 ? "text-accent-foreground" : "text-foreground"
                }`}
              >
                {item.title}
              </h3>
              <p
                className={`text-sm leading-relaxed ${
                  i === 0
                    ? "text-accent-foreground/70"
                    : "text-muted-foreground"
                }`}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
