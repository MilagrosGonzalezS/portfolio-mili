"use client";

import { Mail, ArrowUpRight, MapPin } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-4 md:grid-cols-12">
          {/* Main CTA card */}
          <div className="rounded-3xl bg-primary p-8 md:col-span-8 md:p-14">
            <span className="inline-block rounded-full bg-primary-foreground/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary-foreground">
              {t("contact.tag")}
            </span>
            <h2 className="mt-5 font-serif text-2xl leading-tight tracking-tight text-primary-foreground md:text-3xl text-balance">
              {t("contact.title")}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-primary-foreground/60 md:max-w-md md:text-lg">
              {t("contact.description")}
            </p>
            <a
              href="mailto:milagrosgonzalez.sa@gmail.com"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-[11px] font-bold text-accent-foreground transition-all hover:brightness-95 sm:gap-3 sm:px-8 sm:py-4 sm:text-xs"
            >
              <Mail size={16} className="shrink-0 sm:size-[18px]" />
              <span className="truncate">milagrosgonzalez.sa@gmail.com</span>
              <ArrowUpRight size={14} className="shrink-0 sm:size-4" />
            </a>
          </div>

          {/* Side info cards */}
          <div className="grid grid-cols-2 gap-4 md:grid-cols-1 md:col-span-4">
            <div className="flex items-center gap-3 rounded-3xl bg-card p-6 shadow-sm sm:gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-accent/10 sm:h-12 sm:w-12">
                <MapPin size={18} className="text-accent sm:size-5" />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-bold text-foreground">
                  Buenos Aires, AR
                </p>
                <p className="truncate text-xs text-muted-foreground">
                  {t("contact.location")}
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center rounded-3xl bg-accent p-6">
              <p className="text-2xl font-extrabold text-accent-foreground sm:text-3xl">
                25+
              </p>
              <p className="mt-1 text-xs text-accent-foreground/70 sm:text-sm">
                {t("tools.stat1.label")}
              </p>
            </div>

            <a
              href="mailto:milagrosgonzalez.sa@gmail.com"
              className="group col-span-2 flex items-center justify-between rounded-3xl bg-card p-6 shadow-sm transition-colors hover:bg-secondary md:col-span-1"
            >
              <p className="text-sm font-bold text-foreground">
                {t("nav.cta")}
              </p>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                <ArrowUpRight size={18} className="text-accent-foreground" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
