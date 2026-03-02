"use client";

import { useRef } from "react";
import { Mail, ArrowUpRight, MapPin, MessageCircle } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { motion, useInView } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export function Contact() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="px-6 py-12 md:py-24" ref={ref}>
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-4 md:grid-cols-12">
          {/* Main CTA card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease }}
            className="rounded-3xl bg-primary p-8 md:col-span-8 md:p-14"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.7, ease }}
              className="inline-block rounded-full bg-primary-foreground/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary-foreground"
            >
              {t("contact.tag")}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.45, duration: 0.9, ease }}
              className="mt-5 font-serif text-2xl leading-tight tracking-tight text-primary-foreground md:text-3xl text-balance"
            >
              {t("contact.title")}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.9, ease }}
              className="mt-4 text-base leading-relaxed text-primary-foreground/60 md:max-w-md md:text-lg"
            >
              {t("contact.description")}
            </motion.p>
            <div className="mt-8 flex flex-wrap gap-3">
              <motion.a
                href="mailto:milagrosgonzalez.sa@gmail.com"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8, duration: 0.8, ease }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-[11px] font-bold text-accent-foreground transition-all hover:brightness-95 sm:gap-3 sm:px-8 sm:py-4 sm:text-xs"
              >
                <Mail size={16} className="shrink-0 sm:size-[18px]" />
                <span className="truncate">milagrosgonzalez.sa@gmail.com</span>
                <ArrowUpRight size={14} className="shrink-0 sm:size-4" />
              </motion.a>
              <motion.a
                href="https://wa.me/5491153134245"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.9, duration: 0.8, ease }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-[11px] font-bold text-white transition-all hover:brightness-110 sm:gap-3 sm:px-8 sm:py-4 sm:text-xs"
              >
                <MessageCircle size={16} className="shrink-0 sm:size-[18px]" />
                <span>WhatsApp</span>
                <ArrowUpRight size={14} className="shrink-0 sm:size-4" />
              </motion.a>
            </div>
          </motion.div>

          {/* Side info cards */}
          <div className="grid grid-cols-2 gap-4 md:grid-cols-1 md:col-span-4">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.9, ease }}
              className="flex items-center gap-3 rounded-3xl bg-card p-6 shadow-sm sm:gap-4"
            >
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.55, duration: 0.9, ease }}
              className="flex flex-col justify-center rounded-3xl bg-accent p-6"
            >
              <p className="text-2xl font-extrabold text-accent-foreground sm:text-3xl">
                25+
              </p>
              <p className="mt-1 text-xs text-accent-foreground/70 sm:text-sm">
                {t("tools.stat1.label")}
              </p>
            </motion.div>

            <motion.a
              href="mailto:milagrosgonzalez.sa@gmail.com"
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.9, ease }}
              whileHover={{ scale: 1.02 }}
              className="group col-span-2 flex items-center justify-between rounded-3xl bg-card p-6 shadow-sm transition-colors hover:bg-secondary md:col-span-1"
            >
              <p className="text-sm font-bold text-foreground">
                {t("nav.cta")}
              </p>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                <ArrowUpRight size={18} className="text-accent-foreground" />
              </div>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
