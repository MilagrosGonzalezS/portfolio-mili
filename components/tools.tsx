"use client";

import { useRef } from "react";
import { useLanguage } from "@/lib/language-context";
import { motion, useInView } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export function Tools() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

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
    {
      name: t("tools.more.name"),
      description: t("tools.more.desc"),
      type: t("tools.more.type"),
    },
  ];

  const stats = [
    { number: t("tools.stat1.number"), label: t("tools.stat1.label") },
    { number: t("tools.stat2.number"), label: t("tools.stat2.label") },
    { number: t("tools.stat3.number"), label: t("tools.stat3.label") },
    { number: t("tools.stat4.number"), label: t("tools.stat4.label") },
  ];

  return (
    <section id="tools" className="px-6 py-12 md:py-24" ref={ref}>
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-4 md:grid-cols-12">
          {/* Title area */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease }}
            className="rounded-3xl bg-card p-8 shadow-sm md:col-span-5 md:p-10"
          >
            <span className="inline-block rounded-full bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent">
              {t("tools.tag")}
            </span>
            <h2 className="mt-5 font-serif text-2xl leading-tight tracking-tight text-foreground md:text-3xl">
              {t("tools.title")}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
              {t("tools.description")}
            </p>
          </motion.div>

          {/* Stats card */}
          <div className="grid grid-cols-2 gap-4 md:col-span-7">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.15, duration: 0.9, ease }}
                className="flex flex-col items-center justify-center rounded-3xl bg-card p-6 shadow-sm"
              >
                <p className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
                  {stat.number}
                </p>
                <p className="mt-1 text-xs text-muted-foreground text-center">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tool cards */}
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 + i * 0.12, duration: 0.9, ease }}
              whileHover={{ y: -4 }}
              className={`rounded-3xl p-7 shadow-sm transition-all ${
                i === 0
                  ? "bg-primary text-primary-foreground"
                  : i === tools.length - 1
                    ? "bg-card hover:bg-secondary sm:col-span-2 lg:col-span-2"
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
