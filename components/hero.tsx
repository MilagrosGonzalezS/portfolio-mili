"use client";

import { ArrowUpRight, MapPin } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { motion } from "framer-motion";

const countries = [
  { flag: "🇦🇷", name: "Argentina" },
  { flag: "🇺🇸", name: "USA" },
  { flag: "🇪🇸", name: "Spain" },
  { flag: "🇬🇧", name: "UK" },
  { flag: "🇨🇦", name: "Canada" },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative px-6 pt-20 md:pt-44 pb-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-4 md:grid-cols-12 md:grid-rows-[auto_auto_auto]">
          {/* Main hero card */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease }}
            className="flex flex-col justify-between rounded-3xl bg-accent p-8 md:col-span-7 md:row-span-3 md:p-12"
          >
            <div>
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.8, ease }}
                className="inline-block rounded-full bg-accent-foreground/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent-foreground"
              >
                {t("hero.tag")}
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 1.2, ease }}
                className="mt-6 font-serif text-4xl leading-[1.05] tracking-tight text-accent-foreground md:text-5xl lg:text-6xl"
              >
                Milagros
                <br />
                Gonzalez
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 1, ease }}
                className="mt-5 max-w-md text-base leading-relaxed text-accent-foreground/70 md:text-lg"
              >
                {t("hero.description")}
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.8, ease }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
              >
                {t("hero.viewWork")}
                <ArrowUpRight size={16} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-accent-foreground/10 px-6 py-3 text-sm font-semibold text-accent-foreground transition-all hover:bg-accent-foreground/20"
              >
                {t("hero.getInTouch")}
              </a>
            </motion.div>
          </motion.div>

          {/* Location card */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1, ease }}
            className="flex items-center gap-3 rounded-3xl bg-card p-6 shadow-sm md:col-span-5"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10">
              <MapPin size={18} className="text-accent" />
            </div>
            <div>
              <p className="font-serif text-xl text-foreground">
                Buenos Aires, AR
              </p>
              <p className="text-xs text-muted-foreground">
                {t("hero.location")}
              </p>
            </div>
          </motion.div>

          {/* Countries card */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 1, ease }}
            className="flex flex-col items-center justify-center rounded-3xl bg-card p-6 shadow-sm md:col-span-5 md:row-span-2"
          >
            <p className="mb-5 font-serif text-2xl text-center text-foreground">
              {t("hero.countries")}
            </p>
            <div className="flex flex-wrap max-w-sm justify-center gap-2.5">
              {countries.map((c, i) => (
                <motion.span
                  key={c.name}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.1 + i * 0.15, duration: 0.6, ease }}
                  className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2.5 transition-colors hover:bg-accent/10"
                >
                  <span className="text-2xl leading-none">{c.flag}</span>
                  <span className="text-sm font-medium text-foreground">
                    {c.name}
                  </span>
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
