"use client";

import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative px-6 pt-24 pb-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-4 md:grid-cols-12 md:grid-rows-2">
          {/* Main hero card */}
          <div className="flex flex-col justify-between rounded-3xl bg-accent p-8 md:col-span-7 md:row-span-2 md:p-12">
            <div>
              <span className="inline-block rounded-full bg-accent-foreground/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent-foreground">
                {t("hero.tag")}
              </span>
              <h1 className="mt-6 font-serif text-4xl leading-[1.05] tracking-tight text-accent-foreground md:text-5xl lg:text-6xl">
                Milagros
                <br />
                Gonzalez
              </h1>
              <p className="mt-5 max-w-md text-base leading-relaxed text-accent-foreground/70 md:text-lg">
                {t("hero.description")}
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
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
            </div>
          </div>

          {/* Location card */}
          <div className="flex items-center gap-3 rounded-3xl bg-card p-6 shadow-sm md:col-span-5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10">
              <MapPin size={18} className="text-accent" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">
                Buenos Aires, AR
              </p>
              <p className="text-xs text-muted-foreground">
                {t("hero.location")}
              </p>
            </div>
          </div>

          {/* Scroll prompt card */}
          <a
            href="#about"
            className="group flex items-center justify-between rounded-3xl bg-card p-6 shadow-sm transition-colors hover:bg-secondary md:col-span-5"
          >
            <div>
              <p className="text-sm font-semibold text-foreground">
                {t("hero.scroll")}
              </p>
              <p className="text-xs text-muted-foreground">
                Explore my work & story
              </p>
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent transition-transform group-hover:translate-y-0.5">
              <ArrowDown size={18} className="text-accent-foreground" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
