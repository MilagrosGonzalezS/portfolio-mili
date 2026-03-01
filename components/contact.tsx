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
          <div className="rounded-3xl bg-primary p-8 text-center md:col-span-8 md:p-14 md:text-left">
            <span className="inline-block rounded-full bg-primary-foreground/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary-foreground">
              {t("contact.tag")}
            </span>
            <h2 className="mt-5 font-serif text-2xl leading-tight tracking-tight text-primary-foreground md:text-3xl text-balance">
              {t("contact.title")}
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-primary-foreground/60 md:text-lg">
              {t("contact.description")}
            </p>
            <a
              href="mailto:milagrosgonzalez.sa@gmail.com"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-accent px-8 py-4 text-sm font-bold text-accent-foreground transition-all hover:brightness-95"
            >
              <Mail size={18} />
              milagrosgonzalez.sa@gmail.com
              <ArrowUpRight size={16} />
            </a>
          </div>

          {/* Side info cards */}
          <div className="flex flex-col gap-4 md:col-span-4">
            <div className="flex flex-1 items-center gap-4 rounded-3xl bg-card p-6 shadow-sm">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent/10">
                <MapPin size={20} className="text-accent" />
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">
                  Buenos Aires, AR
                </p>
                <p className="text-xs text-muted-foreground">
                  {t("contact.location")}
                </p>
              </div>
            </div>

            <div className="flex flex-1 flex-col justify-center rounded-3xl bg-accent p-6">
              <p className="text-3xl font-extrabold text-accent-foreground">
                25+
              </p>
              <p className="mt-1 text-sm text-accent-foreground/70">
                {t("tools.stat1.label")}
              </p>
            </div>

            <a
              href="mailto:milagrosgonzalez.sa@gmail.com"
              className="group flex flex-1 items-center justify-between rounded-3xl bg-card p-6 shadow-sm transition-colors hover:bg-secondary"
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
