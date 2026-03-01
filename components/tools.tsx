"use client";

import { useLanguage } from "@/lib/language-context";

export function Tools() {
  const { t } = useLanguage();

  const tools = [
    {
      name: "Next.js",
      description: t("tools.nextjs.desc"),
      type: t("tools.code"),
    },
    {
      name: "WordPress",
      description: t("tools.wordpress.desc"),
      type: t("tools.cms"),
    },
    {
      name: "Wix",
      description: t("tools.wix.desc"),
      type: t("tools.nocode"),
    },
    {
      name: "Squarespace",
      description: t("tools.squarespace.desc"),
      type: t("tools.nocode"),
    },
    {
      name: "Shopify",
      description: t("tools.shopify.desc"),
      type: t("tools.ecommerce"),
    },
    {
      name: "Tiendanube",
      description: t("tools.tiendanube.desc"),
      type: t("tools.ecommerce"),
    },
  ];

  const stats = [
    { number: t("tools.stat1.number"), label: t("tools.stat1.label") },
    { number: t("tools.stat2.number"), label: t("tools.stat2.label") },
    { number: t("tools.stat3.number"), label: t("tools.stat3.label") },
    { number: t("tools.stat4.number"), label: t("tools.stat4.label") },
  ];

  return (
    <section id="tools" className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-4 md:grid-cols-12">
          {/* Title area */}
          <div className="rounded-3xl bg-card p-8 shadow-sm md:col-span-5 md:p-10">
            <span className="inline-block rounded-full bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent">
              {t("tools.tag")}
            </span>
            <h2 className="mt-5 font-serif text-2xl leading-tight tracking-tight text-foreground md:text-3xl">
              {t("tools.title")}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
              {t("tools.description")}
            </p>
          </div>

          {/* Stats card */}
          <div className="grid grid-cols-2 gap-4 md:col-span-7">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-center rounded-3xl bg-card p-6 shadow-sm"
              >
                <p className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
                  {stat.number}
                </p>
                <p className="mt-1 text-xs text-muted-foreground text-center">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tool cards */}
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool, i) => (
            <div
              key={tool.name}
              className={`rounded-3xl p-7 shadow-sm transition-all ${
                i === 0
                  ? "bg-primary text-primary-foreground"
                  : "bg-card hover:bg-secondary"
              }`}
            >
              <span
                className={`inline-block rounded-full px-3 py-1 text-[11px] font-semibold ${
                  i === 0
                    ? "bg-primary-foreground/15 text-primary-foreground"
                    : "bg-accent/10 text-accent"
                }`}
              >
                {tool.type}
              </span>
              <h3
                className={`mt-4 text-xl font-bold ${
                  i === 0 ? "text-primary-foreground" : "text-foreground"
                }`}
              >
                {tool.name}
              </h3>
              <p
                className={`mt-2 text-sm leading-relaxed ${
                  i === 0
                    ? "text-primary-foreground/70"
                    : "text-muted-foreground"
                }`}
              >
                {tool.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
